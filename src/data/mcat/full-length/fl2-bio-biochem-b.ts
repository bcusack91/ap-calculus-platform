/**
 * MCAT full-length FORM 2 — Bio/Biochem section, file B (passages 6–10 +
 * discretes 1–7). Authored 2026-09-30 against the AAMC-representative
 * blueprint (scratchpad/mcat-fl/BLUEPRINT.md): 400–600-word passages, mixed
 * experiment/information formats, skill mix ≈ 35/45/10/10, keys that cannot be
 * found by matching passage wording, position- and length-balanced options.
 *
 * KEY INVARIANT: the passage runner does NOT shuffle options — keys were
 * authored position-balanced and explanations reference options by CONTENT.
 *
 * LaTeX renders through KaTeX; backslashes are double-escaped in these strings.
 */
import type { MCATPassage, MCATDiscreteQuestion } from '../types'

export const FL2_BIO_BIOCHEM_B_PASSAGES: MCATPassage[] = [
  // ────────────────────────────────────────────────────────────────────────
  // 6. METABOLISM — Fed vs fasted fuel selection (experiment, table)
  // ────────────────────────────────────────────────────────────────────────
  {
    id: 'fl2-bb-b-06',
    section: 'bio-biochem',
    discipline: 'metabolism',
    title: 'Fuel Selection During Feeding and Prolonged Fasting',
    passageText:
      'The liver adjusts its output of glucose to match the body’s changing supply of fuels. After a meal, glucose absorbed from the intestine is stored as glycogen or converted to fatty acids. Between meals, the liver first releases glucose from glycogen and then increasingly synthesizes it from lactate, glycerol, and amino acids. When fasting continues for days, adipose tissue becomes the dominant fuel source: lipolysis releases free fatty acids (FFAs), which the liver oxidizes to acetyl-CoA, and much of this acetyl-CoA is converted into the ketone bodies acetoacetate and β-hydroxybutyrate (β-HB), which are exported for use by extrahepatic tissues. Insulin and glucagon coordinate these transitions, with insulin favoring storage and glucagon favoring hepatic glucose release.\n\nInvestigators studied eight healthy adults under three conditions: 2 hours after a mixed meal, after a 12-hour overnight fast, and after a 72-hour fast during which only water was consumed. For 3 days before each study, the volunteers ate a weight-maintaining diet of fixed composition, and all measurements were made at rest. In each condition they measured plasma metabolites and hormones and determined the rate of hepatic glucose output (HGO) by infusing a trace amount of glucose labeled with a stable isotope and measuring how much the label was diluted by unlabeled glucose entering the blood from the liver. The fraction of HGO derived from gluconeogenesis, rather than from glycogenolysis, was estimated from the labeling pattern of plasma glucose after the volunteers drank a small amount of deuterium-labeled water. The results are shown in Table 1.\n\nThe investigators then studied a 4-year-old child with a confirmed deficiency of medium-chain acyl-CoA dehydrogenase (MCAD), an enzyme that catalyzes the first step of mitochondrial β-oxidation for fatty acyl-CoAs of 6 to 12 carbons. Under close supervision, the child fasted for 24 hours, at which point plasma glucose was 42 mg/dL, insulin 2 μU/mL, glucagon 160 pg/mL, FFA 2.1 mM, and β-HB 0.3 mM. In healthy children of the same age, a 24-hour fast typically lowers plasma glucose to about 70 mg/dL and raises β-HB to between 1.5 and 2.5 mM. The child’s symptoms resolved promptly when glucose was given intravenously. MCAD deficiency is inherited as an autosomal recessive trait, and affected children are often entirely well between episodes, because regular meals supply dietary glucose and keep hepatic glycogen replenished. Symptoms usually appear only when an infection, vomiting, or a missed meal prevents normal feeding for many hours.\n\nBecause liver glycogen is expected to be nearly exhausted after 24 hours without food, the investigators hypothesized that the child’s hypoglycemia reflected a failure of gluconeogenesis rather than a failure to mobilize glycogen, and they proposed a follow-up study to test this hypothesis.',
    figure:
      '**Table 1. Mean plasma values and hepatic glucose output in eight healthy adults**\n\n| Measurement | 2 h after meal | 12-h fast | 72-h fast |\n|---|---|---|---|\n| Plasma glucose (mg/dL) | 125 | 85 | 65 |\n| Insulin (μU/mL) | 55 | 8 | 3 |\n| Glucagon (pg/mL) | 50 | 90 | 140 |\n| FFA (mM) | 0.2 | 0.6 | 1.4 |\n| β-HB (mM) | 0.05 | 0.2 | 3.5 |\n| HGO (mg glucose/kg/min) | 0.6 | 2.0 | 1.5 |\n| Fraction of HGO from gluconeogenesis | 0.40 | 0.50 | 0.90 |',
    questions: [
      {
        question:
          'Based on Table 1, the rate at which the liver released glucose derived from glycogen after the 72-hour fast was approximately what percentage of the corresponding rate after the 12-hour fast?',
        options: ['5%', '15%', '50%', '75%'],
        correctAnswer: 1,
        explanation:
          'Glucose from glycogenolysis equals HGO times the fraction NOT from gluconeogenesis. After 12 hours: 2.0 × (1 − 0.50) = 1.0 mg/kg/min. After 72 hours: 1.5 × (1 − 0.90) = 0.15 mg/kg/min, which is 15% of 1.0. The 75% value compares total HGO (1.5 vs 2.0) without separating the two sources. The 50% value is the 12-hour gluconeogenic fraction, not a comparison between conditions. The 5% value would require the 72-hour glycogenolytic fraction to be about 0.03 rather than 0.10.',
        skill: '1D glycogenolysis vs gluconeogenesis',
      },
      {
        question:
          'Based on the hormone concentrations in Table 1, which hepatic enzyme would be expected to show the greatest increase in activity after the 72-hour fast relative to its activity 2 hours after the meal?',
        options: [
          'Acetyl-CoA carboxylase',
          'Glycogen synthase',
          'Pyruvate kinase',
          'Fructose-1,6-bisphosphatase',
        ],
        correctAnswer: 3,
        explanation:
          'At 72 hours glucagon is high and insulin is very low, so hepatic PKA is active. PKA phosphorylates the bifunctional PFK-2/FBPase-2 enzyme, lowering fructose 2,6-bisphosphate; this relieves inhibition of fructose-1,6-bisphosphatase and stimulates gluconeogenesis, consistent with the 0.90 gluconeogenic fraction. Glycogen synthase is inactivated by PKA-dependent phosphorylation when glucagon is high. Acetyl-CoA carboxylase, which commits acetyl-CoA to fatty acid synthesis, is phosphorylated and inhibited in the fasted state. Liver pyruvate kinase is phosphorylated and inhibited by PKA, which prevents the futile cycling of newly formed phosphoenolpyruvate back to pyruvate.',
        skill: '1D hormonal regulation of metabolism',
      },
      {
        question:
          'Between the 12-hour and 72-hour fasts, glucagon rose and insulin fell, yet total hepatic glucose output decreased. Which of the following best explains this decrease?',
        options: [
          'Ketone bodies supplied part of the fuel used by extrahepatic tissues, so less glucose had to be produced',
          'Elevated free fatty acids inhibited the binding of glucagon to hepatocytes, blunting the hormone’s stimulation of glucose production',
          'The fall in insulin removed the stimulation that insulin normally provides to the gluconeogenic enzymes of the liver',
          'Glycogen phosphorylase was inactivated by the rising glucagon level, and gluconeogenesis could not fully compensate',
        ],
        correctAnswer: 0,
        explanation:
          'By 72 hours β-HB has risen to 3.5 mM, and tissues such as the brain and heart oxidize ketone bodies in place of much of the glucose they would otherwise consume. Glucose demand therefore falls, plasma glucose is defended at a lower level, and the liver needs to release less glucose even though its gluconeogenic machinery is fully activated; absolute gluconeogenic output actually rose (from 1.0 to 1.35 mg/kg/min). Free fatty acids do not block glucagon receptors. Insulin inhibits rather than stimulates gluconeogenesis, so its fall cannot reduce glucose output. Glucagon activates, not inactivates, glycogen phosphorylase; glycogenolysis fell because glycogen stores were depleted.',
        skill: '1D fuel use in prolonged fasting',
      },
      {
        question:
          'Which of the following best accounts for both the low plasma glucose and the low β-HB concentration observed in the child?',
        options: [
          'Excessive insulin secretion suppressed both hepatic ketogenesis and hepatic glucose release during the fast',
          'Impaired lipolysis in adipose tissue left the liver without fatty acid substrate for ketogenesis and gluconeogenesis',
          'Reduced production of acetyl-CoA from fatty acids limited ketogenesis and deprived gluconeogenesis of the acetyl-CoA and ATP it requires',
          'Insufficient glucagon secretion failed to activate the hepatic enzymes of ketogenesis and gluconeogenesis',
        ],
        correctAnswer: 2,
        explanation:
          'With β-oxidation blocked at the medium-chain step, the child’s liver cannot generate acetyl-CoA from fatty acids. Ketone bodies are made from acetyl-CoA, so β-HB stays low despite abundant FFA. Gluconeogenesis also suffers: acetyl-CoA is the allosteric activator of pyruvate carboxylase, and fatty acid oxidation normally supplies the ATP and NADH that gluconeogenesis consumes, while tissues that cannot oxidize fatty acids keep drawing on glucose. The child’s FFA of 2.1 mM is high, which rules out impaired lipolysis. Insulin of 2 μU/mL is very low, ruling out insulin excess, and glucagon of 160 pg/mL is elevated, ruling out glucagon deficiency.',
        skill: '1D fatty acid oxidation and ketogenesis',
      },
      {
        question:
          'Which of the following findings in the proposed follow-up study would most strongly support the investigators’ hypothesis about the cause of the child’s hypoglycemia?',
        options: [
          'A liver biopsy taken after a 24-hour fast shows a lower glycogen content than biopsies from fasted healthy children',
          'An injection of glucagon given 4 hours after a meal raises the child’s plasma glucose as much as it does in healthy children',
          'The child’s plasma FFA concentration rises during fasting in proportion to the fall in plasma insulin',
          'After labeled alanine is infused, far less label appears in the child’s plasma glucose than in that of fasted healthy children',
        ],
        correctAnswer: 3,
        explanation:
          'The hypothesis is that gluconeogenesis, not glycogen mobilization, has failed. Alanine is a major gluconeogenic precursor; if labeled alanine is converted to labeled plasma glucose much less efficiently in the child than in fasted healthy children, the gluconeogenic pathway is directly shown to be impaired. A low glycogen content after 24 hours would support the alternative explanation that glycogen depletion caused the hypoglycemia. A normal glucose response to glucagon shortly after a meal shows that glycogenolysis works but says nothing about gluconeogenesis. A normal rise in FFA reflects intact lipolysis, which the 24-hour data already demonstrate, and does not test gluconeogenesis.',
        skill: '1D research design in metabolism',
      },
    ],
  },

  // ────────────────────────────────────────────────────────────────────────
  // 7. PHYSIOLOGY — Renal glucose handling with an SGLT2 inhibitor (experiment, table)
  // ────────────────────────────────────────────────────────────────────────
  {
    id: 'fl2-bb-b-07',
    section: 'bio-biochem',
    discipline: 'physiology',
    title: 'Renal Handling of Filtered Glucose',
    passageText:
      'Glucose is freely filtered at the glomerulus, so the amount entering the tubules each minute, the filtered load, equals the glomerular filtration rate (GFR) multiplied by the plasma glucose concentration. In a healthy person essentially all of this glucose is returned to the blood by the proximal tubule. Uptake across the apical membrane of the tubular epithelial cells is carried out by sodium–glucose cotransporters, which move glucose into the cell together with $\\text{Na}^+$ moving down its electrochemical gradient. Two isoforms are present. SGLT2, located in the early proximal tubule, has a high capacity and relatively low affinity and normally recovers about 90% of the filtered glucose. SGLT1, located in the later proximal tubule, has a lower capacity and higher affinity and recovers most of the remainder. Glucose then leaves the cells across the basolateral membrane through facilitative GLUT transporters and returns to the peritubular capillaries. Because the number of transporters is finite, reabsorption cannot rise indefinitely: once the tubules are handling glucose at their maximal rate, called the transport maximum ($T_m$), any further increase in the filtered load appears in the urine.\n\nTo characterize this system, investigators infused glucose into eight healthy volunteers to hold plasma glucose at each of five steady concentrations for 60 minutes, adjusting the infusion rate every 5 minutes. GFR was measured by inulin clearance and remained 125 mL/min throughout. Urine was collected during the final 30 minutes of each step, and the rate of urinary glucose excretion was calculated. The entire protocol was repeated on a separate day, 2 hours after each volunteer had taken a single oral dose of a selective SGLT2 inhibitor. The inhibitor is filtered at the glomerulus and binds the glucose-binding site of SGLT2 from the tubular lumen; at the dose given, it has no measurable effect on SGLT1. Table 1 shows the mean results.\n\nDuring the control study, urine flow remained close to 1 mL/min at the first four steps and rose to 2 mL/min at the highest plasma glucose concentration. During the inhibitor study, urine flow was already 2.5 mL/min at the first step and exceeded 5 mL/min at the highest step, and urinary sodium excretion rose in parallel with urine flow. The investigators noted that plasma glucose in people with poorly controlled diabetes mellitus commonly reaches 300 to 400 mg/dL, and that selective SGLT2 inhibitors are prescribed to such patients to lower plasma glucose. In treated patients whose plasma glucose has fallen back toward the normal range, the drugs typically raise urinary glucose loss by 50 to 80 grams per day, roughly 200 to 320 kcal of energy; at the much higher plasma levels of the infusion study the loss is several times larger.',
    figure:
      '**Table 1. Glucose filtration and excretion at five steady plasma glucose concentrations (GFR = 125 mL/min)**\n\n| Plasma glucose (mg/dL) | Filtered load (mg/min) | Urinary glucose excretion, control (mg/min) | Urinary glucose excretion, SGLT2 inhibitor (mg/min) |\n|---|---|---|---|\n| 100 | 125 | 0 | 45 |\n| 200 | 250 | 15 | 170 |\n| 300 | 375 | 60 | 295 |\n| 400 | 500 | 130 | 420 |\n| 500 | 625 | 250 | 545 |',
    questions: [
      {
        question:
          'Based on Table 1, the maximal rate at which the kidneys of the volunteers reabsorbed glucose in the absence of the inhibitor was closest to:',
        options: ['125 mg/min', '250 mg/min', '375 mg/min', '500 mg/min'],
        correctAnswer: 2,
        explanation:
          'Reabsorption equals filtered load minus excretion. In the control study this difference is 125, 235, 315, 370, and 375 mg/min at the five steps; it stops increasing between the 400 and 500 mg/dL steps, so the transport maximum is about 375 mg/min. The 125 mg/min value is the reabsorption at the lowest step, where the system is far from saturated. The 250 mg/min value is the excretion rate at the highest step, not the amount reabsorbed. The 500 mg/min value is the filtered load at 400 mg/dL, of which 130 mg/min was excreted.',
        skill: '3B renal transport maximum',
      },
      {
        question:
          'Which conclusion about glucose reabsorption during the inhibitor study is best supported by Table 1?',
        options: [
          'Reabsorption rose in step with the filtered load, so the transporters still working were far from saturation at every step',
          'Reabsorption stayed near 80 mg/min at every step, so the transporters still working were already saturated even at the lowest step',
          'Reabsorption stayed a constant fraction of the filtered load, so the inhibitor lowered the affinity of every transporter equally',
          'Reabsorption fell to nearly zero at every step, so SGLT2 accounts for essentially all glucose reabsorption along the nephron',
        ],
        correctAnswer: 1,
        explanation:
          'Reabsorption equals filtered load minus excretion. With the inhibitor this is 125 − 45, 250 − 170, 375 − 295, 500 − 420, and 625 − 545, or 80 mg/min at every step. A rate that does not rise as delivery rises means the transport that remains (SGLT1, which the inhibitor spares) was already at its maximal rate at 100 mg/dL, as expected for a low-capacity transporter receiving the glucose that SGLT2 would normally have removed. Reabsorption did not rise in step with the filtered load, which increased fivefold. The fraction reabsorbed fell from about 64% to about 13%, so it was not constant. A steady 80 mg/min was still recovered, so reabsorption did not fall to zero.',
        skill: '3B renal transport data',
      },
      {
        question:
          'The rise in urine flow rate observed during the inhibitor study is best explained by which of the following?',
        options: [
          'Glucose remaining in the tubular fluid raised its osmolarity, reducing the reabsorption of water along the nephron',
          'The inhibitor blocked the action of antidiuretic hormone on the collecting duct, reducing its permeability to water',
          'The inhibitor dilated the afferent arterioles, raising GFR and the volume of filtrate formed each minute',
          'Glucose retained inside the tubular cells drew water from the blood into the cells and then into the tubular lumen',
        ],
        correctAnswer: 0,
        explanation:
          'Water reabsorption in the proximal tubule follows solute reabsorption osmotically. When glucose is left in the lumen, it holds water there, so less water (and less of the sodium that would have followed) is reabsorbed and urine flow rises: an osmotic diuresis. The same mechanism explains the modest rise in control urine flow at the highest step, where 250 mg/min of glucose escaped reabsorption. Nothing in the study indicates a change in ADH signaling, and a collecting-duct effect would not explain the parallel rise in sodium excretion. GFR was held constant at 125 mL/min, so an afferent arteriolar effect is excluded. The inhibitor prevents glucose from entering the cells, so it cannot accumulate inside them.',
        skill: '3B osmotic diuresis',
      },
      {
        question:
          'If a drug that inhibits the $\\text{Na}^+$/$\\text{K}^+$-ATPase were applied to the basolateral surface of proximal tubule cells, glucose reabsorption would be expected to decrease because:',
        options: [
          'glucose exit across the basolateral membrane requires ATP hydrolysis by this pump',
          'the pump normally cotransports glucose with $\\text{K}^+$ into the cell from the tubular fluid',
          'loss of pump activity would raise tubular flow so that glucose would not have time to be reabsorbed',
          'the $\\text{Na}^+$ gradient that drives glucose entry across the apical membrane would dissipate',
        ],
        correctAnswer: 3,
        explanation:
          'Sodium–glucose cotransport is secondary active transport: the energy comes from $\\text{Na}^+$ flowing down a gradient that the basolateral $\\text{Na}^+$/$\\text{K}^+$-ATPase maintains by pumping $\\text{Na}^+$ out of the cell. If the pump stops, intracellular $\\text{Na}^+$ rises, the gradient collapses, and the cotransporters can no longer accumulate glucose. Basolateral glucose exit is by facilitated diffusion through GLUT proteins and needs no ATP. The pump moves $\\text{Na}^+$ and $\\text{K}^+$ only and is on the basolateral, not the apical, membrane. Any change in tubular flow would be a secondary consequence, not the reason transport fails.',
        skill: '3B secondary active transport',
      },
    ],
  },

  // ────────────────────────────────────────────────────────────────────────
  // 8. MOLECULAR BIOLOGY — Protein targeting, glycosylation, ubiquitin–proteasome (information)
  // ────────────────────────────────────────────────────────────────────────
  {
    id: 'fl2-bb-b-08',
    section: 'bio-biochem',
    discipline: 'molecular biology',
    title: 'Sorting and Quality Control of Newly Made Proteins',
    passageText:
      'Nearly every protein in a eukaryotic cell begins its synthesis on a ribosome in the cytosol, yet many must end up inside a membrane-bounded compartment, in a membrane, or outside the cell. Their destinations are specified by short stretches of amino acids within the polypeptide, called sorting signals, that are recognized by receptor proteins.\n\nProteins destined for the endoplasmic reticulum (ER), the Golgi apparatus, lysosomes, the plasma membrane, or secretion carry a signal sequence of roughly 15 to 30 amino acids, most of them hydrophobic, at or near the amino terminus. As the signal sequence emerges from the exit tunnel of the ribosome, it is bound by the signal recognition particle (SRP), a ribonucleoprotein that pauses elongation. SRP then docks with its receptor on the ER membrane and hands the ribosome to a protein-conducting channel, the translocon. Elongation resumes, and the growing chain is threaded through the channel into the ER lumen, where signal peptidase usually removes the signal sequence. If the polypeptide also contains a second stretch of about 20 hydrophobic residues, a stop-transfer sequence, that segment moves sideways out of the channel into the lipid bilayer, and the portion of the chain synthesized afterward remains in the cytosol.\n\nWithin the ER lumen, a preassembled oligosaccharide of 14 sugars is transferred as a unit to the side-chain nitrogen of asparagine residues in the sequence Asn-X-Ser/Thr, a process called N-linked glycosylation, and disulfide bonds form between cysteine residues. Chaperones bind incompletely folded chains and hold them in the ER until folding is complete. Properly folded proteins travel in vesicles to the Golgi apparatus, where their oligosaccharides are trimmed and modified. Soluble hydrolases destined for lysosomes are recognized in the early Golgi by an enzyme that adds phosphate to mannose residues on their oligosaccharides. Receptors in the late Golgi bind mannose 6-phosphate and package the tagged hydrolases into vesicles bound for endosomes, which mature into lysosomes. Soluble proteins that carry no such tag or other retention signal are secreted by default.\n\nProteins that fail to fold in the ER are not allowed to leave. After repeated unsuccessful rounds of chaperone binding, they are moved back across the ER membrane into the cytosol, where they are marked by attachment of ubiquitin, a small protein of 76 amino acids. The carboxyl terminus of ubiquitin is joined to the side chain of a lysine in the target protein through the sequential action of three enzymes, E1 (activating), E2 (conjugating), and E3 (ligase). Further ubiquitins are then attached to a lysine within the previously added ubiquitin, building a chain. A chain of four or more ubiquitins linked through lysine 48 is recognized by the 26S proteasome, a barrel-shaped protease complex that uses ATP to unfold the substrate, releases the ubiquitins for reuse, and cuts the substrate into short peptides. The same system degrades damaged and short-lived cytosolic proteins, including many regulators of the cell cycle.\n\nProteins destined for mitochondria, peroxisomes, or the nucleus follow a different route: they are completed in the cytosol and imported afterward, each guided by its own type of sorting signal.',
    questions: [
      {
        question:
          'Fibroblasts from a patient lack the Golgi enzyme that adds phosphate to mannose residues on the oligosaccharides of lysosomal hydrolases. Compared with normal fibroblasts, these cells would most likely show:',
        options: [
          'hydrolases retained in the ER lumen, because proteins without the phosphate tag cannot be packaged into vesicles',
          'hydrolases degraded by proteasomes in the cytosol, because proteins lacking their sorting tag are handled as misfolded',
          'hydrolases secreted into the culture medium, while undigested material builds up in the cells’ lysosomes',
          'hydrolases delivered normally to lysosomes, because soluble proteins reach lysosomes by default when they lack a tag',
        ],
        correctAnswer: 2,
        explanation:
          'Without mannose 6-phosphate, the hydrolases are not bound by the receptors in the late Golgi, so they follow the default pathway for soluble proteins and are secreted. The lysosomes, deprived of their enzymes, fill with undigested material (the pattern seen in I-cell disease). The hydrolases are already folded and have left the ER before the tag would be added in the Golgi, so ER retention and proteasomal degradation, which apply to misfolded proteins, do not follow. Secretion, not lysosomal delivery, is the default fate of a soluble protein that reaches the Golgi without a sorting signal.',
        skill: '1B protein targeting',
      },
      {
        question:
          'A single-pass protein of the plasma membrane is made by the route described in the passage: its amino-terminal signal sequence is removed in the ER, and a stop-transfer sequence lies near the middle of the chain. Once the protein reaches the plasma membrane, its amino terminus and its N-linked oligosaccharides will be located:',
        options: [
          'both on the extracellular side of the membrane',
          'both on the cytosolic side of the membrane',
          'amino terminus cytosolic, oligosaccharides extracellular',
          'amino terminus extracellular, oligosaccharides cytosolic',
        ],
        correctAnswer: 0,
        explanation:
          'The part of the chain made before the stop-transfer sequence, which includes the amino terminus, is threaded into the ER lumen, and N-linked glycosylation takes place only in the lumen, so both lie on the lumenal side. When a transport vesicle fuses with the plasma membrane, the inner (lumenal) face of the vesicle membrane becomes the outer face of the cell, so both end up extracellular. The cytosolic option ignores that the amino-terminal portion was translocated. The two mixed options place the amino terminus and the glycans on opposite sides, but both were in the same compartment, the lumen, from the start.',
        skill: '1B membrane protein topology',
      },
      {
        question:
          'In a cell engineered so that all of its ubiquitin carries arginine in place of lysine 48, a normally short-lived cytosolic protein would most likely be:',
        options: [
          'left without any attached ubiquitin and degraded at its usual rate',
          'marked with ubiquitin but degraded much more slowly than usual',
          'marked with ubiquitin and degraded even more rapidly than usual',
          'left without any attached ubiquitin and degraded in lysosomes instead',
        ],
        correctAnswer: 1,
        explanation:
          'The first ubiquitin is joined through its own carboxyl terminus to a lysine of the target protein, which the mutation does not change, so the target can still be marked. What cannot form is a chain linked through lysine 48, the signal the proteasome recognizes, so the protein is degraded far more slowly and accumulates. Attachment to the target does not require lysine 48 of ubiquitin, so the options in which the protein carries no ubiquitin are wrong, and nothing in the passage suggests a switch to lysosomal degradation. Loss of the proteasome-targeting chain cannot speed degradation.',
        skill: '1B ubiquitin–proteasome system',
      },
      {
        question:
          'Investigators suspect that a mutant form of a secreted enzyme fails to fold and is destroyed by the quality-control pathway described in the passage. They block all new protein synthesis and then measure the amount of the mutant enzyme remaining inside the cells over 4 hours. Which additional result would most directly support their hypothesis?',
        options: [
          'Without other treatment, the mutant enzyme disappears from the cells faster than the normal enzyme does',
          'With a proteasome inhibitor present, the normal enzyme is secreted into the medium more slowly than usual',
          'With a proteasome inhibitor present, the mutant enzyme disappears from the cells more slowly than usual',
          'Without other treatment, the mRNA encoding the mutant enzyme is less abundant than that of the normal enzyme',
        ],
        correctAnswer: 2,
        explanation:
          'Loss of the mutant enzyme from the cells could reflect secretion, lysosomal breakdown, or proteasomal breakdown. Showing that a proteasome inhibitor slows its disappearance ties the loss specifically to the proteasome, as the ER quality-control pathway predicts. Faster disappearance than the normal enzyme, on its own, cannot distinguish degradation from secretion or identify the route of degradation. The secretion rate of the normal enzyme says nothing about the fate of the mutant. mRNA abundance affects synthesis, which is blocked during the measurement, not degradation.',
        skill: '1B research design',
      },
    ],
  },

  // ────────────────────────────────────────────────────────────────────────
  // 9. MICROBIOLOGY — Growth curve, bactericidal vs bacteriostatic drugs, plasmid (experiment, chart)
  // ────────────────────────────────────────────────────────────────────────
  {
    id: 'fl2-bb-b-09',
    section: 'bio-biochem',
    discipline: 'microbiology',
    title: 'Bacterial Growth Under Two Antibiotics',
    passageText:
      'Bacteria transferred from a dense, nongrowing culture into fresh medium do not begin dividing at once. After this initial delay, the population doubles at a constant interval, the generation time, so that the logarithm of the number of cells rises linearly with time, until growth slows and the number of viable cells levels off. Antibiotics can alter this pattern in different ways.\n\nAmpicillin, a β-lactam antibiotic, binds and inactivates the transpeptidases that form cross-links between the peptide chains of peptidoglycan, the polymer that gives the bacterial cell wall its strength. Tetracycline binds the 30S ribosomal subunit and prevents aminoacyl-tRNAs from occupying the A site. Human cells contain no peptidoglycan and no 30S subunits in their cytosol, which accounts for much of the selective toxicity of these drugs. Genes that confer resistance to antibiotics are often carried on plasmids, small circular DNA molecules that replicate independently of the bacterial chromosome and are passed to daughter cells at division.\n\nInvestigators studied a strain of *Escherichia coli* that carries no plasmids and is sensitive to both drugs. An overnight culture was diluted into fresh nutrient broth at 37°C, and every hour the number of viable cells was measured by spreading diluted samples on drug-free agar plates and counting the colonies that formed (colony-forming units, CFU). Because the plates contained no drug, a cell was counted as viable if it could divide once the drug was removed. At 2 hours, the culture was split into three flasks: one received no drug, one received ampicillin, and one received tetracycline, each drug at ten times the lowest concentration that prevents visible growth of this strain. The same protocol was carried out with a derivative of the strain that carries pAR1, a plasmid bearing a gene that confers ampicillin resistance by a mechanism that had not yet been characterized; this culture received ampicillin at 2 hours. The results are shown in Figure 1.\n\nIn a final experiment, the pAR1 strain was grown for 60 generations in broth without any antibiotic, with repeated dilution into fresh broth to keep the cells growing. Samples were spread on drug-free agar, and 100 colonies from each sample were transferred to agar containing ampicillin. The fraction of colonies able to grow on ampicillin fell steadily, reaching 0.62 after 60 generations. Every colony tested from a parallel culture kept in ampicillin for the same period grew on ampicillin agar. No plasmid DNA could be isolated from any of the colonies that failed to grow on ampicillin.',
    chart: {
      title: 'Figure 1. Viable cell count of E. coli cultures; drugs were added at 2 h',
      kind: 'line',
      xLabel: 'Time',
      xUnit: 'h',
      yLabel: 'Viable cells, log₁₀ CFU/mL',
      xValues: [0, 1, 2, 3, 4, 5, 6, 7],
      yValues: [6.0, 6.2, 6.8, 7.7, 8.6, 9.3, 9.5, 9.5],
      seriesLabel: 'Sensitive strain, no drug',
      comparisonSeries: [
        { label: 'Sensitive strain + ampicillin', yValues: [6.0, 6.2, 6.8, 6.9, 5.7, 4.5, 3.4, 2.8] },
        { label: 'Sensitive strain + tetracycline', yValues: [6.0, 6.2, 6.8, 6.9, 6.9, 6.9, 6.8, 6.8] },
        { label: 'pAR1 strain + ampicillin', yValues: [6.0, 6.2, 6.8, 7.6, 8.5, 9.2, 9.4, 9.5] },
      ],
      annotations: [{ xIndex: 2, label: 'Drugs added' }],
    },
    questions: [
      {
        question:
          'Based on Figure 1, the generation time of the untreated culture during its period of most rapid growth was closest to:',
        options: ['10 min', '20 min', '40 min', '60 min'],
        correctAnswer: 1,
        explanation:
          'Between 2 and 4 hours the untreated count rises from $10^{6.8}$ to $10^{8.6}$ CFU/mL, 1.8 log units in 2 hours, or 0.9 log unit per hour. One doubling adds $\\log_{10} 2 \\approx 0.30$ log unit, so the culture doubles three times per hour, once every 20 minutes. A 60-minute generation time would give only 0.3 log unit per hour, and a 40-minute time about 0.45 log unit per hour; both are far slower than the plotted rise. A 10-minute time would require 1.8 log units per hour, twice the observed slope.',
        skill: '2B bacterial growth data',
      },
      {
        question:
          'Which of the following best explains the shape of the untreated curve between 5 and 7 hours?',
        options: [
          'Nutrients ran out and wastes built up, so cell division slowed until it was balanced by cell death',
          'Cells were synthesizing the enzymes and ribosomes needed to use the fresh broth before resuming division',
          'Most cells converted into dormant endospores, which do not form colonies when they are spread on agar',
          'Cells had used up a fixed number of divisions, because their chromosome ends shorten at each replication',
        ],
        correctAnswer: 0,
        explanation:
          'The leveling off at about $10^{9.5}$ CFU/mL is the stationary phase: in a closed flask, nutrients run low and metabolic wastes build up, so the rate of division falls until it roughly equals the rate of cell death. Adjusting to fresh medium by making new enzymes and ribosomes describes the lag at the start of the curve, not its end. *E. coli* does not form endospores, and spores would in any case germinate and form colonies on the plates. Bacterial chromosomes are circular, so they do not shorten at their ends with each round of replication.',
        skill: '2B bacterial growth phases',
      },
      {
        question:
          'If ampicillin and tetracycline had both been added to the sensitive strain at 2 hours, the viable count at 7 hours would most likely have been:',
        options: [
          'close to the ampicillin-alone value, because each drug acts on its own target and ampicillin alone does the killing',
          'far below the ampicillin-alone value, because blocking two unrelated targets at once would kill the cells faster',
          'close to the tetracycline-alone value, because ampicillin kills only those cells that are actively enlarging their wall',
          'close to the untreated value, because tetracycline would prevent ampicillin from crossing the outer membrane of the cell',
        ],
        correctAnswer: 2,
        explanation:
          'Ampicillin kills by blocking cross-linking while a growing cell continues to open and extend its wall, so the weakened wall ruptures. Figure 1 shows that tetracycline stops growth without killing (the count stays near $10^{6.9}$), so in its presence little new wall is being made and ampicillin has no active process to disrupt; the count would stay near the tetracycline-alone value. This antagonism means the drugs do not simply act independently or add their effects. Nothing in the passage suggests that tetracycline blocks ampicillin entry, and even then the count could not rise toward the untreated value while protein synthesis is blocked.',
        skill: '2B antibiotic mechanisms',
      },
      {
        question:
          'Which additional experiment would best determine whether pAR1 confers resistance by destroying ampicillin rather than by altering the drug’s target?',
        options: [
          'Expose the pAR1 strain to ten times more ampicillin than before and test whether its viable count still rises',
          'Expose the pAR1 strain to tetracycline instead of ampicillin and test whether its viable count still rises',
          'Mix pAR1 DNA with the plasmid-free strain and test whether any of the cells then become resistant to ampicillin',
          'Grow the pAR1 strain in ampicillin broth, filter out the cells, and test whether the broth still kills the sensitive strain',
        ],
        correctAnswer: 3,
        explanation:
          'If the plasmid gene product destroys ampicillin, broth in which the resistant strain has grown will have lost its activity and will no longer kill the sensitive strain; if resistance comes from an altered target inside the resistant cells, the filtered broth will still contain active drug and will kill sensitive cells. A higher ampicillin dose could be tolerated or not under either mechanism, so it does not distinguish them. Testing tetracycline examines a different drug and says nothing about how ampicillin resistance works. Transferring pAR1 DNA would show that the plasmid carries resistance, which is already known, not how the resistance works.',
        skill: '2B research design',
      },
      {
        question: 'Which of the following best explains the results of the final experiment?',
        options: [
          'The resistance gene moved from the plasmid into the chromosome, where it was expressed too weakly to protect the cell',
          'Without ampicillin present, the resistance gene was switched off, so the plasmid-bearing cells could not grow on ampicillin',
          'Plasmid-free cells arose occasionally at division and, lacking the extra DNA, outgrew the plasmid-bearing cells',
          'The plasmid was passed to other cells by conjugation, a transfer that leaves the donor cell without its own copy',
        ],
        correctAnswer: 2,
        explanation:
          'The sensitive colonies contained no plasmid, so the plasmid itself was lost. When a cell occasionally divides without passing on a copy, the plasmid-free daughter is spared the cost of replicating and expressing the plasmid; without ampicillin to kill them, such cells gradually increase in the population. In ampicillin, plasmid-free cells are killed, so every surviving colony kept resistance. Silencing of the gene is ruled out because the sensitive colonies had no plasmid at all, and a chromosomal gene expressed too weakly would not explain the steady loss of the plasmid itself. Conjugative transfer copies the plasmid, so the donor keeps its own copy.',
        skill: '2B plasmids and selection',
      },
    ],
  },

  // ────────────────────────────────────────────────────────────────────────
  // 10. BIOCHEMISTRY — Glycogen structure, synthesis and breakdown (information)
  // ────────────────────────────────────────────────────────────────────────
  {
    id: 'fl2-bb-b-10',
    section: 'bio-biochem',
    discipline: 'biochemistry',
    title: 'Glycogen: Structure, Synthesis, and Mobilization',
    passageText:
      'Glycogen, the storage polysaccharide of animal cells, is most abundant in the liver and in skeletal muscle. Each glycogen particle is built on glycogenin, a protein that attaches a glucose to the hydroxyl group of one of its own tyrosine residues and then extends it into a short primer chain. Within the chains, glucose residues are joined by α(1→4) glycosidic bonds, in which carbon 1 (the anomeric carbon) of one residue, fixed in the α configuration, is linked through an oxygen atom to carbon 4 of the next. The single chain end anchored to glycogenin is called the reducing end; every other chain end is a nonreducing end, with a free hydroxyl group on carbon 4. About every 8 to 12 residues, a chain branches: a glucose residue is attached through an α(1→6) bond to carbon 6 of a residue in another chain.\n\nTo be stored, glucose 6-phosphate is first converted by phosphoglucomutase to glucose 1-phosphate, which reacts with UTP to form UDP-glucose and pyrophosphate. Rapid hydrolysis of the pyrophosphate makes this activation step effectively irreversible. Glycogen synthase then transfers the glucose of UDP-glucose to the carbon 4 hydroxyl of a nonreducing end, forming a new α(1→4) bond. Glycogen synthase can neither start a new chain nor form α(1→6) bonds. When a chain has grown to about 11 residues, branching enzyme removes a segment of about 7 residues from its end and reattaches it through an α(1→6) bond to a residue at least 4 residues away from any existing branch point.\n\nGlycogen phosphorylase shortens chains one residue at a time from their nonreducing ends by phosphorolysis: inorganic phosphate, rather than water, cleaves the α(1→4) bond, releasing glucose 1-phosphate. Phosphorylase stops when it comes within four residues of a branch point. Debranching enzyme then acts in two steps. Its transferase activity moves three of the four remaining residues, as a unit, to the nonreducing end of another chain, and its α(1→6)-glucosidase activity hydrolyzes the one residue left at the branch point, releasing it as glucose. Phosphoglucomutase converts glucose 1-phosphate to glucose 6-phosphate. In the liver, glucose 6-phosphatase, located in the membrane of the ER, removes the phosphate so that glucose can be exported to the blood. Skeletal muscle lacks this enzyme and channels its glucose 6-phosphate into glycolysis.\n\nLiver and muscle glycogen phosphorylase are encoded by different genes and are regulated differently. In both tissues, phosphorylase kinase converts the less active b form of phosphorylase to the more active a form by phosphorylating a single serine residue, while glycogen synthase is inactivated by phosphorylation at several sites. In muscle, phosphorylase kinase is also activated by the $\\text{Ca}^{2+}$ released during contraction, and phosphorylase b is activated allosterically by AMP, which accumulates when ATP is consumed faster than it is regenerated. In the liver, phosphorylase a is inhibited allosterically by glucose, so that glycogen breakdown slows as the blood glucose concentration rises.',
    questions: [
      {
        question:
          'A glycogen particle in which branch points occur on average once every 10 residues is degraded completely by glycogen phosphorylase and debranching enzyme. The ratio of glucose 1-phosphate to free glucose released is closest to:',
        options: ['1:1', '3:1', '9:1', '10:1'],
        correctAnswer: 2,
        explanation:
          'Every residue linked by an α(1→4) bond, including the three residues moved by the transferase activity, is eventually removed by phosphorylase as glucose 1-phosphate. Only the residue attached by the α(1→6) bond at each branch point is released by hydrolysis as free glucose. With one branch residue per 10 residues, 9 of every 10 residues become glucose 1-phosphate: a 9:1 ratio. The 10:1 ratio counts 10 phosphorylated residues for every branch residue rather than 10 residues in total. The 3:1 ratio takes the three residues moved by the transferase as the only phosphorylated products at each branch. A 1:1 ratio would require hydrolysis to release as many residues as phosphorolysis.',
        skill: '1D glycogen breakdown',
      },
      {
        question:
          'Compared with glycolysis of a molecule of free glucose taken up from the blood, glycolysis of a glucose residue removed from muscle glycogen by phosphorylase gives a net ATP yield that is:',
        options: [
          'greater by one ATP, because phosphorolysis forms a sugar phosphate with no ATP spent',
          'greater by two ATP, because the residue bypasses both ATP-consuming steps of glycolysis',
          'the same, because phosphoglucomutase uses one ATP to form glucose 6-phosphate from it',
          'smaller by one ATP, because the residue must first be hydrolyzed and then phosphorylated',
        ],
        correctAnswer: 0,
        explanation:
          'Free glucose must be phosphorylated by hexokinase at the cost of one ATP before it can enter glycolysis. Phosphorylase uses inorganic phosphate to cleave the glycosidic bond, so the residue emerges already phosphorylated as glucose 1-phosphate, and phosphoglucomutase converts it to glucose 6-phosphate without using ATP. The net yield therefore rises from 2 to 3 ATP per residue. The phosphofructokinase-1 step still consumes ATP, so the gain is one, not two. Phosphoglucomutase is an isomerase and uses no ATP. Only the branch-point residues are released by hydrolysis; the residues cleaved by phosphorylase are not.',
        skill: '1D glycogen energetics',
      },
      {
        question:
          'A patient has a mutation that eliminates the muscle isozyme of glycogen phosphorylase but leaves the liver isozyme intact. Compared with a healthy person, the patient would most likely show:',
        options: [
          'a low fasting blood glucose and a larger rise in blood lactate during brief, intense exercise',
          'a low fasting blood glucose and an enlarged liver packed with glycogen of normal structure',
          'a normal fasting blood glucose and a larger rise in blood lactate during brief, intense exercise',
          'a normal fasting blood glucose and only a slight rise in blood lactate during brief, intense exercise',
        ],
        correctAnswer: 3,
        explanation:
          'Because liver phosphorylase is a separate gene product and is intact, the liver can still release glucose from glycogen, and fasting blood glucose is normal. During brief, intense exercise, working muscle normally breaks down its own glycogen and converts much of the resulting glucose 6-phosphate to lactate; without muscle phosphorylase this source is unavailable, so blood lactate rises little and the patient tires quickly. A low fasting glucose and liver glycogen accumulation would point to a defect in the liver pathway, not in the muscle isozyme. A larger lactate rise would require more, not less, glycolytic flux from muscle glycogen.',
        skill: '1D glycogen storage disease',
      },
      {
        question: 'The extensive branching of glycogen is most important physiologically because it:',
        options: [
          'protects glycogen from breakdown, because no human enzyme can cleave an α(1→6) bond',
          'multiplies the nonreducing ends at which enzymes of synthesis and breakdown can act',
          'stores more energy per residue, because an α(1→6) bond holds more energy than an α(1→4) bond',
          'lets glycogen pass through membranes, because a branched molecule is more compact than a chain',
        ],
        correctAnswer: 1,
        explanation:
          'Both glycogen synthase and phosphorylase act only at nonreducing ends, and each branch adds another such end. A highly branched particle therefore presents many sites at once, allowing glucose to be stored or mobilized rapidly (branching also increases solubility). Debranching enzyme hydrolyzes α(1→6) bonds, so branch points do not protect glycogen from breakdown. The energy a residue yields comes from oxidizing the glucose, not from the type of glycosidic bond, and the two bonds differ little in free energy of hydrolysis. Glycogen is far too large to cross membranes whether branched or not; it remains in the cytosol as particles.',
        skill: '1D polysaccharide structure',
      },
    ],
  },
]

