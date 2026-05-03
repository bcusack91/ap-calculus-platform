import type { SAQItem } from '@/components/FullLengthPracticeExam'

/**
 * AP English Language & Composition — 3 FRQs in 135 minutes (45 min each, plus 15-min reading period).
 *
 *   Q1 Synthesis        — argue a position using 6 provided sources (we describe sources)
 *   Q2 Rhetorical Analysis — analyze rhetorical choices in a passage
 *   Q3 Argument         — defend, challenge, or qualify a claim
 */

export const FRQS: SAQItem[] = [
  /* ---------- Q1: SYNTHESIS ---------- */
  {
    type: 'saq',
    topic: 'frq-synthesis',
    stimulus: `**FRQ #1 — Synthesis Essay (suggested time: 40 minutes, plus 15-minute reading period)**

**Topic: Public Libraries in the Digital Age**

Public libraries in the United States have faced sustained pressure to redefine their mission. Some communities have responded by transforming libraries into multi-service "civic hubs" offering Wi-Fi, job training, social-work referrals, and makerspace programs; others have argued that libraries should refocus on books, study space, and the protection of free, unmediated access to information.

**Sources (summaries provided in lieu of full passages):**
- **Source A** — Pew Research Center survey (2023): 73% of Americans aged 16+ used a public library in the past 12 months; 54% used library digital services (e-books, Wi-Fi, online databases).
- **Source B** — Editorial from a small-town newspaper: argues that the local library has become "a daytime shelter and tech-help desk" and is no longer a place where students can study quietly.
- **Source C** — Statement from the American Library Association: defends expanded services as essential to libraries\' historic mission of "equitable access" in an era of declining public infrastructure.
- **Source D** — Bar chart showing municipal funding for libraries: nationally flat in real dollars since 2008, while program offerings have expanded by ~40%.
- **Source E** — Op-ed by a librarian: describes spending more time mediating conflicts and less time on collections work; warns that staff burnout is high.
- **Source F** — Photograph: a brightly lit library room with adults at computers, a child reading, and a sign reading "Tax-Help Wednesdays."

**Prompt:** Carefully read the six sources. Then, in an essay that synthesizes at least three of the sources, develop a defensible position on the extent to which public libraries should expand beyond their traditional role to provide a wider range of community services.`,
    parts: [
      {
        prompt: '**Thesis (1 point):** State a defensible thesis that responds to the prompt by taking a clear position on whether (and to what extent) libraries should expand into broader community services. (Restating the prompt or describing without taking a position earns 0 points.)',
        rubric: '1 pt: thesis is defensible and responsive to the prompt. Acceptable positions: full expansion, partial/qualified expansion, or refocusing on traditional mission. The thesis must be a single arguable claim; mere description or restatement = 0 pts.',
      },
      {
        prompt: '**Evidence & Commentary (4 points):** Select at least 3 sources and use them as evidence. Explain how each source supports your line of reasoning, and accurately attribute each source.',
        rubric: '0 pts: simple summary or no sources. 1 pt: uses 2 sources but mostly summarizes. 2 pts: uses 3 sources as evidence with minimal commentary. 3 pts: uses 3+ sources with consistent commentary linking evidence to claims. 4 pts: uses 3+ sources with specific evidence AND commentary that consistently and explicitly explains how the evidence supports the line of reasoning. Sources must be properly cited (e.g., "(Source A)" or "according to the Pew survey").',
      },
      {
        prompt: '**Sophistication (1 point):** Demonstrate sophistication of thought by qualifying or complicating the argument, situating it in a broader context, articulating implications, or using vivid and persuasive style throughout.',
        rubric: '1 pt awarded for ONE of the following sustained throughout (not in a single sentence): (a) crafting a nuanced argument that engages tensions across sources (e.g., funding flat but services expanding), (b) articulating implications beyond the prompt (e.g., what library mission says about public infrastructure generally), (c) consistently vivid and persuasive prose. NOT awarded for hedging, broad sweeping claims, or formulaic concessions.',
      },
    ],
  },

  /* ---------- Q2: RHETORICAL ANALYSIS ---------- */
  {
    type: 'saq',
    topic: 'frq-rhetorical-analysis',
    stimulus: `**FRQ #2 — Rhetorical Analysis Essay (suggested time: 40 minutes)**

The following passage is adapted from a 1962 speech delivered by Rachel Carson, author of *Silent Spring*, to the Women\'s National Press Club shortly after her book\'s publication. *Silent Spring* warned of the dangers of the widespread use of pesticides such as DDT and was met with intense opposition from chemical manufacturers.

> *"It is not my contention that chemical insecticides must never be used. I do contend that we have put poisonous and biologically potent chemicals indiscriminately into the hands of persons largely or wholly ignorant of their potentials for harm. We have subjected enormous numbers of people to contact with these poisons, without their consent and often without their knowledge. If the Bill of Rights contains no guarantee that a citizen shall be secure against lethal poisons distributed either by private individuals or by public officials, it is surely only because our forefathers, despite their considerable wisdom and foresight, could conceive of no such problem.*
>
> *"I have been accused of attacking industry. I have not. The reader will find no such attack in my book. What I have done is to point out a danger — a real and immediate danger to ourselves, to our children, to wildlife, and to the great and complex web of life on this planet. The chemical industry, like any other, is entitled to make a profit. But it is not entitled to be guaranteed a market. And it is not entitled to be insulated from the consequences of selling products whose risks have not been fairly weighed against their benefits."*

**Prompt:** In a well-constructed essay, analyze the rhetorical choices Carson makes to convey her message to her audience. In your response you should do the following:
- Respond to the prompt with a defensible thesis that analyzes the writer\'s rhetorical choices.
- Select and use evidence to develop your line of reasoning.
- Explain the relationship between the evidence and your thesis.
- Demonstrate an understanding of the rhetorical situation.`,
    parts: [
      {
        prompt: '**Thesis (1 point):** State a defensible thesis that analyzes the writer\'s rhetorical choices.',
        rubric: '1 pt: thesis identifies AT LEAST TWO specific rhetorical choices and links them to a purpose or effect. Examples: "Carson uses qualified concession and an appeal to constitutional values to portray her position as moderate and patriotic." Mere description ("Carson uses ethos, pathos, and logos") without linking to purpose = 0 pts.',
      },
      {
        prompt: '**Evidence & Commentary (4 points):** Provide specific evidence from the passage and explain how that evidence supports your thesis. Discuss how the writer\'s rhetorical choices contribute to her purpose.',
        rubric: 'Possible rhetorical choices to discuss (any 2–3 well-developed):\n• Concessive opening ("It is not my contention…") — preempts the charge of extremism.\n• Diction of "indiscriminately," "ignorant," "without their consent" — frames the harm as a violation of agency.\n• Constitutional appeal (Bill of Rights, "forefathers") — reframes pesticides as a civil-liberties issue, broadening her audience.\n• Direct refutation ("I have been accused…I have not.") — anaphora-like denial that controls the framing of opposition.\n• Asyndetic catalog ("to ourselves, to our children, to wildlife, and to the great and complex web of life") — escalates from individual to planetary stakes.\n• Repetition of "It is not entitled" — parallel structure that draws a measured but firm line at industry\'s rights.\n• Tone: measured, lawyerly, grounded in distinctions — counters the "hysterical" caricature opponents had cultivated.\n4 pts: specific evidence + commentary consistently explains how each choice produces effect; addresses MULTIPLE choices. 3 pts: specific evidence with some commentary. 2 pts: mostly summary with limited analysis. 1 pt: oversimplified or list-like analysis. 0 pts: no relevant evidence.',
      },
      {
        prompt: '**Sophistication (1 point):** Demonstrate sophistication of thought.',
        rubric: '1 pt awarded for sustained sophistication: (a) explaining the broader rhetorical situation (Carson as woman addressing male-dominated press in 1962, accused of being unscientific, must perform moderation), (b) explaining tensions in her stance (a radical claim delivered in conservative form), (c) vivid and persuasive style throughout. Not awarded for hedging or oversimplified concessions.',
      },
    ],
  },

  /* ---------- Q3: ARGUMENT ---------- */
  {
    type: 'saq',
    topic: 'frq-argument',
    stimulus: `**FRQ #3 — Argument Essay (suggested time: 40 minutes)**

The American novelist Marilynne Robinson has written:

> *"The notion that there is no use in talking about anything that cannot be measured is one of the most impoverishing assumptions of our time."*

In a well-written essay, take a position on the extent to which you agree or disagree with Robinson\'s claim about measurement. Use appropriate, specific evidence from your reading, observation, or experience to support your argument.`,
    parts: [
      {
        prompt: '**Thesis (1 point):** State a defensible thesis that responds to the prompt and stakes out a clear position on Robinson\'s claim.',
        rubric: '1 pt: defensible thesis. May agree, disagree, or qualify. Examples: full agreement ("Robinson is right; some of what matters most cannot be quantified"); full disagreement ("Measurement, far from impoverishing, is what allows us to talk seriously about anything at scale"); qualification ("Robinson is right about love and meaning, but the failure to measure has its own costs in policy"). 0 pts: restatement, summary, or no clear position.',
      },
      {
        prompt: '**Evidence & Commentary (4 points):** Provide specific evidence from your reading, observation, or experience and use it to develop a coherent line of reasoning.',
        rubric: 'Strong responses use 2–3 well-developed examples drawn from literature, history, current events, science, or personal observation. Each example should be specific (named persons, works, events, dates where appropriate) and tied explicitly to the thesis.\n4 pts: specific evidence + commentary that consistently and explicitly explains how each example supports the line of reasoning. 3 pts: specific evidence + some commentary, OR many examples with limited explanation. 2 pts: examples present but mostly summarized. 1 pt: vague evidence or oversimplified reasoning. 0 pts: no relevant evidence or evidence that does not address the prompt.\nAvoid: stacked examples without commentary; broad assertions ("Throughout history…"); examples that contradict the writer\'s own thesis without acknowledgment.',
      },
      {
        prompt: '**Sophistication (1 point):** Demonstrate sophistication of thought.',
        rubric: '1 pt awarded ONLY for SUSTAINED sophistication, e.g.: (a) addressing tensions or complexities (the cost of measuring AND the cost of not measuring), (b) situating the claim in a broader cultural or epistemological context (the rise of metrics in education, healthcare, social media), (c) consistently vivid and persuasive prose. NOT awarded for a single concessionary sentence or a final qualifying clause tacked on at the end.',
      },
    ],
  },
]
