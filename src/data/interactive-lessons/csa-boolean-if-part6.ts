export const csaBooleanIfPart6Data = {
  topicSlug: 'csa-boolean-if',
  sections: [
    {
      id: 'csaboole6-intro',
      type: 'text' as const,
      content: `
# ✅ Boolean Expressions & If Statements

**Part 6 of 7 — AP-Style Practice**

---

This part is exam practice for CED Topics 2.1 through 2.5: multiple-choice traces first, then two free-response style methods with a scoring checklist.

| In this part |
|---|
| Multiple-choice traces |
| FRQ-style method 1: ticketPrice |
| FRQ-style method 2: isValidTime |
| What earns and loses points |
      `
    },
    {
      id: 'csaboole6-mc1',
      type: 'multiple-choice' as const,
      content: `
**Multiple Choice: Traces** 🎯

**Segment A**
\`\`\`java
int a = 4;
int b = 9;
if (a * 2 > b) {
    a++;
} else if (b % a == 1) {
    b--;
} else {
    a = b;
}
System.out.println(a + " " + b);
\`\`\`

**Segment B**
\`\`\`java
boolean p = true;
boolean q = false;
int n = 0;
if (p || q) { n += 1; }
if (p && !q) { n += 2; }
if (!p || q) { n += 4; }
if (!(p && q)) { n += 8; }
System.out.println(n);
\`\`\`
      `,
      exercise: {
        questions: [
          {
            question: 'What is printed by Segment A?',
            options: [
              '4 8',
              '5 9',
              '9 9',
              '4 9'
            ],
            correctAnswer: 0,
            explanation: '8 > 9 is false, so the chain moves on, and 9 % 4 is 1, so b is decreased to 8. The final else is skipped because an earlier branch ran.'
          },
          {
            question: 'What is printed by Segment B?',
            options: [
              '11',
              '9',
              '3',
              '7'
            ],
            correctAnswer: 0,
            explanation: 'The first, second and fourth conditions are true, adding 1 + 2 + 8. The third is false because both !p and q are false, so 4 is not added.'
          },
          {
            question: 'A method should return true exactly when t is a valid hour on a 12-hour clock, 1 through 12. Which return statement is correct?',
            options: [
              'return t >= 1 && t <= 12;',
              'return t >= 1 || t <= 12;',
              'return t > 1 && t < 12;',
              'return t >= 0 && t <= 12;'
            ],
            correctAnswer: 0,
            explanation: 'Both bounds must hold and both are inclusive. Using || accepts every int, strict comparisons reject 1 and 12, and a lower bound of 0 accepts an hour that does not exist.'
          }
        ]
      }
    },
    {
      id: 'csaboole6-frq1',
      type: 'text' as const,
      content: `
## FRQ-Style Method 1: ticketPrice

A museum sets ticket prices in whole dollars.

- Visitors under 5 are free.
- Visitors 65 or older, and students of any age 5 or older, pay 10.
- Everyone else pays 15.
- On Tuesdays, every ticket that is not free costs 2 less.

Write \`ticketPrice(int age, boolean isStudent, boolean tuesday)\`.

### A Full-Credit Solution

\`\`\`java
public static int ticketPrice(int age, boolean isStudent, boolean tuesday) {
    int price;
    if (age < 5) {
        price = 0;
    } else if (age >= 65 || isStudent) {
        price = 10;
    } else {
        price = 15;
    }
    if (tuesday && price > 0) {
        price -= 2;
    }
    return price;
}
\`\`\`

| Call | Base price | Tuesday change | Returns |
|---|---|---|---|
| \`ticketPrice(3, false, true)\` | 0 | none: the ticket is free | 0 |
| \`ticketPrice(70, false, false)\` | 10 | none | 10 |
| \`ticketPrice(20, true, true)\` | 10 | minus 2 | 8 |
| \`ticketPrice(40, false, true)\` | 15 | minus 2 | 13 |

### Scoring Checklist
- Uses \`age < 5\` for free, not \`age <= 5\`.
- Gives 10 to seniors **or** students, after the free case is ruled out.
- Applies the Tuesday discount only to a price above 0.
- **Returns** the price; printing it instead loses the point.
      `
    },
    {
      id: 'csaboole6-mc2',
      type: 'multiple-choice' as const,
      content: `
**Check the Method** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which call to ticketPrice returns 8?',
            options: [
              'ticketPrice(9, true, true)',
              'ticketPrice(4, false, false)',
              'ticketPrice(65, false, false)',
              'ticketPrice(30, false, true)'
            ],
            correctAnswer: 0,
            explanation: 'A 9-year-old student pays 10, and the Tuesday discount brings it to 8. A 4-year-old is free, a 65-year-old pays 10 on a day that is not Tuesday, and a 30-year-old non-student pays 13 on a Tuesday.'
          },
          {
            question: 'A student writes the Tuesday step as if (tuesday) { price -= 2; }. What does that version return for ticketPrice(2, false, true)?',
            options: [
              '-2',
              '0',
              '13',
              '2'
            ],
            correctAnswer: 0,
            explanation: 'The child is free, so price starts at 0, and without the price > 0 test the discount still runs. The method returns -2, which is why the checklist requires the discount to skip free tickets.'
          }
        ]
      }
    },
    {
      id: 'csaboole6-frq2',
      type: 'text' as const,
      content: `
## FRQ-Style Method 2: isValidTime

Write \`isValidTime(int hour, int minute)\`, which returns true when the time is valid on a 24-hour clock: \`hour\` from 0 to 23 and \`minute\` from 0 to 59, inclusive.

### Two Full-Credit Solutions

\`\`\`java
public static boolean isValidTime(int hour, int minute) {
    return hour >= 0 && hour <= 23 && minute >= 0 && minute <= 59;
}
\`\`\`

\`\`\`java
public static boolean isValidTime(int hour, int minute) {
    if (hour < 0 || hour > 23) {
        return false;
    }
    if (minute < 0 || minute > 59) {
        return false;
    }
    return true;
}
\`\`\`

The second version returns false as soon as one part fails, and reaches \`return true;\` only after both checks pass.

### Common Deductions

| Mistake | Wrong result |
|---|---|
| \`hour <= 24\` | \`isValidTime(24, 0)\` returns true |
| \`\\|\\|\` between the hour and minute tests | \`isValidTime(30, 15)\` returns true |
| \`else return true;\` after the hour check | the minute is never checked |
| \`minute < 59\` | \`isValidTime(10, 59)\` returns false |
      `
    },
    {
      id: 'csaboole6-input',
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

1) What does \`ticketPrice(5, false, true)\` return?

2) What does \`ticketPrice(64, true, false)\` return?

3) Type the value \`isValidTime(24, 0)\` returns (true or false).
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['13', '10', 'false'],
        hint1: '5 is not under 5. Is the visitor a senior or a student?',
        hint2: 'Being a student is enough for the 10 price.',
        hint3: 'The largest valid hour is 23.',
        explanation: 'A 5-year-old non-student pays 15, minus 2 on Tuesday, which is 13. A 64-year-old student pays 10. Hour 24 is out of range, so the time is invalid.'
      }
    },
    {
      id: 'csaboole6-wrap',
      type: 'text' as const,
      content: `
## Practice Debrief

| Skill tested | Where it appeared |
|---|---|
| else-if chains stop at the first true branch | Segment A |
| \`!\`, \`&&\` and \`\\|\\|\` on boolean variables | Segment B |
| Inclusive range tests | the 12-hour clock item, isValidTime |
| Separating a base case from an adjustment | ticketPrice |
| Testing boundary values (4, 5, 64, 65, 23, 24) | every method |

**Next:** Part 7 pulls Parts 1 through 6 together in one review.
      `
    }
  ]
}
