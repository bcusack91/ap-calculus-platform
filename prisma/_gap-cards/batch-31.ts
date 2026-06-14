export const batchCards: { slug: string; cards: { front: string; back: string; hint?: string }[] }[] = [
  {
    slug: "mcat-general-chemistry-stoichiometry-mcat",
    cards: [
      {
        front: "What is a mole, and what is Avogadro's number?",
        back: "A mole is the amount of substance containing as many entities as there are atoms in 12 g of carbon-12. Avogadro's number is $6.022 \\\\times 10^{23}$ entities per mole, used to convert between particle count and moles.",
        hint: "Counting unit for atoms/molecules.",
      },
      {
        front: "How do you convert between grams and moles?",
        back: "Use moles $= \\\\frac{\\\\text{mass (g)}}{\\\\text{molar mass (g/mol)}}$. Molar mass is the sum of atomic masses of all atoms in the formula. Multiply moles by molar mass to go back to grams.",
        hint: "Divide mass by molar mass.",
      },
      {
        front: "Define empirical formula vs. molecular formula.",
        back: "The empirical formula is the smallest whole-number ratio of atoms (e.g., $CH_2O$). The molecular formula is the actual number of atoms (e.g., $C_6H_{12}O_6$) and is a whole-number multiple of the empirical formula.",
        hint: "Simplest ratio vs. true count.",
      },
      {
        front: "How do you find a molecular formula from an empirical formula?",
        back: "Compute $n = \\\\frac{\\\\text{molecular molar mass}}{\\\\text{empirical formula mass}}$, then multiply every subscript in the empirical formula by $n$.",
        hint: "n = MW / empirical mass.",
      },
      {
        front: "What is the limiting reagent and how do you identify it?",
        back: "The limiting reagent is fully consumed first and caps how much product forms. Divide each reactant's moles by its stoichiometric coefficient; the smallest ratio is the limiting reagent.",
        hint: "moles ÷ coefficient, take the minimum.",
      },
      {
        front: "Define percent yield.",
        back: "Percent yield $= \\\\frac{\\\\text{actual yield}}{\\\\text{theoretical yield}} \\\\times 100\\\\%$. Theoretical yield is the maximum product predicted from the limiting reagent; actual yield is what is experimentally obtained.",
        hint: "(actual / theoretical) × 100.",
      },
      {
        front: "How do you balance a combustion reaction of a hydrocarbon?",
        back: "Hydrocarbon + $O_2 \\\\rightarrow CO_2 + H_2O$. Balance C first (set $CO_2$), then H (set $H_2O$), then balance O last using $O_2$. Use fractional $O_2$ if needed, then multiply through.",
        hint: "C, then H, then O last.",
      },
      {
        front: "What is percent composition by mass of an element in a compound?",
        back: "Percent by mass $= \\\\frac{\\\\text{mass of element in 1 mol}}{\\\\text{molar mass of compound}} \\\\times 100\\\\%$. Use the subscript times the element's atomic mass for the numerator.",
        hint: "Element mass / total molar mass.",
      },
      {
        front: "State the law of conservation of mass and its stoichiometric consequence.",
        back: "Mass is neither created nor destroyed in a chemical reaction; total mass of reactants equals total mass of products. This is why chemical equations must be balanced for atoms of each element.",
        hint: "Atoms in = atoms out.",
      },
      {
        front: "How is molarity used in solution stoichiometry?",
        back: "Molarity $M = \\\\frac{\\\\text{moles solute}}{\\\\text{liters solution}}$. Moles $= M \\\\times V$. For dilution, $M_1V_1 = M_2V_2$, where the subscripts are initial and final concentration and volume.",
        hint: "M = mol/L; dilution M1V1 = M2V2.",
      },
      {
        front: "Worked example: How many grams of $H_2O$ form from 4.0 g of $H_2$ reacting fully with excess $O_2$?",
        back: "$2H_2 + O_2 \\\\rightarrow 2H_2O$. 4.0 g $H_2 = 2.0$ mol. The mole ratio $H_2$:$H_2O$ is 1:1, so 2.0 mol $H_2O$ forms. Mass $= 2.0 \\\\times 18 = 36$ g.",
        hint: "Convert to mol, apply ratio, convert back.",
      },
      {
        front: "Common trap: why can't you use mass ratios directly from coefficients?",
        back: "Stoichiometric coefficients give MOLE ratios, not mass ratios. You must convert mass to moles (divide by molar mass) before applying coefficients, then convert product moles back to mass.",
        hint: "Coefficients = moles, never grams.",
      },
      {
        front: "How do you compute theoretical yield once the limiting reagent is found?",
        back: "Take moles of limiting reagent, multiply by the mole ratio (product coefficient / reactant coefficient) to get product moles, then multiply by the product's molar mass.",
        hint: "Limiting mol × ratio × product molar mass.",
      },
      {
        front: "What is the relationship between density and molar mass for solution stoichiometry?",
        back: "Density $= \\\\frac{\\\\text{mass}}{\\\\text{volume}}$ converts a solution's volume to mass. Combined with mass percent, it lets you find grams of solute, then moles via molar mass for concentration calculations.",
        hint: "Density bridges volume and mass.",
      },
    ],
  },
  {
    slug: "mcat-science-passage-strategy-experimental-design-mcat",
    cards: [
      {
        front: "What is the difference between an independent and a dependent variable?",
        back: "The independent variable is deliberately manipulated by the researcher. The dependent variable is measured and is expected to change in response to the independent variable.",
        hint: "Manipulated cause vs. measured effect.",
      },
      {
        front: "What is a controlled (confounding) variable, and why does it matter?",
        back: "A controlled variable is held constant so it doesn't affect the outcome; a confounding variable is an uncontrolled factor that varies with the IV and offers an alternative explanation, threatening internal validity.",
        hint: "Confounders create alternative explanations.",
      },
      {
        front: "Define internal vs. external validity.",
        back: "Internal validity is whether the study truly shows the IV caused the change in the DV (free of confounds). External validity is how well results generalize to other people, settings, and times.",
        hint: "Causation within vs. generalization beyond.",
      },
      {
        front: "Why is a control group essential in MCAT passage experiments?",
        back: "A control group lacks the treatment (or gets a placebo/vehicle) so it provides a baseline. Comparing treatment to control isolates the effect of the IV from background changes.",
        hint: "Baseline for comparison.",
      },
      {
        front: "What does it mean to identify the researchers' hypothesis on a passage?",
        back: "Find the testable prediction about the relationship between IV and DV. On the MCAT, results either support or fail to support this hypothesis; questions often ask which data would do each.",
        hint: "The testable prediction being evaluated.",
      },
      {
        front: "What is a positive control vs. a negative control?",
        back: "A positive control is a condition known to produce the expected effect, confirming the assay works. A negative control is expected to show no effect, confirming the signal isn't background or artifact.",
        hint: "Should-work vs. should-not-work checks.",
      },
      {
        front: "How do you read a figure or graph efficiently on a science passage?",
        back: "Read axis labels and units first, note the IV (x-axis) and DV (y-axis), identify the trend direction, and locate the control. Don't over-interpret; answer only what the data show.",
        hint: "Axes and units before trends.",
      },
      {
        front: "What is the difference between correlation and causation in experimental design?",
        back: "Correlation means two variables change together; causation means one produces the change in the other. Only a controlled experiment with manipulation and proper controls supports causal claims.",
        hint: "Co-vary vs. cause.",
      },
      {
        front: "Define blinding (single vs. double) and its purpose.",
        back: "In single-blind, subjects don't know their group; in double-blind, neither subjects nor experimenters do. Blinding reduces placebo effects and experimenter bias, improving internal validity.",
        hint: "Hides group identity to cut bias.",
      },
      {
        front: "What is randomization and why does it strengthen a study?",
        back: "Randomization assigns subjects to groups by chance, distributing unknown confounders evenly across groups so observed differences are more likely due to the treatment.",
        hint: "Chance assignment balances confounders.",
      },
      {
        front: "Common MCAT trap: 'Which result would WEAKEN the conclusion?'",
        back: "Look for data showing the effect occurs without the treatment, occurs equally in controls, or an uncontrolled confound explains it. The credited answer removes support for the causal claim.",
        hint: "Find an alternative explanation.",
      },
      {
        front: "What distinguishes an observational study from a true experiment?",
        back: "In an observational study the researcher measures variables without manipulation (no random assignment to treatment); a true experiment manipulates the IV and assigns groups, allowing causal inference.",
        hint: "No manipulation vs. manipulation.",
      },
      {
        front: "Worked mini-example: A drug study lacks a placebo group. What is the design flaw?",
        back: "Without a placebo/control, you cannot separate the drug's true effect from placebo effects or natural changes over time, undermining internal validity and any causal conclusion.",
        hint: "No baseline to isolate the drug effect.",
      },
      {
        front: "How should you handle a passage with an unfamiliar technique or topic?",
        back: "Rely on the passage and figures, not outside memorization. The MCAT provides needed context; treat the method as a black box defined by what it measures (its DV) and what it manipulates (its IV).",
        hint: "The passage gives you what you need.",
      },
    ],
  },
  {
    slug: "mcat-test-day-strategy-test-day-logistics-mcat",
    cards: [
      {
        front: "How long is the MCAT and how many scored sections does it have?",
        back: "The exam is about 7.5 hours total (around 6 hours 15 minutes of testing). It has four scored sections: Chem/Phys, CARS, Bio/Biochem, and Psych/Soc.",
        hint: "~7.5 hours, four sections.",
      },
      {
        front: "What are the four MCAT sections in order?",
        back: "1) Chemical and Physical Foundations, 2) Critical Analysis and Reasoning Skills (CARS), 3) Biological and Biochemical Foundations, 4) Psychological, Social, and Biological Foundations.",
        hint: "Chem/Phys, CARS, Bio/Biochem, Psych/Soc.",
      },
      {
        front: "What identification and items can you bring on test day?",
        back: "Bring a valid government-issued photo ID matching your registration name exactly. Personal items (phone, notes, food, watch) are stored in a locker; you cannot access them during the test.",
        hint: "Matching photo ID is mandatory.",
      },
      {
        front: "How do the optional breaks work during the MCAT?",
        back: "There are two 10-minute breaks (after Chem/Phys and after Bio/Biochem) and one 30-minute mid-exam break (after CARS). Breaks are optional but using them to eat, hydrate, and reset is recommended.",
        hint: "Two 10-min and one 30-min break.",
      },
      {
        front: "What happens if you arrive late to your testing appointment?",
        back: "You may be denied admission and forfeit your registration fee. Arrive at least 30 minutes early to allow for check-in, ID verification, palm scan, and locker setup.",
        hint: "Arrive ~30 min early; late = possible forfeit.",
      },
      {
        front: "Should you eat and hydrate before and during the MCAT?",
        back: "Yes. Eat a balanced meal beforehand and pack snacks/water for breaks to maintain energy and focus across the long exam. Avoid heavy or unfamiliar foods that could cause discomfort.",
        hint: "Fuel up; use breaks to refuel.",
      },
      {
        front: "What is the void option at the end of the MCAT?",
        back: "After the exam you can void your scores, meaning they won't be scored or sent and you won't see them. Voiding still uses an attempt. Once you click 'I wish to have my exam scored,' you cannot undo it.",
        hint: "Cancel scores, but it still counts as an attempt.",
      },
      {
        front: "How many times can you take the MCAT, and what are the limits?",
        back: "Up to 3 times in one testing year, 4 times across two consecutive years, and 7 times in a lifetime. Voids and no-shows count toward these limits.",
        hint: "3 / 4 / 7 rule.",
      },
      {
        front: "When are MCAT scores released and what is the score range?",
        back: "Scores are released about 30 days (roughly a month) after the test date. Total scores range from 472 to 528, with 500 as the midpoint and each section scored 118-132.",
        hint: "~30 days; 472-528 range.",
      },
      {
        front: "What scratch material is provided, and how should you use it?",
        back: "You receive a noteboard booklet and fine-point marker (or laminated sheets). Use them sparingly for quick calculations and diagrams; request a replacement during a break if you run out.",
        hint: "Noteboard and marker, replaceable on breaks.",
      },
      {
        front: "What is the highlight/strikethrough tool and when should you use it?",
        back: "The exam interface lets you highlight passage text and strike through eliminated answer choices. Use strikethrough to apply process of elimination and avoid re-reading discarded options.",
        hint: "Built-in tools for POE.",
      },
      {
        front: "Common logistical trap: name mismatch on ID.",
        back: "Your registration name must match your photo ID exactly. A mismatch can result in being turned away with no refund. Verify the spelling matches your ID well before test day.",
        hint: "Exact name match required.",
      },
      {
        front: "Why is doing a full-length practice the week before useful for logistics?",
        back: "It rehearses pacing, break timing, and stamina under real conditions, reducing test-day surprises so logistics feel routine and you can focus on content.",
        hint: "Simulate the real timing and stamina.",
      },
    ],
  },
  {
    slug: "mcat-test-day-strategy-section-specific-mcat",
    cards: [
      {
        front: "What is the timing for each MCAT science section (Chem/Phys, Bio/Biochem, Psych/Soc)?",
        back: "Each science section has 59 questions in 95 minutes (about 1.6 minutes per question), mixing 10 passages with about 15 discrete (standalone) questions.",
        hint: "59 questions in 95 minutes.",
      },
      {
        front: "What is the timing and format of the CARS section?",
        back: "CARS has 53 questions in 90 minutes across 9 passages (about 10 minutes per passage). All questions are passage-based; there are no discrete questions and no outside knowledge is required.",
        hint: "53 questions, 90 minutes, 9 passages.",
      },
      {
        front: "What is the best general pacing approach for science passages?",
        back: "Aim for roughly 8-9 minutes per passage. Skim for structure, then dig into figures and data when a question demands. Flag and move on rather than burning time on one tough item.",
        hint: "~8-9 min/passage; flag and move.",
      },
      {
        front: "What distinguishes discrete questions from passage questions in science sections?",
        back: "Discrete questions stand alone and test recall or simple application of content; passage questions require interpreting the passage, data, or experiments. Discretes are quick points to bank early.",
        hint: "Standalone recall vs. passage-dependent.",
      },
      {
        front: "What is the core strategy for CARS passages?",
        back: "Focus on the author's main idea, tone, and argument structure rather than details or outside facts. Answer based only on the passage; the correct choice is supported by the text, not your opinion.",
        hint: "Author's argument; stay in the text.",
      },
      {
        front: "How do you handle a CARS question with two tempting answers?",
        back: "Eliminate the choice that goes too far, distorts the author's view, or relies on outside information. The credited answer is the one most directly and modestly supported by the passage.",
        hint: "Pick the most defensible, least extreme.",
      },
      {
        front: "What is a key trap in Chem/Phys: getting bogged down in calculation?",
        back: "Many questions test concepts or estimation, not exact arithmetic. Use approximation, check units/orders of magnitude, and avoid lengthy computation when answer choices differ by large factors.",
        hint: "Estimate; check units and magnitude.",
      },
      {
        front: "How is the Psych/Soc section best approached?",
        back: "Most points come from recognizing terminology and theories (psychology and sociology vocabulary) applied to passage scenarios. Strong term recall plus passage interpretation is the winning combination.",
        hint: "Vocabulary recognition + application.",
      },
      {
        front: "What CARS question types should you expect?",
        back: "Foundations of comprehension (main idea, detail), reasoning within the text (inference, structure), and reasoning beyond the text (application, strengthen/weaken, new information). Each rewards staying anchored to the passage logic.",
        hint: "Comprehension, within-text, beyond-text.",
      },
      {
        front: "Why should you never leave an MCAT question blank?",
        back: "There is no penalty for wrong answers; only correct answers count. Always eliminate what you can and guess on remaining choices before time expires.",
        hint: "No wrong-answer penalty; always guess.",
      },
      {
        front: "How should you use flagging within a section?",
        back: "Flag questions you're unsure of, answer your best guess immediately (in case you run out of time), and revisit flagged items if time remains. Never leave a flag unanswered.",
        hint: "Guess now, revisit if time allows.",
      },
      {
        front: "What is the strategy for experiment-heavy Bio/Biochem passages?",
        back: "Identify the hypothesis, variables, and controls, then map each figure to what was manipulated and measured. Most questions test data interpretation and reasoning, not pure memorization.",
        hint: "Hypothesis, variables, controls, data.",
      },
      {
        front: "How do you manage CARS time if you fall behind?",
        back: "Don't let one hard passage consume time meant for easier ones. If behind, pick a passage to attack last (or guess strategically), prioritizing accessible passages to maximize total points.",
        hint: "Protect time for easier passages.",
      },
      {
        front: "What is a smart approach to discrete questions across science sections?",
        back: "Do them efficiently since they're independent and often quick. Banking these reliable points fast leaves more time for data-dense passages later in the section.",
        hint: "Quick, reliable points; do them efficiently.",
      },
    ],
  },
  {
    slug: "mcat-anatomy-physiology-embryology-mcat",
    cards: [
      {
        front: "What are the three primary germ layers and a major derivative of each?",
        back: "Ectoderm (nervous system, epidermis), mesoderm (muscle, bone, blood, kidneys, gonads), and endoderm (epithelial lining of gut, lungs, and associated glands like liver and pancreas).",
        hint: "Ecto = outer/nerves; meso = middle; endo = inner gut.",
      },
      {
        front: "Distinguish the morula, blastula, and gastrula stages.",
        back: "The morula is a solid ball of cells from cleavage; the blastula (blastocyst in humans) is a hollow ball with a fluid cavity; the gastrula forms when cells migrate to create the three germ layers.",
        hint: "Solid ball, hollow ball, germ layers.",
      },
      {
        front: "What is gastrulation?",
        back: "Gastrulation is the process where cells of the blastula rearrange and migrate to form the three germ layers (ectoderm, mesoderm, endoderm), establishing the basic body plan.",
        hint: "Forms the three germ layers.",
      },
      {
        front: "What is the role of the notochord in neurulation?",
        back: "The notochord (mesoderm-derived) induces the overlying ectoderm to form the neural plate, which folds into the neural tube, the precursor to the brain and spinal cord.",
        hint: "Notochord induces the neural tube.",
      },
      {
        front: "Differentiate determinate from indeterminate cleavage.",
        back: "In determinate cleavage, each early cell's fate is fixed; separating them yields incomplete embryos. In indeterminate cleavage, early cells retain the ability to form complete organisms (basis for identical twins).",
        hint: "Fate fixed vs. fate flexible.",
      },
      {
        front: "What are the two cell populations of the blastocyst and what do they become?",
        back: "The inner cell mass (embryoblast) becomes the embryo; the trophoblast becomes the placenta and extraembryonic membranes, contributing to implantation and the chorion.",
        hint: "ICM = embryo; trophoblast = placenta.",
      },
      {
        front: "Trace the fetal circulation shunts and their functions.",
        back: "Ductus venosus bypasses the liver; foramen ovale shunts blood from right to left atrium; ductus arteriosus connects pulmonary artery to aorta, bypassing the nonfunctional fetal lungs.",
        hint: "Three shunts bypass liver and lungs.",
      },
      {
        front: "How does oxygenated blood reach the fetus, and what carries it?",
        back: "Oxygenated, nutrient-rich blood travels from the placenta to the fetus through the single umbilical vein. The two umbilical arteries carry deoxygenated blood back to the placenta.",
        hint: "Umbilical VEIN carries oxygenated blood.",
      },
      {
        front: "What is the difference between mitosis and meiosis in development?",
        back: "Mitosis produces genetically identical diploid cells for growth and tissue formation; meiosis produces genetically varied haploid gametes (sperm and egg) for sexual reproduction.",
        hint: "Identical diploid vs. varied haploid.",
      },
      {
        front: "What is morphogenesis and how do apoptosis and cell migration contribute?",
        back: "Morphogenesis is the development of body shape and structure. Apoptosis (programmed cell death) sculpts tissues (e.g., separating digits), and directed cell migration positions cells to form organs.",
        hint: "Shaping the body via death and movement.",
      },
      {
        front: "What is induction in embryonic development?",
        back: "Induction is the process by which one group of cells influences the developmental fate of neighboring cells, typically via signaling molecules (e.g., the notochord inducing the neural plate).",
        hint: "One tissue directs another's fate.",
      },
      {
        front: "Define totipotent, pluripotent, and multipotent stem cells.",
        back: "Totipotent cells can form any cell type plus extraembryonic tissue (zygote, early blastomeres). Pluripotent cells form any embryonic cell type (inner cell mass). Multipotent cells form a limited lineage (e.g., hematopoietic stem cells).",
        hint: "Decreasing potency: toti > pluri > multi.",
      },
      {
        front: "Common trap: which germ layer gives rise to the nervous system?",
        back: "Ectoderm. Although the nervous system seems 'internal,' it derives from ectoderm via the neural tube. Endoderm forms the gut/respiratory linings, and mesoderm forms muscle, bone, and connective tissue.",
        hint: "Nervous system is ectodermal.",
      },
      {
        front: "What changes occur in the circulatory system at birth?",
        back: "First breath inflates the lungs, lowering pulmonary resistance. This closes the foramen ovale and ductus arteriosus, redirecting blood through the lungs and establishing adult circulation.",
        hint: "Lungs inflate; fetal shunts close.",
      },
    ],
  },
  {
    slug: "mcat-psychology-behavior-learning-memory-mcat",
    cards: [
      {
        front: "What is classical conditioning, with its key terms?",
        back: "Classical conditioning pairs a neutral stimulus with an unconditioned stimulus (UCS) that elicits an unconditioned response (UCR). After pairing, the now conditioned stimulus (CS) elicits a conditioned response (CR).",
        hint: "Pavlov: NS + UCS becomes CS to CR.",
      },
      {
        front: "Differentiate acquisition, extinction, and spontaneous recovery.",
        back: "Acquisition is learning the CS-UCS association. Extinction is the decline of the CR when the CS is presented without the UCS. Spontaneous recovery is the reappearance of an extinguished CR after a rest period.",
        hint: "Learn, fade, briefly return.",
      },
      {
        front: "What is operant conditioning, and who is associated with it?",
        back: "Operant conditioning (B.F. Skinner) shapes behavior through consequences: reinforcement increases behavior, punishment decreases it. Learning is based on the relationship between a voluntary behavior and its outcome.",
        hint: "Skinner: consequences shape behavior.",
      },
      {
        front: "Distinguish positive vs. negative reinforcement and punishment.",
        back: "Positive = adding a stimulus; negative = removing a stimulus. Reinforcement increases behavior, punishment decreases it. E.g., negative reinforcement removes something aversive to increase a behavior.",
        hint: "Positive/negative = add/remove; reinforce/punish = up/down.",
      },
      {
        front: "Compare the four reinforcement schedules.",
        back: "Fixed-ratio (set number of responses), variable-ratio (random number, highest, most resistant to extinction), fixed-interval (set time), variable-interval (random time). Variable schedules resist extinction best.",
        hint: "Ratio = responses; interval = time; variable resists extinction.",
      },
      {
        front: "What are the three stages of the modal (multi-store) memory model?",
        back: "Sensory memory (brief, large capacity), short-term/working memory (~7±2 items, ~20-30 s), and long-term memory (vast, potentially permanent). Attention and rehearsal move information forward.",
        hint: "Sensory to short-term to long-term.",
      },
      {
        front: "Differentiate explicit (declarative) and implicit (nondeclarative) memory.",
        back: "Explicit memory is conscious recall, including episodic (events) and semantic (facts). Implicit memory is unconscious, including procedural skills and priming.",
        hint: "Conscious facts/events vs. unconscious skills.",
      },
      {
        front: "What is the difference between encoding, storage, and retrieval?",
        back: "Encoding processes information into memory, storage maintains it over time, and retrieval accesses stored information. Failures at any stage cause forgetting.",
        hint: "Get in, keep, get out.",
      },
      {
        front: "Explain proactive vs. retroactive interference.",
        back: "Proactive interference: old information disrupts learning new information. Retroactive interference: new information disrupts recall of old information.",
        hint: "Pro = old hurts new; retro = new hurts old.",
      },
      {
        front: "What is the spacing effect and how does it aid learning?",
        back: "The spacing effect shows that information is retained better when study sessions are distributed over time rather than massed (crammed). Spaced repetition strengthens long-term retention.",
        hint: "Spread out study beats cramming.",
      },
      {
        front: "What is long-term potentiation (LTP)?",
        back: "LTP is the persistent strengthening of synapses based on recent patterns of activity, considered a cellular basis of learning and memory. It often involves glutamate and NMDA receptors in the hippocampus.",
        hint: "Synaptic strengthening underlying memory.",
      },
      {
        front: "How do observational learning and modeling work (Bandura)?",
        back: "Observational learning occurs by watching and imitating a model's behavior and its consequences. Bandura's Bobo doll study showed children imitate aggression they observe being rewarded.",
        hint: "Learn by watching a model.",
      },
      {
        front: "What is the serial position effect?",
        back: "Recall is best for items at the beginning (primacy, due to long-term storage) and end (recency, due to short-term memory) of a list, and worst for middle items.",
        hint: "Primacy + recency; middle is weakest.",
      },
      {
        front: "Common trap: how does negative reinforcement differ from punishment?",
        back: "Negative reinforcement removes an aversive stimulus to INCREASE a behavior; punishment DECREASES a behavior. 'Negative' refers to removal, not to discouraging behavior.",
        hint: "Negative reinforcement still increases behavior.",
      },
    ],
  },
  {
    slug: "mcat-psychology-behavior-sensation-perception-mcat",
    cards: [
      {
        front: "What is the difference between sensation and perception?",
        back: "Sensation is the detection of physical stimuli by sensory receptors (bottom-up). Perception is the brain's organization and interpretation of those signals into meaningful experience (top-down).",
        hint: "Detect vs. interpret.",
      },
      {
        front: "Define absolute threshold and difference threshold (JND).",
        back: "Absolute threshold is the minimum stimulus intensity detectable 50% of the time. The difference threshold (just-noticeable difference) is the smallest detectable change between two stimuli.",
        hint: "Minimum to detect vs. minimum to notice change.",
      },
      {
        front: "State Weber's law.",
        back: "Weber's law says the just-noticeable difference is a constant proportion of the original stimulus: $\\\\frac{\\\\Delta I}{I} = k$, where $\\\\Delta I$ is the change needed, $I$ is the original intensity, and $k$ is the Weber fraction.",
        hint: "JND is a constant fraction of intensity.",
      },
      {
        front: "What is signal detection theory?",
        back: "Signal detection theory analyzes how we distinguish signal from noise, accounting for both sensitivity and decision criterion (bias). Outcomes are hits, misses, false alarms, and correct rejections.",
        hint: "Sensitivity plus response bias.",
      },
      {
        front: "What is sensory adaptation?",
        back: "Sensory adaptation is the decreased responsiveness of receptors to a constant, unchanging stimulus over time (e.g., no longer feeling clothing on your skin), keeping attention available for changes.",
        hint: "Fading response to constant stimuli.",
      },
      {
        front: "Trace the path of light through the eye to the retina.",
        back: "Light passes through the cornea, pupil (controlled by the iris), and lens, which focuses it onto the retina, where photoreceptors (rods and cones) transduce it into neural signals.",
        hint: "Cornea, pupil, lens, retina.",
      },
      {
        front: "Compare rods and cones.",
        back: "Rods are numerous, sensitive in dim light, and detect black/white (night vision); they cluster in the periphery. Cones detect color and fine detail in bright light and concentrate in the fovea.",
        hint: "Rods = dim/peripheral; cones = color/fovea.",
      },
      {
        front: "Distinguish the trichromatic and opponent-process theories of color vision.",
        back: "Trichromatic theory: three cone types (red, green, blue) combine to create color. Opponent-process theory: color is processed in antagonistic pairs (red-green, blue-yellow, black-white), explaining afterimages.",
        hint: "Three cones vs. antagonistic pairs.",
      },
      {
        front: "How does the cochlea encode pitch (place vs. frequency theory)?",
        back: "Place theory: pitch is coded by which region of the basilar membrane vibrates (best for high frequencies). Frequency theory: pitch matches the firing rate of neurons (best for low frequencies).",
        hint: "Location vs. firing rate.",
      },
      {
        front: "List Gestalt principles of perceptual organization.",
        back: "Proximity, similarity, continuity (good continuation), closure, and figure-ground. These describe how the brain groups elements into wholes ('the whole is greater than the sum of its parts').",
        hint: "Proximity, similarity, continuity, closure, figure-ground.",
      },
      {
        front: "What are binocular depth cues?",
        back: "Binocular cues require both eyes: retinal disparity (differing images between eyes) and convergence (inward eye rotation for near objects). They are most effective for nearby depth perception.",
        hint: "Two-eye cues: disparity and convergence.",
      },
      {
        front: "Give examples of monocular depth cues.",
        back: "Monocular cues need only one eye: relative size, interposition (overlap), linear perspective, texture gradient, relative height, and motion parallax.",
        hint: "One-eye cues like overlap and perspective.",
      },
      {
        front: "What is bottom-up vs. top-down processing in perception?",
        back: "Bottom-up processing builds perception from raw sensory data. Top-down processing uses prior knowledge, expectations, and context to interpret incoming information.",
        hint: "Data-driven vs. expectation-driven.",
      },
      {
        front: "Common trap: which structure performs sensory transduction in hearing?",
        back: "The hair cells of the organ of Corti within the cochlea convert fluid vibrations into neural signals. The eardrum and ossicles only conduct and amplify mechanical vibration, not transduce it.",
        hint: "Hair cells in the cochlea transduce sound.",
      },
    ],
  },
  {
    slug: "mcat-biostatistics-mcat",
    cards: [
      {
        front: "Differentiate mean, median, and mode, and when to use each.",
        back: "Mean is the arithmetic average (sensitive to outliers). Median is the middle value (robust to skew/outliers). Mode is the most frequent value. Use the median for skewed data.",
        hint: "Average vs. middle vs. most common.",
      },
      {
        front: "What is standard deviation vs. variance?",
        back: "Variance is the average squared deviation from the mean; standard deviation is its square root, expressed in the original units. Both measure spread; larger values mean more dispersion.",
        hint: "SD = square root of variance.",
      },
      {
        front: "Define a p-value and the standard significance threshold.",
        back: "A p-value is the probability of observing data as or more extreme than what was seen, assuming the null hypothesis is true. Results are typically called significant when $p < 0.05$.",
        hint: "Probability of data given a true null.",
      },
      {
        front: "What is a confidence interval?",
        back: "A 95% confidence interval is a range that would contain the true population parameter in 95% of repeated samples. If it excludes the null value (e.g., 0 for differences, 1 for ratios), the result is significant.",
        hint: "Plausible range for the true parameter.",
      },
      {
        front: "Distinguish Type I and Type II errors.",
        back: "A Type I error (alpha) is a false positive: rejecting a true null hypothesis. A Type II error (beta) is a false negative: failing to reject a false null hypothesis.",
        hint: "Type I = false positive; Type II = false negative.",
      },
      {
        front: "What is statistical power?",
        back: "Power is the probability of correctly rejecting a false null hypothesis (detecting a true effect), equal to $1 - \\\\beta$. Larger sample sizes and effect sizes increase power.",
        hint: "1 − β; ability to detect a real effect.",
      },
      {
        front: "Define sensitivity and specificity.",
        back: "Sensitivity is the true positive rate: $\\\\frac{TP}{TP + FN}$, the ability to correctly identify those with disease. Specificity is the true negative rate: $\\\\frac{TN}{TN + FP}$, correctly identifying those without disease.",
        hint: "Sensitivity finds disease; specificity rules it out.",
      },
      {
        front: "What are PPV and NPV, and how do they depend on prevalence?",
        back: "Positive predictive value $= \\\\frac{TP}{TP + FP}$ (chance a positive test is truly positive); negative predictive value $= \\\\frac{TN}{TN + FN}$. Both depend on disease prevalence, unlike sensitivity/specificity.",
        hint: "PPV/NPV shift with prevalence.",
      },
      {
        front: "What is the difference between relative risk and odds ratio?",
        back: "Relative risk (RR) is the ratio of incidence in exposed vs. unexposed (used in cohort studies). The odds ratio (OR) compares odds of exposure (used in case-control studies); OR approximates RR for rare diseases.",
        hint: "RR for cohorts; OR for case-control.",
      },
      {
        front: "Interpret a correlation coefficient r.",
        back: "$r$ ranges from $-1$ to $+1$. The sign gives direction and the magnitude gives strength of a linear relationship; $r = 0$ means no linear association. Correlation does not imply causation.",
        hint: "−1 to +1; sign = direction, size = strength.",
      },
      {
        front: "When do you use a t-test vs. ANOVA vs. chi-square?",
        back: "Use a t-test to compare means of two groups, ANOVA to compare means of three or more groups, and a chi-square test for associations between categorical variables.",
        hint: "2 means / 3+ means / categorical counts.",
      },
      {
        front: "Distinguish accuracy from precision.",
        back: "Accuracy is closeness to the true value (low bias). Precision is reproducibility/consistency of repeated measurements (low random error). A measure can be precise but inaccurate.",
        hint: "Correct vs. consistent.",
      },
      {
        front: "What does the central limit theorem state?",
        back: "The central limit theorem says the sampling distribution of the sample mean approaches a normal distribution as sample size increases, regardless of the population's shape (typically n ≥ 30).",
        hint: "Sample means become normal as n grows.",
      },
      {
        front: "Worked mini-example: A test has sensitivity 90% and specificity 80%. What does a 90% sensitivity mean?",
        back: "Of people who truly have the disease, 90% test positive (10% are false negatives). Sensitivity reflects detection among the diseased and is independent of how common the disease is.",
        hint: "90% of diseased test positive.",
      },
    ],
  },
];
