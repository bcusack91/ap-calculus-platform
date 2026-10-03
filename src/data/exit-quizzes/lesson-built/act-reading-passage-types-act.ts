/**
 * Exit-quiz pool for the ACT Reading Passage Types lesson (literary narrative,
 * social science, humanities, natural science, paired passages, approaching
 * each type under time, and an integrated two-type set), written from the
 * lesson itself and tagged by exam-yield tier (see ../lesson-built.ts).
 * Every item carries its own original passage, and no passage here is one the
 * lesson uses as a teaching example.
 */
import { makeLessonExitQuiz, type LessonExitItem } from '../lesson-built'

export const EXIT_POOL: LessonExitItem[] = [
  // ───────────── Part 1 — literary narrative: people, shifts, narrator, tone ─────────────
  {
    question: `Marisol had promised herself she would not look at the piano while she cleaned out her grandmother's apartment. For twelve years she had blamed it for the Saturday mornings she lost to scales and metronomes. But when the movers lifted the lid to check for loose keys, she found a stack of her own childhood recital programs tucked inside, each one dated in her grandmother's careful hand. Marisol told the movers to wait. She sat down on the bench for the first time since she was fourteen.

Over the course of the passage, Marisol's attitude toward the piano shifts from:`,
    options: [
      `indifference to an eager plan to start lessons again`,
      `resentment to a softening sense of attachment`,
      `affection to disappointment in her grandmother`,
      `curiosity to worry about how the movers handle it`,
    ],
    correctAnswer: 1,
    explanation: `Marisol "blamed" the piano for her lost Saturdays, which is resentment, yet after finding the programs she stops the movers and sits at the bench, a clear softening. She was never indifferent and makes no plan to take lessons. Nothing suggests she is disappointed in her grandmother, and the movers' handling of the piano is not her concern.`,
    difficulty: 'medium',
    yield: 'ULTRA_HIGH',
    part: 1,
  },
  {
    question: `Marisol had promised herself she would not look at the piano while she cleaned out her grandmother's apartment. For twelve years she had blamed it for the Saturday mornings she lost to scales and metronomes. But when the movers lifted the lid to check for loose keys, she found a stack of her own childhood recital programs tucked inside, each one dated in her grandmother's careful hand. Marisol told the movers to wait. She sat down on the bench for the first time since she was fourteen.

The discovery of the recital programs most strongly suggests that Marisol's grandmother:`,
    options: [
      `had wanted the piano sold once she died`,
      `had hoped Marisol would teach piano someday`,
      `had kept the programs to recall Marisol's errors`,
      `had treasured Marisol's playing more than Marisol ever realized`,
    ],
    correctAnswer: 3,
    explanation: `Saving every program and dating each one by hand shows the grandmother cherished Marisol's playing, which surprises a granddaughter who remembers only lost Saturdays. The passage says nothing about selling the piano or about a teaching career. Nothing hints that the programs record mistakes; they are simply kept with care.`,
    difficulty: 'medium',
    yield: 'HIGH',
    part: 1,
  },
  {
    question: `For most of a year, Carmen and her former best friend Ada had passed each other in the school hallway without a word. On the opening night of the student art show, Carmen found Ada standing in front of her painting, a gray harbor at dawn, for longer than anyone else had. "The water's wrong," Ada said without turning around. "Too blue." Carmen started to answer, then stopped. Ada took a pencil from her pocket, wrote something on the comment card beneath the frame, folded the card in half, and walked away before Carmen could read it.

Which choice best describes the relationship between Carmen and Ada at the end of the passage?`,
    options: [
      `Openly hostile, with Ada mocking the painting in front of everyone`,
      `Fully mended, now that Ada has praised Carmen's painting aloud`,
      `Still guarded, though Ada's attention hints at lingering regard`,
      `Distant, because Ada has never cared much about Carmen's art`,
    ],
    correctAnswer: 2,
    explanation: `Ada will not turn around and leaves before Carmen can read the card, so the distance remains, yet she studies the painting longer than anyone and takes the trouble to write a comment, which hints that she still cares. Her single remark is a pointed critique spoken to Carmen, not public mockery. She criticizes the water rather than praising it, so nothing is fully mended, and her long attention contradicts the claim that she never cared about Carmen's art.`,
    difficulty: 'hard',
    yield: 'HIGH',
    part: 1,
  },
  {
    question: `Every Sunday the year I was ten, my father drove us forty minutes to a roadside diner whose cherry pie was, by any honest measure, terrible. I complained from the first mile to the last. He always ordered two slices, slid one across the table to me, and said almost nothing while an older waitress named June refilled his coffee without being asked. I did not learn until I was grown that June had worked beside my grandmother at the cannery for thirty years, and that she was the last person alive who still called my father by his childhood name.

Which choice best describes how the narrator's view of the Sunday trips differs between age ten and the present?`,
    options: [
      `At ten they seemed a pointless chore; now they seem a tie to family`,
      `At ten they seemed a treat; now they seem a waste of a father's time`,
      `At ten they seemed frightening; now they seem merely tiresome`,
      `At ten they seemed restful; now they seem a burden to resent`,
    ],
    correctAnswer: 0,
    explanation: `The ten-year-old "complained from the first mile to the last," so the trips felt like a chore; the adult now knows June linked the father to the grandmother and to his own childhood, so the trips were about family. The child never treated the trips as a treat, and the adult shows no sense that they wasted time. Nothing in the passage is frightening or restful, and the adult's closing tone is understanding, not resentment.`,
    difficulty: 'medium',
    yield: 'ULTRA_HIGH',
    part: 1,
  },
  {
    question: `Every Sunday the year I was ten, my father drove us forty minutes to a roadside diner whose cherry pie was, by any honest measure, terrible. I complained from the first mile to the last. He always ordered two slices, slid one across the table to me, and said almost nothing while an older waitress named June refilled his coffee without being asked. I did not learn until I was grown that June had worked beside my grandmother at the cannery for thirty years, and that she was the last person alive who still called my father by his childhood name.

The narrator's tone in the passage is best described as:`,
    options: [
      `bitter and resentful`,
      `playful and carefree`,
      `wry and fond`,
      `solemn and grieving`,
    ],
    correctAnswer: 2,
    explanation: `Calling the pie "by any honest measure, terrible" is wry, and the closing revelation about June and the father's childhood name is told with evident fondness. Bitter and resentful ignores that warmth. The joke about the pie is playful, but nothing about the closing realization is carefree, so that pair fails on one word. The passage is gentle rather than solemn, and no one in it is mourned.`,
    difficulty: 'easy',
    yield: 'HIGH',
    part: 1,
  },

  // ───────────── Part 2 — social science: claim, evidence, concession, voices, cause ─────────────
  {
    question: `For decades, urban planners assumed that families leave cities mainly because of crime. Sociologist Teresa Okonjo argues that housing costs matter more. In her survey of 2,400 families who moved out of Midwestern cities between 2005 and 2015, 61 percent named rent or home prices as their main reason, while 14 percent named safety. Okonjo admits that respondents may underreport fears about crime, since some find such fears awkward to discuss. Still, she contends that the gap between the two figures is too wide to be explained by that alone.

The main claim of the passage is that:`,
    options: [
      `families leave cities mainly because of crime`,
      `housing costs drive more family moves than crime does`,
      `survey respondents always hide their fears about crime`,
      `Midwestern cities grew much safer after 2005`,
    ],
    correctAnswer: 1,
    explanation: `Okonjo's argument, supported by her survey, is that housing costs matter more than crime in families' decisions to leave. Crime as the main reason is the planners' older assumption, which the passage overturns. Okonjo says only that respondents "may underreport" crime fears, not that they always hide them, and the passage never reports any change in city safety.`,
    difficulty: 'easy',
    yield: 'ULTRA_HIGH',
    part: 2,
  },
  {
    question: `For decades, urban planners assumed that families leave cities mainly because of crime. Sociologist Teresa Okonjo argues that housing costs matter more. In her survey of 2,400 families who moved out of Midwestern cities between 2005 and 2015, 61 percent named rent or home prices as their main reason, while 14 percent named safety. Okonjo admits that respondents may underreport fears about crime, since some find such fears awkward to discuss. Still, she contends that the gap between the two figures is too wide to be explained by that alone.

The sentence beginning "Okonjo admits" serves mainly to:`,
    options: [
      `provide the main evidence for Okonjo's central claim`,
      `show that crime is the leading reason families move`,
      `explain why rents rose in Midwestern cities`,
      `concede a possible weakness in Okonjo's survey data`,
    ],
    correctAnswer: 3,
    explanation: `"Admits" signals a concession: Okonjo grants that her survey may undercount crime fears before arguing that the gap is still too wide. Her main evidence is the 61 percent and 14 percent figures, not this caveat. The sentence does not reverse her claim about housing costs, and the passage never explains why rents rose.`,
    difficulty: 'medium',
    yield: 'HIGH',
    part: 2,
  },
  {
    question: `For decades, urban planners assumed that families leave cities mainly because of crime. Sociologist Teresa Okonjo argues that housing costs matter more. In her survey of 2,400 families who moved out of Midwestern cities between 2005 and 2015, 61 percent named rent or home prices as their main reason, while 14 percent named safety. Okonjo admits that respondents may underreport fears about crime, since some find such fears awkward to discuss. Still, she contends that the gap between the two figures is too wide to be explained by that alone.

According to the passage, the share of surveyed families who named safety as their main reason for moving was:`,
    options: [
      `14 percent, well below the share citing housing costs`,
      `61 percent, well above the share citing housing costs`,
      `14 percent, slightly above the share citing housing costs`,
      `47 percent, the difference between the two figures`,
    ],
    correctAnswer: 0,
    explanation: `The passage says 14 percent named safety while 61 percent named rent or home prices. The 61 percent figure belongs to housing costs, not safety. Fourteen is far below sixty-one, not above it, and 47 is only the difference between the two figures, which the passage never presents as any group's answer.`,
    difficulty: 'easy',
    yield: 'HIGH',
    part: 2,
  },
  {
    question: `For decades, urban planners assumed that families leave cities mainly because of crime. Sociologist Teresa Okonjo argues that housing costs matter more. In her survey of 2,400 families who moved out of Midwestern cities between 2005 and 2015, 61 percent named rent or home prices as their main reason, while 14 percent named safety. Okonjo admits that respondents may underreport fears about crime, since some find such fears awkward to discuss. Still, she contends that the gap between the two figures is too wide to be explained by that alone.

Okonjo would most likely agree with which statement?`,
    options: [
      `Fear of crime plays no part in why families move`,
      `Her survey shows crime matters more than housing`,
      `Underreporting cannot fully explain the gap`,
      `Planners were right to focus mainly on crime`,
    ],
    correctAnswer: 2,
    explanation: `Okonjo concedes that crime fears may be underreported but contends the gap is "too wide to be explained by that alone." She does not say crime plays no part: 14 percent of families named safety, and she takes underreporting seriously. Her survey points toward housing costs, the reverse of crime mattering more, and her argument challenges the planners' focus on crime rather than endorsing it.`,
    difficulty: 'hard',
    yield: 'HIGH',
    part: 2,
  },
  {
    question: `When the town of Bellmore replaced its downtown parking meters with free, unlimited parking in 2018, merchants expected shoppers to pour in. Instead, economist Raj Patel found, downtown sales fell 6 percent the following year. The free spaces, he explains, were quickly taken by employees who parked all day, leaving few open spots for customers. Supporters of the change point out that sales also fell in two nearby towns that kept their meters, which suggests that a regional slowdown played some part. Patel agrees, but he notes that Bellmore's drop was twice as steep.

According to Patel, the parking change hurt downtown sales mainly because:`,
    options: [
      `shoppers disliked paying the new parking fees`,
      `employees filled the free spaces and crowded out shoppers`,
      `a regional slowdown alone pulled sales down in every nearby town`,
      `merchants raised prices to make up for lost meter fees`,
    ],
    correctAnswer: 1,
    explanation: `Patel explains that employees took the free spaces all day, leaving few spots for customers. Parking became free, so new fees could not be the cause. Patel grants that a regional slowdown "played some part," but "alone" contradicts his point that Bellmore fell twice as steeply, and merchant prices are never mentioned.`,
    difficulty: 'medium',
    yield: 'ULTRA_HIGH',
    part: 2,
  },
  {
    question: `When the town of Bellmore replaced its downtown parking meters with free, unlimited parking in 2018, merchants expected shoppers to pour in. Instead, economist Raj Patel found, downtown sales fell 6 percent the following year. The free spaces, he explains, were quickly taken by employees who parked all day, leaving few open spots for customers. Supporters of the change point out that sales also fell in two nearby towns that kept their meters, which suggests that a regional slowdown played some part. Patel agrees, but he notes that Bellmore's drop was twice as steep.

The detail that Bellmore's drop "was twice as steep" functions mainly to:`,
    options: [
      `show that the nearby towns had no slowdown of their own at all`,
      `prove that parking meters raise sales in every town`,
      `explain why employees chose to park downtown all day`,
      `suggest the parking change added to a regional decline`,
    ],
    correctAnswer: 3,
    explanation: `Patel accepts that a regional slowdown hit all three towns, then points out that Bellmore fell twice as far, which suggests the parking change caused extra losses on top of the slowdown. The nearby towns did see sales fall, so they had a slowdown too. One town's comparison cannot prove anything about every town, and the detail compares sales, not employees' reasons for parking.`,
    difficulty: 'hard',
    yield: 'HIGH',
    part: 2,
  },

  // ───────────── Part 3 — humanities: voices, the artist's view, word in context, insight ─────────────
  {
    question: `When the choreographer Lena Moreau staged her first ballet without music in 1962, several critics called the piece studied, an exercise in technique rather than a dance. Audiences kept coming anyway, and the work is now performed by companies on four continents. I saw it for the first time last spring, and what struck me was not silence but sound: the dancers' breathing, the soft slap of bare feet, a creak in the floorboards that seemed timed to the steps. Moreau always denied that she had made a statement about music. "I simply wanted the audience to hear the dancers," she said.

Based on her own statement, Moreau would most likely describe her decision to omit music as:`,
    options: [
      `a way to let the audience hear the dancers themselves`,
      `a bold protest against the role of music in ballet`,
      `a technical exercise, much as her early critics said`,
      `a costly mistake that she later came to regret`,
    ],
    correctAnswer: 0,
    explanation: `Moreau said she "simply wanted the audience to hear the dancers," and she denied making a statement about music, so calling the choice a protest contradicts her. The view that the piece was an exercise belongs to the critics, not to Moreau. Nothing suggests she regretted the work, which is still performed worldwide.`,
    difficulty: 'medium',
    yield: 'HIGH',
    part: 3,
  },
  {
    question: `When the choreographer Lena Moreau staged her first ballet without music in 1962, several critics called the piece studied, an exercise in technique rather than a dance. Audiences kept coming anyway, and the work is now performed by companies on four continents. I saw it for the first time last spring, and what struck me was not silence but sound: the dancers' breathing, the soft slap of bare feet, a creak in the floorboards that seemed timed to the steps. Moreau always denied that she had made a statement about music. "I simply wanted the audience to hear the dancers," she said.

As it is used in the passage, the word "studied" most nearly means:`,
    options: [
      `examined closely`,
      `learned by heart`,
      `contrived`,
      `much admired`,
    ],
    correctAnswer: 2,
    explanation: `The phrase after the comma, "an exercise in technique rather than a dance," shows the critics found the piece overly deliberate, so "studied" means contrived. Examined closely and learned by heart are everyday meanings of the word that do not fit a critic's complaint. The critics were faulting the piece, so much admired reverses their view.`,
    difficulty: 'medium',
    yield: 'HIGH',
    part: 3,
  },
  {
    question: `When the choreographer Lena Moreau staged her first ballet without music in 1962, several critics called the piece studied, an exercise in technique rather than a dance. Audiences kept coming anyway, and the work is now performed by companies on four continents. I saw it for the first time last spring, and what struck me was not silence but sound: the dancers' breathing, the soft slap of bare feet, a creak in the floorboards that seemed timed to the steps. Moreau always denied that she had made a statement about music. "I simply wanted the audience to hear the dancers," she said.

The author's account of seeing the ballet last spring mainly serves to:`,
    options: [
      `agree with the critics that the piece is only an exercise`,
      `explain how the ballet spread to four continents`,
      `argue that Moreau should have added a musical score`,
      `show that the author found the silent piece full of sound`,
    ],
    correctAnswer: 3,
    explanation: `The author says "what struck me was not silence but sound" and lists breathing, footfalls, and a creaking floor, so the account shows the piece is rich in sound. Nothing in the author's account echoes the critics' complaint. The passage gives no reason for the ballet's spread, and the author clearly values the piece as it is rather than wishing for a score.`,
    difficulty: 'medium',
    yield: 'ULTRA_HIGH',
    part: 3,
  },
  {
    question: `For three summers I helped restore frescoes in a village church, and for the first two I resented nearly every hour. Our supervisor allowed each of us to clean a patch no larger than a postage stamp per day, and she made us record every flake of paint we lifted. I wanted to watch whole faces emerge from the grime. By the third summer I understood that the slow pace was the point: a restorer who hurries begins to paint what she expects to find instead of what is actually there. I read old letters the same way now, one line at a time.

The author suggests that the supervisor limited each day's cleaning to a tiny patch mainly to:`,
    options: [
      `save the church money on restoration supplies`,
      `stop restorers from painting what they expect to find`,
      `make sure the work would end within three summers`,
      `discourage the author from returning for a third summer`,
    ],
    correctAnswer: 1,
    explanation: `The author's eventual insight is that a hurried restorer "begins to paint what she expects to find instead of what is actually there," which the slow pace prevents. Supplies and cost are never mentioned. The passage sets no deadline for the work, and the author did return for a third summer, the season when the lesson finally made sense.`,
    difficulty: 'medium',
    yield: 'ULTRA_HIGH',
    part: 3,
  },
  {
    question: `For three summers I helped restore frescoes in a village church, and for the first two I resented nearly every hour. Our supervisor allowed each of us to clean a patch no larger than a postage stamp per day, and she made us record every flake of paint we lifted. I wanted to watch whole faces emerge from the grime. By the third summer I understood that the slow pace was the point: a restorer who hurries begins to paint what she expects to find instead of what is actually there. I read old letters the same way now, one line at a time.

The tone of the passage is best described as:`,
    options: [
      `reflective and appreciative`,
      `detached and clinical`,
      `nostalgic and mournful`,
      `defensive and sarcastic`,
    ],
    correctAnswer: 0,
    explanation: `The author looks back over three summers and now values the supervisor's slow method enough to apply it to reading, which is reflective and appreciative. The personal, first-person account is not detached or clinical. Looking back may sound nostalgic, but nothing is mourned, so that pair fails on its second word, and the author never mocks the supervisor or defends earlier impatience.`,
    difficulty: 'easy',
    yield: 'HIGH',
    part: 3,
  },

  // ───────────── Part 4 — natural science: stages, method, defined terms, competing hypotheses ─────────────
  {
    question: `Why do some corals survive marine heat waves that kill their neighbors? Marine biologist Keoni Akana suspected that the answer lies in the algae living inside coral tissue. Corals depend on these algae for food, and when water grows too warm they expel them, a process called bleaching. To test his idea, Akana raised fragments of a single coral species in identical tanks, giving half a heat-tolerant algae strain and half a common strain, and then warmed every tank by 3°C. After four weeks, 22 percent of the fragments with the heat-tolerant strain had bleached, compared with 71 percent of those with the common strain. Akana cautions that tanks lack the currents and shifting temperatures of a real reef, and he plans to repeat the test on a living reef.

Akana's hypothesis was that:`,
    options: [
      `warmer water causes corals to grow algae more quickly`,
      `corals in tanks survive heat better than reef corals`,
      `the algae inside a coral affect whether it survives heat`,
      `fragments with the tolerant strain bleached far less often`,
    ],
    correctAnswer: 2,
    explanation: `"Suspected" marks the hypothesis: the algae inside coral tissue explain which corals survive heat waves. That tolerant-strain fragments bleached less is the result of the test, not the idea being tested. The passage says warm water makes corals expel algae, not grow more, and it never compares tank corals with reef corals; a reef test is only Akana's next step.`,
    difficulty: 'easy',
    yield: 'HIGH',
    part: 4,
  },
  {
    question: `Why do some corals survive marine heat waves that kill their neighbors? Marine biologist Keoni Akana suspected that the answer lies in the algae living inside coral tissue. Corals depend on these algae for food, and when water grows too warm they expel them, a process called bleaching. To test his idea, Akana raised fragments of a single coral species in identical tanks, giving half a heat-tolerant algae strain and half a common strain, and then warmed every tank by 3°C. After four weeks, 22 percent of the fragments with the heat-tolerant strain had bleached, compared with 71 percent of those with the common strain. Akana cautions that tanks lack the currents and shifting temperatures of a real reef, and he plans to repeat the test on a living reef.

Akana's use of a single coral species and an equal 3°C warming in every tank was most likely meant to:`,
    options: [
      `ensure any bleaching gap could be credited to the algae strain`,
      `measure how quickly the algae reproduce in warm water`,
      `find out whether corals grow faster in heated tanks`,
      `show that one coral species is hardier than others`,
    ],
    correctAnswer: 0,
    explanation: `Keeping the species and the warming the same leaves the algae strain as the only difference between the groups, so any gap in bleaching can be credited to it. Algae reproduction and coral growth were never measured. Using a single species makes comparing species impossible, so the setup cannot show that one is hardier than another.`,
    difficulty: 'medium',
    yield: 'ULTRA_HIGH',
    part: 4,
  },
  {
    question: `Why do some corals survive marine heat waves that kill their neighbors? Marine biologist Keoni Akana suspected that the answer lies in the algae living inside coral tissue. Corals depend on these algae for food, and when water grows too warm they expel them, a process called bleaching. To test his idea, Akana raised fragments of a single coral species in identical tanks, giving half a heat-tolerant algae strain and half a common strain, and then warmed every tank by 3°C. After four weeks, 22 percent of the fragments with the heat-tolerant strain had bleached, compared with 71 percent of those with the common strain. Akana cautions that tanks lack the currents and shifting temperatures of a real reef, and he plans to repeat the test on a living reef.

As it is used in the passage, "bleaching" refers to:`,
    options: [
      `the death of a whole coral colony in a heat wave`,
      `algae multiplying rapidly inside coral tissue`,
      `coral turning white after exposure to chemicals`,
      `corals expelling algae in overly warm water`,
    ],
    correctAnswer: 3,
    explanation: `The passage defines the term in the same sentence: when water grows too warm, corals expel their algae, "a process called bleaching." The death of a colony is something the passage never equates with bleaching. The algae are expelled, not multiplied, and the idea of chemical exposure comes from outside the passage, which never mentions it.`,
    difficulty: 'easy',
    yield: 'HIGH',
    part: 4,
  },
  {
    question: `Why do some corals survive marine heat waves that kill their neighbors? Marine biologist Keoni Akana suspected that the answer lies in the algae living inside coral tissue. Corals depend on these algae for food, and when water grows too warm they expel them, a process called bleaching. To test his idea, Akana raised fragments of a single coral species in identical tanks, giving half a heat-tolerant algae strain and half a common strain, and then warmed every tank by 3°C. After four weeks, 22 percent of the fragments with the heat-tolerant strain had bleached, compared with 71 percent of those with the common strain. Akana cautions that tanks lack the currents and shifting temperatures of a real reef, and he plans to repeat the test on a living reef.

Akana's plan to repeat the test on a living reef suggests that he recognizes that:`,
    options: [
      `his tank results proved the algae idea wrong`,
      `tank results may not hold on a real reef`,
      `the heat-tolerant strain cannot survive in tanks`,
      `corals on reefs never bleach during heat waves`,
    ],
    correctAnswer: 1,
    explanation: `Akana notes that tanks lack a reef's currents and shifting temperatures, a limitation on how far the tank results apply, so he wants to test them in a real setting. His results supported the algae idea rather than disproving it. The tolerant strain clearly survived in the tanks, and the passage opens by noting that corals do die in marine heat waves.`,
    difficulty: 'medium',
    yield: 'HIGH',
    part: 4,
  },
  {
    question: `Some desert beetles climb to the crests of sand dunes at dawn and stand with their heads down and their backs raised into the breeze. One hypothesis holds that the posture collects drinking water: fog condenses on the beetle's back and rolls down toward its mouth. A second hypothesis holds that the posture simply cools the beetle before the day heats up. To test the two ideas, researchers weighed beetles before and after the dawn stand on foggy mornings and on clear mornings that were equally cool. On foggy mornings, the beetles gained an average of 12 percent of their body weight. On clear mornings, few beetles took up the posture at all, and those that did gained no weight.

If the cooling hypothesis alone were correct, researchers would most likely have expected beetles on the clear, cool mornings to:`,
    options: [
      `take up the posture about as often as on foggy mornings`,
      `gain more weight than the beetles did on the foggy mornings`,
      `avoid the dune crests until the day heats up`,
      `collect fog on their backs more quickly than usual`,
    ],
    correctAnswer: 0,
    explanation: `Cooling does not depend on fog, and the clear mornings were just as cool, so a cooling posture should appear about as often on both kinds of morning; instead, few beetles used it on clear days. Cooling would not add weight, so a larger weight gain fits neither idea. Avoiding the crests until the day heats up contradicts a posture meant to cool the beetle before then, and clear mornings have no fog to collect.`,
    difficulty: 'hard',
    yield: 'HIGH',
    part: 4,
  },
  {
    question: `Some desert beetles climb to the crests of sand dunes at dawn and stand with their heads down and their backs raised into the breeze. One hypothesis holds that the posture collects drinking water: fog condenses on the beetle's back and rolls down toward its mouth. A second hypothesis holds that the posture simply cools the beetle before the day heats up. To test the two ideas, researchers weighed beetles before and after the dawn stand on foggy mornings and on clear mornings that were equally cool. On foggy mornings, the beetles gained an average of 12 percent of their body weight. On clear mornings, few beetles took up the posture at all, and those that did gained no weight.

Which result from the study most directly supports the water-collection hypothesis?`,
    options: [
      `Beetles stood on dune crests with their heads pointed down`,
      `The clear mornings were as cool as the foggy mornings`,
      `Beetles gained weight on foggy mornings but not on clear ones`,
      `Beetles took up the posture before the day heated up`,
    ],
    correctAnswer: 2,
    explanation: `Weight gained only when fog was present points to water collected from the fog. The heads-down stance and the timing before the day heats up fit both hypotheses equally. Equally cool mornings are part of the method, a control that keeps temperature from explaining the difference, not evidence for either idea.`,
    difficulty: 'medium',
    yield: 'ULTRA_HIGH',
    part: 4,
  },

  // ───────────── Part 5 — paired passages: agreement, emphasis, relationship, response, unique detail ─────────────
  {
    question: `Passage A: Urban planners in Rotterdam have turned public squares into "water plazas" that collect stormwater during heavy rains and serve as basketball courts and seating areas in dry weather. The designs cost more to build than traditional drains, but they reduce flooding while giving neighborhoods usable public space.

Passage B: Water plazas are attractive, but they work only where there is open land to spare. In dense older districts, the cheaper and more reliable solution is still to enlarge underground drains, which handle far greater volumes of water than any plaza can hold.

Both authors would most likely agree that water plazas:`,
    options: [
      `cost more to build than traditional drains`,
      `give neighborhoods usable public space when dry`,
      `hold less water than enlarged underground drains`,
      `need open land that dense districts lack`,
    ],
    correctAnswer: 0,
    explanation: `Passage A says plazas cost more to build than traditional drains, and Passage B calls enlarged drains the cheaper solution, so both accept that plazas are pricier. Only Passage A mentions the plazas' use as courts and seating in dry weather; Passage B calls them attractive but says nothing about public space. Only Passage B compares the volume of water plazas and drains can hold, and only Passage B argues that plazas need open land, a limit Passage A never raises.`,
    difficulty: 'medium',
    yield: 'ULTRA_HIGH',
    part: 5,
  },
  {
    question: `Passage A: Urban planners in Rotterdam have turned public squares into "water plazas" that collect stormwater during heavy rains and serve as basketball courts and seating areas in dry weather. The designs cost more to build than traditional drains, but they reduce flooding while giving neighborhoods usable public space.

Passage B: Water plazas are attractive, but they work only where there is open land to spare. In dense older districts, the cheaper and more reliable solution is still to enlarge underground drains, which handle far greater volumes of water than any plaza can hold.

Compared with Passage A, Passage B places more emphasis on:`,
    options: [
      `the recreational uses of water plazas in dry weather`,
      `the history of flooding in Rotterdam's neighborhoods`,
      `the design process planners used for the plazas`,
      `the limits on where water plazas can really be built`,
    ],
    correctAnswer: 3,
    explanation: `Passage B's main point is that plazas work only where open land is available, a limit Passage A never raises. The recreational uses are Passage A's emphasis. Neither passage discusses Rotterdam's flood history or the planners' design process.`,
    difficulty: 'medium',
    yield: 'HIGH',
    part: 5,
  },
  {
    question: `Passage A: Urban planners in Rotterdam have turned public squares into "water plazas" that collect stormwater during heavy rains and serve as basketball courts and seating areas in dry weather. The designs cost more to build than traditional drains, but they reduce flooding while giving neighborhoods usable public space.

Passage B: Water plazas are attractive, but they work only where there is open land to spare. In dense older districts, the cheaper and more reliable solution is still to enlarge underground drains, which handle far greater volumes of water than any plaza can hold.

Which choice best describes the relationship between the two passages?`,
    options: [
      `Passage B rejects every benefit Passage A credits to plazas`,
      `Passage B grants the plazas' appeal but limits where they fit`,
      `Passage B extends Passage A by applying plazas to old districts`,
      `Passage B adds new flood data that confirms Passage A's view`,
    ],
    correctAnswer: 1,
    explanation: `Passage B calls the plazas "attractive" and accepts that they work where there is open land, but argues they do not suit dense older districts, so it qualifies Passage A rather than rejecting it outright. Saying plazas do not fit dense older districts is the opposite of extending them there. Passage B offers no flood data, and it prefers drains for those districts rather than confirming Passage A's view.`,
    difficulty: 'hard',
    yield: 'ULTRA_HIGH',
    part: 5,
  },
  {
    question: `Passage A: Four-day school weeks save rural districts money on buses, heating, and substitute teachers. Districts that have switched report that teachers are less likely to leave, since the schedule is a perk that wealthier districts nearby do not offer.

Passage B: The savings from a four-day week are usually modest, often less than 2 percent of a district's budget. Meanwhile, working parents must find child care for the fifth day, a cost that falls on families rather than on the district.

The author of Passage B would most likely respond to Passage A's point about cost savings by arguing that the savings are:`,
    options: [
      `larger than most districts have ever publicly reported`,
      `small and partly shift costs onto families instead`,
      `wiped out by the extra expense of hiring teachers`,
      `limited to districts that do not own school buses`,
    ],
    correctAnswer: 1,
    explanation: `Passage B calls the savings "modest" and adds that families pay for fifth-day child care, so the cost partly moves from the district to households. Passage B describes the savings as small, not larger than reported. It never mentions teacher hiring costs or bus ownership.`,
    difficulty: 'medium',
    yield: 'ULTRA_HIGH',
    part: 5,
  },
  {
    question: `Passage A: Four-day school weeks save rural districts money on buses, heating, and substitute teachers. Districts that have switched report that teachers are less likely to leave, since the schedule is a perk that wealthier districts nearby do not offer.

Passage B: The savings from a four-day week are usually modest, often less than 2 percent of a district's budget. Meanwhile, working parents must find child care for the fifth day, a cost that falls on families rather than on the district.

Which concern is raised in Passage B but not in Passage A?`,
    options: [
      `The cost of heating school buildings`,
      `Teachers' decisions to leave a district`,
      `Child care on the fifth day`,
      `Competition with wealthier districts nearby`,
    ],
    correctAnswer: 2,
    explanation: `Only Passage B raises the problem of working parents needing child care on the fifth day. Heating costs, teacher retention, and competition with wealthier districts all appear in Passage A.`,
    difficulty: 'easy',
    yield: 'HIGH',
    part: 5,
  },
  {
    question: `Passage A: Museums should let visitors photograph the art. A photo extends a visit, lets people study a painting's details at home, and spreads interest in a collection to friends who have never been inside the building.

Passage B: A gallery full of raised phones is a gallery where no one is looking. Visitors who photograph a painting spend less time in front of it, and studies of museum memory suggest they later recall fewer of its details than visitors who simply looked.

Which question is addressed by both passages?`,
    options: [
      `Do photos spread interest to people who never visited?`,
      `What do studies of museum memory show about recall?`,
      `Should museums ban phones from their galleries entirely?`,
      `Does photographing art help visitors engage with it?`,
    ],
    correctAnswer: 3,
    explanation: `Passage A says photos let people study details and spread interest, while Passage B says photographing cuts looking time and later recall, so both address whether photography helps visitors engage with art, even though they answer differently. Only Passage A raises spreading interest to friends who have never been inside, and only Passage B cites studies of museum memory. Passage B criticizes raised phones, but neither passage takes up whether museums should ban phones outright.`,
    difficulty: 'easy',
    yield: 'MEDIUM',
    part: 5,
  },

  // ───────────── Part 6 — approaching each type under time: annotation and triage applied ─────────────
  {
    question: `For most of the twentieth century, linguists treated slang as a sign of careless speech. Recent research paints a more complicated picture. In a study of 300 teenagers' text messages, linguist Ama Owusu found that the heaviest slang users also shifted easily into formal English when writing to teachers. Owusu argues that slang reflects a skill at tailoring speech to an audience, not a failure of it. She concedes that all the teenagers in her study lived in one city.

A student annotating this passage under time underlines the turn, the point where the passage moves away from the older view. Which words should the student underline?`,
    options: [
      `Recent research paints a more complicated picture`,
      `linguists treated slang as a sign of careless speech`,
      `all the teenagers in her study lived in one city`,
      `the heaviest slang users also shifted easily into formal English`,
    ],
    correctAnswer: 0,
    explanation: `The second sentence is where the passage pivots from the old view of slang to newer findings, and every later sentence builds on it. The opening clause states the older view itself. The point about one city is a concession that limits the study, and the detail about shifting into formal English is evidence for Owusu's claim, not the turn.`,
    difficulty: 'easy',
    yield: 'HIGH',
    part: 6,
  },
  {
    question: `(1) Ecologist Priya Shah noticed that hummingbirds at a Colorado field station seemed to favor red feeders, and she wondered whether color or sweetness drew them. (2) She suspected that sweetness mattered more. (3) She filled red and white feeders with nectar of differing sweetness and counted the birds' visits for six weeks. (4) The birds chose the sweeter feeder 83 percent of the time, whatever its color. (5) Shah notes that she observed only one hummingbird species at a single site.

A reader writes a stage label (question, hypothesis, method, result, or limitation) beside each numbered sentence. Which pairing is correct?`,
    options: [
      `Sentence 2: result`,
      `Sentence 3: method`,
      `Sentence 4: hypothesis`,
      `Sentence 1: limitation`,
    ],
    correctAnswer: 1,
    explanation: `Sentence 3 describes what Shah did to test her idea, so it is the method. Sentence 2 uses "suspected," which marks a hypothesis rather than a result. Sentence 4 reports what the birds actually did, a result, and sentence 1 poses the question that started the study; the limitation is sentence 5.`,
    difficulty: 'medium',
    yield: 'MEDIUM',
    part: 6,
  },
  {
    question: `When the city unveiled Marta Quill's bronze fountain in 1974, newspaper critics dismissed its lopsided basins as clumsy. Quill replied that water should "have to find its way down." I have watched children follow a single leaf from the top basin to the bottom for ten minutes at a time, and I can think of no better argument for the design. The city now features the fountain on its tourism posters.

A reader marks each opinion in the margin by its source: A for the author, C for the critics, Q for the sculptor. Which opinion should be marked A?`,
    options: [
      `The fountain's lopsided basins are clumsy`,
      `Water should have to work its way downward`,
      `Children's fascination justifies the uneven design`,
      `The fountain deserves a place on tourism posters`,
    ],
    correctAnswer: 2,
    explanation: `The author is the "I" who watches children follow a leaf and calls that the best argument for the design. Calling the basins clumsy is the critics' judgment. The idea that water should find its way down is Quill's own, and the tourism posters reflect the city's choice, not an opinion the author states.`,
    difficulty: 'hard',
    yield: 'HIGH',
    part: 6,
  },
  {
    question: `Passage A: Homework in the early grades builds habits that pay off later. Children who practice a little every evening learn to manage their time, and parents get a regular look at what their children are studying.

Passage B: For children under ten, homework shows almost no link to achievement. Studies find that extra practice at home does not raise young students' test scores, and nightly battles over worksheets can sour a child's attitude toward school.

Before tackling the questions about both passages, a student writes a five-word position summary under each passage. Which pair best captures the two positions?`,
    options: [
      `A: homework raises young students' scores; B: homework builds time habits`,
      `A: parents dislike nightly homework battles; B: teachers assign too much`,
      `A: homework should be banned entirely; B: homework should be doubled`,
      `A: early homework builds good habits; B: early homework does little`,
    ],
    correctAnswer: 3,
    explanation: `Passage A argues that early homework builds habits that pay off, and Passage B argues it does little for young children's achievement. The pair about scores and time habits swaps the passages: time habits are Passage A's point, and Passage B denies the score gains. Neither passage reports parents' dislike or blames teachers, and neither calls for a ban or for more homework.`,
    difficulty: 'medium',
    yield: 'HIGH',
    part: 6,
  },
  {
    question: `Grace had rehearsed her speech for a week: she would tell Mrs. Lin, kindly but firmly, that she could no longer walk her neighbor's three dogs every morning. She knocked, and Mrs. Lin opened the door already holding the leashes, her right wrist wrapped in a fresh bandage. "The doctor says six weeks," Mrs. Lin said, laughing at herself. Grace looked at the bandage, then at the dogs. "I'll take them down to the river today," she heard herself say. "They like the river."

A reader marks the sentence where Grace's plan turns. Which detail most directly causes that turn?`,
    options: [
      `the week Grace spent rehearsing her speech`,
      `Mrs. Lin's wrist wrapped in a fresh bandage`,
      `Grace's intention to speak kindly but firmly`,
      `the dogs' fondness for walks by the river`,
    ],
    correctAnswer: 1,
    explanation: `Grace looks "at the bandage, then at the dogs" just before she abandons her speech, so the injury prompts the turn. The week of rehearsal and her plan to be kind but firm belong to the plan that gets dropped, not to its reversal. The dogs' liking for the river is something Grace mentions after she has already changed course.`,
    difficulty: 'medium',
    yield: 'MEDIUM',
    part: 6,
  },

  // ───────────── Part 7 — integrated set: a full literary narrative and a paired natural science set ─────────────
  {
    question: `¶1 For eleven years, Ruth Abernathy had set out the folding chairs for the Tuesday book club at the public library, and for eleven years she had said almost nothing during the discussions. The other members assumed she came for the coffee.

¶2 This Tuesday, the new librarian, a young man named Felix who spoke quickly when he was nervous, announced that the club would read a novel none of them had heard of. Then he asked who would like to lead the first discussion. The room went quiet.

¶3 Ruth unfolded the last chair and sat down in it. "I will," she said.

¶4 The others turned toward her as if a lamp had spoken. Felix beamed and handed her the only copy he had brought. Ruth turned the book over twice, read the back cover with her glasses pushed up on her forehead, and tucked it into her canvas bag beside the thermos she had carried every Tuesday for eleven years. "Bring questions," she told the room. "I intend to."

In paragraph 4, the comparison "as if a lamp had spoken" mainly suggests that the other members:`,
    options: [
      `were startled because Ruth almost never spoke`,
      `found Ruth's voice unpleasantly loud and harsh`,
      `noticed that a lamp in the room had flickered`,
      `objected to Ruth leading the first discussion`,
    ],
    correctAnswer: 0,
    explanation: `A lamp is a familiar object that never speaks, and Ruth had said almost nothing for eleven years, so the comparison captures the members' surprise. Nothing describes her voice as loud or harsh. Reading the line as a real flickering lamp takes figurative language literally, and the members only turn to look; no one objects.`,
    difficulty: 'medium',
    yield: 'ULTRA_HIGH',
    part: 7,
  },
  {
    question: `¶1 For eleven years, Ruth Abernathy had set out the folding chairs for the Tuesday book club at the public library, and for eleven years she had said almost nothing during the discussions. The other members assumed she came for the coffee.

¶2 This Tuesday, the new librarian, a young man named Felix who spoke quickly when he was nervous, announced that the club would read a novel none of them had heard of. Then he asked who would like to lead the first discussion. The room went quiet.

¶3 Ruth unfolded the last chair and sat down in it. "I will," she said.

¶4 The others turned toward her as if a lamp had spoken. Felix beamed and handed her the only copy he had brought. Ruth turned the book over twice, read the back cover with her glasses pushed up on her forehead, and tucked it into her canvas bag beside the thermos she had carried every Tuesday for eleven years. "Bring questions," she told the room. "I intend to."

Ruth's final words to the room, "Bring questions" and "I intend to," most strongly suggest that she:`,
    options: [
      `doubts she can lead a discussion of an unknown novel`,
      `hopes Felix will step in and lead the club instead`,
      `has secretly read the novel many times already`,
      `means to take the role seriously and expects the same`,
    ],
    correctAnswer: 3,
    explanation: `Ruth volunteers, takes the only copy, and tells the others to come prepared because she will be, which shows she takes the job seriously and expects them to as well. Volunteering and giving the room instructions contradict self-doubt or a wish to hand the job to Felix. The novel is one none of them had heard of, and she reads the back cover as if seeing the book for the first time.`,
    difficulty: 'hard',
    yield: 'HIGH',
    part: 7,
  },
  {
    question: `¶1 For eleven years, Ruth Abernathy had set out the folding chairs for the Tuesday book club at the public library, and for eleven years she had said almost nothing during the discussions. The other members assumed she came for the coffee.

¶2 This Tuesday, the new librarian, a young man named Felix who spoke quickly when he was nervous, announced that the club would read a novel none of them had heard of. Then he asked who would like to lead the first discussion. The room went quiet.

¶3 Ruth unfolded the last chair and sat down in it. "I will," she said.

¶4 The others turned toward her as if a lamp had spoken. Felix beamed and handed her the only copy he had brought. Ruth turned the book over twice, read the back cover with her glasses pushed up on her forehead, and tucked it into her canvas bag beside the thermos she had carried every Tuesday for eleven years. "Bring questions," she told the room. "I intend to."

According to paragraph 1, the other members believed that Ruth attended the book club mainly:`,
    options: [
      `to set out the folding chairs each week`,
      `to keep an eye on the new librarian`,
      `for the coffee rather than the books`,
      `because she planned to lead it someday`,
    ],
    correctAnswer: 2,
    explanation: `Paragraph 1 states that "the other members assumed she came for the coffee." Setting out the chairs is something Ruth does, not the reason the members give for her coming. Felix appears only this Tuesday, after eleven years of her attendance, and nothing suggests anyone expected her to lead the club.`,
    difficulty: 'easy',
    yield: 'MEDIUM',
    part: 7,
  },
  {
    question: `Passage A: Planting trees along city streets cools neighborhoods. On summer afternoons in Phoenix, blocks with dense tree canopy measured up to 5°C cooler at street level than nearby blocks with little shade. Because extreme heat is among the deadliest weather hazards in American cities, the researchers argue that tree planting should be a top priority for city health budgets.

Passage B: Street trees do cool the blocks beneath them, and the Phoenix readings fit a long record of similar findings. But a young tree needs years to grow a useful canopy, and in a desert city each one needs regular watering. For the next decade, cooling centers and reflective roofs will protect more people per dollar, though trees remain worth planting for the long term.

Both authors would most likely agree that street trees:`,
    options: [
      `should top every city's health budget right away`,
      `cool the city blocks they shade`,
      `are too costly to be worth planting in deserts`,
      `grow a useful canopy within a single summer`,
    ],
    correctAnswer: 1,
    explanation: `Passage A reports blocks up to 5°C cooler under dense canopy, and Passage B opens by agreeing that street trees "do cool the blocks beneath them." Making trees the top budget priority is Passage A's view, which Passage B disputes for the next decade. Passage B says trees remain worth planting and that a useful canopy takes years to grow.`,
    difficulty: 'medium',
    yield: 'ULTRA_HIGH',
    part: 7,
  },
  {
    question: `Passage A: Planting trees along city streets cools neighborhoods. On summer afternoons in Phoenix, blocks with dense tree canopy measured up to 5°C cooler at street level than nearby blocks with little shade. Because extreme heat is among the deadliest weather hazards in American cities, the researchers argue that tree planting should be a top priority for city health budgets.

Passage B: Street trees do cool the blocks beneath them, and the Phoenix readings fit a long record of similar findings. But a young tree needs years to grow a useful canopy, and in a desert city each one needs regular watering. For the next decade, cooling centers and reflective roofs will protect more people per dollar, though trees remain worth planting for the long term.

How would the author of Passage B most likely respond to Passage A's call to make tree planting "a top priority"?`,
    options: [
      `Trees fail to cool streets in hot desert climates`,
      `Cities should stop watering trees during heat waves`,
      `The Phoenix temperature readings were poorly gathered`,
      `Quicker measures should come first for the next decade`,
    ],
    correctAnswer: 3,
    explanation: `Passage B argues that because trees take years to mature, cooling centers and reflective roofs "will protect more people per dollar" for the next decade, while trees stay a long-term investment. Passage B concedes that trees do cool streets and says the Phoenix readings fit other findings, so it would deny neither. It never suggests withholding water from trees.`,
    difficulty: 'hard',
    yield: 'HIGH',
    part: 7,
  },
]

export const generateExitQuiz = makeLessonExitQuiz(EXIT_POOL, 'act-reading-passage-types-act')
