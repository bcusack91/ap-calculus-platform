/**
 * AP Biology diagnostic v2 — Unit 2: Cells (CED 2.1–2.10).
 * Four data sets (plasmolysis graph, organelle-volume table, reconstituted
 * vesicle table, hydropathy plot) plus standalone items.
 */
import type { ApDiagV2Item, ApDiagV2Stimulus } from '@/lib/ap-diagnostic-v2/types'

export const STIMULI: ApDiagV2Stimulus[] = [
  {
    id: 'bio-u2-s1',
    title: 'Plasmolysis of leaf cells in salt solutions',
    kind: 'graph',
    content:
      'Leaves of the aquatic plant *Elodea* were placed in NaCl solutions of six concentrations at 20 °C (293 K). After 20 minutes, a student counted the percentage of leaf cells in which the plasma membrane had pulled away from the cell wall (plasmolysis). The results are shown in Figure 1. In a plasmolyzed cell, the pressure potential is zero.',
    chart: {
      title: 'Figure 1. Percentage of Elodea leaf cells plasmolyzed after 20 minutes in NaCl solutions',
      kind: 'line',
      xLabel: 'NaCl concentration',
      xUnit: 'M',
      yLabel: 'Cells plasmolyzed',
      yUnit: '%',
      xValues: [0, 0.1, 0.2, 0.3, 0.4, 0.5],
      yValues: [0, 0, 8, 50, 92, 100],
      seriesLabel: 'Elodea leaf cells',
    },
  },
  {
    id: 'bio-u2-s2',
    title: 'Organelle volumes in four cell types',
    kind: 'table',
    content:
      'Researchers used electron micrographs to estimate the percentage of total cell volume taken up by four kinds of organelles in four types of animal cells.\n\n' +
      '| Cell type | Rough ER (% of volume) | Golgi complex (% of volume) | Mitochondria (% of volume) | Lysosomes (% of volume) |\n' +
      '|---|---|---|---|---|\n' +
      '| 1 | 20 | 8 | 7 | 1 |\n' +
      '| 2 | 2 | 1 | 35 | 1 |\n' +
      '| 3 | 4 | 3 | 8 | 12 |\n' +
      '| 4 | 3 | 2 | 6 | 1 |',
  },
  {
    id: 'bio-u2-s3',
    title: 'Transport into artificial vesicles',
    kind: 'table',
    content:
      'Researchers made artificial vesicles from phospholipids. Some vesicles also had one purified membrane protein (P or Q) inserted into the bilayer, and in some, ATP was supplied. Each vesicle started with no glucose inside and was placed in 10 mM glucose. Each vesicle also started with 50 mM K⁺ inside and was placed in 5 mM K⁺. The researchers recorded whether each substance moved INTO the vesicles.\n\n' +
      '| Vesicle | Protein inserted | ATP supplied | Glucose moved in? | K⁺ moved in? |\n' +
      '|---|---|---|---|---|\n' +
      '| 1 | None | No | No | No |\n' +
      '| 2 | P | No | Yes | No |\n' +
      '| 3 | Q | No | No | No |\n' +
      '| 4 | Q | Yes | No | Yes |',
  },
  {
    id: 'bio-u2-s4',
    title: 'Hydropathy plot of a membrane protein',
    kind: 'graph',
    content:
      'A hydropathy plot shows how hydrophobic each region of a polypeptide is. Each point is the average hydrophobicity of the 20 amino acids centered on that position; positive values are hydrophobic and negative values are hydrophilic. A stretch of about 20 amino acids with values above +1.6 is hydrophobic enough to span the lipid bilayer. Figure 2 shows the plot for a 300-amino-acid plasma membrane protein.',
    chart: {
      title: 'Figure 2. Hydropathy plot of a 300-amino-acid membrane protein',
      kind: 'line',
      xLabel: 'Amino acid position',
      xUnit: 'residue number',
      yLabel: 'Average hydrophobicity',
      yUnit: 'index units',
      xValues: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200, 210, 220, 230, 240, 250, 260, 270, 280, 290, 300],
      yValues: [-1.2, -0.9, 0.4, 2.1, 2.4, 2.0, 0.2, -1.1, -1.6, -1.3, -0.8, 0.5, 2.2, 2.5, 2.1, 0.3, -1.0, -1.4, -0.9, -0.6, 0.6, 2.0, 2.3, 2.2, 0.1, -1.2, -1.5, -1.1, -1.3, -1.0],
      seriesLabel: 'Hydrophobicity (20-residue window)',
      hidePointLabels: true,
    },
  },
]

