// SAT Reading question bank for competitive mode

export interface SatReadingQuestion {
  id: number
  question: string
  options: string[]
  correctAnswer: number
  explanation: string
  difficulty: 'easy' | 'medium' | 'hard'
}

const allQuestions: SatReadingQuestion[] = [
  // --- EASY ---
  {
    id: 1,
    question: 'What is the primary purpose of a thesis statement in an essay?',
    options: ['To present the main argument or claim', 'To introduce background information', 'To provide evidence', 'To summarize the conclusion'],
    correctAnswer: 0,
    explanation: 'A thesis statement presents the central claim or argument that the essay will support.',
    difficulty: 'easy',
  },
  {
    id: 2,
    question: 'Which word is a synonym for "benevolent"?',
    options: ['Kind', 'Hostile', 'Indifferent', 'Cautious'],
    correctAnswer: 0,
    explanation: 'Benevolent means well-meaning and kindly.',
    difficulty: 'easy',
  },
  {
    id: 3,
    question: '"The wind howled through the trees." This is an example of:',
    options: ['Personification', 'Simile', 'Alliteration', 'Hyperbole'],
    correctAnswer: 0,
    explanation: 'Personification gives human qualities (howling) to a non-human thing (the wind).',
    difficulty: 'easy',
  },
  {
    id: 4,
    question: 'What does the word "ambiguous" mean?',
    options: ['Open to more than one interpretation', 'Completely clear', 'Very long', 'Highly detailed'],
    correctAnswer: 0,
    explanation: 'Ambiguous means having multiple possible meanings or unclear.',
    difficulty: 'easy',
  },
  {
    id: 5,
    question: 'Which sentence uses a transition word correctly?',
    options: ['He was tired; however, he continued working.', 'He was tired however he continued working.', 'He was tired, however he continued working.', 'He was tired however, he continued working.'],
    correctAnswer: 0,
    explanation: 'A semicolon before "however" and a comma after correctly joins two independent clauses.',
    difficulty: 'easy',
  },
  {
    id: 6,
    question: 'What is an author\'s "tone"?',
    options: ['The attitude conveyed through word choice', 'The main idea of the passage', 'The chronological order of events', 'The factual accuracy of statements'],
    correctAnswer: 0,
    explanation: 'Tone is the author\'s attitude toward the subject, conveyed through diction and style.',
    difficulty: 'easy',
  },
  {
    id: 7,
    question: 'What is the difference between "affect" and "effect"?',
    options: ['"Affect" is usually a verb; "effect" is usually a noun', 'They mean the same thing', '"Effect" is a verb; "affect" is a noun', 'Neither is correct in formal writing'],
    correctAnswer: 0,
    explanation: '"Affect" is typically used as a verb (to influence), while "effect" is typically a noun (a result).',
    difficulty: 'easy',
  },
  {
    id: 8,
    question: 'Which best describes a "counterargument"?',
    options: ['An opposing viewpoint the author addresses', 'The main claim of the essay', 'Evidence supporting the thesis', 'A concluding statement'],
    correctAnswer: 0,
    explanation: 'A counterargument presents an opposing perspective that the author then refutes to strengthen their argument.',
    difficulty: 'easy',
  },
  // --- MEDIUM ---
  {
    id: 9,
    question: 'What rhetorical device uses three parallel items for emphasis (e.g., "life, liberty, and the pursuit of happiness")?',
    options: ['Tricolon', 'Anaphora', 'Chiasmus', 'Epistrophe'],
    correctAnswer: 0,
    explanation: 'A tricolon is a rhetorical device using three parallel words, phrases, or clauses for emphasis.',
    difficulty: 'medium',
  },
  {
    id: 10,
    question: 'What is an "unreliable narrator"?',
    options: ['A narrator whose account cannot be fully trusted', 'A narrator who tells the story in third person', 'A narrator who is omniscient', 'A narrator who speaks directly to the reader'],
    correctAnswer: 0,
    explanation: 'An unreliable narrator provides a biased or inaccurate account due to limited knowledge, personal bias, or deception.',
    difficulty: 'medium',
  },
  {
    id: 11,
    question: 'The word "ostentatious" most nearly means:',
    options: ['Designed to attract attention or impress', 'Quiet and humble', 'Extremely cautious', 'Lacking in taste'],
    correctAnswer: 0,
    explanation: 'Ostentatious means showy, designed to impress or attract notice.',
    difficulty: 'medium',
  },
  {
    id: 12,
    question: 'What is the purpose of a rhetorical question?',
    options: ['To make a point rather than get an answer', 'To confuse the reader', 'To request specific information', 'To introduce a new character'],
    correctAnswer: 0,
    explanation: 'Rhetorical questions are asked for effect — to make the reader think rather than to elicit a direct answer.',
    difficulty: 'medium',
  },
  {
    id: 13,
    question: 'Which sentence correctly uses a semicolon?',
    options: ['She loves reading; her brother prefers gaming.', 'She loves; reading and her brother prefers gaming.', 'She loves reading; and her brother prefers gaming.', 'She loves reading, her brother; prefers gaming.'],
    correctAnswer: 0,
    explanation: 'A semicolon correctly joins two independent clauses that are closely related in meaning.',
    difficulty: 'medium',
  },
  {
    id: 14,
    question: 'What does "juxtaposition" mean in literature?',
    options: ['Placing contrasting elements side by side', 'Using excessive exaggeration', 'Repeating the first word in successive clauses', 'Referring to a historical event indirectly'],
    correctAnswer: 0,
    explanation: 'Juxtaposition places two contrasting ideas, characters, or settings close together for comparison or emphasis.',
    difficulty: 'medium',
  },
  {
    id: 15,
    question: 'An argument that uses ethos relies on:',
    options: ['The credibility of the speaker', 'Emotional appeal', 'Logical reasoning', 'Repetition'],
    correctAnswer: 0,
    explanation: 'Ethos is an appeal to the speaker\'s credibility, expertise, or trustworthiness.',
    difficulty: 'medium',
  },
  {
    id: 16,
    question: 'What is "diction" in the context of writing?',
    options: ['Word choice', 'Sentence structure', 'Paragraph organization', 'Font selection'],
    correctAnswer: 0,
    explanation: 'Diction refers to the specific words an author chooses, which affect tone, mood, and meaning.',
    difficulty: 'medium',
  },
  // --- HARD ---
  {
    id: 17,
    question: 'What is "litotes"?',
    options: ['Understatement using double negatives (e.g., "not bad")', 'Extreme exaggeration', 'A comparison using "like" or "as"', 'Repetition of vowel sounds'],
    correctAnswer: 0,
    explanation: 'Litotes is a figure of speech using understatement, often with double negatives, to affirm something (e.g., "not uncommon" = common).',
    difficulty: 'hard',
  },
  {
    id: 18,
    question: 'In SAT reading, "the author would most likely agree with which statement" questions require you to:',
    options: ['Infer the author\'s position from evidence in the passage', 'State your personal opinion', 'Choose the most extreme answer', 'Look for directly quoted statements only'],
    correctAnswer: 0,
    explanation: 'These inference questions require synthesizing textual evidence to determine what the author would support.',
    difficulty: 'hard',
  },
  {
    id: 19,
    question: 'What is a "non sequitur" logical fallacy?',
    options: ['A conclusion that does not follow from the premises', 'An attack on a person rather than their argument', 'Appealing to popularity', 'Using a false comparison'],
    correctAnswer: 0,
    explanation: 'Non sequitur (Latin: "it does not follow") is when the conclusion is not logically connected to the evidence presented.',
    difficulty: 'hard',
  },
  {
    id: 20,
    question: 'The word "equivocate" most nearly means:',
    options: ['To use ambiguous language to mislead', 'To speak loudly and clearly', 'To agree wholeheartedly', 'To distribute equally'],
    correctAnswer: 0,
    explanation: 'Equivocate means to use deliberately vague or ambiguous language to deceive or avoid commitment.',
    difficulty: 'hard',
  },
  {
    id: 21,
    question: 'What distinguishes a "claim" from "evidence" in an argument?',
    options: ['A claim is an assertion; evidence is support for that assertion', 'They are interchangeable terms', 'Evidence comes first; claims come last', 'Claims are always factual; evidence is opinion-based'],
    correctAnswer: 0,
    explanation: 'A claim is the point being argued; evidence consists of facts, data, or examples that support the claim.',
    difficulty: 'hard',
  },
  {
    id: 22,
    question: 'What is "synecdoche"?',
    options: ['A part representing the whole (or vice versa)', 'A comparison without "like" or "as"', 'Addressing an absent person as if present', 'Repetition of consonant sounds'],
    correctAnswer: 0,
    explanation: 'Synecdoche uses a part to represent the whole (e.g., "all hands on deck" — hands = sailors).',
    difficulty: 'hard',
  },
  {
    id: 23,
    question: 'In paired passages on the SAT, questions asking how one author would respond to the other require:',
    options: ['Understanding both authors\' positions and finding points of agreement or conflict', 'Only reading the second passage', 'Choosing the longer answer', 'Ignoring tone differences'],
    correctAnswer: 0,
    explanation: 'Cross-passage questions require comparing the perspectives, evidence, and reasoning of both authors.',
    difficulty: 'hard',
  },
  {
    id: 24,
    question: 'The word "ephemeral" most nearly means:',
    options: ['Lasting a very short time', 'Extremely important', 'Related to ancient history', 'Beautifully decorated'],
    correctAnswer: 0,
    explanation: 'Ephemeral means short-lived or transitory.',
    difficulty: 'hard',
  },
  {
    id: 25,
    question: 'What is the "straw man" fallacy?',
    options: ['Misrepresenting someone\'s argument to make it easier to attack', 'Appealing to tradition', 'Using circular reasoning', 'Drawing a false analogy'],
    correctAnswer: 0,
    explanation: 'A straw man fallacy distorts or oversimplifies an opponent\'s argument, then refutes the distorted version.',
    difficulty: 'hard',
  },
]

export function getSatReadingQuestions(count: number = 10): SatReadingQuestion[] {
  const shuffled = [...allQuestions].sort(() => Math.random() - 0.5)
  return shuffled.slice(0, Math.min(count, shuffled.length))
}
