const fs = require('fs');
const path = require('path');
const dir = path.join(__dirname, '..', 'src', 'data', 'interactive-lessons');

function write(name, content) {
  fs.writeFileSync(path.join(dir, name), content);
  console.log('Wrote:', name);
}

// ─── 1. Creative Development ───
write('csp-creative-development-part1.ts', `export const cspCreativeDevelopmentPart1Data = {
  topicSlug: 'csp-creative-development',
  sections: [
    {
      id: 'cspcd1-intro',
      type: 'text' as const,
      content: \`
# 💡 Creative Development

**Part 1 of 7 — Program Design, Collaboration, and Development Process**

---

## The Development Process

Creating software is not a straight line from idea to finished product. It is an **iterative** process involving planning, designing, coding, testing, and refining.

| Phase | Description | Example |
|-------|-----------|---------|
| **Investigating** | Define the problem and gather requirements | Survey users about what features they need |
| **Designing** | Plan the solution using pseudocode, flowcharts | Draw a flowchart for the checkout process |
| **Prototyping** | Build an initial working version | Create a basic version with core features only |
| **Testing** | Verify correctness and find bugs | Run the program with edge cases |
| **Reflecting** | Evaluate and improve | Collect feedback, plan next iteration |

> 🔑 **Iterative development** means repeating these phases. After reflecting, you go back to investigating or designing to improve.

---

## Program Design with Purpose

Every program is designed to solve a problem or express a creative idea.

- **Purpose**: What the program is intended to do
- **Function**: How the program behaves and what it produces
- **Input**: Data the user provides (clicks, text, sensor data)
- **Output**: What the program displays or produces (text, graphics, sound)
      \`
    },
    {
      id: 'cspcd1-quiz1',
      type: 'multiple-choice' as const,
      content: \`
**Concept Check** 🎯
      \`,
      exercise: {
        questions: [
          {
            question: 'Which best describes iterative development?',
            options: [
              'Writing all code at once and testing only at the end',
              'Repeating cycles of designing, prototyping, testing, and refining',
              'Having one person write the entire program alone',
              'Copying code from existing programs without changes'
            ],
            correctAnswer: 1,
            explanation: 'Iterative development revisits the design and implementation multiple times. Each cycle adds features, fixes bugs, and improves the product based on feedback.'
          },
          {
            question: 'What is the "purpose" of a program?',
            options: [
              'The programming language it is written in',
              'The number of lines of code it contains',
              'The problem it solves or the creative idea it expresses',
              'The speed at which it runs'
            ],
            correctAnswer: 2,
            explanation: 'A program purpose describes what it is intended to do — the problem it solves for users or the creative expression it enables.'
          }
        ]
      }
    },
    {
      id: 'cspcd1-content',
      type: 'text' as const,
      content: \`
## Collaboration in Development

Working with others produces better programs because diverse perspectives identify blind spots, generate more creative solutions, and catch more errors.

### Collaboration Benefits
- **Diverse perspectives** catch edge cases one person might miss
- **Code review** improves quality and finds bugs early
- **Pair programming** combines a "driver" (types code) and a "navigator" (plans logic)
- **Consultation** with users ensures the program meets real needs

### Documentation and Comments

\\\`\\\`\\\`
// This function calculates the average score
// Input: a list of numeric scores
// Output: the mean value as a decimal
PROCEDURE calculateAverage(scores)
{
    sum ← 0
    FOR EACH score IN scores
    {
        sum ← sum + score
    }
    RETURN sum / LENGTH(scores)
}
\\\`\\\`\\\`

Documentation helps:
- Others understand your code
- You remember your own logic later
- Teams work together effectively

## Acknowledging Code Sources
When using code written by others (libraries, APIs, open-source), always credit the original author. This is both ethical and often legally required.
      \`
    },
    {
      id: 'cspcd1-input',
      type: 'input-boxes' as const,
      content: \`
**Applied Recall** ✍️

1) The process of repeating design-prototype-test-refine cycles is called _______ development.

2) In pair programming, the person who types the code is called the _______.

3) Written explanations of what code does, placed inside the source code, are called _______.
      \`,
      exercise: {
        boxes: 3,
        correctAnswers: ['iterative', 'driver', 'comments'],
        hint1: 'You iterate (repeat) the process.',
        hint2: 'They drive the keyboard.',
        hint3: 'They comment on what the code does.',
        explanation: 'Iterative = repeated cycles. Driver = types code. Comments = in-code documentation.'
      }
    },
    {
      id: 'cspcd1-dropdown',
      type: 'dropdown-select' as const,
      content: \`
**Classify the Phase** 🔍
      \`,
      exercise: {
        dropdowns: [
          {
            label: 'Drawing a flowchart before writing code belongs to the ___ phase',
            options: ['Designing', 'Testing', 'Investigating', 'Reflecting']
          },
          {
            label: 'Running the program with unusual inputs to find bugs is the ___ phase',
            options: ['Testing', 'Designing', 'Prototyping', 'Investigating']
          },
          {
            label: 'Gathering user feedback after a release belongs to the ___ phase',
            options: ['Reflecting', 'Prototyping', 'Designing', 'Testing']
          }
        ],
        correctAnswers: ['Designing', 'Testing', 'Reflecting'],
        hint1: 'Planning the solution visually.',
        hint2: 'Looking for errors and edge cases.',
        hint3: 'Evaluating the finished product.',
        explanation: 'Flowcharts = design. Bug-finding = testing. Feedback evaluation = reflecting.'
      }
    },
    {
      id: 'cspcd1-strategy',
      type: 'text' as const,
      content: \`
## AP Exam Strategy: Creative Development

- The Create Performance Task requires you to describe the **purpose**, **function**, and **development process** of your program
- Know the difference between **purpose** (why it exists) and **function** (what it does)
- Collaboration questions test whether you understand the BENEFITS (diverse perspectives, bug-catching) not just that teamwork exists
- Always document your code — the AP exam tests your ability to explain your code in writing
- Remember: iterative development is the correct approach. Waterfall (all planning then all coding) is NOT the expected answer
      \`
    },
    {
      id: 'cspcd1-applied',
      type: 'multiple-choice' as const,
      content: \`
**AP-Style Application** 🎯
      \`,
      exercise: {
        questions: [
          {
            question: 'A student builds an app, gets feedback from friends, redesigns the interface, and releases a new version. This process illustrates:',
            options: [
              'Linear development',
              'Iterative development',
              'Parallel processing',
              'Abstraction'
            ],
            correctAnswer: 1,
            explanation: 'Building, getting feedback, redesigning, and releasing again is a textbook example of iterative development — repeating the cycle to improve the product.'
          },
          {
            question: 'Which is the BEST reason to collaborate on a programming project?',
            options: [
              'It reduces the total amount of code needed',
              'Different perspectives help identify problems and generate creative solutions',
              'It eliminates all bugs in the final product',
              'It makes the program run faster'
            ],
            correctAnswer: 1,
            explanation: 'Diverse perspectives are the primary benefit of collaboration. Different team members bring different experiences, helping catch edge cases and produce more creative solutions.'
          }
        ]
      }
    }
  ]
};
`);

