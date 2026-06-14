export const batchCards: { slug: string; cards: { front: string; back: string; hint?: string }[] }[] = [
  {
    slug: "probability-basics-grade7",
    cards: [
      {
        front: "What is the probability of an event?",
        back: "Probability is a number from 0 to 1 that measures how likely an event is to happen. $P(\\\\text{event}) = \\\\dfrac{\\\\text{number of favorable outcomes}}{\\\\text{total number of equally likely outcomes}}$.",
        hint: "Favorable over total.",
      },
      {
        front: "What does a probability of 0 mean? What about 1?",
        back: "A probability of 0 means the event is impossible (it can never happen). A probability of 1 means the event is certain (it will always happen).",
        hint: "0 = never, 1 = always.",
      },
      {
        front: "A bag has 3 red and 5 blue marbles. What is the probability of drawing a red marble?",
        back: "There are 3 red out of 8 total marbles, so $P(\\\\text{red}) = \\\\dfrac{3}{8}$.",
        hint: "Count favorable, count total.",
      },
      {
        front: "What is the difference between theoretical and experimental probability?",
        back: "Theoretical probability is what should happen based on equally likely outcomes. Experimental probability is what actually happens, found by dividing the number of times an event occurred by the total number of trials.",
        hint: "Expected vs. observed.",
      },
      {
        front: "What is the complement of an event, and how do you find its probability?",
        back: "The complement is everything that is NOT the event. $P(\\\\text{not } A) = 1 - P(A)$. Use it when finding 'at least one' or 'not' problems.",
        hint: "All probabilities add to 1.",
      },
      {
        front: "If $P(\\\\text{rain}) = 0.3$, what is the probability it does NOT rain?",
        back: "$P(\\\\text{no rain}) = 1 - 0.3 = 0.7$.",
        hint: "Subtract from 1.",
      },
      {
        front: "What is the sample space of an experiment?",
        back: "The sample space is the set of all possible outcomes. For rolling one die it is $\\\\{1, 2, 3, 4, 5, 6\\\\}$.",
        hint: "Every possible result.",
      },
      {
        front: "What does it mean for outcomes to be 'equally likely'?",
        back: "Each outcome has the same chance of occurring, like the faces of a fair die or sides of a fair coin. The basic probability formula only works when outcomes are equally likely.",
        hint: "Fair coin, fair die.",
      },
      {
        front: "You spin a spinner with 4 equal sections colored red, blue, green, yellow. What is $P(\\\\text{red or blue})$?",
        back: "Two of the four sections are favorable, so $P(\\\\text{red or blue}) = \\\\dfrac{2}{4} = \\\\dfrac{1}{2}$.",
        hint: "Count both favorable sections.",
      },
      {
        front: "How do you find the number of outcomes for two independent events (Fundamental Counting Principle)?",
        back: "Multiply the number of outcomes for each event. Flipping a coin (2) and rolling a die (6) gives $2 \\\\times 6 = 12$ total outcomes.",
        hint: "Multiply the choices.",
      },
      {
        front: "Common trap: a student says drawing a heart from a deck has probability $\\\\frac{1}{4}$ because there are 4 suits. Is this right?",
        back: "Yes, it is correct because each suit (hearts, diamonds, clubs, spades) has 13 of the 52 cards, so $P(\\\\text{heart}) = \\\\dfrac{13}{52} = \\\\dfrac{1}{4}$. Always check the outcomes really are equally likely.",
        hint: "13 hearts in 52 cards.",
      },
      {
        front: "As you repeat an experiment many times, how does experimental probability behave?",
        back: "The more trials you run, the closer the experimental probability tends to get to the theoretical probability. This is the idea behind the Law of Large Numbers.",
        hint: "More trials, closer to theory.",
      },
      {
        front: "Express the probability $\\\\frac{2}{5}$ as a decimal and a percent.",
        back: "$\\\\dfrac{2}{5} = 0.4 = 40\\\\%$. Divide top by bottom for the decimal, then multiply by 100 for the percent.",
        hint: "Divide, then times 100.",
      },
    ],
  },
  {
    slug: "angle-relationships-grade7",
    cards: [
      {
        front: "What are complementary angles?",
        back: "Two angles whose measures add up to $90^\\\\circ$. If one is $30^\\\\circ$, its complement is $60^\\\\circ$.",
        hint: "They make a right angle.",
      },
      {
        front: "What are supplementary angles?",
        back: "Two angles whose measures add up to $180^\\\\circ$. If one is $110^\\\\circ$, its supplement is $70^\\\\circ$.",
        hint: "They make a straight line.",
      },
      {
        front: "What are vertical angles, and how are they related?",
        back: "Vertical angles are the opposite angles formed when two lines cross. They are always equal (congruent) to each other.",
        hint: "Across the X.",
      },
      {
        front: "What are adjacent angles?",
        back: "Two angles that share a common vertex and a common side but do not overlap. They sit next to each other.",
        hint: "Side by side.",
      },
      {
        front: "Two angles form a linear pair. One is $65^\\\\circ$. Find the other.",
        back: "A linear pair is supplementary, so the angles add to $180^\\\\circ$. The other angle is $180^\\\\circ - 65^\\\\circ = 115^\\\\circ$.",
        hint: "Linear pair = straight line.",
      },
      {
        front: "When a transversal crosses two parallel lines, what is true about corresponding angles?",
        back: "Corresponding angles (same position at each intersection) are equal. For example, the top-right angle at one crossing equals the top-right angle at the other.",
        hint: "Same corner, same measure.",
      },
      {
        front: "When a transversal crosses two parallel lines, what is true about alternate interior angles?",
        back: "Alternate interior angles (between the parallel lines, on opposite sides of the transversal) are equal.",
        hint: "Z-shape angles match.",
      },
      {
        front: "What do co-interior (same-side interior) angles add up to with parallel lines?",
        back: "Same-side interior angles are supplementary; they add to $180^\\\\circ$.",
        hint: "C-shape angles, total 180.",
      },
      {
        front: "The angle $x$ and an angle of $40^\\\\circ$ are complementary. Write and solve an equation for $x$.",
        back: "$x + 40 = 90$, so $x = 50^\\\\circ$.",
        hint: "Complements add to 90.",
      },
      {
        front: "Common trap: a student says vertical angles are supplementary. Why is that wrong?",
        back: "Vertical angles are equal, not supplementary. The angles ADJACENT to a vertical angle (forming a linear pair) are the ones that are supplementary.",
        hint: "Vertical = equal.",
      },
      {
        front: "What is the sum of the interior angles of a triangle?",
        back: "The three interior angles of any triangle always add up to $180^\\\\circ$. Use this to find a missing angle when two are known.",
        hint: "Always 180.",
      },
      {
        front: "A triangle has angles $50^\\\\circ$ and $70^\\\\circ$. Find the third angle.",
        back: "$180^\\\\circ - 50^\\\\circ - 70^\\\\circ = 60^\\\\circ$.",
        hint: "Subtract from 180.",
      },
      {
        front: "How do you find an unknown angle in a figure with multiple relationships?",
        back: "Identify which relationship applies (complementary, supplementary, vertical, parallel-line angles), write an equation setting measures equal or summing to 90 or 180, and solve for the variable.",
        hint: "Name the relationship first.",
      },
    ],
  },
  {
    slug: "circles-circumference-area-grade7",
    cards: [
      {
        front: "What is the radius of a circle?",
        back: "The radius ($r$) is the distance from the center of the circle to any point on the circle.",
        hint: "Center to edge.",
      },
      {
        front: "What is the diameter, and how does it relate to the radius?",
        back: "The diameter ($d$) is the distance across the circle through the center. $d = 2r$, so the radius is half the diameter.",
        hint: "Twice the radius.",
      },
      {
        front: "What is the formula for the circumference of a circle?",
        back: "$C = \\\\pi d$ or equivalently $C = 2\\\\pi r$, where $C$ is the distance around the circle, $d$ is the diameter, and $r$ is the radius.",
        hint: "Around the outside.",
      },
      {
        front: "What is the formula for the area of a circle?",
        back: "$A = \\\\pi r^2$, where $A$ is the space inside the circle and $r$ is the radius. Square the radius first, then multiply by $\\\\pi$.",
        hint: "Pi r squared.",
      },
      {
        front: "What is the approximate value of $\\\\pi$?",
        back: "$\\\\pi \\\\approx 3.14$ (or $\\\\frac{22}{7}$). It is the ratio of any circle's circumference to its diameter.",
        hint: "About 3.14.",
      },
      {
        front: "A circle has radius 5 cm. Find its circumference (use $\\\\pi \\\\approx 3.14$).",
        back: "$C = 2\\\\pi r = 2 \\\\times 3.14 \\\\times 5 = 31.4$ cm.",
        hint: "Use 2 pi r.",
      },
      {
        front: "A circle has radius 5 cm. Find its area (use $\\\\pi \\\\approx 3.14$).",
        back: "$A = \\\\pi r^2 = 3.14 \\\\times 5^2 = 3.14 \\\\times 25 = 78.5$ cm$^2$.",
        hint: "Square first, then pi.",
      },
      {
        front: "Common trap: a student computes area as $\\\\pi \\\\times (2r)$. What did they do wrong?",
        back: "They forgot to square the radius and used diameter-style thinking. Area uses $r^2$ (radius squared), not $2r$. Area $= \\\\pi r^2$.",
        hint: "Square the radius, don't double it.",
      },
      {
        front: "If you are given the diameter, how do you find the area?",
        back: "First find the radius by halving the diameter ($r = d \\\\div 2$), then use $A = \\\\pi r^2$. Do not plug the diameter directly into the area formula.",
        hint: "Halve d to get r first.",
      },
      {
        front: "A circular garden has diameter 14 m. Find its area using $\\\\pi \\\\approx \\\\frac{22}{7}$.",
        back: "Radius $= 14 \\\\div 2 = 7$ m. $A = \\\\frac{22}{7} \\\\times 7^2 = \\\\frac{22}{7} \\\\times 49 = 154$ m$^2$.",
        hint: "7 squared is 49.",
      },
      {
        front: "What units are used for circumference versus area?",
        back: "Circumference is a length, so it uses single units (cm, m). Area is a surface, so it uses square units (cm$^2$, m$^2$).",
        hint: "Area is always squared.",
      },
      {
        front: "What is the relationship between circumference and diameter for every circle?",
        back: "Circumference divided by diameter always equals $\\\\pi$ for every circle, no matter the size. That is where $C = \\\\pi d$ comes from.",
        hint: "C ÷ d = pi.",
      },
      {
        front: "How do you find the area of a semicircle?",
        back: "Find the full circle's area with $\\\\pi r^2$, then divide by 2 because a semicircle is half a circle: $A = \\\\dfrac{\\\\pi r^2}{2}$.",
        hint: "Half a circle.",
      },
    ],
  },
  {
    slug: "ap-exam-review-calcab",
    cards: [
      {
        front: "State the formal definition of the derivative.",
        back: "$f'(x) = \\\\displaystyle\\\\lim_{h \\\\to 0} \\\\dfrac{f(x+h) - f(x)}{h}$. It gives the instantaneous rate of change and the slope of the tangent line at $x$.",
        hint: "Limit of a difference quotient.",
      },
      {
        front: "State both parts of the Fundamental Theorem of Calculus.",
        back: "Part 1: $\\\\dfrac{d}{dx}\\\\displaystyle\\\\int_a^x f(t)\\\\,dt = f(x)$. Part 2: $\\\\displaystyle\\\\int_a^b f(x)\\\\,dx = F(b) - F(a)$, where $F$ is any antiderivative of $f$.",
        hint: "Derivative of an integral; net change.",
      },
      {
        front: "What are the conditions for continuity at a point $x = c$?",
        back: "$f(c)$ exists, $\\\\lim_{x \\\\to c} f(x)$ exists, and $\\\\lim_{x \\\\to c} f(x) = f(c)$. All three must hold.",
        hint: "Limit equals function value.",
      },
      {
        front: "When is a piecewise or absolute-value function differentiable, and what is a common trap?",
        back: "Differentiability requires continuity AND a matching slope from both sides. A common trap: a function can be continuous but not differentiable at a corner or cusp (like $|x|$ at $x = 0$).",
        hint: "Continuous does not imply differentiable.",
      },
      {
        front: "State the Mean Value Theorem (MVT) and its hypotheses.",
        back: "If $f$ is continuous on $[a,b]$ and differentiable on $(a,b)$, then there is a $c$ in $(a,b)$ with $f'(c) = \\\\dfrac{f(b) - f(a)}{b - a}$ (instantaneous rate equals average rate).",
        hint: "Slope of tangent = slope of secant.",
      },
      {
        front: "State the Intermediate Value Theorem (IVT).",
        back: "If $f$ is continuous on $[a,b]$ and $N$ is between $f(a)$ and $f(b)$, then there exists $c$ in $(a,b)$ with $f(c) = N$. Use it to prove a value is achieved.",
        hint: "Continuous functions hit every value in between.",
      },
      {
        front: "How do you find absolute extrema on a closed interval $[a,b]$ (Candidates Test)?",
        back: "Evaluate $f$ at all critical points (where $f' = 0$ or DNE) inside $[a,b]$ AND at the endpoints $a$ and $b$. The largest output is the absolute max, the smallest is the absolute min.",
        hint: "Critical points plus endpoints.",
      },
      {
        front: "How do you decide concavity and find inflection points?",
        back: "$f$ is concave up where $f'' > 0$ and concave down where $f'' < 0$. An inflection point occurs where $f''$ changes sign (not merely where $f'' = 0$).",
        hint: "Second derivative sign change.",
      },
      {
        front: "What does the integral $\\\\int_a^b v(t)\\\\,dt$ represent, and how does it differ from total distance?",
        back: "$\\\\int_a^b v(t)\\\\,dt$ is the displacement (net change in position). Total distance traveled is $\\\\int_a^b |v(t)|\\\\,dt$, which requires splitting where $v(t)$ changes sign.",
        hint: "Net change vs. absolute value.",
      },
      {
        front: "State the volume formulas for solids of revolution (disk and washer methods).",
        back: "Disk: $V = \\\\pi \\\\int_a^b [R(x)]^2\\\\,dx$. Washer: $V = \\\\pi \\\\int_a^b \\\\left([R(x)]^2 - [r(x)]^2\\\\right)dx$, where $R$ is the outer radius and $r$ is the inner radius.",
        hint: "Outer squared minus inner squared.",
      },
      {
        front: "How do you set up and solve a separable differential equation?",
        back: "Separate variables so each side has only one variable: $\\\\dfrac{dy}{dx} = g(x)h(y) \\\\Rightarrow \\\\dfrac{1}{h(y)}\\\\,dy = g(x)\\\\,dx$. Integrate both sides, add $+C$, then use an initial condition to solve for $C$.",
        hint: "Get y's left, x's right, then integrate.",
      },
      {
        front: "What is the average value of a function on $[a,b]$?",
        back: "$f_{\\\\text{avg}} = \\\\dfrac{1}{b-a}\\\\displaystyle\\\\int_a^b f(x)\\\\,dx$. Do not confuse it with the average rate of change, which uses $f(b) - f(a)$ over $b - a$.",
        hint: "Integral divided by interval length.",
      },
      {
        front: "What are the three indeterminate forms that allow L'Hopital's Rule, and how is it applied?",
        back: "Use L'Hopital when a limit gives $\\\\frac{0}{0}$ or $\\\\frac{\\\\infty}{\\\\infty}$ (the basic forms); then take $\\\\lim \\\\frac{f'(x)}{g'(x)}$. Forms like $0 \\\\cdot \\\\infty$ must first be rewritten as a fraction.",
        hint: "Differentiate top and bottom separately.",
      },
      {
        front: "How do you justify an answer for the maximum rate or accumulation on the free-response section?",
        back: "Reference the sign of the relevant derivative: a max of $f$ occurs where $f'$ changes from positive to negative. Always state the test used and connect it to the function's behavior in a sentence.",
        hint: "Cite the sign change of f'.",
      },
    ],
  },
  {
    slug: "ap-stats-descriptive-statistics-intro",
    cards: [
      {
        front: "What is the difference between a categorical and a quantitative variable?",
        back: "A categorical variable places individuals into groups or categories (e.g., eye color). A quantitative variable takes numerical values you can do arithmetic with (e.g., height). Choose graphs and summaries based on this type.",
        hint: "Labels vs. numbers.",
      },
      {
        front: "What four things should you describe about a distribution (SOCS)?",
        back: "Shape, Outliers (or unusual features), Center, and Spread. Always describe these in context and compare them when given two distributions.",
        hint: "Remember SOCS.",
      },
      {
        front: "When should you use the mean versus the median as a measure of center?",
        back: "Use the mean for roughly symmetric distributions. Use the median for skewed distributions or when outliers are present, because the median is resistant (not pulled by extreme values).",
        hint: "Skewed or outliers -> median.",
      },
      {
        front: "How does skewness affect the relationship between mean and median?",
        back: "The mean is pulled toward the tail. In a right-skewed distribution, mean > median; in a left-skewed distribution, mean < median. 'The mean chases the tail.'",
        hint: "Tail pulls the mean.",
      },
      {
        front: "Define the standard deviation and what it measures.",
        back: "$s = \\\\sqrt{\\\\dfrac{1}{n-1}\\\\sum (x_i - \\\\bar{x})^2}$ measures the typical distance of values from the mean. Larger $s$ means more spread. It is not resistant to outliers.",
        hint: "Typical distance from the mean.",
      },
      {
        front: "What is the IQR, and how is it calculated?",
        back: "The interquartile range is $\\\\text{IQR} = Q_3 - Q_1$, the spread of the middle 50% of data. It is resistant to outliers and pairs with the median.",
        hint: "Q3 minus Q1.",
      },
      {
        front: "State the 1.5 × IQR rule for identifying outliers.",
        back: "A value is an outlier if it is below $Q_1 - 1.5 \\\\times \\\\text{IQR}$ or above $Q_3 + 1.5 \\\\times \\\\text{IQR}$. These fences flag unusually small or large values.",
        hint: "1.5 IQR below Q1 or above Q3.",
      },
      {
        front: "What are the five numbers in the five-number summary?",
        back: "Minimum, $Q_1$, Median ($Q_2$), $Q_3$, and Maximum. A boxplot displays exactly these five numbers.",
        hint: "Min, Q1, Med, Q3, Max.",
      },
      {
        front: "What is a z-score and how do you compute it?",
        back: "$z = \\\\dfrac{x - \\\\bar{x}}{s}$ tells how many standard deviations a value is above or below the mean. Use it to compare values from different distributions (standardizing).",
        hint: "Value minus mean, over SD.",
      },
      {
        front: "How does adding a constant $a$ to every value affect center and spread?",
        back: "Adding $a$ shifts center (mean and median) up by $a$ but leaves spread (standard deviation, IQR, range) unchanged. Shifting does not stretch the data.",
        hint: "Shifts center, not spread.",
      },
      {
        front: "How does multiplying every value by a constant $b$ affect center and spread?",
        back: "Multiplying by $b$ multiplies both center AND spread (mean, median, SD, IQR, range) by $|b|$. Scaling stretches everything.",
        hint: "Multiplies center and spread.",
      },
      {
        front: "What does it mean that the mean and standard deviation are 'non-resistant'?",
        back: "They are strongly affected by outliers and skew. A single extreme value can pull the mean and inflate the standard deviation, so they are best for symmetric data without outliers.",
        hint: "Outliers distort them.",
      },
      {
        front: "Worked example: data set {2, 4, 4, 6, 9}. Find the mean and median.",
        back: "Mean $= \\\\frac{2+4+4+6+9}{5} = \\\\frac{25}{5} = 5$. Median is the middle value of the ordered list, which is 4.",
        hint: "Sum over n; middle value.",
      },
      {
        front: "Common trap: describing a distribution without context. How do you avoid it?",
        back: "Always state the variable and units. Say 'the median test score was 82 points,' not just 'the median is 82.' AP graders require context for full credit.",
        hint: "Name the variable and units.",
      },
    ],
  },
  {
    slug: "atomic-structure-bonding-ochem",
    cards: [
      {
        front: "What is hybridization, and what are the three common types in organic chemistry?",
        back: "Hybridization mixes atomic orbitals to form equivalent bonding orbitals. $sp^3$ (4 sigma, tetrahedral, $109.5^\\\\circ$), $sp^2$ (3 sigma + 1 pi, trigonal planar, $120^\\\\circ$), and $sp$ (2 sigma + 2 pi, linear, $180^\\\\circ$).",
        hint: "Count the sigma bonds plus lone pairs.",
      },
      {
        front: "How do you quickly determine the hybridization of a carbon atom?",
        back: "Count the number of sigma bonds plus lone pairs (the steric number). 4 = $sp^3$, 3 = $sp^2$, 2 = $sp$. Pi bonds do not count toward hybridization.",
        hint: "Steric number = sigma bonds + lone pairs.",
      },
      {
        front: "What is the difference between a sigma ($\\\\sigma$) and a pi ($\\\\pi$) bond?",
        back: "A sigma bond forms by head-on (end-to-end) orbital overlap and allows free rotation. A pi bond forms by side-to-side overlap of p orbitals, is weaker, and restricts rotation. A double bond = 1 sigma + 1 pi.",
        hint: "Head-on vs. sideways overlap.",
      },
      {
        front: "How many sigma and pi bonds are in a triple bond?",
        back: "A triple bond contains 1 sigma bond and 2 pi bonds. The two pi bonds form from two perpendicular sets of p-orbital overlap.",
        hint: "1 sigma + 2 pi.",
      },
      {
        front: "What is electronegativity, and what is its trend across the periodic table?",
        back: "Electronegativity is an atom's ability to attract bonding electrons. It increases across a period (left to right) and decreases down a group. F > O > N > C > H is a key order.",
        hint: "Up and to the right.",
      },
      {
        front: "How do you calculate the formal charge of an atom?",
        back: "$\\\\text{FC} = (\\\\text{valence electrons}) - (\\\\text{nonbonding electrons}) - \\\\frac{1}{2}(\\\\text{bonding electrons})$. Use it to find the most stable resonance structure (charges closest to zero).",
        hint: "Valence − lone pair e⁻ − half of bonding e⁻.",
      },
      {
        front: "What conditions make resonance structures valid, and what stays fixed?",
        back: "Only electrons (pi bonds and lone pairs) move; atom positions stay fixed. The number of total electrons and the overall charge must remain constant across all structures.",
        hint: "Move electrons, never atoms.",
      },
      {
        front: "What makes one resonance structure contribute more to the hybrid than another?",
        back: "More stable (major) contributors have: more covalent bonds (full octets), formal charges closest to zero, and negative charge on the most electronegative atom. These weigh more in the resonance hybrid.",
        hint: "Octets, low charge, electronegative atom holds the minus.",
      },
      {
        front: "What is the difference between a polar covalent bond and an ionic bond?",
        back: "A polar covalent bond shares electrons unequally due to an electronegativity difference (creating partial charges). An ionic bond transfers electrons fully. Large electronegativity differences (> ~1.7) favor ionic character.",
        hint: "Unequal sharing vs. full transfer.",
      },
      {
        front: "Why are bonds with more s-character shorter and stronger?",
        back: "s orbitals are closer to the nucleus, so greater s-character (sp = 50%, sp² = 33%, sp³ = 25%) holds electrons tighter. Thus $sp$ C–H bonds are shorter, stronger, and more acidic than $sp^3$ C–H bonds.",
        hint: "More s-character = closer to nucleus.",
      },
      {
        front: "How does hybridization affect the acidity of a terminal C–H bond?",
        back: "Acidity increases with s-character because the conjugate base anion is more stabilized when electrons are held closer to the nucleus. Order: $sp$ (alkyne) > $sp^2$ (alkene) > $sp^3$ (alkane).",
        hint: "Alkyne C–H is most acidic.",
      },
      {
        front: "What is the octet rule, and which atoms commonly violate it in organic chemistry?",
        back: "Atoms tend to gain, lose, or share electrons to reach 8 valence electrons. Common exceptions: hydrogen (wants 2), boron (often 6, electron-deficient), and carbocations (6 on carbon).",
        hint: "8 electrons, but H and B differ.",
      },
      {
        front: "Worked example: predict the hybridization and geometry of the carbon in formaldehyde (H₂C=O).",
        back: "The carbon has 3 sigma bonds (2 C–H, 1 C–O) plus 1 pi bond, giving a steric number of 3. It is $sp^2$ hybridized with trigonal planar geometry and $\\\\sim 120^\\\\circ$ bond angles.",
        hint: "Count sigma bonds = 3.",
      },
      {
        front: "Common trap: counting pi bonds when determining hybridization. Why is this wrong?",
        back: "Hybridization is set only by the steric number (sigma bonds + lone pairs). Pi bonds use unhybridized p orbitals, so they never change the hybridization label.",
        hint: "Pi bonds use leftover p orbitals.",
      },
    ],
  },
];
