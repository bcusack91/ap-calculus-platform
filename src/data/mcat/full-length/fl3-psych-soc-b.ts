/**
 * MCAT Full-Length Form 3 — Psych/Soc section, file B (passages 6–10 + 7
 * discretes). Built to the 2026-09-29 blueprint: 400–600-word passages, an
 * information/experiment mix, AAMC skill proportions, keys that require using
 * the passage rather than matching its wording, parallel-length options, and
 * key positions balanced across the file. Topics are deliberately distinct
 * from Forms 1 and 2 (fl1-psych-soc-*, fl2-psych-soc-*).
 *
 * KEY INVARIANT: the passage runner does NOT shuffle options — keys were
 * authored position-balanced and explanations reference options by CONTENT,
 * so options can be reordered only via scripts/rebalance-passage-keys.ts.
 */
import type { MCATPassage, MCATDiscreteQuestion } from '../types'

export const FL3_PSYCH_SOC_B_PASSAGES: MCATPassage[] = [
  // ────────────────────────────────────────────────────────────────────────
  // 6. PERSONALITY — experiment, table: Big Five short-form reliability and
  //    validity; twin-study heritability (Falconer), equal environments
  // ────────────────────────────────────────────────────────────────────────
  {
    id: 'fl3-ps-b-06',
    section: 'psych-soc',
    discipline: 'personality-and-disorders',
    title: 'A Short Big Five Inventory: Reliability, Validity, and Twin Resemblance',
    passageText:
      'The five-factor model describes personality in terms of five broad traits: openness to experience, conscientiousness, extraversion, agreeableness, and neuroticism. Each trait is a dimension along which people vary continuously, and each is measured by asking respondents how well a set of statements describes them. Because such inventories are used in health research, for example to study which patients keep up with long-term treatment, investigators must show that a scale is reliable, meaning that it yields consistent scores, and valid, meaning that it measures what it claims to measure.\n\nResearchers developed a 40-item short form of a widely used 240-item Big Five inventory, with 8 items per trait. In Study 1, 600 adults completed the short form twice, four weeks apart, and completed the full-length inventory at the first session. Three indices were computed for each trait scale. Internal consistency, reported as coefficient alpha, reflects how strongly the items within a scale correlate with one another; it is high when all of the items tap the same characteristic. Test–retest reliability is the correlation between scores obtained at the two sessions. The correlation between each short-form scale and the corresponding full-length scale was taken as evidence of convergent validity. The investigators noted that a scale’s correlation with any other measure is limited by the reliability of both measures, because inconsistent scores cannot correlate strongly with anything. In a follow-up, the conscientiousness scores of 200 adults beginning treatment for hypertension were compared with pharmacy refill records collected over the next year; higher scores went with more complete refilling, whereas scores on the other four scales were essentially unrelated to refilling.\n\nIn Study 2, the short form was given to 450 pairs of monozygotic (MZ) twins and 450 pairs of same-sex dizygotic (DZ) twins, all of whom had been raised together in the same household. MZ twins share essentially all of their genes, whereas DZ twins share on average half of the genes that vary among people; both kinds of twins share a family environment. When MZ pairs resemble each other more than DZ pairs do, the difference is attributed to genetic influence. Heritability, the proportion of the variation in a trait within a population that is associated with genetic variation among its members, was estimated as twice the difference between the MZ and DZ twin correlations. The contribution of the shared family environment was estimated as the MZ correlation minus the heritability estimate. The remaining variation, one minus the MZ correlation, was attributed to the nonshared environment, meaning experiences that differ between the members of a pair, together with measurement error.\n\nThis method rests on the equal environments assumption: that MZ and DZ twins raised together are exposed to equally similar environments with respect to the trait being studied. Table 1 presents the results of both studies.',
    figure:
      '**Table 1. Psychometric properties of the short form (Study 1) and twin correlations (Study 2)**\n\n| Trait | Internal consistency (alpha) | Test–retest r (4 weeks) | r with full-length scale | MZ twin r | DZ twin r |\n|---|---|---|---|---|---|\n| Openness | .80 | .85 | .87 | .54 | .27 |\n| Conscientiousness | .82 | .86 | .88 | .48 | .24 |\n| Extraversion | .84 | .88 | .90 | .52 | .26 |\n| Agreeableness | .58 | .81 | .69 | .40 | .20 |\n| Neuroticism | .81 | .84 | .86 | .50 | .25 |',
    questions: [
      {
        question:
          'Using the method described in the passage, the estimated heritability of conscientiousness is closest to:',
        options: ['0.24', '0.48', '0.54', '0.68'],
        correctAnswer: 1,
        explanation:
          'Heritability was estimated as twice the difference between the MZ and DZ correlations: 2 × (.48 − .24) = 2 × .24 = .48. The value .24 is the difference before doubling. The value .54 is one minus the MZ correlation, the estimate for the nonshared environment plus error. The value .68 is simply the sum of the two twin correlations, which has no meaning in this method.',
        skill: '7A heritability calculation from twin correlations',
      },
      {
        question: 'The pattern of results for the agreeableness scale in Study 1 is best explained by which conclusion?',
        options: [
          'Many respondents’ agreeableness scores shifted substantially over the four weeks',
          'The agreeableness items measure a trait largely unrelated to the full-length scale',
          'Agreeableness is less heritable than the other traits, which lowers its reliability',
          'The items yield stable scores over time but do not all tap the same characteristic',
        ],
        correctAnswer: 3,
        explanation:
          'Agreeableness had a test–retest correlation comparable to the other scales but a much lower internal consistency, so respondents answered the items consistently across sessions even though the items did not correlate well with one another; that heterogeneity also caps the scale’s correlation with the full-length version, as the investigators noted. A test–retest correlation of .81 rules out large shifts in scores over four weeks. A correlation of .69 with the full-length scale is substantial, not an indication of an unrelated trait. Heritability describes the sources of variation among people and does not determine how consistently a scale measures a trait.',
        skill: '7A reliability: internal consistency vs test–retest',
      },
      {
        question:
          'Taken together, the twin correlations in Table 1 suggest that the environmental influences on these five traits come mainly from:',
        options: [
          'experiences that differ between children who grow up in the same home',
          'parenting practices and household conditions that siblings have in common',
          'the more similar treatment that MZ twins receive because they look alike',
          'cultural values that are common to all of the participants in the sample',
        ],
        correctAnswer: 0,
        explanation:
          'For every trait the DZ correlation is about half the MZ correlation, so the heritability estimate roughly equals the MZ correlation and the shared-environment estimate (MZ correlation minus heritability) is near zero; the nonshared environment accounts for the remaining variation. Parenting and household conditions common to siblings are exactly the shared environment, which the data show contributes little. Greater similarity in the treatment of MZ twins would be a violation of the equal environments assumption that distorts the heritability estimate, not a source of environmental variation. Values common to everyone in the sample cannot produce differences among the participants.',
        skill: '7A twin studies: shared vs nonshared environment',
      },
      {
        question:
          'Suppose that parents, teachers, and friends treat MZ twins more alike than DZ twins in ways that affect personality. If so, the heritability estimates in Table 1 would most likely be:',
        options: [
          'underestimated, because DZ twins would then resemble each other more than expected',
          'accurate, because both kinds of twins were raised together in the same household',
          'overestimated, because part of the extra MZ resemblance would be environmental',
          'accurate for the reliable scales but overestimated for the agreeableness scale',
        ],
        correctAnswer: 2,
        explanation:
          'The method credits all of the extra resemblance of MZ over DZ twins to genes; if MZ twins also experience more similar environments, some of that extra resemblance is environmental, so doubling the difference inflates heritability. More similar treatment of MZ twins would not make DZ twins more alike, so there is no basis for underestimation. Being raised in the same household is precisely the condition under which the equal environments assumption can fail, so it does not guarantee accuracy. The bias arises from the twins’ environments and would affect all five scales, not only the one with low internal consistency.',
        skill: '7A research design: equal environments assumption',
      },
      {
        question: 'Which statement correctly interprets the heritability estimate for extraversion obtained in Study 2?',
        options: [
          'For each twin, a little over half of his or her extraversion was inherited',
          'Genetic differences account for a little over half of the variation in the sample',
          'Extraversion in this population would change little if environments changed',
          'A little over half of any national difference in extraversion is genetic',
        ],
        correctAnswer: 1,
        explanation:
          'The estimate is 2 × (.52 − .26) = .52, and heritability describes the share of the differences among people in a particular population that is associated with genetic differences among them. It does not partition a single individual’s trait into inherited and learned portions. A heritable trait can still change substantially if the environment changes, since heritability is specific to the range of environments sampled. An estimate from within one population says nothing about the causes of average differences between populations.',
        skill: '7A interpreting heritability',
      },
    ],
  },

  // ────────────────────────────────────────────────────────────────────────
  // 7. SOCIOLOGY — experiment, chart: world-systems theory, movement types,
  //    diffusion; transnational labor campaign with survey trend data
  // ────────────────────────────────────────────────────────────────────────
  {
    id: 'fl3-ps-b-07',
    section: 'psych-soc',
    discipline: 'sociology',
    title: 'A Transnational Labor Campaign in a World System',
    passageText:
      'World-systems theory treats the global economy as a single system divided into zones that occupy unequal positions in an international division of labor. Core nations specialize in capital-intensive, high-profit activities such as finance, design, and advanced manufacturing, and they host the headquarters of the firms that coordinate global production. Peripheral nations supply raw materials and low-wage labor for goods whose design, branding, and profits are controlled elsewhere. Semi-peripheral nations occupy an intermediate position: they are exploited by the core in some exchanges while exploiting the periphery in others. In this view, a country’s poverty reflects its position in the system rather than a failure to adopt the institutions of wealthier countries, and globalization, the intensifying flow of goods, capital, people, and information across borders, can deepen the hierarchy even as it creates new connections between distant populations.\n\nThose connections can also carry protest. Sociologists often classify social movements by two questions: whether they aim to change individuals or society, and whether the change they seek is limited or sweeping. Alternative movements seek limited change in individuals’ behavior; redemptive movements seek a total transformation of the individual; reformative movements seek limited changes to social institutions; and revolutionary movements seek to replace the existing social order. Cultural diffusion, the spread of practices and ideas from one society to another, helps explain how a tactic invented in one place, such as a consumer boycott or a union’s organizing model, comes to be used in another.\n\nResearchers studied a campaign begun in the mid-2000s by consumer and labor groups in Country C, a core nation, that targeted clothing brands whose garments were sewn in Country P, a peripheral nation. The campaign asked the brands to pay their suppliers enough to raise wages, to permit independent unions in supplier factories, and to publish factory safety inspections; it did not oppose trade between the two countries. In 2012, a fire at a Country P factory that supplied several targeted brands killed more than 100 workers and received extensive coverage in Country C.\n\nEvery three years from 2005 to 2020, the researchers surveyed a national sample of adults in Country C and a sample of garment workers in Country P. Workers were drawn from two kinds of factories: export factories supplying brands named by the campaign, and factories producing clothing only for Country P’s domestic market, which the campaign did not target. Throughout the period, Country P’s labor law and its official procedures for registering unions were unchanged. Figure 1 shows the percentage of Country C adults who reported having avoided a clothing brand during the past year because of how its workers were treated, and the percentage of workers in each type of factory who reported belonging to an independent union.',
    chart: {
      title: 'Figure 1. Labor-related clothing boycotts in Country C and independent union membership among garment workers in Country P, 2005–2020',
      kind: 'line',
      xLabel: 'Survey year',
      yLabel: 'Respondents',
      yUnit: '%',
      xValues: [2005, 2008, 2011, 2014, 2017, 2020],
      yValues: [4, 5, 6, 15, 17, 18],
      seriesLabel: 'Country C adults who avoided a brand',
      comparisonSeries: [
        { label: 'Union members, export factories (Country P)', yValues: [3, 3, 4, 7, 12, 16] },
        { label: 'Union members, domestic-market factories (Country P)', yValues: [3, 3, 3, 4, 4, 5] },
      ],
    },
    questions: [
      {
        question: 'Which conclusion is best supported by Figure 1?',
        options: [
          'Union membership in export factories doubled before consumer boycotting began to rise',
          'Union membership rose at about the same rate in both types of Country P factories',
          'Consumer boycotting in Country C rose at a steady pace throughout the whole period',
          'Most of the growth in export-factory membership came after boycotting had leveled off',
        ],
        correctAnswer: 3,
        explanation:
          'Boycotting jumped from 6% to 15% between 2011 and 2014 and then rose only to 17% and 18%, whereas export-factory membership went from 7% in 2014 to 16% in 2020, about 9 of its 13 points of total growth. Export-factory membership rose only from 3% to 4% before 2011, so it did not double before boycotting rose. Membership in domestic-market factories rose only 2 points over the whole period, far less than in export factories. Boycotting changed little except for the single large jump between 2011 and 2014, so its rise was not steady.',
        skill: '9B data interpretation: trend data',
      },
      {
        question: 'Surveying workers in domestic-market factories most directly helps the researchers to:',
        options: [
          'rule out national trends unrelated to the campaign as the cause of rising membership',
          'measure how much consumers in Country C knew about working conditions in Country P',
          'estimate whether export factories paid higher wages than domestic-market factories',
          'ensure that the sample of workers represented the whole labor force of Country P',
        ],
        correctAnswer: 0,
        explanation:
          'Domestic-market factories were subject to the same national economy, laws, and union procedures but were not targeted by the campaign, so they act as a comparison group: if membership had risen equally there, a nationwide trend rather than the campaign would be the likelier cause. Workers in Country P cannot report what consumers in Country C knew. Wages were not among the measures shown, and the comparison concerns union membership. Sampling garment workers from two factory types does not make the sample representative of the entire labor force.',
        skill: '9B research design: comparison group',
      },
      {
        question:
          'Suppose a faction of the campaign decides that the brands will never pay fair wages and begins urging workers in Country P to take over the factories, run them as worker-owned cooperatives, and end production for foreign brands altogether. Using the classification in the passage, the faction has shifted from a:',
        options: [
          'redemptive movement to a reformative movement',
          'alternative movement to a revolutionary movement',
          'reformative movement to a revolutionary movement',
          'reformative movement to a redemptive movement',
        ],
        correctAnswer: 2,
        explanation:
          'The original campaign sought limited changes to institutions, higher wages, independent unions, and published inspections, without opposing the trade relationship, which makes it reformative; seizing the factories and ending production for foreign brands aims to replace the existing economic order, which is revolutionary. The original campaign did not seek to transform individuals, so it was neither redemptive nor alternative. The faction’s new goal targets the structure of production, not the inner transformation of individuals, so it is not redemptive.',
        skill: '9B types of social movements',
      },
      {
        question:
          'Country S assembles clothing for Country C brands at wages above those in Country P, while firms based in Country S design their own clothing lines and contract the sewing to factories in Country P. In world-systems terms, Country S is best described as:',
        options: [
          'a core nation, because its firms control where production takes place',
          'a semi-peripheral nation, because it both supplies and outsources labor',
          'a peripheral nation, because its workers sew garments for foreign brands',
          'a semi-peripheral nation, because its wages are rising toward the core',
        ],
        correctAnswer: 1,
        explanation:
          'Country S is on the subordinate side of its exchanges with Country C, supplying assembly labor to core brands, and on the dominant side of its exchanges with Country P, capturing design and contracting out low-wage work, which is the intermediate position that defines the semi-periphery. Its firms control only part of their production, and the country still supplies labor to core brands, so it is not core. It is not simply peripheral, because it also controls design and outsources work to the periphery. Semi-peripheral status is defined by this double role in the division of labor, not by a wage trend, which the question does not describe.',
        skill: '9B globalization: world-systems theory',
      },
    ],
  },

  // ────────────────────────────────────────────────────────────────────────
  // 8. MEMORY — information passage: explicit vs implicit systems, amnesia
  //    (H.M.), systems consolidation, sleep and consolidation
  // ────────────────────────────────────────────────────────────────────────
  {
    id: 'fl3-ps-b-08',
    section: 'psych-soc',
    discipline: 'learning-and-memory',
    title: 'Two Kinds of Remembering and the Work of Sleep',
    passageText:
      'Long-term memory is not a single system. Explicit, or declarative, memory is memory that can be consciously recalled and reported. It includes episodic memory, the record of personally experienced events located in a particular time and place, and semantic memory, general knowledge of facts and word meanings that is no longer tied to the occasion on which it was learned. Implicit, or nondeclarative, memory is expressed through changes in performance rather than through conscious recollection. It includes procedural memory for motor and cognitive skills; priming, in which prior exposure to a stimulus makes that stimulus easier to detect or produce later; and classically conditioned responses.\n\nMuch of the evidence for this division comes from patients with amnesia. The most studied, known by his initials H.M., had the inner portions of both temporal lobes, including most of the hippocampus, surgically removed to control severe epilepsy. Afterward he could hold a conversation and repeat a short string of digits, but once his attention shifted, new events were lost; he never learned the names of staff members he saw daily. This inability to form new explicit memories is anterograde amnesia. He also lost memories of events from the years just before the operation, a retrograde amnesia, yet he recalled his childhood, the vocabulary and facts he had learned early in life, and how to perform skills acquired before surgery. Strikingly, when asked to trace the outline of a star while seeing his hand only in a mirror, a task that is initially very difficult, he improved steadily across three days of practice while insisting each day that he had never attempted the task. Other amnesic patients show normal priming: after reading a list of words, they complete word fragments with listed words more often than chance, even when they cannot recognize those words as having appeared on the list.\n\nSuch dissociations indicate that different brain structures support different kinds of memory. The hippocampus and neighboring cortex are needed to form new declarative memories, whereas skill learning depends on the basal ganglia and cerebellum, and conditioned fear depends heavily on the amygdala.\n\nThe pattern of H.M.’s retrograde loss is explained by consolidation, the process by which a newly formed memory becomes stable. According to the systems consolidation view, the hippocampus initially binds together the scattered cortical traces of an experience; over months to years, repeated reactivation strengthens the connections among those cortical traces until the memory can be retrieved without the hippocampus. Memories formed shortly before hippocampal damage are therefore vulnerable, whereas older ones are not.\n\nSleep appears to contribute to consolidation. During slow-wave sleep, patterns of hippocampal activity recorded during a waking task are replayed in compressed form, and the amount of slow-wave sleep after learning predicts later recall of word pairs. Performance on a newly learned motor sequence also improves after sleep without further practice, a gain that has been linked to lighter, non-slow-wave stages of sleep.',
    questions: [
      {
        question:
          'A woman develops severe anterograde amnesia after an infection damages both of her hippocampi. On each of five days she plays a new computer game that requires rapid key presses in response to patterns on a screen. Which outcome is most likely?',
        options: [
          'She will describe the game accurately each day but show no gain in speed',
          'She will neither get faster at the game nor recall having played it before',
          'She will play faster each day while unable to recall any earlier session',
          'She will recall earlier sessions only after sleeping but will not get faster',
        ],
        correctAnswer: 2,
        explanation:
          'Learning a perceptual-motor skill is procedural, implicit memory, which depends on the basal ganglia and cerebellum rather than the hippocampus, so her speed should improve across days as H.M.’s mirror tracing did, while her hippocampal damage prevents her from forming explicit memories of the sessions. Describing the game accurately each day would require the declarative memory she has lost, and her intact skill system should still produce gains. Failing to improve would imply damage to the skill-learning structures, which were spared. Sleep may aid consolidation, but it cannot create episodic memories that the damaged hippocampus never formed.',
        skill: '6B implicit vs explicit memory in amnesia',
      },
      {
        question:
          'According to the systems consolidation view, a patient whose hippocampus was destroyed in an accident one year ago would have the greatest difficulty recalling which of the following?',
        options: [
          'a talk with a friend a few weeks before the accident',
          'the floor plan of the apartment she lived in as a teenager',
          'the capital cities of countries she studied in high school',
          'how to tie her shoelaces, a skill learned in early childhood',
        ],
        correctAnswer: 0,
        explanation:
          'A conversation from a few weeks before the injury had not yet been consolidated into cortex and still depended on the hippocampus for retrieval, so it is the memory most likely to be lost. The teenage apartment is an old episodic memory that consolidation would long since have made independent of the hippocampus. Facts learned in school are old semantic memories and are spared for the same reason. Tying shoelaces is a procedural skill that does not rely on the hippocampus at all.',
        skill: '6B consolidation and retrograde amnesia',
      },
      {
        question:
          'An amnesic patient is pricked by a pin hidden in a physician’s hand during a handshake. The next day she does not recognize the physician and cannot recall the event, yet she withdraws her hand when he offers to shake it. Her reluctance is best classified as:',
        options: [
          'episodic memory for the handshake, retrieved without awareness',
          'semantic memory that handshakes with strangers can be painful',
          'procedural memory for how to perform a handshake more safely',
          'a conditioned response that does not depend on the hippocampus',
        ],
        correctAnswer: 3,
        explanation:
          'The offered hand, previously paired with a painful prick, now elicits avoidance even though she has no conscious memory of the pairing; this is an implicitly expressed conditioned fear response, supported mainly by the amygdala rather than the hippocampus. Episodic memory is by definition consciously recollected, and she cannot recall the event. Semantic memory is also declarative and would allow her to state the fact and its source, which she cannot. Procedural memory concerns the skill of performing an action, whereas her behavior is an emotional avoidance of a specific stimulus.',
        skill: '6B types of implicit memory',
      },
      {
        question:
          'Researchers want to test the claim that slow-wave sleep itself, rather than simply sleep of any kind, benefits memory for newly learned word pairs. Which result would provide the strongest support for the claim?',
        options: [
          'Recall is better after a full night of sleep than after an equally long period of daytime activity',
          'Recall is worse after sleep with slow-wave stages disrupted than after equally long normal sleep',
          'People who habitually sleep more hours each night tend to score higher on tests of verbal memory',
          'Both recall of word pairs and speed on a newly learned motor sequence improve after sleep',
        ],
        correctAnswer: 1,
        explanation:
          'Selectively disrupting slow-wave stages while holding total sleep time constant isolates slow-wave sleep from sleep in general, so poorer recall in that condition points specifically to slow-wave sleep. Comparing sleep with daytime activity cannot separate slow-wave sleep from other sleep stages, and it also confounds sleep with reduced interference and time of day. A correlation between habitual sleep length and memory is not specific to slow-wave sleep and could reflect third variables. Improvement in both tasks after sleep does not identify which stage is responsible, and the passage links the motor gain to other stages.',
        skill: '6B research design: sleep and consolidation',
      },
    ],
  },

  // ────────────────────────────────────────────────────────────────────────
  // 9. SOCIAL PSYCHOLOGY — information passage: primacy/recency, central
  //    traits, halo effect, stereotypes (out-group homogeneity, illusory
  //    correlation), ethnocentrism vs cultural relativism
  // ────────────────────────────────────────────────────────────────────────
  {
    id: 'fl3-ps-b-09',
    section: 'psych-soc',
    discipline: 'social-psychology',
    title: 'First Impressions, Group Images, and Judging Other Cultures',
    passageText:
      'People form impressions of others quickly and from little information, and the order in which the information arrives shapes the result. In a classic demonstration, one group of participants heard a person described as intelligent, industrious, impulsive, critical, stubborn, and envious, while a second group heard the same six traits in the reverse order. The first group formed a markedly more favorable impression. This primacy effect is thought to occur because early information establishes an interpretive frame: once a person is seen as intelligent and industrious, “stubborn” may be read as principled. Later information can dominate instead, a recency effect, when a delay or a distracting task separates the first set of information from the second and the judgment is made soon after the second. Some traits are central, altering the meaning of everything else: substituting “cold” for “warm” in an otherwise identical list changes impressions far more than substituting “blunt” for “polite.”\n\nGlobal evaluations also spread across unrelated dimensions. In the halo effect, a positive evaluation of one attribute, such as physical attractiveness or friendliness, leads perceivers to infer other positive qualities, such as competence or honesty, for which they have no independent evidence. A negative initial evaluation can spread in the same way.\n\nStereotypes, generalized beliefs about the characteristics of a group’s members, arise partly from the ordinary process of categorization, which simplifies a complex social world. Two biases help sustain them. First, people perceive members of out-groups as more similar to one another than members of their own group, the out-group homogeneity effect, partly because they know fewer out-group members well. Second, people form illusory correlations, perceiving a relationship between two variables that are unrelated or only weakly related. In one set of studies, participants read statements about members of a large group and a small group; desirable behaviors outnumbered undesirable behaviors in both groups by the same ratio. Participants nevertheless overestimated how often the small group had behaved undesirably. The explanation offered was that the pairing of two infrequent events, membership in the smaller group and an undesirable act, is especially distinctive and therefore especially memorable.\n\nJudgments of whole cultures show parallel tendencies. Ethnocentrism is the practice of evaluating another culture by the standards of one’s own, usually with the conclusion that one’s own ways are natural and superior. Cultural relativism is the practice of understanding a culture’s beliefs and practices in terms of that culture’s own values and circumstances. Many anthropologists treat relativism as a method for understanding rather than a moral doctrine: a researcher can seek to grasp why a practice makes sense to those who follow it without concluding that the practice is beyond criticism. In clinical settings both tendencies matter, since a provider who interprets a patient’s beliefs about illness through the provider’s own cultural assumptions may misread the patient’s behavior as noncompliance or irrationality.',
    questions: [
      {
        question:
          'Reviewers evaluate an applicant whose file contains strong interview evaluations and one letter reporting a lapse in professionalism. Under which procedure would the letter, read after the evaluations, most likely have the greatest influence on the reviewers’ ratings?',
        options: [
          'Read the evaluations, take a long break, then read the letter and rate at once',
          'Read the evaluations and then the letter in one sitting, and rate a day later',
          'Read the evaluations and then the letter in one sitting, and rate right away',
          'Read the evaluations, then the letter, then reread the evaluations and rate',
        ],
        correctAnswer: 0,
        explanation:
          'According to the passage, later information dominates when a delay separates the earlier and later information and the judgment follows the later information closely; a long break between the evaluations and the letter, followed by an immediate rating, meets both conditions. Reading everything in one sitting favors a primacy effect, so the earlier evaluations would frame the letter, whether the rating comes at once or a day later. Rereading the evaluations last makes them, rather than the letter, the most recent information.',
        skill: '8B primacy and recency in impression formation',
      },
      {
        question:
          'Patients at a clinic rated the physicians they found physically attractive as more knowledgeable about medicine, although audits found no difference in those physicians’ diagnostic accuracy. This pattern best illustrates:',
        options: [
          'a primacy effect, because appearance is noticed before anything else',
          'an illusory correlation, because two rare events were paired together',
          'a halo effect, because one favorable attribute colored other judgments',
          'a stereotype, because attractive people form a distinct social category',
        ],
        correctAnswer: 2,
        explanation:
          'Patients inferred an unrelated quality, medical knowledge, from a favorable evaluation of appearance without independent evidence, which is the halo effect. A primacy effect concerns the order in which pieces of information arrive, and no order was varied or compared here. An illusory correlation arises from the distinctive pairing of infrequent events, and neither attractiveness nor knowledge is described as rare. The judgment spreads from one attribute of each individual physician rather than from beliefs about a social group.',
        skill: '8B halo effect',
      },
      {
        question:
          'According to the distinctiveness explanation offered in the passage, the overestimate of the small group’s undesirable behavior would be most reduced if the study were changed so that:',
        options: [
          'all statements were shown twice, so that each behavior was seen more often',
          'the small group was given a name suggesting a group participants disliked',
          'the undesirable behaviors described were more extreme but no more frequent',
          'undesirable behaviors outnumbered desirable ones by an equal ratio in each group',
        ],
        correctAnswer: 3,
        explanation:
          'If undesirable acts were the common behavior, the distinctive pairing would become small-group membership with a desirable act, so the explanation predicts that the overestimate would shift to the small group’s desirable behavior and the overestimate of its undesirable behavior would disappear. Showing every statement twice leaves the relative frequencies, and therefore the distinctive pairing, unchanged. A disliked group label would add prejudice and should increase, not reduce, the overestimate of undesirable acts. More extreme undesirable acts would be even more distinctive and memorable.',
        skill: '8B illusory correlation and stereotype formation',
      },
      {
        question:
          'A physician learns that a patient’s family expects the eldest son, rather than the patient, to hear a serious diagnosis first and to decide what the patient will be told. Which response best reflects cultural relativism as the passage describes it?',
        options: [
          'Accepting the family’s practice without question, since it is traditional for them',
          'Learning what the practice means to the family before deciding how to respond',
          'Telling the patient directly, since patient autonomy is the right standard everywhere',
          'Viewing the practice as a sign that the family is not acting in the patient’s interest',
        ],
        correctAnswer: 1,
        explanation:
          'Relativism, as the passage presents it, is a method of understanding a practice in terms of the values of the people who follow it, so seeking to learn the practice’s meaning before responding reflects it. Treating the practice as beyond question confuses relativism as a method with a moral doctrine, which the passage says anthropologists reject. Applying one’s own standard of autonomy to every culture, or reading the family’s practice as neglect by that standard, is ethnocentrism.',
        skill: '9A ethnocentrism vs cultural relativism',
      },
      {
        question:
          'Surgeons at a hospital describe the hospital’s internists as “all cautious and slow” while describing their fellow surgeons as having widely varied temperaments, and the internists show the mirror-image pattern. This pattern best illustrates:',
        options: [
          'the out-group homogeneity effect',
          'in-group favoritism in evaluations',
          'the halo effect in social judgment',
          'the primacy effect in impressions',
        ],
        correctAnswer: 0,
        explanation:
          'Each group sees the other group’s members as alike and its own members as varied, which is the out-group homogeneity effect. In-group favoritism concerns evaluating one’s own group more positively, whereas the defining feature here is perceived variability; the surgeons say nothing favorable about themselves. The halo effect is the spread of one favorable or unfavorable evaluation to unrelated attributes of an individual. A primacy effect depends on the order of information about a person, which the scenario does not involve.',
        skill: '8B out-group homogeneity',
      },
    ],
  },

  // ────────────────────────────────────────────────────────────────────────
  // 10. SOCIOLOGY — experiment, table: status and role; role conflict vs
  //     role strain; master status; survey of working-parent nurses
  // ────────────────────────────────────────────────────────────────────────
  {
    id: 'fl3-ps-b-10',
    section: 'psych-soc',
    discipline: 'sociology',
    title: 'Schedules, Roles, and Master Status Among Nurses Who Are Parents',
    passageText:
      'A status is a recognized social position, such as nurse, parent, or patient, and a role is the set of behaviors, obligations, and privileges expected of a person who occupies that status. Sociologists distinguish ascribed statuses, which are assigned at birth or acquired involuntarily later in life, from achieved statuses, which are acquired through a person’s own actions. Because every person holds many statuses at once, the expectations attached to them can collide. Role conflict occurs when meeting the expectations of one status makes it difficult to meet those of another, as when a late meeting at work coincides with a child’s school performance. Role strain occurs when the expectations attached to a single status are incompatible with one another, as when a manager is expected both to advocate for her staff and to enforce cuts to their hours. One status can also come to overshadow the rest: a master status is a status that dominates how others see and treat a person, shaping how all of his or her other statuses are interpreted.\n\nResearchers surveyed 1,200 registered nurses employed by a hospital system, all of whom had at least one child under age 12 and a partner who was employed full time. The sample was stratified to include equal numbers of mothers and fathers. Half of the nurses worked fixed schedules, in which the same days and hours recurred every week, and half worked rotating schedules, in which the days and shifts changed from month to month and were posted two weeks in advance. Schedule type was assigned by the hospital according to the staffing needs of each unit rather than chosen by the nurses. The survey asked how often respondents had to miss or reschedule a family obligation because of work, or a work obligation because of family (work–family conflict); how often they faced demands at work that could not all be met, such as being expected to spend unhurried time with anxious patients while also being required to complete discharges within a fixed period (conflicting job demands); and whether a supervisor had ever passed them over for an extra shift, a training opportunity, or a promotion while stating or implying that their parenting responsibilities would limit their availability. Respondents also completed a measure of job satisfaction.\n\nTable 1 summarizes the main results. The researchers also reported that among nurses on rotating schedules, those whose partners had unpredictable work hours reported more frequent work–family conflict than those whose partners had fixed hours, and that job satisfaction was lowest among nurses who reported both frequent work–family conflict and frequent conflicting job demands.',
    figure:
      '**Table 1. Survey responses of nurses who are parents, by gender and schedule type (n = 300 per group)**\n\n| Group | Work–family conflict at least weekly (%) | Conflicting job demands at least weekly (%) | Passed over, with parenting cited (%) |\n|---|---|---|---|\n| Mothers, fixed schedule | 34 | 41 | 38 |\n| Mothers, rotating schedule | 58 | 43 | 45 |\n| Fathers, fixed schedule | 22 | 40 | 8 |\n| Fathers, rotating schedule | 41 | 42 | 10 |',
    questions: [
      {
        question:
          'In terms of the concepts defined in the passage, the survey’s measure of conflicting job demands is best understood as an indicator of:',
        options: ['role conflict', 'master status', 'status inconsistency', 'role strain'],
        correctAnswer: 3,
        explanation:
          'Being expected to spend unhurried time with patients while also completing discharges quickly involves incompatible expectations within a single status, nurse, which is role strain. Role conflict involves expectations of two different statuses colliding, which is what the work–family conflict measure captures. Master status concerns how one status dominates others’ perceptions of a person, not demands within a job. Status inconsistency refers to holding statuses of differing rank or prestige, which the measure does not address.',
        skill: '9A role strain vs role conflict',
      },
      {
        question: 'Which conclusion is best supported by Table 1?',
        options: [
          'Rotating schedules raised both work–family conflict and conflicting job demands',
          'Fathers on rotating schedules reported less work–family conflict than fixed-schedule mothers',
          'Schedule type tracked conflict between roles, not strain within the nurse role',
          'Mothers and fathers differed more in work–family conflict on fixed than on rotating schedules',
        ],
        correctAnswer: 2,
        explanation:
          'Moving from fixed to rotating schedules raised weekly work–family conflict by 24 points for mothers and 19 points for fathers, while conflicting job demands changed by only 2 points in each group, so schedule type tracked conflict between roles but not strain within the nurse role. Because job demands barely changed, rotating schedules did not raise both measures. Rotating-schedule fathers reported 41% versus 34% for fixed-schedule mothers, more rather than less. The gender gap in work–family conflict was 12 points on fixed schedules and 17 points on rotating schedules, so it was larger on rotating schedules.',
        skill: '9A data interpretation: survey table',
      },
      {
        question:
          'The difference between mothers and fathers in the last column of Table 1 most directly suggests that, for supervisors,',
        options: [
          'being a mother more often than being a father functioned as a master status',
          'fathers were experiencing more role strain than mothers within the parent role',
          'nursing was an ascribed status for the mothers but an achieved one for the fathers',
          'mothers faced more role conflict because more of them worked rotating schedules',
        ],
        correctAnswer: 0,
        explanation:
          'Supervisors far more often treated mothers’ parenthood as a reason to pass them over, meaning that the status of mother shaped how supervisors interpreted their standing as nurses, which is what a master status does; fatherhood rarely had that effect. The column records supervisors’ decisions, not strain within the parent role, and it gives no evidence that fathers experienced more of it. Nursing is an achieved status for everyone who earns the credential, regardless of gender. Equal numbers of mothers and fathers worked each schedule type, so schedules cannot explain the gap.',
        skill: '9A master status',
      },
      {
        question:
          'The hospital begins posting rotating schedules three months in advance and allows nurses to trade shifts freely with one another. Based on the passage, which change is most likely to follow?',
        options: [
          'Fewer mothers on rotating schedules would report being passed over by supervisors',
          'Fewer nurses on rotating schedules would report weekly conflicting job demands',
          'Fewer nurses on rotating schedules would report weekly work–family conflict',
          'Fewer nurses on fixed schedules would report weekly work–family conflict',
        ],
        correctAnswer: 2,
        explanation:
          'Earlier notice and the freedom to trade shifts let nurses arrange work around family obligations, so the policy targets the unpredictability that the data link to work–family conflict among rotating-schedule nurses. Supervisors’ assumptions about mothers’ availability are not addressed by a scheduling change, so reports of being passed over should not be expected to fall. Conflicting job demands arise within shifts and did not differ by schedule type, so a scheduling policy should leave them unchanged. Fixed-schedule nurses already know their hours and are not affected by changes to rotating schedules.',
        skill: '9A role conflict: applying survey findings',
      },
    ],
  },
]

