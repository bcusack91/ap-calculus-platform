export const mcatCellBioPart1Data = {
  topicSlug: 'mcat-cell-biology-mcat',
  sections: [
    {
      id: 'cb1-intro',
      type: 'text' as const,
      content: `# Cell Biology for the MCAT

**Part 1 of 7 — Cell Structure & Organelles**

### Prokaryotes vs. Eukaryotes

| Feature | Prokaryotes | Eukaryotes |
|---------|------------|-----------|
| Nucleus | No (nucleoid region) | Yes (membrane-bound) |
| Organelles | None (membrane-bound) | Many |
| Size | 1-10 $\\mu$m | 10-100 $\\mu$m |
| DNA | Circular, no histones | Linear, with histones |
| Ribosomes | 70S (50S + 30S) | 80S (60S + 40S) |
| Cell wall | Peptidoglycan (bacteria) | Cellulose (plants), chitin (fungi), none (animals) |

### Key Organelles

| Organelle | Function | Key Facts |
|-----------|----------|-----------|
| Nucleus | DNA storage, transcription | Double membrane, nuclear pores |
| Rough ER | Protein synthesis (secretory) | Ribosomes attached |
| Smooth ER | Lipid synthesis, detox | No ribosomes |
| Golgi | Modify, sort, package proteins | cis (receiving) → trans (shipping) |
| Mitochondria | ATP production (aerobic) | Own DNA! Double membrane, maternal inheritance |
| Lysosome | Intracellular digestion | pH ~5 (acidic), hydrolytic enzymes |
| Peroxisome | Oxidation, H$_2$O$_2$ breakdown | Catalase enzyme |`
    },
    {
      id: 'cb1-quiz1',
      type: 'multiple-choice' as const,
      content: `**Cell Structure** 🎯`,
      exercise: {
        questions: [
          {
            question: `A researcher treats cells with a drug that disrupts hydrogen ion pumps on lysosomes, raising lysosomal pH to 7. The most likely effect is:`,
            options: [`Lysosomal enzymes become inactive — they require acidic pH to function`, `Lysosomes become more active`, `The cell produces more lysosomes`, `No effect — pH doesn\`t matter'`],
            correctAnswer: 0,
            explanation: `Lysosomal hydrolases are acid hydrolases — they function optimally at pH ~5. At pH 7, these enzymes denature or become inactive, preventing intracellular digestion. This is a common MCAT passage scenario.`
          },
          {
            question: `Mitochondria have their own DNA because they:`,
            options: [`Likely evolved from engulfed aerobic bacteria (endosymbiotic theory)`, `Were always part of eukaryotic cells`, `Stole DNA from the nucleus`, `Need separate DNA for replication`],
            correctAnswer: 0,
            explanation: `Endosymbiotic theory: mitochondria (and chloroplasts) were once free-living bacteria engulfed by a proto-eukaryote. Evidence: own circular DNA, 70S ribosomes, double membrane, divide by binary fission.`
          }
        ]
      }
    },
    {
      id: 'cb1-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 1

- Know every organelle's function — this is guaranteed MCAT content
- Mitochondria and chloroplasts = endosymbiotic origin (own DNA, 70S ribosomes)
- Prokaryote ribosomes: 70S; Eukaryote ribosomes: 80S (antibiotic targeting!)
- Lysosomes need acidic pH; peroxisomes use catalase for H$_2$O$_2$`
    }
  ]
};
