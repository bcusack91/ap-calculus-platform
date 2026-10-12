/**
 * Enhanced ACT full-length Form 2 — English (5 passages × 10 questions, 35 min).
 * Essays: a grandmother's recipe notebook (narrative) · Frank Lloyd Wright's
 * Fallingwater (informative) · how the James Webb telescope's mirror unfolds
 * (informative) · later school start times (argumentative) · the history of
 * the banjo (informative).
 */
import type { ActFLPassage } from './types'

const STEM = 'Which choice is the best version of the underlined portion?'

const PASSAGE_1: ActFLPassage = {
  id: 'act-fl2-e-01',
  title: 'Ruth Was Right',
  kind: 'narrative',
  text: `My grandmother's recipe notebook has a cracked green cover and a spine held together with masking tape. For forty years it lived in the drawer beside her {{1:stove, where it collected}} flour, butter stains, and the occasional splash of tomato sauce. When she moved into an apartment with a kitchen {{2:smaller than her old one}}, she handed the notebook to me. "Somebody should get some use out of this," she said.

I had expected a tidy collection of recipes. Instead, I found a record of arguments. Many pages {{3:holds}} three or four versions of the same dish, each one crossed out and corrected in a different color of ink. Her pound cake alone went through seven revisions. Next to the fourth, she had written "TOO DRY—ASK RUTH," and beneath that, in pencil, she had added, "Ruth says more butter. Ruth was right."

{{4:Ruth I learned later,}} {{5:had lived next door to her, as her neighbor, for thirty years}}. The notebook is full of people like her. A note in the margin of a soup recipe {{6:credits}} "Mr. Okafor, who grows the good peppers." A recipe for dumplings appears in someone else's handwriting entirely, small and slanted, signed "Mei, 1979." {{7}} My grandmother had not simply written down what she cooked. She had written down who taught her.

[1] Last winter I decided to cook my way through the notebook. [2] I burned the first batch of dumplings because I could not tell whether Mei had written "4 min." or "9 min." [3] {{8:Following the seventh revision exactly, my pound cake came out}} dense and pale. [4] When I called my grandmother to ask what I had done wrong, she laughed. [5] I began with Mei's dumplings and the much-revised pound cake. [6] "The recipe's not finished," she said. "Neither am I." {{9}}

Now the notebook has a new color of ink in it: mine. Under the pound cake, I have added an eighth version, with a note that says "Bake five minutes longer—ask Grandma." She tells me it is the first time anyone has written her name in it.`,
  questions: [
    {
      id: 'act-fl2-e-01-q1',
      question: STEM,
      options: ['NO CHANGE', 'stove, it collected', 'stove; collecting', 'stove where, it collected'],
      correctIndex: 0,
      explanation:
        'The words "where it collected flour…" form a relative clause that adds information about the drawer, so a comma before "where" correctly attaches it to the main clause.',
      optionExplanations: [
        'The relative adverb "where" turns "it collected flour, butter stains…" into a dependent clause describing the drawer. A comma correctly sets off this nonessential description, so the sentence is complete and correct.',
        'Removing "where" leaves "it collected flour" as an independent clause. Two independent clauses joined by only a comma form a comma splice.',
        'A semicolon must separate two independent clauses, but "collecting flour, butter stains…" is only a participial phrase, so the semicolon is misused here.',
        'The comma after "where" splits the relative adverb from the clause it introduces, and the missing comma before "where" leaves the nonessential clause unset off. Both commas are in the wrong place.',
      ],
      skill: 'CSE',
      marker: 1,
      difficulty: 'easy',
    },
    {
      id: 'act-fl2-e-01-q2',
      question:
        "Given that all the choices are true, which one most vividly conveys how cramped the grandmother's new kitchen was?",
      options: [
        'NO CHANGE',
        'on the third floor of her building',
        'so narrow she could touch both counters at once',
        'that she insisted would suit her fine',
      ],
      correctIndex: 2,
      explanation:
        'Only the image of touching both counters at the same time lets the reader picture how little room the new kitchen had.',
      optionExplanations: [
        'Saying the kitchen was "smaller than her old one" is a vague comparison. It does not tell the reader how small the space was or help the reader picture it.',
        'The floor the apartment is on says nothing about the size of the kitchen, so this detail does not convey that the space was cramped at all.',
        'Being able to reach both counters at the same moment creates a concrete picture of a tiny space, which is exactly the vivid sense of crampedness the question asks for.',
        'This choice reveals the grandmother\'s attitude toward the kitchen, not its size. A reader learns how she felt but not how cramped the room actually was.',
      ],
      skill: 'POW',
      marker: 2,
      difficulty: 'easy',
    },
    {
      id: 'act-fl2-e-01-q3',
      question: STEM,
      options: ['NO CHANGE', 'hold', 'is holding', 'has held'],
      correctIndex: 1,
      explanation:
        'The subject "Many pages" is plural, so the verb must be the plural "hold," which also keeps the paragraph in the present tense.',
      optionExplanations: [
        'The verb "holds" is singular, but its subject, "Many pages," is plural. A plural subject needs a plural verb, so this is a subject-verb agreement error.',
        'The plural verb "hold" agrees with the plural subject "Many pages," and the present tense matches the way the narrator describes the notebook as it exists now.',
        'The helping verb "is" is singular, so "is holding" still fails to agree with the plural subject "Many pages." The progressive form also oddly suggests a temporary action.',
        'The helping verb "has" is singular, so "has held" does not agree with the plural subject "Many pages." The plural form would need "have held."',
      ],
      skill: 'CSE',
      marker: 3,
      difficulty: 'easy',
    },
    {
      id: 'act-fl2-e-01-q4',
      question: STEM,
      options: ['NO CHANGE', 'Ruth, I learned later', 'Ruth, I, learned later,', 'Ruth, I learned later,'],
      correctIndex: 3,
      explanation:
        'The phrase "I learned later" interrupts the sentence between the subject "Ruth" and the verb "had lived," so it must be enclosed by a pair of commas.',
      optionExplanations: [
        'Only one comma, placed after "later," surrounds the interrupting phrase "I learned later." An interrupter needs a comma on each side, so the opening comma after "Ruth" is missing.',
        'This choice opens the interrupting phrase with a comma after "Ruth" but never closes it, so the comma before "had lived" is missing and the phrase runs into the verb.',
        'The comma after "I" separates the subject of the interrupting phrase from its verb, "learned," which breaks up the phrase for no reason, even though the outer pair of commas is correct.',
        'A pair of commas sets off "I learned later," an interrupting phrase, so the core sentence "Ruth had lived next door…" reads clearly around it.',
      ],
      skill: 'CSE',
      marker: 4,
      difficulty: 'easy',
    },
    {
      id: 'act-fl2-e-01-q5',
      question: STEM,
      options: [
        'NO CHANGE',
        'had been her next-door neighbor for thirty years',
        'had lived next door to her for thirty years as a neighbor beside her',
        'had for thirty years lived as her neighbor, next door to her',
      ],
      correctIndex: 1,
      explanation:
        'Living "next door" already means being a neighbor, so the single compound "next-door neighbor" says everything without repetition.',
      optionExplanations: [
        'Someone who lives next door is by definition a neighbor, so adding "as her neighbor" repeats the idea. The phrase makes the sentence wordier without adding meaning.',
        'The compound "next-door neighbor" combines location and relationship in a few words, stating the fact once and clearly. This is the most concise choice.',
        'This version says the idea three times: "next door," "as a neighbor," and "beside her." It is the most redundant choice of all.',
        'The words "neighbor" and "next door to her" still repeat the same idea, and moving "for thirty years" before the verb makes the sentence awkward as well as wordy.',
      ],
      skill: 'KLA',
      marker: 5,
      difficulty: 'easy',
    },
    {
      id: 'act-fl2-e-01-q6',
      question: STEM,
      options: ['NO CHANGE', 'reprimands', 'awards', 'charges'],
      correctIndex: 0,
      explanation:
        'The margin note gives Mr. Okafor recognition for the peppers, and "credits" means to acknowledge someone\'s contribution, which fits the paragraph about people who taught the grandmother.',
      optionExplanations: [
        'To credit someone is to acknowledge that person\'s contribution. The note recognizes Mr. Okafor as the source of the good peppers, which suits the paragraph\'s point about who taught the grandmother.',
        'To reprimand someone is to scold that person formally for a fault. The note praises Mr. Okafor\'s peppers, so the negative word contradicts the meaning.',
        'To award is to give a prize to someone, and the verb needs the thing given, as in "awards him a medal." Here it makes no sense with the quoted name alone.',
        'To charge someone is to accuse that person or to bill them. Neither meaning fits a friendly note acknowledging the man who grows the good peppers.',
      ],
      skill: 'KLA',
      marker: 6,
      difficulty: 'easy',
    },
    {
      id: 'act-fl2-e-01-q7',
      question:
        'At this point, the writer is considering adding the following sentence:\n\n> Dumplings are made in many cuisines, from Chinese jiaozi to Polish pierogi.\n\nShould the writer make this addition here?',
      options: [
        "Yes, because it explains why Mei's recipe was included in the notebook.",
        "Yes, because it shows how widely the grandmother's cooking ranged.",
        "No, because it suggests that Mei's recipe was not an authentic one.",
        'No, because it shifts the focus from the people named in the notebook to dumplings in general.',
      ],
      correctIndex: 3,
      explanation:
        'The paragraph is about the people recorded in the notebook, building to the point that the grandmother wrote down who taught her. A general fact about dumplings breaks that focus.',
      optionExplanations: [
        'The sentence offers a general fact about dumplings around the world. It says nothing about Mei or about why her recipe appears in the grandmother\'s notebook.',
        'The sentence is about dumplings in many cuisines, not about what the grandmother cooked. It gives no evidence about the range of her own cooking.',
        'Nothing in the sentence questions whether Mei\'s dumplings are genuine. The real problem is that the sentence is off topic, not that it casts doubt on Mei.',
        'The paragraph builds toward the idea that the grandmother recorded who taught her, naming Ruth, Mr. Okafor, and Mei. A survey of world dumplings interrupts that focus on people.',
      ],
      skill: 'POW',
      marker: 7,
      difficulty: 'easy',
    },
    {
      id: 'act-fl2-e-01-q8',
      question: STEM,
      options: [
        'NO CHANGE',
        'Following the seventh revision exactly, the result was that my pound cake came out',
        'Although I followed the seventh revision exactly, my pound cake came out',
        'The seventh revision followed exactly, my pound cake came out',
      ],
      correctIndex: 2,
      explanation:
        'The opening modifier must clearly refer to the person who followed the recipe. Turning it into the clause "Although I followed the seventh revision exactly" names the narrator as the one following it.',
      optionExplanations: [
        'The phrase "Following the seventh revision exactly" is placed next to "my pound cake," so it says the cake followed the recipe. This is a dangling modifier.',
        'The opening phrase now sits next to "the result," which also cannot follow a recipe, so the modifier still dangles, and "the result was that" adds wordiness.',
        'The dependent clause "Although I followed the seventh revision exactly" supplies its own subject, "I," so it is clear who followed the recipe, and "Although" signals the disappointing result.',
        'The words "The seventh revision followed exactly" read as a separate clause in which the revision does the following, and joining it to the main clause with a comma is confusing and incorrect.',
      ],
      skill: 'CSE',
      marker: 8,
      difficulty: 'medium',
    },
    {
      id: 'act-fl2-e-01-q9',
      question: 'For the sake of logic and cohesion, Sentence 5 should be placed:',
      options: ['where it is now.', 'before Sentence 1.', 'after Sentence 1.', 'after Sentence 3.'],
      correctIndex: 2,
      explanation:
        'Sentence 5 names the two recipes the narrator started with, so it belongs right after the decision in Sentence 1 and before the results for the dumplings and the pound cake.',
      optionExplanations: [
        'In its current spot, the sentence separates the grandmother\'s laugh in Sentence 4 from the words she says in Sentence 6, and it announces two recipes after both have already been described.',
        'Placed first, the sentence would mention beginning with two recipes before the narrator has decided to cook through the notebook, which Sentence 1 introduces.',
        'After Sentence 1 states the plan, Sentence 5 names the two recipes the narrator tried first, and Sentences 2 and 3 then describe how each one turned out.',
        'By the end of Sentence 3, both recipes have already failed, so saying the narrator "began with" them would come too late and break the order of events.',
      ],
      skill: 'POW',
      marker: 9,
      difficulty: 'medium',
    },
    {
      id: 'act-fl2-e-01-q10',
      question:
        "Suppose the writer's primary purpose had been to show how a family keepsake can connect one generation of cooks to the next. Would this essay accomplish that purpose?",
      options: [
        "Yes, because it shows the notebook recording the people who taught the grandmother and then the narrator's own addition.",
        'Yes, because it explains in detail how the grandmother first learned to bake as a child.',
        "No, because it focuses mainly on the narrator's failed attempts to follow the recipes.",
        'No, because the grandmother gives the notebook away instead of teaching its recipes directly.',
      ],
      correctIndex: 0,
      explanation:
        "The essay shows the notebook gathering the names of the grandmother's teachers and ends with the narrator adding an eighth version that credits her, linking generations of cooks.",
      optionExplanations: [
        'The notebook records Ruth, Mr. Okafor, and Mei, who taught the grandmother, and the essay ends with the narrator adding a version that names "Grandma." The keepsake links several generations of cooks.',
        'The essay never describes the grandmother\'s childhood or how she first learned to bake. Its evidence of connection comes from the notebook, not from her early life.',
        'The failed dumplings and pound cake occupy only one paragraph and lead to the grandmother\'s comment that the recipe is not finished, which supports the theme of connection rather than replacing it.',
        'Giving the notebook away is how it passes to the next generation. The narrator then calls the grandmother for help, so the essay does show her guiding the narrator.',
      ],
      skill: 'POW',
      difficulty: 'medium',
    },
  ],
}