export const FL3_PSYCH_SOC_B_DISCRETES: MCATDiscreteQuestion[] = [
  {
    id: 'fl3-ps-b-d01',
    section: 'psych-soc',
    discipline: 'sensation-and-perception',
    question:
      'A woman with a severe head cold says that apple and raw onion taste the same to her, although she can still tell that lemon juice is sour and that salted water is salty. The best explanation is that:',
    options: [
      'congestion keeps taste receptor cells from releasing transmitter onto sensory neurons',
      'telling many foods apart depends on odor molecules reaching the olfactory epithelium',
      'sour and salty tastes are detected by receptors in the nose, which remain unaffected',
      'the gustatory pathway relays through the thalamus, which inflammation has blocked',
    ],
    correctAnswer: 1,
    explanation:
      'The flavor that distinguishes one food from another depends largely on odor molecules that travel from the mouth to the olfactory epithelium at the back of the nasal cavity; congestion blocks that route, leaving only the basic tastes, which are detected by taste buds. If taste receptor cells could not signal, she would lose sour and salty as well. Sour and salty tastes are detected by taste receptor cells in the mouth, not by receptors in the nose. A block in the gustatory relay would abolish all taste, not only the ability to tell foods apart.',
    skill: '6A chemical senses: taste, smell, and flavor',
  },
  {
    id: 'fl3-ps-b-d02',
    section: 'psych-soc',
    discipline: 'cognition-and-perception',
    question:
      'Suppose researchers find that people whose spinal cord injuries block nearly all sensory feedback from the body below the neck report feeling fear and anger about as intensely after the injury as before. This finding is most difficult to reconcile with which theory of emotion?',
    options: [
      'the Cannon–Bard theory',
      'the facial feedback hypothesis',
      'the cognitive appraisal theory',
      'the James–Lange theory',
    ],
    correctAnswer: 3,
    explanation:
      'The James–Lange theory holds that an emotion is the perception of the body’s physiological response, so losing most bodily feedback should markedly weaken emotional experience. The Cannon–Bard theory holds that emotional experience and bodily arousal are triggered simultaneously and independently, so it predicts exactly this preserved intensity. Facial feedback travels from the face, above the injury, and remains intact. Cognitive appraisal theory locates emotion in the evaluation of a situation, which the injury does not affect.',
    skill: '6C theories of emotion: James–Lange vs Cannon–Bard',
  },
  {
    id: 'fl3-ps-b-d03',
    section: 'psych-soc',
    discipline: 'biological-basis-of-behavior',
    question:
      'Adult rats given access to running wheels for several weeks have more newly generated neurons than sedentary rats. In which brain region are these new neurons most likely to be found?',
    options: [
      'The dentate gyrus of the hippocampus',
      'The precentral gyrus of the frontal lobe',
      'The Purkinje cell layer of the cerebellum',
      'The ventral horn of the spinal cord',
    ],
    correctAnswer: 0,
    explanation:
      'The dentate gyrus of the hippocampus is one of the few sites where new neurons are generated throughout adult life, and physical exercise increases their production. The precentral gyrus, the primary motor cortex, does not add new neurons in adulthood, although its existing connections can change with practice. Purkinje cells of the cerebellum are formed during development and are not replaced in adults. Motor neurons of the ventral horn are likewise not regenerated in adulthood.',
    skill: '6A neurogenesis and neuroplasticity',
  },
  {
    id: 'fl3-ps-b-d04',
    section: 'psych-soc',
    discipline: 'personality-and-disorders',
    question:
      'According to Carl Rogers, a child whose parents show affection only when she earns top grades is most likely to develop:',
    options: [
      'a harsh superego that punishes her with guilt whenever she fails',
      'learned helplessness, since her efforts have no effect on outcomes',
      'conditions of worth that create incongruence between self and experience',
      'a secure self-concept that steadily moves her toward self-actualization',
    ],
    correctAnswer: 2,
    explanation:
      'Rogers argued that conditional regard teaches a child that she is worthy only when she meets certain standards; these conditions of worth lead her to deny or distort experiences that do not fit, producing incongruence between self-concept and experience, which unconditional positive regard would prevent. A punishing superego is a psychoanalytic construct, not part of Rogers’s theory. Learned helplessness follows from outcomes that do not depend on behavior, whereas her affection depends directly on her grades. Conditional regard undermines, rather than secures, the self-concept and growth toward self-actualization.',
    skill: '7A humanistic theory: unconditional positive regard',
  },
  {
    id: 'fl3-ps-b-d05',
    section: 'psych-soc',
    discipline: 'sociology',
    question:
      'A sociologist records conversations between clinicians and patients newly diagnosed with diabetes to learn how each patient comes to think of himself or herself as “a diabetic” and what that label comes to mean in daily life. This research most closely reflects which theoretical perspective?',
    options: ['Structural functionalism', 'Conflict theory', 'Rational choice theory', 'Symbolic interactionism'],
    correctAnswer: 3,
    explanation:
      'Symbolic interactionism studies how people construct and negotiate the meanings of symbols, labels, and identities in face-to-face interaction, which is exactly the focus on how a diagnosis becomes part of a patient’s self-understanding. Structural functionalism examines how institutions contribute to the stability of society as a whole. Conflict theory focuses on competition between groups over power and resources. Rational choice theory explains behavior as a calculation of costs and benefits rather than as the negotiation of meaning.',
    skill: '9A symbolic interactionism',
  },
  {
    id: 'fl3-ps-b-d06',
    section: 'psych-soc',
    discipline: 'sociology',
    question:
      'In a large health system, men who work as nurses, in a field where most workers are women, are promoted into administrative positions faster than women nurses with equal experience and performance ratings. This pattern is best described as:',
    options: ['the second shift', 'the glass escalator', 'the motherhood penalty', 'occupational sex segregation'],
    correctAnswer: 1,
    explanation:
      'The glass escalator is the tendency of men in female-dominated occupations to be advanced more quickly than their female colleagues. The second shift refers to the domestic labor that employed women continue to perform after paid work. The motherhood penalty is a wage and hiring disadvantage attached specifically to mothers, and the stem compares men and women of equal experience and ratings without reference to parenthood. Occupational sex segregation is the concentration of men and women in different occupations, whereas this pattern arises within a single occupation.',
    skill: '10A gender stratification',
  },
  {
    id: 'fl3-ps-b-d07',
    section: 'psych-soc',
    discipline: 'sociology',
    question:
      'Over one year, the issues that survey respondents named as the nation’s most important problems closely tracked the amount of news coverage each issue received, even though respondents’ opinions about each issue did not change. This pattern best illustrates which effect of mass media?',
    options: ['Cultivation', 'Gatekeeping', 'Agenda setting', 'Two-step flow'],
    correctAnswer: 2,
    explanation:
      'Agenda setting is the media’s influence on which issues the public regards as important, as distinct from what the public thinks about them, which matches rankings that followed coverage while opinions stayed the same. Cultivation is the gradual shaping of beliefs about social reality through heavy media exposure, such as overestimating crime. Gatekeeping describes the decisions of editors and producers about what gets covered, not the effect on the audience. The two-step flow holds that media influence reaches most people through opinion leaders, which the data do not address.',
    skill: '9B mass media as an institution',
  },
]
