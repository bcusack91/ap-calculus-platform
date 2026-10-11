import type { SatOptionExplanationMap } from './types'

/** Per-option explanations for SAT full-length items (see ./index.ts). Generated from the authoring pipeline; edit there. */
const ENTRIES: SatOptionExplanationMap = {
  "q:97dc454fbd43ca83": {
    "options": [
      "The panel's original pigments were not in fact brighter than the varnished surface had suggested.",
      "The varnish was added centuries after the painting was completed, probably by a later owner.",
      "Conservators should never remove varnish from historical paintings, since it may be original.",
      "Determining a painting's original appearance can mean choosing among states that are all authentic."
    ],
    "explanations": [
      "The text says conservators \"recovered brighter pigments, certainly,\" so the pigments were in fact brighter. This choice contradicts a point the passage grants outright.",
      "The analysis dated the varnish to \"within a few years of the painting's completion, probably in the workshop.\" Placing it centuries later, by a later owner, reverses the very finding that creates the dilemma.",
      "The passage describes a difficult judgment, not a rule. Turning it into a blanket prohibition on ever removing varnish goes far beyond anything the text endorses.",
      "The closing clause states it directly: conservators are \"deciding not what is original but which of two original states to present.\" Both the bare pigments and the early varnish count as authentic, so recovering the original look means choosing between authentic states."
    ]
  },
  "q:b1ae833f6fb717d7": {
    "options": [
      "Freeze drying retained 90 and 79 percent of compounds X and Y, while air drying retained 88 and 31 and oven drying 42 and 44.",
      "Freeze drying retained 90 percent of compound X, the highest value recorded for that compound across the three drying methods.",
      "Air drying retained 88 percent of compound X, nearly as much as freeze drying and more than twice as much as oven drying.",
      "Oven drying retained less of compound X than of compound Y, at 42 percent and 44 percent, the closest pair of values for any method."
    ],
    "explanations": [
      "The conclusion is about \"both\" compounds across all three methods, so it needs all six values. Reporting 90 and 79 for freeze drying next to 88/31 and 42/44 shows that only freeze drying scores high on each compound.",
      "This tracks compound X alone. Air drying's 88 percent is nearly as high, and nothing here addresses compound Y, so it cannot show that freeze drying is the only method preserving both.",
      "Highlighting that air drying nearly matched freeze drying on compound X actually weakens the claim that freeze drying is unique, and it omits air drying's collapse to 31 percent on compound Y.",
      "Comparing oven drying's 42 and 44 is a true observation within one method, but it says nothing about which method preserves both compounds well."
    ]
  },
  "q:cb020b3654388629": {
    "options": [
      "The concert was sold out but we found tickets online.",
      "The concert was sold out but, we found tickets online.",
      "The concert was sold out, but we found tickets online.",
      "The concert was sold out, but, we found tickets online."
    ],
    "explanations": [
      "Two independent clauses joined by the coordinating conjunction \"but\" need a comma before the conjunction. With no comma at all, the two clauses run together.",
      "The comma belongs before \"but,\" not after it. Placing it after the conjunction splits \"but\" from the clause it introduces and leaves the two independent clauses unseparated.",
      "\"The concert was sold out\" and \"we found tickets online\" are both independent clauses, so a comma goes before the coordinating conjunction \"but\" that joins them.",
      "Commas on both sides of \"but\" treat the conjunction as an interrupter. The comma after \"but\" is unnecessary and wrongly separates the conjunction from its clause."
    ]
  },
  "q:71156f8482aa377b": {
    "options": [
      "is lying",
      "lies",
      "has lain",
      "lie"
    ],
    "explanations": [
      "\"Is lying\" is singular and progressive. The true subject, \"vineyards,\" is plural, and a permanent geographic fact does not take an ongoing-action tense.",
      "\"Lies\" is singular, but it agrees with nothing here: \"hills\" is inside the prepositional phrase \"Beyond the rolling hills,\" and the actual subject, \"vineyards,\" is plural.",
      "\"Has lain\" is singular and perfect-tense. The subject \"vineyards\" is plural, and the sentence describes a present, ongoing location rather than a completed past action.",
      "The sentence is inverted: the subject \"some of the most productive vineyards\" follows the verb. Vineyards are plural, so the plural present-tense verb \"lie\" is required."
    ]
  },
  "q:ab844df967f18993": {
    "options": [
      "whoever",
      "whom",
      "who",
      "whose"
    ],
    "explanations": [
      "\"Whoever\" is a subject-form pronoun and also adds an open-ended \"anyone who\" meaning the question does not have. After the preposition \"to,\" the object form is needed.",
      "The pronoun is the object of the preposition \"to\" (\"address this letter to him\"), so the object form \"whom\" is correct.",
      "\"Who\" is the subject form. Here the pronoun is not doing anything; it is the object of the preposition \"to,\" which calls for \"whom.\"",
      "\"Whose\" is possessive and would need a noun to own (\"whose address\"). Nothing in the sentence is being possessed, and the slot requires an object pronoun."
    ]
  },
  "q:9157d66f47a93f4a": {
    "options": [
      "whom have long been studied by researchers",
      "whom researchers have long studied",
      "who researchers have long studied",
      "who have long been studied by researchers"
    ],
    "explanations": [
      "\"Whom\" is an object form, but in \"have long been studied,\" the pronoun is the subject of the passive verb. An object pronoun cannot serve as a clause's subject.",
      "In \"researchers have long studied ___,\" the pronoun is the object of \"studied\" (researchers studied them), so the object form \"whom\" is correct.",
      "The pronoun is the object of \"studied\" in \"researchers have long studied ___.\" \"Who\" is the subject form and cannot fill an object slot.",
      "\"Who\" is correctly a subject here, but the passive \"have long been studied by researchers\" is wordier and shifts focus away from the researchers doing the studying; the active construction with \"whom\" is the conventional choice."
    ]
  },
  "q:80537d526b53d704": {
    "options": [
      "subsequently",
      "conversely",
      "instead",
      "alternatively"
    ],
    "explanations": [
      "The president signing the bill happens after the Senate passes it, so a sequence word is needed. \"Subsequently\" means \"after that\" and marks the next step in the process.",
      "\"Conversely\" introduces an opposite or reversed situation. Signing a bill that the Senate passed is the expected next step, not a contrast.",
      "\"Instead\" signals a substitution, as if the president signed the bill rather than something else happening. The two events are steps in sequence, not alternatives.",
      "\"Alternatively\" presents a different option in place of the first. Nothing is being offered as a choice here; the signing simply follows the passage."
    ]
  },
  "q:b1f3f0e4c8ebb9bc": {
    "options": [
      "The number of young of the year caught per net-hour was 41 in 2015, rose to 44 in 2019, and dipped to 39 in 2023.",
      "Adults rose from 6 to 27 per net-hour between 2015 and 2023, while young of the year stayed near 40.",
      "Adults rose from 6 to 9 per net-hour between 2015 and 2019, while young of the year rose from 41 to 44.",
      "The total catch per net-hour, adults and young combined, rose from 47 in 2015 to 53 in 2019 and to 66 in 2023."
    ],
    "explanations": [
      "Reporting young-of-the-year counts of 41, 44, and 39 gives only the flat series. By itself it shows no recovery at all and never mentions the adults whose rise is the point.",
      "The conclusion contrasts two possible sources, so the evidence must show adults rising while hatchlings stay flat. Pairing the adult increase from 6 to 27 with young of the year holding near 40 across 2015 to 2023 does exactly that.",
      "Using only 2015 to 2019 captures a rise of 3 in adults matched by a rise of 3 in young of the year, which would suggest both grew together. The decisive adult jump came after 2019.",
      "A combined total of 47, 53, and 66 lumps the two age classes together, so it cannot show which one drove the recovery, which is the distinction the conclusion depends on."
    ]
  },
  "q:d282b8ed8c016044": {
    "options": [
      "By agreeing that automated systems should handle routine material because the benchmark evidence is sound.",
      "By arguing that machine translation systems score poorly on standard benchmarks for contracts and manuals.",
      "By claiming that professional human translators never make terminology errors across a document's paragraphs.",
      "By objecting that sentence-level benchmarks cannot detect the document-level errors that matter to readers."
    ],
    "explanations": [
      "Text 2 argues that benchmark scores miss \"the errors that matter.\" Agreeing with Text 1 because the benchmark evidence is sound adopts the very conclusion Text 2 sets out to unsettle.",
      "Text 2 never says the systems score poorly; it accepts the high scores and questions what they measure. Its complaint is that a document \"can score well\" while containing errors the benchmark cannot see.",
      "Text 2 says nothing about how human translators perform. Claiming they \"never\" make terminology errors is an outside assertion the passage does not support.",
      "Text 2 explains that scores are \"computed sentence by sentence,\" so a document can use a different term for the same entity in each paragraph and still score well. Readers \"encounter documents,\" and the errors that matter to them are ones \"the benchmark cannot see.\""
    ]
  },
  "q:113ae1ad7447ed90": {
    "options": [
      "breaks down quickly and stays outside the nucleus",
      "is identical to DNA in both structure and function",
      "requires a weakened viral vector to reach human cells",
      "integrates permanently into the cell’s chromosomes"
    ],
    "explanations": [
      "The passage says the mRNA \"degrades within days and never enters the cell nucleus, so it cannot alter the recipient's DNA.\" Rapid breakdown plus staying outside the nucleus is exactly the reassurance offered.",
      "The passage contrasts mRNA with DNA rather than equating them; mRNA is a messenger that ribosomes read to make a protein. Nothing says it is identical to DNA in structure or function.",
      "A weakened viral vector describes traditional vaccines, which \"introduce weakened or inactivated pathogens.\" mRNA vaccines use \"a different approach,\" delivering synthetic mRNA via lipid nanoparticles.",
      "This is the opposite of what the passage says. The mRNA \"never enters the cell nucleus,\" so it cannot integrate into chromosomes or alter DNA."
    ]
  },
  "q:76d02f1f4c316327": {
    "options": [
      "My sister who lives in Denver is visiting next week.",
      "My sister who lives in Denver, is visiting next week.",
      "My sister, who lives in Denver is visiting next week.",
      "My sister, who lives in Denver, is visiting next week."
    ],
    "explanations": [
      "With only one sister, \"who lives in Denver\" is nonessential information and must be set off by commas. Leaving out both commas treats the clause as essential, implying the writer has more than one sister.",
      "A single comma after \"Denver\" with none after \"sister\" opens no supplement and instead wrongly separates the subject \"My sister\" from its verb \"is visiting.\"",
      "The comma after \"sister\" opens the nonessential clause, but nothing closes it. A supplement set off by a comma on one side must be closed by a comma on the other.",
      "Because the writer has only one sister, \"who lives in Denver\" is extra, nonessential information. A nonessential clause is enclosed by a pair of commas, one before and one after."
    ]
  },
  "q:e5c4528387c6a9c4": {
    "options": [
      "had",
      "has",
      "have",
      "are having"
    ],
    "explanations": [
      "\"Had\" is singular, but the past perfect places the attracting before some other past event the sentence never mentions. The context describes an ongoing present situation.",
      "The subject is the singular noun \"collection\"; \"of rare manuscripts housed in the university's special archives\" only modifies it. The singular present perfect \"has attracted\" agrees and fits the ongoing situation.",
      "\"Have\" is plural, matching \"manuscripts\" or \"archives,\" but those nouns sit inside a prepositional phrase. The true subject, \"collection,\" is singular.",
      "\"Are having\" is plural and progressive. The subject \"collection\" is singular, and \"attracted\" describes an accomplishment, not an action in progress right now."
    ]
  },
  "q:00fad50c831af7fa": {
    "options": [
      ". Researchers",
      "; researchers",
      ", researchers",
      ": researchers"
    ],
    "explanations": [
      "A period would leave \"Because the parasitic fungus alters... growth\" standing alone. A clause that begins with \"Because\" is subordinate and cannot be a sentence by itself.",
      "A semicolon needs an independent clause on each side. The material before the blank is a dependent \"Because\" clause extended by a participial phrase, so it cannot stand on the left of a semicolon.",
      "Everything before the blank is an introductory subordinate clause (\"Because the parasitic fungus alters...\") plus a participial phrase. An introductory dependent element is joined to the main clause \"researchers have described...\" with a comma.",
      "A colon must follow a complete sentence. \"Because the parasitic fungus alters the behavior... growth\" is a dependent clause, so a colon cannot come after it."
    ]
  },
  "q:55c041dc76abe0ee": {
    "options": [
      "inspected",
      "inspect",
      "have inspected",
      "were inspecting"
    ],
    "explanations": [
      "\"Along with two graduate students and a conservator\" is a supplementary phrase that does not make the subject plural, so \"The curator\" is the singular subject. \"Before the shipment was released\" sets the action in the past, and \"inspected\" fits both.",
      "\"Inspect\" is a plural present-tense form. It treats the accompanying people as part of the subject, and it clashes with the past time frame set by \"before the shipment was released.\"",
      "\"Have inspected\" is plural, taking the students and conservator as co-subjects, though the \"along with\" phrase is only a supplement. It also uses present perfect where the sentence is firmly in the past.",
      "\"Were inspecting\" is a plural form for a singular subject, \"The curator.\" The progressive also leaves the inspection unfinished, which fits poorly with a shipment then being released."
    ]
  },
  "q:b4344ca1564d5e94": {
    "options": [
      "who",
      "whose",
      "whom",
      "which"
    ],
    "explanations": [
      "The pronoun is the subject of the verb \"study\" (they study climate change), so the subject form \"who\" is correct.",
      "\"Whose\" is possessive and would need to be followed by a noun that is owned (\"whose research\"). Here the pronoun itself performs the action of studying.",
      "\"Whom\" is the object form. The pronoun here does the studying, which makes it the subject of the relative clause, so \"whom\" cannot fit.",
      "\"Which\" refers to things, not people. The pronoun stands for \"Scientists,\" so a person pronoun is required."
    ]
  },
  "q:81c012305c127e9b": {
    "options": [
      "Radiocarbon dating places the manuscript's parchment in the early fifteenth century, though its script remains undeciphered.",
      "Scholars remain divided, some regarding the manuscript as an elaborate hoax and others as a record of a real language.",
      "The manuscript's letter frequencies resemble those of natural languages rather than random strings, a pattern a hoaxer would struggle to imitate.",
      "No repeated phrase in the Voynich manuscript, whose parchment dates to the early fifteenth century, matches any known language's grammar."
    ],
    "explanations": [
      "A radiocarbon date and an undeciphered script say nothing about whether the manuscript is a hoax. A hoaxer could have used old parchment, so this does not complicate that explanation.",
      "This reports that scholars disagree but gives no evidence on either side. The goal is to present the evidence that works against the hoax reading, not to describe the debate.",
      "This presents a finding, letter frequencies that resemble natural languages, and states why it presses against the hoax hypothesis: such a pattern would be hard for a hoaxer to imitate. That is the evidence complicating the hoax explanation.",
      "Matching no known grammar actually supports the hoax reading rather than complicating it, and the parchment date adds nothing about authenticity. This sentence works against the student's goal."
    ]
  },
  "q:e0450f27e3f71d46": {
    "options": [
      "Likewise",
      "Accordingly",
      "For example",
      "Even so"
    ],
    "explanations": [
      "\"Likewise\" signals similarity, but the second sentence does not resemble the first. Being dismissed and being taught worldwide are opposites, not parallels.",
      "\"Accordingly\" signals a result, as if worldwide teaching followed from the critics' dismissal. The second sentence happened despite the first, not because of it.",
      "\"For example\" introduces an illustration of the preceding statement. The novel being taught everywhere does not exemplify critics dismissing it; it runs against that judgment.",
      "The second sentence is true despite the first: early critics dismissed the novel, yet it is now taught around the world. \"Even so\" marks exactly this concession-and-reversal relationship."
    ]
  },
  "q:71dad32872356208": {
    "options": [
      "'The square at Belmont is the most successful public space I have measured, busy at every hour I observed it, in every season and in all weathers.'",
      "'Planners are fond of fountains, and fountains are pleasant, and I have nothing against them or against the benches placed beside them.'",
      "'Belmont's paving was relaid in 1994 at considerable expense, using granite setts brought from a quarry two hundred miles north.'",
      "'Count the doors that open onto a square and you will predict its afternoons better than any inventory of what stands in the middle of it.'"
    ],
    "explanations": [
      "Calling Belmont \"the most successful public space I have measured\" praises one square and describes how busy it is. It gives no reason for the success and never mentions the edges.",
      "This quotation mentions fountains and benches, which are contents of a square, but only to say the author has nothing against them. It makes no claim about the edges.",
      "A fact about when the paving was relaid and where the granite came from is a detail about one square's surface. It bears on neither the contents nor the edges argument.",
      "This states the general rule: counting \"the doors that open onto a square\" predicts its use better than \"any inventory of what stands in the middle of it.\" That is the claim that edges, not contents, set a square's uses."
    ]
  },
  "q:d2634977bc954516": {
    "options": [
      "text: have",
      "text have",
      "text, have",
      "text; have"
    ],
    "explanations": [
      "A colon must follow a complete clause. \"The manuscript's marginal notes, written in... main text\" is a subject with a long modifier, not a full statement, so a colon cannot appear here.",
      "The modifier \"written in at least two hands... main text\" opened with a comma after \"notes.\" Omitting the closing comma leaves that interruption unclosed before the verb \"have.\"",
      "The description \"written in at least two hands... of the main text\" is a supplement opened by the comma after \"notes.\" It must be closed with a matching comma before the verb \"have never been transcribed.\"",
      "A semicolon joins two independent clauses. The words before the blank are only a subject plus a modifier, with no verb of their own, so a semicolon cannot stand there."
    ]
  },
  "q:21c847d8ad3f0a94": {
    "options": [
      "will have completed",
      "will complete",
      "completed",
      "has completed"
    ],
    "explanations": [
      "The clause \"before the first crewed landing mission launches\" fixes a future deadline, and the preparation will be finished before that point. The future perfect \"will have completed\" expresses an action completed before a future moment.",
      "\"Will complete\" is a simple future. It describes the completing as happening in the future but does not place it before the landing launch, which the \"before\" clause requires.",
      "\"Completed\" is simple past, but the sentence looks ahead: \"if the current timeline holds\" and \"before the first crewed landing mission launches\" both point to the future.",
      "\"Has completed\" is present perfect, describing something already finished now. The decade of preparation is not yet done; it will be finished before a future launch."
    ]
  },
  "q:5afcaeb2e7735fcd": {
    "options": [
      "constitute",
      "have constituted",
      "are constituting",
      "constitutes"
    ],
    "explanations": [
      "\"Constitute\" is plural. It agrees with \"logs, ships' manifests, and insurance ledgers,\" but those nouns are inside a prepositional phrase; the subject is the singular \"collection.\"",
      "\"Have constituted\" is a plural form that treats the listed documents as the subject. The subject is \"collection,\" which is singular, so this verb does not agree.",
      "\"Are constituting\" is both plural, disagreeing with the singular \"collection,\" and progressive, which is wrong for a stative verb describing a permanent fact about what the record is.",
      "The subject is the singular noun \"collection\"; the plural nouns that follow belong to the phrase \"of... logs, manifests, and ledgers\" and cannot govern the verb. \"Constitutes\" is the only singular choice."
    ]
  },
  "q:2a78b59d9facb35a": {
    "options": [
      "world's oceans, which cover more than seventy percent of the planet's surface, remain",
      "world's oceans, which cover more than seventy percent of the planet's surface remain",
      "world's oceans which cover more than seventy percent of the planet's surface, remain",
      "world's oceans which cover more than seventy percent of the planet's surface remain"
    ],
    "explanations": [
      "\"Which cover more than seventy percent of the planet's surface\" is a nonrestrictive clause adding extra information about the oceans. It must be enclosed by commas on both sides, which this choice does.",
      "The comma after \"oceans\" opens the nonrestrictive clause, but no comma closes it before \"remain.\" A clause set off on one side must be set off on the other.",
      "There is a closing comma before \"remain\" but no opening comma after \"oceans.\" The nonrestrictive \"which\" clause needs commas at both ends, not just at the end.",
      "With no commas at all, the \"which\" clause runs directly into the subject and the verb. A nonrestrictive clause introduced by \"which\" must be set off by a pair of commas."
    ]
  },
  "q:77696a1b10bcd1f0": {
    "options": [
      "facade -- the case, the gilding, and the seventeen display pipes --",
      "facade, the case, the gilding, and the seventeen display pipes,",
      "facade: the case, the gilding, and the seventeen display pipes,",
      "facade (the case, the gilding, and the seventeen display pipes,"
    ],
    "explanations": [
      "The interruption is a list with its own commas, and the sentence continues with \"in less than a year.\" A matched pair of dashes both opens and closes the supplement and keeps its internal commas distinct.",
      "Commas around the list blend with the commas inside it, so \"the case, the gilding, and the seventeen display pipes\" reads as additional objects of \"rebuilt\" rather than as an explanation of \"facade.\"",
      "A colon can introduce the specifying list, but the sentence resumes afterward with \"in less than a year,\" and a comma cannot close a supplement that a colon opened.",
      "The parenthesis opens before \"the case\" but is never closed. A comma cannot end a parenthetical that began with an opening parenthesis."
    ]
  },
  "q:aa4c5edff82491f7": {
    "options": [
      "Residents filed three times as many glare complaints in 2017 as in 2015, after the city replaced 4,000 sodium streetlights with LEDs.",
      "After the city fitted 900 fixtures with diffusing lenses in 2018, glare complaints fell to their 2015 level by 2019.",
      "The city's 2016 replacement of 4,000 sodium streetlights with LEDs cut energy use for street lighting by 54 percent the next year.",
      "The city replaced 4,000 streetlights with LEDs in 2016 and added diffusing lenses to 900 fixtures in 2018."
    ],
    "explanations": [
      "Tripling of complaints after the LED replacement describes the problem the city faced. It says nothing about the city's response or whether that response worked.",
      "Effectiveness means pairing the remedy with its measured result. Fitting 900 fixtures with diffusing lenses in 2018 is the response, and complaints returning to their 2015 level by 2019 is the evidence that it worked.",
      "The 54 percent energy saving is a benefit of the original LED conversion, which caused the complaints. It has nothing to do with the city's response to those complaints.",
      "Listing the LED replacement and the lens additions in sequence reports two actions but no outcome. Without the complaint data, nothing shows that the response was effective."
    ]
  },
  "q:f12231164c1b67d5": {
    "options": [
      "Surprisingly, the underdog won the championship.",
      "Surprisingly, the underdog, won the championship.",
      "Surprisingly; the underdog, won the championship.",
      "Surprisingly, the underdog won, the championship."
    ],
    "explanations": [
      "\"Surprisingly\" is an introductory adverb modifying the whole sentence, so it takes a comma. After that, \"the underdog won the championship\" flows with no interruptions between subject, verb, and object.",
      "The comma after \"underdog\" separates the subject from its verb \"won.\" No punctuation belongs between a subject and its verb.",
      "A semicolon joins two independent clauses, but \"Surprisingly\" is a single adverb, not a clause. The comma after \"underdog\" also splits the subject from its verb.",
      "The comma after \"won\" separates the verb from its direct object \"the championship.\" No comma belongs between a verb and its object."
    ]
  },
  "q:b9cb5d685dd9e0e2": {
    "options": [
      "were",
      "is",
      "have been",
      "are"
    ],
    "explanations": [
      "\"Were\" is plural and past tense. The subject is the singular pronoun \"one,\" and the sentence describes a concept that is currently cited, so a present singular verb is needed.",
      "The subject is \"one,\" not \"concepts,\" which sits inside the phrase \"of the most widely cited concepts.\" \"One... is the endowment effect\" uses the singular present-tense verb that agrees.",
      "\"Have been\" is plural, agreeing with the nearby \"concepts\" rather than the true subject \"one.\" The nouns in a prepositional phrase do not govern the verb.",
      "\"Are\" is plural. It is drawn by the nearby plural \"concepts,\" but the subject of the sentence is the singular \"one.\""
    ]
  },
  "q:e09939ff31fba62a": {
    "options": [
      "Cultivated meat is produced from animal cells without raising or slaughtering animals, and it uses far less land and water than conventional meat.",
      "Cultivated meat is produced from animal cells rather than from raised livestock, and its price has dropped noticeably over the past several years.",
      "Cultivated meat could reduce greenhouse emissions from livestock by up to 92% and would require far less land and water than conventional meat.",
      "Cultivated meat could cut livestock emissions by up to 92%, but surveys show that many people are uncomfortable eating \"lab-grown\" products."
    ],
    "explanations": [
      "This describes how cultivated meat is made and one environmental benefit, less land and water. It never mentions an obstacle, so it covers only half of the student's goal.",
      "The production method and a falling price are not the environmental benefits in the notes, and a dropping price is a favorable trend rather than an obstacle to adoption.",
      "Both halves are environmental benefits: lower emissions and less land and water. Nothing here names a major obstacle to widespread adoption.",
      "The student wants a benefit and an obstacle. Cutting livestock emissions by up to 92 percent is the environmental benefit, and the \"but\" clause about consumer discomfort with \"lab-grown\" products is the major obstacle from the notes."
    ]
  },
  "q:01a7a6a43c07ab37": {
    "options": [
      "They were written by someone involved in making the manuscript rather than by a later owner.",
      "They are more historically valuable than the two legal hands, since they record everyday household life.",
      "They prove that the treatise was never used for legal study by the clerics who owned it.",
      "They were added after the manuscript was rebound by a later owner outside clerical circles."
    ],
    "explanations": [
      "The household hand \"appears also in the ruling and pricking of two quires, work done before any text was written on them.\" Whoever wrote the notes was present when the manuscript was being made, which rules out a later owner.",
      "The passage never ranks the historical value of the different hands. Saying the household notes are \"more historically valuable\" is a judgment the text does not make.",
      "Two of the three hands \"annotate points of law,\" which is direct evidence that the treatise was used for legal study. The passage never says it was not.",
      "The text states that \"the parchment shows no rebinding,\" so the notes cannot have been added after a rebinding. This also repeats the later-owner view the passage argues against."
    ]
  },
  "q:2ea804f1847b5943": {
    "options": [
      "downstream: rested",
      "downstream, rested",
      "downstream rested",
      "downstream -- rested"
    ],
    "explanations": [
      "A colon must follow a complete clause, and \"The claim that... downstream\" is only a subject with a long modifier. The colon also wrongly separates that subject from its verb \"rested.\"",
      "The subject is \"The claim,\" and \"rested\" is its verb. A single comma between a subject and its verb is never correct, no matter how long the modifier in between.",
      "\"The claim\" is the subject and \"rested\" is its verb; the clause \"that the restored salt marshes... downstream\" merely describes the claim. No punctuation belongs between a subject and its verb.",
      "A single dash here separates the subject \"The claim\" from its verb \"rested.\" Dashes set off interruptions in pairs; one dash cannot stand between a subject and verb."
    ]
  },
  "q:33b10de37bbf1967": {
    "options": [
      "have revealed",
      "are revealing",
      "reveal",
      "reveals"
    ],
    "explanations": [
      "\"Have revealed\" is plural, agreeing with \"artifacts\" or the listed items, but those are inside modifying phrases. The subject is the singular noun \"collection.\"",
      "\"Are revealing\" is plural, disagreeing with the singular subject \"collection,\" and the progressive form is less apt for stating what the artifacts show.",
      "\"Reveal\" is plural. It is pulled toward \"pottery fragments, tools, and ceremonial masks,\" but those nouns describe the collection; they do not govern the verb.",
      "The subject is \"a collection,\" which is singular. The phrases \"of Bronze Age artifacts\" and \"including pottery fragments, tools, and ceremonial masks\" only modify it, so the singular verb \"reveals\" agrees."
    ]
  },
  "q:70322974d3e5d620": {
    "options": [
      "The experiment failed, the fans celebrated.",
      "The experiment failed, and, the fans celebrated.",
      "The experiment failed the fans celebrated.",
      "The experiment failed; the fans celebrated."
    ],
    "explanations": [
      "A comma alone between two independent clauses creates a comma splice. \"The experiment failed\" and \"the fans celebrated\" each could stand as a sentence, so a comma is not strong enough.",
      "Adding \"and\" is one valid fix, but the comma placed after \"and\" is misplaced. The comma belongs before the conjunction, never directly after it.",
      "This repeats the original run-on without any punctuation or conjunction. Two independent clauses cannot simply be placed side by side.",
      "A semicolon correctly joins two closely related independent clauses with no conjunction. \"The experiment failed\" and \"the fans celebrated\" are both complete clauses, so the semicolon fixes the run-on."
    ]
  },
  "q:92312a9cdbf0831f": {
    "options": [
      "Because the experiment required precise temperature control the researchers,",
      "Because the experiment required precise temperature control, the researchers",
      "Because, the experiment required precise temperature control, the researchers",
      "Because the experiment required precise temperature control the researchers"
    ],
    "explanations": [
      "The comma sits after \"the researchers,\" separating the subject from its verb \"conducted.\" The comma belongs at the end of the subordinate clause, after \"control.\"",
      "When a subordinate clause beginning with \"Because\" comes first, a comma separates it from the main clause. The comma after \"control\" marks exactly that boundary, before the subject \"the researchers.\"",
      "A comma directly after \"Because\" splits the subordinating conjunction from the clause it introduces. The only comma needed is the one after \"control.\"",
      "With no comma, the introductory subordinate clause runs straight into the main clause, so \"control the researchers\" momentarily reads as a verb and object. A comma is required after \"control.\""
    ]
  },
  "q:f8774f3cebdcf2af": {
    "options": [
      "After reading a passage, some students restudied it, and others wrote down everything they recalled.",
      "Restudying led to better recall after five minutes, but testing led to better recall a week later.",
      "Five minutes after the study session, the students who had restudied the passage remembered more.",
      "In a 2006 experiment, Roediger and Karpicke studied how students learn from reading prose passages."
    ],
    "explanations": [
      "This describes the two conditions of the study, restudying versus free recall, but reports no results. It cannot show that the better method changed with the timing of the test.",
      "To show that the better method depended on timing, both results must appear: restudying won at five minutes, testing won a week later. This sentence reports both and contrasts them with \"but.\"",
      "This reports only the five-minute result, in which restudying won. Without the one-week result, there is no evidence that the outcome depended on when recall was measured.",
      "This introduces the researchers and their topic but gives no results at all, so it cannot emphasize anything about timing and recall."
    ]
  },
  "q:71c2ee31a17c52fd": {
    "options": [
      "Cap-and-trade programs and carbon taxes are both policies that governments use to give businesses a reason to reduce carbon output.",
      "A carbon tax sets a price on each ton of carbon a company emits, which gives businesses a financial reason to emit less.",
      "Under cap-and-trade, the government sets a maximum limit on total emissions, and companies buy and sell permits to emit.",
      "Both aim to cut emissions, but cap-and-trade sets a fixed limit on total emissions, while a carbon tax sets a fixed price per ton of carbon."
    ],
    "explanations": [
      "This states only what the two policies have in common. It emphasizes the shared goal, which is the opposite of the student's aim of highlighting the key difference.",
      "Describing only the carbon tax, with no mention of cap-and-trade, cannot emphasize a difference between the two approaches.",
      "Describing only cap-and-trade, with no mention of a carbon tax, leaves out one side of the comparison and cannot highlight the key difference.",
      "This acknowledges the shared goal, then contrasts the mechanisms directly: cap-and-trade fixes the total quantity of emissions, while a carbon tax fixes the price per ton. That is the key difference from the notes."
    ]
  },
  "q:961e71f1d6918d9c": {
    "options": [
      "However",
      "For instance",
      "Meanwhile",
      "Therefore"
    ],
    "explanations": [
      "\"However\" signals a contrast, but a second team preparing tests does not oppose the first team analyzing samples. The two actions are complementary.",
      "\"For instance\" introduces an example of the previous statement. A second team preparing tests is not an example of analyzing samples.",
      "Two teams are working at the same time, one analyzing samples while the other prepares additional tests. \"Meanwhile\" signals this simultaneous action.",
      "\"Therefore\" signals a result. Preparing additional tests is not a consequence of the first team's analysis; it is a parallel activity."
    ]
  },
  "q:61c018a98b904121": {
    "options": [
      "mitochondrial DNA can sometimes be inherited from fathers",
      "other women’s mtDNA lines ended when descendants had only sons",
      "researchers found several distinct origins for human mtDNA",
      "Mitochondrial Eve lived before modern humans had evolved"
    ],
    "explanations": [
      "The passage says mtDNA \"is inherited exclusively from the mother.\" Inheritance from fathers is explicitly ruled out, so it cannot be the explanation.",
      "The passage explains that other women \"also contributed to the modern gene pool through nuclear DNA, but their mitochondrial lineages eventually died out when a descendant had only sons.\" That is why Eve was not the only woman alive.",
      "The passage traces all living humans' maternal ancestry to \"a single woman,\" one origin, not several. This contradicts the text.",
      "The passage places Mitochondrial Eve in Africa about 200,000 years ago and says nothing about her predating modern humans. This idea is not in the text."
    ]
  },
  "q:75a8c45453651d01": {
    "options": [
      "\"My teacher said the audience would be mostly parents.\"",
      "\"My hands would not stop shaking as I waited backstage.\"",
      "\"I had practiced the sonata every day for three months.\"",
      "\"The recital hall had been freshly painted a pale blue.\""
    ],
    "explanations": [
      "Knowing the audience would be mostly parents describes who will attend. It says nothing about how the narrator feels about performing.",
      "Hands that \"would not stop shaking\" while waiting backstage are a physical sign of nervousness, and \"backstage\" places the moment right before the recital. This directly supports the claim.",
      "Practicing every day for three months shows preparation and dedication. It does not reveal nervousness; if anything, it suggests confidence.",
      "The color of the recital hall's paint is a detail about the setting. It gives no insight into the narrator's emotional state."
    ]
  },
  "q:d9ae2bb57207dc14": {
    "options": [
      "Burial registers for the town record a sharp rise in interments during 1348 and 1349, peaking in the late summer.",
      "The town's population had also fallen, less steeply, in the forty years between 1300 and 1340.",
      "Contemporary chronicles describe the epidemic as the worst in living memory and note that it struck the town hard.",
      "The nearby city's tax rolls list 640 new households in the 1350s, of whom 210 give the town as their place of origin."
    ],
    "explanations": [
      "A sharp rise in burials in 1348 and 1349 is evidence of epidemic deaths. This supports the mortality account, the rival of the one the student wants to favor.",
      "An earlier, gentler decline from 1300 to 1340 says nothing about whether the 1340 to 1380 loss came from deaths or departures. It does not distinguish between the two accounts.",
      "Chronicles calling the epidemic \"the worst in living memory\" and saying it struck the town hard document the disease. That supports the mortality account, not migration.",
      "The migration account requires people turning up elsewhere. Tax rolls in the nearby city listing 210 new households that name the town as their origin are direct evidence that residents left for that city."
    ]
  },
  "q:b0b35cecf9368dcb": {
    "options": [
      "since",
      "because",
      "as",
      "due to the fact"
    ],
    "explanations": [
      "\"Since\" can introduce a reason clause, but the correlative \"not... but\" needs matching forms. The first half uses \"because,\" so swapping in \"since\" breaks the parallel.",
      "The correlative pair \"not... but\" must join elements of the same form. The first element is \"because the design was flawed,\" so the second must also begin with \"because.\"",
      "\"As\" introduces a clause, but it is a different subordinator from the \"because\" in the first half, and it can also be read as \"while.\" The parallel structure requires \"because.\"",
      "\"Due to the fact\" is a noun phrase, not a subordinating conjunction, and it would need \"that\" to introduce the clause. It leaves the two halves of \"not... but\" mismatched."
    ]
  },
  "q:f83acd100bc2c80c": {
    "options": [
      "the senator, a former civil rights attorney, introduced",
      "the senator, a former civil rights attorney introduced",
      "the senator a former civil rights attorney introduced",
      "the senator a former civil rights attorney, introduced"
    ],
    "explanations": [
      "\"A former civil rights attorney\" is a nonessential appositive renaming the senator. It is correctly enclosed by a comma before and a comma after, with the verb \"introduced\" following.",
      "The comma after \"senator\" opens the appositive, but no comma closes it after \"attorney.\" A nonessential appositive must be set off on both sides.",
      "With no commas, the appositive \"a former civil rights attorney\" runs together with the subject and verb, making the sentence hard to parse. The appositive needs commas on both sides.",
      "The comma after \"attorney\" closes an appositive that was never opened; there is no comma after \"senator.\" Both commas are required."
    ]
  },
  "q:979170dd8c3310f6": {
    "options": [
      "myself",
      "I",
      "me",
      "mine"
    ],
    "explanations": [
      "\"Myself\" is a reflexive pronoun and is correct only when the subject and object are the same person. The director, not the speaker, is doing the asking.",
      "\"I\" is a subject form. The pronoun here is part of the object of \"asked\" (the director asked Priya and me), so the object form is required.",
      "The pronoun is an object of the verb \"asked\": the director asked Priya and me. Removing \"Priya and\" confirms it: \"The director asked me.\" The object form \"me\" is correct.",
      "\"Mine\" is a possessive pronoun that stands for something owned, as in \"the script is mine.\" It cannot name a person who was asked."
    ]
  },
  "q:61d4d5776e77ee15": {
    "options": [
      "was rephotographing",
      "rephotographing",
      "would rephotograph",
      "rephotographed"
    ],
    "explanations": [
      "\"Was rephotographing\" shifts to the past progressive, breaking the parallel with the simple past \"logged\" and \"checked\" and losing their completed sense.",
      "\"Rephotographing\" is a participle, not a finite verb. It cannot coordinate with \"logged\" and \"checked\" in a series of actions the technician performed.",
      "\"Would rephotograph\" adds a habitual or conditional meaning that the first two verbs do not carry. The series needs a third simple-past verb.",
      "The series lists three past actions by the technician: \"logged,\" \"checked,\" and \"rephotographed.\" The simple past keeps all three parallel in form and tense."
    ]
  },
  "q:a3bc6a3442777aa8": {
    "options": [
      "the dredging schedule had to be revised three times in a decade.",
      "the port authority revised its dredging schedule three times in a decade.",
      "the silt forced the port authority to revise its dredging schedule three times in a decade.",
      "three revisions to the dredging schedule became necessary within a decade."
    ],
    "explanations": [
      "The opening phrase describes something \"rising from the harbor floor.\" A dredging schedule cannot rise from the harbor floor, so this subject leaves the participle dangling.",
      "Placing \"the port authority\" right after the participle says the port authority was rising from the harbor floor. The modifier must attach to what actually rose.",
      "What rose from the harbor floor is the silt, so the main clause must begin with \"the silt.\" The participle then correctly modifies its subject, and the clause explains the consequence for the dredging schedule.",
      "\"Three revisions\" did not rise from the harbor floor. Opening the main clause with this subject misattaches the participial phrase."
    ]
  },
  "q:5c5b42c5e7544820": {
    "options": [
      "the library paid more for the copy than for any other item that year.",
      "more was paid for the copy than for any other item the library acquired that year.",
      "the copy cost the library more than any other item it acquired that year.",
      "acquiring the copy cost the library more than any other purchase that year."
    ],
    "explanations": [
      "The opening phrase describes something \"bound in vellum and annotated.\" Beginning the main clause with \"the library\" says the library was bound and annotated.",
      "\"More\" is a pronoun of quantity and cannot be bound in vellum or annotated. The participles have nothing sensible to modify in this version.",
      "Only the copy of the book could be \"bound in vellum and annotated\" by the printer's hand, so the main clause must begin with \"the copy.\" The modifier then attaches correctly.",
      "\"Acquiring the copy\" is an action, and an action cannot be bound in vellum or annotated by hand. This subject misattaches the opening modifier."
    ]
  },
  "q:cfe19c4b127bb3e9": {
    "options": [
      "Not only did she excel in math, but she also mastered science.",
      "Not only did she excel in math, she also mastered science.",
      "Not only she excelled in math, but also she mastered science.",
      "Not only did she excel in math, but, she also mastered science."
    ],
    "explanations": [
      "The pair \"not only... but also\" is complete, the inverted \"did she excel\" follows \"Not only\" correctly, and a comma precedes \"but\" with no comma after it. The two halves are parallel.",
      "\"Not only\" sets up a correlative pair, but \"but\" is missing. Without it, the second clause is joined by a comma alone, a comma splice.",
      "After \"Not only\" at the start of a clause, the subject and auxiliary invert: \"did she excel,\" not \"she excelled.\" Placing \"also\" before the subject also breaks the parallel.",
      "The comma after \"but\" is misplaced. A comma belongs before the coordinating conjunction, not directly after it."
    ]
  },
  "q:f35e6be00e38d5e7": {
    "options": [
      "By comparison,",
      "Even so,",
      "To that end,",
      "In retrospect,"
    ],
    "explanations": [
      "\"By comparison\" introduces a contrast with another case, but no second city or situation is being compared. The investments relate to Copenhagen's own goal.",
      "\"Even so\" signals that the second sentence holds despite the first. The investments do not happen in spite of the goal; they are made to achieve it.",
      "The second sentence describes actions, investing in cycling, wind energy, and efficient buildings, taken to achieve the carbon-neutral goal in the first. \"To that end\" means \"in order to achieve that goal.\"",
      "\"In retrospect\" signals looking back on something after the fact. The investments are part of pursuing a goal set for 2025, not a reflection on the past."
    ]
  },
  "q:8e83b01f1c67cd1c": {
    "options": [
      "Microplastics are pervasive in human bodies and may pose health risks",
      "Microplastics mainly affect factory workers who handle industrial plastics",
      "Synthetic clothing fibers have been proven to damage cells in the lungs",
      "Most microplastics in the body are too large to pass into the bloodstream"
    ],
    "explanations": [
      "The passage covers where microplastics are found in the body, where they come from, and what early research suggests about harm. Pervasiveness plus possible health risks captures the whole passage.",
      "Industrial processes are named only as one source of the particles. Nothing in the passage says factory workers are the main group affected; the tissues mentioned are those of people in general.",
      "Synthetic fibers are one source among three, and the passage says the health effects are \"still being studied,\" with early research only suggesting harm. Nothing has been \"proven.\"",
      "The passage states that microplastics \"have been found in human blood,\" so they do enter the bloodstream. This contradicts the text."
    ]
  },
  "q:d09c06897aa9ea21": {
    "options": [
      "results she",
      "results, she",
      "results, and she",
      "results and she"
    ],
    "explanations": [
      "\"She was initially skeptical of the results\" and \"she ultimately published a paper\" are two independent clauses. Placing them side by side with nothing between them creates a run-on.",
      "A comma alone between two independent clauses is a comma splice. The second clause has its own subject \"she\" and verb \"published,\" so it needs a conjunction or stronger punctuation.",
      "Each half is an independent clause with its own subject and verb, so they are joined by a comma plus the coordinating conjunction \"and.\"",
      "\"And\" joins the two independent clauses, but when both have their own subject and verb, a comma is needed before the conjunction."
    ]
  },
  "q:f995598193ce87e7": {
    "options": [
      "have been",
      "are",
      "was",
      "were"
    ],
    "explanations": [
      "\"Have been\" is plural, agreeing with \"papers\" or the listed items, but those sit inside modifying phrases. The subject is the singular noun \"stack.\"",
      "\"Are\" is plural and present tense. The subject \"stack\" is singular, and \"by the end of the semester\" places the description in the past.",
      "The subject is \"stack,\" which is singular; \"of papers\" and the \"which included...\" clause only describe it. \"Was\" is singular and past, matching \"by the end of the semester.\"",
      "\"Were\" is past tense, which fits, but it is plural. The subject is the singular \"stack,\" not \"papers.\""
    ]
  },
  "q:b1c20acee0fcb6de": {
    "options": [
      "are carrying",
      "have carried",
      "carries",
      "carry"
    ],
    "explanations": [
      "\"Are carrying\" is plural and progressive. The subject \"each\" is singular, and a vaccine's side-effect profile is a standing fact, not an action in progress.",
      "\"Have carried\" is plural, agreeing with \"vaccines\" in the prepositional phrase rather than the singular subject \"each.\" The perfect tense also fits poorly with the present-tense context.",
      "\"Each\" is always singular, even when followed by \"of the vaccines.\" The singular present-tense verb \"carries\" agrees with it.",
      "\"Carry\" is plural. It is drawn by the nearby \"vaccines,\" but the subject is \"each,\" which takes a singular verb."
    ]
  },
  "q:b03cc313a7662c4a": {
    "options": [
      "our",
      "your",
      "they're",
      "their"
    ],
    "explanations": [
      "\"Our\" is first person. The antecedent is \"Students,\" described in the third person, so the possessive must be third person as well.",
      "\"Your\" shifts to second person in the middle of a sentence about \"Students.\" The sentence talks about the students rather than addressing them, so the pronoun must be third person.",
      "\"They're\" is a contraction of \"they are,\" not a possessive. The sentence needs a word showing whose degrees are meant.",
      "The antecedent is \"Students,\" a third-person plural noun, so the third-person plural possessive \"their\" is correct: credit toward the students' degrees."
    ]
  },
  "q:f315cb765fed56e5": {
    "options": [
      "The beetle's northern range limit has moved 200 kilometers in thirty years, with the fastest advance coming in the most recent decade.",
      "Winter minimum temperatures in the region have risen by 2 degrees Celsius since 1990, most sharply in the north.",
      "Larvae in laboratory tests survive winter temperatures 3 degrees lower than researchers had previously reported.",
      "The beetle is absent from a warm coastal corridor without the host tree and present in a colder inland corridor lined with it."
    ],
    "explanations": [
      "A 200-kilometer range shift documents the spread itself, which both explanations are trying to account for. It does not favor either one.",
      "Rising winter minimum temperatures support the warming explanation, the rival account. The student wants evidence for the host-tree explanation.",
      "Larvae surviving colder temperatures than previously reported strengthens the idea that winter survival drives the spread. That is evidence for the warming account, not the host-tree one.",
      "This sets the two causes against each other: a warm corridor without the host tree has no beetles, while a colder corridor lined with the tree does. The host tree, not warmth, tracks the beetle's presence."
    ]
  },
  "q:92d2c3f2c764e98b": {
    "options": [
      "Battery storage cut the grid's gas use but left its need for backup capacity largely intact.",
      "Battery storage eliminated the grid's reliance on gas peaker plants, even during the coldest month of the year.",
      "The grid's batteries failed to perform as designed during the coldest month, when they ran out after one day.",
      "Cold weather prevents batteries from discharging electricity, which is why the peakers ran at prior levels."
    ],
    "explanations": [
      "Both halves appear in the text: peaker use fell by sixty percent, yet the operators concluded that daily-sized storage \"does not by itself address the days that determine how much backup capacity a grid must keep.\"",
      "\"Eliminated\" overstates a sixty percent reduction, and in the coldest month the peakers \"ran at their prior levels.\" This contradicts the passage's central qualification.",
      "The batteries performed to their four-hour rating; they were simply \"exhausted by the second consecutive day\" of low sun and high demand, not after one day. The text does not say they failed to work as designed.",
      "The passage attributes the shortfall to consecutive days of \"low sun and high demand,\" not to cold stopping the batteries from discharging. This invents a mechanism the text never mentions."
    ]
  },
  "q:4864de93e331295e": {
    "options": [
      "It provides evidence about the tool marks that will later be shown to be fabricated by the gallery's staff.",
      "It states the author's own view of the sculpture's condition, which the workshop evidence then confirms.",
      "It shows how long and how firmly the standard reading held before the new evidence revises it.",
      "It raises a question about the rough tool marks that the rest of the text declines to answer."
    ],
    "explanations": [
      "Nothing in the text suggests the tool marks were fabricated or misreported. The marks are real; what changes is how they are interpreted.",
      "The second sentence reports the gallery's standard reading, not the author's view. The author ends by concluding the opposite, that the roughness was \"a workshop practice.\"",
      "\"This is the standard reading, and for two centuries it was the only one\" establishes how long and how firmly the unfinished interpretation held, so that the \"however\" evidence has something settled to overturn.",
      "The text does answer the question about the rough marks, in its final sentence: roughness at the rear was \"a workshop practice,\" not a sign of abandonment."
    ]
  },
  "q:3bd717af69d5c42a": {
    "options": [
      "was",
      "were",
      "have been",
      "are"
    ],
    "explanations": [
      "\"The number of\" takes a singular verb, and the two years following the bond issue are a closed past period compared against earlier projections. The singular past \"was\" fits both requirements.",
      "\"Were\" is plural, agreeing with \"households,\" but that noun sits inside the prepositional phrase \"of households.\" The subject \"The number\" is singular.",
      "\"Have been\" is plural and present perfect. The subject \"The number\" is singular, and the two-year window is a finished past period, so the perfect aspect clashes with it.",
      "\"Are\" is plural and present tense. The subject is the singular \"The number,\" and the sentence describes a completed past period, not the present."
    ]
  },
  "q:1ee3edd376fcfcb3": {
    "options": [
      "her sister, Mireille,",
      "her sister: Mireille",
      "her sister Mireille",
      "her sister; Mireille,"
    ],
    "explanations": [
      "Commas around \"Mireille\" mark the name as nonessential, implying Torres has only one sister. The previous sentence says she has four, so the name is needed to identify which one.",
      "A colon must follow a complete clause, and \"she credits her sister\" is not complete without its object phrase. The colon also wrongly cuts the verb \"credits\" from the rest of its phrase.",
      "Torres has four sisters, so the name \"Mireille\" is essential to identify which sister is meant. Essential identifying elements take no commas.",
      "A semicolon joins two independent clauses, but \"Mireille, with teaching her...\" is not a clause. The semicolon severs the verb \"credits\" from the name it needs."
    ]
  },
  "q:75ec8acd85f77184": {
    "options": [
      "The researchers analyzed the samples and found that the samples contained mercury.",
      "The researchers analyzed them and found that the samples contained mercury.",
      "They analyzed the samples and found that the samples contained mercury.",
      "The researchers analyzed the samples and found that it contained mercury."
    ],
    "explanations": [
      "Replacing the ambiguous \"they\" with the specific noun \"the samples\" makes clear what contained mercury, and no new unclear pronoun is introduced.",
      "\"Them\" has no antecedent, since \"the samples\" has not yet been mentioned when the pronoun appears. This trades one unclear pronoun for another.",
      "\"They\" at the start has no antecedent at all; the reader cannot tell who did the analyzing. Removing \"The researchers\" creates a new ambiguity.",
      "\"It\" is singular, but the only candidate antecedent, \"the samples,\" is plural. The pronoun does not agree in number, so the reference is still unclear."
    ]
  },
  "q:98fd2f8b9a2360b5": {
    "options": [
      "However the results, were inconclusive.",
      "However the results were inconclusive.",
      "However, the results were inconclusive.",
      "However; the results were inconclusive."
    ],
    "explanations": [
      "There is no comma after the introductory \"However,\" and the comma after \"results\" wrongly separates the subject from its verb \"were.\"",
      "A transitional word at the start of a sentence must be followed by a comma. Without it, \"However the results\" runs together and the transition is not set off.",
      "A transitional word such as \"however\" at the beginning of a sentence is followed by a comma, setting it off from the clause \"the results were inconclusive.\"",
      "A semicolon joins two independent clauses. \"However\" is a single transitional word, not a clause, so it cannot stand on one side of a semicolon."
    ]
  },
  "q:9f935c350b10a9a9": {
    "options": [
      "Tree canopy cools streets by day but gives little relief overnight, when heat illness peaks.",
      "Tree canopy has been shown to have no measurable effect on urban street temperatures at any hour of the day or night.",
      "Municipal governments should stop funding urban tree-planting programs and invest the savings in other cooling measures.",
      "Pavement that stores heat during the day is the principal cause of heat-related illness in the thirty-one cities studied."
    ],
    "explanations": [
      "The text grants that canopy makes streets \"several degrees cooler at midday\" and then shows the difference \"nearly vanishing\" between two and five in the morning, \"the hours when heat-related illness is most often recorded.\" That is the whole argument.",
      "The passage confirms a measurable midday cooling of several degrees across thirty-one cities. Saying there is \"no measurable effect\" at any hour contradicts the text.",
      "The authors call trees \"a real intervention aimed at the wrong hours,\" not a waste. Telling cities to stop funding tree planting turns a hedged conclusion into a policy demand the text never makes.",
      "Pavement releasing stored heat is given as a reason the nighttime temperature gap closes, not as the cause of heat illness. Calling it \"the principal cause\" is unsupported by the text."
    ]
  },
  "q:6c7f8824dee4c469": {
    "options": [
      "show how habituation can dull a person’s awareness",
      "describe the engineering of the pedestrian bridge Elena crosses",
      "explain why bridges sway in windy conditions",
      "criticize Elena’s careless habit of reading while walking"
    ],
    "explanations": [
      "Elena goes from noticing the swaying bridge to crossing it without looking, and the passage generalizes: \"the remarkable became invisible, and the frightening became mundane.\" The passage illustrates how habituation dulls awareness.",
      "The bridge's engineering is never discussed. The passage mentions only that it sways in wind and stands forty feet above the river, as background for Elena's changing perception.",
      "The passage does not explain why bridges sway. The swaying is simply the thing Elena stops noticing; the focus is on her adaptation, not the physics.",
      "The narrator does not criticize Elena. Reading while walking is presented as a sign of how fully she has adapted, and the ending is reflective, not judgmental."
    ]
  },
  "q:05dadd0495867097": {
    "options": [
      "most smokers eventually quit voluntarily when prices rise",
      "higher cigarette taxes do not actually reduce smoking rates",
      "addiction is driven by compulsion, not free choice",
      "economists are not qualified to study health behaviors"
    ],
    "explanations": [
      "The passage never mentions smokers quitting voluntarily. The critics' objection concerns brain chemistry and compulsion, not quitting behavior.",
      "The passage presents higher taxes reducing smoking as a success of the model, and the critics do not dispute it. Their objection is to the assumption of rational choice.",
      "The critics \"argue the model ignores neurological evidence that addiction involves compulsive behavior driven by altered brain chemistry, which undermines the assumption of free, rational choice.\"",
      "Nothing in the passage questions economists' qualifications. The critics attack a specific assumption of the model, not the discipline."
    ]
  },
  "q:0680a95a46a885c2": {
    "options": [
      "it's",
      "their",
      "its",
      "his"
    ],
    "explanations": [
      "\"It's\" is a contraction of \"it is.\" The sentence needs a possessive pronoun to show whose final report it was.",
      "\"Their\" is plural, but \"committee\" is acting as a single unit that releases one report, so the singular possessive is required.",
      "\"The committee\" is a collective noun acting as one body, so it takes the singular possessive \"its.\" Note that \"its\" with no apostrophe is the possessive form.",
      "\"His\" refers to a single male person. A committee is a group, not a man, so a personal pronoun of this kind cannot refer to it."
    ]
  },
  "q:ff65b0562eb40cca": {
    "options": [
      "The project was challenging; nevertheless the team succeeded.",
      "The project was challenging nevertheless, the team succeeded.",
      "The project was challenging, nevertheless the team succeeded.",
      "The project was challenging; nevertheless, the team succeeded."
    ],
    "explanations": [
      "The semicolon before \"nevertheless\" is correct, but a conjunctive adverb that begins a clause must be followed by a comma. The comma after \"nevertheless\" is missing.",
      "With no punctuation before \"nevertheless,\" the first clause runs into the adverb, and the comma after it then fails to separate the two independent clauses properly.",
      "A comma before \"nevertheless\" with no comma after it creates a comma splice. A conjunctive adverb cannot join two independent clauses with just a comma.",
      "Two independent clauses joined by a conjunctive adverb take a semicolon before the adverb and a comma after it: \"; nevertheless, the team succeeded.\""
    ]
  },
  "q:989208cbed92d8b1": {
    "options": [
      ", it",
      "; it",
      ": it",
      " it"
    ],
    "explanations": [
      "\"The nickel-titanium alloy resists corrosion...\" and \"it costs roughly three times as much...\" are both independent clauses. A comma alone between them is a comma splice; the later \"however\" cannot join them.",
      "Both halves are independent clauses, so a semicolon correctly joins them. The postponed \"however\" sits inside the second clause and does not affect the punctuation at the join.",
      "A colon introduces an explanation or specification of what comes before it. The second clause states a countervailing drawback, not an elaboration, so a colon does not fit the relationship.",
      "With no punctuation, two independent clauses run together into a fused sentence. Something must mark the boundary between \"replaced\" and \"it.\""
    ]
  },
  "q:aad6b4b6c86fc10c": {
    "options": [
      "excavators found the wooden furniture almost perfectly preserved.",
      "the wooden furniture was found almost perfectly preserved by excavators.",
      "preservation of the wooden furniture was almost perfect when excavators reached it.",
      "almost perfect preservation of the wooden furniture greeted the excavators."
    ],
    "explanations": [
      "Starting the main clause with \"excavators\" says the excavators were coated in ash and buried for two millennia. The modifier must describe the furniture.",
      "What was coated in ash and buried under sediment is the wooden furniture, so the main clause must begin with \"the wooden furniture.\" The participles then attach to the noun they describe.",
      "\"Preservation\" is an abstract noun that cannot be coated in volcanic ash or buried under sediment. This subject leaves the opening modifier dangling.",
      "\"Almost perfect preservation\" is a quality, not a physical object. It could not have been coated in ash and buried, so the modifier misattaches."
    ]
  },
  "q:b700e90c7f550038": {
    "options": [
      "discovered the finding",
      "discovered; the finding",
      "discovered and the finding",
      "discovered, the finding"
    ],
    "explanations": [
      "\"The particle was discovered\" and \"the finding prompted a reassessment\" are two independent clauses. Placing them side by side with nothing between them creates a run-on.",
      "\"The particle was discovered\" and \"the finding prompted a reassessment...\" are both independent clauses, and a semicolon correctly separates them.",
      "\"And\" joins the two independent clauses, but without a comma before it. Two full clauses joined by a coordinating conjunction need a comma before the conjunction.",
      "A comma alone between two independent clauses is a comma splice. \"The particle was discovered\" is a complete sentence, as is \"the finding prompted a reassessment.\""
    ]
  },
  "q:36e7d5ba628c7b2a": {
    "options": [
      "Because the trail was steep, the hikers reached the summit.",
      "The trail was steep and the hikers, reached the summit.",
      "The trail was steep, although, the hikers reached the summit.",
      "Although the trail was steep, the hikers reached the summit."
    ],
    "explanations": [
      "\"Because\" signals a cause, suggesting the hikers reached the summit as a result of the trail being steep. The goal is to show contrast, not cause.",
      "\"And\" simply adds the two ideas without signaling contrast, and the comma after \"hikers\" wrongly separates the subject from its verb \"reached.\"",
      "\"Although\" does signal contrast, but it is misplaced and wrapped in commas. Set off this way, it cannot subordinate the second clause, leaving a comma splice.",
      "\"Although\" subordinates the first idea and signals that the hikers succeeded despite the steep trail. The comma after the introductory clause is correctly placed."
    ]
  },
  "q:093c5458e7a5d5fa": {
    "options": [
      "Likewise",
      "Thus",
      "Even so",
      "For instance"
    ],
    "explanations": [
      "\"Likewise\" signals similarity, but a population decline is not similar to habitat loss; it is caused by it. A result transition is needed.",
      "Losing its habitat caused the population to decline. \"Thus\" signals a logical result or consequence, which is exactly the relationship here.",
      "\"Even so\" signals that something happened despite the first statement. The decline did not occur in spite of habitat loss; it followed from it.",
      "\"For instance\" introduces an example of the previous statement. A sharp population decline is a consequence of habitat loss, not an illustration of it."
    ]
  },
  "q:7d55d0ec8b29aafd": {
    "options": [
      "As a result",
      "Similarly",
      "In addition",
      "In contrast"
    ],
    "explanations": [
      "\"As a result\" claims that rural decline was caused by urban growth. The sentences describe two opposite trends; they do not assert one caused the other.",
      "\"Similarly\" signals that the second trend resembles the first. Growth and decline are opposites, not similar developments.",
      "\"In addition\" merely adds a second fact without acknowledging that the two trends move in opposite directions. The relationship is contrast.",
      "Urban areas grew while rural populations declined, two opposite trends. \"In contrast\" highlights exactly this difference."
    ]
  },
  "q:10e07d74b88e51ac": {
    "options": [
      "Nevertheless,",
      "Similarly,",
      "As a result,",
      "Admittedly,"
    ],
    "explanations": [
      "\"Nevertheless\" would mean the joints opened gaps despite the unexpected cold-weather behavior. In fact the gaps opened because of it.",
      "\"Similarly\" requires a parallel case already described, but no comparable example has been given. The third sentence states a consequence, not a parallel.",
      "The engineers did not anticipate the alloy's behavior in cold, and the third sentence states what followed: the joints contracted and opened gaps. \"As a result\" signals this cause-and-effect relationship.",
      "\"Admittedly\" introduces a concession that the writer will then counter, but nothing after it pushes back. The sentence states a straightforward consequence."
    ]
  },
  "q:09e9aa82de34f0f7": {
    "options": [
      "'Mrs. Corrigan had lived in the village forty years, and there was no household in it she had not entered at one time or another.'",
      "'She rose at the meeting and said plainly that the bridge should be repaired before winter, and the room was quiet while she spoke.'",
      "'The council voted for the bridge; three men who had never met her that season each explained that Mrs. Corrigan had been quite firm about it.'",
      "'Her husband had been a quarryman, and the road took its name from the pit he opened in the hillside above the village.'"
    ],
    "explanations": [
      "Entering every household over forty years shows familiarity with the village, not authority exercised through others. No one speaks on her behalf here.",
      "Here Corrigan \"rose at the meeting and said plainly\" what should be done. That is public, direct speech by Corrigan herself, exactly what the student's claim says is not the mechanism of her influence.",
      "The council votes for the bridge, and \"three men who had never met her that season each explained that Mrs. Corrigan had been quite firm about it.\" Her influence travels through other people's speech, with no public statement from her.",
      "The husband's trade and the origin of the road's name are background facts. They say nothing about how Corrigan's influence operates."
    ]
  },
  "q:d983c36be3dd01f6": {
    "options": [
      "It confirms that the committee intended to insult Kessler by the placement, as his letters had claimed.",
      "It supplies the artist's own explanation for the placement of his canvases in the small back room.",
      "It qualifies the room's disadvantages with facts that undercut reading the placement as deliberate disrespect.",
      "It argues that the back room was the most desirable location in the exhibition, given its heavy traffic."
    ],
    "explanations": [
      "The sentence says the room \"was assigned by lot,\" which removes any intent. It argues against the idea that the committee meant to insult Kessler.",
      "The sentence draws on the floor plan and \"the committee's records,\" not the artist. His letters were cited earlier as supporting the slight reading that the passage is complicating.",
      "The sentence keeps the room's drawbacks, \"small, poorly lit,\" but adds that it was \"unavoidable\" and \"assigned by lot.\" Those facts undercut the reading of the placement as deliberate disrespect.",
      "The text never ranks the back room as the best location; it still calls the room \"small, poorly lit.\" Heavy traffic offsets the disadvantages but does not make the room most desirable."
    ]
  },
  "q:e4f76d156e5ae9ea": {
    "options": [
      "Dr. Elena Voss, a marine biologist at the Scripps Institution of Oceanography has spent",
      "Dr. Elena Voss, a marine biologist at the Scripps Institution of Oceanography, has spent",
      "Dr. Elena Voss a marine biologist at the Scripps Institution of Oceanography, has spent",
      "Dr. Elena Voss a marine biologist at the Scripps Institution of Oceanography has spent"
    ],
    "explanations": [
      "The comma after \"Voss\" opens the appositive, but no comma closes it after \"Oceanography.\" A nonessential appositive must be set off on both sides.",
      "\"A marine biologist at the Scripps Institution of Oceanography\" is a nonessential appositive describing Dr. Voss. It is correctly enclosed by commas before and after, with the verb \"has spent\" following.",
      "The comma after \"Oceanography\" closes an appositive that was never opened; the comma after \"Voss\" is missing. Both commas are required.",
      "With no commas, the appositive runs together with the name and the verb. The nonessential description must be set off by a pair of commas."
    ]
  },
  "q:fd0a092d64becd07": {
    "options": [
      "because",
      "the fact",
      "given",
      "for the fact"
    ],
    "explanations": [
      "\"Because\" introduces a subordinate clause, but \"not only\" was followed by the prepositional phrase \"for the rigor.\" The two halves of the correlative must match in form.",
      "\"The fact\" drops the preposition. \"Not only for the rigor\" requires \"but also for the fact\" so that both halves are prepositional phrases beginning with \"for.\"",
      "\"Given\" substitutes a different preposition-like word for \"for.\" The correlative pattern \"not only for... but also for...\" requires the same preposition in both halves.",
      "\"Not only\" is followed by the prepositional phrase \"for the rigor,\" so \"but also\" must be followed by a matching prepositional phrase. \"For the fact that...\" keeps the two halves parallel."
    ]
  },
  "q:0b4c372c7dfa65cd": {
    "options": [
      "later, shows",
      "later; shows",
      "later -- shows",
      "later shows"
    ],
    "explanations": [
      "The comma separates the compound subject \"Neither the sediment cores... nor the pollen record assembled a decade later\" from its verb \"shows.\" No comma may come between a subject and its verb.",
      "A semicolon needs an independent clause on each side. The right side, \"shows any sign...,\" has no subject, and the mark also cuts the subject from its verb.",
      "A single dash here separates the subject from its verb \"shows.\" The modifier \"assembled a decade later\" invites a mark, but none belongs at this spot.",
      "\"Shows\" is the verb of the compound subject introduced by \"Neither... nor,\" and nothing may separate a subject from its verb. The long modifier \"assembled a decade later\" does not change that."
    ]
  },
  "q:347a59b356186fff": {
    "options": [
      "meet",
      "have met",
      "meets",
      "were meeting"
    ],
    "explanations": [
      "\"Meet\" is plural. It is drawn by \"prototypes,\" but that noun is inside the phrase \"of the two prototypes\"; the subject is the singular pronoun \"Neither.\"",
      "\"Have met\" is plural, agreeing with the nearby \"prototypes\" rather than the singular subject \"Neither.\" The perfect aspect also fits poorly with a standing specification.",
      "\"Neither\" used alone as a pronoun is singular, and \"of the two prototypes\" is a prepositional phrase that cannot supply the subject. The singular present \"meets\" states a standing fact about the prototypes.",
      "\"Were meeting\" is plural, disagreeing with \"Neither,\" and the progressive form turns a fixed property, whether the prototypes meet the tolerance, into an action in progress."
    ]
  },
  "q:fad5858173671916": {
    "options": [
      "Similarly,",
      "In fact,",
      "At best,",
      "Granted,"
    ],
    "explanations": [
      "\"Similarly\" would require the third sentence to present a parallel case to the Chinese drills. Instead it draws a conclusion about how the standard account should be read.",
      "\"In fact\" signals that the next sentence strengthens or corrects the previous one. The third sentence does not add new fact; it limits what the standard account can claim.",
      "Given that Chinese farmers used comparable drills a thousand years earlier, the most generous reading of the standard account is that it describes a reinvention. \"At best\" marks that ceiling on the claim.",
      "\"Granted\" concedes a point the writer intends to push back against, but nothing follows to overturn it. The writer endorses the qualified verdict rather than conceding it."
    ]
  },
  "q:83959fbc2223cbcb": {
    "options": [
      "Frida Kahlo's paintings often depicted her own experiences with physical suffering and drew heavily on the rich cultural traditions of Mexico.",
      "Frida Kahlo was a Mexican artist who was married to Diego Rivera, and she painted highly personal and emotional works about identity and her physical suffering.",
      "Once seen mainly as Diego Rivera's wife, Frida Kahlo has since come to be regarded as one of the most important artists of the twentieth century.",
      "Frida Kahlo is now considered one of the most influential artists of the twentieth century by many art historians, critics, and museum curators."
    ],
    "explanations": [
      "This describes the subjects of Kahlo's paintings, suffering and Mexican traditions. It says nothing about how her reputation changed over time.",
      "This combines her marriage and her painting subjects into a static description. It mentions Rivera but does not show any shift in how she was regarded.",
      "\"Once seen mainly as Diego Rivera's wife\" gives the earlier view, and \"has since come to be regarded as one of the most important artists\" gives the later one. The sentence traces the reputation's evolution.",
      "This states only her current standing. Without the earlier view, in which she was seen mainly as Rivera's wife, there is no change over time to emphasize."
    ]
  },
  "q:9096b79c52d347b0": {
    "options": [
      "That said",
      "Indeed",
      "Similarly",
      "In other words"
    ],
    "explanations": [
      "The first sentence praises the battery's capacity, and the second names a drawback, the six-hour recharge. \"That said\" qualifies the praise and introduces the limitation.",
      "\"Indeed\" would strengthen or confirm the first sentence. A slow recharge time undercuts the praise rather than reinforcing it.",
      "\"Similarly\" presents the second sentence as another point like the first, as if the long recharge were a second strength. It is a drawback.",
      "\"In other words\" signals a restatement of the first sentence. The recharge time is a new, contrasting fact, not a rephrasing of the capacity claim."
    ]
  },
  "q:4c79f40f7981cb57": {
    "options": [
      "By rejecting the claim that adolescents fall asleep later than adults and cannot compensate.",
      "By accepting the biology while questioning whether it accounts for these schools' improvements.",
      "By arguing that shorter bus rides are the true cause of the improvement in first-period grades.",
      "By concluding that later start times have no effect on attendance or other student outcomes."
    ],
    "explanations": [
      "Text 2 explicitly affirms the biology: \"The biology is not in doubt.\" It never rejects the claim that adolescents fall asleep later.",
      "Text 2's final sentence draws the line: \"The biology is not in doubt; its role in these particular results is.\" The author accepts the sleep science but questions whether it explains these schools' gains, given the other changes made.",
      "Text 2 mentions the shorter bus rides as one of several changes made at the same time, alongside moved practice times. It does not single out bus rides as the true cause.",
      "Text 2 never says later start times have no effect. It questions what caused the improvements, not whether the improvements were real."
    ]
  },
  "q:63c32f6d825a5e69": {
    "options": [
      "General claim supported by specific evidence",
      "A series of unrelated facts about city life",
      "An argument followed by a counterargument",
      "A step-by-step account of how one study was run"
    ],
    "explanations": [
      "The passage opens with a general claim, that green spaces reduce stress, and supports it with specifics: lower cortisol, improved mood, and 30 percent lower anxiety within a 10-minute walk.",
      "The facts are all related; each one supports the opening claim about green spaces and stress. Nothing in the passage is unrelated or about city life in general.",
      "No counterargument appears. Every sentence points the same way, in favor of green spaces reducing stress, so there is no opposing view presented.",
      "The passage reports findings but does not describe the steps of a study. It mentions a result about a 10-minute walk, not how any study was conducted."
    ]
  },
  "q:7bc22ec3bfe9debd": {
    "options": [
      "fell",
      "has fallen",
      "had fallen",
      "falls"
    ],
    "explanations": [
      "\"Fell\" is simple past, which closes the change off in the past. \"Since 2019\" marks a span continuing to now, and the simple past leaves that phrase unattached.",
      "\"Since\" plus a past starting point describes a span running from 2019 to the present, which is exactly what the present perfect expresses. \"Has fallen\" is correct.",
      "\"Had fallen\" is past perfect, which requires a later past reference point that the fall preceded. No such point is given; the span runs to the present.",
      "\"Falls\" is simple present, describing a habitual or general action. It cannot express a change measured across a span that began in 2019."
    ]
  },
  "q:374726bf92e8e714": {
    "options": [
      "He, likes tea and coffee.",
      "He likes, tea and coffee.",
      "He likes tea and coffee.",
      "He likes tea, and coffee."
    ],
    "explanations": [
      "The comma after \"He\" separates the subject from its verb \"likes.\" No comma belongs between a subject and its verb.",
      "The comma after \"likes\" separates the verb from its objects \"tea and coffee.\" No comma belongs between a verb and its object.",
      "\"Tea and coffee\" are two items joined by \"and,\" not two independent clauses, so no comma is needed anywhere. The sentence is correct without punctuation.",
      "A comma before \"and\" is used when the conjunction joins two independent clauses or items in a series of three or more. Here it joins just two nouns, so no comma is needed."
    ]
  },
  "q:95bc18a189e41817": {
    "options": [
      "The Mona Lisa, which was painted by Leonardo da Vinci in the early sixteenth century is",
      "The Mona Lisa which was painted by Leonardo da Vinci in the early sixteenth century, is",
      "The Mona Lisa which was painted by Leonardo da Vinci in the early sixteenth century is",
      "The Mona Lisa, which was painted by Leonardo da Vinci in the early sixteenth century, is"
    ],
    "explanations": [
      "The comma after \"Mona Lisa\" opens the nonrestrictive clause, but no comma closes it before \"is.\" A clause set off on one side must be set off on the other.",
      "The comma before \"is\" closes a clause that was never opened; there is no comma after \"Mona Lisa.\" Both commas are required.",
      "With no commas, the nonrestrictive \"which\" clause runs together with the subject and verb. A clause introduced by \"which\" that adds extra information must be set off by commas.",
      "\"Which was painted by Leonardo da Vinci in the early sixteenth century\" is a nonrestrictive clause adding extra information. It is correctly enclosed by commas on both sides."
    ]
  },
  "q:3df7d4639c9547de": {
    "options": [
      ", Adeyemi",
      ". Adeyemi",
      ": Adeyemi",
      "; Adeyemi"
    ],
    "explanations": [
      "A comma cannot introduce a list after a complete clause, and here it would be indistinguishable from the commas inside the items, such as the one after \"Adeyemi.\"",
      "A period requires a complete sentence on the right, but \"Adeyemi, who studies coral disease; Vogt...\" is a list of names with descriptions, not a sentence.",
      "The clause before the blank is complete and announces a list. A colon introduces that list after a complete clause, and the semicolons that follow correctly separate items containing internal commas.",
      "A semicolon needs an independent clause on each side. The list of speakers on the right is a series of noun phrases, not a clause, so it would be a fragment."
    ]
  },
  "q:5804255fcc8cc60d": {
    "options": [
      "techniques however recent innovations",
      "techniques, however, recent innovations",
      "techniques: however, recent innovations",
      "techniques; however, recent innovations"
    ],
    "explanations": [
      "Two independent clauses run together with no punctuation at all, a fused sentence. \"However\" is also not set off, so the shift in direction is unmarked.",
      "A comma before \"however\" between two independent clauses creates a comma splice. A conjunctive adverb cannot join full clauses with only commas.",
      "A colon introduces an explanation or specification of the preceding clause. The second clause states a contrasting development, which is not the relationship a colon signals.",
      "\"Traditional methods... have relied on filtration and chemical treatment techniques\" and \"recent innovations... have made desalination a viable option\" are independent clauses. A semicolon joins them, and the conjunctive adverb \"however\" is followed by a comma."
    ]
  },
  "q:b5b372e86d900386": {
    "options": [
      "'I have never been able to say, even to my mother, what that winter took from us or what it left behind.'",
      "'Grief entered the shop that year and did not leave it, though the customers came and went as before.'",
      "'The scale in the window, which had weighed everything we sold for thirty years, that spring weighed nothing at all.'",
      "'In March I ruled a new column, headed it with his name, and entered there the hours I could not account for.'"
    ],
    "explanations": [
      "This line names the loss directly, if obliquely, in \"what that winter took from us,\" and it involves no record-keeping. The argument requires grief carried by bookkeeping, not stated.",
      "\"Grief entered the shop that year\" states grief outright, which violates the first half of the student's claim that the poem withholds direct statements of grief.",
      "The scale that \"weighed nothing at all\" is an image of a shop in decline, but a scale in a window is not record-keeping. No accounting is performed in this line.",
      "Ruling a new column, heading it with the brother's name, and entering \"the hours I could not account for\" is bookkeeping throughout. Grief is never named; the ledger itself carries what the speaker will not say."
    ]
  },
  "q:2edd7331e7e2adbd": {
    "options": [
      "have",
      "were having",
      "are having",
      "has"
    ],
    "explanations": [
      "\"Have\" is plural, drawn by the nearby \"tutors,\" but that noun is inside the phrase \"of the volunteer tutors.\" The subject \"Each\" is singular.",
      "\"Were having\" is plural and past progressive. The subject \"Each\" is singular, and the sentence states a standing requirement in the present.",
      "\"Are having\" is plural, disagreeing with the singular \"Each,\" and the progressive form is wrong for a standing requirement of forty hours of training.",
      "\"Each\" is an indefinite pronoun that takes a singular verb, even when followed by the plural \"of the volunteer tutors.\" \"Has\" agrees."
    ]
  },
  "q:68e17ded36ceea13": {
    "options": [
      "who",
      "whom",
      "which",
      "whose"
    ],
    "explanations": [
      "\"Who\" refers to people. The antecedent is \"The car,\" a thing, so a person pronoun cannot be used.",
      "\"Whom\" is the object form for people. The antecedent is a thing, and the pronoun is also the subject of \"was parked,\" so it fails on both counts.",
      "\"Which\" refers to things and is the pronoun used in nonrestrictive clauses set off by commas. The antecedent \"The car\" is a thing, so \"which\" is correct.",
      "\"Whose\" is possessive and would need a following noun that the car owns. Here the pronoun itself is the subject of \"was parked.\""
    ]
  },
  "q:442e81ee40d786d5": {
    "options": [
      "has been",
      "have been",
      "were",
      "are"
    ],
    "explanations": [
      "\"Each\" is singular, and the plural \"stations\" in the prepositional phrase cannot change that. \"Ever since\" requires the present perfect, reaching from 2016 to now, so \"has been\" is correct.",
      "\"Have been\" is the right tense but is plural. The subject is the singular \"Each,\" not the \"stations\" inside the prepositional phrase.",
      "\"Were\" is plural and simple past. It closes the action off in the past, contradicting \"ever since,\" and it does not agree with the singular \"Each.\"",
      "\"Are\" is plural and simple present. It cannot reach back to the 2016 starting point that \"ever since\" demands, and it disagrees with the singular \"Each.\""
    ]
  },
  "q:84ff13a3c48dd0c6": {
    "options": [
      ", a claim",
      "; a claim",
      ": a claim",
      ". A claim"
    ],
    "explanations": [
      "\"A claim that three later dating studies eventually supported\" is a summative appositive renaming the whole preceding statement. Such an appositive is attached at the end of a sentence with a comma.",
      "A semicolon requires an independent clause on the right. \"A claim that three later dating studies eventually supported\" is a noun phrase with no main verb.",
      "A colon introduces material that specifies or explains what the clause promised. This phrase simply renames the assertion already made, so a colon does not fit.",
      "A period would leave \"A claim that three later dating studies eventually supported\" standing alone. It has no main verb and cannot be a sentence."
    ]
  },
  "q:a1c679cb59052a22": {
    "options": [
      ": cost",
      "; cost",
      ", cost",
      ". Cost"
    ],
    "explanations": [
      "\"Every objection... came down to one of three problems\" is a complete clause that announces a list. A colon introduces the list that specifies those three problems.",
      "A semicolon requires an independent clause on the right, but \"cost estimates, which had nearly doubled...\" begins a list of noun phrases. It would also blur into the semicolons separating the items.",
      "A comma cannot introduce a list after a complete clause, and it collides with the comma inside the first item, \"estimates, which had nearly doubled.\"",
      "A period would leave the list of three problems standing alone as a fragment. The items are noun phrases, not a sentence."
    ]
  },
  "q:266fbbdd8d92ca3c": {
    "options": [
      " -- published",
      " (published",
      ": published",
      ", published"
    ],
    "explanations": [
      "The supplement \"published four years after her debut and dismissed... as a curiosity\" already closes with a comma after \"curiosity.\" Opening it with a dash creates a mismatched pair.",
      "An opening parenthesis must be closed by a closing parenthesis, but the supplement ends with a comma after \"curiosity.\" The pair is mismatched.",
      "A colon must follow a complete clause, and \"Hurston's second novel\" is only a noun phrase. A colon also cannot pair with the comma that closes the supplement.",
      "An interrupting supplement must be enclosed by a matched pair of marks. Since the element closes with a comma at \"curiosity,\" it must open with a comma after \"novel.\""
    ]
  },
  "q:119c367360dbea76": {
    "options": [
      "Many species rise each night to feed near the surface",
      "Submersibles can now stay below 1,000 meters for hours",
      "Scientists explore the zone with sonar and submersibles",
      "Most twilight zone fish lose their color at great depths"
    ],
    "explanations": [
      "The passage says \"many species migrate vertically at night to feed near the surface,\" and then calls \"this daily migration\" the largest animal movement. The nightly rise is the detail that supports the claim.",
      "The passage never says how long submersibles can stay below 1,000 meters. This detail is not in the text and does not describe an animal movement.",
      "Sonar and submersibles are the tools used to study the zone. They describe the method of discovery, not the animal movement that the claim is about.",
      "The passage says nothing about fish losing their color. This detail is not in the text."
    ]
  },
  "q:33bb41ef233b5643": {
    "options": [
      "attributed by",
      "attributed for",
      "attributed to",
      "attributed with"
    ],
    "explanations": [
      "\"Attributed by\" would name who did the attributing, as in \"attributed by scholars.\" Here the artist is the one credited with the work, which requires \"to.\"",
      "\"Attributed for\" is not a standard idiom. Something is attributed to a person or cause, never \"for\" one.",
      "The idiom is \"attributed to\": a work is attributed to the person believed to have made it. Here the painting was attributed to an unknown Venetian artist.",
      "\"Attributed with\" is not the standard idiom. The verb \"attribute\" takes \"to\" before the person credited."
    ]
  },
  "q:f4a727b18112a3a2": {
    "options": [
      "stand",
      "stands",
      "are standing",
      "have stood"
    ],
    "explanations": [
      "\"Stand\" is plural. The subject, which follows the verb in this inverted sentence, is \"a bronze statue,\" which is singular.",
      "The sentence is inverted: the subject \"a bronze statue\" follows the verb. A statue is singular, so the singular present-tense verb \"stands\" agrees.",
      "\"Are standing\" is plural and progressive. The subject \"a bronze statue\" is singular, and a statue's location is a standing fact, not an action in progress.",
      "\"Have stood\" is plural, disagreeing with the singular \"a bronze statue.\" The present-tense context of the second sentence also calls for the simple present."
    ]
  },
  "q:09cdc6b086b93275": {
    "options": [
      "as precisely than",
      "so precisely as",
      "more precisely as",
      "as precisely as"
    ],
    "explanations": [
      "\"As precisely than\" mixes two constructions. \"As\" sets up an equal comparison that must be completed by a second \"as,\" not by \"than.\"",
      "\"So precisely as\" is used only in negative comparisons, such as \"not so precisely as.\" In a positive statement the form is \"as... as.\"",
      "\"More precisely as\" mixes the comparative \"more,\" which requires \"than,\" with \"as.\" The two halves do not match.",
      "The correlative \"as... as\" expresses an equal comparison: surveyors can now measure as precisely as their predecessors could. Both halves of the pair are present and matched."
    ]
  },
  "q:6096fe5e7eedd027": {
    "options": [
      ", the",
      "; the",
      " the",
      ": the"
    ],
    "explanations": [
      "\"Most of the crew had never sailed north of the Arctic Circle\" and \"the navigator... had spent her entire career in the Caribbean\" are both independent clauses. A comma alone between them is a comma splice.",
      "Both sides of the blank are independent clauses, so a semicolon joins them. The phrase \"for example\" sits inside the second clause and does not do the joining.",
      "With no punctuation, two independent clauses run together into a fused sentence. A mark is needed between \"Circle\" and \"the.\"",
      "A colon promises a specification or explanation of the preceding clause. The second clause offers a single illustrative case, and its own \"for example\" already marks that relationship."
    ]
  },
  "q:70af5fc87a053092": {
    "options": [
      "Compare and contrast",
      "Chronological order",
      "Cause and effect",
      "Problem and solution"
    ],
    "explanations": [
      "The passage does not weigh two things against each other. The brief mention of hand-copied books sets up the change the press caused, not a comparison.",
      "Although the passage mentions the 15th century and \"before Gutenberg,\" it does not narrate events in time order. It explains what the press led to.",
      "The passage shows the press (the cause) making knowledge accessible and \"fueling the Renaissance, the Reformation, and the Scientific Revolution\" (the effects). This is cause and effect.",
      "Expensive, rare books are mentioned as background, not framed as a problem the press was invented to solve. The emphasis is on the transformations that followed."
    ]
  },
  "q:55d9a9800b416ef1": {
    "options": [
      "explaining",
      "to explain",
      "they should explain",
      "an explanation of"
    ],
    "explanations": [
      "\"Explaining\" is a gerund, which breaks the parallel with the infinitives \"to describe\" and \"to justify\" that begin the first two items.",
      "The first two items are infinitives governed by \"asked the researchers\": \"to describe\" and \"to justify.\" The third must be the infinitive \"to explain\" to keep the series parallel.",
      "\"They should explain\" switches from an infinitive phrase to a full clause in the middle of the series, breaking the parallel structure.",
      "\"An explanation of\" turns the third item into a noun phrase, which no longer matches the infinitive phrases it is coordinated with."
    ]
  },
  "q:ce283f011d526afb": {
    "options": [
      "which",
      "that",
      "whose",
      "who's"
    ],
    "explanations": [
      "\"Which\" refers to a thing and is not possessive. The sentence needs a word showing that the discovery belongs to the team, and \"which recent discovery\" is ungrammatical.",
      "\"That\" is a relative pronoun for things but is not possessive. \"A research team that recent discovery\" does not show that the discovery is the team's.",
      "The discovery belongs to the research team, so the possessive relative pronoun \"whose\" is needed: \"a research team whose recent discovery... has challenged.\"",
      "\"Who's\" is a contraction of \"who is.\" Reading it in gives \"a research team who is recent discovery,\" which makes no sense; the possessive \"whose\" is required."
    ]
  },
  "q:cc6d8d1ce9b223fd": {
    "options": [
      "her brother a marine geologist",
      "her brother, a marine geologist,",
      "her brother, a marine geologist",
      "her brother -- a marine geologist,"
    ],
    "explanations": [
      "With no commas, \"a marine geologist\" reads as essential, implying Kaneko has several brothers and this identifies one. She has only one sibling, so the appositive is supplementary.",
      "Because Kaneko has only one sibling, \"her brother\" already identifies him, making \"a marine geologist\" supplementary. A supplementary appositive is enclosed by a matched pair of commas.",
      "The comma after \"brother\" opens the appositive, but no comma closes it after \"geologist.\" The supplement is left unclosed and runs into the verb \"first taught.\"",
      "A dash before \"a marine geologist\" and a comma after it make a mismatched pair. The marks enclosing a supplement must match: two commas or two dashes."
    ]
  },
  "q:f2f1cada235b0c39": {
    "options": [
      "Furthermore the data, supports our hypothesis.",
      "Furthermore the data supports our hypothesis.",
      "Furthermore; the data supports our hypothesis.",
      "Furthermore, the data supports our hypothesis."
    ],
    "explanations": [
      "There is no comma after the introductory \"Furthermore,\" and the comma after \"data\" wrongly separates the subject from its verb \"supports.\"",
      "A transitional word at the start of a sentence must be followed by a comma. Without it, \"Furthermore the data\" runs together and the transition is not set off.",
      "A semicolon joins two independent clauses. \"Furthermore\" is a single transitional word, not a clause, so it cannot stand on one side of a semicolon.",
      "A transitional word such as \"furthermore\" at the beginning of a sentence is followed by a comma, setting it off from the clause \"the data supports our hypothesis.\""
    ]
  },
  "q:201a2ec8c4d45bee": {
    "options": [
      "the researchers's findings",
      "the researcher's findings",
      "the researchers findings",
      "the researchers' findings"
    ],
    "explanations": [
      "\"Researchers's\" adds an apostrophe and an extra s to a plural noun that already ends in s. The plural possessive is formed by adding only an apostrophe after the s.",
      "\"Researcher's\" is the singular possessive, meaning one researcher. The context refers to a team, so the findings belong to multiple researchers.",
      "\"Researchers findings\" has no apostrophe, so it shows no possession. The findings belong to the researchers, which requires a possessive form.",
      "The findings belong to multiple researchers, so the plural possessive is needed. A plural noun ending in s takes an apostrophe after the s: \"researchers' findings.\""
    ]
  },
  "q:9945935e7ebcf05a": {
    "options": [
      "Volunteers cut 13-centimeter holes at the base of garden fences across half of the study area, where hedgehogs crossed suburban gardens.",
      "The 13-centimeter holes volunteers cut at the base of the fences are too small for most pet dogs to pass through.",
      "Hedgehogs in the British study crossed suburban gardens that were separated from one another by solid fences.",
      "Hedgehogs in the area with cut fences visited 9 gardens a night on average, three times as many as in the unmodified area."
    ],
    "explanations": [
      "This describes the intervention, cutting holes in the fences, but reports no result. Without the visit numbers, it cannot show an effect on hedgehog movement.",
      "The hole size relative to pet dogs is a safety feature of the holes, a different merit. It says nothing about how hedgehog movement changed.",
      "This gives background about the landscape, gardens separated by solid fences, before any holes were cut. It reports nothing about the change in movement.",
      "An effect on movement requires the two movement figures compared. Nine gardens a night in the modified area versus three in the unmodified area, three times as many, shows that effect directly."
    ]
  },
  "q:0d09495f124004e9": {
    "options": [
      "The printer's surviving accounts show he had borrowed heavily to buy the paper for the edition in the months before work began.",
      "In the month he halted the edition, the printer canceled a supplier order, citing a competitor selling the title at half his intended price.",
      "The text was placed on a list of prohibited books four years after the edition was abandoned, and several printers were fined.",
      "The printer completed and sold three other editions in the two years that followed, including a volume of classical poetry."
    ],
    "explanations": [
      "Heavy borrowing to buy paper shows financial exposure, which is consistent with either explanation: a frightened printer and a priced-out printer would both be exposed. It names no rival.",
      "Vasquez claims a rival's cheaper edition caused the halt. A canceled supplier order in the very month of the halt, citing a competitor selling at half price, ties the decision to that exact cause in the printer's own words.",
      "The prohibited-books list supports the censorship account, the rival explanation. Coming four years after the halt, it also cannot have caused the earlier decision.",
      "Completing three other editions shows the printer stayed in business, which is compatible with both accounts. It identifies no motive for halting this particular edition."
    ]
  },
  "q:b335e2c663bfde5d": {
    "options": [
      "Coral restoration projects should be judged mainly by photographs taken at the two-year mark, when results are most visible.",
      "Nursery-grown coral fragments are biologically weaker than wild coral and so rarely survive.",
      "Restoration works where local conditions already favored coral, limiting what transplanting can do by itself.",
      "Bleaching events do not affect the substrate on which coral grows, so any patch of reef can support transplants."
    ],
    "explanations": [
      "The passage sets the \"striking photographs within two years\" against five-year survival under twenty percent. It warns against judging by early appearance rather than endorsing it.",
      "The passage attributes outcomes to where fragments were planted, not to any weakness in the fragments themselves. Nothing suggests nursery coral is biologically weaker.",
      "Every surviving fragment sat \"on substrate that had retained live coral through the original bleaching event,\" and nurseries \"cannot supply whatever it was about those patches\" that let coral persist. The site, not the planting, is doing the work, so transplanting alone is limited.",
      "The passage's premise is that some patches retained live coral through bleaching while others did not. Saying bleaching does not affect the substrate, so any patch can support transplants, contradicts the text."
    ]
  },
  "q:ac4f4d00416b082a": {
    "options": [
      "were: a",
      "were, a",
      "were -- a",
      "were a"
    ],
    "explanations": [
      "A colon may introduce a list only after a complete clause. \"Among the objects... were\" stops mid-predicate, and the list is the subject of \"were,\" so the colon cuts verb from subject.",
      "The comma separates the verb \"were\" from its subject, the list of recovered objects. No punctuation belongs between a verb and its inverted subject.",
      "A dash introducing a list requires a complete clause before it. \"Among the objects the divers recovered... were\" is not complete, and the dash severs the verb from its subject.",
      "The sentence is inverted: \"were\" is the verb and the list that follows (\"a brass sextant, two crates..., and a sailor's letter\") is its subject. No punctuation belongs between a verb and its subject."
    ]
  },
  "q:3304ddde266389c8": {
    "options": [
      "vary",
      "are varying",
      "have varied",
      "varies"
    ],
    "explanations": [
      "\"Vary\" is plural, drawn by the nearby \"bushels,\" but \"the number of\" is the subject and takes a singular verb.",
      "\"Are varying\" is plural, disagreeing with the singular subject \"the number,\" and the progressive form is unneeded for a general statement about variation.",
      "\"Have varied\" is plural. The subject \"the number\" is singular; \"bushels\" and \"acre\" are inside prepositional phrases and do not govern the verb.",
      "When \"the number of\" is the subject, it takes a singular verb: \"the number of bushels... varies.\" The plural \"bushels\" is inside a prepositional phrase."
    ]
  },
  "q:643ea1007d924b67": {
    "options": [
      "the museum's conservators finally installed the mosaic in 2019.",
      "installation of the mosaic finally took place in 2019.",
      "the mosaic was finally installed by the museum's conservators in 2019.",
      "it was 2019 before the museum's conservators finally installed the mosaic."
    ],
    "explanations": [
      "Beginning the main clause with \"the museum's conservators\" says the conservators were assembled from quarry fragments and reinforced with resin. The modifier must describe the mosaic.",
      "\"Installation\" is an event, not a physical object. It could not have been assembled from fragments or reinforced with resin, so the opening phrase dangles.",
      "What was assembled from fragments and reinforced with resin is the mosaic, so the main clause must begin with \"the mosaic.\" The participial phrase then attaches to the noun it describes.",
      "\"It\" here is an empty placeholder subject in \"it was 2019.\" The participles describe nothing, since a year cannot be assembled from fragments."
    ]
  },
  "q:e519b999f1dfc383": {
    "options": [
      "to flag",
      "flagging",
      "they must flag",
      "the flagging of"
    ],
    "explanations": [
      "The three requirements are objects of \"requires technicians,\" and the first two are infinitives, \"to calibrate\" and \"to record.\" The third must be the infinitive \"to flag\" to stay parallel.",
      "\"Flagging\" is a gerund, which does not match the infinitives \"to calibrate\" and \"to record\" that begin the first two items in the series.",
      "\"They must flag\" inserts a full independent clause into a series of phrases. This breaks the parallelism and the grammar of a sentence with the single main verb \"requires.\"",
      "\"The flagging of\" turns the third item into a noun phrase, which does not match the infinitive phrases it is coordinated with."
    ]
  },
  "q:b2024bf8ee4a2e8b": {
    "options": [
      "Instead",
      "Even so",
      "Finally",
      "Specifically"
    ],
    "explanations": [
      "\"Instead\" signals a substitution, as if changing pain treatment replaced having broad implications. The second sentence is an example of those implications, not an alternative to them.",
      "\"Even so\" signals that something holds despite the first statement. Changing how doctors treat pain does not run counter to the research having broad implications; it illustrates them.",
      "\"Finally\" marks the last item in a sequence, but no sequence of implications has been listed. The second sentence gives one particular case, not a concluding step.",
      "The first sentence makes a broad claim, and the second gives a particular detail: one specific implication. \"Specifically\" narrows from the general to the particular."
    ]
  },
  "q:93c1f90cdcb5aaa8": {
    "options": [
      "Flagstaff, Arizona, home to a nearby observatory, has required narrow-spectrum amber outdoor lamps under an ordinance that dates to 1958.",
      "Traditional streetlights emit across a broad spectrum, and their blue wavelengths scatter more in the atmosphere than yellow ones do.",
      "Narrow-spectrum lamps concentrate their light in a band that astronomers can filter out far more effectively than broad-spectrum light.",
      "Astronomers work at an observatory near Flagstaff, Arizona, where a town ordinance requires narrow-spectrum amber lamps for outdoor lighting."
    ],
    "explanations": [
      "This reports the ordinance, the observatory's proximity, and the 1958 date. It establishes the situation but gives no reason why narrow-spectrum lamps help astronomers.",
      "Blue wavelengths scattering more explains a property of the traditional lights being replaced. That is background to the problem, not the mechanism by which narrow-spectrum lamps help.",
      "The goal is to explain a benefit, so the sentence must link the lamps' narrow band to what astronomers can do with it. Only this sentence makes that link: a narrow band can be filtered out far more effectively than broad-spectrum light.",
      "This states where the astronomers work and what the town requires. It describes the arrangement without explaining why narrow-spectrum lamps are useful to the observatory."
    ]
  },
  "q:2114e1da1aa3a0e0": {
    "options": [
      "Coral reefs are declining faster than other marine habitats because of overfishing.",
      "Coral reefs cover a larger share of the ocean floor than marine scientists had once estimated.",
      "Coral reefs host a share of marine species far out of proportion to the small area they cover.",
      "Coral reefs support diverse species mainly because they grow in warm, shallow, sunlit waters."
    ],
    "explanations": [
      "The passage never mentions decline or overfishing. It is about how many species reefs support relative to their area.",
      "The passage says reefs cover \"less than one percent of the ocean floor\" and says nothing about earlier estimates. Nothing suggests their share is larger than once thought.",
      "The passage contrasts the tiny area reefs cover, under one percent, with the twenty-five percent of marine species they support, then explains why. Hosting species far out of proportion to area is the main idea.",
      "The passage attributes reef biodiversity to \"complex three-dimensional habitats,\" crevices, overhangs, and branching structures. Warm, shallow, sunlit water is never mentioned."
    ]
  },
  "q:de9d87f9258be6bb": {
    "options": [
      "Bumblebees stop learning a flower shape after approximately eleven visits, once total handling time stops changing.",
      "Ruiz suggests the apparent plateau in bee learning hides continued improvement directed toward the bee's next foraging choice.",
      "Bumblebees handle familiar flowers more quickly than unfamiliar ones, and the gap widens with each visit.",
      "Ruiz proves that bees make optimal foraging decisions by inspecting neighboring flowers before departing."
    ],
    "explanations": [
      "This states the appearance the passage sets out to overturn. Ruiz found that plateaued bees \"continue to improve on a hidden measure,\" so learning does not stop at eleven visits.",
      "The last sentence carries the idea: \"What looks like the end of learning... may be the point at which a bee starts investing in its next decision.\" The hidden measure that \"keeps falling\" shows the continued improvement.",
      "The passage says total handling time plateaus, which contradicts a gap that \"widens with each visit.\" Comparing familiar and unfamiliar flowers is not the text's focus.",
      "Ruiz \"suggests\"; she does not prove anything, and whether the bees' decisions are optimal is never tested. This overstates a hedged claim."
    ]
  }
}

export default ENTRIES
