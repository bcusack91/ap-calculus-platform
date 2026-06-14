export const batchCards: { slug: string; cards: { front: string; back: string; hint?: string }[] }[] = [
  {
    slug: "double-half-angle-identities",
    cards: [
      {
        front: "State the three common forms of the double-angle identity for $\\\\cos(2\\\\theta)$.",
        back: "$\\\\cos(2\\\\theta) = \\\\cos^2\\\\theta - \\\\sin^2\\\\theta = 2\\\\cos^2\\\\theta - 1 = 1 - 2\\\\sin^2\\\\theta$. Choose the form that matches whatever single-power function you already have.",
        hint: "All equal; pick the convenient one."
      },
      {
        front: "What is the double-angle identity for $\\\\sin(2\\\\theta)$?",
        back: "$\\\\sin(2\\\\theta) = 2\\\\sin\\\\theta\\\\cos\\\\theta$. Use it to rewrite a product of sine and cosine as a single sine, or vice versa.",
        hint: "Two times the product."
      },
      {
        front: "What is the double-angle identity for $\\\\tan(2\\\\theta)$?",
        back: "$\\\\tan(2\\\\theta) = \\\\dfrac{2\\\\tan\\\\theta}{1 - \\\\tan^2\\\\theta}$, valid when $\\\\tan\\\\theta \\\\ne \\\\pm 1$ and $\\\\tan\\\\theta$ is defined.",
        hint: "Built from the sin and cos versions."
      },
      {
        front: "State the half-angle identity for $\\\\sin\\\\dfrac{\\\\theta}{2}$.",
        back: "$\\\\sin\\\\dfrac{\\\\theta}{2} = \\\\pm\\\\sqrt{\\\\dfrac{1 - \\\\cos\\\\theta}{2}}$. The sign is chosen by the quadrant in which $\\\\dfrac{\\\\theta}{2}$ lies, not the quadrant of $\\\\theta$.",
        hint: "Uses $1-\\\\cos\\\\theta$."
      },
      {
        front: "State the half-angle identity for $\\\\cos\\\\dfrac{\\\\theta}{2}$.",
        back: "$\\\\cos\\\\dfrac{\\\\theta}{2} = \\\\pm\\\\sqrt{\\\\dfrac{1 + \\\\cos\\\\theta}{2}}$. Pick the sign from the quadrant of $\\\\dfrac{\\\\theta}{2}$.",
        hint: "Uses $1+\\\\cos\\\\theta$."
      },
      {
        front: "Give two sign-free forms of the half-angle identity for $\\\\tan\\\\dfrac{\\\\theta}{2}$.",
        back: "$\\\\tan\\\\dfrac{\\\\theta}{2} = \\\\dfrac{1 - \\\\cos\\\\theta}{\\\\sin\\\\theta} = \\\\dfrac{\\\\sin\\\\theta}{1 + \\\\cos\\\\theta}$. These avoid the $\\\\pm$ because the sign comes out automatically.",
        hint: "No radical needed."
      },
      {
        front: "Power-reduction: express $\\\\sin^2\\\\theta$ and $\\\\cos^2\\\\theta$ using $\\\\cos(2\\\\theta)$.",
        back: "$\\\\sin^2\\\\theta = \\\\dfrac{1 - \\\\cos(2\\\\theta)}{2}$ and $\\\\cos^2\\\\theta = \\\\dfrac{1 + \\\\cos(2\\\\theta)}{2}$. These come straight from the $\\\\cos(2\\\\theta)$ forms and are essential for integrating even powers.",
        hint: "Solve the cos double-angle for the squared term."
      },
      {
        front: "Common trap: is $\\\\sin(2\\\\theta)$ equal to $2\\\\sin\\\\theta$?",
        back: "No. $\\\\sin(2\\\\theta) = 2\\\\sin\\\\theta\\\\cos\\\\theta$, not $2\\\\sin\\\\theta$. The argument doubling does not distribute through the function.",
        hint: "Don't pull the 2 inside."
      },
      {
        front: "How do you decide the sign in a half-angle evaluation?",
        back: "Determine the quadrant of the half-angle $\\\\dfrac{\\\\theta}{2}$, then use the sign of that trig function in that quadrant. Never use the quadrant of $\\\\theta$ itself.",
        hint: "Quadrant of the half-angle."
      },
      {
        front: "Worked example: given $\\\\sin\\\\theta = \\\\dfrac{3}{5}$ with $\\\\theta$ in QI, find $\\\\sin(2\\\\theta)$.",
        back: "$\\\\cos\\\\theta = \\\\dfrac{4}{5}$, so $\\\\sin(2\\\\theta) = 2\\\\cdot\\\\dfrac{3}{5}\\\\cdot\\\\dfrac{4}{5} = \\\\dfrac{24}{25}$.",
        hint: "Find cos first."
      },
      {
        front: "Worked example: use a half-angle identity to find $\\\\cos 15^\\\\circ$.",
        back: "Let $\\\\theta = 30^\\\\circ$. Then $\\\\cos 15^\\\\circ = \\\\sqrt{\\\\dfrac{1 + \\\\cos 30^\\\\circ}{2}} = \\\\sqrt{\\\\dfrac{1 + \\\\frac{\\\\sqrt3}{2}}{2}} = \\\\dfrac{\\\\sqrt{2 + \\\\sqrt3}}{2}$. Positive sign because $15^\\\\circ$ is in QI.",
        hint: "Half of $30^\\\\circ$."
      },
      {
        front: "Which identity rewrites $\\\\cos(2\\\\theta)$ purely in terms of $\\\\sin\\\\theta$, and when is that useful?",
        back: "$\\\\cos(2\\\\theta) = 1 - 2\\\\sin^2\\\\theta$. Use it when an equation already contains $\\\\sin\\\\theta$ so you can convert to a single variable and solve a quadratic in $\\\\sin\\\\theta$.",
        hint: "Match the function you already have."
      }
    ]
  },
  {
    slug: "sampling-distributions",
    cards: [
      {
        front: "What is a sampling distribution?",
        back: "The probability distribution of a statistic (such as $\\\\bar{x}$ or $\\\\hat{p}$) over all possible samples of a fixed size $n$ from a population. It describes how the statistic varies from sample to sample.",
        hint: "Distribution of a statistic, not of data."
      },
      {
        front: "Distinguish a parameter from a statistic.",
        back: "A parameter is a fixed number describing a population (e.g., $\\\\mu$, $p$). A statistic is computed from a sample and varies (e.g., $\\\\bar{x}$, $\\\\hat{p}$); it estimates the parameter.",
        hint: "Population vs sample."
      },
      {
        front: "What does it mean for a statistic to be an unbiased estimator?",
        back: "Its sampling distribution is centered at the true parameter; the mean of the statistic over all samples equals the parameter. Example: $\\\\bar{x}$ is unbiased for $\\\\mu$.",
        hint: "Centered on the truth."
      },
      {
        front: "Give the mean and standard deviation of the sampling distribution of $\\\\bar{x}$.",
        back: "$\\\\mu_{\\\\bar{x}} = \\\\mu$ and $\\\\sigma_{\\\\bar{x}} = \\\\dfrac{\\\\sigma}{\\\\sqrt{n}}$, where $\\\\mu$ and $\\\\sigma$ are the population mean and SD and $n$ is the sample size.",
        hint: "Divide population SD by root n."
      },
      {
        front: "Give the mean and standard deviation of the sampling distribution of $\\\\hat{p}$.",
        back: "$\\\\mu_{\\\\hat{p}} = p$ and $\\\\sigma_{\\\\hat{p}} = \\\\sqrt{\\\\dfrac{p(1-p)}{n}}$, where $p$ is the population proportion and $n$ the sample size.",
        hint: "Root of $p(1-p)/n$."
      },
      {
        front: "State the Central Limit Theorem (CLT).",
        back: "For a sufficiently large sample size $n$, the sampling distribution of $\\\\bar{x}$ is approximately Normal, regardless of the population's shape. A common rule of thumb is $n \\\\ge 30$.",
        hint: "Large n makes $\\\\bar{x}$ Normal."
      },
      {
        front: "What is the Large Counts condition for $\\\\hat{p}$?",
        back: "The sampling distribution of $\\\\hat{p}$ is approximately Normal when $np \\\\ge 10$ and $n(1-p) \\\\ge 10$ (expected successes and failures both at least 10).",
        hint: "Both counts at least 10."
      },
      {
        front: "What is the 10% condition and why does it matter?",
        back: "When sampling without replacement, the sample should be at most 10% of the population ($n \\\\le 0.10N$) so that observations are approximately independent and the SD formulas remain valid.",
        hint: "Independence when sampling without replacement."
      },
      {
        front: "Common trap: does increasing $n$ change the center or the spread of the sampling distribution of $\\\\bar{x}$?",
        back: "It does not change the center ($\\\\mu_{\\\\bar{x}} = \\\\mu$ always) but it decreases the spread, since $\\\\sigma_{\\\\bar{x}} = \\\\dfrac{\\\\sigma}{\\\\sqrt{n}}$ shrinks as $n$ grows.",
        hint: "Same center, smaller spread."
      },
      {
        front: "Why does the shape of the population matter less as $n$ grows?",
        back: "By the CLT, averaging many observations washes out skew and other shape features, so the sampling distribution of $\\\\bar{x}$ approaches Normal even from a non-Normal population.",
        hint: "CLT smooths the shape."
      },
      {
        front: "Worked example: a population has $\\\\mu = 50$, $\\\\sigma = 12$. For $n = 36$, find $\\\\sigma_{\\\\bar{x}}$.",
        back: "$\\\\sigma_{\\\\bar{x}} = \\\\dfrac{12}{\\\\sqrt{36}} = \\\\dfrac{12}{6} = 2$.",
        hint: "Divide by $\\\\sqrt{36}$."
      },
      {
        front: "Worked example: $p = 0.4$, $n = 100$. Find $\\\\sigma_{\\\\hat{p}}$ and check Normality.",
        back: "$\\\\sigma_{\\\\hat{p}} = \\\\sqrt{\\\\dfrac{0.4\\\\cdot 0.6}{100}} = \\\\sqrt{0.0024} \\\\approx 0.049$. Normal is OK since $np = 40$ and $n(1-p) = 60$, both $\\\\ge 10$.",
        hint: "Plug in then check counts."
      },
      {
        front: "If the population is already Normal, what sample size is needed for $\\\\bar{x}$ to be Normal?",
        back: "Any sample size. When the population is Normal, the sampling distribution of $\\\\bar{x}$ is exactly Normal for every $n$, with no minimum required.",
        hint: "Normal in, Normal out."
      }
    ]
  },
  {
    slug: "wh-enlightenment-political-revolutions",
    cards: [
      {
        front: "What was the Enlightenment?",
        back: "An 18th-century intellectual movement emphasizing reason, natural rights, and the scientific method as the basis for human progress and government, challenging traditional authority of monarchy and church.",
        hint: "Age of Reason."
      },
      {
        front: "What ideas did John Locke contribute to revolutionary thought?",
        back: "Locke argued people have natural rights to life, liberty, and property, and that government rests on a social contract; if a government violates these rights, the people may overthrow it.",
        hint: "Natural rights and consent of the governed."
      },
      {
        front: "What was Montesquieu's key political idea?",
        back: "Separation of powers among legislative, executive, and judicial branches, with checks and balances to prevent tyranny. It heavily influenced the U.S. Constitution.",
        hint: "Three branches."
      },
      {
        front: "What did Rousseau mean by the 'social contract' and the 'general will'?",
        back: "Rousseau held that legitimate government derives from a contract reflecting the collective 'general will' of the people, and that sovereignty rests with the people, not a king.",
        hint: "Popular sovereignty."
      },
      {
        front: "Identify two key documents of the American Revolution and their ideas.",
        back: "The Declaration of Independence (1776) asserted natural rights and the right to revolution; the U.S. Constitution (1787) and Bill of Rights established separation of powers and protected liberties.",
        hint: "1776 and 1787."
      },
      {
        front: "What were the immediate causes of the French Revolution (1789)?",
        back: "Financial crisis and debt, an unfair tax system burdening the Third Estate, food shortages, Enlightenment ideals, and resentment of absolute monarchy under Louis XVI.",
        hint: "Money, class, and ideas."
      },
      {
        front: "What was the Declaration of the Rights of Man and of the Citizen (1789)?",
        back: "A foundational French Revolutionary document proclaiming liberty, equality before the law, and natural rights for citizens, inspired by Enlightenment thought and the American example.",
        hint: "France's statement of rights."
      },
      {
        front: "What was the Haitian Revolution (1791-1804) and why was it significant?",
        back: "A successful slave revolt led by Toussaint Louverture against French rule that created Haiti, the first independent Black republic and the only nation born from a successful slave uprising.",
        hint: "First successful slave revolution."
      },
      {
        front: "Who led independence movements in Latin America, and what inspired them?",
        back: "Simon Bolivar and Jose de San Martin led revolutions against Spanish rule (early 1800s), inspired by Enlightenment ideals and the American and French Revolutions.",
        hint: "Bolivar, 'the Liberator.'"
      },
      {
        front: "Common trap: did the Enlightenment immediately bring equality to all people?",
        back: "No. Despite rhetoric of universal rights, revolutions often excluded women, enslaved people, and the poor; rights expanded slowly and unevenly over the following centuries.",
        hint: "Ideals outran practice."
      },
      {
        front: "What was the Reign of Terror?",
        back: "A radical, violent phase of the French Revolution (1793-1794) led by Robespierre and the Jacobins, marked by mass executions by guillotine of perceived enemies of the revolution.",
        hint: "Robespierre and the guillotine."
      },
      {
        front: "How did the revolutions of this era connect to one another?",
        back: "They shared Enlightenment ideas of natural rights and popular sovereignty; the American Revolution inspired the French, which in turn inspired Haitian and Latin American independence movements (an Atlantic 'age of revolutions').",
        hint: "A chain of influence."
      },
      {
        front: "What was Olympe de Gouges known for?",
        back: "She wrote the Declaration of the Rights of Woman (1791), demanding equal rights for women during the French Revolution; she was later executed during the Terror.",
        hint: "Women's rights in revolutionary France."
      }
    ]
  },
  {
    slug: "solving-equations-prealg",
    cards: [
      {
        front: "What does it mean to 'solve' an equation?",
        back: "To find the value(s) of the variable that make the equation a true statement. You isolate the variable on one side using inverse operations.",
        hint: "Get the variable alone."
      },
      {
        front: "What is the golden rule of solving equations?",
        back: "Whatever you do to one side of the equation, you must do to the other side, so that equality is preserved.",
        hint: "Keep both sides balanced."
      },
      {
        front: "Which operation undoes addition, and which undoes multiplication?",
        back: "Subtraction undoes addition (and vice versa); division undoes multiplication (and vice versa). These inverse operations isolate the variable.",
        hint: "Inverse operations."
      },
      {
        front: "Solve $x + 7 = 12$.",
        back: "Subtract 7 from both sides: $x = 12 - 7 = 5$.",
        hint: "Undo the +7."
      },
      {
        front: "Solve $3x = 21$.",
        back: "Divide both sides by 3: $x = \\\\dfrac{21}{3} = 7$.",
        hint: "Undo multiply by 3."
      },
      {
        front: "Solve the two-step equation $2x + 5 = 17$.",
        back: "Subtract 5: $2x = 12$. Then divide by 2: $x = 6$. Undo addition/subtraction before multiplication/division.",
        hint: "Subtract first, then divide."
      },
      {
        front: "How do you check a solution?",
        back: "Substitute your answer back into the original equation and verify both sides are equal. If they match, the solution is correct.",
        hint: "Plug it back in."
      },
      {
        front: "Common trap: in $-x = 8$, what is $x$?",
        back: "$x = -8$. Multiply (or divide) both sides by $-1$ to make the coefficient of $x$ positive.",
        hint: "Flip the sign."
      },
      {
        front: "Solve $\\\\dfrac{x}{4} = 5$.",
        back: "Multiply both sides by 4: $x = 20$.",
        hint: "Undo dividing by 4."
      },
      {
        front: "How do you solve an equation with variables on both sides, like $5x = 2x + 9$?",
        back: "Move variable terms to one side: subtract $2x$ to get $3x = 9$, then divide by 3 to get $x = 3$.",
        hint: "Collect variables first."
      },
      {
        front: "What should you do first with $2(x + 3) = 14$?",
        back: "Distribute: $2x + 6 = 14$. Then subtract 6 ($2x = 8$) and divide by 2 ($x = 4$). Or divide both sides by 2 first.",
        hint: "Distribute or divide."
      },
      {
        front: "Common trap: when you divide both sides by a negative in an equation, do you flip anything?",
        back: "No. Equations keep the equals sign no matter the sign of the divisor. (Flipping the symbol is only for inequalities.)",
        hint: "Equations vs inequalities."
      }
    ]
  },
  {
    slug: "logarithms-properties-alg2",
    cards: [
      {
        front: "What does $\\\\log_b(x) = y$ mean in exponential form?",
        back: "It means $b^y = x$. A logarithm is the exponent to which the base $b$ must be raised to get $x$, where $b > 0$, $b \\\\ne 1$, and $x > 0$.",
        hint: "Log = the exponent."
      },
      {
        front: "State the product property of logarithms.",
        back: "$\\\\log_b(MN) = \\\\log_b M + \\\\log_b N$. The log of a product is the sum of the logs (same base, positive arguments).",
        hint: "Multiply becomes add."
      },
      {
        front: "State the quotient property of logarithms.",
        back: "$\\\\log_b\\\\left(\\\\dfrac{M}{N}\\\\right) = \\\\log_b M - \\\\log_b N$. The log of a quotient is the difference of the logs.",
        hint: "Divide becomes subtract."
      },
      {
        front: "State the power property of logarithms.",
        back: "$\\\\log_b(M^p) = p\\\\,\\\\log_b M$. An exponent inside a log can be pulled out front as a multiplier.",
        hint: "Exponent comes out front."
      },
      {
        front: "State the change-of-base formula.",
        back: "$\\\\log_b x = \\\\dfrac{\\\\log_c x}{\\\\log_c b}$ for any valid new base $c$. Use base 10 or $e$ so you can compute on a calculator.",
        hint: "Switch to base 10 or e."
      },
      {
        front: "What are $\\\\log_b 1$ and $\\\\log_b b$?",
        back: "$\\\\log_b 1 = 0$ (since $b^0 = 1$) and $\\\\log_b b = 1$ (since $b^1 = b$).",
        hint: "Use exponent form."
      },
      {
        front: "What do 'log' and 'ln' mean by convention?",
        back: "$\\\\log x$ usually means $\\\\log_{10} x$ (common log, base 10), and $\\\\ln x$ means $\\\\log_e x$ (natural log, base $e \\\\approx 2.718$).",
        hint: "Base 10 vs base e."
      },
      {
        front: "Simplify $\\\\log_2 8 + \\\\log_2 4$ using log properties.",
        back: "Product property: $\\\\log_2(8 \\\\cdot 4) = \\\\log_2 32 = 5$, since $2^5 = 32$.",
        hint: "Add becomes multiply."
      },
      {
        front: "Common trap: does $\\\\log_b(M + N)$ equal $\\\\log_b M + \\\\log_b N$?",
        back: "No. There is no log rule for the log of a sum. The product rule applies only to $\\\\log_b(MN)$, not $\\\\log_b(M+N)$.",
        hint: "Sum inside is not splittable."
      },
      {
        front: "Expand $\\\\log\\\\left(\\\\dfrac{x^3 y}{z}\\\\right)$ fully.",
        back: "$3\\\\log x + \\\\log y - \\\\log z$. Apply quotient, product, and power properties in turn.",
        hint: "Powers out, products add, quotient subtracts."
      },
      {
        front: "Condense $2\\\\log x - \\\\log y$ into a single logarithm.",
        back: "$\\\\log\\\\left(\\\\dfrac{x^2}{y}\\\\right)$. Use the power rule to get $\\\\log(x^2)$, then the quotient rule.",
        hint: "Reverse the expansion steps."
      },
      {
        front: "Solve $\\\\log_3 x = 4$.",
        back: "Rewrite in exponential form: $x = 3^4 = 81$.",
        hint: "Convert to exponential."
      },
      {
        front: "Why must the argument of a logarithm be positive?",
        back: "Because $b^y$ is always positive for a positive base $b$, no exponent $y$ can produce a zero or negative result, so $\\\\log_b(x)$ is undefined for $x \\\\le 0$.",
        hint: "Range of $b^y$."
      }
    ]
  },
  {
    slug: "apes-fossil-fuels-nuclear",
    cards: [
      {
        front: "What are the three main fossil fuels and how do they form?",
        back: "Coal, oil (petroleum), and natural gas. They form over millions of years from the buried, compressed remains of ancient organisms, making them nonrenewable on human timescales.",
        hint: "Ancient buried organic matter."
      },
      {
        front: "Rank the major fossil fuels by carbon emissions per unit energy.",
        back: "Coal emits the most $\\\\mathrm{CO_2}$ per unit energy, oil is intermediate, and natural gas emits the least. Natural gas is often called a 'bridge fuel' for this reason.",
        hint: "Coal worst, gas cleanest."
      },
      {
        front: "What is the chief environmental concern of burning coal?",
        back: "It releases large amounts of $\\\\mathrm{CO_2}$ (greenhouse gas), plus sulfur dioxide ($\\\\mathrm{SO_2}$) causing acid rain, particulates, and toxic metals like mercury; mining also damages land.",
        hint: "$\\\\mathrm{CO_2}$, $\\\\mathrm{SO_2}$, mercury."
      },
      {
        front: "How does a fossil-fuel power plant generate electricity?",
        back: "Burning fuel heats water into steam, which spins a turbine connected to a generator. This is the same basic steam-turbine cycle used by most thermal and nuclear plants.",
        hint: "Heat, steam, turbine, generator."
      },
      {
        front: "What is hydraulic fracturing (fracking)?",
        back: "Injecting high-pressure fluid into shale rock to release trapped oil and natural gas. Concerns include groundwater contamination, methane leaks, and induced earthquakes.",
        hint: "Cracking shale for gas."
      },
      {
        front: "What fuels a nuclear power plant, and what reaction occurs?",
        back: "Enriched uranium-235 (or plutonium) undergoes nuclear fission, splitting into smaller nuclei and releasing large amounts of heat used to make steam.",
        hint: "Fission of U-235."
      },
      {
        front: "What are the main advantages of nuclear power?",
        back: "It produces large, reliable amounts of energy with essentially no greenhouse gas or air-pollutant emissions during operation, and uses a small fuel mass.",
        hint: "High output, low carbon."
      },
      {
        front: "What are the main drawbacks and risks of nuclear power?",
        back: "Radioactive waste that stays dangerous for thousands of years, high construction cost, thermal pollution, uranium mining impacts, and the risk of catastrophic accidents (e.g., Chernobyl, Fukushima).",
        hint: "Waste, cost, accidents."
      },
      {
        front: "What is the role of control rods and the moderator in a reactor?",
        back: "Control rods absorb neutrons to slow or stop the chain reaction; the moderator (often water) slows neutrons so they sustain fission. Together they regulate the reaction rate.",
        hint: "Rods absorb, moderator slows."
      },
      {
        front: "Common trap: what kind of 'pollution' do nuclear plants release into nearby water?",
        back: "Thermal pollution. They discharge warm water that lowers dissolved oxygen and harms aquatic life. Note this is heat, not (under normal operation) radioactive contamination.",
        hint: "Heat, not radiation."
      },
      {
        front: "What is the difference between fission and fusion?",
        back: "Fission splits heavy nuclei (used in current reactors); fusion joins light nuclei like hydrogen into helium (powers the Sun). Fusion offers huge clean energy potential but is not yet commercially viable.",
        hint: "Split vs combine."
      },
      {
        front: "Why are fossil fuels considered nonrenewable while their energy ultimately comes from the Sun?",
        back: "The solar energy was stored in organisms over millions of years; we burn these deposits far faster than they can re-form, so the supply is finite on human timescales.",
        hint: "Used faster than made."
      }
    ]
  },
  {
    slug: "normal-distributions",
    cards: [
      {
        front: "What are the defining features of a Normal distribution?",
        back: "It is symmetric, bell-shaped, and fully described by its mean $\\\\mu$ (center) and standard deviation $\\\\sigma$ (spread). Mean, median, and mode are all equal.",
        hint: "Symmetric bell, two parameters."
      },
      {
        front: "State the empirical (68-95-99.7) rule.",
        back: "In a Normal distribution, about 68% of data lies within $1\\\\sigma$ of the mean, about 95% within $2\\\\sigma$, and about 99.7% within $3\\\\sigma$.",
        hint: "1, 2, 3 standard deviations."
      },
      {
        front: "What is a z-score and how is it computed?",
        back: "$z = \\\\dfrac{x - \\\\mu}{\\\\sigma}$. It measures how many standard deviations a value $x$ is from the mean $\\\\mu$. Positive means above the mean, negative below.",
        hint: "Standardize the value."
      },
      {
        front: "What is the standard Normal distribution?",
        back: "The Normal distribution with mean $\\\\mu = 0$ and standard deviation $\\\\sigma = 1$. Any Normal variable becomes standard Normal after computing z-scores.",
        hint: "Mean 0, SD 1."
      },
      {
        front: "How do you find the proportion of data below a value $x$?",
        back: "Convert to a z-score, then look up the cumulative area to the left in a Normal table (or use technology). That area is the proportion below $x$.",
        hint: "z-score then table area."
      },
      {
        front: "How do you find the proportion ABOVE a value, given a left-tail table?",
        back: "Find the area to the left, then subtract from 1: proportion above $= 1 - (\\\\text{area to left})$. Tables give cumulative left-tail area.",
        hint: "Complement of the left area."
      },
      {
        front: "How do you find the area between two values?",
        back: "Find the left-tail area for each, then subtract: area between $= (\\\\text{area below larger}) - (\\\\text{area below smaller})$.",
        hint: "Subtract the two left areas."
      },
      {
        front: "What is an inverse Normal calculation?",
        back: "Going from a given percentile (area) back to a value $x$. Find the z-score for the percentile, then solve $x = \\\\mu + z\\\\sigma$.",
        hint: "Area to value."
      },
      {
        front: "Worked example: scores are Normal with $\\\\mu = 500$, $\\\\sigma = 100$. What z-score corresponds to a score of 650?",
        back: "$z = \\\\dfrac{650 - 500}{100} = 1.5$, so 650 is 1.5 standard deviations above the mean.",
        hint: "Plug into the z formula."
      },
      {
        front: "Worked example: with $\\\\mu = 500$, $\\\\sigma = 100$, roughly what percent score above 600?",
        back: "600 is $z = 1$, so about 16% score above it (since 68% are within $1\\\\sigma$, leaving 32% in the two tails, half above).",
        hint: "Use 68% rule and symmetry."
      },
      {
        front: "Common trap: does a large z-score mean a value is common?",
        back: "No. A large absolute z-score (e.g., $|z| > 2$) means the value is far from the mean and therefore unusual/rare in a Normal distribution.",
        hint: "Far from mean = rare."
      },
      {
        front: "How can you assess whether data is approximately Normal?",
        back: "Make a histogram or dotplot (should look roughly symmetric and bell-shaped) or a Normal probability plot (should be roughly linear). Heavy skew or outliers suggest non-Normality.",
        hint: "Graph it."
      },
      {
        front: "If $X$ is Normal, what is the distribution of $aX + b$?",
        back: "Also Normal, with mean $a\\\\mu + b$ and standard deviation $|a|\\\\sigma$. Linear transformations of a Normal variable stay Normal.",
        hint: "Linear transforms preserve Normality."
      }
    ]
  },
  {
    slug: "trigonometric-ratios-geo",
    cards: [
      {
        front: "Define the three primary trigonometric ratios using SOH-CAH-TOA.",
        back: "For an acute angle in a right triangle: $\\\\sin = \\\\dfrac{\\\\text{opposite}}{\\\\text{hypotenuse}}$, $\\\\cos = \\\\dfrac{\\\\text{adjacent}}{\\\\text{hypotenuse}}$, $\\\\tan = \\\\dfrac{\\\\text{opposite}}{\\\\text{adjacent}}$.",
        hint: "SOH-CAH-TOA."
      },
      {
        front: "Which side is the hypotenuse, and which sides are 'opposite' and 'adjacent'?",
        back: "The hypotenuse is the longest side, across from the right angle. 'Opposite' and 'adjacent' are defined relative to the chosen acute angle: opposite faces it, adjacent touches it (and isn't the hypotenuse).",
        hint: "Relative to the angle."
      },
      {
        front: "How do sine and cosine of complementary angles relate?",
        back: "$\\\\sin\\\\theta = \\\\cos(90^\\\\circ - \\\\theta)$. The sine of an angle equals the cosine of its complement, which is the 'co' in cosine.",
        hint: "Cofunction relationship."
      },
      {
        front: "How do you find an unknown side using a trig ratio?",
        back: "Set up the ratio that uses the known angle and known side, then solve. Example: $\\\\sin 30^\\\\circ = \\\\dfrac{x}{10}$ gives $x = 10\\\\sin 30^\\\\circ = 5$.",
        hint: "Match ratio to known parts."
      },
      {
        front: "How do you find an unknown ANGLE from two known sides?",
        back: "Use an inverse trig function. Example: if $\\\\tan\\\\theta = \\\\dfrac{3}{4}$, then $\\\\theta = \\\\tan^{-1}\\\\left(\\\\dfrac{3}{4}\\\\right) \\\\approx 36.9^\\\\circ$.",
        hint: "Inverse trig ($\\\\sin^{-1}$, etc.)."
      },
      {
        front: "What are the exact values of $\\\\sin$, $\\\\cos$, $\\\\tan$ at $30^\\\\circ$?",
        back: "$\\\\sin 30^\\\\circ = \\\\dfrac{1}{2}$, $\\\\cos 30^\\\\circ = \\\\dfrac{\\\\sqrt3}{2}$, $\\\\tan 30^\\\\circ = \\\\dfrac{\\\\sqrt3}{3}$.",
        hint: "From the 30-60-90 triangle."
      },
      {
        front: "What are the exact values of $\\\\sin$, $\\\\cos$, $\\\\tan$ at $45^\\\\circ$?",
        back: "$\\\\sin 45^\\\\circ = \\\\cos 45^\\\\circ = \\\\dfrac{\\\\sqrt2}{2}$ and $\\\\tan 45^\\\\circ = 1$.",
        hint: "From the 45-45-90 triangle."
      },
      {
        front: "What is an angle of elevation versus an angle of depression?",
        back: "Angle of elevation is measured upward from the horizontal to a line of sight; angle of depression is measured downward from the horizontal. They are equal for the same two points (alternate interior angles).",
        hint: "Up vs down from horizontal."
      },
      {
        front: "Common trap: in $\\\\sin 30^\\\\circ = \\\\dfrac{x}{10}$, students set $x = \\\\dfrac{\\\\sin 30^\\\\circ}{10}$. Correct it.",
        back: "Wrong. Multiply both sides by 10: $x = 10\\\\sin 30^\\\\circ = 5$. The side equals hypotenuse times the ratio when the unknown is the numerator.",
        hint: "Multiply, don't divide, by 10."
      },
      {
        front: "Worked example: a right triangle has legs 6 and 8. Find $\\\\sin\\\\theta$ for the angle opposite the side of length 6.",
        back: "Hypotenuse $= \\\\sqrt{6^2 + 8^2} = 10$, so $\\\\sin\\\\theta = \\\\dfrac{6}{10} = \\\\dfrac{3}{5}$.",
        hint: "Find hypotenuse first."
      },
      {
        front: "Worked example: from 50 ft away, the angle of elevation to a treetop is $40^\\\\circ$. Find the tree's height.",
        back: "$\\\\tan 40^\\\\circ = \\\\dfrac{h}{50}$, so $h = 50\\\\tan 40^\\\\circ \\\\approx 42$ ft.",
        hint: "Tangent uses opposite over adjacent."
      },
      {
        front: "Why are trig ratios the same for similar right triangles?",
        back: "Similar triangles have equal corresponding angles, and their corresponding sides are proportional, so the side ratios (sine, cosine, tangent) depend only on the angle, not the triangle's size.",
        hint: "Ratios depend on angle alone."
      }
    ]
  }
];
