/**
 * Enhanced ACT full-length Form 3 — English (5 passages × 10 questions, 35 min).
 * Essays: learning to sail (narrative) · the origins of the Hawaiian pizza (informative) ·
 * how Iceland's geysers work (informative) · right-to-repair laws (argumentative) ·
 * Alvin Ailey's Revelations (informative).
 */
import type { ActFLPassage } from './types'

const STEM = 'Which choice is the best version of the underlined portion?'

const PASSAGE_1: ActFLPassage = {
  id: 'act-fl3-e-01',
  title: 'Where the Wind Is',
  kind: 'narrative',
  text: `The first thing my sailing instructor, a retired ferry captain named Odile, told me was that the wind is never where you want it. {{1:I nodded, I assumed}} she was being poetic. Ten minutes later I was sitting in a twelve-foot dinghy in the middle of the harbor, pointed straight into the breeze, while the sail flapped uselessly above my head.

"You're in irons," Odile called from the dock. A sailboat cannot travel directly into the wind; its sail simply luffs, or shakes, like a flag. {{2}} To make progress upwind, a sailor has to zigzag, angling the boat first to one side of the wind and then to the other. Each turn through the wind is called a tack, and {{3:they require}} three things at once: pushing the tiller away, ducking under the swinging boom, and shifting to the other side of the boat.

{{4:Tacking is a skill that every sailor must eventually learn.}} I pushed the tiller too late or forgot to duck, and more than once the boom swept my hat into the water. Odile, {{5:whom}} had watched hundreds of beginners make the same mistakes, never raised her voice. She simply asked me to {{6:describe and explain to her in words}} what the wind was doing, and she waited until I could.

[1] Dark patches spreading across the water, I learned, meant a gust was coming. [2] Slowly, I started to notice things I had never seen before. [3] Higher up, the little ribbons tied to the sail, called telltales, {{7:shows}} whether air was flowing smoothly across the cloth. [4] Even the flags on the yacht club's roof became a kind of {{8:forecast I could read, at a glance}}. {{9}}

By the end of the summer, I could sail out to the far buoy and back on my own. On my last day, a sudden gust tipped the boat sharply, and instead of panicking, I eased the sail and let the wind spill out of it, just as Odile had shown me. She had been right: the wind is never where you want it. {{10:Learning to sail, I discovered, is mostly learning to stop expecting it to be.}}`,
  questions: [
    {
      id: 'act-fl3-e-01-q1',
      question: STEM,
      options: ['NO CHANGE', 'I nodded; I assumed', 'I nodded, then I assumed', 'I nodded I assumed'],
      correctIndex: 1,
      explanation:
        `"I nodded" and "I assumed she was being poetic" are both independent clauses, so they must be joined by something stronger than a comma; a semicolon does the job.`,
      optionExplanations: [
        `As written, two independent clauses are joined only by a comma, creating a comma splice. "I nodded" and "I assumed she was being poetic" could each stand alone as a sentence.`,
        `A semicolon can join two closely related independent clauses. Here it links the narrator's nod to the private assumption behind it without any punctuation error.`,
        `The adverb "then" is not a conjunction, so a comma followed by "then" still leaves two independent clauses joined by only a comma. The sentence remains a comma splice.`,
        `Removing the comma runs the two independent clauses together with no punctuation at all, producing a fused sentence that is even harder to read than the original.`,
      ],
      skill: 'CSE',
      marker: 1,
      difficulty: 'easy',
    },
    {
      id: 'act-fl3-e-01-q2',
      question:
        'At this point, the writer is considering adding the following true sentence:\n\n> Most modern dinghies have hulls made of fiberglass rather than wood.\n\nShould the writer make this addition here?',
      options: [
        'Yes, because it gives useful background about the kind of boat the narrator was sailing.',
        'Yes, because it helps explain why the sail was unable to catch any of the wind.',
        'No, because it interrupts an explanation of why a sailboat must zigzag to go upwind.',
        'No, because it contradicts the earlier detail that the dinghy was twelve feet long.',
      ],
      correctIndex: 2,
      explanation:
        'The paragraph explains being "in irons" and why a boat must tack to go upwind; a fact about hull materials has nothing to do with that explanation and would interrupt it.',
      optionExplanations: [
        `The hull material has nothing to do with being "in irons" or with tacking, which is what this paragraph explains. Background that does not serve the paragraph's point is a digression.`,
        'What a hull is made of does not affect whether a sail catches wind. The sail luffs because the boat points straight into the breeze, as the paragraph already explains.',
        'The paragraph moves step by step from being stalled to the need to zigzag and tack. A sentence about hull materials breaks that chain of explanation and is irrelevant to it.',
        `A boat's length and its hull material are unrelated facts, so the sentence would not contradict anything. The real problem is that it is off topic, not that it conflicts with earlier details.`,
      ],
      skill: 'POW',
      marker: 2,
      difficulty: 'easy',
    },
    {
      id: 'act-fl3-e-01-q3',
      question: STEM,
      options: ['NO CHANGE', 'they required', 'it required', 'it requires'],
      correctIndex: 3,
      explanation:
        'The pronoun refers to the singular "a tack," and the paragraph explains how sailing works in the present tense, so "it requires" is correct.',
      optionExplanations: [
        'The plural pronoun "they" does not agree with its singular antecedent, "a tack." Each individual turn is what demands the three actions, so a singular pronoun is needed.',
        'This choice keeps the plural "they," which disagrees with the singular "a tack," and it also shifts into the past tense in a sentence that explains how sailing generally works.',
        'The singular "it" fixes the agreement, but "required" shifts into the past tense. The surrounding sentences explain how sailing always works, so the present tense is needed.',
        'The singular "it" agrees with "a tack," and the present-tense "requires" matches the general explanation around it, such as "A sailboat cannot travel directly into the wind."',
      ],
      skill: 'CSE',
      marker: 3,
      difficulty: 'medium',
    },
    {
      id: 'act-fl3-e-01-q4',
      question:
        'Given that all the choices are true, which one most effectively introduces the main focus of this paragraph?',
      options: [
        'NO CHANGE',
        'The harbor was crowded with fishing boats that summer.',
        'For the first week, my tacks were disasters.',
        'Odile had given sailing lessons for many years.',
      ],
      correctIndex: 2,
      explanation:
        `The paragraph goes on to list the narrator's tacking mistakes and Odile's patient response, so a sentence announcing that the early tacks were disasters introduces it best.`,
      optionExplanations: [
        'This general statement about all sailors does not prepare the reader for the specific blunders that follow, such as pushing the tiller too late and losing a hat to the boom.',
        `The busy harbor is never mentioned again in the paragraph, so this detail would introduce a scene the paragraph does not develop instead of the narrator's mistakes.`,
        'The sentences that follow describe late tiller pushes, forgotten ducks, and a hat knocked into the water. Calling the first week\'s tacks disasters sets up exactly that list of errors.',
        `Odile's experience is already conveyed by the later clause about watching hundreds of beginners, and this sentence would not introduce the narrator's mistakes that dominate the paragraph.`,
      ],
      skill: 'POW',
      marker: 4,
      difficulty: 'easy',
    },
    {
      id: 'act-fl3-e-01-q5',
      question: STEM,
      options: ['NO CHANGE', 'who', 'which', 'whose'],
      correctIndex: 1,
      explanation:
        'The pronoun is the subject of the verb "had watched," so the subject form "who" is required.',
      optionExplanations: [
        '"Whom" is an object pronoun, but here the pronoun performs the action of "had watched." A subject is required, so the object form is incorrect.',
        'Within its clause, the pronoun is the subject of "had watched," and it refers to a person, Odile. The subject pronoun "who" is therefore correct.',
        'The relative pronoun "which" refers to things or animals, not people. Because the clause describes Odile, "which" is inappropriate in standard written English.',
        'The possessive "whose" must be followed by a noun that something belongs to, as in "whose students." Here it would leave the verb "had watched" without a subject.',
      ],
      skill: 'CSE',
      marker: 5,
      difficulty: 'medium',
    },
    {
      id: 'act-fl3-e-01-q6',
      question: STEM,
      options: [
        'NO CHANGE',
        'describe and also explain',
        'describe, in my own words, and explain',
        'describe',
      ],
      correctIndex: 3,
      explanation:
        'To "describe" something already means to explain it in words, so the single verb says everything the longer versions say.',
      optionExplanations: [
        'To describe something is already to explain it in words, so "and explain to her in words" repeats the idea. The sentence becomes wordy without becoming any clearer.',
        '"Describe" and "explain" overlap heavily in this context, and "and also" adds still more filler. The pairing repeats an idea instead of adding a new one.',
        'The phrase "in my own words" and the added "and explain" both restate what "describe" already means, making this the wordiest choice rather than an improvement.',
        `The single verb "describe" fully conveys that Odile wanted the narrator to put the wind's behavior into words. It is the clearest and most concise choice.`,
      ],
      skill: 'KLA',
      marker: 6,
      difficulty: 'easy',
    },
    {
      id: 'act-fl3-e-01-q7',
      question: STEM,
      options: ['NO CHANGE', 'was showing', 'has shown', 'showed'],
      correctIndex: 3,
      explanation:
        'The plural subject "ribbons" needs a plural verb, and the paragraph narrates past events, so "showed" is correct.',
      optionExplanations: [
        'The singular verb "shows" does not agree with the plural subject "ribbons." The phrases "tied to the sail" and "called telltales" sit between them and can make the singular seem right.',
        '"Was" is singular, so "was showing" still disagrees with the plural subject "ribbons." The words between the subject and the verb hide the mismatch.',
        '"Has shown" is singular and present perfect, so it disagrees with "ribbons" in number and also shifts out of the past tense used elsewhere in the sentence.',
        'The past-tense "showed" works with a plural subject and matches the narration of the paragraph, including "was flowing" later in the same sentence.',
      ],
      skill: 'CSE',
      marker: 7,
      difficulty: 'medium',
    },
    {
      id: 'act-fl3-e-01-q8',
      question: STEM,
      options: [
        'NO CHANGE',
        'forecast, I could read at a glance',
        'forecast I could read at a glance',
        'forecast: I could read at a glance',
      ],
      correctIndex: 2,
      explanation:
        'The clause "I could read at a glance" describes "forecast" and should follow it without any internal punctuation.',
      optionExplanations: [
        'The comma separates "read" from "at a glance," the phrase that tells how the reading happened. Nothing is being interrupted or set off, so the comma is unnecessary.',
        'The clause "I could read at a glance" identifies which kind of forecast is meant, so it is essential and should not be cut off from "forecast" with a comma.',
        'The clause "I could read at a glance" is essential to the meaning of "forecast" and flows directly from it, so the sentence needs no internal punctuation here.',
        'A colon should follow a complete statement and introduce an explanation or a list. Here it splits a noun from the clause that describes it, which is incorrect.',
      ],
      skill: 'CSE',
      marker: 8,
      difficulty: 'easy',
    },
    {
      id: 'act-fl3-e-01-q9',
      question: 'For the sake of logic and cohesion, Sentence 1 should be placed:',
      options: ['where it is now.', 'after Sentence 2.', 'after Sentence 3.', 'after Sentence 4.'],
      correctIndex: 1,
      explanation:
        'Sentence 2 announces that the narrator began noticing new things; the dark patches on the water are the first example, and "Higher up" in Sentence 3 then moves from the water to the sail.',
      optionExplanations: [
        'Opening with the dark patches gives an example before the paragraph states its point. "Slowly, I started to notice things" is the topic sentence and should come first.',
        'After Sentence 2 says the narrator began to notice new things, the dark patches on the water are the first example, and the next sentence\'s "Higher up" then moves the eye from the water to the sail.',
        'Placed here, the dark patches would come after "Higher up," a phrase that makes sense only once the reader has been looking at the water. The telltales sentence would lose its point of reference.',
        'Putting the dark patches last would bury them after "Even the flags," which signals the most surprising example and works best as the final sentence. "Higher up" would also lose its reference point.',
      ],
      skill: 'POW',
      marker: 9,
      difficulty: 'medium',
    },
    {
      id: 'act-fl3-e-01-q10',
      question:
        `Given that all the choices are true, which one most effectively concludes the essay by connecting the narrator's growth to Odile's first lesson?`,
      options: [
        'NO CHANGE',
        'The far buoy, I later learned, was almost a mile from the dock.',
        'Odile still teaches beginners at the harbor every summer.',
        'Many sailors eventually move on to larger boats.',
      ],
      correctIndex: 0,
      explanation:
        `The final sentence turns Odile's warning about the wind into the lesson the narrator learned, tying the ending back to the essay's opening.`,
      optionExplanations: [
        `By saying that learning to sail means "learning to stop expecting" the wind to cooperate, the sentence recasts Odile's first lesson as the narrator's own hard-won understanding, closing the essay's loop.`,
        `The buoy's distance is a minor factual detail. It says nothing about Odile's lesson or about how the narrator has changed, so it would end the essay on a trivial note.`,
        `This sentence shifts attention to Odile's current schedule rather than to what the narrator learned, so it does not connect the narrator's growth to her first lesson.`,
        `A general remark about sailors moving on to larger boats has no link to Odile's warning about the wind or to the narrator's experience, so it would weaken the conclusion.`,
      ],
      skill: 'POW',
      marker: 10,
      difficulty: 'medium',
    },
  ],
}

