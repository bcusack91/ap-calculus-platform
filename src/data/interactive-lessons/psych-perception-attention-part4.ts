export const psychPerceptionPart4Data = {
  topicSlug: 'perception-attention',
  sections: [
    {
      id: 'perce4-s1-intro',
      type: 'text' as const,
      content: `
# 👁️ Perception & Attention

**Part 4 of 7 — Attention**

Attention is the gateway to perception — you can only perceive what you attend to. But attention is LIMITED, which leads to some surprising failures of awareness.

### Key Definitions

| Term | Definition | Classic Study |
|------|-----------|---------------|
| **Selective attention** | Focusing on one stimulus while filtering out others | Cherry (1953) — dichotic listening |
| **Cocktail party effect** | Ability to detect personally relevant stimuli (like your name) in unattended channels | Moray (1959) — name recognition |
| **Inattentional blindness** | Failure to notice fully visible, unexpected stimuli when attention is focused elsewhere | Simons & Chabris (1999) — gorilla study |
| **Change blindness** | Failure to detect changes in visual scenes, especially during disruptions | Simons & Levin (1998) — door study |
| **Divided attention** | Attempting to attend to multiple stimuli simultaneously | Strayer & Johnston (2001) — cell phone driving |

### Selective Attention: The Filter Models

| Model | Researcher | Key Idea |
|-------|-----------|----------|
| **Early selection** (filter theory) | Broadbent (1958) | Filter based on physical features BEFORE meaning is processed |
| **Late selection** | Deutsch & Deutsch (1963) | ALL stimuli are processed for meaning; filter occurs at response selection |
| **Attenuation theory** | Treisman (1964) | Unattended messages are turned DOWN (attenuated), not completely blocked — important words (your name) break through |

> **AP Favorite:** Treisman's attenuation theory best explains the cocktail party effect — unattended channels are attenuated (turned down) but not completely blocked, so highly relevant stimuli (your name, "fire!") can break through.
      `
    },
    {
      id: 'perce4-s2-concept-check',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'At a noisy party, you\'re deep in conversation when you suddenly hear your name mentioned across the room. This is BEST explained by:',
            options: [
              'Broadbent\'s filter theory — your name was in the attended channel',
              'Treisman\'s attenuation theory — unattended messages are attenuated but important stimuli break through',
              'Inattentional blindness — you failed to notice the conversation',
              'Change blindness — you detected a change in the auditory scene'
            ],
            correctAnswer: 1,
            explanation: 'The cocktail party effect — hearing your name in unattended background noise — is best explained by Treisman\'s attenuation theory. According to Treisman, unattended messages are NOT completely filtered out (as Broadbent suggested) but are ATTENUATED (turned down). Highly personally relevant stimuli like your name have a low activation threshold, so they can break through even when attenuated. This is why Treisman\'s model replaced Broadbent\'s strict filter theory.'
          },
          {
            question: 'In Simons and Chabris\' famous study, participants counting basketball passes failed to notice a person in a gorilla suit walking through the scene. This demonstrates:',
            options: [
              'Change blindness — participants failed to detect a change',
              'The cocktail party effect — the gorilla was personally relevant',
              'Inattentional blindness — focused attention caused failure to notice an unexpected stimulus',
              'Selective attention working correctly — participants successfully filtered out irrelevant information'
            ],
            correctAnswer: 2,
            explanation: 'This is the classic demonstration of INATTENTIONAL blindness — when attention is focused on a specific task (counting passes), we can fail to notice fully visible, salient stimuli (a gorilla!) that we would normally notice immediately. It\'s NOT change blindness (nothing changed — the gorilla was always there). Option D is tempting but wrong because the gorilla was not "irrelevant noise" — it was a gorilla walking through the middle of the scene for 9 seconds!'
          }
        ]
      }
    },
    {
      id: 'perce4-s3-deep-dive',
      type: 'text' as const,
      content: `
### 📚 Key Studies in Detail

**Inattentional Blindness — Simons & Chabris (1999)**
- Participants watched a video of people passing basketballs and counted passes by one team
- A person in a gorilla suit walked through the scene for 9 seconds, beat their chest, and walked off
- **Result:** ~50% of participants completely missed the gorilla
- **Implication:** We see far less than we think we do; attention is required for conscious perception

**Change Blindness — Simons & Levin (1998)**
- An experimenter asked a pedestrian for directions
- During the conversation, workers carrying a door walked between them, and a DIFFERENT experimenter replaced the first one
- **Result:** ~50% of participants did NOT notice they were now talking to a completely different person
- **Key:** Change blindness is strongest when the change occurs during a visual disruption (saccade, blink, obstruction)

**Inattentional Blindness vs. Change Blindness:**

| Feature | Inattentional Blindness | Change Blindness |
|---------|------------------------|------------------|
| **What's missed** | An unexpected NEW object/event | A CHANGE to an existing scene |
| **Cause** | Focused attention elsewhere | Visual disruption during the change |
| **Classic study** | Gorilla in basketball game | Door study (person swap) |
| **Key insight** | We don't see what we don't attend to | We don't detect changes without focused comparison |

### Practical Implications

| Application | Connection |
|------------|------------|
| **Driving safety** | Cell phone use causes inattentional blindness — you can "look but not see" a pedestrian |
| **Eyewitness testimony** | Witnesses may miss critical details due to inattentional blindness |
| **Magic tricks** | Magicians exploit inattentional blindness by directing attention away from the method |
| **Advertising** | Ads must capture attention or they won't be perceived at all |
      `
    },
    {
      id: 'perce4-s4-input-boxes',
      type: 'input-boxes' as const,
      content: `
**Recall Practice** ✍️
      `,
      exercise: {
        inputs: [
          { label: 'Treisman\'s theory says unattended messages are ___ (turned down, not completely blocked)', answer: 'attenuated' },
          { label: 'Failing to notice a gorilla in a basketball video demonstrates ___ blindness', answer: 'inattentional' },
          { label: 'Failing to notice you\'re talking to a different person after a door passes by demonstrates ___ blindness', answer: 'change' }
        ]
      }
    },
    {
      id: 'perce4-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concept** 🔍
      `,
      exercise: {
        dropdowns: [
          { label: 'A student studying in a noisy cafeteria manages to focus on her textbook and ignore surrounding conversations', options: ['Selective attention', 'Inattentional blindness', 'Change blindness', 'Cocktail party effect'] },
          { label: 'A driver talking on a cell phone runs a red light because they were focused on the conversation', options: ['Selective attention', 'Inattentional blindness', 'Change blindness', 'Cocktail party effect'] },
          { label: 'A viewer watching a magic show doesn\'t notice the magician slip a card into their pocket', options: ['Selective attention', 'Inattentional blindness', 'Change blindness', 'Divided attention'] }
        ],
        correctAnswers: ['Selective attention', 'Inattentional blindness', 'Inattentional blindness'],
        hint1: 'Successfully focusing on one thing while filtering out others.',
        hint2: 'Failing to notice something visible because attention was elsewhere.',
        hint3: 'The magician directed attention away from the trick, causing failure to notice.',
        explanation: 'Studying in a noisy cafeteria = selective attention (successfully filtering). Running a red light while on the phone = inattentional blindness (failed to perceive a fully visible stimulus). Missing the magician\'s move = inattentional blindness (misdirection caused failure to notice).'
      }
    },
    {
      id: 'perce4-s6-strategy',
      type: 'text' as const,
      content: `
### 🎯 AP Strategy: Attention Questions

**Common Misconceptions:**

| Misconception | Reality |
|--------------|---------|
| Inattentional blindness = not looking | You ARE looking — your eyes are pointed at it, but you don't consciously perceive it |
| Multitasking is efficient | Divided attention reduces performance on ALL tasks |
| Change blindness = poor memory | It's a perceptual failure, not a memory failure — the change is happening in real time |
| The cocktail party effect means we hear everything | We only detect HIGH-RELEVANCE stimuli in unattended channels |

**Key Distinction: Inattentional Blindness vs. Change Blindness**
- **Inattentional blindness**: Something IS there → you DON'T see it (attention focused elsewhere)
- **Change blindness**: Something CHANGES → you DON'T detect the change (disruption during change)
- **Test**: Was the stimulus present the whole time? → Inattentional blindness. Did something change? → Change blindness.

> **AP Tip:** The AP exam loves applying attention concepts to real-world situations — especially driving, eyewitness testimony, and cell phone use. Always connect the concept to its practical implications.
      `
    },
    {
      id: 'perce4-s7-applied',
      type: 'multiple-choice' as const,
      content: `
**Applied Scenarios** 🔬
      `,
      exercise: {
        questions: [
          {
            question: 'Research shows that driving while talking on a hands-free cell phone is just as dangerous as using a handheld phone. This finding is BEST explained by:',
            options: [
              'The physical act of holding the phone causes the danger',
              'Hands-free phones have worse audio quality',
              'The cognitive demands of the conversation produce inattentional blindness, regardless of whether hands are free',
              'Change blindness — drivers can\'t detect changes while on the phone'
            ],
            correctAnswer: 2,
            explanation: 'The danger of cell phone use while driving is NOT about the hands — it\'s about the cognitive load. Engaging in a phone conversation diverts attentional resources from driving, causing INATTENTIONAL blindness. Drivers "look but don\'t see" — they may look directly at a red light or pedestrian but fail to consciously perceive it because attention is consumed by the conversation. This is why hands-free laws alone don\'t solve the problem.'
          },
          {
            question: 'During a dichotic listening experiment, a participant shadows (repeats) a message in the right ear while ignoring the left ear. The participant does NOT notice when the left ear message switches from English to French, but DOES notice when their own name is played in the left ear. This pattern supports:',
            options: [
              'Broadbent\'s filter theory — all unattended input is completely blocked',
              'Deutsch & Deutsch\'s late selection — all input is fully processed for meaning',
              'Treisman\'s attenuation theory — unattended input is reduced but personally relevant stimuli break through',
              'Bottom-up processing — raw sensory data drives attention'
            ],
            correctAnswer: 2,
            explanation: 'This result is inconsistent with both Broadbent (who would predict NOTHING gets through in the unattended ear) and Deutsch & Deutsch (who would predict the language switch WOULD be noticed since all meaning is processed). Treisman\'s attenuation theory perfectly explains it: unattended messages are attenuated (so the language switch isn\'t noticed), but highly relevant stimuli like your own name have a low activation threshold and break through the attenuation.'
          }
        ]
      }
    }
  ]
}
