export const mcatCellCyclePart2Data = {
  topicSlug: 'mcat-cell-biology-cell-cycle-mcat',
  sections: [
    {
      id: 'cc2-intro',
      type: 'text' as const,
      content: `# The Cell Cycle for the MCAT

**Part 2 of 4 — Cyclins, CDKs & Checkpoint Machinery**

### The Engine: Cyclin-Dependent Kinases

The cycle is driven by **CDKs** — serine/threonine kinases that are inactive alone and switched on by binding a **cyclin**:

- **CDK protein levels stay constant** through the cycle; **cyclin levels oscillate** (synthesis then abrupt degradation) — the oscillation IS the clock
- Cyclin destruction is by **ubiquitin-mediated proteolysis**: an E3 ubiquitin ligase tags the cyclin, the **proteasome** destroys it. Degradation is irreversible, which makes cycle transitions one-way ratchets

| Transition | Cyclin-CDK pair | Job |
|-----------|-----------------|-----|
| G$_1$ progression | Cyclin D-CDK4/6 | Phosphorylates Rb (below) — responds to growth factors |
| G$_1$/S commitment | Cyclin E-CDK2 | Completes Rb phosphorylation; fires the restriction point |
| S phase | Cyclin A-CDK2 | Activates replication origins; blocks re-licensing |
| G$_2$/M | Cyclin B-CDK1 (= **MPF**) | Chromosome condensation, nuclear envelope breakdown, spindle assembly |

### The Restriction Point: Rb and E2F

1. **Rb** (retinoblastoma protein) binds and silences **E2F** transcription factors in early G$_1$
2. Growth factors → Ras-MAPK → **cyclin D** synthesis → CDK4/6 begins phosphorylating Rb
3. Hyperphosphorylated Rb releases E2F → E2F transcribes S-phase genes (cyclin E, DNA polymerase components, thymidylate synthase)
4. Cyclin E-CDK2 further phosphorylates Rb — a **positive feedback loop** that makes commitment all-or-none

> Past the restriction point, the cycle runs to completion without growth factors. Cancer biology in one sentence: nearly all tumors break the Rb-E2F brake somehow (Rb loss, cyclin D overexpression, CDK4 amplification, or p16 loss).

### CDK Inhibitors and Checkpoint Enforcement

- **p21**: transcribed by p53 after DNA damage; binds and inhibits G$_1$/S CDKs → G$_1$ arrest
- **p16 (INK4a)**: blocks cyclin D-CDK4/6 specifically; lost in many cancers
- **G$_2$/M enforcement**: damage-activated kinases (ATM/ATR → Chk1/2) inhibit **Cdc25**, the phosphatase that removes inhibitory phosphates from CDK1 — no Cdc25 activity, no mitosis

### The Spindle Checkpoint and APC/C

- Unattached kinetochores emit a **"wait" signal** (Mad/Bub proteins) that inhibits the **APC/C** (anaphase-promoting complex — an E3 ubiquitin ligase)
- When every kinetochore is attached under bipolar tension, APC/C activates and ubiquitinates:
  1. **Securin** → freed **separase** cleaves **cohesin** → chromatids separate (anaphase)
  2. **Cyclin B** → CDK1 turns off → mitotic exit (envelope re-forms, chromosomes decondense)

One ubiquitin ligase thus triggers both chromosome separation and the end of mitosis.`
    },
    {
      id: 'cc2-quiz1',
      type: 'multiple-choice' as const,
      content: `**Cyclins & CDKs** 🎯`,
      exercise: {
        questions: [
          {
            question: `Throughout the cell cycle, CDK1 protein levels remain constant, yet its kinase activity peaks sharply at the G$_2$/M transition. The activity peak is explained by:`,
            options: [`Proteolytic cleavage of CDK1 into a constitutively active fragment`, `Cyclin B accumulation plus Cdc25 removing inhibitory phosphates`, `A burst of CDK1 transcription timed to the G$_2$/M switch`, `Relocation of CDK1 from the cytosol into mitochondria`],
            correctAnswer: 1,
            explanation: `CDKs are regulated by partner availability, not by their own abundance: cyclin B rises through S/G$_2$, and the cyclin B-CDK1 complex is held in check by inhibitory phosphorylation until Cdc25 removes it — producing an abrupt activity spike. This "constant enzyme, oscillating activator" design was established by the classic MPF experiments (see the deep-dive below) and is the single most-tested cell-cycle concept.`
          },
          {
            question: `A tumor is found to overexpress cyclin D. The most direct consequence for cell-cycle control is:`,
            options: [`Cytokinesis fails, leaving binucleate daughter cells behind`, `Cohesin is cleaved prematurely during metaphase alignment`, `Cells arrest at the G$_2$/M boundary before mitosis`, `Rb is hyperphosphorylated, freeing E2F for S-phase entry`],
            correctAnswer: 3,
            explanation: `Cyclin D is the growth-factor-responsive input to the restriction point. Overexpressing it uncouples Rb phosphorylation from mitogen signaling: E2F is released regardless of external signals, and cells commit to division autonomously. The same phenotype results from Rb deletion or p16 loss — four different mutations, one broken brake, which is why passages treat the Rb-E2F axis as a single pathway.`
          },
          {
            question: `After ionizing radiation, cells arrest in G$_1$. The molecular chain producing this arrest is:`,
            options: [`p53 stabilizes, induces p21, and CDKs shut down`, `DNA damage triggers APC/C activation during G$_1$`, `Cyclin B is degraded, and that activates CDK1 early`, `Caspases directly cleave E2F, silencing its targets`],
            correctAnswer: 0,
            explanation: `p53 is the damage sensor's transcription factor: stabilized p53 induces p21, a CDK inhibitor that shuts down cyclin E/A-CDK2 (and cyclin D-CDK4/6), so Rb remains hypophosphorylated and E2F silent. The cell holds at G$_1$/S until repair finishes — or, if damage is overwhelming, p53 escalates to apoptosis (Part 3). Note the arrest is transcription-dependent, hence slower than the phosphorylation-based G$_2$/M block.`
          }
        ]
      }
    },
    {
      id: 'cc2-deep',
      type: 'text' as const,
      content: `### The Experiments That Found the Engine

**Cell-fusion experiments (Rao & Johnson):**
- Fuse an S-phase cell with a G$_1$ cell → the G$_1$ nucleus **begins replication early** — S-phase cytoplasm contains a diffusible activator
- Fuse an M-phase cell with any interphase cell → the interphase nucleus **condenses its chromosomes prematurely** — mitotic cytoplasm dominates
- Fuse a G$_2$ cell with an S-phase cell → the G$_2$ nucleus does **not** re-replicate — replicated DNA is licensed only once (see below)

**MPF and frog eggs (Masui; Nurse; Hunt):**
- Injecting cytoplasm from a mature (M-phase) frog egg into an immature oocyte drives it into M — the activity was named **maturation-promoting factor (MPF)**
- MPF = cyclin B-CDK1; Hunt's sea urchin experiments showed cyclin protein rising each cycle and crashing at each anaphase — the first protein ever seen to oscillate with the cycle

### Licensing — Why DNA Replicates Exactly Once

- In G$_1$ (low CDK activity), origins are **licensed**: ORC + Cdc6 + Cdt1 load inactive MCM helicases
- S-phase CDK activity **fires** licensed origins AND simultaneously **prevents new licensing** (phosphorylates/degrades the loaders)
- Result: each origin can fire at most once per cycle; re-licensing requires passing through mitosis back to a low-CDK state
- This is the molecular answer to the fusion experiment: a G$_2$ nucleus has spent its licenses

### Reading a Cycle Mutant (Hartwell's cdc Logic)

Temperature-sensitive **cdc** (cell division cycle) yeast mutants arrest at a *uniform* stage at the restrictive temperature — the arrest point marks where the gene product acts. A mutant arresting with unreplicated DNA acts at G$_1$/S; one arresting as large budded cells with divided nuclei acts at cytokinesis. Uniform arrest morphology = a true cycle gene; random arrest = a general growth gene.`
    },
    {
      id: 'cc2-quiz2',
      type: 'multiple-choice' as const,
      content: `**Checkpoint Machinery** 🎯`,
      exercise: {
        questions: [
          {
            question: `A single unattached kinetochore in an otherwise perfect metaphase cell prevents anaphase. It does so by:`,
            options: [`The unattached kinetochore blocks the contractile ring`, `Cyclin B is degraded well ahead of its normal schedule`, `A Mad/Bub wait signal inhibits APC/C, so securin survives`, `Cohesin is cleaved only on the attached chromosomes`],
            correctAnswer: 2,
            explanation: `The spindle checkpoint is exquisitely sensitive: one signaling kinetochore suffices to keep APC/C off. With APC/C inactive, securin persists, separase is sequestered, cohesin remains intact, and no chromatid separates — protecting against aneuploidy from even a single mis-attached chromosome. When the last kinetochore attaches, the wait signal stops and APC/C fires anaphase and mitotic exit together.`
          },
          {
            question: `When an S-phase cell is fused with a G$_2$ cell, the G$_2$ nucleus does not re-replicate its DNA, even though S-phase activators fill the shared cytoplasm. The reason is that:`,
            options: [`G$_2$ nuclei lack the DNA polymerase needed to copy DNA`, `The G$_2$ nucleus has no licensed origins left to fire`, `The G$_2$ envelope blocks entry of S-phase activators`, `S-phase activators are used up by the S-phase nucleus`],
            correctAnswer: 1,
            explanation: `Replication control is a license system, not just an activator system: MCM helicase loading (licensing) is possible only when CDK activity is low (G$_1$), and high S/G$_2$ CDK activity blocks re-loading while firing existing licenses. A G$_2$ nucleus has no licensed origins left, so no activator can make it re-replicate. This single mechanism guarantees once-and-only-once replication each cycle.`
          }
        ]
      }
    },
    {
      id: 'cc2-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 2

- CDK levels constant, cyclin levels oscillate; cyclin binding (plus phosphatase Cdc25 removing inhibitory phosphates) switches kinase activity on; ubiquitin-proteasome destruction of cyclins makes transitions irreversible
- Pairs to know: cyclin D-CDK4/6 (G$_1$, growth-factor input), cyclin E-CDK2 (restriction point), cyclin A-CDK2 (S), cyclin B-CDK1 = MPF (M)
- Restriction point = Rb-E2F: Rb phosphorylation releases E2F → S-phase genes; positive feedback makes commitment all-or-none; virtually all cancers break this brake
- CDK inhibitors enforce arrest: p21 (p53-induced, G$_1$ damage arrest), p16 (blocks CDK4/6); G$_2$/M arrest works by inhibiting Cdc25
- APC/C at anaphase: degrades securin (freeing separase to cut cohesin) and cyclin B (ending mitosis)
- Spindle checkpoint: one unattached kinetochore inhibits APC/C — the anti-aneuploidy gate
- Licensing (MCM loading only at low CDK) explains once-per-cycle replication and the fusion-experiment results; cdc mutants map genes by uniform arrest stage`
    }
  ]
};
