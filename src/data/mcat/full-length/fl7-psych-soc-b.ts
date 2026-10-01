/**
 * MCAT Full-Length Form 7 — Psych/Soc section, file B (passages 6–10 + 7
 * discretes). Built to the 2026-09-29 blueprint: 400–600-word passages, an
 * information/experiment mix, AAMC skill proportions, keys that require using
 * the passage rather than matching its wording, parallel-length options, and
 * key positions balanced across the file. Topics are deliberately distinct
 * from Forms 1–6 (fl1- … fl6-psych-soc-*).
 *
 * KEY INVARIANT: the passage runner does NOT shuffle options — keys were
 * authored position-balanced and explanations reference options by CONTENT,
 * so options can be reordered only via scripts/rebalance-passage-keys.ts.
 */
import type { MCATPassage, MCATDiscreteQuestion } from '../types'

export const FL7_PSYCH_SOC_B_PASSAGES: MCATPassage[] = [
  // ────────────────────────────────────────────────────────────────────────
  // 6. DEVELOPMENTAL — experiment, chart: risk-taking in a driving simulation
  //    alone vs watched by friends across four age groups; dual systems model;
  //    adolescent egocentrism (imaginary audience, personal fable)
  // ────────────────────────────────────────────────────────────────────────
  {
    id: 'fl7-ps-b-06',
    section: 'psych-soc',
    discipline: 'developmental-psychology',
    title: 'Friends, Yellow Lights, and the Adolescent Brain',
    passageText:
      'Deaths and injuries from reckless driving, unprotected sex, and experimentation with drugs rise sharply in the middle teenage years and decline through the twenties. An early psychological explanation appealed to adolescent egocentrism, a pattern of thought said to appear when young people first become able to reason about what others are thinking. It has two expressions. The imaginary audience is the conviction that one is the constant object of other people’s attention and judgment. The personal fable is the conviction that one’s own experiences are unique, and that the misfortunes that strike other people will not strike oneself.\n\nA more recent explanation, the dual systems model, rests on the uneven timing of brain development. A socioemotional system that includes the ventral striatum and other limbic structures becomes much more responsive to rewards around puberty. A cognitive control system centered on the lateral prefrontal cortex, which supports planning and the inhibition of impulses, matures slowly; its connections continue to be pruned and myelinated into the middle twenties. On this account, middle adolescence is a period in which an easily aroused reward system is checked by a control system that is still under construction.\n\nTo examine how social context contributes, researchers recruited 240 volunteers in four age groups (13–15, 17–19, 21–23, and 25–27 years; 60 per group). Each participant came to the laboratory with two friends of the same age and sex and was randomly assigned to one of two conditions. In the alone condition, the friends waited in another part of the building. In the peer condition, the friends watched the participant’s screen from an adjoining room; the participant was told that they were watching, but the rooms were soundproofed and no communication was possible. The participant then completed a driving simulation in which a car approached 20 intersections in turn. At each one the traffic light turned yellow, and the participant chose either to brake and wait or to drive through. Driving through saved time, and a cash bonus was paid for finishing the course quickly, but at an unpredictable minority of intersections it produced a crash that cost more time than waiting would have. Risk-taking was scored as the number of intersections, out of 20, at which the participant drove through. Figure 1 shows the group means.\n\nBefore the simulation, every participant completed a questionnaire asking how likely he or she personally would be to crash, and to be seriously hurt, when driving through a yellow light on a real road. Ratings did not differ by age group or by condition.\n\nForty participants drawn from the youngest and oldest groups performed the task during functional brain imaging. In the youngest group, activity in the ventral striatum at the moment of each decision was greater in the peer condition than in the alone condition; in the oldest group it did not differ between conditions. Activity in the lateral prefrontal cortex was greater in the oldest group than in the youngest, but within each age group it was the same in the two conditions.',
    chart: {
      title:
        'Figure 1. Mean number of intersections (of 20) at which participants drove through the yellow light, by age group and condition (each age group is plotted at its midpoint)',
      kind: 'line',
      xLabel: 'Age group (midpoint)',
      yLabel: 'Yellow lights driven through (of 20)',
      xUnit: 'years',
      xValues: [14, 18, 22, 26],
      yValues: [12.0, 9.5, 7.0, 6.1],
      seriesLabel: 'Friends watching',
      comparisonSeries: [{ label: 'Alone', yValues: [6.0, 6.2, 5.8, 6.0] }],
    },
    questions: [
      {
        question: 'Which description of the results in Figure 1 is accurate?',
        options: [
          'Risk-taking alone fell steadily with age, and being watched added a similar amount at every age',
          'Risk-taking was higher in the youngest group than in the oldest group whether or not friends watched',
          'Risk-taking varied with age only when friends watched, and it was then highest in the youngest group',
          'Risk-taking with friends watching was lower than risk-taking alone in the two oldest age groups',
        ],
        correctAnswer: 2,
        explanation:
          'With friends watching, the mean fell from 12.0 in the 13–15 group to 6.1 in the 25–27 group, whereas the alone means stayed close to 6 at every age, so age made a difference only under observation. Risk-taking alone did not fall with age, and the amount added by observation shrank from about 6 intersections to almost none. The youngest and oldest groups did not differ when tested alone. In the two oldest groups the watched means (7.0 and 6.1) were at or above the alone means, not below them.',
        skill: '7A data interpretation: age by peer-context interaction',
      },
      {
        question:
          'The questionnaire results are LEAST consistent with attributing the youngest group’s risk-taking in the peer condition to:',
        options: [
          'a personal fable',
          'an imaginary audience',
          'a highly responsive reward system',
          'a slowly maturing control system',
        ],
        correctAnswer: 0,
        explanation:
          'A personal fable includes the belief that misfortunes that befall others will not befall oneself, so it predicts that adolescents would rate their own chance of crashing and being hurt lower than adults do; the ratings did not differ by age. An imaginary audience concerns the sense of being watched and judged, about which the questionnaire says nothing, and it fits an effect that appears only under observation. A responsive reward system and an immature control system are claims about what drives or restrains a choice, not about what the chooser believes the odds to be, so equal ratings leave both intact.',
        skill: '7A adolescent egocentrism: personal fable (evaluating evidence)',
      },
      {
        question:
          'A critic objects that the youngest participants, none of whom had driven a real car, may have driven through more yellow lights simply because they were inexperienced at driving. Which result most directly answers this objection?',
        options: [
          'The youngest group rated the chance of a crash on a real road as highly as the oldest group did',
          'The youngest group was offered the same cash bonus for a fast finish as the oldest group was',
          'The youngest group showed less lateral prefrontal activity during the task than the oldest group',
          'The youngest group drove through about as many lights as the oldest group did when tested alone',
        ],
        correctAnswer: 3,
        explanation:
          'Inexperience is a property of the participants and would be present whether or not anyone was watching, so if it caused risky performance the 13–15 group should also have exceeded the older groups when alone; Figure 1 shows that their alone mean was about 6, the same as that of the 25–27 group. Equal ratings of crash likelihood concern beliefs about real roads, not skill at the simulated task. An equal cash bonus shows that incentives were matched but says nothing about skill. Lower prefrontal activity in the youngest group is a difference between age groups that inexperience might itself produce, so it cannot rebut the objection.',
        skill: '7A research design: ruling out inexperience as a confound',
      },
      {
        question:
          'The imaging results suggest that the presence of friends increased the youngest participants’ risk-taking chiefly by:',
        options: [
          'lowering the activity of regions that hold impulsive choices in check',
          'raising the reward value that was attached to the risky choice',
          'lowering their estimates of how likely a crash would be to occur',
          'raising the time that they needed to respond to each yellow light',
        ],
        correctAnswer: 1,
        explanation:
          'Among the youngest participants, friends raised activity in the ventral striatum, a reward structure, at the moment of decision while leaving lateral prefrontal activity unchanged, which points to a stronger pull toward the rewarding option and not to weaker restraint. Reduced activity in control regions is ruled out by the finding that prefrontal activity was the same in the two conditions. Estimates of crash likelihood were measured by the questionnaire, not by imaging, and they did not differ by condition. Nothing in the imaging data concerns response time, and slower responding would not explain choosing to drive through.',
        skill: '7A dual systems model: reward vs control (reasoning from data)',
      },
    ],
  },

  // ────────────────────────────────────────────────────────────────────────
  // 7. SOCIOLOGY — tables: dissimilarity index, concentrated poverty and food
  //    access in four metropolitan areas; a randomized housing-voucher
  //    experiment analysed by assigned group
  // ────────────────────────────────────────────────────────────────────────
  {
    id: 'fl7-ps-b-07',
    section: 'psych-soc',
    discipline: 'sociology',
    title: 'Segregated Neighborhoods and a Housing-Voucher Experiment',
    passageText:
      'In most metropolitan areas of the United States, racial and economic groups are unevenly distributed across neighborhoods. Sociologists summarize the pattern with the dissimilarity index, which compares how two groups are spread over the census tracts of an area. The index runs from 0, when every tract has the same mix of the two groups as the area as a whole, to 100, when no tract contains members of both; its value can be read as the percentage of either group that would have to change tracts to produce an even distribution. Values below 30 are conventionally described as low, values from 30 to 60 as moderate, and values above 60 as high.\n\nSegregation matters partly because of its connection to the geography of poverty. A high-poverty tract is one in which 40% or more of residents have incomes below the poverty line, and poverty is said to be concentrated when a large share of an area’s poor residents live in such tracts. Researchers who study neighborhood effects ask whether a place shapes the lives of its residents over and above the characteristics of the residents themselves. Proposed channels include the quality of schools, exposure to violence, and the local food environment. A food desert is a low-income area in which many residents live far from a supermarket and must rely on small stores that stock little fresh food. Table 1 presents data for four metropolitan areas.\n\nDemonstrating a neighborhood effect is difficult, because families are not distributed across neighborhoods at random. Those who live in high-poverty tracts differ from other families in income, schooling, health, and much else, so a simple comparison of the residents of poor and nonpoor neighborhoods cannot separate the influence of the place from the influence of who lives there. To get around this problem, a housing agency ran an experiment. Families with children who were living in public housing in high-poverty tracts, and who volunteered for the program, were randomly assigned to one of three groups. The low-poverty voucher group received a rent subsidy that could be used only in a tract with a poverty rate below 10%, along with help in searching for housing. The unrestricted voucher group received a rent subsidy of the same value that could be used in any tract. The control group received no voucher but could remain in public housing. Many families that were offered a voucher did not succeed in using one. Ten to fifteen years later, the researchers obtained records for the adults and for the children, who had by then reached their middle twenties. Table 2 reports outcomes for all families according to the group to which they had been assigned, whether or not they had moved.',
    figure:
      '**Table 1. Segregation, poverty, and food access in four metropolitan areas**\n\n| Metropolitan area | Black–white dissimilarity index | Poverty rate among Black residents (%) | Poor Black residents living in high-poverty tracts (%) | Low-income tracts with no supermarket within 1 mile (%) |\n|---|---|---|---|---|\n| W | 78 | 28 | 46 | 38 |\n| X | 42 | 28 | 15 | 14 |\n| Y | 76 | 12 | 18 | 34 |\n| Z | 40 | 12 | 6 | 12 |\n\n**Table 2. Outcomes 10–15 years after random assignment, by assigned group**\n\n| Outcome | Control | Unrestricted voucher | Low-poverty voucher |\n|---|---|---|---|\n| Families that used a voucher to move (%) | none offered | 62 | 48 |\n| Adults employed at follow-up (%) | 52 | 53 | 52 |\n| Adults with major depression at follow-up (%) | 20 | 18 | 15 |\n| Mean annual earnings in the mid-twenties, children younger than 13 at assignment (dollars) | 12,000 | 12,600 | 14,400 |\n| Mean annual earnings in the mid-twenties, children aged 13–18 at assignment (dollars) | 12,000 | 11,700 | 11,300 |',
    questions: [
      {
        question: 'Which statement about food deserts is best supported by Table 1?',
        options: [
          'They are common only in the areas where the poverty rate of Black residents is high',
          'They are more common in the highly segregated areas, at either level of group poverty',
          'They are about equally common in all four areas, whatever the level of segregation',
          'They are more common in the moderately segregated areas, at either level of group poverty',
        ],
        correctAnswer: 1,
        explanation:
          'The share of low-income tracts with no supermarket nearby is 38% and 34% in the two areas with an index above 60 (W and Y) and 14% and 12% in the two areas with an index near 40 (X and Z), and this holds whether the group poverty rate is 28% or 12%. Area Y has a low poverty rate yet a high share of such tracts, so a high poverty rate is not required. The four values are far from equal. The moderately segregated areas have the lowest values in the column, not the highest.',
        skill: '10A data interpretation: segregation and food deserts',
      },
      {
        question:
          'Area Y is nearly as segregated as area W, yet a far smaller share of its poor Black residents live in high-poverty tracts. Which explanation is most consistent with Table 1?',
        options: [
          'Black residents of area Y are spread evenly over its tracts, so that poverty is spread evenly too',
          'Poor residents of area Y live nearer to supermarkets, so that fewer of its tracts are classed as poor',
          'Poor residents of area Y are counted as concentrated only when their tract is more than 60% poor',
          'Few Black residents of area Y are poor, so that the tracts they live in seldom reach 40% poverty',
        ],
        correctAnswer: 3,
        explanation:
          'Segregation confines a group to a limited set of tracts, and those tracts take on the poverty rate of the group that lives in them; with a group poverty rate of 12% in area Y, compared with 28% in area W, few of its segregated tracts cross the 40% line. An index of 76 means that Black residents of area Y are far from evenly spread. Supermarket access is poor in area Y (34% of low-income tracts lack one), and distance to a store does not determine whether a tract is classed as high-poverty. The 40% definition of a high-poverty tract applies to all four areas alike; 60 is a cutoff for the dissimilarity index.',
        skill: '10A residential segregation and concentrated poverty',
      },
      {
        question:
          'Table 2 compares the three groups as they were assigned. In light of the first row of the table, and compared with an analysis limited to the families that moved, this approach:',
        options: [
          'keeps the groups comparable but probably understates the effect of moving',
          'keeps the groups comparable but probably overstates the effect of moving',
          'lets the groups differ in motivation and so overstates the effect of moving',
          'lets the groups differ in motivation and so understates the effect of moving',
        ],
        correctAnswer: 0,
        explanation:
          'Random assignment made the three groups alike on average, and comparing them as assigned preserves that equivalence; because only 48% of the low-poverty voucher group and 62% of the unrestricted group moved, each voucher group’s averages include many families that never left, and any effect of moving is diluted. The comparison cannot overstate the effect of moving, since non-movers pull the group average toward the control value. It is the alternative analysis, restricted to movers, that would let motivation differ between groups, because families that manage to use a voucher are self-selected. Comparing by assignment is the approach that avoids that problem, so it does not introduce a difference in motivation in either direction.',
        skill: '10A research design: analysis by assigned group',
      },
      {
        question: 'Which interpretation of the two earnings rows of Table 2 is best supported?',
        options: [
          'A move raised children’s later earnings mainly by raising the employment of their parents',
          'A move to a low-poverty tract helped children of every age, and adolescents most of all',
          'A move to a low-poverty tract helped more when a larger part of childhood was spent there',
          'A move helped in proportion to the value of the subsidy, wherever the family chose to live',
        ],
        correctAnswer: 2,
        explanation:
          'Children assigned to the low-poverty voucher group before age 13 later earned about 2,400 dollars a year more than controls, whereas those assigned at 13 to 18 earned slightly less than controls, which fits a benefit that accumulates with years of childhood spent in the new neighborhood. Adult employment was 52% to 53% in every group, so parental employment cannot be the route. Adolescents showed no gain, so the benefit did not extend to every age. The two vouchers had the same value, yet the unrestricted voucher produced a much smaller gain for young children, so the place and not the subsidy made the difference.',
        skill: '10A neighborhood effects: childhood exposure',
      },
    ],
  },

  // ────────────────────────────────────────────────────────────────────────
  // 8. PERSONALITY/DISORDERS — information passage: normal cognitive aging,
  //    mild vs major neurocognitive disorder, Alzheimer’s disease, Parkinson’s
  //    disease, Korsakoff syndrome, delirium
  // ────────────────────────────────────────────────────────────────────────
  {
    id: 'fl7-ps-b-08',
    section: 'psych-soc',
    discipline: 'personality-and-disorders',
    title: 'When Forgetting Is Not Ordinary Aging',
    passageText:
      'Some change in cognition is a normal part of growing old. Healthy adults in their seventies process information more slowly than they did at thirty, take longer to learn new procedures, and more often fail to retrieve a name that comes back to them later. Vocabulary and general knowledge hold steady, and the person continues to manage money, medications, and travel without help. A neurocognitive disorder is diagnosed when cognition has declined from the person’s own earlier level by more than aging explains. The disorder is called mild when the decline is measurable but the person remains independent in everyday activities, and major, or dementia, when the decline interferes with that independence.\n\nAlzheimer’s disease is the most common cause of dementia. Its onset is insidious, and its course is gradual and progressive over years. The earliest sign is usually difficulty forming new memories of events, which corresponds to early damage in the hippocampus and neighboring cortex of the medial temporal lobe; memories from decades earlier and well-practiced skills are spared until late. As the disease spreads through the cortex, language, spatial orientation, and judgment deteriorate. The brain shows extracellular plaques of beta-amyloid, tangles of tau protein within neurons, and a loss of acetylcholine-releasing neurons that project from the basal forebrain to the cortex. Drugs that inhibit acetylcholinesterase, the enzyme that breaks down acetylcholine in the synapse, yield modest improvement in some patients for a limited time.\n\nParkinson’s disease begins as a disorder of movement. Dopamine-releasing neurons of the substantia nigra, which project to the rest of the basal ganglia, degenerate, and the result is tremor at rest, muscular rigidity, slowness in initiating movement, and unstable posture. Many patients develop cognitive impairment years after the motor signs appear; it typically affects planning and attention before memory.\n\nKorsakoff syndrome follows a deficiency of thiamine (vitamin B1), most often in people with prolonged heavy alcohol use and poor nutrition. Damage is concentrated in the mammillary bodies and the medial thalamus. Patients cannot form lasting new memories and have patchy loss of older ones, and many confabulate: they fill the gaps with invented accounts that they believe to be true. Reasoning, vocabulary, and attention are comparatively preserved. If the patient stops drinking and thiamine is replaced, the condition does not advance, although the memory deficit that has developed is frequently permanent.\n\nDelirium differs from all of these. It develops over hours or days, fluctuates through the day, and is marked above all by a disturbance of attention and awareness: the patient cannot follow a conversation, may be drowsy or agitated, and often has visual hallucinations. Delirium is a consequence of another medical problem, such as infection, dehydration, drug toxicity, drug withdrawal, or recent surgery, and it usually resolves when the cause is treated. Because people with dementia are especially vulnerable to delirium, the two conditions frequently coexist, and distinguishing a new delirium from the dementia beneath it is a common clinical problem.',
    questions: [
      {
        question:
          'An 81-year-old man is brought to an emergency department disoriented and unable to say what day it is. Which piece of information would be most useful for deciding whether he has delirium or only the dementia of Alzheimer’s disease?',
        options: [
          'His score on a test of vocabulary and general knowledge',
          'His ability to describe events from his early adulthood',
          'His family’s history of memory disorders in late life',
          'His family’s report of how he was functioning last week',
        ],
        correctAnswer: 3,
        explanation:
          'The two conditions are separated chiefly by time course: delirium arises within hours or days, whereas Alzheimer’s disease advances over years, so learning that he was oriented and managing a week ago would point to delirium, and learning of a long decline would point to dementia. Vocabulary and general knowledge are preserved in normal aging and until late in Alzheimer’s disease, and a delirious patient may be unable to attend to the test at all, so the score would not discriminate. Memories of early adulthood are likewise spared early in Alzheimer’s disease. A family history bears on long-term risk, not on what is happening today.',
        skill: '7A delirium vs dementia: time course',
      },
      {
        question:
          'Which explanation best accounts for the fact that acetylcholinesterase inhibitors give only modest and temporary benefit in Alzheimer’s disease?',
        options: [
          'They prolong the action of acetylcholine from surviving neurons but do not stop further neuronal loss',
          'They block the receptors for acetylcholine and so add to the deficit produced by neuronal loss',
          'They clear the plaques that lie outside neurons but leave the tangles that form inside them',
          'They restore dopamine signaling in the basal ganglia but do not act on the hippocampus',
        ],
        correctAnswer: 0,
        explanation:
          'Inhibiting the enzyme that degrades acetylcholine lets each released molecule act longer, which compensates in part for the shrinking number of cholinergic neurons; because the neurons continue to die, there is progressively less transmitter to preserve and the benefit fades. The drugs inhibit an enzyme and do not block receptors, and blocking receptors would worsen cognition from the start. They have no action on beta-amyloid plaques or tau tangles. Dopamine loss in the basal ganglia is the lesion of Parkinson’s disease, not the target of these drugs.',
        skill: '7A Alzheimer’s disease: cholinergic treatment (reasoning)',
      },
      {
        question:
          'A 56-year-old man with a long history of heavy drinking cannot remember anything that has happened since his admission to hospital and gives a detailed, false account of how he spent the previous day. He stops drinking and receives thiamine. Two years later, compared with a patient whose Alzheimer’s disease was diagnosed at the same time, he is most likely to show:',
        options: [
          'a full recovery of memory, while the other patient is unchanged',
          'a wider loss of language and judgment than the other patient',
          'a stable memory deficit, while the other patient is worse',
          'a tremor at rest and a rigidity that the other patient lacks',
        ],
        correctAnswer: 2,
        explanation:
          'His amnesia with confabulation after heavy alcohol use is Korsakoff syndrome, which stops advancing once drinking ends and thiamine is replaced but usually leaves the existing memory deficit in place; Alzheimer’s disease progresses, so the other patient will have declined over the same two years. Full recovery is unlikely because the damage already done is frequently permanent, and an Alzheimer’s patient does not remain unchanged. Spreading loss of language and judgment describes the cortical progression of Alzheimer’s disease, whereas reasoning and vocabulary are comparatively preserved in Korsakoff syndrome. Resting tremor and rigidity are signs of Parkinson’s disease.',
        skill: '7A Korsakoff syndrome: course compared with Alzheimer’s disease',
      },
      {
        question:
          'In the 1980s, several young adults injected a contaminated synthetic drug containing a compound that selectively destroys the dopamine-releasing neurons of the substantia nigra. Soon afterward, these patients would be expected to show:',
        options: [
          'inability to form new memories, with invented accounts of recent events',
          'slowed, rigid movement and tremor, with memory for recent events intact',
          'fluctuating attention and visual hallucinations, clearing within a week',
          'gradual loss of recent memories, followed by trouble in finding words',
        ],
        correctAnswer: 1,
        explanation:
          'Loss of the nigral dopamine neurons is the lesion of Parkinson’s disease, so the patients would develop its motor signs, while memory, which depends on other structures, would be unaffected at first. Amnesia with confabulation is Korsakoff syndrome, produced by thiamine deficiency and damage to the mammillary bodies and medial thalamus. Fluctuating attention with hallucinations that resolves is delirium, a reversible consequence of a medical disturbance and not of selective cell loss. Gradual loss of recent memory followed by language difficulty is the course of Alzheimer’s disease, which begins in the medial temporal lobe.',
        skill: '7A Parkinson’s disease: nigral dopamine loss',
      },
      {
        question: 'Which change in a 76-year-old woman is LEAST consistent with normal aging?',
        options: [
          'She needs more sessions than her grandson to learn to use a new telephone',
          'She cannot recall a neighbor’s name at a party but remembers it that evening',
          'She takes longer than she once did to add a column of figures by hand',
          'She loses her way driving home from a shop that she has used for years',
        ],
        correctAnswer: 3,
        explanation:
          'Becoming lost on a long-familiar route is a failure of spatial orientation that threatens independent travel, which normal aging leaves intact and which is characteristic of a neurocognitive disorder. Needing more practice to learn a new device reflects the slower learning of new procedures that accompanies healthy aging. A name that cannot be retrieved at the moment but returns later is the ordinary retrieval lapse of older adults, since the memory itself was not lost. Slower mental arithmetic reflects reduced processing speed, also a normal change.',
        skill: '7A normal aging vs neurocognitive disorder',
      },
    ],
  },

  // ────────────────────────────────────────────────────────────────────────
  // 9. SOCIAL PSYCHOLOGY — information passage: groupthink (antecedents,
  //    symptoms, remedies), minority influence, social identity inside teams
  // ────────────────────────────────────────────────────────────────────────
  {
    id: 'fl7-ps-b-09',
    section: 'psych-soc',
    discipline: 'social-psychology',
    title: 'Agreement, Dissent, and the Quality of Group Decisions',
    passageText:
      'Organizations hand their most important decisions to groups on the assumption that several minds will catch what one would miss. The assumption often fails. In analyses of political and corporate fiascoes, the psychologist Irving Janis described groupthink, a mode of deliberation in which the members’ desire for agreement overrides their appraisal of alternatives. Groupthink is most likely in a highly cohesive group that is insulated from outside opinion, led by someone who makes his or her own preference known early, and working under pressure. Its symptoms fall into three clusters. The group overestimates itself, believing that it cannot fail and that its cause is beyond moral question. It closes its mind, explaining away warnings and holding stereotyped views of rivals. And it presses toward uniformity: members censor their own doubts, silence is read as consent so that an illusion of unanimity arises, dissenters are pressured directly, and self-appointed “mindguards” keep troubling information from reaching the group. The result is a defective process, in which few alternatives are examined, the risks of the preferred option go unexplored, and no fallback plan is prepared.\n\nJanis proposed remedies that follow from this analysis. The leader should withhold an opinion until others have spoken. Outside experts should be invited to challenge the group’s assumptions. The group may be divided into subgroups that deliberate separately and then compare conclusions, and after a tentative decision a further meeting should be held at which members are expected to air remaining doubts. One member may also be assigned to act as a devil’s advocate.\n\nResearch on minority influence suggests why disagreement helps and when it succeeds. A numerical minority cannot rely on the pressures that favor a majority, yet it can change the group’s position if it maintains its view consistently over time and appears confident without appearing dogmatic. A minority that wavers is dismissed, and so is one that seems rigid. The change a minority produces also differs in kind: members who face persistent dissent tend to reexamine the issue itself, and they consider a wider range of possibilities, including ones the minority never proposed. This benefit has been observed even when the minority’s own position is mistaken. There is evidence, however, that a member assigned to play the dissenter stimulates less of this reexamination than one who is known to disagree sincerely.\n\nSocial identity adds a further consideration. People derive part of their self-concept from the groups to which they belong, and they favor fellow members over outsiders. Within a team, criticism is received more openly from a member than from an outsider who makes the same point, apparently because the member is presumed to have the group’s interests at heart. Members who identify strongly with a team are the ones most motivated to act as its norms prescribe. Whether strong identification stifles dissent or encourages it therefore depends on what the team’s norms are.',
    questions: [
      {
        question:
          'A review of a failed product launch finds that every member of the planning team had private doubts, that the team leader had expressed no preference, and that each member took the others’ silence to mean that they approved. Which remedy would most directly have addressed this team’s problem?',
        options: [
          'Asking the leader to speak last at each meeting',
          'Adding two members drawn from the same department',
          'Collecting written opinions privately before discussion',
          'Reminding the members of the team’s earlier successes',
        ],
        correctAnswer: 2,
        explanation:
          'The team’s failure was an illusion of unanimity built on self-censorship: doubts existed but were invisible, and gathering each member’s view privately before discussion would have revealed that the doubts were shared. Having the leader speak last addresses a leader who steers the group, but this leader had stated no preference. New members from the same department would bring no outside perspective and would face the same silence. Recalling past successes would feed the group’s overestimation of itself, one of the symptoms of groupthink, and would make doubts harder to voice.',
        skill: '8B groupthink: matching a remedy to a symptom',
      },
      {
        question:
          'One member of a five-person hiring committee believes that the committee’s favored candidate is the wrong choice. According to the passage, which approach gives her the best chance of changing her colleagues’ views?',
        options: [
          'Raising a new objection at each meeting, so that no single one can be rebutted',
          'Holding one position across meetings while engaging with the replies it draws',
          'Repeating one position in identical words, whatever her colleagues say in reply',
          'Siding with the majority at first, so as to gain trust before she objects later',
        ],
        correctAnswer: 1,
        explanation:
          'A minority persuades when it is consistent over time and confident without seeming dogmatic, and a member who keeps the same position while answering her colleagues’ arguments meets both conditions. Shifting from one objection to another is the wavering that leads a minority to be dismissed. Repeating a position in the same words regardless of what is said shows consistency but also the rigidity that the passage says undermines a minority. Agreeing first and objecting later sacrifices consistency over time, the feature on which minority influence depends.',
        skill: '8B minority influence: consistency without rigidity',
      },
      {
        question:
          'Researchers had four-person groups solve a problem. In every group one member, a trained confederate, argued for an unpopular solution from the same script. Half of the groups, chosen at random, were told that this member had been instructed to disagree; the others were told nothing. Judges unaware of condition counted the solutions each group proposed, and the groups that were told nothing proposed more. Which feature of the design most directly permits the difference to be attributed to the dissenter’s perceived sincerity and not to the content of the dissent?',
        options: [
          'The use of one script in both conditions',
          'The random assignment of groups to conditions',
          'The judges’ unawareness of each group’s condition',
          'The inclusion of four members in every group',
        ],
        correctAnswer: 0,
        explanation:
          'Because the confederate delivered the same arguments in both conditions, what was said cannot explain why one set of groups produced more solutions; only the belief about why the member was dissenting differed. Random assignment makes the groups comparable in their members’ abilities and so rules out preexisting differences, but it does not equate the dissent itself. Keeping the judges unaware of condition prevents biased counting of solutions, a matter of measurement. Holding group size constant removes size as an explanation but again says nothing about the content of the arguments.',
        skill: '8B research design: holding message content constant',
      },
      {
        question:
          'Two surgical teams are equally cohesive. Team 1 takes pride in the motto “anyone can stop the operation,” and Team 2 in the motto “we never second-guess each other.” Based on the final paragraph, in which team would the most strongly identified members be most likely to voice a doubt about a plan, and why?',
        options: [
          'Team 2, because its cohesion makes members feel secure enough to disagree',
          'Team 1, because strongly identified members care least about approval',
          'Neither team, because strong identification always suppresses dissent',
          'Team 1, because strongly identified members follow their team’s norm most closely',
        ],
        correctAnswer: 3,
        explanation:
          'Strong identifiers are the members most motivated to do what their team’s norms call for, and Team 1’s norm calls for speaking up, so on that team identification promotes voicing doubts. The teams are equally cohesive, so cohesion cannot distinguish them, and Team 2’s norm discourages questioning. Strongly identified members care more, not less, about their standing as good members; they speak up on Team 1 because doing so is what a good member does. The claim that identification always suppresses dissent ignores the passage’s point that its effect depends on the content of the norm.',
        skill: '8A social identity: identification and team norms',
      },
      {
        question:
          'A city council’s decision to build a stadium turned out badly. Which finding about the council’s deliberations would count AGAINST attributing the outcome to groupthink?',
        options: [
          'Members who had reservations chose not to raise them during the meetings',
          'Members debated three sites at length and heard from invited outside critics',
          'Members described opponents of the stadium as ignorant and self-interested',
          'Members made no plan for what to do if construction costs exceeded estimates',
        ],
        correctAnswer: 1,
        explanation:
          'Groupthink is a defect of process, marked by insulation from outsiders and a failure to weigh alternatives, so a council that argued over several sites and listened to outside critics did not show it, and its bad outcome must have another cause. Withholding reservations is self-censorship, a symptom of the pressure toward uniformity. Dismissing opponents as ignorant and self-interested is a stereotyped view of rivals. Failing to prepare for cost overruns is the absence of a fallback plan, one of the defects in decision making that groupthink produces.',
        skill: '8B groupthink: process vs outcome',
      },
    ],
  },

  // ────────────────────────────────────────────────────────────────────────
  // 10. SOCIOLOGY — information passage: formal organizations (coercive,
  //     utilitarian, normative), Weber’s ideal-type bureaucracy,
  //     rationalization, informal structure, bureaucratic ritualism; a
  //     hospital as the running example
  // ────────────────────────────────────────────────────────────────────────
  {
    id: 'fl7-ps-b-10',
    section: 'psych-soc',
    discipline: 'sociology',
    title: 'The Hospital as a Bureaucracy',
    passageText:
      'A formal organization is a group deliberately created to pursue specific goals, with explicit rules about who does what. One classification sorts such organizations by the reason their members take part. In a coercive organization, members are held against their will, as in a prison. In a utilitarian organization, members participate in return for pay or some other material benefit. In a normative organization, members join voluntarily to pursue a goal that they regard as worthwhile in itself, as in a charity or a civic association. A single institution may be all three for different people.\n\nLarge organizations of every kind tend toward bureaucracy. Max Weber analyzed bureaucracy by constructing an ideal type: a model that assembles the characteristic features of a phenomenon in their purest form. An ideal type is neither a description of any existing organization nor a recommendation; it is a measuring device against which real cases can be compared. In Weber’s model, offices are arranged in a hierarchy, with each level supervising the one below. Work is divided among specialists. Conduct is governed by written rules, and decisions are recorded in files. Officials deal with cases impersonally, applying the same rules to everyone without regard to personal ties. Positions are filled and promotions awarded according to technical qualifications.\n\nWeber regarded bureaucracy as the organizational form of a broader historical process that he called rationalization: the displacement of tradition, sentiment, and personal loyalty by the deliberate calculation of the most efficient means to a given end. He considered bureaucracy technically superior to earlier forms of administration, and he also feared that it would confine people in a routine that left little room for individual judgment.\n\nA modern hospital displays every element of the model. A chain of command runs from the board through department heads to the staff on each ward; a patient may be seen by a dozen kinds of specialist; protocols dictate the order in which patients are assessed; every action is entered in the chart; and no one may practice without verified credentials. Yet no hospital runs by its formal structure alone. Alongside the official chart of positions there grows an informal structure of friendships, favors, and unwritten understandings. Experienced staff know which rules can safely be bent and whom to telephone when the official channel is slow. Informal ties can advance the organization’s goals, and they can also be used to shield members from them.\n\nBureaucracies have characteristic failings as well. The sociologist Robert Merton described bureaucratic ritualism, in which officials come to treat compliance with the rules as an end in itself and lose sight of the purposes that the rules were written to serve. Because officials are rewarded for following procedure and punished for departing from it, the safest course for the individual is often the one that defeats the organization’s aim.',
    questions: [
      {
        question:
          'A hospital pays a nurse a salary, relies on a retired teacher who staffs its information desk without pay because she believes in its mission, and houses a patient committed by court order. For the teacher and for the patient, respectively, the hospital is which type of organization?',
        options: [
          'Normative and coercive',
          'Utilitarian and coercive',
          'Normative and utilitarian',
          'Coercive and normative',
        ],
        correctAnswer: 0,
        explanation:
          'The teacher takes part voluntarily and without material reward because she values the goal, which makes the hospital a normative organization for her, and the committed patient is held against his will, which makes it a coercive organization for him. The hospital is utilitarian only for those who take part in exchange for pay, such as the nurse, so neither the teacher nor the patient fits that type. Reversing the two terms would have the unpaid volunteer held by force and the committed patient joining out of conviction.',
        skill: '9A types of formal organizations: coercive, utilitarian, normative',
      },
      {
        question: 'Which incident at a hospital is the clearest example of bureaucratic ritualism?',
        options: [
          'A nurse skips a required second check of a drug dose in order to finish her round on time',
          'A department head passes over a qualified applicant in order to appoint his own nephew',
          'A committee replaces handwritten drug orders with a standard electronic form to cut errors',
          'A clerk holds up a bleeding patient’s treatment until every line of a billing form is filled in',
        ],
        correctAnswer: 3,
        explanation:
          'Ritualism is devotion to procedure at the expense of the purpose the procedure serves, and a clerk who lets a billing form take precedence over urgent care has put the rule above the hospital’s aim of treating patients. A nurse who skips a required check is departing from the rules, the opposite of clinging to them. Appointing a nephew over a qualified applicant violates impersonality and selection by qualification, but it is favoritism, not excessive rule-following. Standardizing drug orders to reduce errors is a rule adopted in service of the organization’s goal.',
        skill: '9A bureaucratic ritualism',
      },
      {
        question:
          'During a labor dispute, the staff of a radiology department begin to follow every written procedure exactly and stop using personal contacts to speed requests. No rule is broken, yet the waiting time for scans doubles. This outcome most strongly suggests that:',
        options: [
          'the department’s written procedures had been designed to keep waiting times long',
          'the department’s staff had been appointed without regard to qualifications',
          'the department’s usual output had depended on its unofficial arrangements',
          'the department’s hierarchy had too few levels to supervise the work properly',
        ],
        correctAnswer: 2,
        explanation:
          'When the staff withdrew their shortcuts and personal contacts and relied on the formal procedures alone, performance fell, which shows that the informal structure had been carrying part of the department’s work. Nothing suggests that the procedures were written in order to slow the work; they were simply insufficient by themselves. The same staff, with the same qualifications, had produced shorter waits before the dispute. The number of supervisory levels did not change, so it cannot explain a change in waiting time.',
        skill: '9A informal structure of organizations',
      },
      {
        question: 'Which change at a hospital best illustrates rationalization as Weber used the term?',
        options: [
          'A new wing is named for the family that founded the hospital a century ago',
          'A discharge formula based on outcome data replaces each physician’s habitual practice',
          'A senior surgeon is given the best operating times out of respect for long service',
          'A group of night nurses agree among themselves to cover one another’s breaks',
        ],
        correctAnswer: 1,
        explanation:
          'Rationalization is the replacement of custom and personal judgment by calculated, efficient means to a defined end, and a data-based discharge formula that supersedes each physician’s habits is such a replacement. Naming a wing for the founding family honors tradition and sentiment. Awarding operating times out of respect for seniority follows personal loyalty and custom, not a calculation of efficiency. Nurses who arrange among themselves to cover breaks are creating informal structure, which lies outside the organization’s official rules.',
        skill: '9A rationalization (Weber)',
      },
    ],
  },
]

