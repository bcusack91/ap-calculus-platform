import type { CardCheck } from '@/lib/flashcard-check-core'

/**
 * Card-check questions for the cards of `mcat-sociology-interaction-organizations-mcat`: one per card, keyed by the
 * card's exact front text. Each asks the student to use the card's idea in a
 * new situation. Gate: scripts/flashcard-checks/validate.ts.
 */
const r = String.raw

export const checks: Record<string, CardCheck> = {
  [r`What is the fundamental attribution error?`]: {
    question: r`A manager sees a new employee arrive 40 minutes late on her first day and decides she is lazy and unreliable. He does not consider that the only train line into town was shut down that morning. His judgment illustrates:`,
    options: [r`the self-fulfilling prophecy`, r`the just-world hypothesis`, r`the fundamental attribution error`, r`the self-serving bias`],
    correctAnswer: 2,
    explanation: r`The manager explains another person's behavior by her character and ignores an obvious situational cause, which is the fundamental attribution error. The self-serving bias concerns how we explain our own successes and failures. Nothing here shows a belief coming true or a belief that people get what they deserve.`,
  },
  [r`What is stereotype threat?`]: {
    question: r`Women in an engineering course take the same hard math test in two rooms. In one room they first tick a box stating their gender; in the other they tick it after the test. Scores are lower in the first room. The most likely mechanism is:`,
    options: [r`worry about confirming a negative stereotype taxing working memory`, r`a self-serving bias that shifts blame for failure onto the test`, r`social loafing that cuts effort when others are tested alongside`, r`a stable ability gap that the gender question simply uncovers`],
    correctAnswer: 0,
    explanation: r`Making gender salient before the test raises concern about confirming a negative stereotype, and that concern uses up working memory needed for the problems. A stable ability gap cannot explain why the same kind of students score differently depending only on when the box is ticked. Self-serving bias and social loafing do not predict a drop tied to the identity cue.`,
  },
  [r`The contact hypothesis states prejudice reduces when groups have contact that is:`]: {
    question: r`A school tries to reduce hostility between two student groups by seating them in the same cafeteria for a full year. One group is always served first, there are no shared activities, and teachers ignore the plan. Hostility rises. The contact hypothesis explains this because the contact:`,
    options: [r`lasted too short a time for familiarity to build any liking`, r`removed the anonymity that normally keeps such conflict low`, r`always raises prejudice between groups with a hostile past`, r`lacked equal status, cooperation and institutional support`],
    correctAnswer: 3,
    explanation: r`Contact lowers prejudice only when the groups meet as equals, work together and are backed by the institution; here one group was favored, nothing was shared and staff gave no support. A full year is not too short. The hypothesis does not say contact always backfires, and anonymity is not part of it.`,
  },
  [r`Symbolic interactionism focuses on:`]: {
    question: r`A sociologist sits in on clinic visits to learn how patients come to read a physician's white coat as a sign of competence, and how that reading shifts as patients talk with staff. This research question belongs to:`,
    options: [r`structural functionalism`, r`symbolic interactionism`, r`conflict theory`, r`world-systems theory`],
    correctAnswer: 1,
    explanation: r`The study asks how people build and revise the meaning of a symbol through face-to-face interaction, which is the micro-level focus of symbolic interactionism. Functionalism asks what an institution contributes to social stability, and conflict theory asks who gains from inequality. World-systems theory works at the scale of nations.`,
  },
  [r`Relative risk of 2.0 means the exposed group has:`]: {
    question: r`Over five years, 40 of 200 night-shift workers and 40 of 400 day-shift workers develop hypertension. What is the relative risk for night-shift workers, and what does it mean?`,
    options: [r`1.0, so night workers have the same risk as day workers`, r`2.0, so night workers have twice the risk of day workers`, r`0.5, so night workers have half the risk of day workers`, r`0.1, so night workers have a tenth the risk of day workers`],
    correctAnswer: 1,
    explanation: r`Risk is 40/200 = 0.20 in night workers and 40/400 = 0.10 in day workers, so the relative risk is 0.20/0.10 = 2.0, or twice the risk. The value 1.0 comes from comparing the raw counts of 40 and 40 instead of the risks. The value 0.5 inverts the ratio, and 0.1 is the difference between the two risks, not their ratio.`,
  },
  [r`Implicit bias in clinical settings can cause:`]: {
    question: r`A physician sincerely endorses equal care and shows no prejudice on an anonymous attitude survey. A chart audit, which surprises and distresses her, shows that she spends far less time explaining options to patients from one group. The best explanation is:`,
    options: [r`explicit prejudice that she conceals on the survey`, r`institutional discrimination written into clinic policy`, r`stereotype threat lowering her own clinical performance`, r`implicit bias shaping her behavior without her awareness`],
    correctAnswer: 3,
    explanation: r`Implicit bias operates outside awareness, so it can produce unequal treatment in someone whose stated and sincerely held values are egalitarian. Concealed explicit prejudice does not fit an anonymous survey and her genuine surprise. No clinic policy is described, and stereotype threat concerns a person's own performance under a stereotype about their own group.`,
  },
  [r`Which test compares means between two independent groups?`]: {
    question: r`Researchers measure loneliness scores in 50 adults who live alone and in 50 different adults who live with family, and want to know whether the mean scores of the two groups differ. Which analysis fits?`,
    options: [r`an independent-samples t-test`, r`a paired-samples t-test`, r`a chi-square test of independence`, r`a Pearson correlation analysis`],
    correctAnswer: 0,
    explanation: r`Two separate groups of people are compared on the mean of a continuous score, which calls for an independent-samples t-test. A paired t-test needs the same people measured twice or matched pairs. Chi-square compares counts in categories, and a correlation relates two continuous variables measured on the same people.`,
  },
  [r`What is the Thomas theorem?`]: {
    question: r`Residents wrongly believe that a neighborhood clinic gives weaker vaccines than the hospital, although the vaccines are identical. They stop going, and the clinic closes for lack of patients. The Thomas theorem accounts for the closure by noting that people:`,
    options: [r`acted on the objective facts, so their definition of the situation was irrelevant`, r`held a belief that was true from the start, so their actions changed nothing`, r`acted on their definition of the situation, so its consequences were real`, r`were steered by social structure alone, so their beliefs changed nothing`],
    correctAnswer: 2,
    explanation: r`The Thomas theorem says a situation defined as real is real in its consequences: the belief was false, but the avoidance and the closure it produced were real. The objective facts were that the vaccines were identical, so people were not acting on them. The belief was not true from the start, and it was the belief, not structure alone, that drove the behavior.`,
  },
  [r`What did Weber mean by the 'iron cage'?`]: {
    question: r`A chain buys a family bakery. Which change at the bakery best illustrates what Weber called the 'iron cage'?`,
    options: [r`bakers are paid less than before and organize a strike against the new owners`, r`bakers gain a say in the recipes and feel more attached to the bakery's mission`, r`bakers are supervised by the owner's relatives, who ignore the written policies`, r`bakers must follow timed, scripted steps and feel that their craft has lost its meaning`],
    correctAnswer: 3,
    explanation: r`The iron cage is the trap of rationalization: efficient, calculated, rule-bound work that drains meaning and spontaneity. A strike over pay is class conflict, not disenchantment. More say over recipes is the opposite of the cage, and supervision by relatives who ignore policy is a departure from bureaucracy rather than its excess.`,
  },
  [r`In dramaturgy (Goffman), the {{c1::front stage}} is where we perform a role for an audience; the {{c2::back stage}} is where the performance drops.`]: {
    question: r`A flight attendant is warm and composed while serving passengers in the aisle. Behind the galley curtain she slumps, rolls her eyes and jokes with the crew about a rude passenger. In Goffman's dramaturgy:`,
    options: [r`the aisle is her front stage and the curtained galley is her back stage`, r`the aisle is her back stage and the curtained galley is her front stage`, r`both areas are front stage, because she is on duty in each of them`, r`both areas are back stage, because the passengers are strangers to her`],
    correctAnswer: 0,
    explanation: r`Front stage is where a role is performed for an audience, here the passengers in the aisle; back stage is where the performance is dropped out of the audience's view, here the galley. Reversing the two mislabels where the audience is. Being on duty does not make a hidden area front stage, and strangers are still an audience.`,
  },
  [r`{{c1::Impression management}} is the conscious shaping of how others perceive us — a physician's white coat, steady tone, and framed diplomas.`]: {
    question: r`Before an interview, an applicant deletes party photos from his public profile, borrows a well-cut suit and rehearses confident answers in a mirror. Goffman would describe this behavior as:`,
    options: [r`social facilitation`, r`self-serving bias`, r`impression management`, r`role strain`],
    correctAnswer: 2,
    explanation: r`He is deliberately controlling appearance, setting and disclosure to shape how the interviewer will see him, which is impression management. Social facilitation is improved performance of easy tasks in front of others. Self-serving bias is about explaining one's outcomes, and role strain is tension among the demands of a single role.`,
  },
  [r`What are Etzioni's three types of formal organizations?`]: {
    question: r`One person volunteers at a food bank because she believes in its mission. A second takes a call-center job for the wages. A third is held on a locked ward under an involuntary commitment order. In Etzioni's scheme, these organizations are, in order:`,
    options: [r`utilitarian, normative, coercive`, r`normative, utilitarian, coercive`, r`coercive, utilitarian, normative`, r`normative, coercive, utilitarian`],
    correctAnswer: 1,
    explanation: r`Joining for a shared goal makes the food bank normative, joining for pay makes the call center utilitarian, and forced membership makes the locked ward coercive. The other orders swap these: for example, calling the food bank utilitarian confuses belief in a mission with material reward.`,
  },
  [r`Name common dysfunctions of bureaucracy.`]: {
    question: r`A claims processor has applied the same checklist for twenty years. When a new kind of claim arrives that the checklist clearly does not fit, she applies it anyway and reaches an absurd result. This dysfunction of bureaucracy is called:`,
    options: [r`iron law of oligarchy`, r`alienation from work`, r`McDonaldization`, r`trained incapacity`],
    correctAnswer: 3,
    explanation: r`Trained incapacity is following learned rules even when they have become counterproductive, because the training itself blocks adaptation to a new case. The iron law of oligarchy concerns power gathering in a few leaders. Alienation is a loss of control and connection in work, and McDonaldization is the spread of fast-food principles across institutions.`,
  },
  [r`Describe front stage and back stage for a restaurant server.`]: {
    question: r`A restaurant server is in the kitchen complaining loudly about a table when a customer wanders in looking for the restroom. She instantly straightens up, smiles and offers directions. Goffman would say the customer's entry:`,
    options: [r`turned a back stage region into a front stage for that moment`, r`turned a front stage region into a back stage for that moment`, r`showed that the kitchen had been a front stage region all along`, r`showed that her dining room manner is her one authentic self`],
    correctAnswer: 0,
    explanation: r`The kitchen is normally back stage, where the server drops the performance, but an audience member's arrival makes her resume the role, so the region works as front stage while he is there. The reverse option mislabels the kitchen. The kitchen was not front stage before he entered, and dramaturgy does not treat either manner as the single authentic self.`,
  },
  [r`What is face-work in Goffman's interaction theory?`]: {
    question: r`In a client meeting, a colleague badly mispronounces the client's name. Which response from a coworker is an example of face-work?`,
    options: [r`interrupting to announce the error and asking him to apologize`, r`smoothly using the correct name while crediting the colleague's point`, r`reporting the mispronunciation to the manager after the meeting`, r`privately deciding that the colleague is careless and avoiding him`],
    correctAnswer: 1,
    explanation: r`Face-work is effort to protect the positive social value people claim in an interaction; quietly repairing the slip while crediting the colleague saves face for him and for the client. Announcing the error attacks his face. Reporting it later and privately judging him do nothing to maintain face within the interaction.`,
  },
  [r`What is a voluntary (normative) association, and what functions does it serve?`]: {
    question: r`Putnam worried about falling membership in bowling leagues, service clubs and other groups that people join freely. In his argument, the main loss to a town when such associations disappear is:`,
    options: [r`human capital, the skills and schooling that raise individual wages`, r`cultural capital, the tastes and credentials that signal high status`, r`social capital, the trust and ties that help residents act together`, r`economic capital, the money and property that residents can invest`],
    correctAnswer: 2,
    explanation: r`Voluntary associations build social capital: networks, trust and civic skills that let people pursue shared goals. Human capital is an individual's skills and education, cultural capital is status-linked knowledge and taste, and economic capital is wealth. None of those three is what Putnam said declines when people stop joining groups.`,
  },
  [r`What is goal displacement in organizations?`]: {
    question: r`A nonprofit was founded to teach adults to read. Ten years later its staff spend most of their time writing grant reports and enlarging the head office, and tutoring hours have fallen by half. This pattern is best described as:`,
    options: [r`goal displacement`, r`deindividuation`, r`role conflict`, r`groupthink`],
    correctAnswer: 0,
    explanation: r`Goal displacement occurs when rules, paperwork and the organization's own survival replace the mission it was created to serve, as when reporting and expansion crowd out tutoring. Deindividuation is loss of self-awareness in a crowd. Role conflict is a clash between two roles one person holds, and groupthink is a drive for consensus that suppresses dissent.`,
  },
  [r`What is the 'strength of weak ties' (Granovetter)?`]: {
    question: r`A new graduate wants a job in a field where none of her family or close friends work. According to Granovetter, which contact is most likely to pass on a lead she has not already heard?`,
    options: [r`her roommate, whom she talks with every day`, r`her sister, who shares most of her friends`, r`her best friend, who knows all her contacts`, r`a former classmate she sees about once a year`],
    correctAnswer: 3,
    explanation: r`Weak ties such as a rarely seen former classmate connect to circles she does not belong to, so they carry new information. The roommate, the sister and the best friend are strong ties whose contacts overlap with hers, so what they know she has mostly already heard.`,
  },
  [r`{{c1::McDonaldization}} (Ritzer): efficiency, calculability, predictability, and control via technology spread from fast food across institutions.`]: {
    question: r`A funeral home chain sells three fixed packages, limits every service to 30 minutes, has staff read from one script in every branch, and takes orders through touch-screen kiosks. Ritzer's term for this trend is:`,
    options: [r`secularization`, r`McDonaldization`, r`deindividuation`, r`medicalization`],
    correctAnswer: 1,
    explanation: r`Fixed packages and timed services show efficiency and calculability, one script shows predictability, and kiosks show control through technology: the four principles of McDonaldization. Secularization is the declining influence of religion. Deindividuation is loss of self-awareness in groups, and medicalization is redefining a problem as a medical one.`,
  },
  [r`Weber's ideal bureaucracy: division of labor, hierarchy of authority, written {{c1::rules}}, {{c2::impersonality}}, and merit-based hiring.`]: {
    question: r`At a city permit office, a clerk skips the standard waiting period for her cousin's application because he is family, while other applicants wait their turn. Which feature of Weber's ideal bureaucracy does this most directly violate?`,
    options: [r`division of labor`, r`hierarchy of authority`, r`impersonality`, r`merit-based hiring`],
    correctAnswer: 2,
    explanation: r`Impersonality means cases are handled by the same rules whoever the person is, so favoring a relative breaks it directly. Division of labor concerns specialized tasks, and hierarchy concerns who reports to whom. Merit-based hiring is about how staff are selected, not how clients are treated.`,
  },
  [r`What is a self-fulfilling prophecy in social interaction?`]: {
    question: r`A coach is told that six players, actually picked at random, are 'naturally gifted.' He gives them more playing time and feedback, and by the end of the season their measured skills exceed their teammates'. What makes this a self-fulfilling prophecy rather than merely biased perception?`,
    options: [r`the players' real performance rose because of how the coach treated them`, r`the coach remembered only the good plays made by the labeled players`, r`the players were already more skilled before the season had begun`, r`the players did worse out of anxiety about the coach's high hopes`],
    correctAnswer: 0,
    explanation: r`In a self-fulfilling prophecy a false belief changes behavior in a way that makes the belief come true: extra playing time and feedback produced a real gain in skill. Selective memory would be biased perception with no real change. The players were chosen at random, so they were not better at the start, and they improved rather than declined.`,
  },
  [r`The {{c1::iron law of oligarchy}} (Michels): all large organizations, even democratic ones, drift toward rule by a small elite.`]: {
    question: r`A labor union began with open meetings where every member voted on contracts. Thirty years later, the same five officers negotiate every contract, control the newsletter and run unopposed. Michels would call this:`,
    options: [r`the Hawthorne effect`, r`the bystander effect`, r`the Thomas theorem`, r`the iron law of oligarchy`],
    correctAnswer: 3,
    explanation: r`Michels argued that even democratic organizations drift toward rule by a small elite, because leaders gain expertise and control of information and communication. The Hawthorne effect is behavior change from being observed. The bystander effect concerns helping in groups, and the Thomas theorem concerns how definitions of a situation have real consequences.`,
  },
  [r`What are the consequences of strong in-group identification?`]: {
    question: r`Fans of a football club call a hard tackle by their own player 'passionate.' When a rival player makes an identical tackle, the same fans call it 'dirty.' Which consequence of strong in-group identification does this show?`,
    options: [r`out-group homogeneity making all rival players seem alike`, r`scapegoating of a weak group for a loss it did not cause`, r`in-group favoritism producing a double standard for one act`, r`stereotype threat lowering the performance of the rivals`],
    correctAnswer: 2,
    explanation: r`The same act is judged generously for an in-group member and harshly for an out-group member, a double standard that comes from in-group favoritism. Out-group homogeneity would be seeing rival players as all alike. Scapegoating needs blame for a setback, and stereotype threat is about the performance of the stereotyped person.`,
  },
  [r`The organizational chart says the attending decides, but the charge nurse effectively controls bed assignment. Name the distinction at work.`]: {
    question: r`A consultant studies only a company's official organization chart to learn how purchasing decisions are made. What will she most likely miss?`,
    options: [r`the formal organization, where authority follows written job titles and ranks`, r`the informal organization, where influence follows expertise and personal ties`, r`the division of labor, which gives each office its own specialized set of tasks`, r`the hierarchy of authority, which shows who reports to whom at every level`],
    correctAnswer: 1,
    explanation: r`The chart shows only the formal structure. The informal organization, in which trusted or expert people shape decisions whatever their title, does not appear on it. Formal authority, the division of labor and the hierarchy are exactly what an organization chart does display.`,
  },
  [r`{{c1::Bonding}} social capital is dense within-group ties that supply support; {{c2::bridging}} social capital crosses groups and supplies novel information.`]: {
    question: r`A recent immigrant relies on a tight circle of relatives from her home village for loans and childcare. Later, a member of a citywide professional association tells her about a licensing program that none of her relatives had heard of. Which kinds of social capital are these?`,
    options: [r`bonding capital from the relatives, bridging capital from the association`, r`bridging capital from the relatives, bonding capital from the association`, r`bonding capital from both, because each group gave her practical help`, r`bridging capital from both, because each group lies outside her household`],
    correctAnswer: 0,
    explanation: r`Dense ties within her own group supply support, which is bonding capital; a tie that crosses into a different group supplies new information, which is bridging capital. Swapping the labels reverses the definitions. Giving help does not make a tie bonding, and being outside the household does not make it bridging.`,
  },
  [r`Worker output at the Hawthorne plant rose whether the lighting was raised or lowered. Name the effect and the design lesson.`]: {
    question: r`Researchers test whether standing desks raise productivity. The standing-desk group is visited and interviewed by the study team every day, and its output rises. Which control group best rules out the Hawthorne effect?`,
    options: [r`workers at regular desks who are never told that a study is under way`, r`workers at standing desks who get twice as many visits and interviews`, r`workers who chose standing desks on their own before the study began`, r`workers at regular desks who get the same daily visits and interviews`],
    correctAnswer: 3,
    explanation: r`The Hawthorne effect is a change caused by being observed and singled out, so the control group must receive equal attention; then any remaining difference is due to the desks. An unobserved control group leaves attention and desks confounded. Doubling the visits adds attention, and self-chosen desks add selection bias.`,
  },
  [r`Goffman: a {{c1::discredited}} stigma is already visible; a {{c2::discreditable}} one is concealable, making information control the central task.`]: {
    question: r`A man has well-controlled epilepsy that his coworkers do not know about. A woman in the same office has a large, visible burn scar on her face. In Goffman's terms:`,
    options: [r`his stigma is discredited and hers is discreditable`, r`his stigma is discreditable and hers is discredited`, r`both stigmas are discredited, since both are medical`, r`both stigmas are discreditable, since both are lasting`],
    correctAnswer: 1,
    explanation: r`A concealable stigma is discreditable: he must manage who knows. A stigma that is already visible is discredited. The reversed option swaps the terms, and the distinction depends on visibility, not on whether a condition is medical or permanent.`,
  },
  [r`Why do physicians and hospital administrators conflict structurally, in Weberian terms?`]: {
    question: r`A hospital orders that every patient with chest pain receive the same fixed sequence of tests. A cardiologist objects that she should decide the workup for each patient herself. In Weberian terms, this clash is between:`,
    options: [r`charismatic authority based on personality and traditional authority based on custom`, r`traditional authority based on custom and bureaucratic authority based on rules`, r`professional authority based on expertise and bureaucratic authority based on rules`, r`professional authority based on expertise and charismatic authority based on personality`],
    correctAnswer: 2,
    explanation: r`The cardiologist claims autonomy grounded in expert judgment about individual cases, while the hospital asserts standardization grounded in rules and hierarchy. Neither side is appealing to custom or to personal magnetism, so the options naming traditional or charismatic authority do not fit.`,
  },
  [r`Marx's four forms of alienation: from the {{c1::product}} of labor, from the {{c2::process}} of work, from other workers, and from one's human potential.`]: {
    question: r`An assembly-line worker attaches the same bolt every 20 seconds. The conveyor sets her pace, and a manual dictates each movement, so she has no say in how the job is done. Which of Marx's forms of alienation does this describe most directly?`,
    options: [r`alienation from the product of labor`, r`alienation from her fellow workers`, r`alienation from the owners of capital`, r`alienation from the process of work`],
    correctAnswer: 3,
    explanation: r`Having no control over the pace or method of the work is alienation from the process of work. Alienation from the product would be about not owning or controlling what she makes, and alienation from other workers would be about competition or isolation. Alienation from owners is not one of Marx's four forms.`,
  },
  [r`{{c1::Homophily}} is the tendency to form ties with similar others; network {{c2::density}} is the fraction of possible ties that actually exist.`]: {
    question: r`In a five-person study group, a researcher finds that 4 friendship ties exist among the members. What is the density of this network?`,
    options: [r`0.4`, r`0.8`, r`0.2`, r`1.25`],
    correctAnswer: 0,
    explanation: r`Density is actual ties divided by possible ties. Five people can form 5 × 4 / 2 = 10 pairs, so density is 4/10 = 0.4. The value 0.8 divides ties by people, 0.2 counts each pair twice to get 20 possible ties, and 1.25 divides people by ties.`,
  },
  [r`How do mutual-help groups such as Alcoholics Anonymous work, analyzed sociologically rather than clinically?`]: {
    question: r`For people with a gambling problem, mailed brochures containing complete information do little. Weekly peer meetings, where long-time members tell their stories and newcomers come to call themselves 'recovering gamblers,' work much better. The sociological explanation is that the meetings provide:`,
    options: [r`more accurate facts about gambling in a more memorable form`, r`new norms and a shared identity through a reference group of peers`, r`coercive control of the kind that is found in a total institution`, r`utilitarian rewards that pay members for each week of abstinence`],
    correctAnswer: 1,
    explanation: r`Mutual-help groups work through normative influence and identity change: a hidden stigma becomes a shared identity, and members further along model new norms. The brochures already supplied the facts, so information is not the active ingredient. Attendance is voluntary and unpaid, so coercion and material reward do not apply.`,
  },
  [r`Support predicts better health only among highly stressed people in one study but among everyone in another. Name the two competing hypotheses.`]: {
    question: r`In a cohort study, people with strong social support have lower cortisol than people with weak support, but only among those who recently lost a job. Among people who kept their jobs, support makes no difference. These data favor:`,
    options: [r`the direct effect hypothesis, since support helped only under high stress`, r`the stress-buffering hypothesis, since support helped at every stress level`, r`the stress-buffering hypothesis, since support helped only under high stress`, r`the direct effect hypothesis, since support helped at every stress level`],
    correctAnswer: 2,
    explanation: r`Stress buffering predicts that support protects specifically when a stressor is present, which matches a benefit seen only after job loss. The direct (main) effect hypothesis predicts a benefit at every level of stress, which the employed group contradicts. The two options that say support helped at every level misdescribe the data.`,
  },
  [r`{{c1::Social isolation}} is objectively having few contacts; {{c2::loneliness}} is the subjective distress of a gap between desired and actual connection.`]: {
    question: r`A lighthouse keeper sees one visitor a month and is entirely content. A first-year student is surrounded by dorm mates all day yet feels painfully disconnected. Which description is correct?`,
    options: [r`the keeper is isolated but not lonely; the student is lonely but not isolated`, r`the keeper is lonely but not isolated; the student is isolated but not lonely`, r`both are socially isolated, since neither has the close ties that people need`, r`both are lonely, since each has fewer close confidants than the average adult`],
    correctAnswer: 0,
    explanation: r`Social isolation is the objective fact of few contacts, which fits the keeper; loneliness is the subjective distress of wanting more connection than one has, which fits the student. The reversed option swaps the definitions. The student has many contacts, so he is not isolated, and the keeper feels no distress, so he is not lonely.`,
  },
  [r`Garfinkel had students behave as boarders in their own homes, and families reacted with anger and alarm. What was he demonstrating?`]: {
    question: r`A sociologist has assistants try to bargain over the marked price of bread at a supermarket checkout. Cashiers and nearby shoppers react with confusion and irritation. This procedure is best described as:`,
    options: [r`a conformity experiment that measures yielding to a unanimous group`, r`an obedience experiment that measures compliance with an authority`, r`a bystander experiment that measures helping when others are present`, r`a breaching experiment that exposes an unspoken norm by violating it`],
    correctAnswer: 3,
    explanation: r`Garfinkel's breaching experiments break a taken-for-granted expectation, here that marked prices are not negotiated, to make the hidden rule visible through people's reactions. No unanimous majority is pressuring anyone, no authority is giving orders, and no one needs help, so the other three designs do not fit.`,
  },
  [r`{{c1::Emotional labor}} (Hochschild) is managing feeling to meet a job's display rules; {{c2::surface}} acting fakes it, deep acting alters the feeling.`]: {
    question: r`Two flight attendants face the same abusive passenger. Dana keeps a fixed smile while seething inside. Priya reminds herself that the passenger is frightened of flying until she actually feels sympathy, then shows it. According to Hochschild's account:`,
    options: [r`Dana is deep acting and faces a higher risk of burnout than Priya`, r`Dana is surface acting and faces a higher risk of burnout than Priya`, r`Dana is surface acting and faces a lower risk of burnout than Priya`, r`Dana is deep acting and faces a lower risk of burnout than Priya`],
    correctAnswer: 1,
    explanation: r`Faking the required display while the feeling stays unchanged is surface acting, and the gap between felt and shown emotion makes it the stronger predictor of burnout. Changing the feeling itself, as Priya does, is deep acting and is less draining. The other options either mislabel Dana's strategy or reverse the burnout risk.`,
  },
  [r`Four types of social support: {{c1::emotional}} (empathy), instrumental (tangible aid), {{c2::informational}} (advice), and appraisal (feedback).`]: {
    question: r`After a diagnosis of type 1 diabetes, a woman's friend, who is a nurse, teaches her how to count carbohydrates and adjust her insulin dose. Her brother sits with her and listens while she cries. Which types of social support are these?`,
    options: [r`instrumental from the nurse, emotional from the brother`, r`informational from the nurse, appraisal from the brother`, r`informational from the nurse, emotional from the brother`, r`emotional from the nurse, informational from the brother`],
    correctAnswer: 2,
    explanation: r`Advice and teaching are informational support, and empathy and listening are emotional support. Instrumental support would be tangible aid such as buying supplies or driving her to a clinic. Appraisal support is feedback that helps a person evaluate herself, which the brother does not give.`,
  },
  [r`A neighbor helps you move and you feel obliged to reciprocate. Which interaction theory explains this, and what norm enforces it?`]: {
    question: r`A woman ends a long friendship. For years she paid for meals and listened to her friend's problems, and nothing was ever returned. She says, 'I put in far more than I get back.' Which account fits her decision best?`,
    options: [r`social exchange theory, with the norm of reciprocity having been violated`, r`symbolic interactionism, with the definition of the situation violated`, r`the dramaturgical approach, with her front stage role being violated`, r`ethnomethodology, with a background expectancy deliberately breached`],
    correctAnswer: 0,
    explanation: r`Social exchange theory treats relationships as exchanges of rewards and costs that last while the balance stays favorable, and the norm of reciprocity requires that help be repaid. She is weighing costs against returns, not negotiating meanings, staging a performance, or testing hidden rules, so the other three perspectives do not explain the decision.`,
  },
}
