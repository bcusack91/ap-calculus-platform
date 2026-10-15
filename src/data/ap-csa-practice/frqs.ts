import type { SAQItem } from '@/components/FullLengthPracticeExam'

/**
 * AP Computer Science A — 4 FRQs in 90 minutes, scored like the 2025–26 course (25 points total):
 *
 *   Q1 Methods & Control Structures — 7 points (a 3, b 3, c 1)
 *   Q2 Class Design — 7 points (a 4, b 1, c 2)
 *   Q3 Data Analysis with ArrayList — 5 points (a 2, b 1, c 2)
 *   Q4 2D Array — 6 points (a 2, b 2, c 2)
 *
 * Each rubric line is one point, written in the style of the official criteria
 * (accesses all elements with no bounds errors, algorithm points, returns the correct value).
 * All Java code shown follows the AP Java subset.
 */

export const FRQS: SAQItem[] = [
  /* ---- Q1: Methods & Control Structures ---- */
  {
    type: 'saq',
    topic: 'frq-methods',
    stimulus: `**FRQ #1 — Methods & Control Structures: Discount Calculator (7 points)**

A retail store offers a tiered discount:
- subtotal < \\$50.00 ⇒ no discount
- \\$50.00 ≤ subtotal < \\$100.00 ⇒ 10% off
- \\$100.00 ≤ subtotal < \\$250.00 ⇒ 15% off
- subtotal ≥ \\$250.00 ⇒ 20% off

Additionally, members of the loyalty program receive an extra 5% off the *already-discounted* total. Sales tax of 7% is then applied to the final amount.`,
    parts: [
      {
        prompt: '(a) Write the complete method `public static double discountRate(double subtotal)` that returns the discount rate (as a decimal) corresponding to the subtotal: 0.0, 0.10, 0.15, or 0.20. (3 pts)',
        rubric: [
          { id: 'a1', label: '1 pt — Compares subtotal against all three boundaries', description: 'Tests 50.00, 100.00 and 250.00 with the correct inequalities (`<` at each boundary, so 50.00 gets 10% and 250.00 gets 20%).' },
          { id: 'a2', label: '1 pt — Tiers are mutually exclusive', description: 'Uses if / else if / else (or early returns) so exactly one rate is chosen for any subtotal.' },
          { id: 'a3', label: '1 pt — Returns the correct rate for every range (algorithm)', description: '```java\npublic static double discountRate(double subtotal) {\n  if (subtotal < 50.00) return 0.0;\n  else if (subtotal < 100.00) return 0.10;\n  else if (subtotal < 250.00) return 0.15;\n  else return 0.20;\n}\n```\nReturns 0.0, 0.10, 0.15 or 0.20; does not print instead of returning.' },
        ],
      },
      {
        prompt: '(b) Write the complete method `public static double finalTotal(double subtotal, boolean isMember)` that returns the final amount the customer must pay, including any tier discount, the 5% member discount (if applicable), and 7% sales tax. Your method should call `discountRate`. (3 pts)',
        rubric: [
          { id: 'b1', label: '1 pt — Calls discountRate and applies the tier discount', description: 'Calls `discountRate(subtotal)` and computes `subtotal * (1 - rate)` (or subtracts `subtotal * rate`).' },
          { id: 'b2', label: '1 pt — Member discount applied only when isMember is true', description: 'Multiplies the already-discounted total by 0.95 inside `if (isMember)`; non-members get no extra discount.' },
          { id: 'b3', label: '1 pt — Applies 7% tax last and returns the correct total (algorithm)', description: '```java\npublic static double finalTotal(double subtotal, boolean isMember) {\n  double afterTier = subtotal * (1 - discountRate(subtotal));\n  if (isMember) afterTier = afterTier * 0.95;\n  return afterTier * 1.07;\n}\n```\nTax is applied after both discounts and the value is returned, not printed.' },
        ],
      },
      {
        prompt: '(c) Trace your `finalTotal` method for `finalTotal(120.00, true)`. Show each intermediate value and the final returned amount. (1 pt)',
        rubric: [
          { id: 'c1', label: '1 pt — Correct trace with intermediate values and final value', description: 'discountRate(120.00) returns 0.15 (100 ≤ 120 < 250); afterTier = 120.00 × 0.85 = 102.00; member: 102.00 × 0.95 = 96.90; returned value = 96.90 × 1.07 = 103.683 (≈ 103.68). Every value shown and consistent with the method written in part (b).' },
        ],
      },
    ],
  },

  /* ---- Q2: Class ---- */
  {
    type: 'saq',
    topic: 'frq-class',
    stimulus: `**FRQ #2 — Class Design: GiftCard (7 points)**

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
        prompt: '(a) Write the complete class declaration including instance variables and the constructor. (4 pts)',
        rubric: [
          { id: 'a1', label: '1 pt — Declares class header', description: '`public class GiftCard` (no parameters or parentheses in the header).' },
          { id: 'a2', label: '1 pt — Declares all private instance variables with appropriate types', description: '`private final String code;`, `private double balance;`, `private boolean active;` (none static; all private; declared outside any method).' },
          { id: 'a3', label: '1 pt — Declares constructor header', description: '`public GiftCard(String code, double initialBalance)` with no return type.' },
          { id: 'a4', label: '1 pt — Constructor initializes every instance variable correctly', description: '```java\npublic GiftCard(String code, double initialBalance) {\n  this.code = code;\n  if (initialBalance >= 0) this.balance = initialBalance;\n  else this.balance = 0;\n  this.active = true;\n}\n```\nCode from the parameter, balance set to 0 when initialBalance is negative, and active set to true.' },
        ],
      },
      {
        prompt: '(b) Write the methods `getBalance()`, `getCode()`, and `deactivate()`. (1 pt)',
        rubric: [
          { id: 'b1', label: '1 pt — All three methods correct', description: '```java\npublic double getBalance() { return balance; }\npublic String getCode()    { return code; }\npublic void deactivate()   { active = false; }\n```\nPublic headers with the correct return types; both accessors return the instance variables; deactivate sets active to false and returns nothing.' },
        ],
      },
      {
        prompt: '(c) Write the `charge` method. (2 pts)',
        rubric: [
          { id: 'c1', label: '1 pt — Rejects every invalid charge', description: 'Returns false (and leaves balance unchanged) when the card is inactive, when amount ≤ 0, or when amount > balance.' },
          { id: 'c2', label: '1 pt — Deducts and returns true on a valid charge (algorithm)', description: '```java\npublic boolean charge(double amount) {\n  if (!active) return false;\n  if (amount <= 0) return false;\n  if (amount > balance) return false;\n  balance -= amount;\n  return true;\n}\n```\nBalance is reduced only on a valid charge, so it never goes negative.' },
        ],
      },
    ],
  },

  /* ---- Q3: ArrayList ---- */
  {
    type: 'saq',
    topic: 'frq-array-arraylist',
    stimulus: `**FRQ #3 — ArrayList: TestScores (5 points)**

A teacher uses \`ArrayList<Integer>\` to track student test scores (each score is between 0 and 100, inclusive).`,
    parts: [
      {
        prompt: '(a) Write `public static double mean(ArrayList<Integer> scores)` that returns the arithmetic mean of the scores. If the list is empty, return 0.0. (2 pts)',
        rubric: [
          { id: 'a1', label: '1 pt — Accesses all elements of scores and accumulates a sum (no bounds errors)', description: 'An enhanced for loop or an indexed loop from 0 to `scores.size() - 1`, using `get(i)` (not `[ ]`), adding each score to a sum.' },
          { id: 'a2', label: '1 pt — Returns the correct mean as a double, 0.0 for an empty list (algorithm)', description: '```java\npublic static double mean(ArrayList<Integer> scores) {\n  if (scores.size() == 0) return 0.0;\n  int sum = 0;\n  for (int s : scores) sum += s;\n  return (double) sum / scores.size();\n}\n```\nAvoids integer division (cast or double sum) and checks the empty case before dividing.' },
        ],
      },
      {
        prompt: '(b) Write `public static int countAbove(ArrayList<Integer> scores, double threshold)` that returns the number of scores strictly greater than threshold. (1 pt)',
        rubric: [
          { id: 'b1', label: '1 pt — Initializes a count, increments it inside a strict > test in a loop, and returns it', description: '```java\nint count = 0;\nfor (int s : scores) {\n  if (s > threshold) count++;\n}\nreturn count;\n```\nUses `>` (not `>=`); the count is not reset inside the loop.' },
        ],
      },
      {
        prompt: '(c) Write `public static void curve(ArrayList<Integer> scores, int bonus)` that adds `bonus` to every score, capping each adjusted score at 100. The method modifies the parameter directly. (2 pts)',
        rubric: [
          { id: 'c1', label: '1 pt — Computes each adjusted score capped at 100', description: '`int adjusted = scores.get(i) + bonus; if (adjusted > 100) adjusted = 100;` (or `Math.min(100, scores.get(i) + bonus)`).' },
          { id: 'c2', label: '1 pt — Updates every element in place (algorithm)', description: '```java\nfor (int i = 0; i < scores.size(); i++) {\n  int adjusted = scores.get(i) + bonus;\n  if (adjusted > 100) adjusted = 100;\n  scores.set(i, adjusted);\n}\n```\nUses `set(i, value)` on every index with no bounds errors; does not add or remove elements, and assigning to an enhanced-for loop variable does not earn the point.' },
        ],
      },
    ],
  },

  /* ---- Q4: 2D Array ---- */
  {
    type: 'saq',
    topic: 'frq-2d-array',
    stimulus: `**FRQ #4 — 2D Array: Seating Chart (6 points)**

A theater is represented by a 2D array \`String[][] seats\`, where \`seats[r][c]\` is one of:
- \`"."\` (empty seat)
- \`"X"\` (occupied)
- \`"#"\` (broken/unavailable)`,
    parts: [
      {
        prompt: '(a) Write `public static int countEmpty(String[][] seats)` that returns the total number of "." entries in the array. (2 pts)',
        rubric: [
          { id: 'a1', label: '1 pt — Accesses all elements of seats (no bounds errors)', description: 'Nested loops bounded by `seats.length` and `seats[r].length` (or nested enhanced for loops over rows, then seats).' },
          { id: 'a2', label: '1 pt — Counts "." with .equals and returns the total (algorithm)', description: '```java\nint count = 0;\nfor (int r = 0; r < seats.length; r++)\n  for (int c = 0; c < seats[r].length; c++)\n    if (seats[r][c].equals(".")) count++;\nreturn count;\n```\nUsing `==` to compare Strings does not earn the point.' },
        ],
      },
      {
        prompt: '(b) Write `public static boolean rowFull(String[][] seats, int row)` that returns true if no seat in the given row is "." (every seat is either "X" or "#"). (2 pts)',
        rubric: [
          { id: 'b1', label: '1 pt — Accesses all elements of seats[row] (no bounds errors)', description: 'A single loop over the columns of the given row only: `for (int c = 0; c < seats[row].length; c++)`.' },
          { id: 'b2', label: '1 pt — Returns the correct result (algorithm)', description: '```java\nfor (int c = 0; c < seats[row].length; c++) {\n  if (seats[row][c].equals(".")) return false;\n}\nreturn true;\n```\nReturns false on the first "." and true only after the whole row is checked (no early `return true` inside the loop).' },
        ],
      },
      {
        prompt: '(c) Write `public static boolean seatGroup(String[][] seats, int row, int n)` that returns true if there exist n consecutive "." seats in the given row (i.e., a group of n adjacent empty seats). (2 pts)',
        rubric: [
          { id: 'c1', label: '1 pt — Tracks a run of consecutive "." seats, resetting it on any other seat', description: 'A counter increments for each "." and is set back to 0 when a seat is "X" or "#".' },
          { id: 'c2', label: '1 pt — Returns true when the run reaches n, false otherwise (algorithm)', description: '```java\nint run = 0;\nfor (int c = 0; c < seats[row].length; c++) {\n  if (seats[row][c].equals(".")) {\n    run++;\n    if (run >= n) return true;\n  } else {\n    run = 0;\n  }\n}\nreturn false;\n```\nThe check happens as the run grows (a run ending at the last seat still counts); false is returned only after the loop.' },
        ],
      },
    ],
  },
]
