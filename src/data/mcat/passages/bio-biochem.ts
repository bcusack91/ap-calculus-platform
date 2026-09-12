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
    chart: {
      title:
        'Figure 1. Michaelis-Menten kinetics of alkaline phosphatase (control vs. inorganic phosphate vs. orthovanadate)',
      kind: 'line',
      xLabel: '[pNPP]',
      xUnit: 'mM',
      yLabel: 'Initial velocity $(v_{0})$',
      yUnit: 'µmol/min',
      seriesLabel: 'Exp 1: substrate alone (Km 0.10, Vmax 50)',
      xValues: [0, 0.05, 0.1, 0.2, 0.3, 0.5, 0.75, 1.0, 1.5, 2.0, 3.0],
      yValues: [0, 16.7, 25.0, 33.3, 37.5, 41.7, 44.1, 45.5, 46.9, 47.6, 48.4],
      comparisonSeries: [
        {
          label: 'Exp 2: + Pᵢ — competitive (apparent Km 0.40, Vmax 50)',
          yValues: [0, 5.6, 10.0, 16.7, 21.4, 27.8, 32.6, 35.7, 39.5, 41.7, 44.1],
        },
        {
          label: 'Exp 3: + orthovanadate — noncompetitive (Km 0.10, Vmax 18)',
          yValues: [0, 6.0, 9.0, 12.0, 13.5, 15.0, 15.9, 16.4, 16.9, 17.1, 17.4],
        },
      ],
      annotations: [
        { xIndex: 2, label: 'Km = 0.10 mM (v = Vmax/2)' },
        { xIndex: 10, label: 'approaching Vmax = 50' },
      ],
    },
    questions: [
      {
        question:
          'The inhibition pattern observed in Experiment 2 (increased $K_m$, unchanged $V_{max}$) is most consistent with which type of inhibition?',
        options: [
          "Uncompetitive inhibition",
          "Irreversible inhibition",
          "Competitive inhibition",
          "Noncompetitive inhibition"
        ],
        correctAnswer: 2,
        explanation:
          'A pure increase in $K_m$ with $V_{max}$ unchanged is the signature of competitive inhibition: the inhibitor competes with substrate for the active site, so more substrate is needed to reach half-maximal velocity, but a high enough [S] still reaches the original $V_{max}$. Inorganic phosphate is a product that resembles substrate, so product (competitive) inhibition fits. Noncompetitive inhibition lowers $V_{max}$ with unchanged $K_m$; uncompetitive lowers both; an irreversible inhibitor would not be overcome by substrate at all.',
        skill: 'Enzyme kinetics',
      },
      {
        question:
          'In Experiment 3, orthovanadate lowered $V_{max}$ and this could not be reversed by adding more substrate, while $K_m$ stayed at 0.10 mM. This is best classified as:',
        options: [
          'Substrate activation',
          'A change in enzyme concentration',
          'Competitive inhibition',
          'Noncompetitive inhibition'],
        correctAnswer: 3,
        explanation:
          'Decreased $V_{max}$ with unchanged $K_m$ that cannot be overcome by adding substrate is classic noncompetitive inhibition: the inhibitor binds equally well to free enzyme and to the ES complex (at a site distinct from substrate competition), effectively removing a fraction of active enzyme regardless of [S]. As a transition-state analog binding tightly outside the simple competitive scheme, vanadate lowers the maximum achievable rate. Competitive inhibition would raise $K_m$; substrate activation and changing [E] do not match an inhibitor added at fixed enzyme.',
        skill: 'Enzyme kinetics',
      },
      {
        question:
          'The recovery of activity after EDTA treatment only when excess $\\text{Zn}^{2+}$ was added back indicates that $\\text{Zn}^{2+}$ functions as:',
        options: [
          'An essential cofactor',
          'An allosteric inhibitor',
          'A product of the reaction',
          'A competitive substrate'],
        correctAnswer: 0,
        explanation:
          'EDTA chelates divalent metal ions; its abolition of activity, reversed by restoring $\\text{Zn}^{2+}$, shows the metal is required for catalysis as a cofactor (specifically a catalytic metal ion in the active site). It is not consumed or produced (ruling out substrate/product) and adding it restores rather than inhibits activity (ruling out an inhibitor).',
        skill: 'Cofactors and metalloenzymes',
      },
      {
        question:
          'Why is p-nitrophenyl phosphate a convenient substrate for measuring AP activity in this assay?',
        options: [
          "It is the only phosphate ester that resists hydrolysis",
          "It is the natural substrate of alkaline phosphatase",
          "Its hydrolysis product p-nitrophenol absorbs strongly at 405 nm",
          "It binds $\\text{Zn}^{2+}$ and thereby activates the enzyme"
        ],
        correctAnswer: 2,
        explanation:
          "The passage states that hydrolysis of pNPP releases p-nitrophenol, which absorbs strongly at 405 nm, so the rate of absorbance increase directly reports reaction velocity in a continuous, real-time assay; the convenience is purely optical. pNPP is a synthetic chromogenic substrate rather than the natural one, and a phosphate ester that resisted hydrolysis would generate no signal at all. Chelating the active-site $\\text{Zn}^{2+}$ would strip the enzyme of its catalytic metal rather than activate it.",
        skill: 'Experimental design',
      },
      {
        question:
          'If the researchers wanted to determine $V_{max}$ and $K_m$ most accurately from initial-velocity data, which experimental practice is most important?',
        options: [
          "Allow each reaction to proceed to completion before measuring",
          "Use a substrate concentration far below $K_m$ for every point",
          "Measure velocity at a single very low substrate concentration",
          "Measure initial rates at concentrations bracketing $K_m$"
        ],
        correctAnswer: 3,
        explanation:
          'Reliable estimates of both kinetic constants require initial velocities sampled across a range of [S] that brackets $K_m$ (well below up to saturating), so the curvature of the Michaelis-Menten plot is captured. A single low [S] or only sub-$K_m$ points constrain $K_m$ poorly and barely sample $V_{max}$. Letting reactions go to completion violates the initial-rate assumption, allowing substrate depletion and product inhibition to distort the measurement.',
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
          'R protein represses transcription of gene T',
          'Gene T is not transcribed in any of these cells',
          'R protein stabilizes the T mRNA after transcription',
          'R protein activates transcription of gene T'],
        correctAnswer: 0,
        explanation:
          'Removing R (R-KO) increased T mRNA and reporter activity, and restoring R brought both back down. Since the reporter is a promoter-driven transcriptional readout, R acts to lower transcription of T, i.e., it represses it. If R activated T, knockout would lower T, not raise it. Gene T is clearly transcribed, ruling out the claim that it is silent. Post-transcriptional mRNA stabilization would not change the transcriptional reporter, which did change.',
        skill: 'Gene regulation',
      },
      {
        question:
          'What is the primary purpose of including the rescue (R re-added) cell line?',
        options: [
          "To test whether luciferase is toxic to the cells",
          "To serve as a negative control with no R expression",
          "To confirm the R-KO phenotype is truly caused by loss of R",
          "To increase the amount of T mRNA for easier detection"
        ],
        correctAnswer: 2,
        explanation:
          "A rescue (complementation) line reintroduces the deleted gene; if the knockout phenotype reverses when R is restored, the phenotype is attributable to loss of R rather than to an unrelated mutation introduced during engineering or another off-target effect. The rescue line expresses R, so it is the opposite of a no-R negative control. It does not exist to boost T mRNA levels or to test luciferase toxicity.",
        skill: 'Experimental controls',
      },
      {
        question:
          'The ChIP result (anti-R antibody pulls down the T promoter but not an unrelated promoter) most strongly supports that R:',
        options: [
          "Degrades the T promoter region after binding it",
          "Is exported from the nucleus in wild-type cells",
          "Binds RNA polymerase but never promoter DNA itself",
          "Physically associates with the T promoter DNA"
        ],
        correctAnswer: 3,
        explanation:
          'ChIP crosslinks proteins to the DNA they occupy, then immunoprecipitates the protein and identifies the co-purifying DNA. Recovery of the T promoter (but not an unrelated promoter) by anti-R indicates R is bound at the T promoter in cells, consistent with direct, sequence-specific repression. It does not show binding to RNA polymerase, degradation of DNA (ChIP detects occupancy, not destruction), or nuclear export (which would oppose promoter binding).',
        skill: 'Molecular techniques',
      },
      {
        question:
          'The actin Western blot bands were equal across all lanes. What is the role of this measurement?',
        options: [
          "A loading control showing equal protein per lane",
          "Evidence that the R gene is functional in these cells",
          "A readout of luciferase reporter activity",
          "The experimental variable the study manipulates"
        ],
        correctAnswer: 0,
        explanation:
          "Actin is an abundant, constitutively expressed housekeeping protein used as a loading control: equal actin bands confirm that comparable total protein was loaded in each lane, so differences in the R band reflect true expression differences rather than uneven loading. Actin levels say nothing about whether R is functional, actin is not the variable being manipulated, and it is unrelated to the luminescence readout.",
        skill: 'Experimental controls',
      },
      {
        question:
          'Suppose a new cell line expresses a mutant R protein that folds normally and is detected on the Western blot but cannot bind DNA. What would you most likely predict for the T mRNA and luciferase reporter in this line?',
        options: [
          "T mRNA faint and reporter low, just as in wild-type cells",
          "T mRNA strong and reporter high, just as in the R-knockout",
          "T mRNA and reporter activity both undetectable",
          "No R protein detectable on the Western blot of this line"
        ],
        correctAnswer: 1,
        explanation:
          "Repression requires R to occupy the T promoter, as the ChIP result shows. A DNA-binding-dead mutant is present as protein but cannot dock at the promoter, so it cannot repress and functionally phenocopies the knockout: high T mRNA and high reporter. A wild-type-like outcome would require functional repression, which this mutant lacks, and T is not abolished. Because the protein is still expressed and folds normally, it remains detectable on the Western blot.",
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
    chart: {
      title: 'Figure 1. Radiolabeled glucose uptake in cultured muscle cells across five conditions',
      kind: 'bar',
      xLabel: 'Condition',
      yLabel: 'Glucose uptake',
      yUnit: 'arbitrary units',
      seriesLabel: 'Glucose uptake',
      xValues: [
        'Basal',
        '+ Insulin',
        '+ Insulin + wortmannin',
        '+ Insulin + cytochalasin B',
        'Basal + phloretin',
      ],
      yValues: [10, 42, 12, 3, 2],
    },
    questions: [
      {
        question:
          'GLUT4 transports glucose by facilitated diffusion. Which statement about this process is correct?',
        options: [
          "It pumps glucose using the energy of GTP hydrolysis",
          "It pumps glucose against its gradient using ATP",
          "It moves glucose down its gradient without ATP input",
          "It requires a sodium gradient to co-transport glucose"
        ],
        correctAnswer: 2,
        explanation:
          'Facilitated diffusion is passive: a transporter provides a path for the solute to move down its electrochemical gradient, with no direct energy input at the transporter. The passage reinforces this, noting uptake of a non-metabolizable analog still occurs. ATP-driven pumping against a gradient describes primary active transport; sodium-coupled symport describes secondary active transport (e.g., SGLT); GTP-driven pumping is not how GLUT works.',
        skill: 'Membrane transport',
      },
      {
        question:
          'Insulin plus wortmannin reduced uptake nearly to basal levels. This is best explained by:',
        options: [
          "Wortmannin physically plugging the GLUT4 transporter pore",
          "Wortmannin inhibiting PI3-kinase upstream of Akt",
          "Wortmannin triggering insulin receptor degradation",
          "Wortmannin steepening the glucose gradient inward"
        ],
        correctAnswer: 1,
        explanation:
          'Wortmannin inhibits PI3-kinase, which lies upstream of Akt; Akt is required for GLUT4 to translocate to the membrane. Block that signal and insulin can no longer recruit GLUT4, so uptake stays near basal. Wortmannin is a signaling inhibitor, not a pore blocker (that role belongs to cytochalasin B/phloretin), it does not degrade the receptor, and it does not change the gradient.',
        skill: 'Cell signaling',
      },
      {
        question:
          'Cytochalasin B (with insulin) drove uptake below even the basal level. The most direct interpretation is that cytochalasin B:',
        options: [
          "Blocks PI3-kinase signaling upstream of Akt",
          "Inhibits glucose transport at the GLUT transporter itself",
          "Selectively accelerates glucose efflux from the cell",
          "Directly activates the insulin receptor kinase"
        ],
        correctAnswer: 1,
        explanation:
          'The passage identifies cytochalasin B as a competitive inhibitor of GLUT-mediated transport, and phloretin (also a GLUT blocker) similarly drove basal uptake below 10 (to 2). Inhibiting the transporter blocks uptake regardless of how much GLUT4 reaches the membrane, explaining the very low value even with insulin present. A signaling block describes wortmannin. The drug suppresses uptake, not selectively boosts efflux, and does not activate the receptor.',
        skill: 'Membrane transport',
      },
      {
        question:
          'That insulin-stimulated uptake still occurs with a non-metabolizable glucose analog argues against which idea?',
        options: [
          "That Akt kinase activity is required for GLUT4 translocation",
          "That GLUT4 relocates to the plasma membrane upon insulin",
          "That insulin signals through a receptor tyrosine kinase",
          "That uptake requires the imported sugar be metabolized"
        ],
        correctAnswer: 3,
        explanation:
          'A non-metabolizable analog cannot be phosphorylated/consumed downstream, yet it is still taken up, showing transport does not depend on subsequent metabolism of the imported sugar. The experiment does not contradict the receptor mechanism, the requirement for Akt, or GLUT4 translocation; those remain consistent with the rest of the data.',
        skill: 'Experimental reasoning',
      },
      {
        question:
          'Suppose a patient has a mutation that constitutively activates Akt independently of insulin. In their muscle cells without insulin, you would most likely predict:',
        options: [
          "Elevated uptake without insulin, via GLUT4 translocation",
          "No measurable glucose uptake under any condition tested here",
          "Uptake that increases only when wortmannin is added",
          "Basal uptake only, since insulin is not present"
        ],
        correctAnswer: 0,
        explanation:
          "Akt drives GLUT4 translocation, so constitutive Akt activity bypasses the need for upstream insulin signaling: GLUT4 reaches the membrane and glucose uptake rises even with no insulin present. Basal-only uptake assumes Akt is off, which the mutation prevents, and uptake is certainly not abolished. Wortmannin acts on PI3-kinase upstream of Akt, so it can only lower uptake, and it cannot even do that in a cell whose Akt is already active independently of that step.",
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
        options: [ '1/16','1/2', '1/4', '3/4'],
        correctAnswer: 2,
        explanation:
          'A Qq × Qq cross yields offspring genotypes 1 QQ : 2 Qq : 1 qq. Only qq is affected, giving a 1/4 probability per child. 1/2 is the carrier-vs-affected confusion; 3/4 is the probability of being unaffected; 1/16 would require two independent 1/4 events.',
        skill: 'Mendelian genetics',
      },
      {
        question:
          'Among the three phenotypically unaffected children, what is the probability that a given unaffected child is a carrier (Qq)?',
        options: ['1/4', '1/3', '1/2', '2/3'],
        correctAnswer: 3,
        explanation:
          'Conditioning on being unaffected removes the qq class. Of the unaffected offspring (1 QQ : 2 Qq), 2 of 3 are carriers, so the probability is 2/3. 1/2 ignores the conditioning; 1/4 and 1/3 do not match the 1:2 ratio of QQ:Qq among unaffected.',
        skill: 'Conditional probability',
      },
      {
        question:
          'Using Hardy-Weinberg with an affected frequency of 1/2,500, what is the frequency of the recessive allele q?',
        options: [
          "0.0004 (1/2,500)",
          "0.02 (1/50)",
          "0.04 (1/25)",
          "0.01 (1/100)"
        ],
        correctAnswer: 1,
        explanation:
          "Affected frequency $q^2 = 1/2500$, so $q = \\sqrt{1/2500} = 1/50 = 0.02$. The value 0.0004 is $q^2$ itself rather than $q$. The value 0.04 is $2q$, and 0.01 would square to 1/10,000 rather than 1/2,500; both are errors in taking the square root.",
        skill: 'Population genetics',
      },
      {
        question:
          'Given $q = 1/50$, the estimated carrier (heterozygote) frequency $2pq$ in this population is approximately:',
        options: [
          "About 1 in 2,500",
          "About 1 in 50",
          "About 1 in 2",
          "About 1 in 25"
        ],
        correctAnswer: 3,
        explanation:
          "With $q = 0.02$, $p = 0.98$, so $2pq = 2(0.98)(0.02) = 0.0392 \\approx 0.04$, i.e., about 1 in 25. About 1 in 2,500 is the affected frequency; about 1 in 50 is $q$ itself; about 1 in 2 (0.5) is far too high for a heterozygote frequency at this allele frequency.",
        skill: 'Population genetics',
      },
      {
        question:
          'Which assumption, if violated, would most directly undermine using the $q^2 = 1/2,500$ relationship to estimate allele frequencies in this population?',
        options: [
          "Mating is random with respect to the locus and no selection acts",
          "Affected individuals are detectable at birth by screening",
          "The locus has exactly two alleles in this population",
          "Carriers (Qq) show no clinical signs of the condition"
        ],
        correctAnswer: 0,
        explanation:
          'The $q^2$ relationship is the Hardy-Weinberg result, which assumes random mating and no selection (plus large population size, no migration, no new mutation). Violating random mating or introducing selection breaks the predicted genotype proportions. A two-allele locus is a background condition consistent with the model rather than a violation, whether carriers show symptoms does not change the fact that only qq individuals are affected, and detectability at birth is about measurement, not the equilibrium assumptions.',
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
    chart: {
      title: 'Figure 1. Renal handling of glucose: filtered, reabsorbed, and excreted vs. plasma glucose',
      kind: 'line',
      xLabel: 'Plasma glucose',
      xUnit: 'mg/dL',
      yLabel: 'Glucose rate',
      yUnit: 'mg/min',
      seriesLabel: 'Filtered',
      xValues: [100, 200, 300, 400, 500],
      yValues: [125, 250, 375, 500, 625],
      comparisonSeries: [
        { label: 'Reabsorbed', yValues: [125, 250, 320, 320, 320] },
        { label: 'Excreted', yValues: [0, 0, 55, 180, 305] },
      ],
      annotations: [
        { xIndex: 2, label: 'threshold ≈ 300 mg/dL; Tm = 320 mg/min' },
      ],
    },
    questions: [
      {
        question:
          'SGLT-mediated glucose reabsorption is described as secondary active transport. What does the energy for moving glucose against its gradient ultimately come from?',
        options: [
          "GTP hydrolysis by a pump in the apical cell membrane",
          "Direct ATP hydrolysis by the SGLT carrier protein itself",
          "The inward sodium gradient, which is built using ATP",
          "The glucose concentration gradient across the membrane"
        ],
        correctAnswer: 2,
        explanation:
          "In secondary active transport the carrier spends no ATP itself; it harnesses energy stored in an ion gradient. SGLT couples glucose uptake to sodium moving down its gradient, and that sodium gradient is built by the ATP-consuming $\\text{Na}^+/\\text{K}^+$-ATPase, so ATP powers the process indirectly. SGLT hydrolyzes neither ATP nor GTP itself, and glucose here moves against, not down, its own concentration gradient.",
        skill: 'Membrane transport',
      },
      {
        question:
          'From the data, the transport maximum ($T_m$) for glucose reabsorption is approximately:',
        options: [ '500 mg/min', '305 mg/min','125 mg/min', '320 mg/min'],
        correctAnswer: 3,
        explanation:
          'The reabsorption rate climbs and then plateaus at 320 mg/min (at plasma glucose 300, 400, and 500 mg/dL), which is the saturated maximum, the $T_m$. 125 mg/min is reabsorption at the lowest plasma level (not yet maximal). 500 mg/min is the filtered load at 400 mg/dL. 305 mg/min is the excretion rate at 500 mg/dL, not the reabsorption plateau.',
        skill: 'Data interpretation',
      },
      {
        question:
          'Why does the filtered glucose load increase linearly with plasma glucose across the entire range tested, while reabsorption plateaus?',
        options: [
          "Filtration is not carrier-mediated, but reabsorption is",
          "Reabsorption outpaces filtration at all plasma levels tested",
          "Excretion stays constant regardless of plasma glucose",
          "Filtration uses the same saturable SGLT carriers"
        ],
        correctAnswer: 0,
        explanation:
          'Glomerular filtration of glucose is roughly the product of GFR and plasma glucose; it is not carrier-mediated and so is not saturable in this range, rising linearly. Reabsorption, by contrast, depends on a finite pool of SGLT transporters and therefore saturates at the $T_m$. Filtration does not use the SGLT transporters. Reabsorption is not always faster (it plateaus while filtration keeps rising). Excretion clearly increases above threshold.',
        skill: 'Renal physiology',
      },
      {
        question:
          'Glucose begins to appear in the urine once plasma glucose exceeds about 300 mg/dL. The best explanation is that:',
        options: [
          "The $\\text{Na}^+/\\text{K}^+$-ATPase shuts off at this level",
          "The glomerulus stops filtering glucose above this level",
          "The filtered glucose load now exceeds the reabsorptive $T_m$",
          "SGLT reverses direction and secretes glucose into urine"
        ],
        correctAnswer: 2,
        explanation:
          'Once the filtered load exceeds what the saturated SGLT system can reclaim (the $T_m$), the unreabsorbed glucose spills into the urine (glucosuria). The glomerulus keeps filtering more, not less. SGLT does not reverse to actively secrete glucose. The pump is not described as shutting off; reabsorption simply maxes out.',
        skill: 'Renal physiology',
      },
      {
        question:
          'A drug that inhibits SGLT in the proximal tubule (an SGLT2 inhibitor) is given. What would you most likely predict at a normal plasma glucose of 100 mg/dL?',
        options: [
          "No change, since reabsorption is already maximal at 100 mg/dL",
          "A rise in the glomerular filtration rate of glucose",
          "Greater glucose reabsorption and no urinary glucose",
          "Less reabsorption, with glucose appearing in the urine"
        ],
        correctAnswer: 3,
        explanation:
          'Blocking SGLT reduces the tubule’s capacity to reabsorb filtered glucose, so glucose escapes into the urine even when plasma glucose is normal and well below the usual threshold. Increased reabsorption is the opposite of what the drug does. At 100 mg/dL reabsorption was complete but not maximal (the $T_m$ is 320; far above the 125 mg/min reabsorbed), so blocking the transporters does change things rather than having no effect. Inhibiting reabsorption does not raise glucose filtration.',
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
    chart: {
      title: 'Figure 1. Bacterial growth $(OD_{600})$ over time: untreated control vs. antibiotic X vs. antibiotic Y',
      kind: 'line',
      xLabel: 'Time',
      xUnit: 'h',
      yLabel: 'Optical density $(OD_{600})$',
      seriesLabel: 'Control (untreated)',
      xValues: [0, 2, 4, 6, 8],
      yValues: [0.05, 0.2, 0.6, 1.1, 1.2],
      comparisonSeries: [
        { label: '+ Antibiotic X (cell-wall inhibitor): lysis', yValues: [0.05, 0.2, 0.1, 0.04, 0.03] },
        { label: '+ Antibiotic Y (bacteriostatic): growth arrest', yValues: [0.05, 0.2, 0.21, 0.21, 0.21] },
      ],
      annotations: [
        { xIndex: 2, label: 'drugs added in early log phase' },
      ],
    },
    questions: [
      {
        question:
          'Antibiotic X caused lysis when added to exponentially growing cells but had little effect on stationary-phase cells. The best explanation is that:',
        options: [
          "Cell-wall inhibitors kill best the cells building new wall",
          "The drug is chemically destroyed in stationary phase",
          "Stationary-phase cells divide faster than log-phase cells",
          "Stationary-phase cells have shed their peptidoglycan wall"
        ],
        correctAnswer: 0,
        explanation:
          "A peptidoglycan-crosslinking inhibitor undermines new cell-wall construction, so it kills best when cells are actively dividing and laying down new wall, leaving them osmotically fragile and prone to lysis. Stationary-phase cells build little new wall, so the drug has little to disrupt, but they still retain a wall and they divide more slowly, not faster, than log-phase cells. Nothing in the data suggests the drug itself is degraded.",
        skill: 'Antibiotic mechanism',
      },
      {
        question:
          'Antibiotic Y halted growth without lysis, and growth resumed after washout. This identifies antibiotic Y as:',
        options: [
          "A bactericidal agent",
          "A bacteriostatic agent",
          "A cell-wall synthesis inhibitor",
          "A DNA gyrase inhibitor"
        ],
        correctAnswer: 1,
        explanation:
          'A drug that arrests growth but leaves cells viable, allowing recovery once removed, is bacteriostatic; the passage labels Y exactly this way and the washout recovery confirms cells were not killed. Bactericidal would kill, preventing recovery. It binds the 30S ribosome, not the cell wall or DNA gyrase.',
        skill: 'Antibiotic mechanism',
      },
      {
        question:
          'The plateau in the untreated control culture (stationary phase) is best attributed to:',
        options: [
          "The cells permanently lose the ability to make protein",
          "A fixed genetic ceiling on cell number, set by the strain itself",
          "Nutrient depletion and waste accumulation limiting growth",
          "Cells dying as fast as they divide from the very start"
        ],
        correctAnswer: 2,
        explanation:
          'Stationary phase reflects the environment: as nutrients run out and toxic waste builds up, the division rate falls to match the death rate, so net growth plateaus (as the passage states). It is not a fixed genetic ceiling independent of the medium. Cells do not die as fast as they divide from the start (that would prevent the exponential phase). Protein synthesis is not abolished.',
        skill: 'Microbial growth',
      },
      {
        question:
          'What is the purpose of the sterile, uninoculated medium blank?',
        options: [
          "To supply extra nutrients to the experimental cultures",
          "To test the antibiotics against cell-free sterile medium",
          "To establish the maximum attainable growth rate",
          "To show that $\\text{OD}_{600}$ rises only from bacterial growth"
        ],
        correctAnswer: 3,
        explanation:
          'An uninoculated blank establishes the baseline absorbance and confirms that increases in $\\text{OD}_{600}$ are due to bacterial growth rather than the medium, turbidity from reagents, or contamination. It does not measure growth rate, feed the cultures, or test drug effects (there are no bacteria to affect).',
        skill: 'Experimental controls',
      },
      {
        question:
          'If antibiotic Y (the bacteriostatic 30S inhibitor) and antibiotic X (the cell-wall inhibitor) were added together to an exponential culture, which prediction is most consistent with their mechanisms?',
        options: [
          "Y would blunt X's killing by arresting cell growth",
          "Y would enhance lysis, since both drugs attack the cell wall",
          "Neither drug would act, because they inactivate each other",
          "X would turn bacteriostatic and Y would turn bactericidal"
        ],
        correctAnswer: 0,
        explanation:
          'X kills best when cells are actively growing and synthesizing wall. A bacteriostatic drug like Y that halts growth (and thus wall synthesis) can blunt the bactericidal action of a cell-wall inhibitor—a classic antagonism. Y targets the ribosome, not the wall, so they do not both target the wall. Each drug retains activity alone rather than being inactivated, and combining them does not simply swap their classifications.',
        skill: 'Mechanism application',
        needsReview: false,
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
    chart: {
      title: 'Figure 1. Mitochondrial oxygen consumption rate (OCR) after sequential additions',
      kind: 'bar',
      xLabel: 'Stage (sequential addition)',
      yLabel: 'OCR',
      yUnit: 'relative',
      seriesLabel: 'OCR',
      xValues: [
        'Substrate + ADP (baseline)',
        '+ Oligomycin',
        '+ FCCP (uncoupler)',
        '+ Rotenone + Antimycin A',
      ],
      yValues: [100, 25, 165, 5],
    },
    questions: [
      {
        question:
          'Why does oligomycin, which blocks ATP synthase, decrease oxygen consumption in coupled mitochondria?',
        options: [
          "It blocks Complex IV from binding molecular oxygen directly",
          "Back-pressure from the proton gradient slows the chain",
          "It dissolves the inner mitochondrial membrane",
          "It uncouples electron transport from ATP synthesis"
        ],
        correctAnswer: 1,
        explanation:
          'With ATP synthase blocked, protons cannot flow back into the matrix, so the gradient grows and exerts back-pressure that slows proton pumping and therefore electron transport, cutting oxygen consumption. This is the hallmark of coupling. Oligomycin acts on ATP synthase, not Complex IV and not by destroying the membrane. It does not uncouple; an uncoupler does the opposite, raising OCR.',
        skill: 'Oxidative phosphorylation',
      },
      {
        question:
          'After oligomycin, adding the uncoupler FCCP raised OCR above baseline. The best explanation is that FCCP:',
        options: [
          "Inhibits Complex III in the same way antimycin A does",
          "Repairs ATP synthase so ATP synthesis resumes",
          "Carries protons back in, collapsing the proton gradient",
          "Donates extra electrons directly to Complex I"
        ],
        correctAnswer: 2,
        explanation:
          'An uncoupler shuttles protons across the inner membrane independent of ATP synthase, collapsing the gradient. Removing the back-pressure lets the ETC run fast (high OCR) even though ATP synthase is still blocked by oligomycin—electron flow is now uncoupled from ATP synthesis. It does not repair ATP synthase, supply electrons, or inhibit Complex III (that is antimycin A).',
        skill: 'Oxidative phosphorylation',
      },
      {
        question:
          'After FCCP, why is the electron transport occurring no longer productive for ATP synthesis?',
        options: [
          "Complex I can no longer accept electrons from NADH",
          "ATP synthase now runs backward, hydrolyzing ATP",
          "Oxygen has been replaced as the terminal acceptor",
          "The uncoupler dissipates the proton gradient"
        ],
        correctAnswer: 3,
        explanation:
          'ATP synthase needs the proton-motive force to drive ATP synthesis. The uncoupler short-circuits that gradient, so even rapid electron flow and proton pumping cannot build the gradient ATP synthase needs; the energy is released as heat instead. Oxygen is still the terminal acceptor (OCR is high). NADH is still oxidized (electrons are flowing). The drop in ATP is due to gradient dissipation, not ATP synthase reversal.',
        skill: 'Oxidative phosphorylation',
      },
      {
        question:
          'Rotenone plus antimycin A drove OCR nearly to zero. This occurs because:',
        options: [
          "Blocks at Complexes I and III bar electrons from oxygen",
          "The mitochondria exhaust the oxygen present in the chamber",
          "The uncoupler FCCP is no longer present in the assay medium",
          "ATP synthase is blocked, so the proton gradient builds up"
        ],
        correctAnswer: 0,
        explanation:
          'Rotenone blocks Complex I and antimycin A blocks Complex III; with the chain interrupted upstream of Complex IV, electrons never reach oxygen, so oxygen consumption collapses to near zero. ATP synthase blockade describes oligomycin and only partially lowers OCR. The mitochondria are not depleted of oxygen by the inhibitors. The effect is due to the inhibitors, not the absence of FCCP (which would have raised OCR).',
        skill: 'Electron transport chain',
      },
      {
        question:
          'Based on these results, which compound would most directly cause electron transport to continue rapidly while producing heat instead of ATP in intact cells?',
        options: [
          "Oligomycin, an ATP synthase blocker",
          "FCCP, a protonophore uncoupler",
          "Rotenone, a Complex I inhibitor",
          "Antimycin A, a Complex III inhibitor"
        ],
        correctAnswer: 1,
        explanation:
          'An uncoupler like FCCP lets the ETC run fast (high OCR) while the energy of the dissipated proton gradient is released as heat rather than captured as ATP—exactly the thermogenic, uncoupled state. Oligomycin slows electron transport. Rotenone and antimycin A halt electron transport, so they cannot keep it running.',
        skill: 'Mechanism application',
      },
    ],
  },
  {
    id: 'bb-biochem-02',
    section: 'bio-biochem',
    discipline: 'biochemistry',
    title: 'Characterizing a Protein by Electrophoresis and Chromatography',
    passageText:
      'A laboratory purified a soluble enzyme, protein P, and characterized it using gel electrophoresis and size-' +
      'exclusion chromatography.\n\n' +
      'In Experiment 1, the team ran SDS-PAGE. SDS coats proteins with a uniform negative charge roughly proportional ' +
      'to chain length and denatures them, so polypeptides separate essentially by mass, smaller chains migrating ' +
      'farther toward the anode. Reducing agent ($\\beta$-mercaptoethanol) was included to break disulfide bonds. ' +
      'Under these reducing, denaturing conditions, protein P resolved into two bands: one at 30 kDa and one at 20 kDa.\n\n' +
      'In Experiment 2, the team ran native (non-denaturing) size-exclusion chromatography, which separates folded ' +
      'proteins by size, larger complexes eluting first. Protein P eluted as a single peak with an apparent mass of ' +
      'about 100 kDa.\n\n' +
      'In Experiment 3, they performed isoelectric focusing, separating proteins along a pH gradient until each ' +
      'stops migrating at the pH equal to its isoelectric point (pI), where its net charge is zero. The 30 kDa ' +
      'subunit focused at pH 5.0 and the 20 kDa subunit at pH 8.5.\n\n' +
      'Finally, when SDS-PAGE was run WITHOUT reducing agent, protein P migrated as a single 50 kDa band rather than ' +
      'the two separate bands.',
    figure:
      '| Experiment | Method | Result |\n' +
      '| --- | --- | --- |\n' +
      '| 1 | Reducing SDS-PAGE | bands at 30 kDa and 20 kDa |\n' +
      '| 2 | Native size-exclusion | single peak ~100 kDa |\n' +
      '| 3 | Isoelectric focusing | subunit pI 5.0 and pI 8.5 |\n' +
      '| 4 | Non-reducing SDS-PAGE | single band at 50 kDa |',
    questions: [
      {
        question:
          'In SDS-PAGE, proteins separate primarily on the basis of which property?',
        options: [
          "Their folded three-dimensional shape in solution",
          "Their intrinsic native charge at neutral pH in buffer",
          "Their mass, since SDS equalizes charge-to-mass",
          "Their isoelectric point along a pH gradient in a gel"
        ],
        correctAnswer: 2,
        explanation:
          'SDS denatures proteins and coats them with negative charge in proportion to chain length, giving an approximately constant charge-to-mass ratio so migration depends almost entirely on mass, with smaller chains moving farther. Native charge and pI are what isoelectric focusing exploits, not SDS-PAGE. Folded shape is largely abolished by SDS denaturation.',
        skill: 'Molecular techniques',
      },
      {
        question:
          'Reducing SDS-PAGE gave 30 kDa and 20 kDa bands, native chromatography gave ~100 kDa, and non-reducing SDS-PAGE gave a 50 kDa band. The most consistent quaternary structure for protein P is:',
        options: [
          "A homodimer built from two identical 50 kDa chains",
          "A 50 kDa monomer with one internal disulfide bond",
          "One continuous 100 kDa polypeptide with no subunits",
          "A heterotetramer of two 30 kDa and two 20 kDa chains"
        ],
        correctAnswer: 3,
        explanation:
          'Reducing SDS-PAGE shows the smallest covalent units are 30 and 20 kDa. Non-reducing SDS-PAGE shows a 50 kDa species, meaning a 30 kDa and a 20 kDa chain are joined by a disulfide bond (30 + 20 = 50). Native mass ~100 kDa = two such 50 kDa disulfide-linked pairs, i.e., a heterotetramer (2 × 30 + 2 × 20 = 100). A single chain and a 50 kDa monomer cannot give two reduced bands; a homodimer of identical 50 kDa chains would not yield two different reduced subunit sizes.',
        skill: 'Protein structure',
      },
      {
        question:
          'Why did protein P migrate as a single 50 kDa band on non-reducing SDS-PAGE but as two bands when reducing agent was added?',
        options: [
          "Reducing agent breaks the interchain disulfide bond",
          "Without reductant, SDS cannot coat the polypeptides",
          "Reducing agent shifts each subunit's isoelectric point",
          "Reducing agent cleaves peptide bonds within the chains"
        ],
        correctAnswer: 0,
        explanation:
          'Disulfide bonds covalently tether the 30 kDa and 20 kDa chains into one 50 kDa unit; reducing agent ($\\beta$-mercaptoethanol) cleaves these S–S bonds, freeing the two chains so they run separately. Reducing agents break disulfides, not peptide bonds. SDS still binds either way, and reduction does not redefine pI in this context.',
        skill: 'Protein structure',
      },
      {
        question:
          'At a buffer pH of 7.0, what is the expected net charge of the isolated 30 kDa subunit (pI 5.0) compared with the isolated 20 kDa subunit (pI 8.5)?',
        options: [
          "Both subunits carry a net positive charge at pH 7.0",
          "The 30 kDa subunit is negative, the 20 kDa positive",
          "Both subunits carry a net negative charge at pH 7.0",
          "The 30 kDa subunit is positive, the 20 kDa negative"
        ],
        correctAnswer: 1,
        explanation:
          'A protein carries net negative charge when the pH is above its pI and net positive charge when the pH is below its pI. At pH 7.0, the 30 kDa subunit (pI 5.0) is above its pI, so it is negative; the 20 kDa subunit (pI 8.5) is below its pI, so it is positive. The other options misapply the pH-vs-pI rule.',
        skill: 'Amino acids and proteins',
      },
      {
        question:
          'Size-exclusion chromatography eluted protein P as a single peak. In this method, which molecules elute from the column first?',
        options: [
          "The smallest molecules, which slip through the gel fastest",
          "The largest molecules, excluded from the beads' pores",
          "The molecules carrying the most positive charge in the sample",
          "The molecules with the highest isoelectric point value"
        ],
        correctAnswer: 1,
        explanation:
          "Size-exclusion (gel-filtration) beads have pores that small molecules enter, lengthening their path and retarding them; large molecules are excluded from the pores and travel the shorter route around the beads, eluting first. Smallest-first is exactly backward. The separation depends on size and hydrodynamic radius, not on net charge or isoelectric point.",
        skill: 'Molecular techniques',
      },
      {
        question:
          'Which result most directly establishes that protein P is a multi-subunit (oligomeric) protein rather than a single polypeptide?',
        options: [
          "A single focused band at pH 5.0 in isoelectric focusing",
          "The native mass of about 100 kDa, taken by itself",
          "Two distinct bands, 30 and 20 kDa, on reducing SDS-PAGE",
          "The single peak in size-exclusion chromatography"
        ],
        correctAnswer: 2,
        explanation:
          'Reducing SDS-PAGE fully dissociates a protein into its constituent polypeptide chains; two distinct bands prove there are at least two different polypeptides, so P cannot be a single chain. Native mass alone could in principle be one large chain. A single SEC peak shows one complex but not how many chains compose it. A single pI band characterizes one subunit, not the oligomeric state.',
        skill: 'Experimental reasoning',
      },
    ],
  },
  {
    id: 'bb-molbio-02',
    section: 'bio-biochem',
    discipline: 'molecular biology',
    title: 'Detecting a Mutation by PCR and Gel Electrophoresis',
    passageText:
      'A clinical laboratory developed a test for a disease allele caused by a single base substitution that creates ' +
      'a new recognition site for the restriction enzyme HinfI within a gene of interest. The wild-type allele lacks ' +
      'this site.\n\n' +
      'The workflow is: (1) amplify a 400 base-pair (bp) region spanning the variant by the polymerase chain reaction ' +
      '(PCR) using two flanking primers; (2) digest the PCR product with HinfI; and (3) separate the fragments on an ' +
      'agarose gel, where DNA, being negatively charged, migrates toward the positive electrode and smaller fragments ' +
      'travel farther.\n\n' +
      'In the wild-type allele, the 400 bp product has no HinfI site and is not cut, so it stays 400 bp. In the ' +
      'mutant allele, HinfI cuts the 400 bp product once into a 250 bp and a 150 bp fragment.\n\n' +
      'The team ran four samples: a homozygous wild-type control, a homozygous mutant control, a known heterozygote, ' +
      'and a patient of unknown genotype. They also included a lane with a DNA size ladder and a no-template (water) ' +
      'control for the PCR.',
    figure:
      '| Sample | Bands observed after HinfI digestion |\n' +
      '| --- | --- |\n' +
      '| Homozygous wild-type | 400 bp only |\n' +
      '| Homozygous mutant | 250 bp and 150 bp |\n' +
      '| Heterozygote | 400 bp, 250 bp, and 150 bp |\n' +
      '| Patient (unknown) | 250 bp and 150 bp only |\n' +
      '| No-template control | no bands |',
    questions: [
      {
        question:
          'PCR requires a heat-stable DNA polymerase (e.g., Taq) because each cycle includes a step that would denature an ordinary polymerase. That step is:',
        options: [
          "Annealing of the primers at about 55 °C",
          "Denaturation of the template at 95 °C",
          "Extension by the polymerase at 72 °C",
          "Loading the samples onto the agarose gel"
        ],
        correctAnswer: 1,
        explanation:
          'Each PCR cycle begins by heating to ~95 °C to melt the double-stranded template into single strands; this temperature would denature a typical protein, so a thermostable polymerase such as Taq (from a thermophile) is required. Annealing and extension are at lower temperatures the enzyme tolerates. Gel loading is a downstream analysis step, not part of PCR cycling.',
        skill: 'Molecular techniques',
      },
      {
        question:
          'On the agarose gel, which fragment will have migrated the farthest from the wells?',
        options: [ 'All migrate equally','The 400 bp fragment', 'The 250 bp fragment', 'The 150 bp fragment'],
        correctAnswer: 3,
        explanation:
          'In agarose gel electrophoresis, smaller DNA fragments move through the gel matrix more easily and therefore travel farthest. Of 400, 250, and 150 bp, the 150 bp fragment is smallest and migrates farthest from the well. The 400 bp fragment is largest and moves least; equal migration contradicts size-based separation.',
        skill: 'Molecular techniques',
      },
      {
        question:
          'Based on the band pattern, what is the genotype of the patient of unknown status?',
        options: [
          "Homozygous wild-type at this site",
          "Heterozygous at this site",
          "Homozygous mutant at this site",
          "Indeterminate from these data"
        ],
        correctAnswer: 2,
        explanation:
          "The patient shows only the 250 bp and 150 bp fragments and no uncut 400 bp band, matching the homozygous mutant control: both alleles carry the HinfI site and are fully cut. A heterozygote would show all three bands (one allele cut, one uncut), and a homozygous wild-type would show only 400 bp. The pattern is therefore unambiguous rather than indeterminate.",
        skill: 'Data interpretation',
      },
      {
        question:
          'The heterozygote lane shows 400 bp, 250 bp, AND 150 bp bands. Why are all three present?',
        options: [
          "One allele lacks the HinfI site; the other is cut",
          "PCR amplified an extra contaminating fragment",
          "The 400 bp band comes from the DNA size ladder",
          "HinfI digested every molecule only partially"
        ],
        correctAnswer: 0,
        explanation:
          'A heterozygote carries one wild-type allele (no site, stays 400 bp) and one mutant allele (cut to 250 + 150 bp), so all three fragments appear together. This is full digestion of one allele, not partial digestion of all molecules. The pattern is expected from the two alleles, not contamination, and the 400 bp band is patient DNA, not the ladder.',
        skill: 'Genetics',
      },
      {
        question:
          'What is the purpose of the no-template (water) control, which showed no bands?',
        options: [
          "To estimate the sizes of the digested DNA fragments",
          "To detect stray DNA contaminating the PCR reagents",
          "To serve as the homozygous wild-type reference lane",
          "To gauge how completely HinfI cut the amplified products"
        ],
        correctAnswer: 1,
        explanation:
          'A no-template control contains all PCR reagents but no added DNA; if reagents were contaminated with extraneous template, bands would appear. Its blankness confirms the amplified products came from the intended samples, not contamination. Size estimation is the ladder’s job. It is not a genotype reference and does not assess enzyme digestion.',
        skill: 'Experimental controls',
      },
    ],
  },
  {
    id: 'bb-immuno-01',
    section: 'bio-biochem',
    discipline: 'immunology',
    title: 'Antibody Responses Measured by ELISA',
    passageText:
      'The adaptive immune response generates antibodies specific to a pathogen. On first exposure to an antigen, the ' +
      'primary response is slow and dominated by IgM. On re-exposure, memory B cells drive a faster, larger secondary ' +
      'response dominated by high-affinity IgG.\n\n' +
      'Researchers immunized mice with a protein antigen on day 0 and gave a second (booster) dose of the same antigen ' +
      'on day 28. They measured antigen-specific antibody titers in serum using an enzyme-linked immunosorbent assay ' +
      '(ELISA). In a direct ELISA, the antigen is immobilized in a well; serum antibodies that bind it are then ' +
      'detected by an enzyme-linked secondary antibody, and a substrate produces a colored product whose intensity is ' +
      'proportional to bound antibody.\n\n' +
      'After the day-0 dose, IgM rose first and peaked around day 10, then declined; IgG rose more slowly to a modest ' +
      'level. After the day-28 booster, IgG rose rapidly to a much higher peak than the primary response, while the ' +
      'IgM increase was comparatively small.\n\n' +
      'A separate control group received an unrelated antigen and showed no rise in titer to the test antigen, ' +
      'confirming the response was antigen-specific.',
    chart: {
      title: 'Figure 1. Antigen-specific antibody titers by ELISA: primary IgM response and secondary IgG response',
      kind: 'line',
      xLabel: 'Day (booster given day 28)',
      xUnit: 'days',
      yLabel: 'Antibody titer',
      seriesLabel: 'Anti-antigen IgM',
      xValues: [0, 10, 28, 35, 42],
      yValues: [0, 800, 200, 600, 300],
      comparisonSeries: [
        { label: 'Anti-antigen IgG', yValues: [0, 100, 400, 6400, 9600] },
      ],
      annotations: [
        { xIndex: 1, label: 'primary: IgM peaks first' },
        { xIndex: 2, label: 'booster (day 28)' },
        { xIndex: 4, label: 'secondary: IgG dominates' },
      ],
    },
    questions: [
      {
        question:
          'Which antibody isotype dominates the early primary response, and which dominates the secondary (post-booster) response?',
        options: [
          'IgG primary; IgM secondary',
          'IgM primary; IgG secondary',
          'IgE primary; IgA secondary',
          'IgA primary; IgM secondary',
        ],
        correctAnswer: 1,
        explanation:
          "The primary response is dominated by IgM, which appears first; the secondary (memory) response is dominated by high-affinity IgG produced rapidly and to higher titer, as the data show (IgG peaks at 9,600 after the boost). The reversed IgG-then-IgM assignment and the IgE/IgA and IgA/IgM pairings do not match the classic primary-IgM, secondary-IgG pattern.",
        skill: 'Adaptive immunity',
      },
      {
        question:
          'The post-booster IgG response was faster and reached a far higher titer than the primary IgG response. This is best explained by:',
        options: [
          "Innate immune cells remembering the antigen",
          "Memory B cells formed in the primary response",
          "A smaller antigen dose given at the booster",
          "Loss of antigen specificity after the booster"
        ],
        correctAnswer: 1,
        explanation:
          "Immunological memory resides in long-lived memory B (and T) cells produced during the primary response; on re-exposure they proliferate and differentiate quickly into plasma cells, giving the faster, higher-affinity, higher-titer secondary IgG response. The innate system does not generate this classical antigen-specific memory. The booster used the same antigen at the same dose, and specificity is retained rather than lost.",
        skill: 'Immunological memory',
      },
      {
        question:
          'In the direct ELISA described, what produces the measurable signal?',
        options: [
          "Intrinsic fluorescence of the immobilized antigen",
          "Radioactive decay of an isotope-labeled antigen",
          "An enzyme on the detection antibody colors a substrate",
          "Agglutination of red blood cells added to the well"
        ],
        correctAnswer: 2,
        explanation:
          'ELISA reads out bound antibody through an enzyme linked to the detection (secondary) antibody; the enzyme converts a substrate into a colored product whose intensity is proportional to the amount of bound antibody. It is enzymatic/colorimetric, not radioactive, not hemagglutination, and the antigen is not intrinsically fluorescent in this format.',
        skill: 'Molecular techniques',
      },
      {
        question:
          'What is the purpose of the control group immunized with an unrelated antigen?',
        options: [
          "To measure the enzyme activity of the ELISA substrate",
          "To supply memory cells to the experimental group",
          "To amplify the response to the test antigen",
          "To show the antibody rise is antigen-specific"
        ],
        correctAnswer: 3,
        explanation:
          'A group given an unrelated antigen should not develop antibodies that bind the test antigen; its flat titer confirms that the signal in the experimental group reflects a specific response to the test antigen rather than nonspecific or cross-reactive binding. It does not boost, measure substrate kinetics, or share cells with the experimental group.',
        skill: 'Experimental controls',
      },
      {
        question:
          'B cells and T cells both mediate adaptive immunity. Which statement correctly distinguishes a key function?',
        options: [
          "B cells secrete antibodies; cytotoxic T cells kill infected cells",
          "B cells are professional phagocytes; T cells secrete antibodies",
          "B cells and T cells both secrete antibodies in equal amounts",
          "T cells mediate humoral and B cells cell-mediated immunity"
        ],
        correctAnswer: 0,
        explanation:
          "B cells, as plasma cells, secrete antibodies, the basis of humoral immunity; cytotoxic (CD8+) T cells recognize and kill virus-infected or abnormal host cells, a core of cell-mediated immunity. T cells never secrete antibody, so any option assigning antibody production to them is wrong, and B cells are antigen-presenting cells rather than professional phagocytes of the macrophage or neutrophil type. The humoral and cell-mediated assignments in the last option are reversed.",
        skill: 'Adaptive immunity',
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
      "Condensation, releasing $\\text{H}_2\\text{O}$",
      "Condensation, releasing $\\text{CO}_2$ instead",
      "Reduction, which releases molecular $\\text{O}_2$",
      "Hydrolysis, which consumes $\\text{H}_2\\text{O}$"
    ],
    correctAnswer: 0,
    explanation:
      'Peptide bond formation is a condensation (dehydration) reaction: the carboxyl and amino groups join with loss of a water molecule. Hydrolysis does consume water, but it breaks a peptide bond rather than forming one. No $\\text{CO}_2$ or $\\text{O}_2$ is released in peptide bond formation.',
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
      'The P (peptidyl) site holds the tRNA bearing the growing polypeptide chain; the A (aminoacyl) site receives the incoming aminoacyl-tRNA, and the E (exit) site holds the deacylated tRNA before it leaves. The 5′ cap is an mRNA feature, not a ribosomal site.',
    skill: 'Translation',
  },
  {
    id: 'bb-disc-03',
    section: 'bio-biochem',
    discipline: 'genetics',
    question:
      'A man with hemophilia A (X-linked recessive) has children with a woman who is not a carrier and is unaffected. What is expected for their children?',
    options: [
      "All daughters affected and all sons unaffected",
      "All sons affected and all daughters unaffected",
      "All daughters carriers, all sons unaffected",
      "Half of all children affected, regardless of sex"
    ],
    correctAnswer: 2,
    explanation:
      'The father is $X^h Y$; the mother is $X^H X^H$. Daughters receive the father’s $X^h$ and a maternal $X^H$, so all are unaffected carriers ($X^H X^h$). Sons receive the father’s Y and a maternal $X^H$, so all are $X^H Y$, unaffected. Sons are not affected, affection is not 50% across both sexes, and daughters are carriers, not affected.',
    skill: 'X-linked inheritance',
  },
  {
    id: 'bb-disc-04',
    section: 'bio-biochem',
    discipline: 'metabolism',
    question:
      'Under anaerobic conditions in human muscle, pyruvate is converted to lactate by lactate dehydrogenase. What is the primary metabolic purpose of this step?',
    options: [
      "To make $\\text{CO}_2$ for the bicarbonate buffer",
      "To supply acetyl-CoA to the TCA cycle",
      "To generate extra ATP directly from lactate",
      "To regenerate $\\text{NAD}^+$ for glycolysis"
    ],
    correctAnswer: 3,
    explanation:
      'Reducing pyruvate to lactate oxidizes $\\text{NADH}$ back to $\\text{NAD}^+$. Glycolysis needs $\\text{NAD}^+$ at the glyceraldehyde-3-phosphate dehydrogenase step, so regenerating it lets glycolysis (and its net ATP production) keep running without oxygen. The lactate step itself yields no ATP and produces no $\\text{CO}_2$. Acetyl-CoA formation is the aerobic fate via pyruvate dehydrogenase, not this anaerobic step.',
    skill: 'Glycolysis and fermentation',
  },
  {
    id: 'bb-disc-05',
    section: 'bio-biochem',
    discipline: 'cell biology',
    question:
      'The $\\text{Na}^+/\\text{K}^+$-ATPase moves ions across the plasma membrane. Which statement accurately describes its action per cycle?',
    options: [
      "It pumps 3 $\\text{Na}^+$ out and 2 $\\text{K}^+$ in per ATP",
      "It pumps 2 $\\text{Na}^+$ out and 3 $\\text{K}^+$ in without ATP",
      "It lets both ions move down their gradients passively",
      "It swaps $\\text{Na}^+$ for $\\text{Ca}^{2+}$ without ATP"
    ],
    correctAnswer: 0,
    explanation:
      "The $\\text{Na}^+/\\text{K}^+$-ATPase is a primary active transporter that hydrolyzes one ATP to pump 3 $\\text{Na}^+$ out of and 2 $\\text{K}^+$ into the cell, both against their gradients. The reversed 2-out, 3-in stoichiometry is wrong and also wrongly omits ATP. The pump is active, not facilitated diffusion. The $\\text{Na}^+/\\text{Ca}^{2+}$ exchanger is a different, secondary-active transporter driven by the sodium gradient this pump creates.",
    skill: 'Membrane transport',
  },
  {
    id: 'bb-disc-06',
    section: 'bio-biochem',
    discipline: 'microbiology',
    question:
      'A retrovirus such as HIV must perform which step that distinguishes its replication from that of a typical DNA virus?',
    options: [
      "Reverse transcription of its RNA genome into DNA",
      "Assembly of new virions at the plasma membrane",
      "Transcription of its genes by RNA polymerase II",
      "Translation of viral mRNA on host ribosomes"
    ],
    correctAnswer: 0,
    explanation:
      'Retroviruses carry an RNA genome and the enzyme reverse transcriptase, which copies that RNA into DNA; integrase then inserts the DNA (provirus) into the host genome—the defining feature absent from typical DNA viruses. Translation on host ribosomes, membrane assembly, and using host RNA polymerase are shared with many viruses and do not uniquely distinguish a retrovirus.',
    skill: 'Virology',
  },
  {
    id: 'bb-disc-07',
    section: 'bio-biochem',
    discipline: 'biochemistry',
    question:
      'Which set of amino acids is correctly grouped by side-chain property?',
    options: [
      "Serine and threonine have basic, chargeable side chains",
      "Lysine, arginine, and histidine are basic residues",
      "Aspartate and glutamate have nonpolar, hydrophobic chains",
      "Valine, leucine, and isoleucine are negatively charged"
    ],
    correctAnswer: 1,
    explanation:
      'Lysine, arginine, and histidine have basic side chains that can carry a positive charge near physiological pH (histidine’s pKa ~6 makes it partly protonated). Aspartate and glutamate are acidic and negatively charged, not positively charged. Valine, leucine, and isoleucine are branched, nonpolar/hydrophobic and uncharged. Serine and threonine are polar uncharged (hydroxyl) residues, not basic.',
    skill: 'Amino acids and proteins',
  },
  {
    id: 'bb-disc-08',
    section: 'bio-biochem',
    discipline: 'metabolism',
    question:
      'In a well-fed state, high insulin and high glucose promote which metabolic shift in the liver?',
    options: [
      "Lipolysis in adipose tissue, releasing fatty acids",
      "Glycogenolysis together with gluconeogenesis",
      "Glycogen synthesis together with glycolysis",
      "Ketone body production for export to the brain"
    ],
    correctAnswer: 2,
    explanation:
      'In the fed state, insulin signals fuel abundance: the liver takes up glucose and favors glycogen synthesis and glycolysis (and lipogenesis), storing and using glucose. Glycogenolysis and gluconeogenesis are fasting-state, glucagon-driven processes that release glucose. Ketogenesis and adipose lipolysis are also fasting/low-insulin responses, opposite to the fed state.',
    skill: 'Metabolic regulation',
  },
  {
    id: 'bb-disc-09',
    section: 'bio-biochem',
    discipline: 'physiology',
    question:
      'During the cardiac cycle, the QRS complex of an electrocardiogram corresponds most directly to which electrical event?',
    options: [
      'Ventricular repolarization',
      'Closure of the atrioventricular valves',
      'Atrial depolarization',
      'Ventricular depolarization'],
    correctAnswer: 3,
    explanation:
      'The QRS complex reflects ventricular depolarization, which triggers ventricular contraction; its large amplitude reflects the large ventricular muscle mass. Atrial depolarization is the P wave, and ventricular repolarization is the T wave. Valve closure is a mechanical event that produces heart sounds, not an ECG deflection.',
    skill: 'Cardiac physiology',
  },
]
