const fs = require('fs');
const path = require('path');
const dir = path.join(__dirname, '..', 'src', 'data', 'interactive-lessons');

function write(name, content) {
  fs.writeFileSync(path.join(dir, name), content);
  console.log('Wrote:', name);
}

// ─── 1. Writing Classes ───
write('csa-writing-classes-part1.ts', `export const csaWritingClassesPart1Data = {
  topicSlug: 'csa-writing-classes',
  sections: [
    {
      id: 'csawc1-intro',
      type: 'text' as const,
      content: \`
# ✍️ Writing Classes

**Part 1 of 7 — Instance Variables, Constructors, and Methods**

---

## Anatomy of a Java Class

\\\`\\\`\\\`java
public class Student {
    // Instance variables (fields)
    private String name;
    private int grade;
    private double gpa;

    // Constructor
    public Student(String name, int grade, double gpa) {
        this.name = name;
        this.grade = grade;
        this.gpa = gpa;
    }

    // Accessor (getter) method
    public String getName() {
        return name;
    }

    // Mutator (setter) method
    public void setGrade(int newGrade) {
        grade = newGrade;
    }

    // toString method
    public String toString() {
        return name + " (Grade " + grade + ", GPA: " + gpa + ")";
    }
}
\\\`\\\`\\\`

> 🔑 **Encapsulation:** Instance variables should be \\\`private\\\`. Access them through \\\`public\\\` methods (getters/setters). This protects data from invalid modifications.

---

## Key Concepts

| Concept | Description |
|---------|-----------|
| **Instance variable** | Data stored in each object; declared with \\\`private\\\` |
| **Constructor** | Special method that initializes an object; same name as class |
| **Accessor (getter)** | Returns value of a private field; no parameters |
| **Mutator (setter)** | Changes value of a private field; void return type |
| **this** | Refers to the current object; resolves name ambiguity |
      \`
    },
    {
      id: 'csawc1-quiz1',
      type: 'multiple-choice' as const,
      content: \`
**Concept Check** 🎯
      \`,
      exercise: {
        questions: [
          {
            question: 'Why should instance variables be declared private?',
            options: [
              'Private variables run faster than public ones',
              'To enforce encapsulation and prevent direct access from outside the class',
              'Java requires all variables to be private',
              'Private variables use less memory'
            ],
            correctAnswer: 1,
            explanation: 'Encapsulation (data hiding) is a core OOP principle. Making fields private forces users to go through methods, which can validate input and maintain object integrity.'
          },
          {
            question: 'What is the purpose of the "this" keyword in a constructor?',
            options: [
              'It creates a new object',
              'It calls another constructor',
              'It distinguishes the instance variable from the parameter with the same name',
              'It makes the variable public'
            ],
            correctAnswer: 2,
            explanation: 'When a parameter and instance variable have the same name, "this.name" refers to the instance variable and "name" refers to the parameter. This resolves the ambiguity.'
          }
        ]
      }
    },
    {
      id: 'csawc1-content',
      type: 'text' as const,
      content: \`
## Constructor Details

\\\`\\\`\\\`java
// No-argument (default) constructor
public Student() {
    name = "Unknown";
    grade = 9;
    gpa = 0.0;
}

// Parameterized constructor
public Student(String name, int grade, double gpa) {
    this.name = name;
    this.grade = grade;
    this.gpa = gpa;
}
\\\`\\\`\\\`

### Constructor Rules
- Same name as the class
- **No return type** (not even void)
- Called automatically when \\\`new\\\` is used
- A class can have multiple constructors (**overloading**)
- If you write NO constructors, Java provides a default no-arg constructor
- If you write ANY constructor, Java does NOT provide the default

## The toString() Method
- Automatically called when an object is printed or concatenated with a String
- Should return a meaningful String representation of the object

\\\`\\\`\\\`java
Student s = new Student("Alex", 11, 3.8);
System.out.println(s);  // Calls s.toString() automatically
// Output: Alex (Grade 11, GPA: 3.8)
\\\`\\\`\\\`
      \`
    },
    {
      id: 'csawc1-input',
      type: 'input-boxes' as const,
      content: \`
**Applied Recall** ✍️

1) A method that returns the value of a private instance variable is called an _______ (or getter).

2) A method that modifies a private instance variable is called a _______ (or setter).

3) The keyword _______ refers to the current object within a class.
      \`,
      exercise: {
        boxes: 3,
        correctAnswers: ['accessor', 'mutator', 'this'],
        hint1: 'It accesses the data for you.',
        hint2: 'It mutates (changes) the data.',
        hint3: 'Used to distinguish instance variables from parameters.',
        explanation: 'Accessor = getter. Mutator = setter. this = current object reference.'
      }
    },
    {
      id: 'csawc1-dropdown',
      type: 'dropdown-select' as const,
      content: \`
**Classify the Method** 🔍
      \`,
      exercise: {
        dropdowns: [
          {
            label: 'public String getName() { return name; } is a(n) ___',
            options: ['Accessor (getter) method', 'Mutator (setter) method', 'Constructor', 'Static method']
          },
          {
            label: 'A constructor has ___ return type',
            options: ['No return type (not even void)', 'void', 'The class type', 'int']
          },
          {
            label: 'If a class has no constructors written, Java provides ___',
            options: ['A default no-argument constructor', 'A parameterized constructor', 'Nothing — the class cannot be instantiated', 'A static factory method']
          }
        ],
        correctAnswers: ['Accessor (getter) method', 'No return type (not even void)', 'A default no-argument constructor'],
        hint1: 'Returns data without modifying anything.',
        hint2: 'Constructors are special — they have no return type at all.',
        hint3: 'Java auto-generates one only if you write none.',
        explanation: 'getName() = accessor. Constructors have no return type. Java provides default constructor only if none are written.'
      }
    },
    {
      id: 'csawc1-strategy',
      type: 'text' as const,
      content: \`
## AP Exam Strategy: Writing Classes

- **Encapsulation** is tested in every FRQ — always make instance variables private
- Know the difference between accessor and mutator methods
- Constructor questions often test: what happens if you write a parameterized constructor but no no-arg constructor? (Answer: \\\`new ClassName()\\\` will NOT compile)
- toString() is automatically called by \\\`System.out.println()\\\` — know this for tracing output
- The \\\`this\\\` keyword resolves parameter/field name conflicts
- Practice writing complete classes from scratch — FRQ 2 is always a class design question
      \`
    },
    {
      id: 'csawc1-applied',
      type: 'multiple-choice' as const,
      content: \`
**AP-Style Application** 🎯
      \`,
      exercise: {
        questions: [
          {
            question: 'A class has only this constructor: public Dog(String name) { this.name = name; }\\nWhich statement will cause a compile error?',
            options: [
              'Dog d = new Dog("Rex");',
              'Dog d = new Dog();',
              'Dog d = new Dog("Buddy");',
              'Dog d = new Dog("Max");'
            ],
            correctAnswer: 1,
            explanation: 'Since a parameterized constructor exists, Java does NOT provide a default no-arg constructor. new Dog() has no matching constructor, so it fails to compile.'
          },
          {
            question: 'What is printed?\\npublic class Point {\\n    private int x, y;\\n    public Point(int x, int y) { this.x = x; this.y = y; }\\n    public String toString() { return "(" + x + "," + y + ")"; }\\n}\\nPoint p = new Point(3, 7);\\nSystem.out.println("Location: " + p);',
            options: [
              'Location: (3,7)',
              'Location: Point@abc123',
              'Compile error',
              'Location: null'
            ],
            correctAnswer: 0,
            explanation: 'String concatenation with an object calls toString() automatically. The toString() method returns "(3,7)", so the output is "Location: (3,7)".'
          }
        ]
      }
    }
  ]
};
`);

