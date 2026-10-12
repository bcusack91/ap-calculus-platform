/**
 * Enhanced ACT full-length Form 1 — Reading (4 passages × 9 questions = 36, 40 min).
 * Passages: a teen's summer at the family hardware store (literary narrative) ·
 * paired passages on remote work and cities (social science) · the craft of
 * translating poetry (humanities) · how octopuses taste with their arms
 * (natural science).
 */
import type { ActFLPassage } from './types'

const PASSAGE_1: ActFLPassage = {
  id: 'act-fl1-r-01',
  title: 'The Pale Oval',
  kind: 'literary-narrative',
  text: `The summer I turned sixteen, I had planned to be a lifeguard. I had passed the certification course in May, bought the red swimsuit, and practiced the bored, sweeping gaze I had seen on the guards at the town pool. Then my mother announced that Ramos Hardware needed her daughter more than the pool did, and that was the end of the discussion.

Ramos Hardware had belonged to my grandfather before it belonged to my mother, and it smelled the way it must have smelled in his day: of cut keys, birdseed, and the faint oily sweetness of the bins where nails were sold by the pound. The floorboards behind the register had been worn pale in an oval where three generations of clerks had stood. I did not want to become the fourth.

My first week, I mostly learned how little I knew. Customers did not ask for things by name. They held up a bent piece of metal and said, "I need the thing that holds this to the other thing." They imitated the noises their furnaces made. One man drew a diagram of his sink on the back of a parking ticket, and I stared at it the way I had stared at the chemistry problems I had been glad to leave behind in June.

Walt Pruitt had worked at the store for thirty-one years, and he could find anything. He was not fast—he walked the aisles with a slight limp and paused often to straighten a row of paint cans—but he never guessed. When a customer described a problem, Walt asked questions until the problem described itself. How old is the house? Does the drip come from the spout or the handle? Is the noise a knock or a hum? Then he would walk straight to a drawer I had not known existed and come back with a part no bigger than a fingernail.

"You're selling too much," he told me on a Thursday in late June. I had just rung up a new faucet for Mrs. Albright, who had come in about a drip.

"She said it leaked," I said.

"It leaks because a forty-cent washer wore out. Now she's paying sixty dollars and calling her nephew to install it." He did not say this unkindly. He said it the way he might have told me a price had been entered wrong.

I went after Mrs. Albright in the parking lot, feeling foolish, and walked her back inside. Walt showed her the washer and sketched, on the back of a receipt, where it went. She thanked him three times. She did not thank me at all, which I decided I deserved.

After that I began to watch Walt the way I had once watched the lifeguards, trying to copy not the look but whatever was underneath it. I noticed that he let customers finish talking even when he knew the answer halfway through. I noticed that he always handled the broken part they brought in, turning it over in his fingers, as if it could tell him something they couldn't.

In August, on an afternoon when Walt was at the dentist, a man came in holding a small brass fitting wrapped in a paper towel. He said his garden hose had "quit." I started to point him toward the new hoses. Then I stopped and asked what he meant by quit. Did water come out at all? Did it spray from somewhere? He said it sprayed from where the hose met the spigot, all over his shoes. I unwrapped the fitting, turned it over, and found the cracked rubber ring seated inside it. The replacement cost a dollar and nine cents.

When Walt came back, numb-lipped and grumbling, I told him about it. He nodded once and went to straighten the paint cans. But the next morning, when a woman came in describing a rattle in her screen door, he glanced toward me and kept walking.

I never did put on the red swimsuit that summer. On my last day before school started, I stood behind the register, on the pale oval in the floorboards, and found that it fit.`,
  questions: [
    {
      id: 'act-fl1-r-01-q1',
      question: 'The passage portrays Walt Pruitt most strongly as someone who:',
      options: [
        'works quickly to keep the line at the register short.',
        'patiently gathers details before deciding what a customer needs.',
        'resents having to train a new clerk who is the owner\'s daughter.',
        'prefers stocking shelves to talking with customers.',
      ],
      correctIndex: 1,
      explanation:
        'The narrator says Walt "never guessed" and "asked questions until the problem described itself," and she later notes that he let customers finish talking and handled the broken parts they brought in.',
      optionExplanations: [
        'This reverses a stated detail. The narrator says plainly that Walt "was not fast" and that he walked the aisles slowly, pausing to straighten paint cans, so speed is not the trait the passage emphasizes.',
        'Correct. Walt asks question after question about the house, the drip and the noise, lets customers finish speaking and examines the parts they bring, all of which show careful, patient information-gathering before he acts.',
        'Nothing in the passage suggests resentment. Walt corrects the narrator "not unkindly," the way he would point out a mistyped price, and he later trusts her with a customer, which is the opposite of resenting her.',
        'This seizes on his habit of straightening paint cans but ignores the passage\'s focus. Most of what the narrator describes is Walt questioning and listening to customers, which shows he engages with them closely.',
      ],
      skill: 'KID',
      difficulty: 'easy',
    },
    {
      id: 'act-fl1-r-01-q2',
      question:
        'In the paragraph about the man with the brass fitting, the narrator most likely places the word "quit" in quotation marks to indicate that it:',
      options: [
        'is a technical term that hardware clerks use for broken hoses.',
        'was a word the narrator found humorous and later repeated to Walt.',
        'was the customer\'s own vague description, which needed clarifying.',
        'shows that the customer was angry about the failed hose.',
      ],
      correctIndex: 2,
      explanation:
        'The quotation marks flag the customer\'s imprecise word; the narrator then asks "what he meant by quit," questioning him the way Walt would until the real problem emerges.',
      optionExplanations: [
        'Nothing marks "quit" as trade vocabulary. The narrator has to ask what the customer means by it, which shows it is an ordinary, unclear word rather than a precise term clerks rely on.',
        'The passage never says the narrator found the word funny, and her report to Walt describes the repair, not the customer\'s wording. This invents a motive the text does not support.',
        'Correct. The narrator immediately asks "what he meant by quit," treating the word as an unclear description that must be pinned down, which is exactly the habit she has learned from Walt.',
        'Quotation marks here signal the customer\'s exact wording, not his mood. The passage gives no sign of anger; the man simply reports that water sprayed onto his shoes.',
      ],
      skill: 'CS',
      difficulty: 'medium',
    },
    {
      id: 'act-fl1-r-01-q3',
      question: 'According to the passage, Walt thinks the narrator is "selling too much" because she:',
      options: [
        'sold a new faucet when a cheap washer would have fixed it.',
        'persuaded Mrs. Albright to buy tools she did not know how to use.',
        'charged Mrs. Albright more than the price marked on the faucet.',
        'recommended a nephew\'s repair service instead of a store product.',
      ],
      correctIndex: 0,
      explanation:
        'Walt explains that the faucet leaks "because a forty-cent washer wore out," yet the narrator sold Mrs. Albright a sixty-dollar faucet that someone must now install.',
      optionExplanations: [
        'Correct. Walt contrasts the "forty-cent washer" that actually failed with the sixty dollars Mrs. Albright is now paying, so his complaint is that the narrator sold far more than the problem required.',
        'The passage mentions no tools. Walt notes that Mrs. Albright will call her nephew to install the faucet, but his objection is to the unnecessary purchase, not to her ability to use anything.',
        'Walt compares his complaint to how he "might have told me a price had been entered wrong," but that is a comparison about his tone. He never says she was overcharged for the faucet itself.',
        'The nephew is someone Mrs. Albright will call to install the faucet. The narrator never recommends him, so this misreads who is involved and why.',
      ],
      skill: 'KID',
      difficulty: 'easy',
    },
    {
      id: 'act-fl1-r-01-q4',
      question:
        'It can most reasonably be inferred that when Walt "glanced toward me and kept walking" as a woman described her screen door, he was signaling that he:',
      options: [
        'was still too uncomfortable from the dentist to help customers.',
        'disapproved of how the narrator had handled the garden hose.',
        'wanted the narrator to restock the paint cans while he worked.',
        'trusted the narrator to work out the customer\'s problem herself.',
      ],
      correctIndex: 3,
      explanation:
        'The moment comes the morning after the narrator solved the hose problem on her own; Walt glances at her and leaves the customer to her, a quiet sign of confidence.',
      optionExplanations: [
        'Walt was "numb-lipped and grumbling" the afternoon he returned, but this moment happens the next morning. Nothing suggests he is still in discomfort, so this misplaces a detail in time.',
        'His only reaction to the hose story was to nod once, and the next morning he hands her a customer. Leaving her a customer would make no sense if he disapproved of her work.',
        'The paint cans are Walt\'s own habit; he straightens them himself. The glance comes as a customer starts describing a problem, so it concerns that customer, not a chore.',
        'Correct. Coming right after she diagnosed the hose problem, Walt\'s glance and his decision to keep walking leave the new customer to the narrator, a wordless sign that he now trusts her judgment.',
      ],
      skill: 'KID',
      difficulty: 'medium',
    },
    {
      id: 'act-fl1-r-01-q5',
      question:
        'In the third paragraph, the narrator compares the diagram drawn on a parking ticket to her chemistry problems mainly to emphasize:',
      options: [
        'how puzzling she first found customers\' descriptions.',
        'that she had been a strong science student before the summer began.',
        'that most hardware repairs depend on knowledge of chemistry.',
        'how carelessly customers drew plans of their own homes.',
      ],
      correctIndex: 0,
      explanation:
        'The paragraph opens "I mostly learned how little I knew," and staring at the sketch as she stared at chemistry problems stresses her bewilderment.',
      optionExplanations: [
        'Correct. The paragraph is about how little the narrator knew in her first week, and comparing the sketch to chemistry problems she was "glad to leave behind" conveys her confusion at what customers were telling her.',
        'Being "glad to leave behind" chemistry problems suggests she found them hard or unpleasant, not that she excelled. The comparison is about confusion, not about her past success.',
        'This takes the comparison literally. The narrator compares the feeling of confusion, not the subject matter, and nothing in the passage connects hardware repair to chemistry.',
        'The passage never criticizes the man\'s drawing. The point is that the narrator could not make sense of it, so the comparison reflects her inexperience rather than his carelessness.',
      ],
      skill: 'CS',
      difficulty: 'medium',
    },
    {
      id: 'act-fl1-r-01-q6',
      question: 'According to the passage, the man\'s garden hose sprayed water because:',
      options: [
        'the hose had split along its length from age and sun.',
        'a small seal tucked inside the brass fitting had failed.',
        'the spigot on the house had broken and needed replacing.',
        'the brass fitting itself had cracked where it met the spigot.',
      ],
      correctIndex: 1,
      explanation:
        'When the narrator turns the fitting over, the damaged part is the rubber ring sitting within it, a small seal that cost about a dollar to replace. A failed seal at that joint explains the spray where hose and spigot met.',
      optionExplanations: [
        'The customer says the water sprayed from where the hose joined the spigot, not along its length. The narrator was about to sell him a new hose but stopped once she learned where the leak actually was.',
        'Correct. The rubber ring sitting within the fitting is a seal, and the narrator finds it cracked. A broken seal at the connection explains why water sprayed from the joint, and its one-dollar price shows how small the fault was.',
        'The spigot is mentioned only as the place the hose connected. The narrator examines the fitting the man brought in and finds the fault there, not in anything attached to the house.',
        'This is a near miss. The fault was at the fitting, but the narrator says the cracked part was the rubber ring inside it, not the brass piece itself, which she only had to unwrap and turn over.',
      ],
      skill: 'KID',
      difficulty: 'easy',
    },
    {
      id: 'act-fl1-r-01-q7',
      question: 'Which of the following events occurs first chronologically?',
      options: [
        'Walt sketches on a receipt where the washer should go.',
        'The narrator asks a customer what he means by "quit."',
        'Walt leaves a customer with a rattling screen door to the narrator.',
        'The narrator rings up a new faucet for Mrs. Albright.',
      ],
      correctIndex: 3,
      explanation:
        'In late June the narrator sells Mrs. Albright a faucet; Walt then sketches the washer for her; the hose customer comes in August; and the screen-door customer arrives the morning after that.',
      optionExplanations: [
        'Walt sketches the washer only after the narrator has chased Mrs. Albright into the parking lot and brought her back, which happens after the faucet has already been rung up.',
        'The hose customer comes "in August," well after the late-June episode with Mrs. Albright, so this event is near the end of the sequence rather than the start.',
        'This happens "the next morning" after the hose repair in August, which makes it the latest of these events, not the earliest.',
        'Correct. The faucet sale is what prompts Walt\'s "You\'re selling too much" in late June, so it comes before the washer sketch, the August hose repair and the screen-door customer.',
      ],
      skill: 'KID',
      difficulty: 'medium',
    },
    {
      id: 'act-fl1-r-01-q8',
      question: 'The final paragraph\'s reference to the pale oval in the floorboards primarily serves to:',
      options: [
        'suggest that the narrator plans to quit the store once school resumes.',
        'show that the store has not been well maintained over the years.',
        'echo an earlier image to show the narrator\'s new sense of belonging.',
        'reveal that the narrator\'s grandfather once stood in the same spot.',
      ],
      correctIndex: 2,
      explanation:
        'Early on, the narrator says she "did not want to become the fourth" clerk to stand on the worn oval; at the end she stands on it and finds "that it fit," marking her changed attitude.',
      optionExplanations: [
        'The paragraph says the oval "fit," which signals belonging, not departure. Mentioning her last day before school marks the end of summer, not a decision to leave the store.',
        'The worn floor is a sign of long use by generations of clerks, not of neglect. Reading it as poor upkeep misses the image\'s role as a symbol of family tradition.',
        'Correct. The oval first appears when the narrator says she did not want to become the fourth generation to stand there. Returning to it, she finds it "fit," which shows her resistance has turned to acceptance.',
        'The grandfather may well have stood there, since three generations of clerks did, but the passage stated that much earlier. The ending\'s point is the narrator\'s new feeling, not a fresh family fact.',
      ],
      skill: 'CS',
      difficulty: 'hard',
    },
    {
      id: 'act-fl1-r-01-q9',
      question:
        'The narrator\'s remark that Mrs. Albright "did not thank me at all, which I decided I deserved" most strongly suggests that the narrator:',
      options: [
        'recognized that her own mistake had caused the trouble.',
        'felt that Mrs. Albright had unfairly ignored her efforts.',
        'believed that Walt had taken credit for her own idea.',
        'was relieved that the return had gone so smoothly.',
      ],
      correctIndex: 0,
      explanation:
        'Having sold Mrs. Albright an unnecessary faucet, the narrator accepts that she earned no thanks, showing she sees the problem as her own error.',
      optionExplanations: [
        'Correct. The narrator had sold an unneeded sixty-dollar faucet. Deciding she "deserved" no thanks shows she accepts responsibility for the mistake that Walt then had to fix.',
        'Saying she "deserved" to go unthanked is the opposite of feeling wronged. The narrator accepts the slight as fair rather than resenting it, so this reverses her attitude.',
        'The washer solution was Walt\'s idea, not hers; she had sold the faucet. Nothing suggests he took credit for anything she thought of, so this misassigns who solved the problem.',
        'Relief might be a plausible feeling, but the remark is about deserving no thanks, which points to her sense of fault. The passage never describes her as relieved.',
      ],
      skill: 'KID',
      difficulty: 'medium',
    },
  ],
}

