export const psychHistoryApproachesPart2Data = {
  topicSlug: 'history-approaches-psychology',
  sections: [
    {
      id: 'histo2-perspectives',
      type: 'text' as const,
      content: `
# 🧠 History & Approaches to Psychology

**Part 2 of 7 — Psychological Perspectives and the Biopsychosocial Approach**

> 🔑 **Key Concept:** The AP exam asks you to compare and contrast how seven perspectives (biological, behavioral, cognitive, evolutionary, humanistic, psychodynamic, and sociocultural) explain behavior and mental processes (skill 1.A). Each is a lens that highlights different causes of the same behavior.

## The Seven Perspectives

| Perspective | Focuses on | Typical question it asks |
|------------|-------|-------------|
| **Biological** | Brain, nervous system, hormones, neurotransmitters, genes | What is happening in the body and brain? |
| **Behavioral** | Observable behavior learned through conditioning and reinforcement | What rewards, punishments, or associations shaped this behavior? |
| **Cognitive** | Thinking, memory, attention, beliefs, and interpretations | How is the person perceiving and interpreting the situation? |
| **Evolutionary** | How natural selection shaped behaviors that aided survival and reproduction | How might this behavior have helped our ancestors survive or reproduce? |
| **Humanistic** | Free will, personal growth, and the drive to fulfill one's potential | How is the person striving to grow, and are their needs for acceptance being met? |
| **Psychodynamic** | Unconscious thoughts, feelings, and conflicts, often rooted in childhood | What unconscious conflict might be driving this behavior? |
| **Sociocultural** | Culture, social norms, family, peers, and social context | How do culture and the people around the person shape this behavior? |

## The Biopsychosocial Approach

Most behavior has more than one cause. The **biopsychosocial approach** combines three levels of analysis:
- **Biological** factors: genes, brain chemistry, hormones, health
- **Psychological** factors: thoughts, emotions, learning, personality
- **Social-cultural** factors: family, peers, culture, economic circumstances

The perspectives are not competitors that must be ranked. Each explains part of the picture, and the biopsychosocial approach brings them together.
      `
    },
    {
      id: 'histo2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'The biopsychosocial approach emphasizes',
            options: [
              'genes and brain chemistry as the root cause of all behavior',
              'the interaction of biological, psychological, and social factors',
              'unconscious drives, childhood conflicts, and defense mechanisms',
              'observable behavior shaped by rewards, punishments, and conditioning'
            ],
            correctAnswer: 1,
            explanation: 'The biopsychosocial approach explains behavior as the combined result of biological, psychological, and social-cultural factors rather than any single cause.'
          },
          {
            question: 'A psychologist suggests that people fear snakes more easily than cars because ancestors who quickly learned to avoid snakes were more likely to survive. Which perspective is she using?',
            options: [
              'Sociocultural',
              'Behavioral',
              'Humanistic',
              'Evolutionary'
            ],
            correctAnswer: 3,
            explanation: 'Explaining a behavior by how it helped ancestors survive and reproduce is the evolutionary perspective.'
          }
        ]
      }
    },
    {
      id: 'histo2-worked',
      type: 'text' as const,
      content: `
## Worked Example: One Behavior, Seven Lenses

**Behavior:** A high school junior has intense test anxiety and freezes during exams.

| Perspective | Explanation |
|-------------|-------------|
| **Biological** | The stress response floods the body with stress hormones, raising heart rate and making it hard to retrieve memories |
| **Behavioral** | Past exams were followed by embarrassment, so test settings became a conditioned cue for fear; avoiding studying is reinforced because it brings short-term relief |
| **Cognitive** | The student interprets each hard question as proof of failure ("I'm going to bomb this"), and that worry uses up working memory |
| **Evolutionary** | A fast fear response to threats helped ancestors survive, but the same system fires in situations that are not physically dangerous |
| **Humanistic** | The student feels accepted by others only when earning high grades, so each test threatens their sense of worth |
| **Psychodynamic** | Unconscious fears of disappointing a demanding parent, rooted in childhood, surface as anxiety during tests |
| **Sociocultural** | Family and community expectations, and a school culture that ranks students publicly, raise the stakes of every exam |

**Compare and contrast:** The behavioral and cognitive explanations both point to learning, but the behavioral lens looks at observable associations and consequences, while the cognitive lens looks at the student's interpretations. A **biopsychosocial** account would combine the stress response (biological), the catastrophic thoughts (psychological), and the school's public ranking (social).
      `
    },
    {
      id: 'histo2-input',
      type: 'input-boxes' as const,
      content: `
      **Applied Recall (exact term answers)** ✍️

      1) Which perspective focuses on unconscious thoughts and conflicts rooted in childhood?

      2) Which approach combines biological, psychological, and social-cultural levels of analysis?

      3) Which perspective emphasizes free will, personal growth, and fulfilling one's potential?

      Use the exact term from this part.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['psychodynamic', 'biopsychosocial', 'humanistic'],
        hint1: 'Starts with: P — the unconscious mind',
        hint2: 'Starts with: B — three levels of analysis in one word',
        hint3: 'Starts with: H — growth and potential',
        explanation: 'Expected answers: psychodynamic (unconscious conflicts), biopsychosocial (biological + psychological + social-cultural), and humanistic (free will and personal growth).'
      }
    },
    {
      id: 'histo2-culture-misuse',
      type: 'text' as const,
      content: `
## Culture, Expectations, and Misapplied Ideas (Skill 1.B)

**Cultural norms and circumstances matter.** A behavior that seems unusual in one culture may be expected in another. For example, avoiding direct eye contact with an adult is a sign of respect in some cultures and can be misread as dishonesty in others. Good explanations ask what the person's culture and circumstances expect.

**Psychological ideas can be applied in inappropriate or discriminatory ways.** The exam asks you to explain the implications when this happens:

| Misapplication | What happened | Implication |
|----------------|--------------|-------------|
| **Eugenics** | Some theorists used evolutionary ideas to claim certain groups were "unfit," supporting forced sterilization and discriminatory laws (CED 1.1.A.2) | Real harm to people's rights and lives |
| **Intelligence test misuse** | Test scores were used to limit access to jobs, military ranks, schools, and immigration to the US (CED 2.8.C.3) | Opportunities denied based on biased measurement |
| **Overgeneralizing from narrow samples** | Findings from one cultural group are treated as true for all people | Behavior in other groups is mislabeled as abnormal or deficient |

> 🔑 **AP Connection:** When a question asks about the implications of misapplying a concept, name the concept, explain how it was misused, and state the specific consequence for the people affected.
      `
    },
    {
      id: 'histo2-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'The behavioral perspective explains behavior through _____ and its consequences.',
            options: ['unconscious conflict', 'learning', 'natural selection', 'neurotransmitters']
          },
          {
            label: 'A psychologist who explains depression by examining negative, self-blaming thoughts is using the _____ perspective.',
            options: ['behavioral', 'cognitive', 'humanistic', 'biological']
          },
          {
            label: 'A psychologist who studies how a society\'s norms about emotion shape how people express sadness is using the _____ perspective.',
            options: ['cognitive', 'evolutionary', 'psychodynamic', 'sociocultural']
          }
        ],
        correctAnswers: ['learning', 'cognitive', 'sociocultural'],
        hint1: 'Conditioning, reinforcement, and punishment.',
        hint2: 'Thoughts and interpretations.',
        hint3: 'Culture and social norms.',
        explanation: 'The behavioral perspective focuses on learning through conditioning and consequences. Self-blaming thoughts are the focus of the cognitive perspective. Norms about emotional expression are a sociocultural explanation.'
      }
    },
    {
      id: 'histo2-strategy',
      type: 'text' as const,
      content: `
## Common Misconceptions and Exam Strategy

### Misconceptions to Avoid
- The perspectives are NOT mutually exclusive. They describe different causes that can all be true at once.
- The cognitive perspective is NOT the same as cognitive behavioral therapy. The perspective is a way of explaining behavior; the therapy is a treatment.
- The sociocultural perspective does NOT claim culture determines everything; it highlights cultural INFLUENCE.
- The evolutionary perspective explains why a tendency may have been useful for ancestors. It does NOT mean a behavior is good, fixed, or justified today.

### AP Strategy Moves
- Expect questions that apply MULTIPLE perspectives to the same behavior. Match each explanation to the perspective's key word: brain (biological), consequences (behavioral), thoughts (cognitive), ancestors (evolutionary), growth (humanistic), unconscious (psychodynamic), culture (sociocultural).
- When asked which approach is most complete, the biopsychosocial approach is the one that combines levels.
- When comparing two perspectives, state one similarity and one difference, each tied to the scenario.
      `
    },
    {
      id: 'histo2-applied',
      type: 'multiple-choice' as const,
      content: `
      **Applied Scenarios** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A psychologist explains a patient\'s depression by examining neurotransmitter levels, pessimistic thinking patterns, and the patient\'s social isolation. This approach is best described as',
            options: [
              'biopsychosocial, since it combines several types of causes',
              'psychodynamic, since it traces depression to childhood conflict',
              'behavioral, since it looks at how sad behavior was reinforced',
              'cognitive, since it focuses on how thoughts shape low mood'
            ],
            correctAnswer: 0,
            explanation: 'Neurotransmitters (biological), pessimistic thinking (psychological), and isolation (social) together form a biopsychosocial explanation. No single perspective covers all three.'
          },
          {
            question: 'How would a behavioral psychologist most likely explain why a student studies hard?',
            options: [
              'By an unconscious wish to please parents rooted in childhood',
              'By the student\'s inherited tendency toward conscientiousness',
              'By the rewards and punishments that followed past studying',
              'By the student\'s drive to grow and fulfill personal potential'
            ],
            correctAnswer: 2,
            explanation: 'The behavioral perspective explains behavior through its consequences, so past rewards for studying are the key. Unconscious wishes are psychodynamic, inherited tendencies are biological, and the drive to grow is humanistic.'
          },
          {
            question: 'In the early 1900s, some lawmakers cited claims about "inherited unfitness" to justify forced sterilization laws. This is best described as',
            options: [
              'a falsifiable hypothesis later supported by replication',
              'an evolutionary idea applied in a discriminatory way',
              'a cognitive explanation built on faulty interpretations',
              'an ethical research practice approved by a review board'
            ],
            correctAnswer: 1,
            explanation: 'Using claims about inheritance and natural selection to label groups as unfit and restrict their rights is eugenics, a discriminatory application of evolutionary ideas that the CED names explicitly.'
          }
        ]
      }
    }
  ]
}
