export const batchCards: { slug: string; cards: { front: string; back: string; hint?: string }[] }[] = [
  {
    slug: "mcat-molecular-biology-transcription-mcat",
    cards: [
      {
        front: "What is transcription, and in which direction does RNA polymerase read the template and synthesize RNA?",
        back: "Transcription is the synthesis of RNA from a DNA template. RNA polymerase reads the template (antisense) strand 3' to 5' and synthesizes the new RNA strand 5' to 3', adding nucleotides to the 3'-OH end.",
        hint: "Synthesis is always 5' to 3'.",
      },
      {
        front: "What is the difference between the template (antisense) strand and the coding (sense) strand?",
        back: "The template strand is read by RNA polymerase to make RNA. The coding strand has the same sequence as the mRNA (except T replaces U) and runs antiparallel to the template. mRNA sequence matches the coding strand.",
        hint: "mRNA = coding strand with U for T.",
      },
      {
        front: "In prokaryotes, what is the promoter element and where do the consensus sequences lie?",
        back: "The promoter is the DNA sequence where RNA polymerase binds. Key consensus elements are the Pribnow box at about -10 (TATAAT) and a sequence at about -35, upstream of the +1 transcription start site.",
        hint: "-10 and -35 boxes.",
      },
      {
        front: "What is the role of the sigma factor in prokaryotic transcription?",
        back: "Sigma ($\\sigma$) factor associates with core RNA polymerase to form the holoenzyme and directs it to the correct promoter sequences. After initiation, sigma dissociates and the core enzyme continues elongation.",
        hint: "Promoter recognition; then it leaves.",
      },
      {
        front: "Name the three RNA polymerases in eukaryotes and what each transcribes.",
        back: "RNA Pol I transcribes most rRNA, RNA Pol II transcribes mRNA (and most snRNA/miRNA), and RNA Pol III transcribes tRNA and 5S rRNA. Pol II is the target of the toxin alpha-amanitin.",
        hint: "I = rRNA, II = mRNA, III = tRNA.",
      },
      {
        front: "What is the TATA box and which transcription factor binds it?",
        back: "The TATA box is a eukaryotic promoter element about 25 bp upstream (-25) of the start site. TBP (TATA-binding protein, part of TFIID) binds it to nucleate assembly of the pre-initiation complex for RNA Pol II.",
        hint: "Eukaryotic analog of the Pribnow box.",
      },
      {
        front: "Describe the three steps of the 5' cap addition to eukaryotic mRNA.",
        back: "A 7-methylguanosine cap is added to the 5' end via an unusual 5'-to-5' triphosphate linkage. It protects mRNA from exonucleases, aids nuclear export, and is recognized by ribosomes for translation initiation.",
        hint: "7-methylguanosine, 5'-to-5' bond.",
      },
      {
        front: "What is the poly-A tail and what enzyme adds it?",
        back: "The poly-A tail is a string of ~100-250 adenines added to the 3' end of mRNA by poly-A polymerase after cleavage at the AAUAAA signal. It increases mRNA stability and aids export and translation.",
        hint: "Added at the AAUAAA signal.",
      },
      {
        front: "What is splicing, and what distinguishes introns from exons?",
        back: "Splicing removes introns (non-coding intervening sequences) and joins exons (expressed, retained sequences) to form mature mRNA. It is carried out by the spliceosome (snRNPs) recognizing GU...AG boundaries.",
        hint: "Exons stay; introns leave. Remember: GU-AG rule.",
      },
      {
        front: "What is alternative splicing and why is it significant?",
        back: "Alternative splicing joins different combinations of exons from a single pre-mRNA, allowing one gene to encode multiple protein isoforms. It is a major reason humans have far more proteins than genes.",
        hint: "One gene, many proteins.",
      },
      {
        front: "What is the role of an enhancer, and how does it differ from a promoter?",
        back: "An enhancer is a DNA regulatory element that increases transcription. Unlike a promoter, it can act far from the gene, in either orientation, and upstream or downstream; it works by DNA looping to contact the promoter.",
        hint: "Distance- and orientation-independent booster.",
      },
      {
        front: "In the lac operon, how do lactose (allolactose) and glucose levels control transcription?",
        back: "Allolactose binds the lac repressor, releasing it from the operator so transcription can proceed. Low glucose raises cAMP, which activates CAP to boost transcription. Maximal expression needs lactose present and glucose absent.",
        hint: "Inducible operon: needs lactose ON, glucose OFF.",
      },
      {
        front: "Common trap: which strand's sequence equals the mRNA, and how do you convert it?",
        back: "The mRNA sequence is identical to the coding (sense) strand with every thymine (T) replaced by uracil (U). If given the template strand, take the complement (antiparallel) to get the mRNA.",
        hint: "Coding strand, swap T to U.",
      },
      {
        front: "Worked example: template strand reads 3'-TACGGT-5'. What is the mRNA?",
        back: "Pair each base (A-U, T-A, G-C, C-G) reading the template 3' to 5': 3'-T A C G G T-5' gives mRNA 5'-AUGCCA-3'. The mRNA is synthesized 5' to 3' and starts with the AUG start codon here.",
        hint: "Complement and antiparallel; U replaces T.",
      },
    ],
  },
  {
    slug: "mcat-molecular-biology-translation-mcat",
    cards: [
      {
        front: "What is translation and what are its three major phases?",
        back: "Translation is the synthesis of a polypeptide from an mRNA template by the ribosome. Its three phases are initiation (ribosome assembles at the start codon), elongation (amino acids are added), and termination (release at a stop codon).",
        hint: "Initiation, elongation, termination.",
      },
      {
        front: "What is the start codon, and which amino acid does it code for in eukaryotes vs prokaryotes?",
        back: "The start codon is AUG. In eukaryotes it codes for methionine (Met); in prokaryotes it codes for N-formylmethionine (fMet). It sets the reading frame for translation.",
        hint: "AUG = Met (eukaryotes) / fMet (prokaryotes).",
      },
      {
        front: "Name the three stop codons.",
        back: "The three stop (nonsense) codons are UAA, UAG, and UGA. They are not read by tRNAs; instead release factors trigger termination and release of the polypeptide.",
        hint: "U-A-A, U-A-G, U-G-A.",
      },
      {
        front: "What are the A, P, and E sites of the ribosome?",
        back: "The A (aminoacyl) site holds the incoming charged tRNA, the P (peptidyl) site holds the tRNA bearing the growing peptide chain, and the E (exit) site holds the deacylated tRNA before it leaves.",
        hint: "A = arriving, P = peptide, E = exiting.",
      },
      {
        front: "Define a codon and the property of degeneracy in the genetic code.",
        back: "A codon is a triplet of mRNA nucleotides specifying one amino acid (or stop). The code is degenerate (redundant): most amino acids are encoded by more than one codon, often differing in the third (wobble) position.",
        hint: "Triplet; many codons per amino acid.",
      },
      {
        front: "What is the wobble hypothesis?",
        back: "Wobble explains that the third codon position can pair non-standardly with the first (5') base of the tRNA anticodon, so one tRNA can read several codons. This accounts for fewer tRNAs than codons and code degeneracy.",
        hint: "Third base flexibility in codon-anticodon pairing.",
      },
      {
        front: "What is aminoacyl-tRNA synthetase and why is it critical?",
        back: "Aminoacyl-tRNA synthetase charges a tRNA by attaching the correct amino acid to it, using ATP. There is generally one synthetase per amino acid, and its accuracy ensures fidelity of the genetic code.",
        hint: "Charges tRNA; ensures correct amino acid.",
      },
      {
        front: "What is the Shine-Dalgarno sequence and where is it found?",
        back: "The Shine-Dalgarno sequence is a purine-rich region (AGGAGG) upstream of the start codon in prokaryotic mRNA. It base-pairs with the 16S rRNA of the small ribosomal subunit to position the ribosome at AUG.",
        hint: "Prokaryotic ribosome-binding site.",
      },
      {
        front: "Which enzyme/activity forms the peptide bond, and what kind of catalyst is it?",
        back: "Peptidyl transferase, a ribozyme activity located in the large ribosomal subunit's rRNA, catalyzes peptide bond formation. Being RNA-based, it is evidence for the RNA world hypothesis.",
        hint: "It is rRNA, not protein (a ribozyme).",
      },
      {
        front: "Compare prokaryotic and eukaryotic ribosome subunit sizes.",
        back: "Prokaryotic ribosomes are 70S (30S small + 50S large subunits); eukaryotic ribosomes are 80S (40S small + 60S large). S = Svedberg units (sedimentation), which are not additive.",
        hint: "70S prokaryote, 80S eukaryote; S units don't add.",
      },
      {
        front: "What is a missense vs nonsense vs silent mutation?",
        back: "A missense mutation changes one amino acid; a nonsense mutation creates a premature stop codon (truncated protein); a silent mutation changes a codon but encodes the same amino acid (often a wobble-position change).",
        hint: "Different aa / stop / same aa.",
      },
      {
        front: "What is a frameshift mutation and why is it usually severe?",
        back: "A frameshift results from insertion or deletion of nucleotides not in multiples of three, shifting the reading frame. It alters every downstream codon, often producing a nonfunctional protein or premature stop.",
        hint: "Indel not divisible by 3 shifts the frame.",
      },
      {
        front: "Common trap: how does post-translational modification differ from translation itself?",
        back: "Post-translational modifications (e.g., phosphorylation, glycosylation, cleavage, disulfide bonds) occur after the polypeptide is made and regulate activity, folding, targeting, or stability. They are not part of synthesizing the chain.",
        hint: "Changes after the protein is built.",
      },
      {
        front: "Worked example: mRNA reads 5'-AUG GCU UAA-3'. What polypeptide is made?",
        back: "AUG = Met (start), GCU = Ala (alanine), UAA = stop. The polypeptide is Met-Ala, then translation terminates. The stop codon adds no amino acid.",
        hint: "Read in triplets from AUG to the stop.",
      },
    ],
  },
  {
    slug: "mcat-genetics-evolution-mcat",
    cards: [
      {
        front: "State the Hardy-Weinberg equations and name every variable.",
        back: "Allele frequencies: $p + q = 1$, where $p$ = frequency of the dominant allele and $q$ = frequency of the recessive allele. Genotype frequencies: $p^2 + 2pq + q^2 = 1$, where $p^2$ = homozygous dominant, $2pq$ = heterozygous, and $q^2$ = homozygous recessive.",
        hint: "p+q=1 and p^2+2pq+q^2=1.",
      },
      {
        front: "What five conditions must hold for Hardy-Weinberg equilibrium?",
        back: "No mutation, no natural selection, no migration (gene flow), random mating, and a large (effectively infinite) population to avoid genetic drift. Violating any one means allele frequencies can change.",
        hint: "No mutation/selection/migration/nonrandom mating/drift.",
      },
      {
        front: "Worked example: 16% of a population shows a recessive trait. Find p, q, and the carrier frequency.",
        back: "$q^2 = 0.16$ so $q = 0.4$ and $p = 0.6$. Carriers are heterozygotes: $2pq = 2(0.6)(0.4) = 0.48$, so 48% of the population are carriers.",
        hint: "Start from q^2 = recessive phenotype frequency.",
      },
      {
        front: "Distinguish genotype from phenotype, and dominant from recessive alleles.",
        back: "Genotype is the genetic makeup (alleles); phenotype is the observable trait. A dominant allele's effect appears in heterozygotes; a recessive allele's effect appears only when homozygous (two copies).",
        hint: "Genes vs traits; one copy vs two copies needed.",
      },
      {
        front: "Define complete dominance, incomplete dominance, and codominance.",
        back: "Complete dominance: heterozygote looks like the dominant homozygote. Incomplete dominance: heterozygote is an intermediate blend (e.g., red x white = pink). Codominance: both alleles fully expressed (e.g., AB blood type).",
        hint: "Masked / blended / both shown.",
      },
      {
        front: "In a monohybrid cross of two heterozygotes (Aa x Aa), what are the genotype and phenotype ratios?",
        back: "Genotype ratio is 1 AA : 2 Aa : 1 aa (1:2:1). Phenotype ratio is 3 dominant : 1 recessive (3:1) under complete dominance.",
        hint: "1:2:1 genotype, 3:1 phenotype.",
      },
      {
        front: "What phenotype ratio results from a dihybrid cross (AaBb x AaBb)?",
        back: "A dihybrid cross of two double heterozygotes yields a 9:3:3:1 phenotype ratio (both dominant : A dominant only : B dominant only : both recessive), assuming independent assortment.",
        hint: "9:3:3:1 for two independent traits.",
      },
      {
        front: "What is the difference between natural selection and genetic drift?",
        back: "Natural selection is non-random change in allele frequencies based on differential fitness (advantageous traits favored). Genetic drift is random change in allele frequencies due to chance, most pronounced in small populations.",
        hint: "Fitness-driven vs chance-driven.",
      },
      {
        front: "Compare directional, stabilizing, and disruptive selection.",
        back: "Directional selection favors one extreme phenotype (curve shifts). Stabilizing selection favors the intermediate and removes extremes (curve narrows). Disruptive selection favors both extremes over the middle (curve becomes bimodal).",
        hint: "Shift / narrow / split.",
      },
      {
        front: "What are the bottleneck effect and the founder effect?",
        back: "Both reduce genetic diversity via drift. A bottleneck is a sudden population crash leaving a small, non-representative survivor pool. The founder effect occurs when a few individuals start a new isolated population.",
        hint: "Crash vs new colony; both shrink the gene pool.",
      },
      {
        front: "Define inclusive fitness and explain kin selection.",
        back: "Inclusive fitness includes an individual's own reproductive success plus its effect on relatives' reproduction. Kin selection favors altruism toward relatives because they share genes (Hamilton's rule: $rB > C$).",
        hint: "Helping relatives spreads shared genes.",
      },
      {
        front: "Distinguish allopatric from sympatric speciation.",
        back: "Allopatric speciation occurs when a geographic barrier physically separates populations. Sympatric speciation occurs without geographic separation, via mechanisms like polyploidy or niche differentiation within the same area.",
        hint: "Allo = different place; sym = same place.",
      },
      {
        front: "What is the difference between analogous and homologous structures?",
        back: "Homologous structures share a common evolutionary origin but may differ in function (divergent evolution, e.g., bat wing and human arm). Analogous structures share function but not ancestry (convergent evolution, e.g., bird and insect wings).",
        hint: "Same origin vs same function.",
      },
      {
        front: "Common trap: does Hardy-Weinberg evolution require allele frequencies to stay constant?",
        back: "At Hardy-Weinberg equilibrium, allele frequencies stay constant generation to generation, meaning no evolution. Evolution (a change in allele frequencies) requires one of the five conditions to be violated.",
        hint: "Equilibrium = no evolution.",
      },
    ],
  },
  {
    slug: "mcat-genetics-evolution-immunology-mcat",
    cards: [
      {
        front: "Distinguish innate from adaptive immunity.",
        back: "Innate immunity is nonspecific, fast, and has no memory (e.g., skin, phagocytes, complement, inflammation). Adaptive immunity is antigen-specific, slower on first exposure, and forms memory (B and T lymphocytes).",
        hint: "Nonspecific/fast vs specific/memory.",
      },
      {
        front: "Compare humoral and cell-mediated immunity.",
        back: "Humoral immunity is mediated by B cells that secrete antibodies against extracellular pathogens and toxins. Cell-mediated immunity is driven by T cells (especially cytotoxic T cells) that target intracellular pathogens and infected/abnormal cells.",
        hint: "B cells/antibodies vs T cells/infected cells.",
      },
      {
        front: "What is the function of helper T cells (CD4+) vs cytotoxic T cells (CD8+)?",
        back: "Helper T cells (CD4+) recognize antigen on MHC II and release cytokines that activate B cells and other immune cells. Cytotoxic T cells (CD8+) recognize antigen on MHC I and kill infected or cancerous cells directly.",
        hint: "CD4 helps; CD8 kills. (4 binds II, 8 binds I.)",
      },
      {
        front: "Contrast MHC class I and MHC class II.",
        back: "MHC I is on all nucleated cells and presents endogenous (intracellular) antigens to CD8+ T cells. MHC II is on antigen-presenting cells (macrophages, dendritic cells, B cells) and presents exogenous antigens to CD4+ T cells.",
        hint: "I = all cells/endogenous/CD8; II = APCs/exogenous/CD4.",
      },
      {
        front: "Describe the basic structure of an antibody (immunoglobulin).",
        back: "An antibody is Y-shaped with two heavy and two light chains joined by disulfide bonds. It has two variable (Fab) antigen-binding regions and a constant (Fc) region that determines isotype and effector function.",
        hint: "2 heavy + 2 light; variable tips bind antigen.",
      },
      {
        front: "Name the five antibody isotypes and one key feature of each.",
        back: "IgG (most abundant, crosses placenta), IgM (first produced, pentamer), IgA (mucosal/secretions, breast milk), IgE (allergy and parasites, mast cells), and IgD (B-cell receptor, function less defined).",
        hint: "GAMED: G, A, M, E, D.",
      },
      {
        front: "What is clonal selection?",
        back: "Clonal selection is the process by which an antigen binds and activates only the lymphocytes with matching receptors, causing them to proliferate (clonal expansion) into effector and memory cells specific to that antigen.",
        hint: "Antigen picks and amplifies the matching clone.",
      },
      {
        front: "What generates the enormous diversity of antibodies and T-cell receptors?",
        back: "V(D)J recombination randomly rearranges variable (V), diversity (D), and joining (J) gene segments during lymphocyte development, plus junctional diversity, producing billions of unique antigen-binding specificities.",
        hint: "Random V(D)J gene segment rearrangement.",
      },
      {
        front: "What is the difference between active and passive immunity?",
        back: "Active immunity is produced by your own immune system (infection or vaccination) and creates lasting memory. Passive immunity is the transfer of preformed antibodies (e.g., across placenta, breast milk, antiserum); it is immediate but temporary with no memory.",
        hint: "You make it (lasting) vs you receive it (temporary).",
      },
      {
        front: "Distinguish a primary from a secondary immune response.",
        back: "The primary response (first exposure) is slow, with a lag and mostly IgM. The secondary response (re-exposure) is faster, stronger, and dominated by IgG, due to memory cells. This is the basis of vaccination.",
        hint: "Memory makes the second response fast and strong.",
      },
      {
        front: "What is the role of the complement system?",
        back: "Complement is a cascade of plasma proteins that enhances immunity by opsonizing pathogens (tagging for phagocytosis), recruiting inflammatory cells, and forming the membrane attack complex (MAC) to lyse cells.",
        hint: "Opsonization, inflammation, MAC lysis.",
      },
      {
        front: "Where do B cells and T cells mature?",
        back: "B cells mature in the Bone marrow; T cells mature in the Thymus. Both originate from hematopoietic stem cells in the bone marrow.",
        hint: "B = bone marrow, T = thymus.",
      },
      {
        front: "What is self-tolerance and what happens when it fails?",
        back: "Self-tolerance is the immune system's ability to not attack the body's own antigens, achieved by deleting self-reactive lymphocytes (central and peripheral tolerance). Failure leads to autoimmune disease.",
        hint: "Don't attack self; failure = autoimmunity.",
      },
      {
        front: "Common trap: which cells provide immunological memory?",
        back: "Memory B cells and memory T cells provide long-lasting memory and rapid secondary responses. Innate cells (neutrophils, macrophages) and plasma cells do not provide classic adaptive memory.",
        hint: "Memory is an adaptive (lymphocyte) feature.",
      },
    ],
  },
  {
    slug: "mcat-test-day-strategy-format-scoring-mcat",
    cards: [
      {
        front: "What are the four sections of the MCAT?",
        back: "Chem/Phys (Chemical and Physical Foundations of Biological Systems), CARS (Critical Analysis and Reasoning Skills), Bio/Biochem (Biological and Biochemical Foundations of Living Systems), and Psych/Soc (Psychological, Social, and Biological Foundations of Behavior).",
        hint: "Chem/Phys, CARS, Bio/Biochem, Psych/Soc.",
      },
      {
        front: "How is each MCAT section scored and what is the total scaled-score range?",
        back: "Each of the four sections is scaled from 118 to 132 (midpoint 125). The total combined score ranges from 472 to 528, with 500 as the midpoint.",
        hint: "118-132 per section; 472-528 total; 500 = mid.",
      },
      {
        front: "How many questions does each section have and how are they split?",
        back: "Chem/Phys, Bio/Biochem, and Psych/Soc each have 59 questions; CARS has 53. The three science sections mix passage-based and discrete (standalone) questions; CARS is entirely passage-based.",
        hint: "59/53/59/59; CARS is all passages.",
      },
      {
        front: "What does percentile rank tell you, and roughly what total corresponds to the 50th percentile?",
        back: "Percentile rank shows the percentage of test-takers you scored higher than. A total of about 500-501 is near the 50th percentile; competitive applicants typically score well above the median.",
        hint: "About 500 = roughly 50th percentile.",
      },
      {
        front: "Strategy: how should you approach passage-based science questions efficiently?",
        back: "Skim the passage for structure and key data, then answer questions, returning to specific figures/paragraphs as needed. Many questions test outside knowledge applied to the passage rather than just passage details.",
        hint: "Map the passage; questions blend recall and data.",
      },
      {
        front: "Strategy: what is the best way to handle the timing constraint?",
        back: "Budget roughly 1.5-2 minutes per question. Never leave a question blank since there is no penalty for guessing; flag tough ones, make a best guess, and move on to protect time for easier points.",
        hint: "No guessing penalty; always answer everything.",
      },
      {
        front: "Why is process of elimination especially powerful on the MCAT?",
        back: "Many MCAT questions have two plausible answers and two clearly wrong ones. Eliminating answers that are factually false, too extreme, or out of scope raises accuracy even when you are unsure of the exact answer.",
        hint: "Cut the obviously wrong to improve the odds.",
      },
      {
        front: "How should you treat experimental passages with unfamiliar content?",
        back: "Focus on the experimental design: identify the hypothesis, variables, controls, and what the data trends show. The MCAT tests reasoning about novel experiments, so you rarely need prior knowledge of the specific study.",
        hint: "Reason about design, not memorized facts.",
      },
      {
        front: "What is the total seated time and approximate length of the exam day?",
        back: "Total seated time is about 7.5 hours, including optional breaks, tutorial, and survey. Pure testing time across the four sections is about 6 hours 15 minutes.",
        hint: "~7.5 hrs seated; ~6.25 hrs testing.",
      },
      {
        front: "Common trap: what makes an answer choice 'out of scope' or 'too extreme'?",
        back: "An out-of-scope choice introduces information the passage never addresses. A too-extreme choice uses absolute words like always, never, or only when the evidence supports only a qualified claim. Both are common distractors.",
        hint: "Watch for unsupported or absolute language.",
      },
      {
        front: "Strategy: how should you use the highlight and strikethrough tools?",
        back: "Use highlight to mark key data, transitions, and the question's task; use strikethrough to eliminate wrong answer choices. These tools reduce re-reading and keep your reasoning organized under time pressure.",
        hint: "Highlight key info; strike out eliminated choices.",
      },
      {
        front: "What is a balanced approach to the night before and morning of the exam?",
        back: "Avoid heavy new studying; do light review, sleep well, eat a steady breakfast, and arrive early with required ID. Bring snacks for breaks and plan break-time fuel to sustain focus across the long day.",
        hint: "Rest and routine beat last-minute cramming.",
      },
      {
        front: "How do voided scores and retakes work conceptually?",
        back: "You can void your scores at the end before seeing them, in which case nothing is reported. Otherwise scores are released and reported to schools; retakes are limited per year and lifetime, so plan attempts carefully.",
        hint: "Void = nothing reported; retakes are limited.",
      },
      {
        front: "Worked mini-example: you have 95 minutes for 59 questions. How should you pace?",
        back: "That is about 1.6 minutes per question. Aim to be roughly one-third done by ~32 minutes and two-thirds by ~63 minutes, flagging time-sinks and guessing rather than stalling, to reserve a buffer for review.",
        hint: "~1.6 min/question; check progress at thirds.",
      },
    ],
  },
  {
    slug: "mcat-psychology-behavior-cognition-language-mcat",
    cards: [
      {
        front: "What is the difference between sensation and perception?",
        back: "Sensation is the detection of physical stimuli by sensory receptors and their conversion to neural signals (transduction). Perception is the brain's organization and interpretation of those signals into meaningful experience.",
        hint: "Detecting vs interpreting stimuli.",
      },
      {
        front: "Define absolute threshold and difference threshold (just-noticeable difference).",
        back: "The absolute threshold is the minimum stimulus intensity detectable 50% of the time. The difference threshold (JND) is the smallest change in a stimulus that can be detected; Weber's law says the JND is a constant proportion of the original stimulus.",
        hint: "Minimum to detect vs minimum change to notice.",
      },
      {
        front: "Compare classical and operant conditioning.",
        back: "Classical conditioning pairs a neutral stimulus with an unconditioned stimulus to produce a conditioned response (Pavlov). Operant conditioning changes behavior through consequences: reinforcement increases behavior and punishment decreases it (Skinner).",
        hint: "Association of stimuli vs consequences of behavior.",
      },
      {
        front: "Distinguish positive vs negative reinforcement and punishment.",
        back: "Positive means adding a stimulus; negative means removing one. Reinforcement increases behavior; punishment decreases it. Example: negative reinforcement removes an unpleasant stimulus to increase a behavior (e.g., turning off an alarm).",
        hint: "Positive/negative = add/remove; reinforce/punish = increase/decrease.",
      },
      {
        front: "What are the stages of memory in the information-processing model?",
        back: "Sensory memory (brief, large capacity) feeds short-term/working memory (about 7 +/- 2 items, ~15-30 seconds), which can be encoded into long-term memory (vast, durable) through rehearsal and elaboration.",
        hint: "Sensory -> short-term/working -> long-term.",
      },
      {
        front: "Differentiate explicit (declarative) and implicit (nondeclarative) memory.",
        back: "Explicit memory is consciously recalled and includes semantic (facts) and episodic (events) memory. Implicit memory is unconscious and includes procedural skills and conditioned responses.",
        hint: "Knowing that (conscious) vs knowing how (unconscious).",
      },
      {
        front: "What are Piaget's four stages of cognitive development?",
        back: "Sensorimotor (0-2, object permanence), preoperational (2-7, egocentrism, lacks conservation), concrete operational (7-11, conservation and logic on concrete items), and formal operational (12+, abstract and hypothetical reasoning).",
        hint: "Sensorimotor, preoperational, concrete, formal.",
      },
      {
        front: "Name the components and rules of language structure.",
        back: "Phonemes are the smallest sound units; morphemes are the smallest meaning units; semantics is meaning; syntax/grammar governs word order. Together they let us produce and understand language.",
        hint: "Sounds, meaning-units, meaning, structure.",
      },
      {
        front: "What does the Whorfian (linguistic relativity) hypothesis claim?",
        back: "Linguistic relativity proposes that the language one speaks shapes or influences how one thinks and perceives the world. The strong version (language determines thought) is largely rejected; weaker influence is supported.",
        hint: "Language influences thought.",
      },
      {
        front: "Contrast Broca's and Wernicke's areas.",
        back: "Broca's area (frontal lobe) controls speech production; damage causes Broca's (expressive, non-fluent) aphasia. Wernicke's area (temporal lobe) governs language comprehension; damage causes Wernicke's (fluent but nonsensical) aphasia.",
        hint: "Broca = production; Wernicke = comprehension.",
      },
      {
        front: "What are heuristics, and how do the availability and representativeness heuristics differ?",
        back: "Heuristics are mental shortcuts for quick decisions. Availability bases judgments on how easily examples come to mind; representativeness judges probability by how closely something matches a prototype, often ignoring base rates.",
        hint: "Ease of recall vs fit to a stereotype.",
      },
      {
        front: "Define confirmation bias and the fixation problem-solving obstacle.",
        back: "Confirmation bias is the tendency to seek or favor information that supports existing beliefs. Fixation is the inability to view a problem from a fresh angle, including mental set (using past strategies) and functional fixedness.",
        hint: "Favoring beliefs vs being stuck on one approach.",
      },
      {
        front: "What are the main theories of emotion (James-Lange, Cannon-Bard, Schachter-Singer)?",
        back: "James-Lange: emotion follows physiological arousal. Cannon-Bard: arousal and emotion occur simultaneously and independently. Schachter-Singer (two-factor): emotion arises from arousal plus a cognitive label of the situation.",
        hint: "Arousal-first / simultaneous / arousal + cognitive label.",
      },
      {
        front: "Common trap: is reinforcement schedule type linked to learning speed or resistance to extinction?",
        back: "Variable-ratio schedules produce the highest, most extinction-resistant response rates (like slot machines). Continuous reinforcement produces fast learning but rapid extinction. Don't confuse fast acquisition with persistence.",
        hint: "Variable ratio = persistent; continuous = quick but fragile.",
      },
    ],
  },
  {
    slug: "mcat-cars-reasoning-argument-structure-mcat",
    cards: [
      {
        front: "In a CARS argument, how do you distinguish the conclusion from the premises?",
        back: "The conclusion is the main claim the author wants you to accept; premises are the reasons or evidence supporting it. Ask: 'What is the author trying to prove, and what supports it?' Indicator words like 'therefore' precede conclusions; 'because' precedes premises.",
        hint: "Conclusion = the point; premises = the support.",
      },
      {
        front: "What is the difference between a main idea and a supporting detail?",
        back: "The main idea is the central thesis or overall point of the passage. Supporting details are specific facts, examples, or evidence that develop or illustrate the main idea but are not the passage's central purpose.",
        hint: "Thesis vs the evidence under it.",
      },
      {
        front: "How do you identify an author's tone or attitude?",
        back: "Look at connotative word choice, qualifiers, and emphasis. Tone reflects the author's feeling toward the subject (e.g., critical, admiring, skeptical, ambivalent). Avoid extreme tone labels unless strongly supported by emotionally charged language.",
        hint: "Read the loaded words; avoid extremes.",
      },
      {
        front: "What is an assumption in an argument, and why does it matter on CARS?",
        back: "An assumption is an unstated premise the argument needs to be valid. CARS often asks what the author must believe for the conclusion to hold; identifying the gap between stated evidence and conclusion reveals the assumption.",
        hint: "The unstated link the argument depends on.",
      },
      {
        front: "What does it mean to 'strengthen' or 'weaken' an argument?",
        back: "Strengthening adds support that makes the conclusion more likely (often by confirming an assumption). Weakening introduces information that makes the conclusion less likely (often by attacking an assumption or providing a counterexample).",
        hint: "Support the assumption vs attack it.",
      },
      {
        front: "How should you handle an 'inference' (implication) question?",
        back: "Choose what must be true based on the passage, not what is merely possible or what you personally believe. Stay close to the text; the correct inference is a small logical step from stated information, not a large leap.",
        hint: "Must be true, small step, text-based.",
      },
      {
        front: "What is the function of transition and signal words in tracking structure?",
        back: "Transitions reveal logical relationships: 'however/but/yet' signal contrast or a shift, 'therefore/thus' signal conclusions, 'for example' signals support, and 'moreover/furthermore' signal continuation. They map how ideas connect.",
        hint: "Contrast, conclusion, example, addition.",
      },
      {
        front: "What is a common trap with answer choices that are 'true but irrelevant'?",
        back: "An answer can be factually true or even stated in the passage yet not answer the specific question asked. Always match the choice to the exact task (main idea, tone, function, inference), not just to passage facts.",
        hint: "True does not mean it answers the question.",
      },
      {
        front: "How do you analyze the function of a particular sentence or paragraph?",
        back: "Ask what role it plays in the argument: does it introduce a thesis, provide evidence, raise a counterargument, qualify a claim, or transition? Function questions test purpose, not content, so describe the job the text does.",
        hint: "Ask 'what is this doing,' not 'what does it say.'",
      },
      {
        front: "What distinguishes a counterargument from the author's own position?",
        back: "A counterargument is an opposing view the author raises, often to refute or qualify it. Watch for concession phrases like 'critics claim' or 'some argue,' which signal a view the author may then push back against.",
        hint: "'Some argue...' often precedes a view to be rebutted.",
      },
      {
        front: "Why are extreme or absolute answer choices usually wrong on CARS?",
        back: "Words like 'always,' 'never,' 'all,' 'none,' or 'must' make a choice easy to disprove and rarely match a nuanced humanities passage. Moderate, qualified choices ('often,' 'suggests,' 'tends to') are more frequently correct.",
        hint: "Moderate wording beats absolutes.",
      },
      {
        front: "How do you evaluate an analogy or 'apply the author's reasoning' question?",
        back: "Abstract the author's underlying principle, then find the answer that matches that structure in a new context, even if the surface topic differs. The correct choice mirrors the relationship or logic, not the specific subject matter.",
        hint: "Match the logic, not the topic.",
      },
      {
        front: "What should you do when two answer choices seem correct?",
        back: "Find the discriminating detail: one choice is usually too broad, too narrow, too extreme, or slightly off-scope. Reread the exact question and eliminate the choice that overreaches or misses part of the task.",
        hint: "Spot the word that makes one choice overreach.",
      },
      {
        front: "Worked mini-example: 'Many praise the policy, but its long-term costs are ignored.' What is the author's stance?",
        back: "The 'but' signals contrast: the author concedes others' praise yet emphasizes overlooked costs. The author's stance is skeptical or critical of the policy, not approving. The structure (concession then pivot) reveals the real position.",
        hint: "The clause after 'but' carries the author's view.",
      },
    ],
  },
  {
    slug: "mcat-cars-passages-humanities-mcat",
    cards: [
      {
        front: "What subject areas fall under CARS humanities passages?",
        back: "Humanities CARS passages draw from fields like philosophy, ethics, literature, art and art history, music theory, cultural studies, history, and religious studies. No prior content knowledge is required; everything needed is in the passage.",
        hint: "Philosophy, art, literature, ethics, history.",
      },
      {
        front: "How should you read a dense philosophy passage under time pressure?",
        back: "Read for the argument's skeleton: identify the central claim, the key terms being defined, and how the reasoning moves. Don't get bogged down in every abstract sentence; grasp the logical flow and return for details when questioned.",
        hint: "Track the argument, not every abstraction.",
      },
      {
        front: "What is a useful strategy for passages with unfamiliar terminology?",
        back: "Treat unfamiliar terms as placeholders defined by context. The passage almost always explains specialized vocabulary; locate the definition or example near the first use rather than relying on outside knowledge.",
        hint: "The passage defines its own jargon.",
      },
      {
        front: "Why must you avoid bringing in outside knowledge on CARS humanities passages?",
        back: "CARS tests reasoning about the given text, not what you know. Correct answers must be supported by the passage, so prior beliefs about a philosopher or artwork can mislead you toward unsupported choices.",
        hint: "Answer from the passage, not your background.",
      },
      {
        front: "How do you track an author's evolving argument across multiple paragraphs?",
        back: "Note each paragraph's purpose and how it relates to the previous one (extends, contrasts, qualifies, or concludes). Watch for pivots signaled by transitions; the author's final position often emerges after considering and refining earlier points.",
        hint: "Summarize each paragraph's job and its link.",
      },
      {
        front: "What is the difference between a descriptive and an evaluative claim in a humanities passage?",
        back: "A descriptive claim states what is the case (e.g., 'the artist used muted colors'). An evaluative claim makes a judgment of value or quality (e.g., 'the work is profound'). Distinguishing them clarifies what the author is actually arguing.",
        hint: "What is vs what is good/bad.",
      },
      {
        front: "How do you handle passages presenting multiple competing viewpoints?",
        back: "Map each viewpoint and attribute it to its source, keeping the author's own stance separate from cited views. Questions often test whether you can tell which idea belongs to whom and where the author ultimately stands.",
        hint: "Track who says what; isolate the author's view.",
      },
      {
        front: "What does a 'primary purpose' question ask, and how do you answer it?",
        back: "It asks why the author wrote the passage overall (to argue, critique, explain, compare, etc.). Choose the choice that captures the whole passage's goal, not just one paragraph; eliminate choices that are too narrow or too broad.",
        hint: "Pick the goal of the entire passage.",
      },
      {
        front: "How should you interpret figurative or metaphorical language in literature passages?",
        back: "Interpret metaphors and imagery in light of the surrounding context and the author's overall point, not literally. Ask what idea or feeling the figurative language conveys and how it advances the passage's theme.",
        hint: "Read figures of speech for meaning, not literally.",
      },
      {
        front: "Common trap: choosing the answer with words copied directly from the passage. Why is it risky?",
        back: "Test-makers often craft wrong answers using familiar passage wording to bait you, while the correct answer paraphrases the idea. Match the meaning, not the vocabulary, and verify the choice truly answers the question.",
        hint: "Matching words can be a decoy.",
      },
      {
        front: "How do you determine an author's attitude toward a competing view they present?",
        back: "Look at the language framing that view: dismissive words ('naive,' 'misguided') signal disagreement, while neutral or approving language signals acceptance. Concession phrases followed by 'however' usually mean the author will reject or qualify the view.",
        hint: "The framing words reveal approval or critique.",
      },
      {
        front: "What is the best approach to ethics passages that present moral dilemmas?",
        back: "Identify the ethical framework or principle the author applies (e.g., consequences vs duties vs virtue), follow how they reason from it, and answer based on the author's logic rather than your own moral intuitions.",
        hint: "Follow the author's ethical reasoning, not yours.",
      },
      {
        front: "How do you pace yourself across CARS passages to finish on time?",
        back: "With 53 questions across 9 passages in 90 minutes, budget about 10 minutes per passage. Don't over-invest in a single hard passage; secure points on accessible passages first and return to difficult ones if time allows.",
        hint: "About 10 minutes per passage.",
      },
      {
        front: "Worked mini-example: an author calls a rival theory 'elegant yet ultimately hollow.' What is their attitude?",
        back: "The phrase concedes a virtue ('elegant') then pivots with 'yet ultimately hollow' to a decisive criticism. The author's attitude is critical or dismissive of the theory's substance, despite acknowledging its surface appeal.",
        hint: "The praise is a setup for the real criticism.",
      },
    ],
  },
];
