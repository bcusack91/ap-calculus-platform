import type { MCQItem } from '@/components/FullLengthPracticeExam'

/**
 * AP Biology practice exam, Form 3: 60 MCQs (May 2027 format, 90 minutes).
 * Unit counts follow the CED weights:
 *   U1 Chemistry of Life                  (6)   8–11%
 *   U2 Cell Structure & Function          (7)  10–13%
 *   U3 Cellular Energetics                (8)  12–16%
 *   U4 Cell Communication & Cell Cycle    (7)  10–15%
 *   U5 Heredity                           (6)   8–11%
 *   U6 Gene Expression & Regulation       (8)  12–16%
 *   U7 Natural Selection                  (10) 13–20%
 *   U8 Ecology                            (8)  10–15%
 * Seven data/experiment sets (4–5 questions each, consecutive, sharing one
 * stimulus) plus discrete questions.
 */

const SET_SILK =
  'Spiders make several kinds of silk, each a protein. The table compares two kinds made by the same spider: dragline silk, which the spider hangs from, and the sticky capture-spiral silk of its web. The β-sheet value is the percentage of each protein\'s length folded into β-pleated sheets.\n\n| Silk | Glycine (% of amino acids) | Alanine (%) | Proline (%) | Amino acids with charged R groups (%) | Folded into β-sheets (%) | Force needed to break a fiber (relative) | Stretch before breaking (%) |\n|---|---|---|---|---|---|---|---|\n| Dragline | 42 | 25 | 3 | 3 | 40 | 10 | 30 |\n| Capture spiral | 44 | 8 | 20 | 2 | 4 | 1 | 200 |\n\nGlycine has a hydrogen atom as its R group, alanine has a $-CH_{3}$ group, and proline has a ring that bends the backbone.'

const SET_CHLORIDE =
  'Cells lining the airways move chloride ions ($Cl^{-}$) out into the thin layer of liquid on the airway surface, and water follows. In cystic fibrosis, a mutation affects CFTR, a membrane protein that forms a channel for $Cl^{-}$. Researchers measured $Cl^{-}$ movement out of cultured airway cells and the depth of the surface liquid. Some cells were treated with a "corrector" drug that helps misfolded CFTR protein fold properly.\n\n| Cells | Where most CFTR protein is found | $Cl^{-}$ movement out of cells (relative) | Depth of surface liquid (µm) |\n|---|---|---|---|\n| Normal | Plasma membrane | 100 | 7.0 |\n| Mutant | Endoplasmic reticulum | 4 | 2.5 |\n| Mutant + corrector drug | Plasma membrane and ER | 45 | 5.1 |\n\nThe channel lets $Cl^{-}$ move only down its electrochemical gradient.'

const SET_YEAST =
  'Students added equal amounts of baker\'s yeast to five sealed flasks, each with 100 mL of water at 35°C and a balloon over its mouth. Each flask received 5 g of one substance (or none), and the students measured the circumference of each balloon after 60 minutes. No oxygen was added to the flasks.\n\n| Flask | Substance added | Balloon circumference after 60 min (cm) |\n|---|---|---|\n| 1 | None | 9 |\n| 2 | Glucose | 31 |\n| 3 | Sucrose (glucose + fructose) | 28 |\n| 4 | Lactose (glucose + galactose) | 9 |\n| 5 | Lactose + an enzyme that hydrolyzes lactose | 26 |\n\nAn uninflated balloon over an empty flask measured 9 cm.'

const SET_WORM =
  'During development of a hermaphrodite of the roundworm $C.$ $elegans$, exactly 1,090 body cells are produced, and 131 of them die by apoptosis at set times in set places. Researchers counted the cells in normal worms and in worms lacking the protein made by gene D, gene S, or both.\n\n| Worms | Cells that die during development | Cells in the adult |\n|---|---|---|\n| Normal | 131 | 959 |\n| No D protein | 0 | 1,090 |\n| No S protein | Almost all; the embryos die | — |\n| No D protein and no S protein | 0 | 1,090 |'

const SET_CODE3 =
  'In the 1960s, researchers added synthetic mRNA molecules to a cell-free mixture containing ribosomes, tRNAs, amino acids and everything else needed for translation, and identified the polypeptides that were made.\n\n| Synthetic mRNA | Polypeptide made |\n|---|---|\n| UUUUUU… (only U) | Phe–Phe–Phe–… |\n| AAAAAA… (only A) | Lys–Lys–Lys–… |\n| CCCCCC… (only C) | Pro–Pro–Pro–… |\n| UCUCUC… (U and C alternating) | Ser–Leu–Ser–Leu–… |'

const SET_AMNIOTE =
  'The table shows whether five groups of living vertebrates have each of four characters (+ = present, − = absent). Sharks are the outgroup.\n\n| Group | Amniotic egg | Two openings in the skull behind each eye | Gizzard | Feathers |\n|---|---|---|---|---|\n| Sharks | − | − | − | − |\n| Mammals | + | − | − | − |\n| Lizards | + | + | − | − |\n| Crocodiles | + | + | + | − |\n| Birds | + | + | + | + |'

const SET_MOUNTAIN =
  'Researchers recorded the lowest and highest elevations at which five plant species grew on a mountain, in surveys 50 years apart. The average temperature at each elevation rose about 1°C between the surveys. The summit is at 3,000 m.\n\n| Species | Elevation range in 1970 (m) | Elevation range in 2020 (m) |\n|---|---|---|\n| A | 800–1,600 | 1,000–1,850 |\n| B | 1,200–2,100 | 1,450–2,400 |\n| C | 2,300–3,000 | 2,600–3,000 |\n| D | 500–1,100 | 500–1,150 |\n| E | 1,500–2,200 | 1,700–2,500 |'

