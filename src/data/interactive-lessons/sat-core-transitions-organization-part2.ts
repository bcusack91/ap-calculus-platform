export const lessonData = {
  topicSlug: 'sat-transitions-organization-core-skills',
  sections: [
    {
      id: 'trans-core-p2-recap',
      type: 'text' as const,
      content: `# Transitions: Practice

**Part 2 of 2 — Two More Families, Plus Look-Alikes**

Part 1 covered adding, contrast, cause/effect, and example. Two more groups show up often.

**5. Sequence** — puts steps in order.
*first, next, then, later, finally, subsequently*

**6. Summing up** — wraps up several points that came before.
*in short, in sum, ultimately, all things considered*

### Look-alike families

Many wrong choices are close relatives of the right one. Two pairs cause most mistakes.

**Example or adding?** Ask: is the second sentence **one case** of what the first sentence said?

> Many everyday products were invented by accident. **For example,** the microwave oven was developed after a radar machine melted a candy bar in an engineer's pocket.

The microwave is one case of "invented by accident," so this is an example.

> The town library lends books. **In addition,** it lends laptops and tablets.

Laptops are not a case of "lends books." They are a **new, separate point** of the same kind, so this is adding.

**Result or summing up?** A cause/effect word (*therefore, as a result*) says the first sentence **made the second one happen**. A summing-up word (*in short, ultimately*) **pulls together several points** that came before into one final statement.

### Your checklist for transitions

1. Cover the blank and the answer choices.
2. Say the sentence before the blank in your own words.
3. Say the sentence after the blank in your own words.
4. Same direction, or opposite?
5. Same direction → adding, cause/effect, example, sequence, or summing up. Opposite → contrast.
6. Now look at the choices and pick the one that matches.

### Your checklist for look-alikes

1. Example or adding? → Is the second sentence one case of the first? If yes, example.
2. Result or summing up? → Did the first sentence cause the second, or does the second pull several points together?`
    },
    {
      id: 'trans-core-p2-q1',
      type: 'quiz' as const,
      question: 'Which set contains contrast transitions?',
      options: [
        'first, next, then, after that, finally',
        'therefore, so, as a result, consequently',
        'for example, for instance, to illustrate',
        'however, on the other hand, nevertheless'
      ],
      correctAnswer: 3,
      explanation: '"However, on the other hand, nevertheless" are contrast transitions. Each one signals that the next sentence turns and goes the opposite direction from the one before it. The other three sets are real transition families with different jobs: putting things in order, showing a result, and giving a specific case.'
    },
    {
      id: 'trans-core-p2-q2',
      type: 'quiz' as const,
      question: '______ the campers gathered firewood. Next, they cleared a flat space for the tent.\n\nWhich choice completes the text with the most logical transition?',
      options: [
        'Therefore,',
        'First,',
        'Still,',
        'For example,'
      ],
      correctAnswer: 1,
      explanation: '"First" is correct. The second sentence begins with "Next," which tells you these sentences are steps in an order. A step that comes before "Next" is the first step, so a sequence transition is what belongs in the blank. The other choices would signal a result, a turn, or an example, and none of them fits a list of steps.'
    },
    {
      id: 'trans-core-p2-q3',
      type: 'quiz' as const,
      question: 'Mia\'s garden gave her tomatoes in June, peppers in July, and squash all through August. ______ her small backyard plot fed her family for the whole summer.\n\nWhich choice completes the text with the most logical transition?',
      options: [
        'Meanwhile,',
        'For instance,',
        'In short,',
        'Even so,'
      ],
      correctAnswer: 2,
      explanation: '"In short" is correct. The first sentence lists what the garden produced month by month, and the second sentence pulls those points together into one final statement: the garden fed the family all summer. That is the job of a summing-up transition. "Meanwhile" would mean something else was happening at the same time, "For instance" would introduce one case of an earlier claim, and "Even so" would mean the second sentence holds true despite the first, but the second sentence follows naturally from the first.'
    },
    {
      id: 'trans-core-p2-q4',
      type: 'quiz' as const,
      question: 'Some birds can recognize individual human faces. ______ crows in one study scolded the researchers who had once trapped them, even years later, while ignoring other people.\n\nWhich choice completes the text with the most logical transition?',
      options: [
        'In addition,',
        'However,',
        'For example,',
        'As a result,'
      ],
      correctAnswer: 2,
      explanation: '"For example" is correct. The first sentence makes a general claim: some birds can recognize human faces. The crows picking out the exact researchers who trapped them are one case of that claim, which is what "For example" signals. "In addition" is the look-alike trap: it would fit only if the second sentence made a new, separate point, but this sentence illustrates the first one. "However" would signal a turn, and the crows agree with the claim. "As a result" would mean the first sentence caused the crows\' behavior, and a general claim cannot cause anything.'
    }
  ]
}