const PASSAGE_2: ActFLPassage = {
  id: 'act-fl2-e-02',
  title: 'A House on the Falls',
  kind: 'informative',
  text: `In 1934, Edgar {{1:Kaufmann, who owned}} a large department store in Pittsburgh, asked Frank Lloyd Wright to design a weekend house for his family. The Kaufmanns owned a wooded property in southwestern Pennsylvania along a stream called Bear Run, and their favorite spot {{2:on the land, the place they loved most,}} was a waterfall. They expected the new house to sit across the stream from the falls so that they could admire the view.

Wright had other ideas. He set the house directly on top of the falls, anchoring it to the rock ledges beside the stream. {{3:Local workers would do most of the construction.}} According to a well-known story, Wright did not put the design on paper until the morning Kaufmann telephoned to say he was on his way to see {{4:it, Wright then sketched}} the plans in the few hours it took his client to drive to Wright's studio in Wisconsin.

The design depends on the cantilever, a slab or beam supported at only one end. Broad terraces of reinforced concrete reach out over the {{5:water and seem}} to hover above the stream. Inside, a boulder that Wright chose to build around rises through the living room floor and {{6:served}} as the hearth of the fireplace. {{7:A hatch in that floor opens onto a suspended stairway that leads down to the stream itself.}} The walls are made of sandstone quarried on the property, so the house seems to grow out of the hillside.

The terraces were bold, perhaps too bold. Engineers hired by Kaufmann {{8:were totally freaked out over whether}} the concrete could hold its own weight, and over the following decades the terraces did begin to sag. In 2002, crews strengthened them by running steel cables through the terrace floors and pulling the cables tight.

The Kaufmanns' {{9:son, Edgar Kaufmann Jr. gave}} the house to the Western Pennsylvania Conservancy in 1963, and it opened to visitors the following year. In 2019, it was one of eight Wright buildings added to the UNESCO World Heritage List. {{10}}`,
  questions: [
    {
      id: 'act-fl2-e-02-q1',
      question: STEM,
      options: ['NO CHANGE', 'Kaufmann who owned', 'Kaufmann, he owned', 'Kaufmann, whom owned'],
      correctIndex: 0,
      explanation:
        'The relative pronoun "who" serves as the subject of the clause "who owned a large department store," and the commas set off this nonessential information about Kaufmann.',
      optionExplanations: [
        'The pronoun "who" is the subject of the verb "owned," so the subject form is correct, and the paired commas properly set off a clause that adds nonessential information about Kaufmann.',
        'Without the comma after "Kaufmann," the clause has a closing comma but no opening one. Nonessential information about a named person must be set off on both sides.',
        'The pronoun "he" makes "he owned a large department store in Pittsburgh" an independent clause wedged inside another sentence, which leaves the sentence ungrammatical.',
        'The pronoun "whom" is an object form, but the pronoun here is the subject of "owned." The subject form "who" is required.',
      ],
      skill: 'CSE',
      marker: 1,
      difficulty: 'easy',
    },
    {
      id: 'act-fl2-e-02-q2',
      question: STEM,
      options: [
        'NO CHANGE',
        'on the property, which was the one they loved best,',
        'on the land',
        'of all the places, which they liked the most,',
      ],
      correctIndex: 2,
      explanation:
        'A "favorite spot" is already the one the family loved most, so any phrase repeating that idea is redundant; "on the land" says only what is needed.',
      optionExplanations: [
        'The word "favorite" already means the spot they loved most, so "the place they loved most" repeats the idea and makes the sentence wordier without adding anything.',
        'The clause "which was the one they loved best" restates the meaning of "favorite," so this choice is just as redundant as the original and even longer.',
        'The short phrase "on the land" tells where the spot was and lets the word "favorite" carry the idea of preference by itself. It is the clearest and most concise choice.',
        'The clause "which they liked the most" repeats the meaning of "favorite," and "of all the places" adds a second unneeded phrase, so this choice is wordy and redundant.',
      ],
      skill: 'KLA',
      marker: 2,
      difficulty: 'easy',
    },
    {
      id: 'act-fl2-e-02-q3',
      question:
        "Given that all the choices are true, which one best explains Wright's reason for placing the house above the falls rather than across from them?",
      options: [
        'NO CHANGE',
        'Wright was nearly seventy years old at the time.',
        'That way, the family would live with the waterfall instead of merely looking at it.',
        'Kaufmann had come to know Wright through his son, who was studying under the architect.',
      ],
      correctIndex: 2,
      explanation:
        'Only this choice states a purpose for the placement: Wright wanted the family to live with the waterfall, not just view it, which explains why he rejected the expected spot across the stream.',
      optionExplanations: [
        'Who did the construction has nothing to do with where the house was placed. The sentence gives no reason for choosing a spot above the falls.',
        'Wright\'s age is a biographical fact, but it does not explain why he chose to build on top of the falls instead of facing them.',
        'This sentence gives Wright\'s purpose: the family would live with the waterfall rather than simply look at it. That reason directly explains his choice of site over the Kaufmanns\' expectation.',
        'How the client and architect met is background information. It does not explain why Wright placed the house above the waterfall.',
      ],
      skill: 'POW',
      marker: 3,
      difficulty: 'easy',
    },
    {
      id: 'act-fl2-e-02-q4',
      question: STEM,
      options: ['NO CHANGE', 'it Wright then sketched', 'it, Wright, then, sketched', 'it; Wright then sketched'],
      correctIndex: 3,
      explanation:
        'Both "Wright did not put the design on paper…" and "Wright then sketched the plans…" are independent clauses, so a semicolon is needed to join them.',
      optionExplanations: [
        'A comma alone cannot join two independent clauses. Because "then" is an adverb, not a conjunction, the sentence as written is a comma splice.',
        'With no punctuation at all, the two independent clauses run together, creating a fused sentence that is harder to read than the original.',
        'Adding commas around "then" does not fix the problem, since the two independent clauses are still joined only by a comma. The sentence remains a comma splice.',
        'A semicolon correctly joins two closely related independent clauses, and "then" still shows that the sketching followed the phone call.',
      ],
      skill: 'CSE',
      marker: 4,
      difficulty: 'medium',
    },
    {
      id: 'act-fl2-e-02-q5',
      question: STEM,
      options: ['NO CHANGE', 'water, and, seem', 'water; and seem', 'water: and seem'],
      correctIndex: 0,
      explanation:
        'The sentence has one subject, "terraces," with two verbs, "reach" and "seem." Two verbs sharing a subject should not be separated by any punctuation.',
      optionExplanations: [
        'The subject "terraces" has two verbs, "reach out" and "seem to hover," joined by "and." Because the second part is not an independent clause, no punctuation is needed before "and."',
        'The commas around "and" interrupt a simple compound verb for no reason. Nothing in "and" needs to be set off from the rest of the sentence.',
        'A semicolon must join two independent clauses, but "and seem to hover above the stream" has no subject of its own, so the semicolon is misused.',
        'A colon must follow an independent clause and introduce an explanation or list. Here it simply breaks a compound verb in two, which is incorrect.',
      ],
      skill: 'CSE',
      marker: 5,
      difficulty: 'medium',
    },
    {
      id: 'act-fl2-e-02-q6',
      question: STEM,
      options: ['NO CHANGE', 'serves', 'had served', 'will serve'],
      correctIndex: 1,
      explanation:
        'The boulder "rises" in the present tense, and the paragraph describes the house as it exists now, so the second verb should also be present: "serves."',
      optionExplanations: [
        'The past-tense "served" clashes with the present-tense "rises" in the same compound verb. The boulder still serves as the hearth, so the shift in tense is illogical.',
        'The present-tense "serves" matches "rises" and the rest of the paragraph, which describes features the house still has today.',
        'The past perfect "had served" refers to something completed before another past event, which makes no sense next to the present-tense "rises."',
        'The future "will serve" suggests the boulder has not yet become the hearth, which contradicts the description of a house that already exists.',
      ],
      skill: 'CSE',
      marker: 6,
      difficulty: 'easy',
    },
    {
      id: 'act-fl2-e-02-q7',
      question: 'If the writer were to delete the underlined sentence, the paragraph would primarily lose:',
      options: [
        'an explanation of how the cantilevered terraces are supported.',
        'a description of the materials used to build the walls.',
        'evidence that the Kaufmanns seldom visited the waterfall.',
        'a detail showing another way the house connects its occupants to the stream.',
      ],
      correctIndex: 3,
      explanation:
        'The stairway leads from the living room down to the water, one more feature that ties the house to Bear Run, in keeping with the paragraph\'s description of how the design joins the house to its site.',
      optionExplanations: [
        'The sentence is about a hatch and a stairway, not the terraces. The cantilever is explained earlier in the paragraph, so deleting this sentence would not remove that explanation.',
        'The materials of the walls are described in the sentence that follows, about sandstone. The stairway sentence mentions no building materials.',
        'A stairway leading straight to the water suggests the family could reach the stream easily. Nothing in the sentence implies that they seldom went there.',
        'The hatch and stairway lead from the living room down to the stream, another way the house brings its residents into contact with the water, like the terraces and the boulder.',
      ],
      skill: 'POW',
      marker: 7,
      difficulty: 'medium',
    },
    {
      id: 'act-fl2-e-02-q8',
      question: STEM,
      options: ['NO CHANGE', 'got super nervous about whether', 'were kind of unsure if', 'doubted whether'],
      correctIndex: 3,
      explanation:
        'The essay uses a formal, informative tone, so the plain, precise verb "doubted" fits better than slang.',
      optionExplanations: [
        'The slang phrase "totally freaked out" clashes with the essay\'s formal, informative tone and overstates the engineers\' reaction.',
        'The phrase "super nervous" is casual slang that does not match the measured, informative voice of the rest of the essay.',
        'The hedge "kind of" is conversational and vague. It weakens the point that the engineers seriously questioned the design.',
        'The verb "doubted" states the engineers\' concern precisely and in a tone consistent with the rest of the essay, and it is also the most concise choice.',
      ],
      skill: 'KLA',
      marker: 8,
      difficulty: 'easy',
    },
    {
      id: 'act-fl2-e-02-q9',
      question: STEM,
      options: [
        'NO CHANGE',
        'son, Edgar Kaufmann Jr., gave',
        'son Edgar Kaufmann Jr., gave',
        'son: Edgar Kaufmann Jr., gave',
      ],
      correctIndex: 1,
      explanation:
        'The name "Edgar Kaufmann Jr." renames "son," and because the Kaufmanns had one son, this appositive is nonessential and needs a comma on each side.',
      optionExplanations: [
        'The appositive "Edgar Kaufmann Jr." opens with a comma but never closes, so the name runs straight into the verb "gave." A nonessential appositive needs a comma on both sides.',
        'A pair of commas sets off the appositive "Edgar Kaufmann Jr.," which renames the son, and the main sentence "The Kaufmanns\' son gave the house…" reads clearly around it.',
        'This version places a comma between the subject and the verb "gave" without an opening comma after "son," so it wrongly separates the subject from its verb.',
        'A colon must follow a complete independent clause, but "The Kaufmanns\' son" is only a noun phrase, so the colon is misused here.',
      ],
      skill: 'CSE',
      marker: 9,
      difficulty: 'medium',
    },
    {
      id: 'act-fl2-e-02-q10',
      question:
        "The writer wants to conclude the essay with a sentence that returns to the Kaufmanns' original wish, described in the first paragraph. Which choice best accomplishes this goal?",
      options: [
        'The Kaufmanns never got the view of the falls they had asked for, but they got the sound of the water beneath their floors.',
        'Wright went on to design the Guggenheim Museum in New York City, which opened in 1959.',
        'The Conservancy also protects forests and streams in many parts of western Pennsylvania.',
        'The sandstone for the walls had come from a quarry on the Kaufmanns\' own land.',
      ],
      correctIndex: 0,
      explanation:
        'The first paragraph says the family wanted a house facing the falls so they could admire the view; this sentence returns to that wish and contrasts it with what Wright gave them.',
      optionExplanations: [
        'The family originally wanted a view of the falls. This sentence returns to that wish and shows what Wright gave them instead, tying the ending back to the opening.',
        'This sentence turns to a different Wright building. It does not mention the Kaufmanns or their wish to look at the waterfall.',
        'The Conservancy\'s other land is unrelated to the Kaufmanns\' original hope for a view of the falls, so the sentence does not return to the opening.',
        'This sentence repeats a detail about the walls from the third paragraph. It connects to the building materials, not to the family\'s wish described in the first paragraph.',
      ],
      skill: 'POW',
      marker: 10,
      difficulty: 'medium',
    },
  ],
}

