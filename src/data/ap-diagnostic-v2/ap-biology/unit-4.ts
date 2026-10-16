/**
 * AP Biology diagnostic v2 — Unit 4: Cell Communication and Cell Cycle (CED 4.1–4.6).
 * Four data sets (DNA-content histogram, signaling-mutant table, glucose and
 * insulin after a meal, tomato ripening table) plus standalone items. No
 * named cyclin–Cdk pairs or growth factors (4.6 exclusion).
 */
import type { ApDiagV2Item, ApDiagV2Stimulus } from '@/lib/ap-diagnostic-v2/types'

export const STIMULI: ApDiagV2Stimulus[] = [
  {
    id: 'bio-u4-s1',
    title: 'DNA content of cultured cells',
    kind: 'graph',
    content:
      'Researchers stained the DNA of cultured animal cells and measured the amount of DNA in each of 1,000 cells. Cells were sorted into three groups: 2 units of DNA, between 2 and 4 units (shown as 3), and 4 units. One culture was untreated; a second culture was grown for 24 hours with drug D. The counts are shown in Figure 1.',
    chart: {
      title: 'Figure 1. Number of cells (of 1,000) with each amount of DNA',
      kind: 'bar',
      xLabel: 'DNA per cell',
      xUnit: 'relative units',
      yLabel: 'Number of cells',
      yUnit: 'cells',
      xValues: [2, 3, 4],
      yValues: [600, 150, 250],
      seriesLabel: 'Untreated',
      comparisonSeries: [{ label: 'Drug D, 24 h', yValues: [90, 80, 830] }],
    },
  },
  {
    id: 'bio-u4-s2',
    title: 'Responses of signaling mutants',
    kind: 'table',
    content:
      'When ligand L binds its receptor on a type of cultured cell, the cell switches on gene G. Researchers studied normal cells and two mutant lines: mutant A makes no receptor for L, and mutant B makes no protein K, a kinase found in the cytoplasm. Drug Z activates protein K directly. The researchers recorded whether gene G was switched on.\n\n' +
      '| Cells | Ligand L added? | Drug Z added? | Gene G switched on? |\n' +
      '|---|---|---|---|\n' +
      '| Normal | No | No | No |\n' +
      '| Normal | Yes | No | Yes |\n' +
      '| Mutant A | Yes | No | No |\n' +
      '| Mutant A | Yes | Yes | Yes |\n' +
      '| Mutant B | Yes | No | No |\n' +
      '| Mutant B | Yes | Yes | No |',
  },
  {
    id: 'bio-u4-s3',
    title: 'Blood glucose and insulin after a meal',
    kind: 'graph',
    content:
      'A healthy adult who had not eaten for 10 hours drank a glucose solution at time 0. Blood glucose and blood insulin were measured every 30 minutes for 3 hours (Figure 2). Insulin is a hormone released by the pancreas; it signals body cells, such as liver and muscle cells, to take up glucose from the blood.',
    chart: {
      title: 'Figure 2. Blood glucose (mg/dL) and blood insulin (µU/mL) after drinking glucose at time 0',
      kind: 'line',
      xLabel: 'Time after drinking glucose',
      xUnit: 'min',
      yLabel: 'Concentration in blood',
      yUnit: 'mg/dL (glucose) or µU/mL (insulin)',
      xValues: [0, 30, 60, 90, 120, 150, 180],
      yValues: [85, 140, 120, 100, 90, 85, 85],
      seriesLabel: 'Glucose (mg/dL)',
      comparisonSeries: [{ label: 'Insulin (µU/mL)', yValues: [8, 60, 45, 25, 12, 8, 8] }],
    },
  },
  {
    id: 'bio-u4-s4',
    title: 'Ripening of tomatoes in sealed containers',
    kind: 'table',
    content:
      'Students sealed five unripe green tomatoes in each of four containers kept at the same temperature. Ethylene is a gas that plant cells use as a signal. The students measured the ethylene concentration in each container on day 2 and recorded how many days passed before all five green tomatoes were ripe (red).\n\n' +
      '| Container | Contents besides the five green tomatoes | Ethylene on day 2 (ppm) | Days until all five were ripe |\n' +
      '|---|---|---|---|\n' +
      '| 1 | Nothing | 0.1 | 12 |\n' +
      '| 2 | One ripe tomato | 2.5 | 5 |\n' +
      '| 3 | One ripe tomato and a packet that absorbs ethylene | 0.1 | 11 |\n' +
      '| 4 | Ethylene gas added on day 0 | 3.0 | 5 |',
  },
]