export const MCQS: MCQItem[] = [
  {
    type: 'mcq',
    topic: 'unit-1-chemistry-of-life',
    stimulus: SET_SILK,
    question: 'β-pleated sheets are an example of which level of protein structure, and what holds them together?',
    options: [
      'Secondary structure, held by hydrogen bonds between atoms of the backbone',
      'Primary structure, held together by the peptide bonds between neighboring amino acids',
      'Tertiary structure, held together by interactions among the R groups of distant amino acids',
      'Quaternary structure, held together by bonds between separate polypeptide chains',
    ],
    correctAnswer: 0,
    explanation:
      'Helices and β-sheets are secondary structure, formed by hydrogen bonds between the C=O and N–H groups of the polypeptide backbone. Peptide bonds define the primary sequence, R-group interactions create tertiary structure, and quaternary structure requires more than one polypeptide; each silk here is a single kind of protein folding along its own length.',
    optionExplanations: [
      'Helices and β-pleated sheets are secondary structure. They are held together by hydrogen bonds between the C=O and N–H groups of the polypeptide backbone.',
      'Peptide bonds join neighboring amino acids and define the primary structure, the amino acid sequence. β-sheets are a folding pattern of that chain, held by hydrogen bonds rather than peptide bonds.',
      'Tertiary structure is the overall fold produced by interactions among R groups. β-sheets form from hydrogen bonds between backbone atoms, not between R groups, so they are secondary structure.',
      'Quaternary structure requires more than one polypeptide chain. β-sheets form within a single protein folding along its own length, so they are secondary structure.',
    ],
  },
  {
    type: 'mcq',
    topic: 'unit-1-chemistry-of-life',
    stimulus: SET_SILK,
    question: 'Which claim about the two kinds of silk is best supported by the data?',
    options: [
      'Silk with more glycine is stronger, because glycine forms the most hydrogen bonds.',
      'Silk with more alanine and less proline has more β-sheet structure and is stronger.',
      'Silk with more charged R groups is stronger, because ionic bonds link its chains.',
      'Both silks are equally strong, because they contain nearly the same glycine content.',
    ],
    correctAnswer: 1,
    explanation:
      'Dragline silk has three times the alanine, far less proline, ten times the β-sheet content and ten times the breaking force of capture-spiral silk. The glycine content is about the same in both, so glycine cannot explain the difference, the charged-R-group content is low and similar in both, and the breaking forces differ tenfold.',
    optionExplanations: [
      'The two silks have nearly the same glycine content (42% and 44%), yet their breaking forces differ tenfold. Glycine therefore cannot explain the difference in strength.',
      'Dragline silk has three times the alanine and far less proline than capture silk, along with ten times the β-sheet content and ten times the breaking force. The data link these features to strength.',
      'Charged R groups are rare and similar in both silks (3% and 2%), but the breaking forces differ tenfold. Charged R groups cannot explain the difference in strength.',
      'The breaking forces are 10 and 1, so the silks are not equally strong. Similar glycine content does not make them equal, because they differ in alanine, proline, and β-sheet content.',
    ],
  },
  {
    type: 'mcq',
    topic: 'unit-1-chemistry-of-life',
    stimulus: SET_SILK,
    question: 'Capture-spiral silk stretches to three times its length before breaking. Based on the data, which feature best explains this stretchiness?',
    options: [
      'Its many charged R groups repel one another and push the chains apart as it is pulled.',
      'Its high glycine content gives it more peptide bonds, which stretch farther than other bonds.',
      'Its many prolines bend the backbone, so few rigid β-sheets form and the chains can extend.',
      'Its low alanine content lets it absorb water, which swells the fiber and makes it longer.',
    ],
    correctAnswer: 2,
    explanation:
      'Proline\'s ring kinks the backbone and prevents the regular hydrogen bonding of β-sheets, so capture silk has almost no β-sheet (4%); its loosely folded chains can straighten when pulled. Charged R groups are rare in both silks, both have similar glycine content, and nothing in the data concerns water uptake.',
    optionExplanations: [
      'Charged R groups make up only 2% of capture silk, about the same as in dragline silk. They are too rare, and too similar between the silks, to explain the large difference in stretch.',
      'Both silks have about the same glycine content, so glycine cannot explain why one stretches far more. Peptide bonds also do not stretch more than other covalent bonds.',
      'Proline\'s ring kinks the backbone and prevents the regular hydrogen bonding of β-sheets, so capture silk has almost no β-sheet (4%). Its loosely folded chains can straighten when pulled.',
      'Nothing in the data concerns water uptake or swelling. The table links stretchiness to high proline and few β-sheets, not to alanine absorbing water.',
    ],
  },
  {
    type: 'mcq',
    topic: 'unit-1-chemistry-of-life',
    stimulus: SET_SILK,
    question: 'Engineers make a dragline silk in which most alanines are replaced by glutamic acid, whose R group is negatively charged at the pH of the spider\'s body. Compared with natural dragline silk, the engineered silk would most likely',
    options: [
      'become insoluble in water, because charged R groups repel water',
      'form more β-sheets, because charged R groups attract each other',
      'stay equally strong, because the protein backbone is unchanged',
      'form fewer tightly packed β-sheets and break more easily',
    ],
    correctAnswer: 3,
    explanation:
      'Small alanine R groups let neighboring chains pack closely into β-sheets; large, negatively charged R groups repel one another and attract water, so fewer sheets form and the fiber weakens. Like charges repel rather than attract, the backbone alone does not determine folding, and charged R groups make a protein more water-soluble, not less.',
    optionExplanations: [
      'Charged R groups attract water rather than repel it, so they make a protein more water-soluble, not less. The engineered silk would not become insoluble for this reason.',
      'Like charges repel rather than attract. Many negatively charged R groups would push neighboring chains apart and prevent β-sheets from packing, so fewer sheets would form.',
      'The backbone alone does not determine folding; the R groups strongly affect which structures form. Replacing alanine changes how tightly the chains can pack.',
      'Small alanine R groups let neighboring chains pack closely into β-sheets. Large, negatively charged R groups repel one another and attract water, so fewer sheets form and the fiber breaks more easily.',
    ],
  },
  {
    type: 'mcq',
    topic: 'unit-1-chemistry-of-life',
    question: 'The four kinds of nucleotides in DNA differ from one another in which part of their structure?',
    options: [
      'Their nitrogenous base',
      'Their five-carbon sugar',
      'Their phosphate group',
      'Their overall charge',
    ],
    correctAnswer: 0,
    explanation:
      'All four DNA nucleotides have the same deoxyribose sugar and phosphate group; they differ only in the base (A, T, G or C), which is why the sequence of bases carries information. The sugar differs between DNA and RNA, not among DNA nucleotides, and every nucleotide in a strand carries the same negatively charged phosphate, so their charge is the same.',
    optionExplanations: [
      'All four DNA nucleotides share the same deoxyribose sugar and phosphate group and differ only in their base (A, T, G, or C). The sequence of bases is what carries genetic information.',
      'Every DNA nucleotide contains the same sugar, deoxyribose. The sugar differs between DNA and RNA, not among the four nucleotides of DNA.',
      'Every DNA nucleotide has the same kind of phosphate group, which links it into the sugar-phosphate backbone. The phosphate is not what distinguishes the four nucleotides.',
      'Each nucleotide in a strand carries the same negatively charged phosphate, so the four kinds have the same overall charge. They differ in their nitrogenous base.',
    ],
  },
  {
    type: 'mcq',
    topic: 'unit-1-chemistry-of-life',
    question: 'Unlike a strand of DNA, which is paired with a complementary strand along its whole length, a single RNA molecule such as a tRNA can fold into a specific three-dimensional shape. Which property of RNA makes this folding possible?',
    options: [
      'Its sugar lacks a hydroxyl group, so the strand bends easily at every nucleotide.',
      'Parts of the strand have matching base sequences that pair with each other.',
      'Its uracil bases form covalent bonds with amino acids elsewhere in the molecule.',
      'Its phosphate groups attract one another and pull the strand into a compact ball.',
    ],
    correctAnswer: 1,
    explanation:
      'Stretches of an RNA strand with complementary sequences hydrogen-bond to each other, forming double-stranded stems and loops that give the molecule a definite shape. Ribose has an extra hydroxyl group compared with deoxyribose, not one fewer. Uracil pairs with adenine by hydrogen bonds rather than bonding covalently to amino acids, and negatively charged phosphates repel one another.',
    optionExplanations: [
      'This reverses the chemistry. Ribose has an extra hydroxyl group compared with deoxyribose, not one fewer, and bending at every nucleotide would not produce one specific shape.',
      'Stretches of a single RNA strand with complementary sequences hydrogen-bond to each other. They form double-stranded stems and loops that give a molecule such as tRNA a definite shape.',
      'Uracil pairs with adenine by hydrogen bonds; it does not form covalent bonds with amino acids. A tRNA\'s amino acid attaches at one end of the molecule, not to bases throughout it.',
      'Phosphate groups are negatively charged, so they repel one another rather than attract. Repulsion tends to extend a strand, not pull it into a compact ball.',
    ],
  },
  {
    type: 'mcq',
    topic: 'unit-2-cell-structure',
    stimulus: SET_CHLORIDE,
    question: 'CFTR lets $Cl^{-}$ move only down its gradient. How is $Cl^{-}$ movement through the CFTR channel best classified?',
    options: [
      'Active transport, because a membrane protein is required to move the ion',
      'Simple diffusion, because ions dissolve easily in the bilayer\'s fatty acid core',
      'Facilitated diffusion, because the ion moves passively through a membrane protein',
      'Exocytosis, because the ions are released in vesicles that fuse with the membrane',
    ],
    correctAnswer: 2,
    explanation:
      'A channel protein that lets ions move down their electrochemical gradient carries out facilitated diffusion, a passive process. Needing a protein does not make transport active; active transport moves substances against a gradient using energy. Charged ions cannot cross the hydrophobic core on their own, and channels do not move ions in vesicles.',
    optionExplanations: [
      'Needing a membrane protein does not make transport active; facilitated diffusion uses proteins too. Active transport moves substances against their gradient using energy, but CFTR lets $Cl^{-}$ move only down its gradient.',
      'Charged ions cannot dissolve in the hydrophobic fatty acid core of the bilayer, so they do not cross by simple diffusion. $Cl^{-}$ needs a channel such as CFTR.',
      'A channel protein that lets ions move only down their electrochemical gradient carries out facilitated diffusion. The movement is passive but requires a membrane protein.',
      'Exocytosis releases large molecules in vesicles that fuse with the membrane. Ions moving through a channel protein are not packaged in vesicles.',
    ],
  },
  {
    type: 'mcq',
    topic: 'unit-2-cell-structure',
    stimulus: SET_CHLORIDE,
    question: 'Why is the surface liquid much shallower over the mutant cells than over normal cells?',
    options: [
      'The mutant CFTR protein blocks the aquaporins, so no water can cross the membrane.',
      'More $Cl^{-}$ leaves the cells, which draws water out of the liquid and back into the cells.',
      'The mutant cells pump water into themselves using the energy of ATP hydrolysis.',
      'Less $Cl^{-}$ leaves the cells, so less water follows it out of the cells by osmosis.',
    ],
    correctAnswer: 3,
    explanation:
      'With little $Cl^{-}$ leaving, the surface liquid has fewer solutes, so less water moves out of the cells by osmosis and the liquid layer thins (2.5 µm versus 7.0 µm). The data show $Cl^{-}$ movement fell, not rose. Water moves passively by osmosis rather than being pumped, and nothing in the data indicates that aquaporins are blocked.',
    optionExplanations: [
      'Nothing in the data indicates that aquaporins are blocked. The data show that $Cl^{-}$ movement fell, which by itself explains why less water follows it out.',
      'The data show that $Cl^{-}$ movement out of mutant cells fell to 4, not that it rose. Less solute, not more, is leaving the cells.',
      'Water moves passively by osmosis rather than being pumped with ATP. The liquid is shallower because less $Cl^{-}$ is moved out for water to follow.',
      'With little $Cl^{-}$ leaving the mutant cells, the surface liquid gains fewer solutes. Less water follows by osmosis, so the liquid layer is thinner (2.5 µm versus 7.0 µm).',
    ],
  },
  {
    type: 'mcq',
    topic: 'unit-2-cell-structure',
    stimulus: SET_CHLORIDE,
    question: 'In the mutant cells, most CFTR protein stays in the endoplasmic reticulum. Which conclusion is best supported?',
    options: [
      'Misfolded CFTR is held back in the ER, so little of it travels on to the plasma membrane.',
      'The mutation stops CFTR from being made, so no CFTR protein is found anywhere in the mutant cells.',
      'CFTR normally works in the ER membrane, so the mutant protein is in its usual working location.',
      'The ER breaks CFTR down before it is made, so the mutant cells contain very little CFTR mRNA.',
    ],
    correctAnswer: 0,
    explanation:
      'Membrane proteins are made on the rough ER and travel through the Golgi in vesicles to the plasma membrane; mutant CFTR is made but stays in the ER, and a drug that improves folding moves more of it to the plasma membrane, so misfolded protein is retained. The protein is present, so it is still made. In normal cells CFTR is in the plasma membrane, and the data say nothing about mRNA levels.',
    optionExplanations: [
      'Mutant CFTR is made but stays in the ER, and a drug that improves folding moves more of it to the plasma membrane. Misfolded CFTR is therefore held back in the ER instead of moving on.',
      'The table states that most CFTR protein in the mutant cells is in the ER, so the protein is still made. The problem is where it goes, not whether it is made.',
      'In normal cells most CFTR is in the plasma membrane, where it works as a $Cl^{-}$ channel. Being stuck in the ER is not its usual working location, which is why $Cl^{-}$ movement falls.',
      'The data say nothing about mRNA levels, and a protein cannot be broken down before it is made. The mutant cells do contain CFTR protein, located in the ER.',
    ],
  },
  {
    type: 'mcq',
    topic: 'unit-2-cell-structure',
    stimulus: SET_CHLORIDE,
    question: 'Which statement best explains the effect of the corrector drug?',
    options: [
      'It made CFTR pump $Cl^{-}$ against its gradient, which raised $Cl^{-}$ movement above normal.',
      'It moved more CFTR to the plasma membrane, which restored part of the $Cl^{-}$ movement.',
      'It replaced CFTR as a $Cl^{-}$ carrier, so the cells no longer needed the CFTR protein.',
      'It increased the number of CFTR genes in each cell, so the cells made extra CFTR protein.',
    ],
    correctAnswer: 1,
    explanation:
      'With the drug, CFTR appears in the plasma membrane and $Cl^{-}$ movement rises from 4 to 45, about half of normal, with deeper surface liquid; the drug helps the protein fold so it can be delivered where it works. $Cl^{-}$ movement stayed below normal, and the channel still allows only movement down the gradient. The drug acts on folding of the existing protein, not as a carrier or by adding genes.',
    optionExplanations: [
      '$Cl^{-}$ movement with the drug was 45, below the normal 100, and the stimulus says the channel allows only movement down the gradient. The drug did not make CFTR a pump.',
      'With the drug, CFTR appears in the plasma membrane and $Cl^{-}$ movement rises from 4 to 45, about half of normal. Helping the protein fold lets more of it reach the membrane where it works.',
      'The stimulus says the drug helps misfolded CFTR fold properly, so it acts on the existing protein. It does not replace CFTR as a carrier.',
      'The drug acts on the folding of the existing protein, not on the number of genes. Nothing in the data indicates that extra CFTR protein was made.',
    ],
  },
  {
    type: 'mcq',
    topic: 'unit-2-cell-structure',
    stimulus: SET_CHLORIDE,
    question: 'A student predicts that a different mutation, which lets CFTR reach the plasma membrane but keeps its channel closed, would have little effect on the surface liquid. Which result would most directly test this prediction?',
    options: [
      'Measuring the surface-liquid depth of normal cells that have been given the corrector drug',
      'Measuring the amount of CFTR protein in the ER of cells that carry the original mutation',
      'Measuring $Cl^{-}$ movement and surface-liquid depth in cells that carry the second mutation',
      'Measuring the CFTR mRNA in cells with the original mutation that receive the corrector drug',
    ],
    correctAnswer: 2,
    explanation:
      'The prediction concerns cells with the second mutation, so the direct test is to measure their $Cl^{-}$ movement and surface liquid; the model predicts both would be low, because a closed channel cannot pass $Cl^{-}$ even at the plasma membrane. The other measurements concern the original mutation, normal cells or mRNA, so they cannot test the prediction.',
    optionExplanations: [
      'Normal cells given the corrector drug do not carry the second mutation, so measuring them cannot test a prediction about cells with a closed channel.',
      'Measuring CFTR in the ER of cells with the original mutation concerns a different mutation. It says nothing about cells whose CFTR reaches the membrane but stays closed.',
      'The prediction concerns cells with the second mutation, so the direct test is to measure their $Cl^{-}$ movement and surface liquid. A closed channel would be expected to make both low.',
      'CFTR mRNA levels in cells with the original mutation do not address the second mutation. The prediction is about surface liquid when the channel is present but closed.',
    ],
  },
  {
    type: 'mcq',
    topic: 'unit-2-cell-structure',
    question: 'A charged dye cannot cross intact phospholipid bilayers. Living yeast cells placed in the dye stay colorless, while yeast cells killed by boiling turn deep blue. Which explanation best accounts for the difference?',
    options: [
      'Boiling made the cell walls thicker, so the dye was trapped inside the dead cells.',
      'Living cells broke the dye down with enzymes, while dead cells could not break it down.',
      'Living cells pumped the dye in and out at equal rates, so their color did not change.',
      'Boiling damaged the plasma membrane, so the dye could enter the cells by diffusion.',
    ],
    correctAnswer: 3,
    explanation:
      'Heat disrupts the bilayer and denatures membrane proteins, so the membrane of a boiled cell no longer blocks charged molecules and the dye diffuses in; an intact membrane keeps the dye out. Cell walls let small molecules through and do not trap them. Nothing indicates that living cells destroy the dye, and the dye cannot cross an intact bilayer to be pumped in at all.',
    optionExplanations: [
      'Plant and fungal cell walls are porous and let small molecules through; they do not trap dye. The difference between living and dead cells lies in the plasma membrane.',
      'Nothing in the stem indicates that living cells destroy the dye. The stem says the charged dye cannot cross an intact bilayer, which explains why living cells stay colorless.',
      'The charged dye cannot cross an intact bilayer at all, so living cells cannot be taking it in. Their color stays unchanged because the dye never enters.',
      'Heat disrupts the bilayer and denatures membrane proteins, so a boiled cell\'s membrane no longer blocks charged molecules. The dye diffuses in, while an intact membrane keeps it out of living cells.',
    ],
  },
  {
    type: 'mcq',
    topic: 'unit-2-cell-structure',
    stimulus:
      'Liver cells were broken open and spun in a centrifuge to separate their parts into four fractions. Each fraction was tested for three activities.\n\n| Fraction | DNA (% of total) | $O_{2}$ use (relative) | Protein made from labeled amino acids (relative) |\n|---|---|---|---|\n| 1 | 93 | 2 | 3 |\n| 2 | 6 | 95 | 9 |\n| 3 | 1 | 2 | 85 |\n| 4 | 0 | 1 | 3 |',
    question: 'Which fraction contains most of the mitochondria?',
    options: [
      'Fraction 2',
      'Fraction 1',
      'Fraction 3',
      'Fraction 4',
    ],
    correctAnswer: 0,
    explanation:
      'Mitochondria carry out the final stages of cellular respiration, so they consume $O_{2}$ and contain their own DNA; fraction 2 shows high $O_{2}$ use and some DNA. Fraction 1 holds most of the DNA but uses little $O_{2}$, which fits nuclei. Fraction 3 makes protein from amino acids, which fits ribosomes and rough ER, and fraction 4 shows little of any activity.',
    optionExplanations: [
      'Mitochondria carry out the final stages of cellular respiration, so they consume $O_{2}$ and contain a small amount of their own DNA. Fraction 2 shows high $O_{2}$ use and some DNA.',
      'Fraction 1 holds 93% of the DNA but uses little $O_{2}$, which fits nuclei. Mitochondria would show high oxygen use.',
      'Fraction 3 makes most of the protein from labeled amino acids, which fits ribosomes and rough ER. It uses little $O_{2}$, so it does not hold most of the mitochondria.',
      'Fraction 4 shows little of any activity, with no DNA and almost no $O_{2}$ use. Mitochondria would show high oxygen use and some DNA.',
    ],
  },
  {
    type: 'mcq',
    topic: 'unit-3-cellular-energetics',
    stimulus: SET_YEAST,
    question: 'Which process in the yeast produced the gas that inflated the balloons?',
    options: [
      'Photosynthesis, which releases $O_{2}$ as water is split',
      'Fermentation, which releases $CO_{2}$ as pyruvate is converted to ethanol',
      'Aerobic respiration, which releases $O_{2}$ as glucose is fully oxidized',
      'Glycolysis alone, which releases $CO_{2}$ as glucose is split into pyruvate',
    ],
    correctAnswer: 1,
    explanation:
      'Without added oxygen, yeast break glucose down by glycolysis and then alcohol fermentation, in which pyruvate loses $CO_{2}$ and is converted to ethanol, regenerating $NAD^{+}$. Yeast do not photosynthesize, aerobic respiration consumes $O_{2}$ rather than releasing it, and glycolysis itself releases no $CO_{2}$.',
    optionExplanations: [
      'Yeast are fungi and do not photosynthesize, and the flasks were not set up for photosynthesis. The gas came from the breakdown of sugar.',
      'Without added oxygen, yeast break glucose down by glycolysis and then alcohol fermentation. Pyruvate loses $CO_{2}$ and is converted to ethanol, regenerating $NAD^{+}$, and the $CO_{2}$ inflates the balloon.',
      'Aerobic respiration consumes $O_{2}$ rather than releasing it, and no oxygen was added to the flasks. Its gas product is $CO_{2}$, not $O_{2}$.',
      'Glycolysis itself releases no $CO_{2}$; it splits glucose into two pyruvate molecules. The $CO_{2}$ is released in the later fermentation step.',
    ],
  },
  {
    type: 'mcq',
    topic: 'unit-3-cellular-energetics',
    stimulus: SET_YEAST,
    question: 'Which flask served as the control for gas production by yeast without an added food source?',
    options: [
      'Flask 4',
      'Flask 2',
      'Flask 1',
      'Flask 5',
    ],
    correctAnswer: 2,
    explanation:
      'Flask 1 had yeast and water but no added substance, so it shows how much gas the yeast make without a sugar supply (none: the balloon stayed at 9 cm). Flasks 2 and 5 received sugar or sugar plus enzyme, and flask 4 tests lactose, so none of them shows the no-food baseline.',
    optionExplanations: [
      'Flask 4 received lactose, so it tests whether yeast can use that sugar. It is not the baseline for yeast with no added food.',
      'Flask 2 received glucose, so it shows gas production with a food source. It cannot serve as the no-food baseline.',
      'Flask 1 had yeast and water but no added substance, so it shows how much gas the yeast make without a sugar supply. Its balloon stayed at 9 cm, the uninflated size.',
      'Flask 5 received lactose plus an enzyme, which supplies usable sugar. It cannot show gas production without an added food source.',
    ],
  },
  {
    type: 'mcq',
    topic: 'unit-3-cellular-energetics',
    stimulus: SET_YEAST,
    question: 'Which explanation best accounts for the result in flask 4?',
    options: [
      'Lactose is too large to dissolve in water, so it settled to the bottom of the flask.',
      'Lactose killed the yeast cells, because galactose is toxic to all fungi at that dose.',
      'Lactose was fermented into a gas that cannot be trapped by a rubber balloon.',
      'The yeast lack an enzyme that hydrolyzes lactose, so they cannot use it.',
    ],
    correctAnswer: 3,
    explanation:
      'When an enzyme that splits lactose was added (flask 5), the yeast produced nearly as much gas as with glucose, so the yeast can ferment the products but cannot break lactose\'s bond themselves; enzymes are specific to their substrates. Lactose dissolves readily, the yeast in flask 5 were not killed by its products, and the balloons trapped gas in every other flask.',
    optionExplanations: [
      'Lactose dissolves readily in water. Its failure to support gas production comes from the yeast\'s inability to break it down, as flask 5 shows.',
      'Galactose is one of the products in flask 5, where the yeast produced plenty of gas, so the yeast were not killed by lactose or its products.',
      'The balloons trapped gas in every other flask, and $CO_{2}$ from fermentation is the same gas whatever the sugar. The balloon stayed at 9 cm because no gas was made.',
      'With an enzyme that splits lactose (flask 5), the yeast made nearly as much gas as with glucose. The yeast can ferment the products but lack the enzyme to break lactose down themselves.',
    ],
  },
  {
    type: 'mcq',
    topic: 'unit-3-cellular-energetics',
    stimulus: SET_YEAST,
    question: 'The balloon on flask 3 (sucrose) was slightly smaller than the one on flask 2 (glucose). Which explanation is most consistent with the data?',
    options: [
      'Sucrose had to be hydrolyzed into glucose and fructose before the yeast could ferment it.',
      'Sucrose contains less energy than glucose, because it is made of smaller sugar molecules.',
      'Sucrose is fermented by a different pathway that releases $O_{2}$ instead of $CO_{2}$.',
      'Sucrose stopped the yeast from carrying out glycolysis, so only a little gas was made.',
    ],
    correctAnswer: 0,
    explanation:
      'Yeast first split sucrose into its two monosaccharides, an extra step that slightly delays fermentation. Sucrose is a disaccharide, larger than glucose and with more stored energy per molecule. Fermentation releases $CO_{2}$, not $O_{2}$, and the large balloon in flask 3 shows that glycolysis continued.',
    optionExplanations: [
      'Yeast must first split sucrose into glucose and fructose before fermenting it. This extra step slightly delays fermentation, giving a slightly smaller balloon after 60 minutes.',
      'Sucrose is a disaccharide, larger than glucose, and it stores more energy per molecule, not less. Its smaller balloon is not explained by smaller sugar molecules.',
      'Fermentation releases $CO_{2}$, not $O_{2}$, whichever sugar is used. Sucrose is broken into glucose and fructose, which enter the same pathway.',
      'The balloon in flask 3 grew to 28 cm, close to the 31 cm with glucose, so glycolysis clearly continued. Blocking glycolysis would have left the balloon near 9 cm.',
    ],
  },
  {
    type: 'mcq',
    topic: 'unit-3-cellular-energetics',
    stimulus: SET_YEAST,
    question: 'A student claims that the gas in flask 2 came from glucose reacting with water, not from the yeast. Which additional flask would best test this claim?',
    options: [
      'A flask with yeast and water but no glucose',
      'A flask with glucose and water but no yeast',
      'A flask with twice as much yeast and glucose',
      'A flask with yeast and glucose kept at 20°C',
    ],
    correctAnswer: 1,
    explanation:
      'To test whether yeast are needed, the flask must have glucose without yeast while everything else stays the same; if the balloon stays at 9 cm, the gas came from the yeast. Flask 1 already shows yeast without glucose, and changing the amounts or the temperature keeps the yeast in the flask, so neither can show whether glucose alone makes gas.',
    optionExplanations: [
      'Flask 1 already shows yeast and water without glucose. That flask tests whether yeast make gas without food, not whether glucose alone makes gas.',
      'To test whether yeast are needed, the flask must contain glucose without yeast while everything else stays the same. If its balloon stays at 9 cm, the gas in flask 2 came from the yeast.',
      'Doubling the yeast and glucose keeps yeast in the flask, so it cannot show whether glucose alone makes gas. It would only test the effect of amount.',
      'Changing the temperature keeps yeast in the flask, so it cannot separate the yeast\'s role from glucose reacting with water. It tests the effect of temperature instead.',
    ],
  },
  {
    type: 'mcq',
    topic: 'unit-3-cellular-energetics',
    question: 'In early spring the flowers of skunk cabbage stay as much as 15°C warmer than the surrounding air. Their cells have a very high rate of cellular respiration, but much of the electron flow in their mitochondria is not coupled to making ATP. Where does most of the energy released from their fuel go?',
    options: [
      'Into chemical energy stored in extra ATP molecules',
      'Into new glucose made from the $CO_{2}$ released',
      'Into thermal energy that warms the flower tissue',
      'Into light energy given off by the flower petals',
    ],
    correctAnswer: 2,
    explanation:
      'When electron transport is not coupled to ATP synthesis, the energy released as electrons pass to oxygen is given off as heat instead of being captured in ATP, which warms the flower. Coupling to ATP synthase is what would store the energy as ATP. Making glucose from $CO_{2}$ requires energy input rather than releasing it, and the flowers are warm, not glowing.',
    optionExplanations: [
      'Storing energy in ATP requires electron flow to be coupled to ATP synthase. The stem says much of the electron flow is not coupled, so that energy is not captured as ATP.',
      'Making glucose from $CO_{2}$ requires an input of energy, as in photosynthesis. It is not where the energy released by respiration goes.',
      'When electron transport is not coupled to ATP synthesis, the energy released as electrons pass to oxygen is given off as heat. That heat keeps the flowers warmer than the air.',
      'Nothing in the stem suggests the flowers glow; they are warm. The energy that is not captured in ATP is released as thermal energy, not light.',
    ],
  },
  {
    type: 'mcq',
    topic: 'unit-3-cellular-energetics',
    question: 'An adult\'s body contains only about 250 g of ATP at any moment, yet the body hydrolyzes about 60 kg of ATP per day. Which statement best explains how this is possible?',
    options: [
      'The body makes 60 kg of new adenine and ribose each day to build fresh ATP molecules.',
      'ATP is stored in fat tissue and released into cells as fast as it is being hydrolyzed.',
      'Most of the ATP that the body uses comes directly from the food that the person eats.',
      'Each ATP molecule is regenerated from ADP and phosphate hundreds of times a day.',
    ],
    correctAnswer: 3,
    explanation:
      'ATP is not stockpiled; cellular respiration continually re-phosphorylates ADP, so each molecule is recycled about 240 times a day (60,000 g ÷ 250 g). Building 60 kg of new nucleotides daily would be impossible, food supplies fuel such as glucose rather than ATP, and ATP is not stored in fat.',
    optionExplanations: [
      'Building 60 kg of new adenine and ribose each day would be impossible and unnecessary. The same molecules are recycled between ATP and ADP instead of being rebuilt.',
      'ATP is not stored in fat tissue; fat stores energy as triglycerides. The body keeps only about 250 g of ATP at any moment.',
      'Food supplies fuels such as glucose and fats, not ATP. Cells make their own ATP by breaking down those fuels in cellular respiration.',
      'ATP is not stockpiled; cellular respiration continually re-phosphorylates ADP. Each molecule is recycled about 240 times a day (60,000 g ÷ 250 g).',
    ],
  },
  {
    type: 'mcq',
    topic: 'unit-3-cellular-energetics',
    question: 'Bacteria have no mitochondria, yet many make most of their ATP with an electron transport chain and ATP synthase. Where are these proteins located, and across which membrane is the $H^{+}$ gradient built?',
    options: [
      'In the plasma membrane; $H^{+}$ is pumped out of the cytoplasm across it.',
      'In the cell wall; $H^{+}$ is pumped into the cell wall across the capsule.',
      'In the nuclear envelope; $H^{+}$ is pumped into the space around the DNA.',
      'In the ribosomes; $H^{+}$ is pumped into the ribosomes across their membranes.',
    ],
    correctAnswer: 0,
    explanation:
      'In prokaryotes the electron transport chain and ATP synthase sit in the plasma membrane, which pumps $H^{+}$ out of the cytoplasm; $H^{+}$ flows back in through ATP synthase. Cell walls are porous and cannot hold a gradient, prokaryotes have no nuclear envelope, and ribosomes have no membranes.',
    optionExplanations: [
      'In prokaryotes the electron transport chain and ATP synthase sit in the plasma membrane, which pumps $H^{+}$ out of the cytoplasm. $H^{+}$ flows back in through ATP synthase, driving ATP synthesis.',
      'Cell walls are porous and cannot hold an ion gradient, and the electron transport chain is a membrane protein complex. A capsule is outside the cell and plays no role in ATP synthesis.',
      'Prokaryotes have no nuclear envelope; their DNA lies in the cytoplasm. The gradient must be built across a membrane that bacteria actually have, the plasma membrane.',
      'Ribosomes have no membranes, so no gradient can be built across them. They make proteins rather than ATP.',
    ],
  },
  {
    type: 'mcq',
    topic: 'unit-4-cell-communication-cell-cycle',
    stimulus: SET_WORM,
    question: 'What percentage of the body cells produced during development of a normal worm die by apoptosis?',
    options: [
      'About 14%',
      'About 12%',
      'About 88%',
      'About 1.3%',
    ],
    correctAnswer: 1,
    explanation:
      'Of the 1,090 cells produced, 131 die: 131 ÷ 1,090 ≈ 0.12, or about 12%. Dividing by the 959 surviving cells gives about 14%, 88% is the share that survive, and 1.3% misplaces the decimal point.',
    optionExplanations: [
      'About 14% comes from dividing 131 by the 959 surviving cells. The question asks what share of all 1,090 cells produced die, so the denominator is 1,090.',
      'Of the 1,090 cells produced, 131 die: 131 ÷ 1,090 ≈ 0.12, or about 12%.',
      'About 88% is the share of cells that survive (959 ÷ 1,090), not the share that die.',
      'About 1.3% misplaces the decimal point. The fraction 131 ÷ 1,090 is about 0.12, which is 12%.',
    ],
  },
  {
    type: 'mcq',
    topic: 'unit-4-cell-communication-cell-cycle',
    stimulus: SET_WORM,
    question: 'Which role for the protein made by gene D is best supported by the data?',
    options: [
      'It is needed for cells to divide, so worms without it form fewer cells.',
      'It protects cells from dying, so worms without it lose most of their cells.',
      'It is needed for the 131 cells to die, so without it they survive.',
      'It causes extra cells to form, so worms without it have more cells.',
    ],
    correctAnswer: 2,
    explanation:
      'Worms without D protein make the same 1,090 cells, but none die, so D is required for apoptosis. Cell production is unchanged, so D is not needed for division and does not cause extra cells to form; the extra cells in the mutants are the 131 that normally die. Protecting cells from death describes S, not D.',
    optionExplanations: [
      'Worms without D protein still make all 1,090 cells, so D is not needed for cell division. The extra adult cells are the 131 that normally die.',
      'This describes S, not D. Worms without D lose none of their cells; it is worms without S in which almost all cells die.',
      'Worms without D protein make the same 1,090 cells, but none of them die. D is therefore required for the 131 programmed deaths, and without it those cells survive.',
      'Cell production is unchanged without D: both normal and mutant worms make 1,090 cells. Mutant adults have more cells only because the 131 that normally die survive.',
    ],
  },
  {
    type: 'mcq',
    topic: 'unit-4-cell-communication-cell-cycle',
    stimulus: SET_WORM,
    question: 'Which role for the protein made by gene S is best supported by the data?',
    options: [
      'It triggers apoptosis in the 131 cells that are supposed to die during development.',
      'It is needed for the embryo to make its 1,090 cells before any of them can die.',
      'It breaks down the remains of dead cells so that the embryo can keep developing.',
      'It keeps apoptosis from happening in the cells that are meant to survive.',
    ],
    correctAnswer: 3,
    explanation:
      'Without S protein almost every cell dies, so S normally keeps cells that should live from undergoing apoptosis. If S triggered the programmed deaths, losing it would save cells, as losing D does. The data show cells dying, not failing to form, and the deaths themselves, not leftover debris, are what kill the embryos.',
    optionExplanations: [
      'If S triggered the programmed deaths, losing it would save cells, as losing D does. Instead, without S almost all cells die.',
      'The data show cells dying without S, not failing to form. Nothing indicates that S is needed to make the 1,090 cells.',
      'The deaths themselves, not leftover debris, are what the data show. Without S almost every cell dies, which points to S preventing death rather than clearing it up.',
      'Without S protein almost every cell dies, so S normally keeps cells that should live from undergoing apoptosis.',
    ],
  },
  {
    type: 'mcq',
    topic: 'unit-4-cell-communication-cell-cycle',
    stimulus: SET_WORM,
    question: 'Worms lacking both D and S protein have the same result as worms lacking only D protein. Which model of the pathway is most consistent with this result?',
    options: [
      'S works by blocking the death pathway that requires D, so without D no cells can die.',
      'D works by blocking S, so removing both proteins lets the death pathway run normally.',
      'D and S act on separate pathways, so removing both should kill even more cells.',
      'S is needed to make D, so worms without S cannot make any of the D protein at all.',
    ],
    correctAnswer: 0,
    explanation:
      'Losing S alone kills almost every cell, but losing D as well prevents all deaths, so the deaths caused by losing S require D; S must normally restrain cell death that is carried out through D. If D blocked S, or if both were removed and normal death resumed, the double mutant would show 131 deaths, not 0. Separate pathways would predict more deaths, and if S were needed to make D, worms without S would have no D and no deaths.',
    optionExplanations: [
      'Losing S alone kills almost every cell, but losing D as well prevents all deaths. The deaths caused by losing S require D, so S must normally restrain a death pathway that is carried out through D.',
      'If D blocked S, removing both would let the death pathway run normally, giving 131 deaths. The double mutant shows 0 deaths, not 131.',
      'Separate pathways would predict that removing both proteins kills even more cells. Instead the double mutant has no cell deaths at all.',
      'If S were needed to make D, worms without S would have no D and therefore no deaths. In fact worms without S lose almost all of their cells.',
    ],
  },
  {
    type: 'mcq',
    topic: 'unit-4-cell-communication-cell-cycle',
    question: 'When a blood vessel is damaged, platelets stick to the injury and release chemicals that attract and activate more platelets, which release more of the chemicals, until a plug seals the wound. This process is an example of',
    options: [
      'negative feedback, because the response returns the vessel to its normal state',
      'positive feedback, because the response amplifies itself as the platelet plug forms',
      'negative feedback, because the platelets reduce the chemical signal over time',
      'positive feedback, because the response reverses the original stimulus quickly',
    ],
    correctAnswer: 1,
    explanation:
      'Each activated platelet releases signals that activate more platelets, so the response reinforces itself until the plug forms, which is positive feedback. Negative feedback opposes a change and restores a set point, and the signal here increases rather than decreases. Reversing a stimulus is the opposite of what positive feedback does.',
    optionExplanations: [
      'Negative feedback opposes a change and restores a set point. Here each step increases the response further, which is the opposite of negative feedback.',
      'Each activated platelet releases chemicals that activate more platelets, so the response reinforces itself until the plug forms. A self-amplifying response is positive feedback.',
      'The chemical signal increases as more platelets are activated, not decreases. A response that reduces its own signal would be negative feedback, which is not what happens here.',
      'The response is positive feedback, but it does not reverse the original stimulus. Positive feedback amplifies a change; reversing a stimulus is what negative feedback does.',
    ],
  },
  {
    type: 'mcq',
    topic: 'unit-4-cell-communication-cell-cycle',
    question: 'Cultured cells respond to hormone H within a minute of its addition, and the response stops within a few minutes after the hormone is washed out of the medium, although the receptors are still present. Which property of signaling best explains why the response stops?',
    options: [
      'Each receptor is destroyed after it binds one hormone molecule, so the cells run out of receptors.',
      'The hormone is converted into the second messenger inside the cell, and that messenger is used up.',
      'Hormone binding to its receptor is reversible, so as H leaves the receptors the pathway shuts off.',
      'The cells stop transcribing the gene for the receptor whenever the hormone is present in the medium.',
    ],
    correctAnswer: 2,
    explanation:
      'Ligands bind receptors noncovalently and reversibly; when H is removed, the bound hormone dissociates, the receptors return to their inactive shape, and the downstream signal is switched off. The receptors are still present, so they were not destroyed or lost through reduced transcription, and the second messenger is made by the cell\'s own enzymes rather than from the hormone itself.',
    optionExplanations: [
      'The stem says the receptors are still present after the hormone is washed out, so they were not destroyed. The response stops for another reason.',
      'The second messenger is made by the cell\'s own enzymes, not from the hormone itself. Hormone H acts at its receptor and is not converted into a messenger.',
      'Ligands bind receptors noncovalently and reversibly. When H is removed, bound hormone dissociates, the receptors return to their inactive shape, and the downstream signal shuts off.',
      'The receptors are still present when the response stops, so they were not lost by reduced transcription. Changing transcription would also take longer than a few minutes.',
    ],
  },
  {
    type: 'mcq',
    topic: 'unit-4-cell-communication-cell-cycle',
    question: 'Normal cells grown in a culture dish divide until they form a single layer that covers the dish, and then stop. Cells taken from a tumor keep dividing and pile up in many layers. Which change in the tumor cells best explains this difference?',
    options: [
      'They have gained extra cell-cycle checkpoints, so each cell divides more times than normal.',
      'They have lost the ability to copy their DNA before they divide, so they divide faster.',
      'They divide only when growth factors are absent, so they keep dividing in the dish.',
      'They no longer stop dividing in response to signals from the neighbors they touch.',
    ],
    correctAnswer: 3,
    explanation:
      'Normal cells respond to contact with their neighbors by halting the cell cycle; tumor cells ignore these signals, so they keep dividing and pile up. Cells that could not copy their DNA could not keep dividing, cells divide in response to growth factors rather than their absence, and extra checkpoints would slow division rather than speed it.',
    optionExplanations: [
      'Checkpoints stop the cell cycle when conditions are wrong, so extra checkpoints would slow division rather than speed it. Tumor cells usually have lost checkpoint control.',
      'Cells that could not copy their DNA could not keep dividing successfully. DNA replication is required before each division.',
      'Cells divide in response to growth factors, not their absence. A cell that divided only without growth factors would not explain the piling-up seen in tumor cells.',
      'Normal cells halt the cell cycle when they contact their neighbors, so they stop at a single layer. Tumor cells ignore these signals, so they keep dividing and pile up.',
    ],
  },
  {
    type: 'mcq',
    topic: 'unit-5-heredity',
    question: 'Himalayan rabbits are white except for black fur on the ears, nose, feet and tail, the coolest parts of the body. If a patch of white fur on the back is shaved and an ice pack is kept on the skin while the fur regrows, the new fur is black. Which explanation best accounts for this?',
    options: [
      'An enzyme needed for black pigment works only in colder skin, so the environment affects the phenotype.',
      'The rabbit carries one genotype for the body fur and a different genotype for the ear fur.',
      'The cold causes a mutation in the skin cells of the back that makes them produce black pigment.',
      'Black fur grows wherever fur is shaved, because new hair cells always make more pigment than old cells.',
    ],
    correctAnswer: 0,
    explanation:
      'All the rabbit\'s cells have the same genotype, but the pigment enzyme it encodes is active only in cooler skin, so temperature determines where the genotype produces black fur. The cold does not cause mutations, all body cells share one genotype, and shaved patches kept at normal temperature regrow white fur.',
    optionExplanations: [
      'All of the rabbit\'s cells share the same genotype, but the pigment enzyme it encodes is active only in cooler skin. Temperature therefore determines where the genotype produces black fur.',
      'All of a rabbit\'s body cells have the same genotype. The difference between ear and body fur comes from temperature, as the ice-pack experiment shows.',
      'Cold does not cause mutations. The black fur appears because cooling lets the existing pigment enzyme work, not because the skin cells\' DNA changed.',
      'Shaving alone does not make fur grow back black; the ice pack is the key condition. Shaved patches kept at normal body temperature regrow white fur.',
    ],
  },
  {
    type: 'mcq',
    topic: 'unit-5-heredity',
    question: 'In a species of mouse, yellow coat (Y) is dominant to gray coat (y). Crosses between two yellow mice always produce about 2 yellow : 1 gray offspring, and some embryos fail to develop. Which explanation best accounts for these results?',
    options: [
      'Yellow is incompletely dominant, so the heterozygous mice are born gray.',
      'Mice with two Y alleles die before birth, so all yellow mice born are Yy.',
      'The Y allele is X-linked, so only female mice can ever be born yellow.',
      'Gray mice have genotype Yy, and yellow mice have genotype YY instead.',
    ],
    correctAnswer: 1,
    explanation:
      'A Yy × Yy cross gives 1 YY : 2 Yy : 1 yy; if YY embryos die, the surviving offspring are 2 yellow (Yy) : 1 gray (yy), and the dead embryos are the missing quarter. Gray heterozygotes or yellow YY mice could not produce this ratio from yellow × yellow crosses, and an X-linked allele would give different ratios in males and females.',
    optionExplanations: [
      'If heterozygotes were gray, a cross of two yellow mice could not produce a 2:1 ratio with gray offspring in this way. The stem also says Y is dominant to y, not incompletely dominant.',
      'A Yy × Yy cross gives 1 YY : 2 Yy : 1 yy. If YY embryos die, the survivors are 2 yellow (Yy) : 1 gray (yy), and the embryos that fail are the missing quarter.',
      'An X-linked allele would give different ratios in males and females. The stem describes the same 2:1 ratio from every yellow × yellow cross, with no difference by sex.',
      'The stem says Y is dominant, so a Yy mouse would be yellow, not gray. Two YY yellow parents could also never produce gray offspring.',
    ],
  },
  {
    type: 'mcq',
    topic: 'unit-5-heredity',
    stimulus:
      'In radishes, root shape shows incomplete dominance: LL plants have long roots, LS plants have oval roots and SS plants have round roots. A cross of two oval-rooted plants produced 200 offspring: 52 long, 88 oval and 60 round.\n\nChi-square critical values at p = 0.05: 3.84 (1 degree of freedom), 5.99 (2), 7.81 (3).',
    question: 'Which choice gives the correct chi-square value and conclusion for the hypothesis that these offspring fit a 1:2:1 ratio?',
    options: [
      'χ² ≈ 3.5; with 1 degree of freedom the critical value is 3.84, so the 1:2:1 hypothesis is not rejected.',
      'χ² ≈ 3.5; with 2 degrees of freedom the critical value is 5.99, so the 1:2:1 hypothesis is rejected.',
      'χ² ≈ 3.5; with 2 degrees of freedom the critical value is 5.99, so the 1:2:1 hypothesis is not rejected.',
      'χ² ≈ 7.0; with 2 degrees of freedom the critical value is 5.99, so the 1:2:1 hypothesis is rejected.',
    ],
    correctAnswer: 2,
    explanation:
      'Expected counts are 50 long, 100 oval and 50 round, so χ² = 2²/50 + 12²/100 + 10²/50 = 0.08 + 1.44 + 2.00 ≈ 3.5. Three classes give 3 − 1 = 2 degrees of freedom, and 3.5 is below 5.99, so the deviation is small enough to be due to chance and the hypothesis is not rejected. Using 1 degree of freedom is wrong for three classes, and 7.0 doubles the correct value.',
    optionExplanations: [
      'The χ² value is right, but three phenotype classes give 3 − 1 = 2 degrees of freedom, not 1. The correct critical value is 5.99.',
      'The χ² value and degrees of freedom are right, but the conclusion is reversed. Because 3.5 is below 5.99, the deviation could be due to chance and the hypothesis is not rejected.',
      'Expected counts are 50, 100, and 50, so χ² = 2²/50 + 12²/100 + 10²/50 ≈ 3.5. With 2 degrees of freedom the critical value is 5.99, and 3.5 is below it, so the 1:2:1 hypothesis is not rejected.',
      'About 7.0 doubles the correct chi-square value. The three terms add to 0.08 + 1.44 + 2.00 ≈ 3.5, which is below the critical value of 5.99.',
    ],
  },
  {
    type: 'mcq',
    topic: 'unit-5-heredity',
    question: 'A woman and a man who are both unaffected by a rare disorder have an affected daughter. Neither parent\'s family has a history of the disorder. Which mode of inheritance is most consistent with this family?',
    options: [
      'Y-linked',
      'X-linked recessive',
      'Autosomal dominant',
      'Autosomal recessive',
    ],
    correctAnswer: 3,
    explanation:
      'Two unaffected parents with an affected child must both carry a recessive allele, and an affected daughter of an unaffected father rules out X-linked recessive inheritance, because she would have to receive an affected X from him. A dominant allele would make at least one parent affected, and a Y-linked trait cannot appear in a daughter.',
    optionExplanations: [
      'A Y-linked trait passes only from fathers to sons and cannot appear in a daughter, who has no Y chromosome. The affected child here is a daughter.',
      'An affected daughter would have to receive an X carrying the allele from her father, who would then be affected. Her father is unaffected, which rules out X-linked recessive inheritance.',
      'A dominant allele would make at least one parent affected. Both parents here are unaffected, so the allele cannot be dominant.',
      'Two unaffected parents with an affected child must both carry a recessive allele. An affected daughter with an unaffected father fits autosomal recessive inheritance.',
    ],
  },
  {
    type: 'mcq',
    topic: 'unit-5-heredity',
    question: 'Two parents are both heterozygous carriers (Aa) of an allele for a recessive disorder. What is the probability that all three of their children will be unaffected?',
    options: [
      '27/64',
      '37/64',
      '1/64',
      '9/16',
    ],
    correctAnswer: 0,
    explanation:
      'Each child has a 3/4 chance of being unaffected, and births are independent events, so the probability that all three are unaffected is (3/4)³ = 27/64. The value 37/64 is the chance that at least one child is affected, 1/64 is the chance that all three are affected, and 9/16 is the result for only two children.',
    optionExplanations: [
      'Each child of two carriers has a 3/4 chance of being unaffected, and births are independent events. The probability that all three are unaffected is (3/4)³ = 27/64.',
      '37/64 is the chance that at least one child is affected, 1 − 27/64. The question asks for the chance that all three are unaffected.',
      '1/64 is the chance that all three children are affected, (1/4)³. The question asks for the chance that all three are unaffected.',
      '9/16 is (3/4)², the chance that two children are both unaffected. The question asks about three children, so a third factor of 3/4 is needed.',
    ],
  },
  {
    type: 'mcq',
    topic: 'unit-5-heredity',
    question: 'Some four-o\'clock plants have branches with all-green leaves and other branches with all-white leaves that lack working chloroplasts. Seeds from flowers on white branches always grow into white seedlings, and seeds from flowers on green branches always grow into green seedlings, whichever branch supplied the pollen. Which explanation best accounts for this pattern?',
    options: [
      'Leaf color is controlled by an X-linked gene, which reaches the seeds only from the pollen.',
      'Leaf color is controlled by genes in chloroplasts, which pass to seeds in the egg cytoplasm.',
      'Leaf color is controlled by a nuclear allele that blocks chloroplast formation in white branches.',
      'Leaf color is controlled by sunlight, so seedlings match the light their parent branch received.',
    ],
    correctAnswer: 1,
    explanation:
      'The seedlings always match the branch that produced the egg, regardless of the pollen, which is the pattern of genes outside the nucleus; chloroplasts, with their own DNA, are passed on in the cytoplasm of the egg, not by pollen. Plants of this kind do not have X-linked genes passed only by pollen, a nuclear allele would be inherited from both parents, and the seedlings are grown under the same light.',
    optionExplanations: [
      'In this cross, seedlings match the branch that produced the egg, whichever branch supplied the pollen. A gene reaching seeds only from pollen would make the seedlings match the pollen source instead.',
      'Seedlings always match the branch that produced the egg, regardless of the pollen. This is the pattern of genes outside the nucleus; chloroplasts and their DNA pass to offspring in the egg cytoplasm.',
      'A nuclear allele would be inherited from both parents, so pollen from another branch would affect the seedlings. The pattern follows only the egg-producing branch.',
      'The seedlings are grown under the same light, yet they still match the branch that produced the egg. The trait is inherited, not set by the light the parent branch received.',
    ],
  },
  {
    type: 'mcq',
    topic: 'unit-6-gene-expression-regulation',
    stimulus: SET_CODE3,
    question: 'Based on the results, which codon specifies phenylalanine (Phe)?',
    options: [
      'UUA',
      'AAA',
      'UUU',
      'UCU',
    ],
    correctAnswer: 2,
    explanation:
      'An mRNA made only of U contains only one possible codon, UUU, and it produced only Phe, so UUU codes for Phe. AAA must code for Lys, the only product of the all-A mRNA. UUA and UCU never occur in an all-U mRNA, so the results cannot assign Phe to either.',
    optionExplanations: [
      'UUA never occurs in an all-U mRNA, which contains only the codon UUU. The results cannot assign Phe to UUA.',
      'AAA is the only codon in the all-A mRNA, which produced only Lys. AAA therefore codes for Lys, not Phe.',
      'An mRNA made only of U contains only one possible codon, UUU, and it produced only Phe. UUU therefore codes for Phe.',
      'UCU does not occur in an all-U mRNA. It appears in the alternating UCUC… mRNA, which produced Ser and Leu, not Phe.',
    ],
  },
  {
    type: 'mcq',
    topic: 'unit-6-gene-expression-regulation',
    stimulus: SET_CODE3,
    question: 'The alternating UCUCUC… mRNA produced a polypeptide of alternating Ser and Leu. Taken with the all-U result, which conclusion about the code is best supported?',
    options: [
      'Codons are two bases long, so UC and CU are read alternately along the mRNA.',
      'Each base is one codon, so U codes for Ser and C codes for Leu in the chain.',
      'Codons are four bases long, so UCUC and CUCU are read alternately along the mRNA.',
      'Codons are three bases long, so UCU and CUC are read alternately along the mRNA.',
    ],
    correctAnswer: 3,
    explanation:
      'Read in triplets, UCUCUC… gives UCU, CUC, UCU, CUC…, two different codons in alternation, matching Ser–Leu–Ser–Leu. A two-base or four-base code would read the same codon (UC… or UCUC…) over and over and give a single repeated amino acid. A one-base code would make U code for Ser, but the all-U mRNA gave only Phe.',
    optionExplanations: [
      'A two-base code would read UC, UC, UC… over and over, giving a single repeated amino acid. The polypeptide had two alternating amino acids.',
      'A one-base code would make U code for Ser, but the all-U mRNA gave only Phe. Each base cannot be a codon on its own.',
      'A four-base code would read UCUC, UCUC… over and over, giving a single repeated amino acid. The polypeptide had two alternating amino acids.',
      'Read in triplets, UCUCUC… gives UCU, CUC, UCU, CUC… in alternation. Two different codons alternating matches the Ser–Leu–Ser–Leu polypeptide.',
    ],
  },
  {
    type: 'mcq',
    topic: 'unit-6-gene-expression-regulation',
    stimulus: SET_CODE3,
    question: 'Why must tRNAs be included in the mixture for any polypeptide to be made?',
    options: [
      'tRNAs bring specific amino acids and pair their anticodons with the codons of the mRNA.',
      'tRNAs carry the instructions for the amino acid sequence from the DNA to the ribosome.',
      'tRNAs form the peptide bonds between amino acids after leaving the ribosome together.',
      'tRNAs make the synthetic mRNA by copying a DNA template inside the cell-free mixture.',
    ],
    correctAnswer: 0,
    explanation:
      'Each tRNA carries a particular amino acid and has an anticodon that base-pairs with a matching codon, which is how the codon sequence is translated into an amino acid sequence. The mRNA, not tRNA, carries the sequence information, peptide bonds form within the ribosome, and the synthetic mRNA was made by the researchers rather than copied from DNA in the mixture.',
    optionExplanations: [
      'Each tRNA carries a particular amino acid and has an anticodon that base-pairs with a matching codon. This is how the codon sequence is translated into an amino acid sequence.',
      'The mRNA, not tRNA, carries the sequence instructions from DNA to the ribosome. In this experiment the synthetic mRNA supplied that information.',
      'Peptide bonds form within the ribosome while the tRNAs are bound there, not after the tRNAs leave. tRNAs deliver the amino acids.',
      'The synthetic mRNA was made by the researchers, not copied from DNA in the mixture. tRNAs do not synthesize mRNA; that is done by RNA polymerase.',
    ],
  },
  {
    type: 'mcq',
    topic: 'unit-6-gene-expression-regulation',
    stimulus: SET_CODE3,
    question: 'Each synthetic mRNA produces the same polypeptide whether the ribosomes and tRNAs come from bacteria or from mammals. This result best supports the claim that',
    options: [
      'bacterial and mammalian ribosomes are identical in size and in their structure',
      'bacteria and mammals use the same genetic code, consistent with common ancestry',
      'all organisms make the same proteins, so their genes must have identical sequences',
      'the genetic code changed in mammals so that it would match the code of bacteria',
    ],
    correctAnswer: 1,
    explanation:
      'The same codons specify the same amino acids in both systems, so the code is shared by very distantly related organisms, which is evidence that it was inherited from a common ancestor. Bacterial and mammalian ribosomes differ in size and structure, organisms make very different proteins from different genes, and nothing suggests the code changed to match bacteria.',
    optionExplanations: [
      'Bacterial and mammalian ribosomes differ in size and structure. The shared result shows that both read codons the same way, not that the ribosomes are identical.',
      'The same codons specify the same amino acids in both systems, so the code is shared by very distantly related organisms. This supports inheritance of the code from a common ancestor.',
      'Organisms make very different proteins from different genes. The experiment shows they read the same codons in the same way, not that their genes are identical.',
      'Nothing suggests the code changed in mammals to match bacteria. A shared code is best explained by inheritance from a common ancestor.',
    ],
  },
  {
    type: 'mcq',
    topic: 'unit-6-gene-expression-regulation',
    question: 'In sickle-cell disease, a single base substitution replaces glutamic acid, which has a charged R group, with valine, which has a nonpolar R group, at one position on the outer surface of hemoglobin. When oxygen is low, the altered hemoglobin molecules stick together into long fibers. Which explanation best links the mutation to the fibers?',
    options: [
      'The substitution creates a stop codon, so the shortened hemoglobin folds into long fibers.',
      'The substitution shifts the reading frame, so every amino acid after valine is changed.',
      'The nonpolar valine on the surface binds nonpolar regions on other hemoglobin molecules.',
      'The nonpolar valine forms peptide bonds with the surfaces of other hemoglobin molecules.',
    ],
    correctAnswer: 2,
    explanation:
      'Putting a nonpolar R group on the water-facing surface creates a sticky hydrophobic patch that interacts with hydrophobic regions of neighboring hemoglobin molecules, so the molecules stack into fibers. A codon for valine is not a stop codon, a substitution does not shift the reading frame, and molecules are held together by hydrophobic interactions, not new peptide bonds.',
    optionExplanations: [
      'A codon for valine is not a stop codon. The protein is full length, with valine in place of glutamic acid at one position.',
      'A single base substitution replaces one base, so it does not shift the reading frame. Only that one amino acid is changed.',
      'Putting a nonpolar valine on the water-facing surface creates a hydrophobic patch. It interacts with nonpolar regions of neighboring hemoglobin molecules, so they stack into long fibers.',
      'Separate hemoglobin molecules are held together by hydrophobic interactions, not new peptide bonds. Peptide bonds form only within a chain, on the ribosome.',
    ],
  },
  {
    type: 'mcq',
    topic: 'unit-6-gene-expression-regulation',
    question: 'Two different strains of influenza virus infect the same pig cell at the same time. Some new virus particles released from the cell carry RNA segments from both strains. This process is best described as',
    options: [
      'a point mutation caused by an error in copying the viral RNA',
      'horizontal transfer of a plasmid from one bacterium to another',
      'reverse transcription of the viral RNA into the host cell\'s DNA',
      'genome reassortment, a kind of genetic recombination of RNA',
    ],
    correctAnswer: 3,
    explanation:
      'When two strains infect one cell, their genome segments can be packaged together, combining genetic material from both and producing a new strain in a single step. Mixing whole RNA segments from two strains is called reassortment, a form of recombination. A point mutation changes one base rather than mixing genomes, influenza does not reverse-transcribe its RNA into host DNA, and plasmid transfer occurs between bacteria, not viruses.',
    optionExplanations: [
      'A point mutation changes one base in the RNA rather than mixing genetic material from two strains. Here new particles carry whole RNA segments from both strains.',
      'Plasmid transfer occurs between bacteria, not between viruses. The virus particles here combine RNA segments from two influenza strains inside one host cell.',
      'Influenza does not reverse-transcribe its RNA into host DNA. The new particles carry RNA segments, mixed from two strains.',
      'When two strains infect one cell, their genome segments can be packaged together. Mixing whole RNA segments in this way is reassortment, a form of recombination that can produce a new strain in one step.',
    ],
  },
  {
    type: 'mcq',
    topic: 'unit-6-gene-expression-regulation',
    question: 'In liver cells, a region of one chromosome is wrapped tightly around histone proteins, while in muscle cells the same region is loosely packed. Gene M lies in this region. Which prediction is best supported?',
    options: [
      'Gene M is transcribed more in muscle cells, where RNA polymerase can reach its DNA more easily.',
      'Gene M is transcribed equally in liver and muscle, because both have the same DNA sequence.',
      'Gene M has been deleted from liver cells, because tightly packed DNA is removed in the liver.',
      'Gene M is transcribed more in liver cells, because tight packing protects the gene\'s DNA.',
    ],
    correctAnswer: 0,
    explanation:
      'Loosely packed chromatin lets transcription factors and RNA polymerase reach the DNA, while tightly packed DNA is rarely transcribed, so gene M is more likely expressed in muscle cells. Tight packing reduces transcription rather than increasing it. Having the same DNA sequence does not mean the same expression, and packed DNA is still present, not deleted.',
    optionExplanations: [
      'Loosely packed chromatin lets transcription factors and RNA polymerase reach the DNA, while tightly packed DNA is rarely transcribed. Gene M is therefore more likely to be expressed in muscle cells.',
      'Having the same DNA sequence does not mean the same expression. Differences in chromatin packing control which genes each cell type transcribes.',
      'Tightly packed DNA is still present in liver cells, not deleted. Packing makes the gene hard to reach, which lowers transcription without removing the gene.',
      'This reverses the effect of packing. Tight packing reduces access by RNA polymerase, so it lowers transcription rather than increasing it.',
    ],
  },
  {
    type: 'mcq',
    topic: 'unit-6-gene-expression-regulation',
    question: 'A mutation changes the stop codon UAA at the end of a gene\'s coding sequence to CAA, which codes for glutamine. Which effect on the gene\'s protein is most likely?',
    options: [
      'It is shorter, because the ribosome stops when it reaches the changed codon at that spot.',
      'It is longer, because translation continues until the ribosome reaches another stop codon.',
      'It is never made, because transcription of the gene cannot end without a stop codon.',
      'It is unchanged, because a stop codon is not part of the mRNA that is being translated.',
    ],
    correctAnswer: 1,
    explanation:
      'With no stop codon at the usual place, the ribosome adds glutamine and keeps reading the mRNA until it meets a stop codon further along, so the protein gains extra amino acids. CAA is a sense codon, so the ribosome does not stop there. Stop codons signal the end of translation, not transcription, and they are part of the mRNA.',
    optionExplanations: [
      'CAA is a sense codon for glutamine, so the ribosome does not stop there. The protein is not shortened.',
      'With no stop codon at the usual place, the ribosome adds glutamine and keeps reading the mRNA until it reaches a stop codon further along. The protein gains extra amino acids.',
      'Stop codons signal the end of translation, not transcription. The gene is still transcribed, and translation simply continues past the usual end.',
      'Stop codons are part of the mRNA; they are how ribosomes know where to end translation. Changing one does affect the protein.',
    ],
  },
  {
    type: 'mcq',
    topic: 'unit-7-natural-selection',
    stimulus: SET_AMNIOTE,
    question: 'Based on the table, which group shares the most recent common ancestor with birds?',
    options: [
      'Mammals',
      'Lizards',
      'Crocodiles',
      'Sharks',
    ],
    correctAnswer: 2,
    explanation:
      'Crocodiles share every derived character that birds have except feathers, including the gizzard, which no other group has, so they share the most recent common ancestor with birds. Lizards lack the gizzard, mammals also lack the skull openings, and sharks lack all four characters.',
    optionExplanations: [
      'Mammals lack both the skull openings and the gizzard that birds have. They share only the amniotic egg with birds, so they are more distantly related than crocodiles.',
      'Lizards share the amniotic egg and skull openings with birds but lack the gizzard. Crocodiles share all three of these characters with birds, so they are closer relatives.',
      'Crocodiles share every derived character that birds have except feathers, including the gizzard, which no other group has. They share the most recent common ancestor with birds.',
      'Sharks are the outgroup and lack all four characters. They are the most distantly related of the groups to birds.',
    ],
  },
  {
    type: 'mcq',
    topic: 'unit-7-natural-selection',
    stimulus: SET_AMNIOTE,
    question: 'In the trees below, groups inside a pair of parentheses share a common ancestor not shared with groups outside them. Which tree is most consistent with the data?',
    options: [
      '((Sharks, Mammals), (Lizards, (Crocodiles, Birds)))',
      '(Sharks, ((Mammals, Lizards), (Crocodiles, Birds)))',
      '(Sharks, (Mammals, ((Lizards, Crocodiles), Birds)))',
      '(Sharks, (Mammals, (Lizards, (Crocodiles, Birds))))',
    ],
    correctAnswer: 3,
    explanation:
      'The characters are nested: the amniotic egg joins all four land groups, the skull openings join lizards, crocodiles and birds, and the gizzard joins crocodiles and birds, so the tree is (Sharks, (Mammals, (Lizards, (Crocodiles, Birds)))). Pairing mammals with lizards ignores the skull openings, pairing lizards with crocodiles ignores the gizzard, and pairing sharks with mammals ignores the amniotic egg.',
    optionExplanations: [
      'Pairing sharks with mammals ignores the amniotic egg, which mammals share with lizards, crocodiles, and birds but not with sharks.',
      'Pairing mammals with lizards ignores the skull openings, which lizards share with crocodiles and birds but not with mammals.',
      'Pairing lizards with crocodiles ignores the gizzard, which crocodiles share with birds but not with lizards.',
      'The characters are nested: the amniotic egg joins all four land groups, the skull openings join lizards, crocodiles, and birds, and the gizzard joins crocodiles and birds. This gives (Sharks, (Mammals, (Lizards, (Crocodiles, Birds)))).',
    ],
  },
  {
    type: 'mcq',
    topic: 'unit-7-natural-selection',
    stimulus: SET_AMNIOTE,
    question: 'A student groups lizards and crocodiles together as one clade, separate from birds. Why does the table not support this grouping?',
    options: [
      'Crocodiles share a more recent ancestor with birds than with lizards, so that clade must include birds.',
      'Lizards and crocodiles lack feathers, which shows that they are more closely related to each other.',
      'Lizards and crocodiles both lay amniotic eggs, which shows that they evolved from the same ancestor.',
      'Birds have no skull openings behind the eyes, so they cannot be placed in the same clade as reptiles.',
    ],
    correctAnswer: 0,
    explanation:
      'A clade includes an ancestor and all of its descendants; because crocodiles share the gizzard with birds, the ancestor of lizards and crocodiles is also an ancestor of birds, so any clade containing both lizards and crocodiles must include birds. Lacking feathers is an ancestral absence, not a shared derived character. The amniotic egg is shared by all four land groups, and the table shows that birds do have the skull openings.',
    optionExplanations: [
      'Crocodiles share the gizzard with birds, so the common ancestor of lizards and crocodiles is also an ancestor of birds. A clade must include all descendants of its ancestor, so it must include birds.',
      'Lacking feathers is an ancestral absence, not a shared derived character, so it cannot define a clade. Sharks and mammals also lack feathers.',
      'The amniotic egg is shared by all four land groups, including birds and mammals. It cannot set lizards and crocodiles apart from birds.',
      'The table shows that birds do have the skull openings behind each eye. That character groups birds with lizards and crocodiles rather than excluding them.',
    ],
  },
  {
    type: 'mcq',
    topic: 'unit-7-natural-selection',
    stimulus: SET_AMNIOTE,
    question: 'Researchers compare the DNA sequences of many genes in the five groups. Which result would conflict with the tree supported by the table?',
    options: [
      'Crocodile DNA is more similar to bird DNA than to lizard DNA.',
      'Lizard DNA is more similar to bird DNA than crocodile DNA is.',
      'Shark DNA differs more from bird DNA than mammal DNA does.',
      'Mammal DNA is about equally different from all three of the others.',
    ],
    correctAnswer: 1,
    explanation:
      'The tree places crocodiles closer to birds than lizards are, so bird DNA should be most similar to crocodile DNA; finding lizards closer to birds would conflict with it. Crocodiles resembling birds, sharks being the most different, and mammals being about equally distant from lizards, crocodiles and birds are all predicted by the tree.',
    optionExplanations: [
      'The tree places crocodiles and birds as closest relatives, so it predicts that crocodile DNA is most similar to bird DNA. This result agrees with the tree.',
      'The tree places crocodiles closer to birds than lizards are, so bird DNA should be most similar to crocodile DNA. Finding lizard DNA more similar would conflict with the tree.',
      'Sharks are the outgroup, the most distant relatives of birds, so the tree predicts their DNA differs the most. This result agrees with the tree.',
      'Mammals branch off before lizards, crocodiles, and birds split, so they are about equally related to those three groups. This result agrees with the tree.',
    ],
  },
  {
    type: 'mcq',
    topic: 'unit-7-natural-selection',
    stimulus: SET_AMNIOTE,
    question: 'Why are feathers not useful for working out how the five groups are related to one another?',
    options: [
      'Feathers evolved before the amniotic egg, so they mark the base of the cladogram.',
      'Feathers are not inherited, so they cannot be used as characters in a cladogram.',
      'Feathers appear in only one group, so they cannot identify the group closest to birds.',
      'Feathers are found in all five groups, so they cannot separate any of the groups.',
    ],
    correctAnswer: 2,
    explanation:
      'A derived character groups organisms only when two or more of them share it; feathers occur only in birds, so they distinguish birds but say nothing about which other group is closest to them. Feathers are inherited, they are found only in birds rather than all five groups, and the table places them as the most recent character, not the oldest.',
    optionExplanations: [
      'The table places feathers as the most recent character, found only in birds, not the oldest. The amniotic egg is shared far more widely, so feathers could not mark the base.',
      'Feathers are inherited, like the other characters in the table. They are not useful here because only one group has them.',
      'A derived character groups organisms only when two or more of them share it. Feathers occur only in birds, so they distinguish birds but say nothing about which group is closest to them.',
      'Feathers are found only in birds, not in all five groups. The table shows feathers absent in sharks, mammals, lizards, and crocodiles.',
    ],
  },
  {
    type: 'mcq',
    topic: 'unit-7-natural-selection',
    question: 'Two species of garter snake live in the same region. One lives mainly in water and the other mainly on land, so they rarely meet, although in captivity they can mate and produce fertile offspring. Which barrier keeps the species apart?',
    options: [
      'A postzygotic barrier, because their hybrid offspring are not fertile',
      'A mechanical barrier, because their reproductive parts do not fit',
      'A geographic barrier, because they live on two different continents',
      'A habitat barrier, because they live in different places in one area',
    ],
    correctAnswer: 3,
    explanation:
      'The species share a region but use different habitats, so they seldom encounter one another; this is habitat isolation, a prezygotic barrier. Fertile hybrids in captivity rule out a postzygotic barrier and a mechanical one, and living in the same region rules out separation on different continents.',
    optionExplanations: [
      'The two species produce fertile offspring in captivity, which rules out a postzygotic barrier. They are kept apart before mating.',
      'The snakes mate successfully in captivity, so their reproductive parts are compatible. A mechanical barrier would prevent that.',
      'The two species live in the same region, not on different continents. They are separated by habitat, not geography.',
      'The species share a region but use different habitats, water and land, so they seldom meet. This is habitat isolation, a prezygotic barrier.',
    ],
  },
  {
    type: 'mcq',
    topic: 'unit-7-natural-selection',
    question: 'Australia has many species of marsupial mammals that fill roles, such as gliding, burrowing and grazing, filled by placental mammals on other continents. Fossils show that marsupials reached Australia before it separated from other landmasses, and few placental mammals reached it until recently. Which explanation best accounts for the many marsupial species?',
    options: [
      'Marsupials diversified into many niches in Australia, with few placentals competing.',
      'Marsupials in Australia evolved from a reptile ancestor separately from all other mammals.',
      'Marsupials outcompeted and eliminated many placental mammals that had lived in Australia.',
      'The climate of Australia caused placental mammals living there to change into marsupials.',
    ],
    correctAnswer: 0,
    explanation:
      'After Australia became isolated, the marsupials there diversified into many ways of life with little competition from placental mammals, an adaptive radiation; similar roles on different continents are filled by unrelated lineages. The environment does not transform one group into another, marsupials share a mammalian ancestor with placentals, and the fossils indicate that few placentals reached Australia to be outcompeted.',
    optionExplanations: [
      'After Australia became isolated, marsupials there diversified into many ways of life with little competition from placental mammals. This adaptive radiation produced many marsupial species filling diverse roles.',
      'Marsupials share a mammalian ancestor with placental mammals; they did not evolve separately from a reptile ancestor. Similar roles are filled by different mammal lineages on different continents.',
      'The stem says few placental mammals reached Australia until recently. There were few placentals there for marsupials to outcompete and eliminate.',
      'The environment does not transform one group of organisms into another. Placental mammals did not change into marsupials; few placentals were present in Australia at all.',
    ],
  },
  {
    type: 'mcq',
    topic: 'unit-7-natural-selection',
    stimulus:
      'A computer simulated 10 populations of 10 individuals and 10 populations of 1,000 individuals. Each began with an allele frequency of 0.5, and there was no selection, mutation or migration. After 50 generations:\n\n| Population size | Populations in which the allele was lost or fixed | Allele frequencies in the other populations |\n|---|---|---|\n| 10 | 9 of 10 | 0.35 |\n| 1,000 | 0 of 10 | 0.43 to 0.57 |',
    question: 'Which conclusion is best supported by the simulation?',
    options: [
      'Selection favored one allele in the small populations, so most lost the other allele.',
      'Chance changes in allele frequency were much larger in the small populations.',
      'The large populations evolved faster, because they contained more individuals.',
      'Allele frequencies cannot change unless new mutations occur in the population.',
    ],
    correctAnswer: 1,
    explanation:
      'With no selection, mutation or migration, only chance (genetic drift) changed allele frequencies; it lost or fixed the allele in 9 of 10 small populations but moved the large ones only slightly (0.43–0.57). Selection was absent by design, the large populations changed less, not more, and the frequencies changed without any mutation.',
    optionExplanations: [
      'The simulation included no selection, so selection cannot explain the loss of alleles. Chance alone changed the allele frequencies.',
      'With no selection, mutation, or migration, only chance changed allele frequencies. Genetic drift lost or fixed the allele in 9 of 10 small populations but moved the large ones only slightly.',
      'The large populations changed less, not more: their allele frequencies stayed between 0.43 and 0.57. The small populations changed far more.',
      'No mutations occurred in the simulation, yet allele frequencies still changed, especially in the small populations. Genetic drift can change frequencies without new mutations.',
    ],
  },
  {
    type: 'mcq',
    topic: 'unit-7-natural-selection',
    question: 'When fatty acids are mixed with water, they spontaneously form small hollow vesicles. The vesicles can grow by taking up more fatty acids and can divide when shaken. These observations best support which hypothesis about the origin of life?',
    options: [
      'The first cells already had complex enzymes that built their membranes from fatty acids.',
      'Modern cells still arise from fatty acids in water whenever conditions are right.',
      'Simple membranes could form without enzymes and enclose early self-copying molecules.',
      'Fatty acids carried the hereditary information in the first cells that lived on Earth.',
    ],
    correctAnswer: 2,
    explanation:
      'Because fatty acid vesicles assemble, grow and divide without any enzymes, simple membranes could have formed on the early Earth and enclosed self-replicating molecules such as RNA, a step toward the first cells. No enzymes were needed, cells today arise only from existing cells, and fatty acids lack the varied sequence needed to store information.',
    optionExplanations: [
      'The vesicles formed, grew, and divided without any enzymes. The observations show that membranes did not require complex enzymes to form.',
      'Cells today arise only from existing cells. The experiment addresses how the first membranes could form, not how modern cells originate.',
      'Fatty acid vesicles assemble, grow, and divide without enzymes, so simple membranes could have formed on the early Earth. They could have enclosed self-replicating molecules such as RNA, a step toward the first cells.',
      'Fatty acids lack the varied sequence needed to store hereditary information. The observations concern membrane formation, not information storage.',
    ],
  },
  {
    type: 'mcq',
    topic: 'unit-7-natural-selection',
    question: 'Most mammals can make vitamin C. Humans, chimpanzees and other apes cannot, because each carries a broken copy of the same gene, disabled by the same mutation at the same position. Which explanation is best supported?',
    options: [
      'The mutation arose separately in each species, because each eats fruit rich in vitamin C.',
      'Each species lost the working gene because individuals stopped needing it during their lives.',
      'The broken gene was carried from one species to the next by viruses that infect primates.',
      'The mutation arose once in a common ancestor of these primates and was inherited by them.',
    ],
    correctAnswer: 3,
    explanation:
      'An identical disabling mutation at the same position in several species is best explained by one event in a shared ancestor whose descendants all inherited it, which is evidence of common ancestry. The same mutation arising independently in each species is very unlikely, genes are not lost because individuals stop needing them, and nothing suggests viral transfer.',
    optionExplanations: [
      'The same mutation arising independently at the same position in each species is very unlikely. Eating fruit rich in vitamin C does not cause a specific mutation to occur.',
      'Genes are not lost because individuals stop needing them during their lives; acquired changes are not inherited. The mutation must have been inherited.',
      'Nothing in the stem suggests viral transfer of the broken gene. The pattern is explained more simply by inheritance from a shared ancestor.',
      'An identical disabling mutation at the same position in several species is best explained by one event in a common ancestor. All of its descendants then inherited the broken gene.',
    ],
  },
  {
    type: 'mcq',
    topic: 'unit-8-ecology',
    stimulus: SET_MOUNTAIN,
    question: 'Which statement best describes the overall pattern in the data?',
    options: [
      'Most species shifted their ranges upslope as the mountain\'s temperatures rose.',
      'Most species shifted their ranges downslope as the mountain\'s temperatures rose.',
      'All five species kept the same elevation ranges between the two surveys.',
      'All five species expanded their ranges both upslope and downslope over time.',
    ],
    correctAnswer: 0,
    explanation:
      'Species A, B, C and E moved both their lower and upper limits to higher elevations, tracking cooler conditions as the climate warmed. None moved downslope, four of the five ranges changed, and only species D extended its range in one direction while keeping its lower limit.',
    optionExplanations: [
      'Species A, B, C, and E all moved their lower limits to higher elevations, and A, B, and E moved their upper limits higher too. Most species shifted upslope as the mountain warmed.',
      'No species moved downslope. Every lower limit either rose or stayed the same, as for species D.',
      'Every species changed its range at least slightly; even species D\'s upper limit rose from 1,100 to 1,150 m. The ranges did not stay the same.',
      'Most lower limits rose, so the ranges did not expand downslope. The pattern is a shift upward, not an expansion in both directions.',
    ],
  },
  {
    type: 'mcq',
    topic: 'unit-8-ecology',
    stimulus: SET_MOUNTAIN,
    question: 'At what average rate did the upper limit of species B move upslope?',
    options: [
      'About 300 m per decade',
      'About 60 m per decade',
      'About 6 m per decade',
      'About 30 m per decade',
    ],
    correctAnswer: 1,
    explanation:
      'The upper limit rose from 2,100 m to 2,400 m, or 300 m, over 50 years (5 decades): 300 ÷ 5 = 60 m per decade. The value 300 m is the total change, 6 m per decade divides by 50 years per decade, and 30 m per decade divides by 10 decades.',
    optionExplanations: [
      '300 m is the total change in species B\'s upper limit over the 50 years. Dividing by the 5 decades gives the average rate per decade.',
      'The upper limit rose from 2,100 m to 2,400 m, a change of 300 m, over 50 years, which is 5 decades. 300 ÷ 5 = 60 m per decade.',
      '6 m comes from dividing 300 m by 50, which is the rate per year, not per decade. Over 5 decades, the rate is 60 m per decade.',
      '30 m per decade divides the 300 m change by 10 decades. The surveys were 50 years apart, which is 5 decades.',
    ],
  },
  {
    type: 'mcq',
    topic: 'unit-8-ecology',
    stimulus: SET_MOUNTAIN,
    question: 'The range of species C shrank from 700 m to 400 m of elevation. If warming continues, which prediction about species C is best supported?',
    options: [
      'It will move to the lower slopes, where there is more space for its population to grow.',
      'It will evolve a tolerance for warmer temperatures within a few generations of warming.',
      'It may decline toward local extinction, because it cannot move above the summit.',
      'Its range will soon stop changing, because it already grows all the way to the summit.',
    ],
    correctAnswer: 2,
    explanation:
      'Species C already reaches the summit; as its lower limit rises with warming, its habitat shrinks with nowhere higher to go, so its population may decline. The lower slopes are getting warmer, the direction it is retreating from. Rapid evolution of heat tolerance is not supported by the data, and reaching the summit is what traps the species rather than stabilizing it.',
    optionExplanations: [
      'The lower slopes are getting warmer, and that is the direction species C is retreating from. Moving downslope would take it into conditions it is already leaving.',
      'The data give no evidence that species C can rapidly evolve heat tolerance. Its lower limit is rising, which shows it is losing warm habitat rather than adapting to it.',
      'Species C already reaches the 3,000 m summit. As its lower limit rises with warming, its habitat shrinks with nowhere higher to go, so its population may decline toward local extinction.',
      'Reaching the summit is what traps species C rather than stabilizing it. Its lower limit can keep rising with warming, so its range would keep shrinking.',
    ],
  },
  {
    type: 'mcq',
    topic: 'unit-8-ecology',
    stimulus: SET_MOUNTAIN,
    question: 'The lower limit of species D did not change, and its upper limit rose only slightly. Which explanation is most consistent with this result?',
    options: [
      'Species D was not affected because the warming did not reach elevations below 1,100 m.',
      'Species D is a producer, and producers are not affected by changes in their environment.',
      'Species D migrated to the summit, so its old range no longer appears in the survey data.',
      'Species D tolerates a wide range of temperatures, so warming has not restricted it.',
    ],
    correctAnswer: 3,
    explanation:
      'A species whose range barely shifted despite 1°C of warming is likely tolerant of the change, or limited by something other than temperature at its lower limit. Producers are affected by their environment, the 2020 data show D still at 500–1,150 m rather than at the summit, and the stimulus says every elevation warmed.',
    optionExplanations: [
      'The stimulus says the average temperature at each elevation rose about 1°C, including below 1,100 m. Warming did reach species D\'s range.',
      'Producers are affected by their environment, and species A, B, C, and E, which are also plants, clearly shifted. Being a producer does not make species D immune.',
      'The 2020 survey shows species D still growing at 500–1,150 m, not at the summit. Its range was recorded in both surveys.',
      'A species whose range barely shifted despite about 1°C of warming is likely tolerant of a wide range of temperatures. Warming therefore has not restricted where it can grow.',
    ],
  },
  {
    type: 'mcq',
    topic: 'unit-8-ecology',
    question: 'Zebra mussels introduced to a lake filter large amounts of phytoplankton from the water. Within a few years the water became much clearer, and the plants rooted on the lake bottom increased. Which explanation best accounts for the increase in bottom plants?',
    options: [
      'Clearer water let more light reach the lake bottom, so the plants there grew more.',
      'The mussels released nitrogen gas that fertilized the plants growing on the lake bottom.',
      'The mussels ate the herbivores that had been feeding on the plants on the lake bottom.',
      'Clearer water held more dissolved $CO_{2}$, so the bottom plants photosynthesized faster.',
    ],
    correctAnswer: 0,
    explanation:
      'Removing phytoplankton made the water less turbid, so more light penetrated to the bottom, where rooted plants could photosynthesize and grow; this is an indirect effect of the invader. Plants cannot use nitrogen gas, the mussels filter plankton rather than eating plant-eating animals, and water clarity does not determine how much $CO_{2}$ dissolves.',
    optionExplanations: [
      'Removing phytoplankton made the water clearer, so more light reached the lake bottom. Rooted plants there could photosynthesize more and grow, an indirect effect of the invading mussels.',
      'Plants cannot use nitrogen gas directly; they absorb nitrogen as nitrate or ammonium. Nothing in the stem suggests the mussels fertilized the plants.',
      'The stem says the mussels filter phytoplankton from the water. Nothing indicates they ate the herbivores that feed on bottom plants.',
      'Water clarity does not determine how much $CO_{2}$ dissolves in water. The plants grew more because more light reached them.',
    ],
  },
  {
    type: 'mcq',
    topic: 'unit-8-ecology',
    question: 'Seeds of a desert annual plant germinate only after a single rainfall of more than 25 mm, and not after several smaller rains that add up to the same total. How does this response most likely increase the plant\'s fitness?',
    options: [
      'Small rains damage the seed coats, so the seeds that wait for a large rain avoid being injured.',
      'A large rain soaks the soil deeply enough for seedlings to grow, flower and set seed before it dries.',
      'Germinating after a large rain lets the seedlings avoid all competition from any other plants.',
      'Waiting for a large rain lets the seeds measure the total rain of the year before they germinate.',
    ],
    correctAnswer: 1,
    explanation:
      'A single heavy rain wets the soil deeply enough to supply water for the whole short life cycle, so seedlings that sprout then are likely to reproduce, while seedlings that sprout after a light shower would die before setting seed. Nothing indicates that small rains damage seeds, other plants also germinate after heavy rain, and the seeds respond to a single rain rather than a yearly total.',
    optionExplanations: [
      'Nothing in the stem indicates that small rains damage seed coats. The seeds respond to how much rain falls at once, which relates to soil moisture.',
      'A single heavy rain wets the soil deeply enough to supply water for the whole short life cycle. Seedlings that sprout then are likely to reproduce before the soil dries.',
      'Other plants also germinate after heavy rain, so the seedlings do not avoid all competition. The benefit is enough water to complete the life cycle.',
      'The seeds respond to a single large rain, not to the year\'s total. Several small rains adding up to the same total do not trigger germination.',
    ],
  },
  {
    type: 'mcq',
    topic: 'unit-8-ecology',
    stimulus:
      'Oysters build their shells from calcium carbonate. When $CO_{2}$ dissolves in seawater, it lowers the pH. Researchers grew young oysters at the same temperature in seawater set to different pH values by adding $CO_{2}$.\n\n| Seawater pH | Shell growth (% of growth at pH 8.2) |\n|---|---|\n| 8.2 | 100 |\n| 8.0 | 81 |\n| 7.8 | 55 |\n| 7.6 | 30 |',
    question: 'Which conclusion about oyster shell growth is best supported?',
    options: [
      'Lower seawater pH has no effect on oysters, because their shells are protected by tissue.',
      'Oysters grow shells faster at lower pH, because they absorb more $CO_{2}$ to build shells.',
      'Rising $CO_{2}$ in seawater could reduce oyster shell growth by lowering the pH.',
      'Shell growth depends only on temperature, so the pH of seawater has no effect on it.',
    ],
    correctAnswer: 2,
    explanation:
      'Shell growth fell steadily as pH fell, to 30% of normal at pH 7.6, so the more $CO_{2}$ that dissolves in seawater and lowers its pH, the harder it is for oysters to build calcium carbonate shells. Growth clearly changed with pH, it fell rather than rose, and temperature was held constant.',
    optionExplanations: [
      'Shell growth fell steadily as pH fell, to 30% of normal at pH 7.6. Lower pH clearly affects oysters.',
      'This reverses the data. Shell growth fell, not rose, as more $CO_{2}$ was added and pH dropped.',
      'Shell growth fell as dissolved $CO_{2}$ lowered the pH, to 30% of normal at pH 7.6. Rising $CO_{2}$ in seawater could therefore make it harder for oysters to build calcium carbonate shells.',
      'Temperature was held constant in this experiment, yet shell growth changed with pH. Growth clearly depends on pH, not only on temperature.',
    ],
  },
  {
    type: 'mcq',
    topic: 'unit-8-ecology',
    question: 'Small cleaner fish eat parasites that they pick from the skin and mouths of larger reef fish, which do not eat the cleaners. On reefs where the cleaners were removed, the larger fish carried more parasites. Which type of interaction is this?',
    options: [
      'Commensalism, because only the cleaner fish benefit from the interaction',
      'Predation, because the larger fish could eat the cleaners at any time',
      'Parasitism, because the cleaner fish feed on the larger fish\'s skin',
      'Mutualism, because both species benefit from the interaction',
    ],
    correctAnswer: 3,
    explanation:
      'The cleaners get food and the larger fish lose parasites, as shown by the rise in parasites when cleaners were removed, so both benefit: mutualism. The larger fish clearly benefit, so it is not commensalism, the cleaners eat parasites rather than the host\'s tissue, and the larger fish do not eat the cleaners.',
    optionExplanations: [
      'The larger fish also benefit, as shown by the increase in parasites when the cleaners were removed. Both species benefit, so this is not commensalism.',
      'The stem says the larger fish do not eat the cleaners. A possible but unrealized threat does not make the relationship predation.',
      'The cleaners eat parasites, not the larger fish\'s tissue. The host benefits from losing parasites, so this is not parasitism.',
      'The cleaners get food and the larger fish lose parasites, as shown by the rise in parasites when cleaners were removed. Both species benefit, which is mutualism.',
    ],
  },
]
