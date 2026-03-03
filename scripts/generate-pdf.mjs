import PDFDocument from "pdfkit";
import { createWriteStream } from "fs";

const doc = new PDFDocument({ margin: 72, size: "LETTER" });
const out = createWriteStream("sales-call-script.pdf");
doc.pipe(out);

const BROWN = "#3B1A08";
const GRAY  = "#555555";
const LIGHT = "#888888";

function sectionHeader(num, title) {
  doc.moveDown(1.2);
  doc.moveTo(doc.page.margins.left, doc.y)
     .lineTo(doc.page.width - doc.page.margins.right, doc.y)
     .strokeColor("#CCCCCC").lineWidth(0.5).stroke();
  doc.moveDown(0.6);
  doc.font("Helvetica-Bold").fontSize(13).fillColor(BROWN)
     .text(`SECTION ${num} — ${title}`);
  doc.moveDown(0.3);
}

function goal(text) {
  doc.font("Helvetica-Bold").fontSize(10).fillColor(GRAY).text("Goal: ", { continued: true });
  doc.font("Helvetica-Oblique").fontSize(10).fillColor(GRAY).text(text);
  doc.moveDown(0.4);
}

function quote(text) {
  doc.font("Helvetica-Oblique").fontSize(10).fillColor(BROWN)
     .text(`"${text}"`, { indent: 28 });
  doc.moveDown(0.25);
}

function note(text) {
  doc.font("Helvetica").fontSize(9.5).fillColor(LIGHT)
     .text(text, { indent: 0 });
  doc.moveDown(0.3);
}

function body(text) {
  doc.font("Helvetica").fontSize(10).fillColor(GRAY).text(text);
  doc.moveDown(0.3);
}

function bullet(text) {
  doc.font("Helvetica").fontSize(10).fillColor(GRAY)
     .text(`• ${text}`, { indent: 20 });
  doc.moveDown(0.15);
}

// ── Title page ──────────────────────────────────────────────────────────────
doc.font("Helvetica-Bold").fontSize(22).fillColor(BROWN)
   .text("Sales Call Script", { align: "center" });
doc.moveDown(0.3);
doc.font("Helvetica").fontSize(12).fillColor(GRAY)
   .text("18-Section Framework", { align: "center" });
doc.moveDown(2);

// ── Section 1 ───────────────────────────────────────────────────────────────
sectionHeader(1, "OPENING & HUMAN RESET");
goal("Disarm, slow the call down, remove pressure, establish normalcy.");
quote("Appreciate you taking the time. No rush on my end — we'll just talk through what you've got going on.");
quote("Before we jump in — where are you located?");
note("(Allow brief human exchange. Do not rush. This is not rapport for rapport's sake — it's tone-setting.)");

// ── Section 2 ───────────────────────────────────────────────────────────────
sectionHeader(2, "BACKGROUND & AUTHORITY FROM THEM");
goal("Let the prospect prove they are competent. You never challenge it.");
quote("How long have you been doing this?");
quote("Have you been consistently in it, or have there been breaks over the years?");
note("(Let them talk. Take notes. Never interrupt.)");
body("If they have experience:");
quote("Got it. So you're not new to sales — you've been around the block.");
body("This subtly flips authority: you're not selling to them, you're collaborating with them.");

// ── Section 3 ───────────────────────────────────────────────────────────────
sectionHeader(3, "CURRENT SITUATION DIAGNOSIS");
goal("Understand what they're already doing without criticizing it.");
quote("What are you currently doing to generate business right now?");
quote("How long have you been doing that?");
quote("Over the last 30, 60, 90 days — how has production looked?");
body("If production is low or zero:");
quote("Okay — that's helpful.");
note("(Not: 'That's bad.' Just: data collected.)");

// ── Section 4 ───────────────────────────────────────────────────────────────
sectionHeader(4, "VALIDATION BEFORE REFRAME");
goal("Remove defensiveness. This is critical.");
quote("I don't want to sit here and tell you everything you've tried is garbage — that's usually not the case.");
quote("A lot of times it's timing, volume, or small shifts in how things are being done.");
body("This keeps the prospect open, not guarded.");

// ── Section 5 ───────────────────────────────────────────────────────────────
sectionHeader(5, "MARKET CONTEXT (EXTERNALIZE THE PROBLEM)");
goal("Shift blame away from the prospect without excusing inaction.");
quote("The last 6 months have been weird across a lot of industries.");
quote("Platforms change things. Vendors change things. What worked six months ago doesn't always work the same way now.");
body("Key line:");
quote("That doesn't mean you're doing anything wrong.");

