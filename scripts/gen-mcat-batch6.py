#!/usr/bin/env python3
"""Generate MCAT Batch 6: Psychology (7), Sociology (7), Science Passage Strategy (7), Test Day Strategy (7)."""
import os

BASE_DIR = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), 'src', 'data', 'interactive-lessons')

def write_file(filename, content):
    filepath = os.path.join(BASE_DIR, filename)
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f"  Written: {filename}")

###############################################################################
# PSYCHOLOGY & BEHAVIOR (7 parts)
###############################################################################

def gen_psych():
    parts = {}
    parts[1] = r"""export const mcatPsychBehavPart1Data = {
  topicSlug: 'mcat-psychology-behavior-mcat',
  sections: [
    {
      id: 'pb1-intro',
      type: 'text' as const,
      content: `# Psychology & Behavior for the MCAT

**Part 1 of 7 — Sensation & Perception**

### Sensation vs. Perception

- **Sensation**: Detection of stimuli by sensory receptors (bottom-up)
- **Perception**: Brain's interpretation of sensory information (top-down)

### Sensory Thresholds

| Concept | Definition |
|---------|-----------|
| **Absolute threshold** | Minimum stimulus detectable 50% of the time |
| **Difference threshold (JND)** | Minimum change in stimulus detectable 50% of the time |
| **Weber's Law** | $\\Delta I / I = k$ (JND is proportional to stimulus intensity) |
| **Signal detection theory** | Detection depends on signal strength AND decision criteria (hits, misses, false alarms, correct rejections) |

### Sensory Adaptation

- Decreased sensitivity to constant stimuli over time
- Example: You stop noticing the smell of your own house
- Does NOT apply to pain (for survival reasons)

### Gestalt Principles of Perception

| Principle | Description |
|-----------|-------------|
| Proximity | Near objects grouped together |
| Similarity | Similar objects grouped together |
| Closure | Brain fills in gaps to complete shapes |
| Continuity | Prefer smooth, continuous patterns |
| Figure-ground | Distinguish object from background |`
    },
    {
      id: 'pb1-quiz1',
      type: 'multiple-choice' as const,
      content: '**Sensation & Perception** 🎯',
      exercise: {
        questions: [
          {
            question: 'According to Weber\'s Law, if you can just barely notice the difference between 10 lbs and 11 lbs, the JND for a 50 lb weight would be:',
            options: ['5 lbs ($\\Delta I / I = 1/10$, so $\\Delta I = 50 \\times 1/10 = 5$)', '1 lb', '10 lbs', '11 lbs'],
            correctAnswer: 0,
            explanation: 'Weber\'s Law: $\\Delta I / I = k$. From the 10 lb example, $k = 1/10$. For 50 lbs: $\\Delta I = 50 \\times 1/10 = 5$ lbs. The JND scales with stimulus intensity — this is why you can notice a candle in a dark room but not in sunlight.'
          }
        ]
      }
    },
    {
      id: 'pb1-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 1

- Sensation = detection (bottom-up). Perception = interpretation (top-down).
- Weber's Law: JND is proportional to stimulus intensity ($\\Delta I / I = k$)
- Signal detection theory: both signal AND decision criteria matter
- Gestalt principles: proximity, similarity, closure, continuity, figure-ground`
    }
  ]
};
"""

    parts[2] = r"""export const mcatPsychBehavPart2Data = {
  topicSlug: 'mcat-psychology-behavior-mcat',
  sections: [
    {
      id: 'pb2-intro',
      type: 'text' as const,
      content: `# Psychology & Behavior for the MCAT

**Part 2 of 7 — Learning & Memory**

### Classical Conditioning (Pavlov)

| Term | Definition | Example |
|------|-----------|---------|
| UCS (unconditioned stimulus) | Naturally triggers response | Food |
| UCR (unconditioned response) | Natural response | Salivation |
| CS (conditioned stimulus) | Learned trigger | Bell |
| CR (conditioned response) | Learned response | Salivation to bell |

**Key phenomena**: Acquisition, extinction, spontaneous recovery, generalization, discrimination

### Operant Conditioning (Skinner)

| Type | Effect on Behavior | Example |
|------|-------------------|---------|
| Positive reinforcement | Increase (add pleasant) | Treat for good grades |
| Negative reinforcement | Increase (remove unpleasant) | Seatbelt silences alarm |
| Positive punishment | Decrease (add unpleasant) | Speeding ticket |
| Negative punishment | Decrease (remove pleasant) | Phone taken away |

### Memory Types

| Type | Duration | Capacity | Example |
|------|----------|----------|---------|
| Sensory | <1 second (iconic) to ~3-4s (echoic) | Large | Flash of image |
| Short-term/Working | ~30 seconds | 7$\\pm$2 items | Phone number |
| Long-term | Unlimited duration | Unlimited capacity | Life events |`
    },
    {
      id: 'pb2-quiz1',
      type: 'multiple-choice' as const,
      content: '**Learning & Memory** 🎯',
      exercise: {
        questions: [
          {
            question: 'A child stops throwing tantrums when parents consistently ignore the behavior. This is:',
            options: ['Extinction of operant conditioning — removing reinforcement (attention) decreases behavior', 'Classical conditioning', 'Negative reinforcement', 'Positive punishment'],
            correctAnswer: 0,
            explanation: 'The tantrums were maintained by attention (positive reinforcement). When attention is consistently withheld, the behavior extinguishes. This is a common MCAT scenario in behavioral psychology.'
          }
        ]
      }
    },
    {
      id: 'pb2-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 2

- Classical conditioning: association between stimuli (involuntary responses)
- Operant conditioning: consequences shape behavior (voluntary responses)
- Reinforcement increases behavior; punishment decreases behavior
- Memory: sensory → short-term (7$\\pm$2 items) → long-term`
    }
  ]
};
"""

    parts[3] = r"""export const mcatPsychBehavPart3Data = {
  topicSlug: 'mcat-psychology-behavior-mcat',
  sections: [
    {
      id: 'pb3-intro',
      type: 'text' as const,
      content: `# Psychology & Behavior for the MCAT

**Part 3 of 7 — Motivation, Emotion & Stress**

### Theories of Motivation

| Theory | Key Idea |
|--------|----------|
| **Drive reduction** | Behavior reduces biological needs (hunger → eat) |
| **Incentive theory** | External rewards pull behavior |
| **Maslow's hierarchy** | Physiological → Safety → Love → Esteem → Self-actualization |
| **Self-determination** | Autonomy, competence, relatedness |
| **Arousal theory** | Seek optimal level of arousal (Yerkes-Dodson law) |

### Yerkes-Dodson Law

- Performance is best at moderate arousal
- Simple tasks: higher arousal = better
- Complex tasks: lower arousal = better
- Inverted-U relationship

### Theories of Emotion

| Theory | Sequence |
|--------|----------|
| **James-Lange** | Event → Physiological response → Emotion ("I'm afraid BECAUSE I'm running") |
| **Cannon-Bard** | Event → Physiological response AND Emotion simultaneously |
| **Schachter-Singer** (Two-Factor) | Event → Physiological arousal → Cognitive label → Emotion |

### Stress

**General Adaptation Syndrome** (Selye):
1. **Alarm**: Fight-or-flight (sympathetic activation)
2. **Resistance**: Body adapts but stays alert
3. **Exhaustion**: Resources depleted → illness/burnout`
    },
    {
      id: 'pb3-quiz1',
      type: 'multiple-choice' as const,
      content: '**Motivation & Emotion** 🎯',
      exercise: {
        questions: [
          {
            question: 'According to the Schachter-Singer (two-factor) theory, experiencing an emotion requires:',
            options: ['Physiological arousal AND a cognitive label for that arousal', 'Only physiological arousal', 'Only cognitive appraisal', 'Behavior before emotion'],
            correctAnswer: 0,
            explanation: 'Two-factor theory: you experience arousal AND then cognitively interpret it. Same arousal can become different emotions depending on context. This is why a racing heart on a date might feel like attraction vs. anxiety.'
          }
        ]
      }
    },
    {
      id: 'pb3-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 3

- James-Lange: body first. Cannon-Bard: simultaneous. Schachter-Singer: arousal + label.
- Yerkes-Dodson: moderate arousal = best performance (inverted U)
- Maslow: needs in hierarchy (must satisfy lower before higher)
- Stress: Alarm → Resistance → Exhaustion (GAS)`
    }
  ]
};
"""

    parts[4] = r"""export const mcatPsychBehavPart4Data = {
  topicSlug: 'mcat-psychology-behavior-mcat',
  sections: [
    {
      id: 'pb4-intro',
      type: 'text' as const,
      content: `# Psychology & Behavior for the MCAT

**Part 4 of 7 — Cognition & Consciousness**

### Cognitive Development (Piaget)

| Stage | Age | Key Feature |
|-------|-----|-------------|
| Sensorimotor | 0-2 | Object permanence |
| Preoperational | 2-7 | Egocentrism, lack of conservation |
| Concrete operational | 7-11 | Conservation, logical thinking (concrete) |
| Formal operational | 12+ | Abstract/hypothetical reasoning |

### Language Development

| Stage | Age | Example |
|-------|-----|---------|
| Babbling | 6-9 months | "ba-ba-ba" |
| One-word (holophrastic) | 12 months | "mama" |
| Two-word (telegraphic) | 18-24 months | "want cookie" |
| Grammar explosion | 2-5 years | Complex sentences |

### Consciousness & Sleep

**Sleep Stages**:

| Stage | Features | Brain Waves |
|-------|----------|-------------|
| NREM 1 | Light sleep, hypnagogic hallucinations | Theta |
| NREM 2 | Sleep spindles, K-complexes | Theta |
| NREM 3 | Deep/slow-wave sleep, hard to wake | Delta |
| REM | Dreams, muscle atonia, rapid eye movement | Beta (like awake!) |

### Problem Solving

- **Algorithm**: Step-by-step guaranteed solution
- **Heuristic**: Mental shortcut (faster but error-prone)
- **Confirmation bias**: Seeking evidence that confirms existing beliefs
- **Functional fixedness**: Can't see new uses for familiar objects`
    },
    {
      id: 'pb4-quiz1',
      type: 'multiple-choice' as const,
      content: '**Cognition** 🎯',
      exercise: {
        questions: [
          {
            question: 'A 4-year-old child watches liquid poured from a short wide glass into a tall narrow glass and says there is now "more." This demonstrates:',
            options: ['Lack of conservation — a hallmark of Piaget\'s preoperational stage', 'Object permanence failure', 'Concrete operational thinking', 'Formal operational thinking'],
            correctAnswer: 0,
            explanation: 'Preoperational children (ages 2-7) lack conservation — they can\'t understand that quantity stays the same when appearance changes. They focus on ONE dimension (height) and ignore another (width).'
          }
        ]
      }
    },
    {
      id: 'pb4-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 4

- Piaget: sensorimotor → preoperational → concrete → formal operational
- REM sleep: dreams, muscle atonia, beta waves (paradoxical sleep)
- NREM 3 (slow-wave): deep restorative sleep, delta waves
- Heuristics: fast but error-prone. Confirmation bias: seeking confirming evidence.`
    }
  ]
};
"""

    parts[5] = r"""export const mcatPsychBehavPart5Data = {
  topicSlug: 'mcat-psychology-behavior-mcat',
  sections: [
    {
      id: 'pb5-intro',
      type: 'text' as const,
      content: `# Psychology & Behavior for the MCAT

**Part 5 of 7 — Personality & Psychological Disorders**

### Personality Theories

| Theory | Key Idea |
|--------|----------|
| **Psychoanalytic** (Freud) | Id (pleasure), Ego (reality), Superego (morality); unconscious drives |
| **Humanistic** (Rogers, Maslow) | Self-actualization, unconditional positive regard |
| **Trait** (Big Five) | Openness, Conscientiousness, Extraversion, Agreeableness, Neuroticism (OCEAN) |
| **Social-cognitive** (Bandura) | Reciprocal determinism (behavior ↔ cognition ↔ environment) |
| **Biological** | Temperament, genetics, brain structure |

### Freud's Defense Mechanisms

| Defense | Description | Example |
|---------|-------------|---------|
| Repression | Pushing threatening thoughts unconscious | Forgetting traumatic event |
| Projection | Attributing own unacceptable feelings to others | Cheater accuses partner of cheating |
| Displacement | Redirecting emotion to safer target | Angry at boss → kicks dog |
| Rationalization | Logical excuse for unacceptable behavior | "I deserved to cheat — the test was unfair" |
| Reaction formation | Acting opposite to true feelings | Being overly kind to someone you hate |
| Sublimation | Channeling unacceptable impulses into acceptable ones | Aggression → contact sports |

### Psychological Disorders

| Disorder | Key Features |
|----------|-------------|
| Major Depressive Disorder | Persistent sadness, anhedonia, sleep/appetite changes |
| Bipolar Disorder | Manic and depressive episodes |
| Schizophrenia | Positive symptoms (hallucinations, delusions) + negative (flat affect, social withdrawal) |
| Anxiety Disorders | GAD, panic, phobias, OCD, PTSD |`
    },
    {
      id: 'pb5-quiz1',
      type: 'multiple-choice' as const,
      content: '**Personality & Disorders** 🎯',
      exercise: {
        questions: [
          {
            question: 'A person who is extremely hostile unconsciously but acts overly friendly to everyone is demonstrating:',
            options: ['Reaction formation — acting opposite to true unconscious feelings', 'Projection', 'Sublimation', 'Displacement'],
            correctAnswer: 0,
            explanation: 'Reaction formation involves behaving in the OPPOSITE way of one\'s true (threatening) feelings. Being overly kind when harboring hostility is the classic example. Contrast with sublimation (channeling into acceptable activity).'
          }
        ]
      }
    },
    {
      id: 'pb5-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 5

- Big Five (OCEAN): Openness, Conscientiousness, Extraversion, Agreeableness, Neuroticism
- Freud: Id (pleasure), Ego (reality), Superego (morality) + defense mechanisms
- Schizophrenia: positive symptoms (additions) + negative symptoms (deficits)
- Bandura: reciprocal determinism (person ↔ behavior ↔ environment)`
    }
  ]
};
"""

    parts[6] = r"""export const mcatPsychBehavPart6Data = {
  topicSlug: 'mcat-psychology-behavior-mcat',
  sections: [
    {
      id: 'pb6-intro',
      type: 'text' as const,
      content: `# Psychology & Behavior for the MCAT

**Part 6 of 7 — Neuroscience & Biological Bases of Behavior**

### Brain Regions

| Region | Functions |
|--------|----------|
| **Frontal lobe** | Executive function, planning, personality, motor cortex, Broca's area (speech production) |
| **Parietal lobe** | Somatosensory cortex, spatial processing |
| **Temporal lobe** | Auditory processing, Wernicke's area (language comprehension), memory |
| **Occipital lobe** | Visual processing |
| **Cerebellum** | Motor coordination, balance |
| **Brainstem** | Vital functions (breathing, heart rate, sleep) |

### Limbic System

| Structure | Function |
|-----------|----------|
| **Hippocampus** | Memory formation (declarative/explicit) |
| **Amygdala** | Emotion (especially fear) |
| **Hypothalamus** | Homeostasis, hormones, 4 F's (fighting, fleeing, feeding, mating) |
| **Thalamus** | Relay station for ALL senses EXCEPT smell |

### Neurotransmitters & Behavior

| NT | Effect | Clinical Connection |
|----|--------|-------------------|
| Dopamine | Reward, motivation, movement | Low: Parkinson's. High: Schizophrenia |
| Serotonin | Mood, sleep, appetite | Low: Depression. Targeted by SSRIs |
| Norepinephrine | Arousal, alertness | Fight-or-flight |
| GABA | Inhibition | Low: Anxiety. Targeted by benzodiazepines |
| Acetylcholine | Memory, muscle contraction | Low: Alzheimer's |`
    },
    {
      id: 'pb6-quiz1',
      type: 'multiple-choice' as const,
      content: '**Neuroscience** 🎯',
      exercise: {
        questions: [
          {
            question: 'A patient can understand speech perfectly but produces garbled, nonsensical output. The damaged area is most likely:',
            options: ['Broca\'s area (frontal lobe) — responsible for speech PRODUCTION', 'Wernicke\'s area (temporal lobe)', 'Occipital lobe', 'Cerebellum'],
            correctAnswer: 0,
            explanation: 'Broca\'s area damage = Broca\'s aphasia (nonfluent): comprehension intact but speech production is slow, labored, agrammatic. Wernicke\'s damage = fluent but nonsensical speech with poor comprehension.'
          }
        ]
      }
    },
    {
      id: 'pb6-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 6

- Broca's = speech production (frontal). Wernicke's = comprehension (temporal).
- Hippocampus = memory. Amygdala = fear/emotion. Thalamus = sensory relay (not smell).
- Dopamine: reward + movement. Serotonin: mood. GABA: inhibition.
- Low dopamine → Parkinson's. High dopamine → Schizophrenia.`
    }
  ]
};
"""

    parts[7] = r"""export const mcatPsychBehavPart7Data = {
  topicSlug: 'mcat-psychology-behavior-mcat',
  sections: [
    {
      id: 'pb7-intro',
      type: 'text' as const,
      content: `# Psychology & Behavior for the MCAT

**Part 7 of 7 — Development & Identity**

### Erikson's Psychosocial Stages

| Stage | Age | Crisis |
|-------|-----|--------|
| Trust vs. Mistrust | 0-1 | Infant depends on caregiver reliability |
| Autonomy vs. Shame | 1-3 | Toddler develops independence |
| Initiative vs. Guilt | 3-6 | Child explores and leads |
| Industry vs. Inferiority | 6-12 | Competence in school and social |
| Identity vs. Role Confusion | 12-18 | Adolescent finds self |
| Intimacy vs. Isolation | 18-40 | Young adult forms close relationships |
| Generativity vs. Stagnation | 40-65 | Contributing to society |
| Integrity vs. Despair | 65+ | Reflecting on life's meaning |

### Kohlberg's Moral Development

| Level | Reasoning | Example |
|-------|-----------|---------|
| **Pre-conventional** | Self-interest (punishment/reward) | "I'll get in trouble" |
| **Conventional** | Social norms, law and order | "It's the rule" |
| **Post-conventional** | Universal ethical principles | "It's the right thing even if illegal" |

### Attachment Types (Ainsworth)

| Type | Description |
|------|-------------|
| Secure | Distressed when parent leaves, happy on return |
| Avoidant | Little distress, ignores parent's return |
| Anxious-ambivalent | Very distressed, ambivalent on return (angry + clingy) |
| Disorganized | No consistent pattern, often from abuse |`
    },
    {
      id: 'pb7-quiz1',
      type: 'multiple-choice' as const,
      content: '**Development** 🎯',
      exercise: {
        questions: [
          {
            question: 'An adolescent struggling to define their values, career goals, and identity is in which Erikson stage?',
            options: ['Identity vs. Role Confusion (ages 12-18)', 'Intimacy vs. Isolation', 'Industry vs. Inferiority', 'Initiative vs. Guilt'],
            correctAnswer: 0,
            explanation: 'Erikson\'s fifth stage (Identity vs. Role Confusion) occurs during adolescence. Successfully navigating this stage produces a strong sense of identity; failure leads to role confusion and uncertainty about self.'
          }
        ]
      }
    },
    {
      id: 'pb7-summary',
      type: 'text' as const,
      content: `### Psychology & Behavior — Complete! ✅

The Psych/Soc section tests your understanding of how psychological, social, and biological factors influence behavior and health. Master the major theories (Piaget, Erikson, Kohlberg, Freud), neurotransmitters, brain regions, and learning principles.`
    }
  ]
};
"""

    for i in range(1, 8):
        write_file(f'mcat-mcat-psychology-behavior-mcat-part{i}.ts', parts[i])


