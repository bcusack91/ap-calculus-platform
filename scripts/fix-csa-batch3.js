const fs = require('fs');
const path = require('path');
const dir = path.join(__dirname, '..', 'src', 'data', 'interactive-lessons');

function write(name, content) {
  fs.writeFileSync(path.join(dir, name), content);
  console.log('Wrote:', name);
}

// ─── 1. ArrayList ───
write('csa-arraylist-part1.ts', `export const csaArraylistPart1Data = {
  topicSlug: 'csa-arraylist',
  sections: [
    {
      id: 'csaal1-intro',
      type: 'text' as const,
      content: \`
# 📋 ArrayList

**Part 1 of 7 — Dynamic Lists, Methods, and Autoboxing**

---

## ArrayList vs Array

| Feature | Array | ArrayList |
|---------|-------|-----------|
| **Size** | Fixed at creation | Grows and shrinks dynamically |
| **Syntax** | \\\`int[] arr = new int[5];\\\` | \\\`ArrayList<Integer> list = new ArrayList<>();\\\` |
| **Access** | \\\`arr[i]\\\` | \\\`list.get(i)\\\` |
| **Length** | \\\`arr.length\\\` | \\\`list.size()\\\` |
| **Types** | Primitives and objects | Objects only (wrapper classes for primitives) |

\\\`\\\`\\\`java
import java.util.ArrayList;

ArrayList<String> names = new ArrayList<>();
names.add("Alice");      // ["Alice"]
names.add("Bob");        // ["Alice", "Bob"]
names.add(1, "Charlie"); // ["Alice", "Charlie", "Bob"]
names.set(0, "Anna");    // ["Anna", "Charlie", "Bob"]
names.remove(1);         // ["Anna", "Bob"]
\\\`\\\`\\\`

> 🔑 **ArrayList uses wrapper classes** for primitives: Integer (int), Double (double), Boolean (boolean). Java auto-converts between primitive and wrapper types (**autoboxing** and **unboxing**).
      \`
    },
    {
      id: 'csaal1-quiz1',
      type: 'multiple-choice' as const,
      content: \`
**Concept Check** 🎯
      \`,
      exercise: {
        questions: [
          {
            question: 'Which declaration creates an ArrayList that stores integers?',
            options: [
              'ArrayList<int> list = new ArrayList<>();',
              'ArrayList<Integer> list = new ArrayList<>();',
              'ArrayList list = new ArrayList<int>();',
              'int ArrayList list = new ArrayList<>();'
            ],
            correctAnswer: 1,
            explanation: 'ArrayList cannot store primitive types directly. You must use the wrapper class Integer instead of int. Java autoboxes int values to Integer objects automatically.'
          },
          {
            question: 'What is the key advantage of ArrayList over arrays?',
            options: [
              'ArrayList is faster for accessing elements',
              'ArrayList can store primitive types directly',
              'ArrayList automatically resizes as elements are added or removed',
              'ArrayList uses less memory'
            ],
            correctAnswer: 2,
            explanation: 'The main advantage of ArrayList is dynamic sizing. Arrays have a fixed size set at creation, but ArrayList grows when you add() and shrinks when you remove().'
          }
        ]
      }
    },
    {
      id: 'csaal1-content',
      type: 'text' as const,
      content: \`
## Essential ArrayList Methods

| Method | Description | Example |
|--------|-----------|---------|
| \\\`add(obj)\\\` | Appends to end | \\\`list.add("X")\\\` |
| \\\`add(i, obj)\\\` | Inserts at index i | \\\`list.add(0, "X")\\\` |
| \\\`get(i)\\\` | Returns element at index i | \\\`list.get(2)\\\` |
| \\\`set(i, obj)\\\` | Replaces element at index i | \\\`list.set(0, "Y")\\\` |
| \\\`remove(i)\\\` | Removes element at index i | \\\`list.remove(0)\\\` |
| \\\`size()\\\` | Returns number of elements | \\\`list.size()\\\` |

## Autoboxing and Unboxing

\\\`\\\`\\\`java
ArrayList<Integer> nums = new ArrayList<>();
nums.add(42);           // Autoboxing: int 42 -> Integer 42
int value = nums.get(0); // Unboxing: Integer 42 -> int 42
\\\`\\\`\\\`

## Traversal

\\\`\\\`\\\`java
// Standard for loop
for (int i = 0; i < list.size(); i++) {
    System.out.println(list.get(i));
}

// Enhanced for loop
for (String name : list) {
    System.out.println(name);
}
\\\`\\\`\\\`
      \`
    },
    {
      id: 'csaal1-input',
      type: 'input-boxes' as const,
      content: \`
**Applied Recall** ✍️

1) ArrayList can only store _______ types, not primitives (use wrapper classes like Integer).

2) To get the number of elements in an ArrayList, use the _______ method.

3) The automatic conversion of int to Integer is called _______.
      \`,
      exercise: {
        boxes: 3,
        correctAnswers: ['object', 'size()', 'autoboxing'],
        hint1: 'Wrapper classes wrap primitives into these.',
        hint2: 'Similar to length but with parentheses.',
        hint3: 'Auto + boxing the primitive into a wrapper.',
        explanation: 'ArrayList stores object types only. size() returns element count. Autoboxing = int to Integer conversion.'
      }
    },
    {
      id: 'csaal1-dropdown',
      type: 'dropdown-select' as const,
      content: \`
**Compare Array vs ArrayList** 🔍
      \`,
      exercise: {
        dropdowns: [
          {
            label: 'To access element at index 3: array uses arr[3], ArrayList uses ___',
            options: ['list.get(3)', 'list[3]', 'list.at(3)', 'list.index(3)']
          },
          {
            label: 'To get the number of elements: array uses arr.length, ArrayList uses ___',
            options: ['list.size()', 'list.length', 'list.length()', 'list.count()']
          },
          {
            label: 'When you remove an element from an ArrayList, elements after it ___',
            options: ['Shift left to fill the gap', 'Stay in place (leaving null)', 'Shift right', 'Are also removed']
          }
        ],
        correctAnswers: ['list.get(3)', 'list.size()', 'Shift left to fill the gap'],
        hint1: 'ArrayList uses methods, not bracket notation.',
        hint2: 'size() with parentheses.',
        hint3: 'ArrayList maintains contiguous storage.',
        explanation: 'get(i) for access. size() for count. Elements shift left after remove().'
      }
    },
    {
      id: 'csaal1-strategy',
      type: 'text' as const,
      content: \`
## AP Exam Strategy: ArrayList

- **arr.length** (field) vs **list.size()** (method) — know the distinction
- **arr[i]** vs **list.get(i)** — arrays use brackets, ArrayList uses methods
- ArrayList CANNOT store primitives — must use Integer, Double, Boolean
- When removing elements while traversing, indices shift! Traverse backward or adjust the index
- add(i, obj) shifts existing elements RIGHT; remove(i) shifts elements LEFT
- ArrayList is required for FRQ problems involving dynamic collections
      \`
    },
    {
      id: 'csaal1-applied',
      type: 'multiple-choice' as const,
      content: \`
**AP-Style Application** 🎯
      \`,
      exercise: {
        questions: [
          {
            question: 'ArrayList<Integer> list contains [5, 10, 15, 20]. After list.add(2, 12), what is the list?',
            options: [
              '[5, 10, 12, 15, 20]',
              '[5, 10, 12, 20]',
              '[5, 12, 10, 15, 20]',
              '[5, 10, 15, 12, 20]'
            ],
            correctAnswer: 0,
            explanation: 'add(2, 12) inserts 12 at index 2, shifting 15 and 20 to the right. Result: [5, 10, 12, 15, 20]. The list grows by one element.'
          },
          {
            question: 'What happens when you try: ArrayList<int> nums = new ArrayList<>();',
            options: [
              'An empty ArrayList is created successfully',
              'A compile error: cannot use primitive type int with ArrayList',
              'An ArrayList of size 0 with default values',
              'A runtime error'
            ],
            correctAnswer: 1,
            explanation: 'ArrayList cannot use primitive types. int must be replaced with Integer. This is a compile-time error, one of the most common AP CSA mistakes.'
          }
        ]
      }
    }
  ]
};
`);

