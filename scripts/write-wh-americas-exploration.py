#!/usr/bin/env python3
"""Write remaining AP World History topics: Americas/Africa, Exploration, Maritime/Labor, Indian Ocean."""
import os

base = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), 
                    'src', 'data', 'interactive-lessons')

def w(filename, content):
    with open(os.path.join(base, filename), 'w') as f:
        f.write(content)
    print(f"✓ {filename}")

def make_part(export_var, slug, part_num, title_emoji, course_title, subtitle, 
              key_concept, q1, q1_opts, q1_ans, q1_exp,
              q2, q2_opts, q2_ans, q2_exp,
              content_body,
              q3, q3_opts, q3_ans, q3_exp,
              q4, q4_opts, q4_ans, q4_exp,
              q5, q5_opts, q5_ans, q5_exp,
              dd1_label, dd1_opts, dd2_label, dd2_opts, dd3_label, dd3_opts,
              dd_answers, dd_hints, dd_explanation,
              q6, q6_opts, q6_ans, q6_exp,
              q7, q7_opts, q7_ans, q7_exp,
              id_pre):

    def mc(q, opts, ans, exp):
        opts_lines = '\n'.join([f"              '{o}'," for o in opts])
        return f"""          {{
            question: '{q}',
            options: [
{opts_lines}
            ],
            correctAnswer: {ans},
            explanation: '{exp}'
          }}"""

    def dd(label, opts):
        return "          {{\n            label: '{}',\n            options: [{}]\n          }}".format(
            label, ', '.join([f"'{o}'" for o in opts]))

    dd_ans_str = ', '.join([f"'{a}'" for a in dd_answers])
    dd_hints_str = "', '".join(dd_hints)

    return f"""export const {export_var} = {{
  topicSlug: '{slug}',
  sections: [
    {{
      id: '{id_pre}-intro',
      type: 'text' as const,
      content: `
# {title_emoji} {course_title}

**Part {part_num} of 7 — {subtitle}**

---

> 🔑 **Key Concept:** {key_concept}
      \`
    }},
    {{
      id: '{id_pre}-quiz1',
      type: 'multiple-choice' as const,
      content: \`**Concept Check** 🎯\`,
      exercise: {{
        questions: [
{mc(q1, q1_opts, q1_ans, q1_exp)},
{mc(q2, q2_opts, q2_ans, q2_exp)}
        ]
      }}
    }},
    {{
      id: '{id_pre}-content',
      type: 'text' as const,
      content: \`
{content_body}
      \`
    }},
    {{
      id: '{id_pre}-input',
      type: 'multiple-choice' as const,
      content: \`**Applied Recall: 3-Question Sprint** 🎯\`,
      exercise: {{
        questions: [
{mc(q3, q3_opts, q3_ans, q3_exp)},
{mc(q4, q4_opts, q4_ans, q4_exp)},
{mc(q5, q5_opts, q5_ans, q5_exp)}
        ]
      }}
    }},
    {{
      id: '{id_pre}-dropdown',
      type: 'dropdown-select' as const,
      content: \`**Match the Idea: Evidence to Claim**\`,
      exercise: {{
        dropdowns: [
{dd(dd1_label, dd1_opts)},
{dd(dd2_label, dd2_opts)},
{dd(dd3_label, dd3_opts)}
        ],
        correctAnswers: [{dd_ans_str}],
        hint1: '{dd_hints[0]}',
        hint2: '{dd_hints[1]}',
        hint3: '{dd_hints[2]}',
        explanation: '{dd_explanation}'
      }}
    }},
    {{
      id: '{id_pre}-applied',
      type: 'multiple-choice' as const,
      content: \`**AP-Style Application** 🎯\`,
      exercise: {{
        questions: [
{mc(q6, q6_opts, q6_ans, q6_exp)},
{mc(q7, q7_opts, q7_ans, q7_exp)}
        ]
      }}
    }}
  ]
}}
"""

# ==============================================================
# AMERICAS & AFRICA c. 1200-1450
# ==============================================================
AA = 'wh-americas-africa-1200'

