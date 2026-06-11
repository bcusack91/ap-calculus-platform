import type { MCATPassage, MCATDiscreteQuestion } from '../types'

/**
 * Biological & Biochemical Foundations of Living Systems.
 *
 * Seven experiment-driven passages spanning enzyme/protein biochemistry,
 * molecular biology, cell signaling/transport, genetics, organ-systems
 * physiology, microbiology, and metabolism, plus six discrete items.
 *
 * Keys are verified against standard biochemistry/physiology; needsReview is
 * set only on items whose key depends on a judgment call rather than a settled
 * fact.
 */
export const BIO_BIOCHEM_PASSAGES: MCATPassage[] = [
  {
    id: 'bb-biochem-01',
    section: 'bio-biochem',
    discipline: 'biochemistry',
    title: 'Kinetics of a Bacterial Phosphatase',
    passageText:
      'Alkaline phosphatase (AP) hydrolyzes phosphate monoesters, releasing inorganic phosphate. ' +
      'Researchers purified AP from a bacterial lysate and measured its initial reaction velocity using ' +
      'p-nitrophenyl phosphate (pNPP) as substrate; hydrolysis yields p-nitrophenol, which absorbs strongly ' +
      'at 405 nm, so velocity was read as the rate of absorbance increase.\n\n' +
      'In Experiment 1, the team varied [pNPP] at saturating enzyme and fit the data to the Michaelis-Menten ' +
      'equation, obtaining a $K_m$ of 0.10 mM and a $V_{max}$ of 50 µmol/min.\n\n' +
      'In Experiment 2, they repeated the assay in the presence of a fixed concentration of inorganic phosphate, ' +
      'a product of the reaction. The apparent $K_m$ rose to 0.40 mM while $V_{max}$ was unchanged at 50 µmol/min.\n\n' +
      'In Experiment 3, they added sodium orthovanadate, a transition-state analog. The apparent $V_{max}$ fell ' +
      'and could not be restored to 50 µmol/min by adding more substrate; the apparent $K_m$ was unchanged.\n\n' +
      'The team also noted that AP requires $\\text{Zn}^{2+}$ in its active site. Treatment with the metal chelator ' +
      'EDTA abolished activity, and activity was recovered when excess $\\text{Zn}^{2+}$ was added back after EDTA ' +
      'was dialyzed out.',
    figure:
      '| Condition | Apparent $K_m$ (mM) | Apparent $V_{max}$ (µmol/min) |\n' +
      '| --- | --- | --- |\n' +
      '| Exp 1: substrate alone | 0.10 | 50 |\n' +
      '| Exp 2: + inorganic phosphate | 0.40 | 50 |\n' +
      '| Exp 3: + orthovanadate | 0.10 | 18 |',
    questions: [
      {
        question:
          'The inhibition pattern observed in Experiment 2 (increased $K_m$, unchanged $V_{max}$) is most consistent with which type of inhibition?',
        options: ['Competitive', 'Noncompetitive', 'Uncompetitive', 'Irreversible'],
        correctAnswer: 0,
        explanation:
          'A pure increase in $K_m$ with $V_{max}$ unchanged is the signature of competitive inhibition: the inhibitor competes with substrate for the active site, so more substrate is needed to reach half-maximal velocity, but a high enough [S] still reaches the original $V_{max}$. Inorganic phosphate is a product that resembles substrate, so product (competitive) inhibition fits. Noncompetitive inhibition lowers $V_{max}$ with unchanged $K_m$; uncompetitive lowers both; an irreversible inhibitor would not be overcome by substrate at all.',
        skill: 'Enzyme kinetics',
      },
      {
        question:
          'In Experiment 3, orthovanadate lowered $V_{max}$ and this could not be reversed by adding more substrate, while $K_m$ stayed at 0.10 mM. This is best classified as:',
        options: [
          'Competitive inhibition',
          'Noncompetitive inhibition',
          'Substrate activation',
          'A change in enzyme concentration',
        ],
        correctAnswer: 1,
        explanation:
          'Decreased $V_{max}$ with unchanged $K_m$ that cannot be overcome by adding substrate is classic noncompetitive inhibition: the inhibitor binds equally well to free enzyme and to the ES complex (at a site distinct from substrate competition), effectively removing a fraction of active enzyme regardless of [S]. As a transition-state analog binding tightly outside the simple competitive scheme, vanadate lowers the maximum achievable rate. Competitive inhibition (A) would raise $K_m$; substrate activation (C) and changing [E] (D) do not match an inhibitor added at fixed enzyme.',
        skill: 'Enzyme kinetics',
      },
      {
        question:
          'The recovery of activity after EDTA treatment only when excess $\\text{Zn}^{2+}$ was added back indicates that $\\text{Zn}^{2+}$ functions as:',
        options: [
          'A competitive substrate',
          'An essential cofactor',
          'An allosteric inhibitor',
          'A product of the reaction',
        ],
        correctAnswer: 1,
        explanation:
          'EDTA chelates divalent metal ions; its abolition of activity, reversed by restoring $\\text{Zn}^{2+}$, shows the metal is required for catalysis as a cofactor (specifically a catalytic metal ion in the active site). It is not consumed or produced (ruling out substrate/product) and adding it restores rather than inhibits activity (ruling out an inhibitor).',
        skill: 'Cofactors and metalloenzymes',
      },
      {
        question:
          'Why is p-nitrophenyl phosphate a convenient substrate for measuring AP activity in this assay?',
        options: [
          'It is the natural substrate of alkaline phosphatase',
          'Its hydrolysis product absorbs at 405 nm, allowing a continuous spectrophotometric rate measurement',
          'It binds $\\text{Zn}^{2+}$ and thereby activates the enzyme',
          'It is the only phosphate ester that resists hydrolysis',
        ],
        correctAnswer: 1,
        explanation:
          'The passage states that hydrolysis of pNPP releases p-nitrophenol, which absorbs strongly at 405 nm, so the rate of absorbance increase directly reports reaction velocity in a continuous (real-time) assay. This convenience is optical, not because it is the natural substrate (A is false and irrelevant), nor because it activates the enzyme (C), nor because it resists hydrolysis (D, the opposite of what is measured).',
        skill: 'Experimental design',
      },
      {
        question:
          'If the researchers wanted to determine $V_{max}$ and $K_m$ most accurately from initial-velocity data, which experimental practice is most important?',
        options: [
          'Measure velocity only at a single very low substrate concentration',
          'Measure initial rates across a range of substrate concentrations spanning below and above $K_m$',
          'Allow each reaction to proceed to completion before measuring',
          'Use a substrate concentration far below $K_m$ for every data point',
        ],
        correctAnswer: 1,
        explanation:
          'Reliable estimates of both kinetic constants require initial velocities sampled across a range of [S] that brackets $K_m$ (well below up to saturating), so the curvature of the Michaelis-Menten plot is captured. A single low [S] (A) or only sub-$K_m$ points (D) constrain $K_m$ poorly and barely sample $V_{max}$. Letting reactions go to completion (C) violates the initial-rate assumption, allowing substrate depletion and product inhibition to distort the measurement.',
        skill: 'Experimental design',
      },
    ],
  },
  {
    id: 'bb-molbio-01',
    section: 'bio-biochem',
    discipline: 'molecular biology',
    title: 'A Transcriptional Repressor Probed by Knockout and Reporter Assays',
    passageText:
      'Gene R encodes a transcription factor hypothesized to repress gene T in mammalian liver cells. To test this, ' +
      'investigators engineered cell lines and ran several assays.\n\n' +
      'First, they performed a Northern blot for the T mRNA. In wild-type (WT) cells, a faint T band appeared. In ' +
      'cells where gene R was deleted (R-knockout, R-KO), the T mRNA band was markedly more intense. Re-introducing ' +
      'a functional R gene into the R-KO cells (rescue) restored the faint band.\n\n' +
      'Second, they built a reporter construct in which the promoter of gene T drives luciferase. Luminescence ' +
      '(reporter activity) was measured in each background. Reporter activity was low in WT, high in R-KO, and low ' +
      'again in the rescue line.\n\n' +
      'Third, they ran a Western blot using an antibody against the R protein. R protein was detected in WT and ' +
      'rescue lines but absent in R-KO, confirming the knockout at the protein level. A loading-control antibody ' +
      'against actin gave equal bands in all lanes.\n\n' +
      'Finally, a chromatin immunoprecipitation (ChIP) assay using the anti-R antibody pulled down DNA from the T ' +
      'promoter region in WT cells but not from an unrelated control gene promoter.',
    figure:
      '| Cell line | T mRNA (Northern) | Luciferase reporter | R protein (Western) |\n' +
      '| --- | --- | --- | --- |\n' +
      '| Wild-type | faint | low | present |\n' +
      '| R-knockout | strong | high | absent |\n' +
      '| Rescue (R re-added) | faint | low | present |',
    questions: [
      {
        question:
          'Taken together, the Northern blot and reporter data most directly support which conclusion?',
        options: [
          'R protein activates transcription of gene T',
          'R protein represses transcription of gene T',
          'Gene T is not transcribed in any of these cells',
          'R protein stabilizes the T mRNA after transcription',
        ],
        correctAnswer: 1,
        explanation:
          'Removing R (R-KO) increased T mRNA and reporter activity, and restoring R brought both back down. Since the reporter is a promoter-driven transcriptional readout, R acts to lower transcription of T, i.e., it represses it. If R activated T (A), knockout would lower T, not raise it. Gene T is clearly transcribed (rules out C). Post-transcriptional mRNA stabilization (D) would not change the transcriptional reporter, which did change.',
        skill: 'Gene regulation',
      },
      {
        question:
          'What is the primary purpose of including the rescue (R re-added) cell line?',
        options: [
          'To serve as a negative control with no R expression',
          'To confirm that the changes seen in R-KO are specifically due to loss of R, not an off-target effect',
          'To increase the amount of T mRNA for easier detection',
          'To test whether luciferase is toxic to the cells',
        ],
        correctAnswer: 1,
        explanation:
          'A rescue (complementation) line reintroduces the deleted gene; if the knockout phenotype reverses when R is restored, the phenotype is attributable to loss of R rather than to an unrelated mutation introduced during engineering or another off-target effect. It is not a no-R negative control (A is the opposite). It does not exist to boost T (C) or to test luciferase toxicity (D).',
        skill: 'Experimental controls',
      },
      {
        question:
          'The ChIP result (anti-R antibody pulls down the T promoter but not an unrelated promoter) most strongly supports that R:',
        options: [
          'Binds RNA polymerase but not DNA',
          'Physically associates with the T promoter DNA in cells',
          'Degrades the T promoter region',
          'Is exported from the nucleus in WT cells',
        ],
        correctAnswer: 1,
        explanation:
          'ChIP crosslinks proteins to the DNA they occupy, then immunoprecipitates the protein and identifies the co-purifying DNA. Recovery of the T promoter (but not an unrelated promoter) by anti-R indicates R is bound at the T promoter in cells, consistent with direct, sequence-specific repression. It does not show binding to RNA polymerase (A), degradation of DNA (C, ChIP detects occupancy, not destruction), or nuclear export (D, which would oppose promoter binding).',
        skill: 'Molecular techniques',
      },
      {
        question:
          'The actin Western blot bands were equal across all lanes. What is the role of this measurement?',
        options: [
          'It is the experimental variable of interest',
          'It is a loading control showing equal protein was analyzed per lane',
          'It proves that gene R is functional',
          'It measures the activity of the luciferase reporter',
        ],
        correctAnswer: 1,
        explanation:
          'Actin is an abundant, constitutively expressed housekeeping protein used as a loading control: equal actin bands confirm that comparable total protein was loaded in each lane, so differences in the R band reflect true expression differences rather than uneven loading. It is not the variable of interest (A), does not assess R function (C), and is unrelated to the luciferase readout (D).',
        skill: 'Experimental controls',
      },
      {
        question:
          'Suppose a new cell line expresses a mutant R protein that folds normally and is detected on the Western blot but cannot bind DNA. What would you most likely predict for the T mRNA and luciferase reporter in this line?',
        options: [
          'T mRNA faint and reporter low, like wild-type',
          'T mRNA strong and reporter high, like the R-knockout',
          'T mRNA absent and reporter undetectable',
          'R protein absent on the Western blot',
        ],
        correctAnswer: 1,
        explanation:
          'Repression requires R to occupy the T promoter (shown by ChIP). A DNA-binding-dead mutant is present as protein but cannot dock at the promoter, so it cannot repress; functionally it phenocopies the knockout: high T mRNA and high reporter. The wild-type-like outcome (A) requires functional repression, which this mutant lacks. T is not abolished (C). The protein is still expressed and folded, so it appears on the Western blot (D is wrong).',
        skill: 'Mechanism application',
      },
    ],
  },
  {
    id: 'bb-cell-01',
    section: 'bio-biochem',
    discipline: 'cell biology',
    title: 'Glucose Uptake and a Signaling Cascade in Muscle Cells',
    passageText:
      'In skeletal muscle, insulin stimulates glucose uptake by promoting translocation of the GLUT4 transporter ' +
      'from intracellular vesicles to the plasma membrane. GLUT4 moves glucose by facilitated diffusion down its ' +
      'concentration gradient. Insulin binds the insulin receptor, a receptor tyrosine kinase, triggering a cascade ' +
      'that activates the kinase Akt, which is required for GLUT4 translocation.\n\n' +
      'Investigators measured radiolabeled glucose uptake (in arbitrary units) in cultured muscle cells under five ' +
      'conditions. Wortmannin is an inhibitor of PI3-kinase, an enzyme upstream of Akt in the insulin pathway. ' +
      'Cytochalasin B is a competitive inhibitor of GLUT-mediated transport. Phloretin blocks GLUT transporters at ' +
      'the membrane.\n\n' +
      'Basal uptake without insulin was low. Adding insulin roughly quadrupled uptake. Insulin together with ' +
      'wortmannin produced uptake similar to basal. Insulin together with cytochalasin B produced uptake far below ' +
      'basal. Replacing extracellular glucose with a non-metabolizable glucose analog still showed insulin-stimulated ' +
      'uptake, indicating transport itself does not require ATP hydrolysis at the transporter.',
    figure:
      '| Condition | Glucose uptake (arbitrary units) |\n' +
      '| --- | --- |\n' +
      '| Basal (no insulin) | 10 |\n' +
      '| + Insulin | 42 |\n' +
      '| + Insulin + wortmannin | 12 |\n' +
      '| + Insulin + cytochalasin B | 3 |\n' +
      '| Basal + phloretin | 2 |',
    questions: [
      {
        question:
          'GLUT4 transports glucose by facilitated diffusion. Which statement about this process is correct?',
        options: [
          'It moves glucose against its concentration gradient using ATP',
          'It moves glucose down its concentration gradient without direct ATP hydrolysis at the transporter',
          'It requires a sodium gradient to co-transport glucose',
          'It pumps glucose using the energy of GTP hydrolysis',
        ],
        correctAnswer: 1,
        explanation:
          'Facilitated diffusion is passive: a transporter provides a path for the solute to move down its electrochemical gradient, with no direct energy input at the transporter. The passage reinforces this, noting uptake of a non-metabolizable analog still occurs. ATP-driven pumping against a gradient (A) describes primary active transport; sodium-coupled symport (C) describes secondary active transport (e.g., SGLT); GTP-driven pumping (D) is not how GLUT works.',
        skill: 'Membrane transport',
      },
      {
        question:
          'Insulin plus wortmannin reduced uptake nearly to basal levels. This is best explained by:',
        options: [
          'Wortmannin directly blocking the GLUT4 pore',
          'Wortmannin inhibiting PI3-kinase, blocking the signaling required for GLUT4 translocation',
          'Wortmannin degrading the insulin receptor',
          'Wortmannin increasing the glucose gradient',
        ],
        correctAnswer: 1,
        explanation:
          'Wortmannin inhibits PI3-kinase, which lies upstream of Akt; Akt is required for GLUT4 to translocate to the membrane. Block that signal and insulin can no longer recruit GLUT4, so uptake stays near basal. Wortmannin is a signaling inhibitor, not a pore blocker (A, that role belongs to cytochalasin B/phloretin), it does not degrade the receptor (C), and it does not change the gradient (D).',
        skill: 'Cell signaling',
      },
      {
        question:
          'Cytochalasin B (with insulin) drove uptake below even the basal level. The most direct interpretation is that cytochalasin B:',
        options: [
          'Blocks the signaling cascade upstream of Akt',
          'Inhibits glucose transport at the GLUT transporter itself',
          'Increases the rate of glucose efflux only',
          'Activates the insulin receptor',
        ],
        correctAnswer: 1,
        explanation:
          'The passage identifies cytochalasin B as a competitive inhibitor of GLUT-mediated transport, and phloretin (also a GLUT blocker) similarly drove basal uptake below 10 (to 2). Inhibiting the transporter blocks uptake regardless of how much GLUT4 reaches the membrane, explaining the very low value even with insulin present. A signaling block (A) describes wortmannin. The drug suppresses uptake, not selectively boosts efflux (C), and does not activate the receptor (D).',
        skill: 'Membrane transport',
      },
      {
        question:
          'That insulin-stimulated uptake still occurs with a non-metabolizable glucose analog argues against which idea?',
        options: [
          'That insulin acts through a receptor tyrosine kinase',
          'That GLUT4 transport requires the cell to metabolize the glucose it imports',
          'That Akt is required for GLUT4 translocation',
          'That GLUT4 moves to the plasma membrane upon insulin signaling',
        ],
        correctAnswer: 1,
        explanation:
          'A non-metabolizable analog cannot be phosphorylated/consumed downstream, yet it is still taken up, showing transport does not depend on subsequent metabolism of the imported sugar. The experiment does not contradict the receptor mechanism (A), the requirement for Akt (C), or GLUT4 translocation (D); those remain consistent with the rest of the data.',
        skill: 'Experimental reasoning',
      },
      {
        question:
          'Suppose a patient has a mutation that constitutively activates Akt independently of insulin. In their muscle cells without insulin, you would most likely predict:',
        options: [
          'Glucose uptake near basal because insulin is absent',
          'Elevated glucose uptake even without insulin, due to GLUT4 translocation',
          'No glucose uptake under any condition',
          'Uptake that responds only to wortmannin',
        ],
        correctAnswer: 1,
        explanation:
          'Akt drives GLUT4 translocation, and constitutive Akt activity bypasses the need for upstream insulin signaling. So GLUT4 would reach the membrane and raise glucose uptake even without insulin. Basal-only uptake (A) assumes Akt is off, which the mutation prevents. Uptake is not abolished (C). Wortmannin acts upstream of Akt, so an Akt downstream of it that is already constitutively active would not be rescued or revealed by wortmannin in the way described (D).',
        skill: 'Mechanism application',
      },
    ],
  },
  {
    id: 'bb-genetics-01',
    section: 'bio-biochem',
    discipline: 'genetics',
    title: 'A Recessive Disorder in a Family Pedigree and Population',
    passageText:
      'A metabolic disorder, condition Q, follows autosomal recessive inheritance. Affected individuals are ' +
      'homozygous for a loss-of-function allele (q); carriers (Qq) and homozygous normal (QQ) individuals are ' +
      'phenotypically unaffected.\n\n' +
      'In one family, two phenotypically unaffected parents have four children, one of whom has condition Q. ' +
      'Genetic testing confirms that both parents are carriers.\n\n' +
      'Investigators also studied a large, randomly mating population in Hardy-Weinberg equilibrium for this locus. ' +
      'They determined that 1 in 2,500 newborns is affected by condition Q. They wish to use this to estimate the ' +
      'frequency of carriers in the population.\n\n' +
      'Newborn screening detects the disorder biochemically. The team confirmed that there is no selection at the ' +
      'embryonic stage, mating is random with respect to the locus, the population is large, and there is negligible ' +
      'migration and new mutation, so Hardy-Weinberg assumptions hold.',
    figure:
      'Figure 1. Parents I-1 (Qq) and I-2 (Qq) are both unaffected carriers. Their four children (II-1 through II-4) ' +
      'include one affected child (qq, shown filled) and three unaffected children (unfilled). Pedigree symbols: ' +
      'circles = female, squares = male; filled = affected with condition Q.',
    questions: [
      {
        question:
          'For the two carrier (Qq × Qq) parents, what is the probability that any given child is affected with condition Q?',
        options: ['1/2', '1/4', '3/4', '1/16'],
        correctAnswer: 1,
        explanation:
          'A Qq × Qq cross yields offspring genotypes 1 QQ : 2 Qq : 1 qq. Only qq is affected, giving a 1/4 probability per child. 1/2 (A) is the carrier-vs-affected confusion; 3/4 (C) is the probability of being unaffected; 1/16 (D) would require two independent 1/4 events.',
        skill: 'Mendelian genetics',
      },
      {
        question:
          'Among the three phenotypically unaffected children, what is the probability that a given unaffected child is a carrier (Qq)?',
        options: ['1/4', '1/3', '1/2', '2/3'],
        correctAnswer: 3,
        explanation:
          'Conditioning on being unaffected removes the qq class. Of the unaffected offspring (1 QQ : 2 Qq), 2 of 3 are carriers, so the probability is 2/3. 1/2 (C) ignores the conditioning; 1/4 and 1/3 do not match the 1:2 ratio of QQ:Qq among unaffected.',
        skill: 'Conditional probability',
      },
      {
        question:
          'Using Hardy-Weinberg with an affected frequency of 1/2,500, what is the frequency of the recessive allele q?',
        options: ['1/2,500', '1/50', '1/25', '1/100'],
        correctAnswer: 1,
        explanation:
          'Affected frequency $q^2 = 1/2500$, so $q = \\sqrt{1/2500} = 1/50 = 0.02$. 1/2,500 (A) is $q^2$ itself, not $q$; 1/25 and 1/100 are arithmetic errors in taking the square root.',
        skill: 'Population genetics',
      },
      {
        question:
          'Given $q = 1/50$, the estimated carrier (heterozygote) frequency $2pq$ in this population is approximately:',
        options: ['About 1 in 25', 'About 1 in 2,500', 'About 1 in 50', '0.5'],
        correctAnswer: 0,
        explanation:
          'With $q = 0.02$, $p = 0.98$, so $2pq = 2(0.98)(0.02) = 0.0392 \\approx 0.04$, i.e., about 1 in 25. 1 in 2,500 (B) is the affected frequency; 1 in 50 (C) is $q$ itself; 0.5 (D) is far too high.',
        skill: 'Population genetics',
      },
      {
        question:
          'Which assumption, if violated, would most directly undermine using the $q^2 = 1/2,500$ relationship to estimate allele frequencies in this population?',
        options: [
          'The disorder is autosomal rather than X-linked',
          'Mating is random with respect to the locus and there is no selection',
          'Affected individuals are detectable at birth',
          'The locus has exactly two alleles',
        ],
        correctAnswer: 1,
        explanation:
          'The $q^2$ relationship is the Hardy-Weinberg result, which assumes random mating and no selection (plus large population size, no migration, no new mutation). Violating random mating or introducing selection breaks the predicted genotype proportions. Autosomal inheritance (A) and a two-allele locus (D) are background conditions consistent with the model rather than violations, and detectability at birth (C) is about measurement, not the equilibrium assumptions.',
        skill: 'Population genetics',
      },
    ],
  },
  {
    id: 'bb-physio-01',
    section: 'bio-biochem',
    discipline: 'physiology',
    title: 'Renal Handling of Glucose and the Transport Maximum',
    passageText:
      'In the kidney, plasma is filtered at the glomerulus, and the proximal tubule reabsorbs filtered glucose using ' +
      'sodium-glucose cotransporters (SGLT), a form of secondary active transport powered by the inward sodium ' +
      'gradient established by the basolateral $\\text{Na}^+/\\text{K}^+$-ATPase. Because the number of SGLT ' +
      'transporters is finite, glucose reabsorption shows a transport maximum ($T_m$).\n\n' +
      'Investigators infused glucose to raise plasma glucose stepwise and measured, at each plasma level, the rate ' +
      'of glucose filtered, reabsorbed, and excreted in the urine.\n\n' +
      'At low plasma glucose, essentially all filtered glucose was reabsorbed and none appeared in urine. As plasma ' +
      'glucose rose past a threshold (around a plasma concentration of 300 mg/dL in this study), glucose began to ' +
      'appear in the urine. Above that threshold, the reabsorption rate plateaued at a constant value (the $T_m$), ' +
      'and any additional filtered glucose was excreted. The filtration rate of glucose rose linearly with plasma ' +
      'glucose throughout, because filtration is not saturable in this range.',
    figure:
      '| Plasma glucose (mg/dL) | Filtered (mg/min) | Reabsorbed (mg/min) | Excreted (mg/min) |\n' +
      '| --- | --- | --- | --- |\n' +
      '| 100 | 125 | 125 | 0 |\n' +
      '| 200 | 250 | 250 | 0 |\n' +
      '| 300 | 375 | 320 | 55 |\n' +
      '| 400 | 500 | 320 | 180 |\n' +
      '| 500 | 625 | 320 | 305 |',
    questions: [
      {
        question:
          'SGLT-mediated glucose reabsorption is described as secondary active transport. What does the energy for moving glucose against its gradient ultimately come from?',
        options: [
          'Direct ATP hydrolysis by SGLT itself',
          'The sodium gradient maintained by the $\\text{Na}^+/\\text{K}^+$-ATPase',
          'The glucose concentration gradient alone',
          'GTP hydrolysis at the apical membrane',
        ],
        correctAnswer: 1,
        explanation:
          'In secondary active transport, the transporter uses the energy stored in an ion gradient rather than hydrolyzing ATP itself. SGLT couples glucose uptake to sodium moving down its gradient, and that sodium gradient is built by the ATP-consuming $\\text{Na}^+/\\text{K}^+$-ATPase. So ATP is used indirectly. SGLT does not hydrolyze ATP directly (A), glucose moves against its own gradient (so C is wrong), and GTP is not the source (D).',
        skill: 'Membrane transport',
      },
      {
        question:
          'From the data, the transport maximum ($T_m$) for glucose reabsorption is approximately:',
        options: ['125 mg/min', '320 mg/min', '500 mg/min', '305 mg/min'],
        correctAnswer: 1,
        explanation:
          'The reabsorption rate climbs and then plateaus at 320 mg/min (at plasma glucose 300, 400, and 500 mg/dL), which is the saturated maximum, the $T_m$. 125 mg/min (A) is reabsorption at the lowest plasma level (not yet maximal). 500 mg/min (C) is the filtered load at 400 mg/dL. 305 mg/min (D) is the excretion rate at 500 mg/dL, not the reabsorption plateau.',
        skill: 'Data interpretation',
      },
      {
        question:
          'Why does the filtered glucose load increase linearly with plasma glucose across the entire range tested, while reabsorption plateaus?',
        options: [
          'Filtration uses the same saturable transporters as reabsorption',
          'Filtration depends on plasma concentration and is not transporter-limited in this range, whereas reabsorption is limited by a finite number of SGLT carriers',
          'Reabsorption is faster than filtration at all plasma levels',
          'Excretion is constant regardless of plasma glucose',
        ],
        correctAnswer: 1,
        explanation:
          'Glomerular filtration of glucose is roughly the product of GFR and plasma glucose; it is not carrier-mediated and so is not saturable in this range, rising linearly. Reabsorption, by contrast, depends on a finite pool of SGLT transporters and therefore saturates at the $T_m$. Filtration does not use the SGLT transporters (A). Reabsorption is not always faster (C, it plateaus while filtration keeps rising). Excretion clearly increases above threshold (D).',
        skill: 'Renal physiology',
      },
      {
        question:
          'Glucose begins to appear in the urine once plasma glucose exceeds about 300 mg/dL. The best explanation is that:',
        options: [
          'The glomerulus stops filtering glucose above this level',
          'The filtered glucose load begins to exceed the reabsorptive $T_m$, so the excess is excreted',
          'SGLT transporters reverse direction and secrete glucose',
          'The $\\text{Na}^+/\\text{K}^+$-ATPase shuts off',
        ],
        correctAnswer: 1,
        explanation:
          'Once the filtered load exceeds what the saturated SGLT system can reclaim (the $T_m$), the unreabsorbed glucose spills into the urine (glucosuria). The glomerulus keeps filtering more, not less (A is wrong). SGLT does not reverse to actively secrete glucose (C). The pump is not described as shutting off (D); reabsorption simply maxes out.',
        skill: 'Renal physiology',
      },
      {
        question:
          'A drug that inhibits SGLT in the proximal tubule (an SGLT2 inhibitor) is given. What would you most likely predict at a normal plasma glucose of 100 mg/dL?',
        options: [
          'Increased glucose reabsorption and no urinary glucose',
          'Decreased glucose reabsorption and appearance of glucose in the urine even at this normal plasma level',
          'No change, because reabsorption is already maximal at 100 mg/dL',
          'Increased glomerular filtration rate of glucose',
        ],
        correctAnswer: 1,
        explanation:
          'Blocking SGLT reduces the tubule’s capacity to reabsorb filtered glucose, so glucose escapes into the urine even when plasma glucose is normal and well below the usual threshold. This lowers reabsorption (so A is the opposite). At 100 mg/dL reabsorption was complete but not maximal (the $T_m$ is 320; far above the 125 mg/min reabsorbed), so blocking the transporters does change things (C is wrong). Inhibiting reabsorption does not raise glucose filtration (D).',
        skill: 'Mechanism application',
      },
    ],
  },
  {
    id: 'bb-micro-01',
    section: 'bio-biochem',
    discipline: 'microbiology',
    title: 'Bacterial Growth and the Mechanism of an Antibiotic',
    passageText:
      'A team studied an E. coli culture grown in liquid medium, monitoring density by optical density at 600 nm ' +
      '($\\text{OD}_{600}$). A typical batch culture passes through lag, exponential (log), stationary, and death ' +
      'phases.\n\n' +
      'In Experiment 1, an untreated control culture showed a lag phase, then exponential growth, then a plateau ' +
      '(stationary phase) as nutrients were depleted and waste accumulated.\n\n' +
      'In Experiment 2, antibiotic X, a cell-wall synthesis inhibitor that targets peptidoglycan crosslinking ' +
      '(similar to a beta-lactam), was added during early exponential phase. $\\text{OD}_{600}$ stopped rising and ' +
      'then declined, and microscopy showed lysed cells. Adding antibiotic X to a non-growing stationary-phase ' +
      'culture had little effect on viability.\n\n' +
      'In Experiment 3, antibiotic Y, a bacteriostatic protein-synthesis inhibitor that binds the 30S ribosomal ' +
      'subunit, was added during exponential phase. Growth halted (the $\\text{OD}_{600}$ plateaued) but cells were ' +
      'not lysed, and when the drug was washed out, growth resumed.\n\n' +
      'A control with no antibiotic confirmed normal growth, and a sterile, uninoculated medium blank showed no ' +
      'increase in $\\text{OD}_{600}$.',
    figure:
      '| Time (h) | Control $\\text{OD}_{600}$ | + Antibiotic X | + Antibiotic Y |\n' +
      '| --- | --- | --- | --- |\n' +
      '| 0 | 0.05 | 0.05 | 0.05 |\n' +
      '| 2 | 0.20 | 0.20 | 0.20 |\n' +
      '| 4 | 0.60 | 0.10 | 0.21 |\n' +
      '| 6 | 1.10 | 0.04 | 0.21 |\n' +
      '| 8 | 1.20 | 0.03 | 0.21 |',
    questions: [
      {
        question:
          'Antibiotic X caused lysis when added to exponentially growing cells but had little effect on stationary-phase cells. The best explanation is that:',
        options: [
          'Stationary cells lack a cell wall',
          'Cell-wall synthesis inhibitors are most lethal when cells are actively building new cell wall during growth',
          'The drug is destroyed in stationary phase',
          'Stationary cells grow faster than exponential cells',
        ],
        correctAnswer: 1,
        explanation:
          'A peptidoglycan-crosslinking inhibitor undermines new cell-wall construction; it kills best when cells are actively dividing and synthesizing wall, leaving them osmotically fragile and prone to lysis. Stationary cells are not actively building much new wall, so the drug has little to disrupt. Stationary cells still have a wall (A is false), the drug is not described as degraded (C), and stationary cells grow slower, not faster (D).',
        skill: 'Antibiotic mechanism',
      },
      {
        question:
          'Antibiotic Y halted growth without lysis, and growth resumed after washout. This identifies antibiotic Y as:',
        options: ['Bactericidal', 'Bacteriostatic', 'A cell-wall inhibitor', 'A DNA gyrase inhibitor'],
        correctAnswer: 1,
        explanation:
          'A drug that arrests growth but leaves cells viable, allowing recovery once removed, is bacteriostatic; the passage labels Y exactly this way and the washout recovery confirms cells were not killed. Bactericidal (A) would kill, preventing recovery. It binds the 30S ribosome, not the cell wall (C) or DNA gyrase (D).',
        skill: 'Antibiotic mechanism',
      },
      {
        question:
          'The plateau in the untreated control culture (stationary phase) is best attributed to:',
        options: [
          'A fixed genetic limit on cell number unrelated to the medium',
          'Nutrient depletion and accumulation of waste products limiting net growth',
          'The cells dying as fast as they divide from the start',
          'Loss of the ability to perform protein synthesis',
        ],
        correctAnswer: 1,
        explanation:
          'Stationary phase reflects the environment: as nutrients run out and toxic waste builds up, the division rate falls to match the death rate, so net growth plateaus (as the passage states). It is not a fixed genetic ceiling independent of the medium (A). Cells do not die as fast as they divide from the start (C, that would prevent the exponential phase). Protein synthesis is not abolished (D).',
        skill: 'Microbial growth',
      },
      {
        question:
          'What is the purpose of the sterile, uninoculated medium blank?',
        options: [
          'To measure the maximum growth rate',
          'To control for any $\\text{OD}_{600}$ signal not caused by bacterial growth (e.g., the medium itself)',
          'To provide extra nutrients to the experimental cultures',
          'To test the antibiotic on sterile medium',
        ],
        correctAnswer: 1,
        explanation:
          'An uninoculated blank establishes the baseline absorbance and confirms that increases in $\\text{OD}_{600}$ are due to bacterial growth rather than the medium, turbidity from reagents, or contamination. It does not measure growth rate (A), feed the cultures (C), or test drug effects (D, there are no bacteria to affect).',
        skill: 'Experimental controls',
      },
      {
        question:
          'If antibiotic Y (the bacteriostatic 30S inhibitor) and antibiotic X (the cell-wall inhibitor) were added together to an exponential culture, which prediction is most consistent with their mechanisms?',
        options: [
          'Y could reduce X’s killing because X requires active cell-wall synthesis, which Y’s growth arrest curtails',
          'Y would enhance lysis by X because both target the cell wall',
          'Neither drug would have any effect in combination',
          'X would become bacteriostatic and Y bactericidal',
        ],
        correctAnswer: 0,
        explanation:
          'X kills best when cells are actively growing and synthesizing wall. A bacteriostatic drug like Y that halts growth (and thus wall synthesis) can blunt the bactericidal action of a cell-wall inhibitor—a classic antagonism. Y targets the ribosome, not the wall, so they do not both target the wall (B). Each still has activity (C is wrong), and combining them does not simply swap their classifications (D).',
        skill: 'Mechanism application',
        needsReview: true,
      },
    ],
  },
  {
    id: 'bb-metab-01',
    section: 'bio-biochem',
    discipline: 'metabolism',
    title: 'Mitochondrial Oxygen Consumption and Respiratory Inhibitors',
    passageText:
      'Cellular respiration couples the oxidation of fuels to ATP synthesis. In oxidative phosphorylation, the ' +
      'electron transport chain (ETC) passes electrons from $\\text{NADH}$ and $\\text{FADH}_2$ to oxygen, pumping ' +
      'protons across the inner mitochondrial membrane to build an electrochemical gradient; ATP synthase then uses ' +
      'this proton-motive force to make ATP. Electron flow and ATP synthesis are normally coupled.\n\n' +
      'Investigators measured the oxygen consumption rate (OCR) of isolated mitochondria supplied with substrate ' +
      'and ADP, then added compounds sequentially.\n\n' +
      'Oligomycin blocks ATP synthase. Adding it sharply reduced OCR, because in coupled mitochondria the proton ' +
      'gradient builds up and back-pressure slows electron transport.\n\n' +
      'Next, an uncoupler (FCCP), which carries protons across the membrane independently of ATP synthase, was ' +
      'added. OCR rose sharply because dissipating the gradient relieves the back-pressure and electron transport ' +
      'speeds up, but this electron flow is no longer coupled to ATP synthesis.\n\n' +
      'Finally, rotenone (a Complex I inhibitor) plus antimycin A (a Complex III inhibitor) were added; OCR fell to ' +
      'near zero because electrons could no longer reach oxygen.',
    figure:
      '| Stage | Addition | OCR (relative) |\n' +
      '| --- | --- | --- |\n' +
      '| 1 | Substrate + ADP (baseline) | 100 |\n' +
      '| 2 | + Oligomycin | 25 |\n' +
      '| 3 | + FCCP (uncoupler) | 165 |\n' +
      '| 4 | + Rotenone + Antimycin A | 5 |',
    questions: [
      {
        question:
          'Why does oligomycin, which blocks ATP synthase, decrease oxygen consumption in coupled mitochondria?',
        options: [
          'It directly inhibits Complex IV from binding oxygen',
          'Blocking proton return through ATP synthase raises the gradient, and the back-pressure slows electron transport and thus oxygen use',
          'It destroys the inner mitochondrial membrane',
          'It uncouples electron transport from ATP synthesis',
        ],
        correctAnswer: 1,
        explanation:
          'With ATP synthase blocked, protons cannot flow back into the matrix, so the gradient grows and exerts back-pressure that slows proton pumping and therefore electron transport, cutting oxygen consumption. This is the hallmark of coupling. Oligomycin acts on ATP synthase, not Complex IV (A) and not by destroying the membrane (C). It does not uncouple (D); an uncoupler does the opposite, raising OCR.',
        skill: 'Oxidative phosphorylation',
      },
      {
        question:
          'After oligomycin, adding the uncoupler FCCP raised OCR above baseline. The best explanation is that FCCP:',
        options: [
          'Repairs ATP synthase so ATP synthesis resumes',
          'Provides an alternative route for protons across the membrane, dissipating the gradient and relieving back-pressure so electron transport accelerates',
          'Donates extra electrons to Complex I',
          'Inhibits Complex III directly',
        ],
        correctAnswer: 1,
        explanation:
          'An uncoupler shuttles protons across the inner membrane independent of ATP synthase, collapsing the gradient. Removing the back-pressure lets the ETC run fast (high OCR) even though ATP synthase is still blocked by oligomycin—electron flow is now uncoupled from ATP synthesis. It does not repair ATP synthase (A), supply electrons (C), or inhibit Complex III (D, that is antimycin A).',
        skill: 'Oxidative phosphorylation',
      },
      {
        question:
          'After FCCP, why is the electron transport occurring no longer productive for ATP synthesis?',
        options: [
          'Oxygen is no longer the terminal electron acceptor',
          'The proton gradient that ATP synthase requires is being dissipated by the uncoupler',
          'NADH can no longer be oxidized by Complex I',
          'ATP synthase is now running in reverse to hydrolyze ATP',
        ],
        correctAnswer: 1,
        explanation:
          'ATP synthase needs the proton-motive force to drive ATP synthesis. The uncoupler short-circuits that gradient, so even rapid electron flow and proton pumping cannot build the gradient ATP synthase needs; the energy is released as heat instead. Oxygen is still the terminal acceptor (A, OCR is high). NADH is still oxidized (C, electrons are flowing). The drop in ATP is due to gradient dissipation, not ATP synthase reversal (D).',
        skill: 'Oxidative phosphorylation',
      },
      {
        question:
          'Rotenone plus antimycin A drove OCR nearly to zero. This occurs because:',
        options: [
          'ATP synthase is blocked, raising the gradient',
          'Electron flow through the chain is blocked at Complexes I and III, so electrons cannot reach oxygen at Complex IV',
          'The mitochondria run out of oxygen',
          'The uncoupler is no longer present',
        ],
        correctAnswer: 1,
        explanation:
          'Rotenone blocks Complex I and antimycin A blocks Complex III; with the chain interrupted upstream of Complex IV, electrons never reach oxygen, so oxygen consumption collapses to near zero. ATP synthase blockade (A) describes oligomycin and only partially lowers OCR. The mitochondria are not depleted of oxygen by the inhibitors (C). The effect is due to the inhibitors, not the absence of FCCP (D, which would have raised OCR).',
        skill: 'Electron transport chain',
      },
      {
        question:
          'Based on these results, which compound would most directly cause electron transport to continue rapidly while producing heat instead of ATP in intact cells?',
        options: ['Oligomycin', 'FCCP', 'Rotenone', 'Antimycin A'],
        correctAnswer: 1,
        explanation:
          'An uncoupler like FCCP lets the ETC run fast (high OCR) while the energy of the dissipated proton gradient is released as heat rather than captured as ATP—exactly the thermogenic, uncoupled state. Oligomycin (A) slows electron transport. Rotenone (C) and antimycin A (D) halt electron transport, so they cannot keep it running.',
        skill: 'Mechanism application',
      },
    ],
  },
]

