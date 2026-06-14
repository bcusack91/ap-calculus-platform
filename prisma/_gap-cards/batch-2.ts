export const batchCards: { slug: string; cards: { front: string; back: string; hint?: string }[] }[] = [
  {
    slug: "basic-probability-rules",
    cards: [
      {
        front: "What is the range of any valid probability, and what do 0 and 1 represent?",
        back: "For any event $A$, $0 \\le P(A) \\le 1$. A probability of 0 means the event is impossible, and a probability of 1 means it is certain.",
        hint: "Never negative, never above 1.",
      },
      {
        front: "What does it mean for events in a sample space to be exhaustive, and what must their probabilities sum to?",
        back: "A set of outcomes is exhaustive if it includes every possible outcome. The probabilities of all outcomes in a sample space must sum to exactly 1.",
        hint: "Total probability of everything.",
      },
      {
        front: "State the complement rule and when to use it.",
        back: "The complement rule is $P(A^c) = 1 - P(A)$. Use it when it is easier to compute the probability that an event does NOT happen, especially for 'at least one' problems.",
        hint: "Everything except A.",
      },
      {
        front: "State the general addition rule for $P(A \\text{ or } B)$.",
        back: "$P(A \\cup B) = P(A) + P(B) - P(A \\cap B)$. You subtract the overlap $P(A \\cap B)$ so outcomes in both events are not counted twice.",
        hint: "Add the two, subtract the overlap.",
      },
      {
        front: "What does it mean for two events to be mutually exclusive (disjoint), and how does the addition rule simplify?",
        back: "Mutually exclusive events cannot occur at the same time, so $P(A \\cap B) = 0$. Then $P(A \\cup B) = P(A) + P(B)$.",
        hint: "No overlap.",
      },
      {
        front: "Define independence of two events and give the multiplication rule for independent events.",
        back: "Events $A$ and $B$ are independent if one occurring does not change the probability of the other. For independent events, $P(A \\cap B) = P(A) \\cdot P(B)$.",
        hint: "Multiply for 'and' when independent.",
      },
      {
        front: "State the general multiplication rule (valid even when events are not independent).",
        back: "$P(A \\cap B) = P(A) \\cdot P(B \\mid A)$, where $P(B \\mid A)$ is the conditional probability of $B$ given $A$ has occurred.",
        hint: "Multiply by the conditional.",
      },
      {
        front: "Common trap: are mutually exclusive events independent?",
        back: "No. If two events are mutually exclusive and both have nonzero probability, they are dependent, because knowing one happened tells you the other did not (its probability drops to 0).",
        hint: "Disjoint is the opposite of independent here.",
      },
      {
        front: "Worked example: A fair die is rolled. What is $P(\\text{even or greater than 4})$?",
        back: "Even = {2,4,6}, greater than 4 = {5,6}. $P(\\text{even}) = 3/6$, $P(>4) = 2/6$, overlap = {6} = $1/6$. So $P = 3/6 + 2/6 - 1/6 = 4/6 = 2/3$.",
        hint: "Use the general addition rule.",
      },
      {
        front: "Worked example: P(rain) = 0.3 each day, days independent. What is P(at least one rainy day in 3 days)?",
        back: "Use the complement: $P(\\text{no rain in 3 days}) = (0.7)^3 = 0.343$. So $P(\\text{at least one}) = 1 - 0.343 = 0.657$.",
        hint: "Complement plus independence.",
      },
      {
        front: "How do you find probability for equally likely outcomes?",
        back: "$P(A) = \\dfrac{\\text{number of outcomes in } A}{\\text{total number of outcomes}}$. This formula only applies when every outcome in the sample space is equally likely.",
        hint: "Favorable over total.",
      },
      {
        front: "What is the difference between a sample space and an event?",
        back: "The sample space is the set of all possible outcomes of a random process. An event is any subset of the sample space (one or more outcomes).",
        hint: "Whole vs. part.",
      },
      {
        front: "How do you test whether events A and B are independent using probabilities?",
        back: "Check whether $P(A \\mid B) = P(A)$, or equivalently whether $P(A \\cap B) = P(A) \\cdot P(B)$. If either holds, the events are independent.",
        hint: "Conditional equals unconditional.",
      },
    ],
  },
  {
    slug: "acids-bases-organic",
    cards: [
      {
        front: "State the Bronsted-Lowry definitions of acid and base.",
        back: "A Bronsted-Lowry acid is a proton ($\\text{H}^+$) donor; a Bronsted-Lowry base is a proton acceptor. Acid-base reactions involve transfer of a proton from the acid to the base.",
        hint: "Proton donor vs. acceptor.",
      },
      {
        front: "What is the relationship between $\\text{p}K_a$ and acid strength?",
        back: "A lower $\\text{p}K_a$ means a stronger acid (more readily donates its proton). $\\text{p}K_a = -\\log K_a$, so a larger $K_a$ corresponds to a smaller $\\text{p}K_a$.",
        hint: "Lower pKa = stronger acid.",
      },
      {
        front: "How do you predict the favored direction of an acid-base equilibrium?",
        back: "Equilibrium favors the side with the weaker acid and weaker base (the more stable, higher-$\\text{p}K_a$ acid). The proton moves to form the species with the larger $\\text{p}K_a$.",
        hint: "Stronger acid loses its proton.",
      },
      {
        front: "Define a Lewis acid and a Lewis base.",
        back: "A Lewis acid is an electron-pair acceptor (electrophile); a Lewis base is an electron-pair donor (nucleophile). This broadens acid-base chemistry beyond proton transfer.",
        hint: "Electron-pair acceptor vs. donor.",
      },
      {
        front: "List, in order, the four main factors (ARIO) that determine the stability of a conjugate base / acidity.",
        back: "Atom (size and electronegativity of the atom bearing the charge), Resonance (delocalization stabilizes the charge), Induction (electron-withdrawing groups stabilize), and Orbital (hybridization: more s-character is more stable). More stable conjugate base = stronger acid.",
        hint: "ARIO.",
      },
      {
        front: "Within a period, what makes an acid stronger; within a group (down a column), what makes it stronger?",
        back: "Across a period, higher electronegativity of the atom bearing the negative charge increases acidity. Down a group, larger atomic size (greater charge delocalization over a bigger atom) increases acidity, which dominates over electronegativity.",
        hint: "Electronegativity across, size down.",
      },
      {
        front: "Why is a carboxylic acid ($\\text{p}K_a \\approx 4-5$) much more acidic than an alcohol ($\\text{p}K_a \\approx 16$)?",
        back: "The carboxylate conjugate base is resonance-stabilized: the negative charge is delocalized equally over two oxygen atoms. The alkoxide from an alcohol has no such resonance, so it is far less stable.",
        hint: "Resonance over two oxygens.",
      },
      {
        front: "Rank these by increasing acidity: ethane, ethene, ethyne. Explain.",
        back: "Ethane ($sp^3$, $\\text{p}K_a \\approx 50$) < ethene ($sp^2$, $\\approx 44$) < ethyne ($sp$, $\\approx 25$). More s-character holds the lone pair closer to the nucleus, stabilizing the carbanion conjugate base.",
        hint: "More s-character = more acidic.",
      },
      {
        front: "What does an electron-withdrawing group near an acidic site do to acidity, and why?",
        back: "It increases acidity through the inductive effect: it pulls electron density away, stabilizing the negative charge of the conjugate base. Effect weakens with distance from the acidic site.",
        hint: "Inductive stabilization of the anion.",
      },
      {
        front: "Approximate the $\\text{p}K_a$ values for: protonated amine ($\\text{R-NH}_3^+$), water, alcohol, and a terminal alkyne.",
        back: "Protonated amine $\\approx 10-11$, water $= 15.7$, alcohol $\\approx 16-18$, terminal alkyne $\\approx 25$. Knowing rough $\\text{p}K_a$ values lets you predict acid-base reaction direction.",
        hint: "Memorize anchor pKa values.",
      },
      {
        front: "Worked example: Will hydroxide ($\\text{OH}^-$) deprotonate a terminal alkyne (pKa 25)?",
        back: "No, not effectively. Water (the conjugate acid of $\\text{OH}^-$) has $\\text{p}K_a = 15.7$, which is lower than 25, so equilibrium favors the reactants. You need a stronger base like $\\text{NaNH}_2$ (conjugate acid $\\text{NH}_3$, $\\text{p}K_a \\approx 38$).",
        hint: "Compare conjugate acid pKa to 25.",
      },
      {
        front: "What is a conjugate acid-base pair?",
        back: "Two species that differ by a single proton. The acid has the extra $\\text{H}^+$; its conjugate base is what remains after donating it (e.g., $\\text{CH}_3\\text{COOH}$ / $\\text{CH}_3\\text{COO}^-$).",
        hint: "Differ by one H+.",
      },
      {
        front: "Common trap: a strong acid has a strong or weak conjugate base?",
        back: "A strong acid has a weak (stable) conjugate base. The more stable the conjugate base, the more the acid wants to give up its proton, hence the stronger the acid.",
        hint: "Strong acid, weak conjugate base.",
      },
    ],
  },
  {
    slug: "interpreting-ci",
    cards: [
      {
        front: "Give a correct interpretation of a single confidence interval, e.g., a 95% CI of (12, 18) for a mean.",
        back: "We are 95% confident that the true population parameter (mean) lies between 12 and 18. The interval is an estimate of the unknown parameter, not of individual data values.",
        hint: "Confident the parameter is inside.",
      },
      {
        front: "What is the correct interpretation of the confidence LEVEL (e.g., 95%)?",
        back: "If we repeated the sampling process many times and built an interval each time, about 95% of those intervals would capture the true parameter. It describes the long-run success rate of the method.",
        hint: "Property of the method, not one interval.",
      },
      {
        front: "Common trap: Is it correct to say 'there is a 95% probability the parameter is in this interval'?",
        back: "No. Once the interval is computed, the parameter is either in it or not. The 95% refers to the long-run capture rate of the procedure, not the probability for one fixed interval.",
        hint: "No probability after the interval is fixed.",
      },
      {
        front: "What is the general structure of a confidence interval?",
        back: "$\\text{point estimate} \\pm \\text{margin of error}$, where margin of error $= (\\text{critical value}) \\times (\\text{standard error})$. The point estimate centers the interval; the margin sets its width.",
        hint: "Estimate plus or minus margin.",
      },
      {
        front: "How does increasing the confidence level affect the width of the interval (sample size fixed)?",
        back: "Higher confidence (e.g., 99% vs 95%) uses a larger critical value, producing a WIDER interval. Greater confidence requires a wider net to catch the parameter.",
        hint: "More confidence, wider interval.",
      },
      {
        front: "How does increasing sample size affect the margin of error?",
        back: "Larger $n$ decreases the standard error (which has $\\sqrt{n}$ in the denominator), so the margin of error shrinks and the interval becomes narrower. To halve the margin, you must roughly quadruple $n$.",
        hint: "Bigger n, smaller margin.",
      },
      {
        front: "How do you use a confidence interval to test a hypothesized value?",
        back: "If the hypothesized value (e.g., 0 for a difference, or a claimed mean) is NOT inside the interval, you have evidence against it. If it IS inside, the value is plausible.",
        hint: "Value inside = plausible.",
      },
      {
        front: "For a two-sample interval (difference of means or proportions), what does it mean if 0 is in the interval?",
        back: "If 0 is captured in the interval for the difference, then there is no significant difference between the two groups at that confidence level; a difference of 0 is plausible.",
        hint: "0 inside = no significant difference.",
      },
      {
        front: "Worked example: A 95% CI for the mean is (48, 56). Is a claimed mean of 50 plausible? Is 60?",
        back: "Yes, 50 is inside (48, 56), so it is plausible. No, 60 is outside the interval, so 60 is not a plausible value for the population mean at the 95% level.",
        hint: "Check if the value falls inside.",
      },
      {
        front: "What conditions are typically required to construct a valid confidence interval for a mean?",
        back: "Random sampling, independence (sample < 10% of population if sampling without replacement), and a Normal sampling distribution (population Normal or $n$ large enough by the Central Limit Theorem, often $n \\ge 30$).",
        hint: "Random, 10%, Normal/large.",
      },
      {
        front: "Common trap: What is wrong with saying '95% of the data falls in the interval'?",
        back: "A confidence interval estimates a PARAMETER (like the mean), not the spread of individual data values. The interval is about where the parameter likely is, not about coverage of data points.",
        hint: "Interval is about the parameter.",
      },
      {
        front: "Worked example: How would you interpret a 90% CI for a proportion of (0.42, 0.50)?",
        back: "We are 90% confident that the true population proportion lies between 0.42 and 0.50. If we sampled repeatedly and built intervals this way, about 90% would contain the true proportion.",
        hint: "State confidence + parameter + context.",
      },
      {
        front: "What two things would make a confidence interval more precise (narrower)?",
        back: "Increasing the sample size and/or decreasing the confidence level both narrow the interval. There is a trade-off: lowering the confidence level reduces how often the method captures the parameter.",
        hint: "Bigger n or lower confidence.",
      },
    ],
  },
  {
    slug: "adolescence-adulthood",
    cards: [
      {
        front: "According to Erikson, what is the central psychosocial crisis of adolescence?",
        back: "Identity vs. role confusion. Adolescents work to form a coherent sense of self and personal identity; failure can lead to confusion about one's role and direction.",
        hint: "Forming a personal identity.",
      },
      {
        front: "What are Erikson's three adulthood psychosocial stages and their crises?",
        back: "Young adulthood: intimacy vs. isolation (forming close relationships). Middle adulthood: generativity vs. stagnation (contributing to the next generation). Late adulthood: integrity vs. despair (reflecting on a life well lived).",
        hint: "Intimacy, generativity, integrity.",
      },
      {
        front: "What is adolescent egocentrism, and name its two components (Elkind)?",
        back: "A heightened self-focus in adolescence. The imaginary audience is the belief that others are constantly watching and judging you; the personal fable is the belief that one's experiences are unique and that one is invulnerable.",
        hint: "Imaginary audience + personal fable.",
      },
      {
        front: "What cognitive stage (Piaget) do adolescents typically enter, and what does it allow?",
        back: "The formal operational stage. It enables abstract reasoning, hypothetical and deductive thinking, and systematic problem solving beyond concrete objects.",
        hint: "Abstract, hypothetical thinking.",
      },
      {
        front: "What is emerging adulthood (Arnett), and roughly what ages does it span?",
        back: "A developmental period of roughly ages 18-25 in industrialized societies, marked by identity exploration, instability, self-focus, feeling in-between, and a sense of broad possibilities before settling into adult roles.",
        hint: "Arnett's 18-25 'in-between' phase.",
      },
      {
        front: "Distinguish crystallized intelligence from fluid intelligence and how each changes with age.",
        back: "Crystallized intelligence (accumulated knowledge, vocabulary, skills) tends to remain stable or increase into older adulthood. Fluid intelligence (rapid, abstract reasoning and processing speed) typically declines with age.",
        hint: "Crystallized stays, fluid declines.",
      },
      {
        front: "What is the highest level of Kohlberg's moral reasoning, and when may it emerge?",
        back: "The postconventional level, where morality is based on abstract principles and universal ethics rather than laws or social approval. It may emerge in adolescence or adulthood, if at all.",
        hint: "Principle-based morality.",
      },
      {
        front: "What physical event marks the onset of adolescence, and what triggers it?",
        back: "Puberty, the period of rapid physical and sexual maturation, triggered by a surge in sex hormones. Menarche (first menstruation) and spermarche (first ejaculation) are key markers.",
        hint: "Hormone-driven sexual maturation.",
      },
      {
        front: "What is the difference between primary and secondary sex characteristics?",
        back: "Primary sex characteristics are the reproductive organs directly involved in reproduction (ovaries, testes). Secondary sex characteristics are nonreproductive traits like breast development, facial hair, and voice changes.",
        hint: "Reproductive organs vs. other body traits.",
      },
      {
        front: "What does the social clock refer to?",
        back: "The culturally defined 'right time' for major life events such as marriage, parenthood, retirement, or career milestones. It varies across cultures and historical periods.",
        hint: "Cultural timing of life events.",
      },
      {
        front: "What is the difference between the menopause and a midlife crisis as developmental concepts?",
        back: "Menopause is the biological cessation of menstruation and fertility in midlife. A midlife crisis is a popularized but empirically weak idea of emotional turmoil at midlife; most research finds no universal crisis.",
        hint: "Biological vs. (overstated) emotional event.",
      },
      {
        front: "According to research, how does life satisfaction typically change across adulthood?",
        back: "Many studies find a U-shaped pattern: satisfaction is relatively high in youth, dips in midlife, then rises again in older age. Emotional regulation and positivity often improve with age.",
        hint: "U-shaped happiness curve.",
      },
      {
        front: "What is socioemotional selectivity theory (Carstensen)?",
        back: "As people perceive their time as limited (in older adulthood), they prioritize emotionally meaningful goals and close relationships over acquiring new information or wide social networks.",
        hint: "Limited time, prioritize meaning.",
      },
    ],
  },
  {
    slug: "conditional-probability",
    cards: [
      {
        front: "State the formula for conditional probability $P(A \\mid B)$.",
        back: "$P(A \\mid B) = \\dfrac{P(A \\cap B)}{P(B)}$, valid when $P(B) > 0$. It is the probability of $A$ given that $B$ has already occurred (the sample space shrinks to $B$).",
        hint: "Joint over the condition.",
      },
      {
        front: "How do conditional probability and independence relate?",
        back: "Events $A$ and $B$ are independent if and only if $P(A \\mid B) = P(A)$ (equivalently $P(A \\cap B) = P(A) \\cdot P(B)$). Independence means conditioning changes nothing.",
        hint: "Independent: condition doesn't matter.",
      },
      {
        front: "Rearrange the conditional formula to get the general multiplication rule.",
        back: "$P(A \\cap B) = P(B) \\cdot P(A \\mid B)$, or equivalently $P(A) \\cdot P(B \\mid A)$. Use this to find the probability of two events both occurring.",
        hint: "Multiply condition by conditional.",
      },
      {
        front: "Common trap: Is $P(A \\mid B)$ the same as $P(B \\mid A)$?",
        back: "No, in general they differ. Confusing them is the 'prosecutor's fallacy.' They are equal only in special cases (e.g., when $P(A) = P(B)$).",
        hint: "Order of conditioning matters.",
      },
      {
        front: "What is a two-way table, and how do you read a conditional probability from it?",
        back: "A table cross-classifying two categorical variables. For $P(A \\mid B)$, restrict to the row or column for $B$ and divide the count in the $A \\cap B$ cell by that row/column total.",
        hint: "Divide cell by the condition's total.",
      },
      {
        front: "Worked example: In a class, 60% pass math, 30% pass both math and science. Find P(pass science | pass math).",
        back: "$P(\\text{sci} \\mid \\text{math}) = \\dfrac{P(\\text{both})}{P(\\text{math})} = \\dfrac{0.30}{0.60} = 0.5$. Given a student passed math, there is a 50% chance they also passed science.",
        hint: "Both over math.",
      },
      {
        front: "What is the tree diagram method for computing probabilities along a path?",
        back: "Multiply probabilities along the branches of a path to get the joint probability of that sequence. To find the total probability of an outcome, add the joint probabilities of all paths leading to it.",
        hint: "Multiply along, add across paths.",
      },
      {
        front: "State the Law of Total Probability for two cases.",
        back: "$P(A) = P(A \\mid B)P(B) + P(A \\mid B^c)P(B^c)$. It computes the overall probability of $A$ by weighting its conditional probabilities across all branches of $B$.",
        hint: "Weighted sum over a partition.",
      },
      {
        front: "State Bayes' Theorem for two events.",
        back: "$P(B \\mid A) = \\dfrac{P(A \\mid B)\\,P(B)}{P(A)}$, where $P(A)$ may be found by the Law of Total Probability. It reverses the direction of conditioning.",
        hint: "Flip the conditional.",
      },
      {
        front: "Worked example: 1% of people have a disease. A test is 90% sensitive and has a 5% false positive rate. If positive, what is P(disease | positive)?",
        back: "$P(+) = (0.90)(0.01) + (0.05)(0.99) = 0.009 + 0.0495 = 0.0585$. So $P(\\text{disease} \\mid +) = \\dfrac{0.009}{0.0585} \\approx 0.154$, only about 15%.",
        hint: "Bayes with the base rate.",
      },
      {
        front: "Why is the base rate important in conditional probability problems?",
        back: "A rare event (low base rate) means even an accurate test produces many false positives relative to true positives, so $P(\\text{disease} \\mid +)$ can be surprisingly low. Ignoring the base rate is the base rate fallacy.",
        hint: "Rare events make positives unreliable.",
      },
      {
        front: "How do you compute 'and' probabilities for a sequence without replacement?",
        back: "Use the general multiplication rule with updated conditionals, since each draw changes the remaining pool. E.g., $P(\\text{2 aces}) = \\dfrac{4}{52} \\cdot \\dfrac{3}{51}$.",
        hint: "Update the denominator each draw.",
      },
      {
        front: "Common trap: 'mutually exclusive' vs. 'independent' in conditional problems.",
        back: "If $A$ and $B$ are mutually exclusive (and both nonzero), then $P(A \\mid B) = 0$, not $P(A)$. So mutually exclusive events are dependent, not independent.",
        hint: "Disjoint forces the conditional to 0.",
      },
    ],
  },
  {
    slug: "wh-indian-ocean-trade",
    cards: [
      {
        front: "What natural phenomenon made Indian Ocean trade possible and predictable?",
        back: "The monsoon winds, which reverse direction seasonally (blowing from the southwest in summer and the northeast in winter), allowed ships to sail toward and back from distant ports reliably.",
        hint: "Seasonal reversing winds.",
      },
      {
        front: "Name three maritime technologies that facilitated Indian Ocean trade.",
        back: "The lateen (triangular) sail for sailing against the wind, the stern-post rudder for steering, and the astrolabe/compass for navigation. The dhow and later the Chinese junk were key ship designs.",
        hint: "Lateen sail, rudder, astrolabe.",
      },
      {
        front: "What was a dhow, and who primarily used it?",
        back: "A dhow was a wooden sailing ship with lateen sails used by Arab, Swahili, and Indian merchants across the Indian Ocean. Its design was well suited to monsoon-driven trade.",
        hint: "Arab/Swahili lateen-sail ship.",
      },
      {
        front: "What were the Swahili city-states, and how did they grow wealthy?",
        back: "A network of trading city-states (e.g., Kilwa, Mombasa, Mogadishu) on the East African coast that grew rich by exporting gold, ivory, and enslaved people and importing Asian goods. Swahili (a Bantu-Arabic blend) emerged as a trade language.",
        hint: "East African coastal trade ports.",
      },
      {
        front: "What role did Islam play in Indian Ocean trade?",
        back: "Islam provided a shared legal, commercial, and cultural framework that linked Muslim merchants from East Africa to Southeast Asia, easing trust and trade. It spread peacefully along trade routes via merchants and missionaries.",
        hint: "Unifying merchant network and faith.",
      },
      {
        front: "What was Malacca (Melaka), and why was it significant?",
        back: "A powerful port-city sultanate on the Malay Peninsula that controlled the Strait of Malacca, a chokepoint between the Indian Ocean and the South China Sea. It collected tolls and became a major commercial and Islamic hub.",
        hint: "Strait chokepoint port-state.",
      },
      {
        front: "What were some major goods traded in the Indian Ocean network?",
        back: "Spices (pepper, cinnamon, nutmeg), Chinese silk and porcelain, Indian cotton textiles, East African gold, ivory, and enslaved people, plus Arabian incense. High-value, lower-bulk goods dominated because shipping allowed larger cargoes than caravans.",
        hint: "Spices, textiles, porcelain, gold.",
      },
      {
        front: "Who was Zheng He, and what were his voyages?",
        back: "A Chinese Muslim admiral who led seven massive Ming treasure-fleet voyages (1405-1433) across the Indian Ocean to Southeast Asia, India, Arabia, and East Africa, projecting Chinese power and the tribute system before China ended them.",
        hint: "Ming treasure-fleet admiral.",
      },
      {
        front: "What is a diasporic merchant community, and why did they form?",
        back: "Communities of merchants who settled far from home in foreign ports (e.g., Arabs in East Africa, Chinese in Southeast Asia). They facilitated trade, introduced their culture and religion, and often intermarried with locals.",
        hint: "Settled foreign merchant colonies.",
      },
      {
        front: "How did Indian Ocean trade cause cultural and demographic diffusion?",
        back: "It spread religions (Islam, Buddhism, Hinduism), languages (Swahili, Arabic), and crops, and moved people. For example, Bantu migrants and Austronesian sailors settled Madagascar, leaving Southeast Asian linguistic and genetic traces.",
        hint: "Religion, language, crops, people.",
      },
      {
        front: "What is the difference between the Indian Ocean trade and the Silk Roads?",
        back: "Both connected Afro-Eurasia, but Indian Ocean trade was maritime, allowing bulkier and cheaper cargo via ships, while the Silk Roads were overland caravan routes carrying smaller, high-value luxury goods.",
        hint: "Sea bulk vs. land luxury.",
      },
      {
        front: "What was Gujarat's role in Indian Ocean trade?",
        back: "Gujarat (northwestern India) was a key commercial hub whose merchants traded cotton textiles, indigo, and other goods across the network, linking the Middle East, East Africa, and Southeast Asia.",
        hint: "Indian textile-trading hub.",
      },
      {
        front: "How did Indian Ocean trade contribute to the rise of new states?",
        back: "Control over strategic ports and the wealth from trade and tariffs enabled states like Kilwa, Malacca, and the Srivijaya empire to flourish. Taxing trade funded political power and urban growth.",
        hint: "Trade wealth funded port-states.",
      },
    ],
  },
  {
    slug: "amino-acids-proteins",
    cards: [
      {
        front: "What is the general structure of an amino acid at physiological pH?",
        back: "A central (alpha) carbon bonded to an amino group ($\\text{NH}_3^+$), a carboxyl group ($\\text{COO}^-$), a hydrogen, and a variable R-group (side chain). At pH 7 it exists as a zwitterion (both charged groups).",
        hint: "Alpha carbon + 4 groups, zwitterion.",
      },
      {
        front: "Which amino acid is achiral and which is the only one with a secondary amine, making it an imino acid?",
        back: "Glycine is achiral because its R-group is just H. Proline's side chain loops back to bond the alpha-amino nitrogen, forming a rigid ring and a secondary amine.",
        hint: "Glycine (H) and proline (ring).",
      },
      {
        front: "Name the amino acids that are nonpolar/hydrophobic and tend to bury in a protein's core.",
        back: "Glycine, alanine, valine, leucine, isoleucine, methionine, phenylalanine, tryptophan, and proline. Their nonpolar side chains avoid water and cluster in the interior.",
        hint: "Aliphatic and aromatic side chains.",
      },
      {
        front: "Which amino acids are acidic, and which are basic?",
        back: "Acidic (negatively charged at pH 7): aspartate and glutamate. Basic (positively charged): lysine, arginine, and histidine. These charged residues often sit on the protein surface.",
        hint: "Asp/Glu acidic; Lys/Arg/His basic.",
      },
      {
        front: "What is the isoelectric point (pI), and how is it estimated?",
        back: "The pI is the pH at which an amino acid carries no net charge (exists as a zwitterion). For a simple amino acid, $\\text{pI} = \\dfrac{\\text{p}K_{a1} + \\text{p}K_{a2}}{2}$ averaging the two relevant $\\text{p}K_a$ values.",
        hint: "Average the two relevant pKa values.",
      },
      {
        front: "Describe the formation and nature of a peptide bond.",
        back: "A peptide bond is an amide bond formed by a condensation (dehydration) reaction between the carboxyl group of one amino acid and the amino group of another, releasing water. It has partial double-bond character and is planar.",
        hint: "Amide bond, loses water, planar.",
      },
      {
        front: "Define the four levels of protein structure.",
        back: "Primary = amino acid sequence (peptide bonds). Secondary = local folding (alpha helices, beta sheets) via hydrogen bonds in the backbone. Tertiary = overall 3D shape from R-group interactions. Quaternary = assembly of multiple polypeptide subunits.",
        hint: "Sequence, local, 3D, subunits.",
      },
      {
        front: "What stabilizes secondary structure, and what are the two main types?",
        back: "Hydrogen bonds between backbone carbonyl (C=O) and amide (N-H) groups. The two main types are the alpha helix (coiled) and the beta-pleated sheet (extended strands side by side).",
        hint: "Backbone H-bonds: helix and sheet.",
      },
      {
        front: "List the types of interactions that stabilize tertiary structure.",
        back: "Hydrophobic interactions (core packing), hydrogen bonds, ionic/salt bridges between charged R-groups, disulfide bonds (covalent, between cysteines), and van der Waals forces. These are all side-chain (R-group) interactions.",
        hint: "Hydrophobic, H-bond, ionic, disulfide.",
      },
      {
        front: "What is a disulfide bond, and which amino acid forms it?",
        back: "A covalent S-S bond formed by oxidation between the thiol (-SH) side chains of two cysteine residues. It strongly stabilizes tertiary and quaternary structure, especially in extracellular proteins.",
        hint: "Cysteine -SH groups, covalent S-S.",
      },
      {
        front: "What is protein denaturation, and what causes it?",
        back: "The loss of a protein's higher-order (secondary, tertiary, quaternary) structure, and thus its function, while the primary sequence stays intact. Caused by heat, extreme pH, salts, or detergents that disrupt noncovalent bonds.",
        hint: "Unfolding; primary stays intact.",
      },
      {
        front: "Worked example: An amino acid has carboxyl $\\text{p}K_a = 2.0$ and amino $\\text{p}K_a = 9.5$. What is its pI, and its charge at pH 7?",
        back: "$\\text{pI} = (2.0 + 9.5)/2 = 5.75$. At pH 7 (above the pI), the molecule is net negatively charged because the higher pH deprotonates groups, leaving a net negative charge.",
        hint: "Average pKas; pH above pI = negative.",
      },
      {
        front: "Why does proline often disrupt alpha helices, and why is glycine flexible?",
        back: "Proline's ring locks its backbone angle and its nitrogen cannot donate a backbone hydrogen bond, kinking helices. Glycine's tiny H side chain gives the backbone great conformational flexibility.",
        hint: "Proline kinks; glycine bends easily.",
      },
    ],
  },
  {
    slug: "wh-industrial-revolution",
    cards: [
      {
        front: "Where and roughly when did the Industrial Revolution begin?",
        back: "It began in Great Britain in the mid-to-late 18th century (around 1760-1780) and spread to Europe, the United States, and beyond during the 19th century.",
        hint: "Britain, late 1700s.",
      },
      {
        front: "Why did the Industrial Revolution start in Britain? List several factors.",
        back: "Abundant coal and iron, agricultural improvements freeing up labor, capital from overseas trade and colonies, access to raw materials (e.g., cotton), navigable rivers and ports, a stable government, and a large workforce.",
        hint: "Coal, capital, colonies, labor.",
      },
      {
        front: "What was the Agricultural Revolution's connection to industrialization?",
        back: "Innovations like crop rotation, the seed drill, and enclosure raised food output with fewer workers. This created a surplus population that moved to cities to provide factory labor and a larger consumer market.",
        hint: "More food, freed-up labor for cities.",
      },
      {
        front: "What was the significance of the steam engine, and who improved it?",
        back: "The steam engine, greatly improved by James Watt, provided a powerful, location-independent energy source. It powered factories, mines, railroads, and steamships, freeing industry from reliance on water and wind power.",
        hint: "Watt's engine = mobile power.",
      },
      {
        front: "How did the textile industry lead early industrialization?",
        back: "Inventions like the spinning jenny, water frame, and power loom mechanized cloth production, moving it from homes into factories. Textiles, especially cotton, became the first mass-produced industrial good.",
        hint: "Spinning jenny, power loom, factories.",
      },
      {
        front: "What is the factory system, and how did it change work?",
        back: "A system concentrating production, machinery, and workers under one roof with strict schedules and division of labor. It replaced the domestic (cottage) system, imposing long hours, low wages, and rigid discipline.",
        hint: "Centralized machine production.",
      },
      {
        front: "What were the major social effects of urbanization during industrialization?",
        back: "Rapid city growth led to overcrowded slums, poor sanitation, pollution, disease, and child labor. A new urban working class emerged alongside a wealthy industrial middle class (bourgeoisie).",
        hint: "Crowded, polluted cities; new classes.",
      },
      {
        front: "What was capitalism / laissez-faire economics in this era?",
        back: "An economic system based on private ownership and free markets with minimal government interference (laissez-faire). Adam Smith's 'The Wealth of Nations' (1776) argued markets self-regulate via supply and demand.",
        hint: "Free markets, Adam Smith.",
      },
      {
        front: "What was socialism, and who were Marx and Engels?",
        back: "Socialism advocated collective or state ownership of the means of production to address industrial inequality. Karl Marx and Friedrich Engels wrote 'The Communist Manifesto' (1848), predicting a workers' revolution against the bourgeoisie.",
        hint: "Collective ownership; Marx and Engels.",
      },
      {
        front: "How did transportation change during the Industrial Revolution?",
        back: "Railroads (steam locomotives), steamships, and improved canals and roads dramatically lowered the cost and time of moving goods and people, expanding markets and integrating economies.",
        hint: "Railroads and steamships.",
      },
      {
        front: "What were labor unions, and what reforms did workers eventually win?",
        back: "Organizations of workers that used collective bargaining and strikes to demand better wages and conditions. Over time they helped secure factory acts, limits on child labor, shorter hours, and the right to organize.",
        hint: "Collective bargaining and strikes.",
      },
      {
        front: "What was the Second Industrial Revolution, and what defined it?",
        back: "A later phase (roughly 1870-1914) marked by steel, electricity, chemicals, the internal combustion engine, the telegraph/telephone, and mass production. It spread industrialization to Germany, the US, and beyond.",
        hint: "Steel, electricity, mass production.",
      },
      {
        front: "How did the Industrial Revolution connect to imperialism?",
        back: "Industrial nations sought raw materials and new markets for manufactured goods, driving colonization of Africa and Asia. Industrial military technology (steamships, repeating rifles) made conquest easier.",
        hint: "Need for materials and markets.",
      },
    ],
  },
];