const PASSAGE_2: ActFLPassage = {
  id: 'act-fl1-r-02',
  title: 'Remote Work and the City',
  kind: 'paired',
  text: `**Passage A: The Empty Lunch Counter**

For most of the twentieth century, the downtown office was the engine of the American city. Office workers rode the trains in the morning, filled the sandwich shops at noon, and lingered at bars and theaters after five. Their presence paid, directly and indirectly, for a great deal: the transit fares that kept buses running, the commercial property taxes that helped fund schools, the steady foot traffic that let a shoe-repair shop or a bookstore survive on a side street.

Remote work has quietly withdrawn that engine. When employees spend two or three days a week at home, the office tower does not close, but it empties by degrees. The lunch counter that once sold four hundred sandwiches a day now sells two hundred, and at two hundred it cannot cover its rent. The transit agency, which depends on fares, cuts service on the routes that have lost riders, which makes commuting less convenient, which in turn persuades still more workers to stay home. Each loss feeds the next.

Defenders of remote work point out that the spending has not vanished; it has moved outward, to the neighborhoods and suburbs where workers now buy their coffee near home. Economists have even given the pattern a name: the "doughnut effect," in which activity drains from the center and collects in a ring around it. But a doughnut has a hole, and the hole is where much of a city's shared life once happened. A suburban coffee shop serves a neighborhood. A downtown plaza serves everyone, including people who cannot afford to live in the ring.

Nor is it clear that the hole will fill itself. Converting an office tower into apartments sounds simple, but many towers were built with deep floors that leave interior rooms far from any window, and plumbing designed for a few large restrooms cannot easily serve hundreds of kitchens and bathrooms. Some conversions will succeed. Many buildings will simply sit, partly vacant, for years.

A city can survive the loss of a factory or a stadium. It is less certain that a city can survive the loss of its daily crowd.

**Passage B: The City Was Never Just the Office**

Predictions of the city's death have a long history. When the automobile made distant suburbs easy to reach, and again when telephones and then computers made distance seem less important, commentators announced that people would no longer need to crowd together in dense centers. Each time, cities changed shape and endured.

Remote work is the latest such prediction, and it confuses the office with the city. Offices were one reason people came downtown, but only one. People also came to meet strangers, to see a show, to hear about a job they had not known existed, to fall in love. None of those reasons has been made obsolete by video calls. If anything, workers who spend their days alone at a kitchen table may want the crowded street more, not less.

What remote work has done is loosen the grip of the commute. A worker who no longer travels downtown five days a week may choose a place to live for its parks, its schools, or its music scene rather than its distance from headquarters. Smaller cities that once lost their young people to a handful of large metropolitan areas have begun to keep some of them. Residential neighborhoods that once emptied every weekday morning now have customers at noon, and some of their long-vacant storefronts have reopened as cafés and hardware stores.

Downtowns that depended on a single use will have to change, and the change will be painful for the businesses caught in the middle of it. But the downtowns that thrive will be the ones that give people reasons to come other than obligation: housing, culture, public spaces worth lingering in. A district that people visit because they want to is sturdier than one they visit because an employer requires it.

The city is not losing its crowd. The crowd is deciding, more freely than before, where it wants to be.`,
  questions: [
    {
      id: 'act-fl1-r-02-q1',
      question: 'According to Passage A, cuts to transit service tend to worsen over time because:',
      options: [
        'transit agencies move their spending to suburban bus routes.',
        'office towers converted to apartments generate fewer riders.',
        'reduced service makes commuting harder, so more people stay home.',
        'property taxes that once funded transit now go to schools instead.',
      ],
      correctIndex: 2,
      explanation:
        'Passage A describes a cycle: lost riders lead to service cuts, which make commuting "less convenient," which "persuades still more workers to stay home."',
      optionExplanations: [
        'Passage A says spending has moved toward the suburbs, but that refers to workers buying coffee near home, not to transit agencies relocating routes. This blends two separate points.',
        'Passage A raises office conversions only to say they are difficult and slow. It never links converted buildings to ridership, so this invents a cause the passage does not give.',
        'Correct. Passage A traces a loop: fewer riders lead to service cuts, the cuts make commuting less convenient, and that persuades more workers to stay home, so "each loss feeds the next."',
        'Passage A lists transit fares and property taxes as separate things downtown workers paid for. It never says tax money shifted from transit to schools, so this distorts a list into a cause.',
      ],
      skill: 'KID',
      difficulty: 'easy',
    },
    {
      id: 'act-fl1-r-02-q2',
      question:
        'The author of Passage A mentions deep floors and restroom plumbing primarily in order to:',
      options: [
        'argue that office towers should be torn down instead of reused.',
        'explain why turning office towers into housing is harder than it seems.',
        'show that most office buildings were poorly built in the twentieth century.',
        'suggest that apartment dwellers prefer rooms without windows.',
      ],
      correctIndex: 1,
      explanation:
        'The details follow the claim that conversion "sounds simple" and illustrate why it is not: interior rooms would lack windows and the plumbing was not designed for many units.',
      optionExplanations: [
        'Passage A says some conversions "will succeed" and that other buildings will sit partly vacant. It never recommends demolition, so this pushes the author\'s caution into a position the passage does not take.',
        'Correct. The details come right after the author says conversion "sounds simple," and they show the practical obstacles: interior rooms far from windows and plumbing sized for a few restrooms rather than hundreds of units.',
        'The towers were designed well for offices; the problem is that their layout does not suit apartments. Calling them poorly built misreads a mismatch of purpose as a flaw in construction.',
        'Rooms "far from any window" are presented as a drawback for apartments, not a selling point. This reverses the significance of the detail.',
      ],
      skill: 'CS',
      difficulty: 'easy',
    },
    {
      id: 'act-fl1-r-02-q3',
      question:
        'Passage A\'s author responds to the claim that spending "has not vanished" by arguing that:',
      options: [
        'the claim is false, because total spending has fallen sharply.',
        'suburban businesses will soon suffer the same losses that downtown businesses have.',
        'economists invented the "doughnut effect" to hide downtown losses.',
        'shifted spending cannot replace a downtown\'s role as a place shared by everyone.',
      ],
      correctIndex: 3,
      explanation:
        'The author grants that spending has moved but says the doughnut\'s "hole" is where shared city life happened; a downtown plaza "serves everyone," while a suburban shop serves only a neighborhood.',
      optionExplanations: [
        'The author does not dispute that spending moved. The response begins "But a doughnut has a hole," accepting the shift and objecting to what is lost, so calling the claim false misstates the argument.',
        'Passage A says nothing about future losses in the suburbs. Its concern is what the center loses, so this predicts a problem the author never raises.',
        'The author uses the economists\' term to make a point, not to accuse them of anything. Nothing suggests the name was meant to conceal losses.',
        'Correct. The author accepts the shift but argues that the "hole" is where shared life happened: a suburban shop serves one neighborhood, while a downtown plaza serves everyone, including people who cannot afford the ring.',
      ],
      skill: 'KID',
      difficulty: 'medium',
    },
    {
      id: 'act-fl1-r-02-q4',
      question: 'According to Passage B, one way remote work has changed some smaller cities is by:',
      options: [
        'allowing them to retain young adults who would once have moved away.',
        'drawing companies that left large cities to build new offices there.',
        'causing their music scenes to drift toward larger metropolitan areas.',
        'leaving them with the same office vacancies that large downtowns face.',
      ],
      correctIndex: 0,
      explanation:
        'Passage B explains that workers freed from the commute can choose where to live, so smaller cities that used to watch their young people leave for a few big metropolitan areas are now holding on to some of them.',
      optionExplanations: [
        'Correct. Passage B says smaller cities that once lost their young people to large metropolitan areas now keep some of them, because remote workers can choose a home for its parks, schools or music rather than its commute.',
        'Passage B never mentions new construction in smaller cities. The change it describes concerns where workers choose to live, not where companies decide to build offices.',
        'Music scenes appear in Passage B as one attraction that might draw a worker to a place. The passage never says smaller cities lost theirs, so this reverses the role of the detail.',
        'Passage B ties painful change to downtowns that "depended on a single use," not to smaller cities, which it presents as gaining residents from remote work rather than suffering vacancies.',
      ],
      skill: 'KID',
      difficulty: 'easy',
    },
    {
      id: 'act-fl1-r-02-q5',
      question:
        'Passage B suggests that people who work alone at home all day may be especially likely to:',
      options: [
        'stop visiting downtowns altogether.',
        'move to suburbs with larger homes.',
        'seek out busy public places.',
        'demand better video-calling tools.',
      ],
      correctIndex: 2,
      explanation:
        'Passage B says workers "alone at a kitchen table may want the crowded street more, not less."',
      optionExplanations: [
        'Passage B argues the opposite: isolation at home may make people want the crowded street "more, not less." This is the view Passage B is rejecting.',
        'Passage B mentions choosing a place for its parks or schools, but it never says isolated workers want bigger houses in the suburbs. This imports an assumption the passage does not make.',
        'Correct. Passage B says workers who spend their days alone at a kitchen table "may want the crowded street more, not less," meaning isolation could draw them toward busy public places.',
        'Video calls appear only in the claim that they have not made the reasons for gathering obsolete. Passage B says nothing about workers wanting better technology.',
      ],
      skill: 'KID',
      difficulty: 'medium',
    },
    {
      id: 'act-fl1-r-02-q6',
      question: 'The authors of both passages would most likely agree that:',
      options: [
        'remote work will make city transit systems unnecessary.',
        'cities have survived every challenge in their long history without changing.',
        'most office towers will become apartments within a decade.',
        'downtown businesses that relied on office workers face real hardship.',
      ],
      correctIndex: 3,
      explanation:
        'Passage A describes the lunch counter that "cannot cover its rent," and Passage B concedes that change "will be painful for the businesses caught in the middle of it."',
      optionExplanations: [
        'Neither author says transit will become unnecessary. Passage A worries about transit cuts, and Passage B does not discuss transit at all, so neither passage supports this extreme claim.',
        'Passage B says cities "changed shape and endured," which means they did change. Passage A doubts cities will survive unchanged, so neither author would accept "unchanged."',
        'Passage A predicts that many towers will "simply sit, partly vacant, for years," and Passage B does not address conversions. Neither predicts widespread conversion within a decade.',
        'Correct. Passage A describes a lunch counter that "cannot cover its rent," and Passage B grants that change "will be painful for the businesses caught in the middle," so both acknowledge the hardship.',
      ],
      skill: 'IKI',
      difficulty: 'medium',
    },
    {
      id: 'act-fl1-r-02-q7',
      question:
        'Based on Passage B, its author would most likely respond to Passage A\'s closing doubt that a city can "survive the loss of its daily crowd" by asserting that:',
      options: [
        'a city has never actually depended on crowds of people.',
        'the crowd has not disappeared but is choosing where to gather.',
        'downtown crowds will return once companies\' office leases expire.',
        'only cities with stadiums can survive losing office workers.',
      ],
      correctIndex: 1,
      explanation:
        'Passage B closes, "The city is not losing its crowd. The crowd is deciding, more freely than before, where it wants to be," which directly answers Passage A\'s worry.',
      optionExplanations: [
        'Passage B values crowds; it lists meeting strangers and seeing shows as reasons people gather. Its point is that the crowd persists, not that cities never needed one.',
        'Correct. Passage B ends by saying the city "is not losing its crowd" but that the crowd is deciding "where it wants to be," which directly rejects the premise of Passage A\'s closing doubt.',
        'Passage B never predicts a return to the old commuting pattern. It expects downtowns to thrive only by offering reasons "other than obligation," not by waiting for workers to come back.',
        'Stadiums appear only in Passage A, as an example of a loss a city can survive. Passage B never mentions them, so this response has no basis in its argument.',
      ],
      skill: 'IKI',
      difficulty: 'medium',
    },
    {
      id: 'act-fl1-r-02-q8',
      question:
        'The author of Passage A would most likely view the reopened neighborhood cafés described in Passage B as:',
      options: [
        'an instance of the "doughnut effect" that does not replace what downtown offered.',
        'proof that remote work has strengthened every part of the city.',
        'a sign that downtown lunch counters will soon recover.',
        'evidence that office conversions have worked well.',
      ],
      correctIndex: 0,
      explanation:
        'Passage A already accounts for spending moving outward and argues that a neighborhood shop "serves a neighborhood," not the whole city, so it would treat the cafés as the ring of the doughnut.',
      optionExplanations: [
        'Correct. Passage A already describes spending moving to neighborhoods and calls this the "doughnut effect," arguing that a neighborhood shop serves only its neighborhood while a downtown serves everyone.',
        'Passage A\'s author sees the downtown "hole" as a real loss. Treating the cafés as proof that every part of the city gained would contradict that author\'s central concern.',
        'Passage A predicts that downtown businesses will keep struggling. Neighborhood cafés gaining customers would, in that author\'s view, reflect spending that has left downtown, not a coming recovery.',
        'The cafés in Passage B are reopened storefronts in residential neighborhoods, not converted office towers. Passage A doubts conversions will go smoothly, so this mixes up two unrelated details.',
      ],
      skill: 'IKI',
      difficulty: 'hard',
    },
    {
      id: 'act-fl1-r-02-q9',
      question: 'Which statement best describes a difference between how the two passages develop their arguments?',
      options: [
        'Passage A relies on survey data and statistics, while Passage B relies on personal stories and anecdotes.',
        'Passage A traces a chain of effects, while Passage B recalls past predictions of decline.',
        'Passage A considers only the suburbs and their shops, while Passage B considers only downtown districts.',
        'Passage A offers a detailed policy proposal, while Passage B criticizes that proposal point by point.',
      ],
      correctIndex: 1,
      explanation:
        'Passage A follows a sequence of consequences (fewer workers, failing shops, transit cuts), while Passage B opens with earlier predictions of the city\'s death that proved wrong.',
      optionExplanations: [
        'Neither passage cites surveys or tells personal stories. Both argue through general examples, such as the lunch counter and the reopened storefronts, so this describes evidence neither author uses.',
        'Correct. Passage A follows a sequence in which each loss feeds the next, while Passage B begins by recalling earlier predictions of the city\'s death and treats remote work as the latest one.',
        'Passage A centers on downtown, and Passage B discusses neighborhoods, smaller cities and downtowns. This reverses and narrows what each passage actually covers.',
        'Neither passage proposes a policy, and Passage B does not respond to any proposal. The authors offer competing interpretations of the same trend, not a plan and a rebuttal.',
      ],
      skill: 'IKI',
      difficulty: 'hard',
    },
  ],
}

