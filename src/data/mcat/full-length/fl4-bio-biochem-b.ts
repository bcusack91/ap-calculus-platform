/**
 * MCAT full-length FORM 4 — Bio/Biochem section, file B (passages 6–10 +
 * discretes 1–7). Authored 2026-09-30 against the AAMC-representative
 * blueprint (scratchpad/mcat-fl/BLUEPRINT.md + BLUEPRINT-F34.md): 400–600-word
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

export const FL4_BIO_BIOCHEM_B_PASSAGES: MCATPassage[] = [
  // ────────────────────────────────────────────────────────────────────────
  // 6. METABOLISM — Exercise energy systems, lactate and the Cori cycle (experiment, table)
  // ────────────────────────────────────────────────────────────────────────
  {
    id: 'fl4-bb-b-06',
    section: 'bio-biochem',
    discipline: 'metabolism',
    title: 'Energy Systems of Working Muscle Across Exercise Intensities',
    passageText:
      'Skeletal muscle stores only enough ATP to sustain maximal contraction for a few seconds, yet the ATP concentration in working muscle changes surprisingly little even when ATP turnover rises more than 100-fold above its resting rate. Three systems resynthesize ATP. The phosphagen system uses phosphocreatine (PCr), which donates its phosphoryl group to ADP in a reaction catalyzed by creatine kinase: PCr + ADP ⇌ creatine + ATP. Anaerobic glycolysis converts glucose units, derived mainly from muscle glycogen, to pyruvate, which lactate dehydrogenase then reduces to lactate. Oxidative phosphorylation completely oxidizes pyruvate and fatty acids in the mitochondria. The three systems differ in the maximal rate at which they can supply ATP and in the time needed to reach that rate: the phosphagen system is the fastest but has the smallest capacity, whereas oxidative metabolism has the largest capacity but the lowest maximal rate.\n\nLactate released from muscle is taken up by other tissues. The heart and slow oxidative muscle fibers convert it back to pyruvate and oxidize it, and the liver uses it as a substrate for gluconeogenesis, returning glucose to the blood, from which it can again be taken up by muscle. This exchange of lactate and glucose between muscle and liver is called the Cori cycle.\n\nInvestigators studied eight endurance-trained cyclists. On separate days, after 2 days on a standardized diet and an overnight fast, each cyclist pedaled for 10 minutes at 40%, 65%, or 85% of maximal oxygen uptake ($\\dot{V}\\text{O}_2\\text{max}$), or performed a single 10-second all-out sprint. A needle biopsy of the vastus lateralis muscle was taken at rest and at the instant each bout ended, frozen within 5 seconds, and analyzed for ATP, PCr, and lactate; venous blood lactate was measured at the same moment. During the 10-minute bouts, the respiratory exchange ratio (RER, the ratio of $\\text{CO}_2$ produced to $\\text{O}_2$ consumed) was measured from expired air. An RER of 0.70 indicates that only fat is being oxidized and an RER of 1.00 that only carbohydrate is being oxidized; between these extremes, the fraction of energy derived from carbohydrate rises approximately linearly with RER. RER was not measured during the sprint, because gas exchange cannot reach a steady state within 10 seconds. The results are summarized in Table 1.\n\nIn a second study, the same cyclists repeated the 85% bout 1 hour after an intravenous infusion of dichloroacetate (DCA), a compound that inhibits pyruvate dehydrogenase kinase. This kinase phosphorylates and thereby inactivates the pyruvate dehydrogenase complex (PDC), the mitochondrial enzyme that converts pyruvate to acetyl-CoA. After DCA, PDC activity in resting muscle was about three times higher than after a saline infusion. At the end of the 85% bout, muscle lactate was 40% lower and PCr was 25% higher in the DCA trial than in the saline trial, whereas steady-state oxygen uptake did not differ between the two trials.',
    figure:
      '**Table 1. Mean values in the vastus lateralis and venous blood at rest and at the end of each exercise bout (dm = dry muscle)**\n\n| Measurement | Rest | 40% | 65% | 85% | 10-s sprint |\n|---|---|---|---|---|---|\n| Muscle ATP (mmol/kg dm) | 24 | 24 | 23 | 22 | 19 |\n| Muscle PCr (mmol/kg dm) | 80 | 68 | 52 | 30 | 44 |\n| Muscle lactate (mmol/kg dm) | 4 | 5 | 10 | 48 | 36 |\n| Blood lactate (mM) | 0.9 | 1.0 | 1.8 | 7.0 | 1.6 |\n| RER | 0.80 | 0.85 | 0.90 | 0.97 | not measured |',
    questions: [
      {
        question:
          'Based on Table 1, approximately what percentage of the energy obtained from oxidized fuel was supplied by fat during the 40% bout and during the 85% bout, respectively?',
        options: ['15% and 3%', '50% and 90%', '50% and 10%', '85% and 97%'],
        correctAnswer: 2,
        explanation:
          'The carbohydrate fraction rises linearly from 0 at an RER of 0.70 to 1 at an RER of 1.00, so it equals (RER − 0.70)/0.30. At 40%, (0.85 − 0.70)/0.30 = 0.50, leaving 50% from fat; at 85%, (0.97 − 0.70)/0.30 = 0.90, leaving 10% from fat. The pair 50% and 90% gives the carbohydrate share at 85% rather than the fat share. The pair 15% and 3% subtracts the RER from 1.00, which ignores the fact that pure fat oxidation gives an RER of 0.70, not 0. The pair 85% and 97% simply reads the RER values as percentages.',
        skill: '1D fuel selection (data interpretation)',
      },
      {
        question:
          'During the 10-second sprint, the vastus lateralis hydrolyzes several times its entire ATP content. Which of the following best explains why the muscle ATP concentration nevertheless fell by only about one-fifth?',
        options: [
          'Creatine kinase rapidly rephosphorylated ADP to ATP at the expense of the phosphocreatine pool, buffering the ATP level',
          'Oxidative phosphorylation reached its maximal rate within the first second of the sprint and replaced the ATP used',
          'Myosin hydrolyzed phosphocreatine in place of ATP during the sprint, so that little ATP was consumed',
          'Lactate dehydrogenase generated ATP directly as it reduced pyruvate to lactate in the working fibers',
        ],
        correctAnswer: 0,
        explanation:
          'Creatine kinase transfers phosphoryl groups from PCr to ADP within the first seconds of contraction, so ATP is buffered while PCr falls (glycolysis, reflected in the rise in muscle lactate, supplies much of the rest); Table 1 shows PCr dropping from 80 to 44 mmol/kg dm while ATP falls only from 24 to 19. Oxidative phosphorylation has the lowest maximal rate and takes the longest to activate, so it cannot account for ATP resynthesis in the first seconds. Myosin is an ATPase and does not use PCr as a substrate. Lactate dehydrogenase makes no ATP; it regenerates $\\text{NAD}^+$ so that glycolysis can continue.',
        skill: '1D phosphagen system',
      },
      {
        question:
          'Which conclusion about the saline trial at 85% of maximal oxygen uptake is best supported by the results of the DCA study?',
        options: [
          'Lactate accumulated mainly because the mitochondria of the working fibers were short of oxygen',
          'Lactate accumulated mainly because lactate dehydrogenase activity rose at the highest workload',
          'Lactate accumulated mainly because the liver took up lactate more slowly during hard exercise',
          'Lactate accumulated partly because PDC activity lagged behind pyruvate production',
        ],
        correctAnswer: 3,
        explanation:
          'Activating PDC with DCA lowered muscle lactate by 40% and spared PCr even though steady-state oxygen uptake was unchanged, so in the saline trial some pyruvate was reduced to lactate because PDC activity limited its entry into oxidation, not only because oxygen was lacking. If oxygen shortage were the main cause, raising PDC activity without changing oxygen uptake should not have reduced lactate so much. DCA does not act on lactate dehydrogenase, and nothing in the study measured a change in its activity. Hepatic uptake affects blood lactate, but the drop occurred in muscle lactate and followed a change in the muscle enzyme that forms acetyl-CoA.',
        skill: '1D pyruvate fate (research interpretation)',
      },
      {
        question:
          'Consider one glucose molecule that makes a complete turn of the Cori cycle: it is converted to two lactate in muscle, and the two lactate are converted back to one glucose in the liver. What is the net change in ATP (and ATP-equivalent) for the body as a whole?',
        options: ['A net gain of 2 ATP', 'A net cost of 4 ATP', 'A net cost of 6 ATP', 'No net change in ATP'],
        correctAnswer: 1,
        explanation:
          'Anaerobic glycolysis of one glucose to two lactate yields 2 ATP in muscle, while gluconeogenesis from two lactate consumes 4 ATP and 2 GTP (6 ATP-equivalents) in the liver, for a net cost of 4. A net gain of 2 counts only the muscle half of the cycle. A net cost of 6 counts only the liver half. No net change would require gluconeogenesis to be the exact reverse of glycolysis, but its bypass reactions are driven by additional ATP and GTP hydrolysis that makes the pathway irreversible.',
        skill: '1D Cori cycle energetics',
      },
      {
        question:
          'The investigators placed the cyclists on a standardized diet for 2 days before every trial. This was done mainly to control for which variable that could otherwise distort the comparison of RER values across trials?',
        options: [
          'The amount of glycogen stored in the muscle at the start of each bout',
          'The maximal oxygen uptake of each cyclist on each testing day',
          'The proportion of slow oxidative fibers in each cyclist’s vastus lateralis muscle',
          'The activity of creatine kinase in the vastus lateralis',
        ],
        correctAnswer: 0,
        explanation:
          'RER reflects the mix of carbohydrate and fat being oxidized, and that mix depends strongly on how much glycogen is available; recent diet changes muscle glycogen within a day or two, so fixing the diet keeps starting glycogen comparable across trials. Maximal oxygen uptake reflects cardiovascular fitness and does not change meaningfully over days because of diet. Fiber-type composition changes only over weeks to months of training, not with 2 days of diet. Creatine kinase activity is not set by recent diet and would not alter the RER of steady exercise.',
        skill: '1D research design in exercise metabolism',
      },
    ],
  },

  // ────────────────────────────────────────────────────────────────────────
  // 7. PHYSIOLOGY — GI hormones and gastric acid, perfusion study (experiment, table)
  // ────────────────────────────────────────────────────────────────────────
  {
    id: 'fl4-bb-b-07',
    section: 'bio-biochem',
    discipline: 'physiology',
    title: 'Hormonal Control of Gastric Acid, Pancreatic Enzymes, and Bile',
    passageText:
      'The stomach and small intestine coordinate their secretions through hormones released by endocrine cells scattered in the gut lining. G cells in the gastric antrum release gastrin, which reaches the parietal cells of the gastric body through the bloodstream and stimulates them to secrete HCl, both directly and by causing nearby enterochromaffin-like cells to release histamine. Parietal cells also respond to acetylcholine released by vagal nerve endings. All three stimuli ultimately increase the activity of the $\\text{H}^+/\\text{K}^+$-ATPase in the apical membrane of the parietal cell, which pumps $\\text{H}^+$ into the gastric lumen in exchange for $\\text{K}^+$. Endocrine cells of the duodenal mucosa release two further hormones, secretin from S cells and cholecystokinin (CCK) from I cells. These hormones act on the pancreas, the biliary tract, and the stomach itself, and which of them is released depends on what enters the duodenum.\n\nTo study these relationships, investigators placed a multi-lumen tube in ten healthy volunteers who had fasted overnight, so that the stomach and the duodenum could be perfused separately. The six conditions described below were tested on separate days in random order, and no volunteer took any medication other than the study drug. Venous blood was drawn every 10 minutes, and hormone concentrations were measured by immunoassay. Gastric contents were aspirated continuously, so that no gastric fluid passed into the duodenum, and an inflated balloon in the upper jejunum kept duodenal perfusate from flowing farther down the intestine. Each condition lasted 60 minutes, and hormone concentrations and secretory outputs were measured during the final 30 minutes. Gastric acid output was determined by titrating the gastric aspirate, with a correction for any bicarbonate added to the perfusate. Pancreatic lipase output was measured in fluid aspirated from the duodenum below the opening of the pancreatic duct, and gallbladder volume was measured by ultrasound imaging.\n\nIn condition 1, the stomach and duodenum were both perfused with isotonic saline. In conditions 2 and 3, the stomach was perfused with a solution of peptides and amino acids; in condition 2, $\\text{NaHCO}_3$ was added as needed to hold intragastric pH at 5.5, whereas in condition 3 the pH was allowed to fall freely and reached 1.5. In conditions 4 and 5, the stomach received saline while the duodenum was perfused with HCl at pH 2.0 (condition 4) or with an emulsion of oleic acid (condition 5). Condition 6 repeated condition 1 after the volunteers had taken omeprazole, a drug that binds covalently to the $\\text{H}^+/\\text{K}^+$-ATPase and irreversibly inactivates it, once daily for 7 days. The results are shown in Table 1.',
    figure:
      '**Table 1. Plasma hormone concentrations and secretory responses (means of 10 volunteers)**\n\n| Condition | Gastrin (pg/mL) | Secretin (pmol/L) | CCK (pmol/L) | Gastric acid output (mmol $\\text{H}^+$/h) | Pancreatic lipase output (kU/h) | Gallbladder volume (% of condition 1) |\n|---|---|---|---|---|---|---|\n| 1. Saline | 20 | 1.0 | 1.0 | 2.0 | 10 | 100 |\n| 2. Gastric peptides, pH held at 5.5 | 110 | 1.0 | 1.2 | 22 | 11 | 98 |\n| 3. Gastric peptides, pH free | 45 | 1.1 | 1.1 | 12 | 10 | 100 |\n| 4. Duodenal HCl | 18 | 7.5 | 1.0 | 0.8 | 14 | 97 |\n| 5. Duodenal oleic acid | 20 | 1.4 | 8.0 | 0.9 | 95 | 35 |\n| 6. Saline after omeprazole | 160 | 0.9 | 1.0 | 0.2 | 10 | 100 |',
    questions: [
      {
        question: 'Which conclusion is best supported by a comparison of conditions 2 and 3?',
        options: [
          'Peptides in the stomach stimulate acid secretion only after the gastric pH has fallen below about 2',
          'Acid in the stomach stimulates the G cells, so that acid secretion amplifies itself by positive feedback',
          'Amino acids stimulate parietal cells through the blood by a route that does not involve gastrin at all',
          'Acid in the antrum inhibits gastrin release, so that acid secretion limits its own rate',
        ],
        correctAnswer: 3,
        explanation:
          'The peptide stimulus was the same in both conditions; when the pH was allowed to fall to 1.5, gastrin fell from 110 to 45 pg/mL and acid output fell from 22 to 12 mmol/h, so luminal acid inhibits gastrin release, a negative feedback loop. Positive feedback would require gastrin to be higher at the lower pH, which is the opposite of the data. Peptides raised gastrin and acid output most when the pH was held at 5.5, so a low pH is not needed for their effect. Acid output tracked gastrin across the two conditions, which gives no support for a gastrin-independent route.',
        skill: '3B negative feedback in gastric secretion (data interpretation)',
      },
      {
        question:
          'When omeprazole is stopped after long-term use, gastric acid output often rises above its pre-treatment level for several days. Which explanation is most consistent with the data in Table 1?',
        options: [
          'Omeprazole permanently activated the gastrin receptors of parietal cells, which then fired at a high rate once the drug was gone',
          'Gastrin remains elevated while newly synthesized, uninhibited pumps accumulate, driving acid output above baseline',
          'Secretin fell during treatment, removing an inhibitor of acid secretion that takes several days to reappear',
          'Inactivated pump molecules are reactivated as the drug leaves the blood, and each then works at an increased rate',
        ],
        correctAnswer: 1,
        explanation:
          'Condition 6 shows that omeprazole leaves gastrin eight times higher than in condition 1 (160 vs 20 pg/mL). Because the drug inactivates pumps irreversibly, acid secretion can return only as new pumps are synthesized, and while gastrin is still high those new pumps are driven hard, producing a rebound. Omeprazole acts on the pump, not the gastrin receptor, and nothing suggests it activates receptors. Secretin was essentially unchanged by omeprazole (0.9 vs 1.0 pmol/L). Irreversible inactivation means the inhibited pumps are not reactivated; recovery depends on new synthesis.',
        skill: '3B gastric acid regulation',
      },
      {
        question: 'The hormone that increased most in condition 5 would also be expected to:',
        options: [
          'increase the secretion of HCl by parietal cells in the body of the stomach.',
          'speed the passage of chyme from the stomach into the duodenum.',
          'slow gastric emptying, giving the small intestine more time to digest and absorb the fat.',
          'convert trypsinogen to active trypsin inside the pancreatic acinar cells.',
        ],
        correctAnswer: 2,
        explanation:
          'CCK rose eightfold with duodenal fat and was accompanied by gallbladder contraction and a large rise in lipase output; CCK also slows gastric emptying, matching delivery of fat to the intestine’s digestive capacity. CCK does not stimulate parietal cells to secrete more acid; acid output actually fell in condition 5. Speeding gastric emptying is the opposite of CCK’s effect. Trypsinogen is activated in the duodenal lumen by enteropeptidase; activation inside acinar cells would digest the pancreas and is not a hormonal effect.',
        skill: '3B cholecystokinin actions',
      },
      {
        question:
          'The investigators hypothesized that duodenal fat reduces gastric acid output by releasing CCK. Which additional experiment would test this hypothesis most directly?',
        options: [
          'Repeat condition 5 after giving a CCK-receptor antagonist and determine whether acid output still falls',
          'Infuse oleic acid intravenously instead of into the duodenum and then measure the resulting gastric acid output',
          'Repeat condition 5 with twice the concentration of oleic acid and measure gallbladder volume again',
          'Measure plasma CCK during condition 4 to confirm that duodenal acid does not release the hormone',
        ],
        correctAnswer: 0,
        explanation:
          'If blocking CCK receptors prevents duodenal fat from lowering acid output, CCK is necessary for the effect; if acid still falls, another mediator must be responsible. Intravenous oleic acid bypasses the I cells, so a result would say nothing about whether CCK mediates the duodenal effect. Doubling the fat dose and remeasuring gallbladder volume tests the dose dependence of a different CCK action, not the link to acid secretion. CCK was already measured in condition 4 and was unchanged; confirming that again does not test whether CCK causes the fall in acid.',
        skill: '3B research design in GI physiology',
      },
    ],
  },

  // ────────────────────────────────────────────────────────────────────────
  // 8. CELL BIOLOGY — Epithelia, ECM, adhesion and EMT in metastasis (information)
  // ────────────────────────────────────────────────────────────────────────
  {
    id: 'fl4-bb-b-08',
    section: 'bio-biochem',
    discipline: 'cell biology',
    title: 'Epithelial Architecture and Its Dismantling in Metastasis',
    passageText:
      'Epithelia line the body’s surfaces and cavities and form the secretory units of glands such as the breast, liver, and pancreas. An epithelial cell is polarized: its apical surface faces a lumen or the external environment, whereas its basal surface rests on the basement membrane, a thin sheet of extracellular matrix (ECM) built mainly from type IV collagen and the glycoprotein laminin. Neighboring epithelial cells are held together by several kinds of junctions. At adherens junctions, the transmembrane protein E-cadherin binds E-cadherin on the adjacent cell. This homophilic binding depends on $\\text{Ca}^{2+}$ ions, which rigidify the extracellular domains of the protein, and the cytoplasmic tail of E-cadherin is linked through catenin proteins to a belt of actin filaments. Cells attach to the basement membrane itself through integrins, heterodimeric receptors that bind laminin or collagen outside the cell and connect to the actin cytoskeleton inside it. Integrin engagement also activates intracellular kinases whose signals promote cell survival and proliferation. When normal epithelial cells lose contact with their matrix, these signals cease and the cells undergo a form of apoptosis called anoikis.\n\nBeneath the basement membrane lies connective tissue, in which fibroblasts are embedded in an ECM dominated by fibrillar type I collagen, the most abundant protein in the body. Each collagen molecule is a triple helix of three polypeptide chains, and each chain consists largely of the repeating sequence Gly–X–Y, in which X and Y are frequently proline and hydroxyproline. After secretion, collagen molecules assemble into fibrils that are covalently cross-linked, giving tendons, skin, and interstitial matrix great tensile strength. The ECM also contains proteoglycans, which bind large amounts of water and resist compression.\n\nMost deaths from cancer are caused by metastasis, and most solid cancers are carcinomas, which arise from epithelial cells. To spread, a carcinoma cell must detach from its neighbors, cross the basement membrane, move through connective tissue, enter and survive in the blood or lymph, and finally establish a new colony in a distant organ. Many carcinoma cells at the invasive edge of a tumor undergo an epithelial–mesenchymal transition (EMT). During EMT, signals from the tumor environment, such as the growth factor TGF-β, induce transcription factors that bind the promoter of the E-cadherin gene and repress its transcription while activating genes typical of fibroblasts, including N-cadherin and the intermediate-filament protein vimentin. The cells lose apical–basal polarity, adopt an elongated shape with a leading front and a trailing rear, and secrete matrix metalloproteinases (MMPs), zinc-dependent proteases that degrade collagen and other ECM components. Metastases growing in distant organs, however, frequently re-express E-cadherin and resemble the epithelium of the primary tumor, a change known as the mesenchymal–epithelial transition (MET).',
    questions: [
      {
        question:
          'A confluent sheet of cultured epithelial cells growing on a laminin-coated dish is transferred to a medium that contains normal $\\text{Mg}^{2+}$ but almost no $\\text{Ca}^{2+}$. Which change is most likely to occur within minutes?',
        options: [
          'The cells detach from the laminin coating but stay firmly joined to one another as a sheet',
          'The cells separate from one another but remain attached to the laminin-coated dish',
          'The cells stay joined, because cadherin binding needs only protein–protein contact',
          'The cells undergo anoikis at once, because integrins require calcium to bind any ligand',
        ],
        correctAnswer: 1,
        explanation:
          'E-cadherin’s homophilic binding requires $\\text{Ca}^{2+}$, so removing calcium disrupts adherens junctions and the cells come apart from one another, while integrin binding to laminin, which the passage does not describe as calcium-dependent and which is supported by the $\\text{Mg}^{2+}$ still present, keeps them on the dish. Detachment from the dish with intact cell–cell contacts reverses the two dependencies. Cadherin binding is not calcium-independent; the passage states the ions rigidify the extracellular domains. Immediate anoikis would require loss of matrix attachment, and apoptosis takes hours, not minutes.',
        skill: '2A cell adhesion molecules',
      },
      {
        question:
          'Which finding, if true, would most weaken the view that the loss of E-cadherin during EMT reflects a reversible change in gene regulation?',
        options: [
          'Cells at the invasive edge contain high levels of transcription factors bound to the E-cadherin promoter',
          'Invasive cells cultured without TGF-β re-express E-cadherin within several days of its removal',
          'Liver metastases of the carcinoma express E-cadherin at levels similar to those in the primary tumor',
          'Invasive-edge cells carry deletions in the E-cadherin gene that are absent from the tumor core',
        ],
        correctAnswer: 3,
        explanation:
          'A deletion of the E-cadherin gene is a permanent genetic change that could not be undone by removing a signal, so finding it only in invasive cells would suggest loss by mutation rather than by regulated repression. Promoter-bound repressive transcription factors are exactly what regulated repression predicts. Re-expression after TGF-β is removed shows the change is reversible. Re-expression in metastases (MET) likewise indicates the E-cadherin gene remained intact and could be switched back on.',
        skill: '2A epithelial–mesenchymal transition (evaluating evidence)',
      },
      {
        question:
          'Carcinoma cells that survive for hours in the bloodstream and later seed metastases would be expected to have which alteration?',
        options: [
          'Constitutive activation of the survival kinases that are normally switched on only when integrins are bound to matrix',
          'Increased synthesis of type IV collagen, allowing the cells to build a basement membrane while in the blood',
          'Increased expression of E-cadherin, allowing the cells to bind tightly to the endothelial cells of vessels',
          'Complete loss of integrin expression, preventing the cells from attaching to any matrix protein',
        ],
        correctAnswer: 0,
        explanation:
          'Cells in the circulation have no matrix to bind, so the integrin-dependent survival signals stop and normal epithelial cells would die by anoikis; tumor cells that survive must generate those survival signals without matrix contact. Building a basement membrane in flowing blood is not a plausible way to supply matrix signals. E-cadherin mediates homophilic binding to other E-cadherin-bearing epithelial cells, not to endothelium, and it is lost during EMT. Losing all integrins would not prevent anoikis and would also prevent the cells from later attaching to matrix in the distant organ.',
        skill: '2A integrin signaling and anoikis',
      },
      {
        question:
          'In one form of osteogenesis imperfecta, a single glycine in the Gly–X–Y repeat of type I collagen is replaced by a bulkier amino acid. Why does this substitution disrupt the triple helix?',
        options: [
          'Glycine is the only residue in the repeat that can be hydroxylated for cross-linking',
          'Glycine’s side chain forms the hydrogen bonds that hold the three chains together',
          'Only glycine is small enough to fit where the three chains pack at the helix axis',
          'Glycine supplies a positive charge that pairs with the charge on hydroxyproline',
        ],
        correctAnswer: 2,
        explanation:
          'In the collagen triple helix every third residue lies at the crowded center where the three chains meet, and only glycine, whose side chain is a single hydrogen atom, fits there; a bulkier residue pushes the chains apart. Hydroxylation occurs on proline and lysine, not glycine. Glycine has no side chain capable of hydrogen bonding; interchain hydrogen bonds involve backbone groups. Glycine is uncharged at physiological pH, and hydroxyproline carries no charge for it to pair with.',
        skill: '1A structural proteins: collagen',
      },
    ],
  },

  // ────────────────────────────────────────────────────────────────────────
  // 9. MOLECULAR BIOLOGY — DNA methylation, HDAC inhibition and gene reactivation (experiment, chart)
  // ────────────────────────────────────────────────────────────────────────
  {
    id: 'fl4-bb-b-09',
    section: 'bio-biochem',
    discipline: 'molecular biology',
    title: 'Reactivating a Silenced Tumor-Suppressor Gene',
    passageText:
      'In the nucleus, DNA is wrapped around octamers of histone proteins to form nucleosomes, and how tightly nucleosomes are packed influences whether transcription factors and RNA polymerase II can reach a promoter. Two chemical modifications help determine this packing. In mammals, DNA methyltransferases (DNMTs) add a methyl group to carbon 5 of cytosine, almost exclusively at cytosines followed by guanine (CpG sites). The promoters of many genes contain CpG-rich regions called CpG islands, which are normally unmethylated. Methylation of a CpG island is associated with stable silencing of the gene, in part because methylated CpG sites are bound by proteins that recruit histone deacetylases (HDACs) and other repressive enzymes. Histone acetyltransferases add acetyl groups to lysine residues in the N-terminal tails of histones and HDACs remove them; acetylated promoters are generally associated with active transcription. Once established, the methylation pattern of a DNA region is copied each time the cell divides by DNMT1, an enzyme that acts on newly replicated DNA.\n\nMany tumors silence tumor-suppressor genes by promoter methylation rather than by mutation. Investigators studied a colon-cancer cell line in which the tumor-suppressor gene *TSX* has an intact coding sequence but a heavily methylated CpG island and produces almost no mRNA. The cells divide about once every 24 hours. Cultures were treated daily for 5 days with vehicle alone; with trichostatin A (TSA), an HDAC inhibitor; with 5-aza-2′-deoxycytidine (decitabine), a cytidine analog that is incorporated into DNA during replication, where it covalently traps and inactivates DNMT enzymes; or with both drugs. Each day, *TSX* mRNA was measured by reverse transcription followed by quantitative PCR and normalized to the mRNA of GAPDH, a metabolic enzyme expressed in all cells. The results are shown in Figure 1 as fold change relative to vehicle-treated cells on day 0.\n\nTwo further measurements were made on day 5. Bisulfite sequencing, which distinguishes methylated from unmethylated cytosines, showed that the fraction of methylated CpG sites in the *TSX* island was essentially unchanged by TSA but had fallen to less than half of its original value in cells given decitabine, whether alone or with TSA. Chromatin immunoprecipitation with an antibody against acetylated histone H3 detected little acetylated H3 at the *TSX* promoter in cells given vehicle or TSA, a modest amount in cells given decitabine alone, and a large amount in cells given both drugs.\n\nIn a separate experiment, cells were given decitabine together with aphidicolin, an inhibitor of replicative DNA polymerases that halts DNA synthesis without killing the cells. After 3 days, *TSX* mRNA and CpG methylation did not differ from those of vehicle-treated cells. Finally, a second gene that is silent in these cells but whose promoter is unmethylated rose more than tenfold in expression within 24 hours of TSA treatment alone.',
    chart: {
      title: 'Figure 1. TSX mRNA (normalized to GAPDH) in colon-cancer cells treated daily with each drug regimen',
      kind: 'line',
      xLabel: 'Time of treatment',
      xUnit: 'days',
      yLabel: 'TSX mRNA, fold change vs day-0 vehicle',
      xValues: [0, 1, 2, 3, 4, 5],
      yValues: [1.0, 1.0, 1.1, 1.0, 0.9, 1.0],
      seriesLabel: 'Vehicle',
      comparisonSeries: [
        { label: 'TSA', yValues: [1.0, 1.3, 1.4, 1.4, 1.5, 1.5] },
        { label: 'Decitabine', yValues: [1.0, 1.2, 3.0, 6.0, 9.0, 11.0] },
        { label: 'Decitabine + TSA', yValues: [1.0, 1.6, 10.0, 22.0, 34.0, 43.0] },
      ],
    },
    questions: [
      {
        question: 'Which statement best describes the day-5 results in Figure 1?',
        options: [
          'TSA alone raised TSX mRNA more than decitabine alone did',
          'Decitabine alone raised TSX mRNA about 40-fold relative to vehicle',
          'The combination raised TSX mRNA by about the sum of the single-drug increases',
          'The combination’s increase was about four times the sum of the single-drug increases',
        ],
        correctAnswer: 3,
        explanation:
          'On day 5 the increases over vehicle (1.0) were 0.5 for TSA (1.5) and 10 for decitabine (11), summing to about 10.5, whereas the combination rose by 42 (to 43), about four times that sum, which indicates synergy rather than additivity. An additive effect would have reached only about 11.5-fold. TSA alone produced the smallest increase of the three drug regimens. The roughly 40-fold value belongs to the combination; decitabine alone reached about 11-fold.',
        skill: '1B epigenetics (data interpretation)',
      },
      {
        question:
          'Which conclusion is best supported by comparing the response of TSX to TSA alone with the response of the second, unmethylated gene to TSA alone?',
        options: [
          'TSA did not enter these cells in amounts sufficient to inhibit HDACs',
          'TSX is silenced mainly by a mutation that prevents its mRNA from being made',
          'At a methylated promoter, blocking deacetylation alone cannot restore transcription',
          'TSA reactivates genes by removing methyl groups from the cytosines of their promoters',
        ],
        correctAnswer: 2,
        explanation:
          'TSA strongly induced the silent gene with an unmethylated promoter, so the drug entered the cells and inhibited HDACs; its near-absence of effect on TSX, whose island stayed methylated, shows that HDAC inhibition is insufficient while the promoter remains methylated, and only after decitabine lowered methylation did TSA add a large effect. The tenfold induction of the second gene rules out a failure of TSA to act. The TSX coding sequence is intact and the gene was reactivated by drugs, which argues against a mutation. Bisulfite sequencing showed that TSA did not change CpG methylation.',
        skill: '1B chromatin structure and gene silencing',
      },
      {
        question:
          'Which property of DNA methylation best explains both the delay before decitabine raised TSX mRNA and the result of the aphidicolin experiment?',
        options: [
          'Existing methyl marks are lost only as new DNA strands are synthesized without them',
          'DNMT1 removes methyl groups from CpG sites once it has been covalently trapped by the analog',
          'Methylated cytosines are excised by DNA repair enzymes only during the S phase of the cell cycle',
          'Decitabine must first be converted by DNMT1 into an active drug before it can enter the nucleus',
        ],
        correctAnswer: 0,
        explanation:
          'Methylation is maintained by DNMT1 copying the pattern onto each newly made strand; when DNMT1 is trapped, new strands stay unmethylated, so methylation is diluted with each round of replication and falls only after one or more divisions. Blocking replication with aphidicolin prevents both the incorporation of decitabine and the production of unmethylated daughter strands, so methylation and expression do not change. DNMT1 adds, rather than removes, methyl groups. Decitabine works by blocking methylation of new strands, not by triggering repair enzymes to excise methylated cytosines, and DNMT1 acts on DNA in the nucleus rather than activating the drug before it enters.',
        skill: '1B maintenance of DNA methylation',
      },
      {
        question:
          'The investigators expressed TSX mRNA relative to GAPDH mRNA. This normalization is valid only if:',
        options: [
          'the GAPDH promoter contains a CpG island that is methylated to the same degree as that of TSX.',
          'the amount of GAPDH mRNA per cell is not altered by any of the drug treatments.',
          'GAPDH mRNA is more abundant than TSX mRNA in the cells given vehicle alone.',
          'GAPDH, like TSX, is transcribed only in cells that are actively dividing.',
        ],
        correctAnswer: 1,
        explanation:
          'A reference gene corrects for differences in the amount of RNA analyzed, which works only if the reference itself is unaffected by the treatments; if a drug changed GAPDH mRNA, the TSX ratio would change even with no change in TSX expression. A methylated GAPDH promoter would make GAPDH respond to the same drugs, which is exactly what a reference must avoid. Relative abundance does not matter as long as both are measured accurately. GAPDH is a constitutively expressed metabolic gene, and a reference restricted to dividing cells would be confounded by any drug effect on proliferation.',
        skill: '1B research design: reference genes',
      },
      {
        question:
          'The large rise in acetylated histone H3 at the TSX promoter in cells given both drugs would be expected to favor transcription because acetylation:',
        options: [
          'adds a positive charge to histone tails, so they repel the DNA backbone and release it.',
          'hydrolyzes peptide bonds in histone tails, which releases DNA from the nucleosome core.',
          'attaches acetyl groups to DNA bases, which prevents repressor proteins from binding.',
          'neutralizes the positive charge of lysine side chains, weakening their hold on DNA phosphates.',
        ],
        correctAnswer: 3,
        explanation:
          'Lysine side chains are positively charged and bind the negatively charged phosphate backbone of DNA; acetylation converts the amine to an uncharged amide, weakening histone–DNA contacts and opening chromatin to the transcription machinery. Acetylation removes, rather than adds, positive charge, and a positive charge would attract rather than repel DNA. Acetyltransferases modify side chains and do not cleave peptide bonds. Histone acetylation modifies histone lysines, not DNA bases.',
        skill: '1B histone acetylation',
      },
    ],
  },

  // ────────────────────────────────────────────────────────────────────────
  // 10. BIOCHEMISTRY — Cholesterol synthesis, lipoproteins and statins (information)
  // ────────────────────────────────────────────────────────────────────────
  {
    id: 'fl4-bb-b-10',
    section: 'bio-biochem',
    discipline: 'biochemistry',
    title: 'Making, Moving, and Regulating Cholesterol',
    passageText:
      'Cholesterol is an essential component of animal cell membranes and the precursor of steroid hormones, vitamin D, and bile acids. Cells obtain it in two ways: by synthesizing it and by taking it up from circulating lipoproteins. Synthesis takes place in the cytosol and on the membrane of the endoplasmic reticulum (ER), chiefly in the liver. Three molecules of acetyl-CoA are first condensed to form 3-hydroxy-3-methylglutaryl-CoA (HMG-CoA), which HMG-CoA reductase, an integral protein of the ER membrane, reduces to mevalonate using two molecules of NADPH. This is the committed and rate-limiting step of the pathway. Mevalonate is converted to activated five-carbon isoprene units, which are joined to form the 30-carbon hydrocarbon squalene; squalene is then cyclized and modified to yield 27-carbon cholesterol.\n\nCells couple synthesis and uptake closely to their sterol content. A transcription factor called SREBP is made as an inactive protein embedded in the ER membrane, bound to an escort protein that senses the cholesterol content of that membrane. When ER cholesterol is low, the escort carries SREBP to the Golgi apparatus, where two proteases cleave it and release its cytosolic domain, which enters the nucleus and activates the genes encoding HMG-CoA reductase and the LDL receptor. When ER cholesterol is high, SREBP is retained in the ER, and HMG-CoA reductase protein is also ubiquitinated and degraded. Reductase activity is further lowered by phosphorylation when the cell’s energy charge is low.\n\nBecause cholesterol and triacylglycerols are insoluble in plasma, they travel in lipoproteins, spherical particles in which a core of nonpolar lipid is surrounded by a single layer of phospholipids, unesterified cholesterol, and proteins called apolipoproteins. Within cells and in plasma, much cholesterol is esterified to a fatty acid through its 3-hydroxyl group, forming a cholesteryl ester. The liver secretes very-low-density lipoproteins (VLDL), each carrying one molecule of apolipoprotein B-100. As lipoprotein lipase on capillary walls removes triacylglycerol, VLDL particles become smaller and denser, ultimately forming low-density lipoproteins (LDL). LDL receptors on the liver and other tissues bind apoB-100, cluster in clathrin-coated pits, and are internalized. In the acidic endosome, LDL dissociates from its receptor, which recycles to the cell surface, and the LDL is carried to lysosomes, where cholesteryl esters are hydrolyzed and the freed cholesterol travels to the ER. High-density lipoproteins (HDL) return cholesterol from peripheral tissues to the liver.\n\nStatins are competitive inhibitors of HMG-CoA reductase. Although they reduce hepatic cholesterol synthesis, most of their effect on plasma LDL concentration arises indirectly. Bile-acid sequestrants are resins that bind bile acids in the intestine and prevent their reabsorption; the liver replaces the lost bile acids by converting more of its own cholesterol into bile acids. Patients with familial hypercholesterolemia inherit loss-of-function mutations in the LDL-receptor gene and have high plasma LDL from birth.',
    questions: [
      {
        question:
          'A patient inherits two completely nonfunctional alleles of the LDL-receptor gene. Compared with a patient who has normal LDL receptors, how would plasma LDL most likely respond to a statin in this patient?',
        options: [
          'It would fall much more, because the statin would act without competition from receptor-derived cholesterol',
          'It would fall about as much, because the statin inhibits HMG-CoA reductase regardless of receptor status',
          'It would fall much less, because the statin could not raise the number of LDL receptors',
          'It would rise, because blocking cholesterol synthesis in the liver would raise the rate of VLDL secretion',
        ],
        correctAnswer: 2,
        explanation:
          'Lowering hepatic cholesterol with a statin activates SREBP, which increases LDL-receptor synthesis; the extra receptors clear LDL from plasma, and this is the indirect effect responsible for most LDL lowering. With no functional receptors, that route is unavailable, so LDL falls far less. Receptor-derived cholesterol does not compete with the statin for the reductase. Reductase inhibition still occurs, but reduced synthesis alone accounts for only a small part of the LDL-lowering effect. Reduced hepatic cholesterol tends to lower, not raise, the secretion of cholesterol-rich VLDL.',
        skill: '1D lipoprotein metabolism and statins',
      },
      {
        question:
          'Esterifying cholesterol to a fatty acid shifts the molecule from the surface layer of a lipoprotein into its core. Esterification has this effect because it:',
        options: [
          'adds a negatively charged carboxylate group that is repelled by the phospholipid head groups.',
          'converts the rigid steroid ring system into a flexible chain that packs among the triacylglycerols.',
          'masks the molecule’s only polar group, leaving nothing that can interact favorably with water.',
          'adds a phosphate group that enables the molecule to bind apolipoprotein B-100 in the core.',
        ],
        correctAnswer: 2,
        explanation:
          'Unesterified cholesterol is amphipathic: its 3-hydroxyl group sits among the phospholipid head groups at the aqueous surface. Forming an ester through that hydroxyl removes the only polar group, so the ester is entirely nonpolar and partitions into the core. The ester bond consumes the fatty acid’s carboxyl group, so no carboxylate charge is added. The four fused rings are unchanged by esterification. No phosphate is added, and apoB-100 lies at the surface, not in the core.',
        skill: '1D lipid structure and lipoprotein organization',
      },
      {
        question:
          'Fibroblasts from one patient bind LDL normally, but their LDL receptors fail to cluster in clathrin-coated pits. When these cells and normal fibroblasts are each incubated with LDL, the patient’s cells would be expected to show:',
        options: [
          'lower HMG-CoA reductase activity, because LDL bound at the surface signals that sterols are plentiful.',
          'higher HMG-CoA reductase activity, because little of the LDL-derived cholesterol reaches the ER.',
          'less LDL bound at the surface, because the receptors are delivered to lysosomes and degraded.',
          'more cholesteryl ester hydrolysis in lysosomes, because receptors accumulate at the surface.',
        ],
        correctAnswer: 1,
        explanation:
          'If receptors cannot enter coated pits, bound LDL is not internalized, its cholesteryl esters never reach lysosomes, and no freed cholesterol reaches the ER; SREBP therefore stays active and reductase is neither repressed nor degraded, so synthesis remains high despite abundant LDL outside. Suppression requires cholesterol in the ER membrane, not LDL at the cell surface. The receptors in these cells remain at the surface and bind LDL normally, rather than being degraded. Lysosomal hydrolysis would decrease, not increase, because LDL is not delivered to lysosomes.',
        skill: '2A receptor-mediated endocytosis',
      },
      {
        question:
          'Why would combining a bile-acid sequestrant with a statin be expected to lower plasma LDL more than the sequestrant alone?',
        options: [
          'The statin prevents the resin from binding dietary cholesterol in the intestinal lumen',
          'The statin directly speeds the conversion of cholesterol into bile acids by liver cells',
          'The resin blocks reabsorption of the statin, so more of the drug reaches the liver',
          'The statin blocks the rise in synthesis that the resin provokes, so liver LDL-receptor levels rise further',
        ],
        correctAnswer: 3,
        explanation:
          'When the resin diverts hepatic cholesterol into bile acids, ER cholesterol falls and SREBP raises both LDL-receptor and HMG-CoA reductase expression; increased synthesis partly refills the cholesterol pool and blunts receptor induction. A statin blocks that compensatory synthesis, so hepatic cholesterol stays low and more receptors are made to clear LDL. The resin binds bile acids, and statins do not affect that binding. Statins inhibit cholesterol synthesis and do not directly accelerate bile-acid formation. Blocking a statin’s absorption would reduce, not increase, the drug reaching the liver.',
        skill: '1D regulation of cholesterol synthesis',
      },
    ],
  },
]

export const FL4_BIO_BIOCHEM_B_DISCRETES: MCATDiscreteQuestion[] = [
  {
    id: 'fl4-bb-b-d01',
    section: 'bio-biochem',
    discipline: 'physiology',
    question:
      'A drug slows conduction through the atrioventricular node but does not change conduction velocity within the atria or the ventricles. Which feature of the electrocardiogram would the drug most directly lengthen?',
    options: ['The QRS complex width', 'The P-wave amplitude', 'The PR interval', 'The QT interval duration'],
    correctAnswer: 2,
    explanation:
      'The PR interval spans atrial depolarization plus the delay in the AV node before ventricular depolarization begins, so slowing AV nodal conduction lengthens it. QRS width reflects conduction through the ventricles, which is unchanged. P-wave amplitude reflects atrial depolarization, not nodal delay. The QT interval measures ventricular depolarization and repolarization, which the drug does not affect.',
    skill: '3B cardiac electrophysiology',
  },
  {
    id: 'fl4-bb-b-d02',
    section: 'bio-biochem',
    discipline: 'physiology',
    question:
      'A person who was stung by a bee last summer is stung again and within minutes develops hives and wheezing. Which event most directly triggers histamine release in this reaction?',
    options: [
      'Venom antigen binding to IgM on naive B cells in regional lymph nodes',
      'Venom antigen cross-linking IgE already bound to Fc receptors on mast cells',
      'Cytotoxic T cells recognizing venom peptides displayed on MHC class I',
      'Plasma cells secreting new IgE that binds free venom in the blood',
    ],
    correctAnswer: 1,
    explanation:
      'The first sting induced IgE, which binds high-affinity Fc receptors on mast cells; on re-exposure, the antigen cross-links adjacent bound IgE molecules, triggering immediate degranulation and histamine release. Binding to IgM on naive B cells begins a new primary response and takes days. Cytotoxic T-cell recognition kills infected cells and underlies delayed, not immediate, reactions. New IgE from plasma cells takes days to produce, and IgE binding free antigen in plasma does not by itself release histamine.',
    skill: '3B immediate hypersensitivity',
  },
  {
    id: 'fl4-bb-b-d03',
    section: 'bio-biochem',
    discipline: 'physiology',
    question:
      'Central chemoreceptors in the medulla respond much more strongly to an acute rise in arterial $P_{\\text{CO}_2}$ than to an equal acute fall in arterial pH caused by a nonvolatile acid. Which explanation is correct?',
    options: [
      'Carbon dioxide readily enters the cerebrospinal fluid and acidifies it, but $\\text{H}^+$ crosses into it poorly',
      'Central chemoreceptors bind carbon dioxide molecules directly and do not respond to changes in the pH around them',
      'Nonvolatile acid is buffered so completely in plasma that the arterial pH does not actually change',
      'Peripheral chemoreceptors detect nonvolatile acid and send inhibitory signals that silence the central receptors',
    ],
    correctAnswer: 0,
    explanation:
      'Central chemoreceptors respond to the $\\text{H}^+$ concentration of the cerebrospinal fluid; $\\text{CO}_2$ diffuses freely across the blood–brain barrier and is hydrated there to carbonic acid, whereas $\\text{H}^+$ from a nonvolatile acid crosses the barrier poorly. The central receptors respond to pH, not to $\\text{CO}_2$ molecules themselves. The stem states that arterial pH does fall, so complete buffering is ruled out. Peripheral chemoreceptors do respond to metabolic acidosis, but they stimulate breathing and do not inhibit the central receptors.',
    skill: '3B control of ventilation',
  },
  {
    id: 'fl4-bb-b-d04',
    section: 'bio-biochem',
    discipline: 'genetics',
    question:
      'Crossing a cattle breed homozygous for red coat with one homozygous for white coat produces heterozygous offspring. Which observation in the heterozygotes would indicate codominance rather than incomplete dominance?',
    options: [
      'Coat pigment at about half the concentration found in red homozygotes',
      'A single uniform coat color intermediate between red and white',
      'A coat that cannot be distinguished from that of red homozygotes',
      'Separate red and white hairs, each matching one homozygote',
    ],
    correctAnswer: 3,
    explanation:
      'In codominance both alleles are fully and separately expressed, so the heterozygote shows each parental phenotype side by side, here as intermixed red and white hairs (a roan coat). Half the pigment concentration and a uniform intermediate color are both signs of incomplete dominance, in which the heterozygote’s phenotype is a blend. A heterozygote indistinguishable from the red homozygote indicates complete dominance of the red allele.',
    skill: '1C patterns of dominance',
  },
  {
    id: 'fl4-bb-b-d05',
    section: 'bio-biochem',
    discipline: 'genetics',
    question:
      'By Hamilton’s rule, an allele for a helping behavior is favored by selection when $rB > C$, where $r$ is the coefficient of relatedness between actor and recipient, $B$ is the benefit to the recipient, and $C$ is the cost to the actor, both in offspring. Which scenario would favor such an allele?',
    options: [
      'Helping a full sibling ($r$ = 0.5) at a cost of 2 offspring and a benefit of 3',
      'Helping a half sibling ($r$ = 0.25) at a cost of 1 offspring and a benefit of 3',
      'Helping a first cousin ($r$ = 0.125) at a cost of 1 offspring and a benefit of 10',
      'Helping an unrelated individual ($r$ = 0) at a cost of 1 offspring and a benefit of 20',
    ],
    correctAnswer: 2,
    explanation:
      'For the first cousin, $rB$ = 0.125 × 10 = 1.25, which exceeds the cost of 1, so the allele gains more through the relative’s extra offspring than it loses. For the full sibling, $rB$ = 1.5, which is less than the cost of 2. For the half sibling, $rB$ = 0.75, less than 1. For an unrelated individual $rB$ = 0 regardless of the benefit, so kin selection cannot favor the behavior.',
    skill: '1C inclusive fitness',
  },
  {
    id: 'fl4-bb-b-d06',
    section: 'bio-biochem',
    discipline: 'biochemistry',
    question:
      'In liver cells after a carbohydrate-rich meal, malonyl-CoA inhibits carnitine acyltransferase I (CPT-I) on the outer mitochondrial membrane. What is the main physiological benefit of this inhibition?',
    options: [
      'It moves acetyl-CoA out of the mitochondria and into the cytosol for use in cholesterol synthesis',
      'It keeps newly made fatty acids from entering mitochondria to be oxidized',
      'It allows fatty acyl-CoA to enter the mitochondrial matrix, where fatty acid synthesis takes place',
      'It prevents NADPH made in the mitochondria from being consumed by the enzymes of β-oxidation',
    ],
    correctAnswer: 1,
    explanation:
      'Fatty acid synthesis occurs in the cytosol, and malonyl-CoA is its first committed intermediate; by blocking CPT-I, the entry point of the carnitine shuttle, malonyl-CoA prevents the fatty acids being made from being carried into the matrix and oxidized, avoiding a futile cycle. Acetyl-CoA leaves mitochondria as citrate, not through CPT-I. Fatty acid synthesis takes place in the cytosol, not the matrix, and CPT-I inhibition blocks rather than allows acyl entry. β-Oxidation produces NADH and $\\text{FADH}_2$; it does not consume NADPH.',
    skill: '1D fatty acid synthesis vs β-oxidation',
  },
  {
    id: 'fl4-bb-b-d07',
    section: 'bio-biochem',
    discipline: 'microbiology',
    question:
      'While Gram-staining a mixed culture, a technician accidentally omits the alcohol decolorization step but performs every other step correctly. How will the Gram-negative cells most likely appear?',
    options: [
      'Purple, because the crystal violet–iodine complex is never washed out of their thin peptidoglycan layer',
      'Pink, because safranin binds their outer membrane more strongly than crystal violet does',
      'Colorless, because iodine cannot enter cells that have an outer membrane',
      'Pink, because crystal violet cannot cross the outer membrane to reach the wall',
    ],
    correctAnswer: 0,
    explanation:
      'All cells take up crystal violet and iodine; it is the alcohol step that dissolves the outer membrane of Gram-negative cells and washes the dye complex from their thin peptidoglycan. Without decolorization, Gram-negative cells keep the purple complex and look Gram-positive. Safranin is only a counterstain and cannot mask purple. Iodine enters all cells, and crystal violet also stains Gram-negative cells before decolorization, so they are neither colorless nor pink.',
    skill: '2B Gram stain',
  },
]
