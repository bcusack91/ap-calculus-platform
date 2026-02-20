export const mcatCellBioPart6Data = {
  topicSlug: 'mcat-cell-biology-mcat',
  sections: [
    {
      id: 'cb6-intro',
      type: 'text' as const,
      content: `# Cell Biology for the MCAT

**Part 6 of 7 — Apoptosis & Cellular Processes**

### Apoptosis (Programmed Cell Death)

- ORDERLY process — no inflammation
- Cell shrinks, DNA fragments, blebs form, phagocytes clean up
- Regulated by **caspases** (protease cascade)

### Apoptosis Pathways

| Pathway | Trigger | Key Players |
|---------|---------|-------------|
| Intrinsic | DNA damage, stress | Mitochondria release cytochrome c → caspase-9 |
| Extrinsic | Death ligand (FasL, TNF) | Death receptor → caspase-8 |
| Both → | Executioner caspases (caspase-3) → cell death |

### Apoptosis vs. Necrosis

| Feature | Apoptosis | Necrosis |
|---------|-----------|---------|
| Trigger | Programmed signals | Injury, toxins |
| Process | Orderly | Chaotic |
| Inflammation | No | Yes |
| Energy required? | Yes (ATP) | No |

### MCAT Connection

- **Too little apoptosis** → cancer (cells that should die keep dividing)
- **Too much apoptosis** → degenerative diseases (necessary cells die)
- **Bcl-2**: anti-apoptotic protein (overexpressed in some cancers)
- **p53**: pro-apoptotic (triggers apoptosis in damaged cells)`
    },
    {
      id: 'cb6-quiz1',
      type: 'multiple-choice' as const,
      content: '**Apoptosis** 🎯',
      exercise: {
        questions: [
          {
            question: 'A cancer cell overexpresses Bcl-2 protein. The effect is:',
            options: ['Resistance to apoptosis — Bcl-2 prevents cytochrome c release from mitochondria', 'Increased apoptosis', 'No change in cell survival', 'Increased cell division rate'],
            correctAnswer: 0,
            explanation: 'Bcl-2 is anti-apoptotic — it stabilizes the mitochondrial membrane, preventing cytochrome c release and thus blocking the intrinsic apoptotic pathway. Overexpression = cells resist apoptosis = cancer.'
          }
        ]
      }
    },
    {
      id: 'cb6-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 6

- Apoptosis: programmed, orderly, no inflammation. Necrosis: traumatic, chaotic, inflammation.
- Intrinsic: mitochondria → cytochrome c → caspase-9. Extrinsic: death receptor → caspase-8.
- Bcl-2 = anti-apoptotic; p53 and Bax = pro-apoptotic
- Cancer often involves BOTH excess proliferation AND resistance to apoptosis`
    }
  ]
};
