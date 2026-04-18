const fs = require('fs');
const path = require('path');
const dir = path.join(__dirname, '..', 'src', 'data', 'interactive-lessons');

function write(name, content) {
  fs.writeFileSync(path.join(dir, name), content);
  console.log('Wrote:', name);
}

// ─── 1. Intro to Rhetoric ───
write('englang-intro-rhetoric-part1.ts', `export const englangIntroRhetoricPart1Data = {
  topicSlug: 'englang-intro-rhetoric',
  sections: [
    {
      id: 'elir1-intro',
      type: 'text' as const,
      content: \`
# 🗣️ Introduction to Rhetoric

**Part 1 of 7 — What Rhetoric Is, Why It Matters, and How Writers Persuade**

---

## What Is Rhetoric?

**Rhetoric** is the art of effective communication — the study of how writers and speakers use language to achieve a purpose with a specific audience.

Every act of communication involves choices:
- **What** to say
- **How** to say it
- **Who** you are saying it to
- **Why** you are saying it

> 🔑 Rhetoric is not about tricking people. It is about making **strategic choices** to communicate effectively. A doctor explaining a diagnosis, a lawyer presenting a case, and a student writing an essay all use rhetoric.

---

## The Rhetorical Triangle

| Element | Question | Focus |
|---------|----------|-------|
| **Speaker/Writer** | Who is communicating? | Credibility, tone, perspective |
| **Audience** | Who is being addressed? | Values, expectations, knowledge level |
| **Subject/Message** | What is being communicated? | Claims, evidence, ideas |
| **Purpose** | Why is this being communicated? | Persuade, inform, entertain, call to action |
| **Context** | When and where? | Historical moment, cultural setting, medium |

### Example Analysis
A climate scientist writing a policy brief for Congress:
- **Speaker**: Expert with scientific authority
- **Audience**: Legislators who need actionable recommendations
- **Subject**: Climate data and policy proposals
- **Purpose**: Persuade Congress to act on climate legislation
- **Context**: Amid growing public concern about extreme weather
      \`
    },
    {
      id: 'elir1-quiz1',
      type: 'multiple-choice' as const,
      content: \`
**Concept Check** 🎯
      \`,
      exercise: {
        questions: [
          {
            question: 'Which best defines rhetoric?',
            options: [
              'Using complicated language to confuse an audience',
              'The art of using language effectively to communicate and persuade',
              'A type of formal debate with strict rules',
              'The study of grammar and punctuation'
            ],
            correctAnswer: 1,
            explanation: 'Rhetoric is the study and practice of effective communication. It encompasses how speakers and writers make strategic choices about language, structure, and appeal to achieve their purpose with a specific audience.'
          },
          {
            question: 'A nonprofit writes a fundraising email to past donors during the holiday season. Which element of the rhetorical situation is the "holiday season"?',
            options: [
              'Speaker',
              'Audience',
              'Purpose',
              'Context'
            ],
            correctAnswer: 3,
            explanation: 'Context refers to the circumstances surrounding the communication — the time, place, and cultural moment. The holiday season creates a context where donors may be more generous and charitable.'
          }
        ]
      }
    },
    {
      id: 'elir1-content',
      type: 'text' as const,
      content: \`
## The Three Appeals (Aristotle)

Aristotle identified three strategies writers and speakers use to persuade:

| Appeal | Targets | Strategy | Example |
|--------|---------|----------|---------|
| **Ethos** | Credibility | Establish trust and authority | "As a 20-year veteran firefighter, I can tell you..." |
| **Pathos** | Emotions | Evoke feelings (sympathy, fear, pride) | "Imagine a child going to bed hungry every night..." |
| **Logos** | Logic | Use evidence, data, reasoning | "Studies show that 73% of participants improved..." |

### How They Work Together
Effective rhetoric rarely relies on just one appeal. A strong argument typically:
1. Establishes the writer as credible (**ethos**)
2. Presents logical evidence (**logos**)
3. Connects emotionally with the audience (**pathos**)

### Important Distinction
- **Rhetorical analysis** = examining HOW a writer persuades (what you do on the AP exam)
- **Argumentation** = actually building your OWN persuasive argument

On the AP English Language exam, you will do BOTH.
      \`
    },
    {
      id: 'elir1-input',
      type: 'input-boxes' as const,
      content: \`
**Applied Recall** ✍️

1) The appeal to credibility and trust is called _______.

2) The appeal to logic, evidence, and reasoning is called _______.

3) The appeal to emotions is called _______.
      \`,
      exercise: {
        boxes: 3,
        correctAnswers: ['ethos', 'logos', 'pathos'],
        hint1: 'Think "ethics" — the character of the speaker.',
        hint2: 'Think "logic" — data and evidence.',
        hint3: 'Think "pathetic" (original meaning: relating to feelings).',
        explanation: 'Ethos = credibility. Logos = logic/evidence. Pathos = emotion. These are the three Aristotelian appeals.'
      }
    },
    {
      id: 'elir1-dropdown',
      type: 'dropdown-select' as const,
      content: \`
**Identify the Appeal** 🔍
      \`,
      exercise: {
        dropdowns: [
          {
            label: '"According to a Harvard study, students who read daily score 23% higher on standardized tests." This uses ___',
            options: ['Logos (evidence and statistics)', 'Ethos (credibility)', 'Pathos (emotion)', 'None of the above']
          },
          {
            label: '"As a board-certified physician with 15 years of experience..." This establishes ___',
            options: ['Ethos (speaker credibility)', 'Logos (logical reasoning)', 'Pathos (emotional appeal)', 'Context']
          },
          {
            label: '"Every day, thousands of families face the heartbreaking choice between food and medicine." This uses ___',
            options: ['Pathos (emotional appeal)', 'Logos (statistical evidence)', 'Ethos (authority)', 'None of the above']
          }
        ],
        correctAnswers: ['Logos (evidence and statistics)', 'Ethos (speaker credibility)', 'Pathos (emotional appeal)'],
        hint1: 'Statistics and study results = logic.',
        hint2: 'Credentials and experience = trust.',
        hint3: '"Heartbreaking" targets feelings.',
        explanation: 'Harvard study with data = logos. Physician credentials = ethos. "Heartbreaking choice" = pathos.'
      }
    },
    {
      id: 'elir1-strategy',
      type: 'text' as const,
      content: \`
## AP Exam Strategy: Rhetoric

- Always identify the **rhetorical situation** first: speaker, audience, purpose, context
- The three appeals (ethos, logos, pathos) appear on EVERY rhetorical analysis essay
- Do not just NAME the appeal — explain HOW it works and WHY the writer chose it
- Context matters: the same argument changes meaning in different historical moments
- The AP exam rewards analysis of how rhetorical choices serve the writer's purpose
- Practice identifying appeals in everyday texts: ads, editorials, speeches, social media
      \`
    },
    {
      id: 'elir1-applied',
      type: 'multiple-choice' as const,
      content: \`
**AP-Style Application** 🎯
      \`,
      exercise: {
        questions: [
          {
            question: 'A politician gives a speech at a veterans memorial on Memorial Day, citing her own military service and sharing stories of fallen soldiers. Which appeals is she PRIMARILY using?',
            options: [
              'Logos only — she is presenting factual evidence',
              'Ethos and pathos — her service establishes credibility while the stories evoke emotion',
              'Pathos only — she is just making people cry',
              'None — memorial speeches are not rhetorical'
            ],
            correctAnswer: 1,
            explanation: 'Her military service establishes ethos (she has firsthand credibility). Stories of fallen soldiers evoke pathos (grief, patriotism, gratitude). The Memorial Day context amplifies both appeals. Effective rhetoric layers multiple appeals.'
          },
          {
            question: 'Why is understanding the AUDIENCE essential to rhetorical analysis?',
            options: [
              'The audience determines the word count',
              'Writers make strategic choices based on the audience values, knowledge, and expectations',
              'The audience writes the response',
              'All audiences respond to rhetoric in the same way'
            ],
            correctAnswer: 1,
            explanation: 'Writers tailor their choices to their audience. A scientist writes differently for peer reviewers than for a general magazine. Understanding who the audience is reveals WHY the writer made specific rhetorical choices.'
          }
        ]
      }
    }
  ]
};
`);

