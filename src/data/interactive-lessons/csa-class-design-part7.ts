export const csaClassDesignPart7Data = {
  topicSlug: 'csa-class-design',
  sections: [
    {
      id: 'csaclass7-intro',
      type: 'text' as const,
      content: `
# 🏛️ Class Design

**Part 7 of 7 — Synthesis Review**

---

This part ties the topic together: class variables and methods (CED Topic 3.7), scope and access (3.8), the \`this\` keyword (3.9), and program design and its impact (3.1–3.2). Use the tables as a checklist, then test yourself on mixed questions.

### The Topic on One Page

| Idea | Key fact | Typical trap |
|---|---|---|
| Class variables (Part 2) | one shared copy; initializer runs once | expecting each object to get its own copy |
| Unique IDs (Part 2) | copy the static counter into an instance field, then advance it | an instance counter gives every object the same ID |
| Constants (Part 2) | \`static final\`, cannot be reassigned | assigning to a constant from client code |
| Static methods (Part 2) | no current object, no \`this\`; instance data only through a reference | naming an instance field by its bare name |
| Scope (Part 3) | a local lives from its declaration to the end of its block | using a loop or block variable after its block |
| Shadowing (Part 3) | the local or parameter wins over a field of the same name | \`count = count;\` and \`int count = 0;\` |
| Access (Part 3) | private means usable only inside the class | client code calling a private helper |
| this (Part 4) | the current object; implicit in bare field names | \`this\` in a static method |
| Passing / returning this (Part 4) | hands over a reference to the current object, not a copy | losing track of which object is "this" |
| Design (Part 5) | abstraction, private helpers, signatures | thinking a new return type makes a new overload |
| Impact (Part 5) | reliability through varied tests; licenses; unintended effects | testing only typical values |
      `
    },
    {
      id: 'csaclass7-worked',
      type: 'text' as const,
      content: `
## Worked Example: Putting It Together

\`\`\`java
public class Club {
    private static int members = 0;
    private String name;
    private int dues;

    public Club(String name, int dues) {
        this.name = name;
        dues = dues;
        members++;
    }

    public void pay(int amount) {
        int dues = this.dues - amount;
        this.dues = dues;
    }

    public void merge(Club other) {
        dues += other.dues;
        other.dues = 0;
        members--;
    }

    public static int getMembers() {
        return members;
    }

    public String toString() {
        return name + " " + dues;
    }
}
\`\`\`

\`\`\`java
Club x = new Club("Art", 50);
Club y = new Club("Band", 30);
x.pay(20);
x.merge(y);
System.out.println(x + " | " + y + " | " + Club.getMembers());
\`\`\`

**Step 1 — Constructors.** \`this.name = name;\` stores the name. \`dues = dues;\` assigns the parameter to itself, so the **field** dues stays 0 for both clubs. members becomes 2.

**Step 2 — x.pay(20).** The local \`dues\` is \`this.dues - amount\` = 0 - 20 = -20, and \`this.dues = dues;\` stores -20 in x's field. This method uses the shadowing correctly: \`this.dues\` is the field and the bare \`dues\` is the local.

**Step 3 — x.merge(y).** this is x and other is y. x's dues become -20 + 0 = -20, y's dues are set to 0, and the shared members count drops to 1.

| After | x.dues | y.dues | members |
|---|---|---|---|
| constructors | 0 | 0 | 2 |
| \`x.pay(20)\` | -20 | 0 | 2 |
| \`x.merge(y)\` | -20 | 0 | 1 |

**Step 4 — Output.** \`Art -20 | Band 0 | 1\`. With the constructor fixed to \`this.dues = dues;\`, the output would be \`Art 60 | Band 0 | 1\`.
      `
    },
    {
      id: 'csaclass7-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Mixed Review 1** 🎯

Use the Club class above, with the constructor bug still present.
      `,
      exercise: {
        questions: [
          {
            question: 'What is printed by: Club p = new Club("Chess", 40); p.pay(5); System.out.println(p);',
            options: [
              'Chess -5',
              'Chess 35',
              'Chess 40',
              'Chess 0'
            ],
            correctAnswer: 0,
            explanation: 'The constructor bug leaves the dues field at 0, and pay stores 0 - 5 in it. The intended answer, 35, needs this.dues = dues; in the constructor.'
          },
          {
            question: 'Which statement could be added inside getMembers without a compile error?',
            options: [
              'members = members + 0;',
              'dues = 0;',
              'this.name = "";',
              'merge(null);'
            ],
            correctAnswer: 0,
            explanation: 'A static method may use static variables by name. dues and name are instance fields, this is not allowed in a static method, and merge is an instance method that needs an object to run on.'
          },
          {
            question: 'After the corrected constructor, x = new Club("Art", 50) and y = new Club("Band", 30) run x.merge(y); then y.merge(x);. What are x\'s and y\'s dues?',
            options: [
              '0 and 80',
              '80 and 0',
              '0 and 0',
              '80 and 80'
            ],
            correctAnswer: 0,
            explanation: 'x.merge(y) moves y\'s 30 into x, giving 80 and 0. Then y.merge(x) moves x\'s 80 into y, giving 0 and 80.'
          }
        ]
      }
    },
    {
      id: 'csaclass7-reference',
      type: 'text' as const,
      content: `
## Class-Design Checklist

| Check | Question to ask |
|---|---|
| Static or instance? | Does this value describe one object, or the whole class? |
| IDs | Is the counter static, and is it copied into an instance field each time? |
| Static methods | Do they avoid bare instance-field names and \`this\`? |
| Constructor parameters | Do any share a name with a field? If so, is \`this.\` used? |
| Locals | Does any method redeclare a field's name with a type in front? |
| Scope | Is every variable used only inside the block that declares it? |
| Access | Are fields and helper methods private, and the interface public? |
| Signatures | Do overloaded methods differ in their parameter types, not just their return types? |
| Testing | Have boundary and unusual inputs been tried? |

## Error Catalogue

| Symptom | Likely cause | Fix |
|---|---|---|
| every object has the same ID | counter is an instance variable | declare it static |
| a field keeps 0 or null after construction | parameter shadows it without \`this.\` | use \`this.field = param;\` |
| a reset or update has no effect | \`int x = ...\` declared a local with the field's name | drop the type |
| "non-static variable cannot be referenced from a static context" | a static method names an instance field | make the method an instance method, or use an object reference |
| "cannot find symbol" after a loop | a loop or block variable used outside its block | declare it before the block |
| "method is already defined" | two methods differ only in return type or parameter names | change the parameter types or the name |
      `
    },
    {
      id: 'csaclass7-quick',
      type: 'dropdown-select' as const,
      content: `
**Quick Evaluation** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'A variable that counts how many objects of a class have been created should be declared ___',
            options: ['private static int', 'private int', 'public final int', 'a local int']
          },
          {
            label: 'Inside a method with a parameter named size, the bare name size refers to ___',
            options: ['the parameter', 'the field', 'both at once', 'neither one']
          },
          {
            label: 'The keyword this cannot be used inside ___',
            options: ['a static method', 'a constructor', 'an accessor', 'a mutator']
          }
        ],
        correctAnswers: ['private static int', 'the parameter', 'a static method'],
        hint1: 'One copy for the whole class.',
        hint2: 'The nearest declaration in scope wins.',
        hint3: 'this needs a current object.',
        explanation: 'A class-wide count must be static so every constructor updates the same copy. A parameter shadows a field of the same name. this refers to the current object, which a static method does not have.'
      }
    },
    {
      id: 'csaclass7-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Mixed Review 2** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which pair of methods can appear together in one class?',
            options: [
              'void log(int n) and void log(double d)',
              'int log(int n) and double log(int n)',
              'void log(int n) and void log(int m)',
              'void log(int n) and int log(int value)'
            ],
            correctAnswer: 0,
            explanation: 'An int parameter and a double parameter give different signatures. In the other pairs only the return type or the parameter name differs, and neither is part of the signature.'
          },
          {
            question: 'In a class with a private static int total, which instance-method statement changes total for every object?',
            options: [
              'total += 5;',
              'int total = 5;',
              'return total + 5;',
              'int t = total + 5;'
            ],
            correctAnswer: 0,
            explanation: 'An instance method can update the shared static variable by name, and there is only one copy. Declaring int total creates a local that hides it, and the other two statements only read total.'
          },
          {
            question: 'A program passes every test with typical inputs but crashes when a list of values is empty. What would most likely have caught this before release?',
            options: [
              'Designing extra tests that target unusual kinds of input',
              'Adding many more typical inputs to the existing tests',
              'Making every helper method in the program public',
              'Renaming the variables so they are more descriptive'
            ],
            correctAnswer: 0,
            explanation: 'Reliability improves with tests that cover edge cases such as empty input, not just more of the same typical values. Access changes and renaming do not change how the program behaves.'
          }
        ]
      }
    }
  ]
}
