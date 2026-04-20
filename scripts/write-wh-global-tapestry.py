#!/usr/bin/env python3
"""
Script to write ALL remaining AP World History placeholder content.
Covers: wh-global-tapestry parts 4-7, and all parts 2-7 of 15 other topics.
"""

import os

base = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), 
                    'src', 'data', 'interactive-lessons')

def write_file(filename, content):
    path = os.path.join(base, filename)
    with open(path, 'w') as f:
        f.write(content)
    print(f"✓ {filename}")

# ================================================================
# HELPER: Build a standard 7-section lesson file
# ================================================================
def build_lesson(export_name, slug, part_num, total_parts, title, subtitle, intro_table,
                 key_concept, quiz1_q1, quiz1_q1_opts, quiz1_q1_ans, quiz1_q1_exp,
                 quiz1_q2, quiz1_q2_opts, quiz1_q2_ans, quiz1_q2_exp,
                 content_heading, blocks,  # blocks: list of (blockquote_title, body_text)
                 sprint_q1, sprint_q1_opts, sprint_q1_ans, sprint_q1_exp,
                 sprint_q2, sprint_q2_opts, sprint_q2_ans, sprint_q2_exp,
                 sprint_q3, sprint_q3_opts, sprint_q3_ans, sprint_q3_exp,
                 dropdown_prompt, dd_items,  # dd_items: list of (label, options_list, correct_answer, hint)
                 dd_explanation,
                 applied_q1, applied_q1_opts, applied_q1_ans, applied_q1_exp,
                 applied_q2, applied_q2_opts, applied_q2_ans, applied_q2_exp,
                 id_prefix):

    # Build content section
    content_parts = []
    for (bq_title, body) in blocks:
        content_parts.append(f'\n> **{bq_title}**\n\n{body}')
    content_joined = '\n'.join(content_parts)

    # Build quiz1
    def fmt_opts(opts):
        return ',\n'.join([f"              '{o}'" for o in opts])

    # Build dropdown items
    dd_sections = []
    for (label, opts, correct, hint) in dd_items:
        opts_str = ', '.join([f"'{o}'" for o in opts])
        dd_sections.append(f"""          {{
            label: '{label}',
            options: [{opts_str}]
          }}""")
    dd_labels = [f"'{item[2]}'" for item in dd_items]
    dd_hints = [f"        hint{i+1}: '{item[3]}'" for i, item in enumerate(dd_items)]

    intro_rows = '\n'.join([f'| {row} |' for row in intro_table])

    content = f"""export const {export_name} = {{
  topicSlug: '{slug}',
  sections: [
    {{
      id: '{id_prefix}-intro',
      type: 'text' as const,
      content: `
{title}

**Part {part_num} of {total_parts} — {subtitle}**

---

| Section |
|---------|
{intro_rows}

> 🔑 **Key Concept:** {key_concept}
      `
    }},
    {{
      id: '{id_prefix}-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {{
        questions: [
          {{
            question: '{quiz1_q1}',
            options: [
{fmt_opts(quiz1_q1_opts)}
            ],
            correctAnswer: {quiz1_q1_ans},
            explanation: '{quiz1_q1_exp}'
          }},
          {{
            question: '{quiz1_q2}',
            options: [
{fmt_opts(quiz1_q2_opts)}
            ],
            correctAnswer: {quiz1_q2_ans},
            explanation: '{quiz1_q2_exp}'
          }}
        ]
      }}
    }},
    {{
      id: '{id_prefix}-content',
      type: 'text' as const,
      content: `
## {content_heading}
{content_joined}
      `
    }},
    {{
      id: '{id_prefix}-input',
      type: 'multiple-choice' as const,
      content: `
**Applied Recall: 3-Question Sprint** 🎯
      `,
      exercise: {{
        questions: [
          {{
            question: '{sprint_q1}',
            options: [
{fmt_opts(sprint_q1_opts)}
            ],
            correctAnswer: {sprint_q1_ans},
            explanation: '{sprint_q1_exp}'
          }},
          {{
            question: '{sprint_q2}',
            options: [
{fmt_opts(sprint_q2_opts)}
            ],
            correctAnswer: {sprint_q2_ans},
            explanation: '{sprint_q2_exp}'
          }},
          {{
            question: '{sprint_q3}',
            options: [
{fmt_opts(sprint_q3_opts)}
            ],
            correctAnswer: {sprint_q3_ans},
            explanation: '{sprint_q3_exp}'
          }}
        ]
      }}
    }},
    {{
      id: '{id_prefix}-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Idea: Evidence to Claim**

{dropdown_prompt}
      `,
      exercise: {{
        dropdowns: [
{chr(10).join(dd_sections)}
        ],
        correctAnswers: [{', '.join(dd_labels)}],
{chr(10).join(dd_hints)},
        explanation: '{dd_explanation}'
      }}
    }},
    {{
      id: '{id_prefix}-applied',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application** 🎯
      `,
      exercise: {{
        questions: [
          {{
            question: '{applied_q1}',
            options: [
{fmt_opts(applied_q1_opts)}
            ],
            correctAnswer: {applied_q1_ans},
            explanation: '{applied_q1_exp}'
          }},
          {{
            question: '{applied_q2}',
            options: [
{fmt_opts(applied_q2_opts)}
            ],
            correctAnswer: {applied_q2_ans},
            explanation: '{applied_q2_exp}'
          }}
        ]
      }}
    }}
  ]
}}
"""
    return content

# ================================================================
# WH-GLOBAL-TAPESTRY Parts 4-7
# ================================================================