export const ITEMS: ApDiagV2Item[] = [
  {
    id: 'bio-u2-s1-q1',
    stimulusId: 'bio-u2-s1',
    unit: 'unit-2',
    topicSlug: 'cell-membrane-transport',
    difficulty: 'easy',
    stem: 'Based on Figure 1, at about what NaCl concentration were half of the leaf cells plasmolyzed?',
    options: ['0.3 M', '0.2 M', '0.4 M', '0.5 M'],
    correctIndex: 0,
    explanation:
      'The curve passes through 50% plasmolyzed at 0.3 M NaCl. At 0.2 M only 8% of cells were plasmolyzed, at 0.4 M 92%, and at 0.5 M all of them.',
  },
  {
    id: 'bio-u2-s1-q2',
    stimulusId: 'bio-u2-s1',
    unit: 'unit-2',
    topicSlug: 'cell-membrane-transport',
    difficulty: 'medium',
    stem: 'Which conclusion about the leaf cells is best supported by Figure 1?',
    options: [
      'Most of the cells have a solute potential close to that of 0.3 M NaCl.',
      'Most of the cells contain dissolved NaCl at a concentration of exactly 0.3 M.',
      'Most of the cells gain water in 0.5 M NaCl, because its solute concentration is the highest.',
      'Most of the cells have a water potential of zero, because they lose water in every solution tested.',
    ],
    correctIndex: 0,
    explanation:
      'A cell just begins to plasmolyze when the solution’s water potential equals the cell’s solute potential (its pressure potential has fallen to zero). Half the cells plasmolyze at 0.3 M, so a typical cell’s solute potential is about that of 0.3 M NaCl. Cells contain many different solutes, so an equal solute potential does not mean they contain 0.3 M NaCl. In 0.5 M NaCl, the most concentrated solution, cells lose water and all plasmolyze. No cells plasmolyzed at 0 or 0.1 M, so they did not lose water in every solution.',
  },
  {
    id: 'bio-u2-s1-q3',
    stimulusId: 'bio-u2-s1',
    unit: 'unit-2',
    topicSlug: 'cell-membrane-transport',
    difficulty: 'hard',
    stem: 'Using $\\Psi_s = -iCRT$, with $i = 2$ for NaCl and $R = 0.0831$ L·bar/(mol·K), what is the best estimate of the solute potential of a typical leaf cell?',
    options: ['−14.6 bars', '−7.3 bars', '−1.0 bar', '+14.6 bars'],
    correctIndex: 0,
    explanation:
      'A typical cell starts to plasmolyze in 0.3 M NaCl, where its pressure potential is zero and its solute potential equals that of the solution. Ψs = −(2)(0.3 mol/L)(0.0831 L·bar/(mol·K))(293 K) ≈ −14.6 bars. −7.3 bars leaves out i = 2 (NaCl releases two ions). −1.0 bar uses 20 °C instead of 293 K. +14.6 bars drops the negative sign; solute potential is never positive.',
  },
  {
    id: 'bio-u2-s2-q1',
    stimulusId: 'bio-u2-s2',
    unit: 'unit-2',
    topicSlug: 'cell-organelles',
    difficulty: 'easy',
    stem: 'Based on the data, which cell type is most likely specialized to secrete large amounts of a protein?',
    options: ['Cell type 1', 'Cell type 2', 'Cell type 3', 'Cell type 4'],
    correctIndex: 0,
    explanation:
      'Secreted proteins are made by ribosomes on the rough ER, then modified and packaged by the Golgi complex for export. Cell type 1 has by far the most rough ER (20%) and Golgi (8%). Cell type 2 is dominated by mitochondria, cell type 3 by lysosomes, and cell type 4 has no organelle that stands out.',
  },
  {
    id: 'bio-u2-s2-q2',
    stimulusId: 'bio-u2-s2',
    unit: 'unit-2',
    topicSlug: 'cell-organelles',
    difficulty: 'medium',
    stem: 'Which function is cell type 3 most likely specialized to perform?',
    options: [
      'Engulfing bacteria and breaking them down with hydrolytic enzymes',
      'Making large amounts of ATP to power continuous muscle contraction',
      'Packaging large amounts of protein hormone into secretory vesicles',
      'Copying its DNA rapidly in preparation for repeated cell divisions',
    ],
    correctIndex: 0,
    explanation:
      'Lysosomes are membrane sacs of hydrolytic enzymes that digest material, including material taken in by endocytosis. Cell type 3 has 12% of its volume in lysosomes, far more than the others, which fits a cell that engulfs and digests bacteria. Heavy ATP production fits the mitochondria-rich cell type 2. Protein secretion fits cell type 1, with its rough ER and Golgi. Copying DNA happens in the nucleus and is not reflected in any of the organelles measured.',
  },
  {
    id: 'bio-u2-s3-q1',
    stimulusId: 'bio-u2-s3',
    unit: 'unit-2',
    topicSlug: 'cell-membrane-transport',
    difficulty: 'medium',
    stem: 'Which statement about protein P is best supported by the data?',
    options: [
      'It lets glucose cross the bilayer down its concentration gradient without an energy input.',
      'It pumps glucose against its concentration gradient, using ATP that the vesicle already holds.',
      'It lets K⁺ cross the bilayer down its gradient, which makes glucose follow it into the vesicle.',
      'It makes the whole bilayer more permeable, so any small solute can now leak across it freely.',
    ],
    correctIndex: 0,
    explanation:
      'Vesicle 1 shows that a bare bilayer does not let glucose through. With protein P and no ATP (vesicle 2), glucose moved in from 10 mM outside to 0 mM inside, which is down its gradient, so P is a transport protein for facilitated diffusion. No ATP was supplied to vesicle 2, and glucose was moving down its gradient, so nothing had to pump it. K⁺ did not move in vesicle 2, so P does not carry K⁺, and P does not make the bilayer leaky to every solute.',
  },
  {
    id: 'bio-u2-s3-q2',
    stimulusId: 'bio-u2-s3',
    unit: 'unit-2',
    topicSlug: 'cell-membrane-transport',
    difficulty: 'hard',
    stem: 'Which conclusion about protein Q is best supported by the data?',
    options: [
      'Q is a channel that lets K⁺ diffuse into the vesicle down its concentration gradient.',
      'Q uses energy from ATP to move K⁺ into the vesicle against its concentration gradient.',
      'Q moves glucose into the vesicle, and the glucose then pulls K⁺ in along with it.',
      'Q blocks the movement of K⁺ out of the vesicle unless ATP is present to open it.',
    ],
    correctIndex: 1,
    explanation:
      'K⁺ starts at 50 mM inside and 5 mM outside, so moving K⁺ in is moving it against its concentration gradient. K⁺ moved in only when both Q and ATP were present (vesicle 4, not vesicle 3), so Q is a pump that uses ATP: active transport. A channel would let K⁺ flow out, down its gradient, not in. Glucose did not move in either Q vesicle, so it cannot drive K⁺ uptake. The data record movement into the vesicle, and ATP made K⁺ move in, not merely stop leaving.',
  },
  {
    id: 'bio-u2-s4-q1',
    stimulusId: 'bio-u2-s4',
    unit: 'unit-2',
    topicSlug: 'cell-membrane-transport',
    difficulty: 'easy',
    stem: 'Based on Figure 2, how many times does the polypeptide most likely cross the plasma membrane?',
    options: ['Three', 'One', 'Six', 'Thirty'],
    correctIndex: 0,
    explanation:
      'Three separate stretches (around positions 40–60, 130–150 and 220–240) rise above +1.6, and each is hydrophobic enough to span the bilayer once, so the chain crosses the membrane three times. One counts only the highest peak. Six counts each peak twice (once for each side). Thirty counts the plotted points, not the hydrophobic stretches.',
  },
  {
    id: 'bio-u2-s4-q2',
    stimulusId: 'bio-u2-s4',
    unit: 'unit-2',
    topicSlug: 'cell-membrane-transport',
    difficulty: 'hard',
    stem: 'A mutation replaces most of the amino acids between positions 130 and 150 with amino acids that have charged R groups; the rest of the protein is unchanged. Based on Figure 2, how many times would the mutant protein most likely cross the membrane?',
    options: [
      'Twice, because only two stretches would still be hydrophobic enough to span the bilayer',
      'Three times, because charged R groups interact with the fatty-acid tails as well as nonpolar ones',
      'Four times, because the charged stretch would split into two shorter stretches that each cross',
      'Once, because one charged stretch makes the neighboring stretches of the chain hydrophilic too',
    ],
    correctIndex: 0,
    explanation:
      'Figure 2 shows three stretches hydrophobic enough to span the bilayer, near 40–60, 130–150 and 220–240. Charged R groups cannot sit among the nonpolar fatty-acid tails, so the mutated middle stretch would no longer span the membrane, leaving two crossings. Charged R groups are repelled by the hydrophobic interior, not attracted to it. A charged stretch is too hydrophilic to cross at all, so it would not form two crossings. The stretches at 40–60 and 220–240 keep their own nonpolar amino acids, so they stay hydrophobic.',
  },
  {
    id: 'bio-u2-001',
    unit: 'unit-2',
    topicSlug: 'prokaryotic-eukaryotic-cells',
    difficulty: 'medium',
    stem: 'Electron micrographs of a photosynthetic bacterium show stacks of internal membranes that hold its light-absorbing pigments. The cell has no nucleus and no membrane-bound organelles. Which statement best describes this cell?',
    options: [
      'It is a eukaryote, because any cell with internal membranes must be eukaryotic.',
      'It is a prokaryote that has specialized internal regions, even without organelles.',
      'It is a prokaryote that contains chloroplasts, which hold the pigments it uses.',
      'It is a eukaryote that has lost its nucleus but has kept all of its other organelles.',
    ],
    correctIndex: 1,
    explanation:
      'Prokaryotes lack membrane-bound organelles but can have internal regions with specialized structures and functions, such as the photosynthetic membranes of cyanobacteria. Having internal membranes does not make a cell eukaryotic; the absence of a nucleus and membrane-bound organelles marks this cell as a prokaryote. Chloroplasts are organelles, and the stem rules them out. A eukaryote that lost its nucleus would not be called a bacterium, and the stem says there are no organelles.',
  },
  {
    id: 'bio-u2-002',
    unit: 'unit-2',
    topicSlug: 'cell-membrane-transport',
    difficulty: 'medium',
    stem: 'An antibiotic weakens the cell wall of growing bacteria without damaging their plasma membrane. Bacteria treated with the antibiotic survive in a solution that is isotonic to their cytoplasm but burst in fresh water. Which explanation is best supported?',
    options: [
      'In fresh water, water enters the cells by osmosis, and without a strong wall the cells cannot resist the swelling.',
      'In fresh water, water leaves the cells by osmosis, and the cells shrink until their weakened walls collapse inward.',
      'In fresh water, the antibiotic becomes more toxic, and it then dissolves the plasma membrane of each bacterial cell.',
      'In the isotonic solution, the cells pump out the extra water using ATP, so they do not need their wall to stay intact.',
    ],
    correctIndex: 0,
    explanation:
      'Fresh water is hypotonic to the cytoplasm, so water moves into the cells. Normally the cell wall pushes back and protects the cell from osmotic lysis. With the wall weakened, the cells swell until they burst. In the isotonic solution there is no net water movement, so the weakened wall is not tested. Water moves into, not out of, cells in fresh water. The stem says the antibiotic leaves the membrane intact, and cells do not pump water out with ATP in an isotonic solution.',
  },
  {
    id: 'bio-u2-003',
    unit: 'unit-2',
    topicSlug: 'cell-membrane-transport',
    difficulty: 'medium',
    stem: 'The rates at which four substances cross an artificial bilayer containing no proteins were measured. Oxygen crossed fastest, water crossed more slowly, and glucose and Na⁺ crossed far more slowly still. Which statement best explains why water crosses faster than glucose?',
    options: [
      'Water is a small, uncharged polar molecule that can pass between the phospholipids in small amounts.',
      'Water is nonpolar, so it dissolves in the fatty-acid tails and crosses as easily as oxygen does.',
      'Water passes through aquaporins in the bilayer, while glucose needs a carrier the bilayer lacks.',
      'Water carries a charge, so it is pulled across the bilayer by the charged phosphate heads.',
    ],
    correctIndex: 0,
    explanation:
      'The hydrophobic interior of the bilayer lets small nonpolar molecules like O₂ through freely. Small polar, uncharged molecules such as water cross in small amounts, while large polar molecules like glucose and ions like Na⁺ barely cross without transport proteins. Water is polar, not nonpolar, and it crossed more slowly than oxygen. The bilayer contains no proteins, so there are no aquaporins. Water molecules are uncharged overall.',
  },
  {
    id: 'bio-u2-004',
    unit: 'unit-2',
    topicSlug: 'cell-organelles',
    difficulty: 'medium',
    stem: 'A toxin prevents transport vesicles from fusing with the plasma membrane but does not affect any other step of protein processing. In a cell that secretes a digestive enzyme, where would the enzyme most likely accumulate?',
    options: [
      'In the rough ER, because the enzyme can no longer be folded there',
      'In vesicles near the plasma membrane, because exocytosis is blocked',
      'In the cytosol, because ribosomes can no longer bind the rough ER',
      'In lysosomes, because the cell redirects the enzyme for digestion',
    ],
    correctIndex: 1,
    explanation:
      'A secreted enzyme is made on the rough ER, processed in the Golgi and carried to the cell surface in vesicles that release it by fusing with the plasma membrane (exocytosis). If only that fusion step is blocked, the earlier steps still work, so loaded vesicles pile up just inside the plasma membrane. Folding in the ER and ribosome binding are untouched by the toxin. Nothing in the stem suggests the enzyme is rerouted to lysosomes.',
  },
  {
    id: 'bio-u2-005',
    unit: 'unit-2',
    topicSlug: 'prokaryotic-eukaryotic-cells',
    difficulty: 'easy',
    stem: 'Bacteria, archaea and eukaryotes all have ribosomes made of ribosomal RNA and protein, and all use them to translate mRNA. This observation best supports which claim?',
    options: [
      'All three domains of life share a common ancestor.',
      'Ribosomes evolved separately in each of the three domains.',
      'Only eukaryotes can make proteins from an mRNA template.',
      'Ribosomes are membrane-bound organelles in all three domains.',
    ],
    correctIndex: 0,
    explanation:
      'A complex structure shared by every known form of life, built from the same kinds of molecules and doing the same job, is best explained by inheritance from a common ancestor. Independent origins in each domain would not be expected to produce the same rRNA-and-protein machine. The stem says all three domains translate mRNA. Ribosomes have no membrane.',
  },
  {
    id: 'bio-u2-006',
    unit: 'unit-2',
    topicSlug: 'cell-organelles',
    difficulty: 'medium',
    stem: 'For a sphere, surface area = $4\\pi r^2$ and volume = $\\frac{4}{3}\\pi r^3$. A spherical cell grows from a radius of 2 µm to a radius of 4 µm. How does its surface area-to-volume ratio change?',
    options: [
      'It falls to one-half of its original value.',
      'It falls to one-quarter of its original value.',
      'It rises to twice its original value.',
      'It stays the same, because the shape stays the same.',
    ],
    correctIndex: 0,
    explanation:
      'SA/V = 4πr² ÷ (4/3)πr³ = 3/r. At r = 2 µm the ratio is 1.5 µm⁻¹; at r = 4 µm it is 0.75 µm⁻¹, half the original. Surface area quadruples while volume rises eightfold. One-quarter confuses the ratio with the change in surface area. The ratio falls, not rises, as a cell grows. A sphere of any size has the same shape, but its ratio still depends on its radius.',
  },
  {
    id: 'bio-u2-007',
    unit: 'unit-2',
    topicSlug: 'cell-organelles',
    difficulty: 'hard',
    stem: 'In a eukaryotic cell, one set of enzymes builds fatty acids while another set breaks fatty acids down to release energy. The two sets of enzymes are kept in different compartments. Which advantage of this arrangement is best supported?',
    options: [
      'It prevents a wasteful cycle in which newly made fatty acids are immediately broken down again.',
      'It lets each enzyme set be made on its own ribosomes, so the cell can build both sets faster.',
      'It speeds up both pathways, because enzymes always work faster inside a membrane-bound compartment.',
      'It stops all fatty acids from crossing membranes, so the two compartments never exchange them.',
    ],
    correctIndex: 0,
    explanation:
      'Internal membranes minimize competing interactions. If building and breaking down fatty acids happened in the same space at the same time, newly made fatty acids could be broken down again at once, wasting the ATP spent to build them. Separate compartments let the cell control each pathway. Where enzymes are made has nothing to do with this advantage. Enclosing an enzyme in a membrane does not by itself make it work faster. Fatty acids made in one place are used elsewhere in the cell, so the advantage is control of the reactions, not a total block on movement.',
  },
  {
    id: 'bio-u2-008',
    unit: 'unit-2',
    topicSlug: 'prokaryotic-eukaryotic-cells',
    difficulty: 'medium',
    stem: 'DNA sequences from mitochondria are most similar to those of a group of aerobic bacteria. DNA sequences from chloroplasts are most similar to those of cyanobacteria, a different group of photosynthetic bacteria. Which claim do these data best support?',
    options: [
      'Mitochondria and chloroplasts came from two different free-living prokaryotes taken in by separate endosymbiotic events.',
      'Mitochondria and chloroplasts came from a single ancestral prokaryote that later split into two kinds of organelle.',
      'Mitochondria and chloroplasts formed when the endoplasmic reticulum folded around parts of the nucleus.',
      'Mitochondria and chloroplasts were taken into eukaryotic cells after aerobic bacteria evolved from cyanobacteria.',
    ],
    correctIndex: 0,
    explanation:
      'Each organelle’s DNA most closely matches a different group of bacteria, so the evidence points to two separate endosymbiotic events, one with an aerobic bacterium and one with a cyanobacterium. A single ancestor would make the two organelles’ DNA most similar to the same group. Folding of internal membranes would not give organelles bacterial DNA. Nothing in the data says aerobic bacteria came from cyanobacteria.',
  },
  {
    id: 'bio-u2-009',
    unit: 'unit-2',
    topicSlug: 'cell-membrane-transport',
    difficulty: 'easy',
    stem: 'Red blood cells take up glucose through a carrier protein. When the glucose concentration outside the cells is higher than inside, glucose moves in; when the inside concentration is made higher, glucose moves out through the same carrier. No ATP is used in either case. This transport is best described as',
    options: [
      'facilitated diffusion',
      'active transport driven by ATP',
      'endocytosis of glucose molecules',
      'simple diffusion through the bilayer',
    ],
    correctIndex: 0,
    explanation:
      'Glucose moves through a protein, always down its concentration gradient and in either direction, with no ATP: facilitated diffusion. Active transport uses energy and can move a substance against its gradient. Endocytosis takes in large particles in vesicles and uses energy. Glucose is a large polar molecule that cannot cross the bilayer by simple diffusion, which is why a carrier is needed.',
  },
  {
    id: 'bio-u2-010',
    unit: 'unit-2',
    topicSlug: 'cell-membrane-transport',
    difficulty: 'medium',
    stem: 'A plant cell is placed in distilled water. Water enters the cell for a while and then net movement stops, even though the cell’s cytoplasm still has a higher solute concentration than the distilled water. Which explanation is best supported?',
    options: [
      'The cell wall pushes back on the swelling cell, and the rising pressure potential raises the cell’s water potential to that of the water.',
      'The solutes inside the cell leak out into the distilled water until both have the same solute concentration and the same water potential.',
      'The aquaporins in the plasma membrane close once the central vacuole is full, so water can no longer move in either direction.',
      'The cell begins to pump water out using ATP at the same rate that water enters, so there is no net movement of water.',
    ],
    correctIndex: 0,
    explanation:
      'Water potential is the sum of solute potential and pressure potential (Ψ = Ψs + Ψp). As water enters, the cell presses against its wall and Ψp rises. Net movement stops when the cell’s Ψ reaches 0, the water potential of distilled water, even though its Ψs is still negative. The stem says the solute concentration inside stays higher, so solutes have not leaked out to equal levels. Water does not need open aquaporins to stop moving, and cells do not pump water with ATP.',
  },
  {
    id: 'bio-u2-011',
    unit: 'unit-2',
    topicSlug: 'cell-membrane-transport',
    difficulty: 'hard',
    stem: 'Animal cells normally keep Na⁺ much lower and K⁺ much higher inside than outside. A drug blocks the Na⁺/K⁺ pump (Na⁺/K⁺ ATPase) but leaves the cells’ Na⁺ and K⁺ channels working. Which change is expected over the following hours?',
    options: [
      'The Na⁺ and K⁺ gradients steadily run down, because ions keep leaking through channels and are not pumped back.',
      'The Na⁺ and K⁺ gradients become steeper, because channels move each ion against its gradient once the pump stops.',
      'The Na⁺ and K⁺ gradients stay the same, because the channels use the cell’s ATP to take over the pump’s work.',
      'The Na⁺ and K⁺ gradients reverse at once, because the pump was the only route by which the ions crossed the membrane.',
    ],
    correctIndex: 0,
    explanation:
      'Channels allow passive flow, so Na⁺ keeps leaking in and K⁺ keeps leaking out down their gradients. Normally the pump uses ATP to move them back; with it blocked, the gradients slowly dissipate and the membrane potential falls. Channels never move ions against a gradient, and they do not use ATP. The gradients run down gradually rather than reversing, because passive flow stops once each gradient is gone.',
  },
  {
    id: 'bio-u2-012',
    unit: 'unit-2',
    topicSlug: 'cell-organelles',
    difficulty: 'easy',
    stem: 'A potted plant that has not been watered for several days wilts, and its leaves droop. Which change inside its leaf cells best explains the wilting?',
    options: [
      'The central vacuoles have lost water, so turgor pressure against the cell walls has dropped.',
      'The cells have taken in too much water, so their walls have stretched out and gone slack.',
      'The chloroplasts have stopped making sugar, so the cells lack the energy to stay upright.',
      'The cell walls have lost their cellulose, so they can no longer bear the leaves’ weight.',
    ],
    correctIndex: 0,
    explanation:
      'The large central vacuole of a plant cell stores water and keeps the cell pressed against its wall (turgor pressure), which stiffens the leaf. When the soil dries, the vacuoles lose water, turgor pressure falls and the leaf droops. Dry soil takes water out of cells rather than adding it. Leaf support comes from turgor pressure, not from a supply of sugar, and cell walls do not lose their cellulose when a plant dries out; wilting reverses within hours of watering.',
  },
  {
    id: 'bio-u2-013',
    unit: 'unit-2',
    topicSlug: 'cell-membrane-transport',
    difficulty: 'hard',
    stem: 'Membrane proteins on a cell are tagged with a fluorescent dye. A laser bleaches the dye in one small spot, which turns dark. At 37 °C the spot regains its glow within about 30 seconds; at 10 °C it takes several minutes. Which conclusion is best supported?',
    options: [
      'Membrane proteins drift sideways within the bilayer, and they move more slowly when the membrane is colder and less fluid.',
      'Membrane proteins are fixed in place, and the spot regains its glow when the cell makes brand-new proteins at that spot.',
      'Membrane proteins move only at 37 °C, because at 10 °C the phospholipid bilayer becomes completely solid and stops all motion.',
      'Membrane proteins flip from one face of the bilayer to the other, and they flip more quickly when the membrane is colder.',
    ],
    correctIndex: 0,
    explanation:
      'Unbleached proteins from the surrounding membrane drift into the dark spot, which shows that proteins move laterally within the bilayer, as the fluid mosaic model describes. Recovery is slower at 10 °C because the bilayer is less fluid when cold. Making new proteins would take far longer than 30 seconds and would not depend this strongly on fluidity. Recovery still happens at 10 °C, only more slowly, so the bilayer has not frozen solid. Proteins do not readily flip across the bilayer, and colder membranes slow motion rather than speed it.',
  },
]