const PASSAGE_3: ActFLPassage = {
  id: 'act-fl1-r-03',
  title: 'The Sparrow and the Eagle',
  kind: 'humanities',
  text: `"Poetry is what gets lost in translation." The remark is often attributed to Robert Frost, and translators have been quarreling with it ever since. They do not deny that something is lost. They deny that loss is the end of the story.

To see the problem, consider what a poem is made of. A news article can be translated almost entirely by its meaning: if the facts arrive intact, little else matters. A poem carries meaning too, but it also carries sound—rhyme, rhythm, the pattern of vowels a reader feels in the mouth—and it carries form, the shape of its lines on the page. A word in a poem may be there partly for what it means and partly because it rhymes with a word three lines earlier. The translator who keeps the meaning may lose the rhyme; the translator who keeps the rhyme may have to bend the meaning. No dictionary settles the matter, because the matter is a choice.

Some translators have chosen meaning without apology. When Vladimir Nabokov translated Alexander Pushkin's verse novel *Eugene Onegin* into English, he set aside the intricate rhymed stanza from which Pushkin had built the poem and produced a deliberately literal, unrhymed version, accompanied by volumes of commentary explaining what the lines meant and how they worked in Russian. Nabokov insisted that only such literal fidelity was honest; a rhymed version, in his view, would show readers lines Pushkin had never written. Critics praised the accuracy of his translation and complained about its awkwardness, and Nabokov seemed to regard the awkwardness as an acceptable price.

Other translators have gone to the opposite extreme. In the nineteenth century, Edward FitzGerald turned quatrains attributed to the Persian poet Omar Khayyám into English verse so freely that scholars still debate how much of his *Rubáiyát* reflects Khayyám at all. FitzGerald was unrepentant. In a letter to a friend, he wrote that it was "better a live sparrow than a stuffed eagle." His sparrow became one of the most widely read poems of the Victorian era.

Most working translators live somewhere between Nabokov's eagle and FitzGerald's sparrow, and their days are made of small bargains. An English translator of Dante's *Divine Comedy* confronts terza rima, a chain of interlocking rhymes that Italian, with its abundance of words ending in vowels, supplies easily and English does not. Some translators keep the full pattern and accept strained word choices to do it. Some keep only an occasional half-rhyme as a reminder of the original's music. Some keep the three-line stanzas and drop the rhyme altogether. Each solution gives something up, and each has defenders who believe the others gave up the wrong thing.

What the quarrel reveals is that a poem is not a single object that either survives the crossing or does not. It is a bundle of qualities—sense, sound, form, tone—and no translation can carry all of them at once. A translator must decide which ones matter most in a particular poem. A comic poem that loses its jokes has lost more than one that loses its line breaks. A hymn that loses its rhythm may no longer be singable.

Seen this way, translation is less like copying and more like performing. A pianist playing Chopin makes hundreds of decisions that the printed score does not dictate, and no one concludes that the music is therefore lost. Readers who compare several translations of the same poem often find that each reveals something the others missed, the way different performances of a sonata bring out different lines. The original remains the original. But the translations, taken together, can circle it closely enough that a reader comes to know its shape.

If poetry is what gets lost in translation, then perhaps it is also what the translator goes looking for.`,
  questions: [
    {
      id: 'act-fl1-r-03-q1',
      question: 'Which of the following best states the main idea of the passage?',
      options: [
        'Poems cannot truly be translated, so serious readers should learn the original languages.',
        'Nabokov\'s literal method is the most reliable and honest way to translate any poem.',
        'Poetry translation has improved steadily since the nineteenth century as methods grew more precise.',
        'Translating a poem means choosing which of its qualities to keep, and those choices have value.',
      ],
      correctIndex: 3,
      explanation:
        'The passage explains that no translation can carry all of a poem\'s qualities, so translators must choose, and it ends by comparing translation to performance that reveals the original.',
      optionExplanations: [
        'The author grants that something is lost but argues that translations, taken together, can help a reader "know its shape." The passage never tells readers to learn other languages, so this overstates the loss.',
        'Nabokov is one extreme the author describes, alongside FitzGerald. The author says most translators work "somewhere between" the two, so the passage does not endorse literalism as best.',
        'The passage compares approaches from different periods but never claims that translation has improved over time. This invents a historical trend the author does not describe.',
        'Correct. The author explains that a poem is "a bundle of qualities" no translation can fully carry, so translators must choose, and argues that these choices, like performances, can reveal the original.',
      ],
      skill: 'KID',
      difficulty: 'medium',
    },
    {
      id: 'act-fl1-r-03-q2',
      question: 'According to the passage, Nabokov\'s translation of *Eugene Onegin*:',
      options: [
        'gave up Pushkin\'s rhymed stanza for literal meaning and added extensive notes.',
        'kept Pushkin\'s rhymes but changed many of the poem\'s events and characters to fit them.',
        'was praised by critics as both accurate and graceful.',
        'was completed with help from Edward FitzGerald.',
      ],
      correctIndex: 0,
      explanation:
        'The passage says Nabokov "set aside the intricate rhymed stanza" and produced a "deliberately literal, unrhymed version" with "volumes of commentary."',
      optionExplanations: [
        'Correct. The passage says Nabokov set aside Pushkin\'s "intricate rhymed stanza" in favor of a "deliberately literal, unrhymed version" accompanied by "volumes of commentary," which this choice paraphrases.',
        'This describes the opposite approach. Nabokov dropped the rhyme to protect the meaning, and the passage says he objected to showing readers lines Pushkin "had never written."',
        'Critics praised the accuracy but "complained about its awkwardness." Calling the translation graceful contradicts the passage\'s report of its reception.',
        'FitzGerald worked in the nineteenth century on a Persian poem and appears in the passage as Nabokov\'s opposite. Nothing connects the two men\'s work.',
      ],
      skill: 'KID',
      difficulty: 'easy',
    },
    {
      id: 'act-fl1-r-03-q3',
      question: 'In the second paragraph, the author contrasts a news article with a poem mainly to:',
      options: [
        'argue that journalism is a less demanding form of writing than poetry.',
        'suggest that news articles should be translated with more care.',
        'show why poems pose a problem in translation that factual prose largely avoids.',
        'explain how poets borrow techniques from newspaper reporting.',
      ],
      correctIndex: 2,
      explanation:
        'A news article can be translated "almost entirely by its meaning," while a poem also carries sound and form, so keeping one quality may cost another.',
      optionExplanations: [
        'The contrast concerns what each kind of text carries, not which is harder to write. The author makes no judgment about journalism, so this mistakes a comparison of translation for a ranking of genres.',
        'The author says that if a news article\'s facts "arrive intact, little else matters," which implies such articles are fairly easy to translate, not that they need more care.',
        'Correct. A news article can be translated "almost entirely by its meaning," but a poem also carries sound and form, so the contrast shows why poetry forces choices that factual prose mostly does not.',
        'Nothing in the paragraph suggests that poets borrow from reporters. The two kinds of writing are contrasted, not connected, so this reverses the purpose of the comparison.',
      ],
      skill: 'CS',
      difficulty: 'easy',
    },
    {
      id: 'act-fl1-r-03-q4',
      question: 'The passage suggests that terza rima is harder to sustain in English than in Italian mainly because English:',
      options: [
        'seldom arranges its poems in stanzas of three lines each.',
        'offers fewer words whose endings naturally rhyme together.',
        'adopted rhyme from Italian poets much later in its history.',
        'relies on longer words that are hard to fit into short lines.',
      ],
      correctIndex: 1,
      explanation:
        'Italian supplies terza rima\'s interlocking rhymes easily because so many of its words end in vowels, and the passage says English does not. The implication is that English has a smaller stock of naturally rhyming endings.',
      optionExplanations: [
        'Three-line stanzas are part of the form itself, and the passage notes that some English translators keep them. The difficulty it describes lies in finding rhymes, not in the stanza shape.',
        'Correct. The passage credits Italian\'s ease to its many vowel-ending words, which make rhymes plentiful, and says English does not supply them as easily. That implies English has fewer endings that rhyme naturally.',
        'The passage makes no claim about when or from whom English took up rhyme. This adds a historical explanation the author never offers.',
        'The passage says nothing about the length of English words. It locates the problem in how readily words rhyme, so this substitutes a cause the text does not support.',
      ],
      skill: 'KID',
      difficulty: 'medium',
    },
    {
      id: 'act-fl1-r-03-q5',
      question:
        'In the fifth paragraph, the author uses the phrase "Nabokov\'s eagle" to refer to a translation that is:',
      options: [
        'grand and ambitious in its use of rhyme.',
        'more popular with readers than any other version.',
        'loose but full of energy and charm.',
        'faithful to the original but lacking its life.',
      ],
      correctIndex: 3,
      explanation:
        'The phrase borrows FitzGerald\'s "stuffed eagle," an image of something accurate in form but lifeless, and applies it to Nabokov\'s literal translation.',
      optionExplanations: [
        'An eagle may suggest grandeur, but in FitzGerald\'s line the eagle is "stuffed," and Nabokov dropped the rhyme. This reads the image without its context and gets the rhyme detail backward.',
        'The passage says FitzGerald\'s free version, the sparrow, became widely read, while critics found Nabokov\'s awkward. Popularity belongs to the other side of the comparison.',
        'This describes FitzGerald\'s "live sparrow," a free translation with life in it. The phrase in question refers to the opposite extreme, so this mixes up the two halves of the image.',
        'Correct. The phrase echoes FitzGerald\'s "stuffed eagle," something impressive and exact in outline but dead, and applies it to Nabokov\'s accurate, literal and awkward translation.',
      ],
      skill: 'CS',
      difficulty: 'hard',
    },
    {
      id: 'act-fl1-r-03-q6',
      question: 'Based on the passage, the author would most likely agree that a translator of a comic poem should:',
      options: [
        'keep the original line breaks even if that means losing some jokes.',
        'translate each word literally and explain the humor in notes.',
        'give priority to keeping the poem funny over preserving its line breaks.',
        'avoid translating such poems, since humor never crosses languages.',
      ],
      correctIndex: 2,
      explanation:
        'The author says "a comic poem that loses its jokes has lost more than one that loses its line breaks," so humor matters most in that kind of poem.',
      optionExplanations: [
        'This reverses the author\'s ranking. The passage says a comic poem that loses its jokes "has lost more" than one that loses its line breaks, so line breaks should yield to humor.',
        'This applies Nabokov\'s literal, annotated method, which the author presents as one extreme. For a comic poem, the author implies that keeping the jokes alive matters more than literal fidelity.',
        'Correct. The author argues that translators must decide which qualities matter most in a particular poem and says a comic poem that loses its jokes "has lost more" than one that loses its line breaks.',
        'The author never says humor cannot be translated; the comparison assumes a translator can try to keep a poem\'s jokes. This overstates the loss the passage describes.',
      ],
      skill: 'KID',
      difficulty: 'medium',
    },
    {
      id: 'act-fl1-r-03-q7',
      question:
        'The author supports the claim that translation is "less like copying and more like performing" mainly by:',
      options: [
        'comparing translation to a pianist interpreting a score.',
        'citing a survey of translators about their working methods.',
        'quoting Nabokov\'s own description of how he translated Pushkin.',
        'listing the languages into which Dante has been translated.',
      ],
      correctIndex: 0,
      explanation:
        'The author points to a pianist playing Chopin, who makes decisions "the printed score does not dictate," and notes that different performances bring out different lines.',
      optionExplanations: [
        'Correct. The author supports the claim with an analogy: a pianist playing Chopin makes many decisions the score does not dictate, yet no one says the music is lost, just as different translations reveal different things.',
        'The passage cites no survey. It reports the views of individual translators and relies on an analogy, so this names a kind of evidence the author never uses.',
        'Nabokov is discussed in an earlier paragraph as an example of literalism. The claim about performing is supported by the pianist comparison, not by anything Nabokov said.',
        'The passage discusses only English translations of Dante and lists no other languages. This invents evidence that does not appear in the passage.',
      ],
      skill: 'IKI',
      difficulty: 'medium',
    },
    {
      id: 'act-fl1-r-03-q8',
      question: 'According to the passage, FitzGerald\'s *Rubáiyát*:',
      options: [
        'was a word-for-word translation of Khayyám\'s complete works.',
        'became widely read though its faithfulness to Khayyám is still debated.',
        'was rejected by most Victorian readers for straying too far from the original.',
        'was written to answer Nabokov\'s criticism of free translation.',
      ],
      correctIndex: 1,
      explanation:
        'The passage says FitzGerald translated so freely that "scholars still debate how much of his *Rubáiyát* reflects Khayyám at all," yet it became "one of the most widely read poems of the Victorian era."',
      optionExplanations: [
        'The passage stresses that FitzGerald worked "so freely" that scholars debate how much reflects Khayyám, which is the opposite of a word-for-word translation.',
        'Correct. The passage says scholars still debate how much of the poem reflects Khayyám, yet it became one of the most widely read poems of the Victorian era, which combines both facts.',
        'This contradicts the passage, which says the poem became one of the most widely read of the Victorian era. Its freedom troubled scholars, not its readers.',
        'FitzGerald worked in the nineteenth century, long before Nabokov\'s twentieth-century translation, so he could not have been responding to Nabokov. This reverses the chronology.',
      ],
      skill: 'KID',
      difficulty: 'easy',
    },
    {
      id: 'act-fl1-r-03-q9',
      question: 'The final sentence of the passage primarily serves to:',
      options: [
        'concede that the quotation in the first paragraph is correct after all.',
        'introduce a new topic for the author to discuss in a later essay.',
        'criticize translators for failing to preserve the poetry of originals.',
        'turn the opening quotation around, making what is lost the translator\'s goal.',
      ],
      correctIndex: 3,
      explanation:
        'The sentence returns to the opening remark and turns "lost" into something the translator "goes looking for," framing translation as a search rather than a failure.',
      optionExplanations: [
        'The sentence begins "If poetry is what gets lost," granting the premise only to turn it around. It treats loss as the start of the translator\'s work, not as a final concession.',
        'The sentence closes the essay by returning to its opening quotation rather than opening a new subject. Nothing points ahead to another essay.',
        'The passage defends translators throughout, comparing their work to a pianist\'s performance. The final sentence presents them as seekers, not as people who fail.',
        'Correct. The final sentence takes up the opening quotation and turns it around: the poetry that gets lost becomes what the translator "goes looking for," framing translation as a search rather than a failure.',
      ],
      skill: 'CS',
      difficulty: 'medium',
    },
  ],
}

