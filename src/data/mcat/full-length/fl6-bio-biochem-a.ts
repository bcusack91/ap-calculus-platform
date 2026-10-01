/**
 * MCAT Full-Length Form 6 — Biological & Biochemical Foundations, file A
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
 * Unicode super/subscripts are used in running text (no KaTeX math needed).
 */
import type { MCATPassage, MCATDiscreteQuestion } from '../types'

export const FL6_BIO_BIOCHEM_A_PASSAGES: MCATPassage[] = [
  // ────────────────────────────────────────────────────────────────────────
  // 1. BIOCHEMISTRY (exp, chart) — fructose metabolism and hereditary
  //    fructose intolerance: fructokinase, aldolase B, phosphate trapping,
  //    hepatic ATP time course in Aldob−/− and Aldob−/− Khk−/− mice
  //    Skills: Q1 S4 · Q2 S3 · Q3 S2 · Q4 S1 · Q5 S2
  // ────────────────────────────────────────────────────────────────────────
  {
    id: 'fl6-bb-a-01',
    section: 'bio-biochem',
    discipline: 'biochemistry',
    title: 'Hepatic ATP After a Fructose Load in Mice Lacking Aldolase B',
    passageText:
      'Fructose absorbed from the intestine is cleared mainly by the liver. Hepatocytes phosphorylate it with fructokinase, which transfers a phosphoryl group from ATP to produce fructose 1-phosphate (F1P). Aldolase B then cleaves F1P into dihydroxyacetone phosphate and glyceraldehyde; the glyceraldehyde is phosphorylated by a triose kinase, and both three-carbon products join the glycolytic and gluconeogenic pathways at the level of the triose phosphates. Fructokinase has a high capacity and, unlike the enzymes that phosphorylate glucose, is not slowed by its product or by the energy state of the cell. The pool of free inorganic phosphate (Pi) in a hepatocyte is small, only a few millimolar.\n\nHereditary fructose intolerance (HFI) is an autosomal recessive disorder caused by loss-of-function mutations in the gene for aldolase B. Affected infants are well while breast-fed but develop vomiting, hypoglycemia, and eventually liver and kidney injury once fruit or sweetened foods are introduced.\n\nTo examine how the loss of aldolase B injures the liver, researchers studied three groups of adult mice (n = 6 per group): wild-type mice, mice homozygous for a deletion of the aldolase B gene (Aldob−/−), and mice lacking both aldolase B and fructokinase (Aldob−/− Khk−/−). All animals had been raised on fructose-free chow and were fasted for 6 hours. Each anesthetized mouse received an intravenous injection of fructose (0.5 g per kg of body mass) at t = 0. Hepatic ATP was followed in the living animal by ³¹P magnetic resonance spectroscopy, a noninvasive technique that reports the relative amounts of phosphorus-containing metabolites in a tissue. The ATP signal at each time was expressed as a percentage of the same animal’s signal before injection (Figure 1).\n\nIn the same spectra, the signal from free Pi in Aldob−/− livers fell in parallel with ATP, while the signal from sugar monophosphates rose severalfold and remained elevated for the whole experiment. Neither signal changed in the double-knockout mice, which excreted most of the injected fructose in their urine. Blood glucose fell by half in Aldob−/− mice within 20 minutes of the injection and did not rise when glucagon was given at 20 minutes, although liver glycogen measured at the end of the experiment did not differ among the three groups. Plasma uric acid, a product of the breakdown of adenine nucleotides, doubled in Aldob−/− mice and was unchanged in the other two groups.\n\nThe investigators concluded that the liver of an Aldob−/− mouse is not harmed by an inability to obtain energy from fructose. They proposed instead that phosphate is progressively locked into a metabolite that the cell cannot process further, so that reactions requiring free phosphate slow down. In wild-type liver the same sequestration occurs briefly, because fructokinase can transiently outpace aldolase B, but it is reversed as F1P is cleaved. They noted also that AMP deaminase, the enzyme that begins the degradation of AMP, is normally restrained by Pi.',
    chart: {
      title: 'Figure 1. Hepatic ATP after intravenous fructose at t = 0, as a percentage of each animal’s pre-injection value (group means)',
      kind: 'line',
      xLabel: 'Time after injection',
      xUnit: 'min',
      yLabel: 'Hepatic ATP',
      yUnit: '% of baseline',
      xValues: [0, 5, 10, 15, 20, 25, 30],
      yValues: [100, 90, 84, 88, 93, 97, 99],
      seriesLabel: 'Wild type',
      comparisonSeries: [
        { label: 'Aldob−/−', yValues: [100, 72, 52, 42, 37, 35, 34] },
        { label: 'Aldob−/− Khk−/−', yValues: [100, 99, 100, 101, 99, 100, 100] },
      ],
    },
    questions: [
      {
        question: 'According to Figure 1, during the first 10 minutes after the injection, the average rate at which hepatic ATP declined in Aldob−/− mice was approximately how many times the rate in wild-type mice?',
        options: ['1.5 times', '3 times', '5 times', '8 times'],
        correctAnswer: 1,
        explanation:
          'Between 0 and 10 minutes, ATP in wild-type liver fell from 100% to about 84% of baseline, a drop of 16 percentage points, while ATP in Aldob−/− liver fell from 100% to about 52%, a drop of 48 points; over the same interval the rates are therefore in the ratio 48:16, or 3. A factor of about 1.5 is roughly the ratio of the remaining ATP levels (84:52), not of the declines. Factors of 5 and 8 would require the knockout livers to have lost 80% or more of their ATP in 10 minutes, which the figure does not show.',
        skill: '1D fructose metabolism',
      },
      {
        question: 'Which additional finding would most strongly support the proposal that ATP falls in Aldob−/− liver because free phosphate is sequestered, rather than because fructose damages the machinery that makes ATP?',
        options: [
          'Mitochondria isolated from Aldob−/− livers after fructose consume oxygen more slowly than wild-type mitochondria when given ADP and Pi.',
          'Hepatic ATP in Aldob−/− mice falls to the same extent whether the fructose is injected or given by mouth.',
          'Hepatic ATP in Aldob−/− mice falls further when the dose of injected fructose is doubled.',
          'Mitochondria isolated from Aldob−/− livers after fructose make ATP at the wild-type rate when given ADP and Pi.',
        ],
        correctAnswer: 3,
        explanation:
          'If the ATP-producing machinery is intact and only lacks a substrate, then supplying ADP and Pi to mitochondria taken from the affected livers should restore ATP synthesis to the normal rate; that result separates a shortage of phosphate from damage to oxidative phosphorylation. Slower oxygen consumption by the isolated mitochondria despite ample ADP and Pi would instead point to damaged machinery. The route of administration says nothing about the mechanism inside the hepatocyte, and a larger fall in ATP at a larger dose is expected under either explanation.',
        skill: '1D oxidative phosphorylation',
      },
      {
        question: 'The results for the Aldob−/− Khk−/− mice most directly support which conclusion?',
        options: [
          'The fall in ATP requires the formation of F1P, not merely the absence of aldolase B.',
          'Fructokinase is needed for hepatocytes to make ATP from glucose as well as from fructose.',
          'Aldolase B acts before fructokinase in the pathway that converts fructose to triose phosphates.',
          'A second enzyme cleaves F1P at the normal rate when fructokinase and aldolase B are both absent.',
        ],
        correctAnswer: 0,
        explanation:
          'Mice lacking both enzymes still lack aldolase B, yet their hepatic ATP, Pi, and sugar phosphate signals did not change and the fructose was excreted; removing the step that makes F1P therefore removes the injury, which shows that the harm comes from accumulating F1P rather than from missing aldolase B itself. If fructokinase were needed for ATP production from glucose, the double knockouts would have shown lower, not stable, ATP. The pathway order is fructokinase first and aldolase B second, which is why deleting fructokinase prevents the substrate of aldolase B from forming. No F1P is produced without fructokinase, so there is nothing for an alternative cleaving enzyme to act on, and the excreted fructose shows it was not metabolized.',
        skill: '1D fructose metabolism',
      },
      {
        question: 'A family whose infant has HFI is advised to remove fructose from the infant’s diet. Which other carbohydrate must also be removed because its digestion releases fructose?',
        options: ['Lactose', 'Maltose', 'Sucrose', 'Amylose'],
        correctAnswer: 2,
        explanation:
          'Sucrose is a disaccharide of glucose and fructose, and the intestinal enzyme sucrase hydrolyzes it to those two monosaccharides, so it delivers fructose to the liver just as free fructose does. Lactose yields glucose and galactose. Maltose yields two molecules of glucose. Amylose is an unbranched polymer of glucose and yields only glucose on digestion.',
        skill: '1D carbohydrates',
      },
      {
        question: 'The failure of glucagon to raise blood glucose in Aldob−/− mice after fructose, despite normal glycogen stores, is best explained by the fact that:',
        options: [
          'glucagon receptors on hepatocytes are removed from the membrane when sugar phosphates accumulate.',
          'glycogen phosphorylase uses free Pi as a substrate when it cleaves glucose units from glycogen.',
          'glycogen synthase is activated by a low ATP concentration and rebuilds glycogen as fast as it is degraded.',
          'glucose 6-phosphatase uses ATP as a substrate when it removes phosphate from glucose 6-phosphate.',
        ],
        correctAnswer: 1,
        explanation:
          'Glycogen is broken down by phosphorolysis: glycogen phosphorylase attacks the terminal glycosidic bond with inorganic phosphate to release glucose 1-phosphate, so when free Pi has been locked into F1P the enzyme lacks a substrate and glycogen cannot be mobilized even when glucagon signals that it should be. Nothing in the data suggests a loss of glucagon receptors, and receptor number is not governed by sugar phosphates. Glycogen synthesis consumes energy and is not stimulated by low ATP. Glucose 6-phosphatase is a hydrolase that requires only water, not ATP.',
        skill: '1D glycogenolysis',
      },
    ],
  },

  // ────────────────────────────────────────────────────────────────────────
  // 2. PHYSIOLOGY (info) — the endocrine pancreas: islet cell types, insulin
  //    biosynthesis and C-peptide, control of secretion, incretins, glucagon,
  //    type 1 vs type 2 diabetes
  //    Skills: Q1 S2 · Q2 S2 · Q3 S1 · Q4 S2
  // ────────────────────────────────────────────────────────────────────────
  {
    id: 'fl6-bb-a-02',
    section: 'bio-biochem',
    discipline: 'physiology',
    title: 'Hormone Secretion by the Pancreatic Islets',
    passageText:
      'Scattered through the exocrine pancreas are about a million islets of Langerhans, clusters of endocrine cells that make up 1–2% of the organ’s mass. β cells, the most numerous islet cells, secrete insulin; α cells secrete glucagon; and δ cells secrete somatostatin, which acts on its neighbors to restrain the release of both other hormones. Blood leaving the islets drains into the portal vein, so the liver is exposed to higher concentrations of insulin and glucagon than any other organ, and it removes about half of the insulin before the hormone reaches the systemic circulation.\n\nInsulin is translated as a single polypeptide, preproinsulin. Its signal sequence is removed in the endoplasmic reticulum, and the resulting proinsulin folds and forms three disulfide bonds. In maturing secretory granules, proteases excise an internal segment called C-peptide, leaving the A and B chains joined by disulfides. Insulin and C-peptide are stored together and released together by exocytosis. C-peptide has no established hormonal action, is not extracted by the liver, and is cleared slowly by the kidney.\n\nThe principal stimulus for insulin secretion is a rise in plasma glucose: metabolism of glucose by the β cell depolarizes its membrane and opens voltage-gated Ca²⁺ channels, and the entering Ca²⁺ triggers fusion of granules with the plasma membrane. Several other signals modify this response. Amino acids, especially arginine and leucine, stimulate secretion. Parasympathetic fibers release acetylcholine, which enhances secretion in anticipation of a meal and during it, whereas epinephrine and norepinephrine acting on α₂-adrenergic receptors suppress secretion. Enteroendocrine cells in the intestinal wall release the incretin hormones GLP-1 and GIP when nutrients are present in the lumen. Incretins bind G protein–coupled receptors on β cells and raise cAMP, which increases the number of granules released for a given Ca²⁺ signal; they do not initiate secretion by themselves when glucose is at fasting concentrations. GLP-1 also slows gastric emptying and inhibits glucagon release. Both incretins are inactivated within minutes by the plasma enzyme dipeptidyl peptidase-4 (DPP-4).\n\nGlucagon secretion is highest when plasma glucose is low and is suppressed after a carbohydrate meal, in part by insulin and somatostatin released from neighboring cells. α cells are also stimulated by amino acids and by sympathetic activity. Glucagon acts almost exclusively on the liver, where it promotes glycogen breakdown and gluconeogenesis.\n\nDiabetes mellitus is a state of chronic hyperglycemia. In type 1 diabetes, T lymphocytes destroy β cells; autoantibodies against islet proteins are detectable in plasma, and insulin secretion declines until it is negligible. In type 2 diabetes, muscle, liver, and adipose tissue respond poorly to insulin. β cells at first compensate by secreting more hormone, and plasma glucose remains normal; hyperglycemia develops when secretion can no longer keep pace with demand, and over many years β-cell output may decline. In both forms, glucagon concentrations are inappropriately high for the prevailing glucose concentration. Among the drugs used in type 2 diabetes, sulfonylureas stimulate insulin secretion regardless of the glucose concentration, whereas GLP-1 receptor agonists and DPP-4 inhibitors act through the incretin pathway.',
    questions: [
      {
        question: 'Two untreated adults are found to have the same elevated fasting plasma glucose. Patient X has lost weight and has autoantibodies against islet proteins; patient Y is obese and has no such autoantibodies. Compared with that of a healthy adult, the fasting plasma C-peptide concentration is most likely:',
        options: [
          'low in both patient X and patient Y.',
          'high in both patient X and patient Y.',
          'low in patient X and normal or high in patient Y.',
          'normal or high in patient X and low in patient Y.',
        ],
        correctAnswer: 2,
        explanation:
          'C-peptide is released in equal amounts with insulin and so reports how much insulin the β cells are secreting. Patient X has the autoimmune picture of type 1 diabetes, in which β cells are destroyed and secretion of both peptides becomes very low. Patient Y has the picture of type 2 diabetes at the onset of hyperglycemia, when β cells are still secreting as much insulin as normal or more against resistant tissues, so C-peptide is normal or high. Low values in both would ignore the continued secretion in early type 2 disease, high values in both would ignore β-cell destruction in type 1 disease, and the last option reverses the two patients.',
        skill: '3B endocrine pancreas',
      },
      {
        question: 'Volunteers drink a glucose solution. On another day, glucose is infused intravenously at a rate adjusted so that the plasma glucose concentration matches that of the oral test minute by minute. Compared with the oral test, the intravenous test would be expected to produce:',
        options: [
          'lower plasma insulin and lower plasma C-peptide.',
          'lower plasma insulin but higher plasma C-peptide.',
          'higher plasma insulin and higher plasma C-peptide.',
          'the same plasma insulin and the same plasma C-peptide.',
        ],
        correctAnswer: 0,
        explanation:
          'Glucose in the intestinal lumen triggers release of GLP-1 and GIP, which amplify the β-cell response to a given plasma glucose; glucose delivered by vein bypasses the gut, so no incretins are released and the same plasma glucose profile evokes less secretion. Because insulin and C-peptide leave the β cell together, both are lower. They cannot move in opposite directions, since they are co-secreted. Higher values after intravenous glucose would require the gut to inhibit secretion, the reverse of what incretins do. Identical values would be expected only if plasma glucose were the sole determinant of secretion.',
        skill: '3B endocrine pancreas',
      },
      {
        question: 'The loss of insulin in type 1 diabetes most directly reduces the entry of glucose into which of the following cells?',
        options: [
          'Cortical neurons',
          'Mature erythrocytes',
          'Intestinal epithelial cells',
          'Resting skeletal muscle fibers',
        ],
        correctAnswer: 3,
        explanation:
          'Skeletal muscle and adipose tissue take up glucose through GLUT4, a transporter held in intracellular vesicles and moved to the plasma membrane in response to insulin; without insulin, resting muscle admits little glucose. Neurons and erythrocytes carry transporters (GLUT3 and GLUT1) that reside permanently in the membrane, so their uptake does not depend on insulin. Intestinal epithelial cells absorb glucose from the lumen by Na⁺-coupled transport, which is also independent of insulin.',
        skill: '3B hormone action',
      },
      {
        question: 'A meal of protein without carbohydrate stimulates the secretion of both insulin and glucagon. The most likely physiological value of the glucagon response is that it:',
        options: [
          'speeds the uptake of the absorbed amino acids by skeletal muscle fibers.',
          'sustains hepatic glucose output so that the insulin released does not cause hypoglycemia.',
          'blocks the release of incretins so that insulin secretion ends as soon as the meal is absorbed.',
          'diverts the absorbed amino acids away from the liver and into storage in adipose tissue.',
        ],
        correctAnswer: 1,
        explanation:
          'Insulin released in response to amino acids promotes their uptake and use, but it also drives glucose into muscle and fat and suppresses hepatic glucose production; with no dietary carbohydrate arriving, plasma glucose would fall. Glucagon secreted at the same time keeps the liver producing glucose and so offsets that effect. Glucagon acts on the liver and has essentially no action on skeletal muscle. It is not a regulator of incretin release, which depends on nutrients in the gut lumen. It promotes the hepatic use of amino acids for gluconeogenesis rather than sending them to adipose tissue.',
        skill: '3B endocrine pancreas',
      },
    ],
  },

  // ────────────────────────────────────────────────────────────────────────
  // 3. GENETICS (exp, tables) — structural chromosome rearrangements:
  //    deletion, inversion, reciprocal and Robertsonian translocation; a
  //    somatic translocation that fuses two genes (BCR–ABL1); RT-PCR table
  //    Skills: Q1 S2 · Q2 S2 · Q3 S4 · Q4 S3 · Q5 S1
  // ────────────────────────────────────────────────────────────────────────
  {
    id: 'fl6-bb-a-03',
    section: 'bio-biochem',
    discipline: 'genetics',
    title: 'Structural Chromosome Rearrangements in Five Referred Patients',
    passageText:
      'Chromosomes can break and rejoin incorrectly, producing structural rearrangements. In a deletion, a segment is lost. In an inversion, the segment between two breaks is reinserted in the opposite orientation. In a reciprocal translocation, two nonhomologous chromosomes exchange segments, producing two derivative chromosomes. A Robertsonian translocation joins the long arms of two acrocentric chromosomes (chromosomes whose centromere lies near one end, such as 14 and 21) at their centromeres; the two very small short arms, which carry only ribosomal RNA genes that are repeated on several other chromosomes, are lost. A rearrangement that is present in the fertilized egg is found in every cell of the body, whereas one that arises later is confined to the descendants of the cell in which it occurred.\n\nA cytogenetics laboratory examined dividing cells from five patients. Metaphase chromosomes were stained to give each chromosome a characteristic banding pattern and were examined by light microscopy (Table 1). Carriers of some rearrangements come to attention only when they are tested because of infertility, repeated pregnancy loss, or the birth of an affected child, since chromosomes that have exchanged or reoriented segments can pair and separate abnormally during meiosis. The parents of patient 5 had normal chromosomes. The child of patient 3 who has Down syndrome was found to carry the same Robertsonian chromosome as patient 3.\n\nThe translocation in patient 1 joins part of chromosome 9 to part of chromosome 22. The break on chromosome 22 lies within a gene called BCR, and the break on chromosome 9 lies within a gene called ABL1; both genes are normally transcribed in blood-cell precursors and in fibroblasts. On the shortened chromosome 22, the promoter and upstream exons of BCR are joined to the downstream exons of ABL1 in the same reading frame. ABL1 encodes a tyrosine kinase that is inactive most of the time, because a segment at its N-terminus folds back onto the kinase domain. The fusion protein lacks that segment and has in its place a region of the BCR protein that causes the molecules to assemble into tetramers, whose subunits phosphorylate one another.\n\nTo characterize the transcripts, the investigators isolated mRNA from the leukemic cells and from the skin fibroblasts of patient 1, converted it to cDNA with reverse transcriptase, and amplified the cDNA by PCR with four primer pairs. Each pair combined a forward primer matching an exon just upstream of the breakpoint in one gene with a reverse primer complementary to an exon just downstream of the breakpoint in the same gene or in the other gene (Table 2). Control reactions from which reverse transcriptase was omitted gave no product with any primer pair.',
    figure:
      '**Table 1. Chromosome findings in five patients**\n\n| Patient | Reason for referral | Cells examined | Chromosomes per cell | Structural finding |\n|---|---|---|---|---|\n| 1 | Chronic leukemia diagnosed at age 52 | Leukemic marrow cells; skin fibroblasts | 46; 46 | Reciprocal translocation between 9 and 22 in marrow cells; no rearrangement in fibroblasts |\n| 2 | Healthy adult; three miscarriages | Blood lymphocytes | 46 | Reciprocal translocation between 4 and 11 |\n| 3 | Healthy mother of a child with Down syndrome | Blood lymphocytes | 45 | Robertsonian translocation of 14 and 21, with one free 14 and one free 21 |\n| 4 | Healthy adult; tested in a family study | Blood lymphocytes | 46 | Inversion within the long arm of one chromosome 3 |\n| 5 | Infant with growth delay and intellectual disability | Blood lymphocytes | 46 | Deletion of the end of the short arm of one chromosome 5 |\n\n**Table 2. RT-PCR products from cells of patient 1 (+ = product of the expected size; − = no product)**\n\n| Forward primer (upstream exon) | Reverse primer (downstream exon) | Leukemic cells | Fibroblasts |\n|---|---|---|---|\n| BCR | BCR | + | + |\n| ABL1 | ABL1 | + | + |\n| BCR | ABL1 | + | − |\n| ABL1 | BCR | − | − |',
    questions: [
      {
        question: 'The child of patient 3 who has Down syndrome inherited the Robertsonian chromosome from patient 3 and a normal set of chromosomes from the father. The child’s cells most likely contain:',
        options: [
          '45 chromosomes, including two copies of the long arm of chromosome 21.',
          '46 chromosomes, including three copies of the long arm of chromosome 21.',
          '47 chromosomes, including three copies of the long arm of chromosome 21.',
          '46 chromosomes, including two copies of the long arm of chromosome 21.',
        ],
        correctAnswer: 1,
        explanation:
          'Patient 3 has 45 chromosomes because two long arms are carried on one chromosome. An egg that receives the Robertsonian chromosome together with her free chromosome 21, but not her free chromosome 14, contains 23 chromosomes; after fertilization by a normal sperm the zygote has 46 chromosomes, yet it carries three copies of the long arm of 21 (one on the Robertsonian chromosome, one free maternal 21, and one paternal 21). A count of 45 with two copies of 21 is the mother’s own balanced state and would not produce Down syndrome. A count of 47 describes Down syndrome caused by nondisjunction, with a free extra chromosome 21 rather than a translocation. A count of 46 with two copies of 21 is a normal chromosome complement.',
        skill: '1C chromosomal rearrangements',
      },
      {
        question: 'Patients 2 and 4 are healthy, whereas patient 5 is affected. Which explanation best accounts for this difference?',
        options: [
          'Translocations and inversions arise only in somatic cells, whereas deletions arise only in the germ line.',
          'Translocations and inversions move only noncoding DNA, whereas deletions always remove coding DNA.',
          'Patients 2 and 4 carry their rearrangements on both homologs, whereas patient 5 carries one on a single homolog.',
          'Patients 2 and 4 retain two copies of each relocated gene, whereas patient 5 has one copy of each gene in the lost segment.',
        ],
        correctAnswer: 3,
        explanation:
          'A reciprocal translocation or an inversion changes where genes lie but, unless a break interrupts a gene, leaves two functional copies of every gene, so the carrier is usually healthy. A deletion removes one copy of every gene in the lost segment, and for genes whose product is needed in the full two-copy amount, the single remaining copy is not enough. The rearrangements of patients 2 and 4 were found in blood cells of healthy adults and can affect their gametes, so they are not confined to somatic tissue, and nothing restricts deletions to the germ line. Chromosome segments large enough to see by microscopy contain many genes, whatever the type of rearrangement. Table 1 describes each rearrangement on one member of a chromosome pair, not on both homologs.',
        skill: '1C gene dosage',
      },
      {
        question: 'The results in Table 2 for the leukemic cells indicate that these cells:',
        options: [
          'have lost every unrearranged copy of BCR and of ABL1.',
          'transcribe the fusion gene from the promoter of ABL1.',
          'retain an intact, transcribed copy of BCR and of ABL1.',
          'produce fusion transcripts in both possible orientations.',
        ],
        correctAnswer: 2,
        explanation:
          'A product from the BCR–BCR primer pair requires a transcript containing BCR exons on both sides of the breakpoint, and a product from the ABL1–ABL1 pair requires the same of ABL1; a broken gene cannot supply either, so the leukemic cells must still carry and transcribe an unrearranged copy of each gene, on the normal chromosome 22 and the normal chromosome 9. Loss of all unrearranged copies would have eliminated both of those products. The fusion transcript was amplified with a forward primer in the upstream exons of BCR, so it begins with BCR sequence and is driven by the BCR promoter. The ABL1–BCR pair gave no product, so only one orientation of fusion transcript was detected.',
        skill: '1B RT-PCR interpretation',
      },
      {
        question: 'Including the fibroblasts of patient 1 in the analysis allowed the investigators to conclude that the translocation between chromosomes 9 and 22:',
        options: [
          'arose in a blood-cell precursor after conception and was not inherited.',
          'is present in the germ cells and could be transmitted to a future child.',
          'can be detected by PCR only when reverse transcriptase is present.',
          'occurred independently in several unrelated tissues of the body.',
        ],
        correctAnswer: 0,
        explanation:
          'A rearrangement inherited from a parent, or formed in the zygote, would be present in every cell, including skin fibroblasts. The fibroblasts had normal chromosomes and no fusion transcript although they transcribe both genes, so the translocation must have arisen later in a single cell of the blood-forming lineage and is confined to its descendants. For the same reason there is no evidence that it is present in germ cells. The requirement for reverse transcriptase was shown by the control reactions lacking the enzyme, not by the fibroblasts. A tissue that lacks the rearrangement cannot show that it arose in several tissues.',
        skill: '1C somatic vs germ-line mutation',
      },
      {
        question: 'Leukemic cells carrying a single copy of the BCR–ABL1 fusion gene proliferate abnormally even though unrearranged copies of both genes remain. The fusion gene is therefore best described as:',
        options: [
          'a tumor suppressor gene whose effect is recessive at the level of the cell.',
          'a tumor suppressor gene whose effect is dominant at the level of the cell.',
          'an oncogene whose effect is dominant at the level of the cell.',
          'an oncogene whose effect is recessive at the level of the cell.',
        ],
        correctAnswer: 2,
        explanation:
          'An oncogene is an altered gene whose product has gained activity that drives proliferation, and one altered copy is sufficient even when normal copies are present; the fusion kinase, freed of its inhibitory segment and continuously active, fits this description and is dominant in the cell. Tumor suppressor genes normally restrain growth and contribute to cancer when their function is lost, which typically requires inactivation of both copies. The fusion gene has acquired a function rather than lost one, which excludes both tumor suppressor options. A recessive oncogene would have no effect in a cell that retains normal copies, contrary to what is observed.',
        skill: '1B oncogenes',
      },
    ],
  },

  // ────────────────────────────────────────────────────────────────────────
  // 4. MICROBIOLOGY (info) — the intestinal microbiota: obligate vs
  //    facultative anaerobes, fermentation to short-chain fatty acids,
  //    colonization resistance, antibiotic disruption, C. difficile,
  //    fecal microbiota transplantation
  //    Skills: Q1 S1 · Q2 S3 · Q3 S2 · Q4 S2
  // ────────────────────────────────────────────────────────────────────────
  {
    id: 'fl6-bb-a-04',
    section: 'bio-biochem',
    discipline: 'microbiology',
    title: 'The Intestinal Microbiota and Resistance to Colonization',
    passageText:
      'The human colon contains roughly 10¹¹ bacteria per gram of contents, belonging to several hundred species. More than 99% are obligate anaerobes, most of them members of two phyla: the Gram-negative Bacteroidetes and the mostly Gram-positive Firmicutes. Facultative anaerobes such as Escherichia coli are present but are outnumbered about a thousandfold. The community is acquired after birth. Animals delivered and reared under sterile conditions (germ-free animals) remain healthy only if they are given certain vitamins, have poorly developed gut-associated lymphoid tissue, and must eat more chow than conventionally raised animals to maintain the same body mass.\n\nResidents of the colon live largely on what the host cannot digest. Human enzymes do not hydrolyze cellulose, pectin, or most other plant polysaccharides; colonic bacteria ferment these to short-chain fatty acids, chiefly acetate, propionate, and butyrate. The acids are absorbed, and butyrate is the main fuel of colonocytes, the epithelial cells that line the colon, which oxidize it completely to CO₂. Because this oxidation consumes nearly all of the oxygen that diffuses from the blood toward the lumen, the surface of a healthy colonic epithelium is almost free of oxygen. Colonic bacteria also synthesize vitamin K and several B vitamins, and they chemically modify bile acids: the primary bile acids secreted by the liver that escape reabsorption in the ileum are converted, by a small number of Firmicutes species, into secondary bile acids.\n\nAn established microbiota makes it difficult for newly arriving organisms to gain a foothold, a property called colonization resistance. Residents occupy attachment sites in the mucus layer, consume the available nutrients, acidify the lumen, and secrete peptides that kill closely related species. Colonization resistance is well illustrated by Clostridioides difficile, a Gram-positive, spore-forming obligate anaerobe. Its spores are ingested frequently, especially in hospitals, but seldom cause disease. The spores germinate when they detect certain primary bile acids, whereas secondary bile acids inhibit the growth of the vegetative cells that emerge. After a course of a broad-spectrum antibiotic such as clindamycin, however, C. difficile can multiply to high density and secrete toxins that damage the epithelium, producing severe diarrhea.\n\nC. difficile infection is treated with oral vancomycin, an inhibitor of cell-wall synthesis that is not absorbed from the gut and is active against Gram-positive bacteria. Symptoms resolve in most patients, but about one in four relapses within weeks of finishing treatment, and the risk rises with each subsequent episode. For patients with repeated relapses, stool from a screened healthy donor can be delivered into the colon, a procedure called fecal microbiota transplantation (FMT). In controlled trials, FMT prevented further relapse in about 90% of such patients, compared with roughly 30% of those given another course of vancomycin alone. Vancomycin is given for several days before FMT and is discontinued one to two days before the procedure.',
    questions: [
      {
        question: 'The relationship between butyrate-producing bacteria and their human host is best classified as:',
        options: [
          'commensalism, because the bacteria benefit while the host is unaffected.',
          'mutualism, because the bacteria and the host both benefit.',
          'parasitism, because the bacteria consume nutrients at the host’s expense.',
          'commensalism, because the host benefits while the bacteria are unaffected.',
        ],
        correctAnswer: 1,
        explanation:
          'In mutualism both partners gain. The bacteria obtain a stable, anaerobic habitat and a supply of plant polysaccharides, and the host obtains butyrate, which fuels its colonocytes, from material it could not otherwise use. Commensalism describes a relationship in which one partner benefits and the other is neither helped nor harmed, which does not fit either version offered, because both partners clearly gain here. Parasitism requires that the host be harmed, but the polysaccharides the bacteria consume are ones the host cannot digest.',
        skill: '2B symbiosis',
      },
      {
        question: 'Which experiment would most directly test the hypothesis that the conversion of primary to secondary bile acids by resident bacteria protects the host against C. difficile?',
        options: [
          'Compare secondary bile acid concentrations in stool from patients with one episode of infection and patients with repeated relapses.',
          'Treat conventionally raised mice with clindamycin, then measure secondary bile acids in the colon before and after exposure to spores.',
          'Feed germ-free mice a diet rich in plant polysaccharides, then expose them to spores and count the vegetative C. difficile in the colon.',
          'Colonize antibiotic-treated mice with a converting species or with a mutant of it that cannot convert, then expose both groups to spores.',
        ],
        correctAnswer: 3,
        explanation:
          'The hypothesis is causal, so the best test manipulates only the proposed cause: two groups of mice that differ solely in whether their added bacterium can convert bile acids, followed by the same challenge with spores. If the converting strain protects and the otherwise identical nonconverting mutant does not, the conversion itself is responsible. Comparing patients is correlational and cannot separate bile acid differences from the many other differences between the groups. Measuring bile acids after clindamycin describes what the antibiotic does but does not vary bile acid conversion independently of the rest of the microbiota. Germ-free mice have no converting bacteria on any diet, so changing their diet does not test the role of conversion.',
        skill: '2B experimental design',
      },
      {
        question: 'After antibiotics eliminate most butyrate-producing bacteria, the oxygen concentration at the surface of the colonic epithelium rises. Which organisms would be expected to gain the greatest growth advantage from this change?',
        options: [
          'Facultative anaerobes, which can respire aerobically when oxygen is available',
          'Obligate anaerobes, which grow faster once fermentation acids stop accumulating',
          'Obligate aerobes, which made up most of the community before the antibiotics',
          'Spore-forming anaerobes, which need oxygen in order for their spores to germinate',
        ],
        correctAnswer: 0,
        explanation:
          'Facultative anaerobes can ferment in the absence of oxygen but switch to aerobic respiration, which yields far more ATP per substrate molecule, when oxygen is present; a rise in oxygen at the epithelial surface therefore lets organisms such as E. coli outgrow their neighbors. Obligate anaerobes are inhibited or killed by oxygen, so the change harms them. Obligate aerobes were not a major part of the community, more than 99% of which consists of obligate anaerobes. The passage attributes germination of C. difficile spores to primary bile acids, not to oxygen, and the vegetative cells of an obligate anaerobe would not benefit from oxygen.',
        skill: '2B bacterial metabolism',
      },
      {
        question: 'The most likely reason that vancomycin is stopped shortly before FMT is that continued treatment would:',
        options: [
          'enter the blood and suppress the recipient’s immune response to the donor’s bacteria.',
          'convert the secondary bile acids in the donor stool back into primary bile acids.',
          'kill many of the transplanted bacteria before they could become established.',
          'select for vancomycin-resistant spores of C. difficile within the donor stool.',
        ],
        correctAnswer: 2,
        explanation:
          'Vancomycin stays in the gut lumen and kills Gram-positive bacteria, a group that includes many of the dominant colonic residents and the species that make secondary bile acids; if the drug were still present, much of the donor community would be destroyed on arrival and colonization resistance would not be restored. Oral vancomycin is not absorbed, so it does not reach the blood, and it is not an immunosuppressant. An antibiotic that blocks cell-wall synthesis has no chemical action on bile acids. Donors are screened and healthy, so their stool is not a source of C. difficile to be selected.',
        skill: '2B antibiotics and the microbiota',
      },
    ],
  },

  // ────────────────────────────────────────────────────────────────────────
  // 5. PHYSIOLOGY (exp, chart) — pulmonary gas exchange: V/Q matching,
  //    shunt vs low V/Q vs dead space, diffusion and capillary transit time,
  //    arterial PO₂ as a function of inspired oxygen fraction
  //    Skills: Q1 S4 · Q2 S2 · Q3 S2 · Q4 S2
  // ────────────────────────────────────────────────────────────────────────
  {
    id: 'fl6-bb-a-05',
    section: 'bio-biochem',
    discipline: 'physiology',
    title: 'Arterial Oxygen During Oxygen Supplementation in Two Models of Impaired Gas Exchange',
    passageText:
      'Arterial blood leaves the lungs well oxygenated only if ventilation (V, the flow of fresh gas into alveoli) and perfusion (Q, the flow of blood past them) are matched region by region. In a healthy lung the ratio V/Q is close to 1 in most alveoli, and the blood leaving each alveolus has a PO₂ nearly equal to that of the alveolar gas. Two extremes of mismatch are recognized. In a shunt, blood flows past alveoli that receive no ventilation (V/Q = 0) and returns to the left heart with the composition of mixed venous blood. In alveolar dead space, alveoli are ventilated but receive no blood flow, as occurs beyond a clot lodged in a branch of the pulmonary artery. Between these extremes lie regions of low V/Q, in which narrowed airways deliver some fresh gas, but too little for the blood flowing past. The pulmonary circulation limits mismatch through hypoxic vasoconstriction: arterioles supplying alveoli in which the PO₂ is low constrict.\n\nOxygen moves from alveolar gas into capillary blood by diffusion across a barrier about 0.5 μm thick. A red cell spends about 0.75 s in a pulmonary capillary at rest, and its hemoglobin normally reaches equilibrium with alveolar gas within the first third of that time. The diffusing capacity of the lung is estimated clinically from the uptake of a trace of inhaled carbon monoxide. Carbon monoxide is used because hemoglobin binds it so avidly that its partial pressure in capillary blood stays near zero; its uptake is therefore limited by the barrier and not by blood flow. Patients in whom the barrier is thickened by fibrosis often have a normal arterial PO₂ at rest that falls during exercise.\n\nResearchers compared the effect of supplemental oxygen in two models of impaired gas exchange. Anesthetized pigs (n = 5 per group) were ventilated mechanically at a fixed rate and tidal volume. In group S, a balloon was inflated in the bronchus supplying the lower lobe of one lung, so that the lobe received no gas but continued to be perfused. In group V, an inhaled bronchoconstrictor narrowed small airways throughout both lungs. Control animals received neither intervention. The fraction of oxygen in the inspired gas (FiO₂) was raised stepwise from 0.2, approximately that of room air, to 1.0. After 15 minutes at each step, the partial pressure of oxygen in arterial blood (PaO₂) was measured (Figure 1). Arterial PCO₂ was held near 40 mmHg in all animals by small adjustments of the ventilator, and cardiac output did not differ among the groups at any step.',
    chart: {
      title: 'Figure 1. Arterial PO₂ after 15 minutes at each inspired oxygen fraction (group means)',
      kind: 'line',
      xLabel: 'Inspired oxygen fraction (FiO₂)',
      yLabel: 'Arterial PO₂',
      yUnit: 'mmHg',
      xValues: [0.2, 0.4, 0.6, 0.8, 1.0],
      yValues: [90, 225, 360, 495, 625],
      seriesLabel: 'Control',
      comparisonSeries: [
        { label: 'Group V (bronchoconstrictor)', yValues: [56, 150, 295, 435, 570] },
        { label: 'Group S (occluded lobe)', yValues: [54, 62, 72, 84, 100] },
      ],
    },
    questions: [
      {
        question: 'A pig prepared by a colleague has a PaO₂ of 55 mmHg at an FiO₂ of 0.2, but the record of which intervention it received has been lost. Based on Figure 1, which single measurement would best identify its group?',
        options: [
          'Arterial PCO₂ at an FiO₂ of 0.2',
          'Cardiac output at an FiO₂ of 0.2',
          'Arterial PO₂ at an FiO₂ of 0.2, measured a second time',
          'Arterial PO₂ at an FiO₂ of 1.0',
        ],
        correctAnswer: 3,
        explanation:
          'At an FiO₂ of 0.2 the two interventions give nearly the same PaO₂ (54 and 56 mmHg), so that value cannot assign the animal, but the curves diverge as oxygen is added and are farthest apart at an FiO₂ of 1.0: about 100 mmHg with the occluded lobe and about 570 mmHg with the bronchoconstrictor. A single measurement there separates the groups by a wide margin. Arterial PCO₂ was held at the same value in every animal, and cardiac output did not differ among groups, so neither can discriminate. Repeating the measurement at an FiO₂ of 0.2 would only reproduce a value that the two groups share.',
        skill: '3B gas exchange',
      },
      {
        question: 'The PaO₂ of group S rose only slightly as FiO₂ was increased because:',
        options: [
          'blood leaving the ventilated alveoli was already nearly saturated and could carry little additional oxygen.',
          'the inflated balloon prevented the oxygen-enriched gas from reaching the alveoli of either lung.',
          'hypoxic vasoconstriction redirected most of the cardiac output into the unventilated lobe.',
          'oxygen at a high partial pressure diffuses across the alveolar barrier more slowly than at a low one.',
        ],
        correctAnswer: 0,
        explanation:
          'Blood passing ventilated alveoli has hemoglobin that is almost fully saturated even at an FiO₂ of 0.2, so raising alveolar PO₂ adds only a small amount of dissolved oxygen to it; that blood then mixes with blood from the occluded lobe, which never meets the enriched gas and remains venous in composition, and the oxygen content of the mixture, and hence its PO₂, stays low. The balloon blocked one lobar bronchus, not the airways of both lungs. Hypoxic vasoconstriction reduces flow to the unventilated lobe rather than increasing it. A larger partial-pressure difference speeds diffusion rather than slowing it.',
        skill: '3B gas exchange',
      },
      {
        question: 'A clot blocks the branch of the pulmonary artery supplying one lobe while ventilation of that lobe continues. Compared with the gas in normally perfused alveoli, the gas in the alveoli of the affected lobe will have a:',
        options: [
          'lower PO₂ and a higher PCO₂.',
          'lower PO₂ and a lower PCO₂.',
          'higher PO₂ and a lower PCO₂.',
          'higher PO₂ and a higher PCO₂.',
        ],
        correctAnswer: 2,
        explanation:
          'Alveolar gas normally differs from inspired air because capillary blood continually removes oxygen from it and adds carbon dioxide to it. Where there is no blood flow, neither exchange occurs, so the gas in those alveoli comes to resemble humidified inspired air: its PO₂ is higher and its PCO₂ lower than in perfused alveoli. A lower PO₂ with a higher PCO₂ describes alveoli that are perfused but poorly ventilated, the opposite situation. Because the removal of oxygen and the addition of carbon dioxide stop together, the two partial pressures must shift in opposite directions, which excludes the two options in which both rise or both fall.',
        skill: '3B ventilation–perfusion',
      },
      {
        question: 'The fall in arterial PO₂ that patients with a thickened diffusion barrier show during exercise is best explained by the fact that exercise:',
        options: [
          'lowers alveolar PO₂, because ventilation rises less than oxygen consumption does.',
          'shortens the time each red cell spends in a capillary, so that equilibration is incomplete.',
          'raises pulmonary arterial pressure, which thickens the barrier still further in every alveolus.',
          'diverts blood into unventilated alveoli, creating a shunt that was not present at rest.',
        ],
        correctAnswer: 1,
        explanation:
          'At rest a red cell has about three times as long in the capillary as normal equilibration requires, and this reserve lets blood equilibrate even across a thickened barrier that slows diffusion. During exercise cardiac output rises and transit time shortens; with slowed diffusion the blood now leaves the capillary before reaching the alveolar PO₂. Ventilation increases in proportion to metabolic demand during exercise, so alveolar PO₂ does not fall. Exercise does not acutely thicken the barrier. Exercise recruits and distends capillaries in ventilated lung rather than creating unventilated, perfused regions.',
        skill: '3B diffusion',
      },
    ],
  },
]

