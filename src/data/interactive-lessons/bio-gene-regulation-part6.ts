export const bioGeneRegPart6Data = {
  topicSlug: 'gene-regulation',
  sections: [
    {
      id: 'grp6-intro',
      type: 'text' as const,
      content: `
## Problem-Solving Workshop — *lac* Operon Genetics

**Part 6 of 7**

The classic test of whether you *understand* an operon is to predict what happens when one of its parts is broken. The CED skill is to **predict the effects of a change in, or disruption to, one component of a biological system**. Every problem in this workshop uses the same parts list:

| Part | Type | Normal job in the *lac* operon |
|---|---|---|
| **Repressor gene** | Gene for a regulatory protein | Makes the repressor, which binds the operator when no lactose is present |
| **Operator** | Regulatory DNA sequence | Where the repressor binds to block RNA polymerase |
| **Promoter** | Regulatory DNA sequence | Where RNA polymerase binds to start transcription |
| **CAP site** | Regulatory DNA sequence | Where CAP-cAMP binds to boost transcription when glucose is low |
| **Structural genes** | Genes for enzymes | Encode the enzymes that take up and break down lactose |

**The readout** in every problem: is the lactose-digesting enzyme made **without** lactose, **with** lactose, or **never**?

**Three questions to ask, in order:**
1. **Can the repressor do its job?** Is it made, can it bind the operator, and can it let go when lactose is present?
2. **Can RNA polymerase bind and be boosted?** Is the promoter intact, and can CAP-cAMP help when glucose is absent?
3. **Is the enzyme itself functional?** A broken structural gene gives no working enzyme no matter how much it is transcribed.
      `
    },
    {
      id: 'grp6-worked1',
      type: 'text' as const,
      content: `
### Worked Problem 1 — Breaking the "Off" Switch

**Mutant A: the repressor gene is broken,** so no functional repressor is made.

- With nothing to bind the operator, RNA polymerase transcribes the structural genes **whether or not lactose is present**.
- **Result:** the enzyme is made **constitutively** (all the time). The operon has lost its "off" switch.

**Mutant B: the operator is changed** so the normal repressor can no longer bind it.

- A perfectly good repressor is made, but it has nowhere to attach.
- **Result:** again, the enzyme is made **constitutively**, with or without lactose.

**Same phenotype, different cause.** Both mutants waste energy making enzymes when there is no lactose to digest. In Mutant A the defect is in a **regulatory protein**; in Mutant B it is in a **regulatory DNA sequence**.

**Telling them apart.** Give each mutant a plasmid carrying a normal repressor gene (by transformation):
- Mutant A regains normal control, because the repressor made from the plasmid is a protein that diffuses through the cell and binds the operator.
- Mutant B stays constitutive, because its operator still cannot be bound, no matter how much normal repressor is present.

This is the logic of the CED's **regulatory sequences** and **regulatory proteins**: a missing protein can be supplied from elsewhere in the cell, but a damaged binding site cannot be fixed that way.
      `
    },
    {
      id: 'grp6-quiz1',
      type: 'multiple-choice' as const,
      content: `
### Checkpoint — Repressor and Operator Mutants
      `,
      exercise: {
        questions: [
          {
            question: 'A mutant has a normal repressor, but its operator sequence is changed so the repressor cannot bind it. When will the lactose-digesting enzyme be made?',
            options: [
              'Only when lactose is present, as in normal inducible control',
              'Whether or not lactose is present, since nothing blocks polymerase',
              'Never, because the repressor stays permanently bound to the operator',
              'Never, because the changed operator blocks the promoter itself'
            ],
            correctAnswer: 1,
            explanation: 'The repressor cannot attach to the changed operator, so RNA polymerase transcribes the genes whether or not lactose is present: the enzyme is made constitutively. Inducible control needs a repressor that can bind; a permanently bound repressor would turn the operon off, not on; and nothing in the mutation affects the promoter.'
          },
          {
            question: 'A mutant makes a repressor that binds the operator normally but can no longer bind the inducer (allolactose). When will the enzyme be made?',
            options: [
              'Only when lactose is present, since lactose still enters the cell',
              'Both with and without lactose, since the repressor is defective',
              'Never, since the inducer cannot pry the repressor loose to allow transcription',
              'Only when glucose is present, since glucose replaces the inducer'
            ],
            correctAnswer: 2,
            explanation: 'Normally the inducer binds the repressor and changes its shape so it releases the operator. A repressor that cannot bind the inducer stays on the operator even when lactose is present, so the operon is always off. Lactose entering the cell does not help, the repressor still blocks transcription rather than being absent, and glucose lowers expression rather than inducing it.'
          }
        ]
      }
    },
    {
      id: 'grp6-worked2',
      type: 'text' as const,
      content: `
### Worked Problem 2 — Breaking the Positive Control

Full expression of the *lac* operon also needs **CAP-cAMP**, which binds near the promoter and helps RNA polymerase bind strongly when glucose is low.

| Strain | Glucose −, lactose + | Glucose +, lactose + | Lactose − (either glucose) | Reason |
|---|---|---|---|---|
| Wild type | **HIGH** | LOW | OFF | Both switches normal |
| CAP cannot bind cAMP | **LOW** | LOW | OFF | Repressor still releases, but no boost from CAP |
| Cell cannot make cAMP | **LOW** | LOW | OFF | CAP never becomes active |
| Promoter destroyed | OFF | OFF | OFF | RNA polymerase cannot bind at all |

**Reading the table.**
- A CAP or cAMP defect never makes the operon **HIGH**, because the positive switch can never be turned on. It still responds to lactose (LOW vs. OFF), because the repressor is normal.
- A destroyed promoter shuts the operon **OFF** under every condition: no amount of lactose or cAMP helps if RNA polymerase cannot bind.

### Worked Problem 3 — The *trp* Operon, Repressible Control

The *trp* operon makes the enzymes that **build** tryptophan. Tryptophan acts as a **corepressor**: it binds the trp repressor, which then binds the operator and shuts the operon off.

| Strain | Tryptophan absent | Tryptophan abundant | Reason |
|---|---|---|---|
| Wild type | ON | OFF | Normal repressible control |
| Repressor gene broken | ON | **ON** | No repressor for tryptophan to activate |
| Repressor cannot bind tryptophan | ON | **ON** | Tryptophan cannot switch the repressor into its active shape |
| Operator changed | ON | **ON** | Active repressor has nowhere to bind |
| Promoter destroyed | **OFF** | OFF | No transcription, so the cell must take in tryptophan from its environment |

**Notice the asymmetry with *lac*.** In the inducible *lac* operon, a repressor stuck **on** the DNA locks the operon off. In the repressible *trp* operon, most repressor defects leave the operon stuck **on**, wasting energy making tryptophan the cell already has.
      `
    },
    {
      id: 'grp6-quiz2',
      type: 'multiple-choice' as const,
      content: `
### Checkpoint — Positive Control and the *trp* Operon
      `,
      exercise: {
        questions: [
          {
            question: 'A mutant E. coli strain makes a CAP protein that cannot bind cAMP. It is grown with lactose and no glucose. What level of lac operon transcription is expected?',
            options: [
              'High, because lactose has released the repressor from the operator',
              'Low, because the repressor is off but CAP is unable to boost output',
              'Off, because a defective CAP protein binds the operator instead',
              'High, because the lack of glucose raises cAMP regardless of CAP'
            ],
            correctAnswer: 1,
            explanation: 'Lactose still releases the repressor, so transcription is possible, but without CAP-cAMP the promoter is weak and output stays low. Releasing the repressor alone is not enough for high expression, CAP does not bind the operator, and high cAMP does nothing if CAP cannot bind it.'
          },
          {
            question: 'In E. coli, a mutation leaves the trp repressor unable to bind tryptophan. What happens to the trp operon when tryptophan is abundant?',
            options: [
              'It stays on, since tryptophan cannot activate the repressor',
              'It turns off, since tryptophan binds the operator directly',
              'It turns off, since the repressor now binds the operator permanently',
              'It is induced to higher levels, since tryptophan acts as an inducer'
            ],
            correctAnswer: 0,
            explanation: 'Tryptophan shuts the operon off only by binding the repressor and switching it into the shape that binds the operator. If the repressor cannot bind tryptophan, it stays inactive and the operon stays on. Tryptophan does not bind DNA itself, the repressor does not become permanently active, and tryptophan is a corepressor, not an inducer.'
          },
          {
            question: 'A bacterium\'s trp operon promoter is destroyed. Which prediction about this strain is best supported?',
            options: [
              'It makes tryptophan only when tryptophan is absent from its medium',
              'It can grow only if tryptophan is supplied in its environment',
              'It makes tryptophan constantly, even when tryptophan is abundant',
              'It switches the lac operon on to make tryptophan in its place'
            ],
            correctAnswer: 1,
            explanation: 'Without a promoter, RNA polymerase cannot transcribe the genes for the tryptophan-building enzymes, so the cell cannot make its own tryptophan and must obtain it from the medium. It cannot respond to tryptophan levels at all, and the lac operon encodes lactose-digesting enzymes, not tryptophan-building ones.'
          }
        ]
      }
    },
    {
      id: 'grp6-worked4',
      type: 'text' as const,
      content: `
### Worked Problem 4 — Identifying a Mutant from Data

A researcher measures the lactose-digesting enzyme (in activity units) in four *E. coli* strains grown in three media.

| Strain | Glucose only | Glucose + lactose | Lactose only |
|---|---|---|---|
| 1 | 1 | 20 | 100 |
| 2 | 100 | 100 | 100 |
| 3 | 1 | 1 | 1 |
| 4 | 1 | 20 | 20 |

**Strain 1 — wild type.** Off without lactose, low with both sugars, high with lactose alone: both switches work.

**Strain 2 — no working "off" switch.** High enzyme in every medium, even without lactose. The repressor is missing or the operator cannot bind it.

**Strain 3 — never expressed.** No enzyme even with lactose alone. Possible causes: a destroyed promoter, a repressor that cannot release the operator, or a broken structural gene.

**Strain 4 — no boost from CAP-cAMP.** It responds to lactose (1 → 20), so the repressor works, but it never rises above the low level, even when glucose is absent. CAP or cAMP is defective.

**Strategy.** Compare each strain with the wild type one column at a time. The column where a strain first differs tells you which switch is broken.
      `
    },
    {
      id: 'grp6-quiz3',
      type: 'multiple-choice' as const,
      content: `
### Checkpoint — Reading the Data
      `,
      exercise: {
        questions: [
          {
            question: 'In the Worked Problem 4 table, which observation best shows that strain 4 has a normal repressor?',
            options: [
              'Its enzyme level never rises above 20, even without glucose',
              'Its enzyme level rises from 1 to 20 when lactose is added',
              'It matches strain 3 in the glucose-only medium',
              'Its enzyme level differs from strain 2 in every medium tested'
            ],
            correctAnswer: 1,
            explanation: 'The rise from 1 to 20 when lactose is added shows that the repressor binds the operator without lactose and releases it with lactose, so the negative switch works. The ceiling of 20 points to the CAP defect, not the repressor, and the comparisons with strains 2 and 3 do not by themselves show how the repressor behaves.'
          },
          {
            question: 'A fifth strain gives enzyme levels of 100, 100 and 100 in the three media, matching strain 2. Adding a plasmid that carries a normal repressor gene restores the wild-type pattern. Which part of the operon was defective?',
            options: [
              'The operator, which no repressor from the plasmid could bind',
              'The repressor gene, since the plasmid supplied its protein',
              'The promoter, which RNA polymerase could no longer bind',
              'The structural gene, which encoded a nonfunctional enzyme'
            ],
            correctAnswer: 1,
            explanation: 'A repressor made from the plasmid is a diffusible protein that can bind the operator, so it can restore control only if the operator is intact and the original problem was a missing repressor. An operator defect would not be fixed by extra repressor, a promoter defect would give no enzyme at all, and a broken structural gene would give no working enzyme in any medium.'
          }
        ]
      }
    }
  ]
};
