export const asvabEiCircuitsPart6Data = {
  topicSlug: 'asvab-ei-circuits',
  sections: [
    {
      id: 'eic6-intro',
      type: 'text' as const,
      content: `# 🔌 Series and Parallel Circuits and Power

**Part 6 of 7 — Circuit Test Strategy and Common Traps**

### Timing

On the CAT-ASVAB, EI is **15 questions in 10 minutes**: about **40 seconds** each. A circuit diagram with numbers usually takes longer than a vocabulary item, so move quickly through recall questions and give diagrams up to about a minute. On the paper test, EI is 20 questions in 9 minutes, so speed matters even more.

You cannot go back on the CAT, and you must answer to move on, so finish each question before you click. Some questions may be unscored tryouts you cannot identify: treat every one as scored. If time is running out, keep working real answers; a string of rushed wrong answers at the end is penalized heavily.

### A 20-second first look at any diagram

1. **Series or parallel?** Trace the path from the + terminal. One path = series. A junction where the wire splits = parallel branches.
2. **What does the question ask for?** Total resistance, current, a voltage drop, power, or "which bulbs stay lit"?
3. **Can you reason instead of calculate?** Many questions ask only whether something goes **up, down or stays the same**.

### Fast facts to apply without a formula

| Question | Fast answer |
|:---|:---|
| Two identical resistors in parallel | half of one |
| $n$ identical in parallel | one ÷ $n$ |
| Any parallel group | less than the smallest branch |
| Identical parts in series | each gets an equal share of the voltage |
| A part in series with everything | carries the total current |`,
    },
    {
      id: 'eic6-traps',
      type: 'text' as const,
      content: `## The Traps

| Trap | Wrong idea | Right idea |
|:---|:---|:---|
| Adding parallel resistors | 6 Ω ∥ 3 Ω = 9 Ω | parallel total is **smaller**: 2 Ω |
| Current "used up" | the last resistor in series gets less current | series current is the **same everywhere** |
| Voltage in series | each series part gets the full voltage | the drops **add up** to the source |
| Voltage in parallel | branches split the voltage | each branch gets the **full** voltage; the **current** splits |
| Dead bulb, wrong circuit | a dead bulb in parallel turns the others off | only **series** parts go off with the break |
| Shorts | a short stops current | a short **increases** current |
| Power units | kW and kWh are the same | kW = rate; kWh = total energy |
| Squared current | double the current → double the heat | **four** times the heat ($I^2R$) |
| Bulb brightness in series | the higher-watt bulb is always brighter | in **series**, the higher-**resistance** bulb is brighter |

### Elimination tricks

- **Parallel total resistance:** cross out every choice equal to or larger than the smallest branch.
- **Series current:** cross out choices that give different currents in different resistors.
- **Units:** an answer in watts can't be a current; an answer in kWh can't be a power rating.`,
    },
    {
      id: 'eic6-mc',
      type: 'multiple-choice' as const,
      content: '**Spot the trap.** 🎯',
      exercise: {
        questions: [
          {
            question: 'An 8-Ω resistor and an 8-Ω resistor are connected in parallel. What is the equivalent resistance?',
            options: ['4 Ω', '16 Ω', '8 Ω', '64 Ω'],
            correctAnswer: 0,
            explanation: 'Two identical resistors in parallel give half of one: 8 ÷ 2 = 4 Ω. 16 Ω is the series total, and the parallel answer must be less than 8 Ω.',
          },
          {
            question: 'Two resistors are connected in parallel across a 9-V battery. What is the voltage across each resistor?',
            options: ['9 V across each', '4.5 V across each', 'It depends on which resistor is larger', '18 V each'],
            correctAnswer: 0,
            explanation: 'Every parallel branch connects directly across the battery, so each gets the full 9 V. The current, not the voltage, splits between branches.',
          },
          {
            question: 'What is the equivalent resistance of a 10-Ω resistor in parallel with a 40-Ω resistor?',
            options: ['8 Ω', '50 Ω', '25 Ω', '4 Ω'],
            correctAnswer: 0,
            explanation: 'Product over sum: 400 ÷ 50 = 8 Ω, which is less than the smallest branch, as it must be. 50 Ω is the series total, 25 Ω is the average, and 4 Ω divides 40 by 10.',
          },
          {
            question: 'A circuit\'s current is tripled while the resistance stays the same. The heat produced in the resistance becomes:',
            options: ['9 times as large', '3 times as large', '6 times as large', 'one third as large'],
            correctAnswer: 0,
            explanation: '$P = I^2R$: tripling I multiplies $I^2$ by 9.',
          },
          {
            question: 'A 25-W bulb and a 100-W bulb (both rated for 120 V) are connected in series across 120 V. Which glows brighter?',
            options: ['The 25-W bulb', 'The 100-W bulb', 'They glow equally', 'Neither'],
            correctAnswer: 0,
            explanation: 'In series both carry the same current, so the bulb with the larger resistance uses more power ($P = I^2R$). The 25-W bulb has the larger resistance (four times as much), so it glows brighter.',
          },
        ],
      },
    },
    {
      id: 'eic6-dropdown',
      type: 'dropdown-select' as const,
      content: '**Up, down or the same?** 🔽',
      exercise: {
        dropdowns: [
          { label: 'A series circuit gets one more resistor. The current from the battery:', options: ['goes down', 'goes up', 'stays the same'], correctAnswer: 0 },
          { label: 'A parallel circuit gets one more branch. The total current from the battery:', options: ['goes up', 'goes down', 'stays the same'], correctAnswer: 0 },
          { label: 'A parallel circuit gets one more branch. The current in each existing branch:', options: ['stays the same', 'goes up', 'goes down'], correctAnswer: 0 },
        ],
        correctAnswers: ['goes down', 'goes up', 'stays the same'],
        hint1: 'Series: more resistors, more total resistance.',
        hint2: 'Parallel: each new branch is another path and adds its own current.',
        hint3: 'Each existing branch still has the full battery voltage and its own resistance.',
        explanation: 'Series resistances add, so current falls. A new parallel branch lowers the total resistance and adds its own current, so the total rises, while each old branch keeps the same voltage and therefore the same current.',
      },
    },
    {
      id: 'eic6-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 6

- About **40 s** per EI question on the CAT; give diagrams up to a minute by moving fast on recall items
- First look: series or parallel → what is asked → can you reason instead of calculate?
- Parallel totals are **smaller than the smallest branch**; series current is the **same everywhere**
- Shorts **raise** current; kWh is energy, kW is power; double current → **4×** heat

> **Up Next:** Part 7 — a mixed mastery set.`,
    },
  ],
}
