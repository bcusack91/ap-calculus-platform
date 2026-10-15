export const csaWritingClassesPart5Data = {
  topicSlug: 'csa-writing-classes',
  sections: [
    {
      id: 'csawriti5-intro',
      type: 'text' as const,
      content: `
# ✍️ Writing Classes

**Part 5 of 7 — Passing and Returning Object References**

---

Part 4 showed that a primitive parameter is a copy of the caller's value. Object parameters follow the same rule, but what gets copied is a **reference**, and that changes what a method can do to the caller's data (CED Topic 3.6).

| In this part |
|---|
| A reference parameter is an alias for the caller's object |
| Changing the object vs reassigning the parameter |
| Reaching the private data of another object of the same class |
| Returning references safely |
      `
    },
    {
      id: 'csawriti5-alias',
      type: 'text' as const,
      content: `
## A Copy of the Reference, Not a Copy of the Object

Use the mutable \`Point\` class from Part 3 (\`getX\`, \`getY\`, \`moveBy\`). A client class has two static methods:

\`\`\`java
public static void shift(Point q) {
    q.moveBy(1, 1);
}

public static void replace(Point q) {
    q = new Point(0, 0);
    q.moveBy(1, 1);
}
\`\`\`

\`\`\`java
Point p = new Point(4, 4);
shift(p);
replace(p);
System.out.println(p.getX() + ", " + p.getY());
\`\`\`

| Moment | p refers to | q refers to |
|---|---|---|
| \`shift(p)\` begins | Point (4, 4) | the **same** Point (4, 4) |
| after \`q.moveBy(1, 1)\` | that Point, now (5, 5) | the same Point (5, 5) |
| \`replace(p)\` begins | Point (5, 5) | the same Point (5, 5) |
| after \`q = new Point(0, 0)\` | still the Point (5, 5) | a **new** Point (0, 0) |
| after \`q.moveBy(1, 1)\` | still (5, 5) | the new Point, now (1, 1) |

The program prints \`5, 5\`.

- **Calling a mutator through the parameter** changes the one object both variables share, so the caller sees the change.
- **Assigning a new object to the parameter** only redirects the method's own copy of the reference. The caller's variable is untouched, and the new object is lost when the method ends.

> 🔑 **Key Concept:** Java always passes a copy of the argument. For an object, that copy is a reference, so the parameter and the argument are **aliases** until the parameter is reassigned. Good practice is to leave a mutable parameter unchanged unless the specification says to change it.
      `
    },
    {
      id: 'csawriti5-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯

\`\`\`java
public static void reset(Point a, Point b) {
    a.moveBy(-a.getX(), 0);
    b = a;
    b.moveBy(0, 10);
}
\`\`\`
\`\`\`java
Point s = new Point(3, 4);
Point t = new Point(6, 8);
reset(s, t);
\`\`\`
      `,
      exercise: {
        questions: [
          {
            question: 'After the call, what are the coordinates of s?',
            options: [
              '(0, 14)',
              '(0, 4)',
              '(3, 14)',
              '(3, 4)'
            ],
            correctAnswer: 0,
            explanation: 'The first statement moves s\'s object to x = 0. Then b is pointed at that same object, so moving b by 10 in y also moves s, giving (0, 14).'
          },
          {
            question: 'After the call, what are the coordinates of t?',
            options: [
              '(6, 8)',
              '(0, 14)',
              '(6, 18)',
              '(0, 8)'
            ],
            correctAnswer: 0,
            explanation: 'Reassigning b inside the method changes only the method\'s copy of the reference. The object t refers to was never sent a moveBy message, so it stays (6, 8).'
          }
        ]
      }
    },
    {
      id: 'csawriti5-sameclass',
      type: 'text' as const,
      content: `
## Private Data of Another Object of the Same Class

Access is decided by **class**, not by object. Code inside \`Account\` may use the private fields of *any* \`Account\` object it has a reference to, including a parameter.

\`\`\`java
public class Account {
    private String owner;
    private int balance;

    public Account(String name, int start) {
        owner = name;
        balance = start;
    }

    public boolean hasMoreThan(Account other) {
        return balance > other.balance;
    }

    public void transferTo(Account other, int amount) {
        if (amount > 0 && amount <= balance) {
            balance -= amount;
            other.balance += amount;
        }
    }

    public int getBalance() {
        return balance;
    }
}
\`\`\`

\`other.balance\` compiles **inside** Account because the parameter's type is the enclosing class. The same expression written in a client class, such as \`acct.balance\`, does not compile.

### Trace: Two Accounts, Then One

\`\`\`java
Account a = new Account("Ana", 100);
Account b = new Account("Ben", 40);
a.transferTo(b, 30);
b.transferTo(a, 80);
a.transferTo(a, 50);
\`\`\`

| Call | Inside the method | a's balance | b's balance |
|---|---|---|---|
| start | | 100 | 40 |
| \`a.transferTo(b, 30)\` | this is a, other is b | 70 | 70 |
| \`b.transferTo(a, 80)\` | 80 > 70, so nothing happens | 70 | 70 |
| \`a.transferTo(a, 50)\` | this and other are the **same** object | 70 | 70 |

In the last call, \`balance -= 50\` and then \`other.balance += 50\` both act on a, so the balance drops to 20 and comes straight back to 70.
      `
    },
    {
      id: 'csawriti5-compile',
      type: 'dropdown-select' as const,
      content: `
**Inside or Outside?** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Inside Account, the statement other.balance = 0; where other is an Account parameter ___',
            options: ['compiles', 'does not compile', 'compiles only if other is not null', 'compiles only in a constructor']
          },
          {
            label: 'In a separate client class, the expression acct.owner for an Account acct ___',
            options: ['does not compile', 'compiles', 'returns null', 'returns the owner']
          },
          {
            label: 'If a.transferTo(null, 10) is called when a has a balance of 70, the call ___',
            options: ['throws a NullPointerException', 'does nothing and returns normally', 'creates a new Account for other', 'does not compile']
          }
        ],
        correctAnswers: ['compiles', 'does not compile', 'throws a NullPointerException'],
        hint1: 'Private access is checked by the class the code is written in.',
        hint2: 'The client is not inside Account.',
        hint3: 'The amount passes the test, so other.balance is evaluated next.',
        explanation: 'Code inside Account may use the private fields of any Account, so the first statement compiles. A client class may not name a private field. With a null parameter, the if test passes, balance drops, and then other.balance throws a NullPointerException, because there is no object to update.'
      }
    },
    {
      id: 'csawriti5-returning',
      type: 'text' as const,
      content: `
## Returning References

When a method returns an object, it returns a **reference** to it, not a new copy. If that object is a private mutable field, the caller gets an alias to the inside of your object.

\`\`\`java
public class Robot {
    private Point home;

    public Robot(Point start) {
        home = new Point(start.getX(), start.getY());
    }

    public Point getHome() {
        return home;
    }

    public Point getHomeCopy() {
        return new Point(home.getX(), home.getY());
    }
}
\`\`\`

## Worked Example: A Leak Through a Getter

\`\`\`java
Robot r = new Robot(new Point(1, 1));
Point h = r.getHome();
h.moveBy(9, 9);
Point c = r.getHomeCopy();
c.moveBy(5, 5);
System.out.println(r.getHome().getX());
\`\`\`

**Step 1 — getHome returns the field itself.** \`h\` and the Robot's \`home\` are aliases, so \`h.moveBy(9, 9)\` moves the Robot's home to (10, 10) from outside the class.

**Step 2 — getHomeCopy returns a new Point.** \`c\` starts as (10, 10) but is a separate object, so moving it to (15, 15) leaves the Robot alone.

**Step 3 — Output.** \`r.getHome().getX()\` is \`10\`.

| Returned type | Safe to return the field directly? |
|---|---|
| \`int\`, \`double\`, \`boolean\` | yes: the caller gets a copy of the value |
| \`String\` | yes: Strings are immutable |
| a mutable class such as \`Point\` | no: return a copy if the caller must not change your state |

> 🎯 **AP Connection:** Multiple-choice questions on this topic usually ask "what is printed" after a method call. Before tracing, ask two questions: does the method call a mutator on its parameter (change visible to the caller), or does it assign a new object to the parameter (change invisible)?
      `
    },
    {
      id: 'csawriti5-applied',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Using the Robot class above, what is printed by: Point p = new Point(2, 2); Robot r = new Robot(p); p.moveBy(1, 0); r.getHomeCopy().moveBy(1, 0); System.out.println(r.getHome().getX());',
            options: [
              '2',
              '3',
              '4',
              '1'
            ],
            correctAnswer: 0,
            explanation: 'The constructor stored a copy, so moving p does not affect the Robot, and moving the returned copy does not either. The Robot\'s home still has x = 2.'
          },
          {
            question: 'Which method of a class with a private Point field named spot lets client code change spot without calling a method of that class?',
            options: [
              'public Point getSpot() { return spot; }',
              'public Point getOrigin() { return new Point(0, 0); }',
              'public Point getSpot() { return new Point(spot.getX(), spot.getY()); }',
              'public String getSpot() { return spot.getX() + "," + spot.getY(); }'
            ],
            correctAnswer: 0,
            explanation: 'Returning the field hands the caller an alias, so calling moveBy on the result changes the object\'s own Point. A String or a newly built Point gives the caller nothing that leads back to the field.'
          },
          {
            question: 'A method public static void grow(Point q) { q = new Point(q.getX() * 2, q.getY() * 2); } is called as grow(p) where p is (3, 5). What is p afterward?',
            options: [
              '(3, 5)',
              '(6, 10)',
              '(0, 0)',
              'null'
            ],
            correctAnswer: 0,
            explanation: 'The method builds a doubled Point but stores it only in its own parameter q, which disappears when the method ends. To give the caller the doubled Point, the method would have to return it.'
          }
        ]
      }
    }
  ]
}
