export const batchCards: { slug: string; cards: { front: string; back: string; hint?: string }[] }[] = [
  {
    slug: "mcat-anatomy-physiology-reproductive-mcat",
    cards: [
      {
        front: "Trace the path of sperm from production to ejaculation (the SEVEN UP / pathway mnemonic).",
        back: "Seminiferous tubules \\u2192 Epididymis \\u2192 Vas (ductus) deferens \\u2192 Ejaculatory duct \\u2192 (nothing) \\u2192 Urethra \\u2192 Penis. Sperm are produced in the seminiferous tubules and mature/are stored in the epididymis.",
        hint: "SEVEN UP: Seminiferous, Epididymis, Vas deferens, Ejaculatory duct, Urethra, Penis.",
      },
      {
        front: "What are the functions of Sertoli cells vs. Leydig cells?",
        back: "Sertoli cells (inside seminiferous tubules) nourish developing sperm and form the blood\\u2013testis barrier; stimulated by FSH. Leydig cells (interstitial) secrete testosterone; stimulated by LH.",
        hint: "Sertoli = Support/FSH; Leydig = LH/testosterone.",
      },
      {
        front: "Outline the hormonal feedback of the male HPG axis.",
        back: "The hypothalamus releases GnRH \\u2192 anterior pituitary releases LH and FSH. LH \\u2192 Leydig cells make testosterone; FSH \\u2192 Sertoli cells support spermatogenesis. Testosterone and inhibin provide negative feedback on the hypothalamus and pituitary.",
        hint: "Inhibin selectively inhibits FSH.",
      },
      {
        front: "Describe the hormonal changes across the menstrual cycle (follicular, ovulation, luteal).",
        back: "Follicular phase: FSH drives follicle growth; rising estrogen. At a critical estrogen threshold, positive feedback triggers an LH surge \\u2192 ovulation (~day 14). Luteal phase: the corpus luteum secretes progesterone (and estrogen) to maintain the endometrium; if no fertilization, it degenerates, hormones fall, and menstruation occurs.",
        hint: "LH surge causes ovulation; corpus luteum makes progesterone.",
      },
      {
        front: "What is the key feedback switch that produces the LH surge?",
        back: "Estrogen normally exerts negative feedback, but when it stays high for a sustained period (from the mature follicle), it switches to POSITIVE feedback on the hypothalamus/pituitary, producing the LH surge that triggers ovulation.",
        hint: "Sustained high estrogen flips negative to positive feedback.",
      },
      {
        front: "What hormone maintains the corpus luteum in early pregnancy, and what produces it?",
        back: "Human chorionic gonadotropin (hCG), secreted by the developing embryo/placenta, mimics LH to maintain the corpus luteum so it keeps secreting progesterone until the placenta takes over (~end of first trimester). hCG is detected by pregnancy tests.",
        hint: "hCG = LH mimic; rescues the corpus luteum.",
      },
      {
        front: "Compare spermatogenesis and oogenesis in number of gametes and timing.",
        back: "Spermatogenesis: one primary spermatocyte \\u2192 4 functional sperm; continuous from puberty. Oogenesis: one primary oocyte \\u2192 1 functional egg + (up to 3) polar bodies; arrested in prophase I until puberty, completes meiosis II only upon fertilization.",
        hint: "4 sperm vs. 1 egg; egg arrests until fertilization.",
      },
      {
        front: "Where does fertilization normally occur, and where does implantation occur?",
        back: "Fertilization typically occurs in the ampulla of the fallopian (uterine) tube. The resulting blastocyst implants into the endometrium (uterine lining) about 6\\u20139 days after fertilization.",
        hint: "Fertilize in the tube; implant in the uterus.",
      },
      {
        front: "Define the acrosome reaction and the cortical reaction.",
        back: "Acrosome reaction: enzymes released from the sperm's acrosome digest the zona pellucida, letting sperm reach the egg membrane. Cortical reaction: after fusion, cortical granules release contents that harden the zona pellucida to block polyspermy (prevents additional sperm entry).",
        hint: "Acrosome gets sperm IN; cortical reaction keeps others OUT.",
      },
      {
        front: "What does the placenta do, and which structures carry blood to/from the fetus?",
        back: "The placenta enables exchange of gases, nutrients, and wastes between maternal and fetal blood (which do not mix). Two umbilical arteries carry deoxygenated blood from fetus to placenta; one umbilical vein carries oxygenated blood from placenta to fetus.",
        hint: "Umbilical VEIN = oxygenated (toward fetus).",
      },
      {
        front: "Name the three primary germ layers and one derivative of each.",
        back: "Ectoderm \\u2192 nervous system, epidermis. Mesoderm \\u2192 muscle, bone, circulatory system, kidneys, gonads. Endoderm \\u2192 lining of the gut and respiratory tract, plus organs like the liver and pancreas.",
        hint: "Ecto = outer/nerves; Meso = middle/muscle; Endo = inner/gut.",
      },
      {
        front: "What is the role of progesterone, and why does estrogen/progesterone-based contraception work?",
        back: "Progesterone maintains the endometrium and inhibits GnRH/LH/FSH. Combined hormonal contraceptives provide constant estrogen and progesterone, suppressing the LH/FSH surge so no follicle matures and ovulation is prevented.",
        hint: "Constant hormones = no surge = no ovulation.",
      },
      {
        front: "Common trap: which fetal shunts bypass the lungs and liver, and why?",
        back: "Foramen ovale (right atrium \\u2192 left atrium) and ductus arteriosus (pulmonary artery \\u2192 aorta) bypass the nonfunctional fetal lungs; ductus venosus bypasses the liver. They close after birth when the lungs inflate and pressures change.",
        hint: "Lungs and liver are not yet functional in utero.",
      },
    ],
  },
  {
    slug: "mcat-cars-strategy-timing-mcat",
    cards: [
      {
        front: "How is the CARS section structured (passages, questions, time)?",
        back: "CARS has 9 passages with about 53 questions in 90 minutes. That is roughly 10 minutes per passage including its 5\\u20137 questions, or about 100 seconds per question on average.",
        hint: "9 passages, 53 questions, 90 minutes.",
      },
      {
        front: "What subjects do CARS passages come from, and what does this imply for strategy?",
        back: "Passages are drawn from the humanities and social sciences (philosophy, ethics, literature, history, art, cultural studies, etc.). No outside content knowledge is required\\u2014every answer is justified by the passage, so you must read for argument and reasoning, not facts.",
        hint: "Humanities + social sciences; no outside knowledge.",
      },
      {
        front: "What is a reliable per-passage time budget to avoid running out of time?",
        back: "Aim for roughly 3\\u20134 minutes reading and 5\\u20136 minutes answering, ~10 minutes total per passage. Check the clock at the 30-minute (3 passages) and 60-minute (6 passages) marks to stay on pace.",
        hint: "Pace check at 3 and 6 passages done.",
      },
      {
        front: "What should you actively identify while reading a CARS passage?",
        back: "Identify the central thesis/main idea, the author's tone and opinion, the structure (how paragraphs relate), and contrast/transition words. Do not get lost in details; you can return for specifics when a question requires them.",
        hint: "Thesis, tone, structure\\u2014not memorizing details.",
      },
      {
        front: "Why are transition words ('however', 'therefore', 'although') high-value in CARS?",
        back: "They signal logical relationships: contrast (however, but, yet), conclusion (thus, therefore), concession (although, while), and continuation (moreover). Tracking them reveals the argument's structure and often where the author's true view lies.",
        hint: "Contrast words often flag the author's real position.",
      },
      {
        front: "What is the recommended approach: read the passage first or the questions first?",
        back: "Most high scorers read the passage first (skimming for argument), then the questions. Reading questions first wastes time and fragments comprehension. The exception is a quick glance only if you tend to get lost\\u2014but the standard, evidence-based approach is passage-first.",
        hint: "Passage-first is the default high-yield method.",
      },
      {
        front: "How should you handle the hardest passage if you are short on time?",
        back: "Triage: if a passage is dense and you are behind, answer the easy questions, make educated guesses on the rest (never leave blanks\\u2014no wrong-answer penalty), and bank the saved time for passages you can fully master.",
        hint: "Never leave a blank; there is no guessing penalty.",
      },
      {
        front: "What is the danger of spending too long on one question?",
        back: "Each question is worth the same, so over-investing in one hard question steals time from multiple easier ones you would get right. Flag it, choose your best guess, and move on; return only if time remains.",
        hint: "All questions are weighted equally\\u2014protect the easy points.",
      },
      {
        front: "How can you predict the answer before reading the choices?",
        back: "After reading the question stem, formulate your own answer based on the passage. Then match it to the closest option. This prevents being lured by well-written but incorrect distractors and speeds up selection.",
        hint: "Anticipate, then match\\u2014don't shop the choices.",
      },
      {
        front: "What is the role of process of elimination in CARS?",
        back: "Because right answers must be fully supported by the passage, eliminate any choice that is too extreme, out of scope, contradicts the author, or is only half-true. Often you cannot 'prove' the answer but can disprove the other three.",
        hint: "Disprove three; the survivor wins.",
      },
      {
        front: "Common timing trap: re-reading the whole passage for each question. What should you do instead?",
        back: "Use your understanding of the structure to jump directly to the relevant paragraph. Targeted re-reading of one or two sentences is fine; re-reading the entire passage repeatedly is the single biggest time sink.",
        hint: "Targeted lookups, not full re-reads.",
      },
      {
        front: "What is a good warm-up and end-of-section habit for CARS timing?",
        back: "Start the section with your strongest-feeling passage type if you can choose, build rhythm, and never leave answers blank at the end\\u2014select a default 'guess letter' for any unfinished questions before time expires.",
        hint: "Build momentum early; fill every bubble at the end.",
      },
    ],
  },
  {
    slug: "mcat-sociology-health-disparities-mcat",
    cards: [
      {
        front: "Define health disparity (health inequity).",
        back: "A health disparity is a preventable difference in health outcomes or access to care closely linked to social, economic, or environmental disadvantage, often affecting groups defined by race, income, gender, or geography.",
        hint: "Avoidable, group-based differences tied to disadvantage.",
      },
      {
        front: "What are the social determinants of health (SDOH)?",
        back: "SDOH are the conditions in which people are born, grow, live, work, and age\\u2014including income, education, housing, neighborhood, access to care, and social support\\u2014that shape health outcomes more than medical care alone.",
        hint: "Where you live, work, and learn drives health.",
      },
      {
        front: "Define the social gradient in health.",
        back: "The social gradient is the consistent finding that higher socioeconomic status (SES) corresponds to better health at every step of the ladder\\u2014not just for the very poor. Health improves continuously as SES rises.",
        hint: "Health rises step-by-step with SES.",
      },
      {
        front: "What is the difference between health and illness from a sociological view (illness vs. sickness vs. disease)?",
        back: "Disease is the objective biological pathology; illness is the patient's subjective experience of feeling unwell; sickness is the social role/recognition of being unhealthy. Sociology emphasizes that illness and sickness are socially shaped.",
        hint: "Disease = biology; illness = experience; sickness = social role.",
      },
      {
        front: "Explain the 'sick role' (Parsons).",
        back: "Talcott Parsons's sick role grants exemptions: the sick person is not blamed and is excused from normal duties, but in exchange must want to get well and seek competent help. It frames illness as a temporary, regulated social deviance.",
        hint: "Rights (exemption) plus obligations (seek care).",
      },
      {
        front: "Define medicalization and give an example.",
        back: "Medicalization is the process by which non-medical human conditions become defined and treated as medical problems (diseases or disorders). Examples include shyness reframed as social anxiety disorder, or normal aging treated medically.",
        hint: "Turning everyday conditions into medical problems.",
      },
      {
        front: "What is the difference between equality and equity in health care?",
        back: "Equality gives everyone the same resources; equity distributes resources according to need so that everyone can reach a comparable health outcome. Equity accounts for differing starting points and barriers.",
        hint: "Equality = same; equity = fair according to need.",
      },
      {
        front: "How do residential segregation and neighborhood effects contribute to disparities?",
        back: "Segregation concentrates poverty, limits access to healthy food (food deserts), safe spaces, quality schools, and clean environments, while increasing exposure to pollution and stress\\u2014compounding poor health for disadvantaged groups.",
        hint: "Place shapes exposure, resources, and stress.",
      },
      {
        front: "Define the terms incidence and prevalence.",
        back: "Incidence is the rate of NEW cases of a condition in a population over a time period; prevalence is the total number (or proportion) of EXISTING cases at a point in time. Prevalence depends on incidence and disease duration.",
        hint: "Incidence = new; prevalence = total existing.",
      },
      {
        front: "What is the difference between morbidity and mortality?",
        back: "Morbidity refers to the presence of disease or illness (rate of being ill); mortality refers to death (death rate). Disparities can appear in either or both measures.",
        hint: "Morbidity = sickness; mortality = death.",
      },
      {
        front: "Explain how race and SES interact in producing disparities (and why race is not biological).",
        back: "Race is a social construct, not a biological category; observed racial health disparities largely reflect structural factors\\u2014discrimination, segregation, and SES differences\\u2014plus chronic stress. The interaction means disadvantage often compounds across race and class.",
        hint: "Race is social; disparities stem from structure, not biology.",
      },
      {
        front: "What is the 'second sickness' or the role of social structure (conflict theory) in health disparities?",
        back: "Conflict theory argues that health inequalities arise from unequal distribution of power and resources; capitalism and class structure produce illness among the disadvantaged. Solutions require structural change, not just individual behavior change.",
        hint: "Power and resource inequality drive illness.",
      },
      {
        front: "Define cultural competence and explain its relevance to disparities.",
        back: "Cultural competence is a provider's ability to deliver care that respects patients' cultural and linguistic needs. It reduces miscommunication and mistrust, improving access and outcomes for marginalized groups and helping narrow disparities.",
        hint: "Culturally responsive care improves access and trust.",
      },
    ],
  },
  {
    slug: "mcat-science-passage-strategy-discrete-questions-mcat",
    cards: [
      {
        front: "How are the three science sections of the MCAT structured (passages vs. discretes)?",
        back: "Each science section (Chem/Phys, Bio/Biochem, Psych/Soc) has 59 questions in 95 minutes: about 10 passages with ~44 passage-based questions plus ~15 standalone discrete questions interspersed in groups.",
        hint: "59 questions, 95 minutes; ~15 are discretes.",
      },
      {
        front: "What is the difference between passage-based and discrete questions in approach?",
        back: "Passage-based questions require integrating the passage (data, experiment, figures) with your content knowledge. Discrete questions are independent\\u2014pure recall or single-step reasoning\\u2014and should be answered quickly from memory without searching a passage.",
        hint: "Discretes = quick recall; passages = integrate + analyze.",
      },
      {
        front: "What is a good time budget per question in a science section?",
        back: "95 minutes / 59 questions \\u2248 95 seconds per question. Discretes should take ~30\\u201360 seconds each, banking time for data-heavy passage questions that take longer.",
        hint: "~95 sec average; discretes faster, passages slower.",
      },
      {
        front: "How should you read a science passage efficiently?",
        back: "Skim the prose for the main hypothesis/experimental design, and note (do not fully process) figures, tables, and equations\\u2014you can return when a question points to them. Focus on what was tested, the variables, and the result.",
        hint: "Map the experiment; mine figures only when asked.",
      },
      {
        front: "What are the three main MCAT science passage types?",
        back: "(1) Information/review passages (textbook-style explanation), (2) Experiment passages (a study with methods and results), and (3) Persuasive/argument passages (a position with supporting evidence, more common in Psych/Soc).",
        hint: "Information, Experiment, Persuasive.",
      },
      {
        front: "How do you identify independent vs. dependent variables in an experiment passage?",
        back: "The independent variable is what the researcher manipulates (often the x-axis); the dependent variable is what is measured in response (often the y-axis). Control variables are held constant. Identifying these is key to interpreting figures and questions.",
        hint: "IV = manipulated (x); DV = measured (y).",
      },
      {
        front: "What does a good experimental control allow you to conclude?",
        back: "A proper control isolates the variable of interest, so differences in the dependent variable can be attributed to the independent variable rather than confounders. Without controls, you can only describe correlation, not causation.",
        hint: "Controls let you attribute the effect to the IV.",
      },
      {
        front: "Strategy for discrete questions: should you skip the passage entirely?",
        back: "Yes\\u2014discrete questions are self-contained. Read the stem, recall the relevant concept, and answer without referencing any passage. Treating a discrete like a passage question wastes time.",
        hint: "Discretes need no passage\\u2014answer directly.",
      },
      {
        front: "How should you handle a passage built on an unfamiliar topic?",
        back: "Don't panic\\u2014the MCAT provides all novel information in the passage. Use your foundational science to interpret the new system; questions test your reasoning about the given data, not prior familiarity with the specific topic.",
        hint: "Novel content is explained\\u2014reason from the passage.",
      },
      {
        front: "What is a 'two-pass' or triage strategy for a science section?",
        back: "First pass: answer questions you know quickly and flag hard ones. Second pass: return to flagged questions with remaining time. This secures easy points first and prevents one hard passage from sinking your score.",
        hint: "Bank easy points first; revisit flagged items.",
      },
      {
        front: "Common trap: choosing an answer that is true but does not answer the question. How to avoid it?",
        back: "Read the stem carefully for exactly what is asked (which variable, which step, 'EXCEPT', 'LEAST'). A factually true statement can still be wrong if it does not address the specific question. Underline key qualifiers.",
        hint: "True \\u2260 correct\\u2014answer the exact question asked.",
      },
      {
        front: "How should you use figures, graphs, and tables in passage questions?",
        back: "Note axis labels, units, trends (increasing/decreasing), and outliers. Many questions are answered directly by reading a data point or trend from the figure\\u2014combine that with a single content fact rather than complex calculation.",
        hint: "Axes, units, trends\\u2014data often answers the question.",
      },
      {
        front: "Why should you never leave a science question blank, and how to guess efficiently?",
        back: "There is no penalty for wrong answers, so blanks only cost points. Eliminate clearly wrong choices, pick the best remaining, flag it if unsure, and ensure every question has an answer before time expires.",
        hint: "No penalty\\u2014eliminate, guess, and fill everything.",
      },
    ],
  },
  {
    slug: "mcat-biochemistry-foundations-mcat",
    cards: [
      {
        front: "Name the four levels of protein structure and what stabilizes each.",
        back: "Primary (amino acid sequence, peptide bonds); secondary (\\u03b1-helices and \\u03b2-sheets, hydrogen bonds between backbone); tertiary (overall 3D fold, R-group interactions: H-bonds, ionic, hydrophobic, disulfide); quaternary (multiple subunits, same interactions between chains).",
        hint: "Sequence \\u2192 local folds \\u2192 3D shape \\u2192 multi-subunit.",
      },
      {
        front: "Which amino acids are nonpolar, polar, acidic, and basic? Give the key examples.",
        back: "Nonpolar/hydrophobic: Gly, Ala, Val, Leu, Ile, Phe, Met, Pro, Trp. Polar uncharged: Ser, Thr, Cys, Tyr, Asn, Gln. Acidic (negative): Asp, Glu. Basic (positive): Lys, Arg, His.",
        hint: "Acidic = D, E; Basic = K, R, H.",
      },
      {
        front: "Define the isoelectric point (pI) and how to estimate it for an amino acid with no charged side chain.",
        back: "The pI is the pH at which the molecule has no net charge. For an amino acid with a neutral side chain, $pI = \\\\frac{pK_{a1} + pK_{a2}}{2}$, averaging the carboxyl and amino pKa values.",
        hint: "Net charge zero; average the two relevant pKa values.",
      },
      {
        front: "State the Henderson\\u2013Hasselbalch equation and define each variable.",
        back: "$pH = pK_a + \\\\log\\\\left(\\\\frac{[A^-]}{[HA]}\\\\right)$, where $pK_a$ is the acid dissociation constant of the buffer, $[A^-]$ is the conjugate base concentration, and $[HA]$ is the weak acid concentration. Use it to find pH of buffers or the protonation state of groups.",
        hint: "When [A\\u207b] = [HA], pH = pKa.",
      },
      {
        front: "What four major classes make up biological macromolecules, and their monomers?",
        back: "Proteins (amino acids), carbohydrates (monosaccharides), lipids (not true polymers; built from fatty acids and glycerol), and nucleic acids (nucleotides). Each forms via condensation (dehydration) reactions and breaks via hydrolysis.",
        hint: "Build by losing water; break by adding water.",
      },
      {
        front: "Distinguish hydrophobic and hydrophilic interactions and their role in protein folding.",
        back: "Hydrophilic (polar/charged) groups interact favorably with water and tend to face outward in aqueous solution; hydrophobic (nonpolar) groups cluster in the protein interior to minimize contact with water. The hydrophobic effect is the major driving force of folding.",
        hint: "Nonpolar inside, polar outside in water.",
      },
      {
        front: "What is the peptide bond and why is it rigid/planar?",
        back: "A peptide bond is an amide linkage between the carboxyl of one amino acid and the amino group of the next. The C\\u2013N bond has partial double-bond character (resonance), making it planar and restricting rotation, which constrains protein conformation.",
        hint: "Amide bond; resonance gives partial double-bond, planar.",
      },
      {
        front: "Compare the four types of noncovalent interactions by relative strength.",
        back: "From strongest to weakest: ionic (electrostatic) > hydrogen bonds > dipole\\u2013dipole > London dispersion (van der Waals). Individually weak, but collectively they determine macromolecular structure and binding specificity.",
        hint: "Ionic > H-bond > dipole > dispersion.",
      },
      {
        front: "Define denaturation and list common causes.",
        back: "Denaturation is the loss of a protein's secondary, tertiary, and quaternary structure (not primary), abolishing function. Causes include heat, extreme pH, urea/detergents (disrupt H-bonds and hydrophobic interactions), and heavy metals or reducing agents (break disulfides).",
        hint: "Shape lost, sequence intact, function gone.",
      },
      {
        front: "What is the role of cysteine in protein structure?",
        back: "Cysteine's thiol (\\u2013SH) side chains can be oxidized to form disulfide bonds (covalent S\\u2013S bridges) between two cysteines, stabilizing tertiary and quaternary structure, especially in extracellular and secreted proteins.",
        hint: "Two \\u2013SH groups oxidize to a covalent S\\u2013S bridge.",
      },
      {
        front: "Worked example: an amino acid has pKa(COOH) = 2.0 and pKa(NH3+) = 9.0. What is its pI and its charge at pH 7?",
        back: "$pI = \\\\frac{2.0 + 9.0}{2} = 5.5$. At pH 7 (above pI), the molecule carries a net negative charge because the carboxyl is deprotonated (\\u2013) and the amino group is mostly still protonated (+), giving roughly neutral-to-negative\\u2014net slightly negative since pH > pI.",
        hint: "pH above pI \\u2192 net negative charge.",
      },
      {
        front: "What distinguishes a fibrous protein from a globular protein?",
        back: "Fibrous proteins (e.g., collagen, keratin) are elongated, insoluble, and structural. Globular proteins (e.g., enzymes, hemoglobin) are compact, water-soluble, and functional (catalysis, transport, signaling).",
        hint: "Fibrous = structural/insoluble; globular = functional/soluble.",
      },
      {
        front: "Why are buffers most effective near their pKa?",
        back: "A buffer resists pH change best when $[A^-] \\\\approx [HA]$ (within about one pH unit of pKa), because it then has ample conjugate acid and base to neutralize added base or acid. Far from pKa, one component is depleted and buffering fails.",
        hint: "Best buffering within \\u00b11 pH unit of pKa.",
      },
    ],
  },
  {
    slug: "mcat-molecular-biology-biotechnology-mcat",
    cards: [
      {
        front: "State the central dogma of molecular biology and the enzymes involved.",
        back: "DNA \\u2192 (transcription, RNA polymerase) \\u2192 RNA \\u2192 (translation, ribosome) \\u2192 protein. Reverse transcriptase (in retroviruses) can also make DNA from RNA, an exception to the one-way flow.",
        hint: "Replicate, transcribe, translate; reverse transcriptase is the exception.",
      },
      {
        front: "How does PCR amplify DNA, and what are the three temperature steps?",
        back: "PCR exponentially copies a DNA target using primers, dNTPs, and heat-stable Taq polymerase. Cycle steps: denaturation (~95\\u00b0C, separate strands), annealing (~50\\u201365\\u00b0C, primers bind), extension (~72\\u00b0C, Taq synthesizes new strands). After n cycles you have ~2\\u207f copies.",
        hint: "Denature, anneal, extend; ~2\\u207f amplification.",
      },
      {
        front: "What is gel electrophoresis and how do molecules separate?",
        back: "Gel electrophoresis separates nucleic acids or proteins by size using an electric field. DNA/RNA (negatively charged) migrate toward the positive electrode; smaller fragments move faster/farther through the gel matrix. Bands are visualized with dyes.",
        hint: "Negative DNA runs to +; small = fast/far.",
      },
      {
        front: "Explain Southern, Northern, and Western blotting (what each detects).",
        back: "Southern blot detects DNA (probe), Northern blot detects RNA (probe), Western blot detects protein (antibody). Mnemonic: 'SNoW DRoP' \\u2014 Southern/DNA, Northern/RNA, Western/Protein.",
        hint: "SNoW DRoP: S-DNA, N-RNA, W-Protein.",
      },
      {
        front: "What is a restriction enzyme and what is a 'sticky end'?",
        back: "A restriction endonuclease cuts DNA at specific palindromic recognition sequences. Staggered cuts leave single-stranded overhangs ('sticky ends') that base-pair with complementary ends, allowing fragments from different sources to be joined by DNA ligase.",
        hint: "Cuts palindromes; overhangs let pieces join.",
      },
      {
        front: "Describe the basic steps of recombinant DNA cloning into a plasmid.",
        back: "Cut both the gene of interest and a plasmid vector with the same restriction enzyme, mix so complementary sticky ends anneal, seal with DNA ligase to form recombinant plasmid, then transform into bacteria, which replicate the insert as they divide.",
        hint: "Cut, anneal, ligate, transform, amplify.",
      },
      {
        front: "How does CRISPR-Cas9 edit genes?",
        back: "A guide RNA (gRNA) directs the Cas9 nuclease to a complementary DNA target, where Cas9 makes a double-strand break. The cell repairs it by non-homologous end joining (often disrupting the gene) or homology-directed repair (inserting a desired sequence).",
        hint: "gRNA targets, Cas9 cuts, cell repairs (knockout or knock-in).",
      },
      {
        front: "What is the difference between cDNA and genomic DNA?",
        back: "cDNA (complementary DNA) is made from mRNA by reverse transcriptase and lacks introns/regulatory regions\\u2014only exons (coding sequence). Genomic DNA contains introns, exons, and regulatory elements. cDNA is used to express eukaryotic genes in bacteria.",
        hint: "cDNA = exons only (no introns); from mRNA.",
      },
      {
        front: "Explain transcription regulation in prokaryotes using the lac operon.",
        back: "The lac operon is transcribed only when lactose is present and glucose is low. Lactose (allolactose) inactivates the repressor (positive control by induction); low glucose raises cAMP, which activates CAP to boost transcription. Both conditions maximize expression.",
        hint: "Lactose ON removes repressor; low glucose ON via CAP/cAMP.",
      },
      {
        front: "What are the roles of promoters, enhancers, and silencers?",
        back: "A promoter is the DNA region where RNA polymerase binds to start transcription. Enhancers are distant sequences that increase transcription (via activator proteins and DNA looping); silencers decrease it. They regulate gene expression levels.",
        hint: "Promoter = start site; enhancer up, silencer down.",
      },
      {
        front: "How does the Sanger (dideoxy) DNA sequencing method work?",
        back: "Sanger sequencing uses chain-terminating dideoxynucleotides (ddNTPs) that lack a 3'-OH, halting elongation. Fragments of all lengths are produced, separated by size via electrophoresis, and the fluorescent terminators read off the sequence.",
        hint: "ddNTPs lack 3'-OH \\u2192 chain termination at each base.",
      },
      {
        front: "What is RNA interference (RNAi / siRNA) and what does it do?",
        back: "RNAi uses small double-stranded RNAs (siRNA or miRNA) that, via the RISC complex, bind complementary mRNA and trigger its degradation or block translation, silencing gene expression post-transcriptionally. It is used to knock down specific genes.",
        hint: "Small RNAs silence mRNA after transcription.",
      },
      {
        front: "Common trap: why must eukaryotic mRNA be processed before translation?",
        back: "Pre-mRNA must have a 5' cap and poly-A tail added and introns spliced out (leaving only exons) before export and translation. Alternative splicing lets one gene produce multiple protein isoforms\\u2014so one gene \\u2260 only one protein.",
        hint: "Cap, tail, splice; alternative splicing = many proteins per gene.",
      },
    ],
  },
  {
    slug: "mcat-general-chemistry-acid-base-equilibrium-mcat",
    cards: [
      {
        front: "Give the Bronsted\\u2013Lowry and Lewis definitions of acids and bases.",
        back: "Bronsted\\u2013Lowry: an acid is a proton (H\\u207a) donor; a base is a proton acceptor. Lewis: an acid is an electron-pair acceptor; a base is an electron-pair donor. Lewis is the most general definition.",
        hint: "Bronsted = protons; Lewis = electron pairs.",
      },
      {
        front: "What is a conjugate acid\\u2013base pair?",
        back: "A conjugate pair differs by one proton: when an acid HA donates H\\u207a it becomes its conjugate base A\\u207b; when a base B accepts H\\u207a it becomes its conjugate acid BH\\u207a. A strong acid has a weak conjugate base, and vice versa.",
        hint: "Differ by one H\\u207a; strong acid \\u2192 weak conjugate base.",
      },
      {
        front: "Define Ka, Kb, and their relationship to Kw.",
        back: "Ka is the acid dissociation constant; Kb is the base dissociation constant. For a conjugate pair, $K_a \\\\times K_b = K_w = 1.0 \\\\times 10^{-14}$ at 25\\u00b0C. Larger Ka means a stronger acid.",
        hint: "Ka \\u00d7 Kb = Kw = 10\\u207b\\u00b9\\u2074.",
      },
      {
        front: "State the relationships among pH, pOH, [H+], and [OH-] at 25\\u00b0C.",
        back: "$pH = -\\\\log[H^+]$, $pOH = -\\\\log[OH^-]$, and $pH + pOH = 14$. Also $[H^+][OH^-] = K_w = 10^{-14}$. Neutral water has pH = 7.",
        hint: "pH + pOH = 14; product of ion concs = 10\\u207b\\u00b9\\u2074.",
      },
      {
        front: "Name the strong acids and strong bases you must memorize.",
        back: "Strong acids: HCl, HBr, HI, HNO3, H2SO4, HClO4 (and HClO3). Strong bases: hydroxides of Group 1 (LiOH, NaOH, KOH...) and heavy Group 2 (Ca(OH)2, Sr(OH)2, Ba(OH)2). All dissociate essentially completely.",
        hint: "7 strong acids; Group 1 + heavy Group 2 hydroxides.",
      },
      {
        front: "How do you find the pH of a weak acid solution given Ka and concentration?",
        back: "Set up the equilibrium HA \\u21cc H\\u207a + A\\u207b with an ICE table. Then $K_a = \\\\frac{x^2}{[HA]_0 - x}$; if Ka is small, approximate $x = \\\\sqrt{K_a \\\\cdot [HA]_0}$, where x = [H\\u207a]. Then pH = \\u2013log(x).",
        hint: "x = \\u221a(Ka\\u00b7C) for [H\\u207a] when dissociation is small.",
      },
      {
        front: "What defines a buffer and how does it resist pH change?",
        back: "A buffer is a solution of a weak acid and its conjugate base (or weak base and its conjugate acid) in comparable amounts. Added acid is neutralized by the conjugate base; added base is neutralized by the weak acid, keeping pH nearly constant.",
        hint: "Weak acid + conjugate base both present to absorb H\\u207a or OH\\u207b.",
      },
      {
        front: "Use Henderson\\u2013Hasselbalch to find a buffer's pH.",
        back: "$pH = pK_a + \\\\log\\\\left(\\\\frac{[A^-]}{[HA]}\\\\right)$. Example: equal moles of acetic acid (pKa 4.74) and acetate \\u2192 pH = 4.74 + log(1) = 4.74. Doubling [A\\u207b]/[HA] raises pH by log 2 \\u2248 0.30.",
        hint: "Equal acid/base \\u2192 pH = pKa.",
      },
      {
        front: "What happens at the equivalence point of a titration, and how does it differ by acid/base strength?",
        back: "Equivalence point: moles of added titrant exactly neutralize the analyte. Strong acid + strong base \\u2192 pH = 7. Weak acid + strong base \\u2192 pH > 7 (basic salt). Weak base + strong acid \\u2192 pH < 7 (acidic salt).",
        hint: "SA/SB = 7; WA = basic; WB = acidic at equivalence.",
      },
      {
        front: "What is the half-equivalence point and why is it useful?",
        back: "At the half-equivalence point of a weak acid titration, exactly half the acid is neutralized so $[HA] = [A^-]$, which makes pH = pKa. It is the point of maximum buffering and lets you read pKa directly from a titration curve.",
        hint: "Half neutralized \\u2192 [HA] = [A\\u207b] \\u2192 pH = pKa.",
      },
      {
        front: "How do you choose an appropriate indicator for a titration?",
        back: "Choose an indicator whose color-change range (its pKa \\u00b1 1) brackets the pH at the equivalence point. For example, phenolphthalein (changes ~8\\u201310) suits weak acid\\u2013strong base titrations where equivalence is basic.",
        hint: "Indicator pKa should be near the equivalence pH.",
      },
      {
        front: "Common trap: distinguish strong vs. concentrated, and weak vs. dilute.",
        back: "Strength refers to degree of dissociation (intrinsic property); concentration refers to amount per volume. A weak acid can be concentrated, and a strong acid can be dilute\\u2014these are independent. A strong acid fully ionizes regardless of concentration.",
        hint: "Strong = fully dissociates; concentrated = high molarity.",
      },
      {
        front: "What are amphoteric (amphiprotic) species? Give an example.",
        back: "An amphoteric species can act as either an acid or a base. Examples include water, HCO3\\u207b (bicarbonate), HSO4\\u207b, and amino acids. Bicarbonate can donate a proton (\\u2192 CO3\\u00b2\\u207b) or accept one (\\u2192 H2CO3).",
        hint: "Can donate OR accept a proton (e.g., HCO3\\u207b, H2O).",
      },
    ],
  },
  {
    slug: "mcat-cars-reasoning-fallacies-mcat",
    cards: [
      {
        front: "What is a logical fallacy, and why does it matter in CARS?",
        back: "A logical fallacy is a flaw in reasoning that makes an argument invalid or unsound even if it sounds persuasive. CARS questions often ask you to identify weaknesses in the author's argument or which choice contains a reasoning error, so recognizing fallacies is high-yield.",
        hint: "A persuasive-sounding flaw in reasoning.",
      },
      {
        front: "Define the ad hominem fallacy.",
        back: "Ad hominem attacks the person making an argument rather than the argument itself. It is fallacious because the truth of a claim is independent of who states it. Example: 'You can't trust her economics claim because she's wealthy.'",
        hint: "Attacks the arguer, not the argument.",
      },
      {
        front: "Define the straw man fallacy.",
        back: "A straw man misrepresents or oversimplifies an opponent's position into a weaker version, then refutes that distortion instead of the real argument. Watch for an author 'defeating' a claim no one actually made.",
        hint: "Distort, then knock down the weaker version.",
      },
      {
        front: "What is a false dichotomy (false dilemma)?",
        back: "A false dichotomy presents only two options as if they were the only possibilities, ignoring middle ground or alternatives. Example: 'Either we ban this entirely or chaos ensues.'",
        hint: "Only two choices offered when more exist.",
      },
      {
        front: "Define the slippery slope fallacy.",
        back: "A slippery slope claims that one small step will inevitably lead to a chain of negative consequences, without justifying the causal links. The error is asserting an unsupported chain reaction.",
        hint: "One step \\u2192 unstoppable disastrous chain (unsupported).",
      },
      {
        front: "What is circular reasoning (begging the question)?",
        back: "Circular reasoning uses the conclusion as a premise\\u2014the argument assumes what it is trying to prove. Example: 'This book is true because it says it is true.' No independent support is provided.",
        hint: "The conclusion is hidden in the premise.",
      },
      {
        front: "Distinguish correlation from causation (the cum hoc fallacy).",
        back: "Assuming that because two things occur together one causes the other ignores coincidence, reverse causation, or a confounding third variable. CARS frequently tests whether an author wrongly infers cause from mere association.",
        hint: "Co-occurrence does not prove cause.",
      },
      {
        front: "Define post hoc ergo propter hoc.",
        back: "Post hoc reasoning assumes that because event B followed event A, A must have caused B. Temporal order alone does not establish causation. Example: 'I wore my lucky socks and we won, so the socks caused the win.'",
        hint: "After this \\u2260 because of this.",
      },
      {
        front: "What is the appeal to authority (ad verecundiam) fallacy?",
        back: "It treats a claim as true simply because an authority endorses it, especially when the authority is irrelevant, biased, or outside their expertise. Legitimate expert consensus is evidence; an unqualified or improper appeal is fallacious.",
        hint: "True only because an 'expert' said so.",
      },
      {
        front: "Define the hasty generalization fallacy.",
        back: "A hasty generalization draws a broad conclusion from an insufficient or unrepresentative sample. Example: 'Two rude tourists from that country prove everyone there is rude.' Watch for sweeping claims from thin evidence.",
        hint: "Big conclusion from too little evidence.",
      },
      {
        front: "What is an appeal to emotion, and how does CARS test it?",
        back: "An appeal to emotion substitutes emotional manipulation (fear, pity, anger) for logical evidence. CARS may ask you to recognize that an author is persuading through feeling rather than supporting a claim with reasons.",
        hint: "Feelings replace evidence.",
      },
      {
        front: "Define equivocation.",
        back: "Equivocation uses a word with two different meanings as if it had one meaning, creating a misleading argument. Example: 'A feather is light; light cannot be dark; so a feather cannot be dark'\\u2014'light' shifts meaning.",
        hint: "One word, two meanings, swapped mid-argument.",
      },
      {
        front: "What is the difference between strengthening and weakening an argument (common CARS question type)?",
        back: "To strengthen, find a choice that supports a premise or the link between premises and conclusion; to weaken, find one that undermines a premise, introduces a confounder, or breaks the logical link. Identify the argument's core assumption first.",
        hint: "Target the assumption: support it (strengthen) or break it (weaken).",
      },
      {
        front: "How do you spot the unstated assumption in an argument?",
        back: "Find the gap between the stated premises and the conclusion\\u2014the missing premise that must be true for the conclusion to follow. CARS 'assumption' and 'necessary for the argument' questions hinge on identifying this hidden link.",
        hint: "The bridge the author needs but did not state.",
      },
    ],
  },
];
