const fs = require('fs');
const path = require('path');
const dir = path.join(__dirname, '..', 'src', 'data', 'interactive-lessons');

function write(name, content) {
  fs.writeFileSync(path.join(dir, name), content);
  console.log('Wrote:', name);
}

// ─── 1. Algorithms ───
write('csp-algorithms-part1.ts', `export const cspAlgorithmsPart1Data = {
  topicSlug: 'csp-algorithms',
  sections: [
    {
      id: 'cspalg1-intro',
      type: 'text' as const,
      content: \`
# ⚙️ Algorithms

**Part 1 of 7 — Sequencing, Selection, Iteration, and Algorithm Analysis**

---

## What Is an Algorithm?

An algorithm is a finite set of step-by-step instructions for solving a problem or accomplishing a task. Every algorithm is built from three fundamental building blocks:

| Building Block | Description | Pseudocode |
|---------------|-----------|-----------|
| **Sequencing** | Steps executed in order, one after another | Line 1, then Line 2, then Line 3 |
| **Selection** | A decision point — choose a path based on a condition | IF / ELSE |
| **Iteration** | Repeat a set of steps | REPEAT, REPEAT UNTIL |

> 🔑 **Any computable problem** can be solved using just these three building blocks. This is a fundamental principle of computer science.

---

## Algorithm Efficiency

Not all algorithms solve a problem equally fast. Efficiency measures how the number of steps grows as the input size grows.

| Algorithm | Steps for n items | Classification |
|-----------|------------------|---------------|
| **Linear search** | Up to n steps | Reasonable |
| **Binary search** | Up to log2(n) steps | Reasonable |
| **Bubble sort** | Up to n x n steps | Reasonable (but slow) |
| **Checking all subsets** | 2^n steps | Unreasonable |
| **Checking all orderings** | n! steps | Unreasonable |

**Reasonable** algorithms run in polynomial time (n, n squared, n cubed).
**Unreasonable** algorithms run in exponential or factorial time (2^n, n!).
      \`
    },
    {
      id: 'cspalg1-quiz1',
      type: 'multiple-choice' as const,
      content: \`
**Concept Check** 🎯
      \`,
      exercise: {
        questions: [
          {
            question: 'Which three building blocks can express ANY algorithm?',
            options: [
              'Input, output, and storage',
              'Sequencing, selection, and iteration',
              'Variables, functions, and classes',
              'Hardware, software, and networking'
            ],
            correctAnswer: 1,
            explanation: 'Sequencing (do steps in order), selection (make decisions), and iteration (repeat steps) are the three fundamental constructs. Any algorithm can be expressed using just these three.'
          },
          {
            question: 'Binary search on a sorted list of 1,000,000 items requires at most approximately how many comparisons?',
            options: [
              '1,000,000',
              '500,000',
              '20',
              '100'
            ],
            correctAnswer: 2,
            explanation: 'Binary search halves the list each step. log2(1,000,000) is approximately 20. So at most ~20 comparisons are needed, compared to up to 1,000,000 for linear search.'
          }
        ]
      }
    },
    {
      id: 'cspalg1-content',
      type: 'text' as const,
      content: \`
## Searching Algorithms

### Linear Search
Check each element one by one from start to end.
\\\`\\\`\\\`
PROCEDURE linearSearch(list, target)
{
    FOR EACH item IN list
    {
        IF (item = target)
        {
            RETURN true
        }
    }
    RETURN false
}
\\\`\\\`\\\`
- Works on **any** list (sorted or unsorted)
- Worst case: check all n items

### Binary Search
Repeatedly divide a SORTED list in half.
\\\`\\\`\\\`
PROCEDURE binarySearch(sortedList, target)
{
    low ← 1
    high ← LENGTH(sortedList)
    REPEAT UNTIL (low > high)
    {
        mid ← (low + high) / 2
        IF (sortedList[mid] = target)
            RETURN mid
        ELSE IF (target < sortedList[mid])
            high ← mid - 1
        ELSE
            low ← mid + 1
    }
    RETURN -1
}
\\\`\\\`\\\`
- Requires a **sorted** list
- Each step eliminates half the remaining items
- Much faster for large datasets

## Decidable vs Undecidable Problems
- **Decidable**: An algorithm exists that always produces a correct yes/no answer
- **Undecidable**: No algorithm can solve it for ALL possible inputs (e.g., the Halting Problem)
      \`
    },
    {
      id: 'cspalg1-input',
      type: 'input-boxes' as const,
      content: \`
**Applied Recall** ✍️

1) Binary search requires the list to be _______ before searching.

2) An algorithm that takes 2^n steps for n inputs is classified as _______ (reasonable or unreasonable).

3) A problem for which no algorithm can produce a correct answer for ALL inputs is called _______.
      \`,
      exercise: {
        boxes: 3,
        correctAnswers: ['sorted', 'unreasonable', 'undecidable'],
        hint1: 'The data must be in order.',
        hint2: 'Exponential growth makes it impractical for large n.',
        hint3: 'It cannot be decided by any algorithm.',
        explanation: 'Binary search needs sorted data. 2^n = unreasonable. Undecidable = no algorithm works for all inputs.'
      }
    },
    {
      id: 'cspalg1-dropdown',
      type: 'dropdown-select' as const,
      content: \`
**Compare Algorithms** 🔍
      \`,
      exercise: {
        dropdowns: [
          {
            label: 'Linear search checks ___ element(s) in the worst case for a list of n items',
            options: ['n elements', 'log2(n) elements', '1 element', 'n squared elements']
          },
          {
            label: 'Binary search checks ___ element(s) in the worst case for a list of n items',
            options: ['log2(n) elements', 'n elements', 'n/2 elements', '1 element']
          },
          {
            label: 'An algorithm that checks every possible ordering of n items (n! steps) is ___',
            options: ['Unreasonable (impractical for large n)', 'Reasonable', 'Optimal', 'Linear']
          }
        ],
        correctAnswers: ['n elements', 'log2(n) elements', 'Unreasonable (impractical for large n)'],
        hint1: 'Check every single one.',
        hint2: 'Halve the list each step.',
        hint3: 'Factorial grows faster than exponential.',
        explanation: 'Linear = n steps. Binary = log2(n) steps. n! = unreasonable.'
      }
    },
    {
      id: 'cspalg1-strategy',
      type: 'text' as const,
      content: \`
## AP Exam Strategy: Algorithms

- Know the difference between **linear search** (unsorted, n steps) and **binary search** (sorted, log2(n) steps)
- **Reasonable** = polynomial (n, n squared). **Unreasonable** = exponential or factorial (2^n, n!)
- Heuristic algorithms find "good enough" solutions when optimal is unreasonable
- The **Halting Problem** is the key example of an undecidable problem — no program can determine if another program will halt for ALL inputs
- Every algorithm uses sequencing, selection, and/or iteration
      \`
    },
    {
      id: 'cspalg1-applied',
      type: 'multiple-choice' as const,
      content: \`
**AP-Style Application** 🎯
      \`,
      exercise: {
        questions: [
          {
            question: 'A list has 1024 sorted elements. How many comparisons does binary search need in the worst case?',
            options: [
              '1024',
              '512',
              '10',
              '100'
            ],
            correctAnswer: 2,
            explanation: 'log2(1024) = 10. Binary search halves the list each step: 1024 -> 512 -> 256 -> 128 -> 64 -> 32 -> 16 -> 8 -> 4 -> 2 -> 1. That is 10 steps.'
          },
          {
            question: 'Which problem is undecidable?',
            options: [
              'Sorting a list of numbers',
              'Finding the shortest path between two cities',
              'Determining whether an arbitrary program will eventually stop running',
              'Searching for a value in a list'
            ],
            correctAnswer: 2,
            explanation: 'The Halting Problem — determining if any program will halt on any input — is proven undecidable by Alan Turing. No algorithm can solve it for ALL possible programs.'
          }
        ]
      }
    }
  ]
};
`);

