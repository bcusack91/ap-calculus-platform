export const cspBinaryDataPart1Data = {
  topicSlug: 'csp-binary-data',
  sections: [
    {
      id: 'cspbd1-intro',
      type: 'text' as const,
      content: `
# 💻 Binary & Data Representation

**Part 1 of 7 — Binary Numbers, Conversions, and Digital Information**

---

## Why Binary?

Computers use **binary** (base-2) because electronic circuits have two states: ON (1) and OFF (0). ALL data — numbers, text, images, sound — is ultimately stored as sequences of 0s and 1s.

| Base | Name | Digits Used | Example |
|------|------|------------|---------|
| Base-2 | Binary | 0, 1 | 1010 |
| Base-10 | Decimal | 0-9 | 10 |

The AP exam uses only binary and decimal; hexadecimal is not tested.

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
      `
    },
    {
      id: 'cspbd1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
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
      content: `
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
- Trying to store 16 in 4 bits causes an **overflow error**: the value needs more bits than are available, so the program either stops with an error or produces a wrong result
- This happens in languages that store integers in a **fixed number of bits**. The language on the AP exam reference sheet does not have this limit: its integers are limited only by the computer's memory

## Round-off Error

Real numbers (numbers with a decimal part) are also stored in a fixed number of bits, so many of them can only be stored as **approximations**. Calculations with them can produce small **round-off errors** (for example, a result that should be 0.3 printing as 0.30000000000000004).

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
Bits are grouped to represent **abstractions** such as numbers, characters, and colors:
- **Text**: Each character is stored as a bit pattern under an agreed-upon code
- **Colors**: RGB values (each 0-255 = 8 bits, total 24 bits per pixel)
- **Sound**: Analog sound is **sampled**: its value is measured at regular intervals and each sample is stored in bits
      `
    },
    {
      id: 'cspbd1-input',
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

1) A single binary digit (0 or 1) is called a _______.

2) 8 bits make up one _______.

3) With n bits, you can represent _______ to the power of n different values.
      `,
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
      content: `
**Binary Practice** 🔍
      `,
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
      content: `
## AP Exam Strategy: Binary & Data

- **Memorize** powers of 2: 1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024
- Know both conversions: binary-to-decimal and decimal-to-binary
- With n bits: 2^n values, range 0 to 2^n - 1
- **Overflow** = value exceeds a fixed number of bits; **round-off** = a real number can only be stored approximately
- Know that text, images (RGB pixels), and sound (samples) are all stored as bits, and that the same bits can mean different things in different contexts
- One additional bit DOUBLES the representable values — this is the key relationship
      `
    },
    {
      id: 'cspbd1-applied',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application** 🎯
      `,
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
