export const csaUsingObjectsPart6Data = {
  topicSlug: 'csa-using-objects',
  sections: [
    {
      id: 'csausing6-intro',
      type: 'text' as const,
      content: `
# 🏗️ Using Objects

**Part 6 of 7 — AP-Style Practice with a Provided Class**

---

AP questions on this topic hand you a class you have never seen and ask you to use it. This part works through one such class, the way the exam presents it.

\`\`\`java
/**
 * A Robot moves along a number line of whole-number positions.
 * Its position is stored in a private variable that other
 * classes cannot access directly.
 */
public class Robot
{
    /** Creates a robot at position 0. */
    public Robot()
    { /* implementation not shown */ }

    /** Creates a robot at position start. */
    public Robot(int start)
    { /* implementation not shown */ }

    /** Returns the robot's current position. */
    public int getPosition()
    { /* implementation not shown */ }

    /** Moves the robot one position to the right. */
    public void move()
    { /* implementation not shown */ }

    /**
     * Moves the robot steps positions to the right
     * (a negative steps moves it to the left).
     */
    public void move(int steps)
    { /* implementation not shown */ }

    /**
     * Returns the number of positions between this robot and other.
     * Precondition: other is not null
     * Postcondition: the value returned is never negative
     */
    public int distanceTo(Robot other)
    { /* implementation not shown */ }
}
\`\`\`

### Read it like the exam

| Question to ask | Answer for Robot |
|-----------------|------------------|
| How can I construct one? | \`new Robot()\` (at 0) or \`new Robot(int)\` |
| Which methods return something? | \`getPosition\` and \`distanceTo\`, both int |
| Which methods change the object? | both versions of \`move\` (void) |
| Any overloads? | \`move()\` and \`move(int)\`; also the two constructors |
| Any object parameters? | \`distanceTo\` takes another Robot |
      `
    },
    {
      id: 'csausing6-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Trace the Robots** 🎯

\`\`\`java
// Segment A
Robot r = new Robot(4);
r.move();
r.move(-6);
Robot s = new Robot();
s.move(3);
System.out.println(r.distanceTo(s));

// Segment B
Robot a = new Robot(2);
Robot b = a;
b.move(5);
a.move();
System.out.println(a.getPosition() + " " + b.getPosition());
\`\`\`
      `,
      exercise: {
        questions: [
          {
            question: 'What does Segment A print?',
            options: ['5', '-4', '4', '2'],
            correctAnswer: 2,
            explanation: 'r goes from 4 to 5 to -1, and s goes from 0 to 3. The distance between -1 and 3 is 4, and distanceTo never returns a negative value.'
          },
          {
            question: 'What does Segment B print?',
            options: ['3 7', '8 8', '8 7', '3 8'],
            correctAnswer: 1,
            explanation: 'b = a makes both variables refer to one robot, so both moves apply to it: 2 + 5 + 1 = 8. Treating a and b as separate robots gives 3 and 7.'
          }
        ]
      }
    },
    {
      id: 'csausing6-frq1',
      type: 'text' as const,
      content: `
## FRQ-Style Task 1: Build, move, and report

> **Task:** Write code that creates a robot at a random position from -10 to 10, inclusive, creates a second robot at position 0, moves the second robot 3 positions to the right, and prints the distance between the two robots.

### Step-by-step plan

1. Count the values: 10 − (−10) + 1 = **21**, and the smallest is −10.
2. Pick constructors: \`Robot(int)\` for the random start, \`Robot()\` for position 0.
3. \`move(int)\` takes the number of steps.
4. \`distanceTo\` returns an int; printing it uses the return value.

### Model solution

\`\`\`java
int start = (int) (Math.random() * 21) - 10;
Robot r1 = new Robot(start);
Robot r2 = new Robot();
r2.move(3);
System.out.println(r1.distanceTo(r2));
\`\`\`

### How a rubric would score it

| Point | Earned by |
|-------|-----------|
| Random range | a multiplier of 21 and an offset of -10, with the cast around the whole product |
| Construction | \`new\` with arguments that match a documented constructor |
| Movement | calling move on the **second** robot with 3 (three calls to \`move()\` also work) |
| Result | using the value returned by distanceTo, here by printing it |

\`r2.distanceTo(r1)\` would earn the same point: distance does not depend on direction.
      `
    },
    {
      id: 'csausing6-frq2',
      type: 'text' as const,
      content: `
## FRQ-Style Task 2: Move one robot onto another

> **Task:** Robots a and b already exist. Write one statement that moves a so that it ends at b's position.

### Model solution

\`\`\`java
a.move(b.getPosition() - a.getPosition());
\`\`\`

**Check with numbers.** If a is at 2 and b is at -3, the argument is -3 − 2 = -5, and 2 + (-5) = -3. ✓ If a is at -1 and b is at 6, the argument is 7, and -1 + 7 = 6. ✓

### Attempts that lose the point

| Attempt | What goes wrong |
|---------|-----------------|
| \`a = b;\` | a now refers to b's robot. The original robot never moved, and a and b are now aliases. |
| \`a.getPosition() = b.getPosition();\` | Compile error: a method call cannot be the target of an assignment. |
| \`a.move(a.distanceTo(b));\` | The distance is never negative, so when b is to the left of a, a moves the wrong way. |
| \`a.move(b.getPosition());\` | Moves by b's position instead of to it; correct only when a starts at 0. |
| \`a.position = b.position;\` | Compile error: the position variable is private to the Robot class. |
      `
    },
    {
      id: 'csausing6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Diagnose the Student Code** 🔍

Assume Robot r and Robot s have been created at positions 0 and 5. Classify each line.
      `,
      exercise: {
        dropdowns: [
          {
            label: 'int d = r.move(3);',
            options: ['compile error', 'NullPointerException', 'logic error', 'no error'],
            correctIndex: 0,
            explanation: 'move is void, so there is no value to store in d.'
          },
          {
            label: 'Robot q = null; q.move();',
            options: ['compile error', 'NullPointerException', 'logic error', 'no error'],
            correctIndex: 1,
            explanation: 'It compiles, but calling move through a null reference throws at run time.'
          },
          {
            label: 'r.move(-2); (r may end at a negative position)',
            options: ['compile error', 'NullPointerException', 'logic error', 'no error'],
            correctIndex: 3,
            explanation: 'Negative steps and negative positions are both allowed by the documentation.'
          },
          {
            label: 'int spot = (int) (Math.random() * 20) - 10; (meant to give -10 to 10)',
            options: ['compile error', 'NullPointerException', 'logic error', 'no error'],
            correctIndex: 2,
            explanation: 'It compiles and runs, but the largest value is 9, so 10 is never produced.'
          }
        ],
        hint1: 'A compile error is caught before the program runs; an exception happens while it runs.',
        hint2: 'A logic error runs without crashing but gives the wrong result.',
        explanation: 'Storing a void result does not compile, a null receiver throws at run time, negative moves are legal, and a multiplier of 20 misses the top of the range.'
      }
    },
    {
      id: 'csausing6-habits',
      type: 'text' as const,
      content: `
## FRQ Habits for Provided Classes

| Habit | Why |
|-------|-----|
| Use only the documented constructors and methods | Hidden (private) attributes cannot be accessed, and invented methods do not exist |
| Match every call to a header | Number, order, and type of arguments; this is where most lost points come from |
| Call instance methods on an object | \`Robot.getPosition()\` does not compile; \`r.getPosition()\` does |
| Do something with every return value you need | A non-void call whose value is ignored contributes nothing |
| Respect preconditions | The method will not check them for you; a violated precondition means no promised result |
| Write \`new\` exactly once per object you need | Assigning one reference to another never makes a copy |

> 📘 **AP Connection:** Free-response questions in Unit 1 style reward precise calls more than clever logic. Reread each call against the documentation before moving on.
      `
    },
    {
      id: 'csausing6-applied',
      type: 'multiple-choice' as const,
      content: `
**Exam-Style Questions** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement correctly stores the position of Robot r in an int variable?',
            options: [
              'int p = r.position;',
              'int p = Robot.getPosition();',
              'int p = r.getPosition;',
              'int p = r.getPosition();'
            ],
            correctAnswer: 3,
            explanation: 'getPosition is an instance method, so it is called on the object r, with parentheses. The position variable is private, calling an instance method on the class name does not compile, and a method call without parentheses is not a call.'
          },
          {
            question: 'Robot r is at position 3 and Robot s is at position -2. What does r.distanceTo(s) return?',
            options: ['1', '5', '-5', '-1'],
            correctAnswer: 1,
            explanation: 'The robots are 3 − (−2) = 5 positions apart, and the postcondition guarantees a value that is never negative. Adding the positions gives 1.'
          },
          {
            question: 'Why can the Robot class contain both move() and move(int steps)?',
            options: [
              'Their parameter lists differ',
              'Their return types differ from each other',
              'One of them is a class method',
              'Java uses whichever appears first in the class'
            ],
            correctAnswer: 0,
            explanation: 'Overloaded methods share a name but must have different parameter lists. Both versions of move are void instance methods, and Java chooses between them by matching the arguments, not by their order in the class.'
          }
        ]
      }
    }
  ]
};
