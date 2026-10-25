const eic3ParallelFigure = {
  svg: '<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif"><g stroke="currentColor" stroke-width="2" fill="none"><line x1="50" y1="40" x2="250" y2="40"/><line x1="50" y1="160" x2="250" y2="160"/><line x1="50" y1="40" x2="50" y2="92"/><line x1="50" y1="104" x2="50" y2="160"/><line x1="150" y1="40" x2="150" y2="70"/><polyline points="150,70 142,75 158,85 142,95 158,105 142,115 158,125 150,130"/><line x1="150" y1="130" x2="150" y2="160"/><line x1="250" y1="40" x2="250" y2="70"/><polyline points="250,70 242,75 258,85 242,95 258,105 242,115 258,125 250,130"/><line x1="250" y1="130" x2="250" y2="160"/></g><g stroke="currentColor"><line x1="32" y1="92" x2="68" y2="92" stroke-width="2.5"/><line x1="41" y1="104" x2="59" y2="104" stroke-width="5"/></g><g fill="currentColor"><circle cx="150" cy="40" r="3.5"/><circle cx="150" cy="160" r="3.5"/></g><text x="74" y="96" font-size="14" fill="currentColor">+</text><text x="74" y="112" font-size="14" fill="currentColor">−</text><g class="fig-accent" fill="currentColor" font-size="13" font-weight="bold"><text x="6" y="104">12 V</text><text x="166" y="104">6 Ω</text><text x="266" y="104">3 Ω</text></g></svg>',
  alt: 'A parallel circuit. A 12-volt battery on the left connects to a top wire and a bottom wire. Two resistors each connect straight from the top wire to the bottom wire, side by side: a 6-ohm resistor in the middle branch and a 3-ohm resistor in the right branch. Dots mark the junctions where the wires split.',
  caption: 'Figure 3. A 6-Ω and a 3-Ω resistor in parallel across a 12-V battery.',
  size: 'md' as const,
}

