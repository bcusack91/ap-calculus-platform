/**
 * AP English Language FRQ Practice Questions
 * Based on College Board AP English Language FRQ format
 */

export interface FRQRubricItem {
  points: number
  description: string
  keywords: string[]
}

export interface FRQPart {
  label: string
  prompt: string
  maxPoints: number
  rubric: FRQRubricItem[]
  sampleAnswer: string
}

export interface EngLangFRQ {
  id: string
  type: 'long' | 'short'
  unit: number
  title: string
  prompt: string
  parts: FRQPart[]
  totalPoints: number
  timeRecommendation: string
  calculatorAllowed: boolean
}

const longFRQs: EngLangFRQ[] = [
  {
    id: 'englang-long-1',
    type: 'long' as const,
    unit: 1,
    title: 'Rhetorical Analysis: Douglass at Rochester',
    prompt: `On July 5, 1852, the abolitionist writer and orator Frederick Douglass — who had escaped slavery fourteen years earlier — addressed the Rochester Ladies' Anti-Slavery Society at an Independence Day celebration. His audience consisted largely of white Northerners sympathetic to abolition. The passage below is excerpted from that speech.

"Fellow-citizens, pardon me, allow me to ask, why am I called upon to speak here to-day? What have I, or those I represent, to do with your national independence? Are the great principles of political freedom and of natural justice, embodied in that Declaration of Independence, extended to us? ... What, to the American slave, is your 4th of July? I answer: a day that reveals to him, more than all other days in the year, the gross injustice and cruelty to which he is the constant victim. To him, your celebration is a sham; your boasted liberty, an unholy license; your national greatness, swelling vanity; your sounds of rejoicing are empty and heartless; your denunciation of tyrants, brass fronted impudence; your shouts of liberty and equality, hollow mockery. ... There is not a nation on the earth guilty of practices more shocking and bloody than are the people of these United States, at this very hour."

Write an essay that analyzes the rhetorical choices Douglass makes to convey his message to his audience. The parts below scaffold the components of that essay.`,
    parts: [
      {
        label: '(a)',
        prompt: `State a defensible thesis that identifies Douglass's message and the rhetorical choices he makes to convey it to his audience.`,
        maxPoints: 1,
        rubric: [
          { points: 1, description: `Presents a defensible thesis that makes a claim about Douglass's rhetorical choices and his message, rather than restating the prompt or summarizing the passage`, keywords: ['Douglass', 'audience', 'hypocrisy', 'irony', 'rhetorical question', 'repetition', 'argues', 'exposes'] }
        ],
        sampleAnswer: `In his 1852 Rochester address, Douglass wields pointed rhetorical questions, the drumbeat repetition of "your," and biting irony to expose the hypocrisy of celebrating liberty in a slaveholding nation, pressing his sympathetic Northern audience to see the Fourth of July through the eyes of the enslaved.`,
      },
      {
        label: '(b)',
        prompt: `Analyze how Douglass's opening series of rhetorical questions ("why am I called upon to speak here to-day?", "What, to the American slave, is your 4th of July?") functions in the passage. Reference the questions and explain their effect on his audience.`,
        maxPoints: 2,
        rubric: [
          { points: 1, description: 'Identifies the rhetorical questions and accurately describes what they ask the audience to confront', keywords: ['rhetorical question', 'why am I called', 'What, to the American slave', 'questions', 'asks', 'confront'] },
          { points: 1, description: `Explains the effect: the questions expose the exclusion of enslaved people from the Declaration's promises and unsettle the audience's assumption that Douglass shares their holiday`, keywords: ['effect', 'audience', 'excluded', 'exclusion', 'Declaration', 'unsettle', 'forces', 'because'] }
        ],
        sampleAnswer: `Douglass opens with a barrage of questions — "why am I called upon to speak here to-day?" and "What have I, or those I represent, to do with your national independence?" — and then refuses to let the final one stay rhetorical, answering it himself: the Fourth reveals "gross injustice and cruelty." By questioning the very premise of his invitation, he forces his white listeners to confront the fact that the Declaration's "great principles of political freedom" have never been extended to the enslaved. The questions turn a celebratory occasion into an indictment: before the audience can congratulate itself on hosting a formerly enslaved speaker, it must ask why he is expected to toast a freedom his people do not share.`,
      },
      {
        label: '(c)',
        prompt: `Analyze Douglass's repetition of the second-person possessive in the parallel series near the end of the passage ("your celebration," "your boasted liberty," "your national greatness," "your shouts of liberty and equality").`,
        maxPoints: 2,
        rubric: [
          { points: 1, description: 'Identifies the anaphoric repetition of "your" and the parallel structure of the series', keywords: ['your', 'repetition', 'anaphora', 'parallel', 'series', 'second person'] },
          { points: 1, description: `Explains the effect: the repetition severs Douglass and the enslaved from the nation's self-congratulation, recasting each patriotic ideal as an accusation of hypocrisy`, keywords: ['distance', 'separates', 'excludes', 'hypocrisy', 'sham', 'mockery', 'effect', 'accusation'] }
        ],
        sampleAnswer: `The hammering anaphora of "your" — "your celebration," "your boasted liberty," "your national greatness" — builds a parallel series in which each patriotic treasure is named only to be stripped bare: a "sham," "swelling vanity," "hollow mockery." The second-person possessive does double work. It severs Douglass and the enslaved from the nation's self-congratulation, insisting that the holiday belongs to his audience and not to him, and its relentless repetition converts a list of national ideals into a list of charges. Each repetition widens the gulf between what the audience celebrates and what the enslaved endure, so that by the series' end the audience's own vocabulary of liberty has been turned into evidence against it.`,
      },
      {
        label: '(d)',
        prompt: `Douglass opens by calling his listeners "Fellow-citizens," yet insists the Fourth of July is "your" holiday, not his. Explain the tension between these two choices and how holding both at once complicates and strengthens his argument.`,
        maxPoints: 2,
        rubric: [
          { points: 1, description: 'Identifies the tension between claiming fellowship/citizenship and disclaiming the holiday', keywords: ['tension', 'Fellow-citizens', 'your', 'contradiction', 'paradox', 'both', 'complicates'] },
          { points: 1, description: 'Explains how the tension strengthens the argument: Douglass claims standing to indict the nation from within while dramatizing his exclusion from its promises', keywords: ['irony', 'citizenship', 'standing', 'indict', 'exclusion', 'strengthens', 'because'] }
        ],
        sampleAnswer: `The greeting "Fellow-citizens" claims membership in the very nation whose birthday Douglass then refuses to share, and that contradiction is the engine of the speech. If he were merely an outsider, his audience could dismiss the attack; if he were fully a citizen, the attack would be unnecessary. By holding both positions at once, Douglass dramatizes the nation's own contradiction — a republic of "liberty and equality" that enslaves millions — in his own person. The tension gives him standing to indict America from within while his exclusion supplies the evidence, making the charge of "brass fronted impudence" impossible for his sympathetic audience to wave away as a stranger's grievance.`,
      }
    ],
    totalPoints: 7,
    timeRecommendation: '~25 minutes',
    calculatorAllowed: false,
  },
  {
    id: 'englang-long-2',
    type: 'long' as const,
    unit: 1,
    title: 'Argument: Mill on Knowing Both Sides',
    prompt: `In On Liberty (1859), the philosopher John Stuart Mill writes, "He who knows only his own side of the case, knows little of that." Mill argues that a person cannot truly understand — or be entitled to hold — a position without seriously engaging the strongest arguments against it.

Write an essay that argues your position on the extent to which Mill's claim is valid. Use appropriate, specific evidence from your reading, experience, or observations to support your argument. The parts below scaffold the components of that essay.`,
    parts: [
      {
        label: '(a)',
        prompt: `State a defensible thesis that takes a position on the extent to which Mill's claim is valid.`,
        maxPoints: 1,
        rubric: [
          { points: 1, description: `Presents a defensible position on Mill's claim (agreeing, disagreeing, or qualifying) rather than restating the prompt or remaining neutral`, keywords: ['extent', 'valid', 'agree', 'disagree', 'qualify', 'although', 'position', 'Mill'] }
        ],
        sampleAnswer: `Mill is largely right: a position never tested against its strongest opposition is held as a prejudice rather than an understanding. His claim deserves one qualification, however — engaging the other side deepens understanding only when that side is argued in good faith, so the obligation Mill describes applies to genuine disagreements, not to every denial of settled fact.`,
      },
      {
        label: '(b)',
        prompt: 'Provide TWO pieces of specific evidence from your reading, experience, or observations that support your position.',
        maxPoints: 2,
        rubric: [
          { points: 1, description: 'Provides one specific, relevant piece of evidence (a named text, historical case, or concrete personal observation)', keywords: ['for example', 'evidence', 'specific', 'case', 'historical', 'experience'] },
          { points: 1, description: 'Provides a second, distinct piece of specific, relevant evidence', keywords: ['second', 'another', 'similarly', 'also', 'furthermore', 'in addition'] }
        ],
        sampleAnswer: `First, when my debate coach assigned me to argue for a school cell-phone ban I personally opposed, researching studies on classroom distraction forced me to see that my original position rested on convenience rather than evidence — and the argument I eventually built against blanket bans was far stronger for having absorbed the other side's data. Second, Abraham Lincoln offers a historical case: he studied his opponents so closely that he could state Stephen Douglas's popular-sovereignty argument as persuasively as Douglas himself, and he later filled his cabinet with rivals like Seward and Chase. Lincoln's case against slavery's expansion was sharpened, not weakened, by his command of the opposing view.`,
      },
      {
        label: '(c)',
        prompt: `Explain how your evidence supports your thesis. Your commentary should build a line of reasoning that connects each piece of evidence back to your position on Mill's claim.`,
        maxPoints: 2,
        rubric: [
          { points: 1, description: 'Explains how the evidence supports the thesis rather than merely summarizing the evidence', keywords: ['because', 'shows', 'demonstrates', 'supports', 'therefore', 'suggests'] },
          { points: 1, description: 'Sustains a coherent line of reasoning across both pieces of evidence, linking them to a single controlling claim', keywords: ['together', 'both', 'line of reasoning', 'pattern', 'consistent', 'moreover'] }
        ],
        sampleAnswer: `Both examples show the same mechanism at work. My debate assignment demonstrates Mill's claim at the level of the individual mind: until I could reconstruct the case for a ban, I did not actually know why I opposed one — I merely felt it, which is what Mill means by knowing "little" of one's own side. Lincoln demonstrates the claim at the level of public argument: his mastery of Douglas's position let him anticipate objections and answer them before audiences heard them elsewhere. Together they trace a consistent pattern — engagement with opposition converts opinion into understanding, and understanding into persuasion — which is precisely the extent to which Mill's claim holds.`,
      },
      {
        label: '(d)',
        prompt: 'Address the strongest objection to your position, and either rebut it or qualify your thesis in response.',
        maxPoints: 2,
        rubric: [
          { points: 1, description: 'Accurately states a genuine counterargument to the position taken', keywords: ['critics', 'objection', 'counterargument', 'some argue', 'opponents', 'however'] },
          { points: 1, description: 'Rebuts the counterargument or qualifies the thesis in a way consistent with the overall position', keywords: ['rebut', 'yet', 'nevertheless', 'qualify', 'concede', 'still', 'ultimately'] }
        ],
        sampleAnswer: `The strongest objection is that some questions do not deserve two sides: no one should have to master arguments for Holocaust denial or against the roundness of the earth in order to reject them. I concede the point — which is why my thesis limits Mill's claim to genuine disagreements argued in good faith. Yet the objection ultimately reinforces Mill rather than refuting him: we can identify which denials are bad-faith or factually bankrupt only because someone has already done the work of examining and dismantling them. Even the positions we now safely dismiss were earned that status through the very engagement Mill demands.`,
      }
    ],
    totalPoints: 7,
    timeRecommendation: '~25 minutes',
    calculatorAllowed: false,
  }
]

