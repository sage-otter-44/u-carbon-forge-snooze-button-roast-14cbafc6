// Snooze Button Roast — one line roasting an alarm clock that rings at 6 AM on a Saturday.
//
// Joke shape (winner-study rule): concrete scene up front (the alarm as an overeager
// employee), then the twist lands in the last few words — it clocks in early on its
// day off and does not even get paid. Tight, one breath, no vague morning-grumbling.
import { writeFileSync, mkdirSync } from "node:fs";

const LINE =
  "My alarm went off at 6 AM on a Saturday — the only employee in this house who shows up early on its day off, and it doesn't even get paid.";

// Gate check: the sealed scorer requires 1–200 UTF-8 characters, one line, not blank.
const text = LINE.trim();
if (text.length < 1 || text.length > 200 || text.includes("\n")) {
  throw new Error(`entry gate failed: ${text.length} chars`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text, "utf8");
console.log(`wrote ${text.length} chars to /output/entry.txt`);
