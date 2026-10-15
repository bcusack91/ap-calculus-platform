export const englangStyleReadingPart6Data = {
  topicSlug: 'englang-style-reading',
  sections: [
    {
      id: 'englangs6-intro',
      type: 'text' as const,
      content: `
# ✍️ Style in Reading

**Part 6 of 7 — Exam Practice: Section I Style Questions and a Q2 Paragraph**

---

| Section |
|---------|
| How Style Appears on the Exam |
| Section I Passage: Jack London, "The Descent" (1903) |
| Practice Set, Part A |
| Practice Set, Part B |
| Q2 Practice: Zitkala-Ša, "Iron Routine" (1900) |
| Two Body Paragraphs, Scored |

> 🔑 **Key Concept:** Style skills are tested twice on AP Lang. In **Section I** (45 multiple-choice questions in 60 minutes, each with four choices; 23 to 25 of them follow reading passages), stems ask what a comparison, detail, or shift "primarily serves to" do. In **Q2, the rhetorical analysis essay**, you explain those same choices in your own words, and Row B of the rubric (0 to 4 points) rewards commentary that ties each choice to the writer's purpose.
`
    },
    {
      id: 'englangs6-stems',
      type: 'text' as const,
      content: `
## How Style Appears on the Exam

### Common Section I Stems

| Stem | What it is really asking |
|---|---|
| "The comparison in paragraph 3 primarily serves to..." | What quality does the image transfer to the subject, and why? |
| "The writer's attitude toward X is best described as..." | Which precise tone word (or pair) fits all the evidence? |
| "The shift in tone from ... to ... reflects..." | What changed in the writer's thinking or voice at that moment? |
| "The phrase X is ironic because..." | What is the gap between what is said and what is meant? |
| "The detail that ... most directly emphasizes..." | Why was this detail selected over others? |

### A Routine for Each Question

1. Reread the quoted words **and the sentence on either side**.
2. Predict an answer in your own words before you look at the choices.
3. Eliminate choices that are true of the passage but **not of these words**, choices whose tone is too strong or too weak, and choices that describe the image literally.
4. Between two survivors, prefer the one that connects the choice to the writer's **purpose**.
`
    },
    {
      id: 'englangs6-passage',
      type: 'text' as const,
      content: `
## Section I Passage: Jack London, "The Descent" (1903)

*The following passage opens* The People of the Abyss *(1903), in which the American writer Jack London describes his plan, in the summer of 1902, to live among the poor of London's East End. Thomas Cook & Son was the best-known travel agency of the day.*

> **[1]** "But you can't do it, you know," friends said, to whom I applied for assistance in the matter of sinking myself down into the East End of London. "You had better see the police for a guide," they added, on second thought, painfully endeavouring to adjust themselves to the psychological processes of a madman who had come to them with better credentials than brains.
>
> **[2]** "But I don't want to see the police," I protested. "What I wish to do is to go down into the East End and see things for myself. I wish to know how those people are living there, and why they are living there, and what they are living for. In short, I am going to live there myself."
>
> **[3]** "You don't want to *live* down there!" everybody said, with disapprobation writ large upon their faces. "Why, it is said there are places where a man's life isn't worth tu'pence."
>
> **[4]** "The very places I wish to see," I broke in.
>
> **[5]** "But you can't, you know," was the unfailing rejoinder.
>
> [...]
>
> **[6]** "But we know nothing of the East End. It is over there, somewhere." And they waved their hands vaguely in the direction where the sun on rare occasions may be seen to rise.
>
> **[7]** "Then I shall go to Cook's," I announced.
>
> **[8]** "Oh yes," they said, with relief. "Cook's will be sure to know."
>
> **[9]** But O Cook, O Thomas Cook & Son, path-finders and trail-clearers, living sign-posts to all the world, and bestowers of first aid to bewildered travellers—unhesitatingly and instantly, with ease and celerity, could you send me to Darkest Africa or Innermost Thibet, but to the East End of London, barely a stone's throw distant from Ludgate Circus, you know not the way!
>
> **[10]** "You can't do it, you know," said the human emporium of routes and fares at Cook's Cheapside branch. "It is so—hem—so unusual."
>
> **[11]** "Consult the police," he concluded authoritatively, when I had persisted. "We are not accustomed to taking travellers to the East End; we receive no call to take them there, and we know nothing whatsoever about the place at all."
>
> — Jack London, *The People of the Abyss* (1903), Chapter I

(Ludgate Circus is in the City of London, the financial district, a short walk from the East End. "Thibet" is an older spelling of Tibet. "Darkest Africa" reflects the European travel writing of London's era, which he is borrowing in order to mock.)
`
    },
    {
      id: 'englangs6-setA',
      type: 'multiple-choice' as const,
      content: `
**Practice Set, Part A** 🎯 (paragraphs 1 to 8)
      `,
      exercise: {
        questions: [
          {
            question: 'The repetition of "But you can\'t do it, you know" (paragraphs 1, 5, and 10) primarily serves to',
            options: [
              'establish that the friends know the East End well and fear it for good reason',
              'show the narrator slowly coming to agree with the advice he keeps hearing',
              'present the refusal as an automatic formula rather than a reasoned reply',
              'convey the friends\' polite encouragement of a bold but unusual plan'
            ],
            correctAnswer: 2,
            explanation: 'The same words come from friends and from the clerk at Cook\'s, and paragraph 5 calls them "the unfailing rejoinder," so the refusal sounds reflexive rather than thought through. The friends admit they "know nothing of the East End," the narrator never agrees, and the phrase discourages rather than encourages.'
          },
          {
            question: 'In paragraph 1, the narrator\'s description of himself as "a madman who had come to them with better credentials than brains" is best described as',
            options: [
              'self-mocking, viewing his plan through his puzzled friends\' eyes',
              'clinical, diagnosing a real illness that troubles the narrator',
              'bitter, condemning his friends as cruel for doubting his sanity',
              'reverent, deferring to the wisdom of his friends\' judgment'
            ],
            correctAnswer: 0,
            explanation: 'The narrator borrows his friends\' view of him and exaggerates it for comic effect, a self-deprecating joke at his own expense. Nothing suggests a real illness, the tone is amused rather than bitter, and the passage treats the friends\' judgment as useless, not wise.'
          },
          {
            question: 'In paragraph 6, the friends wave "vaguely in the direction where the sun on rare occasions may be seen to rise." The detail chiefly suggests that',
            options: [
              'the friends are offering careful directions to a well-known district',
              'the comfortable know the East End only as a rumor, not as a real place',
              'the narrator admires the beauty of sunrise over the eastern city',
              'the friends have traveled widely and know the city\'s geography'
            ],
            correctAnswer: 1,
            explanation: 'The East End is reduced to a wave toward "the direction where the sun... may be seen to rise," a dry joke that combines east, the poor district, and London\'s gloomy weather. The gesture is vague rather than careful, it is not an admiring description, and it shows ignorance rather than knowledge.'
          }
        ]
      }
    },
    {
      id: 'englangs6-setB-intro',
      type: 'text' as const,
      content: `
## Practice Set, Part B

Before answering, reread paragraphs 9 to 11. Notice how paragraph 9 changes the register of the passage. Up to this point the narrator has reported a conversation in plain, quick dialogue. Suddenly he addresses a travel company directly ("O Cook"), in the elevated style of an ode, with a string of grand titles. Ask what that sudden elevation does, and why it ends with "you know not the way!"
`
    },
    {
      id: 'englangs6-setB',
      type: 'multiple-choice' as const,
      content: `
**Practice Set, Part B** 🎯 (paragraphs 9 to 11)
      `,
      exercise: {
        questions: [
          {
            question: 'The apostrophe in paragraph 9 ("O Cook, O Thomas Cook & Son...") primarily serves to',
            options: [
              'thank the firm sincerely for its long record of help to travelers',
              'mock the firm with grand praise it fails to earn',
              'explain the history of the travel business to unfamiliar readers',
              'shift from comedy to a mournful lament for the poor of the city'
            ],
            correctAnswer: 1,
            explanation: 'The lofty titles ("path-finders and trail-clearers, living sign-posts to all the world") exist to be punctured by "you know not the way!", which makes the praise ironic. The address is not sincere, gives no history, and keeps the comic tone rather than turning mournful.'
          },
          {
            question: 'The contrast between "Darkest Africa or Innermost Thibet" and "the East End of London, barely a stone\'s throw distant from Ludgate Circus" emphasizes that',
            options: [
              'the poor nearby are less known to the comfortable than far-off lands',
              'the East End is as dangerous as any region a traveler could visit abroad',
              'travel to remote regions was cheaper in 1902 than travel within London',
              'the narrator would rather explore Africa or Tibet than his chosen city'
            ],
            correctAnswer: 0,
            explanation: 'The firm can reach the most remote places on earth but not a district a short walk from the City, so the juxtaposition exposes how invisible the poor are to people of means. The passage makes no claim about relative danger or cost, and the narrator is set on the East End.'
          },
          {
            question: 'Calling the clerk "the human emporium of routes and fares" (paragraph 10) has the effect of',
            options: [
              'praising the clerk\'s unusual knowledge of the city\'s poor districts',
              'reducing the clerk to a dispenser of standard, ready-made answers',
              'suggesting that the clerk secretly plans to go to the East End',
              'introducing the clerk as a sympathetic guide for the narrator'
            ],
            correctAnswer: 1,
            explanation: 'An emporium is a store, so the metaphor turns the man into a shop that stocks only routine routes, which is why he can only repeat the formula. The clerk knows "nothing whatsoever" of the East End, shows no secret plan, and sends the narrator away.'
          },
          {
            question: 'The tone of the passage as a whole is best described as',
            options: [
              'grim and despairing, mourning the hopeless state of the poor',
              'wry and ironic, with a pointed criticism beneath the comedy',
              'neutral and factual, recording the narrator\'s preparations',
              'angry and accusatory, attacking his friends by name'
            ],
            correctAnswer: 1,
            explanation: 'The comedy of repeated refusals and mock-grand praise carries a serious point: comfortable people know nothing of the poverty a short walk away. The passage is too playful to be despairing, too judging to be neutral, and names no friends.'
          }
        ]
      }
    },
    {
      id: 'englangs6-q2',
      type: 'text' as const,
      content: `
## Q2 Practice: Zitkala-Ša, "Iron Routine" (1900)

### The Prompt

*The following passage is from "The School Days of an Indian Girl," an autobiographical essay that Zitkala-Ša, a Yankton Dakota writer, published in* The Atlantic Monthly *in 1900. In it she recalls her years at a boarding school for Native American children run by white missionaries. Read the passage carefully. Write an essay that analyzes the rhetorical choices Zitkala-Ša makes to convey her view of the school.*

> A loud-clamoring bell awakened us at half-past six in the cold winter mornings. From happy dreams of Western rolling lands and unlassoed freedom we tumbled out upon chilly bare floors back again into a paleface day. We had short time to jump into our shoes and clothes, and wet our eyes with icy water, before a small hand bell was vigorously rung for roll call.
>
> [...]
>
> A paleface woman, with a yellow-covered roll book open on her arm and a gnawed pencil in her hand, appeared at the door. Her small, tired face was coldly lighted with a pair of large gray eyes.
>
> [...]
>
> Relentlessly her pencil black-marked our daily records if we were not present to respond to our names, and no chum of ours had done it successfully for us. No matter if a dull headache or the painful cough of slow consumption had delayed the absentee, there was only time enough to mark the tardiness. It was next to impossible to leave the iron routine after the civilizing machine had once begun its day's buzzing; and as it was inbred in me to suffer in silence rather than to appeal to the ears of one whose open eyes could not see my pain, I have many times trudged in the day's harness heavy-footed, like a dumb sick brute.
>
> [...]
>
> I grew bitter, and censured the woman for cruel neglect of our physical ills. I despised the pencils that moved automatically, and the one teaspoon which dealt out, from a large bottle, healing to a row of variously ailing Indian children. I blamed the hard-working, well-meaning, ignorant woman who was inculcating in our hearts her superstitious ideas.
>
> — Zitkala-Ša, "The School Days of an Indian Girl," *The Atlantic Monthly* (1900)

(*Consumption* is tuberculosis, which killed many children at boarding schools.)

### A Thesis That Earns Row A

> Zitkala-Ša recasts the boarding school as a machine and its pupils as animals in harness, and by pairing that bitter imagery with a fair, even pitying portrait of her teacher, she leads her *Atlantic* readers to see that the system itself, not one cruel person, was crushing the children it claimed to civilize.

This thesis earns the Row A point because it is **defensible** and it **analyzes rhetorical choices** (the machine metaphor, the animal simile, the balanced portrait of the teacher) rather than restating the topic.
`
    },
    {
      id: 'englangs6-paragraphs',
      type: 'text' as const,
      content: `
## Two Body Paragraphs, Scored

Row B awards 0 to 4 points for evidence and commentary. In summary: a **4** supports every claim with specific evidence, **consistently** explains how the evidence supports a line of reasoning, and explains how **multiple** rhetorical choices contribute to the writer's purpose. A **2** mixes specific evidence with generalities, and its commentary repeats or summarizes the evidence instead of explaining it.

### Paragraph 1: Likely Row B = 2

> Zitkala-Ša uses a lot of imagery to show that the school was bad. For example, she says a "loud-clamoring bell" woke them up and the floors were "chilly." She also uses the metaphor "civilizing machine." This shows that the school was very strict. She also says she felt "like a dumb sick brute," which is a simile. These choices create a negative tone and make the reader feel bad for her.

| Problem | Where |
|---|---|
| Device-spotting: choices are named, not explained | "uses a lot of imagery," "which is a simile" |
| Commentary restates the evidence | "This shows that the school was very strict" |
| Vague tone word | "a negative tone" |
| No link to purpose or audience | Never says why *Atlantic* readers needed to see this |

### Paragraph 2: Likely Row B = 4

> **(a)** Zitkala-Ša's figurative language turns the school day into a mechanism that runs regardless of the children inside it. **(b)** The "loud-clamoring bell" and the "small hand bell" give the schedule a voice of its own, and the teacher's pencil, which "relentlessly" black-marks every absence, seems to act without her. **(c)** The writer then names the system outright as "the civilizing machine," and the phrase is pointedly ironic: a process that claims to civilize simply goes about "its day's buzzing," with "only time enough to mark the tardiness" of a child slowed by "the painful cough of slow consumption." **(d)** In that machine the children become animals; she "trudged in the day's harness heavy-footed, like a dumb sick brute," and "dumb" carries both of its meanings, since she explains that it was "inbred in me to suffer in silence." **(e)** For *Atlantic* readers who pictured these schools as acts of charity, the images move the question from whether teachers were kind to what the system did to children who could not speak up. **(f)** Even her angriest sentence ends with a balanced triad, "hard-working, well-meaning, ignorant," which aims the criticism at the institution rather than at one woman and makes the indictment harder for those readers to dismiss as a personal grievance.

| Sentence | What it does |
|---|---|
| (a) | Topic claim that names a choice (figurative language) and its effect |
| (b) | Specific evidence: the bells and the pencil act on their own |
| (c) | Names the central metaphor and explains its **irony**, with a precise detail as proof |
| (d) | A second choice (the simile) with a close reading of one word |
| (e) | Connects the choices to the **audience** and **purpose** |
| (f) | A third choice that shows a **tension** in the tone (bitterness balanced by fairness), the kind of insight that can contribute to Row C |

> 🔑 **AP Connection:** The difference between the paragraphs is not the evidence. Both quote the bell, the machine, and the "dumb sick brute." The difference is that Paragraph 2 explains **what each choice does and why it matters to this audience**. Commentary, not quotation, moves a paragraph from 2 to 4.
`
    },
    {
      id: 'englangs6-input',
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

1) Paragraph 9 of the London passage addresses a company directly, as though it could hear. This device is called _______.

2) On the Q2 rubric, the row worth 0 to 4 points for evidence and commentary is Row _______.

3) A Q2 thesis earns the Row A point when it is defensible and analyzes the writer's rhetorical _______.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['apostrophe', 'B', 'choices'],
        hint1: 'Begins with "O..." and speaks to someone or something not present to answer.',
        hint2: 'Row A is the thesis and Row C is sophistication.',
        hint3: 'The prompt asks you to analyze the writer\'s rhetorical _______.',
        explanation: 'Addressing an absent listener is apostrophe; Row B scores evidence and commentary; a strong thesis analyzes the writer\'s rhetorical choices.'
      }
    }
  ]
};
