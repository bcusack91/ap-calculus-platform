export const csaUsingObjectsPart5Data = {
  topicSlug: 'csa-using-objects',
  sections: [
    {
      id: 'csausing5-intro',
      type: 'text' as const,
      content: `
# 🏗️ Using Objects

**Part 5 of 7 — Constructors, Reference Diagrams, and null**

---

## Constructors

A **constructor** is called with \`new\` to create an object and set the starting values of its attributes.

- It has the **same name as the class**.
- It has **no return type**, not even void.
- Its **signature** is the constructor name plus the ordered list of parameter types.
- A class can have several constructors with different signatures; the constructors are then **overloaded**.

\`\`\`java
public class BankAccount
{
    /** Creates an account with owner "unknown" and balance 0.0. */
    public BankAccount()
    { /* implementation not shown */ }

    /** Creates an account for owner with balance 0.0. */
    public BankAccount(String owner)
    { /* implementation not shown */ }

    /**
     * Creates an account for owner with the given starting balance.
     * Precondition: balance >= 0.0
     */
    public BankAccount(String owner, double balance)
    { /* implementation not shown */ }

    /** Returns the current balance. */
    public double getBalance()
    { /* implementation not shown */ }

    /** Returns the owner's name. */
    public String getOwner()
    { /* implementation not shown */ }

    /** Adds amount to the balance. Precondition: amount > 0 */
    public void deposit(double amount)
    { /* implementation not shown */ }

    /**
     * Subtracts amount from the balance.
     * Precondition: 0 < amount <= getBalance()
     */
    public void withdraw(double amount)
    { /* implementation not shown */ }
}
\`\`\`
      `
    },
    {
      id: 'csausing5-calls',
      type: 'text' as const,
      content: `
## Matching a Constructor Call

Constructor arguments follow the same rules as method arguments: **number, order, and type** must match one constructor's parameter list, and arguments are passed by value (each parameter gets a copy).

| Statement | Result |
|-----------|--------|
| \`new BankAccount()\` | owner "unknown", balance 0.0 |
| \`new BankAccount("Ana")\` | owner "Ana", balance 0.0 |
| \`new BankAccount("Ana", 50.0)\` | owner "Ana", balance 50.0 |
| \`new BankAccount("Ana", 50)\` | compiles: the int 50 widens to 50.0 |
| \`new BankAccount(50.0, "Ana")\` | compile error: arguments in the wrong order |
| \`new BankAccount(50.0)\` | compile error: no constructor takes one double |
| \`BankAccount("Ana")\` | compile error: a constructor call needs \`new\` |

> 🔑 **Key Idea:** The constructor that runs is the one whose parameter list matches the arguments. Different arguments, different starting state.
      `
    },
    {
      id: 'csausing5-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Using the BankAccount documentation, which statement compiles?',
            options: [
              'BankAccount b = new BankAccount(20.0, "Lee");',
              'BankAccount b = new BankAccount("Lee", 20);',
              'BankAccount b = BankAccount("Lee", 20.0);',
              'BankAccount b = new BankAccount(20.0);'
            ],
            correctAnswer: 1,
            explanation: 'The (String, double) constructor accepts the int 20 because it widens to 20.0. Reversing the arguments matches no constructor, a single double matches no constructor, and leaving out new is not a legal call.'
          },
          {
            question: 'Which statement about a constructor header is accurate?',
            options: [
              'It uses the class name and has a void return type',
              'It may use any name as long as new comes first',
              'It uses the class name and has no return type',
              'It must declare one parameter per attribute'
            ],
            correctAnswer: 2,
            explanation: 'A constructor is named after its class and has no return type at all, not even void. Its name cannot be chosen freely, and a constructor may take fewer parameters than the class has attributes, as the no-argument BankAccount constructor shows.'
          }
        ]
      }
    },
    {
      id: 'csausing5-diagrams',
      type: 'text' as const,
      content: `
## Reference Diagrams

A reference variable holds a **reference** (think: an arrow to the object), or \`null\` if there is no object. Drawing the arrows makes any trace easier.

\`\`\`java
BankAccount a = new BankAccount("Ana", 50.0);
BankAccount b = a;
BankAccount c = new BankAccount("Ana", 50.0);
\`\`\`

\`\`\`
a ──┐
    ├──► [ BankAccount #1 | owner "Ana" | balance 50.0 ]
b ──┘
c ─────► [ BankAccount #2 | owner "Ana" | balance 50.0 ]
\`\`\`

- **Count objects by counting the \`new\` calls that run.** Here: two objects, three references.
- \`b = a\` copies the **arrow**, not the object, so a and b are aliases.
- \`a == b\` is **true** (same object). \`a == c\` is **false**: same contents, different objects.

> ⚠️ **Common Mistake:** Thinking \`b = a;\` makes a second account. Without \`new\`, no object is created.
      `
    },
    {
      id: 'csausing5-trace',
      type: 'text' as const,
      content: `
## Worked Example: Mutation vs. Reassignment

\`\`\`java
BankAccount a = new BankAccount("Ana", 50.0);   // line 1
BankAccount b = a;                              // line 2
b.deposit(25.0);                                // line 3
System.out.println(a.getBalance());             // line 4
b = new BankAccount("Ben", 10.0);               // line 5
b.deposit(5.0);                                 // line 6
System.out.println(a.getBalance());             // line 7
System.out.println(b.getBalance());             // line 8
\`\`\`

| Line | a refers to | b refers to | #1 balance | #2 balance | Printed |
|------|-------------|-------------|------------|------------|---------|
| 1 | #1 | — | 50.0 | — | |
| 2 | #1 | #1 | 50.0 | — | |
| 3 | #1 | #1 | 75.0 | — | |
| 4 | | | | | 75.0 |
| 5 | #1 | #2 | 75.0 | 10.0 | |
| 6 | #1 | #2 | 75.0 | 15.0 | |
| 7 | | | | | 75.0 |
| 8 | | | | | 15.0 |

**Two different actions:**
- **Mutation** (line 3): calling a method that changes the object. Every alias sees the change, because there is only one object.
- **Reassignment** (line 5): pointing a variable at a different object. Only that variable changes; a still refers to account #1.
      `
    },
    {
      id: 'csausing5-passing',
      type: 'text' as const,
      content: `
## Passing a Reference to a Method

Call by value (Part 3) still applies: the parameter receives a **copy of the reference**. The copy points at the same object, so the method **can mutate** that object. It **cannot** make the caller's variable point somewhere else.

\`\`\`java
public class Bank
{
    public static void addBonus(BankAccount acct)
    {
        acct.deposit(100.0);
    }

    public static void replace(BankAccount acct)
    {
        acct = new BankAccount("Temp", 999.0);
    }
}
\`\`\`

\`\`\`java
BankAccount c = new BankAccount("Cy", 20.0);
Bank.addBonus(c);
Bank.replace(c);
System.out.println(c.getBalance());
\`\`\`

1. \`addBonus(c)\`: acct gets a copy of c's arrow, so acct and c point at the same account. \`acct.deposit(100.0)\` changes that account to **120.0**.
2. \`replace(c)\`: acct again starts as a copy of c's arrow, then is re-pointed to a brand-new "Temp" account. c is untouched. When the method ends, acct disappears and nothing refers to the Temp account.
3. The output is **120.0**.

| Argument kind | The parameter gets | Can the method change the caller's variable? | Can it change the object? |
|---------------|--------------------|-----------------------------------------------|---------------------------|
| primitive | a copy of the value | no | no object involved |
| reference | a copy of the reference | no | yes, through its methods |
      `
    },
    {
      id: 'csausing5-input',
      type: 'input-boxes' as const,
      content: `
**Trace the References** ✍️

\`\`\`java
BankAccount p = new BankAccount("Pat", 40.0);
BankAccount q = p;
BankAccount r = new BankAccount("Pat", 40.0);
q.withdraw(15.0);
r.deposit(10.0);
Bank.addBonus(r);
\`\`\`

1) After the segment, \`p.getBalance()\` returns ___

2) After the segment, \`r.getBalance()\` returns ___

3) The number of BankAccount objects the segment creates is ___
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['25.0', '150.0', '2'],
        hint1: 'p and q are aliases. Whose balance did the withdrawal change?',
        hint2: 'r has its own account. Apply the deposit, then the bonus.',
        hint3: 'Count the new calls, not the variables.',
        explanation: '1) q.withdraw(15.0) changes the shared account: 40.0 − 15.0 = 25.0. 2) 40.0 + 10.0 + 100.0 = 150.0. 3) new runs twice, so there are 2 objects for 3 references.'
      }
    },
    {
      id: 'csausing5-null',
      type: 'text' as const,
      content: `
## null, Revisited

Part 1 showed that calling a method on \`null\` throws a NullPointerException. Three details matter on the exam.

1. **It compiles.** \`BankAccount d = null;\` followed by \`d.getBalance();\` passes the compiler, which checks only that d's type has a getBalance method. The exception happens at **run time**.
2. **It can happen inside a method.** \`Bank.addBonus(null);\` compiles, then throws when the method reaches \`acct.deposit(100.0)\`, because acct is null.
3. **Testing for null is safe.** \`d == null\` compares the reference itself and calls no method, so it simply evaluates to true or false.

Setting a variable to null removes **that variable's** arrow only:

\`\`\`java
BankAccount x = new BankAccount("Max", 30.0);
BankAccount y = x;
x = null;            // x no longer refers to the account
y.deposit(5.0);      // y still does: the balance becomes 35.0
\`\`\`

If no variable refers to an object any more, the program can no longer reach it, and Java reclaims its memory automatically.
      `
    },
    {
      id: 'csausing5-applied',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application** 🎯

\`\`\`java
// Segment A
BankAccount m = new BankAccount("Mo", 10.0);
Bank.replace(m);
Bank.addBonus(m);
System.out.println(m.getBalance());

// Segment B
BankAccount g = new BankAccount("Gus", 30.0);
BankAccount h = g;
g = null;
h.withdraw(12.0);
System.out.println(h.getBalance());
\`\`\`
      `,
      exercise: {
        questions: [
          {
            question: 'What does Segment A print?',
            options: ['1099.0', '110.0', '10.0', '999.0'],
            correctAnswer: 1,
            explanation: 'replace re-points only its own parameter, so m still refers to Mo\'s account, and addBonus then deposits 100.0 into it. The 1099.0 and 999.0 choices assume replace changed m, and 10.0 ignores the bonus.'
          },
          {
            question: 'What is the result of running Segment B?',
            options: [
              'A NullPointerException is thrown',
              '18.0 is printed',
              'The output is 30.0',
              'A compile error occurs at g = null;'
            ],
            correctAnswer: 1,
            explanation: 'Setting g to null removes only g\'s reference; h still refers to the account, so the withdrawal leaves 30.0 − 12.0 = 18.0. No method is called on null, and assigning null to a reference variable is legal.'
          }
        ]
      }
    }
  ]
};