###############################################################################
# SOCIOLOGY (7 parts)
###############################################################################

def gen_sociology():
    parts = {}
    parts[1] = r"""export const mcatSociologyPart1Data = {
  topicSlug: 'mcat-sociology-mcat',
  sections: [
    {
      id: 'so1-intro',
      type: 'text' as const,
      content: `# Sociology for the MCAT

**Part 1 of 7 — Social Structure & Institutions**

### Sociological Theories

| Theory | Focus | Key Thinker |
|--------|-------|-------------|
| **Functionalism** | Society as a system with interconnected parts | Durkheim |
| **Conflict Theory** | Power, inequality, class struggle | Marx |
| **Symbolic Interactionism** | Meaning created through social interactions | Mead, Goffman |
| **Social Constructionism** | Reality is socially constructed | Berger, Luckmann |

### Social Institutions

| Institution | Function |
|------------|----------|
| Family | Socialization, support |
| Education | Knowledge transmission, social placement |
| Religion | Meaning, social cohesion |
| Government | Order, resource allocation |
| Economy | Production and distribution of goods |
| Healthcare | Disease treatment, public health |

### Durkheim's Concept of Anomie

- **Anomie**: Normlessness — when social norms break down
- Occurs during rapid social change
- Associated with higher rates of deviance and suicide
- Connection: healthcare disparities during social upheaval`
    },
    {
      id: 'so1-quiz1',
      type: 'multiple-choice' as const,
      content: '**Social Structure** 🎯',
      exercise: {
        questions: [
          {
            question: 'A sociologist argues that healthcare inequality exists because the wealthy benefit from maintaining the current system. This perspective is:',
            options: ['Conflict theory — focusing on power dynamics and inequality between social classes', 'Functionalism', 'Symbolic interactionism', 'Social constructionism'],
            correctAnswer: 0,
            explanation: 'Conflict theory (Marx) views society as a competition for resources. Healthcare inequality is maintained because it benefits the powerful — a classic conflict theory explanation. Functionalism would ask what purpose inequality serves for society as a whole.'
          }
        ]
      }
    },
    {
      id: 'so1-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 1

- Functionalism: society works as a system. Conflict theory: power struggle. Symbolic interactionism: meaning through interaction.
- Know the major social institutions and their functions
- Anomie (Durkheim) = breakdown of social norms
- The MCAT tests sociology through healthcare and inequality scenarios`
    }
  ]
};
"""

    parts[2] = r"""export const mcatSociologyPart2Data = {
  topicSlug: 'mcat-sociology-mcat',
  sections: [
    {
      id: 'so2-intro',
      type: 'text' as const,
      content: `# Sociology for the MCAT

**Part 2 of 7 — Social Stratification & Inequality**

### Types of Social Stratification

| System | Description | Mobility |
|--------|-------------|---------|
| Caste | Birth-determined social position | None (ascribed) |
| Class | Based on economic resources | Some (achieved) |
| Meritocracy | Based on ability/effort | High (idealized) |

### Social Class Indicators

- **Income**: What you earn
- **Wealth**: What you own (assets minus debts) — much more unequal than income
- **Education**: Level of formal schooling
- **Occupation**: Type of work

### Health Disparities (ULTRA HIGH YIELD for MCAT)

Social determinants of health:
- **SES**: Lower SES → higher rates of chronic disease, lower life expectancy
- **Race/ethnicity**: Disparities in access, treatment, outcomes
- **Gender**: Different disease patterns, healthcare utilization
- **Geography**: Rural vs. urban access to care

### Intersectionality

Multiple social identities (race, class, gender) intersect to create unique experiences of privilege or disadvantage. A low-income Black woman faces different challenges than a wealthy white woman OR a low-income Black man.`
    },
    {
      id: 'so2-quiz1',
      type: 'multiple-choice' as const,
      content: '**Stratification** 🎯',
      exercise: {
        questions: [
          {
            question: 'Research shows that low-SES individuals have higher rates of heart disease, diabetes, and early death. This is BEST explained by:',
            options: ['Social determinants of health — limited access to care, healthy food, safe environments, and chronic stress', 'Genetic differences between social classes', 'Personal choices alone', 'Random variation'],
            correctAnswer: 0,
            explanation: 'Social determinants of health include economic stability, education, healthcare access, neighborhood environment, and social context. These structural factors explain most health disparities — not individual genetics or choices alone.'
          }
        ]
      }
    },
    {
      id: 'so2-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 2

- Social stratification: caste (ascribed), class (achieved), meritocracy (idealized)
- SES strongly predicts health outcomes (lower SES = worse health)
- Social determinants of health: access, environment, education, income
- Intersectionality: overlapping identities create unique experiences`
    }
  ]
};
"""

    parts[3] = r"""export const mcatSociologyPart3Data = {
  topicSlug: 'mcat-sociology-mcat',
  sections: [
    {
      id: 'so3-intro',
      type: 'text' as const,
      content: `# Sociology for the MCAT

**Part 3 of 7 — Social Interaction & Groups**

### Types of Social Groups

| Type | Description | Example |
|------|-------------|---------|
| Primary group | Close, personal, long-term | Family, close friends |
| Secondary group | Formal, task-oriented | Work colleagues, classmates |
| In-group | Group you belong to | "Us" |
| Out-group | Group you don't belong to | "Them" |
| Reference group | Group you compare yourself to | Aspirational peers |

### Group Dynamics

| Concept | Description |
|---------|-------------|
| **Groupthink** | Group conformity overrides critical thinking |
| **Social facilitation** | Performance improves on simple tasks with audience |
| **Social loafing** | Individuals exert less effort in groups |
| **Deindividuation** | Loss of self-awareness in groups → impulsive behavior |
| **Bystander effect** | Less likely to help when others are present |

### Social Roles

- **Role**: Expected behaviors for a social position
- **Role conflict**: Two roles with incompatible demands (doctor + parent)
- **Role strain**: Tension within a SINGLE role (nurse: caregiving vs. efficiency)
- **Dramaturgical theory** (Goffman): Life as performance — front stage (public) vs. back stage (private)`
    },
    {
      id: 'so3-quiz1',
      type: 'multiple-choice' as const,
      content: '**Groups & Interaction** 🎯',
      exercise: {
        questions: [
          {
            question: 'A medical team makes a poor treatment decision because no one wants to disagree with the attending physician. This is:',
            options: ['Groupthink — desire for group harmony suppresses dissenting opinions', 'Social loafing', 'Deindividuation', 'Bystander effect'],
            correctAnswer: 0,
            explanation: 'Groupthink occurs when the desire for conformity/harmony overrides realistic appraisal. In medical settings, this is particularly dangerous — it can be combated by explicitly encouraging dissent and assigning a "devil\'s advocate" role.'
          }
        ]
      }
    },
    {
      id: 'so3-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 3

- Primary groups = close/emotional. Secondary groups = formal/task-oriented.
- Groupthink: conformity suppresses critical thinking (dangerous in medicine!)
- Role conflict = between roles. Role strain = within one role.
- Goffman: front stage (public performance) vs. backstage (private self)`
    }
  ]
};
"""

    parts[4] = r"""export const mcatSociologyPart4Data = {
  topicSlug: 'mcat-sociology-mcat',
  sections: [
    {
      id: 'so4-intro',
      type: 'text' as const,
      content: `# Sociology for the MCAT

**Part 4 of 7 — Deviance & Social Control**

### Theories of Deviance

| Theory | Key Idea |
|--------|----------|
| **Labeling theory** | Deviance is created by social labels, not inherent in the act |
| **Differential association** | Deviance is learned through interaction with others |
| **Strain theory** (Merton) | Gap between cultural goals and legitimate means → deviance |
| **Social control theory** | Strong social bonds prevent deviance |

### Merton's Strain Theory Adaptations

| Adaptation | Goals? | Means? | Example |
|-----------|--------|--------|---------|
| Conformity | Accept | Accept | Working hard for success |
| Innovation | Accept | Reject | Drug dealing for money |
| Ritualism | Reject | Accept | Going through motions at dead-end job |
| Retreatism | Reject | Reject | Dropping out of society |
| Rebellion | Replace | Replace | Revolutionary movements |

### Stigma (Goffman)

- **Stigma**: Attribute that is deeply discrediting
- Can be visible (physical) or concealable (mental illness, HIV status)
- Leads to discrimination, social exclusion
- **Medicalization**: Framing deviance as medical condition (alcoholism → AUD)

### MCAT Connection

The MCAT frequently asks about stigma in healthcare:
- Mental health stigma → delayed treatment seeking
- HIV stigma → reduced testing and disclosure
- Substance use stigma → barriers to treatment`
    },
    {
      id: 'so4-quiz1',
      type: 'multiple-choice' as const,
      content: '**Deviance** 🎯',
      exercise: {
        questions: [
          {
            question: 'A teenager from a low-income neighborhood turns to drug dealing to achieve financial success. According to Merton\'s strain theory, this is:',
            options: ['Innovation — accepting cultural goals (wealth) but using illegitimate means', 'Conformity', 'Retreatism', 'Ritualism'],
            correctAnswer: 0,
            explanation: 'Innovation: the person accepts society\'s goals (wealth/success) but rejects conventional means of achieving them (education/career), instead using illegitimate means (crime). This is Merton\'s explanation for why poverty correlates with certain types of crime.'
          }
        ]
      }
    },
    {
      id: 'so4-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 4

- Labeling theory: deviance isn't inherent — it's socially defined
- Merton's strain theory: innovation (illegal means for accepted goals)
- Stigma affects healthcare access and outcomes (mental health, HIV, addiction)
- Medicalization turns deviance into medical conditions`
    }
  ]
};
"""

    parts[5] = r"""export const mcatSociologyPart5Data = {
  topicSlug: 'mcat-sociology-mcat',
  sections: [
    {
      id: 'so5-intro',
      type: 'text' as const,
      content: `# Sociology for the MCAT

**Part 5 of 7 — Demographics & Population**

### Demographic Concepts

| Term | Definition |
|------|-----------|
| **Fertility rate** | Average number of children per woman |
| **Mortality rate** | Deaths per 1,000 people per year |
| **Migration** | Movement of people between areas |
| **Demographic transition** | Shift from high birth/death rates to low birth/death rates |

### Demographic Transition Model

| Stage | Birth Rate | Death Rate | Population |
|-------|-----------|------------|-----------|
| Pre-industrial | High | High | Stable (low) |
| Urbanizing | High | Falling | Rapid growth |
| Mature industrial | Falling | Low | Slowing growth |
| Post-industrial | Low | Low | Stable or declining |

### Urbanization & Health

Urbanization effects:
- **Positive**: Better healthcare access, education, infrastructure
- **Negative**: Pollution, overcrowding, social isolation, infectious disease spread

### Global Health Patterns

- **Developed nations**: Chronic diseases (heart disease, cancer, diabetes)
- **Developing nations**: Infectious diseases (malaria, TB, HIV), maternal mortality
- **Epidemiological transition**: Countries shift from infectious to chronic disease burden as they develop`
    },
    {
      id: 'so5-quiz1',
      type: 'multiple-choice' as const,
      content: '**Demographics** 🎯',
      exercise: {
        questions: [
          {
            question: 'During Stage 2 of the demographic transition, population grows rapidly because:',
            options: ['Death rates fall (better sanitation, medicine) while birth rates remain high', 'Both birth and death rates increase', 'Birth rates rise dramatically', 'Immigration increases'],
            correctAnswer: 0,
            explanation: 'Stage 2: Public health improvements (clean water, vaccines, medicine) reduce death rates, but cultural and economic factors keep birth rates high → population boom. This is happening in many developing nations today.'
          }
        ]
      }
    },
    {
      id: 'so5-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 5

- Demographic transition: high birth/death → high birth/low death (boom) → low both
- Epidemiological transition: infectious diseases → chronic diseases as nations develop
- Urbanization: better access but pollution, overcrowding, social isolation
- SES and geography strongly predict disease patterns globally`
    }
  ]
};
"""

    parts[6] = r"""export const mcatSociologyPart6Data = {
  topicSlug: 'mcat-sociology-mcat',
  sections: [
    {
      id: 'so6-intro',
      type: 'text' as const,
      content: `# Sociology for the MCAT

**Part 6 of 7 — Culture, Socialization & Identity**

### Culture

- **Material culture**: Physical objects (technology, clothing, buildings)
- **Non-material culture**: Ideas, beliefs, values, norms
- **Ethnocentrism**: Judging other cultures by your own standards
- **Cultural relativism**: Understanding a culture on its own terms

### Socialization Agents

| Agent | Influence |
|-------|----------|
| Family | Primary socialization, values, language |
| Peers | Social skills, conformity, identity exploration |
| Media | Cultural norms, body image, political views |
| Education | Knowledge, social roles, hidden curriculum |
| Religion | Moral framework, community |

### Identity Formation

| Concept | Theorist | Key Idea |
|---------|----------|----------|
| Looking-glass self | Cooley | We see ourselves through how others see us |
| Generalized other | Mead | Internalized expectations of society |
| Front/back stage | Goffman | We perform different selves in different contexts |
| Self-efficacy | Bandura | Belief in one's ability to succeed |
| Locus of control | Rotter | Internal (I control outcomes) vs. external (fate controls outcomes) |

### Self-Concept

- **Self-concept**: Overall perception of who you are
- **Self-esteem**: How you feel about yourself (evaluative)
- **Self-identity**: How you define yourself (social roles, groups)`
    },
    {
      id: 'so6-quiz1',
      type: 'multiple-choice' as const,
      content: '**Culture & Identity** 🎯',
      exercise: {
        questions: [
          {
            question: 'A patient from a different culture refuses a blood transfusion. A physician who tries to understand the patient\'s cultural beliefs before making judgments is practicing:',
            options: ['Cultural relativism — understanding behaviors within their cultural context', 'Ethnocentrism', 'Anomie', 'Medicalization'],
            correctAnswer: 0,
            explanation: 'Cultural relativism means understanding beliefs and practices within their cultural context rather than judging them by your own cultural standards (ethnocentrism). This is essential for culturally competent healthcare.'
          }
        ]
      }
    },
    {
      id: 'so6-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 6

- Ethnocentrism = judging others by your standards. Cultural relativism = understanding on their terms.
- Looking-glass self (Cooley): we see ourselves as others see us
- Internal locus of control → better health outcomes (sense of agency)
- Socialization agents: family (primary), peers, media, education, religion`
    }
  ]
};
"""

    parts[7] = r"""export const mcatSociologyPart7Data = {
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
"""

    for i in range(1, 8):
        write_file(f'mcat-mcat-sociology-mcat-part{i}.ts', parts[i])


