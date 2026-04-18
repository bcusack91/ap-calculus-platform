export const csaUsingObjectsPart1Data = {
  topicSlug: 'csa-using-objects',
  sections: [
    {
      id: 'csauo1-intro',
      type: 'text' as const,
      content: `
# 🏗️ Using Objects

**Part 1 of 7 — Creating Objects, Calling Methods, and References**

---

## Objects vs. Primitives

| Feature | Primitive | Object (Reference Type) |
|---------|----------|----------------------|
| **Storage** | Stores the actual value | Stores a reference (memory address) |
| **Types** | int, double, boolean, char | String, Scanner, ArrayList, custom classes |
| **Default value** | 0, 0.0, false | \`null\` |
| **Comparison** | == compares values | == compares references; use .equals() for content |
| **Methods** | None | Has methods you can call |

---

## Creating Objects with Constructors

\`\`\`java
// Syntax: ClassName objectName = new ClassName(arguments);
Scanner input = new Scanner(System.in);
String greeting = new String("hello");
ArrayList<Integer> numbers = new ArrayList<Integer>();
\`\`\`

### The \`new\` Keyword
- Allocates memory for the object
- Calls the **constructor** to initialize it
- Returns a reference to the new object

> 🔑 **null** means a reference variable does not point to any object. Calling a method on null causes a **NullPointerException**.
      `
    },
    {
      id: 'csauo1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
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
      content: `
## Reference vs. Value

\`\`\`java
// Primitives: independent copies
int a = 5;
int b = a;    // b is a COPY of a
b = 10;       // a is still 5

// Objects: shared references
int[] arr1 = {1, 2, 3};
int[] arr2 = arr1;    // arr2 points to the SAME array
arr2[0] = 99;         // arr1[0] is now 99 too!
\`\`\`

### Aliasing
When two variables reference the same object, they are **aliases**. Changing the object through one variable affects the other.

## Method Calls

| Type | Syntax | Example |
|------|--------|---------|
| **Instance method** | \`object.method(args)\` | \`str.length()\` |
| **Static method** | \`ClassName.method(args)\` | \`Math.sqrt(16)\` |
| **Constructor** | \`new ClassName(args)\` | \`new ArrayList<>()\` |

### Static Methods (Class Methods)
- Called on the **class**, not on an object
- \`Math.abs(-5)\`, \`Math.pow(2, 3)\`, \`Math.random()\`
- No object needed: \`Math.max(a, b)\`
      `
    },
    {
      id: 'csauo1-input',
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

1) A reference variable that points to no object has the value _______.

2) When two variables reference the same object, they are called _______.

3) Static methods like Math.abs() are called on the _______ itself, not on an instance.
      `,
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
      content: `
**Classify the Concept** 🔍
      `,
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
      content: `
## AP Exam Strategy: Using Objects

- **Aliasing** is commonly tested — know that assigning one array/object to another creates a shared reference, not a copy
- **NullPointerException** is the most common runtime error on the AP exam
- Know Math class static methods: \`abs\`, \`pow\`, \`sqrt\`, \`random\`, \`max\`, \`min\`
- Math.random() returns [0.0, 1.0) — to get a random int from 0 to n-1: \`(int)(Math.random() * n)\`
- Understand the difference between instance methods (called on objects) and static methods (called on classes)
      `
    },
    {
      id: 'csauo1-applied',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application** 🎯
      `,
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
            question: 'What is printed?\nString a = "hello";\nString b = a;\na = "world";\nSystem.out.println(b);',
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