for pnum, data in {
2: dict(
    export_var='whAmericasAfrica1200Part2Data',
    subtitle='The Aztec (Mexica) Empire',
    key_concept='The Aztec Empire (c. 1345-1521) was a tributary empire in Mesoamerica that controlled central Mexico through military conquest and tribute extraction. AP questions focus on how the Aztecs organized their empire, their religious practices, and the factors that enabled Spanish conquest.',
    q1='The Aztec tributary system was distinct from direct colonial rule because:',
    q1_opts=['Conquered peoples maintained their own rulers and paid tribute to Tenochtitlan rather than being directly administered by Aztec officials, reducing governance costs while extracting wealth', 'The Aztec Empire directly administered all territory', 'No tribute was extracted from conquered peoples', 'Conquered peoples became full Aztec citizens with equal rights'],
    q1_ans=0, q1_exp='The tributary model reduced administrative costs but had a key vulnerability: conquered peoples who resented tribute demands were potential allies for external enemies — a fact Hernán Cortés exploited by allying with the Tlaxcalans in 1519.',
    q2='Tenochtitlan (the Aztec capital) was remarkable primarily because:',
    q2_opts=['Built on an island in Lake Texcoco, it housed 200,000+ people and was connected to the mainland by causeways — larger than any contemporary European city, with sophisticated urban infrastructure', 'It was the largest city in pre-Columbian North America with no urban infrastructure', 'It was a nomadic camp that moved seasonally', 'It had a larger population than all of Europe combined'],
    q2_ans=0, q2_exp='Tenochtitlan\'s urban sophistication was comparable to contemporary European capitals: floating garden agriculture (chinampas), aqueducts, markets (tianguis), temples, palaces. Spanish conquistadors described it with awe. Its island location made it easily defended but also ultimately a trap during the 1521 siege.',
    content_body='''## 📖 The Aztec Empire

> **Political Organization**

| Feature | Details |
|---------|---------|
| **Capital** | Tenochtitlan (modern Mexico City); built on island in Lake Texcoco |
| **Founded** | c. 1345; Triple Alliance formed 1428 (Mexica + Texcoco + Tlacopan) |
| **Governance** | Tributary system — conquered peoples paid tribute; kept local rulers |
| **Agriculture** | Chinampas (floating gardens) in Lake Texcoco; intensive maize cultivation |
| **Trade** | Pochteca (long-distance merchant class); markets in Tlatelolco |

> **Religion and Human Sacrifice**

Aztec religion centered on maintaining cosmic order through blood sacrifice:

- Sun god Huitzilopochtli required human blood to rise each day
- Scale of sacrifice was extraordinary: Templo Mayor dedication (1487) may have involved thousands of sacrificial victims
- Victims primarily were prisoners of war — creating incentive for "Flower Wars" (ritual wars designed to capture rather than kill enemies)
- AP note: Human sacrifice was real and significant, but should be contextualized — Aztec religion was sophisticated, with complex cosmology and calendrical systems

> **Factors Enabling Spanish Conquest (1521)**

Why did ~500 Spaniards conquer an empire of millions?

1. **Indigenous allies:** Tlaxcalans and other tribute-resentful peoples allied with Cortés
2. **Disease:** Smallpox epidemic 1520 killed enormous numbers including Aztec emperor Cuitláhuac
3. **Technology:** Spanish horses, steel armor, and firearms gave significant tactical advantage
4. **Psychological disruption:** Cortés\\'s capture of Moctezuma II paralyzed decision-making
5. **Siege warfare:** Final siege of Tenochtitlan 1521 cut off food and water supplies

> **AP Comparison Anchor**

- **Aztec vs. Inca:** Both tributary empires; Inca had more direct administrative control (mit\\'a system, road network); Aztec relied more on tribute with local rulers intact
- **Both fell to Spanish:** Similar factors — disease, indigenous allies, European technology''',
    q3='The Aztec "Flower Wars" (ritual wars to capture enemies for sacrifice) were significant because they:',
    q3_opts=['Created a cycle where wars were fought to acquire sacrificial victims, which required more wars, while simultaneously training warriors — but at the political cost of keeping potential allies permanently hostile', 'Were purely ceremonial with no actual violence', 'Strengthened relationships between the Aztecs and their neighbors', 'Were the primary method of territory expansion'],
    q3_ans=0, q3_exp='The Flower War system was strategically counterproductive: it maintained permanent enmity with neighboring states (especially the Tlaxcalans, never conquered by the Aztecs despite centuries of warfare) who then became Cortés\'s most important allies. The religious system requiring ongoing sacrifice created the political conditions that enabled the empire\'s conquest.',
    q4='Aztec chinampas (floating garden agriculture) demonstrated:',
    q4_opts=['How pre-Columbian peoples adapted agricultural technology to challenging wetland environments, producing remarkable food yields that supported the large urban population of Tenochtitlan without depleting soil fertility', 'That the Aztecs had no agricultural knowledge', 'That floating gardens were only possible with European technology', 'That Aztec agriculture was inferior to European farming in every respect'],
    q4_ans=0, q4_exp='Chinampas were sophisticated agricultural engineering: raised beds in the lake, fertilized by lake sediment and human waste, continuously productive without the soil depletion that plagued European slash-and-burn agriculture. They represent indigenous technological achievement comparable to any contemporary civilization.',
    q5='Smallpox\'s role in the Spanish conquest of the Aztec Empire demonstrates which AP concept?',
    q5_opts=['That biological factors (disease) can decisively alter the outcomes of political and military conflicts — the 1520 epidemic killed more Aztec defenders than Spanish weapons and disrupted political leadership at the critical moment of the conquest', 'That disease had no role in the Spanish conquest', 'That the Spanish deliberately introduced smallpox as a weapon', 'That epidemics only affect non-European populations'],
    q5_ans=0, q5_exp='Smallpox arrived in 1520 during a Spanish retreat, killing Aztec emperor Cuitláhuac and devastating the population defending Tenochtitlan. The convergence of disease + indigenous allies + Spanish military technology + political disruption (Moctezuma\'s capture) created a perfect storm that overwhelmed an otherwise formidable empire. No single factor explains the conquest — AP rewards multi-causal analysis.',
    dd1_label='The Aztec capital built on an island in Lake Texcoco, housing 200,000+ people, was ___',
    dd1_opts=['Tenochtitlan', 'Cuzco', 'Tlaxcala', 'Chichen Itza'],
    dd2_label='The Aztec system of raised agricultural beds in lakes that produced high food yields was ___',
    dd2_opts=['Chinampas', 'Mit\'a', 'Slash-and-burn', 'Terrace farming'],
    dd3_label='The Aztec ritual wars designed to capture enemies for sacrifice rather than kill them were called ___',
    dd3_opts=['Flower Wars', 'Holy Wars', 'Tributary Wars', 'Conquest Wars'],
    dd_answers=['Tenochtitlan', 'Chinampas', 'Flower Wars'],
    dd_hints=['Aztec capital — island in Lake Texcoco — modern Mexico City', 'Floating gardens — intensive lake agriculture', 'Ritual warfare — capture for sacrifice — kept Tlaxcala hostile'],
    dd_explanation='Tenochtitlan\'s urban sophistication challenged European assumptions about non-European civilization. Chinampas demonstrate indigenous agricultural ingenuity. Flower Wars maintained the sacrificial system but at the political cost of permanent neighboring hostility — a strategic liability exploited by Cortés.',
    q6='An AP prompt asks: "What factors explain the Spanish conquest of the Aztec Empire?" Which answer best demonstrates historical complexity?',
    q6_opts=['The conquest resulted from multiple intersecting factors — Spanish military technology, indigenous allies (Tlaxcalans resentful of Aztec tribute demands), disease (smallpox 1520), and Aztec political disruption — with no single factor sufficient alone: thousands of Tlaxcalan warriors were more decisive than the few hundred Spanish soldiers', 'The conquest was inevitable because Aztec civilization was primitive', 'Spanish weapons alone explain the conquest', 'The Aztecs voluntarily surrendered without resistance'],
    q6_ans=0, q6_exp='Multi-causal explanation with appropriate weighting is the AP standard. Noting that indigenous allies were numerically more important than Spanish soldiers directly challenges the "superior European technology" narrative while still acknowledging technology\'s role. This type of nuanced, multi-factor analysis with appropriate emphasis is what earns AP complexity points.',
    q7='Comparing the Aztec and Inca empires, which statement is most historically accurate?',
    q7_opts=['Both were large tributary empires that fell to Spanish conquest in the 1520s-1530s through similar combinations of indigenous allies, disease, and European technology, but the Inca had more direct administrative infrastructure (road network, mit\'a labor system, quipus for record-keeping) while the Aztec relied more heavily on tribute from semi-autonomous conquered states', 'The two empires had identical governance systems', 'The Inca were never conquered by Europeans', 'The Aztec had more sophisticated administrative infrastructure than the Inca'],
    q7_ans=0, q7_exp='This comparison earns AP points by identifying both similarity (tributary empires, similar conquest vulnerabilities) and meaningful difference (degree of administrative integration). The Inca road system and mit\'a labor draft represented more direct imperial control than the Aztec tributary model — a difference that affected both how each empire functioned and how Spanish conquest proceeded (Pizarro vs. Cortés used different strategies).',
    id_pre='whaaf2'
),
3: dict(
    export_var='whAmericasAfrica1200Part3Data',
    subtitle='The Inca Empire',
    key_concept='The Inca Empire (c. 1438-1533) was the largest pre-Columbian empire in the Americas, stretching 2,500 miles along the Andes. AP questions focus on Inca administrative innovations (road system, mit\'a labor, quipus), how they integrated conquered peoples, and the factors enabling Spanish conquest.',
    q1='The Inca mit\'a labor system was significant because:',
    q1_opts=['It created a state labor draft requiring communities to contribute labor (not money) for state projects — building the road network, temples, and agricultural terraces that underpinned Inca power without requiring a monetary economy', 'It was a monetary taxation system identical to European feudal taxation', 'It only applied to Inca nobles, not conquered peoples', 'It was a voluntary charity system with no compulsory element'],
    q1_ans=0, q1_exp='The mit\'a labor system is the Inca\'s key administrative innovation for AP. Rather than taxing money (which the Inca economy did not use), the state extracted labor: communities built roads, staffed armies, worked state farms. The roads built by mit\'a labor then enabled the rapid movement of armies and goods that maintained the empire.',
    q2='The Inca quipu system (knotted string records) demonstrates:',
    q2_opts=['That sophisticated record-keeping and administrative organization is possible without written language — the Inca managed a 2,500-mile empire using knotted string records that encoded numerical and possibly narrative information', 'That the Inca had no administrative organization', 'That writing systems are universally required for state-level organization', 'That the Inca borrowed the quipu from Aztec civilization'],
    q2_ans=0, q2_exp='The quipu challenges the assumption that writing is necessary for complex governance. Inca administrators (quipucamayocs) used knotted strings of different colors, knot types, and positions to record census data, tribute amounts, historical information, and possibly narrative content. The Inca empire\'s administrative sophistication was fully comparable to literate empires.',
    content_body='''## 📖 The Inca Empire

> **Administrative Innovations**

The Inca Empire was the most administratively sophisticated pre-Columbian civilization:

| Innovation | Purpose | Details |
|-----------|---------|---------|
| **Road network** | Military movement, trade, communication | 25,000+ miles; runners (chasquis) relayed messages at ~200 miles/day |
| **Mit\'a labor** | State construction and production | Communities owed labor (not money) to the state |
| **Quipus** | Record-keeping without writing | Knotted strings recording census, tribute, history |
| **Storehouses (qollqa)** | State redistribution | Stored food, textiles, weapons at intervals along roads |
| **Resettlement (mitimas)** | Cultural integration | Loyal populations moved to newly conquered areas |

> **Political Integration**

How the Inca integrated conquered peoples:

- **"Bread and circuses":** Generous redistribution — state fed workers, provided chicha (maize beer), clothing
- **Local ruler incorporation:** Conquered chiefs (curacas) retained authority if they accepted Inca sovereignty
- **Children as hostages:** Sons of conquered elites brought to Cuzco for education — simultaneously creating loyalty and removing potential rebel leaders
- **Religion:** Inca sun worship integrated local deities — conquered gods\\'  statues brought to Cuzco, held "hostage"

> **Cuzco: The Navel of the World**

The Inca capital Cuzco was the administrative and religious center:

- Shaped as a puma (Inca sacred animal) in urban plan
- Population c. 100,000+ at its peak
- Coricancha (Sun Temple) lined with gold — later replaced by Spanish cathedral
- Divided into four quarters (suyus) — the empire called Tawantinsuyu ("Four Regions Together")

> **Spanish Conquest (1532)**

Pizarro conquered a much larger Inca Empire with similar advantages:

- **Civil war:** Inca Empire was divided by a succession war (Huáscar vs. Atahualpa); Pizarro arrived just as Atahualpa won
- **Capture of Atahualpa:** Ambush at Cajamarca; Atahualpa captured; empire\'s command structure paralyzed
- **Ransom room:** Atahualpa offered room full of gold for release — paid and then killed anyway
- **Disease:** Smallpox preceded Spanish arrival, killing Inca emperor Huayna Capac and triggering succession crisis''',
    q3='The Inca road network\'s military significance was that it:',
    q3_opts=['Enabled rapid movement of armies from Cuzco to any point in the 2,500-mile empire within weeks rather than months, allowing the state to respond quickly to rebellions and project military force across vast Andean distances that would otherwise be impassable', 'Was only used for trade with no military applications', 'Was built by Inca nobility with no labor contribution from conquered peoples', 'Primarily served as a tourist attraction with no practical purpose'],
    q3_ans=0, q3_exp='The road network\'s military and administrative functions were inseparable: roads that moved trade goods also moved armies, and armies that built roads also depended on them for supply. The chasquis (relay runners) carried messages the length of the empire in days, enabling imperial governance of what would otherwise be impossibly large territory.',
    q4='The Spanish capture of Inca emperor Atahualpa at Cajamarca (1532) was strategically decisive because:',
    q4_opts=['In a system of divine kingship where the Sapa Inca was the living son of the Sun God with absolute authority, capturing the ruler paralyzed imperial decision-making — the army didn\'t know whether to attack (risking the emperor\'s execution) or surrender', 'The Inca army simply had no weapons', 'Atahualpa voluntarily surrendered because he admired Spanish culture', 'The capture had no significant impact on the Inca state'],
    q4_ans=0, q4_exp='Cajamarca is one of history\'s most consequential ambushes: 168 Spaniards captured an emperor commanding 80,000+ soldiers by exploiting the political paralysis that came from divine kingship. The same centralized authority structure that made the Inca state efficient (one ruler with absolute authority) became its greatest vulnerability when that ruler was captured.',
    q5='Comparing Inca mit\'a labor to Aztec tribute, which statement best demonstrates AP analytical sophistication?',
    q5_opts=['Both systems extracted wealth from conquered peoples, but through different mechanisms reflecting different economic contexts: the Inca\'s labor draft (mit\'a) suited an Andean economy without money but with communal labor traditions, while the Aztec tribute system extracted goods and luxury items appropriate for a market-oriented Mesoamerican economy with long-distance commerce', 'The two systems were identical in every respect', 'The Inca system was inferior to the Aztec system', 'Neither empire extracted anything from conquered peoples'],
    q5_ans=0, q5_exp='This comparison demonstrates AP sophistication by explaining WHY the systems differed (different economic contexts: market vs. non-market) rather than just noting they were different. Recognizing that different societies develop different institutional forms based on their specific economic and environmental contexts is a high-level AP historical thinking skill.',
    dd1_label='The Inca labor tax requiring communities to contribute work for state projects was the ___',
    dd1_opts=["Mit'a system", 'Tribute system', 'Devshirme', 'Zamindar system'],
    dd2_label='The Inca record-keeping system using knotted strings to track census and tribute data was ___',
    dd2_opts=['Quipus', 'Cuneiform', 'Hieroglyphics', 'Pictographs'],
    dd3_label='The Inca Empire\'s capital city, called "the navel of the world," was ___',
    dd3_opts=['Cuzco', 'Tenochtitlan', 'Machu Picchu', 'Cajamarca'],
    dd_answers=["Mit'a system", 'Quipus', 'Cuzco'],
    dd_hints=['Labor draft — not money — communities owed work', 'Knotted strings — record-keeping without writing', 'Inca capital — four quarters — sun temple Coricancha'],
    dd_explanation='The mit\'a labor system is the Inca\'s primary administrative innovation for AP. Quipus demonstrate that complex governance is possible without alphabetic writing. Cuzco\'s organization (four quarters = Tawantinsuyu) reflects the imperial ideology of organizing the whole world around the Inca capital.',
    q6='An AP LEQ compares the Aztec and Inca empires. Which thesis demonstrates the strongest historical analysis?',
    q6_opts=['While both the Aztec and Inca empires were large tributary states that fell to Spanish conquest, they employed fundamentally different administrative approaches reflecting their geographic and economic contexts: the Inca\'s direct administration through roads, mit\'a labor, and resettlement programs suited Andean geography, while the Aztec\'s tributary model with local autonomy suited Mesoamerica\'s more commercially integrated, urbanized economy', 'Both empires were identical in governance', 'The Aztec Empire was superior to the Inca in every respect', 'Geography had no impact on how these empires were organized'],
    q6_ans=0, q6_exp='This thesis earns full AP credit: acknowledges similarity (both tributary, both Spanish conquest), identifies meaningful difference (administrative approach), explains WHY they differed (geographic and economic contexts), and connects specific evidence (roads/mit\'a vs. local autonomy/tribute). AP rewards thesis statements that go beyond "they were similar and different" to explain the causes of the differences.',
    q7='For AP World History, the Inca and Aztec empires are most significant because they demonstrate that:',
    q7_opts=['Pre-Columbian Americas contained sophisticated, complex state societies with populations, urban centers, and administrative organizations comparable in scale to contemporary Asian and European civilizations — challenging Eurocentric assumptions about human development that portrayed the Americas as "uncivilized" before contact', 'Pre-Columbian Americans had no social organization beyond small bands', 'The Americas were isolated from global historical patterns entirely', 'Indigenous American civilizations were always inferior to European ones'],
    q7_ans=0, q7_exp='This is the AP meta-point about the Americas: studying Aztec and Inca civilizations corrects the "empty continent" or "primitive peoples" narratives that justified European colonialism. Tenochtitlan with 200,000 people was larger than contemporary London; the Inca road network exceeded Rome\'s in total length. Understanding these achievements is essential for accurate AP World History analysis.',
    id_pre='whaaf3'
),
}.items():
    w(f'{AA}-part{pnum}.ts', make_part(
        data['export_var'], AA, pnum, '🌎', 'Americas & Africa (c. 1200–1450)',
        data['subtitle'], data['key_concept'],
        data['q1'], data['q1_opts'], data['q1_ans'], data['q1_exp'],
        data['q2'], data['q2_opts'], data['q2_ans'], data['q2_exp'],
        data['content_body'],
        data['q3'], data['q3_opts'], data['q3_ans'], data['q3_exp'],
        data['q4'], data['q4_opts'], data['q4_ans'], data['q4_exp'],
        data['q5'], data['q5_opts'], data['q5_ans'], data['q5_exp'],
        data['dd1_label'], data['dd1_opts'],
        data['dd2_label'], data['dd2_opts'],
        data['dd3_label'], data['dd3_opts'],
        data['dd_answers'], data['dd_hints'], data['dd_explanation'],
        data['q6'], data['q6_opts'], data['q6_ans'], data['q6_exp'],
        data['q7'], data['q7_opts'], data['q7_ans'], data['q7_exp'],
        data['id_pre']
    ))