// ─── 2. Class Design ───
write('csa-class-design-part1.ts', `export const csaClassDesignPart1Data = {
  topicSlug: 'csa-class-design',
  sections: [
    {
      id: 'csacd1-intro',
      type: 'text' as const,
      content: \`
# 🏛️ Class Design

**Part 1 of 7 — Static vs Instance, Scope, and Method Design**

---

## Static vs Instance

| Feature | Instance | Static |
|---------|----------|--------|
| **Belongs to** | Each object | The class itself |
| **Access** | \\\`object.method()\\\` | \\\`ClassName.method()\\\` |
| **Can access** | Instance + static members | Static members only |
| **Keyword** | (none) | \\\`static\\\` |
| **Example** | \\\`s.length()\\\` | \\\`Math.sqrt(16)\\\` |

\\\`\\\`\\\`java
public class Counter {
    private static int totalCount = 0;  // Shared by ALL Counter objects
    private int myCount = 0;            // Unique to each Counter object

    public Counter() {
        totalCount++;
    }

    public void increment() {
        myCount++;
    }

    public static int getTotalCount() {
        return totalCount;      // OK - static method accessing static variable
        // return myCount;      // ERROR - static method cannot access instance variable
    }
}
\\\`\\\`\\\`

> 🔑 **Static variables** are shared across all instances of a class. Changing it in one place changes it everywhere. Great for counting objects or shared constants.
      \`
    },
    {
      id: 'csacd1-quiz1',
      type: 'multiple-choice' as const,
      content: \`
**Concept Check** 🎯
      \`,
      exercise: {
        questions: [
          {
            question: 'After creating three Counter objects, what does Counter.getTotalCount() return?',
            options: [
              '0',
              '1',
              '3',
              'Compile error'
            ],
            correctAnswer: 2,
            explanation: 'Each time the constructor runs, totalCount++ is executed. After 3 objects are created, totalCount = 3. Since totalCount is static, it is shared by all Counter instances.'
          },
          {
            question: 'Why would a static method cause a compile error if it tries to access an instance variable?',
            options: [
              'Static methods run faster and cannot use slow instance data',
              'Static methods belong to the class, not any object, so there is no "this" to reference',
              'Instance variables are always private',
              'Static methods can only return void'
            ],
            correctAnswer: 1,
            explanation: 'A static method is called on the class (e.g., Math.sqrt()), not on an object. Since no object exists in that context, there are no instance variables to access.'
          }
        ]
      }
    },
    {
      id: 'csacd1-content',
      type: 'text' as const,
      content: \`
## Variable Scope

| Scope | Where Declared | Where Accessible |
|-------|---------------|-----------------|
| **Instance variable** | In the class, outside methods | Throughout the entire class |
| **Local variable** | Inside a method or block | Only within that method/block |
| **Parameter** | In method signature | Only within that method |
| **Loop variable** | In for/while loop header | Only within that loop |

\\\`\\\`\\\`java
public class Example {
    private int x = 10;           // Instance: accessible everywhere in class

    public void demo(int y) {     // Parameter: accessible in demo()
        int z = 20;               // Local: accessible in demo()
        for (int i = 0; i < 5; i++) {  // Loop var: accessible in loop only
            // x, y, z, and i are all accessible here
        }
        // i is NOT accessible here
    }
    // y and z are NOT accessible here
}
\\\`\\\`\\\`

## Method Design Principles

| Principle | Description |
|-----------|-----------|
| **Single responsibility** | Each method should do one thing well |
| **Parameters** | Pass in what the method needs; avoid accessing global state |
| **Return values** | Return computed results rather than printing them |
| **Method overloading** | Multiple methods with same name but different parameters |
      \`
    },
    {
      id: 'csacd1-input',
      type: 'input-boxes' as const,
      content: \`
**Applied Recall** ✍️

1) A variable declared with the static keyword is shared by all _______ of the class.

2) A variable declared inside a method is called a _______ variable and exists only while that method runs.

3) Having multiple methods with the same name but different parameter lists is called method _______.
      \`,
      exercise: {
        boxes: 3,
        correctAnswers: ['instances', 'local', 'overloading'],
        hint1: 'Every object created from the class shares it.',
        hint2: 'It is local to the method.',
        hint3: 'Same name, different signatures.',
        explanation: 'Static variables shared by all instances. Local variables exist only in their method. Method overloading = same name, different parameters.'
      }
    },
    {
      id: 'csacd1-dropdown',
      type: 'dropdown-select' as const,
      content: \`
**Classify the Concept** 🔍
      \`,
      exercise: {
        dropdowns: [
          {
            label: 'A variable declared in a for loop header (int i = 0) has ___ scope',
            options: ['Loop scope (only inside the loop)', 'Method scope', 'Class scope', 'Global scope']
          },
          {
            label: 'Math.PI is a static final variable. It is accessed using ___',
            options: ['The class name: Math.PI', 'An object: new Math().PI', 'A method: Math.getPI()', 'Import only']
          },
          {
            label: 'Two methods named calculate(int x) and calculate(int x, int y) demonstrate ___',
            options: ['Method overloading', 'Method overriding', 'Inheritance', 'Polymorphism']
          }
        ],
        correctAnswers: ['Loop scope (only inside the loop)', 'The class name: Math.PI', 'Method overloading'],
        hint1: 'The variable dies when the loop ends.',
        hint2: 'Static members are accessed via the class.',
        hint3: 'Same name, different parameter count.',
        explanation: 'Loop variables have loop scope. Static members accessed via class name. Same name + different params = overloading.'
      }
    },
    {
      id: 'csacd1-strategy',
      type: 'text' as const,
      content: \`
## AP Exam Strategy: Class Design

- Know the difference between **static and instance** — this determines how you call methods and access data
- **Scope** questions test whether a variable is accessible in a given context
- A static method CANNOT access instance variables (no \\\`this\\\` exists)
- **Overloading**: same name, different parameters. **Overriding**: subclass redefines superclass method (covered in inheritance)
- FRQ tip: when designing a class, always start with private instance variables, then write the constructor(s), then methods
      \`
    },
    {
      id: 'csacd1-applied',
      type: 'multiple-choice' as const,
      content: \`
**AP-Style Application** 🎯
      \`,
      exercise: {
        questions: [
          {
            question: 'Which statement about static variables is FALSE?',
            options: [
              'Static variables are shared by all instances of a class',
              'Static variables can be accessed using the class name',
              'Each object gets its own copy of a static variable',
              'Static variables exist even before any objects are created'
            ],
            correctAnswer: 2,
            explanation: 'Static variables have ONE copy shared by all instances. They do NOT give each object its own copy — that is what instance variables do.'
          },
          {
            question: 'What is printed?\\npublic void test() {\\n    int x = 5;\\n    for (int i = 0; i < 3; i++) {\\n        x += i;\\n    }\\n    System.out.println(x);\\n}',
            options: [
              '5',
              '8',
              '6',
              'Compile error (i not accessible)'
            ],
            correctAnswer: 1,
            explanation: 'x starts at 5. Loop: i=0, x=5+0=5; i=1, x=5+1=6; i=2, x=6+2=8. x is a local variable with method scope, so it is accessible after the loop. Final x = 8.'
          }
        ]
      }
    }
  ]
};
`);

