export const batchCards: { slug: string; cards: { front: string; back: string; hint?: string }[] }[] = [
  {
    slug: "coordinate-plane-graphing-grade5",
    cards: [
      {
        front: "What is the coordinate plane?",
        back: "A flat surface formed by two number lines that cross at a right angle. The horizontal line is the x-axis and the vertical line is the y-axis.",
        hint: "Two number lines meeting at a corner.",
      },
      {
        front: "What is the origin?",
        back: "The point where the x-axis and y-axis cross. Its coordinates are $(0, 0)$.",
        hint: "The starting point.",
      },
      {
        front: "What is an ordered pair?",
        back: "Two numbers written in a set order, like $(3, 5)$, that tell the location of a point. The first number is the x-coordinate and the second is the y-coordinate.",
        hint: "Order matters.",
      },
      {
        front: "In the ordered pair $(4, 7)$, what does each number mean?",
        back: "The 4 is the x-coordinate (move right 4 from the origin) and the 7 is the y-coordinate (move up 7).",
        hint: "Across first, then up.",
      },
      {
        front: "How do you plot a point from an ordered pair?",
        back: "Start at the origin. Move right (or left) the amount of the x-coordinate, then move up (or down) the amount of the y-coordinate, and mark the point.",
        hint: "x first, then y.",
      },
      {
        front: "What is a common mistake when reading ordered pairs?",
        back: "Mixing up the order. The point $(3, 5)$ is NOT the same as $(5, 3)$. Always do x (across) first, then y (up).",
        hint: "Don't swap the numbers.",
      },
      {
        front: "Where is the point $(0, 6)$ located?",
        back: "On the y-axis, 6 units up from the origin. Because the x-coordinate is 0, you don't move left or right at all.",
        hint: "x is 0, so stay on the y-axis.",
      },
      {
        front: "Where is the point $(8, 0)$ located?",
        back: "On the x-axis, 8 units to the right of the origin. Because the y-coordinate is 0, you don't move up or down.",
        hint: "y is 0, so stay on the x-axis.",
      },
      {
        front: "What is the x-axis and what is the y-axis?",
        back: "The x-axis is the horizontal (side-to-side) number line. The y-axis is the vertical (up-and-down) number line.",
        hint: "Horizontal vs. vertical.",
      },
      {
        front: "Plot the point $(2, 5)$. Describe the moves.",
        back: "From the origin, move 2 units to the right, then 5 units up, and place the point there.",
        hint: "Right 2, up 5.",
      },
      {
        front: "How can a coordinate grid show a real-world map?",
        back: "Each location is given an ordered pair. For example, a library at $(3, 4)$ means 3 blocks right and 4 blocks up from a starting corner.",
        hint: "Coordinates name a spot.",
      },
      {
        front: "If you graph $(1,2)$, $(2,4)$, and $(3,6)$, what pattern do you see?",
        back: "Each y-coordinate is double its x-coordinate. The points line up to form a straight line going up.",
        hint: "y is twice x.",
      },
    ],
  },
  {
    slug: "dividing-decimals-grade5",
    cards: [
      {
        front: "What does it mean to divide decimals?",
        back: "Splitting a decimal number into equal parts, just like whole-number division, but keeping track of the decimal point.",
        hint: "Same idea as whole-number division.",
      },
      {
        front: "How do you divide a decimal by a whole number, like $7.5 \\\\div 5$?",
        back: "Divide as usual and bring the decimal point straight up into the quotient. $7.5 \\\\div 5 = 1.5$.",
        hint: "Decimal point goes straight up.",
      },
      {
        front: "How do you divide by a decimal, like $6 \\\\div 0.2$?",
        back: "Move the decimal in the divisor to make it a whole number, then move the dividend's decimal the same number of places. $6 \\\\div 0.2$ becomes $60 \\\\div 2 = 30$.",
        hint: "Make the divisor a whole number.",
      },
      {
        front: "Why does moving the decimal the same number of places in both numbers work?",
        back: "It is the same as multiplying both numbers by 10, 100, etc. Multiplying the top and bottom by the same amount keeps the answer the same.",
        hint: "You scale both numbers equally.",
      },
      {
        front: "Divide $0.84 \\\\div 0.4$.",
        back: "Move both decimals one place: $8.4 \\\\div 4 = 2.1$.",
        hint: "Make 0.4 into 4.",
      },
      {
        front: "What do you do if a division does not come out evenly?",
        back: "Add zeros after the decimal point in the dividend and keep dividing until it ends or you reach the needed number of decimal places.",
        hint: "Annex zeros and keep going.",
      },
      {
        front: "Estimate $35.2 \\\\div 6.9$ before computing. Why estimate?",
        back: "Round to $35 \\\\div 7 = 5$. Estimating checks if your final answer is reasonable and catches misplaced decimal points.",
        hint: "Round to friendly numbers.",
      },
      {
        front: "What is a common mistake when dividing decimals?",
        back: "Forgetting to move the dividend's decimal the same number of places as the divisor's, or putting the decimal in the wrong spot in the quotient.",
        hint: "Move both, line up the point.",
      },
      {
        front: "Divide $9 \\\\div 0.05$.",
        back: "Move both decimals two places: $900 \\\\div 5 = 180$.",
        hint: "0.05 has two decimal places.",
      },
      {
        front: "How do you divide a decimal by 10, 100, or 1000?",
        back: "Move the decimal point to the left: one place for 10, two for 100, three for 1000. For example, $4.5 \\\\div 100 = 0.045$.",
        hint: "Shift left by the number of zeros.",
      },
      {
        front: "A ribbon 8.4 m long is cut into pieces 0.6 m each. How many pieces?",
        back: "$8.4 \\\\div 0.6 = 84 \\\\div 6 = 14$ pieces.",
        hint: "Make the divisor whole first.",
      },
      {
        front: "How can you check a decimal division answer?",
        back: "Multiply the quotient by the divisor; you should get the dividend. For $1.5 \\\\times 5 = 7.5$, the division $7.5 \\\\div 5 = 1.5$ is correct.",
        hint: "Multiply to undo division.",
      },
      {
        front: "Divide $0.144 \\\\div 1.2$.",
        back: "Move both decimals one place: $1.44 \\\\div 12 = 0.12$.",
        hint: "Make 1.2 into 12.",
      },
    ],
  },
  {
    slug: "enolate-chemistry",
    cards: [
      {
        front: "What is an enolate?",
        back: "A resonance-stabilized anion formed by removing an acidic alpha-hydrogen from a carbonyl compound. The negative charge is delocalized between the alpha-carbon and the oxygen.",
        hint: "Deprotonate alpha to C=O.",
      },
      {
        front: "Why are alpha-hydrogens acidic (pKa around 20 for ketones)?",
        back: "Removal gives an enolate whose negative charge is delocalized onto the electronegative oxygen by resonance, stabilizing the conjugate base.",
        hint: "Resonance onto oxygen.",
      },
      {
        front: "What is keto-enol tautomerism?",
        back: "An equilibrium between the keto form (C=O with alpha C-H) and the enol form (C=C-OH). They are constitutional isomers (tautomers) interconverting by proton transfer. The keto form is usually favored.",
        hint: "Proton hops; double bond moves.",
      },
      {
        front: "What base is used to form an enolate quantitatively, and why?",
        back: "LDA (lithium diisopropylamide), a strong, bulky, non-nucleophilic base (conjugate acid pKa about 36). It fully deprotonates the carbonyl without adding to it.",
        hint: "Strong, hindered, non-nucleophilic.",
      },
      {
        front: "Kinetic vs. thermodynamic enolate: how do you favor each?",
        back: "Kinetic enolate: LDA at low temperature ($-78\\\\,^{\\\\circ}\\\\mathrm{C}$) removes the least hindered proton, giving the less-substituted enolate. Thermodynamic enolate: weaker base, higher temperature, equilibrium gives the more-substituted, more stable enolate.",
        hint: "LDA/cold = less substituted.",
      },
      {
        front: "What is the aldol reaction?",
        back: "An enolate adds to the carbonyl of another aldehyde/ketone, forming a beta-hydroxy carbonyl compound (an aldol). It builds a new C-C bond.",
        hint: "Enolate + carbonyl = beta-hydroxy carbonyl.",
      },
      {
        front: "What is the aldol condensation?",
        back: "An aldol product undergoes E1cb dehydration (loss of water) to give an alpha,beta-unsaturated carbonyl compound (enone). Heat or base drives the elimination.",
        hint: "Aldol then lose water.",
      },
      {
        front: "What is the Claisen condensation?",
        back: "An ester enolate attacks another ester; loss of an alkoxide leaving group gives a beta-keto ester. Requires an alkoxide base matching the ester's alkoxy group.",
        hint: "Two esters give a beta-keto ester.",
      },
      {
        front: "Why is a beta-dicarbonyl proton (pKa around 9-11) much more acidic than an ordinary alpha-H?",
        back: "Its enolate is stabilized by resonance delocalization onto two flanking carbonyl oxygens, not just one, greatly stabilizing the anion.",
        hint: "Two carbonyls share the charge.",
      },
      {
        front: "What is alpha-halogenation, and what is the haloform reaction?",
        back: "Under base, the enolate reacts with halogen at the alpha position. Methyl ketones undergo triple halogenation then C-C cleavage (haloform reaction) to give a carboxylate and CHX3 (e.g., CHI3).",
        hint: "Methyl ketone + X2/base.",
      },
      {
        front: "What does the malonic ester synthesis make?",
        back: "Substituted acetic (carboxylic) acids. Deprotonate diethyl malonate, alkylate with R-X, then hydrolyze and decarboxylate the resulting beta-diacid.",
        hint: "Build carboxylic acids via alkylation.",
      },
      {
        front: "What does the acetoacetic ester synthesis make?",
        back: "Substituted methyl ketones. Deprotonate ethyl acetoacetate, alkylate, then hydrolyze and decarboxylate the beta-keto acid.",
        hint: "Build methyl ketones.",
      },
      {
        front: "What is the Michael reaction?",
        back: "A stabilized (soft) enolate adds in 1,4 (conjugate) fashion to an alpha,beta-unsaturated carbonyl (Michael acceptor), forming a new C-C bond at the beta-carbon.",
        hint: "1,4-conjugate addition of an enolate.",
      },
      {
        front: "Common trap: why use an unsymmetrical ketone carefully in aldol reactions?",
        back: "It can form two different enolates and lead to mixtures or self-condensation. Use LDA for a specific kinetic enolate, or a directed/crossed aldol with one component lacking alpha-Hs.",
        hint: "Control which enolate forms.",
      },
    ],
  },
  {
    slug: "aas-transatlantic-slave-trade",
    cards: [
      {
        front: "What was the transatlantic slave trade?",
        back: "The forced transport of an estimated 12.5 million enslaved Africans across the Atlantic from roughly the 1500s to the 1800s to labor in the Americas, primarily on plantations.",
        hint: "Africa to the Americas by force.",
      },
      {
        front: "What was the Middle Passage?",
        back: "The brutal sea voyage from Africa to the Americas, the middle leg of the triangular trade. Enslaved people were packed below deck in horrific conditions; about 1.8 million died en route.",
        hint: "The ocean crossing.",
      },
      {
        front: "What was the triangular trade?",
        back: "A three-legged Atlantic trade network: manufactured goods from Europe to Africa, enslaved Africans to the Americas (Middle Passage), and raw materials (sugar, tobacco, cotton) back to Europe.",
        hint: "Three legs, three continents.",
      },
      {
        front: "How many enslaved Africans were brought directly to mainland North America versus the whole trade?",
        back: "Roughly 388,000 (about 3-4 percent) of the 12.5 million were taken directly to mainland North America; the vast majority went to Brazil and the Caribbean.",
        hint: "A small share came to the U.S.",
      },
      {
        front: "What is the significance of the partus sequitur ventrem doctrine (1662, Virginia)?",
        back: "It declared that a child's enslaved or free status followed the mother's, making slavery hereditary and matrilineal and ensuring the enslaved population reproduced itself.",
        hint: "Status follows the mother.",
      },
      {
        front: "What was the domestic (internal) slave trade?",
        back: "After the 1808 ban on importing enslaved people, a large internal trade forcibly moved roughly one million enslaved people from the Upper South to the Deep South (the 'Second Middle Passage').",
        hint: "Sold 'down the river.'",
      },
      {
        front: "When did the U.S. ban the importation of enslaved Africans?",
        back: "In 1808, the earliest date allowed by the Constitution (Article I, Section 9). Illegal smuggling, however, continued for decades.",
        hint: "Constitutionally set date.",
      },
      {
        front: "What was Olaudah Equiano's contribution?",
        back: "His 1789 autobiography, 'The Interesting Narrative,' gave a firsthand account of the Middle Passage and enslavement and became a powerful tool of the British abolitionist movement.",
        hint: "Famous slave narrative author.",
      },
      {
        front: "What were 'slave castles' or factories on the African coast?",
        back: "Fortified holding sites (e.g., Elmina, Cape Coast Castle, Gorée Island) where captured Africans were imprisoned in dungeons before being loaded onto ships.",
        hint: "Coastal holding forts.",
      },
      {
        front: "How did the slave trade shape African American culture?",
        back: "Enslaved people from many regions blended diverse African languages, religions, foodways, and music, producing new creolized cultures such as Gullah-Geechee in the Lowcountry.",
        hint: "Cultural retention and blending.",
      },
      {
        front: "What forms of resistance occurred during the trade?",
        back: "Shipboard revolts (e.g., the Amistad, 1839), refusal to eat, suicide, and maintaining cultural and family ties despite efforts to erase identity.",
        hint: "Resistance began on the ships.",
      },
      {
        front: "What is the economic legacy of the transatlantic slave trade?",
        back: "Enslaved labor produced the cash crops (sugar, tobacco, cotton) that fueled Atlantic capitalism and the wealth of European and American economies, a key debate in studies of slavery and capitalism.",
        hint: "Slavery and the rise of capitalism.",
      },
      {
        front: "What does the term 'social death' (Orlando Patterson) describe?",
        back: "The condition of enslaved people who were violently uprooted, denied legal personhood, kinship rights, and ancestral ties, and treated as property rather than members of society.",
        hint: "Stripped of social belonging.",
      },
    ],
  },
  {
    slug: "antiderivatives-indefinite-integrals-calcab",
    cards: [
      {
        front: "What is an antiderivative of a function $f$?",
        back: "A function $F$ such that $F'(x) = f(x)$. If $F$ is one antiderivative, then every antiderivative has the form $F(x) + C$ for a constant $C$.",
        hint: "Reverse of differentiation.",
      },
      {
        front: "What is the indefinite integral $\\\\int f(x)\\\\,dx$?",
        back: "The family of all antiderivatives of $f$: $\\\\int f(x)\\\\,dx = F(x) + C$ where $F'(x)=f(x)$. The $+C$ is the constant of integration.",
        hint: "Always include $+C$.",
      },
      {
        front: "Why must you include $+C$?",
        back: "Because any constant differentiates to 0, infinitely many functions share the same derivative. Omitting $+C$ is a very common point-losing error on the AP exam.",
        hint: "Constants vanish under differentiation.",
      },
      {
        front: "State the power rule for integration.",
        back: "$\\\\int x^{n}\\\\,dx = \\\\dfrac{x^{n+1}}{n+1} + C$ for $n \\\\neq -1$. Add one to the exponent and divide by the new exponent.",
        hint: "Add one, divide by new power.",
      },
      {
        front: "What is $\\\\int x^{-1}\\\\,dx$ (the exception to the power rule)?",
        back: "$\\\\int \\\\dfrac{1}{x}\\\\,dx = \\\\ln|x| + C$. The absolute value is required so it is valid for negative $x$.",
        hint: "n = -1 gives a log.",
      },
      {
        front: "What are $\\\\int e^{x}\\\\,dx$ and $\\\\int a^{x}\\\\,dx$?",
        back: "$\\\\int e^{x}\\\\,dx = e^{x} + C$ and $\\\\int a^{x}\\\\,dx = \\\\dfrac{a^{x}}{\\\\ln a} + C$.",
        hint: "Exponentials integrate to exponentials.",
      },
      {
        front: "List the basic trig integrals for $\\\\sin x$ and $\\\\cos x$.",
        back: "$\\\\int \\\\cos x\\\\,dx = \\\\sin x + C$ and $\\\\int \\\\sin x\\\\,dx = -\\\\cos x + C$. Watch the sign on the sine integral.",
        hint: "Sine integral picks up a minus sign.",
      },
      {
        front: "What is $\\\\int \\\\sec^{2}x\\\\,dx$?",
        back: "$\\\\int \\\\sec^{2}x\\\\,dx = \\\\tan x + C$, since $\\\\dfrac{d}{dx}\\\\tan x = \\\\sec^{2}x$.",
        hint: "Derivative of tangent reversed.",
      },
      {
        front: "What are the two integrals giving inverse trig functions on the AB exam?",
        back: "$\\\\int \\\\dfrac{1}{1+x^{2}}\\\\,dx = \\\\arctan x + C$ and $\\\\int \\\\dfrac{1}{\\\\sqrt{1-x^{2}}}\\\\,dx = \\\\arcsin x + C$.",
        hint: "1+x^2 gives arctan.",
      },
      {
        front: "How do u-substitution steps work?",
        back: "Choose $u = g(x)$, compute $du = g'(x)\\\\,dx$, rewrite the integral entirely in $u$, integrate, then substitute back. Use it when the integrand contains a function and (a multiple of) its derivative.",
        hint: "Pick u as the inside function.",
      },
      {
        front: "Evaluate $\\\\int 2x\\\\cos(x^{2})\\\\,dx$.",
        back: "Let $u = x^{2}$, so $du = 2x\\\\,dx$. Then $\\\\int \\\\cos u\\\\,du = \\\\sin u + C = \\\\sin(x^{2}) + C$.",
        hint: "u = the inside of cosine.",
      },
      {
        front: "What is the constant-multiple and sum rule for integrals?",
        back: "$\\\\int k\\\\,f(x)\\\\,dx = k\\\\int f(x)\\\\,dx$ and $\\\\int [f(x)\\\\pm g(x)]\\\\,dx = \\\\int f(x)\\\\,dx \\\\pm \\\\int g(x)\\\\,dx$. Constants factor out and sums split.",
        hint: "Linearity of integration.",
      },
      {
        front: "Common trap: is $\\\\int f(x)g(x)\\\\,dx = \\\\left(\\\\int f\\\\,dx\\\\right)\\\\left(\\\\int g\\\\,dx\\\\right)$?",
        back: "No. There is no product rule for integration. You must use u-substitution, rewrite algebraically, or (on BC) integration by parts.",
        hint: "Integrals do not multiply.",
      },
      {
        front: "Find $f(x)$ if $f'(x) = 6x^{2}$ and $f(1) = 5$.",
        back: "Integrate: $f(x) = 2x^{3} + C$. Use $f(1)=5$: $2 + C = 5$, so $C = 3$ and $f(x) = 2x^{3} + 3$.",
        hint: "Integrate, then solve for C.",
      },
    ],
  },
  {
    slug: "differential-equations-calcab",
    cards: [
      {
        front: "What is a differential equation?",
        back: "An equation involving a function and its derivatives, such as $\\\\dfrac{dy}{dx} = ky$. A solution is a function (not a number) that satisfies the equation.",
        hint: "An equation with a derivative in it.",
      },
      {
        front: "What is a slope field (direction field)?",
        back: "A grid of short line segments whose slopes equal $\\\\dfrac{dy}{dx}$ at each point. It visualizes the family of solution curves without solving the equation.",
        hint: "Tiny slope marks on a grid.",
      },
      {
        front: "How do you read a particular solution from a slope field?",
        back: "Start at the given initial-condition point and sketch a curve that follows the segment slopes, staying parallel to nearby segments.",
        hint: "Follow the segments from your point.",
      },
      {
        front: "What is a separable differential equation, and how do you solve it?",
        back: "One that can be written $\\\\dfrac{dy}{dx} = g(x)h(y)$. Separate variables to $\\\\dfrac{1}{h(y)}\\\\,dy = g(x)\\\\,dx$, integrate both sides, add $+C$, then solve for $y$.",
        hint: "Get all y on one side, x on the other.",
      },
      {
        front: "Solve $\\\\dfrac{dy}{dx} = \\\\dfrac{x}{y}$.",
        back: "Separate: $y\\\\,dy = x\\\\,dx$. Integrate: $\\\\dfrac{y^{2}}{2} = \\\\dfrac{x^{2}}{2} + C$, so $y^{2} = x^{2} + C_{1}$.",
        hint: "Multiply both sides by y dx.",
      },
      {
        front: "Why do you add $+C$ before applying the initial condition?",
        back: "The constant of integration carries the initial information. You evaluate the antiderivatives, then plug in the initial point to solve for $C$ and get the particular solution.",
        hint: "C is found from the initial condition.",
      },
      {
        front: "What is the exponential growth/decay model?",
        back: "When $\\\\dfrac{dy}{dt} = ky$, the solution is $y = y_{0}e^{kt}$, where $y_{0}$ is the initial amount and $k$ is the growth ($k>0$) or decay ($k<0$) constant.",
        hint: "Rate proportional to amount.",
      },
      {
        front: "In $y = y_{0}e^{kt}$, what do $y_{0}$ and $k$ represent and where do they come from?",
        back: "$y_{0}$ is the value at $t=0$ (initial condition); $k$ is the proportionality constant, usually found from a second data point. Both come from the problem's given information.",
        hint: "Initial value and rate constant.",
      },
      {
        front: "Solve $\\\\dfrac{dy}{dx} = 2xy$ with $y(0) = 3$.",
        back: "Separate: $\\\\dfrac{1}{y}\\\\,dy = 2x\\\\,dx$, integrate: $\\\\ln|y| = x^{2} + C$, so $y = Ae^{x^{2}}$. Using $y(0)=3$ gives $A=3$, so $y = 3e^{x^{2}}$.",
        hint: "Exponentiate after integrating.",
      },
      {
        front: "What is Euler's method (AB optional / common idea)?",
        back: "A numerical way to approximate a solution: from $(x_{n}, y_{n})$, take $y_{n+1} = y_{n} + \\\\frac{dy}{dx}\\\\cdot \\\\Delta x$, stepping along tangent lines with step size $\\\\Delta x$.",
        hint: "March forward along tangent lines.",
      },
      {
        front: "Common trap: forgetting absolute value or the $\\\\pm$ when solving $\\\\ln|y|$ equations.",
        back: "After $\\\\ln|y| = \\\\ldots$, exponentiating gives $|y| = e^{\\\\ldots}$. Combine the sign into a single constant $A$ and use the initial condition to fix its sign.",
        hint: "Fold the sign into the constant.",
      },
      {
        front: "How do you verify that a function is a solution to a differential equation?",
        back: "Differentiate the proposed function and substitute it and its derivative into the equation. If both sides are equal for all $x$, it is a solution.",
        hint: "Plug it back in.",
      },
      {
        front: "Population grows so $\\\\frac{dP}{dt}=0.05P$. If $P(0)=200$, find $P(t)$.",
        back: "$P(t) = 200e^{0.05t}$. Here $k=0.05$ (5 percent growth) and $P_{0}=200$.",
        hint: "Use the growth formula directly.",
      },
    ],
  },
  {
    slug: "accumulation-functions-calcab",
    cards: [
      {
        front: "What is an accumulation function?",
        back: "A function defined by a definite integral with a variable upper limit: $g(x) = \\\\int_{a}^{x} f(t)\\\\,dt$. It accumulates the (signed) area under $f$ from $a$ to $x$.",
        hint: "Area built up as the upper limit moves.",
      },
      {
        front: "State the Fundamental Theorem of Calculus, Part 1, for accumulation functions.",
        back: "If $g(x) = \\\\int_{a}^{x} f(t)\\\\,dt$, then $g'(x) = f(x)$. The derivative of the accumulation function is the original integrand evaluated at the upper limit.",
        hint: "Derivative undoes the integral.",
      },
      {
        front: "If $g(x) = \\\\int_{2}^{x} f(t)\\\\,dt$, what is $g(2)$?",
        back: "$g(2) = \\\\int_{2}^{2} f(t)\\\\,dt = 0$. When the limits are equal, the integral is zero.",
        hint: "Same upper and lower limit.",
      },
      {
        front: "How do you find $g'(x)$ when the upper limit is a function, like $g(x)=\\\\int_{a}^{u(x)} f(t)\\\\,dt$?",
        back: "Use the chain rule: $g'(x) = f(u(x))\\\\cdot u'(x)$. Plug the upper limit into $f$, then multiply by the derivative of that limit.",
        hint: "FTC plus chain rule.",
      },
      {
        front: "Find $g'(x)$ if $g(x) = \\\\int_{0}^{x^{2}} \\\\sin t\\\\,dt$.",
        back: "$g'(x) = \\\\sin(x^{2})\\\\cdot 2x$. Substitute $x^{2}$ into $\\\\sin t$ and multiply by $\\\\frac{d}{dx}(x^{2})=2x$.",
        hint: "Upper limit is x^2.",
      },
      {
        front: "How do you determine where an accumulation function $g(x)=\\\\int_a^x f(t)\\\\,dt$ is increasing or decreasing?",
        back: "Since $g'(x)=f(x)$, $g$ increases where $f(x)>0$ (graph above the t-axis) and decreases where $f(x)<0$ (below the axis).",
        hint: "Sign of f controls g.",
      },
      {
        front: "How do you find local maxima/minima of an accumulation function?",
        back: "Set $g'(x)=f(x)=0$ and check sign changes of $f$. A max occurs where $f$ changes from positive to negative; a min where $f$ changes negative to positive.",
        hint: "Where f crosses zero.",
      },
      {
        front: "How do you find concavity and inflection points of $g(x)=\\\\int_a^x f(t)\\\\,dt$?",
        back: "$g''(x) = f'(x)$. So $g$ is concave up where $f$ is increasing and concave down where $f$ is decreasing; inflection points occur where $f$ has a local max or min.",
        hint: "g'' equals f'.",
      },
      {
        front: "How do you evaluate $g(x_0)$ from a graph of $f$?",
        back: "Compute the net signed area of $f$ from $a$ to $x_0$ using geometry (rectangles, triangles, circles). Area below the t-axis counts as negative.",
        hint: "Add up signed areas geometrically.",
      },
      {
        front: "Given $g(x)=\\\\int_0^x f(t)\\\\,dt$ and $f$'s graph shows a triangle of area 6 above the axis on [0,3], find $g(3)$.",
        back: "$g(3) = 6$, the area under $f$ from 0 to 3 (positive because it is above the axis).",
        hint: "Just read off the area.",
      },
      {
        front: "Common trap: confusing $f$ and $g$ on a graph.",
        back: "When a graph shows $f$ (the integrand), you read slopes/areas to describe $g$. Remember $g'=f$: the height of $f$ is the slope of $g$, and the area of $f$ is the value of $g$.",
        hint: "Height of f = slope of g.",
      },
      {
        front: "What does the Net Change Theorem say in accumulation form?",
        back: "$\\\\int_{a}^{b} f'(t)\\\\,dt = f(b) - f(a)$, so $f(b) = f(a) + \\\\int_{a}^{b} f'(t)\\\\,dt$. The integral of a rate gives the net change; add it to the starting value to get the final value.",
        hint: "Start value plus accumulated change.",
      },
      {
        front: "Water flows in at rate $R(t)$ gal/min. If the tank holds 50 gal at $t=0$, how much at $t=10$?",
        back: "$\\\\text{Amount} = 50 + \\\\int_{0}^{10} R(t)\\\\,dt$. The integral accumulates the gallons added over the interval.",
        hint: "Initial amount plus accumulation.",
      },
    ],
  },
  {
    slug: "theorem-applications-calcab",
    cards: [
      {
        front: "State the Intermediate Value Theorem (IVT).",
        back: "If $f$ is continuous on $[a,b]$ and $N$ is any value between $f(a)$ and $f(b)$, then there exists $c$ in $(a,b)$ with $f(c)=N$. Continuity is required.",
        hint: "Continuous functions hit every middle value.",
      },
      {
        front: "What is the IVT commonly used to prove?",
        back: "That an equation has a solution (root) on an interval: if $f$ is continuous and $f(a)$ and $f(b)$ have opposite signs, then $f$ has a zero between $a$ and $b$.",
        hint: "Sign change implies a root.",
      },
      {
        front: "State the Extreme Value Theorem (EVT).",
        back: "If $f$ is continuous on a closed interval $[a,b]$, then $f$ attains both an absolute maximum and an absolute minimum on that interval.",
        hint: "Continuous + closed interval = extremes exist.",
      },
      {
        front: "How do you find absolute extrema on $[a,b]$ (the Candidates Test)?",
        back: "Evaluate $f$ at all critical points (where $f'=0$ or undefined) inside $(a,b)$ and at the endpoints $a$ and $b$. The largest output is the absolute max, the smallest is the absolute min.",
        hint: "Check critical points and endpoints.",
      },
      {
        front: "State the Mean Value Theorem (MVT).",
        back: "If $f$ is continuous on $[a,b]$ and differentiable on $(a,b)$, then there exists $c$ in $(a,b)$ with $f'(c) = \\\\dfrac{f(b)-f(a)}{b-a}$.",
        hint: "Instantaneous rate equals average rate somewhere.",
      },
      {
        front: "What does the MVT guarantee geometrically?",
        back: "At least one point $c$ where the tangent line is parallel to the secant line connecting $(a,f(a))$ and $(b,f(b))$.",
        hint: "Tangent parallel to secant.",
      },
      {
        front: "What are the two hypotheses you must verify before applying the MVT?",
        back: "Continuity on the closed interval $[a,b]$ AND differentiability on the open interval $(a,b)$. Stating these is required for full AP credit.",
        hint: "Continuous and differentiable.",
      },
      {
        front: "What is Rolle's Theorem (a special case of MVT)?",
        back: "If $f$ is continuous on $[a,b]$, differentiable on $(a,b)$, and $f(a)=f(b)$, then there exists $c$ in $(a,b)$ with $f'(c)=0$.",
        hint: "Equal endpoints give a flat tangent.",
      },
      {
        front: "Apply the MVT: $f(x)=x^2$ on $[1,3]$. Find $c$.",
        back: "Average rate $= \\\\dfrac{9-1}{3-1}=4$. Set $f'(c)=2c=4$, so $c=2$, which lies in $(1,3)$.",
        hint: "Set the derivative equal to the average rate.",
      },
      {
        front: "Common trap: applying IVT or MVT without checking continuity/differentiability.",
        back: "These theorems fail if the hypotheses are not met (e.g., a function with a jump or corner). Always confirm continuity (and differentiability for MVT) on the stated interval first.",
        hint: "Hypotheses must hold.",
      },
      {
        front: "How does the MVT connect to the candidates/optimization process?",
        back: "The MVT guarantees a point matching the average rate of change; in motion problems it means average velocity equals instantaneous velocity at some moment. It also underlies why $f'>0$ implies $f$ is increasing.",
        hint: "Average velocity = instantaneous velocity somewhere.",
      },
      {
        front: "A car travels 120 miles in 2 hours. What does the MVT say about its speed?",
        back: "Average speed is $60$ mph, so by the MVT (assuming a differentiable position function) the car's instantaneous speed equaled exactly $60$ mph at some moment.",
        hint: "Instantaneous matches the 60 mph average.",
      },
      {
        front: "When can you NOT guarantee an absolute max/min exists by the EVT?",
        back: "On an open interval, an unbounded interval, or where $f$ is discontinuous, the EVT does not apply and extrema may fail to exist.",
        hint: "Needs a closed interval and continuity.",
      },
    ],
  },
];
