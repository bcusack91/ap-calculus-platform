import type { SAQItem } from '@/components/FullLengthPracticeExam'

/**
 * AP Computer Science A — 4 FRQs in 90 minutes.
 *
 *   Q1 Methods & Control Structures
 *   Q2 Class
 *   Q3 Array/ArrayList
 *   Q4 2D Array
 *
 * All Java code shown follows the AP Java subset.
 */

export const FRQS: SAQItem[] = [
  /* ---- Q1: Methods & Control Structures ---- */
  {
    type: 'saq',
    topic: 'frq-methods',
    stimulus: `**FRQ #1 — Methods & Control Structures: Discount Calculator (9 points)**

A retail store offers a tiered discount:
- subtotal < \\$50.00 ⇒ no discount
- \\$50.00 ≤ subtotal < \\$100.00 ⇒ 10% off
- \\$100.00 ≤ subtotal < \\$250.00 ⇒ 15% off
- subtotal ≥ \\$250.00 ⇒ 20% off

Additionally, members of the loyalty program receive an extra 5% off the *already-discounted* total. Sales tax of 7% is then applied to the final amount.`,
    parts: [
      {
        prompt: '(a) Write the complete method `public static double discountRate(double subtotal)` that returns the discount rate (as a decimal) corresponding to the subtotal: 0.0, 0.10, 0.15, or 0.20. (3 pts)',
        rubric: '```java\npublic static double discountRate(double subtotal) {\n  if (subtotal < 50.00) return 0.0;\n  else if (subtotal < 100.00) return 0.10;\n  else if (subtotal < 250.00) return 0.15;\n  else return 0.20;\n}\n```\n+1 correct method header. +1 correct boundary tests using if/else if (mutually exclusive). +1 correct return values for all four ranges.',
      },
      {
        prompt: '(b) Write the complete method `public static double finalTotal(double subtotal, boolean isMember)` that returns the final amount the customer must pay, including any tier discount, the 5% member discount (if applicable), and 7% sales tax. Your method should call `discountRate`. (4 pts)',
        rubric: '```java\npublic static double finalTotal(double subtotal, boolean isMember) {\n  double afterTier = subtotal * (1 - discountRate(subtotal));\n  if (isMember) afterTier = afterTier * 0.95;\n  return afterTier * 1.07;\n}\n```\n+1 calls discountRate(subtotal) correctly. +1 applies tier discount to subtotal. +1 applies 5% member discount only when isMember is true (and to the already-discounted total). +1 applies 7% sales tax as the final step.',
      },
      {
        prompt: '(c) Trace your `finalTotal` method for `finalTotal(120.00, true)`. Show each intermediate value and the final returned amount. (2 pts)',
        rubric: 'discountRate(120.00) returns 0.15 (since 100 ≤ 120 < 250).\nafterTier = 120.00 × (1 − 0.15) = 120.00 × 0.85 = 102.00.\nMember: afterTier = 102.00 × 0.95 = 96.90.\nReturn: 96.90 × 1.07 = 103.683.\n+1 correct intermediate values. +1 correct final value (≈ 103.68).',
      },
    ],
  },

  /* ---- Q2: Class ---- */
  {
    type: 'saq',
    topic: 'frq-class',
    stimulus: `**FRQ #2 — Class Design: GiftCard (9 points)**

Design a class \`GiftCard\` that models a prepaid gift card. A GiftCard has:
- a final \`String code\` (the card identifier),
- a \`double balance\` (the current balance, never negative),
- a \`boolean active\` (the card is initially active; can be deactivated, but never reactivated).

The class supports:
- \`GiftCard(String code, double initialBalance)\` — constructor; initialBalance must be ≥ 0; if not, set balance to 0.
- \`double getBalance()\` and \`String getCode()\` — accessors.
- \`boolean charge(double amount)\` — if active and amount > 0 and amount ≤ balance, deduct amount and return true; otherwise return false.
- \`void deactivate()\` — sets active to false. Once deactivated, the card cannot be re-activated and \`charge\` always returns false.`,
    parts: [
      {
        prompt: '(a) Write the complete class declaration including instance variables and the constructor. (3 pts)',
        rubric: '```java\npublic class GiftCard {\n  private final String code;\n  private double balance;\n  private boolean active;\n\n  public GiftCard(String code, double initialBalance) {\n    this.code = code;\n    if (initialBalance >= 0) this.balance = initialBalance;\n    else this.balance = 0;\n    this.active = true;\n  }\n}\n```\n+1 class header + correct private instance variables (code is final). +1 constructor signature and assignment of code. +1 conditional initialization of balance + active = true.',
      },
      {
        prompt: '(b) Write the methods `getBalance()`, `getCode()`, and `deactivate()`. (2 pts)',
        rubric: '```java\npublic double getBalance() { return balance; }\npublic String getCode()    { return code; }\npublic void deactivate()   { active = false; }\n```\n+1 both accessors correct. +1 deactivate sets active to false (no return value).',
      },
      {
        prompt: '(c) Write the `charge` method. (4 pts)',
        rubric: '```java\npublic boolean charge(double amount) {\n  if (!active) return false;\n  if (amount <= 0) return false;\n  if (amount > balance) return false;\n  balance -= amount;\n  return true;\n}\n```\n+1 returns false when not active. +1 rejects non-positive amounts. +1 rejects amounts greater than balance. +1 deducts and returns true on valid charge.',
      },
    ],
  },

  /* ---- Q3: ArrayList ---- */
  {
    type: 'saq',
    topic: 'frq-array-arraylist',
    stimulus: `**FRQ #3 — ArrayList: TestScores (9 points)**

A teacher uses \`ArrayList<Integer>\` to track student test scores (each score is between 0 and 100, inclusive).`,
    parts: [
      {
        prompt: '(a) Write `public static double mean(ArrayList<Integer> scores)` that returns the arithmetic mean of the scores. If the list is empty, return 0.0. (3 pts)',
        rubric: '```java\npublic static double mean(ArrayList<Integer> scores) {\n  if (scores.size() == 0) return 0.0;\n  int sum = 0;\n  for (int s : scores) sum += s;\n  return (double) sum / scores.size();\n}\n```\n+1 correct empty-list handling. +1 correct sum loop using enhanced for. +1 returns sum / size as a double (with cast or double division).',
      },
      {
        prompt: '(b) Write `public static int countAbove(ArrayList<Integer> scores, double threshold)` that returns the number of scores strictly greater than threshold. (3 pts)',
        rubric: '```java\npublic static int countAbove(ArrayList<Integer> scores, double threshold) {\n  int count = 0;\n  for (int s : scores) {\n    if (s > threshold) count++;\n  }\n  return count;\n}\n```\n+1 correct loop. +1 strict-inequality comparison. +1 returns count.',
      },
      {
        prompt: '(c) Write `public static void curve(ArrayList<Integer> scores, int bonus)` that adds `bonus` to every score, capping each adjusted score at 100. The method modifies the parameter directly. (3 pts)',
        rubric: '```java\npublic static void curve(ArrayList<Integer> scores, int bonus) {\n  for (int i = 0; i < scores.size(); i++) {\n    int adjusted = scores.get(i) + bonus;\n    if (adjusted > 100) adjusted = 100;\n    scores.set(i, adjusted);\n  }\n}\n```\n+1 indexed for-loop (enhanced for cannot mutate via .set easily). +1 cap at 100. +1 uses .set(i, value) to update in place.',
      },
    ],
  },

  /* ---- Q4: 2D Array ---- */
  {
    type: 'saq',
    topic: 'frq-2d-array',
    stimulus: `**FRQ #4 — 2D Array: Seating Chart (9 points)**

A theater is represented by a 2D array \`String[][] seats\`, where \`seats[r][c]\` is one of:
- \`"."\` (empty seat)
- \`"X"\` (occupied)
- \`"#"\` (broken/unavailable)`,
    parts: [
      {
        prompt: '(a) Write `public static int countEmpty(String[][] seats)` that returns the total number of "." entries in the array. (3 pts)',
        rubric: '```java\npublic static int countEmpty(String[][] seats) {\n  int count = 0;\n  for (int r = 0; r < seats.length; r++) {\n    for (int c = 0; c < seats[r].length; c++) {\n      if (seats[r][c].equals(".")) count++;\n    }\n  }\n  return count;\n}\n```\n+1 nested for-loops with correct bounds (seats.length, seats[r].length). +1 .equals comparison (NOT == for String). +1 increment + return.',
      },
      {
        prompt: '(b) Write `public static boolean rowFull(String[][] seats, int row)` that returns true if no seat in the given row is "." (every seat is either "X" or "#"). (3 pts)',
        rubric: '```java\npublic static boolean rowFull(String[][] seats, int row) {\n  for (int c = 0; c < seats[row].length; c++) {\n    if (seats[row][c].equals(".")) return false;\n  }\n  return true;\n}\n```\n+1 single loop over columns of the given row. +1 early-return false on first ".". +1 return true after loop completes.',
      },
      {
        prompt: '(c) Write `public static boolean seatGroup(String[][] seats, int row, int n)` that returns true if there exist n consecutive "." seats in the given row (i.e., a group of n adjacent empty seats). (3 pts)',
        rubric: '```java\npublic static boolean seatGroup(String[][] seats, int row, int n) {\n  int run = 0;\n  for (int c = 0; c < seats[row].length; c++) {\n    if (seats[row][c].equals(".")) {\n      run++;\n      if (run >= n) return true;\n    } else {\n      run = 0;\n    }\n  }\n  return false;\n}\n```\n+1 loop with running counter for current consecutive empties. +1 reset counter when seat is not ".". +1 early-return true when run reaches n; return false after loop.',
      },
    ],
  },
]