// ─── 2. Algorithms & Programming ───
write('csp-algorithms-programming-part1.ts', `export const cspAlgorithmsProgrammingPart1Data = {
  topicSlug: 'csp-algorithms-programming',
  sections: [
    {
      id: 'cspap1-intro',
      type: 'text' as const,
      content: \`
# 💻 Algorithms & Programming

**Part 1 of 7 — Abstraction, Procedures, and Modularity**

---

## Abstraction in Programming

**Abstraction** means hiding complex details and exposing only what is necessary. It simplifies programs by managing complexity.

| Level | Example |
|-------|---------|
| **Low-level** | Binary code (0110 1001) |
| **Assembly** | MOV AX, 5 |
| **High-level language** | x = 5 |
| **Library/API** | sort(myList) |

> 🔑 Abstraction allows programmers to use complex features without understanding their internal implementation. You use \\\`sort()\\\` without knowing the sorting algorithm inside.

---

## Procedures (Functions)

A **procedure** is a named group of instructions that performs a specific task.

\\\`\\\`\\\`
PROCEDURE greet(name)
{
    DISPLAY("Hello, ")
    DISPLAY(name)
}

greet("Alice")    // Output: Hello, Alice
greet("Bob")      // Output: Hello, Bob
\\\`\\\`\\\`

### Benefits of Procedures
| Benefit | Description |
|---------|-----------|
| **Reusability** | Write once, call many times |
| **Readability** | Named procedures explain the code purpose |
| **Modularity** | Break large programs into manageable pieces |
| **Debugging** | Fix a bug in one place, fixed everywhere |
| **Collaboration** | Team members work on different procedures |
      \`
    },
    {
      id: 'cspap1-quiz1',
      type: 'multiple-choice' as const,
      content: \`
**Concept Check** 🎯
      \`,
      exercise: {
        questions: [
          {
            question: 'What is the main purpose of abstraction in programming?',
            options: [
              'To make programs run faster',
              'To manage complexity by hiding unnecessary details',
              'To make programs use less memory',
              'To prevent all bugs'
            ],
            correctAnswer: 1,
            explanation: 'Abstraction manages complexity. When you call sort(), you do not need to know whether it uses merge sort or quicksort internally. This lets you focus on WHAT you want to do, not HOW it works internally.'
          },
          {
            question: 'A procedure is called three times in a program. How many times is the procedure code written?',
            options: [
              'Three times',
              'Once — it is defined once and called three times',
              'Zero times if it is built in',
              'It depends on the programming language'
            ],
            correctAnswer: 1,
            explanation: 'A key benefit of procedures is reusability. The procedure is DEFINED once but can be CALLED as many times as needed. This avoids code duplication.'
          }
        ]
      }
    },
    {
      id: 'cspap1-content',
      type: 'text' as const,
      content: \`
## Parameters and Return Values

\\\`\\\`\\\`
PROCEDURE square(n)
{
    RETURN n * n
}

result ← square(5)     // result = 25
DISPLAY(square(3))      // Displays 9
\\\`\\\`\\\`

| Term | Definition |
|------|-----------|
| **Parameter** | Variable in the procedure definition that receives input |
| **Argument** | Actual value passed when calling the procedure |
| **Return value** | Value sent back to the caller |

### Procedural Abstraction
When you call \\\`calculateAverage(scores)\\\`, you do not need to know the implementation. The procedure name and parameters tell you WHAT it does, not HOW.

## APIs and Libraries
An **API** (Application Programming Interface) defines how software components interact. A **library** is a collection of pre-written procedures.

\\\`\\\`\\\`
// Using a library to create a random number
randomNum ← RANDOM(1, 100)  // Returns random integer between 1 and 100
\\\`\\\`\\\`

> 🔑 APIs enable **modularity** — complex systems built from independent, interchangeable components. You can swap one component without affecting the rest.

## Simulations
Programs that model real-world processes. Simulations use:
- **Random number generation** for unpredictable events
- **Simplifying assumptions** to make the model manageable
- Benefits: cheaper, faster, and safer than real experiments
- Limitation: only as accurate as the assumptions made
      \`
    },
    {
      id: 'cspap1-input',
      type: 'input-boxes' as const,
      content: \`
**Applied Recall** ✍️

1) A named group of instructions that performs a specific task is called a _______.

2) The value passed into a procedure call is called an _______.

3) A collection of pre-written procedures made available for programmers to use is a _______.
      \`,
      exercise: {
        boxes: 3,
        correctAnswers: ['procedure', 'argument', 'library'],
        hint1: 'Also called a function or method.',
        hint2: 'The actual value you provide when calling.',
        hint3: 'A library of reusable code.',
        explanation: 'Procedure = named code block. Argument = value passed in. Library = pre-built procedures.'
      }
    },
    {
      id: 'cspap1-dropdown',
      type: 'dropdown-select' as const,
      content: \`
**Classify the Concept** 🔍
      \`,
      exercise: {
        dropdowns: [
          {
            label: 'Using sort(myList) without knowing the internal algorithm demonstrates ___',
            options: ['Abstraction', 'Iteration', 'Binary search', 'Data compression']
          },
          {
            label: 'In PROCEDURE add(a, b), a and b are ___',
            options: ['Parameters', 'Arguments', 'Return values', 'Global variables']
          },
          {
            label: 'A program that models traffic flow using random events is a ___',
            options: ['Simulation', 'Database', 'Compiler', 'Search engine']
          }
        ],
        correctAnswers: ['Abstraction', 'Parameters', 'Simulation'],
        hint1: 'Hiding internal details.',
        hint2: 'They receive values in the definition.',
        hint3: 'It simulates reality.',
        explanation: 'Hiding details = abstraction. Definition variables = parameters. Modeling reality = simulation.'
      }
    },
    {
      id: 'cspap1-strategy',
      type: 'text' as const,
      content: \`
## AP Exam Strategy: Algorithms & Programming

- **Abstraction** reduces complexity — know examples at every level (binary to APIs)
- Know the difference: **parameter** (in definition) vs **argument** (in call)
- Procedures that RETURN values vs procedures that just DISPLAY — the AP exam distinguishes these
- **RANDOM(a, b)** returns an integer from a to b inclusive — used in simulations
- Simulations are NOT perfectly accurate — they depend on assumptions and simplifications
- APIs and libraries are examples of procedural abstraction
      \`
    },
    {
      id: 'cspap1-applied',
      type: 'multiple-choice' as const,
      content: \`
**AP-Style Application** 🎯
      \`,
      exercise: {
        questions: [
          {
            question: 'PROCEDURE mystery(a, b)\\n{\\n    RETURN a + b\\n}\\nx ← mystery(3, mystery(1, 2))\\nWhat is the value of x?',
            options: [
              '3',
              '5',
              '6',
              '9'
            ],
            correctAnswer: 2,
            explanation: 'Inner call: mystery(1, 2) returns 1 + 2 = 3. Outer call: mystery(3, 3) returns 3 + 3 = 6. Nested procedure calls are evaluated from the inside out.'
          },
          {
            question: 'A student uses a simulation to model the spread of a disease. Which is a limitation of this approach?',
            options: [
              'Simulations always produce identical results',
              'The results are only as accurate as the assumptions built into the model',
              'Simulations take longer than real experiments',
              'Simulations cannot use random numbers'
            ],
            correctAnswer: 1,
            explanation: 'Simulations simplify reality. If the model assumes the disease spreads at a fixed rate but it actually varies, the results will be inaccurate. Simulations are limited by their assumptions.'
          }
        ]
      }
    }
  ]
};
`);

