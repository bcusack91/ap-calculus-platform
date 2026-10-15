export const csaArrayPart4Data = {
  topicSlug: 'csa-array',
  sections: [
    {
      id: 'csaarray4-intro',
      type: 'text' as const,
      content: `
# 📊 Arrays

**Part 4 of 7 — Enhanced for Loops: Copies, Objects, and Limits**

---

The **enhanced for loop** (for-each loop) visits every element of an array from index 0 to the end without an index variable (CED Topic 4.4). Part 1 noted that assigning to the loop variable does not change the array. This part shows exactly why, what changes when the elements are objects, and when an indexed loop is the only choice.

> 🔑 **Key Concept:** On each pass, the enhanced for loop variable is assigned a **copy** of the current element, exactly as if the loop had written \`int n = nums[i];\`.

| In this part |
|---|
| The loop variable as a copy, and its type |
| Object elements: copies of references |
| Strings and null elements |
| What a for-each loop cannot do |
| Rewriting between for-each, indexed for and while loops |
      `
    },
    {
      id: 'csaarray4-copies',
      type: 'text' as const,
      content: `
## The Loop Variable Is a Copy

\`\`\`java
int[] nums = {4, 7, 1};
for (int n : nums) {
    System.out.print(n + " ");
}
\`\`\`

This loop behaves exactly like the indexed loop below. The rewrite makes the copy visible: \`n\` is an ordinary local variable that receives the value of \`nums[i]\` at the start of each pass.

\`\`\`java
for (int i = 0; i < nums.length; i++) {
    int n = nums[i];
    System.out.print(n + " ");
}
\`\`\`

So \`n = 0;\` inside the loop changes only n, just as \`int n = nums[i]; n = 0;\` would leave \`nums[i]\` alone. Reading values is what a for-each loop is for:

\`\`\`java
int total = 0;
for (int n : nums) {
    total += n;      // changes total, never the array
}
// total is 12
\`\`\`

## The Type of the Loop Variable

The loop variable's type must be one that each element can be assigned to.

| Array | Header | Compiles? |
|---|---|---|
| \`double[] prices\` | \`for (double p : prices)\` | yes |
| \`double[] prices\` | \`for (int p : prices)\` | no: a double cannot be stored in an int without a cast |
| \`int[] nums\` | \`for (double d : nums)\` | yes: each int widens to a double |
| \`String[] names\` | \`for (String s : names)\` | yes |
      `
    },
    {
      id: 'csaarray4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯

\`\`\`java
int[] a = {2, 5, 8};
int sum = 0;
for (int x : a) {
    x += 10;
    sum += x;
}
System.out.println(sum + " " + a[0]);
\`\`\`
      `,
      exercise: {
        questions: [
          {
            question: 'What is printed?',
            options: [
              '45 2',
              '15 12',
              '45 12',
              '15 2'
            ],
            correctAnswer: 0,
            explanation: 'x takes the copies 2, 5 and 8, and adding 10 to each gives 12, 15 and 18, which sum to 45. The array itself is never assigned, so a[0] is still 2.'
          },
          {
            question: 'Which statement about the variable x is true?',
            options: [
              'It holds a copy of one element on each pass',
              'It refers to the array element being visited',
              'It holds the index of the element being visited',
              'It keeps its last value after the loop is done'
            ],
            correctAnswer: 0,
            explanation: 'Each pass assigns x the value of the next element, so changing x leaves the array alone. x is not an index, and it goes out of scope when the loop ends.'
          },
          {
            question: 'The variable prices is declared as double[] prices. Which loop header compiles?',
            options: [
              'for (double p : prices)',
              'for (int p : prices)',
              'for (double p; prices)',
              'for (double : prices)'
            ],
            correctAnswer: 0,
            explanation: 'Each element is a double, so the loop variable must be declared as a double. An int variable cannot hold a double without a cast, and an enhanced for header needs a type, a variable name and a colon.'
          }
        ]
      }
    },
    {
      id: 'csaarray4-objects',
      type: 'text' as const,
      content: `
## Object Elements: The Copy Is a Reference

When the elements are objects, each element holds a reference, so the loop variable receives a copy of that **reference**. It refers to the same object as the element.

\`\`\`java
public class Tally {
    private int count;

    public Tally(int start) {
        count = start;
    }

    public void add(int amount) {
        count += amount;
    }

    public int getCount() {
        return count;
    }
}
\`\`\`

\`\`\`java
Tally[] t = {new Tally(1), new Tally(5)};
for (Tally item : t) {
    item.add(10);           // changes the object item refers to
}
for (Tally item : t) {
    item = new Tally(0);    // moves only the local variable
}
System.out.println(t[0].getCount() + " " + t[1].getCount());   // 11 15
\`\`\`

| Inside a for-each loop | Elements are int, double or boolean | Elements are objects |
|---|---|---|
| assign the loop variable | array unchanged | array unchanged |
| call a mutator through the loop variable | not possible: primitives have no methods | the object changes, and the array sees it |
| read the value | works | works |

## Strings Never Change

String has no methods that modify a String: every String method that seems to change one returns a new String. So nothing done to the loop variable can change a String element.

\`\`\`java
String[] words = {"cat", "dog"};
for (String w : words) {
    w = w + "s";     // builds "cats", stored only in w
}
// words is still {"cat", "dog"}
\`\`\`

## null Elements

A for-each loop visits every slot, including slots that hold null.

\`\`\`java
String[] names = new String[4];
names[0] = "Kai";
names[2] = "Lu";
int letters = 0;
for (String s : names) {
    if (s != null) {
        letters += s.length();
    }
}
// letters is 5
\`\`\`

Without the null check, the second pass calls \`length()\` on null and throws a NullPointerException after letters has reached 3.
      `
    },
    {
      id: 'csaarray4-objects',
      type: 'dropdown-select' as const,
      content: `
**Objects in a for-each Loop** 🔍

Use the Tally class above.

\`\`\`java
Tally[] arr = {new Tally(2), new Tally(4), new Tally(6)};
for (Tally x : arr) {
    x.add(x.getCount());
}
\`\`\`
      `,
      exercise: {
        dropdowns: [
          {
            label: 'After the loop, arr[1].getCount() returns ___',
            options: ['8', '4', '6', '12']
          },
          {
            label: 'If the body were x = new Tally(x.getCount() * 2); instead, arr[1].getCount() would return ___',
            options: ['4', '8', '0', '2']
          },
          {
            label: 'If arr[2] held null, the original loop would ___',
            options: ['throw a NullPointerException', 'throw an ArrayIndexOutOfBoundsException', 'skip the null slot and finish', 'stop early without any error']
          }
        ],
        correctAnswers: ['8', '4', 'throw a NullPointerException'],
        hint1: 'x refers to the same object as arr[1], so add changes that object.',
        hint2: 'Assigning x a new object does not touch the array.',
        hint3: 'The loop still visits the null slot and calls a method through it.',
        explanation: 'Calling add through x doubles each Tally the array refers to, so arr[1] goes from 4 to 8. Assigning x a new Tally changes only the local variable, leaving 4. A null slot is still visited, and calling getCount() through null throws a NullPointerException.'
      }
    },
    {
      id: 'csaarray4-limits',
      type: 'text' as const,
      content: `
## What an Enhanced for Loop Cannot Do

| Task | Enhanced for? | Reason |
|---|---|---|
| sum, count or print every element | yes | only the values are needed |
| call a mutator on every object element | yes | the copy refers to the same object |
| store a new value in an element of an int array | no | assigning the copy does not reach the array |
| visit elements backward, or every other one | no | it always visits every element, from index 0 forward |
| report the index where a value appears | no | there is no index variable |
| compare an element with its neighbor | no | it needs \`arr[i - 1]\` or \`arr[i + 1]\` |
| walk two parallel arrays together | no | it needs one index shared by both arrays |

## Rewriting Between the Forms

Any enhanced for loop can be rewritten as an indexed for loop or a while loop. Here is one method in all three forms.

\`\`\`java
public static int countLong(String[] words, int min) {
    int count = 0;
    for (String w : words) {
        if (w.length() >= min) {
            count++;
        }
    }
    return count;
}
\`\`\`

\`\`\`java
// indexed for loop
for (int i = 0; i < words.length; i++) {
    if (words[i].length() >= min) {
        count++;
    }
}

// while loop
int i = 0;
while (i < words.length) {
    if (words[i].length() >= min) {
        count++;
    }
    i++;
}
\`\`\`

**Step 1 — Header.** Replace \`String w : words\` with an index that runs from 0 while \`i < words.length\`.

**Step 2 — Body.** Replace every \`w\` with \`words[i]\`, or declare \`String w = words[i];\` as the first line of the body.

**Step 3 — Check.** For \`{"tree", "ox", "apple", "sky"}\` with min 3, all three versions return 3.

The reverse rewrite works only when the indexed loop visits every element in order, uses i for nothing except reading \`arr[i]\`, and never assigns to \`arr[i]\`.

> 🎯 **AP Connection:** A common multiple-choice item shows an indexed loop that modifies elements and asks which for-each version is equivalent. If the original assigns \`arr[i]\` and the elements are primitives, none of the for-each versions can do it.
      `
    },
    {
      id: 'csaarray4-applied',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application** 🎯

\`\`\`java
public static void clearNegatives(int[] arr) {
    for (int i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            arr[i] = 0;
        }
    }
}
\`\`\`
      `,
      exercise: {
        questions: [
          {
            question: 'A student rewrites clearNegatives with the header for (int v : arr) and the body if (v < 0) { v = 0; }. After the new version runs on {3, -2, 5, -1}, what does the array hold?',
            options: [
              '{3, -2, 5, -1}',
              '{3, 0, 5, 0}',
              '{3, 0, 5, -1}',
              '{0, 0, 0, 0}'
            ],
            correctAnswer: 0,
            explanation: 'v receives a copy of each int, so v = 0 changes only the copy and the array is unchanged. The original indexed version, which assigns arr[i], is the one that produces {3, 0, 5, 0}.'
          },
          {
            question: 'Which task can be written correctly with an enhanced for loop?',
            options: [
              'Counting how many elements are negative',
              'Replacing each negative element with zero',
              'Printing the elements in reverse order',
              'Printing the index of each negative element'
            ],
            correctAnswer: 0,
            explanation: 'Counting only reads each value, which is what the loop variable provides. Replacing an int element needs arr[i], reverse order needs a backward index, and printing an index needs an index variable.'
          },
          {
            question: 'Which statement about rewriting loops is true?',
            options: [
              'Every enhanced for loop can be rewritten as an indexed for loop',
              'Every indexed for loop can be rewritten as an enhanced for loop',
              'An enhanced for loop can be rewritten only as a while loop',
              'An enhanced for loop can change elements an indexed loop cannot'
            ],
            correctAnswer: 0,
            explanation: 'An indexed loop from 0 to length - 1 that reads arr[i] does everything a for-each loop does. The reverse fails for loops that go backward, skip elements or assign arr[i].'
          }
        ]
      }
    }
  ]
}