export const BIO_BIOCHEM_DISCRETES: MCATDiscreteQuestion[] = [
  {
    id: 'bb-disc-01',
    section: 'bio-biochem',
    discipline: 'biochemistry',
    question:
      'A peptide bond forms between the carboxyl group of one amino acid and the amino group of another. What type of reaction creates this bond, and what small molecule is released?',
    options: [
      'Hydrolysis, releasing $\\text{H}_2\\text{O}$',
      'Condensation (dehydration), releasing $\\text{H}_2\\text{O}$',
      'Condensation, releasing $\\text{CO}_2$',
      'Reduction, releasing $\\text{O}_2$',
    ],
    correctAnswer: 1,
    explanation:
      'Peptide bond formation is a condensation (dehydration) reaction: the carboxyl and amino groups join with loss of a water molecule. Hydrolysis (A) is the reverse, adding water to break the bond. No $\\text{CO}_2$ (C) or $\\text{O}_2$ (D) is released in peptide bond formation.',
    skill: 'Amino acids and proteins',
  },
  {
    id: 'bb-disc-02',
    section: 'bio-biochem',
    discipline: 'molecular biology',
    question:
      'During translation, which site of the ribosome normally holds the tRNA carrying the growing polypeptide chain just before peptide bond formation?',
    options: ['The A site', 'The P site', 'The E site', 'The 5′ cap'],
    correctAnswer: 1,
    explanation:
      'The P (peptidyl) site holds the tRNA bearing the growing polypeptide chain; the A (aminoacyl) site receives the incoming aminoacyl-tRNA, and the E (exit) site holds the deacylated tRNA before it leaves. The 5′ cap (D) is an mRNA feature, not a ribosomal site.',
    skill: 'Translation',
  },
  {
    id: 'bb-disc-03',
    section: 'bio-biochem',
    discipline: 'genetics',
    question:
      'A man with hemophilia A (X-linked recessive) has children with a woman who is not a carrier and is unaffected. What is expected for their children?',
    options: [
      'All sons will be affected',
      'All daughters will be carriers; sons will be unaffected',
      'Half of all children will be affected regardless of sex',
      'All daughters will be affected',
    ],
    correctAnswer: 1,
    explanation:
      'The father is $X^h Y$; the mother is $X^H X^H$. Daughters receive the father’s $X^h$ and a maternal $X^H$, so all are unaffected carriers ($X^H X^h$). Sons receive the father’s Y and a maternal $X^H$, so all are $X^H Y$, unaffected. Sons are not affected (A), affection is not 50% across both sexes (C), and daughters are carriers, not affected (D).',
    skill: 'X-linked inheritance',
  },
  {
    id: 'bb-disc-04',
    section: 'bio-biochem',
    discipline: 'metabolism',
    question:
      'Under anaerobic conditions in human muscle, pyruvate is converted to lactate by lactate dehydrogenase. What is the primary metabolic purpose of this step?',
    options: [
      'To generate additional ATP directly from lactate',
      'To regenerate $\\text{NAD}^+$ so that glycolysis can continue',
      'To produce $\\text{CO}_2$ for the bicarbonate buffer',
      'To synthesize acetyl-CoA for the TCA cycle',
    ],
    correctAnswer: 1,
    explanation:
      'Reducing pyruvate to lactate oxidizes $\\text{NADH}$ back to $\\text{NAD}^+$. Glycolysis needs $\\text{NAD}^+$ at the glyceraldehyde-3-phosphate dehydrogenase step, so regenerating it lets glycolysis (and its net ATP production) keep running without oxygen. The lactate step itself yields no ATP (A) and produces no $\\text{CO}_2$ (C). Acetyl-CoA formation (D) is the aerobic fate via pyruvate dehydrogenase, not this anaerobic step.',
    skill: 'Glycolysis and fermentation',
  },
  {
    id: 'bb-disc-05',
    section: 'bio-biochem',
    discipline: 'cell biology',
    question:
      'The $\\text{Na}^+/\\text{K}^+$-ATPase moves ions across the plasma membrane. Which statement accurately describes its action per cycle?',
    options: [
      'It pumps 3 $\\text{Na}^+$ out and 2 $\\text{K}^+$ in, using ATP, against their gradients',
      'It pumps 2 $\\text{Na}^+$ out and 3 $\\text{K}^+$ in, without using ATP',
      'It moves both ions down their gradients by facilitated diffusion',
      'It exchanges $\\text{Na}^+$ for $\\text{Ca}^{2+}$ using the sodium gradient',
    ],
    correctAnswer: 0,
    explanation:
      'The $\\text{Na}^+/\\text{K}^+$-ATPase is a primary active transporter that hydrolyzes one ATP to pump 3 $\\text{Na}^+$ out of and 2 $\\text{K}^+$ into the cell, both against their gradients. The stoichiometry in B is reversed and wrongly omits ATP. It is active, not facilitated diffusion (C). The $\\text{Na}^+/\\text{Ca}^{2+}$ exchanger described in D is a different, secondary-active transporter.',
    skill: 'Membrane transport',
  },
  {
    id: 'bb-disc-06',
    section: 'bio-biochem',
    discipline: 'microbiology',
    question:
      'A retrovirus such as HIV must perform which step that distinguishes its replication from that of a typical DNA virus?',
    options: [
      'Translation of viral mRNA on host ribosomes',
      'Reverse transcription of its RNA genome into DNA, which integrates into the host genome',
      'Assembly of new virions at the host plasma membrane',
      'Use of host RNA polymerase to transcribe its genes',
    ],
    correctAnswer: 1,
    explanation:
      'Retroviruses carry an RNA genome and the enzyme reverse transcriptase, which copies that RNA into DNA; integrase then inserts the DNA (provirus) into the host genome—the defining feature absent from typical DNA viruses. Translation on host ribosomes (A), membrane assembly (C), and using host RNA polymerase (D) are shared with many viruses and do not uniquely distinguish a retrovirus.',
    skill: 'Virology',
  },
]