# Generate template-based lessons for Africa parts 4-7 and all other short topics
def simple_lesson(export_var, slug, part_num, emoji, course_title, subtitle, key_concept, id_pre,
                  content, q1_text, q2_text, q3_text, q4_text, q5_text):
    def mcq(q, correct_opt, other_opts, exp):
        all_opts = [correct_opt] + other_opts[:3]
        opts_lines = '\n'.join([f"              '{o}'," for o in all_opts])
        return f"""          {{
            question: '{q}',
            options: [
{opts_lines}
            ],
            correctAnswer: 0,
            explanation: '{exp}'
          }}"""

    return f"""export const {export_var} = {{
  topicSlug: '{slug}',
  sections: [
    {{
      id: '{id_pre}-intro',
      type: 'text' as const,
      content: `
# {emoji} {course_title}

**Part {part_num} of 7 — {subtitle}**

---

> 🔑 **Key Concept:** {key_concept}
      \`
    }},
    {{
      id: '{id_pre}-quiz1',
      type: 'multiple-choice' as const,
      content: \`**Concept Check** 🎯\`,
      exercise: {{
        questions: [
{mcq(q1_text[0], q1_text[1], q1_text[2], q1_text[3])},
{mcq(q2_text[0], q2_text[1], q2_text[2], q2_text[3])}
        ]
      }}
    }},
    {{
      id: '{id_pre}-content',
      type: 'text' as const,
      content: \`
{content}
      \`
    }},
    {{
      id: '{id_pre}-input',
      type: 'multiple-choice' as const,
      content: \`**Applied Recall: 3-Question Sprint** 🎯\`,
      exercise: {{
        questions: [
{mcq(q3_text[0], q3_text[1], q3_text[2], q3_text[3])},
{mcq(q4_text[0], q4_text[1], q4_text[2], q4_text[3])},
{mcq(q5_text[0], q5_text[1], q5_text[2], q5_text[3])}
        ]
      }}
    }},
    {{
      id: '{id_pre}-dropdown',
      type: 'dropdown-select' as const,
      content: \`**Match the Idea: Evidence to Claim**\`,
      exercise: {{
        dropdowns: [
          {{
            label: 'Match Term 1 for {subtitle}',
            options: ['Key Term A', 'Key Term B', 'Key Term C', 'Key Term D']
          }},
          {{
            label: 'Match Term 2 for {subtitle}',
            options: ['Key Term B', 'Key Term A', 'Key Term C', 'Key Term D']
          }},
          {{
            label: 'Match Term 3 for {subtitle}',
            options: ['Key Term C', 'Key Term A', 'Key Term B', 'Key Term D']
          }}
        ],
        correctAnswers: ['Key Term A', 'Key Term B', 'Key Term C'],
        hint1: 'Think about the primary feature of this concept',
        hint2: 'Consider the governance or economic function',
        hint3: 'Recall the long-term historical consequence',
        explanation: 'Review the key terms in the content section above to reinforce these AP vocabulary connections for {course_title} Part {part_num}.'
      }}
    }},
    {{
      id: '{id_pre}-applied',
      type: 'multiple-choice' as const,
      content: \`**AP-Style Application** 🎯\`,
      exercise: {{
        questions: [
{mcq('An AP LEQ asks you to evaluate the significance of ' + subtitle + '. Which thesis best demonstrates historical complexity?', 
     'While ' + subtitle.lower() + ' involved both continuity and change, the most significant historical development was the way it both reflected and transformed existing power structures — creating new institutions that built on older patterns while responding to new challenges',
     ['The topic had no historical significance whatsoever', 'Everything changed immediately with no continuity', 'Only military factors explain historical change in this period'],
     'Strong AP theses acknowledge both change and continuity, explain mechanisms rather than just outcomes, and connect specific evidence to broader historical arguments. Recognizing complexity within apparent simplicity is the hallmark of high-scoring AP responses.')},
{mcq('Which comparison best demonstrates AP historical reasoning about ' + course_title + '?',
     'Comparing ' + course_title.lower() + ' to other contemporary civilizations reveals both universal patterns (all complex societies face similar administrative and legitimation challenges) and specific variations (different environmental, cultural, and economic contexts produce different institutional solutions)',
     ['All civilizations are completely identical', 'Comparison is never useful in historical analysis', 'Only differences matter in historical comparison — similarities are irrelevant'],
     'AP comparison questions reward arguments that identify both similarities and differences AND explain why those similarities and differences exist. Using comparison to generate broader principles about human societies — rather than just listing similarities and differences — earns the highest AP scores.')}
        ]
      }}
    }}
  ]
}}
"""

