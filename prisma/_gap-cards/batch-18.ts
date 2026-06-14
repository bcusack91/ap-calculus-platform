export const batchCards: { slug: string; cards: { front: string; back: string; hint?: string }[] }[] = [
  {
    slug: "alkanes-cycloalkanes",
    cards: [
      {
        front: "What is the general molecular formula for an acyclic alkane, and for a cycloalkane with one ring?",
        back: "An acyclic (open-chain) alkane is $C_nH_{2n+2}$. A monocyclic cycloalkane is $C_nH_{2n}$, because forming each ring removes two hydrogens (one degree of unsaturation).",
        hint: "Each ring or pi bond costs two H's.",
      },
      {
        front: "What is hybridization and approximate bond angle at carbon in an alkane?",
        back: "Each carbon is $sp^3$ hybridized with tetrahedral geometry and bond angles near $109.5^\\\\circ$. All bonds are single (sigma) bonds, so alkanes are saturated.",
        hint: "Tetrahedral carbon.",
      },
      {
        front: "How do you calculate degrees of unsaturation (index of hydrogen deficiency) for $C_nH_m$?",
        back: "$\\\\text{DoU} = \\\\frac{2n + 2 - m}{2}$ for a hydrocarbon, where $n$ is the number of carbons and $m$ is the number of hydrogens. Each ring and each pi bond contributes 1. Add N's and subtract halogens as needed.",
        hint: "Compare H count to the saturated maximum.",
      },
      {
        front: "What are constitutional (structural) isomers? Give the number for butane.",
        back: "Constitutional isomers have the same molecular formula but different connectivity. $C_4H_{10}$ has 2: n-butane and isobutane (2-methylpropane).",
        hint: "Same formula, different bonding order.",
      },
      {
        front: "State the key rule for IUPAC naming the parent chain of an alkane.",
        back: "Find the longest continuous carbon chain (the parent) and number it from the end that gives substituents the lowest set of locants. List substituents alphabetically with locant prefixes.",
        hint: "Longest chain, lowest locants.",
      },
      {
        front: "What does Newman projection terminology 'staggered' versus 'eclipsed' mean for ethane?",
        back: "Looking down a C-C bond, staggered has front and back C-H bonds offset by $60^\\\\circ$ (lowest energy), while eclipsed has them aligned (highest energy due to torsional strain of about $12\\\\,\\\\text{kJ/mol}$ in ethane).",
        hint: "Dihedral angle of 60 vs 0 degrees.",
      },
      {
        front: "For butane along the C2-C3 bond, which conformation is most stable and why?",
        back: "The anti conformation (two methyl groups $180^\\\\circ$ apart, staggered) is most stable because it minimizes both torsional strain and steric (van der Waals) strain. Gauche is staggered but higher in energy; eclipsed/syn is highest.",
        hint: "Big groups far apart and staggered.",
      },
      {
        front: "Why is cyclopropane especially reactive, and what strains does it suffer?",
        back: "Cyclopropane has large angle strain (bond angles forced to $60^\\\\circ$ instead of $109.5^\\\\circ$) plus torsional strain from fully eclipsed C-H bonds, making it the most strained common ring and unusually reactive.",
        hint: "Three-membered ring, banana bonds.",
      },
      {
        front: "What is the most stable conformation of cyclohexane, and why is it strain-free?",
        back: "The chair conformation. All carbons are staggered (no torsional strain) and bond angles are near $111^\\\\circ$ (essentially no angle strain), so cyclohexane has almost zero ring strain.",
        hint: "Not the boat.",
      },
      {
        front: "In a cyclohexane chair, why do bulky substituents prefer the equatorial position?",
        back: "Equatorial substituents avoid 1,3-diaxial interactions (steric clashes with axial H's on carbons 3 and 5). Larger groups like tert-butyl strongly favor equatorial to minimize this strain.",
        hint: "Axial groups bump into axial H's.",
      },
      {
        front: "Describe the free-radical halogenation mechanism of an alkane and its three stages.",
        back: "It proceeds by initiation (X-X splits homolytically into radicals under heat/light), propagation (X radical abstracts H to form HX and an alkyl radical, which reacts with X-X), and termination (two radicals combine). It is a substitution that replaces H with halogen.",
        hint: "Initiation, propagation, termination.",
      },
      {
        front: "Why does radical bromination give more selective products than chlorination?",
        back: "Bromine radicals are less reactive and more selective, so they preferentially abstract H from the most stabilized site (3° > 2° > 1°). Chlorination is fast and less selective, giving more product mixtures.",
        hint: "Slower, choosier reagent.",
      },
      {
        front: "Combustion: write the balanced equation for complete combustion of propane.",
        back: "$C_3H_8 + 5\\\\,O_2 \\\\rightarrow 3\\\\,CO_2 + 4\\\\,H_2O$. Complete combustion of any alkane yields carbon dioxide and water and releases heat (exothermic).",
        hint: "Hydrocarbon plus oxygen.",
      },
      {
        front: "What is cis-trans (geometric) isomerism in disubstituted cycloalkanes?",
        back: "Because ring rotation is restricted, two substituents can be cis (same face of the ring) or trans (opposite faces). These are stereoisomers with different physical properties.",
        hint: "Same side vs opposite side of the ring.",
      },
    ],
  },
  {
    slug: "wh-islamic-empires",
    cards: [
      {
        front: "Who was Muhammad and when did Islam begin?",
        back: "Muhammad (c. 570-632 CE) was the Prophet of Islam who, beginning around 610 CE, received revelations recorded in the Qur'an. His hijra (migration) from Mecca to Medina in 622 CE marks year 1 of the Islamic calendar.",
        hint: "Hijra in 622.",
      },
      {
        front: "What are the Five Pillars of Islam?",
        back: "Shahada (declaration of faith), Salat (five daily prayers), Zakat (almsgiving), Sawm (fasting during Ramadan), and Hajj (pilgrimage to Mecca). They are the core religious duties of Muslims.",
        hint: "Faith, prayer, charity, fasting, pilgrimage.",
      },
      {
        front: "What caused the Sunni-Shia split in early Islam?",
        back: "It arose over succession after Muhammad. Sunnis accepted the elected caliphs (and the broader community's consensus), while Shia held that leadership belonged to Ali and Muhammad's bloodline. The split deepened after Ali's assassination and the killing of Husayn at Karbala (680 CE).",
        hint: "Disagreement over who should be caliph.",
      },
      {
        front: "What was the Rashidun Caliphate?",
        back: "The 'Rightly Guided' first four caliphs (632-661 CE): Abu Bakr, Umar, Uthman, and Ali. Under them Islam expanded rapidly out of Arabia into the Byzantine and Sasanian empires.",
        hint: "First four caliphs after Muhammad.",
      },
      {
        front: "How did the Umayyad Caliphate differ from the Abbasid Caliphate?",
        back: "The Umayyads (661-750, capital Damascus) were Arab-centric and expansion-focused, reaching Spain and India. The Abbasids (750-1258, capital Baghdad) were more cosmopolitan, incorporating Persian administration and sponsoring a golden age of scholarship.",
        hint: "Damascus vs Baghdad.",
      },
      {
        front: "What was the significance of the Battle of Tours (732 CE)?",
        back: "Frankish forces under Charles Martel halted the northward Umayyad advance into Western Europe, marking a limit to Muslim expansion in the west.",
        hint: "Charles Martel stops the advance into Gaul.",
      },
      {
        front: "What was the House of Wisdom and why does it matter?",
        back: "A major intellectual center in Abbasid Baghdad where scholars translated and built on Greek, Persian, and Indian works. It advanced mathematics (algebra), medicine, astronomy, and helped preserve classical knowledge.",
        hint: "Baghdad center of translation and learning.",
      },
      {
        front: "How were non-Muslims ('dhimmi') treated under Islamic empires?",
        back: "As 'People of the Book' (Jews, Christians), they were generally granted protection and freedom to practice their religion in exchange for paying the jizya (a head tax). This relative tolerance aided imperial stability.",
        hint: "Protected status with a special tax.",
      },
      {
        front: "How did trade strengthen Islamic empires economically?",
        back: "Control of Silk Road, Indian Ocean, and trans-Saharan routes let Muslim merchants connect Afro-Eurasia. Common language (Arabic), faith, currency, and instruments like the sakk (check) facilitated long-distance commerce.",
        hint: "Crossroads of three continents.",
      },
      {
        front: "What contributions did Islamic scholars make to mathematics and science?",
        back: "Al-Khwarizmi pioneered algebra (the word derives from al-jabr); scholars advanced trigonometry, optics (Ibn al-Haytham), and medicine (Ibn Sina's Canon of Medicine). They also transmitted Hindu-Arabic numerals and the concept of zero.",
        hint: "Algebra, optics, medicine.",
      },
      {
        front: "What was the Mongol impact on the Abbasid Caliphate?",
        back: "In 1258 CE the Mongols under Hulagu Khan sacked Baghdad, executed the last Abbasid caliph, and ended the caliphate's political power, devastating the city and its libraries.",
        hint: "1258 sack of Baghdad.",
      },
      {
        front: "Name the three major 'gunpowder empires' and their core regions.",
        back: "The Ottoman Empire (Anatolia/Balkans/Middle East), the Safavid Empire (Persia/Iran), and the Mughal Empire (South Asia). All three used gunpowder weapons to build large, centralized Islamic states from the 15th-16th centuries.",
        hint: "Ottoman, Safavid, Mughal.",
      },
      {
        front: "What was distinctive about the Safavid Empire?",
        back: "The Safavids made Twelver Shia Islam the official state religion of Persia, distinguishing them from their Sunni Ottoman and Mughal neighbors and fueling lasting Sunni-Shia rivalry.",
        hint: "Made Shia Islam the state religion of Iran.",
      },
      {
        front: "What was Akbar known for in the Mughal Empire?",
        back: "Akbar the Great (r. 1556-1605) expanded the empire and promoted religious tolerance, abolishing the jizya on non-Muslims and seeking dialogue among faiths to govern his diverse Hindu-majority population.",
        hint: "Tolerant Mughal who abolished the jizya.",
      },
    ],
  },
  {
    slug: "triangle-congruence-theorems-geo",
    cards: [
      {
        front: "What does it mean for two triangles to be congruent?",
        back: "Two triangles are congruent if all three pairs of corresponding sides and all three pairs of corresponding angles are equal, so one can be mapped onto the other by rigid motions (translations, rotations, reflections). Notation: $\\\\triangle ABC \\\\cong \\\\triangle DEF$.",
        hint: "Same size and shape.",
      },
      {
        front: "State the SSS Congruence Theorem.",
        back: "Side-Side-Side: if all three sides of one triangle are congruent to the three corresponding sides of another, the triangles are congruent. No angle information is needed.",
        hint: "All three sides match.",
      },
      {
        front: "State the SAS Congruence Theorem and the key word 'included'.",
        back: "Side-Angle-Side: if two sides and the angle between them (the included angle) of one triangle are congruent to those of another, the triangles are congruent. The angle must be the one formed by the two sides.",
        hint: "Angle sits between the two sides.",
      },
      {
        front: "State the ASA Congruence Theorem.",
        back: "Angle-Side-Angle: if two angles and the side between them (the included side) of one triangle are congruent to those of another, the triangles are congruent.",
        hint: "Side sits between the two angles.",
      },
      {
        front: "State the AAS Congruence Theorem and how it differs from ASA.",
        back: "Angle-Angle-Side: if two angles and a non-included side of one triangle match those of another, the triangles are congruent. In ASA the side is between the angles; in AAS it is not.",
        hint: "Non-included side version of ASA.",
      },
      {
        front: "State the HL Congruence Theorem and its restriction.",
        back: "Hypotenuse-Leg: if the hypotenuse and one leg of a right triangle are congruent to those of another right triangle, the triangles are congruent. It applies ONLY to right triangles.",
        hint: "Right triangles only.",
      },
      {
        front: "Why are SSA and AAA NOT valid congruence theorems?",
        back: "AAA only guarantees similar (same shape, possibly different size) triangles. SSA (the 'ambiguous case') can produce two different non-congruent triangles, so neither proves congruence.",
        hint: "AAA gives similarity; SSA is ambiguous.",
      },
      {
        front: "What does CPCTC stand for and when is it used?",
        back: "Corresponding Parts of Congruent Triangles are Congruent. After proving two triangles congruent (by SSS, SAS, ASA, AAS, or HL), you use CPCTC to conclude that any remaining pair of corresponding sides or angles is congruent.",
        hint: "Use it AFTER proving congruence.",
      },
      {
        front: "What is the Reflexive Property and why is it common in congruence proofs?",
        back: "Any segment or angle is congruent to itself ($AB \\\\cong AB$). It is used when two triangles share a common side or angle, supplying one of the needed congruent parts.",
        hint: "A shared side equals itself.",
      },
      {
        front: "Worked example: Two triangles share side $BD$. You know $AB \\\\cong CB$ and $\\\\angle ABD \\\\cong \\\\angle CBD$. Which theorem proves congruence?",
        back: "SAS. You have side $AB \\\\cong CB$, included angle $\\\\angle ABD \\\\cong \\\\angle CBD$, and shared side $BD \\\\cong BD$ by the Reflexive Property, giving Side-Angle-Side.",
        hint: "Two sides plus the angle between them.",
      },
      {
        front: "How does the Third Angles Theorem relate to congruence?",
        back: "If two angles of one triangle are congruent to two angles of another, the third angles are also congruent (since angles sum to $180^\\\\circ$). This supports AAS proofs but does not by itself prove congruence (that would be AAA).",
        hint: "Find the missing angle from 180.",
      },
      {
        front: "In a proof, what must you do before applying a congruence theorem?",
        back: "Identify and justify each pair of congruent parts (from given information, definitions like midpoint/bisector, vertical angles, or the Reflexive Property), then state which theorem (SSS, SAS, ASA, AAS, HL) those parts satisfy.",
        hint: "Mark the diagram and cite reasons first.",
      },
      {
        front: "How are vertical angles used in congruence proofs?",
        back: "When two triangles meet at a point (an X shape), the angles opposite each other are vertical angles and are congruent by the Vertical Angles Theorem, often supplying the needed angle for ASA, AAS, or SAS.",
        hint: "Opposite angles at an intersection.",
      },
      {
        front: "Common trap: a student writes $\\\\triangle ABC \\\\cong \\\\triangle DFE$ to match $\\\\triangle ABC$ to $\\\\triangle DEF$. Why is order important?",
        back: "Congruence statements must list vertices in corresponding order: $A\\\\leftrightarrow D$, $B\\\\leftrightarrow E$, $C\\\\leftrightarrow F$. Mismatched order incorrectly pairs sides/angles and invalidates CPCTC conclusions.",
        hint: "Corresponding vertices line up positionally.",
      },
    ],
  },
  {
    slug: "apush-constitution-early-republic",
    cards: [
      {
        front: "What were the main weaknesses of the Articles of Confederation?",
        back: "The national government could not tax, regulate interstate or foreign commerce, or enforce laws; there was no executive or national judiciary; and amendments required unanimous consent. This left the union weak and nearly bankrupt.",
        hint: "No power to tax or regulate trade.",
      },
      {
        front: "What was Shays's Rebellion and why was it significant?",
        back: "An armed 1786-87 uprising of indebted Massachusetts farmers protesting taxes and foreclosures. The federal government's inability to respond exposed the Articles' weakness and spurred the call for the Constitutional Convention.",
        hint: "Farmers' revolt that scared elites into reform.",
      },
      {
        front: "What was the Great (Connecticut) Compromise?",
        back: "It resolved representation disputes by creating a bicameral Congress: the House apportioned by population (favoring large states) and the Senate giving each state two seats (favoring small states).",
        hint: "Two houses balance large and small states.",
      },
      {
        front: "What was the Three-Fifths Compromise?",
        back: "An agreement that three-fifths of a state's enslaved population would count toward both representation in the House and direct taxation, increasing the political power of Southern slaveholding states.",
        hint: "Counting enslaved people for representation.",
      },
      {
        front: "Contrast Federalists and Anti-Federalists.",
        back: "Federalists supported ratifying the Constitution and a stronger central government (Hamilton, Madison, Jay). Anti-Federalists feared centralized power threatened liberty and states' rights and demanded a Bill of Rights.",
        hint: "Pro-Constitution vs fearful of central power.",
      },
      {
        front: "What were The Federalist Papers?",
        back: "A series of 85 essays by Hamilton, Madison, and Jay (under 'Publius') arguing for ratification of the Constitution. Federalist No. 10 (factions) and No. 51 (checks and balances) are especially influential.",
        hint: "Publius essays promoting ratification.",
      },
      {
        front: "Why was the Bill of Rights added, and what does it protect?",
        back: "Added in 1791 to secure ratification by satisfying Anti-Federalists, the first ten amendments protect individual liberties (speech, religion, press, assembly, due process) and reserve undelegated powers to the states and people.",
        hint: "First ten amendments, 1791.",
      },
      {
        front: "What was Hamilton's financial plan?",
        back: "As Treasury Secretary, Hamilton proposed federal assumption of state debts, a national bank, and tariffs/excise taxes to fund the government and build credit. It favored commercial and Northern interests.",
        hint: "Assumption, national bank, tariffs.",
      },
      {
        front: "What constitutional debate did the national bank trigger?",
        back: "Hamilton argued for loose construction using the 'necessary and proper' (elastic) clause; Jefferson argued for strict construction, saying the Constitution did not explicitly authorize a bank. This split foreshadowed the first party system.",
        hint: "Loose vs strict interpretation.",
      },
      {
        front: "Describe the first party system.",
        back: "Federalists (Hamilton) favored a strong central government, commerce, a national bank, and pro-British leanings. Democratic-Republicans (Jefferson, Madison) favored states' rights, agrarianism, strict construction, and pro-French leanings.",
        hint: "Hamiltonians vs Jeffersonians.",
      },
      {
        front: "What was the Whiskey Rebellion (1794) and how did Washington respond?",
        back: "Western Pennsylvania farmers resisted Hamilton's excise tax on whiskey. Washington led a large federalized militia to suppress it, demonstrating the new government's power and authority to enforce federal law.",
        hint: "Tax revolt crushed to show federal strength.",
      },
      {
        front: "What key advice did Washington give in his Farewell Address (1796)?",
        back: "He warned against permanent foreign alliances (advocating neutrality) and against the divisive dangers of political parties and sectionalism.",
        hint: "Avoid entangling alliances and factions.",
      },
      {
        front: "What were the Alien and Sedition Acts (1798) and the response to them?",
        back: "Federalist laws that lengthened naturalization, allowed deportation of 'dangerous' aliens, and criminalized criticism of the government. Jefferson and Madison responded with the Virginia and Kentucky Resolutions, asserting states could nullify unconstitutional laws.",
        hint: "Speech restrictions met by nullification theory.",
      },
      {
        front: "What was significant about Marbury v. Madison (1803)?",
        back: "Chief Justice John Marshall established judicial review, the Supreme Court's power to declare acts of Congress unconstitutional, greatly strengthening the judiciary as a coequal branch.",
        hint: "Origin of judicial review.",
      },
    ],
  },
  {
    slug: "population-dynamics",
    cards: [
      {
        front: "What is exponential population growth and its equation?",
        back: "Growth with unlimited resources, giving a J-shaped curve. $\\\\frac{dN}{dt} = rN$, where $N$ is population size, $t$ is time, and $r$ is the per-capita rate of increase. Growth accelerates as $N$ grows.",
        hint: "J-curve, no limits.",
      },
      {
        front: "What is logistic population growth and its equation?",
        back: "Growth that slows as resources become limited, giving an S-shaped curve. $\\\\frac{dN}{dt} = rN\\\\frac{(K - N)}{K}$, where $K$ is carrying capacity. Growth is fastest near $K/2$ and approaches zero as $N \\\\to K$.",
        hint: "S-curve approaching K.",
      },
      {
        front: "Define carrying capacity ($K$).",
        back: "The maximum population size an environment can sustain indefinitely given available resources (food, water, space). At $K$, birth and death rates balance and growth stops.",
        hint: "Maximum sustainable population.",
      },
      {
        front: "Contrast density-dependent and density-independent limiting factors.",
        back: "Density-dependent factors intensify as population grows (competition, predation, disease, food shortage). Density-independent factors affect populations regardless of size (natural disasters, weather, climate events).",
        hint: "Crowding-related vs not.",
      },
      {
        front: "Compare r-selected and K-selected species.",
        back: "r-selected species have high reproductive rates, small offspring, little parental care, and thrive in unstable environments (e.g., insects). K-selected species reproduce slowly, invest heavily in few offspring, and live in stable environments near $K$ (e.g., elephants).",
        hint: "Many cheap offspring vs few costly ones.",
      },
      {
        front: "What are the three types of survivorship curves?",
        back: "Type I (high survival until old age; large mammals/humans), Type II (constant death rate across ages; many birds/rodents), and Type III (high early mortality, few survive to adulthood; fish/insects).",
        hint: "I = late deaths, III = early deaths.",
      },
      {
        front: "How do you compute population growth rate from birth and death rates?",
        back: "$r = b - d$ (per capita), where $b$ is the per-capita birth rate and $d$ the per-capita death rate. Including migration: change $= (\\\\text{births} + \\\\text{immigration}) - (\\\\text{deaths} + \\\\text{emigration})$.",
        hint: "Births minus deaths.",
      },
      {
        front: "What is the rule of 70 for doubling time?",
        back: "Doubling time (in years) $\\\\approx \\\\frac{70}{\\\\text{percent growth rate}}$. A population growing at 2% per year doubles in about 35 years. Use it for quick estimates of exponential growth.",
        hint: "70 divided by the percent rate.",
      },
      {
        front: "What does an age-structure diagram tell you?",
        back: "It shows the proportion of individuals in each age group by sex. A wide base (many young) predicts rapid future growth; a uniform or narrow base predicts stable or declining populations.",
        hint: "Pyramid shape predicts future growth.",
      },
      {
        front: "What is the demographic transition model?",
        back: "A four-to-five stage model describing how populations shift from high birth and death rates (pre-industrial) to low birth and death rates (developed) as a country industrializes, often producing a temporary growth surge in middle stages.",
        hint: "Industrialization lowers birth and death rates.",
      },
      {
        front: "What happens when a population overshoots carrying capacity?",
        back: "It temporarily exceeds $K$, depletes resources, and then experiences a die-off (population crash) as death rates spike, sometimes oscillating around or falling below $K$.",
        hint: "Boom followed by crash.",
      },
      {
        front: "Define total fertility rate (TFR) and replacement-level fertility.",
        back: "TFR is the average number of children a woman has in her lifetime. Replacement-level fertility is about 2.1 in developed countries; below it, a population eventually declines without immigration.",
        hint: "Around 2.1 keeps population steady.",
      },
      {
        front: "What is a keystone species' role in population dynamics?",
        back: "A keystone species has a disproportionately large effect on community structure relative to its abundance; its removal can cause cascading changes in other populations (e.g., sea otters controlling sea urchins).",
        hint: "Outsized ecological influence.",
      },
      {
        front: "How do predator and prey populations typically interact over time?",
        back: "They cycle in linked oscillations: rising prey supports more predators, which then reduce prey, causing predators to decline, allowing prey to recover (Lotka-Volterra predator-prey cycles).",
        hint: "Linked rise-and-fall cycles.",
      },
    ],
  },
  {
    slug: "polynomial-operations-theorems-alg2",
    cards: [
      {
        front: "What is the degree of a polynomial and why does it matter?",
        back: "The degree is the highest exponent of the variable. It determines end behavior and the maximum number of real roots and turning points: a degree-$n$ polynomial has at most $n$ roots and at most $n-1$ turning points.",
        hint: "Highest power of x.",
      },
      {
        front: "How do you add or subtract polynomials?",
        back: "Combine like terms (terms with the same variable and exponent). For subtraction, distribute the negative sign to every term in the second polynomial first.",
        hint: "Combine like terms; distribute the minus.",
      },
      {
        front: "How do you multiply two binomials, and what is FOIL?",
        back: "Multiply each term of the first by each term of the second, then combine like terms. FOIL (First, Outer, Inner, Last) is a mnemonic for the four products: $(x+3)(x-2) = x^2 - 2x + 3x - 6 = x^2 + x - 6$.",
        hint: "Distribute every term to every term.",
      },
      {
        front: "State the Remainder Theorem.",
        back: "When a polynomial $P(x)$ is divided by $(x - c)$, the remainder equals $P(c)$. So evaluating $P(c)$ quickly gives the remainder without full division.",
        hint: "Plug in c to get the remainder.",
      },
      {
        front: "State the Factor Theorem.",
        back: "$(x - c)$ is a factor of $P(x)$ if and only if $P(c) = 0$. Equivalently, $c$ is a root/zero of the polynomial exactly when $(x-c)$ divides it evenly.",
        hint: "Zero remainder means it's a factor.",
      },
      {
        front: "How does synthetic division work and when can you use it?",
        back: "Synthetic division divides a polynomial by a linear factor $(x - c)$ using only the coefficients and $c$. Bring down the leading coefficient, multiply by $c$, add to the next coefficient, and repeat; the last number is the remainder.",
        hint: "Only for dividing by x minus c.",
      },
      {
        front: "What does the Rational Root Theorem tell you?",
        back: "Any rational root of a polynomial with integer coefficients has the form $\\\\frac{p}{q}$, where $p$ divides the constant term and $q$ divides the leading coefficient. It lists candidate roots to test.",
        hint: "p over q: factors of constant over leading.",
      },
      {
        front: "State the Fundamental Theorem of Algebra.",
        back: "A polynomial of degree $n \\\\geq 1$ has exactly $n$ roots in the complex numbers, counting multiplicity. So a degree-3 polynomial has exactly 3 roots (real or complex).",
        hint: "Degree n has n complex roots.",
      },
      {
        front: "What is the Complex Conjugate Root Theorem?",
        back: "If a polynomial has real coefficients and $a + bi$ is a root, then its conjugate $a - bi$ is also a root. Complex roots always come in conjugate pairs.",
        hint: "Imaginary roots come in pairs.",
      },
      {
        front: "What does Descartes' Rule of Signs determine?",
        back: "The number of positive real roots equals the number of sign changes in $P(x)$ (or less by an even number). Substituting $-x$ and counting sign changes gives the possible number of negative real roots.",
        hint: "Count sign changes for possible roots.",
      },
      {
        front: "How does multiplicity of a root affect a graph?",
        back: "A root of odd multiplicity crosses the x-axis; a root of even multiplicity touches and bounces off it. For example, $(x-2)^2$ gives a bounce at $x = 2$.",
        hint: "Even bounces, odd crosses.",
      },
      {
        front: "What special product patterns should you memorize?",
        back: "Difference of squares $a^2 - b^2 = (a-b)(a+b)$; perfect square $(a \\\\pm b)^2 = a^2 \\\\pm 2ab + b^2$; sum/difference of cubes $a^3 \\\\pm b^3 = (a \\\\pm b)(a^2 \\\\mp ab + b^2)$.",
        hint: "Squares, perfect squares, cubes.",
      },
      {
        front: "Worked example: Use the Remainder Theorem to find the remainder of $P(x)=x^3 - 4x + 1$ divided by $(x-2)$.",
        back: "Evaluate $P(2) = 2^3 - 4(2) + 1 = 8 - 8 + 1 = 1$. The remainder is $1$.",
        hint: "Substitute x = 2.",
      },
      {
        front: "How do you describe end behavior using leading coefficient and degree?",
        back: "Even degree: both ends point the same direction (up if leading coefficient positive, down if negative). Odd degree: ends point opposite directions (up-right/down-left if positive, reversed if negative).",
        hint: "Degree parity sets direction; sign sets orientation.",
      },
    ],
  },
  {
    slug: "csp-create-performance-task",
    cards: [
      {
        front: "What are the required components you must submit for the AP CSP Create Performance Task?",
        back: "A program (your code), a video demonstrating the program running, and written responses (the Personalized Project Reference and the responses to prompts). The program must be one you developed.",
        hint: "Program, video, written responses.",
      },
      {
        front: "What must your Create program video demonstrate?",
        back: "It must run for at most 1 minute, be 30 MB or less, show your program running (including input and the corresponding output), and have no narration or text annotations describing the program.",
        hint: "Under 1 minute, shows running input/output.",
      },
      {
        front: "What is a 'program purpose and function' in the written response?",
        back: "You must describe the overall purpose of the program (what problem it solves or what it does) and explain how a user interacts with it and what output results during the video demonstration.",
        hint: "What it does and how the user interacts.",
      },
      {
        front: "What does the required 'list (collection type)' component need to include?",
        back: "Your code must use a list (or other collection type) to manage a complex set of data, and you must explain how the list stores data that the program uses, showing how it makes the program easier than using many separate variables.",
        hint: "Collection storing multiple related values.",
      },
      {
        front: "What is the 'student-developed procedure' requirement?",
        back: "You must include a procedure (a named, reusable block of code) that you wrote, which takes at least one parameter that affects its functionality, and contains an algorithm with sequencing, selection, and iteration that implements your procedure.",
        hint: "Your own function with a parameter.",
      },
      {
        front: "Define an algorithm in CSP terms.",
        back: "An algorithm is a finite set of instructions that accomplishes a task. Algorithms can be combined using sequencing (in order), selection (if/else), and iteration (loops).",
        hint: "Sequencing, selection, iteration.",
      },
      {
        front: "What does the procedure's algorithm need to demonstrate for full credit?",
        back: "It must integrate mathematical and logical concepts and use sequencing, selection, AND iteration. A simple procedure with only sequencing does not earn the algorithm point.",
        hint: "Must combine order, branching, and looping.",
      },
      {
        front: "What must you explain about how your program tests or handles different cases?",
        back: "You must describe two different program inputs (calls) to the same procedure and explain the condition(s) tested and the result of each call, showing how the procedure behaves differently based on input.",
        hint: "Two distinct calls with different outcomes.",
      },
      {
        front: "What is abstraction and why is the procedure considered an abstraction?",
        back: "Abstraction means managing complexity by hiding details behind a name. A student-developed procedure abstracts a block of logic so it can be reused (called) without rewriting the code, reducing complexity.",
        hint: "Hiding detail to manage complexity.",
      },
      {
        front: "What is the difference between selection and iteration?",
        back: "Selection chooses which code runs based on a condition (if/else). Iteration repeats a block of code (loops), either a set number of times or until a condition is met.",
        hint: "Branching vs repeating.",
      },
      {
        front: "What is a major academic-integrity rule for the Create task?",
        back: "The program and written responses must be your own work; you may not use code or responses from others or AI generation in violation of policy, and any borrowed code must be clearly distinguished from your own contributions.",
        hint: "Code must be student-developed.",
      },
      {
        front: "What is a parameter versus an argument?",
        back: "A parameter is the named variable in a procedure's definition (a placeholder). An argument is the actual value passed in when the procedure is called. The required procedure must have at least one parameter used in its logic.",
        hint: "Definition placeholder vs the value passed in.",
      },
      {
        front: "What is a common reason students lose the 'list' point?",
        back: "Using a list that is not actually necessary or not used by the program's logic (e.g., declaring a list but never reading from it), or confusing a single variable with a collection. The list must store data the program meaningfully uses.",
        hint: "List must be genuinely used, not decorative.",
      },
      {
        front: "How should you reference your program code in written responses?",
        back: "Use your Personalized Project Reference (containing your procedure and list code) and clearly identify the relevant code segments (with a screenshot or label) so a reader can find the procedure, its parameter, and the list you describe.",
        hint: "Point graders to the exact code.",
      },
    ],
  },
  {
    slug: "wh-globalization-tech",
    cards: [
      {
        front: "What is globalization?",
        back: "The increasing interconnection and interdependence of the world's economies, cultures, technologies, and populations through trade, communication, migration, and the flow of capital and information.",
        hint: "World becoming more interconnected.",
      },
      {
        front: "How did the Green Revolution affect the developing world?",
        back: "From the 1940s-1970s, new high-yield crop varieties, fertilizers, pesticides, and irrigation dramatically increased food production (especially in Mexico and India), reducing famine but raising concerns about environmental damage and inequality.",
        hint: "High-yield crops boosting food supply.",
      },
      {
        front: "What role did the internet and digital technology play in globalization?",
        back: "They enabled instant global communication, e-commerce, and the rapid spread of information and culture, shrinking distances and accelerating the integration of markets, ideas, and social movements.",
        hint: "Instant worldwide communication.",
      },
      {
        front: "What are multinational corporations (MNCs) and their impact?",
        back: "Companies operating in multiple countries (e.g., for manufacturing and sales). They drive global trade and investment but raise concerns over labor exploitation, outsourcing, and reduced government control over economies.",
        hint: "Companies operating across borders.",
      },
      {
        front: "What international economic organizations promote globalization?",
        back: "The World Trade Organization (WTO) promotes free trade; the International Monetary Fund (IMF) and World Bank provide loans and stabilize economies. Critics argue their conditions can harm developing nations.",
        hint: "WTO, IMF, World Bank.",
      },
      {
        front: "What is outsourcing/offshoring and why do companies do it?",
        back: "Moving production or services to other countries (often with lower labor costs). It cuts business costs and creates jobs abroad but can lead to job losses and deindustrialization in higher-wage countries.",
        hint: "Moving jobs to cheaper labor markets.",
      },
      {
        front: "What is the 'global village' concept?",
        back: "Coined by Marshall McLuhan, it describes how electronic media and technology connect people worldwide so closely that the planet functions like a single community.",
        hint: "Technology shrinks the world to one community.",
      },
      {
        front: "How has globalization affected the environment?",
        back: "Increased industrialization, transport, and consumption have driven climate change, deforestation, and pollution, prompting global agreements like the Paris Agreement (2015) to coordinate emissions reductions.",
        hint: "Climate change and global accords.",
      },
      {
        front: "What is cultural globalization, and what is a criticism of it?",
        back: "The worldwide spread of ideas, values, and products (often Western, e.g., fast food, films, music). Critics call it cultural homogenization or 'Americanization' that can erode local traditions and identities.",
        hint: "Spread of culture; fear of homogenization.",
      },
      {
        front: "What is the digital divide?",
        back: "The gap between those with reliable access to digital technology and the internet and those without. It can deepen inequality between and within nations, limiting economic and educational opportunity.",
        hint: "Unequal access to technology.",
      },
      {
        front: "How did containerization transform global trade?",
        back: "Standardized shipping containers (introduced mid-20th century) made loading, unloading, and transferring goods far cheaper and faster, massively expanding the volume and reach of international commerce.",
        hint: "Standard boxes that cut shipping costs.",
      },
      {
        front: "What are some social movements enabled by global technology?",
        back: "Social media has fueled rapid, transnational organizing (e.g., the Arab Spring), spreading information and coordinating protests across borders, though it also spreads misinformation.",
        hint: "Hashtag activism and online organizing.",
      },
      {
        front: "What is a pandemic's relationship to globalization?",
        back: "Global travel and trade allow diseases to spread rapidly worldwide (e.g., COVID-19), demonstrating interdependence and prompting international cooperation on health, while also disrupting supply chains.",
        hint: "Interconnection speeds disease spread.",
      },
      {
        front: "What are common arguments for and against globalization?",
        back: "Supporters cite economic growth, lower prices, cultural exchange, and technology sharing. Critics cite worker exploitation, environmental harm, loss of cultural diversity, and widening inequality between rich and poor nations.",
        hint: "Growth and exchange vs inequality and harm.",
      },
    ],
  },
];