// ─── 2. Collaboration & Development ───
write('csp-collaboration-development-part1.ts', `export const cspCollaborationDevelopmentPart1Data = {
  topicSlug: 'csp-collaboration-development',
  sections: [
    {
      id: 'cspcdev1-intro',
      type: 'text' as const,
      content: \`
# 🤝 Collaboration & Program Development

**Part 1 of 7 — Version Control, Testing Strategies, and Program Correctness**

---

## Version Control and Collaborative Tools

Version control systems track changes to code over time, allowing teams to work simultaneously without overwriting each other.

| Feature | Description |
|---------|-----------|
| **Commit** | Save a snapshot of your code at a point in time |
| **Branch** | Independent line of development (experiment without affecting main code) |
| **Merge** | Combine changes from different branches |
| **Conflict** | When two people edit the same line; must be resolved manually |
| **History** | Log of all changes — can revert to any previous version |

> 🔑 Version control lets teams work on different features simultaneously and merge their work together safely.

---

## Testing for Program Correctness

| Testing Type | What It Tests | Example |
|-------------|-------------|---------|
| **Normal cases** | Typical expected inputs | Entering a valid age like 25 |
| **Boundary cases** | Edge values at limits | Age = 0, Age = 120 |
| **Invalid cases** | Inputs that should be rejected | Age = -5, Age = "abc" |
| **Empty cases** | No input or empty data | Empty string, empty list |

### Test Coverage
Testing EVERY possible input is usually impossible. Good testers focus on:
- **Representative** normal inputs
- **Edge cases** at boundaries
- **Known problematic** inputs from past bugs
      \`
    },
    {
      id: 'cspcdev1-quiz1',
      type: 'multiple-choice' as const,
      content: \`
**Concept Check** 🎯
      \`,
      exercise: {
        questions: [
          {
            question: 'Why is it usually impossible to test a program with every possible input?',
            options: [
              'Testing is too expensive',
              'The number of possible inputs is often infinite or astronomically large',
              'Computers cannot run test cases',
              'Testing only works on small programs'
            ],
            correctAnswer: 1,
            explanation: 'For most programs, the number of possible inputs is effectively infinite. A text field alone accepts any combination of characters. Instead, testers select representative test cases including edge cases.'
          },
          {
            question: 'What is a boundary (edge) test case for a function that accepts ages 0-120?',
            options: [
              'Age = 50',
              'Age = 0 or Age = 120',
              'Age = "hello"',
              'Not providing any input'
            ],
            correctAnswer: 1,
            explanation: 'Boundary cases test the limits of valid input. For ages 0-120, the boundaries are exactly 0 and 120. Many bugs occur at boundaries where conditions use < vs <=.'
          }
        ]
      }
    },
    {
      id: 'cspcdev1-content',
      type: 'text' as const,
      content: \`
## Types of Errors

| Error Type | When Detected | Example |
|-----------|-------------|---------|
| **Syntax error** | Before running (compile/parse time) | Missing parenthesis, misspelled keyword |
| **Runtime error** | During execution | Division by zero, accessing invalid index |
| **Logic error** | Produces wrong output | Using + instead of -, off-by-one error |
| **Overflow error** | When a value exceeds storage capacity | Storing 999999999999 in a 32-bit integer |

### Debugging Strategies
1. **Add print/display statements** to trace variable values
2. **Use a debugger** to step through code line by line
3. **Rubber duck debugging** — explain the code out loud to find the flaw
4. **Binary search debugging** — comment out half the code to isolate the bug
5. **Check recent changes** — the bug is likely in code you just modified

## Incremental Development
Build your program in small pieces, testing each piece before adding more. This approach:
- Makes bugs easier to find (the bug is in the newest code)
- Provides working checkpoints to fall back to
- Builds confidence as features are verified
      \`
    },
    {
      id: 'cspcdev1-input',
      type: 'input-boxes' as const,
      content: \`
**Applied Recall** ✍️

1) An error caused by misspelling a keyword or forgetting a parenthesis is called a _______ error.

2) An error where the program runs but produces the wrong output is called a _______ error.

3) A version control feature that lets you experiment without affecting the main codebase is called a _______.
      \`,
      exercise: {
        boxes: 3,
        correctAnswers: ['syntax', 'logic', 'branch'],
        hint1: 'Related to the structure/grammar of the code.',
        hint2: 'The logic of the program is flawed.',
        hint3: 'Like a branch of a tree — a separate path.',
        explanation: 'Syntax = grammar mistakes. Logic = wrong results. Branch = independent development line.'
      }
    },
    {
      id: 'cspcdev1-dropdown',
      type: 'dropdown-select' as const,
      content: \`
**Classify the Error** 🔍
      \`,
      exercise: {
        dropdowns: [
          {
            label: 'Dividing by zero during execution causes a ___ error',
            options: ['Runtime error', 'Syntax error', 'Logic error', 'Overflow error']
          },
          {
            label: 'A program that calculates area as length + width instead of length * width has a ___ error',
            options: ['Logic error', 'Syntax error', 'Runtime error', 'Overflow error']
          },
          {
            label: 'When a number exceeds the maximum value a variable can store, it is a(n) ___ error',
            options: ['Overflow error', 'Syntax error', 'Logic error', 'Underflow error']
          }
        ],
        correctAnswers: ['Runtime error', 'Logic error', 'Overflow error'],
        hint1: 'Happens while the program is running.',
        hint2: 'Uses the wrong operation — produces wrong results.',
        hint3: 'The value overflows the storage capacity.',
        explanation: 'Division by zero = runtime. Wrong operator = logic. Exceeded capacity = overflow.'
      }
    },
    {
      id: 'cspcdev1-strategy',
      type: 'text' as const,
      content: \`
## AP Exam Strategy: Collaboration & Development

- Know the **four error types**: syntax, runtime, logic, overflow — the exam tests classification
- **Logic errors** are the hardest to find because the program runs without crashing
- Testing should include normal, boundary, and invalid cases
- You CANNOT test every possible input — focus on representative and edge cases
- Incremental development with frequent testing is the recommended approach
- Version control terminology (commit, branch, merge) appears in conceptual questions
      \`
    },
    {
      id: 'cspcdev1-applied',
      type: 'multiple-choice' as const,
      content: \`
**AP-Style Application** 🎯
      \`,
      exercise: {
        questions: [
          {
            question: 'A student writes a program to find the average of a list. The program works for most lists but crashes when the list is empty. This is best described as:',
            options: [
              'A syntax error',
              'A logic error',
              'A runtime error caused by division by zero on empty input',
              'An overflow error'
            ],
            correctAnswer: 2,
            explanation: 'An empty list has 0 elements. Dividing the sum by 0 causes a runtime error. This is why testing with empty/boundary inputs is essential.'
          },
          {
            question: 'Two programmers edit the same line of code in different branches and try to merge. What happens?',
            options: [
              'The changes are automatically combined',
              'A merge conflict occurs that must be resolved manually',
              'Both changes are deleted',
              'The program crashes'
            ],
            correctAnswer: 1,
            explanation: 'When two branches modify the same line, a merge conflict occurs. The version control system cannot automatically decide which change to keep, so a human must resolve it.'
          }
        ]
      }
    }
  ]
};
`);

