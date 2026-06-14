export const batchCards: { slug: string; cards: { front: string; back: string; hint?: string }[] }[] = [
  {
    slug: "mcat-cars-strategy-active-reading-mcat",
    cards: [
      {
        front: "What does CARS stand for, and what does it test?",
        back: "Critical Analysis and Reasoning Skills. It tests reading comprehension and reasoning using passages from the humanities and social sciences. No outside knowledge is required or rewarded.",
        hint: "The only section with no science content.",
      },
      {
        front: "What is 'active reading' in CARS?",
        back: "Engaging the passage by paraphrasing each paragraph, tracking the author's argument and tone, and noting structure (claims, evidence, shifts) rather than passively absorbing words.",
        hint: "Read to argue with the author, not to memorize.",
      },
      {
        front: "What are the three CARS question categories tested by the AAMC?",
        back: "Foundations of Comprehension (~30%), Reasoning Within the Text (~30%), and Reasoning Beyond the Text (~40%). The last two require inference and application, not just retrieval.",
        hint: "Comprehend, reason within, reason beyond.",
      },
      {
        front: "Why is identifying the author's main point (thesis) critical in CARS?",
        back: "Most correct answers align with the author's central argument and tone. Once you know the thesis, you can predict answers and eliminate choices that contradict the author's stance.",
        hint: "Tone and thesis filter most distractors.",
      },
      {
        front: "How should you handle the CARS passages with limited time (about 10 minutes each)?",
        back: "Nine passages, 53 questions, 90 minutes means roughly 10 minutes per passage. Spend the bulk reading actively, then answer quickly; do not reread the whole passage for each question.",
        hint: "53 questions / 90 minutes.",
      },
      {
        front: "What is the 'process of elimination' strategy in CARS?",
        back: "Eliminate the three wrong answers rather than searching for the perfect right one. The correct answer is often the 'least wrong' choice that is fully supported by the passage.",
        hint: "Disprove three, not prove one.",
      },
      {
        front: "Name three common CARS trap-answer types.",
        back: "Extreme/absolute language (always, never), out-of-scope (true but not in the passage), and opposite (contradicts the author's view). Distortions that twist a passage detail are also common.",
        hint: "Too strong, off-topic, or reversed.",
      },
      {
        front: "How do you answer 'Reasoning Beyond the Text' questions?",
        back: "Apply the author's reasoning to a new situation or incorporate new information, then judge how it affects the argument. The correct answer is consistent with the passage's logic, not just its facts.",
        hint: "Take the author's logic somewhere new.",
      },
      {
        front: "What should you do with author tone words in CARS?",
        back: "Underline or note attitude markers (skeptical, enthusiastic, ironic, cautious). Tone often determines which answer choice matches the author, especially in 'attitude' or 'inference' questions.",
        hint: "Attitude is a built-in answer filter.",
      },
      {
        front: "Why should you avoid bringing in outside knowledge on CARS?",
        back: "CARS rewards only what is supported by the passage. Real-world facts you know may be true but wrong as answers because the test only credits passage-based reasoning.",
        hint: "If it is not in the passage, it is not the answer.",
      },
      {
        front: "What is the recommended approach to dense or boring CARS passages?",
        back: "Treat every passage the same: paraphrase paragraph by paragraph and focus on structure. Do not let difficulty or topic dislike cause you to disengage and read passively.",
        hint: "Engagement, not interest, drives accuracy.",
      },
      {
        front: "Worked mini-example: An author argues a policy 'may have some benefits but ultimately undermines fairness.' What is the author's stance?",
        back: "Net negative. The 'may have some benefits' is a concession; the main point ('ultimately undermines fairness') is the thesis. The correct answers will reflect overall opposition, not endorsement.",
        hint: "Concession then thesis after 'but/ultimately'.",
      },
      {
        front: "How should you manage a question you cannot resolve quickly?",
        back: "Eliminate what you can, make your best choice, flag it, and move on. Never let one hard question consume time needed for easier points later.",
        hint: "Guess, flag, advance.",
      },
    ],
  },
  {
    slug: "mcat-general-chemistry-thermodynamics-mcat",
    cards: [
      {
        front: "State the first law of thermodynamics and its equation.",
        back: "Energy is conserved. $\\Delta U = Q - W$, where $\\Delta U$ is internal energy change, $Q$ is heat added to the system, and $W$ is work done by the system. Use the sign convention consistently.",
        hint: "Energy in via heat, out via work.",
      },
      {
        front: "Define enthalpy and the meaning of the sign of $\\Delta H$.",
        back: "Enthalpy $H = U + PV$ is heat content at constant pressure. $\\Delta H < 0$ is exothermic (releases heat); $\\Delta H > 0$ is endothermic (absorbs heat).",
        hint: "Negative releases, positive absorbs.",
      },
      {
        front: "What is Hess's law?",
        back: "The total enthalpy change of a reaction is the same regardless of pathway, so you can add the $\\Delta H$ values of individual steps. Reverse a step and flip the sign; multiply a step and multiply $\\Delta H$.",
        hint: "Enthalpy is a state function: sum the steps.",
      },
      {
        front: "How do you compute $\\Delta H_{rxn}$ from heats of formation?",
        back: "$\\Delta H_{rxn} = \\sum \\Delta H_f(\\text{products}) - \\sum \\Delta H_f(\\text{reactants})$, each weighted by stoichiometric coefficient. The $\\Delta H_f$ of an element in its standard state is zero.",
        hint: "Products minus reactants.",
      },
      {
        front: "Define entropy and predict its sign for common processes.",
        back: "Entropy $S$ measures disorder/dispersal of energy. $\\Delta S > 0$ for melting, vaporizing, dissolving, and gas-producing reactions; $\\Delta S < 0$ when gas moles decrease or order increases.",
        hint: "More microstates means higher entropy.",
      },
      {
        front: "Write the Gibbs free energy equation and the criterion for spontaneity.",
        back: "$\\Delta G = \\Delta H - T\\Delta S$, with $T$ in kelvin. A process is spontaneous when $\\Delta G < 0$, at equilibrium when $\\Delta G = 0$, and nonspontaneous when $\\Delta G > 0$.",
        hint: "Negative G means it goes forward.",
      },
      {
        front: "When is a reaction spontaneous based on the signs of $\\Delta H$ and $\\Delta S$?",
        back: "$\\Delta H<0, \\Delta S>0$: always spontaneous. $\\Delta H>0, \\Delta S<0$: never. Otherwise temperature-dependent: high $T$ favors entropy-driven, low $T$ favors enthalpy-driven reactions.",
        hint: "Two always/never cases, two depend on T.",
      },
      {
        front: "Relate $\\Delta G^\\circ$ to the equilibrium constant K.",
        back: "$\\Delta G^\\circ = -RT\\ln K$, where $R = 8.314$ J/mol·K and $T$ is in kelvin. $K>1$ gives $\\Delta G^\\circ<0$ (products favored); $K<1$ gives $\\Delta G^\\circ>0$.",
        hint: "Big K means negative standard G.",
      },
      {
        front: "What is the equation linking $\\Delta G$ to $\\Delta G^\\circ$ under nonstandard conditions?",
        back: "$\\Delta G = \\Delta G^\\circ + RT\\ln Q$, where $Q$ is the reaction quotient. This shows how $\\Delta G$ changes as concentrations shift away from standard state toward equilibrium.",
        hint: "Add a Q-correction term to standard G.",
      },
      {
        front: "Define heat capacity and the calorimetry equation.",
        back: "$q = mc\\Delta T$, where $m$ is mass, $c$ is specific heat capacity, and $\\Delta T$ is temperature change. Use it to find heat absorbed or released without a phase change.",
        hint: "No phase change: q = mcΔT.",
      },
      {
        front: "What is the difference between a state function and a path function? Give examples.",
        back: "State functions (U, H, S, G, T, P) depend only on the current state, not the path taken. Path functions (heat Q and work W) depend on how the process is carried out.",
        hint: "State = destination only; path = the route.",
      },
      {
        front: "What heat accompanies a phase change, and what equation is used?",
        back: "Phase changes occur at constant temperature using $q = mL$ (or $q = n\\Delta H_{phase}$), where $L$ is the latent heat (of fusion or vaporization). Temperature stays flat on a heating curve during the change.",
        hint: "Flat parts of a heating curve.",
      },
      {
        front: "Worked mini-example: A reaction has $\\Delta H = +50$ kJ/mol and $\\Delta S = +200$ J/mol·K. Is it spontaneous at 298 K?",
        back: "$\\Delta G = 50{,}000 - 298(200) = 50{,}000 - 59{,}600 = -9{,}600$ J/mol. Since $\\Delta G<0$, it is spontaneous at 298 K. Always convert $\\Delta S$ to kJ or $\\Delta H$ to J first.",
        hint: "Watch the J vs kJ unit mismatch.",
      },
    ],
  },
  {
    slug: "mcat-research-methods-mcat",
    cards: [
      {
        front: "What is the difference between independent and dependent variables?",
        back: "The independent variable is manipulated by the researcher; the dependent variable is measured as the outcome. In 'effect of drug dose on blood pressure,' dose is independent and blood pressure is dependent.",
        hint: "You change the independent, you measure the dependent.",
      },
      {
        front: "Distinguish a confounding variable from a control.",
        back: "A confounding variable correlates with both the independent and dependent variable, creating a false association. A control variable is held constant to remove its influence so the IV-DV relationship is clear.",
        hint: "Confounders create false links; controls prevent them.",
      },
      {
        front: "What distinguishes an experiment from a correlational/observational study?",
        back: "An experiment manipulates the independent variable and uses random assignment, allowing causal claims. Observational studies only measure variables, so they show correlation, not causation.",
        hint: "Manipulation + random assignment = causation.",
      },
      {
        front: "Define reliability and validity.",
        back: "Reliability is consistency/reproducibility of a measure. Validity is whether it measures what it claims to. A measure can be reliable (consistent) yet invalid (consistently wrong).",
        hint: "Consistent vs. accurate.",
      },
      {
        front: "What is internal vs. external validity?",
        back: "Internal validity is the degree to which the design supports a causal conclusion (no confounds). External validity is how well results generalize to other populations, settings, and times.",
        hint: "Causal soundness vs. generalizability.",
      },
      {
        front: "Define the null and alternative hypotheses.",
        back: "The null hypothesis ($H_0$) states no effect or no difference. The alternative ($H_1$) states an effect exists. Statistical tests assess evidence against $H_0$.",
        hint: "Null = no effect; we try to reject it.",
      },
      {
        front: "What do Type I and Type II errors mean?",
        back: "Type I (false positive, $\\alpha$): rejecting a true null. Type II (false negative, $\\beta$): failing to reject a false null. Power $= 1 - \\beta$ is the chance of detecting a real effect.",
        hint: "I = false alarm; II = miss.",
      },
      {
        front: "What does a p-value represent, and what is the typical threshold?",
        back: "The probability of obtaining results at least as extreme as observed if $H_0$ were true. Results are conventionally 'significant' when $p < 0.05$. It is not the probability the hypothesis is true.",
        hint: "Assumes the null and asks how surprising the data are.",
      },
      {
        front: "Why is random assignment important, and how does it differ from random sampling?",
        back: "Random assignment distributes confounds evenly across groups, supporting causal inference. Random sampling selects participants from the population, supporting generalizability (external validity).",
        hint: "Assignment = causation; sampling = generalization.",
      },
      {
        front: "What are placebo and double-blind designs used for?",
        back: "A placebo controls for expectancy effects. In a double-blind design, neither participants nor experimenters know group assignments, preventing both placebo and experimenter bias.",
        hint: "Both sides blinded to reduce bias.",
      },
      {
        front: "Distinguish positive, negative, and zero correlation.",
        back: "Positive: variables rise together (r > 0). Negative: one rises as the other falls (r < 0). Zero: no linear relationship. Correlation coefficient r ranges from -1 to +1.",
        hint: "Sign = direction, magnitude = strength.",
      },
      {
        front: "What is the difference between a cross-sectional and a longitudinal study?",
        back: "Cross-sectional studies measure different individuals at one time point (fast, but cohort effects). Longitudinal studies follow the same individuals over time (causal/developmental insight, but attrition).",
        hint: "Snapshot vs. movie.",
      },
      {
        front: "What ethical safeguards govern human research (IRB principles)?",
        back: "Informed consent, beneficence (minimize harm, maximize benefit), confidentiality, and the right to withdraw. The IRB reviews studies; the Belmont Report names respect for persons, beneficence, and justice.",
        hint: "Consent, do no harm, protect privacy.",
      },
    ],
  },
  {
    slug: "mcat-sociology-groups-interaction-mcat",
    cards: [
      {
        front: "What is the difference between a primary and a secondary group?",
        back: "Primary groups are small, intimate, and enduring (family, close friends) with emotional bonds. Secondary groups are larger, impersonal, and goal-oriented (coworkers, a class). Both can overlap over time.",
        hint: "Intimate/lasting vs. functional/temporary.",
      },
      {
        front: "Define in-group and out-group.",
        back: "An in-group is one a person identifies with and feels loyalty toward ('us'). An out-group is one viewed as different or in competition ('them'), often a target of bias.",
        hint: "Us vs. them.",
      },
      {
        front: "What is a reference group?",
        back: "A group an individual uses as a standard for self-evaluation and forming attitudes or behaviors, even without membership. It shapes aspirations and relative deprivation.",
        hint: "The group you measure yourself against.",
      },
      {
        front: "Distinguish a group from an aggregate and a category.",
        back: "A group interacts and shares identity. An aggregate is people in the same place with no interaction (riders on a bus). A category shares a trait but no interaction (all left-handed people).",
        hint: "Interaction is what makes a group.",
      },
      {
        front: "What is the network concept of social ties (strong vs. weak)?",
        back: "Strong ties are close, frequent relationships (family); weak ties are acquaintances. Granovetter's 'strength of weak ties' shows weak ties spread novel information and job leads more effectively.",
        hint: "Weak ties bridge to new information.",
      },
      {
        front: "Describe the Asch and Milgram studies and the concepts they illustrate.",
        back: "Asch demonstrated conformity to group pressure on line-judgment tasks. Milgram demonstrated obedience to authority, with participants delivering apparent shocks. Both show social influence overriding individual judgment.",
        hint: "Conformity (peers) vs. obedience (authority).",
      },
      {
        front: "Define groupthink.",
        back: "A mode of thinking in cohesive groups where the desire for harmony overrides realistic appraisal of alternatives, leading to poor decisions and suppression of dissent.",
        hint: "Consensus pressure kills critical thinking.",
      },
      {
        front: "What is group polarization?",
        back: "The tendency for group discussion to strengthen the average pre-existing inclination, making the group's decision more extreme than its members' individual views.",
        hint: "Discussion amplifies the leaning.",
      },
      {
        front: "Differentiate social facilitation from social loafing.",
        back: "Social facilitation: presence of others improves performance on simple/well-learned tasks. Social loafing: individuals exert less effort in a group because responsibility is diffused.",
        hint: "Others help on easy tasks; group masks slacking.",
      },
      {
        front: "What are status and role in social interaction?",
        back: "A status is a social position (student, parent). A role is the set of behaviors expected of a status. Role conflict arises between statuses; role strain arises within a single role.",
        hint: "Position vs. expected behavior.",
      },
      {
        front: "What is the dramaturgical approach (Goffman)?",
        back: "Goffman analyzed interaction as theater: people perform on a 'front stage' to manage impressions and relax in 'back stage.' This is a form of impression management.",
        hint: "Life as a staged performance.",
      },
      {
        front: "Define bureaucracy and its key Weberian features.",
        back: "A bureaucracy is a formal organization with a hierarchy of authority, division of labor, written rules, impersonality, and merit-based advancement. Weber warned of the 'iron cage' of over-rationalization.",
        hint: "Hierarchy, rules, impersonal, merit.",
      },
      {
        front: "What is the difference between a primary and a secondary deviance? (interaction context)",
        back: "Primary deviance is an initial rule-breaking act with little effect on identity; secondary deviance occurs when one internalizes a deviant label after societal reaction, illustrating labeling theory in group interaction.",
        hint: "Act first; identity after the label.",
      },
    ],
  },
  {
    slug: "mcat-organic-chemistry-stereochemistry-mcat",
    cards: [
      {
        front: "What is a chiral center (stereocenter)?",
        back: "A carbon bonded to four different groups, which makes the molecule non-superimposable on its mirror image. Such carbons give rise to optical isomers.",
        hint: "Four different groups on one carbon.",
      },
      {
        front: "Define enantiomers vs. diastereomers.",
        back: "Enantiomers are non-superimposable mirror images (opposite configuration at every stereocenter). Diastereomers differ at some but not all stereocenters and are not mirror images.",
        hint: "Mirror images vs. partial mismatch.",
      },
      {
        front: "How do enantiomers differ in physical and chemical properties?",
        back: "Enantiomers have identical physical properties (mp, bp, solubility) except they rotate plane-polarized light in opposite directions, and they behave differently in chiral environments (e.g., enzymes, biological receptors).",
        hint: "Same properties except optical rotation and chiral reactions.",
      },
      {
        front: "What are the CIP priority rules for assigning R/S configuration?",
        back: "Rank the four groups by atomic number at the first point of difference. Orient the lowest priority away, then read 1 to 2 to 3: clockwise = R, counterclockwise = S. Ties are broken by the next atoms out.",
        hint: "High atomic number = high priority; lowest points back.",
      },
      {
        front: "What is a meso compound?",
        back: "A molecule with multiple stereocenters but an internal plane of symmetry, making it superimposable on its mirror image and therefore achiral (optically inactive) despite having stereocenters.",
        hint: "Has stereocenters but an internal mirror plane.",
      },
      {
        front: "Define optical activity and specific rotation.",
        back: "Optical activity is the rotation of plane-polarized light by a chiral substance. Dextrorotatory (+) rotates clockwise; levorotatory (-) counterclockwise. The sign is measured, not predicted from R/S.",
        hint: "(+)/(-) is measured; R/S is assigned.",
      },
      {
        front: "What is a racemic mixture and its optical rotation?",
        back: "A 50:50 mixture of two enantiomers. The rotations cancel, so it is optically inactive (net rotation zero) even though each component is chiral.",
        hint: "Equal enantiomers cancel to zero rotation.",
      },
      {
        front: "What are constitutional (structural) isomers?",
        back: "Molecules with the same molecular formula but different connectivity of atoms. They are not stereoisomers and generally have different physical and chemical properties.",
        hint: "Same formula, different bonding order.",
      },
      {
        front: "Distinguish E/Z and cis/trans nomenclature for alkenes.",
        back: "cis/trans applies when each double-bond carbon has one H. E/Z uses CIP priorities: Z (zusammen) = high priorities on same side; E (entgegen) = opposite sides. E/Z is unambiguous for all alkenes.",
        hint: "Z = same side (higher priority); E = opposite.",
      },
      {
        front: "How many stereoisomers can a molecule with n stereocenters have?",
        back: "At most $2^n$ stereoisomers. The number is fewer when meso compounds (internal symmetry) reduce the count.",
        hint: "Maximum is 2 to the n; meso lowers it.",
      },
      {
        front: "What are epimers and anomers (relevant to biochemistry)?",
        back: "Epimers are diastereomers that differ at exactly one stereocenter (e.g., glucose and galactose). Anomers differ specifically at the new anomeric carbon formed on cyclization of a sugar (alpha vs. beta).",
        hint: "Epimer = one center; anomer = the ring-closure carbon.",
      },
      {
        front: "What is conformational isomerism (e.g., chair vs. Newman projections)?",
        back: "Conformers interconvert by rotation about single bonds without breaking them. Staggered (anti) conformations are lower energy than eclipsed; in cyclohexane, the chair is most stable with large groups equatorial.",
        hint: "Rotation about sigma bonds, no bond breaking.",
      },
      {
        front: "Worked mini-example: 2,3-dibromobutane has two stereocenters. How many distinct stereoisomers exist?",
        back: "Three: a pair of enantiomers (R,R and S,S) plus one meso form (R,S), because the molecule has an internal mirror plane. The $2^n=4$ maximum is reduced to 3 by the meso compound.",
        hint: "RR, SS, and a single meso RS.",
      },
    ],
  },
  {
    slug: "function-composition-inverses-precalc",
    cards: [
      {
        front: "Define the composition of functions $(f \\circ g)(x)$.",
        back: "$(f \\circ g)(x) = f(g(x))$: apply $g$ first, then $f$ to the result. The inner function's output becomes the outer function's input.",
        hint: "Inside-out: g first, then f.",
      },
      {
        front: "Is function composition commutative? Explain.",
        back: "Generally no: $(f \\circ g)(x) \\neq (g \\circ f)(x)$ in most cases. Order matters because you substitute one function's output into the other.",
        hint: "Order matters; swapping usually changes the result.",
      },
      {
        front: "How do you find the domain of $(f \\circ g)(x)$?",
        back: "Include only $x$ values that are in the domain of $g$ AND whose outputs $g(x)$ are in the domain of $f$. Check both restrictions, not just the simplified formula.",
        hint: "x must be valid for g, and g(x) valid for f.",
      },
      {
        front: "What is an inverse function $f^{-1}(x)$?",
        back: "A function that reverses $f$: if $f(a)=b$ then $f^{-1}(b)=a$. It undoes the mapping, swapping inputs and outputs.",
        hint: "Undoes f; swaps domain and range.",
      },
      {
        front: "What is the algebraic test that two functions are inverses?",
        back: "$f(f^{-1}(x)) = x$ and $f^{-1}(f(x)) = x$ for all $x$ in the appropriate domains. Both compositions must yield the identity.",
        hint: "Compose both ways and get x.",
      },
      {
        front: "What is the procedure to find an inverse algebraically?",
        back: "Replace $f(x)$ with $y$, swap $x$ and $y$, solve for $y$, then write $y = f^{-1}(x)$. Finally restrict the domain if needed for it to be a function.",
        hint: "Swap x and y, then solve for y.",
      },
      {
        front: "What does the inverse do to a point and to the graph?",
        back: "It swaps coordinates: if $(a,b)$ is on $f$, then $(b,a)$ is on $f^{-1}$. The graph of $f^{-1}$ is the reflection of $f$ across the line $y = x$.",
        hint: "Reflect across y = x.",
      },
      {
        front: "Why must a function be one-to-one to have an inverse?",
        back: "Only one-to-one functions (each output from exactly one input) have inverses that are functions. Otherwise the inverse would map one input to multiple outputs.",
        hint: "Each y must come from exactly one x.",
      },
      {
        front: "What is the horizontal line test?",
        back: "A function is one-to-one (and thus invertible) if every horizontal line crosses its graph at most once. Failing it means the inverse is not a function.",
        hint: "Horizontal line hits the graph once at most.",
      },
      {
        front: "How are the domain and range of $f$ and $f^{-1}$ related?",
        back: "They swap: the domain of $f$ equals the range of $f^{-1}$, and the range of $f$ equals the domain of $f^{-1}$.",
        hint: "Domain and range trade places.",
      },
      {
        front: "How do you restrict a domain so a non-one-to-one function becomes invertible?",
        back: "Limit the domain to an interval where the function is monotonic (always increasing or always decreasing). For $f(x)=x^2$, restrict to $x \\geq 0$ to get $f^{-1}(x)=\\sqrt{x}$.",
        hint: "Pick a piece that is strictly increasing or decreasing.",
      },
      {
        front: "Common trap: Is $f^{-1}(x)$ the same as $\\frac{1}{f(x)}$?",
        back: "No. $f^{-1}(x)$ is the inverse function; $\\frac{1}{f(x)} = [f(x)]^{-1}$ is the reciprocal. The $-1$ superscript on a function name means inverse, not reciprocal.",
        hint: "Inverse function, not reciprocal.",
      },
      {
        front: "Worked mini-example: Given $f(x)=2x+3$ and $g(x)=x^2$, find $(f \\circ g)(2)$.",
        back: "$g(2)=4$, then $f(4)=2(4)+3=11$. So $(f \\circ g)(2)=11$. Evaluate the inner function first.",
        hint: "Find g(2), then plug into f.",
      },
      {
        front: "Worked mini-example: Find the inverse of $f(x)=2x+3$.",
        back: "Set $y=2x+3$, swap to $x=2y+3$, solve: $y=\\frac{x-3}{2}$. So $f^{-1}(x)=\\frac{x-3}{2}$.",
        hint: "Swap and solve for y.",
      },
    ],
  },
  {
    slug: "exponential-functions-precalc",
    cards: [
      {
        front: "What is the general form of an exponential function?",
        back: "$f(x)=a \\cdot b^x$, where $a$ is the initial value (y-intercept), $b>0, b \\neq 1$ is the base/growth factor, and $x$ is the exponent. The variable is in the exponent, not the base.",
        hint: "Variable in the exponent: a times b to the x.",
      },
      {
        front: "When does an exponential function show growth vs. decay?",
        back: "If $b>1$, the function grows (increasing). If $0<b<1$, it decays (decreasing). With $a>0$ in both cases, the curve stays positive.",
        hint: "Base above 1 grows; between 0 and 1 decays.",
      },
      {
        front: "What is the domain, range, and horizontal asymptote of $f(x)=a \\cdot b^x$ (with $a>0$)?",
        back: "Domain: all real numbers. Range: $y>0$. Horizontal asymptote: $y=0$ (the x-axis). A vertical shift $+k$ moves the asymptote to $y=k$.",
        hint: "All reals in, positive out, asymptote at y = 0.",
      },
      {
        front: "What is the number $e$ and where is it used?",
        back: "$e \\approx 2.718$ is the base of the natural exponential function. It appears in continuous growth/decay and naturally in calculus because $\\frac{d}{dx}e^x = e^x$.",
        hint: "Natural base, about 2.718.",
      },
      {
        front: "Write the exponential growth/decay model and define its variables.",
        back: "$A(t)=A_0 e^{kt}$, where $A_0$ is the initial amount, $k$ is the continuous rate (positive = growth, negative = decay), and $t$ is time. Use it for continuously compounded processes.",
        hint: "k > 0 grows, k < 0 decays.",
      },
      {
        front: "State the compound interest formula and the continuous version.",
        back: "$A=P\\left(1+\\frac{r}{n}\\right)^{nt}$ for $n$ compoundings per year; continuous compounding is $A=Pe^{rt}$. $P$ = principal, $r$ = annual rate, $t$ = years, $n$ = periods/year.",
        hint: "Discrete uses (1 + r/n)^(nt); continuous uses e^(rt).",
      },
      {
        front: "What is the inverse of an exponential function?",
        back: "The logarithmic function. If $y=b^x$ then $x=\\log_b y$. Exponential and log functions undo each other.",
        hint: "Logs invert exponentials.",
      },
      {
        front: "How do you solve an exponential equation like $b^x = b^y$?",
        back: "If the bases are equal and not 1, set the exponents equal: $x=y$. If bases differ, take a logarithm of both sides to bring the exponent down.",
        hint: "Same base: equate exponents. Different base: take logs.",
      },
      {
        front: "What transformation does each parameter cause in $f(x)=a \\cdot b^{x-h}+k$?",
        back: "$a$ vertically stretches/reflects, $h$ shifts horizontally (right if positive), $k$ shifts vertically and moves the asymptote to $y=k$.",
        hint: "a stretch, h horizontal, k vertical/asymptote.",
      },
      {
        front: "How do you find the growth factor and percent rate of change?",
        back: "In $f(x)=a(1+r)^x$, the growth factor is $b=1+r$ and $r$ is the decimal rate. If $b=1.05$, growth is 5%; if $b=0.92$, decay is 8% ($r=-0.08$).",
        hint: "b = 1 + r; subtract 1 to get the rate.",
      },
      {
        front: "What is the half-life model?",
        back: "$A(t)=A_0\\left(\\frac{1}{2}\\right)^{t/h}$, where $h$ is the half-life (time to halve). After each interval of length $h$, the quantity is multiplied by one-half.",
        hint: "Base one-half, exponent t over half-life.",
      },
      {
        front: "Common trap: Is $2^{x+3}$ the same as $2^x + 2^3$?",
        back: "No. $2^{x+3}=2^x \\cdot 2^3 = 8 \\cdot 2^x$ by the product rule of exponents. You add exponents when multiplying like bases, never split a sum into separate terms.",
        hint: "Add exponents = multiply; never split the sum.",
      },
      {
        front: "Worked mini-example: A population of 500 grows 4% per year. Write the model and find the population after 3 years.",
        back: "$P(t)=500(1.04)^t$. At $t=3$: $P=500(1.04)^3 \\approx 500(1.1249) \\approx 562$.",
        hint: "Growth factor 1.04, plug in t = 3.",
      },
      {
        front: "Worked mini-example: Solve $3^x = 81$.",
        back: "Write $81=3^4$, so $3^x=3^4$ gives $x=4$. Match bases, then equate exponents.",
        hint: "Rewrite 81 as a power of 3.",
      },
    ],
  },
  {
    slug: "polynomial-functions-precalc",
    cards: [
      {
        front: "What is a polynomial function in standard form?",
        back: "$P(x)=a_n x^n + a_{n-1}x^{n-1} + \\cdots + a_1 x + a_0$, where $n$ is a nonnegative integer (the degree), $a_n \\neq 0$ is the leading coefficient, and all exponents are whole numbers.",
        hint: "Whole-number exponents, terms in descending order.",
      },
      {
        front: "How does the degree and leading coefficient determine end behavior?",
        back: "Even degree: both ends go the same direction (up if $a_n>0$, down if $a_n<0$). Odd degree: ends go opposite directions (down-up if $a_n>0$, up-down if $a_n<0$).",
        hint: "Even = ends match; odd = ends opposite.",
      },
      {
        front: "What is a zero (root) of a polynomial?",
        back: "A value $x=c$ where $P(c)=0$. Each real zero corresponds to an x-intercept of the graph and to a factor $(x-c)$ of the polynomial.",
        hint: "Where the graph crosses or touches the x-axis.",
      },
      {
        front: "State the Fundamental Theorem of Algebra.",
        back: "A polynomial of degree $n$ (with $n \\geq 1$) has exactly $n$ complex roots, counting multiplicity. Some may be real, some complex; non-real roots come in conjugate pairs for real coefficients.",
        hint: "Degree n means n roots, counting multiplicity.",
      },
      {
        front: "How does multiplicity of a zero affect the graph?",
        back: "Odd multiplicity: graph crosses the x-axis at that zero. Even multiplicity: graph touches and turns around (does not cross). Higher multiplicity flattens the graph near the zero.",
        hint: "Odd crosses, even bounces.",
      },
      {
        front: "What does the Factor Theorem state?",
        back: "$(x-c)$ is a factor of $P(x)$ if and only if $P(c)=0$. Finding a root lets you factor out that linear term and reduce the polynomial's degree.",
        hint: "Root c gives factor (x - c).",
      },
      {
        front: "What does the Remainder Theorem state?",
        back: "When $P(x)$ is divided by $(x-c)$, the remainder equals $P(c)$. This lets you evaluate a polynomial quickly using synthetic division.",
        hint: "Remainder on dividing by (x - c) is P(c).",
      },
      {
        front: "What is the Rational Root Theorem?",
        back: "Any rational root of $P(x)$ with integer coefficients has the form $\\frac{p}{q}$, where $p$ divides the constant term $a_0$ and $q$ divides the leading coefficient $a_n$. It lists candidate roots to test.",
        hint: "p divides constant; q divides leading coefficient.",
      },
      {
        front: "What is the maximum number of turning points of a degree-$n$ polynomial?",
        back: "At most $n-1$ turning points (local maxima/minima). A degree-4 polynomial has at most 3 turning points.",
        hint: "One fewer than the degree.",
      },
      {
        front: "How do complex roots appear for real-coefficient polynomials?",
        back: "Non-real complex roots occur in conjugate pairs: if $a+bi$ is a root, so is $a-bi$. Thus a real polynomial has an even number of non-real roots.",
        hint: "Complex roots come in conjugate pairs.",
      },
      {
        front: "What is synthetic division used for?",
        back: "A shortcut for dividing a polynomial by a linear factor $(x-c)$. It produces the quotient coefficients and the remainder, useful for the Remainder/Factor theorems and finding roots.",
        hint: "Fast division by (x - c).",
      },
      {
        front: "How do you sketch a polynomial from its factored form?",
        back: "Find zeros and their multiplicities (cross vs. bounce), determine end behavior from degree and leading coefficient, plot the y-intercept $P(0)$, and connect with a smooth, continuous curve.",
        hint: "Zeros + multiplicity + end behavior + y-intercept.",
      },
      {
        front: "Worked mini-example: Find the zeros of $P(x)=x^3-4x$.",
        back: "Factor: $x(x^2-4)=x(x-2)(x+2)$. Zeros are $x=0, 2, -2$, each of multiplicity 1, so the graph crosses at all three.",
        hint: "Factor out x, then difference of squares.",
      },
      {
        front: "Worked mini-example: Describe the end behavior of $P(x)=-2x^4+3x^2-1$.",
        back: "Degree 4 (even) with leading coefficient $-2<0$, so both ends point down: as $x \\to \\pm\\infty$, $P(x) \\to -\\infty$.",
        hint: "Even degree, negative lead = both ends down.",
      },
    ],
  },
];
