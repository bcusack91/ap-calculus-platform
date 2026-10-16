/**
 * AP Biology diagnostic v2 — Unit 1: Chemistry of Life (CED 1.1–1.7).
 * Three 2-item data sets (isotope-labelling table, fatty-acid melting-point
 * graph, protein refolding table) plus standalone items.
 */
import type { ApDiagV2Item, ApDiagV2Stimulus } from '@/lib/ap-diagnostic-v2/types'

export const STIMULI: ApDiagV2Stimulus[] = [
  {
    id: 'bio-u1-s1',
    title: 'Radioactive labelling of four cell fractions',
    kind: 'table',
    content:
      'Bacteria were grown for several generations in a medium containing radioactive phosphorus (³²P) and radioactive sulfur (³⁵S). The cells were then broken open and separated into four fractions, each made mostly of one class of macromolecule. The radioactivity from each isotope was measured in each fraction, and a sample of each fraction was mixed with a nonpolar solvent.\n\n' +
      '| Fraction | ³²P (counts/min) | ³⁵S (counts/min) | Dissolves in nonpolar solvent? |\n' +
      '|---|---|---|---|\n' +
      '| W | 5,200 | 40 | No |\n' +
      '| X | 60 | 3,900 | No |\n' +
      '| Y | 4,100 | 30 | Yes |\n' +
      '| Z | 50 | 35 | No |\n\n' +
      'Counts below 100 counts/min are background.',
  },
  {
    id: 'bio-u1-s2',
    title: 'Melting points of 18-carbon fatty acids',
    kind: 'graph',
    content:
      'Figure 1 shows the melting points of four fatty acids. All four have a chain of 18 carbon atoms; they differ only in the number of carbon–carbon double bonds in the chain.',
    chart: {
      title: 'Figure 1. Melting point of 18-carbon fatty acids with different numbers of C=C double bonds',
      kind: 'line',
      xLabel: 'Number of C=C double bonds',
      xUnit: 'bonds',
      yLabel: 'Melting point',
      yUnit: '°C',
      xValues: [0, 1, 2, 3],
      yValues: [69, 13, -5, -11],
      seriesLabel: '18-carbon fatty acid',
    },
  },
  {
    id: 'bio-u1-s3',
    title: 'Unfolding and refolding an enzyme',
    kind: 'table',
    content:
      'A purified enzyme is a single polypeptide that contains several disulfide bridges. Researchers treated samples of the enzyme with urea, which disrupts hydrogen bonds and hydrophobic interactions, together with a reducing agent, which breaks disulfide bridges. They then removed the chemicals in different orders and measured enzyme activity.\n\n' +
      '| Sample | Treatment | Activity (% of untreated enzyme) |\n' +
      '|---|---|---|\n' +
      '| 1 | None | 100 |\n' +
      '| 2 | Urea + reducing agent, chemicals left in | 0 |\n' +
      '| 3 | Urea + reducing agent, then both removed together, slowly | 95 |\n' +
      '| 4 | Urea + reducing agent, then the reducing agent removed while urea was still present, then urea removed | 2 |',
  },
  {
    id: 'bio-u1-s4',
    title: 'Melting temperature of DNA and its G–C content',
    kind: 'graph',
    content:
      'Double-stranded DNA separates into single strands when it is heated. The temperature at which half of the DNA has separated is its melting temperature. Researchers measured the melting temperature of DNA samples that differed in the percentage of their base pairs that are G–C pairs. All samples were measured in the same salt solution. The results are shown in Figure 2.',
    chart: {
      title: 'Figure 2. Melting temperature of DNA samples with different G–C content',
      kind: 'scatter',
      xLabel: 'G–C base pairs',
      xUnit: '% of base pairs',
      yLabel: 'Melting temperature',
      yUnit: '°C',
      xValues: [30, 40, 50, 60, 70],
      yValues: [82, 86, 90, 94, 98],
      seriesLabel: 'DNA sample',
    },
  },
]

