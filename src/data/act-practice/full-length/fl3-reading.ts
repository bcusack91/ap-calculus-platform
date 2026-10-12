/**
 * Enhanced ACT full-length Form 3 — Reading (4 passages × 9 questions = 36, 40 min).
 * Passages: a violinist's first orchestra audition (literary narrative) ·
 * the history of public parks (social science) · the revival of letterpress
 * printing (humanities) · paired passages giving two views on de-extinction
 * (natural science).
 */
import type { ActFLPassage } from './types'

const PASSAGE_1: ActFLPassage = {
  id: 'act-fl3-r-01',
  title: 'Number Fourteen',
  kind: 'literary-narrative',
  text: `The letter said to arrive by eight-thirty, and I arrived at seven-fifty, which meant I spent fifty minutes in a hotel ballroom that had been turned into a warm-up room, listening to eleven other violinists play the same nine pages of music I had been practicing since March.

Nobody spoke. We stood in our separate corners like people waiting for different trains, each of us facing a wall, each of us playing the opening of Strauss's *Don Juan* at a slightly different speed. The excerpt begins with a leap and a rush of notes that climbs high up the instrument, and it appears on a great many orchestra audition lists, because it shows in about fifteen seconds whether a player can be fearless without being sloppy. Across the room, a tall man in a gray sweater was playing it so cleanly that I stopped to listen, and then I made myself stop listening. My teacher, Ilse, had warned me about this. "You will hear someone in the warm-up room who sounds like a recording," she said. "There is always one. That person is not your problem."

At eight-forty a woman with a clipboard came to the door and said, "Fourteen." For a moment I forgot that this was my name.

Her name was Dana, and she was the proctor, which meant that for the next eleven minutes she would be the only person who could see me. She walked me down a service corridor and through a side door onto the stage of the concert hall. A long strip of carpet had been unrolled from the wings to a music stand at the center, and twenty feet beyond the stand hung a tall folding screen of dark cloth. Behind it, somewhere in the seats, sat the committee: the concertmaster, a few section players, perhaps the conductor. I would never see their faces, and they would never see mine.

"Stay on the carpet," Dana whispered. "It's so they can't hear your shoes."

I understood. The click of a heel might suggest something about the person wearing it, and the whole point of the screen was that the committee should know nothing about me except what came out of the violin. I had always found this idea comforting in the abstract. Standing there, I found it terrifying. There was nothing to hide behind, because there was nothing to be seen.

I began with the Mozart, the first page of a concerto I had played since I was fifteen, and my hands did what they had done a thousand times. Then *Don Juan*. I lifted the bow, took the leap, and somewhere in the climbing run my bow arm stiffened and the notes smeared together like a word spoken too fast. I finished it. I knew exactly how it had sounded.

There was a silence long enough for me to count the stage lights. Then a man's voice came from behind the screen, but it did not speak to me. It spoke to Dana, low, and Dana turned to me and said, "The committee would like to hear the Strauss again. Slower, please. As slow as you like."

Ilse used to say that a committee is not listening for perfection, which no one can give them, but for something more like company. "They are asking themselves," she said, "whether they could sit beside you for thirty years." I had always heard this as a joke about how long orchestra musicians keep their jobs. On the stage I heard it differently. No one wants to spend thirty years beside someone who sounds like a recording. They want someone who listens.

So I played it slower. I let the leap be a leap, and I let the run climb instead of race, and for the first time that morning I heard the hall answer back, a faint warmth of sound returning to me from the far wall. When I lowered the violin, nobody said anything, and Dana led me off the carpet and back down the corridor.

In the ballroom the tall man in the gray sweater was packing his case. Neither of us spoke. Forty minutes later Dana came to the door with her clipboard and read four numbers for the next round. The third was fourteen, and it took me a full second, again, to understand that she meant me.`,
  questions: [
    {
      id: 'act-fl3-r-01-q1',
      question: 'Which of the following best describes the passage as a whole?',
      options: [
        'A violinist looks back on years of lessons with a teacher who doubted the narrator\'s promise.',
        'A violinist falters during an audition but recovers after recalling a teacher\'s advice.',
        'A violinist outplays a rival from the warm-up room and is offered a seat in the orchestra.',
        'A violinist explains how and why orchestras began holding auditions behind a screen.',
      ],
      correctIndex: 1,
      explanation:
        'The passage follows a single audition: the narrator stumbles in the Strauss excerpt, remembers Ilse\'s words about what a committee wants, plays it again with new freedom, and advances to the next round.',
      optionExplanations: [
        'Ilse appears only through a few remembered remarks, and those remarks are supportive, not doubtful. The passage covers one morning, not a long history of lessons.',
        'Correct. The narrator\'s bow arm stiffens in the Strauss excerpt, but after the committee asks for it again, the narrator recalls Ilse\'s words about sitting beside someone for decades and plays the excerpt more freely.',
        'The man in the gray sweater is never treated as a rival in any contest the narrator wins, and the narrator only advances to another round. No seat is offered by the end of the passage.',
        'The screen and the carpet are described as part of the setting, but the passage never explains the history of the practice. This mistakes a background detail for the subject of the story.',
      ],
      skill: 'KID',
      difficulty: 'easy',
    },
    {
      id: 'act-fl3-r-01-q2',
      question: 'According to the passage, the carpet on the stage is intended to:',
      options: [
        'help each candidate find the way from the wings to the stand.',
        'soften the hall\'s echo so the committee can hear every note.',
        'protect the stage floor from the shoes of so many candidates.',
        'keep any hint but the playing from reaching the judges.',
      ],
      correctIndex: 3,
      explanation:
        'Dana says the carpet is there "so they can\'t hear your shoes," and the narrator explains that the committee is meant to learn nothing about a candidate except what the violin reveals.',
      optionExplanations: [
        'The carpet does run from the wings to the stand, but Dana gives its purpose as hiding the sound of footsteps. Its path is a physical fact, not the reason it was laid down.',
        'The hall\'s echo comes up only later, when the narrator hears the sound "answer back." Nothing links the carpet to the hall\'s acoustics; it is meant to silence footsteps.',
        'The passage never mentions protecting the floor. Dana\'s whispered reason is about what the committee might hear, so this invents a practical purpose the passage does not give.',
        'Correct. Footsteps such as a heel\'s click might hint at who the player is, and the screen exists so the committee judges candidates only by their playing. The carpet keeps that one remaining clue from reaching them.',
      ],
      skill: 'KID',
      difficulty: 'easy',
    },
    {
      id: 'act-fl3-r-01-q3',
      question:
        'As it is used in the phrase "the notes smeared together like a word spoken too fast," the word smeared most nearly means:',
      options: [
        'blurred into one another.',
        'left a dark stain.',
        'damaged a reputation.',
        'spread over a surface.',
      ],
      correctIndex: 0,
      explanation:
        'The comparison to a word spoken too fast shows that the notes lost their separate edges and ran into each other, so smeared means blurred.',
      optionExplanations: [
        'Correct. Like syllables crowded into a rushed word, the notes lost their clear boundaries when the narrator\'s bow arm stiffened, so they ran indistinctly into one another.',
        'Smearing can leave a mark on cloth or paper, but sounds cannot stain anything. This literal sense does not fit an image about notes and spoken words.',
        'This is the sense in "a smear campaign," which attacks someone\'s good name. Nothing about the narrator\'s playing involves anyone\'s reputation.',
        'This is the sense of spreading butter or paint across something. The notes are not being applied to a surface, so this meaning does not fit the comparison.',
      ],
      skill: 'CS',
      difficulty: 'easy',
    },
    {
      id: 'act-fl3-r-01-q4',
      question:
        'The narrator\'s reaction to hearing the man in the gray sweater warm up is best described as:',
      options: [
        'dismissive, since he sounds too much like a recording.',
        'openly envious, to the point of wanting to go home.',
        'briefly absorbed, then resolved to put him out of mind.',
        'encouraged, since he makes the excerpt seem less difficult.',
      ],
      correctIndex: 2,
      explanation:
        'The narrator "stopped to listen" to his clean playing and then deliberately "made myself stop listening," remembering Ilse\'s warning that such a player is "not your problem."',
      optionExplanations: [
        'The phrase "sounds like a recording" comes from Ilse\'s warning, and the narrator is impressed, not scornful, stopping to listen because he plays so cleanly.',
        'The narrator never considers leaving and says nothing about envy. The narrator simply stops listening and keeps preparing, so this exaggerates the reaction.',
        'Correct. The narrator is caught for a moment by how cleanly he plays, then makes a deliberate effort to stop listening, following Ilse\'s advice that such a player is not the narrator\'s concern.',
        'His clean playing shows how well the excerpt can be played, which is unsettling rather than encouraging. Nothing suggests the narrator finds the music easier because of him.',
      ],
      skill: 'KID',
      difficulty: 'easy',
    },
    {
      id: 'act-fl3-r-01-q5',
      question:
        'On the stage, the narrator comes to understand Ilse\'s remark about sitting beside someone "for thirty years" to mean that a committee wants a player who:',
      options: [
        'intends to keep the position for several decades.',
        'can match the polish of a well-known recording.',
        'would be a responsive colleague, not a flawless soloist.',
        'will avoid every mistake despite the strain of an audition.',
      ],
      correctIndex: 2,
      explanation:
        'The narrator had taken the remark as a joke about job tenure but now hears it as a point about company: no one wants a neighbor "who sounds like a recording"; they want "someone who listens."',
      optionExplanations: [
        'This is how the narrator used to hear the remark, as a joke about how long orchestra players stay. On the stage the narrator explicitly hears it "differently."',
        'The narrator decides that no one wants to sit for decades beside "someone who sounds like a recording," so recorded polish is exactly what the committee is not seeking.',
        'Correct. Ilse says a committee wants "something more like company," and the narrator concludes that they want "someone who listens," that is, a musician who responds to others rather than merely playing perfectly.',
        'Ilse says the committee is "not listening for perfection, which no one can give them." Demanding a mistake-free performance contradicts the very advice the narrator recalls.',
      ],
      skill: 'KID',
      difficulty: 'medium',
    },
    {
      id: 'act-fl3-r-01-q6',
      question:
        'The committee\'s request to hear the Strauss again, "as slow as you like," most strongly suggests that the committee:',
      options: [
        'was interested enough to hear the excerpt under easier conditions.',
        'had already settled on another player and was merely filling time.',
        'wanted to compare the narrator directly with the player before.',
        'wanted to find out how fast the narrator could take the run.',
      ],
      correctIndex: 0,
      explanation:
        'Instead of dismissing the narrator after a shaky run, the committee asks for a second, unhurried attempt, a sign that it wants to hear what the narrator can do; the narrator later advances.',
      optionExplanations: [
        'Correct. Inviting the narrator to repeat the excerpt at any tempo removes the pressure of speed, which only makes sense if the committee still wants to hear more; the narrator\'s advance confirms its interest.',
        'A committee that had already decided would have no reason to ask for a repeat, and the narrator is in fact chosen for the next round. Nothing in the passage supports this.',
        'Nothing in the passage mentions any comparison with other candidates. The committee asks only for the narrator\'s own excerpt again, at a slower tempo, which concerns the narrator\'s playing alone.',
        'The committee asks for the excerpt "slower" and "as slow as you like," the opposite of testing speed. This reverses the request.',
      ],
      skill: 'KID',
      difficulty: 'medium',
    },
    {
      id: 'act-fl3-r-01-q7',
      question:
        'The description of "a faint warmth of sound returning to me from the far wall" mainly serves to:',
      options: [
        'suggest that the hall\'s poor acoustics spoiled the narrator\'s first attempt.',
        'indicate that the members of the committee had begun to applaud.',
        'explain why Dana hurried the narrator back down the corridor.',
        'show that the narrator is now listening while playing, not just playing.',
      ],
      correctIndex: 3,
      explanation:
        'Right after deciding that a committee wants "someone who listens," the narrator plays slowly and, "for the first time that morning," hears the hall respond, marking the change in how the narrator is playing.',
      optionExplanations: [
        'The narrator blames the first attempt on a stiff bow arm, not on the hall. The returning sound is a pleasing warmth, so the detail praises the room rather than faulting it.',
        'After the narrator finishes, "nobody said anything." The warmth is the narrator\'s own sound echoing from the wall, not a response from the people behind the screen.',
        'Dana leads the narrator off at an ordinary pace, and the passage never says she hurried. The returning sound has nothing to do with when the narrator leaves the stage.',
        'Correct. Having just realized that a committee wants a player who listens, the narrator notices the hall\'s response "for the first time that morning," showing that the narrator is finally attending to the sound.',
      ],
      skill: 'CS',
      difficulty: 'medium',
    },
    {
      id: 'act-fl3-r-01-q8',
      question:
        'The comparison of the violinists in the ballroom to "people waiting for different trains" mainly emphasizes:',
      options: [
        'how impatient the candidates grew during the long wait.',
        'how cut off the players were, though in one room.',
        'that the violinists had come from many distant cities.',
        'how loud the ballroom became as more players arrived.',
      ],
      correctIndex: 1,
      explanation:
        'The players stand silently in "separate corners," each facing a wall and playing at a different speed: together in one place but each absorbed in a private journey.',
      optionExplanations: [
        'Waiting is part of the image, but nothing shows the candidates growing restless. The comparison stresses their separateness, not their impatience.',
        'Correct. Like strangers on a platform bound for different places, the candidates occupy the same room without speaking, each facing a wall and working alone.',
        'The comparison is about how the players behave in the room, not where they came from. The passage never says where the other candidates traveled from.',
        'The players all practice the same excerpt, but the comparison stresses their silence toward each other; "Nobody spoke" introduces it. Noise is not its point.',
      ],
      skill: 'CS',
      difficulty: 'easy',
    },
    {
      id: 'act-fl3-r-01-q9',
      question:
        'The narrator\'s delay in reacting to the number fourteen at the end of the passage repeats an earlier moment in which the narrator:',
      options: [
        'did not at first realize that Dana was summoning the narrator.',
        'lost count of the stage lights during a long silence on stage.',
        'forgot how the Mozart began after years of playing the concerto.',
        'misread the arrival time printed in the audition letter.',
      ],
      correctIndex: 0,
      explanation:
        'When Dana first calls "Fourteen" at the ballroom door, the narrator briefly forgets the number stands for the narrator; at the end it again takes "a full second" to understand.',
      optionExplanations: [
        'Correct. When Dana first calls the number at the door, the narrator momentarily does not connect it with the narrator, and the word "again" in the last sentence signals that the same hesitation recurs.',
        'The narrator counts the stage lights during the silence; the passage never says the count was lost. That moment is about waiting for the committee, not about hearing a number.',
        'The Mozart goes smoothly; the narrator\'s hands do "what they had done a thousand times." Nothing suggests the narrator forgot how the concerto began.',
        'The narrator arrives early, at seven-fifty, for an eight-thirty call. There is no sign the letter was misread, and this has nothing to do with the number fourteen.',
      ],
      skill: 'KID',
      difficulty: 'easy',
    },
  ],
}

