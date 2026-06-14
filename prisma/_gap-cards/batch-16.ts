export const batchCards: { slug: string; cards: { front: string; back: string; hint?: string }[] }[] = [
  {
    slug: "entropy-second-law",
    cards: [
      {
        front: "State the second law of thermodynamics (entropy version).",
        back: "The total entropy of an isolated system never decreases over time. For any spontaneous (irreversible) process the entropy of the universe increases; only a reversible process keeps it constant: $\\\\Delta S_{universe} \\\\geq 0$.",
        hint: "Universe = system + surroundings."
      },
      {
        front: "Define entropy ($S$) qualitatively.",
        back: "Entropy is a measure of the number of microscopic arrangements (microstates) consistent with a system's macroscopic state — a measure of disorder or energy dispersal. More accessible microstates means higher entropy.",
        hint: "Disorder / spreading out of energy."
      },
      {
        front: "Give the Boltzmann formula for entropy and name each variable.",
        back: "$S = k_B \\\\ln W$, where $S$ is entropy, $k_B$ is Boltzmann's constant ($1.38 \\\\times 10^{-23}$ J/K), and $W$ is the number of microstates accessible to the system. Use it to connect microscopic counting to thermodynamic entropy.",
        hint: "S grows with the log of W."
      },
      {
        front: "Formula for the entropy change of a reversible process. Name each term.",
        back: "$\\\\Delta S = \\\\int \\\\frac{dQ_{rev}}{T}$, or for constant $T$: $\\\\Delta S = \\\\frac{Q_{rev}}{T}$. Here $Q_{rev}$ is heat added reversibly and $T$ is absolute temperature (kelvin). Use it to compute entropy changes during isothermal or phase-change processes.",
        hint: "Heat divided by temperature."
      },
      {
        front: "Why must temperature be in kelvin in entropy calculations?",
        back: "Entropy is defined via $\\\\Delta S = Q_{rev}/T$, where $T$ must be the absolute (thermodynamic) temperature so the ratio is physically meaningful. Using Celsius gives wrong (even negative-denominator) results.",
        hint: "Absolute scale only."
      },
      {
        front: "How does entropy generally change for: melting, boiling, and a gas expanding into vacuum?",
        back: "All three increase entropy. Melting and boiling spread particles into more disordered phases ($\\\\Delta S > 0$); free expansion of a gas increases the volume accessible, raising the number of microstates so $\\\\Delta S > 0$.",
        hint: "Solid < liquid < gas; bigger volume = more entropy."
      },
      {
        front: "Common trap: 'The second law forbids entropy from ever decreasing anywhere.' True or false?",
        back: "False. A local system (e.g., a freezer making ice, or a living organism) can decrease its entropy, but only by increasing the entropy of its surroundings more, so the universe's total entropy still rises.",
        hint: "System vs. universe."
      },
      {
        front: "Define a reversible vs. an irreversible process in terms of entropy.",
        back: "A reversible process proceeds through equilibrium states and produces zero net entropy in the universe ($\\\\Delta S_{universe}=0$). A real, irreversible process (friction, mixing, heat across a finite temperature gap) generates entropy ($\\\\Delta S_{universe}>0$).",
        hint: "Real processes always generate some entropy."
      },
      {
        front: "How does the second law set the direction of heat flow?",
        back: "Heat spontaneously flows from hot to cold because that transfer increases total entropy. The cold object's entropy gain ($Q/T_{cold}$) exceeds the hot object's loss ($Q/T_{hot}$) since $T_{cold} < T_{hot}$.",
        hint: "Smaller T denominator = bigger entropy change."
      },
      {
        front: "State the third law of thermodynamics and its connection to entropy.",
        back: "As temperature approaches absolute zero, the entropy of a perfect crystalline substance approaches zero ($S \\\\to 0$ as $T \\\\to 0$). This gives an absolute reference point so entropies can be tabulated as absolute values.",
        hint: "Perfect crystal at 0 K has one microstate."
      },
      {
        front: "Worked example: 0.50 mol of ice melts at $0\\\\,^{\\\\circ}$C ($273$ K). Heat of fusion supplied = 9000 J. Find $\\\\Delta S$ of the ice.",
        back: "$\\\\Delta S = \\\\frac{Q}{T} = \\\\frac{9000\\\\text{ J}}{273\\\\text{ K}} \\\\approx +33\\\\text{ J/K}$. Positive because the solid becomes a more disordered liquid.",
        hint: "Phase change at constant T uses Q/T."
      },
      {
        front: "How does entropy relate to the maximum efficiency of a heat engine?",
        back: "Because some heat must be dumped to a cold reservoir to keep $\\\\Delta S_{universe} \\\\geq 0$, no engine can be 100% efficient. The Carnot (reversible) limit is $\\\\eta_{max} = 1 - \\\\frac{T_{cold}}{T_{hot}}$ with temperatures in kelvin.",
        hint: "Second law forbids perfect heat-to-work conversion."
      },
      {
        front: "Predict the sign of $\\\\Delta S$ for the reaction $2 H_2(g) + O_2(g) \\\\to 2 H_2O(l)$.",
        back: "$\\\\Delta S < 0$ (negative). Three moles of gas become two moles of liquid, drastically reducing the number of accessible microstates, so the system's entropy decreases.",
        hint: "Count moles of gas before vs. after."
      },
      {
        front: "How does entropy connect to Gibbs free energy and spontaneity?",
        back: "$\\\\Delta G = \\\\Delta H - T\\\\Delta S$. A process is spontaneous when $\\\\Delta G < 0$. Large positive $\\\\Delta S$ favors spontaneity, especially at high $T$, because the $-T\\\\Delta S$ term becomes more negative.",
        hint: "Entropy enters through the -TΔS term."
      }
    ]
  },
  {
    slug: "linear-regression-correlation-alg1",
    cards: [
      {
        front: "What is a line of best fit (regression line)?",
        back: "A straight line drawn through a scatter plot that best models the linear trend of the data, minimizing the overall vertical distance from the points to the line. It is used to make predictions.",
        hint: "Models a linear trend in scatter data."
      },
      {
        front: "Write the general equation of a regression line and name each part.",
        back: "$y = mx + b$ (sometimes written $\\\\hat{y} = ax + b$). $m$ is the slope, $b$ is the y-intercept, $x$ is the predictor (independent) variable, and $\\\\hat{y}$ is the predicted response.",
        hint: "Same slope-intercept form you already know."
      },
      {
        front: "What does the slope of a regression line mean in context?",
        back: "The slope is the predicted change in $y$ for each one-unit increase in $x$. For example, a slope of 2.5 in a 'study hours vs. test score' model predicts a 2.5-point score increase per extra hour studied.",
        hint: "Rate of change: rise per one unit of x."
      },
      {
        front: "What does the y-intercept of a regression line mean in context?",
        back: "The y-intercept $b$ is the predicted value of $y$ when $x = 0$. Caution: it is only meaningful if $x = 0$ is realistic and within the data range; otherwise it is just where the line crosses the axis.",
        hint: "Value of y when x is zero."
      },
      {
        front: "Define the correlation coefficient $r$ and its range.",
        back: "$r$ measures the strength and direction of a linear relationship between two variables. It ranges from $-1$ to $+1$: near $+1$ is strong positive, near $-1$ is strong negative, and near $0$ means little or no linear relationship.",
        hint: "Always between -1 and 1."
      },
      {
        front: "Distinguish positive, negative, and no correlation.",
        back: "Positive correlation: as $x$ increases, $y$ tends to increase (line slopes up). Negative correlation: as $x$ increases, $y$ tends to decrease (line slopes down). No correlation: no clear linear pattern; points scattered randomly.",
        hint: "Look at the direction of the trend."
      },
      {
        front: "Common trap: Does correlation imply causation?",
        back: "No. A strong correlation between two variables does not prove one causes the other. There may be a lurking (confounding) variable or pure coincidence. Correlation only describes association, not cause.",
        hint: "Association is not causation."
      },
      {
        front: "How do you interpret $r = 0.92$ vs. $r = -0.30$?",
        back: "$r = 0.92$ indicates a strong positive linear relationship (points cluster tightly around an upward line). $r = -0.30$ indicates a weak negative linear relationship (loose downward trend).",
        hint: "Closer to 1 (or -1) = stronger."
      },
      {
        front: "Worked example: A regression line is $\\\\hat{y} = 3x + 12$ for plant height (cm) vs. weeks. Predict the height at week 5.",
        back: "Substitute $x = 5$: $\\\\hat{y} = 3(5) + 12 = 15 + 12 = 27$ cm. The model predicts a height of 27 cm at 5 weeks.",
        hint: "Plug x into the equation."
      },
      {
        front: "What is interpolation vs. extrapolation, and why is extrapolation risky?",
        back: "Interpolation predicts within the range of the data; extrapolation predicts outside it. Extrapolation is risky because the linear pattern may not continue beyond the observed data, giving unreliable predictions.",
        hint: "Inside the data = safer."
      },
      {
        front: "How do you estimate a line of best fit by hand from a scatter plot?",
        back: "Draw a line that follows the overall trend so that roughly half the points are above and half below, balancing the vertical distances. Then pick two points on your line to compute the slope and find the y-intercept.",
        hint: "Balance points above and below."
      },
      {
        front: "What is a residual?",
        back: "A residual is the difference between an actual data value and the predicted value: residual $= y - \\\\hat{y}$. A positive residual means the point lies above the line; a negative residual means below. Best-fit lines make residuals small.",
        hint: "Actual minus predicted."
      },
      {
        front: "Find the slope between the points (2, 5) and (6, 17) to model a trend.",
        back: "$m = \\\\frac{y_2 - y_1}{x_2 - x_1} = \\\\frac{17 - 5}{6 - 2} = \\\\frac{12}{4} = 3$. The slope of the line through these points is 3.",
        hint: "Slope = rise over run."
      },
      {
        front: "What does the coefficient of determination $r^2$ tell you (intro level)?",
        back: "$r^2$ is the square of the correlation coefficient; it gives the proportion of the variation in $y$ explained by the linear relationship with $x$. For example, $r^2 = 0.81$ means 81% of the variation is explained by the model.",
        hint: "Square r; report as a percent of variation explained."
      }
    ]
  },
  {
    slug: "retrieval-forgetting",
    cards: [
      {
        front: "What is the testing effect (retrieval practice effect)?",
        back: "Actively recalling information from memory (e.g., self-testing) produces stronger, more durable long-term learning than simply re-reading or reviewing the same material. Retrieval itself strengthens the memory trace.",
        hint: "Pulling info out beats putting it in again."
      },
      {
        front: "What is the difference between encoding, storage, and retrieval?",
        back: "Encoding is getting information into memory; storage is maintaining it over time; retrieval is getting it back out when needed. Forgetting can result from a failure at any of these three stages.",
        hint: "In, keep, out."
      },
      {
        front: "Describe Ebbinghaus's forgetting curve.",
        back: "Hermann Ebbinghaus showed that memory for newly learned material drops rapidly at first and then levels off. Most forgetting happens soon after learning, which is why early review is so valuable.",
        hint: "Steep drop, then a tail."
      },
      {
        front: "What is encoding failure?",
        back: "Encoding failure occurs when information never enters long-term memory in the first place because we did not attend to it deeply. The 'memory' was never truly formed, so it cannot be retrieved later.",
        hint: "Never got in to begin with."
      },
      {
        front: "Define proactive vs. retroactive interference.",
        back: "Proactive interference: old memories disrupt the recall of new information. Retroactive interference: new learning disrupts the recall of older information. Both are retrieval-based causes of forgetting.",
        hint: "Pro = old forward; retro = new backward."
      },
      {
        front: "What is retrieval failure (the tip-of-the-tongue phenomenon)?",
        back: "Retrieval failure is being unable to access stored information even though it is still in memory, often due to missing or weak retrieval cues. The tip-of-the-tongue state is a classic example.",
        hint: "It's there but you can't reach it."
      },
      {
        front: "What is the spacing effect?",
        back: "Information is remembered better when study sessions are spread out over time (distributed practice) rather than crammed into one massed session. Spaced retrieval combats the forgetting curve.",
        hint: "Spread out beats cram."
      },
      {
        front: "Explain encoding specificity and context-dependent memory.",
        back: "The encoding specificity principle states retrieval is best when cues present at recall match those present during encoding. Context-dependent memory means recall improves when the physical environment matches the learning environment.",
        hint: "Match the cues from when you learned."
      },
      {
        front: "What is state-dependent (mood-congruent) memory?",
        back: "Recall is better when one's internal physiological or emotional state at retrieval matches the state during encoding. Mood-congruent memory is the tendency to recall experiences consistent with one's current mood.",
        hint: "Internal state acts as a cue."
      },
      {
        front: "Distinguish recall, recognition, and relearning as measures of memory.",
        back: "Recall is retrieving information with few cues (fill-in-the-blank). Recognition is identifying previously learned items (multiple choice). Relearning is mastering previously learned material faster the second time (savings).",
        hint: "Produce, identify, save time."
      },
      {
        front: "How does spaced retrieval practice apply to studying for the exam?",
        back: "Instead of rereading notes, repeatedly quiz yourself on the material across multiple days. Spacing plus active retrieval produces the strongest long-term retention and best combats the forgetting curve.",
        hint: "Self-test, spaced over days."
      },
      {
        front: "What is the misinformation effect, and how does it relate to retrieval?",
        back: "The misinformation effect (Loftus) is when exposure to misleading post-event information distorts the memory that is later retrieved. It shows memory reconstruction at retrieval can be inaccurate, not a perfect recording.",
        hint: "Misleading info reshapes the retrieved memory."
      },
      {
        front: "Common trap: Is forgetting always a sign of a 'bad' memory system?",
        back: "No. Forgetting is often adaptive — it clears out outdated or irrelevant information so relevant memories remain accessible. The goal of memory is useful retrieval, not storing everything.",
        hint: "Some forgetting is helpful."
      },
      {
        front: "What is the serial position effect?",
        back: "When recalling a list, people best remember the first items (primacy effect, moved to long-term memory) and the last items (recency effect, still in short-term memory), while middle items are forgotten most.",
        hint: "Ends remembered, middle lost."
      }
    ]
  },
  {
    slug: "apes-geology-soil",
    cards: [
      {
        front: "Name and order the soil horizons in a typical soil profile.",
        back: "From top to bottom: O (organic litter), A (topsoil, rich in humus), E (eluviation/leaching zone, less common), B (subsoil, accumulation of minerals/clay), C (weathered parent material), and R (bedrock).",
        hint: "O-A-E-B-C-R, surface down."
      },
      {
        front: "What are the three rock types in the rock cycle and how each forms?",
        back: "Igneous rock forms from cooled magma/lava; sedimentary rock forms from compacted and cemented sediments; metamorphic rock forms when existing rock is altered by heat and pressure without melting.",
        hint: "Cool, compact, change."
      },
      {
        front: "What is soil texture, and which three particle sizes define it?",
        back: "Soil texture is the relative proportion of sand, silt, and clay particles. Sand is largest, silt intermediate, clay smallest. Texture affects water-holding capacity, drainage, and aeration.",
        hint: "Sand > silt > clay by size."
      },
      {
        front: "Why is loam considered ideal agricultural soil?",
        back: "Loam is a balanced mixture of sand, silt, and clay (roughly equal parts). It holds water and nutrients well while still draining and aerating adequately, making it ideal for most crops.",
        hint: "Balanced mix of all three sizes."
      },
      {
        front: "Differentiate mechanical (physical) and chemical weathering.",
        back: "Mechanical weathering breaks rock into smaller pieces without changing composition (frost wedging, abrasion). Chemical weathering alters mineral composition through reactions (oxidation, dissolution, acid rain, hydrolysis).",
        hint: "Physical = smaller; chemical = altered."
      },
      {
        front: "What are the three types of plate boundaries and what occurs at each?",
        back: "Divergent (plates move apart, new crust forms, e.g., mid-ocean ridges); convergent (plates collide, forming mountains, subduction, volcanoes); transform (plates slide past each other, causing earthquakes, e.g., San Andreas Fault).",
        hint: "Apart, together, slide past."
      },
      {
        front: "What is soil porosity vs. permeability?",
        back: "Porosity is the percentage of pore (empty) space in soil, which determines how much water it can hold. Permeability is how easily water moves through the soil. Sandy soils are highly permeable; clay soils have high porosity but low permeability.",
        hint: "How much it holds vs. how fast water flows."
      },
      {
        front: "What is leaching in soil, and why does it reduce fertility?",
        back: "Leaching is the downward movement of dissolved nutrients (and sometimes pollutants) through soil by percolating water. It removes nutrients from the root zone, reducing fertility, and is worst in sandy, high-rainfall soils.",
        hint: "Water washes nutrients downward."
      },
      {
        front: "How does soil pH affect plant growth and nutrient availability?",
        back: "Most crops grow best in slightly acidic to neutral soil (pH 6-7). Very acidic or alkaline soils make certain nutrients unavailable and can mobilize toxic metals. Lime raises pH; sulfur lowers it.",
        hint: "Neutral-ish is best; extremes lock up nutrients."
      },
      {
        front: "What is the difference between weathering and erosion?",
        back: "Weathering is the breakdown of rock and minerals in place; erosion is the transport of those weathered materials by wind, water, ice, or gravity to a new location. Weathering happens first, then erosion moves it.",
        hint: "Break down vs. carry away."
      },
      {
        front: "What is humus and why is it important to soil?",
        back: "Humus is dark, fully decomposed organic matter in the A horizon. It improves soil structure, water retention, and nutrient-holding (cation exchange) capacity, making the soil more fertile.",
        hint: "Decomposed organic matter = fertility."
      },
      {
        front: "What causes a soil to become salinized, and why is it a problem?",
        back: "Salinization is the buildup of salts in soil, often from irrigation water evaporating and leaving salts behind, especially in arid regions. High salt levels dehydrate plant roots and degrade farmland.",
        hint: "Irrigation + evaporation leaves salt."
      },
      {
        front: "Worked example: A soil sample is 70% sand, 20% silt, 10% clay. Describe its likely properties.",
        back: "It is a sandy soil: highly permeable with good aeration and drainage, but low water- and nutrient-holding capacity, prone to leaching and drying out. Adding organic matter would improve fertility.",
        hint: "High sand = drains fast, holds little."
      },
      {
        front: "What is the difference between magma and lava?",
        back: "Magma is molten rock beneath Earth's surface; lava is molten rock that has erupted onto the surface. Magma cooling underground forms intrusive (coarse-grained) igneous rock; lava forms extrusive (fine-grained) igneous rock.",
        hint: "Underground vs. erupted."
      }
    ]
  },
  {
    slug: "wh-imperialism",
    cards: [
      {
        front: "Define imperialism (in the context of 1750-1900 world history).",
        back: "Imperialism is the policy of extending a nation's power and control over other territories and peoples, often through colonization, economic domination, or military force. The era of 'New Imperialism' (c. 1870-1914) saw European powers, the US, and Japan rapidly expand.",
        hint: "One nation controlling others."
      },
      {
        front: "What was the 'Scramble for Africa' and which conference regulated it?",
        back: "The Scramble for Africa was the rapid colonization of nearly the entire African continent by European powers (1880s-1914). The Berlin Conference (1884-85) set rules for dividing Africa among Europeans, with no African representation.",
        hint: "Berlin Conference, 1884-85."
      },
      {
        front: "List major motives for New Imperialism (use the acronym 'God, Gold, Glory' plus more).",
        back: "Economic (raw materials, markets, cheap labor), political/military (national prestige, strategic bases, nationalism), and ideological/religious (Social Darwinism, 'civilizing mission,' spreading Christianity). The Industrial Revolution drove the search for resources and markets.",
        hint: "Economic, political, ideological/religious."
      },
      {
        front: "What is Social Darwinism and how did it justify imperialism?",
        back: "Social Darwinism misapplied 'survival of the fittest' to human societies, claiming stronger 'races' or nations were naturally destined to dominate weaker ones. It was used to justify European conquest and racial hierarchies.",
        hint: "'Survival of the fittest' applied to nations."
      },
      {
        front: "Explain the 'White Man's Burden' and the 'civilizing mission.'",
        back: "These were ideological justifications claiming Europeans had a duty to 'civilize,' Christianize, and modernize colonized peoples. They masked exploitation with paternalistic, racist rhetoric (from Kipling's 1899 poem).",
        hint: "Kipling's poem; paternalistic justification."
      },
      {
        front: "Distinguish a colony, a protectorate, and a sphere of influence.",
        back: "A colony is directly governed by the imperial power. A protectorate keeps its local rulers but the imperial power controls its policies and defense. A sphere of influence is a region where one nation holds exclusive trading and investment rights (e.g., in China).",
        hint: "Direct rule, indirect rule, economic claim."
      },
      {
        front: "What were the Opium Wars and their consequences for China?",
        back: "Britain fought China (1839-42, 1856-60) over the opium trade and access to Chinese markets. China's defeat led to 'unequal treaties,' ceding Hong Kong, opening treaty ports, and granting extraterritoriality, beginning China's 'century of humiliation.'",
        hint: "Britain vs. China over opium and trade."
      },
      {
        front: "What was the Sepoy Mutiny (Indian Rebellion of 1857) and its result?",
        back: "An uprising of Indian soldiers (sepoys) against the British East India Company, sparked partly by rumored use of pig/cow-fat cartridges. After it was crushed, Britain ended Company rule and imposed direct British Crown rule (the British Raj) in 1858.",
        hint: "1857 revolt; led to direct Crown rule."
      },
      {
        front: "Compare direct rule and indirect rule as colonial administration styles.",
        back: "Direct rule (used by France) replaced local leaders with colonial officials and imposed the mother country's language and culture (assimilation). Indirect rule (used by Britain) governed through existing local rulers and institutions to cut costs.",
        hint: "France = direct/assimilation; Britain = indirect."
      },
      {
        front: "How did the Meiji Restoration make Japan an imperial power?",
        back: "After 1868, Japan rapidly modernized and industrialized along Western lines, building a strong military and economy. It then pursued its own empire, defeating China (1895) and Russia (1905) and annexing Korea (1910).",
        hint: "Japan modernized, then colonized."
      },
      {
        front: "What economic system did imperialism impose on many colonies (cash crops/extraction)?",
        back: "Colonies were restructured to produce raw materials and cash crops (rubber, cotton, sugar, tea) for the imperial power, often replacing subsistence farming. This created economic dependence and vulnerability to famine.",
        hint: "Extractive, cash-crop economies."
      },
      {
        front: "Name two major forms of resistance to imperialism.",
        back: "Direct resistance included armed revolts and rebellions (Sepoy Mutiny, Boxer Rebellion, Zulu wars). Indirect/cultural resistance included nationalist movements, religious revivals, and reform efforts (e.g., the Indian National Congress, founded 1885).",
        hint: "Armed revolt and nationalist movements."
      },
      {
        front: "What was the Boxer Rebellion (1899-1901)?",
        back: "An anti-foreign, anti-Christian uprising in China by the 'Boxers' aiming to expel foreign influence. It was crushed by an eight-nation alliance, further weakening the Qing dynasty and deepening foreign control of China.",
        hint: "Anti-foreign uprising in China."
      },
      {
        front: "Common trap: Did industrialization cause imperialism, or vice versa?",
        back: "Industrialization was a major cause of New Imperialism: factories needed raw materials and new markets, and steamships, railroads, the Maxim gun, and quinine made conquest feasible. Imperialism then fed industrial economies further raw materials.",
        hint: "Industrial demand and technology enabled conquest."
      }
    ]
  },
  {
    slug: "rational-functions-graphs-alg2",
    cards: [
      {
        front: "What is a rational function?",
        back: "A rational function is a ratio of two polynomials: $f(x) = \\\\frac{P(x)}{Q(x)}$, where $P$ and $Q$ are polynomials and $Q(x) \\\\neq 0$. Its graph often has asymptotes and may have holes.",
        hint: "Polynomial over polynomial."
      },
      {
        front: "How do you find the vertical asymptotes of a rational function?",
        back: "After simplifying, set the denominator equal to zero and solve. Each $x$-value that makes the denominator zero (but not the numerator) is a vertical asymptote. The graph approaches but never crosses it.",
        hint: "Denominator = 0 (after canceling)."
      },
      {
        front: "How do you find the domain of a rational function?",
        back: "The domain is all real numbers except where the original denominator equals zero. Set $Q(x) = 0$, solve, and exclude those $x$-values (these become vertical asymptotes or holes).",
        hint: "Exclude denominator zeros."
      },
      {
        front: "State the rules for horizontal asymptotes based on degrees.",
        back: "Let $n$ = degree of numerator, $m$ = degree of denominator. If $n < m$, HA is $y = 0$. If $n = m$, HA is $y = \\\\frac{a}{b}$ (ratio of leading coefficients). If $n > m$, there is no HA (possibly a slant asymptote).",
        hint: "Compare top and bottom degrees."
      },
      {
        front: "When does a rational function have a slant (oblique) asymptote, and how do you find it?",
        back: "A slant asymptote occurs when the numerator's degree is exactly one more than the denominator's. Find it by dividing the polynomials (long or synthetic division); the quotient (ignoring the remainder) is the slant asymptote line.",
        hint: "Degree of top = degree of bottom + 1; use division."
      },
      {
        front: "What is a hole (removable discontinuity) and how do you find it?",
        back: "A hole occurs where a factor cancels from both numerator and denominator. Set the canceled factor equal to zero to find the hole's $x$-coordinate, then plug it into the simplified function to find the $y$-coordinate.",
        hint: "Comes from a canceled common factor."
      },
      {
        front: "How do you find the x-intercepts (zeros) of a rational function?",
        back: "Set the simplified numerator equal to zero and solve, keeping only values that are still in the domain. The x-intercepts are where $P(x) = 0$ but $Q(x) \\\\neq 0$.",
        hint: "Numerator = 0 (and in domain)."
      },
      {
        front: "Find the vertical asymptote(s) and hole of $f(x) = \\\\frac{(x-3)(x+2)}{(x-3)(x-5)}$.",
        back: "The factor $(x-3)$ cancels, giving a hole at $x = 3$. The remaining denominator zero gives a vertical asymptote at $x = 5$.",
        hint: "Canceled factor = hole; leftover = VA."
      },
      {
        front: "Find the horizontal asymptote of $f(x) = \\\\frac{2x^2 + 1}{x^2 - 4}$.",
        back: "Degrees are equal ($n = m = 2$), so the horizontal asymptote is the ratio of leading coefficients: $y = \\\\frac{2}{1} = 2$.",
        hint: "Equal degrees: ratio of leading coefficients."
      },
      {
        front: "Common trap: Can a graph cross a horizontal asymptote?",
        back: "Yes. A graph can cross its horizontal (or slant) asymptote in the middle region; the asymptote only describes end behavior as $x \\\\to \\\\pm\\\\infty$. A graph can never cross a vertical asymptote, however.",
        hint: "HA describes ends only; VA is never crossed."
      },
      {
        front: "How do you find where a graph crosses its horizontal asymptote $y = c$?",
        back: "Set the function equal to the asymptote value: $f(x) = c$, and solve for $x$. If a real solution exists in the domain, the graph crosses the HA there.",
        hint: "Set f(x) = c and solve."
      },
      {
        front: "What is the parent rational function and its key features?",
        back: "The parent function is $f(x) = \\\\frac{1}{x}$. It has a vertical asymptote at $x = 0$, a horizontal asymptote at $y = 0$, and is a hyperbola in the first and third quadrants (or shifted by transformations).",
        hint: "f(x) = 1/x; asymptotes at the axes."
      },
      {
        front: "Worked example: Find all asymptotes of $f(x) = \\\\frac{x + 1}{x - 2}$.",
        back: "Vertical asymptote: $x - 2 = 0 \\\\Rightarrow x = 2$. Degrees are equal (both 1), so horizontal asymptote is $y = \\\\frac{1}{1} = 1$. No holes since nothing cancels.",
        hint: "VA from denominator; HA from equal-degree ratio."
      },
      {
        front: "How do transformations $f(x) = \\\\frac{a}{x - h} + k$ shift the graph of $\\\\frac{1}{x}$?",
        back: "The vertical asymptote moves to $x = h$ and the horizontal asymptote to $y = k$. The value $a$ stretches/reflects the curve. The center of the hyperbola is at $(h, k)$.",
        hint: "h shifts right, k shifts up; asymptotes move accordingly."
      }
    ]
  },
  {
    slug: "aas-black-power-beyond",
    cards: [
      {
        front: "What was the Black Power movement?",
        back: "Emerging in the mid-1960s, Black Power emphasized Black self-determination, racial pride, political and economic power, and self-defense, often contrasting with the integrationist, nonviolent strategies of the earlier civil rights movement.",
        hint: "Self-determination, pride, and power."
      },
      {
        front: "Who popularized the term 'Black Power' and when?",
        back: "Stokely Carmichael (later Kwame Ture) of SNCC popularized the slogan 'Black Power' during the 1966 March Against Fear in Mississippi, signaling a shift toward more militant self-determination.",
        hint: "Stokely Carmichael, SNCC, 1966."
      },
      {
        front: "What was the Black Panther Party and what did it advocate?",
        back: "Founded in 1966 in Oakland by Huey Newton and Bobby Seale, the Black Panther Party advocated armed self-defense against police brutality and ran community 'survival programs.' Its Ten-Point Program demanded freedom, employment, housing, and justice.",
        hint: "Newton and Seale, Oakland, 1966."
      },
      {
        front: "Describe the Black Panthers' community 'survival programs.'",
        back: "The Panthers ran free programs to meet community needs, most famously the Free Breakfast for Children Program, plus free health clinics, sickle-cell anemia testing, and liberation schools, framing self-help as part of political empowerment.",
        hint: "Free Breakfast for Children was the most famous."
      },
      {
        front: "How did Malcolm X's philosophy shape the Black Power movement?",
        back: "Malcolm X championed Black self-defense ('by any means necessary'), racial pride, self-reliance, and Pan-Africanism. His critiques of nonviolence and emphasis on Black dignity deeply influenced Black Power activists after his 1965 assassination.",
        hint: "Self-defense, pride, Pan-Africanism."
      },
      {
        front: "What is the Black Arts Movement (BAM)?",
        back: "Often called the artistic sister of Black Power, the Black Arts Movement (mid-1960s-1970s) used poetry, theater, and music to express Black pride, identity, and political consciousness. Amiri Baraka was a leading figure.",
        hint: "Cultural/artistic wing of Black Power."
      },
      {
        front: "Define the 'Black is Beautiful' cultural movement.",
        back: "A cultural movement affirming the beauty of Black features, skin, and hair (e.g., natural Afros), rejecting Eurocentric beauty standards and internalized racism. It was a key expression of the era's emphasis on racial pride.",
        hint: "Affirming Black aesthetics and pride."
      },
      {
        front: "What was COINTELPRO and how did it target Black Power organizations?",
        back: "COINTELPRO was a secret FBI counterintelligence program (under J. Edgar Hoover) that surveilled, infiltrated, and disrupted Black activist groups, especially the Black Panthers. Tactics included misinformation, false arrests, and the 1969 killing of Fred Hampton.",
        hint: "FBI program to disrupt Black activists."
      },
      {
        front: "Who was Fred Hampton?",
        back: "Fred Hampton was a charismatic young leader of the Illinois Black Panther Party who organized the multiracial 'Rainbow Coalition.' He was killed in his bed by Chicago police during an FBI-coordinated raid in December 1969.",
        hint: "Illinois Panther leader killed in 1969 raid."
      },
      {
        front: "What is Pan-Africanism and how does it connect to Black Power 'and beyond'?",
        back: "Pan-Africanism is the idea that people of African descent worldwide share common interests and should unite politically and culturally. Black Power thinkers linked the US struggle to anti-colonial liberation movements across Africa and the diaspora.",
        hint: "Global unity of the African diaspora."
      },
      {
        front: "How did Black Power influence higher education?",
        back: "Activism in the late 1960s led to the creation of Black Studies (African American Studies) departments, beginning with San Francisco State College in 1968 after a five-month student strike led by the Black Student Union.",
        hint: "Led to Black/African American Studies programs."
      },
      {
        front: "What was the significance of the 1968 Olympics Black Power salute?",
        back: "At the 1968 Mexico City Olympics, sprinters Tommie Smith and John Carlos raised black-gloved fists on the medal podium to protest racism. The iconic gesture brought global attention to the movement and led to their expulsion from the Games.",
        hint: "Tommie Smith and John Carlos, raised fists."
      },
      {
        front: "Common misconception: Was Black Power simply 'anti-white' violence?",
        back: "No. While it embraced self-defense and rejected forced integration, Black Power centered on self-determination, community institutions, cultural pride, and political/economic empowerment. Its survival programs and arts movements were constructive, not merely reactive.",
        hint: "It was largely about self-determination and pride."
      },
      {
        front: "How does Black feminism extend the Black Power era 'and beyond'?",
        back: "Black feminist thinkers and groups like the Combahee River Collective (1974) critiqued sexism within Black Power and racism within feminism, articulating intersectionality — that race, gender, and class oppression are interlocking.",
        hint: "Combahee River Collective; intersectionality."
      }
    ]
  },
  {
    slug: "macro-scarcity-opportunity-cost",
    cards: [
      {
        front: "Define scarcity, the central problem of economics.",
        back: "Scarcity is the condition where unlimited human wants exceed the limited resources available to satisfy them. Because resources are finite, every society must make choices about how to use them.",
        hint: "Unlimited wants, limited resources."
      },
      {
        front: "What are the four factors of production?",
        back: "Land (natural resources), Labor (human effort), Capital (tools, machines, buildings), and Entrepreneurship (organizing the other three and bearing risk). These are the scarce resources used to produce goods and services.",
        hint: "Land, Labor, Capital, Entrepreneurship."
      },
      {
        front: "Define opportunity cost.",
        back: "Opportunity cost is the value of the next-best alternative given up when a choice is made. It includes both explicit (monetary) and implicit (forgone) costs. Every choice has an opportunity cost because of scarcity.",
        hint: "Value of the next-best forgone option."
      },
      {
        front: "Worked example: You spend $50 and an evening on a concert instead of working a $40 shift. What is the opportunity cost?",
        back: "The opportunity cost is the next-best alternative given up — the $40 you would have earned working (plus the value of anything else that evening). The $50 ticket is an explicit cost of the concert itself, not the opportunity cost of the alternative.",
        hint: "Focus on the forgone next-best use."
      },
      {
        front: "What is a Production Possibilities Curve (PPC), and what does it show?",
        back: "The PPC is a graph showing the maximum combinations of two goods an economy can produce using all resources efficiently. Points on the curve are efficient, points inside are inefficient/underutilized, and points outside are currently unattainable.",
        hint: "Max output combinations of two goods."
      },
      {
        front: "How does the PPC illustrate opportunity cost?",
        back: "Moving along the PPC from one point to another means producing more of one good and less of the other. The amount of the second good given up is the opportunity cost of producing more of the first.",
        hint: "Slope = trade-off between the two goods."
      },
      {
        front: "Why is the PPC usually bowed outward (concave)?",
        back: "Because of the law of increasing opportunity cost: resources are not perfectly adaptable between goods, so producing more of one good requires giving up increasingly larger amounts of the other.",
        hint: "Increasing opportunity cost as you specialize."
      },
      {
        front: "What does a point inside the PPC indicate?",
        back: "A point inside the curve represents inefficient production — resources are unemployed or underutilized (e.g., during a recession). The economy could produce more of both goods without giving anything up.",
        hint: "Inefficiency / unemployment of resources."
      },
      {
        front: "What causes the PPC to shift outward (economic growth)?",
        back: "Outward shifts come from more resources (labor, capital, land), better technology, or improved productivity/education. This expands the economy's productive capacity, making previously unattainable points reachable.",
        hint: "More/better resources or technology."
      },
      {
        front: "What are the three basic economic questions every society must answer?",
        back: "Because of scarcity: (1) What goods and services to produce? (2) How to produce them? (3) For whom to produce them (who gets them)? Different economic systems answer these differently.",
        hint: "What, how, and for whom to produce."
      },
      {
        front: "Distinguish a 'good' (free good) from an economic good.",
        back: "An economic good is scarce and has an opportunity cost, so it commands a price. A free good (like air, in most contexts) is so abundant relative to wants that it carries no opportunity cost. Almost everything studied in economics is an economic good.",
        hint: "Economic goods are scarce; free goods aren't."
      },
      {
        front: "Common trap: Is a 'sunk cost' the same as opportunity cost?",
        back: "No. A sunk cost is money already spent and unrecoverable, so it should be ignored in rational decisions. Opportunity cost is forward-looking — the value of the best alternative you give up by your current choice.",
        hint: "Sunk = past/ignore; opportunity = next-best alternative."
      },
      {
        front: "What is the difference between positive and normative economics?",
        back: "Positive economics describes 'what is' with facts that can be tested (e.g., 'unemployment rose to 5%'). Normative economics expresses 'what ought to be,' involving value judgments and opinions (e.g., 'the government should cut taxes').",
        hint: "What is vs. what ought to be."
      },
      {
        front: "Define the marginal analysis principle used in economic decision-making.",
        back: "Rational decision-makers compare marginal (additional) benefit to marginal (additional) cost. They take an action as long as marginal benefit exceeds marginal cost, stopping when MB = MC, because that maximizes net benefit given scarce resources.",
        hint: "Act while MB > MC; stop at MB = MC."
      }
    ]
  }
];
