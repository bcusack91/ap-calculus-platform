export const batchCards: { slug: string; cards: { front: string; back: string; hint?: string }[] }[] = [
  {
    slug: "mcat-physics-electricity-electrochemistry-mcat",
    cards: [
      {
        front: "Coulomb's law: state the formula and define every variable.",
        back: "$F = \\\\frac{k q_1 q_2}{r^2}$, where $F$ is the electrostatic force, $k = 8.99 \\\\times 10^9\\\\ \\\\mathrm{N\\\\cdot m^2/C^2}$, $q_1$ and $q_2$ are the charges (in coulombs), and $r$ is the separation. Like charges repel, opposite charges attract; force falls off with the square of distance.",
        hint: "Inverse-square in r, linear in each charge."
      },
      {
        front: "Define electric field $E$ from a point charge and give its formula.",
        back: "The electric field is force per unit positive test charge, $E = F/q$. For a point charge, $E = \\\\frac{kQ}{r^2}$, pointing away from positive charges and toward negative ones. Units are N/C or V/m.",
        hint: "Field lines exit + and enter -."
      },
      {
        front: "Relate electric potential energy, potential, work, and the formulas for a point charge.",
        back: "Potential energy is $U = \\\\frac{k q_1 q_2}{r}$ and potential is $V = \\\\frac{kQ}{r}$ (note: $1/r$, not $1/r^2$). Work done by the field is $W = -\\\\Delta U = q\\\\,\\\\Delta V$ for moving charge $q$ through a potential difference.",
        hint: "Energy/potential go as 1/r; field/force go as 1/r^2."
      },
      {
        front: "Define current, voltage, and resistance, then state Ohm's law.",
        back: "Current $I$ is charge flow per time ($I = Q/t$, amperes). Voltage $V$ is potential difference (volts). Resistance $R$ opposes flow (ohms). Ohm's law: $V = IR$. Use it whenever an element is ohmic.",
        hint: "V = IR ties all three together."
      },
      {
        front: "What is electrical power, and which formulas should you know?",
        back: "Power is energy per time: $P = IV$. Substituting Ohm's law gives $P = I^2 R = V^2/R$. Use $I^2R$ when current and resistance are known; use $V^2/R$ when voltage across the resistor is known. Units: watts.",
        hint: "Three equivalent forms via V = IR."
      },
      {
        front: "How do you combine resistors in series vs. parallel?",
        back: "Series: $R_{eq} = R_1 + R_2 + \\\\cdots$ (resistances add; same current through each). Parallel: $\\\\frac{1}{R_{eq}} = \\\\frac{1}{R_1} + \\\\frac{1}{R_2} + \\\\cdots$ (same voltage across each; $R_{eq}$ is less than the smallest resistor).",
        hint: "Series adds R; parallel adds 1/R."
      },
      {
        front: "How do you combine capacitors in series vs. parallel, and what is capacitance?",
        back: "Capacitance $C = Q/V$ (farads); for a parallel-plate capacitor $C = \\\\kappa \\\\varepsilon_0 A/d$. Capacitors combine oppositely to resistors: parallel adds ($C_{eq} = C_1 + C_2$); series adds reciprocals ($1/C_{eq} = 1/C_1 + 1/C_2$).",
        hint: "Capacitors are the mirror image of resistors."
      },
      {
        front: "Distinguish a galvanic (voltaic) cell from an electrolytic cell.",
        back: "A galvanic cell is spontaneous ($\\\\Delta G < 0$, $E^\\\\circ_{cell} > 0$) and converts chemical energy to electrical energy. An electrolytic cell is non-spontaneous ($\\\\Delta G > 0$, $E^\\\\circ_{cell} < 0$) and uses external electrical energy to drive a reaction.",
        hint: "Galvanic = battery; electrolytic = forced."
      },
      {
        front: "In any electrochemical cell, where do oxidation and reduction occur?",
        back: "Oxidation always occurs at the anode; reduction always occurs at the cathode (mnemonic: 'An Ox, Red Cat'). This is true for both cell types. In a galvanic cell the anode is negative; in an electrolytic cell the anode is positive.",
        hint: "An Ox / Red Cat — sign of electrode differs by cell type."
      },
      {
        front: "Write the Nernst equation and state when to use it.",
        back: "$E = E^\\\\circ - \\\\frac{RT}{nF}\\\\ln Q$, or at 25 degrees C, $E = E^\\\\circ - \\\\frac{0.0592}{n}\\\\log Q$. Here $n$ is moles of electrons transferred, $F$ is Faraday's constant, and $Q$ is the reaction quotient. Use it to find cell potential under non-standard concentrations.",
        hint: "Corrects E-standard for non-standard Q."
      },
      {
        front: "How are standard cell potential and standard free energy related?",
        back: "$\\\\Delta G^\\\\circ = -nFE^\\\\circ_{cell}$, where $n$ is moles of electrons and $F = 96{,}485\\\\ \\\\mathrm{C/mol}$. A positive $E^\\\\circ_{cell}$ gives negative $\\\\Delta G^\\\\circ$ (spontaneous). $E^\\\\circ_{cell} = E^\\\\circ_{cathode} - E^\\\\circ_{anode}$ (both as reduction potentials).",
        hint: "Sign flip via the negative nF."
      },
      {
        front: "Common trap: how do you compute $E^\\\\circ_{cell}$ from a table of reduction potentials?",
        back: "$E^\\\\circ_{cell} = E^\\\\circ_{cathode} - E^\\\\circ_{anode}$, using reduction potentials directly from the table — do NOT flip the sign of the anode value yourself, the subtraction handles it. The more positive reduction potential becomes the cathode in a spontaneous galvanic cell.",
        hint: "Cathode minus anode, no manual sign flips."
      },
      {
        front: "Worked example: Two 4-ohm resistors in parallel are in series with a 2-ohm resistor across a 12 V battery. Find total current.",
        back: "Parallel pair: $1/R = 1/4 + 1/4 = 1/2$, so $R_{par} = 2\\\\ \\\\Omega$. Total: $2 + 2 = 4\\\\ \\\\Omega$. Current: $I = V/R = 12/4 = 3\\\\ \\\\mathrm{A}$.",
        hint: "Reduce parallel first, then add series."
      },
      {
        front: "What does Faraday's law of electrolysis let you calculate, and what is the key relationship?",
        back: "It links charge passed to moles of substance deposited or consumed: $Q = It = nF \\\\cdot (\\\\text{moles})$. Use $\\\\text{moles of electrons} = It/F$, then convert to moles of metal using the half-reaction stoichiometry (e.g., $Cu^{2+} + 2e^- \\\\to Cu$ needs 2 mol electrons per mol Cu).",
        hint: "Charge in, atoms out, via n and F."
      }
    ]
  },
  {
    slug: "mcat-cars-passages-ethics-mcat",
    cards: [
      {
        front: "What is the central skill being tested by a CARS ethics/philosophy passage?",
        back: "Not prior philosophy knowledge, but the ability to track an author's argument: identifying claims, the principles they rest on, supporting reasons, and counterarguments. Every answer must be justified from the text, never from outside ethical opinions you hold.",
        hint: "Reasoning from the passage, not your own morals."
      },
      {
        front: "Distinguish a normative claim from a descriptive claim in an ethics passage.",
        back: "A descriptive claim states what is the case (a fact about the world or what people believe). A normative claim states what ought to be the case (a value or prescription). Authors of ethics passages typically defend normative claims; mixing the two up causes wrong-answer choices.",
        hint: "'Is' versus 'ought.'"
      },
      {
        front: "Contrast consequentialism (utilitarianism) with deontology as they appear in CARS passages.",
        back: "Consequentialism judges actions by their outcomes (greatest good for the greatest number). Deontology judges actions by adherence to duties or rules, regardless of outcome. When a passage contrasts them, expect questions on how each would evaluate the same scenario differently.",
        hint: "Outcomes vs. duties."
      },
      {
        front: "What is virtue ethics, and how does it differ from rule- or outcome-based theories?",
        back: "Virtue ethics focuses on the character of the moral agent — cultivating virtues like courage or honesty — rather than on rules (deontology) or consequences (consequentialism). It asks 'What would a virtuous person do?' rather than 'What rule applies?' or 'What maximizes good?'",
        hint: "Character of the agent, not the act."
      },
      {
        front: "How should you handle a question asking what the author 'most likely believes' in an ethics passage?",
        back: "Find the author's stated thesis and supporting reasoning, then pick the answer most consistent with that line of argument. Avoid extreme answers unless the author explicitly committed to an extreme position; CARS rewards the choice supported by the passage's tone and scope.",
        hint: "Match the author's argument, not the loudest claim."
      },
      {
        front: "Common trap: an answer choice that is a true ethical statement but unsupported by the passage. How do you treat it?",
        back: "Eliminate it. CARS tests reading, not whether a claim is true in the abstract. A factually or morally correct statement is still wrong if the passage does not support it. Only passage-grounded support counts.",
        hint: "True in the world is not the same as supported by the text."
      },
      {
        front: "What does it mean to identify an author's 'underlying assumption' in an ethics argument?",
        back: "It is an unstated premise the argument depends on to be valid — a belief that must be true for the conclusion to follow. Strengthen questions affirm an assumption; weaken questions undermine one. Look for the gap between stated premises and the conclusion.",
        hint: "The hidden premise the conclusion needs."
      },
      {
        front: "How do you answer a question that asks which new scenario the author would most likely 'approve' or 'condemn'?",
        back: "Apply the author's stated ethical principle to the new case as if it were a rule. Trace the logic: which choice the principle would sanction. Resist substituting your own judgment of the scenario.",
        hint: "Apply the author's principle, not your reaction."
      },
      {
        front: "What is the is-ought (naturalistic) gap, and why does it matter for ethics passages?",
        back: "It is the logical problem of deriving a prescriptive 'ought' purely from descriptive 'is' premises. CARS passages may critique an argument for committing this fallacy; recognizing it helps you spot the author's objection to an opposing view.",
        hint: "You can't get 'ought' from 'is' alone."
      },
      {
        front: "Strategy: how should tone and rhetorical signposts guide you through an ethics passage?",
        back: "Watch transition words. 'However,' 'yet,' and 'on the other hand' signal a pivot to the author's own view or a counterargument. 'Therefore' and 'thus' signal conclusions. Marking these helps you separate the author's position from views being summarized or criticized.",
        hint: "Contrast words usually precede the author's real stance."
      },
      {
        front: "Worked example: An author argues that lying is wrong even when it produces good outcomes. Which framework does this reflect?",
        back: "Deontology — the wrongness is intrinsic to the act and independent of consequences. A consequentialist would instead say a beneficial lie could be permissible. Recognizing the framework lets you predict the author's stance on related cases.",
        hint: "Wrongness independent of outcome = duty-based."
      },
      {
        front: "How do you distinguish the author's voice from cited critics or proponents within an ethics passage?",
        back: "Note attribution cues: phrases like 'critics contend,' 'some argue,' or 'according to X' flag views the author may not endorse. The author's own view often appears after a contrast word or in evaluative language ('crucially,' 'mistakenly,' 'rightly'). Don't attribute a cited view to the author.",
        hint: "Attribution phrases mark borrowed, not authorial, views."
      },
      {
        front: "Common trap: extreme or absolute language in answer choices. When is it actually correct?",
        back: "Absolute words ('always,' 'never,' 'all,' 'only') are usually wrong because passages rarely defend absolutes — but they are correct when the author explicitly states an absolute principle. Match the strength of the answer to the strength of the author's claim.",
        hint: "Absolutes are right only when the author is absolute."
      },
      {
        front: "What is a moral dilemma as framed in CARS, and what is the test-taker's job?",
        back: "A moral dilemma is a situation where competing duties or values cannot all be satisfied. Your job is not to resolve it yourself but to understand how the author frames the tension and which considerations the author privileges. Answers should reflect the author's resolution, not yours.",
        hint: "Track the author's resolution, not your own."
      }
    ]
  },
  {
    slug: "mcat-cars-passages-social-science-mcat",
    cards: [
      {
        front: "What distinguishes social science CARS passages from humanities passages in terms of structure?",
        back: "Social science passages (sociology, economics, psychology, anthropology, political science) tend to be argument- and evidence-driven, often presenting a thesis, supporting studies or data, and a counterview. Humanities passages are more interpretive and tone-heavy. Expect more 'how does this evidence function' questions in social science.",
        hint: "Evidence-and-claim structure dominates."
      },
      {
        front: "How should you read a social science passage that presents a study or empirical finding?",
        back: "Identify the claim the study is meant to support, the evidence itself, and any limitations the author notes. Distinguish correlation from causation — a frequent test point. Track whether the author endorses the finding or critiques its methodology.",
        hint: "Claim, evidence, limitation — and watch correlation vs. causation."
      },
      {
        front: "Common trap: confusing correlation with causation. How do social science passages exploit this?",
        back: "A passage may describe two variables that move together; answer choices then overstate this as one causing the other. Unless the author asserts a causal mechanism, treat the relationship as correlational. Picking a causal answer for a merely correlational claim is a classic wrong turn.",
        hint: "Moving together is not the same as one causing the other."
      },
      {
        front: "What does it mean to identify the 'function' of a paragraph in a social science passage?",
        back: "It is the role that paragraph plays in the overall argument — e.g., to introduce a competing theory, provide supporting data, raise an objection, or qualify the thesis. Function questions test structure, not detail; answer by asking 'why is this here?' rather than 'what does it say?'",
        hint: "Why the paragraph exists, not what it contains."
      },
      {
        front: "How do you handle a passage that presents two competing social theories?",
        back: "Map each theory's claim, its evidence, and how they oppose each other; note which (if either) the author favors. Many questions hinge on attributing a position to the correct theory. Keep a quick mental tag for 'Theory A says X, Theory B says Y.'",
        hint: "Tag each theory; track which the author prefers."
      },
      {
        front: "What is an author's 'attitude' or 'tone,' and how do you detect it in social science writing?",
        back: "Tone is the author's stance toward the subject — skeptical, approving, neutral, critical. Detect it through evaluative word choice ('flawed,' 'compelling,' 'overlooked'). Social science authors often adopt measured, qualified tones, so avoid answer choices implying strong emotion unless justified.",
        hint: "Evaluative adjectives reveal stance; expect measured tones."
      },
      {
        front: "Strategy: how should you approach a 'weaken the argument' question on a social science passage?",
        back: "Find the conclusion and the evidence linking to it, then choose the option that most directly undermines that link or introduces a confounding factor. The best weakener attacks the core inference, not a peripheral detail. Avoid options that are merely irrelevant or only mildly negative.",
        hint: "Break the bridge between evidence and conclusion."
      },
      {
        front: "How do you answer a 'strengthen' question for a social science claim?",
        back: "Pick the choice that adds support to the author's main inference — often by ruling out an alternative explanation or supplying a missing premise. The strongest answer reinforces the specific logical gap the argument relies on, not just any related true statement.",
        hint: "Close the logical gap or rule out alternatives."
      },
      {
        front: "Common trap: the 'too broad' or 'too narrow' main-idea choice. How do you pick the right scope?",
        back: "The correct main idea captures the whole passage without overreaching. Too-narrow choices describe only one paragraph; too-broad choices claim more than the passage covers. Test each choice against both the beginning and the end of the passage.",
        hint: "Match the answer's scope to the entire passage."
      },
      {
        front: "How do you treat jargon or technical terms defined within a social science passage?",
        back: "Use the passage's own definition, not any outside meaning you may know. Authors often redefine common words for their argument. Misapplying a textbook definition over the passage's stated one leads to wrong answers.",
        hint: "Passage definitions override outside knowledge."
      },
      {
        front: "Worked example: A passage says rising education levels coincided with lower crime, then the author adds 'though causation remains unestablished.' What does the qualifier tell you?",
        back: "The author is signaling caution — endorsing the correlation but explicitly refusing the causal claim. A question asking what the author believes should yield the correlational, not causal, answer. The qualifier is the key to tone and scope.",
        hint: "The hedge marks the author's true, limited claim."
      },
      {
        front: "How do you apply a passage's framework to a new, hypothetical situation (application questions)?",
        back: "Extract the underlying principle or pattern the author established, then map it onto the new case to predict the outcome the author's logic would imply. Treat it like applying a rule: the answer follows from the principle, not from your own social-science knowledge.",
        hint: "Generalize the principle, then apply it to the new case."
      },
      {
        front: "What role do counterarguments and concessions play, and how do words like 'admittedly' or 'granted' signal them?",
        back: "These words flag a concession — the author acknowledges an opposing point before reaffirming their own position (often after a 'but'). Recognizing the concession-then-rebuttal pattern prevents you from mistaking the conceded view for the author's thesis.",
        hint: "'Admittedly... but...' = concession then real claim."
      },
      {
        front: "Common trap: answer choices that distort a detail by adding an unstated comparison or judgment. How do you spot them?",
        back: "Watch for comparative or evaluative words ('more,' 'better,' 'primary,' 'most important') that the passage never used. If the text states two facts but never ranks them, an answer that ranks them is unsupported. Verify every comparison against the text.",
        hint: "Reject comparisons the passage never made."
      }
    ]
  },
  {
    slug: "mcat-organic-chemistry-carbonyls-mcat",
    cards: [
      {
        front: "What is a carbonyl group, and why is it electrophilic?",
        back: "A carbonyl is a carbon double-bonded to oxygen (C=O). The electronegative oxygen polarizes the bond, leaving the carbon partially positive (delta+), making it electrophilic and susceptible to nucleophilic attack. This polarity drives most carbonyl chemistry.",
        hint: "Partial positive carbon = nucleophile target."
      },
      {
        front: "Rank the relative reactivity of aldehydes vs. ketones toward nucleophilic addition, and explain why.",
        back: "Aldehydes are more reactive than ketones. Ketones have two electron-donating alkyl groups that stabilize the partial positive carbon and add steric hindrance, both reducing electrophilicity. Aldehydes have only one (plus an H), so the carbonyl carbon is more exposed and more positive.",
        hint: "Fewer alkyl groups = more reactive."
      },
      {
        front: "Describe nucleophilic addition to a carbonyl: what is the general mechanism?",
        back: "A nucleophile attacks the electrophilic carbonyl carbon, the C=O pi bond breaks and electrons move onto oxygen forming a tetrahedral alkoxide intermediate, which is then protonated to give an alcohol. This is the core mechanism for aldehyde/ketone reactions with nucleophiles.",
        hint: "Attack, collapse C=O to O-minus, protonate."
      },
      {
        front: "What is a hemiacetal, an acetal, and how do they form?",
        back: "An aldehyde/ketone plus one equivalent of alcohol (acid-catalyzed) gives a hemiacetal (an OH and an OR on the same carbon). A second alcohol equivalent, with loss of water, gives an acetal (two OR groups). Acetals are common carbonyl protecting groups, stable to base.",
        hint: "One alcohol = hemiacetal; two = acetal."
      },
      {
        front: "Why and how are acetals used as protecting groups?",
        back: "Acetals are stable under basic and nucleophilic conditions, so a reactive carbonyl can be converted to an acetal to shield it during a reaction elsewhere in the molecule, then hydrolyzed back to the carbonyl under aqueous acid. They protect aldehydes/ketones from unwanted attack.",
        hint: "Stable to base; removed by aqueous acid."
      },
      {
        front: "What is keto-enol tautomerism, and which form usually predominates?",
        back: "Tautomers are constitutional isomers that interconvert by moving a proton and a double bond. The keto form (C=O) and enol form (C=C-OH) interconvert; the keto form is usually more stable and predominant. Tautomerization is catalyzed by acid or base.",
        hint: "Keto usually wins; enol is the C=C-OH form."
      },
      {
        front: "What is the alpha carbon, and why are its hydrogens acidic?",
        back: "The alpha carbon is the carbon adjacent to a carbonyl. Its hydrogens (alpha-hydrogens, pKa around 20) are acidic because deprotonation gives an enolate stabilized by resonance with the carbonyl oxygen. This acidity underlies enolate and aldol chemistry.",
        hint: "Adjacent to C=O; deprotonation gives resonance-stabilized enolate."
      },
      {
        front: "Describe the aldol condensation in two stages.",
        back: "Stage 1 (addition): an enolate of one carbonyl attacks the carbonyl carbon of another, forming a beta-hydroxy aldehyde/ketone (the aldol). Stage 2 (condensation): heat/base eliminates water to form an alpha,beta-unsaturated carbonyl (enone). New C-C bond forms between the alpha carbon of one and the carbonyl carbon of the other.",
        hint: "Enolate attacks carbonyl; then dehydrate."
      },
      {
        front: "Rank carboxylic acid derivatives by reactivity toward nucleophilic acyl substitution.",
        back: "Acid chloride > anhydride > ester ~ carboxylic acid > amide. Reactivity tracks leaving-group ability and how well the group donates electrons into the carbonyl: chloride is the best leaving group and poorest donor; the amide nitrogen donates strongly, making amides least reactive.",
        hint: "Chloride most reactive; amide least."
      },
      {
        front: "How does nucleophilic acyl substitution differ from nucleophilic addition?",
        back: "In addition (aldehydes/ketones), the tetrahedral intermediate is protonated to an alcohol because there is no good leaving group. In acyl substitution (acid derivatives), the tetrahedral intermediate collapses, expelling a leaving group to reform a C=O, replacing one group with the nucleophile.",
        hint: "Leaving group present = substitution; absent = addition."
      },
      {
        front: "What products do strong vs. mild reducing agents give with carbonyls?",
        back: "$LiAlH_4$ (strong) reduces aldehydes, ketones, esters, and carboxylic acids to alcohols. $NaBH_4$ (mild) reduces aldehydes and ketones to alcohols but generally not esters or carboxylic acids. Both deliver hydride to the carbonyl carbon.",
        hint: "LiAlH4 reduces almost everything; NaBH4 is selective."
      },
      {
        front: "How do Grignard reagents react with carbonyls, and what is a common trap?",
        back: "A Grignard (R-MgX) acts as a carbanion nucleophile, adding R to the carbonyl carbon to form (after workup) an alcohol — extending the carbon chain. Trap: Grignards are destroyed by protic solvents and acidic protons (OH, NH, terminal alkynes), so the substrate must be aprotic.",
        hint: "Adds a carbon nucleophile; killed by acidic protons."
      },
      {
        front: "Worked example: 2-butanone reacts with CH3MgBr, then aqueous acid. What is the product?",
        back: "The methyl carbanion adds to the ketone carbonyl carbon, giving after protonation a tertiary alcohol: 2-methyl-2-butanol. Grignard plus a ketone always yields a tertiary alcohol (two R groups from the ketone plus the incoming R).",
        hint: "Ketone + Grignard = tertiary alcohol."
      },
      {
        front: "What is the Wittig reaction, and what bond does it form?",
        back: "A phosphorus ylide (R2C=PPh3) reacts with an aldehyde or ketone to form an alkene (C=C), replacing the carbonyl oxygen with the ylide carbon. It is the standard way to convert a carbonyl into a specific alkene; the byproduct is triphenylphosphine oxide.",
        hint: "Carbonyl C=O becomes a C=C alkene."
      }
    ]
  },
  {
    slug: "mcat-microbiology-bacteria-mcat",
    cards: [
      {
        front: "What features define a prokaryotic (bacterial) cell, distinguishing it from eukaryotes?",
        back: "Bacteria lack a membrane-bound nucleus and membrane-bound organelles; their DNA is a single circular chromosome in the nucleoid. They have 70S ribosomes (vs. 80S in eukaryotes) and usually a peptidoglycan cell wall. They reproduce asexually by binary fission.",
        hint: "No nucleus, 70S ribosomes, circular DNA."
      },
      {
        front: "Compare Gram-positive and Gram-negative cell walls.",
        back: "Gram-positive bacteria have a thick peptidoglycan layer that retains crystal violet, staining purple. Gram-negative bacteria have a thin peptidoglycan layer plus an outer membrane containing lipopolysaccharide (LPS); they lose crystal violet and stain pink/red with safranin.",
        hint: "Thick wall = purple; thin wall + outer membrane = pink."
      },
      {
        front: "What is the Gram stain procedure, in order?",
        back: "1) Crystal violet (primary stain), 2) iodine (mordant, fixes the dye), 3) alcohol/acetone (decolorizer — the critical differentiating step), 4) safranin (counterstain). Gram-positive cells keep the violet; Gram-negative cells decolorize and take up safranin.",
        hint: "Violet, iodine, decolorize, safranin."
      },
      {
        front: "What is endotoxin, where is it found, and how does it differ from exotoxin?",
        back: "Endotoxin is the lipid A portion of LPS in the outer membrane of Gram-negative bacteria; it is released on cell lysis and triggers fever/septic shock. Exotoxins are secreted proteins (from Gram-positive or Gram-negative bacteria) that are typically more specific and potent.",
        hint: "Endotoxin = LPS lipid A; exotoxin = secreted protein."
      },
      {
        front: "Define the three bacterial shapes and give the term for chains and clusters.",
        back: "Cocci are spherical, bacilli are rod-shaped, and spirilla/spirochetes are spiral. Arrangement prefixes: 'strepto-' for chains (streptococci) and 'staphylo-' for clusters (staphylococci). Shape and arrangement aid identification.",
        hint: "Cocci/bacilli/spiral; strepto = chain, staphylo = cluster."
      },
      {
        front: "Classify bacteria by oxygen requirement.",
        back: "Obligate aerobes require oxygen; obligate anaerobes are killed by it; facultative anaerobes use oxygen if present but can ferment without it; aerotolerant anaerobes ignore oxygen and ferment regardless; microaerophiles need low oxygen levels. This reflects which metabolic pathways and protective enzymes they have.",
        hint: "Obligate/facultative/aerotolerant/microaerophilic."
      },
      {
        front: "What are the three mechanisms of horizontal gene transfer in bacteria?",
        back: "Conjugation (direct transfer via a pilus, often of a plasmid), transformation (uptake of free DNA from the environment), and transduction (DNA transferred by a bacteriophage). All three spread genes — including antibiotic resistance — between bacteria without reproduction.",
        hint: "Conjugation, transformation, transduction."
      },
      {
        front: "What is a plasmid, and why is it important clinically?",
        back: "A plasmid is a small, circular, extrachromosomal DNA molecule that replicates independently. Plasmids often carry antibiotic-resistance genes or virulence factors and can be transferred between bacteria by conjugation, driving the spread of resistance.",
        hint: "Extra circular DNA; spreads resistance."
      },
      {
        front: "What is an endospore and why does it matter?",
        back: "An endospore is a dormant, highly resistant structure formed by some Gram-positive bacteria (e.g., Bacillus, Clostridium) under stress. It withstands heat, desiccation, and chemicals, allowing survival for long periods, and can germinate into an active cell — important for sterilization and disease.",
        hint: "Dormant survival structure; resists heat and chemicals."
      },
      {
        front: "Describe the phases of the bacterial growth curve.",
        back: "Lag phase (adaptation, little division), log/exponential phase (maximal division), stationary phase (growth equals death as nutrients deplete and waste accumulates), and death/decline phase (death exceeds division). Antibiotic susceptibility is often highest during the active log phase.",
        hint: "Lag, log, stationary, death."
      },
      {
        front: "How does penicillin work, and why is it selectively toxic?",
        back: "Penicillin (a beta-lactam) inhibits transpeptidase (penicillin-binding proteins), blocking cross-linking of peptidoglycan, so the cell wall weakens and the bacterium lyses. It is selectively toxic because human cells lack peptidoglycan cell walls.",
        hint: "Blocks peptidoglycan cross-linking; humans lack that wall."
      },
      {
        front: "What is the operon model, using the lac operon as the example?",
        back: "An operon is a cluster of genes under one promoter controlled together. In the inducible lac operon, a repressor blocks transcription until lactose (allolactose) binds and removes it. It is an example of negative inducible control — transcription is off by default, turned on by the inducer.",
        hint: "lac = inducible; repressor off when inducer present."
      },
      {
        front: "Distinguish autotrophs from heterotrophs and phototrophs from chemotrophs in bacteria.",
        back: "Carbon source: autotrophs fix CO2; heterotrophs use organic carbon. Energy source: phototrophs use light; chemotrophs use chemical bonds. Combining gives four types, e.g., photoautotrophs (cyanobacteria) and chemoheterotrophs (most pathogens).",
        hint: "Carbon source vs. energy source — two independent axes."
      },
      {
        front: "What is the difference between bactericidal and bacteriostatic antibiotics?",
        back: "Bactericidal agents kill bacteria directly (e.g., penicillin). Bacteriostatic agents inhibit growth and reproduction without directly killing, relying on the host immune system to clear the bacteria (e.g., tetracyclines). The distinction affects treatment choice in immunocompromised patients.",
        hint: "Cidal kills; static stalls."
      }
    ]
  },
  {
    slug: "mcat-microbiology-mcat",
    cards: [
      {
        front: "Name the major categories of microorganisms tested on the MCAT.",
        back: "Bacteria (prokaryotes), archaea (prokaryotes), fungi, protists (protozoa, algae), and viruses (acellular). Viruses and prions are not technically alive — viruses lack independent metabolism and require a host. The MCAT emphasizes bacteria and viruses most.",
        hint: "Bacteria, archaea, fungi, protists, viruses (+ prions)."
      },
      {
        front: "What is a virus, and what are its essential components?",
        back: "A virus is an acellular infectious particle consisting of a nucleic acid genome (DNA or RNA, never both) enclosed in a protein capsid, sometimes with a lipid envelope. It is an obligate intracellular parasite that must hijack a host cell's machinery to replicate.",
        hint: "Genome + capsid (+ envelope); needs a host."
      },
      {
        front: "Compare the lytic and lysogenic cycles of a bacteriophage.",
        back: "In the lytic cycle the phage immediately replicates and lyses the host, releasing new virions. In the lysogenic cycle the phage integrates its genome (as a prophage) into the host chromosome, replicating silently with the host until a trigger switches it to the lytic cycle.",
        hint: "Lytic kills fast; lysogenic hides as a prophage."
      },
      {
        front: "What is a retrovirus, and what enzyme defines it?",
        back: "A retrovirus is an enveloped RNA virus (e.g., HIV) that uses reverse transcriptase to make DNA from its RNA genome; integrase then inserts this DNA into the host genome. This reverses the usual DNA-to-RNA flow of information.",
        hint: "RNA virus; reverse transcriptase makes DNA."
      },
      {
        front: "How do positive-sense and negative-sense RNA viruses differ?",
        back: "A (+)-sense RNA genome can be directly translated by host ribosomes (it acts like mRNA). A (-)-sense RNA genome must first be transcribed into (+)-sense mRNA by a virus-carried RNA-dependent RNA polymerase before translation. This affects how quickly each can replicate after entry.",
        hint: "(+) reads as mRNA directly; (-) needs transcription first."
      },
      {
        front: "What is a prion, and how does it cause disease?",
        back: "A prion is an infectious misfolded protein (no nucleic acid). It propagates by inducing normal cellular proteins to adopt the misfolded conformation, forming aggregates that damage tissue (e.g., Creutzfeldt-Jakob disease). It is resistant to standard sterilization.",
        hint: "Misfolded protein, no genetic material."
      },
      {
        front: "Distinguish prokaryotes from eukaryotes at the cellular level.",
        back: "Prokaryotes (bacteria, archaea) lack a membrane-bound nucleus and organelles, have circular DNA and 70S ribosomes. Eukaryotes (fungi, protists, plants, animals) have a true nucleus, membrane-bound organelles, linear chromosomes, and 80S ribosomes.",
        hint: "Nucleus and organelles present = eukaryote."
      },
      {
        front: "What general features characterize fungi relevant to the MCAT?",
        back: "Fungi are eukaryotic heterotrophs with chitin cell walls that absorb nutrients (often as decomposers). They can be unicellular (yeasts) or multicellular (molds with hyphae), and many reproduce via spores. Some are human pathogens (e.g., Candida).",
        hint: "Eukaryotic, chitin walls, absorptive heterotrophs."
      },
      {
        front: "Define normal flora (microbiota) and its role.",
        back: "Normal flora are the resident microorganisms (mostly bacteria) on body surfaces like the gut and skin. They aid digestion and vitamin synthesis and protect against pathogens by competitive exclusion. Disrupting them (e.g., with antibiotics) can allow overgrowth of harmful microbes.",
        hint: "Resident microbes that protect by competition."
      },
      {
        front: "What is the difference between an obligate and a facultative intracellular pathogen?",
        back: "An obligate intracellular pathogen can only replicate inside a host cell (all viruses, some bacteria like Chlamydia). A facultative intracellular pathogen can live and replicate both inside and outside host cells. This affects how the immune system targets them.",
        hint: "Obligate must be inside; facultative can do either."
      },
      {
        front: "How do viruses enter and exit host cells (general steps of the viral life cycle)?",
        back: "Attachment (to specific host receptors), penetration/entry, uncoating (release of genome), replication and synthesis of viral components, assembly, and release (by lysis or budding). Enveloped viruses typically acquire their envelope by budding through host membranes.",
        hint: "Attach, enter, uncoat, replicate, assemble, release."
      },
      {
        front: "Worked example: A virus's genome is RNA that ribosomes translate immediately upon entry without any enzyme. What type is it?",
        back: "A positive-sense (+) single-stranded RNA virus — its genome functions directly as mRNA, so no transcription step is needed before translation. (A negative-sense virus would require its own RNA polymerase first.)",
        hint: "Translated immediately = positive-sense RNA."
      },
      {
        front: "What is antigenic drift vs. antigenic shift in viruses like influenza?",
        back: "Antigenic drift is gradual accumulation of small point mutations in surface proteins, causing seasonal variation. Antigenic shift is an abrupt, major change from reassortment of genome segments between strains, which can cause pandemics because the population has little immunity.",
        hint: "Drift = slow mutations; shift = sudden reassortment."
      },
      {
        front: "How do antibiotics, antivirals, and the immune system differ in targeting microbes?",
        back: "Antibiotics target bacterial-specific structures (cell wall, 70S ribosomes) and do not affect viruses. Antivirals target viral enzymes or entry steps. The host adaptive immune system uses antibodies and T cells to recognize specific antigens of any pathogen — the basis of vaccination.",
        hint: "Antibiotics hit bacteria only; antivirals hit viruses."
      }
    ]
  },
  {
    slug: "mcat-cars-strategy-elimination-mcat",
    cards: [
      {
        front: "What is the core principle of process-of-elimination in CARS?",
        back: "Because CARS answers must be supported by the passage, the most reliable path is often to eliminate the three wrong choices rather than fall in love with one 'right' choice. Each wrong answer has a concrete flaw; finding it is more objective than judging which answer 'feels best.'",
        hint: "Disprove wrongs; the survivor is the answer."
      },
      {
        front: "Name the most common categories of CARS wrong answers.",
        back: "Out-of-scope (introduces info not in the passage), opposite (contradicts the passage), distortion (twists a passage idea), extreme (too strong/absolute), and faulty-use-of-detail (a true detail that does not answer the question asked). Learning these categories speeds elimination.",
        hint: "Out-of-scope, opposite, distortion, extreme, faulty detail."
      },
      {
        front: "How do you spot and eliminate an 'extreme' answer choice?",
        back: "Look for absolute words — 'always,' 'never,' 'all,' 'none,' 'only,' 'impossible.' These overstate the passage's usually-qualified claims, so they are typically wrong. Keep them only if the author explicitly used equally strong language.",
        hint: "Absolute language usually overstates; eliminate."
      },
      {
        front: "What is an 'out-of-scope' answer, and how do you confirm one?",
        back: "It raises an idea, comparison, or topic the passage never addresses. Confirm by trying to point to passage text that supports it — if you cannot locate support, eliminate it. Outside knowledge that is true but unmentioned still makes a choice out of scope.",
        hint: "No textual support = out of scope."
      },
      {
        front: "How do you catch a 'distortion' answer choice?",
        back: "A distortion takes a real passage idea and subtly alters it — changing a qualifier, reversing a relationship, swapping which view belongs to whom, or exaggerating degree. Compare the choice word-by-word against the passage; the small twist is the giveaway.",
        hint: "Right idea, subtly wrong wording."
      },
      {
        front: "Strategy: what should you do when two answers seem equally correct?",
        back: "Find the specific word or phrase that makes one choice slightly unsupported, too strong, or out of scope. CARS answers are decided on fine distinctions; the better answer is the one fully and precisely backed by the text, while the other usually has one flawed element.",
        hint: "Hunt for the single disqualifying word."
      },
      {
        front: "Why is predicting an answer before reading the choices a powerful elimination aid?",
        back: "Forming your own answer from the passage first gives you a benchmark, so you can quickly reject choices that don't match and avoid being lured by plausible-sounding traps. It keeps you anchored to the text rather than to the test-writers' distractors.",
        hint: "Predict first, then match, then eliminate mismatches."
      },
      {
        front: "How should you handle 'EXCEPT,' 'LEAST,' or 'NOT' questions during elimination?",
        back: "Invert your process: the three 'wrong-sounding' supported choices are the ones to eliminate, and the correct answer is the unsupported or contradicting one. Mark the question stem so you don't reflexively pick a supported choice, which is the classic error here.",
        hint: "On EXCEPT/NOT, you keep the odd one out."
      },
      {
        front: "What is the 'faulty use of detail' trap and how do you avoid it?",
        back: "It is a choice that quotes or paraphrases a true detail from the passage but doesn't actually answer the question asked. Re-read the question stem and confirm the choice responds to it — a true statement is still wrong if it's irrelevant to the question.",
        hint: "True but doesn't answer the question = eliminate."
      },
      {
        front: "How do you treat an 'opposite' answer choice?",
        back: "An opposite choice states the reverse of what the passage says — often by negating a relationship or flipping the author's stance. These are tempting because they use passage vocabulary. Check directionality (cause/effect, more/less, support/oppose) to catch them.",
        hint: "Same words, reversed meaning."
      },
      {
        front: "Worked example: The passage says a policy 'may modestly reduce' inequality. Which answer is the trap?",
        back: "A choice claiming the policy 'eliminates' or 'sharply reduces' inequality is an extreme/distortion trap — it overstates 'may modestly reduce.' The supported answer keeps the hedge ('may,' 'modestly'). Always match the strength of the qualifier.",
        hint: "Overstated certainty/magnitude is the trap."
      },
      {
        front: "What role does timing play in elimination strategy, and how do you manage difficult questions?",
        back: "CARS is time-pressured (about 10 minutes per passage). When stuck between choices, eliminate what you can, make your best supported guess, flag it, and move on — there is no penalty for guessing. Lingering costs points on later, easier questions.",
        hint: "Guess supported, flag, move on; no wrong-answer penalty."
      },
      {
        front: "How do you use the question stem itself to drive elimination?",
        back: "Identify the question type (main idea, inference, function, strengthen/weaken, application) before evaluating choices, because each type has its own acceptable answer form. For an inference question, eliminate choices that merely restate the passage rather than follow logically from it.",
        hint: "Match answer form to the question type."
      },
      {
        front: "After eliminating, how do you verify your final choice is correct rather than just 'last standing'?",
        back: "Return to the passage and find the specific line(s) that support the surviving choice; if you can cite the text, you are confident. If you can't, re-examine whether you eliminated too quickly. Verification against the passage is the safeguard against confident wrong answers.",
        hint: "Cite the supporting line before committing."
      }
    ]
  },
  {
    slug: "mcat-molecular-biology-dna-replication-mcat",
    cards: [
      {
        front: "What does it mean that DNA replication is semiconservative?",
        back: "Each new double helix consists of one original (parental) strand and one newly synthesized strand. The two strands of the parent separate and each serves as a template, so every daughter molecule conserves half of the original — demonstrated by the Meselson-Stahl experiment.",
        hint: "Each daughter = one old + one new strand."
      },
      {
        front: "In which direction does DNA polymerase synthesize, and why does this create a leading and lagging strand?",
        back: "DNA polymerase synthesizes only 5' to 3', adding nucleotides to the 3'-OH end. Because the two template strands are antiparallel, one new strand (leading) is made continuously toward the fork, while the other (lagging) is made discontinuously in fragments away from the fork.",
        hint: "Only 5'-to-3' synthesis; antiparallel templates force two modes."
      },
      {
        front: "What are Okazaki fragments and on which strand are they found?",
        back: "Okazaki fragments are the short DNA segments synthesized discontinuously on the lagging strand. Each begins with an RNA primer and is later joined to the next by DNA ligase after the primers are removed and replaced with DNA.",
        hint: "Short lagging-strand pieces joined by ligase."
      },
      {
        front: "What is the origin of replication and the replication fork?",
        back: "The origin of replication is the specific sequence where replication begins; the DNA unwinds there to form a replication bubble. The replication fork is the Y-shaped region where the two strands separate and new synthesis occurs; bacteria have one origin, eukaryotes have many.",
        hint: "Origin = start point; fork = the unwinding Y."
      },
      {
        front: "What does helicase do, and what stabilizes the separated strands?",
        back: "Helicase unwinds the double helix at the fork by breaking hydrogen bonds between base pairs. Single-strand binding (SSB) proteins then coat the exposed single strands to prevent them from re-annealing or forming secondary structures.",
        hint: "Helicase unzips; SSB proteins keep strands apart."
      },
      {
        front: "Why is an RNA primer needed, and which enzyme makes it?",
        back: "DNA polymerase cannot start a strand de novo; it can only extend an existing 3'-OH. Primase (an RNA polymerase) synthesizes a short RNA primer providing that 3'-OH, after which DNA polymerase extends it. Primers are later removed and replaced with DNA.",
        hint: "Primase lays down RNA so polymerase has a starting 3'-OH."
      },
      {
        front: "What problem does topoisomerase (DNA gyrase) solve during replication?",
        back: "As helicase unwinds DNA, supercoiling and torsional strain build up ahead of the fork. Topoisomerase relieves this by cutting one or both strands, allowing them to unwind, then resealing them. DNA gyrase is the bacterial type and a target of quinolone antibiotics.",
        hint: "Relieves supercoiling tension ahead of the fork."
      },
      {
        front: "What is the role of DNA ligase?",
        back: "DNA ligase seals the nicks between adjacent DNA fragments by forming phosphodiester bonds — most importantly joining Okazaki fragments on the lagging strand into a continuous strand. It also seals the gap after primer removal and replacement.",
        hint: "Seals nicks; joins Okazaki fragments."
      },
      {
        front: "How does proofreading work during replication, and which activity performs it?",
        back: "DNA polymerase has 3' to 5' exonuclease activity that removes a mismatched nucleotide immediately after it is incorporated, then re-inserts the correct one. This proofreading greatly lowers the error rate during synthesis.",
        hint: "3'-to-5' exonuclease removes the wrong base just added."
      },
      {
        front: "What is the end-replication problem, and how does telomerase address it?",
        back: "Linear chromosomes shorten each round because removing the final RNA primer on the lagging strand leaves a gap that cannot be filled (no upstream 3'-OH). Telomerase, a reverse transcriptase with its own RNA template, extends the 3' end with repetitive telomere sequences to offset this loss.",
        hint: "Telomeres shorten; telomerase rebuilds the 3' ends."
      },
      {
        front: "Compare key bacterial replication enzymes: DNA Pol III vs. DNA Pol I.",
        back: "In bacteria, DNA Pol III is the main replicative enzyme that synthesizes the bulk of new DNA. DNA Pol I removes the RNA primers (via 5' to 3' exonuclease activity) and replaces them with DNA. Ligase then seals the remaining nicks.",
        hint: "Pol III builds; Pol I swaps primer RNA for DNA."
      },
      {
        front: "Worked example: A template strand reads 3'-TACGGT-5'. What is the new strand sequence and its polarity?",
        back: "Pairing A-T and G-C antiparallel gives a new strand 5'-ATGCCA-3'. The new strand runs antiparallel to the template, and DNA polymerase built it 5' to 3' (left to right as written here).",
        hint: "Complement antiparallel: A-T, G-C."
      },
      {
        front: "Why is replication described as both rapid and high-fidelity, and what gives that fidelity?",
        back: "Multiple origins (in eukaryotes) and fast polymerases give speed; fidelity comes from correct base pairing, polymerase proofreading (3'-to-5' exonuclease), and post-replication mismatch repair. Together these reduce errors to roughly one per billion bases.",
        hint: "Base pairing + proofreading + mismatch repair."
      },
      {
        front: "What is mismatch repair, and when does it act relative to replication?",
        back: "Mismatch repair is a post-replication system that scans newly synthesized DNA for base-pair mismatches that escaped proofreading, excises the error on the new strand, and resynthesizes it. In bacteria, methylation marks distinguish the older (template) strand from the new one.",
        hint: "Fixes mismatches after synthesis; targets the new strand."
      }
    ]
  }
];