export const FL2_BIO_BIOCHEM_B_DISCRETES: MCATDiscreteQuestion[] = [
  {
    id: 'fl2-bb-b-d01',
    section: 'bio-biochem',
    discipline: 'physiology',
    question:
      'A skeletal muscle fiber is stimulated repeatedly at a frequency high enough that each action potential arrives before the fiber has relaxed from the previous one. The force produced is much greater than that of a single twitch mainly because:',
    options: [
      'each action potential in the train is larger, so more acetylcholine is released at the neuromuscular junction',
      'more motor units are recruited with each new stimulus, so a larger number of fibers contract together',
      'cytosolic $\\text{Ca}^{2+}$ stays high, so actin sites stay exposed and cross-bridges keep cycling',
      'the sarcomeres are stretched well beyond their resting length, so thick and thin filaments overlap more',
    ],
    correctAnswer: 2,
    explanation:
      'During a single twitch, $\\text{Ca}^{2+}$ is pumped back into the sarcoplasmic reticulum before the contractile machinery reaches full force. When stimuli arrive faster than relaxation, $\\text{Ca}^{2+}$ remains elevated, troponin keeps tropomyosin off the myosin-binding sites on actin, and cross-bridge cycling continues, so forces summate toward tetanus. Action potentials are all-or-none and do not grow during a train. Recruitment of motor units cannot occur in a single fiber stimulated directly. Stretching sarcomeres beyond their optimal length reduces, rather than increases, filament overlap and force.',
    skill: '3B skeletal muscle summation',
  },
  {
    id: 'fl2-bb-b-d02',
    section: 'bio-biochem',
    discipline: 'physiology',
    question:
      'A single touch receptor in the skin is pressed with progressively greater force. Which change in the signal carried by its sensory axon encodes the increase in stimulus strength?',
    options: [
      'The action potentials occur at a higher frequency as the receptor potential grows',
      'The action potentials grow larger in amplitude as the receptor potential grows',
      'The action potentials travel faster along the axon as the receptor potential grows',
      'The action potentials last longer in duration as the receptor potential grows',
    ],
    correctAnswer: 0,
    explanation:
      'The receptor potential is graded: a stronger stimulus depolarizes the receptor ending more, which brings the axon to threshold again sooner after each spike and raises the firing rate. Stimulus intensity is therefore coded by action potential frequency (and, across a population, by the number of receptors activated). Action potentials are all-or-none, so their amplitude and duration are set by the channels of the axon, not by the stimulus. Conduction velocity depends on axon diameter and myelination, which do not change with stimulus strength.',
    skill: '3A sensory receptors',
  },
  {
    id: 'fl2-bb-b-d03',
    section: 'bio-biochem',
    discipline: 'physiology',
    question: 'During spermatogenesis in a human male, each secondary spermatocyte contains:',
    options: [
      '46 chromosomes, each consisting of two sister chromatids',
      '23 chromosomes, each consisting of two sister chromatids',
      '23 chromosomes, each consisting of a single chromatid',
      '46 chromosomes, each consisting of a single chromatid',
    ],
    correctAnswer: 1,
    explanation:
      'A primary spermatocyte (46 replicated chromosomes) completes meiosis I, which separates homologous chromosomes, producing two secondary spermatocytes, each with 23 chromosomes still made of two sister chromatids. Meiosis II then separates the sister chromatids to give spermatids with 23 single-chromatid chromosomes. Forty-six chromosomes with two chromatids each describes the primary spermatocyte; 23 single-chromatid chromosomes describes a spermatid or sperm; 46 single-chromatid chromosomes describes a spermatogonium before DNA replication.',
    skill: '2C gametogenesis',
  },
  {
    id: 'fl2-bb-b-d04',
    section: 'bio-biochem',
    discipline: 'genetics',
    question:
      'A boy with a 47,XXY karyotype is typed at a DNA marker located very close to the centromere of the X chromosome. His mother is heterozygous for alleles M1 and M2, his father carries allele M3, and the boy has two copies of M1 and no M3. The extra X chromosome most likely resulted from nondisjunction during:',
    options: [
      'meiosis I in the father',
      'meiosis II in the father',
      'meiosis I in the mother',
      'meiosis II in the mother',
    ],
    correctAnswer: 3,
    explanation:
      'The absence of M3 shows that both X chromosomes came from the mother, so the father contributed the Y. Because the marker lies next to the centromere, crossing over is very unlikely to have separated it from the centromere, and two identical copies (M1 and M1) indicate that sister chromatids failed to separate, which is nondisjunction in meiosis II. Nondisjunction in maternal meiosis I would have delivered both homologs, giving M1 and M2. Paternal nondisjunction in meiosis I would produce an XY sperm, giving the boy a paternal X carrying M3, and paternal nondisjunction in meiosis II produces XX or YY sperm, which give XXX or XYY rather than XXY.',
    skill: '1C meiosis and nondisjunction',
  },
  {
    id: 'fl2-bb-b-d05',
    section: 'bio-biochem',
    discipline: 'genetics',
    question:
      'On an island, the frequency of allele $a$ is 0.20. In one generation, migrants from the mainland, where the frequency of $a$ is 0.60, come to make up 10% of the island’s breeding population. If no other evolutionary force acts, the frequency of $a$ on the island after this migration is closest to:',
    options: ['0.24', '0.26', '0.40', '0.60'],
    correctAnswer: 0,
    explanation:
      'After migration the island population is 90% residents and 10% migrants, so the new frequency is the weighted average $0.90(0.20) + 0.10(0.60) = 0.18 + 0.06 = 0.24$. Gene flow moves the island frequency toward the mainland value in proportion to the fraction of migrants. The value 0.26 adds the migrants’ contribution without reducing the residents’ share to 90%. The value 0.40 is the unweighted mean of the two populations, and 0.60 is the mainland frequency, which would be reached only if migrants replaced the residents entirely.',
    skill: '1C gene flow',
  },
  {
    id: 'fl2-bb-b-d06',
    section: 'bio-biochem',
    discipline: 'biochemistry',
    question:
      'A person with a severe dietary deficiency of thiamine (vitamin $\\text{B}_1$) has elevated blood concentrations of pyruvate and lactate. This finding is best explained by reduced activity of:',
    options: [
      'lactate dehydrogenase',
      'pyruvate carboxylase',
      'alanine aminotransferase',
      'pyruvate dehydrogenase',
    ],
    correctAnswer: 3,
    explanation:
      'Thiamine is the precursor of thiamine pyrophosphate, the coenzyme used by the first component of the pyruvate dehydrogenase complex to decarboxylate pyruvate. When this step is slowed, pyruvate accumulates and is reduced to lactate. Lactate dehydrogenase uses NAD(H), derived from niacin, and reduced activity would lower rather than raise lactate. Pyruvate carboxylase requires biotin, and alanine aminotransferase requires pyridoxal phosphate from vitamin $\\text{B}_6$; neither depends on thiamine.',
    skill: '1A cofactors and vitamins',
  },
  {
    id: 'fl2-bb-b-d07',
    section: 'bio-biochem',
    discipline: 'biochemistry',
    question:
      'Cytosine in DNA can undergo spontaneous hydrolytic deamination, in which its amino group is replaced by a carbonyl oxygen, converting it to uracil. Using thymine rather than uracil as a DNA base helps preserve genetic information because:',
    options: [
      'thymine forms three hydrogen bonds with adenine, making each A–T pair as stable as a G–C pair',
      'uracil formed from cytosine can then be recognized as damage, since uracil is not a normal DNA base',
      'the methyl group of thymine shields any neighboring cytosine on the same strand from deamination',
      'thymine pairs with guanine after deamination, so the original base pair is restored automatically',
    ],
    correctAnswer: 1,
    explanation:
      'Uracil and thymine pair identically with adenine; thymine differs only by a methyl group at carbon 5. Because uracil is not a normal component of DNA, a repair glycosylase can remove any uracil it finds, knowing that it arose from cytosine, and the gap is refilled with C opposite the G. If DNA normally contained uracil, deaminated cytosine could not be told apart from a genuine base. A–T pairs form two hydrogen bonds, not three, and are less stable than G–C pairs. The methyl group does not protect neighboring bases from hydrolysis. Thymine pairs with adenine, not guanine.',
    skill: '1D nucleotide chemistry',
  },
]