const PASSAGE_2: ActFLPassage = {
  id: 'act-fl3-e-02',
  title: 'A Pizza Far from Hawaii',
  kind: 'informative',
  text: `Few foods start arguments as reliably as a pizza topped with ham and pineapple. The name suggests a tropical origin, but the Hawaiian pizza was invented {{1:thousands of miles away from Hawaii, at a great distance}}, in a small city in southwestern Ontario, Canada. Its fans praise the balance of sweet fruit and salty meat, while its detractors refuse to share a box with it.

Its {{2:creator, Sam Panopoulos, had}} moved from Greece to Canada as a young man in the 1950s. With his brothers, he eventually ran the Satellite Restaurant in Chatham, Ontario, a diner known for burgers, pancakes, and other familiar fare. Pizza was still a novelty in much of Canada at the time, but Panopoulos {{3:was totally psyched about}} it and began experimenting with toppings.

Inspired, he later said, by the sweet-and-sour dishes then popular in Chinese restaurants, {{4:the idea of mixing sweet and savory flavors appealed to him}}. Around 1962, by his own account, he tried adding canned pineapple to a pizza. Ham soon joined the pineapple, and the combination caught on with {{5:customers, many of them came}} back asking for it {{6:by name}}. That name, Panopoulos later said, probably came from the brand of canned pineapple he used.

The pizza's fame gradually spread far beyond Chatham. It appeared on menus across Canada and the United States and eventually reached {{7:Australia; where}} it became a menu fixture. Today it is sold everywhere from small-town pizzerias to large international chains. {{8:Not everyone, therefore, has been charmed.}} Some chefs dismiss fruit on pizza as an insult to Italian tradition, and polls suggest that few toppings are {{9:more divisive then}} pineapple.

Panopoulos died in 2017, but the argument he started shows no sign of ending. Every time someone orders a slice with ham and pineapple, a small piece of Canadian restaurant history comes along with it. Few inventions from a small-town diner have traveled so far or provoked so many debates. {{10}}`,
  questions: [
    {
      id: 'act-fl3-e-02-q1',
      question: STEM,
      options: [
        'NO CHANGE',
        'thousands of miles from Hawaii',
        'far, at a distance of thousands of miles, from Hawaii',
        'a great and very long distance from Hawaii',
      ],
      correctIndex: 1,
      explanation:
        '"Thousands of miles away" already conveys a great distance, so "at a great distance" is redundant; the concise version states the distance once.',
      optionExplanations: [
        '"At a great distance" repeats what "thousands of miles away" has already told the reader. The added phrase lengthens the sentence without adding any new information.',
        'The phrase "thousands of miles from Hawaii" states the distance vividly and only once, which makes it the clearest and most concise of the choices.',
        'Breaking up "far from Hawaii" with a second statement of the distance is both redundant and awkward, since the interrupting phrase only repeats what "far" already says.',
        '"Great" and "very long" describe the same distance, and the vague wording drops the vivid "thousands of miles." The choice is wordier and less precise than the concise option.',
      ],
      skill: 'KLA',
      marker: 1,
      difficulty: 'easy',
    },
    {
      id: 'act-fl3-e-02-q2',
      question: STEM,
      options: [
        'NO CHANGE',
        'creator Sam Panopoulos, had',
        'creator, Sam Panopoulos had',
        'creator, Sam Panopoulos; had',
      ],
      correctIndex: 0,
      explanation:
        'The pizza had only one creator, so his name is a nonessential appositive that needs a comma on each side.',
      optionExplanations: [
        'Because the pizza had a single creator, the name "Sam Panopoulos" simply renames "creator" and is nonessential. A pair of commas correctly sets it off from the rest of the sentence.',
        'Without the first comma, the remaining comma separates the subject from its verb, "had moved." A nonessential appositive needs commas on both sides, not just one.',
        'Omitting the second comma leaves the appositive unclosed, so the sentence seems to say "Sam Panopoulos had moved" while "Its creator" dangles. Appositive commas must come in pairs.',
        'A semicolon must separate two independent clauses, but "Its creator, Sam Panopoulos" is not a clause. The semicolon cuts the subject off from its verb.',
      ],
      skill: 'CSE',
      marker: 2,
      difficulty: 'medium',
    },
    {
      id: 'act-fl3-e-02-q3',
      question: STEM,
      options: ['NO CHANGE', 'was way into', 'saw promise in', 'went nuts over'],
      correctIndex: 2,
      explanation:
        'The essay uses a straightforward, informative tone, so the neutral phrase "saw promise in" fits; the other choices are slang.',
      optionExplanations: [
        '"Totally psyched" is casual slang that clashes with the essay\'s measured, informative tone. It also suggests giddy excitement rather than the business judgment the sentence describes.',
        '"Way into" is informal slang, out of place in an essay that otherwise uses standard, neutral language to describe a restaurant owner\'s decisions.',
        '"Saw promise in" suits the essay\'s informative tone and precisely conveys that Panopoulos thought pizza could succeed, which explains why he began experimenting with it.',
        '"Went nuts over" is slang that clashes with the essay\'s informative style, and it exaggerates his reaction instead of explaining why he experimented with pizza.',
      ],
      skill: 'KLA',
      marker: 3,
      difficulty: 'easy',
    },
    {
      id: 'act-fl3-e-02-q4',
      question: STEM,
      options: [
        'NO CHANGE',
        'mixing sweet and savory flavors seemed to him an idea worth testing',
        'the mixing of sweet and savory flavors was something he wanted to test',
        'he suspected that diners would enjoy a mix of sweet and savory flavors',
      ],
      correctIndex: 3,
      explanation:
        'The opening modifier describes someone who was inspired, so the word right after it must name that person: "he."',
      optionExplanations: [
        'The introductory phrase "Inspired ... by the sweet-and-sour dishes" must describe the subject that follows it. As written, that subject is "the idea," and an idea cannot be inspired.',
        'Here the subject after the modifier is "mixing sweet and savory flavors," so the sentence says the act of mixing was inspired. The modifier still dangles.',
        'The subject after the modifier is "the mixing," which cannot be inspired by anything. Only a person can be inspired, so this choice keeps the dangling-modifier error.',
        'Placing "he" directly after the introductory phrase makes clear that Panopoulos was the one inspired by the sweet-and-sour dishes, so the modifier attaches to the right subject.',
      ],
      skill: 'CSE',
      marker: 4,
      difficulty: 'medium',
    },
    {
      id: 'act-fl3-e-02-q5',
      question: STEM,
      options: [
        'NO CHANGE',
        'customers, many of whom came',
        'customers many of whom came',
        'customers, many of who came',
      ],
      correctIndex: 1,
      explanation:
        '"Many of whom" turns the second part into a relative clause, which can follow a comma; "whom" is required as the object of the preposition "of."',
      optionExplanations: [
        '"Many of them came back asking for it" is an independent clause, so joining it to the first clause with only a comma creates a comma splice.',
        '"Many of whom" begins a relative clause, which cannot stand alone and can therefore follow a comma. "Whom" is correct because it is the object of the preposition "of."',
        'The clause adds information about the customers rather than identifying particular ones, so it is nonessential and must be set off by a comma, which is missing here.',
        'After the preposition "of," the pronoun must be in the object form. "Who" is a subject pronoun, so "many of who" is incorrect in standard written English.',
      ],
      skill: 'CSE',
      marker: 5,
      difficulty: 'hard',
    },
    {
      id: 'act-fl3-e-02-q6',
      question:
        'The writer is considering deleting the underlined portion (placing a period after the word "it"). Should the underlined portion be kept or deleted?',
      options: [
        'Kept, because it sets up the next sentence, which explains where the name came from.',
        'Kept, because it shows that the customers knew Panopoulos personally.',
        'Deleted, because it repeats information given earlier in the paragraph.',
        'Deleted, because it shifts the focus from the pizza to its customers.',
      ],
      correctIndex: 0,
      explanation:
        'The next sentence begins "That name," which points back to customers asking for the pizza by name; without the phrase, the reference would have nothing to point to.',
      optionExplanations: [
        'The following sentence opens with "That name," which refers to customers asking for the pizza "by name." Keeping the phrase creates a smooth link into the explanation of where the name came from.',
        'The phrase refers to customers asking for the pizza by its name, not to their knowing Panopoulos. This reason misreads what "by name" describes.',
        'Nothing earlier in the paragraph mentions customers requesting the pizza by name, so the phrase is not repetitive. It introduces the paragraph\'s discussion of the name.',
        'The phrase keeps attention on the pizza, specifically its name, and leads directly into the next sentence about that name. It does not shift the focus to the customers.',
      ],
      skill: 'POW',
      marker: 6,
      difficulty: 'medium',
    },
    {
      id: 'act-fl3-e-02-q7',
      question: STEM,
      options: ['NO CHANGE', 'Australia, where', 'Australia, there', 'Australia. Where'],
      correctIndex: 1,
      explanation:
        '"Where it became a menu fixture" is a dependent clause describing Australia, so it should be attached with a comma, not a semicolon or a period.',
      optionExplanations: [
        'A semicolon must join two independent clauses, but "where it became a menu fixture" is a dependent clause that cannot stand alone, so the semicolon is incorrect.',
        'The comma correctly attaches the dependent clause "where it became a menu fixture" to "Australia," the place it describes, and the sentence is complete and clear.',
        'Replacing "where" with "there" turns the second part into an independent clause, so the comma now joins two independent clauses and creates a comma splice.',
        'The period cuts off "Where it became a menu fixture" as a separate sentence, but that clause has no main clause of its own, so it is a fragment.',
      ],
      skill: 'CSE',
      marker: 7,
      difficulty: 'medium',
    },
    {
      id: 'act-fl3-e-02-q8',
      question: STEM,
      options: [
        'NO CHANGE',
        'Not everyone, for example, has been charmed.',
        'Not everyone, similarly, has been charmed.',
        'Not everyone, however, has been charmed.',
      ],
      correctIndex: 3,
      explanation:
        'The pizza\'s spread around the world contrasts with the fact that some people dislike it, so "however" signals the turn.',
      optionExplanations: [
        '"Therefore" signals a conclusion drawn from the previous sentence, but the pizza\'s spread around the world does not lead logically to people disliking it. The relationship is contrast.',
        '"For example" introduces an illustration of the previous point, but critics of the pizza are not an example of its spreading to new countries. They point the other way.',
        '"Similarly" signals that the new idea resembles the previous one. The pizza\'s spread and its critics are opposing ideas, so a word of likeness is illogical here.',
        '"However" signals a contrast between the pizza\'s success on menus worldwide and the fact that some people still dislike it, which is exactly the turn the paragraph takes.',
      ],
      skill: 'POW',
      marker: 8,
      difficulty: 'easy',
    },
    {
      id: 'act-fl3-e-02-q9',
      question: STEM,
      options: ['NO CHANGE', 'most divisive than', 'more divisive than', 'the most divisive then'],
      correctIndex: 2,
      explanation:
        'A comparison requires "than," and the comparative "more" is the correct form for comparing pineapple with other toppings.',
      optionExplanations: [
        '"Then" refers to time, as in "first this, then that." A comparison requires "than," so "more divisive then" is a usage error.',
        '"Than" is correct here, but the superlative "most" cannot be paired with "than." A comparison between pineapple and other toppings requires the comparative "more."',
        'The comparative "more divisive" paired with "than" correctly compares pineapple with other toppings, completing the idiomatic structure "few toppings are more divisive than pineapple."',
        'This choice combines two errors: the superlative "the most" cannot introduce a comparison with "than," and "then" is a word about time, not a comparison.',
      ],
      skill: 'CSE',
      marker: 9,
      difficulty: 'easy',
    },
    {
      id: 'act-fl3-e-02-q10',
      question:
        'Suppose the writer\'s primary purpose had been to explain how a well-known food was invented and why it still provokes debate. Would this essay accomplish that purpose?',
      options: [
        'Yes, because it traces the pizza from Panopoulos\'s experiment to its spread and describes the disagreement it still causes.',
        'Yes, because it argues that pineapple belongs on pizza and that the pizza\'s many critics are simply mistaken.',
        'No, because it focuses mainly on the life of Sam Panopoulos rather than on the history of the pizza itself.',
        'No, because it never explains why some people object to pineapple as a pizza topping in the first place.',
      ],
      correctIndex: 0,
      explanation:
        'The essay covers the pizza\'s invention in Chatham, its spread to other countries, and the criticism it still draws, which matches the stated purpose.',
      optionExplanations: [
        'The essay explains who invented the pizza, what inspired the combination, how it spread, and why critics object, so it fulfills both halves of the stated purpose.',
        'The essay reports the debate without taking a side. It never argues that pineapple belongs on pizza or that critics are wrong, so this reason misdescribes the essay.',
        'Panopoulos\'s life appears only as it relates to the pizza: his restaurant, his experiment, and the lasting argument. The pizza\'s invention and reception remain the focus.',
        'The essay does explain an objection: some chefs see fruit on pizza as an insult to Italian tradition. This reason overlooks that sentence in the fourth paragraph.',
      ],
      skill: 'POW',
      marker: 10,
      difficulty: 'medium',
    },
  ],
}