// ─── 3. Iteration ───
write('csa-iteration-part1.ts', `export const csaIterationPart1Data = {
  topicSlug: 'csa-iteration',
  sections: [
    {
      id: 'csait1-intro',
      type: 'text' as const,
      content: \`
# 🔁 Iteration

**Part 1 of 7 — While Loops, For Loops, and Loop Patterns**

---

## While Loop

\\\`\\\`\\\`java
int count = 0;
while (count < 5) {
    System.out.println(count);
    count++;
}
// Prints: 0, 1, 2, 3, 4
\\\`\\\`\\\`

### Structure
1. Initialize a control variable BEFORE the loop
2. Check the condition BEFORE each iteration
3. Update the control variable INSIDE the loop
4. If you forget step 3, you get an **infinite loop**

---

## For Loop

\\\`\\\`\\\`java
for (int i = 0; i < 5; i++) {
    System.out.println(i);
}
// Prints: 0, 1, 2, 3, 4
\\\`\\\`\\\`

| Component | Purpose | Example |
|-----------|---------|---------|
| **Initialization** | Set starting value | \\\`int i = 0\\\` |
| **Condition** | Continue while true | \\\`i < 5\\\` |
| **Update** | Change after each iteration | \\\`i++\\\` |

> 🔑 A for loop runs exactly **(end - start)** times when counting from start to end-1 with step 1.
      \`
    },
    {
      id: 'csait1-quiz1',
      type: 'multiple-choice' as const,
      content: \`
**Concept Check** 🎯
      \`,
      exercise: {
        questions: [
          {
            question: 'How many times does this loop execute?\\nfor (int i = 1; i <= 10; i++) { /* body */ }',
            options: [
              '9 times',
              '10 times',
              '11 times',
              '0 times'
            ],
            correctAnswer: 1,
            explanation: 'i starts at 1 and runs while i <= 10. Values of i: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 = 10 iterations. When i becomes 11, the condition is false and the loop stops.'
          },
          {
            question: 'What happens if the update statement (i++) is removed from a while loop?',
            options: [
              'The loop runs once and stops',
              'The loop runs backwards',
              'The loop runs forever (infinite loop)',
              'A compile error occurs'
            ],
            correctAnswer: 2,
            explanation: 'Without updating the control variable, the condition never becomes false, so the loop runs forever. This is an infinite loop — one of the most common bugs.'
          }
        ]
      }
    },
    {
      id: 'csait1-content',
      type: 'text' as const,
      content: \`
## Common Loop Patterns

### 1. Accumulator (Sum/Count)
\\\`\\\`\\\`java
int sum = 0;
for (int i = 1; i <= 100; i++) {
    sum += i;
}
// sum = 5050 (sum of 1 to 100)
\\\`\\\`\\\`

### 2. Counting Occurrences
\\\`\\\`\\\`java
int count = 0;
for (int i = 0; i < str.length(); i++) {
    if (str.substring(i, i + 1).equals("a")) {
        count++;
    }
}
\\\`\\\`\\\`

### 3. Finding Max/Min
\\\`\\\`\\\`java
int max = arr[0];
for (int i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
        max = arr[i];
    }
}
\\\`\\\`\\\`

### 4. String Traversal
\\\`\\\`\\\`java
String reversed = "";
for (int i = str.length() - 1; i >= 0; i--) {
    reversed += str.substring(i, i + 1);
}
\\\`\\\`\\\`

## Off-By-One Errors
- Most common loop bug: running one too many or one too few times
- \\\`i < n\\\` runs n times (0 to n-1)
- \\\`i <= n\\\` runs n+1 times (0 to n)
- Always check: Does the first iteration work? Does the last iteration work?
      \`
    },
    {
      id: 'csait1-input',
      type: 'input-boxes' as const,
      content: \`
**Applied Recall** ✍️

1) A for loop with for (int i = 0; i < n; i++) runs exactly _______ times.

2) A loop that never terminates because the condition is always true is called an _______ loop.

3) Running one too many or one too few iterations is called an _______-by-one error.
      \`,
      exercise: {
        boxes: 3,
        correctAnswers: ['n', 'infinite', 'off'],
        hint1: 'From 0 to n-1 is n iterations.',
        hint2: 'It goes on forever.',
        hint3: 'One step too far or too short.',
        explanation: 'i < n runs n times. Infinite loop = condition never false. Off-by-one = boundary error.'
      }
    },
    {
      id: 'csait1-dropdown',
      type: 'dropdown-select' as const,
      content: \`
**Trace the Loop** 🔍
      \`,
      exercise: {
        dropdowns: [
          {
            label: 'for (int i = 0; i < 3; i++) prints i values ___',
            options: ['0, 1, 2', '0, 1, 2, 3', '1, 2, 3', '1, 2']
          },
          {
            label: 'for (int i = 10; i > 0; i -= 3) prints i values ___',
            options: ['10, 7, 4, 1', '10, 7, 4', '7, 4, 1', '10, 8, 6, 4, 2']
          },
          {
            label: 'A loop that sums values into a running total uses the ___ pattern',
            options: ['Accumulator', 'Sentinel', 'Binary search', 'Recursion']
          }
        ],
        correctAnswers: ['0, 1, 2', '10, 7, 4, 1', 'Accumulator'],
        hint1: 'i starts at 0, stops before 3.',
        hint2: 'Start at 10, subtract 3 each time, stop when i <= 0.',
        hint3: 'sum += value each iteration.',
        explanation: 'i < 3: {0,1,2}. i > 0, i-=3: {10,7,4,1}. Running total = accumulator pattern.'
      }
    },
    {
      id: 'csait1-strategy',
      type: 'text' as const,
      content: \`
## AP Exam Strategy: Iteration

- **Trace loops carefully** — write out each value of the control variable
- Always check the boundary: does the condition use < or <=?
- Know the four common patterns: accumulator, counter, min/max finder, string traversal
- Convert between while and for loops — they are interchangeable
- Watch for **off-by-one errors** — the most tested loop bug on the AP exam
- Nested loops: the inner loop runs completely for each iteration of the outer loop
      \`
    },
    {
      id: 'csait1-applied',
      type: 'multiple-choice' as const,
      content: \`
**AP-Style Application** 🎯
      \`,
      exercise: {
        questions: [
          {
            question: 'What is the value of sum after this code?\\nint sum = 0;\\nfor (int i = 1; i <= 5; i++) {\\n    if (i % 2 == 1) {\\n        sum += i;\\n    }\\n}',
            options: [
              '6',
              '9',
              '15',
              '10'
            ],
            correctAnswer: 1,
            explanation: 'The loop adds only odd values of i: 1 + 3 + 5 = 9. i=1 (odd, add), i=2 (even, skip), i=3 (odd, add), i=4 (even, skip), i=5 (odd, add).'
          },
          {
            question: 'How many times does the inner print execute?\\nfor (int i = 0; i < 3; i++) {\\n    for (int j = 0; j < 4; j++) {\\n        System.out.print("*");\\n    }\\n}',
            options: [
              '7',
              '12',
              '4',
              '3'
            ],
            correctAnswer: 1,
            explanation: 'The outer loop runs 3 times. For each outer iteration, the inner loop runs 4 times. Total: 3 x 4 = 12 stars printed.'
          }
        ]
      }
    }
  ]
};
`);

