export const mcatOrganSysPart3Data = {
  topicSlug: 'mcat-organ-systems-mcat',
  sections: [
    {
      id: 'os3-intro',
      type: 'text' as const,
      content: `# Organ Systems for the MCAT

**Part 3 of 7 — Digestive System**

### GI Tract Order

Mouth → Esophagus → Stomach → Small intestine (duodenum → jejunum → ileum) → Large intestine → Rectum

### Digestive Enzymes

| Enzyme | Source | Substrate | Product |
|--------|--------|-----------|---------|
| Salivary amylase | Mouth | Starch | Maltose |
| Pepsin | Stomach (chief cells) | Protein | Peptides |
| Trypsin, chymotrypsin | Pancreas | Protein | Peptides |
| Pancreatic lipase | Pancreas | Triglycerides | Monoglycerides + fatty acids |
| Pancreatic amylase | Pancreas | Starch | Maltose |
| Lactase, maltase | Small intestine brush border | Disaccharides | Monosaccharides |

### Stomach

- **Parietal cells**: HCl (acidic pH ~2) + intrinsic factor (for B$_{12}$ absorption)
- **Chief cells**: Pepsinogen → activated to pepsin by HCl
- **G cells**: Gastrin (stimulates HCl secretion)
- **Mucous cells**: Protect stomach lining from acid

### Absorption

- **Duodenum**: Iron, calcium
- **Jejunum**: Most nutrients (amino acids, sugars, fatty acids)
- **Ileum**: Bile salts, vitamin B$_{12}$
- **Large intestine**: Water, electrolytes`
    },
    {
      id: 'os3-quiz1',
      type: 'multiple-choice' as const,
      content: '**Digestive System** 🎯',
      exercise: {
        questions: [
          {
            question: 'Bile salts aid fat digestion by:',
            options: ['Emulsifying large fat globules into smaller droplets (increasing surface area for lipase)', 'Directly breaking down triglycerides', 'Neutralizing stomach acid', 'Activating pepsinogen'],
            correctAnswer: 0,
            explanation: 'Bile salts are amphipathic — they break large fat globules into smaller micelles (emulsification), vastly increasing surface area for pancreatic lipase. Bile does NOT digest fat — it prepares fat for digestion.'
          }
        ]
      }
    },
    {
      id: 'os3-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 3

- Know all digestive enzymes with their sources and substrates
- Stomach: HCl (parietal cells), pepsinogen (chief cells), gastrin (G cells)
- Bile emulsifies fat (produced by liver, stored in gallbladder)
- Most absorption occurs in the jejunum; B$_{12}$ absorbed in ileum`
    }
  ]
};