const PASSAGE_3: ActFLPassage = {
  id: 'act-fl3-e-03',
  title: 'Pressure from Below',
  kind: 'informative',
  text: `In the Haukadalur valley of southwestern Iceland, a pool of steaming water sits quietly for a few minutes. Then its surface {{1:bulges into a blue dome, bursts, and a column of water shoots}} high into the air. This is Strokkur, one of the most dependable geysers in the world, {{2:and it erupts roughly every five to ten minutes}}. Crowds gather around its rim, cameras raised, waiting for the next eruption.

Strokkur's neighbor, Geysir, gave its name to every geyser on Earth; the English word comes from the Icelandic verb *geysa*, meaning "to gush." Geysir itself, {{3:therefore,}} has been mostly quiet for decades, springing back to life for a time after some earthquakes.

A geyser needs three {{4:ingredients, such as: a}} steady supply of water, a powerful source of heat, and a narrow underground plumbing system. Iceland has all three. The island sits on the Mid-Atlantic Ridge, where the North American and Eurasian plates are slowly pulling apart, so molten rock lies unusually close to the surface. {{5}} Rain and melted snow {{6:seeps}} down through cracks in the ground and collect in channels heated by this rock.

Deep in those channels, the water grows far hotter than 100 degrees Celsius, the temperature at which water boils at sea level. It does not {{7:boil, however because}} the weight of the water above it raises the pressure, and higher pressure raises the boiling point. Eventually, a few bubbles of steam form and rise {{8:upward toward the top}}, pushing some water out of the vent. That loss of water lowers the pressure on the superheated water below, which flashes into steam {{9:almost instantaneous}}. The expanding steam hurls the water above it into the sky.

Within seconds, the eruption is over. The water drains back into the pool, the channels slowly refill, and the heating begins again. Strokkur repeats this cycle many times an hour, day and night. {{10}}`,
  questions: [
    {
      id: 'act-fl3-e-03-q1',
      question: STEM,
      options: [
        'NO CHANGE',
        'bulges into a blue dome, bursts, and sends a column of water shooting',
        'bulges into a blue dome, bursts, and then a column of water shoots',
        'bulges into a blue dome, bursting, and a column of water shoots',
      ],
      correctIndex: 1,
      explanation:
        'The three actions of the pool\'s surface should be parallel verbs sharing one subject: it "bulges," "bursts," and "sends."',
      optionExplanations: [
        'The first two items are verbs whose subject is "its surface," but the third switches to a new clause with its own subject, "a column of water." The series is not parallel.',
        'All three items are now verbs sharing the subject "its surface": it bulges, bursts, and sends a column of water shooting upward. The series is parallel and reads smoothly.',
        'Adding "then" does not fix the problem. The third item is still a full clause with its own subject, "a column of water," while the first two items are simple verbs.',
        'Changing "bursts" to "bursting" makes the series even less parallel, mixing a verb, a participle, and a clause with its own subject. The sentence becomes harder to follow.',
      ],
      skill: 'CSE',
      marker: 1,
      difficulty: 'medium',
    },
    {
      id: 'act-fl3-e-03-q2',
      question:
        'Given that all the choices are true, which one best supports the claim that Strokkur is one of the most dependable geysers in the world?',
      options: [
        'NO CHANGE',
        'and its name means "churn" in Icelandic',
        'and it draws large crowds of visitors',
        'and its pool is ringed by a simple rope barrier',
      ],
      correctIndex: 0,
      explanation:
        'A dependable geyser erupts often and predictably, so only the detail about the eruption interval supports the claim.',
      optionExplanations: [
        'A geyser is dependable if it erupts often and on a predictable schedule. Stating that Strokkur erupts roughly every five to ten minutes directly supports that description.',
        'The meaning of the geyser\'s name is an interesting detail, but it says nothing about how regularly Strokkur erupts, so it does not support the claim of dependability.',
        'Large crowds suggest that the geyser is popular, not that it erupts on a reliable schedule. Popularity and dependability are different qualities.',
        'A rope barrier is a detail about the site\'s safety measures. It gives no information about how often or how predictably the geyser erupts.',
      ],
      skill: 'POW',
      marker: 2,
      difficulty: 'easy',
    },
    {
      id: 'act-fl3-e-03-q3',
      question: STEM,
      options: ['NO CHANGE', 'for instance,', 'however,', 'in addition,'],
      correctIndex: 2,
      explanation:
        'The geyser that gave its name to all others has itself been mostly quiet, an ironic contrast that "however" signals.',
      optionExplanations: [
        '"Therefore" signals a result, but Geysir\'s going quiet is not a consequence of its giving its name to other geysers. The two ideas contrast rather than follow from each other.',
        '"For instance" introduces an example of the previous idea, but Geysir\'s quiet decades are not an example of its lending its name to geysers worldwide.',
        'The famous geyser that named all others has itself been mostly quiet for decades. "However" signals this contrast between Geysir\'s fame and its current inactivity.',
        '"In addition" simply adds another similar point, but Geysir\'s inactivity works against the expectation set up by its fame. The relationship is contrast, not addition.',
      ],
      skill: 'POW',
      marker: 3,
      difficulty: 'easy',
    },
    {
      id: 'act-fl3-e-03-q4',
      question: STEM,
      options: ['NO CHANGE', 'ingredients: a', 'ingredients; a', 'ingredients a'],
      correctIndex: 1,
      explanation:
        'A complete clause, "A geyser needs three ingredients," can be followed by a colon that introduces the list of those ingredients.',
      optionExplanations: [
        'A colon should follow a complete clause, but "such as" leaves the clause unfinished. "Such as" also implies a few examples, yet the list names all three ingredients.',
        '"A geyser needs three ingredients" is a complete clause, so a colon can introduce the list that names exactly those three ingredients. The punctuation is correct.',
        'A semicolon must be followed by an independent clause, but what follows is only a list of noun phrases. The semicolon is incorrect here.',
        'With no punctuation, the list runs directly into "ingredients," so the reader cannot tell where the general statement ends and the specific items begin.',
      ],
      skill: 'CSE',
      marker: 4,
      difficulty: 'medium',
    },
    {
      id: 'act-fl3-e-03-q5',
      question:
        'At this point, the writer is considering adding the following true sentence:\n\n> Geothermal energy also heats the large majority of homes in Iceland.\n\nShould the writer make this addition here?',
      options: [
        'Yes, because it shows another important effect of the heat beneath Iceland.',
        'Yes, because it explains why the water in geyser channels becomes so hot.',
        'No, because it shifts the focus from how geysers form to how Icelanders use heat.',
        'No, because it suggests that geysers pose a danger to homes in Iceland.',
      ],
      correctIndex: 2,
      explanation:
        'The paragraph explains how Iceland supplies the heat and water a geyser needs; a sentence about heating homes is a digression.',
      optionExplanations: [
        'Home heating is indeed an effect of Iceland\'s underground heat, but the paragraph\'s job is to show how geysers get their three ingredients. Another effect of the heat is a digression.',
        'The sentence says nothing about how water in geyser channels is heated. It describes how people use geothermal energy, which is a separate topic.',
        'The paragraph explains how Iceland supplies a geyser\'s heat and water. A sentence about heating homes turns from geysers to human uses of geothermal energy, interrupting that explanation.',
        'The sentence makes no claim about danger and does not connect geysers to homes at all. The real reason to leave it out is that it drifts off topic.',
      ],
      skill: 'POW',
      marker: 5,
      difficulty: 'medium',
    },
    {
      id: 'act-fl3-e-03-q6',
      question: STEM,
      options: ['NO CHANGE', 'seep', 'has seeped', 'is seeping'],
      correctIndex: 1,
      explanation:
        'The compound subject "Rain and melted snow" is plural, so it takes the plural verb "seep," which also matches "collect" later in the sentence.',
      optionExplanations: [
        '"Rain and melted snow" is a compound subject joined by "and," so it needs a plural verb. The singular "seeps" also clashes with "collect" later in the same sentence.',
        'The plural verb "seep" agrees with the compound subject "Rain and melted snow" and matches the plural, present-tense "collect" that follows "and" in the sentence.',
        '"Has seeped" is singular and in the present perfect tense, so it disagrees with the compound subject and does not match "collect" later in the sentence.',
        '"Is seeping" is singular, so it disagrees with the compound subject "Rain and melted snow," and its progressive form clashes with the simple present "collect."',
      ],
      skill: 'CSE',
      marker: 6,
      difficulty: 'easy',
    },
    {
      id: 'act-fl3-e-03-q7',
      question: STEM,
      options: ['NO CHANGE', 'boil; however because', 'boil however, because', 'boil, however, because'],
      correctIndex: 3,
      explanation:
        '"However" interrupts the sentence, so it must be set off by a comma on each side.',
      optionExplanations: [
        '"However" interrupts the sentence, so it needs a comma on each side. Without the second comma, "however" runs into "because," which blurs the logic of the sentence.',
        'A semicolon must separate two independent clauses, but "because the weight of the water above it raises the pressure" is a dependent clause. The semicolon is incorrect.',
        'An interrupting word needs commas on both sides. Removing the comma before "however" leaves only one comma, which breaks the sentence in the wrong place.',
        'The interrupting word "however" is set off by a pair of commas, so the main clause "It does not boil" flows correctly into the dependent clause beginning with "because."',
      ],
      skill: 'CSE',
      marker: 7,
      difficulty: 'medium',
    },
    {
      id: 'act-fl3-e-03-q8',
      question: STEM,
      options: [
        'NO CHANGE',
        'upward, ascending,',
        'in an upward direction toward the top',
        'DELETE the underlined portion.',
      ],
      correctIndex: 3,
      explanation:
        'The verb "rise" already means to move upward, and the sentence goes on to say the water leaves the vent, so the underlined words are redundant.',
      optionExplanations: [
        '"Rise" already means to move upward, so "upward" is redundant, and "toward the top" repeats the idea again. The phrase lengthens the sentence without adding meaning.',
        '"Ascending" means the same thing as "rise," and "upward" repeats the idea a third time. This choice is redundant and awkwardly punctuated as well.',
        '"In an upward direction toward the top" is the wordiest option, restating the meaning of "rise" twice. It makes the sentence longer without making it any clearer.',
        'The verb "rise" already conveys upward motion, and "out of the vent" shows where the water goes. Deleting the underlined words leaves a clear, concise sentence.',
      ],
      skill: 'KLA',
      marker: 8,
      difficulty: 'easy',
    },
    {
      id: 'act-fl3-e-03-q9',
      question: STEM,
      options: ['NO CHANGE', 'most instantaneous', 'almost instantaneously', 'almost instantaneous-like'],
      correctIndex: 2,
      explanation:
        'The word describes how the water flashes into steam, so it must be an adverb: "instantaneously."',
      optionExplanations: [
        '"Instantaneous" is an adjective, but here the word describes how the water flashes into steam, which is an action. Modifying a verb requires an adverb.',
        '"Most instantaneous" is a superlative adjective, so it uses the wrong part of speech for modifying a verb and implies a comparison that the sentence never makes.',
        'The adverb "instantaneously" correctly modifies the verb "flashes," and "almost" qualifies it, showing that the change into steam happens nearly all at once.',
        'Adding "-like" to an adjective creates a nonstandard word, and the result is still not an adverb, so it cannot properly modify the verb "flashes."',
      ],
      skill: 'CSE',
      marker: 9,
      difficulty: 'easy',
    },
    {
      id: 'act-fl3-e-03-q10',
      question:
        'The writer wants to end the essay with a sentence that returns to the image described in the first paragraph. Which choice best accomplishes this goal?',
      options: [
        'In a few minutes, the blue dome will swell on the surface once again.',
        'Geysers are also found in places such as Yellowstone National Park.',
        'Geysers form only where heat, water, and plumbing come together.',
        'Visitors are warned to stay behind the barriers around the pool.',
      ],
      correctIndex: 0,
      explanation:
        'The essay opens with Strokkur\'s surface bulging into a blue dome, and predicting that the dome will swell again closes the essay with that image.',
      optionExplanations: [
        'The essay opens with Strokkur\'s surface bulging into a blue dome. Predicting that the dome will soon swell again returns to that image and reinforces the cycle the final paragraph describes.',
        'Yellowstone is never mentioned elsewhere in the essay, so ending with it would introduce a new topic instead of returning to the Icelandic scene that opens the essay.',
        'This sentence restates the third paragraph\'s point about what a geyser needs. It does not return to the opening image of the blue dome on Strokkur\'s surface.',
        'A warning to visitors introduces a new concern about safety. It does not echo the image of the bulging blue dome described in the first paragraph.',
      ],
      skill: 'POW',
      marker: 10,
      difficulty: 'easy',
    },
  ],
}


