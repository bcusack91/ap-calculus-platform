export const csaConditionalsPart6Data = {
  topicSlug: 'csa-conditionals',
  sections: [
    {
      id: 'csacondi6-intro',
      type: 'text' as const,
      content: `
# 🔀 Conditionals (Advanced)

**Part 6 of 7 — AP-Style Practice**

---

This part is exam practice for CED Topics 2.4 through 2.6: multiple-choice questions on chains, nesting and equivalence, then two free-response style methods with a scoring checklist.

| In this part |
|---|
| Multiple-choice practice |
| FRQ-style method 1: shippingCost |
| FRQ-style method 2: classify |
| What earns and loses points |
      `
    },
    {
      id: 'csacondi6-mc1',
      type: 'multiple-choice' as const,
      content: `
**Multiple Choice** 🎯

**Segment A**
\`\`\`java
int x = 7;
int y = 3;
if (x > 5) {
    if (y > 5) {
        x = 0;
    } else {
        y = x + y;
    }
} else if (y < 5) {
    y = 0;
}
x = x - y;
System.out.println(x + " " + y);
\`\`\`
      `,
      exercise: {
        questions: [
          {
            question: 'What is printed by Segment A?',
            options: [
              '-3 10',
              '7 10',
              '4 3',
              '7 0'
            ],
            correctAnswer: 0,
            explanation: 'x > 5 is true and y > 5 is false, so the inner else makes y equal 10. The else if belongs to the outer if, so it is skipped, and then x becomes 7 - 10 = -3.'
          },
          {
            question: 'Which expression is equivalent to !(score >= 90 || absences > 3)?',
            options: [
              'score < 90 && absences <= 3',
              'score < 90 || absences < 3',
              'score < 90 && absences < 3',
              'score > 90 && absences > 3'
            ],
            correctAnswer: 0,
            explanation: 'De Morgan changes the || to && and negates each comparison, so >= 90 becomes < 90 and > 3 becomes <= 3. The negation of > 3 must include 3 itself, which < 3 leaves out, and keeping || or the original comparisons describes different inputs.'
          },
          {
            question: 'Assume String a = "red"; String b = new String("red");. Which expression is true?',
            options: [
              'a.equals(b) && a != b',
              'a == b && a.equals("red")',
              'a.equals(b) && b == null',
              '!a.equals(b) || a == b'
            ],
            correctAnswer: 0,
            explanation: 'The Strings have the same characters but are different objects, so a.equals(b) is true and a != b is true. Each of the other expressions needs a == b, b == null, or a mismatch in content, and none of those holds.'
          }
        ]
      }
    },
    {
      id: 'csacondi6-frq1',
      type: 'text' as const,
      content: `
## FRQ-Style Method 1: shippingCost

A store charges by package weight in pounds.

| Weight | Standard cost |
|---|---|
| 1 or less | 6 |
| more than 1, up to 5 | 10 |
| more than 5, up to 20 | 18 |
| more than 20 | 18 plus 2 for each pound over 20 |

Express shipping adds 7 to any package. Members get free standard shipping on packages of 5 pounds or less, but still pay the 7 for express.

Write \`shippingCost(int pounds, boolean express, boolean member)\`.

### A Full-Credit Solution

\`\`\`java
public static int shippingCost(int pounds, boolean express, boolean member) {
    int cost;
    if (member && pounds <= 5) {
        cost = 0;
    } else if (pounds <= 1) {
        cost = 6;
    } else if (pounds <= 5) {
        cost = 10;
    } else if (pounds <= 20) {
        cost = 18;
    } else {
        cost = 18 + 2 * (pounds - 20);
    }
    if (express) {
        cost += 7;
    }
    return cost;
}
\`\`\`

| Call | Standard part | Express part | Returns |
|---|---|---|---|
| \`shippingCost(1, false, false)\` | 6 | 0 | 6 |
| \`shippingCost(4, true, true)\` | 0 | 7 | 7 |
| \`shippingCost(20, false, true)\` | 18 | 0 | 18 |
| \`shippingCost(25, true, false)\` | 18 + 10 = 28 | 7 | 35 |

### Scoring Checklist
- The member case is tested **before** the weight chain, and only for 5 pounds or less.
- The chain uses \`<=\` at 1, 5 and 20, with the smallest threshold first.
- The over-20 formula charges only for the pounds above 20.
- Express is a separate if, so it applies on every path.
- The method **returns** the cost.
      `
    },
    {
      id: 'csacondi6-mc2',
      type: 'multiple-choice' as const,
      content: `
**Check the Method** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does shippingCost(6, true, true) return?',
            options: [
              '25',
              '7',
              '18',
              '32'
            ],
            correctAnswer: 0,
            explanation: 'A 6-pound package is too heavy for free member shipping, so the standard cost is 18, and express adds 7. Free shipping would give 7, and charging express twice would give 32.'
          },
          {
            question: 'A student moves if (express) { cost += 7; } inside the final else, after the over-20 formula. Which call then returns the wrong value?',
            options: [
              'shippingCost(3, true, false)',
              'shippingCost(3, false, false)',
              'shippingCost(30, false, true)',
              'shippingCost(1, false, true)'
            ],
            correctAnswer: 0,
            explanation: 'Inside the final else, only packages over 20 pounds ever get the express fee, so a 3-pound express package returns 10 instead of 17. Calls without express never reach the moved step, so they are unaffected.'
          }
        ]
      }
    },
    {
      id: 'csacondi6-frq2',
      type: 'text' as const,
      content: `
## FRQ-Style Method 2: classify

Write \`classify(int a, int b, int c)\`, which describes three side lengths:

- \`"invalid"\` if any side is 0 or less, or if some side is at least the sum of the other two;
- otherwise \`"equilateral"\` if all three sides are equal;
- otherwise \`"isosceles"\` if exactly two sides are equal;
- otherwise \`"scalene"\`.

### A Full-Credit Solution

\`\`\`java
public static String classify(int a, int b, int c) {
    if (a <= 0 || b <= 0 || c <= 0) {
        return "invalid";
    }
    if (a >= b + c || b >= a + c || c >= a + b) {
        return "invalid";
    }
    if (a == b && b == c) {
        return "equilateral";
    }
    if (a == b || b == c || a == c) {
        return "isosceles";
    }
    return "scalene";
}
\`\`\`

The order of the checks does real work. Because the equilateral case returns first, the isosceles test can use \`||\` without excluding three equal sides.

| Call | Result | Deciding test |
|---|---|---|
| \`classify(3, 4, 5)\` | scalene | no two sides equal |
| \`classify(2, 2, 3)\` | isosceles | \`a == b\` |
| \`classify(1, 2, 3)\` | invalid | \`c >= a + b\`, since 3 >= 3 |
| \`classify(5, 5, 5)\` | equilateral | \`a == b && b == c\` |
| \`classify(0, 4, 4)\` | invalid | \`a <= 0\` |

### Common Deductions

| Mistake | Wrong result |
|---|---|
| \`a > b + c\` instead of \`>=\` | \`classify(1, 2, 3)\` returns "scalene" |
| \`a == b == c\` | does not compile |
| isosceles test placed before equilateral | \`classify(5, 5, 5)\` returns "isosceles" |
| isosceles test missing \`a == c\` | \`classify(3, 4, 3)\` returns "scalene" |
      `
    },
    {
      id: 'csacondi6-input',
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

1) What does \`shippingCost(21, false, false)\` return?

2) What does \`shippingCost(5, false, true)\` return?

3) Type the word \`classify(4, 4, 9)\` returns, without quotation marks.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['20', '0', 'invalid'],
        hint1: 'One pound over 20 adds 2.',
        hint2: 'A member package of 5 pounds is free.',
        hint3: 'Compare 9 with 4 + 4.',
        explanation: 'A 21-pound package costs 18 + 2 * 1 = 20. A member shipping 5 pounds without express pays nothing. Since 9 >= 4 + 4, the sides cannot form a triangle.'
      }
    }
  ]
}