// ─── 3. Procedures & Lists ───
write('csp-procedures-lists-part1.ts', `export const cspProceduresListsPart1Data = {
  topicSlug: 'csp-procedures-lists',
  sections: [
    {
      id: 'csppl1-intro',
      type: 'text' as const,
      content: \`
# 📝 Procedures & Lists

**Part 1 of 7 — List Operations, Traversals, and Procedure Design**

---

## Lists in AP CSP

A **list** (also called an array) stores an ordered collection of values.

\\\`\\\`\\\`
// AP CSP pseudocode uses 1-based indexing!
myList ← ["apple", "banana", "cherry"]
DISPLAY(myList[1])    // "apple" (index 1 is the first element)
DISPLAY(myList[3])    // "cherry"
\\\`\\\`\\\`

> ⚠️ **AP CSP lists are 1-indexed** (first element at index 1). Most programming languages are 0-indexed.

---

## List Operations

| Operation | Pseudocode | Effect |
|-----------|-----------|--------|
| **Access** | \\\`list[i]\\\` | Get element at index i |
| **Assign** | \\\`list[i] ← value\\\` | Set element at index i |
| **Insert** | \\\`INSERT(list, i, value)\\\` | Insert value at index i, shifting others right |
| **Append** | \\\`APPEND(list, value)\\\` | Add value to the end of the list |
| **Remove** | \\\`REMOVE(list, i)\\\` | Remove element at index i, shifting others left |
| **Length** | \\\`LENGTH(list)\\\` | Number of elements in the list |

### Example
\\\`\\\`\\\`
scores ← [90, 85, 78]
APPEND(scores, 92)           // [90, 85, 78, 92]
INSERT(scores, 2, 88)        // [90, 88, 85, 78, 92]
REMOVE(scores, 1)            // [88, 85, 78, 92]
DISPLAY(LENGTH(scores))      // 4
\\\`\\\`\\\`
      \`
    },
    {
      id: 'csppl1-quiz1',
      type: 'multiple-choice' as const,
      content: \`
**Concept Check** 🎯
      \`,
      exercise: {
        questions: [
          {
            question: 'In AP CSP pseudocode, what index is the FIRST element of a list?',
            options: [
              'Index 0',
              'Index 1',
              'Index -1',
              'It varies'
            ],
            correctAnswer: 1,
            explanation: 'AP CSP pseudocode uses 1-based indexing. The first element is at index 1, the second at index 2, etc. This is different from most programming languages which use 0-based indexing.'
          },
          {
            question: 'list ← [10, 20, 30]\\nINSERT(list, 2, 15)\\nWhat is the list now?',
            options: [
              '[10, 15, 20, 30]',
              '[10, 20, 15, 30]',
              '[15, 10, 20, 30]',
              '[10, 20, 30, 15]'
            ],
            correctAnswer: 0,
            explanation: 'INSERT(list, 2, 15) inserts 15 at index 2. The existing elements at indices 2 and 3 shift right. Result: [10, 15, 20, 30]. The list grows by one element.'
          }
        ]
      }
    },
    {
      id: 'csppl1-content',
      type: 'text' as const,
      content: \`
## List Traversal

### FOR EACH Loop
\\\`\\\`\\\`
total ← 0
FOR EACH score IN scores
{
    total ← total + score
}
average ← total / LENGTH(scores)
\\\`\\\`\\\`

### Index-Based Loop
\\\`\\\`\\\`
i ← 1
REPEAT UNTIL (i > LENGTH(scores))
{
    DISPLAY(scores[i])
    i ← i + 1
}
\\\`\\\`\\\`

## Common List Algorithms

### Find the Maximum
\\\`\\\`\\\`
PROCEDURE findMax(list)
{
    max ← list[1]
    FOR EACH item IN list
    {
        IF (item > max)
        {
            max ← item
        }
    }
    RETURN max
}
\\\`\\\`\\\`

### Filter a List
\\\`\\\`\\\`
PROCEDURE getPositives(list)
{
    result ← []
    FOR EACH item IN list
    {
        IF (item > 0)
        {
            APPEND(result, item)
        }
    }
    RETURN result
}
\\\`\\\`\\\`

### Swap Two Elements
\\\`\\\`\\\`
temp ← list[i]
list[i] ← list[j]
list[j] ← temp
\\\`\\\`\\\`
      \`
    },
    {
      id: 'csppl1-input',
      type: 'input-boxes' as const,
      content: \`
**Applied Recall** ✍️

1) APPEND(list, value) adds the value to the _______ of the list.

2) REMOVE(list, i) removes the element at index i and shifts remaining elements _______.

3) To swap two list elements without losing data, you need a _______ variable.
      \`,
      exercise: {
        boxes: 3,
        correctAnswers: ['end', 'left', 'temp'],
        hint1: 'Appending goes to the back.',
        hint2: 'They fill the gap left behind.',
        hint3: 'Temporarily holds one value during the swap.',
        explanation: 'APPEND adds to end. REMOVE shifts left. Swap needs temp variable.'
      }
    },
    {
      id: 'csppl1-dropdown',
      type: 'dropdown-select' as const,
      content: \`
**List Operations** 🔍
      \`,
      exercise: {
        dropdowns: [
          {
            label: 'After list ← [5, 10, 15], APPEND(list, 20), LENGTH(list) returns ___',
            options: ['4', '3', '20', '5']
          },
          {
            label: 'To process every element in a list without needing the index, use ___',
            options: ['FOR EACH loop', 'Index-based loop only', 'Binary search', 'REMOVE operation']
          },
          {
            label: 'list ← [1, 2, 3]; REMOVE(list, 2); list is now ___',
            options: ['[1, 3]', '[1, 2]', '[2, 3]', '[1, 2, 3]']
          }
        ],
        correctAnswers: ['4', 'FOR EACH loop', '[1, 3]'],
        hint1: 'Started with 3, added 1.',
        hint2: 'FOR EACH gives each value directly.',
        hint3: 'Index 2 in 1-based indexing is the second element (2).',
        explanation: '3 + 1 = 4. FOR EACH for simple traversal. Remove index 2 removes the value 2.'
      }
    },
    {
      id: 'csppl1-strategy',
      type: 'text' as const,
      content: \`
## AP Exam Strategy: Procedures & Lists

- **Lists are 1-indexed** on the AP exam — first element is list[1], NOT list[0]
- Know all list operations: access, assign, INSERT, APPEND, REMOVE, LENGTH
- INSERT shifts elements RIGHT (list grows). REMOVE shifts elements LEFT (list shrinks)
- The swap algorithm (using temp) appears frequently — memorize it
- Common patterns: sum/average, find max/min, filter, count matches
- FOR EACH is read-only for the loop variable — changes to the variable do NOT change the list
      \`
    },
    {
      id: 'csppl1-applied',
      type: 'multiple-choice' as const,
      content: \`
**AP-Style Application** 🎯
      \`,
      exercise: {
        questions: [
          {
            question: 'list ← [3, 1, 4, 1, 5]\\nWhat does this procedure return?\\nPROCEDURE mystery(list)\\n{\\n    count ← 0\\n    FOR EACH item IN list\\n    {\\n        IF (item > 2)\\n        { count ← count + 1 }\\n    }\\n    RETURN count\\n}',
            options: [
              '2',
              '3',
              '5',
              '4'
            ],
            correctAnswer: 1,
            explanation: 'The procedure counts elements greater than 2. Checking: 3>2 (yes), 1>2 (no), 4>2 (yes), 1>2 (no), 5>2 (yes). Count = 3.'
          },
          {
            question: 'What is displayed?\\nlist ← [10, 20, 30]\\nlist[2] ← list[1] + list[3]\\nDISPLAY(list[2])',
            options: [
              '20',
              '30',
              '40',
              '50'
            ],
            correctAnswer: 2,
            explanation: 'list[1] = 10 and list[3] = 30. list[2] gets 10 + 30 = 40. Remember: 1-indexed, so list[1] is the first element.'
          }
        ]
      }
    }
  ]
};
`);

