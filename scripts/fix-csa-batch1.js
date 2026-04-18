const fs = require('fs');
const path = require('path');
const dir = path.join(__dirname, '..', 'src', 'data', 'interactive-lessons');

function write(name, content) {
  fs.writeFileSync(path.join(dir, name), content);
  console.log('Wrote:', name);
}

// ─── 1. Variables & Types ───
write('csa-variables-types-part1.ts', `export const csaVariablesTypesPart1Data = {
  topicSlug: 'csa-variables-types',
  sections: [
    {
      id: 'csavt1-intro',
      type: 'text' as const,
      content: \`
# 📦 Variables & Data Types

**Part 1 of 7 — Primitive Types, Declarations, and Casting**

---

## Primitive Data Types in Java

| Type | Size | Range / Description | Example |
|------|------|-------------------|---------|
| **int** | 32 bits | -2,147,483,648 to 2,147,483,647 | \\\`int count = 42;\\\` |
| **double** | 64 bits | Decimal numbers (floating-point) | \\\`double gpa = 3.95;\\\` |
| **boolean** | 1 bit | \\\`true\\\` or \\\`false\\\` only | \\\`boolean passed = true;\\\` |
| **char** | 16 bits | Single Unicode character | \\\`char grade = 'A';\\\` |

> 🔑 **AP CSA focuses on int, double, and boolean.** These three primitives appear on nearly every exam.

---

## Declaring and Initializing Variables

\\\`\\\`\\\`java
// Declaration (no value yet)
int score;

// Initialization (assigning a value)
score = 95;

// Declaration + initialization in one step
double price = 19.99;
boolean isValid = true;
\\\`\\\`\\\`

### Naming Conventions
- **camelCase** for variables and methods: \\\`studentName\\\`, \\\`calculateAverage()\\\`
- **PascalCase** for classes: \\\`Student\\\`, \\\`ArrayList\\\`
- **ALL_CAPS** for constants: \\\`final int MAX_SIZE = 100;\\\`
      \`
    },
    {
      id: 'csavt1-quiz1',
      type: 'multiple-choice' as const,
      content: \`
**Concept Check** 🎯
      \`,
      exercise: {
        questions: [
          {
            question: 'What is the result of: int x = 7 / 2;',
            options: [
              'x = 3.5',
              'x = 3',
              'x = 4',
              'Compile error'
            ],
            correctAnswer: 1,
            explanation: 'Integer division in Java truncates the decimal. 7 / 2 = 3 (not 3.5) because both operands are ints, so the result is an int with the fractional part discarded.'
          },
          {
            question: 'Which declaration is valid in Java?',
            options: [
              'int 2ndPlace = 5;',
              'double my-score = 9.5;',
              'boolean isReady = true;',
              'String char = "hello";'
            ],
            correctAnswer: 2,
            explanation: 'Variable names cannot start with a digit (2ndPlace), cannot contain hyphens (my-score), and cannot be reserved words (char). isReady follows valid camelCase naming rules.'
          }
        ]
      }
    },
    {
      id: 'csavt1-content',
      type: 'text' as const,
      content: \`
## Type Casting

| Cast Type | Description | Example | Result |
|-----------|-----------|---------|--------|
| **Widening (implicit)** | Smaller type to larger; automatic | \\\`double d = 5;\\\` | \\\`d = 5.0\\\` |
| **Narrowing (explicit)** | Larger type to smaller; requires cast | \\\`int n = (int) 3.9;\\\` | \\\`n = 3\\\` (truncated) |

### Integer Division vs. Double Division

\\\`\\\`\\\`java
int a = 7 / 2;           // 3 (integer division truncates)
double b = 7 / 2;        // 3.0 (still integer division, then widened)
double c = 7.0 / 2;      // 3.5 (one operand is double, so double division)
double d = (double) 7 / 2; // 3.5 (cast forces double division)
\\\`\\\`\\\`

## The \\\`final\\\` Keyword

\\\`\\\`\\\`java
final double TAX_RATE = 0.08;  // Cannot be reassigned
TAX_RATE = 0.10;  // COMPILE ERROR!
\\\`\\\`\\\`

A \\\`final\\\` variable is a **constant** — its value cannot change after initialization.
      \`
    },
    {
      id: 'csavt1-input',
      type: 'input-boxes' as const,
      content: \`
**Applied Recall** ✍️

1) In Java, dividing two integers (7 / 2) gives _______ because the decimal is truncated.

2) To force 7 / 2 to produce 3.5, you can cast one operand: (______) 7 / 2.

3) The keyword _______ makes a variable constant (its value cannot be changed).
      \`,
      exercise: {
        boxes: 3,
        correctAnswers: ['3', 'double', 'final'],
        hint1: 'Integer division drops the fractional part.',
        hint2: 'Cast to the type that supports decimals.',
        hint3: 'This keyword means the value is set once and cannot be reassigned.',
        explanation: '7 / 2 = 3 (integer division). (double) 7 / 2 = 3.5. final = constant.'
      }
    },
    {
      id: 'csavt1-dropdown',
      type: 'dropdown-select' as const,
      content: \`
**Classify the Type** 🔍
      \`,
      exercise: {
        dropdowns: [
          {
            label: 'The expression (int) 4.9 evaluates to ___',
            options: ['4 (truncation, not rounding)', '5 (rounded up)', '4.9 (unchanged)', 'Compile error']
          },
          {
            label: 'The variable declaration double x = 10; performs a ___ cast',
            options: ['Widening (implicit) cast from int to double', 'Narrowing (explicit) cast', 'No casting occurs', 'Illegal operation']
          },
          {
            label: 'The correct Java naming convention for a variable is ___',
            options: ['camelCase (studentAge)', 'PascalCase (StudentAge)', 'snake_case (student_age)', 'ALL_CAPS (STUDENT_AGE)']
          }
        ],
        correctAnswers: ['4 (truncation, not rounding)', 'Widening (implicit) cast from int to double', 'camelCase (studentAge)'],
        hint1: 'Casting to int truncates, it does not round.',
        hint2: 'int fits inside double without data loss.',
        hint3: 'Variables start lowercase; each subsequent word capitalized.',
        explanation: '(int) 4.9 = 4 (truncated). int to double = widening. Java variables use camelCase.'
      }
    },
    {
      id: 'csavt1-strategy',
      type: 'text' as const,
      content: \`
## AP Exam Strategy: Variables & Types

- **Integer division** is tested heavily — always check if both operands are ints
- Remember: casting to int TRUNCATES (drops decimal), it does NOT round
- \\\`double d = 7 / 2;\\\` is a common trick — the division happens FIRST as int (= 3), then widens to 3.0
- Know that \\\`final\\\` prevents reassignment but the AP exam rarely tests it directly
- Trace code carefully: pay attention to what TYPE each variable is declared as
      \`
    },
    {
      id: 'csavt1-applied',
      type: 'multiple-choice' as const,
      content: \`
**AP-Style Application** 🎯
      \`,
      exercise: {
        questions: [
          {
            question: 'What is printed?\\nint a = 10;\\nint b = 3;\\ndouble result = a / b;\\nSystem.out.println(result);',
            options: [
              '3.3333333333333335',
              '3.0',
              '3',
              '3.33'
            ],
            correctAnswer: 1,
            explanation: 'a / b is integer division (both ints): 10 / 3 = 3. Then 3 is widened to 3.0 when stored in the double variable result. The decimal division never happens.'
          },
          {
            question: 'Which code correctly computes the average of three int test scores as a double?',
            options: [
              'double avg = score1 + score2 + score3 / 3;',
              'double avg = (score1 + score2 + score3) / 3;',
              'double avg = (double)(score1 + score2 + score3) / 3;',
              'int avg = (score1 + score2 + score3) / 3.0;'
            ],
            correctAnswer: 2,
            explanation: 'Option C casts the sum to double before dividing, ensuring double division. Option A has order-of-operations error. Option B does integer division. Option D has a type mismatch.'
          }
        ]
      }
    }
  ]
};
`);