const PASSAGE_3: ActFLPassage = {
  id: 'act-fl2-e-03',
  title: 'Origami in Orbit',
  kind: 'informative',
  text: `When it launched, the James Webb Space Telescope carried the largest mirror ever sent into space. Its primary mirror measures about 6.5 meters (21 feet) across, nearly three times the width of the mirror on the Hubble Space Telescope. That size lets Webb gather the faint infrared light of some of the earliest galaxies. It also {{1:created a problem, no rocket}} had a cargo compartment wide enough to carry a mirror that big.

{{2:Engineers solved the problem with an idea borrowed from origami.}} Webb's mirror is a honeycomb of eighteen hexagonal segments. Each segment is made of beryllium, {{3:a light strong, metal}}, and coated with a thin layer of gold, which reflects infrared light especially well. The two outer sections of the honeycomb, three segments each, are hinged so that they can fold backward like the leaves of a drop-leaf table. {{4:Folded the telescope fit}} inside the nose cone of the Ariane 5 rocket that launched it on December 25, 2021.

The unfolding began soon after launch and took about two weeks, while Webb {{5:wandered}} toward its destination nearly a million miles from Earth. First, the sunshield spread open. Its five layers of thin film, {{6:each roughly the size of a tennis court, they shade}} the instruments from the Sun's heat. Next, three struts swung out to hold the smaller secondary mirror in front of the primary one. Finally, on January 8, 2022, the second of the two folded wings swung forward and locked into place. {{7}}

Unfolding the mirror, {{8:however,}} was only the beginning. The eighteen segments now had to work together as one smooth surface, and at first they did not. When engineers pointed the telescope at a single bright star, the camera showed eighteen separate, blurry images of it, one from each segment. Behind each segment are seven small motors, called actuators, that can nudge it in steps thousands of times thinner than a human hair. Over the next several months, the team used those motors to shift the {{9:segments positions}} bit by bit until the eighteen images merged into one sharp point of light.

In July 2022, NASA released Webb's first full-color images. One showed a patch of sky crowded with thousands of galaxies, some so distant that their light had been traveling for billions of years. Catching light that faint takes an enormous mirror, which is exactly what the engineers had folded up and sent into space.`,
  questions: [
    {
      id: 'act-fl2-e-03-q1',
      question: STEM,
      options: [
        'NO CHANGE',
        'created a problem: no rocket',
        'created a problem no rocket',
        'created a problem, which no rocket',
      ],
      correctIndex: 1,
      explanation:
        'The words after "problem" explain what the problem was, and a colon after an independent clause is the standard way to introduce such an explanation.',
      optionExplanations: [
        'Both "It also created a problem" and "no rocket had a cargo compartment…" are independent clauses, and joining them with only a comma creates a comma splice.',
        'The first clause is complete, and the second explains exactly what the problem was. A colon is the right mark to introduce an explanation that follows an independent clause.',
        'With no punctuation at all, two independent clauses run together into a fused sentence, and the reader cannot easily tell where the problem is identified.',
        'The pronoun "which" makes the second part a relative clause, but "which no rocket had a cargo compartment" makes no sense, since "which" fills no role in that clause.',
      ],
      skill: 'CSE',
      marker: 1,
      difficulty: 'medium',
    },
    {
      id: 'act-fl2-e-03-q2',
      question:
        'Given that all the choices are true, which one provides the most effective transition from the preceding paragraph to this one?',
      options: [
        'NO CHANGE',
        'Origami is the Japanese art of folding paper into shapes.',
        "Engineers tested Webb's instruments for years in cold chambers.",
        'The Ariane 5 rocket was developed for the European Space Agency.',
      ],
      correctIndex: 0,
      explanation:
        'The preceding paragraph ends with a problem, and this paragraph describes the folding design. The sentence about solving the problem with an idea from origami links the two.',
      optionExplanations: [
        'The previous paragraph ends by stating a problem, and this sentence announces its solution, a folding design. It also sets up the hinged, folding segments the paragraph goes on to describe.',
        'Defining origami ignores the problem raised at the end of the previous paragraph. The sentence never says how folding relates to the telescope\'s mirror.',
        'Testing the instruments in cold chambers has nothing to do with fitting a large mirror inside a rocket, so this sentence does not connect the two paragraphs.',
        'Who developed the rocket is a side fact. It does not explain how engineers overcame the size problem, which is what this paragraph is about.',
      ],
      skill: 'POW',
      marker: 2,
      difficulty: 'easy',
    },
    {
      id: 'act-fl2-e-03-q3',
      question: STEM,
      options: ['NO CHANGE', 'a light, strong, metal', 'a light, strong metal', 'a, light strong metal'],
      correctIndex: 2,
      explanation:
        '"Light" and "strong" are coordinate adjectives that each describe "metal" equally, so a comma belongs between them, but no comma belongs between the last adjective and the noun.',
      optionExplanations: [
        'The comma is placed between "strong" and the noun it modifies, which is never correct, while the comma needed between the two coordinate adjectives is missing.',
        'The comma between "light" and "strong" is right, but the comma after "strong" wrongly separates the final adjective from the noun "metal."',
        'The adjectives "light" and "strong" each modify "metal" independently and could be joined by "and," so one comma between them, and none before the noun, is correct.',
        'A comma after the article "a" splits it from the words it introduces, and the needed comma between the two adjectives is missing.',
      ],
      skill: 'CSE',
      marker: 3,
      difficulty: 'medium',
    },
    {
      id: 'act-fl2-e-03-q4',
      question: STEM,
      options: ['NO CHANGE', 'Folded, the telescope fit', 'Folded, the telescope, fit', 'Folded the telescope, fit'],
      correctIndex: 1,
      explanation:
        'The introductory modifier "Folded" describes the telescope and should be followed by a comma so the reader does not misread it as a verb acting on "the telescope."',
      optionExplanations: [
        'Without a comma, "Folded the telescope" reads at first as though someone folded the telescope, so the reader stumbles before reaching the real verb, "fit."',
        'A comma after the introductory word "Folded" separates the modifier from the subject it describes, "the telescope," which then leads directly to its verb, "fit."',
        'The comma after "telescope" separates the subject from its verb, "fit," which is never correct when nothing interrupts them.',
        'This version omits the comma after the introductory modifier and adds one between the subject "telescope" and its verb "fit," getting both commas wrong.',
      ],
      skill: 'CSE',
      marker: 4,
      difficulty: 'easy',
    },
    {
      id: 'act-fl2-e-03-q5',
      question: STEM,
      options: ['NO CHANGE', 'strolled', 'roamed', 'traveled'],
      correctIndex: 3,
      explanation:
        'Webb was flying along a planned route to a specific destination, and "traveled" describes that motion accurately without suggesting aimlessness or leisure.',
      optionExplanations: [
        'To wander is to move without a fixed course, but Webb was heading along a planned path to a specific destination, so the word gives the wrong idea.',
        'To stroll is to walk in a slow, relaxed way. The word is inaccurate for a spacecraft and clashes with the essay\'s precise, informative tone.',
        'To roam is to move about with no set destination, which contradicts the sentence\'s statement that Webb was headed toward its destination.',
        'The neutral verb "traveled" accurately describes a spacecraft moving toward a planned destination and fits the essay\'s straightforward informative tone.',
      ],
      skill: 'KLA',
      marker: 5,
      difficulty: 'easy',
    },
    {
      id: 'act-fl2-e-03-q6',
      question: STEM,
      options: [
        'NO CHANGE',
        'each roughly the size of a tennis court, shade',
        'each roughly the size of a tennis court shade',
        'each roughly the size of a tennis court; shade',
      ],
      correctIndex: 1,
      explanation:
        'The subject of the sentence is "Its five layers of thin film," so adding "they" gives the verb a second subject; the verb "shade" should follow the closing comma directly.',
      optionExplanations: [
        'The sentence already has a subject, "Its five layers of thin film," so adding "they" creates a needless second subject and leaves the opening noun phrase without its own verb.',
        'Paired commas set off the descriptive phrase about the tennis court, and the verb "shade" follows directly, giving the subject "layers" its verb.',
        'Without a comma after "court," the phrase that began with a comma never closes, and "court shade" reads as though a tennis court were doing the shading.',
        'A semicolon must separate two independent clauses, but here it splits the subject "layers" from its verb "shade," leaving two fragments.',
      ],
      skill: 'CSE',
      marker: 6,
      difficulty: 'medium',
    },
    {
      id: 'act-fl2-e-03-q7',
      question:
        "At this point, the writer is considering adding the following sentence:\n\n> The rocket's launch site, in French Guiana, lies close to the equator.\n\nShould the writer make this addition here?",
      options: [
        'Yes, because it explains why the unfolding took about two weeks.',
        "Yes, because it tells readers where the telescope's journey began.",
        'No, because it breaks the step-by-step account of the unfolding.',
        'No, because it contradicts the claim that Webb traveled nearly a million miles.',
      ],
      correctIndex: 2,
      explanation:
        'The paragraph walks step by step through the unfolding, ending with the last wing locking into place. A fact about the launch site has no place in that sequence.',
      optionExplanations: [
        'The location of the launch site has nothing to do with how long the unfolding took. The sentence offers no explanation of the two-week schedule.',
        'Although the sentence does say where the launch happened, the paragraph is about the order in which the telescope unfolded, so this detail does not belong here.',
        'The paragraph is organized as a sequence: first, next, finally. Ending it with a fact about the launch site breaks that focus on the unfolding steps.',
        'Where the rocket lifted off does not conflict with the distance Webb traveled afterward. The real problem with the sentence is relevance, not contradiction.',
      ],
      skill: 'POW',
      marker: 7,
      difficulty: 'easy',
    },
    {
      id: 'act-fl2-e-03-q8',
      question: STEM,
      options: ['NO CHANGE', 'for example,', 'therefore,', 'similarly,'],
      correctIndex: 0,
      explanation:
        'The previous paragraph ends with the mirror fully unfolded, as if the work were done; "however" signals the contrast that this was only the beginning.',
      optionExplanations: [
        'The previous paragraph ends with the mirror locked into place, which sounds like the end of the job. "However" signals the contrast: the hardest work was still ahead.',
        'The phrase "for example" introduces an illustration, but the statement that unfolding was only the beginning does not illustrate anything in the previous paragraph.',
        'The word "therefore" signals a result, but the mirror locking into place does not cause it to be only the beginning. The relationship is contrast, not cause.',
        'The word "similarly" signals a likeness, but this sentence turns away from the idea that the job was finished, so a word of comparison is illogical.',
      ],
      skill: 'POW',
      marker: 8,
      difficulty: 'medium',
    },
    {
      id: 'act-fl2-e-03-q9',
      question: STEM,
      options: ['NO CHANGE', "segment's positions", "segments' positions", "segments position's"],
      correctIndex: 2,
      explanation:
        'The positions belong to all eighteen segments, so the plural noun "segments" needs a possessive apostrophe after the s.',
      optionExplanations: [
        'Without an apostrophe, "segments" is simply plural and cannot show that the positions belong to the segments, so the possessive is missing.',
        'The singular possessive "segment\'s" refers to just one segment, but the team adjusted all eighteen, so the plural possessive is required.',
        'The positions belong to many segments, so the plural "segments" takes an apostrophe after the s to form the plural possessive "segments\' positions."',
        'This version puts the apostrophe on "positions," which owns nothing, and leaves "segments" without the possessive it needs.',
      ],
      skill: 'CSE',
      marker: 9,
      difficulty: 'easy',
    },
    {
      id: 'act-fl2-e-03-q10',
      question:
        "Suppose the writer's primary purpose had been to explain what Webb's images have revealed about the earliest galaxies. Would this essay accomplish that purpose?",
      options: [
        'Yes, because it describes a first image crowded with thousands of galaxies.',
        'Yes, because it explains why infrared light reveals the earliest galaxies.',
        "No, because it says Webb's images have not yet shown any distant galaxies.",
        'No, because it focuses on how the mirror was folded, unfolded, and aligned.',
      ],
      correctIndex: 3,
      explanation:
        'Almost all of the essay concerns the engineering of the folding mirror; the images appear only briefly at the end, and nothing is said about what they revealed.',
      optionExplanations: [
        'The first image is mentioned in just one sentence near the end. The essay never says what the image revealed about early galaxies, so one mention cannot fulfill that purpose.',
        'The essay notes that Webb gathers infrared light but never explains why that light reveals early galaxies or what was learned from it.',
        'The final paragraph says one image showed thousands of galaxies, some extremely distant, so this choice misstates what the essay says.',
        'The essay\'s paragraphs cover the size problem, the folding design, the unfolding sequence, and the alignment of the segments. It is about engineering, not about discoveries.',
      ],
      skill: 'POW',
      difficulty: 'medium',
    },
  ],
}