// ─── 4. Computing Systems & Networks ───
write('csp-computing-systems-networks-part1.ts', `export const cspComputingSystemsNetworksPart1Data = {
  topicSlug: 'csp-computing-systems-networks',
  sections: [
    {
      id: 'cspcsn1-intro',
      type: 'text' as const,
      content: \`
# 🌐 Computing Systems & Networks

**Part 1 of 7 — Hardware, Software, and Network Fundamentals**

---

## Computing Systems

A computing system processes data using:

| Component | Role | Examples |
|-----------|------|---------|
| **Input** | Receives data from users/environment | Keyboard, mouse, microphone, sensor |
| **Processing** | Executes instructions on data | CPU (Central Processing Unit) |
| **Storage** | Saves data for later use | Hard drive, SSD, RAM |
| **Output** | Presents results | Monitor, speakers, printer |

### Software Types
| Type | Description | Examples |
|------|-----------|---------|
| **System software** | Manages hardware resources | Operating system (Windows, macOS, Linux) |
| **Application software** | Performs tasks for users | Web browser, word processor, game |

> 🔑 Software is a set of instructions. Hardware is the physical equipment. Software runs ON hardware.

---

## Networks

A **network** connects computing devices to share resources and communicate.

| Network Type | Scale | Example |
|-------------|-------|---------|
| **LAN** | Local Area Network (building/room) | School WiFi |
| **WAN** | Wide Area Network (large geographic area) | The Internet |

### How Data Travels
Data is broken into **packets** — small chunks sent independently across the network. Each packet contains:
- **Header**: Source address, destination address, packet number
- **Payload**: The actual data being sent
- **Trailer**: Error-checking information
      \`
    },
    {
      id: 'cspcsn1-quiz1',
      type: 'multiple-choice' as const,
      content: \`
**Concept Check** 🎯
      \`,
      exercise: {
        questions: [
          {
            question: 'Why is data sent across the internet in packets rather than as one large file?',
            options: [
              'Packets are cheaper to send',
              'Packets can take different routes, improving reliability and efficiency',
              'Large files cannot be sent electronically',
              'Packets are encrypted but files are not'
            ],
            correctAnswer: 1,
            explanation: 'Packet switching allows different packets to take different routes to the destination. If one path is congested or fails, packets reroute automatically. They are reassembled at the destination.'
          },
          {
            question: 'What is the role of the CPU in a computing system?',
            options: [
              'Stores data permanently',
              'Displays information on screen',
              'Processes instructions and performs calculations',
              'Connects to the internet'
            ],
            correctAnswer: 2,
            explanation: 'The CPU (Central Processing Unit) is the "brain" of the computer. It fetches, decodes, and executes instructions. Storage is handled by drives, display by monitors, and networking by NICs.'
          }
        ]
      }
    },
    {
      id: 'cspcsn1-content',
      type: 'text' as const,
      content: \`
## The Internet

The Internet is a global network of networks — a **WAN** connecting millions of smaller networks worldwide.

### Key Internet Infrastructure

| Component | Purpose |
|-----------|---------|
| **Router** | Forwards packets between networks, choosing the best path |
| **DNS** | Domain Name System — translates names (google.com) to IP addresses |
| **IP Address** | Unique numerical address for each device on the network |
| **Bandwidth** | Maximum data transfer rate (bits per second) |
| **Latency** | Time delay for data to travel from source to destination |

### Scalability
The Internet was designed to scale. Key design principles:
- **Open standards**: Anyone can connect using standard protocols
- **Redundancy**: Multiple paths between any two points
- **Decentralized**: No single point of control
- **Packet switching**: Efficient use of shared connections

## Parallel and Distributed Computing
- **Sequential**: Tasks done one after another
- **Parallel**: Multiple tasks done simultaneously on multiple processors
- **Distributed**: Tasks split across multiple computers on a network

> 🔑 Parallel computing can speed up tasks but has limits — some tasks have dependencies that prevent parallelization.
      \`
    },
    {
      id: 'cspcsn1-input',
      type: 'input-boxes' as const,
      content: \`
**Applied Recall** ✍️

1) The system that translates domain names (like google.com) to IP addresses is called _______.

2) Data is split into smaller chunks called _______ before being sent across a network.

3) A device that forwards data between networks, choosing the best path, is a _______.
      \`,
      exercise: {
        boxes: 3,
        correctAnswers: ['DNS', 'packets', 'router'],
        hint1: 'Domain Name System.',
        hint2: 'Small pieces of data sent independently.',
        hint3: 'It routes traffic between networks.',
        explanation: 'DNS = name to IP. Packets = data chunks. Router = forwards between networks.'
      }
    },
    {
      id: 'cspcsn1-dropdown',
      type: 'dropdown-select' as const,
      content: \`
**Network Concepts** 🔍
      \`,
      exercise: {
        dropdowns: [
          {
            label: 'A school WiFi network covering one building is a ___',
            options: ['LAN (Local Area Network)', 'WAN (Wide Area Network)', 'DNS', 'The Internet']
          },
          {
            label: 'The maximum data transfer rate of a connection is called ___',
            options: ['Bandwidth', 'Latency', 'DNS resolution', 'Packet size']
          },
          {
            label: 'The Internet uses ___ switching, which breaks data into small independent chunks',
            options: ['Packet switching', 'Circuit switching', 'Message switching', 'Cell switching']
          }
        ],
        correctAnswers: ['LAN (Local Area Network)', 'Bandwidth', 'Packet switching'],
        hint1: 'Local to one building.',
        hint2: 'Maximum rate, measured in bits per second.',
        hint3: 'Data broken into packets.',
        explanation: 'School WiFi = LAN. Max rate = bandwidth. Internet uses packet switching.'
      }
    },
    {
      id: 'cspcsn1-strategy',
      type: 'text' as const,
      content: \`
## AP Exam Strategy: Computing Systems & Networks

- Know the four components: input, processing, storage, output
- **DNS** translates human-readable names to IP addresses — tested frequently
- **Packets** contain header (addresses), payload (data), and can take different routes
- **Redundancy** in the Internet means multiple paths exist — no single point of failure
- Bandwidth = max speed. Latency = delay. Know the difference
- Parallel computing has speedup limits due to task dependencies (sequential bottleneck)
      \`
    },
    {
      id: 'cspcsn1-applied',
      type: 'multiple-choice' as const,
      content: \`
**AP-Style Application** 🎯
      \`,
      exercise: {
        questions: [
          {
            question: 'Two packets from the same email arrive at the destination in different order. What happens?',
            options: [
              'The email is lost',
              'The packets are reassembled in the correct order using sequence numbers in the headers',
              'The email arrives with the content scrambled',
              'The sender must resend the email'
            ],
            correctAnswer: 1,
            explanation: 'Each packet has a sequence number in its header. The destination computer uses these numbers to reassemble packets in the correct order, regardless of arrival order.'
          },
          {
            question: 'A task takes 60 seconds sequentially. With 4 processors running in parallel (assuming perfect parallelization), the minimum time is:',
            options: [
              '60 seconds',
              '15 seconds',
              '240 seconds',
              '4 seconds'
            ],
            correctAnswer: 1,
            explanation: 'With perfect parallelization, 4 processors divide the work equally: 60/4 = 15 seconds. In practice, overhead and dependencies often prevent perfect speedup.'
          }
        ]
      }
    }
  ]
};
`);

