/**
 * Entrance Quiz — SAT Text Structure and Purpose
 * 14 questions · 7 parts (2 per part)
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  {
    id: 'tsp-ent-1a',
    question: `Sociologist Mara Lindqvist surveyed 600 residents of three small towns about how they learn local news. Most said they rely less on the local newspaper than on conversations at the post office, the hardware store, and the school pickup line. Lindqvist concludes that in small towns, everyday gathering places work as an informal news network.\n\nWhich choice best states the main purpose of the text?`,
    options: [
      `To argue that small-town newspapers should be replaced by conversations at local stores`,
      `To explain why small-town residents have learned to distrust what local newspapers report`,
      `To describe a study of how small-town residents learn local news and what the study found`,
      `To compare how local news spreads in small towns with the way it usually spreads in large cities`,
    ],
    correctIndex: 2,
    explanation: `The text reports a survey (how residents learn news) and then Lindqvist's conclusion, so its purpose is to describe that study and its result. Nothing in the text calls for replacing newspapers, mentions distrust of them, or discusses large cities.`,
    partNumber: 1,
    partTitle: 'Reading for What a Text Does',
  },
  {
    id: 'tsp-ent-1b',
    question: `Many people picture desert cacti as plants that simply need very little water. The saguaro cactus tells a different story. After a heavy rain, its shallow, widespread roots absorb water quickly, and the accordion-like pleats of its stem swell to hold it. The plant then draws on that stored supply through the long dry months that follow.\n\nWhich choice best describes the function of the second sentence in the overall structure of the text?`,
    options: [
      `It signals that the text will complicate the view in the first sentence.`,
      `It offers evidence that confirms the view of cacti stated in the first sentence.`,
      `It summarizes the conclusion the text reaches in its final sentence about cacti.`,
      `It introduces a second plant that the text then compares with desert cacti.`,
    ],
    correctIndex: 0,
    explanation: `"Tells a different story" announces that the saguaro will not fit the common picture of cacti as plants that need little water, and the rest of the text shows it absorbing and storing large amounts of water. The sentence does not confirm the common view, it comes before rather than summarizes the ending, and no second plant is introduced.`,
    partNumber: 1,
    partTitle: 'Reading for What a Text Does',
  },
  {
    id: 'tsp-ent-2a',
    question: `Historian Leah Brandt studied the borrowing records of a lending library in an English mill town during the 1890s. The library's directors had stocked it mainly with sermons and practical manuals, hoping to encourage self-improvement. Brandt found, however, that the mill workers borrowed travel narratives far more often than any other kind of book. She suggests that the workers valued reading less as a path to self-improvement than as a form of imaginative escape.\n\nWhich choice best states the main purpose of the text?`,
    options: [
      `To argue that library directors in mill towns deliberately ignored what workers wanted to read`,
      `To describe the sermons and practical manuals that the directors of the library selected`,
      `To explain how travel narratives became the most widely published books of the 1890s`,
      `To present a scholar's finding about what workers chose to read and how she interprets it`,
    ],
    correctIndex: 3,
    explanation: `The text covers Brandt's finding (workers favored travel narratives) and her suggestion about what it means, so the key captures the whole text. The text never says the directors deliberately ignored workers; the sermons and manuals are one background detail; and the text says nothing about publishing trends.`,
    partNumber: 2,
    partTitle: 'Main Purpose Questions',
  },
  {
    id: 'tsp-ent-2b',
    question: `Conservators examining a seventeenth-century portrait at the Halvorsen Museum used infrared imaging and found a sketch of a different sitter beneath the paint. Because canvas was expensive, painters of the period often reused it, so the discovery itself was not unusual. What surprised the team was that the hidden sketch appears to be by a different hand, suggesting that the canvas passed between two workshops before the portrait was finished.\n\nWhich choice best states the main purpose of the text?`,
    options: [
      `To explain why seventeenth-century painters frequently reused their costly canvases`,
      `To report a find about a painting and explain why one part of it surprised experts`,
      `To argue that infrared imaging has transformed the way museums care for paintings`,
      `To describe the techniques that workshops of the period used to sketch their sitters`,
    ],
    correctIndex: 1,
    explanation: `The text reports the hidden sketch, sets aside the unsurprising part (canvas reuse was common), and identifies the surprising part (a different hand), which the key covers. Canvas reuse is only one supporting detail, so that choice is too narrow; the text makes no claim about imaging transforming museums and does not describe sketching techniques.`,
    partNumber: 2,
    partTitle: 'Main Purpose Questions',
  },
  {
    id: 'tsp-ent-3a',
    question: `For much of the twentieth century, many engineers assumed that the best defense against earthquakes was a building made as stiff and strong as possible. More recent designs take a different approach. Some buildings now rest on flexible bearings made of layered rubber and steel, which let the ground shift beneath the structure while the building above moves far less. By absorbing motion rather than resisting it, these bearings can reduce the damage a strong earthquake causes.\n\nWhich choice best describes the overall structure of the text?`,
    options: [
      `It describes a newer approach to a problem, then explains why engineers eventually abandoned it.`,
      `It presents an older belief about a problem, then describes a newer approach that departs from it.`,
      `It states a hypothesis about a problem, then reports an experiment that disproved the hypothesis.`,
      `It lists several approaches to a problem, then ranks them from the least to the most expensive.`,
    ],
    correctIndex: 1,
    explanation: `The text opens with what engineers "assumed" (stiff buildings) and then turns to "a different approach" (flexible bearings), which matches the key beat for beat. The newer approach is not abandoned, no experiment is reported, and the text neither lists several approaches nor discusses cost.`,
    partNumber: 3,
    partTitle: 'Overall Structure Questions',
  },
  {
    id: 'tsp-ent-3b',
    question: `Visitors to some dry salt lakes notice that the crust forms a pattern of ridged polygons, each a meter or two across. Geophysicist Owen Mbeki proposes that the pattern begins underground: salty water beneath the surface circulates in slow, rolling cells, and salt builds up fastest where those cells meet, raising ridges along their borders. Mbeki notes, however, that his idea has so far been tested only in laboratory tanks.\n\nWhich choice best describes the overall structure of the text?`,
    options: [
      `It describes a natural pattern, presents two competing explanations for it, and then favors one of those explanations.`,
      `It presents an explanation for a natural pattern, describes a field test of it, and reports that the test confirmed it.`,
      `It presents a laboratory experiment, describes its results, and then applies those results to a natural pattern.`,
      `It describes a natural pattern, offers one explanation for it, and points out a limit on the support for that explanation.`,
    ],
    correctIndex: 3,
    explanation: `The text moves from an observation (salt polygons) to Mbeki's proposal (underground circulation) to a caution ("tested only in laboratory tanks"). Only one explanation is offered, no field test confirms it, and the laboratory tanks come last as a limitation, not first as the starting point.`,
    partNumber: 3,
    partTitle: 'Overall Structure Questions',
  },
  {
    id: 'tsp-ent-4a',
    question: `Many everyday English words began as the names of particular people. The word "boycott," for example, comes from Charles Boycott, a land agent in nineteenth-century Ireland whose neighbors refused to work for or trade with him during a dispute over rents. Linguists call such words eponyms, and new ones continue to enter the language.\n\nWhich choice best describes the function of the second sentence in the overall structure of the text?`,
    options: [
      `It gives an example of the kind of word the first sentence describes.`,
      `It challenges the claim about everyday words made in the first sentence.`,
      `It defines a technical term that the text goes on to use in its final sentence.`,
      `It explains why linguists still disagree about where that particular word came from.`,
    ],
    correctIndex: 0,
    explanation: `"For example" signals that the story of "boycott" illustrates the first sentence's claim that some words began as people's names. It supports rather than challenges that claim; the term "eponyms" is introduced in the third sentence, not the second; and no disagreement among linguists is mentioned.`,
    partNumber: 4,
    partTitle: 'The Function of a Sentence',
  },
  {
    id: 'tsp-ent-4b',
    question: `Urban planner Dalia Ferreira argues that cities should convert some street parking lanes into protected bike lanes. She acknowledges that shop owners often fear losing customers who arrive by car. But in the three cities she studied, retail sales on redesigned streets rose slightly in the two years after the change, partly because cyclists and pedestrians tended to make more frequent stops.\n\nWhich choice best describes the function of the second sentence in the overall structure of the text?`,
    options: [
      `It presents the evidence that first led Ferreira to make her proposal about parking lanes.`,
      `It shows that Ferreira has withdrawn her proposal in response to shop owners' objections.`,
      `It recognizes a concern about Ferreira's proposal before the text offers evidence that eases it.`,
      `It describes the results of the study of retail sales that Ferreira carried out in three cities.`,
    ],
    correctIndex: 2,
    explanation: `"She acknowledges" marks a concession: the sentence names the shop owners' worry, and the next sentence ("But...") answers it with sales data. Ferreira does not withdraw her proposal, the worry is not evidence for it, and the study results appear in the third sentence, not the second.`,
    partNumber: 4,
    partTitle: 'The Function of a Sentence',
  },
  {
    id: 'tsp-ent-5a',
    question: `The following text is from a short story. Inez has returned to her childhood home after many years away.\n\nThe kitchen was smaller than Inez remembered. The table where she had once spread out her homework barely left room to pass, and the window over the sink, which she had pictured as wide and bright, framed only a narrow strip of the neighbor's fence. She stood in the doorway a long moment, unsure whether the room had shrunk or she had simply grown into someone who no longer fit it.\n\nWhich choice best states the main purpose of the text?`,
    options: [
      `To describe how Inez's family rearranged the kitchen after she moved away from home`,
      `To establish that Inez deeply regrets having left her childhood home years earlier`,
      `To contrast the kitchen Inez grew up in with the brighter kitchen in the neighbor's house`,
      `To convey Inez's unsettled response to a place that differs from her memory`,
    ],
    correctIndex: 3,
    explanation: `Each detail (the cramped table, the narrow view) shows the kitchen falling short of Inez's memory, and the final sentence conveys her uncertainty about what has changed. The text never says the family rearranged anything, "unsure" is far weaker than deep regret, and the neighbor's kitchen is never described.`,
    partNumber: 5,
    partTitle: 'Purpose and Structure in Literary Texts',
  },
  {
    id: 'tsp-ent-5b',
    question: `The following text is from a poem. The speaker describes a heron standing in a river.\n\nAll morning the heron stands in the shallows,\ngray as the river's own reflection of cloud,\nso still the minnows forget that it is there,\nuntil, in a flicker too quick to follow,\nthe stillness turns out to have been a kind of motion.\n\nWhich choice best describes the overall structure of the text?`,
    options: [
      `It portrays a bird in motion, then describes the stillness that follows once the bird has fed.`,
      `It portrays a bird's long stillness, then reveals that the stillness was part of the bird's hunting.`,
      `It contrasts the habits of two birds, then suggests which of them is the more skillful hunter.`,
      `It describes a river at dawn, then shifts to the speaker's own memories of earlier mornings spent there.`,
    ],
    correctIndex: 1,
    explanation: `The first three lines dwell on the heron's stillness (so still the minnows forget it), and "until" turns to a sudden strike that recasts that stillness as "a kind of motion," that is, part of hunting. The order is stillness then motion, not the reverse; only one bird appears; and the speaker never turns to memories.`,
    partNumber: 5,
    partTitle: 'Purpose and Structure in Literary Texts',
  },
  {
    id: 'tsp-ent-6a',
    question: `Some economists have argued that tipping in restaurants rewards good service. Economist Lena Varga compared customers' ratings of their service with the tips they left at forty restaurants and found only a weak link between the two: tip size depended more on the size of the bill and on local custom. Varga does not claim that service quality never matters, but her results suggest that its effect on tips is smaller than often assumed.\n\nWhich choice best states the main purpose of the text?`,
    options: [
      `To prove that the quality of service has no effect on the tips that diners leave`,
      `To explain how local customs determine the size of tips in different regions`,
      `To present a finding that casts doubt on how strongly a widely held belief holds`,
      `To argue that restaurants should replace tipping with a fixed service charge`,
    ],
    correctIndex: 2,
    explanation: `Varga's weak link between service and tips questions how much service matters, and the last sentence limits the claim ("does not claim that service quality never matters"). That limit rules out the "no effect" choice as too strong; local custom is one detail, not the purpose; and the text proposes no service charge.`,
    partNumber: 6,
    partTitle: 'Trap Answers and Elimination',
  },
  {
    id: 'tsp-ent-6b',
    question: `Archaeologists long assumed that a stone enclosure at Kerrow Hill was built as a fort, because its walls are thick and it sits on high ground. Excavations led by Sunita Rao, however, found no weapons and few signs of attack but uncovered hearths, bones from large feasts, and pottery from distant regions. Rao argues that the enclosure was mainly a gathering place for seasonal festivals. She concedes that the walls could have offered protection when needed, but she maintains that defense was not the reason they were built.\n\nWhich choice best describes the function of the last sentence in the overall structure of the text?`,
    options: [
      `It grants a protective use for the enclosure's walls while keeping Rao's claim about their original purpose.`,
      `It abandons Rao's claim about festivals in favor of the older view that the enclosure was a fort.`,
      `It shows that the walls offered protection, which proves that the enclosure was built as a fort.`,
      `It presents the evidence from the excavation that first led Rao to doubt that the site was a fort.`,
    ],
    correctIndex: 0,
    explanation: `"She concedes" grants that the walls may have protected people, and "but she maintains" keeps her claim that defense was not their purpose. Reading the concession as a retraction yields the "abandons" and "proves" choices, which contradict "she maintains"; the excavation evidence appears in the second sentence, not the last.`,
    partNumber: 6,
    partTitle: 'Trap Answers and Elimination',
  },
  {
    id: 'tsp-ent-7a',
    question: `Seed banks store the seeds of thousands of plant species in cold, dry vaults so that they can be planted if wild populations are lost. Yet some seeds cannot survive this treatment. Seeds of many tropical plants, including cacao and avocado, die when they are dried, so they cannot be kept in conventional vaults. For such species, researchers are testing cryopreservation: freezing small pieces of embryo tissue in liquid nitrogen.\n\nWhich choice best describes the function of the second sentence in the overall structure of the text?`,
    options: [
      `It supports the claim that seed banks can preserve the seeds of every plant species.`,
      `It introduces a limitation of the cold, dry storage method described just before it.`,
      `It describes the alternative storage method that researchers are now testing.`,
      `It explains why tropical seeds are more valuable than the seeds of other plants.`,
    ],
    correctIndex: 1,
    explanation: `"Yet some seeds cannot survive this treatment" points to a weakness of the cold, dry storage in the first sentence, which the next sentence explains. It undercuts, rather than supports, the idea that seed banks work for every species; the alternative method appears in the last sentence; and the text never ranks seeds by value.`,
    partNumber: 7,
    partTitle: 'Mixed Practice and Test Strategy',
  },
  {
    id: 'tsp-ent-7b',
    question: `Ornithologist Kaito Lund noticed that seabirds on the island of Varro nest far inland, even though the walk to and from the sea costs them energy. He hypothesized that nesting inland helps the birds avoid gulls, which raid nests near the water. To test the idea, Lund compared egg losses at inland nests with losses at the few nests built near the shore and found that the shoreline nests lost about three times as many eggs.\n\nWhich choice best describes the overall structure of the text?`,
    options: [
      `It reports a comparison of nesting sites, then proposes a hypothesis that the comparison leaves untested.`,
      `It explains why gulls raid nests near water, then describes how the seabirds have changed their diet.`,
      `It describes an unusual behavior, then presents two hypotheses about it without favoring either one.`,
      `It describes a puzzling behavior and an explanation for it, then reports a comparison that supports the explanation.`,
    ],
    correctIndex: 3,
    explanation: `The text moves from a puzzle (nesting inland despite the cost) to a hypothesis (avoiding gulls) to a test whose result fits it (shoreline nests lost three times as many eggs). The comparison comes after the hypothesis and tests it, only one hypothesis is offered, and diet is never discussed.`,
    partNumber: 7,
    partTitle: 'Mixed Practice and Test Strategy',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Reading for What a Text Does' },
    { partNumber: 2, partTitle: 'Main Purpose Questions' },
    { partNumber: 3, partTitle: 'Overall Structure Questions' },
    { partNumber: 4, partTitle: 'The Function of a Sentence' },
    { partNumber: 5, partTitle: 'Purpose and Structure in Literary Texts' },
    { partNumber: 6, partTitle: 'Trap Answers and Elimination' },
    { partNumber: 7, partTitle: 'Mixed Practice and Test Strategy' },
  ]
}
