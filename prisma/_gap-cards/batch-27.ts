export const batchCards: { slug: string; cards: { front: string; back: string; hint?: string }[] }[] = [
  {
    slug: "mcat-anatomy-physiology-mcat",
    cards: [
      {
        front: "What are the three types of muscle tissue, and which are striated vs. voluntary?",
        back: "Skeletal (striated, voluntary, multinucleated), cardiac (striated, involuntary, single nucleus, intercalated discs), and smooth (non-striated, involuntary, single nucleus). Only skeletal is under voluntary control.",
        hint: "Striation = sarcomere organization; voluntary = somatic control.",
      },
      {
        front: "Trace the path of blood through the heart starting from the vena cavae.",
        back: "Vena cavae to right atrium to tricuspid valve to right ventricle to pulmonary valve to pulmonary arteries to lungs to pulmonary veins to left atrium to mitral (bicuspid) valve to left ventricle to aortic valve to aorta.",
        hint: "Right side handles deoxygenated blood; left side oxygenated.",
      },
      {
        front: "What is the role of the SA node, and how does the cardiac conduction system proceed?",
        back: "The sinoatrial (SA) node is the pacemaker that initiates each heartbeat. The impulse spreads to the AV node (delays signal), then bundle of His, bundle branches, and Purkinje fibers, triggering ventricular contraction.",
        hint: "SA to AV to His to Purkinje.",
      },
      {
        front: "Distinguish the sympathetic and parasympathetic divisions of the autonomic nervous system.",
        back: "Sympathetic mediates fight-or-flight (increases heart rate, dilates pupils, inhibits digestion; thoracolumbar origin). Parasympathetic mediates rest-and-digest (slows heart, stimulates digestion; craniosacral origin, mostly via the vagus nerve).",
        hint: "Sympathetic = expend energy; parasympathetic = conserve.",
      },
      {
        front: "What is the functional unit of the kidney, and what are its main segments?",
        back: "The nephron. Key parts: glomerulus and Bowman's capsule (filtration), proximal convoluted tubule (bulk reabsorption), loop of Henle (establishes medullary osmotic gradient), distal convoluted tubule, and collecting duct (hormone-regulated water/salt balance).",
        hint: "Filter, reabsorb, secrete, concentrate.",
      },
      {
        front: "How do ADH and aldosterone differ in their effects on the nephron?",
        back: "ADH (vasopressin) increases water reabsorption by inserting aquaporins in the collecting duct, concentrating urine. Aldosterone increases $Na^+$ reabsorption (and $K^+$ secretion) in the distal tubule/collecting duct, with water following osmotically.",
        hint: "ADH = water directly; aldosterone = sodium then water.",
      },
      {
        front: "Describe gas exchange direction at the alveoli and at the systemic tissues.",
        back: "At the alveoli, $O_2$ diffuses from air into blood and $CO_2$ diffuses out (blood to air). At systemic tissues, $O_2$ diffuses from blood into cells and $CO_2$ diffuses from cells into blood. Movement always follows partial-pressure gradients.",
        hint: "Gases move down partial-pressure gradients.",
      },
      {
        front: "What is the sliding filament model of muscle contraction?",
        back: "Myosin heads bind actin and pull the thin filaments toward the sarcomere center, shortening the sarcomere. ATP detaches myosin; $Ca^{2+}$ binding troponin moves tropomyosin to expose actin binding sites. The filaments themselves do not shorten.",
        hint: "Z-lines come closer; H-zone and I-band shrink.",
      },
      {
        front: "What roles do the liver play in digestion and homeostasis? Name three.",
        back: "Produces bile (emulsifies fats), regulates blood glucose (glycogen storage, gluconeogenesis), detoxifies drugs/ammonia (urea cycle), synthesizes plasma proteins (albumin, clotting factors). Bile is stored/concentrated in the gallbladder.",
        hint: "Metabolic hub plus exocrine bile.",
      },
      {
        front: "Which hormones do the alpha and beta cells of the pancreas secrete, and what do they do?",
        back: "Beta cells secrete insulin, which lowers blood glucose (promotes uptake and glycogen synthesis). Alpha cells secrete glucagon, which raises blood glucose (promotes glycogenolysis and gluconeogenesis). They are antagonistic.",
        hint: "Insulin in when sugar is high; glucagon raises low sugar.",
      },
      {
        front: "What is the difference between endocrine and exocrine glands?",
        back: "Endocrine glands secrete hormones directly into the bloodstream (ductless). Exocrine glands secrete products through ducts to a surface or cavity (e.g., sweat, salivary, pancreatic digestive enzymes). The pancreas is both.",
        hint: "Ducts = exocrine; bloodstream = endocrine.",
      },
      {
        front: "Worked example: A patient's GFR drops sharply after blood loss. Why, and what compensates?",
        back: "Hemorrhage lowers blood volume/pressure, reducing glomerular hydrostatic pressure and thus filtration. The renin-angiotensin-aldosterone system activates: renin raises angiotensin II (vasoconstriction) and aldosterone (Na+/water retention), restoring blood pressure and GFR.",
        hint: "Low pressure to low filtration to RAAS.",
      },
      {
        front: "Compare the three muscle fiber/germ layer origins relevant to the digestive tract wall.",
        back: "The gut wall has mucosa, submucosa, muscularis externa (smooth muscle for peristalsis), and serosa. Smooth muscle of the gut derives from mesoderm; the epithelial lining derives from endoderm.",
        hint: "Endoderm = lining; mesoderm = muscle.",
      },
    ],
  },
  {
    slug: "mcat-sociology-structure-stratification-mcat",
    cards: [
      {
        front: "Define social stratification.",
        back: "The hierarchical arrangement of individuals and groups into layers (strata) based on unequal distribution of resources such as wealth, power, and prestige. It tends to be persistent across generations.",
        hint: "Society arranged in unequal layers.",
      },
      {
        front: "Distinguish caste systems, class systems, and meritocracies.",
        back: "Caste systems are closed (status ascribed at birth, no mobility). Class systems are partly open (status based on birth and achievement, mobility possible). A meritocracy distributes status purely by individual merit (an idealized type rarely fully realized).",
        hint: "Closed vs. open systems of mobility.",
      },
      {
        front: "What is the difference between ascribed and achieved status?",
        back: "Ascribed status is assigned at birth or involuntarily (e.g., race, sex, family of origin). Achieved status is earned through effort or choice (e.g., occupation, education level). A master status dominates how others perceive a person.",
        hint: "Born with vs. earned.",
      },
      {
        front: "Define social mobility and its main types.",
        back: "Social mobility is movement between social positions. Types: intragenerational (within one's lifetime), intergenerational (between generations), vertical (up or down), and horizontal (same status level). Structural mobility results from societal changes affecting many people at once.",
        hint: "Intra/inter, vertical/horizontal, structural.",
      },
      {
        front: "What are the three classic dimensions of Max Weber's stratification model?",
        back: "Class (economic position/wealth), status (social prestige/honor), and party/power (ability to achieve goals despite resistance). Weber argued stratification is multidimensional, not just economic as in pure Marxist analysis.",
        hint: "Class, status, power.",
      },
      {
        front: "Define socioeconomic status (SES) and its components.",
        back: "SES is a measure of an individual's or family's social standing, typically combining income, education, and occupation. It strongly predicts health, life expectancy, and access to opportunity.",
        hint: "Income + education + occupation.",
      },
      {
        front: "What is the difference between absolute and relative poverty?",
        back: "Absolute poverty is the inability to meet basic survival needs (food, shelter, clothing). Relative poverty is having significantly fewer resources than the societal average, even if basic needs are met. The poverty line operationalizes absolute poverty.",
        hint: "Survival threshold vs. comparison to others.",
      },
      {
        front: "Define social reproduction and cultural capital (Bourdieu).",
        back: "Social reproduction is the perpetuation of social inequality across generations through institutions like family and education. Cultural capital refers to non-financial assets (knowledge, tastes, credentials) that confer advantage and are passed down within classes.",
        hint: "Inequality reproduced; non-money advantages.",
      },
      {
        front: "What is intersectionality?",
        back: "The concept (Crenshaw) that multiple social identities (e.g., race, gender, class) intersect to create overlapping and compounded systems of discrimination or privilege that cannot be understood by examining each axis in isolation.",
        hint: "Overlapping identities compound inequality.",
      },
      {
        front: "Distinguish prestige, power, and the global stratification terms (core vs. periphery).",
        back: "Prestige is the respect/honor attached to a status; power is the ability to influence others. In world-systems theory, core nations dominate economically, periphery nations supply cheap labor/raw materials, and semi-periphery nations are intermediate.",
        hint: "Weberian prestige/power; Wallerstein core/periphery.",
      },
      {
        front: "What is the difference between meritocracy as ideology and structural barriers to mobility?",
        back: "Meritocracy as ideology claims success reflects only effort/talent, but structural barriers (discrimination, unequal schools, social capital gaps) limit mobility regardless of individual effort, helping reproduce existing stratification.",
        hint: "Belief in fair effort vs. real obstacles.",
      },
      {
        front: "Common trap: How do upward and downward structural mobility differ from individual mobility?",
        back: "Individual mobility reflects one person's change relative to others. Structural mobility results from large-scale economic/societal shifts (e.g., industrialization creating many new jobs) that move whole groups, independent of personal effort.",
        hint: "Society moves the group vs. you move yourself.",
      },
      {
        front: "Define the meritocratic and conflict views of stratification (Davis-Moore vs. conflict theory).",
        back: "The Davis-Moore thesis (functionalism) argues stratification is functional because it ensures the most qualified fill the most important roles via unequal rewards. Conflict theory counters that stratification benefits the powerful and perpetuates inequality.",
        hint: "Necessary/functional vs. exploitative.",
      },
    ],
  },
  {
    slug: "mcat-molecular-biology-mcat",
    cards: [
      {
        front: "State the central dogma of molecular biology.",
        back: "Genetic information flows DNA to RNA to protein: DNA is transcribed into mRNA, which is translated into protein. Reverse transcription (RNA to DNA) is an exception used by retroviruses.",
        hint: "Replication, transcription, translation.",
      },
      {
        front: "What enzyme synthesizes DNA, and why is replication semiconservative and antiparallel?",
        back: "DNA polymerase synthesizes new strands $5'$ to $3'$. Replication is semiconservative because each daughter duplex has one parental and one new strand. The leading strand is continuous; the lagging strand is made in Okazaki fragments because the two strands are antiparallel.",
        hint: "Polymerase only adds to the 3' end.",
      },
      {
        front: "Distinguish prokaryotic and eukaryotic transcription/translation coupling.",
        back: "In prokaryotes, transcription and translation are coupled in the cytoplasm (translation begins before mRNA is finished). In eukaryotes they are separated: transcription in the nucleus, then mRNA processing, then translation in the cytoplasm.",
        hint: "No nucleus = coupled; nucleus = separated.",
      },
      {
        front: "Name the three major eukaryotic mRNA processing steps.",
        back: "(1) 5' 7-methylguanosine cap (protects mRNA, aids ribosome binding), (2) 3' poly-A tail (stability/export), and (3) splicing (introns removed, exons joined by the spliceosome). Alternative splicing increases protein diversity.",
        hint: "Cap, tail, splice.",
      },
      {
        front: "What is the role of the lac operon, and how is it regulated?",
        back: "The lac operon lets E. coli metabolize lactose. The lac repressor blocks transcription when lactose is absent; allolactose inactivates the repressor (induction). Low glucose raises cAMP, which binds CAP to boost transcription (positive control). It is an inducible operon.",
        hint: "Repressor off + CAP on = transcription.",
      },
      {
        front: "Read the codon table concept: what makes the genetic code degenerate and unambiguous?",
        back: "Degenerate (redundant) means multiple codons can encode the same amino acid (the wobble position is the 3rd base). Unambiguous means each codon specifies only one amino acid. Start codon is AUG (Met); stop codons are UAA, UAG, UGA.",
        hint: "Many-to-one but never one-to-many.",
      },
      {
        front: "Compare missense, nonsense, silent, and frameshift mutations.",
        back: "Missense changes one amino acid; nonsense creates a premature stop codon; silent changes the codon but not the amino acid (degeneracy). Frameshift (insertion/deletion not a multiple of 3) shifts the reading frame, usually altering all downstream residues.",
        hint: "Frameshifts are usually the most disruptive.",
      },
      {
        front: "What are the roles of the three ribosomal sites (A, P, E)?",
        back: "A (aminoacyl) site accepts the incoming charged tRNA; P (peptidyl) site holds the tRNA bearing the growing polypeptide; E (exit) site releases the deacylated tRNA. tRNA moves A to P to E during elongation.",
        hint: "Arrive, Peptide bond, Exit.",
      },
      {
        front: "How do restriction enzymes and PCR work, conceptually?",
        back: "Restriction enzymes cut DNA at specific palindromic sequences, often leaving sticky ends for cloning. PCR amplifies DNA via cycles of denaturation (~95C), annealing of primers (~55C), and extension by Taq polymerase (~72C), doubling DNA each cycle.",
        hint: "Cut at palindromes; PCR doubles per cycle.",
      },
      {
        front: "Distinguish heterochromatin from euchromatin and the effect of histone acetylation.",
        back: "Heterochromatin is tightly packed and transcriptionally silent; euchromatin is loosely packed and active. Histone acetylation (by HATs) neutralizes positive charges, loosening DNA and promoting transcription; deacetylation (HDACs) silences genes.",
        hint: "Acetylation = open = active.",
      },
      {
        front: "What are introns and exons, and why does alternative splicing matter?",
        back: "Exons are coding/retained sequences; introns are removed during splicing. Alternative splicing joins different exon combinations from one gene, producing multiple protein isoforms, which expands proteome diversity beyond gene count.",
        hint: "Exons EXpressed; introns INterrupt.",
      },
      {
        front: "Worked example: A frameshift adds one base near the 5' end of a gene. Predict the effect.",
        back: "An early insertion of one nucleotide shifts the downstream reading frame, changing nearly every codon and typically introducing a premature stop codon. The resulting protein is usually nonfunctional or truncated, a more severe effect than a single point mutation.",
        hint: "Early frameshift = whole protein altered.",
      },
      {
        front: "Compare the roles of telomerase and DNA polymerase at chromosome ends.",
        back: "DNA polymerase cannot fully replicate the 3' end of linear chromosomes (the end-replication problem), so telomeres shorten with each division. Telomerase, a reverse transcriptase active in germ/stem/cancer cells, extends telomeres to counteract this.",
        hint: "Telomerase rebuilds end-replication losses.",
      },
    ],
  },
  {
    slug: "mcat-science-passage-strategy-figures-mcat",
    cards: [
      {
        front: "What is the recommended first move when you begin an MCAT science passage?",
        back: "Skim to identify the passage type and main goal (experiment, theory, or data) before reading deeply. Note the experimental question, variables, and where figures/tables are, so you can navigate back quickly when answering questions.",
        hint: "Orient before you immerse.",
      },
      {
        front: "How should you read a figure or graph on the MCAT?",
        back: "Read the title/caption first, then axis labels with units, then the trend or relationship, then specific data points. Identify the independent variable (x-axis) and dependent variable (y-axis) and what is being compared.",
        hint: "Caption, axes, trend, points.",
      },
      {
        front: "What is the difference between the independent and dependent variable in a described experiment?",
        back: "The independent variable is manipulated by the researcher (the presumed cause, usually x-axis). The dependent variable is measured (the response, usually y-axis). Controlled variables are held constant to isolate the effect.",
        hint: "You change the independent; you measure the dependent.",
      },
      {
        front: "How do you handle a passage with unfamiliar terminology or a novel system?",
        back: "Do not panic; the MCAT tests reasoning, not memorized jargon. Treat new terms as definitions provided in context, anchor them to familiar concepts, and rely on the passage plus core science principles to answer.",
        hint: "The passage defines its own terms.",
      },
      {
        front: "What distinguishes a 'passage-based' from a 'discrete' question, and how does strategy differ?",
        back: "Passage-based questions require integrating passage details (figures, methods, results). Discrete questions are standalone, testing background knowledge alone. For discrete questions, ignore passage context and answer from foundational science.",
        hint: "Some questions need the passage; some don't.",
      },
      {
        front: "How should you interpret error bars or confidence intervals in a figure?",
        back: "Error bars show variability/uncertainty. If error bars between two conditions overlap substantially, the difference may not be statistically significant; non-overlapping bars suggest a real difference. Do not over-claim from overlapping data.",
        hint: "Overlap suggests no clear difference.",
      },
      {
        front: "What is a common trap when a question asks what the data 'support'?",
        back: "Choose the answer most directly justified by the figure/table, not the most scientifically true statement in general. Correct facts that aren't shown by the data are traps; the data must support the specific choice.",
        hint: "Supported by THIS data, not just true.",
      },
      {
        front: "How do you identify a confounding variable in an MCAT experiment?",
        back: "A confound is an uncontrolled variable that correlates with the independent variable and could explain the result. Look for factors that differ between groups besides the manipulated one; they undermine causal claims.",
        hint: "Alternative explanation that wasn't controlled.",
      },
      {
        front: "When a question asks you to predict results of a modified experiment, what is the approach?",
        back: "Identify the established relationship in the passage (e.g., trend in the figure), then apply that relationship to the new condition. Extrapolate logically from the data trend rather than guessing from outside knowledge.",
        hint: "Apply the passage's own pattern forward.",
      },
      {
        front: "How should you allocate time across a science passage?",
        back: "Aim for roughly 8-10 minutes per passage (about 1.5 minutes per question). Read efficiently, then spend most time on questions. Flag and skip time sinks, returning if time allows.",
        hint: "Read fast, answer deliberately.",
      },
      {
        front: "What is the strategy for a question with two true-looking statements joined by 'because'?",
        back: "Evaluate each clause separately: the claim must be true, the reason must be true, AND the reason must correctly explain the claim. A true statement paired with an irrelevant true reason is still wrong.",
        hint: "Both parts true AND causally linked.",
      },
      {
        front: "Worked example: A table shows enzyme activity falling as pH rises above 7. A question asks the optimal pH. How do you answer?",
        back: "Locate the pH at which activity is highest in the table (the peak), not the highest pH listed. If activity is maximal near pH 7 and declines on both sides, the optimum is approximately 7. Read the data point, do not infer beyond it.",
        hint: "Optimum = peak activity, not extreme value.",
      },
      {
        front: "How do you avoid being misled by axis scaling (e.g., logarithmic axes)?",
        back: "Always check whether an axis is linear or logarithmic and note the units/scale before judging magnitude. A log axis compresses large ranges, so equal visual spacing represents multiplicative (not additive) changes.",
        hint: "Check the scale type first.",
      },
    ],
  },
  {
    slug: "mcat-genetics-evolution-natural-selection-mcat",
    cards: [
      {
        front: "Define natural selection and its requirements.",
        back: "Natural selection is differential reproductive success based on heritable traits. It requires variation in traits, heritability of those traits, and differential fitness (some variants reproduce more). Over generations, advantageous alleles increase in frequency.",
        hint: "Variation + heritability + differential fitness.",
      },
      {
        front: "Define biological fitness in the evolutionary sense.",
        back: "Fitness is an organism's relative reproductive success, the number of fertile offspring contributed to the next generation, not physical strength or health. Inclusive fitness also counts the reproductive success of relatives sharing genes.",
        hint: "It's about reproduction, not muscles.",
      },
      {
        front: "Compare directional, stabilizing, and disruptive selection.",
        back: "Directional selection favors one extreme phenotype (shifts the mean). Stabilizing selection favors the intermediate (reduces variance). Disruptive (diversifying) selection favors both extremes over the middle (can promote speciation).",
        hint: "One extreme / the middle / both extremes.",
      },
      {
        front: "What is the difference between sexual selection (intersexual vs. intrasexual)?",
        back: "Sexual selection favors traits that improve mating success. Intersexual selection is mate choice (e.g., peahens choosing showy peacocks). Intrasexual selection is competition within a sex (e.g., males fighting for access to mates).",
        hint: "Choosing mates vs. fighting rivals.",
      },
      {
        front: "Distinguish genetic drift from natural selection.",
        back: "Genetic drift is random change in allele frequencies due to chance, strongest in small populations (e.g., bottleneck and founder effects). Natural selection is non-random change based on fitness differences. Drift can fix even non-adaptive alleles.",
        hint: "Drift is random; selection is fitness-driven.",
      },
      {
        front: "What are the bottleneck and founder effects?",
        back: "Both are forms of genetic drift. A bottleneck effect is a drastic population reduction (e.g., disaster) that randomly alters allele frequencies. The founder effect occurs when a small group starts a new population, carrying only a subset of the original gene pool.",
        hint: "Crash vs. small new colony.",
      },
      {
        front: "Define gene flow and its effect on populations.",
        back: "Gene flow is the transfer of alleles between populations via migration and interbreeding. It tends to reduce genetic differences between populations and increase variation within them, counteracting divergence.",
        hint: "Migration mixes gene pools.",
      },
      {
        front: "Compare allopatric and sympatric speciation.",
        back: "Allopatric speciation occurs when populations are geographically separated, accumulating differences until reproductively isolated. Sympatric speciation occurs without geographic separation (e.g., polyploidy in plants, habitat/behavioral isolation in the same area).",
        hint: "Different place vs. same place.",
      },
      {
        front: "Distinguish prezygotic and postzygotic reproductive isolating mechanisms.",
        back: "Prezygotic barriers prevent mating or fertilization (temporal, habitat, behavioral, mechanical, gametic isolation). Postzygotic barriers act after fertilization (reduced hybrid viability, hybrid sterility like mules, hybrid breakdown in later generations).",
        hint: "Before vs. after the zygote forms.",
      },
      {
        front: "What is the difference between convergent and divergent evolution (and homologous vs. analogous structures)?",
        back: "Divergent evolution produces different traits from a common ancestor (homologous structures, e.g., vertebrate forelimbs). Convergent evolution produces similar traits in unrelated lineages facing similar pressures (analogous structures, e.g., bird vs. insect wings).",
        hint: "Same origin diverges; different origins converge.",
      },
      {
        front: "Compare gradualism and punctuated equilibrium.",
        back: "Gradualism proposes slow, steady accumulation of change over time. Punctuated equilibrium proposes long periods of stasis interrupted by rapid bursts of change (often tied to speciation events). Both describe tempos of evolution.",
        hint: "Steady slope vs. flat then jump.",
      },
      {
        front: "Worked example: Antibiotic kills 99% of bacteria but the population rebounds resistant. Explain via natural selection.",
        back: "Pre-existing genetic variation included rare resistant cells. The antibiotic is a selective pressure killing susceptible bacteria; resistant survivors reproduce, passing on resistance alleles. The next generation has a higher resistance frequency, this is directional selection.",
        hint: "Selection acts on existing variation, not creates it.",
      },
      {
        front: "What is balancing selection, and give the classic example?",
        back: "Balancing selection maintains multiple alleles in a population, often via heterozygote advantage. Classic example: sickle-cell trait, where heterozygotes (HbA/HbS) resist malaria while avoiding severe anemia, keeping the HbS allele present despite its cost.",
        hint: "Heterozygote advantage preserves variation.",
      },
    ],
  },
  {
    slug: "mcat-cell-biology-signaling-mcat",
    cards: [
      {
        front: "What are the four main types of intercellular signaling by distance?",
        back: "Endocrine (hormones via bloodstream, long distance), paracrine (local diffusion to nearby cells), autocrine (cell signals itself), and juxtacrine/direct contact (membrane-bound signal between adjacent cells, e.g., gap junctions). Neural signaling is a specialized fast form.",
        hint: "Far, near, self, contact.",
      },
      {
        front: "Distinguish G protein-coupled receptors (GPCRs) from receptor tyrosine kinases (RTKs).",
        back: "GPCRs are 7-transmembrane receptors that activate G proteins to modulate second messengers (cAMP, $Ca^{2+}$). RTKs dimerize and autophosphorylate tyrosine residues upon ligand binding, activating cascades like Ras/MAPK. GPCRs use intermediary G proteins; RTKs have intrinsic kinase activity.",
        hint: "GPCR = G protein middleman; RTK = built-in kinase.",
      },
      {
        front: "What is a second messenger? Name the major ones.",
        back: "A small intracellular molecule that relays and amplifies a signal from a membrane receptor. Major examples: cyclic AMP (cAMP), cyclic GMP (cGMP), $Ca^{2+}$, inositol trisphosphate ($IP_3$), and diacylglycerol (DAG).",
        hint: "Amplify the signal inside the cell.",
      },
      {
        front: "Trace the GPCR-adenylyl cyclase-PKA pathway.",
        back: "Ligand binds GPCR to activate $G_s$ to G-alpha subunit activates adenylyl cyclase to ATP becomes cAMP to cAMP activates protein kinase A (PKA) to PKA phosphorylates target proteins. $G_i$ would instead inhibit adenylyl cyclase.",
        hint: "Receptor to cyclase to cAMP to PKA.",
      },
      {
        front: "Describe the phospholipase C (PLC) / IP3 / DAG pathway.",
        back: "Ligand activates a GPCR ($G_q$), which activates PLC. PLC cleaves PIP2 into $IP_3$ and DAG. $IP_3$ releases $Ca^{2+}$ from the ER; DAG plus $Ca^{2+}$ activate protein kinase C (PKC), which phosphorylates targets.",
        hint: "PIP2 splits into IP3 (Ca release) and DAG (PKC).",
      },
      {
        front: "Why is signal amplification important in cascades?",
        back: "Each step (e.g., one receptor activating many G proteins, one enzyme making many second messengers) multiplies the response, so a few ligand molecules can produce a large cellular effect. This makes signaling highly sensitive.",
        hint: "One signal to thousands of responses.",
      },
      {
        front: "What is the difference between a ligand-gated and a voltage-gated ion channel?",
        back: "Ligand-gated (ionotropic) channels open when a chemical messenger binds (fast synaptic transmission). Voltage-gated channels open in response to membrane potential changes (e.g., propagating action potentials). Both alter ion flow and membrane potential.",
        hint: "Chemical opens one; voltage opens the other.",
      },
      {
        front: "How do steroid hormones signal differently from peptide hormones?",
        back: "Steroid (lipophilic) hormones cross the plasma membrane and bind intracellular/nuclear receptors that act as transcription factors (slow, lasting effects). Peptide (hydrophilic) hormones bind surface receptors and use second messengers (fast, short-lived effects).",
        hint: "Lipid-soluble goes inside; water-soluble stays outside.",
      },
      {
        front: "What is signal transduction termination, and why does it matter?",
        back: "Cells must turn off signals to remain responsive. Mechanisms include GTP hydrolysis by G proteins, phosphodiesterases degrading cAMP/cGMP, phosphatases removing phosphates, and receptor internalization/desensitization. Failure can cause uncontrolled growth.",
        hint: "Signals must be reset to respond again.",
      },
      {
        front: "What role does the Ras/MAPK pathway play, and why is it relevant to cancer?",
        back: "RTKs activate Ras (a small GTPase), triggering the MAPK kinase cascade that drives cell proliferation and differentiation via gene transcription. Constitutively active Ras mutations (stuck GTP-bound) cause unchecked growth, a frequent driver in cancers.",
        hint: "Growth signaling; mutated Ras = cancer.",
      },
      {
        front: "Distinguish the roles of kinases and phosphatases in signaling.",
        back: "Kinases add phosphate groups (using ATP) to proteins, often activating or modulating them. Phosphatases remove phosphate groups, reversing the modification. Together they create reversible molecular switches that control pathway activity.",
        hint: "Add vs. remove phosphate.",
      },
      {
        front: "What are gap junctions and their signaling role?",
        back: "Gap junctions are channels (connexons) directly linking adjacent cells' cytoplasm, allowing ions and small molecules to pass. They enable rapid, coordinated signaling, important in cardiac and smooth muscle synchronization.",
        hint: "Direct cytoplasmic tunnels between cells.",
      },
      {
        front: "Worked example: A drug blocks phosphodiesterase. Predict the effect on cAMP signaling.",
        back: "Phosphodiesterase degrades cAMP. Blocking it prevents cAMP breakdown, so cAMP levels stay elevated and PKA signaling is prolonged/enhanced. This is the mechanism of caffeine and some vasodilators, sustaining the downstream response.",
        hint: "No breakdown means more cAMP, longer signal.",
      },
    ],
  },
  {
    slug: "mcat-genetics-evolution-population-genetics-mcat",
    cards: [
      {
        front: "State the Hardy-Weinberg equilibrium equations and define each variable.",
        back: "Allele frequencies: $p + q = 1$, where $p$ is the dominant allele frequency and $q$ the recessive. Genotype frequencies: $p^2 + 2pq + q^2 = 1$, where $p^2$ = homozygous dominant, $2pq$ = heterozygous, $q^2$ = homozygous recessive.",
        hint: "Allele freqs sum to 1; genotype freqs sum to 1.",
      },
      {
        front: "What five conditions must hold for Hardy-Weinberg equilibrium?",
        back: "(1) No mutation, (2) no natural selection, (3) no gene flow (migration), (4) random mating, and (5) infinitely large population (no genetic drift). If all hold, allele frequencies stay constant generation to generation.",
        hint: "No mutation/selection/migration/drift; random mating.",
      },
      {
        front: "Worked example: 1 in 10,000 people has a recessive disease. Estimate the carrier frequency.",
        back: "$q^2 = 1/10000 = 0.0001$, so $q = 0.01$. Then $p = 0.99$. Carrier (heterozygote) frequency $= 2pq = 2(0.99)(0.01) = 0.0198$, about 2% of the population are carriers.",
        hint: "Take the square root of q^2 first.",
      },
      {
        front: "Why is the recessive disease frequency used to find q, not p?",
        back: "Only the homozygous recessive genotype ($q^2$) shows the recessive phenotype, so disease frequency directly equals $q^2$. You cannot observe heterozygotes phenotypically (they look like dominants), so you start from the recessive phenotype.",
        hint: "Affected = q^2 because recessive is hidden in carriers.",
      },
      {
        front: "Define gene pool and allele frequency.",
        back: "A gene pool is the total collection of alleles in a population. Allele frequency is the proportion of a specific allele among all alleles of that gene in the population. Population genetics studies how these frequencies change over time.",
        hint: "Population-level allele bookkeeping.",
      },
      {
        front: "How does genetic drift differ in small versus large populations?",
        back: "Genetic drift, random change in allele frequencies, has a much larger effect in small populations because chance events sway frequencies more. In large populations the effect is negligible, which is why Hardy-Weinberg assumes infinite size.",
        hint: "Small populations drift more.",
      },
      {
        front: "Worked example: If $p = 0.7$ for allele A, what fraction of the population is heterozygous (at equilibrium)?",
        back: "$q = 1 - 0.7 = 0.3$. Heterozygote frequency $= 2pq = 2(0.7)(0.3) = 0.42$, so 42% are heterozygous (Aa).",
        hint: "2pq with p = 0.7, q = 0.3.",
      },
      {
        front: "What does it mean if observed genotype frequencies deviate from Hardy-Weinberg predictions?",
        back: "Deviation indicates one or more equilibrium assumptions is violated, evidence of evolutionary forces such as selection, non-random mating, drift, gene flow, or mutation acting on the population.",
        hint: "Deviation means evolution is occurring.",
      },
      {
        front: "How does mutation affect allele frequencies?",
        back: "Mutation introduces new alleles and is the ultimate source of genetic variation. Its rate is typically very low per generation, so alone it changes frequencies slowly, but it supplies the raw material on which selection and drift act.",
        hint: "Slow but the origin of all variation.",
      },
      {
        front: "What is non-random (assortative) mating and its effect?",
        back: "Non-random mating occurs when individuals choose mates based on phenotype. Positive assortative mating (like with like) increases homozygosity; inbreeding similarly raises homozygosity. It changes genotype frequencies but not necessarily allele frequencies.",
        hint: "Changes genotype proportions, not always alleles.",
      },
      {
        front: "Common trap: Does Hardy-Weinberg predict that dominant alleles become more common over time?",
        back: "No. Dominance describes phenotypic expression, not frequency. Allele frequencies stay constant at equilibrium regardless of dominance; a rare dominant allele stays rare unless an evolutionary force acts on it.",
        hint: "Dominant does not mean more frequent.",
      },
      {
        front: "Worked example: In a population, 16% show a recessive trait. Find the percentage of homozygous dominant individuals.",
        back: "$q^2 = 0.16$, so $q = 0.4$ and $p = 0.6$. Homozygous dominant $= p^2 = 0.36$, so 36% are homozygous dominant. (Heterozygotes $= 2pq = 0.48$, 48%.)",
        hint: "Square root 0.16 to get q, then p^2.",
      },
      {
        front: "How do you handle Hardy-Weinberg problems with X-linked recessive traits?",
        back: "For X-linked traits, males (XY) show the trait if they carry one recessive allele, so the male trait frequency equals $q$ directly. Females need two copies, so the female trait frequency is $q^2$. This is why X-linked recessive disorders are more common in males.",
        hint: "Male frequency = q; female frequency = q^2.",
      },
    ],
  },
  {
    slug: "mcat-cars-strategy-main-idea-inference-mcat",
    cards: [
      {
        front: "What is the goal of the CARS section, and what content does it assume?",
        back: "CARS (Critical Analysis and Reasoning Skills) tests reading comprehension and reasoning using humanities/social-science passages. It requires NO outside knowledge; every answer must be grounded in the passage itself.",
        hint: "Pure reasoning, zero memorization.",
      },
      {
        front: "How do you identify the main idea of a CARS passage?",
        back: "The main idea is the author's central claim or thesis that the whole passage supports. Find it by asking what point the details collectively argue, often signaled in the introduction or conclusion and by the author's tone/emphasis.",
        hint: "What single point ties all paragraphs together?",
      },
      {
        front: "What is the difference between the main idea and the primary purpose?",
        back: "The main idea is WHAT the author argues (the thesis). The primary purpose is WHY the author wrote it / what the passage is doing (e.g., to critique, to compare, to advocate). Purpose answers often start with a verb.",
        hint: "Main idea = the claim; purpose = the function.",
      },
      {
        front: "How should you approach an inference question in CARS?",
        back: "An inference must be strongly supported by the passage but not explicitly stated. Choose the answer that follows logically and minimally from the text; avoid choices that require outside assumptions or go beyond what the passage justifies.",
        hint: "Implied but unstated, and well-supported.",
      },
      {
        front: "What is the most common wrong-answer trap in CARS inference questions?",
        back: "Extreme or out-of-scope answers. Choices with absolute words (always, never, all, none) or that introduce ideas not addressed by the passage are usually wrong. The credited answer stays within the passage's claims and tone.",
        hint: "Beware 'always/never' and outside scope.",
      },
      {
        front: "How do you determine the author's tone or attitude?",
        back: "Track evaluative language, qualifiers, and rhetorical choices. Distinguish whether the author is critical, supportive, neutral, skeptical, or ambivalent toward each idea. The correct tone answer matches the passage's actual wording, not your personal reaction.",
        hint: "Let the author's adjectives reveal attitude.",
      },
      {
        front: "What is the difference between a detail (retrieval) question and an inference question?",
        back: "A detail question asks for information explicitly stated in the passage (locate and confirm). An inference question requires logical extension beyond the literal text. For details, find the exact support; for inferences, reason one step from the text.",
        hint: "Stated vs. logically implied.",
      },
      {
        front: "How should you handle 'EXCEPT' or 'NOT' questions in CARS?",
        back: "Reverse your evaluation: three choices will be supported/true per the passage, and you must pick the one that is unsupported or false. Mark each option true/false against the passage, then select the odd one out.",
        hint: "The answer is the one that does NOT fit.",
      },
      {
        front: "What strategy helps with 'strengthen' and 'weaken' questions?",
        back: "First pinpoint the author's argument and its assumptions. A strengthener supports a key premise or conclusion; a weakener attacks an assumption or provides a counterexample. The correct choice acts directly on the argument's logic, not on a side detail.",
        hint: "Target the argument's core assumption.",
      },
      {
        front: "How do you avoid bringing in outside knowledge that hurts your CARS score?",
        back: "Answer only from what the passage states or implies, even if you disagree or know more. The MCAT rewards passage-faithful reasoning; an answer that is 'true in the real world' but unsupported by the text is wrong.",
        hint: "Passage truth beats real-world truth.",
      },
      {
        front: "What is the best way to handle a dense or boring CARS passage you don't understand?",
        back: "Focus on structure over every detail: identify the thesis, how each paragraph functions (support, contrast, example), and the author's stance. You can answer most questions from the argument's skeleton without grasping every sentence.",
        hint: "Map the structure, not every word.",
      },
      {
        front: "Worked example: A passage praises a theory's elegance but notes it lacks evidence. What is the author's likely main point?",
        back: "The author holds a qualified or ambivalent view: the theory is appealing but unproven. The credited main-idea answer captures both the admiration and the reservation, not a one-sided 'the theory is correct' or 'the theory is worthless.'",
        hint: "Mixed-tone passages need balanced answers.",
      },
      {
        front: "How do you choose between two attractive CARS answer choices?",
        back: "Find the specific phrase in the passage that supports one choice and a flaw (too extreme, out of scope, distorts the author, or partially wrong) in the other. The better answer has explicit textual support and no false element; eliminate on the weakest link.",
        hint: "Cite the line; reject on any single flaw.",
      },
    ],
  },
];
