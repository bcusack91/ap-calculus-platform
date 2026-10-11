/**
 * MCAT Full-Length Form 5 — Biological & Biochemical Foundations, file A
 * (passages 1–5, 22 questions) + 8 discrete items.
 *
 * Built to the AAMC-alignment blueprint (BLUEPRINT-F56): 400–600-word
 * passages, a mix of experiment (chart/table) and information passages, keys
 * that cannot be found by matching passage wording, options written in
 * parallel frames of similar length, and key positions balanced across the file.
 *
 * KEY INVARIANT: the passage runner does NOT shuffle options — keys were
 * authored position-balanced and explanations reference options by CONTENT.
 *
 * LaTeX renders through KaTeX; backslashes are double-escaped in these strings.
 */
import type { MCATPassage, MCATDiscreteQuestion } from '../types'

export const FL5_BIO_BIOCHEM_A_PASSAGES: MCATPassage[] = [
  // ────────────────────────────────────────────────────────────────────────
  // 1. BIOCHEMISTRY (exp, chart) — isozymes: hexokinase I vs glucokinase,
  //    hyperbolic vs sigmoidal saturation, product inhibition by G6P,
  //    tissue roles, β-cell glucose sensing, initial-rate design
  // ────────────────────────────────────────────────────────────────────────
  {
    id: 'fl5-bb-a-01',
    section: 'bio-biochem',
    discipline: 'biochemistry',
    title: 'Two Isozymes That Phosphorylate Glucose',
    passageText:
      'Every cell that uses glucose first phosphorylates it to glucose 6-phosphate (G6P), a step that traps the sugar inside the cell and commits it to glycolysis, glycogen synthesis, or the pentose phosphate pathway. Mammals possess four hexokinase isozymes: enzymes that catalyze the same reaction but are encoded by separate genes and differ in kinetic and regulatory properties. Hexokinases I, II, and III occur in most tissues; hexokinase I predominates in brain and hexokinase II in skeletal muscle. Hexokinase IV, usually called glucokinase, is expressed almost exclusively in hepatocytes and in the insulin-secreting β cells of the pancreatic islets. The liver receives blood directly from the intestine through the portal vein, so after a carbohydrate-rich meal hepatocytes are exposed to glucose concentrations that may reach 10–15 mM, well above the 4–5 mM typical of peripheral blood between meals. Transcription of the glucokinase gene in liver is induced by insulin, whereas the hexokinase I gene is expressed at a constant level.\n\nResearchers purified hexokinase I from rat brain and glucokinase from rat liver and compared their kinetics. Each enzyme was incubated at 37 °C with saturating ATP and Mg²⁺ and with glucose at concentrations between 0 and 17.5 mM. The initial rate of ADP formation was followed with a coupled assay in which ADP drives the oxidation of NADH, monitored as a decrease in absorbance at 340 nm; every rate was taken from the earliest, linear portion of the trace, when only a trace of the glucose had been consumed. Rates for each enzyme were expressed as a percentage of that enzyme’s maximal velocity in the absence of any added metabolite. A parallel series was run in the presence of 0.1 mM G6P. For glucokinase, the series obtained with G6P superimposed on the series obtained without it and is not plotted separately. The results appear in Figure 1.\n\nThe investigators observed that the two enzymes differ not only in their sensitivity to glucose but in the shape of their saturation curves, and that the glucokinase data could not be fit by the Michaelis–Menten equation, which assumes that binding at one site is independent of the occupancy of any other. They proposed that the properties of the isozymes match the roles of the tissues that express them. Brain depends on a steady supply of glucose whether its blood concentration is high or low. The liver, in contrast, should take up and store glucose only when it is abundant and should release glucose rather than consume it when it is scarce. In β cells, the rate at which glucose is phosphorylated sets the rate of glycolysis and the resulting rise in the ATP:ADP ratio, which closes an ATP-sensitive K⁺ channel, depolarizes the cell, and triggers insulin release; the enzyme that controls the first step therefore functions as the cell’s glucose sensor. The investigators noted finally that in intact hepatocytes glucokinase is subject to an additional layer of control that the purified system cannot reproduce: a regulatory protein binds the enzyme and holds it in the nucleus when glucose is low.',
    chart: {
      title: 'Figure 1. Initial rate of glucose phosphorylation by purified hexokinase I and glucokinase, each expressed as a percentage of that enzyme’s maximal rate in the absence of added metabolites',
      kind: 'line',
      xLabel: 'Glucose concentration',
      xUnit: 'mM',
      yLabel: 'Rate',
      yUnit: '% of maximal',
      xValues: [0, 2.5, 5, 7.5, 10, 12.5, 15, 17.5],
      yValues: [0, 96, 98, 99, 99, 99, 99, 99],
      seriesLabel: 'Hexokinase I',
      comparisonSeries: [
        { label: 'Hexokinase I + 0.1 mM G6P', yValues: [0, 48, 49, 50, 50, 50, 50, 50] },
        { label: 'Glucokinase', yValues: [0, 12, 31, 47, 59, 68, 74, 79] },
      ],
    },
    questions: [
      {
        question: 'Based on Figure 1, the glucose concentration at which glucokinase operates at half its maximal rate is closest to:',
        options: ['0.5 mM', '4 mM', '8 mM', '16 mM'],
        correctAnswer: 2,
        explanation:
          'The glucokinase curve passes through 47% of maximal at 7.5 mM and 59% at 10 mM, so half-maximal activity falls at roughly 8 mM, within the range of portal glucose after a meal. A value near 0.5 mM would describe an enzyme that is almost saturated at the lowest concentrations plotted, which fits hexokinase I rather than glucokinase. At 4 mM glucokinase is running at only about a quarter of its maximum, and at 16 mM it is well above three-quarters.',
        optionExplanations: [
          'A half-maximal point near 0.5 mM would describe an enzyme almost saturated at the lowest concentrations plotted, which is the behavior of hexokinase I (96% at 2.5 mM), not glucokinase, which is at only 12% at 2.5 mM.',
          'At 4 mM glucokinase is running at only about a quarter of its maximum (12% at 2.5 mM, 31% at 5 mM); half-maximal activity requires roughly twice this concentration.',
          'The glucokinase curve passes through 47% of maximal at 7.5 mM and 59% at 10 mM, so half-maximal activity falls at roughly 8 mM, squarely within the range of portal glucose after a meal.',
          'At 16 mM glucokinase is already well above three-quarters of maximal (74% at 15 mM, 79% at 17.5 mM); half-maximal activity was passed at about 8 mM.',
        ],
        skill: '1A enzyme kinetics',
      },
      {
        question: 'According to Figure 1, when the glucose concentration rises from 5 mM to 10 mM, as it does in portal blood after a meal, the rates of glucose phosphorylation by the two enzymes change by approximately what factors?',
        options: [
          'Hexokinase I: 2-fold increase; glucokinase: 2-fold increase',
          'Hexokinase I: no appreciable change; glucokinase: 2-fold increase',
          'Hexokinase I: no appreciable change; glucokinase: 4-fold increase',
          'Hexokinase I: 2-fold increase; glucokinase: no appreciable change',
        ],
        correctAnswer: 1,
        explanation:
          'Reading the figure, glucokinase rises from about 31% to about 59% of maximal, a factor of roughly 1.9, whereas hexokinase I is already at 98–99% of maximal at 5 mM and cannot increase further. A 2-fold rise for hexokinase I is impossible for an enzyme that is already saturated. A 4-fold rise overstates the glucokinase change; the curve is sigmoidal, but a doubling of substrate does not quadruple the rate of an enzyme already a third of the way to saturation. The option assigning no change to glucokinase reverses the behavior of the two enzymes.',
        optionExplanations: [
          'A 2-fold rise for hexokinase I is impossible: the figure shows it at 98% of maximal at 5 mM, so there is essentially no capacity left for the rate to increase when glucose doubles.',
          'Glucokinase rises from about 31% to about 59% of maximal between 5 and 10 mM, a factor of roughly 1.9, whereas hexokinase I is already at 98–99% at 5 mM and cannot increase appreciably.',
          'A 4-fold rise overstates the glucokinase change: the curve goes from 31% to 59%, about a doubling. Although the curve is sigmoidal, an enzyme already a third of the way to saturation does not quadruple its rate when substrate doubles.',
          'This reverses the two enzymes: it is hexokinase I that shows no appreciable change, because it is saturated, while glucokinase roughly doubles its rate across this concentration range.',
        ],
        skill: '1A enzyme kinetics',
      },
      {
        question: 'The effect of G6P on hexokinase I shown in Figure 1 indicates that the inhibition:',
        options: [
          'is relieved at high glucose concentrations, indicating that G6P and glucose compete for the same site.',
          'is relieved at high glucose concentrations, indicating that G6P binds only after glucose has bound.',
          'is not relieved at high glucose concentrations, indicating that G6P competes with ATP rather than with glucose.',
          'is not relieved at high glucose concentrations, indicating that G6P acts at a site distinct from the glucose-binding site.',
        ],
        correctAnswer: 3,
        explanation:
          'In the presence of G6P, hexokinase I plateaus at about half its uninhibited maximal rate, and the plateau persists from 2.5 mM to 17.5 mM glucose; an inhibitor that competed with glucose for the active site would be displaced as glucose rose, and the two curves would converge at high glucose. Because the curves never converge, G6P must bind at a site other than the glucose site and lower the maximal rate. The two options that describe relief at high glucose contradict the data. Competition with ATP is excluded because ATP was held at a saturating concentration, which would overcome an inhibitor competing at the ATP site.',
        optionExplanations: [
          'The figure shows no relief: the hexokinase I + G6P curve stays at about 50% from 2.5 mM through 17.5 mM glucose. An inhibitor competing for the glucose site would be displaced as glucose rose, and the curves would converge.',
          'The data show the inhibition persisting at every glucose concentration, so there is no relief to explain; an inhibitor that bound only after glucose would become more effective at high glucose, not less, which is also not what the figure shows.',
          'The inhibition is indeed not relieved, but competition with ATP is excluded because ATP was held at a saturating concentration throughout, which would have overcome any inhibitor competing at the ATP site.',
          'In the presence of G6P, hexokinase I plateaus at about half its uninhibited maximal rate from 2.5 mM to 17.5 mM glucose; because raising glucose never overcomes the inhibition, G6P must bind at a site distinct from the glucose site and lower the maximal rate.',
        ],
        skill: '1A enzyme regulation',
      },
      {
        question: 'A person inherits one nonfunctional glucokinase allele, so that β cells contain about half the normal amount of active glucokinase. Compared with a person with two normal alleles, this person would most likely:',
        options: [
          'begin secreting insulin only at a higher-than-normal blood glucose concentration, so that fasting glucose is mildly elevated.',
          'begin secreting insulin at a lower-than-normal blood glucose concentration, so that fasting glucose is mildly reduced between meals.',
          'secrete insulin normally, because hexokinase I in the β cells phosphorylates glucose at the same rate as glucokinase.',
          'secrete insulin continuously, because the β cells can no longer detect the glucose concentration at all.',
        ],
        correctAnswer: 0,
        explanation:
          'The passage establishes that glucose phosphorylation sets the rate of glycolysis and ATP production in β cells, and Figure 1 shows that glucokinase activity rises steeply across the physiological glucose range. With half the enzyme, any given glucose concentration produces about half the phosphorylation rate, so the glucose concentration needed to raise ATP enough to trigger insulin release is shifted upward; insulin is still released, but only once glucose exceeds a higher threshold, and fasting glucose settles at a higher set point. Secretion at a lower glucose concentration would require more, not less, enzyme activity. Hexokinase I cannot substitute as a sensor, because it is saturated at all physiological glucose concentrations and so cannot report changes in them. Half the normal glucokinase still responds to glucose, so secretion is neither continuous nor glucose-blind.',
        optionExplanations: [
          'The passage establishes that glucose phosphorylation sets glycolytic rate and ATP production in β cells, and Figure 1 shows glucokinase activity rising steeply across physiological glucose. With half the enzyme, a higher glucose concentration is needed to raise ATP enough to trigger insulin, so the threshold and fasting glucose shift upward.',
          'Secretion at a lower glucose concentration would require more glucokinase activity, not less; halving the enzyme halves the phosphorylation rate at any given glucose level, so the threshold moves up, not down.',
          'Hexokinase I cannot substitute as a glucose sensor, because Figure 1 shows it saturated at all physiological glucose concentrations; an enzyme that runs at 98% of maximal at 5 mM cannot report whether glucose has risen to 10 mM.',
          'Half the normal glucokinase still responds to glucose across the physiological range, so the β cells are neither glucose-blind nor driven to secrete continuously; the sensor is shifted, not abolished.',
        ],
        skill: '1A enzyme kinetics in physiology',
      },
      {
        question: 'Which feature of the assay design was most important for obtaining valid initial rates for hexokinase I in the series without added G6P?',
        options: [
          'Expressing each rate as a percentage of the maximal rate, so that differences in enzyme amount between tubes did not distort the curve.',
          'Keeping ATP at a saturating concentration, so that the glucose concentration could not change during the measurement.',
          'Stopping each assay before much glucose had been consumed, so that G6P formed during the reaction did not depress the rate.',
          'Monitoring NADH at 340 nm, so that G6P formed during the reaction was removed as soon as it appeared.',
        ],
        correctAnswer: 2,
        explanation:
          'Figure 1 shows that hexokinase I is strongly inhibited by its own product, so if an assay were allowed to run until appreciable G6P had accumulated, the measured rate would fall below the true initial rate and the uninhibited curve would be contaminated by product inhibition; using only the earliest portion of each trace keeps the product negligible. Normalizing to the maximal rate helps compare the two enzymes but does nothing to protect an individual rate from product inhibition. Saturating ATP ensures that ATP is not limiting, but it has no bearing on how much glucose is consumed. The coupled assay consumes ADP, not G6P, so the product of interest accumulates regardless of how the reaction is monitored.',
        optionExplanations: [
          'Normalizing each rate to the maximal rate makes the two enzymes comparable on one plot, but it does nothing to protect an individual rate measurement from being depressed by product that accumulates during the assay.',
          'Saturating ATP ensures that ATP is not limiting, but it has no bearing on how much glucose is consumed or how much G6P accumulates during the measurement; glucose is consumed regardless of the ATP level.',
          'Figure 1 shows that hexokinase I is strongly inhibited by its own product G6P, so an assay allowed to run until appreciable G6P accumulated would report a rate below the true initial rate; using only the earliest, linear portion of each trace keeps the product negligible.',
          'The coupled assay consumes ADP to drive NADH oxidation; it does not remove G6P, which accumulates regardless of how the reaction is monitored, so the detection method does not protect against product inhibition.',
        ],
        skill: '1A research design',
      },
    ],
  },

  // ────────────────────────────────────────────────────────────────────────
  // 2. PHYSIOLOGY (info) — the adrenal gland: cortex zones and medulla, HPA
  //    axis and feedback, aldosterone control by RAAS/K+, Cushing vs
  //    Addison patterns, glucocorticoid withdrawal, ganglionic input
  // ────────────────────────────────────────────────────────────────────────
  {
    id: 'fl5-bb-a-02',
    section: 'bio-biochem',
    discipline: 'physiology',
    title: 'The Adrenal Gland: Two Tissues, Three Classes of Hormone',
    passageText:
      'Each adrenal gland consists of two tissues of different embryonic origin that function as separate endocrine organs. The outer cortex, derived from mesoderm, synthesizes steroid hormones from cholesterol and is arranged in three zones: a thin outer zona glomerulosa that produces the mineralocorticoid aldosterone, a thick middle zona fasciculata that produces the glucocorticoid cortisol, and an inner zona reticularis that produces weak androgens. The inner medulla is derived from the neural crest and is in effect a sympathetic ganglion whose neurons have lost their axons. Its chromaffin cells are innervated directly by preganglionic sympathetic fibers, which release acetylcholine onto nicotinic receptors on the chromaffin cell surface, and they respond by secreting catecholamines into the blood, about four parts epinephrine to one part norepinephrine. Blood passes through the cortex before it reaches the medulla, so medullary cells are exposed to cortisol at concentrations far higher than those in systemic blood; this cortisol induces the enzyme that methylates norepinephrine to form epinephrine.\n\nCortisol secretion is governed by the hypothalamic–pituitary–adrenal (HPA) axis. Hypothalamic neurons release corticotropin-releasing hormone (CRH) into the portal vessels supplying the anterior pituitary, where it stimulates corticotroph cells to secrete adrenocorticotropic hormone (ACTH). ACTH binds a G-protein-coupled receptor on fasciculata cells and stimulates both the immediate conversion of cholesterol to steroid and, over days to weeks, the growth and maintenance of the zone itself. Cortisol, a lipophilic steroid carried in plasma largely bound to a binding globulin, diffuses into target cells and binds an intracellular receptor that regulates transcription. Its actions include stimulation of hepatic gluconeogenesis; breakdown of muscle protein and adipose triglyceride to supply gluconeogenic precursors; antagonism of insulin in peripheral tissues; suppression of inflammatory and immune responses; and a permissive effect without which catecholamines cannot fully constrict blood vessels. Cortisol inhibits the release of both CRH and ACTH, closing a negative-feedback loop. Secretion follows a daily rhythm that peaks shortly before waking, and physical or psychological stress overrides the rhythm by driving CRH release.\n\nAldosterone secretion is controlled differently. The principal stimuli are angiotensin II, generated when the kidney releases renin in response to reduced renal perfusion or reduced sodium delivery to the distal tubule, and a rise in plasma potassium, which acts directly on glomerulosa cells. ACTH has only a minor and transient effect on the zona glomerulosa. Aldosterone acts on the distal nephron to increase sodium reabsorption, with water following osmotically, and to increase the secretion of potassium and hydrogen ions into the urine.\n\nDisorders of the axis produce characteristic patterns. Chronic excess of cortisol, called Cushing syndrome, causes central deposition of fat, wasting of limb muscle, thinning of the skin, elevated blood glucose, hypertension, and susceptibility to infection. It may arise from a pituitary tumor that secretes ACTH, from an adrenal tumor that secretes cortisol independently of ACTH, or from prolonged treatment with a synthetic glucocorticoid, which binds the cortisol receptor in every tissue, including the hypothalamus and pituitary. Deficiency may be primary, from destruction of the cortex itself (Addison disease), or secondary, from failure of the pituitary to secrete ACTH. In primary disease the pituitary, released from feedback, secretes large amounts of ACTH together with other fragments of the precursor protein from which ACTH is cut, and one of these fragments stimulates melanocytes, so that the skin darkens.',
    questions: [
      {
        question: 'A patient has a persistently elevated plasma cortisol concentration together with a plasma ACTH concentration well below the reference range. Which source of the excess cortisol is most consistent with these findings?',
        options: [
          'A tumor of the hypothalamus that secretes CRH',
          'A tumor of the adrenal cortex that secretes cortisol autonomously',
          'A tumor of the anterior pituitary corticotrophs that secretes ACTH',
          'Destruction of the adrenal cortex with loss of feedback',
        ],
        correctAnswer: 1,
        explanation:
          'Cortisol produced by an adrenal tumor is not under ACTH control, and the high cortisol feeds back on the hypothalamus and pituitary to suppress CRH and ACTH, so ACTH falls while cortisol stays high. A CRH-secreting or an ACTH-secreting tumor would drive cortisol up only by raising ACTH, so ACTH would be high rather than low. Destruction of the cortex lowers cortisol and, with feedback removed, raises ACTH, the opposite of both findings.',
        optionExplanations: [
          'A CRH-secreting tumor would drive cortisol up only by raising ACTH, so ACTH would be high, not well below the reference range as in this patient.',
          'Cortisol from an adrenal tumor is not under ACTH control, and the high cortisol feeds back on the hypothalamus and pituitary to suppress CRH and ACTH; the result is high cortisol with low ACTH, exactly the pattern observed.',
          'An ACTH-secreting pituitary tumor produces Cushing syndrome with elevated ACTH, since the tumor is the source of the excess ACTH; this patient’s ACTH is low, which rules out a pituitary source.',
          'Destruction of the adrenal cortex lowers cortisol and, with feedback removed, raises ACTH; this is the opposite of both findings in the patient.',
        ],
        skill: '3B endocrine feedback',
      },
      {
        question: 'Which laboratory finding would be expected in a patient whose adrenal cortex has been destroyed but NOT in a patient whose anterior pituitary has stopped secreting ACTH?',
        options: [
          'A plasma cortisol concentration below the reference range',
          'A tendency toward hypoglycemia during fasting',
          'An exaggerated inflammatory response to minor injury',
          'An elevated plasma potassium concentration',
        ],
        correctAnswer: 3,
        explanation:
          'Destruction of the whole cortex removes aldosterone as well as cortisol; without aldosterone the distal nephron secretes less K⁺, so plasma K⁺ rises (and plasma Na⁺ falls). Loss of ACTH alone removes cortisol but leaves aldosterone secretion largely intact, because the glomerulosa is driven mainly by angiotensin II and plasma K⁺ rather than by ACTH. Low cortisol, fasting hypoglycemia from reduced gluconeogenesis, and loss of cortisol’s restraint on inflammation occur in both conditions and so do not distinguish them.',
        optionExplanations: [
          'Low cortisol occurs in both conditions: the destroyed cortex cannot make it, and without ACTH the intact fasciculata is not stimulated to make it, so this finding does not distinguish primary from secondary deficiency.',
          'Fasting hypoglycemia from reduced gluconeogenesis follows from cortisol deficiency, which is present in both primary and secondary disease, so it is not a distinguishing finding.',
          'Loss of cortisol’s restraint on inflammation occurs whenever cortisol is low, whether the cause is cortical destruction or absent ACTH, so an exaggerated inflammatory response does not separate the two.',
          'Destroying the whole cortex removes aldosterone as well as cortisol; without aldosterone the distal nephron secretes less K⁺ and plasma K⁺ rises. Loss of ACTH alone leaves aldosterone largely intact, because the glomerulosa is driven mainly by angiotensin II and plasma K⁺.',
        ],
        skill: '3B adrenal physiology',
      },
      {
        question: 'A patient who has taken a high dose of a synthetic glucocorticoid daily for six months stops the drug abruptly. During the following days, which hormonal state is most likely?',
        options: [
          'Low cortisol and low ACTH, with a zona fasciculata that responds poorly to ACTH',
          'High cortisol and high ACTH, because the removal of feedback inhibition stimulates both',
          'Low cortisol and high ACTH, with a zona fasciculata that responds normally to ACTH',
          'Normal cortisol and normal ACTH, because the medulla compensates by releasing catecholamines',
        ],
        correctAnswer: 0,
        explanation:
          'The synthetic glucocorticoid acted on the same feedback pathway as cortisol, suppressing CRH and ACTH for months; without ACTH’s trophic stimulation the zona fasciculata shrank, and when the drug is withdrawn the suppressed axis recovers slowly, so both ACTH and endogenous cortisol are low and the atrophied cortex cannot respond fully even to ACTH that is given. Feedback inhibition is lifted when the drug stops, but a suppressed hypothalamus and pituitary take days to weeks to resume normal output, so ACTH does not surge. Low cortisol with high ACTH describes primary adrenal failure with an intact pituitary, not a suppressed axis. Catecholamines from the medulla cannot replace the metabolic and permissive actions of cortisol and do not restore cortisol levels.',
        optionExplanations: [
          'The synthetic glucocorticoid suppressed CRH and ACTH for months, and without ACTH’s trophic stimulation the zona fasciculata atrophied; when the drug stops, the suppressed axis recovers slowly, so both ACTH and cortisol are low and the shrunken cortex responds poorly even to administered ACTH.',
          'Feedback inhibition is lifted when the drug stops, but a hypothalamus and pituitary suppressed for six months take days to weeks to resume output, so ACTH does not surge; and with an atrophied cortex, cortisol could not be high in any case.',
          'Low cortisol with high ACTH describes primary adrenal failure with an intact, responsive pituitary; here the pituitary itself has been suppressed, so ACTH is low, and the atrophied fasciculata would not respond normally.',
          'Catecholamines from the medulla cannot replace the metabolic and permissive actions of cortisol and do not restore cortisol levels; the medulla also depends on cortisol for epinephrine synthesis, so it is not a compensating system.',
        ],
        skill: '3B endocrine feedback',
      },
      {
        question: 'A drug that blocks nicotinic acetylcholine receptors at autonomic ganglia would be expected to affect the adrenal gland by:',
        options: [
          'preventing aldosterone secretion in response to a fall in blood pressure.',
          'preventing cortisol secretion in response to circulating ACTH.',
          'reducing the release of epinephrine in response to stress.',
          'reducing the conversion of norepinephrine to epinephrine in the medulla.',
        ],
        correctAnswer: 2,
        explanation:
          'The chromaffin cells of the medulla are stimulated by acetylcholine released from preganglionic sympathetic fibers onto nicotinic receptors, exactly the receptors a ganglionic blocker occupies, so stressful stimuli would no longer provoke catecholamine release. Aldosterone secretion is driven hormonally, by angiotensin II and potassium, not by neuronal input to the gland, so blocking ganglionic receptors does not prevent it (a fall in renal perfusion still releases renin). ACTH acts through its own G-protein-coupled receptor on fasciculata cells. The conversion of norepinephrine to epinephrine depends on a cortisol-induced enzyme, not on nicotinic receptor signaling.',
        optionExplanations: [
          'Aldosterone secretion is driven hormonally by angiotensin II and plasma K⁺, not by neuronal input to the gland; a fall in blood pressure still releases renin, so ganglionic blockade does not prevent the aldosterone response.',
          'ACTH acts through its own G-protein-coupled receptor on fasciculata cells, a hormonal pathway that does not involve nicotinic receptors; cortisol secretion in response to circulating ACTH is unaffected by a ganglionic blocker.',
          'Chromaffin cells of the medulla are stimulated by acetylcholine released from preganglionic sympathetic fibers onto nicotinic receptors, exactly the receptors a ganglionic blocker occupies, so stressful stimuli would no longer provoke epinephrine release.',
          'Conversion of norepinephrine to epinephrine depends on a methylating enzyme induced by cortisol reaching the medulla from the cortex; it does not depend on nicotinic receptor signaling, so a ganglionic blocker would not reduce it.',
        ],
        skill: '3A/3B autonomic control of the adrenal medulla',
      },
    ],
  },

  // ────────────────────────────────────────────────────────────────────────
  // 3. GENETICS (exp, table) — sex determination and X-inactivation: clonal
  //    analysis of a heterozygote, Barr-body/XIST/dosage data across
  //    karyotypes, skewed inactivation in a manifesting carrier, XIST in cis
  // ────────────────────────────────────────────────────────────────────────
  {
    id: 'fl5-bb-a-03',
    section: 'bio-biochem',
    discipline: 'genetics',
    title: 'Clonal Analysis of X-Chromosome Inactivation in Human Cells',
    passageText:
      'In mammals the Y chromosome determines sex: a gene on its short arm directs the indifferent gonad to become a testis, and testicular hormones then masculinize the remainder of the body. One consequence of this system is that females carry two X chromosomes while males carry one, yet most X-linked genes are expressed at equal levels in the two sexes. Dosage compensation is achieved by X-inactivation, proposed by Mary Lyon in 1961: early in female embryonic development, when the embryo consists of a few hundred cells, each cell silences one of its two X chromosomes, chosen at random, and the silenced chromosome condenses into a dense body at the nuclear periphery, the Barr body, that can be seen in interphase nuclei. Inactivation is initiated by a long noncoding RNA, XIST, transcribed only from the chromosome that is to be silenced; the RNA spreads along that chromosome, remaining bound to it, and recruits proteins that compact its chromatin and methylate its DNA. Once established, the inactive state is maintained by these chromatin modifications. The classic illustration is the tortoiseshell cat, in which an X-linked gene has alleles for orange and black fur: a heterozygous female shows patches of each color, each patch descending from a single embryonic cell, and the size of the patches reflects how early in development the choice was made. In the female germ line the inactive X is reactivated before meiosis, so that every egg carries a fully active X.\n\nTo examine the properties of inactivation, researchers obtained skin fibroblasts from a woman heterozygous for two common alleles of an X-linked gene whose product, an enzyme, occurs as two forms, E-1 and E-2, that migrate differently during gel electrophoresis. They grew the cells as a mass culture and also diluted them so that single cells could be isolated and expanded into clones. Each clone was expanded through about 20 doublings, and extracts of the mass culture and of 30 clones were subjected to electrophoresis and stained for enzyme activity (Table 1). The researchers also examined cultured cells from individuals of several chromosome constitutions, counting Barr bodies in 100 interphase nuclei from each, testing for XIST RNA, and measuring the activity of the same enzyme per cell relative to the activity in cells from a 46,XY male (Table 2).\n\nFinally, the researchers studied a second woman who, like her brother, had a disorder caused by a recessive mutation in a different X-linked gene. Her mother was an unaffected carrier of the mutation, and her father was unaffected. Clones of this woman’s fibroblasts were tested for expression of the normal and mutant alleles of the gene: 27 of 30 clones expressed only the mutant allele, and the remaining 3 expressed only the normal allele.',
    figure:
      '**Table 1. Enzyme forms detected by electrophoresis of fibroblast extracts from the heterozygous woman**\n\n| Sample | E-1 only | E-2 only | Both E-1 and E-2 |\n|---|---|---|---|\n| Mass culture (1 extract) | 0 | 0 | 1 |\n| Single-cell clones (30 extracts) | 16 | 14 | 0 |\n\n**Table 2. Barr bodies, XIST RNA, and enzyme activity in cultured cells of different chromosome constitutions**\n\n| Chromosome constitution | Barr bodies per nucleus (most common number) | XIST RNA detected | Enzyme activity per cell (relative to 46,XY) |\n|---|---|---|---|\n| 46,XY | 0 | No | 1.0 |\n| 46,XX | 1 | Yes | 1.0 |\n| 45,X | 0 | No | 1.0 |\n| 47,XXX | 2 | Yes | 1.0 |',
    questions: [
      {
        question: 'Which conclusion is best supported by the results in Table 1?',
        options: [
          'Each cell expresses only one of the two alleles, and daughter cells retain the choice made by the parent cell.',
          'Each cell expresses both alleles, but at a level too low to detect in the extract of a single clone.',
          'Each cell expresses only one allele, and the choice is made afresh at each cell division.',
          'Each clone descended from a cell that had lost one of its X chromosomes during culture.',
        ],
        correctAnswer: 0,
        explanation:
          'The mass culture contains both forms, so both alleles are expressed in the population, but every clone contains exactly one form. A clone is the mitotic progeny of a single cell, so each founding cell expressed only one allele and all of its descendants expressed the same one; the choice is therefore stable through cell division, and the near-equal split between E-1 and E-2 clones is what random choice predicts. If both alleles were expressed at low levels, clones would still show both forms, since the stain detects activity and a clone contains millions of cells. If the choice were remade at each division, every clone would come to contain cells of both types and would show both forms. Loss of an X chromosome in every one of 30 founding cells is implausible, and Table 2 shows that cells with a single active X have the same activity as cells with two X chromosomes, so the clone pattern needs no chromosome loss to explain it.',
        optionExplanations: [
          'The mass culture contains both forms while every one of 30 clones contains exactly one, and a clone is the mitotic progeny of a single cell; each founding cell therefore expressed only one allele and all its descendants kept that same choice, with the 16:14 split matching random choice.',
          'If both alleles were expressed at low levels, each clone, which contains millions of cells after 20 doublings, would still show both forms on an activity stain; the complete absence of the second form in every clone rules this out.',
          'If the choice were remade at each division, every clone would soon contain cells expressing each allele and would show both forms, as the mass culture does; the clones instead show only one form each.',
          'Loss of an X chromosome in every one of 30 founding cells is implausible, and Table 2 shows that cells with one active X have the same enzyme activity as cells with two X chromosomes, so the clone pattern needs no chromosome loss to explain it.',
        ],
        skill: '1C X-inactivation',
      },
      {
        question: 'Based on the pattern in Table 2, cultured cells from an individual with a 48,XXXX chromosome constitution would be expected to show:',
        options: [
          '1 Barr body; XIST RNA detected; relative enzyme activity 1.0',
          '3 Barr bodies; XIST RNA detected; relative enzyme activity 4.0',
          '3 Barr bodies; XIST RNA not detected; relative enzyme activity 1.0',
          '3 Barr bodies; XIST RNA detected; relative enzyme activity 1.0',
        ],
        correctAnswer: 3,
        explanation:
          'In every constitution in Table 2 the enzyme activity per cell equals that of a male cell, so exactly one X remains active regardless of how many are present, and the number of Barr bodies equals the number of X chromosomes minus one. A cell with four X chromosomes would therefore inactivate three (three Barr bodies), transcribe XIST from each inactivated chromosome, and have the same activity as any other cell. Four-fold activity would require all four chromosomes to stay active, contradicting the constant activity across the table. One Barr body would leave three X chromosomes active, and absent XIST would mean that no chromosome had been inactivated.',
        optionExplanations: [
          'One Barr body would leave three X chromosomes active, but Table 2 shows that every constitution keeps exactly one X active regardless of how many are present; a 48,XXXX cell would need three Barr bodies.',
          'Four-fold activity would require all four X chromosomes to remain active, contradicting the constant relative activity of 1.0 across every row of Table 2; dosage compensation leaves one active X in each cell.',
          'Three Barr bodies is correct, but XIST RNA is transcribed from every inactivated chromosome, as the 46,XX and 47,XXX rows show; absent XIST would mean no chromosome had been inactivated, which contradicts the three Barr bodies.',
          'In every constitution in Table 2 enzyme activity per cell equals the male value, so exactly one X stays active and the Barr body count is the number of X chromosomes minus one; a 48,XXXX cell would inactivate three, transcribe XIST from each, and show relative activity of 1.0.',
        ],
        skill: '1C dosage compensation',
      },
      {
        question: 'Which of the following best explains why the second woman has the disorder?',
        options: [
          'She inherited a mutant allele from each of her parents and is therefore homozygous for the mutation in every cell.',
          'By chance, the X chromosome carrying the normal allele was inactivated in most of her early embryonic cells.',
          'The mutation is dominant when carried by females and recessive when carried by males.',
          'Her cells inactivated both X chromosomes in the tissues affected by the disorder.',
        ],
        correctAnswer: 1,
        explanation:
          'The clone data show that 3 of 30 clones express the normal allele, so she carries it and is heterozygous; her father, who is unaffected, could not have transmitted a mutant X in any case. Because inactivation is random and occurs when the embryo contains only a few hundred cells, a heterozygote can by chance inactivate the chromosome carrying the normal allele in a large majority of cells, leaving too little normal product in the relevant tissues, which is what 27 of 30 clones indicate. A dominant mutation would affect every heterozygous female and would not produce a 9:1 skew in allele expression. A cell with both X chromosomes inactivated would lack all X-linked gene products and could not survive.',
        optionExplanations: [
          'The clone data show 3 of 30 clones expressing the normal allele, so she carries it and is heterozygous, not homozygous; moreover her unaffected father could not have transmitted a mutant X.',
          'Inactivation is random and occurs when the embryo has only a few hundred cells, so a heterozygote can by chance silence the chromosome carrying the normal allele in most cells; 27 of 30 clones expressing only the mutant allele shows exactly this skew, leaving too little normal product.',
          'A dominant mutation would affect every heterozygous female, including her carrier mother, who is unaffected; it also would not produce the 9:1 skew in allele expression seen in her clones.',
          'A cell with both X chromosomes inactivated would lack all X-linked gene products and could not survive; Table 2 shows that one X always remains active, and 3 of her clones express the normal allele, so both chromosomes are not silenced.',
        ],
        skill: '1C sex-linked inheritance',
      },
      {
        question: 'Suppose a female embryo carries a deletion of the XIST gene on the X chromosome that bears the E-1 allele. Clones of fibroblasts from this individual would be expected to express:',
        options: [
          'E-1 only, in every clone',
          'E-2 only, in every clone examined',
          'E-1 only in about half the clones and E-2 only in the other half',
          'both E-1 and E-2, in every clone',
        ],
        correctAnswer: 0,
        explanation:
          'XIST is transcribed only from the chromosome that will be silenced and acts on that same chromosome. An X lacking XIST cannot be inactivated, so in every cell the other X, which carries E-2, is the one silenced, and every clone expresses E-1 alone. Expression of E-2 alone would require silencing the chromosome that lacks the means to silence itself. The half-and-half pattern is the result of random choice, which the deletion abolishes. Both forms in every clone would require two active X chromosomes, which the dosage-compensation data show does not occur.',
        optionExplanations: [
          'XIST is transcribed only from the chromosome to be silenced and acts in cis on that same chromosome; an X lacking XIST cannot be inactivated, so in every cell the other X, carrying E-2, is silenced, and every clone expresses E-1 alone.',
          'Expression of E-2 alone would require silencing the E-1 chromosome, which lacks the XIST gene needed to silence itself; that chromosome must remain active in every cell.',
          'The half-and-half pattern results from random choice between two chromosomes that can each be inactivated; the XIST deletion removes that choice, because only the E-2 chromosome retains the ability to be silenced.',
          'Both forms in every clone would require two active X chromosomes in each cell, which the dosage-compensation data in Table 2 show does not occur; one chromosome, the one with intact XIST, is still inactivated.',
        ],
        skill: '1C gene regulation / X-inactivation',
      },
      {
        question: 'To determine whether the choice of which X chromosome to inactivate is random with respect to the parental origin of the chromosome, the researchers would additionally need to:',
        options: [
          'count the Barr bodies in each of the 30 clones.',
          'measure the enzyme activity per cell in the mass culture.',
          'determine which of the two enzyme alleles the woman inherited from each parent.',
          'repeat the electrophoresis on clones that have been grown for a larger number of generations.',
        ],
        correctAnswer: 2,
        explanation:
          'The clones show which allele is active in each cell, but randomness with respect to parental origin can be assessed only if one knows which allele came from the mother and which from the father, for example by typing the parents’ enzyme forms; the 16:14 split can then be compared with the 1:1 expectation. Counting Barr bodies would show one per nucleus in every clone and reveal nothing about which chromosome was silenced. Longer culture tests the stability of the choice rather than its origin. The mass culture pools all cells and cannot reveal a parental bias beyond what the clones already show.',
        optionExplanations: [
          'Every clone would show one Barr body per nucleus, since each cell has one inactive X; counting them reveals nothing about which of the two chromosomes, maternal or paternal, was the one silenced.',
          'The mass culture pools all cells and shows both forms; measuring its activity cannot reveal whether the active allele is maternal or paternal in any individual cell, nor a parental bias beyond what the clones already show.',
          'The clones show which allele is active in each cell, but randomness with respect to parental origin can be assessed only if one knows which allele came from the mother and which from the father, for example by typing the parents; the 16:14 split can then be compared with the 1:1 expectation.',
          'Longer culture tests whether the choice remains stable through more divisions; it addresses maintenance of inactivation, not whether the original choice was biased toward the maternal or paternal chromosome.',
        ],
        skill: '1C research design',
      },
    ],
  },

  // ────────────────────────────────────────────────────────────────────────
  // 4. CELL BIOLOGY (info) — signaling modes (endocrine/paracrine/autocrine/
  //    juxtacrine), ligand-gated channels, receptor tyrosine kinases and
  //    termination, PLC → IP3/Ca2+ and DAG/PKC, steroid receptors
  // ────────────────────────────────────────────────────────────────────────
  {
    id: 'fl5-bb-a-04',
    section: 'bio-biochem',
    discipline: 'cell biology',
    title: 'Modes of Intercellular Signaling and Three Receptor Families',
    passageText:
      'Cells communicate by secreting molecules that bind receptors on or in other cells, and the modes of signaling are classified by the distance the signal travels. In endocrine signaling, a hormone released into the blood acts on distant tissues, and its concentration at the target is set by the rates of secretion, distribution in the circulation, and clearance by the liver and kidney. In paracrine signaling, the molecule diffuses through extracellular fluid to neighboring cells and is kept local by rapid degradation, uptake, or binding to the extracellular matrix; growth factors released at a wound and neurotransmitters at a synapse are examples. In autocrine signaling, a cell responds to a molecule it has itself secreted, a mode used by activated T lymphocytes, which secrete a growth factor and display its receptor, and by many tumors. Signaling molecules that remain attached to the surface of the signaling cell act only on cells in direct contact, which is termed juxtacrine signaling.\n\nThe nature of the receptor determines the speed and character of the response. Ligand-gated ion channels are transmembrane proteins whose pore opens within a millisecond of neurotransmitter binding, changing the membrane potential of the target cell directly; the nicotinic acetylcholine receptor of the neuromuscular junction, which admits Na⁺ and K⁺, is the prototype. The response ends as quickly as it begins, when the ligand dissociates or is destroyed by an extracellular enzyme.\n\nReceptor tyrosine kinases (RTKs), which bind insulin and most growth factors, are single-pass transmembrane proteins with an extracellular ligand-binding domain and a cytoplasmic kinase domain. Ligand binding brings two receptor molecules together, and each kinase domain phosphorylates tyrosine residues on the cytoplasmic tail of its partner; a receptor does not phosphorylate its own tail. The phosphotyrosines then serve as docking sites for intracellular proteins that recognize them through specialized binding domains. The proteins recruited in this way include adaptor proteins that activate the small GTPase Ras, a lipid kinase that generates membrane phosphoinositides, and a phospholipase. Ras in turn triggers a cascade of serine/threonine protein kinases, the MAP kinase cascade, that ultimately phosphorylates transcription factors and alters gene expression over hours. Signaling is terminated by protein tyrosine phosphatases that remove the phosphates, by hydrolysis of GTP bound to Ras, and by endocytosis and degradation of ligand-bound receptors, which also reduces the number of receptors available for later stimulation.\n\nMany receptors, including some RTKs and a large family of G-protein-coupled receptors, activate phospholipase C, which cleaves the membrane phospholipid phosphatidylinositol 4,5-bisphosphate into two second messengers. Inositol 1,4,5-trisphosphate (IP₃) is water soluble and diffuses to the endoplasmic reticulum, where it opens Ca²⁺ channels, raising cytosolic Ca²⁺ from about 100 nM to several micromolar within seconds; the Ca²⁺ binds calmodulin and other Ca²⁺-sensing proteins that regulate enzymes, channels, and contractile machinery. Diacylglycerol remains in the membrane and, together with Ca²⁺, activates protein kinase C. Cytosolic Ca²⁺ is then returned to its resting level by pumps in the ER and plasma membranes.\n\nHydrophobic signals such as steroid hormones follow a different route: they cross the plasma membrane and bind receptors in the cytosol or nucleus that act directly as transcription factors, so their effects develop slowly and persist as long as the proteins they induce.',
    questions: [
      {
        question: 'Compared with cells that express only the normal receptor, cells that also express a mutant RTK lacking the kinase domain but retaining normal extracellular and transmembrane domains would respond to the growth factor with:',
        options: [
          'a stronger response, because the mutant receptors bind ligand and present it to normal receptors.',
          'an unchanged response, because each normal receptor phosphorylates its own cytoplasmic tail.',
          'a weaker response, because the mutant receptors are degraded along with the ligand they bind.',
          'a weaker response, because receptor pairs containing a mutant partner cannot complete phosphorylation of both tails.',
        ],
        correctAnswer: 3,
        explanation:
          'Activation requires that each member of a ligand-induced pair phosphorylate its partner’s tail. A mutant with a normal extracellular domain pairs readily with normal receptors, but a pair containing one mutant has only one kinase domain: the normal partner can phosphorylate the mutant, which cannot reciprocate, so the normal receptor’s own tail stays unphosphorylated and the pair fails to signal. The mutant thereby disables a share of the normal receptors. Binding ligand and presenting it would not enhance signaling, since ligand is not limiting when it is added experimentally. Each receptor phosphorylates its partner rather than itself, so normal receptors are not independent of their pairing partner. Degradation of ligand-bound receptors is a termination mechanism, not the reason a kinase-dead partner weakens the response.',
        optionExplanations: [
          'Ligand is not limiting when added experimentally, so mutant receptors binding and presenting it would not enhance signaling; and a mutant partner in a pair actually prevents, rather than promotes, activation of the normal receptor.',
          'Each receptor phosphorylates its partner’s tail, not its own, as the passage states; a normal receptor paired with a kinase-dead mutant therefore cannot have its own tail phosphorylated, so the response is not unchanged.',
          'Degradation of ligand-bound receptors is a termination mechanism that operates on normal receptors too; it is not the reason a kinase-dead partner weakens the response, which lies in failed trans-phosphorylation.',
          'Activation requires each member of a ligand-induced pair to phosphorylate its partner. A pair containing one kinase-dead mutant has only one kinase domain: the normal partner phosphorylates the mutant, which cannot reciprocate, so the normal receptor’s tail stays unphosphorylated and the pair fails to signal, disabling a share of normal receptors.',
        ],
        skill: '2A receptor tyrosine kinases',
      },
      {
        question: 'A hormone added to cells in Ca²⁺-free medium still produces a brief rise in cytosolic Ca²⁺, but no rise occurs if the cells are first treated with a drug that blocks IP₃ receptors. These results indicate that the hormone’s initial Ca²⁺ signal:',
        options: [
          'comes from the extracellular fluid rather than from stores in the endoplasmic reticulum.',
          'comes from the endoplasmic reticulum rather than from the extracellular fluid.',
          'requires diacylglycerol produced by phospholipase C but does not require IP₃.',
          'is produced by the opening of a ligand-gated Ca²⁺ channel in the plasma membrane of the cell.',
        ],
        correctAnswer: 1,
        explanation:
          'Removing extracellular Ca²⁺ does not prevent the initial rise, so the ions must come from an intracellular store; blocking the IP₃ receptor abolishes it, identifying that store as the endoplasmic reticulum, whose Ca²⁺ channels IP₃ opens. If the Ca²⁺ came from outside, the Ca²⁺-free medium would have abolished the response. Diacylglycerol activates protein kinase C and does not release Ca²⁺, and the effect of the IP₃ receptor blocker shows that IP₃ is required. A plasma membrane channel could not supply Ca²⁺ from a medium that contains none.',
        optionExplanations: [
          'If the Ca²⁺ came from the extracellular fluid, removing extracellular Ca²⁺ would have abolished the initial rise; the fact that the rise persists in Ca²⁺-free medium shows the source is intracellular.',
          'The initial rise persists without extracellular Ca²⁺, so the ions come from an intracellular store, and blocking the IP₃ receptor abolishes it, identifying that store as the endoplasmic reticulum whose Ca²⁺ channels IP₃ opens.',
          'Diacylglycerol stays in the membrane and activates protein kinase C; it does not release Ca²⁺. The loss of the signal when IP₃ receptors are blocked shows that IP₃ is required, not dispensable.',
          'A plasma membrane channel cannot supply Ca²⁺ from a medium that contains none; the persistence of the rise in Ca²⁺-free medium rules out any entry pathway across the plasma membrane as the initial source.',
        ],
        skill: '2A second messengers',
      },
      {
        question: 'Which observation would most strongly indicate that a secreted factor acts in a paracrine rather than an endocrine manner?',
        options: [
          'The factor is undetectable in blood, yet cells adjacent to the secreting cells respond to it.',
          'The factor is a small protein that is synthesized and secreted within minutes of stimulation.',
          'The factor’s receptor is a receptor tyrosine kinase rather than a ligand-gated channel.',
          'The factor is released in bursts rather than continuously by the secreting cells.',
        ],
        correctAnswer: 0,
        explanation:
          'Paracrine signals act on nearby cells and are kept local, so a factor that never reaches an appreciable concentration in blood yet elicits responses in neighboring cells is acting through the extracellular fluid rather than through the circulation. Protein hormones such as insulin are endocrine, so chemical class and speed of synthesis do not settle the question. Receptor tyrosine kinases bind endocrine ligands (insulin) as well as paracrine ones (growth factors). Many endocrine hormones, including cortisol and insulin, are also released in bursts.',
        optionExplanations: [
          'Paracrine signals act on nearby cells and are kept local by degradation, uptake, or matrix binding; a factor undetectable in blood yet effective on adjacent cells is reaching its targets through extracellular fluid rather than the circulation.',
          'Protein hormones such as insulin are endocrine, and rapid synthesis and secretion is not a property that separates the two modes; chemical class and speed of production do not indicate how far the signal travels.',
          'Receptor tyrosine kinases bind endocrine ligands such as insulin as well as paracrine ligands such as growth factors, so the receptor family does not reveal the mode of signaling.',
          'Many endocrine hormones, including cortisol with its daily rhythm and insulin after meals, are released in bursts, so pulsatile release does not distinguish paracrine from endocrine signaling.',
        ],
        skill: '2A modes of signaling',
      },
      {
        question: 'A cell-permeant inhibitor of protein tyrosine phosphatases is added to cells before a brief pulse of a growth factor. Compared with untreated cells, the treated cells would be expected to show:',
        options: [
          'a shorter-lived response, because unopposed kinase activity exhausts the cell’s supply of ATP.',
          'no response, because the inhibitor prevents the receptors from pairing with one another.',
          'a longer-lived response, because the receptor phosphotyrosines persist after the ligand is gone.',
          'an unchanged response, because signaling is ended by endocytosis of the receptors rather than by dephosphorylation.',
        ],
        correctAnswer: 2,
        explanation:
          'Tyrosine phosphatases end RTK signaling by removing the phosphates that serve as docking sites. If they are inhibited, phosphotyrosines created during the pulse remain after the ligand is removed, docking proteins stay bound, and downstream signaling continues longer than usual. Kinase activity consumes a negligible fraction of the cell’s ATP. Phosphatases play no part in ligand-induced pairing, so the receptors still pair and the response still begins. Endocytosis is one of several termination mechanisms, and disabling any one of them prolongs the response, so the duration cannot be unchanged.',
        optionExplanations: [
          'Kinase activity consumes a negligible fraction of the cell’s ATP, so unopposed phosphorylation would not exhaust the supply; and persistence of phosphotyrosines would lengthen the response, not shorten it.',
          'Phosphatases play no part in ligand-induced pairing, which depends on the extracellular domains binding ligand; the receptors still pair, trans-phosphorylate, and initiate the response normally.',
          'Tyrosine phosphatases end RTK signaling by removing the phosphates that serve as docking sites; if they are inhibited, phosphotyrosines created during the pulse remain after the ligand is gone, docking proteins stay bound, and downstream signaling continues longer.',
          'Endocytosis is one of several termination mechanisms listed in the passage, alongside dephosphorylation and GTP hydrolysis; disabling any one of them prolongs the response, so its duration cannot be unchanged.',
        ],
        skill: '2A signal termination',
      },
    ],
  },

  // ────────────────────────────────────────────────────────────────────────
  // 5. PHYSIOLOGY (exp, table) — blood: erythropoiesis, reticulocytes, red
  //    cell turnover and bilirubin, MCV from Hct/RBC count, iron vs B12 vs
  //    hemolytic anemia from a CBC table, confirmatory iron trial
  // ────────────────────────────────────────────────────────────────────────
  {
    id: 'fl5-bb-a-05',
    section: 'bio-biochem',
    discipline: 'physiology',
    title: 'Classifying Anemia From the Complete Blood Count',
    passageText:
      'All of the formed elements of the blood descend from hematopoietic stem cells in the bone marrow. A progenitor committed to the erythroid lineage undergoes several rounds of division over about a week, synthesizing hemoglobin throughout, before the final product extrudes its nucleus. The cell that emerges, a reticulocyte, still contains ribosomal RNA and continues to make hemoglobin for a day or two; reticulocytes are released into the blood and can be counted after a stain that precipitates their residual RNA. Mature erythrocytes circulate for about 120 days before macrophages in the spleen and liver engulf them, salvage the iron for reuse, and convert the heme ring to unconjugated bilirubin, which is carried to the liver for conjugation and excretion. The rate of erythropoiesis is adjusted by erythropoietin, a hormone released by the kidney when the oxygen content of the blood falls; a healthy marrow supplied with all the materials it needs can raise its output several-fold within a week.\n\nRed cell production depends on an adequate supply of iron, which is incorporated into heme, and of folate and vitamin B₁₂, which are required for the synthesis of the nucleotides consumed by DNA replication. Iron salvaged from old cells or absorbed from the diet is stored in the liver and marrow bound to the protein ferritin and is carried to the marrow in plasma by transferrin; a small amount of ferritin circulates, and its concentration rises and falls with the stores. Erythroid precursors stop dividing once the hemoglobin concentration in their cytoplasm reaches a critical level, so the number of divisions completed before that point determines the volume of the mature cell.\n\nA complete blood count (CBC) reports the hemoglobin concentration, the hematocrit (the fraction of blood volume occupied by red cells), and the number of red cells per liter of blood. The mean cell volume (MCV) is obtained by dividing the hematocrit by the red cell count; the reference range is 80–100 fL. Anemia, a hemoglobin concentration below the reference range, may result from underproduction of red cells or from their loss or accelerated destruction, and the reticulocyte count, reported as a percentage of all red cells, helps to distinguish these possibilities. When erythropoietin is high, reticulocytes are also released from the marrow earlier than usual, so a raised count signals a marrow that is working hard to replace cells.\n\nPhysicians evaluated three men with anemia of similar severity, none of whom had a history of bleeding, and all of whom had normal white cell and platelet counts, normal kidney function, and no evidence of infection. Patient 3 was noted to have a mildly enlarged spleen. The CBC results and additional tests are shown in Table 1, together with reference ranges for adult men.',
    figure:
      '**Table 1. Laboratory results for three patients with anemia**\n\n| Measurement | Reference range | Patient 1 | Patient 2 | Patient 3 |\n|---|---|---|---|---|\n| Hemoglobin (g/dL) | 13.5–17.5 | 8.0 | 8.5 | 8.2 |\n| Hematocrit (fraction of blood volume) | 0.40–0.52 | 0.25 | 0.26 | 0.25 |\n| Red cell count (×10¹² per L) | 4.5–5.9 | 3.6 | 2.2 | 2.8 |\n| Reticulocytes (% of red cells) | 0.5–1.5 | 0.6 | 0.5 | 9.0 |\n| Serum ferritin (μg/L) | 30–300 | 6 | 120 | 150 |\n| Serum vitamin B₁₂ (pmol/L) | 150–700 | 400 | 70 | 380 |\n| Unconjugated bilirubin (μmol/L) | 2–17 | 8 | 18 | 45 |',
    questions: [
      {
        question: 'Based on Table 1, the mean cell volume of Patient 1’s red cells is approximately:',
        options: ['36 fL', '69 fL', '89 fL', '118 fL'],
        correctAnswer: 1,
        explanation:
          'MCV = hematocrit ÷ red cell count = 0.25 L/L ÷ (3.6 × 10¹² cells/L) = 6.9 × 10⁻¹⁴ L per cell = 69 fL, well below the 80–100 fL reference range, so Patient 1’s cells are abnormally small. The 36 fL value halves the result. The 89 fL value is Patient 3’s MCV (0.25 ÷ 2.8 × 10¹²), and the 118 fL value is Patient 2’s (0.26 ÷ 2.2 × 10¹²).',
        optionExplanations: [
          'This halves the correct result; MCV is the hematocrit divided by the red cell count, 0.25 ÷ 3.6 × 10¹² per L, which gives about 69 fL, not 36 fL.',
          'MCV = hematocrit ÷ red cell count = 0.25 L/L ÷ (3.6 × 10¹² cells/L) = 6.9 × 10⁻¹⁴ L per cell = 69 fL, well below the 80–100 fL reference range, so Patient 1’s cells are abnormally small.',
          'This is Patient 3’s MCV, 0.25 ÷ 2.8 × 10¹² = 89 fL, a normal value; Patient 1 has a higher red cell count for the same hematocrit, so his cells must be smaller.',
          'This is Patient 2’s MCV, 0.26 ÷ 2.2 × 10¹² = 118 fL, which is abnormally large; Patient 1’s count of 3.6 × 10¹² per L gives a much smaller cell volume.',
        ],
        skill: '3B blood: CBC calculation',
      },
      {
        question: 'The results for Patient 3 are most consistent with an anemia caused by:',
        options: [
          'failure of the marrow to release red cells, with destruction occurring at a normal rate.',
          'impaired hemoglobin synthesis, with red cells that nonetheless survive for a normal lifespan.',
          'impaired DNA synthesis, with most red cells destroyed before they ever leave the marrow.',
          'accelerated destruction of red cells, with a marrow that is responding appropriately.',
        ],
        correctAnswer: 3,
        explanation:
          'Patient 3’s reticulocyte percentage is six times the upper reference limit, so the marrow is releasing young cells at a greatly increased rate, and the elevated unconjugated bilirubin shows that heme is being broken down faster than normal; together with normal iron stores, normal B₁₂, and a normal cell volume, these findings point to accelerated destruction with a marrow that is compensating. A marrow that failed to release cells would show a low reticulocyte count. Impaired hemoglobin synthesis (iron deficiency) and impaired DNA synthesis (B₁₂ deficiency) both produce underproduction with a low reticulocyte count and are excluded by the normal ferritin and B₁₂ values.',
        optionExplanations: [
          'A marrow that failed to release red cells would show a low reticulocyte count; Patient 3’s reticulocytes are six times the upper reference limit, so the marrow is releasing young cells at a greatly increased rate.',
          'Impaired hemoglobin synthesis, as in iron deficiency, produces small cells and a low reticulocyte count; Patient 3 has normal ferritin, a normal MCV of about 89 fL, and a high reticulocyte count, so this does not fit.',
          'Impaired DNA synthesis from B₁₂ deficiency produces large cells and underproduction with a low reticulocyte count; Patient 3’s B₁₂ is normal, his cells are normal in size, and his reticulocytes are markedly raised.',
          'Patient 3’s reticulocyte percentage is six times the upper reference limit, so the marrow is responding vigorously, and his elevated unconjugated bilirubin shows heme being broken down faster than normal; with normal iron, B₁₂, and cell volume, this points to accelerated destruction with a compensating marrow.',
        ],
        skill: '3B blood: anemia classification',
      },
      {
        question: 'Which mechanism best accounts for the size of Patient 2’s red cells?',
        options: [
          'Reduced hemoglobin synthesis allowed additional cell divisions before the nucleus was lost.',
          'Immature cells were released early and retained their nuclei and organelles.',
          'Delayed DNA replication reduced the number of divisions while hemoglobin synthesis continued.',
          'Iron accumulated in the cytoplasm and increased the volume of each cell.',
        ],
        correctAnswer: 2,
        explanation:
          'Patient 2’s MCV is about 118 fL, far above normal, and his B₁₂ is low. Because precursors stop dividing when their hemoglobin reaches a critical concentration, and hemoglobin synthesis does not require B₁₂, cells whose DNA replication is slowed reach that concentration after fewer divisions and are therefore larger. Reduced hemoglobin synthesis would permit more divisions and produce smaller cells, the pattern of Patient 1. Early release of nucleated cells does not describe mature circulating erythrocytes and is not supported by the low reticulocyte count. Iron is not accumulating (ferritin is normal), and iron content does not determine cell volume.',
        optionExplanations: [
          'Reduced hemoglobin synthesis would permit more divisions before the critical hemoglobin concentration is reached, producing smaller cells; that is the pattern of Patient 1, whose MCV is 69 fL, not Patient 2, whose cells are large.',
          'Mature circulating erythrocytes have lost their nuclei, and Patient 2’s reticulocyte count is low, not high, so early release of immature cells is not supported; his large cells are the product of a normal maturation sequence with fewer divisions.',
          'Patient 2’s MCV is about 118 fL and his B₁₂ is low. Precursors stop dividing when cytoplasmic hemoglobin reaches a critical level, and hemoglobin synthesis does not require B₁₂, so cells whose DNA replication is slowed reach that level after fewer divisions and are larger.',
          'Patient 2’s ferritin is normal, so iron is not accumulating, and iron content does not determine cell volume; the passage ties volume to the number of divisions completed before hemoglobin reaches its critical concentration.',
        ],
        skill: '3B blood: erythropoiesis',
      },
      {
        question: 'Which additional observation would best confirm that Patient 1’s anemia results from iron deficiency rather than from a primary defect of the marrow?',
        options: [
          'A rise in the reticulocyte percentage within a week of beginning iron supplementation.',
          'A normal serum vitamin B₁₂ concentration on repeat testing.',
          'A hemoglobin concentration that remains stable over the next month without treatment.',
          'A rise in the reticulocyte percentage after transfusion of normal red cells.',
        ],
        correctAnswer: 0,
        explanation:
          'Patient 1 has small cells, very low ferritin, and a reticulocyte percentage that has not risen despite anemia, consistent with a marrow that is starved of iron rather than intrinsically defective. If iron is the limiting factor, supplying it should let the marrow raise its output, and the passage notes that a healthy marrow responds within a week; a prompt reticulocyte rise therefore confirms both the diagnosis and the marrow’s capacity. A normal B₁₂ value excludes one alternative cause but does not test the marrow. Stable hemoglobin without treatment does not distinguish an iron-starved marrow from a defective one. Transfusion raises the oxygen content of blood and lowers erythropoietin, which would suppress rather than stimulate reticulocyte release.',
        optionExplanations: [
          'Patient 1 has small cells, very low ferritin, and reticulocytes that have not risen despite anemia, consistent with a marrow starved of iron. If iron is limiting, supplying it should let the marrow raise output within a week, as the passage notes; a prompt reticulocyte rise confirms both the diagnosis and the marrow’s capacity.',
          'A normal B₁₂ value on repeat testing excludes one alternative cause of anemia but does not test whether the marrow can respond; it says nothing about iron deficiency versus an intrinsic marrow defect.',
          'Stable hemoglobin without treatment does not distinguish an iron-starved marrow from an intrinsically defective one; both would leave the anemia unchanged, so the observation cannot confirm the iron-deficiency diagnosis.',
          'Transfusion raises the oxygen content of blood and lowers erythropoietin, which would suppress rather than stimulate reticulocyte release; a rise after transfusion would be unexpected and would not test the role of iron.',
        ],
        skill: '3B research design',
      },
    ],
  },
]

