/**
 * MCAT Full-Length Form 2 — Biological & Biochemical Foundations, file A
 * (passages 1–5, 22 questions) + 8 discrete items.
 *
 * Built to the 2026-09-29 AAMC-alignment blueprint: 400–600-word passages,
 * a mix of experiment (chart/table) and information passages, keys that
 * cannot be found by matching passage wording, options written in parallel
 * frames of similar length, and key positions balanced across the file.
 *
 * KEY INVARIANT: the passage runner does NOT shuffle options — keys were
 * authored position-balanced and explanations reference options by CONTENT.
 *
 * LaTeX renders through KaTeX; backslashes are double-escaped in these strings.
 */
import type { MCATPassage, MCATDiscreteQuestion } from '../types'

export const FL2_BIO_BIOCHEM_A_PASSAGES: MCATPassage[] = [
  // ────────────────────────────────────────────────────────────────────────
  // 1. BIOCHEMISTRY (exp, chart) — Lineweaver–Burk: uninhibited vs uncompetitive
  //    (parallel) vs mixed inhibitor; Km/Vmax extrapolation; kcat/Km comparison
  // ────────────────────────────────────────────────────────────────────────
  {
    id: 'fl2-bb-a-01',
    section: 'bio-biochem',
    discipline: 'biochemistry',
    title: 'Kinetic Characterization of Inhibitors of a Bacterial Aminotransferase',
    passageText:
      'Aminotransferases catalyze the reversible transfer of an amino group from an amino acid to a 2-oxo acid, using pyridoxal phosphate as a cofactor. Because the branched-chain aminotransferase (BCAT) of several pathogenic bacteria differs substantially from the human enzyme, it has been proposed as a target for new antibiotics. Researchers purified BCAT from one such pathogen and characterized two synthetic compounds, A and B, that had reduced the enzyme’s activity in a high-throughput screen.\n\nInitial velocities were measured at 37 °C in reaction mixtures containing 0.10 μM enzyme, a fixed, saturating concentration of the amino-group acceptor 2-oxoglutarate, and L-leucine at concentrations between 0.33 mM and 2.0 mM as the amino donor. Formation of the product glutamate was followed continuously with a coupled assay, and velocities were taken from the first minute of each reaction, before more than 5% of the leucine had been consumed. Each leucine series was measured with no inhibitor, with 20 μM compound A, and with 20 μM compound B. Neither compound is structurally similar to leucine or to 2-oxoglutarate.\n\nThe data were plotted in double-reciprocal (Lineweaver–Burk) form, with the reciprocal of the initial velocity on the vertical axis and the reciprocal of the leucine concentration on the horizontal axis (Figure 1). For an enzyme that obeys Michaelis–Menten kinetics, this transformation produces a straight line whose y-intercept equals $1/V_{max}$, whose x-intercept equals $-1/K_m$, and whose slope equals $K_m/V_{max}$. The turnover number $k_{cat}$ is obtained by dividing $V_{max}$ by the total enzyme concentration, and the ratio $k_{cat}/K_m$ is used to compare how efficiently different enzymes convert substrate when the substrate concentration is well below $K_m$.\n\nThe double-reciprocal plot is also a convenient way to classify reversible inhibitors. A competitive inhibitor binds only the free enzyme; it steepens the line but leaves the y-intercept unchanged. An uncompetitive inhibitor binds only the enzyme–substrate complex; it displaces the line upward without altering its slope. A mixed inhibitor binds both the free enzyme and the enzyme–substrate complex, usually with different affinities, so that both the slope and the y-intercept change. In the special case in which a mixed inhibitor binds the two forms of the enzyme equally well, the x-intercept is unchanged and the inhibitor is described as noncompetitive.\n\nFor comparison, the researchers cited published values for human BCAT measured under the same conditions: a turnover number of $1200\\ \\text{min}^{-1}$ and a $K_m$ for leucine of 6.0 mM. They argued that the relative catalytic efficiencies of the two enzymes, together with the inhibition patterns in Figure 1, should guide the choice of which compound to develop further, because the concentration of free leucine inside bacterial cells is typically well below 1 mM.',
    chart: {
      title: 'Figure 1. Double-reciprocal plots for bacterial BCAT with no inhibitor, 20 μM compound A, or 20 μM compound B',
      kind: 'line',
      xLabel: '1/[leucine]',
      xUnit: 'mM⁻¹',
      yLabel: '1/v',
      yUnit: 'min/μM',
      xValues: [0.5, 1.0, 1.5, 2.0, 2.5, 3.0],
      yValues: [0.04, 0.06, 0.08, 0.1, 0.12, 0.14],
      seriesLabel: 'No inhibitor',
      comparisonSeries: [
        { label: 'Compound A (20 μM)', yValues: [0.06, 0.08, 0.1, 0.12, 0.14, 0.16] },
        { label: 'Compound B (20 μM)', yValues: [0.09, 0.15, 0.21, 0.27, 0.33, 0.39] },
      ],
    },
    questions: [
      {
        question: 'Based on Figure 1, the $K_m$ of the bacterial enzyme for leucine in the absence of inhibitor is closest to:',
        options: ['0.5 mM', '2.0 mM', '25 mM', '50 mM'],
        correctAnswer: 1,
        explanation:
          'The uninhibited line rises by 0.02 min/μM for every 0.5 mM⁻¹ increase in 1/[leucine], so its slope is 0.04 and its y-intercept is $0.04 - 0.02 = 0.02$ min/μM. Since the y-intercept is $1/V_{max}$ and the slope is $K_m/V_{max}$, $K_m = \\text{slope}/\\text{intercept} = 0.04/0.02 = 2.0$ mM; equivalently, the x-intercept is $-0.02/0.04 = -0.5$ mM⁻¹, and $-1/K_m = -0.5$ gives $K_m = 2.0$ mM. A value of 0.5 mM is the magnitude of the x-intercept itself, not its reciprocal. A value of 50 mM is numerically $V_{max}$ (50 μM/min), not $K_m$. A value of 25 mM is the reciprocal of the slope, which equals $V_{max}/K_m$ rather than $K_m$.',
        skill: '1A enzyme kinetics',
      },
      {
        question: 'Which of the following best describes compound A?',
        options: [
          'It binds only the free enzyme, and raising the leucine concentration overcomes its effect.',
          'It binds free enzyme and enzyme–substrate complex equally, so the apparent $K_m$ is unchanged.',
          'It binds the free enzyme more tightly than the enzyme–substrate complex, so the apparent $K_m$ rises.',
          'It binds only the enzyme–substrate complex, and raising the leucine concentration does not overcome its effect.',
        ],
        correctAnswer: 3,
        explanation:
          'The compound A line in Figure 1 is parallel to the uninhibited line (same slope, 0.04) but displaced upward (y-intercept 0.04 instead of 0.02), the signature of an uncompetitive inhibitor, which binds only the enzyme–substrate complex. Because more substrate produces more of the complex the inhibitor binds, raising the leucine concentration does not relieve the inhibition; the apparent $V_{max}$ and apparent $K_m$ both fall by the same factor (here from 50 to 25 μM/min and from 2.0 to 1.0 mM). Binding only the free enzyme would describe a competitive inhibitor, whose line steepens but keeps the same y-intercept. Equal binding to both forms would describe a noncompetitive inhibitor, whose line pivots about the x-intercept. Tighter binding to the free enzyme would raise the apparent $K_m$, which the unchanged slope and higher intercept rule out.',
        skill: '1A enzyme inhibition',
      },
      {
        question: 'In the presence of compound B, the apparent $K_m$ of the enzyme for leucine is closest to:',
        options: ['1.0 mM', '2.0 mM', '4.0 mM', '8.0 mM'],
        correctAnswer: 2,
        explanation:
          'The compound B line rises by 0.06 for each 0.5 mM⁻¹, so its slope is 0.12, and extrapolating back from 0.09 at 0.5 mM⁻¹ gives a y-intercept of 0.03 min/μM. The apparent $K_m$ is slope divided by intercept: $0.12/0.03 = 4.0$ mM (the x-intercept is $-0.25$ mM⁻¹, and $1/0.25 = 4.0$). Compound B therefore raises the apparent $K_m$ (from 2.0 to 4.0 mM) while lowering the apparent $V_{max}$ (from 50 to about 33 μM/min), the pattern of a mixed inhibitor that binds free enzyme more tightly than the enzyme–substrate complex. A value of 1.0 mM is the apparent $K_m$ produced by compound A, not B. A value of 2.0 mM is the uninhibited $K_m$, which would be correct only for a noncompetitive inhibitor. A value of 8.0 mM would require the slope to increase sixfold with the intercept unchanged.',
        skill: '1A enzyme inhibition',
      },
      {
        question: 'Compared with human BCAT, the bacterial enzyme has:',
        options: [
          'a lower turnover number but a higher catalytic efficiency toward leucine.',
          'a higher turnover number and a higher catalytic efficiency toward leucine.',
          'a lower turnover number and a lower catalytic efficiency toward leucine.',
          'a higher turnover number but a lower catalytic efficiency toward leucine.',
        ],
        correctAnswer: 0,
        explanation:
          'From Figure 1, the uninhibited y-intercept is 0.02 min/μM, so $V_{max} = 50$ μM/min, and with 0.10 μM enzyme, $k_{cat} = 50/0.10 = 500\\ \\text{min}^{-1}$, lower than the human value of 1200 min⁻¹. Catalytic efficiency is $k_{cat}/K_m$: bacterial, $500/2.0 = 250\\ \\text{mM}^{-1}\\text{min}^{-1}$; human, $1200/6.0 = 200\\ \\text{mM}^{-1}\\text{min}^{-1}$. The bacterial enzyme therefore turns over more slowly at saturation but is the more efficient catalyst at the low leucine concentrations found in cells. The two options that claim a higher turnover number reverse the $k_{cat}$ comparison. The option that claims a lower efficiency compares $k_{cat}$ values alone and ignores the threefold difference in $K_m$.',
        skill: '1A catalytic efficiency',
      },
      {
        question: 'The researchers want to determine whether compound A inhibits the enzyme reversibly. Which experiment would be most informative?',
        options: [
          'Repeat the leucine series with a tenfold higher concentration of 2-oxoglutarate and check whether the line in Figure 1 shifts.',
          'Incubate enzyme with compound A and leucine, dilute the mixture 100-fold into assay buffer, and measure whether activity returns.',
          'Measure the inhibition produced by compound A at several temperatures and check whether it follows the Arrhenius relationship.',
          'Add compound A to a reaction that has reached equilibrium and measure whether the equilibrium constant changes.',
        ],
        correctAnswer: 1,
        explanation:
          'A reversible inhibitor is in binding equilibrium with the enzyme, so diluting the mixture far below the inhibitor’s dissociation constant lets the inhibitor come off and activity recovers; a covalent, irreversible inhibitor stays attached and activity does not return. Including leucine during the incubation matters because compound A binds only the enzyme–substrate complex. Raising the 2-oxoglutarate concentration tests whether the inhibitor competes with the second substrate, not whether binding is reversible. Temperature dependence of inhibition does not distinguish reversible from irreversible binding. No inhibitor, reversible or not, changes an equilibrium constant, because a catalyst affects only the rate at which equilibrium is reached.',
        skill: '1A enzyme inhibition',
      },
    ],
  },

  // ────────────────────────────────────────────────────────────────────────
  // 2. PHYSIOLOGY (info) — O2 dissociation curve, CO2 transport, bicarbonate
  //    buffer, respiratory vs metabolic disturbances and compensation
  // ────────────────────────────────────────────────────────────────────────
  {
    id: 'fl2-bb-a-02',
    section: 'bio-biochem',
    discipline: 'physiology',
    title: 'Gas Transport and Acid–Base Balance',
    passageText:
      'Oxygen is carried in blood almost entirely bound to hemoglobin; the amount dissolved in plasma is small, about 0.3 mL per 100 mL of blood at an arterial partial pressure of oxygen ($P_{O_2}$) of 100 mmHg. Hemoglobin’s four subunits bind oxygen cooperatively, so the saturation curve is sigmoidal: hemoglobin is about 97% saturated at an arterial $P_{O_2}$ of 100 mmHg, about 75% saturated at the mixed venous $P_{O_2}$ of 40 mmHg, and 50% saturated at a $P_{O_2}$ of about 27 mmHg (the $P_{50}$). The flat upper portion of the curve means that moderate decreases in alveolar $P_{O_2}$ have little effect on loading in the lungs, whereas the steep portion below 60 mmHg allows large amounts of oxygen to be released for small decreases in tissue $P_{O_2}$.\n\nThe position of the curve is not fixed. Increases in $P_{CO_2}$, hydrogen ion concentration, temperature, and the red-cell metabolite 2,3-bisphosphoglycerate (2,3-BPG) all stabilize the deoxygenated (T-state) conformation and shift the curve to the right, raising $P_{50}$. The influence of $\\text{CO}_2$ and $\\text{H}^+$ is called the Bohr effect. 2,3-BPG, produced by a side branch of glycolysis in red cells, rises within days in response to chronic hypoxia, anemia, or residence at high altitude.\n\nCarbon dioxide produced by tissues is transported in three forms. Roughly 7% remains dissolved, about 23% binds to the amino termini of globin chains as carbamino compounds, and about 70% travels as bicarbonate. Bicarbonate is formed inside red cells, where carbonic anhydrase rapidly catalyzes the hydration of $\\text{CO}_2$ to carbonic acid, which dissociates into $\\text{H}^+$ and $\\text{HCO}_3^-$; the uncatalyzed reaction in plasma is far too slow to matter during the second or so that blood spends in a capillary. The bicarbonate leaves the cell in exchange for chloride (the chloride shift), and the hydrogen ion is buffered by hemoglobin. Deoxygenated hemoglobin is a weaker acid than oxygenated hemoglobin and binds both $\\text{H}^+$ and $\\text{CO}_2$ more readily, an effect (the Haldane effect) that increases the capacity of venous blood to carry $\\text{CO}_2$. Each of these reactions reverses in the pulmonary capillaries.\n\nArterial pH is set by the bicarbonate buffer system and is described by the Henderson–Hasselbalch equation, $\\text{pH} = 6.1 + \\log \\frac{[\\text{HCO}_3^-]}{0.03 \\times P_{CO_2}}$, with $[\\text{HCO}_3^-]$ in mM and $P_{CO_2}$ in mmHg. Normal arterial values are pH 7.40, $P_{CO_2}$ 40 mmHg, and $[\\text{HCO}_3^-]$ 24 mM. A primary disturbance in $P_{CO_2}$ is called respiratory, and a primary disturbance in $[\\text{HCO}_3^-]$ is called metabolic. Each is countered by compensation in the other variable: the lungs adjust ventilation within minutes in response to changes in arterial $\\text{H}^+$ sensed by chemoreceptors, whereas the kidneys adjust bicarbonate reabsorption and hydrogen-ion excretion over two to five days. Compensation returns pH toward, but not fully to, 7.40, and because it works by moving the ratio in the equation back toward its normal value, the compensating variable always moves in the same direction as the primary abnormality.',
    questions: [
      {
        question: 'An arterial blood sample shows pH 7.32, $P_{CO_2}$ 30 mmHg, and $[\\text{HCO}_3^-]$ 15 mM. These values are most consistent with:',
        options: [
          'a metabolic acidosis with respiratory compensation.',
          'a respiratory alkalosis with renal compensation.',
          'a respiratory acidosis with renal compensation.',
          'a metabolic alkalosis with respiratory compensation.',
        ],
        correctAnswer: 0,
        explanation:
          'The pH is below 7.40, so the primary process is an acidosis. Of the two variables, only the low bicarbonate (15 mM versus 24 mM) would lower pH; the low $P_{CO_2}$ would by itself raise pH. The primary disturbance is therefore metabolic, and the low $P_{CO_2}$ is the expected respiratory compensation: chemoreceptors sense the extra $\\text{H}^+$ and ventilation increases, lowering $P_{CO_2}$ in the same direction as the fallen bicarbonate. A respiratory alkalosis would produce a pH above 7.40. A respiratory acidosis requires an elevated $P_{CO_2}$, and a metabolic alkalosis requires an elevated bicarbonate and a pH above 7.40, neither of which is present.',
        skill: '3B acid–base disturbances',
      },
      {
        question: 'A patient with chronic anemia has elevated red-cell 2,3-BPG. Which statement best describes the consequence for oxygen transport?',
        options: [
          'Loading in the lungs falls substantially, so arterial oxygen content decreases further.',
          'The $P_{50}$ decreases, so hemoglobin releases less oxygen at the tissue $P_{O_2}$.',
          'Unloading at the tissues increases, while loading in the lungs is only slightly reduced.',
          'Hemoglobin’s saturation at every partial pressure increases, offsetting the reduced hemoglobin.',
        ],
        correctAnswer: 2,
        explanation:
          'Extra 2,3-BPG stabilizes the T state and shifts the curve to the right, raising $P_{50}$. At the tissue $P_{O_2}$ of about 40 mmHg, which lies on the steep part of the curve, a rightward shift lowers saturation considerably, so more oxygen is released per red cell; at the arterial $P_{O_2}$ of 100 mmHg, on the flat upper portion, the same shift lowers saturation only a little. The net effect helps compensate for the reduced number of red cells. A substantial fall in lung loading contradicts the flatness of the curve near 100 mmHg. A decreased $P_{50}$ describes a leftward shift, the opposite of the effect of 2,3-BPG. An increase in saturation at every partial pressure would be a leftward shift and would hinder unloading.',
        skill: '3B oxygen dissociation curve',
      },
      {
        question: 'If carbonic anhydrase in red cells were completely inhibited, which change would be expected in blood leaving a tissue capillary, compared with normal?',
        options: [
          'A larger chloride shift into red cells, because more bicarbonate would then form in plasma.',
          'A lower venous $P_{CO_2}$, because dissolved $\\text{CO}_2$ would no longer be converted to bicarbonate.',
          'Less $\\text{CO}_2$ bound as carbamino compounds, because hemoglobin would remain oxygenated.',
          'A higher venous $P_{CO_2}$, because less $\\text{CO}_2$ could be converted to bicarbonate.',
        ],
        correctAnswer: 3,
        explanation:
          'Without the enzyme, the hydration of $\\text{CO}_2$ proceeds only at the slow uncatalyzed rate during the brief capillary transit, so the tissue’s $\\text{CO}_2$ output cannot be converted to bicarbonate as it normally is. The same amount of $\\text{CO}_2$ still enters the blood, so more of it must remain dissolved (and as carbamino compounds), which means a higher venous $P_{CO_2}$. A lower venous $P_{CO_2}$ has the direction backward: conversion to bicarbonate is what normally keeps dissolved $\\text{CO}_2$ low. Less bicarbonate formation inside red cells means a smaller, not larger, chloride shift, and plasma lacks the enzyme in any case. Carbamino binding does not depend on carbonic anhydrase, and hemoglobin still unloads oxygen in the tissues.',
        skill: '3B carbon dioxide transport',
      },
      {
        question: 'A climber ascends to high altitude and hyperventilates. On day 1 arterial values are pH 7.50, $P_{CO_2}$ 28 mmHg, and $[\\text{HCO}_3^-]$ 21 mM; on day 5 they are pH 7.43, $P_{CO_2}$ 28 mmHg, and $[\\text{HCO}_3^-]$ 18 mM. The change between day 1 and day 5 is best explained by:',
        options: [
          'decreased ventilation, which raised the arterial $P_{CO_2}$ toward normal.',
          'increased renal excretion of bicarbonate, which lowered the pH toward normal.',
          'increased renal excretion of hydrogen ions, which raised the plasma bicarbonate.',
          'increased red-cell 2,3-BPG, which released hydrogen ions from hemoglobin into plasma.',
        ],
        correctAnswer: 1,
        explanation:
          'Hyperventilation at altitude lowers $P_{CO_2}$ and produces a respiratory alkalosis (day 1). Over the following days the kidneys compensate by excreting bicarbonate, so $[\\text{HCO}_3^-]$ falls from 21 to 18 mM, moving in the same direction as the low $P_{CO_2}$ and bringing the ratio, and therefore the pH, back toward normal. The $P_{CO_2}$ is identical on both days, so ventilation did not decrease. Increased hydrogen-ion excretion would raise bicarbonate and worsen the alkalosis, the opposite of what occurred. 2,3-BPG alters oxygen affinity and does not lower plasma bicarbonate.',
        skill: '3B renal compensation',
      },
    ],
  },

  // ────────────────────────────────────────────────────────────────────────
  // 3. MOLECULAR BIOLOGY (exp, table) — PCR-RFLP genotyping of a nonsense
  //    mutation; reading a gel table; mutation classes; PCR amplification math
  // ────────────────────────────────────────────────────────────────────────
  {
    id: 'fl2-bb-a-03',
    section: 'bio-biochem',
    discipline: 'molecular biology',
    title: 'PCR-Based Genotyping of a Recessive Muscle Disorder',
    passageText:
      'Many inherited disorders are caused by single-nucleotide substitutions, and when such a substitution creates or destroys the recognition sequence of a restriction endonuclease, it can be detected without sequencing. The region surrounding the variant is first amplified by the polymerase chain reaction (PCR): genomic DNA is mixed with two short synthetic primers that flank the region, a heat-stable DNA polymerase, and the four deoxynucleoside triphosphates. Each cycle consists of heating to separate the template strands, cooling so that the primers anneal to their complementary sequences, and incubation at the polymerase’s optimal temperature so that each primer is extended. The number of copies of the region between the primers approximately doubles with every cycle. The amplified product (the amplicon) is then digested with the restriction enzyme, and the fragments are separated by agarose gel electrophoresis, in which DNA migrates toward the positive electrode at a rate that decreases with fragment length. The combined procedure is called PCR–restriction fragment length polymorphism (PCR-RFLP) analysis.\n\nResearchers applied the method to a family in which one child has an autosomal recessive disorder caused by loss of a skeletal-muscle protein encoded by the gene *MYOX*. Sequencing of the affected child had revealed a c.460C>T substitution in exon 5 that changes codon 154 from CGA (arginine) to TGA. In the normal allele this codon lies within the sequence TCGA, which is the recognition site of the restriction enzyme TaqI; the substitution converts the sequence to TTGA. Sequencing of unrelated patients with the same disorder has identified several other pathogenic variants elsewhere in the gene, including a two-base-pair deletion in exon 7 and a splice-site substitution in intron 9.\n\nPrimers were designed to amplify a 650-base-pair (bp) segment consisting of exon 5 and its flanking intron sequences. In the normal allele, TaqI cuts this amplicon at the codon-154 site, located 400 bp from one end, and at a second TaqI site 50 bp from the opposite end that is not altered by any known variant. Genomic DNA from the mother, the father, the affected child (Child 1), an unaffected sibling (Child 2), and an unrelated affected individual (Patient X) was amplified for 30 cycles. A reaction containing every component except genomic DNA was run in parallel as a no-template control (NTC). Each product was digested with an excess of TaqI, and the fragments were run on a 2% agarose gel beside a size ladder and visualized with a DNA-binding fluorescent dye. The bands observed in each lane are listed in Table 1. Both parents are unaffected, and neither has a family history of the disorder.',
    figure:
      '**Table 1. TaqI fragments observed after PCR amplification of the exon 5 region**\n\n| Sample | Bands observed (bp) |\n|--------|---------------------|\n| Mother | 600, 400, 200, 50 |\n| Father | 600, 400, 200, 50 |\n| Child 1 (affected) | 600, 50 |\n| Child 2 (unaffected) | 400, 200, 50 |\n| Patient X (affected, unrelated) | 600, 400, 200, 50 |\n| No-template control | none |',
    questions: [
      {
        question: 'Based on Table 1, which individuals carry exactly one copy of the c.460C>T allele?',
        options: [
          'Mother and Father only',
          'Child 1 and Patient X only',
          'Mother, Father, and Patient X',
          'Mother, Father, Child 2, and Patient X',
        ],
        correctAnswer: 2,
        explanation:
          'A normal allele has both TaqI sites, so its 650-bp amplicon is cut into 400-, 200-, and 50-bp fragments; a c.460C>T allele has lost the codon-154 site and is cut only at the invariant site, giving 600- and 50-bp fragments. A lane containing 600, 400, and 200 bp therefore contains one allele of each kind, which is the pattern for the mother, the father, and Patient X. Child 1 shows only the 600-bp fragment (plus the 50-bp fragment common to every allele) and is homozygous for the substitution, which is consistent with an affected child of two carriers. Child 2 shows no 600-bp fragment and carries two normal alleles, so any option that includes Child 2 or Child 1 among the single-copy carriers is incorrect, and the option limited to the parents omits Patient X.',
        skill: '1B restriction analysis',
      },
      {
        question: 'Patient X is affected by the disorder yet shows the same band pattern as the unaffected parents. Which of the following best explains this observation?',
        options: [
          'Patient X’s other allele carries a pathogenic variant located outside any TaqI site.',
          'The TaqI digestion of Patient X’s amplicon stopped before it was complete.',
          'Patient X’s disorder is caused by a dominant allele in that family but a recessive one in this family.',
          'Patient X carries two copies of c.460C>T, but only one was amplified by the primers.',
        ],
        correctAnswer: 0,
        explanation:
          'The disorder is recessive, so an affected person must have two nonfunctional alleles. Patient X’s lane shows one c.460C>T allele and one allele whose exon 5 region is normal; the second nonfunctional allele must therefore carry a different variant, such as the exon 7 deletion or the intron 9 splice-site change, that leaves both TaqI sites in the amplicon intact and so is invisible to this assay. The presence of the 50-bp fragment shows that digestion proceeded normally, and incomplete digestion of a homozygous mutant sample would have produced 650-bp product rather than 400- and 200-bp fragments. The parents’ pattern combined with their lack of symptoms shows that the allele is recessive, and a single allele cannot be dominant in one family and recessive in another. The same primers amplify both alleles because the substitution lies within, not at, the primer-binding sites.',
        skill: '1B compound heterozygosity',
      },
      {
        question: 'The c.460C>T substitution is best classified as a:',
        options: [
          'transversion that shifts the reading frame downstream of codon 154.',
          'transition that substitutes a different amino acid for arginine 154.',
          'transversion that introduces a premature stop codon at position 154.',
          'transition that introduces a premature stop codon at position 154.',
        ],
        correctAnswer: 3,
        explanation:
          'Cytosine and thymine are both pyrimidines, so a C-to-T change is a transition; a transversion exchanges a pyrimidine for a purine or vice versa. TGA is one of the three stop codons, so the substitution converts an arginine codon into a premature termination signal, a nonsense mutation, which explains the loss of the protein. A missense change would substitute another amino acid, and a frameshift requires an insertion or deletion that is not a multiple of three, whereas a substitution leaves the reading frame intact.',
        skill: '1B mutation types',
      },
      {
        question: 'In a later run, a sample from a new individual produces a single band at 650 bp. Which conclusion is best supported?',
        options: [
          'The individual is homozygous for the c.460C>T allele.',
          'The digestion failed, so the genotype cannot be assigned.',
          'The individual carries a deletion that removes both TaqI sites.',
          'The PCR failed, so the sample must be amplified again.',
        ],
        correctAnswer: 1,
        explanation:
          'Every allele, normal or mutant, retains the invariant TaqI site 50 bp from one end, so a successful digestion always converts the 650-bp amplicon into fragments and produces a 50-bp band. An intact 650-bp product means the enzyme did not cut at all, which is a failure of the digestion step, and no genotype can be read until the digestion is repeated. A homozygous mutant would give 600- and 50-bp fragments, not 650 bp. A deletion removing both sites would shorten the amplicon well below 650 bp (and would also have to span 550 bp of the region). The PCR clearly worked, because product of the expected size is present.',
        skill: '1B experimental controls',
      },
      {
        question: 'Starting from approximately $10^3$ copies of the target region, the number of PCR cycles needed to produce roughly $10^9$ copies of the amplicon is closest to:',
        options: ['10', '20', '30', '60'],
        correctAnswer: 1,
        explanation:
          'The number of copies roughly doubles each cycle, so $n$ cycles multiply the starting number by $2^n$. Going from $10^3$ to $10^9$ copies requires a factor of $10^6$, and because $2^{10} \\approx 10^3$, a factor of $10^6$ corresponds to $2^{20}$, or about 20 cycles. Thirty cycles is the number used in the experiment and would yield about $10^{12}$ copies. Sixty cycles would give an amplification factor of about $10^{18}$. Ten cycles would multiply the template only about $10^3$-fold, reaching roughly $10^6$ copies rather than $10^9$.',
        skill: '1B PCR',
      },
    ],
  },

  // ────────────────────────────────────────────────────────────────────────
  // 4. IMMUNOLOGY (info) — MHC I/II, T-dependent vs T-independent antigens,
  //    class switching, primary vs secondary response, vaccine types
  // ────────────────────────────────────────────────────────────────────────
  {
    id: 'fl2-bb-a-04',
    section: 'bio-biochem',
    discipline: 'immunology',
    title: 'T-Cell Help, Class Switching, and Vaccine Design',
    passageText:
      'The adaptive immune system recognizes antigens through two kinds of receptors. B-cell receptors, and the antibodies that B cells secrete, bind directly to intact antigens, including proteins, polysaccharides, and lipids, in their native three-dimensional form. T-cell receptors bind only short peptides displayed on the surface of other cells by major histocompatibility complex (MHC) molecules. Class I MHC molecules are expressed by nearly all nucleated cells and present peptides derived from proteins synthesized in the cytosol, such as viral proteins made by an infected cell; these complexes are recognized by $\\text{CD8}^+$ cytotoxic T cells, which kill the presenting cell. Class II MHC molecules are expressed mainly by dendritic cells, macrophages, and B cells and present peptides derived from proteins that the cell has taken up from its surroundings; these complexes are recognized by $\\text{CD4}^+$ helper T cells.\n\nA naive B cell whose receptor binds an antigen internalizes it, degrades it, and displays its peptides on class II MHC. If a helper T cell specific for one of those peptides is present, the two cells form a stable contact, and the helper T cell delivers signals through surface molecules and secreted cytokines. This help drives the B cell to proliferate, to undergo somatic hypermutation with selection for higher-affinity receptors, to switch from producing IgM to producing IgG, IgA, or IgE, and to give rise to long-lived plasma cells and memory B cells. Antigens that elicit this sequence are called T-dependent, and in practice they are proteins, because only proteins yield peptides that class II MHC can present. Some antigens with many identical repeating units, notably bacterial capsular polysaccharides, can activate B cells without T-cell help by cross-linking many B-cell receptors at once. Such T-independent responses consist mostly of short-lived IgM, show little affinity maturation, and generate few memory cells. They are also weak in children under about two years of age.\n\nThe first exposure to a T-dependent antigen produces a primary response: after a lag of several days, IgM appears, followed by IgG that peaks in about two weeks and then declines. A later exposure to the same antigen produces a secondary response that begins within a day or two, is dominated by IgG of higher affinity, and reaches a far higher concentration, because memory B cells and memory T cells are more numerous than the naive cells from which they arose and have a lower threshold for activation.\n\nVaccination exploits this memory. Inactivated vaccines and purified-subunit vaccines deliver antigen that is taken up from the extracellular space by antigen-presenting cells; live attenuated vaccines contain a weakened organism that replicates in the recipient’s cells. Conjugate vaccines covalently link a capsular polysaccharide to a carrier protein such as an inactivated bacterial toxin. Passive immunization, by contrast, supplies preformed antibody rather than antigen, as occurs naturally when maternal IgG crosses the placenta and when IgA is transferred in breast milk; the protection it provides lasts only as long as the transferred antibody persists.',
    questions: [
      {
        question: 'A vaccine consisting only of purified capsular polysaccharide from a bacterium protects adults but not infants. Conjugating the polysaccharide to a carrier protein makes the vaccine effective in infants most directly because the conjugate:',
        options: [
          'contains repeating units that cross-link B-cell receptors more efficiently than the polysaccharide alone.',
          'is taken up by dendritic cells and presented on class I MHC to cytotoxic T cells.',
          'allows the polysaccharide itself to be presented on class II MHC to helper T cells.',
          'provides peptides that recruit helper T cells to B cells whose receptors bind the polysaccharide.',
        ],
        correctAnswer: 3,
        explanation:
          'A B cell whose receptor binds the polysaccharide internalizes the whole conjugate, degrades the carrier protein, and displays its peptides on class II MHC. Helper T cells specific for those carrier peptides then deliver help to the polysaccharide-specific B cell, converting a T-independent antigen into one that produces class switching, affinity maturation, and memory, the type of response that infants can mount. Cross-linking of receptors is the T-independent mechanism that is already weak in infants, so improving it would not solve the problem. Class I presentation to cytotoxic T cells does not support antibody production. Polysaccharides cannot be presented by MHC molecules, which bind only peptides.',
        skill: '3B T-dependent antigens',
      },
      {
        question: 'Two patients are exposed to the same virus. Three days later, patient 1 has high levels of virus-specific IgG, and patient 2 has no detectable virus-specific antibody. Which is the most reasonable interpretation?',
        options: [
          'Patient 1 is unable to switch from IgM to IgG, so IgG appeared early.',
          'Patient 2 lacks helper T cells and therefore cannot produce any antibody.',
          'Patient 1 was exposed to the virus before, by infection or vaccination.',
          'Patient 2 responded to the virus with a T-independent, IgM-only response.',
        ],
        correctAnswer: 2,
        explanation:
          'High-affinity IgG within three days is the signature of a secondary response, which requires pre-existing memory cells and therefore a prior encounter with the antigen, whether by infection or by vaccination. Patient 2’s lack of antibody at day 3 is what a normal primary response looks like, because IgM does not appear until after a lag of several days, so no deficiency of helper T cells can be inferred. An inability to class-switch would prevent IgG from appearing at all. A T-independent response would produce IgM, not an absence of antibody, and viral proteins are T-dependent antigens in any case.',
        skill: '3B primary vs secondary response',
      },
      {
        question: 'Which of the following cells would be killed by a $\\text{CD8}^+$ T cell specific for a peptide of a viral capsid protein?',
        options: [
          'An epithelial cell in which the virus is replicating.',
          'A B cell that has bound and internalized free virus particles.',
          'A macrophage that has phagocytosed antibody-coated virus.',
          'A plasma cell secreting antibody against the capsid protein.',
        ],
        correctAnswer: 0,
        explanation:
          'Cytotoxic T cells recognize peptides on class I MHC, which presents proteins synthesized in the cytosol. A cell in which the virus is replicating makes capsid protein on its own ribosomes, so capsid peptides reach class I MHC and mark the cell for killing. A B cell or macrophage that has taken up virus from outside processes it through the pathway that loads class II MHC, which is recognized by helper T cells, not cytotoxic T cells. A plasma cell synthesizes antibody, not viral capsid protein, so it displays no capsid peptides on class I MHC.',
        skill: '3B MHC class I presentation',
      },
      {
        question: 'Compared with an inactivated vaccine containing the same viral proteins, a live attenuated vaccine is more likely to:',
        options: [
          'induce a T-independent response consisting of IgM only.',
          'generate memory $\\text{CD8}^+$ T cells that recognize infected cells.',
          'provide passive immunity that persists for several months.',
          'produce a primary response that lacks class switching.',
        ],
        correctAnswer: 1,
        explanation:
          'Because an attenuated organism replicates inside the recipient’s cells, its proteins are synthesized in the cytosol and presented on class I MHC, which activates cytotoxic T cells and leaves memory $\\text{CD8}^+$ cells that can kill infected cells during a later infection. An inactivated vaccine is taken up from the extracellular space and mainly drives class II presentation, helper T cells, and antibody. Viral proteins are T-dependent antigens in either vaccine, so both produce class-switched antibody rather than an IgM-only response. Passive immunity comes from transferred antibody, not from any vaccine that delivers antigen.',
        skill: '3B vaccination',
      },
    ],
  },
  // ────────────────────────────────────────────────────────────────────────
  // 5. CELL BIOLOGY (exp, table) — p53-dependent G1 arrest vs p53-independent
  //    G2 accumulation; p21/CDK/Rb; mitochondrial apoptosis, caspases, sub-G1
  // ────────────────────────────────────────────────────────────────────────
  {
    id: 'fl2-bb-a-05',
    section: 'bio-biochem',
    discipline: 'cell biology',
    title: 'p53, Checkpoint Arrest, and Apoptosis After DNA Damage',
    passageText:
      'Progression through the eukaryotic cell cycle is driven by cyclin-dependent kinases (CDKs), whose activity rises and falls as their cyclin partners are synthesized and degraded. In late G1, cyclin–CDK complexes phosphorylate the retinoblastoma protein (Rb); phosphorylated Rb releases the transcription factor E2F, which activates genes required for DNA synthesis. Surveillance mechanisms called checkpoints can halt this progression when the genome is damaged, giving the cell time for repair, or can trigger apoptosis if the damage is extensive.\n\nA central mediator of both outcomes is p53, a transcription factor that is normally kept at a low concentration by continuous ubiquitin-dependent degradation. DNA double-strand breaks activate protein kinases that phosphorylate p53 and protect it from degradation. Stabilized p53 induces transcription of p21, a small protein that binds cyclin–CDK complexes and blocks their activity, and of pro-apoptotic members of the Bcl-2 protein family. These pro-apoptotic proteins permeabilize the outer mitochondrial membrane, releasing cytochrome c into the cytosol, where it assembles with an adaptor protein to activate an initiator caspase. The initiator caspase in turn activates executioner caspases such as caspase-3, proteases that cleave hundreds of cellular proteins and activate a nuclease that cuts chromosomal DNA between nucleosomes. Anti-apoptotic members of the family, including Bcl-2 itself, bind the pro-apoptotic proteins and prevent membrane permeabilization.\n\nTo examine how loss of p53 alters the response to chemotherapy, researchers used a human colon carcinoma cell line carrying two wild-type copies of the p53 gene (p53+/+) and a derivative of the same line in which both copies had been inactivated by gene targeting (p53−/−). Cultures were treated for 24 hours with vehicle or with 0.5 μM compound Q, an inhibitor of topoisomerase II that leaves double-strand breaks in DNA. One set of p53+/+ cultures received compound Q together with zVAD, a cell-permeable peptide that irreversibly inhibits caspases.\n\nAfter treatment, cells were fixed in ethanol, which permeabilizes membranes, treated with ribonuclease, and stained with propidium iodide, a dye that binds double-stranded nucleic acid so that, once RNA has been removed, each cell’s fluorescence is proportional to its DNA content. The fluorescence of 10,000 cells per sample was measured by flow cytometry. Cells with a diploid (2N) DNA content were scored as G1, cells with a 4N content as G2 or M, and cells with an intermediate content as S phase. Cells with less than 2N content, the sub-G1 population, are cells whose fragmented DNA partly leaked out during fixation and staining. In parallel cultures, p21 protein was quantified by immunoblotting and expressed relative to vehicle-treated p53+/+ cells. The results are shown in Table 1.\n\nBecause checkpoint arrest can allow damaged cells to survive, whereas apoptosis removes them, the balance between the two responses influences how a tumor responds to DNA-damaging drugs. Loss of p53 function is among the most common genetic changes in human cancers, so the researchers proposed that p53 status could help predict which tumors will respond to compound Q.',
    figure:
      '**Table 1. DNA-content distribution and relative p21 protein 24 hours after treatment**\n\n| Cells | Treatment | Sub-G1 (%) | G1 (%) | S (%) | G2/M (%) | p21 (relative) |\n|-------|-----------|-----------|--------|-------|----------|----------------|\n| p53+/+ | Vehicle | 2 | 55 | 25 | 18 | 1.0 |\n| p53+/+ | Compound Q | 21 | 57 | 4 | 18 | 8.5 |\n| p53+/+ | Compound Q + zVAD | 3 | 73 | 5 | 19 | 8.3 |\n| p53−/− | Vehicle | 2 | 53 | 27 | 18 | 0.2 |\n| p53−/− | Compound Q | 5 | 21 | 8 | 66 | 0.2 |',
    questions: [
      {
        question: 'Which conclusion about the response to compound Q is best supported by Table 1?',
        options: [
          'Without p53, damaged cells bypass every checkpoint and keep dividing at the normal rate.',
          'Without p53, damaged cells still arrest before DNA replication but cannot arrest after it.',
          'Without p53, damaged cells replicate their DNA and then accumulate before division.',
          'Without p53, damaged cells die more often because they cannot arrest before replication.',
        ],
        correctAnswer: 2,
        explanation:
          'In p53+/+ cells, compound Q collapses the S-phase fraction (25% to 4%) while the G1 fraction stays high, so cells are held before DNA replication. In p53−/− cells, the G1 fraction falls from 53% to 21% and the 4N (G2/M) fraction rises from 18% to 66%, so the cells leave G1, replicate their DNA, and pile up with a 4N content: the arrest before replication requires p53, but the accumulation after replication does not. Cells that kept dividing normally would retain the vehicle distribution rather than piling up at 4N. The claim that p53−/− cells still arrest before replication reverses the data. Apoptosis (sub-G1) is lower without p53 (5% versus 21%), not higher.',
        skill: '2C cell cycle checkpoints (data)',
      },
      {
        question: 'Compared with vehicle-treated p53+/+ cells, p53+/+ cells exposed to compound Q alone would be expected to show a decrease in:',
        options: [
          'phosphorylation of Rb by cyclin–CDK complexes.',
          'release of cytochrome c from the mitochondria.',
          'phosphorylation of p53 by damage-activated kinases.',
          'cleavage of cellular proteins by caspase-3.',
        ],
        correctAnswer: 0,
        explanation:
          'Compound Q raises p21 about eightfold in p53+/+ cells; p21 inhibits cyclin–CDK complexes, so less Rb is phosphorylated, E2F stays bound, and the S-phase fraction falls. The sub-G1 fraction rises from 2% to 21% and is prevented by the caspase inhibitor, showing that apoptosis increased, which requires more, not less, cytochrome c release and caspase-3 activity. Phosphorylation of p53 by damage-activated kinases is the event that stabilizes p53 after double-strand breaks, so it increases.',
        skill: '2C CDK regulation',
      },
      {
        question: 'The researchers compared the p53−/− cells with the parental line from which they were derived, rather than with an unrelated colon cancer line that lacks p53. The main advantage of this design is that:',
        options: [
          'the two lines will respond identically to compound Q, which validates the assay.',
          'the results will apply equally to all human tumors that have lost p53 function.',
          'the loss of p53 can be confirmed without measuring any p53 target protein.',
          'differences in response can be attributed to p53 rather than to other genetic differences.',
        ],
        correctAnswer: 3,
        explanation:
          'Two cell lines that differ only in the targeted gene share every other mutation of the parental tumor, so p53 is the single variable and differences in checkpoint behavior and apoptosis can be attributed to it; an unrelated line would differ at many other loci that could also affect the response. The lines do not respond identically (Table 1), and the purpose is to reveal a difference, not to eliminate one. Results from one isogenic pair cannot be extended to all tumors lacking p53, which vary in their other mutations. The design does not remove the need to verify p53 loss; the p21 measurements serve that purpose.',
        skill: '2C research design',
      },
      {
        question: 'If the anti-apoptotic protein Bcl-2 were overexpressed in p53+/+ cells before exposure to compound Q, the results would most closely resemble those for which condition in Table 1?',
        options: [
          'p53−/− cells treated with vehicle only',
          'p53−/− cells treated with compound Q only',
          'p53+/+ cells with compound Q + zVAD',
          'p53+/+ cells treated with vehicle only',
        ],
        correctAnswer: 2,
        explanation:
          'Bcl-2 prevents permeabilization of the outer mitochondrial membrane, so cytochrome c is not released, caspases are not activated, and DNA is not fragmented, keeping the sub-G1 fraction low; p53 is still stabilized and still induces p21, so the G1 arrest (high G1, low S, high p21) persists. That is the profile of p53+/+ cells given compound Q with the caspase inhibitor. The p53−/− profile after compound Q requires loss of p21 induction and of the G1 arrest, which Bcl-2 does not cause. Both vehicle conditions lack the p21 induction and the collapse of S phase that compound Q still produces.',
        skill: '2C apoptosis',
      },
    ],
  },
]

