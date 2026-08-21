export const lessonData = {
  topicSlug: 'sat-punctuation-core-skills',
  sections: [
    {
      id: 'punc-core-p2-recap',
      type: 'text' as const,
      content: `# Punctuation: Practice

**Part 2 of 2 — Your Checklist**

Part 1 covered joining two complete sentences. Here are three more patterns that show up again and again, plus a checklist you can run on any punctuation question.

### 1. A comma after an opening phrase

When a sentence starts with a short lead-in before the main idea, put a comma at the end of that lead-in.

> **Before the game,** we ate pizza.

The comma marks where the lead-in stops and the main sentence starts.

### 2. A colon needs a complete sentence on its LEFT

A colon (**:**) says "here it comes." It can introduce a list or an explanation. But the words before the colon must be able to stand alone as a sentence.

> **I packed three things:** a hat, a map, and water.

"I packed three things" is a complete sentence, so the colon is allowed. Compare that to "I packed: a hat, a map, and water." Here "I packed" is not doing the job, because the colon has cut the sentence in half.

### 3. Extra information gets a comma on BOTH sides

Sometimes a sentence drops in a detail you could remove without breaking the sentence. That detail is called a **supplement** — extra information. It needs the same mark on both sides: comma...comma.

> My uncle**,** who lives in Texas**,** sends postcards.

Take out "who lives in Texas" and you still have "My uncle sends postcards." That is the test. One comma without its partner is wrong.

### Your checklist

1. Cover the answer choices.
2. Is there a complete sentence on the left of the blank? On the right?
3. Two complete sentences → period, semicolon, or comma + FANBOYS. Never a comma alone.
4. Opening lead-in phrase → comma at the end of it.
5. A colon introducing a list or explanation → complete sentence on its left.
6. Extra information dropped into the middle → same mark on both sides.`
    },
    {
      id: 'punc-core-p2-q1',
      type: 'quiz' as const,
      question: 'Which choice punctuates the opening phrase correctly?',
      options: [
        'After the movie ended we walked home.',
        'After the movie ended, we walked home.',
        'After, the movie ended we walked home.',
        'After the movie, ended we walked home.'
      ],
      correctAnswer: 1,
      explanation: 'The comma belongs after "ended." The sentence opens with the lead-in "After the movie ended," and the main idea is "we walked home." A comma marks the point where the lead-in stops and the main sentence begins. The other placements drop the comma inside the lead-in, which splits words that belong together.'
    },
    {
      id: 'punc-core-p2-q2',
      type: 'quiz' as const,
      question: 'What must come BEFORE a colon?',
      options: [
        'a list of at least three items',
        'a question',
        'any group of words at all',
        'a complete sentence'
      ],
      correctAnswer: 3,
      explanation: 'A complete sentence must come before a colon. The words to the left of the colon have to stand on their own, with a subject and a verb, as in "I packed three things: a hat, a map, and water." What comes after the colon can be a list, a single word, or an explanation, so the rule is about the left side, not the right side.'
    },
    {
      id: 'punc-core-p2-q3',
      type: 'quiz' as const,
      question: 'Which choice correctly punctuates the extra information in the middle of the sentence?',
      options: [
        'My uncle, who lives in Texas, sends postcards every winter.',
        'My uncle, who lives in Texas sends postcards every winter.',
        'My uncle who lives in Texas, sends postcards every winter.',
        'My uncle, who, lives in Texas sends postcards every winter.'
      ],
      correctAnswer: 0,
      explanation: 'A comma before "who" and a comma after "Texas" is correct. "Who lives in Texas" is extra information: remove it and "My uncle sends postcards every winter" is still a complete sentence. Extra information dropped into the middle needs the same mark on both sides, so the commas come as a pair. The other choices give only one comma, or place it where no break belongs.'
    },
    {
      id: 'punc-core-p2-q4',
      type: 'quiz' as const,
      question: 'Which choice introduces the list correctly?',
      options: [
        'I packed three things; a hat, a map, and water.',
        'I packed: three things a hat, a map, and water.',
        'I packed three things: a hat, a map, and water.',
        'I packed three things, a hat, a map, and water.'
      ],
      correctAnswer: 2,
      explanation: 'The colon after "things" is correct. "I packed three things" is a complete sentence, which is what a colon requires on its left, and the colon then announces the list that follows. A semicolon would need a complete sentence on its right as well, and a list of nouns is not one; placing the colon after "packed" cuts the opening sentence off before it is finished.'
    }
  ]
}