// ─── 2. Expressions & Operators ───
write('csa-expressions-operators-part1.ts', `export const csaExpressionsOperatorsPart1Data = {
  topicSlug: 'csa-expressions-operators',
  sections: [
    {
      id: 'csaeo1-intro',
      type: 'text' as const,
      content: \`
# ➗ Expressions & Operators

**Part 1 of 7 — Arithmetic, Assignment, and the Modulus Operator**

---

## Arithmetic Operators

| Operator | Operation | Example | Result |
|----------|----------|---------|--------|
| \\\`+\\\` | Addition | \\\`5 + 3\\\` | \\\`8\\\` |
| \\\`-\\\` | Subtraction | \\\`10 - 4\\\` | \\\`6\\\` |
| \\\`*\\\` | Multiplication | \\\`6 * 7\\\` | \\\`42\\\` |
| \\\`/\\\` | Division | \\\`7 / 2\\\` | \\\`3\\\` (int) or \\\`3.5\\\` (double) |
| \\\`%\\\` | Modulus (remainder) | \\\`7 % 3\\\` | \\\`1\\\` |

> 🔑 **Modulus (%)** returns the remainder after division. It is essential for checking even/odd, extracting digits, and cycling through values.

---

## Modulus Use Cases

| Expression | Result | Use Case |
|-----------|--------|----------|
| \\\`n % 2 == 0\\\` | true if n is even | Even/odd check |
| \\\`n % 10\\\` | Last digit of n | Extracting ones digit |
| \\\`n / 10\\\` | Removes last digit | Extracting tens digit (int division) |
| \\\`n % 3 == 0\\\` | true if n divisible by 3 | Divisibility check |

## Compound Assignment Operators

| Operator | Equivalent To | Example |
|----------|-------------|---------|
| \\\`+=\\\` | \\\`x = x + n\\\` | \\\`x += 5;\\\` |
| \\\`-=\\\` | \\\`x = x - n\\\` | \\\`x -= 3;\\\` |
| \\\`*=\\\` | \\\`x = x * n\\\` | \\\`x *= 2;\\\` |
| \\\`/=\\\` | \\\`x = x / n\\\` | \\\`x /= 4;\\\` |
| \\\`%=\\\` | \\\`x = x % n\\\` | \\\`x %= 3;\\\` |
| \\\`++\\\` | \\\`x = x + 1\\\` | \\\`x++;\\\` |
| \\\`--\\\` | \\\`x = x - 1\\\` | \\\`x--;\\\` |
      \`
    },
    {
      id: 'csaeo1-quiz1',
      type: 'multiple-choice' as const,
      content: \`
**Concept Check** 🎯
      \`,
      exercise: {
        questions: [
          {
            question: 'What is the value of 17 % 5?',
            options: [
              '3',
              '2',
              '3.4',
              '5'
            ],
            correctAnswer: 1,
            explanation: '17 / 5 = 3 remainder 2. The modulus operator returns the remainder, so 17 % 5 = 2.'
          },
          {
            question: 'After executing: int x = 10; x %= 3; what is x?',
            options: [
              '3',
              '1',
              '10',
              '0'
            ],
            correctAnswer: 1,
            explanation: 'x %= 3 is equivalent to x = x % 3 = 10 % 3 = 1. The remainder when dividing 10 by 3 is 1.'
          }
        ]
      }
    },
    {
      id: 'csaeo1-content',
      type: 'text' as const,
      content: \`
## Order of Operations (Precedence)

| Priority | Operators | Description |
|----------|----------|-----------|
| 1 (highest) | \\\`()\\\` | Parentheses |
| 2 | \\\`* / %\\\` | Multiplication, division, modulus |
| 3 | \\\`+ -\\\` | Addition, subtraction |
| 4 (lowest) | \\\`= += -=\\\` etc. | Assignment |

### Example Traces

\\\`\\\`\\\`java
int result = 2 + 3 * 4;     // 2 + 12 = 14 (not 20)
int result2 = (2 + 3) * 4;  // 5 * 4 = 20
int result3 = 10 - 4 / 2;   // 10 - 2 = 8 (not 3)
int result4 = 15 % 4 + 2;   // 3 + 2 = 5
\\\`\\\`\\\`

## String Concatenation with +

\\\`\\\`\\\`java
String name = "AP";
int score = 5;
System.out.println(name + " Score: " + score);
// Output: AP Score: 5

// Watch for this trick:
System.out.println(1 + 2 + " cats");   // "3 cats" (1+2 computed first)
System.out.println("cats " + 1 + 2);   // "cats 12" (string concat left to right)
\\\`\\\`\\\`
      \`
    },
    {
      id: 'csaeo1-input',
      type: 'input-boxes' as const,
      content: \`
**Applied Recall** ✍️

1) The expression 23 % 5 evaluates to _______.

2) In Java, multiplication and division have _______ precedence than addition and subtraction.

3) The expression "Score: " + 3 + 4 evaluates to the string "_______".
      \`,
      exercise: {
        boxes: 3,
        correctAnswers: ['3', 'higher', 'Score: 34'],
        hint1: '23 / 5 = 4 remainder ?',
        hint2: 'They are evaluated first, like in standard math.',
        hint3: 'Once a String is involved, + concatenates left to right.',
        explanation: '23 % 5 = 3. * / % have higher precedence. "Score: " + 3 + 4 = "Score: 3" + 4 = "Score: 34".'
      }
    },
    {
      id: 'csaeo1-dropdown',
      type: 'dropdown-select' as const,
      content: \`
**Evaluate the Expression** 🔍
      \`,
      exercise: {
        dropdowns: [
          {
            label: 'The expression 2 + 3 * 4 evaluates to ___',
            options: ['14', '20', '24', '12']
          },
          {
            label: 'To check if an integer n is even, use the condition ___',
            options: ['n % 2 == 0', 'n / 2 == 0', 'n * 2 == 0', 'n + 2 == 0']
          },
          {
            label: 'After int x = 5; x++; the value of x is ___',
            options: ['6', '5', '4', '10']
          }
        ],
        correctAnswers: ['14', 'n % 2 == 0', '6'],
        hint1: 'Multiplication before addition.',
        hint2: 'Even numbers have 0 remainder when divided by 2.',
        hint3: '++ increments by 1.',
        explanation: '3*4=12, then +2=14. n%2==0 checks even. x++ changes 5 to 6.'
      }
    },
    {
      id: 'csaeo1-strategy',
      type: 'text' as const,
      content: \`
## AP Exam Strategy: Expressions & Operators

- **Modulus (%)** appears on almost every AP exam — know how to extract digits and check divisibility
- Watch for **operator precedence** tricks — always evaluate * / % before + -
- **String concatenation** with + is a classic trap: \\\`1 + 2 + " cats"\\\` vs \\\`"cats " + 1 + 2\\\`
- Trace code step by step — do not try to evaluate complex expressions in your head all at once
- Remember: integer division and modulus work together. \\\`123 / 10 = 12\\\` and \\\`123 % 10 = 3\\\`
      \`
    },
    {
      id: 'csaeo1-applied',
      type: 'multiple-choice' as const,
      content: \`
**AP-Style Application** 🎯
      \`,
      exercise: {
        questions: [
          {
            question: 'What does the following print?\\nint n = 1234;\\nSystem.out.println(n % 10);\\nSystem.out.println(n / 10 % 10);',
            options: [
              '4 then 3',
              '1 then 2',
              '4 then 2',
              '34 then 12'
            ],
            correctAnswer: 0,
            explanation: 'n % 10 = 1234 % 10 = 4 (ones digit). n / 10 = 123 (int division), then 123 % 10 = 3 (tens digit). This pattern extracts individual digits.'
          },
          {
            question: 'What is printed?\\nSystem.out.println("Result: " + 5 + 3);\\nSystem.out.println("Result: " + (5 + 3));',
            options: [
              'Result: 53 then Result: 53',
              'Result: 8 then Result: 8',
              'Result: 53 then Result: 8',
              'Result: 8 then Result: 53'
            ],
            correctAnswer: 2,
            explanation: 'Line 1: "Result: " + 5 = "Result: 5", then + 3 = "Result: 53" (string concatenation). Line 2: (5 + 3) = 8 first (parentheses), then "Result: " + 8 = "Result: 8".'
          }
        ]
      }
    }
  ]
};
`);

