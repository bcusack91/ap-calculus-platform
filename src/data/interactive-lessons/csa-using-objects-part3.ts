export const csaUsingObjectsPart3Data = {
  topicSlug: 'csa-using-objects',
  sections: [
    {
      id: 'csausing3-intro',
      type: 'text' as const,
      content: `
# 🏗️ Using Objects

**Part 3 of 7 — Method Signatures, Parameters, and Return Values**

---

A **method** is a named block of code that runs only when it is called. To call one correctly you read its **header**, the first line of its documentation.

## Anatomy of a Method Header

\`\`\`java
public boolean needsHeat(double roomTemp)
//     return  method    parameter list:
//     type    name      (type and name of each parameter)
\`\`\`

The **signature** of a method is its **name plus the ordered list of parameter types**. The return type and the parameter names are **not** part of the signature. A method with no parameters has an empty list.

| Header (from the Thermostat class in Part 2) | Signature | Return type |
|-----------------------------------------------|-----------|-------------|
| \`public int getTarget()\` | \`getTarget()\` | int |
| \`public void adjust(int delta)\` | \`adjust(int)\` | void (returns nothing) |
| \`public boolean needsHeat(double roomTemp)\` | \`needsHeat(double)\` | boolean |

### Parameters vs. arguments

- A **parameter** is a variable declared in the header: \`delta\` in \`adjust(int delta)\`.
- An **argument** is the value supplied in the call: \`5\` in \`t.adjust(5)\`.

When a method is called, the flow of control **jumps into the method**, runs its body, and then **returns to the statement that made the call**, bringing back a value if the method is non-void.
      `
    },
    {
      id: 'csausing3-matching',
      type: 'text' as const,
      content: `
## Matching Arguments to Parameters

Arguments must match the parameter list in **number**, **order**, and **type**. An int argument may go to a double parameter, because Java widens it automatically (65 becomes 65.0). A double argument may **not** go to an int parameter.

Assume \`Thermostat t = new Thermostat(70);\` has run.

| Call | Compiles? | Why |
|------|-----------|-----|
| \`t.adjust(5)\` | ✅ | one int for one int parameter |
| \`t.needsHeat(65)\` | ✅ | the int 65 widens to 65.0 |
| \`t.adjust(2.5)\` | ❌ | a double cannot go to an int parameter |
| \`t.adjust()\` | ❌ | no adjust method takes zero arguments |
| \`t.adjust(3, 4)\` | ❌ | too many arguments |
| \`t.needsHeat("65")\` | ❌ | a String is not a double |
| \`t.getTarget\` | ❌ | a method call always needs parentheses |

> 🔑 **Key Idea:** Line up the call against the header, slot by slot. Count first, then check each type in order.
      `
    },
    {
      id: 'csausing3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯

Thermostat headers, for reference:

\`\`\`java
public Thermostat(int target)
public int getTarget()
public void adjust(int delta)
public boolean needsHeat(double roomTemp)
\`\`\`
      `,
      exercise: {
        questions: [
          {
            question: 'Assume Thermostat t = new Thermostat(70); has run. Which call compiles?',
            options: [
              't.needsHeat(65)',
              't.adjust(2.5)',
              't.getTarget(7)',
              't.adjust()'
            ],
            correctAnswer: 0,
            explanation: 'needsHeat expects a double, and the int 65 widens to 65.0 automatically. adjust needs exactly one int, so 2.5 and an empty list both fail, and getTarget takes no arguments.'
          },
          {
            question: 'Which header could be added to the Thermostat class without causing a compile error?',
            options: [
              'public double adjust(int amount)',
              'public void adjust(int change)',
              'public int adjust(double delta)',
              'public boolean adjust(int delta)'
            ],
            correctAnswer: 2,
            explanation: 'adjust(double) has a different parameter list from adjust(int), so it is a legal overload even with a different return type. The other three all have the signature adjust(int), and a different return type or parameter name does not create a new signature.'
          }
        ]
      }
    },
    {
      id: 'csausing3-returns',
      type: 'text' as const,
      content: `
## void and Non-void Methods

- A **void** method does its job and returns nothing. Its call is a statement on its own.
- A **non-void** method returns a value of its return type. To use that value, the call must be **part of an expression**: stored in a variable, printed, or combined with other values. If you ignore it, the value is simply lost.

### Worked Example: Using return values

\`\`\`java
Thermostat t = new Thermostat(70);
t.getTarget();                      // legal, but the returned 70 is thrown away
int goal = t.getTarget();           // goal is 70
System.out.println(t.getTarget() + 5);
t.adjust(-2);                       // void call: target becomes 68
boolean cold = t.needsHeat(66.0);   // 66.0 is below 68, so cold is true
\`\`\`

**Output:** \`75\`, because the call returns 70 and 70 + 5 is 75.

### Statements that do not compile

\`\`\`java
int x = t.adjust(-2);       // adjust is void: there is no value to store
t.adjust(-2) + 1;           // nothing to add to
\`\`\`

A non-void value can also go somewhere wider than its type: \`double d = t.getTarget();\` compiles, and d holds 70.0.
      `
    },
    {
      id: 'csausing3-static',
      type: 'text' as const,
      content: `
## Class Methods vs. Instance Methods

| | Class method | Instance method |
|---|---|---|
| Header contains | \`static\` | no \`static\` |
| Belongs to | the class | each object |
| Called with | \`ClassName.method(args)\` | \`objectRef.method(args)\` |
| Example | \`Math.sqrt(25.0)\` | \`t.getTarget()\` |

When a class method is called from inside its own class, the class name is optional. An instance method always needs an object: \`Thermostat.getTarget()\` does **not** compile, because Java cannot tell which thermostat's target you mean.

## Overloading

Methods are **overloaded** when they share a name but have different signatures. Here is a class of class methods:

\`\`\`java
public class Geometry
{
    /** Returns the perimeter of a square with the given side. */
    public static int perimeter(int side)
    { /* implementation not shown */ }

    /** Returns the perimeter of a rectangle. */
    public static int perimeter(int length, int width)
    { /* implementation not shown */ }

    /** Returns the perimeter of a square with the given side. */
    public static double perimeter(double side)
    { /* implementation not shown */ }
}
\`\`\`

### Worked Example: Which version runs?

Java picks the version whose parameter list matches the arguments. When an exact match exists, Java uses it.

| Call | Version used | Returns |
|------|--------------|---------|
| \`Geometry.perimeter(5)\` | \`perimeter(int)\` | 20 |
| \`Geometry.perimeter(5.0)\` | \`perimeter(double)\` | 20.0 |
| \`Geometry.perimeter(3, 4)\` | \`perimeter(int, int)\` | 14 |
| \`Geometry.perimeter(2.5)\` | \`perimeter(double)\` | 10.0 |
| \`Geometry.perimeter(3.0, 4)\` | none | compile error: no (double, int) version |

Adding \`public static double perimeter(int side)\` would **not** compile: it differs from \`perimeter(int)\` only in return type, and return type is not part of the signature.
      `
    },
    {
      id: 'csausing3-input',
      type: 'input-boxes' as const,
      content: `
**Trace the Calls** ✍️

Use the Geometry and Thermostat documentation.

1) \`Geometry.perimeter(7)\` returns ___

2) \`Geometry.perimeter(2, 9)\` returns ___

3) After \`Thermostat t = new Thermostat();\`, then \`t.adjust(3);\`, then \`t.adjust(-10);\`, the call \`t.getTarget()\` returns ___
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['28', '22', '61'],
        hint1: 'One int argument selects the square version: four equal sides.',
        hint2: 'Two int arguments select the rectangle version: 2 × length + 2 × width.',
        hint3: 'The no-argument constructor starts the target at 68. Apply each adjustment in order.',
        explanation: '1) 4 × 7 = 28. 2) 2 × 2 + 2 × 9 = 22. 3) 68 + 3 = 71, then 71 − 10 = 61.'
      }
    },
    {
      id: 'csausing3-byvalue',
      type: 'text' as const,
      content: `
## Call by Value

When a method is called, each parameter is initialized with a **copy** of its argument. This is **call by value**. For a primitive argument, the method gets its own copy of the number, so changing the parameter cannot change the caller's variable.

\`\`\`java
public class Demo
{
    public static void doubleIt(int n)
    {
        n = n * 2;
        System.out.println("inside: " + n);
    }

    public static int twice(int n)
    {
        return n * 2;
    }
}
\`\`\`

### Worked Example: Tracing a call

\`\`\`java
int x = 7;
Demo.doubleIt(x);
System.out.println("outside: " + x);
\`\`\`

| Step | x | n | Printed |
|------|---|---|---------|
| \`int x = 7;\` | 7 | — | |
| call: n gets a copy of x | 7 | 7 | |
| \`n = n * 2;\` | 7 | 14 | |
| println inside the method | 7 | 14 | \`inside: 14\` |
| method ends; n no longer exists | 7 | — | |
| println after the call | 7 | — | \`outside: 7\` |

To change \`x\`, the method must **return** a value and the caller must **store** it: \`x = Demo.twice(x);\` sets x to 14.

> 📘 **AP Connection:** When the argument is a reference to an object, the parameter gets a copy of the **reference**, not a copy of the object. Part 5 traces what that allows a method to change, and what it cannot.
      `
    },
    {
      id: 'csausing3-applied',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application** 🎯

Segment A uses the Demo class above.

\`\`\`java
// Segment A
int a = 4;
Demo.doubleIt(a);
a = a + 1;
System.out.println(a);
\`\`\`
      `,
      exercise: {
        questions: [
          {
            question: 'What value does the last line of Segment A print?',
            options: ['9', '5', '8', '4'],
            correctAnswer: 1,
            explanation: 'doubleIt receives a copy of a, so a stays 4 even though the method prints inside: 8. Then a = a + 1 makes it 5.'
          },
          {
            question: 'Assume Thermostat t = new Thermostat(70); has run. Which statement causes a compile error?',
            options: [
              'double d = t.getTarget();',
              'int n = t.adjust(4);',
              'boolean b = t.needsHeat(70);',
              'int k = t.getTarget() + 1;'
            ],
            correctAnswer: 1,
            explanation: 'adjust is a void method, so there is no value to store in n. Storing an int return value in a double is allowed, passing the int 70 to a double parameter is allowed, and an int return value can be used in an arithmetic expression.'
          }
        ]
      }
    }
  ]
};
