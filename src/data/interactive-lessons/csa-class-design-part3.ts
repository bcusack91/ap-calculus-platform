export const csaClassDesignPart3Data = {
  topicSlug: 'csa-class-design',
  sections: [
    {
      id: 'csaclass3-intro',
      type: 'text' as const,
      content: `
# 🏛️ Class Design

**Part 3 of 7 — Scope, Shadowing, and Access**

---

**Scope** is the part of a program where a name can be used (CED Topic 3.8). Part 1 listed the four kinds of variables. This part works through the rules that decide whether code compiles, which variable a name refers to when two share it, and who is allowed to use a private member.

| In this part |
|---|
| Where each kind of variable can be used |
| Shadowing: when a local name hides an instance variable |
| The two classic constructor and method bugs |
| Access: inside the class vs client code |
      `
    },
    {
      id: 'csaclass3-scope',
      type: 'text' as const,
      content: `
## Where a Name Can Be Used

| Kind of variable | Scope begins | Scope ends |
|---|---|---|
| instance or class variable | anywhere in the class | the end of the class |
| parameter | the start of the method or constructor body | the end of that body |
| local variable | its declaration | the closing brace of the block that contains it |
| for-loop header variable | the loop header | the end of the loop |

\`\`\`java
public int sumSquares(int n) {
    int total = 0;
    for (int i = 1; i <= n; i++) {
        int sq = i * i;
        total += sq;
    }
    return total;        // total is still in scope here
}
\`\`\`

| A statement placed... | Compiles? | Why |
|---|---|---|
| \`return sq;\` after the loop | no | sq's block (the loop body) has ended |
| \`System.out.println(i);\` after the loop | no | i exists only inside the loop |
| \`int total = 5;\` inside the loop body | no | a local variable named total is still in scope |
| \`int sq = 0;\` after the loop | yes | the earlier sq is out of scope, so the name is free |
| \`private int count = 0;\` inside the method | no | access modifiers are not allowed on local variables |

Local variables, including parameters, exist only while their method runs. Each call gets fresh copies, which is why a value that must survive between calls has to be an instance variable.
      `
    },
    {
      id: 'csaclass3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯

\`\`\`java
public int countBig(int limit) {
    int count = 0;
    for (int k = 1; k <= 5; k++) {
        int value = k * limit;
        if (value > 10) {
            int extra = value - 10;
            count += extra;
        }
    }
    return count;
}
\`\`\`
      `,
      exercise: {
        questions: [
          {
            question: 'What does countBig(4) return?',
            options: [
              '18',
              '30',
              '3',
              '22'
            ],
            correctAnswer: 0,
            explanation: 'The values are 4, 8, 12, 16 and 20. The three over 10 add their extras 2, 6 and 10, for a count of 18.'
          },
          {
            question: 'Which statement compiles if it is inserted just before return count;?',
            options: [
              'int k = 0;',
              'count = value;',
              'count += extra;',
              'int limit = 2;'
            ],
            correctAnswer: 0,
            explanation: 'The loop variable k went out of scope when the loop ended, so the name can be declared again. value and extra are out of scope, and limit is a parameter that is still in scope, so redeclaring it is an error.'
          }
        ]
      }
    },
    {
      id: 'csaclass3-shadow',
      type: 'text' as const,
      content: `
## Shadowing: The Local Name Wins

When a local variable or parameter has the **same name** as an instance variable, the bare name refers to the **local** one everywhere in its scope. The instance variable is still there, but it is hidden, or **shadowed**. Only \`this.name\` reaches it.

\`\`\`java
public class Counter {
    private int count;

    public Counter(int count) {
        count = count;          // Bug 1
    }

    public void reset() {
        int count = 0;          // Bug 2
    }

    public void add(int n) {
        count += n;             // no local named count: this is the field
    }

    public int getCount() {
        return count;
    }
}
\`\`\`

## Worked Example: Tracing the Two Bugs

\`\`\`java
Counter c = new Counter(5);
c.add(3);
c.reset();
System.out.println(c.getCount());
\`\`\`

**Step 1 — Constructor.** Inside the constructor, \`count\` means the parameter. \`count = count;\` copies the parameter into itself, and the field keeps its default value of 0. It compiles, which is what makes the bug dangerous.

**Step 2 — add(3).** No local variable named count exists in \`add\`, so \`count\` is the field, which becomes 3.

**Step 3 — reset().** \`int count = 0;\` declares a **new local variable** that happens to share the field's name. The local is set to 0 and vanishes when the method ends. The field is untouched.

**Step 4 — Output.** \`3\`. The intended answer was 0, since a reset counter should read 0.

| Bug | Fix |
|---|---|
| \`count = count;\` in a constructor | \`this.count = count;\` or rename the parameter (\`int start\`) |
| \`int count = 0;\` in a method meant to change the field | remove the type: \`count = 0;\` |

> 🎯 **AP Connection:** Both bugs compile, so the exam tests them with "what is printed" questions. Whenever a name appears both as a field and as a parameter or local, ask which one is in scope at that line.
      `
    },
    {
      id: 'csaclass3-shadow-check',
      type: 'dropdown-select' as const,
      content: `
**Which count?** 🔍

Use the Counter class above.
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Changing the constructor body to this.count = count; makes new Counter(5).getCount() return ___',
            options: ['5', '0', '10', 'null']
          },
          {
            label: 'With the original class, new Counter(9).getCount() returns ___',
            options: ['0', '9', '18', 'null']
          },
          {
            label: 'Changing reset to contain count = 0; with no type makes the original trace print ___',
            options: ['0', '3', '8', '5']
          }
        ],
        correctAnswers: ['5', '0', '0'],
        hint1: 'this.count names the field; the bare count still names the parameter.',
        hint2: 'The parameter is assigned to itself, so the field keeps its default.',
        hint3: 'Without a type, the statement assigns to an existing variable, and the only one in scope is the field.',
        explanation: 'this.count reaches the field, so it receives the parameter\'s 5. The original constructor leaves the field at its default of 0. Without the type, count = 0; assigns the field instead of declaring a local, so the counter really resets and prints 0.'
      }
    },
    {
      id: 'csaclass3-access',
      type: 'text' as const,
      content: `
## Access: Who May Use a Private Member?

Scope answers "is this name visible here?" Access answers "is this code allowed to use it?" \`private\` means **usable only by code written inside the same class**.

| Member | Code inside the class | Client code in another class |
|---|---|---|
| private instance variable | yes, by name or through any reference of this class | no |
| private method (helper) | yes | no |
| public method or constructor | yes | yes |
| public static final constant | yes | yes, as \`ClassName.NAME\` |

\`\`\`java
public class Grade {
    private int points;
    private int possible;

    public Grade(int pts, int poss) {
        points = pts;
        possible = poss;
    }

    public boolean passed() {
        return percent() >= 60;
    }

    private double percent() {
        return 100.0 * points / possible;
    }
}
\`\`\`

\`passed()\` calls the private helper \`percent()\`, which is fine because both are inside Grade. A client may call \`g.passed()\` but not \`g.percent()\`, and may not read \`g.points\`.

- \`new Grade(14, 20).passed()\` returns true: the helper computes 100.0 * 14 / 20 = 70.0.
- Writing \`100.0 * points\` first matters: \`100 * points / possible\` would use int division, which happens to give 70 here but gives 66 instead of 66.66... for 2 out of 3.
      `
    },
    {
      id: 'csaclass3-applied',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application** 🎯

Use the Grade class above. Each statement is written in a client class, with Grade g = new Grade(9, 12); already declared.
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement compiles?',
            options: [
              'boolean ok = g.passed();',
              'double p = g.percent();',
              'int n = g.points;',
              'g.possible = 20;'
            ],
            correctAnswer: 0,
            explanation: 'passed is public, so client code may call it. percent is a private helper and points and possible are private fields, so naming any of them outside Grade is a compile error.'
          },
          {
            question: 'What does g.passed() return?',
            options: [
              'true',
              'false',
              '75.0',
              '75'
            ],
            correctAnswer: 0,
            explanation: 'percent() computes 100.0 * 9 / 12, which is 75.0, and 75.0 >= 60 is true. passed returns a boolean, not the percentage itself.'
          }
        ]
      }
    }
  ]
}