export const FL7_PSYCH_SOC_B_DISCRETES: MCATDiscreteQuestion[] = [
  {
    id: 'fl7-ps-b-d01',
    section: 'psych-soc',
    discipline: 'sensation-and-perception',
    question:
      'In the somatosensory cortex, the amount of tissue devoted to a body region reflects the density of touch receptors in that region, not its physical size. On a fingertip, two points pressed against the skin can be told apart when they are only a few millimeters apart. The two-point threshold would be expected to be nearly as small on the:',
    options: ['upper back', 'thigh', 'lips', 'forearm'],
    correctAnswer: 2,
    explanation:
      'The lips, like the fingertips, are densely supplied with touch receptors that have small receptive fields, and they occupy a disproportionately large part of the somatosensory homunculus, so two nearby points are resolved there almost as well as on a fingertip. The upper back, thigh, and forearm are large regions with sparse receptors, large receptive fields, and small cortical representations, and their two-point thresholds are several times greater, on the order of centimeters.',
    skill: '6A somatosensory homunculus and two-point threshold',
  },
  {
    id: 'fl7-ps-b-d02',
    section: 'psych-soc',
    discipline: 'learning-and-memory',
    question:
      'Students studied a word list either in silence or with background noise and were tested the next day either in silence or with noise. Mean recall was 68% (silent study, silent test), 52% (silent study, noisy test), 51% (noisy study, silent test), and 67% (noisy study, noisy test). These results best support the conclusion that recall depends on:',
    options: [
      'the match between the conditions at study and the conditions at test',
      'the absence of distraction while the material is being studied',
      'the absence of distraction while the material is being retrieved',
      'the amount of effort that noise forces students to expend',
    ],
    correctAnswer: 0,
    explanation:
      'Recall was high in the two groups whose test conditions matched their study conditions (68% and 67%) and low in the two whose conditions differed (52% and 51%), the pattern predicted by encoding specificity, according to which cues present at encoding aid retrieval when they are present again. Silent study did not help by itself, since silent study followed by a noisy test gave 52%. A silent test did not help by itself, since noisy study followed by a silent test gave 51%. An account based on the effort that noise demands would predict a uniform effect of noise, yet noise at both stages gave recall as high as silence at both.',
    skill: '6B encoding specificity: context-dependent memory',
  },
  {
    id: 'fl7-ps-b-d03',
    section: 'psych-soc',
    discipline: 'cognition-and-perception',
    question:
      'The strong form of the Sapir–Whorf hypothesis, linguistic determinism, holds that people cannot think about distinctions that their language does not encode. Which finding most directly contradicts it?',
    options: [
      'Speakers of a language that locates objects by compass direction keep track of north unusually well',
      'Speakers of a language with grammatical gender describe objects in gender-typical terms',
      'Speakers of two languages report that they reason somewhat differently in each of them',
      'Speakers of a language with no verb tenses reason accurately about past and future events',
    ],
    correctAnswer: 3,
    explanation:
      'If language strictly determined thought, speakers whose grammar does not mark tense could not distinguish past from future in their reasoning; finding that they do so accurately shows that a concept can be held without being encoded in the language. Superior tracking of direction among speakers who use compass terms, gender-typical descriptions among speakers of gendered languages, and bilinguals’ reports of reasoning differently in each language are all cases in which language appears to shape thought, so they support linguistic relativity and do nothing to contradict the stronger claim.',
    skill: '6B linguistic determinism vs relativity (evaluating evidence)',
  },
  {
    id: 'fl7-ps-b-d04',
    section: 'psych-soc',
    discipline: 'biological-basis-of-behavior',
    question:
      'In a healthy animal, three drugs each increase signaling at dopamine synapses. Drug 1 blocks the transporter that returns dopamine to the presynaptic terminal, Drug 2 binds to and activates postsynaptic dopamine receptors, and Drug 3 inhibits the enzyme that degrades dopamine. In an animal whose dopamine-releasing terminals have been destroyed by a toxin but whose postsynaptic receptors remain, which of the drugs would still increase dopamine signaling?',
    options: ['Drug 1 only', 'Drug 2 only', 'Drugs 1 and 3 only', 'Drugs 2 and 3 only'],
    correctAnswer: 1,
    explanation:
      'Drug 2 is a receptor agonist: it activates the postsynaptic receptor directly and so needs no dopamine from the presynaptic neuron. Drug 1 is a reuptake inhibitor, which acts by keeping released dopamine in the synapse longer, and Drug 3 slows the breakdown of dopamine; both merely amplify transmitter that the terminals release, so with the terminals gone neither has anything to act on. Any answer that includes Drug 1 or Drug 3 therefore fails. An antagonist, by contrast with all three, would occupy the receptor without activating it and reduce signaling.',
    skill: '6A drug action: direct agonist vs reuptake inhibitor',
  },
  {
    id: 'fl7-ps-b-d05',
    section: 'psych-soc',
    discipline: 'sociology',
    question:
      'Members of a motorcycle club wear a distinctive uniform, use slang of their own, and spend most weekends riding together. Nearly all of them hold regular jobs, vote, and raise families. A sociologist would classify the club as a subculture, and not as a counterculture, because its members:',
    options: [
      'are too few in number to have any influence on the dominant culture',
      'share symbols and a vocabulary that outsiders do not understand',
      'keep distinctive practices without rejecting the dominant values',
      'joined the group by choice and were not born into its membership',
    ],
    correctAnswer: 2,
    explanation:
      'A subculture has practices and symbols that set it apart while its members continue to accept the central values and institutions of the wider society, as the club’s members do by working, voting, and raising families; a counterculture defines itself in opposition to those values. Size does not separate the two, since a counterculture may be small and a subculture large. Distinctive symbols and vocabulary are found in both and so cannot distinguish them. Voluntary membership is likewise common to both kinds of group.',
    skill: '9A subculture vs counterculture (defining criterion)',
  },
  {
    id: 'fl7-ps-b-d06',
    section: 'psych-soc',
    discipline: 'sociology',
    question:
      'A man who served a prison sentence ten years ago is now an electrician, a father, and a volunteer youth coach. Which observation would best indicate that “former prisoner” functions as his master status?',
    options: [
      'Employers, neighbors, and team parents all respond to him chiefly in light of his record',
      'His coaching schedule regularly clashes with the hours that his employer expects him to work',
      'He acquired the status through his own actions and was not assigned it at birth',
      'He feels torn between being strict with his players and being a friend to them',
    ],
    correctAnswer: 0,
    explanation:
      'A master status is the one that overrides a person’s other statuses in shaping how others perceive and treat him across settings, so the telling evidence is that people in his working life, his neighborhood, and his coaching all respond to the record first. A clash between coaching and working hours is role conflict, a collision between the demands of two statuses. Acquiring a status through one’s own actions makes it achieved as opposed to ascribed, which says nothing about whether it dominates. Being torn between strictness and friendliness as a coach is role strain, competing expectations within a single status.',
    skill: '9A master status (identifying evidence)',
  },
  {
    id: 'fl7-ps-b-d07',
    section: 'psych-soc',
    discipline: 'sociology',
    question:
      'A country’s population pyramid has bars of nearly equal width from birth to age 60, except for a pronounced bulge at ages 25–39 that is much larger on the male side than on the female side. The bulge is most likely the result of:',
    options: [
      'a period of unusually high fertility that ended about 25 years ago',
      'a war that raised mortality among young men about 25 years ago',
      'a decline in fertility that began within the past five years',
      'an inflow of labor migrants, most of them men of working age',
    ],
    correctAnswer: 3,
    explanation:
      'A surplus confined to young working ages and concentrated on the male side is the signature of labor migration, because migrants arrive as adults and, in many labor flows, are predominantly men. A past period of high fertility would produce a bulge of about equal size on both sides, since boys and girls are born in nearly equal numbers. A war that killed young men would leave a deficit, not a surplus, on the male side, and in cohorts now older than 39. A recent decline in fertility would narrow the youngest bars at the base and would not alter the bars for adults.',
    skill: '9B reading a population pyramid',
  },
]
