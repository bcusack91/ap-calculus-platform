export const englangToneVoiceAnalysisPart1Data = {
  topicSlug: 'englang-tone-voice-analysis',
  sections: [
    {
      id: 'eltva1-intro',
      type: 'text' as const,
      content: `
# 🎙️ Tone and Voice Analysis

**Part 1 of 7 — Distinguishing Authorial Attitude from Stylistic Persona**

---

## Tone vs Voice

Students often confuse these terms. They are related but distinct:

| Term | Definition | Guiding Question |
|------|------------|------------------|
| **Tone** | The author's attitude toward subject or audience | How does the writer feel? |
| **Voice** | The distinctive persona/style through which ideas are expressed | Who is this writer on the page? |

### Tone Can Shift
A passage might move from:
- Concerned -> urgent
- Skeptical -> hopeful
- Detached -> indignant

Tracking tone shifts is a core AP skill.

### Voice Is More Stable
Voice reflects recurring stylistic identity:
- Conversational and witty
- Formal and analytical
- Reflective and meditative
- Polemical and confrontational

> 🔑 Tone is often local (sentence/paragraph level), while voice is global (whole-text style identity).
      `
    },
    {
      id: 'eltva1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement best distinguishes tone from voice?',
            options: [
              'Tone and voice are exact synonyms.',
              "Tone is the writer's attitude; voice is the writer's stylistic persona.",
              'Voice changes every paragraph, while tone stays fixed.',
              'Tone only applies to fiction, voice only to nonfiction.'
            ],
            correctAnswer: 1,
            explanation: 'Tone describes attitude (e.g., ironic, urgent, hopeful). Voice describes broader stylistic identity (e.g., formal, witty, authoritative). Tone can shift quickly; voice tends to persist across a text.'
          },
          {
            question: 'A speaker begins calm and measured, then becomes outraged after listing injustices. This is best described as:',
            options: [
              'A voice collapse',
              'A tone shift from measured to indignant',
              'A logical fallacy',
              'A change in audience'
            ],
            correctAnswer: 1,
            explanation: 'The speaker-s attitude changes from measured to indignant, which is a tone shift. The underlying voice may remain the same (e.g., formal and authoritative) even as tone evolves.'
          }
        ]
      }
    },
    {
      id: 'eltva1-content',
      type: 'text' as const,
      content: `
## How Writers Create Tone and Voice

### Diction and Connotation
| Word Pair | Tone Difference |
|-----------|-----------------|
| "slim" vs "skinny" | positive vs negative nuance |
| "assertive" vs "aggressive" | confident vs hostile |
| "economical" vs "cheap" | prudent vs stingy |

### Syntax and Rhythm
- Long periodic sentences can sound formal, reflective, or controlled
- Short declaratives can sound forceful, urgent, or blunt
- Repetition can sound passionate, insistent, or obsessive

### Figurative and Structural Cues
- Irony can create sardonic or skeptical tone
- Rhetorical questions can create confrontational or invitational tone
- Strategic concessions can create fair-minded, balanced voice

## Tone Vocabulary (Use Precise Words)

| Weak Term | Stronger Alternatives |
|-----------|-----------------------|
| "nice" | conciliatory, warm, appreciative |
| "mean" | scornful, caustic, contemptuous |
| "sad" | elegiac, mournful, somber |
| "angry" | indignant, outraged, accusatory |
| "serious" | earnest, grave, resolute |

### AP Writing Move
Do not just label tone. Explain progression:
"The author shifts from cautiously analytical to sharply accusatory, a turn that mirrors the essay's movement from diagnosis to moral indictment."
      `
    },
    {
      id: 'eltva1-input',
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

1) The writer's attitude toward the subject is called _______.

2) The writer's recurring stylistic persona is called _______.

3) A shift from calm to outraged is a tone _______.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['tone', 'voice', 'shift'],
        hint1: 'Attitude toward topic/audience.',
        hint2: 'The "who" of the writing persona.',
        hint3: 'Movement from one attitude to another.',
        explanation: 'Tone = attitude. Voice = stylistic persona. Movement between attitudes = tone shift.'
      }
    },
    {
      id: 'eltva1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Identify Tone and Voice Moves** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: '"I once believed this system was fair. I no longer can." This likely signals a tone of ___',
            options: ['Disillusionment / sober reconsideration', 'Celebratory optimism', 'Comic detachment', 'Technical neutrality']
          },
          {
            label: 'Consistent use of precise terms, balanced concessions, and formal syntax contributes most to ___',
            options: ['An authoritative analytical voice', 'A chaotic voice', 'A playful comic tone only', 'No rhetorical effect']
          },
          {
            label: 'Replacing "angry" with "indignant" in analysis improves ___',
            options: ['Precision of tone vocabulary', 'Sentence length', 'Plot summary', 'Grammar correctness only']
          }
        ],
        correctAnswers: ['Disillusionment / sober reconsideration', 'An authoritative analytical voice', 'Precision of tone vocabulary'],
        hint1: 'The writer abandons prior trust.',
        hint2: 'Formal balance + precision = authority.',
        hint3: 'Specific tone words are stronger on AP.',
        explanation: '"I no longer can" suggests disillusionment. Formal precision builds authoritative voice. "Indignant" is more exact than "angry."'
      }
    },
    {
      id: 'eltva1-strategy',
      type: 'text' as const,
      content: `
## AP Exam Strategy: Tone and Voice

- Use precise tone adjectives (indignant, sardonic, elegiac) rather than vague words
- Identify WHERE tone shifts and explain WHY that shift matters
- Distinguish local tone effects from overall voice identity
- Support tone claims with diction/syntax evidence, not intuition
- In essays, connect tone evolution to argument progression
- Avoid over-labeling: 1-2 accurate tone terms are better than a long list
      `
    },
    {
      id: 'eltva1-applied',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A writer opens with neutral policy summary, then recounts victims stories, then ends with "Silence is complicity." What is the best description?',
            options: [
              'Tone remains neutral throughout',
              'Tone shifts from analytical to morally urgent, intensifying persuasive force',
              'Voice disappears in the conclusion',
              'The ending is irrelevant to tone'
            ],
            correctAnswer: 1,
            explanation: 'The passage moves from detached analysis toward urgent moral judgment. This tonal escalation aligns with persuasive intent: inform first, then compel ethical response.'
          },
          {
            question: 'Which AP analysis sentence is strongest?',
            options: [
              '"The tone is serious."',
              '"The author has a voice."',
              '"Through clipped declaratives and charged verbs, the speaker adopts an indignant tone that culminates in a direct call for accountability."',
              '"The tone is formal and informal."'
            ],
            correctAnswer: 2,
            explanation: 'This choice identifies concrete language features, uses precise tone vocabulary, and links style to rhetorical effect. That is the depth AP analysis requires.'
          }
        ]
      }
    }
  ]
};
