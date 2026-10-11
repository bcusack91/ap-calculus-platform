/**
 * MCAT Full-Length Form 7 — Biological & Biochemical Foundations, file A
 * (passages 1–5, 22 questions) + 8 discrete items.
 *
 * Built to the AAMC-alignment blueprint (BLUEPRINT-F78): 400–600-word
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

export const FL7_BIO_BIOCHEM_A_PASSAGES: MCATPassage[] = [
  // ────────────────────────────────────────────────────────────────────────
  // 1. BIOCHEMISTRY (exp, chart) — reciprocal control of glycolysis and
  //    gluconeogenesis: PFK-1 vs [F6P] ± fructose 2,6-bisphosphate, ATP as
  //    substrate and inhibitor, bifunctional PFK-2/FBPase-2 and PKA
  //    Skills: Q1 S4 · Q2 S2 · Q3 S2 · Q4 S1 · Q5 S3
  // ────────────────────────────────────────────────────────────────────────
  {
    id: 'fl7-bb-a-01',
    section: 'bio-biochem',
    discipline: 'biochemistry',
    title: 'Fructose 2,6-Bisphosphate and the Control of Liver Phosphofructokinase-1',
    passageText:
      'The liver both consumes and produces glucose. Glycolysis and gluconeogenesis share seven enzymes that operate near equilibrium, but at three points each pathway relies on an enzyme of its own. One of these points is the interconversion of fructose 6-phosphate (F6P) and fructose 1,6-bisphosphate (F1,6BP). In glycolysis, phosphofructokinase-1 (PFK-1) phosphorylates F6P at the expense of ATP; in gluconeogenesis, fructose 1,6-bisphosphatase (FBPase-1) catalyzes the opposing step. Because both enzymes are present in the cytosol of every hepatocyte, the cell must keep them from working at full speed at the same time.\n\nPFK-1 is a tetramer, and each subunit binds ATP at two places: the active site, which is half-saturated at about 0.05 mM ATP, and a regulatory site of much lower affinity. ATP bound at the regulatory site stabilizes a conformation of the enzyme that binds F6P poorly. AMP stabilizes the alternative conformation and so opposes this effect.\n\nThe most potent activator of liver PFK-1 is fructose 2,6-bisphosphate (F2,6BP), a molecule that is not an intermediate of either pathway. F2,6BP is made from F6P and ATP by phosphofructokinase-2 (PFK-2) and is hydrolyzed back to F6P by fructose 2,6-bisphosphatase (FBPase-2). These two activities belong to separate domains of a single polypeptide, the bifunctional enzyme. Protein kinase A (PKA) phosphorylates the liver bifunctional enzyme on one serine, Ser32; the phosphorylated protein has little kinase activity and high phosphatase activity. In addition to activating PFK-1, F2,6BP inhibits FBPase-1.\n\nResearchers purified PFK-1 from rat liver and measured its initial rate at pH 7.0 as a function of the F6P concentration under three conditions (Figure 1). The reaction was followed with a coupled assay. Three auxiliary enzymes added to the cuvette (aldolase, triose phosphate isomerase, and glycerol 3-phosphate dehydrogenase) converted each molecule of F1,6BP formed into two molecules of glycerol 3-phosphate while oxidizing two molecules of NADH, and the fall in absorbance at 340 nm, where NADH but not NAD⁺ absorbs, was recorded. Rates are given as a percentage of the rate at saturating F6P, which was the same under all three conditions.\n\nIn a second experiment, hepatocytes isolated from fed rats were incubated with glucose and lactate. Within 5 minutes of the addition of glucagon, the cAMP content of the cells rose, their F2,6BP content fell by more than 90%, and the incorporation of carbon from ¹⁴C-labeled lactate into glucose increased severalfold. The ATP content of the cells did not change, and their F6P concentration stayed well below 0.5 mM throughout. When insulin was added after the glucagon, a protein phosphatase removed the phosphate from the bifunctional enzyme, and the F2,6BP content of the cells returned to its starting value within 15 minutes.',
    chart: {
      title: 'Figure 1. Initial rate of purified liver PFK-1 as a function of F6P concentration, as a percentage of the rate at saturating F6P',
      kind: 'line',
      xLabel: 'F6P concentration',
      xUnit: 'mM',
      yLabel: 'PFK-1 rate',
      yUnit: '% of maximum',
      xValues: [0, 0.5, 1.0, 1.5, 2.0, 2.5, 3.0, 3.5],
      yValues: [0, 1, 6, 24, 50, 71, 84, 90],
      seriesLabel: '1.5 mM ATP',
      comparisonSeries: [
        { label: '1.5 mM ATP + 1 μM F2,6BP', yValues: [0, 67, 80, 86, 89, 91, 92, 93] },
        { label: '5 mM ATP', yValues: [0, 0, 1, 6, 16, 33, 50, 65] },
      ],
    },
    questions: [
      {
        question: 'According to Figure 1, at 1.0 mM F6P and 1.5 mM ATP, the addition of 1 μM F2,6BP increased the rate of PFK-1 by a factor of approximately:',
        options: ['2', '6', '13', '80'],
        correctAnswer: 2,
        explanation:
          'At 1.0 mM F6P, the enzyme assayed with 1.5 mM ATP alone ran at 6% of its maximal rate, and with 1 μM F2,6BP present it ran at about 80%; the ratio 80:6 is roughly 13. A factor near 2 describes the activation at 2.0 mM F6P (about 89% versus 50%), where the enzyme without activator is already half-maximal. The values 6 and 80 are the two rates themselves, not their ratio.',
        optionExplanations: [
          'A factor near 2 describes the activation at 2.0 mM F6P, where the enzyme without activator is already at 50% and F2,6BP raises it to about 89%. At 1.0 mM F6P the unactivated enzyme is far lower, so the fold change is much larger.',
          'Six is the rate at 1.0 mM F6P with 1.5 mM ATP alone, as a percentage of maximum. It is one of the two values needed for the ratio, not the ratio itself.',
          'At 1.0 mM F6P, the 1.5 mM ATP curve gives 6% of maximum and the curve with 1 μM F2,6BP gives about 80%. The ratio 80/6 is roughly 13, so F2,6BP increased the rate about 13-fold at this substrate concentration.',
          'Eighty is the rate at 1.0 mM F6P with F2,6BP present, as a percentage of maximum. It is the numerator of the ratio, not the fold increase; dividing by the 6% baseline gives the factor.',
        ],
        skill: '1D allosteric activation of PFK-1 (data interpretation)',
      },
      {
        question: 'ATP is a substrate of PFK-1, yet in Figure 1 raising ATP from 1.5 mM to 5 mM lowered the rate at every subsaturating F6P concentration. Which explanation is most consistent with the passage?',
        options: [
          'The active site was nearly saturated at both concentrations, while occupancy of the regulatory site increased.',
          'The active site was far from saturated at both concentrations, while occupancy of the regulatory site decreased.',
          'The regulatory site was nearly saturated at both concentrations, while occupancy of the active site decreased.',
          'The auxiliary enzymes were inhibited at the higher concentration, while occupancy of both sites on PFK-1 was unchanged.',
        ],
        correctAnswer: 0,
        explanation:
          'With half-saturation at about 0.05 mM, the active site is about 97% occupied at 1.5 mM ATP and about 99% occupied at 5 mM, so the extra ATP adds almost nothing as a substrate; its main effect is to fill more of the low-affinity regulatory sites, which lowers the affinity for F6P and shifts the curve to the right. An active site far from saturation would have made the rate rise with ATP, and lower regulatory-site occupancy would activate rather than inhibit. Adding a ligand cannot decrease occupancy of the active site, and a regulatory site already saturated at 1.5 mM could not produce a further shift. Inhibited auxiliary enzymes would have capped the rate at saturating F6P, which was the same under all conditions.',
        optionExplanations: [
          'With half-saturation at 0.05 mM, the active site is about 97% occupied at 1.5 mM ATP and 99% at 5 mM, so extra ATP adds almost nothing as substrate. Its effect is to fill more low-affinity regulatory sites, which lowers F6P affinity and shifts the curve rightward.',
          'An active site far from saturation would make the rate rise with more ATP, since substrate would be limiting; the opposite was observed. And lower regulatory-site occupancy would relieve inhibition and activate the enzyme, not inhibit it.',
          'A regulatory site already saturated at 1.5 mM ATP could not produce a further inhibitory shift at 5 mM. Moreover, adding more of a ligand cannot decrease the occupancy of a site that binds it; active-site occupancy rises, if anything.',
          'Inhibited auxiliary enzymes would have capped the observed rate at saturating F6P, but the passage says the maximal rate was the same under all three conditions. The rightward shift at subsaturating F6P reflects PFK-1 itself, not the coupling system.',
        ],
        skill: '1D ATP as substrate and allosteric inhibitor',
      },
      {
        question: 'Hepatocytes are engineered so that the only bifunctional enzyme they contain has alanine in place of Ser32. Compared with normal hepatocytes exposed to glucagon, these cells exposed to glucagon would be expected to have:',
        options: [
          'a lower F2,6BP content and a lower rate of glucose synthesis from lactate.',
          'a lower F2,6BP content and a higher rate of glucose synthesis from lactate.',
          'a higher F2,6BP content and a higher rate of glucose synthesis from lactate.',
          'a higher F2,6BP content and a lower rate of glucose synthesis from lactate.',
        ],
        correctAnswer: 3,
        explanation:
          'Alanine cannot be phosphorylated, so PKA activated by glucagon cannot switch the mutant enzyme from its kinase form to its phosphatase form; F2,6BP therefore stays high. With F2,6BP high, PFK-1 remains activated and FBPase-1 remains inhibited, so the gluconeogenic step from F1,6BP to F6P is restrained and less lactate carbon reaches glucose than in normal cells given glucagon. A lower F2,6BP content is the normal response that the mutation prevents. A higher F2,6BP content cannot accompany faster gluconeogenesis, because F2,6BP inhibits the gluconeogenic enzyme and activates the glycolytic one.',
        optionExplanations: [
          'A lower F2,6BP content is the normal glucagon response, which requires PKA to phosphorylate Ser32 and switch the bifunctional enzyme to its phosphatase form. Alanine cannot be phosphorylated, so the mutant cells cannot lower F2,6BP.',
          'A lower F2,6BP is the response the mutation prevents, and a higher rate of gluconeogenesis would require FBPase-1 to be released from inhibition. Neither occurs when the bifunctional enzyme stays in its kinase form.',
          'F2,6BP does stay high in the mutant cells, but high F2,6BP inhibits FBPase-1 and activates PFK-1. That restrains the gluconeogenic step from F1,6BP to F6P, so glucose synthesis from lactate would be lower, not higher.',
          'PKA cannot phosphorylate alanine, so glucagon cannot switch the mutant enzyme to its phosphatase form and F2,6BP stays high. High F2,6BP keeps PFK-1 active and FBPase-1 inhibited, so less lactate carbon reaches glucose than in normal cells given glucagon.',
        ],
        skill: '1D fructose 2,6-bisphosphate and hormonal control',
      },
      {
        question: 'If PFK-1 and FBPase-1 were both fully active in the same cell, the net reaction resulting from one turn of the cycle between F6P and F1,6BP would be:',
        options: [
          'ADP + Pi → ATP + H₂O',
          'ATP + H₂O → ADP + Pi',
          'F6P + ATP → F1,6BP + ADP',
          'F1,6BP + ADP → F6P + ATP',
        ],
        correctAnswer: 1,
        explanation:
          'PFK-1 catalyzes F6P + ATP → F1,6BP + ADP, and FBPase-1 is a hydrolase that catalyzes F1,6BP + H₂O → F6P + Pi; adding the two, the sugar phosphates cancel and the sum is the hydrolysis of ATP, with the energy lost as heat. Synthesis of ATP from ADP and Pi would require an energy source that the cycle does not have. The reaction F6P + ATP → F1,6BP + ADP is the PFK-1 step alone, not the cycle. FBPase-1 does not transfer the phosphoryl group back to ADP, so the cycle is not a simple reversal that regenerates ATP.',
        optionExplanations: [
          'Making ATP from ADP and Pi requires an energy input that this cycle does not provide. The cycle consumes ATP at the PFK-1 step and releases only Pi at the FBPase-1 step, so the net direction is ATP hydrolysis, not synthesis.',
          'PFK-1 catalyzes F6P + ATP → F1,6BP + ADP, and FBPase-1 catalyzes F1,6BP + H₂O → F6P + Pi. Adding the two, the sugar phosphates cancel and the net reaction is ATP + H₂O → ADP + Pi, with the energy released as heat.',
          'This is the PFK-1 step alone, not the net result of one turn of the cycle. Once FBPase-1 hydrolyzes F1,6BP back to F6P, the sugar phosphate terms cancel and only ATP hydrolysis remains.',
          'FBPase-1 is a hydrolase: it removes the phosphate as free Pi using water, and does not transfer the phosphoryl group back to ADP. The cycle is not a simple reversal that regenerates ATP; it wastes it.',
        ],
        skill: '1D substrate (futile) cycles',
      },
      {
        question: 'For the fall in absorbance at 340 nm to be a valid measure of the rate of PFK-1, the assay must be set up so that:',
        options: [
          'the auxiliary enzymes can use F1,6BP far faster than PFK-1 forms it.',
          'the auxiliary enzymes can use F1,6BP somewhat more slowly than PFK-1 forms it.',
          'NADH is absent at the start, so that absorbance rises as the reaction proceeds.',
          'F1,6BP is added at the start, so that the auxiliary enzymes are saturated with it.',
        ],
        correctAnswer: 0,
        explanation:
          'In a coupled assay the observed signal comes from the last reaction, so it reports the first reaction only if every later step keeps pace; with the auxiliary enzymes in large excess, each F1,6BP is converted as soon as it forms and PFK-1 alone limits the rate of NADH oxidation. If the auxiliary enzymes were slower than PFK-1, the absorbance change would measure them instead. The assay follows the disappearance of NADH, so NADH must be present from the start. Adding F1,6BP at the start would cause NADH oxidation that has nothing to do with PFK-1.',
        optionExplanations: [
          'In a coupled assay the signal comes from the last reaction and reports the first only if every later step keeps pace. With auxiliary enzymes in large excess, each F1,6BP is consumed as soon as it forms, and PFK-1 alone limits NADH oxidation.',
          'If the auxiliary enzymes were slower than PFK-1, F1,6BP would accumulate and the fall in absorbance would measure the auxiliary enzymes’ rate, not PFK-1’s. The coupling enzymes must never be the bottleneck.',
          'The assay follows the disappearance of NADH, which absorbs at 340 nm while NAD⁺ does not. NADH must therefore be present from the start so that its oxidation produces a measurable fall in absorbance.',
          'Adding F1,6BP at the start would feed the auxiliary enzymes directly, causing NADH oxidation that has nothing to do with PFK-1 activity. The F1,6BP in the assay must come only from the PFK-1 reaction being measured.',
        ],
        skill: '1D research design: coupled enzyme assays',
      },
    ],
  },

  // ────────────────────────────────────────────────────────────────────────
  // 2. PHYSIOLOGY (info) — bone remodeling: osteoclasts, osteoblasts,
  //    osteocytes and sclerostin, RANKL/osteoprotegerin, estrogen loss,
  //    coupling of resorption to formation, bisphosphonates, anti-RANKL
  //    Skills: Q1 S2 · Q2 S2 · Q3 S2 · Q4 S1
  // ────────────────────────────────────────────────────────────────────────
  {
    id: 'fl7-bb-a-02',
    section: 'bio-biochem',
    discipline: 'physiology',
    title: 'Remodeling of the Adult Skeleton',
    passageText:
      'The adult skeleton is renewed continuously. About 10% of its mass is replaced each year by remodeling, a process in which small packets of old bone are removed and then refilled. Remodeling takes place only on bone surfaces. It repairs microscopic damage and allows the architecture of a bone to adapt to the loads placed on it.\n\nThree cell types carry out the work. Osteoclasts are large, multinucleated cells formed by the fusion of precursors of the monocyte–macrophage lineage, which arise from hematopoietic stem cells in the marrow. An osteoclast seals itself against the bone surface and secretes H⁺ and Cl⁻ into the enclosed space, where the acid dissolves the mineral, hydroxyapatite; it also secretes a protease that digests the exposed collagen. Osteoblasts descend from mesenchymal stem cells. They secrete an unmineralized matrix of type I collagen, which then calcifies. Some osteoblasts become buried in the matrix they have made and differentiate into osteocytes, long-lived cells whose slender processes run through fine channels in the bone and are connected to one another by gap junctions. Osteocytes sense the deformation of bone under load. They secrete sclerostin, a protein that suppresses the formation of osteoblasts, and the rate at which they secrete it changes with the mechanical strain that a bone experiences.\n\nThe formation of osteoclasts is controlled by cells of the osteoblast lineage. Osteoblasts and osteocytes display RANKL, a membrane protein that binds the receptor RANK on osteoclast precursors and is required for their differentiation and survival. The same cells secrete osteoprotegerin (OPG), a soluble protein that binds RANKL and keeps it from reaching RANK. Estrogen raises the production of OPG, lowers that of RANKL, and shortens the life span of osteoclasts.\n\nResorption and formation are also linked in time. As osteoclasts excavate a cavity over about three weeks, they release growth factors that were stored in the matrix; these factors attract osteoblast precursors, which refill the cavity over the following three to four months. Bone is lost whenever resorption outpaces formation. In the first years after menopause, the number of remodeling sites increases severalfold and each site is refilled incompletely. Biochemical markers of resorption (collagen fragments in the urine) and of formation (enzymes and peptides released into the blood by osteoblasts) both rise.\n\nTwo classes of drugs that reduce resorption are widely used. Bisphosphonates are stable analogs of pyrophosphate that bind avidly to hydroxyapatite and persist in the skeleton for years. Bisphosphonate that remains free in the circulation is cleared quickly by the kidney. These drugs cross cell membranes poorly, but once inside a cell they block an enzyme of lipid synthesis that the cell needs in order to survive. The second class is a monoclonal antibody against RANKL, given by injection every six months; its effect disappears within months of the last dose.',
    questions: [
      {
        question: 'Infants with one form of osteopetrosis have osteoclasts that cannot secrete acid; their bones are abnormally dense yet fracture easily. The disorder can be cured by transplanting hematopoietic stem cells from a healthy donor. The transplant is effective because the donor cells:',
        options: [
          'differentiate into osteoblasts that deposit a matrix of normal density.',
          'differentiate into osteocytes that secrete a normal amount of sclerostin.',
          'secrete osteoprotegerin, which inactivates the defective osteoclasts.',
          'supply precursors that fuse to form osteoclasts capable of resorbing bone.',
        ],
        correctAnswer: 3,
        explanation:
          'Osteoclasts belong to the monocyte–macrophage lineage and so descend from hematopoietic stem cells; donor stem cells therefore generate a new population of osteoclasts that carry working acid-secreting machinery and can resorb the excess bone. Osteoblasts and the osteocytes derived from them come from mesenchymal stem cells, not hematopoietic ones, so the transplant does not replace either. Osteoprotegerin is made by cells of the osteoblast lineage, and blocking osteoclast formation would worsen a disease caused by too little resorption.',
        optionExplanations: [
          'Osteoblasts descend from mesenchymal stem cells, not hematopoietic ones, so a hematopoietic transplant does not supply new osteoblasts. The defect in this disorder is in resorption, not in matrix deposition.',
          'Osteocytes differentiate from osteoblasts, which arise from mesenchymal stem cells. Hematopoietic stem cells do not give rise to osteocytes, and sclerostin production is not the problem in a disease of defective acid secretion.',
          'Osteoprotegerin is made by cells of the osteoblast lineage and blocks osteoclast formation. Inactivating osteoclasts would worsen a disease caused by too little resorption; what is needed is functional osteoclasts, not fewer of them.',
          'Osteoclasts form by fusion of monocyte–macrophage precursors, which descend from hematopoietic stem cells. Donor stem cells therefore generate a new population of osteoclasts with working acid-secreting machinery, able to resorb the excess bone.',
        ],
        skill: '3B osteoclast lineage',
      },
      {
        question: 'During several months of spaceflight, astronauts lose bone from the legs and the spine. Based on the passage, osteocytes in these bones most likely respond to the loss of mechanical loading by secreting:',
        options: [
          'less sclerostin, which decreases the number of active osteoblasts.',
          'more sclerostin, which decreases the number of active osteoblasts.',
          'more sclerostin, which increases the number of active osteoblasts.',
          'less sclerostin, which increases the number of active osteoblasts.',
        ],
        correctAnswer: 1,
        explanation:
          'Bone adapts to load: loaded bone is built up and unloaded bone is lost. Because sclerostin suppresses osteoblast formation, the signal that fits bone loss in weightlessness is a rise in sclerostin, which leaves fewer osteoblasts to refill remodeling sites. Less sclerostin with more osteoblasts is the response to increased loading and would add bone rather than remove it. The two remaining options contradict the stated action of sclerostin, which lowers rather than raises osteoblast numbers.',
        optionExplanations: [
          'Less sclerostin would increase osteoblast formation, since sclerostin suppresses osteoblasts; the stated consequence reverses the protein’s action. And more osteoblasts would add bone, the opposite of the loss seen in weightlessness.',
          'Sclerostin suppresses osteoblast formation, and unloaded bone is lost. A rise in sclerostin that leaves fewer osteoblasts to refill remodeling sites is the signal consistent with both the passage and the bone loss observed.',
          'This contradicts the stated action of sclerostin, which suppresses osteoblast formation. More sclerostin cannot increase osteoblast numbers.',
          'Less sclerostin and more osteoblasts is the response to increased mechanical loading, which builds bone. In weightlessness the loading is lost, so this response would add bone rather than account for its loss.',
        ],
        skill: '3B mechanical loading and osteocytes',
      },
      {
        question: 'Bisphosphonates kill osteoclasts while largely sparing osteoblasts and the cells of other tissues. Which explanation is most consistent with the passage?',
        options: [
          'Only osteoclasts contain the enzyme of lipid synthesis that the drugs inhibit.',
          'Only osteoclasts carry RANK, the receptor through which the drugs enter a cell.',
          'Only osteoclasts dissolve the mineral that holds the drug and then take up what is released.',
          'Only osteoclasts lie close to the blood vessels that deliver the drugs to bone.',
        ],
        correctAnswer: 2,
        explanation:
          'The drugs are concentrated on hydroxyapatite and cross membranes poorly, so a cell is exposed to a high dose only if it frees the drug from the mineral and internalizes it; the osteoclast does exactly this when it acidifies and resorbs the bone beneath it. The enzyme the drugs block is one that cells in general need for survival, so its distribution cannot explain the selectivity. RANK binds RANKL, and nothing suggests that it transports bisphosphonates. Drug in the circulation reaches many cell types and is cleared rapidly, so nearness to blood vessels would not single out osteoclasts.',
        optionExplanations: [
          'The passage says the enzyme the drugs block is one that cells in general need to survive, so its distribution cannot explain why only osteoclasts die. Selectivity must come from which cells are exposed to the drug.',
          'RANK is the receptor for RANKL on osteoclast precursors and controls their differentiation. Nothing in the passage suggests it transports bisphosphonates, and the drugs are described as entering cells poorly rather than through a receptor.',
          'Bisphosphonates bind avidly to hydroxyapatite and cross membranes poorly, so a cell gets a high dose only if it frees the drug from the mineral and internalizes it. The osteoclast does exactly this when it acidifies and resorbs the bone beneath it.',
          'Drug in the circulation is cleared quickly by the kidney and reaches many cell types in the meantime. Proximity to blood vessels would not single out osteoclasts; the drug’s concentration on bone mineral is what matters.',
        ],
        skill: '3B antiresorptive drug mechanism',
      },
      {
        question: 'After menopause, bone is lost more rapidly from the vertebral bodies than from the shafts of the long bones. This difference arises mainly because the vertebral bodies:',
        options: [
          'consist largely of spongy bone, which has a large surface area per unit volume.',
          'consist largely of compact bone, which has many osteons per unit volume.',
          'lack osteocytes and so cannot detect the loads that maintain bone mass.',
          'lack a blood supply and so receive few of the precursors of osteoblasts.',
        ],
        correctAnswer: 0,
        explanation:
          'Remodeling occurs on bone surfaces, and spongy (trabecular) bone, the main tissue of a vertebral body, is a lattice of thin plates with far more surface per unit volume than the dense compact bone of a long-bone shaft; when remodeling accelerates, bone with more surface is turned over and lost faster. Vertebral bodies are not mainly compact bone; compact bone predominates in the shafts. All bone contains osteocytes. Vertebral bodies are well vascularized and filled with marrow.',
        optionExplanations: [
          'Remodeling occurs on bone surfaces, and spongy bone, the main tissue of vertebral bodies, is a lattice of thin plates with far more surface per unit volume than compact bone. When remodeling accelerates, bone with more surface turns over and is lost faster.',
          'Vertebral bodies are not mainly compact bone; compact bone predominates in the shafts of long bones. Compact bone also has less surface per unit volume, so it would be lost more slowly, not faster.',
          'All bone contains osteocytes, including the vertebral bodies. The passage describes osteocytes as buried throughout the matrix, so a lack of osteocytes cannot explain the regional difference.',
          'Vertebral bodies are well vascularized and filled with marrow, so they have an abundant blood supply and ready access to precursors. The difference lies in surface area, not in vascularity.',
        ],
        skill: '3B bone structure: spongy vs compact',
      },
    ],
  },

  // ────────────────────────────────────────────────────────────────────────
  // 3. GENETICS (exp, table) — genomic imprinting on chromosome 15:
  //    Prader–Willi vs Angelman, deletion vs uniparental disomy vs UBE3A
  //    mutation, bisulfite methylation test, parent-of-origin pedigree
  //    Skills: Q1 S4 · Q2 S2 · Q3 S2 · Q4 S3 · Q5 S2
  // ────────────────────────────────────────────────────────────────────────
  {
    id: 'fl7-bb-a-03',
    section: 'bio-biochem',
    discipline: 'genetics',
    title: 'Parent-of-Origin Effects in Two Disorders of Chromosome 15',
    passageText:
      'For most autosomal genes, the copy inherited from the mother and the copy inherited from the father are expressed equally. A small number of genes are imprinted: one copy is silenced according to the sex of the parent who transmitted it. Imprints are laid down as methyl groups on cytosines in regulatory DNA. The marks are reproduced at each cell division and so persist in all somatic cells, but in the germ line they are erased and then re-established in the pattern appropriate to the sex of the individual before gametes are formed.\n\nA cluster of imprinted genes lies on the long arm of chromosome 15. Several genes in the cluster are transcribed only from the paternal chromosome. Another, UBE3A, which encodes an enzyme that tags proteins for degradation, is transcribed in neurons only from the maternal chromosome. Two clinically distinct disorders involve this region. Prader–Willi syndrome (PWS), marked by weak muscle tone in infancy and later by an insatiable appetite, results when a child has no active copy of the paternally expressed genes. Angelman syndrome (AS), marked by severe intellectual disability, absent speech, and seizures, results when neurons contain no functional UBE3A product.\n\nEither disorder can arise in more than one way. The region may be deleted from one chromosome 15. Alternatively, a child may receive both copies of chromosome 15 from one parent and none from the other, a condition called uniparental disomy.\n\nA diagnostic laboratory studied five patients and an unaffected control, applying three tests to DNA from blood (Table 1). First, the number of copies of the region was determined with a fluorescent probe that hybridizes to it. Second, the parental origin of each copy was established by comparing polymorphic DNA markers within the region in the patient and in both parents. Third, methylation was examined at one promoter in the cluster, at which the maternal copy is normally methylated and the paternal copy is not. DNA was treated with bisulfite, which converts unmethylated cytosine to uracil but leaves 5-methylcytosine unchanged, and was then amplified by PCR with two primer pairs. One pair anneals only to the sequence that results when the cytosines of the promoter were methylated (M product), and the other anneals only to the sequence that results when they were not (U product).\n\nThe family of patient 5 was studied further. Sequencing of UBE3A in patient 5 revealed a single-nucleotide substitution that creates a premature stop codon. The same substitution was found in her mother and in her maternal grandfather, both of whom are healthy. It was not found in her father.',
    figure:
      '**Table 1. Findings in five patients and an unaffected control (M = PCR product from methylated template; U = PCR product from unmethylated template)**\n\n| Subject | Diagnosis | Copies of the region | Parental origin of the copies | M product | U product |\n|---|---|---|---|---|---|\n| Control | Unaffected | 2 | One maternal, one paternal | + | + |\n| Patient 1 | PWS | 1 | Maternal | + | − |\n| Patient 2 | PWS | 2 | Both maternal | + | − |\n| Patient 3 | AS | 1 | Paternal | − | + |\n| Patient 4 | AS | 2 | Both paternal | − | + |\n| Patient 5 | AS | 2 | One maternal, one paternal | + | + |',
    questions: [
      {
        question: 'Table 1 indicates that the chromosome 15 carrying the deletion in patient 1 and the one carrying the deletion in patient 3 were inherited, respectively, from the:',
        options: [
          'father and the mother.',
          'mother and the father.',
          'father in both patients.',
          'mother in both patients.',
        ],
        correctAnswer: 0,
        explanation:
          'Patient 1 has a single copy of the region, and it is maternal; the missing copy is therefore the paternal one, which fits PWS, a lack of the paternally expressed genes. Patient 3 has a single copy that is paternal, so the deletion lies on the chromosome from the mother, which removes the only UBE3A copy that neurons use and produces AS. The reversed assignment mistakes the copy that remains for the copy that was lost. A deletion from the same parent in both patients could not produce two different disorders with opposite marker and methylation findings.',
        optionExplanations: [
          'Patient 1 has one copy, maternal, so the paternal chromosome carries the deletion; this fits PWS, a lack of paternally expressed genes. Patient 3 has one copy, paternal, so the maternal chromosome carries the deletion, removing the only UBE3A neurons use and causing AS.',
          'This mistakes the remaining copy for the lost one. Patient 1’s single copy is maternal, meaning the paternal chromosome was deleted; patient 3’s single copy is paternal, meaning the maternal chromosome was deleted.',
          'A paternal deletion in both patients would produce PWS in both, since both would lack paternally expressed genes. Patient 3 has AS with a paternal remaining copy and the opposite methylation pattern, so her deletion is maternal.',
          'A maternal deletion in both patients would produce AS in both, since both would lack the maternal UBE3A. Patient 1 has PWS with a maternal remaining copy and M-only methylation, so his deletion is paternal.',
        ],
        skill: '1C genomic imprinting (data interpretation)',
      },
      {
        question: 'The mother of patient 5 carries the same UBE3A substitution as her daughter but is healthy. The best explanation is that the mother’s mutant allele:',
        options: [
          'is recessive, so that one normal allele protects anyone who carries it.',
          'came from her father and is the copy that her neurons do not transcribe.',
          'lies on the X chromosome that was inactivated in most of her neurons.',
          'came from her mother and is the copy that her neurons do not transcribe.',
        ],
        correctAnswer: 1,
        explanation:
          'The substitution was also found in the maternal grandfather, so the mother received it from her father; the paternal copy of UBE3A is silent in neurons whether or not it is mutated, and her neurons rely on the intact copy from her own mother. Simple recessiveness cannot be the explanation, because patient 5 is also heterozygous and is affected. UBE3A is on chromosome 15, an autosome, so X inactivation is irrelevant. A copy inherited from her mother would be the one her neurons transcribe, and a stop codon in it would have caused AS in the mother herself.',
        optionExplanations: [
          'Simple recessiveness cannot explain the pattern, because patient 5 is also heterozygous for the same substitution and is affected. The difference between mother and daughter is parent of origin, not allele count.',
          'The maternal grandfather carries the substitution, so the mother received it from her father. The paternal copy of UBE3A is silent in neurons whether mutated or not, so her neurons rely on the intact copy from her own mother and she is healthy.',
          'UBE3A is on chromosome 15, an autosome, so X inactivation plays no role. The passage places the entire imprinted cluster on the long arm of chromosome 15.',
          'A copy inherited from her mother would be the maternal copy that neurons transcribe. A stop codon in that copy would have left her neurons with no functional UBE3A and caused AS in the mother herself, yet she is healthy.',
        ],
        skill: '1C parent-of-origin effects',
      },
      {
        question: 'The parents of patient 5 are expecting another child. What is the probability that this child will have AS?',
        options: ['0', '1/4', '1/2', '1'],
        correctAnswer: 2,
        explanation:
          'Imprints are erased and reset in the germ line according to the sex of the parent, so every chromosome 15 that the mother transmits carries the maternal pattern, including the chromosome she received from her father. She passes the mutant allele to half of her children, and in each of them it is the only UBE3A copy that neurons would express, so the risk is 1/2. A risk of 0 assumes that the allele keeps the paternal imprint it had in the mother. A risk of 1/4 applies to an autosomal recessive disorder with two carrier parents, but the father is not a carrier and one mutant maternal copy is sufficient. A risk of 1 ignores the equal chance that the child inherits her normal chromosome.',
        optionExplanations: [
          'A risk of 0 assumes the allele keeps the paternal imprint it had in the mother. But imprints are erased and reset in the germ line, so every chromosome 15 the mother transmits carries the maternal pattern and is the copy neurons express.',
          'A risk of 1/4 applies to an autosomal recessive disorder with two carrier parents. Here the father does not carry the substitution, and one mutant maternal copy is sufficient to cause AS, so recessive reasoning does not apply.',
          'Imprints are reset in the germ line according to the parent’s sex, so the mutant allele, now transmitted by the mother, carries the maternal pattern and is the copy neurons express. She passes it to half her children, each of whom would have AS, so the risk is 1/2.',
          'A risk of 1 ignores the equal chance that the child inherits the mother’s normal chromosome 15. She is heterozygous, so only half her gametes carry the mutant allele.',
        ],
        skill: '1C imprint resetting and recurrence risk',
      },
      {
        question: 'Why was treatment with bisulfite necessary before the PCR step of the methylation test?',
        options: [
          'It cuts the DNA into fragments, so that the two parental copies can be separated by size.',
          'It strips the methyl groups, so that the polymerase is able to copy the maternal promoter.',
          'It destroys the unmethylated copy, so that only the maternal promoter can be amplified.',
          'It turns a difference in methylation into a difference in sequence that primers can detect.',
        ],
        correctAnswer: 3,
        explanation:
          'Primers anneal according to base sequence, and cytosine pairs with guanine whether or not it carries a methyl group, so untreated maternal and paternal promoters would be amplified identically. Bisulfite changes unmethylated cytosines to uracil while sparing methylated ones, which gives the two copies different sequences that separate primer pairs can recognize. Bisulfite is not described as cutting DNA, and the test does not separate products by parental size. DNA polymerase copies methylated templates, so removing methyl groups is not required, and doing so would erase the very difference being measured. The unmethylated copy is not destroyed; it is the template for the U product.',
        optionExplanations: [
          'Bisulfite is not described as cutting DNA, and the test does not separate the parental copies by size. The two copies are distinguished by primer specificity after amplification, not by fragment length.',
          'DNA polymerase copies methylated templates without difficulty, so removing methyl groups is not required for PCR. Stripping them would also erase the very difference the test is designed to detect.',
          'The unmethylated copy is not destroyed; it is the template for the U product. Both copies are amplified in the control, which shows that bisulfite leaves the unmethylated paternal promoter intact as a template.',
          'Primers anneal by base sequence, and cytosine pairs with guanine whether methylated or not, so untreated maternal and paternal promoters would amplify identically. Bisulfite converts unmethylated C to U, giving the two copies different sequences that separate primer pairs recognize.',
        ],
        skill: '1C research design: bisulfite methylation analysis',
      },
      {
        question: 'Errors of chromosome segregation in oocytes become more frequent as women age. The form of PWS found in patient 2, unlike the form found in patient 1, is more common among the children of older mothers. The condition of patient 2 most likely originated with:',
        options: [
          'a sperm that lacked the region, formed by a deletion that arose during spermatogenesis.',
          'an egg carrying two copies of chromosome 15, followed by loss of the paternal copy from the embryo.',
          'a sperm carrying two copies of chromosome 15, followed by loss of the maternal copy from the embryo.',
          'an egg in which the paternal pattern of methylation had been imposed on chromosome 15.',
        ],
        correctAnswer: 1,
        explanation:
          'Patient 2 has two copies of the region, both maternal. Nondisjunction in the oocyte, the error that grows more frequent with maternal age, yields an egg with two chromosomes 15; fertilization gives a trisomic embryo, and loss of the single paternal chromosome leaves two maternal copies and no active paternal genes. A deletion arising in the father is the mechanism in patient 1, who has one copy, and it is unrelated to the mother’s age. A sperm with two copies followed by loss of the maternal chromosome would leave two paternal copies, the finding in patient 4. An egg bearing a paternal methylation pattern would supply active paternal-type genes, which would not cause PWS, and would not make both copies maternal.',
        optionExplanations: [
          'A deletion arising during spermatogenesis is the mechanism in patient 1, who has a single copy of the region. Patient 2 has two copies, both maternal, and a paternal deletion is unrelated to the mother’s age.',
          'Nondisjunction in the oocyte, the error that increases with maternal age, yields an egg with two chromosomes 15. After fertilization the trisomic embryo loses the single paternal chromosome, leaving two maternal copies and no active paternal genes, which is patient 2’s finding.',
          'A sperm with two copies followed by loss of the maternal chromosome would leave two paternal copies of chromosome 15. That is the finding in patient 4, who has AS, not patient 2, who has PWS with two maternal copies.',
          'An egg bearing a paternal methylation pattern would supply active paternal-type genes, which would not cause PWS. It would also not account for the marker data showing both copies came from the mother.',
        ],
        skill: '1C uniparental disomy',
      },
    ],
  },

  // ────────────────────────────────────────────────────────────────────────
  // 4. CELL BIOLOGY (info) — apoptosis vs necrosis: caspases, intrinsic
  //    (Bax/Bak, cytochrome c, Apaf-1, caspase-9) and extrinsic (Fas,
  //    caspase-8) pathways, phosphatidylserine exposure, development, cancer
  //    Skills: Q1 S2 · Q2 S2 · Q3 S1 · Q4 S2
  // ────────────────────────────────────────────────────────────────────────
  {
    id: 'fl7-bb-a-04',
    section: 'bio-biochem',
    discipline: 'cell biology',
    title: 'Two Ways for a Cell to Die',
    passageText:
      'Cells die in two broadly different ways. Necrosis follows overwhelming injury, such as loss of the blood supply or exposure to a toxin. ATP production fails, ion pumps stop, the cell swells, and its plasma membrane ruptures, spilling the cytoplasm into the surrounding tissue, where it provokes inflammation. Apoptosis, in contrast, is an orderly program carried out by the cell itself. The cell shrinks, its chromatin condenses, its DNA is cut into fragments, and the cell breaks up into membrane-enclosed pieces. The plasma membrane stays intact throughout. Early in the process, phosphatidylserine, a phospholipid normally confined to the cytosolic leaflet of the plasma membrane, appears on the outer leaflet, where receptors on macrophages recognize it. The pieces are engulfed and digested, and no inflammation follows.\n\nApoptosis is executed by caspases, proteases that have a cysteine in the active site and cleave their substrates after aspartate residues. Caspases are synthesized as inactive precursors. Initiator caspases become active when adaptor proteins bring several precursor molecules together; active initiators then cleave, and thereby activate, the executioner caspases, chiefly caspase-3. Executioners cut several hundred proteins, among them the nuclear lamins, components of the cytoskeleton, and the inhibitor of a DNase. They also inactivate the ATP-dependent translocase that returns phosphatidylserine to the inner leaflet.\n\nTwo pathways lead to the initiators. The intrinsic pathway responds to signals from within the cell, including DNA damage, which acts through p53, and the withdrawal of growth factors. These signals raise the amount or activity of BH3-only proteins, which activate Bax and Bak. Bax and Bak assemble into pores in the outer mitochondrial membrane, and cytochrome c escapes from the intermembrane space into the cytosol. There it binds the adaptor Apaf-1, which, in a step that requires ATP, assembles into a wheel-shaped complex that recruits and activates caspase-9. Anti-apoptotic proteins such as Bcl-2 hold Bax, Bak, and BH3-only proteins in check by binding them in a surface groove. Whether a cell lives or dies depends on the balance between the two groups of proteins.\n\nThe extrinsic pathway begins at the cell surface. Death receptors such as Fas are clustered by their ligands; Fas ligand is displayed, for example, by cytotoxic T cells. The clustered receptors recruit adaptor proteins that bind and activate caspase-8. In lymphocytes, caspase-8 activates enough caspase-3 to kill the cell directly. In hepatocytes and many other cells, death also requires caspase-8 to cleave a BH3-only protein called Bid, which then engages the mitochondrial pathway.\n\nApoptosis removes cells that are superfluous or dangerous. During development of the nervous system, neurons are produced in excess, and those that fail to obtain enough growth factor from their targets die. Lymphocytes that react strongly with self antigens are eliminated in the same way. Failure of apoptosis contributes to cancer. In one common lymphoma, a chromosomal translocation places the BCL2 gene beside regulatory sequences that are highly active in B cells. Drugs called BH3 mimetics occupy the groove of Bcl-2 and displace the proteins bound there.',
    questions: [
      {
        question: 'Lymphocytes from mice that lack caspase-9 are exposed either to ionizing radiation, which damages DNA, or to Fas ligand. These mutant lymphocytes would be expected to undergo apoptosis:',
        options: [
          'after neither treatment.',
          'after Fas ligand but not after radiation.',
          'after radiation but not after Fas ligand.',
          'after both treatments.',
        ],
        correctAnswer: 1,
        explanation:
          'DNA damage signals through the intrinsic pathway, whose initiator is caspase-9; without it, cytochrome c release cannot lead to executioner activation, so irradiated mutant lymphocytes survive. Fas ligand acts through caspase-8, which in lymphocytes activates caspase-3 directly without help from the mitochondrial pathway, so that response is preserved. Death after neither treatment would require caspase-9 to lie downstream of Fas in these cells, which it does not. Death after radiation but not Fas ligand reverses the two pathways. Death after both treatments would mean that caspase-9 is dispensable for the response to DNA damage.',
        optionExplanations: [
          'Death after neither treatment would require caspase-9 to lie downstream of Fas in lymphocytes. The passage says caspase-8 activates enough caspase-3 to kill lymphocytes directly, so the Fas response does not need caspase-9.',
          'DNA damage signals through the intrinsic pathway, whose initiator is caspase-9; without it, cytochrome c release cannot activate executioners and irradiated cells survive. Fas ligand acts through caspase-8, which in lymphocytes activates caspase-3 directly, so that response is preserved.',
          'This reverses the two pathways. Radiation-induced DNA damage requires caspase-9, which is missing, while the Fas pathway in lymphocytes bypasses caspase-9 entirely through caspase-8 acting on caspase-3.',
          'Death after both treatments would mean caspase-9 is dispensable for the response to DNA damage. But the passage makes caspase-9 the initiator activated by cytochrome c and Apaf-1, so radiation cannot kill cells that lack it.',
        ],
        skill: '2C intrinsic vs extrinsic apoptosis',
      },
      {
        question: 'Annexin V is a fluorescently labeled protein that binds phosphatidylserine, and propidium iodide (PI) is a dye that binds DNA; neither can cross an intact plasma membrane. When both are added to a culture, a cell in the early stage of apoptosis and a necrotic cell would be labeled, respectively, by:',
        options: [
          'both reagents, and annexin V only.',
          'PI only, and annexin V only.',
          'PI only, and both reagents.',
          'annexin V only, and both reagents.',
        ],
        correctAnswer: 3,
        explanation:
          'An early apoptotic cell has moved phosphatidylserine to its outer leaflet, where annexin V can reach it, but its membrane is still intact and keeps PI away from the DNA. A necrotic cell has a ruptured membrane, so PI enters and stains the DNA, and annexin V enters and binds phosphatidylserine on the inner leaflet; it is labeled by both. Labeling of an early apoptotic cell by PI, alone or with annexin V, would require a breach of the membrane that does not occur at that stage. A necrotic cell cannot exclude PI, so it would not be labeled by annexin V alone.',
        optionExplanations: [
          'Labeling of an early apoptotic cell by PI requires PI to reach the DNA, which needs a breached membrane. The passage says the plasma membrane stays intact throughout apoptosis, so PI is excluded. The necrotic assignment is also wrong; it would take up both reagents.',
          'PI cannot enter an early apoptotic cell because its membrane is intact. And a necrotic cell with a ruptured membrane admits PI as well as annexin V, so it would not be labeled by annexin V alone.',
          'An early apoptotic cell excludes PI because its membrane is intact, so PI-only is impossible at that stage. The necrotic assignment is correct, but the apoptotic one is reversed: it should be annexin V only.',
          'An early apoptotic cell has phosphatidylserine on its outer leaflet, where annexin V binds, but an intact membrane that excludes PI. A necrotic cell’s ruptured membrane admits PI to stain DNA and lets annexin V reach inner-leaflet phosphatidylserine, so both label it.',
        ],
        skill: '2C phosphatidylserine exposure and membrane integrity',
      },
      {
        question: 'When DNA from apoptotic cells is separated by gel electrophoresis, it forms a ladder of bands at multiples of about 180 base pairs, whereas DNA from necrotic cells forms a continuous smear. The ladder indicates that the DNase activated during apoptosis cuts:',
        options: [
          'the linker DNA between nucleosomes, sparing DNA wound around histones.',
          'the DNA wound around histones, sparing the linker DNA between nucleosomes.',
          'the DNA at a recognition sequence found about once in every 180 base pairs.',
          'the repeats at the ends of chromosomes, removing 180 base pairs with each cut.',
        ],
        correctAnswer: 0,
        explanation:
          'In chromatin, about 150 base pairs of DNA are wrapped around each histone octamer, and successive nucleosomes are joined by short stretches of exposed linker DNA, giving a repeat of roughly 180–200 base pairs. A nuclease that can reach only the linkers releases fragments containing one, two, three, or more nucleosomes, which run as a ladder. Cutting the wrapped DNA while sparing the linkers would not give multiples of the nucleosome repeat. A specific recognition sequence would not recur at regular intervals throughout the genome. Trimming telomeric repeats would shorten chromosome ends but would not convert the bulk of the genome into regularly sized fragments.',
        optionExplanations: [
          'About 150 bp of DNA wraps each histone octamer, and successive nucleosomes are joined by short exposed linkers, giving a repeat near 180–200 bp. A nuclease that cuts only the accessible linkers releases fragments of one, two, three or more nucleosomes, which run as a ladder.',
          'Cutting the DNA wrapped around histones while sparing the linkers would not generate fragments at multiples of the nucleosome repeat. The wrapped DNA is protected by the histone octamer; the exposed linker is what the nuclease can reach.',
          'A specific recognition sequence does not recur at regular intervals throughout the genome. The regular 180-bp spacing reflects the physical periodicity of nucleosomes, not a sequence motif.',
          'Trimming telomeric repeats would shorten chromosome ends but leave the bulk of the genome intact. It could not convert the whole genome into regularly sized fragments that form a ladder.',
        ],
        skill: '2C apoptotic DNA fragmentation and nucleosomes',
      },
      {
        question: 'A BH3 mimetic would be LEAST likely to trigger apoptosis in tumor cells that:',
        options: [
          'carry the translocation that raises the production of Bcl-2.',
          'have lost p53 and no longer respond to DNA damage.',
          'have lost both Bax and Bak through mutation.',
          'hold large amounts of BH3-only proteins bound to Bcl-2.',
        ],
        correctAnswer: 2,
        explanation:
          'A BH3 mimetic works by freeing the pro-apoptotic proteins that Bcl-2 has sequestered, and those proteins kill only by way of the pores that Bax and Bak form in the outer mitochondrial membrane; a cell with neither protein cannot release cytochrome c, so the drug has nothing to act through. Cells that overproduce Bcl-2 are the intended target, since their survival depends on it. Loss of p53 blocks the signal from DNA damage upstream of Bcl-2, but the drug acts below that point and does not need p53. Cells with much BH3-only protein held on Bcl-2 are especially sensitive, because displacement releases a large death signal.',
        optionExplanations: [
          'Cells that overproduce Bcl-2 are the intended target of BH3 mimetics. Their survival depends on Bcl-2 sequestering pro-apoptotic proteins, so displacing those proteins releases a strong death signal.',
          'Loss of p53 blocks the DNA-damage signal upstream of Bcl-2, but a BH3 mimetic acts at Bcl-2 itself and does not need p53. The drug bypasses the lost upstream step.',
          'A BH3 mimetic frees pro-apoptotic proteins that Bcl-2 has sequestered, but those proteins kill only through the pores that Bax and Bak form in the outer mitochondrial membrane. Without Bax and Bak, cytochrome c cannot be released and the drug has nothing to act through.',
          'Cells holding large amounts of BH3-only proteins on Bcl-2 are especially sensitive to a BH3 mimetic, because displacement releases a large death signal all at once.',
        ],
        skill: '2C Bcl-2 family and cancer therapy',
      },
    ],
  },

  // ────────────────────────────────────────────────────────────────────────
  // 5. PHYSIOLOGY (exp, table) — diuretics and the nephron: NKCC2 (loop),
  //    NCC (thiazide), ENaC (K⁺-sparing); urine volume and Na⁺/K⁺/Ca²⁺
  //    excretion in a crossover study; site of action from the pattern
  //    Skills: Q1 S2 · Q2 S2 · Q3 S4 · Q4 S3
  // ────────────────────────────────────────────────────────────────────────
  {
    id: 'fl7-bb-a-05',
    section: 'bio-biochem',
    discipline: 'physiology',
    title: 'Urinary Electrolyte Patterns After Three Diuretics',
    passageText:
      'The kidneys of a healthy adult filter about 180 L of plasma per day and with it roughly 25,000 mmol of Na⁺, yet less than 1% of the filtered Na⁺ is normally excreted. Reabsorption is divided among the segments of the nephron. The proximal tubule recovers about 65% of the filtered Na⁺, together with water. The thick ascending limb of the loop of Henle recovers about 25%. Its apical membrane contains NKCC2, a cotransporter that carries one Na⁺, one K⁺, and two Cl⁻ into the cell. Because most of this K⁺ leaks back into the lumen through channels, the lumen becomes electrically positive relative to the interstitial fluid, and the voltage drives Ca²⁺ and Mg²⁺ between the cells toward the blood. This segment is impermeable to water.\n\nThe distal convoluted tubule recovers about 5% of the filtered Na⁺ through NCC, an apical cotransporter of Na⁺ and Cl⁻. Its cells also reabsorb Ca²⁺, which enters through apical channels and leaves across the basolateral membrane on an exchanger powered by the entry of Na⁺ from the interstitial fluid down its concentration gradient. Finally, the principal cells of the collecting duct recover 2–3% through ENaC, an apical Na⁺ channel. Na⁺ entering through ENaC is not accompanied by an anion, so the lumen becomes electrically negative, and this voltage draws K⁺ out of the principal cells through apical K⁺ channels. Most of the K⁺ that appears in the urine is secreted by these cells. Aldosterone increases the number of open ENaC channels and of basolateral Na⁺/K⁺ pumps.\n\nDiuretics inhibit the reabsorption of Na⁺. Because water follows reabsorbed solute in most of the nephron, Na⁺ that stays in the tubule holds water there, and urine flow rises. Each class of diuretic acts on one apical transport protein. To compare three such drugs, each of which inhibits one of NKCC2, NCC, and ENaC, investigators enrolled 12 healthy adults. For three days before each study day, the volunteers ate a prescribed diet that supplied fixed amounts of Na⁺, K⁺, and Ca²⁺. On each of four study days, separated by at least one week, a volunteer received by mouth, in random order, a placebo or a standard dose of drug X, drug Y, or drug Z. All urine was collected for the next 6 hours, during which the volunteers drank water in a volume equal to the urine they had passed (Table 1). Blood drawn at the end of each collection showed no measurable change in the plasma concentration of any of the three ions. About 6,000 mmol of Na⁺ was filtered during each 6-hour collection, and the glomerular filtration rate did not differ measurably among the study days.',
    figure:
      '**Table 1. Urine volume and electrolyte excretion during the 6 hours after each treatment (means of 12 volunteers)**\n\n| Treatment | Urine volume (mL) | Na⁺ excreted (mmol) | K⁺ excreted (mmol) | Ca²⁺ excreted (mmol) |\n|---|---|---|---|---|\n| Placebo | 400 | 40 | 15 | 1.2 |\n| Drug X | 1,900 | 220 | 38 | 3.6 |\n| Drug Y | 900 | 110 | 30 | 0.6 |\n| Drug Z | 600 | 65 | 6 | 1.1 |',
    questions: [
      {
        question: 'Based on the passage and Table 1, drugs X, Y, and Z inhibit, respectively:',
        options: [
          'NKCC2, NCC, and ENaC.',
          'NKCC2, ENaC, and NCC.',
          'NCC, NKCC2, and ENaC.',
          'ENaC, NCC, and NKCC2.',
        ],
        correctAnswer: 0,
        explanation:
          'Drug X caused the largest loss of Na⁺ and tripled Ca²⁺ excretion, as expected when NKCC2 is blocked in the segment that reabsorbs a quarter of the filtered Na⁺ and whose lumen-positive voltage drives Ca²⁺ reabsorption. Drug Y caused a moderate loss of Na⁺ and halved Ca²⁺ excretion: blocking NCC lowers Na⁺ inside distal tubule cells, which steepens the gradient that powers basolateral Ca²⁺ exit. Drug Z caused the smallest loss of Na⁺ and reduced K⁺ excretion, as expected when ENaC is blocked and the lumen-negative voltage that drives K⁺ secretion is lost. Each of the other orders assigns at least one drug to a target whose blockade would change K⁺ or Ca²⁺ excretion in the direction opposite to that observed.',
        optionExplanations: [
          'Drug X caused the largest Na⁺ loss and tripled Ca²⁺ excretion, as expected for blocking NKCC2, whose lumen-positive voltage drives Ca²⁺ reabsorption. Drug Y halved Ca²⁺ excretion, as expected for NCC blockade. Drug Z lowered K⁺ excretion, as expected for ENaC blockade.',
          'This assigns drug Y to ENaC, but drug Y raised K⁺ excretion (30 vs 15), whereas ENaC blockade lowers it. It also assigns drug Z to NCC, but drug Z lowered K⁺ excretion, which NCC blockade would not do.',
          'This assigns drug X to NCC, but NCC blockade lowers Ca²⁺ excretion, whereas drug X tripled it. It also assigns drug Y to NKCC2, but NKCC2 blockade raises Ca²⁺ excretion, whereas drug Y halved it.',
          'This assigns drug X to ENaC, but ENaC blockade reduces K⁺ excretion and produces the smallest natriuresis, whereas drug X produced the largest Na⁺ loss and raised K⁺ excretion. It also assigns drug Z to NKCC2, which would raise Ca²⁺ excretion, not leave it unchanged.',
        ],
        skill: '3B diuretic sites of action',
      },
      {
        question: 'Two of the three drugs act upstream of the collecting duct, yet both of them increased K⁺ excretion. The most likely explanation is that these two drugs:',
        options: [
          'stop the reabsorption of K⁺ by NCC, so that filtered K⁺ remains in the tubule.',
          'lower plasma aldosterone, which closes the K⁺ channels of principal cells.',
          'send more Na⁺ to the collecting duct, where Na⁺ entry through ENaC makes the lumen more negative.',
          'raise the filtered load of K⁺ by increasing the glomerular filtration rate.',
        ],
        correctAnswer: 2,
        explanation:
          'Na⁺ that escapes reabsorption in the loop or the distal tubule arrives at the collecting duct, where principal cells take up more of it through ENaC; the larger lumen-negative voltage pulls more K⁺ into the urine. NCC carries Na⁺ and Cl⁻ only, and urinary K⁺ comes mostly from secretion rather than from filtered K⁺ left behind. Diuretic-induced loss of Na⁺ and water tends to raise aldosterone, not lower it, and closing K⁺ channels would reduce K⁺ excretion. The glomerular filtration rate did not differ among study days.',
        optionExplanations: [
          'NCC carries Na⁺ and Cl⁻ only, not K⁺. And urinary K⁺ comes mostly from secretion by principal cells of the collecting duct, not from filtered K⁺ left unabsorbed.',
          'Diuretic-induced loss of Na⁺ and water tends to raise aldosterone, not lower it. And closing K⁺ channels would reduce K⁺ excretion, which is the opposite of what was observed.',
          'Na⁺ that escapes reabsorption upstream arrives at the collecting duct, where principal cells take up more through ENaC. Since Na⁺ enters without an anion, the lumen becomes more negative, and the larger voltage pulls more K⁺ into the urine.',
          'The passage states that the glomerular filtration rate did not differ measurably among study days, so an increased filtered load cannot explain the rise in K⁺ excretion.',
        ],
        skill: '3B potassium secretion in the collecting duct',
      },
      {
        question: 'On the placebo day, about 0.7% of the filtered Na⁺ was excreted. According to Table 1, drug X raised this fraction to approximately:',
        options: ['2%', '4%', '11%', '22%'],
        correctAnswer: 1,
        explanation:
          'After drug X, 220 mmol of Na⁺ was excreted out of about 6,000 mmol filtered: 220/6,000 ≈ 0.037, or roughly 4%. A value near 2% corresponds to the 110 mmol excreted after drug Y. A value of 11% or 22% would require the excretion of about 660 or 1,320 mmol in 6 hours, far more than was observed; the fraction is much smaller than the share of Na⁺ handled by the blocked segment because downstream segments reabsorb part of the extra load.',
        optionExplanations: [
          'About 2% corresponds to the 110 mmol excreted after drug Y (110/6,000 ≈ 1.8%). Drug X excreted twice as much Na⁺, so its fraction is about double this value.',
          'After drug X, 220 mmol of Na⁺ was excreted out of about 6,000 mmol filtered: 220/6,000 ≈ 0.037, or roughly 4%. Downstream segments reabsorb much of the extra load, so the fraction is far less than the 25% handled by the blocked segment.',
          'An excreted fraction of 11% would require about 660 mmol of Na⁺ in 6 hours, three times the 220 mmol in Table 1. The fraction stays small because the distal tubule and collecting duct reabsorb much of the Na⁺ that the blocked loop lets through.',
          'An excreted fraction of 22% would require about 1,320 mmol in 6 hours, six times what was observed. It approaches the 25% of filtered Na⁺ the thick ascending limb normally reabsorbs, but downstream segments recover most of what the loop fails to absorb.',
        ],
        skill: '3B fractional sodium excretion (calculation)',
      },
      {
        question: 'The volunteers ate a prescribed diet for three days before each study day. The main purpose of this step was to ensure that:',
        options: [
          'each drug was absorbed from the intestine at the same rate on every study day.',
          'the volunteers were unable to tell which of the four treatments they had received.',
          'the glomerular filtration rate rose by the same amount after each of the drugs.',
          'baseline electrolyte excretion, which tracks intake, was alike before every treatment.',
        ],
        correctAnswer: 3,
        explanation:
          'In a steady state the kidneys excrete what is ingested, so a volunteer who ate more salt, potassium, or calcium before one session would excrete more of it that day whatever the treatment; fixing intake makes the four sessions start from the same baseline, so that differences in Table 1 can be attributed to the drugs. A fixed diet over the preceding days does not standardize the rate at which a tablet is absorbed. Concealing treatment identity is achieved by using a placebo of matching appearance, not by diet. The filtration rate was not changed by the drugs, and diet was not a means of altering it.',
        optionExplanations: [
          'A fixed diet over the preceding days does not standardize how fast a tablet is absorbed from the intestine on the study day. Absorption rate depends on the drug formulation and gut conditions at the time, not on prior electrolyte intake.',
          'Concealing treatment identity is achieved by giving a placebo of matching appearance, not by controlling diet. The diet was the same before all four sessions, so it could not help or hinder blinding.',
          'The passage says the glomerular filtration rate did not differ among study days, so none of the drugs raised it. Diet was not a means of altering filtration rate.',
          'In a steady state the kidneys excrete what is ingested, so a volunteer who ate more salt, potassium, or calcium before one session would excrete more that day regardless of treatment. Fixing intake makes all four sessions start from the same baseline.',
        ],
        skill: '3B research design: dietary standardization',
      },
    ],
  },
]

// Discrete skills: d05 S2 · d01–d04, d06–d08 S1
export const FL7_BIO_BIOCHEM_A_DISCRETES: MCATDiscreteQuestion[] = [
  {
    id: 'fl7-bb-a-d01',
    section: 'bio-biochem',
    discipline: 'physiology',
    question: 'When a person stands up quickly, blood pools in the veins of the legs and arterial pressure falls briefly. Which reflex adjustment restores arterial pressure within seconds?',
    options: [
      'Baroreceptor firing rises, and sympathetic outflow to the heart also rises.',
      'Baroreceptor firing rises, and parasympathetic outflow to the heart rises.',
      'Baroreceptor firing falls, and sympathetic outflow to the heart rises.',
      'Baroreceptor firing falls, and parasympathetic outflow to the heart rises.',
    ],
    correctAnswer: 2,
    explanation:
      'Arterial baroreceptors are stretch receptors, so the fall in pressure on standing reduces their firing; the brainstem responds by increasing sympathetic outflow and withdrawing vagal tone, which raises heart rate, contractility, and vascular resistance and brings pressure back up. Baroreceptor firing rises only when arterial pressure rises, which excludes the two options that begin that way. Greater parasympathetic outflow would slow the heart and lower pressure further, the opposite of what is needed.',
    optionExplanations: [
      'Baroreceptors are stretch receptors, and arterial pressure fell on standing, so their firing falls rather than rises. The sympathetic half of this option is right, but the afferent half reverses the signal.',
      'Baroreceptor firing falls when pressure falls, not rises. And increased parasympathetic outflow would slow the heart and lower pressure further, the opposite of the needed correction.',
      'A fall in arterial pressure reduces stretch on baroreceptors, so their firing falls. The brainstem responds by raising sympathetic outflow and withdrawing vagal tone, which increases heart rate, contractility and vascular resistance and restores pressure within seconds.',
      'The afferent half is correct, since reduced stretch lowers baroreceptor firing, but increased parasympathetic outflow would slow the heart and lower pressure further. The reflex withdraws parasympathetic tone and raises sympathetic tone.',
    ],
    skill: '3B baroreceptor reflex',
  },
  {
    id: 'fl7-bb-a-d02',
    section: 'bio-biochem',
    discipline: 'physiology',
    question: 'A hormone added to cultured liver cells raises their cAMP content within one minute. The response is not prevented by an inhibitor of transcription, and radioactively labeled hormone is found only at the cell surface. The hormone is most likely:',
    options: ['testosterone.', 'estradiol.', 'aldosterone.', 'glucagon.'],
    correctAnswer: 3,
    explanation:
      'A peptide hormone such as glucagon is water-soluble and cannot cross the plasma membrane; it binds a surface receptor, which generates a second messenger such as cAMP within seconds and alters the activity of existing proteins without any need for new transcription. Testosterone, estradiol, and aldosterone are steroids: they diffuse into the cell, bind intracellular receptors that act as transcription factors, and produce effects that take hours and are blocked when transcription is inhibited.',
    optionExplanations: [
      'Testosterone is a steroid that diffuses through the membrane and binds an intracellular receptor acting as a transcription factor. Its effects take hours, are blocked by transcription inhibitors, and labeled hormone would be found inside the cell, not only at the surface.',
      'Estradiol is a steroid: it enters the cell, binds an intracellular receptor, and alters gene expression over hours. A response within one minute that survives transcription inhibition and involves a surface-bound ligand does not fit a steroid.',
      'Aldosterone is a steroid hormone acting through intracellular receptors and new transcription. Its effects would be blocked by a transcription inhibitor, and the labeled hormone would be found within the cell rather than only at its surface.',
      'Glucagon is a peptide hormone: water-soluble, unable to cross the membrane, it binds a surface receptor coupled to adenylyl cyclase and raises cAMP within seconds. The response alters existing proteins and needs no new transcription, fitting every observation.',
    ],
    skill: '3B peptide vs steroid hormones',
  },
  {
    id: 'fl7-bb-a-d03',
    section: 'bio-biochem',
    discipline: 'physiology',
    question: 'Enterocytes of the small intestine take up amino acids from the lumen through Na⁺-coupled transporters in the membrane of their microvilli. In a disease that flattens the villi and shortens the microvilli, the maximal rate of amino acid absorption falls mainly because:',
    options: [
      'fewer transporters are exposed to the luminal contents.',
      'each transporter binds amino acids with a lower affinity.',
      'the Na⁺ concentration of the fluid in the lumen falls sharply.',
      'amino acids can no longer enter the lacteals of the villi.',
    ],
    correctAnswer: 0,
    explanation:
      'Villi and microvilli multiply the area of apical membrane, and with it the number of transporters in contact with the lumen; because the maximal rate of carrier-mediated uptake is proportional to the number of carriers, loss of surface lowers the maximal rate. Flattening the surface does not alter the structure of the individual transporter, so its affinity is unchanged. Luminal Na⁺ is supplied by the diet and by secretions and does not depend on villus height. Absorbed amino acids leave the villus in blood capillaries that drain to the portal vein; lacteals carry absorbed fat.',
    optionExplanations: [
      'Villi and microvilli multiply the apical membrane area and with it the number of transporters facing the lumen. Because the maximal rate of carrier-mediated uptake is proportional to carrier number, losing surface lowers the maximal rate.',
      'Flattening the villi changes the amount of membrane, not the structure of each transporter protein. The affinity of an individual transporter for amino acids is unchanged; there are simply fewer of them exposed.',
      'Luminal Na⁺ is supplied by the diet and by intestinal secretions and does not depend on villus height. The Na⁺ gradient that drives uptake is maintained regardless of the absorptive surface.',
      'Absorbed amino acids leave the villus in blood capillaries that drain to the portal vein, not in lacteals. Lacteals carry absorbed fat as chylomicrons, so they are irrelevant to amino acid absorption.',
    ],
    skill: '3B intestinal absorptive surface',
  },
  {
    id: 'fl7-bb-a-d04',
    section: 'bio-biochem',
    discipline: 'genetics',
    question: 'A mutation in one gene for a connective-tissue protein causes unusually long limbs, displacement of the lens of the eye, and weakening of the wall of the aorta. Adult height in the general population, by contrast, is influenced by variants in hundreds of genes. These two situations illustrate, respectively:',
    options: [
      'polygenic inheritance and pleiotropy.',
      'pleiotropy and polygenic inheritance.',
      'epistasis and polygenic inheritance.',
      'pleiotropy and incomplete dominance.',
    ],
    correctAnswer: 1,
    explanation:
      'Pleiotropy is the influence of one gene on several seemingly unrelated traits, as when a single connective-tissue gene affects the skeleton, the eye, and the aorta; polygenic inheritance is the control of one trait by many genes, as with height. The first option reverses the two terms. Epistasis is the masking or modification of one gene’s effect by another gene, which the first situation, involving a single gene, does not show. Incomplete dominance describes a heterozygote with a phenotype intermediate between the two homozygotes and says nothing about the number of genes that affect height.',
    optionExplanations: [
      'This reverses the two terms. One gene affecting limbs, lens and aorta is pleiotropy, not polygenic inheritance; many genes affecting height is polygenic inheritance, not pleiotropy.',
      'Pleiotropy is one gene influencing several seemingly unrelated traits, as when a single connective-tissue gene affects skeleton, eye and aorta. Polygenic inheritance is one trait controlled by many genes, as with height.',
      'Epistasis is one gene masking or modifying another gene’s effect. The first situation involves a single gene with multiple effects, which is pleiotropy, not an interaction between genes.',
      'Pleiotropy is correct for the first situation, but incomplete dominance describes a heterozygote with an intermediate phenotype. It says nothing about the number of genes that influence height, which is the point of the second situation.',
    ],
    skill: '1C pleiotropy vs polygenic inheritance',
  },
  {
    id: 'fl7-bb-a-d05',
    section: 'bio-biochem',
    discipline: 'molecular biology',
    question: 'A human gene with six introns is inserted into a bacterial plasmid behind a bacterial promoter, but the bacteria make no functional protein. When a cDNA prepared from the corresponding human mRNA with reverse transcriptase is inserted instead, the functional protein is produced. The best explanation is that:',
    options: [
      'bacteria use a different genetic code, and the cDNA is written in bacterial codons.',
      'bacteria degrade double-stranded DNA, and the cDNA remains single-stranded.',
      'bacteria cannot splice, and the cDNA contains no introns.',
      'bacteria need a poly-A tail to translate, and only the cDNA encodes one.',
    ],
    correctAnswer: 2,
    explanation:
      'Bacteria have no spliceosomes, so a transcript of the genomic copy keeps its introns and is translated into a useless product; cDNA is copied from mature mRNA, from which the introns have already been removed, and so encodes an uninterrupted reading frame. The genetic code is nearly universal, and reverse transcription does not change codons. Plasmids are double-stranded DNA and are maintained in bacteria, and the cDNA is made double-stranded before it is cloned. Bacterial translation does not depend on a poly-A tail.',
    optionExplanations: [
      'The genetic code is nearly universal, shared by bacteria and humans alike. Reverse transcription copies the mRNA faithfully and does not rewrite codons, so the cDNA is in the same code as the genomic sequence.',
      'Plasmids are double-stranded DNA maintained stably in bacteria, so bacteria do not degrade double-stranded DNA. The cDNA is also made double-stranded before cloning, so this description is wrong on both counts.',
      'Bacteria have no spliceosomes, so a transcript from the genomic copy keeps its six introns and is translated into a useless product. cDNA is copied from mature mRNA, from which introns have already been removed, so it encodes an uninterrupted reading frame.',
      'Bacterial translation does not depend on a poly-A tail; bacterial mRNAs generally lack one. The poly-A tail is a feature of eukaryotic mRNA processing and is not what allows the cDNA construct to work.',
    ],
    skill: '1B cDNA and introns',
  },
  {
    id: 'fl7-bb-a-d06',
    section: 'bio-biochem',
    discipline: 'biochemistry',
    question: 'One pass of a saturated fatty acyl-CoA through the four reactions of β-oxidation shortens the chain by two carbons. Which set of products is formed in that single pass?',
    options: [
      '1 NADH, 1 NADPH, and 1 acetyl-CoA',
      '2 NADH, 1 ATP, and 1 acetyl-CoA',
      '1 FADH₂, 1 NADH, and 1 malonyl-CoA',
      '1 FADH₂, 1 NADH, and 1 acetyl-CoA',
    ],
    correctAnswer: 3,
    explanation:
      'Each pass consists of an oxidation that reduces FAD to FADH₂, a hydration, a second oxidation that reduces NAD⁺ to NADH, and a thiolytic cleavage that releases acetyl-CoA. NADPH is the reductant of fatty acid synthesis and is not produced by β-oxidation. No ATP is formed directly in the pathway, and only one of its two oxidations uses NAD⁺. Malonyl-CoA is the three-carbon donor used in fatty acid synthesis, not a product of fatty acid breakdown.',
    optionExplanations: [
      'NADPH is the reductant used in fatty acid synthesis, not a product of β-oxidation. The two oxidations of β-oxidation reduce FAD and NAD⁺, not NADP⁺.',
      'No ATP is formed directly in β-oxidation; ATP comes later from oxidative phosphorylation of the reduced carriers. And only one of the two oxidations uses NAD⁺; the first uses FAD.',
      'FADH₂ and NADH are correct, but malonyl-CoA is the three-carbon donor used in fatty acid synthesis, not a product of fatty acid breakdown. The thiolytic cleavage releases acetyl-CoA.',
      'Each pass consists of an oxidation reducing FAD to FADH₂, a hydration, a second oxidation reducing NAD⁺ to NADH, and a thiolytic cleavage releasing acetyl-CoA. This set of products matches those four reactions.',
    ],
    skill: '1D products of β-oxidation',
  },
  {
    id: 'fl7-bb-a-d07',
    section: 'bio-biochem',
    discipline: 'biochemistry',
    question: 'Which reaction of the citric acid cycle is coupled directly to the phosphorylation of GDP (or ADP), without the participation of the electron transport chain?',
    options: [
      'Succinyl-CoA → succinate',
      'Isocitrate → α-ketoglutarate',
      'Succinate → fumarate',
      'Malate → oxaloacetate',
    ],
    correctAnswer: 0,
    explanation:
      'Succinyl-CoA synthetase uses the energy released by cleaving the thioester bond of succinyl-CoA to phosphorylate GDP (or ADP), the only substrate-level phosphorylation of the cycle. The oxidation of isocitrate to α-ketoglutarate yields NADH and CO₂. The oxidation of succinate to fumarate yields FADH₂. The oxidation of malate to oxaloacetate yields NADH. The reduced carriers from these three steps give rise to ATP only through oxidative phosphorylation.',
    optionExplanations: [
      'Succinyl-CoA synthetase uses the energy of the thioester bond in succinyl-CoA to phosphorylate GDP (or ADP) directly. This is the only substrate-level phosphorylation in the citric acid cycle.',
      'The oxidation of isocitrate to α-ketoglutarate is an oxidative decarboxylation that yields NADH and CO₂. Its energy reaches ATP only through the electron transport chain, not by direct phosphorylation.',
      'The oxidation of succinate to fumarate reduces FAD to FADH₂, which donates electrons to the electron transport chain. No nucleotide is phosphorylated directly in this step.',
      'The oxidation of malate to oxaloacetate reduces NAD⁺ to NADH. ATP from this step arises only through oxidative phosphorylation, not substrate-level phosphorylation.',
    ],
    skill: '1D substrate-level phosphorylation in the citric acid cycle',
  },
  {
    id: 'fl7-bb-a-d08',
    section: 'bio-biochem',
    discipline: 'cell biology',
    question: 'Cells from an infant with a defect in organelle assembly contain no functional peroxisomes. Which abnormality would be expected in these cells?',
    options: [
      'Accumulation of glycolipids, because the acid hydrolases that degrade them are missing',
      'Accumulation of hydrogen peroxide, because the oxidases that generate it are overactive',
      'Accumulation of very-long-chain fatty acids, because the pathway that begins their shortening is missing',
      'Accumulation of misfolded proteins, because the proteases that degrade them are missing',
    ],
    correctAnswer: 2,
    explanation:
      'Fatty acids with very long chains are too long to be handled by mitochondria and are first shortened by β-oxidation in peroxisomes; without the organelle they build up in cells and plasma. Acid hydrolases that degrade glycolipids belong to lysosomes, so their loss describes a lysosomal storage disease. The oxidases that produce hydrogen peroxide are themselves peroxisomal enzymes, working alongside the catalase that destroys it, so they are not overactive when the organelle is absent. Misfolded proteins are degraded mainly by the proteasome in the cytosol.',
    optionExplanations: [
      'Acid hydrolases that degrade glycolipids belong to lysosomes, not peroxisomes. Their loss describes a lysosomal storage disease, which is a different organelle defect.',
      'The oxidases that produce hydrogen peroxide are themselves peroxisomal enzymes, working alongside peroxisomal catalase. Without the organelle these oxidases are not overactive; they are mislocalized or absent along with the catalase.',
      'Very-long-chain fatty acids are too long for mitochondria and are first shortened by β-oxidation in peroxisomes. Without functional peroxisomes they cannot be shortened and accumulate in cells and plasma.',
      'Misfolded proteins are degraded mainly by the proteasome in the cytosol, not by peroxisomal proteases. Peroxisomes are not the cell’s main site of protein quality control.',
    ],
    skill: '2A peroxisomes',
  },
]