const PASSAGE_4: ActFLPassage = {
  id: 'act-fl2-e-04',
  title: 'Let Teenagers Sleep',
  kind: 'argumentative',
  text: `At many American high schools, the first bell rings before 7:30 a.m. To catch the bus, some students must leave home by 6:30, which in winter often means walking to the stop in the dark. Most adults would call that an early start. For a teenager, however, it is closer to the middle of the night. {{1:Some schools have already tried starting later.}}

The reason is biological. During adolescence, the body's internal clock shifts. The brain begins releasing melatonin, a hormone that helps signal that it is time to sleep, later in the evening than {{2:they}} did in childhood. As a result, many teenagers have trouble falling asleep before about 11:00 p.m. Sleep experts recommend that teenagers get eight to ten hours of sleep a night. {{3:Many teenagers also stay up late using their phones.}}

Losing that sleep has consequences. Tired students have more trouble paying attention and remembering what they learn, and drowsy teenage drivers are more likely to crash. {{4:Despite this,}} the American Academy of Pediatrics recommended in 2014 that middle and high schools start no earlier than 8:30 a.m.

Districts that have followed this advice have seen results. In 2016, Seattle's public high schools moved their start time from 7:50 to 8:45 a.m. Researchers at the University of Washington {{5:dug into the numbers and figured out}} that students then slept a median of 34 minutes longer on school nights. {{6}} The change also had a positive {{7:affect}} on grades, and attendance improved at one of the two schools the researchers studied.

Critics argue that later start times {{8:would of complicated}} bus routes, after-school jobs, and sports practices. These concerns are real, but they are scheduling problems, {{9:which}} can be solved. In 2019, California became the first state to require that most public high schools begin no earlier than 8:30 a.m. {{10:Several other states have considered similar laws.}}`,
  questions: [
    {
      id: 'act-fl2-e-04-q1',
      question: 'Which choice most effectively states the main claim that the rest of the essay supports?',
      options: [
        'NO CHANGE',
        'High schools should start later, and the science of teenage sleep shows why.',
        'Teenagers have complained about early mornings for generations.',
        'School bus routes are usually planned months in advance.',
      ],
      correctIndex: 1,
      explanation:
        'The essay goes on to give biological reasons, consequences, evidence from Seattle, and a reply to critics, all in support of later start times. Only this choice states that position.',
      optionExplanations: [
        'This sentence reports a fact but takes no position. The essay argues that schools should start later, and this choice never states that claim.',
        'The essay defends later start times with evidence about teenage biology and a real district\'s results. This sentence states that claim and previews the scientific support that follows.',
        'Teenagers\' complaints are not the essay\'s focus. The essay relies on research about sleep, not on how long students have grumbled about mornings.',
        'Bus planning comes up only briefly, as a critic\'s concern near the end. This sentence states no claim and points the reader toward a minor detail.',
      ],
      skill: 'POW',
      marker: 1,
      difficulty: 'medium',
    },
    {
      id: 'act-fl2-e-04-q2',
      question: STEM,
      options: ['NO CHANGE', 'one', 'we', 'it'],
      correctIndex: 3,
      explanation:
        'The pronoun refers back to "the brain," a singular noun, so the singular pronoun "it" is required.',
      optionExplanations: [
        'The plural pronoun "they" has no plural noun to refer to. Its antecedent is "the brain," which is singular, so the pronoun does not agree.',
        'The pronoun "one" refers to a person in general, not to the brain, so it fails to refer clearly to the noun the sentence is comparing.',
        'The pronoun "we" shifts suddenly to the first person and refers to people rather than to the brain, which confuses the comparison.',
        'The singular pronoun "it" agrees with its antecedent, "the brain," so the sentence clearly compares when the brain releases melatonin now with when it did so in childhood.',
      ],
      skill: 'CSE',
      marker: 2,
      difficulty: 'easy',
    },
    {
      id: 'act-fl2-e-04-q3',
      question:
        "Given that all the choices are true, which one most effectively supports the writer's point that early start times cut into teenagers' sleep?",
      options: [
        'NO CHANGE',
        'A student who falls asleep at 11:00 and must wake at 6:00 gets only seven.',
        'Adults generally need somewhat less sleep than teenagers do.',
        'Some teenagers find it easier to fall asleep in a cool, dark, quiet bedroom.',
      ],
      correctIndex: 1,
      explanation:
        'Combining the 11:00 p.m. bedtime with an early wake-up shows a student getting seven hours, short of the recommended eight to ten, which is the writer\'s point.',
      optionExplanations: [
        'Blaming phones suggests that teenagers lose sleep by choice, which weakens rather than supports the writer\'s claim that early start times are the problem.',
        'The arithmetic connects the 11:00 bedtime from the paragraph with an early wake-up, showing seven hours of sleep, below the recommended eight to ten. It directly supports the writer\'s point.',
        'Comparing adults with teenagers says nothing about how early school times limit a teenager\'s sleep, so it does not support the writer\'s point.',
        'Advice about a cool, dark, quiet bedroom concerns sleep quality at home, not the way early start times shorten the night. It does not support the point.',
      ],
      skill: 'POW',
      marker: 3,
      difficulty: 'easy',
    },
    {
      id: 'act-fl2-e-04-q4',
      question: STEM,
      options: ['NO CHANGE', 'Before then,', 'For these reasons,', 'On the other hand,'],
      correctIndex: 2,
      explanation:
        'The consequences listed in the previous sentence are the reasons behind the 2014 recommendation, so a transition showing cause and effect is needed.',
      optionExplanations: [
        'The phrase "Despite this" signals that the recommendation went against the evidence, but the doctors recommended later start times because of these harms, not in spite of them.',
        'The phrase "Before then" refers to a time that the paragraph never establishes, so it leaves the reader unsure what earlier moment is meant.',
        'The harms just described, inattention, poor memory, and crashes, are the reasons the doctors recommended later start times. "For these reasons" states that cause-and-effect link.',
        'The phrase "On the other hand" introduces an opposing point, but the recommendation agrees with the evidence about tired students and drowsy drivers rather than opposing it.',
      ],
      skill: 'POW',
      marker: 4,
      difficulty: 'easy',
    },
    {
      id: 'act-fl2-e-04-q5',
      question: STEM,
      options: ['NO CHANGE', 'kind of worked out', 'went and discovered', 'found'],
      correctIndex: 3,
      explanation:
        'The verb "found" reports a research result in a clear, formal way that suits the essay\'s use of evidence.',
      optionExplanations: [
        'The phrase "dug into the numbers and figured out" is casual and wordy. It undercuts the serious tone the writer uses to present research evidence.',
        'The hedge "kind of" makes the result sound uncertain and conversational, which weakens a finding the writer is using as evidence.',
        'The phrase "went and discovered" is informal and adds an unneeded verb, so it is wordier and less polished than the essay\'s tone requires.',
        'The verb "found" is the standard, precise way to report what researchers learned. It is concise and matches the formal tone of an argument built on evidence.',
      ],
      skill: 'KLA',
      marker: 5,
      difficulty: 'easy',
    },
    {
      id: 'act-fl2-e-04-q6',
      question:
        'At this point, the writer is considering adding the following sentence:\n\n> The researchers measured sleep with wrist monitors that the students wore for two weeks.\n\nShould the writer make this addition here?',
      options: [
        'Yes, because it shows how the sleep figures were gathered, which makes the evidence more convincing.',
        "Yes, because it explains why the students' grades improved after the change.",
        'No, because it repeats the information about the 34 additional minutes of sleep.',
        'No, because it shifts the focus from start times to the technology of wrist monitors.',
      ],
      correctIndex: 0,
      explanation:
        'The sentence follows the 34-minute finding and tells how that number was measured, strengthening the evidence that the writer\'s argument relies on.',
      optionExplanations: [
        'Right after the 34-minute finding, a note that sleep was measured by monitors rather than guessed shows the number is reliable. That strengthens the evidence the argument depends on.',
        'The sentence is about how sleep was measured. It says nothing about grades, which are mentioned only in the following sentence.',
        'The sentence gives new information, the method used to measure sleep. It does not restate the size of the increase.',
        'One sentence about the measuring method stays tied to the Seattle evidence and does not turn the paragraph into a discussion of technology.',
      ],
      skill: 'POW',
      marker: 6,
      difficulty: 'hard',
    },
    {
      id: 'act-fl2-e-04-q7',
      question: STEM,
      options: ['NO CHANGE', 'affection', 'effect', 'effects'],
      correctIndex: 2,
      explanation:
        'After the article "a" and the adjective "positive," a singular noun meaning "result" is needed, and that noun is "effect."',
      optionExplanations: [
        'The word "affect" is usually a verb meaning "to influence." The sentence needs a noun meaning "result," which is "effect."',
        'The noun "affection" means fondness or warm feeling. A change in start times cannot have a positive fondness on grades, so the word makes no sense.',
        'The noun "effect" means a result, and its singular form matches the article "a." The change had a positive result on grades.',
        'The plural "effects" does not agree with the singular article "a" in "a positive," so this phrasing is ungrammatical.',
      ],
      skill: 'CSE',
      marker: 7,
      difficulty: 'easy',
    },
    {
      id: 'act-fl2-e-04-q8',
      question: STEM,
      options: ['NO CHANGE', 'would complicate', 'would complicating', 'complicating'],
      correctIndex: 1,
      explanation:
        'The helping verb "would" must be followed by the base form of a verb, so "would complicate" is correct; "would of" is a misspelling of the spoken contraction "would\'ve."',
      optionExplanations: [
        'The phrase "would of" is a nonstandard spelling of how "would\'ve" sounds. The word "of" is a preposition and cannot serve as a helping verb.',
        'The helping verb "would" followed by the base form "complicate" states the critics\' prediction correctly and keeps the present-tense frame of "argue."',
        'A helping verb like "would" must be followed by the base form of the verb, not the "-ing" form, so "would complicating" is ungrammatical.',
        'Without a helping verb, "complicating" cannot serve as the main verb of the clause that begins "that later start times," leaving that clause incomplete.',
      ],
      skill: 'CSE',
      marker: 8,
      difficulty: 'easy',
    },
    {
      id: 'act-fl2-e-04-q9',
      question: STEM,
      options: [
        'NO CHANGE',
        'and these are the kinds of scheduling problems that',
        'and problems of that kind involving schedules',
        'which, being problems of scheduling,',
      ],
      correctIndex: 0,
      explanation:
        'The relative pronoun "which" refers back to "scheduling problems" and leads straight to the point that they can be solved, without repeating any words.',
      optionExplanations: [
        'The single word "which" refers to "scheduling problems" and finishes the thought, "can be solved," without repetition. It is the most concise version.',
        'This phrasing repeats "scheduling problems," which appears just before it, and adds "these are the kinds of," so it is wordy and redundant.',
        'This version restates the idea of scheduling problems a second time and uses a roundabout phrase, "problems of that kind," that adds nothing.',
        'The phrase "being problems of scheduling" repeats what the sentence has just said, so it is redundant and makes the sentence clumsy.',
      ],
      skill: 'KLA',
      marker: 9,
      difficulty: 'easy',
    },
    {
      id: 'act-fl2-e-04-q10',
      question:
        "Given that all the choices are true, which one most effectively concludes the essay by connecting California's example to the writer's argument?",
      options: [
        'NO CHANGE',
        'California has more public school students than any other state in the nation.',
        'Many California students also play after-school sports.',
        'If an entire state can rearrange its bus schedules, a single district can too.',
      ],
      correctIndex: 3,
      explanation:
        'The writer has just argued that scheduling problems can be solved; this sentence uses California as proof and applies the lesson to individual districts, ending the argument decisively.',
      optionExplanations: [
        'Mentioning that other states have considered laws adds a related fact but does not connect California\'s example to the claim that scheduling problems can be solved.',
        'California\'s size is a statistic that the writer never uses. On its own, it does not tie the state\'s law to the argument for later start times.',
        'Mentioning sports echoes a critic\'s concern instead of answering it, so this sentence weakens the conclusion rather than reinforcing the writer\'s argument.',
        'The writer has argued that scheduling problems can be solved. This sentence uses California as proof and applies the lesson to a single district, closing the argument.',
      ],
      skill: 'POW',
      marker: 10,
      difficulty: 'medium',
    },
  ],
}

