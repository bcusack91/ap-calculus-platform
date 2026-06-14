export const batchCards: { slug: string; cards: { front: string; back: string; hint?: string }[] }[] = [
  {
    slug: "completing-the-square",
    cards: [
      {
        front: "What is the goal of 'completing the square'?",
        back: "To rewrite a quadratic $ax^2 + bx + c$ into the form $a(x - h)^2 + k$, which exposes the vertex $(h, k)$ and makes the equation solvable by square roots.",
        hint: "Turn it into a perfect-square trinomial",
      },
      {
        front: "For a monic quadratic $x^2 + bx$, what constant completes the square?",
        back: "Add $\\\\left(\\\\dfrac{b}{2}\\\\right)^2$. Then $x^2 + bx + \\\\left(\\\\dfrac{b}{2}\\\\right)^2 = \\\\left(x + \\\\dfrac{b}{2}\\\\right)^2$.",
        hint: "Half the linear coefficient, then square it",
      },
      {
        front: "Why must you factor out the leading coefficient $a$ first when $a \\\\neq 1$?",
        back: "Because the $\\\\left(\\\\dfrac{b}{2}\\\\right)^2$ rule only works on a monic ($x^2$ with coefficient 1) expression. Factor $a$ out of the $x^2$ and $x$ terms before completing the square.",
        hint: "The rule assumes coefficient 1 on $x^2$",
      },
      {
        front: "Complete the square: $x^2 + 6x + 5$.",
        back: "$x^2 + 6x = (x+3)^2 - 9$, so $x^2 + 6x + 5 = (x+3)^2 - 9 + 5 = (x+3)^2 - 4$. Vertex at $(-3, -4)$.",
        hint: "Half of 6 is 3, squared is 9",
      },
      {
        front: "Complete the square: $2x^2 + 8x + 3$.",
        back: "Factor: $2(x^2 + 4x) + 3 = 2((x+2)^2 - 4) + 3 = 2(x+2)^2 - 8 + 3 = 2(x+2)^2 - 5$.",
        hint: "Pull out the 2 first, then distribute back",
      },
      {
        front: "How does completing the square produce the quadratic formula?",
        back: "Applying the process to the general $ax^2 + bx + c = 0$ yields $x = \\\\dfrac{-b \\\\pm \\\\sqrt{b^2 - 4ac}}{2a}$. The quadratic formula is just completing the square done symbolically.",
        hint: "It is the general case of the same procedure",
      },
      {
        front: "Solve by completing the square: $x^2 - 4x - 7 = 0$.",
        back: "$x^2 - 4x = 7 \\\\Rightarrow (x-2)^2 - 4 = 7 \\\\Rightarrow (x-2)^2 = 11 \\\\Rightarrow x = 2 \\\\pm \\\\sqrt{11}$.",
        hint: "Move the constant, then take square roots",
      },
      {
        front: "In vertex form $a(x-h)^2 + k$, what do $h$ and $k$ represent?",
        back: "$(h, k)$ is the vertex of the parabola; $x = h$ is the axis of symmetry, and $k$ is the minimum value if $a>0$ or maximum value if $a<0$.",
        hint: "Watch the sign of $h$ inside the parenthesis",
      },
      {
        front: "Common trap: students write $x^2 + 6x + 9 = (x+3)^2$ and forget to balance. What is the fix?",
        back: "When you add a constant to complete the square inside an expression, you must subtract it back (or add to both sides of an equation) to keep the value unchanged. Do not silently add 9.",
        hint: "Add and subtract, or add to both sides",
      },
      {
        front: "How is completing the square used with circles?",
        back: "It converts a general equation like $x^2 + y^2 + Dx + Ey + F = 0$ into standard form $(x-h)^2 + (y-k)^2 = r^2$, revealing center $(h,k)$ and radius $r$.",
        hint: "Complete the square in $x$ and in $y$ separately",
      },
      {
        front: "Write $y = x^2 + 5x + 2$ in vertex form.",
        back: "Half of 5 is $\\\\tfrac{5}{2}$, squared is $\\\\tfrac{25}{4}$: $y = \\\\left(x + \\\\tfrac{5}{2}\\\\right)^2 - \\\\tfrac{25}{4} + 2 = \\\\left(x + \\\\tfrac{5}{2}\\\\right)^2 - \\\\tfrac{17}{4}$.",
        hint: "Fractions are fine; keep $b/2$ exact",
      },
      {
        front: "How can completing the square reveal the discriminant's role?",
        back: "Setting $a(x-h)^2 + k = 0$ gives $(x-h)^2 = -k/a$. Real solutions require the right side $\\\\geq 0$, which corresponds exactly to the discriminant $b^2 - 4ac \\\\geq 0$.",
        hint: "No real roots when you must take $\\\\sqrt{\\\\text{negative}}$",
      },
      {
        front: "Why is completing the square useful for integration in calculus?",
        back: "It rewrites denominators like $x^2 + bx + c$ into $(x-h)^2 + k$, matching standard arctangent or logarithm integral forms.",
        hint: "Sets up $\\\\int \\\\frac{dx}{u^2 + a^2}$ patterns",
      },
    ],
  },
  {
    slug: "attitudes-persuasion",
    cards: [
      {
        front: "What is an attitude in social psychology?",
        back: "A learned, evaluative response (favorable or unfavorable) toward a person, object, or idea, typically described by the ABC components: Affect (feelings), Behavior (actions), and Cognition (beliefs).",
        hint: "ABC model",
      },
      {
        front: "What is the foot-in-the-door phenomenon?",
        back: "The tendency for people who agree to a small request to later comply with a larger one. Granting the small request shifts self-perception, making the bigger 'ask' feel consistent.",
        hint: "Small request first, big request second",
      },
      {
        front: "What is the door-in-the-face technique?",
        back: "A persuasion tactic where a large, likely-rejected request is made first, then a smaller (target) request follows. The contrast and perceived concession increase compliance with the smaller request.",
        hint: "Big 'no' first, then the real (smaller) ask",
      },
      {
        front: "What is cognitive dissonance?",
        back: "The mental discomfort (proposed by Festinger) felt when attitudes and behaviors conflict. People reduce it by changing their attitude to match their behavior.",
        hint: "Behavior changes attitude to relieve tension",
      },
      {
        front: "Distinguish the central and peripheral routes to persuasion (Elaboration Likelihood Model).",
        back: "The central route uses careful evaluation of the argument's content and evidence (deep processing, lasting change). The peripheral route relies on superficial cues like attractiveness, celebrity, or emotion (quick, less durable change).",
        hint: "Logic vs. cues",
      },
      {
        front: "When is the central route to persuasion most likely used?",
        back: "When the audience is motivated and able to think carefully about the issue (high personal relevance, few distractions, adequate knowledge).",
        hint: "Motivation + ability to process",
      },
      {
        front: "What is the foot-in-the-door's underlying mechanism?",
        back: "Self-perception/consistency: after agreeing to the small request, people come to see themselves as the kind of person who helps, so they continue to comply.",
        hint: "Self-perception theory",
      },
      {
        front: "What does the mere exposure effect predict about attitudes?",
        back: "Repeated exposure to a stimulus increases liking for it, even without conscious awareness. Familiarity breeds preference.",
        hint: "Familiarity increases liking",
      },
      {
        front: "Differentiate explicit and implicit attitudes.",
        back: "Explicit attitudes are conscious, deliberate, and reportable. Implicit attitudes are automatic, unconscious evaluations that can be measured indirectly (e.g., the Implicit Association Test).",
        hint: "Aware vs. automatic",
      },
      {
        front: "How does the attitude-behavior connection depend on specificity and strength?",
        back: "Attitudes best predict behavior when they are specific to the behavior, strongly held, stable, and easily recalled, and when external pressures are weak.",
        hint: "Specific + strong attitudes predict action",
      },
      {
        front: "What is the central insight of Festinger and Carlsmith's $1 vs $20 study?",
        back: "Participants paid only $1 to lie that a boring task was fun later rated the task as more enjoyable, because the small payment created dissonance they resolved by changing their attitude.",
        hint: "Insufficient justification → attitude change",
      },
      {
        front: "What three factors affect persuasion (the communication model)?",
        back: "The source (credibility, attractiveness), the message (content, emotional vs. logical appeals, one- vs. two-sided), and the audience (age, involvement, prior beliefs).",
        hint: "Who says what to whom",
      },
      {
        front: "What is the difference between persuasion and conformity?",
        back: "Persuasion changes attitudes through communication and argument, while conformity changes behavior to match a group due to real or imagined social pressure (normative or informational influence).",
        hint: "Argument vs. social pressure",
      },
    ],
  },
  {
    slug: "apes-solid-hazardous-waste",
    cards: [
      {
        front: "What are the three R's of waste management, in priority order?",
        back: "Reduce, Reuse, Recycle. Reducing consumption is the most effective because it prevents waste from being created at all.",
        hint: "Source reduction comes first",
      },
      {
        front: "What is a sanitary landfill and how does it differ from an open dump?",
        back: "A sanitary landfill seals waste with a clay or plastic liner, a leachate collection system, and daily soil cover to limit groundwater and air pollution. An open dump has no such protections.",
        hint: "Liner + leachate collection + cover",
      },
      {
        front: "What is leachate?",
        back: "Liquid (often rainwater) that percolates through landfill waste, dissolving contaminants. If uncontained, it can pollute groundwater, so landfills collect and treat it.",
        hint: "Contaminated landfill 'tea'",
      },
      {
        front: "What greenhouse gas do landfills emit, and why?",
        back: "Methane ($CH_4$), produced by anaerobic bacterial decomposition of organic waste. Many landfills capture it for energy or flaring.",
        hint: "Anaerobic decomposition product",
      },
      {
        front: "What are the pros and cons of incineration of solid waste?",
        back: "Pros: reduces waste volume by up to about 90% and can generate energy (waste-to-energy). Cons: releases air pollutants (dioxins, $CO_2$, particulates) and leaves toxic ash that must be landfilled.",
        hint: "Volume reduction vs. air pollution + ash",
      },
      {
        front: "What is hazardous waste, by definition?",
        back: "Waste that is ignitable, corrosive, reactive, or toxic. It poses substantial danger to human health or the environment and requires special handling.",
        hint: "Ignitable, corrosive, reactive, toxic",
      },
      {
        front: "What U.S. law regulates the management of hazardous waste from creation to disposal?",
        back: "RCRA, the Resource Conservation and Recovery Act (1976), which uses 'cradle-to-grave' tracking of hazardous waste.",
        hint: "Cradle-to-grave",
      },
      {
        front: "What is CERCLA / Superfund?",
        back: "The Comprehensive Environmental Response, Compensation, and Liability Act (1980), which funds the cleanup of abandoned hazardous waste sites and holds polluters financially responsible.",
        hint: "Cleans up abandoned toxic sites",
      },
      {
        front: "What is e-waste and why is it a concern?",
        back: "Discarded electronics (phones, computers, TVs). It contains toxic heavy metals like lead, mercury, and cadmium that can leach into soil and water if landfilled or improperly dismantled.",
        hint: "Heavy metals from electronics",
      },
      {
        front: "Define bioremediation and phytoremediation.",
        back: "Bioremediation uses microorganisms to break down contaminants. Phytoremediation uses plants to absorb, store, or degrade pollutants (e.g., heavy metals) from soil or water.",
        hint: "Microbes vs. plants",
      },
      {
        front: "What is composting and what does it accomplish?",
        back: "The controlled aerobic decomposition of organic waste into nutrient-rich humus. It diverts organic material from landfills and reduces methane while creating useful soil amendment.",
        hint: "Aerobic breakdown of organics",
      },
      {
        front: "Why is recycling sometimes economically or environmentally limited?",
        back: "Collection, sorting, and transport require energy and money; some materials degrade in quality with each cycle (e.g., paper, plastic), and markets for recycled goods can be unstable.",
        hint: "Energy, sorting cost, and downcycling",
      },
      {
        front: "What is a 'cradle-to-grave' versus 'cradle-to-cradle' approach?",
        back: "Cradle-to-grave tracks a product from production to disposal. Cradle-to-cradle designs products so materials are continually reused or recycled, eliminating the 'grave' stage.",
        hint: "Linear disposal vs. closed loop",
      },
    ],
  },
  {
    slug: "binomial-distribution",
    cards: [
      {
        front: "What four conditions define a binomial setting (BINS)?",
        back: "Binary outcomes (success/failure), Independent trials, a fixed Number of trials $n$, and the Same probability of success $p$ on each trial.",
        hint: "B-I-N-S",
      },
      {
        front: "What is the binomial probability formula?",
        back: "$P(X = k) = \\\\binom{n}{k} p^k (1-p)^{n-k}$, where $n$ = number of trials, $k$ = number of successes, $p$ = probability of success, and $\\\\binom{n}{k}$ = number of ways to choose $k$ successes.",
        hint: "Choose, times $p^k$, times $q^{n-k}$",
      },
      {
        front: "What is the mean (expected value) of a binomial random variable?",
        back: "$\\\\mu = np$, where $n$ is the number of trials and $p$ is the probability of success.",
        hint: "Trials times success probability",
      },
      {
        front: "What is the standard deviation of a binomial random variable?",
        back: "$\\\\sigma = \\\\sqrt{np(1-p)}$, where $n$ = trials, $p$ = success probability, $1-p$ = failure probability.",
        hint: "$\\\\sqrt{npq}$",
      },
      {
        front: "What does $\\\\binom{n}{k}$ (the binomial coefficient) count, and how is it computed?",
        back: "It counts the number of ways to choose $k$ successes among $n$ trials: $\\\\binom{n}{k} = \\\\dfrac{n!}{k!(n-k)!}$.",
        hint: "n choose k",
      },
      {
        front: "A fair coin is flipped 5 times. What is the probability of exactly 3 heads?",
        back: "$P(X=3) = \\\\binom{5}{3}(0.5)^3(0.5)^2 = 10 \\\\cdot 0.5^5 = \\\\dfrac{10}{32} = 0.3125$.",
        hint: "n=5, k=3, p=0.5",
      },
      {
        front: "How do you find $P(X \\\\geq 1)$ efficiently for a binomial?",
        back: "Use the complement: $P(X \\\\geq 1) = 1 - P(X = 0) = 1 - (1-p)^n$. This avoids summing many terms.",
        hint: "1 minus 'no successes'",
      },
      {
        front: "When can a binomial distribution be approximated by a normal distribution?",
        back: "When both $np \\\\geq 10$ and $n(1-p) \\\\geq 10$ (the large-counts condition). Then $X \\\\approx N(np, \\\\sqrt{np(1-p)})$.",
        hint: "Large counts: at least 10 expected successes and failures",
      },
      {
        front: "What is the 10% condition and when does it apply?",
        back: "When sampling without replacement, trials are not truly independent, but the binomial is acceptable if the sample is less than 10% of the population, so $p$ stays nearly constant.",
        hint: "$n \\\\leq 0.10 N$ for sampling without replacement",
      },
      {
        front: "How does a binomial distribution differ from a geometric distribution?",
        back: "Binomial counts the number of successes in a fixed number $n$ of trials. Geometric counts the number of trials until the first success (number of trials is not fixed).",
        hint: "Fixed trials vs. wait for first success",
      },
      {
        front: "Common trap: computing $P(X \\\\geq 3)$ on a calculator. What is the correct setup?",
        back: "Use $1 - P(X \\\\leq 2)$, i.e., $1 - \\\\text{binomcdf}(n, p, 2)$. Be careful that binomcdf is cumulative ($\\\\leq$), so adjust the boundary correctly.",
        hint: "Convert 'at least' using the complement of a cdf",
      },
      {
        front: "What is the shape of a binomial distribution and how does $p$ affect it?",
        back: "It is symmetric when $p = 0.5$, right-skewed when $p < 0.5$, and left-skewed when $p > 0.5$. Increasing $n$ makes it more bell-shaped.",
        hint: "Skew direction depends on $p$",
      },
      {
        front: "A quiz has 10 questions, each with $p=0.25$ of a correct guess. Find the mean and standard deviation of correct answers.",
        back: "$\\\\mu = np = 10(0.25) = 2.5$; $\\\\sigma = \\\\sqrt{10(0.25)(0.75)} = \\\\sqrt{1.875} \\\\approx 1.37$.",
        hint: "Plug into $np$ and $\\\\sqrt{npq}$",
      },
    ],
  },
  {
    slug: "apush-vietnam-social-change",
    cards: [
      {
        front: "What was the Gulf of Tonkin Resolution (1964)?",
        back: "A congressional resolution, passed after reported attacks on U.S. ships, that gave President Johnson broad authority to escalate U.S. military involvement in Vietnam without a formal declaration of war.",
        hint: "LBJ's 'blank check'",
      },
      {
        front: "What was the policy of 'Vietnamization' under Nixon?",
        back: "Nixon's strategy to gradually withdraw U.S. troops while training and equipping South Vietnamese forces to take over the fighting, aiming for 'peace with honor.'",
        hint: "Shift fighting to South Vietnam",
      },
      {
        front: "What was the significance of the Tet Offensive (1968)?",
        back: "A massive coordinated North Vietnamese/Viet Cong attack that, although militarily repelled, shocked the U.S. public, contradicted optimistic government reports, and turned public opinion sharply against the war.",
        hint: "Military loss, psychological/political win for the North",
      },
      {
        front: "What were the Pentagon Papers?",
        back: "Leaked classified documents (1971) revealing that the government had misled the public about the scope and progress of the Vietnam War, deepening distrust of government.",
        hint: "Revealed government deception about the war",
      },
      {
        front: "What happened at Kent State University in 1970?",
        back: "National Guardsmen fired on student antiwar protesters, killing four. The event intensified the antiwar movement and campus unrest following the invasion of Cambodia.",
        hint: "Four students killed during protests",
      },
      {
        front: "What was the counterculture of the 1960s?",
        back: "A youth movement that rejected mainstream values, embracing communal living, rock music, experimentation with drugs, and antiwar/peace ideals (the 'hippie' movement).",
        hint: "'Hippies,' Woodstock, peace and love",
      },
      {
        front: "What did the 26th Amendment (1971) accomplish, and how did Vietnam influence it?",
        back: "It lowered the voting age from 21 to 18, driven by the argument that those old enough to be drafted and die in Vietnam should be old enough to vote.",
        hint: "'Old enough to fight, old enough to vote'",
      },
      {
        front: "What was the credibility gap?",
        back: "The growing public distrust caused by discrepancies between the government's optimistic statements about Vietnam and the grim reality reported by the media.",
        hint: "Distance between official claims and reality",
      },
      {
        front: "What role did television play in shaping views of the Vietnam War?",
        back: "Vietnam was the first 'living-room war'; nightly broadcasts of combat and casualties brought the war's brutality home and fueled antiwar sentiment.",
        hint: "First televised war",
      },
      {
        front: "What was the significance of the My Lai Massacre?",
        back: "The 1968 mass killing of unarmed South Vietnamese civilians by U.S. soldiers, revealed in 1969, which shocked the nation and deepened moral opposition to the war.",
        hint: "U.S. atrocity against civilians",
      },
      {
        front: "What was the War Powers Resolution (1973)?",
        back: "A law requiring the president to notify Congress within 48 hours of deploying troops and to withdraw them within 60-90 days without congressional authorization, a response to undeclared war in Vietnam.",
        hint: "Limited the president's war-making power",
      },
      {
        front: "How did the women's liberation movement grow alongside Vietnam-era activism?",
        back: "Borrowing protest tactics from civil rights and antiwar movements, women organized for equal pay, reproductive rights, and the Equal Rights Amendment (NOW founded 1966, Title IX 1972).",
        hint: "NOW, ERA, Title IX",
      },
      {
        front: "What were 'doves' and 'hawks' during the Vietnam era?",
        back: "Doves opposed the war and favored withdrawal or negotiation; hawks supported military escalation to win. The terms captured the era's deep political division.",
        hint: "Anti-war vs. pro-escalation",
      },
    ],
  },
  {
    slug: "domain-and-range",
    cards: [
      {
        front: "Define the domain of a function.",
        back: "The set of all allowable input ($x$) values for which the function is defined.",
        hint: "All valid inputs",
      },
      {
        front: "Define the range of a function.",
        back: "The set of all output ($y$) values the function actually produces over its domain.",
        hint: "All resulting outputs",
      },
      {
        front: "What three situations restrict a function's domain?",
        back: "(1) Division by zero (denominator $\\\\neq 0$), (2) even roots of negatives (radicand $\\\\geq 0$), and (3) logarithms of nonpositive numbers (argument $> 0$).",
        hint: "No zero denominators, negative even roots, or log of $\\\\leq 0$",
      },
      {
        front: "Find the domain of $f(x) = \\\\dfrac{1}{x - 3}$.",
        back: "Set the denominator nonzero: $x - 3 \\\\neq 0$, so $x \\\\neq 3$. Domain: all real numbers except 3, written $(-\\\\infty, 3) \\\\cup (3, \\\\infty)$.",
        hint: "Exclude where the denominator is 0",
      },
      {
        front: "Find the domain of $g(x) = \\\\sqrt{x - 4}$.",
        back: "The radicand must be nonnegative: $x - 4 \\\\geq 0$, so $x \\\\geq 4$. Domain: $[4, \\\\infty)$.",
        hint: "Even root requires radicand $\\\\geq 0$",
      },
      {
        front: "What is the domain and range of $f(x) = x^2$?",
        back: "Domain: all real numbers $(-\\\\infty, \\\\infty)$. Range: $[0, \\\\infty)$, since a square is never negative.",
        hint: "Squares output only nonnegatives",
      },
      {
        front: "How do you read domain and range from a graph?",
        back: "Domain: project the graph onto the $x$-axis (left-right extent). Range: project onto the $y$-axis (up-down extent). Note open vs. closed endpoints.",
        hint: "Shadow onto each axis",
      },
      {
        front: "What is interval notation, and when do you use brackets vs. parentheses?",
        back: "Brackets $[\\\\,]$ include the endpoint; parentheses $(\\\\,)$ exclude it. Always use parentheses with $\\\\infty$ or $-\\\\infty$.",
        hint: "Closed = bracket, open/infinite = parenthesis",
      },
      {
        front: "What are the domain and range of $f(x) = \\\\sqrt{x}$?",
        back: "Domain: $[0, \\\\infty)$ (radicand nonnegative). Range: $[0, \\\\infty)$ (principal root is nonnegative).",
        hint: "Both start at 0",
      },
      {
        front: "What is the range of $f(x) = \\\\sin x$?",
        back: "$[-1, 1]$. The sine function oscillates between $-1$ and $1$ inclusive, while its domain is all real numbers.",
        hint: "Bounded oscillation",
      },
      {
        front: "Common trap: what is the domain of $\\\\dfrac{\\\\sqrt{x+2}}{x-1}$?",
        back: "Combine restrictions: radicand $x + 2 \\\\geq 0$ gives $x \\\\geq -2$, and denominator $x \\\\neq 1$. Domain: $[-2, 1) \\\\cup (1, \\\\infty)$.",
        hint: "Apply both rules and intersect",
      },
      {
        front: "What is the range of $f(x) = e^x$?",
        back: "$(0, \\\\infty)$. The exponential is always positive and never reaches 0, while its domain is all real numbers.",
        hint: "Always positive, never zero",
      },
      {
        front: "How does a horizontal asymptote relate to range?",
        back: "A horizontal asymptote often marks a value the function approaches but may never attain, so it is frequently excluded from the range (e.g., $y = 0$ for $e^x$).",
        hint: "Asymptote value usually excluded from range",
      },
    ],
  },
  {
    slug: "group-behavior-prejudice",
    cards: [
      {
        front: "What is prejudice, and how does it differ from discrimination?",
        back: "Prejudice is an unjustified, usually negative attitude toward a group and its members. Discrimination is unjustified negative behavior (action) directed at that group.",
        hint: "Attitude vs. behavior",
      },
      {
        front: "What is an in-group versus an out-group?",
        back: "The in-group is 'us,' the group one identifies with; the out-group is 'them,' people seen as outside one's group. In-group bias favors the in-group.",
        hint: "Us vs. them",
      },
      {
        front: "What is the out-group homogeneity effect?",
        back: "The tendency to see members of an out-group as more similar to one another ('they're all alike') than members of one's own in-group.",
        hint: "'They're all the same'",
      },
      {
        front: "What is the scapegoat theory of prejudice?",
        back: "The idea that prejudice offers an outlet for anger by providing someone to blame; frustrated or threatened people direct hostility toward a vulnerable group.",
        hint: "Blame a vulnerable group for problems",
      },
      {
        front: "What is the just-world phenomenon?",
        back: "The belief that the world is fair and people get what they deserve, which can lead to blaming victims and rationalizing inequality and prejudice.",
        hint: "'People get what they deserve'",
      },
      {
        front: "What is groupthink?",
        back: "A mode of thinking (Janis) in which the desire for harmony in a cohesive group overrides realistic appraisal of alternatives, leading to poor decisions and suppressed dissent.",
        hint: "Harmony over critical thinking",
      },
      {
        front: "What is group polarization?",
        back: "The tendency for group discussion to strengthen the members' pre-existing attitudes, making the group's prevailing view more extreme.",
        hint: "Discussion intensifies the dominant view",
      },
      {
        front: "What is social facilitation?",
        back: "The tendency to perform simple or well-learned tasks better, but difficult or new tasks worse, in the presence of others (arousal enhances the dominant response).",
        hint: "Audience helps easy tasks, hurts hard ones",
      },
      {
        front: "What is social loafing?",
        back: "The tendency to exert less effort when working in a group toward a common goal than when working alone, because individual contribution is less identifiable.",
        hint: "Slacking off in a group",
      },
      {
        front: "What is deindividuation?",
        back: "A loss of self-awareness and self-restraint in group situations that foster anonymity and arousal (e.g., mobs, riots), leading people to act in ways they normally would not.",
        hint: "Anonymity + arousal → lost self-restraint",
      },
      {
        front: "What did Sherif's Robbers Cave experiment demonstrate?",
        back: "That competition between groups creates prejudice and hostility, while superordinate (shared) goals requiring cooperation can reduce that conflict.",
        hint: "Superordinate goals reduce conflict",
      },
      {
        front: "What is a stereotype?",
        back: "A generalized (often oversimplified) belief about a group of people. Stereotypes form the cognitive basis of prejudice.",
        hint: "The cognitive component of prejudice",
      },
      {
        front: "How does the 'other-race effect' (cross-race effect) relate to prejudice?",
        back: "People more accurately recognize faces of their own race than those of other races, which can reinforce out-group homogeneity perceptions.",
        hint: "Better memory for own-race faces",
      },
    ],
  },
  {
    slug: "arc-length-surface-area-calcbc",
    cards: [
      {
        front: "What is the arc length formula for a function $y = f(x)$ on $[a,b]$?",
        back: "$L = \\\\displaystyle\\\\int_a^b \\\\sqrt{1 + \\\\left(\\\\dfrac{dy}{dx}\\\\right)^2}\\\\, dx$. Use when the curve is given as $y$ in terms of $x$.",
        hint: "Integrate $\\\\sqrt{1 + (y')^2}$",
      },
      {
        front: "What is the arc length formula for parametric curves $x(t), y(t)$ on $[t_1, t_2]$?",
        back: "$L = \\\\displaystyle\\\\int_{t_1}^{t_2} \\\\sqrt{\\\\left(\\\\dfrac{dx}{dt}\\\\right)^2 + \\\\left(\\\\dfrac{dy}{dt}\\\\right)^2}\\\\, dt$. Use when motion is described by a parameter $t$.",
        hint: "Speed integrated over time",
      },
      {
        front: "What is the arc length formula in polar form $r = f(\\\\theta)$?",
        back: "$L = \\\\displaystyle\\\\int_{\\\\alpha}^{\\\\beta} \\\\sqrt{r^2 + \\\\left(\\\\dfrac{dr}{d\\\\theta}\\\\right)^2}\\\\, d\\\\theta$. Use for curves given as $r$ in terms of $\\\\theta$.",
        hint: "$\\\\sqrt{r^2 + (r')^2}$",
      },
      {
        front: "How is the parametric arc length integrand related to speed?",
        back: "The integrand $\\\\sqrt{(dx/dt)^2 + (dy/dt)^2}$ is the speed $|\\\\vec{v}(t)|$, so arc length is the integral of speed: total distance traveled.",
        hint: "Arc length = integral of speed",
      },
      {
        front: "Set up the arc length of $y = x^{3/2}$ from $x=0$ to $x=4$.",
        back: "$\\\\dfrac{dy}{dx} = \\\\tfrac{3}{2}x^{1/2}$, so $L = \\\\displaystyle\\\\int_0^4 \\\\sqrt{1 + \\\\tfrac{9}{4}x}\\\\, dx$.",
        hint: "Compute $y'$, square it, add 1",
      },
      {
        front: "What is the surface area formula for revolving $y=f(x)$ about the $x$-axis?",
        back: "$S = \\\\displaystyle\\\\int_a^b 2\\\\pi\\\\, y \\\\sqrt{1 + \\\\left(\\\\dfrac{dy}{dx}\\\\right)^2}\\\\, dx$, where $y = f(x)$ is the radius of revolution.",
        hint: "$2\\\\pi (\\\\text{radius}) \\\\times \\\\text{arc length element}$",
      },
      {
        front: "What is the surface area formula for revolving $y=f(x)$ about the $y$-axis?",
        back: "$S = \\\\displaystyle\\\\int_a^b 2\\\\pi\\\\, x \\\\sqrt{1 + \\\\left(\\\\dfrac{dy}{dx}\\\\right)^2}\\\\, dx$, where $x$ is the radius (distance from the $y$-axis).",
        hint: "Radius becomes $x$ instead of $y$",
      },
      {
        front: "In a surface-of-revolution integral, how do you choose the radius factor?",
        back: "The radius is the distance from the curve to the axis of rotation: use $y$ when rotating about the $x$-axis and $x$ when rotating about the $y$-axis.",
        hint: "Radius = distance to the axis",
      },
      {
        front: "What is $ds$ (the arc length differential) and how does it unify the formulas?",
        back: "$ds = \\\\sqrt{1 + (y')^2}\\\\,dx = \\\\sqrt{(x')^2 + (y')^2}\\\\,dt = \\\\sqrt{r^2 + (r')^2}\\\\,d\\\\theta$. Arc length is $\\\\int ds$ and surface area is $\\\\int 2\\\\pi (\\\\text{radius})\\\\,ds$.",
        hint: "All forms are versions of $\\\\int ds$",
      },
      {
        front: "Common trap: forgetting which variable goes under the square root for $x = g(y)$.",
        back: "If the curve is $x = g(y)$ on $[c,d]$, use $L = \\\\displaystyle\\\\int_c^d \\\\sqrt{1 + \\\\left(\\\\dfrac{dx}{dy}\\\\right)^2}\\\\, dy$. Match the differential to the variable of integration.",
        hint: "Differentiate the given variable",
      },
      {
        front: "Find the arc length of the parametric curve $x = \\\\cos t,\\\\ y = \\\\sin t$ for $0 \\\\le t \\\\le 2\\\\pi$.",
        back: "$dx/dt = -\\\\sin t$, $dy/dt = \\\\cos t$, so the integrand is $\\\\sqrt{\\\\sin^2 t + \\\\cos^2 t} = 1$. Thus $L = \\\\int_0^{2\\\\pi} 1\\\\, dt = 2\\\\pi$ (circumference of unit circle).",
        hint: "Pythagorean identity simplifies it",
      },
      {
        front: "Why are arc length integrals often hard to evaluate by hand?",
        back: "The square root of $1 + (y')^2$ rarely produces an elementary antiderivative, so AP problems often ask only to set up the integral or to evaluate it with a calculator.",
        hint: "Set-up vs. numerical evaluation",
      },
      {
        front: "Set up the surface area when $y = x^2$, $0 \\\\le x \\\\le 1$, is rotated about the $x$-axis.",
        back: "$y' = 2x$, so $S = \\\\displaystyle\\\\int_0^1 2\\\\pi x^2 \\\\sqrt{1 + 4x^2}\\\\, dx$.",
        hint: "Radius $= y = x^2$; slope $= 2x$",
      },
    ],
  },
];