// ─── 3. Binary & Data Representation ───
write('csp-binary-data-part1.ts', `export const cspBinaryDataPart1Data = {
  topicSlug: 'csp-binary-data',
  sections: [
    {
      id: 'cspbd1-intro',
      type: 'text' as const,
      content: \`
# 💻 Binary & Data Representation

**Part 1 of 7 — Binary Numbers, Conversions, and Digital Information**

---

## Why Binary?

Computers use **binary** (base-2) because electronic circuits have two states: ON (1) and OFF (0). ALL data — numbers, text, images, sound — is ultimately stored as sequences of 0s and 1s.

| Base | Name | Digits Used | Example |
|------|------|------------|---------|
| Base-2 | Binary | 0, 1 | 1010 |
| Base-10 | Decimal | 0-9 | 10 |
| Base-16 | Hexadecimal | 0-9, A-F | A |

---

## Binary to Decimal Conversion

Each binary digit (bit) represents a power of 2:

| Position | 7 | 6 | 5 | 4 | 3 | 2 | 1 | 0 |
|----------|---|---|---|---|---|---|---|---|
| **Value** | 128 | 64 | 32 | 16 | 8 | 4 | 2 | 1 |

**Example:** 1101 in binary = ?
- 1 x 8 + 1 x 4 + 0 x 2 + 1 x 1 = 8 + 4 + 0 + 1 = **13**

**Example:** 10110 in binary = ?
- 1 x 16 + 0 x 8 + 1 x 4 + 1 x 2 + 0 x 1 = 16 + 4 + 2 = **22**

> 🔑 With **n bits**, you can represent 2^n different values (0 to 2^n - 1). 8 bits = 1 byte = 256 values.
      \`
    },
    {
      id: 'cspbd1-quiz1',
      type: 'multiple-choice' as const,
      content: \`
**Concept Check** 🎯
      \`,
      exercise: {
        questions: [
          {
            question: 'What is the decimal value of binary 1010?',
            options: [
              '8',
              '10',
              '12',
              '5'
            ],
            correctAnswer: 1,
            explanation: '1010 = 1x8 + 0x4 + 1x2 + 0x1 = 8 + 0 + 2 + 0 = 10. Each position doubles in value from right to left: 1, 2, 4, 8, 16, etc.'
          },
          {
            question: 'How many different values can be represented with 4 bits?',
            options: [
              '4',
              '8',
              '16',
              '32'
            ],
            correctAnswer: 2,
            explanation: 'With n bits, you can represent 2^n values. 2^4 = 16 different values (0 through 15). Adding one more bit always DOUBLES the number of possible values.'
          }
        ]
      }
    },
    {
      id: 'cspbd1-content',
      type: 'text' as const,
      content: \`
## Decimal to Binary Conversion

Repeatedly divide by 2 and track remainders (read bottom to top):

**Convert 25 to binary:**
- 25 / 2 = 12 remainder **1**
- 12 / 2 = 6 remainder **0**
- 6 / 2 = 3 remainder **0**
- 3 / 2 = 1 remainder **1**
- 1 / 2 = 0 remainder **1**
- Read upward: **11001**

## Overflow

When a value exceeds the number of bits available:
- 4 bits can store 0-15
- If you try to store 16 in 4 bits, it **overflows** back to 0
- This is like an odometer rolling over from 999 to 000

## Data Units

| Unit | Size |
|------|------|
| **Bit** | Single 0 or 1 |
| **Byte** | 8 bits |
| **Kilobyte (KB)** | ~1,000 bytes |
| **Megabyte (MB)** | ~1,000 KB |
| **Gigabyte (GB)** | ~1,000 MB |
| **Terabyte (TB)** | ~1,000 GB |

## Representing Other Data Types
- **Text**: Each character mapped to a number (ASCII: 7 bits, Unicode: up to 32 bits)
- **Colors**: RGB values (each 0-255 = 8 bits, total 24 bits per pixel)
- **Sound**: Sampled as numbers at regular intervals (sampling rate x bit depth)
      \`
    },
    {
      id: 'cspbd1-input',
      type: 'input-boxes' as const,
      content: \`
**Applied Recall** ✍️

1) A single binary digit (0 or 1) is called a _______.

2) 8 bits make up one _______.

3) With n bits, you can represent _______ to the power of n different values.
      \`,
      exercise: {
        boxes: 3,
        correctAnswers: ['bit', 'byte', '2'],
        hint1: 'The smallest unit of data.',
        hint2: 'The standard unit of digital storage.',
        hint3: 'Binary is base-2.',
        explanation: 'bit = binary digit. byte = 8 bits. 2^n possible values with n bits.'
      }
    },
    {
      id: 'cspbd1-dropdown',
      type: 'dropdown-select' as const,
      content: \`
**Binary Practice** 🔍
      \`,
      exercise: {
        dropdowns: [
          {
            label: 'Binary 1111 in decimal equals ___',
            options: ['15', '16', '14', '8']
          },
          {
            label: 'The maximum decimal value storable in 8 bits (1 byte) is ___',
            options: ['255', '256', '128', '127']
          },
          {
            label: 'Adding one more bit to a binary number ___ the number of representable values',
            options: ['Doubles', 'Adds one to', 'Triples', 'Has no effect on']
          }
        ],
        correctAnswers: ['15', '255', 'Doubles'],
        hint1: '8 + 4 + 2 + 1',
        hint2: '2^8 - 1',
        hint3: 'n bits = 2^n values, (n+1) bits = 2^(n+1) = 2 x 2^n.',
        explanation: '1111 = 15. Max 8-bit value = 255 (2^8 - 1). Each additional bit doubles capacity.'
      }
    },
    {
      id: 'cspbd1-strategy',
      type: 'text' as const,
      content: \`
## AP Exam Strategy: Binary & Data

- **Memorize** powers of 2: 1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024
- Know both conversions: binary-to-decimal and decimal-to-binary
- With n bits: 2^n values, range 0 to 2^n - 1
- **Overflow** = value exceeds bit capacity. AP loves testing this concept
- Know how text (ASCII/Unicode), images (RGB pixels), and sound (samples) are stored in binary
- One additional bit DOUBLES the representable values — this is the key relationship
      \`
    },
    {
      id: 'cspbd1-applied',
      type: 'multiple-choice' as const,
      content: \`
**AP-Style Application** 🎯
      \`,
      exercise: {
        questions: [
          {
            question: 'A system uses 3 bits to store color values. How many different colors can it represent?',
            options: [
              '3',
              '6',
              '8',
              '9'
            ],
            correctAnswer: 2,
            explanation: '2^3 = 8 different values. With 3 bits, the possible values are 000, 001, 010, 011, 100, 101, 110, 111 = 8 total.'
          },
          {
            question: 'A music file is sampled at 44,100 samples per second with 16 bits per sample. How many bits does one second of mono audio require?',
            options: [
              '44,100',
              '705,600',
              '16',
              '44,116'
            ],
            correctAnswer: 1,
            explanation: '44,100 samples/sec x 16 bits/sample = 705,600 bits per second. This is how file size scales with sampling rate and bit depth.'
          }
        ]
      }
    }
  ]
};
`);