// ─── 3. Boolean & If ───
write('csa-boolean-if-part1.ts', `export const csaBooleanIfPart1Data = {
  topicSlug: 'csa-boolean-if',
  sections: [
    {
      id: 'csabi1-intro',
      type: 'text' as const,
      content: \`
# ✅ Boolean Expressions & If Statements

**Part 1 of 7 — Comparisons, Logical Operators, and Conditional Logic**

---

## Comparison Operators

| Operator | Meaning | Example | Result |
|----------|---------|---------|--------|
| \\\`==\\\` | Equal to | \\\`5 == 5\\\` | \\\`true\\\` |
| \\\`!=\\\` | Not equal to | \\\`5 != 3\\\` | \\\`true\\\` |
| \\\`<\\\` | Less than | \\\`3 < 7\\\` | \\\`true\\\` |
| \\\`>\\\` | Greater than | \\\`7 > 3\\\` | \\\`true\\\` |
| \\\`<=\\\` | Less than or equal | \\\`5 <= 5\\\` | \\\`true\\\` |
| \\\`>=\\\` | Greater than or equal | \\\`8 >= 10\\\` | \\\`false\\\` |

> 🔑 **== vs .equals():** Use \\\`==\\\` for primitives (int, double, boolean). Use \\\`.equals()\\\` for objects like Strings. \\\`==\\\` on objects compares **references**, not content!

---

## Logical Operators

| Operator | Name | Behavior | Example |
|----------|------|----------|---------|
| \\\`&&\\\` | AND | Both must be true | \\\`age >= 16 && hasLicense\\\` |
| \\\`\\|\\|\\\` | OR | At least one must be true | \\\`day == 6 \\|\\| day == 7\\\` |
| \\\`!\\\` | NOT | Flips true/false | \\\`!isRaining\\\` |

### Short-Circuit Evaluation
- \\\`&&\\\`: If the left side is \\\`false\\\`, the right side is NOT evaluated
- \\\`||\\\`: If the left side is \\\`true\\\`, the right side is NOT evaluated
      \`
    },
    {
      id: 'csabi1-quiz1',
      type: 'multiple-choice' as const,
      content: \`
**Concept Check** 🎯
      \`,
      exercise: {
        questions: [
          {
            question: 'What is the value of: !(5 > 3 && 2 > 4)',
            options: [
              'true',
              'false',
              'Compile error',
              'null'
            ],
            correctAnswer: 0,
            explanation: '5 > 3 is true. 2 > 4 is false. true && false = false. !(false) = true.'
          },
          {
            question: 'String s1 = "hello"; String s2 = "hello"; What does s1 == s2 check?',
            options: [
              'Whether the contents of s1 and s2 are the same',
              'Whether s1 and s2 refer to the same object in memory',
              'Whether s1 is longer than s2',
              'Whether s1 comes before s2 alphabetically'
            ],
            correctAnswer: 1,
            explanation: 'For objects (including Strings), == compares references (memory addresses), not content. Use s1.equals(s2) to compare String content. Note: Java may intern string literals, so == can sometimes return true, but this is unreliable.'
          }
        ]
      }
    },
    {
      id: 'csabi1-content',
      type: 'text' as const,
      content: \`
## If / Else If / Else Statements

\\\`\\\`\\\`java
int score = 85;

if (score >= 90) {
    System.out.println("A");
} else if (score >= 80) {
    System.out.println("B");     // This executes
} else if (score >= 70) {
    System.out.println("C");
} else {
    System.out.println("F");
}
\\\`\\\`\\\`

### Key Rules
1. Only the **first** matching branch executes — even if later conditions are also true
2. \\\`else\\\` is optional; it handles all remaining cases
3. Curly braces \\\`{}\\\` are technically optional for single statements but always recommended

## De Morgan's Laws

| Original | Equivalent |
|----------|-----------|
| \\\`!(A && B)\\\` | \\\`!A \\|\\| !B\\\` |
| \\\`!(A \\|\\| B)\\\` | \\\`!A && !B\\\` |

> When you negate a compound boolean: **flip the operator** (AND becomes OR) and **negate each part**.

\\\`\\\`\\\`java
// These are equivalent:
!(age >= 18 && hasID)
age < 18 || !hasID
\\\`\\\`\\\`
      \`
    },
    {
      id: 'csabi1-input',
      type: 'input-boxes' as const,
      content: \`
**Applied Recall** ✍️

1) To compare the content of two String objects, use the _______ method instead of ==.

2) De Morgan's Law: !(A && B) is equivalent to !A _______ !B.

3) In short-circuit evaluation, if the left side of && is false, the right side is _______ evaluated.
      \`,
      exercise: {
        boxes: 3,
        correctAnswers: ['.equals()', '||', 'not'],
        hint1: 'A method call on String objects.',
        hint2: 'AND flips to the other logical operator.',
        hint3: 'Short-circuit means skipping unnecessary evaluation.',
        explanation: '.equals() for String comparison. !(A && B) = !A || !B. Short-circuit: false && anything = false (right side skipped).'
      }
    },
    {
      id: 'csabi1-dropdown',
      type: 'dropdown-select' as const,
      content: \`
**Evaluate the Logic** 🔍
      \`,
      exercise: {
        dropdowns: [
          {
            label: 'The expression !(true || false) evaluates to ___',
            options: ['false', 'true', 'null', 'Compile error']
          },
          {
            label: 'Using De Morgan s Law, !(x > 5 || y < 2) is equivalent to ___',
            options: ['x <= 5 && y >= 2', 'x <= 5 || y >= 2', 'x > 5 && y < 2', 'x > 5 || y < 2']
          },
          {
            label: 'In an if/else if/else chain, how many branches execute?',
            options: ['Exactly one (the first matching branch)', 'All branches that match', 'Always two branches', 'Zero branches if no match']
          }
        ],
        correctAnswers: ['false', 'x <= 5 && y >= 2', 'Exactly one (the first matching branch)'],
        hint1: 'true || false = true, then negate.',
        hint2: 'Negate each part and flip || to &&.',
        hint3: 'Only the first true condition runs.',
        explanation: '!(true) = false. De Morgan: negate each, flip operator. Only first matching branch executes in if/else if/else.'
      }
    },
    {
      id: 'csabi1-strategy',
      type: 'text' as const,
      content: \`
## AP Exam Strategy: Booleans & If Statements

- **De Morgan's Laws** appear on nearly every exam — practice transforming !(A && B) and !(A || B)
- == vs .equals() for Strings is a classic trap question
- When tracing if/else if/else, stop at the FIRST true condition
- Watch for **nested ifs** — trace them carefully with indentation
- Short-circuit evaluation can prevent errors: \\\`if (arr != null && arr.length > 0)\\\` is safe because if arr is null, the second part is never evaluated
      \`
    },
    {
      id: 'csabi1-applied',
      type: 'multiple-choice' as const,
      content: \`
**AP-Style Application** 🎯
      \`,
      exercise: {
        questions: [
          {
            question: 'What is printed?\\nint x = 15;\\nif (x > 20) {\\n    System.out.print("A");\\n} else if (x > 10) {\\n    System.out.print("B");\\n} else if (x > 5) {\\n    System.out.print("C");\\n}',
            options: [
              'A',
              'B',
              'BC',
              'C'
            ],
            correctAnswer: 1,
            explanation: 'x = 15. x > 20 is false. x > 10 is true, so "B" is printed and the rest is skipped. Even though x > 5 is also true, only the first matching branch executes.'
          },
          {
            question: 'Which expression is equivalent to !(a < 10 && b >= 5)?',
            options: [
              'a < 10 || b >= 5',
              'a >= 10 && b < 5',
              'a >= 10 || b < 5',
              '!(a < 10) && !(b >= 5)'
            ],
            correctAnswer: 2,
            explanation: 'By De Morgan s Law: !(A && B) = !A || !B. So !(a < 10) = a >= 10 and !(b >= 5) = b < 5, combined with || gives: a >= 10 || b < 5.'
          }
        ]
      }
    }
  ]
};
`);

