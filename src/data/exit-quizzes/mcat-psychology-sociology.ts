/**
 * MCAT Psychology & Sociology Exit Quiz
 */

import { authoredFor } from './mcat-authored-pool'
import { mcatSubtopicPool } from './mcat-subtopic-pool'
import type { MCATQuizQuestion } from './mcat-general-chemistry'
import type { ExitQuizQuestion } from './sat-linear-equations-inequalities'

const questionPool: MCATQuizQuestion[] = [
  {
    question: 'According to Piaget, the stage during which children develop object permanence is:',
    options: ['Preoperational', 'Sensorimotor', 'Concrete operational', 'Formal operational'],
    correctAnswer: 1,
    explanation: 'Object permanence (understanding that objects exist even when not visible) develops during the sensorimotor stage (birth to ~2 years) in Piaget\'s theory.',
    difficulty: 'easy',
  },
  {
    question: 'The James-Lange theory of emotion proposes that:',
    options: ['Emotions and physiological responses occur simultaneously', 'We experience an emotion first, then a physiological response', 'Physiological arousal occurs first and we interpret it as an emotion', 'Emotions are entirely cognitive with no physiological component'],
    correctAnswer: 2,
    explanation: 'James-Lange theory: stimulus → physiological arousal → emotion. We feel afraid because our heart races, not the other way around.',
    difficulty: 'medium',
  },
  {
    question: 'In operant conditioning, negative reinforcement:',
    options: ['Decreases a behavior by adding a punishment', 'Increases a behavior by removing an aversive stimulus', 'Decreases a behavior by removing a reward', 'Has no effect on behavior'],
    correctAnswer: 1,
    explanation: 'Negative reinforcement increases a behavior by removing something unpleasant. Example: taking aspirin (behavior) removes a headache (aversive stimulus), making you more likely to take aspirin again.',
    difficulty: 'easy',
  },
  {
    question: 'The bystander effect is best explained by:',
    options: ['Social facilitation', 'Diffusion of responsibility', 'Groupthink', 'Cognitive dissonance'],
    correctAnswer: 1,
    explanation: 'The bystander effect occurs because individuals feel less personal responsibility to act when others are present (diffusion of responsibility). The more bystanders, the less likely any one person is to help.',
    difficulty: 'easy',
  },
  {
    question: 'Broca\'s area is primarily associated with:',
    options: ['Language comprehension', 'Speech production', 'Visual processing', 'Memory consolidation'],
    correctAnswer: 1,
    explanation: 'Broca\'s area (left frontal lobe) controls speech production and language output. Damage leads to Broca\'s aphasia — understanding language but difficulty producing speech.',
    difficulty: 'easy',
  },
  {
    question: 'According to Erikson, the psychosocial crisis of adolescence is:',
    options: ['Trust vs. Mistrust', 'Industry vs. Inferiority', 'Identity vs. Role Confusion', 'Intimacy vs. Isolation'],
    correctAnswer: 2,
    explanation: 'Erikson\'s stage 5 (adolescence): Identity vs. Role Confusion. Teens explore and form their personal identity. Failure leads to confusion about who they are.',
    difficulty: 'easy',
  },
  {
    question: 'The sociological concept of "looking-glass self" (Cooley) states that:',
    options: ['Self-concept is biologically determined', 'We develop our sense of self based on how we think others perceive us', 'Self-identity is fixed from birth', 'Social interactions have no effect on identity'],
    correctAnswer: 1,
    explanation: 'Cooley\'s looking-glass self: we imagine how we appear to others, imagine their judgment, and develop a self-feeling (pride/shame) based on that perceived judgment.',
    difficulty: 'medium',
  },
  {
    question: 'Which neurotransmitter is most directly associated with the reward pathway?',
    options: ['Serotonin', 'GABA', 'Dopamine', 'Acetylcholine'],
    correctAnswer: 2,
    explanation: 'Dopamine (especially in the mesolimbic pathway from the ventral tegmental area to the nucleus accumbens) is the key neurotransmitter in the brain\'s reward system.',
    difficulty: 'easy',
  },
  {
    question: 'Schizophrenia is most associated with which neurotransmitter abnormality?',
    options: ['Low serotonin', 'Excess dopamine (positive symptoms)', 'Low GABA', 'Excess norepinephrine'],
    correctAnswer: 1,
    explanation: 'The dopamine hypothesis of schizophrenia links positive symptoms (hallucinations, delusions) to excess dopaminergic activity. Antipsychotics work by blocking D2 dopamine receptors.',
    difficulty: 'medium',
  },
  {
    question: 'Symbolic interactionism focuses on:',
    options: ['Large-scale social structures', 'How individuals create meaning through social interaction', 'The function of each part of society', 'Class conflict and power dynamics'],
    correctAnswer: 1,
    explanation: 'Symbolic interactionism (Mead, Blumer) is a micro-level sociological perspective that examines how people create meaning through symbols, language, and interaction in everyday life.',
    difficulty: 'easy',
  },
  {
    question: 'The just-world hypothesis leads people to:',
    options: ['Help victims of injustice', 'Blame victims for their misfortune', 'Seek systemic explanations for inequality', 'Support social welfare programs'],
    correctAnswer: 1,
    explanation: 'The just-world hypothesis is the belief that people get what they deserve. This cognitive bias leads to victim-blaming — assuming bad things happen to those who deserve them.',
    difficulty: 'medium',
  },
  {
    question: 'In classical conditioning, the conditioned response (CR) is:',
    options: ['An automatic response to a natural stimulus', 'A learned response to a previously neutral stimulus', 'A response that cannot be extinguished', 'An innate reflex'],
    correctAnswer: 1,
    explanation: 'The CR is a learned response that is elicited by the conditioned stimulus (CS) after repeated pairing with the unconditioned stimulus (US). It is typically similar to the UCR.',
    difficulty: 'easy',
  },
  {
    question: 'The fundamental attribution error refers to:',
    options: ['Overestimating situational factors for others\' behavior', 'Overestimating dispositional (internal) factors when explaining others\' behavior', 'Accurate attribution of behavior to causes', 'Taking too much credit for success'],
    correctAnswer: 1,
    explanation: 'The fundamental attribution error (correspondence bias) is the tendency to attribute others\' behavior to internal/dispositional factors while underestimating situational influences.',
    difficulty: 'easy',
  },
  {
    question: 'Which part of the limbic system is most important for forming new explicit memories?',
    options: ['Amygdala', 'Hippocampus', 'Hypothalamus', 'Thalamus'],
    correctAnswer: 1,
    explanation: 'The hippocampus is critical for forming and consolidating new explicit (declarative) memories. The amygdala processes emotional memories. Damage to the hippocampus causes anterograde amnesia.',
    difficulty: 'easy',
  },
  {
    question: 'Social stratification based primarily on economic factors is most consistent with which sociological perspective?',
    options: ['Functionalism (Davis-Moore thesis)', 'Feminist theory', 'Conflict theory (Marx)', 'Symbolic interactionism'],
    correctAnswer: 2,
    explanation: 'Marx\'s conflict theory views social stratification as arising from economic inequality between the bourgeoisie (owners) and proletariat (workers), with class conflict as the driver of social change.',
    difficulty: 'medium',
  },
]

// Deep pool: local questions + the authored competitive bank for this area
// (audit F1). Authored items carry subtopic tags the selector prefers.
const fullPool = [...questionPool, ...authoredFor(['mcat-psych-', 'mcat-research-methods-'])]

export function generateExitQuiz(count: number = 10, topicSlug?: string): ExitQuizQuestion[] {
  const source = topicSlug ? mcatSubtopicPool(fullPool, 'psych-soc', topicSlug) : fullPool
  const shuffled = [...source].sort(() => Math.random() - 0.5)
  return shuffled.slice(0, Math.min(count, shuffled.length)).map((q, i) => ({
    id: `psychology-sociology-${i}`,
    question: q.question,
    options: q.options,
    correctIndex: q.correctAnswer,
    explanation: q.explanation,
    category: 'mcat-psychology-sociology',
  }))
}