write_file('wh-global-tapestry-part4.ts', build_lesson(
    export_name='whGlobalTapestryPart4Data',
    slug='wh-global-tapestry',
    part_num=4, total_parts=7,
    title='# 🌍 The Global Tapestry (c. 1200–1450)',
    subtitle='Religion, Culture & Belief Systems',
    intro_table=['📖 Buddhism, Confucianism & Neo-Confucianism', 'Islam as a Global Force', 'Christianity in Europe & Beyond', '📌 Comparing Religious Spread'],
    key_concept='The AP exam frequently asks how major world religions shaped political authority, social structures, and cultural identity in this period. Understanding where each religion spread — and HOW it spread — is essential for Unit 1 comparison questions.',
    quiz1_q1='Neo-Confucianism, which blended Confucian ethics with Buddhist and Daoist ideas, primarily served which function in Song Dynasty China?',
    quiz1_q1_opts=['Provided an ideological framework justifying social hierarchy, bureaucratic governance, and proper relationships within families and the state', 'Replaced all Buddhist and Daoist influence in Chinese society', 'Encouraged women to participate in government through equal exam access', 'Promoted individual freedom and resistance to authority'],
    quiz1_q1_ans=0,
    quiz1_q1_exp='Neo-Confucianism was not just philosophy — it was administrative infrastructure. It justified the emperor\'s authority, the scholar-gentry\'s social dominance, and gender hierarchy (foot binding spread alongside Neo-Confucian norms of female subordination). AP prompts often ask students to explain how belief systems reinforced political and social structures.',
    quiz1_q2='Islam\'s rapid spread across Afro-Eurasia between 600–1450 was primarily driven by:',
    quiz1_q2_opts=['A combination of military expansion, merchant trade networks, and Sufi missionary adaptation to local cultures', 'Exclusively military conquest by Arab armies', 'European missionaries converting people along trade routes', 'Natural disasters that destroyed other religions\' institutions'],
    quiz1_q2_ans=0,
    quiz1_q2_exp='No single mechanism explains Islamic spread. Military conquest was important in the Middle East and North Africa; trade networks carried Islam to coastal East Africa and Southeast Asia; Sufi missionaries\' flexibility and emphasis on inner devotion made Islam appealing in diverse cultural contexts. AP essays should acknowledge this complexity.',
    content_heading='📖 Belief Systems & Their Impact',
    blocks=[
        ('Buddhism and Its Spread', 'Originally from India (5th c. BCE), Buddhism spread throughout Asia through trade and missionary activity:\n\n- **Theravada Buddhism** dominant in Southeast Asia (Cambodia, Thailand, Burma) — brought by monks and merchants\n- **Mahayana Buddhism** dominant in East Asia (China, Japan, Korea, Vietnam) — emphasized bodhisattvas who delay nirvana to help others\n- **Zen Buddhism** (Japan) — contemplative practice emphasizing meditation; influenced samurai culture\n- By 1200, Buddhism had largely declined in India (homeland) but thrived across Asia'),
        ('Islam: A Global Faith', 'By 1200, Islam had become the most geographically widespread religion on earth:\n\n| Region | How Islam Arrived |\n|--------|------------------|\n| **West Africa** | Trans-Saharan merchants; rulers adopted Islam for legitimacy and trade connections |\n| **East Africa (Swahili Coast)** | Indian Ocean merchants established Muslim communities in port cities |\n| **South Asia** | Delhi Sultanate brought Muslim governance; Sufi missionaries gained converts |\n| **Southeast Asia** | Muslim merchants from India and Arabia; Sufi missionaries adapted to local cultures |\n| **Central Asia** | Mongol rulers converted; Sufis worked among nomadic peoples |\n\n**Unifying features:** Arabic as scholarly/trade language; Hajj connected Muslims worldwide; Sharia provided common legal framework; madrasas standardized education'),
        ('Christianity and the Catholic Church', 'In medieval Europe (c. 1200–1450), the Catholic Church was the dominant cultural and political institution:\n\n- **Universal authority:** Pope claimed spiritual authority over all Christian rulers; excommunication was a political weapon\n- **Economic role:** Church owned ~1/3 of European land; collected tithes (taxes)\n- **Cultural role:** Preserved Greco-Roman texts; ran universities (Oxford, Paris, Bologna founded c. 1100–1200)\n- **Crusades (1095–1291):** Christian military campaigns to recapture Jerusalem; increased European contact with Islamic world; stimulated trade\n- **Eastern Orthodox Christianity:** Byzantine Empire\'s church; different from Catholic Church after the Great Schism (1054)'),
        ('AP Comparison Anchor', '- **Islam vs. Christianity:** Islam spread more successfully in this period — more geographically widespread by 1450; both used trade networks and religious institutions\n- **Confucianism vs. Islam:** Both shaped governance (Confucianism through exam-based bureaucracy; Islam through caliphate and Sharia); neither required the other\'s absence\n- **Key AP question:** How did religious belief systems reinforce OR challenge existing political and social structures?'),
    ],
    sprint_q1='What was the primary social function of Neo-Confucianism in Song Dynasty China?',
    sprint_q1_opts=['Justify social hierarchy and centralized bureaucracy through a philosophical framework blending Confucian ethics with Buddhist and Daoist ideas', 'Promote equal rights for women in government', 'Replace Buddhism as the state religion of China', 'Encourage resistance to imperial authority'],
    sprint_q1_ans=0,
    sprint_q1_exp='Neo-Confucianism served as ideological glue: it justified the emperor\'s supreme authority, the scholar-gentry\'s social position, gender hierarchy (including foot binding), and the entire meritocratic examination system.',
    sprint_q2='What feature of Sufi Islam made it particularly effective at gaining converts in sub-Saharan Africa and Southeast Asia?',
    sprint_q2_opts=['Sufi missionaries accommodated local customs and emphasized inner spiritual experience rather than rigid legal compliance', 'Sufi armies conquered and forced mass conversions', 'Sufi missionaries required converts to abandon all local traditions immediately', 'Sufi missionaries only worked in the Arabian Peninsula'],
    sprint_q2_ans=0,
    sprint_q2_exp='Sufi missionaries\' flexibility was key to their success. By participating in local customs, learning local languages, and emphasizing personal devotion over legal technicalities, Sufis made Islam accessible in diverse cultural settings where stricter forms of Islam might have been rejected.',
    sprint_q3='The Catholic Church\'s most important political tool in medieval Europe was:',
    sprint_q3_opts=['Excommunication — the power to cut rulers off from the Christian community, which delegitimized their authority over their own subjects', 'Military conquest of rival kingdoms', 'Control of all international trade routes', 'The ability to elect or remove all European monarchs by direct vote'],
    sprint_q3_ans=0,
    sprint_q3_exp='Excommunication was extraordinarily powerful in a society where most people believed salvation depended on church membership. If the Pope excommunicated a king, that king\'s subjects were released from their oaths of loyalty — this made excommunication a devastating political weapon.',
    dropdown_prompt='Match each religion/philosophy with its key mechanism for spreading or maintaining influence.',
    dd_items=[
        ('The belief system that spread through meritocratic civil service exams and justified social hierarchy in East Asia was ___',
         ['Neo-Confucianism', 'Islam', 'Theravada Buddhism', 'Catholic Christianity'],
         'Neo-Confucianism', 'It structured governance through philosophy'),
        ('The religion that spread most widely through merchant trade networks and Sufi missionary flexibility by 1450 was ___',
         ['Islam', 'Buddhism', 'Christianity', 'Hinduism'],
         'Islam', 'It spread along every major trade route'),
        ('The institution that claimed universal spiritual authority over European rulers and preserved Greco-Roman knowledge was the ___',
         ['Catholic Church', 'Buddhist monastery system', 'Islamic caliphate', 'Confucian bureaucracy'],
         'Catholic Church', 'Dominant institution in medieval Europe'),
    ],
    dd_explanation='Neo-Confucianism structured East Asian governance through philosophy and examinations. Islam spread through merchant communities and adaptable Sufi missionaries — making it the most geographically widespread religion by 1450. The Catholic Church\'s universal claims and educational institutions made it the defining institution of medieval European civilization.',
    applied_q1='An AP essay asks how belief systems reinforced political authority c. 1200–1450. Which example provides the STRONGEST argument?',
    applied_q1_opts=['Neo-Confucianism justified the scholar-gentry\'s social dominance and the emperor\'s authority through a philosophical framework that made hierarchy appear natural and morally necessary', 'European monarchs had no connection to religious institutions', 'Islamic rulers never used religion to legitimize their authority', 'Buddhism had no political implications in East Asia'],
    applied_q1_ans=0,
    applied_q1_exp='Neo-Confucianism is the strongest AP example of belief reinforcing political structure: the entire civil service examination system, gender hierarchy, and imperial authority rested on Confucian philosophical justifications. The AP exam rewards specific, well-developed examples like this.',
    applied_q2='Which statement BEST explains why Islam spread more successfully than Christianity in sub-Saharan Africa and Southeast Asia c. 1200–1450?',
    applied_q2_opts=['Islam\'s decentralized spread through merchants and flexible Sufi missionaries reached these regions more effectively than the more institutionally centralized Catholic Church, which lacked strong trade network connections to these areas', 'Christianity was prohibited from spreading outside of Europe by treaty', 'Africans and Southeast Asians preferred Islam because of its military superiority', 'The Catholic Church had no missionaries during this period'],
    applied_q2_ans=0,
    applied_q2_exp='Islam\'s spread through merchant communities and Sufi missionaries gave it a decentralized, adaptable quality. The Catholic Church, while powerful in Europe, was more institutionally centralized and did not have the same commercial network connections to sub-Saharan Africa and coastal Southeast Asia that Muslim merchants had built over centuries.',
    id_prefix='whglobal4'
))

