import type { LessonData } from '../registry'

/**
 * Hand-authored interactive lesson — Lines and Angles (Grade 4 Math).
 * Registry key: 'lines-and-angles' (matches the DB Topic.slug).
 * 5 parts, gold-standard structure: teach → worked examples → interactive practice
 * (multiple-choice + input-boxes + dropdown) → exit quiz. LaTeX uses doubled
 * backslashes (template-literal strings); the degree symbol is written literally (°).
 * Grade-4 appropriate: whole-number angle measures, plain language, real-world hooks.
 */
export const parts: LessonData[] = [
  // ───────────────────────── PART 1 ─────────────────────────
  {
    topicSlug: 'lines-and-angles',
    sections: [
      {
        id: 'la1-intro',
        type: 'text' as const,
        content: `# 📏 Lines and Angles

**Part 1 of 5 — Points, Lines, Rays & Segments**

---

### Topics in This Part

| Section |
|---------|
| Points: where everything starts |
| Lines, Rays, and Line Segments |
| How to Name Them |

> 🔑 **Key Idea:** Everything in geometry is built from one tiny thing — a **point**. Connect points and you get lines, rays, and segments. Get these names right and the rest of geometry is easy!`,
      },
      {
        id: 'la1-building-blocks',
        type: 'text' as const,
        content: `## The Building Blocks

A **point** is an exact spot. It has no size — just a location. We mark it with a dot and a capital letter, like point $A$.

When we connect points, we get three different things:

| Figure | What it looks like | How long is it? |
|--------|--------------------|-----------------|
| **Line segment** | A straight path between **two endpoints** | It has a beginning *and* an end |
| **Ray** | Starts at **one endpoint** and goes on forever in one direction | Endless in one direction |
| **Line** | Goes on forever in **both** directions (arrows on each end) | Endless both ways |

Think of it this way:
- A **segment** is like a piece of cooked spaghetti — it has two ends. 🍝
- A **ray** is like a flashlight beam — it starts at the flashlight and shoots out forever. 🔦
- A **line** is like a road with no start and no end — it keeps going both ways forever. 🛣️

> 💡 **Remember:** Arrows mean "goes forever." Dots (endpoints) mean "stops here."`,
      },
      {
        id: 'la1-identify',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Which figure has TWO endpoints and does NOT go on forever?',
              options: ['A line segment', 'A ray', 'A line', 'A point'],
              correctAnswer: 0,
              explanation: 'A line segment has two endpoints and a definite length — it starts and stops. A ray has one endpoint, and a line has none.',
            },
            {
              question: 'A flashlight beam (starts at the flashlight, shoots out forever) is most like a:',
              options: ['Line segment', 'Ray', 'Line', 'Point'],
              correctAnswer: 1,
              explanation: 'A ray has exactly one endpoint (the flashlight) and goes on forever in one direction (the beam).',
            },
          ],
        },
      },
      {
        id: 'la1-naming',
        type: 'text' as const,
        content: `## How to Name Them

We name figures using the capital letters at their points.

| Figure | Symbol on top | We say |
|--------|---------------|--------|
| Line segment from $A$ to $B$ | $\\overline{AB}$ | "segment AB" |
| Ray starting at $A$ through $B$ | $\\overrightarrow{AB}$ | "ray AB" |
| Line through $A$ and $B$ | $\\overleftrightarrow{AB}$ | "line AB" |

> ⚠️ **Watch the order for rays!** $\\overrightarrow{AB}$ starts at $A$ and goes *toward* $B$. So $\\overrightarrow{AB}$ and $\\overrightarrow{BA}$ are **different rays** — they start at different points and point in opposite directions.

For **segments** and **lines**, the order doesn't matter: $\\overline{AB}$ is the same as $\\overline{BA}$, because they connect the same two points.`,
      },
      {
        id: 'la1-naming-drop',
        type: 'dropdown-select' as const,
        content: `**Match the Name** 🔽

Choose the correct word for each description.`,
        exercise: {
          dropdowns: [
            { label: 'Goes on forever in BOTH directions:', options: ['line', 'ray', 'line segment', 'point'] },
            { label: 'Has exactly ONE endpoint:', options: ['ray', 'line', 'line segment', 'point'] },
            { label: 'Has exactly TWO endpoints:', options: ['line segment', 'ray', 'line', 'point'] },
            { label: 'An exact location with no size:', options: ['point', 'ray', 'line', 'line segment'] },
          ],
          correctAnswers: ['line', 'ray', 'line segment', 'point'],
          hint1: 'Arrows on both ends mean it never stops in either direction — that is a line.',
          hint2: 'One endpoint plus an arrow (forever in one direction) is a ray. Two endpoints is a segment.',
          hint3: 'A point is just a dot — a location with no length, width, or height.',
          explanation: 'A line has arrows on both ends, a ray has one endpoint, a segment has two endpoints, and a point marks an exact spot.',
        },
      },
      {
        id: 'la1-count-text',
        type: 'text' as const,
        content: `## Count the Endpoints

Here's a quick way to tell figures apart: just **count the endpoints** (the dots that stop the figure).

| Figure | Number of endpoints |
|--------|---------------------|
| Line segment | $2$ |
| Ray | $1$ |
| Line | $0$ |

The endpoints are where the figure **stops**. An arrow means it keeps going — no endpoint there!`,
      },
      {
        id: 'la1-count-input',
        type: 'input-boxes' as const,
        content: `**Count the Endpoints** 🧮

Type the number of endpoints each figure has.

**1)** A line segment has how many endpoints? $\\,?$
**2)** A ray has how many endpoints? $\\,?$
**3)** A line has how many endpoints? $\\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['2', '1', '0'],
          hint1: 'A segment stops at both ends, so count both dots.',
          hint2: 'A ray stops at only one end (the other end has an arrow).',
          hint3: 'A line has arrows on both ends, so it never stops — that means $0$ endpoints.',
          explanation: 'A segment has $2$ endpoints, a ray has $1$, and a line has $0$ (arrows on both ends mean it goes forever).',
        },
      },
      {
        id: 'la1-wrap',
        type: 'text' as const,
        content: `## You've Got the Basics!

Here's the quick picture to keep in your head:

| Name | Endpoints | Goes forever? |
|------|-----------|---------------|
| Point | — | No (just a spot) |
| Line segment | 2 | No |
| Ray | 1 | Yes, one direction |
| Line | 0 | Yes, both directions |

> 🔑 **Key takeaway:** Count the **endpoints** and look for **arrows**. That tells you exactly which figure you have.

In **Part 2**, we'll see what happens when lines meet, cross, or stay perfectly apart — and meet our first angle!`,
      },
    ],
  },

  // ───────────────────────── PART 2 ─────────────────────────
  {
    topicSlug: 'lines-and-angles',
    sections: [
      {
        id: 'la2-intro',
        type: 'text' as const,
        content: `# 📏 Lines and Angles

**Part 2 of 5 — How Lines Relate: Parallel, Perpendicular & Intersecting**

---

> 🔑 **The Idea:** When you have two lines, there are really only three things they can do: **cross**, **never cross**, or **cross at a perfect corner**. Each one has a special name.`,
      },
      {
        id: 'la2-three-ways',
        type: 'text' as const,
        content: `## Three Ways Lines Relate

| Relationship | What happens | Real-world example |
|--------------|--------------|--------------------|
| **Intersecting** | The lines **cross** at exactly one point | Two roads meeting at an intersection |
| **Parallel** | The lines **never cross**, no matter how far they go | The two rails of a train track 🚂 |
| **Perpendicular** | The lines cross and make a **square corner** (a right angle) | The corner of a window 🪟 |

A few important details:

- **Parallel** lines stay the exact same distance apart forever. We write $\\overleftrightarrow{AB} \\parallel \\overleftrightarrow{CD}$.
- **Perpendicular** lines are a *special kind* of intersecting line — they cross at a perfect $90°$ corner. We write $\\overleftrightarrow{AB} \\perp \\overleftrightarrow{CD}$.
- The little **square symbol** ⊾ drawn in a corner is how we show a right angle.

> 💡 **Memory trick:** **Para**llel lines are like the two L's in "para**ll**el" — two straight lines side by side that never touch!`,
      },
      {
        id: 'la2-relate-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'The two rails of a straight train track never meet. They are:',
              options: ['Perpendicular', 'Parallel', 'Intersecting', 'Rays'],
              correctAnswer: 1,
              explanation: 'Parallel lines stay the same distance apart and never cross — exactly like train rails.',
            },
            {
              question: 'Two lines cross and make a perfect square corner. They are:',
              options: ['Parallel', 'Perpendicular', 'Never touching', 'Points'],
              correctAnswer: 1,
              explanation: 'Perpendicular lines cross at a right angle ($90°$), making a square corner. The symbol is $\\perp$.',
            },
            {
              question: 'Which statement is TRUE?',
              options: ['Perpendicular lines never cross', 'Parallel lines cross at one point', 'Perpendicular lines are a special kind of intersecting line', 'Parallel lines make a square corner'],
              correctAnswer: 2,
              explanation: 'Perpendicular lines DO cross — at a $90°$ corner — so they are a special case of intersecting lines. Parallel lines are the ones that never cross.',
            },
          ],
        },
      },
      {
        id: 'la2-symbols-text',
        type: 'text' as const,
        content: `## Shortcut Symbols

Mathematicians are busy people, so they use short symbols instead of writing whole words.

| Symbol | Means | Picture clue |
|--------|-------|--------------|
| $\\parallel$ | parallel | Two upright bars, like two parallel lines |
| $\\perp$ | perpendicular | An upside-down "T" — one line standing on another |
| ⊾ | right angle | A tiny square tucked in a corner |

> 💡 The $\\parallel$ symbol literally *looks* like two parallel lines. Let the symbol remind you of its meaning!`,
      },
      {
        id: 'la2-symbols-drop',
        type: 'dropdown-select' as const,
        content: `**Read the Symbols** 🔽

Math has shortcut symbols for line relationships. Pick what each one means.`,
        exercise: {
          dropdowns: [
            { label: 'The symbol $\\parallel$ means:', options: ['parallel', 'perpendicular', 'intersecting', 'a point'] },
            { label: 'The symbol $\\perp$ means:', options: ['perpendicular', 'parallel', 'a ray', 'a segment'] },
            { label: 'A small square ⊾ inside a corner shows a:', options: ['right angle', 'parallel mark', 'curve', 'point'] },
          ],
          correctAnswers: ['parallel', 'perpendicular', 'right angle'],
          hint1: 'The two upright bars $\\parallel$ look like two parallel lines standing side by side.',
          hint2: 'The upside-down T shape $\\perp$ shows one line standing straight up on another — perpendicular.',
          hint3: 'The little square in a corner always marks a $90°$ right angle.',
          explanation: '$\\parallel$ = parallel (never cross), $\\perp$ = perpendicular (square corner), and the small square ⊾ marks a $90°$ right angle.',
        },
      },
      {
        id: 'la2-spot-text',
        type: 'text' as const,
        content: `## Find Them All Around You

These relationships aren't just in math books — they're everywhere!

- **Parallel** 🚂: train rails, the lines on notebook paper, the two long edges of a ruler.
- **Perpendicular** 🪟: the corner of a window, the legs of a letter "T", the floor meeting a wall.
- **Intersecting** ✚: a "plus" sign, the spot where two roads meet, the strings of a tennis racket crossing.

> 🔑 Once you start looking, you'll spot parallel and perpendicular lines all over your room!`,
      },
      {
        id: 'la2-spot',
        type: 'multiple-choice' as const,
        content: `**Spot It Around You** 🎯`,
        exercise: {
          questions: [
            {
              question: 'The two long edges of a ruler are always the same distance apart. They are:',
              options: ['Parallel', 'Perpendicular', 'Intersecting', 'Curved'],
              correctAnswer: 0,
              explanation: 'The long edges of a ruler stay the same distance apart and never meet — they are parallel.',
            },
            {
              question: 'The hands of a clock at exactly 3:00 form what kind of corner?',
              options: ['A square (right-angle) corner', 'A parallel pair', 'No corner at all', 'A straight line'],
              correctAnswer: 0,
              explanation: 'At 3:00 the hour and minute hands make a perfect square corner — a $90°$ right angle. The hands are perpendicular.',
            },
          ],
        },
      },
      {
        id: 'la2-wrap',
        type: 'text' as const,
        content: `## Quick Recap

| Relationship | Cross? | Special note |
|--------------|--------|--------------|
| Parallel ($\\parallel$) | Never | Same distance apart forever |
| Intersecting | Yes, once | Cross at one point |
| Perpendicular ($\\perp$) | Yes, once | Cross at a $90°$ square corner |

> 🔑 **Key takeaway:** Every pair of perpendicular lines is also intersecting — but not every pair of intersecting lines is perpendicular. Only the ones with a perfect square corner earn the name "perpendicular."

When two lines (or rays) meet, they open up a gap between them. That gap is an **angle** — and angles are the star of **Part 3**!`,
      },
    ],
  },

  // ───────────────────────── PART 3 ─────────────────────────
  {
    topicSlug: 'lines-and-angles',
    sections: [
      {
        id: 'la3-intro',
        type: 'text' as const,
        content: `# 📏 Lines and Angles

**Part 3 of 5 — Angles & How We Measure Them**

---

> 🔑 **The Idea:** An **angle** is the amount of "turn" between two rays that share an endpoint. We measure how open an angle is in **degrees** ($°$), where a full circle is $360°$.`,
      },
      {
        id: 'la3-what-is-angle',
        type: 'text' as const,
        content: `## What Is an Angle?

An **angle** is formed by **two rays** that share the same endpoint. That shared endpoint is called the **vertex**.

- The two rays are called the **sides** of the angle.
- The **vertex** is the corner where they meet.

We measure angles in **degrees**, written with a little circle: $°$.

### Important benchmark angles

| Angle | Degrees | Picture |
|-------|---------|---------|
| A full turn (all the way around) | $360°$ | A complete circle 🔄 |
| A half turn (a straight line) | $180°$ | A flat straight angle |
| A quarter turn (a square corner) | $90°$ | A right angle ⊾ |

> 💡 **Think of a clock or a pizza!** Cutting a whole pizza into 4 equal slices makes four $90°$ corners in the middle, because $360° \\div 4 = 90°$. 🍕`,
      },
      {
        id: 'la3-bench-input',
        type: 'input-boxes' as const,
        content: `**Benchmark Degrees** 🧮

Fill in the number of degrees. (No degree symbol needed — just the number.)

**1)** A full turn all the way around $= \\,?$ degrees
**2)** A straight angle (half turn) $= \\,?$ degrees
**3)** A right angle (square corner) $= \\,?$ degrees`,
        exercise: {
          boxes: 3,
          correctAnswers: ['360', '180', '90'],
          hint1: 'All the way around a full circle is $360°$.',
          hint2: 'Half of a full turn is $360° \\div 2 = 180°$ — a straight line.',
          hint3: 'A quarter turn (square corner) is $360° \\div 4 = 90°$.',
          explanation: 'Full turn $= 360°$, half turn (straight angle) $= 180°$, and a quarter turn (right angle) $= 90°$.',
        },
      },
      {
        id: 'la3-protractor',
        type: 'text' as const,
        content: `## Measuring with a Protractor

A **protractor** is the tool we use to measure angles. Here's how to use it:

1. **Line up** the center hole of the protractor on the **vertex** of the angle.
2. **Line up** one side of the angle with the $0°$ line.
3. **Read** the number where the other side crosses the scale.

> ⚠️ **Careful — protractors have TWO rows of numbers!** One row counts up from the left, the other from the right. Always start from the side that is on the $0°$ mark, and count up from there.

### A helpful check

If an angle looks **smaller** than a square corner, its measure must be **less than $90°$**. If it looks **bigger** than a square corner but not a straight line, it's **between $90°$ and $180°$**. This quick check helps you pick the right row of numbers!`,
      },
      {
        id: 'la3-measure-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'The shared endpoint where the two sides of an angle meet is called the:',
              options: ['Ray', 'Vertex', 'Degree', 'Segment'],
              correctAnswer: 1,
              explanation: 'The vertex is the corner point where the two rays (sides) of the angle meet.',
            },
            {
              question: 'An angle looks a little smaller than a square corner. About how big is it?',
              options: ['Less than $90°$', 'Exactly $180°$', 'More than $180°$', 'Exactly $360°$'],
              correctAnswer: 0,
              explanation: 'Smaller than a square corner ($90°$) means the angle measures less than $90°$.',
            },
            {
              question: 'What tool do we use to measure an angle in degrees?',
              options: ['A ruler', 'A protractor', 'A calculator', 'A compass for drawing circles'],
              correctAnswer: 1,
              explanation: 'A protractor measures angles in degrees. A ruler measures length instead.',
            },
          ],
        },
      },
      {
        id: 'la3-compare-text',
        type: 'text' as const,
        content: `## Compare to a Square Corner

Before you even pick up a protractor, you can estimate any angle by comparing it to a **square corner** ($90°$) and a **straight line** ($180°$):

| If the angle is... | Then its measure is... |
|--------------------|------------------------|
| Smaller than a square corner | Less than $90°$ |
| Exactly a square corner | $90°$ |
| Wider than a square corner, but not flat | Between $90°$ and $180°$ |
| A flat straight line | $180°$ |

> 💡 This "eyeball estimate" keeps you from making big protractor mistakes — if your measurement doesn't match your estimate, recheck which row of numbers you read!`,
      },
      {
        id: 'la3-compare-drop',
        type: 'dropdown-select' as const,
        content: `**Estimate the Measure** 🔽

Compare each angle to a square corner ($90°$) and a straight line ($180°$).`,
        exercise: {
          dropdowns: [
            { label: 'An angle a little smaller than a square corner is about:', options: ['$80°$', '$120°$', '$180°$', '$300°$'] },
            { label: 'An angle that forms a flat straight line measures:', options: ['$180°$', '$90°$', '$45°$', '$360°$'] },
            { label: 'An angle wider than a square corner but not flat is about:', options: ['$130°$', '$30°$', '$90°$', '$180°$'] },
          ],
          correctAnswers: ['$80°$', '$180°$', '$130°$'],
          hint1: 'A square corner is $90°$. A little smaller than that means just under $90°$.',
          hint2: 'A flat straight line is always $180°$.',
          hint3: 'Wider than $90°$ but not yet flat ($180°$) means somewhere in between, like $130°$.',
          explanation: 'A bit under a square corner ≈ $80°$; a flat straight line $= 180°$; wider than a corner but not flat ≈ $130°$ (between $90°$ and $180°$).',
        },
      },
      {
        id: 'la3-wrap',
        type: 'text' as const,
        content: `## Quick Recap

- An **angle** is two rays sharing a **vertex**, measured in **degrees** ($°$).
- $90°$ = square corner, $180°$ = straight line, $360°$ = full circle.
- A **protractor** measures angles — line up the **vertex** and read from the $0°$ side.

> 🔑 **Key takeaway:** Compare any angle to a square corner ($90°$) and a straight line ($180°$). Those two benchmarks let you estimate *and* check every angle you measure.

Now that we can measure angles, let's give them names based on their size. That's **Part 4**!`,
      },
    ],
  },

  // ───────────────────────── PART 4 ─────────────────────────
  {
    topicSlug: 'lines-and-angles',
    sections: [
      {
        id: 'la4-intro',
        type: 'text' as const,
        content: `# 📏 Lines and Angles

**Part 4 of 5 — Classifying Angles: Acute, Right, Obtuse & Straight**

---

> 🔑 **The Idea:** Every angle gets a name based on how it compares to a **right angle** ($90°$) and a **straight angle** ($180°$). Learn four names and you can classify any angle you see.`,
      },
      {
        id: 'la4-four-types',
        type: 'text' as const,
        content: `## The Four Angle Types

| Name | Size | How to remember it |
|------|------|--------------------|
| **Acute** | **Less than** $90°$ | A "**cute**" little angle — small and sharp 🐭 |
| **Right** | **Exactly** $90°$ | A perfect square corner ⊾ |
| **Obtuse** | **Between** $90°$ and $180°$ | A big, wide-open angle |
| **Straight** | **Exactly** $180°$ | Opens into a perfectly flat line |

Here are some examples by measure:

| Angle measure | Type |
|---------------|------|
| $45°$ | Acute (it's less than $90°$) |
| $90°$ | Right |
| $120°$ | Obtuse (between $90°$ and $180°$) |
| $180°$ | Straight |
| $30°$ | Acute |
| $155°$ | Obtuse |

> 💡 **Memory trick:** **A**cute = **A** tiny angle (less than $90°$). If you see "acute," think "a-cute little angle." 🐭`,
      },
      {
        id: 'la4-classify-drop',
        type: 'dropdown-select' as const,
        content: `**Classify Each Angle** 🔽

Use the rule: acute $< 90°$, right $= 90°$, obtuse is between $90°$ and $180°$, straight $= 180°$.`,
        exercise: {
          dropdowns: [
            { label: 'An angle measuring $40°$ is:', options: ['acute', 'right', 'obtuse', 'straight'] },
            { label: 'An angle measuring $90°$ is:', options: ['right', 'acute', 'obtuse', 'straight'] },
            { label: 'An angle measuring $135°$ is:', options: ['obtuse', 'acute', 'right', 'straight'] },
            { label: 'An angle measuring $180°$ is:', options: ['straight', 'acute', 'right', 'obtuse'] },
          ],
          correctAnswers: ['acute', 'right', 'obtuse', 'straight'],
          hint1: '$40°$ is less than $90°$, so it is acute. $90°$ exactly is a right angle.',
          hint2: '$135°$ is between $90°$ and $180°$, so it is obtuse.',
          hint3: '$180°$ exactly forms a straight line, so it is a straight angle.',
          explanation: '$40°$ = acute (under $90°$), $90°$ = right, $135°$ = obtuse (between $90°$ and $180°$), $180°$ = straight.',
        },
      },
      {
        id: 'la4-realworld-text',
        type: 'text' as const,
        content: `## Angles in the Real World

You see all four angle types every day:

| Where you see it | Type of angle |
|------------------|---------------|
| The slice of a thin pizza wedge 🍕 | Acute (small and sharp) |
| The corner of a book or a TV 📺 | Right (a square corner) |
| A reclining chair leaned way back 🛋️ | Obtuse (wide open) |
| A perfectly flat, opened laptop laid down 💻 | Straight ($180°$) |

> 💡 Try this: open a door a tiny bit (acute), to a square corner (right), and way out wide (obtuse). One door makes every angle type!`,
      },
      {
        id: 'la4-classify-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Which angle is OBTUSE?',
              options: ['$30°$', '$89°$', '$110°$', '$90°$'],
              correctAnswer: 2,
              explanation: 'Obtuse means between $90°$ and $180°$. Only $110°$ fits — $30°$ and $89°$ are acute, and $90°$ is a right angle.',
            },
            {
              question: 'Which angle is ACUTE?',
              options: ['$95°$', '$72°$', '$180°$', '$130°$'],
              correctAnswer: 1,
              explanation: 'Acute means less than $90°$. Only $72°$ is below $90°$; the others are right/obtuse/straight.',
            },
            {
              question: 'A door opened to make a perfect square corner with the wall forms what kind of angle?',
              options: ['Acute', 'Right', 'Obtuse', 'Straight'],
              correctAnswer: 1,
              explanation: 'A perfect square corner is exactly $90°$ — a right angle.',
            },
          ],
        },
      },
      {
        id: 'la4-aorO-text',
        type: 'text' as const,
        content: `## Just Compare to 90°

For the two most common types — acute and obtuse — there's one simple rule:

- If the number of degrees is **less than $90$**, the angle is **acute** (A).
- If the number is **more than $90$** (but less than $180$), the angle is **obtuse** (O).

That's it — one comparison to the number $90$ tells you which one it is!`,
      },
      {
        id: 'la4-classify-input',
        type: 'input-boxes' as const,
        content: `**Greater or Less Than 90°?** 🧮

A right angle is $90°$. For each angle below, write **A** if it is acute (under $90°$) or **O** if it is obtuse (between $90°$ and $180°$).

**1)** $25°$ → type A or O: $\\,?$
**2)** $140°$ → type A or O: $\\,?$
**3)** $88°$ → type A or O: $\\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['A', 'O', 'A'],
          hint1: 'Compare each number to $90$. Less than $90$ is acute (A); more than $90$ (up to $180$) is obtuse (O).',
          hint2: '$25°$ is well under $90°$, and $140°$ is well over $90°$.',
          hint3: '$88°$ is just under $90°$ — it is still acute, so the answer is A.',
          explanation: '$25°$ = A (acute), $140°$ = O (obtuse), $88°$ = A (acute, because $88 < 90$).',
        },
      },
      {
        id: 'la4-wrap',
        type: 'text' as const,
        content: `## Quick Recap

| Type | Rule |
|------|------|
| Acute | Less than $90°$ |
| Right | Exactly $90°$ |
| Obtuse | Between $90°$ and $180°$ |
| Straight | Exactly $180°$ |

> 🔑 **Key takeaway:** Just compare to $90°$ and $180°$. Under $90°$ → acute. Exactly $90°$ → right. Between → obtuse. Exactly $180°$ → straight.

In **Part 5**, we'll learn the coolest trick of all — how to **add and subtract** angle measures to find missing angles — and then prove you're an angle master with the Exit Quiz!`,
      },
    ],
  },

  // ───────────────────────── PART 5 ─────────────────────────
  {
    topicSlug: 'lines-and-angles',
    sections: [
      {
        id: 'la5-intro',
        type: 'text' as const,
        content: `# 📏 Lines and Angles

**Part 5 of 5 — Adding Angles & Mastery Check**

---

You can now name lines and rays, tell parallel from perpendicular, measure with a protractor, and classify angles. The last skill: **putting angles together** to find a missing one.`,
      },
      {
        id: 'la5-add-angles',
        type: 'text' as const,
        content: `## Angles Add Up

When a big angle is split into smaller angles by a ray, the small angles **add up** to the big one.

### Example: angles on a straight line

A straight angle is $180°$. If one part is $130°$, the other part must be:

$$180° - 130° = 50°$$

### Example: angles in a square corner

A right angle is $90°$. If a ray splits it and one part is $35°$, the other part is:

$$90° - 35° = 55°$$

> 💡 **Big idea:** To find a missing piece, **subtract** the part you know from the whole. To find the whole, **add** the pieces together.`,
      },
      {
        id: 'la5-add-input',
        type: 'input-boxes' as const,
        content: `**Find the Missing Angle** 🧮

Use addition and subtraction. (Just type the number — no degree symbol.)

**1)** Two angles sit on a straight line ($180°$). One is $110°$. The other is $\\,?$
**2)** A right angle ($90°$) is split into two parts. One is $40°$. The other is $\\,?$
**3)** Two angles join to make $75°$. One is $25°$. The other is $\\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['70', '50', '50'],
          hint1: 'For a straight line, subtract from $180$: $180 - 110$.',
          hint2: 'For a right angle, subtract from $90$: $90 - 40$.',
          hint3: 'For the last one, subtract the known part from the whole: $75 - 25$.',
          explanation: '1) $180 - 110 = 70$. 2) $90 - 40 = 50$. 3) $75 - 25 = 50$. Subtract the known part from the whole each time.',
        },
      },
      {
        id: 'la5-summary',
        type: 'text' as const,
        content: `## Quick Reference — Everything You Learned

| Topic | Key fact |
|-------|----------|
| Line segment | Two endpoints, fixed length |
| Ray | One endpoint, goes forever one way |
| Line | No endpoints, goes forever both ways |
| Parallel ($\\parallel$) | Lines never cross |
| Perpendicular ($\\perp$) | Lines cross at a $90°$ corner |
| Acute angle | Less than $90°$ |
| Right angle | Exactly $90°$ |
| Obtuse angle | Between $90°$ and $180°$ |
| Straight angle | Exactly $180°$ |
| Missing angle | Subtract the known part from the whole |

> ⚠️ **Two things people mix up:** Parallel lines *never* touch, but perpendicular lines *do* touch (at a square corner). And remember "acute = a cute little angle" so you never confuse it with obtuse.`,
      },
      {
        id: 'la5-mixed',
        type: 'multiple-choice' as const,
        content: `**Mixed Practice** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Two angles lie on a straight line. One measures $65°$. What is the other?',
              options: ['$25°$', '$115°$', '$135°$', '$65°$'],
              correctAnswer: 1,
              explanation: 'A straight line is $180°$, so the other angle is $180° - 65° = 115°$.',
            },
            {
              question: 'Which pair describes lines that NEVER cross?',
              options: ['Perpendicular lines', 'Intersecting lines', 'Parallel lines', 'Rays'],
              correctAnswer: 2,
              explanation: 'Parallel lines stay the same distance apart and never cross. Perpendicular and intersecting lines both cross.',
            },
          ],
        },
      },
      {
        id: 'la5-ready-text',
        type: 'text' as const,
        content: `## You're an Angle Master! 🌟

You've learned a lot in this lesson. Before the final quiz, here's your three-step game plan for any figure:

1. **Count endpoints / look for arrows** → is it a point, segment, ray, or line?
2. **See if the lines cross** → parallel (never), intersecting (once), or perpendicular (square corner)?
3. **Compare the angle to $90°$ and $180°$** → acute, right, obtuse, or straight?

> 🔑 Keep these three questions in your head and you can solve almost any lines-and-angles problem. Ready? Let's finish strong!`,
      },
      {
        id: 'la5-exit-quiz',
        type: 'multiple-choice' as const,
        content: `**Exit Quiz** ✅

Answer all three to finish the lesson!`,
        exercise: {
          questions: [
            {
              question: 'A figure starts at one endpoint and goes on forever in one direction. It is a:',
              options: ['Line segment', 'Ray', 'Line', 'Point'],
              correctAnswer: 1,
              explanation: 'One endpoint plus "forever in one direction" describes a ray (like a flashlight beam).',
            },
            {
              question: 'An angle measures $115°$. It is classified as:',
              options: ['Acute', 'Right', 'Obtuse', 'Straight'],
              correctAnswer: 2,
              explanation: '$115°$ is between $90°$ and $180°$, so it is an obtuse angle.',
            },
            {
              question: 'A right angle ($90°$) is split by a ray into two parts. One part is $30°$. The other part is:',
              options: ['$60°$', '$30°$', '$120°$', '$90°$'],
              correctAnswer: 0,
              explanation: 'The two parts must add to $90°$, so the missing part is $90° - 30° = 60°$.',
            },
          ],
        },
      },
    ],
  },
]