# Africa parts 4-7
africa_parts = [
    (4, 'Mali and Songhai Empires', 'whaaf4', 'The Mali Empire (c. 1235-1400) and Songhai Empire (c. 1430-1591) were the largest and wealthiest West African states, controlling trans-Saharan gold-salt trade routes. AP questions focus on Mansa Musa, Islamic governance, and the role of Timbuktu as a center of Islamic scholarship.',
     '''## 📖 Mali and Songhai Empires

> **The Mali Empire (c. 1235-1400)**

| Feature | Details |
|---------|---------|
| **Founded** | Sundiata Keita c. 1235; unified Malinke people |
| **Wealth** | Controlled gold fields of Bambuk and Bure |
| **Religion** | Islam adopted by ruling class; Sundiata retained traditional African beliefs |
| **Peak** | Mansa Musa (r. 1312-1337) — famous hajj to Mecca in 1324 |

> **Mansa Musa\'s Hajj (1324)**

Mansa Musa\'s pilgrimage to Mecca is one of history\'s most spectacular demonstrations of wealth:

- Traveled with 60,000+ person entourage; 500 slaves each carrying gold staff; 80-100 camels each carrying 300 pounds of gold
- Distributed so much gold in Cairo that it depressed Egyptian gold prices for years
- European maps began marking Mali\'s location after this pilgrimage
- Built mosques in Timbuktu and Djenné on return; patronized Islamic scholarship

> **Timbuktu: Center of Islamic Scholarship**

- University of Sankore — up to 25,000 students at peak; manuscripts on astronomy, law, mathematics, medicine
- Example of how West African Islamic rulers patronized the same intellectual traditions as Middle Eastern Islamic rulers
- Trans-Saharan trade brought Islamic scholars, books, and ideas to sub-Saharan Africa

> **Songhai Empire (c. 1430-1591)**

Successor to Mali; even larger and wealthier:

- Sunni Ali (r. 1464-1492) — military expansion
- Askia Muhammad (r. 1493-1528) — Islamic governance; supported Islamic scholarship; strong ties with North Africa
- Fell 1591 to Moroccan invasion (firearms advantage)

> **AP Comparison Anchor**

- **Mali/Songhai vs. Mongol trade networks:** Both demonstrate how controlling key trade routes generates extraordinary wealth
- **Timbuktu vs. House of Wisdom (Baghdad):** Both centers of Islamic scholarship sustained by wealthy trade-based Islamic states'''),
    (5, 'Great Zimbabwe and East African City-States', 'whaaf5', 'Great Zimbabwe (c. 1000-1450) and the East African Swahili Coast city-states (Kilwa, Mombasa, Sofala) demonstrate that sub-Saharan Africa had sophisticated urban civilizations connected to the Indian Ocean trade network. AP questions focus on how these states accumulated wealth and integrated into global trade.',
     '''## 📖 Great Zimbabwe and East African Swahili City-States

> **Great Zimbabwe (c. 1000-1450)**

- Located in modern Zimbabwe; stone-walled urban complex housing 10,000-18,000 people
- No written records — knowledge comes from archaeology and oral traditions
- Economy: controlled gold trade routes from interior Zimbabwe to Indian Ocean coast
- Traded gold and ivory for imported ceramics, glass beads from India, China, and Persia
- Archaeologists found Chinese porcelain — direct evidence of Indian Ocean trade connections
- Declined c. 1450 — likely due to environmental degradation (overgrazing, deforestation) and trade route shifts

> **Swahili Coast City-States**

East African cities integrated into Indian Ocean trade network:

| City-State | Location | Key Role |
|-----------|---------|---------|
| **Kilwa Kisiwani** | Tanzania | Controlled Zimbabwe gold exports; built stone palace (Husuni Kubwa) |
| **Mombasa** | Kenya | Major trading port; still exists |
| **Sofala** | Mozambique | Southern endpoint connecting to Zimbabwe gold |
| **Malindi** | Kenya | Important port; Vasco da Gama stopped here 1498 |

**Swahili Culture:** Syncretic blend of Bantu African + Arab/Islamic elements:

- Swahili language (Bantu grammar + Arabic vocabulary)
- Muslim faith + African cultural practices
- Stone mosque architecture + African communal traditions

> **AP Comparison Anchor**

- **Swahili cities vs. Indian Ocean network:** Demonstrate how Indian Ocean trade transformed sub-Saharan African societies by integrating them into global exchange networks
- **Great Zimbabwe vs. Aztec/Inca:** All demonstrate pre-European complex urbanization'''),
    (6, 'Cross-Regional Comparisons and CCOT', 'whaaf6', 'AP World History connects the Americas and Africa by asking comparison and CCOT questions. Key themes: how geography shaped civilization development, the role of trade in state formation, and how isolation (Americas) vs. connectivity (Africa\'s Indian Ocean ports) affected civilizational development.',
     '''## 📖 Americas & Africa: AP Comparison Framework

> **Comparing Americas to African Civilizations**

| Feature | Aztec | Inca | Mali/Songhai | Swahili Cities |
|---------|-------|------|-------------|---------------|
| Economy | Tribute + markets | Mit\'a labor + redistribution | Gold-salt trade | Indian Ocean trade |
| Religion | Polytheistic sun worship | Polytheistic sun worship | Islam adopted | Islam + African syncretism |
| Writing | Pictographic codices | No writing (quipus) | Arabic script | Arabic script |
| Connection to global networks | Limited (trans-regional Mesoamerican) | Limited | Trans-Saharan + Islamic world | Indian Ocean |

> **CCOT: Americas and Africa c. 1200-1450**

- **Change:** Aztec empire reaches peak c. 1400; Inca expansion c. 1438; Mali at peak under Mansa Musa c. 1324; East African cities flourishing
- **Continuity:** All these civilizations were pre-contact, functioning without sustained Old World connection (Americas); African states continued integrating into Indian Ocean and trans-Saharan networks (continuity from earlier periods)

> **Geographic Isolation and Development**

The Americas\' relative isolation from Old World disease pools had a critical consequence: Native American populations had no acquired immunity to Eurasian diseases (smallpox, measles, influenza). When contact came after 1492, the demographic catastrophe (90%+ population decline in some regions within a century) was one of the largest in human history.

> **AP Comparison Anchor**

- **Americas vs. Africa:** America\'s relative isolation meant no disease exchange; Africa\'s connectivity meant already integrated into Islamic world; both contrast with European maritime expansion\'s homogenizing effects after 1450'''),
    (7, 'AP Review and Exam Mastery', 'whaaf7', 'Americas and Africa content appears in MCQ, SAQ, and LEQ questions focusing on the sophistication of pre-contact civilizations, trade network connections, and the causes and consequences of European contact. AP questions test your ability to compare civilizations across regions and evaluate the role of trade in state formation.',
     '''## 📖 AP Review: Americas & Africa Key Terms

> **Must-Know Vocabulary**

- **Tenochtitlan** — Aztec capital; island city; population 200,000+
- **Chinampas** — Aztec floating gardens; intensive lake agriculture
- **Flower Wars** — Aztec ritual warfare to capture prisoners for sacrifice
- **Mit\'a** — Inca labor tax; communities owed labor not money
- **Quipu** — Inca knotted-string record-keeping system
- **Cuzco** — Inca capital; "navel of the world"
- **Mansa Musa** — Mali emperor whose 1324 hajj demonstrated West African wealth globally
- **Timbuktu** — Mali/Songhai center of Islamic scholarship; University of Sankore
- **Great Zimbabwe** — Southern African stone-walled urban complex; gold trade center
- **Swahili Coast** — East African city-states integrated into Indian Ocean trade network
- **Kilwa** — Major Swahili city; controlled Zimbabwe gold exports

> **Common AP Prompt Patterns**

- **Comparison:** How did the Aztec and Inca empires compare in their political organization?
- **Causation:** What factors allowed the Spanish to conquer large American empires with small forces?
- **CCOT:** How did trade affect state formation in Africa c. 1000-1450?
- **Complexity:** How were pre-Columbian American civilizations similar to and different from contemporary Asian and European civilizations?

> **AP Comparison Anchor**

**Quick facts for comparison essays:**

| Civilization | Location | Key Feature | Trade Connection | Fell to |
|-------------|---------|------------|-----------------|--------|
| Aztec | Mesoamerica | Tributary empire; human sacrifice | Regional Mesoamerican | Spanish, 1521 |
| Inca | Andes | Road network; mit\'a labor | Regional Andean | Spanish, 1533 |
| Mali | West Africa | Gold-salt trade; Islamic scholarship | Trans-Saharan | Internal decline |
| Songhai | West Africa | Larger than Mali; Timbuktu | Trans-Saharan | Moroccan invasion, 1591 |
| Great Zimbabwe | Southern Africa | Stone architecture; gold trade | Indian Ocean | Decline c. 1450 |
| Swahili Cities | East Africa | Indian Ocean ports; Islamic | Indian Ocean | Portuguese disruption c. 1500 |'''),
]

for pnum, subtitle, id_pre, key_concept, content in africa_parts:
    w(f'{AA}-part{pnum}.ts', simple_lesson(
        f'whAmericasAfrica1200Part{pnum}Data', AA, pnum, '🌎',
        'Americas & Africa (c. 1200–1450)', subtitle, key_concept, id_pre, content,
        (f'What was the primary source of Mali Empire\'s wealth?',
         'Control of trans-Saharan gold-salt trade routes, taxing the exchange of West African gold for North African salt — making Mali rulers among the wealthiest in the world c. 1300-1400',
         ['Agricultural production with no trade dimension', 'Maritime trade with China and India', 'Tribute extracted through military conquest alone'],
         'The gold-salt trade is the economic foundation of Mali and Songhai: West Africa had gold but needed salt (essential for food preservation); the Sahara had salt but needed gold. Controlling the exchange points made Mali and later Songhai extraordinarily wealthy rulers.'),
        (f'Mansa Musa\'s 1324 hajj (pilgrimage to Mecca) is historically significant for AP because:',
         'It demonstrated West African Islamic civilization\'s extraordinary wealth and sophistication to the broader Islamic world and eventually to European cartographers — placing Mali on European maps and stimulating interest in direct African trade',
         ['It had no impact outside Mali', 'It was the first hajj ever made by a sub-Saharan African', 'It caused the collapse of Egyptian trade'],
         'Mansa Musa\'s pilgrimage put West Africa on the global mental map: his gift-giving in Cairo was so lavish it depressed gold prices, and his retinue of 60,000 was unprecedented. European maps began marking Mali as a source of gold after 1324 — stimulating eventual Portuguese interest in finding sea routes to West African gold.'),
        (f'Timbuktu\'s University of Sankore demonstrates which historical principle?',
         'That Islamic learning and scholarship spread through trade networks — the same trans-Saharan routes that carried gold and salt also carried scholars, books, and Islamic intellectual traditions, making Timbuktu a center of Islamic scholarship comparable to Cairo or Baghdad',
         ['Timbuktu was primarily a military fortress with no educational function', 'Islamic scholarship only flourished in the Middle East', 'West African rulers had no interest in education or scholarship'],
         'Timbuktu shows the dual nature of Islamic trade networks: they transmitted both goods (gold, salt) and ideas (scholarship, religious practice, legal traditions). The University of Sankore\'s 25,000 students and its manuscripts on astronomy, law, and medicine demonstrate that sub-Saharan African Islamic civilization was fully integrated into the broader Islamic intellectual world.'),
        (f'Great Zimbabwe\'s most important significance for AP World History is:',
         'It demonstrates that sub-Saharan Africa had sophisticated urban civilizations with long-distance trade connections to the Indian Ocean network — challenging narratives of pre-European Africa as isolated and undeveloped',
         ['Great Zimbabwe was built by European or Middle Eastern peoples', 'It had no connection to any trade networks', 'It was smaller and less sophisticated than any other contemporary civilization'],
         'AP frequently tests the significance of Great Zimbabwe precisely because it challenges Eurocentric narratives. The stone architecture (no mortar, built entirely from stacked granite), the scale (housing 10,000+), and the imported Chinese porcelain (direct evidence of Indian Ocean connections) all demonstrate indigenous African urban and commercial sophistication.'),
        (f'The Swahili Coast city-states\' cultural character (blending Bantu African and Arab/Islamic elements) best demonstrates which AP concept?',
         'Cultural syncretism through trade contact — when trade networks bring together peoples with different cultural traditions, new hybrid cultures emerge that blend elements from multiple sources, as seen in Swahili language (Bantu grammar + Arabic vocabulary) and religious practice (Islamic faith + African communal traditions)',
         ['Cultural exchange always destroys local cultures', 'The Swahili cities adopted Arab culture while completely abandoning African traditions', 'Trade contact never produces cultural change'],
         'Swahili culture is a model AP example of trade-driven cultural synthesis: not "conquered" by Arab/Islamic culture but selectively incorporating Arabic vocabulary, Islamic religious practice, and stone architecture while maintaining Bantu linguistic structures and African communal social practices. This selective syncretism is characteristic of how trade-contact cultural exchange works.')
    ))

print("Americas/Africa done.")

# ==============================================================
# EXPLORATION & COLUMBIAN EXCHANGE (c. 1450-1750)
# ==============================================================
EX = 'wh-exploration-columbian-exchange'
EX_TITLE = 'Age of Exploration & the Columbian Exchange'

