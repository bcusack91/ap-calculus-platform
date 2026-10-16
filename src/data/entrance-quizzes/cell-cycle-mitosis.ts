/**
 * Entrance Quiz — Cell Cycle & Mitosis (AP Biology)
 *
 * 14 questions covering all 7 lesson parts (2 per part).
 * Each question is tagged with the part number it covers,
 * so we can determine which parts a student already knows.
 *
 * Part mapping:
 *  1 — Cell Cycle Phases (chromatin condensation, time spent in each phase)
 *  2 — Interphase (identifying G2 from DNA content, origins of replication)
 *  3 — Mitosis (late prophase, metaphase checkpoint)
 *  4 — Cytokinesis (plant cell wall, binary fission)
 *  5 — Cell Cycle Regulation (oncogenes vs tumor suppressors, cyclin activates Cdk)
 *  6 — Problem-Solving Workshop (phase duration from counts, cytoplasmic factors)
 *  7 — AP Review (identifying drug targets, why cancer needs several mutations)
 */

import { shuffleArray } from '@/lib/shuffle-options'
import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  // Part 1: Cell Cycle Phases
  {
    id: 'bccm-ent-1a',
    question:
      'During interphase a cell\'s DNA is spread out as loose chromatin, but in prophase it condenses into compact chromosomes. What is the advantage of this change?',
    options: [
      'Condensing the DNA copies it, so each chromosome gains a second chromatid',
      'Loose DNA is easy to read and copy, and compact DNA moves untangled',
      'Compact chromosomes can be transcribed faster to make the proteins for mitosis',
      'Loose chromatin protects DNA from damage, so it is used only during division',
    ],
    correctIndex: 1,
    explanation:
      'Spread-out chromatin lets genes be transcribed and DNA be replicated during interphase; condensed chromosomes can be separated by the spindle without tangling or breaking. Condensation does not copy DNA, and condensed DNA is hard to transcribe.',
    partNumber: 1,
    partTitle: 'Cell Cycle Phases',
  },
  {
    id: 'bccm-ent-1b',
    question:
      'In a population of cells dividing at random times, one cycle lasts 24 hours: G₁ 11 h, S 7 h, G₂ 4 h and M 2 h. About what percentage of the cells would be in S phase at any moment?',
    options: ['About 7%', 'About 25%', 'About 29%', 'About 46%'],
    correctIndex: 2,
    explanation:
      'The share of cells in a phase matches the share of time spent there: $7 \\div 24 \\approx 0.29$, or about 29%. 46% is the share for G₁, and 7% mistakes hours for percent.',
    partNumber: 1,
    partTitle: 'Cell Cycle Phases',
  },

  // Part 2: Interphase
  {
    id: 'bccm-ent-2a',
    question:
      'A cell has an intact nuclear envelope and loosely spread chromatin, and its DNA content is 4C, twice that of a newly formed daughter cell. Which phase is it in?',
    options: [
      'G₁, since its chromatin is still spread out',
      'G₂, as its DNA is copied but not yet divided',
      'Anaphase, since its DNA content has doubled',
      'Telophase, since a nuclear envelope is present',
    ],
    correctIndex: 1,
    explanation:
      'A 4C content means S phase is finished, and an intact envelope with uncondensed chromatin means mitosis has not started, so the cell is in G₂. A G₁ cell would be 2C.',
    partNumber: 2,
    partTitle: 'Interphase',
  },
  {
    id: 'bccm-ent-2b',
    question:
      'If a long human chromosome were copied by one replication fork moving from one end, copying it would take weeks, yet S phase lasts only hours. Which explanation is best supported?',
    options: [
      'Only the genes that the cell is using are copied in S phase',
      'The DNA is copied again during G₂ to finish what S phase missed',
      'Each chromosome is copied in pieces that are spread across several cycles',
      'DNA synthesis begins at many origins along each chromosome at once',
    ],
    correctIndex: 3,
    explanation:
      'Eukaryotic chromosomes have many origins of replication, so many sections are copied at the same time and the whole genome finishes in a few hours. Every stretch of DNA is copied exactly once per S phase.',
    partNumber: 2,
    partTitle: 'Interphase',
  },

  // Part 3: Mitosis
  {
    id: 'bccm-ent-3a',
    question:
      'A micrograph shows a cell with no nuclear envelope and condensed chromosomes scattered through the cell, with spindle microtubules attaching to their kinetochores. Which stage is this?',
    options: [
      'Late prophase, since the chromosomes are not yet aligned',
      'Metaphase, since the spindle is attached',
      'Anaphase, since the envelope is gone',
      'Telophase, since chromosomes are condensed',
    ],
    correctIndex: 0,
    explanation:
      'In late prophase the envelope breaks down and kinetochores attach to spindle microtubules, but the chromosomes are not yet lined up at the plate (metaphase) or separating (anaphase). In telophase the envelope re-forms.',
    partNumber: 3,
    partTitle: 'Mitosis',
  },
  {
    id: 'bccm-ent-3b',
    question:
      'During metaphase, a laser cuts the microtubules attached to the kinetochore of one sister chromatid, leaving all other chromosomes attached from both poles. What will the cell most likely do?',
    options: [
      'Start anaphase at once and send both chromatids to the same pole',
      'Skip anaphase and go straight to telophase and then cytokinesis',
      'Break down its other chromosomes so that the daughter cells stay equal',
      'Delay anaphase until that chromatid is linked to the spindle again',
    ],
    correctIndex: 3,
    explanation:
      'The metaphase checkpoint holds the cell in metaphase until every chromosome is attached to the spindle from both poles, which prevents aneuploid daughter cells. Once the chromatid reattaches, anaphase can proceed.',
    partNumber: 3,
    partTitle: 'Mitosis',
  },

  // Part 4: Cytokinesis
  {
    id: 'bccm-ent-4a',
    question:
      'Why do plant cells build a cell plate during cytokinesis instead of forming a cleavage furrow as animal cells do?',
    options: [
      'Their rigid cell wall keeps the membrane from pinching inward',
      'Plant cells have no actin, so they cannot build any contractile ring',
      'Plant cells divide only by binary fission, which uses a cell plate',
      'The cell plate forms first and then contracts like a furrow would',
    ],
    correctIndex: 0,
    explanation:
      'A rigid wall surrounds a plant cell, so a ring cannot pinch it in two; instead Golgi vesicles fuse at the center to build a new wall and membranes outward. Plant cells do have actin, and they divide by mitosis.',
    partNumber: 4,
    partTitle: 'Cytokinesis',
  },
  {
    id: 'bccm-ent-4b',
    question:
      'A bacterium divides by binary fission without a mitotic spindle. How do the two copies of its chromosome end up in different daughter cells?',
    options: [
      'Each copy is surrounded by its own nuclear envelope first',
      'Kinetochore microtubules pull the copies apart',
      'They move to opposite ends, and the cell pinches between them',
      'Each copy breaks into pieces that are sorted at random',
    ],
    correctIndex: 2,
    explanation:
      'After replication from a single origin, the two chromosome copies are moved toward opposite ends as the cell elongates, and a ring forms at the midpoint so the cell pinches in two. Prokaryotes have no nucleus or kinetochores.',
    partNumber: 4,
    partTitle: 'Cytokinesis',
  },

  // Part 5: Cell Cycle Regulation
  {
    id: 'bccm-ent-5a',
    question:
      'A mutation in just one allele of gene X makes cells divide without control. For gene Y, cells lose control only when both alleles are mutated. Which classification is best supported?',
    options: [
      'X is a tumor suppressor gene; Y is a proto-oncogene',
      'Both X and Y are tumor suppressor genes',
      'X is a proto-oncogene; Y is a tumor suppressor gene',
      'Both X and Y are proto-oncogenes',
    ],
    correctIndex: 2,
    explanation:
      'A gain-of-function mutation in one allele turns a proto-oncogene into an oncogene that acts dominantly. A tumor suppressor is a brake, so control is lost only when both alleles are inactivated (two hits).',
    partNumber: 5,
    partTitle: 'Cell Cycle Regulation',
  },
  {
    id: 'bccm-ent-5b',
    question:
      'The amount of a Cdk protein stays about the same throughout the cell cycle. When extra cyclin of the kind that peaks before mitosis is injected into G₂ cells, they enter mitosis early. Which explanation is best supported?',
    options: [
      'The cyclin activates the Cdk, which then phosphorylates targets',
      'The cyclin replaces the Cdk and phosphorylates the target proteins itself',
      'The cyclin copies the remaining DNA so that G₂ can end sooner than usual',
      'The cyclin destroys the Cdk, which was holding the cell in G₂ until then',
    ],
    correctIndex: 0,
    explanation:
      'Cdks are present all the time but are active only when bound to cyclin. Enough cyclin activates the Cdk, which phosphorylates target proteins that push the cell past the G₂/M checkpoint.',
    partNumber: 5,
    partTitle: 'Cell Cycle Regulation',
  },

  // Part 6: Problem-Solving Workshop
  {
    id: 'bccm-ent-6a',
    question:
      'Of 400 root tip cells, 340 are in interphase, 30 in prophase, 12 in metaphase, 6 in anaphase and 12 in telophase. If the cell cycle lasts 20 hours, about how long does metaphase last?',
    options: ['0.3 hours', '0.6 hours', '1.2 hours', '3.0 hours'],
    correctIndex: 1,
    explanation:
      'Metaphase cells are $12 \\div 400 = 3\\%$ of the total, so metaphase takes about $0.03 \\times 20 = 0.6$ hours. 3.0 hours is the length of all of mitosis (15% of 20 hours).',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop',
  },
  {
    id: 'bccm-ent-6b',
    question:
      'Cytoplasm taken from cells in S phase is injected into cells in G₁. Based on the cell fusion experiments, what is the most likely result?',
    options: [
      'Nothing happens, since only the nucleus controls when replication starts',
      'The G₁ nuclei condense their chromosomes and break them into fragments',
      'The G₁ cells enter G₀, since injected cytoplasm stops the cycle entirely',
      'The G₁ nuclei begin replicating DNA early, driven by factors in the cytoplasm',
    ],
    correctIndex: 3,
    explanation:
      'Fusing S-phase and G₁ cells sends the G₁ nucleus into S phase, showing that diffusible cytoplasmic factors (cyclin-Cdk complexes) drive the transition. Premature condensation and fragmentation come from M-phase factors.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop',
  },

  // Part 7: AP Review
  {
    id: 'bccm-ent-7a',
    question:
      'Animal cells treated with drug A pile up in S phase. Cells treated with drug B complete mitosis but end up with two nuclei in one cell. Which targets are most likely?',
    options: [
      'A blocks DNA replication; B blocks the actin ring',
      'A blocks the spindle; B blocks DNA replication',
      'A blocks cytokinesis; B blocks the metaphase checkpoint',
      'A blocks the contractile actin ring; B blocks the spindle',
    ],
    correctIndex: 0,
    explanation:
      'Cells stuck in S phase cannot finish copying their DNA. Two nuclei in one cell mean mitosis worked but cytokinesis failed, which in an animal cell points to the actin ring that forms the cleavage furrow.',
    partNumber: 7,
    partTitle: 'AP Review',
  },
  {
    id: 'bccm-ent-7b',
    question:
      'Why does the risk of cancer generally rise with age?',
    options: [
      'Older cells stop making cyclins, so the cell cycle loses control',
      'Tumor suppressor genes turn into oncogenes as soon as cells age',
      'A cell usually needs several mutations, and they build up over time',
      'Older cells skip S phase, so mistakes in mitosis go unnoticed',
    ],
    correctIndex: 2,
    explanation:
      'Uncontrolled division usually requires an accelerator stuck on (an oncogene) plus lost brakes (both copies of a tumor suppressor), and the chance that one cell lineage has collected all of these mutations grows over a lifetime.',
    partNumber: 7,
    partTitle: 'AP Review',
  },
]

/**
 * Generate an entrance quiz for the cell-cycle-mitosis topic.
 * Returns all 14 questions in shuffled order.
 */
export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

/**
 * Get the list of part numbers and titles covered by this entrance quiz.
 */
export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Cell Cycle Phases' },
    { partNumber: 2, partTitle: 'Interphase' },
    { partNumber: 3, partTitle: 'Mitosis' },
    { partNumber: 4, partTitle: 'Cytokinesis' },
    { partNumber: 5, partTitle: 'Cell Cycle Regulation' },
    { partNumber: 6, partTitle: 'Problem-Solving Workshop' },
    { partNumber: 7, partTitle: 'AP Review' },
  ]
}
