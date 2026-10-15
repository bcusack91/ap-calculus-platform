export const csaWritingClassesPart1Data = {
  topicSlug: 'csa-writing-classes',
  sections: [
    {
      id: 'csawc1-intro',
      type: 'text' as const,
      content: `
# ✍️ Writing Classes

**Part 1 of 7 — Instance Variables, Constructors, and Methods**

---

## Anatomy of a Java Class

\`\`\`java
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

    // Method that builds a description from the fields
    public String getSummary() {
        return name + " (Grade " + grade + ", GPA: " + gpa + ")";
    }
}
\`\`\`

> 🔑 **Encapsulation:** Instance variables should be \`private\`. Access them through \`public\` methods (getters/setters). This protects data from invalid modifications.

---

## Key Concepts

| Concept | Description |
|---------|-----------|
| **Instance variable** | Data stored in each object; declared with \`private\` |
| **Constructor** | Special method that initializes an object; same name as class |
| **Accessor (getter)** | Returns value of a private field; no parameters |
| **Mutator (setter)** | Changes value of a private field; void return type |
| **this** | Refers to the current object; resolves name ambiguity |
      `
    },
    {
      id: 'csawc1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Why should instance variables be declared private?',
            options: [
              'Private variables are read faster because the JVM can cache them',
              'To enforce encapsulation and prevent direct access from outside the class',
              'Java will not compile a class whose instance variables are public',
              'Only private variables can be given values inside a constructor'
            ],
            correctAnswer: 1,
            explanation: 'Encapsulation (data hiding) is a core OOP principle. Making fields private forces users to go through methods, which can validate input and maintain object integrity.'
          },
          {
            question: 'What is the purpose of the "this" keyword in a constructor?',
            options: [
              'It creates a new object of the class before the constructor body runs',
              'It makes the parameter keep its value after the constructor ends',
              'It distinguishes the instance variable from the parameter with the same name',
              'It makes the instance variable public so other classes can read it'
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
      content: `
## Constructor Details

\`\`\`java
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
\`\`\`

### Constructor Rules
- Same name as the class
- **No return type** (not even void)
- Called automatically when \`new\` is used
- A class can have multiple constructors (**overloading**)
- If you write NO constructors, Java provides a default no-arg constructor
- If you write ANY constructor, Java does NOT provide the default

## Methods That Return a String
- A method can build a String from the object's instance variables and **return** it; the caller decides whether to print it
- Concatenation does the work: numbers and booleans in the expression are converted to text

\`\`\`java
Student s = new Student("Alex", 11, 3.8);
System.out.println(s.getSummary());
// Output: Alex (Grade 11, GPA: 3.8)
\`\`\`

Writing your own \`toString\` method is not on the AP exam, so classes on the exam return descriptions from ordinary methods like \`getSummary\`.
      `
    },
    {
      id: 'csawc1-input',
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

1) A method that returns the value of a private instance variable is called an _______ (or getter).

2) A method that modifies a private instance variable is called a _______ (or setter).

3) The keyword _______ refers to the current object within a class.
      `,
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
      content: `
**Classify the Method** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'public String getName() { return name; } is a(n) ___',
            options: ['Accessor (getter) method', 'Mutator (setter) method', 'Constructor', 'Static method']
          },
          {
            label: 'A constructor has ___ return type',
            options: ['No', 'A void', 'An int', 'A boolean']
          },
          {
            label: 'If a class has no constructors written, Java provides ___',
            options: ['A default no-argument constructor', 'A parameterized constructor', 'Nothing — the class cannot be instantiated', 'A static factory method']
          }
        ],
        correctAnswers: ['Accessor (getter) method', 'No', 'A default no-argument constructor'],
        hint1: 'Returns data without modifying anything.',
        hint2: 'Constructors are special — they have no return type at all.',
        hint3: 'Java auto-generates one only if you write none.',
        explanation: 'getName() = accessor. Constructors have no return type, not even void. Java provides default constructor only if none are written.'
      }
    },
    {
      id: 'csawc1-strategy',
      type: 'text' as const,
      content: `
## AP Exam Strategy: Writing Classes

- **Encapsulation** is tested in every FRQ — always make instance variables private
- Know the difference between accessor and mutator methods
- Constructor questions often test: what happens if you write a parameterized constructor but no no-arg constructor? (Answer: \`new ClassName()\` will NOT compile)
- A method that **returns** a String is different from one that **prints** it — FRQ 2 specifications say which one they want
- The \`this\` keyword resolves parameter/field name conflicts
- Practice writing complete classes from scratch — FRQ 2 is always a class design question
      `
    },
    {
      id: 'csawc1-applied',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A class has only this constructor: public Dog(String name) { this.name = name; }\nWhich statement will cause a compile error?',
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
            question: 'What is printed?\npublic class Point {\n    private int x, y;\n    public Point(int x, int y) { this.x = x; this.y = y; }\n    public String getLabel() { return "(" + x + "," + y + ")"; }\n}\nPoint p = new Point(3, 7);\nSystem.out.println("Location: " + p.getLabel());',
            options: [
              'Location: (3,7)',
              'Location: (7,3)',
              'Compile error',
              'Location: (x,y)'
            ],
            correctAnswer: 0,
            explanation: 'getLabel builds the String from the values stored in x and y, in that order, so it returns "(3,7)" and the output is "Location: (3,7)". Swapping the values reverses the field order, and the method uses the stored numbers, not the variable names.'
          }
        ]
      }
    }
  ]
};
