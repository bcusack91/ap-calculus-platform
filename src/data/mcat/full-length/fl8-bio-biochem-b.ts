/**
 * MCAT full-length FORM 8 — Bio/Biochem section, file B (passages 6–10 +
 * discretes 1–7). Authored 2026-10-01 against the AAMC-representative
 * blueprint (scratchpad/mcat-fl/BLUEPRINT.md + BLUEPRINT-F78.md): 400–600-word
 * passages, mixed experiment/information formats, skill mix ≈ 35/45/10/10,
 * keys that cannot be found by matching passage wording, position- and
 * length-balanced options.
 *
 * KEY INVARIANT: the passage runner does NOT shuffle options — keys were
 * authored position-balanced and explanations reference options by CONTENT.
 *
 * LaTeX renders through KaTeX; backslashes are double-escaped in these strings.
 */
import type { MCATPassage, MCATDiscreteQuestion } from '../types'

export const FL8_BIO_BIOCHEM_B_PASSAGES: MCATPassage[] = [
  // ────────────────────────────────────────────────────────────────────────
  // 6. METABOLISM — The citric acid cycle under attack: fluoroacetate, arsenite, anaplerosis (experiment, table)
  // ────────────────────────────────────────────────────────────────────────
  {
    id: 'fl8-bb-b-06',
    section: 'bio-biochem',
    discipline: 'metabolism',
    title: 'Two Poisons of the Citric Acid Cycle in the Perfused Rat Heart',
    passageText:
      'The citric acid cycle completes the oxidation of fuels in the mitochondrial matrix. Each turn begins when citrate synthase condenses acetyl-CoA with oxaloacetate to form citrate. Aconitase converts citrate to isocitrate, and two oxidative decarboxylations, catalyzed by isocitrate dehydrogenase and by the α-ketoglutarate dehydrogenase complex, release two molecules of $\\text{CO}_2$ and yield succinyl-CoA. The remaining reactions convert succinyl-CoA through succinate, fumarate, and malate back to oxaloacetate. Because oxaloacetate is regenerated in every turn, a small pool of intermediates can oxidize a large amount of acetyl-CoA. Intermediates that are withdrawn from the cycle for biosynthesis must be replaced by reactions that feed new carbon skeletons into it, a process called anaplerosis. The NADH and $\\text{FADH}_2$ formed in the cycle are reoxidized by the electron transport chain, which accounts for nearly all of the oxygen that a working heart consumes.\n\nTwo classical poisons interrupt the cycle at different points. Fluoroacetate, a toxin found in several plants, has no effect on any purified enzyme of the cycle. Inside cells, however, it is converted to fluoroacetyl-CoA, which citrate synthase accepts in place of acetyl-CoA, and the product, fluorocitrate, binds very tightly to aconitase. Arsenite reacts with pairs of closely spaced thiol (–SH) groups, forming a stable ring that includes the arsenic atom. Its principal target is lipoamide, a cofactor that is covalently attached to the pyruvate dehydrogenase complex and to the α-ketoglutarate dehydrogenase complex. In both complexes, the acyl group that remains after decarboxylation of the α-keto acid is passed first to lipoamide and then to coenzyme A. This transfer leaves lipoamide with two free thiol groups, which must be reoxidized to a disulfide before the next molecule of substrate can be processed.\n\nInvestigators perfused isolated rat hearts with an oxygenated bicarbonate buffer that contained glucose and insulin and no other fuel. After 10 minutes, fluoroacetate, arsenite, or no poison was added, and the perfusion was continued for 30 minutes. The hearts were then frozen rapidly and extracted for the measurement of metabolites. Glucose uptake, lactate release, and oxygen consumption were measured during the final 10 minutes (Table 1).\n\nTwo further observations were made. First, when the bicarbonate of the buffer was labelled with $^{14}\\text{C}$, the citrate that accumulated in the fluoroacetate-treated hearts was radioactive. Second, the oxygen consumption of arsenite-treated hearts returned nearly to the control value within minutes when 2,3-dimercaptopropanol, a small molecule with thiol groups on two adjacent carbons, was added to the buffer. It did not recover when 2-mercaptoethanol, which has a single thiol group, was added at twice that concentration.',
    figure:
      '**Table 1. Tissue metabolites and metabolic rates of perfused rat hearts after 30 minutes with the additions shown (means of six hearts; all values per gram of dry tissue)**\n\n| Addition | Citrate (μmol/g) | α-Ketoglutarate (μmol/g) | Malate (μmol/g) | Pyruvate (μmol/g) | Glucose uptake (μmol/min per g) | Lactate release (μmol/min per g) | O₂ consumption (% of control) |\n|---|---|---|---|---|---|---|---|\n| None | 1.2 | 0.40 | 0.60 | 0.20 | 4.0 | 1.0 | 100 |\n| Fluoroacetate | 9.6 | 0.10 | 0.20 | 0.25 | 1.6 | 0.8 | 40 |\n| Arsenite | 0.3 | 1.60 | 0.15 | 1.80 | 6.0 | 10.5 | 25 |',
    questions: [
      {
        question:
          'Which mechanism best explains the lower glucose uptake of the fluoroacetate-treated hearts in Table 1?',
        options: [
          'Fluorocitrate that leaves the mitochondria binds tightly to hexokinase',
          'Citrate that leaves the mitochondria inhibits phosphofructokinase-1',
          'A lower ATP concentration in the cytosol inhibits phosphofructokinase-1',
          'A lower rate of oxygen consumption closes the glucose carriers of the cell',
        ],
        correctAnswer: 1,
        explanation:
          'Citrate is an allosteric inhibitor of phosphofructokinase-1; when it rises eightfold and is exported to the cytosol, glycolysis slows at that step, glucose 6-phosphate accumulates and inhibits hexokinase, and glucose uptake falls even though the cell is short of ATP. Fluorocitrate is described as binding aconitase, and nothing suggests that it acts on hexokinase. A fall in ATP (with the accompanying rise in AMP) activates phosphofructokinase-1 rather than inhibiting it, as the higher glucose uptake of the arsenite-treated hearts illustrates. Glucose carriers are not gated by the rate of oxygen consumption; arsenite lowered oxygen consumption further and glucose uptake rose.',
        skill: '1D regulation of glycolysis by citrate',
      },
      {
        question:
          'In the fluoroacetate-treated hearts, citrate rose by far more than α-ketoglutarate and malate fell. Together with the result obtained with labelled bicarbonate, this finding indicates that the carbon skeletons for the additional citrate were supplied largely by:',
        options: [
          'carboxylation of pyruvate, which adds oxaloacetate to the cycle.',
          'decarboxylation of pyruvate, which adds acetyl-CoA to the cycle.',
          'oxidation of malate, which regenerates the oxaloacetate consumed.',
          'activation of fluoroacetate, which adds two carbons in each turn.',
        ],
        correctAnswer: 0,
        explanation:
          'Every citrate formed consumes one oxaloacetate, and with aconitase blocked that oxaloacetate is not regenerated. Citrate rose by 8.4 μmol/g while the other measured intermediates fell by only 0.7 μmol/g, so new four-carbon units must have entered the cycle; pyruvate carboxylase, a biotin enzyme that fixes bicarbonate onto pyruvate, makes oxaloacetate and would place label from bicarbonate in citrate. Acetyl-CoA from pyruvate dehydrogenase supplies only the two-carbon partner and releases $\\text{CO}_2$ rather than fixing it. Oxidation of malate merely recycles intermediates already present and cannot produce a net gain. A fluoroacetyl group likewise supplies two carbons and still requires an oxaloacetate for each condensation.',
        skill: '1D anaplerosis: pyruvate carboxylase (data interpretation)',
      },
      {
        question:
          'Suppose that arsenite-treated hearts were supplied with octanoate, a fatty acid that is converted to acetyl-CoA by β-oxidation, in place of glucose. Which outcome is most likely?',
        options: [
          'The cycle would run normally, because acetyl-CoA would be formed without lipoamide',
          'Pyruvate would rise further, because octanoate carbon would be converted to pyruvate',
          'Citrate would not be formed, because citrate synthase depends on reduced lipoamide',
          'α-Ketoglutarate would still accumulate, because its oxidation depends on lipoamide',
        ],
        correctAnswer: 3,
        explanation:
          'β-Oxidation uses FAD- and NAD⁺-linked dehydrogenases and a thiolase, none of which contains lipoamide, so octanoate supplies acetyl-CoA despite the block at pyruvate dehydrogenase. The acetyl-CoA can form citrate, but the cycle is still interrupted at the α-ketoglutarate dehydrogenase complex, which arsenite inactivates in the same way, so α-ketoglutarate continues to pile up and the cycle cannot run normally. Animals cannot convert the carbon of an even-chain fatty acid into pyruvate. Citrate synthase has no lipoamide cofactor; citrate fell in Table 1 only because acetyl-CoA from glucose was lacking.',
        skill: '1D lipoamide-dependent dehydrogenase complexes',
      },
      {
        question:
          'Which explanation best accounts for the different effects of 2,3-dimercaptopropanol and 2-mercaptoethanol on the arsenite-treated hearts?',
        options: [
          'Only the dithiol can bind arsenite through two thiols at once and so draw it away from lipoamide',
          'Only the dithiol can cross the mitochondrial membranes and so reach the enzymes of the matrix',
          'Only the dithiol can take the place of lipoamide as the acyl carrier of the two complexes',
          'Only the dithiol can reduce the disulfide of lipoamide to the form that accepts acyl groups',
        ],
        correctAnswer: 0,
        explanation:
          'Arsenite is held by lipoamide because the two thiols close a stable ring around the arsenic atom. A compound with two thiols on adjacent carbons can form the same kind of ring and so competes effectively for arsenite, freeing lipoamide; a monothiol can form only a weaker, open complex and fails even at twice the concentration. 2-Mercaptoethanol is a small, uncharged molecule that crosses membranes readily, so access is not the difference. A free dithiol is not attached to the enzyme complex and cannot carry acyl groups between its active sites. Arsenite-bound lipoamide is not a disulfide, and the step that arsenite prevents is reoxidation, not reduction.',
        skill: '1D arsenite and paired thiol groups',
      },
      {
        question:
          'The fall in oxygen consumption caused by arsenite might reflect a direct action on the electron transport chain rather than the loss of two dehydrogenase complexes. Mitochondria are isolated from arsenite-treated hearts. Measuring their oxygen consumption with which added substrate would best distinguish between these possibilities?',
        options: ['Pyruvate', 'α-Ketoglutarate', 'Succinate', 'Glucose'],
        correctAnswer: 2,
        explanation:
          'Succinate is oxidized by succinate dehydrogenase, which passes electrons to ubiquinone and on to oxygen without any lipoamide-dependent step; brisk oxygen consumption with succinate would show that the chain is intact, and poor consumption would point to the chain itself. Pyruvate and α-ketoglutarate must first be oxidized by the two arsenite-sensitive complexes, so oxygen consumption with either would be low under both hypotheses. Isolated mitochondria cannot oxidize glucose, because glycolysis is cytosolic, so that substrate would give no information.',
        skill: '1D research design: locating a site of inhibition',
      },
    ],
  },

  // ────────────────────────────────────────────────────────────────────────
  // 7. MOLECULAR BIOLOGY — Premature stop codons: nonsense-mediated decay, read-through, suppressor tRNA (experiment, table)
  // ────────────────────────────────────────────────────────────────────────
  {
    id: 'fl8-bb-b-07',
    section: 'bio-biochem',
    discipline: 'molecular biology',
    title: 'Nonsense Mutations in Fibroblasts From Three Patients With an Enzyme Deficiency',
    passageText:
      'About one in ten of the mutations known to cause inherited disease in humans is a nonsense mutation, a base substitution that converts a codon for an amino acid into one of the three stop codons, UAA, UAG, or UGA. The shortened protein encoded by such an allele is usually inactive. In most cases very little of it is made, because cells destroy the mutant mRNA by a process called nonsense-mediated decay (NMD).\n\nNMD depends on a mark that splicing leaves on the transcript. Each time an intron is removed in the nucleus, a group of proteins called the exon junction complex (EJC) is deposited on the mRNA about 20 nucleotides upstream of the new exon–exon junction, and it accompanies the mRNA to the cytoplasm. The first ribosome to translate the message displaces each EJC that it meets. If this ribosome terminates at a stop codon while an EJC is still bound farther downstream, proteins associated with the terminating ribosome interact with the EJC and trigger removal of the cap and rapid degradation of the mRNA. In nearly all human genes, the normal stop codon lies in the last exon.\n\nTwo strategies for restoring a full-length protein are under study. Aminoglycoside antibiotics such as gentamicin bind the site on the small ribosomal subunit where codon and anticodon are matched, and they make this matching less accurate. In their presence, a stop codon is occasionally read by an aminoacyl-tRNA whose anticodon pairs with only two of its three bases, and the ribosome continues to the normal stop codon (read-through). The second strategy supplies a suppressor tRNA, produced by altering the anticodon of a tRNA gene so that the tRNA pairs with a stop codon. The altered tRNA is still charged with its usual amino acid.\n\nInvestigators studied skin fibroblasts from three unrelated patients who lacked the activity of a lysosomal enzyme. Each patient was homozygous for a different nonsense mutation in *LYH*, a gene of 10 exons whose 520 codons are followed by the stop codon UAA. The amount of *LYH* mRNA was measured in untreated cells and in cells exposed for 4 hours to cycloheximide, which blocks the elongation step of translation on cytosolic ribosomes. Full-length enzyme was measured with an antibody that binds the last 15 amino acids of the protein, in untreated cells and in cells grown for 48 hours with gentamicin (Table 1). Gentamicin did not measurably alter the amount of *LYH* mRNA in any culture. A second antibody, which binds a segment near the amino terminus of the enzyme, detected a protein smaller than the normal enzyme in untreated cells of patient 3; no such protein was found in the cells of patients 1 and 2.\n\nFinally, the investigators introduced into the cells of each patient a gene for a glutamine tRNA whose anticodon had been changed so that it pairs with the codon UAG.',
    figure:
      '**Table 1. *LYH* mRNA and full-length LYH protein in cultured fibroblasts (each value is a percentage of the value in untreated control cells)**\n\n| Cells | Nonsense mutation | Exon | mRNA, untreated | mRNA, cycloheximide | Full-length protein, untreated | Full-length protein, gentamicin |\n|---|---|---|---|---|---|---|\n| Control | None | — | 100 | 104 | 100 | 98 |\n| Patient 1 | Codon 112: CGA (Arg) → UGA | 3 | 10 | 88 | Not detected | 1.0 |\n| Patient 2 | Codon 301: UGG (Trp) → UAG | 6 | 20 | 92 | Not detected | 0.5 |\n| Patient 3 | Codon 498: CAG (Gln) → UAG | 10 | 100 | 102 | Not detected | 2.5 |',
    questions: [
      {
        question:
          'Before attributing the low mRNA levels in the cells of patients 1 and 2 to NMD, the investigators needed to rule out other causes. Which alternative explanation is excluded by the measurements made in the presence of cycloheximide?',
        options: [
          'The mutant mRNA is degraded by a process that depends on ribosomes',
          'The mutant mRNA is degraded only after it has left the nucleus',
          'The mutant alleles encode a protein that is rapidly degraded',
          'The mutant alleles are transcribed more slowly than the normal allele',
        ],
        correctAnswer: 3,
        explanation:
          'If the nonsense mutations lowered the rate of transcription, stopping translation would leave the mRNA level low. Instead, 4 hours of cycloheximide raised it from 10–20% to about 90% of the control value, so the mutant transcripts are made at a nearly normal rate and are lost through a process that requires translation. Degradation that depends on ribosomes is the NMD hypothesis itself, which these results support and do not exclude. The measurements do not show where in the cell the mRNA is degraded. The stability of the encoded protein cannot be judged from measurements of mRNA.',
        skill: '1B research design: excluding an alternative explanation',
      },
      {
        question:
          'Which explanation best accounts for the normal amount of *LYH* mRNA in the untreated cells of patient 3?',
        options: [
          'Ribosomes seldom travel far enough along the mRNA to reach codon 498',
          'No exon–exon junction lies downstream of the new stop codon at codon 498',
          'Release factors recognize UAG less efficiently than they do UGA',
          'The shortened protein made from the mRNA shields it from degradation',
        ],
        correctAnswer: 1,
        explanation:
          'The mutation of patient 3 lies in exon 10, the last exon, so every EJC on the transcript is upstream of the new stop codon and has been displaced by the time the ribosome terminates; with no EJC remaining downstream, the signal for decay is absent, just as it is at a normal stop codon. Ribosomes plainly reach codon 498, because a shortened protein is abundant in these cells. Patient 2 has the same stop codon, UAG, and that mRNA is degraded, so the identity of the stop codon is not the explanation. Nothing suggests that a truncated protein protects its mRNA, and patients 1 and 2 would be expected to make such a protein briefly as well.',
        skill: '1B nonsense-mediated decay and the position of a stop codon',
      },
      {
        question:
          'Assume that, in cells grown with gentamicin, the amount of full-length protein is proportional to the amount of *LYH* mRNA multiplied by the fraction of ribosomes that read through the premature stop codon. Table 1 then indicates that read-through induced by gentamicin:',
        options: [
          'occurs about four times as often at UGA as at UAG.',
          'occurs about equally often at UGA and at UAG.',
          'occurs most often at the stop codon nearest the 3′ end.',
          'occurs about twice as often at UGA as at UAG.',
        ],
        correctAnswer: 0,
        explanation:
          'Dividing the full-length protein by the mRNA level gives the fraction of ribosomes that read through: 1.0/10 = 0.10 for the UGA codon of patient 1, 0.5/20 = 0.025 for the UAG codon of patient 2, and 2.5/100 = 0.025 for the UAG codon of patient 3, a fourfold difference between UGA and UAG. Equal frequencies would require equal ratios. The codon nearest the 3′ end (patient 3) yields the most protein only because its mRNA is ten times as abundant; its read-through fraction equals that of patient 2. A twofold difference comes from comparing the protein values of patients 1 and 2 (1.0 and 0.5) without allowing for their different mRNA levels.',
        skill: '1B read-through efficiency (data analysis)',
      },
      {
        question:
          'In the cells of which patient or patients could the altered glutamine tRNA give rise to an enzyme whose amino acid sequence is identical to that of the normal enzyme?',
        options: ['Patient 1 only', 'Patient 2 only', 'Patient 3 only', 'Patients 2 and 3 only'],
        correctAnswer: 2,
        explanation:
          'The altered tRNA pairs with UAG and still carries glutamine. In patient 3 the UAG codon replaced a glutamine codon (CAG), so inserting glutamine at codon 498 restores the normal sequence, and the normal stop codon, UAA, is not read by this tRNA. In patient 2 the UAG codon replaced a tryptophan codon, so the full-length protein would carry glutamine in place of tryptophan at position 301. The stop codon of patient 1 is UGA, with which the altered anticodon does not pair, so no full-length protein would result.',
        skill: '1B suppressor tRNA',
      },
    ],
  },

  // ────────────────────────────────────────────────────────────────────────
  // 8. CELL BIOLOGY — Meiosis and aneuploidy: oocyte arrest, cohesin loss, nondisjunction, monosomy, mosaicism (information)
  // ────────────────────────────────────────────────────────────────────────
  {
    id: 'fl8-bb-b-08',
    section: 'bio-biochem',
    discipline: 'cell biology',
    title: 'Why Human Oocytes So Often Carry the Wrong Number of Chromosomes',
    passageText:
      'Aneuploidy, the gain or loss of individual chromosomes, is the most frequent known cause of miscarriage in humans. Nearly all of it arises during meiosis, and most of it arises in the oocyte. About 2% of sperm are aneuploid, compared with roughly 20% of the oocytes of women in their twenties and more than half of the oocytes of women over 40.\n\nThe difference reflects the timing of meiosis in the two sexes. In males, meiosis begins at puberty, and a spermatocyte completes both divisions within a few weeks. In females, every oocyte replicates its DNA and enters meiosis during fetal life. Homologous chromosomes pair and cross over, and the oocyte then arrests in prophase I, where it remains until shortly before it is ovulated, between 12 and 50 years later. Meiosis I is completed just before ovulation, and meiosis II only after fertilization.\n\nThroughout the arrest, the two homologs of each pair must stay joined as a unit called a bivalent, and the connection depends on cohesin, a ring-shaped protein complex that holds sister chromatids together along their length. A crossover links one chromatid of each homolog, but the homologs remain attached only because cohesin continues to hold sister chromatids together between the crossover and the end of the chromosome arm. At anaphase I, an enzyme cleaves cohesin along the arms, which frees the homologs to move to opposite poles. Cohesin at the centromere is protected until anaphase II, when it too is cleaved and the sister chromatids separate. Cohesin is loaded onto the chromosomes of the oocyte when the DNA is replicated, and experiments in mice indicate that little or none is added afterward. As cohesin is gradually lost, bivalents come apart prematurely into separate homologs, and sister chromatids may also separate early. Chromosomes released in this way attach to the spindle independently of one another and are often distributed at random.\n\nThe consequences depend on the chromosome involved. An embryo with three copies of an autosome (trisomy) usually dies early in development; only trisomies 13, 18, and 21, which involve the three autosomes that carry the fewest genes, are regularly seen at birth. An embryo with a single copy of an autosome (monosomy) is lost so early that the pregnancy is rarely recognized: every gene on that chromosome is expressed at about half of its normal level, and any harmful recessive allele on the remaining copy is exposed. The only monosomy compatible with survival is 45,X, and even so about 99% of 45,X embryos are lost before birth.\n\nNot every aneuploid person is aneuploid in every cell. An individual whose body contains two or more genetically different populations of cells, all descended from a single zygote, is called a mosaic. Mosaicism for a trisomy generally produces milder features than the same trisomy present in every cell, and the two cell populations may be represented in different proportions in different tissues.',
    questions: [
      {
        question:
          'In one primary spermatocyte, the two homologs of chromosome 21 pass to the same pole at meiosis I, and meiosis II is normal. In a second primary spermatocyte, meiosis I is normal, and the sister chromatids of chromosome 21 fail to separate in one of the two cells undergoing meiosis II. How many of the four sperm derived from each primary spermatocyte carry exactly one copy of chromosome 21?',
        options: [
          'Two from the first spermatocyte and none from the second',
          'Two from the first spermatocyte and two from the second',
          'None from the first spermatocyte and two from the second',
          'None from the first spermatocyte and none from the second',
        ],
        correctAnswer: 2,
        explanation:
          'After nondisjunction at meiosis I, one secondary spermatocyte holds both homologs and the other holds neither; a normal meiosis II then yields two sperm with two copies of chromosome 21 and two with no copy, so none has exactly one. When meiosis I is normal, each secondary spermatocyte holds one homolog. The cell in which the sister chromatids fail to separate yields one sperm with two copies and one with none, and the other cell divides normally to give two sperm with one copy each. The remaining choices assign normal sperm to the first spermatocyte, deny them to the second, or both.',
        skill: '2C nondisjunction in meiosis I vs meiosis II',
      },
      {
        question:
          'Based on the passage, which bivalent would be most likely to fall apart into two unconnected homologs during the long arrest of an oocyte?',
        options: [
          'A bivalent with one crossover close to the centromere',
          'A bivalent with one crossover on each of its two arms',
          'A bivalent with two crossovers along the same arm',
          'A bivalent with one crossover close to the end of an arm',
        ],
        correctAnswer: 3,
        explanation:
          'The homologs are held together by the cohesin that lies between a crossover and the end of the arm. A single crossover near the end of an arm leaves only a short stretch of cohesin to maintain the connection, so the loss of relatively few cohesin complexes frees the homologs. A crossover near the centromere has nearly a whole arm of cohesin beyond it. With a crossover on each arm, or two on one arm, the homologs are joined at two places, and the cohesin beyond both crossovers would have to be lost before they came apart.',
        skill: '2C sister-chromatid cohesion and chiasmata',
      },
      {
        question:
          'A girl with the karyotype 45,X has hemophilia A, an X-linked recessive disorder. Her father does not have hemophilia, and her mother is a carrier. Which statement best accounts for her condition?',
        options: [
          'Her only X chromosome came from her father, who carries the mutant allele without being affected',
          'Her only X chromosome came from her mother, and she has no second X to supply a normal allele',
          'Her only X chromosome came from her mother, and it has been inactivated in most cells of her body',
          'Her only X chromosome came from her father, and the mutant allele acts as a dominant in females',
        ],
        correctAnswer: 1,
        explanation:
          'A recessive allele on a chromosome that has no partner is expressed, which is one reason monosomy is so harmful. This girl received the X chromosome that carries her mother’s mutant allele and no sex chromosome from her father, so, like a male, she has a single copy of every X-linked gene and shows the recessive phenotype. A man has one X chromosome and cannot carry an X-linked recessive allele without being affected, so an unaffected father cannot be the source. A single X chromosome is not inactivated; inactivation silences only the X chromosomes in excess of one. The disorder is stated to be recessive, and the unaffected father has no mutant allele to transmit.',
        skill: '2C monosomy X and expression of a recessive allele',
      },
      {
        question:
          'A child has mild features of Down syndrome. Of the blood cells examined, 30% have the karyotype 47,XX,+21 and 70% have the karyotype 46,XX. Which event most likely produced this pattern?',
        options: [
          'Missegregation of chromosome 21 in a mitotic division of the early embryo',
          'Nondisjunction of chromosome 21 in meiosis I of the oocyte, with normal mitoses',
          'Nondisjunction of chromosome 21 in meiosis II of the sperm, with normal mitoses',
          'Fertilization of one normal oocyte by two normal sperm, with normal mitoses',
        ],
        correctAnswer: 0,
        explanation:
          'Two cell lines in one person must have diverged after fertilization, so a chromosome 21 must have been gained or lost in a mitotic division of the embryo; the descendants of the affected cell form one population and the remaining cells form the other. A meiotic error in either parent, followed by normal mitoses, would place the same abnormal chromosome number in every cell of the body. Fertilization by two sperm adds a complete extra set of chromosomes, giving 69 chromosomes in every cell, not one extra chromosome in some cells.',
        skill: '2C mosaicism and mitotic error',
      },
    ],
  },

  // ────────────────────────────────────────────────────────────────────────
  // 9. PHYSIOLOGY — The ventricular action potential: plateau, refractoriness, two channel blockers, pacemaker cells (experiment, chart)
  // ────────────────────────────────────────────────────────────────────────
  {
    id: 'fl8-bb-b-09',
    section: 'bio-biochem',
    discipline: 'physiology',
    title: 'Two Channel Blockers and the Action Potential of Ventricular Muscle',
    passageText:
      'The action potential of a ventricular muscle cell lasts about 100 times as long as that of a neuron or a skeletal muscle fiber, and it is conventionally divided into five phases. In phase 4, the resting state, the membrane is permeable mainly to $\\text{K}^+$, and its potential lies near −85 mV. In phase 0, voltage-gated $\\text{Na}^+$ channels open, and the membrane depolarizes to about +35 mV in less than 2 ms; these channels then inactivate. In phase 1, a brief outward $\\text{K}^+$ current produces a small, rapid repolarization. During phase 2, the plateau, the potential changes slowly, because an inward current through L-type $\\text{Ca}^{2+}$ channels is nearly balanced by an outward current through $\\text{K}^+$ channels. In phase 3, the $\\text{Ca}^{2+}$ channels inactivate, the outward current through delayed-rectifier $\\text{K}^+$ channels predominates, and the cell repolarizes. The $\\text{Ca}^{2+}$ that enters during the plateau triggers the release of a much larger quantity of $\\text{Ca}^{2+}$ from the sarcoplasmic reticulum, and the resulting rise in cytosolic $\\text{Ca}^{2+}$ activates the contractile proteins. $\\text{Na}^+$ channels that have inactivated return to a state from which they can open again only after the membrane has repolarized to about −60 mV.\n\nCells of the sinoatrial (SA) node, the pacemaker of the heart, behave differently. They have no stable resting potential: after each action potential, the membrane depolarizes slowly from about −60 mV until it reaches threshold. Because few of their $\\text{Na}^+$ channels are available at these potentials, the upstroke of the nodal action potential is carried by L-type $\\text{Ca}^{2+}$ channels.\n\nInvestigators isolated single cells from the left ventricles of canine hearts and kept them at 37 °C in a physiological salt solution. Each cell was stimulated once per second through a microelectrode that also recorded the membrane potential, and the shortening of the cell during each beat was followed with a video camera. After control recordings had been made, compound X was added to the bath, and the recordings were repeated 5 minutes later. The compound was then washed out, and the procedure was repeated in the same cell with compound Y. Figure 1 shows the action potentials recorded from one cell under the three conditions; the upstroke, which was complete within 2 ms of the stimulus, is not plotted. Neither compound changed the resting potential, the peak of the upstroke, or its maximal rate of rise. Similar results were obtained in each of the eight cells studied.\n\nIn untreated cells, shortening began about 20 ms after the stimulus and was greatest at about 200 ms, and relaxation was complete by 350 ms. Compound X reduced the maximal extent of shortening to 30% of the control value, and compound Y increased it to 115% of the control value.',
    chart: {
      title:
        'Figure 1. Membrane potential of one ventricular cell, sampled every 50 ms beginning 20 ms after the stimulus',
      kind: 'line',
      xLabel: 'Time after the stimulus',
      xUnit: 'ms',
      yLabel: 'Membrane potential',
      yUnit: 'mV',
      xValues: [20, 70, 120, 170, 220, 270, 320, 370, 420],
      yValues: [20, 17, 12, 4, -15, -60, -84, -85, -85],
      seriesLabel: 'Untreated',
      comparisonSeries: [
        { label: 'Compound X', yValues: [8, -2, -18, -55, -83, -85, -85, -85, -85] },
        { label: 'Compound Y', yValues: [20, 18, 15, 10, 3, -8, -30, -68, -84] },
      ],
    },
    questions: [
      {
        question:
          'The recordings in Figure 1 and the measurements of cell shortening are most consistent with which pair of targets for the two compounds?',
        options: [
          'Compound X blocks voltage-gated Na⁺ channels; compound Y blocks L-type Ca²⁺ channels',
          'Compound X blocks L-type Ca²⁺ channels; compound Y blocks delayed-rectifier K⁺ channels',
          'Compound X blocks delayed-rectifier K⁺ channels; compound Y blocks L-type Ca²⁺ channels',
          'Compound X blocks L-type Ca²⁺ channels; compound Y blocks voltage-gated Na⁺ channels',
        ],
        correctAnswer: 1,
        explanation:
          'Compound X lowered and shortened the plateau and sharply reduced shortening, as expected if less Ca²⁺ entered through L-type channels: less inward current lets the outward K⁺ current repolarize the cell sooner, and less Ca²⁺ is available to trigger release from the sarcoplasmic reticulum. Compound Y left the early plateau unchanged, delayed repolarization, and slightly increased shortening, as expected if the outward current of phase 3 were reduced and Ca²⁺ entry continued for longer. A blocker of Na⁺ channels would lower the peak and the rate of rise of the upstroke, which neither compound did. Reversing the two assignments predicts a longer action potential with compound X and a shorter one with compound Y, the opposite of what was recorded.',
        skill: '3B ionic currents of the cardiac action potential (data interpretation)',
      },
      {
        question:
          'According to Figure 1 and the passage, the earliest time after the first stimulus at which a second stimulus could evoke another action potential in the untreated cell is closest to:',
        options: ['120 ms.', '170 ms.', '270 ms.', '370 ms.'],
        correctAnswer: 2,
        explanation:
          'A second action potential requires Na⁺ channels that have recovered from inactivation, which occurs only once the membrane has repolarized to about −60 mV. The untreated trace is still positive at 120 ms (+12 mV) and at 170 ms (+4 mV), so the channels remain inactivated at those times. It reaches −60 mV at 270 ms, the earliest sampled time at which the condition is met. By 370 ms the cell is fully repolarized and excitable, but this is 100 ms later than the earliest possible time.',
        skill: '3B refractory period of ventricular muscle (reading a figure)',
      },
      {
        question:
          'The action potential of a skeletal muscle fiber lasts about 3 ms, and its twitch lasts about 100 ms. Unlike such a fiber, the untreated ventricular cell cannot be driven into a sustained (tetanic) contraction by rapid stimulation. Which statement best explains this difference?',
        options: [
          'The ventricular cell releases too little Ca²⁺ in one beat for the forces of two beats to add',
          'The ventricular cell conducts its action potential too slowly for two stimuli to arrive close together',
          'The ventricular cell needs a far stronger stimulus than a skeletal fiber does to reach threshold',
          'The ventricular cell cannot be excited again until its relaxation is already well under way',
        ],
        correctAnswer: 3,
        explanation:
          'A skeletal fiber becomes excitable again a few milliseconds into a 100-ms twitch, so later stimuli can add force before the fiber relaxes. In the ventricular cell, the long plateau keeps Na⁺ channels inactivated until about 270 ms, by which time shortening has passed its maximum (200 ms) and relaxation is well advanced (complete by 350 ms); contractions therefore cannot fuse. The amount of Ca²⁺ released is ample for a full beat and is not what prevents summation. Conduction velocity determines when excitation arrives, not whether an excited cell can respond again. Nothing indicates a higher threshold, and a stronger stimulus cannot open inactivated channels in any case.',
        skill: '3B why cardiac muscle cannot be tetanized',
      },
      {
        question:
          'Compound X might reduce shortening by acting directly on the contractile proteins rather than through its effect on the currents of the action potential. Which experiment would best distinguish between these possibilities?',
        options: [
          'Measure force in cells with permeabilized membranes at a fixed Ca²⁺ concentration, with and without compound X',
          'Measure shortening in intact cells at several rates of stimulation, with and without compound X',
          'Measure the action potential in intact cells exposed to several concentrations of compound X',
          'Measure shortening in intact cells exposed to compound X and compound Y at the same time',
        ],
        correctAnswer: 0,
        explanation:
          'When the surface membrane is made permeable, the Ca²⁺ concentration around the contractile proteins is set by the bathing solution and no longer depends on channels. If compound X leaves force unchanged under these conditions, it must act in intact cells through the membrane currents that govern Ca²⁺ entry; if it lowers force, it acts on the contractile proteins themselves. Varying the rate of stimulation or the concentration of the compound in intact cells changes Ca²⁺ entry and any direct effect together, so neither separates them. Adding compound Y alters the action potential further and likewise cannot isolate a direct effect on the contractile proteins.',
        skill: '3B research design: isolating the site of a drug effect',
      },
      {
        question:
          'Which change in the action potential of an SA-node cell would a drug that blocks L-type Ca²⁺ channels most likely produce?',
        options: [
          'A faster upstroke that reaches a more positive peak',
          'A longer plateau that delays the repolarization',
          'A slower upstroke that reaches a less positive peak',
          'An unchanged upstroke followed by a shorter plateau',
        ],
        correctAnswer: 2,
        explanation:
          'In nodal cells the L-type Ca²⁺ channels, not Na⁺ channels, carry the upstroke; with fewer of them available, the upstroke rises more slowly and reaches a lower peak. A faster, larger upstroke would require more inward current, not less. A longer plateau is the effect of reducing an outward K⁺ current, not of reducing an inward Ca²⁺ current. An unchanged upstroke followed by a shorter plateau is what such a drug produces in ventricular cells, whose upstroke depends on Na⁺ channels.',
        skill: '3B pacemaker action potential',
      },
    ],
  },

  // ────────────────────────────────────────────────────────────────────────
  // 10. BIOCHEMISTRY — Lipid-derived signals: phospholipase A₂, cyclooxygenase, aspirin vs reversible NSAIDs, leukotrienes, glucocorticoids (information)
  // ────────────────────────────────────────────────────────────────────────
  {
    id: 'fl8-bb-b-10',
    section: 'bio-biochem',
    discipline: 'biochemistry',
    title: 'Arachidonic Acid and the Signals Made From It',
    passageText:
      'Many cells respond to injury or to hormonal stimulation by producing eicosanoids, signaling lipids made from arachidonic acid, a 20-carbon fatty acid with four cis double bonds. Cells contain almost no free arachidonic acid. It is kept esterified to the middle carbon (carbon 2) of the glycerol backbone of membrane phospholipids, and it is set free when a rise in cytosolic $\\text{Ca}^{2+}$ activates phospholipase $\\text{A}_2$, which hydrolyzes that ester bond. The release of arachidonic acid is the step that limits the rate of eicosanoid synthesis.\n\nFree arachidonic acid has two main fates. Cyclooxygenase (COX) adds two molecules of $\\text{O}_2$ to it and forms prostaglandin $\\text{H}_2$, which other enzymes convert to the products characteristic of each cell type. Platelets make thromboxane $\\text{A}_2$, which promotes the aggregation of platelets and constricts blood vessels. Endothelial cells make prostacyclin, which has the opposite effects. Other prostaglandins sensitize pain-sensing nerve endings, dilate the vessels of inflamed tissue, and raise the temperature set point of the hypothalamus. Alternatively, the enzyme 5-lipoxygenase converts arachidonic acid to leukotrienes, some of which attract neutrophils and others of which are powerful constrictors of the smooth muscle of the airways. Eicosanoids are broken down within seconds to minutes of their release, and they act through G protein-coupled receptors on the cell that made them or on its near neighbors.\n\nCyclooxygenase exists in two forms. COX-1 is present at all times in most tissues, including platelets. COX-2 is nearly absent from most resting cells, and its gene is switched on by cytokines at sites of inflammation. In both forms, arachidonic acid reaches the active site through a narrow hydrophobic channel.\n\nNonsteroidal anti-inflammatory drugs (NSAIDs) inhibit cyclooxygenase and have no effect on lipoxygenase. Aspirin (acetylsalicylic acid) transfers its acetyl group to the hydroxyl group of a serine residue that lines the channel, and the ester that results obstructs the passage of arachidonic acid. Aspirin itself disappears from the blood within about an hour, as it is hydrolyzed to salicylate, which cannot acetylate the enzyme. Ibuprofen and most other NSAIDs bind in the same channel without forming a covalent bond, and they leave it as their concentration in the plasma falls over several hours.\n\nGlucocorticoids, such as cortisol and the synthetic drug prednisone, act at earlier points. Bound to their intracellular receptor, they induce the synthesis of a protein that inhibits phospholipase $\\text{A}_2$, and they repress transcription of the COX-2 gene. Their anti-inflammatory effects take hours to develop and are broader than those of the NSAIDs, as are their adverse effects.',
    questions: [
      {
        question:
          'A single dose of aspirin suppresses the synthesis of thromboxane by platelets for about a week, whereas the synthesis of prostacyclin by endothelial cells recovers within a day. Which difference between the two kinds of cell best explains this finding?',
        options: [
          'Platelets express COX-2, and endothelial cells express COX-1',
          'Platelets store aspirin, and endothelial cells export it',
          'Platelets lack lipoxygenase, and endothelial cells contain it',
          'Platelets lack a nucleus, and endothelial cells contain one',
        ],
        correctAnswer: 3,
        explanation:
          'An acetylated enzyme molecule is permanently inactive, so activity returns only when new enzyme is made. Endothelial cells transcribe the gene and synthesize fresh cyclooxygenase within hours. Platelets are fragments of megakaryocytes with no nucleus and almost no capacity for protein synthesis, so thromboxane production recovers only as new platelets replace the old ones over 7 to 10 days. Platelets contain COX-1, and the form of the enzyme would not explain the difference, because aspirin acetylates both. Aspirin is hydrolyzed within about an hour and is not stored. Lipoxygenase has no part in the synthesis of thromboxane or prostacyclin.',
        skill: '1D irreversible enzyme inhibition and protein turnover',
      },
      {
        question:
          'A patient who takes a small daily dose of aspirin to suppress platelet function begins taking ibuprofen 30 minutes before each dose of aspirin. Within 12 hours of each dose, thromboxane synthesis by the patient’s platelets now returns nearly to its untreated level. Which explanation is most likely?',
        options: [
          'Ibuprofen removes the acetyl group that aspirin has transferred to the serine residue',
          'Ibuprofen keeps aspirin out of the channel until the aspirin has been hydrolyzed',
          'Ibuprofen is converted by the liver into a compound that directly activates platelets',
          'Ibuprofen diverts arachidonic acid away from lipoxygenase and toward cyclooxygenase',
        ],
        correctAnswer: 1,
        explanation:
          'Ibuprofen occupies the channel reversibly and, while it is bound, blocks access to the serine that aspirin must acetylate. Aspirin is gone from the blood within about an hour, before the ibuprofen has left, so the enzyme is never acetylated; when the ibuprofen concentration falls over the following hours, the unmodified enzyme resumes making thromboxane. Ibuprofen is not described as reacting with the acetylated serine, and the patient was protected before ibuprofen was added, so reversal of acetylation is not the explanation. Nothing suggests that a metabolite of ibuprofen activates platelets. Thromboxane is a cyclooxygenase product, and supplying more substrate could not restore an enzyme that had been acetylated.',
        skill: '1D reversible vs covalent inhibitors competing for one site',
      },
      {
        question:
          'In some patients with asthma, aspirin provokes constriction of the airways, whereas a glucocorticoid relieves it. Which explanation is most consistent with the passage?',
        options: [
          'Aspirin, unlike a glucocorticoid, blocks the receptors on which prostaglandins act',
          'Aspirin, unlike a glucocorticoid, inhibits the lipoxygenase of cells in the airways',
          'Aspirin, unlike a glucocorticoid, leaves arachidonic acid available to the lipoxygenase pathway',
          'Aspirin, unlike a glucocorticoid, prevents the release of arachidonic acid from lipids',
        ],
        correctAnswer: 2,
        explanation:
          'Aspirin closes the cyclooxygenase route but does not reduce the supply of arachidonic acid, so more of it can be converted by 5-lipoxygenase to leukotrienes, which constrict airway smooth muscle. A glucocorticoid inhibits phospholipase A₂ and so limits the substrate for both routes, lowering leukotriene as well as prostaglandin synthesis. Aspirin acts on the enzyme that makes prostaglandins, not on their receptors. NSAIDs have no effect on lipoxygenase, and inhibiting it would relieve, not provoke, constriction. Preventing the release of arachidonic acid is the action of the glucocorticoid, not of aspirin.',
        skill: '1D branch points: cyclooxygenase and lipoxygenase pathways',
      },
      {
        question:
          'When phospholipase $\\text{A}_2$ acts on a molecule of phosphatidylcholine that carries arachidonic acid, the product formed in addition to free arachidonic acid is:',
        options: [
          'a lysophospholipid that retains one fatty acyl chain and the phosphocholine group.',
          'a diacylglycerol that retains two fatty acyl chains and has lost the phosphocholine group.',
          'a phosphatidic acid that retains two fatty acyl chains and has lost only the choline.',
          'a monoacylglycerol that retains one fatty acyl chain and has lost the phosphate group.',
        ],
        correctAnswer: 0,
        explanation:
          'Phosphatidylcholine has fatty acids esterified at carbons 1 and 2 of glycerol and phosphocholine attached at carbon 3. Hydrolysis of the ester at carbon 2 removes one fatty acid and leaves the acyl chain at carbon 1 and the entire head group in place, a lysophospholipid. A diacylglycerol is produced when the bond between glycerol and phosphate is cleaved (by phospholipase C), and phosphatidic acid when only the choline is removed (by phospholipase D); in both cases the two acyl chains remain. A monoacylglycerol would require the loss of both a fatty acid and the phosphate-containing head group.',
        skill: '1D phospholipid structure and phospholipase specificity',
      },
    ],
  },
]