// ─── 2. Rhetorical Situation ───
write('englang-rhetorical-situation-part1.ts', `export const englangRhetoricalSituationPart1Data = {
  topicSlug: 'englang-rhetorical-situation',
  sections: [
    {
      id: 'elrs1-intro',
      type: 'text' as const,
      content: \`
# 🎯 The Rhetorical Situation (Reading)

**Part 1 of 7 — Analyzing How Writers Respond to Context, Audience, and Purpose**

---

## Defining the Rhetorical Situation

The **rhetorical situation** is the set of circumstances that shapes a text. Every piece of writing exists within a situation that includes:

| Component | Description | Key Questions |
|-----------|-----------|---------------|
| **Exigence** | The issue, problem, or need that prompts writing | What motivated this text? What problem does it address? |
| **Speaker** | The person communicating | What is their background? What perspective do they bring? |
| **Audience** | The intended readers/listeners | Who is this for? What do they already know or believe? |
| **Purpose** | The goal of the communication | Is this meant to persuade, inform, entertain, or call to action? |
| **Context** | The circumstances surrounding the text | What historical, cultural, or social factors are at play? |

> 🔑 **Exigence** is the most frequently tested and least understood element. It is the specific trigger — the event, situation, or problem — that makes the writer feel compelled to communicate.

---

## Exigence in Action

| Text | Exigence |
|------|---------|
| Martin Luther King Jr., "Letter from Birmingham Jail" | Fellow clergymen criticized his activism as "unwise and untimely" |
| Rachel Carson, *Silent Spring* | Widespread, unchecked pesticide use was harming ecosystems |
| Declaration of Independence | Britain continued to violate colonists' rights without redress |
      \`
    },
    {
      id: 'elrs1-quiz1',
      type: 'multiple-choice' as const,
      content: \`
**Concept Check** 🎯
      \`,
      exercise: {
        questions: [
          {
            question: 'What is the "exigence" of a text?',
            options: [
              'The author biography',
              'The issue, event, or need that prompted the writer to communicate',
              'The final paragraph of the text',
              'The number of rhetorical devices used'
            ],
            correctAnswer: 1,
            explanation: 'Exigence is the specific trigger for writing — the problem, event, or situation that makes the writer feel compelled to respond. Without exigence, there is no reason for the text to exist.'
          },
          {
            question: 'A newspaper publishes an editorial the day after a school shooting, calling for new gun legislation. What is the exigence?',
            options: [
              'The newspaper industry',
              'The school shooting — the immediate event prompting the editorial',
              'The editorial board',
              'Gun legislation in general'
            ],
            correctAnswer: 1,
            explanation: 'The school shooting is the specific event that prompted the editorial. It is the urgent issue that makes the writer feel compelled to act. This is the exigence — the trigger for the communication.'
          }
        ]
      }
    },
    {
      id: 'elrs1-content',
      type: 'text' as const,
      content: \`
## How the Rhetorical Situation Shapes a Text

Writers do not make choices in a vacuum. Every element of the rhetorical situation influences the text:

### Audience Shapes Tone and Diction
| Audience | Likely Tone | Diction |
|----------|-----------|---------|
| Academic peers | Formal, objective | Technical terminology |
| General public | Accessible, engaging | Everyday language |
| Hostile audience | Conciliatory, measured | Careful, diplomatic phrasing |
| Sympathetic audience | Passionate, direct | Emotionally charged language |

### Purpose Shapes Structure
| Purpose | Structure |
|---------|----------|
| Persuade | Claim → Evidence → Counterargument → Rebuttal |
| Inform | Introduction → Explanation → Examples → Summary |
| Call to action | Problem → Urgency → Solution → Call to action |

### Context Shapes Content
- A speech during wartime emphasizes patriotism and sacrifice
- An essay during an economic crisis focuses on jobs and financial security
- A letter during a social movement appeals to justice and equality

## Reading Strategy: SOAPSTone

| Letter | Stands For | Question |
|--------|-----------|----------|
| **S** | Speaker | Who is speaking? |
| **O** | Occasion | What is the occasion (exigence)? |
| **A** | Audience | Who is the intended audience? |
| **P** | Purpose | What is the purpose? |
| **S** | Subject | What is the subject? |
| **Tone** | Tone | What is the tone? |
      \`
    },
    {
      id: 'elrs1-input',
      type: 'input-boxes' as const,
      content: \`
**Applied Recall** ✍️

1) The problem or event that prompts a writer to communicate is called the _______.

2) When writing for a hostile audience, a writer will likely adopt a _______ tone.

3) The SOAPSTone reading strategy stands for Speaker, Occasion, Audience, Purpose, Subject, and _______.
      \`,
      exercise: {
        boxes: 3,
        correctAnswers: ['exigence', 'conciliatory', 'Tone'],
        hint1: 'The trigger or urgency behind the text.',
        hint2: 'Trying to reconcile rather than confront.',
        hint3: 'The final letter in SOAPSTone.',
        explanation: 'Exigence = the trigger. Conciliatory for hostile audiences. SOAPSTone ends with Tone.'
      }
    },
    {
      id: 'elrs1-dropdown',
      type: 'dropdown-select' as const,
      content: \`
**Classify the Element** 🔍
      \`,
      exercise: {
        dropdowns: [
          {
            label: 'In "Letter from Birmingham Jail," the clergymen who criticized MLK are the ___',
            options: ['Audience (the people he is addressing)', 'Exigence', 'Context', 'Purpose']
          },
          {
            label: 'The Civil Rights Movement of the 1960s is the ___ for many of MLK writings',
            options: ['Context (historical/social circumstances)', 'Audience', 'Purpose', 'Tone']
          },
          {
            label: 'A scientist writing for a general magazine would use ___ diction compared to a peer-reviewed journal',
            options: ['More accessible, everyday', 'More technical, specialized', 'Identical', 'More formal and Latin-based']
          }
        ],
        correctAnswers: ['Audience (the people he is addressing)', 'Context (historical/social circumstances)', 'More accessible, everyday'],
        hint1: 'He is writing TO the clergymen.',
        hint2: 'The broader historical movement.',
        hint3: 'General readers need simpler language.',
        explanation: 'Clergymen = audience. Civil Rights Movement = context. General magazine = accessible diction.'
      }
    },
    {
      id: 'elrs1-strategy',
      type: 'text' as const,
      content: \`
## AP Exam Strategy: Rhetorical Situation

- ALWAYS start your rhetorical analysis by identifying the **rhetorical situation** (speaker, audience, exigence, purpose, context)
- **Exigence** is the most commonly tested element — know it cold
- Explain how the situation SHAPES the writer's choices (don't just list elements)
- Use **SOAPSTone** as a pre-reading checklist for any passage
- The AP rubric rewards connecting rhetorical choices to purpose and audience
- Context questions test whether you understand WHY a text was written at that particular moment
      \`
    },
    {
      id: 'elrs1-applied',
      type: 'multiple-choice' as const,
      content: \`
**AP-Style Application** 🎯
      \`,
      exercise: {
        questions: [
          {
            question: 'Frederick Douglass gave his speech "What to the Slave Is the Fourth of July?" on July 5, 1852, to a predominantly white abolitionist audience. What is the strategic significance of the DATE?',
            options: [
              'It was a convenient scheduling decision',
              'Speaking the day after July 4th highlights the hypocrisy of celebrating freedom while millions remain enslaved',
              'He wanted to avoid crowds on July 4th',
              'The date has no rhetorical significance'
            ],
            correctAnswer: 1,
            explanation: 'Douglass deliberately leveraged the context of Independence Day to sharpen his argument. The juxtaposition of celebrating liberty while slavery exists makes the hypocrisy undeniable. This is the rhetorical situation shaping the text.'
          },
          {
            question: 'An author writes an opinion piece in the New York Times about income inequality. If the same author published the same argument in an academic economics journal, what would MOST likely change?',
            options: [
              'The topic and thesis',
              'The diction, tone, and level of technical detail — adjusted for a different audience',
              'Nothing — good writing works for all audiences',
              'Only the title'
            ],
            correctAnswer: 1,
            explanation: 'Different audiences require different approaches. A newspaper audience expects accessible language and concrete examples. An academic audience expects technical terminology, citations, and formal tone. The audience shapes the writer-s choices.'
          }
        ]
      }
    }
  ]
};
`);

