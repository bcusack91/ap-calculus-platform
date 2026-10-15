export const csaArrayPart2Data = {
  topicSlug: 'csa-array',
  sections: [
    {
      id: 'csaarray2-intro',
      type: 'text' as const,
      content: `
# 📊 Arrays

**Part 2 of 7 — Creating Arrays: Sizes, Defaults, and References**

---

Part 1 showed the syntax for creating an array and walking through it. This part looks at what \`new\` actually builds and at what an array **variable** holds (CED Topic 4.3). Almost every tricky array question on the exam comes back to one fact:

> 🔑 **Key Concept:** An array is an object. An array variable does not hold the elements; it holds a **reference** to the array object, the way a String variable holds a reference to a String.

| In this part |
|---|
| Sizes computed from expressions, and the length-0 array |
| Where an initializer list is allowed |
| Arrays of objects start full of null |
| Aliases: two variables, one array |
| Comparing arrays with == and element by element |
| Passing arrays to methods and returning new arrays |
      `
    },
    {
      id: 'csaarray2-create',
      type: 'text' as const,
      content: `
## The Size Can Be Any int Expression

\`\`\`java
int n = 4;
double[] prices = new double[n];       // 4 elements, all 0.0
boolean[] seen = new boolean[n * 2];   // 8 elements, all false
String[] names = new String[n - 1];    // 3 elements, all null
int[] none = new int[0];               // legal: length 0
\`\`\`

- The size expression is evaluated **once**, when \`new\` runs. Changing n afterward does not resize \`prices\`; nothing can resize an array after it is created.
- An array of length 0 is legal. It has no valid index at all, so even \`none[0]\` throws an ArrayIndexOutOfBoundsException, while a loop with the test \`i < none.length\` simply runs zero times.

## An Initializer List Belongs in the Declaration

\`\`\`java
int[] a = {2, 4, 6};      // compiles: declaration with an initializer list
int[] b;
b = {2, 4, 6};            // does NOT compile
b = new int[3];           // compiles: three 0s ...
b[0] = 2;                 // ... then fill the elements one at a time
b[1] = 4;
b[2] = 6;
\`\`\`

The braces form is allowed only in the statement that declares the variable. Its length is the number of values listed, so \`a.length\` is 3.

## Arrays of Objects Start as null

\`new String[3]\` creates three **reference slots**, not three Strings. Each slot holds \`null\` until a String is stored in it.

\`\`\`java
String[] words = new String[3];
words[0] = "sun";
System.out.println(words[1]);            // prints null
System.out.println(words[0].length());   // prints 3
System.out.println(words[1].length());   // NullPointerException
\`\`\`

| Element type | After \`new\` | Calling a method on an unfilled element |
|---|---|---|
| \`int\`, \`double\`, \`boolean\` | 0, 0.0, false | not possible: primitives have no methods |
| \`String\` or any class | null | throws a NullPointerException |

Printing a null element is fine: println shows the word \`null\`. The exception comes only when the program tries to call a method, such as \`length()\`, through a reference that is null.
      `
    },
    {
      id: 'csaarray2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯

**Segment A**
\`\`\`java
int k = 3;
String[] tags = new String[k + 2];
tags[1] = "red";
tags[4] = "blue";
k = 10;
\`\`\`
      `,
      exercise: {
        questions: [
          {
            question: 'After Segment A runs, what is the value of tags.length?',
            options: [
              '5',
              '12',
              '3',
              '10'
            ],
            correctAnswer: 0,
            explanation: 'The size expression k + 2 is evaluated when new runs, giving 5. Changing k afterward has no effect on an array that already exists.'
          },
          {
            question: 'Which statement, placed after Segment A, throws a NullPointerException?',
            options: [
              'int len = tags[0].length();',
              'String t = tags[0] + "!";',
              'int n = tags[4].length();',
              'tags[0] = tags[4];'
            ],
            correctAnswer: 0,
            explanation: 'tags[0] was never assigned, so it holds null, and calling length() through null throws the exception. Joining null to a String just gives "null!", tags[4] holds "blue", and copying a reference into tags[0] is an ordinary assignment.'
          },
          {
            question: 'Which statement does NOT compile?',
            options: [
              'tags = {"red", "blue"};',
              'tags = new String[2];',
              'tags[0] = "green";',
              'String[] more = {"red", "blue"};'
            ],
            correctAnswer: 0,
            explanation: 'An initializer list in braces is allowed only in the statement that declares the variable. Assigning a new array made with new, or storing a String in one element, compiles normally.'
          }
        ]
      }
    },
    {
      id: 'csaarray2-references',
      type: 'text' as const,
      content: `
## An Array Variable Holds a Reference

\`\`\`java
int[] a = {1, 2, 3};
int[] b = a;        // copies the reference, not the elements
b[0] = 99;
System.out.println(a[0]);   // prints 99
\`\`\`

\`\`\`
a ──►  [99, 2, 3]
b ──┘
\`\`\`

After \`int[] b = a;\` there is still only **one** array. \`a\` and \`b\` are **aliases**: two names for the same object. A change made through either name is seen through the other.

## == Compares References, Not Contents

\`\`\`java
int[] p = {5, 6};
int[] q = {5, 6};
int[] r = p;
System.out.println(p == q);   // false: two different arrays
System.out.println(p == r);   // true: the same array
\`\`\`

\`p\` and \`q\` hold equal values, but each initializer list builds its own array, so their references differ. To ask whether two arrays hold the same values, compare the lengths and then each pair of elements:

\`\`\`java
public static boolean sameValues(int[] x, int[] y) {
    if (x.length != y.length) {
        return false;
    }
    for (int i = 0; i < x.length; i++) {
        if (x[i] != y[i]) {
            return false;
        }
    }
    return true;
}
\`\`\`

## Assigning a New Array Breaks an Alias

\`\`\`java
int[] a = {1, 2, 3};
int[] b = a;          // a and b share one array
a = new int[2];       // a now refers to a brand-new array {0, 0}
b[1] = 7;             // changes the old array, which only b still refers to
\`\`\`

| After the statement | a refers to | b refers to |
|---|---|---|
| \`int[] b = a;\` | {1, 2, 3} | the same {1, 2, 3} |
| \`a = new int[2];\` | {0, 0} (new) | {1, 2, 3} |
| \`b[1] = 7;\` | {0, 0} | {1, 7, 3} |

Assigning to an **element** (\`b[1] = ...\`) changes the shared object. Assigning to the **variable** (\`a = ...\`) only changes which object that one variable refers to.

> 🎯 **AP Connection:** When a multiple-choice question assigns one array variable to another, draw the arrows before tracing. Each \`new\` or initializer list makes a new box; each \`x = y\` moves an arrow.
      `
    },
    {
      id: 'csaarray2-aliases',
      type: 'dropdown-select' as const,
      content: `
**Follow the Arrows** 🔍

\`\`\`java
int[] m = {4, 5, 6};
int[] n = m;
int[] p = {4, 5, 6};
n[2] = 0;
m = p;
p[0] = 9;
\`\`\`
      `,
      exercise: {
        dropdowns: [
          {
            label: 'After the segment, m holds ___',
            options: ['{9, 5, 6}', '{4, 5, 0}', '{4, 5, 6}', '{9, 5, 0}']
          },
          {
            label: 'After the segment, n holds ___',
            options: ['{4, 5, 0}', '{9, 5, 0}', '{4, 5, 6}', '{9, 5, 6}']
          },
          {
            label: 'The number of array objects the segment creates is ___',
            options: ['2', '3', '1', '4']
          }
        ],
        correctAnswers: ['{9, 5, 6}', '{4, 5, 0}', '2'],
        hint1: 'm = p moves m to the array p refers to, and p[0] = 9 then changes that array.',
        hint2: 'n still refers to the first array, which n[2] = 0 changed before m moved away.',
        hint3: 'Count the initializer lists; int[] n = m only copies a reference.',
        explanation: 'n[2] = 0 changes the first array, which n keeps. Then m moves to the second array, so the change p[0] = 9 shows up through m. Only the two initializer lists create arrays; the assignments copy references.'
      }
    },
    {
      id: 'csaarray2-methods',
      type: 'text' as const,
      content: `
## Passing an Array to a Method

A parameter receives a copy of the argument's value. For an array, that value is a reference, so the parameter becomes an alias for the caller's array.

\`\`\`java
public static void doubleAll(int[] arr) {
    for (int i = 0; i < arr.length; i++) {
        arr[i] *= 2;              // changes the caller's array
    }
}

public static void reset(int[] arr) {
    arr = new int[arr.length];    // arr now refers to a new array
    arr[0] = 100;                 // changes only the new array
}
\`\`\`

\`\`\`java
int[] data = {3, 1, 4};
doubleAll(data);
System.out.println(data[0] + " " + data[2]);   // 6 8
reset(data);
System.out.println(data[0]);                   // still 6
\`\`\`

| Inside the method | Effect on the caller |
|---|---|
| \`arr[i] = ...\` (assign an element) | the change sticks: the caller's array is the same object |
| \`arr = new int[...]\` (assign the parameter) | none: only the local parameter moves to a new array |
| \`x = ...\` for a primitive parameter such as \`int x\` | none: x holds a copy of the value |

## Returning a New Array

A method can build an array and return its reference. The return type names the array type.

\`\`\`java
public static int[] squares(int n) {
    int[] result = new int[n];
    for (int i = 0; i < n; i++) {
        result[i] = i * i;
    }
    return result;
}
\`\`\`

\`int[] sq = squares(4);\` stores a reference to the new array \`{0, 1, 4, 9}\` in \`sq\`. The local variable \`result\` disappears when the method ends, but the array lives on because \`sq\` still refers to it.

## Worked Example: Copy or Alias?

\`\`\`java
public static int[] copyOf(int[] src) {
    int[] result = new int[src.length];
    for (int i = 0; i < src.length; i++) {
        result[i] = src[i];
    }
    return result;
}
\`\`\`

\`\`\`java
int[] orig = {2, 4, 6};
int[] alias = orig;
int[] copy = copyOf(orig);
orig[1] = 0;
System.out.println(alias[1] + " " + copy[1]);
\`\`\`

**Step 1 — The alias.** \`alias = orig\` copies a reference, so both names refer to one array.

**Step 2 — The copy.** \`copyOf\` creates a second array with \`new\` and copies each int into it, so \`copy\` refers to \`{2, 4, 6}\` stored separately.

**Step 3 — The change.** \`orig[1] = 0\` changes the shared array, which \`alias\` also sees. The copy keeps its 4.

**Step 4 — Output.** \`0 4\`. Also, \`alias == orig\` is true and \`copy == orig\` is false.
      `
    },
    {
      id: 'csaarray2-applied',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application** 🎯

\`\`\`java
public static void change(int[] arr, int x) {
    arr[0] = arr[0] + x;
    x = x * 10;
    arr = new int[3];
    arr[1] = x;
}
\`\`\`

\`\`\`java
int[] vals = {1, 2, 3};
int num = 5;
change(vals, num);
System.out.println(vals[0] + " " + vals[1] + " " + num);
\`\`\`
      `,
      exercise: {
        questions: [
          {
            question: 'What is printed?',
            options: [
              '6 2 5',
              '6 50 50',
              '1 2 5',
              '6 50 5'
            ],
            correctAnswer: 0,
            explanation: 'arr[0] = arr[0] + x changes the caller\'s array to {6, 2, 3}. After arr moves to a new array, arr[1] = x changes only that new array, and num keeps 5 because x held a copy.'
          },
          {
            question: 'Which single change makes the client print 6 50 5?',
            options: [
              'Remove the line arr = new int[3];',
              'Remove the line x = x * 10;',
              'Remove the line arr[0] = arr[0] + x;',
              'Remove the line arr[1] = x;'
            ],
            correctAnswer: 0,
            explanation: 'Without the new array, arr still refers to vals when arr[1] = x stores 50, so vals becomes {6, 50, 3}. Each of the other removals leaves vals[1] at 2.'
          },
          {
            question: 'Why does num still hold 5 after the call?',
            options: [
              'x got a copy of the int value',
              'The new array erased the change to x',
              'Every parameter change is undone at return',
              'x was changed only after arr was replaced'
            ],
            correctAnswer: 0,
            explanation: 'An int parameter holds a copy of the argument, so assigning to x never reaches num. Changes made through an array parameter do last, which is why vals[0] became 6.'
          }
        ]
      }
    }
  ]
}
