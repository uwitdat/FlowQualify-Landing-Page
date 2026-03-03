"use client";

import { NotionRenderer } from "react-notion-x";
import type { ExtendedRecordMap } from "notion-types";
import "react-notion-x/src/styles.css";

export function NotionPage({ recordMap }: { recordMap: ExtendedRecordMap }) {
  return (
    <div className="notion-wrap">
      <NotionRenderer
        recordMap={recordMap}
        fullPage={false}
        darkMode={false}
        disableHeader
      />
      <style>{`
        .notion-wrap .notion-page {
          padding: 0;
          font-family: system-ui, -apple-system, sans-serif;
        }
        .notion-wrap .notion-text,
        .notion-wrap .notion-bulleted_list,
        .notion-wrap .notion-numbered_list {
          color: #22150d;
        }
        .notion-wrap .notion-h1,
        .notion-wrap .notion-h2,
        .notion-wrap .notion-h3 {
          color: #22150d;
        }
        .notion-wrap .notion-link {
          color: #22150d;
          border-bottom-color: #FFFF8B;
        }
        .notion-wrap img {
          border-radius: 8px;
        }
      `}</style>
    </div>
  );
}
