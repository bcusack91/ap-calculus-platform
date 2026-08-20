export const lessonData = {
  topicSlug: 'sat-geometry-basics-advanced',
  sections: [
    {
      id: 'geob-adv-p3-intro',
      type: 'text' as const,
      content: `# Geometry Basics: Timed Drill

**Part 3 of 3 — Four Questions at Full Difficulty**

Budget about **90 seconds per question**. These items are long to read and short to solve, so spend your first fifteen seconds reading rather than computing.

Run this checklist on each one:

1. **What solid is it?** Name every piece and every piece that is removed.
2. **What is the final unit?** Grams, dollars, hours, whole bags. Write it in the margin.
3. **Is there a last multiplier?** Density, price, coverage rate. If so, the un-multiplied number is a trap.
4. **Which direction does it round?** Buying rounds up; fitting rounds down.

Keep $\\pi$ symbolic until the final line and decimalize once.`
    },
    {
      id: 'geob-adv-p3-q1',
      type: 'quiz' as const,
      question: 'A right circular cone has a base radius of $6$ cm and a slant height of $10$ cm. It is filled completely with a liquid of density $0.85$ grams per cubic centimeter. To the nearest gram, what is the mass of the liquid?',
      options: [
        '$256$',
        '$302$',
        '$320$',
        '$769$'
      ],
      correctAnswer: 0,
      explanation: 'The slant height is the hypotenuse, so the true height is $\\sqrt{10^{2} - 6^{2}} = 8$. Volume $= \\frac{1}{3}\\pi(6)^{2}(8) = 96\\pi \\approx 301.6$ cm³, and the mass is $301.6 \\times 0.85 \\approx 256$ g. The distractors: $302$ is the volume with the density never applied. $320$ uses the slant height $10$ as the height. $769$ uses the cylinder formula $\\pi r^{2}h$, dropping the factor of $\\frac{1}{3}$ that makes a cone a cone.'
    },
    {
      id: 'geob-adv-p3-q2',
      type: 'quiz' as const,
      question: 'A shipping crate is a rectangular prism with a square base and a height of $8$ inches. The longest straight rod that fits entirely inside the crate measures exactly $17$ inches. What is the volume of the crate, in cubic inches?',
      options: [
        '$112.5$',
        '$900$',
        '$1156$',
        '$1800$'
      ],
      correctAnswer: 1,
      explanation: 'The longest rod is the space diagonal. With base edge $a$: $a^{2} + a^{2} + 8^{2} = 17^{2}$, so $2a^{2} = 225$ and $a^{2} = 112.5$. Volume $= a^{2}h = 112.5 \\times 8 = 900$ cubic inches (you never need $a$ itself). The distractors: $112.5$ is the base AREA, the intermediate value. $1800$ takes the base DIAGONAL $\\sqrt{225} = 15$ to be the base edge. $1156$ drops the height term and sets $2a^{2} = 289$.'
    },
    {
      id: 'geob-adv-p3-q3',
      type: 'quiz' as const,
      question: 'A rectangular reservoir is $20$ m long and $9$ m wide. Its floor slopes uniformly from a depth of $2$ m at one end to $5$ m at the other, so the water body is a prism with a trapezoidal cross-section. Water enters at a constant $350$ liters per minute. ($1$ cubic meter $= 1000$ liters.) How many HOURS does it take to fill the reservoir to the top?',
      options: [
        '$17.1$',
        '$42.9$',
        '$30$',
        '$1800$'
      ],
      correctAnswer: 2,
      explanation: 'The trapezoidal cross-section has area $\\frac{2+5}{2}(20) = 70$ square meters, so the volume is $70 \\times 9 = 630$ cubic meters. The rate is $350$ L/min $= 0.35$ m³/min, so filling takes $630 \\div 0.35 = 1800$ minutes $= 30$ hours. The distractors: $1800$ is that same time left in MINUTES — the unit the question deliberately does not ask for. $42.9$ uses the maximum depth $5$ m everywhere, and $17.1$ uses the minimum depth $2$ m everywhere; a sloping floor is the average of the two.'
    },
    {
      id: 'geob-adv-p3-q4',
      type: 'quiz' as const,
      question: 'A cylindrical planter has an outer radius of $24$ cm and an outer height of $45$ cm. Its wall is $4$ cm thick all around and its solid base is $5$ cm thick. Potting soil is sold in bags holding $20$ liters each. ($1$ liter $= 1000$ cubic centimeters.) What is the least number of whole bags needed to fill the planter’s interior to the top?',
      options: [
        '$2$',
        '$4$',
        '$5$',
        '$3$'
      ],
      correctAnswer: 3,
      explanation: 'The interior is a cylinder of radius $24 - 4 = 20$ cm and depth $45 - 5 = 40$ cm: $\\pi(20)^{2}(40) \\approx 50{,}265$ cm³ $\\approx 50.3$ L. Then $50.3 \\div 20 \\approx 2.5$, and since bags are whole you need $3$. The distractors: $2$ rounds down and leaves the planter partly empty. $4$ uses the OUTER radius $24$ with the interior depth. $5$ uses the outer radius and the outer height, ignoring the wall and base thickness entirely.'
    }
  ]
};
