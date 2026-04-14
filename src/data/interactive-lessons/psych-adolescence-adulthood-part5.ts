export const psychAdolescencePart5Data = {
  topicSlug: 'adolescence-adulthood',
  sections: [
    {
      id: 'adol5-s1-intro',
      type: 'text' as const,
      content: `
## Death, Dying & Grief

**Part 5 of 7 — End-of-Life Psychology**

The psychology of death and dying examines how people cope with terminal illness, grieve losses, and make end-of-life decisions. The AP exam tests Kübler-Ross's model, critiques of it, and cultural diversity in grief.

### Core Definitions

| Term | Definition |
|------|-----------|
| **Kübler-Ross model** | Five-stage model of grief: Denial → Anger → Bargaining → Depression → Acceptance (DABDA) |
| **Hospice care** | Comfort-focused care for terminally ill patients, emphasizing quality of life rather than curing the disease |
| **Palliative care** | Medical care focused on relieving pain and symptoms at any stage of serious illness (not just end of life) |
| **Bereavement** | The state of having lost a significant person through death |
| **Grief** | The emotional response to loss — sadness, anger, guilt, yearning |
| **Mourning** | The outward, culturally shaped expressions of grief (funerals, wearing black, sitting shiva) |

### The Kübler-Ross Stages (DABDA)

| Stage | Description | Example |
|-------|------------|---------|
| **Denial** | "This can't be happening" — refusing to accept the reality | "The test results must be wrong" |
| **Anger** | "Why me?" — frustration directed at the situation, others, or God | "This isn't fair — I exercised and ate right!" |
| **Bargaining** | "If only..." — attempting to negotiate or make deals | "If I recover, I'll spend more time with family" |
| **Depression** | Deep sadness as reality sets in | Withdrawal, crying, loss of interest in activities |
| **Acceptance** | Coming to terms with the situation — not necessarily happiness | "I've had a good life. Let me focus on what matters now" |

### Real-World Example

A family grieves differently after a grandmother's death: the father becomes quiet and returns to work quickly, the mother holds a memorial dinner, and the teenage daughter writes poems. All three are grieving — just expressing it differently. This illustrates that grief is individual and culturally shaped.
      `
    },
    {
      id: 'adol5-s2-check',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A patient diagnosed with terminal cancer says, "There must be a mistake — I feel fine. I want a second opinion from a different hospital." According to Kübler-Ross, this most clearly represents which stage?',
            options: [
              'Anger — the patient is frustrated with the diagnosis',
              'Denial — the patient refuses to accept the reality of the diagnosis',
              'Bargaining — the patient is trying to negotiate for a better outcome',
              'Acceptance — the patient is calmly processing the situation'
            ],
            correctAnswer: 1,
            explanation: 'Denial is characterized by disbelief and refusal to accept reality. The patient\'s insistence that "there must be a mistake" and desire for a second opinion reflects an inability or unwillingness to accept the diagnosis — the classic denial response.'
          },
          {
            question: 'Which statement represents the most important critique of the Kübler-Ross model?',
            options: [
              'The stages only apply to the person who is dying, never to grieving loved ones',
              'People do not necessarily experience all stages, and they do not always occur in the proposed order',
              'The model was based on thousands of longitudinal studies',
              'Modern research has confirmed that all five stages occur universally in the exact order Kübler-Ross described'
            ],
            correctAnswer: 1,
            explanation: 'The major critique of Kübler-Ross\'s model is that grief is NOT a linear, orderly process. People may skip stages, revisit stages, experience them out of order, or experience multiple stages simultaneously. The model is useful as a general framework but should not be taken as a rigid prescription for how grief "should" unfold.'
          }
        ]
      }
    },
    {
      id: 'adol5-s3-deep',
      type: 'text' as const,
      content: `
### Deep Dive: Beyond Kübler-Ross

#### Critiques of the Stage Model

| Critique | Explanation |
|---------|-------------|
| **Not linear** | People don't move neatly from one stage to the next — they may bounce back and forth |
| **Not universal** | Not everyone experiences all five stages; some skip stages entirely |
| **Cultural bias** | The model was developed primarily with Western, middle-class patients and doesn't capture all cultural grief expressions |
| **Oversimplification** | Grief is more complex than five categories — it involves physical symptoms, identity changes, and meaning-making |
| **Limited research basis** | Kübler-Ross's original work was based on informal interviews, not controlled studies |

#### Alternative Perspectives on Grief

- **Dual-process model (Stroebe & Schut):** People oscillate between loss-oriented coping (grieving) and restoration-oriented coping (adjusting to life changes, forming new roles). Healthy grief involves moving between these two.
- **Continuing bonds:** Modern research shows maintaining a connection with the deceased (through memories, rituals, conversations) is healthy — NOT a sign of unresolved grief.
- **Resilience:** Research by George Bonanno shows that the most common response to loss is resilience — most people return to normal functioning relatively quickly, WITHOUT going through prolonged depression.

#### Cultural Differences in Grief

| Culture/tradition | Practice |
|------------------|----------|
| **Western/American** | Often emphasize "moving on" and emotional recovery; funerals typically brief |
| **Mexican (Día de los Muertos)** | Celebrate deceased with altars, food, music — grief expressed through celebration and remembrance |
| **Jewish (Shiva)** | Seven-day mourning period with community support in the home |
| **Buddhist** | Funeral rites focus on the deceased's journey in the next life; emphasis on acceptance of impermanence |
| **West African** | Extended communal mourning with singing, dancing, and communal memory-sharing |
      `
    },
    {
      id: 'adol5-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Applied Recall** ✍️

      1) In Kübler-Ross's model, the DABDA mnemonic stands for Denial, Anger, ___, Depression, Acceptance. (one word)

      2) What type of care focuses on comfort and quality of life for terminally ill patients? (one word)

      3) The outward, culturally shaped expression of grief (funerals, wearing black) is called ___. (one word)

      Type the exact term.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['bargaining', 'hospice', 'mourning'],
        hint1: '"If only I had done X differently..." = making deals = ___',
        hint2: 'Comfort for the terminally ill — rhymes with "office" without the f',
        hint3: 'Different from grief (internal feeling) — this is the outward expression',
        explanation: 'Expected answers: bargaining (the "B" in DABDA — attempting to negotiate or make deals), hospice (comfort-focused end-of-life care), and mourning (the outward, cultural expression of grief — distinct from grief itself, which is the internal emotional response).'
      }
    },
    {
      id: 'adol5-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'A patient says "If I can just make it to my daughter\'s wedding, I\'ll accept whatever comes after." This is the ___ stage',
            options: ['denial', 'anger', 'bargaining', 'depression', 'acceptance']
          },
          {
            label: 'The internal emotional response to loss (sadness, yearning, anger) is called ___',
            options: ['mourning', 'grief', 'bereavement', 'hospice']
          },
          {
            label: 'Research by Bonanno found the most common response to loss is ___',
            options: ['prolonged depression', 'denial lasting years', 'resilience', 'all five Kübler-Ross stages in order']
          }
        ],
        correctAnswers: ['bargaining', 'grief', 'resilience'],
        hint1: 'Making deals or conditions = bargaining.',
        hint2: 'The internal feeling (not the public rituals).',
        hint3: 'Most people actually recover relatively quickly.',
        explanation: '"If I can just make it to..." is bargaining — making a conditional deal. Grief is the internal emotional response (vs. mourning which is external/cultural). Bonanno\'s research found resilience is the most common trajectory — not prolonged depression.'
      }
    },
    {
      id: 'adol5-s6-strategy',
      type: 'text' as const,
      content: `
## Common Misconceptions and Exam Strategy

### Misconceptions to Avoid
- **"Everyone goes through all five stages in order"** — The AP exam specifically tests the critique that Kübler-Ross stages are not linear or universal. If an answer says "all dying patients experience these stages in this exact order," it's WRONG.
- **"Grief = mourning"** — These are distinct: grief is the internal emotional response; mourning is the outward, culturally shaped expression. The AP exam tests this distinction.
- **"Continuing to think about a deceased loved one = unresolved grief"** — Modern research on "continuing bonds" shows maintaining a connection with the deceased is HEALTHY and normal.
- **"Everyone needs months/years to recover from loss"** — Bonanno's research on resilience challenges this assumption.

### AP Strategy Moves
- **DABDA is the most commonly tested mnemonic from this unit.** Know the acronym AND be able to identify each stage from scenario descriptions.
- The AP exam loves questions that require you to CRITIQUE models, not just recall them. Know the limitations of Kübler-Ross (not linear, not universal, cultural bias, limited research base).
- Distinguish between the three "B" words: bereavement (state of having lost someone), grief (internal feelings), mourning (outward expression).
- Hospice vs. palliative care: hospice = end-of-life comfort care; palliative = symptom relief at any serious illness stage (broader term).
- Cultural grief practices may appear as free-response prompts. Know 2-3 specific cultural examples (e.g., Día de los Muertos, Shiva, Buddhist funeral rites).
      `
    },
    {
      id: 'adol5-s7-applied',
      type: 'multiple-choice' as const,
      content: `
      **Applied Scenarios** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'After her husband\'s death, Maria oscillates between crying over old photos and then focusing on practical tasks like updating bank accounts and reconnecting with friends. According to the dual-process model of grief, this behavior represents:',
            options: [
              'Pathological grief — she is not consistently mourning',
              'Denial — she is avoiding her grief by staying busy',
              'Healthy coping — oscillating between loss-oriented and restoration-oriented processing',
              'The anger stage of Kübler-Ross — she is channeling frustration into activity'
            ],
            correctAnswer: 2,
            explanation: 'The dual-process model (Stroebe & Schut) describes healthy grief as oscillation between loss-oriented coping (crying, yearning, processing the loss) and restoration-oriented coping (practical tasks, forming new roles, building new routines). Maria\'s behavior — alternating between emotional processing and practical adjustment — is exactly what this model predicts as healthy grief.'
          },
          {
            question: 'A psychologist argues that the Kübler-Ross model is problematic because it was developed primarily with Western patients and may not apply to cultures where communal celebration of the dead is the norm. This critique highlights which limitation?',
            options: [
              'The model\'s stages are too few in number',
              'The model has cultural bias and may not be universally applicable',
              'The model only applies to sudden deaths',
              'The model incorrectly identifies anger as a grief response'
            ],
            correctAnswer: 1,
            explanation: 'Cultural bias is one of the most important critiques of the Kübler-Ross model. It was based primarily on observations of Western, middle-class individuals. Cultures with different grief traditions (e.g., celebratory remembrance in Mexican Día de los Muertos, communal mourning in West African traditions) may not follow the same emotional trajectory described by the five stages.'
          }
        ]
      }
    }
  ]
}
