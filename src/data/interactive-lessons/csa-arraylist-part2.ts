export const csaArraylistPart2Data = {
  topicSlug: 'csa-arraylist',
  sections: [
    {
      id: 'csaarray2-intro',
      type: 'text' as const,
      content: `
# 📋 ArrayList

**Part 2 of 7 — Wrapper Classes: Integer and Double**

---

Part 1 showed that an ArrayList holds **objects**, so a list of whole numbers is declared with \`Integer\`, not \`int\`. This part looks closely at the two wrapper classes in the AP course, \`Integer\` and \`Double\` (CED Topic 4.7), and at the automatic conversions that let you write \`nums.add(5)\` and \`int x = nums.get(0);\` as if the list held plain numbers.

> 🔑 **Key Concept:** A wrapper object stores one primitive value inside an object. **Autoboxing** is the automatic conversion from a primitive to its wrapper (int to Integer, double to Double). **Unboxing** is the automatic conversion back (Integer to int, Double to double). The compiler inserts both for you.

| Primitive | Wrapper class | A list of these values is |
|---|---|---|
| \`int\` | \`Integer\` | an ArrayList of Integer |
| \`double\` | \`Double\` | an ArrayList of Double |

Both classes are in the package \`java.lang\`, so they need no import. (Java also has a \`Boolean\` wrapper, but the AP course works with \`Integer\` and \`Double\`.)

| In this part |
|---|
| Where autoboxing and unboxing happen |
| Why an int cannot be stored in a list of Double |
| Wrapper objects are immutable |
| Comparing wrapper values and unboxing null |
| The Integer and Double members on the Quick Reference |
      `
    },
    {
      id: 'csaarray2-boxing',
      type: 'text' as const,
      content: `
## Where the Conversions Happen

\`\`\`java
ArrayList<Integer> scores = new ArrayList<Integer>();
scores.add(90);                            // autoboxing: 90 becomes an Integer
scores.add(75);                            // autoboxing
int first = scores.get(0);                 // unboxing: first is 90
int gap = scores.get(0) - scores.get(1);   // both unboxed: gap is 15
scores.set(1, scores.get(1) + 5);          // unbox 75, add 5, box 80
if (scores.get(1) > 79) {                  // unboxed for the comparison
    System.out.println(scores);            // prints [90, 80]
}
\`\`\`

| Code | Conversion | Why |
|---|---|---|
| \`scores.add(90)\` | autoboxing | add expects an Integer and is given an int |
| \`Integer k = 12;\` | autoboxing | an int is assigned to an Integer variable |
| \`int first = scores.get(0);\` | unboxing | get returns an Integer, stored in an int |
| \`scores.get(0) - scores.get(1)\` | unboxing | arithmetic works on primitive values |
| \`scores.get(1) > 79\` | unboxing | relational operators compare primitive values |
| \`for (int s : scores)\` | unboxing | each Integer is unboxed into the int loop variable |

## Unboxing Can Be Followed by Widening; Boxing Cannot

\`\`\`java
double d = scores.get(0);   // compiles: unbox to int 90, then widen to 90.0

ArrayList<Double> temps = new ArrayList<Double>();
temps.add(98.5);            // compiles: double is boxed to Double
temps.add(72);              // does NOT compile: an int cannot be boxed to a Double
temps.add(72.0);            // compiles
double mid = (temps.get(0) + temps.get(1)) / 2;   // 85.25
\`\`\`

An int is boxed only into an Integer. To put a whole number into a list of Double, write it as a double literal such as \`72.0\`. Reading from a list of Integer into a double variable is fine, because the unboxed int widens to a double afterward.

> 💡 **Integer division still applies.** After unboxing, \`scores.get(0) / 4\` is int division, exactly as it would be with two int variables: 90 / 4 is 22.
      `
    },
    {
      id: 'csaarray2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯

**Segment A**
\`\`\`java
ArrayList<Integer> nums = new ArrayList<Integer>();
nums.add(4);
nums.add(9);
nums.add(2);
int a = nums.get(1) - nums.get(2);
nums.set(0, nums.get(0) * a);
double avg = (nums.get(0) + nums.get(1)) / 2;
System.out.println(a + " " + avg);
\`\`\`
      `,
      exercise: {
        questions: [
          {
            question: 'What is printed by Segment A?',
            options: [
              '7 18.0',
              '7 18.5',
              '7 18',
              '7 6.0'
            ],
            correctAnswer: 0,
            explanation: 'a is 9 - 2 = 7, and set stores 4 * 7 = 28 at index 0. The sum 28 + 9 = 37 is divided by the int 2, giving 18, which widens to 18.0 when stored in avg.'
          },
          {
            question: 'Which change to the avg statement in Segment A makes it print 18.5 for the average?',
            options: [
              'Divide by 2.0 instead of by the int 2',
              'Declare avg as an Integer',
              'Store nums.get(0) in an int first',
              'Cast the whole quotient to double'
            ],
            correctAnswer: 0,
            explanation: 'Dividing by the double 2.0 makes the division a double division, so 37 / 2.0 is 18.5. Casting the finished quotient converts 18 to 18.0 after the fraction is already lost, and an Integer variable would hold 18.'
          },
          {
            question: 'Assume temps is an ArrayList of Double that already holds 3 elements. Which statement does NOT compile?',
            options: [
              'temps.add(72);',
              'temps.add(72.5);',
              'temps.add(0, 72.5);',
              'temps.set(0, temps.get(2));'
            ],
            correctAnswer: 0,
            explanation: 'An int can be boxed only into an Integer, never a Double, so adding 72 to a list of Double is a compile error. Appending or inserting the double 72.5 and copying one element into another index all compile.'
          }
        ]
      }
    },
    {
      id: 'csaarray2-facts',
      type: 'text' as const,
      content: `
## Wrapper Objects Are Immutable

\`\`\`java
Integer a = 5;
Integer b = a;      // b refers to the same Integer object as a
a = a + 1;          // unbox 5, add 1, box a NEW Integer holding 6
System.out.println(a + " " + b);   // prints 6 5
\`\`\`

An \`Integer\` or \`Double\` object can never change the value inside it. The statement \`a = a + 1\` builds a new object and moves \`a\` to it; \`b\` still refers to the object holding 5. So sharing wrapper references never causes the surprises that sharing an array does.

## Comparing Wrapper Values

\`\`\`java
int x = list.get(i);    // unbox into int variables first ...
int y = list.get(j);
if (x == y) {           // ... then == compares the values
    System.out.println("match");
}
\`\`\`

\`list.get(i) == list.get(j)\` compares two Integer **references**, the same way \`==\` compares two String references, so it is not a reliable test of equal values. When one side is an int, as in \`list.get(i) == 7\`, Java unboxes the Integer and compares values, so that test is fine.

## null Cannot Be Unboxed

\`\`\`java
Integer missing = null;
int n = missing;    // throws a NullPointerException
\`\`\`

A wrapper variable can hold \`null\`, but there is no int inside null to take out.

## Integer and Double on the Java Quick Reference

| Member | Value or use |
|---|---|
| \`Integer.MAX_VALUE\` | 2147483647, the largest int value |
| \`Integer.MIN_VALUE\` | -2147483648, the smallest int value |
| \`Integer.parseInt(s)\` | the int value of a String such as \`"42"\` |
| \`Double.parseDouble(s)\` | the double value of a String such as \`"3.75"\` |

\`Integer.MIN_VALUE\` is a safe starting value when a loop looks for the largest element, because every element is at least that large:

\`\`\`java
// temps holds [-4, -9, -2]
int best = Integer.MIN_VALUE;
for (int t : temps) {
    if (t > best) {
        best = t;
    }
}
// best is -2; starting best at 0 would wrongly return 0
\`\`\`
      `
    },
    {
      id: 'csaarray2-conversions',
      type: 'dropdown-select' as const,
      content: `
**Name the Conversion** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'int n = list.get(2); for an ArrayList of Integer performs ___',
            options: ['unboxing', 'autoboxing', 'casting', 'parsing']
          },
          {
            label: 'Integer.MIN_VALUE is a safe starting value when a loop looks for the ___',
            options: ['largest value', 'smallest value', 'first negative', 'last element']
          },
          {
            label: 'After Integer a = 5; Integer b = a; a = a + 1; the value of b is ___',
            options: ['5', '6', 'null', '0']
          }
        ],
        correctAnswers: ['unboxing', 'largest value', '5'],
        hint1: 'get returns an Integer; storing it in an int takes the value out of the object.',
        hint2: 'Every int is at least as large as the smallest possible int, so the first element replaces it.',
        hint3: 'Integer objects are immutable: a + 1 builds a new object for a, and b keeps the old one.',
        explanation: 'Storing a get result in an int is unboxing. MIN_VALUE starts a search for the largest value because any element beats it. Because wrapper objects never change, b still refers to the Integer holding 5.'
      }
    },
    {
      id: 'csaarray2-parse',
      type: 'input-boxes' as const,
      content: `
**Trace It** ✍️

\`\`\`java
String[] parts = "8,3,12".split(",");
ArrayList<Integer> vals = new ArrayList<Integer>();
for (String p : parts) {
    vals.add(Integer.parseInt(p));
}
int total = 0;
for (int v : vals) {
    total += v;
}
vals.add(0, total / vals.size());
\`\`\`

1) What is vals.size() after the segment runs?

2) What is vals.get(0) after the segment runs?
      `,
      exercise: {
        boxes: 2,
        correctAnswers: ['4', '7'],
        hint1: 'split gives three Strings, and each one is parsed and added, so the list starts with 3 elements. One more add follows.',
        hint2: 'total is 8 + 3 + 12. It is divided by the size before the last add, using int division.',
        hint3: 'add(0, value) puts the new value at the front.',
        explanation: 'The three parsed values give [8, 3, 12] and total = 23. 23 / 3 is 7 with int division, and add(0, 7) inserts it at the front, giving [7, 8, 3, 12] with size 4.'
      }
    },
    {
      id: 'csaarray2-apconnect',
      type: 'text' as const,
      content: `
## AP Connection

- The free-response question on **Data Analysis with ArrayList** and many multiple-choice traces use lists of Integer or Double. Expect arithmetic on \`get\` results, comparisons such as \`list.get(i) > target\`, and enhanced for loops with an \`int\` or \`double\` loop variable.
- Write the element type as a class name: an ArrayList of \`Integer\`, never of \`int\`. A declaration that uses a primitive type does not compile.
- Watch the division: unboxed values follow the int rules, so an average of Integer elements needs a double somewhere in the division.
- \`Integer.MAX_VALUE\`, \`Integer.MIN_VALUE\`, \`Integer.parseInt\` and \`Double.parseDouble\` are the only wrapper members on the Quick Reference, and they are the ones to use in your answers.
      `
    }
  ]
}