// ── Section 6 ───────────────────────────────────────────────────────────────
sectionHeader(6, "VOLUME TRUTH (NON-NEGOTIABLE FRAME)");
goal("Establish a hard rule without sounding rigid.");
quote("I'm really big on expectations.");
quote("Do I think 10, 20, even 30 units of anything is a fair assessment? No — regardless of price or niche.");
body("Let them agree.");
quote("Volume solves a lot of problems.");
body("Then:");
quote("That's why we don't let people 'toe dip.' Minimum entry is 100 units.");
body("This is said calmly, not defensively.");

// ── Section 7 ───────────────────────────────────────────────────────────────
sectionHeader(7, "SOCIAL PROOF WITHOUT CHEST-BEATING");
goal("Normalize success without sounding salesy.");
quote("We've done this with hundreds — now over a thousand — people in different markets.");
quote("At that level of volume, people see results. They get conversations. They write business.");
body("No hype. No screenshots. Just certainty.");

// ── Section 8 ───────────────────────────────────────────────────────────────
sectionHeader(8, "BUYER ALIGNMENT (THEY QUALIFY THEMSELVES)");
goal("Confirm they're the right type of buyer.");
body("If they mention follow-up discipline:");
quote("If you weren't following up, I'd be concerned.");
quote("Anyone who doesn't follow up shouldn't be buying leads at all.");
body("This subtly positions you as selective, not desperate.");

// ── Section 9 ───────────────────────────────────────────────────────────────
sectionHeader(9, "EXPECTATION LOCK");
goal("Pre-handle future objections before price.");
quote("This isn't rainbows and butterflies.");
quote("Some people won't answer. Some won't be ready today.");
quote("But at scale, there are always enough conversations to produce.");
body("This prevents future buyer's remorse.");

// ── Section 10 ──────────────────────────────────────────────────────────────
sectionHeader(10, "GOAL EXTRACTION (THE REAL CLOSE STARTS HERE)");
goal("Anchor the sale to their number.");
quote("What does success actually look like for you?");
body("Let them say the number.");
body("Then:");
quote("That's realistic.");
body("Never oversell. Never inflate.");

// ── Section 11 ──────────────────────────────────────────────────────────────
sectionHeader(11, "MECHANISM EXPLANATION (PLAIN LANGUAGE)");
goal("Explain process, not features.");
quote("Here's how it works, start to finish.");
body("Then calmly walk through:");
bullet("How people are identified");
bullet("How interest is confirmed");
bullet("How information is captured");
bullet("How delivery happens");
bullet("How follow-up is supported");
doc.moveDown(0.2);
body("Key principle: You are explaining flow, not pitching tools.");

// ── Section 12 ──────────────────────────────────────────────────────────────
sectionHeader(12, "SUPPORT WITHOUT DEPENDENCY");
goal("Show support while reinforcing personal responsibility.");
quote("We handle the systems.");
quote("We give scripts, coaching, recordings.");
quote("But the one variable we can't control is whether someone actually shows up and works.");
body("This filters out tire-kickers without saying it directly.");

// ── Section 13 ──────────────────────────────────────────────────────────────
sectionHeader(13, "PRICE (NO FLINCH, NO JUSTIFICATION)");
goal("Deliver price like a fact, not a pitch.");
quote("Here's how pricing works.");
body("State:");
bullet("Unit cost");
bullet("Minimum quantity");
bullet("One-time setup (if applicable)");
bullet("Any deadline-based incentive");
doc.moveDown(0.2);
body("Then stop talking.");

// ── Section 14 ──────────────────────────────────────────────────────────────
sectionHeader(14, "STRUCTURED COMMITMENT");
goal("Reduce friction while securing the deal.");
quote("What usually makes the most sense is locking the setup first, then funding delivery once everything's built.");
quote("What start date works best for you?");
body("This assumes the decision is how, not if.");

// ── Section 15 ──────────────────────────────────────────────────────────────
sectionHeader(15, "TIMING FLEXIBILITY (WITHOUT WEAKNESS)");
goal("Keep control even when accommodating.");
quote("We can absolutely set kickoff for later.");

// ── Section 17 ──────────────────────────────────────────────────────────────
sectionHeader(17, "OPERATIONAL HANDOFF");
goal("End clean, confident, and organized.");
quote("You'll get an email with receipts, onboarding, and next steps.");
quote("Once you're in Slack, we'll get kickoff scheduled.");
body("No excitement spike. Calm certainty.");

// ── Section 18 ──────────────────────────────────────────────────────────────
sectionHeader(18, "PERSONAL CLOSE");
goal("Leave them confident they chose a person, not a company.");
quote("If you need anything, text me directly.");
quote("We'll take care of you.");
doc.moveDown(0.5);
doc.font("Helvetica-Bold").fontSize(11).fillColor(BROWN).text("End.");

doc.end();
out.on("finish", () => console.log("✅  PDF saved → sales-call-script.pdf"));