// ─── 2. ArrayList Usage ───
write('csa-arraylist-usage-part1.ts', `export const csaArraylistUsagePart1Data = {
  topicSlug: 'csa-arraylist-usage',
  sections: [
    {
      id: 'csaalu1-intro',
      type: 'text' as const,
      content: \`
# 📋 ArrayList Algorithms

**Part 1 of 7 — Removing, Searching, and Common Patterns**

---

## The Remove-While-Traversing Trap

\\\`\\\`\\\`java
// BUGGY: Skips elements after removal!
ArrayList<String> words = new ArrayList<>();
// words = ["cat", "dog", "cat", "bird"]
for (int i = 0; i < words.size(); i++) {
    if (words.get(i).equals("cat")) {
        words.remove(i);
        // After removing index 0: ["dog", "cat", "bird"]
        // i becomes 1, skipping "dog" -> misses second "cat"!
    }
}
\\\`\\\`\\\`

### Three Correct Solutions

\\\`\\\`\\\`java
// Solution 1: Decrement i after removal
for (int i = 0; i < words.size(); i++) {
    if (words.get(i).equals("cat")) {
        words.remove(i);
        i--;  // Recheck this index
    }
}

// Solution 2: Traverse backward
for (int i = words.size() - 1; i >= 0; i--) {
    if (words.get(i).equals("cat")) {
        words.remove(i);  // Removal does not affect earlier indices
    }
}

// Solution 3: Use while loop
int i = 0;
while (i < words.size()) {
    if (words.get(i).equals("cat")) {
        words.remove(i);  // Do NOT increment i
    } else {
        i++;
    }
}
\\\`\\\`\\\`

> 🔑 **Backward traversal** is the safest and simplest approach for removing elements, since removing a later element does not affect the indices of earlier ones.
      \`
    },
    {
      id: 'csaalu1-quiz1',
      type: 'multiple-choice' as const,
      content: \`
**Concept Check** 🎯
      \`,
      exercise: {
        questions: [
          {
            question: 'Why does removing elements while traversing forward cause bugs?',
            options: [
              'The ArrayList becomes null after removal',
              'Elements shift left, so the next element moves to the current index and gets skipped',
              'The remove method does not work inside loops',
              'Forward loops are always slower than backward loops'
            ],
            correctAnswer: 1,
            explanation: 'When you remove element at index i, all later elements shift left by one. The element that was at i+1 is now at i. When i increments, it skips that element.'
          },
          {
            question: 'Which traversal direction avoids the remove-while-traversing bug without extra logic?',
            options: [
              'Forward (i = 0 to size)',
              'Backward (i = size-1 to 0)',
              'Random order',
              'Every other element'
            ],
            correctAnswer: 1,
            explanation: 'Traversing backward means removals only affect indices AFTER the current position (which have already been processed). No elements are skipped.'
          }
        ]
      }
    },
    {
      id: 'csaalu1-content',
      type: 'text' as const,
      content: \`
## Common ArrayList Algorithms

### Finding the Maximum
\\\`\\\`\\\`java
public int findMax(ArrayList<Integer> list) {
    int max = list.get(0);
    for (int i = 1; i < list.size(); i++) {
        if (list.get(i) > max) {
            max = list.get(i);
        }
    }
    return max;
}
\\\`\\\`\\\`

### Removing All Occurrences
\\\`\\\`\\\`java
public void removeAll(ArrayList<String> list, String target) {
    for (int i = list.size() - 1; i >= 0; i--) {
        if (list.get(i).equals(target)) {
            list.remove(i);
        }
    }
}
\\\`\\\`\\\`

### Building a Filtered List
\\\`\\\`\\\`java
public ArrayList<Integer> getEvens(ArrayList<Integer> list) {
    ArrayList<Integer> evens = new ArrayList<>();
    for (int val : list) {
        if (val % 2 == 0) {
            evens.add(val);
        }
    }
    return evens;
}
\\\`\\\`\\\`

### Removing Duplicates
\\\`\\\`\\\`java
public ArrayList<String> removeDups(ArrayList<String> list) {
    ArrayList<String> result = new ArrayList<>();
    for (String s : list) {
        if (!result.contains(s)) {
            result.add(s);
        }
    }
    return result;
}
\\\`\\\`\\\`
      \`
    },
    {
      id: 'csaalu1-input',
      type: 'input-boxes' as const,
      content: \`
**Applied Recall** ✍️

1) When removing elements from an ArrayList in a forward loop, you must _______ the index after each removal to avoid skipping.

2) The safest way to remove elements while traversing is to iterate _______.

3) To check if an ArrayList contains a specific value, use the _______ method.
      \`,
      exercise: {
        boxes: 3,
        correctAnswers: ['decrement', 'backward', 'contains'],
        hint1: 'i-- after removal.',
        hint2: 'Start from the end and go down.',
        hint3: 'Returns true if the value is in the list.',
        explanation: 'Decrement i after removal. Backward traversal is safest. contains() checks for membership.'
      }
    },
    {
      id: 'csaalu1-dropdown',
      type: 'dropdown-select' as const,
      content: \`
**Choose the Pattern** 🔍
      \`,
      exercise: {
        dropdowns: [
          {
            label: 'To build a new list with only elements matching a condition, use the ___ pattern',
            options: ['Filter (create new list, add matching elements)', 'Remove (delete non-matching from original)', 'Sort (reorder elements)', 'Swap (exchange elements)']
          },
          {
            label: 'list.set(i, newVal) ___ the size of the ArrayList',
            options: ['Does not change (replaces in place)', 'Increases by 1', 'Decreases by 1', 'Doubles']
          },
          {
            label: 'enhanced for loop on an ArrayList should NOT be used when you need to ___',
            options: ['Remove elements during traversal', 'Read each element', 'Print each element', 'Calculate a sum']
          }
        ],
        correctAnswers: ['Filter (create new list, add matching elements)', 'Does not change (replaces in place)', 'Remove elements during traversal'],
        hint1: 'Create a new list and selectively add.',
        hint2: 'set() replaces; it does not insert.',
        hint3: 'Enhanced for loop cannot safely remove.',
        explanation: 'Filter pattern builds new list. set() replaces in place (same size). Enhanced for cannot remove safely.'
      }
    },
    {
      id: 'csaalu1-strategy',
      type: 'text' as const,
      content: \`
## AP Exam Strategy: ArrayList Algorithms

- The **remove-while-traversing** bug is one of the most commonly tested topics
- Always compare Strings with \\\`.equals()\\\`, never \\\`==\\\`
- Know three solutions: backward loop, i-- after remove, while loop with conditional increment
- FRQ tip: if the question says "remove all X," traverse backward
- The enhanced for loop is read-only for modification purposes — do not add or remove
- \\\`list.remove(i)\\\` returns the removed element — useful for moving elements between lists
      \`
    },
    {
      id: 'csaalu1-applied',
      type: 'multiple-choice' as const,
      content: \`
**AP-Style Application** 🎯
      \`,
      exercise: {
        questions: [
          {
            question: 'ArrayList<Integer> nums = [3, 5, 3, 8, 3]. After removing all 3s with a backward loop, what remains?',
            options: [
              '[5, 8]',
              '[3, 5, 8]',
              '[5, 3, 8]',
              '[5, 8, 3]'
            ],
            correctAnswer: 0,
            explanation: 'Backward traversal: i=4 (3, remove), i=3 (8, keep), i=2 (3, remove), i=1 (5, keep), i=0 (3, remove). Result: [5, 8]. All three 3s are correctly removed.'
          },
          {
            question: 'What is returned by this method for list = [1, 2, 3, 4, 5]?\\npublic ArrayList<Integer> mystery(ArrayList<Integer> list) {\\n    ArrayList<Integer> result = new ArrayList<>();\\n    for (int val : list) {\\n        if (val % 2 == 0) {\\n            result.add(val);\\n        }\\n    }\\n    return result;\\n}',
            options: [
              '[1, 3, 5]',
              '[2, 4]',
              '[1, 2, 3, 4, 5]',
              '[]'
            ],
            correctAnswer: 1,
            explanation: 'The method filters for even numbers (val % 2 == 0). 2 and 4 are even. Result: [2, 4]. This is the filter pattern — build a new list with matching elements.'
          }
        ]
      }
    }
  ]
};
`);

