/**
 * MCAT Full-Length Form 2 — Psychological, Social & Biological Foundations,
 * file A: passages 1–5 (22 questions) + 8 discrete items.
 *
 * Authored 2026-09-30 against the AAMC blueprint rebuild brief: 400–600-word
 * passages, experiment/information mix, keys never restate passage sentences,
 * option lengths and key positions balanced, skill mix ≈ 35/45/10/10.
 * Keys are position-balanced by hand and explanations reference options by
 * CONTENT, so options may be reordered only via scripts/rebalance-passage-keys.ts.
 */
import type { MCATPassage, MCATDiscreteQuestion } from '../types'

export const FL2_PSYCH_SOC_A_PASSAGES: MCATPassage[] = [
  // ────────────────────────────────────────────────────────────────────────
  // 1. COGNITION — heuristics, framing, and the conjunction fallacy
  // ────────────────────────────────────────────────────────────────────────
  {
    id: 'fl2-ps-a-01',
    section: 'psych-soc',
    discipline: 'cognition-and-perception',
    title: 'Vivid Stories, Base Rates, and Vaccine Decisions',
    passageText:
      'People rarely compute probabilities when they judge risk. Instead they rely on heuristics, mental shortcuts that are usually efficient but produce systematic errors. Under the availability heuristic, an event is judged more frequent when instances of it come to mind easily, and a single vivid account can outweigh statistics that describe thousands of cases. Under the representativeness heuristic, the likelihood that a person belongs to a category is judged by how well the person resembles a typical member, with little regard for how common the category is. A third effect, framing, arises when logically equivalent descriptions of the same outcome lead to different choices, typically because outcomes described as losses loom larger than the same outcomes described as gains.\n\nResearchers recruited 400 adults to read a pamphlet about a vaccine against a common respiratory illness. The pamphlet noted that a serious allergic reaction occurs in about 1 of every 100,000 recipients. Participants were randomly assigned to read 0, 2, 4, 6, or 8 short first-person accounts from people who had experienced the reaction; the accounts were presented as posts from an online forum. Half of the participants at each level also saw the statistical rate repeated in large type directly above the accounts (base rate provided), and half saw the accounts alone (no base rate). Each participant then estimated how many of 100,000 recipients experience the reaction and rated, on a 7-point scale, how easily they could imagine the reaction happening to them. Median estimates are shown in Figure 1. Across all participants, ease-of-imagining ratings correlated with estimates ($r = 0.71$), and the ratings rose with the number of accounts in both groups.\n\nIn a second task, the same participants were asked whether they would recommend the vaccine to a friend. Half read that the vaccine “keeps 90 of every 100 recipients from becoming ill”; the other half read that “10 of every 100 recipients become ill despite vaccination.” In the first group, 78% recommended the vaccine; in the second, 55% did. When later shown both sentences side by side, nearly all participants agreed that the two statements described the same outcome.\n\nIn a third task, participants read a description of a woman who was “athletic, buys organic food, and distrusts large corporations” and were asked which was more probable: that she is a nurse, or that she is a nurse who declines vaccines. Sixty-four percent chose the second description. The researchers noted that a judgment of probability need not be a judgment of similarity, and that the two come apart precisely when a description fits a stereotype.\n\nThe researchers concluded that public communication about medical risk cannot rely on accurate statistics alone, because the format in which information is encountered shapes how it is used.',
    chart: {
      title: 'Figure 1. Median estimated number of serious reactions per 100,000 recipients, by number of first-person accounts read',
      kind: 'line',
      xLabel: 'First-person accounts read',
      yLabel: 'Median estimate',
      yUnit: 'per 100,000',
      xValues: [0, 2, 4, 6, 8],
      yValues: [20, 90, 240, 520, 900],
      seriesLabel: 'No base rate',
      comparisonSeries: [{ label: 'Base rate provided', yValues: [2, 6, 14, 32, 60] }],
    },
    questions: [
      {
        question: 'Based on Figure 1, providing the base rate had which effect on participants’ estimates?',
        options: [
          'It eliminated the influence of the accounts, since estimates stayed near the true rate at every level.',
          'It lowered estimates only for participants who read at least four accounts.',
          'It lowered estimates at every level but did not stop estimates from rising as more accounts were read.',
          'It reversed the trend, so that estimates fell as more accounts were read.',
        ],
        correctAnswer: 2,
        explanation:
          'In the base-rate group the median estimate is below the no-base-rate value at every level, yet it still climbs from 2 to 60 per 100,000 between zero and eight accounts, so the accounts continued to matter. The claim that the accounts’ influence was eliminated is contradicted by the thirtyfold rise within the base-rate group. The claim that lowering occurred only at four or more accounts is wrong because the base-rate curve is already lower at zero and two accounts. Estimates rose, not fell, with more accounts in both groups.',
        skill: '6B data interpretation: availability',
      },
      {
        question: 'Suppose the first task were repeated with the first-person accounts replaced by brief, clinical third-person case summaries that participants rated as hard to imagine. If the rise in estimates in the original task reflected the availability heuristic, the summaries would most likely produce:',
        options: [
          'a smaller rise in estimates as more summaries were read.',
          'a larger rise in estimates as more summaries were read.',
          'the same rise in estimates, because the number of cases described is unchanged.',
          'estimates below the true rate, because clinical wording implies that a reaction is rare.',
        ],
        correctAnswer: 0,
        explanation:
          'The availability heuristic ties judged frequency to how easily instances come to mind, and the passage links estimates to ease-of-imagining ratings; summaries that are hard to imagine should therefore raise estimates less than vivid accounts do. A larger rise would require the summaries to be more available than the vivid accounts, the opposite of what is stipulated. The same rise would be expected only if people counted cases rather than relying on ease of retrieval, which is what the heuristic denies. Nothing in the heuristic predicts estimates falling below the true rate, and even hard-to-imagine cases add some instances to memory.',
        skill: '6B availability heuristic',
      },
      {
        question: 'A health department wants to increase vaccine uptake with a message that applies the finding of the second task. Which message is most consistent with that finding?',
        options: [
          'Nine of every ten people who get the vaccine stay healthy.',
          'One of every ten people who get the vaccine still gets sick.',
          'Serious reactions occur in only one of every 100,000 recipients.',
          'More than ten thousand people received the vaccine in clinical trials.',
        ],
        correctAnswer: 0,
        explanation:
          'The second task showed that the same outcome described as a gain (recipients kept well) produced more recommendations than the equivalent description as a loss (recipients who still fall ill), so a gain-framed message should raise uptake. Stating that one in ten still gets sick is the loss frame that lowered recommendations. Quoting the reaction rate is a base rate, which the first task showed is easily overridden by vivid accounts, and it does not frame the vaccine’s benefit at all. The size of the trials says nothing about outcomes and is not a framing of the same result.',
        skill: '6B framing effects',
      },
      {
        question: 'Participants who chose the second description in the third task most clearly committed which error?',
        options: [
          'The base-rate fallacy, because they ignored how small a share of the population nurses make up.',
          'The gambler’s fallacy, because they expected an unusual outcome to be due.',
          'Belief perseverance, because they kept their view after seeing contrary evidence.',
          'The conjunction fallacy, because a joint event cannot exceed the probability of one of its parts.',
        ],
        correctAnswer: 3,
        explanation:
          'Every nurse who declines vaccines is also a nurse, so the second description can never be more probable than the first; rating it as more probable because it matches the stereotype is the conjunction fallacy, a product of representativeness. The base-rate fallacy would involve neglecting how common nurses are when judging whether she is a nurse at all, but both options describe a nurse. The gambler’s fallacy concerns expectations about sequences of independent random events. Belief perseverance requires holding a belief after disconfirming evidence, and no evidence was presented.',
        skill: '6B representativeness and the conjunction fallacy',
      },
      {
        question: 'A critic proposes that participants shown the base rate simply anchored on the number 1 rather than relying less on the accounts. Which additional result would most strongly support the critic’s proposal?',
        options: [
          'Ease-of-imagining ratings in the base-rate group were unrelated to the number of accounts read.',
          'Participants shown the number 1 in large type, labeled only as a page number, gave estimates as low as the base-rate group.',
          'Participants in the base-rate group reported paying less attention to the accounts than those in the no-base-rate group.',
          'Estimates in the base-rate group varied more widely among participants than those in the no-base-rate group.',
        ],
        correctAnswer: 1,
        explanation:
          'A page number carries no information about how often reactions occur, so if merely seeing a prominent 1 lowers estimates as much as the true base rate does, the number is acting as an anchor rather than as information that reduced reliance on the accounts. Ease ratings being unrelated to accounts would contradict the passage, which says ratings rose with accounts in both groups, and would not distinguish anchoring from reduced reliance. Reports of paying less attention to the accounts would support the alternative that participants relied less on them, not the critic. Anchoring pulls estimates toward a common value and would produce less spread among participants, not more.',
        skill: '6B research design: anchoring',
      },
    ],
  },

  // ────────────────────────────────────────────────────────────────────────
  // 2. SOCIOLOGY — demographics, the demographic transition, epidemiological measures
  // ────────────────────────────────────────────────────────────────────────
  {
    id: 'fl2-ps-a-02',
    section: 'psych-soc',
    discipline: 'sociology',
    title: 'Age Structure and the Demographic Transition',
    passageText:
      'Demographers describe a population with a small set of rates. The crude birth rate and crude death rate count births and deaths per 1,000 people per year, and their difference is the rate of natural increase. The total fertility rate is the number of children a woman would bear over her lifetime at current age-specific birth rates; a value of about 2.1 replaces each generation in populations with low child mortality. Net migration, the balance of immigrants over emigrants, is also expressed per 1,000 people. Because a population’s size changes only through births, deaths, and migration, the sum of natural increase and net migration gives total growth.\n\nThe demographic transition model describes how these rates change as societies industrialize. In the first stage, birth and death rates are both high and population grows slowly. In the second, sanitation, nutrition, and vaccination lower the death rate while the birth rate remains high, and population grows rapidly. In the third, the birth rate falls as more children survive, education expands, and contraception becomes available. In the fourth stage, both rates are low and growth is slow; some populations enter a fifth stage in which deaths exceed births. An epidemiological transition accompanies these changes: the leading causes of death shift from infectious diseases, which kill mainly the young, to chronic and degenerative diseases, which kill mainly the old.\n\nA population’s age structure lags behind its rates. Fertility that falls to replacement does not halt growth immediately, because the large cohorts born during earlier high-fertility years continue to enter their childbearing years; this delayed effect is called population momentum. Conversely, a population whose fertility has been low for decades acquires a large share of older adults. The dependency ratio, the number of people under 15 or over 64 for every 100 people of working age, summarizes the burden on those who produce most of a society’s goods and services, though it treats a young dependent and an old dependent as equivalent even though their needs differ.\n\nEpidemiologists add measures of disease to this picture. Incidence is the number of new cases arising in a population during a period, and prevalence is the number of existing cases at a point in time. For a disease whose rates are stable, prevalence is approximately the incidence multiplied by the average duration of the disease, so prevalence can change even when incidence does not. Table 1 gives current indicators for three countries.',
    figure:
      '**Table 1. Demographic indicators for three countries (most recent year)**\n\n| Indicator | Country P | Country Q | Country R |\n|---|---|---|---|\n| Crude birth rate (per 1,000) | 38 | 20 | 9 |\n| Crude death rate (per 1,000) | 12 | 6 | 11 |\n| Total fertility rate | 5.2 | 2.3 | 1.4 |\n| Net migration (per 1,000) | −2 | +1 | +3 |\n| Population under 15 (%) | 43 | 30 | 13 |\n| Population 65 and over (%) | 3 | 6 | 24 |\n| Life expectancy at birth (years) | 58 | 72 | 83 |',
    questions: [
      {
        question: 'Using Table 1, the annual growth rate of Country P’s population, including migration, is closest to:',
        options: ['0.24%', '1.2%', '2.4%', '2.6%'],
        correctAnswer: 2,
        explanation:
          'Natural increase is the birth rate minus the death rate, 38 − 12 = 26 per 1,000. Adding net migration of −2 per 1,000 gives total growth of 24 per 1,000 per year, which is 2.4%. The 2.6% value omits the emigration. The 1.2% value uses only the death rate as if it were natural increase, and 0.24% misplaces the decimal when converting per 1,000 to a percentage.',
        skill: '9B demographic rates calculation',
      },
      {
        question: 'Which conclusion about Country R is best supported by Table 1?',
        options: [
          'Its population is shrinking because deaths outnumber births.',
          'Its population is growing only because immigration exceeds its natural decrease.',
          'Its population is stable because low fertility is offset by long life expectancy.',
          'Its population is growing because its older residents have a low death rate.',
        ],
        correctAnswer: 1,
        explanation:
          'Country R’s natural increase is 9 − 11 = −2 per 1,000, a natural decrease, but net migration of +3 per 1,000 more than offsets it, so the population grows by about 1 per 1,000 per year entirely because of immigration. Deaths do outnumber births, yet the population is not shrinking once migration is counted. It is not stable, and long life expectancy does not offset low fertility in the growth arithmetic; only migration does. With 24% of the population aged 65 and over, the crude death rate is relatively high, not low, and it is not the source of growth.',
        skill: '9B population growth components',
      },
      {
        question: 'Country Q’s fertility is near replacement level, yet its crude birth rate is more than twice Country R’s. Which feature of Country Q best explains this difference?',
        options: [
          'Its net migration brings in families with many young children.',
          'Its lower death rate allows more newborns to survive and be counted.',
          'Its contraceptive use is lower than that of Country R.',
          'Its large young cohorts are now entering their childbearing years.',
        ],
        correctAnswer: 3,
        explanation:
          'With 30% of its population under 15 and only 6% over 64, Country Q has an age structure concentrated in and just below the reproductive ages, so even near-replacement fertility per woman yields many births per 1,000 people; this is population momentum. Net migration of +1 per 1,000 is far too small to double a crude birth rate. The death rate affects how many people die, not how many are born, and births are counted regardless of later survival. Lower contraceptive use would raise the total fertility rate, but Country Q’s fertility rate is near replacement, so the difference lies in age structure rather than in births per woman.',
        skill: '9B population momentum and age structure',
      },
      {
        question: 'Country R introduces a treatment that lengthens survival for people with heart failure without changing the number of new cases each year. Over the following decade, the prevalence of heart failure in Country R would be expected to:',
        options: [
          'increase, because cases persist longer while new cases continue to accrue.',
          'decrease, because the treatment reduces the severity of existing cases.',
          'remain constant, because prevalence depends only on incidence.',
          'increase, because the treatment raises the incidence of heart failure.',
        ],
        correctAnswer: 0,
        explanation:
          'Prevalence is approximately incidence multiplied by average duration. Lengthening survival lengthens the duration of the disease while incidence is unchanged, so more people are living with heart failure at any moment and prevalence rises. Reduced severity does not remove a person from the count of existing cases. Prevalence depends on duration as well as incidence, so it does not stay constant. Incidence is stated to be unchanged, so the rise cannot be attributed to more new cases.',
        skill: '9B incidence and prevalence',
      },
    ],
  },

  // ────────────────────────────────────────────────────────────────────────
  // 3. BIOLOGICAL BASIS — mesolimbic dopamine, prediction error, tolerance, withdrawal
  // ────────────────────────────────────────────────────────────────────────
  {
    id: 'fl2-ps-a-03',
    section: 'psych-soc',
    discipline: 'biological-basis-of-behavior',
    title: 'Cue-Evoked Dopamine During Cocaine Self-Administration',
    passageText:
      'Drugs of abuse act on different molecular targets, but nearly all of them increase signaling in the mesolimbic dopamine pathway, in which neurons of the ventral tegmental area (VTA) of the midbrain send axons to the nucleus accumbens. Natural rewards such as food and sex also increase dopamine release in the accumbens. Cocaine acts at the axon terminals of these neurons: it binds the dopamine transporter, the membrane protein that clears released dopamine from the synapse, and so prolongs the action of dopamine on postsynaptic receptors.\n\nRecordings from dopamine neurons suggest that their activity does not simply track pleasure. An unexpected reward produces a burst of firing, but when a reliable cue precedes the reward, the burst gradually shifts to the cue, and the reward itself comes to evoke less. On this reward-prediction-error account, dopamine release reflects the difference between the reward an animal receives and the reward it expected at that moment. The account suggests one way in which places, objects, and companions associated with drug use could acquire motivational power of their own.\n\nRepeated drug use also produces lasting adaptations. Tolerance is a reduced response to the same dose, so that more drug is needed to produce the original effect. When use stops, withdrawal symptoms appear; for many drugs these are roughly opposite to the drug’s acute effects.\n\nTo examine these processes in one experiment, researchers implanted intravenous catheters and carbon-fiber recording electrodes in the nucleus accumbens of 24 rats. The electrodes measured dopamine concentration several times per second, and each value was expressed as a percentage of that rat’s pre-session baseline. Twelve rats could press a lever for a cocaine infusion during daily 6-hour sessions; each press produced a 5-second tone and light, followed by the infusion. The other twelve rats were yoked controls. Each was paired with one cocaine rat and, every time its partner pressed, received the identical tone and light followed by an infusion of saline; the lever in a yoked rat’s chamber had no programmed consequence. Peak dopamine after the cue and after the infusion was recorded on days 1, 4, 7, 10, and 13 (Figure 1). Over the same period, the number of infusions that cocaine rats earned per session rose from about 20 to about 40.\n\nAfter day 13, all rats remained in their home cages without access to cocaine. On the third day of abstinence, microdialysis samples showed that resting extracellular dopamine in the accumbens of the former cocaine rats was about 70% of the level in yoked rats. The former cocaine rats also drank much less of a sweetened solution than they had before training, when both groups had strongly preferred it to water; the yoked rats’ preference was unchanged.',
    chart: {
      title: 'Figure 1. Peak nucleus accumbens dopamine after the tone-light cue and after the infusion, by test day',
      kind: 'line',
      xLabel: 'Test day',
      yLabel: 'Peak dopamine',
      yUnit: '% of baseline',
      xValues: [1, 4, 7, 10, 13],
      yValues: [310, 260, 225, 200, 185],
      seriesLabel: 'Cocaine rats: after infusion',
      comparisonSeries: [
        { label: 'Cocaine rats: after cue', yValues: [105, 150, 190, 215, 230] },
        { label: 'Yoked rats: after cue', yValues: [104, 102, 105, 103, 104] },
      ],
    },
    questions: [
      {
        question: 'Which statement is supported by the data in Figure 1?',
        options: [
          'Infusion-evoked dopamine in cocaine rats fell, while cue-evoked dopamine in yoked rats rose.',
          'By day 13, the cue evoked a larger dopamine response than the infusion did in cocaine rats.',
          'Cue-evoked and infusion-evoked dopamine in cocaine rats declined together across test days.',
          'By day 13, infusion-evoked dopamine in cocaine rats had returned to its baseline level.',
        ],
        correctAnswer: 1,
        explanation:
          'On day 13 the cue-evoked peak in cocaine rats (about 230% of baseline) exceeds the infusion-evoked peak (about 185%); the two curves cross between days 7 and 10. The yoked rats’ cue response stays flat near 100–105%, so it did not rise. In cocaine rats the cue response rose while the infusion response fell, so they did not decline together. An infusion peak of about 185% is well above the 100% baseline, so the infusion response had not returned to baseline.',
        skill: '6A data interpretation: dopamine signaling',
      },
      {
        question: 'Suppose that on day 14 a cocaine rat presses the lever and receives the usual tone and light, but saline is infused instead of cocaine. According to the reward-prediction-error account, accumbens dopamine at the time the infusion would ordinarily take effect should:',
        options: [
          'rise to about the level that the cocaine infusion evoked on day 1.',
          'rise to about the level that the cue evoked on day 13.',
          'stay at baseline, because no drug reaches the synapse.',
          'dip below baseline, because the expected reward fails to arrive.',
        ],
        correctAnswer: 3,
        explanation:
          'If dopamine reflects received reward minus expected reward, then a cue that predicts cocaine followed by no cocaine yields a negative difference, which should appear as a transient decrease below baseline. A rise to the day-1 infusion level would require an unexpected, pharmacologically active reward, and saline is neither. The cue response already occurred at the cue; the account predicts no second peak of that size when the predicted reward is omitted. Staying at baseline is what the account predicts when an outcome exactly matches expectation, not when an expected reward is withheld.',
        skill: '6A reward prediction error',
      },
      {
        question: 'The observations made during abstinence most directly support which explanation for why drug seeking can persist even after tolerance has developed?',
        options: [
          'Each dose of cocaine becomes more rewarding than the last, which strengthens the habit.',
          'Rats that took cocaine found sweet solutions less rewarding even before their first dose.',
          'Taking the drug again would relieve an aversive state produced by adaptation to repeated use.',
          'Cocaine remaining in the brain continues to block dopamine reuptake during abstinence.',
        ],
        correctAnswer: 2,
        explanation:
          'During abstinence, resting accumbens dopamine fell below that of yoked rats and preference for a natural reward dropped, a withdrawal state opposite to cocaine’s acute effect; renewed drug use would relieve that state, so drug seeking can be maintained by escape from withdrawal even when each dose produces less effect. Increasingly rewarding doses are contradicted by the declining infusion-evoked dopamine in Figure 1. Both groups strongly preferred the sweet solution before training, so the loss of preference was acquired. Continued reuptake blockade would raise extracellular dopamine, not lower it to 70% of the yoked level.',
        skill: '6A tolerance and withdrawal',
      },
      {
        question: 'The yoked group is most useful for establishing that:',
        options: [
          'cocaine raises dopamine more when it is self-administered than when it is delivered passively.',
          'the growth of the cue-evoked response depended on the cue having been paired with cocaine.',
          'pressing a lever, even without any infusion, is sufficient to release dopamine in the accumbens.',
          'the tone and light were aversive to rats that received only saline after each presentation.',
        ],
        correctAnswer: 1,
        explanation:
          'Yoked rats received the same cues at the same times as their partners, differing only in that saline rather than cocaine followed each cue; because their cue response stayed flat while the cocaine rats’ grew, the growth can be attributed to pairing with cocaine rather than to repeated cue exposure or handling. No yoked rat received cocaine, so the design cannot compare self-administered with passive cocaine. Yoked rats’ levers had no consequence and dopamine was recorded only after cues and infusions, so the design provides no evidence that lever pressing alone releases dopamine. A near-baseline cue response is not evidence that the cue was aversive, and no aversion measure was taken.',
        skill: '6A research design: yoked controls',
      },
    ],
  },

  // ────────────────────────────────────────────────────────────────────────
  // 4. SOCIAL PSYCHOLOGY — bystander effect, group polarization, groupthink
  // ────────────────────────────────────────────────────────────────────────
  {
    id: 'fl2-ps-a-04',
    section: 'psych-soc',
    discipline: 'social-psychology',
    title: 'Responsibility and Deliberation in Small Groups',
    passageText:
      'Social psychologists have long documented that the presence of other people changes what individuals do. In emergencies, a person is less likely to help when other potential helpers are present than when alone, a pattern known as the bystander effect. Two processes have been proposed to explain it. In one, the obligation to act is spread across everyone present, so that each individual feels only a fraction of it. In the other, bystanders look to one another to decide whether an ambiguous event is an emergency; when no one else appears alarmed, each concludes that nothing is wrong. Group interaction can also change attitudes. When like-minded people deliberate, the positions they endorse afterward are often more extreme than the average of their initial views, in whatever direction the group already leaned.\n\nIn Study 1, 240 undergraduates took part in what they believed was a study of remote teamwork. Each participant sat alone in a room and joined an audio-only call. Depending on condition, the call included the participant, one speaker who would later fall ill, and zero, two, or five other members; all voices except the participant’s were prerecorded. Once the team task began, the software gave the floor to one speaker at a time and muted everyone else, so participants could not hear how other members reacted to anything that happened. Midway through the task, the speaker holding the floor began to speak haltingly, said that he felt dizzy and that his chest hurt, and then fell silent. Participants could leave the room to alert an experimenter down the hall. In half of the sessions, the experimenter had introduced the participant, by name and before the whole group, as the session’s safety contact, responsible for reporting any problem; in the other sessions, no one was given this role. Participants were randomly assigned to one of the six conditions (40 per condition). Table 1 shows the percentage of participants who left the room within 4 minutes of the collapse and, among those who left, the median time before leaving.\n\nIn Study 2, 160 different participants were formed into 40 four-person groups. Each member first privately rated, on a scale from 1 (definitely should not) to 10 (definitely should), whether a medical resident should report a senior physician’s repeated minor safety lapses to hospital administrators. The group then discussed the case for 15 minutes and agreed on a consensus rating, after which each member again rated the case privately. Groups were classified according to the mean of their members’ initial ratings (Table 2).\n\nThe researchers acknowledged that the two studies measured very different outcomes. They argued, however, that in both cases what an individual did depended less on fixed personal dispositions than on how that individual understood his or her own position within the group.',
    figure:
      '**Table 1. Study 1: Responses to the collapse, by number of other members and safety-contact designation**\n\n| Other members on call | Designated safety contact | Left within 4 min (%) | Median time to leave (s) |\n|---|---|---|---|\n| 0 | No | 85 | 45 |\n| 2 | No | 60 | 90 |\n| 5 | No | 30 | 150 |\n| 0 | Yes | 90 | 42 |\n| 2 | Yes | 88 | 46 |\n| 5 | Yes | 85 | 50 |\n\n**Table 2. Study 2: Mean ratings (1–10) before and after discussion, by initial leaning of the group**\n\n| Group type | Groups | Initial private mean | Consensus rating | Private mean after discussion |\n|---|---|---|---|---|\n| Leaning toward reporting (initial mean above 5.5) | 24 | 7.0 | 8.3 | 8.0 |\n| Leaning against reporting (initial mean below 5.5) | 16 | 3.8 | 2.7 | 3.0 |',
    questions: [
      {
        question: 'Considering both the design of Study 1 and the results for designated participants, the lower rate of helping among non-designated participants in larger groups is best attributed to which factor?',
        options: [
          'They took the silence of other members as a sign that no emergency was occurring.',
          'The ill speaker’s voice was harder to make out on calls that included more members.',
          'Students who agree to take part in group studies are less inclined than others to help.',
          'Each of them assumed that someone else on the call would take charge of the situation.',
        ],
        correctAnswer: 3,
        explanation:
          'Designating a participant as safety contact nearly abolished the effect of group size (90%, 88%, 85%), so the drop among non-designated participants reflects a belief that someone else would handle the problem, the diffusion-of-responsibility process. Because all other members were muted, participants could not hear how others reacted, and designated participants heard the same silence yet helped at high rates, so inference from others’ apparent calm does not explain the drop. Designated participants on five-member calls heard the same audio and helped at high rates, which rules out audibility. Random assignment spread any volunteer trait across all six conditions, so it cannot explain a difference between them.',
        skill: '7C bystander effect: diffusion of responsibility',
      },
      {
        question: 'Which modification of Study 1 would best test the second proposed explanation for the bystander effect?',
        options: [
          'Adding five more recorded members, so that group size ranges from zero to ten other members',
          'Designating one of the recorded members, rather than the participant, as the safety contact',
          'Showing video of other members who remain visibly calm, versus no video, at a fixed group size',
          'Recording participants’ heart rates while they listen to the speaker’s collapse and silence',
        ],
        correctAnswer: 2,
        explanation:
          'The second explanation holds that bystanders interpret an ambiguous event by watching others’ reactions; manipulating whether participants can see calm reactions while holding group size constant isolates that process, which Study 1 deliberately removed by muting. Adding more members extends the group-size manipulation but does not separate the two explanations. Designating another member manipulates responsibility, which bears on the first explanation. Heart rate measures arousal but does not manipulate or measure access to others’ reactions.',
        skill: '7C research design: bystander effect',
      },
      {
        question: 'Which conclusion about Study 2 is best supported by Table 2?',
        options: [
          'Members privately came to hold more extreme versions of the positions their groups began with.',
          'Consensus ratings were more extreme than private ratings, so members complied only in public.',
          'Discussion pulled members of both kinds of groups back toward the midpoint of the scale.',
          'Groups leaning against reporting shifted farther from their starting point than the other groups.',
        ],
        correctAnswer: 0,
        explanation:
          'Private means moved from 7.0 to 8.0 in groups leaning toward reporting and from 3.8 to 3.0 in groups leaning against it, so members’ own views became more extreme in their group’s initial direction, which is group polarization. The consensus ratings were somewhat more extreme than the later private ratings, but private ratings also shifted away from their starting values, so the change was not public compliance alone. Both kinds of groups moved away from, not toward, the midpoint. The groups leaning against reporting shifted by 0.8 point privately and 1.1 points in consensus, less than the 1.0 and 1.3 points of the other groups.',
        skill: '7C group polarization',
      },
      {
        question: 'A hospital’s long-standing leadership team approves a new staffing plan after a single meeting in which the chief officer states her preference first, two members privately doubt the plan but say nothing, and no alternative plan is examined. This decision process best exemplifies:',
        options: ['group polarization', 'groupthink', 'social loafing', 'deindividuation'],
        correctAnswer: 1,
        explanation:
          'A cohesive group with a directive leader, self-censorship of doubts, an illusion of unanimity, and failure to consider alternatives are hallmarks of groupthink. Group polarization describes a shift of members’ views toward an extreme after discussion, not suppression of dissent in favor of a leader’s preference. Social loafing is reduced individual effort when contributions are pooled. Deindividuation is a loss of self-awareness and restraint in anonymous crowds, which does not describe a small, named committee.',
        skill: '7C groupthink',
      },
      {
        question: 'For non-designated participants in Study 1, Table 1 indicates that increasing the number of other members was associated with:',
        options: [
          'fewer participants leaving, but no change in how quickly those who left did so.',
          'slower leaving among those who left, but no change in how many left.',
          'both fewer participants leaving and slower leaving among those who left.',
          'neither measure changing once designated participants are set aside.',
        ],
        correctAnswer: 2,
        explanation:
          'Among non-designated participants, the percentage who left fell from 85% to 60% to 30%, and the median time before leaving rose from 45 to 90 to 150 seconds as other members increased from zero to two to five, so both measures changed. The statement that only the number of helpers changed ignores the tripling of median time. The statement that only speed changed ignores the drop from 85% to 30%. The claim that neither changed reverses the pattern, which is present precisely in the non-designated rows.',
        skill: '7C data interpretation: bystander effect',
      },
    ],
  },

  // ────────────────────────────────────────────────────────────────────────
  // 5. LANGUAGE — acquisition theories, sensitive periods, aphasia, bilingualism
  // ────────────────────────────────────────────────────────────────────────
  {
    id: 'fl2-ps-a-05',
    section: 'psych-soc',
    discipline: 'learning-and-memory',
    title: 'Acquiring Language and Locating It in the Brain',
    passageText:
      'Nearly every typically developing child masters the sound system, vocabulary, and grammar of the surrounding language within a few years and without formal instruction. Accounts of how this happens fall into three broad families. Learning theorists, following B. F. Skinner, held that language is acquired like other behavior: caregivers respond selectively to sounds and utterances that resemble adult speech, and those utterances become more frequent. Nativists, following Noam Chomsky, argued that the speech children hear is too fragmentary and error-filled to account for the grammar they come to produce, and proposed an innate capacity, sometimes called a language acquisition device, specialized for extracting grammatical rules. Interactionists accept that children are biologically prepared for language but hold that this preparation is realized only through social exchange: caregivers simplify their speech for the child, take turns with the child, and attend jointly with the child to the objects being named.\n\nMuch evidence bears on the idea of a sensitive period, a window early in life during which language is acquired most readily. Deaf children of hearing parents who first encounter a sign language in adolescence usually become fluent communicators, yet they seldom master its grammatical inflections as fully as those exposed from infancy. Children who have been severely deprived of language throughout childhood may later accumulate a sizable vocabulary while continuing to struggle to combine words into grammatical sentences.\n\nIn most right-handed adults, and in a majority of left-handed ones, language depends primarily on the left cerebral hemisphere. Two regions have been studied since the nineteenth century. Broca’s area, in the inferior frontal lobe next to the motor cortex that controls the face and mouth, supports the planning of speech and the assembly of grammatical sentences. Wernicke’s area, in the posterior superior temporal lobe next to the auditory cortex, supports the mapping of speech sounds onto meaning. A bundle of axons, the arcuate fasciculus, carries information between the two regions. Damage to either region produces an aphasia, a disorder of language not attributable to paralysis or hearing loss. After damage to Broca’s area, speech is typically halting and stripped of small grammatical words; after damage to Wernicke’s area, speech typically remains fluent but conveys little meaning, and comprehension is poor.\n\nMore than half of the world’s people use more than one language. Simultaneous bilinguals acquire two languages from birth, whereas sequential bilinguals add a second language after the first is established. Young simultaneous bilinguals may know fewer words in each language than monolingual peers, although the total number of concepts they can name is typically comparable. Bilingual speakers often alternate between languages within a conversation or even a sentence, a practice called code-switching, which follows grammatical regularities rather than reflecting confusion. By contrast, claims that managing two languages strengthens general executive control have received inconsistent support in large studies.',
    questions: [
      {
        question: 'A stroke damages a patient’s arcuate fasciculus but spares both Broca’s area and Wernicke’s area. Which pattern of language function would the patient most likely show?',
        options: [
          'Fluent speech and good comprehension, but trouble repeating phrases that were just heard',
          'Halting speech lacking small grammatical words, with comprehension largely preserved',
          'Fluent speech that conveys little meaning, with comprehension markedly impaired',
          'Loss of both speech production and comprehension, with no fluent output',
        ],
        correctAnswer: 0,
        explanation:
          'With both regions intact, the patient can still understand speech and produce fluent speech, but repeating a heard phrase requires carrying information from the comprehension region to the production region, which is exactly the connection the arcuate fasciculus provides; this is conduction aphasia. Halting, telegraphic speech with preserved comprehension is the pattern of damage to Broca’s area, which is spared. Fluent but empty speech with poor comprehension is the pattern of damage to Wernicke’s area, also spared. Loss of both production and comprehension (global aphasia) would require damage to both regions.',
        skill: '6B language and the brain: aphasia',
      },
      {
        question: 'Nine-month-old infants heard a language not spoken at home for the same total time, either in live play sessions with a native speaker or from video recordings of that same speaker. Only the infants in live sessions later discriminated speech sounds unique to that language. This finding is most consistent with:',
        options: [
          'the nativist account, since the amount of speech input was equal in the two conditions.',
          'the learning account, since the recordings reinforced the infants’ own vocalizations.',
          'a sensitive-period account, since the infants were already too old to learn new sounds.',
          'the interactionist account, since learning depended on exchange with a present partner.',
        ],
        correctAnswer: 3,
        explanation:
          'Input was matched in amount and speaker, and only the condition that allowed turn-taking and shared attention produced learning, which fits the interactionist claim that biological readiness is realized through social exchange. A nativist device that extracts structure from input would predict learning in both conditions, since input was equal. A recording cannot respond to an infant, so it could not selectively reinforce the infants’ vocalizations. The live-session infants did learn the sounds, which shows that the infants were not too old to do so.',
        skill: '6B theories of language development',
      },
      {
        question: 'Speakers of a language that has separate basic words for light blue and dark blue distinguish those two shades faster than speakers of a language with a single word for blue, but the advantage disappears while they silently rehearse a string of digits. These results best support:',
        options: [
          'linguistic determinism, since speakers with one word for blue cannot perceive the difference.',
          'a weak form of linguistic relativity, since language modestly influences perceptual judgments.',
          'a nativist view, since color categories are innate and the same in every language.',
          'a learning view, since speakers were reinforced for naming the shades correctly in the task.',
        ],
        correctAnswer: 1,
        explanation:
          'The difference in speed, which vanishes when verbal resources are occupied, indicates that the availability of words shapes perceptual discrimination to a modest degree, the weak (relativity) version of the Whorfian hypothesis. Linguistic determinism would require that speakers without the words be unable to distinguish the shades, but they distinguished them, only more slowly. Innate, universal color categories would predict no difference between the language groups. No reinforcement for naming was given, and the task measured discrimination rather than a trained response.',
        skill: '6B language and thought: linguistic relativity',
      },
      {
        question: 'A man began learning English at age 25 and has used it daily at work for 20 years. Compared with native speakers of similar education, he is most likely to differ in:',
        options: [
          'the number of English words he knows.',
          'how quickly he learns new English words.',
          'his pronunciation of English speech sounds.',
          'his comprehension of everyday conversation.',
        ],
        correctAnswer: 2,
        explanation:
          'Phonology shows an especially strong sensitive-period effect: people who begin a second language after childhood rarely lose a detectable accent, even after decades of use. Vocabulary continues to grow throughout life and can reach native-like size with long use, consistent with the passage’s observation that vocabulary can be acquired late. The ability to learn new words remains intact in adulthood. Two decades of daily use typically produce full comprehension of everyday conversation.',
        skill: '6B sensitive period for language',
      },
    ],
  },
]

