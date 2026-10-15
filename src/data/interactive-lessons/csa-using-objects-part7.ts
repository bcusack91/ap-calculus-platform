export const csaUsingObjectsPart7Data = {
  topicSlug: 'csa-using-objects',
  sections: [
    {
      id: 'csausing7-intro',
      type: 'text' as const,
      content: `
# 🏗️ Using Objects

**Part 7 of 7 — Synthesis Review**

---

Every part of this topic comes back to one skill: reading a line of code that uses a class and knowing exactly what it does. Four questions cover almost every case.

## Four Questions for Any Call

| # | Question | Where it was taught |
|---|----------|---------------------|
| 1 | **Class method or instance method?** Static methods are called on the class (\`Math.sqrt(x)\`); instance methods need an object (\`t.getTarget()\`). | Parts 1 and 3 |
| 2 | **Does the argument list match a header?** Number, order, and type; int widens to double, never the reverse. Overloads are chosen by this match. | Parts 3 and 5 |
| 3 | **What comes back, and is it used?** void returns nothing; a non-void value is lost unless it is stored, printed, or used in an expression. | Parts 3 and 4 |
| 4 | **Which object changes, and who else sees it?** Mutating an object is visible through every alias; reassigning a variable moves only that variable's arrow. | Parts 1 and 5 |

Behind all four sits the documentation (Part 2): the headers tell you what compiles, and the preconditions and postconditions tell you what the call promises.
      `
    },
    {
      id: 'csausing7-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Warm-Up Review** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which pair of headers is NOT allowed in the same class?',
            options: [
              'int f(int a) and int f(double a)',
              'int f(int a) and double f(int b)',
              'int f(int a) and int f(int a, int b)',
              'void f() and void f(int a)'
            ],
            correctAnswer: 1,
            explanation: 'Both headers in that pair have the signature f(int); a different return type and a different parameter name do not make the signatures different. Every other pair differs in the number or the types of its parameters, which is legal overloading.'
          },
          {
            question: 'A method\'s documentation says "Precondition: n > 0". What happens if a caller passes 0?',
            options: [
              'The call does not compile at all',
              'The method returns 0 in that case',
              'The method throws an exception',
              'The method\'s behavior is not promised'
            ],
            correctAnswer: 3,
            explanation: 'A precondition is the caller\'s responsibility, and the method is not expected to check it, so the documentation makes no promise. The call compiles because 0 has the right type, and nothing guarantees a particular return value or exception.'
          }
        ]
      }
    },
    {
      id: 'csausing7-tables',
      type: 'text' as const,
      content: `
## Reference Sheet

### Math class (AP Java Quick Reference)

| Call | Returns | Watch for |
|------|---------|-----------|
| \`Math.abs(x)\` | same type as x | int in, int out; double in, double out |
| \`Math.pow(b, e)\` | double | \`int n = Math.pow(2, 3);\` does not compile |
| \`Math.sqrt(x)\` | double | \`Math.sqrt(49)\` is 7.0, not 7 |
| \`Math.random()\` | double from 0.0 up to, not including, 1.0 | cast placement |

**Random int from min to max:** \`(int) (Math.random() * (max - min + 1)) + min\`

### Objects and references

| Situation | Outcome |
|-----------|---------|
| \`new\` runs | exactly one new object |
| \`b = a;\` (references) | aliases: one object, two arrows |
| method called through an alias | every alias sees the change |
| \`b = new ...\` or \`b = null;\` | only b's arrow moves |
| reference passed to a method | method can mutate the object, cannot re-point the caller's variable |
| primitive passed to a method | method works on a copy; caller's variable unchanged |
| method called on null | compiles; NullPointerException at run time |

### Signatures

| Part of a header | In the signature? |
|------------------|-------------------|
| method name | yes |
| ordered parameter types | yes |
| parameter names | no |
| return type | no |
      `
    },
    {
      id: 'csausing7-input',
      type: 'input-boxes' as const,
      content: `
**Mixed Trace** ✍️

Uses BankAccount from Part 5.

\`\`\`java
BankAccount k = new BankAccount("Kai", 16.0);
double root = Math.sqrt(k.getBalance());
k.deposit(root);
BankAccount j = k;
j.withdraw(Math.pow(2, 3));
int gap = Math.abs(3 - 11);
\`\`\`

1) The value of \`root\` is ___

2) After the segment, \`k.getBalance()\` returns ___

3) The value of \`gap\` is ___
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['4.0', '12.0', '8'],
        hint1: 'The balance starts at 16.0. Take its square root.',
        hint2: 'j and k are aliases. Deposit root, then withdraw 2 to the power 3.',
        hint3: '3 − 11 is negative; abs makes it positive and keeps it an int.',
        explanation: '1) Math.sqrt(16.0) = 4.0. 2) 16.0 + 4.0 = 20.0, then the shared account loses 8.0, leaving 12.0. 3) Math.abs(-8) = 8.'
      }
    },
    {
      id: 'csausing7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Name the Kind of Call** 🔍

For each call (Thermostat t, BankAccount k), choose whether the method is a static class method or an instance method, and whether it is void or returns a value.
      `,
      exercise: {
        dropdowns: [
          {
            label: 't.adjust(4)',
            options: ['instance, void', 'instance, returns a value', 'static, void', 'static, returns a value'],
            correctIndex: 0,
            explanation: 'adjust is called on an object and returns nothing.'
          },
          {
            label: 'Math.sqrt(30.0)',
            options: ['instance, void', 'instance, returns a value', 'static, void', 'static, returns a value'],
            correctIndex: 3,
            explanation: 'sqrt is static and returns a double.'
          },
          {
            label: 'k.getBalance()',
            options: ['instance, void', 'instance, returns a value', 'static, void', 'static, returns a value'],
            correctIndex: 1,
            explanation: 'getBalance is called on an object and returns a double.'
          },
          {
            label: 'Bank.addBonus(k)',
            options: ['instance, void', 'instance, returns a value', 'static, void', 'static, returns a value'],
            correctIndex: 2,
            explanation: 'addBonus is declared static and returns nothing.'
          }
        ],
        hint1: 'A class name before the dot means a class (static) method.',
        hint2: 'Check the header: void, or a type such as int, double, or boolean?',
        explanation: 'Class name before the dot means a class method; a variable means an instance method. The header\'s return type decides void or non-void.'
      }
    },
    {
      id: 'csausing7-final',
      type: 'multiple-choice' as const,
      content: `
**Final Review** 🎯

\`\`\`java
// Segment A (Robot class from Part 6)
Robot p = new Robot(1);
Robot q = new Robot(1);
Robot w = p;
w.move(4);
q = w;
q.move();
System.out.println(p.getPosition());
\`\`\`
      `,
      exercise: {
        questions: [
          {
            question: 'What does Segment A print?',
            options: ['5', '1', '6', '2'],
            correctAnswer: 2,
            explanation: 'w is an alias for p\'s robot, which moves from 1 to 5. Then q = w makes q a third alias for that same robot, so q.move() takes it to 6.'
          },
          {
            question: 'In Segment A, how many Robot objects are created?',
            options: ['1', '3', '2', '4'],
            correctAnswer: 2,
            explanation: 'new runs twice. The statements w = p and q = w copy references and create no objects.'
          },
          {
            question: 'Which expression produces a random integer from -3 to 3, inclusive?',
            options: [
              '(int) (Math.random() * 6) - 3',
              '(int) (Math.random() * 7) - 3',
              '(int) (Math.random() * 7) + 3',
              '(int) (Math.random() * 3) - 3'
            ],
            correctAnswer: 1,
            explanation: 'There are 3 − (−3) + 1 = 7 values and the smallest is -3, so multiply by 7 and subtract 3. Multiplying by 6 never reaches 3, adding 3 shifts the range to 3 through 9, and multiplying by 3 gives only -3 through -1.'
          }
        ]
      }
    },
    {
      id: 'csausing7-wrap',
      type: 'text' as const,
      content: `
## Where This Leads

You can now use any class from its documentation: construct objects, call class and instance methods with matching arguments, use return values, and track what changes when references are shared or passed.

In **Unit 3** you switch sides and **write** classes like Thermostat, BankAccount, and Robot yourself: instance variables, constructors, and method bodies. Everything here about signatures, overloading, call by value, and null still applies there.

### Final checklist

- [ ] I can read a header and state its signature and return type.
- [ ] I can tell whether a call compiles by matching number, order, and type.
- [ ] I know which Math methods are on the Quick Reference and what type each returns.
- [ ] I can write a random-int expression for any inclusive range, and read one backward.
- [ ] I can draw a reference diagram and count the objects a segment creates.
- [ ] I can explain why a method can change an object it is given but not the caller's variable.
      `
    }
  ]
};