// ─── 4. Data ───
write('csp-data-part1.ts', `export const cspDataPart1Data = {
  topicSlug: 'csp-data',
  sections: [
    {
      id: 'cspd1-intro',
      type: 'text' as const,
      content: \`
# 📊 Data

**Part 1 of 7 — Collection, Processing, and Extracting Information**

---

## Data, Information, and Knowledge

| Level | Definition | Example |
|-------|-----------|---------|
| **Data** | Raw, unprocessed facts and figures | 72, 68, 75, 80, 65 |
| **Information** | Data that has been organized or analyzed | "The average temperature this week was 72F" |
| **Knowledge** | Understanding derived from information | "Temperatures are trending warmer this spring" |

> 🔑 **Data alone is not useful.** It must be processed, cleaned, and analyzed to produce meaningful information that supports decision-making.

---

## Data Collection

### Sources of Data
- **Surveys and forms**: Directly asking people
- **Sensors**: Temperature, GPS, accelerometer
- **Web scraping**: Extracting data from websites
- **APIs**: Accessing data programmatically from services
- **Transaction logs**: Purchases, login records

### Metadata
**Metadata** is data about data. It describes properties of the actual data without containing the data itself.

| Data | Metadata |
|------|----------|
| A photo | Date taken, camera model, GPS coordinates, file size |
| An email | Sender, recipient, timestamp, subject line |
| A song file | Artist, album, duration, bit rate, file format |
      \`
    },
    {
      id: 'cspd1-quiz1',
      type: 'multiple-choice' as const,
      content: \`
**Concept Check** 🎯
      \`,
      exercise: {
        questions: [
          {
            question: 'Which of the following is an example of metadata for a digital photo?',
            options: [
              'The colors of the pixels in the image',
              'The subject of the photo',
              'The date, time, and GPS location where the photo was taken',
              'The artistic style of the photo'
            ],
            correctAnswer: 2,
            explanation: 'Metadata is data ABOUT the data. The date, time, and GPS location describe properties of the photo file, not the content of the image itself.'
          },
          {
            question: 'What is the difference between data and information?',
            options: [
              'They are the same thing',
              'Data is processed and organized; information is raw',
              'Data is raw facts; information is data that has been processed to be meaningful',
              'Information is always numerical; data is always text'
            ],
            correctAnswer: 2,
            explanation: 'Data is raw and unorganized (e.g., a list of numbers). Information is data that has been processed, organized, or analyzed to have meaning (e.g., the average of those numbers).'
          }
        ]
      }
    },
    {
      id: 'cspd1-content',
      type: 'text' as const,
      content: \`
## Cleaning and Processing Data

Real-world data is often messy. Before analysis, you must:

| Issue | Problem | Solution |
|-------|---------|----------|
| **Missing values** | Some fields are blank | Remove row, fill with default, or estimate |
| **Duplicates** | Same record appears twice | Remove duplicate entries |
| **Inconsistent format** | "NY", "New York", "new york" | Standardize to one format |
| **Outliers** | Values far from normal range | Investigate — keep if valid, remove if error |
| **Wrong data type** | Age stored as text "25" | Convert to number 25 |

## Extracting Information from Data

### Common Analyses
- **Filtering**: Show only records matching a condition
- **Sorting**: Arrange by a specific field
- **Aggregation**: Calculate sum, average, count, min, max
- **Grouping**: Categorize records by a shared attribute
- **Visualization**: Charts, graphs, maps to reveal patterns

### Correlation vs Causation
- **Correlation**: Two variables change together (ice cream sales and drownings both rise in summer)
- **Causation**: One variable directly causes the other
- **Key rule**: Correlation does NOT imply causation. A hidden third variable (confounding variable) may explain both
      \`
    },
    {
      id: 'cspd1-input',
      type: 'input-boxes' as const,
      content: \`
**Applied Recall** ✍️

1) Data about data — such as the date a photo was taken or the artist of a song — is called _______.

2) When two variables change together but one does not cause the other, the relationship is a _______.

3) Removing duplicate records and standardizing formats is part of _______ the data.
      \`,
      exercise: {
        boxes: 3,
        correctAnswers: ['metadata', 'correlation', 'cleaning'],
        hint1: 'Meta = about.',
        hint2: 'They are correlated but not causally linked.',
        hint3: 'Making the data clean and consistent.',
        explanation: 'Metadata = data about data. Correlation = related but not causal. Cleaning = preparing data for analysis.'
      }
    },
    {
      id: 'cspd1-dropdown',
      type: 'dropdown-select' as const,
      content: \`
**Classify the Concept** 🔍
      \`,
      exercise: {
        dropdowns: [
          {
            label: 'A list of raw test scores with no analysis is ___',
            options: ['Data (raw, unprocessed)', 'Information (processed)', 'Knowledge (understanding)', 'Metadata']
          },
          {
            label: '"Students who study more tend to score higher" is a statement about ___',
            options: ['Correlation', 'Causation (proven)', 'Metadata', 'Data cleaning']
          },
          {
            label: 'The file size and resolution of an image are examples of ___',
            options: ['Metadata', 'Data', 'Information', 'Knowledge']
          }
        ],
        correctAnswers: ['Data (raw, unprocessed)', 'Correlation', 'Metadata'],
        hint1: 'Just raw numbers with no context.',
        hint2: 'Tendency, not proven causal link.',
        hint3: 'Attributes of the file itself, not the content.',
        explanation: 'Raw scores = data. Study/score relationship = correlation. File attributes = metadata.'
      }
    },
    {
      id: 'cspd1-strategy',
      type: 'text' as const,
      content: \`
## AP Exam Strategy: Data

- Know the hierarchy: **Data → Information → Knowledge**
- **Metadata** questions are common — remember it is data ABOUT data, not the content itself
- **Correlation vs causation** appears nearly every year — always look for confounding variables
- Data cleaning is necessary because real data has errors, duplicates, and inconsistencies
- Know how filtering, sorting, and aggregation extract meaning from datasets
- Large datasets can reveal patterns not visible in small samples
      \`
    },
    {
      id: 'cspd1-applied',
      type: 'multiple-choice' as const,
      content: \`
**AP-Style Application** 🎯
      \`,
      exercise: {
        questions: [
          {
            question: 'A study finds that cities with more firefighters also have more fires. What is the best explanation?',
            options: [
              'Firefighters cause fires',
              'This is causation — more firefighters lead to more fires',
              'This is correlation — larger cities have both more firefighters AND more fires',
              'The data must be wrong'
            ],
            correctAnswer: 2,
            explanation: 'City size is the confounding variable. Larger cities have more of everything — more firefighters AND more fires. The correlation does not mean firefighters cause fires. This is a classic AP CSP question.'
          },
          {
            question: 'A dataset has 10,000 rows. Some rows have "USA", others "United States", others "US" in the country field. What should be done first?',
            options: [
              'Analyze the data as-is',
              'Delete all rows with inconsistent values',
              'Clean the data by standardizing the country field to one format',
              'Add more data to fix the inconsistency'
            ],
            correctAnswer: 2,
            explanation: 'Data cleaning requires standardizing inconsistent formats. All three values refer to the same country so they should be unified to one standard form before analysis.'
          }
        ]
      }
    }
  ]
};
`);