write_file('wh-global-tapestry-part5.ts', build_lesson(
    export_name='whGlobalTapestryPart5Data',
    slug='wh-global-tapestry',
    part_num=5, total_parts=7,
    title='# 🌍 The Global Tapestry (c. 1200–1450)',
    subtitle='Social Structures & Gender Across Civilizations',
    intro_table=['📖 Social Hierarchies & Caste', 'Gender Norms Across Civilizations', 'Slavery & Unfree Labor', '📌 Comparing Social Structures'],
    key_concept='Social structures — how societies organized people into hierarchies based on birth, religion, gender, and occupation — varied significantly across civilizations c. 1200–1450. AP Unit 1 asks you to compare these structures and understand how belief systems reinforced or challenged them.',
    quiz1_q1='The caste system in South Asia (reinforced by Hindu beliefs about dharma and karma) is significant in AP World History primarily because it:',
    quiz1_q1_opts=['Demonstrates how religious ideology can entrench social hierarchy across generations, limiting mobility and defining occupations by birth', 'Was identical to the feudal system in medieval Europe', 'Was introduced by the Delhi Sultanate and replaced all previous social structures', 'Promoted social equality by assigning fixed roles to all members of society'],
    quiz1_q1_ans=0,
    quiz1_q1_exp='The caste system is a model AP example of how religious belief reinforces social hierarchy. Hinduism\'s concepts of dharma (duty according to one\'s caste) and karma (merit affecting future rebirths) made caste hierarchy appear divinely ordained and morally necessary, making social mobility extremely limited.',
    quiz1_q2='Foot binding in Song Dynasty China is historically significant in AP World History because it:',
    quiz1_q2_opts=['Demonstrates how Neo-Confucian ideals of female subordination were physically enforced on elite women, restricting their mobility and reinforcing patriarchal social structures', 'Was practiced by all women across all social classes in China', 'Was introduced by Mongol rulers during the Yuan Dynasty', 'Had no connection to Neo-Confucian philosophy'],
    quiz1_q2_ans=0,
    quiz1_q2_exp='Foot binding spread alongside Neo-Confucianism\'s emphasis on female subordination, modesty, and domestic roles. It was practiced primarily among elite women (a poor peasant woman could not bind her feet and still work in fields), making it both a marker of elite status and a mechanism of female subordination. AP prompts often ask about how belief systems shaped gender norms.',
    content_heading='📖 Social Structures Across Civilizations',
    blocks=[
        ('Social Hierarchies & The Role of Birth', 'Most pre-modern societies organized social status through birth:\n\n| Civilization | Social Structure | Basis |\n|-------------|-----------------|-------|\n| **Song China** | Scholar-gentry → merchants → artisans → peasants | Civil service exams offered limited mobility; birth still mattered |\n| **Medieval Europe** | Clergy → nobles → knights → peasants (serfs) | Hereditary feudalism; Church provided separate hierarchy |\n| **South Asia** | Caste system (Brahmin → Kshatriya → Vaishya → Sudra → Untouchables) | Birth; justified by Hindu dharma and karma |\n| **Mali Empire** | Royal family → nobles → free commoners → enslaved people | Mix of hereditary status and control of trade wealth |'),
        ('Gender Norms c. 1200–1450', 'Patriarchal structures dominated most civilizations, but with significant variation:\n\n- **Song China:** Neo-Confucian norms emphasized female subordination; foot binding spread among elite women; women\'s property rights declined; *exception:* some merchant-class women had economic agency\n- **Medieval Europe:** Women could not inherit land (primogeniture); convents offered an alternative path; noblewomen had limited political influence; peasant women worked alongside men\n- **Islamic societies:** Quran gave women inheritance rights and limits on polygamy (unprecedented for the era); purdah (seclusion) varied by region and class; elite women had more restrictions than poor women who had to work\n- **Sub-Saharan Africa:** More varied — some societies were matrilineal (inheritance through mother\'s line); women traders active in some regions'),
        ('Slavery & Unfree Labor', 'Forced labor existed in multiple forms across this period:\n\n| Form | Where | Details |\n|------|-------|--------|\n| **Serfdom** | Medieval Europe | Peasants bound to land; owed labor to lord; not technically enslaved but not free |\n| **Enslaved people (trans-Saharan)** | West Africa → North Africa | Enslaved Africans traded across the Sahara; served in military, households, administration |\n| **Enslaved people (Indian Ocean)** | East Africa → Middle East | Swahili Coast served as source; enslaved people worked in households and agriculture |\n| **Debt bondage** | South/Southeast Asia | Peasants working off debts to landlords; common but variable |\n\nKey AP distinction: Mediterranean/Islamic slavery was more diverse in function (military, administrative, household) than later Atlantic plantation slavery'),
        ('AP Comparison Anchor', '- **China vs. Europe:** Both patriarchal; China\'s exam system offered limited mobility, Europe\'s hereditary feudalism offered almost none\n- **Islam vs. Confucianism on gender:** Both patriarchal, but Islam\'s Quran gave women more legal rights (inheritance, divorce) than Song China\'s Neo-Confucian norms\n- **Slavery in context:** Pre-1450 slavery was geographically widespread but differed significantly from post-1500 plantation slavery in scale, racial categorization, and hereditary nature'),
    ],
    sprint_q1='What was the primary social function of foot binding in Song Dynasty China?',
    sprint_q1_opts=['To physically enforce Neo-Confucian ideals of female subordination and immobility, marking elite status while restricting women\'s physical and social independence', 'To prepare women for agricultural labor', 'To mark women as merchants rather than peasants', 'To follow a tradition introduced by the Yuan Dynasty'],
    sprint_q1_ans=0,
    sprint_q1_exp='Foot binding is one of the most concrete examples of how ideology shapes bodies and social roles. Neo-Confucianism emphasized female domestic virtue and subordination; foot binding literally restricted elite women\'s mobility, making it a physical embodiment of these ideals.',
    sprint_q2='How did the social structure of medieval Europe differ most fundamentally from that of Song Dynasty China?',
    sprint_q2_opts=['Europe\'s hereditary feudal system offered almost no social mobility based on achievement, while China\'s civil service exam system created a (limited) pathway to advancement based on knowledge', 'Europe had a more centralized government that could override local noble power', 'China\'s social system was based entirely on birth with no examinations', 'Both societies had identical structures based on military service'],
    sprint_q2_ans=0,
    sprint_q2_exp='This is a classic AP comparison: Europe\'s feudal nobility was hereditary (you were born into it), while China\'s civil service exams theoretically allowed any man to achieve high government office through merit. In practice, wealthy families dominated exam preparation, but the principle of merit-based advancement was distinct.',
    sprint_q3='Pre-1450 slavery in the Islamic world differed most significantly from later Atlantic plantation slavery in that:',
    sprint_q3_opts=['Islamic slavery was more diverse in function (military, household, administrative service) and was not organized around a single agricultural commodity or racially defined as hereditary', 'Islamic slavery was limited to small numbers and had little economic impact', 'Atlantic plantation slavery involved less violence than Islamic slavery', 'Both systems were identical in scale, function, and racial categorization'],
    sprint_q3_ans=0,
    sprint_q3_exp='Pre-1450 slavery in Islamic societies included enslaved soldiers (Mamluks), administrators, and concubines — a range of roles. It was not primarily agricultural, not racially codified as permanently hereditary, and operated at a different scale than later Atlantic plantation slavery. AP prompts often ask students to make these distinctions.',
    dropdown_prompt='Match each social structure feature with its civilization.',
    dd_items=[
        ('The social hierarchy based on birth and justified by Hindu concepts of dharma and karma was the ___',
         ['Caste system', 'Feudal system', 'Scholar-gentry system', 'Tributary system'],
         'Caste system', 'Hindu religious justification'),
        ('The practice of binding elite women\'s feet to enforce Neo-Confucian ideals of female subordination was ___',
         ['Foot binding', 'Purdah', 'Serfdom', 'The veil'],
         'Foot binding', 'Song Dynasty China — spread with Neo-Confucianism'),
        ('The system in medieval Europe where peasants were bound to land and owed labor to lords was ___',
         ['Serfdom', 'Slavery', 'Caste', 'Debt bondage'],
         'Serfdom', 'Unfree labor in medieval European feudalism'),
    ],
    dd_explanation='The caste system used Hindu religious ideology to naturalize hereditary social hierarchy. Foot binding physically enforced Neo-Confucian gender norms. Serfdom bound peasants to land in Europe\'s decentralized feudal economy — each represents a different mechanism for organizing and controlling labor and social roles.',
    applied_q1='An AP prompt asks: "Evaluate the extent to which patriarchal social structures limited women\'s roles across multiple civilizations c. 1200–1450." Which argument earns the most complexity points?',
    applied_q1_opts=['While patriarchal norms dominated most civilizations, the Islamic world\'s Quranic inheritance rights gave women more legal protections than Song China\'s Neo-Confucian norms enforced through practices like foot binding, demonstrating that patriarchy manifested differently across cultures', 'Women had equal rights in all civilizations during this period', 'Patriarchal structures were only found in European civilizations', 'All civilizations had identical gender norms derived from Confucian philosophy'],
    applied_q1_ans=0,
    applied_q1_exp='This argument earns complexity by comparing within the general trend (both were patriarchal) while showing meaningful differences (Islamic legal rights vs. Neo-Confucian physical enforcement). AP rewards nuanced arguments that acknowledge both similarity and difference rather than treating civilizations as monolithic.',
    applied_q2='The AP exam\'s focus on social structures c. 1200–1450 primarily asks students to understand:',
    applied_q2_opts=['How societies organized hierarchy (by birth, religion, gender, occupation) and how those structures were reinforced through ideology, law, and physical practices', 'Why social hierarchies were always justified by economic efficiency', 'How modern democratic principles emerged from medieval social systems', 'Why all civilizations had identical social structures regardless of religion or location'],
    applied_q2_ans=0,
    applied_q2_exp='The AP framework for social structures examines three things: the structure itself (who is high, who is low), the mechanism of justification (religion, philosophy, custom), and the enforcement (law, practice, ideology). Understanding all three levels produces stronger AP arguments.',
    id_prefix='whglobal5'
))

