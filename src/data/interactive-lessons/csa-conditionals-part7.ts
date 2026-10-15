export const csaConditionalsPart7Data = {
  topicSlug: 'csa-conditionals',
  sections: [
    {
      id: 'csacondi7-intro',
      type: 'text' as const,
      content: `
# 🔀 Conditionals (Advanced)

**Part 7 of 7 — Synthesis Review**

---

This review ties together the advanced conditional skills from this lesson: multiway chains, nested decisions, equivalent expressions, and object comparison.

| In this part |
|---|
| The whole lesson in one table |
| A checklist for writing conditionals |
| Mixed review |
      `
    },
    {
      id: 'csacondi7-table',
      type: 'text' as const,
      content: `
## The Lesson in One Table

| Part | Big idea | One-line reminder |
|---|---|---|
| 1 | Nested ifs and patterns | An unbraced else pairs with the nearest if |
| 2 | else-if chains | First true test wins; order thresholds; test the boundaries |
| 3 | Nesting | One path per combination; an inner else needs the outer test true |
| 4 | Equivalence | Truth tables, De Morgan, and one counterexample to disprove |
| 5 | Objects | \`==\` asks "same object?"; \`equals\` asks "same content?" |
| 6 | Practice | Separate adjustments from the chain; return the result |

## A Checklist for Writing Conditionals

1. **List the categories and their boundaries** before writing code.
2. **Choose the order.** For \`>=\` thresholds, go from the largest down; for \`<=\`, from the smallest up.
3. **Decide what is inside the chain.** An adjustment that applies on every path, like an express fee, goes in a separate if after it.
4. **Check every boundary value**, plus a case for each path through any nesting.
5. **Compare objects with \`equals\`**, and guard against \`null\` first.
6. **Negate carefully.** Flip each comparison, including the equal case, and swap \`&&\` with \`||\`.
      `
    },
    {
      id: 'csacondi7-mc1',
      type: 'multiple-choice' as const,
      content: `
**Mixed Review** 🎯

**Segment A**
\`\`\`java
int n = 15;
String s = "";
if (n % 3 == 0) {
    s += "fizz";
} else if (n % 5 == 0) {
    s += "buzz";
}
if (n % 5 == 0 && n % 3 != 0) {
    s += "!";
}
System.out.println(s);
\`\`\`

**Segment B**
\`\`\`java
String cat;
if (age >= 13) {
    cat = "teen";
} else if (age >= 20) {
    cat = "adult";
} else {
    cat = "child";
}
\`\`\`
      `,
      exercise: {
        questions: [
          {
            question: 'What is printed by Segment A?',
            options: [
              'fizz',
              'fizzbuzz',
              'buzz!',
              'fizzbuzz!'
            ],
            correctAnswer: 0,
            explanation: '15 % 3 is 0, so the chain adds "fizz" and skips the else if. The second if needs n % 3 != 0, which is false, so nothing else is added.'
          },
          {
            question: 'Which of the following is a tautology for an int x, true for every value of x?',
            options: [
              'x < 10 || x >= 5',
              'x < 10 && x > 5',
              'x > 10 || x < 5',
              'x > 5 || x < 5'
            ],
            correctAnswer: 0,
            explanation: 'Any x that is not less than 10 is at least 10, which is also at least 5, so one side is always true. The && version fails for 3, x > 10 || x < 5 fails for 7, and x > 5 || x < 5 fails for 5 itself.'
          },
          {
            question: 'Segment B should label ages 0 to 12 "child", 13 to 19 "teen", and 20 or more "adult". For which age does it give the wrong label?',
            options: [
              '25',
              '12',
              '13',
              '19'
            ],
            correctAnswer: 0,
            explanation: 'Any age of 20 or more also passes age >= 13 first, so 25 is labeled "teen" and the "adult" branch is unreachable. Ages 12, 13 and 19 all receive the right label.'
          },
          {
            question: 'Which comparison tests whether the String variables w1 and w2 hold the same characters?',
            options: [
              'w1.equals(w2)',
              'w1 == w2',
              'w1.compareTo(w2) > 0',
              'w1.length() == w2.length()'
            ],
            correctAnswer: 0,
            explanation: 'equals compares the characters of the two Strings. == checks for the same object, compareTo > 0 means w1 comes after w2, and equal lengths say nothing about the characters.'
          }
        ]
      }
    },
    {
      id: 'csacondi7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Rules Review** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Without braces, an else pairs with the ___ unmatched if',
            options: ['nearest', 'first', 'outermost', 'last-indented']
          },
          {
            label: 'The negation of a >= b is ___',
            options: ['a < b', 'a <= b', 'a > b', 'b >= a']
          },
          {
            label: 'Two variables that refer to the same object are called ___',
            options: ['aliases', 'duplicates', 'constants', 'parameters']
          }
        ],
        correctAnswers: ['nearest', 'a < b', 'aliases'],
        hint1: 'Part 1: the dangling else.',
        hint2: 'The original includes a == b, so its negation must exclude it.',
        hint3: 'Changing the object through one variable is visible through the other.',
        explanation: 'An unbraced else attaches to the closest if that has no else. The negation of a >= b is a < b. Variables sharing one object are aliases.'
      }
    },
    {
      id: 'csacondi7-input',
      type: 'input-boxes' as const,
      content: `
**Final Recall** ✍️

1) In Segment A, what is printed when \`n\` is 10?

2) What does \`zone(51)\` from Part 2 return?

3) What does \`classify(7, 7, 7)\` return? Type the word without quotation marks.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['buzz!', '2', 'equilateral'],
        hint1: '10 is not a multiple of 3, but it is a multiple of 5.',
        hint2: '51 is just past the zone 1 limit.',
        hint3: 'All three sides are equal and they form a valid triangle.',
        explanation: 'For 10, the chain adds "buzz", and the second if adds "!", since 10 % 5 == 0 and 10 % 3 != 0. 51 is in the 51 to 300 range, zone 2. Seven, seven, seven is a valid equilateral triangle.'
      }
    },
    {
      id: 'csacondi7-close',
      type: 'text' as const,
      content: `
## Ready for What Comes Next

| If you can... | You are ready for... |
|---|---|
| Order a chain and test its boundaries | category methods in free-response questions |
| Rewrite a condition with De Morgan's laws | loop conditions, which are often written as negations |
| Compare objects with \`equals\` and guard against null | searching through lists of objects |

> 🎯 **AP Connection:** Many multiple-choice items present three code segments and ask which work. Test each one with the same small set of boundary inputs, and a single failing input is enough to rule a segment out.
      `
    }
  ]
}
