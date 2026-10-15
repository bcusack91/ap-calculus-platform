export const psychPerceptionPart4Data = {
  topicSlug: 'perception-attention',
  sections: [
    {
      id: 'perce4-s1-intro',
      type: 'text' as const,
      content: `
# 👁️ Perception & Attention

**Part 4 of 7 — Attention**

Attention is the gateway to perception — you can only perceive what you attend to. The CED (2.1.A.5) describes attention as an **interaction of sensation and perception that is affected by internal and external processes**. Because attention is LIMITED, it also leads to some surprising failures of awareness.

### Key Definitions

| Term | Definition | Classic Study |
|------|-----------|---------------|
| **Selective attention** | Focusing on one stimulus while filtering out others | Cherry (1953) — dichotic listening |
| **Cocktail party effect** | Ability to detect personally relevant stimuli (like your name) in unattended channels | Moray (1959) — name recognition |
| **Inattentional blindness** | Failure to notice fully visible, unexpected stimuli when attention is focused elsewhere | Simons & Chabris (1999) — gorilla study |
| **Change blindness** | Failure to detect changes in visual scenes, especially during disruptions | Simons & Levin (1998) — door study |

### What Captures Attention: Internal and External Factors

| Factor type | Examples | Scenario |
|-------------|----------|----------|
| **External** (features of the stimulus) | Loudness, brightness, sudden motion, novelty | A siren cuts through classroom chatter |
| **Internal** (features of the perceiver) | Personal relevance, goals, expectations, current task | You hear your own name across a noisy cafeteria; a hungry shopper notices every food sign |

> **AP Favorite:** The cocktail party effect shows an INTERNAL factor at work: the unattended conversation is not processed as fully as the one you are in, yet a personally relevant word (your name, a topic you care about) still breaks through and captures attention.
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
              'Sensory adaptation — your ears stopped responding to the steady party noise around you',
              'The cocktail party effect — personally relevant words in unattended speech can grab attention',
              'Inattentional blindness — absorbed in conversation, you missed most of the room around you',
              'Change blindness — you detected a sudden shift in the background noise of the room'
            ],
            correctAnswer: 1,
            explanation: 'Hearing your own name in speech you were not attending to is the cocktail party effect, a form of selective attention in which personally relevant stimuli capture attention (CED 2.1.A.5.i). Sensory adaptation would make you LESS responsive to the noise, and inattentional and change blindness describe failures to notice, not noticing.'
          },
          {
            question: 'In Simons and Chabris\' famous study, participants counting basketball passes failed to notice a person in a gorilla suit walking through the scene. This demonstrates:',
            options: [
              'Change blindness — participants failed to detect a change',
              'The cocktail party effect — the gorilla was personally relevant',
              'Inattentional blindness — focused attention caused failure to see an unexpected stimulus',
              'Selective attention working correctly — participants successfully filtered out irrelevant information'
            ],
            correctAnswer: 2,
            explanation: 'This is the classic demonstration of INATTENTIONAL blindness — when attention is focused on a specific task (counting passes), we can fail to notice fully visible, salient stimuli (a gorilla!) that we would normally notice immediately. It\'s NOT change blindness (nothing changed — the gorilla was simply there). The "selective attention working correctly" option is tempting but wrong because the gorilla was not "irrelevant noise" — it was a person in a gorilla suit walking through the middle of the scene for several seconds, even pausing to thump its chest!'
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
          { label: 'Hearing your own name across a noisy room while focused on another conversation is the ___ party effect', answer: 'cocktail' },
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
          { label: 'A viewer watching a magic show doesn\'t notice the magician slip a card into their pocket', options: ['Selective attention', 'Inattentional blindness', 'Change blindness', 'Cocktail party effect'] }
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
| Multitasking is efficient | Splitting attention between two demanding tasks lowers performance on both |
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
              'Holding the phone takes a hand off the wheel, which slows steering responses',
              'Hands-free audio is poorer, so drivers strain to hear and lose track of the road',
              'The conversation itself drains attention, causing inattentional blindness',
              'Change blindness keeps drivers from detecting shifts in traffic while on calls'
            ],
            correctAnswer: 2,
            explanation: 'The danger of cell phone use while driving is NOT about the hands — it\'s about the cognitive load. Engaging in a phone conversation diverts attentional resources from driving, causing INATTENTIONAL blindness. Drivers "look but don\'t see" — they may look directly at a red light or pedestrian but fail to consciously perceive it because attention is consumed by the conversation. This is why hands-free laws alone don\'t solve the problem.'
          },
          {
            question: 'In a listening experiment, a participant repeats a message played in the right ear while ignoring a message in the left ear. She does NOT notice when the left-ear message switches from English to French, but she DOES notice when her own name is played in the left ear. What do these results suggest about selective attention?',
            options: [
              'Unattended speech is fully processed for meaning, so she should have caught the switch',
              'Unattended input gets limited processing, so only relevant words like her name break through',
              'Attention depends only on loudness, so her name must have been played more loudly',
              'Selective attention breaks down whenever two messages are played at the same time'
            ],
            correctAnswer: 1,
            explanation: 'Missing the language switch shows that unattended speech gets limited processing, yet catching her own name shows that personally relevant words can still break through, which is the cocktail party effect. Full processing would have revealed the switch, nothing indicates her name was louder, and she successfully attended to the right-ear message.'
          }
        ]
      }
    }
  ]
}