const PASSAGE_2: ActFLPassage = {
  id: 'act-fl3-r-02',
  title: 'Common Ground',
  kind: 'social-science',
  text: `For most of history, a city dweller who wanted grass and trees had to own them or be invited onto someone else's. The great gardens of European capitals belonged to monarchs and nobles, and while some were gradually opened to the public, they were opened as a favor that could be withdrawn. The idea that a city should build a landscape for everyone, pay for it with public money, and keep it open to all as a matter of right is younger than many of the cities that now take it for granted.

One early model was Birkenhead Park, which opened in 1847 across the River Mersey from Liverpool and is often described as the first park in Britain built with public funds. Three years later, a young American named Frederick Law Olmsted, then a farmer with literary ambitions, walked through it on a tour of England. He was struck less by its plantings than by the people using them. In democratic America, he wrote, there was nothing to compare with this "People's Garden."

Americans of the time had found their own substitute. Beginning with Mount Auburn in Cambridge, Massachusetts, in 1831, a wave of "rural cemeteries," laid out as wooded, rolling grounds on the edges of cities, drew crowds of visitors who came not to mourn but to stroll, picnic, and escape the noise of the streets. The popularity of these burial grounds as pleasure grounds struck reformers as evidence of a need the cities were not meeting. The landscape designer Andrew Jackson Downing argued in print for a great public park in New York.

That park, eventually Central Park, was authorized in the 1850s, and in 1858 a plan by Olmsted and the architect Calvert Vaux won the competition to design it. Their plan answered a practical problem with unusual cleverness. A park running for dozens of blocks through the middle of Manhattan would cut the city in two unless traffic could cross it, so the designers sank the cross-town roads below the level of the surrounding ground. Carriages and carts could pass through without their noise and bustle intruding on the scenery above. Within the park itself, separate routes carried pedestrians, carriages, and riders on horseback.

Olmsted believed the scenery itself did important work. A city, he argued, wore on the nerves of its inhabitants, and an expanse of meadow and woodland could restore them in a way that no building could. He also believed a park could teach a kind of democratic manners, gathering rich and poor into a single landscape where they would learn to share it. That vision had costs its champions rarely mentioned. To clear the land, the city displaced hundreds of residents, among them the African American property owners of a settlement called Seneca Village.

By the early twentieth century, a new generation of reformers had begun to doubt the pastoral ideal. Children in crowded tenement districts, they pointed out, lived far from any great park and had nowhere to play but the street. The answer, as these reformers saw it, was not more scenery but more room for activity: small neighborhood parks with playgrounds, ball fields, and swimming pools, overseen by trained staff. One historian of park design has described the shift as a move from the "pleasure ground" to the "reform park," a change in which the park's purpose went from soothing city dwellers to organizing their leisure.

Each later generation has redefined the park again. Recent decades have produced parks on land no one once thought of as parkland at all: abandoned rail lines, closed landfills, and old industrial waterfronts. New York's High Line, which opened in 2009 on a disused elevated freight track, drew millions of visitors, and cities around the world announced plans to copy it. It also drew a familiar criticism. As property values around such parks rise, longtime residents may find themselves priced out of the neighborhoods the parks were supposed to serve.

That criticism would not have surprised Olmsted's critics, or perhaps Olmsted himself. The question of whom a park is for has accompanied the public park from its beginning. What has changed is the assumption behind the question. Few people now ask whether a city owes its residents green space. They ask instead how to make sure all of them can reach it.`,
  questions: [
    {
      id: 'act-fl3-r-02-q1',
      question: 'Which of the following best states the main idea of the passage?',
      options: [
        'Central Park succeeded chiefly because its designers solved the problem of cross-town traffic.',
        'Public parks began in Britain, and American cities copied the British model without change.',
        'A park open to all at public expense is a fairly new idea whose purpose keeps shifting.',
        'Parks built on abandoned industrial land have at last fulfilled Olmsted\'s original vision.',
      ],
      correctIndex: 2,
      explanation:
        'The passage traces the public park from its origins in the 1800s through the pastoral, reform, and recent eras, showing that each generation has given parks a new purpose while debating whom they serve.',
      optionExplanations: [
        'The sunken roads are one clever feature discussed in a single paragraph. Treating them as the key to the whole passage is far too narrow for an essay that spans nearly two centuries.',
        'Birkenhead Park was an early model, but American cities had their own rural cemeteries, and the passage goes on to show American parks changing repeatedly. Nothing says they copied Britain "without change."',
        'Correct. The opening calls the public park "younger than many of the cities" that have one, and the rest of the passage moves from Olmsted\'s restful scenery to playgrounds to reused rail lines, each era changing what a park is for.',
        'The passage presents the High Line as raising a "familiar criticism" about who benefits. It never claims that such parks complete Olmsted\'s vision, so this overstates and distorts the final paragraphs.',
      ],
      skill: 'KID',
      difficulty: 'medium',
    },
    {
      id: 'act-fl3-r-02-q2',
      question:
        'According to the passage, Olmsted and Vaux placed the cross-town roads below the level of the surrounding ground so that:',
      options: [
        'riders on horseback would not have to share paths with people on foot.',
        'the city stayed connected while park visitors were spared the traffic.',
        'meadows and woodland could cover a larger share of the park\'s land.',
        'carriages could reach the park\'s scenic drives without long delays.',
      ],
      correctIndex: 1,
      explanation:
        'Without crossings, the park would "cut the city in two"; sinking the roads let carriages and carts pass through while keeping their noise and bustle away from the scenery above.',
      optionExplanations: [
        'Separate routes for riders and walkers are a different feature, the paths "within the park itself." The sunken roads solve the problem of traffic crossing the park, not traffic inside it.',
        'Correct. The lowered roads kept Manhattan from being split in two by letting cross-town vehicles pass through, while their noise stayed below the level where visitors enjoyed the scenery.',
        'The passage never says the sunken roads saved space for meadows. Their stated purpose concerns traffic and noise, so this invents a benefit the passage does not mention.',
        'The sunken roads carry vehicles across the park, beneath the scenery. They were designed to keep traffic out of the park\'s landscape, not to speed carriages into its drives.',
      ],
      skill: 'KID',
      difficulty: 'easy',
    },
    {
      id: 'act-fl3-r-02-q3',
      question:
        'The passage indicates that reformers took the crowds visiting rural cemeteries as a sign that:',
      options: [
        'Americans had come to regard mourning as a public, social occasion.',
        'such cemeteries ought to be moved farther from the edges of cities.',
        'Americans preferred formal British gardens to their native scenery.',
        'city dwellers lacked green places to spend their free time.',
      ],
      correctIndex: 3,
      explanation:
        'Visitors came to stroll, picnic, and escape street noise, and reformers saw this as "a need the cities were not meeting," which Downing then answered by calling for a great public park.',
      optionExplanations: [
        'The passage says visitors came "not to mourn" but to stroll and picnic. The crowds showed a hunger for green space, not a new attitude toward grief.',
        'The reformers drew no conclusion about where cemeteries should be. Their response, voiced by Downing, was to call for a public park, not to relocate burial grounds.',
        'British gardens are not mentioned in connection with the cemeteries, and the cemeteries were wooded, rolling grounds, not formal gardens. This links two unrelated parts of the passage.',
        'Correct. People were using burial grounds as places of recreation because nothing else was available, which reformers read as proof that cities lacked green space for leisure.',
      ],
      skill: 'KID',
      difficulty: 'medium',
    },
    {
      id: 'act-fl3-r-02-q4',
      question:
        'As it is used in the phrase "A city, he argued, wore on the nerves of its inhabitants," the phrase wore on most nearly means:',
      options: [
        'steadily drained.',
        'was dressed in.',
        'slowly passed by.',
        'was displayed on.',
      ],
      correctIndex: 0,
      explanation:
        'Olmsted contrasts the city, which tires people out, with scenery that can "restore them," so wore on means gradually exhausted or strained.',
      optionExplanations: [
        'Correct. The next clause says meadow and woodland could "restore" city dwellers, which implies that city life had been wearing them down little by little.',
        'This is the sense of wearing clothing. A city cannot be dressed in anyone\'s nerves, so this meaning makes no sense in the sentence.',
        'This is the sense in "as the afternoon wore on," describing time passing. The sentence is about the city\'s effect on people, not about time.',
        'This is the sense of wearing a badge or pin so others can see it. Nothing is being displayed; the sentence describes strain on city dwellers.',
      ],
      skill: 'CS',
      difficulty: 'easy',
    },
    {
      id: 'act-fl3-r-02-q5',
      question:
        'According to the passage, early twentieth-century reformers believed that children in tenement districts most needed:',
      options: [
        'quiet scenery that would soothe their frayed nerves.',
        'supervised places to play close to their own homes.',
        'regular trips to the great parks that lay far away.',
        'lessons in sharing public space with wealthier families.',
      ],
      correctIndex: 1,
      explanation:
        'The reformers called for "more room for activity": small neighborhood parks with playgrounds, ball fields, and pools, overseen by trained staff.',
      optionExplanations: [
        'Restorative scenery was Olmsted\'s pastoral ideal, which these reformers had "begun to doubt." They wanted "not more scenery" but space for activity.',
        'Correct. The reformers wanted small neighborhood parks, so near the tenements, with playgrounds and ball fields under the eye of trained staff.',
        'The reformers noted that the children lived "far from any great park," but their answer was to build small parks nearby, not to bring children to distant ones.',
        'Teaching rich and poor to share a landscape was Olmsted\'s earlier hope for the large park. The later reformers focused on room for play, not on mixing social classes.',
      ],
      skill: 'KID',
      difficulty: 'easy',
    },
    {
      id: 'act-fl3-r-02-q6',
      question: 'The author mentions Seneca Village mainly to:',
      options: [
        'explain why the design competition was delayed until 1858.',
        'offer an example of the tenement districts later reformers described.',
        'qualify the idea that the park was created for everyone\'s benefit.',
        'show that Olmsted personally opposed the way the land was taken.',
      ],
      correctIndex: 2,
      explanation:
        'Right after describing Olmsted\'s democratic hopes, the author notes that the vision "had costs" and names the residents displaced to build the park, complicating the picture of a park for all.',
      optionExplanations: [
        'The passage gives no reason for the timing of the competition and never connects Seneca Village to it. This invents a cause-and-effect link.',
        'The tenement districts belong to the twentieth-century reformers\' argument. Seneca Village was a settlement of property owners cleared in the 1850s, not a crowded tenement district.',
        'Correct. Introduced by the remark that Olmsted\'s vision "had costs its champions rarely mentioned," the displacement shows that a park meant to gather everyone was built by removing some people.',
        'The passage never says what Olmsted thought about the displacement. It says only that the park\'s champions "rarely mentioned" such costs, which suggests silence, not opposition.',
      ],
      skill: 'CS',
      difficulty: 'medium',
    },
    {
      id: 'act-fl3-r-02-q7',
      question: 'According to the passage, one criticism of parks like the High Line is that they can:',
      options: [
        'attract more visitors than the narrow space can comfortably hold.',
        'cost cities more to build than they ever recover from tourism.',
        'lead other cities to copy designs that do not suit their needs.',
        'push up local housing costs until established residents must leave.',
      ],
      correctIndex: 3,
      explanation:
        'The passage says that as nearby property values rise, longtime residents may be "priced out" of the neighborhoods the parks were supposed to serve.',
      optionExplanations: [
        'The High Line "drew millions of visitors," but the passage reports this as a success, not a complaint. The criticism it names concerns housing costs, not crowding.',
        'The passage gives no figures for construction costs or tourist income. This invents a financial criticism that does not appear.',
        'Other cities did announce plans to copy the High Line, but the passage does not criticize that imitation. The criticism concerns the residents near such parks.',
        'Correct. Rising property values near a popular park can make the area unaffordable, so the people who already lived there may be forced out of the very neighborhood the park was meant to benefit.',
      ],
      skill: 'KID',
      difficulty: 'easy',
    },
    {
      id: 'act-fl3-r-02-q8',
      question: 'The account of Olmsted\'s visit to Birkenhead Park in the second paragraph mainly serves to:',
      options: [
        'link an early British park to the American who later designed Central Park.',
        'argue that British parks were superior to any later American design.',
        'explain how Birkenhead Park came to be paid for with public money.',
        'describe the plantings that Olmsted later reproduced in New York.',
      ],
      correctIndex: 0,
      explanation:
        'The paragraph introduces Olmsted through his admiration for a publicly funded British park, setting up his role as co-designer of Central Park later in the passage.',
      optionExplanations: [
        'Correct. Olmsted\'s visit connects Birkenhead, an early model of the public park, to the figure who will soon win the Central Park competition, and shows him already valuing a park open to ordinary people.',
        'Olmsted says America had nothing comparable at the time, but the passage never ranks British parks above later American ones. The comparison concerns 1850, not all later designs.',
        'The passage states that Birkenhead was built with public funds but never explains how that funding came about. The paragraph focuses on Olmsted\'s reaction, not on financing.',
        'Olmsted was struck "less by its plantings than by the people using them." The passage never says he copied any plantings, so this misreads his reaction.',
      ],
      skill: 'CS',
      difficulty: 'medium',
    },
    {
      id: 'act-fl3-r-02-q9',
      question:
        'Which finding, if true, would most directly support the author\'s claim that few people now question "whether a city owes its residents green space"?',
      options: [
        'Many recent parks were built on closed landfills and old rail lines.',
        'City park budgets have shrunk in many places over the past decades.',
        'Yearly attendance at the High Line has grown since it first opened.',
        'Most city residents polled call public parks a basic public duty.',
      ],
      correctIndex: 3,
      explanation:
        'The claim is about what people today believe a city owes them, so evidence that most residents regard parks as a basic public obligation supports it most directly.',
      optionExplanations: [
        'This shows where new parks are being built, a point the passage already makes. It says nothing about whether people believe cities are obliged to provide green space.',
        'Shrinking budgets, if anything, suggest that some officials treat parks as optional. This finding would cut against the author\'s claim rather than support it.',
        'Rising attendance shows that one park is popular, but popularity is not the same as a belief that cities owe residents green space. The finding is too narrow to bear on the claim.',
        'Correct. The author says the modern debate is about access, not about whether parks should exist. Polls showing that residents widely see parks as an obligation would confirm exactly that assumption.',
      ],
      skill: 'IKI',
      difficulty: 'hard',
    },
  ],
}

