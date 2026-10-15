export const psychPersonalityPart1Data = {
  topicSlug: 'personality-theories',
  sections: [
    {
      id: 'personality-theories-p1-s1-intro',
      type: 'text' as const,
      content: `
# 🧠 Personality Theories

**Part 1 of 7 — Psychodynamic Theory: The Unconscious Mind and Projective Tests**

> 🔑 **Key Concept:** According to the psychodynamic theory of personality, **unconscious processes drive personality**. Psychodynamic psychologists assess personality with **projective tests** designed to probe the preconscious and unconscious mind.

**Personality** is a person's characteristic pattern of thinking, feeling, and acting. Every theory in this topic answers two questions the AP exam asks again and again: **how does the theory define personality, and how does it assess personality?**

### Roadmap: Four Perspectives on Personality

| Perspective | What drives personality? | How is it assessed? | Where you study it |
|-------------|-------------------------|---------------------|--------------------|
| **Psychodynamic** | Unconscious processes and conflicts | Projective tests (Rorschach, TAT), clinical interpretation | Parts 1 and 2 |
| **Humanistic** | Unconditional regard and the self-actualizing tendency | Self-reports about how people see themselves | Part 3 |
| **Social-cognitive** | Reciprocal determinism among behavior, thoughts, and environment | Behavior observed in realistic situations | Part 4 |
| **Trait** | Enduring characteristics that produce typical responses | Personality inventories built with factor analysis | Part 5 |

### Freud's Core Claim: Most of the Mind Is Out of Sight

Sigmund Freud, a physician working in Vienna around 1900, treated patients whose symptoms had no clear physical cause. He concluded that people are moved by wishes, fears, and memories they cannot directly see. A common teaching image is an **iceberg**: a small part of mental life sits above the waterline, and most of it lies below.

| Level of awareness | What it holds | Example |
|--------------------|---------------|---------|
| **Conscious** | Whatever you are aware of right now | Reading this sentence |
| **Preconscious** | Material outside awareness that can be retrieved easily | Your best friend's birthday, which comes to mind when someone asks |
| **Unconscious** | Thoughts, wishes, and feelings kept out of awareness because they are threatening | Resentment toward a parent that a person would never admit, even privately |

The key point for AP: in psychodynamic theory, the unconscious is not simply "stuff you are not thinking about." It is **actively kept out of awareness** because facing it would cause anxiety, yet it still shapes behavior, moods, choices, and relationships.

### The Ego Is the Part Under Pressure

Freud described personality as a balance among competing demands. As context only: he called the pleasure-seeking drive the *id* and the internalized moral standards the *superego*. The piece you need for this course is the **ego**, the part of personality that deals with reality and tries to keep the person functioning. When unconscious impulses threaten to break through, the ego feels anxiety, and it protects itself with **ego defense mechanisms**, the subject of Part 2.

> 🔑 **AP Connection:** The CED tests the psychodynamic idea that unconscious processes drive personality, the eight defense mechanisms, and projective tests. Freud's stage theory of psychosexual development is outside the scope of the exam, so this lesson does not cover it.
      `
    },
    {
      id: 'personality-theories-p1-s2-check',
      type: 'multiple-choice' as const,
      content: `
**Concept Check — Levels of Awareness** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'During a conversation, Priya cannot think of her dentist\'s name, but when a friend asks who cleans her teeth, the name comes to her at once. In psychodynamic terms, before the question the name was held in which part of the mind?',
            options: [
              'The unconscious, where material is pushed away because it would cause anxiety',
              'The preconscious, where material sits just out of awareness',
              'The conscious mind, where material she is focused on is held',
              'The ego, where material that threatens the person is screened out'
            ],
            correctAnswer: 1,
            explanation: 'A dentist\'s name is not threatening and comes back the moment it is cued, which is what Freud meant by preconscious. The unconscious holds material kept out of awareness because it is threatening, and the conscious mind holds only what she is attending to right now.'
          },
          {
            question: 'Which statement best captures the psychodynamic definition of personality?',
            options: [
              'Personality grows from a built-in drive toward growth when people feel accepted',
              'Personality reflects a stable set of traits that can be measured with questionnaires',
              'Personality is driven by unconscious processes that people cannot directly observe',
              'Personality emerges as behavior, thoughts, and settings keep influencing one another'
            ],
            correctAnswer: 2,
            explanation: 'The CED states that in psychodynamic theory, unconscious processes drive personality. The growth drive describes humanistic theory, the measurable stable traits describe trait theory, and the mutual influence of behavior, thoughts, and settings is the social-cognitive idea of reciprocal determinism.'
          },
          {
            question: 'A man insists he is calm and easygoing, yet friends notice that he becomes hostile whenever his older brother is mentioned. A psychodynamic psychologist would most likely explain the hostility as the result of',
            options: [
              'a learned habit he picked up by watching how his parents treated his brother',
              'feelings toward his brother that he keeps out of awareness but that still shape behavior',
              'a high score on the agreeableness scale that falls whenever he feels stressed',
              'a gap between his ideal self and the way his family treated him as a child'
            ],
            correctAnswer: 1,
            explanation: 'Psychodynamic theory explains behavior a person cannot account for by pointing to unconscious feelings that still drive actions. Learning by watching is a social-cognitive explanation, the agreeableness score is a trait explanation, and the ideal-self gap is a humanistic one.'
          }
        ]
      }
    },
    {
      id: 'personality-theories-p1-s3-assessment',
      type: 'text' as const,
      content: `
## 🔍 How Psychodynamic Psychologists Assess Personality

If the important material is unconscious, you cannot get at it by asking direct questions. A person cannot report what they are not aware of. So psychodynamic clinicians look for **indirect windows** into the mind.

### Windows Freud Used in Therapy

| Method | What happens | What the clinician looks for |
|--------|-------------|------------------------------|
| **Free association** | The patient says whatever comes to mind, without filtering | Pauses, topic changes, and blocks that suggest a sensitive area |
| **Dream analysis** | The patient reports dreams | The hidden (latent) meaning behind the remembered (manifest) story |
| **Slips of the tongue** | The clinician notes "accidental" word substitutions | A wish or feeling leaking past the ego's guard |

### Projective Tests

A **projective test** presents an **ambiguous stimulus** and asks the person to describe or interpret it. Because the stimulus has no single correct meaning, whatever structure the person adds is assumed to come from inside them. The person "projects" inner wishes, fears, and conflicts onto the stimulus. The CED says these tests are **designed to probe the preconscious and unconscious mind**.

| Test | Stimulus | Task | Interpretation |
|------|----------|------|----------------|
| **Rorschach inkblot test** | 10 symmetrical inkblots, published by Swiss psychiatrist Hermann Rorschach in 1921 | "What might this be?" | The clinician codes what is seen, which part of the blot is used, and how the response is formed |
| **Thematic Apperception Test (TAT)** | Ambiguous pictures of people in scenes, developed by Henry Murray and Christiana Morgan in the 1930s | Tell a story: what is happening, what led up to it, how it ends | Recurring themes (achievement, rejection, conflict) are read as the storyteller's own concerns |

### Worked Example: Reading a TAT Story

A card shows a young person seated at a desk, looking out a window. A 17-year-old says:

> "She's supposed to be studying, but she knows it won't matter. Her parents already decided she isn't the smart one. She'll fail the exam, and they won't even be surprised."

**Step 1. Note what the card does NOT contain.** Nothing in the picture shows parents, an exam, or failure. The teen supplied all of it.

**Step 2. Look for themes.** Expected failure, low expectations from parents, resignation.

**Step 3. Form a tentative hypothesis.** A psychodynamic clinician might suspect the teen feels judged at home and expects to disappoint. This is a lead to explore in interviews, not a diagnosis.

**Step 4. Ask the science-practice question.** Would a second clinician reach the same reading? Would this story predict anything about the teen's actual grades or family life? That is where projective tests run into trouble.

### Reliability and Validity: The Critique

| Concept | Meaning | How projective tests fare |
|---------|---------|---------------------------|
| **Reliability** | Consistency of a measure (across scorers, across time) | Interpretation depends on the clinician, so two scorers can read the same responses differently, which lowers **interrater reliability**. Standardized scoring systems for the Rorschach improved agreement. |
| **Validity** | Whether a test measures what it claims to measure | Weak for most uses: scores often fail to predict behavior or to identify specific disorders, and some scoring has labeled healthy adults as disturbed |

> 🔑 **AP Connection:** A test can be reliable without being valid. Two clinicians could agree perfectly on a score that still predicts nothing. Validity requires reliability, but reliability alone is not enough.
      `
    },
    {
      id: 'personality-theories-p1-s4-input',
      type: 'input-boxes' as const,
      content: `
**Vocabulary in Action** ✍️

Type the single term that fits each description.
      `,
      exercise: {
        questions: [
          {
            question: 'A clinician shows a client ambiguous pictures and asks for a story about each one, assuming the client will reveal hidden concerns. This kind of assessment is called a _____ test.',
            answer: 'projective',
            acceptableAnswers: ['projective test', 'projection'],
            explanation: 'Projective tests use ambiguous stimuli so that the person projects inner wishes and conflicts onto them. The TAT and the Rorschach are the standard examples.'
          },
          {
            question: 'Two psychologists independently score the same 40 Rorschach records and agree on only about half of their codes. The test is showing low interrater _____.',
            answer: 'reliability',
            acceptableAnswers: ['reliable', 'agreement'],
            explanation: 'Agreement between scorers is interrater reliability. Validity is a different question: whether the scores measure what they claim to measure.'
          },
          {
            question: 'Freud\'s term for the level of mind that holds information outside current awareness that can be recalled easily, such as a phone number, is the _____.',
            answer: 'preconscious',
            acceptableAnswers: ['preconscious mind', 'pre-conscious'],
            explanation: 'The preconscious holds retrievable, non-threatening material. The unconscious holds material kept out of awareness because it is threatening.'
          }
        ]
      }
    },
    {
      id: 'personality-theories-p1-s5-evaluate',
      type: 'text' as const,
      content: `
## ⚖️ Evaluating Psychodynamic Theory

### Strengths and Lasting Contributions

| Contribution | Why it matters today |
|--------------|---------------------|
| Much mental activity happens outside awareness | Modern research on implicit memory, priming, and implicit attitudes confirms that people process a great deal without awareness |
| People protect their self-image | Research on self-serving thinking and defensive reactions supports this broad idea |
| Talking with a trained listener can help | Psychodynamic ideas shaped later talk therapies |

### Major Criticisms

| Criticism | Explanation |
|-----------|-------------|
| **Hard to falsify** | The theory explains behavior after the fact. If a man loves his mother, that fits; if he hates her, that can be read as a defense against love. A theory that fits every outcome predicts none of them. |
| **Weak data base** | Freud built his ideas largely from **case studies** of his own patients, a small and unrepresentative sample, interpreted by Freud himself. |
| **Repression is doubtful** | Research suggests that traumatic events are more often remembered too well than pushed out of memory. |
| **Assessment problems** | Projective tests show weak reliability and validity compared with personality inventories. |

### The Modern Psychodynamic View

Today's psychodynamic psychologists keep a few core ideas: much of mental life is unconscious, childhood relationships shape adult patterns, and people carry inner conflicts they defend against. They have mostly dropped Freud's heavy emphasis on sexual drives. Note the difference between two meanings of "unconscious":

- The **cognitive unconscious** studied in modern labs is automatic processing (recognizing a face, a primed word choice). It is not hidden because it is threatening.
- The **psychodynamic unconscious** is a store of threatening material actively kept from awareness.

> 🔑 **AP Connection:** On the AAQ, a study built on one patient is a **case study**, and its findings have limited generalizability. When a stem asks why Freud's conclusions are hard to generalize, point to his small, unrepresentative sample of patients and his own interpretation of what they said.
      `
    },
    {
      id: 'personality-theories-p1-s6-applied',
      type: 'multiple-choice' as const,
      content: `
**Applied Scenarios — Projective Testing** 🔬

*A practice study summary (hypothetical):* A clinic gives the TAT to 60 adults. Two trained psychologists each score every story for "need for achievement." Their scores agree closely. Over the next two years, the achievement scores show no relationship with the adults' job promotions, course grades, or self-set goals.
      `,
      exercise: {
        questions: [
          {
            question: 'Which conclusion about the TAT achievement scores is best supported by this practice study?',
            options: [
              'The scores are valid but unreliable, as scorers agreed yet the scores were unrelated to outcomes',
              'The scores are neither reliable nor valid, as scorers disagreed and no outcome was predicted',
              'The scores appear reliable but show little evidence of validity for predicting real outcomes',
              'The scores are both reliable and valid, as agreement between scorers shows accuracy'
            ],
            correctAnswer: 2,
            explanation: 'Close agreement between scorers shows interrater reliability, but scores that predict none of the achievement outcomes lack evidence of validity. Agreement alone does not show that a test measures what it claims to measure.'
          },
          {
            question: 'A psychodynamic psychologist defends the TAT by saying that achievement needs are often unconscious and so may not show up in obvious behavior. A critic would most likely respond that this defense',
            options: [
              'proves the test is valid, since unconscious needs cannot be measured directly',
              'shows that the test has low interrater reliability across different scorers',
              'turns the study into an experiment, since the outcome becomes a manipulation',
              'makes the claim hard to falsify, since any result can be explained away'
            ],
            correctAnswer: 3,
            explanation: 'If a missing relationship is explained by unconscious needs and a present one would also confirm the theory, no result could count against it, which is the falsifiability critique. The scorers in this study agreed, so reliability is not the issue, and nothing was manipulated, so it is not an experiment.'
          }
        ]
      }
    }
  ]
}