export const ITEMS: ApDiagV2Item[] = [
  {
    id: 'bio-u4-s1-q1',
    stimulusId: 'bio-u4-s1',
    unit: 'unit-4',
    topicSlug: 'cell-cycle-mitosis',
    difficulty: 'easy',
    stem: 'In the untreated culture, most cells have 2 units of DNA. In which stage of the cell cycle are these cells?',
    options: ['G₁', 'S', 'G₂', 'Anaphase'],
    correctIndex: 0,
    explanation:
      'Cells with the unreplicated amount of DNA (2 units) have not yet entered S phase, so they are in G₁ (or have just finished dividing). Cells in S are partway through replication (between 2 and 4 units). Cells in G₂ and in mitosis, including anaphase, have finished replication and hold 4 units.',
  },
  {
    id: 'bio-u4-s1-q2',
    stimulusId: 'bio-u4-s1',
    unit: 'unit-4',
    topicSlug: 'cell-cycle-mitosis',
    difficulty: 'medium',
    stem: 'Which statement best describes the 150 untreated cells with between 2 and 4 units of DNA?',
    options: [
      'They are in S phase, partway through copying their DNA.',
      'They are in G₂ phase, after their DNA has been copied once.',
      'They have just finished cytokinesis and divided their DNA.',
      'They are in G₀ and have stopped dividing for good.',
    ],
    correctIndex: 0,
    explanation:
      'A cell doubles its DNA during S phase, so a cell with an amount between the unreplicated (2) and replicated (4) values is still copying its DNA. G₂ cells have finished replication and hold 4 units. A cell that has just divided returns to 2 units. Cells in G₀ are not replicating DNA, so they hold 2 units, not an intermediate amount.',
  },
  {
    id: 'bio-u4-s1-q3',
    stimulusId: 'bio-u4-s1',
    unit: 'unit-4',
    topicSlug: 'cell-cycle-mitosis',
    difficulty: 'hard',
    stem: 'Which effect of drug D is most consistent with Figure 1?',
    options: [
      'It blocks DNA replication, so cells cannot leave G₁.',
      'It prevents spindle formation, so replicated cells cannot divide.',
      'It causes cells to copy their DNA twice before they divide.',
      'It speeds up cytokinesis, so cells divide sooner than usual.',
    ],
    correctIndex: 1,
    explanation:
      'After 24 hours with drug D, 830 of 1,000 cells hold 4 units of DNA, so cells are replicating their DNA but not dividing. A drug that stops spindle formation would hold replicated cells in mitosis, which fits. A drug that blocks replication would pile cells up at 2 units. Copying DNA twice would produce cells with 8 units, which do not appear. Faster division would shift cells toward 2 units, not 4.',
  },
  {
    id: 'bio-u4-s2-q1',
    stimulusId: 'bio-u4-s2',
    unit: 'unit-4',
    topicSlug: 'cell-signaling',
    difficulty: 'medium',
    stem: 'Which conclusion is best supported by the results for mutant A?',
    options: [
      'Protein K acts after the receptor in the pathway, so activating K bypasses the missing receptor.',
      'Protein K acts before the receptor in the pathway, so K must activate the receptor to switch on G.',
      'Ligand L can switch on gene G without a receptor, because L enters the cell and binds the gene directly.',
      'Drug Z replaces ligand L by binding the receptor, so it works only in cells that still have a receptor.',
    ],
    correctIndex: 0,
    explanation:
      'Mutant A has no receptor, so ligand L alone does nothing. When drug Z activates protein K directly, gene G is switched on even without a receptor. K must therefore act downstream of the receptor: activating it skips the reception step. If K acted before the receptor, activating K could not help a cell with no receptor. L does nothing in mutant A, so it needs the receptor. Drug Z works in mutant A, which has no receptor, so Z does not act by binding the receptor.',
  },
  {
    id: 'bio-u4-s2-q2',
    stimulusId: 'bio-u4-s2',
    unit: 'unit-4',
    topicSlug: 'cell-signaling',
    difficulty: 'hard',
    stem: 'Based on all of the results, which order of events in this pathway is best supported?',
    options: [
      'L binds the receptor → the receptor activates K → K leads to gene G being switched on',
      'L activates K → K activates the receptor → the receptor leads to gene G being switched on',
      'K binds L → L binds the receptor → the receptor leads to gene G being switched on',
      'L binds the receptor → gene G is switched on, while K acts in a separate pathway',
    ],
    correctIndex: 0,
    explanation:
      'Normal cells need L, and mutant A shows L needs the receptor. Activating K bypasses the receptor (mutant A + Z), so K is downstream of the receptor. Without K, neither L nor Z can switch on G (mutant B), so K is required for the response. Together: L → receptor → K → gene G. K placed before the receptor would not rescue mutant A. K binding L contradicts K being a cytoplasmic kinase that Z activates directly. If K were in a separate pathway, L would still switch on G in mutant B.',
  },
  {
    id: 'bio-u4-s3-q1',
    stimulusId: 'bio-u4-s3',
    unit: 'unit-4',
    topicSlug: 'cell-signaling',
    difficulty: 'easy',
    stem: 'Which statement best describes the data in Figure 2?',
    options: [
      'Insulin rises as glucose rises, and both fall back to their starting levels by about 150 minutes.',
      'Insulin rises before glucose rises, and glucose stays high for the rest of the 3 hours.',
      'Glucose rises as insulin falls, and both stay at their highest levels for the rest of the 3 hours.',
      'Glucose and insulin change in opposite directions at every point measured during the 3 hours.',
    ],
    correctIndex: 0,
    explanation:
      'Both peak at 30 minutes (glucose 140 mg/dL, insulin 60 µU/mL) and then decline together, returning to 85 mg/dL and 8 µU/mL by 150 minutes. Insulin did not rise before glucose, glucose did not stay high, and the two moved in the same direction rather than opposite directions.',
  },
  {
    id: 'bio-u4-s3-q2',
    stimulusId: 'bio-u4-s3',
    unit: 'unit-4',
    topicSlug: 'cell-signaling',
    difficulty: 'hard',
    stem: 'The same test is given to a person whose liver and muscle cells have insulin receptors that cannot bind insulin. Compared with Figure 2, which result is most likely?',
    options: [
      'Glucose returns to 85 mg/dL faster, because the insulin in the blood is not used up by the cells.',
      'Glucose stays high for longer, and insulin also stays high, because the cells cannot respond to it.',
      'Glucose stays high for longer, but insulin stays near 8 µU/mL, because the pancreas detects no signal.',
      'Glucose and insulin both stay near their time-0 levels, because the cells absorb glucose without insulin.',
    ],
    correctIndex: 1,
    explanation:
      'Insulin lowers blood glucose only if target cells receive the signal. Without working receptors, cells take up little glucose, so blood glucose stays high. The pancreas responds to high glucose, not to the cells’ response, so it keeps releasing insulin and insulin stays high. Negative feedback cannot switch off because the stimulus (high glucose) is never reduced. Glucose would not fall faster. The pancreas still detects high glucose, so insulin would not stay low. Cells that cannot bind insulin do not take up glucose normally.',
  },
  {
    id: 'bio-u4-s4-q1',
    stimulusId: 'bio-u4-s4',
    unit: 'unit-4',
    topicSlug: 'cell-signaling',
    difficulty: 'medium',
    stem: 'Which container shows that a ripe tomato has little effect on the green tomatoes once the ethylene it releases is removed?',
    options: ['Container 3', 'Container 1', 'Container 2', 'Container 4'],
    correctIndex: 0,
    explanation:
      'Container 3 held a ripe tomato, but the absorber kept ethylene at 0.1 ppm, and the green tomatoes took 11 days to ripen, nearly as long as with nothing added (12 days). Container 1 had no ripe tomato at all. Container 2 had a ripe tomato and its ethylene, and ripened in 5 days. Container 4 had added ethylene but no ripe tomato.',
  },
  {
    id: 'bio-u4-s4-q2',
    stimulusId: 'bio-u4-s4',
    unit: 'unit-4',
    topicSlug: 'cell-signaling',
    difficulty: 'hard',
    stem: 'A student claims that a ripe tomato speeds the ripening of nearby fruit only by releasing ethylene gas. Which pair of results gives the strongest support for this claim?',
    options: [
      'Container 4 ripened as fast as container 2 with no ripe tomato, and container 3 stayed slow with one.',
      'Container 2 ripened faster than container 1, and container 2 had the most ethylene of the four.',
      'Container 1 took the longest to ripen, and container 1 had the lowest ethylene on day 2.',
      'Container 3 and container 1 had the same ethylene level, and both held five green tomatoes.',
    ],
    correctIndex: 0,
    explanation:
      'To show that ethylene alone accounts for the ripe tomato’s effect, the results must show that ethylene without a ripe tomato gives the full effect (container 4: 5 days, like container 2) and that a ripe tomato without its ethylene gives little effect (container 3: 11 days). Container 2 versus container 1 shows that a ripe tomato speeds ripening but cannot separate ethylene from other effects of the tomato; container 4, not container 2, had the most ethylene. Container 1 alone has no comparison. Equal ethylene in containers 1 and 3 says nothing about the speed of ripening without the ripening times.',
  },
  {
    id: 'bio-u4-001',
    unit: 'unit-4',
    topicSlug: 'cell-signaling',
    difficulty: 'easy',
    stem: 'In an embryo, a small group of cells releases a signaling molecule that spreads through the tissue around it. Cells close to the source respond strongly, cells farther away respond weakly, and distant cells do not respond. This is best described as',
    options: [
      'signaling by a local regulator over a short distance',
      'signaling by a hormone carried in the blood over a long distance',
      'signaling by direct contact through linked membrane proteins',
      'signaling by a cell to itself using its own surface receptors',
    ],
    correctIndex: 0,
    explanation:
      'The signal acts only on nearby cells and weakens with distance from the source, which describes a local regulator (short-distance chemical signaling), such as a morphogen in an embryo. A hormone carried in the blood would reach distant cells. Contact signaling needs the cells to touch, so it would not spread through the tissue. The responding cells here are neighbors of the source, not the source itself.',
  },
  {
    id: 'bio-u4-002',
    unit: 'unit-4',
    topicSlug: 'cell-cycle-mitosis',
    difficulty: 'easy',
    stem: 'A flatworm cut in half regrows the missing half of its body, and every new cell has the same chromosomes as the original worm. Which process produces these new cells?',
    options: ['Mitosis', 'Meiosis', 'Fertilization', 'Crossing over'],
    correctIndex: 0,
    explanation:
      'Mitosis followed by cytokinesis produces genetically identical daughter cells, and it drives growth, tissue repair and regeneration. Meiosis produces haploid, genetically different gametes. Fertilization joins two gametes. Crossing over happens in meiosis and creates new allele combinations.',
  },
  {
    id: 'bio-u4-003',
    unit: 'unit-4',
    topicSlug: 'cell-cycle-mitosis',
    difficulty: 'easy',
    stem: 'A student films a single animal cell dividing and notes four events. In what order do they occur?\n\nP: sister chromatids are pulled toward opposite poles\nQ: chromosomes condense and the spindle begins to form\nR: a nuclear envelope forms around each set of chromosomes\nS: chromosomes line up along the cell’s equator',
    options: ['Q, S, P, R', 'Q, P, S, R', 'S, Q, P, R', 'Q, S, R, P'],
    correctIndex: 0,
    explanation:
      'Prophase (Q: condensation, spindle forms) comes first, then metaphase (S: chromosomes at the equator), anaphase (P: sister chromatids separate) and telophase (R: nuclear envelopes re-form). Putting P before S separates chromatids before they line up. Starting with S has chromosomes align before they condense. Ending with P has the nuclear envelopes form before the chromatids separate.',
  },
  {
    id: 'bio-u4-004',
    unit: 'unit-4',
    topicSlug: 'cell-signaling',
    difficulty: 'medium',
    stem: 'When a muscle cell is stimulated by a neurotransmitter, positive ions begin flowing into the cell within a thousandth of a second, far too fast for any new protein to be made. Which mechanism best explains such a rapid response?',
    options: [
      'The neurotransmitter binds a ligand-gated channel, which opens at once and lets ions flow in.',
      'The neurotransmitter enters the nucleus and switches on genes for new ion channels.',
      'The neurotransmitter is broken down by the cell, and the energy released pumps ions in.',
      'The neurotransmitter diffuses into the cell and carries the ions in along with it.',
    ],
    correctIndex: 0,
    explanation:
      'A ligand-gated ion channel is a receptor that is itself a channel. When the ligand binds, the channel changes shape and opens at once, so ions flow in down their gradient without any gene expression or protein synthesis. Switching on genes takes minutes to hours. A neurotransmitter is a signal, not a fuel, and ions do not ride in with it; they cross through the opened channel.',
  },
  {
    id: 'bio-u4-005',
    unit: 'unit-4',
    topicSlug: 'cell-signaling',
    difficulty: 'medium',
    stem: 'In a signaling pathway, relay kinases are activated when phosphate groups are added to them, and another enzyme normally removes those phosphates once the signal stops. Cells are treated with a drug that blocks the phosphate-removing enzyme. What will most likely happen after the signal molecule is removed?',
    options: [
      'The response will continue for longer than normal, because the kinases stay phosphorylated.',
      'The response will stop sooner than normal, because the kinases lose their phosphates faster.',
      'The response will never begin, because the kinases cannot be phosphorylated without that enzyme.',
      'The response will be unchanged, because removing phosphates plays no part in ending a response.',
    ],
    correctIndex: 0,
    explanation:
      'Turning a pathway off requires removing the phosphates that keep relay kinases active. If that removal is blocked, the kinases stay active even after the signal is gone, so the response lasts longer. The kinases lose phosphates more slowly, not faster. The drug does not stop phosphates from being added, so the response still starts normally. Removing phosphates is one of the ways pathways shut off, so blocking it does change the response.',
  },
  {
    id: 'bio-u4-006',
    unit: 'unit-4',
    topicSlug: 'cell-signaling',
    difficulty: 'medium',
    stem: 'During metamorphosis of a frog, a rising hormone signal causes the cells of the tadpole’s tail to break down their own contents and die in an orderly way, and the tail is absorbed. Which type of cellular response is this?',
    options: [
      'Programmed cell death (apoptosis) triggered by a signal transduction pathway',
      'Uncontrolled cell division caused by a mutation in the tail’s DNA sequence',
      'Cell death caused when a toxin damages and bursts the tail cells’ membranes',
      'Cell growth that stretches the tail cells until they no longer fit the body',
    ],
    correctIndex: 0,
    explanation:
      'Signal transduction can lead to apoptosis, an orderly, genetically controlled self-destruction in which cells break down their contents (lysosomes help) and are removed; it shapes the body during development. Uncontrolled division would enlarge the tail rather than remove it. A toxin bursting membranes is disorderly injury, not a programmed response to a normal hormone signal. Cell growth does not remove tissue.',
  },
  {
    id: 'bio-u4-007',
    unit: 'unit-4',
    topicSlug: 'cell-cycle-mitosis',
    difficulty: 'medium',
    stem: 'A culture starts with 100,000 cells that divide at a steady rate, and no cells die. After 72 hours, the culture holds 800,000 cells. How long does one cell cycle take?',
    options: ['24 hours', '9 hours', '8 hours', '36 hours'],
    correctIndex: 0,
    explanation:
      'Going from 100,000 to 800,000 cells is an eightfold increase, which is 3 doublings (2 × 2 × 2 = 8). Three cell cycles in 72 hours means each takes 72 ÷ 3 = 24 hours. 9 hours divides 72 by 8, confusing the fold increase with the number of doublings. 8 hours uses the fold increase as a time. 36 hours assumes only 2 doublings.',
  },
  {
    id: 'bio-u4-008',
    unit: 'unit-4',
    topicSlug: 'cell-cycle-mitosis',
    difficulty: 'medium',
    stem: 'In dividing cells, the amount of a cyclin-dependent kinase (Cdk) stays about the same throughout the cell cycle, but its activity rises sharply just before mitosis and falls afterward. A cyclin that binds this Cdk builds up during interphase and is destroyed at the end of mitosis. Which explanation fits these observations?',
    options: [
      'The Cdk is active only when it is bound to cyclin, so its activity follows the cyclin level.',
      'The Cdk is made only just before mitosis, so its activity follows the amount of Cdk present.',
      'The cyclin is a kinase that does the Cdk’s job, so Cdk activity does not matter for mitosis.',
      'The cyclin destroys the Cdk at the end of mitosis, so new Cdk must be made in each cycle.',
    ],
    correctIndex: 0,
    explanation:
      'Since the amount of Cdk is constant but its activity rises and falls with the cyclin level, Cdk must need cyclin to be active: the cyclin–Cdk complex drives the cell into mitosis, and destroying the cyclin switches the Cdk off. The stem says the Cdk amount is constant, so it is not made just before mitosis or destroyed afterward. Cyclin is the regulatory partner; the Cdk is the kinase.',
  },
  {
    id: 'bio-u4-009',
    unit: 'unit-4',
    topicSlug: 'cell-cycle-mitosis',
    difficulty: 'hard',
    stem: 'A drug prevents spindle fibers from forming. Treated cells replicate their DNA and condense their chromosomes. Later the sister chromatids of each chromosome come apart, but with no spindle to pull them to opposite poles, they all stay together; the cell re-forms one nuclear envelope around them and enters G₁ without dividing. Compared with an untreated cell in G₁, such a cell has',
    options: [
      'twice as many chromosomes in a single nucleus',
      'half as many chromosomes in each of two nuclei',
      'the same number of chromosomes in one nucleus',
      'twice as many chromosomes split between two cells',
    ],
    correctIndex: 0,
    explanation:
      'The DNA was replicated but never divided between daughter cells. When the chromatids come apart, each becomes a separate chromosome, and all of them stay in one nucleus, so the cell has twice the normal chromosome number (4n instead of 2n) in a single nucleus. Half as many per nucleus would require division of a normal cell into unequal parts. The same number would mean the replicated DNA was lost. The stem says the cell did not divide, so the chromosomes are not split between two cells.',
  },
  {
    id: 'bio-u4-010',
    unit: 'unit-4',
    topicSlug: 'cell-signaling',
    difficulty: 'medium',
    stem: 'When the calcium level in an animal’s blood falls, gland cells release hormone P, which causes calcium to be released from bone into the blood. When calcium returns to normal, release of P slows. Which statement best describes this system?',
    options: [
      'It is negative feedback, because the response removes the stimulus and returns calcium to its set point.',
      'It is positive feedback, because the response removes the stimulus and returns calcium to its set point.',
      'It is negative feedback, because the response pushes calcium further and further from its set point.',
      'It is positive feedback, because the response pushes calcium further and further from its set point.',
    ],
    correctIndex: 0,
    explanation:
      'Low calcium triggers a response (hormone P) that raises calcium, and as calcium returns to normal the response shuts down. A response that counteracts the stimulus and restores the set point is negative feedback. Positive feedback amplifies the change rather than reversing it, and a response that pushed calcium away from its set point would not match the data in the stem.',
  },
  {
    id: 'bio-u4-011',
    unit: 'unit-4',
    topicSlug: 'cell-signaling',
    difficulty: 'hard',
    stem: 'Hormone P raises blood calcium by causing bone to release calcium into the blood, and the gland cells that make P normally release less of it as blood calcium rises. A mutation makes the gland cells unable to detect blood calcium, so they release P at a high, constant rate. What is the most likely result?',
    options: [
      'Blood calcium rises above its normal range and stays high, because P keeps acting on bone.',
      'Blood calcium stays at its set point, because bone stops responding once calcium is normal.',
      'Blood calcium falls below normal, because a constant signal causes target cells to stop responding.',
      'Blood calcium swings up and down evenly, because the bone cells take over sensing calcium levels.',
    ],
    correctIndex: 0,
    explanation:
      'Negative feedback depends on the gland sensing that calcium has returned to normal and cutting back on P. If the gland cannot sense calcium, P keeps being released, bone keeps releasing calcium, and blood calcium climbs above its set point. Bone cells respond to P, not to calcium itself, so they do not stop on their own. Nothing in the stem suggests the target cells lose their response or take over sensing.',
  },
  {
    id: 'bio-u4-012',
    unit: 'unit-4',
    topicSlug: 'cell-signaling',
    difficulty: 'medium',
    stem: 'The same hormone binds the same kind of receptor on liver cells and on heart muscle cells. Liver cells respond by breaking down glycogen, while heart cells respond by contracting faster. Which explanation is best supported?',
    options: [
      'The two cell types have different relay proteins and target proteins inside them.',
      'The hormone changes its chemical structure depending on which organ it reaches.',
      'Liver and heart cells contain different genes, because each lost genes as it formed.',
      'Only one of the two cell types truly has the receptor, so the other response is chance.',
    ],
    correctIndex: 0,
    explanation:
      'A response depends on what the activated receptor connects to inside the cell. Liver and heart cells express different sets of relay and target proteins, so the same signal and receptor trigger different responses. The hormone is the same molecule everywhere. The two cell types have the same genes but express different ones. The stem says both cells have the same receptor.',
  },
  {
    id: 'bio-u4-013',
    unit: 'unit-4',
    topicSlug: 'cell-cycle-mitosis',
    difficulty: 'medium',
    stem: 'Researchers fuse a cell in S phase with a cell in G₁, so that both nuclei share one cytoplasm. The G₁ nucleus begins replicating its DNA right away, much sooner than it otherwise would. Which conclusion is best supported?',
    options: [
      'Molecules in the cytoplasm of the S-phase cell can push a nucleus into DNA replication.',
      'The G₁ nucleus copied the DNA of the S-phase nucleus instead of its own DNA.',
      'The G₁ nucleus was already in S phase, and the fusion did not change anything.',
      'Cell fusion damages DNA, and damaged DNA always starts replicating at once.',
    ],
    correctIndex: 0,
    explanation:
      'The only change for the G₁ nucleus was exposure to the S-phase cytoplasm, and it then began replicating early, so factors in that cytoplasm can drive a nucleus into S phase. This is evidence that the cell cycle is controlled by molecular signals. A nucleus replicates its own DNA. The stem says replication began much sooner than it otherwise would, so the fusion did change something. Damaged DNA normally halts the cell cycle at a checkpoint rather than triggering replication.',
  },
]
