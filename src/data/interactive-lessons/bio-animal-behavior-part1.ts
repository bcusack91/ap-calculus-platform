export const bioAnimalBehaviorPart1Data = {
  topicSlug: 'animal-behavior',
  sections: [
    {
      id: 'beh1-intro',
      type: 'text' as const,
      content: `
## Introduction to Animal Behavior

**Part 1 of 7**

Animal behavior encompasses every externally observable action an organism performs in response to internal or environmental stimuli. Understanding behavior at the AP level requires distinguishing **innate** (genetically programmed) from **learned** (experience-dependent) behaviors and applying Tinbergen's four questions framework.

### Innate vs Learned Behavior

| Feature | Innate Behavior | Learned Behavior |
|---|---|---|
| Genetic basis | Strongly heritable, little variation | Genetic capacity to learn; expression varies |
| Experience required | None — appears fully formed | Requires practice, observation, or conditioning |
| Examples | Suckling reflex, web-spinning patterns | Bird song dialects, tool use in crows |
| Flexibility | Stereotyped and predictable | Can be modified by new experience |
| Adaptive value | Reliable in stable environments | Advantageous in changing environments |

### Fixed Action Patterns (FAPs)

A **fixed action pattern** is an innate, stereotyped sequence of behaviors that, once triggered by a **sign stimulus** (releaser), runs to completion regardless of feedback.

- **Example**: A greylag goose retrieves an egg that rolls from the nest. Even if the egg is removed mid-retrieval, the goose completes the tucking motion.
- **Key features**: Species-specific, highly stereotyped, triggered by specific stimuli, essentially unlearned.

### Key terms for this part
- **innate behavior** — genetically programmed, does not require learning
- **learned behavior** — modified by experience
- **fixed action pattern (FAP)** — stereotyped sequence triggered by a sign stimulus
- **sign stimulus (releaser)** — specific cue that triggers a FAP
      `
    },
    {
      id: 'beh1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check — Innate vs Learned** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A newly hatched sea turtle crawls toward the brightest horizon (the ocean) without any prior experience. This behavior is best classified as:',
            options: [
              'An innate behavior because it is performed correctly on the first attempt without learning',
              'A learned behavior because the turtle must perceive light intensity',
              'A fixed action pattern because it requires a sign stimulus to stop',
              'Operant conditioning because the turtle is rewarded by reaching water'
            ],
            correctAnswer: 0,
            explanation: 'The turtle performs this behavior on its very first attempt with no prior experience or training — the hallmark of an innate behavior. Perception of a stimulus does not make a behavior learned; what matters is whether experience is required to develop the response.'
          },
          {
            question: 'Which of the following is the BEST example of a fixed action pattern?',
            options: [
              'A male stickleback fish attacking any red-bellied object that enters its territory',
              'A rat learning to press a lever for food pellets',
              'A dog salivating when it hears a bell associated with food',
              'A chimpanzee using a stick to extract termites from a mound'
            ],
            correctAnswer: 0,
            explanation: 'The stickleback attack is a classic FAP: it is innate, stereotyped, triggered by a specific sign stimulus (red coloration on the belly), and runs to completion once initiated. The other options involve forms of learning.'
          }
        ]
      }
    },
    {
      id: 'beh1-tinbergen',
      type: 'text' as const,
      content: `
## Tinbergen's Four Questions

Niko Tinbergen proposed that any behavior can be analyzed at four complementary levels. AP Biology frequently distinguishes **proximate** (mechanistic) from **ultimate** (evolutionary) causes.

| Level | Category | Question | Example (bird song) |
|---|---|---|---|
| **Causation** | Proximate | What mechanism triggers the behavior? | Testosterone activates brain song nuclei |
| **Development** | Proximate | How does the behavior develop over the organism's lifetime? | Young birds learn dialect from adult tutors in a sensitive period |
| **Adaptive value** | Ultimate | How does the behavior increase fitness? | Song quality attracts mates and defends territory |
| **Phylogeny** | Ultimate | How did the behavior evolve over evolutionary time? | Comparative analysis shows song complexity increased with sexual selection |

### Proximate vs Ultimate — The Critical Distinction

- **Proximate cause**: answers *how* — the immediate physiological, neurological, or developmental mechanism.
- **Ultimate cause**: answers *why* — the evolutionary advantage, selective pressure, or phylogenetic history.

> **AP Exam Tip**: When a free-response question asks you to "explain" a behavior, provide BOTH a proximate mechanism AND an ultimate/evolutionary explanation for full credit.
      `
    },
    {
      id: 'beh1-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check — Tinbergen's Questions** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A researcher states: "Male frogs call at night because increased testosterone during breeding season stimulates vocal cord muscles." This explanation addresses which of Tinbergen\'s four questions?',
            options: [
              'Causation (proximate mechanism)',
              'Adaptive value (ultimate function)',
              'Phylogeny (evolutionary history)',
              'Development (ontogeny)'
            ],
            correctAnswer: 0,
            explanation: 'This explanation describes the immediate physiological mechanism (testosterone → muscle activation) that produces the behavior. This is a proximate, mechanistic (causation) explanation under Tinbergen\'s framework.'
          },
          {
            question: 'Which statement provides an ULTIMATE explanation for why ground squirrels give alarm calls?',
            options: [
              'Alarm calls evolved because they increase the survival of closely related individuals who share the caller\'s genes',
              'The squirrel\'s adrenal glands release cortisol when a predator is detected, triggering the vocalization',
              'Young squirrels learn to give alarm calls by observing adults',
              'The auditory cortex of the squirrel processes the predator\'s movement pattern before initiating a call'
            ],
            correctAnswer: 0,
            explanation: 'An ultimate explanation addresses the evolutionary "why" — here, kin selection explains the adaptive value of alarm calling. The other options describe proximate mechanisms (hormonal or neural) or developmental processes.'
          }
        ]
      }
    },
    {
      id: 'beh1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks — Behavior Classification** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'A spider spinning a web for the first time with no prior exposure to webs is an example of ___',
            options: ['innate behavior', 'classical conditioning', 'operant conditioning', 'insight learning']
          },
          {
            label: 'The red belly of a male stickleback fish that triggers aggressive behavior in a rival male is called a ___',
            options: ['sign stimulus (releaser)', 'conditioned stimulus', 'negative reinforcer', 'neutral stimulus']
          },
          {
            label: '"Birds sing to defend territory and attract mates" is an example of a(n) ___ explanation',
            options: ['ultimate', 'proximate', 'ontogenetic', 'mechanistic']
          }
        ],
        correctAnswers: ['innate behavior', 'sign stimulus (releaser)', 'ultimate'],
        hint1: 'The spider has no opportunity to learn — it performs the behavior correctly on the first attempt.',
        hint2: 'A sign stimulus is a specific environmental cue that triggers a fixed action pattern.',
        hint3: 'Explanations about fitness benefits and evolutionary advantages are ultimate explanations.',
        explanation: 'Web-spinning without experience is innate; the red belly is a classic sign stimulus/releaser; and explaining behavior in terms of fitness (territory defense, mate attraction) is an ultimate-level explanation.'
      }
    },
    {
      id: 'beh1-strategy',
      type: 'text' as const,
      content: `
### Exam Strategy & Common Misconceptions

#### Strategy sequence
1. **Classify the behavior first**: Is it innate or learned? If innate, could it be a FAP?
2. **Identify the level of explanation**: Is the question asking for a proximate or ultimate cause?
3. **Use specific terminology**: "fixed action pattern triggered by a sign stimulus" scores higher than "automatic behavior."

#### Common misconceptions to avoid
- **"Complex = learned"**: Many complex behaviors (bird migration, spider webs) are entirely innate.
- **"Innate means no genes in learned"**: Learned behaviors still require a genetic basis — the capacity to learn is inherited.
- **"Proximate and ultimate are contradictory"**: They are complementary explanations at different levels of analysis.
- **"FAPs can be stopped mid-sequence"**: By definition, once triggered, a FAP runs to completion.

#### Free-Response tip
When asked to "explain a behavior," structure your answer as:
1. Proximate mechanism (e.g., hormones, neural pathways)
2. Ultimate function (e.g., increased fitness, natural selection)
3. Evidence that supports each explanation
      `
    }
  ]
};
