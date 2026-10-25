export const asvabWkWordPartsPart3Data = {
  topicSlug: 'asvab-wk-word-parts',
  sections: [
    {
      id: 'wkwp-p3-intro',
      type: 'text' as const,
      content: `# 🔤 Roots, Prefixes and Suffixes

**Part 3 of 7 — Latin Roots**

### The Core of the Word

The root carries the main meaning. Latin roots are the backbone of formal English, the kind of words that show up in regulations, news reports and the ASVAB. Here are the families worth knowing cold:

| Root | Meaning | Family |
|:---|:---|:---|
| **port** | carry | transport, portable, export, deport |
| **dict** | say, speak | predict, verdict, dictate, contradict |
| **spect, spic** | look, see | inspect, spectator, spectacle, conspicuous |
| **scrib, script** | write | describe, manuscript, prescription, inscribe |
| **duc, duct** | lead | conduct, deduce, abduct, induct |
| **ject** | throw | eject, reject, project, inject |
| **rupt** | break | erupt, rupture, disrupt, bankrupt |
| **vert, vers** | turn | reverse, convert, divert, invert |
| **ced, cede, cess** | go, yield | precede, recede, concede, recess |
| **mit, miss** | send | transmit, emit, dismiss, missile |
| **tract** | pull, drag | tractor, traction, distract, extract |
| **voc, vok** | call, voice | vocal, revoke, advocate, evoke |
| **cred** | believe | credit, credible, incredible |
| **fid** | trust, faith | confide, confident, fidelity |
| **aud** | hear | audio, audience, audible |
| **vid, vis** | see | video, visible, revise, vision |
| **bene / mal** | good / bad | benefit, beneficial / malfunction, malnourished |

> **Key Fact:** You already know at least one word in almost every family: **tractor** (pulls), **eject** (throws out), **erupt** (breaks out). Use the word you know to unlock the word you don't.`
    },
    {
      id: 'wkwp-p3-examples',
      type: 'text' as const,
      content: `## Worked Examples

### Example 1: retrospect

- **Split:** retro + spect.
- **Translate:** back + look.
- **So:** **retrospect** is looking back on the past. "In retrospect, we should have left earlier" means *looking back now*.

### Example 2: interject

- **Split:** inter + ject.
- **Translate:** between + throw.
- **So:** to **interject** is to throw a remark in between, to interrupt with a comment. "During the briefing, the pilot interjected a question about fuel."

### Example 3: abrupt

- **Split:** ab + rupt.
- **Translate:** away + break.
- **So:** **abrupt** means breaking off suddenly: an abrupt stop, an abrupt change in the weather. A choice like *sudden* fits; *gradual* is the opposite trap.

### Combine Prefix and Root

The real power comes from stacking what you learned in Part 2 with what you learn here:

| Word | Prefix | Root | Rough meaning |
|:---|:---|:---|:---|
| **ex**tract | out | pull | pull out |
| **re**ject | back | throw | throw back, refuse |
| **pre**cede | before | go | go before |
| **trans**mit | across | send | send across |
| **contra**dict | against | say | say the opposite |`
    },
    {
      id: 'wkwp-p3-mc',
      type: 'multiple-choice' as const,
      content: '**Use the root.** 🎯 Pick the choice closest in meaning to the bold word.',
      exercise: {
        questions: [
          {
            question: `When Nguyen told the squad he had once met the president, they were **incredulous** until he showed them the photo.\n\n**Incredulous** most nearly means`,
            options: ['jealous', 'amused', 'impressed', 'doubtful'],
            correctAnswer: 3,
            explanation: 'In- (not) + cred (believe) + -ulous: not believing. The squad doubted him until they saw proof, so incredulous means doubtful. Impressed is how they might feel after seeing the photo, not before.'
          },
          {
            question: '**Versatile** most nearly means',
            options: ['adaptable', 'reliable', 'talkative', 'expensive'],
            correctAnswer: 0,
            explanation: 'Vers means turn: something versatile can turn easily from one use to another. A versatile tool or a versatile player is adaptable. Reliable is a good quality too, but it means dependable, not able to do many things.'
          },
          {
            question: `As the tide began to **recede**, the crew could see the rocks they had been warned about.\n\n**Recede** most nearly means`,
            options: ['crash', 'withdraw', 'freeze', 'rise'],
            correctAnswer: 1,
            explanation: 'Re- (back) + cede (go): to go back. A receding tide pulls back and uncovers the rocks. Rise is the opposite direction.'
          },
          {
            question: `The radio signal was **intermittent**, cutting in and out every few seconds.\n\n**Intermittent** most nearly means`,
            options: ['powerful', 'on and off', 'very loud', 'encrypted'],
            correctAnswer: 1,
            explanation: 'Inter- (between) + mit (send): sent with gaps in between. "Cutting in and out" confirms it: intermittent means on and off, not continuous.'
          },
          {
            question: '**Revoke** most nearly means',
            options: ['awaken', 'approve', 'cancel', 'repeat'],
            correctAnswer: 2,
            explanation: 'Re- (back) + voke (call): to call back. When a license or a pass is revoked, it is called back, that is, canceled. Approve is the opposite, and awaken plays on the look-alike "evoke" and "wake."'
          }
        ]
      }
    },
    {
      id: 'wkwp-p3-dropdown',
      type: 'dropdown-select' as const,
      content: `**Root to meaning.** 🔽

**Sentence A.** The clerk will **transcribe** the recorded interview so that the investigators have a written copy.

**Sentence B.** In the training scenario, the role players tried to **abduct** the convoy's interpreter.`,
      exercise: {
        dropdowns: [
          {
            label: 'The root **scrib** in transcribe means:',
            options: ['carry', 'listen', 'write', 'speak'],
            correctAnswer: 2
          },
          {
            label: 'So **transcribe** most nearly means:',
            options: ['summarize', 'write out', 'translate', 'play back'],
            correctAnswer: 1
          },
          {
            label: 'In **abduct** (ab + duct: away + lead), the word most nearly means:',
            options: ['follow', 'kidnap', 'question', 'protect'],
            correctAnswer: 1
          }
        ],
        correctAnswers: ['write', 'write out', 'kidnap'],
        hint1: 'Think of script and scribble.',
        hint2: 'The goal is "a written copy" of a recording.',
        hint3: 'To lead someone away against their will is to...',
        explanation: 'Scrib means write, so to transcribe (trans + scrib: across + write) is to write out spoken words in full. Summarize would shorten them, which the sentence does not say. Abduct is ab (away) + duct (lead): to lead someone away by force, that is, to kidnap.'
      }
    },
    {
      id: 'wkwp-p3-input',
      type: 'input-boxes' as const,
      content: `**Find the shared root.** ✍️ Type the root exactly as it appears in all three words.

**1)** predict · verdict · dictate

**2)** traction · distract · extract`,
      exercise: {
        boxes: 2,
        correctAnswers: ['dict', 'tract'],
        hint1: 'Which four letters appear in all three words in line 1?',
        hint2: 'Which five letters appear in all three words in line 2?',
        hint3: 'One root means say; the other means pull.',
        explanation: 'Line 1 shares dict (say): to predict is to say beforehand, a verdict is a jury\'s true saying, and to dictate is to say aloud for someone to write. Line 2 shares tract (pull): traction is grip that lets wheels pull, to distract is to pull attention away, and to extract is to pull out.'
      }
    },
    {
      id: 'wkwp-p3-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 3

- Latin roots carry the core meaning: **port** carry, **dict** say, **spect** look, **scrib/script** write, **duc/duct** lead, **ject** throw, **rupt** break, **vert/vers** turn, **ced/cess** go, **mit/miss** send, **tract** pull, **voc/vok** call, **cred** believe, **fid** trust, **aud** hear, **vid/vis** see, **bene/mal** good/bad
- Use a word you already know (tractor, eject, erupt) to unlock the family
- **Stack** prefix + root: ex + tract = pull out; re + cede = go back

> **Up Next:** Part 4 — Greek roots and the number parts that tell you how many.`
    }
  ]
};
