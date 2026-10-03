/**
 * Exit-quiz pool for the ACT English Rhetorical Skills lesson (strategy,
 * organization, style and tone, transitions, sentence combining, purpose and
 * audience), written from the lesson itself and tagged by exam-yield tier
 * (see ../lesson-built.ts). Every item carries its own excerpt.
 */
import { makeLessonExitQuiz, type LessonExitItem } from '../lesson-built'

export const EXIT_POOL: LessonExitItem[] = [
  // ───────────── Part 1 — adding, deleting, purpose, revision for effect ─────────────
  {
    question: `[1] In 2019, the Millbrook Public Library began lending more than books. [2] Patrons can now borrow cake pans, sewing machines, and telescopes. [3] Librarians say this "library of things" saves residents from buying equipment they would use only once or twice.

The writer is considering adding the following sentence after Sentence 3:

Last year, the most-borrowed item was a carpet cleaner, checked out 214 times.

Should the writer make this addition?`,
    options: [
      `Yes, because it gives a concrete example of a costly item most residents rarely need.`,
      `Yes, because it explains when the library first decided to begin lending equipment.`,
      `No, because it shifts the paragraph's focus from borrowing items to cleaning homes.`,
      `No, because it repeats the list of borrowable items that was already given in Sentence 2.`,
    ],
    correctAnswer: 0,
    explanation: `The paragraph's point is that borrowing saves residents from buying things they seldom use, and a heavily borrowed carpet cleaner is a specific example of exactly that. The sentence says nothing about when lending began, it is about borrowing rather than about cleaning, and the carpet cleaner does not appear in the earlier list, so it repeats nothing.`,
    difficulty: 'medium',
    yield: 'ULTRA_HIGH',
    part: 1,
  },
  {
    question: `Sea otters are essential to the health of kelp forests along the Pacific coast. They eat sea urchins, which graze on kelp and can strip a forest bare. [Sea otters have the densest fur of any animal, with up to a million hairs per square inch.] Where otters have returned, kelp forests have regrown within a few years.

The writer is considering deleting the bracketed sentence. Should the sentence be deleted?`,
    options: [
      `No, because it provides evidence that kelp forests recover once otters have returned.`,
      `No, because it explains how otters are able to catch and eat sea urchins.`,
      `Yes, because it contradicts the claim that otters keep urchins in check.`,
      `Yes, because it is a fact about otters unrelated to their role in protecting kelp.`,
    ],
    correctAnswer: 3,
    explanation: `The paragraph is about how otters protect kelp by eating urchins; an interesting fact about their fur is true but irrelevant to that focus, so it should go. The sentence gives no evidence about kelp recovery and says nothing about how otters hunt. It also does not contradict anything; it is simply off-topic.`,
    difficulty: 'easy',
    yield: 'ULTRA_HIGH',
    part: 1,
  },
  {
    question: `Electric buses produce no tailpipe emissions[, though the power plants that charge them may still burn coal,] and cities across the country are adding them to their fleets.

The writer includes the bracketed clause primarily to:`,
    options: [
      `argue that cities should stop purchasing new electric buses`,
      `give an example of a city that has adopted electric buses`,
      `add a limitation to the idea that electric buses are clean`,
      `provide background on how buses were powered in the past`,
    ],
    correctAnswer: 2,
    explanation: `The clause qualifies the claim: buses have no tailpipe emissions, but their electricity may still come from coal, which adds nuance rather than rejecting electric buses. Nothing in the sentence urges cities to stop buying them, no particular city is named, and no history of bus power is given.`,
    difficulty: 'medium',
    yield: 'HIGH',
    part: 1,
  },
  {
    question: `When we reached the trailhead at dawn, [the weather was not warm].

Which choice most effectively conveys how cold the morning was?`,
    options: [
      `NO CHANGE`,
      `the air felt somewhat chilly to all of us`,
      `our breath hung in clouds and our water bottles had frozen solid`,
      `it was a gray, quiet morning in the middle of late November`,
    ],
    correctAnswer: 2,
    explanation: `Breath visible in the air and frozen water bottles are specific, vivid details that show the cold. The original wording and "somewhat chilly" are vague and weak, and the gray November morning sets a scene but never actually says it was cold.`,
    difficulty: 'medium',
    yield: 'HIGH',
    part: 1,
  },
  {
    question: `Many household inventions arrived by accident. [In 1945, an engineer noticed that a candy bar in his pocket had melted while he stood near a radar device, an observation that led to the microwave oven.]

The bracketed sentence primarily serves to:`,
    options: [
      `introduce a counterargument to the paragraph's opening claim`,
      `illustrate the preceding claim with a specific case`,
      `shift the paragraph's focus to wartime radar research`,
      `qualify the claim that inventions are often accidental`,
    ],
    correctAnswer: 1,
    explanation: `The opening sentence makes a general claim, and the melted candy bar is a specific example that illustrates it. The example supports the claim rather than arguing against it or limiting it, and radar is mentioned only as the setting of the accident, not as a new focus.`,
    difficulty: 'easy',
    yield: 'HIGH',
    part: 1,
  },
  {
    question: `[1] For decades, the Harlow Dam blocked salmon from reaching their spawning grounds upstream. [2] After the dam was removed in 2012, biologists began counting the fish that returned each fall. [3] Within five years, the yearly salmon run had grown from fewer than 200 fish to more than 4,000. [4] Local fishing guides now book trips on stretches of river that were once empty.

If the writer deleted Sentence 3, the paragraph would primarily lose:`,
    options: [
      `an explanation of why the dam had been built in the first place`,
      `a description of the methods biologists used to count the fish`,
      `evidence of how much the salmon population recovered after the dam was removed`,
      `a detail showing how removing the dam affected the businesses of local fishing guides`,
    ],
    correctAnswer: 2,
    explanation: `Sentence 3 supplies the numbers, from fewer than 200 to more than 4,000 fish, that prove the salmon recovered. The paragraph never says why the dam was built, and Sentence 3 does not describe how the counting was done. The effect on fishing guides comes from Sentence 4, which would still be there.`,
    difficulty: 'hard',
    yield: 'HIGH',
    part: 1,
  },

  // ───────────── Part 2 — organization, topic sentences, paragraph transitions ─────────────
  {
    question: `[1] Every January, the town of Ashby holds a winter festival on its frozen lake. [2] Its antlers alone took the carvers three days to shape. [3] The highlight of the weekend is an ice-sculpture contest. [4] Last year's winning entry was a life-size moose made of clear ice. [5] Food vendors line the shore, selling cider and roasted chestnuts.

For the sake of logic and cohesion, Sentence 2 should be placed:`,
    options: [
      `where it is now.`,
      `after Sentence 3.`,
      `after Sentence 4.`,
      `after Sentence 5.`,
    ],
    correctAnswer: 2,
    explanation: `"Its antlers" needs a clear antlered referent, and the moose appears only in Sentence 4, so Sentence 2 belongs right after it. Where it is now, "its" would refer to the festival or the lake. After Sentence 3 it would point to the contest, and after Sentence 5 it would point to the food vendors.`,
    difficulty: 'medium',
    yield: 'ULTRA_HIGH',
    part: 2,
  },
  {
    question: `[1] Finally, she poured the mixture into wooden molds and let the soap cure for six weeks. [2] My grandmother made her own soap every spring. [3] First, she melted down the fat she had saved all winter. [4] Then she stirred in lye and a few drops of lavender oil.

Which sequence of sentences makes the paragraph most logical?`,
    options: [
      `3, 4, 1, 2`,
      `2, 4, 3, 1`,
      `3, 2, 4, 1`,
      `2, 3, 4, 1`,
    ],
    correctAnswer: 3,
    explanation: `Sentence 2 is the general introduction, and the signal words "First," "Then," and "Finally" put the steps in chronological order: 3, 4, 1. Ending with the introduction leaves the topic unstated until the last line, swapping 3 and 4 puts "Then" before "First," and placing 3 before 2 starts the steps before the topic is introduced.`,
    difficulty: 'easy',
    yield: 'HIGH',
    part: 2,
  },
  {
    question: `[Opening sentence] Sensors buried in the pavement count how many cars are waiting at each intersection. A central computer then adjusts the signal timing every few seconds, giving longer greens to the busiest directions. Since the system was installed, average commute times downtown have fallen by 12 percent.

Which choice most effectively introduces the paragraph?`,
    options: [
      `Traffic has been a problem in cities for as long as there have been cars.`,
      `Last year, the city replaced its timed traffic lights with ones that respond to traffic.`,
      `Many drivers find it frustrating to wait at a red light when the road is empty.`,
      `The downtown area also has several new bike lanes and a redesigned bus station.`,
    ],
    correctAnswer: 1,
    explanation: `A topic sentence should state the paragraph's main idea, which here is the new responsive traffic-light system. The claim about traffic always being a problem is too broad, and the frustration at empty red lights is a related feeling rather than the system the paragraph describes. Bike lanes and the bus station are off-topic.`,
    difficulty: 'medium',
    yield: 'HIGH',
    part: 2,
  },
  {
    question: `...By the 1960s, the Grand Opera House had fallen into disrepair, and the city made plans to demolish it.

[Transition] a group of local musicians raised enough money to buy the building and restore it.

Which choice provides the most logical opening for the new paragraph?`,
    options: [
      `Similarly,`,
      `However,`,
      `Furthermore,`,
      `For instance,`,
    ],
    correctAnswer: 1,
    explanation: `The previous paragraph ends with plans to tear the building down, and the new paragraph describes musicians saving it, so the ideas oppose each other and need a contrast transition. "Similarly" and "Furthermore" signal agreement or addition, and "For instance" would wrongly present the rescue as an example of the planned demolition.`,
    difficulty: 'easy',
    yield: 'HIGH',
    part: 2,
  },
  {
    question: `[1] In 1903, Mary Anderson visited New York City on a snowy day. [2] She noticed that streetcar drivers had to open their windows to wipe snow off the glass by hand. [3] Within a year, she had patented a hand-operated arm that swept the windshield from inside the car. [4] Her invention was standard on most American cars by 1916.

The writer wants to add the following sentence to the paragraph:

Back home in Alabama, she began sketching a device that would solve the problem.

The sentence would most logically be placed after Sentence:`,
    options: [
      `1`,
      `2`,
      `3`,
      `4`,
    ],
    correctAnswer: 1,
    explanation: `"The problem" needs to refer to drivers clearing snow by hand, which is described in Sentence 2, and the sketching must come before the patent in Sentence 3. After Sentence 1 there is no problem yet to refer to. After Sentence 3 or 4 she would be sketching a device she had already patented or seen widely adopted, which breaks the chronology.`,
    difficulty: 'hard',
    yield: 'ULTRA_HIGH',
    part: 2,
  },

  // ───────────── Part 3 — style, tone, redundancy, precision ─────────────
  {
    question: `Last spring, the two hardware companies decided to [join together into a single combined firm].

Which choice is the most concise and effective?`,
    options: [
      `NO CHANGE`,
      `combine and merge together`,
      `merge`,
      `join as one single company`,
    ],
    correctAnswer: 2,
    explanation: `"Merge" already means to join into one, so it says everything the longer phrases say. The original wording piles up "join together," "single," and "combined," and "combine and merge together" doubles the verb. "Join as one single company" still repeats itself with "one single."`,
    difficulty: 'easy',
    yield: 'ULTRA_HIGH',
    part: 3,
  },
  {
    question: `The exhibit's curators spent two years gathering artifacts from museums in eleven countries, and the result [is pretty awesome].

Which choice best maintains the formal tone of the passage?`,
    options: [
      `NO CHANGE`,
      `is really something else`,
      `is a show that's hard to beat`,
      `is a remarkably thorough survey`,
    ],
    correctAnswer: 3,
    explanation: `The passage uses a formal, informative register, and "a remarkably thorough survey" matches it while staying precise. The original wording is slang, "really something else" is a casual expression, and "hard to beat" adds a contraction and a conversational cliché.`,
    difficulty: 'easy',
    yield: 'HIGH',
    part: 3,
  },
  {
    question: `Despite years of rejection letters, the novelist remained [persistent], sending her manuscript to one publisher after another until it was finally accepted.

Which choice best conveys the writer's admiration for the novelist?`,
    options: [
      `NO CHANGE`,
      `stubborn`,
      `obstinate`,
      `headstrong`,
    ],
    correctAnswer: 0,
    explanation: `"Persistent" means continuing despite obstacles and carries a positive connotation, which fits a writer who admires the novelist's refusal to give up. "Stubborn," "obstinate," and "headstrong" describe similar behavior but with a negative connotation of unreasonable inflexibility.`,
    difficulty: 'medium',
    yield: 'HIGH',
    part: 3,
  },
  {
    question: `During the trial, the jury [looked at] the evidence for nine hours before reaching a verdict.

Which choice most precisely describes the jury's action?`,
    options: [
      `NO CHANGE`,
      `weighed`,
      `checked out`,
      `glanced at`,
    ],
    correctAnswer: 1,
    explanation: `"Weighed" captures the careful judgment a jury applies over nine hours of deliberation. "Looked at" is vague, "checked out" is too informal for the passage, and "glanced at" contradicts the nine hours spent on the evidence.`,
    difficulty: 'medium',
    yield: 'HIGH',
    part: 3,
  },
  {
    question: `The lighthouse on Gull Point was built in 1871. [Having been constructed more than 150 years ago, the] tower still guides ships through the narrow channel.

Which choice is the most effective?`,
    options: [
      `NO CHANGE`,
      `Built in the nineteenth century, the`,
      `The`,
      `Old and historic, the`,
    ],
    correctAnswer: 2,
    explanation: `The previous sentence already gives the construction date, so any phrase about the tower's age repeats it. The original wording and "Built in the nineteenth century" restate the date in different words, and "Old and historic" is also redundant. Starting simply with "The" keeps the full meaning.`,
    difficulty: 'hard',
    yield: 'HIGH',
    part: 3,
  },

  // ───────────── Part 4 — transitions and connectors ─────────────
  {
    question: `Heavy spring rains flooded the lower fields for most of April. [Transition] the farmers delayed planting their corn until early June.

Which choice provides the most logical transition?`,
    options: [
      `However,`,
      `Similarly,`,
      `Consequently,`,
      `For example,`,
    ],
    correctAnswer: 2,
    explanation: `The flooding caused the delay, so the sentences have a cause-effect relationship that "Consequently" signals. "However" would mean the delay contradicted the flooding, "Similarly" would present the delay as a parallel event, and "For example" would wrongly treat the delay as an illustration of the rain.`,
    difficulty: 'easy',
    yield: 'ULTRA_HIGH',
    part: 4,
  },
  {
    question: `Critics predicted that the tiny bakery on Elm Street would close within a year. [Nonetheless,] it is now celebrating its tenth anniversary.

Which choice is the most logical?`,
    options: [
      `NO CHANGE`,
      `Furthermore,`,
      `Therefore,`,
      `Likewise,`,
    ],
    correctAnswer: 0,
    explanation: `The bakery's long success runs against the critics' prediction, and "Nonetheless" signals that kind of contrast, so the original is correct. "Furthermore" and "Likewise" treat the two ideas as agreeing, and "Therefore" would absurdly suggest that the gloomy prediction caused the anniversary.`,
    difficulty: 'easy',
    yield: 'ULTRA_HIGH',
    part: 4,
  },
  {
    question: `Many social insects share the location of food with the rest of their colony. Honeybees tell their hive mates where to find flowers by performing a "waggle dance." [Transition] some species of ants pass along the same kind of information, laying down scent trails that lead their nestmates to food.

Which choice provides the most logical transition?`,
    options: [
      `Therefore,`,
      `Similarly,`,
      `In contrast,`,
      `For instance,`,
    ],
    correctAnswer: 1,
    explanation: `The paragraph opens by saying that social insects share the location of food, and the bees and ants are two parallel instances of that shared behavior, which is what "Similarly" signals. The ants "pass along the same kind of information," so the two behaviors do the same job; the dance and the scent trail are different methods, but the sentences present them as alike, not opposed, so a contrast transition misreads the relationship. The bee dance does not cause the ant behavior, and the ants are not an example of honeybees.`,
    difficulty: 'medium',
    yield: 'HIGH',
    part: 4,
  },
  {
    question: `[However] the trail was poorly marked, the hikers reached the summit before noon.

Which choice is correct?`,
    options: [
      `NO CHANGE`,
      `Therefore`,
      `Moreover`,
      `Although`,
    ],
    correctAnswer: 3,
    explanation: `The first part is a dependent clause attached to a main clause, and only "Although" can introduce that kind of contrasting clause. "However" signals contrast but connects two independent sentences, so it cannot open this clause. "Therefore" and "Moreover" signal cause and addition, which do not fit a poorly marked trail followed by success.`,
    difficulty: 'medium',
    yield: 'HIGH',
    part: 4,
  },
  {
    question: `[Although the museum was crowded, however, we] managed to see every gallery before closing time.

Which choice is correct?`,
    options: [
      `NO CHANGE`,
      `Although the museum was crowded, we`,
      `Although the museum was crowded; however, we`,
      `The museum was crowded, however we`,
    ],
    correctAnswer: 1,
    explanation: `"Although" and "however" each signal contrast, so using both is a redundant transition; keeping only "Although" fixes it. Swapping the comma for a semicolon still leaves both contrast words in the sentence. Dropping "Although" and keeping "however" with only a comma joins two independent clauses with a comma splice.`,
    difficulty: 'hard',
    yield: 'HIGH',
    part: 4,
  },

  // ───────────── Part 5 — combining and trimming ─────────────
  {
    question: `The Atacama Desert is in northern Chile. It is one of the driest places on Earth. Astronomers build telescopes there because its skies are so clear.

Which choice most effectively combines the three sentences?`,
    options: [
      `The Atacama Desert is in northern Chile, and it is one of the driest places on Earth, and astronomers build telescopes there.`,
      `Astronomers build telescopes in Chile's Atacama Desert, one of the driest places on Earth, because its skies are so clear.`,
      `Being one of the driest places on Earth in northern Chile, astronomers build telescopes in the Atacama Desert for clear skies.`,
      `The Atacama Desert, it is in northern Chile and one of the driest places, astronomers build telescopes there for the skies.`,
    ],
    correctAnswer: 1,
    explanation: `The best combination keeps the main idea in the main clause and folds the supporting facts into an appositive ("one of the driest places on Earth") and a "because" clause. The chain of "and" clauses is choppy and drops the reason. The "Being..." version is a dangling modifier that makes the astronomers sound like a desert, and the last version repeats the subject and splices two clauses with a comma.`,
    difficulty: 'medium',
    yield: 'HIGH',
    part: 5,
  },
  {
    question: `[In order to make a decision about] which route to take, the drivers checked the weather report.

Which choice is the most concise?`,
    options: [
      `NO CHANGE`,
      `For the purpose of deciding`,
      `In order to come to a decision on`,
      `To decide`,
    ],
    correctAnswer: 3,
    explanation: `"In order to" reduces to "to," and "make a decision" reduces to "decide," so "To decide" keeps the full meaning in two words. The original wording, "for the purpose of deciding," and "come to a decision on" all pad the same idea with extra words.`,
    difficulty: 'easy',
    yield: 'ULTRA_HIGH',
    part: 5,
  },
  {
    question: `To confirm their surprising results, the scientists repeated the experiment [again].

Which choice is the most effective?`,
    options: [
      `NO CHANGE`,
      `once more again`,
      `over again`,
      `DELETE the bracketed portion`,
    ],
    correctAnswer: 3,
    explanation: `"Repeated" already means "did again," so any word meaning "again" is redundant, and the sentence is complete without it. The original word, "once more again," and "over again" all restate the idea of repetition that the verb already carries.`,
    difficulty: 'medium',
    yield: 'HIGH',
    part: 5,
  },
  {
    question: `The orchestra rehearsed the symphony for six weeks. The orchestra performed it for a sold-out hall in March.

Which choice most effectively combines the two sentences?`,
    options: [
      `After rehearsing the symphony for six weeks, the orchestra performed it for a sold-out hall in March.`,
      `The orchestra rehearsed the symphony for six weeks, the orchestra performed it for a sold-out hall in March.`,
      `Having rehearsed the symphony for six weeks, a sold-out hall heard the orchestra perform it in March.`,
      `The orchestra rehearsed the symphony for six weeks, and then in March the orchestra performed it for a sold-out hall.`,
    ],
    correctAnswer: 0,
    explanation: `Turning the first sentence into the phrase "After rehearsing..." lets the shared subject appear once, right after the phrase it belongs to. Joining the two full sentences with only a comma is a comma splice. The "Having rehearsed..." version makes the hall the one that rehearsed, a dangling modifier, and the "and then" version is grammatical but repeats "the orchestra" and is wordier.`,
    difficulty: 'hard',
    yield: 'HIGH',
    part: 5,
  },
  {
    question: `The Fifth Street Bridge was closed for repairs. Commuters had to take a ferry across the river.

Which choice combines the sentences while keeping the relationship between the two ideas clear?`,
    options: [
      `Although the bridge was closed for repairs, commuters had to take a ferry across the river.`,
      `The bridge was closed for repairs, commuters had to take a ferry across the river.`,
      `The bridge, closed for repairs, and commuters had to take a ferry across the river.`,
      `Because the bridge was closed for repairs, commuters had to take a ferry across the river.`,
    ],
    correctAnswer: 3,
    explanation: `The closure caused the ferry trips, and the subordinating word "Because" shows that cause-effect relationship. "Although" signals contrast, which misstates the relationship. Joining the two clauses with only a comma creates a comma splice, and the version that pairs "the bridge" with "commuters" as one subject makes the bridge take a ferry.`,
    difficulty: 'medium',
    yield: 'HIGH',
    part: 5,
  },

  // ───────────── Part 6 — author's purpose, audience, effectiveness ─────────────
  {
    question: `Each year, the county's animal shelter takes in roughly 3,000 cats and dogs. Fewer than half are adopted. The rest wait in crowded kennels for months. Residents who have room in their homes should consider fostering a pet, even for a few weeks.

The primary purpose of this passage is to:`,
    options: [
      `persuade readers to foster animals from the shelter`,
      `inform readers about how the shelter is funded each year`,
      `describe one dog's experience living in a crowded kennel`,
      `explain the steps a family must follow to adopt a pet`,
    ],
    correctAnswer: 0,
    explanation: `The statistics build toward a recommendation that residents "should consider fostering," which makes the purpose persuasive. The passage never mentions funding, it describes animals in general rather than one dog, and it gives no step-by-step adoption process.`,
    difficulty: 'easy',
    yield: 'MEDIUM',
    part: 6,
  },
  {
    question: `Before your first shift, make sure you know where the fire extinguishers are kept and how to lock the register at closing. Your shift lead will walk you through the espresso machine on day one, so don't worry if you've never made a latte.

This passage is most likely written for:`,
    options: [
      `new employees starting work at a coffee shop`,
      `customers ordering drinks at a coffee shop`,
      `health inspectors reviewing a coffee shop`,
      `owners deciding whether to open a coffee shop`,
    ],
    correctAnswer: 0,
    explanation: `The passage addresses "you" about a first shift, a shift lead, and learning the equipment, which are concerns of someone just hired. Customers do not lock registers, inspectors would not be reassured about making lattes, and prospective owners are not starting shifts.`,
    difficulty: 'easy',
    yield: 'MEDIUM',
    part: 6,
  },
  {
    question: `Suppose the writer's goal had been to write an essay explaining how a community garden affects the health of the residents who use it. The essay describes the garden's founding by three neighbors in 2015, the bake sale that paid for its fence, and the long waiting list for plots.

Would the essay accomplish the writer's goal?`,
    options: [
      `Yes, because it describes how the garden came to exist and who works in it.`,
      `Yes, because the long waiting list proves that residents value the garden.`,
      `No, because it covers the garden's history and popularity, not residents' health.`,
      `No, because it describes only a single garden rather than gardens in many cities.`,
    ],
    correctAnswer: 2,
    explanation: `The stated goal is the garden's effect on residents' health, and the essay discusses its founding, fundraising, and popularity instead. Describing the garden's origins or its demand does not address health, and the goal concerns one community garden, so focusing on a single garden is not a flaw.`,
    difficulty: 'medium',
    yield: 'HIGH',
    part: 6,
  },
  {
    question: `Suppose the writer's goal had been to describe how a single invention changed daily life during one period. The essay explains how the electric refrigerator, which reached many American homes in the 1920s and 1930s, let families shop less often, store leftovers safely, and buy frozen foods.

Would the essay accomplish the writer's goal?`,
    options: [
      `Yes, because it shows several ways one invention altered household routines in one era.`,
      `Yes, because it compares the refrigerator with other household inventions of its day.`,
      `No, because it focuses on one invention rather than on daily life as a whole.`,
      `No, because it does not explain how the refrigerator keeps food cold mechanically.`,
    ],
    correctAnswer: 0,
    explanation: `The goal calls for one invention, one period, and changes to daily life, and the essay delivers all three with specific changes in shopping, storage, and diet. It makes no comparison with other inventions, and focusing on a single invention is exactly what the goal asks. How the refrigerator works mechanically is outside the goal's scope.`,
    difficulty: 'hard',
    yield: 'HIGH',
    part: 6,
  },
  {
    question: `Suppose the writer's goal had been to write an essay persuading readers to change their clothing and laundry habits in order to reduce plastic pollution. The essay opens by warning that every load of synthetic laundry sheds thousands of tiny plastic fibers into wastewater, uses its middle paragraphs to show how those fibers end up in fish and drinking water, and closes by urging readers to buy natural-fiber clothing and to wash synthetic garments less often.

Would the essay accomplish the writer's goal?`,
    options: [
      `Yes, because it explains in detail how wastewater treatment plants remove fibers from rivers.`,
      `Yes, because it offers facts about the fibers' harm as evidence for the changes it recommends.`,
      `No, because it describes the harm the fibers cause but never suggests what readers can do.`,
      `No, because it covers only fibers from clothing and ignores plastic bottles, straws, and bags.`,
    ],
    correctAnswer: 1,
    explanation: `The goal is to persuade readers to change their clothing and laundry habits, and the essay does exactly that: its facts about the fibers' harm serve as evidence, and it ends by telling readers what to buy and how to wash. A passage can inform and persuade at once, and data used to back a recommendation is persuasive. The essay never discusses how treatment plants remove fibers, it does tell readers what they can do, and because the goal concerns clothing and laundry, leaving out bottles, straws, and bags is not a flaw.`,
    difficulty: 'hard',
    yield: 'MEDIUM',
    part: 6,
  },

  // ───────────── Part 7 — mixed review ─────────────
  {
    question: `The ridge above town was once covered in green pines. [The forest is home to many kinds of insects.] Within a single season, the beetles had killed nearly a third of the trees, leaving whole hillsides brown.

Which choice most effectively leads into the sentence that follows?`,
    options: [
      `NO CHANGE`,
      `Then, in 2019, a wave of bark beetles arrived from the south.`,
      `Pine trees on the ridge can live for several hundred years.`,
      `Hikers visit the ridge throughout the summer and fall.`,
    ],
    correctAnswer: 1,
    explanation: `The next sentence refers to "the beetles" and a single season of damage, so the lead-in must introduce the beetles' arrival. A general remark about many insects never names the beetles, the trees' long lifespan does not set up their sudden death, and the hikers are unrelated to what follows.`,
    difficulty: 'medium',
    yield: 'HIGH',
    part: 7,
  },
  {
    question: `The reason the championship game was postponed [is because] the field had flooded overnight.

Which choice is the most effective?`,
    options: [
      `NO CHANGE`,
      `was due to the fact that`,
      `is that`,
      `is on account of`,
    ],
    correctAnswer: 2,
    explanation: `"Reason" already names a cause, and "because" means "for the reason that," so "the reason... is because" literally says "the reason is for the reason that": the cause is stated twice. After "the reason... is," use "that" to introduce the cause: "The reason the game was postponed is that the field had flooded." (Dropping "the reason" also works: "The game was postponed because the field had flooded.") "Was due to the fact that" and "is on account of" make the same doubling mistake in wordier form, since each phrase restates cause right after "reason" has already done so.`,
    difficulty: 'medium',
    yield: 'HIGH',
    part: 7,
  },
  {
    question: `My little brother grabbed the last slice of pizza, grinned at me across the table, and [wolfed it down].

Which choice best fits the tone of this personal narrative?`,
    options: [
      `NO CHANGE`,
      `consumed it with great rapidity`,
      `ingested the item hastily`,
      `partook of it in a swift manner`,
    ],
    correctAnswer: 0,
    explanation: `The narrative is casual and lively, and "wolfed it down" matches that register with a vivid, concise verb. The other choices sound more sophisticated but are stiff and wordy in a story about a sibling and a slice of pizza, which is the "sounds smart" trap.`,
    difficulty: 'medium',
    yield: 'MEDIUM',
    part: 7,
  },
  {
    question: `In the 1840s, a person sitting for a photographic portrait had to hold perfectly still for up to a minute. To help, studios used hidden metal braces that kept customers' heads from moving.

The writer is considering adding the following sentence at the end of the paragraph:

The word "photography" comes from Greek roots meaning "drawing with light."

Should the writer make this addition?`,
    options: [
      `Yes, because it explains the origin of a term the paragraph relies on.`,
      `Yes, because it shows why early exposures took so long to complete.`,
      `No, because it interrupts the paragraph's focus on how sitters coped with long exposures.`,
      `No, because it contradicts the paragraph's description of early studios.`,
    ],
    correctAnswer: 2,
    explanation: `The paragraph is about the long exposure times sitters endured, and the word's origin, though true, is irrelevant to that focus. Explaining a term's roots does not support the paragraph's point, and the etymology says nothing about why exposures were long. Nothing in it conflicts with the description of studios.`,
    difficulty: 'medium',
    yield: 'ULTRA_HIGH',
    part: 7,
  },
  {
    question: `Volunteers at the Riverside Food Pantry do far more than hand out groceries. They drive meals to homebound seniors, tutor children in the pantry's back room, and help families fill out applications for housing aid. [Closing sentence]

Which choice most effectively concludes the paragraph by reinforcing its main idea?`,
    options: [
      `Founded in 1987 by a local church, the pantry now relies on more than forty volunteers.`,
      `Groceries, the pantry's best-known service, are handed out each Tuesday and Saturday.`,
      `Many homebound seniors who receive these meals live alone and cannot drive.`,
      `For many families, the pantry has become a center of support well beyond food.`,
    ],
    correctAnswer: 3,
    explanation: `The paragraph's main idea is that the volunteers' work goes far beyond groceries, and only the sentence about support "well beyond food" sums that up. The founding date and volunteer count are background history, the grocery schedule returns to the very service the paragraph says is only part of the story, and the detail about seniors living alone narrows to one group the volunteers serve instead of summing up all of their work.`,
    difficulty: 'hard',
    yield: 'HIGH',
    part: 7,
  },
]

export const generateExitQuiz = makeLessonExitQuiz(EXIT_POOL, 'act-english-rhetorical-act')
