/**
 * MCAT Full-Length Form 3 — Biological & Biochemical Foundations, file A
 * (passages 1–5, 22 questions) + 8 discrete items.
 *
 * Built to the 2026-09-29 AAMC-alignment blueprint (Forms 3/4 topic list):
 * 400–600-word passages, a mix of experiment (chart/table) and information
 * passages, keys that cannot be found by matching passage wording, options
 * written in parallel frames of similar length, and key positions balanced
 * across the file.
 *
 * KEY INVARIANT: the passage runner does NOT shuffle options — keys were
 * authored position-balanced and explanations reference options by CONTENT.
 *
 * LaTeX renders through KaTeX; backslashes are double-escaped in these strings.
 */
import type { MCATPassage, MCATDiscreteQuestion } from '../types'

export const FL3_BIO_BIOCHEM_A_PASSAGES: MCATPassage[] = [
  // ────────────────────────────────────────────────────────────────────────
  // 1. BIOCHEMISTRY — Cysteine protease: pH/temperature profiles and a
  //    covalent active-site inactivator vs a reversible analog (exp, chart + table)
  // ────────────────────────────────────────────────────────────────────────
  {
    id: 'fl3-bb-a-01',
    section: 'bio-biochem',
    discipline: 'biochemistry',
    title: 'Catalytic Residues and Covalent Inactivation of a Parasite Protease',
    passageText:
      'Many protozoan parasites depend on cysteine proteases to degrade host proteins and to process their own. Researchers studied CP1, a cysteine protease secreted by one such parasite, as a possible drug target.\n\nIn this family of enzymes, the catalytic cysteine sits beside a histidine, and catalysis requires a specific ionization state of the pair: the cysteine must be present as a thiolate anion ($\\text{S}^-$) and the histidine as a positively charged imidazolium ion. The thiolate attacks the carbonyl carbon of the scissile peptide bond, forming a tetrahedral intermediate that collapses into a covalent acyl–enzyme as the imidazolium donates a proton to the departing amine. Water then hydrolyzes the acyl–enzyme, releasing the second product and regenerating the free enzyme. Because the folded protein strongly perturbs the pKa values of its side chains, the pH range over which this ion pair exists cannot be predicted from the free amino acids and must be measured.\n\n**Experiment 1.** Initial rates of cleavage of a fluorogenic peptide substrate were measured at 37 °C in buffers from pH 3 to pH 10 (Table 1). Enzyme held at pH 3 or at pH 10 for 10 minutes and then returned to pH 6.5 regained its full activity.\n\n**Experiment 2.** CP1 was assayed at temperatures from 20 °C to 70 °C. In parallel, aliquots of the enzyme were held for 15 minutes at each temperature, cooled, and then assayed at 37 °C (Table 2).\n\n**Experiment 3.** Two candidate inhibitors were compared. Compound V is a short peptide ending in a vinyl sulfone, an electrophilic group that can be attacked by a nucleophile to form a stable carbon–sulfur bond. Compound R has the same peptide sequence but lacks the electrophile, so it binds CP1 only through noncovalent contacts. CP1 (50 nM) was preincubated at 25 °C with buffer alone, with 1 μM V, with 1 μM V plus 500 μM S*, or with 20 μM R. S* is a substrate analog that occupies the substrate-binding cleft but cannot be cleaved; in control experiments it did not react with V. At intervals, a sample of each mixture was diluted 100-fold into assay buffer containing a saturating concentration of the fluorogenic substrate, and the initial rate was measured. Rates are expressed as a percentage of the rate of the buffer-only mixture at time zero (Figure 1). When R was present in an assay at 20 μM, it lowered the rate of CP1 by 90%.\n\nThe researchers proposed that the peptide portion of V, which resembles the preferred substrates of CP1, carries the electrophile into the active site and thereby limits reaction with the many other thiol-containing proteins of the host.',
    figure:
      '**Table 1. Initial rate of CP1 at 37 °C as a function of pH (percent of maximum)**\n\n| pH | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 |\n|----|---|---|---|---|---|---|---|----|\n| Rate (%) | 4 | 45 | 88 | 100 | 98 | 80 | 30 | 5 |\n\n**Table 2. Temperature dependence of CP1 activity**\n\n| Temperature (°C) | Rate assayed at that temperature (% of maximum) | Rate at 37 °C after 15 min at that temperature (% of unheated enzyme) |\n|------------------|------------------|------------------|\n| 20 | 30 | 100 |\n| 30 | 55 | 100 |\n| 40 | 85 | 100 |\n| 50 | 100 | 96 |\n| 60 | 45 | 38 |\n| 70 | 4 | 3 |',
    chart: {
      title: 'Figure 1. Residual CP1 activity after preincubation, measured following 100-fold dilution into substrate',
      kind: 'line',
      xLabel: 'Preincubation time',
      xUnit: 'min',
      yLabel: 'Residual activity',
      yUnit: '% of time-zero control',
      xValues: [0, 5, 10, 15, 20, 25, 30],
      yValues: [100, 99, 99, 98, 98, 97, 97],
      seriesLabel: 'Buffer only',
      comparisonSeries: [
        { label: '1 μM V', yValues: [100, 71, 50, 35, 25, 18, 12] },
        { label: '1 μM V + 500 μM S*', yValues: [100, 89, 79, 71, 63, 56, 50] },
        { label: '20 μM R', yValues: [98, 98, 97, 97, 97, 96, 96] },
      ],
      hidePointLabels: true,
    },
    questions: [
      {
        question: 'Based on the catalytic mechanism and Table 1, the near-absence of CP1 activity at pH 3 is best attributed to:',
        options: [
          'deprotonation of the histidine, leaving it no proton to donate to the leaving amine.',
          'irreversible unfolding of CP1, which destroys the geometry of the catalytic site.',
          'protonation of the cysteine, leaving no thiolate available to attack the carbonyl.',
          'protonation of the histidine, which keeps it from acting as a general base.',
        ],
        correctAnswer: 2,
        explanation:
          'Lowering the pH protonates ionizable groups, and the passage states that the cysteine must be a thiolate for activity; the steep loss of activity between pH 5 and pH 3 (half-maximal near pH 4) therefore reflects protonation of the cysteine thiol. The histidine is required in its protonated imidazolium form, so its protonation cannot cause the loss, and its deprotonation is what happens at high pH (the falling limb near pH 9), not at pH 3. Irreversible unfolding is ruled out because enzyme exposed to pH 3 regained full activity when returned to pH 6.5.',
        skill: '1A enzyme pH dependence',
      },
      {
        question: 'If the preincubation of CP1 with 1 μM V in Figure 1 were extended to 40 minutes, the residual activity would be closest to:',
        options: ['0%', '6%', '12%', '25%'],
        correctAnswer: 1,
        explanation:
          'The V curve falls by half every 10 minutes (100% → 50% at 10 min → 25% at 20 min → about 12% at 30 min), the signature of first-order inactivation by an excess of inhibitor, so one more half-time brings activity to about 6%. Zero would follow only if the loss were linear, but the amount lost in each interval shrinks as fewer active enzyme molecules remain. Twelve percent is the 30-minute value and 25% is the 20-minute value, not extrapolations to 40 minutes.',
        skill: '1A irreversible inhibition',
      },
      {
        question: 'The preincubation that contained S* in addition to V was included mainly to determine whether:',
        options: [
          'V reacts with a group that lies within the substrate-binding cleft of CP1.',
          'CP1 gradually loses activity at 25 °C when no inhibitor is present.',
          'V must first be cleaved by CP1 before it can inactivate the enzyme.',
          'diluting a sample into assay buffer stops any further reaction with V.',
        ],
        correctAnswer: 0,
        explanation:
          'S* occupies the substrate-binding cleft and does not react with V, so if V must enter that cleft to reach its target, S* should compete with it and slow inactivation, which is what Figure 1 shows (half-time lengthened from about 10 to about 30 minutes). Spontaneous loss of activity is tested by the buffer-only mixture, not by S*. Whether V must be processed by CP1 is not addressed by adding a non-cleavable analog. The effect of dilution is common to every sample and is not what distinguishes the S* condition.',
        skill: '1A active-site labeling (research design)',
      },
      {
        question: 'Single doses of V and of R that each fully inhibit CP1 are given to an infected host. The time needed for parasite protease activity to recover would depend mainly on:',
        options: [
          'clearance of the compound from the host for V, and synthesis of new CP1 for R.',
          'clearance of the compound from the host for both V and for R.',
          'synthesis of new CP1 molecules by the parasite for both V and R.',
          'synthesis of new CP1 for V, and clearance of the compound from the host for R.',
        ],
        correctAnswer: 3,
        explanation:
          'V forms a covalent carbon–sulfur bond with the enzyme, so modified CP1 molecules never regain activity even after free V has been cleared; activity returns only as the parasite makes new enzyme. R binds noncovalently, and Figure 1 shows that its inhibition vanishes once its concentration falls (after 100-fold dilution), so recovery tracks elimination of R. Reversing the two mechanisms, or assigning the same determinant to both compounds, ignores the difference between covalent and noncovalent binding shown by the dilution experiment.',
        skill: '1A reversible vs irreversible inhibition',
      },
      {
        question: 'Which conclusion about the temperature dependence of CP1 is best supported by Table 2?',
        options: [
          'Below 50 °C, activity is lost through partial unfolding, and above 50 °C through slower catalysis.',
          'Below 50 °C, the intact enzyme works more slowly, and above 50 °C the enzyme unfolds irreversibly.',
          'At every temperature except 50 °C, CP1 unfolds irreversibly during the 15-minute incubation.',
          'At every temperature, lost activity returns in full once CP1 is cooled and assayed at 37 °C.',
        ],
        correctAnswer: 1,
        explanation:
          'Enzyme held at 20–40 °C gives 100% activity when later assayed at 37 °C, so the low rates measured at those temperatures reflect slower catalysis by intact enzyme (fewer collisions with enough energy to reach the transition state). Enzyme held at 60–70 °C does not recover at 37 °C, showing irreversible unfolding. Attributing the low-temperature loss to unfolding reverses the evidence. Irreversible loss at every temperature is contradicted by the 20–40 °C recoveries, and full recovery at every temperature is contradicted by the 60 °C and 70 °C values.',
        skill: '1A enzyme temperature dependence',
      },
    ],
  },

  // ────────────────────────────────────────────────────────────────────────
  // 2. PHYSIOLOGY — Autonomic pharmacology: receptors, organ effects,
  //    baroreflex, drug classes (info)
  // ────────────────────────────────────────────────────────────────────────
  {
    id: 'fl3-bb-a-02',
    section: 'bio-biochem',
    discipline: 'physiology',
    title: 'Receptors and Drugs of the Autonomic Nervous System',
    passageText:
      'The autonomic nervous system controls smooth muscle, cardiac muscle, and glands through two-neuron pathways. A preganglionic neuron whose cell body lies in the brainstem or spinal cord synapses in a peripheral ganglion onto a postganglionic neuron, which innervates the target organ. In both the sympathetic and parasympathetic divisions, preganglionic neurons release acetylcholine (ACh), which acts on nicotinic receptors—ligand-gated cation channels—on the postganglionic cell. The adrenal medulla is a special case: its chromaffin cells are developmentally equivalent to sympathetic postganglionic neurons, receive preganglionic sympathetic fibers directly, and release epinephrine into the blood rather than across a synapse.\n\nThe divisions differ at the target. Parasympathetic postganglionic neurons release ACh onto muscarinic receptors, which are G protein–coupled. Most sympathetic postganglionic neurons release norepinephrine onto adrenergic receptors, also G protein–coupled, of several subtypes. $\\alpha_1$ receptors signal through $\\text{G}_q$ and generally contract smooth muscle, as in most arterioles and in the radial (dilator) muscle of the iris. $\\beta_1$ receptors, which signal through $\\text{G}_s$, dominate in the heart, where they speed the firing of pacemaker cells in the sinoatrial (SA) node and strengthen contraction. $\\beta_2$ receptors, also coupled to $\\text{G}_s$, relax smooth muscle in the bronchioles and in arterioles that supply skeletal muscle. The sympathetic fibers to most sweat glands are an exception to the general pattern: they release ACh onto muscarinic receptors.\n\nMany organs receive both divisions, whose effects usually oppose each other. At the SA node, muscarinic ($\\text{M}_2$) receptors open potassium channels and slow the depolarization of pacemaker cells. In the iris, parasympathetic fibers contract the circular (sphincter) muscle through muscarinic ($\\text{M}_3$) receptors and so constrict the pupil; parasympathetic fibers also contract the ciliary muscle, which is required to focus on near objects. In the bronchioles, muscarinic stimulation causes constriction and mucus secretion. Which division predominates at rest varies from organ to organ. A denervated SA node fires spontaneously at about 100 times per minute, yet the resting heart rate of a healthy adult is closer to 70 beats per minute.\n\nArterial pressure is stabilized from moment to moment by the baroreceptor reflex. Stretch receptors in the carotid sinus and aortic arch fire more rapidly when pressure rises; the brainstem responds by increasing vagal (parasympathetic) output to the heart and decreasing sympathetic output to the heart and blood vessels. A fall in pressure produces the opposite changes.\n\nDrugs acting on this system are classified by the receptor they target and by whether they activate it (agonists) or block it (antagonists). Phenylephrine is a selective $\\alpha_1$ agonist. Propranolol blocks both $\\beta_1$ and $\\beta_2$ receptors. Atropine is a muscarinic antagonist. Hexamethonium blocks the nicotinic receptors of autonomic ganglia but not those of the neuromuscular junction, which are a different subtype. Because a single drug reaches every tissue that expresses its target, many of the side effects of these agents can be predicted from a table of receptor locations.',
    questions: [
      {
        question: 'When phenylephrine is infused intravenously into a healthy volunteer, arterial pressure rises and heart rate falls. The fall in heart rate most likely results from:',
        options: [
          'increased vagal firing to the SA node, triggered by stretch of arterial receptors.',
          'direct activation of $\\alpha_1$ receptors on the pacemaker cells of the SA node.',
          'reduced secretion of epinephrine by the adrenal medulla in response to the drug.',
          'blockade of $\\beta_1$ receptors at the SA node by high concentrations of the drug.',
        ],
        correctAnswer: 0,
        explanation:
          'Phenylephrine constricts arterioles through $\\alpha_1$ receptors, raising pressure; baroreceptors sense the stretch and the brainstem increases vagal output to the SA node, where $\\text{M}_2$ receptors slow pacemaker depolarization. The passage places $\\beta_1$, not $\\alpha_1$, receptors on the heart, so a direct $\\alpha_1$ action on the node is not the mechanism. A selective $\\alpha_1$ agonist does not block $\\beta_1$ receptors. Any baroreflex decrease in adrenal output would be secondary and minor compared with the direct vagal slowing of the node.',
        skill: '3A autonomic reflexes',
      },
      {
        question: 'In a healthy adult at rest, a dose of hexamethonium large enough to block transmission in all autonomic ganglia would most likely cause the heart rate to:',
        options: [
          'fall toward zero, because the SA node cannot fire without sympathetic input.',
          'stay near 70/min, because blocking both divisions cancels their opposing effects.',
          'rise toward 100/min, because the node loses the vagal tone that dominates at rest.',
          'rise well above 100/min, because the adrenal medulla releases extra epinephrine.',
        ],
        correctAnswer: 2,
        explanation:
          'Blocking ganglia silences both divisions, leaving the SA node at its intrinsic rate of about 100/min. Since the resting rate (about 70/min) is below the intrinsic rate, parasympathetic slowing must predominate at rest, so removing both inputs raises the rate. The node fires spontaneously without any nerve input, so the rate does not approach zero. The two divisions are not balanced at rest, so the rate does not stay at 70/min. Adrenal chromaffin cells are driven through ganglionic-type nicotinic receptors, so hexamethonium reduces rather than increases epinephrine release.',
        skill: '3A autonomic tone',
      },
      {
        question: 'Before examining the retina, an ophthalmologist wants to enlarge a patient’s pupil while leaving the patient able to read nearby print. Based on the passage, which eye drop is most suitable?',
        options: [
          'Atropine, because blocking the sphincter’s receptors lets the pupil widen',
          'Propranolol, because blocking β receptors relaxes the pupillary sphincter',
          'Hexamethonium, because blocking the ganglia lets the pupil widen selectively',
          'Phenylephrine, because contracting the dilator muscle widens the pupil',
        ],
        correctAnswer: 3,
        explanation:
          'Phenylephrine activates $\\alpha_1$ receptors on the radial dilator muscle, widening the pupil while leaving the parasympathetically controlled ciliary muscle free to focus. Atropine does widen the pupil, but it also blocks the muscarinic receptors of the ciliary muscle, so near focus is lost. The pupillary sphincter is controlled through muscarinic, not β, receptors. Hexamethonium blocks all parasympathetic ganglionic transmission, including the pathway to the ciliary muscle, so it too would impair near vision.',
        skill: '3A autonomic pharmacology',
      },
      {
        question: 'During an acute stress response, which drug would most effectively reduce the rise in plasma epinephrine?',
        options: [
          'Propranolol, since it blocks the receptors through which epinephrine acts',
          'Hexamethonium, since it blocks the receptors on adrenal chromaffin cells',
          'Atropine, since it blocks the receptors on adrenal chromaffin cells',
          'Phenylephrine, since it inhibits secretion by adrenal chromaffin cells',
        ],
        correctAnswer: 1,
        explanation:
          'Chromaffin cells are stimulated by ACh from preganglionic sympathetic fibers acting on nicotinic receptors, the same type found on postganglionic neurons, so a ganglionic nicotinic blocker prevents the release of epinephrine itself. Propranolol blocks β-receptor responses to epinephrine but does not reduce the amount secreted. Atropine blocks muscarinic, not nicotinic, receptors. Phenylephrine is an $\\alpha_1$ agonist and has no direct inhibitory action on chromaffin-cell secretion.',
        skill: '3A adrenal medulla',
      },
    ],
  },

  // ────────────────────────────────────────────────────────────────────────
  // 3. GENETICS — Petal-color pathway: recessive epistasis, chi-square,
  //    test cross (exp, table)
  // ────────────────────────────────────────────────────────────────────────
  {
    id: 'fl3-bb-a-03',
    section: 'bio-biochem',
    discipline: 'genetics',
    title: 'Two Genes in a Petal Pigment Pathway',
    passageText:
      'In many flowering plants, petal pigments are made by short biosynthetic pathways in which each step is catalyzed by the product of a different gene. When two genes act in sequence in one pathway, the phenotype of an individual may reveal its genotype at one gene but not at the other. Such gene interaction, called epistasis, changes the proportions of phenotypes expected among the progeny of a dihybrid cross even when the two genes are on different chromosomes and assort independently.\n\nResearchers studying petal color in a wildflower identified two unlinked genes, *A* and *B*, each with a dominant functional allele and a recessive loss-of-function allele. Biochemical work established the following pathway:\n\ncolorless precursor → (enzyme A) → yellow intermediate → (enzyme B) → orange pigment\n\nOne functional copy of either gene supplies enough enzyme for full flux through its step, and any intermediate that accumulates is deposited in the petals.\n\n**Cross 1.** A true-breeding orange line was crossed to a true-breeding white line homozygous for the loss-of-function alleles of both genes, and 40 F1 plants were scored.\n\n**Cross 2.** F1 plants were self-pollinated, and 320 F2 plants were scored.\n\n**Cross 3.** F1 plants were crossed to the white parental line, and 200 progeny were scored.\n\nThe results are shown in Table 1.\n\nTo decide whether the F2 counts are consistent with a proposed ratio, the researchers used the chi-square goodness-of-fit test. For each phenotypic class, an expected count E is calculated from the proposed ratio and the total number of progeny, and the quantity $(O - E)^2/E$ is computed using the observed count O. The sum of these quantities over all classes is the test statistic $\\chi^2$. The number of degrees of freedom is one less than the number of phenotypic classes. If $\\chi^2$ is smaller than the critical value for the appropriate degrees of freedom, the deviation from the proposed ratio is attributed to chance and the hypothesis is not rejected. Critical values at $p = 0.05$ are 3.84 for 1 degree of freedom, 5.99 for 2, and 7.81 for 3.\n\nA chi-square test indicates only whether counts are compatible with a hypothesis. It cannot show that the hypothesis is correct, because a different model might fit the same counts equally well. The researchers therefore planned a biochemical test: cell-free extracts would be prepared from the petals of individual F2 plants, purified yellow intermediate would be added to each extract, and the mixtures would be examined for formation of orange pigment.\n\nThe researchers also pointed out that the same two-step pathway can yield different F2 ratios in related species. For example, in a species whose pathway intermediate is colorless rather than yellow, only the final pigment is visible, and the F2 of an equivalent cross contains just two phenotypic classes.',
    figure:
      '**Table 1. Petal color among progeny of three crosses**\n\n| Cross | Orange | Yellow | White | Total |\n|-------|--------|--------|-------|-------|\n| 1: orange line × white line (F1) | 40 | 0 | 0 | 40 |\n| 2: F1 × F1 (F2) | 172 | 62 | 86 | 320 |\n| 3: F1 × white line | 47 | 51 | 102 | 200 |',
    questions: [
      {
        question: 'Which statement correctly describes the interaction between genes *A* and *B* in this wildflower?',
        options: [
          'Gene *B* is epistatic to gene *A*, because *bb* plants are white whatever their *A* genotype.',
          'Genes *A* and *B* are linked, because the F2 ratio departs from the 9:3:3:1 ratio.',
          'Genes *A* and *B* show incomplete dominance, because the F2 has three phenotypes.',
          'Gene *A* is epistatic to gene *B*, because *aa* plants are white whatever their *B* genotype.',
        ],
        correctAnswer: 3,
        explanation:
          'Without enzyme A no yellow intermediate is made, so enzyme B has no substrate and an *aa* plant is white whether it carries functional *B* or not; the *A* genotype therefore masks the *B* genotype. A *bb* plant with a functional *A* allele accumulates the yellow intermediate, so *bb* plants are yellow, not white, and gene *B* does not mask gene *A*. The genes are described as unlinked, and epistasis alone explains the altered ratio. Incomplete dominance would make heterozygotes intermediate, but the F1 heterozygotes are fully orange.',
        skill: '1C epistasis',
      },
      {
        question: 'A chi-square test of the Cross 2 counts against a 9:3:4 (orange:yellow:white) hypothesis gives which result?',
        options: [
          '$\\chi^2 \\approx 0.9$ with 2 degrees of freedom; the 9:3:4 hypothesis is not rejected',
          '$\\chi^2 \\approx 0.9$ with 3 degrees of freedom; the 9:3:4 hypothesis is not rejected',
          '$\\chi^2 \\approx 104$ with 2 degrees of freedom; the 9:3:4 hypothesis is rejected',
          '$\\chi^2 \\approx 0.9$ with 2 degrees of freedom; the 9:3:4 hypothesis is proven',
        ],
        correctAnswer: 0,
        explanation:
          'Expected counts from 320 plants are 180, 60, and 80. The terms are $64/180 \\approx 0.36$, $4/60 \\approx 0.07$, and $36/80 = 0.45$, summing to about 0.9; with three classes there are 2 degrees of freedom, and 0.9 is far below 5.99, so the hypothesis is not rejected. Three degrees of freedom would apply to four classes, not three. A value of 104 comes from summing $(O - E)^2$ without dividing by E. A chi-square test can fail to reject a hypothesis but cannot prove it.',
        skill: '1C chi-square analysis',
      },
      {
        question: 'Which statement best explains the proportions of phenotypes observed in Cross 3?',
        options: [
          'The F1 makes two kinds of gametes, *AB* and *ab*, so half the progeny are orange and half are white.',
          'The white parent makes four kinds of gametes, so each phenotype appears in a quarter of the progeny.',
          'The F1 makes four kinds of gametes equally, and two of the four resulting genotypes are white.',
          'The F1 makes four kinds of gametes equally, and three of the four resulting genotypes are orange.',
        ],
        correctAnswer: 2,
        explanation:
          'With independent assortment the *AaBb* F1 makes *AB*, *Ab*, *aB*, and *ab* gametes in equal numbers; each combines with an *ab* gamete from the tester to give *AaBb* (orange), *Aabb* (yellow), *aaBb* (white), and *aabb* (white), a 1:1:2 ratio that matches 47:51:102. Two gamete types would give no yellow class, which contradicts the 51 yellow plants. The *aabb* white parent can make only *ab* gametes. Only one of the four genotypes is orange, not three.',
        skill: '1C test cross',
      },
      {
        question: 'In the related species described at the end of the passage, where the intermediate is colorless, a cross equivalent to Cross 2 would be expected to give which F2 ratio?',
        options: [
          '15 orange : 1 white',
          '9 orange : 7 white',
          '3 orange : 1 white',
          '13 orange : 3 white',
        ],
        correctAnswer: 1,
        explanation:
          'Only plants with at least one functional allele of both genes (*A_B_*, 9/16) make the final pigment; *A_bb* (3/16) now accumulates a colorless intermediate and joins *aaB_* (3/16) and *aabb* (1/16) in the white class, giving 9:7. A 15:1 ratio would arise if either gene alone could complete pigment synthesis (duplicate genes). A 3:1 ratio describes a single segregating gene. A 13:3 ratio arises when a dominant allele of one gene suppresses the other, which is not the case in a linear pathway.',
        skill: '1C epistatic ratios',
      },
      {
        question: 'In the planned biochemical test, which result obtained with extracts of F2 plants would be most inconsistent with the proposed pathway?',
        options: [
          'Extracts of orange F2 plants converted the added intermediate into orange pigment.',
          'Extracts of some white F2 plants converted the added intermediate into orange pigment.',
          'Extracts of yellow F2 plants failed to convert the added intermediate into orange pigment.',
          'Extracts of every white F2 plant failed to convert the added intermediate into orange pigment.',
        ],
        correctAnswer: 3,
        explanation:
          'White F2 plants are *aa*, but three-quarters of them (*aaBB* and *aaBb*) still carry a functional *B* allele; their extracts contain enzyme B and should convert supplied yellow intermediate to orange pigment, so a complete failure across all white plants would contradict the model. Orange plants (*A_B_*) make enzyme B, so conversion is expected. Some white extracts converting is exactly what the model predicts. Yellow plants are *A_bb* and lack enzyme B, so their failure to convert is expected.',
        skill: '1C gene–enzyme relationships (research design)',
      },
    ],
  },

  // ────────────────────────────────────────────────────────────────────────
  // 4. CELL BIOLOGY — Cytoskeleton & motor proteins (info)
  // ────────────────────────────────────────────────────────────────────────
  {
    id: 'fl3-bb-a-04',
    section: 'bio-biochem',
    discipline: 'cell biology',
    title: 'Filaments and Motors of the Cytoskeleton',
    passageText:
      'Eukaryotic cells are organized by three classes of protein filaments. Microtubules are hollow tubes about 25 nm in diameter, built from heterodimers of α- and β-tubulin that add head to tail, so that every microtubule has a structural polarity: a fast-growing plus end and a slow-growing minus end. In most animal cells, the minus ends are anchored in the centrosome near the nucleus, and the plus ends extend toward the cell periphery. Tubulin dimers bind GTP, and the GTP on β-tubulin is hydrolyzed shortly after a dimer is incorporated. A plus end capped by GTP-bound dimers tends to keep growing, but if hydrolysis catches up with addition, the end loses its cap and the microtubule rapidly shrinks. This alternation between growth and sudden shortening, called dynamic instability, lets microtubules explore the cytoplasm and reorganize quickly, for example into the mitotic spindle that separates chromosomes.\n\nActin filaments (microfilaments), about 7 nm in diameter, are thinner, two-stranded polymers of ATP-binding subunits and are also polar. A network of actin beneath the plasma membrane determines cell shape. At the leading edge of a crawling cell, such as a neutrophil migrating toward a site of infection, rapid actin polymerization pushes the membrane forward into a thin sheet called a lamellipodium, while myosin II pulls on actin at the rear to retract the cell body. During cytokinesis, a contractile ring of actin and myosin II tightens around the equator of the dividing cell and pinches it in two.\n\nIntermediate filaments, about 10 nm in diameter, have no polarity, bind no nucleotide, and do not serve as tracks for motor proteins. Their subunits are tissue specific—keratins in epithelia, neurofilaments in neurons—and nuclear lamins form a meshwork lining the inner nuclear membrane. Their ropelike structure, anchored at cell–cell junctions, lets tissues withstand mechanical stretching.\n\nMotor proteins convert the energy of ATP hydrolysis into directed movement along filaments. Myosins move along actin. Kinesins and dyneins move along microtubules; most kinesins walk toward the plus end, whereas cytoplasmic dynein walks toward the minus end. In a neuron, whose axon may be a meter long, the axonal microtubules are arranged with their plus ends pointing toward the axon terminal, and motor-driven transport carries vesicles, mitochondria, and signaling complexes in both directions along the axon.\n\nMotile cilia and flagella are built on an axoneme of nine outer microtubule doublets surrounding a central pair. Dynein arms attached to each doublet walk along the neighboring doublet; because the doublets are linked to one another, this sliding is converted into bending. Motile cilia line the airways, where they sweep a layer of mucus and trapped particles toward the pharynx, and they line the oviducts; the sperm tail is a flagellum. During embryonic development, motile cilia in a small pit on the embryo’s surface generate a leftward flow of fluid that helps establish the left–right asymmetry of the heart and other internal organs.',
    questions: [
      {
        question: 'A drug that selectively inhibits the ATPase activity of cytoplasmic dynein is applied to cultured neurons. Which change in axonal transport would most likely be observed?',
        options: [
          'Cargo headed for the terminal would pile up in the axon close to the cell body.',
          'Cargo headed for the cell body would pile up in the axon close to the terminal.',
          'Cargo headed in either direction would pile up near the middle of the axon.',
          'Cargo headed for the cell body would pile up in the axon close to the cell body.',
        ],
        correctAnswer: 1,
        explanation:
          'Axonal plus ends point toward the terminal, so dynein, a minus-end motor, carries cargo from the terminal back toward the cell body; when it stalls, that retrograde cargo is stranded where it was picked up, in the distal axon. Cargo moving toward the terminal is carried by plus-end-directed kinesins, which the drug does not inhibit. There is no reason for cargo of both directions to collect at the axon midpoint. Retrograde cargo cannot reach the region near the cell body if the motor that carries it there is inactive.',
        skill: '2A motor proteins',
      },
      {
        question: 'A child has an inherited defect in the dynein arms of the axoneme. Each of the following could result from this defect EXCEPT:',
        options: [
          'weakness of skeletal muscle contraction.',
          'repeated bacterial infections of the airways.',
          'infertility caused by immotile sperm, if male.',
          'a heart located on the right side of the chest.',
        ],
        correctAnswer: 0,
        explanation:
          'Skeletal muscle contraction depends on myosin II pulling on actin, not on axonemal dynein, so it would be unaffected. Airway cilia that cannot beat fail to clear mucus and bacteria, producing recurrent infections. Sperm flagella use the same axonemal dynein, so sperm would be immotile. Without the leftward ciliary flow in the embryo, left–right placement of organs is randomized, so some affected children have a reversed (right-sided) heart.',
        skill: '2A cilia and flagella',
      },
      {
        question: 'Cytochalasin D binds the growing ends of actin filaments and prevents further polymerization. Dividing cells treated with it during mitosis, and neutrophils treated with it near a source of bacterial chemoattractant, would most likely:',
        options: [
          'fail to separate their chromosomes, and migrate normally toward the bacteria.',
          'fail to separate their chromosomes, and fail to migrate toward the bacteria.',
          'separate their chromosomes but not divide, and fail to migrate toward the bacteria.',
          'separate their chromosomes but not divide, and migrate normally toward the bacteria.',
        ],
        correctAnswer: 2,
        explanation:
          'Chromosome separation is performed by the microtubule-based spindle, which cytochalasin does not affect, but cytokinesis requires the actin–myosin contractile ring, so treated cells complete mitosis and remain binucleate. Neutrophil crawling depends on actin polymerization at the leading edge, so migration also fails. Options in which chromosome separation fails attribute a microtubule function to actin, and normal migration ignores the actin-driven lamellipodium.',
        skill: '2A actin cytoskeleton',
      },
      {
        question: 'A mutation that prevents keratin subunits in the basal cells of the epidermis from assembling into normal filaments would most likely cause:',
        options: [
          'failure of epidermal cells to divide, because their mitotic spindles cannot form.',
          'failure of epidermal cells to secrete, because vesicles lose their transport tracks.',
          'failure of epidermal cells to crawl into wounds, because lamellipodia cannot form.',
          'blistering of skin after mild friction, because epidermal cells tear under strain.',
        ],
        correctAnswer: 3,
        explanation:
          'Keratins are the intermediate filaments of epithelia, whose role is mechanical: without a normal keratin network, basal epidermal cells rupture when the skin is rubbed, and the layers separate into blisters. Mitotic spindles are made of microtubules, not keratin. Intermediate filaments do not serve as tracks for motor proteins, so vesicle transport would not depend on them. Lamellipodia are driven by actin polymerization.',
        skill: '2A intermediate filaments',
      },
    ],
  },

  // ────────────────────────────────────────────────────────────────────────
  // 5. PHYSIOLOGY — Spirometry: obstructive vs restrictive patterns,
  //    compliance, bronchodilator reversibility, exercise ventilation (exp, table)
  // ────────────────────────────────────────────────────────────────────────
  {
    id: 'fl3-bb-a-05',
    section: 'bio-biochem',
    discipline: 'physiology',
    title: 'Spirometry in Obstructive and Restrictive Lung Disease',
    passageText:
      'Spirometry measures the volume of air a person can move into and out of the lungs. After inhaling as deeply as possible, to total lung capacity (TLC), the subject exhales as forcefully and completely as possible. The total volume exhaled is the forced vital capacity (FVC), and the volume exhaled during the first second is the forced expiratory volume in one second ($\\text{FEV}_1$). Air that remains in the lungs after a complete exhalation is the residual volume (RV). Because RV cannot be exhaled, RV and TLC must be measured by other methods, such as dilution of an inhaled inert gas.\n\nTwo mechanical properties govern these volumes. Lung compliance is the change in lung volume produced by a given change in distending pressure. Elastic recoil, the tendency of stretched lung tissue to return to its resting size, drives passive expiration; it also pulls outward on the walls of the small airways, which lack cartilage, and helps hold them open. During a forced exhalation, pressure outside the airways rises, and airways that have lost this outward traction can collapse before the lungs have emptied.\n\nLung diseases are broadly grouped by their spirometric pattern. In obstructive diseases, airflow is limited by narrowed or collapsing airways, so that $\\text{FEV}_1$ falls proportionally more than FVC. In restrictive diseases, the lungs or chest wall cannot expand fully, so that TLC and FVC are reduced while airflow relative to lung size is preserved. A ratio of $\\text{FEV}_1$ to FVC below 0.70 is conventionally taken as evidence of obstruction.\n\nA pulmonary clinic studied four adult volunteers of similar height, age, and sex. Subject 1 was healthy. Subject 2 had pulmonary fibrosis, in which fibrous scar tissue thickens and stiffens the walls of the alveoli. Subject 3 had emphysema, in which the alveolar walls and their elastic fibers are progressively destroyed. Subject 4 had asthma, in which inflamed bronchial smooth muscle constricts in response to triggers. Subject 4 was tested before and 15 minutes after inhaling a bronchodilator, and the clinic attributed the change between the two tests to relaxation of airway smooth muscle. The results are shown in Table 1.\n\nVentilation was also measured in Subjects 1 and 2 during 5 minutes of steady cycling at the same moderate workload. Minute ventilation, the product of tidal volume and breathing frequency, was 30 L/min in both subjects. Subject 1 breathed 20 times per minute, whereas Subject 2 breathed 40 times per minute. The anatomic dead space, the volume of the conducting airways in which inspired air never reaches the alveoli, was 0.15 L in each subject. Only the portion of each breath that reaches the alveoli takes part in gas exchange.\n\nThe clinic noted that the forced maneuver depends on the subject’s effort and technique, and that subjects often improve slightly with practice when the test is repeated.',
    figure:
      '**Table 1. Lung volumes and spirometry (liters)**\n\n| Subject | TLC | RV | FVC | $\\text{FEV}_1$ |\n|---------|-----|----|-----|------|\n| 1 (healthy) | 6.0 | 1.5 | 4.5 | 3.6 |\n| 2 (pulmonary fibrosis) | 3.8 | 1.1 | 2.7 | 2.4 |\n| 3 (emphysema) | 7.5 | 3.9 | 3.6 | 1.4 |\n| 4 (asthma), before bronchodilator | 6.3 | 2.1 | 4.2 | 2.5 |\n| 4 (asthma), after bronchodilator | 6.1 | 1.6 | 4.5 | 3.4 |',
    questions: [
      {
        question: 'Which of the measurements in Table 1 meet the passage’s criterion for airway obstruction?',
        options: [
          'Those of Subject 3 only',
          'Those of Subjects 2 and 3 only',
          'Those of Subject 3 and of Subject 4 before treatment only',
          'Those of Subjects 2 and 3 and of Subject 4 before treatment',
        ],
        correctAnswer: 2,
        explanation:
          'The $\\text{FEV}_1$/FVC ratios are 3.6/4.5 = 0.80 for Subject 1, 2.4/2.7 ≈ 0.89 for Subject 2, 1.4/3.6 ≈ 0.39 for Subject 3, 2.5/4.2 ≈ 0.60 for Subject 4 before the bronchodilator, and 3.4/4.5 ≈ 0.76 afterward. Only Subject 3 and pretreatment Subject 4 fall below 0.70. Subject 2 has a low absolute $\\text{FEV}_1$, but the ratio is high, the restrictive pattern. Listing Subject 3 alone overlooks the pretreatment asthma measurement.',
        skill: '3B spirometry (data interpretation)',
      },
      {
        question: 'Compared with Subject 1, the lungs of Subject 3 most likely have:',
        options: [
          'higher compliance and weaker recoil, so small airways collapse early in forced expiration.',
          'lower compliance and stronger recoil, so small airways collapse early in forced expiration.',
          'higher compliance and stronger recoil, so alveoli empty too quickly for the air to be measured.',
          'lower compliance and weaker recoil, so the chest wall cannot expand fully during inspiration.',
        ],
        correctAnswer: 0,
        explanation:
          'Destruction of alveolar walls and elastic fibers makes the lungs easier to inflate (higher compliance) and removes elastic recoil, so the outward pull on cartilage-free airways is lost and they collapse during forced exhalation, trapping air; this accounts for the high RV and TLC in Table 1. Stiffer lungs with stronger recoil describe fibrosis, whose recoil holds airways open. Rapid emptying would raise, not lower, the $\\text{FEV}_1$/FVC ratio. Impaired chest-wall expansion is a restrictive feature and would reduce, not increase, TLC.',
        skill: '3B lung compliance',
      },
      {
        question: 'During the cycling test, the alveolar ventilation of Subject 2 was:',
        options: [
          'about the same as that of Subject 1, because both moved 30 L of air per minute.',
          'about 3 L/min higher than that of Subject 1, because Subject 2 breathed twice as often.',
          'about 6 L/min lower than that of Subject 1, because Subject 2 ventilated only dead space.',
          'about 3 L/min lower than that of Subject 1, because more of each breath filled dead space.',
        ],
        correctAnswer: 3,
        explanation:
          'Tidal volume is minute ventilation divided by frequency: 1.5 L for Subject 1 and 0.75 L for Subject 2. Alveolar ventilation is (tidal volume − dead space) × frequency: (1.5 − 0.15) × 20 = 27 L/min versus (0.75 − 0.15) × 40 = 24 L/min, so Subject 2 is about 3 L/min lower because a larger fraction of each shallow breath stays in the conducting airways. Equal minute ventilation does not mean equal alveolar ventilation. A faster rate lowers alveolar ventilation when tidal volume falls in proportion. The 6 L/min figure is Subject 2’s dead-space ventilation (0.15 × 40), not the difference between subjects.',
        skill: '3B alveolar ventilation',
      },
      {
        question: 'The clinic’s conclusion that Subject 4’s improvement reflected relaxation of airway smooth muscle would be most strengthened by evidence that:',
        options: [
          'Subject 1’s $\\text{FEV}_1$ did not change after inhaling the same bronchodilator.',
          'Subject 4’s $\\text{FEV}_1$ did not change when the test was repeated after a sham inhaler.',
          'Subject 3’s $\\text{FEV}_1$ improved less than Subject 4’s after the same bronchodilator.',
          'Subject 4’s TLC was nearly the same before and after inhaling the bronchodilator.',
        ],
        correctAnswer: 1,
        explanation:
          'Because the forced maneuver improves with practice, a second test could be better simply because it was repeated; showing no change after a sham inhaler under the same schedule rules out that alternative and isolates the drug’s effect in the same subject. A healthy subject’s response says nothing about why Subject 4 improved. A smaller response in emphysema supports a difference between diseases but does not exclude a practice effect in Subject 4. An unchanged TLC is irrelevant to whether the airflow change was caused by the drug.',
        skill: '3B respiratory physiology (research design)',
      },
    ],
  },
]

