export const lessonData = {
  topicSlug: 'sat-geometry-basics-advanced',
  sections: [
    {
      id: 'geob-adv-p2-traps',
      type: 'text' as const,
      content: `# Geometry Basics: Traps & Speed

**Part 2 of 3 — Distractor Autopsy and Efficient Setups**

The arithmetic in a hard solid-geometry item is never the hard part. The four answer choices are a menu of "places a reasonable person stops," and knowing the menu lets you eliminate before you compute.

### The Six Distractor Species

**1. The un-multiplied quantity.** The volume when mass was asked. The area when cost was asked. The perimeter in meters when dollars were asked. If the problem ends in "per cubic meter," "per gram," or "per square meter," the number just before that multiplication is a choice.

**2. The wrong piece.** Cube minus sphere: the sphere's mass is offered. Cone filled to $\\frac{3}{4}$ height: the water is offered when the empty space was asked. Silo: the cylinder alone is offered. Read the final noun.

**3. Diameter used as radius.** A tank "with base diameter $4$ feet" is $r = 2$. Because volume depends on $r^{2}$, this error multiplies the answer by $4$ — and both the wrong volume and the wrong time built from it appear as choices.

**4. Slant height used as height.** A cone with base radius $5$ and slant height $13$ has $h = \\sqrt{13^{2} - 5^{2}} = 12$. Using $13$ directly is a choice; forgetting the $\\frac{1}{3}$ is another.

**5. The unit conversion left undone.** Minutes offered when hours were asked. Cubic inches divided by $144$ instead of $1728$. A length of "$6$ feet" used as $6$ inches inside an inch-based cross-section. Liters not converted to cubic meters.

**6. The wrong rounding direction.** "Paint is sold only in whole liters." "Soil comes in bags." "How many whole panels fit." $17.3$ liters means you buy $18$; the choice built on $17$ leaves part of the tank bare. Purchases always round UP; things that must fit inside always round DOWN.

### Speed Setups

**Set up percent-change problems as pure factors.** Do not pick $r = 100$ and grind. Write $(1.25)^{2}(0.64)$ and evaluate. Ten seconds, no arithmetic slips, and the structure is visible.

**For scaling problems, ask "is this quantity a length, an area, or a volume?" for each cost line separately.** Paint, leaf, fabric, coating $\\rightarrow$ $k^{2}$. Metal, concrete, water, weight $\\rightarrow$ $k^{3}$. Fencing, trim, edging $\\rightarrow$ $k$.

**Keep $\\pi$ symbolic until the last line.** $2\\pi r^{2} + 2\\pi rh = 18\\pi + 48\\pi = 66\\pi$ is exact and error-free; decimalize once, at the end.

**In composite-surface problems, sketch a two-column tally**: faces counted, faces excluded. Table contact and hidden joints go in the second column, and the totals from the wrong tallies are the distractors.

**Write the requested unit in the margin before you start** — grams, dollars, hours, whole bags. Then the last line of your work has to carry that unit.`
    },
    {
      id: 'geob-adv-p2-q1',
      type: 'quiz' as const,
      question: 'A concrete step is a prism $4$ feet long whose cross-section is a trapezoid with parallel sides of $10$ inches and $6$ inches and a height of $8$ inches. Concrete weighs $150$ pounds per cubic foot. To the nearest pound, what does the step weigh?',
      options: [
        '$22$',
        '$267$',
        '$533$',
        '$3200$'
      ],
      correctAnswer: 1,
      explanation: 'Cross-section area $= \\frac{10+6}{2}(8) = 64$ square inches. The length is $4$ ft $= 48$ in, so the volume is $64 \\times 48 = 3072$ cubic inches. Since $1$ cubic foot $= 1728$ cubic inches, that is $1.778$ ft³, weighing $1.778 \\times 150 \\approx 267$ lb. The distractors: $533$ omits the $\\frac{1}{2}$ in the trapezoid formula, doubling the volume. $3200$ divides by $144$ instead of $1728$ — squaring the conversion factor instead of cubing it. $22$ treats the $4$-foot length as $4$ inches, never converting it to match the inch-based cross-section.'
    },
    {
      id: 'geob-adv-p2-q2',
      type: 'quiz' as const,
      question: 'A closed cylindrical tank with radius $4$ m and height $10$ m is to be painted on its entire outer surface, including the top and bottom. One can of paint covers $15$ square meters, cans are sold only whole, and each can costs $22$ dollars. What is the least amount, in dollars, the paint can cost?',
      options: [
        '$374$',
        '$462$',
        '$506$',
        '$528$'
      ],
      correctAnswer: 3,
      explanation: 'Surface area $= 2\\pi r^{2} + 2\\pi rh = 32\\pi + 80\\pi = 112\\pi \\approx 351.9$ square meters. Then $351.9 \\div 15 \\approx 23.5$ cans, and since cans are whole you must buy $24$, costing $24 \\times 22 = 528$ dollars. The distractors: $506$ rounds $23.5$ DOWN to $23$ cans, which would leave part of the tank unpainted — purchases always round up. $374$ paints only the lateral surface ($80\\pi$). $462$ includes just one circular end ($96\\pi$).'
    },
    {
      id: 'geob-adv-p2-q3',
      type: 'quiz' as const,
      question: 'A scale model of a bronze sculpture is built at a linear scale of $1:3$. The model uses $2$ kg of bronze, and lacquering the model’s entire surface takes $45$ mL of lacquer. Assuming the full-size sculpture is solid bronze and lacquered the same way, how much bronze and how much lacquer does it require?',
      options: [
        '$6$ kg of bronze and $135$ mL of lacquer',
        '$18$ kg of bronze and $405$ mL of lacquer',
        '$54$ kg of bronze and $405$ mL of lacquer',
        '$54$ kg of bronze and $1215$ mL of lacquer'
      ],
      correctAnswer: 2,
      explanation: 'Bronze is a VOLUME, so it scales by $3^{3} = 27$: $2 \\times 27 = 54$ kg. Lacquer covers a SURFACE, so it scales by $3^{2} = 9$: $45 \\times 9 = 405$ mL. The distractors each use one exponent in the wrong place: "$6$ and $135$" applies the linear factor $3$ to both quantities, "$18$ and $405$" uses the area factor $9$ for the bronze, and "$54$ and $1215$" uses the volume factor $27$ for the lacquer. Two different exponents in one problem is the whole point of this archetype.'
    }
  ]
};
