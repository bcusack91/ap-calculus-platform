export const csaInheritancePart1Data = {
  topicSlug: 'csa-inheritance',
  sections: [
    {
      id: 'csaih1-intro',
      type: 'text' as const,
      content: `
# 🧬 Inheritance

**Part 1 of 7 — Superclasses, Subclasses, and the extends Keyword**

---

## What Is Inheritance?

Inheritance lets a class (subclass) inherit fields and methods from another class (superclass), enabling code reuse and an "is-a" relationship.

\`\`\`java
public class Animal {              // Superclass
    private String name;

    public Animal(String name) {
        this.name = name;
    }

    public String getName() {
        return name;
    }

    public String speak() {
        return "...";
    }
}

public class Dog extends Animal {  // Subclass
    private String breed;

    public Dog(String name, String breed) {
        super(name);              // Call superclass constructor
        this.breed = breed;
    }

    public String speak() {       // Override superclass method
        return "Woof!";
    }

    public String getBreed() {
        return breed;
    }
}
\`\`\`

> 🔑 **"Is-a" relationship:** A Dog IS-A Animal. The subclass inherits all public methods from the superclass but NOT the constructors and NOT private fields directly.

---

## Key Inheritance Rules

| Rule | Detail |
|------|--------|
| **extends** | Keyword to declare inheritance: \`class Dog extends Animal\` |
| **super()** | Calls superclass constructor; MUST be first line in subclass constructor |
| **Inherits** | All public/protected methods and fields |
| **Cannot access** | Private fields of superclass (use getters instead) |
| **Single inheritance** | A class can extend only ONE superclass |
      `
    },
    {
      id: 'csaih1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What must be the FIRST statement in a subclass constructor?',
            options: [
              'this()',
              'super() or super(args) — a call to the superclass constructor',
              'The instance variable assignments',
              'A print statement'
            ],
            correctAnswer: 1,
            explanation: 'The superclass constructor must run before any subclass code executes. super() or super(args) must be the very first line. If omitted, Java inserts super() (no-arg) automatically.'
          },
          {
            question: 'A subclass can directly access private instance variables of the superclass. True or false?',
            options: [
              'True — subclasses inherit everything',
              'False — private fields are not accessible even to subclasses; use getters',
              'True — but only if the subclass is in the same file',
              'False — subclasses cannot access any superclass members'
            ],
            correctAnswer: 1,
            explanation: 'Private means private to ALL other classes, including subclasses. The subclass must use the public getter methods inherited from the superclass to access private data.'
          }
        ]
      }
    },
    {
      id: 'csaih1-content',
      type: 'text' as const,
      content: `
## Method Overriding

\`\`\`java
public class Animal {
    public String speak() {
        return "...";
    }
}

public class Cat extends Animal {
    @Override
    public String speak() {     // Same name, same parameters
        return "Meow!";
    }
}

Animal a = new Cat();
System.out.println(a.speak());  // "Meow!" — runtime type determines method
\`\`\`

### Overriding vs Overloading

| Feature | Overriding | Overloading |
|---------|-----------|-------------|
| **Where** | Subclass redefines superclass method | Same class, multiple methods |
| **Signature** | Same name AND same parameters | Same name, DIFFERENT parameters |
| **Return type** | Must be same (or subtype) | Can be different |
| **Determined at** | Runtime (dynamic binding) | Compile time (static binding) |

## Using super to Call Overridden Methods

\`\`\`java
public class Dog extends Animal {
    @Override
    public String speak() {
        return super.speak() + " Woof!"; // Calls Animal.speak() first
    }
}
\`\`\`
      `
    },
    {
      id: 'csaih1-input',
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

1) The keyword _______ is used to declare that a class inherits from another class.

2) A call to the superclass constructor using _______ must be the first line of the subclass constructor.

3) When a subclass provides its own version of an inherited method with the same signature, this is called method _______.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['extends', 'super()', 'overriding'],
        hint1: 'class Subclass ______ Superclass',
        hint2: 'Calls the parent constructor.',
        hint3: 'To override = to replace with a new version.',
        explanation: 'extends for inheritance. super() calls parent constructor. Method overriding = same signature in subclass.'
      }
    },
    {
      id: 'csaih1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Classify the Concept** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Dog extends Animal means Dog ___ Animal',
            options: ['IS-A (inheritance relationship)', 'HAS-A (composition relationship)', 'USES-A (dependency)', 'REPLACES']
          },
          {
            label: 'Two methods: speak() and speak(int volume) in the same class demonstrate ___',
            options: ['Overloading (same name, different parameters)', 'Overriding (subclass redefines)', 'Inheritance', 'Encapsulation']
          },
          {
            label: 'Animal a = new Dog("Rex", "Lab"); a.speak() calls the ___ version of speak()',
            options: ['Dog (subclass) version — determined at runtime', 'Animal (superclass) version — determined at compile time', 'Neither — compile error', 'Both versions sequentially']
          }
        ],
        correctAnswers: ['IS-A (inheritance relationship)', 'Overloading (same name, different parameters)', 'Dog (subclass) version — determined at runtime'],
        hint1: 'A Dog is a type of Animal.',
        hint2: 'Same name but different parameter list.',
        hint3: 'The actual object type (Dog) determines the method.',
        explanation: 'extends = IS-A. Same name, different params = overloading. Runtime type determines which overridden method runs.'
      }
    },
    {
      id: 'csaih1-strategy',
      type: 'text' as const,
      content: `
## AP Exam Strategy: Inheritance

- **super() must be first** in the subclass constructor — if not present, Java auto-inserts \`super()\` (and the superclass MUST have a no-arg constructor or it fails)
- Private fields are NOT directly accessible in subclasses — always use getters
- **Overriding** = same signature in subclass; **Overloading** = different parameters
- The runtime (actual) type determines which overridden method runs, NOT the declared type
- FRQ 4 is always about inheritance/polymorphism — be comfortable writing subclasses
- Remember: constructors are NOT inherited
      `
    },
    {
      id: 'csaih1-applied',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'class Vehicle { }\nclass Car extends Vehicle {\n    public Car() { /* no super() call */ }\n}\nWhat happens?',
            options: [
              'Compile error because super() is missing',
              'Java automatically inserts super() as the first line, calling Vehicle no-arg constructor',
              'Runtime error',
              'The Car object has no connection to Vehicle'
            ],
            correctAnswer: 1,
            explanation: 'If you do not write super() or super(args), Java automatically inserts super() (no-arg) as the first line. Since Vehicle has a default no-arg constructor, this compiles and runs fine.'
          },
          {
            question: 'class A { public int calc() { return 1; } }\nclass B extends A { public int calc() { return 2; } }\nA obj = new B();\nSystem.out.println(obj.calc());\nWhat is printed?',
            options: [
              '1',
              '2',
              'Compile error',
              '0'
            ],
            correctAnswer: 1,
            explanation: 'The declared type is A but the actual (runtime) type is B. Method overriding uses dynamic binding — the runtime type B determines which calc() runs. Output: 2.'
          }
        ]
      }
    }
  ]
};
