export const csaVariablesTypesPart1Data = {
  topicSlug: 'csa-variables-types',
  sections: [
    {
      id: 'csavt1-intro',
      type: 'text' as const,
      content: `
# 📦 Variables & Data Types

**Part 1 of 7 — Primitive Types, Declarations, and Casting**

---

## Primitive Data Types in Java

| Type | Size | Range / Description | Example |
|------|------|-------------------|---------|
| **int** | 32 bits | -2,147,483,648 to 2,147,483,647 | \`int count = 42;\` |
| **double** | 64 bits | Decimal numbers (floating-point) | \`double gpa = 3.95;\` |
| **boolean** | 1 bit | \`true\` or \`false\` only | \`boolean passed = true;\` |
| **char** | 16 bits | Single Unicode character | \`char grade = 'A';\` |

> 🔑 **AP CSA focuses on int, double, and boolean.** These three primitives appear on nearly every exam.

---

## Declaring and Initializing Variables

\`\`\`java
// Declaration (no value yet)
int score;

// Initialization (assigning a value)
score = 95;

// Declaration + initialization in one step
double price = 19.99;
boolean isValid = true;
\`\`\`

### Naming Conventions
- **camelCase** for variables and methods: \`studentName\`, \`calculateAverage()\`
- **PascalCase** for classes: \`Student\`, \`ArrayList\`
- **ALL_CAPS** for constants: \`final int MAX_SIZE = 100;\`
      `
    },
    {
      id: 'csavt1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
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
      content: `
## Type Casting

| Cast Type | Description | Example | Result |
|-----------|-----------|---------|--------|
| **Widening (implicit)** | Smaller type to larger; automatic | \`double d = 5;\` | \`d = 5.0\` |
| **Narrowing (explicit)** | Larger type to smaller; requires cast | \`int n = (int) 3.9;\` | \`n = 3\` (truncated) |

### Integer Division vs. Double Division

\`\`\`java
int a = 7 / 2;           // 3 (integer division truncates)
double b = 7 / 2;        // 3.0 (still integer division, then widened)
double c = 7.0 / 2;      // 3.5 (one operand is double, so double division)
double d = (double) 7 / 2; // 3.5 (cast forces double division)
\`\`\`

## The \`final\` Keyword

\`\`\`java
final double TAX_RATE = 0.08;  // Cannot be reassigned
TAX_RATE = 0.10;  // COMPILE ERROR!
\`\`\`

A \`final\` variable is a **constant** — its value cannot change after initialization.
      `
    },
    {
      id: 'csavt1-input',
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

1) In Java, dividing two integers (7 / 2) gives _______ because the decimal is truncated.

2) To force 7 / 2 to produce 3.5, you can cast one operand: (______) 7 / 2.

3) The keyword _______ makes a variable constant (its value cannot be changed).
      `,
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
      content: `
**Classify the Type** 🔍
      `,
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
      content: `
## AP Exam Strategy: Variables & Types

- **Integer division** is tested heavily — always check if both operands are ints
- Remember: casting to int TRUNCATES (drops decimal), it does NOT round
- \`double d = 7 / 2;\` is a common trick — the division happens FIRST as int (= 3), then widens to 3.0
- Know that \`final\` prevents reassignment but the AP exam rarely tests it directly
- Trace code carefully: pay attention to what TYPE each variable is declared as
      `
    },
    {
      id: 'csavt1-applied',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is printed?\nint a = 10;\nint b = 3;\ndouble result = a / b;\nSystem.out.println(result);',
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
