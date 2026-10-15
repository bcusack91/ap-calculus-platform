export const csaClassDesignPart6Data = {
  topicSlug: 'csa-class-design',
  sections: [
    {
      id: 'csaclass6-intro',
      type: 'text' as const,
      content: `
# 🏛️ Class Design

**Part 6 of 7 — AP-Style Practice**

---

Free-response question 2 (Class Design) can include a class variable, private helper methods, and constructor parameters that share a name with fields. Multiple-choice questions test static state, scope and \`this\` with short traces. This part practices both with the ideas of Parts 1–5.

### How to Attack a Class-Design Question

| Step | Do this |
|---|---|
| 1 | Mark every variable as **static** (one copy) or **instance** (one per object) before tracing. |
| 2 | At each line, decide which variable a name refers to: a local or parameter wins over a field of the same name. |
| 3 | For each method call, write down what \`this\` and each parameter refer to. |
| 4 | For a static method, check that it uses no instance field by its bare name and never uses \`this\`. |
| 5 | Split a long method into private helpers that each do one job. |

> 🔑 **Key Concept:** A static counter that assigns IDs must be read into an instance variable **before** it is advanced, and it must be static, or every object gets the same number.
      `
    },
    {
      id: 'csaclass6-mc1',
      type: 'multiple-choice' as const,
      content: `
**Practice Set 1: Tracing** 🎯

\`\`\`java
public class Lamp {
    private static int onCount = 0;
    private boolean on;

    public void toggle() {
        on = !on;
        if (on) {
            onCount++;
        } else {
            onCount--;
        }
    }

    public static int getOnCount() {
        return onCount;
    }
}
\`\`\`
      `,
      exercise: {
        questions: [
          {
            question: 'What is printed by: Lamp x = new Lamp(); Lamp y = new Lamp(); x.toggle(); y.toggle(); x.toggle(); y.toggle(); y.toggle(); System.out.println(Lamp.getOnCount());',
            options: [
              '1',
              '0',
              '2',
              '3'
            ],
            correctAnswer: 0,
            explanation: 'x ends off after two toggles and y ends on after three, and the shared count tracks exactly the lamps that are on. So the count is 1.'
          },
          {
            question: 'A student adds the method public static boolean isOn() { return on; } to Lamp. What happens?',
            options: [
              'The class no longer compiles',
              'It returns the most recent lamp\'s state',
              'It returns false until a lamp is toggled',
              'It returns true if any lamp is on'
            ],
            correctAnswer: 0,
            explanation: 'on is an instance variable, and a static method has no current object, so the bare name on has no meaning. The compiler rejects it.'
          },
          {
            question: 'Which change lets client code read whether one particular lamp is on?',
            options: [
              'Add public boolean isOn() { return on; }',
              'Make the field on public and also static',
              'Add public static boolean isOn() { return this.on; }',
              'Add public boolean anyOn() { return onCount > 0; }'
            ],
            correctAnswer: 0,
            explanation: 'An instance method runs on one lamp, so on refers to that lamp\'s own field. A public static field would leave one shared value, anyOn reports on all lamps together, and this cannot appear in a static method.'
          }
        ]
      }
    },
    {
      id: 'csaclass6-frq',
      type: 'text' as const,
      content: `
## FRQ-Style Task — Locker

**Prompt.** Write the complete \`Locker\` class.

- Lockers are numbered in the order they are created, starting at 1. \`getId()\` returns a locker's number, and the static method \`getLockersMade()\` returns how many Lockers have been created.
- The constructor takes the locker's combination code (an int).
- \`open(int attempt)\` returns true and clears the count of consecutive wrong attempts if attempt matches the code and the locker is not locked out. Otherwise it returns false; a wrong attempt adds 1 to the count of consecutive wrong attempts.
- A locker is **locked out** once it has 3 consecutive wrong attempts. While locked out, \`open\` returns false even for the correct code.
- \`reset()\` clears the count of wrong attempts.

| Statement | Returns |
|---|---|
| \`Locker a = new Locker(1234);\` | |
| \`Locker b = new Locker(4321);\` | |
| \`b.getId()\` | \`2\` |
| \`a.open(1111)\` | \`false\` (1 wrong) |
| \`a.open(1234)\` | \`true\` (count cleared) |
| \`a.open(1)\` then \`a.open(2)\` then \`a.open(3)\` | \`false\`, \`false\`, \`false\` (locked out) |
| \`a.open(1234)\` | \`false\` (locked out) |
| \`a.reset();\` then \`a.open(1234)\` | \`true\` |
| \`Locker.getLockersMade()\` | \`2\` |

### Solution

\`\`\`java
public class Locker {
    private static int made = 0;

    private int id;
    private int code;
    private int wrong;

    public Locker(int code) {
        made++;
        id = made;
        this.code = code;
        wrong = 0;
    }

    public boolean open(int attempt) {
        if (isLockedOut()) {
            return false;
        }
        if (attempt == code) {
            wrong = 0;
            return true;
        }
        wrong++;
        return false;
    }

    public void reset() {
        wrong = 0;
    }

    public int getId() {
        return id;
    }

    public static int getLockersMade() {
        return made;
    }

    private boolean isLockedOut() {
        return wrong >= 3;
    }
}
\`\`\`

- **made** is static: one count for the whole class. **id**, **code** and **wrong** are instance variables, one per locker.
- The constructor's parameter is named \`code\`, the same as the field, so \`this.code = code;\` is required.
- The private helper \`isLockedOut\` names the rule from the specification, and \`open\` checks it first.

### What a Rubric Looks For

| Point | Earned by |
|---|---|
| Fields | private instance fields for id, code and wrong count; a **static** creation count |
| Constructor | updates the static count and assigns this locker's id from it; stores the code in the field |
| open | refuses while locked out; clears the count on success; adds 1 on a wrong attempt; correct boolean on every path |
| reset / getId | change or return the right instance field |
| getLockersMade | static, returns the shared count |
      `
    },
    {
      id: 'csaclass6-mc2',
      type: 'multiple-choice' as const,
      content: `
**Practice Set 2: Reasoning About Locker** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A student writes code = code; in the constructor instead of this.code = code;. What does new Locker(55).open(55) return?',
            options: [
              'false',
              'true',
              '55',
              '0'
            ],
            correctAnswer: 0,
            explanation: 'The parameter is assigned to itself, so the field code keeps its default of 0. The attempt 55 does not match 0, so open returns false.'
          },
          {
            question: 'A student declares made as an instance variable and makes getLockersMade an instance method so the class compiles. What does b.getId() return in the example table?',
            options: [
              '1',
              '2',
              '0',
              '3'
            ],
            correctAnswer: 0,
            explanation: 'Each Locker then has its own made, starting at 0, so every locker increments its own copy to 1 and takes that as its id. That is why an ID counter must be static.'
          },
          {
            question: 'In open, the lockout test is moved below the code test, so a correct code is checked first. Which row of the table changes?',
            options: [
              'a.open(1234) right after three wrong tries',
              'a.open(1111) as the very first attempt',
              'a.open(1234) right after the reset',
              'a.open(3) as the third wrong attempt in a row'
            ],
            correctAnswer: 0,
            explanation: 'With the code checked first, the correct code opens the locker even while it is locked out, so that row returns true instead of false. Rows where the locker is not locked out behave the same either way.'
          }
        ]
      }
    },
    {
      id: 'csaclass6-deductions',
      type: 'text' as const,
      content: `
## Common Deductions on Static, Scope and this

| Mistake | Why it costs points |
|---|---|
| an ID counter declared as an instance variable | every object gets the same ID |
| the counter advanced after a failed condition or in a getter | the count no longer matches the objects created |
| a static method that names an instance field | does not compile |
| \`this\` inside a static method | does not compile |
| a constructor parameter that shadows a field, with no \`this.\` | the field keeps its default value |
| a field that must persist redeclared as a local in a method | the change is lost when the method ends |
| a helper method that should be private declared public | exposes implementation details |

> 🎯 **AP Connection:** Read the table of example calls for clues about what is shared. A value that counts or numbers *all* objects of the class must be static; a value that differs from object to object must be an instance variable.
      `
    }
  ]
}