ex_parts = [
    (2, 'European Maritime Exploration: Causes and Methods', 'whex2',
     'Portuguese and Spanish maritime exploration c. 1415-1522 was driven by multiple factors: desire for direct access to Asian luxury goods (bypassing Ottoman intermediaries), technological advances (caravel, compass, astrolabe), and competitive state sponsorship. AP questions focus on WHY European exploration happened and HOW it was technologically enabled.',
     '''## 📖 European Maritime Exploration

> **Causes of European Exploration**

| Cause | Details |
|-------|---------|
| **Commercial motivation** | Desire for direct trade with Asia; avoid Ottoman tolls on eastern routes |
| **Technology** | Caravel (lateen sails for sailing into wind); magnetic compass; astrolabe (latitude) |
| **State competition** | Portugal vs. Spain competing for overseas wealth and prestige |
| **Religious motivation** | Spreading Christianity; finding "Prester John" (mythical Christian king in Africa/Asia) |
| **Geography** | Portugal on Atlantic coast with fishing/sailing tradition |

> **Portuguese Exploration**

Portugal pioneered systematic Atlantic and African exploration:

- **Prince Henry the Navigator (c. 1415-1460):** Organized exploration school; sponsored annual voyages south along African coast
- **Bartolomeu Dias (1488):** Rounded Cape of Good Hope; proved sea route to Indian Ocean possible
- **Vasco da Gama (1498):** First European to reach India by sea; returned with spices worth 60x the voyage cost
- **Cabral (1500):** Reached Brazil (claimed for Portugal)
- **Magellan/Elcano (1519-1522):** First circumnavigation of Earth (under Spanish flag)

> **Technological Enablers**

- **Caravel:** Shallow-draft ship with lateen (triangular) sails allowing sailing into the wind; could navigate coastal shallows
- **Magnetic compass:** Chinese invention diffused via Silk Road; allowed navigation in cloudy weather
- **Astrolabe:** Measured angle of sun above horizon; determined latitude
- **Portolan charts:** Detailed coastal maps accumulated through experience

> **AP Comparison Anchor**

- **European vs. Chinese exploration:** Zheng He\'s voyages (1405-1433) used larger ships and reached further — but China discontinued exploration; Europe continued and colonized
- **The key question:** Why did European exploration lead to colonization while Chinese exploration did not?''',
    ('What was the primary commercial motivation for European maritime exploration c. 1450-1520?',
     'Desire for direct sea routes to Asian spice and luxury goods markets, bypassing Ottoman-controlled overland routes where high tolls reduced profit margins for European merchants',
     ['Pure curiosity with no commercial dimension', 'A desire to spread European culture to other continents', 'A military strategy to attack Asia from the sea'],
     'The commercial motivation for exploration is essential AP knowledge. Spices (pepper, cinnamon, nutmeg) were enormously valuable in Europe — preserving food, masking spoilage, and demonstrating wealth. Vasco da Gama\'s first Indian voyage returned with spices worth 60x the expedition cost. This extraordinary profit potential drove continued investment in exploration.'),
    ('The caravel\'s most important innovation for exploration was:',
     'Its lateen (triangular) sails that allowed sailing into the wind, enabling Portuguese ships to explore the African coast and return home against prevailing winds — something older square-rigged ships could not do',
     ['Its enormous size that could carry more cargo than any previous ship', 'Its steam-powered engines that replaced reliance on wind', 'Its military weaponry that allowed defeating all opposing navies'],
     'The caravel\'s lateen sail is the key technological innovation enabling Atlantic exploration. Square-rigged ships could sail with the wind but not against it — making return voyages down the African coast (where winds blow toward Africa) impossible. The caravel\'s maneuverability transformed coastal exploration from a one-way trip to a round trip.'),
    ('Portugal\'s systematic annual exploration of the African coast (c. 1415-1488) demonstrates:',
     'How state-sponsored, systematic technological accumulation — each voyage building on the previous one\'s geographic knowledge — eventually solved the problem of finding a sea route to Asia that individual merchant ventures could not have solved',
     ['Portuguese exploration was entirely accidental with no systematic planning', 'Portugal reached India without any prior African coastal exploration', 'State sponsorship had no impact on the pace or success of exploration'],
     'Portugal\'s approach to exploration was uniquely systematic: Prince Henry organized an exploration school, accumulated geographic knowledge across decades, and sponsored annual voyages that incrementally extended Portuguese knowledge of the African coast. This institutional approach contrasts with earlier individual merchant ventures and demonstrates how state investment in knowledge-gathering can accelerate technological development.'),
    ('Zheng He\'s voyages (1405-1433) vs. European exploration demonstrate which historical contrast?',
     'Both demonstrated remarkable maritime capability, but China\'s decision to discontinue exploration after 1433 (due to Confucian bureaucratic opposition and the shift of imperial attention to northern land threats) while European states continued and colonized produced enormously divergent global consequences',
     ['Zheng He\'s ships were inferior to European vessels in every respect', 'China had no interest in foreign peoples or goods', 'European and Chinese exploration were identical in their goals and consequences'],
     'The Zheng He/European exploration comparison is one of AP World History\'s most important counterfactual exercises: Chinese ships were larger and more sophisticated than contemporary European vessels, and Zheng He reached the Persian Gulf and East African coast. The DIFFERENCE is what China did with this capability (discontinued) vs. what Europe did (continued until colonization). This demonstrates that technology alone does not determine historical outcomes — political and institutional factors matter.'),
    ('For an AP comparison, which statement best characterizes the difference between Portuguese and Spanish exploration strategies?',
     'Portugal focused on establishing trading post networks along existing sea routes (Indian Ocean, African coast) to redirect existing Asian trade through Portuguese-controlled ports, while Spain focused on conquering and colonizing new territories in the Americas — different strategies reflecting different geographic starting points and commercial opportunities',
     ['Portugal and Spain had identical exploration strategies', 'Spain established trading posts while Portugal colonized', 'Neither Portugal nor Spain had any strategic plan for exploration'],
     'This distinction is AP-important: Portuguese Estado da India (Indian Ocean trading empire) worked by inserting Portuguese military force into existing Indian Ocean commercial networks, charging protection fees. Spanish encomienda system worked by controlling land and indigenous labor. Both were extractive, but through fundamentally different mechanisms — trading-post empire vs. territorial colonialism.')
    ),
    (3, 'The Columbian Exchange', 'whex3',
     'The Columbian Exchange (after 1492) was the exchange of plants, animals, diseases, and peoples between the Americas and the Old World. AP questions focus on the devastating demographic consequences (disease on Native Americans), the agricultural transformations (New World crops in Old World), and the long-term global population effects.',
     '''## 📖 The Columbian Exchange

> **What the Exchange Transferred**

| Direction | Items Transferred |
|-----------|-----------------|
| **Old World → Americas** | Horses, cattle, sheep, pigs, wheat, rice, sugar cane, smallpox, measles, influenza |
| **Americas → Old World** | Maize (corn), potatoes, tomatoes, chocolate, tobacco, peppers, rubber, syphilis (debated) |

> **Demographic Catastrophe in the Americas**

The most immediate consequence was demographic disaster for Native Americans:

- **Scale:** Estimates suggest 50-90% of indigenous American populations died within a century of contact
- **Mechanism:** Old World diseases (smallpox, measles, influenza) against populations with no acquired immunity
- **Examples:** Mexico\'s population fell from ~25 million in 1519 to ~1 million by 1600; Caribbean indigenous populations virtually eliminated within decades
- **Labor shortage consequence:** Mass death of indigenous labor → demand for enslaved African labor → Atlantic slave trade expansion

> **Agricultural Transformation**

New World crops transformed Old World agriculture and population:

- **Potatoes:** Grew in poor soil unsuited for grain; fed European peasants; enabled Irish population growth (and 1840s famine vulnerability)
- **Maize:** Storable, high-calorie; spread across Europe, Africa, Asia
- **Tomatoes:** Transformed Mediterranean diets; basis of Italian cuisine (no tomatoes before 1500s)
- **Long-term:** New World crops contributed to Old World population growth from c. 1600-1800

> **AP Comparison Anchor**

- **Columbian Exchange vs. Black Death:** Both massive demographic events; Black Death → depopulation; Columbian Exchange → catastrophic depopulation in Americas, eventual population growth in Old World via new crops
- **Why it matters:** The demographic catastrophe in the Americas is the foundation of the Atlantic slave trade — the chain: disease → labor shortage → African enslavement → Atlantic slave trade''',
    ('The most immediate consequence of the Columbian Exchange for Native American populations was:',
     'Catastrophic mortality from Old World diseases (smallpox, measles) against populations with no acquired immunity, reducing some indigenous populations by 50-90% within a century of European contact',
     ['A rapid increase in Native American populations due to new food sources', 'No significant demographic change — Native Americans were immune to Old World diseases', 'Population decline only in the Caribbean with no mainland effects'],
     'Native American demographic collapse is perhaps the most important demographic event in world history: 50-90% mortality in a century represents a loss of life unprecedented in scale. This created the labor shortage that drove demand for enslaved Africans and fundamentally altered the demographic composition of the Americas. Without understanding this collapse, the Atlantic slave trade makes no sense.'),
    ('Old World crops like wheat and rice replaced New World crops in the Americas after 1492 primarily because:',
     'Spanish colonizers prioritized familiar food crops for their own consumption and for export, while also actively imposing European agricultural systems (wheat cultivation, cattle grazing) that were suited to colonial economies rather than indigenous subsistence',
     ['New World crops were nutritionally inferior to Old World crops', 'Native Americans voluntarily abandoned their agricultural practices', 'European crops grew better in American climates than indigenous crops'],
     'The replacement of indigenous crops wasn\'t purely agricultural — it was political. Spanish colonial agriculture was organized around European-style hacienda systems growing wheat for Spanish consumption and sugar for export, not the maize, quinoa, and potato cultivation that had fed indigenous populations. Indigenous agricultural knowledge was often deliberately suppressed or simply not sustained as indigenous populations collapsed.'),
    ('New World crops\' impact on Old World populations was most significant because:',
     'The potato and maize grew in soils and climates unsuitable for traditional European grains, expanding the total food-producing land area and caloric output — ultimately contributing to Old World population growth from c. 1600-1800 and enabling Europe\'s and China\'s demographic expansion',
     ['Old World populations declined because New World crops were inferior', 'New World crops had no impact on Old World nutrition', 'Only luxury crops like tomatoes and peppers were adopted in the Old World'],
     'The demographic consequence of New World crops reaching the Old World is as important as the demographic collapse in the Americas, just in the opposite direction. The potato\'s ability to grow in rocky, wet Irish soil (unsuitable for grain) enabled Irish population to double in the 17th-18th century. Maize spread across Africa, enabling population growth. These changes contributed to global population dynamics that accelerated industrialization.'),
    ('The causal chain connecting the Columbian Exchange to the Atlantic slave trade demonstrates which AP skill?',
     'Historical causation: disease-caused indigenous labor shortage created demand for replacement labor → Portuguese slave-trading networks already existed in Africa → enslaved Africans became the solution → Atlantic slave trade expanded from hundreds to millions per century — showing how one historical development creates conditions for another',
     ['The Columbian Exchange and slave trade were completely unrelated', 'Enslaved Africans were brought to Americas before indigenous populations declined', 'Disease had no connection to labor demand in colonial Americas'],
     'The causal chain is: (1) European diseases arrive → (2) indigenous populations collapse → (3) colonial labor shortage → (4) demand for replacement labor → (5) existing African slave trade networks → (6) Atlantic slave trade. Each step creates conditions for the next. AP questions about causation reward tracing these chains rather than treating the slave trade as simply "caused by European greed."'),
    ('What does the Columbian Exchange demonstrate about "unintended consequences" in historical analysis?',
     'Columbus\'s 1492 voyage was intended to find a sea route to Asia — the exchange of crops, animals, and diseases that reshaped global demographics was an unintended byproduct of commercial motivation, demonstrating that major historical transformations frequently result from the unforeseen consequences of intentional actions',
     ['The Columbian Exchange was planned in advance by Columbus', 'Historical actors always anticipate the consequences of their actions', 'Unintended consequences are never historically significant'],
     'The Columbian Exchange is the AP\'s premier example of unintended consequences: Columbus died believing he had reached Asia, having no idea he had connected two previously separate disease pools, agricultural systems, and demographic worlds. The consequences (indigenous death, potato-fed European population growth, Atlantic slave trade) were orders of magnitude more significant than his original commercial goal. AP complexity points come from recognizing when historical significance was unintended.')
    ),
    (4, 'Spanish and Portuguese Colonial Empires', 'whex4',
     'Spanish and Portuguese colonial empires c. 1500-1750 created new forms of exploitation: the encomienda system (forced indigenous labor), the plantation system (enslaved African labor), and the extraction economy (silver, sugar). AP questions compare Spanish and Portuguese colonial models, evaluate colonial society\'s racial hierarchy, and connect colonialism to global economic patterns.',
     '''## 📖 Spanish and Portuguese Colonial Empires

> **Spanish Colonial System**

| Feature | Details |
|---------|---------|
| **Encomienda** | Grant of indigenous labor to Spanish colonist; colonist owed protection and Christianization; de facto slavery |
| **Mita (colonial)** | Forced labor draft for silver mines (especially Potosí); Inca mit\'a repurposed by Spanish |
| **Repartimiento** | Replaced encomienda; direct labor draft with nominal wage |
| **Hacienda** | Large landed estate; debt peonage bound indigenous workers |

> **Potosí Silver Mining**

Potosí (modern Bolivia) was the world\'s largest silver mine c. 1545-1650:

- Silver production so vast it caused price revolution in Europe (inflation from silver influx)
- Millions of indigenous and enslaved African miners; mortality was catastrophic
- "Worth a Potosí" — Spanish phrase for enormous wealth
- Silver flowed to Spain → to China (for silk and porcelain) → funding Chinese state

> **Colonial Racial Hierarchy (Casta System)**

Spanish colonial society organized by race:

- **Peninsulares:** Spanish-born in Spain (highest status)
- **Criollos:** Spanish-born in Americas
- **Mestizos:** Spanish-indigenous mixed
- **Mulatos:** Spanish-African mixed  
- **Indigenous peoples:** Near bottom
- **Enslaved Africans:** Bottom

> **Portuguese Brazil and Atlantic Islands**

- Sugar plantation economy in Brazil (1530s onward)
- Enslaved African labor replaced indigenous labor (who died from disease and fled inland)
- Brazil became largest sugar producer globally by 1600
- Plantation model: large-scale monoculture + enslaved labor = enormous profits + social rigidity

> **AP Comparison Anchor**

- **Spanish encomienda vs. Mughal mansabdar:** Both created dependent labor/administrative relationships; encomienda was exploitative and coercive; mansabdar was administrative
- **Colonial silver economy:** Spanish silver → Europe → China (global circulation of commodity money)''',
    ('The Spanish encomienda system differed from outright slavery primarily in that:',
     'Encomienda grants entitled colonists to indigenous labor and tribute in exchange for nominal obligations (protection, Christianization), while legal slavery meant outright ownership — but in practice both involved coercive, often brutal exploitation with minimal legal protection for workers',
     ['Encomienda provided indigenous workers with full legal rights equal to Spanish citizens', 'Encomienda workers were always paid fair wages for their labor', 'There was no practical difference between encomienda and direct enslavement'],
     'The encomienda\'s legal fiction mattered to the Church (which could intervene on behalf of indigenous people as "commended" to Spanish care) but not to the daily reality of forced labor. The New Laws of 1542 attempted to abolish encomienda following Dominican friar Bartolomé de las Casas\'s advocacy — demonstrating that legal categories created space for resistance even within colonial systems.'),
    ('Potosí silver\'s global impact demonstrates which AP concept?',
     'How a single commodity (silver) could be extracted through colonial coercion in one region (Peru) and create price inflation in Europe and commodity demand in China — demonstrating how colonial extraction connected regional economies into a global system of unequal exchange',
     ['Potosí silver only circulated within the Spanish Empire', 'Silver had no global monetary importance before European colonialism', 'Chinese demand for silver was too small to affect global prices'],
     'The Potosí-to-China silver flow is a model AP global commerce example: Spanish colonists paid for Chinese silk and porcelain with silver; Chinese state needed silver for tax collection (the Single Whip Tax Reform required silver payment); this demand pulled silver from Peru to Asia. The circuit demonstrates how colonial extraction, European consumption, and Asian manufacturing were linked in a single global economic system by 1600.'),
    ('The Spanish casta system\'s significance for AP analysis is that it:',
     'Created a legally codified racial hierarchy that assigned social status, legal rights, and economic opportunities based on perceived racial identity — establishing race as a primary organizing principle of colonial societies that would shape Latin American social stratification for centuries',
     ['The casta system was dismantled within one generation of Spanish colonization', 'Race had no significance in Spanish colonial society', 'The casta system gave indigenous people equal legal standing to Spanish colonists'],
     'The casta system\'s longevity is its key AP significance: racial categories established in the 16th century shaped Latin American social stratification into the 20th century. The system also produced constant social negotiation — people sought to "pass" as higher racial categories, documents were falsified, and racial categories blurred in practice. Understanding the casta system is essential for understanding Latin American social history.'),
    ('The transition from encomienda to plantation slavery in the Americas demonstrates:',
     'How colonial labor systems adapted to changing conditions: indigenous population collapse (from disease) and legal pressure (New Laws of 1542) reduced encomienda viability, while expanding sugar, tobacco, and cotton demand created incentive for a more reliable, legally unprotected labor force — leading to the systematic expansion of African chattel slavery',
     ['The transition was driven by indigenous peoples voluntarily leaving the encomienda system', 'Plantation slavery predated the encomienda system in the Americas', 'Legal reforms eliminated all forms of forced labor in colonial Americas by 1600'],
     'The labor system transition follows a clear causal chain: disease → indigenous population decline → labor shortage → encomienda insufficient → plantation crops (sugar) requiring intensive labor → African enslavement as the "solution." Understanding this transition explains how the Atlantic slave trade went from an existing but limited practice to a massive, industrialized system of human trafficking.'),
    ('For an AP DBQ about colonial labor systems, which document would be most useful for arguing that economic incentives drove colonial exploitation?',
     'A Spanish royal official\'s report on silver production in Potosí documenting the revenue generated and the indigenous labor mortality, which would show both the economic value of the colonial system and its human cost — allowing the argument that economic rationality and human exploitation were explicitly connected in colonial governance',
     ['A Spanish missionary\'s private diary with no official authority', 'A Chinese merchant\'s account of silver trade with no connection to the Americas', 'An indigenous codex describing pre-Columbian practices unrelated to colonial labor'],
     'The royal official document is most useful for the economic-incentives argument because: (1) it comes from a state actor who explicitly connected revenue and labor; (2) it shows that colonial authorities were aware of both the economic value and the human cost; (3) it demonstrates that exploitation was not ignorance but calculated policy. DBQ sourcing analysis should always connect the document\'s purpose and author to the argument being supported.')
    ),
    (5, 'Global Trade Networks and the Atlantic World', 'whex5',
     'European exploration created new global trade networks: the Atlantic triangle trade, the Manila Galleon trade (connecting Americas to Asia), and the integration of commodity crops (sugar, tobacco, cotton) into global markets. AP questions focus on how these networks connected and exploited multiple regions simultaneously.',
     '''## 📖 Global Trade Networks

> **The Triangle Trade**

Three-legged Atlantic circuit:

1. **Europe → Africa:** Manufactured goods (textiles, metal, guns) exchanged for enslaved people
2. **Africa → Americas:** "Middle Passage" — enslaved Africans transported to plantation colonies
3. **Americas → Europe:** Colonial commodities (sugar, tobacco, cotton) produced by enslaved labor

> **The Manila Galleon Trade (1565-1815)**

Pacific circuit connecting Americas to Asia:

- Spanish ships carried silver from Mexico and Peru to Manila (Philippines)
- In Manila, silver exchanged for Chinese silk, porcelain, and Southeast Asian spices
- Return voyage carried luxury goods to Acapulco for distribution in Americas and Spain
- Chinese demand for silver was the driving force — Single Whip Tax Reform required silver

> **Commodity Crops and Global Demand**

| Crop | Origin | Colonial Producer | European Demand |
|------|--------|-----------------|----------------|
| Sugar | South Asia | Brazil, Caribbean | Enormous; sweetened food, fermented for rum |
| Tobacco | Americas | Virginia, Caribbean | Created new consumption habit |
| Cotton | Various | American South (later) | Industrial Revolution textile demand |
| Coffee | Ethiopia | Caribbean, Brazil | European café culture |

> **AP Comparison Anchor**

- **Triangle trade vs. Indian Ocean:** Both moved commodities and people; Indian Ocean moved free merchants; triangle trade moved enslaved peoples; different power structures
- **Global commodity chains:** Potosí silver → China; Caribbean sugar → Europe; African enslaved labor → Americas — all connected in a single global system''',
    ('The triangle trade\'s significance for AP World History is:',
     'It created a coercive, racialized global economic system that simultaneously enriched European merchants and colonial planters, destroyed African communities through the slave trade, and subjected enslaved African laborers to brutal plantation conditions — demonstrating that early modern globalization was built on human exploitation as much as commercial exchange',
     ['The triangle trade benefited all three regions equally', 'The triangle trade had no racial dimension', 'European merchants received no net benefit from the triangle trade'],
     'The AP analysis of the triangle trade must include its structural inequality: European merchants captured the profits; African communities lost millions of people to violent kidnapping; enslaved Africans in the Americas were legally property with no rights. The system\'s efficiency (it was enormously profitable) and its brutality coexisted — requiring AP analysis that addresses both dimensions.'),
    ('The Manila Galleon trade\'s significance was:',
     'It connected two previously separate global exchange systems — the Atlantic (European-American-African) and the Pacific/Asian — creating a truly global commodity circuit where American silver flowed to China and Asian luxury goods flowed to the Americas, completing the first global commercial network',
     ['The Manila Galleon trade was purely a military supply route', 'Chinese demand for silver had no impact on the galleon trade', 'The galleon trade ended within a decade due to lack of profitability'],
     'The Manila Galleon trade\'s AP significance is its role in completing global commercial connectivity: before 1565, the Atlantic and Pacific/Asian trade systems were separate. The galleon trade created a Pacific link, meaning that an enslaved African laboring in a Peruvian silver mine was now connected to a Chinese bureaucrat paying taxes in silver and a European merchant buying Chinese silk. This is the birth of a truly global economy.'),
    ('How did plantation agriculture transform Caribbean and Brazilian societies?',
     'Plantation systems based on sugar monoculture and enslaved labor created societies with extreme racial hierarchy (white planters atop an enslaved black majority), ecological transformation (forest clearance, soil depletion), and economic dependence on a single export crop — creating structural vulnerabilities that shaped these societies for centuries',
     ['Plantation agriculture created economically diversified, egalitarian Caribbean societies', 'The Caribbean had no plantation agriculture before European contact', 'Plantation societies had equal legal rights for all inhabitants regardless of race'],
     'The plantation complex\'s consequences extend beyond the colonial period: the racial hierarchy (white minority owning enslaved black majority) created post-emancipation societies with deep inequality; the monoculture economy left Caribbean islands vulnerable to price collapses; soil depletion required constant expansion to new land. Understanding plantation societies\' structural characteristics is essential for AP analysis of modern Caribbean and Brazilian development.'),
    ('The introduction of sugar to the Caribbean demonstrates which broader AP principle?',
     'That commodity demand in one region (European sweet tooth) can transform entire ecosystems and social systems in another region (Caribbean forests cleared for sugar; indigenous peoples replaced by enslaved Africans) — demonstrating that global trade creates environmental and social consequences far removed from the consuming society',
     ['Commodity demand only affects the region where it is produced', 'Sugar cultivation had no environmental consequences', 'European consumption patterns had no impact on Caribbean societies'],
     'The sugar-Caribbean connection is a model AP commodity chain analysis: European demand (driven by new coffee house culture, desire to sweeten increasingly available tea and coffee) created economic incentives for Caribbean sugar production; those incentives drove forest clearance, indigenous population displacement, and enslaved African importation. The European consumer was disconnected from the production process — a structural feature of early modern globalization.'),
    ('An AP comparison of the Portuguese trading-post empire and the Spanish territorial empire best supports which argument?',
     'Both empires extracted wealth from colonized regions, but through different mechanisms reflecting their different resources and geographies: Portugal\'s small population and existing Indian Ocean commercial networks favored a trading-post model that inserted Portuguese military force into existing commerce, while Spain\'s American discoveries lacked existing commercial networks and offered mineral wealth requiring direct territorial control',
     ['Portugal and Spain used identical colonial strategies', 'Spain used a trading-post model while Portugal colonized territorially', 'Neither empire was commercially motivated'],
     'This comparison demonstrates AP analytical sophistication by explaining WHY the two empires differed rather than just noting they differed. Different contexts (existing Asian commercial networks vs. new American territories; different resource types — spices vs. silver) produced different institutional solutions. AP rewards arguments that explain the causes of historical variation rather than simply describing it.')
    ),
    (6, 'Cultural and Religious Impact of Exploration', 'whex6',
     'European exploration brought Christianity to the Americas and Africa, creating syncretic religious traditions and disrupting indigenous religious systems. AP questions evaluate the role of missionaries, the creation of syncretic cultures, and how indigenous peoples responded to European religious and cultural imposition.',
     '''## 📖 Cultural and Religious Impact

> **Christianity and Colonial Rule**

Spanish and Portuguese colonialism was explicitly tied to religious conversion:

- **Papal donation (1494, Treaty of Tordesillas):** Pope divided non-Christian world between Spain and Portugal
- **Mission system:** Franciscan, Dominican, Jesuit missionaries established missions for conversion
- **Forced conversion:** Baptism required for indigenous peoples; indigenous religious practices suppressed
- **Inquisition:** Heresy prosecuted; crypto-indigenous religious practice criminalized

> **Religious Syncretism**

Despite official suppression, indigenous religious practices survived through syncretism:

- **Our Lady of Guadalupe:** Appeared to indigenous Mexican Juan Diego (1531) — combining Christian (Virgin Mary) with pre-Columbian Aztec goddess Tonantzin
- **Santería:** Cuban blend of Yoruba (West African) deities with Catholic saints
- **Candomblé:** Brazilian Afro-Catholic religious syncretism
- **Significance:** Syncretism demonstrates that indigenous and African peoples actively resisted complete cultural erasure by incorporating their traditions within acceptable Catholic forms

> **Bartolomé de las Casas**

Spanish Dominican friar who documented and opposed indigenous exploitation:

- His accounts (*A Short Account of the Destruction of the Indies*, 1542) documented atrocities
- Advocated for New Laws of 1542 limiting encomienda
- Ironically, his advocacy for indigenous peoples included suggesting enslaved Africans as alternative labor — a position he later recanted
- Demonstrates that the colonial system produced internal critics even among its beneficiaries

> **AP Comparison Anchor**

- **Syncretism in Americas vs. Swahili culture:** Both demonstrate selective cultural incorporation rather than complete displacement
- **Missionary activity:** Jesuit missions in Americas vs. Islamic scholars in West Africa — both demonstrate how religion travels with commercial/political networks''',
    ('Religious syncretism in colonial Latin America (e.g., Our Lady of Guadalupe) demonstrates:',
     'That indigenous peoples actively negotiated cultural change by incorporating their own spiritual and cultural traditions within acceptable Catholic forms — neither completely resisting nor completely accepting European religious imposition, but creating hybrid practices that preserved indigenous meaning while using Catholic symbols',
     ['Indigenous peoples passively accepted all Catholic teaching with no resistance', 'Syncretism represents complete replacement of indigenous beliefs by Catholicism', 'The Catholic Church actively encouraged and designed syncretic practices'],
     'Syncretism is AP\'s key concept for understanding cultural change under colonialism. The Our Lady of Guadalupe apparition (1531, just 10 years after the conquest) at the site of an Aztec goddess\'s temple demonstrates that indigenous peoples found ways to maintain spiritual connections to their own traditions within Catholic frameworks. This was neither pure resistance nor pure acceptance — it was creative adaptation under conditions of coercion.'),
    ('The Catholic mission system\'s role in Spanish colonial governance was primarily:',
     'Missions served dual political-religious purposes: converting indigenous peoples (satisfying the papal mandate and providing religious justification for colonialism) while also pacifying and controlling frontier populations through residence in mission communities under Spanish supervision',
     ['Missions were purely religious with no political function', 'Missions protected indigenous peoples from colonial exploitation', 'Missions were established solely for economic rather than religious purposes'],
     'The mission system\'s political function is key: missions reduced the cost of controlling dispersed indigenous populations by concentrating them in supervised communities where priests (who required no military salary) enforced compliance with Spanish authority. The religious and political functions were inseparable — conversion created subjects; concentration enabled control; labor obligations funded the mission and colonial economy.'),
    ('Bartolomé de las Casas\'s advocacy demonstrates which AP complexity?',
     'Colonial systems could produce internal critics who challenged the system\'s moral foundations while still operating within its logic — Las Casas opposed indigenous exploitation but initially supported African enslavement as an alternative, demonstrating that reformers often reproduced the systemic inequalities they challenged in different forms',
     ['Las Casas fully rejected all forms of coerced labor from the beginning', 'No one within the colonial system ever criticized exploitation', 'Las Casas was a colonial administrator with no humanitarian motivations'],
     'The Las Casas complexity point is crucial for AP: he opposed indigenous exploitation but initially suggested enslaved Africans as a solution — later recanting this position. This demonstrates that moral reformers are products of their historical context and often reproduce systemic inequalities while challenging specific manifestations. AP rewards complexity arguments that resist "heroes and villains" narratives in favor of contextually nuanced analysis.'),
    ('The Treaty of Tordesillas (1494) demonstrates which feature of early modern European colonialism?',
     'European states claimed authority to divide the non-European world among themselves based on papal authority — treating non-Christian peoples as without legitimate sovereignty over their own territories, demonstrating the ideological framework (Christianity + European superiority) that justified colonial appropriation',
     ['The Treaty of Tordesillas required Spanish and Portuguese consent from indigenous peoples', 'Pope Alexander VI had legitimate authority over non-Christian peoples under international law', 'The treaty had no real consequences for Spanish or Portuguese exploration'],
     'The Tordesillas ideology is the foundation of the "Doctrine of Discovery" — the legal fiction that non-Christian peoples did not have legitimate sovereignty over their lands, which European powers could therefore claim and divide. This ideology was not unique to Spain and Portugal but became the legal foundation for all European colonial land claims. AP questions about colonialism\'s ideological foundations require understanding this framework.'),
    ('An AP question asks: "Evaluate the extent to which colonized peoples resisted European cultural domination." Which answer demonstrates the strongest historical reasoning?',
     'While colonial power asymmetry prevented direct military resistance to cultural imposition, colonized peoples developed multiple forms of cultural resistance: religious syncretism (preserving indigenous/African practices within Catholic forms), language retention, oral tradition maintenance, and the gradual incorporation of resistance into colonial culture itself — demonstrating that cultural resistance was constant even when politically constrained',
     ['Colonized peoples accepted all European cultural impositions without any resistance', 'Cultural resistance was equally effective in all colonial contexts', 'Only military resistance counts as meaningful resistance to colonialism'],
     'This response earns AP complexity by identifying the spectrum of resistance strategies beyond military rebellion: syncretism, language maintenance, oral tradition, maroon communities (escaped enslaved peoples), and cultural memory all represent resistance under impossible conditions. The argument also acknowledges the constraint (power asymmetry) while demonstrating that resistance occurred anyway — the nuanced position that AP rewards.')
    ),
    (7, 'AP Review and Exam Mastery', 'whex7',
     'Exploration and Columbian Exchange content appears heavily in LEQ, DBQ, and SAQ questions. Key prompt types: evaluating causes of European exploration, analyzing the Columbian Exchange\'s consequences, comparing colonial labor systems, and connecting exploration to the Atlantic slave trade. Mastering specific evidence and causal chains is essential.',
     '''## 📖 AP Review: Exploration & Columbian Exchange

> **Must-Know Vocabulary**

- **Columbian Exchange** — Exchange of plants, animals, diseases, peoples between Americas and Old World after 1492
- **Encomienda** — Spanish grant of indigenous labor; nominally non-slavery but functionally similar
- **Mita** — Colonial forced labor draft for mines; Inca mit\'a repurposed by Spanish
- **Hacienda** — Large Spanish landed estate; debt peonage
- **Casta system** — Colonial racial hierarchy; status assigned by perceived racial identity
- **Caravel** — Portuguese ship with lateen sails enabling coastal and Atlantic navigation
- **Manila Galleon** — Pacific silver-for-silk trade route connecting Americas and Asia
- **Triangle trade** — Atlantic three-legged circuit: European goods → African enslaved people → American commodities
- **Syncretism** — Cultural blending; e.g., Afro-Catholic religious practices in colonial Americas
- **Potosí** — Largest silver mine in colonial Peru; drove global silver circulation

> **Common AP Prompt Patterns**

- **Causation:** Why did European states invest in maritime exploration c. 1450-1550?
- **Evaluation:** What were the most significant consequences of the Columbian Exchange?
- **Comparison:** Compare Spanish and Portuguese colonial models c. 1500-1750
- **CCOT:** How did global trade networks change c. 1450-1750?
- **Complexity:** How did the Columbian Exchange\'s consequences differ for different peoples?

> **AP Comparison Anchor**

**Causation chain to memorize:**

Ottoman control of eastern trade routes → European commercial motivation → caravel technology + state sponsorship → Portuguese Africa exploration → Vasco da Gama 1498 → Columbus 1492 → Columbian Exchange → disease + indigenous labor collapse → encomienda/plantation → Atlantic slave trade → global commodity economy (silver, sugar, tobacco)''',
    ('An AP SAQ asks: "Briefly explain ONE cause of European maritime exploration c. 1450-1550." Which response earns full credit?',
     'European merchants\' desire to access Asian spice and luxury goods markets without paying Ottoman tolls on overland routes motivated both Portuguese investment in African coastal exploration (seeking an ocean route to India) and Spanish sponsorship of Columbus\'s western Atlantic voyage — demonstrating that commercial motivation was the primary driver of European exploration',
     ['Listing all possible causes without explaining any one of them', 'Arguing that religious motivation alone explains European exploration', 'Describing exploration without connecting it to any cause'],
     'Full SAQ credit: claim (desire to bypass Ottoman tolls) + evidence (Portuguese Africa route, Spanish Columbus) + reasoning (commercial motivation was primary driver). Three-part structure. The response directly answers "ONE cause" without trying to list everything — focused, evidenced, reasoned.'),
    ('For an AP LEQ about the Columbian Exchange\'s consequences, which complexity move earns the most credit?',
     'Demonstrating that the Columbian Exchange had fundamentally different consequences for different peoples in the same historical moment: while New World crop adoption (potatoes, maize) was beginning to increase European and African food security and population, disease was simultaneously devastating Native American populations by 50-90% — the same exchange was catastrophic for some and beneficial for others',
     ['Arguing the exchange was uniformly beneficial for all peoples', 'Arguing the exchange was uniformly catastrophic for all peoples', 'Focusing only on crop exchange while ignoring disease consequences'],
     'This complexity argument earns full credit by identifying simultaneous contradictory consequences for different groups. The same exchange → potatoes feeding European peasants AND smallpox killing Native Americans simultaneously. AP complexity is not about being "balanced" for its own sake — it\'s about accurately representing that historical events have different effects on different groups at the same time.'),
    ('An AP DBQ includes a document from a Spanish Dominican friar describing indigenous suffering under the encomienda. What is the most sophisticated sourcing analysis?',
     'While the friar\'s religious vocation created motivation to document suffering he witnessed directly (credibility from proximity), his institutional position as a Catholic missionary also created interest in portraying indigenous peoples sympathetically to advocate for protection (purpose shaping content) — making the document both valuable evidence of conditions and a product of a specific reform agenda',
     ['The document is completely objective because friars were neutral observers', 'The document is worthless because the friar had an agenda', 'Sourcing is unnecessary for documents from religious figures'],
     'This sourcing analysis demonstrates the AP skill of holding two truths simultaneously: the document has real evidentiary value (the friar witnessed conditions others didn\'t document) AND its content reflects a specific agenda (advocacy for indigenous protection). "Agenda" doesn\'t mean "false" — it means the document\'s framing, emphasis, and selection reflect the author\'s purpose. Both the value and the limitation earn AP credit.'),
    ('For a comparison LEQ between the Columbian Exchange and the Black Death (c. 1347-1353), which argument is most sophisticated?',
     'Both events demonstrate how human movement can transmit diseases with catastrophic demographic consequences, but in opposite directions of impact: the Black Death reduced Old World populations by 30-50% while European commercial expansion was beginning; the Columbian Exchange reduced New World populations by 50-90% while the Old World was experiencing beginning population growth from new crops — the same mechanism (disease transmission via exchange networks) produced regionally opposite demographic outcomes',
     ['The two events had identical consequences for all regions', 'The Black Death and Columbian Exchange are too different to compare', 'Only the Columbian Exchange involved significant disease transmission'],
     'Cross-period comparison demonstrating analytical sophistication: same mechanism (disease via trade networks) + different contexts (Old World in demographic contraction vs. Americas lacking immunity) = opposite regional outcomes. AP rewards arguments that use comparison to generate a broader principle (disease transmission via trade networks + demographic vulnerability = catastrophic mortality) and then show how the same principle plays out differently in different contexts.'),
    ('Which AP principle best explains why Spanish colonial silver mines (Potosí) were economically connected to Chinese silk markets?',
     'Early modern global trade created commodity chains spanning multiple continents: Spanish colonial extraction (American silver via indigenous forced labor) funded European purchases of Asian goods (Chinese silk via Manila Galleons), while Chinese state fiscal policy (requiring silver tax payment) created demand that pulled silver from Peru to Asia — demonstrating that seemingly separate regional economies were already globally integrated by the 16th century',
     ['Potosí and China were economically isolated with no connection', 'Global trade existed before 1500 with no change after European expansion', 'Only religious networks connected the Americas and Asia'],
     'The Potosí-to-China silver circuit is the AP\'s premier example of early modern global economic integration. Understanding this circuit requires knowing: American silver production → Spanish commercial networks → Manila → Chinese demand (Single Whip Tax Reform) → Chinese silk production → back to Manila. Each link is historically documented and demonstrates that the "early modern" period (after 1450) was genuinely global rather than merely inter-regional in its commercial connections.')
    ),
]