export const FL2_PSYCH_SOC_A_DISCRETES: MCATDiscreteQuestion[] = [
  {
    id: 'fl2-ps-a-d01',
    section: 'psych-soc',
    discipline: 'sensation-and-perception',
    question:
      'A row of evenly spaced dots is colored red, red, black, black, red, red, black, black, and viewers describe the row as a series of pairs. The perception of pairs is best explained by the Gestalt principle of:',
    options: ['proximity', 'closure', 'continuity', 'similarity'],
    correctAnswer: 3,
    explanation:
      'The dots are grouped because adjacent dots share a color, so elements that look alike are seen as belonging together, which is the principle of similarity. Proximity cannot explain the grouping, because the spacing is even. Closure is the tendency to complete incomplete figures, and no figure is incomplete. Continuity is the tendency to follow smooth lines or curves, which would group the whole row as a single line rather than into pairs.',
    skill: '6A Gestalt principles',
  },
  {
    id: 'fl2-ps-a-d02',
    section: 'psych-soc',
    discipline: 'learning-and-memory',
    question:
      'Children who already enjoyed drawing were promised and then given a certificate for drawing. Two weeks later, when no rewards were offered, these children spent less free time drawing than similar children who had never been rewarded. This result is best explained by:',
    options: [
      'extinction, because drawing was no longer followed by the reward that had maintained it.',
      'the overjustification effect, because an expected reward reduced intrinsic interest.',
      'the Yerkes–Dodson law, because the reward raised arousal above its optimal level.',
      'drive reduction, because the reward satisfied the need that drawing had served.',
    ],
    correctAnswer: 1,
    explanation:
      'An expected external reward for an already enjoyable activity can shift the perceived reason for doing it from interest to reward, so interest falls once the reward is withdrawn; this is the overjustification effect. Extinction would return drawing toward its pre-reward level, but the rewarded children fell below children who were never rewarded, and drawing was originally maintained by interest, not by the certificate. The Yerkes–Dodson law concerns arousal and performance during a task, not later free-time choices. A certificate does not satisfy a biological need, so drive reduction does not apply.',
    skill: '7A intrinsic and extrinsic motivation',
  },
  {
    id: 'fl2-ps-a-d03',
    section: 'psych-soc',
    discipline: 'cognition-and-perception',
    question:
      'A hiker who suddenly comes upon a snake on the trail feels intense fear. Which set of physiological changes most likely accompanies this emotion?',
    options: [
      'dilated pupils, increased heart rate, and decreased digestive activity',
      'constricted pupils, increased heart rate, and increased digestive activity',
      'dilated pupils, decreased heart rate, and increased salivation',
      'constricted pupils, decreased heart rate, and decreased sweating',
    ],
    correctAnswer: 0,
    explanation:
      'Fear activates the sympathetic division of the autonomic nervous system, which dilates the pupils, raises heart rate, and suppresses digestion. Constricted pupils and increased digestive activity are parasympathetic effects and would not accompany a sympathetic surge. Decreased heart rate and increased salivation are likewise parasympathetic. Constricted pupils, a slower heart, and reduced sweating are the reverse of a fight-or-flight response, in which sweating increases.',
    skill: '6C emotion and the autonomic nervous system',
  },
  {
    id: 'fl2-ps-a-d04',
    section: 'psych-soc',
    discipline: 'personality-and-disorders',
    question:
      'A student’s confidence in mathematics leads her to enroll in an advanced course; the demanding course sharpens her skills and further raises her confidence, and her success prompts a teacher to recommend her for a competition. Which perspective on personality best describes this mutual influence among person, behavior, and environment?',
    options: [
      'the psychoanalytic perspective, which traces behavior to unconscious conflicts',
      'the trait perspective, which describes dispositions that are stable across situations',
      'the social-cognitive perspective, which posits reciprocal determinism',
      'the humanistic perspective, which emphasizes striving toward self-actualization',
    ],
    correctAnswer: 2,
    explanation:
      'Reciprocal determinism, central to the social-cognitive perspective, holds that personal factors, behavior, and environment continually influence one another, as her confidence, her enrollment, and the course and teacher do here. The psychoanalytic perspective explains behavior by unconscious drives and conflicts, none of which is described. The trait perspective describes stable dispositions but not a loop in which the environment reshapes the person. The humanistic perspective focuses on growth toward one’s potential, not on the two-way interplay of person and situation.',
    skill: '7A social-cognitive theory of personality',
  },
  {
    id: 'fl2-ps-a-d05',
    section: 'psych-soc',
    discipline: 'personality-and-disorders',
    question:
      'Since early adulthood, a man has turned down jobs that involve teamwork, has joined social events only when certain he would be liked, and described himself as socially inept, although he says he very much wishes he had close friends. Which diagnosis best fits this long-standing pattern?',
    options: [
      'schizoid personality disorder',
      'dependent personality disorder',
      'paranoid personality disorder',
      'avoidant personality disorder',
    ],
    correctAnswer: 3,
    explanation:
      'A pervasive pattern beginning by early adulthood of social inhibition, feelings of inadequacy, and hypersensitivity to rejection, in a person who wants relationships, defines avoidant personality disorder. Schizoid personality disorder also involves social withdrawal, but the person is indifferent to relationships rather than longing for them. Dependent personality disorder centers on an excessive need to be cared for and difficulty making decisions without others. Paranoid personality disorder centers on pervasive distrust and suspicion of others’ motives, which is not described.',
    skill: '7A personality disorders: DSM classification',
  },
  {
    id: 'fl2-ps-a-d06',
    section: 'psych-soc',
    discipline: 'sociology',
    question:
      'A sociologist argues that emergency-department triage rules help society allocate scarce medical care efficiently, and that long waits for minor complaints discourage overuse and so keep the system stable. This analysis most clearly reflects which theoretical approach?',
    options: ['conflict theory', 'functionalism', 'symbolic interactionism', 'social constructionism'],
    correctAnswer: 1,
    explanation:
      'Explaining a social arrangement by the contribution it makes to the stability and smooth operation of the larger system is the hallmark of functionalism. Conflict theory would ask which groups gain or lose from triage rules and how the rules reflect unequal power. Symbolic interactionism would examine how patients and staff interpret one another in face-to-face encounters. Social constructionism would ask how categories such as an “emergency” come to be defined through shared social agreement.',
    skill: '9A theoretical approaches in sociology',
  },
  {
    id: 'fl2-ps-a-d07',
    section: 'psych-soc',
    discipline: 'sociology',
    question:
      'In a wealthy country, a family earns well above what it needs for food, shelter, and clothing but less than half of the national median income, so its children cannot join activities most classmates regard as ordinary. The family’s situation is best described as:',
    options: ['absolute poverty', 'social reproduction', 'relative poverty', 'downward mobility'],
    correctAnswer: 2,
    explanation:
      'Relative poverty is defined by comparison with the typical living standard of a society, and income below half the median that excludes a family from ordinary activities fits that definition. Absolute poverty means lacking the resources for basic physical needs, which this family can meet. Social reproduction refers to the transmission of class position across generations, which the stem does not describe. Downward mobility requires a fall from a previous position, and no change in the family’s position is mentioned.',
    skill: '10A poverty: absolute versus relative',
  },
  {
    id: 'fl2-ps-a-d08',
    section: 'psych-soc',
    discipline: 'biological-basis-of-behavior',
    question:
      'A woman reports several months of nervousness, irritability, difficulty sleeping, and weight loss despite an increased appetite, and she feels too warm in rooms where others are comfortable. Oversecretion of which hormone best accounts for these symptoms?',
    options: [
      'thyroxine from the thyroid gland',
      'cortisol from the adrenal cortex',
      'melatonin from the pineal gland',
      'insulin from the pancreas',
    ],
    correctAnswer: 0,
    explanation:
      'Thyroxine raises the basal metabolic rate, so an excess produces heat intolerance, weight loss despite eating more, and anxious, irritable, restless behavior, the picture of hyperthyroidism. Excess cortisol typically causes weight gain and fat redistribution rather than weight loss with heat intolerance. Excess melatonin promotes sleepiness rather than insomnia and agitation. Excess insulin lowers blood glucose and promotes fat storage, which would not produce weight loss with a raised metabolic rate.',
    skill: '6C endocrine system and behavior',
  },
]