const PASSAGE_4: ActFLPassage = {
  id: 'act-fl3-e-04',
  title: 'Let Owners Fix What They Own',
  kind: 'argumentative',
  text: `When the screen on my phone cracked last year, the repair shop down the street could not fix it. The technicians there had plenty of {{1:skill. Lacking only}} the right parts. The manufacturer sold replacement screens only to its own authorized service centers, the nearest of which was two hours away. Experiences like mine are common, and they make a strong case for right-to-repair laws in every state.

Such laws require manufacturers to make parts, tools, and repair manuals available to independent shops and to owners on fair terms. In effect, companies are prohibited {{2:to reserve}} the resources that make repair possible for their own service centers. {{3:The idea already has a track record.}} In 2012, Massachusetts voters approved a ballot measure requiring automakers to share diagnostic information with independent mechanics, and states such as New York and Minnesota have since passed laws covering consumer electronics.

The benefits reach well beyond convenience. When independent shops can buy parts, they can compete with authorized centers, and competition tends to {{4:do something to prices}}. {{5:In contrast,}} a device that can be repaired stays in use longer instead of ending up in a landfill. Discarded electronics are among the fastest-growing kinds of waste, and their components can contain lead and other toxic substances. {{6:Fewer}} waste also means less mining for the metals that new devices require.

Manufacturers warn that letting untrained people open devices could create safety and security risks. Lithium-ion batteries can catch fire if punctured, and phones store sensitive personal data. These concerns deserve a hearing, but they argue for better repair information, not for less repair. {{7:The manufacturers own technicians}} handle the same batteries and the same data every day, {{8:guided}} by the very manuals the companies decline to share.

{{9:A cracked screen should be a twenty-minute fix, not a four-hour round trip.}} Right-to-repair laws would let owners, not manufacturers, decide who fixes the things they own. {{10}}`,
  questions: [
    {
      id: 'act-fl3-e-04-q1',
      question: STEM,
      options: ['NO CHANGE', 'skill; lacking only', 'skill; they lacked only', 'skill. They lacking only'],
      correctIndex: 2,
      explanation:
        '"Lacking only the right parts" has no subject or main verb, so it cannot stand alone; a semicolon followed by the complete clause "they lacked only the right parts" fixes the fragment.',
      optionExplanations: [
        '"Lacking only the right parts" has no subject and no main verb, so punctuating it as its own sentence creates a fragment.',
        'A semicolon must be followed by an independent clause, but "lacking only the right parts" is a participial phrase. The semicolon leaves the phrase just as incomplete.',
        '"They lacked only the right parts" is a complete independent clause, so the semicolon properly joins it to the closely related clause about the technicians\' skill.',
        'Adding the subject "They" does not create a sentence, because "lacking" is a participle, not a main verb. The second group of words is still a fragment.',
      ],
      skill: 'CSE',
      marker: 1,
      difficulty: 'easy',
    },
    {
      id: 'act-fl3-e-04-q2',
      question: STEM,
      options: ['NO CHANGE', 'in reserving', 'for reserving', 'from reserving'],
      correctIndex: 3,
      explanation:
        'The standard idiom is "prohibited from" followed by a gerund, so "prohibited from reserving" is correct.',
      optionExplanations: [
        '"Prohibited to" is not idiomatic in standard written English. The verb "prohibit" is followed by "from" and a gerund, as in "prohibited from reserving."',
        '"Prohibited in reserving" uses the wrong preposition. In this sense, "in" does not combine with "prohibit," so the phrase is unidiomatic.',
        '"Prohibited for reserving" suggests that companies are banned as a punishment for reserving something, which is not the intended meaning and is not the standard idiom.',
        '"Prohibited from reserving" uses the standard idiom for a ban on an action: "prohibit" followed by "from" and a gerund. The sentence is idiomatic and clear.',
      ],
      skill: 'CSE',
      marker: 2,
      difficulty: 'medium',
    },
    {
      id: 'act-fl3-e-04-q3',
      question:
        'Which choice provides the most effective transition from the preceding sentence to the examples that follow in this paragraph?',
      options: [
        'NO CHANGE',
        'The idea has attracted many critics.',
        'Repair manuals can run to hundreds of pages.',
        'Some owners would rather buy a new device anyway.',
      ],
      correctIndex: 0,
      explanation:
        'The sentences that follow describe laws already passed in several states, which is exactly the "track record" this sentence announces.',
      optionExplanations: [
        'The examples that follow, a 2012 Massachusetts measure and later laws in New York and Minnesota, show that the idea has already been tried, so this sentence introduces them precisely.',
        'The paragraph goes on to describe laws that passed, not objections to them. Announcing critics would lead the reader to expect a counterargument the paragraph never gives.',
        'The length of repair manuals has nothing to do with the legislative examples that follow, so this sentence would interrupt the move from defining the laws to describing them.',
        'Owners\' preferences do not connect to the examples of laws that follow, and the sentence undercuts the writer\'s argument without being answered anywhere in the paragraph.',
      ],
      skill: 'POW',
      marker: 3,
      difficulty: 'medium',
    },
    {
      id: 'act-fl3-e-04-q4',
      question: STEM,
      options: ['NO CHANGE', 'change prices around', 'push prices down', 'have an effect on prices'],
      correctIndex: 2,
      explanation:
        'The writer\'s point is that competition lowers repair costs, and "push prices down" states that precisely.',
      optionExplanations: [
        '"Do something to prices" is vague: it does not say whether prices rise or fall, so it fails to support the writer\'s claim that repair laws save owners money.',
        '"Change prices around" is vague and informal, and it does not specify a direction. The writer\'s argument depends on the claim that prices fall.',
        '"Push prices down" states precisely what competition does in the writer\'s argument: it lowers repair costs, which is the benefit this part of the paragraph explains.',
        '"Have an effect on prices" is wordy and vague. An effect could be an increase, so this choice does not show that competition benefits consumers.',
      ],
      skill: 'KLA',
      marker: 4,
      difficulty: 'easy',
    },
    {
      id: 'act-fl3-e-04-q5',
      question: STEM,
      options: ['NO CHANGE', 'Instead,', 'Nevertheless,', 'Moreover,'],
      correctIndex: 3,
      explanation:
        'Longer device life is a second benefit added to lower prices, so "Moreover" signals the addition.',
      optionExplanations: [
        '"In contrast" signals an opposing idea, but longer-lasting devices are a second benefit of repair, not a point that contrasts with lower prices.',
        '"Instead" signals that one thing replaces another, but the benefit of longer device life does not replace the benefit of lower prices. Both apply.',
        '"Nevertheless" signals that something happens despite the previous point. Longer device life is not in tension with lower prices, so this transition is illogical.',
        '"Moreover" adds a further point that supports the same argument. Longer-lasting devices are a second benefit, added to the lower prices just described.',
      ],
      skill: 'POW',
      marker: 5,
      difficulty: 'easy',
    },
    {
      id: 'act-fl3-e-04-q6',
      question: STEM,
      options: ['NO CHANGE', 'Less', 'Lesser', 'Fewest'],
      correctIndex: 1,
      explanation:
        '"Waste" is a noncount noun here, so it takes "less," not "fewer."',
      optionExplanations: [
        '"Fewer" is used with things that can be counted, such as "fewer devices." "Waste" is a noncount noun, so it requires "less."',
        '"Waste" here is a noncount noun, so "less" is the correct word. It also parallels "less mining" later in the same sentence.',
        '"Lesser" means "smaller in importance or quality," as in "a lesser problem." It does not express a smaller amount of waste.',
        '"Fewest" is a superlative that applies to countable nouns and implies a comparison among three or more things, neither of which fits this sentence.',
      ],
      skill: 'CSE',
      marker: 6,
      difficulty: 'easy',
    },
    {
      id: 'act-fl3-e-04-q7',
      question: STEM,
      options: [
        'NO CHANGE',
        "The manufacturers' own technicians",
        "The manufacturers own technician's",
        "The manufacturers's own technicians",
      ],
      correctIndex: 1,
      explanation:
        'The technicians belong to the manufacturers, a plural noun ending in "s," so the plural possessive "manufacturers\'" is needed.',
      optionExplanations: [
        'Without an apostrophe, "manufacturers" is just a plural noun, so nothing shows that the technicians belong to the companies. A possessive form is needed.',
        'The essay discusses manufacturers in the plural, and the technicians belong to them. An apostrophe after the final "s" forms the correct plural possessive.',
        'This choice puts the apostrophe on "technician\'s," which makes the technicians the owners of something, while leaving "manufacturers" without the possessive it needs.',
        'A plural noun ending in "s" forms its possessive with an apostrophe alone. Adding another "s" after the apostrophe creates a nonstandard form.',
      ],
      skill: 'CSE',
      marker: 7,
      difficulty: 'medium',
    },
    {
      id: 'act-fl3-e-04-q8',
      question: STEM,
      options: ['NO CHANGE', 'in a manner that is guided', 'being guided in their work', 'having been guided along'],
      correctIndex: 0,
      explanation:
        'The single word "guided" clearly connects the technicians\' work to the manuals; the other choices add words without adding meaning.',
      optionExplanations: [
        'The single participle "guided" clearly links the technicians\' daily work to the manuals the companies keep to themselves. It says everything needed in the fewest words.',
        '"In a manner that is guided" takes six words to say what "guided" says in one. The extra words make the sentence wordy without adding meaning.',
        '"Being guided in their work" adds the unnecessary "being" and "in their work," which only restates that the technicians are working. The sentence becomes wordier.',
        '"Having been guided along" suggests the guidance happened earlier rather than during the daily work, and "along" adds nothing. It is both wordier and less precise.',
      ],
      skill: 'KLA',
      marker: 8,
      difficulty: 'medium',
    },
    {
      id: 'act-fl3-e-04-q9',
      question:
        'Given that all the choices are true, which one most effectively connects the conclusion to the experience described in the first paragraph?',
      options: [
        'NO CHANGE',
        'Phones have grown more expensive over the past decade.',
        'Many people now keep their phones for several years.',
        'Some independent shops also repair laptops and tablets.',
      ],
      correctIndex: 0,
      explanation:
        'The cracked screen and the four-hour round trip (two hours each way to the nearest service center) recall the writer\'s opening anecdote.',
      optionExplanations: [
        'The cracked screen and the four-hour round trip, two hours each way to the nearest authorized center, recall the writer\'s experience in the first paragraph and frame the conclusion with it.',
        'Rising phone prices are a general trend that the essay never discusses. The sentence does not mention the cracked screen or the distant service center.',
        'How long people keep their phones is a new point, not a reference to the writer\'s experience with the cracked screen described in the first paragraph.',
        'Laptops and tablets play no part in the opening anecdote, so this sentence would broaden the topic instead of connecting back to the writer\'s broken phone.',
      ],
      skill: 'POW',
      marker: 9,
      difficulty: 'easy',
    },
    {
      id: 'act-fl3-e-04-q10',
      question:
        'Suppose the writer\'s primary purpose had been to present both sides of the right-to-repair debate without favoring either one. Would this essay accomplish that purpose?',
      options: [
        'Yes, because it describes both the benefits of repair laws and the concerns of manufacturers.',
        'Yes, because it reports what Massachusetts, New York, and Minnesota have already done.',
        'No, because it never mentions any objection that manufacturers have raised to such laws.',
        'No, because it argues for repair laws and raises manufacturers\' concerns mainly to answer them.',
      ],
      correctIndex: 3,
      explanation:
        'The writer openly argues for right-to-repair laws in every state and mentions manufacturers\' objections only to rebut them, so the essay is not evenhanded.',
      optionExplanations: [
        'The essay does mention manufacturers\' safety and security concerns, but only to argue that they call for better repair information. Presenting a concern in order to rebut it is not evenhanded.',
        'The laws other states have passed are offered as evidence that the idea works. Those examples support the writer\'s position rather than balancing it.',
        'The essay does mention objections: the fourth paragraph describes manufacturers\' warnings about battery fires and personal data, so this reason is factually wrong about the essay.',
        'From the opening anecdote to the call for laws in every state, the writer takes a clear side. Manufacturers\' concerns appear only so that the writer can respond to them.',
      ],
      skill: 'POW',
      marker: 10,
      difficulty: 'medium',
    },
  ],
}