export const ITEMS: ApDiagV2Item[] = [
  {
    id: 'bio-u1-s1-q1',
    stimulusId: 'bio-u1-s1',
    unit: 'unit-1',
    topicSlug: 'proteins',
    difficulty: 'easy',
    stem: 'Based on the data, which fraction is most likely made of protein?',
    options: ['Fraction W', 'Fraction X', 'Fraction Y', 'Fraction Z'],
    correctIndex: 1,
    explanation:
      'Of the four macromolecule classes, only proteins contain sulfur (in the R groups of some amino acids), so the fraction labelled by ³⁵S and not by ³²P is protein: Fraction X. W and Y carry ³²P, the label for nucleic acids and phospholipids. Z carries neither label, as expected of a carbohydrate, which contains only C, H and O.',
  },
  {
    id: 'bio-u1-s1-q2',
    stimulusId: 'bio-u1-s1',
    unit: 'unit-1',
    topicSlug: 'nucleic-acids',
    difficulty: 'hard',
    stem: 'A student claims that Fraction W is made of phospholipids. Which evidence from the table best refutes this claim?',
    options: [
      'Fraction W contains ³²P, and phosphorus is found in phospholipids as well as in nucleic acids.',
      'Fraction W does not dissolve in the nonpolar solvent, but Fraction Y, which also contains ³²P, does.',
      'Fraction W contains less ³⁵S than Fraction X, so W cannot contain any lipid molecules at all.',
      'Fraction W contains more ³²P than Fraction Y, so W must be built from a larger number of phosphate groups.',
    ],
    correctIndex: 1,
    explanation:
      'Both nucleic acids and phospholipids contain phosphorus, so ³²P alone cannot separate them. Phospholipids have long nonpolar fatty-acid tails and dissolve in a nonpolar solvent; nucleic acids, with their charged phosphate backbone, do not. W carries ³²P but does not dissolve, while Y carries ³²P and does, so Y is the phospholipid fraction and W is nucleic acid. The ³²P observation supports the claim rather than refuting it; the ³⁵S comparison says nothing about lipids (lipids contain no sulfur either); and the amount of label depends on how much of each fraction was collected, not on its identity.',
  },
  {
    id: 'bio-u1-s2-q1',
    stimulusId: 'bio-u1-s2',
    unit: 'unit-1',
    topicSlug: 'lipids',
    difficulty: 'easy',
    stem: 'Which statement best describes the relationship shown in Figure 1?',
    options: [
      'Melting point falls as double bonds are added, and the largest drop comes with the first double bond.',
      'Melting point falls as double bonds are added, by about the same amount with each added bond.',
      'Melting point rises as double bonds are added, because each double bond makes the chain more rigid.',
      'Melting point stays about the same, because all four of the fatty acids have the same number of carbons.',
    ],
    correctIndex: 0,
    explanation:
      'The melting point drops from 69 °C (no double bonds) to 13 °C (one), a fall of 56 °C, then to −5 °C (a fall of 18 °C) and −11 °C (a fall of 6 °C). It falls with every added double bond, and the first drop is by far the largest, so the decreases are not equal. Melting point does not rise, and the chain length being equal does not keep it constant.',
  },
  {
    id: 'bio-u1-s2-q2',
    stimulusId: 'bio-u1-s2',
    unit: 'unit-1',
    topicSlug: 'lipids',
    difficulty: 'hard',
    stem: 'A fish lives in water at 5 °C, and its membranes must stay fluid at that temperature. Based on Figure 1, which of the four fatty acids would be above its melting point, and so liquid, at 5 °C?',
    options: [
      'Only the fatty acids with two or three double bonds',
      'Only the fatty acid with no double bonds in its chain',
      'The fatty acids with one, two or three double bonds',
      'All four fatty acids, since each melts below 70 °C',
    ],
    correctIndex: 0,
    explanation:
      'A fatty acid is liquid at temperatures above its melting point. From Figure 1, the melting points are 69 °C (no double bonds), 13 °C (one), −5 °C (two) and −11 °C (three). Only −5 °C and −11 °C are below 5 °C, so only the fatty acids with two or three double bonds are liquid at 5 °C; membranes of cold-water fish are rich in such tails. The fatty acid with one double bond melts at 13 °C, so it is still solid at 5 °C, and the saturated one is solid far above that. Melting below 70 °C does not mean melting below 5 °C.',
  },
  {
    id: 'bio-u1-s3-q1',
    stimulusId: 'bio-u1-s3',
    unit: 'unit-1',
    topicSlug: 'proteins',
    difficulty: 'medium',
    stem: 'Which two samples should be compared to show that the order in which the two chemicals are removed affects whether the enzyme regains its activity?',
    options: ['Samples 3 and 4', 'Samples 1 and 2', 'Samples 2 and 3', 'Samples 1 and 3'],
    correctIndex: 0,
    explanation:
      'Samples 3 and 4 received the same treatment and differ only in the order of removal: both chemicals together (95% activity) versus the reducing agent first while urea remained (2%). Samples 1 and 2 compare untreated with treated enzyme. Samples 2 and 3 show that removing the chemicals restores activity, not that order matters. Samples 1 and 3 compare the untreated enzyme with one removal order only.',
  },
  {
    id: 'bio-u1-s3-q2',
    stimulusId: 'bio-u1-s3',
    unit: 'unit-1',
    topicSlug: 'proteins',
    difficulty: 'hard',
    stem: 'Which explanation best accounts for the very low activity of Sample 4?',
    options: [
      'Disulfide bridges re-formed while the chain was still unfolded, joining the wrong cysteines and locking in an inactive shape.',
      'The reducing agent broke the peptide bonds between cysteines, so the polypeptide was cut into several separate fragments.',
      'The urea that remained in the sample after the reducing agent was gone bound to the active site and blocked the substrate.',
      'Removing the reducing agent first changed the order of the amino acids, so the enzyme now had a different primary structure.',
    ],
    correctIndex: 0,
    explanation:
      'In Sample 4 the reducing agent was removed while urea still kept the chain unfolded, so disulfide bridges formed between cysteines that happened to be near each other in the unfolded chain, not the pairs found in the active shape. These covalent cross-links held the chain in an inactive tertiary structure even after the urea was removed. A reducing agent breaks disulfide bridges, not peptide bonds; the urea was removed before activity was measured; and nothing in the treatment changes the amino acid sequence.',
  },
  {
    id: 'bio-u1-s4-q1',
    stimulusId: 'bio-u1-s4',
    unit: 'unit-1',
    topicSlug: 'nucleic-acids',
    difficulty: 'easy',
    stem: 'Based on Figure 2, what is the expected melting temperature of a DNA sample in which 45% of the base pairs are G–C pairs?',
    options: ['About 88 °C', 'About 84 °C', 'About 92 °C', 'About 45 °C'],
    correctIndex: 0,
    explanation:
      'The melting temperature rises by 4 °C for every 10 percentage points of G–C content (86 °C at 40%, 90 °C at 50%). Halfway between 40% and 50% is 45%, so the expected melting temperature is halfway between 86 °C and 90 °C, about 88 °C. 84 °C and 92 °C come from interpolating between the wrong pair of points, and 45 °C reads the G–C percentage as a temperature.',
  },
  {
    id: 'bio-u1-s4-q2',
    stimulusId: 'bio-u1-s4',
    unit: 'unit-1',
    topicSlug: 'nucleic-acids',
    difficulty: 'hard',
    stem: 'Two double-stranded DNA fragments of the same length are compared. In fragment P, 35% of the nucleotides contain adenine; in fragment Q, 15% contain adenine. Which prediction is best supported by Figure 2?',
    options: [
      'P melts near 82 °C, and Q melts near 98 °C.',
      'P melts near 84 °C, and Q melts near 76 °C.',
      'P melts near 96 °C, and Q melts near 104 °C.',
      'P and Q both melt at the same temperature, near 90 °C.',
    ],
    correctIndex: 0,
    explanation:
      'In double-stranded DNA, %A = %T. Fragment Q is 15% A + 15% T = 30% A–T, so 70% of its base pairs are G–C, and Figure 2 gives about 98 °C. Fragment P is 35% A + 35% T = 70% A–T, so 30% G–C, about 82 °C. Reading %A as the G–C percentage gives 84 °C and 76 °C. Taking G–C as 100% − %A (forgetting thymine) gives 65% and 85%, about 96 °C and 104 °C. Equal length does not mean equal composition, so 90 °C for both ignores the data.',
  },
  {
    id: 'bio-u1-001',
    unit: 'unit-1',
    topicSlug: 'water-properties',
    difficulty: 'medium',
    stem: 'On a hot, sunny day, the leaves of a well-watered plant are several degrees cooler than the surrounding air while their stomata are open. When the stomata close, leaf temperature rises above air temperature. Which property of water best explains the cooling while the stomata are open?',
    options: [
      'Water has a high heat of vaporization, so evaporation from the leaf carries away a large amount of heat.',
      'Water has a high specific heat, so the water stored inside the leaf soaks up the sun’s heat without warming.',
      'Water is cohesive, so the column of water in the stem pulls heat downward and away from the leaf.',
      'Water is a good solvent, so the minerals dissolved in the leaf absorb the sunlight before it can warm it.',
    ],
    correctIndex: 0,
    explanation:
      'Open stomata let water evaporate from the leaf (transpiration). Each molecule that evaporates must break its hydrogen bonds, so evaporation removes a large amount of heat; this is evaporative cooling from water’s high heat of vaporization. High specific heat only slows warming. It cannot cool the leaf below air temperature, and it would not stop when the stomata close. Cohesion moves water, not heat, up the stem, and dissolved minerals do not absorb sunlight.',
  },
  {
    id: 'bio-u1-002',
    unit: 'unit-1',
    topicSlug: 'water-properties',
    difficulty: 'medium',
    stem: 'Water (H₂O) boils at 100 °C, but hydrogen sulfide (H₂S), a molecule of similar shape and size, boils at about −60 °C. Sulfur attracts shared electrons much less strongly than oxygen does. Which explanation best accounts for the difference in boiling points?',
    options: [
      'Water molecules are polar, so they form hydrogen bonds with one another that must break before water boils.',
      'Water molecules are heavier than H₂S molecules, so they need more energy to move into the gas.',
      'The covalent bonds inside each water molecule must be broken for water to boil, and they are strong.',
      'H₂S molecules form hydrogen bonds with one another, which push them apart and lower the boiling point.',
    ],
    correctIndex: 0,
    explanation:
      'Oxygen pulls the shared electrons strongly, so each O–H bond is polar and water molecules attract one another through hydrogen bonds. Extra energy is needed to break those attractions before water can boil. Sulfur barely pulls the electrons, so H₂S molecules are nearly nonpolar and separate at a much lower temperature. H₂O (18 g/mol) is lighter than H₂S (34 g/mol), not heavier. Boiling separates molecules; it does not break the covalent bonds inside them. Hydrogen bonds hold molecules together and raise boiling points, and H₂S forms almost none.',
  },
  {
    id: 'bio-u1-003',
    unit: 'unit-1',
    topicSlug: 'water-properties',
    difficulty: 'easy',
    stem: 'Three compounds of similar size are tested for solubility in water at 25 °C. Compound 1 has five –OH groups and dissolves at about 900 g/L. Compound 2 has one –OH group and dissolves at about 6 g/L. Compound 3 has only C–H and C–C bonds and dissolves at less than 0.01 g/L. Which explanation best accounts for this pattern?',
    options: [
      'Polar –OH groups form hydrogen bonds with water, so a compound with more –OH groups dissolves more readily.',
      '–OH groups make a molecule larger, so it fits more easily into the spaces between water molecules.',
      'C–H bonds are strongly polar, so water molecules cluster around compound 3 and keep it out of solution.',
      '–OH groups react with water and break off the compound, which releases the remaining part into solution.',
    ],
    correctIndex: 0,
    explanation:
      'Water dissolves polar substances because its partial charges form hydrogen bonds with polar groups such as –OH. The more –OH groups a compound has, the more hydrogen bonds it forms with water and the more soluble it is; the hydrocarbon, with nonpolar C–H bonds, barely dissolves. The compounds are of similar size, so size cannot explain the pattern. C–H bonds are nonpolar, not strongly polar. Dissolving does not break covalent bonds within the solute.',
  },
  {
    id: 'bio-u1-004',
    unit: 'unit-1',
    topicSlug: 'carbohydrates',
    difficulty: 'hard',
    stem: 'Ten glucose molecules (C₆H₁₂O₆) are joined into one unbranched chain by dehydration synthesis. What is the molecular formula of the chain?',
    options: ['C₆₀H₁₀₂O₅₁', 'C₆₀H₁₂₀O₆₀', 'C₆₀H₁₀₀O₅₀', 'C₆₀H₁₀₄O₅₂'],
    correctIndex: 0,
    explanation:
      'Ten glucose molecules contain C₆₀H₁₂₀O₆₀. Joining 10 monomers in a chain makes 9 bonds, and each dehydration reaction removes one H₂O, so 9 H₂O (H₁₈O₉) are lost: C₆₀H₁₀₂O₅₁. C₆₀H₁₂₀O₆₀ removes no water. C₆₀H₁₀₀O₅₀ removes 10 water molecules (one per monomer instead of one per bond). C₆₀H₁₀₄O₅₂ removes only 8.',
  },
  {
    id: 'bio-u1-005',
    unit: 'unit-1',
    topicSlug: 'carbohydrates',
    difficulty: 'hard',
    stem: 'Cells in a potato tuber link most of the glucose they receive into starch. Based on the principles of osmosis, which is an advantage of storing glucose as starch rather than as free glucose?',
    options: [
      'One starch molecule adds far less to the solute concentration than the glucose it holds, so cells take in less water.',
      'Starch dissolves much more readily than glucose, so it draws extra water into the cells and keeps them turgid at all times.',
      'Starch molecules pass freely across the plasma membrane, so the cells can export stored energy without using transport proteins.',
      'Glucose stored as starch carries a strong negative charge, so it pulls positive ions into the cells and balances their water potential.',
    ],
    correctIndex: 0,
    explanation:
      'Osmotic effects depend on the number of dissolved solute particles. Thousands of glucose units packed into one starch molecule count as one particle instead of thousands, so the cell’s solute concentration stays low and it does not take up excess water and swell. Starch is much less soluble than glucose, not more; it is too large to cross the membrane; and starch is not strongly charged.',
  },
  {
    id: 'bio-u1-006',
    unit: 'unit-1',
    topicSlug: 'lipids',
    difficulty: 'medium',
    stem: 'Many cells store fat in lipid droplets. Each droplet has a core of triglycerides surrounded by a single layer of phospholipids that separates the core from the watery cytosol. How are the phospholipids in this layer most likely oriented?',
    options: [
      'Their fatty-acid tails point into the triglyceride core, and their phosphate heads face outward into the watery cytosol.',
      'Their phosphate heads point into the triglyceride core, and their fatty-acid tails face out into the cytosol.',
      'Their heads and tails alternate around the droplet, so half of the tails touch the watery cytosol.',
      'They lie flat on the droplet, so both their heads and their tails touch the core and the cytosol.',
    ],
    correctIndex: 0,
    explanation:
      'Phospholipids have a polar, hydrophilic phosphate head and nonpolar, hydrophobic fatty-acid tails. The nonpolar tails mix with the nonpolar triglycerides of the core, and the polar heads face the water of the cytosol, the same rule that orients phospholipids in a bilayer. Heads facing the oily core or tails facing the water would put polar groups in a nonpolar region and nonpolar groups in water, and neither alternating nor flat-lying phospholipids would shield the tails from water.',
  },
  {
    id: 'bio-u1-007',
    unit: 'unit-1',
    topicSlug: 'proteins',
    difficulty: 'easy',
    stem: 'Two polypeptides each contain exactly 20 alanines, 15 glycines, 10 lysines and 5 cysteines, yet they fold into different shapes. Which statement best explains this?',
    options: [
      'Their amino acids are in different orders, so their R groups interact at different places.',
      'Their peptide bonds form between different parts of the amino acids in each chain.',
      'One of the polypeptides has more R groups than the other, which gives it a larger surface.',
      'Their amino acids are joined to one another by hydrogen bonds rather than by peptide bonds.',
    ],
    correctIndex: 0,
    explanation:
      'Primary structure is the order of amino acids, and that order determines how the chain folds. Two chains with the same amino acid composition but different sequences place their R groups in different positions and fold into different shapes. Every peptide bond joins the carboxyl group of one amino acid to the amino group of the next. Both chains have 50 amino acids and therefore 50 R groups. Amino acids in a chain are joined by covalent peptide bonds, not hydrogen bonds.',
  },
  {
    id: 'bio-u1-008',
    unit: 'unit-1',
    topicSlug: 'proteins',
    difficulty: 'hard',
    stem: 'The active shape of an enzyme depends on an ionic interaction between a positively charged R group and a negatively charged carboxyl-containing R group. When the pH is lowered from 7 to 2, the enzyme loses activity. Which explanation is most consistent with this information?',
    options: [
      'The extra H⁺ breaks the peptide bonds near the active site, which shortens the polypeptide chain.',
      'The extra H⁺ binds the carboxyl R group and removes its charge, which breaks the ionic interaction.',
      'The extra H⁺ adds a second positive charge to the positive R group, which strengthens the interaction.',
      'The extra H⁺ turns the nonpolar R groups into polar ones, which moves them to the protein’s surface.',
    ],
    correctIndex: 1,
    explanation:
      'At low pH, the negatively charged carboxyl group (–COO⁻) picks up an H⁺ and becomes neutral –COOH. With one partner no longer charged, the ionic interaction holding the tertiary structure is lost, the shape of the active site changes, and activity falls. pH changes alter the charges on R groups; they do not hydrolyze peptide bonds. A positive R group does not gain a second charge, and a stronger interaction would not explain lost activity. Nonpolar R groups have no groups that gain or lose H⁺.',
  },
  {
    id: 'bio-u1-009',
    unit: 'unit-1',
    topicSlug: 'nucleic-acids',
    difficulty: 'easy',
    stem: 'A student builds a model of a short double-stranded DNA molecule. On the left strand, the 5′ end is at the top of the model. Which statement about the right strand is correct?',
    options: [
      'Its 3′ end is at the top of the model.',
      'Its 5′ end is at the top of the model.',
      'Both of its ends are 5′ ends.',
      'Both of its ends are 3′ ends.',
    ],
    correctIndex: 0,
    explanation:
      'The two strands of DNA are antiparallel: they run in opposite 5′→3′ directions. If the left strand’s 5′ end is at the top, the right strand’s 3′ end is at the top. A 5′ end at the top would make the strands parallel. Every strand has one 5′ end (a phosphate) and one 3′ end (a hydroxyl), so it cannot have two ends of the same kind.',
  },
  {
    id: 'bio-u1-010',
    unit: 'unit-1',
    topicSlug: 'nucleic-acids',
    difficulty: 'medium',
    stem: 'When a solution of DNA is heated to 95 °C, the two strands of each molecule separate, but each strand stays one unbroken chain of nucleotides. Which statement best explains this?',
    options: [
      'Hydrogen bonds between bases on opposite strands are much weaker than the covalent bonds joining nucleotides within a strand.',
      'Covalent bonds between bases on opposite strands are weaker than the hydrogen bonds that join nucleotides within a strand.',
      'Heat breaks the phosphate groups off each strand, which removes the charges that held the two strands together.',
      'Heat converts the deoxyribose in each strand into ribose, so the bases on the two strands can no longer pair.',
    ],
    correctIndex: 0,
    explanation:
      'Within a strand, nucleotides are joined by covalent bonds between the sugar of one and the phosphate of the next. The two strands are held together only by hydrogen bonds between paired bases, which are far weaker, so moderate heat separates the strands without breaking either backbone. The second option swaps the two bond types. Losing the phosphates would break the backbone, which the stem rules out, and heat does not convert deoxyribose into ribose.',
  },
]
