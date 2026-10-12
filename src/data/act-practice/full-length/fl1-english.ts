/**
 * Enhanced ACT full-length Form 1 — English (5 passages × 10 questions, 35 min).
 * Essays: wooden-canoe restoration (narrative) · the Erie Canal (informative) ·
 * tardigrade survival (informative) · libraries lending tools (argumentative) ·
 * Diego Rivera's Detroit Industry murals (informative).
 */
import type { ActFLPassage } from './types'

const STEM = 'Which choice is the best version of the underlined portion?'

const PASSAGE_1: ActFLPassage = {
  id: 'act-fl1-e-01',
  title: 'Reversing the Order',
  kind: 'narrative',
  text: `The canoe had spent eleven years upside down on sawhorses in my grandfather's barn, {{1:its canvas skin cracked}} like old paint. When he offered it to me the summer I turned sixteen, I thought he was giving me a boat. {{2:Consequently,}} he was giving me a job.

Wood-and-canvas canoes are built from the inside out. Thin cedar ribs are bent over a wooden form, {{3:then the planking is}} tacked to them. The hull is wrapped in canvas, which is sealed with filler and paint. {{4:Restoring one is when you reverse}} that order. First I cut away the rotten canvas. {{5:Underneath, I found}} three cracked ribs and a stretch of planking so soft that my thumbnail sank into it.

My grandfather did not help, exactly. He sat on an overturned bucket and asked questions. Why did I think the ribs had cracked where they did? Had I noticed how the original builder had staggered the tacks? Each question sent me back to the hull to look again, and each time the canoe taught me {{6:something new}}.

[1] Bending new ribs was the hardest part. [2] I steamed the cedar strips in a length of stovepipe capped at one end. [3] Then I had about ninety seconds to clamp each one to the hull before it cooled and split. [4] By the fifth attempt, my hands knew the motion without my having to think about it. [5] I broke four before one finally held. {{7}}

By August the new canvas was stretched and filled, and I painted it the dark green my grandfather remembered from his own boyhood. {{8:We carried it}} down to the pond on the last evening before school started. It did not leak. It did not even weep at the {{9:seams which}} he told me was more than he could say for the first canoe he had ever fixed. {{10}}`,
  questions: [
    {
      id: 'act-fl1-e-01-q1',
      question: STEM,
      options: [
        'NO CHANGE',
        'its canvas skin was cracked',
        'and its canvas skin, cracked',
        "it's canvas skin cracked",
      ],
      correctIndex: 0,
      explanation:
        'The phrase "its canvas skin cracked like old paint" is an absolute phrase that adds detail to the main clause, so it is correctly set off with a single comma.',
      optionExplanations: [
        'An absolute phrase, a noun plus a participle, can follow a comma and describe the whole situation in the main clause. The sentence is complete and correctly punctuated as written.',
        'Adding "was" turns the phrase into an independent clause, and joining two independent clauses with only a comma creates a comma splice, which is a sentence-structure error.',
        'The conjunction "and" would allow a compound sentence, but the comma placed between the subject "skin" and its verb "cracked" wrongly separates a subject from its verb.',
        'The contraction "it\'s" means "it is," which makes the phrase read "it is canvas skin cracked." The possessive pronoun "its," with no apostrophe, is needed to show the skin belongs to the canoe.',
      ],
      skill: 'CSE',
      marker: 1,
      difficulty: 'medium',
    },
    {
      id: 'act-fl1-e-01-q2',
      question: STEM,
      options: ['NO CHANGE', 'In reality,', 'Similarly,', 'For example,'],
      correctIndex: 1,
      explanation:
        'The sentence corrects the narrator\'s expectation from the previous sentence (a boat versus a job), so a transition that signals the surprising reality, "In reality," fits.',
      optionExplanations: [
        'The word "consequently" signals a result, but getting a job was not caused by thinking the gift was a boat. The relationship between the two sentences is contrast, not cause and effect.',
        'The narrator expected a boat but actually received a job. "In reality" introduces the truth that corrects the preceding expectation, which is exactly the relationship these two sentences have.',
        'The word "similarly" signals that the second idea resembles the first, but a job and a boat are presented as opposites here, so the transition points in the wrong direction.',
        'The phrase "for example" introduces an illustration of a general statement, but the sentence about the job does not give an example of the thought that preceded it.',
      ],
      skill: 'POW',
      marker: 2,
      difficulty: 'easy',
    },
    {
      id: 'act-fl1-e-01-q3',
      question: STEM,
      options: [
        'NO CHANGE',
        'then, the planking is',
        'then the planking, which is',
        'and then the planking is',
      ],
      correctIndex: 3,
      explanation:
        'Two independent clauses need more than a comma to join them; adding the conjunction "and" after the comma correctly links the two building steps.',
      optionExplanations: [
        'The word "then" is an adverb, not a conjunction, so a comma followed by "then" cannot join two independent clauses. The sentence as written is a comma splice.',
        'Adding a comma after "then" does not solve the problem. The two independent clauses are still joined by only a comma, so the sentence remains a comma splice.',
        'Turning the second half into "the planking, which is tacked to them" leaves "the planking" without a main verb, so the words after the first comma become a fragment.',
        'The coordinating conjunction "and" after the comma properly joins the two independent clauses, and "then" still shows the order of the two building steps.',
      ],
      skill: 'CSE',
      marker: 3,
      difficulty: 'medium',
    },
    {
      id: 'act-fl1-e-01-q4',
      question: STEM,
      options: [
        'NO CHANGE',
        'Restoring one is where you reverse',
        'Restoring one means reversing',
        'Restoring one, reversing',
      ],
      correctIndex: 2,
      explanation:
        'The verb "means" logically links the subject "Restoring one" to "reversing that order," avoiding the faulty "is when" construction and the shift to "you."',
      optionExplanations: [
        'A process is not a time, so "is when" creates faulty predication. The sentence also shifts to "you," which clashes with the first-person narration used throughout the essay.',
        'A process is not a place, so "is where" is also faulty predication, and the shift to "you" clashes with the first-person narration used throughout the essay.',
        'The gerund subject "Restoring one" is linked to "reversing that order" by the verb "means," producing a clear, complete sentence that defines the restoration process.',
        'Without a main verb, "Restoring one, reversing that order" is a fragment. The comma separates two phrases, but nothing states what restoring a canoe involves.',
      ],
      skill: 'CSE',
      marker: 4,
      difficulty: 'medium',
    },
    {
      id: 'act-fl1-e-01-q5',
      question: STEM,
      options: [
        'NO CHANGE',
        'Underneath the canvas that I had removed, I found',
        'Beneath it, underneath, I found',
        'Underneath, I found and discovered',
      ],
      correctIndex: 0,
      explanation:
        'Because the previous sentence has just described cutting away the canvas, "Underneath" is clear by itself, and the original version is the most concise.',
      optionExplanations: [
        'The reader has just been told that the canvas was cut away, so "Underneath" is perfectly clear on its own. This version says what is needed in the fewest words.',
        'Repeating "the canvas that I had removed" restates information given in the sentence immediately before it, making the sentence wordy without adding anything new.',
        'The words "beneath" and "underneath" mean the same thing, so using both is redundant, and the extra pronoun "it" adds a second unnecessary element.',
        'The verbs "found" and "discovered" are synonyms here, so pairing them adds words without adding meaning, a redundancy the essay\'s plain style avoids.',
      ],
      skill: 'KLA',
      marker: 5,
      difficulty: 'easy',
    },
    {
      id: 'act-fl1-e-01-q6',
      question:
        'Given that all the choices are true, which one most effectively emphasizes how long the original builder\'s skill had taken to develop?',
      options: [
        'NO CHANGE',
        'something I had not expected',
        'something it had taken a stranger decades to learn',
        'something about how boats are built',
      ],
      correctIndex: 2,
      explanation:
        'Only the phrase mentioning "decades" conveys the length of time the original builder needed to gain the knowledge the canoe now passes on.',
      optionExplanations: [
        'The phrase "something new" tells the reader the lesson was unfamiliar to the narrator but says nothing about how long the original builder took to master it.',
        'This choice describes the narrator\'s surprise, not the builder\'s experience. It gives no sense of time or of the effort behind the builder\'s skill.',
        'The word "decades" directly expresses a long span of learning, and "a stranger" identifies that learner as the original builder, meeting the question\'s requirement precisely.',
        'This choice names the general subject of the lesson but says nothing about time or effort, so it does not emphasize how long the skill took to develop.',
      ],
      skill: 'POW',
      marker: 6,
      difficulty: 'easy',
    },
    {
      id: 'act-fl1-e-01-q7',
      question: 'For the sake of logic and cohesion, Sentence 5 should be placed:',
      options: ['where it is now.', 'before Sentence 1.', 'after Sentence 2.', 'after Sentence 3.'],
      correctIndex: 3,
      explanation:
        'Sentence 5 describes breaking four ribs before one held, which must come before Sentence 4\'s "By the fifth attempt." Sentence 3, about the ninety-second window, explains why the breaks happened.',
      optionExplanations: [
        'Left at the end, the sentence about breaking four ribs comes after the sentence describing the successful fifth attempt, so the paragraph tells the events out of order.',
        'Opening the paragraph with the broken ribs would mention failures before the reader knows what task is being attempted, since Sentence 1 introduces rib bending as the hardest part.',
        'Placed here, the broken ribs would come before the explanation of the ninety-second window in Sentence 3, so the reader would not yet understand why the strips split.',
        'After Sentence 3 explains that each strip split if not clamped within ninety seconds, the four failures follow naturally, and "By the fifth attempt" in Sentence 4 then makes sense.',
      ],
      skill: 'POW',
      marker: 7,
      difficulty: 'medium',
    },
    {
      id: 'act-fl1-e-01-q8',
      question:
        'Given that all the choices are true, which one most specifically describes how the narrator and the grandfather moved the canoe?',
      options: ['NO CHANGE', 'We walked it, one of us at each end,', 'We took it', 'We moved it'],
      correctIndex: 1,
      explanation:
        'Only the choice describing one person at each end gives a concrete picture of how the two of them carried the canoe together.',
      optionExplanations: [
        'The verb "carried" tells the reader the canoe was lifted but gives no picture of how two people shared the load or positioned themselves around it.',
        'This choice shows exactly how the canoe was transported: the two of them walked it with one person at each end, giving the most specific and vivid picture.',
        'The verb "took" is vaguer than the original. It does not indicate whether the canoe was carried, dragged, or driven, so it offers less specific detail.',
        'The verb "moved" is the least specific of the choices. It describes only that the canoe changed location, without any detail about the method.',
      ],
      skill: 'KLA',
      marker: 8,
      difficulty: 'easy',
    },
    {
      id: 'act-fl1-e-01-q9',
      question: STEM,
      options: ['NO CHANGE', 'seams; which', 'seams, that', 'seams, which'],
      correctIndex: 3,
      explanation:
        'The clause beginning "which he told me was more than he could say" comments on the whole preceding idea, so it is nonrestrictive and must be introduced with a comma plus "which."',
      optionExplanations: [
        'Without a comma, "which" appears to restrict "seams," as though only certain seams were meant. The clause actually comments on the entire fact that the canoe did not weep.',
        'A semicolon must join two independent clauses, but the clause beginning with "which" cannot stand alone as a sentence, so the semicolon is incorrect here.',
        'The pronoun "that" introduces restrictive clauses, which never follow a comma. Pairing a comma with "that" is a punctuation error in standard written English.',
        'The relative clause adds a comment about the whole preceding statement rather than identifying particular seams, so it is nonrestrictive and correctly introduced by a comma and "which."',
      ],
      skill: 'CSE',
      marker: 9,
      difficulty: 'medium',
    },
    {
      id: 'act-fl1-e-01-q10',
      question:
        'Suppose the writer\'s primary purpose had been to explain, step by step, how to restore a wood-and-canvas canoe. Would this essay accomplish that purpose?',
      options: [
        'Yes, because the essay describes removing the canvas, replacing ribs, and stretching new canvas in order.',
        'Yes, because the essay explains how wood-and-canvas canoes are originally built.',
        'No, because the essay focuses on what the narrator learned from the canoe and the grandfather rather than on a complete procedure.',
        'No, because the essay is primarily about the grandfather\'s own boyhood.',
      ],
      correctIndex: 2,
      explanation:
        'The essay mentions some repair tasks but skips many steps and dwells on the grandfather\'s questions and the narrator\'s learning; it is a personal narrative, not a how-to guide.',
      optionExplanations: [
        'Although these tasks are mentioned, the essay omits most of the details a reader would need to follow along, such as how to fit planking or apply filler. The tasks serve the story.',
        'The essay gives only a two-sentence overview of how such canoes are built, and that overview is not a restoration procedure, so it cannot fulfill a step-by-step purpose.',
        'The essay\'s emphasis falls on the grandfather\'s questions, the narrator\'s repeated failures, and the shared trip to the pond. The repair steps are incomplete and serve the personal story.',
        'The grandfather\'s boyhood is mentioned only once, in connection with the paint color. The essay centers on the narrator\'s summer, not on the grandfather\'s past.',
      ],
      skill: 'POW',
      marker: 10,
      difficulty: 'medium',
    },
  ],
}