export const asvabEiCircuitsPart3Data = {
  topicSlug: 'asvab-ei-circuits',
  sections: [
    {
      id: 'eic3-intro',
      type: 'text' as const,
      content: `# 🔌 Series and Parallel Circuits and Power

**Part 3 of 7 — Parallel Circuits**

### Several Paths

In a **parallel circuit**, each part is connected directly **across the source**, on its own **branch**. Current leaving the battery splits at a junction, each share goes through one branch, and the shares rejoin before returning to the battery.

### The Three Parallel Rules

| Quantity | Rule in parallel | Why |
|:---|:---|:---|
| **Voltage** | **the same across every branch** (equal to the source) | each branch connects straight to both battery terminals |
| **Current** | **branch currents add up** to the total: $I_{total} = I_1 + I_2 + \\dots$ | the current splits and then rejoins |
| **Resistance** | the total (equivalent) resistance is **smaller than the smallest branch** | every new branch is one more path for current |

Each branch follows Ohm's law on its own: $I_{branch} = \\frac{V_{source}}{R_{branch}}$. The **smallest resistance carries the largest current**.

### What Happens When Things Change

- **One branch burns out or is switched off:** the other branches still have a complete path to the battery, so they **stay on** at the same brightness.
- **Add another branch:** total resistance goes **down**, so the **total current** from the source goes **up** (each existing branch keeps its own current).

> **Key Fact:** Your home is wired in **parallel**. Every outlet and light gets the full household voltage, and turning off the kitchen light does not turn off the TV.`,
    },
    {
      id: 'eic3-formulas',
      type: 'text' as const,
      content: `## Finding the Equivalent Resistance

You will almost always meet one of three easy cases.

| Situation | Shortcut | Example |
|:---|:---|:---|
| $n$ **identical** resistors | $R_{eq} = \\frac{R}{n}$ | three 12-Ω resistors: $\\frac{12}{3} = 4$ Ω |
| **Two** resistors | product over sum: $R_{eq} = \\frac{R_1 \\times R_2}{R_1 + R_2}$ | 6 Ω and 3 Ω: $\\frac{18}{9} = 2$ Ω |
| Any number | reciprocals: $\\frac{1}{R_{eq}} = \\frac{1}{R_1} + \\frac{1}{R_2} + \\dots$ | 2 Ω, 3 Ω, 6 Ω: $\\frac{1}{2} + \\frac{1}{3} + \\frac{1}{6} = 1$, so 1 Ω |

**Quick check:** the answer must be **smaller than the smallest branch**. Two resistors of 6 Ω and 3 Ω cannot combine to more than 3 Ω.

## Worked Example

A 6-Ω and a 3-Ω resistor are in parallel across a 12-V battery (Figure 3, coming up).

**Branch currents.** Each branch has the full 12 V:
$I_1 = \\frac{12}{6} = 2$ A and $I_2 = \\frac{12}{3} = 4$ A.

**Total current.** $2 + 4 = 6$ A.

**Check with $R_{eq}$.** $R_{eq} = \\frac{6 \\times 3}{6 + 3} = 2$ Ω, and $\\frac{12}{2} = 6$ A. ✓

| Branch | Resistance | Voltage | Current |
|:---:|:---:|:---:|:---:|
| 1 | 6 Ω | 12 V | 2 A |
| 2 | 3 Ω | 12 V | 4 A |
| **Total** | **2 Ω** | **12 V** | **6 A** |

Often the fastest route is to find each branch current and add them, without finding $R_{eq}$ at all.`,
    },
    {
      id: 'eic3-figure-input',
      type: 'input-boxes' as const,
      figure: eic3ParallelFigure,
      content: `**Figure 3 is the circuit from the worked example.** ✍️ Now change it. Numbers only.

**1)** The 3-Ω resistor is replaced by a 12-Ω resistor (the 6-Ω resistor stays). What is the current through the 12-Ω branch, in amperes?

**2)** For that new circuit (6 Ω and 12 Ω in parallel across 12 V), what is the total current from the battery, in amperes?

**3)** What is the equivalent resistance of 6 Ω and 12 Ω in parallel, in ohms?`,
      exercise: {
        boxes: 3,
        correctAnswers: ['1', '3', '4'],
        hint1: 'Each branch still gets the full 12 V.',
        hint2: 'Add the two branch currents: 12 ÷ 6 and 12 ÷ 12.',
        hint3: 'Product over sum: (6 × 12) ÷ (6 + 12), or total voltage ÷ total current.',
        explanation: '(1) 12 ÷ 12 = 1 A. (2) The 6-Ω branch carries 12 ÷ 6 = 2 A, so the total is 2 + 1 = 3 A. (3) 72 ÷ 18 = 4 Ω, which matches 12 V ÷ 3 A.',
      },
    },
    {
      id: 'eic3-mc',
      type: 'multiple-choice' as const,
      content: '**Parallel reasoning.** 🎯',
      exercise: {
        questions: [
          {
            question: 'Four lamps are wired in parallel to a battery. One lamp burns out. What happens to the other three?',
            options: ['They stay lit', 'They go out', 'They all dim to half brightness', 'Only one of them stays lit'],
            correctAnswer: 0,
            explanation: 'Each lamp has its own branch straight to the battery. Losing one branch does not break the others, and their voltage is unchanged, so they stay at the same brightness.',
          },
          {
            question: 'Three 15-Ω resistors are connected in parallel. What is their equivalent resistance?',
            options: ['5 Ω', '45 Ω', '15 Ω', '3 Ω'],
            correctAnswer: 0,
            explanation: 'For identical resistors in parallel, divide one resistance by the number of resistors: 15 ÷ 3 = 5 Ω. 45 Ω would be the series total.',
          },
          {
            question: 'A 4-Ω resistor and a 12-Ω resistor are in parallel. Which value could be their equivalent resistance?',
            options: ['3 Ω', '8 Ω', '16 Ω', '4 Ω'],
            correctAnswer: 0,
            explanation: 'The equivalent must be less than the smallest branch (4 Ω): $\\frac{4 \\times 12}{4 + 12} = \\frac{48}{16} = 3$ Ω. 16 Ω is the series total, and 8 Ω is the average.',
          },
          {
            question: 'A new appliance is plugged into an outlet on a household circuit that is already running other appliances. What happens to the total current in that circuit\'s wiring?',
            options: ['It increases', 'It decreases', 'It stays the same', 'It reverses direction'],
            correctAnswer: 0,
            explanation: 'Household outlets are in parallel. A new branch lowers the total resistance and adds its own current, so the total current in the circuit wiring goes up. That is why too many appliances on one circuit can trip the breaker.',
          },
        ],
      },
    },
    {
      id: 'eic3-dropdown',
      type: 'dropdown-select' as const,
      content: '**Series or parallel?** 🔽 Choose the circuit type each statement describes.',
      exercise: {
        dropdowns: [
          { label: 'The current is the same through every part:', options: ['series', 'parallel'], correctAnswer: 0 },
          { label: 'The voltage is the same across every part:', options: ['parallel', 'series'], correctAnswer: 0 },
          { label: 'Adding a resistor lowers the total resistance:', options: ['parallel', 'series'], correctAnswer: 0 },
          { label: 'One break turns everything off:', options: ['series', 'parallel'], correctAnswer: 0 },
        ],
        correctAnswers: ['series', 'parallel', 'parallel', 'series'],
        hint1: 'Series has one path; parallel has several.',
        hint2: 'In parallel, every branch connects across the source.',
        hint3: 'Each new parallel branch is one more path.',
        explanation: 'Series: same current, resistances add, one break stops everything. Parallel: same voltage, branch currents add, each branch lowers the total resistance.',
      },
    },
    {
      id: 'eic3-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 3

- **Parallel** = several branches, each connected straight across the source
- Voltage is the **same** on every branch; branch currents **add** to the total
- $R_{eq}$ is **smaller than the smallest branch**: identical → $\\frac{R}{n}$; two → product over sum
- The smallest resistance carries the largest current
- One branch out → the others **stay on**; adding a branch **raises** the total current
- House wiring is parallel

> **Up Next:** Part 4 — circuits that mix series and parallel, and what happens when something fails.`,
    },
  ],
}
