export const mcatSociologyPart7Data = {
  topicSlug: 'mcat-sociology-mcat',
  sections: [
    {
      id: 'so7-intro',
      type: 'text' as const,
      content: `# Sociology for the MCAT

**Part 7 of 7 — Healthcare Systems & Bioethics**

### Healthcare Disparities

| Factor | Impact |
|--------|--------|
| Race/ethnicity | Minorities receive less aggressive treatment, have worse outcomes |
| SES | Lower SES = later diagnosis, less preventive care |
| Insurance status | Uninsured delay care → worse outcomes |
| Geography | Rural areas lack specialists and hospitals |

### Sick Role (Parsons)

Rights of the sick person:
1. Exempt from normal social obligations
2. Not responsible for their condition

Obligations of the sick person:
1. Want to get well
2. Seek competent help

### Doctor-Patient Relationship Models

| Model | Description |
|-------|-------------|
| Paternalistic | Doctor decides; patient follows |
| Informative | Doctor provides info; patient decides |
| Shared decision-making | Collaborative discussion → mutual agreement |

### Bioethics Principles

| Principle | Definition |
|-----------|-----------|
| **Autonomy** | Respect patient's right to make decisions |
| **Beneficence** | Act in the patient's best interest |
| **Non-maleficence** | "Do no harm" |
| **Justice** | Fair distribution of healthcare resources |`
    },
    {
      id: 'so7-quiz1',
      type: 'multiple-choice' as const,
      content: '**Healthcare & Ethics** 🎯',
      exercise: {
        questions: [
          {
            question: 'A competent adult patient refuses life-saving treatment. The ethical principle that supports their right to do so is:',
            options: ['Autonomy — the patient\'s right to make their own medical decisions', 'Beneficence', 'Justice', 'Non-maleficence'],
            correctAnswer: 0,
            explanation: 'Autonomy means respecting the patient\'s right to make informed decisions about their own body, even if the physician disagrees. This overrides beneficence (doing good) when the patient is competent and informed.'
          }
        ]
      }
    },
    {
      id: 'so7-summary',
      type: 'text' as const,
      content: `### Sociology — Complete! ✅

Sociology on the MCAT is always framed through healthcare. Understand how social structures, inequality, culture, and group dynamics affect health outcomes. Know the four bioethics principles (Autonomy, Beneficence, Non-maleficence, Justice) — they come up constantly.`
    }
  ]
};