// ─── 4. Loops ───
write('csa-loops-part1.ts', `export const csaLoopsPart1Data = {
  topicSlug: 'csa-loops',
  sections: [
    {
      id: 'csalp1-intro',
      type: 'text' as const,
      content: \`
# 🔄 Loops (Advanced)

**Part 1 of 7 — Nested Loops, Loop Analysis, and String Processing**

---

## Nested Loops

\\\`\\\`\\\`java
// Print a 3x4 grid of stars
for (int row = 0; row < 3; row++) {
    for (int col = 0; col < 4; col++) {
        System.out.print("* ");
    }
    System.out.println();  // New line after each row
}
\\\`\\\`\\\`

Output:
\\\`\\\`\\\`
* * * *
* * * *
* * * *
\\\`\\\`\\\`

> 🔑 **Nested loop execution count:** If the outer loop runs M times and the inner loop runs N times per outer iteration, the inner body runs **M x N** times total.

---

## Loop Analysis Table

| Outer i | Inner j values | Operations |
|---------|---------------|-----------|
| i = 0 | j = 0, 1, 2, 3 | 4 operations |
| i = 1 | j = 0, 1, 2, 3 | 4 operations |
| i = 2 | j = 0, 1, 2, 3 | 4 operations |
| **Total** | | **12 operations** |
      \`
    },
    {
      id: 'csalp1-quiz1',
      type: 'multiple-choice' as const,
      content: \`
**Concept Check** 🎯
      \`,
      exercise: {
        questions: [
          {
            question: 'What is printed?\\nfor (int i = 1; i <= 3; i++) {\\n    for (int j = 1; j <= i; j++) {\\n        System.out.print("*");\\n    }\\n    System.out.println();\\n}',
            options: [
              '***\\n***\\n***',
              '*\\n**\\n***',
              '***\\n**\\n*',
              '*\\n*\\n*'
            ],
            correctAnswer: 1,
            explanation: 'i=1: j goes 1 to 1 (one star). i=2: j goes 1 to 2 (two stars). i=3: j goes 1 to 3 (three stars). The inner loop count depends on the outer loop variable, creating a triangle.'
          },
          {
            question: 'A nested loop where the outer runs n times and inner runs n times has what total complexity?',
            options: [
              'n operations',
              '2n operations',
              'n squared operations',
              'n + 1 operations'
            ],
            correctAnswer: 2,
            explanation: 'When both loops run n times, the inner body executes n x n = n squared times. This is O(n squared) complexity — important for understanding algorithm efficiency.'
          }
        ]
      }
    },
    {
      id: 'csalp1-content',
      type: 'text' as const,
      content: \`
## String Processing with Loops

### Reversing a String
\\\`\\\`\\\`java
String original = "hello";
String reversed = "";
for (int i = original.length() - 1; i >= 0; i--) {
    reversed += original.substring(i, i + 1);
}
// reversed = "olleh"
\\\`\\\`\\\`

### Checking for a Palindrome
\\\`\\\`\\\`java
public boolean isPalindrome(String s) {
    for (int i = 0; i < s.length() / 2; i++) {
        String left = s.substring(i, i + 1);
        String right = s.substring(s.length() - 1 - i, s.length() - i);
        if (!left.equals(right)) {
            return false;
        }
    }
    return true;
}
\\\`\\\`\\\`

### Counting Characters
\\\`\\\`\\\`java
public int countChar(String s, String target) {
    int count = 0;
    for (int i = 0; i < s.length(); i++) {
        if (s.substring(i, i + 1).equals(target)) {
            count++;
        }
    }
    return count;
}
\\\`\\\`\\\`

## Sentinel-Controlled Loops
\\\`\\\`\\\`java
Scanner input = new Scanner(System.in);
int sum = 0;
int value = input.nextInt();
while (value != -1) {    // -1 is the sentinel value
    sum += value;
    value = input.nextInt();
}
\\\`\\\`\\\`
      \`
    },
    {
      id: 'csalp1-input',
      type: 'input-boxes' as const,
      content: \`
**Applied Recall** ✍️

1) In a nested loop where the outer runs 5 times and the inner runs 4 times, the inner body executes _______ times total.

2) To get character at index i of a String in the AP subset, use s.substring(i, i + _______).

3) A special value that signals the end of input in a while loop is called a _______ value.
      \`,
      exercise: {
        boxes: 3,
        correctAnswers: ['20', '1', 'sentinel'],
        hint1: '5 x 4 = ?',
        hint2: 'substring takes (start, end) where end is exclusive.',
        hint3: 'It guards or watches for the stopping condition.',
        explanation: '5 x 4 = 20 total inner executions. substring(i, i+1) extracts one character. Sentinel = stopping signal value.'
      }
    },
    {
      id: 'csalp1-dropdown',
      type: 'dropdown-select' as const,
      content: \`
**Analyze the Loop** 🔍
      \`,
      exercise: {
        dropdowns: [
          {
            label: 'A loop that prints * then ** then *** (growing triangle) requires the inner loop bound to depend on ___',
            options: ['The outer loop variable (j <= i)', 'A constant value', 'The array length', 'A random number']
          },
          {
            label: 'To traverse a String character by character, loop from i = 0 to ___',
            options: ['i < s.length()', 'i <= s.length()', 'i < s.length() - 1', 'i < s.size()']
          },
          {
            label: 'The time complexity of a nested loop with independent bounds (both O(n)) is ___',
            options: ['O(n squared)', 'O(n)', 'O(2n)', 'O(log n)']
          }
        ],
        correctAnswers: ['The outer loop variable (j <= i)', 'i < s.length()', 'O(n squared)'],
        hint1: 'Each row has stars equal to the row number.',
        hint2: 'Indices go from 0 to length-1.',
        hint3: 'n times n = n squared.',
        explanation: 'Triangle: inner depends on outer. String traversal: i < length(). Nested loops: O(n) x O(n) = O(n squared).'
      }
    },
    {
      id: 'csalp1-strategy',
      type: 'text' as const,
      content: \`
## AP Exam Strategy: Advanced Loops

- **Trace nested loops systematically** — write a table of outer and inner variable values
- Know that inner loop count = outer iterations x inner iterations
- String processing: always use \\\`substring(i, i+1)\\\` to get a single character in the AP subset
- **Common error:** using \\\`i <= s.length()\\\` instead of \\\`i < s.length()\\\` (StringIndexOutOfBoundsException)
- Palindrome and reversal are classic FRQ patterns — practice these
- If the inner loop bound depends on the outer variable, the total count is a triangular series
      \`
    },
    {
      id: 'csalp1-applied',
      type: 'multiple-choice' as const,
      content: \`
**AP-Style Application** 🎯
      \`,
      exercise: {
        questions: [
          {
            question: 'What is the value of result after this code?\\nString s = "abcabc";\\nint result = 0;\\nfor (int i = 0; i < s.length(); i++) {\\n    if (s.substring(i, i+1).equals("a")) {\\n        result++;\\n    }\\n}',
            options: [
              '1',
              '2',
              '3',
              '6'
            ],
            correctAnswer: 1,
            explanation: 'The loop checks each character. "a" appears at index 0 and index 3. So result = 2.'
          },
          {
            question: 'How many total stars are printed?\\nfor (int i = 1; i <= 4; i++) {\\n    for (int j = 1; j <= i; j++) {\\n        System.out.print("*");\\n    }\\n}',
            options: [
              '4',
              '10',
              '16',
              '8'
            ],
            correctAnswer: 1,
            explanation: 'i=1: 1 star. i=2: 2 stars. i=3: 3 stars. i=4: 4 stars. Total: 1+2+3+4 = 10 stars. This is a triangular number series.'
          }
        ]
      }
    }
  ]
};
`);

