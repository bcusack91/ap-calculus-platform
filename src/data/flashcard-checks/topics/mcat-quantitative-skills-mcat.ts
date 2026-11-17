import type { CardCheck } from '@/lib/flashcard-check-core'

/**
 * Card-check questions for the cards of `mcat-quantitative-skills-mcat`: one per card, keyed by the
 * card's exact front text. Each asks the student to use the card's idea in a
 * new situation. Gate: scripts/flashcard-checks/validate.ts.
 */
const r = String.raw

export const checks: Record<string, CardCheck> = {
  [r`How do you multiply numbers in scientific notation?`]: {
    question: r`A sample contains $4\times10^{-3}$ mol of a compound. Using $6\times10^{23}$ molecules per mole, how many molecules are in the sample?`,
    options: [r`$2.4\times10^{20}$`, r`$2.4\times10^{26}$`, r`$1.0\times10^{21}$`, r`$2.4\times10^{21}$`],
    correctAnswer: 3,
    explanation: r`Multiply the coefficients and add the exponents: $4\times6 = 24$ and $-3 + 23 = 20$, giving $24\times10^{20} = 2.4\times10^{21}$. Leaving the answer as $2.4\times10^{20}$ forgets to shift the decimal, $2.4\times10^{26}$ subtracts the exponents, and $1.0\times10^{21}$ adds the coefficients instead of multiplying them.`,
  },
  [r`How do you estimate $pH$ from a non-round concentration?`]: {
    question: r`A solution has $[H^{+}] = 2\times10^{-9}$ M. Using $\log 2 \approx 0.3$, what is its pH?`,
    options: [r`9.3`, r`8.7`, r`9.7`, r`8.3`],
    correctAnswer: 1,
    explanation: r`$pH = -\log(2\times10^{-9}) = 9 - \log 2 \approx 9 - 0.3 = 8.7$. A coefficient above 1 means more $H^{+}$ than $10^{-9}$ M, so the pH must be a little below 9. Adding 0.3 gives 9.3, and 8.3 or 9.7 come from using 0.7 in place of $\log 2$.`,
  },
  [r`How do you approach proportional reasoning questions?`]: {
    question: r`The period of a simple pendulum is proportional to the square root of its length, $T \propto \sqrt{L}$. If the length is made four times as long, the period:`,
    options: [r`doubles`, r`quadruples`, r`halves`, r`grows 16-fold`],
    correctAnswer: 0,
    explanation: r`The relationship is a square-root power, so scaling $L$ by 4 scales $T$ by $\sqrt{4} = 2$. Quadrupling treats the relationship as direct, halving treats it as an inverse square root, and a 16-fold increase squares the factor instead of taking its root.`,
  },
  [r`What are the key log rules for the MCAT?`]: {
    question: r`A buffer has $pK_a = 4.8$ and a ratio $[A^{-}]/[HA] = 8$. Using $pH = pK_a + \log([A^{-}]/[HA])$ and $\log 2 \approx 0.3$, what is the pH?`,
    options: [r`5.1`, r`7.2`, r`5.7`, r`3.9`],
    correctAnswer: 2,
    explanation: r`Since $8 = 2^{3}$, $\log 8 = 3\log 2 \approx 0.9$, so $pH = 4.8 + 0.9 = 5.7$. The value 5.1 uses $\log 2$ without the factor of 3, 7.2 multiplies 8 by 0.3 to get 2.4, and 3.9 subtracts the log term instead of adding it.`,
  },
  [r`How should you handle unit conversions?`]: {
    question: r`An ambulance travels at a steady 72 km/h. How far does it go in 5 s?`,
    options: [r`360 m`, r`100 m`, r`6 m`, r`1,296 m`],
    correctAnswer: 1,
    explanation: r`Convert first: $72\ \frac{km}{h}\times\frac{1000\ m}{1\ km}\times\frac{1\ h}{3600\ s} = 20$ m/s, so in 5 s it covers 100 m. The value 360 m multiplies 72 by 5 with no conversion, 6 m divides 72 by 60 as if converting only minutes, and 1,296 m multiplies by 3.6 instead of dividing.`,
  },
  [r`If $F \propto 1/r^{2}$ and $r$ triples, what happens to $F$?`]: {
    question: r`The intensity of light from a small lamp follows $I \propto 1/r^{2}$. A detector reads 180 units at 2 m from the lamp. What does it read at 6 m?`,
    options: [r`60 units`, r`540 units`, r`1,620 units`, r`20 units`],
    correctAnswer: 3,
    explanation: r`The distance triples, so the intensity falls by $3^{2} = 9$: $180/9 = 20$ units. The value 60 divides by 3, treating the relationship as a simple inverse. The values 540 and 1,620 multiply by 3 and by 9, as if intensity grew with distance.`,
  },
  [r`What common values are worth memorizing for estimation?`]: {
    question: r`A ball is dropped from rest from a height of 10 m. Using $v = \sqrt{2gh}$ with $g \approx 10\ m/s^{2}$, its speed just before landing is closest to:`,
    options: [r`10 m/s`, r`20 m/s`, r`14 m/s`, r`17 m/s`],
    correctAnswer: 2,
    explanation: r`$v = \sqrt{2\times10\times10} = \sqrt{200} = 10\sqrt{2} \approx 10\times1.41 = 14$ m/s. The value 10 m/s leaves out the factor of 2 under the root, 20 m/s doubles 10 instead of multiplying by $\sqrt{2}$, and 17 m/s uses $\sqrt{3} \approx 1.73$ in place of $\sqrt{2}$.`,
  },
  [r`How do you handle calculations without a calculator?`]: {
    question: r`Without a calculator, estimate $\dfrac{(6.1\times10^{-4})(4.9\times10^{6})}{3.1\times10^{-2}}$. The result is closest to:`,
    options: [r`$1\times10^{5}$`, r`$1\times10^{1}$`, r`$1\times10^{3}$`, r`$9\times10^{5}$`],
    correctAnswer: 0,
    explanation: r`Round to $\frac{6\times5}{3} = 10$ and handle the exponents exactly: $-4 + 6 - (-2) = 4$, so the result is about $10\times10^{4} = 1\times10^{5}$. The value $1\times10^{1}$ subtracts 2 instead of subtracting $-2$, $1\times10^{3}$ ignores the denominator's power of ten, and $9\times10^{5}$ multiplies by 3 instead of dividing.`,
  },
}
