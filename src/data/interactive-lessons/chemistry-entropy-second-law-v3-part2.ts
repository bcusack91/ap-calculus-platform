export const chemEntropySecondLawV3Part2Data = {
  topicSlug: 'entropy-second-law',
  sections: [
    { id: 'en2v3-intro', type: 'text' as const, content: `
# 🧪 Microstates Deep Dive

**Part 2 of 7 — Quantitative Microstate Analysis**

Let's build quantitative intuition about microstates through calculations and comparisons.
    ` },
    { id: 'en2v3-positional', type: 'text' as const, content: `
## Positional vs Energy Microstates

| Type | What's Being Distributed | Formula |
|------|------------------------|---------|
| **Positional** | Molecule locations | $W_{\\text{pos}} = V^N$ (proportional) |
| **Energy** | Energy quanta among molecules | Depends on quantum states |

### Key Relationship

**Total microstates** = positional × energy × rotational × vibrational...

For qualitative predictions, **positional** microstates (especially gas vs condensed) usually dominate.

### Temperature's Role

Higher $T$ → more energy quanta → more ways to distribute them → more microstates → higher $S$.

This is why $S$ always increases with temperature — there are no exceptions.
    ` },
    { id: 'en2v3-practice', type: 'input-boxes' as const, content: `
**Microstate Problems** 🧮

**1)** 8 molecules can each be in the left or right half of a container. Total microstates = $2^8$ = ?

**2)** Of those, exactly 1 has all molecules on the left. What is the probability of this? Express as 1/[your answer].

**3)** The number of microstates with exactly 4 on each side is $\\binom{8}{4} = 70$. What percentage of total microstates is this? Round to nearest whole number.
    `, exercise: { boxes: 3, correctAnswers: ['256', '256', '27'],
        hint1: '$2^8 = 256$',
        hint2: 'Probability = 1/total microstates for the specific configuration.',
        hint3: '$70/256 \\times 100$',
        explanation: '1) $2^8 = 256$. 2) P = 1/256. 3) $70/256 = 0.273 = 27\\%$. The evenly-split state is the most probable single distribution.' } },
    { id: 'en2v3-quiz', type: 'multiple-choice' as const, content: `
**Concept Questions** 🎯
    `, exercise: { questions: [
          { question: 'Why does a gas at 500 K have higher entropy than the same gas at 300 K?', options: ['More molecules at higher T', 'More energy quanta available = more ways to distribute energy', 'The gas expands at higher T', 'Chemical bonds vibrate faster'], correctAnswer: 1, explanation: 'Higher T means more energy quanta. More quanta = more possible distributions = more microstates = higher entropy.' },
          { question: 'For 100 molecules, the probability of all being in one half of a box is approximately:', options: ['$10^{-3}$', '$10^{-10}$', '$10^{-30}$', '$10^{-100}$'], correctAnswer: 2, explanation: '$P = 1/2^{100} \\approx 10^{-30}$. Already essentially impossible with just 100 molecules!' }
        ] } },
    { id: 'en2v3-dropdown', type: 'dropdown-select' as const, content: `
**Complete** 🔽
    `, exercise: { dropdowns: [
          { label: 'Doubling the volume available to a gas will', options: ['halve the microstates', 'greatly increase the microstates', 'not change the microstates', 'decrease entropy'] },
          { label: 'The most probable distribution of molecules is', options: ['all on one side', 'evenly spread out', 'clustered in corners', 'constantly changing'] },
          { label: 'Energy microstates increase with', options: ['pressure', 'temperature', 'concentration', 'molecular mass only'] }
        ], correctAnswers: ['greatly increase the microstates', 'evenly spread out', 'temperature'],
        hint1: 'More volume = more positions available.',
        hint2: 'The evenly-spread state has the most microstates.',
        hint3: 'Higher T = more energy quanta to distribute.',
        explanation: 'Doubling volume exponentially increases positional microstates. The even distribution has the most microstates (most probable). Temperature controls the number of energy quanta.' } },
    { id: 'en2v3-exit', type: 'multiple-choice' as const, content: `
**Exit Check** ✅
    `, exercise: { questions: [
          { question: "Which factor has the LARGEST effect on a substance's entropy?", options: ['Color of the substance', 'Phase (solid vs liquid vs gas)', 'Shape of the container', 'Atmospheric pressure'], correctAnswer: 1, explanation: 'Phase has the largest effect: gas molecules have vastly more positional microstates than liquid or solid.' }
        ] } }
  ]
}
