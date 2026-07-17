export const bioOriginsOfLifePart7Data = {
  topicSlug: 'origins-of-life',
  sections: [
    {
      id: 'ori7-intro',
      type: 'text' as const,
      content: `
## AP Exam Practice — Origins of Life

**Part 7 of 7**

This final part presents AP-style questions that integrate concepts from the entire Origins of Life unit. These questions emphasize **experimental evidence analysis**, **evaluating hypotheses**, and **interpreting evolutionary timelines** — the exact skills tested on the AP Biology exam.

### What to Expect

- Questions that require you to **analyze experimental data** (Miller-Urey, endosymbiosis evidence)
- Questions combining multiple concepts (e.g., RNA world + protocells)
- Emphasis on **reasoning and justification**, not just recall
      `
    },
    {
      id: 'ori7-quiz1',
      type: 'multiple-choice' as const,
      content: `
**AP Practice Set 1 — Abiogenesis & Experimental Evidence** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A student modifies the Miller-Urey experiment by replacing the reducing gas mixture ($CH_{4}$, $NH_{3}$, $H_{2}$) with an oxidizing mixture containing $O_{2}$. What is the most likely result?',
            options: [
              'Far fewer or no organic molecules would be produced because $O_{2}$ would oxidize and break down organic compounds as they form',
              'The same amino acids would be produced because the energy source (electric sparks) is unchanged',
              'More complex organic molecules would be produced because $O_{2}$ provides additional energy',
              'Only nucleotides would be produced because $O_{2}$ selectively inhibits amino acid synthesis'
            ],
            correctAnswer: 0,
            explanation: 'Organic molecules are thermodynamically unstable in the presence of $O_{2}$. In an oxidizing atmosphere, any organic molecules that form would be rapidly broken down. This is precisely why the reducing conditions of early Earth were essential for prebiotic chemistry — and why the Miller-Urey experiment used a reducing gas mixture.'
          },
          {
            question: 'Scientists discovered over 90 amino acids in the Murchison meteorite (1969). How does this finding support the hypothesis of abiogenesis?',
            options: [
              'It demonstrates that organic molecules can form abiotically in extraterrestrial environments, confirming that abiotic synthesis is not unique to early Earth',
              'It proves that life originated in space and was delivered to Earth',
              'It shows that amino acids can only form in the absence of gravity',
              'It demonstrates that all 20 standard amino acids are required for life to begin'
            ],
            correctAnswer: 0,
            explanation: 'The Murchison meteorite provides independent evidence that organic molecules form through abiotic chemistry — not just in laboratory simulations but in natural extraterrestrial environments. This strengthens the case that prebiotic organic synthesis is a common chemical process, not a unique Earth event.'
          }
        ]
      }
    },
    {
      id: 'ori7-quiz2',
      type: 'multiple-choice' as const,
      content: `
**AP Practice Set 2 — RNA World & Protocells** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'The ribosome\'s peptidyl transferase activity is catalyzed by rRNA rather than ribosomal proteins. Why is this considered strong evidence for the RNA World hypothesis?',
            options: [
              'It suggests that RNA-catalyzed protein synthesis predates protein enzymes, meaning RNA must have performed catalysis before proteins existed',
              'It proves that proteins cannot function as enzymes',
              'It shows that ribosomes evolved after DNA',
              'It demonstrates that rRNA is more abundant than mRNA in cells'
            ],
            correctAnswer: 0,
            explanation: 'If the most fundamental reaction in biology — forming peptide bonds during translation — is catalyzed by RNA (not protein), this strongly implies that RNA catalysis came first. The ribosome is a "molecular fossil" from the RNA world: it still uses RNA for its core catalytic function even though proteins do most other catalysis in modern cells.'
          },
          {
            question: 'A researcher creates vesicles from short-chain fatty acids and shows they can encapsulate RNA, grow by absorbing additional fatty acids, and divide when agitated. Which property of life is STILL missing from this system?',
            options: [
              'Heredity with variation — the RNA must be replicated and passed to daughter vesicles with occasional errors',
              'A lipid membrane boundary',
              'Growth and division',
              'Compartmentalization of macromolecules'
            ],
            correctAnswer: 0,
            explanation: 'The vesicles have a membrane (compartmentalization), can grow, and can divide. But without RNA replication and transmission to daughter vesicles — with occasional copying errors providing variation — there is no heredity, and therefore no evolution by natural selection. This is the key missing ingredient for a true protocell.'
          }
        ]
      }
    },
    {
      id: 'ori7-quiz3',
      type: 'multiple-choice' as const,
      content: `
**AP Practice Set 3 — Endosymbiosis Evidence** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A student argues that mitochondria having their own DNA is not sufficient evidence for endosymbiotic theory because "any organelle could have DNA." Which additional piece of evidence would BEST strengthen the endosymbiotic argument?',
            options: [
              'Mitochondrial DNA sequences are phylogenetically closer to alpha-proteobacteria than to the host cell\'s nuclear DNA',
              'Mitochondrial DNA is circular',
              'Mitochondria are found in all eukaryotic cells',
              'Mitochondrial DNA contains fewer genes than nuclear DNA'
            ],
            correctAnswer: 0,
            explanation: 'The strongest evidence is phylogenetic: mitochondrial DNA sequences cluster with alpha-proteobacteria on evolutionary trees, not with the host\'s nuclear DNA. This directly demonstrates ancestry from a specific bacterial group. Circular DNA and other features are consistent with, but do not uniquely prove, endosymbiotic origin.'
          },
          {
            question: 'Chloroplasts are found in plants and algae but NOT in animals or fungi. Mitochondria are found in virtually all eukaryotes. What does this pattern indicate about the sequence of endosymbiotic events?',
            options: [
              'The mitochondrial endosymbiosis occurred first (in the ancestor of all eukaryotes), and the chloroplast endosymbiosis occurred later (only in the lineage leading to plants/algae)',
              'The chloroplast endosymbiosis occurred first, and some lineages later lost their chloroplasts',
              'Both endosymbioses occurred simultaneously in all eukaryotes',
              'Mitochondria evolved from chloroplasts through loss of photosynthesis'
            ],
            correctAnswer: 0,
            explanation: 'Since all eukaryotes have mitochondria but only the plant/algae lineage has chloroplasts, the mitochondrial endosymbiosis must have occurred first — in the common ancestor of all eukaryotes. The chloroplast endosymbiosis then occurred later, only in the lineage leading to photosynthetic eukaryotes.'
          }
        ]
      }
    },
    {
      id: 'ori7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**AP Practice — Hypothesis Testing** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'If the RNA World hypothesis is correct, we would predict that the catalytic core of ancient molecular machines should be made of ___.',
            options: ['RNA', 'DNA', 'protein', 'lipids']
          },
          {
            label: 'The Miller-Urey experiment\'s key control variable was the ___ composition of the gas mixture.',
            options: ['reducing', 'temperature', 'pressure', 'volume']
          },
          {
            label: 'Endosymbiotic theory predicts that treating cells with antibiotics that target bacterial 70S ribosomes should also inhibit ___ function.',
            options: ['mitochondrial', 'nuclear', 'lysosomal', 'Golgi']
          },
          {
            label: 'The pattern of mass extinction followed by adaptive radiation demonstrates that evolution is shaped by both natural selection and ___.',
            options: ['chance/contingency', 'intelligent design', 'Lamarckian inheritance', 'spontaneous generation']
          }
        ],
        correctAnswers: ['RNA', 'reducing', 'mitochondrial', 'chance/contingency'],
        hint1: 'The ribosome is the best example: its peptidyl transferase is an RNA catalyst.',
        hint2: 'The experiment specifically tested whether a reducing atmosphere could produce organic molecules.',
        hint3: 'If mitochondria have bacterial-type ribosomes, drugs targeting those ribosomes should affect mitochondria too.',
        hint4: 'Which lineages survive a mass extinction is largely unpredictable — luck plays a major role.',
        explanation: 'The RNA World predicts RNA-based catalytic cores in ancient machines (confirmed by the ribosome). The Miller-Urey experiment tested reducing conditions specifically. Antibiotics targeting 70S ribosomes affect mitochondria (a known side effect of some antibiotics). Mass extinctions introduce chance/contingency into evolutionary history — survival is not always about fitness.'
      }
    },
    {
      id: 'ori7-content2',
      type: 'text' as const,
      content: `
## AP Free-Response Strategy: Origins of Life

### Common FRQ Formats

1. **Experimental design**: "Design an experiment to test whether organic molecules can form under conditions X..."
   - Always include: hypothesis, independent variable, dependent variable, control, predicted results

2. **Evidence evaluation**: "Describe THREE lines of evidence supporting endosymbiotic theory..."
   - Use specific details: "70S ribosomes" not just "ribosomes"; "circular DNA" not just "DNA"

3. **Timeline interpretation**: "Explain why the evolution of oxygenic photosynthesis was a prerequisite for the evolution of complex multicellular life..."
   - Connect: photosynthesis → $O_{2}$ → aerobic respiration → more ATP → larger cells → multicellularity

### Key Reasoning Chains for the Exam

**Chain 1: Abiogenesis pathway**
Reducing atmosphere + energy → simple organics → polymers → self-replicating RNA → protocells → LUCA

**Chain 2: Endosymbiosis sequence**
Prokaryotes → endosymbiosis (alpha-proteobacteria → mitochondria) → eukaryotes → endosymbiosis (cyanobacteria → chloroplasts) → photosynthetic eukaryotes

**Chain 3: $O_{2}$ and complexity**
Cyanobacteria → $O_{2}$ → GOE → ozone layer + aerobic respiration → more energy → eukaryotes → multicellularity → Cambrian explosion
      `
    },
    {
      id: 'ori7-summary',
      type: 'text' as const,
      content: `
## Summary — Part 7 & Unit Review

### The Complete Origins of Life Story

1. **Early Earth** (~4.6–3.9 Ga): reducing atmosphere, volcanic activity, hydrothermal vents provide energy and raw materials
2. **Abiogenesis**: Miller-Urey proved organic molecules form from inorganic precursors; meteorites confirm extraterrestrial organic synthesis
3. **RNA World**: RNA served as both information carrier and catalyst (ribozymes); ribosome is the key "molecular fossil"
4. **Protocells**: self-assembling lipid vesicles + enclosed RNA → compartmentalized chemistry → natural selection at the cellular level
5. **Endosymbiosis**: free-living bacteria became mitochondria (all eukaryotes) and chloroplasts (plants/algae) — six key lines of evidence
6. **Major transitions**: GOE → ozone + aerobic respiration → eukaryotes → multicellularity → Cambrian explosion → land colonization → extinctions and radiations

### AP Exam Takeaways

- Know the **Miller-Urey experiment** design and results in detail
- Memorize all **six lines of evidence** for endosymbiotic theory
- Understand why **reducing conditions** were necessary
- Connect **environmental changes** to **evolutionary consequences**
- Practice **experimental reasoning**: predictions, controls, and interpreting results
      `
    }
  ]
};
