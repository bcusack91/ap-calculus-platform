export const csaArraylistPart1Data = {
  topicSlug: 'csa-arraylist',
  sections: [
    {
      id: 'csaal1-intro',
      type: 'text' as const,
      content: `
# 📋 ArrayList

**Part 1 of 7 — Dynamic Lists, Methods, and Autoboxing**

---

## ArrayList vs Array

| Feature | Array | ArrayList |
|---------|-------|-----------|
| **Size** | Fixed at creation | Grows and shrinks dynamically |
| **Syntax** | \`int[] arr = new int[5];\` | \`ArrayList<Integer> list = new ArrayList<>();\` |
| **Access** | \`arr[i]\` | \`list.get(i)\` |
| **Length** | \`arr.length\` | \`list.size()\` |
| **Types** | Primitives and objects | Objects only (wrapper classes for primitives) |

\`\`\`java
import java.util.ArrayList;

ArrayList<String> names = new ArrayList<>();
names.add("Alice");      // ["Alice"]
names.add("Bob");        // ["Alice", "Bob"]
names.add(1, "Charlie"); // ["Alice", "Charlie", "Bob"]
names.set(0, "Anna");    // ["Anna", "Charlie", "Bob"]
names.remove(1);         // ["Anna", "Bob"]
\`\`\`

> 🔑 **ArrayList uses wrapper classes** for primitives: Integer (int), Double (double), Boolean (boolean). Java auto-converts between primitive and wrapper types (**autoboxing** and **unboxing**).
      `
    },
    {
      id: 'csaal1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which declaration creates an ArrayList that stores integers?',
            options: [
              'ArrayList<int> list = new ArrayList<>();',
              'ArrayList<Integer> list = new ArrayList<>();',
              'ArrayList list = new ArrayList<int>();',
              'int ArrayList list = new ArrayList<>();'
            ],
            correctAnswer: 1,
            explanation: 'ArrayList cannot store primitive types directly. You must use the wrapper class Integer instead of int. Java autoboxes int values to Integer objects automatically.'
          },
          {
            question: 'What is the key advantage of ArrayList over arrays?',
            options: [
              'ArrayList is faster for accessing elements',
              'ArrayList can store primitive types directly',
              'ArrayList automatically resizes as elements are added or removed',
              'ArrayList uses less memory'
            ],
            correctAnswer: 2,
            explanation: 'The main advantage of ArrayList is dynamic sizing. Arrays have a fixed size set at creation, but ArrayList grows when you add() and shrinks when you remove().'
          }
        ]
      }
    },
    {
      id: 'csaal1-content',
      type: 'text' as const,
      content: `
## Essential ArrayList Methods

| Method | Description | Example |
|--------|-----------|---------|
| \`add(obj)\` | Appends to end | \`list.add("X")\` |
| \`add(i, obj)\` | Inserts at index i | \`list.add(0, "X")\` |
| \`get(i)\` | Returns element at index i | \`list.get(2)\` |
| \`set(i, obj)\` | Replaces element at index i | \`list.set(0, "Y")\` |
| \`remove(i)\` | Removes element at index i | \`list.remove(0)\` |
| \`size()\` | Returns number of elements | \`list.size()\` |

## Autoboxing and Unboxing

\`\`\`java
ArrayList<Integer> nums = new ArrayList<>();
nums.add(42);           // Autoboxing: int 42 -> Integer 42
int value = nums.get(0); // Unboxing: Integer 42 -> int 42
\`\`\`

## Traversal

\`\`\`java
// Standard for loop
for (int i = 0; i < list.size(); i++) {
    System.out.println(list.get(i));
}

// Enhanced for loop
for (String name : list) {
    System.out.println(name);
}
\`\`\`
      `
    },
    {
      id: 'csaal1-input',
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

1) ArrayList can only store _______ types, not primitives (use wrapper classes like Integer).

2) To get the number of elements in an ArrayList, use the _______ method.

3) The automatic conversion of int to Integer is called _______.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['object', 'size()', 'autoboxing'],
        hint1: 'Wrapper classes wrap primitives into these.',
        hint2: 'Similar to length but with parentheses.',
        hint3: 'Auto + boxing the primitive into a wrapper.',
        explanation: 'ArrayList stores object types only. size() returns element count. Autoboxing = int to Integer conversion.'
      }
    },
    {
      id: 'csaal1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Compare Array vs ArrayList** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'To access element at index 3: array uses arr[3], ArrayList uses ___',
            options: ['list.get(3)', 'list[3]', 'list.at(3)', 'list.index(3)']
          },
          {
            label: 'To get the number of elements: array uses arr.length, ArrayList uses ___',
            options: ['list.size()', 'list.length', 'list.length()', 'list.count()']
          },
          {
            label: 'When you remove an element from an ArrayList, elements after it ___',
            options: ['Shift left to fill the gap', 'Stay in place (leaving null)', 'Shift right', 'Are also removed']
          }
        ],
        correctAnswers: ['list.get(3)', 'list.size()', 'Shift left to fill the gap'],
        hint1: 'ArrayList uses methods, not bracket notation.',
        hint2: 'size() with parentheses.',
        hint3: 'ArrayList maintains contiguous storage.',
        explanation: 'get(i) for access. size() for count. Elements shift left after remove().'
      }
    },
    {
      id: 'csaal1-strategy',
      type: 'text' as const,
      content: `
## AP Exam Strategy: ArrayList

- **arr.length** (field) vs **list.size()** (method) — know the distinction
- **arr[i]** vs **list.get(i)** — arrays use brackets, ArrayList uses methods
- ArrayList CANNOT store primitives — must use Integer, Double, Boolean
- When removing elements while traversing, indices shift! Traverse backward or adjust the index
- add(i, obj) shifts existing elements RIGHT; remove(i) shifts elements LEFT
- ArrayList is required for FRQ problems involving dynamic collections
      `
    },
    {
      id: 'csaal1-applied',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'ArrayList<Integer> list contains [5, 10, 15, 20]. After list.add(2, 12), what is the list?',
            options: [
              '[5, 10, 12, 15, 20]',
              '[5, 10, 12, 20]',
              '[5, 12, 10, 15, 20]',
              '[5, 10, 15, 12, 20]'
            ],
            correctAnswer: 0,
            explanation: 'add(2, 12) inserts 12 at index 2, shifting 15 and 20 to the right. Result: [5, 10, 12, 15, 20]. The list grows by one element.'
          },
          {
            question: 'What happens when you try: ArrayList<int> nums = new ArrayList<>();',
            options: [
              'An empty ArrayList is created successfully',
              'A compile error: cannot use primitive type int with ArrayList',
              'An ArrayList of size 0 with default values',
              'A runtime error'
            ],
            correctAnswer: 1,
            explanation: 'ArrayList cannot use primitive types. int must be replaced with Integer. This is a compile-time error, one of the most common AP CSA mistakes.'
          }
        ]
      }
    }
  ]
};
