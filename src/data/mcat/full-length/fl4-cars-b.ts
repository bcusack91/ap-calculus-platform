import type { MCATPassage } from '../types'

/**
 * MCAT Full-Length Form 4 — CARS, file B (passages 6–9; 6, 6, 6, 5 questions = 23).
 *
 * Four original argument-driven passages (500–600 words each) written to the
 * Form 4 rebuild blueprint: history / historiography (counterfactual history
 * as a method), music / cultural criticism (why we listen to sad music),
 * geography (maps and what they leave out), and religion (pilgrimage as travel
 * that makes meaning). Every item is answerable from the passage alone; no
 * outside knowledge is required.
 */
export const FL4_CARS_B_PASSAGES: MCATPassage[] = [
  {
    id: 'fl4-cars-b-06',
    section: 'cars',
    discipline: 'history / historiography',
    title: 'The “If” Inside Every “Because”',
    passageText:
      'Among professional historians, few habits of mind are treated with more suspicion than the question “what if?” To ask what would have happened had a general turned left instead of right, or had an election gone the other way, is to leave the archive behind, and the archive is the historian’s only claim to be doing something other than telling stories. What did not happen left no documents. A counterfactual, on this view, is a parlor game: diverting after dinner, but no part of the discipline.\n\nThe objection has the virtue of modesty, but it does not survive a close look at what historians actually write. Every causal claim in a history book carries a counterfactual inside it. To say that a drought caused a rebellion is to say, at the least, that without the drought the rebellion would not have come when it did, or would not have come at all. To say that a treaty kept the peace is to say that without the treaty the peace would have broken. The historian who refuses on principle to ask “what if” has not escaped the question; she has only agreed to answer it without looking at it. Her counterfactuals are still there, unexamined, in every “because.”\n\nIf that is so, the choice is not between using counterfactuals and avoiding them, but between using them carelessly and using them with discipline. And discipline is possible. The first rule is that the altered premise should be small: a single decision, a single accident, a single death, rather than a different century. The second is that the alternative should be one that people at the time actually considered. A historian who asks what would have followed if a council had adopted the proposal it rejected by two votes is reasoning from the documents, since the rejected proposal is itself in the record, argued for by people who expected it to work. A historian who asks what would have followed if the council had possessed a technology no one had yet imagined is writing fiction, however learned the footnotes.\n\nThe third rule is the hardest to follow: the imagined consequences should be traced only a short distance. Each step away from the altered premise multiplies the ways the world might have gone, and after a few steps the historian is no longer estimating what would have happened but choosing among possibilities she happens to find interesting. The popular books that follow a single changed battle forward two hundred years, through altered wars and altered inventions, fail not because they ask “what if” but because they pretend that such a question still has one answer at that distance.\n\nThere is a further benefit to disciplined counterfactuals that their critics rarely notice. The past, once it has happened, looks inevitable; we know how the story ended, and it is hard not to read every earlier moment as leading there. People at the time did not know the ending. They faced choices that seemed open to them, and some of them feared outcomes that never came. To recover those unrealized possibilities is not to indulge in fantasy but to restore to the past the uncertainty in which its participants actually lived. A history that cannot imagine any other outcome has quietly misdescribed the very people it claims to understand.',
    questions: [
      {
        question: 'Which of the following best expresses the central thesis of the passage?',
        options: [
          'Historians should give up counterfactual reasoning, since no document records what did not happen.',
          'Counterfactual reasoning is built into causal history and is legitimate when it is properly limited.',
          'Counterfactual reasoning matters mainly because it restores the uncertainty that people once felt.',
          'Popular counterfactual histories are more rigorous than professional historians tend to admit.',
        ],
        correctAnswer: 1,
        explanation:
          'The author argues that every causal claim already contains a counterfactual, so the real choice is between careless and disciplined use, and then sets out the rules for disciplined use. Abandoning counterfactuals is the critics’ position, which the author rejects. Restoring past uncertainty is presented as “a further benefit,” a supporting point rather than the thesis. And the author faults the popular two-hundred-year books for pretending a distant question has one answer, which is the opposite of praising their rigor.',
        skill: 'main-idea',
      },
      {
        question: 'The examples of the drought and the treaty in the second paragraph primarily serve to:',
        options: [
          'show that ordinary causal claims already imply a judgment about what would otherwise have happened.',
          'illustrate the kind of small, single premise that the author later says a counterfactual ought to alter.',
          'give instances of events whose causes historians have mistakenly identified by relying on the archive.',
          'concede that some important historical questions cannot be settled by the documentary record alone.',
        ],
        correctAnswer: 0,
        explanation:
          'Each example unpacks a causal statement (“caused,” “kept the peace”) into the claim about an alternative world that it implies, which is how the author shows that critics cannot avoid counterfactuals. The rules about small premises come in the next paragraph and are not what these examples illustrate. The author does not say these causal attributions are mistaken; they are generic illustrations. Nor are the examples a concession; they are the core of the author’s rebuttal to the critics.',
        skill: 'function',
      },
      {
        question:
          'The author’s claim that asking about a proposal rejected by two votes counts as “reasoning from the documents” depends on which of the following unstated assumptions?',
        options: [
          'Councils that reject a proposal by a narrow margin usually come to regret the decision.',
          'A proposal that nearly passed would certainly have succeeded had it been adopted.',
          'Proposals that were rejected survive in the archive more often than adopted ones.',
          'What contemporaries argued about an option is evidence of how it would have gone.',
        ],
        correctAnswer: 3,
        explanation:
          'The author says the rejected proposal is “in the record, argued for by people who expected it to work”; for that record to support reasoning about consequences, the recorded arguments and expectations must count as evidence of what the proposal would have produced. The argument does not need councils to regret narrow decisions. It does not need certainty of success; the author speaks of “estimating,” not guaranteeing. And it requires only that the rejected proposal be recorded, not that rejected proposals survive better than adopted ones.',
        skill: 'assumption',
      },
      {
        question: 'Which of the following inquiries would best satisfy all three of the author’s rules for a disciplined counterfactual?',
        options: [
          'How a port city’s trade would have developed over three centuries had its harbor never silted up',
          'How a border war would have ended had one army possessed a weapon not yet invented anywhere',
          'How a strike would have ended that month had the mayor taken the mediation her aides urged',
          'How a nation’s culture would differ today had it been founded in an entirely different century',
        ],
        correctAnswer: 2,
        explanation:
          'The strike case alters a single decision, the alternative was actually urged at the time, and the consequences are traced only a month, so it meets all three rules. The harbor case traces consequences across three centuries, violating the rule of short distance. The uninvented weapon is an alternative no one at the time could have considered, which the author calls fiction. A founding in a different century is the kind of large premise the first rule excludes.',
        skill: 'application',
      },
      {
        question: 'The author would most likely agree with each of the following statements EXCEPT:',
        options: [
          'A historian who never writes the word “if” still makes counterfactual judgments.',
          'The farther a counterfactual is traced, the less it reveals about what would have occurred.',
          'The outcome of past events looked less certain to those living through them than it does now.',
          'Long-range counterfactual histories go wrong chiefly because they ask about events that never happened.',
        ],
        correctAnswer: 3,
        explanation:
          'The author says the long-range books “fail not because they ask ‘what if’” but because they pretend a distant question has one answer, so the author would reject the claim that asking about unrealized events is their chief fault. The author does hold that every “because” conceals a counterfactual, so a historian who avoids “if” still makes such judgments. The author also says each step from the premise multiplies possibilities until the historian is merely choosing among them. And the final paragraph holds that the past looks inevitable only in hindsight.',
        skill: 'detail',
      },
      {
        question:
          'Suppose a historian found letters showing that, in the weeks before a decisive battle, the officers of the army that lost expected almost unanimously to win. How would this discovery bear on the passage?',
        options: [
          'It would illustrate the author’s point that outcomes now seen as settled once appeared open to the people involved.',
          'It would weaken the author’s first rule, since it shows that battles are too complex to be altered by a single premise.',
          'It would weaken the author’s argument, since it shows that people at the time misjudged the likely course of events.',
          'It would have no bearing, since the author’s rules concern proposals that were debated, not expectations about them.',
        ],
        correctAnswer: 0,
        explanation:
          'The final paragraph argues that the past looks inevitable in hindsight although participants “faced choices that seemed open” and feared or hoped for outcomes that never came; officers confidently expecting a victory that did not happen are a direct instance. The letters say nothing about how many premises a counterfactual should alter, so they do not bear on the first rule. Contemporaries misjudging the outcome is exactly what the author expects, not a problem for the argument. And the discovery is relevant to the passage’s final claim even though it is not about a debated proposal.',
        skill: 'new-information',
      },
    ],
  },
  {
    id: 'fl4-cars-b-07',
    section: 'cars',
    discipline: 'music / cultural criticism',
    title: 'Sorrow in Good Company',
    passageText:
      'The question of why anyone would choose to hear sad music is older than recorded sound, but recorded sound has made it pressing. When music had to be performed, sorrowful pieces arrived when the occasion called for them, at funerals and farewells. Now that any song can be summoned at any hour, people deliberately select the saddest ones, and they do so most often, by their own report, when they are already unhappy. It is as if someone already shivering were to reach, again and again, for a colder coat.\n\nTwo answers are usually given. The first holds that sad music purges sorrow: by drawing grief out and letting it run its course in the space of a song, the music leaves the listener lighter than before. The second holds that sad music is a kind of rehearsal, allowing us to feel sorrow at no cost, since we know the loss belongs to no one and will end when the track does. Both answers have something to them, and both, I think, miss what listeners actually describe.\n\nThe purging theory predicts that sad music should be used like a remedy, taken once and then set aside. But listeners return to the same mournful song for years, and they do not report that it has used up their sorrow; if anything, they describe the song as a place they go back to. The rehearsal theory fares worse. It explains the pleasure of a sadness that is not ours, but the listener who plays a lament in the week after a real loss is not sampling a harmless imitation of grief. She has the real thing already. Whatever she seeks from the song, it is not a safe substitute for what she feels.\n\nWhat such listeners most often say is that the song understands them. The phrase is loose, but it points at something exact. Sorrow, in the middle of it, is shapeless and private; it seems to belong to no pattern and to be unlike anything anyone else has felt. A sad song gives it a shape: a beginning and an end, a rise and a fall, a melody that someone else composed and that thousands of others have heard. To hear one’s own condition in that shape is to learn two things at once, that the feeling can be given a form and that one is not the first to have it. Neither discovery removes the sorrow. Both remove its loneliness.\n\nThis is why, I suspect, the saddest music is seldom the most chaotic. A composer who wished only to reproduce grief would write something formless and harsh, and almost no one would listen to it twice. The songs people return to are, on the contrary, highly ordered: their sorrow is measured, repeated, resolved. The listener is not being handed more pain than she has, but her own pain returned to her in a form she could not have made herself.\n\nIf this account is right, the question with which we began was posed backward. We asked why people seek out sadness when they are sad, as though the song added something unwelcome to a burden already heavy. But what the listener seeks is not the sadness, which she has in abundance. It is the company.',
    questions: [
      {
        question: 'Which of the following best expresses the main point of the passage?',
        options: [
          'People listen to sad music chiefly to drain off the sorrow they already feel.',
          'Recorded sound has changed the occasions on which sad music is usually heard.',
          'Sad music appeals because it gives private sorrow an ordered and shared form.',
          'The pleasure of sad music lies in feeling a sorrow that belongs to no one.',
        ],
        correctAnswer: 2,
        explanation:
          'The author rejects both standard theories and argues that a sad song gives shapeless, private sorrow a shape that others have also heard, removing its loneliness — “It is the company.” Draining off sorrow is the purging theory, which the author says listeners’ behavior does not fit. Recorded sound is mentioned only to explain why the question has become pressing. Feeling a sorrow that belongs to no one is the rehearsal theory, which the author says “fares worse.”',
        skill: 'main-idea',
      },
      {
        question: 'The author suggests that the rehearsal theory is weaker than the purging theory because the rehearsal theory:',
        options: [
          'predicts that listeners would use a sad song once and then set it aside.',
          'cannot account for listening when the sorrow is the listener’s own.',
          'fails to explain why listeners who are content ever choose sad music.',
          'depends on the claim that sad music is by nature harsh and formless.',
        ],
        correctAnswer: 1,
        explanation:
          'The rehearsal theory explains enjoying a sadness that “is not ours,” but it cannot explain the grieving listener, for whom the song is no safe substitute because she “has the real thing already.” The use-once-and-set-aside prediction belongs to the purging theory, not the rehearsal theory. Content listeners are the case the rehearsal theory handles well, so that is not its weakness. And neither theory depends on sad music being formless; that claim appears only in the author’s own argument about composers.',
        skill: 'inference',
      },
      {
        question: 'The author’s observation that “the saddest music is seldom the most chaotic” serves mainly to:',
        options: [
          'concede that the purging theory accounts for some features of sad music.',
          'suggest that composers of sad songs seldom feel the grief they portray.',
          'explain why unhappy listeners prefer sad music to more cheerful music.',
          'support the view that listeners seek the form given to sorrow, not sorrow itself.',
        ],
        correctAnswer: 3,
        explanation:
          'If listeners wanted grief as such, a formless, harsh reproduction would serve; the fact that the songs people return to are “highly ordered” supports the author’s claim that what listeners value is sorrow given a shape. The observation is part of the author’s own account, not a concession to the purging theory. Nothing in the passage concerns what composers themselves feel. And the observation compares orderly with chaotic sad music; it does not address why sad music is preferred to cheerful music.',
        skill: 'function',
      },
      {
        question:
          'Based on the passage, which of the following observations tell against the purging theory?\n\nI. Listeners return to the same mournful song over many years.\nII. Listeners do not report that a song has used up their sorrow.\nIII. Listeners choose sad songs most often when they are already unhappy.',
        options: ['I only', 'I and II only', 'II and III only', 'I, II, and III'],
        correctAnswer: 1,
        explanation:
          'The purging theory predicts that a sad song works like a remedy, “taken once and then set aside,” and leaves the listener lighter; repeated return over years (I) and the absence of any sense that sorrow has been used up (II) both conflict with that prediction. Choosing sad songs when already unhappy (III) is just what a remedy theory expects, since remedies are sought by those who are unwell, so III does not tell against it. Hence I and II only.',
        skill: 'detail',
      },
      {
        question: 'Which of the following findings, if true, would most weaken the author’s account?',
        options: [
          'Grieving listeners do not feel their sorrow lessen after hearing a sad song.',
          'Contented listeners also enjoy sad songs, though they choose them less often.',
          'Grieving listeners say sad songs leave them feeling more alone than before.',
          'The most often replayed sad songs follow regular and repeated melodic patterns.',
        ],
        correctAnswer: 2,
        explanation:
          'The author’s central claim is that a sad song does not remove sorrow but removes its loneliness, offering “company”; listeners reporting greater isolation would contradict that directly. Sorrow that does not lessen is exactly what the author predicts (“Neither discovery removes the sorrow”). Contented listeners enjoying sad songs fits the rehearsal theory, which the author grants has “something to” it, and does not touch the author’s account of grieving listeners. Regular, repeated patterns in the most-replayed songs support the author’s point about order.',
        skill: 'strengthen-weaken',
      },
      {
        question: 'The author’s account would most readily explain why a grieving person might find comfort in:',
        options: [
          'reading a letter in which a stranger describes a loss much like her own.',
          'avoiding, for some weeks, anything that might remind her of her loss.',
          'watching comedies that draw her attention away from her sorrow.',
          'keeping a private journal of her grief that no one else will read.',
        ],
        correctAnswer: 0,
        explanation:
          'A stranger’s account of a similar loss does what the author says a sad song does: it gives the feeling a form made by someone else and shows that the reader “is not the first to have it,” easing its loneliness. Avoiding reminders and seeking distraction are ways of escaping sorrow, whereas the author’s listener seeks her sorrow reflected back to her. A private journal gives grief a form, but one she makes herself and shares with no one, lacking both the outside form and the company the author stresses.',
        skill: 'application',
      },
    ],
  },
  {
    id: 'fl4-cars-b-08',
    section: 'cars',
    discipline: 'geography',
    title: 'The Blank Spaces',
    passageText:
      'Every map is a list of refusals. A street map of a city leaves out the height of its buildings, the names of its residents, the age of its trees, and the direction in which its sewers drain; a map of its sewers leaves out nearly everything else. A map that left nothing out would have to be as large as the territory it described and as detailed, and it would be exactly as useless for finding one’s way. Omission is not a defect of maps. It is what makes them maps.\n\nThis simple point is worth stating because a more ambitious one has grown up around it. A number of critics, writing about maps made by surveyors in the service of governments and companies, have argued that maps are instruments of power and that their blank spaces are never innocent. A map drawn for a timber company may show the rivers that can float logs and the ridges that divide the concessions, and leave the villages along those rivers unmarked; the land then appears, to anyone who consults the map, to be empty and waiting. On this view, the map did not merely fail to record the villagers. It helped to make them disappear.\n\nI think the critics are right about the timber map and wrong about maps. Their argument, pressed to its conclusion, seems to require that a just map include everyone and everything, which is to say that it demands the impossible map with which we began. If every omission is an act of power, then every map is equally guilty, and the charge loses its force precisely where it ought to be sharpest. There is a difference between a sewer map that omits the villages and a timber map that omits them, and an account on which both are simply instruments of power cannot say what it is.\n\nThe difference, I would suggest, lies not in what is left out but in whether the leaving out can be seen. No one consulting a sewer map concludes that the city has no residents; the purpose of the map is plain on its face, and its silences are understood as belonging to that purpose. The subway diagram that straightens every curve and evens every distance does not deceive its riders, because they know what it is for. The timber map deceived because it presented a selection as though it were a survey. Its blank spaces looked like the record of an absence rather than the result of a decision, and the people who used it, from officials and investors to later mapmakers who copied it, had no way to tell the difference.\n\nThis suggests a remedy more modest than the one the critics usually propose, and more likely to be adopted. Maps need not include everything; they need to declare what they are for. A legend that states the map’s purpose and the kinds of things it does not show would turn an invisible omission into a visible one. It would not make the timber map just. It would, however, prevent it from passing itself off as a picture of the land, and it would leave the reader, rather than the mapmaker, to decide what the blank spaces mean.\n\nWhat we may fairly ask of maps, in the end, is not completeness but candor. The mapmaker cannot help choosing. She can help hiding that she chose.',
    questions: [
      {
        question: 'The author would most likely say that the critics’ argument goes wrong because it:',
        options: [
          'overlooks the legitimate reasons companies had for mapping rivers and ridges.',
          'assumes that the villagers had no interest in how their own land was mapped.',
          'overstates how often later mapmakers copied the maps of their predecessors.',
          'treats every omission as culpable and so cannot single out the timber map.',
        ],
        correctAnswer: 3,
        explanation:
          'The author agrees that the timber map did harm but objects that if “every omission is an act of power,” every map is equally guilty and the critics cannot say what distinguishes the timber map from a sewer map. The author never defends the timber company’s purposes. Nothing suggests the critics assume the villagers were indifferent; their complaint is on the villagers’ behalf. And the copying of maps is mentioned only as part of how the timber map misled, not as something the critics exaggerate.',
        skill: 'inference',
      },
      {
        question: 'The author mentions the subway diagram primarily in order to:',
        options: [
          'show that maps made for public use still serve the interests of the powerful.',
          'give an example of a map that omits too little to be of use to its readers.',
          'illustrate a distortion that misleads no one because its purpose is evident.',
          'contrast a map produced by a government with one produced by a company.',
        ],
        correctAnswer: 2,
        explanation:
          'The subway diagram distorts heavily, yet riders are not deceived “because they know what it is for,” which supports the author’s claim that the fault lies in hidden rather than visible omission. The example is used against the critics’ power thesis, not in support of it. The diagram omits and distorts a great deal, so it is not an example of omitting too little. And the passage never identifies who made the diagram, so no contrast between government and company is drawn.',
        skill: 'function',
      },
      {
        question: 'The author’s proposed remedy assumes that:',
        options: [
          'readers told what a map leaves out will weigh that when reading its blanks.',
          'mapmakers who state a map’s purpose will then include more features in it.',
          'most maps now in use are drawn for commercial rather than public purposes.',
          'a legend can list every feature of a territory that a map does not show.',
        ],
        correctAnswer: 0,
        explanation:
          'The legend is supposed to leave “the reader … to decide what the blank spaces mean,” which works only if readers actually take the declared omissions into account when interpreting the map. The remedy is explicitly that maps “need not include everything,” so it does not rely on mapmakers adding features. The proportion of commercial maps plays no role in the argument. And the legend states “the kinds of things” omitted, not every omitted feature, which the author has already called impossible.',
        skill: 'assumption',
      },
      {
        question: 'Which of the following would the author regard as most objectionable?',
        options: [
          'A hiking map, titled as a guide to trails, that leaves out all the roads in the area',
          'A regional atlas, offered as a general survey, that silently omits small settlements',
          'A visitors’ map, labeled as such, that enlarges the old town and shrinks the suburbs',
          'A weather map that shows only bands of temperature and names none of the towns',
        ],
        correctAnswer: 1,
        explanation:
          'For the author the fault is presenting “a selection as though it were a survey”: an atlas offered as a general survey that omits settlements without saying so makes their absence look like a fact rather than a choice. The hiking map and the visitors’ map omit or distort a great deal, but each declares its purpose, so their silences are visible. The weather map’s purpose is plain on its face, like the sewer map, so no reader would conclude the region has no towns.',
        skill: 'application',
      },
      {
        question:
          'Suppose it were learned that the officials who relied on the timber map knew perfectly well that the river valleys were inhabited. This discovery would most likely:',
        options: [
          'strengthen the critics’ claim that every omission on a map is an act of power.',
          'strengthen the case for requiring every map to carry a legend stating its purpose.',
          'have no bearing on the argument, which is concerned only with later mapmakers.',
          'weaken the author’s account of how the timber map misled those who relied on it.',
        ],
        correctAnswer: 3,
        explanation:
          'The author says the timber map did harm by deceiving its users, who “had no way to tell the difference” between an absence and a decision; officials who already knew the valleys were inhabited were not deceived, so that account of the harm would not apply to them. The discovery says nothing about maps in general, so it does not support the critics’ universal claim. If informed officials acted anyway, a legend disclosing omissions would have changed little, so the case for legends is not strengthened. And the author lists officials among the map’s users, so the discovery is relevant.',
        skill: 'new-information',
      },
      {
        question: 'Which of the following best states the main point of the passage?',
        options: [
          'Maps should aim to record everything, including what their makers think minor.',
          'Maps made for governments and companies are tools of power and merit distrust.',
          'Maps must omit, and what deserves blame is concealing that a choice was made.',
          'The harm done by commercial maps comes mainly from later mapmakers’ copying.',
        ],
        correctAnswer: 2,
        explanation:
          'The author opens by arguing that omission is what makes a map a map and closes by locating the fault in hiding the choice rather than making it, with a legend as the remedy. A map that records everything is the “impossible map” the author rejects. Treating maps as tools of power is the critics’ view, which the author calls right about the timber map but “wrong about maps.” Copying by later mapmakers is one detail of how the timber map misled, not the passage’s point.',
        skill: 'main-idea',
      },
    ],
  },
  {
    id: 'fl4-cars-b-09',
    section: 'cars',
    discipline: 'religion',
    title: 'Going to Be Changed',
    passageText:
      'There is an old complaint, heard wherever holy places have become easy to reach, that pilgrimage has been cheapened. Where the faithful once walked for months, sleeping in barns and begging bread, they now arrive by coach in an afternoon, visit the shrine, buy a medal, and are home for supper. The complaint has the ring of truth. It is less clear what truth it is ringing.\n\nConsider what the complaint assumes: that the value of a pilgrimage lies in its hardship, so that the more it costs the traveler in blisters and hunger, the more it is worth. On this view the pilgrim is a kind of athlete of devotion, and the modern visitor who arrives by coach has simply skipped the race. But the view proves too much. If hardship were the measure, then the most devoted pilgrim would be the one who suffered most, and the traveler who walked because he could not afford a horse would outrank, in holiness, the one who rode. Few of the traditions that practice pilgrimage have believed anything of the kind. They have honored the walk without supposing that pain is a currency.\n\nA better account starts from the difference between a pilgrim and a tourist, since the complaint is really that pilgrims have become tourists. The difference is not the means of travel, and it is not even the destination; the same cathedral receives both on the same morning. It is the expectation each brings. The tourist goes to see something and to return as she was, with the addition of a memory. The pilgrim goes in the hope of returning different. She treats the place as making a claim on her, rather than as a sight that is available to her, and she understands the journey as the time in which she makes herself ready to meet that claim.\n\nSeen this way, the old hardships were not the substance of pilgrimage but its instruments. The months of walking removed the traveler from her work, her household, her ordinary rank; they left her dependent on strangers; they gave her, day after day, nothing to do but move toward a single end. These are conditions that tend to produce the expectation of being changed. They do not guarantee it, for there were surely walkers who arrived as unmoved as any sightseer, and their absence does not rule it out.\n\nThe coach, then, is not the enemy. What threatens pilgrimage is not speed but the loss of any interval in which the traveler is set apart. A visitor who flies in, answers her messages in the queue, and flies out may have gone to a holy place without having made a pilgrimage to it. But a visitor who arrives just as quickly and spends her hours at the shrine in silence, away from her ordinary concerns, may have made a genuine one. The complainers are right that something can be lost. They are wrong about where to look for it.\n\nPerhaps the clearest evidence for this view lies in the pilgrim’s return. Pilgrims have always brought something home, a shell or a badge or a vial of water, and the tourist brings home souvenirs that look much the same. The objects do not differ. What differs is whether the one who carries them believes she has come back as someone other than the one who left.',
    questions: [
      {
        question: 'As it is used in the passage, the phrase “athlete of devotion” describes a pilgrim whose devotion is:',
        options: [
          'measured by how much hardship the journey costs him.',
          'shown by how many holy places he manages to visit.',
          'expressed in physical rituals performed at the shrine.',
          'sharpened by competition with his fellow travelers.',
        ],
        correctAnswer: 0,
        explanation:
          'The phrase summarizes the view that “the value of a pilgrimage lies in its hardship,” so that more blisters and hunger mean more worth; the athlete’s achievement is measured by what the race demands. The passage never counts shrines visited, so number of destinations is not the measure. Rituals at the shrine are not mentioned in connection with the phrase, which concerns the journey. And although the metaphor of a race might suggest rivals, the passage makes no claim that pilgrims compete with one another.',
        skill: 'detail',
      },
      {
        question: 'The author’s attitude toward the modern visitor who travels to a shrine by coach is best described as:',
        options: [
          'disapproving, since speed has drained pilgrimage of its older meaning.',
          'open, since the manner of arrival neither makes nor unmakes a pilgrim.',
          'admiring, since the coach spares the traveler the vanity of suffering.',
          'dismissive, since the author regards such visitors as mere tourists.',
        ],
        correctAnswer: 1,
        explanation:
          'The author insists “the coach, then, is not the enemy” and holds that a quick arrival is compatible with a genuine pilgrimage if the visitor is set apart, while a slow one does not guarantee it. Disapproval of speed is the complainers’ attitude, which the author corrects. The author does not praise the coach or call suffering vanity; the walk is honored, only not treated as a currency. And the author explicitly allows that a fast traveler may make “a genuine” pilgrimage, so such visitors are not dismissed as tourists.',
        skill: 'tone',
      },
      {
        question: 'Based on the passage, which of the following travelers would the author be most inclined to regard as making a pilgrimage?',
        options: [
          'A walker who covers the whole traditional route on foot to earn a certificate',
          'A scholar who visits a shrine to study its carvings and means to leave unchanged',
          'A family on a coach tour that photographs five shrines in as many days',
          'A woman who drives to a shrine and spends a silent day there, hoping to be changed',
        ],
        correctAnswer: 3,
        explanation:
          'For the author, the pilgrim goes “in the hope of returning different” and needs an interval set apart from ordinary concerns; the woman who drives but spends a silent day hoping to be changed meets both conditions despite her speed. The walker endures the hardship, but earning a certificate is a goal of display, and the author denies that hardship alone makes a pilgrim. The scholar goes to see and to return as she was, the author’s definition of a tourist. A family photographing a new shrine each day has no interval set apart and treats each place as a sight.',
        skill: 'application',
      },
      {
        question: 'Which of the following, if true, would most challenge the author’s argument?',
        options: [
          'Many pilgrims in earlier centuries walked only because they could not afford to ride.',
          'Some travelers who walk the entire route report that they arrived quite unchanged.',
          'Most pilgrimage traditions count a journey as valid only if it is made on foot.',
          'The tokens pilgrims carry home are often identical to the souvenirs of tourists.',
        ],
        correctAnswer: 2,
        explanation:
          'The author claims that the difference between pilgrim and tourist “is not the means of travel” and that few traditions have made hardship the measure; traditions that validate a journey only when it is made on foot would draw exactly the line the author says they do not. Pilgrims walking out of poverty is the author’s own example and fits the argument. Walkers who arrive unchanged illustrate the author’s point that hardship does not guarantee transformation. Identical tokens are what the final paragraph asserts.',
        skill: 'strengthen-weaken',
      },
      {
        question:
          'Suppose a much-visited shrine began requiring every visitor to spend a night in silence at a nearby hostel before entering. The author would most likely regard this requirement as:',
        options: [
          'a return to the view that pilgrimage is worth what it costs in hardship.',
          'an effort to restore the set-apart interval that old hardships supplied.',
          'a measure that would guarantee that each visitor returns home changed.',
          'an obstacle likely to turn would-be pilgrims into ordinary tourists.',
        ],
        correctAnswer: 1,
        explanation:
          'A night of silence imposes little hardship but creates what the author says the months of walking provided: time removed from ordinary concerns in which the expectation of being changed can form. Because the requirement costs almost nothing in suffering, it does not revive the hardship view. The author says such conditions “do not guarantee” transformation, so the rule could not ensure that every visitor is changed. And an interval set apart is what the author thinks distinguishes pilgrims from tourists, so it would not turn pilgrims into tourists.',
        skill: 'new-information',
      },
    ],
  },
]
