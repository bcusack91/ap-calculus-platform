export const batchCards: { slug: string; cards: { front: string; back: string; hint?: string }[] }[] = [
  {
    slug: "chi-square-tests",
    cards: [
      {
        front: "What are the three chi-square test types on the AP Statistics exam?",
        back: "Goodness-of-fit (one categorical variable vs. a claimed distribution), test of independence (one sample, two categorical variables), and test of homogeneity (multiple samples/populations compared on one categorical variable).",
        hint: "GOF, independence, homogeneity.",
      },
      {
        front: "What is the chi-square test statistic formula and what does each symbol mean?",
        back: "$\\\\chi^2 = \\\\sum \\\\frac{(O - E)^2}{E}$, where $O$ is each observed count and $E$ is each expected count. Sum over all cells. Larger $\\\\chi^2$ means observed and expected differ more.",
        hint: "Sum of (observed minus expected) squared over expected.",
      },
      {
        front: "How do you compute the expected count for a cell in a two-way table?",
        back: "$E = \\\\frac{(\\\\text{row total})(\\\\text{column total})}{\\\\text{grand total}}$. Use this for tests of independence and homogeneity.",
        hint: "Row total times column total divided by n.",
      },
      {
        front: "What is the expected count for a goodness-of-fit test?",
        back: "$E_i = n \\\\cdot p_i$, where $n$ is the sample size and $p_i$ is the hypothesized proportion for category $i$. The expected counts must sum to $n$.",
        hint: "Sample size times the claimed proportion.",
      },
      {
        front: "What are the degrees of freedom for each chi-square test?",
        back: "Goodness-of-fit: $df = k - 1$ (k = number of categories). Independence and homogeneity: $df = (\\\\text{rows} - 1)(\\\\text{columns} - 1)$.",
        hint: "GOF uses categories minus 1; two-way uses (r-1)(c-1).",
      },
      {
        front: "What conditions must be checked before any chi-square test?",
        back: "Random: data from a random sample or randomized experiment. Independence (10% condition if sampling without replacement). Large counts: all expected counts $\\\\geq 5$.",
        hint: "Random, Independent, Large expected counts.",
      },
      {
        front: "Why must you check that all EXPECTED counts (not observed) are at least 5?",
        back: "The chi-square statistic only approximately follows the chi-square distribution; that approximation requires sufficiently large expected counts. Observed counts can be small, but every expected count must be at least 5.",
        hint: "It is about the approximation, and uses E, not O.",
      },
      {
        front: "What does the hypotheses pair look like for a goodness-of-fit test?",
        back: "H0: the categorical variable follows the stated distribution (state each $p_i$). Ha: at least one proportion differs from the stated value. Never write Ha with specific alternative values.",
        hint: "Null states the full distribution; alternative says 'at least one differs.'",
      },
      {
        front: "How are the hypotheses written for a test of independence?",
        back: "H0: the two categorical variables are independent (not associated) in the population. Ha: the two variables are associated (dependent). Name the variables and the population.",
        hint: "Independent vs. associated.",
      },
      {
        front: "What is the key design difference between a test of homogeneity and a test of independence?",
        back: "Independence uses ONE random sample classified by two variables. Homogeneity uses SEVERAL independent samples (or treatment groups) and compares the distribution of one categorical variable across them.",
        hint: "One sample vs. multiple samples.",
      },
      {
        front: "How is the chi-square test always one-sided in terms of the p-value?",
        back: "The p-value is the area to the RIGHT of the test statistic under the chi-square distribution: $P(\\\\chi^2 \\\\geq \\\\text{test statistic})$. Larger discrepancies give larger statistics and smaller p-values.",
        hint: "Always an upper-tail (right) area.",
      },
      {
        front: "Worked example: A die is rolled 60 times; each face is expected 10 times. Face 6 appears 18 times, others vary. How do you start the chi-square contribution for face 6?",
        back: "Each face's expected count is $E = 60 \\\\cdot \\\\frac{1}{6} = 10$. Face 6's contribution is $\\\\frac{(18 - 10)^2}{10} = \\\\frac{64}{10} = 6.4$. Sum all six contributions for $\\\\chi^2$.",
        hint: "E = 10 for each; plug into (O-E)^2/E.",
      },
      {
        front: "How do you state a chi-square conclusion in context?",
        back: "Compare p-value to $\\\\alpha$. If p-value $< \\\\alpha$, reject H0: there IS convincing evidence of (association / a difference / a poor fit). If p-value $\\\\geq \\\\alpha$, fail to reject: not convincing evidence. Always reference the variables and population.",
        hint: "Compare p to alpha, then interpret in context.",
      },
      {
        front: "Common trap: which cell contributes most to a significant chi-square result?",
        back: "Identify the cell with the largest component $\\\\frac{(O-E)^2}{E}$, and note whether observed was above or below expected. The AP exam frequently asks you to discuss the biggest contributor.",
        hint: "Largest (O-E)^2/E term.",
      },
    ],
  },
  {
    slug: "the-unit-circle",
    cards: [
      {
        front: "What is the unit circle?",
        back: "The circle of radius 1 centered at the origin, with equation $x^2 + y^2 = 1$. For an angle $\\\\theta$ measured from the positive x-axis, the terminal point is $(\\\\cos\\\\theta, \\\\sin\\\\theta)$.",
        hint: "Radius 1, centered at origin.",
      },
      {
        front: "On the unit circle, how do coordinates relate to sine and cosine?",
        back: "The point on the unit circle at angle $\\\\theta$ is $(\\\\cos\\\\theta, \\\\sin\\\\theta)$. So the x-coordinate is cosine and the y-coordinate is sine.",
        hint: "x is cosine, y is sine.",
      },
      {
        front: "What is the radian-degree conversion?",
        back: "$\\\\pi$ radians $= 180^\\\\circ$. To convert degrees to radians multiply by $\\\\frac{\\\\pi}{180}$; to convert radians to degrees multiply by $\\\\frac{180}{\\\\pi}$.",
        hint: "Pi radians equals 180 degrees.",
      },
      {
        front: "Give the sine and cosine of the first-quadrant special angles 0, pi/6, pi/4, pi/3, pi/2.",
        back: "$\\\\cos$: $1, \\\\frac{\\\\sqrt{3}}{2}, \\\\frac{\\\\sqrt{2}}{2}, \\\\frac{1}{2}, 0$. $\\\\sin$: $0, \\\\frac{1}{2}, \\\\frac{\\\\sqrt{2}}{2}, \\\\frac{\\\\sqrt{3}}{2}, 1$. Cosine decreases, sine increases across this quadrant.",
        hint: "Sine goes 0, 1/2, root2/2, root3/2, 1.",
      },
      {
        front: "What are the signs of sine, cosine, and tangent in each quadrant?",
        back: "QI: all positive. QII: only sine positive. QIII: only tangent positive. QIV: only cosine positive. Mnemonic: 'All Students Take Calculus.'",
        hint: "All, Sine, Tangent, Cosine.",
      },
      {
        front: "What is a reference angle and why is it useful?",
        back: "The reference angle is the acute angle between the terminal side and the x-axis. Trig values of any angle equal those of its reference angle, with a sign determined by the quadrant.",
        hint: "Acute angle to the x-axis.",
      },
      {
        front: "How do you find the reference angle in each quadrant for an angle in [0, 2pi)?",
        back: "QI: $\\\\theta$. QII: $\\\\pi - \\\\theta$. QIII: $\\\\theta - \\\\pi$. QIV: $2\\\\pi - \\\\theta$.",
        hint: "Distance to the nearest x-axis.",
      },
      {
        front: "What is the Pythagorean identity from the unit circle?",
        back: "$\\\\sin^2\\\\theta + \\\\cos^2\\\\theta = 1$. It follows directly from $x^2 + y^2 = 1$ with $x = \\\\cos\\\\theta$ and $y = \\\\sin\\\\theta$.",
        hint: "Comes from x^2 + y^2 = 1.",
      },
      {
        front: "How are the six trig functions defined from unit-circle coordinates?",
        back: "$\\\\cos\\\\theta = x$, $\\\\sin\\\\theta = y$, $\\\\tan\\\\theta = \\\\frac{y}{x}$, $\\\\sec\\\\theta = \\\\frac{1}{x}$, $\\\\csc\\\\theta = \\\\frac{1}{y}$, $\\\\cot\\\\theta = \\\\frac{x}{y}$.",
        hint: "Tangent is y over x.",
      },
      {
        front: "Where is tangent undefined on the unit circle, and why?",
        back: "Tangent is undefined where $\\\\cos\\\\theta = 0$, i.e. at $\\\\theta = \\\\frac{\\\\pi}{2}$ and $\\\\frac{3\\\\pi}{2}$ (plus multiples of $\\\\pi$), because $\\\\tan\\\\theta = \\\\frac{\\\\sin\\\\theta}{\\\\cos\\\\theta}$ and division by zero is undefined.",
        hint: "Wherever the x-coordinate is 0.",
      },
      {
        front: "What are coterminal angles and how do you find them?",
        back: "Coterminal angles share the same terminal side and trig values. Add or subtract full rotations: $2\\\\pi$ (or $360^\\\\circ$). Example: $\\\\frac{13\\\\pi}{6}$ is coterminal with $\\\\frac{\\\\pi}{6}$.",
        hint: "Add or subtract 2 pi.",
      },
      {
        front: "Worked example: Find $\\\\sin\\\\frac{5\\\\pi}{6}$ using the unit circle.",
        back: "$\\\\frac{5\\\\pi}{6}$ is in QII with reference angle $\\\\pi - \\\\frac{5\\\\pi}{6} = \\\\frac{\\\\pi}{6}$. Sine is positive in QII, so $\\\\sin\\\\frac{5\\\\pi}{6} = \\\\sin\\\\frac{\\\\pi}{6} = \\\\frac{1}{2}$.",
        hint: "QII reference angle pi/6, sine positive.",
      },
      {
        front: "Worked example: Evaluate $\\\\cos\\\\frac{4\\\\pi}{3}$.",
        back: "$\\\\frac{4\\\\pi}{3}$ is in QIII with reference angle $\\\\frac{4\\\\pi}{3} - \\\\pi = \\\\frac{\\\\pi}{3}$. Cosine is negative in QIII, so $\\\\cos\\\\frac{4\\\\pi}{3} = -\\\\cos\\\\frac{\\\\pi}{3} = -\\\\frac{1}{2}$.",
        hint: "QIII reference angle pi/3, cosine negative.",
      },
      {
        front: "What are the quadrantal angle values for cosine and sine at 0, pi/2, pi, 3pi/2?",
        back: "$(\\\\cos, \\\\sin)$: at $0 \\\\to (1, 0)$, at $\\\\frac{\\\\pi}{2} \\\\to (0, 1)$, at $\\\\pi \\\\to (-1, 0)$, at $\\\\frac{3\\\\pi}{2} \\\\to (0, -1)$.",
        hint: "Points on the axes.",
      },
    ],
  },
  {
    slug: "power-physics",
    cards: [
      {
        front: "What is the definition of power in physics?",
        back: "Power is the rate at which work is done or energy is transferred: $P = \\\\frac{W}{t}$, where $W$ is work (or energy) in joules and $t$ is time in seconds. SI unit is the watt (W).",
        hint: "Rate of doing work.",
      },
      {
        front: "What is the SI unit of power and its base-unit equivalent?",
        back: "The watt (W). $1\\\\,\\\\text{W} = 1\\\\,\\\\frac{\\\\text{J}}{\\\\text{s}} = 1\\\\,\\\\frac{\\\\text{kg}\\\\cdot\\\\text{m}^2}{\\\\text{s}^3}$.",
        hint: "One joule per second.",
      },
      {
        front: "Give the formula for instantaneous power in terms of force and velocity.",
        back: "$P = \\\\vec{F} \\\\cdot \\\\vec{v} = Fv\\\\cos\\\\theta$, where $F$ is the applied force, $v$ is the velocity, and $\\\\theta$ is the angle between force and velocity. Use it when force and velocity are known at an instant.",
        hint: "Force dotted with velocity.",
      },
      {
        front: "What is the difference between average power and instantaneous power?",
        back: "Average power is total work or energy divided by total time, $P_{avg} = \\\\frac{W}{t}$. Instantaneous power is the power at a specific moment, $P = \\\\frac{dW}{dt} = Fv\\\\cos\\\\theta$.",
        hint: "Over an interval vs. at an instant.",
      },
      {
        front: "How is the electrical power dissipated by a resistor expressed?",
        back: "$P = IV = I^2 R = \\\\frac{V^2}{R}$, where $I$ is current, $V$ is voltage across the element, and $R$ is resistance. Use whichever form matches the known quantities.",
        hint: "Three equivalent forms using I, V, R.",
      },
      {
        front: "What is a kilowatt-hour and is it a unit of power or energy?",
        back: "A kilowatt-hour is a unit of ENERGY, not power. $1\\\\,\\\\text{kWh} = (1000\\\\,\\\\text{W})(3600\\\\,\\\\text{s}) = 3.6 \\\\times 10^6\\\\,\\\\text{J}$. It is power multiplied by time.",
        hint: "Power times time equals energy.",
      },
      {
        front: "How do you convert horsepower to watts?",
        back: "$1\\\\,\\\\text{hp} \\\\approx 746\\\\,\\\\text{W}$. Horsepower is a non-SI unit of power.",
        hint: "About 746 watts.",
      },
      {
        front: "Worked example: A 60 kg person climbs 5 m of stairs in 4 s. What is the power output?",
        back: "Work against gravity: $W = mgh = (60)(9.8)(5) = 2940\\\\,\\\\text{J}$. Power: $P = \\\\frac{W}{t} = \\\\frac{2940}{4} = 735\\\\,\\\\text{W}$.",
        hint: "Find mgh, then divide by time.",
      },
      {
        front: "Worked example: A car engine exerts 2000 N to keep a car at constant 25 m/s. What power does it deliver?",
        back: "Force and velocity are parallel ($\\\\theta = 0$), so $P = Fv = (2000)(25) = 50000\\\\,\\\\text{W} = 50\\\\,\\\\text{kW}$.",
        hint: "Use P = Fv since they are aligned.",
      },
      {
        front: "Common trap: how does power relate to the slope of an energy-vs-time graph?",
        back: "Power is the slope of a work (or energy)-versus-time graph. The instantaneous power equals the tangent slope; average power equals the slope of the secant line between two times.",
        hint: "Slope of energy vs. time.",
      },
      {
        front: "If two motors do the same work but one takes half the time, how do their powers compare?",
        back: "The faster motor delivers twice the power. Power is inversely proportional to time for fixed work: $P = \\\\frac{W}{t}$, so halving $t$ doubles $P$.",
        hint: "Same work, half the time, double power.",
      },
      {
        front: "How is power connected to the work-energy theorem over time?",
        back: "Since net work equals change in kinetic energy, average net power equals $\\\\frac{\\\\Delta KE}{t}$. Power describes how quickly kinetic (or other) energy changes.",
        hint: "Rate of change of kinetic energy.",
      },
      {
        front: "Why does power depend on the angle between force and velocity?",
        back: "Only the component of force along the direction of motion does work, so $P = Fv\\\\cos\\\\theta$. A force perpendicular to motion ($\\\\theta = 90^\\\\circ$) delivers zero power.",
        hint: "Perpendicular force does no work.",
      },
    ],
  },
  {
    slug: "special-segments-triangles",
    cards: [
      {
        front: "What is a median of a triangle?",
        back: "A segment from a vertex to the midpoint of the opposite side. Every triangle has three medians, and they all meet at the centroid.",
        hint: "Vertex to opposite midpoint.",
      },
      {
        front: "What is the centroid and what special ratio does it create?",
        back: "The centroid is the intersection of the three medians and is the triangle's center of mass (balance point). It divides each median in a $2:1$ ratio, with the longer part toward the vertex.",
        hint: "Medians meet here; 2:1 ratio.",
      },
      {
        front: "What is an altitude of a triangle?",
        back: "A perpendicular segment from a vertex to the line containing the opposite side. The three altitudes meet at the orthocenter.",
        hint: "Vertex perpendicular to opposite side.",
      },
      {
        front: "What is the orthocenter, and where can it be located?",
        back: "The orthocenter is the intersection of the three altitudes. It is inside an acute triangle, on the right-angle vertex of a right triangle, and outside an obtuse triangle.",
        hint: "Altitudes meet here; position depends on triangle type.",
      },
      {
        front: "What is a perpendicular bisector of a triangle's side?",
        back: "A line perpendicular to a side at its midpoint. The three perpendicular bisectors meet at the circumcenter, which is equidistant from all three vertices.",
        hint: "Perpendicular at the midpoint.",
      },
      {
        front: "What is the circumcenter and what circle is associated with it?",
        back: "The circumcenter is the intersection of the perpendicular bisectors and is equidistant from all three vertices. It is the center of the circumscribed circle (circumcircle) that passes through all vertices.",
        hint: "Equidistant from vertices; center of circumcircle.",
      },
      {
        front: "What is an angle bisector of a triangle?",
        back: "A segment that divides a vertex angle into two equal angles. The three angle bisectors meet at the incenter.",
        hint: "Splits a vertex angle in half.",
      },
      {
        front: "What is the incenter and what circle is associated with it?",
        back: "The incenter is the intersection of the angle bisectors and is equidistant from all three sides. It is the center of the inscribed circle (incircle) tangent to each side.",
        hint: "Equidistant from sides; center of incircle.",
      },
      {
        front: "What is a midsegment of a triangle and its key theorem?",
        back: "A midsegment connects the midpoints of two sides. The Triangle Midsegment Theorem states it is parallel to the third side and exactly half its length.",
        hint: "Connects two midpoints; parallel and half.",
      },
      {
        front: "What is the Perpendicular Bisector Theorem?",
        back: "If a point lies on the perpendicular bisector of a segment, then it is equidistant from the segment's endpoints. The converse is also true.",
        hint: "On the bisector means equal distance to endpoints.",
      },
      {
        front: "What is the Angle Bisector Theorem (point version)?",
        back: "If a point lies on the bisector of an angle, then it is equidistant from the two sides of the angle. The converse holds as well.",
        hint: "On the bisector means equal distance to the sides.",
      },
      {
        front: "Common trap: which center is always inside the triangle?",
        back: "The centroid and the incenter are ALWAYS inside the triangle. The circumcenter and orthocenter can fall outside (for obtuse triangles).",
        hint: "Centroid and incenter never leave the triangle.",
      },
      {
        front: "Worked example: A median is 12 units long. How long is the segment from the centroid to the vertex?",
        back: "The centroid divides the median $2:1$ from the vertex. The vertex-to-centroid part is $\\\\frac{2}{3}$ of the median: $\\\\frac{2}{3}(12) = 8$ units. The other part is $4$ units.",
        hint: "2/3 of the median toward the vertex.",
      },
      {
        front: "Worked example: A midsegment is parallel to a side that measures 18. What is the midsegment's length?",
        back: "By the Midsegment Theorem the midsegment is half the third side: $\\\\frac{1}{2}(18) = 9$ units.",
        hint: "Half of the parallel side.",
      },
    ],
  },
  {
    slug: "apush-reconstruction",
    cards: [
      {
        front: "What years define the Reconstruction era?",
        back: "Reconstruction generally spans 1865-1877, from the end of the Civil War to the Compromise of 1877, when federal troops withdrew from the South.",
        hint: "End of the war to 1877.",
      },
      {
        front: "What were the three Reconstruction Amendments and what did each do?",
        back: "13th (1865) abolished slavery; 14th (1868) granted citizenship and equal protection/due process to all persons born in the US; 15th (1870) prohibited denying the vote based on race, color, or prior enslavement.",
        hint: "Abolish, citizenship, suffrage.",
      },
      {
        front: "How did Lincoln's and Johnson's Reconstruction plans differ from the Radical Republicans'?",
        back: "Lincoln's Ten Percent Plan and Johnson's lenient approach sought quick, forgiving readmission. Radical Republicans demanded stronger federal protection for freedpeople and harsher terms for former Confederates.",
        hint: "Lenient presidential vs. harsher congressional.",
      },
      {
        front: "What was the Freedmen's Bureau?",
        back: "A federal agency (1865) that provided food, education, medical care, and labor contract assistance to formerly enslaved people and poor whites in the South.",
        hint: "Aid agency for freedpeople.",
      },
      {
        front: "What were the Black Codes?",
        back: "Restrictive laws passed by Southern states in 1865-1866 to limit the freedom of formerly enslaved people, controlling labor, movement, and rights, effectively recreating conditions near slavery.",
        hint: "Southern laws restricting freedpeople.",
      },
      {
        front: "What was Radical (Congressional) Reconstruction?",
        back: "The period after 1867 when Congress took control, dividing the South into five military districts and requiring new state constitutions and ratification of the 14th Amendment for readmission.",
        hint: "Military districts and congressional control.",
      },
      {
        front: "Why was President Andrew Johnson impeached?",
        back: "Johnson was impeached in 1868 for violating the Tenure of Office Act by removing Secretary of War Edwin Stanton. The Senate acquitted him by one vote.",
        hint: "Tenure of Office Act; acquitted by one vote.",
      },
      {
        front: "What was sharecropping and what was its effect?",
        back: "A labor system where freedpeople and poor whites farmed land owned by others in exchange for a share of the crop. Debt and exploitative terms trapped many in a cycle of poverty resembling economic bondage.",
        hint: "Farm for a share of the crop; led to debt cycles.",
      },
      {
        front: "Who were the Ku Klux Klan during Reconstruction?",
        back: "A white supremacist terrorist group founded in 1866 that used violence and intimidation to suppress Black political participation and restore white Democratic control of the South.",
        hint: "White supremacist terror group.",
      },
      {
        front: "What was the Compromise of 1877?",
        back: "An informal deal resolving the disputed 1876 election: Republican Rutherford B. Hayes became president, and in exchange federal troops were withdrawn from the South, effectively ending Reconstruction.",
        hint: "Settled the disputed 1876 election; ended Reconstruction.",
      },
      {
        front: "What were 'redeemers' and 'redemption'?",
        back: "Redeemers were Southern white Democrats who 'redeemed' (regained) political control of Southern state governments from Republicans, often through violence and fraud, ending Reconstruction reforms.",
        hint: "Democrats reclaiming Southern governments.",
      },
      {
        front: "How did Reconstruction expand and then fail to protect Black political participation?",
        back: "Black men voted, held office (including in Congress), and built schools and churches. But by 1877, violence, disenfranchisement, and Jim Crow laws stripped most of these gains for nearly a century.",
        hint: "Real gains reversed by 1877 and after.",
      },
      {
        front: "What did the Civil Rights Act of 1866 establish?",
        back: "It declared all persons born in the US (except Native Americans) citizens with equal civil rights, countering the Black Codes. Its principles were later embedded in the 14th Amendment.",
        hint: "Citizenship and equal civil rights; basis for 14th Amendment.",
      },
      {
        front: "Common trap: did the 15th Amendment guarantee voting for everyone?",
        back: "No. It only barred denying the vote based on race, color, or previous servitude. It did not protect women, and Southern states later used poll taxes, literacy tests, and grandfather clauses to disenfranchise Black men.",
        hint: "Race-based denial only; loopholes remained.",
      },
    ],
  },
  {
    slug: "csp-collaboration-development",
    cards: [
      {
        front: "What is collaboration in software development and why does AP CSP emphasize it?",
        back: "Collaboration is working together with diverse perspectives to design, develop, and test programs. Diverse teams reduce bias, catch more errors, and produce more usable solutions.",
        hint: "Diverse teams build better software.",
      },
      {
        front: "What are the phases of the iterative software development process?",
        back: "Investigating/reflecting, designing, prototyping, and testing, repeated in cycles. Development is iterative and incremental, returning to earlier phases to refine the program.",
        hint: "Investigate, design, prototype, test, repeat.",
      },
      {
        front: "What is a program requirement (specification)?",
        back: "A description of what a program should do, defining the desired behavior and constraints. Requirements guide design and provide criteria for testing whether the program works correctly.",
        hint: "What the program must do.",
      },
      {
        front: "What is the difference between a syntax error and a logic error?",
        back: "A syntax error violates the language's grammar rules and prevents the program from running. A logic error lets the program run but produces incorrect or unintended results.",
        hint: "Won't run vs. runs wrong.",
      },
      {
        front: "What is a runtime error?",
        back: "An error that occurs while a program is executing, such as dividing by zero or accessing an invalid index, causing the program to crash or behave unexpectedly.",
        hint: "Error during execution.",
      },
      {
        front: "What is program documentation and why does it matter?",
        back: "Documentation is written descriptions (often comments) explaining what code does and how to use it. It helps collaborators understand, maintain, and extend the program, and should be added throughout development.",
        hint: "Explanations that aid maintenance.",
      },
      {
        front: "What is a comment in code, and is it executed?",
        back: "A comment is text in the source code that explains the program for human readers. It is ignored by the interpreter/compiler and is NOT executed.",
        hint: "Human-readable, not run.",
      },
      {
        front: "What does it mean to test a program with edge cases?",
        back: "Testing with edge cases means using inputs at the boundaries or extremes of valid input (e.g., empty, minimum, maximum, or unusual values) to find errors that typical inputs miss.",
        hint: "Boundary and extreme inputs.",
      },
      {
        front: "What is a use case in program design?",
        back: "A description of how a user will interact with a program to accomplish a goal. Use cases help define requirements and ensure the program meets real user needs.",
        hint: "How a user achieves a goal.",
      },
      {
        front: "What role do different team perspectives play in reducing program bias?",
        back: "Developers' assumptions can introduce bias affecting who the software serves. Collaborating with people of varied backgrounds surfaces overlooked needs and reduces unintended harm or exclusion.",
        hint: "Diverse input limits blind spots.",
      },
      {
        front: "What is the purpose of breaking a problem into smaller subproblems during development?",
        back: "Decomposition makes a complex problem manageable, lets team members work on different parts in parallel, and makes code easier to test, debug, and reuse.",
        hint: "Divide and conquer.",
      },
      {
        front: "What is incremental development?",
        back: "Building a program in small, testable pieces, verifying each part works before adding the next. This makes errors easier to locate and the project easier to manage.",
        hint: "Build and test piece by piece.",
      },
      {
        front: "Why is acknowledging collaborators and sources important in CSP?",
        back: "Giving credit respects intellectual property and the contributions of others. The AP CSP Create task requires you to acknowledge code or ideas that are not your own.",
        hint: "Credit others' work and code.",
      },
      {
        front: "Common trap: does adding more programmers always speed up development?",
        back: "No. More people add communication and coordination overhead. Effective collaboration depends on clear roles, communication, and well-decomposed tasks, not just team size.",
        hint: "Coordination overhead can offset added people.",
      },
    ],
  },
  {
    slug: "csa-inheritance-polymorphism",
    cards: [
      {
        front: "What is inheritance in Java?",
        back: "A mechanism where a subclass acquires the fields and methods of a superclass using the extends keyword. It models an 'is-a' relationship and promotes code reuse.",
        hint: "Subclass extends superclass; 'is-a'.",
      },
      {
        front: "What does the super keyword do in a subclass?",
        back: "It refers to the superclass. super(args) calls a superclass constructor (must be the first statement in the subclass constructor), and super.method() calls the superclass version of a method.",
        hint: "Accesses the parent's constructor or methods.",
      },
      {
        front: "What is method overriding?",
        back: "Defining a method in a subclass with the same signature (name and parameters) as a method in its superclass, replacing the inherited behavior. The @Override annotation documents this.",
        hint: "Same signature, new behavior in subclass.",
      },
      {
        front: "What is the difference between overriding and overloading?",
        back: "Overriding redefines an inherited method with the SAME signature in a subclass. Overloading defines multiple methods with the same name but DIFFERENT parameter lists in the same class.",
        hint: "Same signature (subclass) vs. different parameters.",
      },
      {
        front: "What is polymorphism in Java?",
        back: "The ability for a single reference type to refer to objects of different subclasses, with the actual method that runs determined at runtime by the object's type, not the reference type.",
        hint: "One reference, many object types.",
      },
      {
        front: "What is dynamic (late) binding?",
        back: "At runtime Java decides which overridden method to execute based on the actual object type, not the declared reference type. This is what makes polymorphism work.",
        hint: "Method chosen at runtime by object type.",
      },
      {
        front: "If Animal a = new Dog(); and Dog overrides speak(), which speak() runs?",
        back: "Dog's speak() runs. Because of dynamic binding, the actual object type (Dog) determines the overridden method called, even though the reference type is Animal.",
        hint: "The object's type wins, not the reference type.",
      },
      {
        front: "Why is Object the superclass of all classes, and what method is often overridden from it?",
        back: "Every class inherits from Object directly or indirectly. The toString() method is commonly overridden to give a meaningful String representation; equals() is also often overridden.",
        hint: "Root of all classes; override toString.",
      },
      {
        front: "What does it mean that a subclass reference can be assigned to a superclass variable?",
        back: "Upcasting is allowed implicitly: a subclass object 'is-a' superclass object, so Animal a = new Dog(); is valid. The reference can only call methods declared in the superclass type (unless cast).",
        hint: "Upcasting is automatic; calls limited to superclass methods.",
      },
      {
        front: "When do you need an explicit cast with inheritance?",
        back: "When converting a superclass reference back to a subclass type (downcasting) to access subclass-specific methods, e.g., ((Dog) a).fetch(). An invalid cast throws a ClassCastException.",
        hint: "Downcasting needs an explicit cast.",
      },
      {
        front: "What happens if a subclass does not call super() explicitly in its constructor?",
        back: "Java automatically inserts a call to the superclass's no-argument constructor super() as the first line. If the superclass has no no-arg constructor, the code will not compile.",
        hint: "Implicit super() requires a no-arg parent constructor.",
      },
      {
        front: "Worked example: Class Shape has area(); Square overrides it. For Shape s = new Square(4); what does s.area() return?",
        back: "It returns the Square's area, $4 \\\\times 4 = 16$. Dynamic binding calls Square's overridden area() because the object is a Square.",
        hint: "Overridden Square.area() runs.",
      },
      {
        front: "Common trap: which methods can a superclass reference call on a subclass object?",
        back: "Only methods declared in the superclass (or Object). It cannot directly call subclass-only methods without a cast, even though the object actually is a subclass instance.",
        hint: "Limited to the reference type's methods.",
      },
      {
        front: "Why does overriding toString() matter for printing objects?",
        back: "When you print an object, Java calls its toString(). Without overriding it, you get the default Object output (class name and hash). Overriding gives a readable, meaningful description.",
        hint: "Printing calls toString implicitly.",
      },
    ],
  },
  {
    slug: "solving-graphing-inequalities-prealg",
    cards: [
      {
        front: "What does it mean to solve an inequality?",
        back: "To find all values of the variable that make the inequality true. The solution is usually a range of values, not a single number.",
        hint: "Find all values that work.",
      },
      {
        front: "What are the four inequality symbols and their meanings?",
        back: "$<$ less than, $>$ greater than, $\\\\leq$ less than or equal to, $\\\\geq$ greater than or equal to. The 'or equal to' symbols include the boundary value.",
        hint: "Less, greater, and the 'or equal' versions.",
      },
      {
        front: "What is the most important rule when multiplying or dividing an inequality by a negative number?",
        back: "You must FLIP the inequality symbol. For example, $-2x < 6$ becomes $x > -3$ after dividing both sides by $-2$.",
        hint: "Negative multiply/divide flips the sign.",
      },
      {
        front: "Do you flip the inequality sign when adding or subtracting?",
        back: "No. Adding or subtracting the same value from both sides keeps the inequality direction the same. Only multiplying or dividing by a negative flips it.",
        hint: "Add/subtract never flips.",
      },
      {
        front: "How do you graph an inequality on a number line with < or >?",
        back: "Use an OPEN circle at the boundary value (the value is not included) and shade in the direction of the solution.",
        hint: "Open circle for strict inequalities.",
      },
      {
        front: "How do you graph an inequality with $\\\\leq$ or $\\\\geq$ on a number line?",
        back: "Use a CLOSED (filled) circle at the boundary value (the value is included) and shade toward the solution set.",
        hint: "Closed circle includes the endpoint.",
      },
      {
        front: "Which way do you shade on the number line for x > 3 versus x < 3?",
        back: "For $x > 3$, shade to the RIGHT (larger numbers). For $x < 3$, shade to the LEFT (smaller numbers).",
        hint: "Greater shades right, less shades left.",
      },
      {
        front: "Worked example: Solve $3x + 5 \\\\geq 14$.",
        back: "Subtract 5: $3x \\\\geq 9$. Divide by 3 (positive, no flip): $x \\\\geq 3$. Graph with a closed circle at 3 and shade right.",
        hint: "Subtract 5, then divide by 3.",
      },
      {
        front: "Worked example: Solve $-4x < 12$.",
        back: "Divide both sides by $-4$, which flips the sign: $x > -3$. Graph with an open circle at $-3$ and shade right.",
        hint: "Dividing by -4 flips < to >.",
      },
      {
        front: "How do you check a solution to an inequality?",
        back: "Pick a value from your solution region and substitute it into the original inequality. If it makes a true statement, your solution direction is likely correct.",
        hint: "Test a point from your answer.",
      },
      {
        front: "What is a compound inequality of the form a < x < b?",
        back: "It means x is between a and b: x is greater than a AND less than b. Its graph is the segment between the two boundary points.",
        hint: "x is between two values.",
      },
      {
        front: "How do you solve a two-step inequality like 2x - 7 < 5?",
        back: "Undo addition/subtraction first, then multiplication/division. Add 7: $2x < 12$. Divide by 2: $x < 6$. No flip since 2 is positive.",
        hint: "Add first, then divide.",
      },
      {
        front: "Common trap: in 5 > x, which direction does x go?",
        back: "Rewrite it as $x < 5$ by reading from the variable's side. So x is less than 5; graph with an open circle at 5 shading left. Reading the original backwards is a common error.",
        hint: "Flip the reading: 5 > x means x < 5.",
      },
      {
        front: "How does graphing an inequality differ from graphing an equation's solution?",
        back: "An equation usually has one solution shown as a single point. An inequality has a range of solutions shown as a shaded ray or segment with an open or closed endpoint.",
        hint: "Single point vs. shaded range.",
      },
    ],
  },
];
