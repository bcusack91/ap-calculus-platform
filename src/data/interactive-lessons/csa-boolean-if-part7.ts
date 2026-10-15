export const csaBooleanIfPart7Data = {
  topicSlug: 'csa-boolean-if',
  sections: [
    {
      id: 'csaboole7-intro',
      type: 'text' as const,
      content: `
# ✅ Boolean Expressions & If Statements

**Part 7 of 7 — Synthesis Review**

---

This review ties together everything in this lesson: the building blocks of algorithms, Boolean values, one-way and two-way selection, compound conditions, and the pitfalls that cost points.

| In this part |
|---|
| The whole lesson in one table |
| A five-step method for any selection question |
| Mixed review |
      `
    },
    {
      id: 'csaboole7-table',
      type: 'text' as const,
      content: `
## The Lesson in One Table

| Part | Big idea | One-line reminder |
|---|---|---|
| 1 | Operators | \`==\` and \`!=\` for primitives; \`equals\` for String content |
| 2 | Boolean values | Sequencing, selection, repetition; int division before comparing |
| 3 | if and if-else | Braces make the body; a stray \`;\` empties it |
| 4 | Compound conditions | \`&&\` before \`\\|\\|\`; guard on the left |
| 5 | Pitfalls | Separate ifs all run; \`=\` is not \`==\` |
| 6 | Practice | Return, do not print; test the boundaries |

## A Five-Step Method for Any Selection Question

1. **Check that it compiles.** Look for \`<\` on Strings, \`if (x = 5)\` with an int, and a variable that might not be assigned.
2. **Find each body.** Braces decide it, and a semicolon right after a condition empties it.
3. **Evaluate each condition with the current values.** Do arithmetic first, then comparisons, then \`&&\`, then \`||\`.
4. **Watch for short-circuits.** Decide whether the right side runs before you evaluate it.
5. **Update a trace table** after every body that runs.
      `
    },
    {
      id: 'csaboole7-mc1',
      type: 'multiple-choice' as const,
      content: `
**Mixed Review** 🎯

**Segment A**
\`\`\`java
int t = 72;
boolean humid = true;
String msg = "ok";
if (t > 85 || humid && t > 70) {
    msg = "uncomfortable";
}
if (!humid) {
    msg = msg + "!";
}
System.out.println(msg);
\`\`\`
      `,
      exercise: {
        questions: [
          {
            question: 'What is printed by Segment A?',
            options: [
              'uncomfortable',
              'ok',
              'uncomfortable!',
              'ok!'
            ],
            correctAnswer: 0,
            explanation: 'The && part is true because humid is true and 72 > 70, so the || is true even though 72 > 85 is false. The second if is skipped because !humid is false.'
          },
          {
            question: 'Which expression throws an exception when the String s is null?',
            options: [
              's.length() > 0 && s != null',
              's != null && s.length() > 0',
              's == null || s.length() == 0',
              's == null || s.equals("")'
            ],
            correctAnswer: 0,
            explanation: 'Calling length on a null reference throws a NullPointerException, and that expression makes the call before the null check. The other three test for null first, and short-circuiting skips the call.'
          },
          {
            question: 'Which statement prints true?',
            options: [
              'System.out.println(7 / 2 == 3);',
              'System.out.println(7 / 2 == 3.5);',
              'System.out.println(7 % 2 == 0);',
              'System.out.println(7 / 2.0 == 3);'
            ],
            correctAnswer: 0,
            explanation: 'Int division makes 7 / 2 equal 3, so the comparison with 3 is true. The same division is not 3.5, 7 % 2 is 1, and 7 / 2.0 is 3.5, not 3.'
          },
          {
            question: 'Which task needs both selection and repetition?',
            options: [
              'Counting how many of the 30 test scores are 90 or higher',
              'Adding a 5-point bonus to a score if it is under 60',
              'Printing each number from 1 to 30 on its own line',
              'Converting one temperature from Celsius to Fahrenheit'
            ],
            correctAnswer: 0,
            explanation: 'Counting repeats a step for each of the 30 scores and decides each time whether to count it. Printing 1 to 30 repeats with no decision, the bonus is one decision, and the conversion is pure sequencing.'
          }
        ]
      }
    },
    {
      id: 'csaboole7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Rules Review** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'In a || b && c, the operator applied first is ___',
            options: ['&&', '||', 'whichever is leftmost', 'neither, since it does not compile']
          },
          {
            label: 'If the left side of an && is false, the right side is ___',
            options: ['skipped', 'evaluated first', 'evaluated last', 'checked for errors only']
          },
          {
            label: 'A method that must report a result to its caller should ___ it',
            options: ['return', 'print', 'store', 'declare']
          }
        ],
        correctAnswers: ['&&', 'skipped', 'return'],
        hint1: '&& has higher precedence.',
        hint2: 'false && anything is already false.',
        hint3: 'The caller can only use what the method gives back.',
        explanation: '&& binds tighter than ||, so a || b && c means a || (b && c). A false left side ends an && without evaluating the right. The caller receives a value only through return.'
      }
    },
    {
      id: 'csaboole7-input',
      type: 'input-boxes' as const,
      content: `
**Final Recall** ✍️

1) For \`int n = 24;\`, type the value of \`n % 4 == 0 && n % 6 != 0 || n > 20\`.

2) What is printed?
\`\`\`java
int k = 3;
if (k > 2) {
    k = k * 3;
}
if (k > 5) {
    k = k - 5;
} else {
    k = 0;
}
System.out.println(k);
\`\`\`

3) What does \`ticketPrice(65, false, true)\` from Part 6 return?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['true', '4', '8'],
        hint1: 'Apply && before ||.',
        hint2: 'The second if tests the value of k after the first if.',
        hint3: 'A 65-year-old pays the senior price, then check the day.',
        explanation: '24 % 6 != 0 is false, so the && is false, but 24 > 20 makes the || true. k becomes 9, then 9 > 5 is true, so k becomes 4. The senior price of 10 drops by 2 on Tuesday, giving 8.'
      }
    },
    {
      id: 'csaboole7-close',
      type: 'text' as const,
      content: `
## Ready for What Comes Next

| If you can... | You are ready for... |
|---|---|
| Evaluate any compound condition by hand | nested and multiway selection |
| Trace separate ifs with a table | loops, which repeat a body many times |
| Explain why the guard goes on the left | null checks on objects and Strings |

> 🎯 **AP Connection:** Selection appears in nearly every free-response question. The points usually depend on boundary cases: test the value just inside and just outside every comparison you write.
      `
    }
  ]
}