// ─── 4. Conditionals ───
write('csa-conditionals-part1.ts', `export const csaConditionalsPart1Data = {
  topicSlug: 'csa-conditionals',
  sections: [
    {
      id: 'csaco1-intro',
      type: 'text' as const,
      content: \`
# 🔀 Conditionals (Advanced)

**Part 1 of 7 — Nested Ifs, Complex Conditions, and Common Patterns**

---

## Nested If Statements

\\\`\\\`\\\`java
int temp = 75;
boolean isSunny = true;

if (temp > 70) {
    if (isSunny) {
        System.out.println("Go to the beach!");
    } else {
        System.out.println("Stay in and read.");
    }
} else {
    System.out.println("Too cold for outdoor activities.");
}
\\\`\\\`\\\`

> 🔑 **Nested ifs** create conditions within conditions. The inner if only runs when the outer if is true. Trace these from the outside in.

---

## Equivalent Conditions

Many conditions can be rewritten in different ways:

| Original | Equivalent | Why |
|----------|-----------|-----|
| \\\`if (x > 0) { return true; } else { return false; }\\\` | \\\`return x > 0;\\\` | The boolean expression IS the result |
| \\\`if (flag == true)\\\` | \\\`if (flag)\\\` | flag is already boolean |
| \\\`if (flag == false)\\\` | \\\`if (!flag)\\\` | Negating is cleaner |
| \\\`if (x >= 0 && x <= 100)\\\` | Range check: 0 to 100 | Common pattern for bounds checking |
      \`
    },
    {
      id: 'csaco1-quiz1',
      type: 'multiple-choice' as const,
      content: \`
**Concept Check** 🎯
      \`,
      exercise: {
        questions: [
          {
            question: 'What is printed?\\nint x = 5; int y = 10;\\nif (x < y) {\\n    if (x + y > 20) {\\n        System.out.println("A");\\n    } else {\\n        System.out.println("B");\\n    }\\n} else {\\n    System.out.println("C");\\n}',
            options: [
              'A',
              'B',
              'C',
              'AB'
            ],
            correctAnswer: 1,
            explanation: 'x < y (5 < 10) is true, so we enter the outer if. Then x + y > 20 (15 > 20) is false, so the inner else executes and prints "B".'
          },
          {
            question: 'Which is equivalent to: if (done == true) return true; else return false;',
            options: [
              'return true;',
              'return done;',
              'return !done;',
              'return false;'
            ],
            correctAnswer: 1,
            explanation: 'Since done is already a boolean, the entire if/else just returns done as-is. If done is true, it returns true. If done is false, it returns false. So return done; is equivalent.'
          }
        ]
      }
    },
    {
      id: 'csaco1-content',
      type: 'text' as const,
      content: \`
## Common Conditional Patterns

### 1. Finding Min/Max
\\\`\\\`\\\`java
int max;
if (a > b) {
    max = a;
} else {
    max = b;
}
// Equivalent: int max = Math.max(a, b);
\\\`\\\`\\\`

### 2. Absolute Value
\\\`\\\`\\\`java
int absVal;
if (x < 0) {
    absVal = -x;
} else {
    absVal = x;
}
// Equivalent: int absVal = Math.abs(x);
\\\`\\\`\\\`

### 3. Clamping a Value
\\\`\\\`\\\`java
// Keep score between 0 and 100
if (score > 100) {
    score = 100;
} else if (score < 0) {
    score = 0;
}
\\\`\\\`\\\`

### 4. Dangling Else Problem
\\\`\\\`\\\`java
if (x > 0)
    if (y > 0)
        System.out.println("Both positive");
else
    System.out.println("This is the INNER else!");
// The else matches the NEAREST unmatched if (the inner one)
\\\`\\\`\\\`
      \`
    },
    {
      id: 'csaco1-input',
      type: 'input-boxes' as const,
      content: \`
**Applied Recall** ✍️

1) In a dangling else situation, the else always pairs with the _______ unmatched if.

2) The statement if (flag == true) can be simplified to if (_______).

3) Math.abs(-7) returns _______.
      \`,
      exercise: {
        boxes: 3,
        correctAnswers: ['nearest', 'flag', '7'],
        hint1: 'The closest one that does not already have an else.',
        hint2: 'The variable itself is already true or false.',
        hint3: 'Absolute value removes the negative sign.',
        explanation: 'Dangling else → nearest if. flag == true simplifies to flag. Math.abs(-7) = 7.'
      }
    },
    {
      id: 'csaco1-dropdown',
      type: 'dropdown-select' as const,
      content: \`
**Simplify the Code** 🔍
      \`,
      exercise: {
        dropdowns: [
          {
            label: 'if (x > 0) return true; else return false; simplifies to ___',
            options: ['return x > 0;', 'return true;', 'return false;', 'return x;']
          },
          {
            label: 'To check if x is between 1 and 100 inclusive, use ___',
            options: ['x >= 1 && x <= 100', 'x >= 1 || x <= 100', 'x > 1 && x < 100', '1 < x < 100']
          },
          {
            label: 'In Java, 1 < x < 100 is ___',
            options: ['A compile error (Java does not support chained comparisons)', 'Valid syntax for a range check', 'Equivalent to x >= 1 && x <= 100', 'A runtime exception']
          }
        ],
        correctAnswers: ['return x > 0;', 'x >= 1 && x <= 100', 'A compile error (Java does not support chained comparisons)'],
        hint1: 'The boolean expression is the return value.',
        hint2: 'AND ensures both bounds are satisfied.',
        hint3: 'Java requires explicit comparisons connected by && or ||.',
        explanation: 'Return the boolean directly. Use && for range checks. Java does not support chained comparisons like Python.'
      }
    },
    {
      id: 'csaco1-strategy',
      type: 'text' as const,
      content: \`
## AP Exam Strategy: Conditionals

- **Trace nested ifs** from the outside in — do not skip levels
- The **dangling else** is a trick question favorite — else matches the nearest unmatched if
- Simplify boolean returns: \\\`if (cond) return true; else return false;\\\` → \\\`return cond;\\\`
- \\\`Math.abs()\\\`, \\\`Math.max()\\\`, \\\`Math.min()\\\` are allowed on the AP exam — know them
- Watch for conditions that are always true or always false (tautologies/contradictions)
- Common error: using \\\`1 < x < 100\\\` — Java requires \\\`x > 1 && x < 100\\\`
      \`
    },
    {
      id: 'csaco1-applied',
      type: 'multiple-choice' as const,
      content: \`
**AP-Style Application** 🎯
      \`,
      exercise: {
        questions: [
          {
            question: 'What is printed?\\nint a = 3, b = 7, c = 5;\\nif (a > b)\\n    if (a > c)\\n        System.out.println("A largest");\\nelse\\n    System.out.println("Not A");\\nSystem.out.println("Done");',
            options: [
              'A largest then Done',
              'Not A then Done',
              'Done',
              'A largest then Not A then Done'
            ],
            correctAnswer: 2,
            explanation: 'a > b (3 > 7) is false, so the outer if body is skipped entirely. The else belongs to the INNER if (dangling else), so it is also skipped. Only "Done" prints.'
          },
          {
            question: 'Which method call returns the larger of two values x and y?',
            options: [
              'Math.max(x, y)',
              'Math.abs(x, y)',
              'Math.min(x, y)',
              'Math.pow(x, y)'
            ],
            correctAnswer: 0,
            explanation: 'Math.max(x, y) returns the larger value. Math.min returns the smaller. Math.abs returns absolute value of one number. Math.pow computes x raised to the y power.'
          }
        ]
      }
    }
  ]
};
`);