write_file('wh-global-tapestry-part6.ts', build_lesson(
    export_name='whGlobalTapestryPart6Data',
    slug='wh-global-tapestry',
    part_num=6, total_parts=7,
    title='# 🌍 The Global Tapestry (c. 1200–1450)',
    subtitle='Technology, Environment & Change Over Time',
    intro_table=['📖 Agricultural Innovations', 'Technology Transfer via Trade', 'Environmental & Demographic Factors', '📌 CCOT: 1200→1450'],
    key_concept='Technological diffusion — how innovations spread between civilizations through trade, conquest, and migration — and change over time analysis (CCOT) are AP skills tested throughout Unit 1. Understanding what changed between 1200 and 1450 (and what stayed the same) is essential for AP LEQ writing.',
    quiz1_q1='Champa rice, which fueled the Song Dynasty\'s population boom, is significant in AP World History because it demonstrates:',
    quiz1_q1_opts=['How agricultural technology transfer through trade networks could transform demographic and economic patterns across entire civilizations', 'That China invented all agricultural innovations independently', 'That fast-growing rice only grew in China\'s climate', 'That Song Dynasty farmers were less productive than farmers in other civilizations'],
    quiz1_q1_ans=0,
    quiz1_q1_exp='Champa rice (imported from Vietnam/Southeast Asia) allowed double-cropping — two harvests per year in southern China\'s climate. This fueled China\'s population growth to over 100 million by the Song period. It\'s a model example of how contact through trade networks transferred agricultural technology with transformative demographic effects.',
    quiz1_q2='The Black Death (1347–1353), which killed ~30–50% of Europe\'s population, affected medieval European society most significantly by:',
    quiz1_q2_opts=['Disrupting feudal labor relations as peasant survivors demanded better conditions, indirectly weakening the feudal system and accelerating social change', 'Having no long-term social or economic consequences', 'Strengthening the Catholic Church\'s authority by demonstrating God\'s power', 'Only affecting urban populations while leaving rural peasants unaffected'],
    quiz1_q2_ans=0,
    quiz1_q2_exp='The Black Death\'s massive population loss gave surviving peasants enormous leverage: lords competed for scarce labor, wages rose, serfdom declined in Western Europe, and peasant uprisings (like the English Peasants\' Revolt of 1381) challenged established hierarchies. The plague is a model example of how environmental/biological factors can accelerate social change.',
    content_heading='📖 Technology, Environment & Change Over Time',
    blocks=[
        ('Agricultural Innovations', 'Agricultural technology spread through trade networks with transformative effects:\n\n| Innovation | Origin | Impact |\n|-----------|--------|--------|\n| **Champa rice** | Vietnam/Southeast Asia → China | Enabled double-cropping; fueled Song Dynasty population boom to 100+ million |\n| **Horse collar** | East Asia → Europe (c. 900 CE) | More efficient horse-drawn plowing; increased agricultural productivity |\n| **Windmills** | Persia → Europe | Grain processing; water management |\n| **Iron tools** | Spread across sub-Saharan Africa | Enabled agriculture in previously difficult terrain; population growth |'),
        ('Technology Transfer via Trade', 'The Silk Roads, Indian Ocean routes, and trans-Saharan routes served as channels for technological diffusion:\n\n- **Gunpowder:** China → Central Asia → Islamic world → Europe (by 1300s); transformed warfare\n- **Paper:** China → Islamic world → Europe (via Spain, c. 1150); transformed literacy and record-keeping\n- **Magnetic compass:** China → Islamic merchants → European sailors; transformed navigation\n- **Printing (movable type):** Korea invented metal movable type before Gutenberg; not yet widely diffused to Europe\n- **Mathematical innovations:** Arabic numerals (from India) → Islamic world → Europe; algebra (*al-jabr*) from Al-Khwarizmi'),
        ('Change Over Time: 1200→1450', 'Key transformations during this period:\n\n| What Changed | What Stayed the Same |\n|-------------|---------------------|\n| Mongol conquests reorganized political map; destroyed Baghdad (1258) | Confucian bureaucracy persisted in China through dynastic change |\n| Black Death killed 30–50% of European and Middle Eastern populations | Caste system persisted in South Asia despite Delhi Sultanate |\n| Mongol Pax temporarily connected Eurasia, facilitating trade and plague | Trans-Saharan and Indian Ocean trade routes remained active |\n| Mali Empire rose to dominance in West Africa | Patriarchal gender norms persisted across most civilizations |'),
        ('AP Comparison Anchor', '- **CCOT skill:** Always identify BOTH what changed AND what persisted — AP rubrics require both\n- **Turning point:** The Mongol period (1200s–1300s) is a major turning point — reorganized political structures, spread plague, stimulated trade\n- **Causation:** Environmental factors (plague, agricultural innovation) shaped social and political outcomes — don\'t reduce history to only political decisions'),
    ],
    sprint_q1='What was the primary significance of Champa rice in Song Dynasty China?',
    sprint_q1_opts=['It enabled double-cropping (two harvests per year), fueling a massive population boom that made Song China the most populous civilization on earth', 'It was a luxury export traded along the Silk Road', 'It was only grown in northern China near the Mongol border', 'It replaced silk as China\'s primary export commodity'],
    sprint_q1_ans=0,
    sprint_q1_exp='Champa rice\'s fast growing cycle allowed farmers in southern China to harvest twice per year. This agricultural revolution fueled China\'s population growth (some estimates suggest 100 million+ by the Song period) and supported the commercialized southern Chinese economy that made Song China the world\'s largest economy.',
    sprint_q2='Gunpowder technology\'s spread from China through the Islamic world to Europe by the 1300s demonstrates:',
    sprint_q2_opts=['How technological innovations spread along trade routes and through cross-cultural contact, eventually transforming warfare and power dynamics globally', 'That China intentionally shared military secrets with all civilizations', 'That gunpowder was independently invented in multiple locations simultaneously', 'That the Mongols prevented technology transfer between China and Europe'],
    sprint_q2_ans=0,
    sprint_q2_exp='Gunpowder\'s diffusion is a model example of technology transfer through trade routes: it moved along the Silk Road through the Islamic world before reaching European hands. By the 14th–15th centuries, gunpowder weapons were transforming warfare across Eurasia, demonstrating how trade routes transferred not just goods but world-changing technologies.',
    sprint_q3='For a CCOT essay about the period 1200–1450, which thesis structure is most effective?',
    sprint_q3_opts=['Identify specific transformations (e.g., Mongol conquests, Black Death) AND specific continuities (e.g., trans-Saharan trade, Confucian governance) to demonstrate complex historical understanding', 'Only discuss changes and ignore all continuities', 'Only discuss continuities and avoid mentioning changes', 'List as many facts as possible without connecting them to a thesis'],
    sprint_q3_ans=0,
    sprint_q3_exp='CCOT essays earn the highest rubric scores when they address both change AND continuity with specific evidence. AP readers are specifically looking for both elements — a thesis that only addresses one earns partial credit.',
    dropdown_prompt='Match each technology with its correct origin and impact.',
    dd_items=[
        ('The fast-growing rice variety from Southeast Asia that fueled China\'s population boom was ___',
         ['Champa rice', 'Basmati rice', 'Wild rice', 'Jasmine rice'],
         'Champa rice', 'Originated in Vietnam; enabled double-cropping in Song China'),
        ('The Chinese invention that transformed navigation and was transmitted through the Islamic world to European sailors was the ___',
         ['Magnetic compass', 'Astrolabe', 'Sextant', 'Quadrant'],
         'Magnetic compass', 'Chinese → Islamic → European navigators'),
        ('The Chinese military technology that spread along the Silk Road to transform warfare in the Islamic world and Europe was ___',
         ['Gunpowder', 'The crossbow', 'Steel armor', 'The stirrup'],
         'Gunpowder', 'Revolutionary military technology spreading west via trade routes'),
    ],
    dd_explanation='Champa rice transformed Song Chinese agriculture and demography. The magnetic compass, transmitted through Islamic maritime merchants, enabled the later European Age of Exploration. Gunpowder, originating in China and spreading westward through trade routes, transformed warfare and ultimately European power dynamics. All three exemplify technological diffusion through cross-cultural contact.',
    applied_q1='An AP question asks: "What was the most significant consequence of the Mongol Empire for Afro-Eurasian civilizations c. 1200–1400?" Which answer earns the most credit?',
    applied_q1_opts=['The Mongol Empire had contradictory effects: its conquests (especially the 1258 destruction of Baghdad) disrupted existing states, while the Pax Mongolica simultaneously stimulated trade — and the connected networks inadvertently facilitated the catastrophic spread of the Black Death', 'The Mongol Empire only had positive effects by promoting trade', 'The Mongol Empire had no significant long-term consequences', 'The Mongol Empire exclusively destroyed civilizations without any constructive impacts'],
    applied_q1_ans=0,
    applied_q1_exp='This answer earns complexity points by acknowledging multiple contradictory effects rather than reducing the Mongol Empire to a single verdict. AP rewards nuanced analysis that acknowledges complexity within a period: destruction AND trade stimulation AND plague facilitation can all be true simultaneously.',
    applied_q2='For a CCOT essay about global trade c. 1200–1450, which statement demonstrates the strongest historical reasoning?',
    applied_q2_opts=['While the specific goods, routes, and commercial powers evolved over this period (with the Mongol Pax temporarily restructuring Silk Road trade), the fundamental pattern of Indian Ocean and trans-Saharan commerce connecting distant civilizations through luxury goods and religious diffusion remained continuous', 'Trade completely changed in every way between 1200 and 1450', 'Nothing changed in global trade during this period', 'Trade was only significant after 1450 when Europeans entered the scene'],
    applied_q2_ans=0,
    applied_q2_exp='This answer demonstrates CCOT mastery: it identifies specific change (Mongol restructuring) while arguing for fundamental continuity (the trade networks themselves persisting), producing a nuanced argument that addresses both dimensions of the question.',
    id_prefix='whglobal6'
))