// ─── 5. Variables & Control ───
write('csp-variables-control-part1.ts', `export const cspVariablesControlPart1Data = {
  topicSlug: 'csp-variables-control',
  sections: [
    {
      id: 'cspvc1-intro',
      type: 'text' as const,
      content: \`
# 🔧 Variables & Control Structures

**Part 1 of 7 — Variables, Assignments, Conditionals, and Loops**

---

## Variables and Assignment

In the AP CSP pseudocode:
\\\`\\\`\\\`
score ← 0           // Assign 0 to score
name ← "Alice"      // Assign "Alice" to name
score ← score + 10  // Update score (now 10)
\\\`\\\`\\\`

| Concept | Pseudocode | Meaning |
|---------|-----------|---------|
| **Assignment** | \\\`x ← 5\\\` | Store 5 in variable x |
| **Update** | \\\`x ← x + 1\\\` | Add 1 to current value of x |
| **Display** | \\\`DISPLAY(x)\\\` | Show value of x on screen |

> 🔑 The **left arrow (←)** means "gets the value of." It is NOT an equality check — it is an assignment. The right side is evaluated first, then stored in the left side.

---

## Data Types

| Type | Examples | Operations |
|------|---------|-----------|
| **Number** | 42, 3.14, -7 | +, -, *, /, MOD |
| **String** | "hello", "123" | Concatenation, length |
| **Boolean** | true, false | AND, OR, NOT |
| **List** | [1, 2, 3] | Access, insert, append, remove |
      \`
    },
    {
      id: 'cspvc1-quiz1',
      type: 'multiple-choice' as const,
      content: \`
**Concept Check** 🎯
      \`,
      exercise: {
        questions: [
          {
            question: 'After these statements, what is the value of x?\\nx ← 5\\ny ← x\\nx ← 10',
            options: [
              'x = 5, y = 10',
              'x = 10, y = 10',
              'x = 10, y = 5',
              'x = 5, y = 5'
            ],
            correctAnswer: 2,
            explanation: 'Line 1: x gets 5. Line 2: y gets the current value of x (5). Line 3: x gets 10. Changing x later does NOT change y — y already stored its own copy of 5.'
          },
          {
            question: 'What does x ← x + 1 do?',
            options: [
              'Checks if x equals x + 1',
              'Creates a new variable called x + 1',
              'Adds 1 to the current value of x and stores the result back in x',
              'Causes an error because x cannot equal x + 1'
            ],
            correctAnswer: 2,
            explanation: 'The right side (x + 1) is evaluated first using the current value of x. The result is then stored back in x.This is an update, not an equation.'
          }
        ]
      }
    },
    {
      id: 'cspvc1-content',
      type: 'text' as const,
      content: \`
## Conditionals (Selection)

\\\`\\\`\\\`
IF (condition)
{
    // Runs if condition is true
}
ELSE
{
    // Runs if condition is false
}
\\\`\\\`\\\`

### Comparison Operators
| Operator | Meaning |
|----------|---------|
| = | Equal to |
| ≠ | Not equal to |
| > | Greater than |
| < | Less than |
| ≥ | Greater than or equal to |
| ≤ | Less than or equal to |

### Boolean Operators
| Operator | Description |
|----------|-----------|
| **AND** | True only if BOTH are true |
| **OR** | True if at LEAST one is true |
| **NOT** | Reverses true/false |

## Loops (Iteration)

### REPEAT n TIMES
\\\`\\\`\\\`
REPEAT 5 TIMES
{
    DISPLAY("Hello")
}
// Displays "Hello" five times
\\\`\\\`\\\`

### REPEAT UNTIL (condition)
\\\`\\\`\\\`
x ← 1
REPEAT UNTIL (x > 5)
{
    DISPLAY(x)
    x ← x + 1
}
// Displays: 1, 2, 3, 4, 5
\\\`\\\`\\\`

> ⚠️ REPEAT UNTIL checks the condition BEFORE each iteration. If the condition is already true, the loop body never executes.
      \`
    },
    {
      id: 'cspvc1-input',
      type: 'input-boxes' as const,
      content: \`
**Applied Recall** ✍️

1) The assignment operator in AP CSP pseudocode is the _______ arrow (←).

2) The Boolean operator that returns true only when BOTH conditions are true is _______.

3) REPEAT UNTIL checks the condition _______ each iteration (not after).
      \`,
      exercise: {
        boxes: 3,
        correctAnswers: ['left', 'AND', 'before'],
        hint1: 'Points from right to left.',
        hint2: 'Both must be true.',
        hint3: 'Pre-check, like a while loop.',
        explanation: 'Left arrow for assignment. AND = both true. REPEAT UNTIL checks before running.'
      }
    },
    {
      id: 'cspvc1-dropdown',
      type: 'dropdown-select' as const,
      content: \`
**Evaluate the Expression** 🔍
      \`,
      exercise: {
        dropdowns: [
          {
            label: 'NOT (true AND false) evaluates to ___',
            options: ['true', 'false', 'error', 'null']
          },
          {
            label: '(5 > 3) OR (2 > 10) evaluates to ___',
            options: ['true', 'false', 'error', 'null']
          },
          {
            label: 'After: x ← 3, x ← x * x, the value of x is ___',
            options: ['9', '3', '6', '27']
          }
        ],
        correctAnswers: ['true', 'true', '9'],
        hint1: 'true AND false = false. NOT false = true.',
        hint2: 'OR needs at least one true. 5 > 3 is true.',
        hint3: 'x = 3, then x = 3 * 3 = 9.',
        explanation: 'NOT(false) = true. OR with one true = true. 3 * 3 = 9.'
      }
    },
    {
      id: 'cspvc1-strategy',
      type: 'text' as const,
      content: \`
## AP Exam Strategy: Variables & Control

- **Trace code carefully** — write down variable values after each line
- Assignment (←) is NOT equality — the right side is evaluated first
- Know De Morgan: NOT(A AND B) = NOT A OR NOT B; NOT(A OR B) = NOT A AND NOT B
- REPEAT UNTIL is like a while loop that continues UNTIL the condition becomes true (opposite of while)
- Every IF needs a corresponding condition; nested IFs test conditions in order
- Swapping two variables requires a temp variable: temp ← a, a ← b, b ← temp
      \`
    },
    {
      id: 'cspvc1-applied',
      type: 'multiple-choice' as const,
      content: \`
**AP-Style Application** 🎯
      \`,
      exercise: {
        questions: [
          {
            question: 'What is displayed?\\nx ← 10\\ny ← 20\\ntemp ← x\\nx ← y\\ny ← temp\\nDISPLAY(x)\\nDISPLAY(y)',
            options: [
              '10 then 20',
              '20 then 10',
              '20 then 20',
              '10 then 10'
            ],
            correctAnswer: 1,
            explanation: 'This is the classic swap algorithm. temp saves x (10). x gets y (20). y gets temp (10). Result: x=20, y=10. The temp variable prevents losing a value during the swap.'
          },
          {
            question: 'count ← 0\\nREPEAT UNTIL (count ≥ 3)\\n{\\n    count ← count + 1\\n}\\nDISPLAY(count)',
            options: [
              '2',
              '3',
              '4',
              '0'
            ],
            correctAnswer: 1,
            explanation: 'count starts at 0. Loop: 0 < 3 (run, count=1), 1 < 3 (run, count=2), 2 < 3 (run, count=3), 3 >= 3 (stop). Display: 3.'
          }
        ]
      }
    }
  ]
};
`);

console.log('Done with CSP batch 1 (5 files)');
