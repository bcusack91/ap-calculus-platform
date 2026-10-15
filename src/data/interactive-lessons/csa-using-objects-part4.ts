export const csaUsingObjectsPart4Data = {
  topicSlug: 'csa-using-objects',
  sections: [
    {
      id: 'csausing4-intro',
      type: 'text' as const,
      content: `
# 🏗️ Using Objects

**Part 4 of 7 — The Math Class and Random Ranges**

---

## A Class Made Only of Class Methods

The \`Math\` class is in \`java.lang\`, so every program can use it without an import. It contains **only class (static) methods**: you never write \`new Math()\`, you call each method on the class name, as in \`Math.sqrt(x)\`.

### The Math methods on the AP Java Quick Reference

| Header | What it returns |
|--------|-----------------|
| \`static int abs(int x)\` | the absolute value of an int, as an int |
| \`static double abs(double x)\` | the absolute value of a double, as a double |
| \`static double pow(double base, double exponent)\` | base raised to the power exponent |
| \`static double sqrt(double x)\` | the nonnegative square root of x |
| \`static double random()\` | a double from 0.0 up to, but not including, 1.0 |

These five headers are the whole list for the exam. Java's Math class has other methods, but they are not on the Quick Reference, so AP questions solve those jobs another way (for example, comparing two values with an if statement instead of calling a "max" method).

> 🔑 **Key Idea:** \`abs\` is overloaded (Part 3), so it returns the **same type** it is given. \`pow\` and \`sqrt\` **always return a double**, even when the answer is a whole number.
      `
    },
    {
      id: 'csausing4-types',
      type: 'text' as const,
      content: `
## Return Types Decide What You Can Store

| Expression | Value | Type |
|------------|-------|------|
| \`Math.abs(-7)\` | 7 | int |
| \`Math.abs(-7.5)\` | 7.5 | double |
| \`Math.pow(2, 3)\` | 8.0 | double |
| \`Math.sqrt(49)\` | 7.0 | double |
| \`(int) Math.pow(2, 10)\` | 1024 | int, after the cast |
| \`Math.pow(8, 1 / 3)\` | 1.0 | double: 1 / 3 is int division, so this is 8 to the power 0 |

Notice that int arguments such as 2 and 49 are fine: they widen to double parameters, as in Part 3.

### Consequences

\`\`\`java
int root = Math.sqrt(49);          // compile error: a double cannot be stored in an int
int root2 = (int) Math.sqrt(49);   // compiles: root2 is 7
double p = Math.pow(2, 3);         // p is 8.0
System.out.println(Math.pow(2, 3)); // prints 8.0, not 8
int gap = Math.abs(3 - 11);        // compiles: abs(int) returns an int, gap is 8
\`\`\`

> ⚠️ **Common Mistake:** Writing a fraction exponent with two ints. \`Math.pow(64, 1 / 3)\` is 1.0, not 4.0. Write \`Math.pow(64, 1.0 / 3)\` so the division happens with doubles; the result is very close to 4.0 (round-off can show in the last digits).
      `
    },
    {
      id: 'csausing4-examples',
      type: 'text' as const,
      content: `
## Worked Examples: Combining Math Calls

### Example 1: Distance between two points

Find the distance from (1, 2) to (4, 6).

\`\`\`java
int x1 = 1;
int y1 = 2;
int x2 = 4;
int y2 = 6;
double dist = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
\`\`\`

Work from the inside out:
1. \`x2 - x1\` is 3, and \`Math.pow(3, 2)\` is 9.0.
2. \`y2 - y1\` is 4, and \`Math.pow(4, 2)\` is 16.0.
3. 9.0 + 16.0 is 25.0, and \`Math.sqrt(25.0)\` is **5.0**.

### Example 2: How far off is a guess?

\`\`\`java
int target = 20;
int guess = 12;
int off = Math.abs(guess - target);
\`\`\`

\`guess - target\` is -8, and \`Math.abs(-8)\` is **8**. Because the argument is an int, the int version runs and the result can be stored in an int. Subtracting in the other order gives the same answer, which is why abs is the standard tool for "how far apart".

### Example 3: Printing a sum of Math results

\`\`\`java
System.out.println(Math.pow(3, 2) + Math.abs(-4));
\`\`\`

\`Math.pow(3, 2)\` is 9.0 (a double) and \`Math.abs(-4)\` is 4 (an int). A double plus an int is a double, so the output is **13.0**.
      `
    },
    {
      id: 'csausing4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement compiles without error?',
            options: [
              'int r = Math.sqrt(36);',
              'int r = Math.pow(2, 4);',
              'double r = Math.sqrt(30);',
              'int r = Math.abs(-3.0);'
            ],
            correctAnswer: 2,
            explanation: 'Math.sqrt returns a double, which can be stored in a double. Math.pow and Math.sqrt always return doubles, and Math.abs given the double -3.0 returns a double, so none of those can be stored in an int without a cast.'
          },
          {
            question: 'What does System.out.println(Math.pow(2, 4) - Math.abs(-6)); print?',
            options: ['10.0', '10', '22.0', '2.0'],
            correctAnswer: 0,
            explanation: 'Math.pow(2, 4) is the double 16.0 and Math.abs(-6) is the int 6, so the difference is the double 10.0. Treating the result as an int drops the decimal, adding instead of subtracting gives 22.0, and reading pow as multiplication gives 2.0.'
          }
        ]
      }
    },
    {
      id: 'csausing4-random',
      type: 'text' as const,
      content: `
## Random Integers in Any Range

Part 1 used \`(int) (Math.random() * n)\` for a value from 0 to n − 1. The general pattern for a random int from **min** to **max**, inclusive, is:

\`\`\`java
int value = (int) (Math.random() * (max - min + 1)) + min;
\`\`\`

### Why it works: a die roll (min 1, max 6)

| Step | Expression | Possible values |
|------|------------|-----------------|
| 1 | \`Math.random()\` | 0.0 up to, not including, 1.0 |
| 2 | \`Math.random() * 6\` | 0.0 up to, not including, 6.0 |
| 3 | \`(int) (Math.random() * 6)\` | 0, 1, 2, 3, 4, 5 |
| 4 | \`(int) (Math.random() * 6) + 1\` | 1, 2, 3, 4, 5, 6 |

The multiplier is the **number of possible values**, max − min + 1. The added number is the **smallest value**.

### Common ranges

| Goal | Expression | Count of values |
|------|------------|-----------------|
| 0 to 9 | \`(int) (Math.random() * 10)\` | 10 |
| 10 to 20 | \`(int) (Math.random() * 11) + 10\` | 11 |
| -5 to 5 | \`(int) (Math.random() * 11) - 5\` | 11 |
| even numbers 0 to 10 | \`(int) (Math.random() * 6) * 2\` | 6 |
| a double from 2.0 up to 5.0 | \`Math.random() * 3 + 2\` | any double in that interval |

### Reading an expression backward

For \`(int) (Math.random() * 15) + 5\`: the smallest value is the added number, **5**. The largest is (multiplier − 1) + added number = 14 + 5 = **19**.
      `
    },
    {
      id: 'csausing4-traps',
      type: 'text' as const,
      content: `
## Cast-Placement Traps

A cast applies only to the value **immediately to its right**. Parentheses decide what that value is.

| Expression | What happens | Values |
|------------|--------------|--------|
| \`(int) Math.random() * 6\` | the cast turns Math.random() into 0 first, then 0 × 6 | always 0 |
| \`(int) (Math.random() * 6) + 1\` | cast the product, then add 1 | 1 to 6 |
| \`(int) (Math.random() * 6 + 1)\` | cast after adding; same values | 1 to 6 |
| \`(int) (Math.random() * (max - min)) + min\` | multiplier is one too small | min to max − 1 |
| \`int r = Math.random() * 6;\` | no cast at all | compile error |

> 📘 **AP Connection:** Multiple-choice questions often show four random expressions that differ only in a cast's position or a ± 1. Check two things: the multiplier equals the count of values, and the cast wraps the whole product.
      `
    },
    {
      id: 'csausing4-input',
      type: 'input-boxes' as const,
      content: `
**Find the Range** ✍️

Consider \`int r = (int) (Math.random() * 8) + 3;\`

1) The smallest value r can have is ___

2) The largest value r can have is ___

3) In \`(int) (Math.random() * ?) + 20\`, the number that replaces ? to produce a random int from 20 to 45, inclusive, is ___
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['3', '10', '26'],
        hint1: 'The cast product is at least 0. Add the constant.',
        hint2: 'The cast product is at most the multiplier minus 1.',
        hint3: 'The multiplier is the count of values: max − min + 1.',
        explanation: '1) 0 + 3 = 3. 2) 7 + 3 = 10. 3) 45 − 20 + 1 = 26.'
      }
    },
    {
      id: 'csausing4-applied',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which expression produces a random integer from 10 to 25, inclusive?',
            options: [
              '(int) (Math.random() * 15) + 10',
              '(int) (Math.random() * 16) + 10',
              '(int) (Math.random() * 25) + 10',
              '(int) Math.random() * 16 + 10'
            ],
            correctAnswer: 1,
            explanation: 'There are 25 − 10 + 1 = 16 possible values, so the multiplier is 16 and the added number is 10. Multiplying by 15 never reaches 25, multiplying by 25 reaches 34, and casting Math.random() alone always gives 0, so that version is always 10.'
          },
          {
            question: 'After int roll = (int) (Math.random() * 4) * 5; runs, which set lists every value roll can hold?',
            options: [
              '0, 5, 10, 15',
              '5, 10, 15, 20',
              '0, 5, 10, 15, 20',
              '0, 4, 8, 12, 16'
            ],
            correctAnswer: 0,
            explanation: 'The cast product is 0, 1, 2, or 3, and multiplying by 5 gives 0, 5, 10, or 15. Twenty would need a cast product of 4, which never occurs, and 0 through 16 by fours comes from swapping the 4 and the 5.'
          }
        ]
      }
    }
  ]
};