// ─── 3. Inheritance ───
write('csa-inheritance-part1.ts', `export const csaInheritancePart1Data = {
  topicSlug: 'csa-inheritance',
  sections: [
    {
      id: 'csaih1-intro',
      type: 'text' as const,
      content: \`
# 🧬 Inheritance

**Part 1 of 7 — Superclasses, Subclasses, and the extends Keyword**

---

## What Is Inheritance?

Inheritance lets a class (subclass) inherit fields and methods from another class (superclass), enabling code reuse and an "is-a" relationship.

\\\`\\\`\\\`java
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
\\\`\\\`\\\`

> 🔑 **"Is-a" relationship:** A Dog IS-A Animal. The subclass inherits all public methods from the superclass but NOT the constructors and NOT private fields directly.

---

## Key Inheritance Rules

| Rule | Detail |
|------|--------|
| **extends** | Keyword to declare inheritance: \\\`class Dog extends Animal\\\` |
| **super()** | Calls superclass constructor; MUST be first line in subclass constructor |
| **Inherits** | All public/protected methods and fields |
| **Cannot access** | Private fields of superclass (use getters instead) |
| **Single inheritance** | A class can extend only ONE superclass |
      \`
    },
    {
      id: 'csaih1-quiz1',
      type: 'multiple-choice' as const,
      content: \`
**Concept Check** 🎯
      \`,
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
      content: \`
## Method Overriding

\\\`\\\`\\\`java
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
\\\`\\\`\\\`

### Overriding vs Overloading

| Feature | Overriding | Overloading |
|---------|-----------|-------------|
| **Where** | Subclass redefines superclass method | Same class, multiple methods |
| **Signature** | Same name AND same parameters | Same name, DIFFERENT parameters |
| **Return type** | Must be same (or subtype) | Can be different |
| **Determined at** | Runtime (dynamic binding) | Compile time (static binding) |

## Using super to Call Overridden Methods

\\\`\\\`\\\`java
public class Dog extends Animal {
    @Override
    public String speak() {
        return super.speak() + " Woof!"; // Calls Animal.speak() first
    }
}
\\\`\\\`\\\`
      \`
    },
    {
      id: 'csaih1-input',
      type: 'input-boxes' as const,
      content: \`
**Applied Recall** ✍️

1) The keyword _______ is used to declare that a class inherits from another class.

2) A call to the superclass constructor using _______ must be the first line of the subclass constructor.

3) When a subclass provides its own version of an inherited method with the same signature, this is called method _______.
      \`,
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
      content: \`
**Classify the Concept** 🔍
      \`,
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
      content: \`
## AP Exam Strategy: Inheritance

- **super() must be first** in the subclass constructor — if not present, Java auto-inserts \\\`super()\\\` (and the superclass MUST have a no-arg constructor or it fails)
- Private fields are NOT directly accessible in subclasses — always use getters
- **Overriding** = same signature in subclass; **Overloading** = different parameters
- The runtime (actual) type determines which overridden method runs, NOT the declared type
- FRQ 4 is always about inheritance/polymorphism — be comfortable writing subclasses
- Remember: constructors are NOT inherited
      \`
    },
    {
      id: 'csaih1-applied',
      type: 'multiple-choice' as const,
      content: \`
**AP-Style Application** 🎯
      \`,
      exercise: {
        questions: [
          {
            question: 'class Vehicle { }\\nclass Car extends Vehicle {\\n    public Car() { /* no super() call */ }\\n}\\nWhat happens?',
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
            question: 'class A { public int calc() { return 1; } }\\nclass B extends A { public int calc() { return 2; } }\\nA obj = new B();\\nSystem.out.println(obj.calc());\\nWhat is printed?',
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
`);

