import type { LessonData } from '../registry'

/**
 * Hand-authored interactive lesson — Units of Measurement (Grade 4 Math).
 * Registry key: 'units-measurement-grade4' (matches the DB Topic.slug).
 * 5 parts, gold-standard structure: teach → worked examples → interactive practice
 * (multiple-choice + input-boxes + dropdown) → exit quiz. Grade-4 friendly: favors
 * concept checks (multiple-choice + dropdown) with light numeric work via input-boxes.
 * Covers 4.MD.A.1 / 4.MD.A.2: relative sizes of units and one-step conversions
 * (always larger unit → smaller unit, i.e. multiply). Math uses doubled backslashes
 * (template-literal strings); the degree symbol is written literally (°) for readability.
 */
export const parts: LessonData[] = [
  // ───────────────────────── PART 1 ─────────────────────────
  {
    topicSlug: 'units-measurement-grade4',
    sections: [
      {
        id: 'um1-intro',
        type: 'text' as const,
        content: `# 📏 Units of Measurement

**Part 1 of 5 — Measuring Length**

---

### Topics in This Part

| Section |
|---------|
| What Is a Unit? |
| Metric Length: mm, cm, m, km |
| Customary Length: in, ft, yd, mi |
| Choosing the Right Unit |

> 🔑 **Key Idea:** A **measurement** tells you *how much* of something there is — how long, how heavy, how much liquid, or how much time. To measure, you need two parts: a **number** and a **unit** (like "$5$ centimeters"). This lesson builds up the units you need and shows how to switch between them.`,
      },
      {
        id: 'um1-what-is-unit',
        type: 'text' as const,
        content: `## What Is a Unit?

A **unit** is a standard amount that everyone agrees on, so a measurement means the same thing to everybody.

If you said a desk is "$4$ long," nobody knows what you mean — $4$ *what*? Pencils? Hands? Steps? A **unit** fixes that:

- "$4$ **feet** long" → everyone pictures the same length.
- "$4$ **pounds** heavy" → everyone pictures the same weight.

There are **two main systems** of units you will use:

| System | Used For | Example Units |
|--------|----------|---------------|
| **Metric** (or *SI*) | Used by scientists and most of the world | millimeter, centimeter, meter, kilometer |
| **Customary** (U.S.) | Everyday measuring in the U.S. | inch, foot, yard, mile |

> 💡 Both systems measure the same real things (length, weight, volume). They just use different units — like how "dog" and "perro" are two words for the same animal.`,
      },
      {
        id: 'um1-metric-length',
        type: 'text' as const,
        content: `## Metric Length: mm, cm, m, km

Metric length units are built on **tens**, which makes them easy. From smallest to largest:

| Unit | Short | About the Size Of… |
|------|-------|--------------------|
| **millimeter** | mm | the thickness of a coin's edge |
| **centimeter** | cm | the width of your pinky fingernail |
| **meter** | m | a little wider than a doorway (one big step) |
| **kilometer** | km | about $10$ football fields — a short walk |

The key relationships to memorize:

$$1 \\text{ cm} = 10 \\text{ mm} \\qquad 1 \\text{ m} = 100 \\text{ cm} \\qquad 1 \\text{ km} = 1000 \\text{ m}$$

> 🔑 **The "bigger holds more smaller" idea:** It takes **$10$** little millimeters to fill up **$1$** centimeter, and **$100$** centimeters to fill **$1$** meter. The bigger the unit, the *fewer* you need to cover the same distance.`,
      },
      {
        id: 'um1-metric-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Which metric unit is the LARGEST?',
              options: ['millimeter (mm)', 'centimeter (cm)', 'meter (m)', 'kilometer (km)'],
              correctAnswer: 3,
              explanation: 'From smallest to largest the order is mm → cm → m → km. A kilometer is $1000$ meters, so it is by far the largest.',
            },
            {
              question: 'How many millimeters make $1$ centimeter?',
              options: ['$1$', '$10$', '$100$', '$1000$'],
              correctAnswer: 1,
              explanation: 'It takes $10$ millimeters to fill $1$ centimeter: $1 \\text{ cm} = 10 \\text{ mm}$.',
            },
          ],
        },
      },
      {
        id: 'um1-customary-length',
        type: 'text' as const,
        content: `## Customary Length: in, ft, yd, mi

The U.S. customary length units don't all jump by tens — you have to memorize each one. From smallest to largest:

| Unit | Short | About the Size Of… |
|------|-------|--------------------|
| **inch** | in | the length of your thumb tip |
| **foot** | ft | the length of a sheet of paper (a "big foot") |
| **yard** | yd | from your nose to your fingertip (one big stride) |
| **mile** | mi | about $15$–$20$ minutes of walking |

The key relationships to memorize:

$$1 \\text{ ft} = 12 \\text{ in} \\qquad 1 \\text{ yd} = 3 \\text{ ft} \\qquad 1 \\text{ mi} = 5280 \\text{ ft}$$

> ⚠️ **Watch out:** A foot is **$12$** inches, *not* $10$. The customary system isn't based on tens, so the numbers ($12$, $3$, $5280$) just have to be learned.`,
      },
      {
        id: 'um1-length-facts-drill',
        type: 'input-boxes' as const,
        content: `**Unit Facts Drill** 🧮

Fill in each blank using the length facts above.

**1)** $1$ meter $= \\,?$ centimeters
**2)** $1$ foot $= \\,?$ inches
**3)** $1$ kilometer $= \\,?$ meters`,
        exercise: {
          boxes: 3,
          correctAnswers: ['100', '12', '1000'],
          hint1: 'Metric jumps by big round numbers: $1 \\text{ m} = 100 \\text{ cm}$.',
          hint2: 'Customary is special: a foot is $12$ inches, not $10$.',
          hint3: 'The largest jump: $1 \\text{ km} = 1000 \\text{ m}$.',
          explanation: '1) $1\\text{ m} = 100\\text{ cm}$.  2) $1\\text{ ft} = 12\\text{ in}$.  3) $1\\text{ km} = 1000\\text{ m}$. Metric uses round numbers; the foot uses $12$.',
        },
      },
      {
        id: 'um1-choose-unit',
        type: 'dropdown-select' as const,
        content: `**Choosing the Right Unit** 🔽

Pick the unit that makes the most sense for measuring each thing. (A good measurement uses a unit that gives a "comfortable" number — not too huge, not too tiny.)`,
        exercise: {
          dropdowns: [
            { label: 'The length of a pencil:', options: ['kilometers', 'centimeters', 'miles', 'meters'] },
            { label: 'The distance from your home to another city:', options: ['inches', 'centimeters', 'kilometers', 'millimeters'] },
            { label: 'The height of a classroom door:', options: ['meters', 'kilometers', 'millimeters', 'miles'] },
          ],
          correctAnswers: ['centimeters', 'kilometers', 'meters'],
          hint1: 'A pencil is short — measuring it in kilometers or miles would give a tiny fraction, so use a small unit.',
          hint2: 'A trip between cities is very long, so a very large unit (kilometers or miles) gives a sensible number.',
          hint3: 'A door is about $2$ of these tall, so a medium unit fits best.',
          explanation: 'Use small units (cm, mm, in) for small objects, medium units (m, ft, yd) for room-sized things, and large units (km, mi) for long distances. A pencil ≈ a few centimeters, a door ≈ $2$ meters, and city-to-city ≈ many kilometers.',
        },
      },
      {
        id: 'um1-wrap',
        type: 'text' as const,
        content: `## Wrapping Up Part 1

You now know the two systems and their length units:

- **Metric:** mm → cm → m → km, where $1\\text{ cm}=10\\text{ mm}$, $1\\text{ m}=100\\text{ cm}$, $1\\text{ km}=1000\\text{ m}$.
- **Customary:** in → ft → yd → mi, where $1\\text{ ft}=12\\text{ in}$, $1\\text{ yd}=3\\text{ ft}$, $1\\text{ mi}=5280\\text{ ft}$.

> 🔑 **The big pattern for the whole lesson:** Bigger units take *more* small units to fill them. We'll use that fact in Part 4 to *convert* between units. Next up: measuring **weight** and **liquids**.`,
      },
    ],
  },

  // ───────────────────────── PART 2 ─────────────────────────
  {
    topicSlug: 'units-measurement-grade4',
    sections: [
      {
        id: 'um2-intro',
        type: 'text' as const,
        content: `# ⚖️ Units of Measurement

**Part 2 of 5 — Weight & Liquid Volume**

---

### Topics in This Part

| Section |
|---------|
| Mass & Weight: g, kg and oz, lb, ton |
| Liquid Volume: mL, L and the Customary Cups |
| Matching Units to Objects |

> 🔑 **Key Idea:** **Weight** tells you how heavy something is. **Liquid volume** (also called *capacity*) tells you how much liquid a container holds. Each has its own metric and customary units.`,
      },
      {
        id: 'um2-weight',
        type: 'text' as const,
        content: `## Mass & Weight

**Metric weight** units (smallest to largest):

| Unit | Short | About the Weight Of… |
|------|-------|----------------------|
| **gram** | g | one paperclip |
| **kilogram** | kg | a thick textbook or a small melon |

$$1 \\text{ kg} = 1000 \\text{ g}$$

**Customary weight** units (smallest to largest):

| Unit | Short | About the Weight Of… |
|------|-------|----------------------|
| **ounce** | oz | a slice of bread |
| **pound** | lb | a loaf of bread |
| **ton** | T | a small car |

$$1 \\text{ lb} = 16 \\text{ oz} \\qquad 1 \\text{ ton} = 2000 \\text{ lb}$$

> 💡 The short way to write *pound* is **lb** (from the old Latin word *libra*). The short way to write *ounce* is **oz**.`,
      },
      {
        id: 'um2-weight-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'How many ounces are in $1$ pound?',
              options: ['$10$', '$12$', '$16$', '$100$'],
              correctAnswer: 2,
              explanation: 'There are $16$ ounces in $1$ pound: $1 \\text{ lb} = 16 \\text{ oz}$. (A pound is *not* based on tens.)',
            },
            {
              question: 'Which unit would you use to weigh a single grape?',
              options: ['grams', 'kilograms', 'pounds', 'tons'],
              correctAnswer: 0,
              explanation: 'A grape is very light, so a small unit like grams fits. Kilograms, pounds, and tons are all far too large for one grape.',
            },
          ],
        },
      },
      {
        id: 'um2-volume',
        type: 'text' as const,
        content: `## Liquid Volume (Capacity)

**Metric liquid volume** (smallest to largest):

| Unit | Short | About the Amount In… |
|------|-------|----------------------|
| **milliliter** | mL | about $20$ drops from an eyedropper |
| **liter** | L | a large water bottle |

$$1 \\text{ L} = 1000 \\text{ mL}$$

**Customary liquid volume** (smallest to largest):

| Unit | Short | About the Amount In… |
|------|-------|----------------------|
| **fluid ounce** | fl oz | a spoonful or two |
| **cup** | c | a small glass of milk |
| **pint** | pt | a small carton of cream |
| **quart** | qt | a large carton of juice |
| **gallon** | gal | a big jug of milk |

The customary "ladder" of liquid units:

$$1 \\text{ c} = 8 \\text{ fl oz} \\qquad 1 \\text{ pt} = 2 \\text{ c} \\qquad 1 \\text{ qt} = 2 \\text{ pt} \\qquad 1 \\text{ gal} = 4 \\text{ qt}$$

> 🔑 **Memory trick — "G-Q-P-C":** A **G**allon holds **4 Q**uarts, each quart holds **2 P**ints, each pint holds **2 C**ups. Going up the ladder, the containers get bigger.`,
      },
      {
        id: 'um2-volume-drill',
        type: 'input-boxes' as const,
        content: `**Quick Facts Drill** 🧮

Fill in each blank using the unit facts above.

**1)** $1$ liter $= \\,?$ milliliters
**2)** $1$ gallon $= \\,?$ quarts
**3)** $1$ kilogram $= \\,?$ grams`,
        exercise: {
          boxes: 3,
          correctAnswers: ['1000', '4', '1000'],
          hint1: 'Metric units jump by big round numbers. $1 \\text{ L} = 1000 \\text{ mL}$.',
          hint2: 'Remember "G-Q-P-C": $1$ gallon holds $4$ quarts.',
          hint3: 'Like liters and milliliters, $1$ kilogram $= 1000$ grams.',
          explanation: '1) $1\\text{ L} = 1000\\text{ mL}$.  2) $1\\text{ gal} = 4\\text{ qt}$.  3) $1\\text{ kg} = 1000\\text{ g}$. Metric units use $1000$; the gallon uses $4$.',
        },
      },
      {
        id: 'um2-match',
        type: 'dropdown-select' as const,
        content: `**Matching Units to Objects** 🔽

Choose the best unit to measure each thing.`,
        exercise: {
          dropdowns: [
            { label: 'How much water is in a swimming pool:', options: ['milliliters', 'liters', 'grams', 'cups'] },
            { label: 'The weight of an apple:', options: ['tons', 'grams', 'pounds', 'gallons'] },
            { label: 'How much juice is in one small cup:', options: ['gallons', 'fluid ounces', 'pounds', 'kilometers'] },
          ],
          correctAnswers: ['liters', 'grams', 'fluid ounces'],
          hint1: 'A pool holds a huge amount of liquid, so use a large liquid unit — but milliliters would give a giant number, so pick the bigger one.',
          hint2: 'An apple is light. Pick a unit that weighs small things without giving a tiny fraction.',
          hint3: 'A small cup holds only a little liquid, so a small liquid unit fits.',
          explanation: 'Match the *size* of the unit to the size of the object: a pool ≈ thousands of liters, an apple ≈ a couple hundred grams, and a small cup ≈ a few fluid ounces. Using grams (weight) for the apple — not pounds, which would be a fraction — gives the most comfortable number.',
        },
      },
    ],
  },

  // ───────────────────────── PART 3 ─────────────────────────
  {
    topicSlug: 'units-measurement-grade4',
    sections: [
      {
        id: 'um3-intro',
        type: 'text' as const,
        content: `# ⏰ Units of Measurement

**Part 3 of 5 — Time, Money & Reading Scales**

---

### Topics in This Part

| Section |
|---------|
| Units of Time |
| Units of Money |
| Reading a Ruler |

> 🔑 **Key Idea:** Length, weight, and volume aren't the only things we measure. We also measure **time** and **money** — and we measure *anything* by reading a tool like a **ruler** or **scale** correctly.`,
      },
      {
        id: 'um3-time',
        type: 'text' as const,
        content: `## Units of Time

Time has its own ladder of units. Notice the numbers are **not** based on tens:

| Unit | Equals |
|------|--------|
| $1$ minute | $60$ seconds |
| $1$ hour | $60$ minutes |
| $1$ day | $24$ hours |
| $1$ week | $7$ days |
| $1$ year | $12$ months $= 365$ days |

$$1 \\text{ min} = 60 \\text{ sec} \\qquad 1 \\text{ hr} = 60 \\text{ min} \\qquad 1 \\text{ day} = 24 \\text{ hr}$$

> ⚠️ **Don't mix these up:** An hour is **$60$** minutes, and a day is **$24$** hours. These are special "clock numbers," not the round metric $1000$.`,
      },
      {
        id: 'um3-time-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'How many minutes are in $1$ hour?',
              options: ['$24$', '$60$', '$100$', '$12$'],
              correctAnswer: 1,
              explanation: 'There are $60$ minutes in an hour, just as there are $60$ seconds in a minute: $1 \\text{ hr} = 60 \\text{ min}$.',
            },
            {
              question: 'How many hours are in $1$ day?',
              options: ['$7$', '$12$', '$24$', '$60$'],
              correctAnswer: 2,
              explanation: 'A full day — daytime plus nighttime — is $24$ hours: $1 \\text{ day} = 24 \\text{ hr}$.',
            },
          ],
        },
      },
      {
        id: 'um3-money',
        type: 'text' as const,
        content: `## Units of Money

In the U.S., money is measured in **dollars** and **cents**. The big fact:

$$\\$1 = 100 \\text{ cents}$$

The common coins are each worth a number of cents:

| Coin | Worth (cents) |
|------|---------------|
| penny | $1$¢ |
| nickel | $5$¢ |
| dime | $10$¢ |
| quarter | $25$¢ |

> 💡 Money is actually **metric-like**: a dollar splits into $100$ cents, just like a meter splits into $100$ centimeters. The word *cent* even means "hundred" (think *cent*ury $=100$ years).

**Quick example:** $3$ quarters $= 3 \\times 25 = 75$ cents. Add $2$ dimes $= 2 \\times 10 = 20$ cents, for $75 + 20 = 95$ cents total.`,
      },
      {
        id: 'um3-money-drill',
        type: 'input-boxes' as const,
        content: `**Counting Money** 🧮

Find the total value in **cents**.

**1)** $4$ quarters $= \\,?$ cents
**2)** $2$ dimes and $1$ nickel $= \\,?$ cents
**3)** $\\$2 = \\,?$ cents`,
        exercise: {
          boxes: 3,
          correctAnswers: ['100', '25', '200'],
          hint1: 'Each quarter is $25$¢, so $4 \\times 25 = 100$.',
          hint2: 'Two dimes $= 2\\times 10 = 20$; one nickel $= 5$. Add them: $20 + 5$.',
          hint3: 'Each dollar is $100$ cents, so $2$ dollars $= 2 \\times 100$.',
          explanation: '1) $4 \\times 25 = 100$¢ (that is why $4$ quarters make $\\$1$).  2) $20 + 5 = 25$¢.  3) $2 \\times 100 = 200$¢.',
        },
      },
      {
        id: 'um3-ruler',
        type: 'text' as const,
        content: `## Reading a Ruler

A ruler is just a number line for length. To read it correctly:

1. **Line up** the start of the object with the **$0$ mark** (not the very edge of the ruler).
2. **Count the whole units** the object passes.
3. **Read the small tick** where the object ends.

On a centimeter ruler, the longest lines are the **centimeters**, and the $9$ little ticks between them split each centimeter into **millimeters** ($1\\text{ cm}=10\\text{ mm}$).

> ⚠️ **Most common mistake:** starting at the metal edge or at the "$1$" instead of the **$0$**. Always begin counting from **$0$**, or your answer will be off.`,
      },
      {
        id: 'um3-ruler-check',
        type: 'multiple-choice' as const,
        content: `**Reading Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'A crayon starts at the $0$ mark and ends at the $6$ mark on a centimeter ruler. How long is it?',
              options: ['$5$ cm', '$6$ cm', '$7$ cm', '$60$ cm'],
              correctAnswer: 1,
              explanation: 'Length $=$ end mark $-$ start mark $= 6 - 0 = 6$ cm. Lining the crayon up with $0$ makes the end mark the answer directly.',
            },
            {
              question: 'On a centimeter ruler, the small ticks divide each centimeter into how many equal millimeter parts?',
              options: ['$5$', '$10$', '$12$', '$100$'],
              correctAnswer: 1,
              explanation: 'Because $1 \\text{ cm} = 10 \\text{ mm}$, each centimeter is divided into $10$ equal millimeter parts. (It takes $9$ ticks between the two centimeter lines to make those $10$ parts.)',
            },
          ],
        },
      },
    ],
  },

  // ───────────────────────── PART 4 ─────────────────────────
  {
    topicSlug: 'units-measurement-grade4',
    sections: [
      {
        id: 'um4-intro',
        type: 'text' as const,
        content: `# 🔁 Units of Measurement

**Part 4 of 5 — Converting Units**

---

> 🔑 **The One Big Rule for Grade 4:** When you go from a **bigger unit to a smaller unit**, you **multiply**. (Think: it takes *more* small units to cover the same amount, so the number gets *bigger*.)`,
      },
      {
        id: 'um4-rule',
        type: 'text' as const,
        content: `## Bigger → Smaller Means Multiply

To convert a measurement, ask: *how many small units fit in one big unit?* Then **multiply** by that number.

$$\\text{(number of big units)} \\times \\text{(small units in one big unit)} = \\text{small units}$$

### Worked Example: feet → inches

Convert **$5$ feet** to inches. Since $1 \\text{ ft} = 12 \\text{ in}$:

$$5 \\text{ ft} = 5 \\times 12 = 60 \\text{ in}$$

### Worked Example: meters → centimeters

Convert **$3$ meters** to centimeters. Since $1 \\text{ m} = 100 \\text{ cm}$:

$$3 \\text{ m} = 3 \\times 100 = 300 \\text{ cm}$$

> 💡 **Sanity check:** The number got *bigger* ($5 \\to 60$, $3 \\to 300$). That's exactly what should happen — you're now counting in smaller pieces, so it takes more of them.`,
      },
      {
        id: 'um4-table',
        type: 'text' as const,
        content: `## A Conversion Toolbox

Here are the "multiply by" facts you'll use most. To go from the big unit to the small unit, multiply by the number in the last column.

| From (big) | To (small) | Multiply by |
|------------|-----------|-------------|
| kilometers | meters | $1000$ |
| meters | centimeters | $100$ |
| centimeters | millimeters | $10$ |
| feet | inches | $12$ |
| yards | feet | $3$ |
| pounds | ounces | $16$ |
| kilograms | grams | $1000$ |
| liters | milliliters | $1000$ |
| gallons | quarts | $4$ |
| hours | minutes | $60$ |

> 🔑 To convert a **larger** unit into a **smaller** one, **multiply** by the matching number above.`,
      },
      {
        id: 'um4-convert-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Convert $4$ feet to inches.',
              options: ['$16$ in', '$40$ in', '$48$ in', '$12$ in'],
              correctAnswer: 2,
              explanation: 'Bigger → smaller, so multiply: $4 \\text{ ft} \\times 12 = 48 \\text{ in}$ (since $1\\text{ ft}=12\\text{ in}$).',
            },
            {
              question: 'When you change a larger unit into a smaller unit, the number should:',
              options: ['get smaller', 'get bigger', 'stay the same', 'become zero'],
              correctAnswer: 1,
              explanation: 'Smaller units are tinier pieces, so it takes more of them to cover the same amount — the number gets bigger. That is why you multiply.',
            },
          ],
        },
      },
      {
        id: 'um4-convert-drill',
        type: 'input-boxes' as const,
        content: `**Convert It** 🧮

Use the toolbox. To go from a bigger unit to a smaller unit, **multiply**.

**1)** $7$ meters $= \\,?$ centimeters
**2)** $3$ pounds $= \\,?$ ounces
**3)** $5$ liters $= \\,?$ milliliters
**4)** $2$ hours $= \\,?$ minutes`,
        exercise: {
          boxes: 4,
          correctAnswers: ['700', '48', '5000', '120'],
          hint1: '$1 \\text{ m} = 100 \\text{ cm}$, so $7 \\times 100 = 700$.',
          hint2: '$1 \\text{ lb} = 16 \\text{ oz}$, so $3 \\times 16 = 48$.',
          hint3: '$1 \\text{ L} = 1000 \\text{ mL}$, so $5 \\times 1000 = 5000$; and $2 \\text{ hr} \\times 60 = 120 \\text{ min}$.',
          explanation: '1) $7\\times 100 = 700$ cm.  2) $3\\times 16 = 48$ oz.  3) $5\\times 1000 = 5000$ mL.  4) $2\\times 60 = 120$ min. Each time: bigger unit → smaller unit, so multiply.',
        },
      },
      {
        id: 'um4-two-step',
        type: 'text' as const,
        content: `## Two-Column Conversion Tables