export const FL8_BIO_BIOCHEM_B_DISCRETES: MCATDiscreteQuestion[] = [
  {
    id: 'fl8-bb-b-d01',
    section: 'bio-biochem',
    discipline: 'physiology',
    question:
      'An experimental drug blocks the transporters that carry neurotransmitter molecules from the synaptic cleft back into presynaptic terminals, and it has no effect on any enzyme. At which site would the drug be LEAST likely to prolong the action of the transmitter?',
    options: [
      'A dopamine-releasing synapse in the striatum',
      'An acetylcholine-releasing junction on skeletal muscle',
      'A serotonin-releasing synapse in the brainstem',
      'A norepinephrine-releasing nerve ending in the heart',
    ],
    correctAnswer: 1,
    explanation:
      'The action of acetylcholine at the neuromuscular junction is ended by acetylcholinesterase, an enzyme in the synaptic cleft that hydrolyzes the transmitter to acetate and choline within milliseconds; no transporter takes up intact acetylcholine, so blocking transporters does not prolong its action. Dopamine, serotonin, and norepinephrine are removed from the cleft chiefly by reuptake into the terminals that released them, so a blocker of their transporters prolongs and intensifies signaling at those sites.',
    skill: '3A termination of transmitter action: reuptake vs enzymatic breakdown',
  },
  {
    id: 'fl8-bb-b-d02',
    section: 'bio-biochem',
    discipline: 'physiology',
    question:
      'An anxious student breathes rapidly and deeply for several minutes and develops light-headedness and tingling of the fingers. The symptoms fade when the student rebreathes exhaled air from a paper bag. Rebreathing is effective because it:',
    options: [
      'lowers the arterial $P_{\\text{CO}_2}$, which raises the arterial pH.',
      'raises the arterial $P_{\\text{O}_2}$, which lowers the arterial pH.',
      'raises the arterial $P_{\\text{CO}_2}$, which lowers the arterial pH.',
      'raises the arterial $P_{\\text{CO}_2}$, which raises the arterial pH.',
    ],
    correctAnswer: 2,
    explanation:
      'Hyperventilation removes $\\text{CO}_2$ faster than the tissues produce it, so arterial $P_{\\text{CO}_2}$ falls, the equilibrium $\\text{CO}_2 + \\text{H}_2\\text{O} \\rightleftharpoons \\text{H}^+ + \\text{HCO}_3^-$ shifts toward $\\text{CO}_2$, and the pH rises (respiratory alkalosis). Exhaled air is rich in $\\text{CO}_2$; breathing it again raises arterial $P_{\\text{CO}_2}$ and brings the pH back down toward 7.4. Lowering $P_{\\text{CO}_2}$ further would worsen the alkalosis. Arterial $P_{\\text{O}_2}$ does not set the pH, and rebreathed air contains less oxygen, not more. A rise in $P_{\\text{CO}_2}$ increases the hydrogen ion concentration and therefore cannot raise the pH.',
    skill: '3B hyperventilation and respiratory alkalosis',
  },
  {
    id: 'fl8-bb-b-d03',
    section: 'bio-biochem',
    discipline: 'physiology',
    question:
      'Which sequence of events links a rise in cytosolic $\\text{Ca}^{2+}$ to cross-bridge cycling in the smooth muscle of an arteriole?',
    options: [
      'Ca²⁺ binds calmodulin, which activates the kinase that phosphorylates myosin light chains',
      'Ca²⁺ binds troponin C, which moves tropomyosin away from the myosin-binding sites on actin',
      'Ca²⁺ binds the myosin heads, which can hydrolyze ATP only while the ion remains attached',
      'Ca²⁺ binds calmodulin, which activates the phosphatase that dephosphorylates myosin light chains',
    ],
    correctAnswer: 0,
    explanation:
      'Smooth muscle is regulated through its thick filaments: the complex of Ca²⁺ and calmodulin activates myosin light-chain kinase, and phosphorylation of the regulatory light chains allows the myosin heads to interact with actin and cycle. Regulation through troponin C and tropomyosin is the mechanism of skeletal and cardiac muscle; smooth muscle has no troponin. Ca²⁺ does not bind the myosin heads to permit ATP hydrolysis. Myosin light-chain phosphatase reverses the phosphorylation and brings about relaxation, and it is not activated by Ca²⁺–calmodulin.',
    skill: '3B smooth muscle: calmodulin and myosin light-chain kinase',
  },
  {
    id: 'fl8-bb-b-d04',
    section: 'bio-biochem',
    discipline: 'genetics',
    question:
      'Kernel color in a strain of wheat is controlled by several unlinked genes, each with two alleles that contribute additively to the amount of red pigment. A true-breeding line with the darkest red kernels is crossed with a true-breeding white line, and the $\\text{F}_1$ plants are intercrossed. Of the $\\text{F}_2$ plants, about 1 in 64 has kernels as dark as those of the red parent, and the others form a graded series of lighter shades. How many genes most likely control the trait?',
    options: ['2', '3', '4', '6'],
    correctAnswer: 1,
    explanation:
      'An $\\text{F}_2$ plant matches the red parent only if it is homozygous for the red allele at every gene, which has a probability of $(1/4)^n$ for $n$ unlinked genes; $(1/4)^3 = 1/64$, so three genes are involved, and the seven possible numbers of red alleles (0 to 6) produce the graded series characteristic of a polygenic trait. Two genes would give 1/16 and four genes 1/256. Six is the number of alleles that contribute pigment in the darkest plants, not the number of genes.',
    skill: '1C polygenic inheritance and continuous variation',
  },
  {
    id: 'fl8-bb-b-d05',
    section: 'bio-biochem',
    discipline: 'genetics',
    question:
      'Two patients carry different deletions at the same position in an early exon of a gene that encodes a protein of 800 amino acids. Patient 1 has lost 9 consecutive base pairs, and patient 2 has lost 4. Which patient is more likely to make no functional protein, and why?',
    options: [
      'Patient 1, because the larger deletion removes more of the information in the exon',
      'Patient 1, because a deletion of 9 base pairs prevents the exon from being spliced',
      'Patient 2, because a deletion of 4 base pairs changes every codon that follows it',
      'Patient 2, because a deletion of 4 base pairs removes the start codon of the gene',
    ],
    correctAnswer: 2,
    explanation:
      'Codons are read in consecutive groups of three. A deletion of 9 base pairs removes three codons and leaves the reading frame intact, so the protein lacks three amino acids but is otherwise normal and often retains function. A deletion of 4 base pairs is not a multiple of three; it shifts the frame, so every codon downstream specifies a different amino acid and a stop codon is usually soon encountered. The size of a deletion matters less than whether it preserves the frame. A short deletion within an exon does not prevent splicing, which depends on sequences at the exon–intron boundaries, and neither deletion is stated to include the start codon.',
    skill: '1C frameshift vs in-frame deletion',
  },
  {
    id: 'fl8-bb-b-d06',
    section: 'bio-biochem',
    discipline: 'biochemistry',
    question:
      'A chemist prepares the mirror image of a 30-residue peptide hormone by assembling it, residue by residue, from amino acids whose configuration is opposite to that of the amino acids used by ribosomes. Which statement about the natural hormone is correct?',
    options: [
      'It is built from D-amino acids, and its alanine residues need no replacement',
      'It is built from D-amino acids, and its glycine residues need no replacement',
      'It is built from L-amino acids, and its alanine residues need no replacement',
      'It is built from L-amino acids, and its glycine residues need no replacement',
    ],
    correctAnswer: 3,
    explanation:
      'Ribosomes incorporate only L-amino acids, so the natural hormone is an L-peptide and its mirror image must be built from D-amino acids. Glycine has two hydrogen atoms on its α-carbon; with no stereocenter, it has no D or L form, and the same glycine serves in both peptides. Alanine, whose α-carbon bears a hydrogen, a methyl group, an amino group, and a carboxyl group, is chiral, so L-alanine must be replaced by D-alanine. The two choices that describe the natural hormone as a D-peptide have the configurations reversed.',
    skill: '1A chirality of amino acids',
  },
  {
    id: 'fl8-bb-b-d07',
    section: 'bio-biochem',
    discipline: 'microbiology',
    question:
      'Chloramphenicol blocks peptide-bond formation on the 70S ribosomes of bacteria and does not bind the 80S ribosomes of the human cytosol. At high doses it nevertheless impairs human cells that divide rapidly and consume large amounts of ATP, such as the precursors of blood cells. Which explanation is most likely?',
    options: [
      'Ribosomes in the cytosol of dividing cells are assembled from 30S and 50S subunits',
      'Ribosomes attached to the endoplasmic reticulum are of the bacterial 70S type',
      'Ribosomes in the nucleolus resemble bacterial ribosomes until they are exported',
      'Ribosomes inside mitochondria resemble bacterial ribosomes and bind the drug',
    ],
    correctAnswer: 3,
    explanation:
      'Mitochondria, which descend from bacteria, contain their own ribosomes, and these resemble bacterial ribosomes closely enough to be inhibited by some antibacterial drugs. They synthesize the subunits of the electron transport chain that are encoded in mitochondrial DNA, so inhibiting them limits oxidative phosphorylation, and cells with high energy demands suffer first. All cytosolic ribosomes of human cells, whether free or attached to the endoplasmic reticulum, are 80S particles made of 40S and 60S subunits. Ribosomal subunits assembled in the nucleolus are eukaryotic subunits from the start and do not carry out translation there.',
    skill: '2B selective toxicity: 70S vs 80S ribosomes',
  },
]