// ─── 4. Inheritance & Polymorphism ───
write('csa-inheritance-polymorphism-part1.ts', `export const csaInheritancePolymorphismPart1Data = {
  topicSlug: 'csa-inheritance-polymorphism',
  sections: [
    {
      id: 'csaip1-intro',
      type: 'text' as const,
      content: \`
# 🔮 Polymorphism

**Part 1 of 7 — Dynamic Binding, Type Casting, and Object Hierarchies**

---

## What Is Polymorphism?

Polymorphism means "many forms." A superclass reference can hold a subclass object, and the correct overridden method is called at runtime.

\\\`\\\`\\\`java
Animal a1 = new Dog("Rex", "Lab");
Animal a2 = new Cat("Whiskers");

// Both are declared as Animal, but:
a1.speak();  // "Woof!" — Dog version
a2.speak();  // "Meow!" — Cat version
\\\`\\\`\\\`

> 🔑 **Compile-time type** (declared type) determines WHAT methods can be called. **Runtime type** (actual type) determines WHICH version of an overridden method runs.

---

## Compile-Time vs Runtime Type

\\\`\\\`\\\`java
Animal a = new Dog("Rex", "Lab");
//  ^         ^
//  |         Runtime type: Dog
//  Compile-time type: Animal
\\\`\\\`\\\`

| Check | Uses | Determines |
|-------|------|-----------|
| **Compile-time** | Declared type | Which methods are LEGAL to call |
| **Runtime** | Actual type | Which OVERRIDDEN version runs |

\\\`\\\`\\\`java
Animal a = new Dog("Rex", "Lab");
a.speak();     // OK: speak() exists in Animal, Dog version runs
a.getName();   // OK: getName() exists in Animal
// a.getBreed(); // COMPILE ERROR: getBreed() not in Animal
\\\`\\\`\\\`

The compiler only knows \\\`a\\\` is an Animal. Even though the actual object is a Dog, you cannot call Dog-specific methods through an Animal reference without casting.
      \`
    },
    {
      id: 'csaip1-quiz1',
      type: 'multiple-choice' as const,
      content: \`
**Concept Check** 🎯
      \`,
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
      content: \`
## Polymorphism with Arrays and ArrayLists

\\\`\\\`\\\`java
ArrayList<Animal> animals = new ArrayList<>();
animals.add(new Dog("Rex", "Lab"));
animals.add(new Cat("Whiskers"));
animals.add(new Dog("Buddy", "Poodle"));

for (Animal a : animals) {
    System.out.println(a.speak());
}
// Output: Woof! Meow! Woof!
\\\`\\\`\\\`

This is the power of polymorphism: one loop processes different types of objects, each responding with its own behavior.

## Type Casting

\\\`\\\`\\\`java
Animal a = new Dog("Rex", "Lab");

// Downcasting: Animal -> Dog
Dog d = (Dog) a;         // OK at runtime because a IS a Dog
String breed = d.getBreed(); // Now we can call Dog-specific methods

// Dangerous downcast:
Animal a2 = new Cat("Whiskers");
Dog d2 = (Dog) a2;       // ClassCastException at runtime!
\\\`\\\`\\\`

### instanceof Operator
\\\`\\\`\\\`java
if (a instanceof Dog) {
    Dog d = (Dog) a;     // Safe cast
    System.out.println(d.getBreed());
}
\\\`\\\`\\\`

## The Object Class
Every class in Java implicitly extends **Object**. This means every class inherits:
- \\\`toString()\\\` — String representation
- \\\`equals(Object obj)\\\` — equality check
      \`
    },
    {
      id: 'csaip1-input',
      type: 'input-boxes' as const,
      content: \`
**Applied Recall** ✍️

1) Polymorphism means a superclass reference can point to a _______ object.

2) The compile-time type determines which methods are legal; the _______ type determines which overridden version runs.

3) Every class in Java implicitly extends the _______ class.
      \`,
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
      content: \`
**Polymorphism in Practice** 🔍
      \`,
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
      content: \`
## AP Exam Strategy: Polymorphism

- **Compile-time type** = what the compiler sees (left side of =). Determines legal method calls
- **Runtime type** = actual object (right side of new). Determines which overridden version runs
- A superclass reference CANNOT call subclass-specific methods without casting
- Polymorphism with arrays/ArrayLists is a common FRQ pattern — one loop, many types
- instanceof is rarely tested but important for safe downcasting
- Every class extends Object — toString() and equals() are inherited by ALL classes
      \`
    },
    {
      id: 'csaip1-applied',
      type: 'multiple-choice' as const,
      content: \`
**AP-Style Application** 🎯
      \`,
      exercise: {
        questions: [
          {
            question: 'class Shape { public double area() { return 0; } }\\nclass Circle extends Shape { private double r; public Circle(double r) { this.r = r; } public double area() { return Math.PI * r * r; } }\\nShape s = new Circle(5);\\nWhat does s.area() return?',
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
`);

