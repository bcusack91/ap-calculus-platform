export const csaClassDesignPart1Data = {
  topicSlug: 'csa-class-design',
  sections: [
    {
      id: 'csacd1-intro',
      type: 'text' as const,
      content: `
# 🏛️ Class Design

**Part 1 of 7 — Static vs Instance, Scope, and Method Design**

---

## Static vs Instance

| Feature | Instance | Static |
|---------|----------|--------|
| **Belongs to** | Each object | The class itself |
| **Access** | \`object.method()\` | \`ClassName.method()\` |
| **Can access** | Instance + static members | Static members directly; instance members only through an object reference |
| **Keyword** | (none) | \`static\` |
| **Example** | \`s.length()\` | \`Math.sqrt(16)\` |

\`\`\`java
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
        // return myCount;      // ERROR - no current object here, so the bare name myCount has no meaning
    }
}
\`\`\`

> 🔑 **Static variables** are shared across all instances of a class. Changing it in one place changes it everywhere. Great for counting objects or shared constants.

> ⚠️ A static method has no \`this\`, so it cannot use an instance variable by its bare name. It **can** reach instance data through an object reference it is given or creates, for example \`c.myCount\` for a Counter \`c\` passed in as a parameter.
      `
    },
    {
      id: 'csacd1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
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
            question: 'Why does a static method cause a compile error if it uses an instance variable by its bare name, as in return myCount;?',
            options: [
              'Static methods run faster and cannot use slow instance data',
              'Static methods belong to the class, not any object, so there is no "this" to reference',
              'Instance variables are always private',
              'Static methods can only return void'
            ],
            correctAnswer: 1,
            explanation: 'A static method is called on the class (e.g., Math.sqrt()), not on an object, so there is no current object whose myCount the bare name could mean. It can still reach instance data through an object reference, such as c.myCount for a Counter c passed in as a parameter.'
          }
        ]
      }
    },
    {
      id: 'csacd1-content',
      type: 'text' as const,
      content: `
## Variable Scope

| Scope | Where Declared | Where Accessible |
|-------|---------------|-----------------|
| **Instance variable** | In the class, outside methods | Throughout the entire class |
| **Local variable** | Inside a method or block | Only within that method/block |
| **Parameter** | In method signature | Only within that method |
| **Loop variable** | In for/while loop header | Only within that loop |

\`\`\`java
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
\`\`\`

## Method Design Principles

| Principle | Description |
|-----------|-----------|
| **Single responsibility** | Each method should do one thing well |
| **Parameters** | Pass in what the method needs; avoid accessing global state |
| **Return values** | Return computed results rather than printing them |
| **Method overloading** | Multiple methods with same name but different parameters |
      `
    },
    {
      id: 'csacd1-input',
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

1) A variable declared with the static keyword is shared by all _______ of the class.

2) A variable declared inside a method is called a _______ variable and exists only while that method runs.

3) Having multiple methods with the same name but different parameter lists is called method _______.
      `,
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
      content: `
**Classify the Concept** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'A variable declared in a for loop header (int i = 0) has ___ scope',
            options: ['Loop scope (only inside the loop)', 'Method scope', 'Class scope', 'Global scope']
          },
          {
            label: 'Integer.MAX_VALUE is a static final variable. It is accessed using ___',
            options: ['The class name: Integer.MAX_VALUE', 'A new object: new Integer().MAX_VALUE', 'A method: Integer.getMaxValue()', 'The bare name: MAX_VALUE']
          },
          {
            label: 'Two methods named calculate(int x) and calculate(int x, int y) demonstrate ___',
            options: ['Method overloading', 'Method overriding', 'Inheritance', 'Polymorphism']
          }
        ],
        correctAnswers: ['Loop scope (only inside the loop)', 'The class name: Integer.MAX_VALUE', 'Method overloading'],
        hint1: 'The variable dies when the loop ends.',
        hint2: 'Static members are accessed via the class.',
        hint3: 'Same name, different parameter count.',
        explanation: 'Loop variables have loop scope. Static members accessed via class name. Same name + different params = overloading.'
      }
    },
    {
      id: 'csacd1-strategy',
      type: 'text' as const,
      content: `
## AP Exam Strategy: Class Design

- Know the difference between **static and instance** — this determines how you call methods and access data
- **Scope** questions test whether a variable is accessible in a given context
- A static method has no \`this\`: it cannot use instance variables by their bare names, but it can reach them through an object reference (\`c.myCount\`)
- **Overloading**: same name, different parameter lists. A different return type alone does not make a legal overload
- FRQ tip: when designing a class, always start with private instance variables, then write the constructor(s), then methods
      `
    },
    {
      id: 'csacd1-applied',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application** 🎯
      `,
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
            question: 'What is printed?\npublic void test() {\n    int x = 5;\n    for (int i = 0; i < 3; i++) {\n        x += i;\n    }\n    System.out.println(x);\n}',
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
