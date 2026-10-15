export const csaWritingClassesPart2Data = {
  topicSlug: 'csa-writing-classes',
  sections: [
    {
      id: 'csawriti2-intro',
      type: 'text' as const,
      content: `
# ✍️ Writing Classes

**Part 2 of 7 — From Specification to Class: Attributes, Behaviors, and Encapsulation**

---

Part 1 showed a finished \`Student\` class. On the exam you usually work the other way: you are handed a written **specification** and must turn it into a class (CED Topic 3.3, with the design ideas of Topic 3.1). Free-response question 2 is exactly this task.

| In this part |
|---|
| Turning a specification into attributes and behaviors |
| Deciding what to store and what to compute |
| Access rules: what client code can and cannot touch |
| Worked example: a ReadingLog class from a spec |
      `
    },
    {
      id: 'csawriti2-spec',
      type: 'text' as const,
      content: `
## Reading a Specification

> **Specification.** A \`ParkingMeter\` is created with a maximum number of minutes. It starts with 0 minutes remaining. \`addCoins(int quarters)\` adds 15 minutes per quarter, but the time remaining never goes above the maximum. \`tick()\` uses up one minute if any time remains. \`isExpired()\` returns true when no time remains. \`getMinutes()\` returns the minutes remaining.

### Step 1 — Sort the Spec Into Attributes and Behaviors

**Attributes** are what each object must *remember* between method calls. **Behaviors** are what the object can *do*, and they become methods.

| Phrase in the spec | Becomes |
|---|---|
| "a maximum number of minutes" (given at creation) | \`private int maxMinutes;\` set by the constructor |
| "minutes remaining" | \`private int minutes;\` |
| "adds 15 minutes per quarter" | \`public void addCoins(int quarters)\` |
| "uses up one minute" | \`public void tick()\` |
| "returns true when no time remains" | \`public boolean isExpired()\` |
| "returns the minutes remaining" | \`public int getMinutes()\` |

### Step 2 — Store Only What You Cannot Compute

\`isExpired()\` does **not** need its own field. Its answer is always \`minutes == 0\`, so computing it on demand keeps it correct automatically. A stored \`boolean expired\` would have to be updated in every method that changes \`minutes\`, and one missed update would make the two fields disagree.

### Step 3 — Draw the Class Diagram

A class diagram lists the class name, then the attributes, then the behaviors. A minus sign marks private members and a plus sign marks public ones.

| ParkingMeter |
|---|
| - minutes : int |
| - maxMinutes : int |
| + ParkingMeter(max : int) |
| + addCoins(quarters : int) : void |
| + tick() : void |
| + isExpired() : boolean |
| + getMinutes() : int |

### Step 4 — Write the Class

\`\`\`java
public class ParkingMeter {
    private int minutes;
    private int maxMinutes;

    public ParkingMeter(int max) {
        maxMinutes = max;
        minutes = 0;
    }

    public void addCoins(int quarters) {
        minutes += 15 * quarters;
        if (minutes > maxMinutes) {
            minutes = maxMinutes;
        }
    }

    public void tick() {
        if (minutes > 0) {
            minutes--;
        }
    }

    public boolean isExpired() {
        return minutes == 0;
    }

    public int getMinutes() {
        return minutes;
    }
}
\`\`\`
      `
    },
    {
      id: 'csawriti2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯

Client code in another class runs:
\`\`\`java
ParkingMeter m = new ParkingMeter(60);
m.addCoins(5);
m.tick();
m.tick();
\`\`\`
      `,
      exercise: {
        questions: [
          {
            question: 'What does m.getMinutes() return after these statements?',
            options: [
              '58',
              '60',
              '73',
              '75'
            ],
            correctAnswer: 0,
            explanation: 'Five quarters add 75 minutes, which the if statement caps at the maximum of 60, and the two ticks leave 58. The value 73 forgets the cap, and 60 forgets the ticks.'
          },
          {
            question: 'Which statement in the client class does NOT compile?',
            options: [
              'm.minutes = 30;',
              'm.addCoins(100);',
              'int left = m.getMinutes();',
              'boolean done = m.isExpired();'
            ],
            correctAnswer: 0,
            explanation: 'minutes is private, so only code inside ParkingMeter can name it. The other three statements call public methods, which is how client code is meant to reach the data.'
          },
          {
            question: 'A student adds a field private boolean expired and updates it inside tick. What is the main risk of this design?',
            options: [
              'The flag can disagree with minutes when another method changes the time',
              'A boolean instance variable cannot be private in a public class',
              'The isExpired method could no longer return a boolean value',
              'The constructor would need a third parameter for the flag'
            ],
            correctAnswer: 0,
            explanation: 'addCoins also changes minutes, and if it does not update the flag too, isExpired reports a stale answer. Computing the result from minutes avoids keeping two fields in agreement.'
          }
        ]
      }
    },
    {
      id: 'csawriti2-access',
      type: 'text' as const,
      content: `
## Access Rules and Why They Matter

| Part of the class | Usual access | Reason |
|---|---|---|
| the class itself | \`public\` | other classes must be able to create objects |
| instance variables | \`private\` | encapsulation: only the class's own code can change its state |
| constructors | \`public\` | client code calls them with \`new\` |
| methods the client needs | \`public\` | they are the class's interface |
| helper methods used only inside the class | \`private\` | they are implementation details |

**Encapsulation** keeps the implementation hidden. Client code depends only on the public method headers, so two things become possible:

1. **Validation.** Because every change to \`minutes\` goes through \`addCoins\` or \`tick\`, the class can guarantee that \`minutes\` stays between 0 and \`maxMinutes\`. If \`minutes\` were public, any client could set it to -50.
2. **Changing the inside without breaking the outside.** The class could store seconds instead of minutes, with \`getMinutes()\` returning \`seconds / 60\`. Every client that calls \`getMinutes()\` still works, because the method header did not change.

### What "Inside the Class" Means

Access is checked by **where the code is written**, not by which object it uses. Code inside \`ParkingMeter\` may use \`minutes\` freely. Code in a different class, even a \`main\` method that created the meter, may not write \`m.minutes\`.

> 🎯 **AP Connection:** On FRQ 2, declaring an instance variable \`public\`, or leaving out \`private\`, costs a point. So does writing a method header that does not match the specification's name, return type or parameter list, because the graders' tests call the methods exactly as specified.
      `
    },
    {
      id: 'csawriti2-design',
      type: 'dropdown-select' as const,
      content: `
**Design Decisions** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'A Thermostat must remember its target temperature between method calls, so the target is stored as ___',
            options: ['a private instance variable', 'a local variable in the constructor', 'a public instance variable', 'a parameter of every method']
          },
          {
            label: 'A method that only other methods in the class use to round a value should have the access modifier ___',
            options: ['private', 'public', 'final', 'static']
          },
          {
            label: 'In a class diagram, the entry - minutes : int describes an attribute that is ___',
            options: ['private', 'public', 'static', 'constant']
          }
        ],
        correctAnswers: ['a private instance variable', 'private', 'private'],
        hint1: 'Local variables disappear when their method ends.',
        hint2: 'Ask who needs to call the method: code outside the class, or only code inside it.',
        hint3: 'The sign in front of a class-diagram entry shows its access.',
        explanation: 'State that must last between calls belongs in a private instance variable. A helper that the client never calls should be private. In a class diagram, a minus sign marks a private member and a plus sign marks a public one.'
      }
    },
    {
      id: 'csawriti2-worked',
      type: 'text' as const,
      content: `
## Worked Example: ReadingLog

> **Specification.** A \`ReadingLog\` is created with a daily page goal. It keeps a running total of pages read today. \`addPages(int n)\` adds n pages to today's total; a value of n that is not positive is ignored. \`endDay()\` checks whether today's total met the goal (at least the goal), counts the day if it did, and starts the next day at 0 pages. \`getGoalDays()\` returns the number of days on which the goal was met.

**Step 1 — Attributes.** The object must remember the goal, today's pages and the number of goal days. Nothing in the spec needs the total number of days, so it is not stored.

**Step 2 — Behaviors and headers.** Copy the names and types exactly: \`addPages(int n)\` and \`endDay()\` return nothing, and \`getGoalDays()\` returns an int.

**Step 3 — Code.**

\`\`\`java
public class ReadingLog {
    private int goal;
    private int todayPages;
    private int goalDays;

    public ReadingLog(int dailyGoal) {
        goal = dailyGoal;
        todayPages = 0;
        goalDays = 0;
    }

    public void addPages(int n) {
        if (n > 0) {
            todayPages += n;
        }
    }

    public void endDay() {
        if (todayPages >= goal) {
            goalDays++;
        }
        todayPages = 0;
    }

    public int getGoalDays() {
        return goalDays;
    }
}
\`\`\`

**Step 4 — Test against the spec.**

| Statement | todayPages | goalDays |
|---|---|---|
| \`ReadingLog log = new ReadingLog(20);\` | 0 | 0 |
| \`log.addPages(15);\` | 15 | 0 |
| \`log.addPages(-5);\` | 15 (ignored) | 0 |
| \`log.endDay();\` | 0 | 0 (15 is below 20) |
| \`log.addPages(25);\` | 25 | 0 |
| \`log.endDay();\` | 0 | 1 |
| \`log.addPages(20);\` | 20 | 1 |
| \`log.endDay();\` | 0 | 2 (20 meets the goal) |

\`log.getGoalDays()\` returns 2. Notice that the reset \`todayPages = 0;\` sits **outside** the if: every day ends with a fresh total, whether or not the goal was met.
      `
    },
    {
      id: 'csawriti2-applied',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application** 🎯

Use the ReadingLog class above.
      `,
      exercise: {
        questions: [
          {
            question: 'A student leaves out the statement todayPages = 0; in endDay. What does getGoalDays() return after new ReadingLog(20), then addPages(15), endDay(), addPages(10), endDay(), addPages(5), endDay()?',
            options: [
              '2',
              '0',
              '1',
              '3'
            ],
            correctAnswer: 0,
            explanation: 'Without the reset the total keeps growing: 15 misses the goal, then 25 and 30 both meet it, so two days are counted. The correct class returns 0 because no single day reaches 20 pages.'
          },
          {
            question: 'Why does the constructor take the goal as a parameter but not the number of goal days?',
            options: [
              'Goals differ from log to log, but every new log starts with no goal days',
              'A constructor in Java may take at most one parameter of type int',
              'The goal days are computed by getGoalDays each time it is called',
              'Fields that start at 0 must never be assigned inside a constructor'
            ],
            correctAnswer: 0,
            explanation: 'The client chooses the goal, so it arrives as a parameter; every new log has met its goal on zero days, so that field always starts at 0. Constructors may take any number of parameters.'
          }
        ]
      }
    }
  ]
}