const PASSAGE_2: ActFLPassage = {
  id: 'act-fl1-e-02',
  title: 'Clinton\'s Ditch',
  kind: 'informative',
  text: `In 1817, the idea of digging a canal across more than three hundred miles of upstate New York struck many people as absurd. The route from Albany, on the Hudson River, to Buffalo, on Lake Erie, crossed thick forests, swamps, and a steep ridge of rock, and the young nation had {{1:almost no engineers who had been trained in engineering}}. Critics mocked the project as "Clinton's Ditch," naming it after DeWitt {{2:Clinton, the governor who}} had championed it.

{{3:Lacking formal training, the job itself taught the canal's designers}}; most of them had worked as surveyors or judges. One of them, Canvass White, traveled to England to examine canals that had operated there for decades. {{4:Back home, however,}} he developed a cement that hardened underwater, a material the canal's stone locks would require. {{5}}

Digging began on July 4, 1817, in the town of Rome. Much of the labor was done by local farmers and, increasingly, by Irish immigrants, who {{6:are}} willing to do the dangerous work for low wages. Crews cleared the forests with a stump puller, a machine {{7:who's}} enormous wheels let a few men and a team of horses tear out dozens of stumps a day.

The hardest challenge came near the canal's western end, where the route had to climb the Niagara Escarpment. The solution was a staircase of five double locks at what became the town of Lockport, which {{8:raised or lowered}} boats about sixty feet.

When the canal opened in 1825, it stretched 363 miles and contained 83 locks. {{9:Boats could now travel by water from Lake Erie all the way to New York City.}} Towns such as Syracuse and Rochester grew rapidly along its banks, and the port of New York City grew busier than ever. {{10:Today, the canal is used mostly by recreational boaters.}}`,
  questions: [
    {
      id: 'act-fl1-e-02-q1',
      question: STEM,
      options: [
        'NO CHANGE',
        'almost no engineers, trained ones,',
        'almost no engineers who were engineers with training',
        'almost no trained engineers',
      ],
      correctIndex: 3,
      explanation:
        'The adjective "trained" says everything the wordy relative clause says, so "almost no trained engineers" is the clearest and most concise choice.',
      optionExplanations: [
        'Saying engineers "had been trained in engineering" repeats the idea of engineering twice. The clause takes nine words to express what a single adjective can express.',
        'Setting off "trained ones" with commas creates an awkward afterthought that restates "engineers." The sentence becomes choppy without becoming any clearer.',
        'Calling them "engineers who were engineers" is plainly redundant, and the added "with training" makes this the wordiest choice of all, not a correction of the original.',
        'Placing the single adjective "trained" before "engineers" expresses the full idea in four words, with no repetition, which makes it the most concise and effective version.',
      ],
      skill: 'KLA',
      marker: 1,
      difficulty: 'easy',
    },
    {
      id: 'act-fl1-e-02-q2',
      question: STEM,
      options: [
        'NO CHANGE',
        'Clinton; the governor who',
        'Clinton. The governor who',
        'Clinton, the governor who,',
      ],
      correctIndex: 0,
      explanation:
        'The phrase "the governor who had championed it" is an appositive that renames Clinton, so a single comma correctly connects it to the name at the end of the sentence.',
      optionExplanations: [
        'An appositive that renames a noun at the end of a sentence is introduced by one comma. Here the phrase identifies DeWitt Clinton, and the sentence is complete and correctly punctuated.',
        'A semicolon must separate two independent clauses, but "the governor who had championed it" is only a noun phrase with a clause attached, so it cannot follow a semicolon.',
        'A period makes "The governor who had championed it" a separate sentence, but that group of words has no main verb for its subject, so it is a sentence fragment.',
        'The comma after "who" separates the relative pronoun from its own verb, "had championed." Nothing should come between "who" and the verb it is the subject of.',
      ],
      skill: 'CSE',
      marker: 2,
      difficulty: 'easy',
    },
    {
      id: 'act-fl1-e-02-q3',
      question: STEM,
      options: [
        'NO CHANGE',
        "Lacking formal training, the canal's design was learned on the job",
        "Lacking formal training, the canal's designers learned on the job",
        "Lacking formal training, learning on the job was how the canal's designers worked",
      ],
      correctIndex: 2,
      explanation:
        'The introductory modifier "Lacking formal training" must be followed by the people who lacked it, so the subject has to be "the canal\'s designers."',
      optionExplanations: [
        'The modifier "Lacking formal training" is followed by "the job itself," so the sentence says the job lacked training. This is a dangling modifier, since only people can lack training.',
        'Here the modifier attaches to "the canal\'s design," and a design cannot lack formal training. The passive verb also makes the sentence vaguer than it needs to be.',
        'The people who lacked formal training, "the canal\'s designers," come right after the modifier, so the modifier is attached to the right subject and the sentence is clear.',
        'The modifier now attaches to "learning on the job," which is an activity, not a person. The sentence is also wordier than necessary without fixing the dangling modifier.',
      ],
      skill: 'CSE',
      marker: 3,
      difficulty: 'medium',
    },
    {
      id: 'act-fl1-e-02-q4',
      question: STEM,
      options: ['NO CHANGE', 'Back home,', 'Back home, instead,', 'Back home, in contrast,'],
      correctIndex: 1,
      explanation:
        'Developing the cement follows naturally from White\'s study trip rather than contrasting with it, so no contrast transition belongs here; "Back home," alone is right.',
      optionExplanations: [
        'The word "however" signals a contrast, but White\'s work at home builds on his study of English canals rather than opposing it. The transition misstates the relationship.',
        'White studied canals abroad and then put what he learned to use at home. "Back home" marks that shift in place and time without adding a contrast the facts do not support.',
        'The word "instead" suggests White did something in place of what was just described, but developing the cement did not replace his trip. It came after it and drew on it.',
        'The phrase "in contrast" sets up an opposition between two ideas, but White\'s cement continues the story of his learning about canals. Nothing in the paragraph contrasts with it.',
      ],
      skill: 'POW',
      marker: 4,
      difficulty: 'medium',
    },
    {
      id: 'act-fl1-e-02-q5',
      question:
        'At this point, the writer is considering adding the following sentence:\n\n> Portland cement, patented in England in 1824, is now the most widely used cement in the world.\n\nShould the writer make this addition here?',
      options: [
        'Yes, because it explains where Canvass White learned how to make his cement.',
        'Yes, because it shows that new building materials were being invented at the time.',
        'No, because it contradicts the claim that White developed a cement himself.',
        "No, because it shifts the focus from the canal's builders to a general fact about cement.",
      ],
      correctIndex: 3,
      explanation:
        'The paragraph is about how the canal\'s untrained designers solved problems; a fact about a different cement\'s later popularity breaks that focus.',
      optionExplanations: [
        'The sentence says nothing about White\'s trip or his methods, and its 1824 date comes years after the canal work began, so it cannot explain where White learned his technique.',
        'The paragraph is about the canal\'s designers, not about inventions of the era in general. A fact about another cement\'s popularity today does not support that focus.',
        'The sentence describes a different cement patented by someone else, so it does not deny that White developed his own. The problem is relevance, not contradiction.',
        'The paragraph explains how the canal\'s self-taught designers solved problems. A fact about a different cement\'s worldwide use today pulls attention away from that point.',
      ],
      skill: 'POW',
      marker: 5,
      difficulty: 'medium',
    },
    {
      id: 'act-fl1-e-02-q6',
      question: STEM,
      options: ['NO CHANGE', 'were', 'will be', 'have been'],
      correctIndex: 1,
      explanation:
        'The paragraph describes events of 1817 in the past tense ("began," "was done," "cleared"), so the verb about the immigrants must also be past tense: "were."',
      optionExplanations: [
        'The present tense "are" makes it sound as though the immigrants are willing today, which clashes with the past-tense account of digging that began in 1817.',
        'The past tense "were" matches the paragraph\'s other verbs, such as "began" and "was done," and correctly places the workers\' willingness in the time of the canal\'s construction.',
        'The future tense "will be" describes something that has not happened yet, which makes no sense in a paragraph describing work completed two centuries ago.',
        'The present perfect "have been" suggests a situation continuing up to the present, but the essay describes workers who dug the canal in the early 1800s.',
      ],
      skill: 'CSE',
      marker: 6,
      difficulty: 'easy',
    },
    {
      id: 'act-fl1-e-02-q7',
      question: STEM,
      options: ['NO CHANGE', "that's", 'its', 'whose'],
      correctIndex: 3,
      explanation:
        'The wheels belong to the machine, so the sentence needs the possessive relative pronoun "whose," not the contraction "who\'s."',
      optionExplanations: [
        'The contraction "who\'s" means "who is," which makes the phrase read "a machine who is enormous wheels." The sentence needs a possessive to show the wheels belong to the machine.',
        'The contraction "that\'s" means "that is," producing "a machine that is enormous wheels," which makes no sense. It also fails to show that the wheels belong to the machine.',
        'The pronoun "its" is possessive, but it cannot introduce a relative clause. "A machine its enormous wheels let" leaves the second part of the sentence unattached.',
        'The relative pronoun "whose" shows possession and introduces the clause, so "a machine whose enormous wheels let" correctly says the wheels belong to the stump puller.',
      ],
      skill: 'CSE',
      marker: 7,
      difficulty: 'easy',
    },
    {
      id: 'act-fl1-e-02-q8',
      question: STEM,
      options: ['NO CHANGE', 'promoted or demoted', 'heightened or lessened', 'inflated or deflated'],
      correctIndex: 0,
      explanation:
        'Locks move boats up or down by changing the water level, and "raised or lowered" names that physical movement precisely.',
      optionExplanations: [
        'The verbs "raised" and "lowered" describe physical movement up and down, which is exactly what the locks did to boats on the sixty-foot climb at Lockport.',
        'The verbs "promoted" and "demoted" describe changes in rank, as with employees. They cannot describe boats moving up and down in the locks.',
        'The verbs "heightened" and "lessened" describe increasing or reducing an amount or intensity, as with tension. They do not describe moving an object up or down.',
        'The verbs "inflated" and "deflated" describe filling something with air or letting air out. They do not describe the vertical movement of boats in a lock.',
      ],
      skill: 'KLA',
      marker: 8,
      difficulty: 'easy',
    },
    {
      id: 'act-fl1-e-02-q9',
      question:
        'Given that all the choices are true, which one most effectively shows the canal\'s economic impact, which the rest of the paragraph goes on to describe?',
      options: [
        'NO CHANGE',
        'The canal was only forty feet wide and four feet deep.',
        'Shipping a ton of goods from Buffalo to New York City soon cost about a tenth of what it had.',
        'Mules and horses walking along a towpath pulled the boats.',
      ],
      correctIndex: 2,
      explanation:
        'A drop in shipping costs to a tenth of the former price is direct evidence of economic impact, and it explains why towns along the route boomed.',
      optionExplanations: [
        'Saying boats could travel the whole route describes the canal\'s reach but gives no sense of its effect on trade or prices, so it does not show economic impact.',
        'The canal\'s width and depth are physical measurements. They say nothing about trade or money, so they do not set up the paragraph\'s point about growing towns.',
        'A ninety percent drop in the cost of shipping goods is a concrete economic effect, and it explains why towns and the port grew so quickly once the canal opened.',
        'How the boats were pulled is a detail about daily operation. It describes the canal\'s workings but says nothing about its economic effect on the region.',
      ],
      skill: 'POW',
      marker: 9,
      difficulty: 'medium',
    },
    {
      id: 'act-fl1-e-02-q10',
      question:
        'Which choice most effectively concludes the essay by returning to an idea introduced in its first paragraph?',
      options: [
        'NO CHANGE',
        'The canal was enlarged several times in the decades that followed.',
        'The "ditch" that critics had mocked had remade the economy of a state.',
        'Many of the original stone locks can still be seen today.',
      ],
      correctIndex: 2,
      explanation:
        'Referring to the "ditch" that critics mocked calls back to the "Clinton\'s Ditch" ridicule in the first paragraph and shows how wrong the critics were.',
      optionExplanations: [
        'How the canal is used today is a new idea that the essay never develops, and it does not connect to anything in the first paragraph, so it makes a weak conclusion.',
        'Later enlargements are a new topic the essay has not mentioned. The sentence adds a fact but does not tie the ending back to the opening paragraph.',
        'The "ditch" echoes the mocking nickname from the first paragraph, and remaking a state\'s economy answers the critics who found the project absurd, which ties the essay together.',
        'The surviving locks are a present-day detail that does not echo the opening paragraph\'s doubts and criticism, so the essay would end without returning to its starting point.',
      ],
      skill: 'POW',
      marker: 10,
      difficulty: 'medium',
    },
  ],
}

