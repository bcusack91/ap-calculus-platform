export const csaArrayPart7Data = {
  topicSlug: 'csa-array',
  sections: [
    {
      id: 'csaarray7-intro',
      type: 'text' as const,
      content: `
# 📊 Arrays

**Part 7 of 7 — Synthesis Review**

---

This part ties the topic together: creating arrays and the references they live behind (CED Topic 4.3), traversing them with indexed and enhanced for loops (4.4), and the data and files they hold (4.1, 4.2, 4.6). Use the table as a checklist, then test yourself on mixed questions.

### The Topic on One Page

| Idea | Key fact | Typical trap |
|---|---|---|
| Creating (Parts 1-2) | \`new\` fills with 0, 0.0, false or null; the size is fixed when \`new\` runs | a braces list outside a declaration |
| null elements (Parts 2, 4) | printing null is fine; calling a method through null throws | \`words[i].length()\` on an unfilled slot |
| References (Part 2) | \`b = a\` makes an alias; \`==\` compares references | expecting \`b = a\` to copy the elements |
| Parameters (Part 2) | element changes stick; reassigning the parameter does not | \`arr = new int[n]\` inside a method |
| Index ranges (Part 3) | neighbors need the header shrunk at one end | \`arr[i + 1]\` with \`i < arr.length\` |
| In-place updates (Part 3) | later passes see earlier changes | tracing every pass from the original array |
| Enhanced for (Part 4) | the variable is a copy; object elements can still be mutated | \`v = 0\` to change an int element |
| Data (Part 5) | check how data was collected and clean invalid values | averaging a "missing" code as real data |
| Files (Part 5) | \`throws IOException\`; tokens vs lines; parse String pieces | \`nextLine\` right after \`nextInt\` |
      `
    },
    {
      id: 'csaarray7-worked',
      type: 'text' as const,
      content: `
## Worked Example: Putting It Together

\`\`\`java
public static int[] pairSums(int[] a) {
    int[] result = new int[a.length - 1];
    for (int i = 0; i < result.length; i++) {
        result[i] = a[i] + a[i + 1];
    }
    return result;
}
\`\`\`

\`\`\`java
int[] data = {3, 1, 4, 1, 5};
int[] same = data;
int[] sums = pairSums(data);
same[0] = 10;
int total = 0;
for (int s : sums) {
    total += s;
}
System.out.println(data[0] + " " + sums[0] + " " + total);
\`\`\`

**Step 1 — Check the bounds.** \`result\` has length 4, so i runs 0 to 3 and \`a[i + 1]\` reaches index 4, the last index of \`a\`. Sizing the loop by the result, not by \`a\`, is what keeps \`a[i + 1]\` legal. With \`new int[a.length]\` the last pass would read \`a[5]\` and throw.

**Step 2 — Build the result.**

| i | a[i] | a[i + 1] | result[i] |
|---|---|---|---|
| 0 | 3 | 1 | 4 |
| 1 | 1 | 4 | 5 |
| 2 | 4 | 1 | 5 |
| 3 | 1 | 5 | 6 |

**Step 3 — Follow the references.** \`same\` is an alias of \`data\`, so \`same[0] = 10\` changes \`data[0]\` to 10. \`sums\` refers to the separate array \`{4, 5, 5, 6}\` built inside the method, so its first element stays 4.

**Step 4 — Read the values.** The enhanced for loop only reads, adding 4 + 5 + 5 + 6 = 20.

**Step 5 — Output.** \`10 4 20\`.
      `
    },
    {
      id: 'csaarray7-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Mixed Review 1** 🎯

**Segment A**
\`\`\`java
int[] p = new int[4];
for (int i = 0; i < p.length; i++) {
    p[i] = i * 3;
}
int[] q = p;
q[1] = p[3];
System.out.println(p[1] + " " + q[3]);
\`\`\`

**Segment B**
\`\`\`java
String[] s = {"a", "bb", null, "dddd"};
int c = 0;
for (String w : s) {
    if (w != null) {
        c += w.length();
    }
    w = "x";
}
System.out.println(c + " " + s[2]);
\`\`\`
      `,
      exercise: {
        questions: [
          {
            question: 'What is printed by Segment A?',
            options: [
              '9 9',
              '3 9',
              '0 9',
              '9 3'
            ],
            correctAnswer: 0,
            explanation: 'The loop makes p {0, 3, 6, 9}. q is an alias, so q[1] = p[3] stores 9 in the shared array, and p[1] and q[3] are both 9.'
          },
          {
            question: 'What is printed by Segment B?',
            options: [
              '7 null',
              '7 x',
              '3 null',
              '8 x'
            ],
            correctAnswer: 0,
            explanation: 'The null check skips index 2, so c adds 1 + 2 + 4 = 7. Assigning "x" to w changes only the loop variable, so s[2] is still null and prints as null.'
          },
          {
            question: 'Which header for the loop in Segment A throws an ArrayIndexOutOfBoundsException?',
            options: [
              'for (int i = 0; i <= p.length; i++)',
              'for (int i = 0; i < p.length - 1; i++)',
              'for (int i = 1; i <= p.length - 1; i++)',
              'for (int i = 0; i < p.length; i += 2)'
            ],
            correctAnswer: 0,
            explanation: 'With <= p.length the last pass uses i = 4, and p[4] is out of bounds. The other headers stay between 0 and 3; they just skip some indices.'
          }
        ]
      }
    },
    {
      id: 'csaarray7-reference',
      type: 'text' as const,
      content: `
## Error Catalogue

| Symptom | Likely cause | Fix |
|---|---|---|
| ArrayIndexOutOfBoundsException on the last pass | \`<=\` in the header, or \`arr[i + 1]\` with \`i < arr.length\` | use \`<\`, or stop at \`arr.length - 1\` |
| ArrayIndexOutOfBoundsException on the first pass | \`arr[i - 1]\` with i starting at 0 | start at 1 |
| NullPointerException | a method called on an unfilled element of an object array | fill the slot, or check \`!= null\` first |
| the array does not change | assigning the enhanced for variable, or reassigning a parameter | assign \`arr[i]\` in an indexed loop |
| a "copy" changes when the original does | \`b = a\` made an alias | create a new array and copy each element |
| \`==\` is false for equal-looking arrays | two different array objects | compare length, then each element |
| a result array with gaps or an exception | the source index used to fill the result | keep a separate result index |
| the method does not compile | a Scanner on a File without \`throws IOException\` | add it to the header |
| a number field behaves like text | a split piece is still a String | use \`Integer.parseInt\` or \`Double.parseDouble\` |

> 🎯 **AP Connection:** For any array question, ask three things in order: which array objects exist (and who refers to them), which indices the loop touches, and whether each assignment hits an element or just a variable.
      `
    },
    {
      id: 'csaarray7-quick',
      type: 'dropdown-select' as const,
      content: `
**Quick Evaluation** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'After double[] d = new double[3];, the array holds ___',
            options: ['0.0, 0.0, 0.0', 'null, null, null', '0, 0, 0', 'no values until assigned']
          },
          {
            label: 'After int[] b = a;, the expression b == a evaluates to ___',
            options: ['true', 'false', 'a compile-time error', 'a run-time exception']
          },
          {
            label: 'To turn the String "12" into the int 12, use ___',
            options: ['Integer.parseInt("12")', 'Double.parseDouble("12")', '"12".split(",")', '(int) "12"']
          }
        ],
        correctAnswers: ['0.0, 0.0, 0.0', 'true', 'Integer.parseInt("12")'],
        hint1: 'Each element of a new double array gets the default for double.',
        hint2: 'b holds a copy of the reference stored in a.',
        hint3: 'The result must be an int, and a String cannot be cast to one.',
        explanation: 'A new double array is filled with 0.0. After b = a both variables hold the same reference, so == is true. Integer.parseInt converts a String of digits to an int; a cast from String to int does not compile.'
      }
    },
    {
      id: 'csaarray7-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Mixed Review 2** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A method with the header public static void fill(int[] arr, int v) first runs arr = new int[arr.length]; and then sets every arr[i] to v. If nums holds {1, 2}, what does nums hold after fill(nums, 7)?',
            options: [
              '{1, 2}',
              '{7, 7}',
              '{0, 0}',
              '{7, 2}'
            ],
            correctAnswer: 0,
            explanation: 'The first statement moves the parameter to a new array, so every later assignment fills that new array. The caller\'s nums is never touched and still holds {1, 2}.'
          },
          {
            question: 'Which loop replaces each element of an int array arr with its square?',
            options: [
              'A for loop whose body is arr[i] = arr[i] * arr[i];',
              'A for-each loop whose body is v = v * v;',
              'A for-each loop whose body is arr[v] = v * v;',
              'A for loop whose body is i = arr[i] * arr[i];'
            ],
            correctAnswer: 0,
            explanation: 'Only an assignment to arr[i] stores a value in the array. Assigning v changes a copy, using v as an index writes to the wrong positions or past the end, and assigning i changes the loop counter.'
          },
          {
            question: 'A program reads a file with a hasNext loop and needs to keep every value in an array. What is the problem?',
            options: [
              'The array size must be known before any value is stored',
              'An array cannot hold values that came from a file',
              'The hasNext method cannot be used with arrays',
              'Values read by nextInt cannot go into an array'
            ],
            correctAnswer: 0,
            explanation: 'An array\'s length is fixed when it is created, but a hasNext loop learns how many values there are only at the end. That is why files read into arrays usually begin with a count.'
          }
        ]
      }
    }
  ]
}
