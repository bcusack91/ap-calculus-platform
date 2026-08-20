export const lessonData = {
  topicSlug: 'sat-geometry-basics-advanced',
  sections: [
    {
      id: 'geob-adv-p1-intro',
      type: 'text' as const,
      content: `# Geometry Basics: The 700-800 Patterns

**Part 1 of 3 — The Archetypes Hard-Tier Items Are Built From**

At the 700-800 level this topic is almost entirely **solid geometry inside a word problem**. The formulas are given to you on the reference sheet; the difficulty is in the layer wrapped around them — a density, a purchase, a rate, an already-elapsed time, a hidden face. Five archetypes cover the bank.

### Archetype 1: The Scaling Trio (Linear, Area, Volume)

If every length is multiplied by $k$, then every area is multiplied by $k^{2}$ and every volume by $k^{3}$. Almost every "by what percent" item is this rule wearing a disguise.

- Radius $\\times 1.5$ and height $\\times 0.8$: volume factor $= (1.5)^{2}(0.8) = 1.8$, an **80 percent increase**. Not $1.5 \\times 0.8 = 1.2$, because the radius is squared.
- Surface area goes from $100\\pi$ to $225\\pi$: the AREA ratio is $2.25$, so the LINEAR ratio is $\\sqrt{2.25} = 1.5$ and the volume ratio is $(1.5)^{3} = 3.375$ — a $237.5$ percent increase, not $337.5$.
- Model at scale $1:4$: bronze (a volume) scales by $64$; gold leaf (an area) scales by $16$. Two different exponents in one problem is the classic hard-item build.

**Percent increase is the ratio minus one.** A volume ratio of $3.375$ is an increase of $237.5$ percent. Reporting $337.5$ is the most common miss in the topic.

### Archetype 2: Composite and Subtracted Solids

Silo = cylinder $+$ hemisphere. Toy = cube $+$ pyramid. Block $-$ drilled cylinder. Cube $-$ inscribed sphere. Planter = outer cylinder $-$ interior cylinder.

Two disciplines make these routine:

1. **Hemisphere is $\\frac{2}{3}\\pi r^{3}$, not $\\frac{4}{3}\\pi r^{3}$ and not $\\frac{1}{3}\\pi r^{3}$.** Both wrong versions are planted.
2. **Surface-area composites lose faces.** A cube under a pyramid contributes only its four vertical sides: its bottom rests on the table, its top is hidden at the joint. The choices that include $5$ faces or all $6$ are waiting for you.

### Archetype 3: Density and Mass

Mass $=$ volume $\\times$ density. Every hard item in this family plants the raw **volume** as an answer choice, because it is the last number you compute before the final multiplication.

The alloy variant is worth memorizing: melting two metals adds their **volumes** and adds their **masses**, so the new density is $\\frac{\\text{total mass}}{\\text{total volume}}$. Averaging the two densities is valid only for equal volumes — and the average is always a choice.

Melting or melting-down never changes mass. Ice at $0.92$ g/cm³ becoming water at $1.00$ g/cm³ keeps its $828$ g and loses volume.`
    },
    {
      id: 'geob-adv-p1-arch45',
      type: 'text' as const,
      content: `### Archetype 4: Rates, Elapsed Time, and Unit Conversion

Volume $\\div$ rate $=$ time. The hard version adds one wrinkle:

- **"How much LONGER"** — subtract the time already spent, or the volume already added.
- **"How many HOURS"** when the rate is per minute — the un-converted minute count is a choice.
- **Liters vs cubic meters** — $1$ m³ $= 1000$ L, so $250$ L/min $= 0.25$ m³/min.
- **Cubic inches vs cubic feet** — $1$ ft³ $= 1728$ in³, not $144$. Cubing the conversion factor is exactly what students forget.

### Archetype 5: Similar-Solid Partial Fill

A cone held point-down filled to $\\frac{3}{4}$ of its height contains a **similar** smaller cone, so the water is $\\left(\\frac{3}{4}\\right)^{3} = \\frac{27}{64}$ of the capacity — not $\\frac{3}{4}$ of it. A pyramid cut halfway up gives a top piece of $\\frac{1}{8}$ the volume and a bottom piece of $\\frac{7}{8}$.

The same idea drives cone-filling rate problems: at depth $5$ in a cone that is $10$ deep with top radius $4$, the water's surface radius is $2$, not $4$. Scale the radius with the depth before you use $\\frac{1}{3}\\pi r^{2}h$.

### The Two Structural Habits

**Habit 1: circle the piece.** Cube minus sphere: is the question about the sphere or the leftover? Cone filled to $\\frac{3}{4}$: is it about the water or the empty space? The other piece is always a choice.

**Habit 2: apply the last multiplier.** Density, cost per unit, price per liter, tiles per square meter. The un-multiplied quantity is the single most-selected wrong answer in this topic.`
    },
    {
      id: 'geob-adv-p1-q1',
      type: 'quiz' as const,
      question: 'An engineer redesigns a cylindrical canister so that its radius is $25$ percent greater and its height is $36$ percent smaller than before. What is the effect on the canister’s volume?',
      options: [
        'It is unchanged.',
        'It decreases by $11$ percent.',
        'It increases by $56$ percent.',
        'It decreases by $20$ percent.'
      ],
      correctAnswer: 0,
      explanation: 'Volume scales by $(1.25)^{2}(0.64) = 1.5625 \\times 0.64 = 1.0$ exactly, so the volume is unchanged. The distractors: "decreases by $11$ percent" just adds the stated percents ($+25 - 36$). "Increases by $56$ percent" applies $(1.25)^{2}$ and ignores the height change. "Decreases by $20$ percent" multiplies the linear factors $1.25 \\times 0.64 = 0.8$, forgetting that the radius is squared — that factor governs the lateral surface area, not the volume.'
    },
    {
      id: 'geob-adv-p1-q2',
      type: 'quiz' as const,
      question: 'A solid brass ornament consists of a right circular cylinder of radius $3$ cm and height $10$ cm with a hemisphere of radius $3$ cm attached to the top. Brass has a density of $8.5$ grams per cubic centimeter. To the nearest gram, what is the mass of the ornament?',
      options: [
        '$339$',
        '$2403$',
        '$2884$',
        '$3365$'
      ],
      correctAnswer: 2,
      explanation: 'Cylinder: $\\pi(3)^{2}(10) = 90\\pi \\approx 282.7$ cm³. Hemisphere: $\\frac{2}{3}\\pi(3)^{3} = 18\\pi \\approx 56.5$ cm³. Total $\\approx 339.3$ cm³, so the mass is $339.3 \\times 8.5 \\approx 2884$ g. The distractors: $339$ is the VOLUME in cubic centimeters, with the density never applied. $2403$ uses the cylinder alone and forgets the dome. $3365$ uses a whole sphere, $\\frac{4}{3}\\pi r^{3}$, where only half of one sits on the cylinder.'
    },
    {
      id: 'geob-adv-p1-q3',
      type: 'quiz' as const,
      question: 'A cone-shaped funnel, held with its point down, has a capacity of $540$ milliliters. Liquid is poured in until its surface is at two-thirds of the funnel’s height. How many additional milliliters can be added before the funnel is full?',
      options: [
        '$160$',
        '$180$',
        '$360$',
        '$380$'
      ],
      correctAnswer: 3,
      explanation: 'The liquid forms a cone similar to the funnel with linear ratio $\\frac{2}{3}$, so its volume is $\\left(\\frac{2}{3}\\right)^{3} = \\frac{8}{27}$ of the capacity: $540 \\times \\frac{8}{27} = 160$ mL. The room remaining is $540 - 160 = 380$ mL. The distractors: $160$ is the liquid already in the funnel — the wrong piece. $360$ applies the linear ratio $\\frac{2}{3}$ directly to the volume. $180$ is $540 - 360$, that same linear-scaling error carried one step further.'
    }
  ]
};
