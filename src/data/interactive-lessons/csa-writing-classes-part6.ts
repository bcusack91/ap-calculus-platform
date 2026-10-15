export const csaWritingClassesPart6Data = {
  topicSlug: 'csa-writing-classes',
  sections: [
    {
      id: 'csawriti6-intro',
      type: 'text' as const,
      content: `
# ✍️ Writing Classes

**Part 6 of 7 — AP-Style Practice**

---

Free-response question 2 (Class Design) asks you to write a **complete class** from a specification and a table of example calls. Multiple-choice questions trace objects through constructors and method calls. This part practices both with the topics of Parts 1–5.

### How to Attack a Class-Design FRQ

| Step | Do this |
|---|---|
| 1 | Copy every method header exactly: name, return type, parameter types, \`public\`. |
| 2 | List the attributes the examples force you to remember. Declare them \`private\`. |
| 3 | Write the constructor so that **every** field gets a starting value. |
| 4 | Write each method, then run the example table through your code by hand. |
| 5 | Look for values that must be computed (not stored), counts that must persist, and early returns. |

> 🔑 **Key Concept:** Graders check behavior against the example table. If your class produces every value in the table and keeps its data private, it earns the points, whatever names you choose for the private fields.
      `
    },
    {
      id: 'csawriti6-mc1',
      type: 'multiple-choice' as const,
      content: `
**Practice Set 1: Tracing Objects** 🎯

\`\`\`java
public class Tally {
    private int count;
    private int limit;

    public Tally(int lim) {
        limit = lim;
    }

    public boolean click() {
        if (count < limit) {
            count++;
            return true;
        }
        return false;
    }

    public int getCount() {
        return count;
    }
}
\`\`\`
      `,
      exercise: {
        questions: [
          {
            question: 'What is printed by: Tally t = new Tally(2); t.click(); t.click(); System.out.println(t.click() + " " + t.getCount());',
            options: [
              'false 2',
              'true 3',
              'false 3',
              'true 2'
            ],
            correctAnswer: 0,
            explanation: 'count starts at the default 0 and the first two clicks raise it to 2. The third click finds count < limit false, so it returns false and count stays 2.'
          },
          {
            question: 'What is printed by: Tally a = new Tally(5); Tally b = a; b.click(); a.click(); System.out.println(a.getCount());',
            options: [
              '2',
              '1',
              '0',
              '5'
            ],
            correctAnswer: 0,
            explanation: 'b = a copies the reference, so a and b are aliases for one Tally. Both clicks act on the same object, so its count is 2.'
          },
          {
            question: 'Which change makes new Tally(3) start with a count of 1?',
            options: [
              'Add count = 1; to the constructor body',
              'Change the test count < limit to count <= limit',
              'Declare count as a local variable in click',
              'Add limit++; as the constructor\'s last line'
            ],
            correctAnswer: 0,
            explanation: 'The constructor sets the initial state, and assigning count there replaces its default of 0. Making count local would reset it on every call, and changing limit or the test changes how many clicks are allowed, not where count starts.'
          }
        ]
      }
    },
    {
      id: 'csawriti6-frq',
      type: 'text' as const,
      content: `
## FRQ-Style Task — RewardCard

**Prompt.** Write the complete \`RewardCard\` class. A card belongs to an owner and holds reward points.

- The constructor takes the owner's name and a starting number of points. A negative starting value is replaced by 0.
- \`earn(int spent)\` adds one point for every full 10 units spent. **Every third call** to \`earn\` (the 3rd, 6th, 9th, ...) adds double points.
- \`redeem(int pts)\` removes pts points and returns true if the card has at least pts points; otherwise it changes nothing and returns false.
- \`getPoints()\` returns the current points.
- \`toString()\` returns the owner, a colon and space, the points, and " pts".

| Statement | Returns / prints | Points after |
|---|---|---|
| \`RewardCard c = new RewardCard("Kai", -5);\` | | 0 |
| \`c.earn(47);\` | | 4 |
| \`c.earn(30);\` | | 7 |
| \`c.earn(25);\` | (3rd call: double) | 11 |
| \`c.redeem(12)\` | \`false\` | 11 |
| \`c.redeem(10)\` | \`true\` | 1 |
| \`c.earn(9);\` | | 1 |
| \`System.out.println(c);\` | \`Kai: 1 pts\` | 1 |

### Plan Before You Write

- **Attributes:** the owner, the points, and the number of times \`earn\` has been called. The call count is not in any getter, but the "every third call" rule cannot work without it.
- **Per-call points:** \`spent / 10\` (int division drops the leftover units).

### Solution

\`\`\`java
public class RewardCard {
    private String owner;
    private int points;
    private int earnCalls;

    public RewardCard(String name, int start) {
        owner = name;
        if (start < 0) {
            points = 0;
        } else {
            points = start;
        }
        earnCalls = 0;
    }

    public void earn(int spent) {
        earnCalls++;
        int add = spent / 10;
        if (earnCalls % 3 == 0) {
            add *= 2;
        }
        points += add;
    }

    public boolean redeem(int pts) {
        if (pts <= points) {
            points -= pts;
            return true;
        }
        return false;
    }

    public int getPoints() {
        return points;
    }

    public String toString() {
        return owner + ": " + points + " pts";
    }
}
\`\`\`

### What a Rubric Looks For

| Point | Earned by |
|---|---|
| Header and fields | \`public class RewardCard\` with **private** instance variables, including a call counter |
| Constructor | assigns every field; replaces a negative start with 0 |
| earn | increments the counter on every call, uses int division, doubles on calls divisible by 3 |
| redeem | tests before changing, subtracts only on success, returns the correct boolean on both paths |
| getPoints / toString | return (not print) the required values in the required format |
      `
    },
    {
      id: 'csawriti6-mc2',
      type: 'multiple-choice' as const,
      content: `
**Practice Set 2: Reasoning About RewardCard** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A student declares int earnCalls = 0; as the first line inside earn instead of as a field. For the example table, how many points does the card hold after c.earn(25)?',
            options: [
              '9',
              '11',
              '7',
              '13'
            ],
            correctAnswer: 0,
            explanation: 'A local counter starts over at 0 on every call, becomes 1, and is never divisible by 3, so no call is doubled. The third call adds just 2, giving 4 + 3 + 2 = 9 instead of 11.'
          },
          {
            question: 'A student puts the test if (earnCalls % 3 == 0) before the statement earnCalls++. For the example table, how many points does the card hold after c.earn(25)?',
            options: [
              '13',
              '11',
              '9',
              '15'
            ],
            correctAnswer: 0,
            explanation: 'On the first call the counter is still 0, and 0 % 3 is 0, so earn(47) is doubled to 8. earn(30) adds 3 and earn(25) is no longer doubled, adding 2, for 13.'
          }
        ]
      }
    },
    {
      id: 'csawriti6-input',
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

Start each question from a new card: \`RewardCard d = new RewardCard("Mo", 20);\`

1) After \`d.earn(99); d.earn(99); d.earn(99);\`, what does \`d.getPoints()\` return? _______

2) After \`d.redeem(20)\` returns true, what does \`d.getPoints()\` return? _______

3) What does \`d.earn(5)\` add to the points on the first call? _______
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['56', '0', '0'],
        hint1: 'Each 99 is worth 9 points, and the third call is doubled.',
        hint2: 'The card had exactly 20 points.',
        hint3: 'Int division of 5 by 10.',
        explanation: 'The three calls add 9, 9 and 18 to the starting 20, for 56. Redeeming exactly the full balance succeeds and leaves 0. 5 / 10 is 0 in int division, so a purchase under 10 units earns nothing.'
      }
    },
    {
      id: 'csawriti6-deductions',
      type: 'text' as const,
      content: `
## Common FRQ 2 Deductions

| Mistake | Why it costs points |
|---|---|
| a field declared \`public\` or with no access modifier | breaks encapsulation |
| a field that must persist declared as a local variable | the value resets on every call |
| constructor parameter with the same name as a field and no \`this.\` | the field is never assigned |
| a method header that changes the return type or parameter types | it no longer matches the calls in the table |
| printing inside a method that should return | the caller receives nothing |
| changing state before checking a condition (redeem subtracts, then tests) | a failed call still changes the object |
| \`toString\` text that differs from the example by a space or colon | the String must match exactly |

> 🎯 **AP Connection:** After writing the class, run the example table through it line by line, the way the worked examples in this lesson do. Most lost points show up as a single row whose value does not match.
      `
    }
  ]
}
