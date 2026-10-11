/**
 * MCAT Full-Length Form 4 — Biological & Biochemical Foundations, file A
 * (passages 1–5, 22 questions) + 8 discrete items.
 *
 * Built to the 2026-09-29 AAMC-alignment blueprint (BLUEPRINT-F34): 400–600-word
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

export const FL4_BIO_BIOCHEM_A_PASSAGES: MCATPassage[] = [
  // ────────────────────────────────────────────────────────────────────────
  // 1. BIOCHEMISTRY (exp, chart) — zymogen activation: enteropeptidase,
  //    trypsin autoactivation (sigmoidal time course), stoichiometric
  //    inhibition by PSTI, irreversibility, research design
  // ────────────────────────────────────────────────────────────────────────
  {
    id: 'fl4-bb-a-01',
    section: 'bio-biochem',
    discipline: 'biochemistry',
    title: 'Activation of Trypsinogen and Its Restraint by a Pancreatic Inhibitor',
    passageText:
      'The pancreas synthesizes its digestive proteases as inactive precursors, or zymogens, which are stored in the secretory granules of acinar cells and released into the pancreatic duct. Activation normally begins only in the lumen of the duodenum, where enteropeptidase, a protease anchored in the brush-border membrane of intestinal epithelial cells, cleaves a single peptide bond near the N-terminus of trypsinogen. The bond it cleaves lies immediately after a highly conserved stretch of four aspartate residues followed by a lysine (Asp–Asp–Asp–Asp–Lys), and cleavage releases this short activation peptide. The newly exposed N-terminal isoleucine then inserts into a pocket in the protein, where its free amino group forms a salt bridge with an aspartate side chain. The resulting conformational change completes the substrate-binding pocket and the oxyanion hole, and the protein becomes active trypsin. Trypsin hydrolyzes peptide bonds on the carboxyl side of lysine and arginine residues, and it activates the other pancreatic zymogens, including chymotrypsinogen, proelastase, and procarboxypeptidase.\n\nBecause trypsin activated prematurely inside the pancreas can begin to digest the gland itself, acinar cells also secrete pancreatic secretory trypsin inhibitor (PSTI), a small protein that occupies the active site of trypsin and forms a tight 1:1 complex with it. PSTI is packaged into the same granules as trypsinogen but in much smaller molar amounts.\n\nTo examine how activation proceeds and how PSTI modifies it, researchers incubated purified human trypsinogen (10 μM) at 37 °C and pH 8.0 under three conditions: trypsinogen alone; trypsinogen with enteropeptidase (1 nM); and trypsinogen with the same concentration of enteropeptidase plus a fixed concentration of PSTI added at time zero. Every 5 min, a small sample was removed from each mixture and diluted into a solution of a synthetic peptide substrate that releases a colored product when cleaved by trypsin, and the initial rate of color formation was measured. Each rate was expressed as a percentage of the rate obtained when an identical sample of trypsinogen had been converted completely to trypsin. Enteropeptidase alone, at the concentration used, produced no detectable color from the synthetic substrate. The results are shown in Figure 1.\n\nThe researchers emphasized that enteropeptidase was present at a concentration 10,000-fold lower than that of trypsinogen, yet nearly all of the trypsinogen had been activated within 30 min. They proposed that PSTI acts as a first line of defense against activation within the gland and that a second, slower mechanism, the degradation of active trypsin by trypsin itself and by other proteases, becomes important when activation is extensive.',
    chart: {
      title: 'Figure 1. Trypsin activity in samples of 10 μM trypsinogen incubated alone, with 1 nM enteropeptidase (EP), or with EP plus PSTI',
      kind: 'line',
      xLabel: 'Incubation time',
      xUnit: 'min',
      yLabel: 'Trypsin activity',
      yUnit: '% of full activation',
      xValues: [0, 5, 10, 15, 20, 25, 30],
      yValues: [0, 4, 14, 42, 80, 96, 99],
      seriesLabel: 'Trypsinogen + EP',
      comparisonSeries: [
        { label: 'Trypsinogen + EP + PSTI', yValues: [0, 0, 0, 3, 32, 70, 79] },
        { label: 'Trypsinogen alone', yValues: [0, 0, 1, 1, 1, 2, 2] },
      ],
    },
    questions: [
      {
        question: 'In the reaction containing trypsinogen and enteropeptidase, trypsin activity rose slowly for the first 10 min and then much more rapidly. This pattern is best explained by the fact that:',
        options: [
          'the activation peptide released from trypsinogen stimulates enteropeptidase allosterically.',
          'enteropeptidase cleaves trypsinogen more rapidly as the trypsinogen concentration falls.',
          'trypsin can cleave the bond after the lysine in trypsinogen’s activation sequence.',
          'enteropeptidase slowly unfolds into a more active conformation at 37 °C during incubation.',
        ],
        correctAnswer: 2,
        explanation:
          'Trypsin cuts after lysine or arginine, and the activating bond of trypsinogen follows a lysine, so each trypsin molecule formed can activate further trypsinogen; the rate of activation therefore grows as trypsin accumulates, giving a slow start followed by acceleration (autoactivation) until the substrate runs out near 25–30 min. Nothing in the passage indicates that the released peptide acts on enteropeptidase, and the lysine-specific cleavage by trypsin already accounts for the acceleration. An enzyme acting on a falling substrate concentration slows rather than speeds up. Enteropeptidase is described as an active, membrane-anchored protease, and a slow unfolding of the catalyst would be expected to lower, not raise, its activity.',
        optionExplanations: [
          'Nothing in the passage indicates that the released activation peptide acts on enteropeptidase. Moreover, enteropeptidase was present at only 1 nM, so even a stimulated enzyme at that concentration could not account for near-complete activation of 10 μM trypsinogen in 30 minutes.',
          'An enzyme acting on a falling substrate concentration slows down, not up. If enteropeptidase were the only activator, the rate would be highest at the start when trypsinogen is most abundant, the opposite of the slow-then-fast pattern observed.',
          'Trypsin cleaves after lysine or arginine, and the activating bond in trypsinogen follows the Asp–Asp–Asp–Asp–Lys sequence. Each trypsin molecule formed can therefore activate more trypsinogen, so the rate accelerates as trypsin accumulates (autoactivation), producing the sigmoidal time course.',
          'Enteropeptidase is described as an active, membrane-anchored protease, not one that needs to unfold. A catalyst slowly unfolding at 37 °C would be expected to lose activity, not gain it, and the passage gives no hint of such a conformational change.',
        ],
        skill: '1A zymogen autoactivation',
      },
      {
        question: 'Assume that each PSTI molecule binds and completely inactivates one trypsin molecule and that PSTI is stable throughout the incubation. Based on Figure 1, the PSTI concentration in the third reaction was closest to:',
        options: ['0.2 μM', '2 μM', '8 μM', '10 μM'],
        correctAnswer: 1,
        explanation:
          'By 30 min essentially all trypsinogen was activated in both enteropeptidase reactions (99% without PSTI), yet free activity in the PSTI reaction plateaued at 79%, so about 20% of 10 μM trypsin, or 2 μM, was held in 1:1 complexes with PSTI. A value of 0.2 μM would remove only 2% of the activity. A value of 8 μM corresponds to the trypsin that remained active (79% of 10 μM), not the trypsin that was inhibited. A value of 10 μM would have inhibited all of the trypsin formed, leaving no measurable activity.',
        optionExplanations: [
          'A PSTI concentration of 0.2 μM would inactivate only 2% of the 10 μM trypsin formed, leaving a plateau near 98%, not the 79% observed. This underestimates the inhibited fraction by a factor of ten.',
          'By 30 minutes essentially all trypsinogen was activated (99% without PSTI), yet free activity in the PSTI reaction plateaued at 79%. About 20% of the 10 μM trypsin, or 2 μM, was therefore held in 1:1 complexes with PSTI.',
          'A value of 8 μM corresponds to the trypsin that remained active (79% of 10 μM), not to the trypsin that was inhibited. The question asks for the inhibitor concentration, which equals the fraction of activity lost.',
          'A PSTI concentration of 10 μM, equal to the trypsinogen concentration, would have inhibited every trypsin molecule formed, leaving no measurable activity at any time point. Figure 1 shows activity reaching 79%.',
        ],
        skill: '1A enzyme inhibition (data interpretation)',
      },
      {
        question: 'Activation of trypsinogen differs from activation of an enzyme by an allosteric effector in that activation of trypsinogen:',
        options: [
          'is not reversed when the activating protease is removed, because a peptide bond has been hydrolyzed.',
          'requires the activating protease to remain bound to trypsin for the active site to stay formed.',
          'changes the primary structure of the enzyme without changing its three-dimensional conformation.',
          'is reversed by a phosphatase that removes the group enteropeptidase attaches to trypsinogen.',
        ],
        correctAnswer: 0,
        explanation:
          'Zymogen activation is a covalent modification by limited proteolysis: once the peptide bond is hydrolyzed, the change cannot be undone by removing enteropeptidase, whereas an allosteric effector binds noncovalently and its effect disappears when it dissociates. Enteropeptidase acts catalytically and departs after cleavage, so it does not need to stay bound. Cleavage does alter the primary structure, but the passage states that activation works through a conformational change that forms the substrate pocket and oxyanion hole. Enteropeptidase hydrolyzes a bond; it attaches no phosphate or other group that a phosphatase could remove.',
        optionExplanations: [
          'Zymogen activation is covalent modification by limited proteolysis. Once the peptide bond is hydrolyzed, the change persists after enteropeptidase is gone, whereas an allosteric effector binds noncovalently and its effect disappears when it dissociates.',
          'Enteropeptidase acts catalytically and leaves after cleaving the bond; it does not need to remain bound. In fact, the passage notes that trypsin itself takes over further activation, which could not happen if the activating protease had to stay attached.',
          'Cleavage does alter primary structure, but the passage describes a conformational change: the new N-terminal isoleucine inserts into a pocket, forms a salt bridge, and completes the substrate-binding pocket and oxyanion hole. The three-dimensional structure changes substantially.',
          'Enteropeptidase hydrolyzes a peptide bond; it attaches no phosphate or other group. There is nothing for a phosphatase to remove, and the reversibility implied here is exactly what distinguishes allosteric regulation from proteolytic activation.',
        ],
        skill: '1A regulation by proteolytic cleavage',
      },
      {
        question: 'Which additional experiment would best determine whether the delay in the reaction containing PSTI reflects inhibition of trypsin rather than inhibition of enteropeptidase?',
        options: [
          'Repeat the PSTI reaction with twice the trypsinogen concentration and compare the final activity reached.',
          'Incubate trypsinogen with PSTI but no enteropeptidase, and measure trypsin activity over 30 min.',
          'Add PSTI to purified trypsin, and confirm that cleavage of the synthetic substrate is blocked.',
          'Measure enteropeptidase activity, with and without PSTI, using a substrate that trypsin cannot cleave.',
        ],
        correctAnswer: 3,
        explanation:
          'The question is whether PSTI also slows enteropeptidase; assaying enteropeptidase directly, in the presence and absence of PSTI, with a substrate that trypsin does not cleave isolates that one possibility. Doubling the trypsinogen changes the fraction of trypsin that PSTI can hold but says nothing about enteropeptidase. Incubating trypsinogen with PSTI alone lacks the activating enzyme, so activity would stay near zero regardless of PSTI’s target. Showing that PSTI blocks trypsin confirms what the passage already states but cannot rule out an additional effect on enteropeptidase.',
        optionExplanations: [
          'Doubling the trypsinogen concentration changes the fraction of trypsin that a fixed amount of PSTI can hold, but says nothing about whether PSTI also acts on enteropeptidase. It does not separate the two possible targets.',
          'Incubating trypsinogen with PSTI but no enteropeptidase lacks the activating enzyme entirely, so activity would stay near zero regardless of which protein PSTI targets. The result would be uninformative.',
          'Showing that PSTI blocks purified trypsin confirms what the passage already states but cannot rule out an additional inhibitory effect on enteropeptidase. The question requires distinguishing the two targets, not confirming one.',
          'The question is whether PSTI also slows enteropeptidase. Assaying enteropeptidase directly, with and without PSTI, using a substrate trypsin cannot cleave isolates that single possibility and rules trypsin activity out of the measurement.',
        ],
        skill: '1A research design: controls',
      },
      {
        question: 'People who inherit one loss-of-function allele of the gene encoding PSTI secrete about half the normal amount of the inhibitor and are predisposed to pancreatitis. Based on the passage, the most likely reason is that in these individuals:',
        options: [
          'enteropeptidase in the duodenum activates trypsinogen more slowly than normal.',
          'a smaller burst of prematurely formed trypsin can set off autoactivation.',
          'each trypsinogen molecule yields more active trypsin than in unaffected people.',
          'trypsin in the intestinal lumen digests dietary protein less efficiently than normal.',
        ],
        correctAnswer: 1,
        explanation:
          'Figure 1 shows that PSTI holds activity near zero until the trypsin formed exceeds the inhibitor’s capacity, after which autoactivation proceeds. With half as much PSTI in the granules, a smaller burst of premature activation inside the gland would saturate the inhibitor, and the free trypsin would activate more trypsinogen and the other zymogens. Duodenal activation by enteropeptidase does not depend on PSTI. Each trypsinogen yields one trypsin regardless of PSTI. Less inhibitor could only leave more trypsin free in the intestine, not impair protein digestion.',
        optionExplanations: [
          'Duodenal activation by enteropeptidase does not depend on PSTI; the inhibitor functions inside the pancreas to restrain premature activation. Slower activation in the intestine would not cause pancreatitis, which is damage to the gland itself.',
          'Figure 1 shows PSTI holds activity near zero until the trypsin formed exceeds the inhibitor’s capacity, after which autoactivation proceeds. With half as much PSTI, a smaller burst of premature activation inside the gland would saturate the inhibitor, freeing trypsin to activate more trypsinogen and other zymogens.',
          'Each trypsinogen molecule yields exactly one trypsin molecule by cleavage of a single bond, regardless of how much PSTI is present. PSTI affects how much trypsin is free, not how much is generated per zymogen.',
          'Less inhibitor would leave more trypsin free in the intestinal lumen, if anything enhancing protein digestion. Impaired digestion would not explain pancreatitis, which results from premature activation within the gland.',
        ],
        skill: '1A zymogens and physiological protection',
      },
    ],
  },

  // ────────────────────────────────────────────────────────────────────────
  // 2. PHYSIOLOGY (info) — calcium/phosphate homeostasis: PTH, calcitriol,
  //    calcitonin, RANKL/OPG bone remodeling, renal and gut handling
  // ────────────────────────────────────────────────────────────────────────
  {
    id: 'fl4-bb-a-02',
    section: 'bio-biochem',
    discipline: 'physiology',
    title: 'Hormonal Control of Plasma Calcium and Phosphate',
    passageText:
      'About 99% of the body’s calcium and 85% of its phosphate are stored in bone as hydroxyapatite, a crystalline calcium phosphate mineral deposited on a collagen matrix. The small fraction dissolved in extracellular fluid is nonetheless tightly regulated, because the concentration of free (ionized) calcium in plasma, normally about 1.2 mM, influences the excitability of nerve and muscle membranes, the release of neurotransmitters and hormones, and blood clotting. Roughly 40% of plasma calcium is bound to albumin and is not physiologically active.\n\nThe principal regulator is parathyroid hormone (PTH), an 84-amino-acid peptide secreted by the four parathyroid glands. Chief cells of these glands express a calcium-sensing receptor, a G protein–coupled receptor activated by extracellular calcium ions; its activation suppresses PTH secretion, so PTH release increases within seconds when ionized calcium falls. PTH acts directly on bone and kidney and indirectly on the intestine. In the kidney, it increases calcium reabsorption in the distal tubule while decreasing phosphate reabsorption in the proximal tubule. It also stimulates proximal tubule cells to express 1α-hydroxylase, the enzyme that converts 25-hydroxyvitamin D, produced in the liver from vitamin D made in the skin or absorbed from the diet, into 1,25-dihydroxyvitamin D (calcitriol), the active hormone. Calcitriol increases absorption of both calcium and phosphate from the small intestine by raising the amounts of transport and calcium-binding proteins in enterocytes, and it inhibits PTH synthesis. Renal 1α-hydroxylase activity is suppressed by a high plasma phosphate concentration.\n\nIn bone, PTH receptors are found on osteoblasts, the cells that deposit new matrix, but not on osteoclasts, the multinucleated cells that resorb bone by secreting acid and proteases into a sealed compartment against the bone surface. When stimulated by PTH, osteoblasts increase their surface expression of RANKL, a membrane protein that binds the receptor RANK on osteoclast precursors and promotes their fusion, maturation, and survival. Osteoblasts also secrete osteoprotegerin, a soluble decoy protein that binds RANKL and prevents it from engaging RANK. A sustained elevation of PTH therefore shifts bone remodeling toward net resorption, releasing both calcium and phosphate into the blood. Brief daily pulses of PTH, by contrast, favor bone formation and are used to treat osteoporosis.\n\nCalcitonin, a peptide secreted by the parafollicular (C) cells of the thyroid gland when plasma calcium rises, inhibits osteoclasts directly. In adult humans, however, its physiological importance appears small: neither surgical removal of the thyroid nor calcitonin-secreting tumors produce lasting changes in plasma calcium.\n\nBecause PTH, calcitriol, and plasma phosphate influence one another, a disturbance originating in one organ often produces a characteristic pattern of change in all three. In chronic kidney disease, for example, the progressive loss of functioning nephrons affects both the excretion of filtered solutes and the endocrine activity of the tubules.',
    questions: [
      {
        question: 'Which pattern of plasma values would most likely develop in a patient with advanced chronic kidney disease?',
        options: [
          'Phosphate elevated, calcitriol decreased, PTH elevated',
          'Phosphate elevated, calcitriol elevated, PTH decreased',
          'Phosphate decreased, calcitriol decreased, PTH decreased',
          'Phosphate decreased, calcitriol elevated, PTH elevated',
        ],
        correctAnswer: 0,
        explanation:
          'With fewer functioning nephrons, filtered phosphate is excreted less effectively and accumulates. Calcitriol falls for two reasons: less tubular tissue is available to express 1α-hydroxylase, and the high phosphate suppresses the enzyme. Low calcitriol reduces intestinal calcium absorption and removes calcitriol’s inhibition of PTH synthesis, so PTH rises (secondary hyperparathyroidism). The patterns with elevated calcitriol ignore the loss of renal 1α-hydroxylase, and those with decreased phosphate ignore the fall in phosphate excretion; a decreased PTH is inconsistent with falling calcitriol and calcium absorption.',
        optionExplanations: [
          'With fewer functioning nephrons, filtered phosphate is excreted less effectively and accumulates. Calcitriol falls because less tubular tissue expresses 1α-hydroxylase and because high phosphate suppresses that enzyme. Low calcitriol reduces calcium absorption and removes its inhibition of PTH synthesis, so PTH rises.',
          'Elevated calcitriol ignores the loss of renal 1α-hydroxylase and the suppression of that enzyme by high phosphate. Decreased PTH is also inconsistent: low calcitriol and reduced calcium absorption both drive PTH up, not down.',
          'Decreased phosphate ignores the fall in phosphate excretion that accompanies nephron loss; phosphate accumulates. Decreased PTH is inconsistent with falling calcitriol, which removes its inhibition of PTH synthesis and lowers calcium absorption.',
          'Phosphate is elevated, not decreased, because the failing kidney cannot excrete it. Calcitriol is decreased, not elevated, because 1α-hydroxylase is lost with tubular tissue and suppressed by high phosphate. Only the PTH direction is correct here.',
        ],
        skill: '3B calcium–phosphate homeostasis (kidney disease)',
      },
      {
        question: 'Denosumab is a monoclonal antibody that binds RANKL with high affinity. In a patient with normal parathyroid function, which change is most likely during the first days after a dose?',
        options: [
          'Plasma calcium rises, and PTH secretion falls.',
          'Plasma calcium rises, and PTH secretion rises.',
          'Plasma calcium falls, and PTH secretion rises.',
          'Plasma calcium falls, and PTH secretion falls.',
        ],
        correctAnswer: 2,
        explanation:
          'An antibody that binds RANKL acts like osteoprotegerin: it prevents RANKL from engaging RANK, so fewer osteoclasts form and survive, and bone resorption slows. Less calcium is released from bone, plasma ionized calcium falls, fewer calcium-sensing receptors on chief cells are activated, and PTH secretion rises in compensation. A rise in calcium would require increased resorption, the opposite of the drug’s effect. A simultaneous fall in calcium and PTH would require the parathyroid glands to fail, and a rise in both would mean PTH was driving calcium up despite blocked resorption.',
        optionExplanations: [
          'A rise in plasma calcium would require increased bone resorption, the opposite of the drug’s effect. Blocking RANKL reduces osteoclast formation and survival, so less calcium is released from bone.',
          'Calcium rising would require more resorption, but the drug blocks it. And PTH rising alongside rising calcium contradicts the calcium-sensing receptor feedback, in which high calcium suppresses PTH secretion.',
          'An antibody binding RANKL acts like osteoprotegerin, preventing RANKL from engaging RANK. Fewer osteoclasts form and survive, resorption slows, less calcium enters plasma, ionized calcium falls, and the parathyroid chief cells respond by increasing PTH secretion.',
          'A simultaneous fall in calcium and PTH would require the parathyroid glands to fail to respond to low calcium. With normal parathyroid function, falling ionized calcium deactivates the calcium-sensing receptor and PTH secretion rises.',
        ],
        skill: '3B bone remodeling and PTH',
      },
      {
        question: 'Calcitriol most likely increases the amounts of calcium-transport proteins in enterocytes by:',
        options: [
          'binding a plasma-membrane receptor that activates adenylyl cyclase',
          'opening calcium channels in the apical membrane directly and reversibly',
          'activating the calcium-sensing receptor on the basolateral membrane',
          'binding an intracellular receptor that acts as a transcription factor',
        ],
        correctAnswer: 3,
        explanation:
          'Calcitriol is a lipid-soluble, steroid-like hormone derived from vitamin D; like other steroid hormones, it crosses the plasma membrane and binds an intracellular (nuclear) receptor that regulates transcription of target genes, which explains a slow increase in the amount of transport protein. Activation of adenylyl cyclase through a surface receptor is typical of peptide hormones such as PTH. Opening channels directly would change transport activity, not the amount of transport protein. The calcium-sensing receptor responds to calcium ions, not to calcitriol.',
        optionExplanations: [
          'Activation of adenylyl cyclase through a plasma-membrane receptor is the mechanism of peptide hormones such as PTH. Calcitriol is a lipid-soluble steroid-like molecule that crosses the membrane rather than signaling from the surface.',
          'Opening channels directly would change transport activity, not the amount of transport protein. The passage says calcitriol raises the amounts of transport and calcium-binding proteins, which requires new protein synthesis.',
          'The calcium-sensing receptor responds to extracellular calcium ions, not to calcitriol, and the passage places it on parathyroid chief cells. It has no described role in enterocyte protein expression.',
          'Calcitriol is a lipid-soluble hormone derived from vitamin D. Like other steroid-type hormones, it crosses the plasma membrane and binds an intracellular receptor that regulates transcription, which explains the slow increase in the amount of transport protein.',
        ],
        skill: '3B steroid hormone mechanism',
      },
      {
        question: 'During surgery for thyroid cancer, a patient’s thyroid gland and all four parathyroid glands are removed. Without hormone replacement, the patient would most likely develop:',
        options: [
          'hypercalcemia, because calcitonin secretion is lost along with the thyroid.',
          'hypocalcemia, with increased excitability of nerve and skeletal muscle.',
          'hypocalcemia, with decreased excitability of nerve and skeletal muscle.',
          'hypercalcemia, because osteoclasts are no longer restrained by PTH.',
        ],
        correctAnswer: 1,
        explanation:
          'Without PTH, renal calcium reabsorption falls, calcitriol production declines, and osteoclastic resorption slows, so plasma calcium falls. Low extracellular calcium lowers the threshold for opening of voltage-gated sodium channels, making nerves and muscles hyperexcitable, which produces tingling, muscle spasms, and tetany. The passage states that thyroid removal, and hence loss of calcitonin, does not produce lasting changes in plasma calcium. Hypocalcemia increases, rather than decreases, membrane excitability. PTH stimulates, rather than restrains, osteoclast activity, so its loss cannot raise calcium by that route.',
        optionExplanations: [
          'The passage states that neither thyroid removal nor calcitonin-secreting tumors produce lasting changes in plasma calcium, so loss of calcitonin would not cause hypercalcemia. Moreover, loss of PTH drives calcium down, not up.',
          'Without PTH, renal calcium reabsorption falls, calcitriol production declines, and bone resorption slows, so plasma calcium falls. Low extracellular calcium lowers the threshold for voltage-gated sodium channel opening, making nerves and muscles hyperexcitable (tingling, spasms, tetany).',
          'Hypocalcemia is correct, but it increases rather than decreases membrane excitability. Low extracellular calcium makes voltage-gated sodium channels easier to open, producing hyperexcitability, not depression of nerve and muscle function.',
          'PTH stimulates osteoclast activity indirectly through RANKL on osteoblasts; it does not restrain osteoclasts. Loss of PTH slows resorption and lowers calcium, so this reverses both the direction of PTH’s effect and the resulting calcium change.',
        ],
        skill: '3B hypocalcemia and excitability',
      },
    ],
  },

  // ────────────────────────────────────────────────────────────────────────
  // 3. GENETICS (exp, table) — yeast mutant screen, complementation groups,
  //    a dominant allele, CRISPR knockouts, rescue control, haploid screening
  // ────────────────────────────────────────────────────────────────────────
  {
    id: 'fl4-bb-a-03',
    section: 'bio-biochem',
    discipline: 'genetics',
    title: 'Assigning Methionine-Requiring Yeast Mutants to Genes',
    passageText:
      'The budding yeast *Saccharomyces cerevisiae* can be propagated stably as either haploid or diploid cells. Haploid cells exist as two mating types, **a** and **α**. When cells of opposite mating type are mixed, they fuse to form **a**/**α** diploids, which can be isolated and grown on their own. This life cycle makes yeast well suited to asking whether two mutations that produce the same phenotype affect the same gene.\n\nTwo mutations that cause the same recessive phenotype are said to complement each other if a diploid carrying one copy of each mutation has the wild-type phenotype. Mutations that fail to complement one another are placed in the same complementation group, which usually corresponds to a single gene.\n\nResearchers studying the synthesis of the amino acid methionine began with a wild-type haploid **a** strain that grows on minimal medium, which contains glucose, salts, and an inorganic nitrogen and sulfur source but no amino acids. After exposing the cells to a chemical mutagen, they recovered five independent mutants, m1 through m5, that grew normally on minimal medium supplemented with methionine but did not grow without it. Using a procedure that switches mating type without otherwise altering the genome, they obtained an **α** version of each of the mutants m1 through m4.\n\nEach **a** mutant was then mated to the wild-type **α** strain and to the **α** version of each of the mutants m1 through m4, and the resulting diploids were tested for growth on minimal medium (Table 1).\n\nIn parallel, the researchers examined two candidate genes, *P* and *Q*, whose protein products resemble enzymes of sulfur amino acid metabolism in other fungi. They used the CRISPR–Cas9 system, in which a guide RNA directs the Cas9 nuclease to a matching 20-nucleotide sequence in the genome, where Cas9 cuts both DNA strands. By supplying a short repair template together with Cas9 and the guide, they deleted a segment from the coding sequence of each gene in the wild-type **α** strain, producing the strains ΔP and ΔQ; each deletion was verified by sequencing across the targeted site. Both ΔP and ΔQ grew on minimal medium supplemented with methionine but not on minimal medium alone. Each knockout strain was mated to each **a** mutant, and the diploids were tested in the same way (Table 1, last two columns).\n\nThe researchers noted that chemical mutagens usually create point mutations, most of which reduce or abolish the function of the affected protein, but that a minority of point mutations instead produce a protein with an altered activity that interferes with the normal protein. They next planned to add individual candidate sulfur-containing intermediates to the medium in order to determine the order in which the identified gene products act in the pathway.',
    figure:
      '**Table 1. Growth of diploids on minimal medium without methionine (+ = growth; − = no growth)**\n\n| **a** haploid | × wild type **α** | × m1 **α** | × m2 **α** | × m3 **α** | × m4 **α** | × ΔP **α** | × ΔQ **α** |\n|---|---|---|---|---|---|---|---|\n| m1 | + | − | − | + | + | − | + |\n| m2 | + | − | − | + | + | − | + |\n| m3 | + | + | + | − | + | + | + |\n| m4 | + | + | + | + | − | + | − |\n| m5 | − | − | − | − | − | − | − |',
    questions: [
      {
        question: 'According to Table 1, how many complementation groups are represented among mutants m1 through m4?',
        options: ['One', 'Two', 'Three', 'Four'],
        correctAnswer: 2,
        explanation:
          'The m1 × m2 diploid cannot grow, so m1 and m2 fail to complement and form one group; m3 and m4 each complement every other mutant, so each forms a group of its own, for three groups in all. Two groups would require m3 and m4 to fail to complement each other, but their diploid grows. Four groups would require m1 and m2 to complement each other. One group would require every pairwise diploid to fail to grow.',
        optionExplanations: [
          'One group would require every pairwise diploid among m1 through m4 to fail to grow. Table 1 shows m3 and m4 complementing every other mutant, so the mutations cannot all lie in a single gene.',
          'Two groups would require m3 and m4 to fail to complement each other and fall into one group. Their diploid (m3 × m4 α, or m4 × m3 α) grows on minimal medium, so they are in different genes.',
          'The m1 × m2 diploid cannot grow, so m1 and m2 fail to complement and share one gene. The m3 and m4 mutations each complement every other mutant, so each defines its own group, giving three complementation groups in all.',
          'Four groups would require m1 and m2 to complement each other, but the m1 × m2 α diploid (and m2 × m1 α) does not grow without methionine. They fail to complement and belong to the same group.',
        ],
        skill: '1C complementation analysis (data interpretation)',
      },
      {
        question: 'Which conclusion about mutant m5 is best supported by Table 1?',
        options: [
          'It is dominant, so these crosses cannot assign it to a complementation group.',
          'It is recessive and lies in gene *P*, because it fails to complement ΔP.',
          'It carries recessive mutations in every gene identified by m1 through m4.',
          'It is recessive and lies in gene *Q*, because it fails to complement ΔQ.',
        ],
        correctAnswer: 0,
        explanation:
          'The m5 × wild-type diploid cannot grow without methionine even though it carries a wild-type copy of every gene, so the m5 allele is dominant (for example, a protein that interferes with the normal one); every diploid containing m5 therefore fails to grow, and the complementation test cannot reveal which gene is mutated. Failure to complement ΔP or ΔQ says nothing when m5 also fails with wild type. Recessive mutations in several genes, however many, would still be masked by the wild-type partner, so the wild-type cross rules out that explanation as well.',
        optionExplanations: [
          'The m5 × wild-type diploid cannot grow even though it carries a wild-type copy of every gene, so the m5 allele is dominant (for example, an interfering protein). Every diploid containing m5 fails, so the complementation test cannot reveal which gene is mutated.',
          'Failure to complement ΔP means nothing when m5 also fails to complement wild type. A recessive allele would be masked by the wild-type partner; the wild-type cross shows m5 is dominant, so the ΔP result is uninformative.',
          'Recessive mutations in several genes would still be masked in the wild-type cross, since the wild-type α strain supplies a functional copy of every gene. The failure of that diploid to grow rules out any purely recessive explanation.',
          'Failure to complement ΔQ cannot assign m5 to gene Q, because m5 also fails with wild type and with every other partner. A dominant allele produces the mutant phenotype in all diploids regardless of the partner’s genotype.',
        ],
        skill: '1C dominance and complementation',
      },
      {
        question: 'Which statement about the mutation in m3 is best supported by the data?',
        options: [
          'It lies in gene *P*, because m3 and ΔP both fail to grow without methionine.',
          'It lies in the same gene as m4, because both mutations are recessive.',
          'It lies in gene *Q*, because the m3 × ΔQ diploid grows on minimal medium.',
          'It lies in a gene needed for methionine synthesis other than *P* or *Q*.',
        ],
        correctAnswer: 3,
        explanation:
          'The m3 mutation is recessive (the m3 × wild-type diploid grows) and complements ΔP, ΔQ, and every other mutant, so it disrupts a third gene required for methionine synthesis that the knockouts did not target. Sharing a phenotype with ΔP does not place m3 in gene *P*; the growth of the m3 × ΔP diploid shows the opposite. Both m3 and m4 being recessive is a precondition of the test, not evidence they share a gene, and their diploid grows. Growth of the m3 × ΔQ diploid means m3 complements ΔQ, which places it outside gene *Q*.',
        optionExplanations: [
          'Sharing a phenotype with ΔP does not place m3 in gene P. The m3 × ΔP diploid grows on minimal medium, meaning m3 complements the P deletion, which shows the m3 mutation lies in a different gene.',
          'Both m3 and m4 being recessive is a precondition of the complementation test, not evidence they share a gene. Their diploid grows, so they complement each other and lie in different genes.',
          'Growth of the m3 × ΔQ diploid means m3 complements the Q deletion, which places m3 outside gene Q. This reasoning reverses the logic of complementation: growth indicates different genes, not the same gene.',
          'The m3 mutation is recessive (the m3 × wild-type diploid grows) and complements ΔP, ΔQ, and every other mutant. It therefore disrupts a third gene required for methionine synthesis that the knockouts did not target.',
        ],
        skill: '1C complementation and gene identity',
      },
      {
        question: 'Cas9 occasionally cuts at genomic sites that differ from the guide sequence by one or two nucleotides. Which result would best confirm that the growth defect of ΔP is caused by loss of gene *P* rather than by an off-target mutation?',
        options: [
          'Sequencing gene *Q* in the ΔP strain shows that its coding sequence is unaltered.',
          'A plasmid carrying wild-type gene *P* restores growth of ΔP on minimal medium.',
          'The ΔP strain grows at the wild-type rate when methionine is supplied.',
          'A guide RNA targeting gene *Q* yields a strain with the same growth defect.',
        ],
        correctAnswer: 1,
        explanation:
          'If reintroducing only wild-type *P* restores growth, the defect must stem from the missing *P* function; an unrelated off-target mutation elsewhere would not be corrected by the plasmid. Checking gene *Q* rules out only one of many possible off-target sites. Normal growth with methionine shows that the defect is specific to methionine synthesis but not which gene causes it. A similar phenotype from a *Q* knockout concerns a different gene and cannot link the ΔP defect to *P*.',
        optionExplanations: [
          'Sequencing gene Q rules out only one of many possible off-target sites in the genome. Cas9 could have cut anywhere with a near-matching sequence, so an unaltered Q does not exclude off-target damage elsewhere.',
          'If reintroducing only wild-type P restores growth on minimal medium, the defect must stem from missing P function. An unrelated off-target mutation elsewhere would not be corrected by supplying gene P, so rescue is the decisive test.',
          'Normal growth with methionine shows the defect is specific to methionine synthesis but says nothing about which gene causes it. Both an on-target P deletion and an off-target hit in another methionine gene would give this result.',
          'A guide targeting Q producing the same defect concerns a different gene entirely. It shows Q is also needed for methionine synthesis but cannot link the ΔP strain’s phenotype specifically to loss of P.',
        ],
        skill: '1B research design: rescue controls',
      },
      {
        question: 'The mutant screen was carried out on haploid rather than diploid cells mainly because, in haploid cells:',
        options: [
          'mutagens produce fewer lethal mutations than they do in diploid cells.',
          'methionine can be taken up from the medium, unlike in diploid cells.',
          'growth on minimal medium is possible, whereas diploids need amino acids.',
          'a recessive mutation is expressed because no second allele can mask it.',
        ],
        correctAnswer: 3,
        explanation:
          'Most mutagen-induced alleles are recessive loss-of-function alleles; in a haploid there is only one copy of each gene, so such a mutation produces its phenotype immediately, whereas in a diploid it would be hidden by the remaining wild-type allele. Haploids, having no backup copy, are if anything more vulnerable to lethal mutations. Nothing suggests that diploids cannot take up methionine. Table 1 shows many diploids growing on minimal medium, so diploids do not require amino acids.',
        optionExplanations: [
          'Haploids have no backup copy of any gene, so they are if anything more vulnerable to lethal mutations than diploids, where a second allele can compensate. This reverses the actual relationship.',
          'Nothing in the passage suggests diploids cannot take up methionine. In fact, the mutant diploids in Table 1 were tested on minimal medium and would have been maintained on methionine-supplemented medium.',
          'Table 1 shows many diploids growing on minimal medium without methionine, so diploids do not require added amino acids. Both haploids and wild-type diploids can grow on minimal medium.',
          'Most mutagen-induced alleles are recessive loss-of-function alleles. In a haploid there is only one copy of each gene, so such a mutation produces its phenotype immediately; in a diploid it would be hidden by the remaining wild-type allele.',
        ],
        skill: '1C haploid genetics and recessive alleles',
      },
    ],
  },

  // ────────────────────────────────────────────────────────────────────────
  // 4. MICROBIOLOGY (info) — RNA viruses: genome sense and infectivity,
  //    RdRp error rate, drift vs shift (segmented genome), HIV latency
  // ────────────────────────────────────────────────────────────────────────
  {
    id: 'fl4-bb-a-04',
    section: 'bio-biochem',
    discipline: 'microbiology',
    title: 'Genome Types, Error-Prone Replication, and Persistence in RNA Viruses',
    passageText:
      'Viruses with RNA genomes cause many familiar human infections, including influenza, measles, poliomyelitis, hepatitis C, and HIV/AIDS. Virologists classify these genomes by comparing the genomic RNA with the messenger RNA that host ribosomes will translate. In a positive-sense (+) single-stranded RNA virus, the genome has the same base sequence as viral mRNA. In a negative-sense (−) single-stranded RNA virus, the genome is complementary to viral mRNA. A smaller group of viruses packages double-stranded RNA, often divided into several separate segments.\n\nHost cells contain no enzyme that synthesizes RNA from an RNA template. RNA viruses other than retroviruses therefore encode their own RNA-dependent RNA polymerase (RdRp), which carries out two tasks: it transcribes viral mRNAs, and it replicates the genome. Replication of a + strand genome proceeds through a complementary − strand intermediate, which then serves as the template for many new + strands; replication of a − strand genome proceeds in the same way through a + strand intermediate.\n\nRetroviruses such as HIV follow a different path. Each virion carries two copies of a + strand RNA genome together with the enzymes reverse transcriptase and integrase. After entry, reverse transcriptase copies the RNA into double-stranded DNA, and integrase inserts this DNA into a chromosome of the host cell, where it is called a provirus. New viral RNA is then transcribed from the provirus by the host’s RNA polymerase II.\n\nWith few exceptions, viral RdRps and reverse transcriptases lack the 3′→5′ exonuclease activity that allows most cellular DNA polymerases to remove a mismatched nucleotide immediately after adding it. RNA viruses consequently misincorporate roughly one nucleotide in every $10^4$ to $10^5$ copied, compared with about one in $10^9$ to $10^{10}$ during replication of cellular DNA. Because many RNA virus genomes are only about $10^4$ nucleotides long, a large fraction of progeny genomes differ from their parent, and a single infected person harbors a diverse population of related variants. Most new mutations reduce viral fitness, but variants that escape existing antibodies or resist an antiviral drug can be strongly favored by selection.\n\nIn influenza A virus, whose − strand genome is divided into eight separate RNA segments, this variation takes two forms. Point mutations that accumulate in the genes for the surface glycoproteins hemagglutinin (HA) and neuraminidase (NA), the main targets of neutralizing antibodies, gradually alter their antibody-binding sites; this antigenic drift is why seasonal vaccines must be updated regularly. Less often, a cell infected at the same time by two different influenza A strains, such as a human strain and a strain that circulates in birds, releases progeny that have packaged segments from both parents. Such reassortment can yield a virus carrying an HA subtype that the human population has never encountered, an event called antigenic shift.\n\nSome viruses can also enter latency, a state in which the viral genome persists within a cell while producing few or no viral proteins and no virions. Latently infected cells display little viral antigen and are therefore largely invisible to cytotoxic T cells. In HIV infection, latency arises when a provirus in a long-lived resting memory T cell is transcriptionally silent; if that cell is later activated, transcription of the provirus can resume.',
    questions: [
      {
        question: 'Researchers purify genomic RNA, free of all protein, from four viruses and introduce it into the cytoplasm of susceptible cells. The RNA from which virus is most likely to lead to production of new infectious virions?',
        options: [
          'A − strand virus whose genome is one unsegmented RNA molecule',
          'A + strand virus whose genome is a single RNA molecule',
          'A double-stranded RNA virus whose genome has ten segments',
          'An influenza A virus, supplied as all eight genome segments',
        ],
        correctAnswer: 1,
        explanation:
          'A + strand genome can be translated directly by host ribosomes, so the cell makes the viral RdRp and other proteins from it, and replication and assembly can follow. A − strand genome, whether single or segmented like that of influenza, cannot be translated, and because host cells have no enzyme that copies RNA from an RNA template, no viral mRNA can be made unless the virion’s own polymerase is supplied with it. The same applies to double-stranded RNA, whose mRNA must be transcribed by a viral RdRp that protein-free RNA lacks.',
        optionExplanations: [
          'A − strand genome cannot be translated by host ribosomes, and host cells have no enzyme that copies RNA from an RNA template. Without the virion’s own RdRp, no viral mRNA can be made from protein-free − strand RNA.',
          'A + strand genome has the same sequence as viral mRNA, so host ribosomes translate it directly to produce the viral RdRp and other proteins. Replication and assembly can then follow from the naked RNA alone.',
          'Double-stranded RNA cannot be translated directly; its mRNAs must be transcribed by a viral RdRp. Protein-free dsRNA lacks that polymerase, and host cells have no enzyme to supply it, so no viral proteins are made.',
          'Influenza A has a − strand genome, so none of its eight segments can be translated directly. Supplying all segments does not help without the virion’s RdRp, since host cells cannot make mRNA from an RNA template.',
        ],
        skill: '2B viral genome types',
      },
      {
        question: 'Measles virus has a − strand genome that is a single RNA molecule and an RdRp with an error rate similar to that of influenza virus. Which prediction is best supported by the passage?',
        options: [
          'Measles virus cannot gain point mutations, because its genome is not segmented.',
          'Measles virus undergoes antigenic shift more often than influenza A virus does.',
          'Measles virus can reassort genome segments only with other − strand RNA viruses.',
          'Measles virus can change by point mutation but cannot gain new genes by reassortment.',
        ],
        correctAnswer: 3,
        explanation:
          'Point mutations arise from the error-prone RdRp regardless of how the genome is packaged, so drift-type change is possible. Reassortment requires a genome divided into separate segments that can be mixed during coinfection; a single-molecule genome has nothing to exchange in that way, so measles cannot undergo antigenic shift. Segmentation is not required for point mutation. An unsegmented virus would undergo shift less often, not more. With no separate segments, measles cannot reassort with any virus.',
        optionExplanations: [
          'Point mutations arise from the error-prone RdRp regardless of genome segmentation. Measles has an RdRp with an error rate similar to influenza’s, so it accumulates point mutations readily; segmentation is irrelevant to this process.',
          'Antigenic shift requires reassortment of genome segments during coinfection. A single-molecule genome has no separate segments to exchange, so measles cannot undergo shift at all, let alone more often than segmented influenza A.',
          'Reassortment requires a segmented genome. Measles has a single RNA molecule, so it cannot exchange segments with any virus, whether + or − strand. The restriction to − strand partners is beside the point.',
          'The error-prone RdRp produces point mutations in any RNA virus, so drift-type change is possible. Reassortment requires separate genome segments that can be mixed during coinfection, which a single-molecule genome lacks, so measles cannot gain new genes that way.',
        ],
        skill: '2B antigenic drift vs shift',
      },
      {
        question: 'A + strand RNA virus has a genome of 10,000 nucleotides, and its RdRp misincorporates one nucleotide per $2 \\times 10^4$ nucleotides copied. On average, about how many new mutations does each progeny genome carry relative to the genome that infected the cell?',
        options: ['$5 \\times 10^{-5}$', '0.5', '1', '2'],
        correctAnswer: 2,
        explanation:
          'Each copying step introduces $10^4 / (2 \\times 10^4) = 0.5$ errors per genome length. A progeny + strand is made from a − strand template that was itself copied from the infecting + strand, so it passes through two copying steps, for about $2 \\times 0.5 = 1$ mutation. A value of 0.5 counts only one copying step. A value of 2 results from taking the error rate as one per $10^4$ nucleotides while also counting two copying steps. The value $5 \\times 10^{-5}$ is the error rate per nucleotide, not per genome.',
        optionExplanations: [
          'This is the per-nucleotide error rate, $1/(2 \\times 10^4) = 5 \\times 10^{-5}$, not the number of mutations per genome. Multiplying by the 10,000-nucleotide genome length and the number of copying steps is required.',
          'A value of 0.5 counts only one copying step: $10^4/(2 \\times 10^4) = 0.5$ errors per genome length. A progeny + strand is made from a − strand intermediate that was itself copied, so two copying steps separate it from the infecting genome.',
          'Each copying step introduces $10^4/(2 \\times 10^4) = 0.5$ errors per genome. The progeny + strand is copied from a − strand that was copied from the infecting + strand, so it passes through two steps, for about $2 \\times 0.5 = 1$ mutation.',
          'A value of 2 results from using an error rate of one per $10^4$ nucleotides (1 error per copying step) while correctly counting two steps. The stem specifies one error per $2 \\times 10^4$ nucleotides, half that rate.',
        ],
        skill: '2B viral mutation rate (calculation)',
      },
      {
        question: 'Drugs that inhibit reverse transcriptase can reduce HIV in the blood to undetectable levels, yet the infection returns when the drugs are stopped. This is best explained by the fact that:',
        options: [
          'the latent viral genome is already DNA and can be expressed without reverse transcription.',
          'resting memory T cells cannot take up any drugs from the surrounding extracellular fluid.',
          'latent HIV genomes persist as RNA, which reverse transcriptase inhibitors cannot affect.',
          'reverse transcriptase is required for assembly of new virions but not for their release.',
        ],
        correctAnswer: 0,
        explanation:
          'Once reverse transcription and integration have occurred, the provirus is part of the host chromosome and is transcribed by host RNA polymerase II; when a latently infected cell is activated, new virions can be produced without any further reverse transcription in that cell, so the drug cannot eliminate the reservoir. Nothing indicates that resting T cells exclude drugs, and such exclusion would not explain why the silent provirus escapes. The latent HIV genome is integrated DNA, not RNA. Reverse transcriptase acts after entry to copy the genome, not in virion assembly.',
        optionExplanations: [
          'Once reverse transcription and integration have occurred, the provirus is part of the host chromosome and is transcribed by host RNA polymerase II. When a latently infected cell is activated, new virions are produced without further reverse transcription, so the drug cannot eliminate this reservoir.',
          'Nothing indicates that resting T cells exclude drugs, and such exclusion would not explain the problem anyway. The silent provirus escapes because its expression requires no reverse transcription, not because the drug fails to reach the cell.',
          'The latent HIV genome is integrated DNA (a provirus), not RNA. The passage states that reverse transcriptase copies the RNA into DNA, which integrase inserts into a chromosome; latency arises when that provirus is transcriptionally silent.',
          'Reverse transcriptase acts after viral entry to copy the RNA genome into DNA, not during virion assembly or release. The persistence of infection depends on integrated proviruses in long-lived cells, not on any role in assembly.',
        ],
        skill: '2B retroviral latency',
      },
    ],
  },

  // ────────────────────────────────────────────────────────────────────────
  // 5. PHYSIOLOGY (exp, chart) — skeletal muscle: length–tension from
  //    filament geometry, fiber types, fatigue with and without oxygen
  // ────────────────────────────────────────────────────────────────────────
  {
    id: 'fl4-bb-a-05',
    section: 'bio-biochem',
    discipline: 'physiology',
    title: 'Filament Overlap, Fiber Type, and Fatigue in Mouse Skeletal Muscle',
    passageText:
      'The force that a skeletal muscle fiber develops during an isometric contraction depends on how many myosin heads can bind actin, and therefore on the overlap between thick and thin filaments within each sarcomere. In the mouse muscles described here, each thick filament is 1.6 μm long and carries myosin heads along its entire length except for a central bare zone 0.2 μm wide, and each thin filament extends 1.1 μm from the Z disc toward the center of the sarcomere. Over the range of sarcomere lengths in which every myosin head lies opposite a thin filament, active force is maximal. Stretching the sarcomere beyond that range reduces active force in proportion to the fraction of myosin heads left without an overlapping thin filament. At lengths shorter than the plateau, thin filaments from the two halves of the sarcomere overlap one another and the thick filaments approach the Z discs, so force again declines. The whole-muscle length at which isometric force is greatest is called the optimal length, $L_0$.\n\nForce also declines when a muscle is stimulated repeatedly, a phenomenon called fatigue. During intense activity, ATP is consumed by myosin, by the $\\text{Ca}^{2+}$ pump of the sarcoplasmic reticulum, and by the $\\text{Na}^+/\\text{K}^+$-ATPase of the plasma membrane. When ATP regeneration falls behind ATP use, inorganic phosphate and $\\text{H}^+$ accumulate in the cytosol, and both the release of $\\text{Ca}^{2+}$ from the sarcoplasmic reticulum and the force produced by each attached cross-bridge decline.\n\nTo compare fatigue in muscles of different composition, researchers dissected two hindlimb muscles from adult mice: the soleus, composed mainly of type I (slow-twitch) fibers, and the extensor digitorum longus (EDL), composed mainly of type II (fast-twitch) fibers. Each muscle was mounted in a chamber of physiological saline at 25 °C bubbled with 95% $\\text{O}_2$ and 5% $\\text{CO}_2$, with one tendon fixed and the other attached to a force transducer, and its length was set to $L_0$. The muscles were then stimulated with 500-ms trains of pulses at 100 Hz, which produce a fused tetanus in both muscles, once every 2 s for 6 min. A third group of soleus muscles was treated identically, except that the chamber was bubbled with 95% $\\text{N}_2$ and 5% $\\text{CO}_2$ beginning 10 min before stimulation.\n\nThe peak force of each contraction was expressed as a percentage of the force of the first contraction in the same muscle (Figure 1). The force of the first contraction, normalized to each muscle’s cross-sectional area, did not differ significantly among the three groups (n = 6 muscles per group). After the protocol, all muscles were returned to oxygenated saline and rested for 30 min; force in response to a single tetanus recovered to more than 90% of its initial value in every group.',
    chart: {
      title: 'Figure 1. Peak tetanic force during repeated stimulation (one 500-ms, 100-Hz train every 2 s), as a percentage of the first contraction',
      kind: 'line',
      xLabel: 'Time of stimulation',
      xUnit: 'min',
      yLabel: 'Peak force',
      yUnit: '% of first contraction',
      xValues: [0, 1, 2, 3, 4, 5, 6],
      yValues: [100, 97, 94, 92, 91, 90, 89],
      seriesLabel: 'Soleus, 95% O₂',
      comparisonSeries: [
        { label: 'Soleus, 95% N₂', yValues: [100, 84, 62, 46, 37, 32, 30] },
        { label: 'EDL, 95% O₂', yValues: [100, 58, 33, 21, 16, 13, 12] },
      ],
    },
    questions: [
      {
        question: 'For testing whether oxidative ATP production underlies the fatigue resistance of the soleus, the comparison of oxygenated with nitrogen-bubbled soleus is more informative than the comparison of soleus with EDL because it:',
        options: [
          'uses a stimulation frequency high enough to produce a fused tetanus in each group.',
          'expresses force relative to the first contraction, so muscle size does not matter.',
          'measures force at many time points, so the rate of fatigue can be estimated.',
          'changes oxygen supply while holding fiber-type composition constant.',
        ],
        correctAnswer: 3,
        explanation:
          'The soleus and EDL differ in fiber type and in many other properties (size, fiber number, enzyme content), so a difference between them cannot be attributed to any one factor; comparing soleus with soleus changes only the oxygen supply, isolating the variable of interest. Tetanic stimulation, normalization to the first contraction, and repeated time points were applied equally to all three groups, so none of them makes one comparison more informative than the other.',
        optionExplanations: [
          'Tetanic stimulation at 100 Hz was applied to all three groups, producing a fused tetanus in each. Because it was the same for every group, it does not make one comparison more informative than another.',
          'Normalizing force to the first contraction was applied equally to all groups and removes differences in size from every comparison. It does not specifically favor the soleus-versus-soleus comparison.',
          'Force was measured at many time points for all three groups, so the rate of fatigue could be estimated for each. This feature is shared across comparisons and does not distinguish them.',
          'Soleus and EDL differ in fiber type and in many other properties (size, fiber number, enzyme content), so a difference between them cannot be attributed to one factor. Comparing oxygenated with nitrogen-bubbled soleus changes only oxygen supply, isolating the variable of interest.',
        ],
        skill: '3B research design: controlling variables',
      },
      {
        question: 'Which conclusion is best supported by Figure 1?',
        options: [
          'The soleus resists fatigue largely because it can regenerate ATP aerobically.',
          'The EDL would fatigue as slowly as the soleus if it were supplied with more oxygen.',
          'Removing oxygen reduces the maximal force that soleus cross-bridges can generate.',
          'The EDL fatigues rapidly because its fibers lack the enzymes needed for glycolysis.',
        ],
        correctAnswer: 0,
        explanation:
          'Depriving the soleus of oxygen cut its force at 6 min from about 89% to about 30% of initial, far closer to the EDL’s 12% than to the oxygenated soleus, so most of the soleus’s fatigue resistance depends on oxidative ATP production. The EDL was already in 95% $\\text{O}_2$, so the data give no reason to expect that more oxygen would make it resemble the soleus. Initial force per cross-sectional area did not differ among groups, so hypoxia did not reduce maximal force; the loss appeared only with repeated contractions and reversed with rest. Fast glycolytic fibers are rich in glycolytic enzymes, not lacking them.',
        optionExplanations: [
          'Depriving the soleus of oxygen cut its force at 6 minutes from about 89% to about 30% of initial, far closer to the EDL’s 12% than to the oxygenated soleus. Most of the soleus’s fatigue resistance therefore depends on oxidative ATP production.',
          'The EDL was already bubbled with 95% O₂, so oxygen supply was not limiting. The data give no reason to expect that still more oxygen would make the EDL fatigue as slowly as the soleus; its rapid fatigue reflects its fiber composition.',
          'Initial force per cross-sectional area did not differ among the three groups, so hypoxia did not reduce the maximal force cross-bridges can generate. The loss appeared only with repeated contractions and reversed with rest.',
          'Fast glycolytic fibers are rich in glycolytic enzymes, not lacking them. They fatigue rapidly because they rely on glycolysis and the phosphagen system, which cannot sustain ATP regeneration, not because glycolysis is absent.',
        ],
        skill: '3B muscle fatigue and oxidative metabolism',
      },
      {
        question: 'Based on the passage, a sarcomere of one of these muscles that is stretched to a length of 3.1 μm could develop an active isometric force closest to what percentage of its maximum?',
        options: ['0%', '25%', '50%', '75%'],
        correctAnswer: 2,
        explanation:
          'Each half-sarcomere at 3.1 μm is 1.55 μm long, so a thin filament extending 1.1 μm from the Z disc ends 0.45 μm from the center. Myosin heads occupy the region from 0.1 μm (edge of the bare zone) to 0.8 μm (end of the thick filament) from the center, a span of 0.7 μm, and only the portion from 0.45 to 0.8 μm, 0.35 μm, is overlapped, which is half of the heads, so force is about 50% of maximum. Zero force would require a sarcomere length of at least 3.8 μm, where the thin filaments no longer reach the thick filaments. A value of 25% or 75% results from misplacing either the filament ends or the bare zone.',
        optionExplanations: [
          'Zero active force would require the thin filaments to no longer reach the thick filaments at all. With 1.1 μm thin filaments and 1.6 μm thick filaments, that occurs at a sarcomere length of about 3.8 μm, well beyond 3.1 μm.',
          'A value of 25% results from misplacing either the filament ends or the bare zone. At 3.1 μm, the overlap region (0.45 to 0.8 μm from center) is 0.35 μm of the 0.7 μm head-bearing span, which is half, not a quarter.',
          'Each half-sarcomere at 3.1 μm is 1.55 μm, so a 1.1 μm thin filament ends 0.45 μm from the center. Myosin heads span 0.1 μm (bare-zone edge) to 0.8 μm (thick-filament end), a 0.7 μm region; only 0.45 to 0.8 μm (0.35 μm) overlaps, so half the heads engage and force is about 50%.',
          'A value of 75% would require three-quarters of the head-bearing region to overlap thin filaments. At 3.1 μm, only the outer 0.35 μm of the 0.7 μm head-bearing span is overlapped, which is 50%, not 75%.',
        ],
        skill: '3B length–tension relationship',
      },
      {
        question: 'The EDL results in Figure 1 are most consistent with fibers that, compared with soleus fibers, have:',
        options: [
          'more mitochondria and a higher myoglobin content.',
          'fewer mitochondria and higher glycolytic enzyme activity.',
          'slower myosin ATPase activity and more capillaries.',
          'lower glycogen stores and a denser capillary network.',
        ],
        correctAnswer: 1,
        explanation:
          'The EDL lost almost 90% of its force within 6 min despite ample oxygen, the behavior of fast glycolytic fibers, which rely mainly on glycolysis, contain relatively few mitochondria and little myoglobin, and quickly fall behind in ATP regeneration. Abundant mitochondria and myoglobin, slow myosin ATPase, and dense capillary networks are features of type I oxidative fibers such as those of the soleus. Fast glycolytic fibers typically store more glycogen, not less.',
        optionExplanations: [
          'Abundant mitochondria and high myoglobin content are features of type I oxidative fibers such as those of the soleus. The EDL lost nearly 90% of its force in 6 minutes despite ample oxygen, which is inconsistent with a highly oxidative fiber type.',
          'The EDL lost almost 90% of its force within 6 minutes despite ample oxygen, the behavior of fast glycolytic fibers. Such fibers rely mainly on glycolysis, contain relatively few mitochondria, and quickly fall behind in ATP regeneration.',
          'Slower myosin ATPase and a dense capillary network are features of slow oxidative type I fibers, which resist fatigue. The EDL is a fast-twitch muscle that fatigued rapidly, so these properties do not describe its fibers.',
          'Fast glycolytic fibers typically store more glycogen, not less, to fuel anaerobic glycolysis, and a dense capillary network is a feature of oxidative fibers. Neither property matches the rapidly fatiguing EDL.',
        ],
        skill: '3B skeletal muscle fiber types',
      },
    ],
  },
]

