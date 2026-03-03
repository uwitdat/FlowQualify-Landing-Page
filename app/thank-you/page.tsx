import { NotionAPI } from "notion-client";
import { NotionPage } from "./NotionPage";

const notion = new NotionAPI();
const NOTION_PAGE_ID = "315217377d53816084fed7232bb2f3e1";

export default async function ThankYouPage() {
  const recordMap = await notion.getPage(NOTION_PAGE_ID);

  return (
    <div style={{
      minHeight: "100vh",
      background: "#ffffff",
      fontFamily: "system-ui, -apple-system, sans-serif",
    }}>
      {/* Header */}
      <div style={{
        textAlign: "center",
        padding: "48px 32px 32px",
        maxWidth: "720px",
        margin: "0 auto",
        width: "100%",
      }}>
        {/* Checkmark badge */}
        <div style={{
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          width: "56px",
          height: "56px",
          background: "#FFFF8B",
          borderRadius: "50%",
          marginBottom: "20px",
        }}>
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#22150d" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>

        <h1 style={{
          fontSize: "clamp(28px, 4vw, 48px)",
          fontWeight: 900,
          color: "#22150d",
          lineHeight: 1.1,
          letterSpacing: "-0.025em",
          margin: "0 0 14px",
        }}>
          You&apos;re booked.
        </h1>

        <p style={{
          fontSize: "18px",
          color: "rgba(34,21,13,0.6)",
          margin: "0 0 8px",
          lineHeight: 1.5,
        }}>
          Check your email for a confirmation — we&apos;ll see you on the call.
        </p>

        <p style={{
          fontSize: "15px",
          color: "rgba(34,21,13,0.45)",
          margin: "0 0 36px",
        }}>
          Read what&apos;s below so you&apos;re prepared.
        </p>

        <div style={{ borderTop: "1px solid rgba(0,0,0,0.08)", width: "100%" }} />
      </div>

      {/* Notion content */}
      <div style={{
        maxWidth: "900px",
        width: "100%",
        margin: "0 auto",
        padding: "0 24px 80px",
        boxSizing: "border-box",
      }}>
        <NotionPage recordMap={recordMap} />
      </div>
    </div>
  );
}