const PASSAGE_3: ActFLPassage = {
  id: 'act-fl3-r-03',
  title: 'The Bite',
  kind: 'humanities',
  text: `For roughly five centuries after Johannes Gutenberg began printing with movable metal type in the mid-1400s, most of what people read had been pressed into paper by raised letters coated with ink. Then, within a few decades, the method all but vanished. Offset lithography, which prints from smooth plates, proved faster and cheaper for large jobs, and by the late twentieth century, phototypesetting and then desktop computers had removed the need for cases of metal type altogether. Commercial printers sold their old presses for scrap or pushed them into the backs of warehouses. Letterpress, it seemed, would survive only in museums.

It did not. Today small letterpress studios turn out wedding invitations, posters, greeting cards, and hand-bound books, and many of them run machines that were rescued just short of the scrapyard. Among the most sought after are the cast-iron proof presses once used in commercial shops to check type for errors before a job went to a faster machine. Built for accuracy rather than speed, they have proved well suited to printers who make a few hundred copies of something rather than a few hundred thousand.

The revival has brought with it a curious reversal of taste. For most of letterpress history, a good printer aimed for what was called a "kiss" impression: the type would touch the paper just firmly enough to transfer ink, leaving the sheet smooth. A deep dent in the paper was considered a mark of poor workmanship, and printers had a practical reason to avoid it, since pressing too hard wore down expensive type. Many of today's customers want exactly the opposite. They ask for thick, soft cotton paper and a deep impression they can feel with a fingertip, an effect printers call "bite." To a printer trained in the old school, this can look like paying extra for a flaw.

Purists have other complaints. Many contemporary studios no longer set their text from metal type at all. Instead, they design a page on a computer and have it made into a photopolymer plate, a thin sheet of light-hardened plastic with the letters standing up in relief. The plate goes on the press and prints much as type would. To some traditionalists this is letterpress in name only, a digital design wearing a historical costume.

I understand the objection, but I think it mistakes what the revival is about. No one now turns to letterpress because it is the efficient way to put words on paper; that argument was lost decades ago. People turn to it because it produces an object that records the pressure of its making. The bite in the paper is not a flaw that customers fail to notice. It is the very thing they are paying for: evidence, in an age of screens, that a heavy machine and a human hand were involved.

Seen this way, the photopolymer plate is less a betrayal than a translation. The old printers did not use metal type out of reverence; they used it because it was the best tool they had. The new printers use digital plates for the same reason, and then they do what the screen cannot do. They choose the paper, mix the ink, adjust the pressure, and feed each sheet through by hand, accepting the small variations from one copy to the next that a machine built for uniformity was designed to eliminate.

There is something to be learned, too, from the traditionalists' unease. A craft that survives only as a style risks becoming a costume after all, a texture that a clever piece of software could imitate. What keeps letterpress from that fate is not any single rule about type or impression but the knowledge passed from one printer to the next: how a particular press behaves on a damp morning, how much ink a heavy paper drinks, when to stop adjusting and print. That knowledge nearly disappeared once, along with the presses. The machines were easier to save.`,
  questions: [
    {
      id: 'act-fl3-r-03-q1',
      question: 'The author\'s central claim about the letterpress revival is that the revival:',
      options: [
        'rests on the value people find in its printed objects today.',
        'has thrived mainly by printing more cheaply than offset presses can.',
        'will fade once customers notice the flaws of a deep impression.',
        'can remain authentic only if studios return to using metal type.',
      ],
      correctIndex: 0,
      explanation:
        'The author argues that purists "mistake what the revival is about": people value letterpress for the kind of object it produces now, so neither deep impressions nor digital plates make it less genuine.',
      optionExplanations: [
        'Correct. The author defends both the deep impression and the photopolymer plate by asking what customers and printers get from the craft now, rather than whether it follows the old printers\' standards.',
        'The author says efficiency is an argument "lost decades ago," since offset is faster and cheaper. Letterpress survives for other reasons, so this reverses the passage.',
        'The author says the bite "is not a flaw that customers fail to notice" but the very thing they pay for. Nothing predicts that customers will turn against it.',
        'This is the traditionalists\' position, which the author answers by calling the plate "less a betrayal than a translation." The author does not insist on metal type.',
      ],
      skill: 'KID',
      difficulty: 'medium',
    },
    {
      id: 'act-fl3-r-03-q2',
      question: 'According to the passage, proof presses suit many of today\'s letterpress studios because the presses:',
      options: [
        'were the fastest machines that commercial print shops ever owned.',
        'can print from plastic plates but not from metal type.',
        'favor careful work over output, which fits short print runs.',
        'were cheaper to rescue than larger commercial presses.',
      ],
      correctIndex: 2,
      explanation:
        'The passage says the proof presses were built for accuracy, not speed, which makes them a good match for studios printing hundreds of copies rather than hundreds of thousands.',
      optionExplanations: [
        'The proof presses checked type "before a job went to a faster machine," so they were not the fastest presses in a shop. This reverses their role.',
        'The passage never says proof presses cannot print from metal type; they were originally used to proof type. Photopolymer plates are discussed later and are not tied to these presses.',
        'Correct. Because they were made to be precise rather than quick, these presses serve studios that print a few hundred copies at a time, where speed matters little.',
        'The passage says nothing about the cost of rescuing different presses. It explains their popularity by how they were built, so this invents a reason.',
      ],
      skill: 'KID',
      difficulty: 'easy',
    },
    {
      id: 'act-fl3-r-03-q3',
      question:
        'According to the passage, one reason traditional printers avoided a deep impression was that it:',
      options: [
        'required thick, soft cotton paper that few shops kept in stock.',
        'damaged the costly type that a print shop depended on.',
        'slowed the press too much for large commercial runs.',
        'made the ink fade sooner on the finished page.',
      ],
      correctIndex: 1,
      explanation:
        'Besides being thought poor workmanship, a heavy impression had a practical cost: pressing too hard wore down type that was expensive to replace.',
      optionExplanations: [
        'Thick cotton paper is what today\'s customers request to get a deep impression. The passage never says older shops lacked it or avoided bite for that reason.',
        'Correct. The passage gives a "practical reason" for the kiss impression: pressing hard wore away metal type, which was an expensive part of a shop\'s equipment.',
        'Speed is discussed only in comparing letterpress with offset printing. The passage never links the depth of an impression to how fast a press could run.',
        'The passage never mentions ink fading. A deep impression was disliked for looking like poor work and for wearing out type, not for any effect on the ink.',
      ],
      skill: 'KID',
      difficulty: 'easy',
    },
    {
      id: 'act-fl3-r-03-q4',
      question:
        'The author\'s remark that, to a printer trained in the old school, the taste for bite "can look like paying extra for a flaw" mainly serves to:',
      options: [
        'criticize customers who pay high prices for printed stationery.',
        'suggest that modern studios overcharge for a deep impression.',
        'show that older printers resented their younger competitors.',
        'stress how completely the old ideal has been turned around.',
      ],
      correctIndex: 3,
      explanation:
        'The remark closes a paragraph about a "curious reversal of taste": what old printers avoided as poor work is exactly what customers now request.',
      optionExplanations: [
        'The author goes on to defend these customers, saying the bite is "the very thing they are paying for." The remark describes an old printer\'s view, not the author\'s criticism.',
        'Nothing in the passage says studios charge too much. The remark is about how the effect looks to traditional eyes, not about whether its price is fair.',
        'The remark concerns how an old printer would judge a deep impression, not feelings about rival printers. The passage never mentions resentment between generations.',
        'Correct. Because a deep dent once marked poor workmanship, the image of customers paying more for it captures how completely today\'s preference has turned the old ideal around.',
      ],
      skill: 'CS',
      difficulty: 'medium',
    },
    {
      id: 'act-fl3-r-03-q5',
      question:
        'By calling the photopolymer plate "less a betrayal than a translation," the author most nearly means that the plate:',
      options: [
        'replaces the printer\'s judgment with a computer\'s precision.',
        'serves the craft\'s old purpose by different means.',
        'imitates the look of old printing but abandons its spirit.',
        'is an imperfect copy that loses some of the original\'s meaning.',
      ],
      correctIndex: 1,
      explanation:
        'The author explains that old printers used metal type simply because it was "the best tool they had," and new printers use plates for the same reason, so the plate carries the craft into a new form.',
      optionExplanations: [
        'The author stresses the reverse: after the plate is made, printers still choose paper, mix ink, and adjust pressure by hand. The plate does not take over their judgment.',
        'Correct. Like a translation that carries a text into another language, the plate carries the work of the old type into new technology, used for the same practical reason the old printers had.',
        'This is the traditionalists\' charge of "a digital design wearing a historical costume." The author offers "translation" as an answer to that charge, not as agreement with it.',
        'A translation can lose meaning, but the author uses the word to praise the plate, not to fault it. Nothing suggests the plate weakens the printed result.',
      ],
      skill: 'CS',
      difficulty: 'hard',
    },
    {
      id: 'act-fl3-r-03-q6',
      question:
        'The author suggests that the "small variations from one copy to the next" in hand-fed printing are:',
      options: [
        'a trace of human handling that adds to the work\'s appeal.',
        'defects that careful printers work hard to conceal.',
        'the result of printing from type worn down by pressure.',
        'flaws that come from relying on plastic plates.',
      ],
      correctIndex: 0,
      explanation:
        'The author presents the variations as something printers accept, part of what the screen cannot do, and earlier says customers value evidence that "a human hand" was involved.',
      optionExplanations: [
        'Correct. The variations come from choices and hand-feeding that a uniform machine would remove, and the author has said that buyers prize proof of human involvement, so the variations are part of the value.',
        'Printers are described as "accepting" the variations, not hiding them. Treating them as defects to conceal contradicts the author\'s point that they set the work apart.',
        'Worn type is part of the passage\'s history of the kiss impression. The variations come from hand-feeding and adjustment, not from damaged type.',
        'The author says printers use plates and "then" do what the screen cannot, including hand-feeding. The variations come from that handwork, not from the plates.',
      ],
      skill: 'KID',
      difficulty: 'medium',
    },
    {
      id: 'act-fl3-r-03-q7',
      question:
        'According to the passage, some traditionalists object to photopolymer plates because they believe such plates:',
      options: [
        'print text less crisply than cast metal type does.',
        'wear out sooner under the force of a deep impression.',
        'give modern work only the outward look of tradition.',
        'cost studios more than the antique presses themselves.',
      ],
      correctIndex: 2,
      explanation:
        'Traditionalists call plate-printed work "letterpress in name only, a digital design wearing a historical costume": old-fashioned on the surface, digital underneath.',
      optionExplanations: [
        'The passage says the plate "prints much as type would" and reports no complaint about sharpness. The objection concerns authenticity, not print quality.',
        'Wearing out is discussed only for metal type under heavy pressure. The passage never says plates are less durable.',
        'Correct. The "costume" image means the work borrows the appearance of the old craft while its design really comes from a computer, so it is traditional only on the surface.',
        'The passage gives no costs for plates or presses. This invents a financial objection that the traditionalists never make.',
      ],
      skill: 'KID',
      difficulty: 'easy',
    },
    {
      id: 'act-fl3-r-03-q8',
      question:
        'Which of the following findings, if true, would most weaken the author\'s explanation of why customers choose letterpress?',
      options: [
        'Many studios now print from photopolymer plates rather than from metal type.',
        'Offset printing remains far cheaper than letterpress for very large print runs.',
        'Customers often request thick, soft cotton paper for their wedding invitations.',
        'Most buyers like a digital imitation of bite just as much, even knowing it is one.',
      ],
      correctIndex: 3,
      explanation:
        'The author claims customers pay for bite as proof that a machine and a human hand were involved; if buyers are just as satisfied with a known fake, that proof is not what they value.',
      optionExplanations: [
        'The passage already reports that many studios use plates, and the author\'s argument accounts for it. This fact is consistent with the explanation, not a challenge to it.',
        'The author grants that letterpress lost the efficiency argument decades ago. Offset\'s lower cost is already part of the reasoning, so it does not weaken it.',
        'Requests for thick cotton paper fit the author\'s claim that customers seek a deep impression. This detail supports the explanation rather than weakening it.',
        'Correct. If people are content with an imitation they know involved no press or hand, then the physical record of making cannot be what draws them, undercutting the author\'s explanation.',
      ],
      skill: 'IKI',
      difficulty: 'hard',
    },
    {
      id: 'act-fl3-r-03-q9',
      question: 'The final sentence of the passage, "The machines were easier to save," mainly serves to:',
      options: [
        'suggest that the presses survived through luck rather than effort.',
        'urge readers to rescue more antique presses from the scrapyard.',
        'stress that preserving printers\' know-how is the harder task.',
        'concede that the traditionalists are right about plastic plates.',
      ],
      correctIndex: 2,
      explanation:
        'Coming right after the description of knowledge handed from printer to printer, the sentence contrasts the relatively simple rescue of the presses with the more delicate work of keeping that knowledge alive.',
      optionExplanations: [
        'The passage says the presses were "rescued," which implies effort. The sentence compares two kinds of preservation; it does not credit luck for either.',
        'The sentence looks back on what has already been saved. It does not call for further rescues, and the paragraph\'s focus is on knowledge, not on more machines.',
        'Correct. Having said that hands-on knowledge "nearly disappeared," the author notes that the presses were the simpler thing to rescue, implying that passing on skill is the real challenge.',
        'The last paragraph learns from the traditionalists\' unease without endorsing their view of plates. The final sentence is about saving knowledge, not about plates.',
      ],
      skill: 'CS',
      difficulty: 'medium',
    },
  ],
}