// ─── 5. Strings & Objects ───
write('csa-strings-objects-part1.ts', `export const csaStringsObjectsPart1Data = {
  topicSlug: 'csa-strings-objects',
  sections: [
    {
      id: 'csaso1-intro',
      type: 'text' as const,
      content: \`
# 🔤 Strings & Objects

**Part 1 of 7 — String Methods, Immutability, and Object Basics**

---

## String Methods (AP Subset)

| Method | Return Type | Description | Example |
|--------|-----------|-----------|---------|
| \\\`length()\\\` | int | Number of characters | \\\`"hello".length()\\\` → \\\`5\\\` |
| \\\`substring(start)\\\` | String | From start to end | \\\`"hello".substring(2)\\\` → \\\`"llo"\\\` |
| \\\`substring(start, end)\\\` | String | From start to end-1 | \\\`"hello".substring(1,4)\\\` → \\\`"ell"\\\` |
| \\\`indexOf(str)\\\` | int | First occurrence (-1 if not found) | \\\`"hello".indexOf("ll")\\\` → \\\`2\\\` |
| \\\`equals(str)\\\` | boolean | Content comparison | \\\`"hi".equals("hi")\\\` → \\\`true\\\` |
| \\\`compareTo(str)\\\` | int | Lexicographic: neg, 0, or pos | \\\`"apple".compareTo("banana")\\\` → negative |

> 🔑 **Strings are immutable** — once created, their content cannot be changed. Methods like \\\`substring()\\\` return a NEW String; the original is unchanged.

---

## String Indexing

\\\`\\\`\\\`
Index:   0  1  2  3  4
String: "h  e  l  l  o"
\\\`\\\`\\\`

- First character is at index **0** (zero-based)
- Last character is at index **length() - 1**
- \\\`substring(a, b)\\\` includes index \\\`a\\\` but EXCLUDES index \\\`b\\\`
      \`
    },
    {
      id: 'csaso1-quiz1',
      type: 'multiple-choice' as const,
      content: \`
**Concept Check** 🎯
      \`,
      exercise: {
        questions: [
          {
            question: 'What does "computer".substring(3, 6) return?',
            options: [
              '"put"',
              '"pute"',
              '"mpu"',
              '"comp"'
            ],
            correctAnswer: 0,
            explanation: '"computer" indices: c(0) o(1) m(2) p(3) u(4) t(5) e(6) r(7). substring(3, 6) takes indices 3, 4, 5 = "put" (start inclusive, end exclusive).'
          },
          {
            question: 'What does "hello".indexOf("lo") return?',
            options: [
              '2',
              '3',
              '4',
              '-1'
            ],
            correctAnswer: 1,
            explanation: '"hello" — "lo" starts at index 3 (h=0, e=1, l=2, l=3, o=4). indexOf returns the index of the first character of the found substring.'
          }
        ]
      }
    },
    {
      id: 'csaso1-content',
      type: 'text' as const,
      content: \`
## String Immutability

\\\`\\\`\\\`java
String s = "hello";
s.toUpperCase();          // Returns "HELLO" but s is still "hello"!
s = s.toUpperCase();      // Now s = "HELLO" (reassigned to new String)
\\\`\\\`\\\`

## compareTo() Details

| Return Value | Meaning |
|-------------|---------|
| **Negative** | Calling string comes before parameter alphabetically |
| **0** | Strings are equal |
| **Positive** | Calling string comes after parameter alphabetically |

\\\`\\\`\\\`java
"apple".compareTo("banana")  // Negative (a < b)
"cat".compareTo("cat")       // 0 (equal)
"dog".compareTo("cat")       // Positive (d > c)
\\\`\\\`\\\`

## Escape Sequences

| Sequence | Meaning |
|----------|---------|
| \\\`\\\\\\\\\\\` | Backslash |
| \\\`\\\\"\\\` | Double quote inside a String |
| \\\`\\\\n\\\` | Newline |
| \\\`\\\\t\\\` | Tab |
      \`
    },
    {
      id: 'csaso1-input',
      type: 'input-boxes' as const,
      content: \`
**Applied Recall** ✍️

1) String indexing in Java starts at _______ (not 1).

2) Strings in Java are _______, meaning their content cannot be changed after creation.

3) The method _______ is used to compare the content of two String objects (not ==).
      \`,
      exercise: {
        boxes: 3,
        correctAnswers: ['0', 'immutable', '.equals()'],
        hint1: 'Zero-based indexing.',
        hint2: 'Once created, the characters in a String cannot be modified.',
        hint3: 'A method that returns true if the Strings have the same characters.',
        explanation: 'Java uses 0-based indexing. Strings are immutable. Use .equals() for content comparison.'
      }
    },
    {
      id: 'csaso1-dropdown',
      type: 'dropdown-select' as const,
      content: \`
**Evaluate the Call** 🔍
      \`,
      exercise: {
        dropdowns: [
          {
            label: '"programming".substring(0, 4) returns ___',
            options: ['"prog"', '"program"', '"pro"', '"progr"']
          },
          {
            label: '"java".compareTo("python") returns a value that is ___',
            options: ['Negative (j comes before p)', 'Positive (j comes after p)', 'Zero (they are equal)', 'A compile error']
          },
          {
            label: '"test".indexOf("xyz") returns ___',
            options: ['-1 (not found)', '0', '4', 'An exception']
          }
        ],
        correctAnswers: ['"prog"', 'Negative (j comes before p)', '-1 (not found)'],
        hint1: 'Indices 0,1,2,3 — p,r,o,g.',
        hint2: 'j (106) is less than p (112) in Unicode.',
        hint3: 'indexOf returns -1 when the substring is not found.',
        explanation: 'substring(0,4) = "prog". "java" < "python" → negative. "xyz" not in "test" → -1.'
      }
    },
    {
      id: 'csaso1-strategy',
      type: 'text' as const,
      content: \`
## AP Exam Strategy: Strings

- **substring(a, b)** includes index a but EXCLUDES index b — practice counting characters
- **indexOf()** returns -1 if not found — check for this in conditional code
- Remember: Strings are immutable! Always capture the return value: \\\`s = s.substring(1);\\\`
- **== for Strings is WRONG** — always use \\\`.equals()\\\` on the AP exam
- compareTo returns negative/zero/positive — you do not need to know the exact number
- Practice tracing String manipulations character by character using index numbers
      \`
    },
    {
      id: 'csaso1-applied',
      type: 'multiple-choice' as const,
      content: \`
**AP-Style Application** 🎯
      \`,
      exercise: {
        questions: [
          {
            question: 'What is the value of s after this code?\\nString s = "abcdef";\\ns = s.substring(0, 2) + s.substring(4);',
            options: [
              '"abef"',
              '"abcdef"',
              '"cdef"',
              '"abcf"'
            ],
            correctAnswer: 0,
            explanation: 's.substring(0, 2) = "ab". s.substring(4) = "ef". Concatenation: "ab" + "ef" = "abef". This effectively removes characters at indices 2 and 3.'
          },
          {
            question: 'What does this method return for mystery("racecar")?\\npublic String mystery(String s) {\\n    String result = "";\\n    for (int i = s.length() - 1; i >= 0; i--) {\\n        result += s.substring(i, i + 1);\\n    }\\n    return result;\\n}',
            options: [
              '"racecar"',
              '"raceca"',
              '"r"',
              '"racecar " (with trailing space)'
            ],
            correctAnswer: 0,
            explanation: 'The method builds the string in reverse order. It takes each character from right to left: r,a,c,e,c,a,r → "racecar". Since "racecar" is a palindrome, the reverse is the same.'
          }
        ]
      }
    }
  ]
};
`);