// Discrete skills: d01 S2 · d02–d08 S1
export const FL6_BIO_BIOCHEM_A_DISCRETES: MCATDiscreteQuestion[] = [
  {
    id: 'fl6-bb-a-d01',
    section: 'bio-biochem',
    discipline: 'physiology',
    question: 'T-cell precursors leave the bone marrow and complete their maturation in the thymus. A mouse whose thymus is removed on the day of birth, before mature T cells have populated its lymphoid tissues, would later be expected to show:',
    options: [
      'impaired killing of virus-infected cells and weak antibody responses to protein antigens.',
      'impaired killing of virus-infected cells but normal antibody responses to protein antigens.',
      'normal killing of virus-infected cells but no B cells in the blood or lymphoid tissues.',
      'normal killing of virus-infected cells and normal antibody responses to protein antigens.',
    ],
    correctAnswer: 0,
    explanation:
      'Without a thymus, neither cytotoxic nor helper T cells mature. The loss of cytotoxic T cells impairs the killing of virus-infected cells, and the loss of helper T cells weakens antibody production, because B cells need T-cell help to respond fully to protein antigens. Normal antibody responses would be expected only if B cells acted independently of T cells for such antigens. B cells mature in the bone marrow, so their numbers are not reduced by removing the thymus. A fully normal immune response is what would follow removal of the thymus from an adult, whose peripheral T-cell pool is already established, not from a newborn.',
    skill: '3B thymus and T-cell maturation',
  },
  {
    id: 'fl6-bb-a-d02',
    section: 'bio-biochem',
    discipline: 'physiology',
    question: 'A stimulus of greater-than-normal strength can evoke an action potential during the relative refractory period of an axon but not during the absolute refractory period. This difference exists because, by the time of the relative refractory period:',
    options: [
      'the Na⁺/K⁺ pump has restored the ion gradients that the first action potential dissipated.',
      'voltage-gated K⁺ channels have all closed, returning the membrane to its resting potential.',
      'enough voltage-gated Na⁺ channels have recovered from inactivation to be opened again.',
      'voltage-gated Ca²⁺ channels have opened, supplying the inward current that Na⁺ channels cannot.',
    ],
    correctAnswer: 2,
    explanation:
      'During the absolute refractory period, voltage-gated Na⁺ channels are open or inactivated and cannot be opened by any stimulus. As the membrane repolarizes, channels return from the inactivated state to the closed state, from which they can open; once enough have recovered, a strong stimulus can reach threshold even though K⁺ channels that are still open oppose depolarization. A single action potential changes the ion gradients negligibly, so the pump is not what ends refractoriness. If the K⁺ channels had all closed, the membrane would be back at rest and a normal stimulus would suffice. Axonal action potentials are carried by Na⁺ channels, not by Ca²⁺ channels.',
    skill: '3A refractory periods',
  },
  {
    id: 'fl6-bb-a-d03',
    section: 'bio-biochem',
    discipline: 'physiology',
    question: 'A segment of small intestine is removed from an animal and placed in an oxygenated bath. When its wall is stretched by a bolus, the muscle contracts behind the bolus and relaxes ahead of it; the response disappears when a toxin that blocks neuronal action potentials is added. Coordination of this response depends on:',
    options: [
      'vagal neurons whose cell bodies lie in the brainstem.',
      'sympathetic neurons whose cell bodies lie in abdominal ganglia.',
      'pacemaker cells that drive smooth muscle without neural input.',
      'sensory and motor neurons whose cell bodies lie within the gut wall.',
    ],
    correctAnswer: 3,
    explanation:
      'The isolated segment has been cut off from the central nervous system and from ganglia outside the gut, yet it still produces a coordinated, directional reflex that requires neuronal action potentials. The circuit must therefore be contained in the gut wall: the enteric nervous system, whose plexuses include sensory neurons that detect stretch, interneurons, and excitatory and inhibitory motor neurons. Vagal and sympathetic cell bodies are absent from the excised tissue, so neither can coordinate the response. Pacemaker cells set the rhythm of slow waves, but a response abolished by a neuronal toxin cannot be produced without neural input.',
    skill: '3B enteric nervous system',
  },
  {
    id: 'fl6-bb-a-d04',
    section: 'bio-biochem',
    discipline: 'genetics',
    question: 'In a large kindred, 50 people carry a dominant disease allele. Forty of them show signs of the disorder, and among these the signs range from a few pigmented skin patches to disabling tumors. Which description is accurate?',
    options: [
      'Penetrance is 80%, and the range of severity reflects incomplete dominance.',
      'Penetrance is 80%, and the range of severity reflects variable expressivity.',
      'Expressivity is 80%, and the range of severity reflects incomplete penetrance.',
      'Expressivity is 20%, and the range of severity reflects variable penetrance.',
    ],
    correctAnswer: 1,
    explanation:
      'Penetrance is the fraction of individuals with a genotype who show the associated phenotype at all: 40 of 50, or 80%. Expressivity describes how strongly or in what form the phenotype appears among those who do show it, so a range from mild to severe is variable expressivity. Incomplete dominance refers to a heterozygote whose phenotype is intermediate between the two homozygotes and does not describe differences among heterozygotes. Expressivity is not reported as a percentage of carriers affected, and the two options that do so interchange the terms.',
    skill: '1C penetrance and expressivity',
  },
  {
    id: 'fl6-bb-a-d05',
    section: 'bio-biochem',
    discipline: 'molecular biology',
    question: 'A synthetic mRNA that has neither a 5′ cap nor a poly-A tail is injected into the cytoplasm of a frog oocyte together with an otherwise identical mRNA that has both. Far less protein is made from the unmodified mRNA, primarily because it:',
    options: [
      'is degraded sooner by exonucleases and recruits ribosomes less efficiently.',
      'cannot pass through nuclear pores to reach cytoplasmic ribosomes.',
      'retains introns that place premature stop codons in the message.',
      'lacks the start codon, which the cap supplies after transcription.',
    ],
    correctAnswer: 0,
    explanation:
      'The 5′ cap and the poly-A tail protect the two ends of an mRNA from exonucleases, and proteins bound to the cap and tail cooperate to recruit the small ribosomal subunit; an mRNA lacking both is short-lived and poorly translated. Both mRNAs were injected directly into the cytoplasm, so nuclear export is not at issue. The two mRNAs are otherwise identical, so they do not differ in introns. The cap is a modified guanine nucleotide added to the 5′ end and does not contain or supply the AUG start codon, which lies in the transcribed sequence.',
    skill: '1B mRNA processing',
  },
  {
    id: 'fl6-bb-a-d06',
    section: 'bio-biochem',
    discipline: 'biochemistry',
    question: 'Three reactions of glycolysis have large negative free-energy changes in the cell and are replaced by different enzymes during gluconeogenesis; the remaining reactions operate near equilibrium and are shared by the two pathways. Which enzyme catalyzes one of the shared, near-equilibrium reactions?',
    options: ['Hexokinase', 'Phosphofructokinase-1', 'Phosphoglycerate kinase', 'Pyruvate kinase'],
    correctAnswer: 2,
    explanation:
      'Phosphoglycerate kinase transfers a phosphoryl group from 1,3-bisphosphoglycerate to ADP in a reaction that is close to equilibrium in the cell and runs in reverse during gluconeogenesis, even though it produces ATP in the glycolytic direction. The three irreversible steps are those catalyzed by hexokinase, phosphofructokinase-1, and pyruvate kinase; gluconeogenesis bypasses them with glucose 6-phosphatase, fructose 1,6-bisphosphatase, and the pair pyruvate carboxylase and PEP carboxykinase.',
    skill: '1D glycolysis',
  },
  {
    id: 'fl6-bb-a-d07',
    section: 'bio-biochem',
    discipline: 'biochemistry',
    question: 'α-Keratin, the principal protein of hair, is a fibrous protein, whereas myoglobin is a globular protein. Compared with myoglobin, α-keratin:',
    options: [
      'is more soluble in water and folds into a compact shape around a hydrophobic core.',
      'lacks regular secondary structure and behaves as a flexible random coil.',
      'binds a prosthetic group and functions chiefly in catalysis or transport.',
      'is insoluble in water and forms long coiled coils that bear mechanical load.',
    ],
    correctAnswer: 3,
    explanation:
      'Fibrous proteins are elongated, water-insoluble molecules built from one repeating element of secondary structure and serve structural roles; in α-keratin, pairs of α-helices wind around each other into coiled coils that assemble into strong filaments. Water solubility and a compact fold around a hydrophobic core are the properties of globular proteins such as myoglobin. α-Keratin is almost entirely α-helical, so it does not lack regular secondary structure. Binding a prosthetic group and carrying a ligand describes myoglobin, which holds heme and stores oxygen.',
    skill: '1A protein structure',
  },
  {
    id: 'fl6-bb-a-d08',
    section: 'bio-biochem',
    discipline: 'cell biology',
    question: 'A 20-kDa protein with no targeting sequence is found in both the cytoplasm and the nucleus. A 120-kDa protein enters the nucleus only if it carries a short stretch of basic residues, and it arrives fully folded. These observations indicate that nuclear pore complexes:',
    options: [
      'let small proteins diffuse through but admit large ones only by signal-dependent transport.',
      'unfold each protein and thread it through a narrow channel, as mitochondrial translocons do.',
      'admit proteins only while the nuclear envelope is disassembled during mitosis.',
      'exclude every protein that lacks a signal sequence that is cleaved after entry.',
    ],
    correctAnswer: 0,
    explanation:
      'The small protein reaches the nucleus without any signal, which shows that the pore allows passive diffusion of small molecules, while the large protein requires a nuclear localization signal, which is recognized by transport receptors that carry cargo through the pore. Arrival of the large protein in its folded state shows that the pore is a wide aqueous channel, unlike mitochondrial translocons, which pass unfolded chains. Nuclear import goes on throughout interphase, when the envelope is intact. The small protein enters without a signal, and nuclear localization signals are not removed after import.',
    skill: '2A nuclear transport',
  },
]