// ─── 3. Ethos, Pathos, Logos ───
write('englang-ethos-pathos-logos-part1.ts', `export const englangEthosPathosLogosPart1Data = {
  topicSlug: 'englang-ethos-pathos-logos',
  sections: [
    {
      id: 'elepl1-intro',
      type: 'text' as const,
      content: \`
# ⚖️ Ethos, Pathos, and Logos

**Part 1 of 7 — The Three Appeals in Depth**

---

## The Three Pillars of Persuasion

Aristotle argued that persuasion depends on three types of appeal. Understanding them deeply is essential for AP English Language.

---

### Ethos (Credibility and Character)

Ethos establishes WHY the audience should trust the speaker.

| Ethos Strategy | Example |
|---------------|---------|
| **Credentials** | "As a neurosurgeon with 25 years of experience..." |
| **Shared values** | "Like many of you, I believe every child deserves a quality education..." |
| **Fair-mindedness** | "While my opponents make some valid points..." |
| **Reputation** | A Nobel laureate speaking on physics carries inherent ethos |
| **Tone and style** | Professional, measured language builds credibility |

> 🔑 Ethos can be **established** (existing reputation) or **constructed** (built through the text itself). A writer with no prior reputation can still build ethos through fair, knowledgeable, expert-sounding writing.

---

### Pathos (Emotion)

Pathos appeals to the audience's feelings to move them to action.

| Emotion | Strategy |
|---------|----------|
| **Sympathy** | Vivid stories of individual suffering |
| **Fear** | Describing dire consequences of inaction |
| **Pride** | Appealing to national or cultural identity |
| **Anger** | Highlighting injustice or wrongdoing |
| **Hope** | Painting a vision of a better future |

---

### Logos (Logic and Evidence)

| Evidence Type | Example |
|--------------|---------|
| **Statistics** | "Graduation rates increased by 18% after the program launched" |
| **Expert testimony** | "According to the CDC, vaccinations prevent..." |
| **Historical precedent** | "When Finland reformed its education system in 1970..." |
| **Logical reasoning** | "If A causes B, and B causes C, then A contributes to C" |
| **Analogies** | "Managing a budget is like managing your health..." |
      \`
    },
    {
      id: 'elepl1-quiz1',
      type: 'multiple-choice' as const,
      content: \`
**Concept Check** 🎯
      \`,
      exercise: {
        questions: [
          {
            question: 'A writer with no prior expertise on a topic can still build ethos by:',
            options: [
              'Using emotional stories exclusively',
              'Demonstrating thorough research, fair-mindedness, and knowledgeable tone',
              'Ignoring counterarguments',
              'Using slang and informal language'
            ],
            correctAnswer: 1,
            explanation: 'Ethos can be constructed within the text itself. Through careful research, acknowledging opposing views, and writing with a knowledgeable and measured tone, a writer builds credibility even without prior reputation.'
          },
          {
            question: 'Which of the following uses pathos?',
            options: [
              '"The data clearly shows a 40% reduction in emissions."',
              '"Picture a child sitting alone in an empty house, wondering when a parent will come home."',
              '"Dr. Smith, a leading researcher at MIT, concluded..."',
              '"The population of the city grew by 12% between 2010 and 2020."'
            ],
            correctAnswer: 1,
            explanation: 'The vivid, emotionally charged image of a lonely child is designed to evoke sympathy and concern — this is pathos. The other options use statistics (logos) or expert authority (ethos).'
          }
        ]
      }
    },
    {
      id: 'elepl1-content',
      type: 'text' as const,
      content: \`
## How Appeals Work Together

Rarely does an effective argument rely on a single appeal. The strongest writing weaves all three together:

### Example Paragraph
"As a pediatrician who has treated thousands of children [**ethos**], I have seen firsthand how untreated ear infections can lead to permanent hearing loss [**pathos** — fear and concern]. Research from Johns Hopkins shows that children who receive early treatment recover fully 94% of the time [**logos**]. We owe it to our children to fund early screening programs [**pathos** — moral obligation]."

### The Danger of Over-Relying on One Appeal

| Overuse | Risk |
|---------|------|
| Too much ethos | Comes across as arrogant or credential-waving |
| Too much pathos | Seems manipulative; audience distrusts emotional exploitation |
| Too much logos | Feels cold and disconnected; audience disengages |

## Analyzing Appeals on the AP Exam

When you identify an appeal, always follow this pattern:

1. **Name** the appeal (ethos, pathos, logos)
2. **Quote or cite** the specific evidence from the text
3. **Explain** HOW it works on the audience
4. **Connect** it to the writer's PURPOSE

> ⛔ Avoid: "The author uses pathos." (too vague)
> ✅ Better: "The author evokes sympathy by describing the child's isolation, which compels the audience to support the proposed legislation."
      \`
    },
    {
      id: 'elepl1-input',
      type: 'input-boxes' as const,
      content: \`
**Applied Recall** ✍️

1) A Nobel laureate speaking on physics carries _______ ethos (ethos from an existing reputation).

2) An argument that relies too heavily on emotional stories risks seeming _______.

3) When analyzing appeals on the AP exam, always connect the appeal to the writer's _______.
      \`,
      exercise: {
        boxes: 3,
        correctAnswers: ['established', 'manipulative', 'purpose'],
        hint1: 'Already existing credibility.',
        hint2: 'The audience feels manipulated.',
        hint3: 'Why is the writer making this choice?',
        explanation: 'Established ethos = pre-existing reputation. Too much pathos = manipulative. Always connect to purpose.'
      }
    },
    {
      id: 'elepl1-dropdown',
      type: 'dropdown-select' as const,
      content: \`
**Classify the Appeal** 🔍
      \`,
      exercise: {
        dropdowns: [
          {
            label: '"When Finland reformed its education system, test scores rose 30% over a decade." This is ___',
            options: ['Logos (historical evidence and data)', 'Pathos (emotional story)', 'Ethos (speaker credibility)', 'None']
          },
          {
            label: '"I understand your concerns — like you, I have children in public school and want the best for them." This builds ___',
            options: ['Ethos (shared values and common ground)', 'Logos (statistical evidence)', 'Pathos (fear)', 'None']
          },
          {
            label: '"Without immediate action, thousands more families will lose their homes this winter." This uses ___',
            options: ['Pathos (fear and urgency)', 'Logos (data)', 'Ethos (credibility)', 'None']
          }
        ],
        correctAnswers: ['Logos (historical evidence and data)', 'Ethos (shared values and common ground)', 'Pathos (fear and urgency)'],
        hint1: 'Historical precedent with statistics.',
        hint2: 'Finding common ground builds trust.',
        hint3: 'Urgency and consequences evoke fear.',
        explanation: 'Finland data = logos. Common ground = ethos. "Thousands will lose homes" = pathos.'
      }
    },
    {
      id: 'elepl1-strategy',
      type: 'text' as const,
      content: \`
## AP Exam Strategy: Ethos, Pathos, Logos

- These appear on EVERY rhetorical analysis question — know them deeply
- Do not just identify the appeal — explain HOW it works and WHY the writer uses it
- Look for appeals WORKING TOGETHER, not in isolation
- Acknowledge when an appeal is weak or when a writer over-relies on one
- Quote the text specifically — vague references earn fewer points
- Connect every observation to the writer's PURPOSE and the AUDIENCE's response
      \`
    },
    {
      id: 'elepl1-applied',
      type: 'multiple-choice' as const,
      content: \`
**AP-Style Application** 🎯
      \`,
      exercise: {
        questions: [
          {
            question: 'A writer argues for stricter food safety regulations. She opens by describing her experience as a former FDA inspector, shares the story of a toddler hospitalized from contaminated food, then cites CDC data showing a 35% increase in food-borne illnesses. This argument is effective because:',
            options: [
              'It uses only logos, which is the strongest appeal',
              'It layers all three appeals — ethos (FDA experience), pathos (sick toddler), and logos (CDC data) — to build a comprehensive case',
              'The emotional story is the only persuasive element',
              'Statistics are all that matter in policy arguments'
            ],
            correctAnswer: 1,
            explanation: 'The argument layers all three Aristotelian appeals: ethos (professional experience), pathos (emotional anecdote), and logos (statistical evidence). This multi-layered approach addresses different facets of persuasion and is strongest when woven together.'
          },
          {
            question: 'On the AP rhetorical analysis essay, which approach will earn the highest score?',
            options: [
              'Listing every rhetorical device you can find in the passage',
              'Analyzing how specific rhetorical choices serve the writer's purpose for the intended audience',
              'Stating your personal opinion on the topic',
              'Summarizing the passage in your own words'
            ],
            correctAnswer: 1,
            explanation: 'The AP rubric rewards analysis of HOW and WHY, not just identification. Connecting specific choices to purpose and audience demonstrates deep rhetorical understanding — which is what earns top scores.'
          }
        ]
      }
    }
  ]
};
`);