const shortFRQs: EngLangFRQ[] = [
  {
    id: 'englang-short-1',
    type: 'short' as const,
    unit: 1,
    title: 'Rhetorical Choices: Roosevelt in the Arena',
    prompt: `In a 1910 speech titled "Citizenship in a Republic," delivered at the Sorbonne in Paris shortly after he left the presidency, Theodore Roosevelt addressed an audience of scholars, students, and public officials. Read the excerpt below, then answer the questions that follow.

"It is not the critic who counts; not the man who points out how the strong man stumbles, or where the doer of deeds could have done them better. The credit belongs to the man who is actually in the arena, whose face is marred by dust and sweat and blood; who strives valiantly; who errs, who comes short again and again, because there is no effort without error and shortcoming; but who does actually strive to do the deeds; who knows the great enthusiasms, the great devotions; who spends himself in a worthy cause; who at the best knows in the end the triumph of high achievement, and who at the worst, if he fails, at least fails while daring greatly, so that his place shall never be with those cold and timid souls who neither know victory nor defeat."`,
    parts: [
      {
        label: '(a)',
        prompt: `Identify Roosevelt's purpose in this excerpt and the audience he is addressing.`,
        maxPoints: 1,
        rubric: [
          { points: 1, description: 'Accurately states the purpose (to exalt the person who acts and risks failure over the detached critic) and identifies the audience of scholars and public figures', keywords: ['purpose', 'audience', 'scholars', 'critic', 'action', 'praise', 'argues'] }
        ],
        sampleAnswer: `Roosevelt's purpose is to exalt the person who acts — who risks error and failure in a worthy cause — over the detached critic who merely judges from the sidelines. His audience is a hall of scholars, students, and officials at the Sorbonne: precisely the class most tempted to criticize rather than act, which gives his praise of the "doer of deeds" a pointed edge.`,
      },
      {
        label: '(b)',
        prompt: 'Identify ONE specific rhetorical choice Roosevelt makes in the passage, and quote the language where it appears.',
        maxPoints: 1,
        rubric: [
          { points: 1, description: 'Names a specific rhetorical choice actually present in the passage (extended arena metaphor, visceral imagery, anaphoric "who" clauses, antithesis of doer and critic) and quotes supporting language', keywords: ['metaphor', 'arena', 'imagery', 'dust and sweat and blood', 'repetition', 'who', 'antithesis', 'contrast'] }
        ],
        sampleAnswer: `Roosevelt builds an extended metaphor of the "arena," casting the person of action as a gladiator "whose face is marred by dust and sweat and blood." The metaphor recasts civic effort — governing, building, reforming — as physical combat before spectators.`,
      },
      {
        label: '(c)',
        prompt: 'Explain how the choice you identified in part (b) helps Roosevelt achieve his purpose for this audience.',
        maxPoints: 1,
        rubric: [
          { points: 1, description: 'Connects the identified choice to the purpose and audience with commentary, not mere restatement', keywords: ['because', 'effect', 'audience', 'vivid', 'honors', 'effort', 'persuades'] }
        ],
        sampleAnswer: `The arena metaphor makes effort itself heroic. By rendering the doer's failures as honorable wounds — "dust and sweat and blood" earned in combat — Roosevelt transforms error, which his scholarly audience is trained to catch and penalize, into a badge of courage. The vivid physicality shames armchair judgment: the critic stands outside the arena, unmarked and therefore unproven, so the audience is pushed to admire, and to become, the one who dares.`,
      },
      {
        label: '(d)',
        prompt: 'Identify a DIFFERENT rhetorical choice in the passage and explain how it reinforces or contrasts with the effect of the choice you discussed in parts (b) and (c).',
        maxPoints: 1,
        rubric: [
          { points: 1, description: 'Identifies a second, distinct choice from the passage and explains how its effect reinforces or contrasts with the first', keywords: ['antithesis', 'cold and timid souls', 'anaphora', 'repetition', 'contrast', 'reinforces', 'parallel'] }
        ],
        sampleAnswer: `A second choice is the closing antithesis between the man in the arena and the "cold and timid souls who neither know victory nor defeat." Where the arena metaphor works by heating the doer's portrait — sweat, blood, "great enthusiasms" — the antithesis works by chilling the critic's, draining him of temperature and experience alike. The two choices reinforce each other from opposite directions: the metaphor makes action enviable while the antithesis makes inaction contemptible, leaving Roosevelt's audience no dignified middle ground.`,
      }
    ],
    totalPoints: 4,
    timeRecommendation: '~12 minutes',
    calculatorAllowed: false,
  },
  {
    id: 'englang-short-2',
    type: 'short' as const,
    unit: 1,
    title: 'Synthesis Skills: School Start Times',
    prompt: `The following three sources address whether high schools should move to later start times. Read the source summaries, then answer the questions that follow, using the sources as evidence for an argument of your own.

Source A (medical association report): The American Academy of Pediatrics recommends that middle and high schools start no earlier than 8:30 a.m., citing research that adolescents biologically need 8.5 to 9.5 hours of sleep and that early start times are associated with lower grades, higher rates of depression, and more drowsy-driving crashes among teenagers.

Source B (district budget director, newspaper editorial): Shifting start times sounds simple but is not free. Our district would need additional bus routes at an estimated cost of 1.4 million dollars per year; students who work after-school jobs or watch younger siblings would lose hours; and athletic schedules shared with neighboring districts would fall out of sync.

Source C (student council president, school board testimony): Since our district moved its start time to 8:45 a.m. last year, I sleep noticeably more and my first-period grades have improved — but team practices now run past 6:00 p.m., and the elementary schools were moved earlier to free up buses, so for some families the change shifted burdens rather than erasing them.`,
    parts: [
      {
        label: '(a)',
        prompt: 'State a defensible position on whether high schools should adopt later start times.',
        maxPoints: 1,
        rubric: [
          { points: 1, description: 'States a clear, defensible position on the issue (for, against, or qualified) rather than summarizing the sources or straddling', keywords: ['should', 'position', 'later start', 'because', 'support', 'oppose', 'although'] }
        ],
        sampleAnswer: `High schools should adopt later start times: the documented health and academic benefits for adolescents outweigh the logistical costs, provided districts plan transportation and athletics changes rather than simply shifting burdens onto younger students and working families.`,
      },
      {
        label: '(b)',
        prompt: 'Use ONE source as evidence for your position. Attribute the source and explain how it supports your claim.',
        maxPoints: 1,
        rubric: [
          { points: 1, description: 'Selects a relevant source, attributes it (Source A/B/C or by author), and explains how it supports the position rather than just quoting it', keywords: ['Source A', 'Source B', 'Source C', 'according to', 'supports', 'evidence', 'because'] }
        ],
        sampleAnswer: `Source A gives the position its strongest footing: the American Academy of Pediatrics — a medical authority, not an interest group — ties early start times to lower grades, higher rates of depression, and drowsy-driving crashes. Because the harms it documents involve student safety and mental health, not mere preference, Source A establishes that later start times address a genuine public-health problem, which is exactly the kind of stake that justifies spending district money.`,
      },
      {
        label: '(c)',
        prompt: 'Use a SECOND source as evidence for your position, again with attribution and an explanation of how it supports your claim.',
        maxPoints: 1,
        rubric: [
          { points: 1, description: 'Uses a second, distinct source with attribution and explains how it advances the same line of reasoning', keywords: ['Source', 'second', 'also', 'according to', 'supports', 'testimony', 'because'] }
        ],
        sampleAnswer: `Source C corroborates the research with lived results: after her district moved to an 8:45 start, the student council president reports sleeping more and earning better first-period grades — the very outcomes Source A predicts. Her testimony matters because it comes from a district that actually made the change, converting Source A's statistical claims into an observed effect, and her honesty about the drawbacks makes her confirmation of the benefits more credible, not less.`,
      },
      {
        label: '(d)',
        prompt: 'Identify which source could best be used to challenge your position, and explain how you would rebut it or qualify your argument in response.',
        maxPoints: 1,
        rubric: [
          { points: 1, description: 'Identifies the strongest opposing source and offers a rebuttal or qualification consistent with the stated position', keywords: ['challenge', 'counter', 'rebut', 'qualify', 'however', 'concede', 'although'] }
        ],
        sampleAnswer: `Source B poses the strongest challenge: 1.4 million dollars a year in bus costs and disrupted jobs and athletics are concrete harms, not hypotheticals. I would concede the costs are real but rebut the conclusion — a budget figure is an argument for phased implementation, staggered bell schedules, or regional coordination with neighboring districts, not for preserving a schedule that Source A links to depression and car crashes. Source C's warning that her district simply pushed burdens onto elementary families becomes my qualification: adopt later start times, but fund the transition rather than offloading it.`,
      }
    ],
    totalPoints: 4,
    timeRecommendation: '~12 minutes',
    calculatorAllowed: false,
  }
]

export const apEngLangFRQs: EngLangFRQ[] = [...longFRQs, ...shortFRQs]

export function getApEngLangFRQs(): EngLangFRQ[] {
  return apEngLangFRQs
}

export function getLongFRQs(): EngLangFRQ[] {
  return longFRQs
}

export function getShortFRQs(): EngLangFRQ[] {
  return shortFRQs
}

export function generateFullExamFRQs(pool: EngLangFRQ[] = apEngLangFRQs): {
  long: EngLangFRQ[]
  short: EngLangFRQ[]
  totalPoints: number
  totalTime: string
} {
  const shuffle = <T>(arr: T[]): T[] => {
    const copy = [...arr]
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[copy[i], copy[j]] = [copy[j], copy[i]]
    }
    return copy
  }

  const selectedLong = shuffle(pool.filter((f) => f.type === 'long')).slice(0, 2)
  const selectedShort = shuffle(pool.filter((f) => f.type === 'short')).slice(0, 2)
  const totalPoints = [...selectedLong, ...selectedShort].reduce((s, f) => s + f.totalPoints, 0)

  return {
    long: selectedLong,
    short: selectedShort,
    totalPoints,
    totalTime: '135 min',
  }
}
