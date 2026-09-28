export const satExpressionPart6Data = {
  topicSlug: 'sat-expression-ideas-sat',
  sections: [
    {
      id: 'ei6-intro',
      type: 'text' as const,
      content: `# Rhetorical Synthesis III: Comparisons and Audience

**Part 6 of 7 — Rhetorical Synthesis: Comparisons and Audience**

Comparison goals are the most common synthesis goals on the SAT, and they have the most precise requirements.

### What a Comparison Sentence Must Contain

| Goal | Required |
|---|---|
| **Emphasize a similarity** between X and Y | Both X and Y + a feature they share |
| **Emphasize a difference** between X and Y | Both X and Y + the feature on which they differ |
| **Contrast** X's A with Y's A | Both, compared on **that** feature |

### Three Ways a Comparison Choice Fails

1. **One-sided:** describes only X (or only Y), however vividly.
2. **Wrong feature:** compares X and Y, but on a feature the goal did not name (their sizes when the goal asked about their diets).
3. **Wrong direction:** states a similarity when the goal asked for a difference, or the reverse.

### Structure Words That Signal Each

| Similarity | Difference |
|---|---|
| both… and…, like X, Y…, similarly | whereas, while, unlike X, Y…, but |

These words help you scan, but check the content: "while" in "Venus is hot, while Mars is cold" is a difference, and the goal may have asked about their atmospheres.

### Audience Cues, Revisited

| Goal mentions… | The sentence should… |
|---|---|
| an audience **unfamiliar** with X | identify X ("X, a gene-editing tool, …") |
| an audience **already familiar** with X | skip the definition and give something new |
| no audience at all | follow the goal's verb alone |`
    },
    {
      id: 'ei6-quiz',
      type: 'multiple-choice' as const,
      content: '**Comparison and Audience Practice** 🎯',
      exercise: {
        questions: [
          {
            question: `While researching a topic, a student has taken the following notes: • The Nile River flows north through northeastern Africa into the Mediterranean Sea. • It is about 6,650 kilometers long. • The Amazon River flows east through South America into the Atlantic Ocean. • It carries more water than any other river on Earth. The student wants to emphasize a difference in the direction the two rivers flow. Which choice most effectively uses relevant information from the notes to accomplish this goal?`,
            options: ['The Nile flows north to the Mediterranean, whereas the Amazon flows east to the Atlantic.', 'The Nile is about 6,650 kilometers long, while the Amazon carries the most water of any river.', 'The Nile flows north through northeastern Africa and empties into the Mediterranean Sea.', 'Both the Nile and the Amazon flow across a continent and empty into a sea or an ocean.'],
            correctAnswer: 0,
            explanation: `The goal names the feature, direction of flow, and needs both rivers. Only the north-versus-east sentence does both. The length-and-volume sentence is a difference on the wrong features, the Nile sentence is one-sided, and the both-rivers sentence states a similarity.`
          },
          {
            question: `While researching a topic, a student has taken the following notes: • CRISPR is a gene-editing tool adapted from a bacterial defense system. • It uses a guide molecule to find a specific DNA sequence and an enzyme to cut it. • In 2023, the first CRISPR-based therapy was approved in the United Kingdom and the United States. • The therapy, which treats sickle cell disease, edits a patient's own blood stem cells. The student wants to present a recent development to an audience already familiar with CRISPR. Which choice most effectively uses relevant information from the notes to accomplish this goal?`,
            options: ['In 2023, a CRISPR therapy that edits blood stem cells was approved for sickle cell disease.', 'CRISPR, a gene-editing tool adapted from a bacterial defense system, can cut DNA.', 'CRISPR uses a guide molecule to find a specific DNA sequence and an enzyme to cut it.', 'Adapted from a bacterial defense system, CRISPR is a tool that scientists use to edit genes.'],
            correctAnswer: 0,
            explanation: `Two requirements: the information must be recent, and it must not waste a familiar reader's time on basics. Only the 2023 approval is recent. The other three explain what CRISPR is or how it works, which a familiar audience already knows.`
          }
        ]
      }    },
    {
      id: 'ei6-text2',
      type: 'text' as const,
      content: `## Deep Dive: Building and Breaking Comparisons

### Worked Example 1: Four Choices, One Goal

**Notes:**
- Arctic terns migrate about 70,000 kilometers round trip each year.
- They stop to feed along the way.
- Bar-tailed godwits fly about 12,000 kilometers from Alaska to New Zealand.
- They make the whole flight without stopping to eat or rest.

**Goal:** emphasize a difference in how the two birds make their journeys.

| Choice | Verdict | Problem |
|---|---|---|
| "Arctic terns stop to feed along their route, but godwits fly the whole way without stopping." | ✅ | Both birds, one feature (stopping) |
| "Arctic terns fly about 70,000 kilometers a year, while godwits fly about 12,000." | ❌ | Both birds, but the feature is distance, not how they fly |
| "Godwits fly about 12,000 kilometers from Alaska to New Zealand without stopping." | ❌ | One-sided |
| "Both Arctic terns and godwits make migrations of many thousands of kilometers." | ❌ | Similarity, not difference |

The distance choice is the hardest to reject: it *is* a difference between the birds. It is not the difference the goal asked for.

### Worked Example 2: Same Fact, Two Audiences

| Audience | Sentence |
|---|---|
| Unfamiliar with tardigrades | "Tardigrades, microscopic animals that live in moss and soil, can survive years without water." |
| Familiar with tardigrades | "In the tun state, tardigrades can survive years without water." |

The first sentence spends words identifying the animal; the second assumes the reader knows it.

### Comparison Checklist

| Check | Question |
|---|---|
| Both? | Are both X and Y in the sentence? |
| Feature? | Is it the feature the goal names? |
| Direction? | Similarity or difference, as the goal asks? |`
    },
    {
      id: 'ei6-quiz2',
      type: 'multiple-choice' as const,
      content: '**Comparisons and Audience Challenge** 🎯',
      exercise: {
        questions: [
          {
            question: `While researching a topic, a student has taken the following notes: • Venus has a thick atmosphere made mostly of carbon dioxide. • Its surface temperature is about 465°C. • Mars has a thin atmosphere that is also made mostly of carbon dioxide. • Its average surface temperature is about −60°C. The student wants to emphasize a similarity between Venus and Mars. Which choice most effectively uses relevant information from the notes to accomplish this goal?`,
            options: ['Venus and Mars each have an atmosphere made mostly of carbon dioxide.', 'Venus has a thick atmosphere, while the one on Mars is quite thin.', 'The surface of Venus is about 465°C, but Mars averages about −60°C.', 'Mars has a thin atmosphere that is made mostly of carbon dioxide.'],
            correctAnswer: 0,
            explanation: `A similarity needs both planets and a shared feature: both atmospheres are mostly carbon dioxide. The thick-versus-thin and hot-versus-cold sentences are differences, and the Mars sentence describes only one planet.`
          },
          {
            question: `While researching a topic, a student has taken the following notes: • The Great Green Wall is an African-led project launched in 2007. • It aims to restore degraded land across the Sahel, a region just south of the Sahara. • It is planned to stretch about 8,000 kilometers across the continent. • Supporters hope it will create jobs and slow the spread of the desert. The student wants to introduce the Great Green Wall to an audience unfamiliar with it. Which choice most effectively uses relevant information from the notes to accomplish this goal?`,
            options: ['The Great Green Wall is an African-led project to restore land in the Sahel.', 'Supporters hope the Great Green Wall will create jobs and slow the desert\'s spread.', 'The Sahel, a region just south of the Sahara, is where the Great Green Wall lies.', 'Since 2007, work on the Great Green Wall has continued across much of the continent.'],
            correctAnswer: 0,
            explanation: `An unfamiliar reader needs to know what the Great Green Wall is: an African-led land-restoration project. The supporters sentence and the since-2007 sentence assume the reader already knows what the project is, and the Sahel sentence identifies the region, not the project.`
          },
          {
            question: `While researching a topic, a student has taken the following notes: • Emperor penguins breed during the Antarctic winter. • They are the largest penguin species, standing about 1.1 meters tall. • Little penguins breed in southern Australia and New Zealand. • They are the smallest penguin species, standing about 33 centimeters tall. The student wants to contrast the heights of the two species. Which choice most effectively uses relevant information from the notes to accomplish this goal?`,
            options: ['Emperor penguins stand about 1.1 meters tall, while little penguins stand about 33 centimeters.', 'Emperor penguins breed in Antarctica, while little penguins breed in Australia and New Zealand.', 'The little penguin is the smallest penguin species, standing about 33 centimeters tall.', 'Emperor penguins, the largest penguin species, breed during the Antarctic winter.'],
            correctAnswer: 0,
            explanation: `The contrast must cover both species on the named feature, height. Only the 1.1-meters-versus-33-centimeters sentence does. The breeding sentence contrasts the wrong feature, and the other two describe one species each.`
          }
        ]
      }
    },
    {
      id: 'ei6-dropdown',
      type: 'dropdown-select' as const,
      content: '**Comparison Check** — Select the correct answer.',
      exercise: {
        dropdowns: [
          '"Emphasize a similarity" requires [both items and a shared feature|one item described in detail|two unrelated facts|the largest number in the notes]',
          '"Whereas" signals a [difference|similarity|cause|example]',
          'For an audience unfamiliar with X, the sentence should [identify what X is|skip any definition|quote an expert|use every note]',
          'A contrast between two things must compare them on [the feature the goal names|any feature at all|the first note\'s topic|the most surprising fact]'
        ],
        correctAnswers: ['both items and a shared feature', 'difference', 'identify what X is', 'the feature the goal names'],
        hint1: 'A similarity is something two things have in common.',
        hint2: '"Whereas" sets two things against each other.',
        hint3: 'An unfamiliar reader does not know what X is yet.',
        explanation: 'A similarity needs both items and something they share. "Whereas" signals a difference. An unfamiliar audience needs X identified. A contrast must use the feature the goal names.'
      }
    },
    {
      id: 'ei6-summary',
      type: 'text' as const,
      content: `## Part 6 Summary

| Concept | Key Rule |
|---|---|
| Similarity | Both items + a shared feature |
| Difference / contrast | Both items + the feature the goal names |
| One-sided trap | Describes only one item |
| Wrong-feature trap | A real difference, but not the one asked for |
| Unfamiliar audience | Identify X |
| Familiar audience | Skip the basics; give something new |

*Next: Expression of Ideas — Mixed Timed Practice →*`    }
  ]
};