// ─── 4. Claims and Evidence ───
write('englang-claims-evidence-part1.ts', `export const englangClaimsEvidencePart1Data = {
  topicSlug: 'englang-claims-evidence',
  sections: [
    {
      id: 'elce1-intro',
      type: 'text' as const,
      content: \`
# 📋 Claims and Evidence

**Part 1 of 7 — Building and Evaluating Arguments**

---

## What Is a Claim?

A **claim** is a statement that asserts something to be true. It is the foundation of any argument.

| Claim Type | Definition | Example |
|-----------|-----------|---------|
| **Factual** | Asserts something is true or false | "The Earth revolves around the Sun." |
| **Value** | Asserts something is good/bad, right/wrong | "Universal healthcare is a moral imperative." |
| **Policy** | Advocates for a specific action or change | "The voting age should be lowered to 16." |
| **Causal** | Asserts cause-and-effect | "Social media use increases anxiety in teenagers." |

### Thesis vs. Claim
- A **thesis** is your MAIN claim — the central argument of your essay
- **Supporting claims** are smaller arguments that back up the thesis
- Each body paragraph should have its own supporting claim

---

## What Counts as Evidence?

| Evidence Type | Strength | Example |
|--------------|----------|---------|
| **Statistics/Data** | Strong — measurable, specific | "67% of respondents reported improvement" |
| **Expert testimony** | Strong — authoritative | "Dr. Martinez, a leading epidemiologist, states..." |
| **Historical examples** | Moderate-Strong | "The New Deal created 4 million jobs in its first year" |
| **Anecdotes** | Moderate — vivid but limited | "My neighbor lost her job during the recession" |
| **Analogies** | Moderate — clarifying but imperfect | "Schools are like ecosystems — remove one element and the whole system suffers" |
| **Personal experience** | Weak alone — strengthened by other evidence | "In my experience as a teacher..." |

> 🔑 **Strong arguments** combine multiple types of evidence. A statistic provides credibility; an anecdote makes it relatable; expert testimony adds authority.
      \`
    },
    {
      id: 'elce1-quiz1',
      type: 'multiple-choice' as const,
      content: \`
**Concept Check** 🎯
      \`,
      exercise: {
        questions: [
          {
            question: '"The school board should require financial literacy courses for all high school students." What type of claim is this?',
            options: [
              'Factual — it states a fact',
              'Value — it makes a judgment about good or bad',
              'Policy — it advocates for a specific action',
              'Causal — it asserts cause and effect'
            ],
            correctAnswer: 2,
            explanation: 'The word "should" signals a policy claim — it advocates for a specific change or action. Policy claims propose what ought to be done, not just what is true or what is right.'
          },
          {
            question: 'Which type of evidence is generally considered weakest when used alone?',
            options: [
              'Statistical data from peer-reviewed research',
              'Expert testimony from a recognized authority',
              'A single personal anecdote without supporting data',
              'Historical evidence from documented events'
            ],
            correctAnswer: 2,
            explanation: 'A single anecdote is vivid and relatable but represents only one case. It does not demonstrate a broader pattern. Anecdotes are most effective when paired with statistics or expert testimony that confirm the pattern.'
          }
        ]
      }
    },
    {
      id: 'elce1-content',
      type: 'text' as const,
      content: \`
## Evaluating Evidence Quality

Not all evidence is created equal. Strong evidence is:

| Criterion | Questions to Ask |
|-----------|-----------------|
| **Relevant** | Does this evidence directly support the claim? |
| **Sufficient** | Is there enough evidence, or is it one isolated example? |
| **Accurate** | Is the data current and from a reliable source? |
| **Representative** | Does it reflect the broader situation, or is it cherry-picked? |

### Commentary: The Bridge Between Evidence and Claim

Evidence alone is not an argument. You need **commentary** — your analysis of how the evidence supports the claim.

**Weak**: "Studies show that reading improves test scores." (evidence with no analysis)

**Strong**: "A 2019 Stanford study found that students who read 30 minutes daily scored 15% higher on standardized tests. This data suggests that consistent reading practice builds the comprehension skills tested on these exams, supporting the case for dedicated reading time in schools."

### Counterarguments
Strong arguments **acknowledge and refute** opposing views:

| Strategy | Example |
|----------|---------|
| **Concession** | "While cost is a legitimate concern..." |
| **Rebuttal** | "...the long-term savings outweigh the initial investment by 3-to-1" |
| **Qualification** | "This solution may not work for every district, but for urban schools specifically..." |
      \`
    },
    {
      id: 'elce1-input',
      type: 'input-boxes' as const,
      content: \`
**Applied Recall** ✍️

1) A claim that advocates for a specific action or change (often using "should") is called a _______ claim.

2) Your analysis of HOW evidence supports a claim is called _______.

3) Acknowledging an opposing view before refuting it is called a _______.
      \`,
      exercise: {
        boxes: 3,
        correctAnswers: ['policy', 'commentary', 'concession'],
        hint1: 'Policy = what should be done.',
        hint2: 'Your voice analyzing the evidence.',
        hint3: 'Conceding a point before arguing against it.',
        explanation: 'Policy claims = "should" statements. Commentary = analysis. Concession = acknowledging the other side.'
      }
    },
    {
      id: 'elce1-dropdown',
      type: 'dropdown-select' as const,
      content: \`
**Evaluate the Evidence** 🔍
      \`,
      exercise: {
        dropdowns: [
          {
            label: '"My cousin did not go to college and became a successful entrepreneur, so college is unnecessary." This evidence is weak because it is ___',
            options: ['Not representative — one anecdote does not prove a general rule', 'Not relevant to the topic', 'Too formal', 'Based on expert opinion']
          },
          {
            label: '"A 2023 Pew Research study of 10,000 adults found that 72% support the policy." This evidence is strong because it is ___',
            options: ['Sufficient and representative — large sample from a credible source', 'Based on a single experience', 'An emotional anecdote', 'A personal opinion']
          },
          {
            label: '"While opponents argue the policy is too expensive, the Congressional Budget Office projects it will save $50 billion over ten years." This sentence uses ___',
            options: ['Concession and rebuttal', 'Only pathos', 'Only ethos', 'Only anecdote']
          }
        ],
        correctAnswers: ['Not representative — one anecdote does not prove a general rule', 'Sufficient and representative — large sample from a credible source', 'Concession and rebuttal'],
        hint1: 'One person is not everyone.',
        hint2: '10,000 people from Pew = solid data.',
        hint3: '"While opponents argue" = concession; CBO data = rebuttal.',
        explanation: 'Single anecdote = unrepresentative. Pew study = strong data. "While...but" = concession + rebuttal.'
      }
    },
    {
      id: 'elce1-strategy',
      type: 'text' as const,
      content: \`
## AP Exam Strategy: Claims and Evidence

- Every argument paragraph needs: **claim + evidence + commentary**
- On the argument essay, use at least 2-3 types of evidence (statistics, examples, expert testimony)
- ALWAYS include commentary — evidence without explanation earns minimal credit
- Address counterarguments to show sophistication
- The AP rubric specifically rewards "concession and rebuttal" in the argument essay
- Evaluate source credibility: peer-reviewed research > news articles > personal blogs
      \`
    },
    {
      id: 'elce1-applied',
      type: 'multiple-choice' as const,
      content: \`
**AP-Style Application** 🎯
      \`,
      exercise: {
        questions: [
          {
            question: 'A student writes: "Homework should be eliminated because I hate doing it and my friends agree." What is the primary weakness of this argument?',
            options: [
              'The claim is well-supported but needs formatting',
              'The evidence is entirely personal and anecdotal, with no data, expert testimony, or representative examples',
              'The grammar is incorrect',
              'Homework cannot be discussed in academic writing'
            ],
            correctAnswer: 1,
            explanation: 'The argument relies solely on personal feelings and a small, unrepresentative sample (friends). A strong argument would include research data, educational expert opinions, and representative studies on homework effectiveness.'
          },
          {
            question: 'Which of the following demonstrates effective use of concession and rebuttal?',
            options: [
              '"My opponents are wrong about everything."',
              '"While some studies suggest moderate homework benefits younger students, the overwhelming evidence for high schoolers shows diminishing returns beyond 90 minutes."',
              '"Homework is bad because students do not like it."',
              '"I believe homework should be optional."'
            ],
            correctAnswer: 1,
            explanation: 'This sentence concedes that some evidence supports moderate homework ("While some studies suggest...") before rebutting with stronger evidence for the writer-s position. This demonstrates sophistication and fair-mindedness.'
          }
        ]
      }
    }
  ]
};
`);

