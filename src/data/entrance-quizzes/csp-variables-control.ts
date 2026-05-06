/**
 * Entrance Quiz — Variables & Control Structures (AP CS Principles)
 * 14 questions · 7 parts (2 per part)
 * Big Idea 3: variables, assignment, expressions, conditionals, loops — with code-tracing.
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  { id: 'cspv-ent-1a', question: 'A variable in a program is BEST described as:', options: ['A constant value that cannot change', 'A named storage location whose value can be set or updated during program execution', 'A type of loop', 'A built-in function'], correctIndex: 1, explanation: 'A variable is a name that refers to a storage location holding a value, which can be assigned or updated during execution.', partNumber: 1, partTitle: 'Variables & Storage' },
  { id: 'cspv-ent-1b', question: 'After the assignment x ← 7, the variable x:', options: ['Cannot be changed again', 'Holds the value 7 until reassigned', 'Becomes the number 7 forever, even outside the program', 'Is automatically converted to text'], correctIndex: 1, explanation: 'Assignment stores the value 7 in x. The value persists until another assignment changes it.', partNumber: 1, partTitle: 'Variables & Storage' },
  { id: 'cspv-ent-2a', question: 'Trace the AP CSP pseudocode below.\n  a ← 4\n  b ← a + 2\n  a ← a * 3\n  DISPLAY(a + b)', options: ['12', '14', '18', '20'], correctIndex: 2, explanation: 'a = 4. b = a + 2 = 6. a is then reassigned to a * 3 = 12. b is unchanged (= 6). a + b = 12 + 6 = 18.', partNumber: 2, partTitle: 'Assignment & Expressions' },
  { id: 'cspv-ent-2b', question: 'After the assignment x ← x + 1 with initial x = 5, the new value of x is:', options: ['5', '6', '10', 'undefined'], correctIndex: 1, explanation: 'The right side x + 1 is evaluated FIRST using the current value (5 + 1 = 6), then 6 is stored back into x.', partNumber: 2, partTitle: 'Assignment & Expressions' },
  { id: 'cspv-ent-3a', question: 'Trace the AP CSP pseudocode below.\n  age ← 17\n  IF (age ≥ 18)\n  {\n    DISPLAY("adult")\n  }\n  ELSE\n  {\n    DISPLAY("minor")\n  }', options: ['adult', 'minor', 'both', 'nothing'], correctIndex: 1, explanation: 'age = 17 is NOT >= 18, so the ELSE branch runs and DISPLAY("minor") executes.', partNumber: 3, partTitle: 'Conditionals' },
  { id: 'cspv-ent-3b', question: 'A nested IF / ELSE structure is BEST used when:', options: ['You need to choose among multiple mutually exclusive cases that depend on more than one condition', 'You want a loop', 'You want a list', 'You want to print a message exactly once'], correctIndex: 0, explanation: 'Nested IF / ELSE handles multiple branching cases that depend on additional conditions — e.g., grade letters based on a numeric score.', partNumber: 3, partTitle: 'Conditionals' },
  { id: 'cspv-ent-4a', question: 'A REPEAT N TIMES loop:', options: ['Runs the body exactly N times', 'Runs forever', 'Runs the body 0 or 1 times only', 'Sorts a list'], correctIndex: 0, explanation: 'REPEAT N TIMES executes the loop body exactly N iterations — a count-controlled loop.', partNumber: 4, partTitle: 'Counted Iteration' },
  { id: 'cspv-ent-4b', question: 'Trace the AP CSP pseudocode below.\n  total ← 0\n  REPEAT 5 TIMES\n  {\n    total ← total + 2\n  }\n  DISPLAY(total)', options: ['5', '7', '10', '15'], correctIndex: 2, explanation: 'Five iterations, each adds 2: 0 + 2 + 2 + 2 + 2 + 2 = 10.', partNumber: 4, partTitle: 'Counted Iteration' },
  { id: 'cspv-ent-5a', question: 'A REPEAT UNTIL loop continues:', options: ['Until the controlling condition becomes true', 'Forever, regardless of the condition', 'Exactly N times', 'Only when the program crashes'], correctIndex: 0, explanation: 'REPEAT UNTIL (cond) executes the body and stops as soon as cond becomes true — a condition-controlled loop.', partNumber: 5, partTitle: 'Conditional Iteration' },
  { id: 'cspv-ent-5b', question: 'Trace the AP CSP pseudocode below.\n  n ← 1\n  REPEAT UNTIL (n > 16)\n  {\n    n ← n * 2\n  }\n  DISPLAY(n)', options: ['8', '16', '32', '64'], correctIndex: 2, explanation: 'n: 1 → 2 → 4 → 8 → 16 → 32. After n = 32 the loop checks (32 > 16) which is true, so it stops. DISPLAY(32).', partNumber: 5, partTitle: 'Conditional Iteration' },
  { id: 'cspv-ent-6a', question: 'A loop counter is incremented inside the loop but never updated. The MOST likely consequence is:', options: ['The loop runs slightly faster', 'An infinite loop, because the termination condition is never met', 'A syntax error', 'The program prints "done"'], correctIndex: 1, explanation: 'A loop that does not make progress toward its termination condition runs forever — a classic infinite-loop bug.', partNumber: 6, partTitle: 'Applied Practice' },
  { id: 'cspv-ent-6b', question: 'Trace the AP CSP pseudocode below.\n  x ← 0\n  FOR EACH n IN [1, 2, 3, 4, 5]\n  {\n    IF (n MOD 2 = 0)\n    {\n      x ← x + n\n    }\n  }\n  DISPLAY(x)', options: ['2', '4', '6', '9'], correctIndex: 2, explanation: 'Even values from the list are 2 and 4. x = 0 + 2 + 4 = 6.', partNumber: 6, partTitle: 'Applied Practice' },
  { id: 'cspv-ent-7a', question: 'Which statement about variables in AP CSP pseudocode is TRUE?', options: ['Variables can hold values of different types (numbers, strings, lists, Booleans)', 'Variables can only hold integers', 'Variables can only be set once', 'A variable name cannot include underscores'], correctIndex: 0, explanation: 'AP CSP pseudocode supports variables of multiple types: numbers, strings, lists, and Booleans.', partNumber: 7, partTitle: 'AP Review' },
  { id: 'cspv-ent-7b', question: 'Which structure is MOST appropriate for executing a block of code WHILE a condition remains true?', options: ['IF / ELSE', 'REPEAT N TIMES', 'REPEAT UNTIL (NOT condition) — i.e., a conditional loop', 'A single assignment'], correctIndex: 2, explanation: 'A condition-controlled loop (REPEAT UNTIL ending when the condition fails) keeps running while the condition holds.', partNumber: 7, partTitle: 'AP Review' }
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return [...questions].sort(() => Math.random() - 0.5)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Variables & Storage' },
    { partNumber: 2, partTitle: 'Assignment & Expressions' },
    { partNumber: 3, partTitle: 'Conditionals' },
    { partNumber: 4, partTitle: 'Counted Iteration' },
    { partNumber: 5, partTitle: 'Conditional Iteration' },
    { partNumber: 6, partTitle: 'Applied Practice' },
    { partNumber: 7, partTitle: 'AP Review' }
  ]
}
