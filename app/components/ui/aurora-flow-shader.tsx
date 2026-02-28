"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";

export interface AuroraFlowShaderProps {
  /** Vertical amplitude of the ribbons */
  amplitude?: number;
  /** Horizontal frequency of the ribbons */
  frequency?: number;
  /** When true, fills parent (e.g. hero section) with transparent bg; when false, fixed full-screen */
  contained?: boolean;
  /** Extra wrapper classes (e.g. opacity, blend modes) */
  className?: string;
  /** Inline styles for positioning */
  style?: React.CSSProperties;
}

/**
 * AuroraFlowShader
 *
 * Full-screen or contained aurora-style ribbons that ebb and flow like northern lights.
 * Use contained=true inside a relative parent (e.g. hero) for a section-only background.
 */
export default function AuroraFlowShader({
  amplitude = 0.3,
  frequency = 4.0,
  contained = false,
  className = "",
  style = {},
}: AuroraFlowShaderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const materialRef = useRef<THREE.ShaderMaterial | null>(null);

  // Sync props → uniforms
  useEffect(() => {
    const mat = materialRef.current;
    if (mat) {
      mat.uniforms.uAmplitude.value = amplitude;
      mat.uniforms.uFrequency.value = frequency;
    }
  }, [amplitude, frequency]);

  // Three.js setup & render loop
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: contained,
    });
    if (contained) {
      renderer.setClearColor(0x000000, 0);
    }
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    const clock = new THREE.Clock();

    const vertexShader = `
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = vec4(position, 1.0);
      }
    `;

    const fragmentShader = `
      precision mediump float;
      uniform vec2 iResolution;
      uniform float iTime;
      uniform float uAmplitude;
      uniform float uFrequency;
      varying vec2 vUv;

      float ridge(float x) {
        return abs(2.0 * fract(x) - 1.0);
      }

      void mainImage(out vec4 O, in vec2 uv) {
        vec2 p = uv - 0.5;
        p.x *= iResolution.x / iResolution.y;

        float y = p.y + iTime * 0.1;
        float wave = ridge((p.x * uFrequency) + sin(y * 2.0 + iTime * 0.5));

        float alpha = smoothstep(uAmplitude, uAmplitude + 0.02, wave)
                    - smoothstep(uAmplitude + 0.02, uAmplitude + 0.04, wave);

        vec3 color = mix(
          vec3(0.2, 0.8, 0.7),
          vec3(0.8, 0.2, 0.7),
          uv.y
        );

        O = vec4(color * alpha, alpha);
      }

      void main() {
        mainImage(gl_FragColor, vUv);
      }
    `;

    const uniforms = {
      iTime: { value: 0 },
      iResolution: { value: new THREE.Vector2() },
      uAmplitude: { value: amplitude },
      uFrequency: { value: frequency },
    };

    const material = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms,
      transparent: contained,
      depthWrite: false,
    });
    materialRef.current = material;
    const quad = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), material);
    scene.add(quad);

    const onResize = () => {
      const w = container.clientWidth;
      const h = container.clientHeight;
      renderer.setSize(w, h);
      uniforms.iResolution.value.set(w, h);
    };
    window.addEventListener("resize", onResize);
    onResize();

    renderer.setAnimationLoop(() => {
      uniforms.iTime.value = clock.getElapsedTime();
      renderer.render(scene, camera);
    });

    return () => {
      window.removeEventListener("resize", onResize);
      renderer.setAnimationLoop(null);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      material.dispose();
      quad.geometry.dispose();
      renderer.dispose();
      materialRef.current = null;
    };
  }, [contained]);

  const positionClass = contained ? "absolute inset-0" : "fixed inset-0";
  const bgClass = contained ? "" : "bg-background";

  return (
    <div
      ref={containerRef}
      className={`${positionClass} ${bgClass} ${className}`.trim()}
      style={style}
      aria-hidden
    />
  );
}
