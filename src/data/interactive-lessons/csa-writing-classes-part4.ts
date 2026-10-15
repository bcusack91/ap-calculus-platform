export const csaWritingClassesPart4Data = {
  topicSlug: 'csa-writing-classes',
  sections: [
    {
      id: 'csawriti4-intro',
      type: 'text' as const,
      content: `
# ✍️ Writing Classes

**Part 4 of 7 — Writing Methods: Return Values, Parameters, and State Changes**

---

Methods are the behaviors of a class (CED Topic 3.5). Part 1 named the two everyday kinds, accessors and mutators. This part covers the rules a method header and body must follow, how a method's parameters relate to the values the caller passes, and how to trace an object through a sequence of calls.

| In this part |
|---|
| void and non-void methods, and what return does |
| Methods that compute from state, and mutators that validate |
| Primitive parameters are copies |
| Tracing state across several calls |
      `
    },
    {
      id: 'csawriti4-headers',
      type: 'text' as const,
      content: `
## Anatomy of a Method Header

\`\`\`java
public double getAverage()
public void addScore(int s)
public boolean withdraw(int amount)
\`\`\`

| Part | Meaning |
|---|---|
| access modifier | \`public\` for the class's interface, \`private\` for helpers |
| return type | \`void\` if the method returns nothing; otherwise the type of the single value it returns |
| name | lowercase first word, describes the behavior |
| parameter list | type and name of each input, or \`()\` for none |

### Rules for return

- A **non-void** method must return a value of its return type on **every** path. If any path can reach the closing brace without a return, the method does not compile.
- A \`return\` statement ends the method immediately, even inside a loop or an if. Statements written directly after a \`return\` in the same block are unreachable and do not compile.
- The returned value must fit the return type. An \`int\` can be returned from a \`double\` method (it widens), but a \`double\` cannot be returned from an \`int\` method without a cast.
- A \`void\` method may use \`return;\` with no value to stop early.

\`\`\`java
public class ScoreKeeper {
    private int total;
    private int count;
    private int best;

    public ScoreKeeper() {
        total = 0;
        count = 0;
        best = 0;
    }

    public void addScore(int s) {
        if (s >= 0 && s <= 100) {
            total += s;
            count++;
            if (s > best) {
                best = s;
            }
        }
    }

    public double getAverage() {
        if (count == 0) {
            return 0.0;
        }
        return (double) total / count;
    }

    public int getBest() {
        return best;
    }
}
\`\`\`

\`addScore\` is a **mutator** that validates: scores outside 0 to 100 change nothing. \`getAverage\` is an **accessor that computes** a value from the state rather than returning a stored field, and it guards against dividing by zero.
      `
    },
    {
      id: 'csawriti4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which replacement body for getAverage does NOT compile?',
            options: [
              'if (count > 0) { return (double) total / count; }',
              'if (count == 0) { return 0; } return (double) total / count;',
              'double avg = 0.0; if (count > 0) { avg = (double) total / count; } return avg;',
              'return (double) total / count;'
            ],
            correctAnswer: 0,
            explanation: 'When count is 0 the if is skipped and the method reaches its end with no return, so the compiler rejects it. Returning the int 0 from a double method is fine because it widens to 0.0, and the one-line version compiles even though it divides by zero when count is 0.'
          },
          {
            question: 'A ScoreKeeper receives addScore(80), then addScore(95). What does getAverage() return if its last line is changed to return total / count;?',
            options: [
              '87.0',
              '87.5',
              '88.0',
              '87'
            ],
            correctAnswer: 0,
            explanation: 'total / count divides two ints, giving 87, and the double return type then widens it to 87.0. The cast to double before dividing is what keeps the .5.'
          },
          {
            question: 'In the original class, what is the effect of addScore(105)?',
            options: [
              'Nothing in the object changes',
              'count goes up but total does not',
              'best is set to 105 and nothing else',
              'total grows by 105 but best stays'
            ],
            correctAnswer: 0,
            explanation: 'The whole body sits inside the range test, and 105 fails s <= 100, so total, count and best all stay the same.'
          }
        ]
      }
    },
    {
      id: 'csawriti4-params',
      type: 'text' as const,
      content: `
## Primitive Parameters Are Copies

When a method is called, each **parameter** (the formal parameter in the header) is initialized with a copy of the matching **argument** (the actual value the caller passes). For primitive types, changing the parameter inside the method has no effect on the caller's variable.

\`\`\`java
// inside ScoreKeeper
public void addBonus(int points) {
    points = points * 2;
    total += points;
}
\`\`\`

\`\`\`java
ScoreKeeper k = new ScoreKeeper();
int b = 5;
k.addBonus(b);
System.out.println(b);   // prints 5
\`\`\`

| Moment | caller's b | method's points | k's total |
|---|---|---|---|
| call begins | 5 | 5 (a copy) | 0 |
| after \`points = points * 2;\` | 5 | 10 | 0 |
| after \`total += points;\` | 5 | 10 | 10 |
| method ends | 5 | (gone) | 10 |

The method changed the object's field \`total\`, which lasts, and its own copy \`points\`, which disappears when the method returns. The caller's \`b\` was never touched.

> 🔑 **Key Concept:** A method can change the object it was called on (through its instance variables). It cannot change a caller's primitive variable through a parameter. To send a computed value back, **return** it.
      `
    },
    {
      id: 'csawriti4-types',
      type: 'dropdown-select' as const,
      content: `
**Choose the Header** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'A method that reports whether the best score is at least 90 should have return type ___',
            options: ['boolean', 'void', 'int', 'String']
          },
          {
            label: 'If getBest() were declared double and kept the body return best;, the method would ___',
            options: ['compile and return the value as a double', 'fail to compile because best is an int', 'compile and return the value as an int', 'fail to compile without a cast to double']
          },
          {
            label: 'If getAverage() were declared int and kept the line return (double) total / count;, the method would ___',
            options: ['fail to compile', 'truncate the average', 'round the average', 'return 0 every time']
          }
        ],
        correctAnswers: ['boolean', 'compile and return the value as a double', 'fail to compile'],
        hint1: 'The answer is yes or no.',
        hint2: 'An int value can be widened to a double automatically.',
        hint3: 'Java never narrows a double to an int without an explicit cast.',
        explanation: 'A yes-or-no question returns boolean. An int return value widens automatically to a double return type, but a double expression cannot be returned from an int method, so that version is a compile error rather than a silent truncation.'
      }
    },
    {
      id: 'csawriti4-trace',
      type: 'text' as const,
      content: `
## Worked Example: Tracing State Across Calls

\`\`\`java
public class Wallet {
    private int balance;
    private int failed;

    public Wallet(int start) {
        balance = start;
        failed = 0;
    }

    public void deposit(int amount) {
        if (amount > 0) {
            balance += amount;
        }
    }

    public boolean withdraw(int amount) {
        if (amount > 0 && amount <= balance) {
            balance -= amount;
            return true;
        }
        failed++;
        return false;
    }

    public String toString() {
        return balance + " (" + failed + " failed)";
    }
}
\`\`\`

\`\`\`java
Wallet w = new Wallet(50);
boolean a = w.withdraw(20);
boolean b = w.withdraw(40);
w.deposit(-10);
w.deposit(15);
boolean c = w.withdraw(45);
System.out.println(a + " " + b + " " + c + " " + w);
\`\`\`

**Step 1 — One row per call.** Track every field after each statement.

| Statement | Returns | balance | failed |
|---|---|---|---|
| \`new Wallet(50)\` | (a reference) | 50 | 0 |
| \`w.withdraw(20)\` | true | 30 | 0 |
| \`w.withdraw(40)\` | false (40 > 30) | 30 | 1 |
| \`w.deposit(-10)\` | (void) | 30 | 1 |
| \`w.deposit(15)\` | (void) | 45 | 1 |
| \`w.withdraw(45)\` | true (45 <= 45) | 0 | 1 |

**Step 2 — Note the early return.** When \`withdraw\` succeeds, \`return true;\` ends the method, so \`failed++\` never runs on that path. The failure lines run only when the if test is false.

**Step 3 — Output.** Concatenating \`w\` calls its \`toString()\`, so the line printed is \`true false true 0 (1 failed)\`.
      `
    },
    {
      id: 'csawriti4-applied',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application** 🎯

Use the Wallet class above.
      `,
      exercise: {
        questions: [
          {
            question: 'What is printed by: Wallet v = new Wallet(10); v.withdraw(10); v.withdraw(1); v.withdraw(0); System.out.println(v);',
            options: [
              '0 (2 failed)',
              '0 (1 failed)',
              '-1 (1 failed)',
              '0 (3 failed)'
            ],
            correctAnswer: 0,
            explanation: 'The first withdrawal empties the wallet. Then 1 is more than the balance of 0 and 0 fails the amount > 0 test, so both count as failures.'
          },
          {
            question: 'A student moves failed++; so it is the first statement in withdraw. How does the behavior change?',
            options: [
              'Successful calls are now counted as failures too',
              'Nothing changes, because the successful path returns first',
              'Every failed call is now counted twice instead of once',
              'The method no longer compiles, because return must come first'
            ],
            correctAnswer: 0,
            explanation: 'A statement before the if runs on every call, so successful withdrawals are now counted too. The early return only skips statements that come after it.'
          }
        ]
      }
    }
  ]
}