// ─── 5. Array ───
write('csa-array-part1.ts', `export const csaArrayPart1Data = {
  topicSlug: 'csa-array',
  sections: [
    {
      id: 'csaar1-intro',
      type: 'text' as const,
      content: \`
# 📊 Arrays

**Part 1 of 7 — Declaration, Initialization, and Traversal**

---

## Array Basics

\\\`\\\`\\\`java
// Declaration and initialization
int[] scores = new int[5];           // {0, 0, 0, 0, 0}
int[] grades = {95, 87, 92, 78, 88}; // Literal initialization

// Accessing elements
scores[0] = 100;     // Set first element
int val = grades[2]; // Get third element (92)

// Length (field, not method!)
int size = grades.length;  // 5 (no parentheses!)
\\\`\\\`\\\`

> 🔑 **Arrays are fixed-size** — once created, an array cannot grow or shrink. Use \\\`ArrayList\\\` for dynamic sizing.

---

## Array Properties

| Property | Detail |
|----------|--------|
| **Zero-indexed** | First element at index 0, last at length - 1 |
| **Fixed size** | Cannot change size after creation |
| **Default values** | int: 0, double: 0.0, boolean: false, objects: null |
| **Length** | \\\`arr.length\\\` (field, no parentheses) |
| **Type safety** | All elements must be the same type |

### Common Error: ArrayIndexOutOfBoundsException
\\\`\\\`\\\`java
int[] arr = new int[5];
arr[5] = 10;  // ERROR! Valid indices are 0-4
arr[-1] = 5;  // ERROR! No negative indices
\\\`\\\`\\\`
      \`
    },
    {
      id: 'csaar1-quiz1',
      type: 'multiple-choice' as const,
      content: \`
**Concept Check** 🎯
      \`,
      exercise: {
        questions: [
          {
            question: 'What is the default value of elements in new int[10]?',
            options: [
              '-1',
              'null',
              '0',
              'Undefined'
            ],
            correctAnswer: 2,
            explanation: 'When an int array is created with new, all elements are initialized to 0. double arrays default to 0.0, boolean arrays to false, and object arrays to null.'
          },
          {
            question: 'int[] arr = {10, 20, 30}; What is arr.length?',
            options: [
              '2',
              '3',
              '4',
              '30'
            ],
            correctAnswer: 1,
            explanation: 'The array has 3 elements. arr.length returns the total number of elements (3), not the last index (2). Note: length is a field (no parentheses), unlike String length().'
          }
        ]
      }
    },
    {
      id: 'csaar1-content',
      type: 'text' as const,
      content: \`
## Array Traversal

### Standard For Loop (Most Common)
\\\`\\\`\\\`java
int[] arr = {3, 7, 2, 9, 5};

// Forward traversal
for (int i = 0; i < arr.length; i++) {
    System.out.println(arr[i]);
}

// Backward traversal
for (int i = arr.length - 1; i >= 0; i--) {
    System.out.println(arr[i]);
}
\\\`\\\`\\\`

### Enhanced For Loop (For-Each)
\\\`\\\`\\\`java
for (int value : arr) {
    System.out.println(value);
}
\\\`\\\`\\\`

### When to Use Which Loop?

| Use Standard For Loop When: | Use Enhanced For Loop When: |
|----------------------------|---------------------------|
| You need the index | You only need the values |
| You need to modify elements | You are just reading elements |
| You traverse backwards | Forward traversal is fine |
| You process two arrays simultaneously | Processing one array simply |

## Common Array Algorithms

| Algorithm | Approach |
|-----------|---------|
| **Sum/Average** | Accumulator pattern: sum += arr[i] |
| **Find max/min** | Start with arr[0], compare each element |
| **Search** | Linear search: check each element |
| **Count matches** | Counter pattern with if condition |
      \`
    },
    {
      id: 'csaar1-input',
      type: 'input-boxes' as const,
      content: \`
**Applied Recall** ✍️

1) In Java, array indices start at _______ and end at length - 1.

2) To get the number of elements in an array arr, use arr._______ (no parentheses).

3) Trying to access an index outside the valid range causes an _______ exception.
      \`,
      exercise: {
        boxes: 3,
        correctAnswers: ['0', 'length', 'ArrayIndexOutOfBoundsException'],
        hint1: 'Zero-based indexing.',
        hint2: 'A field property, not a method.',
        hint3: 'The index is out of bounds of the array.',
        explanation: 'Arrays start at index 0. arr.length (no parentheses). ArrayIndexOutOfBoundsException for invalid indices.'
      }
    },
    {
      id: 'csaar1-dropdown',
      type: 'dropdown-select' as const,
      content: \`
**Choose the Right Approach** 🔍
      \`,
      exercise: {
        dropdowns: [
          {
            label: 'To set each element of an array to its index value, use a ___',
            options: ['Standard for loop (need index to assign values)', 'Enhanced for-each loop', 'While loop only', 'Do-while loop only']
          },
          {
            label: 'After int[] a = new int[3]; the values are ___',
            options: ['{0, 0, 0}', '{1, 2, 3}', '{null, null, null}', 'Uninitialized (random)']
          },
          {
            label: 'arr.length vs. str.length(): the array version ___',
            options: ['Has no parentheses (it is a field)', 'Has parentheses (it is a method)', 'Returns the last index', 'Returns the number of non-zero elements']
          }
        ],
        correctAnswers: ['Standard for loop (need index to assign values)', '{0, 0, 0}', 'Has no parentheses (it is a field)'],
        hint1: 'You need the index i to do arr[i] = i.',
        hint2: 'int arrays default to 0.',
        hint3: 'arr.length vs. str.length() — spot the difference.',
        explanation: 'Need index → standard for. int[] defaults to 0s. arr.length is a field (no parens).'
      }
    },
    {
      id: 'csaar1-strategy',
      type: 'text' as const,
      content: \`
## AP Exam Strategy: Arrays

- **arr.length** (no parentheses) vs **str.length()** (has parentheses) — this is tested every year
- Enhanced for loop CANNOT modify array elements — it only reads copies of values
- Common error: for (int i = 0; i <= arr.length; i++) — the \\\`<=\\\` causes ArrayIndexOutOfBoundsException
- Know all standard array algorithms: sum, average, max, min, search, count, shift, reverse
- Arrays are **reference types** — assigning one array to another creates an alias, not a copy
      \`
    },
    {
      id: 'csaar1-applied',
      type: 'multiple-choice' as const,
      content: \`
**AP-Style Application** 🎯
      \`,
      exercise: {
        questions: [
          {
            question: 'What is the value of max after this code?\\nint[] arr = {4, 8, 2, 9, 1};\\nint max = arr[0];\\nfor (int i = 1; i < arr.length; i++) {\\n    if (arr[i] > max) {\\n        max = arr[i];\\n    }\\n}',
            options: [
              '4',
              '8',
              '9',
              '1'
            ],
            correctAnswer: 2,
            explanation: 'max starts at 4. Then: 8 > 4 (max=8), 2 > 8 (no), 9 > 8 (max=9), 1 > 9 (no). Final max = 9. Starting i at 1 is efficient since max already has arr[0].'
          },
          {
            question: 'What does this enhanced for loop print?\\nint[] nums = {5, 10, 15};\\nfor (int n : nums) {\\n    n = n * 2;\\n}\\nSystem.out.println(nums[1]);',
            options: [
              '10',
              '20',
              '15',
              '30'
            ],
            correctAnswer: 0,
            explanation: 'The enhanced for loop variable n is a COPY of each element. Modifying n does not change the original array. nums[1] remains 10.'
          }
        ]
      }
    }
  ]
};
`);

