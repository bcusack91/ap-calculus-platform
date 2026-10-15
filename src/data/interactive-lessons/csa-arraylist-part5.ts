export const csaArraylistPart5Data = {
  topicSlug: 'csa-arraylist',
  sections: [
    {
      id: 'csaarray5-intro',
      type: 'text' as const,
      content: `
# 📋 ArrayList

**Part 5 of 7 — Lists of Objects, References, and Common Errors**

---

So far the lists in this lesson have held Integers and Strings. An ArrayList can hold references to objects of **any** class, including classes you write, and that is the setting of the free-response question on data analysis. This part covers lists of objects, what it means that a list stores references, how to move values between arrays and lists, and the mistakes that most often break ArrayList code.

| In this part |
|---|
| A list of objects: getters and mutators through \`get\` |
| A list variable holds a reference: aliases and copies |
| Passing a list to a method |
| Converting between arrays and lists, and choosing one |
| A catalogue of common errors |
      `
    },
    {
      id: 'csaarray5-objects',
      type: 'text' as const,
      content: `
## A List of Objects

\`\`\`java
public class Track {
    private String title;
    private int seconds;

    public Track(String t, int s) {
        title = t;
        seconds = s;
    }

    public String getTitle() { return title; }
    public int getSeconds() { return seconds; }
    public void trim(int amount) { seconds -= amount; }
}
\`\`\`

\`\`\`java
ArrayList<Track> playlist = new ArrayList<Track>();
playlist.add(new Track("Intro", 95));
playlist.add(new Track("Rise", 210));
playlist.add(new Track("Echo", 180));

int total = 0;
for (Track t : playlist) {
    total += t.getSeconds();       // total is 95 + 210 + 180 = 485
}

playlist.get(1).trim(30);          // the Rise object now has 180 seconds
for (Track t : playlist) {
    t.trim(5);                     // each t refers to an object in the list
}
// seconds are now 90, 175 and 175
\`\`\`

- \`playlist.get(1)\` returns a **reference** to the Track stored at index 1, so \`playlist.get(1).trim(30)\` changes that object, not a copy.
- The enhanced for variable \`t\` is a copy of each **reference**. Calling a mutator through it changes the object in the list, exactly as it does for an array of objects.
- Assigning a new object to the loop variable, as in \`t = new Track("Blank", 0);\`, changes only \`t\` and leaves the list alone.
- Calls can be chained: \`playlist.get(0).getTitle().length()\` is the length of "Intro", which is 5.
      `
    },
    {
      id: 'csaarray5-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯

**Segment A** (uses the Track class above)
\`\`\`java
ArrayList<Track> list = new ArrayList<Track>();
list.add(new Track("Hum", 120));
list.add(new Track("Glow", 200));
Track first = list.get(0);
first.trim(20);
list.set(0, new Track("Dawn", 150));
first.trim(10);
list.add(1, first);
int sum = 0;
for (Track t : list) {
    sum += t.getSeconds();
}
\`\`\`
      `,
      exercise: {
        questions: [
          {
            question: 'What is the value of sum after Segment A runs?',
            options: [
              '440',
              '450',
              '350',
              '470'
            ],
            correctAnswer: 0,
            explanation: 'first refers to the Hum object, which is trimmed to 100 and then to 90; set replaces the list\'s reference but does not change Hum. After add(1, first) the list holds Dawn 150, Hum 90 and Glow 200, so sum is 440.'
          },
          {
            question: 'What does list.get(1).getTitle() return after Segment A runs?',
            options: [
              '"Hum"',
              '"Glow"',
              '"Dawn"',
              'null'
            ],
            correctAnswer: 0,
            explanation: 'add(1, first) inserts the Hum object at index 1 and shifts Glow to index 2. Dawn stays at index 0.'
          },
          {
            question: 'After Segment A, the statement first.trim(40); runs. Which element of list changes?',
            options: [
              'the element at index 1',
              'the element at index 0',
              'no element of the list',
              'the element at index 2'
            ],
            correctAnswer: 0,
            explanation: 'first and list.get(1) refer to the same Hum object, so trimming through first changes the element at index 1. The Dawn object at index 0 is a different object.'
          }
        ]
      }
    },
    {
      id: 'csaarray5-references',
      type: 'text' as const,
      content: `
## A List Variable Holds a Reference

\`\`\`java
ArrayList<Integer> a = new ArrayList<Integer>();
a.add(1);
a.add(2);
ArrayList<Integer> b = a;      // alias: one list, two names
b.add(3);
System.out.println(a);         // prints [1, 2, 3]
\`\`\`

To get an independent list, build a new one and copy the elements:

\`\`\`java
ArrayList<Integer> copy = new ArrayList<Integer>();
for (int v : a) {
    copy.add(v);
}
copy.set(0, 99);
System.out.println(a + " " + copy);   // prints [1, 2, 3] [99, 2, 3]
\`\`\`

## Passing a List to a Method

\`\`\`java
public static void addTwice(ArrayList<String> list, String s) {
    list.add(s);
    list.add(s);
}

public static void replace(ArrayList<String> list) {
    list = new ArrayList<String>();
    list.add("new");
}
\`\`\`

\`\`\`java
ArrayList<String> tags = new ArrayList<String>();
tags.add("x");
addTwice(tags, "y");
replace(tags);
System.out.println(tags);      // prints [x, y, y]
\`\`\`

The parameter receives a copy of the caller's **reference**. \`addTwice\` changes the one shared list, so the caller sees both adds. \`replace\` points its own parameter at a brand-new list, which the caller never sees.

## Converting Between Arrays and Lists

\`\`\`java
int[] arr = {4, 7, 1};
ArrayList<Integer> list = new ArrayList<Integer>();
for (int v : arr) {
    list.add(v);                   // autoboxing
}
list.add(9);                       // the list can grow; arr cannot
int[] back = new int[list.size()];
for (int i = 0; i < list.size(); i++) {
    back[i] = list.get(i);         // unboxing
}
// back is {4, 7, 1, 9}
\`\`\`

| Situation | Better choice | Why |
|---|---|---|
| A fixed number of values, such as 12 monthly totals | array | the size never changes, and it holds int or double directly |
| Values are added and removed as the program runs | ArrayList | the size changes automatically |
| Values must be inserted in the middle | ArrayList | \`add(index, obj)\` shifts the later elements for you |
      `
    },
    {
      id: 'csaarray5-refs',
      type: 'dropdown-select' as const,
      content: `
**References and Copies** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'a is a list of size 2. After b = a; and then b.add(3);, a.size() is ___',
            options: ['3', '2', '1', '0']
          },
          {
            label: 'A method assigns a new empty list to its list parameter. The caller\'s list ___',
            options: ['keeps all its elements', 'becomes an empty list', 'becomes null afterward', 'loses its first element']
          },
          {
            label: 'Copying the values of a list of Integer into an int array uses ___',
            options: ['unboxing', 'autoboxing', 'parsing', 'aliasing']
          }
        ],
        correctAnswers: ['3', 'keeps all its elements', 'unboxing'],
        hint1: 'b = a copies the reference, so there is still only one list.',
        hint2: 'Reassigning a parameter changes only the method\'s own variable.',
        hint3: 'Each Integer must become an int to be stored in an int array.',
        explanation: 'b and a name the same list, so the add shows through a. Reassigning a parameter never reaches the caller\'s variable. Storing an Integer into an int element unboxes it.'
      }
    },
    {
      id: 'csaarray5-errors',
      type: 'text' as const,
      content: `
## Common Errors With ArrayList

| Error | Wrong | Right |
|---|---|---|
| Array syntax on a list | \`list[i]\`, \`list.length\` | \`list.get(i)\`, \`list.size()\` |
| Primitive element type | a list declared with \`int\` | a list declared with \`Integer\` |
| Reading past the end | \`list.get(list.size())\` | \`list.get(list.size() - 1)\` for the last element |
| Inserting past the end | \`list.add(list.size() + 1, x)\` | an index from 0 to \`list.size()\` |
| Comparing Strings with == | \`list.get(i) == "cat"\` | \`list.get(i).equals("cat")\` |
| Changing the size in an enhanced for | \`add\` or \`remove\` in the body | an indexed loop with the index managed |
| Storing the wrong type | adding a String to a list of Integer | a compile error: match the declared type |

## remove Takes an Index

On the Quick Reference, \`remove\` takes an **index**. With a list of Integer, the argument is still an index, not a value to look for:

\`\`\`java
// nums holds [10, 20, 30]
nums.remove(1);       // removes index 1, the value 20: nums is [10, 30]
nums.remove(20);      // throws an IndexOutOfBoundsException: there is no index 20
\`\`\`

To remove the value 20, write a loop that finds its index, then call \`remove\` with that index.

> 📝 **AP Connection:** Lists of objects are the heart of the free-response question on data analysis with ArrayList: a class keeps a private list of objects and its methods traverse it with getters. Errors from the table above, especially array syntax on a list, are among the most common reasons such answers fail.
      `
    },
    {
      id: 'csaarray5-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Spot the Error** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'nums is an ArrayList of Integer holding [10, 20, 30]. What happens when nums.remove(2); runs?',
            options: [
              'It removes the 30 at index 2, leaving [10, 20]',
              'It removes 20, leaving [10, 30]',
              'It throws an IndexOutOfBoundsException',
              'It removes nothing, since 2 is not in nums'
            ],
            correctAnswer: 0,
            explanation: 'The argument is an index, and index 2 holds 30, so 30 is removed. remove never searches for a value on the Quick Reference.'
          },
          {
            question: 'Which expression evaluates to the last element of the ArrayList named names?',
            options: [
              'names.get(names.size() - 1)',
              'names.get(names.size())',
              'names[names.size() - 1]',
              'names.get(names.length - 1)'
            ],
            correctAnswer: 0,
            explanation: 'The last valid index is one less than the size, and a list is read with get. get(names.size()) throws, and the bracket and length forms belong to arrays, so they do not compile.'
          },
          {
            question: 'Which data set is the best fit for an ArrayList rather than an array?',
            options: [
              'Names of guests as they sign up for or cancel a party',
              'The 12 monthly rainfall totals for one year',
              'The 7 daily high temperatures in one week',
              'The answers to a fixed-length quiz'
            ],
            correctAnswer: 0,
            explanation: 'A guest list grows and shrinks while the program runs, which is what an ArrayList handles automatically. The other data sets have a size that is known in advance and never changes, so an array fits them.'
          }
        ]
      }
    }
  ]
}