// ─── 6. Using Objects ───
write('csa-using-objects-part1.ts', `export const csaUsingObjectsPart1Data = {
  topicSlug: 'csa-using-objects',
  sections: [
    {
      id: 'csauo1-intro',
      type: 'text' as const,
      content: \`
# 🏗️ Using Objects

**Part 1 of 7 — Creating Objects, Calling Methods, and References**

---

## Objects vs. Primitives

| Feature | Primitive | Object (Reference Type) |
|---------|----------|----------------------|
| **Storage** | Stores the actual value | Stores a reference (memory address) |
| **Types** | int, double, boolean, char | String, Scanner, ArrayList, custom classes |
| **Default value** | 0, 0.0, false | \\\`null\\\` |
| **Comparison** | == compares values | == compares references; use .equals() for content |
| **Methods** | None | Has methods you can call |

---

## Creating Objects with Constructors

\\\`\\\`\\\`java
// Syntax: ClassName objectName = new ClassName(arguments);
Scanner input = new Scanner(System.in);
String greeting = new String("hello");
ArrayList<Integer> numbers = new ArrayList<Integer>();
\\\`\\\`\\\`

### The \\\`new\\\` Keyword
- Allocates memory for the object
- Calls the **constructor** to initialize it
- Returns a reference to the new object

> 🔑 **null** means a reference variable does not point to any object. Calling a method on null causes a **NullPointerException**.
      \`
    },
    {
      id: 'csauo1-quiz1',
      type: 'multiple-choice' as const,
      content: \`
**Concept Check** 🎯
      \`,
      exercise: {
        questions: [
          {
            question: 'What happens when you write: String s = null; s.length();',
            options: [
              'Returns 0',
              'Returns -1',
              'Throws a NullPointerException',
              'Compile error'
            ],
            correctAnswer: 2,
            explanation: 'null means s does not reference any String object. Calling .length() on null triggers a NullPointerException at runtime because there is no object to call the method on.'
          },
          {
            question: 'Which of the following correctly creates a new object?',
            options: [
              'Scanner sc = Scanner(System.in);',
              'Scanner sc = new Scanner(System.in);',
              'new Scanner sc = Scanner(System.in);',
              'Scanner sc = new Scanner;'
            ],
            correctAnswer: 1,
            explanation: 'Object creation syntax: Type name = new Type(args); The new keyword is required before the constructor call, and parentheses are required even with no arguments.'
          }
        ]
      }
    },
    {
      id: 'csauo1-content',
      type: 'text' as const,
      content: \`
## Reference vs. Value

\\\`\\\`\\\`java
// Primitives: independent copies
int a = 5;
int b = a;    // b is a COPY of a
b = 10;       // a is still 5

// Objects: shared references
int[] arr1 = {1, 2, 3};
int[] arr2 = arr1;    // arr2 points to the SAME array
arr2[0] = 99;         // arr1[0] is now 99 too!
\\\`\\\`\\\`

### Aliasing
When two variables reference the same object, they are **aliases**. Changing the object through one variable affects the other.

## Method Calls

| Type | Syntax | Example |
|------|--------|---------|
| **Instance method** | \\\`object.method(args)\\\` | \\\`str.length()\\\` |
| **Static method** | \\\`ClassName.method(args)\\\` | \\\`Math.sqrt(16)\\\` |
| **Constructor** | \\\`new ClassName(args)\\\` | \\\`new ArrayList<>()\\\` |

### Static Methods (Class Methods)
- Called on the **class**, not on an object
- \\\`Math.abs(-5)\\\`, \\\`Math.pow(2, 3)\\\`, \\\`Math.random()\\\`
- No object needed: \\\`Math.max(a, b)\\\`
      \`
    },
    {
      id: 'csauo1-input',
      type: 'input-boxes' as const,
      content: \`
**Applied Recall** ✍️

1) A reference variable that points to no object has the value _______.

2) When two variables reference the same object, they are called _______.

3) Static methods like Math.abs() are called on the _______ itself, not on an instance.
      \`,
      exercise: {
        boxes: 3,
        correctAnswers: ['null', 'aliases', 'class'],
        hint1: 'The absence of an object reference.',
        hint2: 'Two names for the same underlying object.',
        hint3: 'Math.abs() — Math is a ___, not an object.',
        explanation: 'null = no object. Aliases = two references to same object. Static methods are called on the class.'
      }
    },
    {
      id: 'csauo1-dropdown',
      type: 'dropdown-select' as const,
      content: \`
**Classify the Concept** 🔍
      \`,
      exercise: {
        dropdowns: [
          {
            label: 'Math.random() returns a value in the range ___',
            options: ['0.0 (inclusive) to 1.0 (exclusive)', '0 to 100', '1 to 10', '-1.0 to 1.0']
          },
          {
            label: 'int[] a = {1,2,3}; int[] b = a; b[0] = 9; After this, a[0] is ___',
            options: ['9 (aliases reference the same array)', '1 (b is an independent copy)', '0 (reset to default)', 'Compile error']
          },
          {
            label: 'Calling a method on a null reference causes a ___',
            options: ['NullPointerException', 'ArrayIndexOutOfBoundsException', 'Compile error', 'The method returns null']
          }
        ],
        correctAnswers: ['0.0 (inclusive) to 1.0 (exclusive)', '9 (aliases reference the same array)', 'NullPointerException'],
        hint1: 'A double from 0 up to but not including 1.',
        hint2: 'Both variables point to the same array in memory.',
        hint3: 'No object to call the method on.',
        explanation: 'Math.random() returns [0.0, 1.0). Arrays are reference types (aliases). null.method() = NullPointerException.'
      }
    },
    {
      id: 'csauo1-strategy',
      type: 'text' as const,
      content: \`
## AP Exam Strategy: Using Objects

- **Aliasing** is commonly tested — know that assigning one array/object to another creates a shared reference, not a copy
- **NullPointerException** is the most common runtime error on the AP exam
- Know Math class static methods: \\\`abs\\\`, \\\`pow\\\`, \\\`sqrt\\\`, \\\`random\\\`, \\\`max\\\`, \\\`min\\\`
- Math.random() returns [0.0, 1.0) — to get a random int from 0 to n-1: \\\`(int)(Math.random() * n)\\\`
- Understand the difference between instance methods (called on objects) and static methods (called on classes)
      \`
    },
    {
      id: 'csauo1-applied',
      type: 'multiple-choice' as const,
      content: \`
**AP-Style Application** 🎯
      \`,
      exercise: {
        questions: [
          {
            question: 'Which expression generates a random integer in the range [1, 6] (simulating a die roll)?',
            options: [
              '(int)(Math.random() * 6)',
              '(int)(Math.random() * 6) + 1',
              '(int)(Math.random() * 7)',
              'Math.random() * 6 + 1'
            ],
            correctAnswer: 1,
            explanation: 'Math.random() * 6 gives [0.0, 6.0). Casting to int gives {0,1,2,3,4,5}. Adding 1 gives {1,2,3,4,5,6} — a proper die roll simulation.'
          },
          {
            question: 'What is printed?\\nString a = "hello";\\nString b = a;\\na = "world";\\nSystem.out.println(b);',
            options: [
              '"world"',
              '"hello"',
              'null',
              'Compile error'
            ],
            correctAnswer: 1,
            explanation: 'Strings are immutable. When a = "world" is executed, a points to a new String object "world", but b still points to the original "hello". Reassigning a does not affect b.'
          }
        ]
      }
    }
  ]
};
`);

console.log('Done with CSA batch 1 (6 files)');
