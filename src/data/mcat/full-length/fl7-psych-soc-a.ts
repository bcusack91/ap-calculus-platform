/**
 * MCAT Full-Length Form 7 — Psychological, Social & Biological Foundations,
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

export const FL7_PSYCH_SOC_A_PASSAGES: MCATPassage[] = [
  // ────────────────────────────────────────────────────────────────────────
  // 1. SENSATION — Weber's law for lifted weights, thresholds, adaptation
  // ────────────────────────────────────────────────────────────────────────
  {
    id: 'fl7-ps-a-01',
    section: 'psych-soc',
    discipline: 'sensation-and-perception',
    title: 'Lifted Weights and the Just-Noticeable Difference',
    passageText:
      'Psychophysics relates the physical magnitude of a stimulus to the sensation it produces. Two kinds of threshold are distinguished. An absolute threshold is the weakest stimulus that an observer can detect, conventionally the magnitude detected on half of the trials on which it is presented. A difference threshold, or just-noticeable difference (JND), is the smallest change in a stimulus that an observer can detect. In the 1830s Ernst Weber reported that the JND is not a fixed amount but grows with the magnitude of the stimulus being judged, called the standard, and he proposed that the ratio of the JND to the standard, now called the Weber fraction, is constant for a given kind of judgment. Gustav Fechner later built a scale of sensation on this proposal by assuming that every JND, whatever the standard, marks an equal step in the strength of the sensation.\n\nResearchers re-examined Weber’s proposal for judgments of heaviness. Twenty-four adults were tested with opaque canisters that were identical in size and surface and were loaded with different amounts of lead shot. On each trial a participant reached through a curtain that hid the canisters, was given a standard and a comparison one after the other in random order, and reported which was heavier. The comparison was always the heavier of the two, by an amount that varied from trial to trial. Guessing would yield 50% correct in this task, and the JND was defined as the added mass at which the comparison was chosen on 75% of trials. Each participant completed two conditions on separate days. In the lifting condition, the participant grasped each canister and raised it from the table by bending the elbow. In the resting condition, the participant’s forearm and hand lay supported on the table, palm up, and the experimenter set each canister on the palm for 2 seconds. Six standards were tested in each condition. Mean JNDs are shown in Figure 1.\n\nFor comparison, the same participants made two other kinds of judgment under the same 75% criterion. The Weber fraction was 0.08 for the brightness of a patch of light and 0.15 for the saltiness of a solution, and each fraction was approximately constant across the middle range of standards tested.\n\nIn a final session, the researchers measured the absolute threshold for pressure on the palm of the supported hand by lowering very light plastic discs onto the skin and asking participants whether they felt anything. A 500-g canister was then left resting on the same patch of skin for 3 minutes. Participants reported that the feeling of the canister faded within the first minute, although its mass had not changed. Immediately after the canister was removed, the absolute threshold at that patch was about three times its initial value; it returned to the initial value within 2 minutes. The threshold on the other palm, which had borne no canister, did not change at any point in the session.',
    chart: {
      title: 'Figure 1. Mean just-noticeable difference (JND) in mass as a function of the mass of the standard, by condition',
      kind: 'line',
      xLabel: 'Mass of the standard',
      xUnit: 'g',
      yLabel: 'Mean JND',
      yUnit: 'g',
      xValues: [100, 200, 300, 400, 500, 600],
      yValues: [4, 5, 7.5, 10, 12.5, 15],
      seriesLabel: 'Lifting condition',
      comparisonSeries: [{ label: 'Resting condition', yValues: [9, 14, 21, 28, 35, 42] }],
    },
    questions: [
      {
        question: 'Which statement about the lifting condition is supported by Figure 1?',
        options: [
          'The JND was the same number of grams at every one of the standards tested.',
          'The JND was the same fraction of the standard at every standard tested.',
          'The JND was a fixed fraction of the standard from 200 g up, and a larger one at 100 g.',
          'The JND was a fixed fraction of the standard from 200 g up, and a smaller one at 100 g.',
        ],
        correctAnswer: 2,
        explanation:
          'Dividing each JND by its standard gives 5/200 = 7.5/300 = 10/400 = 12.5/500 = 15/600 = 0.025, so the Weber fraction is constant from 200 g to 600 g, but at 100 g it is 4/100 = 0.04, which is larger. The JND in grams nearly quadruples across the standards, so it is not a constant amount. The fraction is not the same at every standard, because the lightest standard departs from the others. The departure at 100 g is upward, not downward: a constant fraction of 0.025 would have predicted a JND of 2.5 g there, and the measured value is higher.',
        optionExplanations: [
          'The JND in grams rose from 4 g at 100 g to 15 g at 600 g, nearly quadrupling. It was not a constant amount; it grew with the standard, as Weber proposed.',
          'The fraction is constant from 200 g to 600 g (0.025 throughout), but at 100 g it is 4/100 = 0.04. Because the lightest standard departs from the others, the fraction is not the same at every standard tested.',
          'Dividing each JND by its standard gives 5/200 = 7.5/300 = 10/400 = 12.5/500 = 15/600 = 0.025, a constant Weber fraction from 200 g up. At 100 g the fraction is 4/100 = 0.04, which is larger.',
          'The departure at 100 g is upward, not downward. A constant fraction of 0.025 would predict a JND of 2.5 g at 100 g, but the measured JND was 4 g, giving a larger fraction of 0.04.',
        ],
        skill: '6A data interpretation: constancy of the Weber fraction',
      },
      {
        question:
          'Suppose, as Fechner assumed, that each JND marks an equal step in sensation. Based on Figure 1, adding 50 g to a lifted 100-g canister, compared with adding 50 g to a lifted 500-g canister, should produce:',
        options: [
          'an equal increase in felt heaviness, because the added mass is the same.',
          'a greater increase in felt heaviness, because 50 g spans more JNDs.',
          'a smaller increase in felt heaviness, because the JND is smaller.',
          'no increase in felt heaviness, because 50 g falls below one JND.',
        ],
        correctAnswer: 1,
        explanation:
          'Near 100 g the JND is about 4 to 5 g, so 50 g covers roughly ten or more JNDs, whereas near 500 g the JND is about 12.5 g, so 50 g covers about four. If every JND is an equal step in sensation, the lighter canister gains more steps and should feel as though it has grown heavier by more. Equal added mass does not mean equal added sensation, which is the point of Weber’s finding. A smaller JND at 100 g means more steps per gram, not fewer. Fifty grams is far above one JND at either standard, so the change would be noticed in both cases.',
        optionExplanations: [
          'Equal added mass does not mean equal added sensation; that is the point of Weber’s finding. Because the JND is smaller at 100 g, 50 g spans more JNDs there than at 500 g, and under Fechner’s assumption more JNDs means a larger increase in sensation.',
          'Near 100 g the JND is about 4–5 g, so 50 g spans roughly ten or more JNDs; near 500 g the JND is 12.5 g, so 50 g spans about four. If each JND is an equal step in sensation, the lighter canister gains more steps and feels heavier by more.',
          'A smaller JND at 100 g means more steps per gram, not fewer. The reasoning here reverses the relationship: a smaller JND makes 50 g span more JNDs, producing a greater increase in felt heaviness, not a smaller one.',
          'Fifty grams is far above one JND at either standard (about 4–5 g at 100 g and 12.5 g at 500 g). The change would be noticed in both cases, so the question is how much heavier each feels, not whether a change is detected.',
        ],
        skill: '6A Fechner’s scaling of sensation (reasoning from data)',
      },
      {
        question: 'Including the resting condition alongside the lifting condition allowed the researchers to assess whether:',
        options: [
          'actively lifting a weight sharpens judgments beyond what pressure on the skin alone allows.',
          'the Weber fraction for heaviness differs between the dominant hand and the nondominant hand.',
          'the visible size of a canister biases judgments of how heavy the canister feels when held.',
          'the absolute threshold for pressure on the palm rises with the mass of the standard used.',
        ],
        correctAnswer: 0,
        explanation:
          'With the hand supported and motionless, weight is signaled only by pressure on the skin; lifting adds signals from receptors in muscles and tendons that register the effort of raising the load. Comparing JNDs in the two conditions therefore shows what those receptors contribute, and the smaller JNDs for lifting indicate that they improve discrimination. Handedness was not varied between conditions. The canisters were hidden and identical in size in both conditions, so visual size cues were excluded rather than studied. The absolute threshold was measured in a separate session with discs and involved no standard.',
        optionExplanations: [
          'With the hand supported and motionless, weight is signaled only by skin pressure; lifting adds signals from receptors in muscles and tendons that register effort. Comparing the two conditions isolates what those receptors contribute, and the smaller lifting JNDs show they sharpen discrimination.',
          'Handedness was not varied between conditions. Both conditions used the same approach to the hand, and nothing in the design compares dominant with nondominant hands.',
          'The canisters were hidden behind a curtain and identical in size in both conditions, so visual size cues were excluded from the study altogether rather than being the variable examined.',
          'The absolute threshold for pressure was measured in a separate final session using light plastic discs, with no standard involved. The resting condition in the main experiment measured difference thresholds, not absolute ones.',
        ],
        skill: '6A research design: isolating a sensory contribution',
      },
      {
        question:
          'Based on Figure 1 and the Weber fractions reported in the passage, which change would participants be LEAST likely to detect?',
        options: [
          'A lifted canister is increased in mass from 400 g to 416 g.',
          'A patch of light is increased in intensity by 12 percent.',
          'A salt solution is increased in concentration by 10 percent.',
          'A lifted canister is increased in mass from 200 g to 208 g.',
        ],
        correctAnswer: 2,
        explanation:
          'A change is detected reliably only if it exceeds the JND, which is the Weber fraction times the standard. For saltiness the fraction is 0.15, so a 10 percent increase falls short of the 15 percent needed. For brightness the fraction is 0.08, so a 12 percent increase exceeds it. For lifted canisters Figure 1 gives a JND of 10 g at 400 g and 5 g at 200 g, so increases of 16 g and 8 g both exceed the JND.',
        optionExplanations: [
          'At 400 g the lifting JND from Figure 1 is 10 g, so an increase of 16 g exceeds the JND and would be detected reliably. This is not the least detectable change.',
          'The Weber fraction for brightness is 0.08, so a 12 percent increase exceeds the 8 percent needed and would be detected. This change is well above threshold.',
          'The Weber fraction for saltiness is 0.15, so a change must be at least 15 percent to reach the JND. A 10 percent increase falls short of that and would be the hardest of the four changes to detect.',
          'At 200 g the lifting JND from Figure 1 is 5 g, so an increase of 8 g exceeds the JND and would be detected. The salt change is the only one that falls below its JND.',
        ],
        skill: '6A Weber fractions across senses (application)',
      },
      {
        question: 'The temporary rise in the absolute threshold after the 3-minute period is best explained by:',
        options: [
          'Weber’s law, since a threshold grows in proportion to the standard that preceded it.',
          'lapses of attention, since participants had by then been tested for a long time.',
          'a difference threshold, since each disc was compared with the remembered canister.',
          'sensory adaptation, since receptors under steady stimulation respond less.',
        ],
        correctAnswer: 3,
        explanation:
          'Constant pressure on one patch of skin reduces the response of the receptors there, which is why the feeling of the canister faded and why the same patch was briefly less sensitive to faint discs; the effect was confined to the stimulated palm and recovered within minutes, as sensory adaptation does. Weber’s law describes the difference threshold relative to a standard that is being judged, and no standard was present when the discs were applied. Lapses of attention would have raised the threshold on both palms, yet the other palm was unchanged. Participants reported only whether they felt a disc, so no comparison with the canister was being made.',
        optionExplanations: [
          'Weber’s law describes the difference threshold relative to a standard being judged, and no standard was present when the discs were applied. The absolute threshold does not grow in proportion to a previous stimulus by Weber’s law.',
          'Lapses of attention would have raised the threshold on both palms equally, yet the other palm, which bore no canister, showed no change at any point. The effect was confined to the stimulated skin.',
          'Participants reported only whether they felt a disc, not whether it differed from the canister, so no comparison with a remembered standard was being made. This was an absolute-threshold measurement.',
          'Constant pressure on one patch of skin reduces the response of the receptors there, which is why the canister’s feeling faded and the same patch was briefly less sensitive to faint discs. The effect was local and recovered within minutes, as sensory adaptation does.',
        ],
        skill: '6A sensory adaptation',
      },
    ],
  },

  // ────────────────────────────────────────────────────────────────────────
  // 2. SOCIOLOGY — gender as social structure: segregation, wage gap, second shift
  // ────────────────────────────────────────────────────────────────────────
  {
    id: 'fl7-ps-a-02',
    section: 'psych-soc',
    discipline: 'sociology',
    title: 'Gender in Paid and Unpaid Work',
    passageText:
      'Sociologists distinguish sex from gender. Sex refers to biological characteristics, such as chromosomes, gonads, and reproductive anatomy, by which people are classified as male, female, or intersex. Gender refers to the meanings, expectations, and positions that a society attaches to those classifications. Because gender is organized by society rather than fixed by biology, its content varies across cultures and historical periods. Many sociologists describe gender not merely as a trait of individuals but as a social structure: it shapes identities, it shapes what people expect of one another in everyday interaction, and it is built into institutions such as the family and the labor market.\n\nGender roles are the sets of behaviors that a society treats as appropriate for men or for women. They are learned through gender socialization, which begins in infancy. Parents describe and handle sons and daughters differently, peers reward conformity and ridicule departures from it, and schools and mass media supply further models. Long before they seek employment, many children have come to regard particular kinds of work as suited to one gender.\n\nIn the labor market, gender is visible in occupational segregation, the concentration of men and women in different kinds of work. Horizontal segregation refers to their distribution across different occupations at similar levels, as when most childcare workers are women and most electricians are men. Vertical segregation refers to their distribution across ranks within a field, with men overrepresented in senior positions. Segregation is linked to the gender wage gap. In one national labor force, women employed full time earned a median of 82 cents for every dollar earned by men employed full time. When the comparison was restricted to women and men in the same occupation, with the same education, years of experience, and weekly hours, women earned 95 cents for every dollar earned by men.\n\nTwo accounts have been offered for the lower pay of occupations in which women predominate. According to the human capital account, pay reflects the skills and experience that workers bring to a job, and women more often choose occupations that demand less continuous investment in training or that are easier to combine with family responsibilities. According to the devaluation account, work is paid less because women do it: employers and the wider culture assign lower worth to tasks associated with women, whatever skill those tasks demand.\n\nGender also organizes unpaid work. Arlie Hochschild used the term second shift for the housework and child care that employed women perform after their paid workday. Time-diary studies continue to find that, among couples in which both partners are employed full time, women spend more hours per week on such tasks than men do. Three explanations have been proposed. The time-availability explanation holds that the partner who spends fewer hours in paid work does more of the unpaid work. The relative-resources explanation holds that the partner who earns less has less bargaining power and therefore does more. The gender-display explanation holds that performing or avoiding housework is itself a way of enacting gender, so the division of housework need not follow hours or earnings.',
    questions: [
      {
        question: 'Which finding would most strongly support the devaluation account over the human capital account?',
        options: [
          'Women in female-dominated occupations average fewer years of experience than men in male-dominated ones.',
          'The median pay of an occupation fell as its share of women rose, though its required training was unchanged.',
          'Women more often than men say they chose an occupation because its hours could be fitted around child care.',
          'Occupations that require more years of schooling pay more, whether most of their workers are women or men.',
        ],
        correctAnswer: 1,
        explanation:
          'If pay declines when women enter an occupation while the skills and training it demands stay the same, the decline cannot be credited to lower human capital and instead tracks who is doing the work, which is what the devaluation account claims. Fewer years of experience among women in female-dominated fields is a difference in human capital and would support that account. Choosing an occupation for hours compatible with child care is the kind of choice the human capital account invokes. Higher pay for more schooling regardless of gender composition shows pay following skill, again the human capital pattern.',
        optionExplanations: [
          'Fewer years of experience among women in female-dominated fields is a difference in human capital. It would support the human capital account, since it ties lower pay to lower investment in skills and experience.',
          'If pay falls when women enter an occupation while its required training stays the same, the decline cannot be credited to lower human capital. It tracks who is doing the work, which is exactly what the devaluation account claims.',
          'Choosing an occupation for hours compatible with child care is the kind of choice the human capital account invokes to explain women’s concentration in lower-paid work. It supports that account rather than devaluation.',
          'Higher pay for more schooling regardless of gender composition shows pay following skill, which is the human capital pattern. It does not show that pay depends on who performs the work.',
        ],
        skill: '10A gender wage gap: devaluation vs human capital (evidence)',
      },
      {
        question:
          'The earnings figures in the passage most strongly suggest that a law guaranteeing equal pay to women and men who hold the same job with the same qualifications and hours would:',
        options: [
          'eliminate the overall wage gap, because the gap arises from unequal pay within jobs.',
          'widen the overall wage gap, because employers would move women into lower-paid jobs.',
          'leave the overall wage gap unchanged, because pay within jobs is already equal.',
          'narrow the overall wage gap only modestly, because most of it reflects different jobs and hours.',
        ],
        correctAnswer: 3,
        explanation:
          'The overall gap is 18 cents on the dollar, but only 5 cents remains when women and men in the same occupation with the same education, experience, and hours are compared; the larger part of the gap is therefore associated with women and men holding different jobs and working different hours, which an equal-pay rule for identical jobs does not touch. The gap cannot arise mainly within jobs when the within-job difference is the smaller part. Pay within jobs is not already equal, since a 5-cent difference remains. Nothing in the figures indicates how employers would reassign workers, so a widening gap has no support.',
        optionExplanations: [
          'The overall gap is 18 cents, but only 5 cents remains within the same job with the same qualifications and hours. The gap cannot arise mainly within jobs when the within-job portion is the smaller part.',
          'Nothing in the figures indicates how employers would reassign workers after such a law. A widening gap has no support in the passage’s data.',
          'Pay within jobs is not already equal: a 5-cent difference remains between women and men in the same occupation with the same education, experience and hours. The law would address that part, though it is the smaller part.',
          'The overall gap is 18 cents on the dollar, but only 5 cents remains when women and men in the same job with the same qualifications and hours are compared. Most of the gap reflects different jobs and hours, which an equal-pay rule for identical jobs does not touch.',
        ],
        skill: '10A occupational segregation and the wage gap (reasoning from figures)',
      },
      {
        question:
          'A time-diary study finds that, among couples in which the wife works more paid hours and earns more than her husband, wives still perform most of the housework. This finding is most consistent with:',
        options: [
          'the gender-display explanation only.',
          'the time-availability explanation only.',
          'the relative-resources explanation only.',
          'the time-availability and relative-resources explanations.',
        ],
        correctAnswer: 0,
        explanation:
          'In these couples the wife has less free time and more earning power, so both the time-availability and the relative-resources explanations predict that the husband will do most of the housework. Only the gender-display explanation, which treats housework as a way of enacting gender that need not follow hours or earnings, accommodates wives continuing to do most of it. The finding therefore counts against each of the other two explanations, singly and together.',
        optionExplanations: [
          'In these couples the wife has less free time and more earning power, so both the time-availability and relative-resources explanations predict the husband would do most housework. Only the gender-display explanation, in which housework enacts gender regardless of hours or earnings, fits the finding.',
          'The time-availability explanation predicts that the partner with fewer paid hours does more housework. Here the wife works more paid hours yet does most of the housework, which contradicts that prediction.',
          'The relative-resources explanation predicts that the partner who earns less has less bargaining power and does more housework. Here the wife earns more yet does most of the housework, which contradicts that prediction.',
          'Both the time-availability and relative-resources explanations predict that the husband, with fewer paid hours and lower earnings, would do most of the housework. The finding counts against both, not for them.',
        ],
        skill: '9B the second shift: testing explanations',
      },
      {
        question: 'As the passage uses the terms, which statement describes a difference of sex rather than a difference of gender?',
        options: [
          'Most of the nurses employed in one country are women.',
          'Boys are discouraged from crying more often than girls are.',
          'Most people who have an X-linked recessive disorder are male.',
          'Girls are given dolls as gifts more often than boys are.',
        ],
        correctAnswer: 2,
        explanation:
          'Males have a single X chromosome, so one recessive allele on it is expressed; the excess of males among those affected follows from chromosomal makeup and is a difference of sex. The predominance of women in nursing reflects occupational segregation, a social arrangement that differs across societies and eras. Discouraging boys from crying and giving dolls to girls are practices of gender socialization that teach gender roles. These three patterns could be otherwise in a different society, which marks them as gender.',
        optionExplanations: [
          'The predominance of women in nursing reflects occupational segregation, a social arrangement that differs across societies and eras. It is a pattern of gender, not of sex, because it could be otherwise in a different society.',
          'Discouraging boys from crying is a practice of gender socialization that teaches gender roles. It is a social expectation attached to a classification, not a biological characteristic.',
          'Males have a single X chromosome, so one recessive allele on it is expressed. The excess of males among those affected follows from chromosomal makeup, which the passage defines as sex, not from social meanings or expectations.',
          'Giving dolls to girls more often than boys is gender socialization: parents and others supply gender-typed models. It is a social practice that could differ in another culture, which marks it as gender.',
        ],
        skill: '9B sex vs gender',
      },
    ],
  },

  // ────────────────────────────────────────────────────────────────────────
  // 3. BIOLOGICAL BASIS — gene–environment interaction (MAOA × maltreatment)
  // ────────────────────────────────────────────────────────────────────────
  {
    id: 'fl7-ps-a-03',
    section: 'psych-soc',
    discipline: 'biological-basis-of-behavior',
    title: 'A Genotype, Childhood Maltreatment, and Conduct Disorder',
    passageText:
      'Twin and family studies indicate that antisocial behavior is moderately heritable. Heritability is the proportion of the variation in a trait within a particular population that is associated with genetic variation among the members of that population. Family resemblance alone cannot establish it, because relatives usually share homes as well as genes. Adoption studies separate the two sources: a child adopted at birth shares genes but not a home with the biological parents and shares a home but not genes with the adoptive parents.\n\nGenetic and environmental influences need not simply add together. In a gene–environment interaction, the effect of an environmental exposure depends on a person’s genotype. Researchers looked for such an interaction in the development of conduct disorder, a pattern of persistent aggression, destructiveness, and rule violation that is diagnosed in childhood or adolescence. They focused on the gene that encodes monoamine oxidase A (MAOA), an enzyme that breaks down serotonin, norepinephrine, and dopamine. A common variant in the gene’s promoter reduces transcription, so that carriers of the low-activity variant produce less of the enzyme than carriers of the high-activity variant do. Because the gene lies on the X chromosome, each male carries a single copy and can be assigned to one variant or the other. Animal work had suggested a role for the enzyme: male mice in which the gene has been deleted show elevated brain concentrations of these transmitters and attack other males unusually readily.\n\nThe researchers studied 930 boys from a cohort that had been enrolled at birth and assessed every two to three years. Maltreatment between ages 3 and 11 was classified from records made during those years, including home observations, pediatric charts, and reports from child-protection agencies. Each boy was classified as having experienced no maltreatment, probable maltreatment, or severe maltreatment. Genotype was determined from blood drawn in adulthood. Conduct disorder was diagnosed from structured interviews conducted at ages 11, 13, 15, and 18 by clinicians who knew neither the boys’ genotypes nor their maltreatment histories. Table 1 shows the percentage of boys in each group who met diagnostic criteria at one or more of these ages.\n\nThe researchers pointed out that carriers of the low-activity variant made up one third of the boys in every maltreatment category. They also cautioned that a study of this kind cannot by itself show that maltreatment causes conduct disorder. Parents who maltreat their children are more likely than other parents to have histories of antisocial behavior themselves, and in this cohort they were the biological parents of the children they raised.',
    figure:
      '**Table 1. Boys diagnosed with conduct disorder between ages 11 and 18, by childhood maltreatment and MAOA genotype**\n\n| Childhood maltreatment | MAOA genotype | Boys (n) | Diagnosed with conduct disorder (%) |\n|---|---|---|---|\n| None | High-activity | 400 | 20 |\n| None | Low-activity | 200 | 22 |\n| Probable | High-activity | 160 | 30 |\n| Probable | Low-activity | 80 | 45 |\n| Severe | High-activity | 60 | 40 |\n| Severe | Low-activity | 30 | 80 |',
    questions: [
      {
        question:
          'According to Table 1, the percentage of all severely maltreated boys who were diagnosed with conduct disorder is closest to:',
        options: ['40%', '53%', '60%', '80%'],
        correctAnswer: 1,
        explanation:
          'Among severely maltreated boys, 40% of 60 high-activity carriers (24 boys) and 80% of 30 low-activity carriers (24 boys) were diagnosed, so 48 of 90 boys, or about 53%, met criteria. A value of 60% is the simple average of the two percentages and ignores the fact that the high-activity group is twice as large. Values of 40% and 80% are the rates for the two genotype groups taken separately, not for all severely maltreated boys.',
        optionExplanations: [
          'Forty percent is the rate among severely maltreated boys with the high-activity genotype only (24 of 60). It does not include the 30 low-activity carriers, 24 of whom were also diagnosed.',
          'Among severely maltreated boys, 40% of 60 high-activity carriers (24) and 80% of 30 low-activity carriers (24) were diagnosed. That is 48 of 90 boys, or about 53%.',
          'Sixty percent is the simple average of 40% and 80%. It ignores that the high-activity group (60 boys) is twice as large as the low-activity group (30 boys), so the weighted percentage is lower.',
          'Eighty percent is the rate among severely maltreated boys with the low-activity genotype only (24 of 30). It does not represent all 90 severely maltreated boys.',
        ],
        skill: '6A data interpretation: weighted percentage from a table',
      },
      {
        question: 'Which description of the results in Table 1 is most accurate?',
        options: [
          'Genotype and maltreatment each added a fixed amount of risk, whatever the level of the other.',
          'Genotype raised risk at every level of maltreatment, and by about the same amount at each.',
          'Maltreatment raised risk in both genotypes, but much more steeply in one than in the other.',
          'Maltreatment raised risk only because maltreated boys more often carried one of the genotypes.',
        ],
        correctAnswer: 2,
        explanation:
          'From no maltreatment to severe maltreatment, the rate of diagnosis rose from 20% to 40% in high-activity carriers and from 22% to 80% in low-activity carriers, so the exposure mattered for both groups but far more for one, which is a gene–environment interaction. Fixed, independent contributions would produce the same genotype difference at every level of maltreatment, whereas the difference grew from 2 points to 15 to 40. For the same reason genotype did not raise risk by a similar amount at each level. Low-activity carriers were one third of every maltreatment category, so maltreated boys were no more likely to carry either variant.',
        optionExplanations: [
          'Fixed, independent contributions would produce the same genotype difference at every level of maltreatment. Instead the gap grew from 2 points (none) to 15 (probable) to 40 (severe), so the effects are not simply additive.',
          'Genotype raised risk by only 2 points with no maltreatment, by 15 with probable maltreatment, and by 40 with severe maltreatment. The amount is far from the same at each level; it grows with exposure.',
          'From no maltreatment to severe, diagnosis rose from 20% to 40% in high-activity carriers and from 22% to 80% in low-activity carriers. Maltreatment mattered for both groups but far more steeply for one, which is a gene–environment interaction.',
          'Low-activity carriers made up one third of every maltreatment category, so maltreated boys were no more likely to carry either variant. Maltreatment’s effect cannot be an artifact of genotype distribution.',
        ],
        skill: '6A gene–environment interaction (reasoning from data)',
      },
      {
        question: 'Which additional study would best address the caution raised in the final paragraph?',
        options: [
          'Repeating the cohort study in girls, in whom conduct disorder is diagnosed less often',
          'Measuring MAOA enzyme activity directly rather than inferring it from the genotype',
          'Asking the boys as adults to recall whether they had been maltreated as children',
          'Relating maltreatment to conduct disorder among children raised by adoptive parents',
        ],
        correctAnswer: 3,
        explanation:
          'The caution is that maltreating parents may also pass on genes that predispose their children to antisocial behavior, so the link between maltreatment and conduct disorder could be inherited rather than caused by the maltreatment. Adoptive parents supply the home but not the genes, so an association between maltreatment and conduct disorder in adopted children could not be explained by genes shared with the maltreating parent. Studying girls leaves parents and children genetically related. Measuring enzyme activity refines the genotype measure but does nothing about inherited risk from the parents. Adult recall would replace prospective records with a less trustworthy measure of the exposure and would not separate genes from rearing.',
        optionExplanations: [
          'Studying girls leaves parents and children genetically related, so the possibility that maltreating parents also transmit predisposing genes remains. It does not address the caution.',
          'Measuring enzyme activity directly refines the genotype measure but does nothing about inherited risk from the parents. The caution concerns the parents’ genes, not the accuracy of the MAOA classification.',
          'Adult recall would replace prospective records with a less trustworthy measure of maltreatment and would not separate the parents’ genes from their rearing. It makes the study weaker, not more informative on this point.',
          'The caution is that maltreating parents may also pass on genes predisposing to antisocial behavior. Adoptive parents supply the home but not the genes, so a maltreatment–conduct disorder link in adopted children could not be explained by shared genes with the maltreating parent.',
        ],
        skill: '7A research design: adoption-study logic',
      },
      {
        question:
          'If the pattern in Table 1 holds generally, the share of the variation in conduct disorder that is associated with MAOA genotype would be:',
        options: [
          'the same in every population, because the sequence of the gene is the same.',
          'greater in a population where maltreatment is common than where it is rare.',
          'greater in a population where maltreatment is rare than where it is common.',
          'zero in every population, because the outcome depends on experience.',
        ],
        correctAnswer: 1,
        explanation:
          'Among boys who were not maltreated, the two genotypes had nearly identical rates of diagnosis (20% and 22%), so in a population with little maltreatment the genotype would account for almost none of the variation; among maltreated boys the genotypes diverged sharply, so where maltreatment is common the genotype would account for much more. Heritability is a property of a population in its particular range of environments, not a fixed property of a gene, so it need not be the same everywhere. The prediction that it is greater where maltreatment is rare reverses the pattern in the table. Dependence on experience does not make the genetic share zero, since genotype mattered greatly among the maltreated.',
        optionExplanations: [
          'Heritability is a property of a population in its particular range of environments, not a fixed property of a gene. The same DNA sequence can account for different shares of variation depending on how common the relevant exposures are.',
          'Among non-maltreated boys the genotypes had nearly identical rates (20% vs 22%), so where maltreatment is rare genotype accounts for almost no variation. Among maltreated boys the genotypes diverged sharply, so where maltreatment is common genotype accounts for much more.',
          'This reverses the pattern in the table. Where maltreatment is rare, almost everyone is in the no-maltreatment rows, where the genotypes barely differ (20% vs 22%), so genotype would explain very little variation.',
          'Dependence on experience does not make the genetic share zero. Among severely maltreated boys, genotype made a 40-point difference in diagnosis rate, so in a population with much maltreatment genotype would account for substantial variation.',
        ],
        skill: '7A heritability depends on the environments sampled',
      },
    ],
  },

  // ────────────────────────────────────────────────────────────────────────
  // 4. SOCIAL PSYCHOLOGY — conformity (size, unanimity, privacy) and obedience
  // ────────────────────────────────────────────────────────────────────────
  {
    id: 'fl7-ps-a-04',
    section: 'psych-soc',
    discipline: 'social-psychology',
    title: 'Yielding to a Majority and Yielding to a Director',
    passageText:
      'Social psychologists distinguish several ways in which other people change what an individual does. In conformity, people adjust their behavior or judgments to match those of a group, although no one has asked them to. In obedience, people act on a direct instruction from someone they regard as an authority. Researchers examined both in a pair of studies.\n\nIn Study 1, 280 adults judged which of three comparison rectangles had the same area as a standard rectangle. Each participant was seated last in a row of people who gave their answers in turn; everyone else in the row was an accomplice of the researchers. On 12 of 18 trials, the critical trials, the accomplices followed a script that called for an answer that was plainly wrong. Participants were randomly assigned to one of seven conditions (n = 40 each). In a control condition, participants judged alone. In four conditions, the participant answered aloud after one, two, three, or six accomplices who all gave the same wrong answer. In the remaining two conditions there were six accomplices. In one of these, the accomplice seated fourth gave the correct answer on every critical trial while the other five gave the wrong one. In the other, all six accomplices gave the same wrong answer aloud, but the participant, said to have arrived too late to be given a turn, wrote answers on a slip of paper that no one else would see. Table 1 shows the percentage of critical trials on which participants gave the scripted wrong answer.\n\nStudy 2 concerned obedience. Each of 160 adults was asked to administer an oral test to a job applicant, in fact an accomplice, who sat in an adjoining room and could be heard over an intercom. The person directing the session explained that the study concerned performance under stress and instructed the participant to read aloud a series of 15 increasingly harsh remarks about the applicant’s answers. As the remarks continued, the applicant protested, made more errors, and finally pleaded with the participant to stop. If the participant hesitated, the director said that the procedure required the participant to continue. A participant who delivered all 15 remarks was scored as fully obedient. Two features of the director were varied in a 2 × 2 design (n = 40 per cell). The director either stayed in the room throughout or left after giving the instructions and thereafter spoke with the participant only by telephone. The director was introduced either as a member of the university’s faculty conducting research in a campus laboratory or as an employee of a private firm of unstated purpose that had rented a downtown office for the session. Table 2 shows the percentage of participants in each cell who were fully obedient.\n\nAt the end of each session, participants were told the true purpose of the study and the role of the accomplices.',
    figure:
      '**Table 1. Study 1: Critical trials answered with the scripted wrong answer, by condition (n = 40 per condition)**\n\n| Condition | Scripted wrong answer given (% of critical trials) |\n|---|---|\n| Alone (control) | 1 |\n| 1 accomplice; participant answers aloud | 3 |\n| 2 accomplices; participant answers aloud | 13 |\n| 3 accomplices; participant answers aloud | 32 |\n| 6 accomplices; participant answers aloud | 35 |\n| 6 accomplices, one answering correctly; participant answers aloud | 6 |\n| 6 accomplices; participant answers in writing | 12 |\n\n**Table 2. Study 2: Participants who were fully obedient, by the director’s affiliation and location (n = 40 per cell)**\n\n| Director introduced as | Director in the room (%) | Director on the telephone (%) |\n|---|---|---|\n| University faculty member | 65 | 25 |\n| Employee of a private firm | 50 | 10 |',
    questions: [
      {
        question:
          'A colleague predicts that seating twelve unanimous accomplices ahead of the participant would roughly double the conformity seen with six. Table 1 suggests that this prediction is:',
        options: [
          'sound, because conformity rose with each increase in the number of accomplices.',
          'sound, because conformity with six accomplices was twice that seen with three.',
          'doubtful, because conformity fell once the group grew beyond three accomplices.',
          'doubtful, because conformity changed little once the group grew beyond three.',
        ],
        correctAnswer: 3,
        explanation:
          'Conformity climbed from 3% to 13% to 32% as the unanimous group grew from one to three accomplices, but doubling the group from three to six added only 3 points, so the effect of size had nearly leveled off and a further doubling is unlikely to double conformity. Conformity did rise with each increase, but the increases shrank sharply, which is what undermines the prediction. Conformity with six accomplices (35%) was not twice that with three (32%). Conformity did not fall beyond three accomplices; it rose slightly.',
        optionExplanations: [
          'Conformity did rise with each increase in accomplices, but the increments shrank sharply: +10, +19, then only +3 from three to six. That leveling off is what undermines the prediction that twelve would double the effect.',
          'Conformity with six accomplices (35%) was not twice that with three (32%); it was only 3 points higher. The premise of this reasoning misreads the table.',
          'Conformity did not fall beyond three accomplices; it rose slightly from 32% to 35%. The prediction is doubtful because the rise had nearly stopped, not because it reversed.',
          'Conformity climbed from 3% to 13% to 32% as the group grew from one to three, but doubling from three to six added only 3 points. The size effect had nearly leveled off, so a further doubling is unlikely to double conformity.',
        ],
        skill: '7B conformity and group size (prediction from data)',
      },
      {
        question:
          'Compared with the result for participants who answered aloud after six unanimous accomplices, the result for participants who answered in writing most strongly suggests that conformity in the spoken condition reflected:',
        options: [
          'mainly concern about how the group would react, along with some real doubt about the answer.',
          'only concern about how the group would react, since written answers matched the control rate.',
          'mainly real doubt about the answer, since most of the errors remained when answers were private.',
          'only real doubt about the answer, since writing in private did not lower the rate of errors.',
        ],
        correctAnswer: 0,
        explanation:
          'When the group could not learn the participant’s answers, the error rate fell from 35% to 12%, so about two thirds of the yielding depended on being observed and reflects a wish to avoid the group’s disapproval. The remaining 12% is still far above the 1% seen in the control condition, so some participants were swayed in what they actually judged to be correct. Written answers did not match the control rate. Most of the errors did not remain in private; most disappeared. Writing in private clearly lowered the rate of errors.',
        optionExplanations: [
          'When the group could not see the participant’s answers, errors fell from 35% to 12%, so about two thirds of the yielding depended on being observed. But 12% is still far above the 1% control rate, so some participants were genuinely swayed in their judgment.',
          'Written answers did not match the control rate: 12% in private versus 1% alone. That residual yielding shows some participants actually believed the group, so concern about reactions was not the only factor.',
          'Most of the errors did not remain in private; the rate fell from 35% to 12%. Real doubt accounts for only the residual 12%, while the larger share disappeared once observation was removed.',
          'Writing in private clearly lowered the error rate, from 35% to 12%. Since most of the yielding vanished when the group could not observe, it cannot have been only real doubt about the answer.',
        ],
        skill: '7B normative vs informational influence (reasoning from data)',
      },
      {
        question:
          'The researchers wish to know whether the dissenting accomplice lowered conformity by showing that disagreement with the majority was possible or by confirming what the participant saw. Which added condition would best distinguish these possibilities?',
        options: [
          'Six accomplices, of whom two rather than one give the correct answer on the critical trials',
          'Six accomplices, one of whom gives the correct answer but is seated first rather than fourth',
          'Six accomplices, one of whom gives a wrong answer that differs from that of the other five',
          'Three accomplices, one of whom gives the correct answer on each of the critical trials',
        ],
        correctAnswer: 2,
        explanation:
          'A dissenter who is also wrong breaks the group’s unanimity without supporting the participant’s own perception; if conformity to the majority still drops, the break in unanimity is what matters, and if it does not, confirmation of the correct answer is what matters. Two correct dissenters, a correct dissenter in a different seat, and a correct dissenter in a smaller group all continue to combine a break in unanimity with confirmation of the correct answer, so none of them separates the two possibilities.',
        optionExplanations: [
          'Two correct dissenters still combine a break in unanimity with confirmation of the participant’s own perception. Adding a second one does not separate the two possible mechanisms.',
          'A correct dissenter in a different seat still both breaks unanimity and confirms the correct answer. Changing seating position leaves the two possibilities confounded.',
          'A dissenter who is also wrong breaks the group’s unanimity without supporting the participant’s perception. If conformity still drops, the break in unanimity is what matters; if it does not, confirmation of the correct answer is what matters.',
          'A correct dissenter in a smaller group still breaks unanimity and confirms the correct answer at the same time. Reducing group size changes a different variable and does not isolate the two mechanisms.',
        ],
        skill: '7B research design: unanimity vs social support',
      },
      {
        question:
          'In a follow-up, the rectangles differed so little that participants judging alone were correct on only 55% of trials. Participants who heard a unanimous group adopted its answers and, when tested alone a week later, still gave those answers. This pattern is best described as:',
        options: [
          'compliance resulting from normative influence.',
          'internalization resulting from informational influence.',
          'compliance resulting from informational influence.',
          'internalization resulting from normative influence.',
        ],
        correctAnswer: 1,
        explanation:
          'When a judgment is difficult, people treat the answers of others as evidence about what is true, which is informational influence, and a change that persists in private after the group is gone shows that the participants came to accept the group’s answers as their own, which is internalization. Compliance is public agreement without private acceptance and would have vanished once participants were tested alone. Normative influence rests on the wish to be accepted by people who are present, and no group was present a week later.',
        optionExplanations: [
          'Compliance is public agreement without private acceptance and would have vanished once participants were tested alone a week later. Normative influence also depends on the group being present to approve or disapprove, and it was absent.',
          'With rectangles so similar that solo judgments were barely above chance, people treat others’ answers as evidence about what is true, which is informational influence. A change persisting in private a week later shows internalization: the group’s answers became their own.',
          'Informational influence is right for a difficult judgment, but compliance would not persist in private. Giving the same answers alone a week later shows genuine private acceptance, which is internalization.',
          'Internalization fits the persistence, but normative influence rests on wanting acceptance from people who are present. No group was present at the retest, and the difficulty of the task points to informational influence.',
        ],
        skill: '7B compliance vs internalization',
      },
      {
        question: 'Which conclusion is best supported by Table 2?',
        options: [
          'Removing the director from the room lowered obedience more than changing the director’s affiliation did.',
          'Changing the director’s affiliation lowered obedience more than removing the director from the room did.',
          'The director’s affiliation affected obedience only when the director remained in the room.',
          'Removing the director from the room abolished obedience whatever the director’s affiliation was.',
        ],
        correctAnswer: 0,
        explanation:
          'Moving the director to the telephone lowered full obedience by 40 points for both affiliations (65% to 25% and 50% to 10%), whereas replacing the university affiliation with the private firm lowered it by 15 points at both locations, so physical presence had the larger effect. The reverse ordering misreads the sizes of the two differences. Affiliation mattered at both locations, since the 15-point difference appears in the telephone column as well. Obedience was not abolished by the director’s absence: a quarter of participants under the university director and a tenth under the firm’s employee still delivered every remark.',
        optionExplanations: [
          'Moving the director to the telephone lowered obedience by 40 points for both affiliations (65→25 and 50→10), whereas changing from university to private firm lowered it by 15 points at both locations (65→50 and 25→10). Presence had the larger effect.',
          'This misreads the sizes of the two differences. Affiliation changed obedience by 15 points, while removing the director from the room changed it by 40 points, so location had the larger effect, not affiliation.',
          'Affiliation mattered at both locations: the 15-point difference between university and firm appears in the telephone column (25 vs 10) as well as in the in-room column (65 vs 50).',
          'Obedience was not abolished when the director left: 25% under the university director and 10% under the firm’s employee still delivered every remark. It fell sharply but did not reach zero.',
        ],
        skill: '7B data interpretation: obedience, proximity and legitimacy',
      },
    ],
  },

  // ────────────────────────────────────────────────────────────────────────
  // 5. LEARNING — biological constraints: taste aversion, preparedness,
  //    instinctive drift, contingency vs contiguity
  // ────────────────────────────────────────────────────────────────────────
  {
    id: 'fl7-ps-a-05',
    section: 'psych-soc',
    discipline: 'learning-and-memory',
    title: 'What Animals Are Ready to Learn',
    passageText:
      'Early learning theorists assumed that the laws of conditioning were general: any stimulus an animal could detect could be associated with any other, and any response an animal could make could be strengthened by any reinforcer. It was also assumed that conditioning depends on contiguity, the occurrence of two events close together in time. Research since the 1950s has qualified each assumption.\n\nThe best-known challenge came from studies of taste aversion by John Garcia and his colleagues. Rats drank saccharin-flavored water from a spout that, at each lick, also set off a flash of light and a click. Some rats were then made nauseated by radiation or by an injection of lithium chloride, and others received a shock to the feet. When later offered a choice, the rats that had been made ill avoided the flavored water but drank freely of unflavored water accompanied by the light and click; the rats that had been shocked did the reverse. Moreover, the aversion to the flavor formed after a single pairing, and it formed even when illness began several hours after drinking. In most laboratory preparations, by contrast, conditioning fails if the conditioned stimulus and the unconditioned stimulus are separated by more than a few seconds.\n\nMartin Seligman proposed that such results reflect preparedness: natural selection has made each species ready to learn some associations, unprepared for others, and resistant to still others. An animal that eats a toxic food and survives benefits from avoiding that food’s taste thereafter, even though the consequences of eating arrive slowly. Seligman later extended the idea to human fears, arguing that people acquire and retain fears of some kinds of objects more readily than fears of others.\n\nOperant conditioning has limits of a similar kind. Keller and Marian Breland, who trained animals for commercial displays, taught a raccoon to pick up a coin and drop it into a box for a food reward. When the raccoon was required to deposit two coins, it began to rub them together and dip them into the box without letting go, much as raccoons handle food, and this behavior grew more frequent even though it postponed the reward. The Brelands called the intrusion of species-typical behavior into a trained performance instinctive drift.\n\nFinally, Robert Rescorla showed that contiguity is not sufficient for conditioning. What matters is contingency: the conditioned stimulus must provide information about the unconditioned stimulus, in the sense that the unconditioned stimulus is more likely to occur when the conditioned stimulus has just been presented than when it has not. Animals that experience a tone and a shock together equally often can learn very different things about the tone, depending on what happens during the rest of the session.\n\nTaken together, these findings suggest that conditioning is less a mechanical stamping-in of whatever events happen to coincide than a means by which an animal, equipped with the biases of its species, learns what predicts what.',
    questions: [
      {
        question:
          'Quail, which find food mainly by sight, were given blue-colored, sour-tasting water and then made ill. They later avoided blue water that was not sour but drank sour water that was not colored; rats given the same treatment did the opposite. Taken with the passage, this result suggests that:',
        options: [
          'taste is the cue that every species most readily associates with a later illness.',
          'quail are unable to form an association between any taste and a later illness.',
          'the cue a species links to illness tends to be the one it uses to select food.',
          'illness becomes linked to a cue only when the two occur within a few seconds.',
        ],
        correctAnswer: 2,
        explanation:
          'Rats, which identify food largely by taste and smell, associated illness with the taste, whereas quail, which identify food by sight, associated it with the color, so the favored cue differs between species in a way that matches how each one finds food; this is what preparedness predicts. Taste cannot be the favored cue for every species when quail favored color. The result shows which of two available cues quail used, not that quail cannot learn about tastes when taste is the only cue. Taste-aversion learning in the passage tolerated delays of hours, so a requirement of a few seconds is contradicted.',
        optionExplanations: [
          'Taste cannot be the favored cue for every species when quail associated illness with color rather than taste. The cue that is favored differs by species, matching how each finds food.',
          'The result shows which of two available cues quail used, not that quail cannot learn about tastes at all. When both cues were present, quail favored color; this does not show they would fail if taste were the only cue.',
          'Rats, which find food by taste and smell, associated illness with taste; quail, which find food by sight, associated it with color. The favored cue matches how each species selects food, which is what preparedness predicts.',
          'Taste-aversion learning in the passage formed even when illness began hours after drinking. A requirement that the cue and illness occur within seconds is directly contradicted by the passage.',
        ],
        skill: '7A preparedness: species-specific selective association',
      },
      {
        question:
          'Two groups of rats each receive 20 tone–shock pairings in a session. Group 1 receives no other shocks. Group 2 also receives 20 shocks at random times when no tone is sounding, so that shock is equally likely with or without the tone. Based on the passage, what is expected when the tone is later presented alone?',
        options: [
          'Group 1 shows more fear, because only for Group 1 did the tone signal a rise in the chance of shock.',
          'Group 2 shows more fear, because Group 2 received twice as many shocks during the session.',
          'The groups show equal fear, because the tone and the shock were paired equally often for both.',
          'Neither group shows fear, because the tone and the shock were not paired on every occasion.',
        ],
        correctAnswer: 0,
        explanation:
          'For Group 1 the tone predicted shock, since shock occurred only after the tone; for Group 2 shock was no more likely after the tone than at any other time, so the tone carried no information and little or no fear should be conditioned to it. More shocks in total do not make the tone a better signal; they are what destroyed its predictive value. Equal numbers of pairings would produce equal fear only if contiguity were sufficient, which is the assumption Rescorla’s work rejected. In Group 1 every tone was followed by shock and every shock was preceded by the tone, so conditioning is expected there.',
        optionExplanations: [
          'For Group 1, shock occurred only after the tone, so the tone predicted a rise in the chance of shock. For Group 2, shock was equally likely with or without the tone, so the tone carried no information and little fear should be conditioned to it.',
          'More shocks in total do not make the tone a better signal. The extra unsignaled shocks in Group 2 are precisely what destroyed the tone’s predictive value, so Group 2 should show less fear, not more.',
          'Equal numbers of pairings would produce equal fear only if contiguity were sufficient for conditioning. Rescorla’s work showed that contingency matters, and only Group 1’s tone was contingent with shock.',
          'In Group 1 every tone was followed by shock and every shock was preceded by the tone, so the tone was a perfect predictor and conditioning is expected. Conditioning does not require pairing on every occasion in both groups.',
        ],
        skill: '7A contingency vs contiguity in classical conditioning',
      },
      {
        question:
          'A trainer reinforces a pig with food for carrying a wooden disc to a bin. After weeks of reliable performance, the pig increasingly drops the disc on the way and pushes it along the ground with its snout, although this delays the food. The change in the pig’s behavior is best described as:',
        options: [
          'extinction, since a trained response weakened once its reinforcer was withheld.',
          'shaping, since closer and closer approximations of a response were reinforced.',
          'taste aversion, since the food had come to be associated with the wooden disc.',
          'instinctive drift, since species-typical food behavior displaced the trained one.',
        ],
        correctAnswer: 3,
        explanation:
          'Pigs root for food with the snout, and an object that has been repeatedly paired with food comes to evoke that species-typical behavior, which intrudes on the trained response even at the cost of delayed reinforcement; this is instinctive drift. Extinction requires that reinforcement be withheld, and the food was still delivered whenever the disc reached the bin. Shaping is a training method in which successive approximations are reinforced, and no one reinforced rooting. A taste aversion is a learned avoidance of a flavor after illness, and the pig was neither made ill nor avoiding the food.',
        optionExplanations: [
          'Extinction requires that reinforcement be withheld, but the food was still delivered whenever the disc reached the bin. The trained response was not weakened by absence of reinforcement; it was displaced by competing behavior.',
          'Shaping is a deliberate training method in which successive approximations are reinforced. No one reinforced rooting; it emerged on its own and actually delayed the reinforcer.',
          'A taste aversion is a learned avoidance of a flavor after illness. The pig was neither made ill nor avoiding the food; it was eagerly rooting at the disc as if it were food.',
          'Pigs root for food with the snout, and an object repeatedly paired with food comes to evoke that species-typical behavior. It intrudes on the trained response even at the cost of delayed reinforcement, which is instinctive drift.',
        ],
        skill: '7A instinctive drift',
      },
      {
        question: 'Which finding would most directly support the extension of preparedness to human fears?',
        options: [
          'Adults who were bitten by a dog in childhood report more fear of dogs than adults who were never bitten.',
          'Fear responses conditioned to pictures of snakes extinguish more slowly than those conditioned to flowers.',
          'Children show more fear of an unfamiliar animal after they watch a parent react to that animal with alarm.',
          'Fear responses conditioned to a tone become larger as the intensity of the shock paired with it is raised.',
        ],
        correctAnswer: 1,
        explanation:
          'Preparedness claims that some stimuli are more readily and durably associated with danger than others; if the same conditioning procedure yields a more persistent fear response to snakes than to flowers, the difference lies in the kind of stimulus rather than in the learner’s history. More fear of dogs after a bite is ordinary conditioning and says nothing about differences among kinds of stimuli. Fear acquired by watching a parent is observational learning and likewise compares no classes of stimuli. A larger response with stronger shock is a general property of conditioning that holds for any conditioned stimulus.',
        optionExplanations: [
          'More fear of dogs after being bitten is ordinary conditioning from personal history. It says nothing about whether some kinds of stimuli are more readily associated with danger than others.',
          'Preparedness claims that some stimuli are more readily and durably associated with danger than others. If the same conditioning procedure yields a more persistent fear of snakes than of flowers, the difference lies in the kind of stimulus, not in the learner’s history.',
          'Fear acquired by watching a parent is observational learning. It compares no classes of stimuli, so it cannot show that some objects are more easily feared than others.',
          'A larger response with stronger shock is a general property of conditioning that holds for any conditioned stimulus. It does not distinguish prepared from unprepared stimuli.',
        ],
        skill: '7A preparedness and human fears (evaluating evidence)',
      },
    ],
  },
]

export const FL7_PSYCH_SOC_A_DISCRETES: MCATDiscreteQuestion[] = [
  {
    id: 'fl7-ps-a-d01',
    section: 'psych-soc',
    discipline: 'cognition-and-perception',
    question:
      'A dermatology resident classifies a new skin lesion by recalling one particular patient she examined last month whose lesion looked much the same. Her strategy corresponds most closely to which account of how people assign items to categories?',
    options: [
      'Prototype theory: a new item is compared with an averaged, most typical category member.',
      'Exemplar theory: a new item is compared with specific remembered category members.',
      'Defining-feature theory: a new item is checked for the features every member must have.',
      'Hierarchical theory: a new item is placed by finding the broader category that holds it.',
    ],
    correctAnswer: 1,
    explanation:
      'Matching a new case to an individual case stored in memory is what exemplar theory describes: category membership is judged by similarity to particular remembered instances. Prototype theory would have her compare the lesion with an abstracted average of all the lesions of that type she has seen, not with one patient. A defining-feature account would have her check a list of necessary and sufficient criteria, and she consulted no such list. Locating an item within broader and narrower categories describes how categories are organized, not how the resident recognized this lesion.',
    optionExplanations: [
      'Prototype theory would have her compare the lesion with an abstracted average of all the lesions of that type she has seen. She instead recalled one specific patient, not a composite.',
      'Matching a new case to an individual case stored in memory is exemplar theory: category membership is judged by similarity to particular remembered instances. Recalling one patient from last month is exactly that.',
      'A defining-feature account would have her check a list of necessary and sufficient criteria for the category. She consulted no such list; she relied on resemblance to a remembered case.',
      'Locating an item within broader and narrower categories describes how categories are organized relative to one another, not how the resident recognized this particular lesion.',
    ],
    skill: '6B concept formation: prototypes vs exemplars',
  },
  {
    id: 'fl7-ps-a-d02',
    section: 'psych-soc',
    discipline: 'cognition-and-perception',
    question:
      'A handwritten character midway in shape between “B” and “13” is read as a letter when it is written between “A” and “C” and as a number when it is written between “12” and “14,” although the marks on the page are identical. This effect of context is an example of:',
    options: [
      'bottom-up processing, in which a percept is assembled from the features of the stimulus.',
      'feature detection, in which specialized cells respond to lines of a given orientation.',
      'parallel processing, in which color, form, and motion are analyzed in separate pathways.',
      'top-down processing, in which expectations guide the interpretation of sensory input.',
    ],
    correctAnswer: 3,
    explanation:
      'The physical stimulus is the same in both rows, so the difference in what is seen must come from the perceiver: surrounding letters or numbers create an expectation that determines how the ambiguous marks are interpreted, which is top-down processing. Bottom-up processing builds a percept from stimulus features alone and would yield the same reading in both rows. Feature detectors respond to the lines and curves, which do not differ between the rows. Parallel analysis of color, form, and motion describes how visual attributes are handled simultaneously and does not explain an effect of context.',
    optionExplanations: [
      'Bottom-up processing builds a percept from stimulus features alone. The marks are identical in both rows, so bottom-up processing would yield the same reading in both, not different readings.',
      'Feature detectors respond to the lines and curves of the stimulus, which do not differ between the two rows. They cannot explain why the same marks are read differently.',
      'Parallel processing of color, form and motion describes how visual attributes are handled simultaneously in separate pathways. It does not explain how context changes the interpretation of an ambiguous shape.',
      'The physical stimulus is identical in both rows, so the difference must come from the perceiver. Surrounding letters or numbers create an expectation that determines how the ambiguous marks are read, which is top-down processing.',
    ],
    skill: '6A top-down processing and context effects',
  },
  {
    id: 'fl7-ps-a-d03',
    section: 'psych-soc',
    discipline: 'biological-basis-of-behavior',
    question:
      'After a stroke, a patient walks with a wide, unsteady gait and overshoots when reaching for objects. Across repeated sessions she fails to improve at tracing a figure that she can see only in a mirror, although she can afterward describe each session in detail. The structure most likely damaged is the:',
    options: ['cerebellum.', 'hippocampus.', 'amygdala.', 'thalamus.'],
    correctAnswer: 0,
    explanation:
      'The cerebellum coordinates the timing and accuracy of movement and is needed for learning motor skills, so damage produces an unsteady gait, inaccurate reaching, and failure to improve with practice on a task such as mirror tracing. Hippocampal damage would do the opposite: skill learning would be spared while memory for the sessions themselves would be lost, and she recalls the sessions well. The amygdala is central to emotional learning such as conditioned fear and does not coordinate movement. The thalamus relays sensory information to the cortex, and its damage would not selectively produce incoordination with a failure of motor learning.',
    optionExplanations: [
      'The cerebellum coordinates the timing and accuracy of movement and is needed for learning motor skills. Damage produces an unsteady gait, inaccurate reaching, and failure to improve with practice on mirror tracing, while declarative memory for the sessions is spared.',
      'Hippocampal damage would produce the opposite pattern: skill learning on mirror tracing would be spared while memory for the sessions would be lost. This patient recalls the sessions well but cannot improve the skill.',
      'The amygdala is central to emotional learning such as conditioned fear. It does not coordinate movement or support motor skill acquisition, so it cannot explain the gait and reaching deficits.',
      'The thalamus relays sensory information to the cortex. Its damage would not selectively produce incoordination together with a failure of motor learning while leaving declarative memory intact.',
    ],
    skill: '6A cerebellum and motor (procedural) learning',
  },
  {
    id: 'fl7-ps-a-d04',
    section: 'psych-soc',
    discipline: 'biological-basis-of-behavior',
    question:
      'Soldiers wounded in battle sometimes report little pain until hours afterward. In laboratory animals, a comparable stress-induced loss of pain sensitivity is abolished by naloxone, a drug that blocks opioid receptors. This analgesia is most likely mediated by the release of:',
    options: ['substance P.', 'glutamate.', 'endorphins.', 'acetylcholine.'],
    correctAnswer: 2,
    explanation:
      'Endorphins are peptides made by the body that bind the same receptors as morphine and suppress the transmission of pain signals; because blocking opioid receptors removes the analgesia, an endogenous opioid must be producing it. Substance P and glutamate are released by pain-sensing fibers in the spinal cord and carry the pain signal forward, so their release would increase pain rather than suppress it. Acetylcholine acts on nicotinic and muscarinic receptors, which naloxone does not block.',
    optionExplanations: [
      'Substance P is released by pain-sensing fibers in the spinal cord and carries the pain signal forward. Its release would increase pain, not suppress it.',
      'Glutamate is the excitatory transmitter released by pain afferents in the spinal cord, transmitting the pain signal onward. More glutamate would heighten pain rather than produce analgesia.',
      'Endorphins are endogenous peptides that bind the same receptors as morphine and suppress pain transmission. Because naloxone, an opioid receptor blocker, abolishes the analgesia, an endogenous opioid must be producing it.',
      'Acetylcholine acts on nicotinic and muscarinic receptors, which naloxone does not block. If acetylcholine mediated the analgesia, naloxone would not abolish it.',
    ],
    skill: '6A endorphins as endogenous opioids',
  },
  {
    id: 'fl7-ps-a-d05',
    section: 'psych-soc',
    discipline: 'learning-and-memory',
    question:
      'A dog is trained to salivate to a bell by pairing the bell with food. A black square is then shown repeatedly just before the bell, and no food is given on these trials. The dog comes to salivate when the square is shown alone. The response to the square illustrates:',
    options: [
      'second-order conditioning, in which a conditioned stimulus serves to condition a new stimulus.',
      'stimulus generalization, in which stimuli resembling a conditioned stimulus evoke its response.',
      'spontaneous recovery, in which an extinguished response returns following a period of rest.',
      'secondary reinforcement, in which a stimulus paired with a reward strengthens a behavior.',
    ],
    correctAnswer: 0,
    explanation:
      'The square was never paired with food; it acquired its power from the bell, an already conditioned stimulus that stood in for the unconditioned stimulus, which is second-order conditioning. Generalization would require that the square resemble the bell, and a visual shape does not resemble a sound. Spontaneous recovery is the return of an extinguished response to the original conditioned stimulus, and nothing was extinguished and then rested. Secondary reinforcement belongs to operant conditioning, in which a consequence strengthens a voluntary behavior, whereas salivation here is a reflex elicited by a signal.',
    optionExplanations: [
      'The square was never paired with food; it acquired its power from the bell, an already conditioned stimulus that stood in for the unconditioned stimulus. That is second-order conditioning.',
      'Generalization would require the square to resemble the bell, and a visual shape does not resemble a sound. The square gained its effect through pairing with the bell, not through similarity to it.',
      'Spontaneous recovery is the return of an extinguished response to the original conditioned stimulus after rest. Nothing was extinguished and then rested; a new stimulus acquired a response.',
      'Secondary reinforcement belongs to operant conditioning, in which a stimulus paired with reward strengthens a voluntary behavior. Salivation here is a reflex elicited by a signal, not a voluntary behavior being reinforced.',
    ],
    skill: '7A second-order conditioning',
  },
  {
    id: 'fl7-ps-a-d06',
    section: 'psych-soc',
    discipline: 'sociology',
    question:
      'A physician trained in a large city takes a post at a clinic in another country. During her first weeks she feels anxious and disoriented: relatives stay in the room during every examination, appointments begin hours late without comment, and her usual gestures of courtesy seem to give offense. She does not regard the local practices as inferior, but she no longer knows how to act. Her experience is best described as:',
    options: [
      'ethnocentrism, the judging of another culture by the standards of one’s own.',
      'cultural lag, the slower change of customs than of technology in a society.',
      'assimilation, the gradual adoption of the practices of a dominant culture.',
      'culture shock, the disorientation felt on immersion in unfamiliar norms.',
    ],
    correctAnswer: 3,
    explanation:
      'Anxiety and loss of bearings on entering a setting whose norms are unfamiliar, so that one’s habitual ways of acting no longer work, is culture shock. Ethnocentrism would require that she judge the local practices by her own culture’s standards and find them wanting, which the stem rules out. Cultural lag describes a gap within one society between rapidly changing technology and slower-changing norms. Assimilation is a long-term process of taking on a dominant culture’s ways, whereas she has not yet learned how to act at all.',
    optionExplanations: [
      'Ethnocentrism requires judging the local practices by her own culture’s standards and finding them wanting. The stem explicitly says she does not regard them as inferior.',
      'Cultural lag describes a gap within one society between rapidly changing technology and slower-changing norms. It does not describe an individual’s disorientation on entering another culture.',
      'Assimilation is a long-term process of taking on a dominant culture’s ways. She is in her first weeks and has not yet learned how to act at all, let alone adopted the local practices.',
      'Anxiety and loss of bearings on entering a setting whose norms are unfamiliar, so that habitual ways of acting no longer work, is culture shock. Her distress without any judgment of inferiority fits this precisely.',
    ],
    skill: '9A culture shock',
  },
  {
    id: 'fl7-ps-a-d07',
    section: 'psych-soc',
    discipline: 'sociology',
    question:
      'Eight strangers enroll in a 12-week cardiac rehabilitation class. They meet only to exercise and seldom speak of anything else. Years after the class ends, four of them still gather every week, confide in one another, and describe one another as family. For these four, the relationship changed from:',
    options: [
      'a secondary group to a primary group.',
      'a primary group to a secondary group.',
      'an out-group to a reference group.',
      'a reference group to an in-group.',
    ],
    correctAnswer: 0,
    explanation:
      'The class was a secondary group: its members came together for a limited, practical purpose and related to one another impersonally. The four who went on meeting formed a primary group, marked by enduring, emotionally close ties valued for their own sake. The reverse order describes close ties becoming impersonal, the opposite of what happened. An out-group is one to which a person does not belong and toward which the person feels opposition, and the classmates were fellow members from the start. A reference group is one used as a standard for evaluating oneself, and nothing indicates that the class served that function.',
    optionExplanations: [
      'The class was a secondary group: members came together for a limited practical purpose and related impersonally. The four who kept meeting formed a primary group, marked by enduring, emotionally close ties valued for their own sake.',
      'This reverses the sequence. The impersonal exercise class came first and the intimate, family-like bonds developed later, so the movement was from secondary to primary, not the other way.',
      'An out-group is one to which a person does not belong and toward which the person feels opposition. The classmates were fellow members from the start, so they were never an out-group.',
      'A reference group is one used as a standard for evaluating oneself. Nothing indicates the class served that function; the change described concerns intimacy of ties, not standards of comparison.',
    ],
    skill: '9A primary vs secondary groups',
  },
  {
    id: 'fl7-ps-a-d08',
    section: 'psych-soc',
    discipline: 'sociology',
    question:
      'Rational choice theory holds that individuals act so as to maximize their own net benefit after weighing the costs and rewards of the options open to them. Which behavior is most difficult to explain on that assumption alone?',
    options: [
      'A patient changes clinics after a rival clinic shortens its waiting times.',
      'A traveler leaves a large tip at a diner that he will never visit again.',
      'A nurse leaves her job after another hospital offers her a higher salary.',
      'A student drops a course when its workload outweighs its value to him.',
    ],
    correctAnswer: 1,
    explanation:
      'A tip left where the traveler will never return costs him money and can bring no better service or standing in the future, so a calculation of personal net benefit does not predict it; explaining it requires something further, such as an internalized norm. Changing to a clinic with shorter waits lowers a cost for the same service. Moving to a better-paid job raises a reward. Dropping a course whose costs exceed its benefits is the weighing of costs and rewards that the theory describes.',
    optionExplanations: [
      'Changing to a clinic with shorter waits lowers a cost for the same service. This is exactly the weighing of costs and rewards that rational choice theory describes.',
      'A tip left where the traveler will never return costs him money and cannot bring better service or standing in the future. A calculation of personal net benefit does not predict it; explaining it requires something further, such as an internalized norm.',
      'Moving to a job with a higher salary raises a reward. This is straightforward benefit-maximizing behavior that rational choice theory predicts.',
      'Dropping a course whose costs exceed its benefits is precisely the cost–reward weighing the theory describes. It is easy, not difficult, to explain on that assumption.',
    ],
    skill: '9A rational choice and exchange theory (limits)',
  },
]
