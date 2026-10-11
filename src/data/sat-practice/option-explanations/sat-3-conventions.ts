import type { SatOptionExplanationMap } from './types'

/** Per-option explanations for SAT full-length items (see ./index.ts). Generated from the authoring pipeline; edit there. */
const ENTRIES: SatOptionExplanationMap = {
  "q:0fb995311e149cd1": {
    "options": [
      "A pair of commas",
      "No punctuation",
      "A semicolon",
      "A comma"
    ],
    "explanations": [
      "A pair of commas sets off an interrupting element inside one clause; it is not a device for joining two independent clauses. A comma at the clause boundary alone produces a comma splice, and a second comma elsewhere does nothing to repair it.",
      "Running two independent clauses together with no punctuation at all creates a fused sentence, or run-on. Each clause has its own subject and verb, so the boundary between them must be marked.",
      "Two independent clauses with no coordinating conjunction between them are joined by a semicolon (or separated by a period). The semicolon signals that both halves could stand alone while keeping them in one sentence.",
      "A comma alone cannot join two independent clauses; doing so is the classic comma splice. A comma works at that boundary only when a coordinating conjunction such as \"and\" or \"but\" follows it."
    ]
  },
  "q:5525003c1c17a2e2": {
    "options": [
      "one needs to practice consistently",
      "you need to practice consistently",
      "a person needs to practice consistently",
      "they need to practice consistently"
    ],
    "explanations": [
      "\"One needs\" shifts from the second-person \"your\" to the impersonal pronoun \"one,\" an inconsistent point of view within a single sentence. The opening phrase \"To improve your SAT score\" would then describe \"one\" rather than \"you.\"",
      "The sentence already addresses the reader as \"your,\" so the main clause must keep the second person: \"you need to practice consistently.\" This also lets the introductory phrase \"To improve your SAT score\" modify the person it describes.",
      "\"A person needs\" switches to a third-person noun after the second-person \"your,\" creating a point-of-view shift. The score belongs to \"you,\" so the person who must practice should be \"you\" as well.",
      "\"They need\" is a plural third-person pronoun with no antecedent in the sentence, and it clashes with the second-person \"your.\" The pronoun shift leaves readers asking who \"they\" are."
    ]
  },
  "q:d3d51c8f1dc02ccc": {
    "options": [
      "Students who complete all required coursework by May 15",
      "Students, who complete all required coursework by May 15,",
      "Students who complete all required coursework by May 15,",
      "Students, who complete all required coursework by May 15"
    ],
    "explanations": [
      "\"Who complete all required coursework by May 15\" is a restrictive clause: it tells which students are eligible, so it takes no commas. The subject \"Students who complete...\" then flows directly into the verb \"will be eligible.\"",
      "Commas around \"who complete all required coursework by May 15\" treat the clause as nonessential, which would mean all students are eligible and the deadline is incidental. The clause is defining, so the commas misrepresent the meaning.",
      "A single comma after \"May 15\" separates the subject \"Students who complete all required coursework by May 15\" from its verb \"will be eligible.\" No comma belongs between a subject and its verb, and a restrictive clause takes no commas at all.",
      "The comma after \"Students\" opens a nonessential clause that is never closed, leaving an unpaired comma. Beyond the mismatch, the clause is restrictive, so neither comma belongs."
    ]
  },
  "q:e88e94f3a2c97706": {
    "options": [
      "has demonstrated",
      "demonstrates",
      "is demonstrating",
      "demonstrate"
    ],
    "explanations": [
      "\"Has demonstrated\" is singular, but the subject is the plural indefinite pronoun \"Several,\" not the singular \"meta-analysis\" that sits closer to the blank. The intervening phrase \"of the studies reviewed in the meta-analysis\" does not change the subject's number.",
      "\"Demonstrates\" is a singular verb attached to the plural subject \"Several.\" The nearby singular noun \"meta-analysis\" is inside a modifying phrase and is not what performs the action.",
      "\"Is demonstrating\" is singular, disagreeing with the plural subject \"Several.\" The progressive aspect also suggests an action unfolding right now, whereas the sentence reports a finding the studies already established.",
      "The true subject is \"Several,\" a plural indefinite pronoun, so the plural verb \"demonstrate\" agrees with it. \"Of the studies reviewed in the meta-analysis\" is a modifying phrase, and the singular \"meta-analysis\" inside it does not govern the verb."
    ]
  },
  "q:ee7de25cd2744544": {
    "options": [
      "developing new curricula, training teachers, and the expansion of access to technology",
      "developing new curricula, to train teachers, and expanding access to technology",
      "developing new curricula, training teachers, and expanding access to technology",
      "the development of new curricula, training teachers, and expanding access to technology"
    ],
    "explanations": [
      "\"The expansion of access to technology\" is a noun phrase, while the first two items, \"developing\" and \"training,\" are gerund phrases. The series breaks parallel structure at its last item.",
      "\"To train teachers\" is an infinitive phrase sandwiched between the gerunds \"developing\" and \"expanding,\" so the three items do not share one grammatical form. Parallelism requires matching forms throughout the list.",
      "All three items, \"developing new curricula,\" \"training teachers,\" and \"expanding access to technology,\" are gerund phrases of the same form, so the series after the colon is parallel.",
      "\"The development of new curricula\" is a noun phrase, but it is followed by two gerund phrases, \"training\" and \"expanding.\" The mismatch at the first item breaks the parallel structure the series needs."
    ]
  },
  "q:153fc365e1ee5cd3": {
    "options": [
      ", travel",
      " -- travel",
      "; travel",
      ": travel"
    ],
    "explanations": [
      "A comma after \"Denmark\" would be indistinguishable from the commas that already separate each city from its country (\"Aarhus, Denmark,\" \"Porto, Portugal,\"), so readers could not tell where one stop ends and the next begins. The sentence also already uses \"; and close\" for the third boundary, and series separators must match.",
      "A dash marks an interruption or an abrupt shift, not a boundary between items in a series. Using a dash here while the sentence later uses \"; and close\" would make the separators inconsistent and break the parallel list.",
      "Each item in this series contains an internal comma (\"Aarhus, Denmark\"), so the items themselves are separated with semicolons. The sentence already marks the third boundary with \"; and close,\" and \"; travel\" matches that pattern for the second.",
      "A colon introduces a list, explanation, or specification after a complete clause; it does not separate items within a series. Placing a colon after \"Denmark\" would announce something to follow rather than continue the list of stops."
    ]
  },
  "q:97d85e831812cd4a": {
    "options": [
      "Bergstrom's maps of the estuary were drawn entirely in the hours before her shifts began.",
      "the estuary maps that survive were drawn by Bergstrom entirely in the hours before her shifts began.",
      "it was in the hours before her shifts that Bergstrom drew her maps of the estuary.",
      "Bergstrom drew her maps of the estuary entirely in the hours before her shifts began."
    ],
    "explanations": [
      "The opening phrase \"Trained as a cartographer but employed... as a customs clerk\" describes a person, but this version makes \"Bergstrom's maps\" the subject. Maps were not trained or employed, and the possessive \"Bergstrom's\" does not count as the noun being modified, so the modifier dangles.",
      "Here the subject is \"the estuary maps that survive,\" so the introductory phrase ends up describing the maps rather than the woman who was trained and employed. The person named in the modifier appears only later, in \"by Bergstrom,\" which is not the subject position.",
      "This version begins with the placeholder \"it was in the hours,\" so the modifier \"Trained as a cartographer...\" attaches to the empty subject \"it.\" Bergstrom is buried inside the clause instead of standing immediately after the phrase that describes her.",
      "The introductory modifier describes a person's training and employment, so the main clause must begin with that person. \"Bergstrom drew her maps\" places \"Bergstrom\" directly after the phrase, making the modifier's reference clear."
    ]
  },
  "q:9f97021d122ecdec": {
    "options": [
      "Admittedly,",
      "Similarly,",
      "Meanwhile,",
      "Accordingly,"
    ],
    "explanations": [
      "\"Admittedly\" frames the sentence as a concession the writer is about to push back against, but no counterpoint follows. The claim that researchers would miss material is the writer's own conclusion, not a point grudgingly granted.",
      "\"Similarly\" would introduce a parallel case comparable to the misdated letters, but the third sentence is not another example of mismatch. It states what follows from the mismatch, a consequence rather than a comparison.",
      "\"Meanwhile\" asserts that two things merely happen at the same time. It treats researchers missing the earliest material as a coincidental, unrelated development rather than as the direct result of the finding aid's inaccurate date range.",
      "The second sentence shows that the finding aid's \"1911 to 1934\" range is wrong, since letters date from 1907 and 1905. The third sentence states the practical consequence: researchers relying on the aid would miss that material. \"Accordingly\" marks exactly this result relationship."
    ]
  },
  "q:6eb612d360c1fa1f": {
    "options": [
      "Even so,",
      "Furthermore,",
      "Because of this,",
      "In short,"
    ],
    "explanations": [
      "The first two sentences describe obstacles, a six-week season and nineteen slow seasons of excavation, which would ordinarily produce a thin record. The third reports that the record is nonetheless the most complete of its period. \"Even so\" marks that defeated expectation.",
      "\"Furthermore\" adds another point in the same direction as what came before, but the preceding sentences describe limitations while this one reports an unexpectedly strong result. The relationship is contrast, not addition.",
      "\"Because of this\" claims the short season and slow progress caused the site to become the most completely documented settlement, reversing the logic. Those conditions would hinder documentation, not produce it.",
      "\"In short\" promises a summary of what has just been said, but the completeness of the record is new information that cuts against the obstacles described. It condenses nothing."
    ]
  },
  "q:a1f58bbeae6be045": {
    "options": [
      "Focus on the sentence containing the blank by itself",
      "Choose the transition used most often in the passage",
      "Read the sentences on both sides of the blank first",
      "Pick the transition that sounds the most formal"
    ],
    "explanations": [
      "Reading only the sentence with the blank isolates it from the sentence it must connect to. A transition expresses a relationship between two ideas, and that relationship cannot be judged from one side alone.",
      "How often a transition appears elsewhere in the passage says nothing about the logical link needed at this particular blank. Choosing by frequency ignores whether the surrounding sentences add, contrast, exemplify, or conclude.",
      "A transition names the logical relationship between the sentence before the blank and the sentence that contains it, so the surrounding sentences must be read first. Only then can you tell whether the text is adding, contrasting, giving an example, or drawing a conclusion.",
      "Formality is not the issue; \"however\" and \"for example\" are equally formal yet express opposite relationships. Picking the most formal-sounding word ignores the only thing that matters, the logical connection between the ideas."
    ]
  },
  "q:b2eef41174868a0a": {
    "options": [
      "regarded to be",
      "regarded for",
      "regarded being",
      "regarded as"
    ],
    "explanations": [
      "\"Regarded to be\" blends two constructions; \"considered to be\" is idiomatic, but \"regard\" takes \"as,\" not an infinitive. \"Widely regarded to be one of the greatest\" is not Standard English usage.",
      "\"Regarded for\" would mean esteemed on account of something, as in \"regarded for its efficiency,\" and it cannot be followed by a noun phrase naming what the canal is. The sentence identifies the canal as an achievement, which requires \"as.\"",
      "\"Regarded being\" is not an accepted construction in English. The verb \"regard\" pairs with \"as\" to introduce the category something is placed in; a participle like \"being\" cannot fill that role.",
      "The conventional idiom is \"regarded as\": \"widely regarded as one of the greatest engineering achievements.\" The preposition \"as\" introduces the category or role in which something is viewed."
    ]
  },
  "q:b9b590ebc61be6cb": {
    "options": [
      "However, the results were inconclusive.",
      "However: the results were inconclusive.",
      "However; the results were inconclusive.",
      "However the results were inconclusive."
    ],
    "explanations": [
      "When \"However\" opens a sentence as an introductory adverb meaning \"nevertheless,\" it is followed by a comma: \"However, the results were inconclusive.\" The comma separates the transitional word from the clause it introduces.",
      "A colon follows a complete clause to introduce an explanation or list. \"However\" is a single introductory word, not a complete clause, so a colon after it has nothing to introduce from.",
      "A semicolon joins two independent clauses. \"However\" by itself is not a clause, so a semicolon after it is misplaced; the semicolon-plus-\"however\" pattern works only when \"however\" sits between two full clauses.",
      "With no comma after \"However,\" readers may take it to mean \"in whatever way\" (\"however the results were\") rather than as a contrast word. Introductory \"however\" in the sense of \"nevertheless\" needs the comma."
    ]
  },
  "q:b8e98e9ce059a972": {
    "options": [
      "She needed three things; a pen, paper and determination.",
      "She needed: three things a pen, paper, and determination.",
      "She needed three things a pen, paper, and determination.",
      "She needed three things: a pen, paper, and determination."
    ],
    "explanations": [
      "A semicolon after \"three things\" is wrong because what follows, \"a pen, paper and determination,\" is a list of nouns, not an independent clause. A semicolon must have a complete clause on each side.",
      "The colon after \"She needed\" interrupts a verb and its object; \"She needed\" is not a complete thought that can introduce a list. The misplaced colon also leaves \"three things a pen\" running together.",
      "With no punctuation, \"three things a pen, paper, and determination\" runs the general noun and its list together, and readers cannot see where the announcement ends and the itemization begins.",
      "\"She needed three things\" is a complete independent clause, and the colon after it introduces the list that specifies those things: \"a pen, paper, and determination.\" That is exactly the colon's job."
    ]
  },
  "q:596d7da8b67d790a": {
    "options": [
      "The storm knocked out power, crews worked through the night.",
      "The storm knocked out power; crews worked through the night.",
      "The storm knocked out power; and, crews worked through the night.",
      "The storm knocked out power crews worked through the night."
    ],
    "explanations": [
      "\"The storm knocked out power, crews worked through the night\" joins two independent clauses with only a comma, which is a comma splice. The comma would need a coordinating conjunction such as \"and\" after it.",
      "Each half, \"The storm knocked out power\" and \"crews worked through the night,\" is an independent clause, and a semicolon joins two related independent clauses without a conjunction.",
      "The semicolon already joins the two clauses, so \"and\" after it is redundant, and the comma after \"and\" wrongly separates the conjunction from its clause. \"; and,\" stacks three devices where one is needed.",
      "\"The storm knocked out power crews worked through the night\" has no punctuation between the two independent clauses, producing a fused sentence; it even misreads momentarily as \"power crews.\""
    ]
  },
  "q:d0f877e07a7eab82": {
    "options": [
      "childrens",
      "children's",
      "children",
      "childrens'"
    ],
    "explanations": [
      "\"Childrens\" adds an -s to \"children,\" but \"children\" is already plural; there is no plural form \"childrens.\" The sentence needs a possessive to show whose playroom it is, and this spelling has no apostrophe.",
      "\"Children\" is an irregular plural that does not end in -s, so its possessive is formed by adding 's: \"the children's playroom.\" The apostrophe shows the playroom belongs to the children.",
      "\"The children playroom\" places a plural noun before another noun with no possessive marker, so nothing shows that the playroom belongs to the children. The possessive form \"children's\" is required.",
      "\"Childrens'\" puts the apostrophe after an -s that does not belong on the word at all. The s-apostrophe pattern is for regular plurals ending in -s (such as \"students'\"), not for irregular plurals like \"children.\""
    ]
  },
  "q:8ea9847eec73d1c3": {
    "options": [
      "are remaining",
      "have remained",
      "remains",
      "remain"
    ],
    "explanations": [
      "\"Are remaining\" is plural, but the subject is the single noun clause \"Whether the proposed infrastructure bill will pass the Senate...,\" which is singular. The plural nouns \"analysts\" and \"disagreements\" are in the next sentence and irrelevant.",
      "\"Have remained\" is plural, yet the subject is one noun clause beginning with \"Whether,\" which counts as a singular unit. The perfect tense also clashes with the present-tense framing \"Political analysts suggest.\"",
      "The entire clause \"Whether the proposed infrastructure bill will pass the Senate before the end of the legislative session\" acts as a single, singular subject, so the singular present-tense verb \"remains\" agrees with it.",
      "\"Remain\" is the plural form, but a noun clause used as a subject (\"Whether the bill will pass...\") is treated as singular. No plural noun inside the clause governs the main verb."
    ]
  },
  "q:a97e0021c0cb98d5": {
    "options": [
      "Whether it appears at the start of its sentence",
      "Whether it matches the number of the nearest verb",
      "Whether it is closer to the verb than to the noun",
      "Whether it clearly refers to one specific noun"
    ],
    "explanations": [
      "A pronoun's position in its sentence is not a grammatical issue. Pronouns can open a sentence (\"They arrived\") or sit anywhere else; what matters is what the pronoun refers to and whether it agrees with that antecedent.",
      "Pronouns agree with their antecedents, the nouns they replace, not with the nearest verb. Checking the verb's number can mislead you when the antecedent is far away or when the verb belongs to a different noun.",
      "Distance from the verb versus the noun is not a rule of pronoun use. A pronoun can be far from its antecedent and still be correct, provided the reference is unambiguous and the number matches.",
      "Every underlined pronoun should be traced to a single, unmistakable antecedent; vague reference (\"it,\" \"this,\" or \"they\" with two possible nouns) is a frequent SAT error. Once the antecedent is clear, you can also confirm number and case agreement."
    ]
  },
  "q:f1c6ef1d309660a7": {
    "options": [
      "Ultimately,",
      "In particular,",
      "Otherwise,",
      "Similarly,"
    ],
    "explanations": [
      "The paragraph narrates a sequence of attempts: the team recalibrated twice, the signal persisted, and the cause was finally found. \"Ultimately\" marks that final outcome of the sequence.",
      "\"In particular\" narrows a preceding general statement to a specific case, but the dust cloud is not a subset of \"the signal persisted.\" It is a new explanation that ends the sequence, not a detail within the previous sentence.",
      "\"Otherwise\" introduces what would happen if the preceding condition did not hold (\"recalibrate; otherwise the error persists\"). Nothing here is conditional; the sentence reports what actually was found.",
      "\"Similarly\" would require the dust-cloud finding to parallel the persisting signal or the recalibration. It is not a comparable case but the resolution of the mystery those earlier steps failed to solve."
    ]
  },
  "q:47ee9e256a5f01d1": {
    "options": [
      "Consequently,",
      "Likewise,",
      "By contrast,",
      "Even so,"
    ],
    "explanations": [
      "\"Consequently\" would make the flood basins' standing water a result of how drip lines move salts downward. The two systems operate independently; one does not cause the other's behavior.",
      "\"Likewise\" claims the flood basins behave the same way as the drip lines, but the paragraph has just said the two schemes' \"effects on soil salinity diverge sharply,\" and the sentence describes the opposite outcome.",
      "The passage announces that the two schemes \"diverge sharply\" and then describes each in turn: drip lines push salts downward, while flood basins concentrate salts at the surface. \"By contrast\" marks that juxtaposition of opposite effects.",
      "\"Even so\" concedes the preceding point and then defeats an expectation drawn from it. The flood-basin sentence does not overcome anything the drip-line sentence set up; it simply describes a different system's opposite result."
    ]
  },
  "q:d30664d0cf003462": {
    "options": [
      "I",
      "me",
      "myself",
      "mine"
    ],
    "explanations": [
      "\"I\" is a subject pronoun, but after the preposition \"between\" the pronoun is an object. \"Between you and I\" is a common error produced by overcorrecting; test it alone: \"between I\" is clearly wrong.",
      "After a preposition such as \"between,\" pronouns take the object case, so \"between you and me\" is correct. Both \"you\" and \"me\" are objects of \"between.\"",
      "\"Myself\" is a reflexive pronoun, used only when the subject of the clause is also \"I\" (\"I told myself\"). In \"between you and myself\" there is no \"I\" subject to reflect, so the reflexive is misused.",
      "\"Mine\" is a possessive pronoun that stands in for a noun phrase (\"that book is mine\"). It cannot serve as the object of the preposition \"between,\" which needs a personal object pronoun."
    ]
  },
  "q:38388805373b9694": {
    "options": [
      "are suggesting",
      "suggest",
      "were suggesting",
      "suggests"
    ],
    "explanations": [
      "\"Are suggesting\" is plural and progressive. The sentence treats \"The data from her analysis\" as one body of evidence, calling for a singular verb, and the ongoing aspect misfits a finding stated as a settled result.",
      "\"Suggest\" is the plural form. Because the subject \"The data from her analysis of three election cycles\" is presented as a single unified body of information, the sentence takes the singular verb; the nearby plural \"cycles\" is inside a prepositional phrase and does not control the verb.",
      "\"Were suggesting\" is both plural and past progressive. The passage presents the data as a current body of evidence with a standing conclusion, so the past continuous aspect is inconsistent with the present-tense reporting.",
      "\"The data from her analysis\" is treated here as a single, unified body of information, so the singular present-tense verb \"suggests\" agrees with it. The plural \"cycles\" sits inside a prepositional phrase and does not govern the verb."
    ]
  },
  "q:d7769ad368b7765c": {
    "options": [
      "instruments—including the piano, violin, and cello—before",
      "instruments, including the piano, violin, and cello—before",
      "instruments—including the piano, violin, and cello, before",
      "instruments—including the piano, violin, and cello before"
    ],
    "explanations": [
      "The list \"including the piano, violin, and cello\" interrupts the sentence, so it must be enclosed by a matched pair of dashes: one after \"instruments\" and one before \"before.\" Paired dashes also keep the list's internal commas from blurring the boundaries.",
      "This version opens the interruption with a comma after \"instruments\" but closes it with a dash before \"before.\" Punctuation that sets off a parenthetical must match on both sides; a comma cannot be paired with a dash.",
      "The interruption opens with a dash after \"instruments\" but closes with a comma after \"cello.\" The mismatched pair is incorrect, and the closing comma blends into the list's own commas (\"piano, violin, and cello,\").",
      "A dash opens the interrupting list after \"instruments,\" but nothing closes it; \"cello before she turned sixteen\" runs straight on. A single unpaired dash in mid-sentence leaves the parenthetical open."
    ]
  },
  "q:da177ab887250536": {
    "options": [
      "The three items — a book, a pen, and a notebook were on the desk.",
      "The three items — a book, a pen, and a notebook — were on the desk.",
      "The three items a book, a pen, and a notebook — were on the desk.",
      "The three items, a book, a pen, and a notebook, were on the desk."
    ],
    "explanations": [
      "A dash opens the parenthetical after \"items,\" but no dash closes it after \"notebook,\" so the sentence reads \"a notebook were on the desk.\" Dashes that set off a mid-sentence interruption must come in pairs.",
      "The interruption \"a book, a pen, and a notebook\" contains its own commas, so a matched pair of dashes, one before \"a book\" and one after \"notebook,\" shows clearly where the list begins and ends.",
      "This version has a closing dash after \"notebook\" but no opening mark after \"items,\" so \"The three items a book\" runs together. The reader cannot tell where the parenthetical begins.",
      "Commas around the parenthetical blur into the commas inside the list (\"items, a book, a pen, and a notebook, were\"), making it look like a flat list of five things. Dashes avoid that confusion."
    ]
  },
  "q:3da7900177c5ce88": {
    "options": [
      "is",
      "are",
      "were",
      "have been"
    ],
    "explanations": [
      "With \"either... or,\" the verb agrees with the subject nearer to it. The nearer subject is \"a certified copy,\" which is singular, so \"is\" is correct even though \"the original documents\" earlier is plural.",
      "\"Are\" agrees with \"the original documents,\" the farther half of the \"either... or\" pair. The rule for \"either... or\" subjects is agreement with the nearer subject, \"a certified copy,\" which is singular.",
      "\"Were\" is plural and past tense. It disagrees with the nearer subject \"a certified copy,\" and the surrounding sentences are in the present (\"Applicants should verify... requires\"), so the past tense is also inconsistent.",
      "\"Have been\" is plural, disagreeing with the singular nearer subject \"a certified copy.\" The perfect aspect also suggests a condition that has held over time, whereas the sentence states a current requirement."
    ]
  },
  "q:e0b1a2c8789c4a2f": {
    "options": [
      "The researchers, who had studied the phenomenon for years published their findings.",
      "The researchers who had studied the phenomenon for years, published their findings.",
      "The researchers, who had studied the phenomenon, for years, published their findings.",
      "The researchers, who had studied the phenomenon for years, published their findings."
    ],
    "explanations": [
      "A comma opens the clause after \"researchers,\" but no comma closes it after \"years,\" so the nonrestrictive clause is only half set off. \"For years published their findings\" runs the modifier into the main verb.",
      "The comma after \"years\" closes a clause that was never opened; there is no comma after \"researchers.\" The single comma ends up separating the subject from its verb \"published.\"",
      "The extra comma after \"phenomenon\" splits the clause \"who had studied the phenomenon for years\" in the middle, cutting \"for years\" away from the verb it modifies. No comma belongs inside the clause.",
      "The nonrestrictive clause \"who had studied the phenomenon for years\" is enclosed by a comma after \"researchers\" and a comma after \"years,\" with no stray comma inside it. That is the correct pattern for extra, nonessential information."
    ]
  },
  "q:1d3bdf03dfc4c6f1": {
    "options": [
      "We visited Paris, France: London, England: and Rome, Italy.",
      "We visited Paris, France, London, England, and Rome, Italy.",
      "We visited Paris France; London England; and Rome Italy.",
      "We visited Paris, France; London, England; and Rome, Italy."
    ],
    "explanations": [
      "Colons after \"France\" and \"England\" are wrong; a colon introduces a list or explanation after a complete clause and is never used to separate items within a series.",
      "Using commas everywhere (\"Paris, France, London, England, and Rome, Italy\") makes six comma-separated items indistinguishable from three city-country pairs. Readers cannot tell whether France and London are separate stops.",
      "The semicolons are placed correctly, but the commas between each city and its country have been dropped: \"Paris France\" and \"London England\" need commas. The semicolons are justified only because the items contain internal commas.",
      "Each item already contains a comma (\"Paris, France\"), so semicolons separate the items: \"Paris, France; London, England; and Rome, Italy.\" This keeps the three city-country pairs visually distinct."
    ]
  },
  "q:85c476b612e28f1e": {
    "options": [
      "Indeed,",
      "Nonetheless,",
      "In contrast,",
      "Meanwhile,"
    ],
    "explanations": [
      "The second sentence shows surprising speed (a dam within eleven days), and the third pushes the same point further: the whole channel widened within one summer. \"Indeed\" marks that intensification of a claim already made.",
      "\"Nonetheless\" signals that the third sentence holds in spite of the second, but nothing is being reversed. Both the eleven-day dam and the two-meter widening show the same unexpected speed.",
      "\"In contrast\" sets two things in opposition, yet the channel widening is not opposed to the dam's quick appearance. It is further evidence pointing in the same direction.",
      "\"Meanwhile\" presents the widening as a merely simultaneous, separate development. The sentence is not reporting an unrelated event; it is reinforcing how quickly the beavers altered the stream."
    ]
  },
  "q:f0f870dca2d857f1": {
    "options": [
      "On balance,",
      "Nonetheless,",
      "In addition,",
      "Beforehand,"
    ],
    "explanations": [
      "The third sentence weighs the new radiography evidence against the traditional \"votive offerings\" view and delivers the writer's overall assessment. \"On balance\" signals exactly that weighing of considerations.",
      "\"Nonetheless\" would say the assessment holds despite the radiography findings, but the findings are the basis for the assessment. The bundles containing only reeds and mud are what suggest economics rather than devotion.",
      "\"In addition\" would introduce another piece of evidence, but the third sentence does not add a new fact. It interprets the facts already given, drawing a conclusion from them.",
      "\"Beforehand\" asserts a time relationship, that the practice said something at an earlier time, which the sentence does not express. The third sentence is an evaluation, not a step in a chronology."
    ]
  },
  "q:e9a9c3fcfec58596": {
    "options": [
      "it's",
      "its'",
      "it is'",
      "its"
    ],
    "explanations": [
      "\"It's\" is the contraction of \"it is,\" so \"it's raining outside\" means \"it is raining outside.\" The apostrophe stands for the missing letter in \"is.\"",
      "\"Its'\" is not a word in English. The possessive \"its\" never takes an apostrophe, and an apostrophe after the -s cannot form a contraction of \"it is.\"",
      "\"It is'\" writes out the two words and then adds a stray apostrophe with nothing for it to mark. A contraction replaces omitted letters with the apostrophe; here no letters are omitted.",
      "\"Its\" without an apostrophe is the possessive form, as in \"the dog wagged its tail.\" The sentence needs \"it is,\" which is contracted as \"it's.\""
    ]
  },
  "q:ccf3f0f15b2d19cc": {
    "options": [
      "She studied hard, she passed the exam.",
      "She studied hard and, she passed the exam.",
      "She studied hard, and, she passed the exam.",
      "She studied hard, and she passed the exam."
    ],
    "explanations": [
      "\"She studied hard, she passed the exam\" joins two independent clauses with only a comma, a comma splice. A coordinating conjunction such as \"and\" is needed after the comma.",
      "The comma is on the wrong side of \"and.\" When a coordinating conjunction joins two independent clauses, the comma precedes the conjunction; \"and, she passed\" wrongly separates \"and\" from its clause.",
      "There is a correct comma before \"and,\" but the second comma after \"and\" is an error. A coordinating conjunction is not followed by a comma unless an interrupting phrase comes next.",
      "Two independent clauses, \"She studied hard\" and \"she passed the exam,\" are joined by a comma followed by the coordinating conjunction \"and,\" with no stray comma after the conjunction."
    ]
  },
  "q:ef97b3869443e0c5": {
    "options": [
      "She loves hiking he prefers swimming.",
      "She loves hiking; he prefers swimming.",
      "She loves hiking, he prefers swimming.",
      "She loves hiking: he prefers swimming."
    ],
    "explanations": [
      "\"She loves hiking he prefers swimming\" runs two independent clauses together with no punctuation at all, a fused sentence. The boundary after \"hiking\" must be marked.",
      "\"She loves hiking\" and \"he prefers swimming\" are both independent clauses with no conjunction between them, so a semicolon correctly joins them while showing they are closely related.",
      "A comma alone between \"hiking\" and \"he\" creates a comma splice. Without a coordinating conjunction after the comma, two independent clauses cannot be joined by a comma.",
      "A colon introduces an explanation, list, or elaboration of what came before. \"He prefers swimming\" does not explain or specify \"She loves hiking\"; it is a parallel contrasting clause, so the colon misrepresents the relationship."
    ]
  },
  "q:c0b63c04435d84f1": {
    "options": [
      "The recipe calls for basil, but we only had oregano.",
      "The recipe calls for basil; but, we only had oregano.",
      "The recipe calls for basil but, we only had oregano.",
      "The recipe calls for basil, we only had oregano."
    ],
    "explanations": [
      "\"The recipe calls for basil\" and \"we only had oregano\" are two independent clauses joined by a comma plus the coordinating conjunction \"but.\" That is the standard way to coordinate two clauses.",
      "A semicolon already joins two independent clauses on its own, so adding \"but\" after it is redundant, and the comma after \"but\" wrongly cuts the conjunction off from its clause. \"; but,\" piles up three marks.",
      "The comma belongs before \"but,\" not after it. \"Basil but, we only had\" leaves the two independent clauses joined by a bare conjunction and then inserts a comma where none is needed.",
      "\"The recipe calls for basil, we only had oregano\" joins two independent clauses with only a comma, a comma splice. A conjunction such as \"but\" must follow the comma."
    ]
  },
  "q:bd73bb5ed91e7074": {
    "options": [
      "Change the comma to a semicolon",
      "Keep it to mark the end of the subject",
      "Delete the comma after \"scientists\"",
      "Add a second comma after \"discovered\""
    ],
    "explanations": [
      "A semicolon joins two independent clauses, but \"The scientists\" is only a subject, not a clause. Replacing the comma with a semicolon would make the error worse.",
      "No punctuation ever separates a simple subject from its verb. \"The scientists, discovered\" wrongly pauses between \"scientists\" and \"discovered,\" and there is no rule about marking the end of the subject.",
      "The comma after \"scientists\" splits the subject from its verb \"discovered,\" which is never correct. Deleting it yields \"The scientists discovered a new element.\"",
      "A second comma after \"discovered\" would make \"discovered\" look like a parenthetical interruption, but it is the main verb of the sentence. Adding commas around the verb compounds the original error."
    ]
  },
  "q:c886876bd362af5d": {
    "options": [
      "It marks the start of a new sentence",
      "It links two nouns within one clause",
      "It joins two independent clauses as equals",
      "It introduces a dependent clause that cannot stand alone"
    ],
    "explanations": [
      "Subordinating conjunctions do not start new sentences by themselves; a clause beginning with \"since\" that stands alone (\"Since it rained.\") is a fragment. The word ties its clause to a main clause.",
      "Linking two nouns is the work of a coordinating conjunction within a phrase (\"salt and pepper\"). \"Since\" introduces an entire clause with its own subject and verb, not a pair of nouns.",
      "Joining two independent clauses as equals is what coordinating conjunctions such as \"and\" and \"but\" do. \"Since\" makes the clause it introduces grammatically subordinate, so the two parts are not equal.",
      "\"Since\" is a subordinating conjunction: it turns the clause it introduces into a dependent clause (\"since the storm began\") that cannot stand alone and must attach to an independent clause."
    ]
  },
  "q:f902d088edac48bf": {
    "options": [
      "A comma followed by \"then\"",
      "A comma or a semicolon",
      "A period or a semicolon",
      "A single comma"
    ],
    "explanations": [
      "\"Then\" is an adverb, not a coordinating conjunction, so \"a comma followed by 'then'\" still leaves two independent clauses joined by a comma alone. \"He left, then she called\" is a comma splice.",
      "A semicolon works, but a comma alone does not. Two independent clauses joined by a comma without a conjunction form a comma splice, so a comma is not an acceptable alternative here.",
      "Two independent clauses with no coordinating conjunction between them are separated by a period or joined by a semicolon. Both marks acknowledge that each clause could stand on its own.",
      "A single comma between two independent clauses with no conjunction produces a comma splice. The comma would be correct only with a coordinating conjunction such as \"and\" or \"so\" after it."
    ]
  },
  "q:11216674e07ff028": {
    "options": [
      "because",
      "even though",
      "although",
      "unless"
    ],
    "explanations": [
      "\"Because\" directly states that the storm's danger was the reason the roads were closed, the cause-and-effect relationship the question asks for: \"The roads were closed because the storm made travel dangerous.\"",
      "\"Even though\" introduces a concession, something true in spite of which the main clause holds. It would say the roads were closed despite the storm's danger, which reverses the logic.",
      "\"Although\" signals contrast: \"The roads were closed although the storm made travel dangerous\" implies the closure happened in spite of, not because of, the danger.",
      "\"Unless\" states a condition under which something would not happen: \"closed unless the storm made travel dangerous\" means the roads would be open only if travel were dangerous, which is nonsensical here."
    ]
  },
  "q:7a748348e6410080": {
    "options": [
      "However",
      "First",
      "Therefore",
      "For example"
    ],
    "explanations": [
      "\"However\" signals contrast with a preceding idea. The sentence introduces the opening step in a process, and nothing is being contradicted, so a contrast word misstates the relationship.",
      "The sentence describes the opening step in a research process, so a sequence transition is needed. \"First\" marks the beginning of an ordered series of steps.",
      "\"Therefore\" presents the data gathering as a conclusion or result of something previously said. An initial step in a procedure is not a consequence; it simply begins the sequence.",
      "\"For example\" would introduce an illustration of a general claim just made. Gathering data from 500 participants is the first step of a process, not an example of anything."
    ]
  },
  "q:269a39bf499f9322": {
    "options": [
      "Meanwhile",
      "Therefore",
      "For example",
      "In contrast"
    ],
    "explanations": [
      "\"Meanwhile\" implies that bread and pasta sauce listing sugar is happening at the same time as, and separately from, packaged foods containing sugar. The sentences are related as claim and instance, not as simultaneous events.",
      "\"Therefore\" would make the bread and pasta sauce a conclusion drawn from the first sentence. They are specific instances that illustrate the claim, not a result of it.",
      "The first sentence makes a general claim about packaged foods, and the second names specific products, bread and pasta sauce, that list sugar among their first ingredients. \"For example\" introduces exactly that kind of supporting instance.",
      "\"In contrast\" would signal that bread and pasta sauce differ from packaged foods with added sugar, but they are examples of such foods. The transition reverses the relationship."
    ]
  },
  "q:23dc103d6fcd6f10": {
    "options": [
      "Verb phrase",
      "Dependent clause",
      "Sentence fragment",
      "Independent clause"
    ],
    "explanations": [
      "A verb phrase is just the verb and its helpers or complements (\"runs every morning\"). \"She runs every morning\" also includes the subject \"She,\" so it is a full clause, not only a verb phrase.",
      "A dependent clause begins with a subordinating word (\"because she runs every morning\") and cannot stand alone. \"She runs every morning\" has no such word and expresses a complete thought.",
      "A fragment lacks a subject, a verb, or a complete thought. \"She runs every morning\" has the subject \"She,\" the verb \"runs,\" and a complete idea, so it is not a fragment.",
      "\"She runs every morning\" contains a subject (\"She\") and a verb (\"runs\") and expresses a complete thought with no subordinating word, so it is an independent clause."
    ]
  },
  "q:47960632057b1799": {
    "options": [
      "Exploring the cave system, the researchers discovered a new species of translucent fish.",
      "Exploring the cave system, the discovery of a new species of translucent fish occurred.",
      "Exploring the cave system, it was a new species of translucent fish that was discovered.",
      "Exploring the cave system, a new species of translucent fish was discovered."
    ],
    "explanations": [
      "\"Exploring the cave system\" must describe the noun right after it. \"The researchers\" are the ones exploring, so placing them as the subject keeps the modifier attached correctly.",
      "After \"Exploring the cave system,\" the subject is \"the discovery,\" but a discovery cannot explore a cave. The modifier dangles because the people doing the exploring never appear.",
      "The subject following the modifier is the placeholder \"it,\" which cannot explore anything. Burying the fish in an \"it was... that\" construction leaves \"Exploring the cave system\" attached to nothing sensible.",
      "Here the subject is \"a new species of translucent fish,\" so the sentence says the fish was exploring the cave system. The passive construction removes the researchers, leaving the modifier dangling."
    ]
  },
  "q:c8f61eea0a4661f3": {
    "options": [
      "single trait, the ability to adapt quickly to changing circumstances.",
      "single trait—the ability to adapt quickly to changing circumstances.",
      "single trait; the ability to adapt quickly to changing circumstances.",
      "single trait the ability to adapt quickly to changing circumstances."
    ],
    "explanations": [
      "\"A single trait, the ability to adapt...\" attaches the appositive with a comma, which presents the trait as a routine aside. The sentence builds to a revelation of the one trait the journalist found, and in this item the dash is the mark that gives that specification its emphasis.",
      "\"They all shared a single trait\" is a complete thought about what the entrepreneurs shared, and the dash after it introduces the emphatic elaboration naming that trait: \"the ability to adapt quickly to changing circumstances.\"",
      "A semicolon must have an independent clause on both sides, but \"the ability to adapt quickly to changing circumstances\" is a noun phrase with no verb. The semicolon leaves a fragment after it.",
      "With no punctuation, \"a single trait the ability to adapt\" runs the general noun and the phrase that renames it together. The reader has no signal that \"the ability...\" specifies \"trait.\""
    ]
  },
  "q:95b2406d96922011": {
    "options": [
      "On January 15 2024 the event took place.",
      "On January 15 2024, the event took place.",
      "On January 15, 2024 the event took place.",
      "On January 15, 2024, the event took place."
    ],
    "explanations": [
      "With no commas, \"January 15 2024 the event\" runs the day, year, and following clause together. A full date in mid-sentence needs a comma between the day and the year and another after the year.",
      "The comma after \"2024\" is correct, but the comma between the day \"15\" and the year \"2024\" is missing. In month-day-year format, the year is set off by a comma on each side.",
      "\"January 15, 2024\" correctly separates the day from the year, but the comma after \"2024\" is missing. When a full date falls mid-sentence, a comma also follows the year before the sentence continues.",
      "In a mid-sentence month-day-year date, a comma separates the day from the year (\"January 15, 2024\") and another comma follows the year (\"2024, the event took place\")."
    ]
  },
  "q:8274af6311878e1e": {
    "options": [
      "has been",
      "was",
      "were",
      "is"
    ],
    "explanations": [
      "\"Has been\" is singular, but the subject that follows the inverted verb is the compound \"a gold pocket watch, a leather-bound journal, and several navigational instruments,\" which is plural. The sentence also narrates past events, so the present perfect is off.",
      "\"Was\" is singular. The sentence is inverted, with the subject coming after the verb, and that subject is a three-part compound joined by \"and,\" which takes a plural verb.",
      "This sentence is inverted: the subject follows the verb. That subject, \"a gold pocket watch, a leather-bound journal, and several navigational instruments,\" is a plural compound, and the past tense matches \"sank,\" so \"were\" is correct.",
      "\"Is\" is singular and present tense. The compound subject after the blank is plural, and the surrounding account of a shipwreck \"that sank during a storm\" places the discovery in the past."
    ]
  },
  "q:a4592a05ceec726c": {
    "options": [
      "A single dash",
      "A comma",
      "A semicolon",
      "A period"
    ],
    "explanations": [
      "A single dash marks a sudden break or an emphatic addition, not the routine boundary between an introductory dependent clause and the main clause. \"Although it rained -- we went out\" is not standard.",
      "An introductory dependent clause is followed by a comma before the main clause: \"Although it rained, we went out.\" The comma marks where the subordinate clause ends and the independent clause begins.",
      "A semicolon joins two independent clauses, but a dependent clause such as \"Although it rained\" cannot stand alone. A semicolon after it leaves a fragment on the left.",
      "A period would cut the dependent clause off as its own sentence (\"Although it rained.\"), creating a fragment. The dependent clause must stay attached to the main clause that completes it."
    ]
  },
  "q:f1e498c1d4343fbc": {
    "options": [
      "whose",
      "whom",
      "who",
      "which"
    ],
    "explanations": [
      "\"Whose\" is a possessive relative pronoun (\"the doctor whose office...\"). The clause \"___ treated me\" needs a subject for the verb \"treated,\" not a possessive.",
      "\"Whom\" is the object form, but in \"___ treated me\" the pronoun performs the action of treating; the object is \"me.\" Test it: \"he treated me,\" not \"him treated me,\" so \"who\" is needed.",
      "The relative pronoun is the subject of the verb \"treated\" (\"who treated me\"), and it refers to a person, \"the doctor,\" so the subject form \"who\" is correct.",
      "\"Which\" refers to things and animals, not people. \"The doctor\" is a person, so the relative pronoun must be \"who.\""
    ]
  },
  "q:c238f588f1d92394": {
    "options": [
      "Regardless,",
      "Today,",
      "In theory,",
      "By comparison,"
    ],
    "explanations": [
      "\"Regardless\" would say the children speak the language in spite of the revitalization program, but the program is what produced the revival. The relationship is one of outcome, not defiance.",
      "The paragraph moves through time, from the 1908 census to a program begun in the 1980s, and the third sentence reports the present state of the language. \"Today\" marks that final step in the chronology.",
      "\"In theory\" marks a claim as hypothetical or unproven, but the sentence reports observed facts: hundreds of children \"now use the language daily.\" The usage is actual, not theoretical.",
      "\"By comparison\" sets up a side-by-side measurement without conveying the passage's organizing feature, the passage of time from 1908 to the 1980s to now. The sentence is a chronological endpoint, not just a comparison."
    ]
  },
  "q:9d18cfbf7c8fd9d3": {
    "options": [
      "Similarly",
      "However",
      "Therefore",
      "For instance"
    ],
    "explanations": [
      "\"Similarly\" would present the pigeons as a parallel case to some other example, but no example precedes them. The first sentence is a general claim, and the pigeons are its illustration.",
      "\"However\" signals contrast, yet pigeons thriving in cities supports the claim that species adapt to urban environments rather than contradicting it.",
      "\"Therefore\" would make the pigeons' success a conclusion drawn from the general claim. The sentence instead offers pigeons as evidence for the claim, which is the reverse direction.",
      "The first sentence makes a general claim about species adapting to cities, and the second names a specific case, pigeons. \"For instance\" introduces that illustrative example."
    ]
  },
  "q:838251036e9be126": {
    "options": [
      "As a result",
      "For example",
      "Instead",
      "Moreover"
    ],
    "explanations": [
      "\"As a result\" would make the unexpected secondary effects a consequence of confirming the hypothesis. The two findings are separate results of the same study, not cause and effect.",
      "\"For example\" would present the secondary effects as an instance of confirming the hypothesis, but they are a different, additional finding, not an example of the confirmation.",
      "\"Instead\" signals replacement, implying the study did not confirm the hypothesis but revealed secondary effects in its place. The first sentence says the hypothesis was confirmed.",
      "The second sentence adds a further finding on top of the first: the study confirmed the hypothesis and also revealed secondary effects. \"Moreover\" signals that addition."
    ]
  },
  "q:3ad92cc0255fc070": {
    "options": [
      "hers",
      "herselves",
      "herself",
      "she"
    ],
    "explanations": [
      "\"Hers\" is a possessive pronoun standing in for a noun (\"the book is hers\"). The sentence needs an object that refers back to the subject \"She,\" which calls for the reflexive \"herself.\"",
      "\"Herselves\" is not an English word; the reflexive pronouns are \"herself\" (singular) and \"themselves\" (plural). The singular subject \"She\" needs \"herself.\"",
      "The subject \"She\" acts on herself, so the object must be the reflexive pronoun \"herself\": \"She prepared herself for the interview.\" Reflexives are used when subject and object are the same person.",
      "\"She\" is a subject pronoun and cannot serve as the object of \"prepared.\" The sentence already has \"She\" as its subject; the object referring back to that subject must be \"herself.\""
    ]
  },
  "q:da2036d2531087c8": {
    "options": [
      "has required",
      "require",
      "requires",
      "is requiring"
    ],
    "explanations": [
      "\"Has required\" is singular, but a compound subject joined by \"both... and\" (\"Both the laboratory report and the field observation essay\") is always plural. The perfect tense also clashes with the present-tense \"spend.\"",
      "Subjects joined by \"both... and\" are plural, so the plural present-tense verb \"require\" agrees with \"Both the laboratory report and the field observation essay,\" matching the present \"typically spend\" in the next sentence.",
      "\"Requires\" is singular. A compound subject formed with \"both... and\" names two things and takes a plural verb, even though each item (\"report,\" \"essay\") is singular on its own.",
      "\"Is requiring\" is singular and progressive. The \"both... and\" subject is plural, and the sentence states a general, habitual fact about these assignments, not an action happening right now."
    ]
  },
  "q:9682c0e5a4b47e11": {
    "options": [
      "The movie was great; and we should see it again.",
      "The movie was great and, we should see it again.",
      "The movie was great, and we should see it again.",
      "The movie was great, and, we should see it again."
    ],
    "explanations": [
      "A semicolon before a coordinating conjunction is not the standard way to join two short independent clauses; \"; and\" doubles up two joining devices. Use either a semicolon alone or a comma plus \"and.\"",
      "The comma is on the wrong side of the conjunction. \"Great and, we should\" leaves the two independent clauses joined by a bare \"and\" and then inserts a comma that separates \"and\" from its clause.",
      "The comma splice is fixed by adding the coordinating conjunction \"and\" after the comma: \"The movie was great, and we should see it again.\" The comma stays before the conjunction, and nothing follows \"and.\"",
      "\"Great, and, we should\" wraps \"and\" in commas, which wrongly treats the conjunction as an interrupting word. Only one comma belongs, and it goes before \"and.\""
    ]
  },
  "q:c2e94ec02299b313": {
    "options": [
      "My sister, who lives in Boston, visits every summer.",
      "My sister, who lives in Boston visits every summer.",
      "My sister who lives in Boston, visits every summer.",
      "My sister who lives in Boston visits every summer."
    ],
    "explanations": [
      "\"Who lives in Boston\" is extra information about \"My sister,\" so it is enclosed by a comma after \"sister\" and a comma after \"Boston.\" Both commas are needed to set off the nonrestrictive clause.",
      "A comma opens the clause after \"sister,\" but no comma closes it after \"Boston,\" so \"who lives in Boston visits every summer\" runs the clause into the main verb. Nonrestrictive clauses need commas on both sides.",
      "There is a closing comma after \"Boston\" but no opening comma after \"sister.\" The single comma separates the subject from its verb \"visits\" instead of setting off the clause.",
      "With no commas, \"who lives in Boston\" reads as restrictive, implying the speaker has several sisters and is identifying one. The stem says the clause is nonrestrictive, so it must be set off by commas."
    ]
  },
  "q:7b13ae7fbab9cacd": {
    "options": [
      "One idea is made secondary to, or dependent on, the other",
      "The two ideas are presented as grammatically equal",
      "The second idea restates the first in other words",
      "Both ideas become independent clauses joined by a semicolon"
    ],
    "explanations": [
      "Subordination makes one clause dependent on another, as in \"Although it rained, we went out,\" where the \"although\" clause is secondary. This shows that one idea is less central than, or conditional on, the other.",
      "Presenting two ideas as grammatically equal is coordination, done with \"and,\" \"but,\" or a semicolon. Subordination does the opposite, ranking one idea beneath the other.",
      "Restating an idea in other words is the job of a transition such as \"in other words\" or of an appositive. Subordination connects two different ideas by making one depend on the other, not by repeating one.",
      "Two independent clauses joined by a semicolon is coordination; both clauses remain independent and equal. Subordination turns one of them into a dependent clause that cannot stand alone."
    ]
  },
  "q:e65b692fca17c921": {
    "options": [
      "is",
      "was",
      "has been",
      "had been"
    ],
    "explanations": [
      "The surrounding verbs are present tense: Sharma \"argues\" and \"contends.\" The content of her current argument is also stated in the present, \"the gig economy is fundamentally different,\" keeping the tense consistent.",
      "\"Was\" shifts to the past within a sentence framed by the present-tense \"argues.\" It would suggest the gig economy used to be different but no longer is, which is not the argument being described.",
      "\"Has been\" introduces the present perfect, implying a condition that developed over time up to now. The sentence states a present characteristic that Sharma currently \"argues,\" so the simple present is required.",
      "\"Had been\" is the past perfect, which places a state before some other past event. Nothing in the passage is in the past; \"argues\" and \"contends\" are present, so \"had been\" is inconsistent."
    ]
  },
  "q:5bb631f9f04773b0": {
    "options": [
      "glucose but it",
      "glucose, it",
      "glucose, but it",
      "glucose it"
    ],
    "explanations": [
      "\"It relies almost exclusively on glucose\" and \"it can also use ketone bodies\" are both independent clauses. Joining them with \"but\" alone, with no comma before the conjunction, leaves the clause boundary unmarked.",
      "\"Glucose, it can also use\" joins two independent clauses with only a comma, a comma splice. The comma needs a coordinating conjunction after it.",
      "Two independent clauses, \"It relies almost exclusively on glucose\" and \"it can also use ketone bodies...,\" are joined by a comma followed by the coordinating conjunction \"but,\" which also conveys the contrast between the main fuel and the alternative.",
      "\"Glucose it can also use\" runs two independent clauses together with no punctuation or conjunction between them, a fused sentence."
    ]
  },
  "q:5629b1a17d3f9d69": {
    "options": [
      "For example",
      "As a result",
      "Meanwhile",
      "However"
    ],
    "explanations": [
      "\"For example\" would present the highest score as an illustration of studying every evening, but the score is not an instance of studying. It is what the studying produced.",
      "Maria's two weeks of nightly study caused her high score, so the second sentence is an effect of the first. \"As a result\" marks that cause-and-effect relationship.",
      "\"Meanwhile\" implies that earning the high score happened at the same time as, and independently of, the studying. The exam came after the two weeks of preparation, and the score depended on it.",
      "\"However\" signals contrast, as if the high score were surprising given the studying. Studying hard and scoring well point in the same direction, so a contrast word misstates the logic."
    ]
  },
  "q:becaa5dcc63cd3fd": {
    "options": [
      "To illustrate this point",
      "All things considered",
      "In the first place",
      "In the meantime"
    ],
    "explanations": [
      "\"To illustrate this point\" introduces an example that supports a claim. It opens a supporting detail rather than wrapping up the discussion.",
      "\"All things considered\" weighs everything that has been discussed and leads into a concluding judgment, which is what a conclusion transition does.",
      "\"In the first place\" is a sequence transition that marks the opening point in a list of reasons. It begins an argument rather than ending one.",
      "\"In the meantime\" is a time transition meaning \"during the intervening period.\" It describes simultaneity, not a summing up of what has been argued."
    ]
  },
  "q:498e53c48d3b92bf": {
    "options": [
      "I",
      "myself",
      "me",
      "mine"
    ],
    "explanations": [
      "After the linking verb \"was,\" formal usage calls for the subject (nominative) form of the pronoun: \"It was I who made the decision.\" The pronoun renames the subject \"It\" rather than receiving an action.",
      "\"Myself\" is reflexive and requires a matching subject in the same clause (\"I made the decision myself\"). After \"It was,\" there is no \"I\" subject for the reflexive to refer back to.",
      "\"Me\" is the object form. Though common in casual speech, \"It was me\" fails the formal rule the stem asks for, since a pronoun after a linking verb takes the subject case, and \"who made\" also treats the pronoun as a subject.",
      "\"Mine\" is a possessive pronoun that replaces a noun phrase (\"the decision was mine\"). It cannot refer to the person \"who made the decision,\" so it does not fit the sentence."
    ]
  },
  "q:fec1c7ffdc5487eb": {
    "options": [
      ", a fungicide",
      "; a fungicide",
      ": a fungicide",
      ". A fungicide"
    ],
    "explanations": [
      "A comma after \"collapsed\" cannot introduce \"a fungicide applied to the blossoms...\" because the word before the blank is the verb \"collapsed,\" not a noun that this phrase could rename as an appositive. The comma leaves the phrase dangling.",
      "A semicolon requires an independent clause on each side, but \"a fungicide applied to the blossoms during peak foraging hours\" is a noun phrase with no finite verb. A fragment follows the semicolon.",
      "\"The team finally understood why the beehives... had collapsed\" is a complete clause that promises an answer, and the noun phrase \"a fungicide applied to the blossoms...\" supplies it. A colon is the mark that introduces such a specification.",
      "A period would make \"A fungicide applied to the blossoms during peak foraging hours.\" stand as its own sentence, but it has no main verb (\"applied\" is a participle), so it is a fragment."
    ]
  },
  "q:2632f4e94105431c": {
    "options": [
      "\"who\" — it refers to people and things alike",
      "\"that\" — it introduces an essential clause",
      "\"whom\" — it is the object of \"released\"",
      "\"which\" — it introduces a nonessential clause"
    ],
    "explanations": [
      "\"Who\" refers to people, not things like \"the report.\" The stated reasoning is also false: \"who\" does not cover people and things alike.",
      "\"That\" introduces an essential (restrictive) clause and is not set off by commas. Here the commas around the clause mark it as nonessential, so \"that\" conflicts with the punctuation.",
      "\"Whom\" is an object form, but the pronoun here is the subject of \"was released,\" not its object. The reasoning that it is \"the object of 'released'\" misreads the clause.",
      "The commas around \"_____ was released yesterday\" show the clause is nonessential, and \"which\" is the relative pronoun for things in nonessential clauses. It also serves as the subject of \"was released.\""
    ]
  },
  "q:b8f1bdadce34f561": {
    "options": [
      "has disagreed",
      "disagree",
      "is disagreeing",
      "disagrees"
    ],
    "explanations": [
      "\"Has disagreed\" is singular, but \"a number of economists\" is a plural expression meaning \"many economists.\" Only \"the number of\" takes a singular verb. The present perfect also sits oddly beside the present-tense \"argue.\"",
      "\"A number of\" means \"many,\" so \"A number of economists\" is plural and takes the plural verb \"disagree.\" The present tense matches \"These critics argue\" in the next sentence.",
      "\"Is disagreeing\" is singular and progressive. \"A number of economists\" is plural, and the sentence states a standing position, not an action unfolding at this moment.",
      "\"Disagrees\" is singular. It would be correct with \"the number of,\" which refers to a quantity as a single figure, but \"a number of economists\" refers to the economists themselves and is plural."
    ]
  },
  "q:529050f3ed5f6649": {
    "options": [
      "are",
      "were",
      "was",
      "have been"
    ],
    "explanations": [
      "\"Are\" is plural and present tense. The nearer subject in the \"neither... nor\" pair is the singular \"the hydrologist,\" and the sentence describes a completed past situation (\"had designed,\" \"the final report\").",
      "\"Were\" is plural, agreeing with \"the two soil scientists,\" the farther half of the pair. With \"neither... nor,\" the verb agrees with the subject nearer to it, which is the singular \"the hydrologist.\"",
      "With \"neither... nor,\" the verb agrees with the nearer subject, \"the hydrologist,\" which is singular. \"Was\" is singular and past, matching the past-tense framing of a project whose final report was already drafted.",
      "\"Have been\" is plural, so it disagrees with the nearer singular subject \"the hydrologist.\" Its present-perfect aspect also conflicts with the completed past action surrounding the final report."
    ]
  },
  "q:da98deeb155b4f3f": {
    "options": [
      "complex, because the organisms",
      "complex because the organisms",
      "complex. Because the organisms",
      "complex; because the organisms"
    ],
    "explanations": [
      "\"Complex, because the organisms... drought, these environments support\" attaches the \"because\" clause to the first sentence with a comma and then tacks on the second independent clause with another comma, producing a comma splice at \"drought, these.\"",
      "With no punctuation after \"complex,\" the \"because\" clause attaches to the first clause, and then \"drought, these environments support...\" joins a second independent clause with only a comma, a comma splice.",
      "A period after \"complex\" ends the first complete sentence. \"Because the organisms... drought\" then serves as the introductory dependent clause of a new sentence whose main clause is \"these environments support an unusually diverse range of species.\"",
      "A semicolon must have an independent clause on each side, but \"because the organisms that inhabit them have adapted...\" is a dependent clause. The semicolon before \"because\" is misplaced."
    ]
  },
  "q:a8acdf79136a55f4": {
    "options": [
      "surge so",
      "surge; so",
      "surge: so",
      "surge, so"
    ],
    "explanations": [
      "\"Surge so the researchers reconstructed\" joins two independent clauses with the bare conjunction \"so\" and no comma. When a coordinating conjunction links two full clauses, a comma precedes it.",
      "A semicolon already joins two independent clauses by itself. Following it with the coordinating conjunction \"so\" doubles the connective and is nonstandard.",
      "A colon introduces an explanation, list, or elaboration; it is not followed by a coordinating conjunction. \"Surge: so the researchers\" uses the colon where a comma before \"so\" belongs.",
      "\"The tide gauge... failed during the storm surge\" and \"the researchers reconstructed the peak water level...\" are independent clauses joined by the coordinating conjunction \"so,\" which requires a comma before it."
    ]
  },
  "q:569a855327e4dc39": {
    "options": [
      "However,",
      "In other words,",
      "For example,",
      "Therefore,"
    ],
    "explanations": [
      "\"However\" signals contrast, but Hiroshige finishing his major series late in life supports the claim that late productivity was common among printmakers. The sentences agree.",
      "\"In other words\" marks a restatement of the same claim. Hiroshige's career is a new, specific piece of information, not a rephrasing of the generalization about his generation.",
      "The second sentence makes a general claim about late productivity among printmakers, and the third supplies one artist, Hiroshige, whose career illustrates it. \"For example\" introduces that supporting instance.",
      "\"Therefore\" would present Hiroshige's late landscape series as a conclusion drawn from the generalization. His career is evidence for the generalization, not a consequence of it."
    ]
  },
  "q:1fcbaca0cd4109da": {
    "options": [
      "Likewise,",
      "Admittedly,",
      "In summary,",
      "Consequently,"
    ],
    "explanations": [
      "\"Likewise\" would present living groves as a parallel case to seed banks, but the groves are a response to the fact that tropical seeds cannot be banked. The relationship is cause and effect, not similarity.",
      "\"Admittedly\" frames a statement as a concession the writer will go on to counter, but no counterargument follows. The maintenance of groves is a direct consequence, not a grudging admission.",
      "\"In summary\" promises a condensation of what came before, yet the living groves are new information not mentioned earlier. The sentence introduces a result, not a recap.",
      "The second sentence says tropical seeds \"cannot survive drying and freezing\" and are excluded from banks; the third states what botanists do because of that limitation. \"Consequently\" marks the cause-and-effect link."
    ]
  },
  "q:6ad63d8d628abd33": {
    "options": [
      "Additionally",
      "Likewise",
      "Therefore",
      "Nonetheless"
    ],
    "explanations": [
      "\"Additionally\" would add a point in the same direction, but reliable results run against the limitations just mentioned. The relationship is concession, not addition.",
      "\"Likewise\" would say the reliability parallels the limitations, yet the two sentences pull in opposite directions. Limitations would ordinarily undermine reliability.",
      "\"Therefore\" would make the reliability a result of the limitations, which is backwards. Limitations do not cause results to be considered reliable.",
      "The first sentence raises a reason for doubt (several limitations), and the second says the results were accepted anyway. \"Nonetheless\" marks that the second point holds despite the first."
    ]
  },
  "q:9a71c4b7b1526fca": {
    "options": [
      "they're",
      "their",
      "its",
      "it's"
    ],
    "explanations": [
      "\"They're\" is the contraction of \"they are,\" which produces \"has since expanded they are reach,\" and it is plural. The antecedent \"The program\" is singular and needs a possessive.",
      "\"Their\" is plural, but the antecedent is \"The program,\" a singular noun. The possessive pronoun must match the singular antecedent.",
      "The sentence needs a singular possessive referring to \"The program\": \"expanded its reach.\" \"Its\" without an apostrophe is the possessive form.",
      "\"It's\" is the contraction of \"it is\" or \"it has,\" yielding \"expanded it is reach,\" which makes no sense. The possessive form of \"it\" has no apostrophe."
    ]
  },
  "q:c290050b5c678e29": {
    "options": [
      "first, and, next, but, or, yet, so",
      "for, and, nor, but, or, yet, so",
      "for, and, now, but, only, yet, so",
      "for, also, nor, but, or, yet, since"
    ],
    "explanations": [
      "\"First\" and \"next\" are sequence adverbs, not conjunctions; they cannot join two independent clauses with a comma. This list replaces \"for\" and \"nor\" with words that do not belong.",
      "FANBOYS stands for the seven coordinating conjunctions: for, and, nor, but, or, yet, so. Each can join two independent clauses when preceded by a comma.",
      "\"Now\" is an adverb and \"only\" is an adverb or adjective; neither is a coordinating conjunction. This list has swapped out \"nor\" and \"or\" for words that cannot coordinate clauses.",
      "\"Also\" is a conjunctive adverb and \"since\" is a subordinating conjunction; neither coordinates independent clauses as equals. This list drops \"and\" and \"so\" from the true set."
    ]
  },
  "q:b6cbe13b788f748c": {
    "options": [
      "To separate items in a list with commas",
      "To join two words into a compound adjective",
      "To mark the end of a direct quotation",
      "To mark a sudden break or shift in thought"
    ],
    "explanations": [
      "Separating list items that contain commas is the job of semicolons, as in \"Paris, France; Rome, Italy.\" Dashes do not perform that series-separating function.",
      "Joining two words into a compound adjective (\"well-known\") uses a hyphen, a much shorter mark. The em dash is a different punctuation mark with a different job.",
      "Direct quotations are closed with quotation marks, not dashes. A dash does not mark the end of quoted speech, and nothing about quotation is part of the dash's role.",
      "Em dashes signal a sudden break, interruption, or emphatic shift in thought, and in pairs they set off a parenthetical element. That is their primary function."
    ]
  },
  "q:df6835a0840d54a4": {
    "options": [
      "three qualities—intellectual curiosity, emotional resilience, and a willingness to collaborate.",
      "three qualities, intellectual curiosity, emotional resilience, and a willingness to collaborate.",
      "three qualities: intellectual curiosity, emotional resilience, and a willingness to collaborate.",
      "three qualities; intellectual curiosity, emotional resilience, and a willingness to collaborate."
    ],
    "explanations": [
      "A dash after \"three qualities\" would mark an informal break before the list, but \"success in any field depends on three qualities\" formally announces an itemization, and in this item the colon is the mark that introduces a list an independent clause has promised.",
      "\"Three qualities, intellectual curiosity, emotional resilience, and a willingness to collaborate\" uses a comma that blends into the commas inside the list, so the reader sees a flat series of four items instead of a category and its three members.",
      "\"Success in any field depends on three qualities\" is an independent clause that announces a set of items, and the colon after it introduces the list: \"intellectual curiosity, emotional resilience, and a willingness to collaborate.\"",
      "A semicolon requires an independent clause on each side, but \"intellectual curiosity, emotional resilience, and a willingness to collaborate\" is a list of noun phrases with no verb. The semicolon leaves a fragment."
    ]
  },
  "q:0133ca97d724dd01": {
    "options": [
      "The dog's played in the park.",
      "The dogs' played in the park.",
      "The dogs played in the park.",
      "The dog's played in the park's."
    ],
    "explanations": [
      "\"The dog's\" is a singular possessive, which would mean something belonging to one dog. The sentence has multiple dogs and no possession, so the apostrophe is wrong.",
      "\"The dogs'\" is a plural possessive, as in \"the dogs' bowls.\" Here the dogs own nothing; they are simply the plural subject of \"played,\" so no apostrophe belongs.",
      "Several dogs are doing the playing and nothing belongs to them, so the plain plural \"dogs\" is correct. Apostrophes mark possession or contraction, never plurality.",
      "\"The dog's... the park's\" adds possessive apostrophes to two nouns that possess nothing. \"The park's\" at the end of the sentence has no following noun to possess, making the error obvious."
    ]
  },
  "q:86a5ba135935665e": {
    "options": [
      "their",
      "its",
      "his",
      "they're"
    ],
    "explanations": [
      "\"A student\" is an unspecified person of unknown gender, and singular \"their\" is the widely accepted gender-neutral possessive: \"check their work.\" The stem asks specifically for the gender-neutral form.",
      "\"Its\" is the possessive used for things and animals, not people. Referring to a student as \"it\" is not acceptable in Standard English.",
      "\"His\" assumes the student is male. The stem asks for a gender-neutral pronoun, so a gendered choice does not meet the requirement.",
      "\"They're\" is the contraction of \"they are,\" producing \"check they are work.\" The sentence needs a possessive pronoun before \"work,\" not a contraction."
    ]
  },
  "q:233b22b02a3e50d8": {
    "options": [
      "have announced",
      "announce",
      "are announcing",
      "has announced"
    ],
    "explanations": [
      "\"Have announced\" is plural, but \"committee\" is a collective noun acting as one unit here, deciding and announcing as a body. It takes a singular verb.",
      "\"Announce\" is plural and present. The subject \"The committee\" is singular, and the next sentence places the announcement in the past (\"was met with widespread praise\").",
      "\"Are announcing\" is plural and progressive. \"The committee\" acts as a single unit and is singular, and the announcement has already been made and reacted to.",
      "\"Committee\" is a collective noun acting as a single body, so it takes a singular verb. \"Has announced\" is singular, and its perfect aspect fits an announcement whose reception the next sentence describes."
    ]
  },
  "q:7b2ab9b496cde2eb": {
    "options": [
      "Instead",
      "For example",
      "In addition",
      "In contrast"
    ],
    "explanations": [
      "\"Instead\" would mean the library lends laptops in place of offering homework help, but the passage presents both services as things the library provides.",
      "\"For example\" would make lending laptops an example of homework help, but it is a separate service, not an instance of tutoring after school.",
      "The second sentence names a second service the library provides alongside the first, so an addition transition is needed. \"In addition\" signals that laptops are one more offering.",
      "\"In contrast\" would set the laptop lending against the homework help as if they differed in some important way. Both are services offered to students, and nothing is being contrasted."
    ]
  },
  "q:307ed7f98fbe6893": {
    "options": [
      "They add an example to support a claim",
      "They show a contrast between two points",
      "They introduce a brand-new idea",
      "They signal that the writer is summing up"
    ],
    "explanations": [
      "Adding an example to support a claim is the job of illustration transitions such as \"for example\" or \"for instance,\" not of conclusion transitions.",
      "Showing contrast between two points is what \"however\" or \"on the other hand\" does. Conclusion transitions do not introduce opposition between ideas.",
      "Introducing a brand-new idea is the opposite of concluding. A conclusion transition tells the reader the argument is wrapping up, not that a new topic is beginning.",
      "Conclusion transitions such as \"in conclusion,\" \"ultimately,\" and \"in short\" signal that the writer is summing up the argument or drawing a final point from what has been said."
    ]
  },
  "q:3d411257ca442986": {
    "options": [
      "The results however were unexpected.",
      "However; the results were unexpected.",
      "However, the results were unexpected.",
      "However the results, were unexpected."
    ],
    "explanations": [
      "\"The results however were unexpected\" buries \"however\" mid-sentence with no commas; an interrupting conjunctive adverb needs commas around it. The question also asks for \"however\" at the start of the sentence.",
      "A semicolon after \"However\" is wrong because a semicolon joins two independent clauses, and \"However\" is a single word, not a clause.",
      "A conjunctive adverb opening a sentence is followed by a comma: \"However, the results were unexpected.\" The comma separates the transitional word from the clause it introduces.",
      "\"However the results, were unexpected\" omits the needed comma after \"However\" and inserts one between the subject \"results\" and its verb \"were,\" where no comma belongs."
    ]
  },
  "q:78aea07df5d2d521": {
    "options": [
      "I went to the store but, it was closed.",
      "I went, to the store but it was closed.",
      "I went to the store but it was closed.",
      "I went to the store, but it was closed."
    ],
    "explanations": [
      "\"Store but, it was closed\" places the comma after the conjunction instead of before it. The comma should precede \"but\" to mark the boundary between the two independent clauses.",
      "\"I went, to the store\" wrongly separates the verb \"went\" from its prepositional phrase, and the comma needed before \"but\" is missing.",
      "\"I went to the store but it was closed\" joins two independent clauses with the bare conjunction \"but.\" A comma is required before a coordinating conjunction that links two full clauses.",
      "\"I went to the store\" and \"it was closed\" are independent clauses joined by the coordinating conjunction \"but,\" so a comma goes before \"but\": \"store, but it was closed.\""
    ]
  },
  "q:7f14675f72d67704": {
    "options": [
      "A dash before the element and a colon after it",
      "Two, one placed before the element and one after it",
      "Three: one before, one inside, and one after the element",
      "One, placed before the element, with a comma after it"
    ],
    "explanations": [
      "A dash and a colon cannot be paired to set off an element. A colon introduces what follows; it does not close an interruption that a dash opened.",
      "Like paired commas or parentheses, dashes that set off a parenthetical come in a matched pair: one before the element and one after it, so the reader can see where the interruption begins and ends.",
      "No dash goes inside the parenthetical element. Three dashes would chop the sentence into pieces and leave the reader unable to tell which parts belong to the interruption.",
      "A dash cannot be matched with a comma. If a dash opens a mid-sentence parenthetical, a dash must close it; mixing marks leaves the boundaries mismatched."
    ]
  },
  "q:03d534fb9f4cf74e": {
    "options": [
      "We bought apples oranges, and bananas.",
      "We bought apples, oranges, and bananas.",
      "We bought apples, oranges and bananas.",
      "We bought apples oranges and bananas."
    ],
    "explanations": [
      "\"Apples oranges, and bananas\" is missing the comma between \"apples\" and \"oranges.\" In a series, a comma follows every item before the final conjunction, not just the next-to-last.",
      "\"Apples, oranges, and bananas\" places a comma after every item before \"and,\" including the Oxford comma before the final conjunction, which is what the question asks for.",
      "\"Apples, oranges and bananas\" omits the comma before \"and.\" That is acceptable in some styles, but the missing mark is precisely the Oxford (serial) comma, which the question asks you to use.",
      "\"Apples oranges and bananas\" has no commas at all, so the three items are not separated. A list of three or more items requires commas between them."
    ]
  },
  "q:1341a3e38e20cbd9": {
    "options": [
      "theirs",
      "their",
      "they're",
      "his or her"
    ],
    "explanations": [
      "\"Theirs\" is a possessive pronoun that stands alone (\"the textbooks are theirs\"); it cannot sit before a noun. Before \"textbooks,\" the possessive determiner \"their\" is needed.",
      "\"The students\" is plural, so the plural possessive determiner \"their\" agrees with it: \"their textbooks.\"",
      "\"They're\" is the contraction of \"they are,\" producing \"bring they are textbooks.\" The sentence needs a possessive, not a contraction.",
      "\"His or her\" is singular, but the antecedent \"students\" is plural. The pronoun must agree in number with the noun it refers to."
    ]
  },
  "q:1670270ec9d60137": {
    "options": [
      "inspiring",
      "has inspired",
      "have inspired",
      "were inspiring"
    ],
    "explanations": [
      "\"Inspiring\" is a participle, not a finite verb, so the sentence would have no main verb: \"The success... inspiring other nations\" is a fragment.",
      "The subject is the singular \"success\"; the clause \"which now provides heating for... homes\" is a nonrestrictive modifier set off by commas. The singular \"has inspired\" agrees with \"success.\"",
      "\"Have inspired\" is plural, agreeing with the nearby \"homes,\" but \"homes\" sits inside the relative clause. The true subject is the singular \"success,\" which precedes that clause.",
      "\"Were inspiring\" is plural and past progressive. The subject \"success\" is singular, and the present-tense \"now provides\" shows the inspiration is ongoing, so the past tense is inconsistent."
    ]
  },
  "q:dcc9f8096333de51": {
    "options": [
      "its'",
      "it's",
      "its",
      "their"
    ],
    "explanations": [
      "\"Its'\" is not a word. The possessive \"its\" never takes an apostrophe in any position, and an apostrophe after the -s cannot form a contraction either.",
      "\"It's\" is the contraction of \"it is,\" which would read \"announced that it is new sustainability initiative would reduce,\" which is ungrammatical. The sentence needs the possessive.",
      "The initiative belongs to \"The company,\" a singular noun, so the singular possessive \"its\" (no apostrophe) is correct: \"its new sustainability initiative.\"",
      "\"Their\" is plural, but the antecedent \"The company\" is a singular noun. A company is referred to as \"it,\" so the possessive is \"its.\""
    ]
  },
  "q:a9f1415bf1b876fe": {
    "options": [
      "Similarly",
      "However",
      "In addition",
      "For example"
    ],
    "explanations": [
      "\"Similarly\" would say the critics' point parallels the supporters' praise, but pointing to high cost opposes praising benefits. The two sentences take opposite sides.",
      "The first sentence gives the supporters' view and the second turns to the critics' objection, so a contrast transition is required. \"However\" marks that opposing view.",
      "\"In addition\" would present the critics' complaint as another point in the same direction as the supporters' praise, but criticism of cost works against the policy, not for it.",
      "\"For example\" would make the critics' objection an example of the policy's benefits, which is contradictory. The second sentence contrasts with the first rather than illustrating it."
    ]
  },
  "q:023f2a7902821aeb": {
    "options": [
      "First, next, then, finally",
      "Therefore, consequently, thus",
      "For example, such as",
      "However, but, yet, although"
    ],
    "explanations": [
      "\"First, next, then, finally\" are sequence transitions; they lay out the order in which events or steps occur, which is what the question asks for.",
      "\"Therefore, consequently, thus\" are cause-and-effect transitions that show one thing follows logically from another, not the order of events in time.",
      "\"For example, such as\" introduce illustrations of a general claim. They signal examples, not chronological order.",
      "\"However, but, yet, although\" are contrast words that signal opposition or an unexpected turn, not a sequence of steps."
    ]
  },
  "q:0374cd6477ff125a": {
    "options": [
      "have been",
      "are",
      "were",
      "is"
    ],
    "explanations": [
      "\"Have been\" is plural, but with \"neither... nor\" the verb agrees with the nearer subject, \"the addition of new bus routes,\" which is singular.",
      "\"Are\" is plural and agrees with neither half of the pair; \"the expansion\" and \"the addition\" are each singular, and the nearer one, \"the addition,\" governs the verb.",
      "\"Were\" is plural and past. The nearer subject, \"the addition,\" is singular, and the conclusion is stated as a general present truth about what \"is sufficient.\"",
      "With \"neither... nor,\" the verb agrees with the nearer subject. \"The addition of new bus routes\" is singular (\"routes\" is inside a prepositional phrase), so \"is\" is correct."
    ]
  },
  "q:067db56aeb99e30c": {
    "options": [
      "Einstein, arguably the greatest physicist ever, developed general relativity.",
      "Einstein, arguably the greatest physicist ever developed general relativity.",
      "Einstein arguably the greatest physicist ever, developed general relativity.",
      "Einstein arguably, the greatest physicist ever developed general relativity."
    ],
    "explanations": [
      "\"Arguably the greatest physicist ever\" is a nonessential appositive renaming Einstein, so it is enclosed by a comma after \"Einstein\" and a comma after \"ever.\"",
      "A comma opens the appositive after \"Einstein,\" but no comma closes it after \"ever,\" so \"physicist ever developed general relativity\" runs the appositive into the verb.",
      "There is a closing comma after \"ever\" but no opening comma after \"Einstein.\" The lone comma ends up separating the subject from its verb \"developed.\"",
      "\"Einstein arguably, the greatest physicist\" places the comma in the middle of the appositive, cutting \"arguably\" off from the phrase it modifies, and no comma closes the appositive before \"developed.\""
    ]
  },
  "q:0657d59bc701d26d": {
    "options": [
      "hers",
      "her",
      "their",
      "his"
    ],
    "explanations": [
      "\"Hers\" is a possessive pronoun that stands alone (\"the lunch is hers\"); it cannot come before the noun \"lunch.\" The possessive determiner \"her\" is needed.",
      "\"Neither\" is a singular pronoun, and \"of the girls\" shows the referent is female, so the singular feminine possessive \"her\" is correct in formal usage: \"Neither of the girls forgot her lunch.\"",
      "\"Their\" is plural, but \"neither\" is grammatically singular. Formal usage, which the stem requests, calls for a singular pronoun that matches \"neither.\"",
      "\"His\" is singular, but the antecedent is \"neither of the girls,\" so the pronoun must be feminine. \"His\" misidentifies the referent."
    ]
  },
  "q:55aef3adf7bb5b9a": {
    "options": [
      "It has fewer words than a complete sentence requires",
      "It is missing a direct object after its main verb",
      "It has no independent clause to complete the thought",
      "It begins with a word that should not be capitalized"
    ],
    "explanations": [
      "Length does not determine completeness; \"She left.\" is a two-word complete sentence. The fragment fails because it lacks an independent clause, not because it is short.",
      "\"Was\" is a linking verb and does not take a direct object; \"the best option available\" completes it. The problem is structural, not a missing object.",
      "\"Which was the best option available\" is a relative (dependent) clause introduced by \"which.\" It has a subject and verb but no independent clause to attach to, so it cannot stand as a sentence.",
      "Capitalization is a matter of mechanics, not sentence structure. Changing the capital \"W\" would not fix the fragment; the clause would still lack an independent clause."
    ]
  },
  "q:d64f30539544f64a": {
    "options": [
      "The answer, was clear: we had to leave immediately.",
      "The answer was: clear we had to leave immediately.",
      "The answer was clear: we had to leave immediately.",
      "The answer was clear, we had to leave immediately."
    ],
    "explanations": [
      "\"The answer, was clear\" places a comma between the subject \"answer\" and its verb \"was,\" where no comma belongs. The colon itself is correctly placed, but the sentence contains that extra error.",
      "\"The answer was: clear we had to leave\" puts the colon after \"was,\" splitting the verb from its complement \"clear,\" and then runs \"clear we had to leave\" together without punctuation.",
      "\"The answer was clear\" is a complete independent clause, and the colon after it introduces the explanation \"we had to leave immediately.\" That is the colon's role.",
      "\"The answer was clear, we had to leave immediately\" joins two independent clauses with only a comma, a comma splice. The second clause explains the first, which is a job for a colon."
    ]
  },
  "q:714f873f4cba29c1": {
    "options": [
      "dense; however,",
      "dense, however,",
      "dense: however,",
      "dense however,"
    ],
    "explanations": [
      "\"The atmosphere of Venus is extremely dense\" and \"recent missions have detected...\" are independent clauses linked by the conjunctive adverb \"however.\" A semicolon goes before \"however\" and a comma after it.",
      "\"Dense, however, recent missions\" joins two independent clauses with only commas around \"however.\" Since \"however\" is not a coordinating conjunction, this is a comma splice.",
      "A colon introduces an explanation or elaboration of what precedes it. The second clause contrasts with the first rather than explaining it, and \"however\" already signals the contrast, so the colon is the wrong mark.",
      "\"Dense however, recent missions\" has no punctuation between the two independent clauses before \"however,\" producing a run-on. A semicolon is needed before the conjunctive adverb."
    ]
  },
  "q:fc7345b7c208f7e7": {
    "options": [
      "childrens'",
      "children'",
      "children's",
      "childrens"
    ],
    "explanations": [
      "\"Childrens'\" puts the apostrophe after an -s that \"children\" does not have. The s-apostrophe pattern applies only to regular plurals that already end in -s, such as \"students'.\"",
      "\"Children'\" adds a bare apostrophe with no -s. The possessive of a plural not ending in -s is formed with 's, so the -s is required.",
      "\"Children\" is an irregular plural that does not end in -s, so its possessive adds 's: \"the children's toys.\"",
      "\"Childrens\" is not a word; \"children\" is already plural, and adding -s does not make it possessive. An apostrophe is needed to show possession."
    ]
  },
  "q:109ae0b519ec1e07": {
    "options": [
      "for example",
      "as a result",
      "by contrast",
      "similarly"
    ],
    "explanations": [
      "\"For example\" would make the 1788 survey an instance of the exaggerated maps, but the survey was accurate, the opposite of what the first sentence describes.",
      "\"As a result\" would make the survey's accuracy a consequence of the other maps' exaggeration. One map being accurate does not follow causally from others being wrong.",
      "Most early maps exaggerated the lakes, while the 1788 survey came close to modern measurements. The survey is set against the others, and \"by contrast\" signals that opposition.",
      "\"Similarly\" would say the 1788 survey shared the other maps' exaggeration, but the sentence says it matched modern satellite measurements. The transition reverses the meaning."
    ]
  },
  "q:c27eeabe3949bc3b": {
    "options": [
      "In those cases,",
      "In addition,",
      "By contrast,",
      "For example,"
    ],
    "explanations": [
      "The second sentence names a specific condition, bone that is \"burned or fragmented,\" and the third describes what researchers do under exactly that condition. \"In those cases\" marks that conditional link.",
      "\"In addition\" would present peptide sequencing as a routine further step alongside shape analysis, but it is a substitute used only when shape fails. The relationship is conditional, not additive.",
      "\"By contrast\" would set the two methods against each other as rivals, but the passage does not compare them in opposition. It explains when the second method is used instead of the first.",
      "\"For example\" would make peptide sequencing an instance of shape being unreliable, which it is not. The third sentence describes a response to that problem, not an example of it."
    ]
  },
  "q:05076475bcc0d299": {
    "options": [
      "Even so,",
      "In contrast,",
      "Sure enough,",
      "In any case,"
    ],
    "explanations": [
      "\"Even so\" would mean colonies grew despite plating the two organisms together, contradicting the causal link the passage establishes between co-culture and growth.",
      "\"In contrast\" would set the result against the microbiologist's hypothesis, but the result confirms the hypothesis. The two sentences agree.",
      "The second sentence proposes a hypothesis, that the bacterium needs a compound from another species, and the third reports that growing them together produced colonies. \"Sure enough\" marks a prediction borne out.",
      "\"In any case\" dismisses the preceding point as beside the point, but the hypothesis is exactly what the seventy-two-hour result confirms. It is central, not irrelevant."
    ]
  },
  "q:abe46e9ce4dc560b": {
    "options": [
      "not only increased voter turnout and also strengthened community engagement",
      "not only increased voter turnout but also the strengthening of community engagement",
      "not only increasing voter turnout but also strengthened community engagement",
      "not only increased voter turnout but also strengthened community engagement"
    ],
    "explanations": [
      "\"Not only... and also\" is not the correct correlative pair; \"not only\" must be completed by \"but also.\" The conjunction \"and\" breaks the fixed idiom.",
      "\"Not only increased voter turnout but also the strengthening of community engagement\" pairs a past-tense verb with a noun phrase, breaking parallel structure. Both parts must be verbs.",
      "\"Not only increasing voter turnout but also strengthened\" pairs a participle with a past-tense verb, and \"increasing\" leaves the sentence without a finite main verb for \"the introduction.\"",
      "\"Not only... but also\" requires parallel elements. \"Increased voter turnout\" and \"strengthened community engagement\" are both past-tense verb phrases, so the structure is parallel and complete."
    ]
  },
  "q:75aa633b664cec1a": {
    "options": [
      "mandate every new building",
      "mandate: every new building",
      "mandate; every new building",
      "mandate, every new building"
    ],
    "explanations": [
      "\"Mandate every new building constructed\" runs two independent clauses together with no punctuation, a fused sentence. The boundary after \"mandate\" must be marked.",
      "\"The California state legislature passed an ambitious environmental protection mandate\" is a complete clause, and the colon introduces the specification of what the mandate requires: that every new building must include solar panels.",
      "A semicolon would join the two clauses as independent equals, but the second clause spells out the content of the mandate just named, and in this item the colon is the mark that signals the second clause defines the first.",
      "\"Mandate, every new building constructed after January 1, 2025, must include\" joins two independent clauses with only a comma, a comma splice."
    ]
  },
  "q:b5727b0fd469a34e": {
    "options": [
      "because of the details",
      "for the details",
      "the details",
      "for details that"
    ],
    "explanations": [
      "\"Because of the details\" introduces a different preposition and a causal meaning that do not match \"for the arguments they advance.\" The two halves of \"less... than\" must be parallel.",
      "The first half of the comparison is \"for the arguments they advance,\" so the second half must be the parallel prepositional phrase \"for the details they preserve.\" \"Less for X than for Y\" is the balanced form.",
      "\"The details\" drops the preposition \"for,\" so the two halves of \"less... than\" no longer match: \"less for the arguments... than the details.\" The parallel requires repeating \"for.\"",
      "\"For details that\" adds the relative pronoun \"that,\" which the first half did not use, and drops \"the.\" \"For details that they preserve\" breaks the structure established by \"for the arguments they advance.\""
    ]
  },
  "q:01e8b619b0f62ac4": {
    "options": [
      "who",
      "which",
      "whom",
      "whose"
    ],
    "explanations": [
      "\"Who\" is the subject form, but in \"the voters selected ___\" the pronoun is the object of \"selected\"; the subject is \"the voters.\" Test it: \"the voters selected him,\" not \"he.\"",
      "\"Which\" refers to things, not people. \"The candidate\" is a person, so the relative pronoun must be a form of \"who.\"",
      "The pronoun is the object of the verb \"selected\" (the voters selected the candidate), so the object form \"whom\" is correct: \"The candidate whom the voters selected.\"",
      "\"Whose\" is possessive and would require a noun to follow it (\"whose campaign\"). The clause needs an object for \"selected,\" not a possessive."
    ]
  },
  "q:5bedd8eff29e5b20": {
    "options": [
      "garage; the",
      "garage, the",
      "garage: the",
      "garage the"
    ],
    "explanations": [
      "A semicolon requires an independent clause on each side, but everything before the blank consists of two \"because\" clauses, which are dependent. A long introductory element is still dependent.",
      "The two coordinated \"Because...\" clauses form a single introductory dependent element, and a comma separates it from the main clause \"engineers expected far more surface noise.\" Length does not change that rule.",
      "A colon must follow an independent clause that introduces what comes next. The \"because\" clauses before the blank cannot stand alone, so the colon has no complete clause to attach to.",
      "With no punctuation after \"garage,\" the long introductory element runs straight into the main clause, so readers cannot see where the dependent \"because\" clauses end and \"engineers expected\" begins."
    ]
  },
  "q:fcb55212f56a9d14": {
    "options": [
      "No, because a list after a verb needs a semicolon instead",
      "Yes, because a colon may introduce any list of items",
      "Yes, as long as the list contains at least three items",
      "No, because \"She bought\" is not a complete sentence"
    ],
    "explanations": [
      "A semicolon would be even worse; it requires an independent clause on each side, and \"milk, eggs, and bread\" is a list, not a clause. The reasoning about semicolons is wrong.",
      "A colon may introduce a list only after a complete independent clause. \"She bought\" is a subject and verb awaiting an object, so the colon splits the verb from its object.",
      "The number of items does not matter. A colon introduces a list only when the words before it form a complete thought, and \"She bought\" is not one.",
      "\"She bought\" is not a complete sentence; the verb \"bought\" needs its object. A colon can introduce a list only after an independent clause, so \"She bought milk, eggs, and bread\" needs no colon at all."
    ]
  },
  "q:174266349da0587c": {
    "options": [
      "No; a dependent clause follows the semicolon",
      "Yes; a semicolon may join any two related clauses",
      "No; a comma is also needed after \"because\"",
      "No; the semicolon should be a colon instead"
    ],
    "explanations": [
      "\"Because she was tired\" is a dependent clause, and a semicolon can only join two independent clauses. The sentence should be \"She left early because she was tired,\" with no punctuation at all.",
      "A semicolon does not join \"any two related clauses\"; it joins two independent clauses. \"Because she was tired\" cannot stand alone, so the semicolon is wrong.",
      "Adding a comma after \"because\" would make things worse, separating the subordinating conjunction from its clause. The problem is the semicolon, not a missing comma.",
      "A colon would also be wrong, since a colon introduces an explanation or list after a complete clause, and \"because she was tired\" is a subordinate clause already linked by \"because.\""
    ]
  },
  "q:e47e6f5369eee3b7": {
    "options": [
      "Moreover,",
      "However,",
      "Instead,",
      "After all,"
    ],
    "explanations": [
      "\"Moreover\" would add a separate new point, but the third sentence does not introduce a new topic. It backs up the claim that \"predictable is not the same as constant\" with the fact of slack periods.",
      "\"However\" signals contrast, but the slack-water fact supports the preceding claim rather than opposing it. A turbine producing nothing four times a day is precisely why predictable differs from constant.",
      "\"Instead\" marks a replacement for a rejected alternative, but nothing has been rejected. The third sentence explains the second rather than substituting for it.",
      "The second sentence draws a distinction, and the third supplies the reason that distinction matters: turbines generate nothing during daily slack periods. \"After all\" introduces a supporting justification for the claim just made."
    ]
  },
  "q:3da3fbdba65053d7": {
    "options": [
      "Still,",
      "For example,",
      "Likewise,",
      "Thus,"
    ],
    "explanations": [
      "\"Still\" signals that a point holds in spite of what preceded, but the inference about reliability does not survive an obstacle; it follows directly from the data about satisfaction and commute times.",
      "\"For example\" would make the conclusion an instance of the commute-time difference, but an inference is not an example. The third sentence interprets the data rather than illustrating it.",
      "\"Likewise\" would present the third sentence as a parallel case, but it is not another finding alongside the first two. It is the conclusion drawn from them.",
      "The first two sentences establish a pattern (equal satisfaction despite very different commutes), and the third draws the inference that satisfaction tracks reliability, not travel time. \"Thus\" marks that conclusion."
    ]
  },
  "q:f7af11b7f260a057": {
    "options": [
      "After finishing, dinner, we watched a movie.",
      "After finishing dinner, we watched, a movie.",
      "After finishing dinner, we watched a movie.",
      "After, finishing dinner, we watched a movie."
    ],
    "explanations": [
      "\"After finishing, dinner\" splits the participle \"finishing\" from its object \"dinner\" with a comma, which does not belong inside the introductory phrase.",
      "\"We watched, a movie\" places a comma between the verb \"watched\" and its object \"a movie,\" where no comma belongs. Only the comma after the introductory phrase is needed.",
      "The introductory phrase \"After finishing dinner\" is followed by a comma, and the main clause \"we watched a movie\" contains no unnecessary commas.",
      "\"After, finishing dinner\" puts the comma after the preposition \"After,\" cutting it off from the rest of its phrase, and omits the needed comma at the end of the phrase."
    ]
  },
  "q:d69e753d0e5b3c8f": {
    "options": [
      "A clause that begins with \"and\" or \"but\"",
      "Words punctuated as a sentence but lacking a complete clause",
      "Two independent clauses joined by a comma",
      "Any sentence that is shorter than five words"
    ],
    "explanations": [
      "A clause beginning with \"and\" or \"but\" can be a complete sentence (\"But she stayed.\"). Starting with a conjunction does not by itself make a fragment.",
      "A fragment is a group of words punctuated as a sentence that lacks a complete independent clause: it is missing a subject, a verb, or a complete thought.",
      "Two independent clauses joined by only a comma is a comma splice, a different error. A comma splice has too much, not too little, to be a single sentence.",
      "Length has nothing to do with completeness. \"It rained.\" is a two-word complete sentence, while a long string of words can still be a fragment."
    ]
  },
  "q:45603cc9e88f7ee3": {
    "options": [
      "however, therefore, thus",
      "because, although, unless",
      "for, nor, yet, so",
      "and, but, or"
    ],
    "explanations": [
      "\"However, therefore, thus\" are conjunctive adverbs. They connect ideas between sentences but do not make the clause they introduce dependent.",
      "\"Because, although, unless\" are subordinating conjunctions: each introduces a dependent clause that cannot stand alone and must attach to a main clause.",
      "\"For, nor, yet, so\" are four of the seven coordinating conjunctions (FANBOYS), which join elements as grammatical equals rather than subordinating one clause to another.",
      "\"And, but, or\" are coordinating conjunctions. They join independent clauses or other parallel elements as equals; they do not create dependent clauses."
    ]
  },
  "q:f10e1eb53a1919ec": {
    "options": [
      "Move the pronoun nearer to the sentence start",
      "Replace the unclear pronoun with the noun it means",
      "Add a second pronoun that refers to the same noun",
      "Replace the unclear pronoun with a reflexive one"
    ],
    "explanations": [
      "Moving the pronoun to a different place in the sentence does not resolve what it refers to. If \"it\" could mean two things, it still could after being relocated.",
      "When a pronoun could refer to more than one noun, the clearest fix is to replace it with the specific noun it means, eliminating the ambiguity entirely.",
      "Adding a second pronoun pointing at the same unclear noun doubles the ambiguity rather than resolving it. Two vague references are worse than one.",
      "A reflexive pronoun (\"itself,\" \"themselves\") is used only when the subject acts on itself. Swapping in a reflexive does not clarify which noun is meant and usually creates a new grammatical error."
    ]
  },
  "q:b84e6867ba2f60fa": {
    "options": [
      "maintained",
      "maintains",
      "has maintained",
      "was maintaining"
    ],
    "explanations": [
      "The passage narrates completed events set \"During the Great Depression,\" and the following sentence uses the past (\"created,\" \"established\"). The simple past \"maintained\" fits that historical narrative.",
      "\"Maintains\" is present tense, but Roosevelt's position was held during the Great Depression, a completed historical period. The present clashes with \"created\" and \"established\" in the next sentence.",
      "\"Has maintained\" is the present perfect, which implies an action continuing up to the present. Roosevelt is a historical figure described in a past-tense narrative, so the perfect is inconsistent.",
      "\"Was maintaining\" describes an action in progress at a particular past moment, but the sentence states a settled position he held, and the surrounding verbs are simple past, not progressive."
    ]
  },
  "q:b4ef47946c456358": {
    "options": [
      "a comma or no punctuation",
      "a comma between them",
      "a period or a semicolon",
      "a comma plus \"however\""
    ],
    "explanations": [
      "A comma alone creates a comma splice, and no punctuation creates a fused sentence. Neither is acceptable between two independent clauses with no conjunction.",
      "A comma between two independent clauses with no coordinating conjunction is a comma splice. The comma needs \"and,\" \"but,\" or another FANBOYS word after it to be correct.",
      "Two independent clauses without a conjunction need either a period, making two sentences, or a semicolon, which joins them while keeping them in one sentence.",
      "\"However\" is a conjunctive adverb, not a coordinating conjunction, so \"comma plus 'however'\" still leaves a comma splice. \"However\" between clauses needs a semicolon before it."
    ]
  },
  "q:d9e7db8196500b63": {
    "options": [
      "No error: a comma can join two short, closely related clauses",
      "A comma splice: two independent clauses joined by a comma alone",
      "A fragment: the second clause is missing its own subject",
      "An agreement error: \"The movie was\" should be \"were\""
    ],
    "explanations": [
      "A comma cannot join two independent clauses no matter how short or closely related they are. \"The movie was great\" and \"we should see it again\" each stand alone, so the comma alone is an error.",
      "\"The movie was great\" and \"we should see it again\" are both independent clauses, and they are joined by only a comma with no coordinating conjunction. That is a comma splice.",
      "The second clause is not a fragment; \"we should see it again\" has the subject \"we\" and the verb \"should see.\" The problem is the joining, not a missing subject.",
      "\"The movie was\" is correct agreement; \"movie\" is singular and takes \"was.\" The sentence's error is punctuation, not subject-verb agreement."
    ]
  },
  "q:beb9cf7a00ac6170": {
    "options": [
      "but",
      "seldom",
      "also",
      "instead"
    ],
    "explanations": [
      "\"But\" signals contrast, implying that doing well in science is unexpected given excelling in math. The question asks for a word that adds information in the same direction.",
      "\"Seldom\" means rarely and would say she does not usually perform well in science, which subtracts from the praise rather than adding to it.",
      "\"Also\" adds a second, parallel piece of information: she excels in math and performs well in science too. It is the addition word the question asks for.",
      "\"Instead\" signals replacement, implying she performs well in science rather than excelling in math. That contradicts the first sentence rather than adding to it."
    ]
  },
  "q:160e2cf8deb85c85": {
    "options": [
      "As a result",
      "For example",
      "Meanwhile",
      "However"
    ],
    "explanations": [
      "The data showing a decline caused the committee to recommend changes, so the second sentence is a consequence of the first. \"As a result\" marks that cause-and-effect relationship.",
      "\"For example\" would make the committee's recommendation an example of the data showing a decline, but a recommendation is a response to the data, not an instance of it.",
      "\"Meanwhile\" implies the recommendation happened at the same time as, and independently of, the data. The committee acted because of the decline, so a causal transition is needed.",
      "\"However\" signals contrast, as though recommending changes were surprising after data showed a decline. Recommending changes is the expected response, not a reversal."
    ]
  },
  "q:168a161356a17f61": {
    "options": [
      "They show that events happen in a set time order",
      "They show that one idea contrasts with another",
      "They show that one event or idea leads to another",
      "They introduce an example that illustrates a claim"
    ],
    "explanations": [
      "Showing that events happen in a set time order is the role of sequence transitions such as \"first,\" \"next,\" and \"finally,\" not of cause-and-effect transitions.",
      "Showing contrast is the job of words like \"however\" and \"nevertheless.\" Cause-and-effect transitions connect a cause to its result, not opposing ideas.",
      "Cause-and-effect transitions such as \"therefore,\" \"consequently,\" and \"as a result\" signal that one event or idea leads to or produces another.",
      "Introducing an example that illustrates a claim is what \"for example\" and \"for instance\" do. Cause-and-effect transitions express consequence, not illustration."
    ]
  },
  "q:fac4dedd1d119f78": {
    "options": [
      "has written",
      "wrote",
      "writes",
      "had written"
    ],
    "explanations": [
      "\"Has written\" is present perfect, suggesting a recent or ongoing action connected to now. The book was published \"in 1962,\" a completed historical event, so the simple past is needed.",
      "The sentence describes a completed historical act, publishing a book \"in 1962,\" and the following sentence uses the past (\"sparked,\" \"led\"). The simple past \"wrote\" is consistent with that narrative.",
      "\"Writes\" is present tense, but Carson's book was written in 1962 and the passage narrates its past effects (\"sparked,\" \"led\"). The present tense is inconsistent.",
      "\"Had written\" is the past perfect, which places an action before another past event. No later past event is given as a reference point here, so the simple past is correct."
    ]
  },
  "q:c49333f37bdf9e01": {
    "options": [
      "are providing",
      "provides",
      "have provided",
      "provide"
    ],
    "explanations": [
      "\"Are providing\" is plural, agreeing with \"organisms,\" but \"organisms\" is inside the prepositional phrase \"of genetically modified organisms.\" The subject is the singular \"use.\"",
      "The subject is \"the use,\" a singular noun; \"of genetically modified organisms\" is a prepositional phrase that modifies it. The singular verb \"provides\" agrees with \"use.\"",
      "\"Have provided\" is plural, matching the nearby \"organisms\" rather than the true subject \"use.\" The prepositional phrase does not govern the verb.",
      "\"Provide\" is the plural form, but the subject \"use\" is singular. The plural noun \"organisms\" immediately before the blank is a distractor inside a prepositional phrase."
    ]
  },
  "q:861570e0e9b86bca": {
    "options": [
      "The author's latest novel which has been translated into thirty-two languages explores",
      "The author's latest novel, which has been translated into thirty-two languages, explores",
      "The author's latest novel, which has been translated into thirty-two languages explores",
      "The authors latest novel, which has been translated into thirty-two languages, explores"
    ],
    "explanations": [
      "\"The author's latest novel which has been translated into thirty-two languages explores\" omits both commas around the nonrestrictive \"which\" clause, treating extra information as if it were essential.",
      "\"Author's\" correctly shows singular possession, and the nonrestrictive clause \"which has been translated into thirty-two languages\" is enclosed by commas on both sides before the verb \"explores.\"",
      "A comma opens the \"which\" clause after \"novel,\" but no comma closes it after \"languages,\" so the clause runs directly into the main verb \"explores.\"",
      "\"The authors latest novel\" lacks the apostrophe needed for the singular possessive \"author's.\" Without it, \"authors\" reads as a plural noun with nothing showing that the novel belongs to the author."
    ]
  },
  "q:9fdbe8e599df2173": {
    "options": [
      "Yes, after \"report,\" to separate the verbs",
      "No, but \"and\" should become a semicolon",
      "No; it has one subject with two verbs",
      "Yes, before \"and,\" since it joins two actions"
    ],
    "explanations": [
      "There is only one subject, \"She,\" performing two actions. A comma after \"report\" would separate the two verbs of a compound predicate, which is not done.",
      "A semicolon joins two independent clauses, but \"submitted it on Friday\" has no subject of its own and cannot stand alone. Replacing \"and\" with a semicolon would create a fragment.",
      "\"She wrote the report and submitted it on Friday\" has one subject, \"She,\" and two verbs, \"wrote\" and \"submitted.\" That is a compound predicate, and no comma goes before the \"and\" that joins the two verbs.",
      "A comma before \"and\" is required only when \"and\" joins two independent clauses. Here it joins two verbs sharing one subject, so no comma is needed."
    ]
  },
  "q:044ead4304ccfb94": {
    "options": [
      "sits",
      "was sitting",
      "sat",
      "has sat"
    ],
    "explanations": [
      "\"Sits\" is singular and present. The subject that follows the inverted verb is the plural \"the sketchbooks,\" and the surrounding verbs (\"had stored,\" \"would eventually be attributed\") are past.",
      "\"Was sitting\" is singular, agreeing with \"the loft\" or \"the stable\" rather than the real subject, \"the sketchbooks,\" which comes after the verb in this inverted sentence.",
      "The sentence is inverted, so the subject is the plural \"the sketchbooks\" that follows the verb, and the past-tense framing (\"had stored,\" \"would eventually be attributed\") calls for a past verb. \"Sat\" is plural-compatible and past.",
      "\"Has sat\" is singular and present perfect. It disagrees with the plural \"sketchbooks\" and shifts out of the past-tense narrative established by \"had stored.\""
    ]
  },
  "q:2e72ce402f03fd0f": {
    "options": [
      "winters and",
      "winters, and",
      "winters; and",
      "winters: and"
    ],
    "explanations": [
      "\"Catalogued\" and \"later argued\" share the single subject \"The archivist,\" forming a compound predicate. No comma goes before the \"and\" that joins two verbs of the same subject, so \"winters and later argued\" is correct.",
      "\"Winters, and later argued\" applies the rule for joining two independent clauses, but \"later argued that the collection...\" has no subject of its own. A comma before \"and\" is not used in a compound predicate.",
      "A semicolon requires an independent clause on each side, but \"and later argued that...\" lacks a subject. The semicolon leaves a fragment on the right, and a semicolon is not followed by \"and.\"",
      "A colon introduces an explanation or list after a complete clause and is not followed by a coordinating conjunction. \"Winters: and later argued\" misuses the colon."
    ]
  },
  "q:ab593a36df987b7e": {
    "options": [
      "The form a pronoun takes to show its role",
      "Whether a pronoun is singular or plural in form",
      "The gender a pronoun shows, such as \"he\" or \"she\"",
      "Whether a pronoun is capitalized, as in \"I\""
    ],
    "explanations": [
      "Case is the form a pronoun takes to show its grammatical role: subject (\"I,\" \"she,\" \"they\"), object (\"me,\" \"her,\" \"them\"), or possessive (\"my,\" \"her,\" \"their\").",
      "Whether a pronoun is singular or plural is its number, not its case. \"She\" and \"they\" differ in number; \"she\" and \"her\" differ in case.",
      "Gender is a separate property. \"He\" and \"she\" differ in gender but are both subject-case pronouns; case concerns function, not gender.",
      "Capitalization of \"I\" is a spelling convention, not a grammatical category. Case refers to whether a pronoun acts as a subject, object, or possessor."
    ]
  },
  "q:c4ee89840e0fec3b": {
    "options": [
      "first, second, finally",
      "therefore, consequently, thus",
      "for example, such as, including",
      "however, nevertheless, yet"
    ],
    "explanations": [
      "\"First, second, finally\" are sequence transitions marking the order of points or events. They do not signal opposition between ideas, so this is not a contrast set.",
      "\"Therefore, consequently, thus\" are cause-and-effect transitions signaling that one thing results from another. None of them expresses contrast.",
      "\"For example, such as, including\" introduce examples that illustrate a claim. They signal illustration, not opposition between ideas.",
      "\"However, nevertheless, yet\" are contrast transitions: each signals that what follows opposes or qualifies what came before."
    ]
  },
  "q:ef1689158a47ee51": {
    "options": [
      "In contrast,",
      "Thus,",
      "For instance,",
      "Afterward,"
    ],
    "explanations": [
      "\"In contrast\" would set the third sentence against the second, but the third does not oppose the hazard; it combines the hazard with the benefit into a conclusion.",
      "The first sentence states a benefit (finer resolution) and the second a risk (wells as conduits). The third states what follows from weighing the two, a conclusion that \"Thus\" introduces.",
      "\"For instance\" would make the trade-off an example of the seal hazard, but weighing data against risk is a conclusion drawn from both sentences, not an instance of one.",
      "\"Afterward\" imposes a time sequence that is irrelevant here. The third sentence is a logical consequence, not an event that happens later."
    ]
  },
  "q:e388277b586cc3e3": {
    "options": [
      "Similarly",
      "Therefore",
      "Instead",
      "In conclusion"
    ],
    "explanations": [
      "Cats use whiskers to judge openings, and rodents sweep whiskers to sense walls; both sentences describe animals using whiskers to sense nearby space. \"Similarly\" signals that parallel.",
      "\"Therefore\" would make the rodents' whisker use a result of the cats' behavior, but one species' habit does not cause another's. The two are parallel examples, not cause and effect.",
      "\"Instead\" signals replacement, implying rodents sense walls rather than cats judging openings. Both behaviors occur; neither replaces the other.",
      "\"In conclusion\" would introduce a summary, but the rodent sentence adds a second example rather than summing up. Nothing is being concluded."
    ]
  },
  "q:07d9c492596ae806": {
    "options": [
      "Yes, because the two clauses are closely related in meaning",
      "Yes, since a semicolon may replace a clause-ending comma",
      "No, because \"Because it rained\" cannot stand alone as a sentence",
      "Yes, as long as the second clause is longer than the first"
    ],
    "explanations": [
      "Closeness of meaning does not license a semicolon; the mark joins two independent clauses, and \"Because it rained\" is dependent. Related meaning is not the test.",
      "There is no rule that a semicolon may replace any clause-ending comma. A semicolon requires a complete clause on each side, and a \"because\" clause is not one.",
      "\"Because it rained\" is a dependent clause introduced by the subordinating conjunction \"because.\" A semicolon must have an independent clause on each side, so the comma must stay.",
      "Relative length of the clauses is irrelevant. What matters is independence, and the dependent \"Because it rained\" fails that test regardless of how long either clause is."
    ]
  },
  "q:3c4c231bc4bebb29": {
    "options": [
      "was",
      "are",
      "were",
      "have been"
    ],
    "explanations": [
      "The subject is the singular \"The variety\"; \"of insect species recorded in the hedgerows bordering the organic plots\" is a chain of modifiers. The past-tense \"found\" places the survey in the past, so \"was\" fits both number and tense.",
      "\"Are\" is plural and present. It agrees with \"species\" or \"plots,\" both inside intervening prepositional phrases, rather than the singular head noun \"variety,\" and it clashes with the past \"found.\"",
      "\"Were\" is plural, matching \"species\" or \"plots\" inside the modifying phrases. The true subject is the singular \"variety,\" which takes \"was.\"",
      "\"Have been\" is plural and present perfect. It disagrees with the singular \"variety,\" and its ongoing aspect conflicts with the completed survey described by \"found.\""
    ]
  },
  "q:5bce332103cc5f49": {
    "options": [
      "experiment the results",
      "experiment; the results",
      "experiment, the results",
      "experiment: the results"
    ],
    "explanations": [
      "\"Experiment the results could not be generalized\" runs two independent clauses together with no punctuation between them, a fused sentence. The boundary after \"experiment\" must be marked.",
      "\"This change significantly limited the statistical power of the experiment\" and \"the results could not be generalized...\" are independent clauses with no coordinating conjunction, so a semicolon correctly joins them.",
      "\"Experiment, the results could not be generalized\" joins two independent clauses with only a comma, a comma splice. A comma would need a conjunction such as \"and\" after it.",
      "A colon introduces an explanation or specification of what precedes it. \"The results could not be generalized\" is a related consequence, not an elaboration of \"statistical power,\" so the colon misrepresents the connection."
    ]
  },
  "q:34f2962d7a1eb7c8": {
    "options": [
      "it encounters",
      "they encounter",
      "one encounters",
      "he or she encounters"
    ],
    "explanations": [
      "\"It\" is singular and refers to things; the antecedent is \"first-year residents,\" plural people. \"When it encounters difficult patient outcomes\" has no sensible referent.",
      "The antecedent is \"first-year residents,\" which is plural, so the plural pronoun \"they\" with the plural verb \"encounter\" agrees with it.",
      "\"One encounters\" introduces a generic pronoun with no connection to the specific \"first-year residents\" the study examined, creating a shift in reference.",
      "\"He or she encounters\" is singular, but the antecedent \"first-year residents\" is plural. The pronoun must match the number of the noun it refers to."
    ]
  },
  "q:71e78a061820489c": {
    "options": [
      "figures was",
      "figures; was",
      "figures -- was",
      "figures, was"
    ],
    "explanations": [
      "\"Figures was approved\" leaves the supplementary clause that opened with a comma after \"proposal\" unclosed, so readers cannot see where the \"which\" clause ends and the main verb resumes.",
      "A semicolon requires an independent clause on each side, but \"was approved unanimously...\" has no subject; the subject \"Lin's proposal\" is on the far side of the interrupting clause.",
      "A dash cannot be paired with the comma that opened the clause after \"proposal.\" Punctuation enclosing a parenthetical element must match on both sides.",
      "The supplementary relative clause \"which the committee had rejected... outdated labor figures\" opened with a comma after \"proposal,\" so it must close with a comma before the main verb \"was approved.\""
    ]
  },
  "q:bb9fecdb77812fe5": {
    "options": [
      "challenges",
      "challenge",
      "has challenged",
      "is challenging"
    ],
    "explanations": [
      "\"Challenges\" is singular, but the subject of the main clause is the plural \"discoveries.\" The singular \"team\" sits inside the phrase \"made by the research team\" and does not govern the verb.",
      "The subject is \"The discoveries,\" which is plural; \"made by the research team\" and the \"which include...\" clause are modifiers. The plural verb \"challenge\" agrees with \"discoveries.\"",
      "\"Has challenged\" is singular, agreeing with \"team\" rather than the plural subject \"discoveries.\" The intervening modifiers do not change the subject's number.",
      "\"Is challenging\" is singular and progressive. The plural subject \"discoveries\" needs a plural verb, and the sentence states an established effect, not an action in progress."
    ]
  },
  "q:639027e096e00966": {
    "options": [
      "him and I",
      "him and me",
      "he and I",
      "he and me"
    ],
    "explanations": [
      "\"Him and I\" mixes an object pronoun with a subject pronoun. After the preposition \"to,\" both pronouns must be objects; test alone: \"to I\" is wrong.",
      "After the preposition \"to,\" pronouns take the object case, so \"him and me\" is correct. Test each alone: \"to him,\" \"to me.\"",
      "\"He and I\" are both subject pronouns, but the pronouns here are objects of the preposition \"to.\" \"Gave the books to he\" is clearly wrong.",
      "\"He and me\" mixes a subject pronoun with an object pronoun. Both must be objects after \"to,\" so \"he\" should be \"him.\""
    ]
  },
  "q:495e9a71eeb4e239": {
    "options": [
      "Therefore",
      "However",
      "For example",
      "In addition"
    ],
    "explanations": [
      "\"Therefore\" would make the critics' methodological concerns a logical result of the positive results, but criticism is a reaction against the findings, not a consequence of them.",
      "The first sentence reports positive results and the second reports critics raising concerns, an opposing view. \"However\" signals that contrast.",
      "\"For example\" would make the critics' concerns an example of positive results, which is contradictory. The second sentence pushes against the first rather than illustrating it.",
      "\"In addition\" would present the criticism as a point in the same direction as the positive results, but concerns about methodology undercut those results."
    ]
  },
  "q:420b5a3cb4b114f8": {
    "options": [
      "For example",
      "However",
      "In conclusion",
      "Furthermore"
    ],
    "explanations": [
      "\"For example\" introduces a specific instance supporting a claim, but the sentence is a final summarizing statement about the evidence as a whole, not an example.",
      "\"However\" signals contrast, yet the sentence does not oppose anything; it draws together the evidence in support of the hypothesis.",
      "The sentence sums up what the evidence shows as a final point, and \"In conclusion\" is the transition that signals a summary or closing statement.",
      "\"Furthermore\" adds another point to an ongoing argument, but the stem identifies this as the final, summarizing statement, not an additional piece of evidence."
    ]
  },
  "q:0cf12f1ca3e33666": {
    "options": [
      "In conclusion",
      "Equally important",
      "On the contrary",
      "As a result"
    ],
    "explanations": [
      "\"In conclusion\" would mark the sentence as a summary, but mental health is a second factor being added alongside physical health, not a wrap-up of the discussion.",
      "Physical health is one factor in academic performance, and mental health is presented as another of equal weight. \"Equally important\" adds a parallel point and signals its comparable significance.",
      "\"On the contrary\" signals direct contradiction, but saying mental health matters does not contradict saying physical health matters. Both factors contribute.",
      "\"As a result\" would make mental health's role a consequence of physical health affecting performance, but the two are independent, parallel factors."
    ]
  },
  "q:d3cb2fe13e3c91e0": {
    "options": [
      "has evaporated",
      "had evaporated",
      "evaporates",
      "was evaporating"
    ],
    "explanations": [
      "\"Has evaporated\" is present perfect, measuring from the past up to now. The fuel loss was complete by the 1911 arrival, so it must be placed before that past event, not before the present.",
      "The expedition \"arrived\" and \"found\" in 1911, and the evaporation happened before that. The past perfect \"had evaporated\" places the loss earlier than the past-tense main verb \"found.\"",
      "\"Evaporates\" is present tense, placing a completed historical event in the present. The sentence is narrated in the past (\"arrived,\" \"found\").",
      "\"Was evaporating\" describes a loss still in progress at the moment of arrival, but the sentence says the team \"found that most of the fuel\" was already gone, a completed state."
    ]
  },
  "q:1aa91e16b818f1aa": {
    "options": [
      ". Crushed",
      ": crushed",
      ", crushed",
      "; crushed"
    ],
    "explanations": [
      "A period would make \"Crushed basalt, which also buffers acidity; composted poultry litter; and biochar...\" stand alone, but that string is a list of noun phrases with no main verb, a fragment.",
      "\"The soil survey identified three amendments that reliably raised yields\" is a complete clause announcing three items, and the list of noun phrases that follows specifies them. A colon introduces that list.",
      "A comma after \"plots\" cannot introduce a list following a complete clause, and it would clash with the semicolons that already separate the three items because of their internal commas.",
      "A semicolon requires an independent clause on each side, but \"crushed basalt, which also buffers acidity\" is a noun phrase. It would also be confused with the semicolons separating the list items."
    ]
  },
  "q:221417955372a92a": {
    "options": [
      "The results, surprising as they were, changed the entire study.",
      "The results—surprising as they were—changed the entire study.",
      "The results (surprising as they were) changed the entire study.",
      "The results—surprising as they were, changed the entire study."
    ],
    "explanations": [
      "Commas around \"surprising as they were\" are grammatically correct, but they are the neutral, least emphatic way to set off an aside. The question asks for the more emphatic choice.",
      "Dashes set off \"surprising as they were\" with the greatest emphasis, drawing attention to the aside. The pair of dashes is also correctly matched on both sides.",
      "Parentheses around \"surprising as they were\" are correct but have the opposite effect of emphasis: they downplay the aside as incidental information.",
      "\"Results—surprising as they were, changed\" opens the aside with a dash but closes it with a comma. Mismatched marks around a parenthetical are an error regardless of emphasis."
    ]
  },
  "q:ff1fbfa18ac401cb": {
    "options": [
      "falls",
      "has fallen",
      "had fallen",
      "was falling"
    ],
    "explanations": [
      "\"Falls\" is present tense, placing a completed historical decline in the present. The sentence is anchored in the past by \"reached the atoll in 1974.\"",
      "\"Has fallen\" is present perfect, which measures from the past up to now. The reference point is 1974, so the decline must be placed before that past moment, not before the present.",
      "\"By the time the last survey team reached the atoll in 1974\" fixes a past reference point, and the decline was already complete then. The past perfect \"had fallen\" expresses an action completed before another past event.",
      "\"Was falling\" describes a decline still in progress, which cannot pair with the completed measurement \"by more than eighty percent.\" The population had already dropped by that amount."
    ]
  },
  "q:1afb7efb87b68fb0": {
    "options": [
      "mine",
      "me",
      "I",
      "myself"
    ],
    "explanations": [
      "\"Mine\" is a possessive pronoun that stands alone (\"the report is mine\"). It cannot serve as the object of the preposition \"to\" alongside \"John.\"",
      "The pronoun is an object of the preposition \"to,\" and the subject (an implied \"you\") is a different person, so the object pronoun \"me\" is correct: \"to John and me.\"",
      "\"I\" is a subject pronoun, but the pronoun here is the object of \"to.\" Test it alone: \"give the report to I\" is clearly wrong.",
      "\"Myself\" is reflexive and requires \"I\" as the subject of the same clause. The subject here is the implied \"you\" giving the report, so the reflexive has nothing to reflect."
    ]
  },
  "q:475a4da662130b4a": {
    "options": [
      "No comma belongs there",
      "A comma after \"young\"",
      "A comma after \"tall\"",
      "A comma after \"The\""
    ],
    "explanations": [
      "\"Tall\" and \"young\" are cumulative adjectives, each building on the next (\"tall young man\"), not coordinate adjectives. The test \"tall and young man\" sounds awkward, so no comma belongs.",
      "A comma after \"young\" would separate the adjective from the noun it modifies, \"man,\" which is never correct.",
      "A comma after \"tall\" would treat \"tall\" and \"young\" as coordinate adjectives, but they are cumulative; you would not naturally say \"tall and young man\" or \"young tall man.\"",
      "A comma after \"The\" would separate the article from the noun phrase it introduces, which makes no grammatical sense."
    ]
  },
  "q:56ccd3ebb793f7ab": {
    "options": [
      "current, the marbled murrelet, the tufted puffin, and the rhinoceros auklet,",
      "current -- the marbled murrelet, the tufted puffin, and the rhinoceros auklet --",
      "current: the marbled murrelet, the tufted puffin, and the rhinoceros auklet,",
      "current (the marbled murrelet, the tufted puffin, and the rhinoceros auklet,"
    ],
    "explanations": [
      "Commas around \"the marbled murrelet, the tufted puffin, and the rhinoceros auklet\" blend into the three commas inside the list itself, so the reader cannot tell which nouns belong to the aside and which noun goes with \"all nest.\"",
      "The supplementary list contains its own commas, so a matched pair of dashes, one after \"current\" and one before \"all nest,\" shows clearly where the interruption begins and ends.",
      "A colon after \"current\" could open a specification, but it cannot be closed by the comma after \"auklet.\" The sentence continues with \"all nest,\" so the interrupting list needs a matched pair of marks.",
      "An opening parenthesis after \"current\" is never closed; the list ends with a comma rather than a closing parenthesis. Parentheses, like dashes, must come in pairs."
    ]
  },
  "q:5ef3003fa704efa0": {
    "options": [
      "Likewise,",
      "In fact,",
      "Therefore,",
      "To that end,"
    ],
    "explanations": [
      "\"Likewise\" would present the oral accounts as another obstacle of the same kind as the missing notation and silent film, but they are a resource that overcomes those obstacles.",
      "The second sentence raises an expectation (\"might seem impossible\"), and the third corrects it with evidence that reconstruction is feasible. \"In fact\" introduces information that overturns the impression just created.",
      "\"Therefore\" would make the dancers' oral histories a consequence of reconstruction seeming impossible, but their existence does not follow from that difficulty; it remedies it.",
      "\"To that end\" means \"for that purpose,\" but the preceding sentence states no purpose. The dancers did not record their accounts in order to achieve something the paragraph named."
    ]
  },
  "q:c653aba15d3806e4": {
    "options": [
      "By contrast,",
      "Consequently,",
      "For instance,",
      "Nevertheless,"
    ],
    "explanations": [
      "\"By contrast\" needs two comparable things set side by side, but the second sentence does not compare this window with another. It qualifies the force of the critics' accurate figure.",
      "\"Consequently\" would claim the reconstruction follows from the loss of two-thirds of the glass, which reverses the logic. The loss works against reconstruction, not for it.",
      "\"For instance\" would make the reconstructability claim an example of the glass loss, but a statement about what can still be recovered is not an instance of what has been lost.",
      "The writer grants the critics' figure (\"that estimate is accurate\") and then limits its force: despite the loss, the program can be reconstructed. \"Nevertheless\" marks that concession-then-counter structure."
    ]
  },
  "q:2d1a26547f48c0eb": {
    "options": [
      "Nevertheless,",
      "If so,",
      "For instance,",
      "Previously,"
    ],
    "explanations": [
      "\"Nevertheless\" would signal that the conclusion holds in spite of the manuscript drafts, but the conclusion rests on them. The drafts are the evidence, not an obstacle.",
      "The second sentence offers manuscript evidence that the author had no hierarchy of narrators, and the third draws out what follows if that is true. \"If so\" marks a conditional inference from the preceding claim.",
      "\"For instance\" would make the interpretation an example of the author's revision practice, but a claim about the novel's purpose is not an instance of revising chapters.",
      "\"Previously\" asserts a time relationship, that the novel was once this kind of experiment, which the sentence does not express. The third sentence is an inference, not a chronological step."
    ]
  },
  "q:3fdb5384a4153656": {
    "options": [
      "On the other hand,",
      "Therefore,",
      "Notably,",
      "Meanwhile,"
    ],
    "explanations": [
      "\"On the other hand\" would set the third sentence against the second, but the two agree: a thirty-year recipe means only a broad dating window. There is no opposing view.",
      "The second sentence explains that the recipe was used for nearly thirty years, and the third states what follows: the panel can be dated only to a broad window. \"Therefore\" marks that consequence.",
      "\"Notably\" flags something as worth attention but expresses no logical link. The passage depends on the inference from the thirty-year span to the dating limit, which \"Notably\" fails to convey.",
      "\"Meanwhile\" asserts simultaneity, but the third sentence is a logical conclusion about dating, not an event occurring at the same time as something else."
    ]
  },
  "q:a668e5552206d960": {
    "options": [
      "I love reading. my brother prefers sports.",
      "I love reading; my brother prefers sports.",
      "I love reading, my brother prefers sports.",
      "I love reading: my brother prefers sports."
    ],
    "explanations": [
      "\"I love reading. my brother prefers sports\" uses a period but fails to capitalize \"my,\" so the second sentence does not begin correctly. A period requires a capital letter to follow.",
      "\"I love reading\" and \"my brother prefers sports\" are two related independent clauses, and a semicolon correctly joins them without a conjunction.",
      "\"I love reading, my brother prefers sports\" joins two independent clauses with only a comma, a comma splice. A semicolon or a comma plus a conjunction is needed.",
      "A colon introduces an explanation or elaboration of the first clause, but \"my brother prefers sports\" does not explain \"I love reading\"; it presents a contrasting parallel. The colon misstates the relationship."
    ]
  },
  "q:b9c9876203c17ba4": {
    "options": [
      "are requiring",
      "require",
      "requires",
      "have required"
    ],
    "explanations": [
      "\"Are requiring\" is plural and progressive. \"Every teacher\" is singular, and the sentence states a standing requirement rather than an action happening right now.",
      "\"Require\" is plural, but \"Every teacher\" is singular; \"every\" always takes a singular verb. The parenthetical \"regardless of subject area or years of experience\" does not change that.",
      "The subject is \"Every teacher,\" which is singular; the interrupting phrase \"regardless of subject area or years of experience\" is set off by commas and does not affect agreement. \"Requires\" is the matching singular verb.",
      "\"Have required\" is plural and present perfect. The subject \"Every teacher\" is singular, and the deadline \"by the end of the academic year\" describes a current obligation, not a completed one."
    ]
  },
  "q:14b7cfa16f47db41": {
    "options": [
      "appear",
      "has appeared",
      "appears",
      "is appearing"
    ],
    "explanations": [
      "The subject is \"Several,\" a plural indefinite pronoun; \"of the planets identified in the survey\" modifies it. The plural verb \"appear\" agrees with \"Several.\"",
      "\"Has appeared\" is singular and present perfect, but \"Several\" is plural. The singular \"survey\" immediately before the blank is inside a modifying phrase and does not govern the verb.",
      "\"Appears\" is singular, agreeing with the nearby \"survey\" rather than the true subject \"Several,\" which is plural.",
      "\"Is appearing\" is singular and progressive. \"Several\" is plural, and the sentence states a finding about the planets' conditions, not an action unfolding now."
    ]
  },
  "q:e0a93cedbbd6cdec": {
    "options": [
      "she and me",
      "her and me",
      "she and I",
      "her and I"
    ],
    "explanations": [
      "\"She and me\" mixes a subject pronoun with an object pronoun. As the subject of \"went,\" both must be subject forms; \"me went to the library\" is wrong.",
      "\"Her and me\" are both object pronouns, but the pronouns here are the subject of \"went.\" Test each alone: \"her went\" and \"me went\" are both wrong.",
      "The pronouns are the subject of the verb \"went,\" so both take the subject case: \"she and I.\" Test each alone: \"She went,\" \"I went.\"",
      "\"Her and I\" mixes an object pronoun with a subject pronoun. \"Her went to the library\" fails the test, so \"her\" should be \"she.\""
    ]
  },
  "q:ee3c4b0a13bba9aa": {
    "options": [
      "the dogs bone",
      "the dog's bone",
      "the dog' bone",
      "the dogs' bone"
    ],
    "explanations": [
      "\"The dogs bone\" has no apostrophe, so \"dogs\" reads as a plural noun and nothing shows possession. A possessive needs an apostrophe.",
      "One dog owns the bone, so the singular possessive is formed by adding 's: \"the dog's bone.\" The apostrophe before the -s marks a single possessor.",
      "\"The dog'\" places an apostrophe with no -s after it. That pattern is used only for plural nouns already ending in -s; a singular noun needs 's.",
      "\"The dogs'\" is the plural possessive, meaning a bone belonging to several dogs. The stem specifies one dog, so the singular \"dog's\" is required."
    ]
  },
  "q:09490cdeb6af9136": {
    "options": [
      "which",
      "whom",
      "whose",
      "who's"
    ],
    "explanations": [
      "\"Which\" refers to things and cannot show possession. The sentence needs a word meaning \"the author's book,\" which is the possessive relative pronoun \"whose.\"",
      "\"Whom\" is an object pronoun; \"the author whom book was banned\" makes no sense. The sentence needs a possessive linking \"author\" to \"book.\"",
      "The book belongs to the author, so the possessive relative pronoun \"whose\" is correct: \"The author whose book was banned gave a speech.\"",
      "\"Who's\" is the contraction of \"who is,\" producing \"the author who is book was banned.\" The possessive form is \"whose,\" with no apostrophe."
    ]
  },
  "q:1ab3795c4dc4d99e": {
    "options": [
      "Two or more independent clauses joined together",
      "One independent clause with a compound subject",
      "Two dependent clauses joined by a conjunction",
      "One independent clause plus one dependent clause"
    ],
    "explanations": [
      "A compound sentence consists of two or more independent clauses joined by a coordinating conjunction or a semicolon, as in \"I read, and she wrote.\"",
      "One independent clause with a compound subject (\"Tom and Jerry ran\") is still a simple sentence; it has only one clause, so it is not compound.",
      "Two dependent clauses joined by a conjunction cannot form a sentence at all; without an independent clause the result is a fragment, not a compound sentence.",
      "One independent clause plus one dependent clause is the definition of a complex sentence, not a compound sentence."
    ]
  },
  "q:8e96c7a6a824873e": {
    "options": [
      "; Cedar",
      ", Cedar",
      " -- Cedar",
      ": Cedar"
    ],
    "explanations": [
      "A semicolon requires an independent clause on the right, but \"Cedar Hollow, whose wells had run dry twice\" is a noun phrase. It would also be confused with the semicolons already separating the three neighborhoods.",
      "A comma after \"neighborhoods\" cannot introduce a list that follows a complete clause, and it would be lost among the commas and semicolons inside the list items.",
      "A dash opens an aside that the sentence would then need to close, but this list runs to the period. The item-internal semicolons also show a formal list, which a colon, not a dash, introduces.",
      "\"The petition gathered signatures from residents of three neighborhoods\" is a complete clause announcing a set, and the names that follow specify it. A colon introduces that list."
    ]
  },
  "q:7ebd7da03739b42c": {
    "options": [
      "were",
      "has",
      "have",
      "are"
    ],
    "explanations": [
      "\"Were\" is plural and past, but the subject is \"only one,\" which is singular. The plural \"participants\" sits inside the introductory phrase \"Of the two hundred participants\" and does not govern the verb.",
      "The subject is \"only one,\" which is singular; \"Of the two hundred participants initially enrolled\" is a prepositional phrase. The singular \"has\" agrees with \"one,\" and the perfect fits a result that \"Researchers view\" in the present.",
      "\"Have\" is plural, agreeing with \"participants\" rather than the true subject, \"one.\" A prepositional phrase does not change the number of the subject.",
      "\"Are\" is plural, but \"only one\" is singular. The nearby plural \"participants\" is a distractor inside a prepositional phrase."
    ]
  },
  "q:5637583b2390c0b5": {
    "options": [
      "The verdict was: clear not guilty.",
      "The verdict was clear; not guilty.",
      "The verdict was clear, not guilty.",
      "The verdict was clear: not guilty."
    ],
    "explanations": [
      "\"The verdict was: clear not guilty\" places the colon after \"was,\" splitting the verb from its complement \"clear,\" and then runs \"clear not guilty\" together.",
      "A semicolon requires an independent clause on each side, but \"not guilty\" is a two-word phrase with no subject or verb. The semicolon leaves a fragment.",
      "\"The verdict was clear, not guilty\" uses a comma, which does not signal that \"not guilty\" explains what \"clear\" means. The explanation after a complete clause calls for a colon.",
      "\"The verdict was clear\" is a complete independent clause, and the colon introduces the explanation of that verdict: \"not guilty.\""
    ]
  },
  "q:3e7c2392b6bb1a7c": {
    "options": [
      "one's",
      "his or her",
      "its",
      "their"
    ],
    "explanations": [
      "\"One's\" is a generic pronoun with no tie to the specific antecedent \"visitors.\" It shifts the point of view away from the people the sentence is about.",
      "\"His or her\" is singular, but the antecedent \"visitors\" is plural. The pronoun must agree in number with the noun it refers to.",
      "\"Its\" is used for things and animals, not people. The food belongs to \"visitors,\" who are people, so \"its\" has no valid antecedent.",
      "The antecedent is \"visitors,\" a plural noun, so the plural possessive \"their\" agrees with it: \"visitors... should store their food.\""
    ]
  },
  "q:530ca02e6c8931db": {
    "options": [
      "Singular \"they\" or \"his or her\"",
      "\"It,\" since the person's gender is unknown",
      "Whichever gender is most common in that role",
      "\"He,\" as the default for mixed groups"
    ],
    "explanations": [
      "When gender is unknown or unspecified, both singular \"they\" and \"his or her\" are accepted gender-neutral options. \"They\" is now widely used; \"his or her\" is the traditional formal alternative.",
      "\"It\" is used for objects and animals, not people. Referring to a person as \"it\" is not acceptable regardless of unknown gender.",
      "Guessing the most common gender for a role is stereotyping, not grammar, and it will be wrong for many referents. Standard English does not use this as a rule.",
      "Defaulting to \"he\" for mixed or unknown-gender groups was once common but is no longer considered standard. It excludes people the pronoun is meant to cover."
    ]
  },
  "q:c31eb9ad462034ea": {
    "options": [
      "Place a semicolon before the conjunction",
      "Place a comma after the conjunction",
      "Place a comma before the conjunction",
      "Use no punctuation around the conjunction"
    ],
    "explanations": [
      "A semicolon before a coordinating conjunction doubles up two joining devices. Either the semicolon alone or a comma plus the conjunction joins the clauses, not both.",
      "The comma goes before the conjunction, not after it. \"She ran and, he walked\" wrongly cuts the conjunction off from its clause.",
      "When a coordinating conjunction (FANBOYS) joins two independent clauses, a comma is placed before the conjunction: \"She ran, and he walked.\"",
      "Using no punctuation leaves two full clauses joined by a bare conjunction. A comma is needed before the conjunction when both sides are independent clauses."
    ]
  },
  "q:31a848d8f7b221b3": {
    "options": [
      "Although, he had never visited Japan, the chef",
      "Although he had never visited Japan; the chef",
      "Although he had never visited Japan, the chef",
      "Although he had never visited Japan the chef"
    ],
    "explanations": [
      "\"Although, he had never visited Japan\" places a comma after the subordinating conjunction \"Although,\" cutting it off from its clause. The comma belongs at the end of the dependent clause, not after its first word.",
      "A semicolon after \"Japan\" is wrong because \"Although he had never visited Japan\" is a dependent clause, and a semicolon must have an independent clause on each side.",
      "\"Although he had never visited Japan\" is an introductory subordinate clause, and a comma separates it from the main clause that begins \"the chef specialized.\"",
      "\"Although he had never visited Japan the chef\" has no punctuation between the introductory dependent clause and the main clause, so readers cannot see where one ends and the other begins."
    ]
  },
  "q:c6e3d99aa6197313": {
    "options": [
      "They show the order in which events occur",
      "They signal that the argument is ending",
      "They signal a contrast with the previous idea",
      "They add supporting or related information"
    ],
    "explanations": [
      "Showing the order in which events occur is the role of sequence transitions such as \"first,\" \"next,\" and \"finally,\" not of addition transitions.",
      "Signaling that the argument is ending is what conclusion transitions (\"in conclusion,\" \"ultimately\") do, not addition transitions.",
      "Signaling contrast is the job of \"however,\" \"nevertheless,\" and similar words. Addition transitions move in the same direction as the preceding idea.",
      "Addition transitions such as \"furthermore,\" \"moreover,\" \"also,\" and \"in addition\" add supporting or related information to the point just made."
    ]
  },
  "q:4995a66df2503d7e": {
    "options": [
      "Even so,",
      "In particular,",
      "By comparison,",
      "As a result,"
    ],
    "explanations": [
      "\"Even so\" would concede the follicle-matching technique and then report a failure, but the sentence reports a success made possible by that technique.",
      "\"In particular\" would narrow the second sentence to a specific instance, but the third sentence does not give a detail of the technique; it states what the technique achieved.",
      "\"By comparison\" requires a second item to compare against, and nothing is being compared. The third sentence reports an outcome, not a comparison.",
      "The second sentence introduces the follicle-matching technique, and the third reports the outcome it made possible: restoring the quire sequence. \"As a result\" marks that cause-and-effect link."
    ]
  },
  "q:7fe155912751197b": {
    "options": [
      "Therefore,",
      "However,",
      "Furthermore,",
      "In turn,"
    ],
    "explanations": [
      "\"Therefore\" would present the omission as a consequence of the supporters' frequent citation, but failing to mention the arterial-road increase is not caused by citing the eleven percent figure.",
      "Supporters cite the eleven percent reduction constantly, but they rarely mention the projected increase outside the zone. The third sentence undercuts the supporters, so the contrastive \"However\" is required.",
      "\"Furthermore\" would add another point in the supporters' favor, but the increase on arterial roads works against them. It is a fact the supporters leave out, not one they would add.",
      "\"In turn\" asserts a sequence of reciprocal effects, as if the supporters' silence followed from and responded to their citation. The sentence describes no such chain."
    ]
  },
  "q:8c3989a29df81b7d": {
    "options": [
      "She studied hard and she passed the exam.",
      "She, studied hard and she passed the exam.",
      "She studied hard, and she passed the exam.",
      "She studied hard, and, she passed the exam."
    ],
    "explanations": [
      "\"She studied hard and she passed the exam\" joins two independent clauses with the bare conjunction \"and.\" A comma is required before a coordinating conjunction linking two full clauses.",
      "\"She, studied hard\" places a comma between the subject \"She\" and its verb \"studied,\" where no comma belongs, and the needed comma before \"and\" is missing.",
      "Two independent clauses, \"She studied hard\" and \"she passed the exam,\" are joined by a comma followed by the coordinating conjunction \"and.\"",
      "\"Hard, and, she passed\" wraps \"and\" in commas, treating the conjunction as an interrupting word. Only the comma before \"and\" belongs."
    ]
  },
  "q:2d2345e16873d91d": {
    "options": [
      "whoever",
      "who",
      "whom",
      "whomever"
    ],
    "explanations": [
      "The pronoun is the subject of the verb \"scores\" within the clause \"___ scores the highest,\" so the subject form \"whoever\" is correct. The whole clause then serves as the subject of \"will win.\"",
      "\"Who\" is a subject form, but it is a relative or interrogative pronoun; it cannot head a noun clause that stands as the subject of \"will win.\" The indefinite \"whoever,\" meaning \"anyone who,\" is needed.",
      "\"Whom\" is the object form, but the pronoun performs the action of scoring. \"Him scores the highest\" fails the test, so an object form is wrong.",
      "\"Whomever\" is the object form of \"whoever.\" The pronoun is the subject of \"scores,\" not an object, so the subject form \"whoever\" is required."
    ]
  },
  "q:26bae8c68a0288ae": {
    "options": [
      "have influenced",
      "are influencing",
      "influence",
      "influences"
    ],
    "explanations": [
      "\"Have influenced\" is plural, agreeing with \"tides\" or \"the moon and the sun,\" but those nouns sit inside modifying phrases. The subject is the singular \"rhythm.\"",
      "\"Are influencing\" is plural and progressive. The subject \"The rhythm\" is singular, and the participial phrase \"governed by the gravitational pull of both the moon and the sun\" is parenthetical.",
      "\"Influence\" is the plural form. The head noun of the subject is \"rhythm,\" which is singular; \"of ocean tides\" and the \"governed by...\" phrase are modifiers that do not control the verb.",
      "The subject is \"The rhythm,\" a singular noun; \"of ocean tides\" and the participial phrase set off by commas are modifiers. The singular \"influences\" agrees with \"rhythm\" and matches the present-tense \"affect\" in the next sentence."
    ]
  },
  "q:7f8ce409569356ce": {
    "options": [
      "Restrictive, so it takes no commas",
      "An independent clause set off by commas",
      "Restrictive, so it needs a comma after it",
      "Nonrestrictive, so it needs commas"
    ],
    "explanations": [
      "\"That study regularly\" identifies which students perform better, so it is restrictive (essential) and takes no commas. Clauses introduced by \"that\" are restrictive by convention.",
      "\"That study regularly\" cannot stand alone; it is a dependent relative clause, not an independent clause, and restrictive clauses are not set off by commas.",
      "Restrictive clauses take no commas at all. A comma after \"regularly\" would separate the subject \"Students that study regularly\" from its verb \"perform.\"",
      "A nonrestrictive clause would be introduced by \"which\" or by \"who\" with commas, adding nonessential information. \"That\" marks the clause as essential to identifying which students are meant."
    ]
  },
  "q:5251a1beaa2234ad": {
    "options": [
      "region: its",
      "region; its",
      "region its",
      "region, its"
    ],
    "explanations": [
      "A colon would present \"its cuisine, for example, incorporates French culinary techniques\" as an explanation or specification of \"the region\" rather than as a separate statement. The colon is not the mark for joining two related statements with no conjunction.",
      "The semicolon joins two statements with no coordinating conjunction between them: the reference to the region and the statement \"its cuisine, for example, incorporates French culinary techniques with Spanish ingredients.\" The semicolon is the mark that joins closely related statements without a conjunction.",
      "\"The region its cuisine\" runs the two parts together with no punctuation, leaving no boundary between the reference to the region and the statement about its cuisine, a fused construction.",
      "\"The region, its cuisine, for example, incorporates\" joins the two parts with only a comma, which produces a comma splice. A comma without a coordinating conjunction cannot join two independent statements."
    ]
  },
  "q:daf82971ae1c8796": {
    "options": [
      "which",
      "whose",
      "who",
      "whom"
    ],
    "explanations": [
      "\"Which\" refers to things, not people. \"Architect Maya Lin\" is a person, so the relative pronoun must be a form of \"who.\"",
      "\"Whose\" is possessive and would need a noun after it (\"whose design\"). The clause needs a subject for the verb \"designed,\" not a possessive.",
      "The relative pronoun is the subject of the verb \"designed\" (\"who designed the Vietnam Veterans Memorial\"), and it refers to a person, so the subject form \"who\" is correct.",
      "\"Whom\" is the object form, but the pronoun performs the action of designing; nothing in the clause acts on it. Test it: \"she designed,\" not \"her designed.\""
    ]
  },
  "q:2f3fd922a023f00a": {
    "options": [
      "She studied hard. and she passed the test.",
      "She studied hard, she passed the test.",
      "She studied hard; she passed the test.",
      "She studied hard she passed the test."
    ],
    "explanations": [
      "\"She studied hard. and she passed the test\" follows a period with a lowercase \"and,\" which neither begins a proper new sentence nor joins the clauses correctly.",
      "\"She studied hard, she passed the test\" leaves the original comma splice unchanged; two independent clauses are still joined by only a comma.",
      "Replacing the comma with a semicolon joins the two independent clauses \"She studied hard\" and \"she passed the test\" correctly, fixing the splice.",
      "\"She studied hard she passed the test\" removes the comma without adding anything, turning the comma splice into a fused sentence."
    ]
  },
  "q:a76fb676c17920bb": {
    "options": [
      "Even so",
      "That is",
      "Meanwhile",
      "Conversely"
    ],
    "explanations": [
      "\"Even so\" signals a contrast, but the second sentence does not oppose the first; it explains what \"preventively\" means.",
      "The second sentence restates the first in plainer terms: given preventively means given before symptoms appear. \"That is\" signals such a clarifying restatement.",
      "\"Meanwhile\" signals events happening at the same time, but the second sentence is a definition of the first, not a simultaneous event.",
      "\"Conversely\" signals a reversal or opposite, but giving a vaccine before symptoms is exactly what \"preventively\" means, not its opposite."
    ]
  },
  "q:8a10e2d97dca8c8f": {
    "options": [
      "In other words,",
      "Additionally,",
      "Nevertheless,",
      "For example,"
    ],
    "explanations": [
      "The second sentence says the improvement lasts only while applications continue, and the third restates that in general terms: liming treats the symptom, not the cause. \"In other words\" marks that restatement.",
      "\"Additionally\" would introduce a separate new point, but the third sentence adds no new information. It rephrases what the second sentence already established.",
      "\"Nevertheless\" signals a reversal, but the third sentence agrees with the second. Managing a symptom is exactly what a benefit that stops when treatment stops amounts to.",
      "\"For example\" would require a specific instance, but the third sentence generalizes rather than giving an example. It abstracts the preceding observation into a principle."
    ]
  },
  "q:58920ac1a7e9174c": {
    "options": [
      "Conversely",
      "Instead",
      "On the contrary",
      "Additionally"
    ],
    "explanations": [
      "\"Conversely\" signals an opposite, but boosting confidence does not oppose improving reading skills. Both are benefits of the program.",
      "\"Instead\" signals replacement, implying the program boosted confidence rather than improving reading. The first sentence says it did improve reading.",
      "\"On the contrary\" directly contradicts what came before, but the second sentence does not deny that reading skills improved. It adds a second benefit.",
      "The program improved reading skills and also boosted confidence, a second benefit added to the first. \"Additionally\" signals that addition."
    ]
  },
  "q:684264cb0272509a": {
    "options": [
      "have stabilized",
      "stabilize",
      "were stabilizing",
      "stabilized"
    ],
    "explanations": [
      "\"Have stabilized\" is plural, treating \"conservators\" as the subject, but the head noun is the singular \"A team.\" Its present perfect also cannot be pinned to the completed past moment \"before the scaffolding was removed.\"",
      "\"Stabilize\" is plural and present. The subject \"A team\" is singular, and the time frame is fixed in the past by \"before the scaffolding was removed.\"",
      "\"Were stabilizing\" is plural and leaves the work in progress, contradicting the completed action the sentence reports. The singular \"team\" also requires a singular-compatible verb.",
      "The subject is the singular \"A team,\" separated from its verb by the long modifier \"of conservators working under conditions...,\" and the action is completed in the past, \"before the scaffolding was removed.\" \"Stabilized\" fits both."
    ]
  },
  "q:3bc0e5113f109741": {
    "options": [
      "idea, one that many investors initially dismissed as impractical, eventually",
      "idea—one that many investors initially dismissed as impractical, eventually",
      "idea—one that many investors initially dismissed as impractical eventually",
      "idea—one that many investors initially dismissed as impractical—eventually"
    ],
    "explanations": [
      "\"Idea, one that many investors initially dismissed as impractical, eventually\" sets the aside off with commas, presenting it as a routine appositive. In this item the aside is an emphatic interruption that the dashes foreground, and the question asks for the choice that sets it off that way.",
      "\"Idea—one that many investors initially dismissed as impractical, eventually\" opens the parenthetical with a dash but closes it with a comma. Marks enclosing an interruption must match.",
      "\"Idea—one that many investors initially dismissed as impractical eventually\" opens with a dash but never closes the aside, so \"impractical eventually transformed\" runs the parenthetical into the main verb.",
      "The interrupting phrase \"one that many investors initially dismissed as impractical\" is enclosed by a matched pair of dashes, one after \"idea\" and one before \"eventually,\" setting off the emphatic aside correctly."
    ]
  },
  "q:c651fe59bcb25103": {
    "options": [
      "was",
      "are",
      "have been",
      "were"
    ],
    "explanations": [
      "With \"neither... nor,\" the verb agrees with the nearer subject, \"the city council president,\" which is singular. \"Was\" is singular and past, and the next sentence confirms the past framing (\"has fueled\").",
      "\"Are\" is plural and present, but the nearer subject \"the city council president\" is singular. Agreement with \"neither... nor\" follows the nearer subject.",
      "\"Have been\" is plural, disagreeing with the singular nearer subject \"the city council president.\" With \"neither... nor,\" only the subject closest to the verb determines its number.",
      "\"Were\" is plural. With \"neither... nor,\" the verb agrees with the nearer subject, and \"the city council president\" is singular, so the plural form is wrong."
    ]
  },
  "q:9447d8d54849eac6": {
    "options": [
      "Yes, if the dependent clause is long",
      "Yes, if \"therefore\" follows the semicolon",
      "No; semicolons join independent clauses",
      "Yes, when it replaces an introductory comma"
    ],
    "explanations": [
      "Length is irrelevant. A dependent clause of any length still cannot stand alone, so a semicolon after it leaves a fragment on one side.",
      "\"Therefore\" following the semicolon does not change what precedes it. A semicolon needs an independent clause on both sides; a dependent clause before it is still an error.",
      "A semicolon joins two independent clauses only. A dependent clause (\"Because it rained\") cannot stand alone, so a semicolon after it is always wrong.",
      "A semicolon does not replace an introductory comma. The comma after an introductory dependent clause is required precisely because the clause is dependent, which rules out a semicolon."
    ]
  },
  "q:1b99f846223c0e3b": {
    "options": [
      "the branch on Delancey Street",
      "the branch, on Delancey Street,",
      "the branch: on Delancey Street",
      "the branch -- on Delancey Street"
    ],
    "explanations": [
      "The city has four libraries, so \"on Delancey Street\" is essential information identifying which branch is meant. Essential modifiers take no punctuation, so \"the branch on Delancey Street\" is correct.",
      "Commas around \"on Delancey Street\" mark it as supplementary, implying there is only one branch and the location is incidental. With four libraries, the location is essential and cannot be set off.",
      "A colon must follow an independent clause, but \"Renovations to the branch\" is only a noun phrase. The colon has no complete clause to attach to.",
      "A single dash opens an interruption that the sentence never closes, and the location is essential to identifying the branch, so it should not be set off at all."
    ]
  },
  "q:2e7edf7d28ab173d": {
    "options": [
      "which",
      "whom",
      "that",
      "who"
    ],
    "explanations": [
      "\"Which\" refers to things, not people. \"The author\" is a person, so the relative pronoun must be a form of \"who.\"",
      "The relative pronoun is the object of the verb \"selected\" (the committee selected the author), so the object form \"whom\" is correct: \"The author whom the committee ultimately selected.\"",
      "\"That\" does not show case, so it cannot mark the pronoun's role as the object of \"selected.\" In this item the formal object form \"whom\" is the choice that makes that role explicit for a person.",
      "\"Who\" is the subject form, but the subject of \"selected\" is \"the committee\"; the pronoun receives the action. Test it: \"the committee selected her,\" not \"she.\""
    ]
  },
  "q:17410ceb5ed98ee8": {
    "options": [
      "The conference had speakers from Paris, France, London, England, and Tokyo, Japan.",
      "The conference had speakers from Paris, France; London, England; and Tokyo, Japan.",
      "The conference had speakers from Paris, France: London, England: and Tokyo, Japan.",
      "The conference had speakers from Paris France; London England; and Tokyo Japan."
    ],
    "explanations": [
      "Commas everywhere make \"Paris, France, London, England, and Tokyo, Japan\" look like six separate places. The reader cannot tell which city goes with which country.",
      "Each item contains a comma (\"Paris, France\"), so semicolons separate the items: \"Paris, France; London, England; and Tokyo, Japan.\" The semicolons keep the city-country pairs distinct.",
      "Colons are not used to separate items in a series. A colon introduces a list or explanation after a complete clause; placing colons after \"France\" and \"England\" misuses the mark.",
      "The semicolons are correctly placed, but the commas between each city and its country are missing: \"Paris France\" and \"London England\" each need a comma."
    ]
  },
  "q:7cb3803f90943c70": {
    "options": [
      "Consequently,",
      "Likewise,",
      "By contrast,",
      "Even so,"
    ],
    "explanations": [
      "\"Consequently\" would make the staff's reliance on service records a result of the engineers' modeling, but the two groups reasoned independently from different kinds of evidence.",
      "\"Likewise\" would say the staff reasoned in the same way as the engineers, but the point is that they used opposite kinds of evidence: theory versus a decade of records.",
      "The engineers reasoned from first-principles fatigue modeling, the staff from empirical service records. The two sentences set those approaches against each other, and \"By contrast\" marks that juxtaposition.",
      "\"Even so\" would require the staff's position to defeat an expectation created by the engineers' modeling, but the sentence merely reports a different basis for judgment, not an overcoming of an obstacle."
    ]
  },
  "q:2ce3e55767f5520e": {
    "options": [
      "Nevertheless,",
      "Rather,",
      "Similarly,",
      "Consequently,"
    ],
    "explanations": [
      "\"Nevertheless\" signals a defeated expectation, but nothing is defeated here. The third sentence does not hold despite the second; it supplies the explanation the second sentence said was not sentimental.",
      "The second sentence rejects one explanation (\"not sentimental\"), and the third supplies the correct one in its place, a cost calculation. \"Rather\" marks a substituted explanation after a denial.",
      "\"Similarly\" would require a parallel case, but the cost calculation is not similar to a sentimental reason; it is the replacement for one.",
      "\"Consequently\" would make the cost calculation a result of the reasoning's not being sentimental, but the calculation is the reasoning itself, not a consequence of its character."
    ]
  },
  "q:b64e802e44a44d8a": {
    "options": [
      "The weather was cold, we stayed inside.",
      "The weather was cold; we stayed inside.",
      "The weather was cold we stayed inside.",
      "The weather was cold; we, stayed inside."
    ],
    "explanations": [
      "\"The weather was cold, we stayed inside\" joins two independent clauses with only a comma, a comma splice. A conjunction would be needed after the comma.",
      "\"The weather was cold\" and \"we stayed inside\" are related independent clauses, and a semicolon joins them correctly without a conjunction.",
      "\"The weather was cold we stayed inside\" has no punctuation at all between the two independent clauses, a fused sentence. The boundary after \"cold\" must be marked.",
      "The semicolon is correctly placed, but the comma in \"we, stayed inside\" wrongly separates the subject \"we\" from its verb \"stayed.\""
    ]
  },
  "q:bb4963d603ea30b6": {
    "options": [
      "The orchestra's",
      "The orchestra,s",
      "The orchestras'",
      "The orchestras"
    ],
    "explanations": [
      "One orchestra gave the performance, so the singular possessive \"The orchestra's\" is correct, showing that the performance belongs to that ensemble.",
      "\"The orchestra,s\" uses a comma in place of an apostrophe. A comma cannot form a possessive; the mark before the -s must be an apostrophe.",
      "\"The orchestras'\" is the plural possessive, meaning several orchestras. The passage refers to one ensemble (\"praised the ensemble for its emotional depth\"), so the singular is required.",
      "\"The orchestras\" is a plain plural with no apostrophe, so nothing shows that the performance belongs to the orchestra, and it also implies more than one orchestra."
    ]
  },
  "q:6f2175979d43f456": {
    "options": [
      "because, although, since",
      "and, but, or, so",
      "however, therefore, moreover",
      "who, which, that"
    ],
    "explanations": [
      "\"Because, although, since\" are subordinating conjunctions that begin adverbial dependent clauses, not relative clauses that modify nouns.",
      "\"And, but, or, so\" are coordinating conjunctions that join equal elements; they do not introduce clauses that modify nouns.",
      "\"However, therefore, moreover\" are conjunctive adverbs that connect ideas between sentences; they do not begin relative clauses.",
      "Relative clauses begin with relative pronouns: \"who,\" \"which,\" and \"that\" (along with \"whom\" and \"whose\"). These pronouns link the clause to the noun it modifies."
    ]
  },
  "q:5f0050f77b1f2633": {
    "options": [
      "the childrens toys",
      "the children toys'",
      "the childrens' toys",
      "the children's toys"
    ],
    "explanations": [
      "\"The childrens toys\" adds -s to an already plural noun and has no apostrophe, so it shows no possession. \"Childrens\" is not a word.",
      "\"The children toys'\" attaches the apostrophe to \"toys,\" the thing possessed, rather than to \"children,\" the possessor.",
      "\"The childrens' toys\" puts the apostrophe after an -s that \"children\" does not take. The s-apostrophe form is for regular plurals ending in -s, such as \"students'.\"",
      "\"Children\" is an irregular plural not ending in -s, so the possessive adds 's: \"the children's toys.\""
    ]
  },
  "q:a6522f05307a0e31": {
    "options": [
      "are",
      "has been",
      "is",
      "was"
    ],
    "explanations": [
      "\"Dr. Kenji Tanaka and his colleague Dr. Lisa Patel\" is a compound subject joined by \"and,\" which is plural. The plural present-tense \"are\" agrees with it and fits the description of their current standing.",
      "\"Has been\" is singular, but two people joined by \"and\" form a plural subject. The singular \"colleague\" immediately before the blank describes the second name and is not the subject's head.",
      "\"Is\" is singular, but the compound subject \"Dr. Tanaka and... Dr. Patel\" names two people and takes a plural verb.",
      "\"Was\" is singular and past. The subject is plural, and the researchers are described as currently \"among the leading researchers,\" so the present tense is needed."
    ]
  },
  "q:47d3cab1ca7491e2": {
    "options": [
      "A pronoun must match the verb that follows",
      "A pronoun must match its verb in person",
      "A pronoun must match its antecedent in number",
      "A pronoun must match the closest noun to it"
    ],
    "explanations": [
      "Pronouns do not agree with verbs; verbs agree with their subjects. A pronoun's agreement partner is its antecedent, the noun it replaces.",
      "Person is a property pronouns carry, but \"match its verb in person\" is not the rule of pronoun-antecedent agreement. The pronoun must match the noun it stands for.",
      "A pronoun must agree in number (singular or plural) with its antecedent, the noun it refers to: \"the students... their,\" \"the committee... its.\"",
      "The antecedent is the noun the pronoun refers to, not whichever noun happens to be closest. Choosing the nearest noun often gives the wrong number when a prepositional phrase intervenes."
    ]
  },
  "q:03fd162e997fd526": {
    "options": [
      "It can be a phrase ending in a verb",
      "It must be an independent clause",
      "It must name the number of items",
      "It must be a dependent clause"
    ],
    "explanations": [
      "A phrase ending in a verb, such as \"She bought:\", is not a complete thought; the verb is waiting for its object. A colon cannot follow an incomplete clause.",
      "The words before a colon must form an independent clause that could stand alone as a complete sentence. The colon then introduces a list, explanation, or elaboration.",
      "Naming the number of items (\"three things\") is common but not required. \"The answer was clear: we had to leave\" uses a colon with no count at all.",
      "A dependent clause cannot precede a colon because it is not a complete thought. The colon requires a full independent clause before it."
    ]
  }
}

export default ENTRIES
