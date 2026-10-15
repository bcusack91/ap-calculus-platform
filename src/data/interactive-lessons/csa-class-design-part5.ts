export const csaClassDesignPart5Data = {
  topicSlug: 'csa-class-design',
  sections: [
    {
      id: 'csaclass5-intro',
      type: 'text' as const,
      content: `
# 🏛️ Class Design

**Part 5 of 7 — Program Design: Abstraction, Decomposition, and Impact**

---

Good class design is not only about syntax. The CED asks you to describe how abstraction makes large programs manageable and how a large task is broken into methods (Topic 3.1), and to explain the effects programs have beyond their code: reliability, legal and intellectual-property issues, and social impact (Topic 3.2).

| In this part |
|---|
| Data and procedural abstraction |
| Decomposing a task into private helper methods |
| Overloading: what makes two method headers different |
| Reliability, intellectual property, and impact |
      `
    },
    {
      id: 'csaclass5-abstraction',
      type: 'text' as const,
      content: `
## Abstraction

**Abstraction** makes a program easier to understand by focusing on what something does and hiding the details of how it is done.

| Kind | What is hidden | Example |
|---|---|---|
| **Data abstraction** | how the data is stored | a \`Grade\` object's private fields; clients see only \`passed()\` |
| **Procedural abstraction** | how a method does its job | you call \`Math.sqrt(x)\` without knowing its algorithm |

A method's **name, parameters and return type** form its procedural abstraction: they say what it needs and what it gives back. As long as the header and its behavior stay the same, the body can be rewritten without breaking any caller.

## Decomposition Into Helper Methods

A long method is easier to write, test and reuse when it is split into smaller methods, each doing one job. Helpers that clients do not need are \`private\`.

\`\`\`java
public class Course {
    private int earned;
    private int possible;

    public Course(int e, int p) {
        earned = e;
        possible = p;
    }

    public String report() {
        double pct = percent();
        return pct + "% " + letterFor(pct);
    }

    private double percent() {
        return 100.0 * earned / possible;
    }

    private String letterFor(double pct) {
        if (pct >= 90) {
            return "A";
        } else if (pct >= 80) {
            return "B";
        } else if (pct >= 70) {
            return "C";
        }
        return "F";
    }
}
\`\`\`

\`report\` reads almost like the specification: compute the percent, then attach a letter. \`new Course(87, 100).report()\` returns \`"87.0% B"\`, and \`new Course(18, 20).report()\` returns \`"90.0% A"\`.

Each helper can be tested on its own, and \`letterFor\` can be reused by any other method that needs a letter grade.
      `
    },
    {
      id: 'csaclass5-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯

Use the Course class above.
      `,
      exercise: {
        questions: [
          {
            question: 'What does new Course(13, 20).report() return?',
            options: [
              '"65.0% F"',
              '"65.0% C"',
              '"65% F"',
              '"0.0% F"'
            ],
            correctAnswer: 0,
            explanation: '100.0 * 13 / 20 is 65.0, which fails every letter test, so letterFor returns "F". The 100.0 makes the division a double division, so the result is 65.0 rather than an int.'
          },
          {
            question: 'A teacher wants letterFor to add a "D" for 60 to 69.9. Which statement is true?',
            options: [
              'Only the helper method changes, and its callers stay the same',
              'report must also change, because it builds the returned String',
              'Every client that calls report must be rewritten to accept "D"',
              'percent must change too, because it computes the percentage value'
            ],
            correctAnswer: 0,
            explanation: 'Decomposition isolates the grading rule inside one helper, so adding a branch there is the only change. report just concatenates whatever letter it gets back, and its header is unchanged.'
          }
        ]
      }
    },
    {
      id: 'csaclass5-overload',
      type: 'text' as const,
      content: `
## Overloading: What Makes Two Headers Different

Part 1 defined overloading as methods with the same name and different parameter lists. The precise rule: a method's **signature** is its name plus the **number, types and order** of its parameters. Two methods in one class must have different signatures.

| Pair of headers in one class | Legal together? | Why |
|---|---|---|
| \`int area(int s)\` and \`int area(int w, int h)\` | yes | different number of parameters |
| \`double area(double r)\` and \`int area(int s)\` | yes | different parameter type |
| \`void put(String k, int v)\` and \`void put(int v, String k)\` | yes | different order of types |
| \`int area(int s)\` and \`double area(int s)\` | **no** | return type is not part of the signature |
| \`int area(int s)\` and \`int area(int side)\` | **no** | parameter names are not part of the signature |

When a call is made, Java chooses the version whose parameter list matches the arguments. With both \`area(int s)\` and \`area(double r)\` present, \`area(5)\` runs the int version and \`area(5.0)\` runs the double version.
      `
    },
    {
      id: 'csaclass5-overload-check',
      type: 'dropdown-select' as const,
      content: `
**Legal Overload?** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'A class has int total(int a, int b). Adding int total(int a, int b, int c) is ___',
            options: ['legal', 'illegal: same name', 'illegal: same return type', 'illegal: too many parameters']
          },
          {
            label: 'A class has int total(int a, int b). Adding double total(int x, int y) is ___',
            options: ['illegal: same signature', 'legal: new return type', 'legal: new parameter names', 'legal: both reasons']
          },
          {
            label: 'A class has void show(int n) and void show(String s). The call show("7") runs ___',
            options: ['the String version', 'the int version', 'both versions', 'neither; it is ambiguous']
          }
        ],
        correctAnswers: ['legal', 'illegal: same signature', 'the String version'],
        hint1: 'A different number of parameters gives a different signature.',
        hint2: 'Only the name and the parameter types, in order, count.',
        hint3: 'Match the argument\'s type: "7" is in quotes.',
        explanation: 'A third parameter changes the signature, so the first pair is legal. Changing only the return type and the parameter names leaves the signature total(int, int), so the second pair does not compile. "7" is a String, so the String version runs.'
      }
    },
    {
      id: 'csaclass5-impact',
      type: 'text' as const,
      content: `
## The Impact of Program Design

### System Reliability

A program is **reliable** when it performs its tasks as expected under the stated conditions without failing. No amount of care guarantees perfection, so programmers raise reliability by **testing with a variety of inputs**, especially:

| Kind of test input | Example for \`letterFor(double pct)\` |
|---|---|
| typical values | 75.0, 85.0 |
| boundary values, on and next to each cutoff | 90.0, 89.9, 80.0, 70.0, 69.9 |
| extreme or unusual values | 0.0, 100.0, and what happens if possible is 0 |

The last row exposes a real gap in \`Course\`: \`new Course(0, 0).report()\` asks for a percent of a total of 0, which has no sensible value. The specification should say what to do in that case (for example, a precondition that \`possible\` is positive, or a rule to report 0%), and the code should follow it.

### Intellectual Property and Licensing

Code is the **intellectual property** of its creator. Programmers often reuse code that others have published as **open source**, which is free to use under the terms of its license (for example, a requirement to credit the author). Using code that is not openly licensed requires the owner's permission, and often a purchase, before it can be included in a program.

### Social, Economic and Cultural Impact

Programs affect society, economies and culture, and the effects can be beneficial or harmful. A program written to solve one problem can have **unintended harmful effects** beyond its intended use: an automated scheduling tool can save hours of work, but if it was built from biased data it can treat some groups of people unfairly.

> 🎯 **AP Connection:** Expect multiple-choice questions that describe a scenario and ask which action improves reliability (more varied tests, boundary tests), which use of code is legal (following an open-source license, getting permission), or which effect was unintended.
      `
    },
    {
      id: 'csaclass5-applied',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A student tests letterFor only with 95.0, 85.0 and 75.0, and every result is correct. Which added test is most likely to reveal a mistake such as writing pct > 90?',
            options: [
              '90.0',
              '100.0',
              '50.0',
              '85.5'
            ],
            correctAnswer: 0,
            explanation: 'A mistake in a comparison operator shows up only exactly at the cutoff. With pct > 90, an input of 90.0 would get a B instead of an A, while values away from the boundaries give the same answers either way.'
          },
          {
            question: 'A developer wants to include a function found on a website in a program that will be sold. Which action is appropriate?',
            options: [
              'Check the license and follow its terms, or get permission',
              'Use it freely, since anything posted online is public domain',
              'Rename its variables so the code counts as an original work',
              'Use it without credit, since only a small amount is copied'
            ],
            correctAnswer: 0,
            explanation: 'Published code is still the author\'s intellectual property; open-source licenses state the conditions for reuse, and other code needs the owner\'s permission. Renaming or copying a small amount does not change who owns it.'
          },
          {
            question: 'A ride-sharing app raises prices in busy areas to attract drivers, and as a result fewer drivers serve quieter neighborhoods. This is best described as ___',
            options: [
              'an unintended harmful effect of a program',
              'a failure of the program\'s reliability',
              'a violation of intellectual property',
              'a result of procedural abstraction'
            ],
            correctAnswer: 0,
            explanation: 'The program works as designed, so it is not a reliability failure; the harm comes from how people respond to it beyond its intended purpose. Intellectual property and abstraction are unrelated to the scenario.'
          }
        ]
      }
    }
  ]
}
