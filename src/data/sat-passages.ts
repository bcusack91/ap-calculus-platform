/**
 * SAT Reading Passage Bank
 *
 * Reusable passage library for generating R&W questions.
 * Each passage has a topic, genre, text, and pre-written questions.
 * The Digital SAT uses shorter passages (1 question per passage) — these
 * are designed to match that format.
 */

export interface PassageQuestion {
  question: string
  options: string[]
  correctAnswer: number
  explanation: string
  skill: string
}

export interface ReadingPassage {
  id: string
  title: string
  genre: 'literary' | 'social-science' | 'natural-science' | 'historical'
  text: string
  questions: PassageQuestion[]
}

export const SAT_PASSAGES: ReadingPassage[] = [
  // ─── Literary Fiction ────────────────────────────────────────
  {
    id: 'lit-01',
    title: 'The Garden Wall',
    genre: 'literary',
    text: `Maria pressed her palm flat against the stone wall that divided her
family's property from the abandoned garden next door. The stones were warm
from the afternoon sun, rough beneath her fingers. She had watched through
the cracks as wild blackberry brambles slowly reclaimed the footpaths, as
ivy crept over the wrought-iron bench. Her mother said the garden had once
been the pride of Mr. Harmon, who'd spent every morning there until his
knees gave out. Now, at fifteen, Maria understood something her mother
hadn't said aloud: that the wall wasn't really meant to keep the garden
out — it was meant to keep the sadness in.`,
    questions: [
      {
        question: 'The narrator suggests that Maria\'s understanding of the wall\'s purpose differs from its literal function in that the wall primarily serves to',
        options: [
          'protect the family from dangerous plants',
          'contain the emotional weight of loss and decline',
          'prevent Maria from exploring forbidden territory',
          'mark a legal property boundary between neighbors',
        ],
        correctAnswer: 1,
        explanation: 'The passage\'s final sentence reveals Maria\'s insight: the wall "wasn\'t really meant to keep the garden out — it was meant to keep the sadness in," indicating the wall symbolically contains emotional loss rather than serving a practical barrier function.',
        skill: 'central-ideas',
      },
    ],
  },
  {
    id: 'lit-02',
    title: 'The Letter',
    genre: 'literary',
    text: `James folded the letter into thirds and slid it back into the
envelope. He had read it four times now, and each time the words settled
differently, like sediment in a glass of water. His sister wrote that
their father was "doing well, all things considered" — a phrase James had
learned to decode years ago. It meant things were not well at all, but
that she lacked either the energy or the vocabulary to say so plainly.
He placed the letter on the kitchen counter, anchoring it beneath the
salt shaker, and stared out the window at the dark line of pines.`,
    questions: [
      {
        question: 'Based on the passage, James\'s response to the letter is best described as',
        options: [
          'relieved by the positive news about his father',
          'resigned to an unspoken reality behind polite language',
          'angry at his sister for withholding information',
          'confused about the meaning of his sister\'s words',
        ],
        correctAnswer: 1,
        explanation: 'James has "learned to decode" the phrase "doing well, all things considered" as meaning things are not well. His multiple readings and quiet staring suggest resignation rather than confusion, anger, or relief.',
        skill: 'inference',
      },
    ],
  },
  {
    id: 'lit-03',
    title: 'Crossing the Bridge',
    genre: 'literary',
    text: `On the first day of her new commute, Elena noticed how the
pedestrian bridge swayed underfoot when the wind picked up. By the second
week she stopped noticing. By the sixth month she could cross it while
reading her phone, coffee in hand, without once looking at the river
forty feet below. It occurred to her, one morning when she did look down,
that this was how most adaptation worked: the remarkable became invisible,
and the frightening became mundane. She wondered what else she had stopped
seeing.`,
    questions: [
      {
        question: 'The primary purpose of the passage is to',
        options: [
          'describe the engineering of a pedestrian bridge',
          'illustrate how habituation can lead to a loss of awareness',
          'argue that commuting by foot is dangerous',
          'compare urban and rural walking experiences',
        ],
        correctAnswer: 1,
        explanation: 'The passage uses Elena\'s experience crossing the bridge to illustrate a broader point: adaptation makes "the remarkable invisible" and "the frightening mundane," causing people to stop noticing things — a meditation on habituation and awareness.',
        skill: 'central-ideas',
      },
    ],
  },

  // ─── Social Science ──────────────────────────────────────────
  {
    id: 'soc-01',
    title: 'The Anchoring Effect',
    genre: 'social-science',
    text: `Psychologists Daniel Kahneman and Amos Tversky demonstrated in
a 1974 study that people rely heavily on the first piece of information
they encounter — the "anchor" — when making subsequent judgments. In one
experiment, participants spun a rigged wheel that landed on either 10 or
65, then estimated the percentage of African countries in the United
Nations. Those who saw 65 gave estimates averaging 45%, while those who
saw 10 averaged just 25%. The wheel's number was entirely irrelevant,
yet it shifted answers by 20 percentage points. This anchoring effect
persists even when people are warned about it, suggesting that the bias
operates below conscious awareness.`,
    questions: [
      {
        question: 'According to the passage, which finding most directly supports the claim that anchoring operates "below conscious awareness"?',
        options: [
          'Participants gave different estimates depending on the number they saw.',
          'The wheel\'s number had no logical connection to the question asked.',
          'The anchoring effect persists even when people are warned about it.',
          'Kahneman and Tversky conducted the study in 1974.',
        ],
        correctAnswer: 2,
        explanation: 'The passage explicitly states the bias "persists even when people are warned about it," which directly supports the claim that anchoring operates below conscious awareness — if people could consciously override it, warnings would reduce the effect.',
        skill: 'command-of-evidence',
      },
    ],
  },
  {
    id: 'soc-02',
    title: 'Language and Thought',
    genre: 'social-science',
    text: `The Sapir-Whorf hypothesis, in its strong form, proposes that
the language a person speaks determines the categories of thought
available to them. While this strong version has largely been abandoned,
a weaker version — that language influences but does not determine
thinking — has gained empirical support. For instance, speakers of
Guugu Yimithirr, an Aboriginal Australian language, use absolute
cardinal directions (north, south, east, west) rather than relative
terms like "left" and "right." Studies show these speakers maintain an
internal compass and outperform English speakers on spatial orientation
tasks — evidence that linguistic habits can shape cognitive abilities.`,
    questions: [
      {
        question: 'The author mentions Guugu Yimithirr speakers primarily to',
        options: [
          'argue that the strong Sapir-Whorf hypothesis is correct',
          'provide evidence supporting the weaker version of the hypothesis',
          'criticize English speakers\' spatial abilities',
          'demonstrate that all languages are equally expressive',
        ],
        correctAnswer: 1,
        explanation: 'The Guugu Yimithirr example is introduced after the author states the weaker version "has gained empirical support." The example shows how linguistic habits (cardinal directions vs. relative terms) shape cognitive abilities — supporting the weaker form, not the strong deterministic version.',
        skill: 'function-of-evidence',
      },
    ],
  },
  {
    id: 'soc-03',
    title: 'The Bystander Effect',
    genre: 'social-science',
    text: `Contrary to popular belief, the widely reported story that 38
witnesses watched the 1964 murder of Kitty Genovese without intervening
has been substantially challenged by later reporting. The original New
York Times article exaggerated both the number of witnesses and their
passive response. Nevertheless, the story catalyzed important research
into what social psychologists now call the "bystander effect" — the
phenomenon in which individuals are less likely to help a victim when
other people are present. Researchers Darley and Latané demonstrated
this effect experimentally in 1968, showing that participants who
believed they were the only witness to a seizure helped 85% of the
time, compared to 31% when they thought four others were also listening.`,
    questions: [
      {
        question: 'Which choice best describes the structure of the passage?',
        options: [
          'A theory is proposed and then experimentally refuted.',
          'A popular narrative is corrected, but its scientific legacy is acknowledged.',
          'Two competing scientific interpretations are compared.',
          'A historical event is described in chronological order.',
        ],
        correctAnswer: 1,
        explanation: 'The passage first challenges the popular Genovese story ("has been substantially challenged"), then acknowledges that despite the story\'s inaccuracy, it "catalyzed important research" — correcting the narrative while recognizing its scientific impact.',
        skill: 'text-structure',
      },
    ],
  },

  // ─── Natural Science ─────────────────────────────────────────
  {
    id: 'sci-01',
    title: 'Mycorrhizal Networks',
    genre: 'natural-science',
    text: `Beneath forest floors, vast networks of mycorrhizal fungi form
symbiotic relationships with tree roots. Through these networks, trees
exchange not only nutrients but also chemical signals. Ecologist Suzanne
Simard demonstrated that carbon flows between Douglas fir and paper
birch trees through shared fungal connections, with the direction of
flow shifting seasonally: birch trees receive more carbon in summer when
they are shaded by the larger firs, while firs receive more in autumn
after birches shed their leaves. Simard has argued that these so-called
"wood-wide webs" challenge the traditional view of forests as
collections of competing individuals, suggesting instead that forests
function more like cooperative communities.`,
    questions: [
      {
        question: 'The passage most strongly suggests that mycorrhizal networks challenge traditional ecological models because they',
        options: [
          'allow all tree species to photosynthesize equally',
          'enable resource sharing that counters a purely competitive view of forest ecology',
          'prevent trees from competing for sunlight',
          'are found only in forests with Douglas fir trees',
        ],
        correctAnswer: 1,
        explanation: 'The passage states these networks "challenge the traditional view of forests as collections of competing individuals" by showing resource sharing (carbon exchange) between trees — suggesting cooperation rather than pure competition.',
        skill: 'central-ideas',
      },
    ],
  },
  {
    id: 'sci-02',
    title: 'CRISPR Gene Editing',
    genre: 'natural-science',
    text: `CRISPR-Cas9 technology repurposes a natural bacterial defense
mechanism to edit genes with unprecedented precision. Bacteria use CRISPR
sequences to store fragments of viral DNA they have encountered, creating
a molecular "memory" that allows them to recognize and destroy those
viruses in future encounters. Scientists Jennifer Doudna and Emmanuelle
Charpentier demonstrated in 2012 that this system could be reprogrammed
to cut any DNA sequence by supplying a custom guide RNA. The technique's
simplicity and low cost have democratized genetic research — a CRISPR
experiment that once would have required millions of dollars in equipment
can now be performed for under a hundred.`,
    questions: [
      {
        question: 'As used in the passage, "democratized" most nearly means',
        options: [
          'subjected to political oversight',
          'made accessible to a wider range of researchers',
          'improved through public voting',
          'distributed through government funding',
        ],
        correctAnswer: 1,
        explanation: 'In context, "democratized" refers to making genetic research accessible to many more researchers due to CRISPR\'s "simplicity and low cost" — reducing the financial barrier from millions of dollars to under a hundred.',
        skill: 'vocabulary-in-context',
      },
    ],
  },
  {
    id: 'sci-03',
    title: 'Ocean Acidification',
    genre: 'natural-science',
    text: `Since the beginning of the Industrial Revolution, the ocean has
absorbed approximately 30% of anthropogenic carbon dioxide emissions.
While this uptake slows the pace of atmospheric warming, it comes at
a cost: dissolved CO₂ reacts with seawater to form carbonic acid,
lowering the ocean's pH. Ocean surface waters have already become about
26% more acidic compared to preindustrial levels. This acidification
particularly threatens organisms that build calcium carbonate shells
or skeletons — including corals, oysters, and certain plankton species.
Laboratory studies show that under projected end-of-century pH levels,
juvenile oysters' shell growth rates decline by 16%, and some coral
species fail to calcify entirely.`,
    questions: [
      {
        question: 'The data about juvenile oysters and corals in the final sentence primarily serves to',
        options: [
          'demonstrate that all marine life is equally affected by acidification',
          'quantify the biological consequences of the chemical process described earlier',
          'argue that oyster farming should be regulated',
          'compare the resilience of different marine species',
        ],
        correctAnswer: 1,
        explanation: 'The passage moves from the chemistry of acidification (CO₂ → carbonic acid → lower pH) to specific biological impacts (16% decline in shell growth, failure to calcify). The data provides concrete, quantified evidence of the biological consequences of the chemical process.',
        skill: 'function-of-evidence',
      },
    ],
  },

  // ─── Historical / Political ──────────────────────────────────
  {
    id: 'hist-01',
    title: 'Frederick Douglass on Education',
    genre: 'historical',
    text: `In his 1845 autobiography, Frederick Douglass recounts the
moment his enslaver, Hugh Auld, forbade Auld's wife from teaching
Douglass to read. Auld declared that literacy would make an enslaved
person "unfit" for bondage and "forever unfit him to be a slave."
Douglass writes that this prohibition paradoxically revealed the very
pathway to freedom: "From that moment, I understood the pathway from
slavery to freedom." Rather than discouraging him, Auld's words
confirmed that education was the instrument his enslavers most feared —
and therefore the one most worth pursuing.`,
    questions: [
      {
        question: 'The phrase "paradoxically revealed" in the passage most directly conveys the idea that',
        options: [
          'Auld deliberately helped Douglass by revealing the importance of literacy',
          'the attempt to suppress education inadvertently motivated Douglass to pursue it',
          'Douglass was confused by Auld\'s prohibition',
          'education was universally available in the 1840s',
        ],
        correctAnswer: 1,
        explanation: 'The paradox is that Auld\'s prohibition — intended to prevent Douglass from learning to read — actually revealed to Douglass that education was "the instrument his enslavers most feared," motivating him to pursue it. The attempt to suppress had the opposite of its intended effect.',
        skill: 'vocabulary-in-context',
      },
    ],
  },
  {
    id: 'hist-02',
    title: 'The Federalist No. 10',
    genre: 'historical',
    text: `In Federalist No. 10, James Madison argues that the greatest
threat to republican government is the "violence of faction" — groups of
citizens united by a shared interest adverse to the rights of others or
to the common good. Madison contends that factions cannot be eliminated
without destroying liberty itself, since they arise naturally from the
diversity of human opinions and interests. Instead, Madison proposes that
a large republic is the best remedy: in a larger political community, the
sheer number of competing interests makes it difficult for any single
faction to form a majority and impose its will on the rest.`,
    questions: [
      {
        question: 'According to Madison as presented in the passage, why can factions not be eliminated?',
        options: [
          'The Constitution explicitly protects the right to form factions.',
          'They are a natural consequence of liberty and diverse human opinions.',
          'Large republics inevitably produce more factions than small ones.',
          'Political leaders benefit from maintaining factional divisions.',
        ],
        correctAnswer: 1,
        explanation: 'The passage states that factions "arise naturally from the diversity of human opinions and interests" and that eliminating them would require "destroying liberty itself" — making them an inherent byproduct of freedom and human diversity.',
        skill: 'explicit-information',
      },
    ],
  },
  {
    id: 'hist-03',
    title: 'Rachel Carson\'s Warning',
    genre: 'historical',
    text: `When marine biologist Rachel Carson published "Silent Spring" in
1962, the chemical industry mounted an immediate and aggressive campaign
to discredit both her science and her character. One industry spokesman
called her "a hysterical woman," while a review funded by a pesticide
manufacturer dismissed the book as "more poisonous than the pesticides
she condemns." Despite this opposition, Carson's careful documentation
of DDT's effects on bird populations and human health led directly to
the creation of the Environmental Protection Agency in 1970 and a
nationwide ban on DDT in 1972. Her work is now widely credited with
launching the modern environmental movement.`,
    questions: [
      {
        question: 'The passage most strongly implies that the chemical industry\'s response to Carson',
        options: [
          'successfully prevented environmental regulation for decades',
          'was characterized by personal attacks rather than substantive scientific rebuttal',
          'led Carson to retract her findings',
          'was widely supported by the scientific community',
        ],
        correctAnswer: 1,
        explanation: 'The industry response described — calling Carson "a hysterical woman" and dismissing the book with hyperbole — consists of personal attacks and ad hominem arguments rather than substantive scientific counterevidence. The passage contrasts this with Carson\'s "careful documentation."',
        skill: 'inference',
      },
    ],
  },

  // ─── Additional Science ──────────────────────────────────────
  {
    id: 'sci-04',
    title: 'The Microbiome',
    genre: 'natural-science',
    text: `The human body harbors an estimated 38 trillion microorganisms —
roughly equal to the number of human cells. This microbial community,
concentrated primarily in the gut, does far more than simply digest food.
Recent research has identified a "gut-brain axis" through which intestinal
bacteria communicate with the central nervous system via the vagus nerve,
immune signaling molecules, and microbial metabolites. Studies in germ-
free mice — animals raised without any microorganisms — show altered
stress responses, impaired memory, and abnormal social behavior,
suggesting that a healthy microbiome may be essential for normal brain
development and function.`,
    questions: [
      {
        question: 'The reference to germ-free mice serves primarily to',
        options: [
          'demonstrate that mice and humans have identical microbiomes',
          'provide experimental evidence that microorganisms influence brain function',
          'show that germ-free environments are healthier for animals',
          'explain the mechanism of the vagus nerve',
        ],
        correctAnswer: 1,
        explanation: 'The germ-free mice (raised without microorganisms) show "altered stress responses, impaired memory, and abnormal social behavior" — experimental evidence that the absence of a microbiome affects brain function, supporting the gut-brain axis concept.',
        skill: 'command-of-evidence',
      },
    ],
  },
  {
    id: 'sci-05',
    title: 'Dark Matter Evidence',
    genre: 'natural-science',
    text: `Astronomer Vera Rubin's observations of galaxy rotation in the
1970s provided some of the most compelling evidence for dark matter. She
found that stars at the outer edges of spiral galaxies orbit at roughly
the same speed as stars near the center — a result that contradicted
predictions based on visible matter alone. According to Newtonian
mechanics, stars farther from a galaxy's center should orbit more slowly,
just as outer planets in our solar system orbit the Sun more slowly than
inner ones. The flat rotation curves Rubin observed implied that galaxies
contain substantially more mass than is visible, distributed in a
spherical halo extending well beyond the luminous disk.`,
    questions: [
      {
        question: 'The author\'s reference to planets in our solar system primarily serves to',
        options: [
          'argue that dark matter also exists within our solar system',
          'clarify the expected result by providing a familiar analogy',
          'prove that Newtonian mechanics is incorrect',
          'compare the size of galaxies to the solar system',
        ],
        correctAnswer: 1,
        explanation: 'The solar system analogy (outer planets orbit more slowly than inner ones) illustrates what Newtonian mechanics predicts should happen in galaxies — providing a familiar reference point to help readers understand why Rubin\'s flat rotation curves were unexpected and significant.',
        skill: 'function-of-evidence',
      },
    ],
  },
]

/**
 * Get a random passage of a given genre.
 */
export function getPassageByGenre(genre: ReadingPassage['genre']): ReadingPassage | undefined {
  const matching = SAT_PASSAGES.filter(p => p.genre === genre)
  if (matching.length === 0) return undefined
  return matching[Math.floor(Math.random() * matching.length)]
}

/**
 * Get a random passage of any genre.
 */
export function getRandomPassage(): ReadingPassage {
  return SAT_PASSAGES[Math.floor(Math.random() * SAT_PASSAGES.length)]
}

/**
 * Get N random non-repeating passages.
 */
export function getPassages(count: number): ReadingPassage[] {
  const shuffled = [...SAT_PASSAGES].sort(() => Math.random() - 0.5)
  return shuffled.slice(0, Math.min(count, shuffled.length))
}
