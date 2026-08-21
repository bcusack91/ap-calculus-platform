export const lessonData = {
  topicSlug: 'sat-transitions-organization-core-skills',
  sections: [
    {
      id: 'trans-core-p1-intro',
      type: 'text' as const,
      content: `# Transitions: The Basics

**Part 1 of 2 — Name the Relationship**

A **transition** is a word or short phrase that connects two sentences. Words like *however*, *therefore*, and *for example* are transitions.

On the SAT, a transition question gives you two sentences with a blank between them. Your job is to figure out how the two sentences are related, then pick the word that names that relationship.

### The four relationships you need

**1. Adding** — the second sentence gives more of the same kind of information.
*also, in addition, additionally, furthermore, moreover*

> The museum is free on Sundays. **In addition,** it stays open late that day.

**2. Contrast** — the second sentence goes the opposite direction from the first.
*however, but, on the other hand, nevertheless, in contrast*

> Maya practiced every day. **However,** she did not make the team.

**3. Cause and effect** — the first sentence causes the second.
*therefore, so, as a result, consequently, thus*

> The road was covered in ice. **As a result,** the school canceled the bus route.

**4. Example** — the second sentence gives a specific case of the first.
*for example, for instance, specifically*

> Many birds migrate long distances. **For example,** arctic terns fly from pole to pole.

### The trick that works every time

**Cover the blank with your finger.** Do not look at the answer choices yet.

1. Read the sentence before the blank. Say what it means in your own words.
2. Read the sentence after the blank. Say what it means in your own words.
3. Ask one question: **same direction, or opposite direction?**

If the second sentence keeps going the same way, you need adding, cause/effect, or example. If it turns and goes the other way, you need contrast.

Only then look at the choices, and pick the one that matches the relationship you already named. The transition never changes what the sentences mean — it just labels how they connect.`
    },
    {
      id: 'trans-core-p1-q1',
      type: 'quiz' as const,
      question: 'The museum is free on Sundays. ______ it stays open two hours later that day.\n\nWhich choice completes the text with the most logical transition?',
      options: [
        'However,',
        'In addition,',
        'For example,',
        'Therefore,'
      ],
      correctAnswer: 1,
      explanation: '"In addition" is correct. The first sentence gives one good thing about Sundays (free admission), and the second gives another good thing (longer hours). The two sentences go in the same direction, and the second one adds more of the same kind of information, which is exactly what an adding transition signals. The other choices would announce a turn, a result, or a specific case, and none of those is happening here.'
    },
    {
      id: 'trans-core-p1-q2',
      type: 'quiz' as const,
      question: 'Maya practiced every single day. ______ she did not make the team.\n\nWhich choice completes the text with the most logical transition?',
      options: [
        'Therefore,',
        'In addition,',
        'For example,',
        'However,'
      ],
      correctAnswer: 3,
      explanation: '"However" is correct. The first sentence sets up something you would expect to lead to success, and the second sentence delivers the opposite outcome. That turn is a contrast, and "however" is a contrast transition. The other choices all keep the sentences going in the same direction, which does not match the surprise in the second sentence.'
    },
    {
      id: 'trans-core-p1-q3',
      type: 'quiz' as const,
      question: 'The road was covered in ice. ______ the school canceled the bus route.\n\nWhich choice completes the text with the most logical transition?',
      options: [
        'As a result,',
        'For example,',
        'However,',
        'Meanwhile,'
      ],
      correctAnswer: 0,
      explanation: '"As a result" is correct. The ice is the cause, and canceling the bus route is what happened because of it. A cause-and-effect transition names that connection. The other choices would signal a specific case, a turn in the opposite direction, or two things happening at the same time, and none of those describes ice leading to a cancellation.'
    },
    {
      id: 'trans-core-p1-q4',
      type: 'quiz' as const,
      question: 'Many birds travel thousands of miles each year. ______ arctic terns fly from the Arctic to Antarctica and back.\n\nWhich choice completes the text with the most logical transition?',
      options: [
        'However,',
        'Therefore,',
        'For example,',
        'In contrast,'
      ],
      correctAnswer: 2,
      explanation: '"For example" is correct. The first sentence makes a general statement about many birds, and the second names one specific bird that proves it. Moving from a general idea to one specific case calls for an example transition. The other choices would announce a turn or a result, and the second sentence does neither — it illustrates.'
    }
  ]
}