In Grade 4 you'll often build a small table. To make a table of **yards → feet**, multiply each yard amount by $3$ (since $1\\text{ yd}=3\\text{ ft}$):

| Yards | Feet ($\\times 3$) |
|-------|--------------------|
| $1$ | $3$ |
| $2$ | $6$ |
| $4$ | $12$ |
| $10$ | $30$ |

Notice each row follows the **same rule**: multiply the yards by $3$. Tables like this make conversions fast and let you spot the pattern.

> 💡 The number you multiply by never changes for a given pair of units — it's the same $3$ in every row. Find that number once, then reuse it.`,
      },
      {
        id: 'um4-table-dropdown',
        type: 'dropdown-select' as const,
        content: `**Finish the Table** 🔽

Complete this **gallons → quarts** table. Remember $1$ gallon $= 4$ quarts, so multiply each gallon amount by $4$.`,
        exercise: {
          dropdowns: [
            { label: '$2$ gallons $=$', options: ['$6$ qt', '$8$ qt', '$2$ qt', '$24$ qt'] },
            { label: '$5$ gallons $=$', options: ['$9$ qt', '$15$ qt', '$20$ qt', '$54$ qt'] },
            { label: '$10$ gallons $=$', options: ['$14$ qt', '$40$ qt', '$104$ qt', '$30$ qt'] },
          ],
          correctAnswers: ['$8$ qt', '$20$ qt', '$40$ qt'],
          hint1: 'Multiply gallons by $4$: $2 \\times 4 = 8$.',
          hint2: '$5 \\times 4 = 20$.',
          hint3: '$10 \\times 4 = 40$. Every row uses the same rule: $\\times 4$.',
          explanation: 'Gallons → quarts means multiply by $4$: $2\\times 4=8$, $5\\times 4=20$, $10\\times 4=40$. The "$\\times 4$" rule is the same in every row.',
        },
      },
    ],
  },

  // ───────────────────────── PART 5 ─────────────────────────
  {
    topicSlug: 'units-measurement-grade4',
    sections: [
      {
        id: 'um5-intro',
        type: 'text' as const,
        content: `# 🧩 Units of Measurement

**Part 5 of 5 — Word Problems & Mastery Check**

---

You can now name units, choose the right one, read tools, and convert bigger units into smaller ones. Let's put it together with **real-world problems** and a final quiz.`,
      },
      {
        id: 'um5-reference',
        type: 'text' as const,
        content: `## Quick Reference

| Pair of Units | Fact |
|---------------|------|
| cm ↔ mm | $1\\text{ cm} = 10\\text{ mm}$ |
| m ↔ cm | $1\\text{ m} = 100\\text{ cm}$ |
| km ↔ m | $1\\text{ km} = 1000\\text{ m}$ |
| ft ↔ in | $1\\text{ ft} = 12\\text{ in}$ |
| yd ↔ ft | $1\\text{ yd} = 3\\text{ ft}$ |
| lb ↔ oz | $1\\text{ lb} = 16\\text{ oz}$ |
| kg ↔ g | $1\\text{ kg} = 1000\\text{ g}$ |
| L ↔ mL | $1\\text{ L} = 1000\\text{ mL}$ |
| gal ↔ qt | $1\\text{ gal} = 4\\text{ qt}$ |
| hr ↔ min | $1\\text{ hr} = 60\\text{ min}$ |

> 🔑 **Problem-solving plan:** (1) Find out which units appear. (2) Make sure they match — convert the bigger unit to the smaller unit (**multiply**) if needed. (3) Then add, subtract, or compare.`,
      },
      {
        id: 'um5-word-worked',
        type: 'text' as const,
        content: `## Worked Word Problem

> **Maya has a ribbon $2$ meters long. She cuts off $75$ centimeters. How many centimeters of ribbon are left?**

**Step 1 — Match the units.** The ribbon is in meters but the cut is in centimeters. Convert meters to centimeters (bigger → smaller, so multiply):

$$2 \\text{ m} = 2 \\times 100 = 200 \\text{ cm}$$

**Step 2 — Now subtract**, since both amounts are in centimeters:

$$200 - 75 = 125 \\text{ cm}$$

> ✅ **Answer:** $125$ centimeters of ribbon are left. The key move was converting to a **common unit** first.`,
      },
      {
        id: 'um5-word-check',
        type: 'multiple-choice' as const,
        content: `**Word Problem Practice** 🎯`,
        exercise: {
          questions: [
            {
              question: 'A bottle holds $3$ liters of water. How many milliliters is that?',
              options: ['$30$ mL', '$300$ mL', '$3000$ mL', '$3$ mL'],
              correctAnswer: 2,
              explanation: 'Liters → milliliters, so multiply by $1000$: $3 \\times 1000 = 3000$ mL.',
            },
            {
              question: 'A movie lasts $2$ hours. A second movie lasts $90$ minutes. Which is longer?',
              options: ['The $2$-hour movie', 'The $90$-minute movie', 'They are equal', 'You cannot tell'],
              correctAnswer: 0,
              explanation: 'Convert to a common unit: $2 \\text{ hr} = 2\\times 60 = 120$ min. Since $120 > 90$, the $2$-hour movie is longer.',
            },
          ],
        },
      },
      {
        id: 'um5-word-drill',
        type: 'input-boxes' as const,
        content: `**Solve It** 🧮

Convert to a common unit first, then answer in the unit shown.

**1)** A rope is $4$ feet long. How many **inches** is that?
**2)** A jug holds $2$ gallons. A pitcher holds $5$ quarts. How many **quarts** does the jug hold? (so you can compare)
**3)** Sam runs for $3$ minutes. How many **seconds** is that?`,
        exercise: {
          boxes: 3,
          correctAnswers: ['48', '8', '180'],
          hint1: 'Feet → inches: multiply by $12$. $4 \\times 12 = 48$.',
          hint2: 'Gallons → quarts: multiply by $4$. $2 \\times 4 = 8$ (which is more than the pitcher holds at $5$ quarts).',
          hint3: 'Minutes → seconds: multiply by $60$. $3 \\times 60 = 180$.',
          explanation: '1) $4 \\times 12 = 48$ in.  2) $2 \\times 4 = 8$ qt (jug holds more than the $5$-qt pitcher).  3) $3 \\times 60 = 180$ sec. Bigger unit → smaller unit, so multiply.',
        },
      },
      {
        id: 'um5-exit-quiz',
        type: 'multiple-choice' as const,
        content: `**Exit Quiz** ✅

Answer all three to finish the lesson.`,
        exercise: {
          questions: [
            {
              question: 'Which is the best unit to measure the length of a soccer field?',
              options: ['millimeters', 'meters', 'kilograms', 'liters'],
              correctAnswer: 1,
              explanation: 'A soccer field is room-to-building sized, so meters fit best. Kilograms measure weight and liters measure volume — wrong kind of unit — and millimeters would give a huge, awkward number.',
            },
            {
              question: 'Convert $6$ kilograms to grams.',
              options: ['$60$ g', '$600$ g', '$6000$ g', '$66$ g'],
              correctAnswer: 2,
              explanation: 'Kilograms → grams, so multiply by $1000$: $6 \\times 1000 = 6000$ g.',
            },
            {
              question: 'A board is $5$ feet long. Carlos cuts off $18$ inches. How many inches are left?',
              options: ['$42$ in', '$60$ in', '$48$ in', '$72$ in'],
              correctAnswer: 0,
              explanation: 'First match units: $5 \\text{ ft} = 5\\times 12 = 60$ in. Then subtract: $60 - 18 = 42$ in.',
            },
          ],
        },
      },
    ],
  },
]
