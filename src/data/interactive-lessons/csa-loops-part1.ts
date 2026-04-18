export const csaLoopsPart1Data = {
  topicSlug: 'csa-loops',
  sections: [
    {
      id: 'csalp1-intro',
      type: 'text' as const,
      content: `
# 🔄 Loops (Advanced)

**Part 1 of 7 — Nested Loops, Loop Analysis, and String Processing**

---

## Nested Loops

\`\`\`java
// Print a 3x4 grid of stars
for (int row = 0; row < 3; row++) {
    for (int col = 0; col < 4; col++) {
        System.out.print("* ");
    }
    System.out.println();  // New line after each row
}
\`\`\`

Output:
\`\`\`
* * * *
* * * *
* * * *
\`\`\`

> 🔑 **Nested loop execution count:** If the outer loop runs M times and the inner loop runs N times per outer iteration, the inner body runs **M x N** times total.

---

## Loop Analysis Table

| Outer i | Inner j values | Operations |
|---------|---------------|-----------|
| i = 0 | j = 0, 1, 2, 3 | 4 operations |
| i = 1 | j = 0, 1, 2, 3 | 4 operations |
| i = 2 | j = 0, 1, 2, 3 | 4 operations |
| **Total** | | **12 operations** |
      `
    },
    {
      id: 'csalp1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is printed?\nfor (int i = 1; i <= 3; i++) {\n    for (int j = 1; j <= i; j++) {\n        System.out.print("*");\n    }\n    System.out.println();\n}',
            options: [
              '***\n***\n***',
              '*\n**\n***',
              '***\n**\n*',
              '*\n*\n*'
            ],
            correctAnswer: 1,
            explanation: 'i=1: j goes 1 to 1 (one star). i=2: j goes 1 to 2 (two stars). i=3: j goes 1 to 3 (three stars). The inner loop count depends on the outer loop variable, creating a triangle.'
          },
          {
            question: 'A nested loop where the outer runs n times and inner runs n times has what total complexity?',
            options: [
              'n operations',
              '2n operations',
              'n squared operations',
              'n + 1 operations'
            ],
            correctAnswer: 2,
            explanation: 'When both loops run n times, the inner body executes n x n = n squared times. This is O(n squared) complexity — important for understanding algorithm efficiency.'
          }
        ]
      }
    },
    {
      id: 'csalp1-content',
      type: 'text' as const,
      content: `
## String Processing with Loops

### Reversing a String
\`\`\`java
String original = "hello";
String reversed = "";
for (int i = original.length() - 1; i >= 0; i--) {
    reversed += original.substring(i, i + 1);
}
// reversed = "olleh"
\`\`\`

### Checking for a Palindrome
\`\`\`java
public boolean isPalindrome(String s) {
    for (int i = 0; i < s.length() / 2; i++) {
        String left = s.substring(i, i + 1);
        String right = s.substring(s.length() - 1 - i, s.length() - i);
        if (!left.equals(right)) {
            return false;
        }
    }
    return true;
}
\`\`\`

### Counting Characters
\`\`\`java
public int countChar(String s, String target) {
    int count = 0;
    for (int i = 0; i < s.length(); i++) {
        if (s.substring(i, i + 1).equals(target)) {
            count++;
        }
    }
    return count;
}
\`\`\`

## Sentinel-Controlled Loops
\`\`\`java
Scanner input = new Scanner(System.in);
int sum = 0;
int value = input.nextInt();
while (value != -1) {    // -1 is the sentinel value
    sum += value;
    value = input.nextInt();
}
\`\`\`
      `
    },
    {
      id: 'csalp1-input',
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

1) In a nested loop where the outer runs 5 times and the inner runs 4 times, the inner body executes _______ times total.

2) To get character at index i of a String in the AP subset, use s.substring(i, i + _______).

3) A special value that signals the end of input in a while loop is called a _______ value.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['20', '1', 'sentinel'],
        hint1: '5 x 4 = ?',
        hint2: 'substring takes (start, end) where end is exclusive.',
        hint3: 'It guards or watches for the stopping condition.',
        explanation: '5 x 4 = 20 total inner executions. substring(i, i+1) extracts one character. Sentinel = stopping signal value.'
      }
    },
    {
      id: 'csalp1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Analyze the Loop** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'A loop that prints * then ** then *** (growing triangle) requires the inner loop bound to depend on ___',
            options: ['The outer loop variable (j <= i)', 'A constant value', 'The array length', 'A random number']
          },
          {
            label: 'To traverse a String character by character, loop from i = 0 to ___',
            options: ['i < s.length()', 'i <= s.length()', 'i < s.length() - 1', 'i < s.size()']
          },
          {
            label: 'The time complexity of a nested loop with independent bounds (both O(n)) is ___',
            options: ['O(n squared)', 'O(n)', 'O(2n)', 'O(log n)']
          }
        ],
        correctAnswers: ['The outer loop variable (j <= i)', 'i < s.length()', 'O(n squared)'],
        hint1: 'Each row has stars equal to the row number.',
        hint2: 'Indices go from 0 to length-1.',
        hint3: 'n times n = n squared.',
        explanation: 'Triangle: inner depends on outer. String traversal: i < length(). Nested loops: O(n) x O(n) = O(n squared).'
      }
    },
    {
      id: 'csalp1-strategy',
      type: 'text' as const,
      content: `
## AP Exam Strategy: Advanced Loops

- **Trace nested loops systematically** — write a table of outer and inner variable values
- Know that inner loop count = outer iterations x inner iterations
- String processing: always use \`substring(i, i+1)\` to get a single character in the AP subset
- **Common error:** using \`i <= s.length()\` instead of \`i < s.length()\` (StringIndexOutOfBoundsException)
- Palindrome and reversal are classic FRQ patterns — practice these
- If the inner loop bound depends on the outer variable, the total count is a triangular series
      `
    },
    {
      id: 'csalp1-applied',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is the value of result after this code?\nString s = "abcabc";\nint result = 0;\nfor (int i = 0; i < s.length(); i++) {\n    if (s.substring(i, i+1).equals("a")) {\n        result++;\n    }\n}',
            options: [
              '1',
              '2',
              '3',
              '6'
            ],
            correctAnswer: 1,
            explanation: 'The loop checks each character. "a" appears at index 0 and index 3. So result = 2.'
          },
          {
            question: 'How many total stars are printed?\nfor (int i = 1; i <= 4; i++) {\n    for (int j = 1; j <= i; j++) {\n        System.out.print("*");\n    }\n}',
            options: [
              '4',
              '10',
              '16',
              '8'
            ],
            correctAnswer: 1,
            explanation: 'i=1: 1 star. i=2: 2 stars. i=3: 3 stars. i=4: 4 stars. Total: 1+2+3+4 = 10 stars. This is a triangular number series.'
          }
        ]
      }
    }
  ]
};