// ─── 5. 2D Array ───
write('csa-2d-array-part1.ts', `export const csa2dArrayPart1Data = {
  topicSlug: 'csa-2d-array',
  sections: [
    {
      id: 'csa2d1-intro',
      type: 'text' as const,
      content: \`
# 🔢 2D Arrays

**Part 1 of 7 — Declaration, Access, and Row-Column Traversal**

---

## What Is a 2D Array?

A 2D array is an "array of arrays" — think of it as a table with rows and columns.

\\\`\\\`\\\`java
// Declaration and initialization
int[][] grid = new int[3][4];  // 3 rows, 4 columns (all 0s)

int[][] matrix = {
    {1, 2, 3},
    {4, 5, 6},
    {7, 8, 9}
};

// Accessing elements
int val = matrix[1][2];  // Row 1, Column 2 = 6
matrix[0][0] = 10;       // Set top-left to 10
\\\`\\\`\\\`

### Visual Layout

|  | Col 0 | Col 1 | Col 2 |
|--|-------|-------|-------|
| **Row 0** | 1 | 2 | 3 |
| **Row 1** | 4 | 5 | 6 |
| **Row 2** | 7 | 8 | 9 |

> 🔑 **First index = row, Second index = column.** \\\`matrix[row][col]\\\` — always row first!

---

## Dimensions

\\\`\\\`\\\`java
int rows = matrix.length;       // Number of rows (3)
int cols = matrix[0].length;    // Number of columns in row 0 (3)
\\\`\\\`\\\`

| Property | Syntax | Description |
|----------|--------|-----------|
| **Number of rows** | \\\`arr.length\\\` | Length of the outer array |
| **Number of columns** | \\\`arr[0].length\\\` | Length of the first inner array |
| **Total elements** | rows x cols | 3 x 3 = 9 elements |
      \`
    },
    {
      id: 'csa2d1-quiz1',
      type: 'multiple-choice' as const,
      content: \`
**Concept Check** 🎯
      \`,
      exercise: {
        questions: [
          {
            question: 'int[][] grid = new int[4][5]; How many total elements does grid have?',
            options: [
              '4',
              '5',
              '9',
              '20'
            ],
            correctAnswer: 3,
            explanation: '4 rows x 5 columns = 20 total elements. grid.length = 4 (rows), grid[0].length = 5 (columns).'
          },
          {
            question: 'What is matrix[2][0] in the matrix {{1,2,3},{4,5,6},{7,8,9}}?',
            options: [
              '3',
              '7',
              '1',
              '4'
            ],
            correctAnswer: 1,
            explanation: 'matrix[2][0] means row 2, column 0. Row 2 is {7, 8, 9}. Column 0 of that row is 7.'
          }
        ]
      }
    },
    {
      id: 'csa2d1-content',
      type: 'text' as const,
      content: \`
## Traversing a 2D Array

### Row-Major Order (Standard)
\\\`\\\`\\\`java
for (int r = 0; r < matrix.length; r++) {
    for (int c = 0; c < matrix[r].length; c++) {
        System.out.print(matrix[r][c] + " ");
    }
    System.out.println();
}
// Output: 1 2 3
//         4 5 6
//         7 8 9
\\\`\\\`\\\`

### Column-Major Order
\\\`\\\`\\\`java
for (int c = 0; c < matrix[0].length; c++) {
    for (int r = 0; r < matrix.length; r++) {
        System.out.print(matrix[r][c] + " ");
    }
    System.out.println();
}
// Output: 1 4 7
//         2 5 8
//         3 6 9
\\\`\\\`\\\`

### Enhanced For Loop
\\\`\\\`\\\`java
for (int[] row : matrix) {
    for (int val : row) {
        System.out.print(val + " ");
    }
    System.out.println();
}
\\\`\\\`\\\`

| Traversal | Outer Loop | Inner Loop | Order |
|-----------|-----------|-----------|-------|
| **Row-major** | Rows | Columns | Left to right, top to bottom |
| **Column-major** | Columns | Rows | Top to bottom, left to right |
      \`
    },
    {
      id: 'csa2d1-input',
      type: 'input-boxes' as const,
      content: \`
**Applied Recall** ✍️

1) To get the number of rows in a 2D array arr, use arr._______.

2) To get the number of columns, use arr[0]._______.

3) In matrix[r][c], the first index represents the _______ and the second represents the column.
      \`,
      exercise: {
        boxes: 3,
        correctAnswers: ['length', 'length', 'row'],
        hint1: 'Outer array length.',
        hint2: 'Inner array length.',
        hint3: 'Row comes first, then column.',
        explanation: 'arr.length = rows. arr[0].length = columns. First index = row.'
      }
    },
    {
      id: 'csa2d1-dropdown',
      type: 'dropdown-select' as const,
      content: \`
**2D Array Access** 🔍
      \`,
      exercise: {
        dropdowns: [
          {
            label: 'Row-major traversal visits elements in order ___',
            options: ['Left to right, top to bottom (row by row)', 'Top to bottom, left to right (column by column)', 'Diagonal only', 'Random order']
          },
          {
            label: 'In the enhanced for loop "for (int[] row : matrix)", each row is ___',
            options: ['A 1D array (one row of the matrix)', 'A single integer', 'The row index', 'A 2D array']
          },
          {
            label: 'new int[3][4] creates a grid with ___ total elements',
            options: ['12', '7', '3', '4']
          }
        ],
        correctAnswers: ['Left to right, top to bottom (row by row)', 'A 1D array (one row of the matrix)', '12'],
        hint1: 'Process each row from left to right.',
        hint2: 'Each element of the outer array is a row (1D array).',
        hint3: '3 rows times 4 columns.',
        explanation: 'Row-major = row by row (L to R). Each row is a 1D array. 3 x 4 = 12 elements.'
      }
    },
    {
      id: 'csa2d1-strategy',
      type: 'text' as const,
      content: \`
## AP Exam Strategy: 2D Arrays

- Always remember: **arr[row][col]** — row FIRST
- \\\`arr.length\\\` = rows, \\\`arr[0].length\\\` = columns
- Row-major vs column-major traversal is regularly tested
- Enhanced for loop: outer variable is a 1D array (the row), inner variable is the element
- Common operations: sum all elements, find max/min, count matches, process specific row/column
- FRQ 4 often involves 2D arrays — practice traversal patterns thoroughly
      \`
    },
    {
      id: 'csa2d1-applied',
      type: 'multiple-choice' as const,
      content: \`
**AP-Style Application** 🎯
      \`,
      exercise: {
        questions: [
          {
            question: 'What is the sum of all elements in this 2D array?\\nint[][] m = {{1, 2}, {3, 4}, {5, 6}};\\nint sum = 0;\\nfor (int[] row : m) {\\n    for (int val : row) {\\n        sum += val;\\n    }\\n}',
            options: [
              '15',
              '21',
              '6',
              '12'
            ],
            correctAnswer: 1,
            explanation: '1 + 2 + 3 + 4 + 5 + 6 = 21. The enhanced for loop visits every element in row-major order and adds each to sum.'
          },
          {
            question: 'int[][] grid = new int[2][3];\\nWhat is grid[1][2]?',
            options: [
              '0',
              '2',
              'null',
              'ArrayIndexOutOfBoundsException'
            ],
            correctAnswer: 0,
            explanation: 'new int[2][3] creates a 2x3 grid filled with default int values (0). grid[1][2] is a valid index (row 1, col 2) and its value is 0.'
          }
        ]
      }
    }
  ]
};
`);

