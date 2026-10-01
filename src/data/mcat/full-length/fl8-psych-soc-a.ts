/**
 * MCAT Full-Length Form 8 — Psychological, Social & Biological Foundations,
 * file A: passages 1–5 (22 questions) + 8 discrete items.
 *
 * Authored 2026-10-01 against the AAMC blueprint rebuild brief: 400–600-word
 * passages, experiment/information mix, keys never restate passage sentences,
 * option lengths and key positions balanced, skill mix ≈ 35/45/10/10.
 * Keys are position-balanced by hand and explanations reference options by
 * CONTENT, so options may be reordered only via scripts/rebalance-passage-keys.ts.
 *
 * Question counts per passage are 5/4/4/5/4 (= 22), as BLUEPRINT-F78 lists.
 */
import type { MCATPassage, MCATDiscreteQuestion } from '../types'

export const FL8_PSYCH_SOC_A_PASSAGES: MCATPassage[] = [
  // ────────────────────────────────────────────────────────────────────────
  // 1. COGNITION — forgetting: serial position (immediate vs delayed recall),
  //    proactive interference and its release, savings on relearning
  // ────────────────────────────────────────────────────────────────────────
  {
    id: 'fl8-ps-a-01',
    section: 'psych-soc',
    discipline: 'cognition-and-perception',
    title: 'Position in a List, a Filled Delay, and What Survives Forgetting',
    passageText:
      'When people study a list of items and are then asked to recall as many as they can in any order, the chance that an item is recalled depends on where in the list it appeared. Items from the beginning of a list are recalled better than items from the middle, an advantage called the primacy effect. Items from the end are often recalled best of all, an advantage called the recency effect. Researchers carried out three experiments on the sources of these effects and on forgetting more generally.\n\nIn Experiment 1, 80 undergraduates listened to lists of 15 unrelated common nouns, read aloud at a rate of one word every 2 seconds. Participants were randomly assigned to one of two conditions. In the immediate condition, the last word of each list was followed at once by a signal to begin writing down the words. In the delayed condition, the last word was followed by a three-digit number, and participants counted backward from that number by threes, aloud, for 30 seconds before the signal to write. Every participant completed 12 lists, each made up of different words. Figure 1 shows the percentage of words recalled from selected positions in the list.\n\nExperiment 2 used much shorter lists. On each trial, participants saw three words for 2 seconds, counted backward for 20 seconds, and then tried to recall the three words. On trials 1 through 4, all of the words were names of fruits, and no word appeared twice. Recall was nearly perfect on trial 1 and fell on each later trial, so that by trial 4 it was less than half of its initial level. On trial 5, half of the participants were shown three more fruits, and their recall stayed low. The other half were shown the names of three occupations, and their recall returned almost to the level seen on trial 1.\n\nExperiment 3 examined memory over a longer interval. Participants in an experimental group studied a list of 20 pairs, each made up of a nonsense syllable and a two-digit number, in repeated cycles of study and testing until they could supply every number when shown its syllable. This took a mean of 16 cycles. Four weeks later, shown the syllables, they could supply the correct number for a mean of only 2 of the 20 pairs. They then studied the list again until they reached the original standard, which took a mean of 7 cycles. A comparison group had learned a different list of the same kind in the first session. At the four-week session, these participants learned the experimental group’s list for the first time, and they needed a mean of 15 cycles to do so.',
    chart: {
      title: 'Figure 1. Percentage of words recalled in Experiment 1, by position of the word in the 15-word list and recall condition',
      kind: 'line',
      xLabel: 'Position of the word in the list',
      yLabel: 'Words recalled',
      yUnit: '%',
      xValues: [1, 3, 5, 7, 9, 11, 13, 15],
      yValues: [70, 50, 38, 33, 32, 37, 62, 88],
      seriesLabel: 'Immediate recall',
      comparisonSeries: [{ label: 'Recall after 30 s of counting', yValues: [67, 48, 36, 32, 30, 31, 32, 33] }],
    },
    questions: [
      {
        question: 'Which statement best describes the effect of the counting task shown in Figure 1?',
        options: [
          'It lowered recall by a roughly equal amount at every position in the list.',
          'It lowered recall of the first words and left the last words unchanged.',
          'It lowered recall of the last words to about the level of the middle words.',
          'It lowered recall of the middle words and left both ends of the list unchanged.',
        ],
        correctAnswer: 2,
        explanation:
          'With immediate recall, performance climbed steeply over the final positions, to 62% at position 13 and 88% at position 15, but after 30 seconds of counting those positions were recalled only about as well as positions 7 through 11, at roughly one third. Recall of the first several positions was nearly identical in the two conditions, so the loss was not spread evenly across the list and did not fall on the first words. The middle positions were also nearly unchanged, and one end of the list, the last, clearly was affected.',
        skill: '6B data interpretation: serial-position curves',
      },
      {
        question:
          'Taken together, the two curves in Figure 1 suggest that the recency effect arises because the final words of a list are:',
        options: [
          'rehearsed more times than any of the words that came before them.',
          'still held in short-term memory at the moment recall begins.',
          'stored in long-term memory more securely than the earlier words.',
          'free of any interference from the words that came before them.',
        ],
        correctAnswer: 1,
        explanation:
          'A brief task that fills short-term memory removed the advantage of the last words while sparing the rest of the list, which is what would be expected if those words are read out of a temporary store when recall follows at once. The last words have the least opportunity for rehearsal, not the most. Had they been stored securely in long-term memory, 30 seconds of counting would not have erased their advantage, just as it did not erase that of the first words. The last words follow fourteen others and are therefore the most exposed, not the least, to interference from earlier words.',
        skill: '6B recency effect and short-term memory',
      },
      {
        question:
          'The researchers attribute the primacy effect to the extra rehearsal that the first words of a list receive while the rest of the list is presented. Which additional finding would most strongly support this account?',
        options: [
          'The advantage of the first words vanishes when participants may repeat only the current word.',
          'The advantage of the first words is unchanged when the words are presented twice as fast.',
          'The advantage of the last words vanishes when the counting task is extended to 60 seconds.',
          'The advantage of the last words is unchanged when the lists are lengthened to 30 words.',
        ],
        correctAnswer: 0,
        explanation:
          'If the first words are recalled well because they are rehearsed again and again as later words arrive, then confining participants to the word currently being presented should remove that extra rehearsal and with it the advantage, and such a result would support the account. An advantage that survived a doubling of presentation speed, which leaves less time to rehearse, would count against the account rather than for it. The two findings about the last words concern the recency effect and say nothing about why the first words are remembered.',
        skill: '6B primacy effect and rehearsal (evaluating evidence)',
      },
      {
        question:
          'Which explanation of the decline in recall across trials 1 through 4 of Experiment 2 is most consistent with the results of trial 5?',
        options: [
          'Participants grew tired, so they attended less closely to each new set of words.',
          'Memory traces faded during the counting, and they faded more on the later trials.',
          'Words from later trials disrupted retrieval of the similar words studied before them.',
          'Words from earlier trials disrupted memory for the similar words that followed.',
        ],
        correctAnswer: 3,
        explanation:
          'Recall recovered at once when the category changed, which shows that the decline depended on the similarity of each new set to the sets already studied: earlier fruit names were interfering with memory for later ones, which is proactive interference. Tiredness would have depressed recall of occupations as much as recall of fruits. The counting period was 20 seconds on every trial, so the time available for fading was constant and cannot explain a decline from trial to trial. Each set was recalled before the next set was shown, so words from later trials could not have disrupted it.',
        skill: '6B proactive interference and its release',
      },
      {
        question:
          'The result for the comparison group in Experiment 3 supports the conclusion that the experimental group’s rapid relearning:',
        options: [
          'came from general practice at learning lists of this kind.',
          'came from memory of the pairs that recall had not revealed.',
          'would have been as rapid without the recall test beforehand.',
          'would have been as rapid after an interval longer than four weeks.',
        ],
        correctAnswer: 1,
        explanation:
          'The comparison group had the same prior practice at learning lists of this kind yet needed 15 cycles, nearly as many as a first learning, whereas the experimental group needed only 7; the saving of about half the original effort must therefore come from information about these particular pairs that persisted although participants could recall almost none of it. If general practice were responsible, the comparison group would have learned the list about as quickly as the experimental group relearned it. The design varied neither whether the recall test was given nor the length of the interval, so it supports no conclusion about either.',
        skill: '6B research design: savings on relearning',
      },
    ],
  },

  // ────────────────────────────────────────────────────────────────────────
  // 2. SOCIOLOGY — socialization over the life course: agents, norms
  //    (folkways, mores, taboos), anticipatory socialization, resocialization
  // ────────────────────────────────────────────────────────────────────────
  {
    id: 'fl8-ps-a-02',
    section: 'psych-soc',
    discipline: 'sociology',
    title: 'Learning to Belong, From the Nursery to the Barracks',
    passageText:
      'Socialization is the lifelong process through which people learn the norms, values, and skills that allow them to take part in their society. Primary socialization takes place in early childhood, chiefly within the family, where children acquire language, basic habits, and a first sense of who they are. Secondary socialization begins when children enter settings beyond the home, and it continues for as long as people take on new positions: student, employee, spouse, parent, retiree.\n\nThe people and institutions that carry out this teaching are called agents of socialization. The family comes first in time, but its influence is neither exclusive nor permanent. Schools teach children to deal with authorities who judge them by impersonal standards. Peer groups, whose members are of equal standing, offer the first setting in which children can work out rules for themselves, and their importance grows through adolescence. Mass media supply portrayals of occupations, relationships, and ways of living that people may never have observed directly. Workplaces and religious bodies add expectations of their own.\n\nMuch of what these agents transmit consists of norms, the rules for conduct that members of a society share. William Graham Sumner distinguished norms by the weight that a society attaches to them. Folkways are customs of everyday conduct, such as conventions of dress, greeting, and table manners. Mores are norms regarded as essential to the welfare of the group, and they carry moral significance. A taboo is a prohibition so deeply held that the forbidden act strikes most members of the society as unthinkable. The same act may fall into different categories in different societies, and a norm can move from one category to another over time.\n\nSocialization for a position often begins before the position is occupied. In anticipatory socialization, people adopt the outlook and habits of a group that they hope or expect to join, drawing on whatever sources are available to them: acquaintances who already belong, part-time experience, or portrayals in the media. The fuller and more accurate these sources are, the smoother the eventual entry tends to be.\n\nSome transitions demand more than additions to what a person already is. In resocialization, an established identity and its norms are replaced by new ones. Resocialization is most thorough in what Erving Goffman called total institutions, such as prisons, military training camps, and cloistered religious orders. In a total institution, residents are cut off from the rest of society; they sleep, work, and spend their leisure in the same place and in the company of the same people; and a single authority governs every part of the day according to a fixed schedule. Goffman observed that such institutions proceed in two steps. Staff first weaken the identity that a newcomer brings from outside, and they then build a new one through a system of privileges and punishments. Resocialization may be chosen, as by a novice entering a monastery, or imposed, as on a prisoner, and its effects do not always outlast the stay.',
    questions: [
      {
        question:
          'An anthropologist living in an unfamiliar community notices that residents never eat with the left hand. Which further observation would best indicate that this norm belongs to the community’s mores rather than to its folkways?',
        options: [
          'Nearly all residents follow the norm, including the young children.',
          'Residents say that the norm has been followed for many generations.',
          'Residents who break the norm are called wicked and are shunned.',
          'Residents who break the norm are thought clumsy and are gently teased.',
        ],
        correctAnswer: 2,
        explanation:
          'Mores are held to matter for the welfare of the group and carry moral weight, so a breach is treated as a moral offense and the offender is condemned and excluded, whereas a breach of a folkway marks a person as odd or ill-mannered and draws only mild reactions. How widely a norm is followed and how old it is do not separate the two kinds, since a folkway can be universal and ancient. Gentle teasing of a person thought clumsy is the mild reaction that identifies a folkway.',
        skill: '9A norms: folkways vs mores (identifying evidence)',
      },
      {
        question:
          'On Goffman’s account as the passage presents it, which change to a military training camp would most weaken the camp’s power to resocialize its recruits?',
        options: [
          'Recruits go back to their family homes at the end of each day.',
          'Recruits are issued identical uniforms in place of varied ones.',
          'Recruits follow one timetable that covers the whole of the day.',
          'Recruits earn weekend privileges by meeting set standards.',
        ],
        correctAnswer: 0,
        explanation:
          'A total institution works by cutting residents off from the outside and placing every part of the day under one authority. Recruits who go home each evening spend part of every day among the family and friends who sustain their earlier identity, so that identity is never fully set aside. Identical uniforms remove outward marks of the prior identity, a single timetable is the fixed schedule Goffman described, and privileges earned for meeting standards are the means by which a new identity is built, so those three changes would strengthen resocialization or leave it intact.',
        skill: '9A resocialization and total institutions',
      },
      {
        question:
          'Children who immigrate before adolescence usually come to speak the new language with the accent of their classmates rather than with that of their parents. This observation most directly supports which claim?',
        options: [
          'Primary socialization leaves no lasting mark on how a person later behaves.',
          'For some behaviors, peers outweigh the family as an agent of socialization.',
          'Schools pass on unstated lessons alongside those of the formal curriculum.',
          'Mass media have displaced face-to-face groups as agents of socialization.',
        ],
        correctAnswer: 1,
        explanation:
          'The children hear their parents’ accent first and hear it at home, yet they end up speaking like their classmates, so for this behavior the peer group has prevailed over the family. That does not show that early learning in the family leaves no mark at all, only that it did not determine accent. The observation concerns what children pick up from other children, not unstated lessons taught by the school as an institution. It involves face-to-face contact with classmates and says nothing about media.',
        skill: '9A agents of socialization: peers and family',
      },
      {
        question:
          'New nurses whose picture of hospital work had come mainly from television dramas reported more distress in their first months on the wards than new nurses who had earlier worked as aides. In the passage’s terms, the greater distress of the first group most likely reflects:',
        options: [
          'resocialization that had stripped away an identity formed in childhood.',
          'primary socialization that had been left incomplete by the family.',
          'a breach of the mores of the profession that the nurses had entered.',
          'anticipatory socialization that had drawn on an inaccurate source.',
        ],
        correctAnswer: 3,
        explanation:
          'Both groups formed expectations of nursing before they began. The former aides drew on direct experience, whereas the others drew on dramatized portrayals, so their preparation for the role rested on a misleading model and the reality of the work came as a shock. Resocialization replaces an established identity, most thoroughly inside a total institution, and a first job on a ward does neither. Nothing suggests that the nurses’ early learning in the family was deficient. The distress arose from unmet expectations, not from anyone breaking a moral rule of the profession.',
        skill: '9A anticipatory socialization: accuracy of the source',
      },
    ],
  },

  // ────────────────────────────────────────────────────────────────────────
  // 3. BIOLOGICAL BASIS — neural plasticity: pruning, critical periods, LTP,
  //    use-dependent cortical remapping, constraint-induced therapy
  // ────────────────────────────────────────────────────────────────────────
  {
    id: 'fl8-ps-a-03',
    section: 'psych-soc',
    discipline: 'biological-basis-of-behavior',
    title: 'Circuits That Change With Use',
    passageText:
      'The nervous system is not wired once and for all. Neural plasticity is the capacity of neural circuits to change their structure and function in response to activity, and it operates on different scales at different stages of life.\n\nIn the first years after birth, the cerebral cortex forms far more synapses than it will keep. Over childhood and adolescence the surplus is removed by synaptic pruning: connections that are repeatedly active are stabilized, and those that are seldom used are eliminated. Pruning follows different timetables in different regions, ending earlier in sensory areas than in the prefrontal cortex.\n\nFor some functions, the experience that shapes a circuit must arrive within a limited window called a critical period. In classic experiments, one eyelid of a kitten was sutured closed for the first three months of life and then reopened. Although the eye itself was undamaged, neurons in the visual cortex thereafter responded almost exclusively to the eye that had remained open, and the animal behaved as if blind in the other eye. Closing one eye of an adult cat for an even longer time produced no such change.\n\nAt the level of the single synapse, the best-studied form of plasticity is long-term potentiation (LTP), a lasting increase in the strength of a synapse following a brief period of intense use. At many synapses that release glutamate, LTP depends on a postsynaptic receptor, the NMDA receptor, whose channel opens only when two conditions are met at once: glutamate must be bound to the receptor, and the postsynaptic membrane must already be strongly depolarized. When both conditions hold, calcium enters the postsynaptic cell and sets off changes, including the insertion of additional glutamate receptors into the membrane, that make the cell respond more strongly to the same input for hours or longer. LTP is widely regarded as a cellular basis of learning and memory.\n\nThe adult cortex also remains modifiable. The somatosensory and motor cortices contain orderly maps of the body, and the territory devoted to a body part can grow or shrink. In monkeys trained for several weeks to detect small differences in vibration applied to one fingertip, the cortical area representing that fingertip enlarged. Monkeys that received the same vibration on a fingertip while performing an unrelated listening task showed no such enlargement.\n\nThese findings have shaped rehabilitation after stroke. A patient whose stroke has weakened one arm quickly learns to accomplish daily tasks with the other, and the weakened arm is used less and less, a pattern called learned nonuse. In constraint-induced movement therapy, the stronger arm is restrained in a mitt or sling for most of the patient’s waking hours over two or more weeks, while the patient practices graded tasks with the weaker arm for several hours each day. Improvement in the use of the weaker arm is accompanied by enlargement of the motor cortical area that controls it.',
    questions: [
      {
        question:
          'A child is born with a dense cataract that blocks patterned vision in one eye. The cataract is removed when the child is 9 years old, and the retina and optic nerve of that eye are found to be healthy. Based on the passage, vision through that eye will most likely be:',
        options: [
          'normal at once, because the eye and its nerve were never damaged.',
          'normal within weeks, because the adult cortex can still be remapped.',
          'poor at first, but normal once pruning is completed in adolescence.',
          'poor for life, because the cortex was shaped without that eye’s input.',
        ],
        correctAnswer: 3,
        explanation:
          'The kitten experiment shows that when one eye supplies no patterned input during the critical period, cortical neurons come to respond only to the other eye, and the loss persists after the eye is reopened even though the eye is healthy; a cataract present from birth through age 9 deprives a child’s cortex in the same way over the corresponding years. A healthy eye and nerve therefore do not guarantee sight. The remapping described in adults concerns the size of body representations after training, and the adult cat shows that the visual cortex is not reshaped by eye closure once the window has passed. The end of pruning fixes the connections that remain; it does not restore those that were lost.',
        skill: '6A critical periods in visual development',
      },
      {
        question:
          'According to the passage’s account of the NMDA receptor, which procedure would be LEAST likely to produce LTP at a glutamate-releasing synapse?',
        options: [
          'Rapid stimulation of the input while the postsynaptic cell is held at a strongly negative potential',
          'Rapid stimulation of the input while the postsynaptic cell is depolarized by an injected current',
          'Slow stimulation of the input, each pulse timed to coincide with strong postsynaptic depolarization',
          'Rapid stimulation of the input at the moment a second strong input is exciting the same cell',
        ],
        correctAnswer: 0,
        explanation:
          'The NMDA channel opens only when glutamate is bound and the postsynaptic membrane is strongly depolarized. Rapid stimulation supplies glutamate, but if the cell is held at a strongly negative potential the second condition is never met, calcium does not enter, and the synapse is not strengthened. In the other three procedures glutamate release coincides with depolarization, whether the depolarization is supplied by injected current, paired with each slow pulse, or produced by a second strong input to the same cell, so each of them could produce LTP.',
        skill: '6B long-term potentiation: coincidence detection',
      },
      {
        question:
          'The contrast between the two groups of monkeys described in the passage indicates that enlargement of a cortical representation in adults depends on:',
        options: [
          'the total amount of stimulation that is delivered to the skin.',
          'the age at which stimulation of the skin is first delivered.',
          'whether the stimulation matters to a task being performed.',
          'whether the stimulation reaches the cortex of both hemispheres.',
        ],
        correctAnswer: 2,
        explanation:
          'Both groups received the same vibration on a fingertip, so the amount of stimulation was equal; the representation grew only in the animals that had to use the vibration to perform their task, so what mattered was the relevance of the stimulation to behavior. All of the monkeys were adults, so age was not varied. Nothing in the comparison concerned which hemisphere received the input.',
        skill: '6A use-dependent cortical remapping',
      },
      {
        question:
          'In a clinical trial, patients given constraint-induced therapy improved more than patients given standard care, which included one hour of arm exercise per week. To attribute the benefit to restraint of the stronger arm rather than to the amount of practice, the researchers would most need a comparison group that:',
        options: [
          'wore a restraint on the weaker arm while practicing with the stronger arm.',
          'practiced with the weaker arm for the same hours, with no arm restrained.',
          'received standard care and was assessed by examiners unaware of group.',
          'began the same therapy several years after the stroke rather than at once.',
        ],
        correctAnswer: 1,
        explanation:
          'The therapy differs from standard care in two ways at once: the stronger arm is restrained, and the weaker arm is exercised for many more hours. A group that practices just as much without any restraint differs from the therapy group in restraint alone, so any remaining advantage of the therapy group could be credited to the restraint. Restraining the weaker arm tests a different treatment and leaves practice with the weaker arm unequal. Examiners unaware of group guard against biased assessment, and delaying therapy tests the importance of timing; neither separates restraint from the amount of practice.',
        skill: '6A research design: separating two components of a treatment',
      },
    ],
  },

  // ────────────────────────────────────────────────────────────────────────
  // 4. SOCIAL PSYCHOLOGY — emotion regulation: reappraisal vs suppression
  //    (expression, self-report, sympathetic arousal, memory), display rules,
  //    facial feedback
  // ────────────────────────────────────────────────────────────────────────
  {
    id: 'fl8-ps-a-04',
    section: 'psych-soc',
    discipline: 'social-psychology',
    title: 'Two Ways of Managing a Feeling',
    passageText:
      'People do not simply have emotions; they also try to influence which emotions they have and how those emotions are expressed. Two strategies of emotion regulation have been studied closely. In cognitive reappraisal, a person changes how a situation is interpreted before the emotional response has fully developed. In expressive suppression, a person inhibits the outward signs of an emotion that is already under way. Whether inhibiting an expression changes the feeling itself is disputed. According to the facial feedback hypothesis, sensations from the muscles of the face contribute to emotional experience, so that making an expression intensifies the corresponding feeling and holding it back weakens the feeling.\n\nMuch earlier research had relied on questionnaires asking people which strategy they habitually use, and such reports cannot show whether a strategy causes the outcomes associated with it. Researchers therefore manipulated the strategies directly.\n\nIn Study 1, 120 undergraduates individually watched a 3-minute film of a surgical amputation, chosen because it reliably evokes disgust. A surgeon’s spoken commentary accompanied the film. Before the film, participants were randomly assigned to receive one of three instructions (n = 40 each). Those in the watch condition were told simply to watch carefully. Those in the reappraisal condition were told to view the film with the detached interest of a medical student attending to technique. Those in the suppression condition were told to behave so that a person watching them could not tell what they were feeling. A concealed camera recorded each participant’s face, and observers who did not know the conditions later counted expressions of disgust. Skin conductance, which rises with activity of the sympathetic nervous system, was recorded during a resting baseline and throughout the film. Immediately after the film, participants rated how much disgust they had felt on a scale from 0 (none) to 8 (extreme). Twenty minutes later they took an unannounced 20-item test on details of the surgeon’s commentary. Results are shown in Table 1.\n\nStudy 2 concerned differences between cultures. Undergraduates in two countries, A and B (n = 60 in each), watched the same film under the watch instruction. Half of the students in each country watched alone. The other half watched while a senior researcher from their own university sat facing them and took notes. Facial expressions were again recorded by a concealed camera and scored by observers unaware of the viewing condition (Table 2). Ratings of disgust made after the film did not differ between the countries or between the two viewing conditions.\n\nAt the end of each session, participants were told about the concealed camera and were given the option of having their recordings erased.',
    figure:
      '**Table 1. Study 1: Mean responses to the film, by instruction (n = 40 per condition)**\n\n| Measure | Watch | Reappraisal | Suppression |\n|---|---|---|---|\n| Facial expressions of disgust (per minute) | 4.0 | 2.1 | 0.6 |\n| Self-rated disgust (0–8) | 5.6 | 3.4 | 5.5 |\n| Rise in skin conductance from baseline (μS) | 1.2 | 1.1 | 2.0 |\n| Commentary details recalled (of 20) | 13.0 | 12.8 | 9.5 |\n\n**Table 2. Study 2: Mean facial expressions of disgust per minute, by country and viewing condition (n = 30 per cell)**\n\n| Country | Watching alone | Watching with the researcher present |\n|---|---|---|\n| A | 4.1 | 3.8 |\n| B | 4.0 | 1.3 |',
    questions: [
      {
        question:
          'Between the watch condition and the suppression condition in Table 1, which measure showed the largest proportional change?',
        options: [
          'Facial expressions of disgust',
          'Self-rated disgust',
          'Rise in skin conductance',
          'Commentary details recalled',
        ],
        correctAnswer: 0,
        explanation:
          'Expressions of disgust fell from 4.0 to 0.6 per minute, a decrease of 85%. The rise in skin conductance went from 1.2 to 2.0 μS, an increase of about 67%; recall of the commentary fell from 13.0 to 9.5 items, about 27%; and rated disgust moved only from 5.6 to 5.5, about 2%.',
        skill: '6C data interpretation: proportional change in a table',
      },
      {
        question: 'Which explanation of the memory scores in Table 1 is best supported by the other measures in the table?',
        options: [
          'Suppression intensified the disgust that was felt, which drew attention from the commentary.',
          'Suppression demanded continual self-monitoring, which drew attention from the commentary.',
          'Suppression lowered sympathetic arousal, which left participants less alert to the commentary.',
          'Suppression acted as reappraisal did, which also reduced attention to the commentary.',
        ],
        correctAnswer: 1,
        explanation:
          'Participants who suppressed had to keep checking and controlling their faces throughout the film, an effortful activity that competes for the attention needed to take in spoken details; the elevated skin conductance in this condition is consistent with such effort. Rated disgust was the same as in the watch condition (5.5 versus 5.6), so stronger feeling cannot be the cause. Skin conductance rose more, not less, under suppression. Recall under reappraisal (12.8) matched the watch condition (13.0), so the two strategies did not act alike on memory.',
        skill: '6C cognitive cost of expressive suppression (reasoning from data)',
      },
      {
        question: 'Which result of Study 1 is most difficult to reconcile with the facial feedback hypothesis?',
        options: [
          'Reappraisal lowered both the expressions of disgust and the ratings of disgust.',
          'Suppression raised skin conductance above the level seen in the watch condition.',
          'Suppression nearly abolished expressions of disgust yet left its ratings unchanged.',
          'Reappraisal left recall of the commentary close to the level in the watch condition.',
        ],
        correctAnswer: 2,
        explanation:
          'The hypothesis predicts that holding back an expression should weaken the feeling, yet participants who showed almost no disgust (0.6 expressions per minute against 4.0) rated their disgust as highly as those who watched freely (5.5 against 5.6). Fewer expressions together with lower rated disgust under reappraisal is what the hypothesis would lead one to expect. The hypothesis makes no prediction about skin conductance or about memory for the commentary, so those results neither support nor challenge it.',
        skill: '6C facial feedback hypothesis (evaluating evidence)',
      },
      {
        question:
          'A critic suggests that participants in the reappraisal condition rated their disgust as lower only because the instruction implied that they were expected to feel little. Which feature of Study 1 most directly counters this suggestion?',
        options: [
          'Participants were assigned to the three instructions at random.',
          'Ratings of disgust were collected as soon as the film had ended.',
          'Skin conductance rose about as much as in the watch condition.',
          'Expressions filmed without participants’ knowledge were also reduced.',
        ],
        correctAnswer: 3,
        explanation:
          'If the lower ratings merely reflected what participants thought they were supposed to say, a measure they did not know was being taken should be unaffected; yet the faces of the reappraisal group, recorded by a hidden camera and scored by observers who did not know the conditions, showed about half as many expressions of disgust as those of the watch group. Random assignment makes the groups comparable but does not stop an instruction from shaping self-reports. Collecting ratings promptly limits forgetting, not compliance with perceived expectations. Skin conductance that matched the watch condition gives no sign of reduced emotion and so does not answer the critic.',
        skill: '6C research design: demand characteristics and unobtrusive measures',
      },
      {
        question: 'The pattern of results in Study 2 is best explained by a difference between the two countries in:',
        options: [
          'the intensity of the disgust that the film evokes in its viewers.',
          'the facial movements by which disgust is spontaneously expressed.',
          'display rules for showing negative emotion before a superior.',
          'the accuracy with which disgust is recognized in the faces of others.',
        ],
        correctAnswer: 2,
        explanation:
          'Alone, students in the two countries showed disgust equally often (4.1 and 4.0 expressions per minute), and their rated disgust did not differ, so the film evoked the same feeling and the same spontaneous expressions in both. Only in front of a senior researcher did students in Country B show far fewer expressions (1.3), which points to a learned rule about what may be shown to a person of higher standing. The study did not measure how well participants read disgust in the faces of other people.',
        skill: '6C display rules across cultures',
      },
    ],
  },

  // ────────────────────────────────────────────────────────────────────────
  // 5. LEARNING — schedules of reinforcement and persistence in extinction:
  //    continuous vs fixed-ratio vs variable-ratio training
  // ────────────────────────────────────────────────────────────────────────
  {
    id: 'fl8-ps-a-05',
    section: 'psych-soc',
    discipline: 'learning-and-memory',
    title: 'Lever Pressing After the Pellets Stop',
    passageText:
      'In operant conditioning, the relation between a response and its reinforcer is specified by a schedule of reinforcement. Under continuous reinforcement, every occurrence of the response is reinforced. Under partial reinforcement, only some occurrences are. Ratio schedules, on which reinforcement depends on the number of responses made, are distinguished from interval schedules, on which it depends on the time that has elapsed since the last reinforcer. On a fixed-ratio (FR) schedule, the reinforcer follows a set number of responses; on a variable-ratio (VR) schedule, the number of responses required changes unpredictably from one reinforcer to the next around a stated average. When reinforcement is discontinued altogether, a procedure called extinction, responding declines. How long responding persists in extinction is a matter of practical importance, because behavior established in a clinic or a classroom must usually survive after the scheduled rewards have ended.\n\nResearchers compared persistence after training on three schedules. Thirty-six rats, maintained at 85% of their free-feeding weight, were first taught by shaping to press a lever for 45-mg food pellets. They were then randomly assigned to three groups of 12. For the continuous group, every press delivered a pellet. For the FR-10 group, every tenth press delivered a pellet. For the VR-10 group, the number of presses required for each pellet varied unpredictably between 1 and 40 and averaged 10. Rats in the two ratio groups were brought to these requirements gradually over several sessions. Training then continued in daily sessions until each rat had earned a total of 600 pellets on its final schedule.\n\nIn the last training session, the mean rate of pressing was 10 presses per minute in the continuous group, 40 in the FR-10 group, and 60 in the VR-10 group. The two ratio groups also differed in the pattern of their pressing. Rats in the FR-10 group typically paused for several seconds after each pellet and then pressed rapidly until the next one was delivered; rats in the VR-10 group pressed steadily with almost no pauses.\n\nOn the day after its last training session, each rat was placed in the same chamber for a 30-minute extinction session, during which presses were counted but produced no pellets. Figure 1 shows the mean rate of pressing in each successive 5-minute block of this session. By the final block, all 12 rats in the continuous group and 9 of the 12 in the FR-10 group had stopped pressing altogether, whereas every rat in the VR-10 group was still pressing.',
    chart: {
      title: 'Figure 1. Mean rate of lever pressing in each 5-minute block of the 30-minute extinction session, by training schedule',
      kind: 'line',
      xLabel: 'Time in extinction (end of each 5-minute block)',
      xUnit: 'min',
      yLabel: 'Mean rate of lever pressing',
      yUnit: 'presses/min',
      xValues: [5, 10, 15, 20, 25, 30],
      yValues: [58, 50, 41, 33, 26, 20],
      seriesLabel: 'VR-10 group',
      comparisonSeries: [
        { label: 'FR-10 group', yValues: [36, 20, 9, 4, 2, 1] },
        { label: 'Continuous group', yValues: [9, 3, 1, 0, 0, 0] },
      ],
    },
    questions: [
      {
        question:
          'Based on Figure 1 and the training data in the passage, in which block of the extinction session did the VR-10 group’s rate of pressing first fall below half of its rate in the last training session?',
        options: [
          'The block ending at 15 minutes',
          'The block ending at 20 minutes',
          'The block ending at 25 minutes',
          'The block ending at 30 minutes',
        ],
        correctAnswer: 2,
        explanation:
          'The VR-10 group pressed 60 times per minute in its last training session, so half of that rate is 30 presses per minute. In Figure 1 the group’s rate was 41 in the block ending at 15 minutes and 33 in the block ending at 20 minutes, both above 30, and 26 in the block ending at 25 minutes, the first value below 30. By the block ending at 30 minutes the rate (20) had already been below half for one block.',
        skill: '7A data interpretation: rate relative to a training baseline',
      },
      {
        question:
          'Both ratio groups had been reinforced, on average, once for every 10 presses, yet Figure 1 shows that the FR-10 group stopped pressing far sooner. This difference is best explained by the fact that, during training:',
        options: [
          'the VR-10 group had earned more pellets in total than the FR-10 group had.',
          'the VR-10 group had been kept hungrier than the FR-10 group had been.',
          'only the FR-10 group had paused after pellets, which weakened its learning.',
          'only the VR-10 group had met runs of more than ten presses that earned no pellet.',
        ],
        correctAnswer: 3,
        explanation:
          'On FR-10 a rat never pressed more than ten times without a pellet, so a longer unrewarded run in extinction quickly marks a change in conditions; on VR-10 the requirement ranged up to 40 presses, so long unrewarded runs were an ordinary part of training and the start of extinction was hard to tell apart from it. Every rat earned the same total of 600 pellets. All rats were held at the same percentage of free-feeding weight. The pauses after pellets did not weaken learning in the FR-10 group, which was pressing 40 times per minute by the end of training.',
        skill: '7A partial reinforcement: predictability and resistance to extinction',
      },
      {
        question:
          'A critic argues that the higher rates of the VR-10 group in Figure 1 show only that these rats pressed faster to begin with, not that their pressing was more persistent. Which analysis would best answer this criticism?',
        options: [
          'Comparing the total number of presses made by each group across the 30 minutes',
          'Expressing each block’s rate as a share of the same group’s final training rate',
          'Comparing the rates of the three groups in the first 5-minute block alone',
          'Counting the pellets that each group had earned by the end of its training',
        ],
        correctAnswer: 1,
        explanation:
          'Dividing each block’s rate by the group’s own rate at the end of training shows how much of its former responding each group kept, which removes the advantage of simply having started at a higher rate; on this measure the VR-10 group still retained a third of its rate after 30 minutes, while the other groups retained almost none. Total presses across the session are inflated by a high starting rate just as the rates in each block are. The first block alone shows where the groups started, not how they declined. Pellets earned were equal by design and do not bear on the criticism.',
        skill: '7A research design: normalizing to baseline response rate',
      },
      {
        question:
          'The pauses that followed each pellet in the FR-10 group, but not in the VR-10 group, are best explained by the fact that on the fixed schedule:',
        options: [
          'a pellet signals that the next several presses cannot produce food.',
          'a pellet is larger, so that the rats need more time to consume it.',
          'the rats are nearer to satiation, so that each pellet is worth less.',
          'the rats tire sooner, so that they must rest after each run of presses.',
        ],
        correctAnswer: 0,
        explanation:
          'On a fixed-ratio schedule the press that follows a pellet is never reinforced, and nine more presses must be made before the next pellet, so the pellet itself marks the start of a stretch in which pressing cannot pay off, and the rat pauses. On the variable schedule the requirement could be as low as one press, so the very next press might be reinforced and no such signal exists. The pellets were the same size for both groups. Both groups were held at the same body weight and earned the same number of pellets, so satiation did not differ. The VR-10 rats pressed faster and without pauses, so tiring does not account for pauses in the slower group.',
        skill: '7A fixed-ratio schedules: the post-reinforcement pause',
      },
    ],
  },
]

