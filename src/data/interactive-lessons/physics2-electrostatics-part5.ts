export const physics2ElectrostaticsPart5Data = {
  topicSlug: 'electric-charge-coulombs-law',
  sections: [
    {
      id: 'ec5-intro',
      type: 'text' as const,
      content: `
# ⚖️ Charge Conservation & Quantization

**Part 5 of 7**

Conservation of charge isn't just a rule — it's a **law of nature** as fundamental as conservation of energy. In this part you'll practice applying it to real situations and build the quantitative reasoning the AP exam demands.
      `
    },
    {
      id: 'ec5-conservation-deep',
      type: 'text' as const,
      content: `
## Conservation of Charge — Deep Dive

### The Law

> **The total electric charge in an isolated system is always conserved.**

$$\\sum q_{\\text{before}} = \\sum q_{\\text{after}}$$

This works at every scale:
- Rubbing a balloon (electrons transfer, total = 0)
- Nuclear reactions ($\\beta$ decay: neutron → proton + electron + antineutrino — charge conserved)
- Pair production ($\\gamma \\to e^+ + e^-$ — charge conserved: 0 → +1 + (−1))

### Sharing Charge Between Conductors

When two identical conducting spheres touch, they share charge **equally**:

$$q_{\\text{each}} = \\frac{q_1 + q_2}{2}$$

**Example:** Sphere A has +6 μC, Sphere B has −2 μC. After touching:
$$q_{\\text{each}} = \\frac{+6 + (-2)}{2} = \\frac{+4}{2} = +2\\ \\mu\\text{C each}$$

For non-identical spheres, charge distributes based on capacitance (surface area), but the AP exam usually gives identical spheres.
      `
    },
    {
      id: 'ec5-quantization-problems',
      type: 'text' as const,
      content: `
## Quantization Problems

Since $q = ne$, where $e = 1.6 \\times 10^{-19}$ C:

### Finding Number of Electrons

**Problem:** An object has charge $-4.8 \\times 10^{-19}$ C. How many excess electrons?

$$n = \\frac{|q|}{e} = \\frac{4.8 \\times 10^{-19}}{1.6 \\times 10^{-19}} = 3 \\text{ electrons}$$

### Finding Charge from Electron Count

**Problem:** An object gains $10^{12}$ electrons. What is its charge?

$$q = -ne = -(10^{12})(1.6 \\times 10^{-19}) = -1.6 \\times 10^{-7} \\text{ C} = -0.16\\ \\mu\\text{C}$$

### Checking if a Charge is Possible

Any measured charge must satisfy $q/e =$ integer. If not, the measurement has an error.
      `
    },
    {
      id: 'ec5-charge-sharing-drill',
      type: 'input-boxes' as const,
      content: `
**Charge Sharing Drill**

Two identical metal spheres: A has $+8\\ \\mu\\text{C}$ and B has $-4\\ \\mu\\text{C}$.

They touch and then separate. Enter:

1) Total charge of the system (in μC)
2) Charge on each sphere after separation (in μC)
3) If sphere A then touches a third neutral identical sphere C, what is A's final charge? (in μC)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['4', '2', '1'],
        hint1: 'Total charge = +8 + (−4) = +4 μC. Conserved!',
        hint2: 'Equal sharing: +4/2 = +2 μC each.',
        hint3: 'A (+2 μC) touches C (0 μC): total = +2 μC, shared equally → +1 μC each.',
        explanation: 'Conservation applies at each step. Total charge is always preserved — it just redistributes when conductors touch.'
      }
    },
    {
      id: 'ec5-quantization-drill',
      type: 'input-boxes' as const,
      content: `
**Quantization Drill**

Use $e = 1.6 \\times 10^{-19}$ C.

1) An object has charge $-8.0 \\times 10^{-19}$ C. How many excess electrons? (integer)
2) An object gains $5 \\times 10^{6}$ electrons. What is its charge in C? (use scientific notation like \`-8e-13\`)
3) Is a charge of $2.0 \\times 10^{-19}$ C possible? (\`yes\` or \`no\`)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['5', '-8e-13', 'no'],
        hint1: 'n = |q|/e = 8.0 × 10⁻¹⁹ / 1.6 × 10⁻¹⁹ = 5.',
        hint2: 'q = −ne = −(5 × 10⁶)(1.6 × 10⁻¹⁹) = −8.0 × 10⁻¹³ C.',
        hint3: '2.0 × 10⁻¹⁹ / 1.6 × 10⁻¹⁹ = 1.25 — not an integer!',
        explanation: 'Quantization means only integer multiples of e are allowed. Any non-integer result means the charge is physically impossible.'
      }
    },
    {
      id: 'ec5-quiz',
      type: 'multiple-choice' as const,
      content: `
**Conservation & Quantization Quiz**
      `,
      exercise: {
        questions: [
          {
            question: 'Two identical spheres with charges +10 μC and −6 μC are touched together. What charge does each have after separation?',
            options: ['+2 μC', '+4 μC', '+8 μC', '+16 μC'],
            correctAnswer: 0,
            explanation: 'Total charge = +10 + (−6) = +4 μC. Shared equally: +4/2 = +2 μC each.'
          },
          {
            question: 'In beta decay, a neutron (charge 0) becomes a proton (charge +e) plus an electron (charge −e). Is charge conserved?',
            options: [
              'No — charge appeared from nowhere',
              'Yes — 0 = (+e) + (−e) = 0',
              'Only if energy is also conserved',
              'Conservation doesn\'t apply to nuclear reactions'
            ],
            correctAnswer: 1,
            explanation: 'Total before: 0. Total after: +e + (−e) = 0. Charge is perfectly conserved in every nuclear reaction.'
          },
          {
            question: 'An object has exactly 3 excess electrons. Its charge is:',
            options: [
              '$+4.8 \\times 10^{-19}$ C',
              '$-4.8 \\times 10^{-19}$ C',
              '$-3.0 \\times 10^{-19}$ C',
              '$+3.0 \\times 10^{-19}$ C'
            ],
            correctAnswer: 1,
            explanation: 'q = −ne = −(3)(1.6 × 10⁻¹⁹) = −4.8 × 10⁻¹⁹ C. Negative because excess electrons.'
          },
          {
            question: 'A physicist claims to measure a charge of $2.5e$. Is this possible?',
            options: [
              'Yes — any charge value exists in nature',
              'No — free charges must be integer multiples of e',
              'Only for quarks',
              'Only in extreme temperatures'
            ],
            correctAnswer: 1,
            explanation: 'Free, observable charges are always integer multiples of e. Quarks have fractional charges (⅓e, ⅔e) but they are always confined inside particles — you can never isolate a fractional charge.'
          }
        ]
      }
    },
    {
      id: 'ec5-transfer',
      type: 'multiple-choice' as const,
      content: `
**Real-World Check** — Applying conservation to a circuit scenario.
      `,
      exercise: {
        questions: [
          {
            question: 'A Van de Graaff generator transfers 5 μC to a metal sphere each second. After 10 seconds, the sphere has +50 μC. Where did the charge come from?',
            options: [
              'The generator created new charge',
              'The charge was transferred from the belt/source — the source lost 50 μC',
              'The sphere attracted charge from the air',
              'Friction between air molecules created the charge'
            ],
            correctAnswer: 1,
            explanation: 'Conservation of charge: the generator didn\'t create charge — it separated and transferred it. The source (belt mechanism) lost exactly the charge the sphere gained. Total system charge: unchanged.'
          }
        ]
      }
    }
  ]
}
