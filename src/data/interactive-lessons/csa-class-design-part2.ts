export const csaClassDesignPart2Data = {
  topicSlug: 'csa-class-design',
  sections: [
    {
      id: 'csaclass2-intro',
      type: 'text' as const,
      content: `
# 🏛️ Class Design

**Part 2 of 7 — Static Variables and Methods in Depth**

---

Part 1 compared static and instance members in a table. This part traces them (CED Topic 3.7): how one shared variable changes as objects are created and used, how constants work, and exactly what a static method may refer to.

| In this part |
|---|
| One shared copy: tracing static and instance state together |
| \`static final\` constants |
| What a static method can and cannot reference |
| Worked example: a team total shared by every player |
      `
    },
    {
      id: 'csaclass2-shared',
      type: 'text' as const,
      content: `
## One Copy for the Whole Class

A **class variable** (declared \`static\`) belongs to the class. There is exactly one copy, no matter how many objects exist, and every object reads and writes that same copy. An **instance variable** gives every object its own copy.

\`\`\`java
public class Ticket {
    public static final int LIMIT = 500;
    private static int nextNumber = 100;
    private static int issued = 0;

    private int number;

    public Ticket() {
        number = nextNumber;
        nextNumber++;
        issued++;
    }

    public int getNumber() {
        return number;
    }

    public static int getIssued() {
        return issued;
    }
}
\`\`\`

\`\`\`java
Ticket a = new Ticket();
Ticket b = new Ticket();
Ticket c = new Ticket();
\`\`\`

| After | nextNumber (shared) | issued (shared) | a.number | b.number | c.number |
|---|---|---|---|---|---|
| class is loaded | 100 | 0 | | | |
| \`new Ticket()\` for a | 101 | 1 | 100 | | |
| \`new Ticket()\` for b | 102 | 2 | 100 | 101 | |
| \`new Ticket()\` for c | 103 | 3 | 100 | 101 | 102 |

- The initializers \`= 100\` and \`= 0\` on the static variables run **once**, when the class is loaded, not on every \`new\`.
- Each constructor call copies the shared counter into the new object's own \`number\`, then advances the counter. This is the standard way to give objects unique IDs.
- \`Ticket.getIssued()\` returns 3. Client code calls a static method with the **class name**.

### Constants

\`LIMIT\` is \`public static final\`: \`static\` because one value serves the whole class, and \`final\` because it can never be reassigned. Any assignment such as \`Ticket.LIMIT = 600;\` is a compile error, anywhere. Constants are written in capitals by convention and are often public, since nobody can change them.
      `
    },
    {
      id: 'csaclass2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯

Use the Ticket class above.
      `,
      exercise: {
        questions: [
          {
            question: 'A student deletes the word static from the declaration of nextNumber. After the three tickets above are created, what does c.getNumber() return?',
            options: [
              '100',
              '102',
              '103',
              '101'
            ],
            correctAnswer: 0,
            explanation: 'As an instance variable, nextNumber is created at 100 inside every new Ticket, so each ticket copies 100 and then advances only its own counter. The shared issued count still reaches 3.'
          },
          {
            question: 'Which statement in a client class does NOT compile?',
            options: [
              'Ticket.LIMIT = 600;',
              'int n = Ticket.getIssued();',
              'int x = Ticket.LIMIT + 1;',
              'Ticket t = new Ticket();'
            ],
            correctAnswer: 0,
            explanation: 'A final variable cannot be reassigned. Reading the public constant, calling the public static method and constructing a Ticket are all legal from another class.'
          },
          {
            question: 'What is the value of a.getNumber() + b.getNumber() for the tickets above?',
            options: [
              '201',
              '200',
              '203',
              '202'
            ],
            correctAnswer: 0,
            explanation: 'a was given 100 and b was given 101, because the shared counter advanced after each constructor call. Their sum is 201.'
          }
        ]
      }
    },
    {
      id: 'csaclass2-rules',
      type: 'text' as const,
      content: `
## What a Static Method Can Reference

A static method is called on the class, not on an object, so inside it there is **no current object** and no \`this\`.

| Inside a static method of class Ticket | Allowed? |
|---|---|
| static variables and static methods, by name (\`issued\`, \`getIssued()\`) | yes |
| its own parameters and local variables | yes |
| an instance variable by its bare name (\`number\`) | **no** — whose number? |
| an instance method by its bare name (\`getNumber()\`) | **no** — called on which object? |
| the keyword \`this\` | **no** |
| an instance variable or method through an object reference (\`t.number\`, \`t.getNumber()\`) | yes |

\`\`\`java
// inside Ticket
public static int later(Ticket t1, Ticket t2) {
    if (t1.number > t2.number) {   // OK: instance data through references
        return t1.number;
    }
    return t2.number;
}

public static int lastNumber() {
    return number;                  // does NOT compile: no current object
}
\`\`\`

An **instance** method has no such limits: it can use instance variables, static variables, instance methods and static methods, because it always runs on some object and can also see everything the class shares.

> 🔑 **Key Concept:** Make a method static when its job does not depend on any one object's state, such as reporting a class-wide count or doing a calculation from its parameters alone. If it needs one object's fields, make it an instance method, or pass the object in as a parameter.
      `
    },
    {
      id: 'csaclass2-static-check',
      type: 'dropdown-select' as const,
      content: `
**Static or Not?** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Inside a static method of Ticket, the statement return issued; ___',
            options: ['compiles', 'does not compile', 'compiles only with this.issued', 'compiles only with a Ticket parameter']
          },
          {
            label: 'Inside a static method of Ticket with a Ticket parameter t, the expression t.getNumber() ___',
            options: ['compiles', 'does not compile', 'needs the word static added', 'returns the shared counter']
          },
          {
            label: 'Inside an instance method of Ticket, the statement issued++; ___',
            options: ['changes the one shared count', 'changes this object\'s own count', 'does not compile', 'changes only a local copy']
          }
        ],
        correctAnswers: ['compiles', 'compiles', 'changes the one shared count'],
        hint1: 'issued is a static variable of the same class.',
        hint2: 'An object reference supplies the object that the static method itself lacks.',
        hint3: 'Instance methods can see static variables too, and there is only one copy.',
        explanation: 'A static method may name static variables directly, and may reach instance members through an object reference such as t. An instance method can also use static variables, and since only one copy exists, issued++ changes the count every Ticket sees.'
      }
    },
    {
      id: 'csaclass2-worked',
      type: 'text' as const,
      content: `
## Worked Example: A Shared Team Total

\`\`\`java
public class Player {
    private static int playerCount = 0;
    private static int teamPoints = 0;

    private String name;
    private int points;

    public Player(String n) {
        name = n;
        points = 0;
        playerCount++;
    }

    public void score(int p) {
        points += p;
        teamPoints += p;
    }

    public double share() {
        return (double) points / teamPoints;
    }

    public static double average() {
        return (double) teamPoints / playerCount;
    }
}
\`\`\`

\`\`\`java
Player a = new Player("Ana");
Player b = new Player("Bo");
a.score(6);
b.score(4);
a.score(10);
\`\`\`

**Step 1 — Separate the two kinds of state.** \`playerCount\` and \`teamPoints\` have one copy each. \`name\` and \`points\` exist once per Player.

**Step 2 — Trace.**

| Statement | playerCount | teamPoints | a.points | b.points |
|---|---|---|---|---|
| \`new Player("Ana")\` | 1 | 0 | 0 | |
| \`new Player("Bo")\` | 2 | 0 | 0 | 0 |
| \`a.score(6)\` | 2 | 6 | 6 | 0 |
| \`b.score(4)\` | 2 | 10 | 6 | 4 |
| \`a.score(10)\` | 2 | 20 | 16 | 4 |

**Step 3 — Evaluate.** \`a.share()\` is 16 / 20 = 0.8 and \`b.share()\` is 4 / 20 = 0.2. \`Player.average()\` is 20 / 2 = 10.0.

**Step 4 — Check the method kinds.** \`share\` must be an instance method because it reads one player's \`points\`. \`average\` uses only class variables, so it is static and is called as \`Player.average()\`.
      `
    },
    {
      id: 'csaclass2-applied',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application** 🎯

Use the Player trace above.
      `,
      exercise: {
        questions: [
          {
            question: 'A third Player c = new Player("Cy") is created after the trace and never scores. Which value changes?',
            options: [
              'the class average',
              'a\'s share',
              'b\'s share',
              'a\'s points'
            ],
            correctAnswer: 0,
            explanation: 'The constructor adds 1 to playerCount, so the average becomes 20 / 3. teamPoints and each player\'s points are unchanged, so both shares stay the same.'
          },
          {
            question: 'Why could share NOT be declared static?',
            options: [
              'It reads points, which each Player object holds its own copy of',
              'It returns a double, but static methods may only return int values',
              'It is called by client code, which may only call instance methods',
              'It divides by teamPoints, which a static method is unable to read'
            ],
            correctAnswer: 0,
            explanation: 'A static method has no current object, so the bare name points would have no meaning. Static methods can return any type, may be called by clients, and can read static variables such as teamPoints.'
          }
        ]
      }
    }
  ]
}
