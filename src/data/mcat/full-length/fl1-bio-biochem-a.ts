/**
 * MCAT Full-Length Form 1 — Biological & Biochemical Foundations, file A
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

export const FL1_BIO_BIOCHEM_A_PASSAGES: MCATPassage[] = [
  // ────────────────────────────────────────────────────────────────────────
  // 1. METABOLISM — Oxygen electrode: vehicle vs oligomycin vs DNP (exp, chart)
  // ────────────────────────────────────────────────────────────────────────
  {
    id: 'fl1-bb-a-01',
    section: 'bio-biochem',
    discipline: 'metabolism',
    title: 'Oxygen Consumption by Isolated Mitochondria',
    passageText:
      'In aerobic cells, the oxidation of fuel molecules is coupled to ATP synthesis by the electron transport chain (ETC) of the inner mitochondrial membrane. Electrons from NADH enter the chain at Complex I, whereas electrons from the $\\text{FADH}_2$ generated when succinate is oxidized to fumarate enter at Complex II. Both routes deliver electrons to ubiquinone, then to Complex III, cytochrome c, and Complex IV, where $\\text{O}_2$ is reduced to water. Complexes I, III, and IV pump protons from the matrix into the intermembrane space, generating an electrochemical gradient; Complex II pumps no protons. Protons return to the matrix through ATP synthase, and the energy released drives the phosphorylation of ADP.\n\nBecause electron transport and ATP synthesis are linked only through the proton gradient, the rate at which mitochondria consume oxygen depends on the demand for ATP. This dependence, known as respiratory control, can be studied with an oxygen electrode that continuously records the concentration of dissolved $\\text{O}_2$ in a sealed chamber.\n\nResearchers isolated mitochondria from rat liver by differential centrifugation and suspended them in a buffer containing phosphate, magnesium ions, and 5 mM succinate. Each of three sealed 1.0 mL chambers received the same quantity of mitochondria (1.0 mg protein), 1 mM ADP, and one of the following additions at $t = 0$: vehicle only (Chamber 1); oligomycin, an antibiotic that blocks the proton-conducting channel of ATP synthase (Chamber 2); or 2,4-dinitrophenol (DNP), a lipid-soluble weak acid that shuttles protons across the inner membrane (Chamber 3). The chambers were held at 25 °C, at which the air-saturated buffer initially contained about 240 μM $\\text{O}_2$. The dissolved oxygen concentration in each chamber was recorded for 7 minutes (Figure 1).\n\nAt the end of the run, ATP in each chamber was measured with a luciferase-based assay. ATP had accumulated in Chamber 1 but was undetectable above background in Chambers 2 and 3. A fine thermocouple in each chamber showed that the temperature of Chamber 3 rose measurably during the run, whereas the temperatures of Chambers 1 and 2 did not change.\n\nThe researchers noted two features of the method. First, once the dissolved oxygen concentration reaches zero, electron transport ceases regardless of the state of the proton gradient, and the electrode trace becomes flat. Second, because the chambers are sealed, the total amount of oxygen consumed can be calculated from the change in concentration and the chamber volume.\n\nDNP was sold in the 1930s as a weight-loss drug and was withdrawn after several users died of uncontrolled hyperthermia. The researchers argued that the relationship among proton movement, oxygen consumption, and heat production observed in their chambers accounts both for the drug’s effect on body weight and for its lethal side effect.',
    chart: {
      title: 'Figure 1. Dissolved oxygen in each chamber after addition of ADP and treatment at t = 0',
      kind: 'line',
      xLabel: 'Time',
      xUnit: 'min',
      yLabel: 'Dissolved O2',
      yUnit: 'μM',
      xValues: [0, 1, 2, 3, 4, 5, 6, 7],
      yValues: [240, 220, 200, 180, 160, 140, 120, 100],
      seriesLabel: 'Chamber 1 (vehicle)',
      comparisonSeries: [
        { label: 'Chamber 2 (oligomycin)', yValues: [240, 236, 232, 228, 224, 220, 216, 212] },
        { label: 'Chamber 3 (DNP)', yValues: [240, 200, 160, 120, 80, 40, 0, 0] },
      ],
      hidePointLabels: true,
    },
    questions: [
      {
        question: 'According to Figure 1, during the first 4 minutes the rate of oxygen consumption in Chamber 3 was approximately how many times the rate in Chamber 1?',
        options: ['About half the rate in Chamber 1', 'About twice the rate in Chamber 1', 'About four times the rate in Chamber 1', 'About ten times the rate in Chamber 1'],
        correctAnswer: 1,
        explanation:
          'Over the first 4 minutes, Chamber 1 falls from 240 to 160 μM (80 μM, or 20 μM/min), while Chamber 3 falls from 240 to 80 μM (160 μM, or 40 μM/min), so the DNP chamber consumed oxygen about twice as fast. Half the rate describes the direction of the oligomycin effect, not the uncoupler effect. Ten times is roughly the ratio of Chamber 3 to Chamber 2 (40 versus 4 μM/min), not to Chamber 1. Four times overestimates the slope difference; the two traces differ by a factor of two, not four, at every time point before Chamber 3 runs out of oxygen.',
        skill: '1D oxidative phosphorylation',
      },
      {
        question: 'Oligomycin does not bind any complex of the electron transport chain, yet oxygen consumption in Chamber 2 was far lower than in Chamber 1. Which of the following best explains this observation?',
        options: [
          'Blocking ATP synthase stops proton re-entry, so the gradient builds until it opposes further pumping and electron flow.',
          'Blocking ATP synthase depletes matrix ADP, which is the direct electron donor to Complex I of the chain.',
          'Blocking ATP synthase lets protons leak freely across the membrane, wasting the energy needed to reduce oxygen.',
          'Blocking ATP synthase halts oxidation of succinate, because Complex II requires ATP hydrolysis to accept electrons.',
        ],
        correctAnswer: 0,
        explanation:
          'Electron transport and proton pumping are thermodynamically coupled: pumping protons against an ever-steeper electrochemical gradient becomes unfavorable, so when ATP synthase can no longer let protons back in, the gradient rises until it throttles electron flow and, with it, oxygen reduction. This is respiratory control in the passage’s sense. ADP is not an electron donor to Complex I (NADH is), so ADP depletion cannot directly stop the chain. Free proton leak describes an uncoupler such as DNP, which increases rather than decreases oxygen consumption. Complex II oxidizes succinate with $\\text{FAD}$ as the electron acceptor and requires no ATP hydrolysis.',
        skill: '1D oxidative phosphorylation',
      },
      {
        question: 'If DNP were added to Chamber 2 at t = 4 min, which result would be expected for the remainder of the run?',
        options: [
          'Oxygen consumption would remain slow, and ATP would remain undetectable.',
          'Oxygen consumption would rise sharply, and ATP would begin to accumulate.',
          'Oxygen consumption would stop entirely, and ATP would begin to accumulate.',
          'Oxygen consumption would rise sharply, and ATP would still remain undetectable.',
        ],
        correctAnswer: 3,
        explanation:
          'DNP provides a route for protons to re-enter the matrix that bypasses ATP synthase, so the gradient that was throttling electron flow in the oligomycin chamber collapses and oxygen consumption accelerates to roughly the Chamber 3 rate. Because the protons no longer pass through ATP synthase, and the synthase is in any case blocked by oligomycin, no ATP is made. A continued slow rate ignores that the uncoupler removes the back-pressure that oligomycin created. Any option in which ATP accumulates is impossible with ATP synthase blocked and the gradient dissipated. Oxygen consumption stopping entirely is the opposite of an uncoupler’s effect.',
        skill: '1D oxidative phosphorylation',
      },
      {
        question: 'If rotenone, an inhibitor of Complex I, had been added to Chamber 1 at t = 0, oxygen consumption during the run would most likely have been:',
        options: [
          'abolished, because Complex I is the only site at which electrons enter the chain.',
          'reduced by about half, because Complex I contributes half of the proton pumping.',
          'largely unchanged, because succinate’s electrons enter the chain after Complex I.',
          'increased, because inhibition of Complex I relieves feedback inhibition of Complex II.',
        ],
        correctAnswer: 2,
        explanation:
          'The buffer supplied succinate as the sole respiratory substrate. Succinate is oxidized by Complex II, which passes electrons to ubiquinone downstream of Complex I, so a Complex I inhibitor leaves the succinate-driven electron flow to Complexes III and IV essentially intact. Complex I is not the only entry point; the passage describes a second one at Complex II. A halving of the rate would require that the chain be using NADH and succinate in equal measure, but no NADH-generating substrate was provided. Complex II is not feedback-inhibited by Complex I activity, and blocking any part of the chain cannot increase oxygen consumption.',
        skill: '1D electron transport chain',
      },
      {
        question: 'Electrons that enter the chain at Complex II yield about 1.5 ATP per oxygen atom reduced. Based on Figure 1, the amount of ATP synthesized in Chamber 1 during the first 5 minutes was closest to:',
        options: ['75 nmol', '150 nmol', '300 nmol', '600 nmol'],
        correctAnswer: 2,
        explanation:
          'Chamber 1 falls from 240 to 140 μM in 5 minutes, a change of 100 μM in a 1.0 mL chamber, which is 100 nmol of $\\text{O}_2$. Each $\\text{O}_2$ molecule contains two oxygen atoms, so 200 nmol of oxygen atoms were reduced, and at 1.5 ATP per atom this gives 300 nmol ATP. The value 150 nmol forgets that each $\\text{O}_2$ supplies two atoms. The value 600 nmol uses about 3 ATP per atom, the approximate yield for NADH-derived electrons entering at Complex I. The value 75 nmol both ignores the second atom and halves the ATP yield.',
        skill: '1D ATP yield',
      },
    ],
  },

  // ────────────────────────────────────────────────────────────────────────
  // 2. GENETICS — Retinitis pigmentosa family: mode, penetrance, linked marker (info, table)
  // ────────────────────────────────────────────────────────────────────────
  {
    id: 'fl1-bb-a-02',
    section: 'bio-biochem',
    discipline: 'genetics',
    title: 'Inheritance of a Hereditary Retinal Degeneration',
    passageText:
      'Retinitis pigmentosa (RP) is a group of inherited disorders in which the photoreceptor cells of the retina degenerate progressively, typically beginning with night blindness and loss of peripheral vision. RP is genetically heterogeneous: mutations in dozens of different genes produce clinically similar disease, and different families show autosomal dominant, autosomal recessive, or X-linked inheritance. Establishing the mode of inheritance is the first step in genetic counseling, because the recurrence risk for relatives differs greatly among the three.\n\nSeveral features of a pedigree help establish the mode of inheritance. A son receives his father’s Y chromosome rather than his X chromosome, so transmission of a trait from father to son is incompatible with X-linkage. In autosomal dominant disease, roughly half of the children of an affected parent inherit the disease allele, and affected individuals typically appear in every generation. In autosomal recessive disease, affected children are usually born to two unaffected carrier parents, and the parents are often related. In X-linked recessive disease, affected individuals are predominantly male, and the trait passes through unaffected carrier females.\n\nInterpretation is complicated by reduced penetrance, in which some individuals who carry a disease allele never express the phenotype. For several dominant forms of RP, penetrance is estimated at about 80%, meaning that one in five carriers of the disease allele remains unaffected throughout life. Reduced penetrance produces apparent “skipped” generations that can mimic recessive inheritance. Penetrance should be distinguished from variable expressivity, in which carriers are all affected but differ in severity or age of onset.\n\nWhen the causative mutation in a family has not been identified, predictive testing can still be performed using a linked genetic marker, such as a microsatellite repeat located near the disease locus. Alleles of the marker are distinguished by their length and are named with numbers. Because the marker and the disease gene lie close together on the same chromosome, they tend to be inherited together; the chance that a crossover separates them in a single meiosis is the recombination frequency between the two loci. A marker cannot be used for prediction until its phase, meaning which marker allele lies on the same chromosome as the disease allele in that particular family, has been established from affected relatives.\n\nA genetics clinic evaluated a three-generation family with RP (Table 1). New mutations at RP loci are rare, and no member of the family was born to related parents. Using affected members of generations I and II, the clinic established that in this family the disease allele lies on the chromosome carrying marker allele 3, and that the recombination frequency between the marker and the disease locus is 10%. Individuals II-4 and II-5 married into the family, have no family history of RP, and were examined and found to be unaffected.',
    figure:
      '**Table 1. Family members evaluated by the clinic**\n\n| Individual | Sex | Parents | Phenotype | Marker alleles |\n|------------|-----|---------|-----------|----------------|\n| I-1 | M | — | affected | 3, 4 |\n| I-2 | F | — | unaffected | 1, 2 |\n| II-1 | M | I-1 × I-2 | affected | 1, 3 |\n| II-2 | F | I-1 × I-2 | unaffected | 2, 3 |\n| II-3 | F | I-1 × I-2 | unaffected | 1, 4 |\n| II-4 | M | (married in) | unaffected | 5, 6 |\n| II-5 | F | (married in) | unaffected | 5, 5 |\n| III-1 | M | II-4 × II-2 | affected | 3, 5 |\n| III-2 | F | II-4 × II-2 | unaffected | 2, 6 |\n| III-3 | F | II-1 × II-5 | affected | 3, 5 |\n| III-4 | M | II-1 × II-5 | unaffected | 1, 5 |',
    questions: [
      {
        question: 'Which observation in Table 1 most decisively excludes X-linked inheritance of RP in this family?',
        options: [
          'II-3 is an unaffected daughter of an affected father.',
          'III-3 is an affected daughter of an affected father.',
          'II-2 is an unaffected mother of an affected son.',
          'II-1 is an affected son of an affected father.',
        ],
        correctAnswer: 3,
        explanation:
          'I-1 and II-1 are both affected, and a father contributes only a Y chromosome to his son, so the disease allele in II-1 cannot lie on an X chromosome; this single observation rules out both X-linked dominant and X-linked recessive inheritance. An affected daughter of an affected father is fully compatible with X-linked dominant inheritance, since a father gives his X to every daughter. An unaffected daughter of an affected father would be unexpected under X-linked dominance, but with reduced penetrance she could simply be a non-penetrant carrier, and under X-linked recessive inheritance she would be an unaffected carrier, so the observation is not decisive. An unaffected mother with an affected son is the classic pattern of X-linked recessive transmission and therefore does not exclude X-linkage.',
        skill: '1C modes of inheritance',
      },
      {
        question: 'Which of the following statements about II-2 is best supported by the information provided?',
        options: [
          'She carries the disease allele but does not express the phenotype.',
          'She inherited a recombinant chromosome from I-1 and lacks the disease allele.',
          'She is homozygous for a recessive allele that is expressed only in males.',
          'Her son III-1 acquired a new mutation, so she carries no disease allele.',
        ],
        correctAnswer: 0,
        explanation:
          'II-2 has an affected father and an affected son, her husband II-4 is unaffected with no family history, and the passage states that new mutations are rare, so the disease allele in III-1 almost certainly came from her; she must carry it without expressing it, which is exactly what 80% penetrance predicts for one in five carriers. She also carries marker allele 3, the allele in phase with the disease in this family, which is consistent with her having received the disease-bearing chromosome. A recombinant chromosome lacking the disease allele would leave no source for her son’s disease. Recessive inheritance is excluded because the trait passes from affected father to affected son and daughter across three generations without consanguinity, and the family shows affected females. A new mutation in III-1 is the least likely explanation given both the stated rarity of new mutations and the fact that III-1 carries the family’s disease-linked marker allele.',
        skill: '1C penetrance',
      },
      {
        question: 'II-1 and II-5 are expecting another child. Prenatal testing shows that the fetus inherited marker allele 1 from II-1. The probability that the fetus inherited the disease allele is closest to:',
        options: ['0%', '5%', '10%', '50%'],
        correctAnswer: 2,
        explanation:
          'In II-1, the disease allele is on the chromosome carrying marker allele 3 (received from I-1), and marker allele 1 is on his other chromosome (received from I-2). A fetus that received allele 1 from II-1 received the non-disease chromosome unless a crossover between the marker and the disease locus occurred in the meiosis that produced the sperm, which happens with the stated recombination frequency of 10%. A value of 0% ignores recombination entirely. A value of 5% would apply only if the 10% were further halved, but the recombination frequency already describes the chance per gamete. A value of 50% is the prior probability before any marker information and is what the marker result is meant to refine.',
        skill: '1C linkage and recombination',
      },
      {
        question: 'Assuming 80% penetrance, what is the probability that a future child of II-1 and II-5 will be affected with RP?',
        options: ['20%', '40%', '50%', '80%'],
        correctAnswer: 1,
        explanation:
          'II-1 is heterozygous for a dominant disease allele and II-5 carries none, so each child has a 50% chance of inheriting the allele; only 80% of carriers express the phenotype, so the probability of being affected is 0.5 × 0.8 = 0.40. A value of 50% is the chance of inheriting the allele and ignores penetrance. A value of 80% is the penetrance itself and ignores the 50% chance of transmission. A value of 20% is the proportion of carriers who remain unaffected and is not the probability of being affected.',
        skill: '1C probability in pedigrees',
      },
    ],
  },

  // ────────────────────────────────────────────────────────────────────────
  // 3. PHYSIOLOGY — Thyroid axis feedback: thyroidectomy / hypophysectomy / T4 (exp, table)
  // ────────────────────────────────────────────────────────────────────────
  {
    id: 'fl1-bb-a-03',
    section: 'bio-biochem',
    discipline: 'physiology',
    title: 'Feedback Regulation of the Thyroid Axis',
    passageText:
      'The thyroid gland secretes thyroxine ($\\text{T}_4$) and, in smaller amounts, triiodothyronine ($\\text{T}_3$), iodine-containing hormones derived from tyrosine. Because they are lipophilic, thyroid hormones circulate bound to plasma proteins and act through intracellular receptors that alter gene transcription in nearly every tissue, raising basal metabolic rate, heat production, and the sensitivity of the heart to catecholamines. Secretion is controlled by a three-tiered axis. Thyrotropin-releasing hormone (TRH) from the hypothalamus reaches the anterior pituitary through the hypophyseal portal vessels and stimulates thyrotroph cells to release thyroid-stimulating hormone (TSH). TSH acts on a G-protein-coupled receptor on thyroid follicular cells to stimulate iodide uptake, hormone synthesis, and hormone release. Thyroid hormone in turn inhibits both TRH synthesis in the hypothalamus and TSH release from the pituitary.\n\nTo examine the sites at which this negative feedback acts, investigators studied adult rats assigned to five groups of eight. Group 1 underwent sham surgery. Group 2 underwent thyroidectomy, the surgical removal of the thyroid gland. Group 3 underwent hypophysectomy, the removal of the pituitary gland, after which the animals received cortisol and sex-steroid replacement so that deficits unrelated to the thyroid would not confound the results. Group 4 underwent thyroidectomy and received daily subcutaneous injections of $\\text{T}_4$ at a dose chosen to match the normal secretion rate. Group 5 underwent sham surgery and received daily injections of $\\text{T}_4$ at four times that dose. Four weeks after surgery, blood was collected for measurement of serum TSH and total $\\text{T}_4$ by immunoassay, and hypothalamic tissue was collected to quantify TRH messenger RNA relative to the sham group. Results appear in Table 1.\n\nThe investigators noted that hypophysectomized animals received no TSH replacement, so their thyroid glands atrophied over the four-week period. They also recorded body temperature and resting heart rate. Groups 2 and 3 developed lower body temperature and slower heart rates than the sham group, whereas Group 5 animals showed elevated heart rates, weight loss despite increased food intake, and a fine tremor.\n\nThe TSH immunoassay has a lower limit of detection of 0.1 mU/L, and values below this limit are reported as “<0.1”; the corresponding limit for $\\text{T}_4$ is 0.5 μg/dL. TRH mRNA is reported as a ratio to the mean of Group 1.\n\nIn clinical practice, measurement of TSH is the first-line test of thyroid function because the pituitary’s response amplifies small changes in circulating hormone: a modest decrease in free $\\text{T}_4$ produces a large rise in TSH. Interpretation nevertheless requires knowing where in the axis a defect lies, since the same $\\text{T}_4$ concentration can be accompanied by very different TSH values depending on whether the thyroid, the pituitary, or the hypothalamus is the site of the lesion.',
    figure:
      '**Table 1. Serum hormones and hypothalamic TRH mRNA four weeks after surgery (group means)**\n\n| Group | Treatment | Serum TSH (mU/L) | Serum T4 (μg/dL) | TRH mRNA (relative) |\n|-------|-----------|------------------|------------------|---------------------|\n| 1 | Sham surgery | 2.0 | 6.0 | 1.0 |\n| 2 | Thyroidectomy | 38 | <0.5 | 3.1 |\n| 3 | Hypophysectomy | <0.1 | <0.5 | 3.0 |\n| 4 | Thyroidectomy + T4 (1× dose) | 1.9 | 6.2 | 1.0 |\n| 5 | Sham surgery + T4 (4× dose) | <0.1 | 15 | 0.3 |',
    questions: [
      {
        question: 'If TRH were infused intravenously into the animals of Group 3, which change in serum TSH would be expected within 30 minutes?',
        options: [
          'A rise to approximately the Group 1 value, because TRH acts directly on thyrotroph cells',
          'A rise well above the Group 1 value, because the thyrotrophs are freed from T4 feedback',
          'No change, because the cells that synthesize and secrete TSH have been removed',
          'No change, because TRH cannot stimulate thyrotrophs in the absence of circulating T4',
        ],
        correctAnswer: 2,
        explanation:
          'Group 3 animals are hypophysectomized: the anterior pituitary, which contains the thyrotrophs, is gone, so there is no cell population for TRH to act on and TSH stays undetectable. A rise to the Group 1 value would be expected in an intact animal, where TRH does act directly on thyrotrophs. An exaggerated rise above the Group 1 value describes what a TRH infusion would do in Group 2, whose thyrotrophs are intact and released from T4 feedback (their TSH is already 38 mU/L). The claim that TRH needs circulating T4 to work inverts the actual relationship, in which T4 inhibits rather than permits the TRH effect.',
        skill: '3B hypothalamic-pituitary axis',
      },
      {
        question: 'The results for Group 4 compared with Group 2 indicate that:',
        options: [
          'T4 suppresses TSH secretion only when the thyroid gland is present to respond to TSH.',
          'circulating T4 suppresses TSH secretion whether or not the thyroid gland is present.',
          'T4 replacement lowers TSH by regenerating thyroid follicular cells after surgery.',
          'suppression of TRH mRNA requires a thyroid signal other than T4 itself.',
        ],
        correctAnswer: 1,
        explanation:
          'Both groups lack a thyroid gland; the only difference is that Group 4 received T4 injections, and Group 4 has normal TSH and TRH mRNA while Group 2 has both markedly elevated. Therefore T4 in the circulation is sufficient to restore feedback on the pituitary and hypothalamus, and the thyroid gland itself is not needed for the feedback loop, only as the normal source of the hormone. The idea that the thyroid must be present is contradicted directly by Group 4. Injected T4 cannot regenerate a surgically removed gland, and the values were normalized within the same four-week period in which Group 3 glands atrophied. Group 4 also shows normal TRH mRNA, so no thyroid signal other than T4 is needed to suppress TRH expression.',
        skill: '3B negative feedback',
      },
      {
        question: 'The elevated TRH mRNA in Group 2 could result either from loss of T4 feedback on the hypothalamus or from a stimulatory effect of the high TSH. Which comparison in Table 1 best resolves this question?',
        options: [
          'Group 4 versus Group 1, because T4 replacement normalizes both TSH and TRH mRNA',
          'Group 5 versus Group 1, because excess T4 lowers both TSH and TRH mRNA below normal',
          'Group 2 versus Group 5, because TSH and TRH mRNA change in the same direction',
          'Group 3 versus Group 1, because TRH mRNA rises even though TSH is undetectable in serum',
        ],
        correctAnswer: 3,
        explanation:
          'To separate the two candidate causes, one needs a condition in which T4 is low but TSH is not high. Group 3 provides it: T4 is undetectable, TSH is undetectable, and TRH mRNA is still tripled, so the rise in TRH expression cannot be driven by TSH and must reflect loss of T4 feedback. In Group 4 versus Group 1, and in Group 5 versus Group 1, TSH and T4 move together, so the two explanations cannot be told apart. Group 2 versus Group 5 likewise shows TSH and TRH mRNA changing in the same direction, which is exactly the correlation that leaves the question open.',
        skill: '3B experimental design in endocrinology',
      },
      {
        question: 'A patient’s serum TSH and T4 values most closely resemble those of Group 5. Which condition is most consistent with this pattern?',
        options: [
          'Dietary iodine deficiency that limits thyroid hormone synthesis',
          'Autoimmune destruction of thyroid follicular cells',
          'An antibody that activates the TSH receptor',
          'A pituitary tumor that destroys the thyrotroph cells',
        ],
        correctAnswer: 2,
        explanation:
          'Group 5 has high T4 with suppressed TSH: the thyroid hormone excess arises independently of TSH and feeds back to shut off the pituitary. An antibody that activates the TSH receptor drives follicular cells to overproduce hormone regardless of TSH, producing exactly this pattern (high T4, low TSH). Iodine deficiency and autoimmune destruction of follicular cells both reduce hormone output, so T4 would be low and TSH high, as in Group 2. Destruction of thyrotrophs would lower TSH, but T4 would then fall rather than rise, as in Group 3.',
        skill: '3B endocrine disorders',
      },
    ],
  },

  // ────────────────────────────────────────────────────────────────────────
  // 4. MOLECULAR BIOLOGY — Luciferase reporter mapping of a gluconeogenic gene (exp, table)
  // ────────────────────────────────────────────────────────────────────────
  {
    id: 'fl1-bb-a-04',
    section: 'bio-biochem',
    discipline: 'molecular biology',
    title: 'Mapping the Regulatory Region of a Gluconeogenic Gene',
    passageText:
      'Transcription of eukaryotic protein-coding genes by RNA polymerase II depends on two classes of DNA elements. The core promoter, which in many genes includes a TATA box located about 25 to 30 base pairs upstream of the transcription start site, is where general transcription factors assemble the preinitiation complex. Regulatory elements, which may lie within a few hundred base pairs of the promoter or many kilobases away, are bound by sequence-specific transcription factors that raise or lower the rate of initiation. An element that stimulates transcription regardless of its distance from the promoter and regardless of its orientation is called an enhancer.\n\nIn the liver, transcription of several genes encoding gluconeogenic enzymes is induced by glucagon and repressed by insulin. Glucagon binds a G-protein-coupled receptor that activates adenylyl cyclase; the resulting rise in cyclic AMP (cAMP) activates protein kinase A (PKA), which phosphorylates the transcription factor CREB. Phosphorylated CREB bound at cAMP response elements (CREs) recruits coactivators that promote initiation.\n\nTo map the elements that control one such gene, referred to here as gene G, investigators fused fragments of its upstream region to the coding sequence of firefly luciferase, an enzyme whose light output is proportional to its amount. Positions are numbered relative to the transcription start site (+1). Construct A contained the region from −2000 to +50. Constructs B, C, and D contained progressively shorter fragments with the same 3′ end. Construct E was identical to A except for base substitutions that destroyed the TATA box. Construct F was identical to A except for three base substitutions within a candidate CRE centered at −650. In Construct G, the segment from −1000 to −300 was excised and reinserted at its original position in the opposite orientation.\n\nEach construct was introduced into cultured rat hepatoma cells by transfection together with a second plasmid in which a constitutive viral promoter drives a different enzyme, Renilla luciferase, whose light emission can be measured separately. Twenty-four hours later, the cells were treated for 6 hours with vehicle, with forskolin (a direct activator of adenylyl cyclase), or with forskolin plus insulin. Firefly luciferase activity in each well was divided by Renilla luciferase activity, and the ratio for Construct A in vehicle-treated cells was set to 100. Results are shown in Table 1. Each value is the mean of three wells; the standard deviation was less than 10% of the mean in every case.\n\nIn separate wells, the investigators confirmed that forskolin raised the intracellular cAMP concentration about tenfold within 15 minutes and that insulin, given alone or with forskolin, did not alter the cAMP concentration. Insulin is known to activate a receptor tyrosine kinase whose downstream kinases phosphorylate several transcription factors, but the investigators did not examine those pathways in this study.',
    figure:
      '**Table 1. Normalized firefly luciferase activity (Construct A, vehicle = 100)**\n\n| Construct | Upstream region | Vehicle | Forskolin | Forskolin + insulin |\n|-----------|-----------------|---------|-----------|---------------------|\n| A | −2000 to +50 | 100 | 820 | 160 |\n| B | −1000 to +50 | 98 | 800 | 155 |\n| C | −300 to +50 | 95 | 105 | 100 |\n| D | −100 to +50 | 90 | 98 | 92 |\n| E | −2000 to +50, TATA box mutated | 3 | 4 | 3 |\n| F | −2000 to +50, CRE at −650 mutated | 100 | 125 | 110 |\n| G | −2000 to +50, −1000/−300 inverted | 102 | 790 | 150 |',
    questions: [
      {
        question: 'The results for Constructs B and C indicate that a sequence required for the response to forskolin lies between positions:',
        options: ['−2000 and −1000.', '−1000 and −300.', '−300 and −100.', '−100 and +50.'],
        correctAnswer: 1,
        explanation:
          'Construct B (−1000 to +50) is induced about eightfold by forskolin, whereas Construct C (−300 to +50) is not induced at all, so the sequence that confers the response must lie in the DNA that B has and C lacks, between −1000 and −300; the mutation at −650 in Construct F, which also abolishes most of the induction, is consistent with this. The region between −2000 and −1000 is dispensable, since B responds as well as A. The regions between −300 and −100 and between −100 and +50 are present in Construct C, which shows no response, so they are not sufficient for induction, although the −100 to +50 fragment does support basal transcription.',
        skill: '1B promoter deletion analysis',
      },
      {
        question: 'The results for Construct E are best explained by the loss of a site required for:',
        options: [
          'binding of general transcription factors that position RNA polymerase II at the start site.',
          'binding of phosphorylated CREB and the coactivators that it recruits to the gene.',
          'termination of transcription at the 3′ end of the luciferase coding sequence.',
          'initiation of translation of the luciferase mRNA at its start codon.',
        ],
        correctAnswer: 0,
        explanation:
          'Construct E differs from A only in the TATA box, and its activity is near zero under every condition, including basal conditions. The TATA box is the core promoter element recognized by general transcription factors (TFIID and its partners) that assemble the preinitiation complex and set the start site; without it, initiation fails whether or not activators are bound upstream. Loss of CREB binding would abolish only the forskolin-induced increase, leaving basal expression intact, as Construct F shows. Termination and translation signals are in the luciferase portion of the construct, which is identical in every construct, and defects in them would not be specific to E.',
        skill: '1B core promoter',
      },
      {
        question: 'The results for Construct G best support the conclusion that the segment from −1000 to −300:',
        options: [
          'acts as a core promoter, because it must lie immediately upstream of the start site.',
          'acts as a silencer, because inverting it does not reduce basal expression.',
          'acts as an insulator, because it separates the promoter from distal sequences.',
          'acts as an enhancer, because its activity does not depend on its orientation.',
        ],
        correctAnswer: 3,
        explanation:
          'Inverting the −1000 to −300 segment (Construct G) leaves both basal activity and the forskolin response essentially unchanged relative to Construct A, and the passage defines an enhancer as an element that functions independently of orientation. A core promoter is defined by its fixed position and orientation relative to the start site; the segment is several hundred base pairs upstream and works either way around, and Construct D shows the core promoter lies within −100 to +50. A silencer would lower transcription, but removing this segment (Construct C) lowers the induced response rather than raising it. Nothing in the data tests whether the segment blocks communication between other elements, which is what an insulator does.',
        skill: '1B enhancers',
      },
      {
        question: 'Suppose the hepatoma cells were engineered to express a mutant PKA catalytic subunit that is active whether or not cAMP is present. The activity of Construct A in vehicle-treated cells would then be expected to be:',
        options: [
          'close to the vehicle value in Table 1, because PKA acts only when cAMP is present.',
          'close to the vehicle value in Table 1, because CREB binding to DNA requires forskolin.',
          'close to the forskolin + insulin value, because insulin signaling remains unaffected.',
          'close to the forskolin value, because CREB would be phosphorylated without a cAMP signal.',
        ],
        correctAnswer: 3,
        explanation:
          'In the pathway the passage describes, cAMP serves only to activate PKA; a PKA that is active without cAMP would phosphorylate CREB constitutively, so the CRE-dependent induction seen with forskolin (about 800) should appear even in vehicle-treated cells. Saying that PKA acts only when cAMP is present contradicts the premise that the mutant is cAMP-independent. CREB binds the CRE regardless of forskolin; forskolin matters only because it leads to CREB phosphorylation, which the mutant kinase supplies. The forskolin + insulin value reflects repression by insulin, and no insulin was added to vehicle-treated wells.',
        skill: '1B signal-dependent transcription',
      },
      {
        question: 'Which of the following experiments would most directly test whether CREB is required for the response of Construct A to forskolin?',
        options: [
          'Measure Construct A activity in cells expressing a CREB variant that PKA cannot phosphorylate.',
          'Measure Construct A activity in cells treated with forskolin plus a phosphodiesterase inhibitor.',
          'Measure Construct C activity in cells treated with a higher concentration of forskolin.',
          'Measure Construct F activity in cells treated with insulin in the absence of forskolin.',
        ],
        correctAnswer: 0,
        explanation:
          'The pathway in the passage runs cAMP → PKA → phosphorylated CREB → CRE. A CREB variant lacking the PKA phosphorylation site should compete with endogenous CREB for CRE binding without being activated; if forskolin induction is lost in its presence while basal activity is retained, CREB is required. Adding a phosphodiesterase inhibitor would only raise cAMP further and tests the upstream signal, not the transcription factor. Increasing the forskolin dose on Construct C, which lacks the responsive element, tests whether the element is needed, not whether CREB acts through it. Treating Construct F with insulin alone examines insulin repression of an already-mutated element and says nothing about CREB.',
        skill: '1B transcription factor function',
      },
    ],
  },

  // ────────────────────────────────────────────────────────────────────────
  // 5. BIOCHEMISTRY — Protein folding, denaturation, chaperones (info)
  // ────────────────────────────────────────────────────────────────────────
  {
    id: 'fl1-bb-a-05',
    section: 'bio-biochem',
    discipline: 'biochemistry',
    title: 'Protein Folding, Denaturation, and Chaperones',
    passageText:
      'A polypeptide chain acquires its biological activity only after it folds into a specific three-dimensional structure. The primary structure is the sequence of amino acids joined by peptide bonds. Secondary structure consists of regular local conformations of the backbone, the α helix and the β sheet, held together by hydrogen bonds between backbone carbonyl and amide groups. Tertiary structure is the overall fold of a single chain, and quaternary structure describes the arrangement of multiple chains in a multisubunit protein.\n\nThe folded state is only marginally more stable than the unfolded state, typically by 20 to 60 kJ/mol. This small net stability is the difference between large opposing contributions. Folding is opposed by the loss of conformational entropy of the chain. It is favored chiefly by the hydrophobic effect: when nonpolar side chains are buried in the protein interior, the ordered water molecules that surrounded them in the unfolded state are released, increasing the entropy of the solvent. Hydrogen bonds, ionic interactions between oppositely charged side chains, and van der Waals contacts between tightly packed interior groups make additional contributions. In many secreted proteins, covalent disulfide bonds between cysteine residues further stabilize the fold; such bonds are rare in cytosolic proteins, whose environment is reducing.\n\nClassic experiments with bovine ribonuclease A, a 124-residue enzyme with four disulfide bonds, established that the information needed for folding resides in the amino acid sequence. Treating the enzyme with 8 M urea, which disrupts hydrogen bonding and weakens the hydrophobic effect, together with β-mercaptoethanol, which reduces disulfides to free thiols, produced an inactive, unfolded chain. When both reagents were removed by dialysis and the solution was exposed to air, the enzyme regained essentially full activity, and its four disulfide bonds re-formed between the same cysteine pairs as in the native protein. In a second experiment, the β-mercaptoethanol was removed first, allowing air oxidation while the urea was still present, and the urea was removed afterward. This preparation recovered only about 1% of the original activity, although all eight cysteines had formed disulfide bonds. Eight cysteines can pair in 105 different ways, only one of which is native.\n\nIn the crowded cytosol, folding is assisted by molecular chaperones. Chaperones of the Hsp70 family bind transiently to short stretches of exposed hydrophobic residues on nascent or partially folded chains and release them through cycles of ATP binding and hydrolysis, giving the chain repeated opportunities to fold. Chaperonins such as GroEL form a barrel-shaped chamber that encloses a single unfolded protein, isolating it from the crowded cytosol while it folds. Chaperones carry no information about the final structure; they prevent unproductive interactions rather than specify the fold. Synthesis of many chaperones increases sharply when cells are exposed to elevated temperature, which is why they were first named heat-shock proteins.\n\nDenaturation is the loss of native structure without cleavage of peptide bonds. Heat, extremes of pH, organic solvents, detergents, and chaotropic agents such as urea and guanidinium chloride all denature proteins, though by different mechanisms. Whether a denatured protein refolds when the denaturant is removed depends on whether the unfolded chain can find the native state before it aggregates; aggregation is the more common outcome for large, multidomain proteins in vitro.',
    questions: [
      {
        question: 'In the second ribonuclease experiment, which of the following best explains the low recovery of enzyme activity?',
        options: [
          'Urea hydrolyzed some of the peptide bonds, leaving short fragments that could not reassemble into a folded enzyme.',
          'Disulfides formed between cysteines brought together at random in the unfolded chain, locking in non-native structures.',
          'Removing β-mercaptoethanol before urea permanently oxidized the histidine residues of the active site to inactive forms.',
          'The four native disulfide bonds re-formed correctly, but the α helices could not re-form while β-mercaptoethanol was absent from the solution.',
        ],
        correctAnswer: 1,
        explanation:
          'With urea still present, the chain remained unfolded when air oxidation was permitted, so the eight cysteines paired according to which happened to be near one another rather than according to the native fold; the passage notes that 105 pairings are possible and only one is native, and about 1% activity (roughly 1 in 105) is what random pairing predicts. Once the wrong covalent disulfides form, removing urea cannot let the chain reach its native structure. Urea is a denaturant, not a hydrolyzing agent, and the passage defines denaturation as loss of structure without cleavage of peptide bonds. Air oxidation under these conditions forms disulfides; it does not permanently oxidize histidine. If the native disulfides had re-formed, the chain would have been constrained to its native fold and activity would have been high; nor does helix formation require β-mercaptoethanol.',
        skill: '1A protein folding',
      },
      {
        question: 'Substitution of an isoleucine residue in the interior of a folded protein with a lysine residue would be expected to destabilize the native state primarily because:',
        options: [
          'lysine cannot participate in hydrogen bonds with the peptide backbone.',
          'the larger lysine side chain cannot fit in the space occupied by isoleucine.',
          'burying a charged side chain away from solvating water is energetically costly.',
          'lysine disrupts the α helix, a conformation that isoleucine strongly favors.',
        ],
        correctAnswer: 2,
        explanation:
          'The hydrophobic effect that drives folding rewards burying nonpolar side chains such as isoleucine; a lysine side chain carries a positive charge at physiological pH and is strongly hydrated, so placing it in the nonpolar interior forfeits favorable solvation without gaining the hydrophobic benefit, and the fold loses stability. Lysine’s side-chain amine can donate hydrogen bonds, so an inability to hydrogen-bond is not the problem. Lysine and isoleucine are of comparable size, so steric exclusion alone does not explain a large destabilization. Both residues are compatible with helices, and the substitution is destabilizing whether or not the site is helical.',
        skill: '1A forces stabilizing tertiary structure',
      },
      {
        question: 'A cell line with a defective Hsp70 protein is shifted from 37 °C to 42 °C. Compared with normal cells at 42 °C, the defective cells would most likely show:',
        options: [
          'increased aggregation of partially unfolded proteins through exposed hydrophobic surfaces.',
          'increased cleavage of peptide bonds in newly synthesized proteins as they emerge from the ribosome.',
          'decreased formation of disulfide bonds in cytosolic proteins that normally depend on Hsp70.',
          'decreased transcription of the genes that encode the other heat-shock proteins.',
        ],
        correctAnswer: 0,
        explanation:
          'Heat partially unfolds proteins, exposing hydrophobic stretches that Hsp70 normally binds and shields; without functional Hsp70, those surfaces are free to associate with one another, and the passage identifies aggregation as the fate of unfolded chains that cannot find the native state. Heat denatures without breaking peptide bonds, so peptide-bond cleavage would not increase. Cytosolic proteins rarely contain disulfides in the first place because the cytosol is reducing, and Hsp70 does not form them. A defect in one chaperone does not stop the cell from inducing the other heat-shock genes; if anything, accumulation of unfolded protein increases that response.',
        skill: '1A chaperones',
      },
      {
        question: 'The hydrogen bonds that stabilize an α helix form between:',
        options: [
          'the side chains of residues located on adjacent turns of the helix.',
          'the backbone N–H groups of two adjacent residues on the same face of the helix.',
          'the backbone C=O of one residue and the side chain of the residue two positions later in the chain.',
          'the backbone C=O of one residue and the backbone N–H of the residue four positions later.',
        ],
        correctAnswer: 3,
        explanation:
          'Secondary structure is stabilized by backbone-to-backbone hydrogen bonds, and in the α helix each carbonyl oxygen accepts a hydrogen bond from the amide N–H of the residue four positions farther along the chain, so that every turn of the helix is tied to the next. Side-chain interactions contribute to tertiary structure, not to the helix itself, and a helix forms with almost any sequence of side chains. Two N–H groups are both hydrogen-bond donors and cannot bond to each other. A backbone-to-side-chain bond would depend on the sequence and would not produce the regular repeating geometry that defines secondary structure.',
        skill: '1A secondary structure',
      },
    ],
  },
]

export const FL1_BIO_BIOCHEM_A_DISCRETES: MCATDiscreteQuestion[] = [
  {
    id: 'fl1-bb-a-d01',
    section: 'bio-biochem',
    discipline: 'cell biology',
    question:
      'Cells exposed to ionizing radiation accumulate DNA double-strand breaks. A cell that has completed DNA replication but still carries unrepaired breaks is prevented from beginning mitosis by a checkpoint at the transition from:',
    options: ['G1 to S.', 'S to G2.', 'G2 to M.', 'metaphase to anaphase.'],
    correctAnswer: 2,
    explanation:
      'A cell that has finished replication is in G2, and the G2/M checkpoint monitors DNA integrity before entry into mitosis; damage there activates kinases that keep the mitotic cyclin-CDK complex inactive. The G1/S checkpoint also responds to DNA damage, but it acts before replication, not after. There is no distinct checkpoint at the S-to-G2 transition. The metaphase-to-anaphase (spindle assembly) checkpoint monitors kinetochore attachment to spindle microtubules, not DNA damage, and it acts after mitosis has already begun.',
    skill: '2C cell cycle checkpoints',
  },
  {
    id: 'fl1-bb-a-d02',
    section: 'bio-biochem',
    discipline: 'genetics',
    question:
      'An autosomal recessive disorder affects 1 in 10,000 newborns in a large population that is in Hardy–Weinberg equilibrium. The proportion of the population that are unaffected carriers of the disorder is closest to:',
    options: ['1 in 25', '1 in 50', '1 in 100', '1 in 200'],
    correctAnswer: 1,
    explanation:
      'The affected frequency is $q^2 = 1/10{,}000$, so $q = 0.01$ and $p = 0.99$. Carriers are heterozygotes, $2pq = 2(0.99)(0.01) \\approx 0.02$, or about 1 in 50. A value of 1 in 100 is the allele frequency $q$, not the carrier frequency. A value of 1 in 200 is half of $2pq$, the error of forgetting the factor of 2 for the two possible heterozygous genotypes. A value of 1 in 25 doubles the carrier frequency.',
    skill: '1C Hardy-Weinberg',
  },
  {
    id: 'fl1-bb-a-d03',
    section: 'bio-biochem',
    discipline: 'physiology',
    question:
      'A toxin selectively blocks voltage-gated potassium channels in a myelinated axon. Compared with a normal action potential, an action potential in the poisoned axon would most likely show:',
    options: [
      'a lower threshold and a faster rising phase.',
      'a smaller peak amplitude and no overshoot.',
      'a slower repolarization and a longer duration.',
      'a failure of the sodium channels to inactivate.',
    ],
    correctAnswer: 2,
    explanation:
      'Repolarization is carried by potassium efflux through voltage-gated potassium channels that open after the sodium channels; with those channels blocked, the membrane returns to rest only through leak channels and sodium-channel inactivation, so the falling phase is slower and the action potential is broader. Threshold and the rising phase depend on voltage-gated sodium channels, which are unaffected. Peak amplitude is set by sodium influx and the sodium equilibrium potential, so the overshoot is preserved. Sodium-channel inactivation is an intrinsic, time-dependent property of the sodium channel and does not require potassium current.',
    skill: '3A action potential',
  },
  {
    id: 'fl1-bb-a-d04',
    section: 'bio-biochem',
    discipline: 'physiology',
    question: 'Antigen fragments displayed on MHC class II molecules by a dendritic cell are recognized directly by:',
    options: ['cytotoxic T cells.', 'natural killer cells.', 'plasma cells.', 'helper T cells.'],
    correctAnswer: 3,
    explanation:
      'MHC class II molecules are expressed by professional antigen-presenting cells, and the peptide-MHC II complex is recognized by the T-cell receptor of CD4-positive helper T cells, which then coordinate B-cell and cytotoxic responses. Cytotoxic (CD8-positive) T cells recognize peptides on MHC class I, which nearly all nucleated cells express. Natural killer cells are part of innate immunity and respond to the absence of MHC class I rather than to a presented peptide. Plasma cells are antibody-secreting B cells and do not survey antigen-presenting cells for peptides.',
    skill: '3B adaptive immunity',
  },
  {
    id: 'fl1-bb-a-d05',
    section: 'bio-biochem',
    discipline: 'microbiology',
    question: 'The lipid envelope of an enveloped animal virus is derived from:',
    options: [
      'the plasma membrane of the host cell, acquired as the virion buds out.',
      'lipids synthesized by virus-encoded enzymes inside the capsid.',
      'the peptidoglycan wall of the host cell, incorporated during lysis.',
      'the inner mitochondrial membrane of the host, incorporated during assembly.',
    ],
    correctAnswer: 0,
    explanation:
      'Enveloped viruses acquire their envelope by budding through a host membrane, most commonly the plasma membrane, into which virus-encoded glycoproteins have been inserted; the lipid bilayer itself is host-derived. Viruses do not encode lipid-synthesizing enzymes and have no metabolism of their own. Peptidoglycan is a bacterial cell-wall polymer, not a lipid, and animal cells do not have one. The mitochondrial inner membrane is not a site of viral budding.',
    skill: '2B virus structure',
  },
  {
    id: 'fl1-bb-a-d06',
    section: 'bio-biochem',
    discipline: 'biochemistry',
    question:
      'An enzyme that obeys Michaelis–Menten kinetics has a $K_m$ of 10 μM. At a substrate concentration of 30 μM, the reaction velocity is what fraction of $V_{max}$?',
    options: ['0.25', '0.50', '0.75', '0.90'],
    correctAnswer: 2,
    explanation:
      'The Michaelis–Menten equation gives $v/V_{max} = [S]/(K_m + [S]) = 30/(10 + 30) = 0.75$. A value of 0.50 is the fraction reached when $[S] = K_m$, not at three times $K_m$. A value of 0.25 is the fraction of $K_m$ relative to the denominator, that is, the fraction of enzyme that is free rather than substrate-bound. A value of 0.90 would require $[S] = 9K_m$, or 90 μM.',
    skill: '1A Michaelis-Menten kinetics',
  },
  {
    id: 'fl1-bb-a-d07',
    section: 'bio-biochem',
    discipline: 'biochemistry',
    question: 'How many stereocenters are present in the open-chain form of D-fructose, a ketohexose?',
    options: ['2', '3', '4', '5'],
    correctAnswer: 1,
    explanation:
      'In open-chain fructose, C1 is a $\\text{CH}_2\\text{OH}$ group, C2 is the ketone carbon (no hydrogen, two identical-type bonds to the carbonyl), and C6 is a $\\text{CH}_2\\text{OH}$ group; only C3, C4, and C5 bear four different substituents, giving three stereocenters. Four stereocenters is the count for an aldohexose such as glucose, whose C2 is a secondary alcohol carbon. Two would omit one of the three secondary alcohol carbons. Five would count the carbonyl carbon or a terminal carbon, neither of which has four different groups.',
    skill: '1D carbohydrate stereochemistry',
  },
  {
    id: 'fl1-bb-a-d08',
    section: 'bio-biochem',
    discipline: 'physiology',
    question: 'A drug that inhibits carbonic anhydrase in the cells of the proximal tubule of the nephron would be expected to cause:',
    options: [
      'increased bicarbonate excretion and a fall in blood pH.',
      'increased bicarbonate reabsorption and a rise in blood pH.',
      'decreased urinary pH and increased hydrogen ion secretion.',
      'decreased sodium excretion together with a rise in blood pH.',
    ],
    correctAnswer: 0,
    explanation:
      'Proximal tubule cells reclaim filtered bicarbonate by secreting hydrogen ions that combine with it in the lumen to form carbonic acid; carbonic anhydrase converts that to carbon dioxide and water, which re-enter the cell and are reconverted to bicarbonate for return to the blood. Blocking the enzyme leaves bicarbonate in the tubular fluid, so it is lost in the urine and blood pH falls (a metabolic acidosis). Reabsorption is decreased, not increased. Urine becomes alkaline because of the bicarbonate it carries, and hydrogen ion secretion falls because the cell can no longer generate protons efficiently. Sodium that would have been reabsorbed with bicarbonate is also lost, so sodium excretion rises.',
    skill: '3B renal acid-base handling',
  },
]