// ─── 6. Arrays (second file - more advanced) ───
write('csa-arrays-part1.ts', `export const csaArraysPart1Data = {
  topicSlug: 'csa-arrays',
  sections: [
    {
      id: 'csaas1-intro',
      type: 'text' as const,
      content: \`
# 📊 Array Algorithms

**Part 1 of 7 — Searching, Shifting, and Array Manipulation**

---

## Linear Search

\\\`\\\`\\\`java
public int linearSearch(int[] arr, int target) {
    for (int i = 0; i < arr.length; i++) {
        if (arr[i] == target) {
            return i;  // Return index of target
        }
    }
    return -1;  // Not found
}
\\\`\\\`\\\`

| Property | Detail |
|----------|--------|
| **Best case** | Target is at index 0: 1 comparison |
| **Worst case** | Target not found: n comparisons |
| **Average case** | n/2 comparisons |
| **Works on** | Sorted or unsorted arrays |

---

## Shifting Elements

### Removing an Element (Shift Left)
\\\`\\\`\\\`java
// Remove element at index 2 from {10, 20, 30, 40, 50}
// Shift elements left to fill the gap
for (int i = 2; i < arr.length - 1; i++) {
    arr[i] = arr[i + 1];
}
// Result: {10, 20, 40, 50, 50}
// Note: array size unchanged; last element duplicated
\\\`\\\`\\\`

### Inserting an Element (Shift Right)
\\\`\\\`\\\`java
// Insert 25 at index 2 in {10, 20, 30, 40, 50}
// Shift elements right first (start from end!)
for (int i = arr.length - 1; i > 2; i--) {
    arr[i] = arr[i - 1];
}
arr[2] = 25;
// Result: {10, 20, 25, 30, 40}
// Note: last element (50) is lost
\\\`\\\`\\\`

> 🔑 **Shifting direction matters!** Shift LEFT = go forward. Shift RIGHT = go backward to avoid overwriting.
      \`
    },
    {
      id: 'csaas1-quiz1',
      type: 'multiple-choice' as const,
      content: \`
**Concept Check** 🎯
      \`,
      exercise: {
        questions: [
          {
            question: 'In a linear search, what is returned if the target is NOT found in the array?',
            options: [
              '0',
              'null',
              '-1',
              'The last element'
            ],
            correctAnswer: 2,
            explanation: 'By convention, linear search returns -1 to indicate the target was not found. This is because 0 is a valid index, so it cannot be used as a "not found" indicator.'
          },
          {
            question: 'When inserting an element into an array by shifting right, you should start the shift from:',
            options: [
              'The beginning of the array',
              'The insertion point',
              'The end of the array (working backward)',
              'The middle of the array'
            ],
            correctAnswer: 2,
            explanation: 'Shifting right starting from the end prevents overwriting data. If you start from the insertion point, each shift overwrites the next element before it can be moved.'
          }
        ]
      }
    },
    {
      id: 'csaas1-content',
      type: 'text' as const,
      content: \`
## Reversing an Array

\\\`\\\`\\\`java
public void reverse(int[] arr) {
    for (int i = 0; i < arr.length / 2; i++) {
        int temp = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = temp;
    }
}
\\\`\\\`\\\`

Key insight: Only loop through **half** the array. Swap element i with element (length - 1 - i).

## Consecutive Pairs

\\\`\\\`\\\`java
// Check if any consecutive elements are equal
public boolean hasConsecutiveDuplicates(int[] arr) {
    for (int i = 0; i < arr.length - 1; i++) {
        if (arr[i] == arr[i + 1]) {
            return true;
        }
    }
    return false;
}
\\\`\\\`\\\`

> ⚠️ Loop to \\\`arr.length - 1\\\` (not \\\`arr.length\\\`) when comparing arr[i] with arr[i + 1] to avoid ArrayIndexOutOfBoundsException.

## Selection Sort (AP Exam Reference)

\\\`\\\`\\\`java
for (int i = 0; i < arr.length - 1; i++) {
    int minIdx = i;
    for (int j = i + 1; j < arr.length; j++) {
        if (arr[j] < arr[minIdx]) {
            minIdx = j;
        }
    }
    // Swap arr[i] and arr[minIdx]
    int temp = arr[i];
    arr[i] = arr[minIdx];
    arr[minIdx] = temp;
}
\\\`\\\`\\\`
      \`
    },
    {
      id: 'csaas1-input',
      type: 'input-boxes' as const,
      content: \`
**Applied Recall** ✍️

1) Linear search checks each element one by one and has worst-case complexity of _______ comparisons for an array of n elements.

2) When comparing consecutive pairs arr[i] and arr[i+1], the loop should run to arr.length - _______.

3) To swap two values, you need a _______ variable to hold one value temporarily.
      \`,
      exercise: {
        boxes: 3,
        correctAnswers: ['n', '1', 'temp'],
        hint1: 'It may need to check every single element.',
        hint2: 'Stopping one before the end prevents going out of bounds.',
        hint3: 'A holding variable for the swap.',
        explanation: 'Linear search = O(n) worst case. Loop to length - 1 for consecutive pairs. temp variable for swapping.'
      }
    },
    {
      id: 'csaas1-dropdown',
      type: 'dropdown-select' as const,
      content: \`
**Choose the Algorithm** 🔍
      \`,
      exercise: {
        dropdowns: [
          {
            label: 'To find if a value exists in an unsorted array, use ___',
            options: ['Linear search', 'Binary search', 'Selection sort first', 'Hash lookup']
          },
          {
            label: 'When reversing an array in-place, the loop runs ___',
            options: ['arr.length / 2 times', 'arr.length times', 'arr.length - 1 times', '1 time']
          },
          {
            label: 'Selection sort finds the minimum of the unsorted portion and ___',
            options: ['Swaps it to the front of the unsorted portion', 'Inserts it at the end', 'Deletes it', 'Copies the entire array']
          }
        ],
        correctAnswers: ['Linear search', 'arr.length / 2 times', 'Swaps it to the front of the unsorted portion'],
        hint1: 'Binary search requires a sorted array.',
        hint2: 'Swap pairs from both ends toward the middle.',
        hint3: 'Select the minimum, place it in position.',
        explanation: 'Unsorted = linear search. Reverse loops halfway. Selection sort = find min, swap to front.'
      }
    },
    {
      id: 'csaas1-strategy',
      type: 'text' as const,
      content: \`
## AP Exam Strategy: Array Algorithms

- **Linear search** returns -1 for not found — check the return value in conditionals
- **Shifting arrays** is a very common FRQ task — know both left and right shifts
- When shifting RIGHT, start from the END to avoid overwriting
- **Reversing** only needs length/2 iterations — do not double-swap!
- Know how to write a **swap** using a temp variable — this is fundamental
- Selection sort and insertion sort are on the AP quick reference — know how they work
      \`
    },
    {
      id: 'csaas1-applied',
      type: 'multiple-choice' as const,
      content: \`
**AP-Style Application** 🎯
      \`,
      exercise: {
        questions: [
          {
            question: 'After running this code on arr = {1, 2, 3, 4, 5}, what is the array?\\nfor (int i = 0; i < arr.length - 1; i++) {\\n    arr[i] = arr[i + 1];\\n}',
            options: [
              '{2, 3, 4, 5, 5}',
              '{1, 1, 2, 3, 4}',
              '{5, 4, 3, 2, 1}',
              '{2, 3, 4, 5, 1}'
            ],
            correctAnswer: 0,
            explanation: 'This shifts all elements LEFT by one position. arr[0]=arr[1]=2, arr[1]=arr[2]=3, arr[2]=arr[3]=4, arr[3]=arr[4]=5. The last element (arr[4]) remains 5. Result: {2,3,4,5,5}.'
          },
          {
            question: 'How many comparisons does selection sort make on an array of 5 elements?',
            options: [
              '5',
              '10',
              '25',
              '4'
            ],
            correctAnswer: 1,
            explanation: 'Pass 1: 4 comparisons. Pass 2: 3 comparisons. Pass 3: 2 comparisons. Pass 4: 1 comparison. Total: 4+3+2+1 = 10. For n elements: n(n-1)/2 comparisons.'
          }
        ]
      }
    }
  ]
};
`);

console.log('Done with CSA batch 2 (6 files)');
