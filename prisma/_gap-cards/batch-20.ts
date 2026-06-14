export const batchCards: { slug: string; cards: { front: string; back: string; hint?: string }[] }[] = [
  {
    slug: "bias-sampling-surveys",
    cards: [
      {
        front: "What is the difference between a population and a sample?",
        back: "The population is the entire group of individuals you want information about. A sample is the subset of the population from which you actually collect data, used to make inferences about the population.",
        hint: "Whole group vs. the part you measure.",
      },
      {
        front: "Define sampling bias.",
        back: "Sampling bias occurs when the method of selecting the sample systematically favors certain outcomes, so the sample is not representative of the population. It pushes results consistently in one direction.",
        hint: "Systematic, not random, error.",
      },
      {
        front: "What is undercoverage?",
        back: "Undercoverage happens when some groups in the population are left out of (or underrepresented in) the sampling process, so they have little or no chance of being selected.",
        hint: "A whole group is missing from the frame.",
      },
      {
        front: "What is nonresponse bias?",
        back: "Nonresponse bias occurs when individuals chosen for the sample cannot be contacted or refuse to participate, and those who do not respond differ systematically from those who do.",
        hint: "They were selected but did not answer.",
      },
      {
        front: "What is response bias (measurement bias)?",
        back: "Response bias occurs when respondents give inaccurate answers due to question wording, social pressure, lying, or interviewer influence. It affects the answers themselves, not who is selected.",
        hint: "Bad answers, not bad selection.",
      },
      {
        front: "What is voluntary response bias?",
        back: "Voluntary response bias arises when people choose themselves into a sample (e.g., call-in polls, online opt-in surveys). Those with strong opinions are overrepresented, so the sample is biased.",
        hint: "People self-select; strong opinions dominate.",
      },
      {
        front: "Describe a simple random sample (SRS).",
        back: "An SRS of size n is chosen so that every possible group of n individuals has an equal chance of being the sample selected. This also means each individual is equally likely to be chosen.",
        hint: "Every group of size n equally likely.",
      },
      {
        front: "Describe a stratified random sample.",
        back: "Divide the population into homogeneous groups called strata, then take an SRS from each stratum. Used to ensure representation of key subgroups and reduce variability.",
        hint: "Split into strata, sample within each.",
      },
      {
        front: "Describe cluster sampling and how it differs from stratified sampling.",
        back: "In cluster sampling you divide the population into clusters, randomly select whole clusters, and survey everyone in them. Clusters are meant to each resemble the whole population, whereas strata are internally similar but differ from each other.",
        hint: "Sample whole groups vs. sample within groups.",
      },
      {
        front: "What is systematic sampling?",
        back: "Choose a random starting point and then select every kth individual from an ordered list (e.g., every 10th person). It is simple but can be biased if the list has a periodic pattern.",
        hint: "Every kth person from a list.",
      },
      {
        front: "Why does a larger sample size NOT fix bias?",
        back: "Bias is a systematic error in the sampling or measurement method. Increasing sample size reduces variability (sampling error) but a biased method just produces a more precise wrong answer.",
        hint: "Bigger does not mean less biased.",
      },
      {
        front: "Trap: A magazine emails a survey to its subscribers and reports on 'all adults.' What two biases appear?",
        back: "Undercoverage, because only subscribers can be reached (non-subscribers excluded), and likely voluntary response/nonresponse bias, since only motivated subscribers reply. Results cannot be generalized to all adults.",
        hint: "Who is excluded, and who chooses to answer.",
      },
      {
        front: "Worked example: A reporter asks, 'Don't you agree that wasteful spending should be cut?' What bias is this?",
        back: "This is response bias from leading/loaded question wording. The phrasing pushes respondents toward agreement, so the measured proportion overstates true support.",
        hint: "The question itself nudges the answer.",
      },
    ],
  },
  {
    slug: "language-intelligence",
    cards: [
      {
        front: "What are phonemes and morphemes?",
        back: "Phonemes are the smallest distinctive sound units in a language (e.g., the /b/ in 'bat'). Morphemes are the smallest units that carry meaning (e.g., 'pre-', '-ed', 'cat').",
        hint: "Smallest sound vs. smallest meaning.",
      },
      {
        front: "Distinguish semantics from syntax (grammar).",
        back: "Semantics is the set of rules for deriving meaning from words and sentences. Syntax is the set of rules for combining words into grammatically correct sentences.",
        hint: "Meaning vs. word order.",
      },
      {
        front: "What is the difference between receptive and productive language?",
        back: "Receptive language is the ability to comprehend speech (understanding words). Productive language is the ability to produce speech. In children, receptive ability develops before productive ability.",
        hint: "Understanding comes before speaking.",
      },
      {
        front: "List the early stages of language development with approximate ages.",
        back: "Babbling stage (~4 months, varied sounds), one-word/holophrastic stage (~1 year), two-word/telegraphic speech stage (~2 years, e.g., 'want cookie'). Vocabulary then expands rapidly.",
        hint: "Babble, one word, two-word telegraphic.",
      },
      {
        front: "What is telegraphic speech?",
        back: "An early speech stage (around age 2) in which children speak in short, content-focused phrases using mostly nouns and verbs and omitting function words (e.g., 'go car'), like a telegram.",
        hint: "Nouns + verbs, no 'the' or 'is.'",
      },
      {
        front: "Contrast Chomsky's and Skinner's views of language acquisition.",
        back: "Chomsky argued language is largely inborn, citing a universal grammar and a language acquisition device. Skinner argued language is learned through operant conditioning (reinforcement, imitation, association).",
        hint: "Nature (Chomsky) vs. nurture (Skinner).",
      },
      {
        front: "What is the critical period hypothesis for language?",
        back: "It proposes there is a window in early childhood during which the brain most readily acquires language. After this period (roughly puberty), mastering a first language or accent-free fluency becomes much harder.",
        hint: "Childhood window for easy learning.",
      },
      {
        front: "What is the linguistic relativity (Whorf) hypothesis?",
        back: "Benjamin Whorf's hypothesis that language shapes or influences the way we think and perceive the world. The strong form (language determines thought) is largely rejected; a weaker influence is supported.",
        hint: "Language influences thought.",
      },
      {
        front: "What brain areas are central to language, and what does damage cause?",
        back: "Broca's area (left frontal lobe) controls speech production; damage causes Broca's (nonfluent) aphasia. Wernicke's area (left temporal lobe) handles comprehension; damage causes Wernicke's (fluent but meaningless) aphasia.",
        hint: "Broca produces; Wernicke comprehends.",
      },
      {
        front: "Define Spearman's general intelligence (g).",
        back: "Charles Spearman proposed a general intelligence factor (g) underlying all mental abilities, based on factor analysis showing that people who score well on one cognitive task tend to score well on others.",
        hint: "One underlying mental ability factor.",
      },
      {
        front: "Distinguish fluid and crystallized intelligence (Cattell).",
        back: "Fluid intelligence is the ability to reason quickly and solve novel problems; it declines with age. Crystallized intelligence is accumulated knowledge and skills; it tends to increase or hold steady with age.",
        hint: "Novel reasoning vs. accumulated knowledge.",
      },
      {
        front: "What is the formula and meaning of the original IQ score?",
        back: "Original IQ $= \\\\frac{\\\\text{mental age}}{\\\\text{chronological age}} \\\\times 100$, where mental age is the age level of performance. Modern tests instead use deviation IQ relative to same-age norms.",
        hint: "Mental age over chronological age, times 100.",
      },
      {
        front: "Differentiate validity and reliability of a test.",
        back: "Reliability is the consistency of results across time, forms, or items (it gives the same score repeatedly). Validity is whether the test measures what it claims to measure. A test can be reliable yet not valid.",
        hint: "Consistent vs. measures the right thing.",
      },
      {
        front: "What is Gardner's theory of multiple intelligences?",
        back: "Howard Gardner proposed several relatively independent intelligences (e.g., linguistic, logical-mathematical, spatial, musical, bodily-kinesthetic, interpersonal, intrapersonal, naturalist) rather than a single g factor.",
        hint: "Many distinct intelligences, not one.",
      },
    ],
  },
  {
    slug: "degrees-and-radians",
    cards: [
      {
        front: "What is a radian?",
        back: "A radian is the measure of a central angle that subtends an arc equal in length to the circle's radius. One full circle is $2\\\\pi$ radians.",
        hint: "Arc length equals radius.",
      },
      {
        front: "State the conversion factor between degrees and radians.",
        back: "$180^\\\\circ = \\\\pi$ radians. So $1$ radian $= \\\\frac{180}{\\\\pi}$ degrees and $1^\\\\circ = \\\\frac{\\\\pi}{180}$ radians.",
        hint: "Half a circle is pi radians.",
      },
      {
        front: "How do you convert degrees to radians?",
        back: "Multiply the degree measure by $\\\\frac{\\\\pi}{180}$. For example, $90^\\\\circ \\\\cdot \\\\frac{\\\\pi}{180} = \\\\frac{\\\\pi}{2}$ radians.",
        hint: "Times pi over 180.",
      },
      {
        front: "How do you convert radians to degrees?",
        back: "Multiply the radian measure by $\\\\frac{180}{\\\\pi}$. For example, $\\\\frac{\\\\pi}{3} \\\\cdot \\\\frac{180}{\\\\pi} = 60^\\\\circ$.",
        hint: "Times 180 over pi.",
      },
      {
        front: "Convert the common angles 30, 45, 60, 90 degrees to radians.",
        back: "$30^\\\\circ = \\\\frac{\\\\pi}{6}$, $45^\\\\circ = \\\\frac{\\\\pi}{4}$, $60^\\\\circ = \\\\frac{\\\\pi}{3}$, and $90^\\\\circ = \\\\frac{\\\\pi}{2}$.",
        hint: "Pi over 6, 4, 3, 2.",
      },
      {
        front: "What are 180, 270, and 360 degrees in radians?",
        back: "$180^\\\\circ = \\\\pi$, $270^\\\\circ = \\\\frac{3\\\\pi}{2}$, and $360^\\\\circ = 2\\\\pi$ radians.",
        hint: "Pi, three-pi-halves, two-pi.",
      },
      {
        front: "What is the arc length formula using radians?",
        back: "$s = r\\\\theta$, where $s$ is arc length, $r$ is the radius, and $\\\\theta$ is the central angle in radians. The angle MUST be in radians for this to work.",
        hint: "Arc = radius times angle (radians).",
      },
      {
        front: "What is the area of a circular sector using radians?",
        back: "$A = \\\\frac{1}{2}r^2\\\\theta$, where $r$ is the radius and $\\\\theta$ is the central angle in radians. Use radians, not degrees.",
        hint: "Half r-squared times the angle.",
      },
      {
        front: "What is a coterminal angle and how do you find one?",
        back: "Coterminal angles share the same terminal side. Find them by adding or subtracting full revolutions: $360^\\\\circ$ (or $2\\\\pi$ radians). For example, $-30^\\\\circ$ is coterminal with $330^\\\\circ$.",
        hint: "Add or subtract 360 degrees / 2 pi.",
      },
      {
        front: "Worked example: Convert $\\\\frac{5\\\\pi}{6}$ radians to degrees.",
        back: "Multiply by $\\\\frac{180}{\\\\pi}$: $\\\\frac{5\\\\pi}{6} \\\\cdot \\\\frac{180}{\\\\pi} = \\\\frac{5 \\\\cdot 180}{6} = 150^\\\\circ$.",
        hint: "The pi cancels.",
      },
      {
        front: "Worked example: A circle has radius 4. Find the arc length for a central angle of $\\\\frac{\\\\pi}{2}$.",
        back: "Use $s = r\\\\theta = 4 \\\\cdot \\\\frac{\\\\pi}{2} = 2\\\\pi$ units.",
        hint: "s = r times theta.",
      },
      {
        front: "Common trap: Why must your calculator be in the right angle mode?",
        back: "Evaluating $\\\\sin$, $\\\\cos$, or $\\\\tan$ in degree mode when the angle is in radians (or vice versa) gives wrong values. Always match the mode (DEG or RAD) to the units of the angle.",
        hint: "Match DEG/RAD mode to the angle.",
      },
      {
        front: "How many radians are in one full revolution, and why?",
        back: "$2\\\\pi$ radians, because the full circumference is $2\\\\pi r$, and dividing arc length by radius (the definition of radian measure) gives $\\\\frac{2\\\\pi r}{r} = 2\\\\pi$.",
        hint: "Circumference over radius.",
      },
    ],
  },
  {
    slug: "macro-gdp-growth",
    cards: [
      {
        front: "What is Gross Domestic Product (GDP)?",
        back: "GDP is the market value of all final goods and services produced within a country's borders in a given period. It excludes intermediate goods, used goods, and purely financial transactions.",
        hint: "Final goods, within borders, one year.",
      },
      {
        front: "State the expenditure approach formula for GDP.",
        back: "$GDP = C + I + G + (X - M)$, where $C$ is consumption, $I$ is gross private investment, $G$ is government purchases, $X$ is exports, and $M$ is imports. $(X-M)$ is net exports.",
        hint: "C plus I plus G plus net exports.",
      },
      {
        front: "Distinguish nominal GDP from real GDP.",
        back: "Nominal GDP values output at current prices. Real GDP values output at constant base-year prices, removing inflation. Real GDP is used to measure true growth in production over time.",
        hint: "Current prices vs. inflation-adjusted.",
      },
      {
        front: "What is the GDP deflator and its formula?",
        back: "The GDP deflator measures the price level of all domestically produced goods. $\\\\text{GDP deflator} = \\\\frac{\\\\text{nominal GDP}}{\\\\text{real GDP}} \\\\times 100$.",
        hint: "Nominal over real, times 100.",
      },
      {
        front: "How do you calculate the economic growth rate?",
        back: "$\\\\text{growth rate} = \\\\frac{\\\\text{real GDP}_{2} - \\\\text{real GDP}_{1}}{\\\\text{real GDP}_{1}} \\\\times 100$. Always use REAL GDP so that inflation does not inflate the figure.",
        hint: "Percent change in real GDP.",
      },
      {
        front: "What does the rule of 70 estimate?",
        back: "It estimates the years for a quantity to double: $\\\\text{years to double} \\\\approx \\\\frac{70}{\\\\text{annual growth rate (\\\\%)}}$. At 2% growth, output doubles in about 35 years.",
        hint: "70 divided by the growth percent.",
      },
      {
        front: "What are the main sources of long-run economic growth?",
        back: "Increases in the quantity and quality of resources: physical capital, human capital (education/skills), natural resources, and especially technological progress, which raises productivity.",
        hint: "More/better inputs and technology.",
      },
      {
        front: "Define labor productivity and why it matters for growth.",
        back: "Labor productivity is output per worker (or per hour worked). Rising productivity is the primary driver of long-run growth in real GDP per capita and improvements in living standards.",
        hint: "Output per worker.",
      },
      {
        front: "Why is real GDP per capita the key measure of living standards?",
        back: "It divides real GDP by population, showing average output per person. It accounts for both inflation and population size, so it better reflects average material well-being than total GDP.",
        hint: "Real GDP divided by population.",
      },
      {
        front: "List four things NOT counted in GDP.",
        back: "Intermediate goods, used/secondhand goods, purely financial transactions (stocks, transfer payments), and nonmarket/illegal activity (household chores, the black market).",
        hint: "Intermediate, used, financial, nonmarket.",
      },
      {
        front: "How does growth appear on the production possibilities curve (PPC)?",
        back: "Long-run economic growth is shown as an outward shift of the entire PPC, reflecting increased productive capacity. A point inside the curve moving outward is just recovery, not true growth.",
        hint: "Outward shift of the whole curve.",
      },
      {
        front: "Worked example: Real GDP rises from 500 to 530 billion. Find the growth rate.",
        back: "$\\\\frac{530 - 500}{500} \\\\times 100 = \\\\frac{30}{500} \\\\times 100 = 6\\\\%$ growth.",
        hint: "Change over original, times 100.",
      },
      {
        front: "Trap: Does an increase in nominal GDP always mean the economy grew?",
        back: "No. Nominal GDP can rise solely from higher prices (inflation) even if real output is unchanged or falling. Only an increase in real GDP indicates actual economic growth.",
        hint: "Higher prices can fake growth.",
      },
    ],
  },
  {
    slug: "intro-trigonometry-alg2",
    cards: [
      {
        front: "State the SOH-CAH-TOA ratios for a right triangle.",
        back: "$\\\\sin\\\\theta = \\\\frac{\\\\text{opposite}}{\\\\text{hypotenuse}}$, $\\\\cos\\\\theta = \\\\frac{\\\\text{adjacent}}{\\\\text{hypotenuse}}$, $\\\\tan\\\\theta = \\\\frac{\\\\text{opposite}}{\\\\text{adjacent}}$.",
        hint: "Sine = opp/hyp, etc.",
      },
      {
        front: "What are the reciprocal trig functions?",
        back: "$\\\\csc\\\\theta = \\\\frac{1}{\\\\sin\\\\theta}$ (hyp/opp), $\\\\sec\\\\theta = \\\\frac{1}{\\\\cos\\\\theta}$ (hyp/adj), and $\\\\cot\\\\theta = \\\\frac{1}{\\\\tan\\\\theta}$ (adj/opp).",
        hint: "csc, sec, cot are flips.",
      },
      {
        front: "Give the exact trig values for a 30-60-90 triangle.",
        back: "$\\\\sin 30^\\\\circ = \\\\frac{1}{2}$, $\\\\cos 30^\\\\circ = \\\\frac{\\\\sqrt{3}}{2}$, $\\\\sin 60^\\\\circ = \\\\frac{\\\\sqrt{3}}{2}$, $\\\\cos 60^\\\\circ = \\\\frac{1}{2}$, and $\\\\tan 30^\\\\circ = \\\\frac{1}{\\\\sqrt{3}}$, $\\\\tan 60^\\\\circ = \\\\sqrt{3}$.",
        hint: "Sides 1, sqrt(3), 2.",
      },
      {
        front: "Give the exact trig values for a 45-45-90 triangle.",
        back: "$\\\\sin 45^\\\\circ = \\\\cos 45^\\\\circ = \\\\frac{\\\\sqrt{2}}{2}$ and $\\\\tan 45^\\\\circ = 1$. The legs are equal and the hypotenuse is leg times $\\\\sqrt{2}$.",
        hint: "Both sine and cosine are sqrt(2)/2.",
      },
      {
        front: "State the Pythagorean identity.",
        back: "$\\\\sin^2\\\\theta + \\\\cos^2\\\\theta = 1$. It holds for every angle and lets you find one function from the other.",
        hint: "Sine-squared plus cosine-squared equals one.",
      },
      {
        front: "What is the unit circle and how does it define sine and cosine?",
        back: "The unit circle has radius 1 centered at the origin. For an angle $\\\\theta$ in standard position, the terminal point is $(\\\\cos\\\\theta, \\\\sin\\\\theta)$, so cosine is the x-coordinate and sine is the y-coordinate.",
        hint: "x = cosine, y = sine.",
      },
      {
        front: "What are the signs of trig functions in each quadrant (ASTC)?",
        back: "Quadrant I: All positive; II: only Sine positive; III: only Tangent positive; IV: only Cosine positive. Remember 'All Students Take Calculus.'",
        hint: "All, Sine, Tangent, Cosine.",
      },
      {
        front: "What is the inverse trig function used for?",
        back: "Inverse functions like $\\\\sin^{-1}$, $\\\\cos^{-1}$, $\\\\tan^{-1}$ return the angle given a ratio. Use $\\\\theta = \\\\tan^{-1}\\\\!\\\\left(\\\\frac{\\\\text{opp}}{\\\\text{adj}}\\\\right)$ to solve for an unknown angle.",
        hint: "Ratio in, angle out.",
      },
      {
        front: "When do you use the Law of Sines?",
        back: "Use $\\\\frac{a}{\\\\sin A} = \\\\frac{b}{\\\\sin B} = \\\\frac{c}{\\\\sin C}$ for non-right triangles when you know two angles and a side (AAS/ASA) or two sides and a non-included angle (SSA).",
        hint: "Pairs of angle and opposite side.",
      },
      {
        front: "When do you use the Law of Cosines?",
        back: "Use $c^2 = a^2 + b^2 - 2ab\\\\cos C$ for non-right triangles when you know two sides and the included angle (SAS) or all three sides (SSS).",
        hint: "SAS or SSS triangles.",
      },
      {
        front: "Worked example: A right triangle has opposite = 3 and hypotenuse = 5. Find $\\\\sin\\\\theta$ and $\\\\theta$.",
        back: "$\\\\sin\\\\theta = \\\\frac{3}{5} = 0.6$, so $\\\\theta = \\\\sin^{-1}(0.6) \\\\approx 36.9^\\\\circ$.",
        hint: "Opposite over hypotenuse, then inverse sine.",
      },
      {
        front: "Common trap: Why can't SOH-CAH-TOA be used directly on a non-right triangle?",
        back: "SOH-CAH-TOA is defined only for right triangles (it relies on a hypotenuse). For non-right triangles you must use the Law of Sines or Law of Cosines instead.",
        hint: "It needs a 90-degree angle.",
      },
      {
        front: "What is the cofunction relationship for complementary angles?",
        back: "$\\\\sin\\\\theta = \\\\cos(90^\\\\circ - \\\\theta)$ and $\\\\cos\\\\theta = \\\\sin(90^\\\\circ - \\\\theta)$. A function of an angle equals the cofunction of its complement.",
        hint: "Sine of theta = cosine of its complement.",
      },
    ],
  },
  {
    slug: "macro-multiplier-effect",
    cards: [
      {
        front: "What is the spending (expenditure) multiplier effect?",
        back: "An initial change in spending leads to a larger total change in real GDP, because one person's spending becomes another's income, which is partly re-spent, and so on in successive rounds.",
        hint: "Initial spending ripples into bigger GDP change.",
      },
      {
        front: "Define the marginal propensity to consume (MPC).",
        back: "MPC is the fraction of an additional dollar of disposable income that a household spends on consumption: $MPC = \\\\frac{\\\\Delta C}{\\\\Delta \\\\text{disposable income}}$. It lies between 0 and 1.",
        hint: "Share of extra income that is spent.",
      },
      {
        front: "Define the marginal propensity to save (MPS) and its relation to MPC.",
        back: "MPS is the fraction of additional disposable income that is saved. Since extra income is either spent or saved, $MPC + MPS = 1$, so $MPS = 1 - MPC$.",
        hint: "Spent plus saved equals one.",
      },
      {
        front: "State the simple spending multiplier formula.",
        back: "$\\\\text{spending multiplier} = \\\\frac{1}{1 - MPC} = \\\\frac{1}{MPS}$. Multiply an initial spending change by this to get the total change in real GDP.",
        hint: "One over (1 minus MPC).",
      },
      {
        front: "Worked example: If MPC = 0.8, what is the spending multiplier?",
        back: "$\\\\frac{1}{1 - 0.8} = \\\\frac{1}{0.2} = 5$. So a $10 billion increase in spending raises real GDP by $50 billion.",
        hint: "1 over 0.2.",
      },
      {
        front: "What is the tax multiplier formula and why is it negative?",
        back: "$\\\\text{tax multiplier} = -\\\\frac{MPC}{1 - MPC} = -\\\\frac{MPC}{MPS}$. It is negative because raising taxes reduces income and spending; cutting taxes raises them.",
        hint: "Negative MPC over MPS.",
      },
      {
        front: "Why is the tax multiplier smaller in magnitude than the spending multiplier?",
        back: "A tax change first affects disposable income, and only the MPC fraction enters the spending stream, whereas a direct spending change enters fully. So the tax multiplier is weaker.",
        hint: "Only the MPC portion of a tax cut is spent.",
      },
      {
        front: "What does the balanced budget multiplier equal?",
        back: "When government spending and taxes both rise by the same amount, the net effect on real GDP equals that amount, so the balanced budget multiplier equals 1.",
        hint: "Equal G and T change gives a multiplier of 1.",
      },
      {
        front: "Worked example: MPC = 0.75. A $40 billion tax cut changes GDP by how much?",
        back: "Tax multiplier $= -\\\\frac{0.75}{0.25} = -3$. A tax cut is $-(-40) = +40$ stimulus, so change $= -3 \\\\times (-40) = +\\\\$120$ billion.",
        hint: "Tax cut is a negative tax change.",
      },
      {
        front: "How does a higher MPC affect the size of the multiplier?",
        back: "A higher MPC means more of each dollar is re-spent in each round, so the multiplier is larger. A lower MPC (higher saving) shrinks the multiplier.",
        hint: "More spending, bigger multiplier.",
      },
      {
        front: "Name 'leakages' that reduce the real-world multiplier.",
        back: "Saving, taxes, and imports are leakages: income that is not re-spent on domestic output. They make the actual multiplier smaller than the simple formula predicts.",
        hint: "Saving, taxes, imports.",
      },
      {
        front: "Trap: Does the money multiplier equal the spending multiplier?",
        back: "No. The spending multiplier $= \\\\frac{1}{1-MPC}$ relates to fiscal spending and GDP. The money multiplier $= \\\\frac{1}{\\\\text{reserve ratio}}$ relates to banking and money creation. Do not confuse them.",
        hint: "Different formulas, different topics.",
      },
    ],
  },
  {
    slug: "alkynes-synthesis",
    cards: [
      {
        front: "What functional group defines an alkyne?",
        back: "An alkyne contains a carbon-carbon triple bond (one sigma and two pi bonds). The triple-bonded carbons are sp hybridized, giving linear 180-degree geometry.",
        hint: "Carbon-carbon triple bond, sp, linear.",
      },
      {
        front: "How is an internal alkyne made by double dehydrohalogenation?",
        back: "Treat a vicinal (or geminal) dihalide with a strong base such as $\\\\text{NaNH}_2$ (sodium amide). Two successive E2 eliminations remove two HX to form the triple bond.",
        hint: "Vicinal dihalide + excess NaNH2.",
      },
      {
        front: "Why is sodium amide (NaNH2) preferred over NaOH for forming alkynes from dihalides?",
        back: "$\\\\text{NaNH}_2$ is a much stronger base, needed to remove the second proton from the relatively unreactive vinyl halide intermediate. Excess (typically 3 equivalents) drives both eliminations.",
        hint: "Strong base needed for the second elimination.",
      },
      {
        front: "What is special about the acidity of terminal alkynes?",
        back: "A terminal alkyne C-H has $pK_a \\\\approx 25$, far more acidic than alkenes ($pK_a \\\\approx 44$) or alkanes ($pK_a \\\\approx 50$). The extra s-character of the sp carbon stabilizes the conjugate base (acetylide).",
        hint: "sp carbon, pKa about 25.",
      },
      {
        front: "How do you form an acetylide ion (alkynide)?",
        back: "Deprotonate a terminal alkyne with a strong base such as $\\\\text{NaNH}_2$. The resulting acetylide ($\\\\text{RC} \\\\equiv \\\\text{C}^-$) is a strong nucleophile and base.",
        hint: "Terminal alkyne + NaNH2.",
      },
      {
        front: "What reaction extends a carbon chain using an acetylide?",
        back: "Acetylide alkylation: an acetylide ion attacks a primary alkyl halide in an $S_N2$ reaction, forming a new C-C bond and a longer internal alkyne ($\\\\text{RC}\\\\equiv\\\\text{C}^- + \\\\text{R'CH}_2\\\\text{X} \\\\rightarrow \\\\text{RC}\\\\equiv\\\\text{CCH}_2\\\\text{R'}$).",
        hint: "Acetylide + primary alkyl halide, SN2.",
      },
      {
        front: "Trap: Why must alkyl halides for acetylide alkylation be methyl or primary?",
        back: "Acetylides are strong bases, so with secondary or tertiary halides they cause E2 elimination instead of substitution. Only methyl/primary halides give the desired $S_N2$ alkylation.",
        hint: "Bulky halides give elimination, not substitution.",
      },
      {
        front: "How do you reduce an alkyne to a cis (Z) alkene?",
        back: "Use $\\\\text{H}_2$ with Lindlar's catalyst (poisoned Pd). The syn addition of hydrogen gives the cis alkene and stops at the alkene without over-reduction.",
        hint: "Lindlar's catalyst gives cis.",
      },
      {
        front: "How do you reduce an alkyne to a trans (E) alkene?",
        back: "Use a dissolving metal reduction: $\\\\text{Na}$ (or Li) in liquid $\\\\text{NH}_3$. The anti addition produces the trans alkene.",
        hint: "Na/NH3(l) gives trans.",
      },
      {
        front: "What product comes from full hydrogenation of an alkyne?",
        back: "Excess $\\\\text{H}_2$ with a standard metal catalyst (Pd, Pt, or Ni) reduces the alkyne completely to an alkane (both pi bonds add hydrogen).",
        hint: "H2 with Pd/Pt/Ni gives the alkane.",
      },
      {
        front: "Compare Markovnikov vs. anti-Markovnikov hydration of a terminal alkyne.",
        back: "Acid-catalyzed hydration ($\\\\text{H}_2\\\\text{O}, \\\\text{H}_2\\\\text{SO}_4, \\\\text{HgSO}_4$) follows Markovnikov, giving a methyl ketone. Hydroboration-oxidation (BH3 then $\\\\text{H}_2\\\\text{O}_2$/NaOH) is anti-Markovnikov, giving an aldehyde.",
        hint: "Acid/Hg gives ketone; hydroboration gives aldehyde.",
      },
      {
        front: "Worked example: Synthesize 2-pentyne from acetylene (ethyne).",
        back: "Deprotonate ethyne with $\\\\text{NaNH}_2$, alkylate with $\\\\text{CH}_3\\\\text{I}$ to get propyne, deprotonate again with $\\\\text{NaNH}_2$, then alkylate with $\\\\text{CH}_3\\\\text{CH}_2\\\\text{I}$ to give 2-pentyne.",
        hint: "Two acetylide alkylations.",
      },
      {
        front: "Why is the intermediate enol of alkyne hydration not the final product?",
        back: "The initial enol (a vinyl alcohol) is unstable and tautomerizes to the more stable carbonyl (keto) form. So the isolated product is the ketone or aldehyde, not the enol.",
        hint: "Enol tautomerizes to keto.",
      },
    ],
  },
  {
    slug: "triangle-inequalities",
    cards: [
      {
        front: "State the Triangle Inequality Theorem.",
        back: "The sum of the lengths of any two sides of a triangle must be greater than the length of the third side. For sides $a$, $b$, $c$: $a + b > c$, $a + c > b$, and $b + c > a$.",
        hint: "Any two sides exceed the third.",
      },
      {
        front: "Shortcut: How can you quickly test if three lengths form a triangle?",
        back: "Add the two SHORTEST sides; if their sum is greater than the longest side, a triangle exists. You only need to check that one inequality.",
        hint: "Two smallest must beat the largest.",
      },
      {
        front: "Given two sides $a$ and $b$, what is the range of the third side $x$?",
        back: "$|a - b| < x < a + b$. The third side must be greater than the positive difference and less than the sum of the other two.",
        hint: "Between the difference and the sum.",
      },
      {
        front: "Worked example: Two sides are 7 and 10. Find the range of the third side.",
        back: "$|10 - 7| < x < 10 + 7$, so $3 < x < 17$. The third side must be strictly between 3 and 17.",
        hint: "Difference 3, sum 17.",
      },
      {
        front: "What is the Side-Angle (longer side, larger angle) relationship in a triangle?",
        back: "In any triangle, the longest side is opposite the largest angle and the shortest side is opposite the smallest angle. The ordering of sides matches the ordering of opposite angles.",
        hint: "Bigger side faces bigger angle.",
      },
      {
        front: "If a triangle has angles 50, 60, and 70 degrees, order the sides shortest to longest.",
        back: "The side opposite 50 degrees is shortest, then the side opposite 60 degrees, then the side opposite 70 degrees is longest. Side order follows opposite-angle order.",
        hint: "Match smallest angle to smallest side.",
      },
      {
        front: "State the Exterior Angle Inequality Theorem.",
        back: "The measure of an exterior angle of a triangle is greater than the measure of either of the two remote (nonadjacent) interior angles.",
        hint: "Exterior angle beats each remote interior angle.",
      },
      {
        front: "State the Exterior Angle Theorem (equality version).",
        back: "An exterior angle of a triangle equals the sum of the two remote interior angles. For example, if remote angles are 40 and 65 degrees, the exterior angle is 105 degrees.",
        hint: "Exterior angle = sum of remote interiors.",
      },
      {
        front: "What does the Hinge Theorem (SAS Inequality) state?",
        back: "If two sides of one triangle are congruent to two sides of another, the triangle with the larger included angle has the longer third side. Open the 'hinge' wider, get a longer opposite side.",
        hint: "Bigger included angle, longer third side.",
      },
      {
        front: "State the Converse of the Hinge Theorem.",
        back: "If two sides of one triangle are congruent to two sides of another, the triangle with the longer third side has the larger included angle.",
        hint: "Longer third side, bigger included angle.",
      },
      {
        front: "Trap: Can side lengths 4, 5, and 9 form a triangle?",
        back: "No. The two shortest sides sum to $4 + 5 = 9$, which is NOT greater than 9. Since the sum equals the third side, the points are collinear (a degenerate triangle), not a real triangle.",
        hint: "Sum equals the third side, so it is flat.",
      },
      {
        front: "Why must the inequality be strict (greater than, not equal)?",
        back: "If two sides sum to exactly the third side, the three points lie on a straight line, forming a flat, zero-area degenerate triangle. A genuine triangle requires the strict inequality.",
        hint: "Equality gives a flat line.",
      },
    ],
  },
];