const PASSAGE_5: ActFLPassage = {
  id: 'act-fl2-e-05',
  title: 'From Gourd to Bluegrass',
  kind: 'informative',
  text: `The banjo is often thought of as the sound of the Appalachian Mountains, but its story begins in West Africa and the Caribbean. Enslaved Africans and their descendants built the first banjos from materials at hand: half of a dried gourd, an animal skin stretched across the opening, and {{1:they strung a wooden neck with gut}}. These instruments {{2:were light enough to carry easily}}, and European visitors to the Caribbean described them as early as the late 1600s{{3:, near the end of the seventeenth century}}.

The instrument spread to the mainland colonies, where it was known by several names, including "banjar." In the 1780s, Thomas Jefferson wrote that the enslaved people of Virginia played the banjar, {{4:an instrument they had "brought hither from Africa."}}

In the 1840s, the banjo became the centerpiece of minstrel shows, a popular form of entertainment in which white performers in blackface mocked Black Americans through racist caricature. The shows made the banjo famous across the country, and by the late 1800s {{5:it's}} popularity had led factories to produce it in large numbers. Along the way, makers had replaced the {{6:gourd, with}} a round wooden rim and added metal parts that made the instrument {{7:more louder and more brighter}}.

{{8:In the twentieth century, the banjo found new homes.}} Jazz bands of the 1920s used a four-string version, the tenor banjo, to keep a steady rhythm. Then, in 1945, a young North Carolina musician named Earl Scruggs joined Bill Monroe's band, the Blue Grass Boys. Scruggs picked the five-string banjo with three fingers in fast, rolling patterns, and his style became the signature sound of the music now called bluegrass.

Today, many musicians are reclaiming the banjo's African American roots. The Carolina Chocolate Drops, a Black string band formed in North Carolina in 2005, {{9:winning}} a Grammy Award in 2011 for an album of old-time string music. {{10}}`,
  questions: [
    {
      id: 'act-fl2-e-05-q1',
      question: STEM,
      options: [
        'NO CHANGE',
        'they used a wooden neck strung with gut',
        'a wooden neck strung with gut',
        'stringing a wooden neck with gut',
      ],
      correctIndex: 2,
      explanation:
        'The list after the colon names materials as noun phrases: "half of a dried gourd" and "an animal skin stretched…," so the third item must also be a noun phrase: "a wooden neck strung with gut."',
      optionExplanations: [
        'The first two items in the list are noun phrases naming materials, but this item is a full clause with its own subject and verb, "they strung," so the list is not parallel.',
        'Adding "they used" still turns the last item into a clause with a subject and verb, which breaks the pattern set by the two noun phrases before it.',
        'Like "an animal skin stretched across the opening," this item is a noun followed by a describing phrase, so all three items in the list are parallel noun phrases.',
        'The "-ing" phrase describes an action rather than naming a material, so it does not match the two noun phrases earlier in the list.',
      ],
      skill: 'CSE',
      marker: 1,
      difficulty: 'medium',
    },
    {
      id: 'act-fl2-e-05-q2',
      question:
        'Given that all the choices are true, which one most clearly supports the claim in the first sentence that the banjo\'s story begins in West Africa?',
      options: [
        'NO CHANGE',
        'closely resembled lutes long played in West Africa',
        'were often decorated with carved or painted designs',
        'could be built in a single afternoon',
      ],
      correctIndex: 1,
      explanation:
        'Only the resemblance to West African lutes links the early banjos to West Africa, backing up the essay\'s opening claim about where the instrument\'s story begins.',
      optionExplanations: [
        'Being easy to carry is a practical feature of the instrument. It gives no evidence that the banjo\'s origins lie in West Africa.',
        'A close resemblance to lutes that had long been played in West Africa connects the first banjos to that region, directly supporting the claim in the opening sentence.',
        'Carved or painted designs describe how some instruments looked but do not connect them to West Africa, so this detail does not support the opening claim.',
        'How quickly a banjo could be made says nothing about where the instrument came from, so it does not support the claim about West African origins.',
      ],
      skill: 'POW',
      marker: 2,
      difficulty: 'easy',
    },
    {
      id: 'act-fl2-e-05-q3',
      question: STEM,
      options: [
        'NO CHANGE',
        ', during the seventeenth century',
        ', a very long time ago',
        'DELETE the underlined portion.',
      ],
      correctIndex: 3,
      explanation:
        'The late 1600s are the end of the seventeenth century, so any phrase restating the time period is redundant; the sentence is complete without it.',
      optionExplanations: [
        'The "late 1600s" and "the end of the seventeenth century" are the same period, so the underlined phrase simply repeats the date in different words.',
        'The 1600s are the seventeenth century, so this phrase still repeats the date that the sentence has just given and adds nothing new.',
        'This vague phrase adds no information beyond the specific date already given, and its casual wording does not suit the essay\'s informative tone.',
        'The phrase "the late 1600s" already tells the reader when the instruments were described, so deleting the restatement makes the sentence concise without losing meaning.',
      ],
      skill: 'KLA',
      marker: 3,
      difficulty: 'easy',
    },
    {
      id: 'act-fl2-e-05-q4',
      question:
        'If the writer were to delete the underlined portion (ending the sentence with a period after "banjar"), the essay would primarily lose:',
      options: [
        "an eighteenth-century source's confirmation of the instrument's African origins.",
        'an explanation of how the banjar differed from later banjos.',
        'a description of the materials used to build the banjar.',
        'evidence that Jefferson himself learned to play the banjar.',
      ],
      correctIndex: 0,
      explanation:
        'The quoted phrase records Jefferson saying that the instrument was brought from Africa, a firsthand eighteenth-century confirmation of the origins the essay describes.',
      optionExplanations: [
        'Jefferson, writing in the 1780s, states that the instrument was "brought hither from Africa." Without that phrase, the essay loses a period source supporting its claim about the banjo\'s African roots.',
        'The underlined portion never compares the banjar with later banjos. Changes to the instrument are described in the next paragraph, not here.',
        'The materials, a gourd, an animal skin, and a wooden neck, are described in the first paragraph. The underlined portion names no materials.',
        'The passage says only that Jefferson wrote about who played the banjar. Nothing suggests that he played it himself.',
      ],
      skill: 'POW',
      marker: 4,
      difficulty: 'medium',
    },
    {
      id: 'act-fl2-e-05-q5',
      question: STEM,
      options: ['NO CHANGE', 'its', "its'", 'it is'],
      correctIndex: 1,
      explanation:
        'The popularity belongs to the banjo, so the possessive pronoun "its," which never takes an apostrophe, is required.',
      optionExplanations: [
        'The contraction "it\'s" means "it is" or "it has," so the sentence would read "it is popularity had led factories," which makes no sense. A possessive is needed.',
        'The possessive pronoun "its" shows that the popularity belongs to the banjo. Like "his" and "hers," it takes no apostrophe.',
        'The form "its\'" does not exist in standard English. The possessive of "it" is simply "its," with no apostrophe.',
        'Writing out "it is" produces "it is popularity had led factories," which is ungrammatical. The sentence needs a possessive, not a subject and verb.',
      ],
      skill: 'CSE',
      marker: 5,
      difficulty: 'easy',
    },
    {
      id: 'act-fl2-e-05-q6',
      question: STEM,
      options: ['NO CHANGE', 'gourd; with', 'gourd with', 'gourd: with'],
      correctIndex: 2,
      explanation:
        'The phrase "with a round wooden rim" completes the verb "replaced the gourd," so no punctuation should separate them.',
      optionExplanations: [
        'The idiom "replaced the gourd with a rim" is a single unit. The comma wrongly separates the direct object from the phrase that completes its meaning.',
        'A semicolon must join two independent clauses, but "with a round wooden rim" is only a prepositional phrase, so the semicolon creates a fragment.',
        'With no punctuation, "replaced the gourd with a round wooden rim" reads as one connected action, which is exactly what the sentence describes.',
        'A colon introduces an explanation or list after a complete clause. Here it interrupts the phrase "replaced the gourd with," so it is misused.',
      ],
      skill: 'CSE',
      marker: 6,
      difficulty: 'easy',
    },
    {
      id: 'act-fl2-e-05-q7',
      question: STEM,
      options: ['NO CHANGE', 'more loud and brighter', 'louder and brighter', 'the loudest and brightest'],
      correctIndex: 2,
      explanation:
        'Short adjectives such as "loud" and "bright" form the comparative with "-er," so adding "more" creates a double comparative; "louder and brighter" is correct.',
      optionExplanations: [
        'The words "louder" and "brighter" are already comparatives, so adding "more" to each creates a double comparative, which is nonstandard.',
        'For a one-syllable adjective like "loud," the standard comparative is "louder," not "more loud," and mixing the two forms also makes the pair unbalanced.',
        'The comparatives "louder" and "brighter" correctly show that the metal parts made the banjo louder and brighter than it had been before.',
        'The superlative forms compare three or more things, but the sentence compares the banjo only with its own earlier version, so the comparative is needed.',
      ],
      skill: 'CSE',
      marker: 7,
      difficulty: 'easy',
    },
    {
      id: 'act-fl2-e-05-q8',
      question:
        'Given that all the choices are true, which one most effectively introduces the main topic of this paragraph?',
      options: [
        'NO CHANGE',
        'Minstrel shows lost much of their popularity in the early 1900s.',
        'Many people consider the guitar easier to learn than the banjo.',
        'Banjos are still manufactured in factories today.',
      ],
      correctIndex: 0,
      explanation:
        'The paragraph describes two new musical settings for the banjo, 1920s jazz and bluegrass, so a sentence about the banjo finding "new homes" in the twentieth century introduces it best.',
      optionExplanations: [
        'The paragraph covers the banjo\'s roles in 1920s jazz and in bluegrass. Saying it "found new homes" in the twentieth century introduces exactly those new settings.',
        'This sentence looks back at minstrel shows instead of forward to jazz and bluegrass, so it does not introduce what the paragraph is about.',
        'The guitar is never discussed in the paragraph, so a comparison of the two instruments does not introduce the paragraph\'s topic.',
        'Modern manufacturing is not the subject of the paragraph, which describes the banjo\'s place in twentieth-century jazz and bluegrass.',
      ],
      skill: 'POW',
      marker: 8,
      difficulty: 'easy',
    },
    {
      id: 'act-fl2-e-05-q9',
      question: STEM,
      options: ['NO CHANGE', 'having won', 'and winning', 'won'],
      correctIndex: 3,
      explanation:
        'The subject "The Carolina Chocolate Drops" needs a main verb, and the past-tense verb "won" supplies one.',
      optionExplanations: [
        'An "-ing" word cannot serve as a main verb by itself, so "winning" leaves the subject "The Carolina Chocolate Drops" without a verb and the sentence is a fragment.',
        'The phrase "having won" is a participle, not a main verb, so the sentence still lacks a verb for its subject and remains a fragment.',
        'Adding "and" does not help, because there is no earlier verb for "winning" to join. The sentence still has no main verb.',
        'The past-tense verb "won" gives the subject a main verb, completing the sentence and reporting the 2011 award as a finished event.',
      ],
      skill: 'CSE',
      marker: 9,
      difficulty: 'medium',
    },
    {
      id: 'act-fl2-e-05-q10',
      question:
        "Which choice would most effectively conclude the essay by returning to an idea from the essay's first paragraph?",
      options: [
        'Bluegrass festivals now take place in many countries around the world.',
        'The instrument so often heard as the sound of Appalachia is again being heard as one with roots in Africa.',
        'Some players prefer the tenor banjo, while others favor the five-string.',
        'The Grammy Awards were first presented in 1959.',
      ],
      correctIndex: 1,
      explanation:
        'The essay opens by noting that the banjo is thought of as Appalachian though its story begins in West Africa; this sentence echoes that contrast and ties it to the musicians reclaiming those roots.',
      optionExplanations: [
        'Bluegrass festivals relate to the fourth paragraph, not the first. The sentence does not return to the contrast between Appalachia and Africa that opens the essay.',
        'The first paragraph contrasts the banjo\'s Appalachian image with its African origins. This sentence echoes that contrast and links it to musicians reclaiming those roots today.',
        'The choice between banjo types connects to the fourth paragraph\'s mention of the tenor banjo, not to the essay\'s opening idea about the instrument\'s origins.',
        'The history of the Grammy Awards is unrelated to the banjo\'s origins. It picks up a minor detail from the last paragraph instead of returning to the opening.',
      ],
      skill: 'POW',
      marker: 10,
      difficulty: 'medium',
    },
  ],
}

export const ACT_FL2_ENGLISH: ActFLPassage[] = [PASSAGE_1, PASSAGE_2, PASSAGE_3, PASSAGE_4, PASSAGE_5]
