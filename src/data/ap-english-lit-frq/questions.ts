/**
 * AP English Literature FRQ Practice Questions
 * Based on College Board AP English Literature FRQ format
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

export interface EngLitFRQ {
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

const longFRQs: EngLitFRQ[] = [
  {
    id: 'englit-long-1',
    type: 'long' as const,
    unit: 1,
    title: 'Prose Fiction Analysis: Austen\'s Mr. Collins',
    prompt: `In the following excerpt from Jane Austen's novel Pride and Prejudice (1813), the narrator introduces Mr. Collins, a clergyman and distant cousin of the Bennet family. Read the passage carefully. Then, in the parts below, develop a defensible thesis, support it with specific textual evidence, explain your line of reasoning, and demonstrate a sophisticated understanding of how Austen uses literary techniques to characterize Mr. Collins and to convey the narrator's attitude toward him.

"Mr. Collins was not a sensible man, and the deficiency of nature had been but little assisted by education or society; the greatest part of his life having been spent under the guidance of an illiterate and miserly father; and though he belonged to one of the universities, he had merely kept the necessary terms, without forming at it any useful acquaintance. The subjection in which his father had brought him up had given him originally great humility of manner; but it was now a good deal counteracted by the self-conceit of a weak head, living in retirement, and the consequential feelings of early and unexpected prosperity. A fortunate chance had recommended him to Lady Catherine de Bourgh when the living of Hunsford was vacant; and the respect which he felt for her high rank, and his veneration for her as his patroness, mingling with a very good opinion of himself, of his authority as a clergyman, and his right as a rector, made him altogether a mixture of pride and obsequiousness, self-importance and humility."`,
    parts: [
      {
        label: '(a)',
        prompt: 'State a defensible thesis that presents an interpretation of how Austen uses literary techniques to characterize Mr. Collins in this passage.',
        maxPoints: 1,
        rubric: [
          { points: 1, description: 'Presents a defensible thesis that makes an interpretive claim about how Austen characterizes Mr. Collins, rather than restating the prompt or summarizing the passage', keywords: ['thesis', 'claim', 'characterizes', 'diction', 'irony', 'narrator', 'satirize'] }
        ],
        sampleAnswer: 'Through the narrator\'s bluntly judgmental diction, a mock-logical accounting of Mr. Collins\'s upbringing, and the balanced antithetical phrasing of the closing sentence, Austen characterizes Mr. Collins as a man whose servility and vanity are two halves of the same shallow mind, inviting the reader to regard him with amused contempt rather than sympathy.',
      },
      {
        label: '(b)',
        prompt: 'Identify TWO specific pieces of textual evidence — quoted words or phrases from the passage — that support your thesis.',
        maxPoints: 2,
        rubric: [
          { points: 1, description: 'Quotes or specifically references one relevant detail from the passage (e.g., "not a sensible man," "the self-conceit of a weak head")', keywords: ['sensible', 'weak head', 'self-conceit', 'quote', 'passage', 'phrase'] },
          { points: 1, description: 'Quotes or specifically references a second, distinct relevant detail (e.g., the closing antithesis "pride and obsequiousness, self-importance and humility")', keywords: ['pride', 'obsequiousness', 'humility', 'veneration', 'patroness', 'second'] }
        ],
        sampleAnswer: 'First, the narrator opens with the flatly dismissive judgment that Mr. Collins "was not a sensible man," a verdict later sharpened into the diagnosis of "the self-conceit of a weak head." Second, the passage closes with the balanced antithesis that he is "a mixture of pride and obsequiousness, self-importance and humility," a sentence whose parallel structure pairs each of his vanities with its matching servility.',
      },
      {
        label: '(c)',
        prompt: 'Explain how your evidence supports your thesis. Build a line of reasoning that connects Austen\'s specific choices of diction and syntax to the characterization of Mr. Collins.',
        maxPoints: 3,
        rubric: [
          { points: 1, description: 'Explains how the first piece of evidence develops the characterization (e.g., the narrator\'s blunt opening judgment establishes an authoritative, mocking frame before Collins ever speaks)', keywords: ['because', 'diction', 'establishes', 'narrator', 'judgment', 'frame'] },
          { points: 1, description: 'Explains how the second piece of evidence develops the characterization (e.g., the antithetical pairings show that his flattery of rank and his vanity feed each other)', keywords: ['antithesis', 'balanced', 'parallel', 'servility', 'vanity', 'syntax'] },
          { points: 1, description: 'Connects the pieces of evidence into a coherent line of reasoning about the passage as a whole rather than treating them as isolated observations', keywords: ['line of reasoning', 'together', 'overall', 'whole', 'therefore', 'cumulative'] }
        ],
        sampleAnswer: 'The opening verdict that Collins "was not a sensible man" matters because Austen delivers it in the narrator\'s cool, authoritative voice before Collins has spoken a single word: every subsequent detail — the "illiterate and miserly father," the university years spent "without forming at it any useful acquaintance" — reads as evidence in a case already decided. The closing antithesis then explains why his particular foolishness takes the shape it does: the parallel syntax of "pride and obsequiousness, self-importance and humility" yokes each vanity to its matching servility, suggesting that his groveling before Lady Catherine and his "very good opinion of himself" are not contradictions but twin products of the same weak head. Together, the blunt opening judgment and the tidy closing summary frame the paragraph as a mock-rational audit of a character, so that the passage\'s very orderliness becomes the vehicle of its ridicule.',
      },
      {
        label: '(d)',
        prompt: 'Demonstrate sophistication: identify and explore a complexity, tension, or broader implication in the passage that goes beyond your basic argument.',
        maxPoints: 1,
        rubric: [
          { points: 1, description: 'Identifies and explores a genuine complexity — e.g., the irony that a clergyman\'s "veneration" is directed at aristocratic rank rather than religion, or the satire\'s extension from one man to the patronage system itself', keywords: ['irony', 'complexity', 'tension', 'clergyman', 'rank', 'patronage'] }
        ],
        sampleAnswer: 'The deepest irony is that Collins\'s "veneration" — a word that should describe religious devotion — is directed entirely at Lady Catherine\'s "high rank" rather than at anything sacred, even though he holds "authority as a clergyman." Austen thereby widens the satire beyond one fool: because the "living of Hunsford" was his by "a fortunate chance" of aristocratic favor, the passage quietly indicts a social system in which church positions are dispensed through patronage, so that obsequiousness, not sense or piety, is what the institution actually rewards.',
      }
    ],
    totalPoints: 7,
    timeRecommendation: '~25 minutes',
    calculatorAllowed: false,
  },
  {
    id: 'englit-long-2',
    type: 'long' as const,
    unit: 1,
    title: 'Poetry Analysis: Blake\'s "London"',
    prompt: `The following poem, "London," was written by William Blake and published in Songs of Experience (1794). Read the poem carefully. Then, in the parts below, develop a defensible thesis, support it with specific textual evidence, explain your line of reasoning, and demonstrate a sophisticated understanding of how Blake uses poetic elements and techniques — such as imagery, repetition, and figurative language — to convey the speaker's complex attitude toward the city and its institutions.

I wander thro' each charter'd street,
Near where the charter'd Thames does flow,
And mark in every face I meet
Marks of weakness, marks of woe.

In every cry of every Man,
In every Infant's cry of fear,
In every voice, in every ban,
The mind-forg'd manacles I hear:

How the Chimney-sweeper's cry
Every blackning Church appalls;
And the hapless Soldier's sigh
Runs in blood down Palace walls.

But most thro' midnight streets I hear
How the youthful Harlot's curse
Blasts the new born Infant's tear,
And blights with plagues the Marriage hearse.`,
    parts: [
      {
        label: '(a)',
        prompt: 'State a defensible thesis that presents an interpretation of the speaker\'s attitude toward London and identifies poetic techniques that convey it.',
        maxPoints: 1,
        rubric: [
          { points: 1, description: 'Presents a defensible thesis making an interpretive claim about the speaker\'s attitude and the techniques that convey it, rather than merely paraphrasing the poem', keywords: ['thesis', 'claim', 'attitude', 'speaker', 'repetition', 'imagery', 'indictment'] }
        ],
        sampleAnswer: 'Through the obsessive repetition of "every" and "charter\'d," images that splash the suffering of the powerless directly onto the walls of the institutions that cause it, and the paradoxical metaphor of "mind-forg\'d manacles," Blake\'s speaker conveys an attitude toward London that is not mere pity but indictment: the city\'s misery is manufactured, licensed, and self-perpetuating.',
      },
      {
        label: '(b)',
        prompt: 'Identify TWO specific pieces of textual evidence — quoted words, images, or lines from the poem — that support your thesis.',
        maxPoints: 2,
        rubric: [
          { points: 1, description: 'Quotes or specifically references one relevant detail (e.g., the repeated "charter\'d" applied to both street and Thames, or "mind-forg\'d manacles")', keywords: ['charter\'d', 'manacles', 'every', 'quote', 'image', 'repetition'] },
          { points: 1, description: 'Quotes or specifically references a second, distinct relevant detail (e.g., the Soldier\'s sigh that "Runs in blood down Palace walls" or the closing "Marriage hearse")', keywords: ['Soldier', 'Palace', 'Church', 'Harlot', 'Marriage hearse', 'second'] }
        ],
        sampleAnswer: 'First, the speaker calls both the streets and the river "charter\'d" — even the flowing Thames is legally owned — and hears "mind-forg\'d manacles" in "every cry of every Man." Second, in the third stanza the "hapless Soldier\'s sigh / Runs in blood down Palace walls," an image that paints the cost of state power directly onto the building that commands it.',
      },
      {
        label: '(c)',
        prompt: 'Explain how your evidence supports your thesis. Build a line of reasoning that connects Blake\'s specific poetic choices to the speaker\'s attitude toward the city.',
        maxPoints: 3,
        rubric: [
          { points: 1, description: 'Explains how the first piece of evidence conveys the attitude (e.g., "charter\'d" turns a word of civic liberty into one of ownership, and the "every" litany makes the suffering total)', keywords: ['because', 'charter\'d', 'ownership', 'every', 'litany', 'conveys'] },
          { points: 1, description: 'Explains how the second piece of evidence conveys the attitude (e.g., the synesthetic image of a sigh running as blood assigns responsibility to Palace and Church)', keywords: ['blood', 'Palace', 'Church', 'responsibility', 'institution', 'image'] },
          { points: 1, description: 'Connects the evidence into a coherent line of reasoning about the poem\'s overall progression (e.g., from observation, to sound, to accusation, to the corrupted future)', keywords: ['line of reasoning', 'progression', 'stanza', 'together', 'overall', 'whole'] }
        ],
        sampleAnswer: 'The repetition of "charter\'d" is bitterly ironic because a charter was supposed to guarantee liberty; by applying the word even to the Thames, the speaker suggests that commerce and law have claimed ownership of what should be free as running water. The drumming anaphora of "every" — every face, every cry, every voice, every ban — then makes the suffering total and systematic rather than accidental, and "mind-forg\'d manacles" locates the chains partly in minds, meaning the oppression has been internalized by its victims. The third stanza converts this observation into accusation: the chimney-sweeper\'s cry "appalls" the "blackning Church" that ignores the children it should protect, and the soldier\'s sigh "Runs in blood down Palace walls," a compressed image that makes the state wear the blood it spends. Read as a progression — from what the wandering speaker sees, to what he hears, to the institutions he blames, to the "midnight streets" where the infection reaches marriage and birth itself — the poem\'s structure enacts the thesis that London\'s misery is a closed, self-perpetuating system.',
      },
      {
        label: '(d)',
        prompt: 'Demonstrate sophistication: identify and explore a complexity, tension, or paradox in the poem that goes beyond your basic argument.',
        maxPoints: 1,
        rubric: [
          { points: 1, description: 'Identifies and explores a genuine complexity — e.g., the oxymoron "Marriage hearse," the ambiguity of "mind-forg\'d" (the victims forge their own chains), or the speaker\'s own implication in what he "marks"', keywords: ['paradox', 'oxymoron', 'Marriage hearse', 'mind-forg\'d', 'complexity', 'ambiguity'] }
        ],
        sampleAnswer: 'The poem\'s final phrase, "Marriage hearse," is an oxymoron that fuses the institution meant to generate life with the vehicle of death: the harlot\'s curse — both her oath and the disease she carries — "blights" the marriage bed, so that respectable society and the exploitation it outlaws are revealed as one circulatory system. A further complexity lies in "mind-forg\'d manacles": the chains are forged by minds, including the minds of the oppressed themselves, which darkens the indictment — Blake\'s Londoners are not only shackled by Church and Palace but have learned to shackle themselves.',
      }
    ],
    totalPoints: 7,
    timeRecommendation: '~25 minutes',
    calculatorAllowed: false,
  }
]

const shortFRQs: EngLitFRQ[] = [
  {
    id: 'englit-short-1',
    type: 'short' as const,
    unit: 1,
    title: 'Literary Argument: The Burden of a Secret',
    prompt: `Many works of fiction feature a character who keeps a significant secret — from other characters, from society, or even from himself or herself. The character's struggle to conceal or reveal that secret often shapes the central conflict and meaning of the work.

Either from your own reading or from the list below, choose a work of fiction of literary merit in which a character keeps a significant secret. Then, in the parts below, analyze how the secret and the character's concealment or revelation of it contribute to an interpretation of the work as a whole. Do not merely summarize the plot.

You may wish to consider works such as: The Scarlet Letter, Jane Eyre, Great Expectations, Crime and Punishment, Their Eyes Were Watching God, Beloved, Atonement, The Kite Runner.`,
    parts: [
      {
        label: '(a)',
        prompt: 'State a defensible thesis that identifies your chosen work and makes an interpretive claim about how the character\'s secret contributes to the meaning of the work as a whole.',
        maxPoints: 1,
        rubric: [
          { points: 1, description: 'Presents a defensible thesis naming a specific work and character and making an interpretive claim about the secret\'s contribution to the work\'s meaning, not a plot summary', keywords: ['thesis', 'claim', 'secret', 'work as a whole', 'meaning', 'interpretation'] }
        ],
        sampleAnswer: 'In Nathaniel Hawthorne\'s The Scarlet Letter, Arthur Dimmesdale\'s concealment of his adultery — while Hester Prynne bears their shared sin publicly — allows Hawthorne to argue that hidden guilt is more corrosive than public shame: the secret physically and spiritually destroys the man who keeps it, while open penance slowly transforms the woman who cannot.',
      },
      {
        label: '(b)',
        prompt: 'Provide TWO specific pieces of evidence from your chosen work — particular scenes, details, or moments — that support your thesis.',
        maxPoints: 2,
        rubric: [
          { points: 1, description: 'Provides one specific, accurate piece of evidence from the chosen work (a particular scene or detail, not a generalization)', keywords: ['scene', 'moment', 'specific', 'evidence', 'example', 'chapter'] },
          { points: 1, description: 'Provides a second, distinct specific piece of evidence from the chosen work', keywords: ['second', 'another', 'also', 'later', 'contrast', 'additionally'] }
        ],
        sampleAnswer: 'First, in the midnight scaffold scene, Dimmesdale mounts the very platform of Hester\'s public shaming — but only in darkness, when no one can see him, and his self-flagellation and the "A" he feels burned into his own chest show concealed guilt turning inward as self-torture. Second, Hawthorne contrasts this decay with Hester\'s trajectory: years of open penance transform the meaning of her scarlet letter until townspeople say the "A" stands for "Able," while Dimmesdale can only escape his secret by confessing on the same scaffold in daylight — a revelation that frees him even as it kills him.',
      },
      {
        label: '(c)',
        prompt: 'Explain your line of reasoning: show how your evidence, taken together, supports an interpretation of the work as a whole rather than of isolated scenes.',
        maxPoints: 1,
        rubric: [
          { points: 1, description: 'Connects the evidence into a coherent line of reasoning about the work\'s overall meaning (theme), not just the individual scenes', keywords: ['therefore', 'together', 'work as a whole', 'theme', 'suggests', 'line of reasoning'] }
        ],
        sampleAnswer: 'Taken together, the paired scaffold scenes and the letter\'s changed meaning form the novel\'s moral architecture: the same act of adultery produces redemption when acknowledged and ruin when hidden. The variable Hawthorne isolates is not sin but secrecy. The work as a whole thus indicts a Puritan culture whose punishments make honesty unbearable — Dimmesdale\'s secret persists because his society offers no path between concealment and destruction — turning a story of private guilt into a critique of public moral spectacle.',
      }
    ],
    totalPoints: 4,
    timeRecommendation: '~12 minutes',
    calculatorAllowed: false,
  },
  {
    id: 'englit-short-2',
    type: 'short' as const,
    unit: 1,
    title: 'Poetry Imagery: A Certain Slant of Light',
    prompt: `Read the following poem by Emily Dickinson (first published 1890) carefully, paying particular attention to its pattern of imagery. Then answer the parts below about how Dickinson's imagery conveys the speaker's attitude toward the winter light.

There's a certain Slant of light,
Winter Afternoons —
That oppresses, like the Heft
Of Cathedral Tunes —

Heavenly Hurt, it gives us —
We can find no scar,
But internal difference —
Where the Meanings, are —

None may teach it — Any —
'Tis the Seal Despair —
An imperial affliction
Sent us of the Air —

When it comes, the Landscape listens —
Shadows — hold their breath —
When it goes, 'tis like the Distance
On the look of Death —`,
    parts: [
      {
        label: '(a)',
        prompt: 'Make a defensible claim about how the poem\'s pattern of imagery conveys the speaker\'s attitude toward the winter light.',
        maxPoints: 1,
        rubric: [
          { points: 1, description: 'Presents a defensible interpretive claim connecting the imagery to the speaker\'s attitude, rather than paraphrasing the poem', keywords: ['claim', 'attitude', 'imagery', 'speaker', 'oppresses', 'despair'] }
        ],
        sampleAnswer: 'By repeatedly describing the light through images of weight, wounding, and official power — a "Heft," a "Hurt," a "Seal," an "imperial affliction" — Dickinson conveys a speaker who regards the winter light with dread mixed with reverence: it is an oppressive, almost sacred force that injures the soul invisibly and cannot be resisted or explained.',
      },
      {
        label: '(b)',
        prompt: 'Cite TWO specific images from the poem that support your claim.',
        maxPoints: 1,
        rubric: [
          { points: 1, description: 'Quotes or specifically identifies two distinct images from the poem (e.g., "the Heft / Of Cathedral Tunes" and "Shadows — hold their breath")', keywords: ['Heft', 'Cathedral', 'scar', 'Seal', 'Shadows', 'Distance'] }
        ],
        sampleAnswer: 'Two images that support this claim are the simile comparing the light\'s oppression to "the Heft / Of Cathedral Tunes" in the first stanza, and the personified landscape at the poem\'s close, where "the Landscape listens" and "Shadows — hold their breath" when the light arrives.',
      },
      {
        label: '(c)',
        prompt: 'Explain how the FIRST image you cited supports your claim about the speaker\'s attitude.',
        maxPoints: 1,
        rubric: [
          { points: 1, description: 'Explains the connection between the first image and the claimed attitude (e.g., giving music physical weight and a sacred source fuses reverence with oppression)', keywords: ['because', 'weight', 'sacred', 'oppression', 'reverence', 'conveys'] }
        ],
        sampleAnswer: 'The "Heft / Of Cathedral Tunes" supports the claim because it gives something intangible — light, like music — physical weight that presses down on the listener, and it locates that weight in a cathedral: the very sounds meant to lift the soul become a burden. The image fuses reverence and oppression in a single sensation, establishing the speaker\'s attitude that this light is a spiritual force she must endure rather than enjoy.',
      },
      {
        label: '(d)',
        prompt: 'Explain how the SECOND image you cited supports your claim about the speaker\'s attitude.',
        maxPoints: 1,
        rubric: [
          { points: 1, description: 'Explains the connection between the second image and the claimed attitude (e.g., the personified, breath-holding landscape universalizes the speaker\'s dread)', keywords: ['personification', 'landscape', 'breath', 'dread', 'universal', 'supports'] }
        ],
        sampleAnswer: 'The personification of the listening landscape and the shadows that "hold their breath" supports the claim by projecting the speaker\'s dread onto the entire natural world: even inanimate things fall silent and tense in the light\'s presence, as subjects do before an emperor. That the poem then compares the light\'s departure to "the Distance / On the look of Death" confirms the attitude of awed dread — relief from the light feels not like freedom but like the vacancy in a dead face.',
      }
    ],
    totalPoints: 4,
    timeRecommendation: '~12 minutes',
    calculatorAllowed: false,
  }
]

export const apEngLitFRQs: EngLitFRQ[] = [...longFRQs, ...shortFRQs]

export function getApEngLitFRQs(): EngLitFRQ[] {
  return apEngLitFRQs
}

export function getLongFRQs(): EngLitFRQ[] {
  return longFRQs
}

export function getShortFRQs(): EngLitFRQ[] {
  return shortFRQs
}

export function generateFullExamFRQs(pool: EngLitFRQ[] = apEngLitFRQs): {
  long: EngLitFRQ[]
  short: EngLitFRQ[]
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
    totalTime: '120 min',
  }
}