const PASSAGE_3: ActFLPassage = {
  id: 'act-fl1-e-03',
  title: 'The Water Bear',
  kind: 'informative',
  text: `Scoop up a clump of damp moss from almost any backyard, rinse it into a dish, and look through a microscope. With some patience, you may spot a creature that {{1:lumbers}} along on eight stubby legs, like a tiny bear. Scientists call it a tardigrade, but its nicknames, "water bear" and "moss piglet," suit its appearance {{2:more better}}.

Most tardigrades are less than a millimeter long, yet they have become famous for surviving conditions that would kill nearly any other animal. Some species have withstood temperatures {{3:incredible close}} to absolute zero and, for a few minutes, heat well above the boiling point of water. In 2007, tardigrades carried into orbit aboard an uncrewed satellite survived about ten days of exposure to the vacuum of space.

{{4:The secret to this toughness is a process called cryptobiosis.}} When its habitat dries out, a tardigrade pulls in its legs and head, loses nearly all of the water in its body, and shrivels into a dry ball called a tun. {{5:Its metabolism slows; to}} almost nothing. In this state, the animal is neither clearly alive nor clearly dead. {{6}}

Researchers {{7:have long wondered}} how cells can survive losing so much water. Part of the answer appears to lie in special proteins. As a tardigrade dries out, some of these proteins form a glassy gel inside the {{8:animals'}} cells, holding delicate structures in place. Another protein, called Dsup, seems to shield the animal's DNA from damage caused by radiation.

{{9:For example,}} these abilities have limits. An active tardigrade is a soft, fragile animal that can be killed by conditions far milder than those of outer space. If it dries out too quickly, for instance, it may die before it can form a tun. Still, scientists hope that studying its proteins may someday help them protect vaccines and other medicines from heat and drying.`,
  questions: [
    {
      id: 'act-fl1-e-03-q1',
      question: 'Which choice best fits the comparison the writer makes in this sentence?',
      options: ['NO CHANGE', 'darts', 'glides', 'sprints'],
      correctIndex: 0,
      explanation:
        'A creature on "eight stubby legs" that looks "like a tiny bear" moves slowly and heavily, which is exactly what "lumbers" means.',
      optionExplanations: [
        'To lumber is to move in a slow, heavy, clumsy way, which suits both the "stubby legs" and the comparison to a bear. The word keeps the image consistent.',
        'To dart is to move suddenly and quickly, like a fish or a bird. That quick motion clashes with "stubby legs" and with the comparison to a heavy bear.',
        'To glide is to move smoothly and gracefully, as a skater or a hawk does. The word suggests elegance that does not match a slow creature on stubby legs.',
        'To sprint is to run at top speed. The word contradicts the image of a stubby-legged animal moving like a small, heavy bear.',
      ],
      skill: 'KLA',
      marker: 1,
      difficulty: 'easy',
    },
    {
      id: 'act-fl1-e-03-q2',
      question: STEM,
      options: ['NO CHANGE', 'better', 'best', 'the most best'],
      correctIndex: 1,
      explanation:
        'The sentence compares two things, the scientific name and the nicknames, so it needs the comparative form "better," with no extra "more."',
      optionExplanations: [
        'The word "better" is already the comparative form of "good," so adding "more" creates a double comparative, which is nonstandard in formal written English.',
        'The sentence compares the nicknames with the scientific name, two things, so the comparative "better" is correct, and it needs no helping word such as "more."',
        'The superlative "best" is used when three or more things are compared. Here the nicknames are compared only with the single scientific name.',
        'The phrase "the most best" is a double superlative, which is nonstandard, and the superlative itself is wrong because only two things are being compared.',
      ],
      skill: 'CSE',
      marker: 2,
      difficulty: 'easy',
    },
    {
      id: 'act-fl1-e-03-q3',
      question: STEM,
      options: ['NO CHANGE', 'incredibly closely', 'incredible closely', 'incredibly close'],
      correctIndex: 3,
      explanation:
        'The adjective "close" describes the temperatures, and an adverb, "incredibly," is needed to modify that adjective.',
      optionExplanations: [
        'The adjective "incredible" cannot modify another adjective. To describe how close the temperatures came, the sentence needs the adverb "incredibly."',
        'The adverb "closely" means carefully or tightly, as in "watched closely." It cannot describe how near a temperature is to absolute zero, so "close" must stay an adjective.',
        'This choice reverses the needed forms: it uses an adjective where an adverb is required and turns "close" into an adverb that does not fit the meaning.',
        'The adverb "incredibly" correctly modifies the adjective "close," and "close to absolute zero" correctly describes the temperatures the tardigrades withstood.',
      ],
      skill: 'CSE',
      marker: 3,
      difficulty: 'medium',
    },
    {
      id: 'act-fl1-e-03-q4',
      question: 'If the writer were to delete this sentence, the paragraph would primarily lose:',
      options: [
        'a comparison between tardigrades and the other microscopic animals in moss.',
        'a detail showing how small most tardigrades are.',
        'the term for the process that the rest of the paragraph explains.',
        'evidence that tardigrades have survived in outer space.',
      ],
      correctIndex: 2,
      explanation:
        'The sentence names cryptobiosis, the strategy the rest of the paragraph describes step by step, and links it to the feats in the previous paragraph.',
      optionExplanations: [
        'The sentence does not mention any other animal, so deleting it would not remove a comparison. It names the tardigrade\'s survival strategy instead.',
        'The tardigrade\'s size is given in the previous paragraph ("less than a millimeter long"), not in this sentence, so deleting it would not remove that detail.',
        'The sentence names cryptobiosis and presents it as the secret behind the feats just described. Without it, the description of the tun would have no label or clear link.',
        'The space experiment is described in the previous paragraph. This sentence names the process behind such survival but gives no evidence about space itself.',
      ],
      skill: 'POW',
      marker: 4,
      difficulty: 'medium',
    },
    {
      id: 'act-fl1-e-03-q5',
      question: STEM,
      options: [
        'NO CHANGE',
        'Its metabolism slows to',
        'Its metabolism, slows to',
        'Its metabolism slows, to',
      ],
      correctIndex: 1,
      explanation:
        'The prepositional phrase "to almost nothing" completes the verb "slows," so no punctuation should separate them.',
      optionExplanations: [
        'A semicolon must be followed by an independent clause, but "to almost nothing" is only a prepositional phrase. The semicolon wrongly cuts the verb off from its completion.',
        'With no punctuation, the verb "slows" leads directly into "to almost nothing," which tells how far the metabolism slows. The sentence is complete and clear.',
        'A comma between the subject "Its metabolism" and its verb "slows" wrongly separates the two most basic parts of the sentence.',
        'A comma between "slows" and "to almost nothing" interrupts the verb and the phrase that completes its meaning. No rule calls for a pause there.',
      ],
      skill: 'CSE',
      marker: 5,
      difficulty: 'easy',
    },
    {
      id: 'act-fl1-e-03-q6',
      question:
        'At this point, the writer is considering adding the following sentence:\n\n> When water returns, the tun soaks it up, and within hours the animal can walk again.\n\nShould the writer make this addition here?',
      options: [
        'Yes, because it completes the account of cryptobiosis by showing how the animal revives.',
        'Yes, because it explains why scientists are so interested in tardigrade proteins.',
        'No, because it contradicts the claim that a tun is neither clearly alive nor clearly dead.',
        'No, because it repeats information that was already given earlier in the paragraph.',
      ],
      correctIndex: 0,
      explanation:
        'The paragraph describes how a tardigrade enters the tun state but never says how it comes out; the sentence finishes the process the paragraph explains.',
      optionExplanations: [
        'The paragraph shows a tardigrade drying into a tun but never says what happens next. The sentence finishes the process and shows why a tun is not simply dead.',
        'The sentence says nothing about proteins or research. Scientists\' interest in proteins comes up in the next paragraph, and this sentence does not explain it.',
        'Reviving when water returns is exactly why a tun is not clearly dead. The sentence supports the "neither alive nor dead" description rather than contradicting it.',
        'Nothing earlier in the paragraph describes the tardigrade reviving. The paragraph only describes it drying out, so the sentence adds new information.',
      ],
      skill: 'POW',
      marker: 6,
      difficulty: 'medium',
    },
    {
      id: 'act-fl1-e-03-q7',
      question: STEM,
      options: ['NO CHANGE', 'having long wondered', 'who have long wondered', 'long wondering'],
      correctIndex: 0,
      explanation:
        'The sentence needs a main verb for its subject "Researchers," and "have long wondered" supplies one; every other choice leaves a fragment.',
      optionExplanations: [
        'The subject "Researchers" is paired with the complete verb "have long wondered," so the sentence is an independent clause that clearly states what researchers have been asking.',
        'The participle "having long wondered" cannot serve as a main verb, so "Researchers having long wondered how cells can survive" is a fragment with no complete verb.',
        'The word "who" turns the verb into a relative clause describing researchers, leaving "Researchers" with no verb of its own. The result is a fragment.',
        'The phrase "long wondering" is a participle phrase, not a complete verb, so the sentence never says what the researchers did. It is a fragment.',
      ],
      skill: 'CSE',
      marker: 7,
      difficulty: 'medium',
    },
    {
      id: 'act-fl1-e-03-q8',
      question: STEM,
      options: ['NO CHANGE', "animal's", 'animals', "animals's"],
      correctIndex: 1,
      explanation:
        'The cells belong to "a tardigrade," one animal, so the singular possessive "animal\'s" is required.',
      optionExplanations: [
        'The apostrophe after the "s" marks a plural possessive, but the sentence refers to "a tardigrade," a single animal, so the possessive must be singular.',
        'The sentence describes what happens as "a tardigrade" dries out, so the cells belong to one animal. The singular possessive "animal\'s" is correct.',
        'Without an apostrophe, "animals" is a plain plural noun, not a possessive. The sentence needs a possessive to show the cells belong to the tardigrade.',
        'The form "animals\'s" is never correct. A plural ending in "s" takes only an apostrophe, and in any case the sentence refers to a single animal.',
      ],
      skill: 'CSE',
      marker: 8,
      difficulty: 'easy',
    },
    {
      id: 'act-fl1-e-03-q9',
      question: STEM,
      options: ['NO CHANGE', 'Therefore,', 'Even so,', 'Likewise,'],
      correctIndex: 2,
      explanation:
        'After two paragraphs praising the tardigrade\'s defenses, the sentence concedes that they have limits, so a transition that signals concession, "Even so," is needed.',
      optionExplanations: [
        'The phrase "for example" introduces an illustration, but the claim that the abilities have limits does not illustrate the previous paragraph. It qualifies it.',
        'The word "therefore" signals a conclusion drawn from what came before, but nothing about protective proteins leads logically to the idea that the abilities have limits.',
        'After the impressive defenses just described, the writer admits a weakness. "Even so" signals this kind of concession, which is the relationship between the two paragraphs.',
        'The word "likewise" signals a similar idea, but limits on the tardigrade\'s toughness are the opposite of the strengths described in the previous paragraph.',
      ],
      skill: 'POW',
      marker: 9,
      difficulty: 'medium',
    },
    {
      id: 'act-fl1-e-03-q10',
      question:
        'The writer wants to add the following sentence to the essay:\n\n> In a study published in 2016, researchers in Japan reported reviving tardigrades that had been frozen in a sample of Antarctic moss for about thirty years.\n\nThe sentence would most logically be placed at the end of:',
      options: [
        'the first paragraph.',
        'the second paragraph.',
        'the third paragraph.',
        'the last paragraph.',
      ],
      correctIndex: 1,
      explanation:
        'The second paragraph lists extreme conditions tardigrades have survived, such as near absolute zero and the vacuum of space; thirty years frozen is another such feat.',
      optionExplanations: [
        'The first paragraph introduces the tardigrade and its nicknames. It has not yet raised its survival abilities, so a report about reviving frozen animals would come too early.',
        'The second paragraph lists extreme conditions tardigrades have survived, from cold near absolute zero to the vacuum of space. A thirty-year freeze is another such feat and fits that list.',
        'The third paragraph explains how a tardigrade survives drying out by forming a tun. A report about freezing would interrupt that step-by-step description of drying.',
        'The last paragraph turns to the limits of the tardigrade\'s toughness and to possible uses for medicine. A new survival record would undercut its point about limits.',
      ],
      skill: 'POW',
      difficulty: 'hard',
    },
  ],
}