export const FL5_BIO_BIOCHEM_A_DISCRETES: MCATDiscreteQuestion[] = [
  {
    id: 'fl5-bb-a-d01',
    section: 'bio-biochem',
    discipline: 'physiology',
    question: 'A patient with type A blood receives a unit of packed red cells from a type O donor, and no agglutination occurs. This outcome is explained by the fact that:',
    options: [
      'type O red cells carry neither A nor B antigen, so the recipient’s antibodies have nothing to bind.',
      'the recipient’s plasma contains no antibodies against any blood group antigen.',
      'the small amount of type O plasma in the unit contains antibodies that neutralize the recipient’s anti-B antibodies.',
      'the A antigen on the recipient’s cells masks the antigens on the donor cells.',
    ],
    correctAnswer: 0,
    explanation:
      'A type A person has A antigen on red cells and makes antibodies against the B antigen. Type O red cells carry neither A nor B antigen, so the recipient’s anti-B antibodies find nothing on the donor cells to bind and no agglutination occurs. The recipient’s plasma does contain antibodies, namely anti-B. Most plasma is removed from a unit of packed red cells, and the anti-A and anti-B antibodies in type O plasma would, if anything, react with the recipient’s cells rather than neutralize the recipient’s antibodies. Antigens on one cell cannot mask antigens on another.',
    optionExplanations: [
      'A type A person makes anti-B antibodies, and type O red cells carry neither A nor B antigen, so the recipient’s antibodies find nothing on the donor cells to bind and no agglutination occurs.',
      'The recipient’s plasma does contain antibodies, namely anti-B; a type A person lacks the B antigen and makes antibodies against it, so the absence of agglutination cannot be due to an absence of antibodies.',
      'Most plasma is removed from a unit of packed red cells, and the anti-A and anti-B antibodies in type O plasma would, if anything, react with the recipient’s A cells rather than neutralize the recipient’s own antibodies.',
      'Antigens on one cell cannot mask antigens on another cell; the donor cells are compatible because they lack A and B antigens, not because the recipient’s cells hide anything.',
    ],
    skill: '3B ABO blood groups',
  },
  {
    id: 'fl5-bb-a-d02',
    section: 'bio-biochem',
    discipline: 'physiology',
    question: 'In a demyelinating disease, action potentials along affected axons are slowed or fail to propagate. The most direct cause is that:',
    options: [
      'the loss of myelin exposes the axon to extracellular potassium, which depolarizes it to threshold prematurely.',
      'the local current spreading ahead of an action potential leaks across the exposed membrane and may not bring the next cluster of sodium channels to threshold.',
      'the loss of myelin removes the sodium channels, which are embedded within the myelin layers.',
      'the exposed axon segments become refractory because sodium–potassium pumps are lost along with the myelin.',
    ],
    correctAnswer: 1,
    explanation:
      'Myelin insulates the axon so that the depolarizing current generated at one node spreads with little leakage to the next node, where voltage-gated Na⁺ channels are clustered. When myelin is lost, current leaks across the exposed membrane, less of it reaches the next cluster of channels, and the depolarization there may be too small or too slow to reach threshold. Extracellular K⁺ is not raised by demyelination and would, if anything, hinder repolarization rather than cause premature firing. Na⁺ channels sit in the axonal membrane at the nodes, not within the myelin. The Na⁺/K⁺ pump is an axonal membrane protein and is not removed with the myelin.',
    optionExplanations: [
      'Demyelination does not raise extracellular K⁺, and elevated K⁺ would, if anything, hinder repolarization rather than drive premature firing; the problem is failure to reach threshold, not reaching it too early.',
      'Myelin insulates the axon so that depolarizing current from one node spreads with little leakage to the next node, where Na⁺ channels are clustered; without myelin, current leaks across the exposed membrane and the depolarization at the next cluster may be too small or too slow to reach threshold.',
      'Voltage-gated Na⁺ channels sit in the axonal membrane at the nodes of Ranvier, not within the myelin layers; losing the myelin sheath does not remove the channels themselves.',
      'The Na⁺/K⁺ pump is an axonal membrane protein and is not removed with the myelin; refractoriness results from Na⁺ channel inactivation after firing, not from pump loss, and the exposed segments are not refractory.',
    ],
    skill: '3A saltatory conduction',
  },
  {
    id: 'fl5-bb-a-d03',
    section: 'bio-biochem',
    discipline: 'physiology',
    question: 'Long bones grow in length until the end of adolescence, after which further lengthening is impossible even if growth hormone is administered. Lengthwise growth stops because:',
    options: [
      'osteoblasts in the periosteum stop depositing new bone on the surface of the shaft.',
      'the marrow cavity expands to the ends of the bone and prevents further elongation.',
      'growth hormone receptors are lost from bone-forming cells at the end of puberty.',
      'the cartilage of the epiphyseal plate is entirely replaced by bone, leaving no proliferating chondrocytes.',
    ],
    correctAnswer: 3,
    explanation:
      'Long bones lengthen by endochondral ossification at the epiphyseal plates, where chondrocytes proliferate, enlarge, and are replaced by bone from the shaft side. At the end of puberty the rising sex steroids accelerate that replacement until the entire plate has been ossified; with no cartilage left to proliferate, the bone can grow only in width. Periosteal osteoblasts deposit bone on the surface of the shaft and continue to do so in adults, which increases width rather than length. The marrow cavity never reaches the articular surfaces. Growth hormone receptors persist in adult bone, which is why excess growth hormone in adults thickens bones without lengthening them.',
    optionExplanations: [
      'Periosteal osteoblasts deposit bone on the surface of the shaft and continue to do so in adults; this appositional growth increases width, not length, so its cessation is not what ends lengthwise growth.',
      'The marrow cavity never reaches the articular surfaces, and its size does not govern elongation; length is added at the epiphyseal plates, not limited by the cavity.',
      'Growth hormone receptors persist in adult bone, which is why excess growth hormone in adults thickens bones without lengthening them; receptor loss is not the reason growth in length stops.',
      'Long bones lengthen by endochondral ossification at the epiphyseal plates, where chondrocytes proliferate and are replaced by bone. At the end of puberty rising sex steroids accelerate that replacement until the plate is fully ossified; with no proliferating cartilage left, lengthening is impossible.',
    ],
    skill: '3B skeletal system: endochondral ossification',
  },
  {
    id: 'fl5-bb-a-d04',
    section: 'bio-biochem',
    discipline: 'genetics',
    question: 'A man and a woman who are first cousins plan to have a child. One of their shared grandparents is known to be a heterozygous carrier of an autosomal recessive disorder; the other shared grandparent and everyone who married into the family are assumed to be noncarriers. What is the probability that the couple’s first child will be affected?',
    options: ['1/16', '1/32', '1/64', '1/256'],
    correctAnswer: 2,
    explanation:
      'The carrier grandparent passes the allele to each child with probability 1/2, and that child passes it to the cousin with probability 1/2, so each cousin is a carrier with probability 1/4 (no other source of the allele exists under the stated assumptions). The probability that both cousins are carriers is 1/4 × 1/4 = 1/16, and two carriers have an affected child with probability 1/4, giving 1/16 × 1/4 = 1/64. The value 1/16 is the probability that both cousins are carriers, not that the child is affected. The value 1/32 treats one cousin as a carrier with probability 1/2 instead of 1/4. The value 1/256 squares 1/16 instead of multiplying it by 1/4.',
    optionExplanations: [
      'This is the probability that both cousins are carriers (1/4 × 1/4), not the probability that their child is affected; two carriers must still each transmit the allele, which happens with probability 1/4.',
      'This treats one cousin as a carrier with probability 1/2 rather than 1/4; each cousin is two transmissions removed from the carrier grandparent (1/2 × 1/2 = 1/4), so the combined result is 1/4 × 1/4 × 1/4 = 1/64.',
      'The carrier grandparent transmits the allele to each child with probability 1/2, and that child to the cousin with probability 1/2, so each cousin is a carrier with probability 1/4; both are carriers with probability 1/16, and two carriers have an affected child with probability 1/4, giving 1/64.',
      'This squares 1/16 instead of multiplying it by 1/4; the chance that both cousins are carriers is 1/16, and the chance that two carriers have an affected child is 1/4, not another 1/16.',
    ],
    skill: '1C autosomal recessive inheritance',
  },
  {
    id: 'fl5-bb-a-d05',
    section: 'bio-biochem',
    discipline: 'molecular biology',
    question: 'Cysteine-tRNA synthetase attaches cysteine to its tRNA. If the attached cysteine is chemically converted to alanine while still bound to the tRNA, and the modified aminoacyl-tRNA is then used in a translation system, alanine will be incorporated:',
    options: [
      'at codons specifying alanine, because the ribosome recognizes the amino acid carried by the tRNA.',
      'at codons specifying cysteine, because the ribosome pairs codon with anticodon without checking the amino acid.',
      'nowhere, because the ribosome rejects a tRNA whose amino acid does not match its anticodon.',
      'at codons specifying either amino acid, because the anticodon of the modified tRNA can pair with both sets of codons.',
    ],
    correctAnswer: 1,
    explanation:
      'The ribosome selects an aminoacyl-tRNA by matching its anticodon to the codon in the A site; it has no means of inspecting the amino acid attached to the tRNA. The modified tRNA still carries the cysteine anticodon, so it delivers alanine wherever a cysteine codon appears, which shows that the fidelity of translation depends on the synthetases that charge the tRNAs. Because the ribosome does not read the amino acid, alanine codons are unaffected, the modified tRNA is not rejected, and its anticodon does not pair with alanine codons.',
    optionExplanations: [
      'The ribosome has no means of inspecting the amino acid attached to a tRNA; it matches only the anticodon to the codon, so the alanine-bearing tRNA with a cysteine anticodon is never delivered to alanine codons.',
      'The ribosome selects an aminoacyl-tRNA by matching anticodon to codon in the A site and cannot check the attached amino acid; the modified tRNA still carries the cysteine anticodon, so it delivers alanine at cysteine codons, showing that translational fidelity depends on the synthetases.',
      'The ribosome does not reject a tRNA based on its amino acid; it has no proofreading step for the amino acid–anticodon match, so the modified tRNA is accepted wherever its anticodon pairs.',
      'The anticodon of the modified tRNA is unchanged and pairs only with cysteine codons; the chemical conversion of the amino acid does not alter the anticodon, so it cannot pair with alanine codons.',
    ],
    skill: '1B tRNA charging and translation',
  },
  {
    id: 'fl5-bb-a-d06',
    section: 'bio-biochem',
    discipline: 'biochemistry',
    question: 'Which observation most directly supports the induced-fit model of enzyme–substrate binding over the lock-and-key model?',
    options: [
      'The enzyme catalyzes the reaction of only one of several structurally related candidate substrates.',
      'A competitive inhibitor that closely resembles the substrate binds within the active site.',
      'The enzyme’s active-site residues move closer together after the substrate binds.',
      'The enzyme lowers the activation energy of the reaction without itself being permanently altered.',
    ],
    correctAnswer: 2,
    explanation:
      'Induced fit holds that the active site is not pre-formed to match the substrate exactly but changes shape on binding, with catalytic residues moving into their final positions; a structural change that follows binding is therefore the direct evidence for it. Specificity for one substrate, binding of a substrate-shaped competitive inhibitor, and lowering of the activation energy are all predicted equally by the lock-and-key model, which also posits a specific, complementary active site, so none of them distinguishes the two models.',
    optionExplanations: [
      'Specificity for a single substrate among related candidates is predicted equally by the lock-and-key model, which posits a pre-formed, complementary active site; it does not distinguish the two models.',
      'Binding of a substrate-shaped competitive inhibitor within the active site is consistent with a rigid complementary site as well as with a flexible one; the lock-and-key model predicts it just as well.',
      'Induced fit holds that the active site changes shape on binding, with catalytic residues moving into their final positions; a structural change that follows substrate binding is the direct evidence for it and is not predicted by a rigid, pre-formed lock.',
      'Lowering the activation energy without permanent alteration is the definition of any catalyst and is predicted by both models; it says nothing about whether the active site is rigid or changes shape on binding.',
    ],
    skill: '1A enzyme structure and function',
  },
  {
    id: 'fl5-bb-a-d07',
    section: 'bio-biochem',
    discipline: 'biochemistry',
    question: 'A hepatocyte lacks fructose-1,6-bisphosphatase activity. Which of the following could it still convert to free glucose for release into the blood?',
    options: ['Lactate', 'Alanine', 'Glycerol', 'Glycogen'],
    correctAnswer: 3,
    explanation:
      'Glycogen is broken down to glucose 1-phosphate, isomerized to glucose 6-phosphate, and dephosphorylated by glucose 6-phosphatase, a route that never passes through fructose 1,6-bisphosphate. Lactate and alanine enter gluconeogenesis as pyruvate, and glycerol enters as dihydroxyacetone phosphate; all three must be built up to fructose 1,6-bisphosphate and then converted to fructose 6-phosphate by fructose-1,6-bisphosphatase, the step that bypasses the irreversible phosphofructokinase reaction of glycolysis, so none of them can yield glucose without that enzyme.',
    optionExplanations: [
      'Lactate enters gluconeogenesis as pyruvate and must be built up to fructose 1,6-bisphosphate, which then requires fructose-1,6-bisphosphatase to proceed to fructose 6-phosphate; without that enzyme lactate cannot yield glucose.',
      'Alanine is transaminated to pyruvate and follows the same gluconeogenic route as lactate through fructose 1,6-bisphosphate; it is blocked at the missing fructose-1,6-bisphosphatase step.',
      'Glycerol enters as dihydroxyacetone phosphate, which is still upstream of the fructose-1,6-bisphosphatase step; it must pass through fructose 1,6-bisphosphate to reach glucose, so it is blocked as well.',
      'Glycogen is broken down to glucose 1-phosphate, isomerized to glucose 6-phosphate, and dephosphorylated by glucose 6-phosphatase, a route that never passes through fructose 1,6-bisphosphate and so does not need fructose-1,6-bisphosphatase.',
    ],
    skill: '1D gluconeogenesis',
  },
  {
    id: 'fl5-bb-a-d08',
    section: 'bio-biochem',
    discipline: 'cell biology',
    question: 'A cultured animal cell is exposed, just after its sister chromatids have separated, to a drug that prevents actin filaments from interacting with myosin. The most likely outcome is:',
    options: [
      'a single cell containing two nuclei.',
      'arrest in anaphase, with chromatids stalled midway to the poles.',
      'two daughter cells that each lack a nuclear envelope.',
      'a cell that returns to metaphase and re-forms the spindle.',
    ],
    correctAnswer: 0,
    explanation:
      'Cytokinesis in animal cells is accomplished by a contractile ring of actin and myosin that pinches the cell in two after the chromosomes have separated. Chromosome movement in anaphase is driven by the spindle microtubules, not by actin, so the chromatids still reach the poles and nuclear envelopes re-form around both sets; without a functional ring the cytoplasm is not divided, and a binucleate cell results. Anaphase does not depend on actin and so does not arrest. Nuclear envelope reassembly is independent of cytokinesis. Cells do not revert to metaphase once their chromatids have separated.',
    optionExplanations: [
      'Cytokinesis in animal cells depends on a contractile ring of actin and myosin that pinches the cell in two after chromosomes separate; chromosome movement is driven by spindle microtubules, so the chromatids still reach the poles and nuclear envelopes re-form, but the cytoplasm is never divided, leaving one binucleate cell.',
      'Anaphase chromosome movement is powered by spindle microtubules and their motor proteins, not by actin–myosin interaction, so blocking actin–myosin does not stall the chromatids midway to the poles.',
      'Nuclear envelope reassembly around each chromatid set is independent of cytokinesis; the envelopes re-form normally, and because the cytoplasm is not divided there are not two daughter cells at all.',
      'Cells do not revert to metaphase once sister chromatids have separated; the cell cycle proceeds forward, and the spindle disassembles as the nuclear envelopes re-form, regardless of whether cytokinesis occurs.',
    ],
    skill: '2C cytokinesis',
  },
]
