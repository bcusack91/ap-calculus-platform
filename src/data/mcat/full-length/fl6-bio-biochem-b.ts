/**
 * MCAT full-length FORM 6 — Bio/Biochem section, file B (passages 6–10 +
 * discretes 1–7). Authored 2026-10-01 against the AAMC-representative
 * blueprint (scratchpad/mcat-fl/BLUEPRINT.md + BLUEPRINT-F56.md): 400–600-word
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

export const FL6_BIO_BIOCHEM_B_PASSAGES: MCATPassage[] = [
  // ────────────────────────────────────────────────────────────────────────
  // 6. METABOLISM — Ethanol oxidation, the NADH/NAD+ ratio and fasting glucose (experiment, table)
  // ────────────────────────────────────────────────────────────────────────
  {
    id: 'fl6-bb-b-06',
    section: 'bio-biochem',
    discipline: 'metabolism',
    title: 'Ethanol Oxidation and the Redox State of the Fasting Liver',
    passageText:
      'Nearly all of the ethanol a person drinks is oxidized in the liver. In the cytosol of the hepatocyte, alcohol dehydrogenase (ADH) converts ethanol to acetaldehyde; in the mitochondrial matrix, aldehyde dehydrogenase converts acetaldehyde to acetate. Each reaction reduces one molecule of $\\text{NAD}^+$ to NADH. Acetate leaves the liver and is converted to acetyl-CoA in other tissues. Hepatic ADH has a $K_m$ for ethanol of about 1 mM, and its activity is not adjusted to the energy needs of the cell. Cytosolic NADH can be reoxidized only by handing its electrons, through shuttle systems, to the mitochondrial electron transport chain, and this route cannot keep pace with ADH when ethanol is abundant. While ethanol is being oxidized, NADH therefore accumulates and free $\\text{NAD}^+$ becomes scarce.\n\nThe free concentrations of the two forms of the coenzyme cannot be measured directly in a living person, so investigators infer their ratio from pairs of metabolites that are interconverted by a dehydrogenase operating close to equilibrium. Lactate dehydrogenase, a cytosolic enzyme, catalyzes the reaction pyruvate + NADH + $\\text{H}^+$ ⇌ lactate + $\\text{NAD}^+$. Because lactate and pyruvate cross the hepatocyte membrane readily, the ratio of lactate to pyruvate (L/P) in plasma rises and falls with the ratio of NADH to $\\text{NAD}^+$ in the liver cytosol. The same coenzyme pool serves two reactions through which the fasting liver draws on precursors of glucose: the oxidation of lactate to pyruvate and the oxidation of glycerol 3-phosphate to dihydroxyacetone phosphate.\n\nResearchers studied twelve healthy adults who rarely drank alcohol. Each volunteer was studied on four occasions at least 2 weeks apart: after a fast of either 12 hours or 60 hours, and with an intravenous infusion of either ethanol or saline. The rate of the ethanol infusion was adjusted to hold the blood ethanol concentration at 20 mM for 2 hours. Arterial blood was drawn at the end of the infusion (Table 1). The rate at which the liver released glucose, estimated with a tracer during the second hour, was 55% lower with ethanol than with saline after the 60-hour fast but did not differ between ethanol and saline after the 12-hour fast. Plasma insulin was low after both fasts and was not changed by ethanol. After the ethanol infusion was stopped in the 60-hour trial, the blood ethanol concentration was 20 mM at 0 hours, 16 mM at 1 hour, 12 mM at 2 hours, and 8 mM at 3 hours.\n\nIn a companion experiment, hepatocytes isolated from rats that had been fasted for 48 hours were incubated with lactate as the only precursor of glucose. Adding 10 mM ethanol lowered glucose production by 65%. When the cells were also given fomepizole, a competitive inhibitor of ADH, ethanol disappeared from the medium at less than one-tenth of the previous rate, and glucose production equaled that of cells given no ethanol. Fomepizole alone did not change glucose production.',
    figure:
      '**Table 1. Mean arterial plasma concentrations at the end of the 2-hour infusion (n = 12)**\n\n| Measurement | 12-h fast, saline | 12-h fast, ethanol | 60-h fast, saline | 60-h fast, ethanol |\n|---|---|---|---|---|\n| Glucose (mM) | 4.9 | 4.7 | 3.8 | 2.3 |\n| Lactate (mM) | 0.8 | 2.4 | 0.9 | 2.7 |\n| Pyruvate (mM) | 0.08 | 0.03 | 0.09 | 0.03 |',
    questions: [
      {
        question:
          'According to Table 1, how did ethanol change the plasma L/P ratio after the 60-hour fast, relative to saline?',
        options: ['A decrease to one-third', 'An increase of 3-fold', 'An increase of 9-fold', 'An increase of 90-fold'],
        correctAnswer: 2,
        explanation:
          'With saline the ratio is 0.9/0.09 = 10, and with ethanol it is 2.7/0.03 = 90, a 9-fold increase. A 3-fold increase is the change in lactate alone (2.7 vs 0.9), and a decrease to one-third is the change in pyruvate alone (0.03 vs 0.09); the ratio combines both changes. The value 90 is the L/P ratio itself during ethanol, not its change relative to saline.',
        skill: '1D cytosolic redox state (data interpretation)',
      },
      {
        question:
          'Ethanol raised the L/P ratio to a similar extent after both fasts but lowered plasma glucose substantially only after the 60-hour fast. Which explanation best accounts for this difference?',
        options: [
          'After 12 hours, the liver still released glucose from glycogen, a process that requires no $\\text{NAD}^+$',
          'After 12 hours, insulin was still high enough to keep the liver from oxidizing ethanol',
          'After 60 hours, ADH had been induced, so that ethanol generated far more NADH',
          'After 60 hours, insulin had risen, so that muscle removed glucose more rapidly',
        ],
        correctAnswer: 0,
        explanation:
          'Twelve hours into a fast the liver still contains glycogen, and glycogenolysis releases glucose without any $\\text{NAD}^+$-dependent step, so glucose output was maintained even though the redox state shifted; by 60 hours glycogen is exhausted and glucose comes from gluconeogenesis, whose entry reactions for lactate and glycerol need $\\text{NAD}^+$. The rise in L/P after the 12-hour fast shows that ethanol was being oxidized, and insulin was low in every trial. The L/P ratios during ethanol were similar after the two fasts (80 and 90), which gives no sign of greater NADH production after 60 hours. Insulin did not rise, and the 55% fall in hepatic glucose release shows that the defect was in production rather than in removal by muscle.',
        skill: '1D glycogenolysis vs gluconeogenesis in fasting',
      },
      {
        question: 'Which conclusion is best supported by the results of the hepatocyte experiment?',
        options: [
          'Ethanol slows glucose production by binding directly to a gluconeogenic enzyme',
          'Fomepizole stimulates glucose production by a route unrelated to ethanol',
          'Hepatocytes remove most of their ethanol through an enzyme other than ADH',
          'Ethanol must be oxidized by ADH in order to slow glucose production',
        ],
        correctAnswer: 3,
        explanation:
          'With ADH inhibited, ethanol persisted in the medium yet glucose production was normal, so the inhibition depends on the oxidation of ethanol (and the NADH it generates) rather than on the ethanol molecule. Direct binding to a gluconeogenic enzyme predicts that inhibition would persist, or worsen, when ethanol remained at a high concentration. Fomepizole alone did not change glucose production, which rules out an ethanol-independent stimulation. Ethanol disappearance fell by more than 90% when ADH was inhibited, so ADH accounts for most ethanol removal.',
        skill: '1D research design: inhibitor controls',
      },
      {
        question:
          'People who drink heavily for years commonly accumulate triacylglycerol in their hepatocytes. Which effect of a persistently high ratio of NADH to $\\text{NAD}^+$ contributes most directly to this accumulation?',
        options: [
          'Fatty acid synthesis accelerates, because that pathway uses NADH as its reductant',
          'Fatty acid oxidation slows, because that pathway needs $\\text{NAD}^+$ as an electron acceptor',
          'Ketone body export rises, because acetyl-CoA is kept out of the citric acid cycle',
          'Triacylglycerol hydrolysis rises, because hepatic lipases are activated by NADH',
        ],
        correctAnswer: 1,
        explanation:
          'Each round of β-oxidation includes a dehydrogenase step that reduces $\\text{NAD}^+$, so when $\\text{NAD}^+$ is scarce fatty acids are oxidized more slowly and are instead esterified and stored as triacylglycerol. Fatty acid synthesis uses NADPH, not NADH, as its reductant, so a surplus of NADH does not drive it. Exporting ketone bodies removes carbon from the liver and would not cause triacylglycerol to build up. Faster hydrolysis of triacylglycerol would deplete the stores, and lipases are not activated by NADH.',
        skill: '1D β-oxidation and redox state',
      },
      {
        question:
          'Which statement about hepatic ADH during the 3 hours after the infusion was stopped is best supported by the blood ethanol values?',
        options: [
          'It was nearly saturated, because ethanol fell by equal amounts each hour',
          'It was far from saturated, because ethanol fell by the same fraction in each hour',
          'It was increasingly inhibited, because ethanol fell by less in each later hour',
          'It was increasingly induced, because ethanol fell by more in each later hour',
        ],
        correctAnswer: 0,
        explanation:
          'Ethanol fell by 4 mM in every hour regardless of its concentration, the behavior expected of an enzyme working near $V_{max}$; this agrees with ethanol concentrations of 8–20 mM, far above a $K_m$ of about 1 mM. An enzyme far from saturation would remove a constant fraction per hour, giving successively smaller decrements (20, 16, 12.8, …) instead of equal ones. The hourly decrements neither shrank, as progressive inhibition would predict, nor grew, as induction of more enzyme would predict.',
        skill: '1A enzyme saturation (data reasoning)',
      },
    ],
  },

  // ────────────────────────────────────────────────────────────────────────
  // 7. MOLECULAR BIOLOGY — UV damage, nucleotide-excision repair, XP survival curves (experiment, chart)
  // ────────────────────────────────────────────────────────────────────────
  {
    id: 'fl6-bb-b-07',
    section: 'bio-biochem',
    discipline: 'molecular biology',
    title: 'Excision Repair of Ultraviolet Damage in Fibroblasts From a Child With Xeroderma Pigmentosum',
    passageText:
      'Ultraviolet (UV) light is absorbed by the bases of DNA. Its most frequent product is the cyclobutane pyrimidine dimer (CPD), in which two neighboring pyrimidines of one strand become covalently joined. A dimer distorts the double helix and stalls both the replicative DNA polymerases and RNA polymerase II. Human cells remove dimers and other bulky lesions by nucleotide-excision repair (NER). Proteins that recognize the distortion recruit a complex containing helicases, which unwind roughly 30 base pairs around the lesion. A protein called XPA then confirms that damage is present and positions two endonucleases, one on each side of the lesion; their action releases an oligonucleotide of 25 to 30 nucleotides that contains the dimer. A DNA polymerase extends the 3′-hydroxyl end left at the upstream boundary across the gap, and DNA ligase joins the new segment to the rest of the strand.\n\nXeroderma pigmentosum (XP) is a rare autosomal recessive disorder. Sun-exposed skin becomes heavily freckled in infancy, and skin cancers appear, often before the age of 10, at more than 1,000 times the rate seen in the general population. The rates of most cancers of internal organs are increased far less.\n\nInvestigators cultured skin fibroblasts from a child with XP who carried two loss-of-function alleles of the *XPA* gene and from an unaffected donor of the same age. A third culture consisted of the patient’s cells after stable transfection with a plasmid that carried a normal *XPA* coding sequence and a gene conferring resistance to the antibiotic used to select transfected cells. Cells from each culture were plated at low density, exposed once to 254-nm UV light at doses from 0 to 6 $\\text{J/m}^2$, and incubated for 14 days. Survival was scored as the number of colonies formed, expressed as a percentage of the number formed by unirradiated cells of the same culture (Figure 1).\n\nIn a second experiment, confluent cultures, in which almost no cells were replicating their chromosomes, were exposed to 6 $\\text{J/m}^2$ and then incubated for 3 hours with radioactively labeled thymidine. Incorporation of label into nuclear DNA under these conditions is called unscheduled DNA synthesis. In the patient’s cells it was less than 5% of the amount measured in the donor’s cells; in the transfected patient cells it was 90% of the donor value. The investigators also counted CPDs with an antibody specific for the dimer. Immediately after irradiation, the three cultures contained equal numbers of CPDs per million bases. After 24 hours, the donor’s cells retained 45% of their initial CPDs, the patient’s cells 97%, and the transfected patient cells 50%.',
    chart: {
      title: 'Figure 1. Colony-forming survival of three fibroblast cultures after a single exposure to 254-nm UV light',
      kind: 'line',
      xLabel: 'UV dose',
      xUnit: 'J/m²',
      yLabel: 'Survival',
      yUnit: '% of unirradiated cells',
      xValues: [0, 1, 2, 3, 4, 5, 6],
      yValues: [100, 93, 85, 76, 67, 58, 50],
      seriesLabel: 'Unaffected donor',
      comparisonSeries: [
        { label: 'Patient (no functional XPA)', yValues: [100, 50, 25, 12.5, 6.3, 3.1, 1.6] },
        { label: 'Patient + XPA plasmid', yValues: [100, 91, 82, 73, 64, 55, 46] },
      ],
    },
    questions: [
      {
        question:
          'Based on Figure 1, the UV dose needed to reduce survival to 50% is approximately how many times greater for the donor’s cells than for the patient’s untransfected cells?',
        options: ['2 times', '3 times', '4 times', '6 times'],
        correctAnswer: 3,
        explanation:
          'The donor’s cells fall to 50% survival at about 6 $\\text{J/m}^2$, whereas the patient’s untransfected cells reach 50% at about 1 $\\text{J/m}^2$, a 6-fold difference in dose. Factors of 2, 3, or 4 would require the patient’s cells to reach 50% survival at 3, 2, or 1.5 $\\text{J/m}^2$, but Figure 1 shows that only 25% of them survive 2 $\\text{J/m}^2$ and about 12% survive 3 $\\text{J/m}^2$.',
        skill: '1B UV survival curves (data interpretation)',
      },
      {
        question:
          'In the patient’s cells, unscheduled DNA synthesis after UV exposure was almost absent. Considered alone, this result is most consistent with a failure of which event?',
        options: [
          'Sealing of the final nick by DNA ligase',
          'Cutting of the dimer-bearing strand',
          'Proofreading by the gap-filling DNA polymerase',
          'Synthesis of an RNA primer for the new segment',
        ],
        correctAnswer: 1,
        explanation:
          'Repair synthesis can begin only after the lesion-containing oligonucleotide has been cut out, leaving a gap; if the strand is never incised there is no gap to fill, and no thymidine is incorporated. A ligase defect would leave a nick but would not stop the polymerase from filling the gap, so incorporation would be close to normal. Loss of proofreading would lower the accuracy of the new segment, not the amount of synthesis. NER requires no RNA primer, because the polymerase extends the 3′-hydroxyl end produced by the upstream cut.',
        skill: '1B nucleotide-excision repair steps',
      },
      {
        question:
          'Which explanation best accounts for the observation that XP raises the rate of skin cancer far more than it raises the rates of most internal cancers?',
        options: [
          'Internal tissues remove pyrimidine dimers by a separate pathway that does not use XPA',
          'Cells of internal tissues divide too rarely for unrepaired lesions to become fixed as mutations',
          'UV light is absorbed within the skin, so few dimers form in the DNA of internal tissues',
          'Skin cells, unlike internal cells, lack polymerases that can proofread newly made DNA',
        ],
        correctAnswer: 2,
        explanation:
          'UV photons are absorbed in the outer layers of the skin and do not reach deeper organs, so the lesion that NER-deficient cells cannot remove is generated almost exclusively in sun-exposed skin. The patient’s defect is inherited and present in every cell, and the passage gives no evidence of an XPA-independent pathway for dimers in internal tissues. Many internal tissues, such as bone marrow and intestinal epithelium, divide rapidly. Skin cells have the same proofreading replicative polymerases as other cells.',
        skill: '1B DNA damage by UV light',
      },
      {
        question:
          'Figure 1 shows that the transfected patient cells survived UV exposure nearly as well as the donor’s cells. To attribute this rescue to the XPA protein, which additional culture would be most important to test?',
        options: [
          'Patient cells transfected with the same plasmid lacking the XPA coding sequence',
          'Donor cells transfected with the plasmid carrying the XPA coding sequence',
          'Patient cells exposed to visible light at the same energy doses as the UV',
          'Donor cells that were plated at low density but never exposed to UV',
        ],
        correctAnswer: 0,
        explanation:
          'Transfection, the plasmid backbone, and antibiotic selection might themselves alter UV survival; patient cells carrying the plasmid without the XPA sequence control for all of these, isolating XPA as the cause of rescue. Adding XPA to donor cells would show whether extra XPA helps normal cells, not whether XPA explains the rescue of patient cells. Visible light would test whether killing depends on wavelength, a different question. Unirradiated cells of each culture were already used as the reference for scoring survival.',
        skill: '1B research design: vector controls',
      },
    ],
  },

  // ────────────────────────────────────────────────────────────────────────
  // 8. CELL BIOLOGY — Stem cells: potency, niches, induced pluripotency, therapy (information)
  // ────────────────────────────────────────────────────────────────────────
  {
    id: 'fl6-bb-b-08',
    section: 'bio-biochem',
    discipline: 'cell biology',
    title: 'Potency, Niches, and the Reprogramming of Differentiated Cells',
    passageText:
      'A stem cell is defined by two properties: it can divide to produce more stem cells (self-renewal), and it can give rise to differentiated cell types. Stem cells are classified by their potency, the range of cell types they can form. The fertilized egg is totipotent: it generates every cell of the embryo and also the extraembryonic tissues, including the embryonic contribution to the placenta. By the blastocyst stage, the outer cells have become committed to forming the trophoblast, which contributes to the placenta, whereas the cells of the inner cell mass are pluripotent, able to form all derivatives of the three germ layers but not the trophoblast. Embryonic stem (ES) cells are inner-cell-mass cells maintained in culture. Most stem cells that persist in adult tissues are multipotent and produce the several cell types of a single tissue, as the hematopoietic stem cell of the bone marrow produces all of the blood cells; a few are unipotent and form only one cell type.\n\nAdult stem cells reside in specialized microenvironments called niches, where neighboring cells supply short-range signals that suppress differentiation. In the small intestine, stem cells sit at the base of each crypt, wedged between Paneth cells that secrete Wnt proteins. Wnt signaling stabilizes the transcription coactivator β-catenin, which maintains the expression of genes needed for proliferation and for the undifferentiated state. In cells that receive no Wnt, a complex containing the protein APC marks β-catenin for destruction. Daughter cells pushed upward out of the niche divide a few more times and then differentiate into absorptive and secretory cells, which are shed from the tip of the villus within about 5 days. Because the niche has a fixed size, the number of stem cells in each crypt stays nearly constant throughout life.\n\nDifferentiated cells can be returned experimentally to a pluripotent state. In 2006, investigators showed that introducing the genes for just four transcription factors, all normally expressed in ES cells, into mouse fibroblasts caused a small fraction of the cells to form colonies resembling those of ES cells. Later work showed that such induced pluripotent stem (iPS) cells can contribute to every tissue of a mouse when they are injected into a blastocyst. The DNA sequence of iPS cells is the same as that of the fibroblasts from which they were derived, but their patterns of DNA methylation and histone modification resemble those of ES cells.\n\niPS cells have made new therapies conceivable, because cells derived from a patient’s own iPS cells carry that patient’s histocompatibility antigens. Two hazards must be managed. Undifferentiated pluripotent cells injected into an adult form teratomas, disorganized tumors that contain tissues of all three germ layers. In addition, reprogramming and prolonged culture can favor cells that have acquired mutations promoting rapid growth. At present, the stem-cell therapy in widest use remains the transplantation of hematopoietic stem cells, which can rebuild the entire blood and immune system of a recipient whose own marrow has been destroyed.',
    questions: [
      {
        question:
          'Some monozygotic twins arise when the two cells of a two-cell embryo separate, and each cell then develops into a complete fetus with its own placenta. This outcome shows that each cell of the two-cell embryo is:',
        options: ['pluripotent.', 'totipotent.', 'multipotent.', 'unipotent.'],
        correctAnswer: 1,
        explanation:
          'Each separated cell produced an entire fetus and also contributed to a placenta, so each could form both embryonic and extraembryonic tissues, which is the definition of totipotency. A pluripotent cell forms all three germ layers but cannot form the trophoblast, so it could not have supplied a placenta. Multipotent cells are restricted to the cell types of one tissue, and unipotent cells to a single cell type; neither could build a whole organism.',
        skill: '2C stem-cell potency',
      },
      {
        question:
          'Most colorectal tumors begin when both copies of the APC gene in a cell of the intestinal crypt acquire loss-of-function mutations. Based on the passage, the earliest consequence of this loss is most likely:',
        options: [
          'premature differentiation of the stem cells, which empties the base of the crypt.',
          'death of the neighboring Paneth cells, which removes the local source of Wnt.',
          'reversion of the crypt cells to pluripotency, which gives rise to a teratoma.',
          'continued proliferation of undifferentiated cells after they have left the niche.',
        ],
        correctAnswer: 3,
        explanation:
          'Without APC, β-catenin is not destroyed even when Wnt is absent, so cells displaced from the niche behave as though they were still receiving the signal: they keep dividing and fail to differentiate, forming an expanding mass. Premature differentiation would follow from too little β-catenin activity, the opposite of what APC loss produces. The mutation acts within the mutant cell and does not kill Paneth cells; in any case the mutant cell no longer depends on their Wnt. Stabilizing β-catenin maintains a tissue stem-cell program and does not restore pluripotency, which required four specific transcription factors.',
        skill: '2C stem-cell niche signaling',
      },
      {
        question:
          'iPS cells have the same DNA sequence as their parent fibroblasts, yet they can form every tissue of a mouse. Together, these findings support which conclusion about the normal differentiation of a fibroblast?',
        options: [
          'It silences genes in a reversible way without removing them from the genome',
          'It deletes from the genome the genes that the fibroblast lineage will never use',
          'It mutates the genes for the four factors so that they cannot be transcribed',
          'It depends on transcription factors that are found only in cells kept in culture',
        ],
        correctAnswer: 0,
        explanation:
          'If a fibroblast nucleus can be returned to pluripotency with no change in DNA sequence, the fibroblast must have kept a complete genome, with unused genes held inactive by reversible marks such as DNA methylation and histone modification. Deleted genes could not be recovered by expressing transcription factors, and deletion would have changed the DNA sequence. Mutation of the factor genes would likewise have appeared as a sequence difference. The four factors are normally expressed in the embryo’s own pluripotent cells, so differentiation does not depend on factors unique to culture.',
        skill: '2C genomic equivalence and differentiation',
      },
      {
        question:
          'A physician proposes to treat a child who has an inherited anemia, caused by a mutation in a globin gene, by reprogramming the child’s fibroblasts into iPS cells, differentiating these into hematopoietic stem cells, and transplanting them after the child’s marrow has been destroyed. Which additional step is essential if the treatment is to succeed?',
        options: [
          'Suppressing the child’s immune system for life to prevent rejection of the graft',
          'Transplanting the iPS cells before they differentiate, to preserve their potency',
          'Repairing the globin mutation in the iPS cells before they are differentiated',
          'Irradiating the cells before transplantation so that they cannot divide again',
        ],
        correctAnswer: 2,
        explanation:
          'The child’s fibroblasts carry the inherited globin mutation, so blood cells derived from them would be just as defective as the marrow they replace unless the mutation is corrected first. Cells derived from the child’s own iPS cells bear the child’s histocompatibility antigens, so lifelong immunosuppression should not be needed. Undifferentiated pluripotent cells form teratomas in an adult and would not home to the marrow as hematopoietic stem cells do. Transplanted stem cells must divide for the rest of the child’s life to rebuild the blood, so preventing division would defeat the treatment.',
        skill: '2C therapeutic use of stem cells',
      },
    ],
  },

  // ────────────────────────────────────────────────────────────────────────
  // 9. PHYSIOLOGY — Cardiac output and its redistribution during cycling (experiment, table)
  // ────────────────────────────────────────────────────────────────────────
  {
    id: 'fl6-bb-b-09',
    section: 'bio-biochem',
    discipline: 'physiology',
    title: 'Distribution of the Cardiac Output During Graded Cycling',
    passageText:
      'Cardiac output (CO), the volume of blood ejected by the left ventricle each minute, is the product of heart rate and stroke volume. Mean arterial pressure (MAP) is approximately the product of CO and total peripheral resistance (TPR), the combined resistance of all the systemic vascular beds. Because these beds are arranged in parallel, dilation of the arterioles in any one bed lowers TPR and constriction in any one bed raises it. During dynamic exercise, the activity of sympathetic nerves to the heart and to the blood vessels of most organs increases with the intensity of the exercise, and norepinephrine released from the vascular nerves constricts arterioles by acting on α-adrenergic receptors of their smooth muscle. At rest, roughly two-thirds of the blood volume lies in the systemic veins, and in an upright person gravity opposes the return of this blood from the legs.\n\nTo describe how the output of the heart is distributed during exercise, investigators studied ten healthy, untrained men aged 20 to 25 years. None of the men smoked or took any medication, and none had exercised during the preceding 24 hours. Each man reported to the laboratory after an overnight fast and rested for 30 minutes, seated on a cycle ergometer, in a room held at 21 °C. He then cycled for 6 minutes at a moderate workload and, after a period of recovery, for 6 minutes at the highest workload he could sustain (maximal exercise). Measurements were made during the final 2 minutes of the rest period and of each bout of exercise. Heart rate was recorded from the electrocardiogram, MAP was measured through a catheter in the radial artery, and CO was measured by an indicator-dilution method, in which a known amount of dye is injected into a central vein and its concentration is followed in arterial blood. Blood flow to individual vascular beds was estimated by Doppler ultrasound and by tracer-clearance techniques. Mean values are shown in Table 1.\n\nThe investigators also measured blood flow to one forearm, which was supported at the level of the heart and did no work during cycling. Forearm blood flow was 40 mL/min at rest, 30 mL/min during moderate exercise, and 20 mL/min during maximal exercise. The concentration of norepinephrine in arterial plasma, used as an index of overall sympathetic nerve activity, was 3 times its resting value during moderate exercise and 10 times its resting value during maximal exercise. The oxygen content of arterial blood did not differ among the three conditions.',
    figure:
      '**Table 1. Mean cardiovascular measurements in ten men at rest and during cycling**\n\n| Measurement | Rest | Moderate exercise | Maximal exercise |\n|---|---|---|---|\n| Heart rate (beats/min) | 75 | 120 | 200 |\n| Cardiac output (L/min) | 6.0 | 12.0 | 20.0 |\n| Mean arterial pressure (mm Hg) | 90 | 100 | 105 |\n| Blood flow, skeletal muscle (mL/min) | 1,200 | 7,600 | 17,000 |\n| Blood flow, heart (mL/min) | 250 | 500 | 1,000 |\n| Blood flow, brain (mL/min) | 750 | 750 | 750 |\n| Blood flow, skin (mL/min) | 500 | 1,500 | 500 |\n| Blood flow, kidneys (mL/min) | 1,100 | 700 | 300 |\n| Blood flow, splanchnic organs (mL/min) | 1,400 | 700 | 300 |\n| Blood flow, other tissues (mL/min) | 800 | 250 | 150 |',
    questions: [
      {
        question:
          'According to Table 1, the rise in cardiac output between moderate and maximal exercise was produced by:',
        options: [
          'a higher heart rate at an unchanged stroke volume.',
          'a higher stroke volume at an unchanged heart rate.',
          'equal percentage rises in heart rate and stroke volume.',
          'a higher heart rate that outweighed a lower stroke volume.',
        ],
        correctAnswer: 0,
        explanation:
          'Stroke volume is CO divided by heart rate: 12,000 mL/min ÷ 120 beats/min = 100 mL in moderate exercise and 20,000 ÷ 200 = 100 mL in maximal exercise. Stroke volume was therefore unchanged, and the whole increase in CO came from heart rate. Heart rate clearly rose, from 120 to 200 beats/min, so it was not constant. Heart rate alone rose by 67%, the same percentage as CO, which leaves no room for an accompanying rise in stroke volume. A lower stroke volume is excluded by the calculation, which gives 100 mL at both workloads.',
        skill: '3B cardiac output (data interpretation)',
      },
      {
        question:
          'From rest to maximal exercise, blood flow to skeletal muscle as a whole rose about 14-fold, whereas blood flow to the inactive forearm fell by half. Which explanation best accounts for both observations?',
        options: [
          'Sympathetic nerves dilate the arterioles of the legs but constrict the arterioles of the arms',
          'Arterioles in leg muscle lack the receptors through which norepinephrine constricts vessels',
          'Sympathetic constriction reaches all muscle, but products of metabolism in active fibers override it',
          'The rise in arterial pressure drives blood preferentially into the largest muscle groups',
        ],
        correctAnswer: 2,
        explanation:
          'Sympathetic vasoconstrictor activity rises throughout the body, which explains the fall in flow to resting muscle, kidneys, and splanchnic organs; in contracting muscle, locally accumulating products of metabolism (for example adenosine, $\\text{K}^+$, $\\text{CO}_2$, and $\\text{H}^+$) relax arteriolar smooth muscle and override that constriction. The sympathetic outflow in exercise is not organized to dilate legs and constrict arms; had the men cranked with their arms, the pattern would have reversed. Leg and arm muscle arterioles have the same α-adrenergic receptors. MAP rose only from 90 to 105 mm Hg, far too little to explain a 14-fold rise in flow, and a pressure rise would increase rather than halve forearm flow.',
        skill: '3B local control of blood flow',
      },
      {
        question:
          'Suppose that the arterioles of the kidneys and splanchnic organs had remained at their resting diameters during maximal exercise while cardiac output was still 20 L/min. Compared with the value in Table 1, which outcome would be expected?',
        options: [
          'A higher MAP, because total peripheral resistance would be greater',
          'A lower MAP, because total peripheral resistance would be smaller',
          'A higher MAP, because stroke volume would be greater',
          'A lower MAP, because stroke volume would be smaller',
        ],
        correctAnswer: 1,
        explanation:
          'Leaving the renal and splanchnic arterioles dilated adds low-resistance parallel pathways, so TPR would be smaller than it actually was; with CO fixed at 20 L/min, MAP (CO × TPR) would be lower. Visceral vasoconstriction is what partly offsets the large fall in resistance of the working muscle. Wider arterioles reduce resistance; they cannot raise it. The stem holds cardiac output constant, so a change in stroke volume cannot be the cause of a change in pressure.',
        skill: '3B determinants of arterial pressure',
      },
      {
        question:
          'In an upright cyclist, cardiac output can remain at 20 L/min only if blood returns from the legs at a matching rate. Which mechanism contributes most to this venous return?',
        options: [
          'Arterial pressure is transmitted through the capillaries to the leg veins without loss',
          'Smooth muscle in the walls of the leg veins contracts in waves that travel toward the heart',
          'Valves in the leg veins close for the duration of exercise, holding blood in the legs',
          'Contracting leg muscles squeeze veins whose one-way valves direct blood toward the heart',
        ],
        correctAnswer: 3,
        explanation:
          'Veins are thin-walled and lie between muscles; each contraction compresses them, and because their valves permit flow only toward the heart, rhythmic contraction pumps blood upward against gravity. Most of the arterial pressure is dissipated across the arterioles and capillaries, so venous pressure is low. Veins do not propel blood by peristaltic waves, although sympathetic venoconstriction reduces their capacity. Valves that stayed closed would trap blood in the legs and reduce venous return.',
        skill: '3B venous return',
      },
      {
        question:
          'The men were studied after an overnight fast. If several of them had instead eaten a large meal an hour before testing, which distortion of the results in Table 1 would be most likely?',
        options: [
          'Resting brain blood flow would have been higher, hiding its constancy during exercise',
          'Resting skin blood flow would have been lower, exaggerating its rise in moderate exercise',
          'Resting splanchnic blood flow would have been higher, exaggerating its fall with exercise',
          'Resting muscle blood flow would have been higher, reducing its apparent rise with exercise',
        ],
        correctAnswer: 2,
        explanation:
          'Digestion and absorption increase blood flow to the stomach, intestine, and liver, so a recent meal would raise the resting splanchnic value and make the decline during exercise appear larger, and more variable among subjects, than it is in the fasted state. Brain blood flow is held nearly constant and is not raised by a meal. A meal does not reduce skin blood flow; if anything, the heat produced by digestion would slightly increase it. Resting muscle blood flow is set by the low metabolic rate of inactive muscle and is not increased by eating.',
        skill: '3B research design: controlling prandial state',
      },
    ],
  },

  // ────────────────────────────────────────────────────────────────────────
  // 10. BIOCHEMISTRY — Nucleotide synthesis, salvage, degradation and antimetabolites (information)
  // ────────────────────────────────────────────────────────────────────────
  {
    id: 'fl6-bb-b-10',
    section: 'bio-biochem',
    discipline: 'biochemistry',
    title: 'Making, Salvaging, and Degrading Nucleotides',
    passageText:
      'Cells obtain nucleotides in two ways: by building them from small precursors (de novo synthesis) and by reusing free bases released when nucleic acids are broken down (salvage). Both routes draw on 5-phosphoribosyl-1-pyrophosphate (PRPP), an activated form of ribose 5-phosphate.\n\nIn de novo purine synthesis, the ring is assembled piece by piece on the ribose phosphate of PRPP from glycine, glutamine, aspartate, $\\text{CO}_2$, and one-carbon units carried by tetrahydrofolate (THF). The first committed enzyme of the pathway, an amidotransferase, is activated by PRPP and inhibited by the purine nucleotides IMP, AMP, and GMP. The product of the pathway is IMP, from which AMP and GMP are made. Salvage is far cheaper: the enzyme HGPRT transfers the ribose phosphate of PRPP directly to the free base hypoxanthine or guanine, yielding IMP or GMP in a single step.\n\nPurine bases that are not salvaged are degraded. Hypoxanthine is oxidized to xanthine and xanthine to uric acid, both reactions being catalyzed by xanthine oxidase, and uric acid is excreted in the urine. Uric acid and its sodium salt are only sparingly soluble; when plasma is supersaturated, needle-shaped crystals of sodium urate can deposit in joints and provoke the painful inflammation of gout. Allopurinol, an analog of hypoxanthine, is used to prevent attacks: xanthine oxidase converts it to a product that remains tightly bound in the active site of the enzyme. Boys who inherit a nonfunctional gene for HGPRT (Lesch–Nyhan syndrome) produce several times the normal amount of uric acid and develop gout in childhood, together with severe neurological abnormalities.\n\nPyrimidines are made differently. The ring is completed first, as orotate, from carbamoyl phosphate and aspartate, and only then is it joined to the ribose phosphate of PRPP and decarboxylated to give UMP, the precursor of the cytosine nucleotides. Deoxyribonucleotides are produced from ribonucleoside diphosphates by ribonucleotide reductase, which replaces the 2′-hydroxyl group of the sugar with a hydrogen atom. The thymine nucleotide is made last: thymidylate synthase converts dUMP to dTMP, taking a one-carbon unit from methylene-THF and releasing dihydrofolate (DHF). DHF must be reduced back to THF by dihydrofolate reductase (DHFR) before it can carry another one-carbon unit. Cells can also salvage the nucleoside thymidine, which thymidine kinase phosphorylates to dTMP.\n\nBecause dividing cells consume nucleotides rapidly, several anticancer drugs are antimetabolites that block these pathways. Methotrexate is a folate analog that inhibits DHFR. 5-Fluorouracil is converted within cells to an analog of dUMP that binds covalently to thymidylate synthase. Hydroxyurea inactivates ribonucleotide reductase. 6-Mercaptopurine, an analog of hypoxanthine, is converted by HGPRT into a nucleotide that inhibits the amidotransferase; the portion of the drug that escapes this conversion is inactivated in the liver by xanthine oxidase.',
    questions: [
      {
        question:
          'Which mechanism best explains the overproduction of uric acid in boys who lack functional HGPRT?',
        options: [
          'Uric acid is retained, because HGPRT normally carries it from the plasma into the urine',
          'Pyrimidine rings are diverted into the reactions that normally degrade purine bases',
          'PRPP is depleted, which frees the amidotransferase from inhibition by its end products',
          'PRPP accumulates and purine nucleotides fall, which speeds de novo purine synthesis',
        ],
        correctAnswer: 3,
        explanation:
          'Without HGPRT, hypoxanthine and guanine cannot be salvaged: the PRPP that salvage would have consumed accumulates and activates the amidotransferase, and the fall in IMP and GMP relieves its feedback inhibition, so de novo synthesis runs faster and the excess purines, like the unsalvaged bases, are degraded to uric acid. HGPRT is a salvage enzyme, not a renal transporter, and the defect is overproduction rather than retention. Pyrimidines are not degraded to uric acid. PRPP rises rather than falls when salvage fails, and depletion of an activator would slow the pathway.',
        skill: '1D purine salvage and feedback regulation',
      },
      {
        question:
          'A patient with leukemia who is being treated with 6-mercaptopurine develops gout and is prescribed allopurinol. If the dose of 6-mercaptopurine is not changed, which outcome is most likely?',
        options: [
          'Loss of the antileukemic effect, because allopurinol prevents activation of the drug by HGPRT',
          'Toxicity from 6-mercaptopurine, because its inactivation in the liver is slowed',
          'Loss of the antileukemic effect, because allopurinol accelerates de novo purine synthesis',
          'Toxicity from allopurinol, because 6-mercaptopurine blocks its excretion in the urine',
        ],
        correctAnswer: 1,
        explanation:
          'Allopurinol inhibits xanthine oxidase, the enzyme that inactivates 6-mercaptopurine, so more of each dose survives to be converted into the active nucleotide, and the unchanged dose becomes an overdose. Allopurinol acts on xanthine oxidase, not on HGPRT, so activation of the drug is not prevented. Allopurinol does not accelerate de novo synthesis; by allowing more hypoxanthine to be salvaged, it tends to slow that pathway. Nothing in the passage suggests that 6-mercaptopurine interferes with the excretion of allopurinol.',
        skill: '1D purine degradation and drug interaction',
      },
      {
        question:
          'Cells treated with hydroxyurea would be expected to arrest in which phase of the cell cycle, and for what reason?',
        options: [
          'S phase, because the supply of DNA precursors is cut off',
          'M phase, because spindle microtubules cannot be assembled',
          'G1 phase, because ribosomal RNA can no longer be transcribed',
          'G2 phase, because the replicated chromosomes cannot condense',
        ],
        correctAnswer: 0,
        explanation:
          'Ribonucleotide reductase is the only source of the deoxyribonucleotides needed for replication, so inactivating it stalls DNA synthesis and cells accumulate in S phase. Spindle assembly depends on tubulin polymerization, which hydroxyurea does not affect. Transcription uses ribonucleotides, whose synthesis does not require the reductase. Chromosome condensation occurs after replication is complete and is not what limits hydroxyurea-treated cells.',
        skill: '1D deoxyribonucleotide synthesis',
      },
      {
        question: 'Thymidylate synthase converts the base of dUMP into thymine by adding:',
        options: [
          'an amino group to carbon 4 of the pyrimidine ring.',
          'a hydroxyl group to carbon 2′ of the deoxyribose.',
          'a methyl group to carbon 5 of the pyrimidine ring.',
          'a methyl group to nitrogen 3 of the pyrimidine ring.',
        ],
        correctAnswer: 2,
        explanation:
          'Thymine is 5-methyluracil, so the one-carbon unit donated by methylene-THF ends up as a methyl group on carbon 5 of the uracil ring. An amino group at carbon 4 in place of the carbonyl oxygen is what distinguishes cytosine from uracil. The sugar of dUMP is already deoxyribose and remains so in dTMP; a 2′-hydroxyl would make it a ribonucleotide. Nitrogen 3 bears the hydrogen that pairs with adenine and is not methylated in thymine.',
        skill: '1D pyrimidine structure and synthesis',
      },
    ],
  },
]

export const FL6_BIO_BIOCHEM_B_DISCRETES: MCATDiscreteQuestion[] = [
  {
    id: 'fl6-bb-b-d01',
    section: 'bio-biochem',
    discipline: 'physiology',
    question:
      'A rapid intravenous infusion of saline increases venous return to a healthy heart. Heart rate and sympathetic stimulation of the ventricle do not change, yet stroke volume rises. Which mechanism best explains the rise?',
    options: [
      'Greater filling prolongs the action potential of each ventricular muscle cell',
      'Greater filling stretches sarcomeres toward a length at which more cross-bridges can form',
      'Greater filling raises aortic pressure, which draws more blood out of the ventricle',
      'Greater filling opens the atrioventricular valves earlier in ventricular systole',
    ],
    correctAnswer: 1,
    explanation:
      'By the Frank–Starling mechanism, a larger end-diastolic volume stretches ventricular fibers toward the sarcomere length at which actin–myosin overlap (and calcium sensitivity) is optimal, so the next contraction is stronger and ejects the extra blood. The effect is intrinsic to the muscle and does not depend on a longer action potential. A higher aortic pressure is an afterload that opposes ejection; it does not draw blood out. The atrioventricular valves are closed during ventricular systole, and their timing does not account for a more forceful beat.',
    skill: '3B Frank–Starling mechanism',
  },
  {
    id: 'fl6-bb-b-d02',
    section: 'bio-biochem',
    discipline: 'physiology',
    question:
      'During labor, pressure of the fetal head on the cervix triggers the release of oxytocin from the posterior pituitary, and oxytocin strengthens uterine contractions. Which feature identifies this loop as positive rather than negative feedback?',
    options: [
      'The hormone is released from the axon terminals of neurons rather than from gland cells',
      'The response returns the stimulus toward the level that existed before labor began',
      'The hormone acts on an organ that lies at a distance from the site of its release',
      'The response increases the stimulus, so the loop intensifies until birth ends it',
    ],
    correctAnswer: 3,
    explanation:
      'Stronger contractions push the fetus harder against the cervix, which increases the very stimulus that evoked oxytocin release; the loop therefore amplifies itself until delivery removes the stretch. Release from axon terminals describes neurosecretion, which occurs in negative-feedback systems as well (for example, ADH). A response that returns the stimulus toward its starting level is the definition of negative feedback. Acting at a distance is true of all endocrine hormones and says nothing about the direction of feedback.',
    skill: '3B positive feedback in parturition',
  },
  {
    id: 'fl6-bb-b-d03',
    section: 'bio-biochem',
    discipline: 'physiology',
    question:
      'A night-shift worker spends the hours from midnight to 4 a.m. under bright light. Compared with a night spent in darkness, which change in hormone secretion would be expected during those hours?',
    options: [
      'Less melatonin from the pineal gland, because light sensed by the retina suppresses its release',
      'More melatonin from the pineal gland, because its cells are stimulated directly by light',
      'Less melatonin from the anterior pituitary, because light inhibits its releasing hormone',
      'More melatonin from the adrenal medulla, because light activates sympathetic nerves',
    ],
    correctAnswer: 0,
    explanation:
      'Melatonin is secreted by the pineal gland in darkness; light detected by the retina is relayed through the hypothalamus (the suprachiasmatic nucleus) to the pineal and suppresses secretion, so bright light at night lowers melatonin. The human pineal is not itself light-sensitive, and light decreases rather than increases its output. Melatonin is not an anterior pituitary hormone and has no hypothalamic releasing hormone. The adrenal medulla secretes epinephrine and norepinephrine, not melatonin.',
    skill: '3B pineal gland and melatonin',
  },
  {
    id: 'fl6-bb-b-d04',
    section: 'bio-biochem',
    discipline: 'genetics',
    question:
      'In guinea pigs, black coat (B) is completely dominant to white (b). To determine the genotype of a black male, a breeder mates him with a white female, and all 7 offspring are black. Which conclusion is best supported?',
    options: [
      'He is certainly BB, because a Bb male cannot sire seven black offspring in a row',
      'He is probably Bb, because a BB male would have sired at least one white offspring',
      'He is probably BB, because a Bb male would give this result less than 1% of the time',
      'His genotype is still unknown, because the female gives a b allele to every offspring',
    ],
    correctAnswer: 2,
    explanation:
      'In a test cross with a bb female, a Bb male produces black and white offspring with equal probability, so seven black offspring in a row would occur with probability $(1/2)^7 = 1/128$, less than 1%; BB is therefore strongly favored though not proven. Certainty is not justified, because a Bb male could produce this litter by chance. A BB male can transmit only B, so every one of his offspring would be black. The female’s b alleles are precisely what make the cross informative: each offspring’s phenotype reveals which allele the male contributed.',
    skill: '1C test cross',
  },
  {
    id: 'fl6-bb-b-d05',
    section: 'bio-biochem',
    discipline: 'genetics',
    question:
      'A point mutation changes the codon GAG to GTG in the coding strand of a gene. How is this substitution classified?',
    options: [
      'A transition, because one purine is replaced by another purine',
      'A transversion, because a purine is replaced by a pyrimidine',
      'A transition, because a purine is replaced by a pyrimidine',
      'A transversion, because one pyrimidine is replaced by another pyrimidine',
    ],
    correctAnswer: 1,
    explanation:
      'Adenine is a purine and thymine is a pyrimidine; a substitution that exchanges a purine for a pyrimidine (or the reverse) is a transversion. A transition keeps the chemical class, purine for purine (A ↔ G) or pyrimidine for pyrimidine (C ↔ T), so the two options that call this change a transition mislabel it. The option describing a pyrimidine-for-pyrimidine change both misidentifies adenine and describes what would be a transition.',
    skill: '1C types of base substitution',
  },
  {
    id: 'fl6-bb-b-d06',
    section: 'bio-biochem',
    discipline: 'biochemistry',
    question:
      'An enzyme that obeys Michaelis–Menten kinetics is assayed at many substrate concentrations, and the assays are then repeated with twice as much enzyme in each tube. How do the measured $V_{max}$ and $K_m$ compare with those of the first set of assays?',
    options: [
      '$V_{max}$ doubles and $K_m$ doubles',
      '$V_{max}$ is unchanged and $K_m$ is halved',
      '$V_{max}$ is unchanged and $K_m$ doubles',
      '$V_{max}$ doubles and $K_m$ is unchanged',
    ],
    correctAnswer: 3,
    explanation:
      '$V_{max}$ equals $k_{cat}$ times the total enzyme concentration, so doubling the enzyme doubles $V_{max}$. $K_m$ is the substrate concentration that gives half of $V_{max}$ and is determined by the rate constants of the enzyme–substrate interaction, so it does not depend on how much enzyme is present. Any option in which $K_m$ changes treats it as a property of the amount of enzyme, and any option in which $V_{max}$ is unchanged ignores the fact that twice as many active sites turn over twice as much substrate at saturation.',
    skill: '1A enzyme concentration and Vmax',
  },
  {
    id: 'fl6-bb-b-d07',
    section: 'bio-biochem',
    discipline: 'microbiology',
    question:
      'An extract of brain tissue from a sheep with a transmissible neurodegenerative disease remains infectious after treatment with nucleases and with doses of ultraviolet light that inactivate viruses, but it loses infectivity after treatment with agents that denature proteins. The infectious agent is most likely:',
    options: [
      'a misfolded protein that causes normal copies of the same protein to misfold.',
      'a viroid consisting of a small circular RNA with no protein coat.',
      'a retrovirus that carries an unusually small RNA genome.',
      'a bacterium that survives harsh treatment by forming endospores.',
    ],
    correctAnswer: 0,
    explanation:
      'Resistance to treatments that destroy nucleic acids, combined with sensitivity to protein denaturation, points to an agent with no genome: a prion, a misfolded protein that converts the normally folded form of the same host protein to the abnormal conformation. A viroid is naked RNA and would be destroyed by nucleases. A retrovirus depends on its RNA genome and would be inactivated by ultraviolet light. Bacteria, including spore formers, contain DNA that ultraviolet light damages, and they do not cause transmissible spongiform disease.',
    skill: '2B prions',
  },
]
