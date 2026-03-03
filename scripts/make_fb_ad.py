"""
Generate a realistic Facebook ad PNG for A&B Renovations.
"""

from PIL import Image, ImageDraw, ImageFont, ImageFilter
import os, math

# ── Paths ──────────────────────────────────────────────────────────────────────
ROOT = os.path.join(os.path.dirname(__file__), "..")
PHOTO_PATH = os.path.join(ROOT, "basic3.png")
OUT_PATH   = os.path.join(ROOT, "public", "fb-ad-ab-renovations.png")

# ── Canvas ─────────────────────────────────────────────────────────────────────
CARD_W, CARD_H = 540, 740
RADIUS = 14
BG      = (240, 242, 245)
WHITE   = (255, 255, 255)
FB_BLUE = (24,  119, 242)
DARK    = (28,  30,  33)
GREY    = (101, 103, 107)
LIGHT   = (228, 230, 235)
AMBER   = (201, 168,  76)
AMBER_D = (160, 128,  48)   # darker amber for avatar ring

img  = Image.new("RGBA", (CARD_W + 40, CARD_H + 40), BG + (255,))
draw = ImageDraw.Draw(img)

# ── Helpers ────────────────────────────────────────────────────────────────────
def rounded_rect(draw, xy, radius, fill, outline=None, outline_width=1):
    x0, y0, x1, y1 = xy
    r = radius
    draw.rectangle([x0+r, y0, x1-r, y1], fill=fill)
    draw.rectangle([x0, y0+r, x1, y1-r], fill=fill)
    for cx, cy in [(x0,y0),(x1-2*r,y0),(x0,y1-2*r),(x1-2*r,y1-2*r)]:
        draw.ellipse([cx, cy, cx+2*r, cy+2*r], fill=fill)
    if outline:
        draw.arc([x0,y0,x0+2*r,y0+2*r], 180, 270, fill=outline, width=outline_width)
        draw.arc([x1-2*r,y0,x1,y0+2*r], 270, 360, fill=outline, width=outline_width)
        draw.arc([x0,y1-2*r,x0+2*r,y1],  90, 180, fill=outline, width=outline_width)
        draw.arc([x1-2*r,y1-2*r,x1,y1],   0,  90, fill=outline, width=outline_width)
        draw.line([x0+r,y0,x1-r,y0], fill=outline, width=outline_width)
        draw.line([x0+r,y1,x1-r,y1], fill=outline, width=outline_width)
        draw.line([x0,y0+r,x0,y1-r], fill=outline, width=outline_width)
        draw.line([x1,y0+r,x1,y1-r], fill=outline, width=outline_width)

def load_font(size, bold=False):
    paths = (["C:/Windows/Fonts/arialbd.ttf","C:/Windows/Fonts/calibrib.ttf"]
             if bold else
             ["C:/Windows/Fonts/arial.ttf","C:/Windows/Fonts/calibri.ttf"])
    for p in paths:
        try: return ImageFont.truetype(p, size)
        except: pass
    return ImageFont.load_default()

CX, CY = 20, 20
rounded_rect(draw, (CX, CY, CX+CARD_W, CY+CARD_H), RADIUS, WHITE, outline=LIGHT, outline_width=1)

# ── Fonts ──────────────────────────────────────────────────────────────────────
f_name    = load_font(17, bold=True)
f_sub     = load_font(14)
f_head    = load_font(15, bold=True)
f_subtext = load_font(13)
f_btn     = load_font(16, bold=True)
f_url     = load_font(11)
f_av_lg   = load_font(16, bold=True)   # avatar initials
f_av_sm   = load_font(11, bold=True)

# ── Profile row ────────────────────────────────────────────────────────────────
PAD   = 16
AV_R  = 26
AV_CX = CX + PAD + AV_R
AV_CY = CY + PAD + AV_R + 4

# Avatar: layered circle for depth — outer ring, inner fill, gradient-ish shine
draw.ellipse([AV_CX-AV_R-2, AV_CY-AV_R-2, AV_CX+AV_R+2, AV_CY+AV_R+2],
             fill=AMBER_D)                                     # dark border ring
draw.ellipse([AV_CX-AV_R, AV_CY-AV_R, AV_CX+AV_R, AV_CY+AV_R],
             fill=AMBER)                                        # amber fill
# Subtle highlight arc top-left
draw.arc([AV_CX-AV_R+3, AV_CY-AV_R+3, AV_CX+AV_R-3, AV_CY+AV_R-3],
         200, 320, fill=(230, 195, 110), width=4)

