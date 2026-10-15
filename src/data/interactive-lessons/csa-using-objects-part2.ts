export const csaUsingObjectsPart2Data = {
  topicSlug: 'csa-using-objects',
  sections: [
    {
      id: 'csausing2-intro',
      type: 'text' as const,
      content: `
# 🏗️ Using Objects

**Part 2 of 7 — Classes, APIs, and Documentation**

---

Part 1 showed how to create an object with \`new\` and call a method on it. This part asks two earlier questions: where do classes come from, and how do you learn to use a class whose code you have never seen?

## Classes and Objects

A **class** is the formal implementation, or blueprint, of the attributes and behaviors of an object. An **object** is one specific instance of a class, with its own values for those attributes.

| Term | Meaning | Thermostat example |
|------|---------|--------------------|
| **Class** | The blueprint that defines attributes and behaviors | \`Thermostat\` |
| **Object** | One instance of the class, with its own attribute values | the hallway thermostat, set to 70 |
| **Attribute** | Data an object stores, kept in variables | the target temperature |
| **Behavior** | What an object can do, or what can be done to it, defined by methods | report the target, change it, decide whether to heat |

### One class, many objects

\`\`\`java
Thermostat hall = new Thermostat(70);
Thermostat office = new Thermostat(64);
\`\`\`

\`new\` runs twice, so there are **two separate objects**. Each stores its own target: changing \`hall\` has no effect on \`office\`. Compare this with Part 1's aliases, where two variables shared one object because \`new\` ran only once.

> 🔑 **Key Idea:** A class is written once. Every \`new\` creates one more object from it, and each object carries its own copy of the attributes.
      `
    },
    {
      id: 'csausing2-libraries',
      type: 'text' as const,
      content: `
## Libraries, APIs, and Packages

Most classes you use were written by someone else.

| Term | What it is |
|------|-----------|
| **Library** | A collection of classes that programs can use |
| **API specification** | Documentation that tells a programmer how to use those classes: constructors, method headers, and what each one does (API stands for application programming interface) |
| **Package** | A named group of related classes inside a library |

The API is all you need. You never see the code inside \`String\` or \`Math\`, yet you use them correctly, because the documentation states what each method takes and returns. Using a method by knowing **what** it does, not **how** it does it, is called **procedural abstraction**.

### The java.lang package

\`String\` and \`Math\` belong to the package \`java.lang\`. Every Java program can use the classes in \`java.lang\` automatically. Classes in other packages are brought in with an \`import\` statement at the top of the file.

> 📘 **AP Connection:** The AP Java Quick Reference is a small API. It lists the String and Math methods (and a few others you meet later in the course) that you may use on the exam. Every free-response question that involves a class gives you documentation like an API page, with headers, comments, and "implementation not shown". Your job is to call that class correctly, not to guess how it works inside.
      `
    },
    {
      id: 'csausing2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A program runs Thermostat hall = new Thermostat(70); and then Thermostat office = new Thermostat(64);. Which statement about the result is accurate?',
            options: [
              'Each object stores its own target value',
              'Both variables share a single target value',
              'The second object replaces the first in memory',
              'The class keeps both targets in one variable'
            ],
            correctAnswer: 0,
            explanation: 'Each use of new creates a separate object with its own attribute values. Sharing would happen only if one variable were assigned to the other, and creating a second object does not erase the first.'
          },
          {
            question: 'Why can a program use the String and Math classes without writing an import statement?',
            options: [
              'Both are in java.lang, which is always available',
              'Both are primitive types, which need no import',
              'Both are in java.util, which every file imports',
              'Both are declared in the same file as main'
            ],
            correctAnswer: 0,
            explanation: 'Classes in the java.lang package are available to every program automatically. String and Math are classes, not primitives, and java.util classes do need an import.'
          }
        ]
      }
    },
    {
      id: 'csausing2-comments',
      type: 'text' as const,
      content: `
## Comments: Notes the Compiler Ignores

Comments explain code to people, including the original programmer. The compiler ignores them, so they never run and never change what a program does.

| Style | Syntax | Typical use |
|-------|--------|-------------|
| Single-line | \`// ...\` | A short note; runs to the end of the line |
| Block | \`/* ... */\` | A note that spans several lines |
| Javadoc | \`/** ... */\` | Documentation for a class or method; tools turn these into API pages |

\`\`\`java
int count = 0;   // a single-line comment can follow code

/* A block comment:
   everything between the markers is ignored */

/**
 * A Javadoc comment describes the class or method
 * written directly below it.
 */
\`\`\`

## Preconditions and Postconditions

Javadoc comments often state two kinds of conditions.

- A **precondition** is a condition that must be true just before a method runs for the method to behave as expected. The method is **not expected to check it**; making sure it holds is the caller's job. If a precondition is violated, the documentation promises nothing about what happens.
- A **postcondition** is a condition that must be true after the method runs. It describes the outcome, such as what is returned or the new value of an attribute.

> ⚠️ **Common Mistake:** A call that violates a precondition usually still **compiles**. The compiler checks types, not documentation. "It compiled" never means "the precondition was met".
      `
    },
    {
      id: 'csausing2-api',
      type: 'text' as const,
      content: `
## Reading a Class's Documentation

Here is the kind of documentation an AP question provides. You use the class; you never write it.

\`\`\`java
/**
 * A Thermostat keeps a target temperature in whole degrees.
 */
public class Thermostat
{
    /** Creates a thermostat whose target is 68. */
    public Thermostat()
    { /* implementation not shown */ }

    /**
     * Creates a thermostat with the given target.
     * Precondition: 50 <= target <= 90
     */
    public Thermostat(int target)
    { /* implementation not shown */ }

    /** Returns the current target temperature. */
    public int getTarget()
    { /* implementation not shown */ }

    /**
     * Changes the target by delta degrees (a negative delta lowers it).
     * Precondition: 50 <= getTarget() + delta <= 90
     * Postcondition: getTarget() returns the old target plus delta
     */
    public void adjust(int delta)
    { /* implementation not shown */ }

    /**
     * Returns true if roomTemp is below the target; false otherwise.
     */
    public boolean needsHeat(double roomTemp)
    { /* implementation not shown */ }
}
\`\`\`

### Worked Example: What the documentation tells you

1. **Make a thermostat set to 72.** The second constructor takes an int: \`Thermostat t = new Thermostat(72);\`
2. **Lower it by 4.** \`t.adjust(-4);\` The postcondition says the target is now the old target plus delta: 72 + (-4) = **68**.
3. **Is the room at 66.5 degrees cold?** \`t.needsHeat(66.5)\` returns **true**, because 66.5 is below the target of 68.
4. **What about \`t.adjust(25)\` now?** It compiles, since 25 is an int. But 68 + 25 = 93 breaks the precondition (the new target must stay at or below 90), so the documentation makes **no promise** about the result.
5. **What is the hidden attribute?** The target temperature. You never touch it directly; you read it with \`getTarget()\` and change it with \`adjust\`.
      `
    },
    {
      id: 'csausing2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Label the Documentation** 🔍

Use the Thermostat documentation above.
      `,
      exercise: {
        dropdowns: [
          {
            label: 'In the second constructor\'s comment, "50 <= target <= 90" is a ___',
            options: ['precondition', 'postcondition', 'parameter type', 'method header'],
            correctIndex: 0,
            explanation: 'It must be true before the constructor runs, so it is a precondition.'
          },
          {
            label: 'In the comment for adjust, "getTarget() returns the old target plus delta" is a ___',
            options: ['precondition', 'postcondition', 'method signature', 'parameter list'],
            correctIndex: 1,
            explanation: 'It describes what is true after adjust finishes, so it is a postcondition.'
          },
          {
            label: 'The target temperature each Thermostat stores is one of its ___',
            options: ['behaviors', 'constructors', 'packages', 'attributes'],
            correctIndex: 3,
            explanation: 'Stored data is an attribute; getTarget, adjust, and needsHeat are behaviors.'
          }
        ],
        hint1: 'Ask whether the condition must hold before the call or describes the state after it.',
        hint2: 'Data an object keeps is different from actions it can perform.',
        explanation: 'Preconditions hold before a call, postconditions describe the result, attributes are stored data, and behaviors are methods.'
      }
    },
    {
      id: 'csausing2-practice',
      type: 'multiple-choice' as const,
      content: `
**Apply the Documentation** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A Thermostat t has a target of 88. A student then calls t.adjust(5);. Based on the documentation, what can be concluded?',
            options: [
              'No result is promised, as the precondition fails',
              'The call fails to compile, since 93 is above 90',
              'The method caps the target at 90 instead',
              'The method throws an exception'
            ],
            correctAnswer: 0,
            explanation: 'The precondition requires the new target to be at most 90, and 93 breaks it, so the documentation makes no promise. The call still compiles because 5 is an int, and nothing in the comments says the method caps the value or throws an exception.'
          },
          {
            question: 'A programmer writes /* room is drafty */ on a line between two statements. What does this comment do when the program runs?',
            options: [
              'It prints the text to the console window',
              'It declares a String holding that text',
              'It has no effect, as the compiler skips it',
              'It adds the text to the class API page'
            ],
            correctAnswer: 2,
            explanation: 'Comments of every style are ignored by the compiler and never execute. Only Javadoc comments, written with /** */, are used to build API pages.'
          }
        ]
      }
    },
    {
      id: 'csausing2-summary',
      type: 'text' as const,
      content: `
## Part 2 Summary

| Idea | Remember |
|------|----------|
| Class vs object | One blueprint; each \`new\` makes one more object with its own attributes |
| Attributes vs behaviors | Stored data vs methods |
| Library, API, package | Classes you can use; the documentation for them; named groups of classes |
| java.lang | Holds String and Math; available without an import |
| Comments | \`//\`, \`/* */\`, \`/** */\`; ignored by the compiler |
| Precondition | Caller's responsibility before the call; violated means no promise |
| Postcondition | What is true after the call |

**Next:** Part 3 reads method headers closely: signatures, parameters, return values, and overloading.
      `
    }
  ]
};
