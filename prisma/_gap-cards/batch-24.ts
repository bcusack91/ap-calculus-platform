export const batchCards: { slug: string; cards: { front: string; back: string; hint?: string }[] }[] = [
  {
    slug: "mcat-organic-chemistry-sn1-sn2-e1-e2-mcat",
    cards: [
      {
        front: "What distinguishes an SN1 from an SN2 mechanism in terms of molecularity and steps?",
        back: "SN1 is unimolecular (rate depends only on substrate) and proceeds in two steps through a carbocation intermediate. SN2 is bimolecular (rate depends on substrate and nucleophile) and occurs in one concerted step.",
        hint: "1 = one species in rate law",
      },
      {
        front: "What is the rate law for an SN1 vs an SN2 reaction?",
        back: "SN1: $rate = k[\\\\text{substrate}]$ (first order overall). SN2: $rate = k[\\\\text{substrate}][\\\\text{nucleophile}]$ (second order overall).",
      },
      {
        front: "How does substrate substitution (1deg, 2deg, 3deg) favor SN1 vs SN2?",
        back: "SN1 is favored by tertiary substrates (stable carbocation) and never occurs at primary. SN2 is favored by methyl/primary substrates (low steric hindrance) and is blocked at tertiary. Secondary can do either.",
        hint: "SN1 likes crowded; SN2 likes open",
      },
      {
        front: "What stereochemical outcome does SN2 produce at the reacting carbon?",
        back: "Inversion of configuration (Walden inversion) because the nucleophile attacks from the backside, 180deg opposite the leaving group, flipping the substituents like an umbrella in the wind.",
        hint: "Backside attack",
      },
      {
        front: "What stereochemistry results from SN1 at a chiral center?",
        back: "Racemization (a mix of retention and inversion) because the planar carbocation intermediate can be attacked from either face. There is often a slight excess of inversion due to ion pairing.",
      },
      {
        front: "How do E1 and E2 mechanisms differ in steps and rate law?",
        back: "E1 is two-step (carbocation forms first, then base removes a beta-proton); $rate = k[\\\\text{substrate}]$. E2 is concerted (base removes proton as leaving group departs); $rate = k[\\\\text{substrate}][\\\\text{base}]$.",
      },
      {
        front: "What is Zaitsev's rule and which mechanisms follow it?",
        back: "Zaitsev's rule states the more substituted (more stable) alkene is the major elimination product. Both E1 and E2 typically follow it, though bulky bases (e.g., t-butoxide) give the Hofmann, less-substituted product.",
        hint: "More substituted = more stable",
      },
      {
        front: "What geometric requirement must E2 satisfy?",
        back: "Anti-periplanar geometry: the beta-hydrogen and the leaving group must be 180deg apart (anti) in the same plane so the developing pi orbitals overlap. This is why E2 stereochemistry on rings requires trans-diaxial arrangement.",
        hint: "H and LG anti, 180deg",
      },
      {
        front: "How do nucleophile/base strength and bulk steer the four mechanisms?",
        back: "Strong nucleophile + weak base favors SN2; strong bulky base favors E2; weak nucleophile/base (often the solvent) favors SN1/E1. Strong base/nucleophile generally beats the unimolecular pathways.",
      },
      {
        front: "How does solvent polarity affect SN1/E1 vs SN2/E2?",
        back: "Polar protic solvents (water, alcohols) stabilize carbocations and favor SN1/E1. Polar aprotic solvents (DMSO, acetone, DMF) leave the nucleophile 'naked' and reactive, favoring SN2/E2.",
        hint: "Protic = SN1; aprotic = SN2",
      },
      {
        front: "How does temperature shift the competition between substitution and elimination?",
        back: "Higher temperature favors elimination (E1/E2) because elimination has a higher activation entropy (it increases the number of molecules) and is entropically favored as $T$ rises in $\\\\Delta G = \\\\Delta H - T\\\\Delta S$.",
        hint: "Heat -> elimination",
      },
      {
        front: "What makes a good leaving group, and why does it matter for all four mechanisms?",
        back: "A good leaving group is a weak base that stabilizes negative charge (e.g., I-, Br-, tosylate, water). All four mechanisms require C-LG bond cleavage, so a better leaving group speeds every pathway; -OH and -NH2 are poor and must be protonated/activated first.",
      },
      {
        front: "Worked example: 2-bromo-2-methylpropane (t-butyl bromide) in aqueous ethanol with no added nucleophile. Which mechanism dominates?",
        back: "SN1 (with competing E1). The tertiary substrate stabilizes a carbocation, the polar protic solvent assists ionization, and water/ethanol are weak nucleophiles, so the slow ionization step controls the rate.",
      },
      {
        front: "Worked example: 1-bromobutane (primary) reacted with NaCN in DMSO. Predict the mechanism and product.",
        back: "SN2, giving pentanenitrile (the cyanide displaces bromide with inversion). The primary substrate, strong/small nucleophile (CN-), and polar aprotic solvent all favor a fast concerted backside attack.",
      },
    ],
  },
  {
    slug: "mcat-microbiology-viruses-mcat",
    cards: [
      {
        front: "Why are viruses considered acellular obligate intracellular parasites?",
        back: "They lack cells, ribosomes, and their own metabolic machinery, so they cannot reproduce independently. They must hijack a host cell's ribosomes and enzymes to replicate, making them obligate intracellular parasites.",
        hint: "No metabolism of their own",
      },
      {
        front: "What are the essential structural components of a virion?",
        back: "A nucleic acid genome (DNA or RNA, never both) enclosed in a protein coat called a capsid (made of capsomeres). Some viruses also have a lipid envelope derived from host membrane plus glycoprotein spikes.",
      },
      {
        front: "Compare the lytic and lysogenic cycles of a bacteriophage.",
        back: "In the lytic cycle the phage immediately replicates and lyses (bursts) the host. In the lysogenic cycle the phage DNA integrates into the host genome as a prophage, replicating passively until a stressor triggers the lytic cycle.",
        hint: "Lytic = kill now; lysogenic = hide",
      },
      {
        front: "What is the Baltimore classification based on, and name the seven groups conceptually.",
        back: "It classifies viruses by genome type and the route to mRNA: dsDNA, ssDNA, dsRNA, (+)ssRNA, (-)ssRNA, ssRNA-RT (retroviruses), and dsDNA-RT. The key idea is how each genome reaches functional (+)sense mRNA.",
      },
      {
        front: "How does a (+) sense ssRNA virus differ functionally from a (-) sense ssRNA virus?",
        back: "A (+)sense RNA genome can be translated directly by host ribosomes (it acts like mRNA). A (-)sense RNA genome must first be transcribed to (+)sense by a virus-packaged RNA-dependent RNA polymerase before translation.",
        hint: "(+) = ready to read",
      },
      {
        front: "What enzyme defines retroviruses, and what does it do?",
        back: "Reverse transcriptase, an RNA-dependent DNA polymerase that converts the (+)ssRNA genome into dsDNA. Integrase then inserts that cDNA into the host genome as a provirus (e.g., HIV).",
        hint: "RNA -> DNA",
      },
      {
        front: "List the general steps of the animal virus life cycle.",
        back: "Attachment (to a specific host receptor), penetration/entry, uncoating, replication of genome and synthesis of proteins, assembly, and release (by lysis or budding). Enveloped viruses typically bud and acquire their envelope on exit.",
      },
      {
        front: "What is a prion and how does it differ from a virus?",
        back: "A prion is an infectious misfolded protein (PrP-Sc) with no nucleic acid; it propagates by converting normal proteins to the misfolded form, causing diseases like Creutzfeldt-Jakob. Viruses, by contrast, always carry a nucleic acid genome.",
        hint: "Infectious protein, no genes",
      },
      {
        front: "What is a viroid?",
        back: "A small, naked, circular single-stranded RNA molecule with no protein capsid that infects plants. It is the smallest known infectious agent and causes disease by interfering with host gene regulation.",
      },
      {
        front: "Why do RNA viruses mutate and evolve faster than DNA viruses?",
        back: "RNA-dependent RNA polymerases (and reverse transcriptase) lack 3'->5' proofreading exonuclease activity, so replication errors accumulate. High mutation rates drive antigenic drift and rapid resistance (e.g., influenza, HIV).",
        hint: "No proofreading",
      },
      {
        front: "Distinguish antigenic drift from antigenic shift in influenza.",
        back: "Drift is gradual point mutation in surface proteins (HA/NA) causing seasonal variation. Shift is an abrupt reassortment of genome segments between strains, creating a novel subtype that can cause pandemics.",
        hint: "Drift = small; shift = big",
      },
      {
        front: "What is a temperate phage and what is a prophage?",
        back: "A temperate phage can enter the lysogenic cycle rather than immediately lysing the host. A prophage is the phage genome integrated into the bacterial chromosome, replicated along with host DNA until induction.",
      },
      {
        front: "How does an enveloped virus typically exit a host cell, and why is the envelope a vulnerability?",
        back: "By budding, wrapping itself in host plasma membrane. The lipid envelope makes the virus susceptible to drying, detergents, and disinfectants, so enveloped viruses are generally less stable in the environment than naked ones.",
      },
      {
        front: "Why are antibiotics ineffective against viral infections?",
        back: "Antibiotics target bacterial structures and processes (cell wall synthesis, bacterial ribosomes, etc.) that viruses lack. Because viruses use host machinery, they require antiviral drugs that block virus-specific steps like reverse transcription or protease activity.",
      },
    ],
  },
  {
    slug: "mcat-physics-mechanics-fluids-waves-mcat",
    cards: [
      {
        front: "State Newton's second law and define each variable.",
        back: "$\\\\vec{F}_{net} = m\\\\vec{a}$, where $\\\\vec{F}_{net}$ is the net force (N), $m$ is mass (kg), and $\\\\vec{a}$ is acceleration (m/s^2). Use it to relate forces to motion; the net force is the vector sum of all forces.",
        hint: "Sum of forces = ma",
      },
      {
        front: "What is the work-energy theorem?",
        back: "$W_{net} = \\\\Delta KE = \\\\tfrac{1}{2}mv_f^2 - \\\\tfrac{1}{2}mv_i^2$. The net work done on an object equals its change in kinetic energy, where $m$ is mass and $v$ is speed. Use it to find final speed from force over distance.",
      },
      {
        front: "Write the kinematic equation linking velocity, acceleration, and displacement (no time).",
        back: "$v_f^2 = v_i^2 + 2a\\\\Delta x$, where $v_f$/$v_i$ are final/initial velocities, $a$ is constant acceleration, and $\\\\Delta x$ is displacement. Use it when time is unknown.",
        hint: "v-squared form",
      },
      {
        front: "Define density and the continuity equation for fluids.",
        back: "Density $\\\\rho = m/V$ (mass per volume). Continuity: $A_1 v_1 = A_2 v_2$ for incompressible flow, where $A$ is cross-sectional area and $v$ is flow speed. Narrower pipe means faster flow (constant volume flow rate $Q$).",
        hint: "Same Q through every cross-section",
      },
      {
        front: "State Bernoulli's equation and name each term.",
        back: "$P + \\\\tfrac{1}{2}\\\\rho v^2 + \\\\rho g h = \\\\text{constant}$ along a streamline, where $P$ is static pressure, $\\\\tfrac{1}{2}\\\\rho v^2$ is dynamic pressure, and $\\\\rho g h$ is gravitational term. Higher fluid speed corresponds to lower pressure.",
        hint: "Energy per volume conserved",
      },
      {
        front: "State Archimedes' principle and the buoyant force formula.",
        back: "The buoyant force equals the weight of fluid displaced: $F_b = \\\\rho_{fluid} V_{displaced} g$, where $\\\\rho_{fluid}$ is fluid density, $V_{displaced}$ is the submerged volume, and $g$ is gravity. An object floats when $F_b$ equals its weight.",
        hint: "Weight of displaced fluid",
      },
      {
        front: "What is the hydrostatic (gauge) pressure at depth $h$ in a fluid?",
        back: "$P = \\\\rho g h$ (gauge), or $P = P_0 + \\\\rho g h$ for absolute pressure, where $\\\\rho$ is fluid density, $g$ is gravity, $h$ is depth, and $P_0$ is surface pressure. Pressure depends only on depth, not container shape.",
      },
      {
        front: "How does Pascal's principle apply to a hydraulic lift?",
        back: "Pressure applied to a confined fluid is transmitted undiminished: $P_1 = P_2$, so $F_1/A_1 = F_2/A_2$. A small force on a small piston produces a large force on a large piston, trading distance for force.",
        hint: "Same pressure, different areas",
      },
      {
        front: "Give the wave speed relationship and define the variables.",
        back: "$v = f\\\\lambda$, where $v$ is wave speed (m/s), $f$ is frequency (Hz), and $\\\\lambda$ is wavelength (m). For a given medium $v$ is fixed, so higher frequency means shorter wavelength.",
        hint: "Speed = frequency times wavelength",
      },
      {
        front: "What conditions produce a standing wave on a string fixed at both ends?",
        back: "Resonance occurs when the string length holds an integer number of half-wavelengths: $L = n\\\\lambda/2$, so $f_n = nv/(2L)$ for $n = 1, 2, 3...$. Nodes sit at the fixed ends; antinodes are points of maximum displacement.",
      },
      {
        front: "Distinguish constructive from destructive interference in terms of path difference.",
        back: "Constructive interference occurs when waves are in phase (path difference of $n\\\\lambda$), amplifying amplitude. Destructive occurs when out of phase by half a wavelength (path difference of $(n+\\\\tfrac{1}{2})\\\\lambda$), canceling amplitude.",
      },
      {
        front: "What is the qualitative Doppler effect for sound?",
        back: "An approaching source raises the observed frequency (shorter wavelength); a receding source lowers it. The same applies to a moving observer: motion toward the source increases perceived frequency.",
        hint: "Approach = higher pitch",
      },
      {
        front: "Worked example: water flows at 2 m/s through a pipe of area 0.1 m^2. What is the speed in a constricted section of area 0.04 m^2?",
        back: "Using continuity $A_1 v_1 = A_2 v_2$: $v_2 = (0.1)(2)/0.04 = 5$ m/s. The fluid speeds up as the pipe narrows.",
      },
      {
        front: "Worked example: a block of volume $1\\\\times10^{-3}$ m^3 floats fully submerged at neutral buoyancy in water ($\\\\rho = 1000$ kg/m^3). What is its mass?",
        back: "At neutral buoyancy weight equals buoyant force, so $m = \\\\rho_{fluid} V = 1000 \\\\times 1\\\\times10^{-3} = 1$ kg. Its average density equals that of water.",
      },
    ],
  },
  {
    slug: "mcat-cars-strategy-mcat",
    cards: [
      {
        front: "What does CARS stand for and what knowledge does it test?",
        back: "Critical Analysis and Reasoning Skills. It tests reading comprehension and reasoning using only the passage; no outside content knowledge is required or allowed. Every correct answer is justified by the text.",
        hint: "No outside facts",
      },
      {
        front: "What is the basic timing budget for the CARS section?",
        back: "Roughly 9 passages and 53 questions in 90 minutes, about 10 minutes per passage (read plus answer). Budget around 3-4 minutes to read and 6-7 minutes for the 5-7 questions.",
      },
      {
        front: "What is the single most important rule for choosing CARS answers?",
        back: "The answer must be supported by the passage, not by what you already believe or know. Eliminate any choice that requires outside facts or that the text does not back up, even if it is true in the real world.",
        hint: "Stay in the passage",
      },
      {
        front: "How should you identify the main idea (thesis) of a CARS passage?",
        back: "Look for the author's central claim or argument, often signaled by the conclusion, contrast words ('but,' 'however,' 'yet'), or the final paragraph. Summarize the passage in one sentence in your own words after reading.",
      },
      {
        front: "Why is tracking the author's tone and opinion essential?",
        back: "Many CARS questions hinge on the author's attitude (approving, skeptical, ambivalent). Note evaluative language and qualifiers; recognizing whether the author endorses or critiques an idea lets you predict answers and reject opposite-tone choices.",
        hint: "Watch the adjectives",
      },
      {
        front: "What is the best general approach to reading a CARS passage for speed and retention?",
        back: "Read actively for structure, not memorization: note how each paragraph functions (claim, evidence, counterpoint, conclusion) and the relationships between ideas. Avoid highlighting everything; track the argument's logic instead.",
      },
      {
        front: "How do you handle a passage on an unfamiliar or dense topic?",
        back: "Do not panic or slow to a crawl. Focus on the argument's structure and the author's stance rather than every detail; CARS rewards understanding relationships, and difficult vocabulary is usually clarified by context.",
      },
      {
        front: "What is process of elimination and why is it powerful in CARS?",
        back: "Because answers are about degree and support, eliminating three flawed choices is often easier than proving one perfect choice. Cross off options that are too extreme, out of scope, opposite in tone, or unsupported.",
        hint: "Remove the wrong, not just pick the right",
      },
      {
        front: "What are common CARS wrong-answer traps?",
        back: "Extreme language ('always,' 'never'), out-of-scope ideas, distortions of the author's claim, half-right/half-wrong choices, and true statements that simply do not answer the question asked.",
        hint: "Extreme, distorted, out of scope",
      },
      {
        front: "How should you treat answer choices with absolute words like 'all,' 'must,' or 'only'?",
        back: "Scrutinize them, since absolute claims are easy to disprove with a single counterexample and the passage rarely supports them. Moderate, qualified choices ('may,' 'some,' 'often') are more frequently correct, though not automatically.",
      },
      {
        front: "Should you read the questions before or after the passage?",
        back: "Most experts recommend reading the passage first to grasp the argument, then the questions, because previewing questions can fragment comprehension. Whatever method you choose, practice it consistently to build a reliable routine.",
      },
      {
        front: "What is the most effective way to improve CARS performance over time?",
        back: "Deliberate review: after each practice passage, analyze why every wrong answer is wrong and every right answer is right, and diagnose your error patterns. Consistent, untimed-then-timed practice with deep review beats passive reading.",
        hint: "Review > volume",
      },
      {
        front: "How do you avoid running out of time on the last passages?",
        back: "Pace by the clock with per-passage checkpoints, never sink excessive time into one question (flag and move on), and guess on anything left over since there is no penalty for wrong answers.",
      },
    ],
  },
  {
    slug: "mcat-organic-chemistry-mcat",
    cards: [
      {
        front: "What is the difference between constitutional isomers, enantiomers, and diastereomers?",
        back: "Constitutional isomers have different connectivity. Enantiomers are non-superimposable mirror images (opposite at every chiral center). Diastereomers are stereoisomers that are not mirror images (differ at some, not all, chiral centers).",
        hint: "Connectivity vs. arrangement",
      },
      {
        front: "How do you assign R or S configuration to a chiral center?",
        back: "Rank the four substituents by Cahn-Ingold-Prelog priority (higher atomic number first). With the lowest priority pointing away, R is clockwise 1->2->3 and S is counterclockwise. Reverse the call if the lowest priority points toward you.",
        hint: "CIP priorities, lowest in back",
      },
      {
        front: "What functional groups should you instantly recognize: order carboxylic acid derivatives by reactivity.",
        back: "Acid chloride > anhydride > ester ~ carboxylic acid > amide, in decreasing reactivity toward nucleophilic acyl substitution. Better leaving groups (Cl-) and less electron donation make the carbonyl more reactive.",
      },
      {
        front: "What is the general mechanism of nucleophilic acyl substitution?",
        back: "A nucleophile attacks the carbonyl carbon forming a tetrahedral intermediate, which then collapses, expelling the leaving group to reform the C=O. It converts one carboxylic-acid derivative into another (e.g., acid chloride to ester).",
      },
      {
        front: "What is keto-enol tautomerism, and which form usually dominates?",
        back: "Tautomers are constitutional isomers interconverting by moving a proton and a double bond between the keto (C=O) and enol (C=C-OH) forms. The keto form normally dominates because the C=O bond is stronger than C=C.",
        hint: "Proton shift; keto favored",
      },
      {
        front: "Distinguish an SN1/SN2 substitution from oxidation and reduction in organic chemistry.",
        back: "Oxidation increases C-O bonds or decreases C-H bonds (alcohol -> aldehyde -> acid); reduction does the reverse (adds H or removes O). Substitution swaps one group for another without a net change in oxidation state of the carbon.",
      },
      {
        front: "How do you interpret a key IR absorption: name three diagnostic stretches.",
        back: "Broad ~3300 cm^-1 = O-H (alcohol/acid); sharp strong ~1700 cm^-1 = C=O (carbonyl); ~2200 cm^-1 = C triple bond N or C triple bond C. The carbonyl region is the most exam-tested fingerprint.",
        hint: "1700 = carbonyl",
      },
      {
        front: "In 1H NMR, what do chemical shift, integration, and splitting each tell you?",
        back: "Chemical shift indicates electronic environment (deshielded protons near electronegative atoms appear downfield). Integration gives the relative number of protons. Splitting (n+1 rule) reveals the number of neighboring nonequivalent protons.",
        hint: "Shift, count, neighbors",
      },
      {
        front: "What is a nucleophilic addition to a carbonyl, and what does a Grignard reagent do?",
        back: "A nucleophile adds across the C=O to form an alkoxide (then alcohol on workup). A Grignard (R-MgX) is a strong carbon nucleophile that adds to aldehydes/ketones to form alcohols, building a new C-C bond.",
      },
      {
        front: "What makes a compound aromatic (Huckel's rule)?",
        back: "It must be cyclic, planar, fully conjugated, and contain $4n+2$ pi electrons (n = 0, 1, 2...). Benzene has 6 pi electrons (n=1). Aromaticity confers unusual stability and characteristic NMR deshielding.",
        hint: "4n+2 pi electrons",
      },
      {
        front: "How do electron-donating vs. electron-withdrawing groups direct electrophilic aromatic substitution?",
        back: "Activating, electron-donating groups (e.g., -OH, -NH2, alkyl) are ortho/para directors and speed the reaction. Deactivating, electron-withdrawing groups (e.g., -NO2, -C=O) are meta directors and slow it (halogens are the deactivating o/p exception).",
        hint: "EDG = o/p; EWG = meta",
      },
      {
        front: "What is the purpose of a protecting group, with an example?",
        back: "It temporarily masks a reactive functional group so a reaction can occur elsewhere, then is removed. For example, an acetal protects a ketone/aldehyde during a Grignard reaction, preventing the carbonyl from reacting.",
      },
      {
        front: "Worked example: identify the product of oxidizing a primary alcohol with PCC vs. with chromic acid (Jones).",
        back: "PCC (a mild oxidant) stops at the aldehyde. Chromic acid (strong, aqueous) oxidizes the primary alcohol all the way to the carboxylic acid. Secondary alcohols give ketones with either reagent.",
      },
      {
        front: "Worked example: how do you separate a carboxylic acid from a neutral organic compound using extraction?",
        back: "Add aqueous NaHCO3 or NaOH: the acid is deprotonated to a water-soluble carboxylate salt and moves to the aqueous layer, while the neutral compound stays in the organic layer. Reacidifying the aqueous layer recovers the acid.",
        hint: "Acid-base extraction",
      },
    ],
  },
  {
    slug: "mcat-cars-reasoning-mcat",
    cards: [
      {
        front: "What are the three CARS question category groups?",
        back: "Foundations of Comprehension (understanding what the text says), Reasoning Within the Text (integrating the argument's parts), and Reasoning Beyond the Text (applying or extending ideas to new situations).",
        hint: "Comprehend, reason within, reason beyond",
      },
      {
        front: "What is the difference between an argument's premise and its conclusion?",
        back: "A premise is a supporting reason or evidence; the conclusion is the claim the premises are meant to establish. Identify the conclusion by asking what the author wants you to accept, then find the support beneath it.",
        hint: "Conclusion = main claim",
      },
      {
        front: "How do you answer a 'strengthen' or 'weaken' question?",
        back: "First pinpoint the author's conclusion and the assumption linking it to the evidence. A strengthener supports that assumption or adds confirming evidence; a weakener attacks the assumption or introduces a contradicting fact.",
      },
      {
        front: "What is an unstated assumption, and why does it matter?",
        back: "It is an unspoken premise the argument needs to hold. Recognizing the gap between evidence and conclusion lets you answer assumption, strengthen, weaken, and flaw questions, since the right answer often targets that hidden link.",
        hint: "The missing link",
      },
      {
        front: "How should you handle an inference question?",
        back: "Choose what MUST be true given the passage, not what could be true or what you would guess. A valid inference is a small logical step directly supported by the text, never a sweeping leap beyond it.",
        hint: "Must be true, minimal step",
      },
      {
        front: "What distinguishes a 'main idea' question from a 'detail' question?",
        back: "Main idea questions ask for the overall thesis or primary purpose; detail questions ask about a specific claim in one part of the passage. For main idea, beware choices that are true but too narrow to capture the whole argument.",
      },
      {
        front: "What is an analogy or 'apply the author's reasoning' question testing?",
        back: "It tests whether you understand the structure of an argument well enough to recognize the same pattern in a new context. Abstract the author's logic, then find the answer choice whose situation mirrors that logic, ignoring surface topic.",
        hint: "Match the structure, not the topic",
      },
      {
        front: "How do you evaluate a 'most likely to agree/disagree' question?",
        back: "Use the author's demonstrated tone and stated positions to predict their attitude toward the new claim. Reject choices that conflict with the author's established view or that the passage gives no basis to judge.",
      },
      {
        front: "What is a logical flaw or fallacy, and name two to watch for.",
        back: "A flaw is a defect in reasoning that makes a conclusion unjustified. Common ones: correlation mistaken for causation, and overgeneralization (drawing a broad conclusion from limited evidence). Spotting them helps on weaken/flaw questions.",
        hint: "e.g., correlation != causation",
      },
      {
        front: "Why must you watch scope in answer choices?",
        back: "Correct answers stay within the boundaries of what the passage addresses. Out-of-scope choices bring in unrelated topics, and overly broad or overly narrow scopes both make a choice wrong even if it sounds reasonable.",
        hint: "Too broad or too narrow = wrong",
      },
      {
        front: "How do you treat 'EXCEPT,' 'NOT,' and 'LEAST' questions?",
        back: "These reverse the task: you are looking for the one choice that is false, unsupported, or weakest. Read the stem carefully and consider negating each option so you do not accidentally pick a correct-sounding but inverted answer.",
      },
      {
        front: "What does it mean that CARS reasoning answers are about the 'best' choice, not the 'perfect' one?",
        back: "Several choices may be partly defensible, but you select the option most fully and directly supported by the passage. Comparing the relative strength of choices, rather than seeking flawlessness, is key to reasoning questions.",
      },
      {
        front: "Worked example: an author argues a policy failed because crime rose after it. What assumption underlies this, and how would you weaken it?",
        back: "The assumption is that the policy caused the rise (rather than coincidence or another factor). You weaken it by showing crime rose for an independent reason or was already rising before the policy, breaking the causal link.",
      },
    ],
  },
  {
    slug: "mcat-lab-methods-mcat",
    cards: [
      {
        front: "What does gel electrophoresis separate molecules by, and how do they migrate?",
        back: "It separates nucleic acids or proteins by size (and charge). Driven by an electric field, negatively charged molecules migrate toward the positive anode; smaller molecules move faster through the gel matrix, so they travel farther.",
        hint: "Smaller = farther; toward anode",
      },
      {
        front: "What does SDS do in SDS-PAGE protein electrophoresis?",
        back: "Sodium dodecyl sulfate denatures proteins and coats them with uniform negative charge proportional to length, so separation depends almost entirely on molecular weight rather than native charge or shape.",
        hint: "Equalizes charge, denatures",
      },
      {
        front: "How does the polymerase chain reaction (PCR) amplify DNA, naming the three steps?",
        back: "PCR exponentially copies a target DNA sequence by cycling: denaturation (~95degC, strands separate), annealing (~55degC, primers bind), and extension (~72degC, Taq polymerase synthesizes new strands). Each cycle roughly doubles the DNA.",
        hint: "Denature, anneal, extend",
      },
      {
        front: "What is the principle of the Western blot?",
        back: "Proteins are separated by SDS-PAGE, transferred to a membrane, and detected with a specific primary antibody followed by a labeled secondary antibody. It confirms the presence and size of a particular protein.",
        hint: "Antibody detects a protein",
      },
      {
        front: "Contrast Southern, Northern, and Western blots by their target molecule.",
        back: "Southern detects DNA, Northern detects RNA (both use labeled nucleic-acid probes), and Western detects protein (using antibodies). Mnemonic: 'SNoW DRoP' pairs S-N-W with DNA-RNA-Protein.",
        hint: "SNoW DRoP",
      },
      {
        front: "What does an ELISA measure and how?",
        back: "An enzyme-linked immunosorbent assay detects and quantifies a specific antigen or antibody. An antibody linked to an enzyme produces a colorimetric signal whose intensity is proportional to the amount of target present.",
        hint: "Antibody + enzyme = color signal",
      },
      {
        front: "What does chromatography separate by, and how do column vs. TLC differ?",
        back: "Chromatography separates by differential affinity for a stationary vs. mobile phase. In column chromatography compounds elute over time; in thin-layer chromatography (TLC) they travel up a plate, with less polar compounds moving farther on silica.",
        hint: "Stationary vs. mobile phase",
      },
      {
        front: "How does Beer's law relate absorbance to concentration in spectrophotometry?",
        back: "$A = \\\\varepsilon b c$, where $A$ is absorbance, $\\\\varepsilon$ is the molar absorptivity, $b$ is path length (cm), and $c$ is concentration (M). Absorbance is directly proportional to concentration, so it can quantify a solute.",
        hint: "A = epsilon * b * c",
      },
      {
        front: "What does mass spectrometry measure, and what is the x-axis?",
        back: "It ionizes molecules, then separates the ions by their mass-to-charge ratio ($m/z$, the x-axis), giving molecular weight and fragmentation pattern. The tallest peak (base peak) and molecular ion peak help identify the compound.",
        hint: "m/z separation",
      },
      {
        front: "What is the principle of centrifugation and what does density-gradient centrifugation accomplish?",
        back: "Centrifugation uses centrifugal force to sediment particles by mass and density; denser/larger particles pellet faster. Density-gradient centrifugation separates components by floating each at the layer matching its buoyant density.",
        hint: "Spin to separate by density",
      },
      {
        front: "How does X-ray crystallography determine molecular structure?",
        back: "A crystallized molecule diffracts X-rays into a pattern; the diffraction is mathematically reconstructed into an electron-density map that reveals 3-D atomic positions. It is the standard for high-resolution protein structures.",
      },
      {
        front: "What is the difference between accuracy and precision in measurement?",
        back: "Accuracy is closeness to the true value; precision is reproducibility (closeness of repeated measurements to each other). A method can be precise but inaccurate (consistent but systematically off), so both must be evaluated.",
        hint: "True value vs. repeatability",
      },
      {
        front: "What distinguishes a positive control from a negative control?",
        back: "A positive control is expected to produce a known effect, confirming the assay works. A negative control lacks the test variable and should show no effect, confirming the result is not due to background or contamination.",
      },
      {
        front: "Worked example: in an experiment, what is the role of the independent vs. dependent variable?",
        back: "The independent variable is the one the experimenter deliberately changes (the presumed cause); the dependent variable is what is measured in response (the effect). Controlled variables are held constant to isolate the relationship.",
      },
    ],
  },
  {
    slug: "mcat-cars-passages-mcat",
    cards: [
      {
        front: "What subject areas do CARS passages draw from?",
        back: "The humanities (e.g., philosophy, ethics, literature, art, history, culture) and the social sciences (e.g., psychology, sociology, economics, political science). No natural-science passages appear, and no outside content is needed.",
        hint: "Humanities + social sciences",
      },
      {
        front: "How long is a typical CARS passage and how many questions accompany it?",
        back: "Each passage is roughly 500-600 words and is followed by about 5-7 questions. There are 9 passages total across the 90-minute, 53-question section.",
      },
      {
        front: "How should you map the structure of a CARS passage as you read?",
        back: "Note the function of each paragraph: where the author introduces a claim, presents evidence, raises a counterargument, or concludes. Tracking this 'skeleton' lets you quickly locate support for detail and structure questions.",
        hint: "Function of each paragraph",
      },
      {
        front: "What is the difference between a passage's main idea and its primary purpose?",
        back: "The main idea is what the passage says (its central thesis); the primary purpose is why the author wrote it (to argue, critique, compare, inform, or persuade). Some questions ask for one, some for the other.",
      },
      {
        front: "How do you handle a passage that presents multiple competing viewpoints?",
        back: "Distinguish each viewpoint from the author's own stance. Track who holds which position and note where the author agrees, disagrees, or stays neutral, since questions often test whether you can separate the author's voice from cited views.",
        hint: "Whose opinion is this?",
      },
      {
        front: "What should you do with a dense, abstract philosophy passage?",
        back: "Slow down only enough to grasp the argument's logic, paraphrasing each difficult sentence in plain language. Focus on the relationships between ideas rather than memorizing terminology, since questions test reasoning, not jargon.",
      },
      {
        front: "How do transition and signal words help you read CARS passages?",
        back: "Contrast words ('however,' 'but,' 'although') flag shifts and often the author's true position; continuation words ('moreover,' 'furthermore') extend a point; conclusion words ('therefore,' 'thus') flag the takeaway. They map the argument's flow.",
        hint: "Signposts of the argument",
      },
      {
        front: "Why is the author's attitude so important when reading the passage itself?",
        back: "The author's tone (critical, sympathetic, skeptical, neutral) colors interpretation of nearly every claim. Marking evaluative or qualifying language as you read primes you to answer tone and 'author would agree' questions accurately.",
      },
      {
        front: "What is a good strategy when a passage feels boring or your focus drifts?",
        back: "Engage actively by predicting where the argument is heading, summarizing each paragraph in a few words, and asking what point the author is building toward. Active reading prevents passive rereading and lost time.",
      },
      {
        front: "How do you decide where to spend extra reading time within a passage?",
        back: "Invest attention in topic sentences, conclusions, shifts marked by contrast words, and the author's evaluative statements; skim long lists of examples or supporting details, which you can return to if a question requires them.",
      },
      {
        front: "What is the relationship between a passage's tone shifts and likely question targets?",
        back: "Points where the author pivots (introducing a 'but' or a concession) are common question targets because they reveal the argument's nuance. Flagging these turns helps you anticipate where the test will probe your comprehension.",
        hint: "Pivots get tested",
      },
      {
        front: "Worked example: a passage praises a theory for two paragraphs, then says 'Yet this view overlooks...' How do you read the author's true position?",
        back: "The 'Yet' signals the author's actual stance is critical: the praise was setup for the critique that follows. The author most likely partially disagrees, valuing the theory's strengths but rejecting it for the overlooked flaw.",
      },
      {
        front: "How can you preview the structure of an unfamiliar passage in the first 15 seconds?",
        back: "Read the first sentence of each paragraph and the final sentence of the passage to grasp the topic, the arc, and the conclusion. This orientation makes the detailed read faster and the argument easier to hold in memory.",
      },
    ],
  },
];