# Initials — two lines: "A&B" on top, "Reno" below
line1, line2 = "A&B", "Reno"
bb1 = draw.textbbox((0,0), line1, font=f_av_lg)
bb2 = draw.textbbox((0,0), line2, font=f_av_sm)
tw1, th1 = bb1[2]-bb1[0], bb1[3]-bb1[1]
tw2, th2 = bb2[2]-bb2[0], bb2[3]-bb2[1]
total_h = th1 + 2 + th2
draw.text((AV_CX - tw1//2, AV_CY - total_h//2 - 1), line1, font=f_av_lg, fill=WHITE)
draw.text((AV_CX - tw2//2, AV_CY - total_h//2 + th1 + 2), line2, font=f_av_sm, fill=(255,255,255,180))

# Company name + Sponsored line
TEXT_X = AV_CX + AV_R + 12
draw.text((TEXT_X, AV_CY - AV_R + 2),  "A&B Renovations", font=f_name, fill=DARK)
draw.text((TEXT_X, AV_CY - AV_R + 24), "Sponsored", font=f_sub, fill=GREY)
# Small globe icon (circle + cross)
GX = TEXT_X + 74
GY = AV_CY - AV_R + 27
draw.ellipse([GX, GY, GX+11, GY+11], outline=GREY, width=1)
draw.line([GX+5, GY, GX+5, GY+11], fill=GREY, width=1)
draw.line([GX, GY+5, GX+11, GY+5], fill=GREY, width=1)

# Three-dot menu
DOT_X = CX + CARD_W - PAD - 5
DOT_Y = CY + PAD + 14
for i in range(3):
    draw.ellipse([DOT_X, DOT_Y+i*7, DOT_X+5, DOT_Y+i*7+5], fill=GREY)

# ── Kitchen photo ──────────────────────────────────────────────────────────────
PHOTO_TOP = CY + PAD*2 + AV_R*2 + 8
PHOTO_H   = 310

try:
    kitchen = Image.open(PHOTO_PATH).convert("RGB")
    kw, kh = kitchen.size
    ratio = CARD_W / kw
    new_h = int(kh * ratio)
    kitchen = kitchen.resize((CARD_W, new_h), Image.LANCZOS)
    crop_top = max(0, (new_h - PHOTO_H) // 2)
    kitchen = kitchen.crop((0, crop_top, CARD_W, crop_top + PHOTO_H))
    img.paste(kitchen, (CX, PHOTO_TOP))
except Exception as e:
    draw.rectangle([CX, PHOTO_TOP, CX+CARD_W, PHOTO_TOP+PHOTO_H], fill=(180,180,180))

# ── Play button overlay ────────────────────────────────────────────────────────
PC_X = CX + CARD_W // 2
PC_Y = PHOTO_TOP + PHOTO_H // 2
PR   = 38   # outer circle radius

# Semi-transparent dark circle
play_layer = Image.new("RGBA", img.size, (0,0,0,0))
play_draw  = ImageDraw.Draw(play_layer)
play_draw.ellipse([PC_X-PR, PC_Y-PR, PC_X+PR, PC_Y+PR], fill=(0, 0, 0, 140))
# White ring
play_draw.ellipse([PC_X-PR, PC_Y-PR, PC_X+PR, PC_Y+PR], outline=(255,255,255,220), width=3)
# Triangle (play arrow) — centred, shifted right slightly
tri_cx, tri_cy = PC_X + 4, PC_Y
tri_size = 18
triangle = [
    (tri_cx - tri_size//2,     tri_cy - int(tri_size*0.87)),
    (tri_cx - tri_size//2,     tri_cy + int(tri_size*0.87)),
    (tri_cx + tri_size,        tri_cy),
]
play_draw.polygon(triangle, fill=(255, 255, 255, 230))
img = Image.alpha_composite(img, play_layer)
draw = ImageDraw.Draw(img)   # refresh draw handle after composite

# ── Caption strip ───────────────────────────────────────────────────────────────
CAP_Y   = PHOTO_TOP + PHOTO_H
STRIP_H = 80
rounded_rect(draw, (CX, CAP_Y, CX+CARD_W, CAP_Y+STRIP_H), 0, (242, 243, 245))
draw.line([CX, CAP_Y, CX+CARD_W, CAP_Y], fill=LIGHT, width=1)

draw.text((CX+PAD, CAP_Y+10), "FLOWQUALIFY.COM", font=f_url, fill=GREY)

# Headline — two lines to fit nicely
headline1 = "Dreaming of a New Kitchen?"
headline2 = "New Cabinets or Countertops? Let's Talk!"
draw.text((CX+PAD, CAP_Y+26), headline1, font=f_head, fill=DARK)
draw.text((CX+PAD, CAP_Y+45), headline2, font=load_font(14, bold=True), fill=DARK)

# Subtext
draw.text((CX+PAD, CAP_Y+STRIP_H-16), "Message us your project ideas — we'd love to help.", font=f_subtext, fill=GREY)

# ── Send Message button ─────────────────────────────────────────────────────────
BTN_Y = CAP_Y + STRIP_H + 10
BTN_H = 44
BTN_W = CARD_W - PAD*2
rounded_rect(draw, (CX+PAD, BTN_Y, CX+PAD+BTN_W, BTN_Y+BTN_H), 8, (232, 240, 254))

# Messenger icon (simple M-shape) before text
MSG_X = CX + PAD + BTN_W//2 - 72
MSG_Y = BTN_Y + 14
draw.ellipse([MSG_X, MSG_Y, MSG_X+18, MSG_Y+18], fill=FB_BLUE)
draw.polygon([(MSG_X+2,MSG_Y+14),(MSG_X+4,MSG_Y+9),(MSG_X+9,MSG_Y+12),
              (MSG_X+14,MSG_Y+9),(MSG_X+16,MSG_Y+14),(MSG_X+9,MSG_Y+11)],
             fill=WHITE)

draw.text((MSG_X+24, BTN_Y+13), "Send Message", font=f_btn, fill=FB_BLUE)

# ── Reactions bar ───────────────────────────────────────────────────────────────
BAR_Y   = BTN_Y + BTN_H + 10
REACT_Y = BAR_Y + 8
draw.line([CX+PAD, BAR_Y, CX+CARD_W-PAD, BAR_Y], fill=LIGHT, width=1)
for i, label in enumerate(["👍  Like", "💬  Comment", "↗  Share"]):
    draw.text((CX+PAD + i*168, REACT_Y), label, font=f_sub, fill=GREY)

# ── Save ───────────────────────────────────────────────────────────────────────
img_rgb = img.convert("RGB")
os.makedirs(os.path.dirname(OUT_PATH), exist_ok=True)
img_rgb.save(OUT_PATH, "PNG")
print(f"Saved: {OUT_PATH}")