write_file('wh-global-tapestry-part7.ts', build_lesson(
    export_name='whGlobalTapestryPart7Data',
    slug='wh-global-tapestry',
    part_num=7, total_parts=7,
    title='# 🌍 The Global Tapestry (c. 1200–1450)',
    subtitle='AP Review & Exam Mastery',
    intro_table=['📖 High-Yield Vocabulary', 'Common AP Prompt Types', 'Scoring-Aware Writing Strategies', '📌 Pulling It All Together'],
    key_concept='Unit 1 of AP World History covers one of the most comparison-rich periods on the exam. Mastering the vocabulary, understanding the prompt patterns, and deploying specific evidence efficiently are the keys to high scores on AP Multiple Choice, SAQ, LEQ, and DBQ questions about c. 1200–1450.',
    quiz1_q1='An AP SAQ asks: "Identify ONE similarity between the political structures of Song Dynasty China and the Byzantine Empire c. 1200–1450." Which response earns full credit?',
    quiz1_q1_opts=['Both Song China and the Byzantine Empire had centralized governments where the ruler claimed a mandate or divine authority over a bureaucratic state — China through the Mandate of Heaven and Confucian governance, Byzantium through the emperor\'s role as God\'s representative on earth', 'Both China and Byzantium had identical economic systems based on agricultural surpluses', 'Both states were conquered by the Mongols simultaneously in the same year', 'Both states had elected legislatures that checked imperial power'],
    quiz1_q1_ans=0,
    quiz1_q1_exp='This SAQ response earns full credit because it identifies a specific similarity (centralized governance with divine/cosmological legitimation), names both civilizations, and provides specific evidence for each. AP SAQ responses need to be precise and evidence-based, not vague.',
    quiz1_q2='An AP LEQ prompt asks: "Evaluate the extent to which trade networks drove cultural change in Afro-Eurasia c. 1200–1450." What is the best thesis?',
    quiz1_q2_opts=['Trade networks were the primary driver of cultural change in this period, as the spread of Islam, Buddhist philosophy, Chinese technologies, and artistic styles through the Indian Ocean, trans-Saharan, and Silk Road networks transformed societies from Southeast Asia to West Africa more thoroughly than political conquest alone', 'Trade had no cultural impact — it only moved physical goods', 'Political conquest was the only cause of cultural change in this period', 'Cultural change only occurred in Europe during this period'],
    quiz1_q2_ans=0,
    quiz1_q2_exp='This thesis earns points for being historically defensible, making a specific claim about extent ("primary driver"), naming specific mechanisms (three trade routes), naming specific cultural changes (Islam, Buddhism, technologies), and naming specific regions. It sets up a multi-paragraph essay with clear evidence.',
    content_heading='📖 AP Review: High-Yield Vocabulary & Exam Strategy',
    blocks=[
        ('Terms You Should Use Precisely', 'High-yield vocabulary for Unit 1 AP essays and multiple choice:\n\n- **Neo-Confucianism** — synthesis of Confucian ethics with Buddhist/Daoist elements; shaped governance and gender in East Asia\n- **Tributary system** — China\'s diplomatic framework where neighboring states sent gifts ("tribute") acknowledging Chinese cultural superiority\n- **Monsoon winds** — seasonal winds driving Indian Ocean trade\n- **Pax Mongolica** — relative stability under Mongol rule enabling Silk Road trade (and plague spread)\n- **Sufism** — mystical branch of Islam; key mechanism for Islamic spread through trade routes\n- **Syncretic** — blending of cultural/religious elements from different sources (e.g., Swahili culture)\n- **Foot binding** — practice enforcing female subordination in elite Chinese society; linked to Neo-Confucian ideology\n- **Bhakti movement** — Hindu devotional movement in South Asia; partly a response to Muslim rule'),
        ('Common AP Prompt Types', 'Most frequent Unit 1 question patterns:\n\n- **Causation:** Why did [civilization] achieve [outcome]? (e.g., Why did Song China develop the world\'s largest economy?)\n- **Comparison:** How did [civilization A] differ from [civilization B] in [category]? (e.g., China vs. Europe in political organization)\n- **CCOT:** What changed and what remained stable between 1200 and 1450? (e.g., in trade networks, gender norms, or political structures)\n- **Continuity:** Why did [structure] persist despite [challenge]? (e.g., Why did caste persist under the Delhi Sultanate?)\n- **Evaluation:** To what extent did [factor] drive [outcome]? (e.g., To what extent did trade drive the spread of Islam?)'),
        ('AP Comparison Anchor', '**Rubric-friendly response skeleton for comparison LEQs:**\n\n1. **Thesis:** Make a historically defensible claim about similarity OR difference with a line of reasoning\n2. **Context paragraph:** Briefly establish the relevant historical context (c. 1200–1450 globally)\n3. **Body paragraph 1 (Similarity):** Claim → specific evidence → reasoning about why this similarity is historically significant\n4. **Body paragraph 2 (Difference):** Claim → specific evidence → reasoning about why this difference matters\n5. **Complexity:** Add a nuance — e.g., "While both [X] and [Y] were patriarchal, the mechanisms differed significantly" OR connect to a different time period'),
    ],
    sprint_q1='An AP prompt says "briefly explain ONE reason why." How should you structure your answer?',
    sprint_q1_opts=['One specific, historically defensible claim + one piece of specific evidence + one sentence of historical reasoning connecting the evidence to the claim', 'A long list of all facts you know about the topic', 'A one-word answer naming the reason without any explanation', 'A general statement without specific historical evidence'],
    sprint_q1_ans=0,
    sprint_q1_exp='"Briefly explain ONE reason" is a standard AP SAQ command. It requires: (1) a specific claim, (2) specific evidence (a named person, event, institution, or date), and (3) reasoning that connects evidence to the claim. Vague answers and fact lists without reasoning do not earn full credit.',
    sprint_q2='Which of the following AP exam strategies is most effective for multiple-choice questions about Unit 1?',
    sprint_q2_opts=['Eliminate answers that are historically true but irrelevant to the specific question asked, especially when the question specifies a particular region, time period, or historical relationship', 'Always choose the answer with the most complex language', 'Guess randomly if you are unsure, as all answers are equally likely', 'Avoid answers that mention trade routes, since these are always wrong'],
    sprint_q2_ans=0,
    sprint_q2_exp='The most common mistake on AP MCQ is choosing an answer that is historically true but doesn\'t answer the specific question. Always check: Does this answer address the correct time period? The correct region? The specific relationship asked about? Eliminate anything that doesn\'t fit the question\'s parameters.',
    sprint_q3='For an AP LEQ about Unit 1, what move earns "complexity" points on the rubric?',
    sprint_q3_opts=['Explaining a nuance, qualification, or contradiction within the argument, OR connecting the Unit 1 argument to developments in a different time period or region', 'Writing more than five pages', 'Memorizing and repeating the exact textbook definition of every term', 'Avoiding any qualifications or exceptions to your main argument'],
    sprint_q3_ans=0,
    sprint_q3_exp='AP complexity points require demonstrating sophisticated historical understanding: acknowledging that historical patterns have exceptions, contradictions, or varying significance; or connecting evidence to a different time period/region to show how the argument resonates more broadly. Complexity is about nuance, not length.',
    dropdown_prompt='Match each AP term with its correct definition for Unit 1.',
    dd_items=[
        ('The mystical branch of Islam most responsible for spreading the religion through accommodation with local cultures was ___',
         ['Sufism', 'Sharia', 'Sunni Islam', 'Shia Islam'],
         'Sufism', 'Mystical branch — key to flexible, peaceful Islamic spread'),
        ('China\'s diplomatic framework where neighboring states sent tribute gifts acknowledging Chinese cultural superiority was the ___',
         ['Tributary system', 'Civil service system', 'Feudal system', 'Mandate of Heaven'],
         'Tributary system', 'Diplomatic framework centered on Chinese cultural prestige'),
        ('The term for cultural blending — as seen in Swahili culture\'s mix of Bantu African and Islamic elements — is ___',
         ['Syncretic', 'Hegemonic', 'Isolationist', 'Monolithic'],
         'Syncretic', 'Blending of cultural/religious elements from multiple sources'),
    ],
    dd_explanation='Sufism\'s flexibility made it the primary mechanism for Islamic spread through trade networks. The tributary system structured China\'s relationships with East and Southeast Asian neighbors. Syncretic describes the hybrid cultures (Swahili, Bhakti) that emerged where different cultural traditions met through trade and contact.',
    applied_q1='You have 15 minutes to write an AP SAQ about Unit 1. What is the most efficient strategy?',
    applied_q1_opts=['Spend 2 minutes identifying exactly what the prompt asks (causation? comparison? continuity?), 2 minutes planning specific evidence for each part, then write focused claim+evidence+reasoning sentences without introduction or conclusion', 'Write a long introduction summarizing everything you know about Unit 1', 'Skip the planning stage and write as much as possible immediately', 'Only answer the first part and skip the remaining parts to ensure quality'],
    applied_q1_ans=0,
    applied_q1_exp='SAQ efficiency requires targeting the exact question being asked. AP readers grade on specificity and reasoning, not length. A well-planned 3-sentence response (claim + evidence + reasoning) for each part earns more credit than a rambling paragraph that never directly addresses the question.',
    applied_q2='Which AP Unit 1 comparison earns the strongest argument for a comparison LEQ?',
    applied_q2_opts=['Comparing Song Dynasty China and medieval Europe on political organization, because these two civilizations represent fundamentally different approaches (meritocratic centralization vs. hereditary feudal decentralization) with specific, well-documented evidence on both sides', 'Comparing Song Dynasty China and the Aztec Empire, because they are on different continents', 'Comparing Byzantine Empire and European feudalism, because they are very similar', 'Comparing any two civilizations without specific evidence'],
    applied_q2_ans=0,
    applied_q2_exp='Song China vs. medieval Europe is the strongest Unit 1 LEQ comparison because: (1) both are well-documented, (2) they represent meaningfully different political structures, (3) there is specific evidence for both, and (4) the comparison illuminates a significant historical pattern (meritocracy vs. hereditary aristocracy). The best AP comparisons maximize meaningful difference while keeping context constant.',
    id_prefix='whglobal7'
))

print("\\nAll wh-global-tapestry parts 4-7 written successfully!")
