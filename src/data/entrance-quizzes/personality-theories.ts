/**
 * Entrance Quiz — Personality Theories (AP Psychology)
 * 14 questions · 7 parts (2 per part). Rebuilt Oct 2026 from the Phase 1 lesson.
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1: Psychodynamic Theory: The Unconscious Mind and Projective Tests
  {
    id: 'pt-ent-1a',
    question: 'Why do psychodynamic psychologists assess personality with ambiguous inkblots and pictures instead of asking people direct questions about themselves?',
    options: ['Ambiguous stimuli are much easier to score with a fixed key', 'Unconscious material cannot be reported on request', 'Ethical guidelines forbid asking clients direct questions', 'Ambiguous stimuli give higher test-retest reliability'],
    correctIndex: 1,
    explanation: 'Psychodynamic theory holds that the important material is unconscious, so a person cannot simply report it. Ambiguous stimuli are meant to let hidden wishes and fears be projected onto them.',
    partNumber: 1,
    partTitle: 'Psychodynamic Theory: The Unconscious Mind and Projective Tests',
  },
  {
    id: 'pt-ent-1b',
    question: 'A psychodynamic account says a woman\'s extreme neatness hides an unconscious wish to be messy. The same account says that if she were messy, that would reveal the wish directly. What is the strongest scientific criticism of this account?',
    options: ['It fits any outcome, so no result could show it is wrong', 'It rests on a large random sample of neat and messy adults', 'It leaves out the role of unconscious processes in behavior', 'It depends on an objectively scored personality inventory'],
    correctIndex: 0,
    explanation: 'An account that explains both neatness and messiness predicts nothing and cannot be falsified. That is a central criticism of psychodynamic theory.',
    partNumber: 1,
    partTitle: 'Psychodynamic Theory: The Unconscious Mind and Projective Tests',
  },

  // Part 2: Ego Defense Mechanisms
  {
    id: 'pt-ent-2a',
    question: 'Without realizing it, a man is attracted to his best friend\'s girlfriend. Around others he loudly criticizes her and insists he can barely stand to be in the same room with her. Which defense mechanism does this best illustrate?',
    options: ['Projection', 'Rationalization', 'Displacement', 'Reaction formation'],
    correctIndex: 3,
    explanation: 'He turns an unacceptable attraction into its exaggerated opposite, open dislike, which is reaction formation. In projection he would instead see the attraction in someone else.',
    partNumber: 2,
    partTitle: 'Ego Defense Mechanisms',
  },
  {
    id: 'pt-ent-2b',
    question: 'Four workers have just been fired for repeated lateness. Which worker is showing an ego defense mechanism rather than conscious coping or lying?',
    options: ['One truly believes she was let go for honesty', 'One tells friends a made-up story that her job was cut', 'One jogs every evening to work off her anger about it', 'One writes out a step-by-step plan to find a new job'],
    correctIndex: 0,
    explanation: 'Defense mechanisms are unconscious: the worker truly believes the more acceptable reason, which is rationalization. A deliberate story is a lie, and jogging or planning are chosen coping strategies.',
    partNumber: 2,
    partTitle: 'Ego Defense Mechanisms',
  },

  // Part 3: Humanistic Theory: Unconditional Regard and the Self-Actualizing Tendency
  {
    id: 'pt-ent-3a',
    question: 'A youth coach praises players warmly after wins and ignores them completely after losses. According to Carl Rogers, what is the most likely long-term effect on the players?',
    options: ['They will come to value themselves whatever the score', 'They will absorb conditions of worth and avoid big risks', 'They will grow more congruent because the rules are clear', 'They will grow faster because competition fuels growth'],
    correctIndex: 1,
    explanation: 'Praise that depends on winning is conditional positive regard. Players learn that they are worthwhile only when they win, and protecting that fragile self-concept can lead them to avoid challenges.',
    partNumber: 3,
    partTitle: 'Humanistic Theory: Unconditional Regard and the Self-Actualizing Tendency',
  },
  {
    id: 'pt-ent-3b',
    question: 'Which assessment would a humanistic psychologist be most likely to use to study a client\'s personality?',
    options: ['Interpreting the stories a client tells about ambiguous pictures', 'Watching how a client handles a staged customer complaint', 'Scoring an inventory whose scales came from factor analysis', 'Comparing ratings of "how I am" with "how I would like to be"'],
    correctIndex: 3,
    explanation: 'Humanistic psychologists care about how people see themselves, and the gap between actual-self and ideal-self ratings measures incongruence. The other methods belong to the psychodynamic, social-cognitive and trait perspectives.',
    partNumber: 3,
    partTitle: 'Humanistic Theory: Unconditional Regard and the Self-Actualizing Tendency',
  },

  // Part 4: Social-Cognitive Theory: Reciprocal Determinism, Self-Efficacy, and Self-Esteem
  {
    id: 'pt-ent-4a',
    question: 'A 16-year-old says, "I like who I am and feel like a worthwhile person, but I\'m sure I will never manage to parallel park." How is her view of herself best described?',
    options: ['Low self-esteem with high self-efficacy for parking', 'High self-esteem with low self-efficacy for parking', 'High congruence with low emotional stability', 'Low conscientiousness with high reciprocal determinism'],
    correctIndex: 1,
    explanation: 'Feeling worthwhile as a person is high self-esteem, while doubting her ability at one specific task is low self-efficacy for that task. The two can point in different directions.',
    partNumber: 4,
    partTitle: 'Social-Cognitive Theory: Reciprocal Determinism, Self-Efficacy, and Self-Esteem',
  },
  {
    id: 'pt-ent-4b',
    question: 'A girl who enjoys drawing joins the art club. Members admire her sketches, which makes her more confident, so she enters a citywide contest and meets professional artists who become her mentors. Which concept does this sequence best illustrate?',
    options: ['Reciprocal determinism, with three factors acting on one another', 'Unconditional regard, with acceptance that does not depend on her work', 'Trait stability, with one enduring characteristic driving behavior', 'Sublimation, with an impulse channeled into a valued activity'],
    correctIndex: 0,
    explanation: 'Her beliefs, her behavior and her environment keep changing one another: confidence leads her to act, her actions change her surroundings, and the new surroundings feed back on her beliefs. That is reciprocal determinism.',
    partNumber: 4,
    partTitle: 'Social-Cognitive Theory: Reciprocal Determinism, Self-Efficacy, and Self-Esteem',
  },

  // Part 5: Trait Theory: The Big Five and Personality Inventories
  {
    id: 'pt-ent-5a',
    question: 'In a factor analysis, the items "worries often," "gets upset easily" and "has frequent mood swings" correlate strongly with one another and near zero with items about talkativeness. A person who agrees with all three items would score at which point on a Big Five trait, using the CED\'s name?',
    options: ['Conscientiousness, high', 'Agreeableness, low', 'Emotional stability, low', 'Extraversion, high'],
    correctIndex: 2,
    explanation: 'Worry, moodiness and being easily upset cluster as one factor: the trait the CED calls emotional stability. Agreeing with these items places a person at its low end, the pole other sources call neuroticism.',
    partNumber: 5,
    partTitle: 'Trait Theory: The Big Five and Personality Inventories',
  },
  {
    id: 'pt-ent-5b',
    question: 'A woman who scores very high in extraversion sits quietly and speaks to almost no one at a coworker\'s funeral. How would a trait theorist best explain this?',
    options: ['Her inventory must have very low test-retest reliability', 'Traits sort people into fixed categories, not dimensions', 'Her extraversion score must have been faked to impress', 'Traits predict behavior averaged across many situations'],
    correctIndex: 3,
    explanation: 'An extravert is not outgoing in every moment; traits predict average behavior across many situations far better than behavior in any single one.',
    partNumber: 5,
    partTitle: 'Trait Theory: The Big Five and Personality Inventories',
  },

  // Part 6: AP Exam Practice: Personality Research on the AAQ and EBQ
  {
    id: 'pt-ent-6a',
    question: 'In a practice study, 150 employees complete a Big Five inventory, and six months later their supervisors rate their job performance. Conscientiousness scores and the ratings show r = +0.35. Which statement accurately names the method and a limitation?',
    options: ['Experimental, and random assignment controls confounds', 'Case study, and one person limits generalizability', 'Correlational, and a third variable may explain it', 'Experimental, and the sample was too large to analyze'],
    correctIndex: 2,
    explanation: 'The researchers measured two existing variables and did not assign anyone to a trait, so the study is correlational. A third variable, such as a supportive manager, could contribute to both scores.',
    partNumber: 6,
    partTitle: 'AP Exam Practice: Personality Research on the AAQ and EBQ',
  },
  {
    id: 'pt-ent-6b',
    question: 'Which statement is an operational definition of extraversion that could appear in an AAQ response?',
    options: ['The tendency to be outgoing, talkative and full of energy', 'A trait that is partly inherited from a person\'s parents', 'The total score on a 12-item sociability questionnaire', 'The opposite pole of being quiet and reserved with others'],
    correctIndex: 2,
    explanation: 'An operational definition states exactly how a variable was measured in the study, such as a total score on a specific scale. The other options describe the concept rather than a measurement procedure.',
    partNumber: 6,
    partTitle: 'AP Exam Practice: Personality Research on the AAQ and EBQ',
  },

  // Part 7: Synthesis Review: Four Perspectives Compared
  {
    id: 'pt-ent-7a',
    question: 'A counselor explains a teen\'s devotion to basketball this way: watching his older cousin succeed convinced him he could improve, so he practiced daily; his growing skill earned him a spot on a travel team, whose coaches push him harder and raise his confidence further. Which perspective is the counselor using?',
    options: ['Psychodynamic', 'Trait', 'Humanistic', 'Social-cognitive'],
    correctIndex: 3,
    explanation: 'A belief in his ability (self-efficacy) gained from watching a model drives his behavior, his behavior changes his environment, and the new environment feeds back on his belief. That reciprocal loop is the social-cognitive account of personality.',
    partNumber: 7,
    partTitle: 'Synthesis Review: Four Perspectives Compared',
  },
  {
    id: 'pt-ent-7b',
    question: 'Which pairing correctly matches a perspective with how it assesses personality?',
    options: ['Trait: objective inventories organized by factor analysis', 'Humanistic: projective tests interpreted by an expert', 'Psychodynamic: records of past behavior in similar settings', 'Social-cognitive: comparisons of the actual and ideal self'],
    correctIndex: 0,
    explanation: 'Trait theorists use objectively scored inventories organized by factor analysis. Projective tests belong to the psychodynamic view, past behavior in similar settings to the social-cognitive view, and actual-versus-ideal ratings to the humanistic view.',
    partNumber: 7,
    partTitle: 'Synthesis Review: Four Perspectives Compared',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Psychodynamic Theory: The Unconscious Mind and Projective Tests' },
    { partNumber: 2, partTitle: 'Ego Defense Mechanisms' },
    { partNumber: 3, partTitle: 'Humanistic Theory: Unconditional Regard and the Self-Actualizing Tendency' },
    { partNumber: 4, partTitle: 'Social-Cognitive Theory: Reciprocal Determinism, Self-Efficacy, and Self-Esteem' },
    { partNumber: 5, partTitle: 'Trait Theory: The Big Five and Personality Inventories' },
    { partNumber: 6, partTitle: 'AP Exam Practice: Personality Research on the AAQ and EBQ' },
    { partNumber: 7, partTitle: 'Synthesis Review: Four Perspectives Compared' },
  ]
}
