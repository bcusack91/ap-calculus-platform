export const csaWritingClassesPart3Data = {
  topicSlug: 'csa-writing-classes',
  sections: [
    {
      id: 'csawriti3-intro',
      type: 'text' as const,
      content: `
# ✍️ Writing Classes

**Part 3 of 7 — Constructors in Depth: Initializing Every Field**

---

A constructor sets an object's **initial state**: the values of all its instance variables at the moment it is created (CED Topic 3.4). Part 1 covered the rules for writing constructors and overloading them. This part looks at what actually happens during \`new\`, what a field holds when the constructor never assigns it, and how a constructor should treat its arguments.

| In this part |
|---|
| What \`new\` does, step by step |
| Default values for fields the constructor skips |
| Constructors that check or adjust their arguments |
| Copying a mutable object instead of sharing it |
      `
    },
    {
      id: 'csawriti3-state',
      type: 'text' as const,
      content: `
## What new Does

When Java runs \`Lamp a = new Lamp("den", 60);\` it:

1. sets aside memory for a new \`Lamp\` object;
2. gives **every** instance variable its default value;
3. runs the constructor body, which can replace those defaults;
4. returns a reference to the new object, which is stored in \`a\`.

| Field type | Default value |
|---|---|
| \`int\` | \`0\` |
| \`double\` | \`0.0\` |
| \`boolean\` | \`false\` |
| any reference type, such as \`String\` | \`null\` |

\`\`\`java
public class Lamp {
    private String room;
    private int watts;
    private boolean on;
    private double hoursUsed;

    public Lamp(String r, int w) {
        room = r;
        watts = w;
    }

    public String describe() {
        return room + " " + watts + "W " + on + " " + hoursUsed;
    }
}
\`\`\`

The constructor never assigns \`on\` or \`hoursUsed\`, so they keep their defaults. \`System.out.println(new Lamp("den", 60).describe());\` prints \`den 60W false 0.0\`.

> 🔑 **Key Concept:** Only **instance variables** get default values. A **local variable** inside a method or constructor has no value until it is assigned, and using it first is a compile error. Good style still assigns every field in the constructor, so a reader never has to remember the defaults.
      `
    },
    {
      id: 'csawriti3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Using the Lamp class above, what is printed by System.out.println(new Lamp("hall", 40).describe());?',
            options: [
              'hall 40W false 0.0',
              'hall 40W false 0',
              'hall 40W null 0.0',
              'hall 40W true 0.0'
            ],
            correctAnswer: 0,
            explanation: 'on was never assigned, so it holds the boolean default false, and hoursUsed holds the double default 0.0, which prints with its decimal point. Only reference fields default to null.'
          },
          {
            question: 'A second constructor public Lamp() { } with an empty body is added. What does describe() return for new Lamp()?',
            options: [
              'null 0W false 0.0',
              '0W false 0.0',
              'null 0W null 0.0',
              'null 0W true 0.0'
            ],
            correctAnswer: 0,
            explanation: 'Every field keeps its default: room is null, which concatenation turns into the text null, watts is 0, on is false and hoursUsed is 0.0. A String field does not default to the empty String.'
          },
          {
            question: 'Which statement about default values is true?',
            options: [
              'A local int variable must be assigned before use',
              'A local int variable starts at 0 if it is never assigned',
              'An int instance variable is null until the constructor runs',
              'A String instance variable starts as the empty String'
            ],
            correctAnswer: 0,
            explanation: 'Defaults apply only to instance variables; reading a local variable before assigning it does not compile. An int field starts at 0, never null, and a String field starts as null.'
          }
        ]
      }
    },
    {
      id: 'csawriti3-adjust',
      type: 'text' as const,
      content: `
## Constructors That Check Their Arguments

The constructor is the first chance to enforce the rules in the specification. If a field must stay in a range, the constructor should guarantee it from the start.

\`\`\`java
public class Thermostat {
    private int low;
    private int high;
    private int target;

    public Thermostat(int lowLimit, int highLimit, int start) {
        low = lowLimit;
        high = highLimit;
        if (start < low) {
            target = low;
        } else if (start > high) {
            target = high;
        } else {
            target = start;
        }
    }

    public Thermostat() {
        low = 60;
        high = 80;
        target = 68;
    }

    public int getTarget() {
        return target;
    }
}
\`\`\`

| Statement | low | high | target |
|---|---|---|---|
| \`new Thermostat(60, 80, 72)\` | 60 | 80 | 72 |
| \`new Thermostat(60, 80, 55)\` | 60 | 80 | 60 (raised to low) |
| \`new Thermostat(60, 80, 90)\` | 60 | 80 | 80 (lowered to high) |
| \`new Thermostat()\` | 60 | 80 | 68 |

### Which Constructor Runs?

Java picks the constructor whose parameter list matches the arguments in **number, type and order**. \`new Thermostat()\` runs the no-parameter version and \`new Thermostat(60, 80, 72)\` runs the three-int version. \`new Thermostat(70)\` does not compile, because no constructor takes one int.

### Parameters Are Local

\`lowLimit\`, \`highLimit\` and \`start\` exist only while the constructor runs. If they were not copied into fields, their values would be lost the moment the constructor returned. That is why a constructor's main job is to move information from its parameters into instance variables.
      `
    },
    {
      id: 'csawriti3-which',
      type: 'dropdown-select' as const,
      content: `
**Trace the Constructor** 🔍

Use the Thermostat class above.
      `,
      exercise: {
        dropdowns: [
          {
            label: 'new Thermostat(65, 75, 64).getTarget() returns ___',
            options: ['65', '64', '75', '68']
          },
          {
            label: 'new Thermostat(65, 75, 75).getTarget() returns ___',
            options: ['75', '65', '74', '68']
          },
          {
            label: 'The statement new Thermostat(60, 80) ___',
            options: ['does not compile', 'sets target to 68', 'sets target to 60', 'sets target to 0']
          }
        ],
        correctAnswers: ['65', '75', 'does not compile'],
        hint1: '64 is below the low limit of 65.',
        hint2: 'The test start > high is false when start equals high.',
        hint3: 'Count the arguments, then look for a constructor with that many parameters.',
        explanation: 'A start below low is raised to low, so the first target is 65. A start equal to high passes both tests and is kept, so the second is 75. No constructor takes exactly two ints, so the third statement is a compile error.'
      }
    },
    {
      id: 'csawriti3-mutable',
      type: 'text' as const,
      content: `
## Copying a Mutable Object Parameter

A **mutable** object has methods that change its state. When a constructor receives a mutable object, the CED's rule is to store a **copy**, so the new object does not share state with the caller.

\`\`\`java
public class Point {
    private int x;
    private int y;

    public Point(int x0, int y0) {
        x = x0;
        y = y0;
    }

    public int getX() { return x; }
    public int getY() { return y; }

    public void moveBy(int dx, int dy) {
        x += dx;
        y += dy;
    }
}
\`\`\`

Two ways to write a \`Robot\` constructor:

\`\`\`java
// Version A: shares the caller's Point
public Robot(Point start) {
    home = start;
}

// Version B: stores its own copy
public Robot(Point start) {
    home = new Point(start.getX(), start.getY());
}
\`\`\`

## Worked Example: Who Sees the Change?

\`\`\`java
Point p = new Point(2, 3);
Robot r = new Robot(p);
p.moveBy(5, 0);
\`\`\`

**Step 1 — After the first two lines.** With Version A, \`p\` and \`r\`'s \`home\` field hold the **same reference**: they are aliases for one Point object. With Version B, \`home\` refers to a second Point object that happens to hold (2, 3).

**Step 2 — After p.moveBy(5, 0).**

| Version | Point objects | p refers to | home refers to |
|---|---|---|---|
| A (alias) | 1 | (7, 3) | the same object, now (7, 3) |
| B (copy) | 2 | (7, 3) | its own object, still (2, 3) |

**Step 3 — Why it matters.** With Version A, code outside the Robot changed the Robot's home without calling any Robot method, which defeats encapsulation. Version B keeps the Robot in control of its own state.

> 🎯 **AP Connection:** A String never needs copying, because no String method changes a String. Copying matters for objects with mutator methods, such as the Point above.
      `
    },
    {
      id: 'csawriti3-input',
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

1) A \`double\` instance variable that the constructor never assigns holds the value _______.

2) Using Version B of the Robot constructor, how many Point objects exist after \`Point p = new Point(2, 3); Robot r = new Robot(p);\`? _______

3) Using Version A, what does \`p.getX()\` return after \`Point p = new Point(2, 3); Robot r = new Robot(p); p.moveBy(5, 0);\`? _______
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['0.0', '2', '7'],
        hint1: 'Each field type has its own default; this one has a decimal point.',
        hint2: 'Count every time the keyword new creates a Point.',
        hint3: 'p is the caller\'s own reference, so the move shows up in p regardless of the version.',
        explanation: 'An unassigned double field defaults to 0.0. Version B runs new Point twice in total (once in the client, once in the constructor), so 2 Points exist. p.moveBy(5, 0) changes p\'s object directly, so its x is 7 under either version.'
      }
    }
  ]
}
