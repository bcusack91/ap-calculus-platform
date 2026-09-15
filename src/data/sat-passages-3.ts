/**
 * SAT Reading Passage Bank, part 3 — Information & Ideas (ids ii-01..ii-20)
 *
 * Digital SAT format: one short passage, one question.
 * 6 Central Ideas and Details, 5 Command of Evidence (Textual),
 * 5 Command of Evidence (Quantitative, markdown pipe tables), 4 Inferences.
 * Genres spread evenly (5 each).
 */

import type { ReadingPassage } from './sat-passages'

export const SAT_PASSAGES_3: ReadingPassage[] = [
  // ─── Central Ideas and Details ───────────────────────────────────────────
  {
    id: 'ii-01',
    title: 'The Flat Piano',
    genre: 'literary',
    text: `Every afternoon at four, the Okafors’ daughter practiced scales on a piano that Tomas, who had tuned pianos for forty years, could hear was badly flat in the upper register. At first he winced at every run. He drafted a note offering to tune the instrument, then tore it up, reluctant to suggest that the family’s piano—or the girl’s effort—was lacking. By October he realized he was listening for her rather than for the flaws. When she finally played the difficult passage of a Clementi sonatina without stopping, he set down his newspaper and, alone in his kitchen, applauded.`,
    questions: [
      {
        question: 'Which choice best states the main idea of the text?',
        options: [
          'A retired piano tuner offers his services to a neighbor even though he fears the family will be offended.',
          'A man trained to notice a piano’s flaws comes to value a young player’s progress over the piano’s sound.',
          'A young pianist overcomes the limits of an out-of-tune instrument by practicing a difficult sonatina every day.',
          'A man’s long career has left him unable to enjoy any music that falls short of technical perfection.',
        ],
        correctAnswer: 1,
        explanation: 'Tomas begins by wincing at the flat notes but ends up “listening for her rather than for the flaws” and applauding her success, so the text centers on his shift from judging the instrument to valuing the girl’s progress. He tears up the note rather than sending it, so he never offers his services. The text reports what Tomas hears and feels, not how the girl manages her practice, so it does not establish that she overcame the piano’s limits through daily effort. The idea that his career keeps him from enjoying imperfect music is contradicted by the ending, where he applauds a performance on the same flat piano.',
        skill: 'central-ideas',
      },
    ],
  },
  {
    id: 'ii-02',
    title: 'Pando',
    genre: 'natural-science',
    text: `In Utah’s Fishlake National Forest stands Pando, a grove of quaking aspen that looks like a forest of roughly 47,000 trees but is genetically a single organism: every stem sprouted from one interconnected root system. Covering about 43 hectares, Pando is often described as one of the most massive living things on Earth. Its size, however, masks a vulnerability. An individual aspen stem typically lives only about a century, so a clone persists by continually sending up new shoots from its roots. In much of Pando, mule deer and elk eat those shoots before they can mature, and as older stems die, few young ones replace them.`,
    questions: [
      {
        question: 'According to the text, what is a major threat to Pando?',
        options: [
          'Its stems are genetically distinct from one another, which leaves the grove open to many diseases.',
          'Its root system has grown too large to supply water to all of the grove’s roughly 47,000 stems.',
          'Its stems are dying at younger ages than the stems in other aspen groves in the national forest.',
          'Animals eat the new shoots that would otherwise grow to replace the grove’s aging stems.',
        ],
        correctAnswer: 3,
        explanation: 'The text says Pando survives by sending up new shoots, but deer and elk eat those shoots “before they can mature,” so dying stems are not replaced. The claim that the stems are genetically distinct contradicts the text, which says the grove is genetically a single organism. Nothing in the text suggests the root system is too large to supply the stems. The text gives a typical stem lifespan but never compares Pando’s stems with those of other groves.',
        skill: 'central-ideas',
      },
    ],
  },
  {
    id: 'ii-03',
    title: 'The IKEA Effect',
    genre: 'social-science',
    text: `In a 2012 study, researchers Michael Norton, Daniel Mochon, and Dan Ariely asked some participants to assemble simple IKEA storage boxes and gave other participants identical boxes that had already been assembled. Participants who had built their own boxes were willing to pay significantly more for them, a result the researchers called the “IKEA effect.” Effort alone, however, did not produce the effect. When participants built a creation and then had to take it apart, or were unable to finish building it, the extra value they placed on their work disappeared.`,
    questions: [
      {
        question: 'Which choice best states the main idea of the text?',
        options: [
          'People tend to value products more after working to make them, but only if that work produces a finished product.',
          'People are willing to pay more for products that were assembled by others than for products they must build.',
          'The effort required to assemble a product makes people less likely to buy it unless the price is reduced.',
          'People who fail to finish building a product value it less than people who receive the product already assembled.',
        ],
        correctAnswer: 0,
        explanation: 'The text reports that building boxes raised what participants would pay, then qualifies that finding: the added value disappeared when the work was undone or left unfinished. The claim that people pay more for items others assembled reverses the study’s result. The text says nothing about effort discouraging purchases or depending on price. The text says only that the extra value “disappeared” for unfinished work, not that those participants valued their products less than people who received assembled boxes.',
        skill: 'central-ideas',
      },
    ],
  },
  {
    id: 'ii-04',
    title: 'A Red Record',
    genre: 'historical',
    text: `When journalist Ida B. Wells published A Red Record in 1895, she knew that many white readers would dismiss an account of lynching written by a Black woman as exaggerated. She therefore built much of her case on statistics that the Chicago Tribune, a white-owned newspaper, had compiled each year. By drawing on figures that her opponents already accepted, Wells made her findings far harder to reject, and she used those figures to challenge the widespread claim that lynchings were responses to serious crimes.`,
    questions: [
      {
        question: 'According to the text, why did Wells rely on statistics compiled by the Chicago Tribune?',
        options: [
          'She believed the Tribune’s records were more complete than any data she could have gathered on her own.',
          'She wanted to show that white-owned newspapers had overstated the number of lynchings in their reports.',
          'She expected that figures from a source her opponents trusted would be difficult for them to dismiss.',
          'She had been unable to find any newspaper willing to publish the results of her own investigations.',
        ],
        correctAnswer: 2,
        explanation: 'The text says Wells anticipated that white readers would dismiss her account, so she used “figures that her opponents already accepted” to make her findings harder to reject. The text never compares the completeness of the Tribune’s records with other data. Wells used the Tribune’s numbers as reliable support, not to argue that white newspapers exaggerated. Nothing in the text says she had trouble getting her own work published.',
        skill: 'central-ideas',
      },
    ],
  },
  {
    id: 'ii-05',
    title: 'Borrowed Poison',
    genre: 'natural-science',
    text: `Monarch butterfly caterpillars feed almost exclusively on milkweed, plants that contain toxic compounds called cardenolides. Rather than being harmed, the caterpillars store these compounds in their bodies, and the compounds remain in the adult butterflies. In experiments in the 1960s, ecologist Lincoln Brower offered monarchs to captive blue jays. Jays that ate monarchs raised on milkweed often vomited and afterward refused monarchs altogether, whereas monarchs that Brower had raised on cabbage were eaten without ill effects.`,
    questions: [
      {
        question: 'Which choice best states the main idea of the text?',
        options: [
          'Blue jays cannot learn to avoid prey that has previously made them ill, so they continue to eat toxic butterflies.',
          'Monarchs are protected from birds by toxic compounds they take in from the plants they eat as caterpillars.',
          'Monarch caterpillars raised on cabbage grow into adults that are more toxic than those raised on milkweed.',
          'Milkweed produces cardenolides mainly to prevent monarch caterpillars from feeding on its leaves.',
        ],
        correctAnswer: 1,
        explanation: 'The text explains that caterpillars store milkweed’s cardenolides, and Brower’s experiment shows that milkweed-raised monarchs sickened jays while cabbage-raised monarchs did not, so the stored compounds protect the butterflies. The jays refused monarchs after being sickened, which contradicts the claim that they cannot learn to avoid them. Cabbage-raised monarchs caused no ill effects, the reverse of being more toxic. The text never explains why milkweed produces cardenolides, and the caterpillars are not deterred from eating it.',
        skill: 'central-ideas',
      },
    ],
  },
  {
    id: 'ii-06',
    title: 'The Recipe Box',
    genre: 'literary',
    text: `When Nadia inherited her grandmother’s recipe box, she expected precise instructions. Instead, the cards offered only fragments: “butter, the good kind,” “flour until it looks right,” “bake till the kitchen smells like Sunday.” For weeks her loaves came out dense and pale. Then one evening, kneading dough while her aunt told stories about the old apartment on Delancey Street, Nadia stopped measuring and simply watched the dough change under her hands. The cards, she realized, had never been written for a stranger; they were reminders for someone who already knew.`,
    questions: [
      {
        question: 'According to the text, what does Nadia realize about her grandmother’s recipe cards?',
        options: [
          'They were left vague on purpose so that younger relatives would need to ask older ones for help.',
          'They recorded family stories about the old apartment in place of actual cooking instructions.',
          'They contained mistakes that explain why her first several loaves turned out dense and pale.',
          'They were meant to jog an experienced cook’s memory, not to teach the dishes to a beginner.',
        ],
        correctAnswer: 3,
        explanation: 'The final sentence states Nadia’s realization directly: the cards “had never been written for a stranger; they were reminders for someone who already knew.” The text gives no sign that the vagueness was a deliberate way to make relatives ask for help. The stories about the apartment come from her aunt, not from the cards, which do contain instructions, however loose. Her dense loaves reflect her reliance on measurement, not errors on the cards.',
        skill: 'central-ideas',
      },
    ],
  },

  // ─── Command of Evidence: Textual ────────────────────────────────────────
  {
    id: 'ii-07',
    title: 'The Peach Stand',
    genre: 'literary',
    text: `“The Peach Stand” is a short story about Ines, a young woman who runs her late father’s roadside fruit stand. Throughout the story, Ines is portrayed as someone who takes quiet satisfaction in careful work that goes unappreciated by others.`,
    questions: [
      {
        question: 'Which quotation from “The Peach Stand” most effectively illustrates the claim?',
        options: [
          '“Ines had never liked the long drive out to the orchards, though she made it twice a week without a word of complaint.”',
          '“When the trucks roared past without slowing, Ines wondered whether she ought to sell the stand after all.”',
          '“No traveler ever noticed that each peach was turned so its blush faced the road, but Ines turned them anyway, and was glad.”',
          '“Her father had built the stand from old barn wood, and customers often stopped just to admire its weathered boards.”',
        ],
        correctAnswer: 2,
        explanation: 'The quotation about the peaches shows both parts of the claim: travelers never notice the careful arrangement, yet Ines does it anyway “and was glad.” The quotation about the drive to the orchards shows diligence but no satisfaction, and the drive is not described as unnoticed work. The quotation about the passing trucks shows doubt about the stand rather than satisfaction. The quotation about the barn wood concerns her father’s craftsmanship, which customers do notice, and says nothing about Ines.',
        skill: 'evidence',
      },
    ],
  },
  {
    id: 'ii-08',
    title: 'Remote Coffee Breaks',
    genre: 'social-science',
    text: `Many companies with remote employees hold scheduled video “coffee breaks” to reduce workers’ feelings of isolation. A team of organizational psychologists hypothesizes that these breaks help mainly because they encourage informal conversation, not simply because they give coworkers a regular chance to see one another.`,
    questions: [
      {
        question: 'Which finding, if true, would most directly support the team’s hypothesis?',
        options: [
          'Workers whose breaks were kept to casual chat felt less isolated than those whose breaks covered work updates, though both met equally often.',
          'Remote workers who attended video coffee breaks reported feeling less isolated than remote workers who did not attend any such breaks.',
          'Remote workers reported feeling more isolated overall than office-based workers did, regardless of whether they attended breaks.',
          'Most workers who attended video coffee breaks said they preferred meeting by video to meeting by an audio-only phone call.',
        ],
        correctAnswer: 0,
        explanation: 'The hypothesis separates two explanations: informal conversation versus merely seeing coworkers. Comparing groups that met equally often but differed in whether conversation was informal isolates the conversation itself, and the informal group felt less isolated. Showing that attendees felt less isolated than non-attendees supports the value of the breaks but cannot tell which explanation is responsible. The comparison with office workers does not address the breaks at all. A preference for video over audio concerns seeing coworkers, not the role of informal conversation.',
        skill: 'evidence',
      },
    ],
  },
  {
    id: 'ii-09',
    title: 'City Songs',
    genre: 'natural-science',
    text: `Traffic noise is concentrated at low sound frequencies. Some biologists hypothesize that songbirds of certain species living in cities sing at higher pitches than members of the same species in forests because low-pitched notes are masked by urban noise, making higher notes easier for other birds to hear.`,
    questions: [
      {
        question: 'Which finding, if true, would most directly support the biologists’ hypothesis?',
        options: [
          'Birds of these species living in cities begin singing earlier in the morning than forest birds of the same species do.',
          'Birds of these species living in cities are, on average, slightly smaller in body size than those living in forests.',
          'Birds of these species in quiet forests sing a greater variety of distinct songs than birds of these species in cities.',
          'Within a single city, birds of these species sing higher-pitched songs at noisy sites than at quieter sites nearby.',
        ],
        correctAnswer: 3,
        explanation: 'If pitch rises with the amount of low-frequency noise even within one city, that links higher songs directly to noise rather than to other differences between cities and forests. Singing earlier in the morning concerns timing, not pitch. A difference in body size is unrelated to noise masking and, if anything, suggests another possible cause of pitch differences. A difference in song variety says nothing about pitch or noise.',
        skill: 'evidence',
      },
    ],
  },
  {
    id: 'ii-10',
    title: 'Beyond the Canal',
    genre: 'historical',
    text: `The Erie Canal, completed in 1825, connected the Hudson River to Lake Erie and made shipping between New York City and the Great Lakes far cheaper and faster. A historian argues that the canal’s effects extended well beyond New York State, drawing large numbers of settlers into the Great Lakes region farther west.`,
    questions: [
      {
        question: 'Which finding, if true, would most directly support the historian’s argument?',
        options: [
          'Merchants in New York City built new warehouses near the Hudson River to store goods arriving by way of the canal.',
          'The population of Michigan Territory more than tripled from 1820 to 1830, with many settlers using the canal.',
          'Thousands of laborers, many of them recent immigrants, were employed to dig the canal over roughly eight years.',
          'Tolls collected on the canal in its first years exceeded the amounts that New York officials had predicted.',
        ],
        correctAnswer: 1,
        explanation: 'Rapid population growth in Michigan Territory, with many settlers traveling by the canal, shows the canal drawing settlers into the western Great Lakes region, outside New York. The warehouses in New York City show an effect inside New York State. The laborers who dug the canal worked in New York and are not described as settling farther west. High toll revenue shows the canal’s commercial success but not any effect on settlement beyond the state.',
        skill: 'evidence',
      },
    ],
  },
  {
    id: 'ii-11',
    title: 'Inventory After the Flood',
    genre: 'literary',
    text: `“Inventory After the Flood” is a poem in which the speaker walks through a family home after floodwaters have receded. In the poem, the speaker suggests that ordinary household objects hold traces of the people who once used them.`,
    questions: [
      {
        question: 'Which quotation from “Inventory After the Flood” most effectively illustrates the claim?',
        options: [
          '“The chipped blue mug still keeps the print of my brother’s thumb / worn pale along its rim.”',
          '“The river climbed the porch steps slowly, / like a guest unsure of its welcome at the door.”',
          '“We carried what we could to the neighbor’s truck / and left the rest to the rising water.”',
          '“By morning the fields had become a single mirror, / holding the whole of the gray sky.”',
        ],
        correctAnswer: 0,
        explanation: 'The mug that keeps “the print of my brother’s thumb” is an ordinary object bearing a physical trace of a person who used it. The lines about the river climbing the porch steps personify the flood rather than describing an object that holds a trace of anyone. The lines about carrying belongings to a truck describe the family’s actions during the flood without suggesting that the objects hold memories. The image of the flooded fields as a mirror describes the landscape, not household objects.',
        skill: 'evidence',
      },
    ],
  },

  // ─── Command of Evidence: Quantitative ───────────────────────────────────
  {
    id: 'ii-12',
    title: 'Seeds and Temperature',
    genre: 'natural-science',
    text: `A team of botanists tested how temperature affects the germination of seeds from two wildflower species, one native to a high-elevation meadow and one native to a low desert. In spring, when both species germinate in the wild, the meadow is cool and the desert is already warm. The team hypothesized that each species germinates most successfully at temperatures like those of its native habitat in spring.

| Temperature | Meadow species germination (%) | Desert species germination (%) |
|---|---|---|
| 10°C | 74 | 21 |
| 20°C | 58 | 49 |
| 30°C | 17 | 83 |`,
    questions: [
      {
        question: 'Which choice most effectively uses data from the table to support the team’s hypothesis?',
        options: [
          'At 20°C, the meadow species germinated at a higher rate than the desert species did, 58% compared with 49%.',
          'The desert species germinated at a lower rate at 10°C than the meadow species did at 30°C.',
          'The meadow species germinated best at 10°C, at 74%, while the desert species germinated best at 30°C, at 83%.',
          'The meadow species germinated at a higher rate than the desert species did at every temperature that was tested.',
        ],
        correctAnswer: 2,
        explanation: 'The hypothesis predicts that the meadow species will do best at a cool temperature and the desert species at a warm one, and the table shows the meadow species peaking at 10°C (74%) and the desert species peaking at 30°C (83%). The comparison at 20°C is accurate but concerns a single temperature and does not show where either species does best. The claim that the desert species at 10°C germinated at a lower rate than the meadow species at 30°C misreads the table: 21% is higher than 17%. The claim that the meadow species led at every temperature is false, since at 30°C it germinated at 17% versus 83%.',
        skill: 'evidence',
      },
    ],
  },
  {
    id: 'ii-13',
    title: 'Borrowing by Format',
    genre: 'social-science',
    text: `A county library system tracked how many items it lent in each of three formats. A librarian observes that the shift toward digital borrowing has not been uniform: although e-book loans grew by a larger number than digital audiobook loans did from 2015 to 2023, digital audiobook loans grew much faster in proportion to where they started.

| Year | Print book loans | E-book loans | Digital audiobook loans |
|---|---|---|---|
| 2015 | 820,000 | 95,000 | 40,000 |
| 2019 | 760,000 | 180,000 | 110,000 |
| 2023 | 705,000 | 310,000 | 240,000 |`,
    questions: [
      {
        question: 'Which choice most effectively uses data from the table to support the librarian’s observation?',
        options: [
          'Print book loans fell from 820,000 in 2015 to 705,000 in 2023, even as loans in both of the digital formats rose.',
          'E-book loans were higher than digital audiobook loans in each of the three years that appear in the table.',
          'Digital audiobook loans rose from 40,000 to 240,000, a larger gain in loans than e-books had over the period.',
          'E-books gained 215,000 loans to audiobooks’ 200,000, but audiobook loans grew sixfold; e-book loans, about threefold.',
        ],
        correctAnswer: 3,
        explanation: 'The observation has two parts, and only the comparison of gains and growth rates addresses both: e-books added more loans (215,000 versus 200,000), while audiobook loans grew sixfold (40,000 to 240,000) compared with roughly threefold for e-books (95,000 to 310,000). The decline in print loans is accurate but does not compare the two digital formats. That e-books led in every year is also accurate but says nothing about growth. The claim that audiobooks had the larger gain in loans reverses the data, since their gain of 200,000 is smaller than the e-book gain of 215,000.',
        skill: 'evidence',
      },
    ],
  },
  {
    id: 'ii-14',
    title: 'An Urban Nation',
    genre: 'historical',
    text: `Between the Civil War and the 1920s, the United States changed from a mostly rural nation into a mostly urban one. The U.S. Census Bureau counted people living in places of 2,500 or more residents as urban. A historian notes that the change crossed a symbolic threshold with the 1920 census, which showed that ______

| Census year | Urban population (% of total) |
|---|---|
| 1870 | 25.7 |
| 1890 | 35.1 |
| 1900 | 39.6 |
| 1910 | 45.6 |
| 1920 | 51.2 |`,
    questions: [
      {
        question: 'Which choice most effectively uses data from the table to complete the statement?',
        options: [
          'the urban share of the population had roughly doubled since 1870, when it stood at 25.7%.',
          '51.2% of Americans lived in urban areas, up from 45.6% at the time of the 1910 census.',
          '45.6% of Americans lived in urban areas, the highest share recorded up to that time.',
          'the urban share had risen by more than ten percentage points since the 1910 census.',
        ],
        correctAnswer: 1,
        explanation: 'A symbolic threshold for becoming a mostly urban nation is a majority, and the 1920 figure of 51.2% is the first above 50%, up from 45.6% in 1910. The doubling since 1870 is accurate but does not show that the urban share passed a majority. The figure of 45.6% belongs to 1910, not 1920, and is below half. The rise from 1910 to 1920 was 5.6 percentage points, not more than ten.',
        skill: 'evidence',
      },
    ],
  },
  {
    id: 'ii-15',
    title: 'Heartbeats and Body Size',
    genre: 'natural-science',
    text: `Among mammals, resting heart rate generally falls as body mass rises: small mammals lose body heat quickly relative to their size and must sustain high metabolic rates. The relationship is far from proportional, however. Very large differences in body mass correspond to much smaller differences in heart rate. For example, ______

| Mammal | Approximate body mass (kg) | Approximate resting heart rate (beats per minute) |
|---|---|---|
| Mouse | 0.02 | 600 |
| Rabbit | 2 | 200 |
| Dog (medium-sized) | 20 | 90 |
| Horse | 500 | 36 |
| Elephant | 5,000 | 30 |`,
    questions: [
      {
        question: 'Which choice most effectively uses data from the table to complete the example?',
        options: [
          'an elephant has about ten times the body mass of a horse, yet its resting heart rate is only about 6 beats per minute slower.',
          'a horse, which weighs about 500 kilograms, has a faster resting heart rate than an elephant, which weighs about 5,000 kilograms.',
          'a rabbit has a slower resting heart rate than a mouse does but a faster resting heart rate than a medium-sized dog does.',
          'a medium-sized dog has about ten times the body mass of a rabbit and a resting heart rate about one-tenth as fast.',
        ],
        correctAnswer: 0,
        explanation: 'The example must show a large difference in mass paired with a small difference in heart rate: the elephant has ten times the horse’s mass (5,000 versus 500 kg), but its heart rate is only 6 beats per minute lower (30 versus 36). The horse and elephant comparison without the size of the difference shows only the general pattern, not that it is far from proportional. The rabbit’s ranking between the mouse and the dog also shows only the general pattern. The dog’s heart rate (90) is less than half the rabbit’s (200), not one-tenth, and a proportional drop would contradict the claim anyway.',
        skill: 'evidence',
      },
    ],
  },
  {
    id: 'ii-16',
    title: 'Changing Commutes',
    genre: 'social-science',
    text: `An urban planner surveyed workers in a midsize city about how they commuted in 2014 and again in 2024. Bicycle commuting grew substantially over that decade. The planner argues that this growth came mainly at the expense of driving rather than public transit.

| Commute mode | 2014 (% of workers) | 2024 (% of workers) |
|---|---|---|
| Drive alone | 64 | 55 |
| Public transit | 18 | 17 |
| Bicycle | 3 | 10 |
| Walk | 6 | 6 |
| Work from home | 9 | 12 |`,
    questions: [
      {
        question: 'Which choice most effectively uses data from the table to support the planner’s argument?',
        options: [
          'The share of workers who commuted by bicycle more than tripled over the decade, rising from 3% in 2014 to 10% in 2024.',
          'In both 2014 and 2024, a larger share of workers drove alone than used all of the other commute modes combined.',
          'From 2014 to 2024, the share of workers who drove alone fell by 9 percentage points, while the share using transit fell by 1.',
          'The share of workers using public transit fell by more than the share who walked, which remained at 6% in both years.',
        ],
        correctAnswer: 2,
        explanation: 'To show that bicycling grew mainly at the expense of driving rather than transit, the data must compare the declines in those two modes: driving alone fell 9 points (64% to 55%) while transit fell only 1 point (18% to 17%). The tripling of bicycle commuting is accurate but does not show which modes lost riders. The majority share of driving in both years is accurate but says nothing about change over time. The comparison of transit with walking leaves out driving, the mode the argument depends on.',
        skill: 'evidence',
      },
    ],
  },

  // ─── Inferences ──────────────────────────────────────────────────────────
  {
    id: 'ii-17',
    title: 'The Quiet Grandfather',
    genre: 'literary',
    text: `For years, Theo assumed that his grandfather’s silence at family dinners signaled disapproval. The old man rarely joined the conversation and usually left the table before dessert. But after his grandfather was fitted with a hearing aid last spring, Theo noticed him laughing at jokes, interrupting to correct a date, and even staying late to argue about baseball. Theo began to suspect that his grandfather’s earlier withdrawal ______`,
    questions: [
      {
        question: 'Which choice most logically completes the text?',
        options: [
          'reflected a long-standing dislike of the particular relatives who usually attended the dinners.',
          'was a deliberate way of avoiding arguments about baseball with his grandson and the others.',
          'came from the discomfort of adjusting to the new hearing aid he had only recently been fitted with.',
          'had less to do with how he felt about his family than with how little he could hear.',
        ],
        correctAnswer: 3,
        explanation: 'The grandfather became engaged only after receiving a hearing aid, which suggests that his earlier silence resulted from difficulty hearing rather than disapproval. Nothing in the text points to dislike of particular relatives, and his lively participation afterward argues against it. He now stays late to argue about baseball, so avoiding such arguments is an unlikely explanation. The withdrawal came before the hearing aid was fitted, so it cannot have been caused by adjusting to the device.',
        skill: 'inference',
      },
    ],
  },
  {
    id: 'ii-18',
    title: 'Irregular Verbs',
    genre: 'social-science',
    text: `Most English verbs form the past tense by adding -ed, but some, such as “go” (went) and “sing” (sang), are irregular. In a 2007 study, Erez Lieberman and colleagues traced irregular verbs from Old English to modern English and found that rarely used irregular verbs became regular far faster than common ones: a verb used 100 times less often became regular about 10 times as fast. The researchers proposed that speakers hear common irregular forms so often that those forms stay firmly fixed in memory. If this explanation is correct, it suggests that ______`,
    questions: [
      {
        question: 'Which choice most logically completes the text?',
        options: [
          'an irregular verb whose use declines over time will become more likely to take on a regular past tense.',
          'the most common English verbs were regular in Old English and became irregular only in later centuries.',
          'speakers are more likely to misremember a common irregular past tense form than a rarely used one.',
          'verbs that have entered English recently are more likely to be irregular than verbs from Old English.',
        ],
        correctAnswer: 0,
        explanation: 'If frequent use keeps irregular forms fixed in memory, then a verb that is used less and less loses that protection and should become more likely to regularize. The text describes irregular verbs changing to regular ones, not common verbs becoming irregular. The claim that speakers misremember common forms more readily reverses the explanation, which holds that frequent exposure strengthens memory. The text says nothing about newly added verbs, and the explanation gives no reason to expect them to be irregular.',
        skill: 'inference',
      },
    ],
  },
  {
    id: 'ii-19',
    title: 'Silk from Afar',
    genre: 'historical',
    text: `Silk from China was highly prized in the Roman Empire by the first century CE, yet Roman writers had remarkably little accurate information about where it came from. Pliny the Elder, for instance, described silk as a kind of down combed from the leaves of trees. Historians note that goods moving along the routes linking China and the Mediterranean usually passed through the hands of many intermediaries, including Central Asian and Parthian (Persian) merchants, and that few individual traders traveled the entire distance. These observations suggest that ______`,
    questions: [
      {
        question: 'Which choice most logically completes the text?',
        options: [
          'Chinese producers deliberately spread false stories about the origins of silk among Roman writers.',
          'Romans’ mistaken ideas about silk may have stemmed partly from how few traders traveled the entire route.',
          'Roman demand for silk declined once accurate knowledge of the fiber’s origins became widely available.',
          'the Parthian merchants who traded silk were equally unaware of how and where the fiber was produced.',
        ],
        correctAnswer: 1,
        explanation: 'Because silk reached Rome through many intermediaries and almost no one traveled from China to the Mediterranean, accurate firsthand knowledge of its production would rarely have reached Roman writers, which helps explain errors like Pliny’s. The text mentions no deliberate deception by Chinese producers. It says nothing about later Roman demand or about when accurate knowledge spread. It also gives no information about what Parthian merchants knew about silk production.',
        skill: 'inference',
      },
    ],
  },
  {
    id: 'ii-20',
    title: 'Clocks and Longitude',
    genre: 'historical',
    text: `In the eighteenth century, sailors could find their latitude fairly easily by measuring the height of the Sun or certain stars, but determining longitude was far harder. Because Earth rotates 15 degrees each hour, a navigator could calculate longitude by comparing the local time, found from the Sun’s position, with the time at a reference location such as the home port. That method depended on a clock that kept the home port’s time accurately through months at sea. As a result, a navigator whose clock had drifted by several minutes over a long voyage ______`,
    questions: [
      {
        question: 'Which choice most logically completes the text?',
        options: [
          'would misjudge the ship’s latitude, even though the ship’s longitude could still be found.',
          'could correct the problem simply by measuring the height of the Sun at noon each day.',
          'would calculate a longitude that placed the ship noticeably away from its true position.',
          'would still find the correct longitude as long as the local time was measured precisely.',
        ],
        correctAnswer: 2,
        explanation: 'Longitude comes from the difference between local time and home-port time, so a clock showing the wrong home-port time would produce a wrong longitude; since Earth turns 15 degrees per hour, even minutes of error shift the result. The text says latitude is found from the Sun or stars, not from the clock, so a drifting clock would not affect it. Measuring the Sun’s height gives latitude or local time but cannot restore the home port’s time. Precise local time cannot compensate for an inaccurate reference time, because the method depends on both.',
        skill: 'inference',
      },
    ],
  },
]