// ─── 6. 2D Arrays (algorithms) ───
write('csa-2d-arrays-part1.ts', `export const csa2dArraysPart1Data = {
  topicSlug: 'csa-2d-arrays',
  sections: [
    {
      id: 'csa2da1-intro',
      type: 'text' as const,
      content: \`
# 🔢 2D Array Algorithms

**Part 1 of 7 — Row/Column Processing, Searching, and Modifying**

---

## Processing Individual Rows or Columns

### Sum of a Specific Row
\\\`\\\`\\\`java
public int rowSum(int[][] matrix, int row) {
    int sum = 0;
    for (int c = 0; c < matrix[row].length; c++) {
        sum += matrix[row][c];
    }
    return sum;
}
\\\`\\\`\\\`

### Sum of a Specific Column
\\\`\\\`\\\`java
public int colSum(int[][] matrix, int col) {
    int sum = 0;
    for (int r = 0; r < matrix.length; r++) {
        sum += matrix[r][col];
    }
    return sum;
}
\\\`\\\`\\\`

> 🔑 **Row processing** fixes the row index and loops over columns. **Column processing** fixes the column index and loops over rows.

---

## Finding a Value in a 2D Array

\\\`\\\`\\\`java
public boolean contains(int[][] matrix, int target) {
    for (int r = 0; r < matrix.length; r++) {
        for (int c = 0; c < matrix[r].length; c++) {
            if (matrix[r][c] == target) {
                return true;
            }
        }
    }
    return false;
}
\\\`\\\`\\\`

| Algorithm | Approach |
|-----------|---------|
| **Row sum/avg** | Fix row, loop columns |
| **Column sum/avg** | Fix column, loop rows |
| **Search** | Nested loops, return true if found |
| **Count matches** | Nested loops, increment counter |
| **Find max/min** | Initialize with [0][0], compare all |
      \`
    },
    {
      id: 'csa2da1-quiz1',
      type: 'multiple-choice' as const,
      content: \`
**Concept Check** 🎯
      \`,
      exercise: {
        questions: [
          {
            question: 'To sum all elements in column 2 of a 2D array, which loop structure is correct?',
            options: [
              'for (int c = 0; c < matrix[2].length; c++) sum += matrix[2][c];',
              'for (int r = 0; r < matrix.length; r++) sum += matrix[r][2];',
              'for (int r = 0; r < matrix[0].length; r++) sum += matrix[2][r];',
              'for (int c = 0; c < matrix.length; c++) sum += matrix[c][c];'
            ],
            correctAnswer: 1,
            explanation: 'To process a specific column, fix the column index (2) and loop over all rows. matrix[r][2] gives the element in row r, column 2 for each row.'
          },
          {
            question: 'How many elements are checked in the WORST case when searching a 3x4 2D array?',
            options: [
              '3',
              '4',
              '7',
              '12'
            ],
            correctAnswer: 3,
            explanation: 'In the worst case (value not found), every element is checked. A 3x4 array has 3 x 4 = 12 elements. Linear search on a 2D array is O(rows x cols).'
          }
        ]
      }
    },
    {
      id: 'csa2da1-content',
      type: 'text' as const,
      content: \`
## Modifying 2D Array Elements

### Multiply All Elements by 2
\\\`\\\`\\\`java
for (int r = 0; r < matrix.length; r++) {
    for (int c = 0; c < matrix[r].length; c++) {
        matrix[r][c] *= 2;
    }
}
\\\`\\\`\\\`

### Replace Negatives with Zero
\\\`\\\`\\\`java
for (int r = 0; r < matrix.length; r++) {
    for (int c = 0; c < matrix[r].length; c++) {
        if (matrix[r][c] < 0) {
            matrix[r][c] = 0;
        }
    }
}
\\\`\\\`\\\`

## Diagonal Elements

\\\`\\\`\\\`java
// Main diagonal (row == col): top-left to bottom-right
// Only works for square matrices!
for (int i = 0; i < matrix.length; i++) {
    System.out.println(matrix[i][i]);
}
\\\`\\\`\\\`

## Edge Elements (Border)
\\\`\\\`\\\`java
// An element is on the edge if:
// r == 0 (first row), r == rows-1 (last row),
// c == 0 (first col), c == cols-1 (last col)
for (int r = 0; r < matrix.length; r++) {
    for (int c = 0; c < matrix[r].length; c++) {
        if (r == 0 || r == matrix.length - 1 ||
            c == 0 || c == matrix[r].length - 1) {
            // This element is on the border
        }
    }
}
\\\`\\\`\\\`
      \`
    },
    {
      id: 'csa2da1-input',
      type: 'input-boxes' as const,
      content: \`
**Applied Recall** ✍️

1) To process a single row, fix the _______ index and loop over columns.

2) Diagonal elements in a square matrix satisfy the condition row == _______.

3) An element is on the border of a 2D array if its row or column index equals 0 or the _______ valid index.
      \`,
      exercise: {
        boxes: 3,
        correctAnswers: ['row', 'col', 'last'],
        hint1: 'Keep the row the same, vary the column.',
        hint2: 'Same row number and column number.',
        hint3: 'The maximum index (length - 1).',
        explanation: 'Fix row to process a row. Diagonal: row == col. Border: index is 0 or last.'
      }
    },
    {
      id: 'csa2da1-dropdown',
      type: 'dropdown-select' as const,
      content: \`
**2D Array Algorithms** 🔍
      \`,
      exercise: {
        dropdowns: [
          {
            label: 'To find the maximum in a 2D array, initialize max with ___ and compare all elements',
            options: ['matrix[0][0]', '0', 'Integer.MAX_VALUE', '-1']
          },
          {
            label: 'Processing the main diagonal of a square matrix requires ___ loop(s)',
            options: ['One loop (for i: matrix[i][i])', 'Two nested loops', 'Three nested loops', 'No loops']
          },
          {
            label: 'An enhanced for loop on a 2D array int[][] m: "for (int[] row : m)" gives each row as ___',
            options: ['A 1D int array', 'A single int', 'An ArrayList', 'A 2D array']
          }
        ],
        correctAnswers: ['matrix[0][0]', 'One loop (for i: matrix[i][i])', 'A 1D int array'],
        hint1: 'Use an actual element as the starting comparison.',
        hint2: 'Diagonal means row index equals column index.',
        hint3: 'The outer array contains 1D arrays (rows).',
        explanation: 'Max init with [0][0]. Diagonal needs one loop. Enhanced for gives 1D rows.'
      }
    },
    {
      id: 'csa2da1-strategy',
      type: 'text' as const,
      content: \`
## AP Exam Strategy: 2D Array Algorithms

- **Row processing** = fix row, vary column. **Column processing** = fix column, vary row
- Use \\\`matrix[r].length\\\` (not \\\`matrix[0].length\\\`) in the inner loop — handles jagged arrays
- Searching a 2D array is just nested linear search
- Know how to find: sum, average, max, min for the whole array, a specific row, or a specific column
- Diagonal, border, and neighbor-checking are common FRQ patterns
- When modifying elements, use standard for loops (not enhanced for)
      \`
    },
    {
      id: 'csa2da1-applied',
      type: 'multiple-choice' as const,
      content: \`
**AP-Style Application** 🎯
      \`,
      exercise: {
        questions: [
          {
            question: 'int[][] m = {{1,2,3},{4,5,6},{7,8,9}};\\nWhat is the sum of the main diagonal?',
            options: [
              '12',
              '15',
              '18',
              '45'
            ],
            correctAnswer: 1,
            explanation: 'Main diagonal: m[0][0]=1, m[1][1]=5, m[2][2]=9. Sum = 1 + 5 + 9 = 15.'
          },
          {
            question: 'How many border elements does a 4x5 2D array have?',
            options: [
              '14',
              '16',
              '18',
              '20'
            ],
            correctAnswer: 0,
            explanation: 'Border = perimeter. Top row: 5, bottom row: 5, left column (minus corners): 2, right column (minus corners): 2. Total: 5 + 5 + 2 + 2 = 14. Formula: 2(rows + cols) - 4.'
          }
        ]
      }
    }
  ]
};
`);

console.log('Done with CSA batch 3 (6 files)');
