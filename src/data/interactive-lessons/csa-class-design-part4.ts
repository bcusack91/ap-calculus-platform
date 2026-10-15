export const csaClassDesignPart4Data = {
  topicSlug: 'csa-class-design',
  sections: [
    {
      id: 'csaclass4-intro',
      type: 'text' as const,
      content: `
# 🏛️ Class Design

**Part 4 of 7 — The this Keyword**

---

Inside a constructor or an instance method, the keyword \`this\` is a reference to the **current object**: the object being constructed, or the object the method was called on (CED Topic 3.9). Part 1 used \`this.name = name\` to get around shadowing. This part shows what else \`this\` does.

| In this part |
|---|
| \`this\` as a reference to the current object |
| Implicit \`this\` in field names and method calls |
| Passing \`this\` as an argument |
| Returning \`this\`, and comparing with \`this\` |
      `
    },
    {
      id: 'csaclass4-meaning',
      type: 'text' as const,
      content: `
## What this Refers To

\`\`\`java
Box a = new Box(5);
Box b = new Box(3);
a.grow(2);     // inside grow, this refers to the same object as a
b.grow(2);     // inside grow, this refers to the same object as b
\`\`\`

The same method body runs both times. \`this\` is how that body refers to whichever object it was called on.

### Implicit this

When no local variable or parameter shadows a field, a bare field name already means \`this.field\`, and a bare instance-method call means \`this.method()\`:

| You write (inside an instance method) | Java reads it as |
|---|---|
| \`size += n;\` | \`this.size += n;\` |
| \`if (fitsIn(other))\` | \`if (this.fitsIn(other))\` |
| \`return size;\` | \`return this.size;\` |

So \`this.\` is **required** only when a local name shadows a field. Writing it elsewhere is legal and sometimes clearer.

### Where this Cannot Appear

A static method has no current object, so \`this\` inside a static method is a compile error.

\`\`\`java
public class Box {
    private int size;

    public Box(int size) {
        this.size = size;
    }

    public void grow(int n) {
        size += n;
    }

    public boolean fitsIn(Box other) {
        return size < other.size;
    }

    public Box larger(Box other) {
        if (this.fitsIn(other)) {
            return other;
        }
        return this;
    }

    public int getSize() {
        return size;
    }
}
\`\`\`

\`larger\` **returns \`this\`**: a reference to the object it was called on, not a copy. \`a.larger(b)\` returns a reference to the same object as a whenever a does not fit in b.
      `
    },
    {
      id: 'csaclass4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯

Use the Box class above.
      `,
      exercise: {
        questions: [
          {
            question: 'What is printed by: Box a = new Box(5); Box b = new Box(3); System.out.println(a.larger(b) == a);',
            options: [
              'true',
              'false',
              '5',
              'a'
            ],
            correctAnswer: 0,
            explanation: 'a does not fit in b because 5 < 3 is false, so larger returns this, which is the very object a refers to. == compares references, so the result is true.'
          },
          {
            question: 'What is printed by: Box a = new Box(5); Box b = new Box(3); System.out.println(b.larger(a).larger(new Box(4)).getSize());',
            options: [
              '5',
              '4',
              '3',
              '9'
            ],
            correctAnswer: 0,
            explanation: 'b fits in a, so b.larger(a) returns a. Then a.larger(new Box(4)) checks 5 < 4, which is false, so it returns a again, with size 5.'
          },
          {
            question: 'Which statement about this is true?',
            options: [
              'A bare field name inside an instance method already means this.field',
              'The keyword this may be used inside a static method of the class',
              'Writing this.size creates a new copy of the size field each time',
              'The keyword this refers to the class rather than to any object'
            ],
            correctAnswer: 0,
            explanation: 'When no local name shadows the field, size and this.size are the same variable. this refers to an object, so it does not exist in static methods and never copies anything.'
          }
        ]
      }
    },
    {
      id: 'csaclass4-passing',
      type: 'text' as const,
      content: `
## Passing this as an Argument

Sometimes an object must hand **itself** to another object, for example to register with it or to link back to it.

\`\`\`java
public class Student {
    private String name;
    private Student partner;

    public Student(String name) {
        this.name = name;
        partner = null;
    }

    public void pairWith(Student other) {
        partner = other;
        other.partner = this;
    }

    public String partnerName() {
        if (partner == null) {
            return "none";
        }
        return partner.name;
    }
}
\`\`\`

Inside \`pairWith\`, \`this\` is the student the method was called on and \`other\` is the parameter. \`other.partner = this;\` makes the link two-way: the other student now refers back to the caller.

## Worked Example: Re-pairing

\`\`\`java
Student a = new Student("Ana");
Student b = new Student("Ben");
Student c = new Student("Cal");
a.pairWith(b);
c.pairWith(a);
\`\`\`

**Step 1 — a.pairWith(b).** this is a, other is b. a.partner becomes b, and b.partner becomes a.

**Step 2 — c.pairWith(a).** this is c, other is a. c.partner becomes a, and a.partner becomes c, **replacing** b.

**Step 3 — Read the links.**

| Student | partner refers to | partnerName() |
|---|---|---|
| a | c | \`"Cal"\` |
| b | a | \`"Ana"\` |
| c | a | \`"Ana"\` |

**Step 4 — Notice the stale link.** b still points at a, but a no longer points at b. The method does not "unpair" an old partner; a fuller version would first set the old partner's link to null.

> 🎯 **AP Connection:** In a trace, rename \`this\` and the parameter to the actual variables for each call ("this is c, other is a") before following any assignments. Most errors come from losing track of which object is which.
      `
    },
    {
      id: 'csaclass4-input',
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

1) Inside an instance method, the keyword that refers to the object the method was called on is _______.

2) Starting from three new Students a, b and c (with the class above), run \`b.pairWith(c); a.pairWith(c);\`. What does \`b.partnerName()\` return? (Type the name only.) _______

3) In the same scenario, what does \`c.partnerName()\` return? _______
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['this', 'Cal', 'Ana'],
        hint1: 'It is the same word used in this.name = name.',
        hint2: 'b.pairWith(c) set b\'s partner, and nothing after that changed b.',
        hint3: 'a.pairWith(c) runs other.partner = this with other being c.',
        explanation: 'this refers to the current object. b\'s partner was set to c and never changed, so b reports "Cal". The second call made c\'s partner a, so c reports "Ana".'
      }
    },
    {
      id: 'csaclass4-compare',
      type: 'text' as const,
      content: `
## Comparing With this

Because \`this\` is a reference, \`this == other\` asks whether two variables refer to the **same object**, which is useful for guarding against an object being paired with, or transferring to, itself.

\`\`\`java
public void pairWith(Student other) {
    if (other != this) {
        partner = other;
        other.partner = this;
    }
}
\`\`\`

With the guard, \`a.pairWith(a)\` changes nothing. Without it, a would become its own partner.

| Expression inside an instance method | Meaning |
|---|---|
| \`this\` | the current object |
| \`this.field\` | a field of the current object (needed when shadowed) |
| \`this.method(x)\` | call another instance method on the current object |
| \`obj.method(this)\` | hand the current object to another method |
| \`return this;\` | give the caller a reference to the current object |
| \`other == this\` | does the parameter refer to the current object? |
      `
    },
    {
      id: 'csaclass4-applied',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Without the guard, Student a = new Student("Ana"); a.pairWith(a); is run. What does a.partnerName() return?',
            options: [
              '"Ana"',
              '"none"',
              'null',
              'nothing; it throws an exception'
            ],
            correctAnswer: 0,
            explanation: 'partner = other makes a\'s partner a itself, and other.partner = this sets the same field to the same object. partnerName then returns a\'s own name.'
          },
          {
            question: 'Inside pairWith, which statement could replace other.partner = this; without changing what the method does?',
            options: [
              'partner.partner = this;',
              'other.partner = partner;',
              'partner = other.partner;',
              'this.partner = other;'
            ],
            correctAnswer: 0,
            explanation: 'After partner = other runs, the field partner and the parameter other refer to the same Student, so partner.partner = this links that Student back to the caller exactly as before. The other statements point other at itself, overwrite the caller\'s link, or never set other\'s link at all.'
          }
        ]
      }
    }
  ]
}