const PASSAGE_4: ActFLPassage = {
  id: 'act-fl1-r-04',
  title: 'Tasting by Touch',
  kind: 'natural-science',
  text: `Imagine reaching into a dark cupboard and knowing, the moment your fingertips brushed a jar, whether it held honey or vinegar. For an octopus, something like this is ordinary. An octopus explores its world largely by touch, sliding its arms into crevices and under rocks where its eyes cannot follow, and its arms do more than feel. They taste.

Each of an octopus's eight arms is lined with suckers, often numbering in the hundreds per arm, and each sucker is more than a suction cup. Its rim is packed with sensory cells, thousands of them in a single sucker, some of which respond to pressure and some to chemicals. Biologists have long suspected that these chemical-sensing cells let an octopus identify prey by contact. In experiments in the mid-twentieth century, octopuses learned to tell apart objects that were identical in shape and texture but had been coated with different substances, a feat that touch alone could not explain.

What remained unclear was how the cells did it. That question was taken up by a team at Harvard University led by the biologist Nicholas Bellono, which reported its findings in 2020. Working with the California two-spot octopus, the researchers identified a previously unknown family of receptor proteins in the sensory cells of the suckers. They named them chemotactile receptors, for their combination of chemical sensing and touch. The receptors appear to have evolved from a family of proteins that, in many animals, help nerve cells respond to the signaling molecule acetylcholine. In the octopus, those proteins had been repurposed to respond to substances from the outside world.

When the researchers placed the receptors in laboratory-grown cells and exposed them to a range of compounds, the strongest responses came from molecules that dissolve poorly in water. That detail matters. A molecule that dissolves readily spreads through seawater and can be detected at a distance, which is how smell works for many fish. A molecule that dissolves poorly stays close to its source, clinging to surfaces. To detect it, an animal must touch the thing it belongs to. The octopus's receptors seem tuned to exactly the kind of chemical information that only contact can provide.

This arrangement suits the way an octopus hunts. Much of its prey—crabs, clams, small fish—hides in places an octopus cannot see into. An arm probing a crevice can sample the surfaces inside and register whether something worth eating is there before the octopus commits to pulling it out. In later work, the same group reported that the receptors respond to molecules produced by microbes living on surfaces, a signal that may help an octopus tell fresh prey from spoiled and help a mother distinguish healthy eggs from failing ones.

The arms are also unusually independent. An octopus has roughly five hundred million neurons, and about two-thirds of them are located not in its brain but in its arms. Each arm has its own cord of nerve tissue running its length, and much of the processing of what a sucker senses appears to happen locally, in the arm itself. Arms have been observed pulling away from a distasteful substance in a reflex-like response, with little apparent input from the brain. Researchers describe a division of labor in which the arms handle many of the details of searching and sampling while the brain sets broader goals.

Scientists caution against pressing the human comparison too far. Human taste depends on receptors concentrated on the tongue, and people identify flavors partly by smell. The octopus's chemotactile receptors belong to a different protein family and work in a different setting, underwater and on contact. Calling what an octopus does "tasting" is a useful shorthand, not a claim that an octopus experiences flavor as people do.

Still, the shorthand captures something real. For an animal whose eyes often cannot see what its arms are reaching for, a sense that turns every touch into a chemical reading is not a curiosity. It is how the octopus knows what it is holding.`,
  questions: [
    {
      id: 'act-fl1-r-04-q1',
      question: 'The main purpose of the passage is to:',
      options: [
        'explain how octopus suckers detect chemicals on contact and why that ability suits the animal\'s way of life.',
        'argue that octopuses are more intelligent than fish because of the number of neurons in their arms.',
        'compare the eyesight of octopuses with that of the crabs, clams and fish they hunt in crevices.',
        'describe the history of laboratory research on marine animals at Harvard University over several decades.',
      ],
      correctIndex: 0,
      explanation:
        'The passage describes the sucker\'s chemical-sensing cells, the receptors that explain them and the importance of contact, then connects the ability to how octopuses hunt.',
      optionExplanations: [
        'Correct. The passage explains the sensory cells in the suckers, the receptors identified in 2020 and why they respond to molecules found only by contact, then shows how this suits an animal that hunts by feel in hidden places.',
        'The neuron count is one detail used to show that the arms process information locally. The passage never ranks octopus intelligence against fish, so this inflates a detail into an argument.',
        'The passage notes that octopus eyes often cannot see where the arms reach, but it never discusses the eyesight of prey. This builds a main purpose out of a passing remark.',
        'Harvard appears only as the home of one research team. The passage covers one line of research on octopuses, not a history of an institution\'s marine work, so this is far too broad.',
      ],
      skill: 'KID',
      difficulty: 'easy',
    },
    {
      id: 'act-fl1-r-04-q2',
      question: 'The first paragraph\'s description of reaching into a dark cupboard mainly serves to:',
      options: [
        'show that humans can identify foods by touch as well as octopuses can.',
        'introduce an experiment that researchers performed with human subjects.',
        'help readers imagine a sense that joins touch and chemical detection.',
        'suggest that octopuses prefer sweet foods to sour ones.',
      ],
      correctIndex: 2,
      explanation:
        'The scenario asks readers to imagine knowing a jar\'s contents by brushing it, then says that "for an octopus, something like this is ordinary."',
      optionExplanations: [
        'The scenario begins "Imagine," inviting readers to picture an ability they lack. Humans cannot tell honey from vinegar by brushing a jar, which is exactly why the comparison is striking.',
        'The cupboard is a thought experiment addressed to the reader, not a study. The research described later in the passage involves octopuses and laboratory cells, not people.',
        'Correct. The opening asks readers to imagine identifying a jar\'s contents by touch and then says that for an octopus "something like this is ordinary," preparing them for a sense that blends touch and taste.',
        'Honey and vinegar are examples of contents a person might identify, not foods an octopus eats. The passage never discusses octopus preferences for sweet or sour flavors.',
      ],
      skill: 'CS',
      difficulty: 'easy',
    },
    {
      id: 'act-fl1-r-04-q3',
      question:
        'According to the passage, when researchers exposed the chemotactile receptors to various compounds, the strongest responses came from molecules that:',
      options: [
        'spread readily through seawater.',
        'have a low solubility in water.',
        'are released only by living fish.',
        'closely resemble acetylcholine.',
      ],
      correctIndex: 1,
      explanation:
        'The researchers found that the receptors reacted most strongly to compounds that dissolve poorly in water, which is to say compounds with low solubility.',
      optionExplanations: [
        'Molecules that spread readily through seawater are the kind detected at a distance, as many fish do by smell. The passage says the receptors responded most to the opposite kind of molecule.',
        'Correct. A molecule with low solubility is one that dissolves poorly, and the passage reports that such molecules produced the strongest responses when the receptors were tested in laboratory-grown cells.',
        'Fish appear in the passage as prey and as animals that smell at a distance. The passage never says the tested compounds came from fish, living or otherwise.',
        'Acetylcholine is mentioned in connection with the proteins the receptors evolved from, not as the kind of molecule they now respond to. Those proteins were repurposed for outside substances.',
      ],
      skill: 'KID',
      difficulty: 'easy',
    },
    {
      id: 'act-fl1-r-04-q4',
      question:
        'According to the passage, later work by the same research group suggests that the receptors\' response to substances made by microbes on surfaces may help an octopus:',
      options: [
        'detect crabs and clams from a distance through the water.',
        'keep its suckers free of harmful bacteria and parasites.',
        'decide which crevices are safe from approaching predators.',
        'judge the condition of both the prey it finds and its eggs.',
      ],
      correctIndex: 3,
      explanation:
        'The later study links the microbial signal to telling fresh prey from spoiled prey and to letting a mother sort healthy eggs from failing ones, so the signal helps the octopus judge the state of food and eggs.',
      optionExplanations: [
        'The microbes live on surfaces, and the passage stresses that these receptors work by contact, not at a distance. Detecting prey from afar through the water contradicts how the passage says the sense works.',
        'The passage mentions microbes only as a source of chemical information about what the octopus touches. It never says the octopus uses the signal to clean itself or fend off bacteria.',
        'Predators are never mentioned in the passage. The crevice-probing it describes is about finding food worth pulling out, not about judging whether a hiding place is safe.',
        'Correct. The passage says the microbial signal may help an octopus tell fresh prey from spoiled and help a mother tell healthy eggs from failing ones, which amounts to judging the condition of food and eggs.',
      ],
      skill: 'KID',
      difficulty: 'medium',
    },
    {
      id: 'act-fl1-r-04-q5',
      question: 'It can most reasonably be inferred from the passage that the proteins from which the chemotactile receptors evolved, in many animals, normally:',
      options: [
        'let neurons respond to a chemical signal within the body.',
        'detect changes in pressure against the surface of the skin.',
        'allow the eyes to register very dim light deep underwater.',
        'sense dissolved chemicals in the water from far away.',
      ],
      correctIndex: 0,
      explanation:
        'The ancestral proteins respond to acetylcholine, a signaling molecule used by nerve cells, and the passage says the octopus repurposed them for substances "from the outside world." Their original job was therefore internal signaling.',
      optionExplanations: [
        'Correct. The ancestral proteins let nerve cells react to acetylcholine, a signaling molecule, and the passage contrasts that role with the octopus\'s new use for outside substances, so the original signal came from within the body.',
        'Some sucker cells respond to pressure, but the passage treats those as separate from the chemical-sensing cells. It never says the receptors came from pressure-sensing proteins.',
        'Eyes appear in the passage only in noting that octopuses often cannot see where their arms reach. Nothing links the receptors to proteins used in vision.',
        'Sensing dissolved chemicals at a distance is how the passage describes smell in many fish, and it is the opposite of what these receptors do. Nothing says their ancestral proteins served that purpose.',
      ],
      skill: 'KID',
      difficulty: 'medium',
    },
    {
      id: 'act-fl1-r-04-q6',
      question: 'The paragraph that begins "Scientists caution against pressing the human comparison too far" mainly serves to:',
      options: [
        'reject the passage\'s earlier claim that octopuses identify prey by contact.',
        'qualify the passage\'s use of "taste" by noting how octopus sensing differs from human taste.',
        'argue that human taste is more sensitive than the chemical sense of octopuses.',
        'propose a new experiment comparing human tongues with octopus suckers.',
      ],
      correctIndex: 1,
      explanation:
        'The paragraph notes that octopus receptors belong to a different protein family and work underwater on contact, so calling the sense "tasting" is "a useful shorthand."',
      optionExplanations: [
        'The paragraph does not withdraw anything about prey detection; the next paragraph says the shorthand "captures something real." It limits a comparison rather than rejecting the passage\'s findings.',
        'Correct. The paragraph explains that octopus receptors belong to a different protein family and work underwater on contact, so "tasting" is a helpful shorthand rather than a claim that octopuses experience flavor as people do.',
        'The paragraph compares how the two senses work, not how sensitive they are. Nothing in it ranks human taste above the octopus\'s chemical sense.',
        'No experiment is proposed. The paragraph explains differences that are already known, so this describes a purpose the paragraph does not have.',
      ],
      skill: 'CS',
      difficulty: 'medium',
    },
    {
      id: 'act-fl1-r-04-q7',
      question: 'The passage suggests that an octopus arm can react to a distasteful substance with little input from the brain because:',
      options: [
        'the octopus\'s brain is too small to process signals from its suckers.',
        'chemotactile receptors send their signals directly to the eyes.',
        'each arm contains many neurons and processes much of what its suckers sense.',
        'the arms are controlled by a separate brain located near the suckers.',
      ],
      correctIndex: 2,
      explanation:
        'About two-thirds of an octopus\'s neurons are in its arms, each arm has its own nerve cord, and much of the processing "appears to happen locally, in the arm itself."',
      optionExplanations: [
        'The passage never says the brain is too small; it says the brain "sets broader goals" in a division of labor. Local processing reflects that arrangement, not a weakness of the brain.',
        'Nothing in the passage connects the receptors to the eyes. The point is that the arms often work where the eyes cannot see, so this invents a pathway.',
        'Correct. The passage says about two-thirds of an octopus\'s neurons are in its arms, each arm has its own nerve cord and much sensory processing "appears to happen locally," which explains reflex-like reactions.',
        'The passage describes a nerve cord running along each arm, not a second brain. Calling it a separate brain overstates the passage\'s more careful description of local processing.',
      ],
      skill: 'KID',
      difficulty: 'medium',
    },
    {
      id: 'act-fl1-r-04-q8',
      question:
        'As it is used in the fifth paragraph, the phrase "commits to" (in "before the octopus commits to pulling it out") most nearly means:',
      options: [
        'devotes itself permanently to.',
        'entrusts responsibility for.',
        'promises in advance.',
        'decides to undertake.',
      ],
      correctIndex: 3,
      explanation:
        'The arm samples a crevice before the octopus decides to go ahead with pulling out the prey, so "commits to" means decides to undertake.',
      optionExplanations: [
        'This sense of "commit," as in a lasting dedication, does not fit a single hunting action. The octopus is choosing whether to grab one item, not devoting itself to anything permanently.',
        'To entrust responsibility is to hand something over to someone else. The octopus is not delegating anything; it is choosing whether to act itself, so this meaning does not fit.',
        'A promise implies a pledge to another party. The sentence describes an octopus deciding on its own whether to act, so there is no one to promise anything to.',
        'Correct. The arm checks whether something worth eating is present before the octopus decides to go ahead with the effort of pulling it out, so "commits to" means decides to undertake.',
      ],
      skill: 'CS',
      difficulty: 'medium',
    },
    {
      id: 'act-fl1-r-04-q9',
      question:
        'Which finding, if true, would most strongly support the passage\'s claim that the chemotactile receptors are suited to detecting chemicals by contact?',
      options: [
        'Octopuses can visually spot prey that is several meters away in clear, calm water.',
        'Octopus eyes contain more light-sensing cells than the eyes of most fish species.',
        'An arm reacts to a surface-clinging prey compound on contact but not from just above it.',
        'Octopuses eat crabs more often than they eat clams or the small fish they catch.',
      ],
      correctIndex: 2,
      explanation:
        'A response that appears only on contact, and not a short distance away, is exactly what receptors tuned to poorly dissolving, surface-bound molecules would produce.',
      optionExplanations: [
        'Vision at a distance says nothing about how the suckers detect chemicals. If anything, it concerns a different sense, so it neither supports nor weakens the claim about contact.',
        'This compares eyes, not suckers. The claim concerns chemical detection by touch, so a fact about light-sensing cells is irrelevant to it.',
        'Correct. If an arm responds to a surface-clinging compound only on contact and not when held just above it, that directly shows the receptors gather chemical information that requires touch.',
        'Prey preference does not show how the octopus detects its prey. All three kinds of prey are mentioned in the passage only as animals that hide in crevices.',
      ],
      skill: 'IKI',
      difficulty: 'hard',
    },
  ],
}

export const ACT_FL1_READING: ActFLPassage[] = [PASSAGE_1, PASSAGE_2, PASSAGE_3, PASSAGE_4]