const PASSAGE_4: ActFLPassage = {
  id: 'act-fl3-r-04',
  title: 'Two Views of De-extinction',
  kind: 'paired',
  text: `**Passage A: A New Instrument for Conservation**

The woolly mammoth has been gone for thousands of years; the last known population, on Wrangel Island in the Arctic Ocean, died out roughly 4,000 years ago. Yet several research groups, among them the biotechnology company Colossal Biosciences, now say they intend to bring something like it back.

The word "something" matters. No one proposes to clone a mammoth, because no intact living mammoth cells survive. Instead, scientists would start with the genome of the Asian elephant, the mammoth's closest living relative, and use gene-editing tools to rewrite selected genes so that the resulting animal carries mammoth traits such as dense hair, a thick layer of fat, and small ears that lose less heat. The goal is not a perfect replica but an animal that can live where mammoths lived and do what mammoths did.

What mammoths did, some ecologists argue, was shape a landscape. Grazing giants trampled snow, knocked down shrubs, and fertilized grasses with their dung, helping to keep much of the far north open grassland. In Siberia, the scientist Sergey Zimov and his son Nikita have spent years testing a version of this idea at a reserve they call Pleistocene Park, where horses, bison, and other grazers stand in for the missing mammoths. Their hope is that heavy animals, by packing down the snow that insulates the ground in winter, could help keep frozen soil colder and slow the release of the carbon it stores. The hypothesis remains unproven, but it gives de-extinction a purpose beyond spectacle.

The technologies developed along the way may matter even more. In 2020, a black-footed ferret named Elizabeth Ann was born, cloned from the cells of a ferret named Willa that had been frozen in 1988. Every black-footed ferret then alive descended from just a handful of founders, and Willa had left no living descendants, so her clone carried genes absent from the rest of the species, a way to widen a dangerously narrow gene pool. Tools for reading, editing, and banking genomes could help many species that are not yet extinct.

Extinction has long been treated as the one environmental loss that can never be undone. If that is no longer strictly true, conservation gains a new instrument. It would be strange to refuse to learn how to use it.

**Passage B: The Limits of Revival**

Every de-extinction project eventually confronts the same obstacle: the past does not keep well. DNA begins breaking apart soon after an animal dies, and after thousands of years what remains, even in frozen Arctic remains, survives only in short fragments. Cloning, which copies an animal from the nucleus of an intact cell, is therefore impossible for long-extinct species. Even for a recently lost animal, the record is discouraging. In 2003, a research team cloned the Pyrenean ibex, or bucardo, from cells taken from the last of its kind before she died in 2000. The newborn lived only minutes, killed by a defect in its lungs.

For the mammoth, then, the plan is editing, not cloning, and an edited elephant is still an elephant. It would have to be carried by an elephant mother or by an artificial womb that does not yet exist, and Asian elephants are endangered, carry a calf for nearly two years, and bear few young. It would also grow up without a single mammoth to learn from. Much of what elephants know, from migration routes to the care of young, is learned socially from older animals. A mammoth-like body would arrive without a mammoth's education.

Then there is the question of how such an animal would live. The passenger pigeon, once among the most numerous birds in North America, vanished after relentless hunting and the clearing of eastern forests; the last known bird, Martha, died at the Cincinnati Zoo in 1914. Scientists who hope to recreate it by editing the genome of a relative, the band-tailed pigeon, must reckon with the fact that it nested in enormous colonies. A few hundred engineered birds might not be able to live the way the species did.

Finally, there is cost. Money and scientific attention are limited, and one analysis concluded that spending on revived species could, in some cases, lead to a net loss of biodiversity by drawing resources away from animals still alive. Worse, the promise that lost species can be recovered might make it easier to tolerate losing them. The most reliable way to keep a species is still not to lose it.`,
  questions: [
    {
      id: 'act-fl3-r-04-q1',
      question:
        'According to Passage A, heavy grazing animals might help keep Arctic soil frozen by:',
      options: [
        'knocking down shrubs that would otherwise crowd out grasses.',
        'fertilizing the grasses whose roots help hold the soil in place.',
        'eating the plants that would otherwise release stored carbon.',
        'compressing the snow so that it insulates the ground less well.',
      ],
      correctIndex: 3,
      explanation:
        'Passage A says the hope is that heavy animals, "by packing down the snow that insulates the ground in winter," could keep frozen soil colder.',
      optionExplanations: [
        'Knocking down shrubs is mentioned as part of how mammoths kept the land open grassland. Passage A ties the cooling of the soil specifically to what grazers do to the snow, not to shrubs.',
        'Dung fertilizing grasses is another way mammoths shaped the landscape, but Passage A never links it to the temperature of the soil or mentions roots holding soil in place.',
        'Passage A mentions carbon stored in frozen soil, but the grazers are meant to keep that soil cold, not to eat plants that release carbon. This confuses the goal with the mechanism.',
        'Correct. Snow normally acts as a blanket over the ground in winter; trampled, packed snow insulates less, letting the cold reach the soil, which is the mechanism Passage A describes.',
      ],
      skill: 'KID',
      difficulty: 'medium',
    },
    {
      id: 'act-fl3-r-04-q2',
      question: 'Passage A indicates that the birth of Elizabeth Ann mattered to her species mainly because she:',
      options: [
        'supplied genes that the rest of the living ferret population lacked.',
        'was the first animal of any kind cloned from frozen cells.',
        'proved that an extinct species can be brought back to life.',
        'descended from the same few founders as other ferrets.',
      ],
      correctIndex: 0,
      explanation:
        'Willa left no living descendants, so a clone made from her frozen cells added genes missing from a population descended from only a few founders.',
      optionExplanations: [
        'Correct. Because Willa had no living descendants, her genes had dropped out of the species; her clone put them back into a population that had become dangerously uniform.',
        'Passage A never claims Elizabeth Ann was the first animal cloned from frozen cells. This adds a record that the passage does not mention.',
        'The black-footed ferret was not extinct; Passage A uses Elizabeth Ann to show how the tools could help species "not yet extinct." This misreads the example.',
        'This describes the other ferrets. Elizabeth Ann mattered precisely because she came from Willa, whose genes were not shared by the descendants of those few founders.',
      ],
      skill: 'KID',
      difficulty: 'medium',
    },
    {
      id: 'act-fl3-r-04-q3',
      question: 'In Passage A, the discussion of Pleistocene Park mainly serves to:',
      options: [
        'prove that grazers have already reversed the thawing of frozen soil.',
        'illustrate an ecological role that mammoth-like animals might fill.',
        'identify where Colossal intends to release its first animals.',
        'argue that horses and bison suit the Arctic better than mammoths.',
      ],
      correctIndex: 1,
      explanation:
        'The reserve tests the idea that large grazers shape the northern landscape, giving revived mammoths a possible job; the author notes it gives de-extinction "a purpose beyond spectacle."',
      optionExplanations: [
        'Passage A calls the idea "unproven." The park is a test of a hypothesis, so claiming that it has already reversed thawing overstates what the passage reports.',
        'Correct. The Zimovs use other grazers as stand-ins to test whether big animals can keep the far north cold and grassy, a task revived mammoths might one day take on.',
        'Pleistocene Park is run by the Zimovs, and Passage A never connects it to any release plan by Colossal. This joins two separate parts of the passage.',
        'The horses and bison "stand in for the missing mammoths" because mammoths are unavailable, not because they are better. Passage A makes no such comparison.',
      ],
      skill: 'CS',
      difficulty: 'medium',
    },
    {
      id: 'act-fl3-r-04-q4',
      question: 'According to Passage B, cloning cannot be used to bring back the mammoth because:',
      options: [
        'Asian elephants are too distantly related to carry a cloned calf.',
        'the bucardo experiment showed that every clone dies very young.',
        'remains hold only broken DNA, not the whole cells cloning needs.',
        'frozen Arctic remains have yielded no DNA of any kind at all.',
      ],
      correctIndex: 2,
      explanation:
        'Passage B explains that DNA breaks apart after death and that cloning requires an intact cell nucleus, so long-dead animals cannot be cloned.',
      optionExplanations: [
        'Passage B says an elephant mother would carry an edited calf; it never says elephants are too distant to do so. The obstacle to cloning is the state of the DNA, not the surrogate.',
        'The bucardo case is one discouraging result for a recently lost animal. Passage B does not claim that every clone dies young; that turns one example into a rule.',
        'Correct. After thousands of years, mammoth DNA exists only in fragments, while cloning starts from the nucleus of an intact cell, so no usable starting material exists.',
        'Passage B says DNA does survive in Arctic remains, though only in short fragments. Claiming no DNA at all exaggerates the problem the passage describes.',
      ],
      skill: 'KID',
      difficulty: 'easy',
    },
    {
      id: 'act-fl3-r-04-q5',
      question:
        'Passage B suggests that a mammoth-like elephant would differ from a true mammoth in part because it would:',
      options: [
        'have no older animals of its own kind to teach it how to behave.',
        'be unable to survive the cold of an Arctic winter.',
        'be carried to term in an artificial womb, not a mother.',
        'grow slowly, since elephants carry calves for two years.',
      ],
      correctIndex: 0,
      explanation:
        'Passage B notes that elephants learn much of what they know from older animals, so an engineered animal "would arrive without a mammoth\'s education."',
      optionExplanations: [
        'Correct. Because no mammoths are left to learn from, the animal would have a mammoth-like body but none of the learned knowledge, such as migration routes, that real mammoths passed down.',
        'Passage B never says the animal could not handle the cold; Passage A says it would be edited for cold traits. This difference is not one the author of Passage B claims.',
        'Passage B says an artificial womb "does not yet exist," so the calf would likely need an elephant mother. This turns an unavailable option into a certainty.',
        'The nearly two-year pregnancy is a reason surrogacy is hard on endangered elephants. Passage B never says the calf would grow slowly or that this sets it apart from a mammoth.',
      ],
      skill: 'KID',
      difficulty: 'medium',
    },
    {
      id: 'act-fl3-r-04-q6',
      question:
        'According to Passage B, the passenger pigeon\'s habit of nesting in enormous colonies poses a problem for its revival because:',
      options: [
        'band-tailed pigeons are unable to build nests in large colonies.',
        'the species may have needed vast numbers to live as it once did.',
        'such colonies would draw the same hunters who wiped it out.',
        'Martha, the last known bird, never laid eggs at the zoo.',
      ],
      correctIndex: 1,
      explanation:
        'Passage B warns that "a few hundred engineered birds might not be able to live the way the species did," since the species bred in huge colonies.',
      optionExplanations: [
        'Passage B mentions the band-tailed pigeon only as the relative whose genome would be edited. It says nothing about that bird\'s nesting abilities.',
        'Correct. A bird that lived and nested in huge groups might not behave or breed normally in small numbers, so a few hundred revived birds could fall short of the species\' way of life.',
        'Hunting helped cause the extinction, but Passage B never says revived colonies would face hunters again. Its concern is the small number of birds, not renewed hunting.',
        'Passage B names Martha only as the last known bird and says nothing about her laying eggs. This invents a detail unrelated to the point about colonies.',
      ],
      skill: 'KID',
      difficulty: 'easy',
    },
    {
      id: 'act-fl3-r-04-q7',
      question: 'Both authors would most likely agree that a revived "mammoth" would be:',
      options: [
        'a powerful tool for slowing the thaw of frozen ground.',
        'a waste of money better spent on species still living.',
        'possible only once cloning techniques have improved.',
        'an altered elephant rather than an exact copy of the lost species.',
      ],
      correctIndex: 3,
      explanation:
        'Passage A says the goal is "not a perfect replica," and Passage B says "an edited elephant is still an elephant"; both see the result as a modified elephant.',
      optionExplanations: [
        'Only Passage A raises this possibility, and even it calls the idea "unproven." The author of Passage B never discusses frozen ground, so this is not shared ground.',
        'This reflects Passage B\'s concern about cost. Passage A argues that the research is worth pursuing, so its author would not agree.',
        'Both passages say mammoths cannot be cloned at all and that the plan relies on gene editing instead. Neither expects better cloning to make it possible.',
        'Correct. Passage A admits the aim is an animal with selected mammoth traits, "not a perfect replica," and Passage B insists the result would remain an elephant, so both describe a modified elephant.',
      ],
      skill: 'IKI',
      difficulty: 'medium',
    },
    {
      id: 'act-fl3-r-04-q8',
      question:
        'How would the author of Passage B most likely respond to Passage A\'s conclusion that "it would be strange to refuse to learn how to use" de-extinction?',
      options: [
        'By agreeing, since the bucardo clone showed the method can work.',
        'By noting that gene editing is still too slow to help any species.',
        'By warning that the hope of revival could weaken efforts to prevent losses.',
        'By arguing that only the passenger pigeon is worth bringing back.',
      ],
      correctIndex: 2,
      explanation:
        'Passage B cautions that the promise of recovery "might make it easier to tolerate losing" species, so a new tool could undercut the work of protecting animals in the first place.',
      optionExplanations: [
        'Passage B cites the bucardo as a "discouraging" case, since the clone lived only minutes. Its author would not treat it as proof the method works.',
        'Passage B never discusses the speed of gene editing; its doubts concern DNA, upbringing, habitat, and cost. This objection is not one the author makes.',
        'Correct. Passage B worries that believing lost species can be recovered may make people more willing to let species disappear, which would answer Passage A\'s enthusiasm with a warning.',
        'Passage B discusses the passenger pigeon as another example of the obstacles revival faces. It does not single out that bird as the one species worth reviving.',
      ],
      skill: 'IKI',
      difficulty: 'medium',
    },
    {
      id: 'act-fl3-r-04-q9',
      question:
        'The author of Passage A would most likely answer Passage B\'s concern about the cost of de-extinction by pointing out that:',
      options: [
        'the mammoth project has already produced a healthy calf.',
        'its research yields tools that can help species still living.',
        'Asian elephants are no longer considered an endangered species.',
        'losses of biodiversity cannot be prevented, whatever the price.',
      ],
      correctIndex: 1,
      explanation:
        'Passage A argues that "the technologies developed along the way may matter even more," citing the ferret clone and genome tools that can help species not yet extinct.',
      optionExplanations: [
        'Passage A describes the mammoth project as a plan, saying research groups "intend" to bring back something like it. Nothing suggests any calf has yet been born.',
        'Correct. Passage A presents the ferret clone and other genome tools as benefits for living species, which would counter Passage B\'s worry that the money is drawn away from them.',
        'Passage A never discusses the status of Asian elephants; Passage B calls them endangered. The author of Passage A gives no reason to dispute that.',
        'Passage A is hopeful about conservation, calling de-extinction a "new instrument." Saying losses cannot be prevented would contradict the spirit of its argument.',
      ],
      skill: 'IKI',
      difficulty: 'hard',
    },
  ],
}

export const ACT_FL3_READING: ActFLPassage[] = [PASSAGE_1, PASSAGE_2, PASSAGE_3, PASSAGE_4]