const PASSAGE_4: ActFLPassage = {
  id: 'act-fl1-e-04',
  title: 'Check Out a Drill',
  kind: 'argumentative',
  text: `Most people think of a public library as a place to borrow books. {{1:As a result,}} many libraries also lend power drills, sewing machines, ladders, and even pressure washers. The Berkeley Public Library in California has run a tool lending library since 1979, and many other communities have since followed its example. Every town {{2:that can afford one, should}} have a tool library, because it saves residents money, reduces waste, and {{3:people learn new skills from it}}.

Consider the ordinary household drill. Most owners use theirs only a few times a year; the rest of the time it sits in a drawer or a garage. {{4}} A family that needs to hang shelves or build a garden bed can borrow the right tools for a week{{5:, which is seven days,}} instead of buying them for hundreds of dollars. For renters and young people setting up their first homes, those savings matter.

Tool libraries also keep things out of landfills. When one drill serves fifty households instead of one, {{6:less drills need}} to be manufactured, packaged, shipped, and eventually thrown away. {{7:Many tool libraries also host repair clinics, where volunteers help residents fix broken lamps, toasters, and bicycles instead of discarding them.}}

Critics {{8:contend}} that lending tools is not the job of a library. Yet libraries have always been about access to knowledge, and knowledge is not stored only in books. A person who borrows a tile saw and teaches herself to retile a bathroom is learning, just as surely as a person who checks out a novel. {{9:Tool libraries are often kept in a separate room or building.}}

Some people worry that borrowed tools will come back broken, or not at all. Libraries, however, have faced that risk with books for more than a century, and they manage it the same {{10:way; with}} borrowing limits, late fees, and trust. A drill, like a book, is worth more to a community when everyone can use it.`,
  questions: [
    {
      id: 'act-fl1-e-04-q1',
      question: STEM,
      options: ['NO CHANGE', 'For example,', 'Today, though,', 'In other words,'],
      correctIndex: 2,
      explanation:
        'The second sentence contrasts the familiar view of libraries with what many libraries now do, so a transition marking the present-day contrast, "Today, though," fits.',
      optionExplanations: [
        'The phrase "as a result" signals cause and effect, but people\'s thinking of libraries as places for books did not cause libraries to start lending tools.',
        'The phrase "for example" introduces an illustration, but lending drills is not an example of borrowing books. It is a contrast with that familiar idea.',
        'The first sentence states the common view of libraries, and the second shows a newer reality. "Today, though" signals both the shift in time and the contrast.',
        'The phrase "in other words" introduces a restatement, but lending tools is a new idea, not a rewording of the claim that people think of libraries as places for books.',
      ],
      skill: 'POW',
      marker: 1,
      difficulty: 'easy',
    },
    {
      id: 'act-fl1-e-04-q2',
      question: STEM,
      options: [
        'NO CHANGE',
        'that can afford one should',
        'which can afford one, should',
        'that can afford one should,',
      ],
      correctIndex: 1,
      explanation:
        'The clause "that can afford one" is restrictive, identifying which towns are meant, so it takes no commas, and nothing should separate the subject from "should."',
      optionExplanations: [
        'The comma after "one" separates the subject, "Every town that can afford one," from its verb, "should have." A single comma cannot come between a subject and its verb.',
        'The clause "that can afford one" limits which towns the writer means, so it is restrictive and takes no commas. The subject then flows directly into the verb "should."',
        'Restrictive clauses use "that," not "which," in standard written English, and the comma after "one" still wrongly separates the subject from its verb.',
        'This version drops the comma between the subject and its verb but adds one after "should," which wrongly separates the helping verb from the main verb "have."',
      ],
      skill: 'CSE',
      marker: 2,
      difficulty: 'medium',
    },
    {
      id: 'act-fl1-e-04-q3',
      question: STEM,
      options: [
        'NO CHANGE',
        'new skills are learned',
        'teaching new skills',
        'teaches new skills',
      ],
      correctIndex: 3,
      explanation:
        'The list of what a tool library does needs three parallel verbs with the same subject: "saves," "reduces," and "teaches."',
      optionExplanations: [
        'The first two items are verbs with "it" as their subject ("saves," "reduces"), but the third switches to a new subject, "people," breaking the parallel structure of the list.',
        'The passive clause "new skills are learned" introduces a new subject and a different verb form, so it does not match "saves residents money" and "reduces waste."',
        'The "-ing" form "teaching" does not match the present-tense verbs "saves" and "reduces," so the three items in the list are not parallel.',
        'The verb "teaches" matches "saves" and "reduces" in form and shares their subject, "it," so the three reasons appear as a clean, parallel list.',
      ],
      skill: 'CSE',
      marker: 3,
      difficulty: 'easy',
    },
    {
      id: 'act-fl1-e-04-q4',
      question:
        'At this point, the writer is considering adding the following sentence:\n\n> A tool library lets many households share one drill, so no one has to buy a tool that will spend most of its life unused.\n\nShould the writer make this addition here?',
      options: [
        "Yes, because it links the example of the idle drill to the paragraph's point about saving money.",
        'Yes, because it provides statistics about how often household drills are actually used.',
        'No, because it repeats the point made in the sentence that comes immediately before it.',
        "No, because it shifts the paragraph's focus from saving money to reducing waste.",
      ],
      correctIndex: 0,
      explanation:
        'Without the sentence, the paragraph jumps from the idle drill to a family borrowing tools; the addition explains how a tool library solves the problem the drill example raises.',
      optionExplanations: [
        'The previous sentence describes a drill sitting unused, and the next describes borrowing instead of buying. The new sentence connects the two by showing how sharing avoids paying for idle tools.',
        'The sentence contains no numbers at all. It explains how sharing works rather than measuring how often drills are used, so it provides no statistics.',
        'The previous sentence only says drills sit unused. The new sentence adds the solution, sharing through a tool library, so it does not simply repeat that point.',
        'The sentence is about not having to buy a tool, which concerns money. It does not discuss landfills or waste, so it does not shift the paragraph\'s focus.',
      ],
      skill: 'POW',
      marker: 4,
      difficulty: 'medium',
    },
    {
      id: 'act-fl1-e-04-q5',
      question: STEM,
      options: [
        'NO CHANGE',
        ', a period of seven days,',
        ', or seven days,',
        'DELETE the underlined portion.',
      ],
      correctIndex: 3,
      explanation:
        'Every reader knows a week is seven days, so any phrase defining it is redundant; deleting it leaves "for a week instead of buying them," which is clear and concise.',
      optionExplanations: [
        'A week is always seven days, so the clause tells readers nothing new. It interrupts the sentence with an unnecessary definition.',
        'Calling a week "a period of seven days" still defines a word every reader already knows. The phrase adds length without adding information.',
        'The shorter "or seven days" is still redundant, since a week and seven days are the same thing. The sentence needs no definition at all.',
        'Removing the phrase leaves "borrow the right tools for a week instead of buying them," which is grammatical and loses no meaning, since a week is already understood as seven days.',
      ],
      skill: 'KLA',
      marker: 5,
      difficulty: 'easy',
    },
    {
      id: 'act-fl1-e-04-q6',
      question: STEM,
      options: ['NO CHANGE', 'lesser drills need', 'fewer drills need', 'less amount of drills need'],
      correctIndex: 2,
      explanation:
        'Drills can be counted, so the sentence needs "fewer," which is used with countable nouns; "less" is for amounts that cannot be counted.',
      optionExplanations: [
        'The word "less" is used with quantities that cannot be counted, such as water or time. Drills are countable objects, so the sentence needs "fewer."',
        'The word "lesser" means smaller in importance or quality, as in "a lesser problem." It does not mean a smaller number of something.',
        'The word "fewer" is used with countable nouns such as drills. The sentence correctly says that a smaller number of drills must be made and thrown away.',
        'The phrase "less amount of" is wordy and still uses "less" with a countable noun. A number of drills, not an amount, is what is being compared.',
      ],
      skill: 'CSE',
      marker: 6,
      difficulty: 'easy',
    },
    {
      id: 'act-fl1-e-04-q7',
      question:
        'The writer is considering deleting the underlined sentence. Should the sentence be kept or deleted?',
      options: [
        'Kept, because it explains how tool libraries pay for the tools that they lend.',
        'Kept, because it describes another way tool libraries help keep items out of landfills.',
        "Deleted, because it shifts the paragraph's focus from tools to library books.",
        'Deleted, because it contradicts the claim that tool libraries help reduce waste.',
      ],
      correctIndex: 1,
      explanation:
        'The paragraph argues that tool libraries reduce waste, and repairing broken items instead of discarding them is another way they do so.',
      optionExplanations: [
        'The sentence describes volunteers fixing broken items. It says nothing about money or how tools are bought, so it does not explain how tool libraries are funded.',
        'The paragraph\'s topic is keeping things out of landfills. Helping residents repair lamps and bicycles instead of throwing them away is another example of exactly that.',
        'The sentence is about repairing household items, not about books. It stays on the paragraph\'s topic of reducing waste, so it does not shift the focus.',
        'Fixing items "instead of discarding them" reduces waste, so the sentence supports the paragraph\'s claim. It does not contradict it.',
      ],
      skill: 'POW',
      marker: 7,
      difficulty: 'medium',
    },
    {
      id: 'act-fl1-e-04-q8',
      question: STEM,
      options: ['NO CHANGE', 'content', 'contain', 'condone'],
      correctIndex: 0,
      explanation:
        'To "contend" is to argue or claim, which is exactly what critics do with the opinion that follows.',
      optionExplanations: [
        'The verb "contend" means to argue or assert, so "Critics contend that lending tools is not the job of a library" accurately introduces the opposing claim.',
        'The verb "content" means to satisfy or make someone happy. It cannot introduce a claim, so "Critics content that" makes no sense.',
        'The verb "contain" means to hold or include something. Critics do not hold an idea inside them in this sense, so the word does not fit.',
        'The verb "condone" means to accept or overlook wrongdoing. It cannot be followed by a "that" clause stating an opinion, and its meaning does not fit here.',
      ],
      skill: 'KLA',
      marker: 8,
      difficulty: 'easy',
    },
    {
      id: 'act-fl1-e-04-q9',
      question:
        'Given that all the choices are true, which one best supports the writer\'s claim in this paragraph that borrowing tools is a form of learning?',
      options: [
        'NO CHANGE',
        'Some tool libraries require borrowers to be at least eighteen years old.',
        'Some libraries also lend museum passes and musical instruments.',
        'Many tool libraries offer workshops where volunteers teach people to use tools safely.',
      ],
      correctIndex: 3,
      explanation:
        'Workshops in which volunteers teach tool skills show directly that tool libraries are places of learning, which is the paragraph\'s claim.',
      optionExplanations: [
        'Where the tools are stored is a practical detail. It says nothing about learning, so it does not support the paragraph\'s claim against the critics.',
        'An age requirement is a rule about borrowing. It does not show anyone gaining knowledge or skills, so it does not support the claim about learning.',
        'Lending other kinds of items shows that libraries offer more than books, but it does not show that borrowing tools involves learning.',
        'Workshops where volunteers teach tool use show people gaining skills through the tool library, which directly supports the claim that borrowing tools is a form of learning.',
      ],
      skill: 'POW',
      marker: 9,
      difficulty: 'easy',
    },
    {
      id: 'act-fl1-e-04-q10',
      question: STEM,
      options: ['NO CHANGE', 'way: with', 'way, with:', 'way with:'],
      correctIndex: 1,
      explanation:
        'A colon after the complete clause "they manage it the same way" correctly introduces the explanation of what that way is.',
      optionExplanations: [
        'A semicolon must be followed by an independent clause, but "with borrowing limits, late fees, and trust" is only a prepositional phrase, so it cannot follow a semicolon.',
        'The clause "they manage it the same way" is complete, and a colon can follow a complete clause to introduce an explanation of it, here the list of methods.',
        'A colon placed after the preposition "with" separates the preposition from its objects, and the comma before "with" adds a second unneeded mark.',
        'A colon should come after a complete clause, not after a preposition. Placing it after "with" splits the preposition from the list that completes it.',
      ],
      skill: 'CSE',
      marker: 10,
      difficulty: 'medium',
    },
  ],
}

