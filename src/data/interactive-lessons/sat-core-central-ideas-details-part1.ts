export const lessonData = {
  topicSlug: 'sat-central-ideas-details-core-skills',
  sections: [
    {
      id: 'central-core-p1-intro',
      type: 'text' as const,
      content: `# Central Ideas: The Basics

**Part 1 of 2 — One Skill, One Idea**

Two question types show up over and over on the reading section:

- **Central idea** — "What is this whole paragraph about?"
- **Detail** — "What does the passage say about one specific thing?"

They sound similar, but they ask for opposite-sized answers. Knowing which one you are on is most of the work.

### Central idea = the roof over every sentence

The central idea has to cover the **whole** paragraph, not one sentence of it. Picture a roof: it has to sit over every room in the house.

A very common wrong answer is a sentence that is **true but too small** — it covers one room. If a choice only matches one line of the passage, it is a detail, not the central idea.

### Detail = go find the exact line

For a detail question, the answer is written in the passage. You are not deciding anything. You are locating a line. Wrong choices for detail questions are usually true in real life but never appear in the text.

### Worked example

> Honeybees share the location of food using a "waggle dance." How long the bee waggles tells other bees how far away the food is. The angle of the dance tells them which direction to fly. Other bees watch, then fly straight to the food.

**Central idea?** Every sentence is about bees using a dance to tell other bees where food is. So: *honeybees use a dance to communicate the location of food.* That is the roof.

**Detail: what does the length of the waggle tell other bees?** Go find the line. Sentence two: **distance**. Done — no thinking required beyond locating it.

Notice that "the angle tells them direction" is true, but as a *central idea* it is too small. It covers one room.`
    },
    {
      id: 'central-core-p1-q1',
      type: 'quiz' as const,
      question: `Read the passage:

"Sea otters eat enormous numbers of sea urchins. Where otters are common, urchin populations stay small and kelp forests grow thick and tall. Where otters have disappeared, urchins multiply and chew the kelp down to bare rock. Protecting otters, then, protects the whole kelp forest."

What is the central idea of this passage?`,
      options: [
        `Sea urchins live on rocky ocean floors.`,
        `Kelp can grow very tall in cold water.`,
        `Sea otters keep urchin numbers down, which allows kelp forests to survive.`,
        `Sea otters are one of the smallest marine mammals.`
      ],
      correctAnswer: 2,
      explanation: `The central idea has to cover every sentence. Each sentence here connects otters to urchins to kelp, and the last sentence states the point directly: protecting otters protects the forest. The choice about otters keeping urchin numbers down so kelp survives is the only one that covers the whole chain. The other three are either small side facts or things the passage never says at all.`
    },
    {
      id: 'central-core-p1-q2',
      type: 'quiz' as const,
      question: `Read the passage:

"Sea otters eat enormous numbers of sea urchins. Where otters are common, urchin populations stay small and kelp forests grow thick and tall. Where otters have disappeared, urchins multiply and chew the kelp down to bare rock. Protecting otters, then, protects the whole kelp forest."

According to the passage, what happens to kelp in places where otters have disappeared?`,
      options: [
        `Urchins multiply and eat the kelp down to bare rock.`,
        `The kelp grows thicker and taller than before.`,
        `Fishing boats remove the kelp for processing.`,
        `The kelp becomes food for otters instead of urchins.`
      ],
      correctAnswer: 0,
      explanation: `This is a detail question, so the answer is written in the passage. Sentence three says that where otters are gone, urchins multiply and chew the kelp down to bare rock, which is exactly the first choice. The choice about kelp growing thicker describes what happens when otters ARE present, not when they are gone.`
    },
    {
      id: 'central-core-p1-q3',
      type: 'quiz' as const,
      question: `Read the passage:

"Public libraries today lend far more than books. Many branches now check out hand tools, sewing machines, museum passes, and even musical instruments. Some run free coding classes and offer quiet rooms for job interviews. For many neighborhoods, the library has become a general-purpose community center."

What is the central idea of this passage?`,
      options: [
        `Some libraries lend musical instruments.`,
        `Coding classes are popular with teenagers.`,
        `Libraries should charge fees for their services.`,
        `Libraries have expanded beyond books into broad community services.`
      ],
      correctAnswer: 3,
      explanation: `Look for the roof that covers every sentence. The passage lists tools, sewing machines, passes, instruments, classes, and interview rooms, then names the pattern: the library has become a community center. The choice about libraries expanding beyond books into broad community services covers all of that. The instrument choice is true but too small — it covers one item from one list.`
    },
    {
      id: 'central-core-p1-q4',
      type: 'quiz' as const,
      question: `A question asks, "According to the passage, in what year was the observatory built?" What kind of question is this, and where does the answer come from?`,
      options: [
        `A central idea question; the answer is the general point of the passage.`,
        `A detail question; the answer is stated somewhere in the passage.`,
        `An inference question; the answer must be guessed from outside knowledge.`,
        `A tone question; the answer depends on how the author feels.`
      ],
      correctAnswer: 1,
      explanation: `The phrase "according to the passage" plus a specific fact — a year — makes this a detail question, and the answer will be written somewhere in the text. Your job is to locate the line, not to reason your way to it. It is not a central idea question, because a single build date could never be the point of a whole passage.`
    }
  ]
}
