export const englitSoundDevicesPart2Data = {
  topicSlug: 'englit-sound-devices',
  sections: [
    {
      id: 'englitso2-intro',
      type: 'text' as const,
      content: `
# 🎵 Sound Devices

**Part 2 of 7 — The Sound Toolkit: Consonance, Onomatopoeia, Internal Rhyme, Euphony and Cacophony**

---

| Section |
|---------|
| 🧰 Beyond Alliteration and Assonance |
| Sound, Not Spelling |
| The Sound Families |
| Euphony and Cacophony: Tennyson and Owen |
| Worked Example: Poe's "The Bells" |

> 🔑 **Key Concept:** Part 1 introduced alliteration, assonance and rhythm. This part fills out the toolkit. Every device below names a **pattern of sound**. A pattern earns a place in your analysis only when you can say how it supports what the words mean: the speaker's attitude, the mood, or a shift in the poem (skills **5.A** and **5.B**, word choice and its effect).
`
    },
    {
      id: 'englitso2-toolkit',
      type: 'text' as const,
      content: `
## 🧰 Beyond Alliteration and Assonance

| Device | Definition | Example |
|---|---|---|
| **Alliteration** (review) | Repeated **initial** consonant sounds in nearby words | "Marks of weakness, marks of woe" (Blake) |
| **Assonance** (review) | Repeated **vowel** sounds in nearby words | the long *o* in "cold gray stones, O Sea!" (Tennyson) |
| **Consonance** | Repeated consonant sounds **inside or at the ends** of nearby words | the *-ts* of "struts and frets" (Shakespeare) |
| **Sibilance** | Repeated hissing sounds (*s*, *sh*, *z*) | "And the silken sad uncertain rustling of each purple curtain" (Poe) |
| **Onomatopoeia** | A word whose sound imitates what it names | "rattle," "patter" (Owen); "tinkle" (Poe) |
| **Internal rhyme** | A rhyme inside a line, not only at the line's end | "The breezes blew, the white foam flew" (Coleridge) |
| **Euphony** | A passage of pleasant, smooth, flowing sound | "And murmuring of innumerable bees" (Tennyson) |
| **Cacophony** | A passage of harsh, jarring, clashing sound | "Only the stuttering rifles' rapid rattle" (Owen) |

### How the devices overlap

One line can carry several devices at once. Poe's line about the curtain is sibilant (*silken, sad, uncertain*), and its *s* sounds are also alliteration ("silken sad") and consonance ("uncertain," "rustling"). Do not spend exam time arguing about which label is "correct." Name the most precise label, then move on to **effect**: here the hiss of the *s* sounds imitates the whisper of a moving curtain in a silent room, and so it builds the speaker's nervous attention to every small noise.

## Sound, Not Spelling

All sound devices are about what the ear hears, not what the eye sees.

| Pair | Do they alliterate? | Why |
|---|---|---|
| "cellar" / "silver" | **Yes** | Both begin with an *s* sound, though the letters differ |
| "cellar" / "candle" | **No** | Same letter, but *c* sounds like *s* in one and *k* in the other |
| "knee" / "kettle" | **No** | The *k* in "knee" is silent; the first sound is *n* |
| "fickle" / "freckled" | **Yes** | Hopkins pairs them in "Pied Beauty": both start with *f*, and both carry a *k* sound in the middle |

> 💡 Read lines aloud, or at least "aloud in your head," on the exam. Your eyes will mislead you; your ear will not.
`
    },
    {
      id: 'englitso2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: `Which of the following lines relies chiefly on internal rhyme?`,
            options: [
              `"The breezes blew, the white foam flew"`,
              `"The moan of doves in immemorial elms"`,
              `"Only the stuttering rifles' rapid rattle"`,
              `"Marks of weakness, marks of woe"`
            ],
            correctAnswer: 0,
            explanation: `"Blew" and "flew" rhyme inside a single line of Coleridge's "Rime." Tennyson's line is built on nasal and liquid sounds, Owen's on alliteration and harsh consonants, and Blake's on alliteration and repetition, but none of those three has a rhyme within the line.`
          },
          {
            question: `Because sound devices depend on sound rather than spelling, which pair of words alliterates?`,
            options: [
              `"cellar" and "silver"`,
              `"circle" and "candle"`,
              `"knee" and "kettle"`,
              `"gnats" and "garden"`
            ],
            correctAnswer: 0,
            explanation: `"Cellar" and "silver" both open with an *s* sound even though the letters differ. "Circle" and "candle" share a letter but not a first sound, and the silent *k* in "knee" and silent *g* in "gnats" mean those words begin with an *n* sound.`
          }
        ]
      }
    },
    {
      id: 'englitso2-families',
      type: 'text' as const,
      content: `
## The Sound Families

Consonants and vowels fall into families according to how the mouth makes them. The family often hints at an effect.

| Family | Sounds | How the mouth makes them | Effects they often support |
|---|---|---|---|
| **Plosives** (stops) | *p, b, t, d, k,* hard *g* | Air is stopped, then released in a small burst | Force, abruptness, violence, percussion |
| **Sibilants** | *s, z, sh, zh* | Air hisses through a narrow gap | Whisper and hush, or menace (a hiss) |
| **Other fricatives** | *f, v, th, h* | Breath is pushed through a gap | Breath, wind, softness |
| **Liquids** | *l, r* | Air flows around the tongue | Flow, smoothness, music |
| **Nasals** | *m, n, ng* | Air hums through the nose | Humming, drowsiness, resonance, mourning |
| **Long or open vowels** | as in *moan, gray, cold, roar* | The vowel can be held | Slowness, solemnity, lament |
| **Short or clipped vowels** | as in *tick, bit, flick* | The vowel is cut off quickly | Quickness, lightness, smallness |

> ⚠️ **The table is a set of tendencies, not a code.** A sibilant can soothe (a mother's "hush") or threaten (a snake's hiss). The words around a sound tell you which. Always start from the **sense** of the line and ask how the sound supports it, never the other way round.

## Euphony and Cacophony: Tennyson and Owen

> Myriads of rivulets hurrying through the lawn,
> The moan of doves in immemorial elms,
> And murmuring of innumerable bees.
>
> — Alfred, Lord Tennyson, *The Princess*, 1847

Count the *m* and *n* sounds: "moan," "immemorial," "elms," "murmuring," "innumerable." Add the liquids (*l* and *r*) and the long *o* of "moan." There is hardly a plosive in the last two lines. The result is **euphony**: a soft, continuous hum that sounds like the drowsy valley it describes. "Murmuring" is also onomatopoeia, so the bees are heard as well as seen.

> What passing-bells for these who die as cattle?
> Only the monstrous anger of the guns.
> Only the stuttering rifles' rapid rattle
> Can patter out their hasty orisons.
>
> — Wilfred Owen, "Anthem for Doomed Youth," written 1917, published 1920

Owen's third line is **cacophony**: *t* sounds in "stuttering," "rattle" and "patter" fire like rounds, and the *r* alliteration ("rifles' rapid rattle") keeps the burst going. "Stuttering," "rattle" and "patter" are all onomatopoeic. "Orisons" are prayers, so the only prayers these soldiers get are gunfire. Owen's sound **is** his argument: the noise of the front replaces the quiet rituals of a funeral.
`
    },
    {
      id: 'englitso2-input',
      type: 'input-boxes' as const,
      content: `
**Name the Device** ✍️

Type one standard term for each description.
      `,
      exercise: {
        questions: [
          {
            question: `A word whose sound imitates what it names, like Owen's "rattle" or Poe's "tinkle"`,
            answer: 'onomatopoeia',
            acceptableAnswers: ['onomatopoeic', 'onomatopoetic']
          },
          {
            question: `A passage of harsh, jarring sound, often built from clustered plosives`,
            answer: 'cacophony',
            acceptableAnswers: ['cacophonous']
          },
          {
            question: `Repeated consonant sounds inside or at the ends of nearby words, as in "struts and frets"`,
            answer: 'consonance',
            acceptableAnswers: ['consonant repetition']
          }
        ],
        hint1: 'From Greek words meaning "name-making."',
        hint2: 'The opposite of euphony.',
        hint3: 'Not alliteration: the repeated sounds are not at the start of the words.',
        explanation: 'Onomatopoeia imitates a sound in the word itself; cacophony is harsh, clashing sound; consonance repeats consonants inside or at the ends of words, while alliteration repeats them at the start.'
      }
    },
    {
      id: 'englitso2-bells',
      type: 'text' as const,
      content: `
## Worked Example: Poe's "The Bells"

"The Bells" has four sections, each for a different kind of bell. Poe changes the **sound family** with each one, so the poem works almost like a lesson in this table.

> Hear the sledges with the bells—
> Silver bells!
> What a world of merriment their melody foretells!
> How they tinkle, tinkle, tinkle,
> In the icy air of night!
>
> — Edgar Allan Poe, "The Bells," 1849

**Section I (sleigh bells):** short, clipped *i* sounds ("tinkle," "icy," "twinkle," "crystalline") and light *t* and *k* sounds. Onomatopoeia ("tinkle," "jingling") makes the bells small and bright. Poe also uses "tintinnabulation," a rare Latin-derived word for the ringing of bells that rings in its own syllables.

> Hear the mellow wedding-bells
> Golden bells!
> What a world of happiness their harmony foretells!

**Section II (wedding bells):** "mellow," "golden," "molten golden-notes," "liquid ditty." The long *o* and the liquids *l* and *r* slow and warm the sound.

> Hear the loud alarum bells—
> Brazen bells!
> What a tale of terror now their turbulency tells!

**Section III (fire alarm bells):** the bells "scream" and "shriek." Plosives and harsh clusters take over: "How they clang, and clash, and roar!" and "In the clamour and the clangour of the bells!" This is cacophony.

**Section IV (funeral bells):** "Iron bells!" and "the tolling of the bells." The long, heavy vowels of "tolling," "solemn" and "monody" (a poem of mourning) toll like a bell.

### From noticing to meaning

| Weak (sound-spotting) | Strong (sound plus sense) |
|---|---|
| "Poe uses onomatopoeia and alliteration." | "Poe moves from the bright, clipped *i* sounds of the sleigh bells to the heavy, tolling vowels of the funeral bells, so the poem's sound ages with it, from childhood merriment to death." |

> 🔑 **AP Connection:** Section I questions rarely ask you to name a device in isolation. They ask what a sound pattern "emphasizes," "suggests" or "contributes to." Find the answer that ties the sound to the **meaning** of those exact lines.
`
    },
    {
      id: 'englitso2-quiz2',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Practice** 🎯
      `,
      exercise: {
        questions: [
          {
            question: `In context, the repeated words "tinkle, tinkle, tinkle" in the first section of "The Bells" primarily serve to`,
            options: [
              `imitate the light, bright ringing of the sledges`,
              `warn the riders of some danger on the road ahead`,
              `slow the poem down before its wedding section begins`,
              `mock the merriment that the speaker claims to hear`
            ],
            correctAnswer: 0,
            explanation: `"Tinkle" is onomatopoeic, and its short, clipped vowel suits small, bright sleigh bells "In the icy air of night." Danger arrives only with the alarm bells of Section III, the repetition quickens rather than slows, and the merriment is not mocked.`
          },
          {
            question: `Which of the following best describes the change in sound from the wedding bells of Section II to the alarm bells of Section III?`,
            options: [
              `from mellow, liquid tones to harsh and clashing ones`,
              `from loud, clanging noise to softer, muted tones`,
              `from rhymed lines to unrhymed, prose-like lines`,
              `from varied sounds to one long repeated vowel`
            ],
            correctAnswer: 0,
            explanation: `The wedding bells are "mellow" and "golden," full of liquids and long vowels, while the alarm bells "scream," "shriek," "clang, and clash." The change runs from soft to harsh, not the reverse, and both sections keep rhyming.`
          },
          {
            question: `Tennyson's lines "The moan of doves in immemorial elms, / And murmuring of innumerable bees" chiefly create a sense of`,
            options: [
              `a drowsy, humming calm in the warm valley`,
              `rising alarm as a storm draws near the valley`,
              `harsh mechanical noise that disturbs the scene`,
              `playful speed, like children running in a field`
            ],
            correctAnswer: 0,
            explanation: `The nasal *m* and *n* sounds, the liquids and the long *o* of "moan" make a soft, continuous hum, which is euphony. The lines contain almost no plosives, so nothing in them is harsh, alarming or quick.`
          }
        ]
      }
    }
  ]
}
