export const csaStringsObjectsPart2Data = {
  topicSlug: 'csa-strings-objects',
  sections: [
    {
      id: 'csastrin2-intro',
      type: 'text' as const,
      content: `
# 🔤 Strings & Objects

**Part 2 of 7 — String Objects, Concatenation, and equals vs ==**

---

Part 1 showed what the String methods return. This part looks at what a String variable actually holds, what happens when + mixes Strings with numbers, and why two Strings with the same letters can still fail an == test.

### Topics in This Part

| Section |
|---------|
| Creating String objects: literals, the constructor, "" and null |
| Concatenation with numbers, booleans, and objects |
| += builds a new String |
| equals vs == |
| null Strings and NullPointerException |

> 🔑 **Key Concept:** A String variable stores a **reference** to a String object, not the characters themselves. Most String surprises on the AP exam come from forgetting that.
      `
    },
    {
      id: 'csastrin2-create',
      type: 'text' as const,
      content: `
## Creating String Objects

\`String\` is a class in the \`java.lang\` package, so it is available in every program without an import. AP code makes String objects in two ways: a string literal in double quotes, or the \`String(String str)\` constructor from the Java Quick Reference.

\`\`\`java
String city = "Boston";               // a string literal
String copy = new String("Boston");   // the constructor String(String str)
String blank = "";                    // the empty String: an object with length() 0
String none = null;                   // no String object at all
\`\`\`

Each variable is a **reference variable**. A reference diagram shows what is stored:

\`\`\`
city  --> "Boston"
copy  --> "Boston"     (a second, separate object with the same characters)
blank --> ""
none      null         (refers to nothing)
\`\`\`

### "" is not the same as null

| | \`""\` (empty String) | \`null\` |
|---|---|---|
| Is there an object? | Yes | No |
| \`length()\` | returns 0 | throws NullPointerException |
| In concatenation, \`"Hi " + s\` | gives "Hi " | gives "Hi null" |
| Typical use | starting value for a String you will build with += | "no value yet" |

> 💡 When you build a String in a loop, start from \`""\`, never from \`null\`. Starting from null puts the four letters "null" at the front of your result.
      `
    },
    {
      id: 'csastrin2-concat',
      type: 'text' as const,
      content: `
## Concatenation with Other Types

Three rules decide what + does:

1. If **either operand is a String**, + means concatenation. The other operand is converted to its String form first.
2. Operators of the same precedence are evaluated **left to right**, so whether a + adds or concatenates depends on what has been built so far.
3. \`*\`, \`/\` and \`%\` happen **before** +, and parentheses force anything inside them to happen first.

| Expression | Steps | Result |
|---|---|---|
| \`"Total: " + 3 + 4\` | \`"Total: 3" + 4\` | \`"Total: 34"\` |
| \`3 + 4 + " total"\` | \`7 + " total"\` | \`"7 total"\` |
| \`"Total: " + (3 + 4)\` | parentheses first | \`"Total: 7"\` |
| \`"Avg " + 7 / 2\` | int division first: 3 | \`"Avg 3"\` |
| \`"Avg " + 7.0 / 2\` | double division first: 3.5 | \`"Avg 3.5"\` |
| \`"x" + 2.0\` | a double always shows a decimal point | \`"x2.0"\` |
| \`"ok? " + (5 > 3)\` | boolean becomes "true" | \`"ok? true"\` |

Two more facts:

- \`"Total: " + 3 - 4\` does **not compile**. The left part becomes the String "Total: 3", and you cannot subtract an int from a String.
- When an **object** is concatenated, Java calls its \`toString()\` method for you. For a String that is just its own text; for a class you write, it is whatever that class's toString returns.

### Worked Example: Reading a Mixed Expression

\`\`\`java
int a = 2;
int b = 5;
System.out.println(a + b + " and " + a + b);
\`\`\`

| Step | Operation | Value so far |
|---|---|---|
| 1 | \`a + b\` (both int) | \`7\` |
| 2 | \`7 + " and "\` | \`"7 and "\` |
| 3 | \`"7 and " + a\` | \`"7 and 2"\` |
| 4 | \`"7 and 2" + b\` | \`"7 and 25"\` |

Output: \`7 and 25\`. The first + adds because nothing is a String yet; every + after the first String concatenates.
      `
    },
    {
      id: 'csastrin2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Trace the Output** 🎯

**Segment A**
\`\`\`java
int a = 5;
int b = 2;
System.out.println(a + b + "=" + a + b);
\`\`\`

**Segment B**
\`\`\`java
double price = 4.0;
int qty = 3;
String msg = "Cost: " + price * qty;
System.out.println(msg);
\`\`\`
      `,
      exercise: {
        questions: [
          {
            question: 'What is printed by Segment A?',
            options: [
              '7=52',
              '7=7',
              '52=52',
              '52=7'
            ],
            correctAnswer: 0,
            explanation: 'The first + adds the two ints to get 7. After "=" joins in, the expression is a String, so a and b are appended as the digits 5 and 2, giving 7=52.'
          },
          {
            question: 'What is printed by Segment B?',
            options: [
              'Cost: 12.0',
              'Cost: 12',
              'Cost: 4.03',
              'Cost: 12.00'
            ],
            correctAnswer: 0,
            explanation: 'Multiplication happens before +, so price * qty is the double 12.0, and a double is converted with one decimal place here. The result 4.03 would need + to go first, which precedence rules out.'
          }
        ]
      }
    },
    {
      id: 'csastrin2-reassign',
      type: 'text' as const,
      content: `
## += Builds a New String

Because Strings are immutable, \`+=\` cannot add letters to an existing object. It builds a **new** String and moves the variable to it.

\`\`\`java
String word = "cat";
String other = word;     // both variables refer to the same "cat" object
word += "s";             // same as word = word + "s";
System.out.println(word);    // cats
System.out.println(other);   // cat
\`\`\`

\`\`\`
Before word += "s":          After word += "s":
word  --> "cat"              word  --> "cats"   (new object)
other --> "cat" (same)       other --> "cat"    (unchanged)
\`\`\`

\`other\` still prints \`cat\`. Nothing changed the original object; only \`word\` was pointed somewhere new. This is exactly how a loop like \`result += piece;\` builds an answer: each pass makes a slightly longer String and reassigns \`result\`.
      `
    },
    {
      id: 'csastrin2-equality',
      type: 'text' as const,
      content: `
## equals vs ==

| Test | Question it asks | Use it for Strings? |
|---|---|---|
| \`a == b\` | Do \`a\` and \`b\` refer to the **same object**? | No, it compares references |
| \`a.equals(b)\` | Do the two Strings hold the **same characters in the same order**? | Yes, always |

\`\`\`java
String a = new String("java");
String b = new String("java");
String c = a;
System.out.println(a == b);           // false: two different objects
System.out.println(a.equals(b));      // true: same characters
System.out.println(a == c);           // true: c refers to the same object as a
System.out.println(a.equals("Java")); // false: equals is case-sensitive
\`\`\`

### Why == "sometimes works"

Java may let identical string literals share one object, so \`"java" == "java"\` can print true. That is a storage detail, not a promise. Strings produced while the program runs, by \`substring\`, concatenation, or the constructor, are usually new objects, so == on them is false even when the letters match. The rule never changes: **compare String contents with equals.**

> 🎯 **AP Connection:** Free-response rubrics penalize using == to compare String contents. Multiple-choice questions use it as a distractor in "which expression is true" items.
      `
    },
    {
      id: 'csastrin2-null',
      type: 'text' as const,
      content: `
## null Strings and NullPointerException

A variable that holds \`null\` has no object behind it. Concatenation handles that case; method calls do not.

\`\`\`java
String s = null;
String t = "";
System.out.println(t.length());        // 0
System.out.println("x" + s);           // xnull
System.out.println("abc".equals(s));   // false
System.out.println(s.length());        // throws NullPointerException
\`\`\`

| Line | Why |
|---|---|
| \`t.length()\` | \`t\` refers to a real object with no characters |
| \`"x" + s\` | concatenation turns a null reference into the text "null" |
| \`"abc".equals(s)\` | the method runs on "abc"; equals returns false for a null argument |
| \`s.length()\` | there is no object to run \`length()\` on, so the program stops with a run-time error |

> 💡 \`"yes".equals(answer)\` safely returns false when \`answer\` is null, while \`answer.equals("yes")\` throws. Calling the method on the String you know exists is a common defensive habit.
      `
    },
    {
      id: 'csastrin2-quiz2',
      type: 'multiple-choice' as const,
      content: `
**References and null** 🎯

**Segment C**
\`\`\`java
String a = new String("hi");
String b = new String("hi");
String alias = b;
\`\`\`

**Segment D**
\`\`\`java
String name = null;
\`\`\`
      `,
      exercise: {
        questions: [
          {
            question: 'After Segment C runs, which expression evaluates to false?',
            options: [
              'a == b',
              'alias == b',
              'a.equals(b)',
              'alias.equals(a)'
            ],
            correctAnswer: 0,
            explanation: 'Each call to new String creates a separate object, so a and b hold different references and a == b is false. alias refers to the very object b refers to, and all three Strings contain "hi", so the other three expressions are true.'
          },
          {
            question: 'After Segment D, which statement throws a NullPointerException when it runs?',
            options: [
              'int n = name.length();',
              'String g = "Hi " + name;',
              'boolean b = "Ann".equals(name);',
              'String greeting = name;'
            ],
            correctAnswer: 0,
            explanation: 'Calling length() needs an object, and name refers to none. Concatenation turns null into the text "null", "Ann".equals(name) simply returns false, and copying a null reference into another variable is legal.'
          }
        ]
      }
    },
    {
      id: 'csastrin2-input',
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

1) What is printed by \`System.out.println(1 + 2 + "A" + 1 + 2);\`?

2) After these statements run, what is \`s.length()\`?
\`\`\`java
String s = "ab";
s += s;
s += "c";
\`\`\`

3) To check whether two Strings contain the same characters, call the _______ method.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['3A12', '5', 'equals'],
        hint1: 'Work left to right: 1 + 2 happens before any String appears.',
        hint2: 's += s doubles "ab" into "abab"; then one more letter is added.',
        hint3: 'Not the == operator, which compares references.',
        explanation: '1 + 2 is 3, then "A" turns the rest into concatenation, giving 3A12. s becomes "abab" and then "ababc", which has 5 characters. The equals method compares contents, while == compares references.'
      }
    },
    {
      id: 'csastrin2-summary',
      type: 'text' as const,
      content: `
## Part 2 Summary

| Idea | Remember |
|---|---|
| String variables | hold a reference to an object (or null) |
| \`""\` vs \`null\` | empty String is an object; null is no object |
| Concatenation | left to right; once a String appears, + joins text |
| Precedence | \`*\`, \`/\`, \`%\` and parentheses happen before + |
| \`+=\` on a String | builds a new object and reassigns the variable |
| Comparing contents | \`equals\`, never \`==\` |
| Method call on null | NullPointerException at run time |

**Next:** Part 3 puts substring and indexOf to work, pulling names, codes, and words out of larger Strings without going out of bounds.
      `
    }
  ]
};