###############################################################################
# SCIENCE PASSAGE STRATEGY (7 parts)
###############################################################################

def gen_sci_passage():
    parts = {}
    parts[1] = r"""export const mcatSciPassagePart1Data = {
  topicSlug: 'mcat-science-passage-strategy-mcat',
  sections: [
    {
      id: 'sp1-intro',
      type: 'text' as const,
      content: `# Science Passage Strategy for the MCAT

**Part 1 of 7 — Understanding MCAT Science Passages**

### Passage Types on the MCAT

| Type | Description | What to Focus On |
|------|-------------|-----------------|
| **Experiment-based** | Describes research with methods + results | Independent/dependent variables, controls, data trends |
| **Information-based** | Presents new scientific concepts | Key definitions, relationships, comparisons |
| **Research study** | Multiple experiments with data tables | How experiments differ, what each tests |

### The 4-Minute Passage Strategy

For a typical 6-question passage, spend:
- **~2-3 minutes** reading the passage
- **~1 minute per question** (some faster, some slower)
- **Total ~8-9 minutes** per passage

### Active Reading for Science Passages

DO:
- Identify the research question/hypothesis
- Note independent and dependent variables
- Circle key numbers, equations, and units
- Understand figure axes and trends BEFORE answering questions

DON'T:
- Memorize every detail on first read
- Get stuck on complex mechanisms you don't understand
- Spend more than 3 minutes reading the passage`
    },
    {
      id: 'sp1-quiz1',
      type: 'multiple-choice' as const,
      content: '**Passage Strategy** 🎯',
      exercise: {
        questions: [
          {
            question: 'When reading a science passage with multiple experiments, the MOST important first step is:',
            options: ['Identify what each experiment is testing (IV, DV) and how they differ from each other', 'Memorize all the numbers in the data tables', 'Read every word carefully before looking at questions', 'Skip the passage and go straight to questions'],
            correctAnswer: 0,
            explanation: 'Understanding the experimental design is the foundation. Once you know what\'s being tested (independent variable) and measured (dependent variable), you can answer most questions. Data tables can be referenced as needed — no need to memorize.'
          }
        ]
      }
    },
    {
      id: 'sp1-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 1

- Three passage types: experiment-based, information-based, research study
- Read actively: identify hypothesis, variables, and data trends
- Don't memorize everything — reference back as needed
- Budget ~8-9 minutes per passage (reading + questions)`
    }
  ]
};
"""

    parts[2] = r"""export const mcatSciPassagePart2Data = {
  topicSlug: 'mcat-science-passage-strategy-mcat',
  sections: [
    {
      id: 'sp2-intro',
      type: 'text' as const,
      content: `# Science Passage Strategy for the MCAT

**Part 2 of 7 — Data Interpretation**

### Reading Graphs

| Graph Element | What to Identify |
|--------------|-----------------|
| X-axis | Independent variable (what's being changed) |
| Y-axis | Dependent variable (what's being measured) |
| Trend | Increasing, decreasing, plateauing, sigmoidal |
| Units | Must match answer choices |

### Common Data Patterns on the MCAT

| Pattern | Interpretation |
|---------|---------------|
| Linear increase | Direct proportional relationship |
| Inverse relationship | As X increases, Y decreases |
| Plateau | Maximum reached (saturation, $V_{max}$) |
| Sigmoidal (S-curve) | Cooperative binding (hemoglobin) or logistic growth |
| Logarithmic | pH scale, enzyme activity vs. pH |

### Table Interpretation Strategy

1. Read column headers (what's measured)
2. Identify controls vs. experimental conditions
3. Look for the biggest differences between groups
4. Check if changes are statistically meaningful (error bars, p-values)

### MCAT Trap: Correlation vs. Causation

A passage shows that A correlates with B. Answer choices may state "A causes B."
- Correlation $\\neq$ Causation unless the experiment was well-controlled
- Look for confounding variables!`
    },
    {
      id: 'sp2-quiz1',
      type: 'multiple-choice' as const,
      content: '**Data Interpretation** 🎯',
      exercise: {
        questions: [
          {
            question: 'A graph shows enzyme activity vs. substrate concentration with a plateau at high concentrations. The plateau indicates:',
            options: ['All enzyme active sites are saturated ($V_{max}$ reached)', 'The enzyme is denatured', 'Substrate is being consumed', 'The experiment failed'],
            correctAnswer: 0,
            explanation: 'At high substrate concentration, all enzyme active sites are occupied → increasing substrate further has no effect on rate → plateau at $V_{max}$. This is the classic Michaelis-Menten curve.'
          }
        ]
      }
    },
    {
      id: 'sp2-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 2

- Always identify axes, units, and trends FIRST
- Plateaus = saturation. Sigmoidal = cooperativity. Linear = proportional.
- Tables: compare experimental to control groups
- Correlation $\\neq$ Causation — always look for confounding variables`
    }
  ]
};
"""

    parts[3] = r"""export const mcatSciPassagePart3Data = {
  topicSlug: 'mcat-science-passage-strategy-mcat',
  sections: [
    {
      id: 'sp3-intro',
      type: 'text' as const,
      content: `# Science Passage Strategy for the MCAT

**Part 3 of 7 — Experimental Design**

### Key Experimental Components

| Component | Definition | Example |
|-----------|-----------|---------|
| **Independent variable (IV)** | What the researcher manipulates | Drug dosage |
| **Dependent variable (DV)** | What is measured | Blood pressure |
| **Control group** | No treatment / standard treatment | Placebo group |
| **Experimental group** | Receives treatment | Drug group |
| **Confounding variable** | Uncontrolled factor that could explain results | Age differences between groups |

### Types of Studies

| Type | Description | Strength |
|------|-------------|---------|
| Randomized controlled trial (RCT) | Random assignment, intervention, control | Gold standard for causation |
| Cohort study | Follow groups over time | Good for rare exposures |
| Case-control study | Compare cases vs. controls (retrospective) | Good for rare diseases |
| Cross-sectional | Snapshot at one time point | Quick, shows associations |

### Validity & Reliability

- **Internal validity**: Can you conclude cause-and-effect? (controlled confounders)
- **External validity**: Can you generalize to broader population?
- **Reliability**: Reproducibility — same results with repeated testing`
    },
    {
      id: 'sp3-quiz1',
      type: 'multiple-choice' as const,
      content: '**Experimental Design** 🎯',
      exercise: {
        questions: [
          {
            question: 'A study finds that coffee drinkers have lower rates of depression, but coffee drinkers also exercise more. Exercise is a:',
            options: ['Confounding variable — it could explain the association instead of coffee itself', 'Dependent variable', 'Independent variable', 'Control variable'],
            correctAnswer: 0,
            explanation: 'Exercise is a confounding variable because it\'s associated with both the exposure (coffee drinking) and the outcome (depression) and could be the real cause of the observed association. This limits internal validity.'
          }
        ]
      }
    },
    {
      id: 'sp3-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 3

- IV = manipulated. DV = measured. Confounders = uncontrolled alternatives.
- RCTs are gold standard for causation. Observational studies show associations only.
- Internal validity = cause-and-effect confidence. External validity = generalizability.
- ALWAYS look for confounding variables in MCAT passages`
    }
  ]
};
"""

    parts[4] = r"""export const mcatSciPassagePart4Data = {
  topicSlug: 'mcat-science-passage-strategy-mcat',
  sections: [
    {
      id: 'sp4-intro',
      type: 'text' as const,
      content: `# Science Passage Strategy for the MCAT

**Part 4 of 7 — Question Types & Strategies**

### MCAT Question Categories

| Type | % of Exam | What It Tests |
|------|----------|---------------|
| **Discrete** (standalone) | ~25% | Pure content knowledge, no passage |
| **Passage-based: Recall** | ~15% | Finding info in the passage |
| **Passage-based: Application** | ~35% | Applying passage info to new situations |
| **Passage-based: Reasoning** | ~25% | Drawing conclusions from data/experiments |

### Strategy by Question Type

**Recall questions**: Answer is IN the passage — go back and find it!
**Application questions**: Use passage + your knowledge to solve a new problem
**Reasoning questions**: What do the results mean? What's the best conclusion?

### Eliminating Wrong Answers

Common wrong answer patterns:
- **True but irrelevant**: Statement is factually correct but doesn't answer the question
- **Extreme language**: "Always," "never," "completely," "no effect"
- **Opposite of correct**: Tests if you're paying attention
- **Partially correct**: Right concept but wrong detail`
    },
    {
      id: 'sp4-quiz1',
      type: 'multiple-choice' as const,
      content: '**Question Strategy** 🎯',
      exercise: {
        questions: [
          {
            question: 'An answer choice states "The mutation completely eliminates all enzyme function." This is likely wrong because:',
            options: ['Extreme language ("completely," "all") is usually wrong on the MCAT — most biological effects are partial', 'It contains scientific terminology', 'It\'s too short', 'Mutations always eliminate enzyme function'],
            correctAnswer: 0,
            explanation: 'The MCAT loves nuance. Words like "completely," "always," "never," "all" are red flags. In biology, most mutations affect function partially (reduced activity) rather than eliminating it entirely. Moderate, qualified language is usually correct.'
          }
        ]
      }
    },
    {
      id: 'sp4-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 4

- ~60% of questions require passage + external knowledge (not just reading)
- Recall: find it in passage. Application: apply to new scenario. Reasoning: interpret data.
- Eliminate extreme language, true-but-irrelevant, and opposite answers
- If stuck, eliminate 2 answers and make an educated guess (no penalty for guessing)`
    }
  ]
};
"""

    parts[5] = r"""export const mcatSciPassagePart5Data = {
  topicSlug: 'mcat-science-passage-strategy-mcat',
  sections: [
    {
      id: 'sp5-intro',
      type: 'text' as const,
      content: `# Science Passage Strategy for the MCAT

**Part 5 of 7 — Chemistry & Physics Passage Tactics**

### Chem/Phys Passage Features

- Heavy on calculations, equations, and graphs
- Often present novel experiments with familiar chemistry/physics concepts
- Reaction mechanisms and energy diagrams are common

### Calculation Strategy

1. **Estimate first**: Round numbers to make mental math easier
2. **Use scientific notation**: Convert large/small numbers
3. **Check units**: Answer must have correct units (dimensional analysis)
4. **Sanity check**: Does the answer make physical sense?

### Common Chem/Phys Passage Topics

| Topic | What to Look For |
|-------|-----------------|
| Acid-base | Henderson-Hasselbalch, titration curves, buffer capacity |
| Kinetics | Rate laws, Arrhenius equation, reaction order from data |
| Thermodynamics | $\\Delta G = \\Delta H - T\\Delta S$, spontaneity, coupled reactions |
| Circuits | Ohm's law, series vs. parallel, power |
| Optics | Snell's law, lens/mirror equations |

### Math Shortcuts

- $\\log(2) \\approx 0.3$, $\\log(3) \\approx 0.5$
- $e \\approx 2.718$
- For pH: $-\\log(2 \\times 10^{-3}) = 3 - \\log(2) \\approx 3 - 0.3 = 2.7$`
    },
    {
      id: 'sp5-quiz1',
      type: 'multiple-choice' as const,
      content: '**Chem/Phys Tactics** 🎯',
      exercise: {
        questions: [
          {
            question: 'What is the pH of a $5 \\times 10^{-4}$ M HCl solution? (Use $\\log(5) \\approx 0.7$)',
            options: ['3.3 ($-\\log(5 \\times 10^{-4}) = 4 - 0.7 = 3.3$)', '4.0', '3.7', '2.3'],
            correctAnswer: 0,
            explanation: '$\\text{pH} = -\\log[\\text{H}^+] = -\\log(5 \\times 10^{-4}) = -(\\log 5 + \\log 10^{-4}) = -(0.7 - 4) = 3.3$. HCl is a strong acid (complete dissociation), so $[H^+] = 5 \\times 10^{-4}$ M directly.'
          }
        ]
      }
    },
    {
      id: 'sp5-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 5

- Estimate calculations — you have a calculator but mental math saves time
- Always check units and do sanity checks
- Know log shortcuts: $\\log 2 \\approx 0.3$, $\\log 3 \\approx 0.5$, $\\log 5 \\approx 0.7$
- Henderson-Hasselbalch, $\\Delta G$, Ohm's law are the most common equations`
    }
  ]
};
"""

    parts[6] = r"""export const mcatSciPassagePart6Data = {
  topicSlug: 'mcat-science-passage-strategy-mcat',
  sections: [
    {
      id: 'sp6-intro',
      type: 'text' as const,
      content: `# Science Passage Strategy for the MCAT

**Part 6 of 7 — Biology & Biochemistry Passage Tactics**

### Bio/Biochem Passage Features

- Experimental passages dominate (Western blots, PCR, gene knockouts)
- Figures often show gel electrophoresis, enzyme kinetics, or metabolic pathways
- Questions integrate multiple biological concepts

### Common Experimental Techniques in Passages

| Technique | What It Shows | How to Read |
|-----------|-------------|-------------|
| SDS-PAGE / Western blot | Protein size/expression | Bands = proteins; darker = more |
| PCR / gel electrophoresis | DNA fragment size | Lower bands = smaller fragments |
| ELISA | Protein concentration | Higher absorbance = more protein |
| Flow cytometry | Cell surface markers | Shifted peaks = marker present |

### Bio/Biochem Passage Strategy

1. **Identify the biological system**: What organ/pathway/molecule is being studied?
2. **Find the perturbation**: What was changed (knockout, drug, mutation)?
3. **Predict the effect**: Before looking at data, predict what should happen
4. **Compare to actual results**: Do they match? If not, why?

### Enzyme Kinetics in Passages

- **Lineweaver-Burk plots**: Double reciprocal ($1/V$ vs $1/[S]$)
- Competitive inhibitor: $K_m$ increases, $V_{max}$ unchanged
- Uncompetitive: Both $K_m$ and $V_{max}$ decrease
- Noncompetitive: $V_{max}$ decreases, $K_m$ unchanged`
    },
    {
      id: 'sp6-quiz1',
      type: 'multiple-choice' as const,
      content: '**Bio/Biochem Tactics** 🎯',
      exercise: {
        questions: [
          {
            question: 'A passage shows a Western blot with a band present in wild-type but absent in a mutant strain. The most likely conclusion is:',
            options: ['The mutant strain does not express the target protein (gene knockout or loss of expression)', 'The mutant has MORE protein', 'The experiment failed', 'The antibody is nonspecific'],
            correctAnswer: 0,
            explanation: 'In a Western blot, a missing band means the protein isn\'t expressed (or is too small/large to appear at expected position). In a passage context, this usually means the gene was knocked out, the promoter is mutated, or the protein is rapidly degraded.'
          }
        ]
      }
    },
    {
      id: 'sp6-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 6

- Bio/Biochem passages often present experiments with gels, blots, or kinetics
- Always predict the outcome BEFORE reading the data
- Western blot: protein levels. PCR/gel: DNA size. ELISA: protein concentration.
- Know enzyme kinetics patterns for competitive, uncompetitive, noncompetitive inhibitors`
    }
  ]
};
"""

    parts[7] = r"""export const mcatSciPassagePart7Data = {
  topicSlug: 'mcat-science-passage-strategy-mcat',
  sections: [
    {
      id: 'sp7-intro',
      type: 'text' as const,
      content: `# Science Passage Strategy for the MCAT

**Part 7 of 7 — Psych/Soc Passage Tactics**

### Psych/Soc Passage Features

- Describe research studies in psychology or sociology
- Often include statistics (mean, standard deviation, p-values)
- Test application of theories to new scenarios

### Common Statistical Concepts

| Concept | Meaning |
|---------|---------|
| **Mean** | Average |
| **Standard deviation** | Spread of data around the mean |
| **p-value** | Probability result occurred by chance ($p < 0.05$ = significant) |
| **Correlation ($r$)** | Strength and direction of linear relationship ($-1$ to $+1$) |
| **Confidence interval** | Range likely to contain true value |

### Psych/Soc Question Strategy

1. **Identify the theory being tested**: What psychological/sociological concept applies?
2. **Match the scenario to the theory**: Don't just know definitions — apply them
3. **Watch for bait answers**: Answers that use correct psych terms but wrong context
4. **Eliminate**: If two answers are similar, usually neither is correct — look for the one that's distinctly right

### Research Methods in Psych/Soc Passages

- **Operationalization**: How abstract concepts are measured (e.g., "happiness" measured by survey score)
- **Sampling bias**: Sample doesn't represent population
- **Self-report bias**: Participants may not report truthfully
- **Hawthorne effect**: Behavior changes because subjects know they're being observed`
    },
    {
      id: 'sp7-quiz1',
      type: 'multiple-choice' as const,
      content: '**Psych/Soc Passages** 🎯',
      exercise: {
        questions: [
          {
            question: 'A study on exercise and mood has $p = 0.03$. This means:',
            options: ['There is a 3% probability the results occurred by chance — the result is statistically significant', 'There is a 97% chance the hypothesis is true', 'The effect size is large', 'The study has high reliability'],
            correctAnswer: 0,
            explanation: '$p < 0.05$ means statistically significant — there\'s less than a 5% chance the results are due to random chance. However, p-value does NOT tell you effect size, clinical significance, or the probability the hypothesis is true (common MCAT trap).'
          }
        ]
      }
    },
    {
      id: 'sp7-summary',
      type: 'text' as const,
      content: `### Science Passage Strategy — Complete! ✅

Master these passage-reading and question-answering strategies across all three science sections. The MCAT rewards methodical reading, strategic elimination, and the ability to connect passage data with your content knowledge.`
    }
  ]
};
"""

    for i in range(1, 8):
        write_file(f'mcat-mcat-science-passage-strategy-mcat-part{i}.ts', parts[i])