export const FL8_PSYCH_SOC_A_DISCRETES: MCATDiscreteQuestion[] = [
  {
    id: 'fl8-ps-a-d01',
    section: 'psych-soc',
    discipline: 'cognition-and-perception',
    question:
      'After strokes in the left hemisphere, Patient 1 speaks slowly in short phrases that leave out small grammatical words, whereas Patient 2 speaks rapidly in long sentences that include invented words and convey little meaning. If Patient 1 has Broca’s aphasia and Patient 2 has Wernicke’s aphasia, on which task should Patient 1 perform far better than Patient 2?',
    options: [
      'Pointing to objects in the room as an examiner names each one',
      'Repeating aloud a long sentence that an examiner has just spoken',
      'Describing a picture aloud in complete, grammatical sentences',
      'Producing a normal number of spoken words in each minute',
    ],
    correctAnswer: 0,
    explanation:
      'In Broca’s aphasia the production of speech is effortful and stripped of grammar, but understanding of spoken words is largely preserved, so Patient 1 can pick out named objects; in Wernicke’s aphasia comprehension is severely impaired, so Patient 2 cannot. Repeating a spoken sentence is impaired in both conditions, in one because the sentence cannot be produced and in the other because it is not understood. Describing a picture in complete grammatical sentences is the very ability Patient 1 has lost. A normal rate of speech is retained by Patient 2, not by Patient 1.',
    skill: '6B aphasia: comprehension in Broca’s vs Wernicke’s',
  },
  {
    id: 'fl8-ps-a-d02',
    section: 'psych-soc',
    discipline: 'cognition-and-perception',
    question:
      'In the Stroop task, participants name the ink color of printed words as quickly as they can. Fluent readers are slower when the word is the name of a different color (the word RED printed in green ink) than when it is a string of X’s. This slowing occurs because, for these participants:',
    options: [
      'naming a color is automatic, so it proceeds without any need for attention.',
      'reading a word is automatic, so its meaning competes with the ink color.',
      'color and word shape are analyzed in turn, so one must wait for the other.',
      'conflicting stimuli are sensed less clearly, so the ink color is harder to see.',
    ],
    correctAnswer: 1,
    explanation:
      'For a practiced reader, reading is automatic: the word is processed without intention and cannot easily be stopped, so its meaning is activated and competes with the name of the ink color, which must be retrieved by a slower, controlled process. Color naming is the less practiced and less automatic of the two tasks, which is why it is the one that suffers. Word and color are processed in parallel, and it is their simultaneous availability that produces the conflict. The ink is seen as clearly on conflicting items as on rows of X’s; the delay arises in selecting a response, not in sensing the color.',
    skill: '6B Stroop interference and automatic processing',
  },
  {
    id: 'fl8-ps-a-d03',
    section: 'psych-soc',
    discipline: 'biological-basis-of-behavior',
    question:
      'An overdose of an opioid drug causes death chiefly by silencing the neurons that generate the rhythm of breathing. These neurons, together with the centers that adjust heart rate and blood pressure from moment to moment, are located in the:',
    options: ['cerebellum.', 'thalamus.', 'amygdala.', 'medulla.'],
    correctAnswer: 3,
    explanation:
      'The medulla, the lowest part of the brainstem, contains the neurons that generate the breathing rhythm and the cardiovascular centers that regulate heart rate and blood pressure, which is why depression of medullary activity is fatal. The cerebellum coordinates movement and balance. The thalamus relays sensory information to the cortex. The amygdala is involved in fear and other emotional responses. Damage to these three structures does not stop breathing.',
    skill: '6A medulla and vital functions',
  },
  {
    id: 'fl8-ps-a-d04',
    section: 'psych-soc',
    discipline: 'biological-basis-of-behavior',
    question:
      'After a stroke, a patient shaves only the right side of his face, eats only the food on the right half of his plate, and, when asked to draw a clock, crowds all twelve numbers onto its right side. He denies that anything is wrong. When single lights are flashed one at a time, he detects them on both sides. The stroke most likely damaged the:',
    options: ['right parietal lobe.', 'left parietal lobe.', 'right occipital lobe.', 'left occipital lobe.'],
    correctAnswer: 0,
    explanation:
      'Failure to attend to the left half of space and of one’s own body, together with unawareness of the problem, is hemispatial neglect, which typically follows damage to the right parietal lobe, a region that directs attention to both sides of space but especially to the left. Damage to the left parietal lobe seldom produces lasting neglect, and any neglect would be of the right side. Occipital damage produces blindness in the opposite half of the visual field, but this patient detects lights on both sides, and a person with such a field loss usually knows of it and turns the head to compensate.',
    skill: '6A hemispatial neglect and the right parietal lobe',
  },
  {
    id: 'fl8-ps-a-d05',
    section: 'psych-soc',
    discipline: 'learning-and-memory',
    question:
      'A therapist is teaching a child who has never spoken to say “water.” She first gives praise for any sound, then only for sounds beginning with “w,” then only for “wa,” and finally only for the whole word. This procedure, shaping, depends on which practice?',
    options: [
      'Delivering the reinforcer on a variable schedule so that the response will persist',
      'Linking a series of separate responses so that each one cues the next in order',
      'Withholding the reinforcer from an earlier approximation once a closer one occurs',
      'Letting the learner watch a model who is reinforced for making the target response',
    ],
    correctAnswer: 2,
    explanation:
      'Shaping builds a new behavior by reinforcing successive approximations: once a closer approximation appears, the earlier and cruder one is no longer reinforced, so the learner’s behavior moves step by step toward the target. A variable schedule makes an established response resistant to extinction but does not create a response that has never occurred. Linking separate responses so that each cues the next is chaining, which assembles a sequence rather than refining one response. Watching a reinforced model is observational learning, which the therapist did not use.',
    skill: '7A shaping by successive approximations',
  },
  {
    id: 'fl8-ps-a-d06',
    section: 'psych-soc',
    discipline: 'sociology',
    question:
      'A clinic introduces a policy under which patients who pay an annual fee are seen ahead of all others. Which question about the policy would a conflict theorist be most likely to ask?',
    options: [
      'How does the fee help the clinic to allocate its appointments efficiently?',
      'How do patients who pay the fee present themselves to the clinic’s staff?',
      'Which groups gain access to care under the fee, and at whose expense?',
      'How did waiting for care come to be defined as a problem needing a remedy?',
    ],
    correctAnswer: 2,
    explanation:
      'Conflict theory treats social arrangements as outcomes of competition among groups with unequal power and resources, so it asks who benefits from a rule and who bears its cost; a fee for priority shifts access toward those able to pay. Asking how the fee contributes to efficient operation is a functionalist question about the working of the system. Asking how paying patients present themselves to staff is a symbolic interactionist question about meaning in face-to-face encounters. Asking how waiting came to be defined as a problem is a social constructionist question.',
    skill: '9A conflict theory applied to access to care',
  },
  {
    id: 'fl8-ps-a-d07',
    section: 'psych-soc',
    discipline: 'sociology',
    question:
      'In a farming village, births are attended by a midwife who is a neighbor and distant relative of most families and who is repaid with food and help at harvest. After the village is absorbed into a growing city, births are attended by clinic staff who are strangers to the families and are paid a set fee. This change is best described as a shift from:',
    options: [
      'Gesellschaft to Gemeinschaft.',
      'secondary groups to primary groups.',
      'organic to mechanical solidarity.',
      'Gemeinschaft to Gesellschaft.',
    ],
    correctAnswer: 3,
    explanation:
      'Gemeinschaft describes communities bound by kinship, long acquaintance, and mutual obligation, as when a related neighbor attends a birth and is repaid in kind; Gesellschaft describes societies in which dealings are impersonal, specialized, and governed by payment, as with clinic staff who are strangers and charge a fee. The change therefore runs from Gemeinschaft to Gesellschaft, not the reverse. Close personal ties gave way to impersonal ones, which is a movement from primary to secondary relations, and likeness gave way to a specialized division of labor, which is a movement from mechanical to organic solidarity; both of those options state the direction backward.',
    skill: '9B Gemeinschaft vs Gesellschaft',
  },
  {
    id: 'fl8-ps-a-d08',
    section: 'psych-soc',
    discipline: 'sociology',
    question:
      'Replacement-level fertility is the total fertility rate at which a population exactly replaces itself from one generation to the next in the absence of migration. It is about 2.1 children per woman in countries with low mortality but exceeds 3.0 in some countries. The higher value in those countries arises mainly because:',
    options: [
      'more girls die before reaching the end of their childbearing years.',
      'more women marry and begin to bear children at an early age.',
      'more of the population is younger than fifteen years of age.',
      'more people leave the country each year than enter it.',
    ],
    correctAnswer: 0,
    explanation:
      'A population replaces itself only if each woman is succeeded, on average, by one daughter who herself survives through the childbearing years. Where mortality among girls and young women is high, more births are needed to yield one surviving daughter, so the replacement level rises well above 2.1. Early marriage affects how many children women actually have, not how many are needed for replacement. A young age structure affects the number of births per 1,000 people, not the fertility per woman that replacement requires. Migration is excluded by the definition.',
    skill: '9B replacement-level fertility and mortality',
  },
]
