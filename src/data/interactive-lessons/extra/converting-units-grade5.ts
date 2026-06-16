import type { LessonData } from '../registry'

/**
 * Hand-authored interactive lesson — Converting Measurement Units (Grade 5 Math).
 * Registry key / DB Topic.slug: 'converting-units-grade5'.
 * 5 parts, gold-standard structure: why we convert + the units → metric (powers of 10)
 * → customary (length/weight/capacity) → time, multi-step & word problems → mixed
 * practice + exit quiz.
 * LaTeX uses doubled backslashes (these are JS template-literal strings).
 * Every conversion factor and computed answer was re-checked before authoring.
 */
export const parts: LessonData[] = [
  // ───────────────────────── PART 1 ─────────────────────────
  {
    topicSlug: 'converting-units-grade5',
    sections: [
      {
        id: 'cu1-intro',
        type: 'text' as const,
        content: `# 📏 Converting Measurement Units

**Part 1 of 5 — Bigger Units, Smaller Units, and Why We Convert**

---

### Topics in This Part

| Section |
|---------|
| What "converting" really means |
| The two big rules: multiply or divide? |
| Meeting the units you'll use |

> 🔑 **Key Concept:** Converting units means writing the **same amount** of stuff a **different way**. A bench that is $2$ meters long is *also* $200$ centimeters long — same bench, different number, different unit.`,
      },
      {
        id: 'cu1-meaning',
        type: 'text' as const,
        content: `## Same Amount, Different Number

Think about money for a second. A dollar and four quarters are worth the **same amount** — but the *number* changes depending on the unit you count in:

| Amount | Counted in dollars | Counted in quarters |
|--------|--------------------|--------------------|
| One dollar | $1$ | $4$ |
| Two dollars | $2$ | $8$ |

Measurement works exactly the same way. The length never changed; only the **unit** we used to describe it did.

> 💡 **Watch the pattern:** A **quarter is smaller** than a dollar, so it takes **more** quarters to make the same amount. Smaller units always give you a **bigger number**.`,
      },
      {
        id: 'cu1-bigger-smaller',
        type: 'text' as const,
        content: `## The One Idea Behind Every Conversion

There are only two directions you can go:

- **Big unit → small unit** (like meters → centimeters): you **MULTIPLY**, and the number gets **bigger**.
- **Small unit → big unit** (like centimeters → meters): you **DIVIDE**, and the number gets **smaller**.

A simple sentence to remember it:

> 🔑 **"Going down to a smaller unit, multiply. Going up to a bigger unit, divide."**

### Why?

A meter is longer than a centimeter. It takes **100 centimeters** to build **1 meter**. So if you have $3$ meters, you have $3 \\times 100 = 300$ centimeters. More small pieces are needed, so the number grows.`,
      },
      {
        id: 'cu1-direction-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'You are changing $5$ meters into centimeters. A centimeter is smaller than a meter. What happens to the number?',
              options: ['It gets bigger (you multiply)', 'It gets smaller (you divide)', 'It stays exactly the same', 'It becomes a fraction'],
              correctAnswer: 0,
              explanation: 'Going from a bigger unit (meters) to a smaller unit (centimeters), you multiply, so the number gets bigger: $5$ m becomes $500$ cm.',
            },
            {
              question: 'You are changing $4{,}000$ grams into kilograms. A kilogram is bigger than a gram. What should you do?',
              options: ['Multiply, so the number grows', 'Divide, so the number shrinks', 'Add the two units together', 'Nothing — they are equal'],
              correctAnswer: 1,
              explanation: 'Going from a smaller unit (grams) to a bigger unit (kilograms), you divide, so the number shrinks: $4{,}000$ g becomes $4$ kg.',
            },
          ],
        },
      },
      {
        id: 'cu1-units-table',
        type: 'text' as const,
        content: `## Meet the Units

You will work with **two systems** of measurement this year.

### Metric system (used by scientists and most of the world)

| Measures | Units (small → big) |
|----------|---------------------|
| Length | millimeter (mm), centimeter (cm), meter (m), kilometer (km) |
| Mass / weight | gram (g), kilogram (kg) |
| Capacity (liquid) | milliliter (mL), liter (L) |

### Customary system (everyday units in the U.S.)

| Measures | Units (small → big) |
|----------|---------------------|
| Length | inch (in), foot (ft), yard (yd), mile (mi) |
| Weight | ounce (oz), pound (lb), ton (T) |
| Capacity | cup (c), pint (pt), quart (qt), gallon (gal) |

> 💡 The prefix **"milli-"** means *one thousandth*, **"centi-"** means *one hundredth*, and **"kilo-"** means *one thousand*. These prefixes are your best friends in Part 2.`,
      },
      {
        id: 'cu1-quarters',
        type: 'input-boxes' as const,
        content: `**Warm-Up Drill** 🧮

Remember the money idea: a smaller unit means a **bigger** number for the same amount. There are $4$ quarters in $1$ dollar.

**1)** How many quarters are in $\\$3$? $\\,?$ quarters
**2)** How many quarters are in $\\$5$? $\\,?$ quarters
**3)** If you have $12$ quarters, how many dollars is that? $\\,?$ dollars`,
        exercise: {
          boxes: 3,
          correctAnswers: ['12', '20', '3'],
          hint1: 'Dollars are bigger than quarters, so multiply by $4$: $3 \\times 4$.',
          hint2: 'Same idea: $5 \\times 4$.',
          hint3: 'Going from quarters (small) up to dollars (big), divide by $4$: $12 \\div 4$.',
          explanation: '1) $3 \\times 4 = 12$ quarters.  2) $5 \\times 4 = 20$ quarters.  3) $12 \\div 4 = 3$ dollars. Smaller unit, multiply; bigger unit, divide — exactly like measurement.',
        },
      },
      {
        id: 'cu1-sort',
        type: 'dropdown-select' as const,
        content: `**Smaller or Bigger?** 🔽

For each pair, choose the **bigger** unit.`,
        exercise: {
          dropdowns: [
            { label: 'Which is bigger?', options: ['kilometer', 'meter'] },
            { label: 'Which is bigger?', options: ['gram', 'kilogram'] },
            { label: 'Which is bigger?', options: ['inch', 'foot'] },
            { label: 'Which is bigger?', options: ['gallon', 'cup'] },
          ],
          correctAnswers: ['kilometer', 'kilogram', 'foot', 'gallon'],
          hint1: 'The prefix "kilo-" means one thousand, so a kilometer is much longer than a meter.',
          hint2: 'A kilogram equals $1{,}000$ grams, so the kilogram is the bigger unit.',
          hint3: 'A foot is $12$ inches, and a gallon holds many cups, so the foot and the gallon are the bigger units.',
          explanation: 'Bigger units: kilometer ($1{,}000$ m), kilogram ($1{,}000$ g), foot ($12$ in), gallon ($16$ cups). Bigger units always need fewer of themselves to make the same amount.',
        },
      },
    ],
  },

  // ───────────────────────── PART 2 ─────────────────────────
  {
    topicSlug: 'converting-units-grade5',
    sections: [
      {
        id: 'cu2-intro',
        type: 'text' as const,
        content: `# 📏 Converting Measurement Units

**Part 2 of 5 — The Metric System (Everything Is Powers of 10)**

---

> 🔑 **The Idea:** The metric system is built on **10s, 100s, and 1,000s**. Once you know the magic numbers, every metric conversion is just multiplying or dividing — often by sliding the decimal point.`,
      },
      {
        id: 'cu2-facts',
        type: 'text' as const,
        content: `## The Metric Facts to Memorize

| Conversion | Magic number |
|------------|--------------|
| $1$ cm $=$ ___ mm | $10$ |
| $1$ m $=$ ___ cm | $100$ |
| $1$ m $=$ ___ mm | $1{,}000$ |
| $1$ km $=$ ___ m | $1{,}000$ |
| $1$ kg $=$ ___ g | $1{,}000$ |
| $1$ L $=$ ___ mL | $1{,}000$ |

> 💡 Notice how often **1,000** shows up: kilometers, kilograms, and liters all use it. The prefix **"kilo-"** *always* means $1{,}000$ of the base unit.`,
      },
      {
        id: 'cu2-worked-multiply',
        type: 'text' as const,
        content: `## Worked Example: Big → Small (Multiply)

**Convert $7$ kilometers to meters.**

Kilometers are **bigger** than meters, so we **multiply** by the magic number $1{,}000$:

$$7 \\text{ km} \\times 1{,}000 = 7{,}000 \\text{ m}$$

**Convert $3$ meters to centimeters.** A meter is bigger than a centimeter ($\\times 100$):

$$3 \\text{ m} \\times 100 = 300 \\text{ cm}$$

> ✅ **Quick check:** A car driving $7$ km goes a long way, so it makes sense that the number of meters ($7{,}000$) is huge.`,
      },
      {
        id: 'cu2-worked-divide',
        type: 'text' as const,
        content: `## Worked Example: Small → Big (Divide)

**Convert $5{,}000$ grams to kilograms.**

Grams are **smaller** than kilograms, so we **divide** by $1{,}000$:

$$5{,}000 \\text{ g} \\div 1{,}000 = 5 \\text{ kg}$$

**Convert $250$ centimeters to meters.** A centimeter is smaller than a meter ($\\div 100$):

$$250 \\text{ cm} \\div 100 = 2.5 \\text{ m}$$

> 💡 **Decimal trick:** Dividing by $100$ moves the decimal point **2 places left** ($250.0 \\rightarrow 2.50$). Dividing by $1{,}000$ moves it **3 places left**. Multiplying moves it the same number of places to the **right**.`,
      },
      {
        id: 'cu2-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'How many milliliters are in $2$ liters?',
              options: ['$2{,}000$ mL', '$200$ mL', '$20$ mL', '$0.002$ mL'],
              correctAnswer: 0,
              explanation: 'Liters are bigger than milliliters, so multiply by $1{,}000$: $2 \\times 1{,}000 = 2{,}000$ mL.',
            },
            {
              question: 'Convert $400$ centimeters to meters.',
              options: ['$4$ m', '$40$ m', '$4{,}000$ m', '$40{,}000$ m'],
              correctAnswer: 0,
              explanation: 'Centimeters are smaller than meters, so divide by $100$: $400 \\div 100 = 4$ m.',
            },
            {
              question: 'Which conversion uses the magic number $10$?',
              options: ['cm $\\to$ mm', 'm $\\to$ cm', 'km $\\to$ m', 'kg $\\to$ g'],
              correctAnswer: 0,
              explanation: '$1$ cm $= 10$ mm, so converting centimeters to millimeters multiplies by $10$. The others use $100$ or $1{,}000$.',
            },
          ],
        },
      },
      {
        id: 'cu2-input',
        type: 'input-boxes' as const,
        content: `**Metric Drill** 🧮

Fill in the missing number for each conversion. (Decimals are fine.)

**1)** $6$ km $= \\,?$ m
**2)** $8{,}000$ mL $= \\,?$ L
**3)** $35$ mm $= \\,?$ cm`,
        exercise: {
          boxes: 3,
          correctAnswers: ['6000', '8', '3.5'],
          hint1: 'Kilometers are bigger than meters, so multiply by $1{,}000$: $6 \\times 1{,}000$.',
          hint2: 'Milliliters are smaller than liters, so divide by $1{,}000$: $8{,}000 \\div 1{,}000$.',
          hint3: 'Millimeters are smaller than centimeters, so divide by $10$: $35 \\div 10 = 3.5$.',
          explanation: '1) $6 \\times 1{,}000 = 6{,}000$ m.  2) $8{,}000 \\div 1{,}000 = 8$ L.  3) $35 \\div 10 = 3.5$ cm.',
        },
      },
      {
        id: 'cu2-dropdown',
        type: 'dropdown-select' as const,
        content: `**Multiply or Divide?** 🔽

For each conversion, choose the correct operation *and* the magic number.`,
        exercise: {
          dropdowns: [
            { label: 'kg $\\to$ g:', options: ['multiply by $1{,}000$', 'divide by $1{,}000$', 'multiply by $100$', 'divide by $100$'] },
            { label: 'cm $\\to$ m:', options: ['divide by $100$', 'multiply by $100$', 'divide by $10$', 'multiply by $1{,}000$'] },
            { label: 'm $\\to$ mm:', options: ['multiply by $1{,}000$', 'divide by $1{,}000$', 'multiply by $10$', 'divide by $100$'] },
          ],
          correctAnswers: ['multiply by $1{,}000$', 'divide by $100$', 'multiply by $1{,}000$'],
          hint1: 'kg is bigger than g, so multiply. The magic number for kilo- is $1{,}000$.',
          hint2: 'cm is smaller than m, so divide. It takes $100$ cm to make $1$ m.',
          hint3: 'm is bigger than mm, and $1$ m $= 1{,}000$ mm, so multiply by $1{,}000$.',
          explanation: 'kg $\\to$ g multiplies by $1{,}000$; cm $\\to$ m divides by $100$; m $\\to$ mm multiplies by $1{,}000$. Big-to-small multiplies, small-to-big divides.',
        },
      },
    ],
  },

  // ───────────────────────── PART 3 ─────────────────────────
  {
    topicSlug: 'converting-units-grade5',
    sections: [
      {
        id: 'cu3-intro',
        type: 'text' as const,
        content: `# 📏 Converting Measurement Units

**Part 3 of 5 — The Customary System (Length, Weight & Capacity)**

---

> 🔑 **The Idea:** Customary units don't use neat powers of $10$. Instead, each pair has its own number to memorize — like $12$ inches in a foot or $16$ ounces in a pound. The *direction rule* (multiply down, divide up) stays exactly the same.`,
      },
      {
        id: 'cu3-facts',
        type: 'text' as const,
        content: `## The Customary Facts to Memorize

### Length
| Conversion | Number |
|------------|--------|
| $1$ foot $=$ ___ inches | $12$ |
| $1$ yard $=$ ___ feet | $3$ |
| $1$ mile $=$ ___ feet | $5{,}280$ |

### Weight
| Conversion | Number |
|------------|--------|
| $1$ pound $=$ ___ ounces | $16$ |
| $1$ ton $=$ ___ pounds | $2{,}000$ |

### Capacity (the "liquid ladder")
| Conversion | Number |
|------------|--------|
| $1$ cup $=$ ___ fluid ounces | $8$ |
| $1$ pint $=$ ___ cups | $2$ |
| $1$ quart $=$ ___ pints | $2$ |
| $1$ gallon $=$ ___ quarts | $4$ |

> 💡 **Liquid ladder shortcut:** Gallon → Quart → Pint → Cup, each step is $\\times 2$ except gallon → quart which is $\\times 4$. So $1$ gallon $= 4$ quarts $= 8$ pints $= 16$ cups.`,
      },
      {
        id: 'cu3-worked-length',
        type: 'text' as const,
        content: `## Worked Example: Length

**Convert $4$ feet to inches.**

Feet are **bigger** than inches, so **multiply** by $12$:

$$4 \\text{ ft} \\times 12 = 48 \\text{ in}$$

**Convert $5$ yards to feet.** Yards are bigger than feet ($\\times 3$):

$$5 \\text{ yd} \\times 3 = 15 \\text{ ft}$$

**Convert $36$ inches to feet.** Inches are smaller than feet, so **divide** by $12$:

$$36 \\text{ in} \\div 12 = 3 \\text{ ft}$$

> ✅ **Check:** $3$ feet feels right for $36$ inches — that's the height of a tall toddler, about a yardstick.`,
      },
      {
        id: 'cu3-mc-weight',
        type: 'multiple-choice' as const,
        content: `**Concept Check — Weight** 🎯`,
        exercise: {
          questions: [
            {
              question: 'How many ounces are in $3$ pounds?',
              options: ['$48$ oz', '$19$ oz', '$32$ oz', '$3{,}000$ oz'],
              correctAnswer: 0,
              explanation: 'Pounds are bigger than ounces, so multiply by $16$: $3 \\times 16 = 48$ oz.',
            },
            {
              question: 'A truck weighs $4$ tons. How many pounds is that?',
              options: ['$8{,}000$ lb', '$2{,}000$ lb', '$500$ lb', '$8$ lb'],
              correctAnswer: 0,
              explanation: 'Tons are bigger than pounds, so multiply by $2{,}000$: $4 \\times 2{,}000 = 8{,}000$ lb.',
            },
            {
              question: 'Convert $32$ ounces to pounds.',
              options: ['$2$ lb', '$16$ lb', '$48$ lb', '$512$ lb'],
              correctAnswer: 0,
              explanation: 'Ounces are smaller than pounds, so divide by $16$: $32 \\div 16 = 2$ lb.',
            },
          ],
        },
      },
      {
        id: 'cu3-input-capacity',
        type: 'input-boxes' as const,
        content: `**Capacity Drill** 🧮

Use the liquid ladder. Fill in each missing number.

**1)** $3$ gallons $= \\,?$ quarts
**2)** $5$ pints $= \\,?$ cups
**3)** $24$ cups $= \\,?$ gallons`,
        exercise: {
          boxes: 3,
          correctAnswers: ['12', '10', '1.5'],
          hint1: '$1$ gallon $= 4$ quarts, so multiply by $4$: $3 \\times 4$.',
          hint2: '$1$ pint $= 2$ cups, so multiply by $2$: $5 \\times 2$.',
          hint3: '$1$ gallon $= 16$ cups, so divide by $16$: $24 \\div 16 = 1.5$.',
          explanation: '1) $3 \\times 4 = 12$ quarts.  2) $5 \\times 2 = 10$ cups.  3) $24 \\div 16 = 1.5$ gallons.',
        },
      },
      {
        id: 'cu3-dropdown',
        type: 'dropdown-select' as const,
        content: `**Pick the Right Number** 🔽

Each conversion needs a specific number. Choose it.`,
        exercise: {
          dropdowns: [
            { label: 'To change feet into inches, you use:', options: ['$\\times 12$', '$\\times 3$', '$\\times 16$', '$\\times 10$'] },
            { label: 'To change pounds into ounces, you use:', options: ['$\\times 16$', '$\\times 12$', '$\\times 2{,}000$', '$\\times 8$'] },
            { label: 'To change quarts into gallons, you use:', options: ['$\\div 4$', '$\\times 4$', '$\\div 2$', '$\\div 16$'] },
          ],
          correctAnswers: ['$\\times 12$', '$\\times 16$', '$\\div 4$'],
          hint1: '$1$ foot $= 12$ inches, and feet are bigger, so multiply by $12$.',
          hint2: '$1$ pound $= 16$ ounces, and pounds are bigger, so multiply by $16$.',
          hint3: 'Quarts are smaller than gallons ($4$ quarts make a gallon), so divide by $4$.',
          explanation: 'Feet $\\to$ inches: $\\times 12$. Pounds $\\to$ ounces: $\\times 16$. Quarts $\\to$ gallons: $\\div 4$. Big-to-small multiplies; small-to-big divides.',
        },
      },
    ],
  },

  // ───────────────────────── PART 4 ─────────────────────────
  {
    topicSlug: 'converting-units-grade5',
    sections: [
      {
        id: 'cu4-intro',
        type: 'text' as const,
        content: `# 📏 Converting Measurement Units

**Part 4 of 5 — Time, Two-Step Conversions & Word Problems**

---

> 🔑 **The Idea:** Real problems often need **two conversions in a row**, or hide the conversion inside a story. The trick is to convert everything to the **same unit first**, then add, subtract, or compare.`,
      },
      {
        id: 'cu4-time-facts',
        type: 'text' as const,
        content: `## Time Conversions

| Conversion | Number |
|------------|--------|
| $1$ minute $=$ ___ seconds | $60$ |
| $1$ hour $=$ ___ minutes | $60$ |
| $1$ day $=$ ___ hours | $24$ |
| $1$ week $=$ ___ days | $7$ |
| $1$ year $=$ ___ days | $365$ |

The direction rule is unchanged. A bigger unit (hours) to a smaller unit (minutes) **multiplies**; a smaller unit to a bigger one **divides**.

**Example:** $3$ hours $= 3 \\times 60 = 180$ minutes.

**Example:** $240$ seconds $= 240 \\div 60 = 4$ minutes.`,
      },
      {
        id: 'cu4-two-step',
        type: 'text' as const,
        content: `## Worked Example: A Two-Step Conversion

**How many seconds are in $2$ hours?**

There's no direct "hours → seconds" fact, so we hop through minutes:

**Step 1 — hours to minutes:**
$$2 \\text{ hr} \\times 60 = 120 \\text{ min}$$

**Step 2 — minutes to seconds:**
$$120 \\text{ min} \\times 60 = 7{,}200 \\text{ sec}$$

So $2$ hours $= 7{,}200$ seconds.

> 💡 **Two-step rule:** When no single fact connects your units, find a unit in the *middle* and convert through it, one hop at a time.`,
      },
      {
        id: 'cu4-mc-time',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'How many minutes are in $2$ days?',
              options: ['$2{,}880$ min', '$1{,}440$ min', '$48$ min', '$120$ min'],
              correctAnswer: 0,
              explanation: '$2$ days $\\times 24 = 48$ hours, then $48 \\times 60 = 2{,}880$ minutes. (One day alone is $1{,}440$ minutes.)',
            },
            {
              question: 'A recipe needs $2$ feet of licorice rope. The store sells it by the inch. How many inches should you buy?',
              options: ['$24$ in', '$12$ in', '$14$ in', '$6$ in'],
              correctAnswer: 0,
              explanation: 'Feet are bigger than inches, so multiply by $12$: $2 \\times 12 = 24$ inches.',
            },
          ],
        },
      },
      {
        id: 'cu4-word-compare',
        type: 'text' as const,
        content: `## Worked Example: Comparing in a Word Problem

**Maria's ribbon is $2$ meters long. Jon's ribbon is $150$ centimeters long. Whose ribbon is longer, and by how much?**

You can't compare meters to centimeters directly — so convert to the **same unit** first. Centimeters are easiest here:

$$2 \\text{ m} = 2 \\times 100 = 200 \\text{ cm}$$

Now compare: Maria has $200$ cm, Jon has $150$ cm.

$$200 - 150 = 50 \\text{ cm}$$

> ✅ **Answer:** Maria's ribbon is longer by **$50$ centimeters** (which is also $0.5$ m).`,
      },
      {
        id: 'cu4-input-word',
        type: 'input-boxes' as const,
        content: `**Word Problem Drill** 🧮

Convert first, then solve. Enter just the number.

**1)** A jug holds $3$ liters of juice. How many milliliters is that? $\\,?$ mL
**2)** A board is $5$ feet long. You cut off $18$ inches. How many **inches** of board are left? $\\,?$ in
**3)** A bag of apples weighs $80$ ounces. How many **pounds** is that? $\\,?$ lb`,
        exercise: {
          boxes: 3,
          correctAnswers: ['3000', '42', '5'],
          hint1: 'Liters are bigger than milliliters, so multiply by $1{,}000$: $3 \\times 1{,}000$.',
          hint2: 'First make the board inches: $5 \\times 12 = 60$ in. Then subtract the $18$ in you cut off.',
          hint3: 'Ounces are smaller than pounds, so divide by $16$: $80 \\div 16$.',
          explanation: '1) $3 \\times 1{,}000 = 3{,}000$ mL.  2) $5$ ft $= 60$ in, and $60 - 18 = 42$ in left.  3) $80 \\div 16 = 5$ lb.',
        },
      },
      {
        id: 'cu4-dropdown-strategy',
        type: 'dropdown-select' as const,
        content: `**Plan the Conversion** 🔽

You want to find how many **seconds** are in $5$ minutes, and whether $1$ kilometer is longer than $900$ meters.`,
        exercise: {
          dropdowns: [
            { label: 'To get seconds from minutes, you:', options: ['multiply by $60$', 'divide by $60$', 'multiply by $24$', 'divide by $24$'] },
            { label: '$5$ minutes equals:', options: ['$300$ seconds', '$65$ seconds', '$12$ seconds', '$5{,}060$ seconds'] },
            { label: '$1$ km written in meters is:', options: ['$1{,}000$ m', '$100$ m', '$10$ m', '$1$ m'] },
            { label: 'So the longer distance is:', options: ['$1$ km', '$900$ m', 'they are equal', 'cannot tell'] },
          ],
          correctAnswers: ['multiply by $60$', '$300$ seconds', '$1{,}000$ m', '$1$ km'],
          hint1: 'Minutes are bigger than seconds, so multiply. There are $60$ seconds in a minute.',
          hint2: '$5 \\times 60 = 300$ seconds.',
          hint3: '$1$ km $= 1{,}000$ m, and $1{,}000 > 900$, so $1$ km is the longer distance.',
          explanation: '$5$ min $= 5 \\times 60 = 300$ sec. And $1$ km $= 1{,}000$ m, which beats $900$ m, so $1$ km is longer.',
        },
      },
    ],
  },

  // ───────────────────────── PART 5 ─────────────────────────
  {
    topicSlug: 'converting-units-grade5',
    sections: [
      {
        id: 'cu5-intro',
        type: 'text' as const,
        content: `# 📏 Converting Measurement Units

**Part 5 of 5 — Mixed Practice & Mastery Check**

---

You can now (1) tell whether to multiply or divide, (2) convert metric units using powers of $10$, (3) convert customary length, weight, and capacity, and (4) handle time, two-step conversions, and word problems. Let's put it all together.`,
      },
      {
        id: 'cu5-reference',
        type: 'text' as const,
        content: `## Quick Reference

| Question | Key move |
|----------|----------|
| Big unit $\\to$ small unit | **multiply** (number gets bigger) |
| Small unit $\\to$ big unit | **divide** (number gets smaller) |
| Metric magic numbers | $10$, $100$, or $1{,}000$ |
| No direct fact? | convert through a **middle** unit (two steps) |
| Word problem? | get everything in the **same unit** first |

### The most-used facts at a glance
- $1$ m $= 100$ cm, $\\;\\;1$ km $= 1{,}000$ m, $\\;\\;1$ kg $= 1{,}000$ g, $\\;\\;1$ L $= 1{,}000$ mL
- $1$ ft $= 12$ in, $\\;\\;1$ yd $= 3$ ft, $\\;\\;1$ lb $= 16$ oz, $\\;\\;1$ gal $= 4$ qt
- $1$ min $= 60$ sec, $\\;\\;1$ hr $= 60$ min, $\\;\\;1$ day $= 24$ hr

> ⚠️ **Most common mistake:** mixing up the direction. Always ask first: *"Am I going to a smaller unit (multiply) or a bigger unit (divide)?"*`,
      },
      {
        id: 'cu5-input-mixed',
        type: 'input-boxes' as const,
        content: `**Mixed Practice** 🧮

A little of everything. Enter just the number.

**1)** $7$ m $= \\,?$ cm
**2)** $2{,}500$ g $= \\,?$ kg
**3)** $6$ qt $= \\,?$ pt
**4)** $3$ hours $= \\,?$ minutes`,
        exercise: {
          boxes: 4,
          correctAnswers: ['700', '2.5', '12', '180'],
          hint1: 'm $\\to$ cm: bigger to smaller, multiply by $100$. g $\\to$ kg: smaller to bigger, divide by $1{,}000$.',
          hint2: 'qt $\\to$ pt: $1$ quart $= 2$ pints, so multiply by $2$.',
          hint3: 'hr $\\to$ min: $1$ hour $= 60$ minutes, so multiply by $60$.',
          explanation: '1) $7 \\times 100 = 700$ cm.  2) $2{,}500 \\div 1{,}000 = 2.5$ kg.  3) $6 \\times 2 = 12$ pt.  4) $3 \\times 60 = 180$ min.',
        },
      },
      {
        id: 'cu5-mc-mixed',
        type: 'multiple-choice' as const,
        content: `**Mixed Practice** 🎯`,
        exercise: {
          questions: [
            {
              question: 'A water cooler holds $5$ gallons. How many cups of water is that?',
              options: ['$80$ cups', '$20$ cups', '$40$ cups', '$320$ cups'],
              correctAnswer: 0,
              explanation: '$1$ gallon $= 16$ cups, so $5 \\times 16 = 80$ cups. (You can also do $5 \\times 4 = 20$ qt, then $20 \\times 4 = 80$ cups.)',
            },
            {
              question: 'Sam ran $1{,}500$ meters. How many kilometers did he run?',
              options: ['$1.5$ km', '$15$ km', '$150$ km', '$0.15$ km'],
              correctAnswer: 0,
              explanation: 'Meters are smaller than kilometers, so divide by $1{,}000$: $1{,}500 \\div 1{,}000 = 1.5$ km.',
            },
          ],
        },
      },
      {
        id: 'cu5-dropdown-mixed',
        type: 'dropdown-select' as const,
        content: `**Spot the Operation** 🔽

For each conversion, choose whether you multiply or divide, then give the result.`,
        exercise: {
          dropdowns: [
            { label: '$48$ in $\\to$ ft: you should', options: ['divide', 'multiply'] },
            { label: '$48$ in equals', options: ['$4$ ft', '$576$ ft', '$60$ ft', '$36$ ft'] },
            { label: '$4$ L $\\to$ mL: you should', options: ['multiply', 'divide'] },
            { label: '$4$ L equals', options: ['$4{,}000$ mL', '$400$ mL', '$0.004$ mL', '$40$ mL'] },
          ],
          correctAnswers: ['divide', '$4$ ft', 'multiply', '$4{,}000$ mL'],
          hint1: 'Inches are smaller than feet, so divide. Liters are bigger than milliliters, so multiply.',
          hint2: '$48 \\div 12 = 4$ ft.',
          hint3: '$4 \\times 1{,}000 = 4{,}000$ mL.',
          explanation: '$48$ in $\\div 12 = 4$ ft (small to big, divide). $4$ L $\\times 1{,}000 = 4{,}000$ mL (big to small, multiply).',
        },
      },
      {
        id: 'cu5-exit-quiz',
        type: 'multiple-choice' as const,
        content: `**Exit Quiz** ✅

Answer all three to finish the lesson.`,
        exercise: {
          questions: [
            {
              question: 'Which statement is always true when you convert from a smaller unit to a bigger unit?',
              options: ['You divide, and the number gets smaller', 'You multiply, and the number gets bigger', 'The number never changes', 'You always use the number $100$'],
              correctAnswer: 0,
              explanation: 'Small unit to big unit means you divide, so the number gets smaller. (For example, $200$ cm $\\div 100 = 2$ m.)',
            },
            {
              question: 'How many milliliters are in $4$ liters?',
              options: ['$4{,}000$ mL', '$400$ mL', '$40$ mL', '$4$ mL'],
              correctAnswer: 0,
              explanation: 'Liters are bigger than milliliters, so multiply by $1{,}000$: $4 \\times 1{,}000 = 4{,}000$ mL.',
            },
            {
              question: 'A ribbon is $2$ yards long. How many inches is that?',
              options: ['$72$ in', '$24$ in', '$36$ in', '$6$ in'],
              correctAnswer: 0,
              explanation: 'Two steps: $2$ yd $\\times 3 = 6$ ft, then $6 \\times 12 = 72$ in. (Or $1$ yd $= 36$ in, so $2 \\times 36 = 72$ in.)',
            },
          ],
        },
      },
    ],
  },
]