const PASSAGE_5: ActFLPassage = {
  id: 'act-fl3-e-05',
  title: 'Blood Memories',
  kind: 'informative',
  text: `When the curtain rises on Alvin Ailey's *Revelations*, a group of dancers stands clustered in a pool of light, {{1:dressed in costumes}}. The music is the spiritual "I Been 'Buked," and the dancers' bodies seem to rise from the ground and then sink back beneath an invisible weight. {{2:Since its premiere in New York in 1960 and continuing on through all the decades up to now}}, the piece {{3:has became}} one of the best-known works in American modern dance.

Ailey, who had founded his own company in 1958, drew on what he called "blood memories" of his childhood in rural Texas. {{4:In particular,}} he remembered church services filled with spirituals, gospel songs, and the voices of a congregation. He set *Revelations* to that kind of music and arranged it in three sections that move from sorrow toward celebration.

[1] The first section, "Pilgrim of Sorrow," expresses longing and the weight of hardship. [2] In the second, "Take Me to the Water," dancers dressed in white move toward a baptism while long strips of blue and white fabric ripple across the stage to {{5:suggest}} a river. [3] The women's {{6:costumes—yellow dresses, wide-brimmed hats, and fluttering fans,}} recall a Sunday morning congregation. [4] The final section, "Move, Members, Move," returns to the church itself. {{7}}

Ailey died in 1989, but by then his company {{8:performs}} *Revelations* for audiences around the world. {{9:Modern dance developed largely in the early twentieth century, partly as a rebellion against the strict rules of ballet.}} The piece remains a fixture of the company's seasons, and it is often described as one of the most widely seen modern dance works ever created. Generations of the company's dancers have learned its steps, each cast passing them on to the next. For many viewers, it is a first encounter with modern dance, and its joyful finale often sends audiences out of the theater clapping. {{10}}`,
  questions: [
    {
      id: 'act-fl3-e-05-q1',
      question:
        'Given that all the choices are true, which one adds the most vivid visual detail about the dancers in the opening moments of the piece?',
      options: [
        'NO CHANGE',
        'their arms stretched outward like wings',
        'waiting quietly for the music to begin',
        'in front of a plain, darkened backdrop',
      ],
      correctIndex: 1,
      explanation:
        'Only the image of arms stretched outward like wings gives a specific picture of the dancers themselves.',
      optionExplanations: [
        '"Dressed in costumes" is vague, since nearly every dancer on any stage wears a costume. It gives the reader no specific image of how these dancers look.',
        'Arms stretched outward like wings give a precise, striking picture of the dancers\' bodies, and the image prepares for the next sentence about their rising and sinking.',
        '"Waiting quietly" describes what the dancers are doing, not how they look. It offers no concrete visual detail about the dancers themselves.',
        'The backdrop is part of the stage, not the dancers. This detail describes the setting rather than giving a vivid image of the dancers in the opening moments.',
      ],
      skill: 'POW',
      marker: 1,
      difficulty: 'easy',
    },
    {
      id: 'act-fl3-e-05-q2',
      question: STEM,
      options: [
        'NO CHANGE',
        'Ever since and from the time of its New York premiere in 1960',
        'Since it premiered in New York in 1960 and continuing to now',
        'Since its premiere in New York in 1960',
      ],
      correctIndex: 3,
      explanation:
        '"Since" already means "from that time until now," so the phrase needs only the starting point: the 1960 premiere.',
      optionExplanations: [
        '"Since" already means "from that time until now," so "continuing on through all the decades up to now" repeats the idea at great length.',
        '"Ever since" and "from the time of" express the same idea, so stacking them is redundant. The phrase is wordy without adding any information.',
        '"Continuing to now" repeats what "since" already conveys, and the dangling "and continuing" does not fit grammatically with the rest of the sentence.',
        '"Since its premiere in New York in 1960" marks the starting point, and the verb that follows already shows that the time span extends to the present. Nothing more is needed.',
      ],
      skill: 'KLA',
      marker: 2,
      difficulty: 'easy',
    },
    {
      id: 'act-fl3-e-05-q3',
      question: STEM,
      options: ['NO CHANGE', 'have become', 'has become', 'becoming'],
      correctIndex: 2,
      explanation:
        'The present perfect tense pairs "has" with the past participle "become," and "has" agrees with the singular subject "the piece."',
      optionExplanations: [
        'The present perfect tense pairs "has" with a past participle. "Became" is the simple past form, so "has became" is incorrect; the participle is "become."',
        '"Have" is plural, but the subject "the piece" is singular. The helping verb must be "has," so this choice creates a subject-verb agreement error.',
        'The singular "has" agrees with "the piece," and "become" is the correct past participle, forming the present perfect that suits a status continuing from 1960 to now.',
        '"Becoming" is a participle with no helping verb, so "the piece becoming one of the best-known works" has no true main verb, and the sentence becomes a fragment.',
      ],
      skill: 'CSE',
      marker: 3,
      difficulty: 'easy',
    },
    {
      id: 'act-fl3-e-05-q4',
      question: STEM,
      options: ['NO CHANGE', 'As a result,', 'Nevertheless,', 'On the other hand,'],
      correctIndex: 0,
      explanation:
        'The sentence singles out one specific part of the childhood memories just mentioned, so "In particular" fits.',
      optionExplanations: [
        'The previous sentence mentions Ailey\'s childhood memories in general, and this sentence singles out one specific part of them, the church services. "In particular" signals that narrowing.',
        '"As a result" signals that the church memories were caused by drawing on "blood memories," which reverses the logic. The church services are part of those memories.',
        '"Nevertheless" signals contrast, but remembering church services does not go against drawing on childhood memories. It is an example of those memories.',
        '"On the other hand" introduces an opposing point, yet the church memories agree with and specify the previous sentence rather than opposing it.',
      ],
      skill: 'POW',
      marker: 4,
      difficulty: 'medium',
    },
    {
      id: 'act-fl3-e-05-q5',
      question: STEM,
      options: ['NO CHANGE', 'propose', 'recommend', 'hint toward'],
      correctIndex: 0,
      explanation:
        'Here "suggest" means "call to mind" or "represent," which is what rippling fabric does for a river.',
      optionExplanations: [
        'Here "suggest" means "call to mind" or "represent," which is exactly what fabric rippling across a stage does for a river. The word is precise in this context.',
        '"Propose" means to put forward a plan or an offer, as in proposing an idea. Fabric cannot propose a river, so the word does not fit the meaning.',
        '"Recommend" means to advise or endorse something. The fabric is not advising anyone, so this choice uses a synonym of "suggest" in the wrong sense.',
        'The standard idiom is "hint at," not "hint toward," and "hint" implies something faint or indirect rather than a clear visual representation of a river.',
      ],
      skill: 'KLA',
      marker: 5,
      difficulty: 'medium',
    },
    {
      id: 'act-fl3-e-05-q6',
      question: STEM,
      options: [
        'NO CHANGE',
        'costumes, yellow dresses, wide-brimmed hats, and fluttering fans—',
        'costumes—yellow dresses, wide-brimmed hats, and fluttering fans',
        'costumes—yellow dresses, wide-brimmed hats, and fluttering fans—',
      ],
      correctIndex: 3,
      explanation:
        'An interrupting list that opens with a dash must close with a dash, especially since the list contains commas of its own.',
      optionExplanations: [
        'The list is opened with a dash but closed with a comma. An interruption must begin and end with the same punctuation, so the closing comma should be a dash.',
        'This choice reverses the mismatch, opening with a comma and closing with a dash. A comma before the list would also blur it with the commas inside the series.',
        'Without closing punctuation, the list runs straight into the verb "recall," making it seem as though only the fans recall a congregation. The interruption must be closed.',
        'A pair of dashes cleanly sets off the list of costume pieces, which contains its own commas, so the reader can see that "costumes" is the subject of "recall."',
      ],
      skill: 'CSE',
      marker: 6,
      difficulty: 'medium',
    },
    {
      id: 'act-fl3-e-05-q7',
      question: 'For the sake of logic and cohesion, Sentence 3 should be placed:',
      options: ['where it is now.', 'before Sentence 1.', 'after Sentence 1.', 'after Sentence 4.'],
      correctIndex: 3,
      explanation:
        'The costumes recall a Sunday congregation, so they belong to the final section, which Sentence 4 introduces as returning "to the church itself."',
      optionExplanations: [
        'Where it is now, the sentence about yellow dresses follows the description of dancers dressed in white for the baptism, so readers would wrongly link the costumes to the second section.',
        'Placed first, the sentence would describe costumes before the paragraph names any section, leaving the reader unable to tell which part of the dance is meant.',
        'After Sentence 1, the yellow costumes would seem to belong to "Pilgrim of Sorrow," a section about longing and hardship, which clashes with the festive Sunday imagery.',
        'Sentence 4 introduces the final section, which "returns to the church itself." The costumes that recall a Sunday congregation then describe that section, completing the paragraph logically.',
      ],
      skill: 'POW',
      marker: 7,
      difficulty: 'medium',
    },
    {
      id: 'act-fl3-e-05-q8',
      question: STEM,
      options: ['NO CHANGE', 'has performed', 'had performed', 'will perform'],
      correctIndex: 2,
      explanation:
        '"By then" refers to a past moment, Ailey\'s death in 1989, so the performances completed before it call for the past perfect "had performed."',
      optionExplanations: [
        '"By then" points to a moment in the past, 1989, so the present-tense "performs" is illogical. An action completed before a past moment requires the past perfect.',
        'The present perfect "has performed" connects the past to the present, but "by then" refers to a past moment, Ailey\'s death in 1989. The past perfect is needed.',
        'The past perfect "had performed" shows that the performances took place before the past moment named by "by then," Ailey\'s death in 1989. The sequence of tenses is logical.',
        '"Will perform" places the performances in the future, which contradicts "by then," a phrase that refers to what had already happened by 1989.',
      ],
      skill: 'CSE',
      marker: 8,
      difficulty: 'medium',
    },
    {
      id: 'act-fl3-e-05-q9',
      question: 'The writer is considering deleting the underlined sentence. Should the sentence be kept or deleted?',
      options: [
        'Deleted, because it gives general background on modern dance that interrupts the account of how Revelations has endured.',
        'Deleted, because it contradicts the claim that Revelations is a modern dance work.',
        'Kept, because it explains why Ailey chose spirituals and gospel songs as his music.',
        'Kept, because it shows that Revelations followed the strict rules of ballet.',
      ],
      correctIndex: 0,
      explanation:
        'The paragraph traces how Revelations has endured since Ailey\'s death; a general fact about the origins of modern dance is off topic there.',
      optionExplanations: [
        'The surrounding sentences trace how Revelations has endured since Ailey\'s death. A general fact about the origins of modern dance breaks that thread without telling the reader anything about Ailey\'s piece.',
        'Saying that modern dance rebelled against ballet does not contradict the claim that Revelations is modern dance. The sentence should go because it is off topic, not because it conflicts.',
        'The sentence says nothing about spirituals, gospel songs, or Ailey\'s choice of music, so it cannot explain that choice. It concerns the history of modern dance in general.',
        'The sentence describes modern dance as a rebellion against ballet\'s strict rules, so it would suggest the opposite. Nothing in it shows Revelations following those rules.',
      ],
      skill: 'POW',
      marker: 9,
      difficulty: 'easy',
    },
    {
      id: 'act-fl3-e-05-q10',
      question:
        'The writer wants to add the following sentence to the essay:\n\n> One woman leads the procession beneath a large white parasol.\n\nThe sentence would most logically be placed:',
      options: [
        'in Paragraph 1, after the sentence ending "beneath an invisible weight."',
        'in Paragraph 2, after the sentence ending "the voices of a congregation."',
        'in Paragraph 3, after Sentence 2.',
        'in Paragraph 4, after the sentence ending "for audiences around the world."',
      ],
      correctIndex: 2,
      explanation:
        'Sentence 2 of Paragraph 3 describes dancers in white moving toward a baptism, the only procession in the essay, so the parasol detail belongs right after it.',
      optionExplanations: [
        'The opening dancers stand clustered in a pool of light, so there is no procession for "the procession" to refer to, and the sentence would interrupt the description of the opening movement.',
        'This paragraph describes Ailey\'s memories and his plan for the piece, not any action onstage. "The procession" would have nothing to refer to there.',
        'Sentence 2 describes dancers in white moving toward a baptism, which is a procession. Adding the parasol detail there gives "the procession" a clear reference and enriches that image.',
        'This paragraph discusses the piece\'s history and reputation after Ailey\'s death, so a detail about one moment onstage would interrupt that discussion and lack a clear reference.',
      ],
      skill: 'POW',
      marker: 10,
      difficulty: 'medium',
    },
  ],
}

export const ACT_FL3_ENGLISH: ActFLPassage[] = [PASSAGE_1, PASSAGE_2, PASSAGE_3, PASSAGE_4, PASSAGE_5]