export const FL2_BIO_BIOCHEM_A_DISCRETES: MCATDiscreteQuestion[] = [
  {
    id: 'fl2-bb-a-d01',
    section: 'bio-biochem',
    discipline: 'physiology',
    question: 'In myasthenia gravis, antibodies reduce the number of functional nicotinic acetylcholine receptors at the neuromuscular junction. Muscle strength in these patients improves after a drug that inhibits acetylcholinesterase, most likely because the drug:',
    options: [
      'prolongs the time acetylcholine remains in the synaptic cleft.',
      'increases the acetylcholine released by each action potential.',
      'increases the number of receptors inserted into the end plate.',
      'lowers the threshold of the voltage-gated channels in the muscle.',
    ],
    correctAnswer: 0,
    explanation:
      'Acetylcholinesterase normally hydrolyzes acetylcholine within milliseconds; inhibiting it lets each released molecule persist and bind repeatedly, so the remaining receptors are activated more fully and the end-plate potential more often reaches threshold. The drug acts on breakdown in the cleft, not on presynaptic release, which depends on calcium entry into the nerve terminal. It does not cause receptor synthesis or insertion. It also does not alter the voltage sensitivity of the muscle fiber’s sodium channels.',
    skill: '3A synaptic pharmacology',
  },
  {
    id: 'fl2-bb-a-d02',
    section: 'bio-biochem',
    discipline: 'physiology',
    question: 'In pancreatic β cells, glucose metabolism raises the ATP/ADP ratio, which closes ATP-sensitive $\\text{K}^+$ channels. A mutation that prevents these channels from closing would most likely cause:',
    options: [
      'hypoglycemia, because β cells would release insulin continuously.',
      'hypoglycemia, because α cells would stop releasing glucagon.',
      'hyperglycemia, because β cells would fail to depolarize after meals.',
      'hyperglycemia, because target tissues would stop responding to insulin.',
    ],
    correctAnswer: 2,
    explanation:
      'Closing the ATP-sensitive $\\text{K}^+$ channels depolarizes the β cell, opening voltage-gated $\\text{Ca}^{2+}$ channels, and the calcium influx triggers exocytosis of insulin granules. Channels that stay open keep the membrane hyperpolarized, so insulin secretion fails and blood glucose rises. Continuous insulin release would require channels that are permanently closed, the opposite defect. The mutation is in β cells, not α cells, and it does not affect insulin receptors on target tissues, which describes insulin resistance.',
    skill: '3B endocrine pancreas',
  },
  {
    id: 'fl2-bb-a-d03',
    section: 'bio-biochem',
    discipline: 'cell biology',
    question: 'When tissue from the dorsal lip of the blastopore of one amphibian embryo is grafted to the ventral side of a second embryo, a second body axis develops, and most of its neural tissue comes from the host’s own cells. This result best demonstrates:',
    options: [
      'autonomous specification, because grafted cells formed the new axis on their own.',
      'induction, because grafted cells signaled nearby host cells to change their fate.',
      'dedifferentiation, because host ventral cells first reverted to a pluripotent state.',
      'apoptosis, because host ventral cells at the graft site were eliminated first.',
    ],
    correctAnswer: 1,
    explanation:
      'Host cells that would normally have formed ventral tissue instead formed neural tissue of a second axis, so the graft must have altered their fate by signaling to them, which is embryonic induction. Autonomous specification is ruled out because most of the new axis came from host cells, not from the graft. Nothing in the result requires host cells to revert to pluripotency; they were still responsive, uncommitted embryonic cells. Elimination of host cells would not generate a new axis built largely from those same host cells.',
    skill: '2C embryonic induction',
  },
  {
    id: 'fl2-bb-a-d04',
    section: 'bio-biochem',
    discipline: 'genetics',
    question: 'Two frog species hybridize where their ranges meet. The hybrids grow into healthy adults, but their chromosomes fail to pair during meiosis and they produce no functional gametes. Which reproductive barrier keeps the two species distinct?',
    options: [
      'A prezygotic barrier based on mechanical incompatibility',
      'A prezygotic barrier based on gamete incompatibility',
      'A postzygotic barrier based on hybrid inviability',
      'A postzygotic barrier based on hybrid sterility',
    ],
    correctAnswer: 3,
    explanation:
      'A zygote does form and develops into a healthy adult, so the barrier acts after fertilization; because the adult hybrid cannot produce gametes, the barrier is hybrid sterility. Mechanical and gametic barriers are prezygotic and would prevent the hybrid zygote from forming in the first place. Hybrid inviability would mean the hybrids die before reaching reproductive age, which the stem rules out.',
    skill: '1C speciation',
  },
  {
    id: 'fl2-bb-a-d05',
    section: 'bio-biochem',
    discipline: 'microbiology',
    question: 'Vancomycin, a large glycopeptide that binds peptidoglycan precursors, kills many gram-positive bacteria but is largely ineffective against gram-negative bacteria. The most likely reason is that gram-negative bacteria:',
    options: [
      'have an outer membrane that excludes large molecules from their thin peptidoglycan.',
      'lack peptidoglycan entirely, so the drug has no target within their cell walls.',
      'have a thicker peptidoglycan layer that the drug cannot fully penetrate.',
      'have sterols in their plasma membrane that bind and inactivate the drug.',
    ],
    correctAnswer: 0,
    explanation:
      'Gram-negative bacteria surround a thin peptidoglycan layer with an outer membrane whose porins admit only small hydrophilic molecules, so a large glycopeptide cannot reach its target. Gram-negative bacteria do have peptidoglycan, located in the periplasmic space. It is gram-positive bacteria that have the thick peptidoglycan layer, and they are the ones vancomycin kills. Bacterial membranes generally lack sterols, which are characteristic of eukaryotic membranes.',
    skill: '2B bacterial cell envelope',
  },
  {
    id: 'fl2-bb-a-d06',
    section: 'bio-biochem',
    discipline: 'biochemistry',
    question: 'A protein with an isoelectric point (pI) of 5.0 is to be separated from a contaminating protein with a pI of 8.5 by ion-exchange chromatography at pH 7.0. Which choice retains the target protein on the column while the contaminant flows through?',
    options: [
      'A cation exchanger, because the target protein is positively charged at pH 7.0',
      'An anion exchanger, because the target protein is positively charged at pH 7.0',
      'A cation exchanger, because the target protein is negatively charged at pH 7.0',
      'An anion exchanger, because the target protein is negatively charged at pH 7.0',
    ],
    correctAnswer: 3,
    explanation:
      'At a pH above its pI, a protein carries a net negative charge, so at pH 7.0 the target (pI 5.0) is negative and binds the positively charged resin of an anion exchanger, while the contaminant (pI 8.5) is positive at pH 7.0, is repelled, and flows through. The target is not positively charged at this pH, which rules out both options built on that premise. A cation exchanger carries negative groups, so it would repel the negatively charged target and retain the contaminant instead.',
    skill: '1A protein purification',
  },
  {
    id: 'fl2-bb-a-d07',
    section: 'bio-biochem',
    discipline: 'biochemistry',
    question: 'Intracellular fluid is buffered partly by the $\\text{H}_2\\text{PO}_4^-/\\text{HPO}_4^{2-}$ pair, which has a $\\text{p}K_a$ of 6.8. At an intracellular pH of 7.4, the ratio $[\\text{H}_2\\text{PO}_4^-]/[\\text{HPO}_4^{2-}]$ is closest to:',
    options: ['0.25', '0.60', '1.0', '4.0'],
    correctAnswer: 0,
    explanation:
      'By the Henderson–Hasselbalch equation, $\\log([\\text{HPO}_4^{2-}]/[\\text{H}_2\\text{PO}_4^-]) = 7.4 - 6.8 = 0.6$, and because $\\log 4 \\approx 0.6$, the base-to-acid ratio is about 4; the acid-to-base ratio asked for is therefore about 1/4, or 0.25. The value 0.60 is the logarithm of the ratio, not the ratio itself. A ratio of 1.0 would hold only if the pH equaled the $\\text{p}K_a$. The value 4.0 is the base-to-acid ratio, the inverse of the ratio asked for.',
    skill: '1A buffers (Henderson–Hasselbalch)',
  },
  {
    id: 'fl2-bb-a-d08',
    section: 'bio-biochem',
    discipline: 'biochemistry',
    question: 'In many enzyme active sites, a single amino acid side chain donates a proton in one step of the mechanism and accepts a proton in another, at a pH near 7. Which side chain is best suited to this role?',
    options: [
      'Lysine, whose side-chain amino group has a $\\text{p}K_a$ near 10.5',
      'Aspartate, whose side-chain carboxyl group has a $\\text{p}K_a$ near 3.9',
      'Histidine, whose side-chain imidazole group has a $\\text{p}K_a$ near 6.0',
      'Serine, whose side-chain hydroxyl group has a $\\text{p}K_a$ near 13',
    ],
    correctAnswer: 2,
    explanation:
      'A group can act as both a general acid and a general base near pH 7 only if appreciable fractions of it are protonated and deprotonated there, which requires a $\\text{p}K_a$ close to 7; histidine’s imidazole, with a $\\text{p}K_a$ near 6, fits. Lysine’s amino group is almost entirely protonated at pH 7 and so is a poor proton acceptor. Aspartate’s carboxyl group is almost entirely deprotonated at pH 7 and so is a poor proton donor. Serine’s hydroxyl is essentially never deprotonated near pH 7, and protonating it would require strongly acidic conditions, so it cannot shuttle protons in either direction.',
    skill: '1D amino acid side-chain chemistry',
  },
]
