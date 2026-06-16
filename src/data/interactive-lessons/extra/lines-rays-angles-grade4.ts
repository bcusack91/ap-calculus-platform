import type { LessonData } from '../registry'

/**
 * Hand-authored interactive lesson — Lines, Rays, and Angles (Grade 4 Math).
 * Registry key: 'lines-rays-angles-grade4' (matches the DB Topic.slug).
 * 5 parts, gold-standard structure: teach → worked examples → interactive practice
 * (multiple-choice + input-boxes + dropdown) → exit quiz. Grade-4 friendly: favors
 * concept checks (multiple-choice + dropdown) with light numeric work via input-boxes.
 * Math uses doubled backslashes (template-literal strings); the degree symbol is
 * written literally (°) for readability, matching classifying-shapes-grade4.ts.
 */
export const parts: LessonData[] = [
  // ───────────────────────── PART 1 ─────────────────────────
  {
    topicSlug: 'lines-rays-angles-grade4',
    sections: [
      {
        id: 'lra1-intro',
        type: 'text' as const,
        content: `# 📏 Lines, Rays, and Angles

**Part 1 of 5 — Points, Lines, Segments & Rays**

---

### Topics in This Part

| Section |
|---------|
| Points: Where Geometry Begins |
| Lines, Segments, and Rays |
| Reading the Arrows |

> 🔑 **Key Idea:** Every shape, road, and corner is built out of just a few simple parts. In this lesson we learn the four building blocks of geometry — the **point**, the **line**, the **line segment**, and the **ray** — and then use them to make **angles**.`,
      },
      {
        id: 'lra1-point',
        type: 'text' as const,
        content: `## Points: Where Geometry Begins

A **point** is an exact spot or location. It has **no size at all** — no width, no length. We draw it as a tiny dot and label it with a **capital letter**.

- Point $A$ means "the exact spot we labeled $A$."
- The dot we draw is just a marker. The real point is the *position*, not the ink.

> 💡 Think of a point like a single star in the night sky, or one pixel on a screen. It shows you *where*, but it has no size of its own.

Two points are special because as soon as you have **two** points, you can connect them — and that connection is what builds lines, segments, and rays.`,
      },
      {
        id: 'lra1-point-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'How big is a point?',
              options: ['As big as the dot you draw', 'It has no size at all', 'About one inch', 'It depends on the color'],
              correctAnswer: 1,
              explanation: 'A point is just an exact location, so it has no size — no length and no width. The dot we draw is only a marker to show where it is.',
            },
            {
              question: 'How do we usually label a point?',
              options: ['With a number', 'With a capital letter', 'With a small arrow', 'With a question mark'],
              correctAnswer: 1,
              explanation: 'We label a point with a capital letter, like point $A$ or point $B$.',
            },
          ],
        },
      },
      {
        id: 'lra1-three-things',
        type: 'text' as const,
        content: `## Lines, Segments, and Rays

When you connect points, you get three different things. The big difference is **where they stop** (or whether they stop at all!).

| Name | What It Looks Like | Endpoints | Goes On Forever? |
|------|--------------------|-----------|------------------|
| **Line segment** | A dot, a straight path, a dot | **2** endpoints | No — it has two ends |
| **Ray** | A dot, then an arrow | **1** endpoint | Yes — one direction only |
| **Line** | An arrow on **both** ends | **0** endpoints | Yes — both directions |

> 🔑 **The Arrow Rule:** An **arrow** means "keeps going forever." A **dot** means "stops here."
> - A line **segment** stops at both ends (dot–dot).
> - A **ray** starts at a dot and shoots off forever in one direction (dot–arrow).
> - A **line** never stops — it has arrows on both ends (arrow–arrow).`,
      },
      {
        id: 'lra1-id-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Which one has exactly TWO endpoints and does NOT go on forever?',
              options: ['A line', 'A ray', 'A line segment', 'A point'],
              correctAnswer: 2,
              explanation: 'A line segment has two endpoints (a dot on each end) and stops at both, so it does not go on forever. A line and a ray both have at least one arrow.',
            },
            {
              question: 'A flashlight beam starts at the flashlight and shines outward forever in one direction. This is most like a...',
              options: ['Line segment', 'Ray', 'Line', 'Point'],
              correctAnswer: 1,
              explanation: 'A ray has ONE endpoint (the flashlight) and goes forever in one direction (the beam). One dot, one arrow.',
            },
          ],
        },
      },
      {
        id: 'lra1-name-it',
        type: 'text' as const,
        content: `## How We Name Them

We use **two points** and a little symbol drawn above the letters:

| Thing | How We Write It | How We Say It |
|-------|-----------------|----------------|
| Line through $A$ and $B$ | $\\overleftrightarrow{AB}$ | "line $AB$" |
| Ray from $A$ through $B$ | $\\overrightarrow{AB}$ | "ray $AB$" |
| Segment from $A$ to $B$ | $\\overline{AB}$ | "segment $AB$" |

> ⚠️ **Order matters for rays!** A **ray** always starts at its endpoint. $\\overrightarrow{AB}$ starts at $A$ and shoots toward $B$. So $\\overrightarrow{AB}$ and $\\overrightarrow{BA}$ point in **opposite** directions. For lines and segments, the order does not matter.`,
      },
      {
        id: 'lra1-count-drill',
        type: 'input-boxes' as const,
        content: `**Count the Endpoints** 🧮

An **endpoint** is a "dot" end that stops (an arrow end does NOT count as an endpoint).

**1)** How many endpoints does a **line segment** have?
**2)** How many endpoints does a **ray** have?
**3)** How many endpoints does a **line** have?`,
        exercise: {
          boxes: 3,
          correctAnswers: ['2', '1', '0'],
          hint1: 'An endpoint is a "dot" end that stops. Count the dots, not the arrows.',
          hint2: 'A segment has a dot on each end. A ray has one dot and one arrow.',
          hint3: 'A line has arrows on BOTH ends, so it has no dots — that means 0 endpoints.',
          explanation: '1) Segment = 2 endpoints (dot–dot). 2) Ray = 1 endpoint (dot–arrow). 3) Line = 0 endpoints (arrow–arrow). Arrows mean "forever," so they are never endpoints.',
        },
      },
      {
        id: 'lra1-wrapup',
        type: 'text' as const,
        content: `## Putting It Together

You now know the four building blocks of geometry:

- **Point** — an exact spot, no size.
- **Line segment** — a straight path with **2** endpoints.
- **Ray** — one endpoint, then forever in one direction.
- **Line** — forever in **both** directions.

> 💡 Quick check: the only one of these with **no** endpoints at all is the **line** (arrows on both ends).

In **Part 2**, we bring two rays together at a single point — and that makes an **angle**.`,
      },
    ],
  },

  // ───────────────────────── PART 2 ─────────────────────────
  {
    topicSlug: 'lines-rays-angles-grade4',
    sections: [
      {
        id: 'lra2-intro',
        type: 'text' as const,
        content: `# 📏 Lines, Rays, and Angles

**Part 2 of 5 — What Is an Angle?**

---

> 🔑 **The Idea:** When **two rays** share the same endpoint, they make an **angle**. The shared endpoint is the **vertex**, and the angle measures how much one ray is "turned" away from the other.`,
      },
      {
        id: 'lra2-parts',
        type: 'text' as const,
        content: `## The Parts of an Angle

Every angle has the same two parts:

- **Vertex** — the point where the two rays meet (the "corner"). *(One corner is a "vertex"; many are "vertices.")*
- **Sides** — the two **rays** that come out of the vertex.

The size of an angle is the amount of **opening** between the two rays. We measure that opening in **degrees**, written with a small ° symbol. A full turn all the way around is **360°**.

> 💡 An angle is **not** about how long the rays are. You can make the rays longer or shorter and the angle stays exactly the same — only the *opening* matters.`,
      },
      {
        id: 'lra2-parts-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'What do we call the point where the two rays of an angle meet?',
              options: ['The endpoint', 'The vertex', 'The degree', 'The side'],
              correctAnswer: 1,
              explanation: 'The shared point where the two rays meet is the vertex — it is the "corner" of the angle.',
            },
            {
              question: 'An angle is made from two...',
              options: ['rays that share an endpoint', 'curved lines', 'separate points', 'circles'],
              correctAnswer: 0,
              explanation: 'An angle is formed by two rays that share the same endpoint (the vertex). The opening between them is the angle.',
            },
          ],
        },
      },
      {
        id: 'lra2-naming',
        type: 'text' as const,
        content: `## Naming an Angle

We use the symbol $\\angle$ to mean "angle." There are two ways to name one:

1. **By its vertex letter:** the angle at vertex $B$ is $\\angle B$.
2. **By three letters**, with the **vertex in the middle**: $\\angle ABC$ or $\\angle CBA$.

| Picture clue | Name | Why |
|--------------|------|-----|
| Vertex at $B$, rays to $A$ and $C$ | $\\angle ABC$ | The vertex $B$ goes in the **middle** |
| Same angle, written backward | $\\angle CBA$ | Still fine — $B$ is still in the middle |

> ⚠️ **Vertex in the middle!** When you use three letters, the **middle letter must be the vertex**. $\\angle ABC$ and $\\angle CBA$ name the same angle, but $\\angle BAC$ is a **different** angle (its vertex is $A$).`,
      },
      {
        id: 'lra2-name-dropdown',
        type: 'dropdown-select' as const,
        content: `**Name the Angle** 🔽

An angle has its **vertex at $Q$**, with rays going out to point $P$ and to point $R$. Pick the correct way to name it.`,
        exercise: {
          dropdowns: [
            { label: 'Which letter must be in the MIDDLE of a 3-letter name?', options: ['$P$', '$Q$', '$R$'] },
            { label: 'A correct 3-letter name for this angle:', options: ['$\\angle PQR$', '$\\angle QPR$', '$\\angle PRQ$'] },
            { label: 'A short 1-letter name for this angle:', options: ['$\\angle P$', '$\\angle Q$', '$\\angle R$'] },
          ],
          correctAnswers: ['$Q$', '$\\angle PQR$', '$\\angle Q$'],
          hint1: 'The middle letter in a 3-letter angle name is always the vertex.',
          hint2: 'The vertex here is $Q$, so $Q$ goes in the middle: $\\angle PQR$.',
          hint3: 'A one-letter name just uses the vertex by itself: $\\angle Q$.',
          explanation: 'The vertex is $Q$, so it goes in the middle ($\\angle PQR$ or $\\angle RQP$), and the short name is simply $\\angle Q$.',
        },
      },
      {
        id: 'lra2-turns',
        type: 'text' as const,
        content: `## Turns and Degrees

The opening of an angle measures how far one ray has **turned** away from the other. We can picture this as spinning around a point:

| Turn | Picture | Degrees |
|------|---------|---------|
| **Full turn** | Spin all the way around once | **360°** |
| **Half turn** | Spin halfway around | **180°** |
| **Quarter turn** | Spin a quarter of the way (a square corner) | **90°** |

> 💡 Notice the pattern: a half turn is half of 360° ($360 \\div 2 = 180$), and a quarter turn is one fourth ($360 \\div 4 = 90$). That **90°** quarter turn — the "square corner" — is the most important angle of all. We use it as our measuring stick in Part 3!`,
      },
      {
        id: 'lra2-degree-drill',
        type: 'input-boxes' as const,
        content: `**Degrees in a Turn** 🧮

A full turn all the way around a point is **360°**. Use that to answer:

**1)** How many degrees are in a **full turn** (all the way around)?
**2)** A **half turn** is half of a full turn. How many degrees is that?
**3)** A **quarter turn** is one fourth of a full turn. How many degrees is that?`,
        exercise: {
          boxes: 3,
          correctAnswers: ['360', '180', '90'],
          hint1: 'A full turn — spinning all the way around once — is 360°.',
          hint2: 'A half turn is $360 \\div 2$.',
          hint3: 'A quarter turn is $360 \\div 4$.',
          explanation: '1) Full turn = 360°. 2) Half turn = $360 \\div 2 = 180°$. 3) Quarter turn = $360 \\div 4 = 90°$. That 90° quarter turn is a special "square corner" — we meet it again in Part 3!',
        },
      },
    ],
  },

  // ───────────────────────── PART 3 ─────────────────────────
  {
    topicSlug: 'lines-rays-angles-grade4',
    sections: [
      {
        id: 'lra3-intro',
        type: 'text' as const,
        content: `# 📏 Lines, Rays, and Angles

**Part 3 of 5 — Classifying Angles**

---

> 🔑 **The Idea:** We sort angles into four groups by comparing them to the **right angle** (the square corner, exactly 90°): **acute**, **right**, **obtuse**, and **straight**.`,
      },
      {
        id: 'lra3-four-types',
        type: 'text' as const,
        content: `## The Four Kinds of Angles

The **right angle** (90°) is our measuring stick. Everything is compared to it.

| Angle Type | Measure | What It Looks Like |
|------------|---------|--------------------|
| **Acute** | **Less than** 90° | A skinny, narrow opening |
| **Right** | **Exactly** 90° | A perfect square corner |
| **Obtuse** | Between 90° and 180° | A wide, open corner |
| **Straight** | **Exactly** 180° | A flat line (no bend) |

> 💡 **Memory tricks:**
> - **A**cute angles are **"a-cute"** little angles — small and skinny.
> - A **right** angle is the "just right" square corner you see in the corner of a book or window. We often mark it with a little square.
> - **Obtuse** angles are wide and lazy — they have "ob-too-much" opening.
> - A **straight** angle is completely flat, like a straight line.`,
      },
      {
        id: 'lra3-borderlines',
        type: 'text' as const,
        content: `## Watch the Borderlines

The two "exact" angles — **90°** and **180°** — have special names, so be careful not to call them acute or obtuse.

| Measure | Correct Name | Common Mistake |
|---------|--------------|----------------|
| 89° | Acute | (close to right, but still acute) |
| **90°** | **Right** | ❌ Not "acute" or "obtuse" |
| 91° | Obtuse | (just barely obtuse) |
| 135° | Obtuse | — |
| **180°** | **Straight** | ❌ Not "obtuse" |

> ⚠️ **Be exact!** Acute means **strictly less** than 90°. Obtuse means **more** than 90° but **less** than 180°. Exactly 90° is **right**, and exactly 180° is **straight** — those two have their own names.`,
      },
      {
        id: 'lra3-type-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'An angle measures 45°. What kind of angle is it?',
              options: ['Acute', 'Right', 'Obtuse', 'Straight'],
              correctAnswer: 0,
              explanation: '45° is less than 90°, so it is an acute angle (a skinny, narrow opening).',
            },
            {
              question: 'An angle measures exactly 90°. What kind of angle is it?',
              options: ['Acute', 'Right', 'Obtuse', 'Straight'],
              correctAnswer: 1,
              explanation: 'Exactly 90° is a right angle — a perfect square corner. It is not acute or obtuse.',
            },
            {
              question: 'An angle measures 150°. What kind of angle is it?',
              options: ['Acute', 'Right', 'Obtuse', 'Straight'],
              correctAnswer: 2,
              explanation: '150° is more than 90° but less than 180°, so it is an obtuse angle (a wide, open corner).',
            },
          ],
        },
      },
      {
        id: 'lra3-real-world',
        type: 'text' as const,
        content: `## Angles All Around You

You can spot these angles in everyday objects:

| Object | Angle | Type |
|--------|-------|------|
| Corner of a book or door | 90° | **Right** |
| The hands of a clock at 1 o'clock | 30° | **Acute** |
| A reclining beach chair | about 120° | **Obtuse** |
| A see-saw resting flat on the ground | 180° | **Straight** |

> 💡 A quick test: if the opening looks **smaller** than a square corner, it's **acute**. If it looks **wider** than a square corner (but not flat), it's **obtuse**.`,
      },
      {
        id: 'lra3-sort-dropdown',
        type: 'dropdown-select' as const,
        content: `**Sort the Angles** 🔽

Choose the correct name for each angle measure.`,
        exercise: {
          dropdowns: [
            { label: 'An angle of 30°:', options: ['Acute', 'Right', 'Obtuse', 'Straight'] },
            { label: 'An angle of 180°:', options: ['Acute', 'Right', 'Obtuse', 'Straight'] },
            { label: 'An angle of 110°:', options: ['Acute', 'Right', 'Obtuse', 'Straight'] },
            { label: 'An angle of 90°:', options: ['Acute', 'Right', 'Obtuse', 'Straight'] },
          ],
          correctAnswers: ['Acute', 'Straight', 'Obtuse', 'Right'],
          hint1: 'Compare each angle to 90° (a right angle) and 180° (a straight line).',
          hint2: 'Less than 90° is acute; exactly 90° is right; between 90° and 180° is obtuse.',
          hint3: 'Exactly 180° is a straight angle — it looks like a flat line.',
          explanation: '30° < 90° → acute. 180° → straight. 110° is between 90° and 180° → obtuse. 90° → right.',
        },
      },
      {
        id: 'lra3-compare-drill',
        type: 'input-boxes' as const,
        content: `**Acute, Right, or Obtuse?** 🧮

For each measure, type **A** for acute, **R** for right, or **O** for obtuse.

**1)** 75°
**2)** 90°
**3)** 120°`,
        exercise: {
          boxes: 3,
          correctAnswers: ['A', 'R', 'O'],
          hint1: 'Acute is less than 90°. Right is exactly 90°. Obtuse is more than 90° (but less than 180°).',
          hint2: '75° is less than 90°, and 120° is more than 90°.',
          hint3: '90° is exactly a right angle, so the answer is R.',
          explanation: '1) 75° < 90° → A (acute). 2) 90° → R (right). 3) 120° is between 90° and 180° → O (obtuse).',
        },
      },
    ],
  },

  // ───────────────────────── PART 4 ─────────────────────────
  {
    topicSlug: 'lines-rays-angles-grade4',
    sections: [
      {
        id: 'lra4-intro',
        type: 'text' as const,
        content: `# 📏 Lines, Rays, and Angles

**Part 4 of 5 — Measuring & Adding Angles**

---

> 🔑 **The Idea:** A **protractor** measures angles in degrees, and when two angles sit side-by-side at the same vertex, their measures **add together** to make a bigger angle.`,
      },
      {
        id: 'lra4-protractor',
        type: 'text' as const,
        content: `## Reading a Protractor

A **protractor** is a half-circle tool numbered from **0° to 180°**. To measure an angle:

1. Put the protractor's **center dot** on the **vertex**.
2. Line up one ray with the **zero line** (0°).
3. Read where the **other ray** crosses the number scale.

> 💡 **Start at zero!** Always line up one side of the angle with **0°** first. Then the number the other side points to *is* the angle's measure.

> ⚠️ Most protractors have **two** rows of numbers (one counting up, one counting down). Use the row that **starts at 0°** on your first ray — otherwise you might read 60° as 120° by mistake.`,
      },
      {
        id: 'lra4-protractor-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'When measuring an angle, where do you place the center dot of the protractor?',
              options: ['On one of the arrows', 'On the vertex', 'Anywhere on a ray', 'In the corner of the page'],
              correctAnswer: 1,
              explanation: 'The center dot of the protractor goes right on the vertex — the point where the two rays meet.',
            },
            {
              question: 'One ray of an angle lines up with 0°, and the other ray points to 70°. What is the measure of the angle?',
              options: ['7°', '70°', '110°', '180°'],
              correctAnswer: 1,
              explanation: 'When one ray is on 0°, the angle is simply the number the other ray points to: 70°.',
            },
          ],
        },
      },
      {
        id: 'lra4-adding',
        type: 'text' as const,
        content: `## Adding Angles Together

When two angles sit **next to each other** sharing the same vertex and a side, their measures **add up** to the total angle. This is called the **additive** property of angles.

$$\\angle ABC + \\angle CBD = \\angle ABD$$

### Worked Example

Ray $BC$ splits the big angle $\\angle ABD$ into two smaller angles. If $\\angle ABC = 40°$ and $\\angle CBD = 30°$, then the whole angle is:

$$\\angle ABD = 40° + 30° = 70°$$

### Working Backward

If you know the **whole** and **one part**, **subtract** to find the missing part. Suppose a straight angle ($180°$) is split into two pieces and one piece is $110°$:

$$180° - 110° = 70°$$

> 🔑 **The rule both ways:** part + part = whole (add), and whole − part = part (subtract).`,
      },
      {
        id: 'lra4-add-drill',
        type: 'input-boxes' as const,
        content: `**Add and Subtract Angles** 🧮

**1)** Two angles sit side-by-side: 35° and 25°. What is the total angle, in degrees?
**2)** A right angle (90°) is split into two parts. One part is 50°. How big is the other part?
**3)** A straight angle (180°) is split into two parts. One part is 65°. How big is the other part?`,
        exercise: {
          boxes: 3,
          correctAnswers: ['60', '40', '115'],
          hint1: 'To combine two angles, ADD their measures. To find a missing part, SUBTRACT from the whole.',
          hint2: '1) $35 + 25$.  2) The whole right angle is 90°, so $90 - 50$.',
          hint3: '3) A straight angle is 180°, so the missing part is $180 - 65$.',
          explanation: '1) $35 + 25 = 60°$. 2) $90 - 50 = 40°$. 3) $180 - 65 = 115°$. Add to combine, subtract to find a missing part.',
        },
      },
      {
        id: 'lra4-add-dropdown',
        type: 'dropdown-select' as const,
        content: `**Find the Missing Angle** 🔽

Ray $BC$ splits angle $\\angle ABD$ into $\\angle ABC$ and $\\angle CBD$. Choose the correct missing value.`,
        exercise: {
          dropdowns: [
            { label: 'If $\\angle ABC = 20°$ and $\\angle CBD = 50°$, then $\\angle ABD =$', options: ['$30°$', '$70°$', '$100°$'] },
            { label: 'If $\\angle ABD = 90°$ and $\\angle ABC = 60°$, then $\\angle CBD =$', options: ['$30°$', '$60°$', '$150°$'] },
            { label: 'If $\\angle ABD = 180°$ and $\\angle CBD = 45°$, then $\\angle ABC =$', options: ['$45°$', '$135°$', '$225°$'] },
          ],
          correctAnswers: ['$70°$', '$30°$', '$135°$'],
          hint1: 'To find the whole, ADD the two parts. To find a missing part, SUBTRACT.',
          hint2: '1) $20 + 50 = 70$.  2) $90 - 60 = 30$.',
          hint3: '3) The whole is the straight angle 180°, so $180 - 45 = 135$.',
          explanation: '1) Whole = $20° + 50° = 70°$. 2) Missing part = $90° - 60° = 30°$. 3) Missing part = $180° - 45° = 135°$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 5 ─────────────────────────
  {
    topicSlug: 'lines-rays-angles-grade4',
    sections: [
      {
        id: 'lra5-intro',
        type: 'text' as const,
        content: `# 📏 Lines, Rays, and Angles

**Part 5 of 5 — Mixed Practice & Mastery Check**

---

You can now (1) tell apart points, lines, segments, and rays, (2) name an angle by its vertex, (3) classify angles as acute, right, obtuse, or straight, and (4) measure and add angles. Let's put it all together!`,
      },
      {
        id: 'lra5-summary',
        type: 'text' as const,
        content: `## Quick Reference

| To figure out... | Remember... |
|------------------|-------------|
| **Segment vs. ray vs. line** | segment = 2 endpoints, ray = 1 endpoint, line = 0 endpoints |
| **Arrows** | an arrow means "goes on forever"; a dot means "stops here" |
| **Naming an angle** | the **middle** letter of $\\angle ABC$ is the **vertex** |
| **Classifying an angle** | $< 90°$ acute, $= 90°$ right, $90°$–$180°$ obtuse, $= 180°$ straight |
| **Combining angles** | part + part = whole (add); whole − part = part (subtract) |

> 🔑 **Big picture:** Two rays sharing an endpoint make an **angle**, the right angle (90°) is our measuring stick, and a full turn around a point is **360°**.`,
      },
      {
        id: 'lra5-mixed',
        type: 'multiple-choice' as const,
        content: `**Mixed Practice** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Which figure goes on forever in BOTH directions (arrows on both ends)?',
              options: ['A ray', 'A line segment', 'A line', 'A point'],
              correctAnswer: 2,
              explanation: 'A line has arrows on both ends, so it goes on forever in both directions. A ray goes one way; a segment stops at both ends.',
            },
            {
              question: 'In the angle named $\\angle XYZ$, which point is the vertex?',
              options: ['$X$', '$Y$', '$Z$', 'You cannot tell'],
              correctAnswer: 1,
              explanation: 'In a 3-letter angle name, the MIDDLE letter is the vertex. So in $\\angle XYZ$, the vertex is $Y$.',
            },
          ],
        },
      },
      {
        id: 'lra5-mixed-drill',
        type: 'input-boxes' as const,
        content: `**Number Review** 🧮

**1)** A right angle measures how many degrees?
**2)** Two angles, 80° and 55°, sit side-by-side. What is their total, in degrees?
**3)** A straight angle (180°) is split into two parts; one part is 100°. How big is the other part, in degrees?`,
        exercise: {
          boxes: 3,
          correctAnswers: ['90', '135', '80'],
          hint1: 'A right angle is the square-corner angle. To combine angles, add; to find a missing part, subtract.',
          hint2: '1) A right angle is 90°.  2) $80 + 55$.',
          hint3: '3) A straight angle is 180°, so the missing part is $180 - 100$.',
          explanation: '1) Right angle = 90°. 2) $80 + 55 = 135°$. 3) $180 - 100 = 80°$.',
        },
      },
      {
        id: 'lra5-ready',
        type: 'text' as const,
        content: `## You're Ready! 🌟

Before the final quiz, run through this checklist in your head:

- ✅ A **segment** has 2 endpoints, a **ray** has 1, a **line** has 0.
- ✅ The **middle** letter of an angle name is the **vertex**.
- ✅ Acute $< 90°$, right $= 90°$, obtuse is $90°$–$180°$, straight $= 180°$.
- ✅ Side-by-side angles **add**; to find a missing part, **subtract**.

> 💡 If any of these feel shaky, that's okay — scroll back and peek at the table for that part. Then come finish the Exit Quiz below.`,
      },
      {
        id: 'lra5-exit-quiz',
        type: 'multiple-choice' as const,
        content: `**Exit Quiz** ✅

Answer all three to finish the lesson.`,
        exercise: {
          questions: [
            {
              question: 'A figure has ONE endpoint and goes on forever in one direction. What is it?',
              options: ['A line', 'A ray', 'A line segment', 'A point'],
              correctAnswer: 1,
              explanation: 'One endpoint (a dot) plus one arrow that goes forever describes a ray, like a flashlight beam.',
            },
            {
              question: 'An angle measures 95°. How should it be classified?',
              options: ['Acute', 'Right', 'Obtuse', 'Straight'],
              correctAnswer: 2,
              explanation: '95° is more than 90° but less than 180°, so it is obtuse. (Exactly 90° would be right.)',
            },
            {
              question: 'Ray $BD$ splits a right angle $\\angle ABC$ ($90°$) into two parts. If one part is $25°$, how big is the other part?',
              options: ['$25°$', '$65°$', '$115°$', '$155°$'],
              correctAnswer: 1,
              explanation: 'The whole right angle is 90°. Subtract the known part: $90° - 25° = 65°$.',
            },
          ],
        },
      },
    ],
  },
]
