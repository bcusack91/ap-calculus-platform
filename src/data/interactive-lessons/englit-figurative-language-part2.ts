export const englitFigurativeLanguagePart2Data = {
  topicSlug: 'englit-figurative-language',
  sections: [
    {
      id: 'englitfi2-intro',
      type: 'text' as const,
      content: `
# 🪞 Figurative Language

**Part 2 of 7 — Imagery in Depth: Senses, Synesthesia and Image Patterns**

---

| Section |
|---------|
| 📖 Seven Kinds of Imagery |
| Keats in the Dark: When Sight Fails |
| Synesthesia: When the Senses Cross |
| Image Patterns: The Cold of St. Agnes' Eve |
| Writing About Imagery |

> 🔑 **Key Concept:** Skill **5.D** asks you to identify and explain the function of an image or imagery. Part 1 defined imagery as sensory detail. This part goes further: imagery appeals to seven kinds of sensation, not just sight; images can deliberately cross the senses; and the images in a poem rarely work alone. They form **clusters** and **patterns** that change as the poem moves, and the change is often where the meaning is.
`
    },
    {
      id: 'englitfi2-kinds',
      type: 'text' as const,
      content: `
## 📖 Seven Kinds of Imagery

An **image** is any word or phrase that makes a reader experience something through a sense. Most students look only for pictures. Exam passages reward the student who also hears, smells, tastes and feels them. Every example below comes from John Keats's 1820 volume.

| Kind | Sense it appeals to | Example from Keats |
|---|---|---|
| **Visual** | Sight: color, light, shape | "With beaded bubbles winking at the brim" (wine in a cup) |
| **Auditory** | Hearing | "The murmurous haunt of flies on summer eves" |
| **Olfactory** | Smell | "Nor what soft incense hangs upon the boughs" |
| **Gustatory** | Taste | "With jellies soother than the creamy curd" |
| **Tactile** | Touch, texture and temperature | "St. Agnes' Eve—Ah, bitter chill it was!" |
| **Kinesthetic** | Movement and muscular effort | "The hare limp'd trembling through the frozen grass" |
| **Organic** | Sensations inside the body: ache, hunger, fatigue, numbness | "My heart aches, and a drowsy numbness pains / My sense" |

Some textbooks list temperature separately as **thermal** imagery, and some call kinesthetic imagery **motor** imagery. The labels matter less than the habit of asking, for every image, *which sense is this working on, and why that one?*

### Images Rarely Use One Sense

"The hare limp'd trembling through the frozen grass" is kinesthetic (limping, trembling), tactile (frozen) and visual (the grass) at once. When you write about an image, name the sense that carries the **effect** you are arguing for. Here it is the motion: a wild animal that should be quick can barely move, so the cold seems strong enough to cripple.
`
    },
    {
      id: 'englitfi2-nightingale',
      type: 'text' as const,
      content: `
## Keats in the Dark: When Sight Fails

In "Ode to a Nightingale," the speaker has tried to follow the bird's song into the forest. By the fifth stanza he is standing in a darkness so thick that he cannot see:

> I cannot see what flowers are at my feet,
> Nor what soft incense hangs upon the boughs,
> But, in embalmed darkness, guess each sweet
> Wherewith the seasonable month endows
> The grass, the thicket, and the fruit-tree wild;
> White hawthorn, and the pastoral eglantine;
> Fast fading violets cover'd up in leaves;
> And mid-May's eldest child,
> The coming musk-rose, full of dewy wine,
> The murmurous haunt of flies on summer eves.
>
> — John Keats, "Ode to a Nightingale," written 1819, collected in *Lamia, Isabella, The Eve of St. Agnes, and Other Poems*, 1820

### A Worked Reading

| Detail | Kind of imagery | What it does |
|---|---|---|
| "I cannot see" | Visual, denied | Shuts off the sense poems usually rely on, so the others take over |
| "soft incense hangs upon the boughs" | Olfactory, with a touch of the tactile ("soft") | Scent becomes almost solid, as if it can hang like fruit |
| "embalmed darkness" | Olfactory and visual | "Embalmed" means filled with balm, or fragrant; it also names what is done to a corpse |
| "guess each sweet" | Inference instead of sight | The speaker builds the scene from smell and memory, not observation |
| "Fast fading violets" / "The coming musk-rose" | Visual, and a pattern of time | Flowers that are dying sit beside a flower still to come |
| "The murmurous haunt of flies" | Auditory | The stanza ends on a drowsy sound, the hum of a summer evening |

**Why it matters.** The speaker wanted to "fade away into the forest dim," and here he has nearly done it: he is in a world of scent and sound with no sight at all. But the imagery quietly carries death with it. The darkness is "embalmed," the violets are "Fast fading," and in the very next stanza he admits he has been "half in love with easeful Death." The richness of the senses and the pull toward dying arrive together.
`
    },
    {
      id: 'englitfi2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: `In context, the speaker's admission "I cannot see what flowers are at my feet" primarily serves to`,
            options: [
              `move the stanza's imagery away from sight and toward scent and inference`,
              `reveal that the speaker has lost all interest in the natural world`,
              `contrast the dark forest with a brightly moonlit sky`,
              `suggest that the flowers were destroyed by an early frost`
            ],
            correctAnswer: 0,
            explanation: `With sight shut off, the stanza is built from "soft incense," guessed "sweet" scents and the hum of flies. The speaker is more absorbed in nature than ever, the stanza says nothing of moonlight in the sky, and no frost appears in this May night.`
          },
          {
            question: `The phrase "embalmed darkness" is best described as`,
            options: [
              `a sound image of the nightingale singing in the dark`,
              `a fragrant image that also carries a hint of death`,
              `a purely visual image of the shadowy forest at night`,
              `a touch image of the cold, damp air of the night forest`
            ],
            correctAnswer: 1,
            explanation: `"Embalmed" means perfumed with balm, so the darkness is full of scent, but the word also names the preserving of a corpse. That double sense anticipates the next stanza's "easeful Death." The phrase is not about sound, sight alone or chill.`
          },
          {
            question: `Placing "Fast fading violets" in the same stanza as "The coming musk-rose" chiefly emphasizes that`,
            options: [
              `the speaker prefers roses to violets`,
              `the scene is far too dark for the speaker to tell one flower from another`,
              `beauty in the scene is passing even as new beauty arrives`,
              `spring flowers are less fragrant than summer ones`
            ],
            correctAnswer: 2,
            explanation: `One flower is dying and another is still to come, so the catalogue holds the passage of time inside a single moment. The poem states no preference, the speaker names the flowers precisely despite the dark, and the stanza never ranks their scents.`
          }
        ]
      }
    },
    {
      id: 'englitfi2-synesthesia',
      type: 'text' as const,
      content: `
## Synesthesia: When the Senses Cross

**Synesthesia** is a figure in which one sense is described in terms of another: a color is heard, a sound is tasted, a feeling has a shape. Everyday speech is full of worn-out examples ("a loud shirt," "a warm voice," "a sharp taste"). Poets use it deliberately, usually at moments when ordinary perception is breaking down or being overwhelmed.

### Keats's Wine

In the ode's second stanza the speaker longs for a drink that will let him escape:

> O, for a draught of vintage! that hath been
> Cool'd a long age in the deep-delved earth,
> Tasting of Flora and the country green,
> Dance, and Provençal song, and sunburnt mirth!
>
> — John Keats, "Ode to a Nightingale"

Read the grammar closely: the wine is "Tasting of" a goddess of flowers, of a color ("the country green"), of a movement ("Dance"), of music ("Provençal song") and of a feeling ("sunburnt mirth"). Taste swallows sight, motion, sound and emotion. **Function:** a single sip promises the whole of a warm southern summer. The synesthesia makes the wine a kind of total experience, which is exactly what this speaker, desperate to "leave the world unseen," wants.

### Dickinson's Fly

> With blue, uncertain, stumbling buzz,
> Between the light and me;
>
> — Emily Dickinson, "I heard a fly buzz when I died," *Poems, Third Series*, 1896

A buzz is a sound, yet it is "blue" (a color) and "stumbling" (a movement). The speaker is dying, and her senses are failing and blurring together, so the synesthesia enacts the confusion of the deathbed.

| Synesthetic phrase | Senses crossed | Effect |
|---|---|---|
| "Tasting of ... song" | Taste and sound | Pleasure so complete it overflows its sense |
| "embalmed darkness" | Smell and sight | The dark becomes something you breathe |
| "blue, uncertain, stumbling buzz" | Sound, sight and motion | Perception breaking down at death |

> 💡 Synesthesia is a strong exam observation only when you say what the crossing *does*. "Keats uses synesthesia" earns nothing; "the wine's taste absorbs song and dance, so drinking promises escape into a whole lost world" is commentary.
`
    },
    {
      id: 'englitfi2-input',
      type: 'input-boxes' as const,
      content: `
**Name the Term** ✍️

Type one standard term for each description.
      `,
      exercise: {
        questions: [
          {
            question: `Imagery that appeals to the sense of smell, like Keats's "soft incense hangs upon the boughs"`,
            answer: 'olfactory',
            acceptableAnswers: ['olfactory imagery', 'olfactory image']
          },
          {
            question: `A figure in which one sense is described in terms of another, like a "blue" buzz`,
            answer: 'synesthesia',
            acceptableAnswers: ['synaesthesia', 'synesthetic imagery']
          },
          {
            question: `Imagery of movement or muscular effort, like a hare that "limp'd trembling" through grass`,
            answer: 'kinesthetic',
            acceptableAnswers: ['kinesthetic imagery', 'kinaesthetic', 'motor', 'motor imagery']
          }
        ],
        hint1: 'The same root appears in "olfaction," the scientific word for the sense of smell.',
        hint2: 'From Greek roots meaning "perceiving together."',
        hint3: 'The same root gives us "kinetic" energy, the energy of motion.',
        explanation: 'Olfactory imagery appeals to smell, synesthesia crosses one sense with another, and kinesthetic imagery conveys movement and bodily effort.'
      }
    },
    {
      id: 'englitfi2-patterns',
      type: 'text' as const,
      content: `
## Image Patterns: The Cold of St. Agnes' Eve

An **image cluster** is a group of related images close together (several cold images in one stanza). An **image pattern** is a set of related images that recurs across a whole work and usually changes as it goes. Tracking a pattern is one of the most reliable ways to find a line of reasoning for an essay, because the change in the pattern often *is* the poem's argument.

### The Opening Cluster

> St. Agnes' Eve—Ah, bitter chill it was!
> The owl, for all his feathers, was a-cold;
> The hare limp'd trembling through the frozen grass,
> And silent was the flock in woolly fold:
> Numb were the Beadsman's fingers, while he told
> His rosary, and while his frosted breath,
> Like pious incense from a censer old,
> Seem'd taking flight for heaven, without a death,
> Past the sweet Virgin's picture, while his prayer he saith.
>
> — John Keats, "The Eve of St. Agnes," written 1819, published 1820

Every creature is defeated by cold: the owl despite "his feathers," the hare, the sheep, and finally an old man (a Beadsman, paid to pray for others) whose fingers are "Numb" on his rosary. The cluster narrows from animals to a human being, and the cold becomes linked with age, prayer and the "sculptur'd dead" of the chapel he walks past in the next stanza.

### How the Pattern Moves

The poem then enters a castle full of light and music, where Porphyro secretly visits Madeline on the night when, by legend, a girl may dream of her future lover. The imagery turns warm, colored and rich. A stained-glass window "blush'd with blood of queens and kings," and Porphyro lays out a feast:

> Of candied apple, quince, and plum, and gourd
> With jellies soother than the creamy curd,
> And lucent syrops, tinct with cinnamon;
> Manna and dates, in argosy transferr'd
> From Fez; and spiced dainties, every one,
> From silken Samarcand to cedar'd Lebanon.

Then the last stanza swings back:

> And they are gone: ay, ages long ago
> These lovers fled away into the storm.
> ...
> The Beadsman, after thousand aves told,
> For aye unsought for slept among his ashes cold.

| Stage | Dominant images | What the stage suggests |
|---|---|---|
| Opening (stanzas I-II) | Bitter chill, frozen grass, numb fingers, frosted breath, freezing statues | A world of age, penance and death |
| Middle (the castle, the feast) | Crimson, gold, "blush'd," spices, syrups, cinnamon, music | Youth, desire and sensuous abundance |
| Ending (stanza XLII) | The storm, the dead, "ashes cold" | The warm night is enclosed by cold and time |

**The argument of the pattern.** Keats frames a warm romance with cold on both sides. The lovers escape "into the storm," and the poem drops them "ages long ago," leaving the Beadsman dead among cold ashes. Read as a pattern, the imagery suggests that the young lovers' warmth is real but brief, an interlude surrounded by a much longer cold.
`
    },
    {
      id: 'englitfi2-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Apply It: The Eve of St. Agnes** 🔍
      `,
      exercise: {
        questions: [
          {
            question: `The simile comparing the Beadsman's frosted breath to "pious incense from a censer old" primarily serves to`,
            options: [
              `mock the old man's prayers as empty ritual`,
              `join the night's cold with the old man's religious devotion`,
              `show that the chapel stays warm despite the bitter frost outside`,
              `introduce the feast that Porphyro will later prepare`
            ],
            correctAnswer: 1,
            explanation: `Visible breath on a freezing night becomes rising incense, so the cold and his piety are fused in one image. The tone is reverent rather than mocking, the next stanza stresses the chapel's chill, and the feast is many stanzas away.`
          },
          {
            question: `The catalogue of "candied apple, quince, and plum" and "spiced dainties" chiefly contrasts with`,
            options: [
              `the bitter cold and bare penance that open the poem`,
              `the loud music of the revelers in the castle's great hall`,
              `the stained-glass window glowing above Madeline's bed`,
              `Madeline's private hopes for a vision of her future lover`
            ],
            correctAnswer: 0,
            explanation: `The feast is warm, sweet, colorful and exotic, the opposite of the numb, frozen world of the opening stanzas. The party music, the window and Madeline's hopes belong to the same warm, rich cluster rather than standing against it.`
          },
          {
            question: `The final image of the Beadsman sleeping "among his ashes cold" most likely`,
            options: [
              `shows the Beadsman has at last found heaven's warmth`,
              `suggests that the lovers will be punished by the Baron`,
              `returns to the opening's cold, framing the lovers' warm night`,
              `reveals that the castle burned down after the lovers had escaped`
            ],
            correctAnswer: 2,
            explanation: `The poem ends where it began, with the old man and the cold, so the romance is enclosed by images of age and death. The line implies no heavenly warmth, says nothing of punishment, and "ashes" are the ashes he sat among for penance, not a fire that destroyed the castle.`
          }
        ]
      }
    },
    {
      id: 'englitfi2-writing',
      type: 'text' as const,
      content: `
## Writing About Imagery

| Weak commentary | Strong commentary |
|---|---|
| *Keats uses a lot of imagery to describe the forest.* | *By shutting off sight ("I cannot see"), Keats makes the forest a world of scent and sound, and the scent is "embalmed," so the speaker's escape into the senses already smells of death.* |
| *The poem has visual, tactile and kinesthetic imagery.* | *The opening cold moves from animals to an old man's "Numb" fingers, so cold becomes the sign of age and penance that the lovers' warm night must escape.* |

### Common Misconceptions

- **"Imagery means visual description."** Many of the strongest exam images are sounds, smells, textures or internal sensations. Keats's darkest stanza contains almost no sight at all.
- **"Naming the sense is analysis."** Saying an image is "olfactory" is labeling. Analysis says what the choice of sense contributes to the speaker, mood or meaning.
- **"Every image is a symbol."** Most images work through their sensory force and connotations. The cold in "The Eve of St. Agnes" is a pattern with meaning, but the hare is still a hare.
- **"A pattern means the images are all the same."** A pattern usually develops. Track where it starts, where it turns and where it ends.

> 🔑 **AP Connection:** Section I often asks what an image "conveys," "emphasizes" or "contributes to" in context, and Q1 and Q2 prompts often ask how an author develops a complex attitude or experience. A changing image pattern (cold to warm to cold, light to dark, open to enclosed) is one of the fastest routes to a line of reasoning: one body paragraph per stage of the pattern.
`
    }
  ]
}
