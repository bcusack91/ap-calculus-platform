export const csaWritingClassesPart7Data = {
  topicSlug: 'csa-writing-classes',
  sections: [
    {
      id: 'csawriti7-intro',
      type: 'text' as const,
      content: `
# ✍️ Writing Classes

**Part 7 of 7 — Synthesis Review**

---

This part ties the topic together: designing a class from a specification (CED Topic 3.3), constructors (3.4), writing methods (3.5), and passing and returning references (3.6). Use the tables as a checklist, then test yourself on mixed questions.

### The Topic on One Page

| Idea | Key fact | Typical trap |
|---|---|---|
| Attributes (Part 2) | store what must be remembered between calls; compute the rest | a stored flag that falls out of step with the data |
| Encapsulation (Parts 1–2) | private fields, public interface, private helpers | client code naming a private field |
| Initial state (Part 3) | every field gets a default, then the constructor runs | assuming a String field starts as "" |
| Checking arguments (Part 3) | the constructor enforces the spec's rules from the start | storing an out-of-range argument as is |
| Mutable parameters (Part 3) | store a copy, not the caller's reference | the caller changes your object later |
| return rules (Part 4) | every path of a non-void method returns; return ends the method | a return only inside an if |
| Primitive parameters (Part 4) | the method gets a copy of the value | expecting the caller's int to change |
| Reference parameters (Part 5) | a mutator call through the parameter is visible to the caller | reassigning the parameter and expecting the caller to see it |
| Same-class access (Part 5) | code in a class can use private fields of any object of that class | thinking \`other.balance\` never compiles |
| Returning references (Part 5) | returning a mutable field gives the caller an alias | a getter that leaks internal state |
      `
    },
    {
      id: 'csawriti7-worked',
      type: 'text' as const,
      content: `
## Worked Example: Putting It Together

\`\`\`java
public class Bin {
    private int count;
    private int capacity;

    public Bin(int cap) {
        capacity = cap;
    }

    public int add(int n) {
        int room = capacity - count;
        if (n <= room) {
            count += n;
            return 0;
        }
        count = capacity;
        return n - room;
    }

    public void pourInto(Bin other) {
        count = other.add(count);
    }

    public int getCount() {
        return count;
    }
}
\`\`\`

\`\`\`java
Bin x = new Bin(10);
Bin y = new Bin(6);
int extra = x.add(13);
x.pourInto(y);
System.out.println(extra + " " + x.getCount() + " " + y.getCount());
\`\`\`

**Step 1 — Construct.** \`count\` is never assigned in the constructor, so both bins start with the default 0. x has capacity 10 and y has capacity 6.

**Step 2 — x.add(13).** room is 10 - 0 = 10, and 13 does not fit, so x fills to 10 and the method returns the overflow 13 - 10 = 3. extra is 3.

**Step 3 — x.pourInto(y).** The method calls \`y.add(10)\` on the parameter. room in y is 6, so y fills to 6 and returns 4. Back in x, \`count = 4\`, so x keeps the 4 that did not fit.

| After | x.count | y.count | extra |
|---|---|---|---|
| constructors | 0 | 0 | |
| \`x.add(13)\` | 10 | 0 | 3 |
| \`x.pourInto(y)\` | 4 | 6 | 3 |

**Step 4 — Output.** \`3 4 6\`. The call on the parameter changed y's state, which the caller sees, because \`other\` and \`y\` refer to the same Bin.
      `
    },
    {
      id: 'csawriti7-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Mixed Review 1** 🎯

Use the Bin class above.
      `,
      exercise: {
        questions: [
          {
            question: 'What is printed by: Bin a = new Bin(5); Bin b = new Bin(5); a.add(4); b.add(3); a.pourInto(b); System.out.println(a.getCount() + " " + b.getCount());',
            options: [
              '2 5',
              '0 7',
              '4 3',
              '2 3'
            ],
            correctAnswer: 0,
            explanation: 'b has room for 2, so b.add(4) fills b to 5 and returns the 2 that did not fit. a\'s count is then set to that returned 2.'
          },
          {
            question: 'What does new Bin(8).add(8) return?',
            options: [
              '0',
              '8',
              '-8',
              '16'
            ],
            correctAnswer: 0,
            explanation: 'The bin starts empty, so room is 8 and 8 <= 8 is true. All eight fit, and the method returns 0 overflow.'
          },
          {
            question: 'Which statement written in a client class does NOT compile?',
            options: [
              'int c = x.count;',
              'x.pourInto(new Bin(1));',
              'int r = x.add(0);',
              'Bin z = new Bin(3);'
            ],
            correctAnswer: 0,
            explanation: 'count is private, so only code inside Bin may name it. Pouring into a new Bin, adding 0, and creating a Bin all use public members, so they compile.'
          }
        ]
      }
    },
    {
      id: 'csawriti7-reference',
      type: 'text' as const,
      content: `
## Class-Writing Checklist

| Check | Question to ask |
|---|---|
| Header | Is the class \`public\` and spelled exactly as specified? |
| Fields | Is every field \`private\`? Does every value that must last between calls have a field? |
| Derived values | Could this "field" be computed from other fields instead? |
| Constructor | Does it assign every field, enforce the spec's rules, and copy mutable objects? |
| Method headers | Do names, return types and parameter types match the specification exactly? |
| Returns | Does every path of each non-void method return a value of the right type? |
| Order | Does each method test its conditions **before** changing state? |
| Parameters | Is a mutable parameter left unchanged unless the spec says to change it? |
| Getters | Does any getter hand out a mutable private field? |

## Error Catalogue

| Symptom | Likely cause | Fix |
|---|---|---|
| a count resets on every call | counter declared as a local variable | make it a field |
| a field still holds 0 or null after construction | constructor parameter shadows the field, or the field was skipped | assign with \`this.\` or a different parameter name |
| "missing return statement" | a path through a non-void method has no return | add a return after the if, or an else branch |
| the caller's object changed unexpectedly | a mutator was called on a parameter or on a returned field | copy the object, or return a copy |
| the caller's object did not change as hoped | the method reassigned its parameter | call a mutator on the parameter, or return the new object |
      `
    },
    {
      id: 'csawriti7-quick',
      type: 'dropdown-select' as const,
      content: `
**Quick Evaluation** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'An int instance variable that the constructor never assigns starts at ___',
            options: ['0', 'null', '1', '-1']
          },
          {
            label: 'A method changes its int parameter n to n + 1. The caller\'s variable that was passed in ___',
            options: ['keeps its old value', 'goes up by 1', 'becomes 0', 'becomes undefined']
          },
          {
            label: 'A getter that returns a private mutable Point field gives the caller ___',
            options: ['an alias to the field', 'a copy of the Point', 'the Point\'s coordinates', 'a compile error']
          }
        ],
        correctAnswers: ['0', 'keeps its old value', 'an alias to the field'],
        hint1: 'Instance variables of type int have a default.',
        hint2: 'Primitive arguments are copied into parameters.',
        hint3: 'Returning an object returns a reference to it.',
        explanation: 'An unassigned int field defaults to 0. A primitive parameter is a copy, so the caller\'s variable keeps its value. Returning an object field returns a reference, so the caller can change the field through it.'
      }
    },
    {
      id: 'csawriti7-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Mixed Review 2** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A specification says a Timer reports isDone() when its seconds remaining reach 0. Which design is best?',
            options: [
              'Store the seconds and have isDone test whether they equal zero',
              'Store a boolean flag and have isDone return the flag',
              'Store both values and have isDone compare the two of them',
              'Make the seconds public so clients can test them for 0'
            ],
            correctAnswer: 0,
            explanation: 'A value that follows directly from another field should be computed, so it can never be out of date. A public field breaks encapsulation, and a separate flag must be updated everywhere the seconds change.'
          },
          {
            question: 'Inside class Card, a method is public boolean beats(Card other) { return value > other.value; }, where value is a private int. Which statement is true?',
            options: [
              'It compiles as written',
              'It needs a getter to read other.value',
              'It needs value to be declared static',
              'It needs the parameter to be a copy'
            ],
            correctAnswer: 0,
            explanation: 'Code inside a class may read the private fields of any object of that same class, including a parameter. A getter is required only for code in other classes.'
          },
          {
            question: 'Which change stops the Robot constructor in Part 3 from sharing its home Point with the caller?',
            options: [
              'Building a new Point from the argument\'s x and y values',
              'Declaring the home Point field as a public variable',
              'Declaring the Point parameter as a private variable',
              'Assigning the Point argument to home in two steps'
            ],
            correctAnswer: 0,
            explanation: 'A new Point with the same coordinates is a separate object, so later changes to the caller\'s Point do not reach the Robot. Access modifiers and extra assignments do not change which object home refers to.'
          }
        ]
      }
    }
  ]
}
