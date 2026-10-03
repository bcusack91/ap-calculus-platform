/**
 * Exit-quiz pool for the ACT Reading Main Ideas lesson (main idea, supporting
 * details, inferences, author purpose and tone, vocabulary in context,
 * relationships within a passage, and integrated passage practice), written
 * from the lesson itself and tagged by exam-yield tier (see ../lesson-built.ts).
 * Every item carries its own original passage or excerpt; the Part 7 items
 * repeat a full multi-paragraph passage in each stem so each stays self-contained.
 */
import { makeLessonExitQuiz, type LessonExitItem } from '../lesson-built'

export const EXIT_POOL: LessonExitItem[] = [
  // ───────────────────────── Part 1 — finding the main idea ─────────────────────────
  {
    question: `For decades, the town of Alder Falls hauled its yard waste to a landfill at the edge of the county. In 2021, the town council opened a composting site instead, and residents began dropping off leaves and grass clippings there. Within two years, the landfill's intake fell by nearly a third, and local gardeners were buying the finished compost at half the price of store-bought soil. Council members now call the program the most cost-effective decision they have made in a generation.

Which choice best states the main idea of the passage?`,
    options: [
      `Alder Falls's switch to composting cut its waste and saved residents money.`,
      `Gardeners in Alder Falls paid half the store price for the town's compost.`,
      `Towns across the country should replace their landfills with compost sites.`,
      `The Alder Falls landfill sat at the edge of the county for several decades.`,
    ],
    correctAnswer: 0,
    explanation: `The passage as a whole is about the composting program and its two payoffs, less landfill waste and cheaper soil, which the final sentence sums up. The half-price compost is one supporting detail, so that choice is too specific. The passage never discusses other towns, so that choice is too broad, and the landfill's location is background from the opening sentence, not the central point.`,
    difficulty: 'easy',
    yield: 'ULTRA_HIGH',
    part: 1,
  },
  {
    question: `Honeybees share the location of food through a movement known as the waggle dance. A forager returning to the hive runs in a straight line while shaking its abdomen, then loops back and repeats the run. The angle of the straight run shows the food's direction relative to the sun, and the length of the run signals distance. Researchers have found that bees watching the dance fly out with surprising accuracy to flowers more than a mile away.

A student summarizes the main idea of the passage as "Insects use many complex forms of communication." The main problem with this summary is that it:`,
    options: [
      `is too specific, because it focuses on the angle of the bees' straight run.`,
      `contradicts the passage, which says bees cannot signal distance accurately.`,
      `is too broad, because the passage discusses only the honeybee waggle dance.`,
      `relies on the final sentence of the passage rather than on the first one.`,
    ],
    correctAnswer: 2,
    explanation: `The passage is entirely about one behavior of one insect, so a statement about the communication of insects in general goes beyond the passage. The summary mentions no single detail such as the angle of the run, so it is not too specific. The passage says the bees find food accurately, and the summary does not draw on the final sentence at all.`,
    difficulty: 'medium',
    yield: 'ULTRA_HIGH',
    part: 1,
  },
  {
    question: `A short essay is summarized below.

First paragraph: "Most visitors to the Hartwell Museum walk straight past the small room of nineteenth-century farm tools. That is a mistake."
Middle paragraphs: descriptions of a cider press, a hand-forged plow, and a wooden butter churn displayed in that room.
Last paragraph: "These tools tell the story of how ordinary families fed themselves, a story the grand portraits upstairs leave out."

Which choice best states the main idea of the essay?`,
    options: [
      `The museum's grand portraits are less valuable than its collection of tools.`,
      `Nineteenth-century farm families depended on presses, plows, and churns.`,
      `Most visitors to the Hartwell Museum leave without seeing any of its exhibits.`,
      `The overlooked tool room shows everyday history the museum omits.`,
    ],
    correctAnswer: 3,
    explanation: `The first paragraph says visitors are wrong to skip the tool room, and the last paragraph explains why: the tools reveal ordinary life that the portraits leave out, so together they frame the main idea. The essay never ranks the collections by value, and the list of tools is the supporting detail from the middle paragraphs. The essay says visitors skip one room, not every exhibit.`,
    difficulty: 'medium',
    yield: 'HIGH',
    part: 1,
  },
  {
    question: `Mara had promised herself she would not cry at the airport. She checked her brother's boarding pass twice, straightened his collar though he swatted her hand away, and reminded him for the third time to call when he landed. When the security line finally swallowed him, she stood at the window long after his plane had become a speck, still holding the granola bar he had refused to take.

Which choice best describes the main focus of the passage?`,
    options: [
      `Mara's irritation that her brother keeps refusing her travel advice`,
      `The confusion and long lines that travelers face at busy airports`,
      `Mara's effort to hide how deeply she will miss her departing brother`,
      `A younger brother's excitement about taking his first plane trip`,
    ],
    correctAnswer: 2,
    explanation: `Mara's promise not to cry, her fussing over details, and her long wait at the window all point to sadness she is trying to manage, which ties the whole passage together. Her brother does swat her hand away, but the passage dwells on her feelings, not on irritation. Airport crowds are never described, and nothing says this is the brother's first flight or shows his excitement.`,
    difficulty: 'hard',
    yield: 'ULTRA_HIGH',
    part: 1,
  },
  {
    question: `Early accounts of the Dust Bowl blamed the disaster almost entirely on drought. Rainfall across the southern Plains did drop sharply in the early 1930s. Yet historians now emphasize that farmers had plowed up millions of acres of native grassland in the previous two decades, removing the deep-rooted plants that once held the soil in place. When the rains failed, there was nothing left to stop the wind.

Which choice best states the main idea of the passage?`,
    options: [
      `Rainfall across the southern Plains dropped sharply in the early 1930s.`,
      `Plowing up native grassland, not drought alone, set up the Dust Bowl.`,
      `Historians disagree about the causes of most environmental disasters.`,
      `Early accounts were correct to blame the Dust Bowl mainly on drought.`,
    ],
    correctAnswer: 1,
    explanation: `The passage sets up the old drought explanation and then, with "Yet," gives the historians' fuller view that plowing removed the plants holding the soil, which is the central point. The drop in rainfall is a detail the passage concedes, not its main claim. The passage covers only the Dust Bowl, so a statement about most disasters is too broad, and it challenges rather than endorses the early accounts.`,
    difficulty: 'medium',
    yield: 'ULTRA_HIGH',
    part: 1,
  },

  // ───────────────────────── Part 2 — supporting details ─────────────────────────
  {
    question: `The Ridgeway Bridge, completed in 1938, was the first suspension bridge in the state built entirely with locally produced steel. Engineers had originally planned a stone arch design, but a survey revealed that the riverbed was too soft to support heavy piers. The suspension design instead carried the bridge's weight to two towers set on bedrock along the banks.

According to the passage, the engineers abandoned the stone arch design because:`,
    options: [
      `locally produced steel cost less than stone shipped from elsewhere.`,
      `a stone arch could not have spanned the full width of the river.`,
      `the towers on the riverbanks could not be anchored to bedrock.`,
      `the riverbed was too soft to support the heavy piers it needed.`,
    ],
    correctAnswer: 3,
    explanation: `The second sentence states the reason directly: the survey found the riverbed too soft for heavy piers. The passage never compares the cost of steel and stone or mentions the river's width. It says the towers were set on bedrock, so the claim that they could not be anchored there contradicts the passage.`,
    difficulty: 'easy',
    yield: 'ULTRA_HIGH',
    part: 2,
  },
  {
    question: `Night shifts take a measurable toll on workers' health. In one long-term study of 4,000 nurses, those who worked rotating night shifts for more than five years had a 19 percent higher rate of heart disease than those who worked only days. The hospital in the study had recently renovated the cafeteria its staff used. Researchers suspect that disrupted sleep interferes with the body's regulation of blood pressure.

Which detail from the passage provides the most direct evidence for the claim in the first sentence?`,
    options: [
      `The total number of nurses who took part in the long-term study`,
      `The researchers' suspicion about how sleep affects blood pressure`,
      `The higher heart disease rate among long-term night-shift nurses`,
      `The hospital's recent renovation of the staff's cafeteria`,
    ],
    correctAnswer: 2,
    explanation: `The claim is that night shifts measurably harm health, and the 19 percent higher rate of heart disease is the measured harm. The number of nurses describes the size of the study, not its result. The researchers' suspicion is a possible explanation for the harm rather than evidence that it exists, and the cafeteria renovation has nothing to do with the claim.`,
    difficulty: 'hard',
    yield: 'HIGH',
    part: 2,
  },
  {
    question: `Community gardens do more than grow vegetables. When the Eastside Garden opened on a vacant lot in 2015, neighbors who had lived on the same block for years met for the first time. "I know the names of thirty people I used to just nod at," said one longtime resident. The garden now hosts a monthly potluck that draws more than a hundred people.

The quotation from the longtime resident primarily serves to:`,
    options: [
      `give a personal example of how the garden connected neighbors.`,
      `show that the vegetables went mainly to longtime residents.`,
      `suggest that most neighbors were unfriendly before 2015.`,
      `explain why the garden was built on a vacant lot.`,
    ],
    correctAnswer: 0,
    explanation: `The passage claims the garden does more than grow food, and the resident's comment about learning thirty names is a firsthand example of the new connections it created. The quotation says nothing about who received the vegetables or why a vacant lot was chosen. Nodding at people is not unfriendliness, so that choice reads too much into the quotation.`,
    difficulty: 'medium',
    yield: 'HIGH',
    part: 2,
  },
  {
    question: `Glass frogs, found in the rainforests of Central and South America, have translucent skin on their undersides through which their hearts and digestive organs can be seen. During the day, they sleep on the undersides of leaves. A 2022 study found that a sleeping glass frog hides most of its red blood cells in its liver, which makes its body up to twice as transparent.

According to the passage, what makes a sleeping glass frog more transparent?`,
    options: [
      `Slowing its heartbeat while it sleeps through the day`,
      `Storing most of its red blood cells in its liver`,
      `Resting on the undersides of rainforest leaves`,
      `Shedding pigment from the skin on its underside`,
    ],
    correctAnswer: 1,
    explanation: `The last sentence states the answer: hiding most of its red blood cells in its liver makes the frog up to twice as transparent. The passage mentions where the frog sleeps but does not say that resting on leaves changes its transparency. Nothing in the passage mentions a slowed heartbeat or shed pigment, so those choices require information the passage does not give.`,
    difficulty: 'easy',
    yield: 'HIGH',
    part: 2,
  },
  {
    question: `The 1904 world's fair in St. Louis introduced millions of visitors to new technologies. Fairgoers could ride an elevated moving walkway, watch early films in a darkened hall, and see a wireless telegraph tower send messages across the grounds. Food vendors also sold iced tea, which was popular during the hot summer months.

The passage mentions all of the following as attractions at the fair EXCEPT:`,
    options: [
      `an elevated walkway that moved visitors along.`,
      `films shown to audiences in a darkened hall.`,
      `a balloon ride that rose above the grounds.`,
      `a tower that sent wireless telegraph messages.`,
    ],
    correctAnswer: 2,
    explanation: `The second sentence lists the moving walkway, the films in a darkened hall, and the wireless telegraph tower, so each of those is stated. A balloon ride appears nowhere in the passage. On a detail question, the answer must be checked against what the passage actually says rather than what a fair of that era might plausibly have offered.`,
    difficulty: 'medium',
    yield: 'MEDIUM',
    part: 2,
  },

  // ───────────────────────── Part 3 — making inferences ─────────────────────────
  {
    question: `By the time Dev reached the trailhead, the parking lot was empty and the sun had already slipped behind the ridge. He checked his phone: no signal. He zipped his jacket to the chin, switched on his headlamp, and started up the trail anyway, telling himself the hut was only two miles away.

It can most reasonably be inferred that Dev:`,
    options: [
      `has never hiked this particular trail before tonight.`,
      `plans to call someone as soon as he reaches the hut.`,
      `is an experienced climber who seeks out danger.`,
      `is starting the hike later than would be ideal.`,
    ],
    correctAnswer: 3,
    explanation: `The empty lot, the sunset, the headlamp, and the word "anyway" together suggest that Dev is setting out later than he should, and his reassuring himself about the distance supports this. Nothing shows whether he has hiked the trail before, and the passage gives no plan to call anyone. Calling him a danger-seeking expert goes well beyond what the text supports.`,
    difficulty: 'medium',
    yield: 'ULTRA_HIGH',
    part: 3,
  },
  {
    question: `When the Lindell Public Library extended its weekend hours in 2023, Saturday visits rose by 40 percent. Librarians noticed that many of the new visitors were parents with young children, who signed up for story times that had previously been held only on weekday mornings.

The passage most strongly suggests that:`,
    options: [
      `some parents could not come to weekday-morning story times.`,
      `every family in Lindell now visits the library at least once each weekend.`,
      `the library will soon cancel all of its weekday morning story times.`,
      `weekend visits rose because the library bought many new children's books.`,
    ],
    correctAnswer: 0,
    explanation: `Parents signed up for story times once they were offered on weekends, which suggests that the weekday-morning schedule had kept at least some of them away. "Every family" is far too extreme for a 40 percent rise in visits. The passage gives no plans for weekday story times and never mentions new books, so those choices go beyond the text.`,
    difficulty: 'medium',
    yield: 'HIGH',
    part: 3,
  },
  {
    question: `Before 1900, most cookbooks in the region gave amounts by the "teacup" or the "handful." The 1902 edition of the Halvorsen Household Guide was among the first to call for level cups and spoons, and its author urged readers to buy a set of measuring tools. Within a decade, rival cookbooks had adopted the same practice.

Which statement is best supported by the passage?`,
    options: [
      `The author of the Halvorsen Guide invented the measuring cup in 1902.`,
      `Few cookbooks in the region called for level measures before 1902.`,
      `Modern cooks generally prefer weighing ingredients to measuring them.`,
      `The Halvorsen Guide was the region's best-selling cookbook for a decade.`,
    ],
    correctAnswer: 1,
    explanation: `If the 1902 guide was among the first to call for level cups and spoons, and earlier books used teacups and handfuls, then few books before it asked for level measures. The author urged readers to buy measuring tools, which implies the tools already existed, so the claim about inventing them goes too far. The passage says nothing about modern cooks or sales figures, so those choices require outside knowledge.`,
    difficulty: 'medium',
    yield: 'ULTRA_HIGH',
    part: 3,
  },
  {
    question: `Grandpa Leo's workshop smelled of sawdust and machine oil, just as it had for forty years. Nina ran her hand along the workbench, past the chisels he had sharpened every Sunday, now dulled under a thin coat of dust. She picked up a half-finished birdhouse, turned it over in her hands, and set it back exactly where she had found it.

The passage most strongly suggests that:`,
    options: [
      `Nina intends to finish the birdhouse that her grandfather began.`,
      `Grandpa Leo stopped sharpening his chisels after losing interest.`,
      `Nina has never been inside her grandfather's workshop before.`,
      `Grandpa Leo has not worked in his workshop for some time.`,
    ],
    correctAnswer: 3,
    explanation: `Chisels that were sharpened every Sunday now sit dulled under dust, and a birdhouse is left half-finished, which together suggest that Leo has been away from the shop for a while. Nina puts the birdhouse back where she found it, so nothing suggests she will finish it. The passage gives no reason for Leo's absence, so "losing interest" is unsupported, and her knowing the shop smelled the same for forty years shows she has been there before.`,
    difficulty: 'hard',
    yield: 'HIGH',
    part: 3,
  },
  {
    question: `Marisol's pottery class meets on Thursdays. For three weeks, every bowl she shaped on the wheel collapsed before she could finish it. This week, she carried home a lopsided but intact bowl, holding it with both hands the entire walk to the bus stop.

It can reasonably be inferred that Marisol:`,
    options: [
      `values the bowl as her first one to survive.`,
      `plans to sell the bowl at a local craft fair.`,
      `is upset that the bowl came out lopsided.`,
      `will drop the pottery class after this week.`,
    ],
    correctAnswer: 0,
    explanation: `After three weeks of collapsed bowls, she carefully carries this one with both hands, which suggests she treasures it as her first success. Nothing mentions selling it. Her careful handling points to pride rather than disappointment about its shape, and the passage gives no sign that she plans to quit.`,
    difficulty: 'easy',
    yield: 'ULTRA_HIGH',
    part: 3,
  },
  {
    question: `When Coach Alvarez posted the varsity roster on the gym door, Keisha read it from top to bottom twice. Her best friend, Tamsin, found her at the lockers a minute later. "Did you make—" Tamsin began. "It's fine," Keisha said, before Tamsin could finish. "Honestly, I wanted more time for the art show anyway." She shut her locker so hard that the door bounced back open.

It can most reasonably be inferred that Keisha:`,
    options: [
      `is relieved to have more free time for the art show.`,
      `is angry with Tamsin for asking her about the roster.`,
      `is disappointed that she did not make the varsity team.`,
      `has decided to quit playing sports after this season.`,
    ],
    correctAnswer: 2,
    explanation: `Reading the roster twice, answering "It's fine" before the question is even finished, and slamming the locker together suggest that she did not make the team and is hiding her disappointment. Taking her remark about the art show at face value ignores how quickly and defensively she says it. Nothing shows that her frustration is aimed at her friend, and the passage never mentions any plan to quit sports.`,
    difficulty: 'medium',
    yield: 'ULTRA_HIGH',
    part: 3,
  },

  // ───────────────────────── Part 4 — author purpose and tone ─────────────────────────
  {
    question: `A volcano's eruption style depends largely on its magma. Thick, silica-rich magma traps gas until pressure builds and the volcano explodes violently. Thin, runny magma lets gas escape easily, so it tends to pour from the vent in streams of lava rather than bursting out.

The author's main purpose in the passage is to:`,
    options: [
      `persuade readers to avoid volcanoes that have thick magma.`,
      `explain why some volcanoes stay quiet for many centuries.`,
      `entertain readers with a dramatic story of an eruption.`,
      `explain how a volcano's magma affects the way it erupts.`,
    ],
    correctAnswer: 3,
    explanation: `The passage presents cause-and-effect facts about two kinds of magma in a neutral way, so its purpose is to explain how magma shapes an eruption. A choice about volcanoes staying quiet has the right verb but the wrong subject, since the passage never discusses dormant periods. The passage never tells readers what to do and tells no story about a particular eruption, so it neither persuades nor entertains.`,
    difficulty: 'easy',
    yield: 'ULTRA_HIGH',
    part: 4,
  },
  {
    question: `Our city spends millions each year widening roads, only to see traffic return within months. It is time to admit that more lanes simply invite more cars. A fraction of that money, invested in frequent and reliable buses, would move more people and leave our streets calmer.

The author's primary purpose in the passage is to:`,
    options: [
      `argue that the city should shift road money toward better bus service.`,
      `explain the engineering steps the city follows when it widens roads.`,
      `describe how traffic patterns change over a typical day in the city.`,
      `compare the costs of road projects in several cities across the country.`,
    ],
    correctAnswer: 0,
    explanation: `Phrases such as "It is time to admit" and the claim that bus money "would move more people" show the author is trying to convince readers of a policy change, which is a persuasive purpose. The passage does not walk through engineering steps or daily traffic patterns, and it discusses only one city, so it makes no comparison across cities.`,
    difficulty: 'medium',
    yield: 'ULTRA_HIGH',
    part: 4,
  },
  {
    question: `The new arts center is a triumph of ambition over sense. Its glass atrium, which bakes visitors every summer, cost more than the library's entire budget for a decade, and its concert hall somehow manages to make a full orchestra sound like a distant radio.

The author's tone in the passage is best described as:`,
    options: [`warmly admiring`, `sharply critical`, `mildly nostalgic`, `neutral and objective`],
    correctAnswer: 1,
    explanation: `Word choices such as "over sense," "bakes visitors," and "a distant radio" mock the building's cost and design, so the tone is critical. The word "triumph" is used ironically, not as praise, so the tone is not admiring. The author does not look back fondly on the past, and the loaded diction rules out a neutral tone.`,
    difficulty: 'medium',
    yield: 'HIGH',
    part: 4,
  },
  {
    question: `On summer evenings, the whole street gathered on the Okafors' porch. Someone always brought a guitar, the kids chased fireflies until their jars glowed, and Mrs. Okafor's lemonade never seemed to run out. The porch is gone now, replaced by a concrete parking pad, but I still slow down every time I pass that corner.

The narrator's tone in the passage is best described as:`,
    options: [`bitter and resentful`, `detached and clinical`, `anxious and fearful`, `wistful and nostalgic`],
    correctAnswer: 3,
    explanation: `The fond details of guitars, fireflies, and endless lemonade, together with the narrator still slowing down at the corner, show a gentle longing for the past. The narrator notes the parking pad without blaming anyone, so the tone is not bitter. The warm sensory detail rules out a detached tone, and nothing in the passage expresses worry or fear.`,
    difficulty: 'easy',
    yield: 'HIGH',
    part: 4,
  },
  {
    question: `Each spring, the town of Brenner holds a frog-jumping contest that draws visitors from three states. Behind the festivities, however, the frogs' wetland habitat has shrunk by half since 1980. Last year's winning frog, a bullfrog named Rocket, leaped nearly eighteen feet, but biologists warn that within a generation there may be no local frogs left to enter.

The author most likely mentions Rocket's winning leap in order to:`,
    options: [
      `prove that frogs from the Brenner wetland are the region's best jumpers.`,
      `contrast the contest's celebration of frogs with the threat to their survival.`,
      `shift the focus of the passage from habitat loss to the rules of the contest.`,
      `suggest that the contest itself is the main cause of the wetland's decline.`,
    ],
    correctAnswer: 1,
    explanation: `The sentence pairs Rocket's impressive leap with the warning that local frogs may soon disappear, so the detail sharpens the contrast between the festival and the habitat crisis. The passage compares Rocket with no frogs from other places, and it never discusses contest rules. It blames shrinking habitat, not the contest, for the threat to the frogs.`,
    difficulty: 'hard',
    yield: 'HIGH',
    part: 4,
  },
  {
    question: `Grandmother Ines thought the city's new trolley was a noisy waste of money, and she said so at every Sunday dinner. I was nine, and to me the trolley was the most thrilling thing in the world; whenever I had a spare nickel, I rode it to the end of the line and back. Ines, I learned years later, had been riding it too, secretly, every Tuesday, to visit a friend across town.

The narrator's attitude toward the trolley when she was a child is best described as:`,
    options: [`thrilled enthusiasm`, `grudging tolerance`, `open disapproval`, `quiet indifference`],
    correctAnswer: 0,
    explanation: `The question asks about the narrator as a child, and calling the trolley "the most thrilling thing in the world" and riding it whenever she had a nickel show enthusiasm. Open disapproval is the grandmother's stated attitude, not the narrator's. Nothing suggests the young narrator merely put up with the trolley or ignored it.`,
    difficulty: 'medium',
    yield: 'HIGH',
    part: 4,
  },

  // ───────────────────────── Part 5 — vocabulary in context ─────────────────────────
  {
    question: `The senator's speech was received coolly; few in the audience applauded, and several people left before she had finished.

As it is used in the sentence, the word "coolly" most nearly means:`,
    options: [`with calm courage`, `at a low temperature`, `without enthusiasm`, `in a stylish way`],
    correctAnswer: 2,
    explanation: `The context clues, scattered applause and people walking out, show the audience reacted without enthusiasm. Temperature is the word's everyday meaning, but a speech cannot be received at a temperature. Calm courage and stylishness are other senses of "cool" that do not fit how an audience receives a speech.`,
    difficulty: 'easy',
    yield: 'ULTRA_HIGH',
    part: 5,
  },
  {
    question: `The new bakery on Elm Street has a loyal following; by nine o'clock each morning, its shelves are already bare.

As it is used in the sentence, the word "following" most nearly means:`,
    options: [`next in order`, `devoted customers`, `people chasing it`, `act of obeying`],
    correctAnswer: 1,
    explanation: `A "loyal following" whose purchases empty the shelves by nine is a group of devoted customers. "Next in order" is the adjective sense, as in "the following day," and does not fit after "loyal." Chasing someone and obeying orders are other senses of "follow" that make no sense for a bakery's success.`,
    difficulty: 'easy',
    yield: 'HIGH',
    part: 5,
  },
  {
    question: `The new recruitment plan did not solve every problem the club faced, but it did arrest the decline in membership, which had fallen for five straight years before holding steady this spring.

As it is used in the sentence, the word "arrest" most nearly means:`,
    options: [`take into custody`, `draw attention to`, `speed up`, `bring to a halt`],
    correctAnswer: 3,
    explanation: `The rest of the sentence explains that membership stopped falling and held steady, so "arrest" here means to stop. Taking someone into custody is the common meaning, but a decline cannot be taken into custody. Drawing attention to the decline or speeding it up contradicts the report that membership held steady.`,
    difficulty: 'medium',
    yield: 'ULTRA_HIGH',
    part: 5,
  },
  {
    question: `At first glance the proposal seemed modest, but its effect on the city budget would be anything but: it committed the city to annual payments for the next thirty years.

As it is used in the sentence, the word "modest" most nearly means:`,
    options: [`humble in manner`, `limited in scale`, `shy around others`, `plain in dress`],
    correctAnswer: 1,
    explanation: `The sentence contrasts how the proposal seemed with a thirty-year commitment that is "anything but" modest, so the word must mean small or limited in scale. Humility, shyness, and plain dress are senses of "modest" that describe people, not a budget proposal, and none of them sets up the contrast with large long-term payments.`,
    difficulty: 'medium',
    yield: 'HIGH',
    part: 5,
  },
  {
    question: `Although the explorer's journals are often colorful and crowded with anecdotes, her maps are spare: they show rivers and ridgelines but almost nothing else.

As it is used in the sentence, the word "spare" most nearly means:`,
    options: [`pared down`, `left over as extra`, `free for use`, `thin and bony`],
    correctAnswer: 0,
    explanation: `"Although" sets the maps against journals that are crowded with detail, and the clause after the colon says the maps show almost nothing beyond rivers and ridgelines, so "spare" means minimal. "Extra" and "free for use" are common meanings that ignore this contrast. "Thin and bony" describes a body, not a map.`,
    difficulty: 'hard',
    yield: 'ULTRA_HIGH',
    part: 5,
  },
  {
    question: `Most reviewers dismissed the novel as slight. Its admirers, however, argued that its brevity concealed real depth: in barely a hundred pages, it traced three generations of a single family.

As it is used in the passage, the word "slight" most nearly means:`,
    options: [`lacking substance`, `slender in build`, `mildly insulting`, `barely noticeable`],
    correctAnswer: 0,
    explanation: `The admirers answer the reviewers by claiming the short book has "real depth," so the reviewers must have judged it to be lacking substance. "Slender in build" describes a person's body. "Mildly insulting" confuses the adjective with the noun "slight," and "barely noticeable" fits a small change, not a novel that reviewers bothered to dismiss.`,
    difficulty: 'hard',
    yield: 'HIGH',
    part: 5,
  },

  // ───────────────────────── Part 6 — relationships within a passage ─────────────────────────
  {
    question: `The main idea of a passage is that a city's 1950s highway construction divided neighborhoods that had once been closely connected. One paragraph describes a family whose walk to church grew from five minutes to twenty after an overpass cut off the end of their street.

This paragraph mainly serves to:`,
    options: [
      `introduce a new argument about the role of churches in city life.`,
      `show in one family's routine how the highway split a neighborhood.`,
      `move the focus from the highway to the history of a single church.`,
      `give a statistic about how many residents the construction moved.`,
    ],
    correctAnswer: 1,
    explanation: `The paragraph's job is to illustrate: it turns the claim about divided neighborhoods into a concrete case, a short walk made four times longer by the overpass. The church is only the family's destination, so the paragraph neither argues about churches nor shifts to a church's history. A single family's walking time is an example, not a statistic about how many residents were moved.`,
    difficulty: 'easy',
    yield: 'HIGH',
    part: 6,
  },
  {
    question: `In 2019, the town of Pell Harbor closed its waterfront street to cars on weekends. That summer, sales at the street's restaurants rose by about 15 percent. The same summer, however, a new ferry began bringing day-trippers from the city, and many of the restaurants had added outdoor seating that spring. The town's business association credits the car ban for the increase, but an economist who studied the change wrote only that the ban "may have contributed" to it.

Which statement about the rise in restaurant sales is best supported by the passage?`,
    options: [
      `The car ban was the only reason that restaurant sales rose.`,
      `The ferry, not the car ban, was proven to cause the rise.`,
      `The car ban may have been one of several causes of the rise.`,
      `The rise in restaurant sales led the town to ban the cars.`,
    ],
    correctAnswer: 2,
    explanation: `The passage names three changes that came the same summer and quotes an economist saying only that the ban "may have contributed," so the ban is at most one possible cause. Calling it the only reason adopts the business association's claim and ignores the ferry and the new seating. Nothing proves the ferry was the cause either, and the ban came before the sales rose, so the sales could not have led to it.`,
    difficulty: 'hard',
    yield: 'HIGH',
    part: 6,
  },
  {
    question: `Two nineteenth-century naturalists studied the same marsh. Abel Crane, a schoolteacher, visited only on weekends but counted every bird he saw, filling forty notebooks with numbers. Hattie Moss lived at the marsh's edge and rarely counted anything; instead, she wrote long descriptions of how the birds behaved through each season. Both left their papers to the county library, where historians now use Crane's notebooks to track population changes and Moss's journals to understand how the birds lived.

Which statement best describes a difference between Crane and Moss?`,
    options: [
      `Crane described behavior, while Moss kept careful bird counts.`,
      `Crane left his papers to the library, while Moss kept hers private.`,
      `Crane lived beside the marsh, while Moss visited on weekends.`,
      `Crane recorded numbers, while Moss described how birds behaved.`,
    ],
    correctAnswer: 3,
    explanation: `Crane filled notebooks with counts, while Moss, "instead," wrote descriptions of behavior, which is the contrast the passage draws. One choice swaps their methods and another swaps where they lived, since Moss lived at the marsh and Crane visited on weekends. The passage says both left their papers to the library, so neither kept them private.`,
    difficulty: 'medium',
    yield: 'HIGH',
    part: 6,
  },
  {
    question: `Marcus unlocked the door of the empty classroom where he would begin teaching on Monday. Twenty years earlier, he had sat in the third row of this same room, failing algebra, until Mr. Okafor had started staying after school to tutor him. By the time Marcus graduated, he had decided to become a teacher himself. Now, setting a stack of textbooks on the desk, he noticed that someone had left a note: "Welcome back. —R. Okafor."

Which event happens first chronologically?`,
    options: [
      `Marcus decides that he will become a teacher.`,
      `Mr. Okafor begins tutoring Marcus after school.`,
      `Marcus unlocks the door of the empty classroom.`,
      `Marcus finds a welcome note left on the desk.`,
    ],
    correctAnswer: 1,
    explanation: `"Twenty years earlier" and the past perfect "had started" place the tutoring in the flashback, before Marcus graduated and decided to teach. His decision came by graduation, after the tutoring had begun. Unlocking the classroom is told first, but it and the note belong to the present, the latest part of the timeline.`,
    difficulty: 'easy',
    yield: 'HIGH',
    part: 6,
  },
  {
    question: `A passage about school grading is summarized by paragraph.

Paragraph 1: Some school districts have replaced letter grades with written comments on student progress.
Paragraph 2: Supporters say comments tell students what to improve, while a letter tells them only how they ranked.
Paragraph 3: "Admittedly, comments take teachers far longer to write, and some parents find them harder to interpret than a simple B-plus."
Paragraph 4: Districts that made the switch report that teachers adapted within a year, using shared banks of sample comments that cut writing time in half.

The third paragraph primarily serves to:`,
    options: [
      `provide the main evidence that written comments help students.`,
      `introduce the practice of replacing letter grades for the first time.`,
      `concede drawbacks that the fourth paragraph partly answers.`,
      `explain why a letter grade tells students only how they ranked.`,
    ],
    correctAnswer: 2,
    explanation: `"Admittedly" signals a concession: the paragraph grants two drawbacks, and the fourth paragraph answers the one about teachers' time. The paragraph points out problems with comments, so it is not evidence that they help. The first paragraph introduces the practice, and the second paragraph explains what a letter grade tells students.`,
    difficulty: 'medium',
    yield: 'HIGH',
    part: 6,
  },
  {
    question: `Ada watched her father read the report card at the kitchen counter. He turned it over, as if more grades might be printed on the back, and then set it down without a word. Ada could not tell whether the silence meant he was angry or simply tired; she only knew that she wanted to be anywhere else. Upstairs, her brother's music thumped through the ceiling.

The passage is told from the point of view of:`,
    options: [
      `a third-person narrator who reveals only Ada's thoughts.`,
      `a third-person narrator who knows every character's thoughts.`,
      `Ada herself, narrating in the first person as an adult.`,
      `Ada's father, describing his reaction to the report card.`,
    ],
    correctAnswer: 0,
    explanation: `The passage uses "she" and "her," and it reports what Ada knows and wants but only the father's outward actions, which is third person limited to Ada. A narrator who knew every character's thoughts would reveal what the silence meant, but the passage says Ada could not tell. There is no "I," so neither Ada nor her father is narrating.`,
    difficulty: 'medium',
    yield: 'HIGH',
    part: 6,
  },

  // ───────────────────────── Part 7 — integrated passage practice ─────────────────────────
  {
    question: `[1] The repair shop had belonged to Mr. Vasquez for thirty-four years, and for the last two of them it had also, unofficially, belonged to Nell. She came in after school to sweep up wire clippings and, gradually, to do more: sorting screws, testing batteries, and finally, under his eye, soldering the loose connection in a neighbor's radio.

[2] On a Thursday in October he handed her a key on a loop of red string. "I'm going to my daughter's in Tucson for the winter," he said. "The shop stays open Saturdays. You know where everything is." He said it the way he might have asked her to pass a screwdriver.

[3] Nell turned the key over in her palm. She thought of the shelf of half-finished jobs, the customers who asked for him by name, the old cash register that only he could coax open. "What if someone brings in something I can't fix?" she asked.

[4] He was already pulling on his coat. "Then you tell them to come back next week," he said, "and in the meantime you figure it out." At the door he paused. "That's all I ever did."

[5] On the first Saturday, a man brought in a lamp that flickered. Nell took it apart twice before she found the frayed wire. When the bulb finally held steady, she realized she had been holding her breath, and that she had not once thought of calling Tucson.

Mr. Vasquez's remark at the end of paragraph 4, "That's all I ever did," most strongly suggests that he:`,
    options: [
      `regrets that he never learned to handle difficult repairs.`,
      `expects Nell to keep the shop closed until he returns.`,
      `doubts that customers will trust Nell with their repairs.`,
      `believes Nell can learn the work just as he once did.`,
    ],
    correctAnswer: 3,
    explanation: `He answers Nell's worry by telling her to figure out hard jobs over time and then says that this is all he ever did, which suggests he trusts her to learn the way he did. The remark reassures her rather than expressing regret about his own skill. He has just said the shop stays open Saturdays, so he does not expect it to close, and nothing he says questions whether customers will trust her.`,
    difficulty: 'hard',
    yield: 'HIGH',
    part: 7,
  },
  {
    question: `[1] The repair shop had belonged to Mr. Vasquez for thirty-four years, and for the last two of them it had also, unofficially, belonged to Nell. She came in after school to sweep up wire clippings and, gradually, to do more: sorting screws, testing batteries, and finally, under his eye, soldering the loose connection in a neighbor's radio.

[2] On a Thursday in October he handed her a key on a loop of red string. "I'm going to my daughter's in Tucson for the winter," he said. "The shop stays open Saturdays. You know where everything is." He said it the way he might have asked her to pass a screwdriver.

[3] Nell turned the key over in her palm. She thought of the shelf of half-finished jobs, the customers who asked for him by name, the old cash register that only he could coax open. "What if someone brings in something I can't fix?" she asked.

[4] He was already pulling on his coat. "Then you tell them to come back next week," he said, "and in the meantime you figure it out." At the door he paused. "That's all I ever did."

[5] On the first Saturday, a man brought in a lamp that flickered. Nell took it apart twice before she found the frayed wire. When the bulb finally held steady, she realized she had been holding her breath, and that she had not once thought of calling Tucson.

The third paragraph mainly serves to:`,
    options: [
      `describe how Nell first came to help out in the shop.`,
      `explain why Mr. Vasquez is leaving for the winter.`,
      `show Nell's doubts about running the shop on her own.`,
      `reveal that Nell has decided to refuse the key.`,
    ],
    correctAnswer: 2,
    explanation: `Nell thinks of unfinished jobs, customers who want Mr. Vasquez, and a register only he can open, then asks what happens if she cannot fix something, so the paragraph shows her doubts. How she started at the shop is told in the first paragraph, and his trip to Tucson is explained in the second. She keeps the key and runs the shop in the last paragraph, so she does not refuse it.`,
    difficulty: 'medium',
    yield: 'HIGH',
    part: 7,
  },
  {
    question: `[1] The repair shop had belonged to Mr. Vasquez for thirty-four years, and for the last two of them it had also, unofficially, belonged to Nell. She came in after school to sweep up wire clippings and, gradually, to do more: sorting screws, testing batteries, and finally, under his eye, soldering the loose connection in a neighbor's radio.

[2] On a Thursday in October he handed her a key on a loop of red string. "I'm going to my daughter's in Tucson for the winter," he said. "The shop stays open Saturdays. You know where everything is." He said it the way he might have asked her to pass a screwdriver.

[3] Nell turned the key over in her palm. She thought of the shelf of half-finished jobs, the customers who asked for him by name, the old cash register that only he could coax open. "What if someone brings in something I can't fix?" she asked.

[4] He was already pulling on his coat. "Then you tell them to come back next week," he said, "and in the meantime you figure it out." At the door he paused. "That's all I ever did."

[5] On the first Saturday, a man brought in a lamp that flickered. Nell took it apart twice before she found the frayed wire. When the bulb finally held steady, she realized she had been holding her breath, and that she had not once thought of calling Tucson.

The passage mainly focuses on:`,
    options: [
      `Mr. Vasquez's plans for spending the winter in Tucson.`,
      `Nell gaining confidence after being trusted with the shop.`,
      `the history of one repair shop over thirty-four years.`,
      `Nell's struggle to repair a customer's flickering lamp.`,
    ],
    correctAnswer: 1,
    explanation: `The passage moves from Nell's growing role, to the key and her doubts, to her solving a repair without once thinking of calling for help, so it centers on her gaining confidence. The trip to Tucson is only what sets the story in motion. The shop's thirty-four years are background from the first sentence, and the lamp repair is one episode that shows her change, so it is too narrow.`,
    difficulty: 'medium',
    yield: 'ULTRA_HIGH',
    part: 7,
  },
  {
    question: `[1] For much of the twentieth century, forest managers in the United States treated every wildfire as an enemy to be put out as quickly as possible. The policy seemed to work: the area burned each year fell sharply after the 1930s.

[2] Ecologists now see a cost hidden in that success. Many western pine forests evolved with frequent, low-intensity fires that burned through the undergrowth every decade or so, clearing brush and young trees while leaving the thick-barked older pines unharmed. When those small fires were put out, brush and saplings piled up year after year.

[3] As a result, researchers argue, fires in these forests now tend to be larger and hotter. Instead of creeping along the ground, flames climb the crowded smaller trees into the canopy, where they can kill even the old pines. Drought and rising temperatures have added to the danger, so suppression is not the only cause.

[4] In response, some agencies now set "prescribed burns," small fires lit on purpose under cool, damp conditions to clear the undergrowth. The practice is not without risk; in rare cases a prescribed burn has escaped control. Still, most fire ecologists consider it one of the few tools that can return these forests to their older, more open condition.

Based on paragraphs 2 and 3, which statement best describes why fires in these forests have become larger and hotter?`,
    options: [
      `Suppression let brush build up, and drought and heat added to the danger.`,
      `Prescribed burns that escaped control spread into the canopy.`,
      `Drought alone dried out forests that had never burned before.`,
      `Older pines lost the thick bark that once protected them.`,
    ],
    correctAnswer: 0,
    explanation: `Paragraph 2 says suppressing small fires let brush and saplings pile up, and paragraph 3 adds that drought and heat "have added to the danger," so suppression is one cause among several. Prescribed burns are introduced later as a response, not a cause. The forests had burned every decade or so, and paragraph 3 says suppression also contributed, which rules out drought alone, and the passage never says the pines lost their bark.`,
    difficulty: 'medium',
    yield: 'HIGH',
    part: 7,
  },
  {
    question: `[1] For much of the twentieth century, forest managers in the United States treated every wildfire as an enemy to be put out as quickly as possible. The policy seemed to work: the area burned each year fell sharply after the 1930s.

[2] Ecologists now see a cost hidden in that success. Many western pine forests evolved with frequent, low-intensity fires that burned through the undergrowth every decade or so, clearing brush and young trees while leaving the thick-barked older pines unharmed. When those small fires were put out, brush and saplings piled up year after year.

[3] As a result, researchers argue, fires in these forests now tend to be larger and hotter. Instead of creeping along the ground, flames climb the crowded smaller trees into the canopy, where they can kill even the old pines. Drought and rising temperatures have added to the danger, so suppression is not the only cause.

[4] In response, some agencies now set "prescribed burns," small fires lit on purpose under cool, damp conditions to clear the undergrowth. The practice is not without risk; in rare cases a prescribed burn has escaped control. Still, most fire ecologists consider it one of the few tools that can return these forests to their older, more open condition.

The author's attitude toward prescribed burns is best described as:`,
    options: [
      `doubtful, because prescribed burns sometimes escape control.`,
      `enthusiastic, treating the burns as a risk-free solution.`,
      `neutral, since the author never gives a view of the burns.`,
      `supportive, while acknowledging that the practice has risks.`,
    ],
    correctAnswer: 3,
    explanation: `The author concedes that the practice "is not without risk" and then, with "Still," presents it as one of the few tools that can restore the forests, which is support tempered by honesty. The concession about escaped burns is not doubt, because the author goes on to endorse the practice. Admitting a risk rules out a risk-free view, and the closing endorsement is a clear position, not neutrality.`,
    difficulty: 'medium',
    yield: 'HIGH',
    part: 7,
  },
  {
    question: `Passage A: Public libraries were built to lend books, and they should guard that mission. Every dollar spent on 3-D printers and recording studios is a dollar not spent on the collection, and a library that tries to be everything risks being nothing in particular.

Passage B: When the Ashby branch library opened a "tool shelf" lending drills, sewing machines, and a 3-D printer, its visits doubled within a year. Many of the new visitors, librarians found, also left with books. The best libraries, in this view, lend whatever their communities need in order to learn and make things.

The authors of the two passages would most likely disagree about whether:`,
    options: [
      `public libraries should continue to lend books.`,
      `the Ashby branch's visits rose after the shelf opened.`,
      `libraries should spend money lending items besides books.`,
      `public libraries deserve to receive public funding.`,
    ],
    correctAnswer: 2,
    explanation: `The author of Passage A says money spent on printers and studios is taken from the collection, while Passage B praises lending "whatever their communities need," so they split over lending items other than books. Both authors value book lending, since Passage B even notes that the new visitors borrowed books. Passage A never disputes the Ashby figures, and neither passage questions public funding.`,
    difficulty: 'hard',
    yield: 'HIGH',
    part: 7,
  },
]

export const generateExitQuiz = makeLessonExitQuiz(EXIT_POOL, 'act-reading-main-ideas-act')