// ─── 5. Argument Structure ───
write('englang-argument-structure-part1.ts', `export const englangArgumentStructurePart1Data = {
  topicSlug: 'englang-argument-structure',
  sections: [
    {
      id: 'elas1-intro',
      type: 'text' as const,
      content: \`
# 🏗️ Argument Structure

**Part 1 of 7 — How Arguments Are Organized and Developed**

---

## The Architecture of an Argument

Every effective argument has a clear structure. Understanding structure helps you both ANALYZE texts and WRITE your own arguments.

### Classical Argument Structure (Aristotelian)

| Section | Purpose | Typical Location |
|---------|---------|-----------------|
| **Introduction (Exordium)** | Hook the reader, establish context | Opening paragraph |
| **Narration (Narratio)** | Provide background information | Early paragraphs |
| **Proposition (Propositio)** | State the thesis/main claim | End of intro or beginning of body |
| **Confirmation (Confirmatio)** | Present evidence supporting the claim | Body paragraphs |
| **Refutation (Refutatio)** | Address and refute counterarguments | Before or after confirmation |
| **Conclusion (Peroratio)** | Summarize and make final appeal | Closing paragraph |

---

## Other Argument Structures

| Structure | Pattern | Best For |
|-----------|---------|----------|
| **Rogerian** | Find common ground → Present your side → Propose compromise | Controversial topics with a hostile audience |
| **Toulmin** | Claim → Evidence → Warrant (underlying assumption) | Analytical arguments requiring logical rigor |
| **Problem-Solution** | Describe problem → Propose solution → Address objections | Policy arguments |
| **Cause-Effect** | Identify causes → Show effects → Argue for action | Causal claims |

> 🔑 On the AP exam, you need to recognize these structures in texts you READ and use effective structure in essays you WRITE.
      \`
    },
    {
      id: 'elas1-quiz1',
      type: 'multiple-choice' as const,
      content: \`
**Concept Check** 🎯
      \`,
      exercise: {
        questions: [
          {
            question: 'In classical argument structure, the section where the writer addresses and counters opposing viewpoints is called the:',
            options: [
              'Narration',
              'Confirmation',
              'Refutation',
              'Exordium'
            ],
            correctAnswer: 2,
            explanation: 'The refutation (refutatio) is where the writer acknowledges opposing arguments and explains why they are wrong or less compelling. This is distinct from the confirmation, where the writer presents supporting evidence.'
          },
          {
            question: 'When writing to a hostile audience about a controversial topic, which argument structure is most appropriate?',
            options: [
              'Classical — lead with your strongest claims immediately',
              'Rogerian — find common ground before presenting your position',
              'Problem-Solution — focus only on the problem',
              'No structure needed — just state your opinion'
            ],
            correctAnswer: 1,
            explanation: 'The Rogerian structure is designed for controversial topics. By finding common ground first, the writer reduces defensiveness in a hostile audience before carefully introducing their position. This builds trust before persuading.'
          }
        ]
      }
    },
    {
      id: 'elas1-content',
      type: 'text' as const,
      content: \`
## The Toulmin Model in Detail

The **Toulmin model** breaks arguments into components that reveal the underlying logic:

| Component | Role | Example |
|-----------|------|---------|
| **Claim** | What you are arguing | "Schools should start later." |
| **Evidence** | Data supporting the claim | "Studies show teens perform better after 8:30 AM." |
| **Warrant** | The logical bridge connecting evidence to claim | "School schedules should align with student performance data." |
| **Backing** | Support for the warrant | "Educational research consistently shows policy should be evidence-based." |
| **Qualifier** | Limits the scope of the claim | "In most cases..." or "For high school students specifically..." |
| **Rebuttal** | Addresses exceptions or objections | "While earlier start times benefit working parents..." |

### Why Warrants Matter
The **warrant** is often unstated — it is the assumption connecting evidence to claim. Identifying unstated warrants is a key analytical skill.

**Example:**
- Claim: "We should ban soda in schools."
- Evidence: "Childhood obesity rates have doubled."
- Warrant (unstated): "Schools have a responsibility to promote student health. Soda contributes to obesity."

If the audience does not share the warrant, the argument fails — even if the evidence is strong.

## Transitions That Signal Structure
| Transition | Signals |
|-----------|---------|
| "Furthermore," "Moreover" | Additional support (confirmation) |
| "However," "On the other hand" | Counterargument or concession |
| "Therefore," "Consequently" | Conclusion from evidence |
| "Despite this," "Nevertheless" | Rebuttal after concession |
      \`
    },
    {
      id: 'elas1-input',
      type: 'input-boxes' as const,
      content: \`
**Applied Recall** ✍️

1) In the Toulmin model, the unstated assumption connecting evidence to a claim is called the _______.

2) The argument structure that begins by finding common ground with the audience is called _______.

3) A word like "however" or "on the other hand" signals a shift to a _______.
      \`,
      exercise: {
        boxes: 3,
        correctAnswers: ['warrant', 'Rogerian', 'counterargument'],
        hint1: 'The logical bridge or underlying assumption.',
        hint2: 'Named after psychologist Carl Rogers.',
        hint3: 'The opposing side of the argument.',
        explanation: 'Warrant = unstated assumption. Rogerian = common ground first. "However" = counterargument.'
      }
    },
    {
      id: 'elas1-dropdown',
      type: 'dropdown-select' as const,
      content: \`
**Identify the Argument Component** 🔍
      \`,
      exercise: {
        dropdowns: [
          {
            label: '"For high school students specifically, later start times improve outcomes." The phrase "for high school students specifically" is a ___',
            options: ['Qualifier (limits the scope of the claim)', 'Warrant', 'Rebuttal', 'Evidence']
          },
          {
            label: '"While earlier start times benefit working parents, research shows the academic gains for students far outweigh the scheduling inconvenience." This sentence is a ___',
            options: ['Concession and rebuttal', 'Thesis statement', 'Narration', 'Evidence only']
          },
          {
            label: '"Therefore, the school board should implement a 9:00 AM start time beginning next fall." This sentence is a ___',
            options: ['Policy claim / call to action', 'Evidence', 'Warrant', 'Narration']
          }
        ],
        correctAnswers: ['Qualifier (limits the scope of the claim)', 'Concession and rebuttal', 'Policy claim / call to action'],
        hint1: '"Specifically" restricts the claim.',
        hint2: '"While...but" = concede then refute.',
        hint3: '"Should implement" = advocate action.',
        explanation: 'Qualifier limits scope. While/but = concession-rebuttal. "Should" = policy claim.'
      }
    },
    {
      id: 'elas1-strategy',
      type: 'text' as const,
      content: \`
## AP Exam Strategy: Argument Structure

- For the **rhetorical analysis** essay, identify how the writer structures the argument
- For the **argument** essay, use clear structural organization (intro → body with evidence → counterargument → conclusion)
- Identify **warrants** in texts you analyze — what unstated assumptions is the writer relying on?
- Use **transitions** to make your argument structure explicit
- Always include **refutation** — addressing counterarguments shows sophistication
- The AP rubric values "a line of reasoning" — each paragraph should logically build on the previous one
      \`
    },
    {
      id: 'elas1-applied',
      type: 'multiple-choice' as const,
      content: \`
**AP-Style Application** 🎯
      \`,
      exercise: {
        questions: [
          {
            question: 'A student argues: "Electric cars reduce emissions (evidence). Therefore, everyone should buy one (claim)." What is the unstated warrant?',
            options: [
              'Electric cars are expensive',
              'Reducing emissions is important, and individual purchasing decisions can collectively address the problem',
              'Electric cars are faster than gas cars',
              'There is no warrant in this argument'
            ],
            correctAnswer: 1,
            explanation: 'The warrant is the unstated assumption bridging evidence to claim: that reducing emissions matters AND that consumer choices can meaningfully address the problem. Without these assumptions, the evidence does not logically lead to the claim.'
          },
          {
            question: 'A writer addressing gun control for a politically divided audience would most benefit from which structure?',
            options: [
              'Classical — state the thesis immediately and argue forcefully',
              'Rogerian — establish common ground (e.g., everyone wants safety) before introducing the position',
              'No structure — just list statistics',
              'Cause-effect only'
            ],
            correctAnswer: 1,
            explanation: 'With a divided or hostile audience, leading with common ground (Rogerian structure) reduces defensiveness. Starting with shared values (safety, protecting families) before introducing policy positions makes the audience more receptive.'
          }
        ]
      }
    }
  ]
};
`);

console.log('Done with English Language batch 1 (5 files)');