const PASSAGE_5: ActFLPassage = {
  id: 'act-fl1-e-05',
  title: 'Detroit on the Walls',
  kind: 'informative',
  text: `In 1932, the Mexican painter Diego Rivera arrived in Detroit with a commission to paint murals at the Detroit Institute of Arts. The museum's director, William Valentiner, {{1:was a respected scholar of European art}}. Rivera, after touring the city's factories, proposed something far more ambitious: twenty-seven panels covering all four walls of the museum's central courtyard.

Rivera spent weeks at the Ford Motor Company's River Rouge complex, {{2:which was at the time,}} one of the largest factories in the world. He filled sketchbooks with drawings of furnaces, conveyor belts, and the workers {{3:which}} tended them. The two largest panels, on the courtyard's north and south walls, {{4:depicts}} the stages of building a car, from casting engine parts to assembling the body.

[1] Rivera painted in true fresco{{5:, a technique in which pigment is brushed onto wet lime plaster}}. [2] As the plaster dries, the color becomes part of the wall itself. [3] Because wet plaster stays workable for only part of a day, assistants spread fresh plaster over one section of wall each morning, and Rivera had to finish {{6:it}} before the plaster dried. [4] Working at that pace, he completed all twenty-seven panels in less than a year. {{7}}

When the murals were unveiled in 1933, they {{8:caused a whole lot of fuss}}. Some critics called them crude or offensive, and several local leaders demanded that they be whitewashed. One panel, which showed a child receiving a vaccination, drew particular anger {{9:because some viewers thought}} it mocked a religious scene. Edsel Ford, the Ford Motor Company president who had paid for the project, publicly defended the murals, and they survived.

{{10:The murals did more than survive; they came to define the museum.}} The courtyard where they hang is now called Rivera Court, and in 2014 the murals were designated a National Historic Landmark.`,
  questions: [
    {
      id: 'act-fl1-e-05-q1',
      question:
        'Given that all the choices are true, which one most effectively sets up the contrast drawn in the next sentence?',
      options: [
        'NO CHANGE',
        'had planned for two large murals on facing walls',
        'had worked at the museum for close to a full decade',
        "had admired Rivera's work for some time",
      ],
      correctIndex: 1,
      explanation:
        'The next sentence says Rivera proposed something "far more ambitious," so the sentence before it must state the original, smaller plan: two murals on facing walls.',
      optionExplanations: [
        'Valentiner\'s scholarship tells the reader about him, but it describes no plan. Rivera\'s proposal of something "far more ambitious" then has nothing to be compared with.',
        'A plan for two murals is the modest starting point that Rivera\'s twenty-seven panels on all four walls exceed. This choice gives "far more ambitious" its point of comparison.',
        'How long Valentiner had worked at the museum is background about his career. It does not describe a plan, so the comparison in the next sentence would have no anchor.',
        'Admiring Rivera\'s work explains why Valentiner might have hired him, but it does not describe the scale of the project, so "far more ambitious" would compare against nothing.',
      ],
      skill: 'POW',
      marker: 1,
      difficulty: 'medium',
    },
    {
      id: 'act-fl1-e-05-q2',
      question: STEM,
      options: [
        'NO CHANGE',
        'which was, at the time',
        'which, was at the time,',
        'which was, at the time,',
      ],
      correctIndex: 3,
      explanation:
        'The phrase "at the time" interrupts the clause "which was one of the largest factories," so it must be set off by a pair of commas.',
      optionExplanations: [
        'A single comma after "time" separates the verb "was" from its complement, "one of the largest factories." An interrupting phrase needs a comma on both sides.',
        'The opening comma is in place, but without a closing comma after "time," the interrupting phrase runs straight into "one of the largest factories," leaving the pair incomplete.',
        'The comma after "which" separates the relative pronoun from its own verb, "was," and leaves "at the time" without a comma before it, so the interrupter is not set off.',
        'A comma on each side of "at the time" sets off the interrupting phrase, so the clause reads cleanly as "which was one of the largest factories in the world."',
      ],
      skill: 'CSE',
      marker: 2,
      difficulty: 'medium',
    },
    {
      id: 'act-fl1-e-05-q3',
      question: STEM,
      options: ['NO CHANGE', 'whom', 'whose', 'who'],
      correctIndex: 3,
      explanation:
        'The pronoun refers to people (the workers) and is the subject of "tended," so the subject form "who" is required.',
      optionExplanations: [
        'The relative pronoun "which" refers to things or animals, not people. Because it refers to the workers, the sentence needs a pronoun used for people.',
        'The pronoun "whom" is an object form, but here the pronoun is the subject of the verb "tended." The subject form is needed.',
        'The pronoun "whose" shows possession, which would require a noun after it, as in "whose machines." It cannot serve as the subject of "tended."',
        'The pronoun "who" refers to people and is in the subject form, so "the workers who tended them" correctly makes the workers the ones doing the tending.',
      ],
      skill: 'CSE',
      marker: 3,
      difficulty: 'easy',
    },
    {
      id: 'act-fl1-e-05-q4',
      question: STEM,
      options: ['NO CHANGE', 'is depicting', 'depict', 'has depicted'],
      correctIndex: 2,
      explanation:
        'The subject is the plural "panels," not "walls," so the verb must be the plural "depict."',
      optionExplanations: [
        'The singular verb "depicts" may seem to fit the nearby nouns, but the subject is the plural "The two largest panels." A plural subject needs a plural verb.',
        'The singular helping verb "is" does not agree with the plural subject "panels," and the progressive form wrongly suggests an action happening right now.',
        'The plural verb "depict" agrees with the plural subject "The two largest panels." The phrase about the walls between them does not change the subject.',
        'The singular helping verb "has" does not agree with the plural subject "panels." A plural subject would need "have," and the simple present is clearer anyway.',
      ],
      skill: 'CSE',
      marker: 4,
      difficulty: 'easy',
    },
    {
      id: 'act-fl1-e-05-q5',
      question:
        'The writer is considering deleting the underlined portion (placing a period after the word "fresco"). Should the underlined portion be kept or deleted?',
      options: [
        'Kept, because it defines a term that the rest of the paragraph depends on.',
        'Kept, because it shows that Rivera invented a new way of painting murals.',
        'Deleted, because it repeats information given earlier in the essay.',
        "Deleted, because it distracts from the essay's focus on Detroit's factories.",
      ],
      correctIndex: 0,
      explanation:
        'Without the definition, readers would not know that fresco means painting on wet plaster, and the rest of the paragraph about drying plaster would make little sense.',
      optionExplanations: [
        'The rest of the paragraph discusses wet plaster drying and the daily deadline it created. Readers need the definition of fresco to follow that discussion.',
        'The portion explains what fresco is, but nothing in it suggests Rivera invented the technique. Calling it "true fresco" implies an established, traditional method.',
        'No earlier part of the essay mentions fresco or plaster, so the definition is new information rather than a repetition.',
        'The essay covers how the murals were made as well as what they show. Defining the technique supports the paragraph\'s focus on Rivera\'s working method.',
      ],
      skill: 'POW',
      marker: 5,
      difficulty: 'medium',
    },
    {
      id: 'act-fl1-e-05-q6',
      question: STEM,
      options: ['NO CHANGE', 'that section', 'each of these', 'this'],
      correctIndex: 1,
      explanation:
        'The pronoun "it" could point to the plaster, the wall, or the section; "that section" makes clear what Rivera had to finish.',
      optionExplanations: [
        'The pronoun "it" could refer to "fresh plaster," "wall," or "one section," so the reader cannot tell for certain what Rivera had to finish.',
        'Naming "that section" removes any doubt: Rivera had to paint the whole section laid that day before its plaster dried.',
        'The phrase "each of these" is plural, but the sentence mentions only one section each morning, and "these" has no clear antecedent.',
        'The pronoun "this" is just as vague as "it." Used alone, it could point to the plaster, the wall, or the section, so it does not fix the ambiguity.',
      ],
      skill: 'CSE',
      marker: 6,
      difficulty: 'medium',
    },
    {
      id: 'act-fl1-e-05-q7',
      question:
        'The writer wants to add the following sentence to this paragraph:\n\n> Any part of the day\'s section left unpainted had to be chipped away and replastered.\n\nThe sentence would most logically be placed:',
      options: ['after Sentence 1.', 'after Sentence 2.', 'after Sentence 3.', 'after Sentence 4.'],
      correctIndex: 2,
      explanation:
        'Sentence 3 introduces the daily section and the deadline for finishing it, so the consequence of missing that deadline belongs right after it.',
      optionExplanations: [
        'Sentence 1 only defines fresco. The "day\'s section" has not been mentioned yet, so a sentence about chipping away part of it would confuse the reader here.',
        'Sentence 2 explains how color bonds to plaster, but the daily sections are not introduced until Sentence 3, so "the day\'s section" would have no clear meaning here.',
        'Sentence 3 explains that a new section was laid each day and had to be finished before it dried. The new sentence then tells what happened when Rivera did not finish.',
        'Sentence 4 sums up the whole project. Following it with a detail about daily work would return to the routine after the paragraph has already moved on to the result.',
      ],
      skill: 'POW',
      marker: 7,
      difficulty: 'medium',
    },
    {
      id: 'act-fl1-e-05-q8',
      question: STEM,
      options: [
        'NO CHANGE',
        'made people kind of mad',
        'went over like a lead balloon',
        'sparked a heated controversy',
      ],
      correctIndex: 3,
      explanation:
        'The essay is written in a formal, informative tone, and "sparked a heated controversy" matches it while accurately describing the angry reaction.',
      optionExplanations: [
        'The phrase "a whole lot of fuss" is casual and vague. It clashes with the essay\'s formal tone and understates the serious calls to destroy the murals.',
        'The phrase "kind of mad" is conversational and weakens the point. The reactions described, including demands to whitewash the murals, were far stronger than that.',
        'The idiom "went over like a lead balloon" is informal, and it suggests the murals were simply unpopular, not that they provoked the fierce debate the paragraph describes.',
        'The phrase "sparked a heated controversy" fits the essay\'s formal tone and accurately sets up the critics, the demands to whitewash, and Edsel Ford\'s defense.',
      ],
      skill: 'KLA',
      marker: 8,
      difficulty: 'easy',
    },
    {
      id: 'act-fl1-e-05-q9',
      question: STEM,
      options: [
        'NO CHANGE',
        'because, some viewers thought,',
        'because some viewers, thought',
        'because some viewers thought,',
      ],
      correctIndex: 0,
      explanation:
        'The clause "because some viewers thought it mocked a religious scene" needs no internal punctuation, since each part leads directly into the next.',
      optionExplanations: [
        'The subordinating conjunction "because" leads directly into its clause, and "some viewers thought it mocked" has no interrupting element, so no commas are needed.',
        'The commas treat "some viewers thought" as an interruption, but those words are the subject and verb of the clause. Setting them off makes the sentence confusing.',
        'The comma between the subject "some viewers" and the verb "thought" wrongly separates the two essential parts of the clause.',
        'The comma after "thought" separates the verb from the clause that tells what the viewers thought, "it mocked a religious scene," which should follow without a break.',
      ],
      skill: 'CSE',
      marker: 9,
      difficulty: 'easy',
    },
    {
      id: 'act-fl1-e-05-q10',
      question:
        'Which choice provides the most effective transition from the preceding paragraph to this one?',
      options: [
        'NO CHANGE',
        'Edsel Ford was the only son of Henry Ford.',
        'Rivera later painted murals in other American cities.',
        'Frescoes can last for centuries if they are kept dry.',
      ],
      correctIndex: 0,
      explanation:
        'The preceding paragraph ends with the murals surviving; the sentence picks up that word and leads into the honors described in the rest of this paragraph.',
      optionExplanations: [
        'The sentence picks up the word "survived" from the end of the previous paragraph and introduces this paragraph\'s point: the murals became central to the museum\'s identity.',
        'This fact about Edsel Ford\'s family is unrelated to the murals\' later reputation, so it does not lead into a paragraph about Rivera Court and landmark status.',
        'Rivera\'s later work in other cities moves away from the Detroit murals, while this paragraph is about how those murals came to be honored in Detroit.',
        'A general fact about frescoes lasting does not connect the controversy in the previous paragraph to the honors described in this one.',
      ],
      skill: 'POW',
      marker: 10,
      difficulty: 'medium',
    },
  ],
}

export const ACT_FL1_ENGLISH: ActFLPassage[] = [PASSAGE_1, PASSAGE_2, PASSAGE_3, PASSAGE_4, PASSAGE_5]