###############################################################################
# TEST DAY STRATEGY (7 parts)
###############################################################################

def gen_test_day():
    parts = {}
    parts[1] = r"""export const mcatTestDayPart1Data = {
  topicSlug: 'mcat-test-day-strategy-mcat',
  sections: [
    {
      id: 'td1-intro',
      type: 'text' as const,
      content: `# Test Day Strategy for the MCAT

**Part 1 of 7 — MCAT Structure & Timing**

### MCAT Exam Structure

| Section | Questions | Time | Time per Question |
|---------|----------|------|------------------|
| **Chem/Phys** (CP) | 59 | 95 min | ~1.6 min |
| Break | — | 10 min | — |
| **CARS** | 53 | 90 min | ~1.7 min |
| Break | — | 30 min | — |
| **Bio/Biochem** (BB) | 59 | 95 min | ~1.6 min |
| Break | — | 10 min | — |
| **Psych/Soc** (PS) | 59 | 95 min | ~1.6 min |

**Total**: 230 questions, 6 hours 15 minutes (test time), ~7.5 hours total (with breaks)

### Scoring

- Each section: 118-132 (midpoint 125)
- Total: 472-528 (midpoint 500)
- Scaled score based on percentile
- **508**: ~75th percentile (competitive for most MD schools)
- **515**: ~90th percentile (competitive for top schools)
- **520+**: ~97th percentile (elite)`
    },
    {
      id: 'td1-quiz1',
      type: 'multiple-choice' as const,
      content: '**MCAT Structure** 🎯',
      exercise: {
        questions: [
          {
            question: 'The total number of questions on the MCAT is:',
            options: ['230 questions across 4 sections', '200 questions', '300 questions', '180 questions'],
            correctAnswer: 0,
            explanation: 'CP: 59, CARS: 53, BB: 59, PS: 59 = 230 total questions. The exam takes about 7.5 hours including breaks. Knowing the structure reduces test-day anxiety.'
          }
        ]
      }
    },
    {
      id: 'td1-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 1

- 4 sections: CP (59), CARS (53), BB (59), PS (59) = 230 questions
- ~1.6-1.7 minutes per question — time management is critical
- 508 = 75th %ile, 515 = 90th %ile, 520+ = 97th %ile
- Take EVERY break — even 30 seconds of rest helps`
    }
  ]
};
"""

    parts[2] = r"""export const mcatTestDayPart2Data = {
  topicSlug: 'mcat-test-day-strategy-mcat',
  sections: [
    {
      id: 'td2-intro',
      type: 'text' as const,
      content: `# Test Day Strategy for the MCAT

**Part 2 of 7 — Time Management**

### Pacing Strategy

| Passage Type | Reading | Questions | Total |
|-------------|---------|-----------|-------|
| Science (5-7 questions) | 2-3 min | 1 min each | ~8-9 min |
| CARS (5-7 questions) | 3-4 min | 1-1.5 min each | ~10 min |
| Discrete (standalone) | N/A | ~1 min | ~1 min |

### Time Checkpoints

For a 59-question science section (95 minutes):
- After 5 passages (~25 questions): ~40 minutes used
- After 8 passages (~45 questions): ~70 minutes used
- Last 14 questions (discretes + final passage): ~25 minutes

### When to Move On

Move on if you've spent 2+ minutes on a single question:
1. Eliminate what you can
2. Flag the question
3. Pick your best guess
4. Move on confidently — you can return later

### Flag Strategy

- **Flag**: Any question you're unsure about
- **Don't flag everything**: Only flag questions where you narrowed to 2 choices
- **Review time**: Plan 5-10 minutes at the end for flagged questions
- Often your first instinct is correct — don't change unless you have a clear reason`
    },
    {
      id: 'td2-quiz1',
      type: 'multiple-choice' as const,
      content: '**Time Management** 🎯',
      exercise: {
        questions: [
          {
            question: 'You\'ve been stuck on a question for 2 minutes and can\'t decide between two answers. The best strategy is:',
            options: ['Pick your best guess, flag it, and move on — protecting time for remaining questions', 'Keep working until you figure it out', 'Skip it without answering', 'Close your eyes and pick randomly'],
            correctAnswer: 0,
            explanation: 'Every question is worth the same amount. Spending 4+ minutes on one hard question costs you easy questions later. Always answer something (no penalty for guessing), flag it, and move on. Your first instinct is often correct.'
          }
        ]
      }
    },
    {
      id: 'td2-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 2

- ~8-9 minutes per science passage (reading + questions)
- Never spend more than 2 minutes on a single question
- Always answer before moving on (no penalty for wrong answers)
- Flag judiciously — save 5-10 minutes for review`
    }
  ]
};
"""

    parts[3] = r"""export const mcatTestDayPart3Data = {
  topicSlug: 'mcat-test-day-strategy-mcat',
  sections: [
    {
      id: 'td3-intro',
      type: 'text' as const,
      content: `# Test Day Strategy for the MCAT

**Part 3 of 7 — Study Planning**

### Recommended Study Timeline

| Duration | Approach | Best For |
|----------|---------|----------|
| 3 months | Intensive, full-time | Post-graduation, summer |
| 6 months | Part-time alongside classes | During school year |
| 12 months | Gradual, with classes | Early planners |

### Three Phases of MCAT Prep

**Phase 1 — Content Review** (~40% of study time):
- Textbooks, videos, notes
- Focus on understanding, not memorization
- Build concept maps connecting topics

**Phase 2 — Practice Problems** (~30% of study time):
- Section-bank style questions
- Timed passage practice
- Identify weak areas

**Phase 3 — Full-Length Exams** (~30% of study time):
- Take at least 5-8 full-length practice exams
- Simulate real conditions (timed, no interruptions)
- Review EVERY question (right and wrong)

### Spaced Repetition

- Review material at increasing intervals (1 day, 3 days, 7 days, 14 days)
- Anki flashcards for high-yield facts
- Focus on weakest topics during review sessions`
    },
    {
      id: 'td3-quiz1',
      type: 'multiple-choice' as const,
      content: '**Study Planning** 🎯',
      exercise: {
        questions: [
          {
            question: 'The most effective way to identify weak areas in MCAT prep is:',
            options: ['Regular practice tests with thorough review of both correct AND incorrect answers', 'Reading textbooks cover to cover', 'Memorizing flashcards only', 'Studying the same topics repeatedly'],
            correctAnswer: 0,
            explanation: 'Practice tests reveal what you actually know vs. what you think you know. Reviewing correct answers shows your reasoning was right. Reviewing incorrect answers identifies gaps. Both are equally important for improvement.'
          }
        ]
      }
    },
    {
      id: 'td3-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 3

- Three phases: Content Review → Practice Problems → Full-Length Exams
- Take 5-8 full-length practice exams under realistic conditions
- Spaced repetition builds long-term retention
- Review EVERY practice question — even ones you got right`
    }
  ]
};
"""

    parts[4] = r"""export const mcatTestDayPart4Data = {
  topicSlug: 'mcat-test-day-strategy-mcat',
  sections: [
    {
      id: 'td4-intro',
      type: 'text' as const,
      content: `# Test Day Strategy for the MCAT

**Part 4 of 7 — Guessing & Elimination Strategies**

### Process of Elimination (POE)

The #1 strategy for difficult MCAT questions:

1. **Read the question stem carefully** — what is ACTUALLY being asked?
2. **Eliminate obviously wrong answers** (usually 1-2 can be eliminated quickly)
3. **Compare remaining choices** — what's the KEY difference between them?
4. **Choose the BEST answer** — not just a correct statement, but one that answers the question

### Common Wrong Answer Traps

| Trap | Description | How to Spot |
|------|------------|------------|
| Too specific | Correct for one detail but misses the big picture | Mentions only one part of a complex answer |
| Too broad | Technically true but not specific enough | Very general statement |
| Opposite | Reverses the correct relationship | Double-check cause/effect direction |
| Out of scope | True statement but not relevant to the passage | Doesn't connect to the experiment/passage |
| Extreme | Uses absolutes (always, never, all, none) | Look for qualifying language |

### 50/50 Strategy

When stuck between two choices:
- Re-read the question stem (often reveals which answer actually addresses the question)
- Check if one answer requires an assumption not supported by the passage
- Go with the less extreme/more nuanced option
- When in doubt, go with your first instinct`
    },
    {
      id: 'td4-quiz1',
      type: 'multiple-choice' as const,
      content: '**Elimination** 🎯',
      exercise: {
        questions: [
          {
            question: 'When choosing between two remaining answer choices on the MCAT, the BEST strategy is:',
            options: ['Re-read the question stem to see which answer actually addresses what was asked', 'Always pick C', 'Choose the longer answer', 'Pick the first one you read'],
            correctAnswer: 0,
            explanation: 'Most 50/50 mistakes happen because you\'re answering the wrong question. Re-reading the question stem often reveals one answer addresses the actual question while the other is a true statement about a different concept.'
          }
        ]
      }
    },
    {
      id: 'td4-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 4

- Process of Elimination is the #1 MCAT strategy
- Common traps: too specific, too broad, opposite, out of scope, extreme
- When stuck 50/50: re-read the question stem
- Answer EVERY question — there is no penalty for guessing`
    }
  ]
};
"""

    parts[5] = r"""export const mcatTestDayPart5Data = {
  topicSlug: 'mcat-test-day-strategy-mcat',
  sections: [
    {
      id: 'td5-intro',
      type: 'text' as const,
      content: `# Test Day Strategy for the MCAT

**Part 5 of 7 — Mental Stamina & Test Day Prep**

### Physical Preparation

| Area | Strategy |
|------|---------|
| **Sleep** | 7-8 hours for 2 weeks before (not just the night before) |
| **Nutrition** | Eat a familiar, balanced breakfast (nothing new on test day) |
| **Hydration** | Drink water during breaks, not too much during sections |
| **Exercise** | Light exercise the day before (reduces anxiety) |
| **Caffeine** | If you normally use it, use it. Don't start or stop on test day. |

### Break Strategy

| Break | Duration | Do This |
|-------|----------|---------|
| After CP | 10 min | Bathroom, snack, light stretching |
| After CARS | 30 min | Full meal/snack, walk, reset mentally |
| After BB | 10 min | Bathroom, snack, positive self-talk |

### Managing Test Anxiety

- **Before**: Deep breathing (4-7-8 method), visualization of success
- **During**: If anxious, pause for 10 seconds, take 3 deep breaths
- **Reframe**: "This is my opportunity to show what I know"
- **Perspective**: One hard passage doesn't ruin your score — move on

### The 30-Minute Mid-Exam Break

This is the MOST IMPORTANT break:
- Eat a real snack (protein + carbs: sandwich, trail mix, PB&J)
- Walk around, stretch, go outside if possible
- Do NOT think about CARS — it's done
- Mentally reset for the second half`
    },
    {
      id: 'td5-quiz1',
      type: 'multiple-choice' as const,
      content: '**Test Day Prep** 🎯',
      exercise: {
        questions: [
          {
            question: 'The MOST important thing to do during the 30-minute break after CARS is:',
            options: ['Eat a substantial snack and mentally reset for the second half', 'Review your CARS answers', 'Study flashcards for Bio/Biochem', 'Call a friend for reassurance'],
            correctAnswer: 0,
            explanation: 'The 30-minute break is crucial for physical AND mental recovery. Eat (your brain needs glucose!), move around, and mentally let go of CARS. Reviewing past answers creates anxiety and studying more content at this point has diminishing returns.'
          }
        ]
      }
    },
    {
      id: 'td5-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 5

- Sleep and nutrition matter: prep your body for 2 weeks before the exam
- Take EVERY break — especially the 30-minute mid-exam break
- Eat during breaks (protein + carbs for sustained energy)
- Don't review past sections during breaks — look forward, not backward`
    }
  ]
};
"""

    parts[6] = r"""export const mcatTestDayPart6Data = {
  topicSlug: 'mcat-test-day-strategy-mcat',
  sections: [
    {
      id: 'td6-intro',
      type: 'text' as const,
      content: `# Test Day Strategy for the MCAT

**Part 6 of 7 — Score Improvement & Practice Exam Analysis**

### How to Review Practice Exams

For EVERY question (right and wrong), ask:

1. **Why is the right answer right?** Understand the reasoning
2. **Why is each wrong answer wrong?** Identify the trap
3. **Did I use passage info or outside knowledge?** Know the question type
4. **What content gap does this reveal?** Add to study list

### Tracking Your Progress

Keep a log for each practice exam:
- **Score by section**: Identify strongest and weakest sections
- **Score by topic**: Find specific content gaps (e.g., "I miss 60% of operon questions")
- **Error type**: Content gap? Misread question? Ran out of time? Careless mistake?

### Error Categories

| Error Type | Fix |
|-----------|-----|
| Content gap | Study the topic, make flashcards |
| Misread question | Practice reading question stems carefully |
| Time pressure | Do timed passage practice |
| Careless mistake | Slow down on "easy" questions, double-check |
| Test anxiety | Practice under simulated conditions |

### Score Plateaus

If your score stops improving:
- Focus on weakest topic areas (biggest point gains)
- Do more practice passages, fewer content reviews
- Analyze error patterns — are you making the same mistakes?
- Take a day off — rest can improve performance`
    },
    {
      id: 'td6-quiz1',
      type: 'multiple-choice' as const,
      content: '**Score Improvement** 🎯',
      exercise: {
        questions: [
          {
            question: 'You consistently get questions right when reviewing them calmly but miss them during timed practice. Your main issue is:',
            options: ['Time pressure and test anxiety — practice more under timed, simulated conditions', 'A content gap', 'Bad luck', 'The questions are unfair'],
            correctAnswer: 0,
            explanation: 'If you can answer correctly without time pressure, you have the knowledge. The issue is performance under pressure. The fix: more timed practice under real conditions, deep breathing strategies, and building familiarity with the time constraints.'
          }
        ]
      }
    },
    {
      id: 'td6-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 6

- Review EVERY practice question — right AND wrong
- Categorize errors: content, misread, time pressure, careless, anxiety
- Track scores by section AND topic to find specific gaps
- At a plateau? Focus on weakest areas for biggest point gains`
    }
  ]
};
"""

    parts[7] = r"""export const mcatTestDayPart7Data = {
  topicSlug: 'mcat-test-day-strategy-mcat',
  sections: [
    {
      id: 'td7-intro',
      type: 'text' as const,
      content: `# Test Day Strategy for the MCAT

**Part 7 of 7 — Final Week Strategy & Mindset**

### The Final Week

| Day | Activity |
|-----|---------|
| 7 days before | Last full-length practice exam |
| 6-5 days | Light review of weak areas, flashcards only |
| 4-3 days | Review high-yield topics casually |
| 2 days | Last day of any studying — keep it light |
| 1 day before | NO studying. Relax, eat well, sleep early |
| Test day | Arrive early, breathe, trust your preparation |

### High-Yield Last-Minute Review Topics

These commonly appear and are easy to forget under pressure:

- Amino acid structures and properties
- Enzyme kinetics ($K_m$, $V_{max}$, inhibitor types)
- Henderson-Hasselbalch equation
- Functional groups in organic chemistry
- Mendelian genetics ratios
- Key brain regions and functions
- Sociological theories (functionalism, conflict, symbolic interactionism)

### Test Day Mindset

**Believe in your preparation.** By test day, you've studied hundreds of hours. No amount of last-minute cramming will help more than confidence and rest.

- **Be adaptive**: If a passage is brutal, so it is for everyone. Move on.
- **No post-mortems**: After each section, it's DONE. Don't analyze.
- **Stay present**: Focus on the current question, not past or future ones.
- **You will see unfamiliar content**: This is normal. Use reasoning and elimination.

### After the Exam

- You cannot change your answers. Let go.
- Scores are released in approximately 4 weeks
- Regardless of how you feel, trust the process — most people feel worse than they scored`
    },
    {
      id: 'td7-quiz1',
      type: 'multiple-choice' as const,
      content: '**Final Strategy** 🎯',
      exercise: {
        questions: [
          {
            question: 'The night before the MCAT, the BEST strategy is:',
            options: ['No studying — relax, eat a good dinner, and go to bed early', 'Cram high-yield topics until midnight', 'Take a full practice exam', 'Review all your notes from the beginning'],
            correctAnswer: 0,
            explanation: 'Sleep is the single most important thing the night before. Your brain consolidates memories during sleep. Cramming the night before creates anxiety and exhaustion — neither helps performance. Trust your months of preparation.'
          }
        ]
      }
    },
    {
      id: 'td7-summary',
      type: 'text' as const,
      content: `### Test Day Strategy — Complete! ✅

You've learned the structure, timing, study strategies, and test-day mindset for the MCAT. The exam tests not just knowledge but also stamina, strategy, and composure. Trust your preparation, stay adaptive, and remember: one hard passage doesn't define your score. You've got this!`
    }
  ]
};
"""

    for i in range(1, 8):
        write_file(f'mcat-mcat-test-day-strategy-mcat-part{i}.ts', parts[i])


# Run all generators
print("=== MCAT Batch 6: Psychology & Behavior ===")
gen_psych()
print("\n=== MCAT Batch 6: Sociology ===")
gen_sociology()
print("\n=== MCAT Batch 6: Science Passage Strategy ===")
gen_sci_passage()
print("\n=== MCAT Batch 6: Test Day Strategy ===")
gen_test_day()
print(f"\nBatch 6 complete! Total files: 28")
