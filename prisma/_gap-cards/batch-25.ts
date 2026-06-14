export const batchCards: { slug: string; cards: { front: string; back: string; hint?: string }[] }[] = [
  {
    slug: "mcat-cell-biology-cell-cycle-mcat",
    cards: [
      {
        front: "What are the four phases of the cell cycle in order?",
        back: "$G_1$ (cell growth), $S$ (DNA synthesis/replication), $G_2$ (growth and preparation for division), and $M$ (mitosis and cytokinesis). $G_1$, $S$, and $G_2$ together make up interphase.",
        hint: "G1, S, G2, M.",
      },
      {
        front: "What happens during S phase that distinguishes it from the rest of interphase?",
        back: "DNA is replicated, so chromosome number stays the same (still diploid in humans, 46 chromosomes) but each chromosome now consists of two identical sister chromatids joined at the centromere. DNA content doubles from 2C to 4C.",
        hint: "DNA synthesis; sisters form.",
      },
      {
        front: "What is the $G_0$ phase?",
        back: "$G_0$ is a quiescent, non-dividing state that cells enter from $G_1$. Terminally differentiated cells (e.g., neurons, mature muscle) often reside permanently in $G_0$, while others can re-enter the cycle when stimulated.",
        hint: "Exit from the cycle.",
      },
      {
        front: "What molecules drive progression through the cell cycle, and how are they regulated?",
        back: "Cyclin-dependent kinases (CDKs) drive the cycle but are only active when bound to a specific cyclin. Cyclin levels rise and fall across the cycle; the cyclin-CDK complex phosphorylates target proteins to push the cell into the next phase.",
        hint: "CDK needs a cyclin partner.",
      },
      {
        front: "Name the three main cell-cycle checkpoints and what each monitors.",
        back: "The $G_1/S$ (restriction) checkpoint checks for DNA damage, cell size, and nutrients; the $G_2/M$ checkpoint verifies DNA has been fully and correctly replicated; the spindle (M) checkpoint ensures all chromosomes are attached to spindle fibers before anaphase.",
        hint: "G1/S, G2/M, spindle.",
      },
      {
        front: "What is the role of p53 in the cell cycle?",
        back: "p53 is a tumor-suppressor transcription factor activated by DNA damage. It arrests the cell at the $G_1/S$ checkpoint (via p21) to allow repair, and triggers apoptosis if damage is irreparable. Loss of functional p53 is common in cancers.",
        hint: "Guardian of the genome.",
      },
      {
        front: "List the phases of mitosis in order and a key event of each.",
        back: "Prophase (chromosomes condense, spindle forms), metaphase (chromosomes align at the metaphase plate), anaphase (sister chromatids separate to opposite poles), telophase (nuclear envelopes reform, chromosomes decondense). Prometaphase (nuclear envelope breaks down) is sometimes listed between prophase and metaphase.",
        hint: "PMAT.",
      },
      {
        front: "How does cytokinesis differ between animal and plant cells?",
        back: "Animal cells form a contractile ring of actin/myosin that creates a cleavage furrow pinching the cell in two. Plant cells, having a rigid cell wall, build a cell plate from vesicles that fuses to form a new wall between daughter cells.",
        hint: "Furrow vs. cell plate.",
      },
      {
        front: "What is the difference between mitosis and meiosis in outcome?",
        back: "Mitosis produces two genetically identical diploid daughter cells for growth/repair. Meiosis produces four genetically diverse haploid gametes via two divisions, with crossing over and independent assortment generating variation.",
        hint: "2 identical vs. 4 diverse.",
      },
      {
        front: "When does crossing over occur, and why does it matter?",
        back: "Crossing over occurs in prophase I of meiosis, when homologous chromosomes pair (synapsis) and exchange segments at chiasmata. It produces recombinant chromosomes, increasing genetic diversity in offspring.",
        hint: "Prophase I, homologs swap.",
      },
      {
        front: "What is nondisjunction, and what can it cause?",
        back: "Nondisjunction is the failure of homologous chromosomes (meiosis I) or sister chromatids (meiosis II or mitosis) to separate properly, producing cells with abnormal chromosome numbers (aneuploidy), such as trisomy 21 (Down syndrome).",
        hint: "Failure to separate.",
      },
      {
        front: "Common trap: do sister chromatids separate in meiosis I?",
        back: "No. In meiosis I, homologous chromosomes separate while sister chromatids stay together (reductional division, 2n to n). Sister chromatids separate in meiosis II (equational division), analogous to mitosis.",
        hint: "Homologs first, sisters second.",
      },
      {
        front: "What distinguishes apoptosis from necrosis?",
        back: "Apoptosis is programmed, controlled cell death featuring cell shrinkage, chromatin condensation, membrane blebbing, and apoptotic bodies cleared without inflammation. Necrosis is uncontrolled death from injury causing swelling, lysis, and inflammation.",
        hint: "Programmed and clean vs. messy.",
      },
    ],
  },
  {
    slug: "mcat-microbiology-antimicrobials-mcat",
    cards: [
      {
        front: "What is the difference between a bactericidal and a bacteriostatic antibiotic?",
        back: "Bactericidal agents kill bacteria directly (e.g., penicillins, fluoroquinolones), while bacteriostatic agents inhibit growth/replication so the immune system can clear them (e.g., tetracyclines, macrolides). Static drugs require a competent immune system.",
        hint: "-cidal kills, -static stalls.",
      },
      {
        front: "How do beta-lactam antibiotics (penicillins, cephalosporins) work?",
        back: "They inhibit cell wall synthesis by binding penicillin-binding proteins (transpeptidases) that cross-link peptidoglycan. The weakened wall ruptures under osmotic pressure. They are most effective against actively dividing bacteria.",
        hint: "Block cell-wall cross-linking.",
      },
      {
        front: "Why are beta-lactams generally ineffective against mycoplasma?",
        back: "Mycoplasma lack a cell wall (peptidoglycan), so a drug targeting cell wall synthesis has no target. They are also resistant to the osmotic lysis mechanism that kills wall-containing bacteria.",
        hint: "No wall, no target.",
      },
      {
        front: "What is the mechanism of action of aminoglycosides and tetracyclines?",
        back: "Both target the bacterial 30S ribosomal subunit, inhibiting protein synthesis. Aminoglycosides (e.g., gentamicin) cause misreading and are bactericidal; tetracyclines block tRNA binding to the A site and are bacteriostatic.",
        hint: "30S ribosome.",
      },
      {
        front: "Which antibiotics target the 50S ribosomal subunit?",
        back: "Macrolides (e.g., erythromycin), chloramphenicol, and clindamycin/lincosamides target the 50S subunit to block protein synthesis. Macrolides block translocation; chloramphenicol blocks peptidyl transferase.",
        hint: "Macrolides, chloramphenicol, clindamycin.",
      },
      {
        front: "How do fluoroquinolones kill bacteria?",
        back: "They inhibit DNA gyrase (topoisomerase II) and topoisomerase IV, enzymes that relieve supercoiling during DNA replication. This blocks DNA synthesis and is bactericidal (e.g., ciprofloxacin).",
        hint: "Target DNA gyrase.",
      },
      {
        front: "Why do antibiotics that target ribosomes generally spare human cells?",
        back: "Bacteria have 70S ribosomes (30S + 50S), while eukaryotic cytosolic ribosomes are 80S (40S + 60S). This structural difference allows selective toxicity. (Mitochondrial ribosomes are 70S-like, explaining some side effects.)",
        hint: "70S vs. 80S.",
      },
      {
        front: "Name four mechanisms of bacterial antibiotic resistance.",
        back: "(1) Enzymatic inactivation (e.g., beta-lactamase cleaving penicillin); (2) target modification (altered PBPs in MRSA); (3) reduced uptake/decreased permeability; (4) efflux pumps that expel the drug.",
        hint: "Destroy, alter target, keep out, pump out.",
      },
      {
        front: "How does antibiotic resistance spread between bacteria?",
        back: "Via horizontal gene transfer: conjugation (plasmid transfer through a pilus), transformation (uptake of free DNA), and transduction (phage-mediated transfer). Plasmids carrying resistance genes (R factors) are a major vehicle, especially conjugation.",
        hint: "Conjugation, transformation, transduction.",
      },
      {
        front: "What is the difference between MIC and MBC?",
        back: "MIC (minimum inhibitory concentration) is the lowest drug concentration that visibly inhibits growth. MBC (minimum bactericidal concentration) is the lowest concentration that kills 99.9% of bacteria. For bactericidal drugs, MBC is close to MIC.",
        hint: "Inhibit vs. kill threshold.",
      },
      {
        front: "Why are most antibacterials ineffective against viruses?",
        back: "Viruses lack the structures antibacterials target (cell walls, bacterial ribosomes, bacterial enzymes) and replicate using host cell machinery. Antivirals instead target viral-specific steps like reverse transcriptase, proteases, or viral polymerases.",
        hint: "Viruses use host machinery.",
      },
      {
        front: "How do antifungals like amphotericin B and azoles work?",
        back: "Amphotericin B binds ergosterol in the fungal membrane, forming pores. Azoles inhibit ergosterol synthesis (lanosterol 14-alpha-demethylase). Ergosterol (vs. cholesterol in humans) provides selective toxicity.",
        hint: "Target ergosterol.",
      },
      {
        front: "Worked example: A patient with a wall-less pathogen and a penicillin allergy needs a protein-synthesis inhibitor. Which class fits?",
        back: "A macrolide such as erythromycin or azithromycin (50S inhibitor) is appropriate. It treats wall-less organisms like Mycoplasma pneumoniae and provides an alternative to beta-lactams for penicillin-allergic patients.",
        hint: "Wall-less plus allergy means macrolide.",
      },
    ],
  },
  {
    slug: "mcat-anatomy-physiology-sensory-mcat",
    cards: [
      {
        front: "What is sensory transduction?",
        back: "Sensory transduction is the conversion of a physical or chemical stimulus (light, sound, pressure, chemicals) into an electrical signal (graded potential, then action potentials) by specialized sensory receptors.",
        hint: "Stimulus to electrical signal.",
      },
      {
        front: "Classify the major sensory receptor types by stimulus.",
        back: "Photoreceptors (light), mechanoreceptors (pressure, touch, sound, stretch), chemoreceptors (taste, smell, blood chemistry), thermoreceptors (temperature), nociceptors (pain/tissue damage), and electromagnetic/baroreceptors as specialized subtypes.",
        hint: "Light, mechanical, chemical, thermal, pain.",
      },
      {
        front: "Trace the path of light through the eye to the photoreceptors.",
        back: "Light passes through the cornea (most refraction), aqueous humor, pupil (sized by the iris), lens (fine focus via accommodation), vitreous humor, and then strikes the retina, where rods and cones transduce it.",
        hint: "Cornea, pupil, lens, retina.",
      },
      {
        front: "Compare rods and cones.",
        back: "Rods are highly sensitive, work in dim light (scotopic vision), give no color, and concentrate in the periphery. Cones need bright light (photopic vision), provide color and high acuity, and concentrate in the fovea. Three cone types detect red, green, and blue.",
        hint: "Rods dim, cones color.",
      },
      {
        front: "What happens to rhodopsin when light hits a rod?",
        back: "Light isomerizes 11-cis-retinal to all-trans-retinal, activating opsin. This triggers a G-protein (transducin) cascade that closes Na+ channels, hyperpolarizing the rod and decreasing glutamate release. Phototransduction is a hyperpolarizing response.",
        hint: "Light hyperpolarizes the rod.",
      },
      {
        front: "Trace the auditory pathway from sound wave to hair cells.",
        back: "Sound vibrates the tympanic membrane, then the ossicles (malleus, incus, stapes) amplify it, the stapes pushes the oval window, fluid waves travel through the cochlea, and the basilar membrane vibrates, bending hair cells of the organ of Corti.",
        hint: "Eardrum, ossicles, oval window, cochlea.",
      },
      {
        front: "How does the cochlea encode pitch (frequency)?",
        back: "By tonotopy: the basilar membrane is stiff/narrow at the base (responds to high frequencies) and floppy/wide at the apex (low frequencies). The location of maximal vibration encodes pitch (place theory).",
        hint: "Base = high, apex = low.",
      },
      {
        front: "Which structures detect linear acceleration vs. rotational acceleration?",
        back: "The utricle and saccule (otolith organs) of the vestibule detect linear acceleration and head position relative to gravity. The semicircular canals detect rotational (angular) acceleration via endolymph movement bending the cupula.",
        hint: "Otoliths linear, canals rotational.",
      },
      {
        front: "Compare the receptors and pathways for taste and smell.",
        back: "Both are chemoreception. Taste (gustation) uses taste buds detecting sweet, sour, salty, bitter, umami via cranial nerves VII, IX, X. Smell (olfaction) uses olfactory receptor neurons in the nasal epithelium projecting via CN I to the olfactory bulb (bypassing the thalamus).",
        hint: "Five tastes; smell skips thalamus.",
      },
      {
        front: "What is the difference between absolute threshold and difference threshold?",
        back: "Absolute threshold is the minimum stimulus intensity detectable 50% of the time. The difference threshold (just-noticeable difference, JND) is the smallest detectable change between two stimuli, described by Weber's law (constant proportional change).",
        hint: "Detection vs. discrimination.",
      },
      {
        front: "What is sensory adaptation?",
        back: "Sensory adaptation is a decrease in receptor response to a constant, unchanging stimulus over time (e.g., no longer feeling clothes on skin). It lets the nervous system filter out background and focus on changes.",
        hint: "Decreased response to constant stimulus.",
      },
      {
        front: "Define proprioception and name its receptors.",
        back: "Proprioception is the sense of body position and limb movement. Muscle spindles detect muscle stretch/length, and Golgi tendon organs detect muscle tension. Together they enable coordinated movement and balance without vision.",
        hint: "Body position sense.",
      },
      {
        front: "Common trap: where do most visual fibers synapse before the cortex?",
        back: "Most retinal ganglion axons travel via the optic nerve, partially cross at the optic chiasm, and synapse in the lateral geniculate nucleus (LGN) of the thalamus before projecting to the primary visual cortex (occipital lobe). The thalamus relays all senses except smell.",
        hint: "Thalamus (LGN) relays vision.",
      },
    ],
  },
  {
    slug: "mcat-quantitative-skills-mcat",
    cards: [
      {
        front: "How do you handle multiplication and division of numbers in scientific notation?",
        back: "Multiply or divide the coefficients and add (for multiplication) or subtract (for division) the exponents. Example: $\\frac{6 \\times 10^{8}}{2 \\times 10^{3}} = 3 \\times 10^{5}$. Adjust the coefficient back into the range $1 \\le |c| < 10$ if needed.",
        hint: "Add exponents to multiply, subtract to divide.",
      },
      {
        front: "What is the rule for significant figures in multiplication/division vs. addition/subtraction?",
        back: "For multiplication/division, the result has the same number of significant figures as the least precise factor. For addition/subtraction, the result is rounded to the least number of decimal places among the terms.",
        hint: "Sig figs for times/divide, decimals for plus/minus.",
      },
      {
        front: "Define a logarithm and the key log identity for the MCAT.",
        back: "$\\log_{10}(x) = y$ means $10^{y} = x$. Key identities: $\\log(ab) = \\log a + \\log b$, $\\log(a/b) = \\log a - \\log b$, and $\\log(a^{n}) = n\\log a$. On the MCAT, $\\log(10^{n}) = n$.",
        hint: "Log is the inverse of exponentiation.",
      },
      {
        front: "How do you estimate $\\log$ of a number like $4.5 \\times 10^{-6}$ without a calculator?",
        back: "$\\log(4.5 \\times 10^{-6}) = \\log(4.5) + (-6)$. Since $\\log(4.5)$ is between 0 and 1 (about 0.65), the answer is about $-5.35$. Use that $\\log(1)=0$ and $\\log(10)=1$ to bound the coefficient's log.",
        hint: "Split into coefficient and exponent.",
      },
      {
        front: "What is the pH/log shortcut for $[H^+] = M \\times 10^{-n}$?",
        back: "$\\mathrm{pH} = -\\log[H^+]$. If $[H^+] = M \\times 10^{-n}$, then $\\mathrm{pH} \\approx n - \\log(M)$, which lies between $n-1$ and $n$. Example: $[H^+] = 3 \\times 10^{-4}$ gives $\\mathrm{pH} \\approx 4 - 0.48 = 3.52$.",
        hint: "pH is between n-1 and n.",
      },
      {
        front: "What does a correlation coefficient r tell you, and what is its range?",
        back: "$r$ measures the strength and direction of a linear relationship between two variables, ranging from $-1$ to $+1$. Values near $\\pm 1$ indicate a strong linear relationship; near 0 indicates no linear relationship. Correlation does not imply causation.",
        hint: "Linear strength, -1 to +1.",
      },
      {
        front: "Distinguish mean, median, and mode, and when the median is preferred.",
        back: "Mean is the arithmetic average; median is the middle value when ordered; mode is the most frequent value. The median is preferred for skewed data or when outliers are present because it is resistant to extreme values.",
        hint: "Median resists outliers.",
      },
      {
        front: "What do standard deviation and standard error of the mean each measure?",
        back: "Standard deviation (SD) measures spread of individual data points around the mean. Standard error of the mean ($SEM = SD/\\sqrt{n}$) measures how precisely the sample mean estimates the population mean; it shrinks as sample size $n$ grows.",
        hint: "Spread of data vs. precision of the mean.",
      },
      {
        front: "What does a p-value represent, and what is the conventional significance threshold?",
        back: "The p-value is the probability of observing data as extreme as obtained if the null hypothesis were true. By convention, $p < 0.05$ is considered statistically significant (reject the null). A small p-value does not measure effect size.",
        hint: "Probability under the null; cutoff 0.05.",
      },
      {
        front: "What are Type I and Type II errors?",
        back: "A Type I error (false positive) is rejecting a true null hypothesis (probability = $\\alpha$). A Type II error (false negative) is failing to reject a false null hypothesis (probability = $\\beta$). Power = $1 - \\beta$.",
        hint: "I = false positive, II = false negative.",
      },
      {
        front: "How do you use dimensional analysis to convert units?",
        back: "Multiply by conversion factors written as fractions equal to 1, arranging them so unwanted units cancel and target units remain. Example: $5\\,\\mathrm{m/s} \\times \\frac{3600\\,\\mathrm{s}}{1\\,\\mathrm{h}} \\times \\frac{1\\,\\mathrm{km}}{1000\\,\\mathrm{m}} = 18\\,\\mathrm{km/h}$.",
        hint: "Cancel units like algebra.",
      },
      {
        front: "How do you approximate square roots quickly on the MCAT?",
        back: "Bracket the value between known perfect squares. Example: $\\sqrt{50}$ is between $\\sqrt{49}=7$ and $\\sqrt{64}=8$, and since 50 is just above 49, the answer is about 7.1. For $\\sqrt{a \\times 10^{2n}} = \\sqrt{a} \\times 10^{n}$.",
        hint: "Bracket with perfect squares.",
      },
      {
        front: "What does the slope of a line and a linear equation y = mx + b represent?",
        back: "In $y = mx + b$, $m$ is the slope (change in $y$ per unit change in $x$, $\\Delta y/\\Delta x$) and $b$ is the y-intercept (value of $y$ when $x=0$). Identifying which physical quantities map to slope and intercept is a common data-interpretation task.",
        hint: "Slope = rate, intercept = start value.",
      },
      {
        front: "Worked example: Estimate $\\frac{(2.0 \\times 10^{5})(3.0 \\times 10^{-2})}{6.0 \\times 10^{4}}$.",
        back: "Multiply coefficients: $2.0 \\times 3.0 = 6.0$; combine exponents: $10^{5} \\times 10^{-2} = 10^{3}$. Then divide by $6.0 \\times 10^{4}$: $\\frac{6.0 \\times 10^{3}}{6.0 \\times 10^{4}} = 1.0 \\times 10^{-1}$.",
        hint: "Coefficients first, then exponents.",
      },
    ],
  },
  {
    slug: "mcat-general-chemistry-atomic-structure-mcat",
    cards: [
      {
        front: "Define atomic number (Z) and mass number (A).",
        back: "The atomic number $Z$ is the number of protons (it defines the element). The mass number $A$ is the total number of protons plus neutrons. Number of neutrons = $A - Z$. In a neutral atom, electrons equal protons.",
        hint: "Z = protons, A = protons + neutrons.",
      },
      {
        front: "What are isotopes, and how is average atomic mass calculated?",
        back: "Isotopes are atoms of the same element with the same $Z$ but different numbers of neutrons (different $A$). Average atomic mass is the weighted average of isotope masses by their fractional natural abundances.",
        hint: "Same protons, different neutrons; weighted average.",
      },
      {
        front: "State the four quantum numbers and what each describes.",
        back: "Principal $n$ (energy level/shell, 1,2,3...); azimuthal $l$ (subshell shape, 0 to $n-1$; s,p,d,f); magnetic $m_l$ (orbital orientation, $-l$ to $+l$); spin $m_s$ ($+\\tfrac{1}{2}$ or $-\\tfrac{1}{2}$). They uniquely specify each electron.",
        hint: "n, l, m_l, m_s.",
      },
      {
        front: "State the Pauli exclusion principle.",
        back: "No two electrons in an atom can have the same set of all four quantum numbers. Consequently, each orbital holds at most two electrons, and they must have opposite spins.",
        hint: "No identical quantum number sets.",
      },
      {
        front: "State Hund's rule and the Aufbau principle.",
        back: "Aufbau: electrons fill orbitals from lowest to highest energy. Hund's rule: within a subshell, electrons singly occupy each orbital (all same spin) before pairing, minimizing electron-electron repulsion.",
        hint: "Fill low first; spread out before pairing.",
      },
      {
        front: "How many electrons fit in s, p, d, and f subshells?",
        back: "s holds 2 (1 orbital), p holds 6 (3 orbitals), d holds 10 (5 orbitals), f holds 14 (7 orbitals). Each orbital holds 2 electrons. Maximum per shell is $2n^2$.",
        hint: "2, 6, 10, 14.",
      },
      {
        front: "What are two common exceptions to the Aufbau filling order?",
        back: "Chromium ($[Ar]3d^5 4s^1$) and copper ($[Ar]3d^{10}4s^1$) promote a 4s electron to 3d because half-filled and fully-filled d subshells are extra stable.",
        hint: "Cr and Cu steal a 4s electron.",
      },
      {
        front: "Explain the Bohr model and the energy of emitted photons.",
        back: "The Bohr model places electrons in quantized circular orbits of fixed energy. When an electron drops from a higher to a lower level, it emits a photon with $E = h\\nu = \\frac{hc}{\\lambda}$ equal to the energy gap. Absorption requires the same exact energy.",
        hint: "Quantized orbits; jumps emit/absorb photons.",
      },
      {
        front: "Define the Heisenberg uncertainty principle.",
        back: "It is impossible to simultaneously know an electron's exact position and momentum with arbitrary precision: $\\Delta x \\cdot \\Delta p \\ge \\frac{h}{4\\pi}$. This underlies the probabilistic orbital (electron cloud) model.",
        hint: "Can't pin down position and momentum together.",
      },
      {
        front: "How do effective nuclear charge and shielding affect periodic trends?",
        back: "Effective nuclear charge ($Z_{eff}$) is the net positive charge felt by valence electrons after inner electrons shield them. Higher $Z_{eff}$ pulls electrons in tighter, increasing across a period and driving atomic radius down and ionization energy up.",
        hint: "Net pull on valence electrons.",
      },
      {
        front: "How do atomic radius and ionization energy trend across the periodic table?",
        back: "Atomic radius decreases left-to-right (rising $Z_{eff}$) and increases down a group (new shells). Ionization energy (energy to remove an electron) increases left-to-right and decreases down a group, the opposite of radius.",
        hint: "Radius and IE are inverse trends.",
      },
      {
        front: "Distinguish a paramagnetic from a diamagnetic atom.",
        back: "Paramagnetic atoms have at least one unpaired electron and are attracted to a magnetic field. Diamagnetic atoms have all electrons paired and are weakly repelled. Determine by writing the electron configuration/orbital diagram.",
        hint: "Unpaired = paramagnetic.",
      },
      {
        front: "Common trap: which orbital fills first, 4s or 3d?",
        back: "4s fills before 3d (lower energy when filling). However, when ionizing a transition metal, the 4s electrons are removed first because 4s becomes higher in energy once 3d is occupied. Fe2+ is $[Ar]3d^6$, not $[Ar]3d^4 4s^2$.",
        hint: "Fill 4s first, remove 4s first.",
      },
      {
        front: "Worked example: Write the ground-state electron configuration of sulfur (Z = 16).",
        back: "$1s^2 2s^2 2p^6 3s^2 3p^4$, or in noble-gas shorthand $[Ne]3s^2 3p^4$. Sulfur has 2 unpaired electrons in the 3p subshell, making it paramagnetic.",
        hint: "16 electrons; ends in 3p^4.",
      },
    ],
  },
  {
    slug: "mcat-test-day-strategy-study-planning-mcat",
    cards: [
      {
        front: "What are the four scored sections of the MCAT and their order on test day?",
        back: "1) Chemical and Physical Foundations (Chem/Phys); 2) Critical Analysis and Reasoning Skills (CARS); 3) Biological and Biochemical Foundations (Bio/Biochem); 4) Psychological, Social, and Biological Foundations (Psych/Soc). CARS is the only section with no outside-knowledge passages.",
        hint: "Chem/Phys, CARS, Bio/Biochem, Psych/Soc.",
      },
      {
        front: "How is the MCAT scored?",
        back: "Each of the four sections is scaled from 118 to 132, for a total range of 472 to 528 (midpoint 500). Scores are scaled and equated across forms, so raw difficulty differences are accounted for.",
        hint: "118-132 per section; 472-528 total.",
      },
      {
        front: "Roughly how many passages and questions does each science section contain?",
        back: "Each science section has about 59 questions: roughly 10 passages (passage-based) plus about 15 discrete (standalone) questions. CARS has 9 passages and 53 questions. Pacing should account for the discrete questions interspersed throughout.",
        hint: "About 59 questions per science section.",
      },
      {
        front: "What is a good general pacing strategy for passage-based science sections?",
        back: "Budget roughly 8-10 minutes per passage block; aim to leave a buffer. Read the passage purposefully, then answer. Do not spend more than about 90 seconds on any single question. Flag and move on rather than burning time.",
        hint: "Roughly 90 seconds per question; flag and move.",
      },
      {
        front: "How should you approach the discrete (standalone) questions?",
        back: "Treat them as quick content checks that test foundational knowledge directly. Do them efficiently to bank time for passage analysis. They are often faster points than passage questions, so do not rush past easy ones.",
        hint: "Fast content points.",
      },
      {
        front: "What is the recommended use of full-length practice exams in a study plan?",
        back: "Take full-lengths under timed, test-like conditions, then spend as much or more time reviewing every question (especially correct ones answered uncertainly) than taking the test. Use AAMC official materials, especially in the final weeks, as the best predictor of performance.",
        hint: "Simulate, then deeply review; prioritize AAMC.",
      },
      {
        front: "How should you structure content review vs. practice over a study timeline?",
        back: "Front-load content review early, then shift progressively toward practice questions and full-lengths. By the last 4-6 weeks, the majority of time should be active practice and review, not passive content reading.",
        hint: "Content first, practice-heavy at the end.",
      },
      {
        front: "Why is active recall and spaced repetition more effective than rereading?",
        back: "Active recall (retrieving information from memory, e.g., flashcards, practice questions) and spacing reviews over time produce stronger, more durable memory than passive rereading or highlighting, which create an illusion of mastery.",
        hint: "Testing effect beats rereading.",
      },
      {
        front: "What is the most efficient way to review a practice question you got wrong?",
        back: "Identify whether the error was content (knowledge gap), reasoning (misread or faulty logic), or careless. Articulate why the right answer is right AND why each wrong answer is wrong, then log the gap to revisit. Track recurring error patterns.",
        hint: "Diagnose the error type; explain every choice.",
      },
      {
        front: "What test-day logistics should you plan in advance?",
        back: "Know the test center location, bring acceptable ID, plan to arrive early, and prepare for the optional breaks (two 10-minute and one 30-minute lunch break). Pack snacks/water for breaks. You cannot bring your own scratch paper; the center provides noteboards.",
        hint: "ID, early arrival, plan the breaks.",
      },
      {
        front: "How should you use the optional breaks on test day?",
        back: "Use them: eat a quick snack for energy, hydrate, stretch, and mentally reset before the next section. Especially take the 30-minute lunch break to recover focus. Do not skip breaks; cognitive fatigue lowers later-section scores.",
        hint: "Always take the breaks to refuel.",
      },
      {
        front: "What is a smart strategy for unfamiliar or experimental-feeling questions?",
        back: "Eliminate clearly wrong choices to improve odds, make your best guess, flag it, and never leave a blank (no penalty for wrong answers). The exam includes unscored experimental questions, so a few hard items will not tank your score.",
        hint: "Eliminate, guess, flag, never blank.",
      },
      {
        front: "How can you manage test anxiety and maintain stamina across a 7+ hour exam?",
        back: "Build stamina by taking full-lengths in advance, practice controlled breathing to reset between passages, get adequate sleep the prior nights (not just the night before), and avoid heavy cramming the day before. Treat it like an endurance event.",
        hint: "Train stamina; rest; breathe.",
      },
      {
        front: "Common trap: should you change answers on review?",
        back: "Only change an answer if you have a concrete reason (misread the question, recalled a fact, spotted an error). Random second-guessing tends to hurt. Use flagging to revisit uncertain questions, but trust well-reasoned first answers.",
        hint: "Change only with a clear reason.",
      },
    ],
  },
  {
    slug: "mcat-general-chemistry-kinetics-mcat",
    cards: [
      {
        front: "Define reaction rate and write a generic rate law.",
        back: "Reaction rate is the change in concentration of reactant or product per unit time. The rate law is $\\text{rate} = k[A]^m[B]^n$, where $k$ is the rate constant, $[A]$ and $[B]$ are reactant concentrations, and $m,n$ are reaction orders determined experimentally.",
        hint: "rate = k[A]^m[B]^n.",
      },
      {
        front: "How are reaction orders (m, n) determined?",
        back: "Only experimentally, not from stoichiometric coefficients. Use the method of initial rates: change one reactant's concentration while holding others constant and observe how the rate changes (e.g., doubling $[A]$ doubles rate means first order in A).",
        hint: "From experiment, not coefficients.",
      },
      {
        front: "What is the overall order of a reaction, and how do you find it?",
        back: "The overall order is the sum of the exponents in the rate law ($m + n + ...$). For $\\text{rate} = k[A]^2[B]^1$, the overall order is 3. Order affects the units of $k$.",
        hint: "Sum of the exponents.",
      },
      {
        front: "For a zero-order reaction, what is the integrated rate law and graph that is linear?",
        back: "$[A]_t = [A]_0 - kt$. A plot of $[A]$ vs. time is linear with slope $-k$. The rate is independent of concentration. Units of $k$ are $\\mathrm{M\\,s^{-1}}$.",
        hint: "[A] vs. t is linear.",
      },
      {
        front: "For a first-order reaction, what is the integrated rate law and linear plot?",
        back: "$\\ln[A]_t = \\ln[A]_0 - kt$. A plot of $\\ln[A]$ vs. time is linear with slope $-k$. Units of $k$ are $\\mathrm{s^{-1}}$. Radioactive decay is first order.",
        hint: "ln[A] vs. t is linear.",
      },
      {
        front: "For a second-order reaction, what is the integrated rate law and linear plot?",
        back: "$\\frac{1}{[A]_t} = \\frac{1}{[A]_0} + kt$. A plot of $\\frac{1}{[A]}$ vs. time is linear with slope $+k$. Units of $k$ are $\\mathrm{M^{-1}s^{-1}}$.",
        hint: "1/[A] vs. t is linear.",
      },
      {
        front: "What is the half-life of a first-order reaction, and why is it special?",
        back: "$t_{1/2} = \\frac{0.693}{k}$. It is independent of starting concentration, so it is constant throughout the reaction (a hallmark used to identify first-order kinetics, including radioactive decay).",
        hint: "Constant, independent of [A]_0.",
      },
      {
        front: "What is activation energy ($E_a$)?",
        back: "$E_a$ is the minimum energy required for reactants to reach the transition state and proceed to products. A higher $E_a$ means a slower reaction. It is the energy barrier on a reaction coordinate diagram.",
        hint: "Energy barrier to the transition state.",
      },
      {
        front: "State the Arrhenius equation and what each term means.",
        back: "$k = A e^{-E_a/RT}$, where $k$ is the rate constant, $A$ is the frequency/pre-exponential factor (collision frequency and orientation), $E_a$ is activation energy, $R$ is the gas constant, and $T$ is absolute temperature. Higher $T$ or lower $E_a$ raises $k$.",
        hint: "k = A exp(-Ea/RT).",
      },
      {
        front: "How does a catalyst affect a reaction?",
        back: "A catalyst lowers the activation energy by providing an alternate reaction pathway, speeding both forward and reverse rates equally. It is not consumed and does NOT change $\\Delta G$, $\\Delta H$, $K_{eq}$, or the position of equilibrium.",
        hint: "Lowers Ea; does not shift equilibrium.",
      },
      {
        front: "What is the rate-determining step, and how does it relate to the rate law?",
        back: "The rate-determining step is the slowest elementary step in a mechanism; it limits the overall rate. The rate law derived from a mechanism is based on the molecularity of this slow step (using only species up to and including it).",
        hint: "Slowest step sets the pace.",
      },
      {
        front: "For an elementary step (only), how is the rate law written?",
        back: "For a single elementary step, the orders DO equal the stoichiometric coefficients (molecularity). Example: an elementary step $2A \\rightarrow B$ has $\\text{rate} = k[A]^2$. This shortcut applies only to elementary steps, never overall reactions.",
        hint: "Elementary steps use coefficients directly.",
      },
      {
        front: "What four factors increase reaction rate per collision theory?",
        back: "Higher reactant concentration (more collisions), higher temperature (more energy and frequency), increased surface area of solids, and a catalyst (lower $E_a$). Reactions require collisions with sufficient energy AND proper orientation.",
        hint: "Concentration, temperature, surface area, catalyst.",
      },
      {
        front: "Worked example: For $\\text{rate} = k[A][B]^2$, what happens to the rate if [B] triples and [A] is halved?",
        back: "Rate scales by $(\\tfrac{1}{2})^1 \\times (3)^2 = \\tfrac{1}{2} \\times 9 = 4.5$. The reaction rate increases by a factor of 4.5.",
        hint: "Apply each order as an exponent of the factor.",
      },
    ],
  },
  {
    slug: "mcat-cars-reasoning-assumptions-mcat",
    cards: [
      {
        front: "What is an assumption in the context of CARS reasoning?",
        back: "An assumption is an unstated premise that an argument requires to be true in order for its conclusion to hold. It is the logical 'gap' the author takes for granted but does not explicitly state.",
        hint: "Unstated premise an argument depends on.",
      },
      {
        front: "How do you identify the assumption an argument relies on?",
        back: "Find the conclusion and the stated evidence, then ask: 'What must be true to get from this evidence to this conclusion?' The necessary unstated link is the assumption. Test candidates with the negation technique.",
        hint: "Bridge the gap between evidence and conclusion.",
      },
      {
        front: "What is the negation test for a necessary assumption?",
        back: "Negate a candidate assumption; if the argument falls apart (the conclusion no longer follows), it was a necessary assumption. If negating it leaves the argument intact, it was not required.",
        hint: "Negate it; if the argument collapses, it's necessary.",
      },
      {
        front: "Distinguish a necessary assumption from a sufficient assumption.",
        back: "A necessary assumption must be true for the argument to work (the argument needs it). A sufficient assumption, if true, would be enough to guarantee the conclusion. CARS questions usually target necessary assumptions.",
        hint: "Needed vs. enough to prove.",
      },
      {
        front: "What distinguishes an inference question from an assumption question?",
        back: "An inference (implication) is a conclusion that follows FROM the passage (downstream of the text). An assumption is something the passage's argument depends ON but does not state (upstream, underlying the argument).",
        hint: "Inference follows from; assumption underlies.",
      },
      {
        front: "What is the single most important rule for CARS answer choices?",
        back: "Every answer must be supported by the passage itself, not outside knowledge or your opinion. CARS tests reading and reasoning, not content. If a choice requires information not in the passage, eliminate it.",
        hint: "Stay within the text.",
      },
      {
        front: "Name common wrong-answer traps in CARS reasoning questions.",
        back: "Out-of-scope (information not in passage), extreme/absolute language (always, never, all), opposite/reversal of the author's view, half-right (one clause true, one false), and distortion (subtly misstates the passage).",
        hint: "Scope, extreme, opposite, half-right, distortion.",
      },
      {
        front: "How does extreme language help you eliminate answers?",
        back: "Choices with absolute words (all, none, always, never, must, impossible) are usually too strong to be supported. Moderate, qualified language (often, may, suggests, some) is more defensible. But verify against the passage; sometimes extreme is correct if the author is extreme.",
        hint: "Absolute words are usually overstated.",
      },
      {
        front: "What is the difference between a fact (stated) and the author's opinion in a passage?",
        back: "A stated fact is explicit text; an opinion reflects the author's stance, often signaled by evaluative words (unfortunately, clearly, should, surprisingly). Strengthen/weaken and assumption questions hinge on identifying the author's argument and viewpoint.",
        hint: "Watch for evaluative signal words.",
      },
      {
        front: "How do you strengthen vs. weaken an argument in CARS?",
        back: "To strengthen, find the choice that supports or affirms a key assumption, adding evidence for the conclusion. To weaken, find the choice that attacks an assumption or provides a counterexample, breaking the link between evidence and conclusion.",
        hint: "Strengthen affirms assumptions; weaken attacks them.",
      },
      {
        front: "What is a 'reasonable inference' versus an over-reach in CARS?",
        back: "A reasonable inference stays close to the text, requiring only a small logical step the passage supports. An over-reach adds new claims, predicts beyond the scope, or assumes more than the author committed to. Favor the more cautious, text-tethered choice.",
        hint: "Small supported step, not a leap.",
      },
      {
        front: "Worked example: 'This drug reduced symptoms in the trial, so it should be approved.' What assumption is required?",
        back: "Key assumptions include: reducing symptoms is a sufficient basis for approval, the trial results generalize to the broader population, and the drug's benefits outweigh undisclosed risks/side effects. Negating any (e.g., 'symptom reduction is not enough for approval') breaks the argument.",
        hint: "Symptom relief must justify approval; results must generalize.",
      },
      {
        front: "How should you handle a question asking what the author would 'most likely agree with'?",
        back: "Anchor to the author's main thesis and tone, then pick the choice consistent with that viewpoint and supported by passage reasoning. Eliminate choices that contradict the author or extend beyond what the passage justifies.",
        hint: "Match the author's thesis and tone.",
      },
      {
        front: "Common trap: choosing a true statement that does not answer the question.",
        back: "A choice can be factually true or even stated in the passage yet still be wrong because it does not answer THIS question (e.g., it's not the assumption asked for). Always re-read the question stem and match the answer to exactly what is asked.",
        hint: "True but non-responsive is still wrong.",
      },
    ],
  },
];
