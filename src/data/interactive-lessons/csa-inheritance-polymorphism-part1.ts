export const csaInheritancePolymorphismPart1Data = {
  topicSlug: 'csa-inheritance-polymorphism',
  sections: [
    {
      id: 'csaip1-intro',
      type: 'text' as const,
      content: `
# 🔮 Polymorphism

**Part 1 of 7 — Dynamic Binding, Type Casting, and Object Hierarchies**

---

## What Is Polymorphism?

Polymorphism means "many forms." A superclass reference can hold a subclass object, and the correct overridden method is called at runtime.

\`\`\`java
Animal a1 = new Dog("Rex", "Lab");
Animal a2 = new Cat("Whiskers");

// Both are declared as Animal, but:
a1.speak();  // "Woof!" — Dog version
a2.speak();  // "Meow!" — Cat version
\`\`\`

> 🔑 **Compile-time type** (declared type) determines WHAT methods can be called. **Runtime type** (actual type) determines WHICH version of an overridden method runs.

---

## Compile-Time vs Runtime Type

\`\`\`java
Animal a = new Dog("Rex", "Lab");
//  ^         ^
//  |         Runtime type: Dog
//  Compile-time type: Animal
\`\`\`

| Check | Uses | Determines |
|-------|------|-----------|
| **Compile-time** | Declared type | Which methods are LEGAL to call |
| **Runtime** | Actual type | Which OVERRIDDEN version runs |

\`\`\`java
Animal a = new Dog("Rex", "Lab");
a.speak();     // OK: speak() exists in Animal, Dog version runs
a.getName();   // OK: getName() exists in Animal
// a.getBreed(); // COMPILE ERROR: getBreed() not in Animal
\`\`\`

The compiler only knows \`a\` is an Animal. Even though the actual object is a Dog, you cannot call Dog-specific methods through an Animal reference without casting.
      `
    },
    {
      id: 'csaip1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Animal a = new Dog("Rex"); Which type determines what methods can be called?',
            options: [
              'Dog (the runtime type)',
              'Animal (the compile-time / declared type)',
              'Both equally',
              'Neither — all methods are always available'
            ],
            correctAnswer: 1,
            explanation: 'The compile-time type (Animal) determines which methods are LEGAL to call. You can only call methods defined in Animal. The runtime type (Dog) determines which VERSION of overridden methods runs.'
          },
          {
            question: 'Given Animal a = new Dog("Rex"); calling a.speak() invokes which version?',
            options: [
              'Animal speak() because a is declared as Animal',
              'Dog speak() because the actual object is a Dog',
              'Both versions in sequence',
              'Compile error'
            ],
            correctAnswer: 1,
            explanation: 'This is dynamic binding (polymorphism). The runtime type (Dog) determines which overridden method executes. Even though a is declared as Animal, Dog speak() runs.'
          }
        ]
      }
    },
    {
      id: 'csaip1-content',
      type: 'text' as const,
      content: `
## Polymorphism with Arrays and ArrayLists

\`\`\`java
ArrayList<Animal> animals = new ArrayList<>();
animals.add(new Dog("Rex", "Lab"));
animals.add(new Cat("Whiskers"));
animals.add(new Dog("Buddy", "Poodle"));

for (Animal a : animals) {
    System.out.println(a.speak());
}
// Output: Woof! Meow! Woof!
\`\`\`

This is the power of polymorphism: one loop processes different types of objects, each responding with its own behavior.

## Type Casting

\`\`\`java
Animal a = new Dog("Rex", "Lab");

// Downcasting: Animal -> Dog
Dog d = (Dog) a;         // OK at runtime because a IS a Dog
String breed = d.getBreed(); // Now we can call Dog-specific methods

// Dangerous downcast:
Animal a2 = new Cat("Whiskers");
Dog d2 = (Dog) a2;       // ClassCastException at runtime!
\`\`\`

### instanceof Operator
\`\`\`java
if (a instanceof Dog) {
    Dog d = (Dog) a;     // Safe cast
    System.out.println(d.getBreed());
}
\`\`\`

## The Object Class
Every class in Java implicitly extends **Object**. This means every class inherits:
- \`toString()\` — String representation
- \`equals(Object obj)\` — equality check
      `
    },
    {
      id: 'csaip1-input',
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

1) Polymorphism means a superclass reference can point to a _______ object.

2) The compile-time type determines which methods are legal; the _______ type determines which overridden version runs.

3) Every class in Java implicitly extends the _______ class.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['subclass', 'runtime', 'Object'],
        hint1: 'A Dog can be referenced as an Animal.',
        hint2: 'The actual object created at runtime.',
        hint3: 'The universal base class in Java.',
        explanation: 'Superclass refs can hold subclass objects. Runtime type determines method version. All classes extend Object.'
      }
    },
    {
      id: 'csaip1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Polymorphism in Practice** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Animal a = new Dog(); a.getBreed() causes a ___',
            options: ['Compile error (getBreed not in Animal)', 'Runtime error', 'Returns null', 'Returns the breed successfully']
          },
          {
            label: 'To safely downcast, first check with ___',
            options: ['instanceof operator', 'equals() method', 'toString() method', 'getClass() method']
          },
          {
            label: 'An ArrayList<Animal> can hold Dog objects because Dog ___ Animal',
            options: ['IS-A (extends)', 'HAS-A', 'overloads', 'implements']
          }
        ],
        correctAnswers: ['Compile error (getBreed not in Animal)', 'instanceof operator', 'IS-A (extends)'],
        hint1: 'The compiler only sees Animal methods.',
        hint2: 'Checks the runtime type before casting.',
        hint3: 'Dog extends Animal = Dog IS-A Animal.',
        explanation: 'Compiler uses declared type. instanceof for safe casting. IS-A = subclass stored in superclass reference.'
      }
    },
    {
      id: 'csaip1-strategy',
      type: 'text' as const,
      content: `
## AP Exam Strategy: Polymorphism

- **Compile-time type** = what the compiler sees (left side of =). Determines legal method calls
- **Runtime type** = actual object (right side of new). Determines which overridden version runs
- A superclass reference CANNOT call subclass-specific methods without casting
- Polymorphism with arrays/ArrayLists is a common FRQ pattern — one loop, many types
- instanceof is rarely tested but important for safe downcasting
- Every class extends Object — toString() and equals() are inherited by ALL classes
      `
    },
    {
      id: 'csaip1-applied',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'class Shape { public double area() { return 0; } }\nclass Circle extends Shape { private double r; public Circle(double r) { this.r = r; } public double area() { return Math.PI * r * r; } }\nShape s = new Circle(5);\nWhat does s.area() return?',
            options: [
              '0',
              '78.54 (approximately Pi * 25)',
              'Compile error',
              'NullPointerException'
            ],
            correctAnswer: 1,
            explanation: 'The runtime type is Circle, so Circle area() runs via polymorphism. area() returns Math.PI * 5 * 5 = 78.54 approximately. The Shape version (return 0) is overridden.'
          },
          {
            question: 'ArrayList<Shape> shapes contains Circle and Rectangle objects. Which is true about: for (Shape s : shapes) { s.area(); }',
            options: [
              'Only Shape area() runs for all elements',
              'Each element runs its own overridden area() based on actual type',
              'Compile error because Shape is too general',
              'Only Circle area() runs'
            ],
            correctAnswer: 1,
            explanation: 'Polymorphism: each object in the list calls its own version of area(). Circles call Circle.area(), Rectangles call Rectangle.area(). This is the core benefit of polymorphism.'
          }
        ]
      }
    }
  ]
};