export const FL4_BIO_BIOCHEM_A_DISCRETES: MCATDiscreteQuestion[] = [
  {
    id: 'fl4-bb-a-d01',
    section: 'bio-biochem',
    discipline: 'physiology',
    question: 'Several months after surgical removal of the lymph nodes in one armpit, a patient develops persistent swelling of the arm on that side. The swelling most likely results from:',
    options: [
      'accumulation of filtered fluid and protein that lymph normally returns to the blood.',
      'a rise in capillary hydrostatic pressure caused by obstruction of the axillary artery.',
      'a fall in plasma oncotic pressure caused by reduced synthesis of albumin by the liver.',
      'an increase in capillary permeability caused by the loss of lymphocytes from the arm.',
    ],
    correctAnswer: 0,
    explanation:
      'Capillaries filter slightly more fluid, along with some plasma protein, than they reabsorb, and lymphatic vessels return this excess through the lymph nodes to the venous circulation; when the nodes draining the arm are removed, the fluid and protein accumulate in the interstitium (lymphedema). Node removal does not obstruct the artery, and arterial obstruction would lower, not raise, downstream capillary pressure. Albumin synthesis by the liver is unaffected, and a fall in plasma protein would cause generalized rather than one-arm swelling. Loss of lymphocytes does not make capillaries leaky.',
    optionExplanations: [
      'Capillaries filter slightly more fluid and protein than they reabsorb, and lymphatic vessels return this excess through the lymph nodes to the venous circulation. When the nodes draining the arm are removed, fluid and protein accumulate in the interstitium (lymphedema).',
      'Lymph node removal does not obstruct the axillary artery, and arterial obstruction would lower, not raise, downstream capillary hydrostatic pressure. Reduced inflow produces ischemia, not edema.',
      'Albumin synthesis by the liver is unaffected by removing lymph nodes from one armpit. A fall in plasma oncotic pressure would also cause generalized swelling throughout the body, not swelling confined to one arm.',
      'Loss of lymphocytes does not make capillaries leaky. Lymph nodes contain lymphocytes, but their removal affects lymph drainage, not the permeability of the capillary wall in the arm.',
    ],
    skill: '3B lymphatic system',
  },
  {
    id: 'fl4-bb-a-d02',
    section: 'bio-biochem',
    discipline: 'physiology',
    question: 'A shallow abrasion that removes only the outer layers of the epidermis heals without a scar, whereas a cut extending deep into the dermis heals with one. The shallow wound heals without scarring mainly because:',
    options: [
      'cells of the stratum corneum divide rapidly to replace the lost layers.',
      'fibroblasts lay down collagen that is later converted into new epidermis.',
      'dividing cells of the stratum basale remain to regenerate the epidermis.',
      'melanocytes differentiate into keratinocytes that restore the barrier.',
    ],
    correctAnswer: 2,
    explanation:
      'Keratinocytes are produced by stem and progenitor cells of the stratum basale, the deepest epidermal layer; if that layer survives, it simply regenerates the overlying epidermis. When a wound reaches deep into the dermis, repair depends on fibroblasts that deposit collagen, forming scar tissue. The stratum corneum consists of dead, keratin-filled cells that cannot divide. Collagen deposited by fibroblasts is not converted into epidermis. Melanocytes produce pigment and do not give rise to keratinocytes.',
    optionExplanations: [
      'The stratum corneum consists of dead, keratin-filled cells that have lost their nuclei and cannot divide. Regeneration of the epidermis comes from deeper living layers, not from the surface layer.',
      'Collagen deposited by fibroblasts forms scar tissue in the dermis; it is never converted into epidermis. Fibroblast activity is what produces the scar in deep wounds, the opposite of scarless healing.',
      'Keratinocytes are produced by stem and progenitor cells of the stratum basale, the deepest epidermal layer. If a shallow wound leaves that layer intact, it simply regenerates the overlying epidermis without scar formation.',
      'Melanocytes produce pigment and transfer it to keratinocytes; they do not differentiate into keratinocytes. The keratinocyte lineage comes from basal stem cells, not from pigment cells.',
    ],
    skill: '3B skin and wound healing',
  },
  {
    id: 'fl4-bb-a-d03',
    section: 'bio-biochem',
    discipline: 'physiology',
    question: 'Tapping the patellar tendon stretches the quadriceps, which then contracts while the opposing hamstring muscles relax. Which component is part of the pathway that relaxes the hamstrings but NOT part of the pathway that contracts the quadriceps?',
    options: [
      'A stretch-receptor sensory neuron with its cell body in a dorsal root ganglion',
      'An inhibitory interneuron located in the gray matter of the spinal cord',
      'A motor neuron whose axon leaves the spinal cord through the ventral root',
      'An ascending tract that relays the stretch signal to the motor cortex',
    ],
    correctAnswer: 1,
    explanation:
      'The stretch-sensitive afferent from the quadriceps muscle spindle synapses directly on quadriceps motor neurons (a monosynaptic pathway) and, through a branch, on an inhibitory interneuron that suppresses hamstring motor neurons (reciprocal inhibition); only the relaxation pathway contains the interneuron. The same sensory neuron, with its cell body in the dorsal root ganglion, begins both pathways. Both pathways end on ventral-root motor neurons, one excited and one inhibited. The reflex does not require the brain, so an ascending tract is part of neither pathway.',
    optionExplanations: [
      'The same stretch-receptor sensory neuron, with its cell body in the dorsal root ganglion, begins both pathways: it synapses directly on quadriceps motor neurons and, through a branch, on the inhibitory interneuron. It is common to both.',
      'The stretch afferent synapses directly on quadriceps motor neurons (monosynaptic) and, through a branch, on an inhibitory interneuron that suppresses hamstring motor neurons (reciprocal inhibition). Only the relaxation pathway contains the interneuron.',
      'Both pathways end on motor neurons whose axons leave through the ventral root: the quadriceps motor neuron is excited and the hamstring motor neuron is inhibited. A ventral-root motor neuron is part of both.',
      'The stretch reflex is a spinal reflex that does not require the brain. An ascending tract to the motor cortex may carry information about the stretch, but it is part of neither the contraction nor the relaxation pathway.',
    ],
    skill: '3A spinal reflex arc',
  },
  {
    id: 'fl4-bb-a-d04',
    section: 'bio-biochem',
    discipline: 'genetics',
    question: 'A man affected by a rare X-linked dominant disorder has children with an unaffected woman. Assuming complete penetrance, which outcome is expected among their children?',
    options: [
      'Half of the sons and half of the daughters will be affected.',
      'All of the sons and none of the daughters will be affected.',
      'None of the children will be affected, but all daughters are carriers.',
      'All of the daughters and none of the sons will be affected.',
    ],
    correctAnswer: 3,
    explanation:
      'The father passes his only X chromosome, which carries the dominant allele, to every daughter, and one copy is enough to cause the disorder; his sons receive his Y chromosome and one of the mother’s normal X chromosomes, so none are affected. Half of each sex would be affected if the mother, rather than the father, were the heterozygous affected parent. Sons never receive an X chromosome from their father. A dominant allele with complete penetrance produces affected, not unaffected carrier, daughters.',
    optionExplanations: [
      'Half of each sex would be affected if the mother were the heterozygous affected parent, since she passes the mutant X to half her children regardless of sex. With the father affected, transmission depends entirely on which sex chromosome he contributes.',
      'Sons receive their father’s Y chromosome, never his X, so no son can inherit the father’s X-linked allele. All sons are unaffected, and the daughters, not the sons, receive the mutant X.',
      'A dominant allele with complete penetrance produces affected daughters, not unaffected carriers. The carrier concept applies to recessive alleles; here one copy of the X-linked dominant allele is sufficient to cause the disorder.',
      'The father passes his only X chromosome, carrying the dominant allele, to every daughter, and one copy is enough to cause the disorder. Sons receive his Y chromosome and a normal maternal X, so none are affected.',
    ],
    skill: '1C X-linked dominant inheritance',
  },
  {
    id: 'fl4-bb-a-d05',
    section: 'bio-biochem',
    discipline: 'molecular biology',
    question: 'In human somatic cells that lack telomerase activity, chromosomes become slightly shorter with each round of DNA replication. The most direct cause is that:',
    options: [
      'the RNA primer at the 5′ end of each new lagging strand cannot be replaced with DNA.',
      'the leading strand cannot be synthesized all the way to the end of its template strand.',
      'no origins of replication are located close enough to the ends of each chromosome.',
      'DNA polymerase removes several nucleotides from each 3′ end as it proofreads.',
    ],
    correctAnswer: 0,
    explanation:
      'DNA polymerases can extend only an existing 3′ end. At the very end of a chromosome, the RNA primer of the final lagging-strand fragment is removed, and no upstream 3′ end exists from which polymerase could fill the gap, so each new lagging strand is left short; telomerase, a reverse transcriptase with its own RNA template, normally extends the parental 3′ end to compensate. The leading strand is synthesized continuously to the end of its template. The problem arises from primer removal, not from the location of origins. Proofreading removes only mismatched nucleotides just added, not correctly paired ones at chromosome ends.',
    optionExplanations: [
      'DNA polymerases extend only an existing 3′ end. At the chromosome end, the RNA primer of the final lagging-strand fragment is removed, and no upstream 3′ end exists from which polymerase could fill the gap, so each new lagging strand is left short.',
      'The leading strand is synthesized continuously in the 5′→3′ direction all the way to the end of its template. The shortening problem is specific to the lagging strand, whose terminal primer cannot be replaced.',
      'The problem arises from removal of the terminal RNA primer, not from where origins of replication are located. Even with an origin near the end, the final lagging-strand fragment would still need a primer that cannot be replaced.',
      'Proofreading removes only mismatched nucleotides immediately after they are added, not correctly paired nucleotides at chromosome ends. Exonuclease activity is not responsible for progressive telomere shortening.',
    ],
    skill: '1B telomeres and telomerase',
  },
  {
    id: 'fl4-bb-a-d06',
    section: 'bio-biochem',
    discipline: 'biochemistry',
    question: 'An enzyme joins two molecules by forming a new carbon–carbon bond, and the reaction is driven by the coupled hydrolysis of ATP to ADP and inorganic phosphate. This enzyme is best classified as a:',
    options: ['kinase', 'lyase', 'ligase', 'phosphatase'],
    correctAnswer: 2,
    explanation:
      'Ligases join two molecules with a new covalent bond (C–C, C–N, C–O, or C–S) using energy from the hydrolysis of ATP or another nucleoside triphosphate; carboxylases such as pyruvate carboxylase are examples. A kinase transfers a phosphoryl group from ATP to a substrate, leaving it phosphorylated, rather than joining two molecules. A lyase forms or breaks bonds by addition to or elimination from a double bond, without hydrolysis or ATP. A phosphatase removes a phosphate group by hydrolysis.',
    optionExplanations: [
      'A kinase transfers a phosphoryl group from ATP to a substrate, leaving it phosphorylated. It does not join two molecules with a new carbon–carbon bond; ATP is a phosphate donor, not an energy source for bond formation.',
      'A lyase forms or breaks bonds by addition to or elimination from a double bond, without hydrolysis or ATP involvement. The coupled ATP hydrolysis in the stem rules out the lyase classification.',
      'Ligases join two molecules with a new covalent bond (C–C, C–N, C–O, or C–S) using energy from hydrolysis of ATP or another nucleoside triphosphate. Carboxylases such as pyruvate carboxylase are examples.',
      'A phosphatase removes a phosphate group by hydrolysis. It does not form carbon–carbon bonds or consume ATP; it is the opposite of a kinase, not a bond-forming enzyme.',
    ],
    skill: '1A enzyme classification',
  },
  {
    id: 'fl4-bb-a-d07',
    section: 'bio-biochem',
    discipline: 'biochemistry',
    question: 'Oxidation of FADH₂ by the mitochondrial electron transport chain supports the synthesis of less ATP than oxidation of NADH, because the electrons from FADH₂:',
    options: [
      'are transferred to oxygen without passing through cytochrome c.',
      'pass through complex I but bypass the proton pumping of complex IV.',
      'must reduce NAD⁺ in the matrix before they can enter the chain.',
      'enter at ubiquinone and so bypass the proton pumping of complex I.',
    ],
    correctAnswer: 3,
    explanation:
      'NADH donates electrons to complex I, which pumps protons as it passes them to ubiquinone; FADH₂, bound in complex II and other flavoproteins, hands its electrons directly to ubiquinone, so those electrons skip complex I and drive fewer protons across the inner membrane, yielding about 1.5 rather than 2.5 ATP. Electrons from both carriers pass through complex III, cytochrome c, and complex IV before reaching oxygen. FADH₂ electrons do not go through complex I, and they do not need to reduce NAD⁺ first, which would be energetically uphill.',
    optionExplanations: [
      'Electrons from both NADH and FADH₂ pass through complex III, cytochrome c, and complex IV before reaching oxygen. The difference between the carriers lies at the entry point, not at the exit to oxygen.',
      'FADH₂ electrons do not pass through complex I at all; that is precisely what they bypass. Both carriers’ electrons do pass through complex IV, which pumps protons, so this reverses the actual situation.',
      'FADH₂ electrons do not need to reduce NAD⁺ first, and doing so would be energetically uphill because NADH has a more negative reduction potential than FADH₂. FADH₂ feeds electrons directly to ubiquinone.',
      'NADH donates electrons to complex I, which pumps protons as it passes them to ubiquinone. FADH₂, bound in complex II and other flavoproteins, hands its electrons directly to ubiquinone, skipping complex I and driving fewer protons across the membrane (about 1.5 versus 2.5 ATP).',
    ],
    skill: '1D electron carriers NADH and FADH₂',
  },
  {
    id: 'fl4-bb-a-d08',
    section: 'bio-biochem',
    discipline: 'cell biology',
    question: 'A fluorescent dye of molecular mass 500 Da injected into one cardiac muscle cell appears in neighboring cells within seconds, but a 10,000-Da dye injected the same way stays in the injected cell. The spread of the smaller dye depends on:',
    options: [
      'desmosomes, which anchor intermediate filaments of adjacent cells.',
      'connexin channels, which link the cytoplasm of adjacent cells.',
      'tight junctions, which seal the space between adjacent cells.',
      'adherens junctions, which anchor actin filaments of adjacent cells.',
    ],
    correctAnswer: 1,
    explanation:
      'Gap junctions are clusters of connexin channels that connect the cytosol of neighboring cells and pass ions and small molecules up to roughly 1000 Da, which is why the small dye spreads but the large one does not; in heart muscle they also let action potentials spread from cell to cell. Desmosomes and adherens junctions are mechanical attachments that link the cytoskeletons of adjacent cells without forming channels between their cytoplasms. Tight junctions seal the paracellular space between epithelial cells and do not connect cell interiors.',
    optionExplanations: [
      'Desmosomes are mechanical attachments that link intermediate filaments of adjacent cells through cadherin-family proteins. They form no channels between cytoplasms, so a dye cannot pass through them.',
      'Gap junctions are clusters of connexin channels that connect the cytosol of neighboring cells and pass ions and small molecules up to roughly 1000 Da. The 500-Da dye spreads while the 10,000-Da dye does not, and in heart muscle these channels also conduct action potentials.',
      'Tight junctions seal the paracellular space between epithelial cells, preventing solutes from passing between cells. They do not connect cell interiors and would not allow a dye to move from one cytoplasm to another.',
      'Adherens junctions anchor actin filaments of adjacent cells via cadherins and catenins. Like desmosomes, they are mechanical attachments with no channel connecting the cytoplasms.',
    ],
    skill: '2A cell junctions',
  },
]
