export const batchCards: { slug: string; cards: { front: string; back: string; hint?: string }[] }[] = [
  {
    slug: "types-data-sampling",
    cards: [
      {
        front: "What is the difference between a population and a sample?",
        back: "A population is the entire group of individuals you want information about; a sample is the subset of the population you actually collect data from to draw conclusions about the population.",
        hint: "Whole group vs. the part you measure",
      },
      {
        front: "What is the difference between a parameter and a statistic?",
        back: "A parameter is a numerical summary of a population (usually unknown), while a statistic is a numerical summary computed from a sample and used to estimate the parameter.",
        hint: "P for Parameter/Population, S for Statistic/Sample",
      },
      {
        front: "What distinguishes categorical (qualitative) from quantitative data?",
        back: "Categorical data place individuals into groups or categories (e.g., eye color, yes/no), while quantitative data are numerical measurements you can do arithmetic on (e.g., height, age).",
        hint: "Labels vs. meaningful numbers",
      },
      {
        front: "What is the difference between discrete and continuous quantitative data?",
        back: "Discrete data take countable, separate values (often integers, like number of siblings), while continuous data can take any value in an interval (like weight or time).",
      },
      {
        front: "Define a simple random sample (SRS).",
        back: "An SRS of size n is chosen so that every possible group of n individuals from the population has an equal chance of being selected. This also gives each individual an equal chance.",
        hint: "Every group of size n equally likely",
      },
      {
        front: "Describe stratified random sampling and when to use it.",
        back: "Divide the population into homogeneous groups called strata (e.g., grade levels), then take an SRS within each stratum. Use it when strata differ and you want to reduce variability by ensuring each is represented.",
        hint: "Split into similar groups, then SRS each",
      },
      {
        front: "Describe cluster sampling and how it differs from stratified sampling.",
        back: "Divide the population into clusters (often by location), randomly select whole clusters, and sample everyone in the chosen clusters. Unlike strata, clusters are meant to each resemble the whole population; you sample some clusters fully rather than all groups partially.",
        hint: "Pick whole groups (often for convenience)",
      },
      {
        front: "What is systematic random sampling?",
        back: "Choose a random starting point, then select every kth individual from an ordered list (e.g., every 10th person). It is easy to implement but can fail if the list has a hidden periodic pattern.",
        hint: "Every kth individual after a random start",
      },
      {
        front: "What is a convenience sample and why is it risky?",
        back: "A convenience sample selects individuals who are easiest to reach. It is highly prone to bias because the easy-to-reach group may not represent the population.",
        hint: "Whoever is handy = likely biased",
      },
      {
        front: "What is a voluntary response sample, and what bias does it create?",
        back: "A voluntary response sample consists of people who choose to respond (e.g., call-in polls, online reviews). It produces voluntary response bias because people with strong opinions are overrepresented.",
        hint: "Self-selected responders",
      },
      {
        front: "Define undercoverage and give an example.",
        back: "Undercoverage occurs when some groups of the population are left out of or underrepresented in the sampling process, such as a telephone survey missing households without phones.",
        hint: "Whole groups have little/no chance of selection",
      },
      {
        front: "What is nonresponse bias?",
        back: "Nonresponse bias arises when selected individuals cannot be contacted or refuse to participate, and those who don't respond differ systematically from those who do.",
        hint: "Chosen but didn't answer",
      },
      {
        front: "What is response bias, including wording effects?",
        back: "Response bias occurs when respondents give inaccurate answers due to the survey itself, such as leading or confusingly worded questions, sensitive topics, or interviewer influence.",
        hint: "The way you ask changes the answer",
      },
      {
        front: "Why does increasing sample size NOT fix bias?",
        back: "A larger sample reduces variability (sampling variability) but does not remove systematic bias. A biased method just gives a more precise estimate of the wrong value.",
        hint: "Bias is about the method, not the size",
      },
    ],
  },
  {
    slug: "circle-theorems-arcs-geo",
    cards: [
      {
        front: "What is the relationship between a central angle and its intercepted arc?",
        back: "A central angle has its vertex at the center of the circle, and its measure equals the measure of the arc it intercepts. So a $90^\\\\circ$ central angle cuts off a $90^\\\\circ$ arc.",
        hint: "Central angle = intercepted arc",
      },
      {
        front: "What is the Inscribed Angle Theorem?",
        back: "An inscribed angle (vertex on the circle) equals half the measure of its intercepted arc: $\\\\text{inscribed angle} = \\\\tfrac{1}{2}(\\\\text{arc})$.",
        hint: "Inscribed = half the arc",
      },
      {
        front: "What can you conclude about an inscribed angle that intercepts a semicircle (a diameter)?",
        back: "It is a right angle ($90^\\\\circ$), because the intercepted arc is $180^\\\\circ$ and half of $180^\\\\circ$ is $90^\\\\circ$. This is Thales' Theorem.",
        hint: "Angle in a semicircle is 90 degrees",
      },
      {
        front: "How do inscribed angles that intercept the same arc compare?",
        back: "They are congruent. Any number of inscribed angles intercepting the same arc all equal half of that arc's measure.",
        hint: "Same arc, same inscribed angle",
      },
      {
        front: "What is true about opposite angles of a cyclic (inscribed) quadrilateral?",
        back: "Opposite angles of a quadrilateral inscribed in a circle are supplementary; they sum to $180^\\\\circ$.",
        hint: "Inscribed quadrilateral: opposite angles add to 180",
      },
      {
        front: "What is the relationship between a tangent line and the radius at the point of tangency?",
        back: "A tangent to a circle is perpendicular to the radius drawn to the point of tangency, forming a $90^\\\\circ$ angle.",
        hint: "Tangent meets radius at a right angle",
      },
      {
        front: "What is the Two Tangents Theorem?",
        back: "Two tangent segments drawn from the same external point to a circle are congruent (equal in length).",
        hint: "Tangents from one external point are equal",
      },
      {
        front: "What is the measure of an angle formed by two chords intersecting inside a circle?",
        back: "It equals half the SUM of the two intercepted arcs: $\\\\text{angle} = \\\\tfrac{1}{2}(\\\\text{arc}_1 + \\\\text{arc}_2)$, where the arcs are the one the angle opens to and its vertical-angle arc.",
        hint: "Inside: half the SUM of arcs",
      },
      {
        front: "What is the measure of an angle formed by two secants (or tangent/secant) meeting OUTSIDE a circle?",
        back: "It equals half the DIFFERENCE of the intercepted arcs: $\\\\text{angle} = \\\\tfrac{1}{2}(\\\\text{far arc} - \\\\text{near arc})$.",
        hint: "Outside: half the DIFFERENCE of arcs",
      },
      {
        front: "State the formula for arc length.",
        back: "Arc length $= \\\\dfrac{\\\\theta}{360^\\\\circ}\\\\cdot 2\\\\pi r$, where $\\\\theta$ is the central angle in degrees and $r$ is the radius. It is the fraction of the circumference cut off by the arc.",
        hint: "Fraction of the full circumference",
      },
      {
        front: "State the formula for the area of a sector.",
        back: "Sector area $= \\\\dfrac{\\\\theta}{360^\\\\circ}\\\\cdot \\\\pi r^2$, where $\\\\theta$ is the central angle in degrees and $r$ is the radius. It is the fraction of the circle's area swept by the angle.",
        hint: "Fraction of the full circle area",
      },
      {
        front: "What is the Chord-Chord (intersecting chords) power relationship?",
        back: "When two chords intersect inside a circle, the products of their segment lengths are equal: $a\\\\cdot b = c\\\\cdot d$, where a, b and c, d are the pieces of each chord.",
        hint: "part times part = part times part",
      },
      {
        front: "Worked example: A central angle of $80^\\\\circ$ in a circle of radius 9 cuts off an arc. Find the arc length.",
        back: "Arc length $= \\\\dfrac{80}{360}\\\\cdot 2\\\\pi(9) = \\\\dfrac{2}{9}\\\\cdot 18\\\\pi = 4\\\\pi \\\\approx 12.57$ units.",
        hint: "Plug into theta/360 times 2*pi*r",
      },
      {
        front: "Common trap: an inscribed angle measures $40^\\\\circ$. What is the intercepted arc?",
        back: "The arc is $80^\\\\circ$. The inscribed angle is HALF the arc, so the arc is DOUBLE the angle. Students often forget to double.",
        hint: "Reverse the inscribed angle rule",
      },
    ],
  },
  {
    slug: "thinking-problem-solving",
    cards: [
      {
        front: "What is a concept in cognitive psychology?",
        back: "A mental grouping of similar objects, events, ideas, or people that helps us organize and simplify thinking (e.g., the concept 'chair').",
        hint: "Mental category",
      },
      {
        front: "What is a prototype?",
        back: "A mental image or best example of a category. We judge new items by how well they match the prototype (e.g., a robin is a prototypical bird; a penguin is not).",
        hint: "Best/typical example",
      },
      {
        front: "What is an algorithm in problem solving?",
        back: "A step-by-step procedure that guarantees a correct solution if followed properly, though it can be slow (e.g., trying every combination of a lock).",
        hint: "Guaranteed but slow methodical method",
      },
      {
        front: "What is a heuristic, and how does it differ from an algorithm?",
        back: "A heuristic is a mental shortcut or rule of thumb that lets us make judgments quickly. Unlike an algorithm, it is faster but does not guarantee a correct answer and can lead to errors.",
        hint: "Fast shortcut, not guaranteed",
      },
      {
        front: "What is the representativeness heuristic?",
        back: "Judging the likelihood of something by how well it matches a prototype or stereotype, often ignoring base rates (actual statistical probabilities).",
        hint: "It 'looks like' the category, so we assume it is",
      },
      {
        front: "What is the availability heuristic?",
        back: "Estimating the likelihood of events based on how easily examples come to mind. Vivid or recent events seem more common (e.g., fearing plane crashes after news coverage).",
        hint: "Easier to recall = seems more likely",
      },
      {
        front: "What is insight in problem solving?",
        back: "A sudden, often novel realization of a problem's solution, contrasting with strategy-based solutions. It is the 'Aha!' moment.",
        hint: "Sudden 'Aha!' moment",
      },
      {
        front: "What is confirmation bias?",
        back: "The tendency to search for, interpret, and favor information that confirms our existing beliefs while ignoring contradictory evidence.",
        hint: "Seeking only support for what you already think",
      },
      {
        front: "What is fixation, and what is one common form called mental set?",
        back: "Fixation is the inability to see a problem from a new perspective. A mental set is the tendency to approach a problem using a strategy that worked before, even when it no longer fits.",
        hint: "Stuck in an old approach",
      },
      {
        front: "What is functional fixedness?",
        back: "A type of fixation in which we can only think of objects in terms of their usual function, blocking creative solutions (e.g., not seeing a coin as a screwdriver).",
        hint: "Only seeing an object's normal use",
      },
      {
        front: "What is the framing effect?",
        back: "The way an issue is worded ('framed') influences decisions and judgments. For example, '90% survival' sounds better than '10% mortality' though they are identical.",
        hint: "Wording changes the choice",
      },
      {
        front: "What is overconfidence?",
        back: "The tendency to overestimate the accuracy of our knowledge and judgments, being more certain than correct.",
        hint: "More sure than right",
      },
      {
        front: "What is belief perseverance?",
        back: "Clinging to one's initial beliefs even after the evidence supporting them has been discredited or contradicted.",
        hint: "Holding a belief despite disproof",
      },
      {
        front: "How do the representativeness and availability heuristics differ?",
        back: "Representativeness judges probability by similarity to a prototype, while availability judges probability by how easily examples are recalled. One uses resemblance; the other uses memory access.",
        hint: "Looks-like vs. comes-to-mind",
      },
    ],
  },
  {
    slug: "apes-agriculture-land",
    cards: [
      {
        front: "What is the difference between industrial and subsistence agriculture?",
        back: "Industrial (commercial) agriculture uses large-scale, mechanized, high-input methods to maximize yield for sale, while subsistence agriculture produces just enough food to support a farmer's family with low external inputs.",
        hint: "Large-scale for market vs. enough for family",
      },
      {
        front: "What was the Green Revolution?",
        back: "A mid-20th-century shift to high-yield crop varieties, synthetic fertilizers, pesticides, irrigation, and mechanization that dramatically increased food production but raised water, energy, and chemical inputs.",
        hint: "High-yield crops + heavy inputs",
      },
      {
        front: "What is monocropping (monoculture) and one major drawback?",
        back: "Growing a single crop over a large area. It improves efficiency and harvesting but reduces biodiversity, depletes specific soil nutrients, and makes crops highly vulnerable to pests and disease.",
        hint: "One crop, big pest/disease risk",
      },
      {
        front: "Define the soil horizons O, A, B, and C.",
        back: "O is the surface organic layer (litter); A is topsoil rich in organic matter (humus); B is the subsoil where leached minerals accumulate; C is weathered parent rock material above bedrock.",
        hint: "O-A-B-C from top down",
      },
      {
        front: "What is salinization and what causes it?",
        back: "Salinization is the buildup of salts in soil, often from irrigation water evaporating and leaving salts behind. High salinity harms plants and reduces crop productivity.",
        hint: "Salt buildup from irrigation",
      },
      {
        front: "What is waterlogging in agriculture?",
        back: "Over-irrigation that saturates soil and raises the water table, depriving plant roots of oxygen and reducing productivity.",
        hint: "Too much water drowns roots",
      },
      {
        front: "What is desertification?",
        back: "The degradation of once-fertile land into desert-like conditions, often from overgrazing, deforestation, drought, and poor irrigation, reducing the land's productivity.",
        hint: "Land turning into desert",
      },
      {
        front: "Contrast furrow, spray (sprinkler), and drip irrigation by efficiency.",
        back: "Furrow (flood) irrigation is cheap but wastes the most water (about 60% efficient); spray/sprinkler is moderate (about 75%); drip irrigation is the most efficient (over 90%) by delivering water directly to roots.",
        hint: "Furrow < spray < drip in efficiency",
      },
      {
        front: "What is the difference between a fertilizer and a pesticide?",
        back: "A fertilizer adds nutrients (like nitrogen, phosphorus, potassium) to promote plant growth, while a pesticide is a chemical that kills or controls pests such as insects (insecticides), weeds (herbicides), or fungi.",
        hint: "Feeds plants vs. kills pests",
      },
      {
        front: "What is the pesticide treadmill (and pesticide resistance)?",
        back: "Repeated pesticide use selects for resistant pests through natural selection, so farmers must apply more or stronger pesticides, creating a costly cycle of escalating use.",
        hint: "Resistance forces ever-more pesticide",
      },
      {
        front: "Name three sustainable/regenerative agriculture practices and their benefits.",
        back: "Crop rotation (restores soil nutrients, breaks pest cycles), contour plowing/terracing (reduces erosion on slopes), and no-till farming (preserves soil structure and moisture and reduces erosion).",
        hint: "Rotation, contour/terracing, no-till",
      },
      {
        front: "What is concentrated animal feeding operation (CAFO) and one environmental concern?",
        back: "A CAFO is a feedlot where large numbers of animals are raised in confinement. Concerns include large volumes of manure causing water pollution (nutrient runoff) and high antibiotic use.",
        hint: "Feedlot; manure and antibiotics",
      },
      {
        front: "How does overgrazing damage rangeland?",
        back: "Too many animals eating vegetation faster than it regrows removes plant cover, exposing soil to erosion, compacting soil, and promoting desertification.",
        hint: "Too many animals, bare and eroded soil",
      },
      {
        front: "What is the tragedy of the commons in the context of land use?",
        back: "When a shared resource (like open grazing land or fisheries) is freely available, individuals overuse it for personal gain, depleting it for everyone because no one bears the full cost.",
        hint: "Shared resource overused by all",
      },
    ],
  },
  {
    slug: "complex-number-system-alg2",
    cards: [
      {
        front: "What is the imaginary unit $i$, and what is $i^2$?",
        back: "$i$ is defined as $\\\\sqrt{-1}$, so $i^2 = -1$. It lets us take square roots of negative numbers.",
        hint: "i squared = -1",
      },
      {
        front: "What is the standard form of a complex number?",
        back: "A complex number is written $a + bi$, where $a$ is the real part and $b$ is the imaginary part, and both are real numbers.",
        hint: "a + bi, real part plus imaginary part",
      },
      {
        front: "Simplify the powers of $i$: $i^1, i^2, i^3, i^4$.",
        back: "$i^1 = i$, $i^2 = -1$, $i^3 = -i$, and $i^4 = 1$. The pattern repeats every four powers.",
        hint: "Cycle of 4: i, -1, -i, 1",
      },
      {
        front: "How do you simplify a high power of $i$, such as $i^{27}$?",
        back: "Divide the exponent by 4 and use the remainder: $27 \\\\div 4$ leaves remainder 3, so $i^{27} = i^3 = -i$.",
        hint: "Use the remainder when dividing exponent by 4",
      },
      {
        front: "How do you simplify $\\\\sqrt{-49}$?",
        back: "Factor out $i$: $\\\\sqrt{-49} = \\\\sqrt{49}\\\\cdot\\\\sqrt{-1} = 7i$. Always pull out the $i$ before simplifying.",
        hint: "Pull out the i first",
      },
      {
        front: "How do you add or subtract complex numbers?",
        back: "Combine like terms: add/subtract the real parts and the imaginary parts separately. For example, $(3 + 2i) + (1 - 5i) = 4 - 3i$.",
        hint: "Real with real, imaginary with imaginary",
      },
      {
        front: "How do you multiply two complex numbers, e.g. $(2 + 3i)(1 - 4i)$?",
        back: "Use FOIL, then replace $i^2$ with $-1$: $2 - 8i + 3i - 12i^2 = 2 - 5i + 12 = 14 - 5i$.",
        hint: "FOIL, then substitute i^2 = -1",
      },
      {
        front: "What is the complex conjugate of $a + bi$?",
        back: "Its conjugate is $a - bi$ (flip the sign of the imaginary part). Multiplying a number by its conjugate gives a real number: $(a+bi)(a-bi) = a^2 + b^2$.",
        hint: "Flip the sign on bi",
      },
      {
        front: "How do you divide complex numbers, e.g. $\\\\dfrac{3 + i}{2 - i}$?",
        back: "Multiply numerator and denominator by the conjugate of the denominator. Here multiply by $2 + i$: $\\\\dfrac{(3+i)(2+i)}{(2-i)(2+i)} = \\\\dfrac{5 + 5i}{5} = 1 + i$.",
        hint: "Multiply top and bottom by the conjugate",
      },
      {
        front: "What is the modulus (absolute value) of a complex number $a + bi$?",
        back: "It is the distance from the origin in the complex plane: $|a + bi| = \\\\sqrt{a^2 + b^2}$.",
        hint: "Like the hypotenuse of a and b",
      },
      {
        front: "How is a complex number graphed on the complex plane?",
        back: "Plot $a + bi$ as the point $(a, b)$, where the horizontal axis is the real axis and the vertical axis is the imaginary axis.",
        hint: "Real on x-axis, imaginary on y-axis",
      },
      {
        front: "What does the complex conjugate root theorem state?",
        back: "If a polynomial with real coefficients has a complex root $a + bi$, then its conjugate $a - bi$ is also a root. Complex roots come in conjugate pairs.",
        hint: "Complex roots come in pairs",
      },
      {
        front: "Common trap: why is $\\\\sqrt{-4}\\\\cdot\\\\sqrt{-9}$ NOT $\\\\sqrt{36} = 6$?",
        back: "The product rule $\\\\sqrt{a}\\\\sqrt{b} = \\\\sqrt{ab}$ fails for negatives. Convert first: $\\\\sqrt{-4}\\\\cdot\\\\sqrt{-9} = (2i)(3i) = 6i^2 = -6$.",
        hint: "Convert to i before multiplying",
      },
      {
        front: "Solve $x^2 + 16 = 0$ over the complex numbers.",
        back: "$x^2 = -16$, so $x = \\\\pm\\\\sqrt{-16} = \\\\pm 4i$. The solutions are $4i$ and $-4i$.",
        hint: "Isolate x^2, take square root with i",
      },
    ],
  },
  {
    slug: "csp-algorithms",
    cards: [
      {
        front: "What is an algorithm in AP CS Principles?",
        back: "A finite set of instructions that accomplish a specific task or solve a problem. Algorithms can be expressed in natural language, pseudocode, or programming code.",
        hint: "Step-by-step instructions to do a task",
      },
      {
        front: "What three building blocks can express any algorithm (sequencing, selection, iteration)?",
        back: "Sequencing executes steps in order; selection (conditionals) chooses between paths based on a Boolean condition; iteration (loops) repeats steps. Together they can express any algorithm.",
        hint: "Sequence, selection, iteration",
      },
      {
        front: "What is the difference between linear search and binary search?",
        back: "Linear search checks each element one by one and works on any list. Binary search repeatedly halves a SORTED list, checking the middle element, and is far faster on large sorted data.",
        hint: "Check each vs. halve a sorted list",
      },
      {
        front: "Why must a list be sorted before binary search can be used?",
        back: "Binary search relies on comparing the target to the middle element to decide which half to discard. This only works if elements are in order; on an unsorted list the discarded half could contain the target.",
        hint: "Halving logic requires order",
      },
      {
        front: "What is the difference between a reasonable-time and an unreasonable-time algorithm?",
        back: "A reasonable-time algorithm's running time grows polynomially with input size (e.g., linear, quadratic). An unreasonable-time algorithm grows faster, like exponentially or factorially, becoming impractical for large inputs.",
        hint: "Polynomial vs. exponential/factorial growth",
      },
      {
        front: "What is a heuristic in algorithm design?",
        back: "An approach that may not find the perfect/optimal solution but produces a good-enough solution in a reasonable amount of time, used when an exact solution would take too long.",
        hint: "Good-enough shortcut for hard problems",
      },
      {
        front: "What does it mean for a problem to be undecidable?",
        back: "An undecidable problem is one for which no algorithm can be built that always gives a correct yes-or-no answer for every possible input.",
        hint: "No algorithm can always solve it",
      },
      {
        front: "What is an optimization problem, with an example?",
        back: "A problem seeking the best (e.g., shortest, cheapest, fastest) solution among many. Example: finding the shortest route that visits a set of cities.",
        hint: "Find the best, not just any, solution",
      },
      {
        front: "What is the difference between efficiency measured by exact steps vs. how it scales?",
        back: "Efficiency can be measured by counting actual operations, but more usefully by how the number of operations grows as input size increases. We care most about scaling because it predicts performance on large inputs.",
        hint: "We care how it grows with input size",
      },
      {
        front: "What is sequential (sequencing) vs. parallel processing?",
        back: "Sequential processing runs one operation at a time in order. Parallel processing breaks a task into parts that run simultaneously on multiple processors, which can reduce total time.",
        hint: "One at a time vs. simultaneous",
      },
      {
        front: "How is the 'speedup' of a parallel solution calculated?",
        back: "Speedup = (time to complete the task sequentially) divided by (time to complete it in parallel). A speedup of 2 means the parallel version is twice as fast.",
        hint: "Sequential time / parallel time",
      },
      {
        front: "What is a Boolean expression and where is it used in algorithms?",
        back: "A Boolean expression evaluates to either true or false (e.g., $x > 5$). It is used in selection statements and loop conditions to control program flow.",
        hint: "Evaluates to true or false",
      },
      {
        front: "Worked mini-example: How many comparisons does binary search need at most for a sorted list of 16 items?",
        back: "At most 4. Binary search halves the list each step: 16 to 8 to 4 to 2 to 1, which is $\\\\log_2(16) = 4$ steps.",
        hint: "Use log base 2 of the list size",
      },
      {
        front: "What is the difference between writing an algorithm and the program that implements it?",
        back: "An algorithm is the abstract logical procedure (often in pseudocode), while a program is the algorithm expressed in a specific programming language that a computer can run.",
        hint: "Abstract logic vs. runnable code",
      },
    ],
  },
  {
    slug: "motivation-theories",
    cards: [
      {
        front: "What is motivation in psychology?",
        back: "A need or desire that energizes and directs behavior toward a goal.",
        hint: "What drives and directs behavior",
      },
      {
        front: "What is instinct (evolutionary) theory of motivation?",
        back: "The idea that some behaviors are driven by innate, fixed, unlearned patterns (instincts) that are common to a species and have evolutionary survival value.",
        hint: "Innate, genetically programmed behaviors",
      },
      {
        front: "What is drive-reduction theory?",
        back: "A physiological need creates an aroused state (a drive) that motivates the organism to act to reduce the need and restore balance (homeostasis), like drinking when thirsty.",
        hint: "Need creates drive; we act to reduce it",
      },
      {
        front: "What is homeostasis?",
        back: "The body's tendency to maintain a balanced, steady internal state (e.g., body temperature, blood sugar). Drive-reduction theory is built around restoring homeostasis.",
        hint: "Maintaining internal balance",
      },
      {
        front: "What is arousal theory of motivation?",
        back: "We are motivated to maintain an optimal level of arousal, not just to reduce it. Sometimes we seek stimulation (curiosity, excitement) even when no need must be reduced.",
        hint: "We seek an optimal stimulation level",
      },
      {
        front: "What is the Yerkes-Dodson law?",
        back: "Performance increases with arousal up to an optimal point and then decreases. Moderate arousal is best; the ideal level is lower for difficult tasks and higher for easy/well-learned tasks.",
        hint: "Moderate arousal = best performance",
      },
      {
        front: "What is the incentive theory of motivation?",
        back: "Behavior is motivated by external rewards (positive incentives) and avoidance of punishments (negative incentives), pulling us toward goals rather than pushing from internal needs.",
        hint: "External rewards pull behavior",
      },
      {
        front: "Distinguish intrinsic and extrinsic motivation.",
        back: "Intrinsic motivation is the desire to do something for its own internal satisfaction or enjoyment; extrinsic motivation is doing something for external rewards or to avoid punishment.",
        hint: "Internal joy vs. external reward",
      },
      {
        front: "What is the overjustification effect?",
        back: "When an external reward is given for an activity a person already enjoyed, intrinsic motivation can decrease because the behavior gets reattributed to the reward.",
        hint: "Rewarding fun can kill the fun",
      },
      {
        front: "What is Maslow's hierarchy of needs, in order?",
        back: "From bottom to top: physiological needs, safety needs, love/belonging needs, esteem needs, and self-actualization (some add self-transcendence). Lower needs are generally met before higher ones.",
        hint: "Physiological up to self-actualization",
      },
      {
        front: "According to Maslow, what is self-actualization?",
        back: "The need to realize one's full potential and become everything one is capable of being. It sits at the top of the hierarchy after more basic needs are satisfied.",
        hint: "Reaching your full potential (top of pyramid)",
      },
      {
        front: "What is self-determination theory's three core needs?",
        back: "It holds that intrinsic motivation thrives when three psychological needs are met: autonomy (control over one's actions), competence (feeling effective), and relatedness (connection to others).",
        hint: "Autonomy, competence, relatedness",
      },
      {
        front: "What is the difference between an approach-approach and an approach-avoidance conflict?",
        back: "Approach-approach is choosing between two desirable options. Approach-avoidance is a single goal that has both attractive and unattractive features, pulling you toward and away at once.",
        hint: "Two goods vs. one good-and-bad",
      },
      {
        front: "Common trap: how does arousal theory explain behavior that drive-reduction theory cannot?",
        back: "Drive-reduction can't explain why we seek stimulation (curiosity, thrill-seeking) when no physiological need exists. Arousal theory accounts for this by saying we aim for an optimal arousal level, sometimes raising it.",
        hint: "Why we seek stimulation, not just reduce needs",
      },
    ],
  },
  {
    slug: "observational-vs-experiments",
    cards: [
      {
        front: "What is the key difference between an observational study and an experiment?",
        back: "In an observational study, researchers measure variables without imposing a treatment; in an experiment, researchers actively impose a treatment on subjects to observe its effect on a response.",
        hint: "Just watch vs. apply a treatment",
      },
      {
        front: "Why can only an experiment establish cause and effect?",
        back: "Because random assignment of treatments balances out confounding variables, isolating the treatment's effect. Observational studies cannot rule out lurking variables, so they show association, not causation.",
        hint: "Random assignment isolates the cause",
      },
      {
        front: "What is a confounding variable?",
        back: "A variable whose effects on the response cannot be separated from the effects of the explanatory variable, making it impossible to tell which one caused the result.",
        hint: "Tangled effect you can't separate out",
      },
      {
        front: "Define explanatory variable and response variable.",
        back: "The explanatory variable is the factor that may cause changes (the treatment/independent variable); the response variable is the outcome being measured (the dependent variable).",
        hint: "Cause (explanatory) vs. effect (response)",
      },
      {
        front: "What are the three principles of good experimental design?",
        back: "Control (keep other variables the same, often with a control group), Randomization (randomly assign subjects to treatments), and Replication (use enough subjects so results aren't due to chance).",
        hint: "Control, Randomize, Replicate",
      },
      {
        front: "What is the purpose of random assignment in an experiment?",
        back: "It distributes confounding/lurking variables evenly across treatment groups, so any difference in response can be attributed to the treatment rather than other factors.",
        hint: "Balances confounders across groups",
      },
      {
        front: "What is the difference between random SELECTION (sampling) and random ASSIGNMENT?",
        back: "Random selection (sampling) lets you generalize results to the population. Random assignment (to treatments) lets you make cause-and-effect conclusions. They serve different purposes.",
        hint: "Selection = generalize; Assignment = causation",
      },
      {
        front: "What is the placebo effect, and how is it controlled?",
        back: "The placebo effect is improvement caused merely by expectations of a treatment. It is controlled by giving a control group a fake (placebo) treatment so the real effect can be isolated.",
        hint: "Expectation alone causes change",
      },
      {
        front: "What is the difference between single-blind and double-blind experiments?",
        back: "In single-blind, the subjects don't know which treatment they received. In double-blind, neither the subjects nor the people interacting with them and measuring results know, preventing bias from either side.",
        hint: "Who is kept in the dark, one party or both",
      },
      {
        front: "What is a control group?",
        back: "A group that receives no treatment or a placebo/standard treatment, providing a baseline to compare against the treatment group(s).",
        hint: "Baseline comparison group",
      },
      {
        front: "What is blocking, and how does it differ from stratifying?",
        back: "Blocking groups experimental subjects by a similar characteristic (a block) and randomizes treatments within each block to reduce its effect. It is the experimental analog of stratifying in sampling.",
        hint: "Group similar subjects, randomize within",
      },
      {
        front: "What is a matched pairs design?",
        back: "A special experimental design where subjects are paired by similarity (or each subject receives both treatments), and the treatment difference is compared within pairs to control variability.",
        hint: "Compare two treatments within pairs",
      },
      {
        front: "Worked example: A study finds coffee drinkers have higher rates of heart disease. Why can't we conclude coffee causes it?",
        back: "It is observational, so a confounder like smoking (more common in coffee drinkers) could explain both. Without random assignment of coffee, causation can't be established, only association.",
        hint: "Lurking variable like smoking",
      },
      {
        front: "Common trap: Can an observational study use random sampling? Does that make it an experiment?",
        back: "Yes, observational studies can and should use random sampling for generalizability, but they remain observational because no treatment is imposed. Sampling is not the same as assigning treatments.",
        hint: "Random sampling does not equal an experiment",
      },
    ],
  },
];
