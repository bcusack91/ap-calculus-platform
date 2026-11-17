import type { CardCheck } from '@/lib/flashcard-check-core'

/**
 * Card-check questions for the cards of `mcat-sociology-groups-interaction-mcat`: one per card, keyed by the
 * card's exact front text. Each asks the student to use the card's idea in a
 * new situation. Gate: scripts/flashcard-checks/validate.ts.
 */
const r = String.raw

export const checks: Record<string, CardCheck> = {
  [r`What is social facilitation?`]: {
    question: r`A gymnastics meet is moved from an empty practice hall to a packed arena. According to social facilitation, which athlete is most likely to perform WORSE in front of the crowd?`,
    options: [r`A veteran repeating a routine she has done for ten years`, r`A champion doing the simple warm-up she does every day`, r`A novice attempting a hard routine she learned yesterday`, r`An expert performing a basic vault she has long mastered`],
    correctAnswer: 2,
    explanation: r`An audience raises arousal, which helps simple or well-learned tasks and hurts complex or novel ones. A newly learned, difficult routine is the novel task, so it suffers. The veteran, the champion and the expert are all doing well-practised tasks, which an audience tends to improve.`,
  },
  [r`Contrast groupthink and group polarization.`]: {
    question: r`A close-knit board approves its chairman's merger plan to keep the peace, and two members with serious doubts say nothing. Separately, a hiring panel whose members each mildly favor a candidate ends its discussion strongly in favor of her. Which labels fit?`,
    options: [r`Board: groupthink; panel: group polarization`, r`Board: group polarization; panel: groupthink`, r`Board: groupthink; panel: social facilitation`, r`Board: social loafing; panel: group polarization`],
    correctAnswer: 0,
    explanation: r`The board suppresses dissent for the sake of harmony, which is groupthink. The panel's shared initial leaning grows stronger through discussion, which is group polarization. Social facilitation concerns performance in front of an audience and social loafing concerns reduced effort, and neither describes how these decisions were reached.`,
  },
  [r`What did Asch and Milgram each demonstrate?`]: {
    question: r`In Study 1, participants give an obviously wrong answer to an easy question after five peers give that answer. In Study 2, participants continue a task they find distressing because a researcher in a lab coat tells them to. Which classic work and concept does each study echo?`,
    options: [r`Study 1: Milgram, obedience; Study 2: Asch, conformity`, r`Study 1: Asch, obedience; Study 2: Milgram, conformity`, r`Study 1: Milgram, conformity; Study 2: Asch, obedience`, r`Study 1: Asch, conformity; Study 2: Milgram, obedience`],
    correctAnswer: 3,
    explanation: r`Yielding to a wrong majority of peers is conformity, which Asch demonstrated. Following the instructions of a legitimate authority is obedience, which Milgram demonstrated. The other options either swap the researchers or attach the wrong concept to each: peers exert conformity pressure, while an authority figure commands obedience.`,
  },
  [r`Compare the central and peripheral routes to persuasion.`]: {
    question: r`Two voters come to support a clinic levy. Ana studied the budget and found the arguments strong. Ben decided because a celebrity he likes appeared in the advertisement. A month later both receive a leaflet opposing the levy. Which statement is the best prediction?`,
    options: [r`Ana used the peripheral route, so her view is more likely to last`, r`Ana used the central route, so her view is more likely to last`, r`Ben used the central route, so his view is more likely to last`, r`Ben used the peripheral route, so his view is more likely to last`],
    correctAnswer: 1,
    explanation: r`Careful evaluation of argument quality is the central route, and it produces durable attitude change that resists counterarguments. Ben relied on a surface cue, the celebrity, which is the peripheral route and gives fragile change. The other options either mislabel the routes or claim that the peripheral route gives the longer-lasting attitude.`,
  },
  [r`Describe cognitive dissonance and its resolution.`]: {
    question: r`A student who believes cheating is wrong copies a classmate's answers on a quiz. A week later she rates cheating as much less serious than she did before. How does cognitive dissonance theory explain the change?`,
    options: [r`She eased her discomfort by shifting her attitude to fit her act`, r`She eased her discomfort by shifting her act to fit her attitude`, r`She gave in to pressure from her peers to adopt their attitude`, r`She was rewarded for the new attitude, which reinforced it`],
    correctAnswer: 0,
    explanation: r`Her action conflicted with her belief, and the resulting discomfort was reduced by changing the belief, since the act could not be undone. Changing the act to fit the attitude would mean she stopped cheating or confessed, which is not what happened. No peer pressure or reward for the new attitude appears in the scenario.`,
  },
  [r`Explain the bystander effect.`]: {
    question: r`A man collapses in two settings: on a quiet trail with a single hiker nearby, and in a crowded station with two hundred commuters nearby. Which prediction and reason follow from the bystander effect?`,
    options: [r`Station: help is more likely, since many people share the responsibility`, r`Station: help is more likely, since an audience improves performance`, r`Trail: help is more likely, since one person holds all the responsibility`, r`Trail: help is more likely, since one person cannot be identified`],
    correctAnswer: 2,
    explanation: r`With more bystanders, each one feels less personal responsibility and takes cues from others' inaction, so help is less likely in the crowd. Sharing responsibility among many is exactly what reduces helping. An audience improving performance is social facilitation, and a lone witness is more identifiable, not less.`,
  },
  [r`In Milgram's studies, obedience DECREASED when:`]: {
    question: r`A researcher runs four variations of an obedience procedure in which a teacher is told to shock a learner. Which variation is expected to LOWER obedience compared with the standard version?`,
    options: [r`Moving the learner to a distant room where he cannot be heard`, r`Having the experimenter stand close behind the teacher's chair`, r`Having the experimenter wear a lab coat and university badge`, r`Seating the learner in the same room, right beside the teacher`],
    correctAnswer: 3,
    explanation: r`Obedience fell when the victim was close, because the teacher faced the consequences of his actions directly. A distant, unheard learner makes it easier to obey. A nearby experimenter and visible signs of legitimate authority both keep obedience high; it dropped when the experimenter was remote.`,
  },
  [r`Social loafing is:`]: {
    question: r`In a rope-pulling study, each person pulling alone averages 60 kg of force. Eight people then pull together on one rope, and only the total force is recorded. What does social loafing predict for the total?`,
    options: [r`More than 480 kg, because each person pulls harder`, r`Less than 480 kg, because each person pulls less hard`, r`Exactly 480 kg, because each person pulls the same`, r`About 960 kg, because effort doubles in a group`],
    correctAnswer: 1,
    explanation: r`Eight people at 60 kg each would give 480 kg, but social loafing means individuals reduce their effort when only the group result is measured, so the total falls short. A total above 480 kg would be a facilitation effect. Nothing doubles effort in a group, and an unchanged 480 kg ignores the drop in individual effort.`,
  },
  [r`Distinguish a group from an aggregate and a category.`]: {
    question: r`Consider two collections of people: (1) forty strangers waiting in the same airport gate area, and (2) everyone in a country who has type AB blood. How are they classified sociologically?`,
    options: [r`1 is a category; 2 is an aggregate`, r`1 is an aggregate; 2 is a category`, r`1 is a group; 2 is a category`, r`1 is an aggregate; 2 is a group`],
    correctAnswer: 1,
    explanation: r`People who merely share a space are an aggregate, and people who share a trait without interacting are a category. Neither collection is a group, because a group needs interaction and a shared identity. Swapping the two labels confuses sharing a place with sharing a characteristic.`,
  },
  [r`What is group polarization?`]: {
    question: r`Before meeting, the members of an investment club each rate their willingness to buy a risky stock at about 6 on a 10-point scale, where 5 is neutral. After an hour of discussion among themselves, with no new outside information, what is the most likely average rating?`,
    options: [r`About 5, back toward neutral`, r`About 6, the same as before`, r`About 3, reversed toward selling`, r`About 8, further toward buying`],
    correctAnswer: 3,
    explanation: r`Group polarization means discussion pushes a group further in the direction its members already leaned, so a mild lean toward buying becomes a stronger one. Discussion does not pull like-minded members back to neutral or leave them unchanged, and it does not reverse the direction of their initial lean.`,
  },
  [r`What is the relationship between status and role?`]: {
    question: r`A woman works as a paramedic. On each call she assesses the patient, gives emergency treatment and reassures the family. Which statement uses the terms status and role correctly?`,
    options: [r`Paramedic is her status; assessing patients is part of her role`, r`Paramedic is her role; assessing patients is part of her status`, r`Paramedic and assessing patients are both statuses she occupies`, r`Paramedic and assessing patients are both roles that she plays`],
    correctAnswer: 0,
    explanation: r`A status is a position in the social structure, and a role is the behavior expected of someone in that position. She occupies the status of paramedic and plays the role by assessing and treating patients. The other options reverse the terms or treat the position and the expected behavior as the same kind of thing.`,
  },
  [r`A {{c1::dyad}} (Simmel) is the most intimate, least stable group; adding a member creates a {{c2::triad}}, allowing mediation and coalitions.`]: {
    question: r`Two roommates have shared an apartment for a year. A third roommate moves in. According to Simmel, which possibility now exists that did not exist before?`,
    options: [r`The group ends as soon as any one member leaves`, r`Each member holds a veto over the group's survival`, r`Two members can form a coalition against the third`, r`Intimacy among the members reaches its maximum`],
    correctAnswer: 2,
    explanation: r`Moving from a dyad to a triad introduces two-against-one coalitions and the possibility of a mediator. A group that ends when any one member leaves, a veto held by each member and maximal intimacy are all features of the dyad, which the roommates had before the third person arrived.`,
  },
  [r`A nurse must work the night of her daughter's recital, and also feels torn between speed and thoroughness on shift. Label each tension.`]: {
    question: r`A graduate student is also a new father. (1) His weekly lab meeting clashes with his baby's medical appointment. (2) As a teaching assistant, he is expected to grade the students strictly and also to be their supportive mentor. How should the two tensions be labeled?`,
    options: [r`1 is role strain; 2 is role conflict`, r`1 is role conflict; 2 is role conflict`, r`1 is role conflict; 2 is role strain`, r`1 is role strain; 2 is role strain`],
    correctAnswer: 2,
    explanation: r`The first tension is between two different statuses, student and parent, so it is role conflict. The second is between competing expectations inside the single role of teaching assistant, so it is role strain. Labeling both the same way misses the test: count how many statuses the competing demands come from.`,
  },
  [r`{{c1::Role exit}} is disengaging from a central role and rebuilding identity — retiring, leaving a religious order, divorcing.`]: {
    question: r`Four situations involve a surgeon. Which one is an example of role exit?`,
    options: [r`She retires from surgery and must rebuild her sense of who she is`, r`She is paged to operate during her daughter's graduation ceremony`, r`She is expected to operate both quickly and with great caution`, r`She begins residency and learns what is expected of a surgeon`],
    correctAnswer: 0,
    explanation: r`Role exit is disengaging from a role that was central to one's identity and building a new identity afterward, as in retirement. Being paged during a family event is role conflict, and competing demands for speed and caution are role strain. Learning the expectations of a new position is socialization into a role, the opposite of leaving one.`,
  },
  [r`A {{c1::master status}} overrides all others in how one is perceived — 'ex-convict', 'blind', 'celebrity', often 'physician'.`]: {
    question: r`A man released from prison ten years ago is now a licensed electrician, a father and a volunteer coach. Employers, neighbors and league officials still respond to him chiefly as an ex-convict. How is his criminal record functioning?`,
    options: [r`As an ascribed status`, r`As a master status`, r`As a role set`, r`As a reference group`],
    correctAnswer: 1,
    explanation: r`A master status overrides a person's other statuses in how others perceive him, which is what his record does here. It is not ascribed, because a conviction is acquired through his own actions and not assigned at birth. A role set is the roles attached to one status, and a reference group is a standard used for self-evaluation.`,
  },
  [r`Contrast instrumental and expressive leadership.`]: {
    question: r`In a project team, Dana sets the deadlines, assigns the tasks and tracks progress. Lee notices when people are tense, lifts their spirits and settles disputes. Which labels fit?`,
    options: [r`Dana: expressive leader; Lee: instrumental leader`, r`Dana: authoritarian leader; Lee: laissez-faire leader`, r`Dana: transformational leader; Lee: transactional leader`, r`Dana: instrumental leader; Lee: expressive leader`],
    correctAnswer: 3,
    explanation: r`Instrumental leadership is task-oriented, focused on goals and deadlines, and expressive leadership is relationship-oriented, focused on morale and cohesion. Lee is actively involved, so laissez-faire does not fit, and nothing shows Dana deciding alone. Neither inspires through a vision nor trades rewards for performance.`,
  },
  [r`What is a role set (Merton)?`]: {
    question: r`Four descriptions involve a school principal. Which one describes a role set?`,
    options: [r`She is at once a principal, a mother and a voter`, r`She must miss a school event for a family wedding`, r`She retires and no longer knows how to fill her days`, r`She relates differently to pupils, teachers and parents`],
    correctAnswer: 3,
    explanation: r`A role set is the array of roles attached to one status: as principal she plays different roles toward pupils, teachers and parents. Being a principal, a mother and a voter is a status set, several positions held at once. Missing a school event for a wedding is role conflict, and retiring is role exit.`,
  },
  [r`A {{c1::primary}} group (Cooley) has intimate, enduring bonds valued in themselves (family); a {{c2::secondary}} group is impersonal and goal-directed.`]: {
    question: r`A man lives with his parents and siblings, to whom he is deeply attached. He also processes claims at an insurance firm with 300 employees, most of whom he knows only through work tasks. How are the household and the firm classified?`,
    options: [r`Household: secondary group; firm: primary group`, r`Household: primary group; firm: secondary group`, r`Household: primary group; firm: primary group`, r`Household: secondary group; firm: secondary group`],
    correctAnswer: 1,
    explanation: r`A primary group has intimate, enduring bonds valued for their own sake, as in a family. A secondary group is impersonal and exists to reach a goal, as in a large workplace. Seeing coworkers every day does not make the firm a primary group, because the ties are instrumental and not close.`,
  },
  [r`Compare authoritarian, democratic, and laissez-faire leadership styles.`]: {
    question: r`During a cardiac arrest, a team leader gives rapid orders without asking for opinions. At the monthly staff meeting, the same leader asks the team to discuss and vote on a new rota. Which leadership styles is she using?`,
    options: [r`Arrest: authoritarian; meeting: democratic`, r`Arrest: democratic; meeting: authoritarian`, r`Arrest: authoritarian; meeting: laissez-faire`, r`Arrest: laissez-faire; meeting: democratic`],
    correctAnswer: 0,
    explanation: r`Deciding alone and issuing orders is authoritarian leadership, which is fast and suits a crisis. Inviting the group to take part in the decision is democratic leadership. Laissez-faire means the leader stays hands-off, which describes neither the rapid orders nor an organized discussion and vote.`,
  },
  [r`Why did Simmel consider triads more stable than dyads, despite dyads' greater intimacy?`]: {
    question: r`Two business partners keep reaching deadlock, so they bring in a third partner. According to Simmel, where does the gain in stability come from?`,
    options: [r`A third member deepens the intimacy the first two shared`, r`A third member gives each person a veto over the group`, r`A third member can mediate, and the group survives one exit`, r`A third member removes any chance of coalitions forming`],
    correctAnswer: 2,
    explanation: r`A triad is more stable because the third party can mediate disputes and because the group continues if one member leaves. Intimacy is greatest in the dyad, and adding a member reduces it. The veto is a feature of the dyad, and a triad creates the possibility of two-against-one coalitions; it does not remove it.`,
  },
  [r`How can a secondary group become a primary group?`]: {
    question: r`Which situation shows a secondary group becoming a primary group?`,
    options: [r`Close friends found a company and sign a formal contract`, r`Lab partners stay close friends for years after the course`, r`Strangers in an elevator chat until the doors open again`, r`Siblings drift apart after moving to different cities`],
    correctAnswer: 1,
    explanation: r`Lab partners begin as goal-directed associates, a secondary group, and repeated contact turns the tie into an enduring friendship valued for itself, a primary group. Friends who formalize a business move in the opposite direction. Strangers in an elevator are an aggregate, and siblings drifting apart describes a primary group weakening.`,
  },
  [r`{{c1::Social loafing}} is reduced individual effort in groups when contributions are unidentifiable, e.g., slacking in a group project.`]: {
    question: r`Four writers produce a report under one shared byline, and the manager notices that each writes less than when working alone. Which change would best reduce this drop in effort?`,
    options: [r`Adding four more writers to the same shared report`, r`Giving the team one equal bonus for each report`, r`Removing the deadline for finishing the report`, r`Crediting each section to the writer who produced it`],
    correctAnswer: 3,
    explanation: r`Social loafing happens when individual contributions cannot be identified, so naming the author of each section makes each person's effort visible and restores it. Adding writers increases group size and anonymity, which makes loafing worse. An equal team bonus and a looser deadline do nothing to make individual work identifiable.`,
  },
  [r`A {{c1::reference}} group supplies the standards we use to evaluate ourselves, e.g., a premed measuring against admitted medical students.`]: {
    question: r`A swimmer wins her regional meet but feels like a failure, because she measures her times against those of Olympic finalists, none of whom she has met. What are the Olympic finalists to her?`,
    options: [r`Her primary group, since they shape her identity`, r`Her in-group, since she feels loyalty toward them`, r`Her reference group, since they supply her standard`, r`Her out-group, since she views them as rivals`],
    correctAnswer: 2,
    explanation: r`A reference group supplies the standards a person uses to judge herself, and she does not need to belong to it or know its members. Her disappointment despite winning is relative deprivation from comparing upward. A primary group requires close personal bonds, and nothing in the scenario involves loyalty to or rivalry with the finalists.`,
  },
  [r`{{c1::Groupthink}} occurs when a cohesive group's desire for consensus suppresses dissent and realistic appraisal, producing bad decisions.`]: {
    question: r`Which team is showing groupthink?`,
    options: [r`A tight-knit crew approves a flawed plan while doubters stay quiet`, r`A divided crew argues for hours and fails to reach any decision`, r`A cautious crew grows even more cautious after a long discussion`, r`A large crew works less hard because effort is not being tracked`],
    correctAnswer: 0,
    explanation: r`Groupthink occurs when a cohesive group's wish for consensus leads members to censor their doubts, so a poor decision goes unchallenged. Open argument is the opposite of suppressed dissent. A cautious group becoming more cautious is group polarization, and reduced effort when work is untracked is social loafing.`,
  },
  [r`{{c1::Role conflict}} is tension between roles of two different statuses; {{c2::role strain}} is tension among expectations within a single role.`]: {
    question: r`A high school teacher is told by her principal to raise test scores through drilling, and the same job description requires her to foster creativity through open-ended projects. Which label and reason fit the tension she feels?`,
    options: [r`Role strain, because both demands come from one status`, r`Role conflict, because both demands come from one status`, r`Role strain, because the demands come from two statuses`, r`Role conflict, because the demands come from two statuses`],
    correctAnswer: 0,
    explanation: r`Both expectations belong to the single status of teacher, and tension among expectations within one role is role strain. Role conflict requires two different statuses pulling against each other, such as teacher and parent. The options that pair a label with the wrong reason, or that count two statuses where there is one, misapply the definitions.`,
  },
  [r`An {{c1::ascribed}} status is assigned involuntarily (race, sex, birth cohort); an {{c2::achieved}} status is earned (physician, felon, spouse).`]: {
    question: r`A woman was born into a royal family as a princess. She later earned a medical degree, and she was then convicted of tax fraud. How are her three statuses classified?`,
    options: [r`Princess and felon are ascribed; physician is achieved`, r`Princess and physician are achieved; felon is ascribed`, r`Princess is ascribed; physician and felon are achieved`, r`Princess is achieved; physician and felon are ascribed`],
    correctAnswer: 2,
    explanation: r`An ascribed status is assigned involuntarily, as a royal title is at birth, and an achieved status results from a person's own actions. Achieved does not mean desirable: a conviction follows from what she did, so felon is achieved just as physician is. Calling felon ascribed because it is unwanted is the common mistake.`,
  },
  [r`Contrast Gemeinschaft and Gesellschaft (Tonnies).`]: {
    question: r`A farming village where families have traded labor and shared festivals for generations is absorbed into a growing city. Residents now deal with their neighbors mainly through leases and paid contracts. In Tonnies's terms, how has the community changed?`,
    options: [r`From Gesellschaft toward Gemeinschaft`, r`From Gemeinschaft toward Gesellschaft`, r`From secondary ties toward primary ties`, r`From achieved status toward ascribed status`],
    correctAnswer: 1,
    explanation: r`Gemeinschaft describes bonds of kinship, place and shared tradition, as in the village, and Gesellschaft describes impersonal, contractual ties, as in the city. The reversed option swaps the two terms. The shift also runs from primary-like ties toward secondary ones, not the other way, and the scenario says nothing about how statuses are acquired.`,
  },
  [r`An {{c1::in-group}} commands loyalty and a sense of 'we'; an {{c2::out-group}} is 'they', often viewed with competition or contempt.`]: {
    question: r`Supporters of one football club describe their fellow supporters as a varied mix of individuals, but say of a rival club's supporters that they are all the same. What are the rival supporters to them, and what bias is shown?`,
    options: [r`An in-group, seen as more alike than its members are`, r`A reference group, used as a standard for self-rating`, r`A primary group, valued for its close personal bonds`, r`An out-group, seen as more alike than its members are`],
    correctAnswer: 3,
    explanation: r`The rival supporters are the out-group, the 'they', and people tend to see out-group members as more similar to one another than they really are. The in-group is their own club, which they see as varied. They do not judge themselves by the rivals' standards, and they have no close personal bonds with them.`,
  },
  [r`A hospital committee arrives at a more extreme decision than any member held alone. Name the phenomenon and both directions it can take.`]: {
    question: r`Two juries deliberate separately on the same case. Before discussion, the members of Jury A each lean slightly toward a harsh sentence and the members of Jury B each lean slightly toward a lenient one. What does group polarization predict after discussion?`,
    options: [r`A becomes more lenient and B becomes harsher`, r`A and B both become harsher than at the start`, r`A and B both settle on a moderate middle view`, r`A becomes harsher and B becomes more lenient`],
    correctAnswer: 3,
    explanation: r`Group polarization pushes each group further in the direction it already leaned, so it can produce a harsher shift in one group and a more lenient shift in the other. It is not always a shift toward risk or severity, which is why both becoming harsher is wrong. Discussion among like-minded members does not reverse or moderate their lean.`,
  },
  [r`{{c1::Transactional}} leadership exchanges rewards for performance; {{c2::transformational}} leadership motivates through vision and inspiration.`]: {
    question: r`Manager P pays a bonus for every sales target that is met and cuts pay when a target is missed. Manager Q describes a mission to end hunger in the city, and her staff are inspired to work well beyond their duties. Which labels fit?`,
    options: [r`P: transactional leadership; Q: transformational leadership`, r`P: transformational leadership; Q: transactional leadership`, r`P: transactional leadership; Q: laissez-faire leadership`, r`P: laissez-faire leadership; Q: transformational leadership`],
    correctAnswer: 0,
    explanation: r`Transactional leadership exchanges rewards and penalties for performance, as P does. Transformational leadership motivates through vision and inspiration, as Q does. Laissez-faire leadership is the absence of direction, which fits neither manager, since both are actively shaping how their staff work.`,
  },
  [r`In hospital codes, the most effective fix for delayed action is assigning each task to a named person. Which two group processes does that counteract?`]: {
    question: r`A lifeguard instructor teaches trainees not to shout 'Someone call an ambulance' at a crowded pool, but to point at one person and say 'You in the red shirt, call an ambulance.' Why is the second instruction more effective?`,
    options: [r`It ends group polarization by making one person accountable`, r`It starts social facilitation by giving one person an audience`, r`It ends diffusion of responsibility by making one person accountable`, r`It starts groupthink by giving the crowd a single shared goal`],
    correctAnswer: 2,
    explanation: r`A task addressed to everyone belongs to no one in particular, so each bystander assumes someone else will act. Naming one person restores accountability and makes that person's contribution identifiable. Group polarization and groupthink concern group decisions, and social facilitation concerns performance on well-learned tasks, not whether anyone takes on the task.`,
  },
  [r`Name the concrete structural remedies Janis proposed to prevent groupthink.`]: {
    question: r`A hospital board is about to choose between two costly expansion plans, and its chair wants to guard against groupthink. Which step is one of the structural remedies Janis proposed?`,
    options: [r`Asking members to affirm their loyalty before each vote`, r`Splitting the board into subgroups that deliberate separately`, r`Having the chair state her preferred plan at the outset`, r`Keeping outside experts away so that discussion stays focused`],
    correctAnswer: 1,
    explanation: r`Independent subgroups that meet separately make it legitimate for different conclusions to emerge, which is one of Janis's remedies. Loyalty appeals increase pressure to conform. Janis advised the leader to withhold her opinion at the start and to invite outside experts, so the other two steps do the reverse of what he proposed.`,
  },
}