export const FL3_BIO_BIOCHEM_A_DISCRETES: MCATDiscreteQuestion[] = [
  {
    id: 'fl3-bb-a-d01',
    section: 'bio-biochem',
    discipline: 'physiology',
    question: 'Secretin, released when acidic chyme enters the duodenum, stimulates pancreatic duct cells to secrete bicarbonate. In a patient whose duct cells cannot secrete bicarbonate, which consequence is most likely?',
    options: [
      'Increased gastric acid output, because secretin directly stimulates parietal cells',
      'Reduced protein digestion in the stomach, because pepsinogen is not activated',
      'Reduced fat digestion, because pancreatic lipase works poorly at the low duodenal pH',
      'Increased fat absorption, because bile salts are more soluble in an acidic duodenum',
    ],
    correctAnswer: 2,
    explanation:
      'Pancreatic enzymes such as lipase have pH optima near neutrality; without bicarbonate to neutralize gastric acid, the duodenum stays acidic, lipase is inhibited, and fat is poorly digested. Secretin inhibits rather than stimulates gastric acid secretion. Pepsinogen is activated by gastric acid in the stomach, upstream of any pancreatic defect. Bile salts become less soluble and less effective at low pH, which would worsen, not improve, fat absorption.',
    skill: '3B digestion',
  },
  {
    id: 'fl3-bb-a-d02',
    section: 'bio-biochem',
    discipline: 'physiology',
    question: 'Loop diuretics inhibit the $\\text{Na}^+$–$\\text{K}^+$–2$\\text{Cl}^-$ cotransporter of the thick ascending limb of the loop of Henle. Even when ADH levels are high, a patient taking a loop diuretic cannot produce highly concentrated urine, mainly because:',
    options: [
      'the medullary interstitium becomes less hypertonic, so less water leaves the collecting duct.',
      'the collecting duct loses its aquaporin channels when NaCl is no longer being reabsorbed.',
      'the descending limb becomes impermeable to water, so the filtrate never concentrates in the loop.',
      'the glomerular filtration rate rises sharply, so tubular flow exceeds the reabsorptive capacity.',
    ],
    correctAnswer: 0,
    explanation:
      'The thick ascending limb pumps NaCl into the medullary interstitium without letting water follow, and this is the step that builds the countercurrent gradient; blocking it dissipates the gradient, so even ADH-opened aquaporins in the collecting duct have little osmotic driving force for water reabsorption. Aquaporin insertion is controlled by ADH, not by NaCl transport in the loop. The descending limb’s water permeability is not changed by the drug. Loop diuretics do not markedly raise GFR.',
    skill: '3B renal concentrating mechanism',
  },
  {
    id: 'fl3-bb-a-d03',
    section: 'bio-biochem',
    discipline: 'physiology',
    question: 'When a dark-adapted rod photoreceptor absorbs light, which sequence of events follows?',
    options: [
      'cGMP rises, cation channels open, the rod depolarizes, and glutamate release increases',
      'cGMP falls, cation channels close, the rod depolarizes, and glutamate release increases',
      'cGMP rises, cation channels close, the rod hyperpolarizes, and glutamate release decreases',
      'cGMP falls, cation channels close, the rod hyperpolarizes, and glutamate release decreases',
    ],
    correctAnswer: 3,
    explanation:
      'Light isomerizes retinal in rhodopsin, which activates transducin and then a phosphodiesterase that hydrolyzes cGMP; the falling cGMP closes cGMP-gated cation channels, the rod hyperpolarizes, and its tonic release of glutamate decreases. Rising cGMP with open channels describes the rod in darkness. Closing cation channels removes an inward current and cannot depolarize the cell. cGMP must fall, not rise, for the channels to close.',
    skill: '3A phototransduction',
  },
  {
    id: 'fl3-bb-a-d04',
    section: 'bio-biochem',
    discipline: 'genetics',
    question: 'A rare myopathy appears across four generations of a large family. Which pedigree pattern would most strongly support mitochondrial inheritance?',
    options: [
      'Affected fathers pass the trait to all of their daughters and to none of their sons.',
      'Affected mothers have affected children of both sexes; affected fathers have none.',
      'Only males are affected, and they inherit the trait through unaffected mothers.',
      'Each child of an affected parent, of either sex, has a one-half chance of being affected.',
    ],
    correctAnswer: 1,
    explanation:
      'Mitochondria are transmitted through the egg cytoplasm, so affected mothers can pass the trait to sons and daughters, while affected fathers do not transmit it. Transmission from fathers to all daughters and no sons indicates X-linked dominant inheritance. Affected males with unaffected carrier mothers indicate X-linked recessive inheritance. A one-half risk from either parent indicates autosomal dominant inheritance.',
    skill: '1C mitochondrial inheritance',
  },
  {
    id: 'fl3-bb-a-d05',
    section: 'bio-biochem',
    discipline: 'molecular biology',
    question: 'E. coli cells are grown with lactose as the only sugar. Which mutation would prevent expression of the lac operon structural genes under these conditions?',
    options: [
      'A lacI mutation so the repressor cannot bind allolactose',
      'A lacI deletion that removes the repressor protein altogether',
      'An operator mutation that keeps the repressor from binding DNA',
      'A mutation that keeps adenylyl cyclase active despite glucose',
    ],
    correctAnswer: 0,
    explanation:
      'Allolactose normally binds the repressor and releases it from the operator; a repressor that cannot bind the inducer stays on the operator even when lactose is present, so the operon is uninducible. Deleting the repressor or altering the operator so the repressor cannot bind both cause constitutive expression. Keeping adenylyl cyclase active raises cAMP and promotes CAP-dependent transcription, which would, if anything, increase expression.',
    skill: '1B operon regulation',
  },
  {
    id: 'fl3-bb-a-d06',
    section: 'bio-biochem',
    discipline: 'biochemistry',
    question: 'Proline is rarely found in the middle of an α-helix but is common in turns between strands. Which property of proline best explains this distribution?',
    options: [
      'Its side chain is charged at physiological pH and repels nearby residues.',
      'Its side chain forms a disulfide bond that bends the peptide backbone.',
      'Its backbone nitrogen, bound in a ring, has no hydrogen to donate.',
      'Its very small side chain makes the backbone too flexible to hold a helix.',
    ],
    correctAnswer: 2,
    explanation:
      'Proline’s side chain loops back to bond its own backbone nitrogen, so the amide has no N–H to form the i → i+4 hydrogen bond of the helix, and the ring fixes the backbone angle in a way that kinks the chain; both features suit turns. Proline’s side chain is a nonpolar hydrocarbon and is uncharged. Disulfide bonds form between cysteines, not prolines. Excess flexibility from a tiny side chain describes glycine, the other common helix breaker.',
    skill: '1A protein secondary structure',
  },
  {
    id: 'fl3-bb-a-d07',
    section: 'bio-biochem',
    discipline: 'biochemistry',
    question: 'After several weeks of starvation, the brain obtains much of its energy from ketone bodies instead of glucose. The main physiological benefit of this shift is that it:',
    options: [
      'lets the brain oxidize the fatty acids that the liver can no longer use as fuel.',
      'raises the brain’s ATP yield per carbon, because ketone bodies bypass acetyl-CoA.',
      'prevents ketoacidosis, because the brain uses ketones faster than the liver makes them.',
      'reduces the breakdown of muscle protein needed to supply carbon for gluconeogenesis.',
    ],
    correctAnswer: 3,
    explanation:
      'Glucose in prolonged starvation must come from gluconeogenesis, whose main carbon source is amino acids from muscle protein; when the brain switches largely to ketone bodies, its glucose demand falls and body protein is spared. Ketone bodies are made by the liver from fatty acids that it is actively oxidizing, and the brain uses the ketone bodies, not the fatty acids themselves. Ketone bodies are converted to acetyl-CoA in brain mitochondria rather than bypassing it. Ketone levels still rise during starvation, so their use by the brain does not outpace production.',
    skill: '1D ketone bodies',
  },
  {
    id: 'fl3-bb-a-d08',
    section: 'bio-biochem',
    discipline: 'cell biology',
    question: 'Crossing over between genes on the same chromosome normally takes place:',
    options: [
      'in prophase I, between non-sister chromatids of paired homologous chromosomes.',
      'in prophase II, between the sister chromatids of a single replicated chromosome.',
      'in metaphase I, after the homologous chromosome pairs have separated from each other.',
      'in S phase, between the two newly made DNA strands within each replicating chromosome.',
    ],
    correctAnswer: 0,
    explanation:
      'During prophase I, homologous chromosomes pair (synapsis) and exchange segments between non-sister chromatids at chiasmata, creating recombinant chromatids. Sister chromatids are identical, so exchanges between them would not recombine alleles, and homologs are no longer paired in meiosis II. Homologs do not separate until anaphase I, after metaphase I. DNA replication does not exchange material between homologs.',
    skill: '2C meiosis',
  },
]
