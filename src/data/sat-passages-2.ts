/**
 * SAT Reading Passage Bank, part 2: 20 Craft & Structure passages.
 *
 * Digital SAT format: one short passage with exactly one question.
 *   cs-01..cs-08  Words in Context          (skill 'vocabulary-in-context')
 *   cs-09..cs-14  Text Structure and Purpose (skill 'craft-and-structure')
 *   cs-15..cs-20  Cross-Text Connections     (skill 'craft-and-structure')
 *
 * Underlined text on the real exam is shown here in [square brackets], and the
 * question quotes the bracketed sentence.
 */
import type { ReadingPassage } from './sat-passages'

export const SAT_PASSAGES_2: ReadingPassage[] = [
  // ─── Words in Context ──────────────────────────────────────────────────────
  {
    id: 'cs-01',
    title: 'The Clockmaker',
    genre: 'literary',
    text: `For forty years Tomás had repaired clocks in a narrow shop on Calle Ruiz, and his customers knew him as a man of few words. When a widow brought in her late husband’s pocket watch, its crystal cracked and its hands stopped at a quarter past six, Tomás turned it over in his palm for a long moment. He made no promise that it would run again; he said only that he would handle it with care. The widow, who had braced herself for a brisk estimate and a hurried goodbye, found his reticence unexpectedly ______.`,
    questions: [
      {
        question: 'Which choice completes the text with the most logical and precise word or phrase?',
        options: ['evasive', 'presumptuous', 'consoling', 'rehearsed'],
        correctAnswer: 2,
        explanation: 'The widow had “braced herself” for brisk, impersonal treatment, so the missing word must name a welcome surprise; Tomás’s long, careful attention to her husband’s watch and his refusal to make easy promises would strike her as consoling. “Evasive” misreads his restraint as dodging her, but the text presents his silence as respectful, and an evasive answer would not be a pleasant contrast to what she dreaded. “Presumptuous” implies overstepping, but Tomás pointedly avoids promising more than he can deliver. “Rehearsed” conflicts with the long, considered pause before he speaks, which signals a genuine rather than practiced response.',
        skill: 'vocabulary-in-context',
      },
    ],
  },
  {
    id: 'cs-02',
    title: 'Third Places',
    genre: 'social-science',
    text: `Sociologist Ray Oldenburg argued that healthy communities depend on “third places”: cafés, barbershops, and other informal gathering spots distinct from home and the workplace. Such places, he wrote, act as levelers. Patrons who differ sharply in income or occupation meet there on roughly equal footing, and lively conversation, rather than wealth or rank, becomes the main currency of social life. Some later observers have questioned whether coffee shops full of customers working silently on laptops still serve this function.`,
    questions: [
      {
        question: 'As used in the text, what does the word “currency” most nearly mean?',
        options: ['means of exchange', 'cash payment', 'widespread use', 'current relevance'],
        correctAnswer: 0,
        explanation: 'The text says that in third places conversation, “rather than wealth or rank,” is what people trade with one another and what earns standing, so “currency” means a means of exchange. “Cash payment” is the literal, monetary sense of the word, but the sentence contrasts conversation with wealth rather than describing money. “Widespread use” reflects the sense in which an idea “gains currency,” which does not fit a sentence about what patrons exchange. “Current relevance” draws on the sense of being current, which has nothing to do with how status works in these gathering places.',
        skill: 'vocabulary-in-context',
      },
    ],
  },
  {
    id: 'cs-03',
    title: 'Tardigrade Dormancy',
    genre: 'natural-science',
    text: `When their surroundings dry out, many tardigrades—microscopic animals common in moss, lichens, and soil—can enter a state called anhydrobiosis. They lose nearly all of their body water, and their metabolism is arrested, slowing until it is virtually undetectable. In this condition some tardigrades survive for years; when water returns, they rehydrate and resume normal activity. Researchers have found evidence that proteins unique to tardigrades help form a protective, glasslike or gel-like matrix as the animals dry, stabilizing delicate cellular structures until conditions improve.`,
    questions: [
      {
        question: 'As used in the text, what does the word “arrested” most nearly mean?',
        options: ['detained', 'engaged', 'overturned', 'suspended'],
        correctAnswer: 3,
        explanation: 'The tardigrade’s metabolism slows “until it is virtually undetectable” and then resumes when water returns, so “arrested” means suspended: brought nearly to a halt for a time. “Detained” is the legal sense of the word, as when police arrest a person, which does not apply to a bodily process. “Engaged” reflects the sense of attention being arrested, or caught, which also does not describe metabolism. “Overturned” misreads the process: metabolism is paused and later restarted, not undone or reversed.',
        skill: 'vocabulary-in-context',
      },
    ],
  },
  {
    id: 'cs-04',
    title: 'The End of the Pony Express',
    genre: 'historical',
    text: `The Pony Express, which carried mail on horseback between Missouri and California, began operating in April 1860 and could move a letter nearly 2,000 miles in about ten days. Its riders became legends, but the service struggled financially from the start. In October 1861, workers completed the first transcontinental telegraph line, which could send a message across the continent in minutes, and the Pony Express announced its closing just days later. The enterprise had been ______ almost as soon as it had proven that rapid overland communication was possible.`,
    questions: [
      {
        question: 'Which choice completes the text with the most logical and precise word or phrase?',
        options: ['vindicated', 'eclipsed', 'replicated', 'subsidized'],
        correctAnswer: 1,
        explanation: 'The telegraph did in minutes what the Pony Express did in days, and the service closed right after the line was finished, so the enterprise had been eclipsed: overshadowed and made obsolete by something newer and better. “Vindicated” may seem to fit because the service proved fast overland communication possible, but the sentence stresses how quickly its usefulness ended, not that it was proven right. “Replicated” is unsupported, since the telegraph was a different technology rather than a copy of mail delivery on horseback. “Subsidized” is unsupported: the text mentions only the service’s financial struggles, and nothing about outside support fits a sentence about the service being made obsolete.',
        skill: 'vocabulary-in-context',
      },
    ],
  },
  {
    id: 'cs-05',
    title: 'How Interesting',
    genre: 'literary',
    text: `Aunt Rosalind never raised her voice at the dinner table; she had subtler instruments. When Paul announced that he was leaving law school to apprentice with a furniture maker, she set down her fork, touched her napkin to her lips, and said, “How interesting.” The words themselves were mild. But she let a pause follow them—a long, level pause—and in that silence Paul heard every objection she had decided not to voice.`,
    questions: [
      {
        question: 'As used in the text, what does the word “level” most nearly mean?',
        options: ['horizontal', 'unwavering', 'impartial', 'truthful'],
        correctAnswer: 1,
        explanation: 'Rosalind controls her reactions with “subtler instruments” than a raised voice, and her pause is long and steady, with no break in her composure, so “level” means unwavering. “Horizontal” is the physical sense of the word, as in a level surface, which cannot describe a pause. “Impartial” reflects the sense of fairness in a “level playing field,” but the pause is full of objections, so it is anything but neutral. “Truthful” reflects the idiom “to be level with someone,” yet the text stresses the steadiness of her silence, not whether she is being honest.',
        skill: 'vocabulary-in-context',
      },
    ],
  },
  {
    id: 'cs-06',
    title: 'Desire Paths',
    genre: 'social-science',
    text: `Planners use the term “desire path” for the strip of worn ground that forms where pedestrians repeatedly cut across a lawn instead of following a paved walkway. Some treat such paths as a nuisance to be fenced off or blocked with shrubs. Others regard them as unusually ______ data: an unsolicited record, left by people who were never surveyed, of the routes they actually prefer. Some universities are reported to have waited for desire paths to appear before deciding where to lay new sidewalks.`,
    questions: [
      {
        question: 'Which choice completes the text with the most logical and precise word or phrase?',
        options: ['deliberate', 'superfluous', 'fabricated', 'revealing'],
        correctAnswer: 3,
        explanation: 'The colon explains the missing word: desire paths are an unprompted record of “the routes they actually prefer,” information that shows planners something true about behavior, so the data are revealing. Universities waiting for such paths before paving confirms that the paths disclose useful information. “Deliberate” conflicts with the description of the record as “unsolicited” and left by people “never surveyed”; walkers choose shortcuts, but they do not intend to supply data. “Superfluous” contradicts the point that the paths show something planners would not otherwise know. “Fabricated” contradicts the claim that the paths reflect where people actually walk.',
        skill: 'vocabulary-in-context',
      },
    ],
  },
  {
    id: 'cs-07',
    title: 'Lichens as Indicators',
    genre: 'natural-science',
    text: `A lichen looks like a single organism, but it is a partnership between a fungus and a photosynthetic partner, usually an alga or a cyanobacterium. The fungus provides structure and absorbs water and minerals, while its partner supplies sugars. Because lichens take in much of what they need directly from air and rain, many species are highly sensitive to airborne pollutants such as sulfur dioxide. For this reason, ecologists have long used the presence or absence of particular lichens to ______ air quality in a region.`,
    questions: [
      {
        question: 'Which choice completes the text with the most logical and precise word or phrase?',
        options: ['monitor', 'purify', 'regulate', 'stabilize'],
        correctAnswer: 0,
        explanation: 'Sensitive lichens disappear where pollution is heavy, so ecologists can read their “presence or absence” as a sign of conditions, which means they use lichens to monitor air quality. “Purify” implies that lichens clean the air, but the text presents their sensitivity to pollutants as a weakness, not a way of removing them. “Regulate” implies that lichens control air quality, but they only respond to it. “Stabilize” implies lichens keep air quality steady, but the text shows only that they respond to it.',
        skill: 'vocabulary-in-context',
      },
    ],
  },
  {
    id: 'cs-08',
    title: 'Reading the Hieroglyphs',
    genre: 'historical',
    text: `For centuries after Egyptian hieroglyphs fell out of use, many European scholars assumed that each sign stood for an idea rather than a sound. The Rosetta Stone, found in 1799, carried the same decree in hieroglyphic, Demotic, and ancient Greek scripts, yet even with the Greek as a guide, progress was slow. In 1822 Jean-François Champollion showed that many hieroglyphs represented sounds, overturning the prevailing view. His knowledge of Coptic, a late form of the Egyptian language, allowed him to test his readings against real Egyptian words.`,
    questions: [
      {
        question: 'As used in the text, what does the word “prevailing” most nearly mean?',
        options: ['victorious', 'well-argued', 'widely held', 'official'],
        correctAnswer: 2,
        explanation: 'The view that Champollion overturned was the assumption shared by “many European scholars” for centuries, so “prevailing” means widely held. “Victorious” reflects the sense of prevailing in a contest, but the text describes a common assumption, not the winner of a debate, and the view was in fact defeated. “Well-argued” suggests the view was supported by strong reasoning, yet the text calls it an assumption that proved wrong. “Official” suggests the view had been formally endorsed by some authority, but the text describes only an assumption shared by many scholars.',
        skill: 'vocabulary-in-context',
      },
    ],
  },

  // ─── Text Structure and Purpose ────────────────────────────────────────────
  {
    id: 'cs-09',
    title: 'The Fire Tower',
    genre: 'literary',
    text: `Every summer the Vance family rented the same cottage on Lake Ardis, and every summer, on the first evening, Nora’s father announced that this year they would finally hike to the fire tower on the far ridge. [They never did.] There was always a reason—rain, a sprained ankle, a cousin’s surprise visit—and by August the plan had become a joke that only her father didn’t laugh at. Years later, standing alone at the foot of the ridge with his old compass in her pocket, Nora understood that the hike had never been the point. The announcement had.`,
    questions: [
      {
        question: 'Which choice best describes the function of the bracketed sentence (“They never did.”) in the text as a whole?',
        options: [
          'It suggests that the family grew tired of returning to the same cottage each year.',
          'It establishes a pattern of unfulfilled plans that the final sentences reinterpret.',
          'It introduces a conflict between Nora and her father that the text later resolves.',
          'It reveals that Nora’s father was physically unable to complete a demanding hike.',
        ],
        correctAnswer: 1,
        explanation: 'The short sentence reveals that the yearly promise always went unkept, and the rest of the text builds on that pattern until Nora realizes that the announcement itself, not the hike, was what mattered, which recasts the failure in a new light. Nothing suggests the family tired of the cottage; they return “every summer.” The reasons for skipping the hike include rain and a visiting cousin, so the text does not attribute the failure to her father’s physical limits. No conflict between Nora and her father is presented; the joke is gentle, and her later insight is an understanding, not the resolution of a dispute.',
        skill: 'craft-and-structure',
      },
    ],
  },
  {
    id: 'cs-10',
    title: 'Weak Ties',
    genre: 'social-science',
    text: `In research published in the early 1970s, sociologist Mark Granovetter surveyed professional, technical, and managerial workers in Newton, a Boston suburb, who had recently changed jobs, asking how they had found their current positions. One might expect close friends and relatives to be the best sources of job leads, since they are the most motivated to help. Yet among people who had learned of their positions through a personal contact, most had heard about the job from someone they saw only occasionally or rarely. Granovetter reasoned that close friends tend to move in the same circles and know the same things, whereas acquaintances link a person to unfamiliar social networks and thus to new information.`,
    questions: [
      {
        question: 'Which choice best states the main purpose of the text?',
        options: [
          'To argue that job seekers should cultivate acquaintances rather than close friendships',
          'To describe the survey methods Granovetter used to study workers in a Boston suburb',
          'To present a finding that contradicts a common assumption and offer an explanation for it',
          'To show that close friends and relatives are usually unwilling to share job information',
        ],
        correctAnswer: 2,
        explanation: 'The text sets up an intuitive expectation (“One might expect…”), reports a result that runs against it (“Yet…”), and ends with Granovetter’s reasoning about why acquaintances matter, so its purpose is to present a surprising finding and explain it. It never advises job seekers to choose acquaintances over friends, so the advice reading goes beyond the text. Survey methods are mentioned only in passing and are not the focus. The text grants that close contacts are “the most motivated to help”; it attributes their limited usefulness to overlapping knowledge, not to unwillingness.',
        skill: 'craft-and-structure',
      },
    ],
  },
  {
    id: 'cs-11',
    title: 'Buzz Pollination',
    genre: 'natural-science',
    text: `Many flowers offer pollen openly, but blueberry, eggplant, and tomato flowers hold theirs inside enclosed anthers that release it only through small openings. To get at the pollen, a bumblebee grips the flower and vibrates its flight muscles rapidly without flapping its wings, shaking the grains loose. [Honeybees, the pollinators most widely managed by farmers, do not perform this behavior.] As a result, many greenhouse tomato growers buy commercially reared bumblebee colonies, which pollinate their crops far more effectively than honeybees do.`,
    questions: [
      {
        question: 'Which choice best describes the function of the bracketed sentence (“Honeybees, the pollinators most widely managed by farmers, do not perform this behavior.”) in the text as a whole?',
        options: [
          'It identifies a limitation that helps explain the practice described in the next sentence.',
          'It offers evidence that honeybees are less valuable to agriculture overall than bumblebees are.',
          'It introduces a second method by which insects are able to release pollen from enclosed anthers.',
          'It explains why some flowers evolved anthers that release pollen only through small openings.',
        ],
        correctAnswer: 0,
        explanation: 'By noting that honeybees cannot shake pollen loose the way bumblebees do, the sentence sets up the next one, which begins “As a result” and explains why tomato growers buy bumblebee colonies. The claim about agriculture overall is too broad: the text compares the two bees only on flowers like tomatoes, and it calls honeybees the most widely managed pollinators. The sentence describes something honeybees do not do, so it cannot introduce another pollen-release method. The text never discusses how or why these anthers evolved.',
        skill: 'craft-and-structure',
      },
    ],
  },
  {
    id: 'cs-12',
    title: 'The Great Stink',
    genre: 'historical',
    text: `In the hot summer of 1858, the stench rising from the Thames, which then received much of London’s untreated sewage, grew so overpowering that members of Parliament, whose chamber stood on the riverbank, discussed moving elsewhere. The episode, dubbed the Great Stink, accomplished what years of deadly cholera outbreaks had not: within weeks, lawmakers approved funding for engineer Joseph Bazalgette’s plan for a vast sewer network to carry waste away from the city center. Many officials then believed that cholera spread through foul air, so the sewers were meant chiefly to banish odors. Yet by carrying sewage downstream, away from the places where Londoners drew their drinking water, they also helped end the city’s cholera epidemics.`,
    questions: [
      {
        question: 'Which choice best states the main purpose of the text?',
        options: [
          'To argue that Victorian officials were negligent in ignoring evidence about how cholera spread',
          'To claim that the Great Stink harmed Londoners’ health more severely than cholera had',
          'To describe the engineering methods Joseph Bazalgette used to construct London’s new sewers',
          'To explain how a crisis prompted a public project whose benefits exceeded its builders’ aims',
        ],
        correctAnswer: 3,
        explanation: 'The text traces how the Great Stink spurred funding for Bazalgette’s sewers, then notes that sewers meant “chiefly to banish odors” also helped end cholera epidemics, a benefit beyond what their backers intended. It reports officials’ mistaken belief about foul air but never condemns them as negligent. It names Bazalgette’s plan without describing any engineering methods. It says the smell prompted action that cholera had not, which concerns political impact, not a comparison of health harms.',
        skill: 'craft-and-structure',
      },
    ],
  },
  {
    id: 'cs-13',
    title: 'The Wings',
    genre: 'literary',
    text: `Before the performance, the theater was a place of small, ordinary noises: a program rustling, a seat hinge creaking, someone two rows back unwrapping a cough drop with agonizing slowness. Isabel, waiting in the wings, catalogued each sound as if it might be the last thing she heard before forgetting her lines. Then the house lights dimmed, and the noises did not stop so much as dissolve, one into another, until the silence they left behind seemed to lean toward the stage, waiting for her.`,
    questions: [
      {
        question: 'Which choice best states the main purpose of the text?',
        options: [
          'To criticize audience members whose careless behavior disrupts live performances',
          'To explain why Isabel often forgets her lines during especially important performances',
          'To show the audience growing restless and impatient as the start of a performance is delayed',
          'To convey a shift from a character’s anxious attention to noise to a hushed, expectant silence',
        ],
        correctAnswer: 3,
        explanation: 'The text moves from Isabel’s nervous cataloguing of every small sound to the moment the noises “dissolve” into a silence that seems to lean toward the stage, “waiting for her,” so it conveys a shift from her anxious attention to small sounds to a hushed, expectant silence in the house. The audience noises are described as “ordinary,” not condemned. Isabel fears forgetting her lines, but the text never says she often does, let alone why. Nothing indicates a delay or impatience; the noises are “ordinary” and simply fade when the lights dim.',
        skill: 'craft-and-structure',
      },
    ],
  },
  {
    id: 'cs-14',
    title: 'Life at the Vents',
    genre: 'natural-science',
    text: `Before 1977, biologists generally assumed that nearly every ecosystem depended ultimately on sunlight captured through photosynthesis. That year, scientists using the submersible Alvin to explore the Galápagos Rift in the Pacific Ocean found dense communities of clams, mussels, and giant tube worms clustered around hydrothermal vents roughly 2,500 meters below the surface, far beyond the reach of light. [How these animals obtained food was at first a puzzle.] Researchers eventually determined that microbes at the vents draw energy from chemical compounds such as hydrogen sulfide, producing organic matter through a process called chemosynthesis.`,
    questions: [
      {
        question: 'Which choice best describes the function of the bracketed sentence (“How these animals obtained food was at first a puzzle.”) in the text as a whole?',
        options: [
          'It casts doubt on the claim that the vent animals lived beyond the reach of sunlight.',
          'It indicates that the source of the vent animals’ food remains unknown to scientists.',
          'It raises a problem that the finding described in the final sentence resolves.',
          'It explains why biologists had assumed that ecosystems depend on photosynthesis.',
        ],
        correctAnswer: 2,
        explanation: 'Because the vent communities lived where no light reaches, the photosynthesis-based assumption could not explain their food supply; the bracketed sentence names that puzzle, and the final sentence answers it with chemosynthesis. The sentence does not question the depth or darkness of the vents; the puzzle exists precisely because they lie beyond sunlight. The words “at first” and the explanation that follows show the question is no longer unanswered. The earlier assumption is stated in the first sentence, and the bracketed sentence gives no reason for it.',
        skill: 'craft-and-structure',
      },
    ],
  },

  // ─── Cross-Text Connections ────────────────────────────────────────────────
  {
    id: 'cs-15',
    title: 'The QWERTY Debate',
    genre: 'social-science',
    text: `Text 1: Economist Paul David has offered the QWERTY keyboard as a classic case of path dependence. The layout, devised for early typewriters, persisted, David argued, long after those machines vanished because typists had trained on it and manufacturers kept producing it. Even the Dvorak layout, patented in 1936 and said to be far faster, could not displace it. For David, QWERTY shows how early choices can lock a market into an inferior standard.

Text 2: Economists Stan Liebowitz and Stephen Margolis reexamined the case for Dvorak’s superiority. The favorable studies, they found, were few and weakly designed, and a widely cited Navy experiment had been conducted under the direction of August Dvorak himself, the layout’s inventor. A later government study found no meaningful advantage for Dvorak. QWERTY’s survival, they concluded, offers little evidence that markets get stuck with inferior technologies.`,
    questions: [
      {
        question: 'Based on the texts, how would Liebowitz and Margolis (Text 2) most likely respond to David’s conclusion in Text 1?',
        options: [
          'By contending that QWERTY was never designed with early typewriters’ needs in mind',
          'By agreeing that QWERTY is inferior but denying that its survival reflects early choices',
          'By arguing that it depends on an unproven claim that a rival layout was clearly superior',
          'By suggesting that the Dvorak layout failed mainly because manufacturers refused to make it',
        ],
        correctAnswer: 2,
        explanation: 'David’s claim that QWERTY is an “inferior standard” rests on Dvorak being faster, and Text 2 argues that the evidence for Dvorak’s superiority is weak, so Liebowitz and Margolis would say his conclusion depends on an unproven premise. They do not agree that QWERTY is inferior; they argue that its inferiority was never shown, so agreement on that point misstates their view. Text 2 says nothing about QWERTY’s original design. Text 2 attributes nothing to manufacturers; its argument concerns whether Dvorak was actually better.',
        skill: 'craft-and-structure',
      },
    ],
  },
  {
    id: 'cs-16',
    title: 'The Norse in Greenland',
    genre: 'historical',
    text: `Text 1: Norse settlers lived in Greenland for more than four centuries before the last of their settlements was abandoned in the 1400s. In his 2005 book Collapse, Jared Diamond argued that the settlers doomed themselves partly through cultural conservatism, clinging to the cattle- and sheep-farming traditions of Scandinavia and making far less use of the sea than their Inuit neighbors did.

Text 2: Chemical analyses of Norse skeletons complicate that picture. Isotope ratios in the bones show that marine foods, chiefly seal, made up a growing share of the settlers’ diets over time, eventually supplying well over half of it. To researchers who study this evidence, the Norse were a population that adapted to worsening conditions, and they look to other factors, such as a cooling climate and falling European demand for walrus ivory, to explain the settlements’ end.`,
    questions: [
      {
        question: 'Based on the texts, how would the researchers discussed in Text 2 most likely respond to Diamond’s argument in Text 1?',
        options: [
          'By agreeing that the settlers’ dependence on livestock made their collapse nearly inevitable',
          'By arguing that the settlers did shift toward marine foods, so rigid tradition is an unlikely cause',
          'By asserting that the Inuit, rather than the Norse, first hunted seals along Greenland’s coasts',
          'By claiming that the Norse settlements were abandoned far earlier than Diamond’s account says',
        ],
        correctAnswer: 1,
        explanation: 'Diamond blames the collapse partly on the settlers’ limited use of marine resources, while Text 2 cites bone chemistry showing that seal and other marine foods became a large and growing part of their diet, evidence that the Norse adapted; these researchers would therefore reject rigid tradition as the explanation. They do not agree that livestock dependence doomed the settlers, since they argue the settlers’ diet changed. Text 2 does not address who first hunted seals in Greenland. Text 2 never disputes when the settlements were abandoned.',
        skill: 'craft-and-structure',
      },
    ],
  },
  {
    id: 'cs-17',
    title: 'Ice Age Extinctions',
    genre: 'natural-science',
    text: `Text 1: About 13,000 years ago, North America lost mammoths, mastodons, giant ground sloths, and dozens of other kinds of large mammals. Geoscientist Paul Martin noted that these extinctions followed soon after humans arrived on the continent. In his “overkill” hypothesis, he argued that the close match in timing, along with the speed of the losses, indicates that newly arrived hunters drove the animals to extinction.

Text 2: The extinctions also coincided with abrupt climate swings at the end of the last ice age, which transformed the habitats large mammals relied on. Archaeologists Donald Grayson and David Meltzer point out that of the roughly three dozen genera that vanished, convincing evidence of human hunting exists for only a handful. A match in timing alone, they argue, cannot show whether people or environmental change caused the losses.`,
    questions: [
      {
        question: 'Based on the texts, how would Grayson and Meltzer (Text 2) most likely respond to Martin’s reasoning in Text 1?',
        options: [
          'By noting that the timing he cites fits other possible causes and so cannot settle the matter',
          'By agreeing that hunting caused the extinctions but arguing that they unfolded over a long period',
          'By proposing that most of the extinct species had been declining long before humans arrived',
          'By questioning whether humans had actually reached North America before the extinctions',
        ],
        correctAnswer: 0,
        explanation: 'Martin leans on the close match in timing between human arrival and the extinctions; Text 2 points out that the losses also coincided with abrupt climate change and states that timing alone cannot decide between people and environmental change. Grayson and Meltzer do not dispute that humans had arrived; their objection concerns cause, not chronology. They do not accept hunting as the cause, and Text 2 says nothing about how long the extinctions took. Text 2 makes no claim about declines that began before humans arrived; it ties the climate factor to the end of the last ice age.',
        skill: 'craft-and-structure',
      },
    ],
  },
  {
    id: 'cs-18',
    title: 'Too Many Jams?',
    genre: 'social-science',
    text: `Text 1: In a well-known 2000 study, psychologists Sheena Iyengar and Mark Lepper set up a tasting booth in a grocery store that offered either 6 or 24 varieties of jam. The larger display drew more shoppers, but only 3 percent of them bought jam, compared with 30 percent of those who saw the smaller one. The researchers concluded that giving people more options tends to discourage them from choosing.

Text 2: When psychologist Benjamin Scheibehenne and colleagues combined the results of 50 choice-overload experiments in a 2010 meta-analysis, they found that the average effect of the number of options was virtually zero. Later reviews suggest that large assortments deter choosing only under certain conditions, such as when options are hard to compare or when people lack clear preferences.`,
    questions: [
      {
        question: 'Based on the texts, how would the author of Text 2 most likely respond to the conclusion Iyengar and Lepper reach in Text 1?',
        options: [
          'By suggesting that it describes an effect that arises only in particular situations, not generally',
          'By rejecting it on the grounds that the larger jam display failed to attract more shoppers',
          'By endorsing it and recommending that stores generally reduce the number of products they stock',
          'By reversing it, since having more options usually makes people more likely to make a choice',
        ],
        correctAnswer: 0,
        explanation: 'Iyengar and Lepper conclude that more options “tend” to discourage choosing, a general claim; Text 2 reports that the average effect across 50 experiments is virtually zero and that overload appears only under certain conditions, so its author would narrow the conclusion to specific situations. Text 2 challenges the general claim rather than endorsing it, and it offers no advice to stores. Text 1 itself reports that the larger display drew more shoppers, and Text 2 does not dispute that. An average effect of virtually zero does not show that more options usually help, so reversing the conclusion overstates Text 2.',
        skill: 'craft-and-structure',
      },
    ],
  },
  {
    id: 'cs-19',
    title: 'Print and Trust',
    genre: 'historical',
    text: `Text 1: In The Printing Press as an Agent of Change (1979), historian Elizabeth Eisenstein argued that printing transformed European intellectual life by giving texts a new fixity. Because a press could turn out many identical copies, she maintained, scholars in different cities could consult the same version of a work, compare findings, and build on one another’s corrections, conditions that helped make the Scientific Revolution possible.

Text 2: Historian Adrian Johns contends that early printed books were far less trustworthy than such accounts imply. Pirated editions were common, printers altered texts freely, and readers often had reason to doubt that a book said what its author intended. In Johns’s view, the reliability later associated with print did not follow automatically from the technology; it was built gradually through conventions and practices of trust among printers, booksellers, and readers.`,
    questions: [
      {
        question: 'Based on the texts, how would Johns (Text 2) most likely respond to Eisenstein’s argument in Text 1?',
        options: [
          'He would accept that printed texts were fixed but deny that distant scholars could obtain them.',
          'He would contend that the printing press played no meaningful role in the Scientific Revolution.',
          'He would claim that handwritten manuscripts were typically more accurate than printed books.',
          'He would argue that she treats as inherent in print a reliability that took time to develop.',
        ],
        correctAnswer: 3,
        explanation: 'Eisenstein credits the press itself with giving texts “fixity,” while Johns argues that print’s reliability “did not follow automatically from the technology” and was established gradually through social conventions; he would say she treats a slowly developed trait as inherent. Johns disputes how print mattered, not whether it mattered, so denying it any role in the Scientific Revolution overstates his view. Text 2 never compares printed books with manuscripts. Johns does not accept that early printed texts were fixed; he stresses piracy and alteration, and he raises no question about access.',
        skill: 'craft-and-structure',
      },
    ],
  },
  {
    id: 'cs-20',
    title: 'Dickinson’s Dashes',
    genre: 'literary',
    text: `Text 1: When Emily Dickinson’s poems first appeared as a book in 1890, four years after her death, editors Mabel Loomis Todd and Thomas Wentworth Higginson replaced many of her distinctive dashes with conventional commas and periods. Some commentators have defended these changes as largely cosmetic: they removed a visual oddity that might have put off readers while leaving the substance of the poems intact.

Text 2: Since Thomas H. Johnson’s 1955 edition restored Dickinson’s own punctuation, many critics have argued that her dashes are integral to her art. A dash can suspend a thought, link ideas that a period would separate, or leave a line hanging between two readings. Standardizing that punctuation, these critics hold, does not simply tidy a poem; it can resolve ambiguities that Dickinson deliberately left open.`,
    questions: [
      {
        question: 'Based on the texts, how would the critics discussed in Text 2 most likely respond to the defense of the 1890 edition presented in Text 1?',
        options: [
          'By agreeing that the dashes were a visual oddity but insisting that editors should not alter poems',
          'By rejecting the idea that the changes were merely cosmetic, since the punctuation shapes meaning',
          'By arguing that Todd and Higginson altered Dickinson’s word choices more than her punctuation',
          'By contending that the 1890 edition failed to find readers because it had removed the dashes',
        ],
        correctAnswer: 1,
        explanation: 'Text 1’s defense holds that removing the dashes left “the substance of the poems intact,” but the critics in Text 2 argue that the dashes create pauses, links, and deliberate ambiguities, so standardizing them changes meaning; they would deny that the edits were cosmetic. They do not regard the dashes as a mere oddity; they call them “integral” to her art. Text 2 does not discuss changes to Dickinson’s wording. Text 2 says nothing about how many readers the 1890 edition attracted.',
        skill: 'craft-and-structure',
      },
    ],
  },
]