// ─── 5. Internet Protocols ───
write('csp-internet-protocols-part1.ts', `export const cspInternetProtocolsPart1Data = {
  topicSlug: 'csp-internet-protocols',
  sections: [
    {
      id: 'cspip1-intro',
      type: 'text' as const,
      content: \`
# 🔗 Internet Protocols

**Part 1 of 7 — TCP/IP, HTTP, and How the Internet Works**

---

## The Protocol Stack

The Internet uses layered protocols, each handling a specific job:

| Layer | Protocol | Purpose |
|-------|----------|---------|
| **Application** | HTTP, HTTPS, SMTP, FTP | Formats data for user applications |
| **Transport** | TCP, UDP | Ensures reliable delivery (TCP) or fast delivery (UDP) |
| **Internet** | IP | Addresses and routes packets across networks |
| **Network Access** | Ethernet, WiFi | Physical connection and data framing |

> 🔑 Each layer adds its own header to the data (encapsulation). The receiving end removes headers layer by layer.

---

## Key Protocols

### IP (Internet Protocol)
- Assigns a unique address to every device
- **IPv4**: 32-bit addresses (e.g., 192.168.1.1) — about 4.3 billion addresses
- **IPv6**: 128-bit addresses (e.g., 2001:0db8::1) — virtually unlimited addresses
- IPv6 was created because IPv4 addresses are running out

### TCP (Transmission Control Protocol)
- Guarantees reliable, ordered delivery
- Breaks data into packets, numbers them, and reassembles at destination
- Requests retransmission of lost packets
- Used for: web pages, email, file transfers

### HTTP / HTTPS
- **HTTP**: HyperText Transfer Protocol — how web browsers request and receive web pages
- **HTTPS**: HTTP Secure — adds encryption using TLS/SSL
- HTTPS prevents eavesdropping on the data in transit
      \`
    },
    {
      id: 'cspip1-quiz1',
      type: 'multiple-choice' as const,
      content: \`
**Concept Check** 🎯
      \`,
      exercise: {
        questions: [
          {
            question: 'Why was IPv6 developed?',
            options: [
              'IPv4 was too slow',
              'IPv4 does not support wireless connections',
              'IPv4 addresses (about 4.3 billion) are running out as more devices connect',
              'IPv4 could not handle video streaming'
            ],
            correctAnswer: 2,
            explanation: 'IPv4 has 32-bit addresses (about 4.3 billion unique addresses). With smartphones, IoT devices, and global growth, this is not enough. IPv6 uses 128-bit addresses, providing virtually unlimited addresses.'
          },
          {
            question: 'What does TCP guarantee that IP alone does not?',
            options: [
              'Faster delivery',
              'Reliable, ordered delivery with retransmission of lost packets',
              'Encryption of all data',
              'Wireless connectivity'
            ],
            correctAnswer: 1,
            explanation: 'IP only handles addressing and routing — packets may arrive out of order, be duplicated, or be lost. TCP adds reliability: sequence numbers, acknowledgments, and retransmission of lost packets.'
          }
        ]
      }
    },
    {
      id: 'cspip1-content',
      type: 'text' as const,
      content: \`
## How a Web Request Works

When you type a URL in your browser:

1. **DNS lookup**: Browser asks DNS server to translate domain name to IP address
2. **TCP connection**: Browser establishes a connection to the web server
3. **HTTP request**: Browser sends a request for the specific page
4. **Server response**: Server sends back HTML, CSS, JavaScript, images as packets
5. **Rendering**: Browser assembles and displays the page

## Protocols Comparison

| Protocol | Reliable? | Ordered? | Speed | Use Case |
|----------|-----------|---------|-------|----------|
| **TCP** | Yes | Yes | Slower (overhead) | Web, email, file transfer |
| **UDP** | No | No | Faster (less overhead) | Video streaming, gaming, VoIP |

### Why UDP Sometimes?
- Video calls: a few dropped frames are better than waiting for retransmission
- Gaming: outdated position data is useless even if reliably delivered
- Streaming: better to skip ahead than pause for missing data

## Certificate Authorities and HTTPS
- A **Certificate Authority (CA)** verifies website identity
- HTTPS uses certificates to prove the server is who it claims to be
- The lock icon in your browser means the connection is encrypted AND the server identity was verified
      \`
    },
    {
      id: 'cspip1-input',
      type: 'input-boxes' as const,
      content: \`
**Applied Recall** ✍️

1) The protocol that translates domain names to IP addresses is _______.

2) TCP guarantees reliable delivery; _______ trades reliability for speed and is used in video streaming.

3) HTTPS adds _______ to HTTP, preventing eavesdropping on data in transit.
      \`,
      exercise: {
        boxes: 3,
        correctAnswers: ['DNS', 'UDP', 'encryption'],
        hint1: 'Domain Name System.',
        hint2: 'User Datagram Protocol.',
        hint3: 'Scrambles data so only the intended recipient can read it.',
        explanation: 'DNS resolves names. UDP = fast but unreliable. HTTPS adds encryption.'
      }
    },
    {
      id: 'cspip1-dropdown',
      type: 'dropdown-select' as const,
      content: \`
**Protocol Selection** 🔍
      \`,
      exercise: {
        dropdowns: [
          {
            label: 'Downloading a file that must arrive complete and in order should use ___',
            options: ['TCP', 'UDP', 'DNS', 'IP only']
          },
          {
            label: 'IPv4 uses ___ bits for addresses, providing about 4.3 billion unique addresses',
            options: ['32 bits', '64 bits', '128 bits', '16 bits']
          },
          {
            label: 'The "S" in HTTPS stands for ___',
            options: ['Secure', 'Simple', 'Standard', 'Server']
          }
        ],
        correctAnswers: ['TCP', '32 bits', 'Secure'],
        hint1: 'Needs reliability and ordering.',
        hint2: '2^32 = about 4.3 billion.',
        hint3: 'HTTP Secure.',
        explanation: 'File download needs TCP. IPv4 = 32-bit. HTTPS = HTTP Secure.'
      }
    },
    {
      id: 'cspip1-strategy',
      type: 'text' as const,
      content: \`
## AP Exam Strategy: Internet Protocols

- Know the protocol layers: Application (HTTP), Transport (TCP/UDP), Internet (IP), Network Access
- **TCP** = reliable + ordered (web, email). **UDP** = fast + unreliable (video, gaming)
- **IPv4** (32-bit) vs **IPv6** (128-bit) — know WHY IPv6 was needed
- DNS = domain name to IP address translation
- HTTPS = HTTP + encryption — the lock icon means encrypted AND authenticated
- Know the 5 steps of a web request: DNS → TCP → HTTP request → response → render
      \`
    },
    {
      id: 'cspip1-applied',
      type: 'multiple-choice' as const,
      content: \`
**AP-Style Application** 🎯
      \`,
      exercise: {
        questions: [
          {
            question: 'A user connects to a website using HTTP instead of HTTPS. Which risk does this create?',
            options: [
              'The website loads slower',
              'The data is not encrypted, so third parties on the network could read it',
              'The website cannot display images',
              'The user cannot log in'
            ],
            correctAnswer: 1,
            explanation: 'HTTP sends data in plaintext. Anyone on the same network (e.g., public WiFi) could intercept and read the data, including passwords and personal information. HTTPS encrypts data in transit.'
          },
          {
            question: 'Which protocol would be BEST for a live video call?',
            options: [
              'TCP — because all data must arrive reliably',
              'UDP — because speed matters more than perfect reliability',
              'HTTP — because it is used for web content',
              'DNS — because it resolves addresses'
            ],
            correctAnswer: 1,
            explanation: 'Live video calls prioritize low latency. A few dropped frames are acceptable, but waiting for retransmission would cause unacceptable delays. UDP provides the speed needed.'
          }
        ]
      }
    }
  ]
};
`);

console.log('Done with CSP batch 2 (5 files)');