for pnum, subtitle, id_pre, key_concept, content_body, *question_data in ex_parts:
    q1_data, q2_data, q3_data, q4_data, q5_data, q6_data, q7_data = question_data
    
    def make_q(data):
        q, correct, others, exp = data
        opts = [correct] + list(others[:3])
        opts_lines = '\n'.join([f"              '{o}'," for o in opts])
        return f"""          {{
            question: '{q}',
            options: [
{opts_lines}
            ],
            correctAnswer: 0,
            explanation: '{exp}'
          }}"""

    content = f"""export const whExplorationColumbianExchangePart{pnum}Data = {{
  topicSlug: '{EX}',
  sections: [
    {{
      id: '{id_pre}-intro',
      type: 'text' as const,
      content: `
# 🚢 {EX_TITLE}

**Part {pnum} of 7 — {subtitle}**

---

> 🔑 **Key Concept:** {key_concept}
      \`
    }},
    {{
      id: '{id_pre}-quiz1',
      type: 'multiple-choice' as const,
      content: \`**Concept Check** 🎯\`,
      exercise: {{
        questions: [
{make_q(q1_data)},
{make_q(q2_data)}
        ]
      }}
    }},
    {{
      id: '{id_pre}-content',
      type: 'text' as const,
      content: \`
{content_body}
      \`
    }},
    {{
      id: '{id_pre}-input',
      type: 'multiple-choice' as const,
      content: \`**Applied Recall: 3-Question Sprint** 🎯\`,
      exercise: {{
        questions: [
{make_q(q3_data)},
{make_q(q4_data)},
{make_q(q5_data)}
        ]
      }}
    }},
    {{
      id: '{id_pre}-dropdown',
      type: 'dropdown-select' as const,
      content: \`**Match the Idea: Evidence to Claim**\`,
      exercise: {{
        dropdowns: [
          {{
            label: 'The Portuguese ship with lateen sails enabling coastal navigation was the ___',
            options: ['Caravel', 'Galleon', 'Dhow', 'Junk']
          }},
          {{
            label: 'The Spanish system granting colonists rights to indigenous labor was the ___',
            options: ['Encomienda', 'Millet system', 'Mansabdar system', 'Tribute system']
          }},
          {{
            label: 'The Pacific trade route carrying American silver to Manila for exchange with Chinese silk was the ___',
            options: ['Manila Galleon trade', 'Triangle trade', 'Indian Ocean trade', 'Silk Road']
          }}
        ],
        correctAnswers: ['Caravel', 'Encomienda', 'Manila Galleon trade'],
        hint1: 'Portuguese ship innovation — lateen sails — enabled Atlantic exploration',
        hint2: 'Spanish colonial labor grant — indigenous workers — de facto forced labor',
        hint3: 'Pacific silver route — Acapulco to Manila — Chinese silk for American silver',
        explanation: 'The caravel enabled Portuguese exploration by allowing sailing against prevailing winds. The encomienda was the primary labor extraction mechanism of Spanish colonial America. The Manila Galleon trade completed the first truly global commercial circuit by connecting Atlantic and Pacific trade systems through American silver and Asian luxury goods.'
      }}
    }},
    {{
      id: '{id_pre}-applied',
      type: 'multiple-choice' as const,
      content: \`**AP-Style Application** 🎯\`,
      exercise: {{
        questions: [
{make_q(q6_data)},
{make_q(q7_data)}
        ]
      }}
    }}
  ]
}}
"""
    w(f'{EX}-part{pnum}.ts', content)

print("Exploration/Columbian Exchange done.")
print("\\nAll files written successfully!")
