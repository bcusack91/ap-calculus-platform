#!/usr/bin/env python3
"""Write wh-imperialism parts 2-7."""
import os

base = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))),
                    'src', 'data', 'interactive-lessons')

def w(filename, content):
    with open(os.path.join(base, filename), 'w') as f:
        f.write(content)
    print(f"✓ {filename}")

SLUG = 'wh-imperialism'

def mc(qd):
    opts = [qd['correct']] + qd['others'][:3]
    lines = '\n'.join([f"              '{o}'," for o in opts])
    return f"""          {{
            question: '{qd['q']}',
            options: [
{lines}
            ],
            correctAnswer: 0,
            explanation: '{qd['exp']}'
          }}"""

def dd_block(label, opts):
    lines = '\n'.join([f"            '{o}'," for o in opts])
    return f"""          {{
            label: '{label}',
            options: [
{lines}
            ]
          }}"""

def make(pnum, id_pre, subtitle, key, body, qs, dl, do_, dc, hints, dexp):
    q_str = ',\n'.join([mc(q) for q in qs])
    dd_str = ',\n'.join([dd_block(dl[i], do_[i]) for i in range(3)])
    corr = '\n'.join([f"          '{c}'," for c in dc])
    return f"""export const whImperialismPart{pnum}Data = {{
  topicSlug: '{SLUG}',
  sections: [
    {{
      id: '{id_pre}-intro',
      type: 'text' as const,
      content: `
# 🌍 New Imperialism

**Part {pnum} of 7 — {subtitle}**

---

> 🔑 **Key Concept:** {key}
      `
    }},
    {{
      id: '{id_pre}-quiz1',
      type: 'multiple-choice' as const,
      content: `**Concept Check** 🎯`,
      exercise: {{
        questions: [
{mc(qs[0])},
{mc(qs[1])}
        ]
      }}
    }},
    {{
      id: '{id_pre}-content',
      type: 'text' as const,
      content: `
{body}
      `
    }},
    {{
      id: '{id_pre}-input',
      type: 'multiple-choice' as const,
      content: `**Applied Recall: 3-Question Sprint** 🎯`,
      exercise: {{
        questions: [
{mc(qs[2])},
{mc(qs[3])},
{mc(qs[4])}
        ]
      }}
    }},
    {{
      id: '{id_pre}-dropdown',
      type: 'dropdown-select' as const,
      content: `**Match the Idea: Evidence to Claim**`,
      exercise: {{
        dropdowns: [
{dd_str}
        ],
        correctAnswers: [
{corr}
        ],
        hint1: '{hints[0]}',
        hint2: '{hints[1]}',
        hint3: '{hints[2]}',
        explanation: '{dexp}'
      }}
    }},
    {{
      id: '{id_pre}-applied',
      type: 'multiple-choice' as const,
      content: `**AP-Style Application** 🎯`,
      exercise: {{
        questions: [
{mc(qs[5])},
{mc(qs[6])}
        ]
      }}
    }}
  ]
}}
"""

parts = [
    dict(pnum=2, id_pre='whimp2',
         subtitle='Causes of New Imperialism',
         key='New Imperialism (c. 1870-1914) was driven by interacting economic, nationalist, and ideological causes. Economically, industrialized nations sought raw materials, markets, and investment opportunities; nationalistically, European powers competed for colonies as status symbols; ideologically, Social Darwinism and the "civilizing mission" provided justification. AP questions ask you to evaluate which cause was most significant.',
         body='''## 📖 Causes of New Imperialism

> **Economic Causes**

Industrial capitalism generated specific colonial demands:

- **Raw materials:** British cotton mills needed Egyptian cotton; Belgian rubber factories needed Congolese rubber; steel industries needed iron ore and coal from overseas
- **Markets:** Saturated European markets → sought new markets in Asia and Africa for manufactured goods
- **Investment capital:** European banks sought higher returns than European industries offered; colonial infrastructure (railroads, mines) offered higher returns
- **John Hobson\'s critique (1902):** Imperialism driven by capitalists seeking profit outlets; could be ended if European workers were paid more → internal markets sufficient

| Economic Motive | Example | Colony |
|----------------|---------|--------|
| Raw materials | Rubber | Congo, Malaya |
| Markets | Textiles | India, China |
| Investment | Railroads | India, Egypt |

> **Nationalist and Political Causes**

- **Competition:** European nations saw colonies as markers of great power status; France competed with Britain; Germany sought colonies to demonstrate new great-power status
- **Strategic:** Naval bases needed to project sea power globally; coaling stations for steamships; Suez Canal control
- **Domino effect:** Once one power colonized a region, competitors feared being excluded → race to colonize

> **Ideological Causes: Social Darwinism and the Civilizing Mission**

- **Social Darwinism:** Applied Darwinian evolution to human societies; "stronger" (European) civilizations would naturally dominate "weaker" ones; colonial conquest was natural law
- **Rudyard Kipling\'s "White Man\'s Burden" (1899):** Obligation to bring civilization (Christianity, Western law, education) to non-Western peoples; portrayed imperialism as self-sacrifice
- **"Civilizing mission" (mission civilisatrice):** French version; obligation to bring French civilization — language, law, culture — to colonial peoples
- **Reality:** Ideological justifications obscured economic motives; "civilizing" in practice meant forced labor, land seizure, cultural suppression

> **AP Analytical Framework**

All three causes interacted — economic, nationalist, and ideological motives reinforced each other:
- Businessmen lobbied governments (economic → political)
- Governments promoted trade (political → economic)  
- Ideologues justified expansion (ideological → both)
- Success bred success: colonial victories confirmed Social Darwinist claims''',
         qs=[
             {'q': 'John Hobson\'s analysis of imperialism (1902) differed from Social Darwinist justifications in that:',
              'correct': 'Hobson argued imperialism was a specific economic dysfunction (insufficient domestic purchasing power forcing capital to seek overseas returns) with a specific domestic remedy (higher wages = internal markets sufficient), whereas Social Darwinism claimed imperialism was a natural law of racial competition with no remedy — Hobson\'s analysis was reformist; Social Darwinism was deterministic',
              'others': ['Hobson supported imperialism while Social Darwinism opposed it', 'Both Hobson and Social Darwinism provided justifications for colonial expansion', 'Hobson argued imperialism was inevitable while Social Darwinism claimed it was avoidable'],
              'exp': 'Hobson\'s materialist critique vs. Social Darwinist naturalization is AP\'s analytical contrast: Hobson said imperialism was not natural or inevitable — it was a consequence of capitalism\'s distribution problem. Fix income inequality; workers have money; domestic markets absorb industrial output; no need for colonial markets. Social Darwinism said the strong dominate the weak by natural law — no reform is possible or desirable. The contrast reveals that colonial ideology was not simply the application of economic interest but a distinct intellectual system that naturalized what Hobson identified as a historically specific economic problem.'},
             {'q': 'The "scramble for Africa" among European powers after 1870 demonstrates which AP principle?',
              'correct': 'Competitive nationalism created self-reinforcing imperial expansion — once one European power moved to acquire African territory, others felt compelled to respond to prevent being excluded, creating a race dynamic where nationalist competition drove colonial expansion beyond what pure economic calculation would have produced',
              'others': ['The scramble for Africa was purely economically motivated with no nationalist dimension', 'African colonization proceeded slowly and cooperatively among European powers', 'Nationalism played no role in the scramble for Africa — only economic motives mattered'],
              'exp': 'The competitive dynamic of the scramble is AP\'s evidence that nationalism amplified imperialism beyond economic logic: once Britain colonized Egypt (1882), France felt threatened in North Africa; once France moved into West Africa, Germany demanded compensation; once Germany acquired Togoland and Cameroon, Belgium rushed to claim the Congo. Each colonial acquisition by one power triggered reactions from others. Pure economic analysis could not predict this cascading dynamic — only competitive nationalist politics explains the speed and scope of Africa\'s partition.'},
             {'q': 'The Rudyard Kipling poem "White Man\'s Burden" (1899) is AP evidence for:',
              'correct': 'The ideological dimension of imperialism — that European colonial expansion was justified through racial paternalism (Europeans as beneficent civilizers of inferior peoples) and portrayed as self-sacrifice rather than exploitation, revealing the gap between colonial rhetoric (civilizing mission) and colonial practice (forced labor, land seizure, cultural destruction)',
              'others': ['Kipling\'s poem demonstrates that imperialism was purely economically motivated', 'The poem was written to oppose imperialism by exposing its costs', 'Kipling\'s work provides an accurate description of colonial administration'],
              'exp': '"White Man\'s Burden" is AP\'s primary source for colonial ideology: the poem\'s language ("your new-caught, sullen peoples / Half-devil and half-child") reveals the racial assumptions embedded in "civilizing mission" justifications. That Kipling portrays the colonizer as bearing burdens (not extracting profits) inverts the actual economic relationship: colonial powers extracted raw materials and profits while portraying this extraction as charitable improvement. AP\'s lesson: ideology (civilizing mission) served economic and political interests but was presented as altruistic obligation.'},
             {'q': 'Comparing British imperialism in India to Belgian imperialism in the Congo reveals:',
              'correct': 'Both were economically motivated colonial systems but with different administrative methods — British India maintained formal administrative structures, courts, and railroads (while extracting agricultural products and undermining Indian industry); the Belgian Congo under King Leopold II was essentially a private extraction zone where rubber quotas were enforced through mutilation and murder, demonstrating that colonial brutality existed on a spectrum with some systems more violently extractive than others',
              'others': ['Both British India and the Belgian Congo were governed with identical methods and outcomes', 'The Belgian Congo was a model of the civilizing mission while British India was purely extractive', 'Neither colony had significant economic motives — both were governed for the welfare of colonial subjects'],
              'exp': 'Spectrum of colonial violence is AP\'s analytical nuance: both were exploitative, but the Congo Free State (King Leopold II\'s personal colony) was uniquely brutal — the rubber quota system enforced by severing hands, mass killing estimated at 10 million deaths, systematic terror. British India\'s colonialism included famines caused by British policy (1876-79: 5-10 million deaths), destruction of Indian textile industry, but also railroads, civil service, and legal structures that were eventually used by Indian nationalists. The difference in degree matters for understanding colonial systems.'},
             {'q': 'The economic competition for colonies after 1870 was connected to the First Industrial Revolution\'s completion in Britain because:',
              'correct': 'As Britain\'s first-mover industrial advantage declined and Germany, France, and the United States industrialized, European industrial powers competed for colonial raw materials and markets as a way to maintain economic advantages — creating an imperial version of the same competitive dynamics that drove European nationalism',
              'others': ['Industrial competition reduced the desire for colonies since industrial goods could be traded freely', 'Colonialism preceded industrialization and was unrelated to it', 'Only Britain sought colonies for industrial reasons while other European powers had no economic motives'],
              'exp': 'Second Industrial Revolution → imperial competition is AP\'s economic causation chain: Britain\'s first-mover advantage in cotton textiles, iron, and steam engines was eroding by the 1870s as Germany led in chemicals and electrical industries. Competition for raw materials (German steel needs iron ore), markets (German industries need to sell beyond saturated European markets), and investment outlets (German banks need higher returns) drove German colonial demands at the Berlin Conference. Industrial competition and colonial competition were the same competition expressed in different arenas.'},
             {'q': 'Social Darwinism\'s application to imperial expansion reveals which AP principle?',
              'correct': 'Scientific language can be used ideologically to legitimize power relationships — Darwin\'s biological evolution (a scientific theory about natural selection in species) was applied to human societies and racial groups to naturalize European dominance as the inevitable outcome of racial competition rather than the product of specific historical conditions (industrialization, military technology, state organization)',
              'others': ['Social Darwinism accurately described the relationship between European and non-European societies', 'Darwin endorsed the application of his biological theories to human racial competition', 'Social Darwinism was only used to oppose imperialism, not support it'],
              'exp': 'Ideology naturalizing historical conditions is AP\'s critical analysis of Social Darwinism: European military and economic dominance in the 19th century was the result of specific historical processes (industrial revolution, particular state institutions, geographic advantages) — not inherent racial superiority. Social Darwinism transformed contingent historical dominance into natural law, making it seem permanent and inevitable. This ideological function — converting historical outcomes into natural law — is how Social Darwinism served colonial interests regardless of whether its practitioners believed it sincerely.'},
             {'q': 'For AP, evaluating New Imperialism\'s causes requires recognizing that:',
              'correct': 'Economic, nationalist, and ideological causes were mutually reinforcing rather than competing alternatives — economic interests motivated colonial expansion; nationalist competition amplified it; ideological justifications legitimized it; all three operated simultaneously and could not be cleanly separated, so AP analysis should acknowledge multiple interacting causes while evaluating which were primary drivers in specific contexts',
              'others': ['Only one cause (economic) drove New Imperialism — other explanations are incorrect', 'Ideological causes were the only genuine cause — economics and nationalism were pretexts', 'All three causes were equally important in all contexts with no variation'],
              'exp': 'Multiple interacting causes is AP\'s analytical standard: Hobson was partly right that economics mattered; Arendt and others were right that nationalism mattered; Said was right that ideology mattered. But no single-cause explanation explains all cases: why did European powers colonize territories that had no economic value (Sahara desert) if only economics mattered? Why did private businessmen lobby governments for colonial protection if nationalism was irrelevant? Why did ideological justifications change over time if they were just post-hoc rationalization? All three causes operated together.'}
         ],
         dl=['The 1884-1885 conference where European powers agreed on rules for dividing Africa was ___',
             'Herbert Spencer\'s application of Darwin\'s evolutionary theory to human societies and races was ___',
             'John Hobson\'s economic theory that imperialism was caused by insufficient domestic purchasing power was published in ___'],
         do_=[['The Berlin Conference', 'The Vienna Congress', 'The Paris Conference', 'The London Conference'],
              ['Social Darwinism', 'Liberal nationalism', 'Realpolitik', 'Manifest Destiny'],
              ['Imperialism (1902)', 'The Wealth of Nations (1776)', 'The Communist Manifesto (1848)', 'The Origin of Species (1859)']],
         dc=['The Berlin Conference', 'Social Darwinism', 'Imperialism (1902)'],
         hints=['Berlin 1884-85 — European powers — rules for Africa partition — no African leaders present', 'Darwin biological evolution applied to humans and races — stronger civilizations dominate weaker — natural law', 'Hobson 1902 — capitalist underconsumption — colonial markets substitute for domestic — reform remedy'],
         dexp='The Berlin Conference is the political mechanism of African colonization; Social Darwinism is the ideological justification that naturalized European dominance; and Hobson\'s Imperialism is the contemporaneous economic critique — together they represent the political, ideological, and economic dimensions of New Imperialism that AP expects students to analyze.'
    ),
    dict(pnum=3, id_pre='whimp3',
         subtitle='The Scramble for Africa and the Berlin Conference',
         key='The Berlin Conference (1884-85) established the rules by which European powers divided Africa — without consulting any Africans. Within 30 years, all of Africa except Ethiopia and Liberia was under European colonial control. AP questions analyze the mechanisms of colonial rule, the role of technology in enabling conquest, and the significance of the absence of African voices.',
         body='''## 📖 The Scramble for Africa

> **Before the Scramble (pre-1870)**

- Europe controlled ~10% of Africa (coastal trading posts, South Africa, Algeria)
- Interior of Africa largely unknown to Europeans; protected by disease (malaria), geography, and African political resistance
- Trade relationships with African coastal kingdoms; gold, ivory, enslaved people

> **Technology That Enabled the Scramble**

| Technology | Impact |
|-----------|--------|
| **Quinine** | Prevented malaria — Europeans could survive African interior |
| **Steamboats** | Navigate African rivers; penetrate interior |
| **Maxim gun** | Machine gun — gave Europeans overwhelming military advantage |
| **Railroads** | Extract resources from interior to coast |
| **Telegraph** | Coordinate colonial administration over vast distances |

> **The Berlin Conference (1884-85)**

- Called by German Chancellor Bismarck to manage European competition over Africa
- Established "effective occupation" rule: claiming territory required actual administrative presence, not just a flag
- Divided Africa among European powers — no African leaders participated
- Result: virtual completion of Africa\'s colonization by 1914

> **African Colonial Status by 1914**

| Independent | Colonized by |
|------------|------------|
| Ethiopia | — (independent after Adwa) |
| Liberia | — (American-founded; US protectorate) |
| Egypt, Sudan | Britain |
| West Africa | Britain, France, Germany |
| Congo | Belgium (Leopold II personal colony) |
| South Africa | Britain |
| North Africa | France, Italy, Spain |

> **Methods of Colonial Control**

- **Direct rule (French):** French administrators govern directly; French language enforced; assimilation goal
- **Indirect rule (British):** Govern through existing African chiefs who implement British policy; preserve local structures; cheaper
- **Belgian Congo:** Private extraction empire — rubber quotas enforced through terror (hands severed for not meeting quotas)

> **Economic Extraction**

- Forced labor systems: requiring labor for colonial projects
- Cash crop farming: forcing subsistence farmers to grow export crops (cotton, rubber)
- Land seizure: European settlers took best agricultural land
- Destruction of African artisan industries: cheap manufactured goods undercut local production''',
         qs=[
             {'q': 'The "effective occupation" principle established at the Berlin Conference (1884-85) was significant for African colonization because:',
              'correct': 'It accelerated the pace of colonial conquest by requiring that powers actually administer claimed territories — a European flag planted on an African beach was insufficient; actual administrative presence was required, driving European powers to rapidly send expeditions, establish forts, and create administrative structures throughout Africa to secure their territorial claims',
              'others': ['Effective occupation slowed colonization by requiring cooperation with African leaders', 'The principle was purely diplomatic with no practical impact on African colonization', 'Effective occupation meant that African self-governance was recognized if effectively established'],
              'exp': 'The effective occupation rule accelerated rather than constrained colonization: it prevented European powers from claiming enormous territories by simply planting a flag, but requiring actual presence meant all powers had to race to actually occupy claimed territories before competitors did. The paradoxical result was that the rule meant to manage competition intensified the scramble — you had to quickly send expeditions and establish actual presence or lose the territory to a competitor who did.'},
             {'q': 'Quinine\'s role in enabling European African colonization demonstrates:',
              'correct': 'Technological and pharmaceutical advances gave European colonizers specific advantages that partially explain the timing and success of 19th-century colonization — malaria had been the most effective barrier to European penetration of the African interior; its defeat by quinine gave Europeans access to territories previously inaccessible, combining with the Maxim gun and steamboats to create decisive military-technological advantages',
              'others': ['Quinine was the only significant factor enabling African colonization — other technologies were irrelevant', 'Africa had no effective barriers to European penetration before the development of quinine', 'The Maxim gun was more important than quinine in enabling African colonization'],
              'exp': 'Technology combinations enabling colonization is AP\'s framework: no single technology explains everything. Quinine defeated malaria (allowing European presence in the interior); steamboats allowed river navigation (allowing economic penetration); Maxim gun (1884 — continuous fire machine gun) gave Europeans decisive military superiority over African armies with spears or early firearms. The Maxim gun was so decisive that Hilaire Belloc wrote "Whatever happens, we have got / The Maxim gun, and they have not" — a contemporaneous recognition of the technology-power relationship.'},
             {'q': 'The absence of African representatives at the Berlin Conference (1884-85) demonstrates:',
              'correct': 'That the colonized had no standing in the international legal system that was partitioning their continent — African political sovereignty was unrecognized by European international law; territories could be claimed, borders drawn, and peoples allocated to foreign governance without any African participation, demonstrating the racial hierarchy embedded in 19th-century international legal order',
              'others': ['African leaders were invited to Berlin but chose not to participate', 'The absence of Africans was accidental — the conference organizers attempted to include them', 'International law of the 19th century recognized African sovereignty but African leaders declined to assert it'],
              'exp': 'The absolute exclusion of Africans from Berlin is AP\'s evidence of 19th-century international law\'s racial structure: the conference was specifically about Africa\'s partition, yet no African ruler, diplomat, or representative participated. The legal and diplomatic framework that governed European relations (Congress of Vienna, Concert of Europe, international law) simply did not recognize non-European polities as equal sovereign subjects. African kingdoms, empires, and states existed and had functioning governance, but European international law did not acknowledge their sovereignty as equivalent to European states\' sovereignty.'},
             {'q': 'Comparing British "indirect rule" to French "direct rule" in colonial Africa reveals:',
              'correct': 'Different colonial administrative philosophies produced different long-term effects — British indirect rule (governing through African chiefs) preserved some African political structures while instrumentalizing traditional authority for colonial purposes; French direct rule (replacing African administration with French officials) destroyed traditional governance structures more thoroughly but created African elites who could use French citizenship claims against French colonial rule',
              'others': ['Both direct and indirect rule had identical outcomes for African peoples', 'British indirect rule was always less harmful than French direct rule', 'Direct rule was used to respect African traditions while indirect rule was more exploitative'],
              'exp': 'Comparative colonial administration is AP\'s analytical framework for understanding different colonial systems\' legacies: indirect rule preserved traditional African chiefs as useful intermediaries but corrupted them (making them agents of colonial rather than community interests); direct rule produced francophone African intellectuals who used French revolutionary ideals against colonial France (similar to how Indian nationalists used British political concepts against British India). Different methods; different tools for subsequent resistance.'},
             {'q': 'King Leopold II\'s personal ownership of the Congo Free State (1885-1908) represents:',
              'correct': 'The extreme end of the colonial exploitation spectrum — treating an entire territory (75 times the size of Belgium) as a private rubber extraction enterprise enforced through systematic terror, demonstrating that the "civilizing mission" rhetoric of New Imperialism was disconnected from actual colonial practice: Leopold used missionary and humanitarian rhetoric to acquire the Congo while his Force Publique murdered and mutilated millions',
              'others': ['The Congo Free State was a model of the humanitarian civilizing mission in action', 'Leopold II\'s Congo was typical of European colonial administration with no unique features', 'The brutality of the Congo was exaggerated by journalists with no basis in actual events'],
              'exp': 'The Congo Free State is AP\'s most extreme evidence of the gap between colonial ideology and colonial practice: Leopold\'s personal colony killed an estimated 10 million Congolese (through murder, starvation, and disease) while extracting rubber that funded Belgian development. The rubber quota system (meet your quota or have your hand cut off; bring baskets of rubber or soldiers bring baskets of severed hands to prove they fired bullets justifiably) was documented by missionaries and journalists, triggering one of the first international human rights campaigns (1904-1908) that eventually forced Belgium to take over the colony from Leopold.'},
             {'q': 'The artificial borders drawn at the Berlin Conference created long-term consequences because:',
              'correct': 'European borders divided existing African ethnic, linguistic, and political communities across different colonies and combined historically hostile groups within the same colonial (later national) boundaries — creating the ethnic conflicts and governance challenges that persist in post-independence African states, demonstrating that cartographic decisions made without African input had generational consequences',
              'others': ['African borders drawn at Berlin coincidentally aligned with existing African political and ethnic boundaries', 'The borders created at Berlin have had no long-term impact on African political development', 'African states successfully modified all colonial borders after independence'],
              'exp': 'The cartographic violence of Berlin is AP\'s mechanism for connecting 19th-century colonialism to 20th-century African political challenges: the straight-line borders visible on African maps were drawn by European diplomats with limited knowledge of African geography, ethnicity, or political organization. The Somali were divided among British, Italian, and French Somalia; the Yoruba were split between British Nigeria and French Dahomey; the Maasai were split between British Kenya and German Tanganyika. Post-independence African states retained colonial borders (mostly) — inheriting the governance challenges those borders created.'},
             {'q': 'For AP, the Scramble for Africa\'s most significant historical consequence was:',
              'correct': 'The complete reorganization of African political, economic, and social life to serve European interests — replacing diverse African governance systems with colonial administration, redirecting African economies from subsistence and regional trade to export commodity production, and disrupting African cultures through missionary education and forced cultural change, creating the conditions for both 20th-century nationalist movements and post-independence political instability',
              'others': ['The scramble\'s most significant consequence was the economic development it produced for African peoples', 'The primary consequence was the establishment of permanent European settlement throughout Africa', 'The scramble for Africa had minimal long-term consequences for African political and economic development'],
              'exp': 'Comprehensive transformation is AP\'s synthesis: the scramble was not just political (changing who governed) but economic (redirecting production to European needs), social (disrupting existing communities), and cultural (suppressing African languages and religions through missionary education). The 20th-century consequences — nationalist independence movements, post-independence political instability, economic dependency, ethnic conflicts — all have roots in specific colonial choices made during the scramble. Understanding current African challenges requires understanding colonial foundations.'}
         ],
         dl=['The 1884-85 European conference that regulated the colonization of Africa was ___',
             'The British machine gun that gave European armies decisive military advantage in African colonial conquest was ___',
             'The Belgian king who personally owned the Congo Free State as a rubber extraction empire was ___'],
         do_=[['The Berlin Conference', 'The Paris Conference', 'The Vienna Conference', 'The London Conference'],
              ['The Maxim gun', 'The Winchester rifle', 'The Gatling gun', 'The cannon'],
              ['King Leopold II', 'King Albert I', 'Kaiser Wilhelm II', 'King George V']],
         dc=['The Berlin Conference', 'The Maxim gun', 'King Leopold II'],
         hints=['Berlin 1884-85 — Bismarck — effective occupation rule — no Africans present — divided continent', 'Machine gun — 1884 — continuous fire — overwhelming military advantage over African armies with spears', 'Belgian king — personal colony — Congo — 75 times Belgium size — rubber quotas — systematic terror'],
         dexp='The Berlin Conference is the diplomatic mechanism of colonization; the Maxim gun is the technological mechanism; and King Leopold II represents the extreme consequence — together they demonstrate the political, technological, and economic dimensions of how Europe rapidly colonized Africa.'
    ),
    dict(pnum=4, id_pre='whimp4',
         subtitle='British India: Crown Rule and Nationalist Response',
         key='British India (1858-1947) was the largest and most complex colonial empire in world history. AP questions focus on the transition from East India Company rule to British Crown rule (after the 1857 Sepoy Mutiny), the economic exploitation of India, the role of Western education in producing Indian nationalists, and the Indian National Congress as a model of anti-colonial political organization.',
         body='''## 📖 British India

> **The East India Company to Crown Rule Transition**

- **Before 1858:** British East India Company governed India as a trading and administrative enterprise; Company armies; Company courts
- **Sepoy Mutiny (1857):** Indian soldiers in Company army revolted; complex causes including cartridge controversy (greased with cow/pig fat, offensive to Hindus and Muslims), land annexation, missionary activity
- **Aftermath:** British Parliament abolished the East India Company; India came under direct British Crown rule (Queen Victoria, "Empress of India") — Government of India Act 1858
- **New apparatus:** Indian Civil Service; professional bureaucracy; predominantly British at top; Indians in subordinate positions

> **Economic Exploitation of India**

The British Raj structured India\'s economy to serve British interests:

| British Policy | Indian Impact |
|---------------|--------------|
| **Deindustrialization** | British manufactured goods flooded India; Indian textile industry destroyed; Manchester cotton mills replaced Indian artisans |
| **Cash crop agriculture** | Forced indigo, cotton, opium cultivation for export; diverted from food production |
| **"Drain of wealth"** | Indian revenues paid for British administration costs, pensions, wars; Indian nationalists estimated billions extracted |
| **Railroads** | Served British economic interests (exporting resources) more than Indian development needs |

> **The "Drain of Wealth" Theory**

Dadabhai Naoroji (1901) calculated that Britain systematically transferred Indian wealth to Britain:
- India paid for British administration, military costs, "Home Charges"
- These were not reinvested in India but sent to Britain
- **AP significance:** Demonstrates that colonialism involved systematic economic extraction, not just political control

> **Western Education: The Colonial Contradiction**

- British policy (Macaulay\'s Minute on Education, 1835): Educate Indian elite in English language and Western knowledge → "Indian in blood and color, but English in taste, opinions, morals, and intellect"
- **Unintended consequence:** Western education gave Indian elites access to Enlightenment ideas (natural rights, self-determination, representative government) that they applied to oppose British colonial rule
- Indian National Congress founders: largely Western-educated lawyers and professionals

> **Indian National Congress (1885)**

- Founded 1885 by Indian lawyers, professionals, and British colonial official A.O. Hume
- Initially: loyal opposition; demanded greater Indian representation in civil service; petitions to Parliament
- Adopted British political language: applied British constitutional principles to argue for Indian self-governance
- Later: Bal Gangadhar Tilak demanded "Swaraj" (self-rule) as "birthright"; mass politics began''',
         qs=[
             {'q': 'The Macaulay Minute on Education (1835) created which AP-recognized "colonial contradiction"?',
              'correct': 'British education designed to create a class of culturally Westernized Indians who would serve colonial administration instead produced Indians who used Western political concepts (natural rights, representative government, liberalism) to argue against British colonial rule — the colonizer\'s tool of ideological assimilation produced anti-colonial nationalists, demonstrating that colonial systems often generate the ideological resources of their own opposition',
              'others': ['Western education successfully created a class of loyal Indians who supported British rule throughout the colonial period', 'Macaulay\'s education policy was rejected by Indian elites who preferred traditional education', 'Western education had no political consequences — it only served British administrative needs'],
              'exp': 'The education contradiction is AP\'s most important mechanism connecting colonialism to nationalism: Macaulay explicitly wanted Indians who were "English in taste, opinions, morals, and intellect" — he succeeded in educating Indians in English political thought; he failed to predict that Indians would apply English political thought to their own situation. Indian National Congress founders (lawyers, doctors, academics) used British liberal political theory to argue that British rule in India was illegitimate by British principles. This is the same mechanism as Indian nationalists using English courts to challenge British policy.'},
             {'q': 'Dadabhai Naoroji\'s "drain of wealth" theory demonstrates:',
              'correct': 'That colonialism involved systematic economic extraction — not just political control — through mechanisms like "Home Charges" (India paying for British administration costs), diversion of Indian revenues to Britain, destruction of Indian industries, and forced export agriculture that transferred Indian wealth to Britain, creating economic underdevelopment as a consequence of colonial policy rather than pre-colonial poverty',
              'others': ['Naoroji argued that British colonialism benefited India economically through development investment', 'The drain of wealth theory was disproven by subsequent economic historians', 'Naoroji\'s analysis applied only to the East India Company period, not British Crown rule'],
              'exp': 'The drain of wealth is AP\'s economic analysis framework for colonialism: Naoroji calculated (with British government statistics) that a significant portion of India\'s national income was transferred annually to Britain through Home Charges, pensions for British administrators, interest on loans, and trade policies that disadvantaged Indian industry. This is not simply trade (which produces mutual benefits) but systematic extraction — using political power to structure economic relationships advantageously. The theory connects political colonialism to economic underdevelopment.'},
             {'q': 'The 1857 Sepoy Mutiny\'s complex causes (cartridge controversy, land annexation, missionary activity) demonstrate:',
              'correct': 'Colonial systems generate multiple simultaneous grievances that can suddenly combine into explosive resistance — no single cause (religious insult from greased cartridges, economic disruption from land annexation, cultural threat from missionary activity) was individually sufficient to produce major revolt; their simultaneous presence in 1857 created a crisis of colonial legitimacy across multiple Indian communities',
              'others': ['The Sepoy Mutiny had a single clear cause — the greased cartridge controversy', 'The Mutiny was spontaneous with no accumulated grievances', 'Only Indian soldiers (sepoys) participated; no civilian participation occurred'],
              'exp': 'Multiple simultaneous grievances is AP\'s analysis of the Mutiny: the cartridge controversy (new Enfield rifles\' cartridges allegedly greased with beef and pork fat — offensive to both Hindus and Muslims) was the immediate trigger, but accumulated grievances (Doctrine of Lapse land annexation; missionary activity threatening traditional religion; economic disruption) created the kindling. Singular cause analysis misses how colonial systems accumulate grievances across different communities until a triggering event produces combined resistance. AP rewards multi-causal analysis.'},
             {'q': 'The shift from East India Company rule to British Crown rule (1858) paradoxically increased the intensity of colonial control because:',
              'correct': 'The East India Company\'s commercial orientation limited colonial administration to what was economically profitable; Crown rule introduced systematic political administration, professional civil service, legal codes, railroads, and census systems that penetrated Indian society far more thoroughly than commercial governance had, even while replacing Company exploitation with state-organized extraction',
              'others': ['Crown rule reduced colonial extraction and gave Indians more political rights', 'The transition was purely symbolic with no change in actual governance', 'East India Company rule was more administratively thorough than Crown rule'],
              'exp': 'Transition to more thorough colonialism is AP\'s paradox of the Mutiny\'s consequence: the Company was a commercial enterprise that governed India as a side effect of trade; the Crown created a systematic colonial state with the Indian Civil Service, legal codes, census systems, educational institutions, and railroads. The Raj was a more thoroughly organized colonialism — more invasive culturally (missionary activity continued; English education expanded), more systematically extractive (railroad networks built to export resources), and more professionally administered. More organized colonial state → more thorough penetration of Indian society.'},
             {'q': 'The Indian National Congress\'s (1885-1900s) strategy of using British political language demonstrates which AP principle?',
              'correct': 'Colonized elites could turn the colonizer\'s proclaimed values against colonial practice — by demanding that British constitutional principles be applied to India, Congress nationalists placed British officials in the position of either granting Indian demands (honoring British values) or refusing them (admitting that British values were for British people only, not universal)',
              'others': ['Using British political language demonstrated complete acceptance of British colonial legitimacy', 'The strategy was ineffective because British officials simply ignored constitutional arguments', 'Indian National Congress rejected all British political concepts and relied purely on indigenous political traditions'],
              'exp': 'The legitimacy trap created by constitutional arguments is AP\'s framework: British constitutional tradition emphasized that subjects had rights before law, that representative government was legitimate government, that taxation without representation was tyranny. Indian nationalists said: "You claim these principles — apply them to India." British officials who refused faced the charge of hypocrisy (their own constitutional principles condemned their rule); those who partially conceded expanded Indian rights. Either way, the constitutional strategy advanced Indian nationalism while forcing British officials into defensive positions.'},
             {'q': 'Comparing British colonial policy in India to French policy in Algeria reveals:',
              'correct': 'Both colonized territories for economic extraction but used different administrative philosophies — Britain governed India through indirect rule structures (Indian princes, adapted legal systems) and claimed governance was training for eventual self-rule; France in Algeria pursued settler colonialism with large French settler population and intended Algeria to become part of France — different colonial philosophies with different long-term decolonization outcomes',
              'others': ['Both Britain in India and France in Algeria used identical colonial policies', 'Britain in India used more direct rule while France in Algeria used more indirect rule', 'Neither Britain nor France had any settler population in their respective colonies'],
              'exp': 'Colonial policy comparison reveals different decolonization paths: India\'s gradual transition to independence (1947) through political negotiation reflected the indirect rule tradition and British claims to be preparing India for self-governance; Algeria\'s brutal independence war (1954-1962) reflected France\'s claim that Algeria was part of France and its large European settler population\'s resistance to independence. Different colonial theories (indirect rule vs. settler colonialism) produced different independence paths. AP rewards this kind of policy-to-outcome analysis.'},
             {'q': 'For AP, British India\'s most significant contribution to world history was:',
              'correct': 'The contradiction between British liberal political ideology and British colonial practice generated the ideological resources and organizational forms for 20th-century anti-colonial nationalism globally — the Indian National Congress model (legal advocacy using colonizer\'s concepts) became a template for other colonial independence movements, while Gandhi\'s later adaptation (mass civil disobedience) became a global model for nonviolent resistance',
              'others': ['British India\'s most significant contribution was the economic development British investment brought to India', 'The railroad system built in India was the primary historical legacy of British colonialism there', 'India\'s independence movement had no influence on other anti-colonial movements globally'],
              'exp': 'The global template function of Indian nationalism is AP\'s synthesis: the Indian National Congress\'s methods (legal advocacy, constitutional argument, political party organization) and later Gandhian methods (mass civil disobedience, noncooperation) were studied and adapted by anti-colonial movements globally — African National Congress in South Africa, independence movements in West Africa, civil rights movements in the United States. The Indian experience demonstrated that colonial authority could be challenged through organized mass politics, providing a model that shaped 20th-century liberation globally.'}
         ],
         dl=['The 1858 act that transferred governance of India from the East India Company to the British Crown was ___',
             'The Indian economic nationalist who developed the "drain of wealth" theory about colonial extraction was ___',
             'Thomas Macaulay\'s 1835 policy that shaped colonial education in India was ___'],
         do_=[['The Government of India Act', 'The Sepoy Reorganization Act', 'The British India Charter', 'The Colonial Governance Act'],
              ['Dadabhai Naoroji', 'Bal Gangadhar Tilak', 'A.O. Hume', 'Gopal Krishna Gokhale'],
              ['The Macaulay Minute on Education', 'The Indian Education Charter', 'The Calcutta Education Policy', 'The English Language Act']],
         dc=['The Government of India Act', 'Dadabhai Naoroji', 'The Macaulay Minute on Education'],
         hints=['1858 — abolished East India Company — direct Crown rule — Queen Victoria Empress of India', 'Indian nationalist — calculated billions extracted — Home Charges — drain of wealth — published 1901', 'Macaulay 1835 — English education — Indian elite culturally Westernized — unintended anti-colonial consequence'],
         dexp='The Government of India Act is the political transition mechanism; Naoroji is the economic analysis of colonial extraction; and the Macaulay Minute is the cultural policy that unintentionally produced anti-colonial nationalists — together they demonstrate the political, economic, and cultural dimensions of British India that AP expects students to analyze.'
    ),
    dict(pnum=5, id_pre='whimp5',
         subtitle='Imperial Ideology and Cultural Consequences',
         key='New Imperialism was not merely political and economic — it was a cultural project that imposed European languages, religions, educational systems, and values on colonized peoples while systematically undermining indigenous cultures. AP questions analyze the contradictions between colonial ideology (civilizing mission) and colonial practice, and evaluate how colonialism shaped cultural identity in the colonized world.',
         body='''## 📖 Imperial Ideology and Culture

> **Ideological Justifications for Empire**

| Ideology | Key Text | Argument | Who Benefited |
|---------|---------|---------|--------------|
| **Social Darwinism** | Spencer\'s "Social Statics" (1851) | Racial hierarchy natural; strong civilizations dominate weak | European powers |
| **"White Man\'s Burden"** | Kipling (1899) | Europeans obligated to civilize "inferior" peoples | European powers (legitimacy) |
| **Mission civilisatrice** | French colonial policy | French civilization universal; duty to spread it | French empire |
| **Trusteeship** | British colonial theory | Europeans holding colonial territories "in trust" until self-governance possible | British empire |

> **Missionary Activity**

- Christian missionaries were both agents of colonialism and sometimes critics of colonial abuses
- **Schools and hospitals:** Provided education and healthcare — also tools of cultural change
- **Results:** Created African and Asian Christian communities; also created Western-educated elite who used education against colonialism
- **Contradiction:** missionaries wanted to "save souls"; often undermined traditional governance and social structures in the process

> **Cultural Suppression vs. Cultural Persistence**

| Colonial Practice | African/Asian Response |
|-----------------|----------------------|
| Banned indigenous languages | Secret cultural transmission; language preservation movements |
| Suppressed traditional religion | Syncretic religions combining Christianity/Islam with indigenous practices |
| Replaced traditional law | Legal dualism: colonial courts + surviving customary law |
| Promoted European dress/customs | Cultural retention in private sphere; performance of colonial culture publicly |

> **Orientalism (Edward Said\'s Framework)**

- European scholarly study of "the East" produced knowledge that served colonial power
- Portrayed non-Western peoples as exotic, static, irrational, needing European governance
- **"Orient" as Other:** Defining European modernity through contrast with "traditional" Asia/Africa
- **AP relevance:** Understanding how knowledge production served colonial power; why European colonial sources must be read critically

> **The "Civilizing Mission" Contradiction**

The most powerful contradiction:
- Colonial ideology promised to bring civilization (rule of law, education, Christianity)
- Colonial practice delivered forced labor, land seizure, cultural suppression
- **AP use:** This gap between promise and practice is the foundation of anti-colonial ideology — colonized peoples demanded that colonial powers either live up to their promises or admit the promises were lies''',
         qs=[
             {'q': 'Edward Said\'s concept of "Orientalism" is AP-useful because:',
              'correct': 'It demonstrates that European knowledge production about non-Western peoples was not objective scholarship but a form of cultural power that portrayed "Eastern" peoples as exotic, static, irrational, and inferior in ways that justified colonial governance — making "Orientalist" texts in AP document sources unreliable representations of colonized peoples\' actual cultures and requiring critical reading that considers the author\'s colonial context and interests',
              'others': ['Orientalism was a neutral scholarly movement that accurately documented Eastern cultures', 'Said\'s critique of Orientalism has no relevance for AP document analysis', 'Orientalist knowledge was produced entirely separately from colonial political interests'],
              'exp': 'Sourcing skills using Said\'s framework: an AP document written by a British colonial officer, missionary, or "Oriental studies" scholar describing Indian, African, or Middle Eastern culture carries Orientalist assumptions — portrayals of "traditional," "unchanging," "irrational" peoples served colonial interests by implying these peoples needed European governance to modernize. AP sourcing: "point of view" analysis should identify these assumptions and question whether the source represents colonized peoples accurately or through the ideological lens of colonial superiority.'},
             {'q': 'The "civilizing mission" rhetoric\'s most significant function for colonial powers was:',
              'correct': 'It provided domestic political legitimacy for colonial expansion — European publics could support colonial wars and taxation for imperial administration if they believed colonialism was morally beneficial (spreading civilization) rather than purely economically exploitative, making the ideology functionally necessary for maintaining democratic political support for empire even if colonial officials privately acknowledged the economic motives',
              'others': ['The civilizing mission was always sincerely believed and accurately described colonial practice', 'Domestic legitimation was unimportant — colonial governments didn\'t need public support for imperial projects', 'The civilizing mission was rejected by European publics who opposed colonialism'],
              'exp': 'Domestic legitimation is the political function of colonial ideology: maintaining colonies required government expenditure, military commitment, and occasional public sacrifice — all of which needed political justification in increasingly democratic European states. "We are improving barbarous peoples" was more politically effective than "we are extracting raw materials and profits." The ideological function does not require that colonial officials personally believed the ideology (though many did); it requires that the ideology performed necessary political work within European domestic politics.'},
             {'q': 'The creation of Western-educated colonial elites through missionary schools demonstrates which AP principle?',
              'correct': 'Colonial systems produced their own opposition — missionary education created African and Asian elites fluent in European languages and political thought who used that education to demand implementation of the principles (equality, rights, self-determination) that Western education had taught them, generating the cultural resources for anti-colonial nationalism',
              'others': ['Missionary education successfully created permanently loyal colonial subjects with no anti-colonial consciousness', 'Western-educated elites rejected all Western ideas and turned to traditional indigenous resources for anti-colonial ideology', 'Missionary schools had no political consequences — they only provided literacy skills'],
              'exp': 'Education as anti-colonial tool is AP\'s recurring pattern: West Africa\'s educated elite (Gold Coast lawyers who founded the African National Congress precedents); India\'s Congress leaders (trained at Oxford and the Inns of Court); Kenya\'s Jomo Kenyatta (anthropology student at London School of Economics who wrote Facing Mount Kenya to counter Orientalist anthropology). All used Western education to make anti-colonial arguments in terms that Western audiences could not dismiss as simply incomprehensible — because they were made in the colonizer\'s own language and political tradition.'},
             {'q': 'Cultural syncretism (blending European and indigenous religious/cultural practices) in colonial Africa demonstrates:',
              'correct': 'That colonized peoples were active agents who adapted external cultural forces to their own purposes rather than simply accepting or rejecting colonial culture wholesale — creating new syncretic religious forms (African Christianity combining Christian theology with African spiritual practices) that served both accommodation and resistance by accepting Christian forms while preserving African content',
              'others': ['Syncretism represented complete acceptance of European cultural dominance', 'African peoples either completely accepted or completely rejected European cultural influences with no middle ground', 'Syncretic religions were created by missionaries who deliberately combined traditions'],
              'exp': 'Agency in cultural change is AP\'s analytical standard against passive victimhood narratives: when Africans created African Independent Churches combining Christianity with ancestral veneration, healing rituals, and African musical forms, they were not simply imitating European missionaries — they were creating new cultural forms that met community needs while adapting to colonial power. This agency is historically significant: colonized peoples shaped the cultural encounter, not just received it. Syncretism is evidence of creative adaptation, not passive cultural submission.'},
             {'q': 'The ban on indigenous languages in colonial schools and its enforcement shows:',
              'correct': 'Language suppression was central to colonial cultural projects because language is the medium of cultural transmission — by requiring European languages in schools and official contexts, colonial authorities attempted to sever the transmission of indigenous knowledge, law, history, and values across generations, making colonial language-in-education a form of cultural violence alongside physical colonial violence',
              'others': ['Language policies were adopted purely for administrative convenience with no cultural suppression intent', 'Indigenous languages were never successfully suppressed — colonial language policies were uniformly ignored', 'Language suppression had no long-term cultural consequences in colonial societies'],
              'exp': 'Language as cultural genocide is AP\'s analysis of educational language policy: indigenous languages carry legal traditions, historical knowledge, cosmological frameworks, and social relationships that cannot be fully translated. When French colonial policy punished children for speaking Wolof, Bambara, or Hausa at school; when British schools required English with punishment for indigenous language use; when Belgian Congo schools taught only in Flemish and French — they were targeting the transmission mechanism of indigenous culture, not merely selecting a convenient administrative medium.'},
             {'q': 'Comparing the "civilizing mission" to earlier Spanish colonial justifications (Christianizing indigenous peoples) reveals:',
              'correct': 'Both provided ideological justification for conquest and extraction while promising benefits (salvation; civilization) to conquered peoples — the ideological function (providing moral legitimacy for colonial violence and extraction) was consistent across different eras even as the specific content evolved from religious salvation to secular civilization, demonstrating that colonial ideologies are historically specific forms of a consistent pattern',
              'others': ['The civilizing mission was entirely different from religious colonial justifications with no comparable function', 'Earlier Spanish colonial justifications were purely religious with no secular dimensions', 'Both justifications accurately described the benefits colonial peoples received from conquest'],
              'exp': 'Continuity of colonial ideology across eras is AP\'s pattern recognition: Spanish "just war" theory (colonization justified to bring salvation to pagans) → 19th-century "civilizing mission" (colonization justified to bring progress to savages) are different content but identical function. Both promised benefits to justify violence and extraction; both produced systems primarily serving colonizer interests. Recognizing this pattern allows AP students to analyze colonial ideology across different eras and contexts with consistent analytical tools.'},
             {'q': 'For AP, the most significant cultural consequence of 19th-century imperialism was:',
              'correct': 'The creation of cultural complexity in colonized societies — Western education, religion, and political thought were adopted and adapted by colonized peoples in ways that served both accommodation (working within colonial systems) and resistance (using colonial tools against colonial authority) — creating hybrid cultural identities that became the foundation of 20th-century postcolonial cultures globally',
              'others': ['Colonialism completely destroyed indigenous cultures with no survival or adaptation', 'Colonialism had no significant cultural impact — indigenous cultures were unaffected', 'The primary cultural consequence was the replacement of all indigenous religions with Christianity or Islam'],
              'exp': 'Hybrid cultural formations is AP\'s synthesis: colonialism did not simply destroy indigenous cultures (though it damaged them) or leave them untouched (it transformed them) — it created new hybrid forms combining indigenous and European elements. African Christianity, Indo-English literature, Latin American mestizo cultures, Southeast Asian nationalism using European political concepts — all demonstrate creative synthesis under colonial conditions. These hybrid cultures became the foundation of postcolonial national identities and continue to shape global culture today.'}
         ],
         dl=['Rudyard Kipling\'s 1899 poem arguing that Europeans had an obligation to civilize "inferior" peoples was ___',
             'Edward Said\'s 1978 analysis of how European scholarship about non-Western peoples served colonial power was ___',
             'The French colonial ideology that France had an obligation to spread French civilization to colonial peoples was ___'],
         do_=[['White Man\'s Burden', 'The Social Contract', 'Imperialism', 'Social Darwinism'],
              ['Orientalism', 'The Wretched of the Earth', 'Black Skin White Masks', 'Heart of Darkness'],
              ['Mission civilisatrice', 'Trusteeship', 'Direct rule', 'Assimilation']],
         dc=['White Man\'s Burden', 'Orientalism', 'Mission civilisatrice'],
         hints=['Kipling 1899 — Europeans bear burden — civilize inferior peoples — imperial obligation rhetoric', 'Said 1978 — European scholarship about East — served colonial power — required critical reading', 'French colonial ideology — universal civilization — obligation to spread French language law culture'],
         dexp='"White Man\'s Burden" represents the Anglo-American ideological justification of empire; Orientalism reveals how scholarship served colonial power; and mission civilisatrice is the French version of the same civilizing ideology — together they demonstrate that New Imperialism had a sophisticated ideological apparatus that AP requires students to analyze critically.'
    ),
    dict(pnum=6, id_pre='whimp6',
         subtitle='Resistance to Imperialism',
         key='Colonized peoples did not passively accept imperial rule — they developed multiple forms of resistance including armed revolts (Boxer Rebellion, Zulu War, Mahdist War), political organization (Indian National Congress, African political associations), and cultural resistance (religious movements, preservation of indigenous practices). AP questions analyze why most resistance failed in the short term while building foundations for 20th-century independence.',
         body='''## 📖 Resistance to Imperialism

> **Major Armed Resistance Movements**

| Resistance | Location | Year | Against | Outcome |
|-----------|---------|------|---------|---------|
| **Sepoy Mutiny** | India | 1857 | British East India Company | Suppressed; led to Crown rule |
| **Zulu War** | South Africa | 1879 | British | Initial Zulu victory (Isandlwana); ultimately suppressed |
| **Mahdist War** | Sudan | 1881-1898 | British-Egyptian | Short-term Mahdist state (1885-1898); defeated at Omdurman (1898) |
| **Boxer Rebellion** | China | 1899-1901 | All foreign powers | Suppressed by 8-nation allied army; increased Western control |
| **Maji Maji Rebellion** | German East Africa | 1905-1907 | German colonial rule | Suppressed; 200,000-300,000 dead |

> **Why Armed Resistance Usually Failed**

Technology gap: Maxim gun vs. spears/early firearms; steamboats vs. canoes; telegraphic coordination vs. drum communication; modern logistics vs. subsistence-dependent armies

However, the Zulu at Isandlwana (1879): demonstrated that tactical innovation (encircling movement) could defeat European forces when European armies underestimated African military capability — strategic victory was temporary but historically significant

> **The Boxer Rebellion (1899-1901)**

- Chinese "Boxers" (Spirit Boxers; Yihequan) revolted against foreign presence in China
- Attacked foreign businesses, Christian missionaries, and Chinese Christians
- Besieged foreign legations in Beijing for 55 days
- Suppressed by 8-nation Allied Expedition (Germany, Austria, Britain, France, Italy, Japan, Russia, USA)
- **Boxer Protocol (1901):** China forced to pay massive indemnity, allow foreign troops in Beijing, destroy defenses
- **AP significance:** Shows both the depth of anti-foreign resentment in China AND the complete failure of popular armed resistance against modern armed coalition

> **Political and Cultural Resistance**

- **African political associations:** Educated Africans formed organizations demanding rights within colonial systems
- **Pan-Africanism:** Movement emphasizing African cultural unity and political self-determination across diaspora
- **Religious resistance movements:** African independent churches; syncretic religions combining indigenous and Christian elements
- **Preservation movements:** Defending indigenous languages, cultural practices, historical memory

> **Long-Term Significance**

All resistance — successful or not — demonstrated:
1. Colonial rule was not consensual — it required ongoing coercion
2. Resistance built organizational and ideological foundations for 20th-century independence
3. Armed resistance demonstrated that colonial powers were not invincible — a crucial psychological point for subsequent generations''',
         qs=[
             {'q': 'The Boxer Rebellion\'s (1899-1901) failure despite massive popular participation demonstrates:',
              'correct': 'The decisive military-technological gap between industrialized colonial powers and non-industrialized resistance movements — tens of thousands of Boxers armed with traditional weapons and belief in magical protection from bullets were no match for modern firearms, coordinated military logistics, and unified command among the 8-nation allied force, demonstrating that popular resistance without modern military capability could not succeed against industrialized imperial powers',
              'others': ['The Boxer Rebellion succeeded in expelling foreign powers from China', 'The failure was due to Chinese popular support for foreign presence, not military factors', 'The 8-nation allied force succeeded primarily through diplomacy rather than military force'],
              'exp': 'Military-technological gap is AP\'s explanation for the pattern of failed armed resistance: the Boxers had genuine popular support, genuine grievances (foreign economic concessions, missionary activity, cultural penetration), and genuine courage — but magical beliefs in bullet immunity and traditional weapons were no match for modern rifles and military organization. The Boxer Protocol\'s humiliating terms (indemnity, foreign troops in Beijing, destroyed defenses) demonstrated that popular resistance without modern weapons and state backing could not succeed. This pattern explains why 20th-century independence movements required different strategies.'},
             {'q': 'The Zulu victory at Isandlwana (1879) despite ultimate defeat is AP-significant because:',
              'correct': 'It demonstrated that European colonial armies were not invincible when their tactical assumptions were challenged — the Zulu "horns of the buffalo" encirclement tactic caught overconfident British forces without deployed defenses, temporarily defeating a modern army; though Britain ultimately won the war, Isandlwana proved that African military innovation could overcome European technological superiority in specific tactical situations',
              'others': ['Isandlwana was a minor skirmish with no strategic significance', 'The Zulu victory at Isandlwana permanently prevented British colonization of South Africa', 'British forces had no technological advantages over the Zulu army'],
              'exp': 'Exceptional resistance success within overall failure is AP\'s nuanced analysis: Isandlwana (January 22, 1879) — 20,000 Zulu warriors attacked a British camp before it was properly defended; 1,300+ British soldiers killed. It was the worst British defeat by an African force in the colonial era. The battle was then reversed the same day at Rorke\'s Drift (139 British soldiers held off 4,000 Zulu), and Britain eventually colonized Zululand. But Isandlwana\'s lesson — colonial armies are not invincible when caught unprepared and outmaneuvered — was not forgotten by African military thinkers.'},
             {'q': 'The Mahdist War in Sudan (1881-1898) is AP-significant as an example of:',
              'correct': 'Religious nationalist resistance to colonialism — Muhammad Ahmad\'s declaration as the Mahdi (divinely guided one) combined Islamic religious authority with anti-colonial nationalism to mobilize Sudanese resistance that temporarily succeeded (capturing Khartoum, killing General Gordon, establishing an independent Mahdist state 1885-1898) before being defeated by modern military technology at the Battle of Omdurman',
              'others': ['The Mahdist War was primarily an intra-Sudanese conflict with no anti-colonial dimension', 'The Mahdist state was never successfully established — British control was never broken', 'The Battle of Omdurman demonstrated that traditional religious movements could defeat modern armies'],
              'exp': 'Religious resistance framework is AP\'s analytical lens for the Mahdist War: the Mahdi\'s movement drew on deep Islamic traditions of resistance to unjust rule (religious authority legitimizing political revolt), creating a mass movement that combined genuine religious belief with anti-colonial nationalism. The 13-year independent Mahdist state demonstrates that such movements could temporarily succeed; the Battle of Omdurman (1898) — Lord Kitchener\'s forces with Maxim guns killed 10,000+ Mahdists, losing 47 British soldiers — demonstrates why success was temporary. Winston Churchill witnessed and wrote about Omdurman; the technology gap was obvious to contemporaries.'},
             {'q': 'Pan-Africanism as a response to colonialism demonstrates:',
              'correct': 'That colonialism generated transnational ideological responses — the shared experience of racial oppression across Africa and the African diaspora (Caribbean, Americas) created a political consciousness that transcended specific colonial territories and demanded recognition of African cultural value and political self-determination, providing an ideological foundation for 20th-century decolonization movements',
              'others': ['Pan-Africanism was an internal African movement with no diaspora dimension', 'Pan-Africanism accepted European racial hierarchy while seeking only economic improvement', 'Pan-African movements were created by European missionaries sympathetic to African rights'],
              'exp': 'Diaspora dimension of Pan-Africanism is AP\'s distinguishing feature: Pan-Africanism was fundamentally a diaspora-African dialogue — W.E.B. Du Bois (African American), Marcus Garvey (Jamaican), George Padmore (Trinidadian) were as central as continental African leaders. The shared experience of racial oppression across slavery\'s diaspora and colonial Africa created the African diaspora as a political community. The Pan-African Congresses (1919, 1921, 1923, 1927, 1945) were transnational gatherings that built the ideological framework for post-WWII African independence movements.'},
             {'q': 'Cultural resistance (preserving indigenous languages, religious practices, historical memory) was significant because:',
              'correct': 'It maintained the cultural resources — language, religious frameworks, historical consciousness — that 20th-century independence movements would use to construct post-independence national identities, demonstrating that cultural resistance that produced no immediate political results was still historically significant as the preservation of the ideological raw material for future liberation',
              'others': ['Cultural resistance had no practical significance — only armed resistance mattered historically', 'Colonial cultural suppression was completely successful — no significant indigenous cultural preservation occurred', 'Cultural resistance was only practiced by elite educated Africans and Asians, not by ordinary people'],
              'exp': 'Long-term significance of cultural resistance is AP\'s framework for evaluating resistance that seemed to "fail" in the short term: the oral traditions, religious practices, historical memories, and linguistic traditions that ordinary people maintained against colonial suppression became the foundation of post-independence national culture-building. Keepers of traditional Yoruba oral history, Swahili language teachers, African religious leaders — their "failures" (unable to prevent colonial rule) were the successes that made post-independence cultural reconstruction possible.'},
             {'q': 'Comparing the Sepoy Mutiny (1857) to the Boxer Rebellion (1899-1901) reveals:',
              'correct': 'Both were popular armed responses to colonial presence that drew on religious and cultural grievances but failed because military-technological advantages of colonial powers were decisive — both also paradoxically resulted in more thorough colonial control: the Mutiny led to direct Crown rule in India; the Boxer Protocol led to greater foreign military presence and economic control in China',
              'others': ['The Sepoy Mutiny succeeded where the Boxer Rebellion failed in achieving its objectives', 'Both revolts successfully expelled colonial powers and achieved independence', 'The two revolts had entirely different causes with no comparable features'],
              'exp': 'Parallel structures with parallel outcomes is AP\'s comparative framework: both involved colonized peoples with genuine cultural and political grievances; both drew on religious identity (Hindu and Muslim soldiers in India; spirit-boxing practices in China); both failed against modern military force; both produced paradoxically stronger colonial control as aftermath. This parallel structure across different geographic and cultural contexts demonstrates that the pattern was systemic — not the product of specific cultural or geographic features of India or China, but of the structural relationship between industrialized colonial military power and non-industrialized colonial populations.'},
             {'q': 'For AP, the significance of 19th-century resistance to imperialism is that:',
              'correct': 'Even failed resistance demonstrated the illegitimacy of colonial rule (colonialism required constant coercion, not just initial conquest) and built the organizational, ideological, and psychological foundations for 20th-century independence movements that ultimately succeeded, demonstrating that "failure" in historical assessment must account for long-term as well as immediate consequences',
              'others': ['Failed resistance has no historical significance — only successful resistance matters', 'Nineteenth-century resistance was so unsuccessful that it actually strengthened colonial rule permanently', '20th-century independence movements developed independently with no connection to 19th-century resistance traditions'],
              'exp': 'Long-term significance of "failed" resistance is AP\'s most sophisticated evaluation: the Sepoy Mutiny of 1857 "failed" but became the foundational historical reference for Indian nationalism; the Zulu resistance "failed" but Zulu historical memory became central to South African anti-apartheid identity; the Boxer Rebellion "failed" but demonstrated to Chinese nationalists that popular mobilization against foreign imperialism was possible. Historical assessment that counts only short-term outcomes misses the accumulation of organizational experience, historical memory, and ideological framework that made 20th-century independence possible.'}
         ],
         dl=['The Chinese uprising (1899-1901) against foreign presence that was suppressed by an 8-nation allied force was ___',
             'The Sudanese religious leader who established an independent state against British-Egyptian control (1885-1898) was ___',
             'The global movement asserting African cultural unity and political self-determination across Africa and the diaspora was ___'],
         do_=[['The Boxer Rebellion', 'The Taiping Rebellion', 'The Sepoy Mutiny', 'The Opium Revolt'],
              ['Muhammad Ahmad (the Mahdi)', 'Menelik II', 'Cetshwayo', 'Lobengula'],
              ['Pan-Africanism', 'Social Darwinism', 'Nationalism', 'Colonialism']],
         dc=['The Boxer Rebellion', 'Muhammad Ahmad (the Mahdi)', 'Pan-Africanism'],
         hints=['China 1899-1901 — foreign businesses missionaries — besieged legations — 8-nation allied force suppressed — Boxer Protocol', 'Sudan 1881-1898 — Islamic religious leader — captured Khartoum killed Gordon — independent Mahdist state — defeated at Omdurman', 'Africa and diaspora — shared racial oppression — cultural unity — political self-determination — W.E.B. Du Bois Garvey'],
         dexp='The Boxer Rebellion demonstrates the failure of popular armed resistance against modern military technology; Muhammad Ahmad demonstrates religious nationalist resistance that temporarily succeeded; and Pan-Africanism demonstrates the transnational ideological response to colonialism — together they cover the range of anti-colonial resistance that AP requires students to analyze.'
    ),
    dict(pnum=7, id_pre='whimp7',
         subtitle='AP Review and Exam Mastery',
         key='Imperialism content spans AP\'s c. 1750-1900 period. Key exam themes include analyzing causes of New Imperialism (economic, nationalist, ideological), comparing different colonial systems (British India, Belgian Congo, French North Africa), evaluating resistance movements, and connecting 19th-century imperialism to 20th-century decolonization.',
         body='''## 📖 AP Review: New Imperialism

> **Must-Know Vocabulary**

- **New Imperialism** — European colonial expansion 1870-1914; more intense, systematic, and complete than earlier colonialism
- **Social Darwinism** — Applying evolutionary theory to human societies; justified European dominance as natural
- **Mission civilisatrice** — French "civilizing mission" ideology; obligation to spread French civilization
- **Berlin Conference (1884-85)** — Established rules for European partition of Africa; no African representatives
- **Effective occupation** — Rule requiring actual administrative presence to claim territory; accelerated scramble
- **Indirect rule** — British governing through local leaders; cheaper but preserved some African political structures
- **Direct rule** — French administering colonies directly; French officials replaced indigenous governance
- **Drain of wealth** — Naoroji\'s theory that British colonialism systematically extracted Indian wealth to Britain
- **Boxer Rebellion** — Chinese popular uprising (1899-1901) against foreign presence; suppressed by 8-nation coalition
- **Battle of Adwa (1896)** — Ethiopian defeat of Italy; only African state to defeat European colonizer in scramble era
- **Pan-Africanism** — Movement for African cultural unity and political self-determination across Africa and diaspora

> **AP Comparison Quick Reference**

| Resistance | Location | Method | Outcome | Long-term Significance |
|-----------|---------|--------|---------|----------------------|
| Sepoy Mutiny (1857) | India | Armed revolt | Failed; Crown rule | Foundational nationalist memory |
| Battle of Adwa (1896) | Ethiopia | Armed + diplomatic | Won | Ethiopian independence; pan-African inspiration |
| Boxer Rebellion (1899-1901) | China | Armed revolt | Failed; Boxer Protocol | Demonstrated anti-foreign sentiment; inspired later nationalism |
| Indian National Congress (1885) | India | Political organization | Foundation for independence | Model for 20th-century anti-colonial politics |

> **Common AP Prompt Patterns**

- **Comparison:** Compare causes of New Imperialism (economic vs. ideological vs. nationalist)
- **Causation:** How did Western education cause anti-colonial nationalism?
- **Continuity/Change:** How did colonial resistance change between 1857 and 1900?
- **Sourcing:** Analyze a colonial document using point of view, purpose, and historical situation''',
         qs=[
             {'q': 'An AP LEQ asks: "Evaluate the extent to which economic factors caused New Imperialism." Which thesis earns full credit?',
              'correct': 'Economic factors (industrial capital seeking raw materials, markets, and investment opportunities) were the primary but not exclusive cause of New Imperialism — they created the underlying motive for colonial expansion, but nationalist competition (European powers racing to claim territories as status markers) and ideological justifications (Social Darwinism legitimizing conquest domestically) amplified economic motives into the aggressive colonial scramble that characterized the 1870-1914 period',
              'others': ['Economic factors were the only cause of New Imperialism — nationalist and ideological factors were entirely irrelevant', 'New Imperialism was caused entirely by ideology with no economic dimension', 'All three causes (economic, nationalist, ideological) were exactly equal with no hierarchy among them'],
              'exp': 'Sophisticated causation thesis for AP: acknowledges the primary cause (economic), specifies the mechanism (industrial capitalism needing outlets), identifies the amplifying factors (nationalism + ideology), explains the interaction, and makes an evaluative claim ("primary but not exclusive"). The AP LEQ rubric rewards thesis statements that go beyond listing causes to explain relationships among them. "Economic factors were important, but so were X and Y" is a weak thesis; "economic factors were primary AND nationalist competition amplified economic motives into a race dynamic" is a strong thesis because it explains the causal mechanism.'},
             {'q': 'A DBQ document from a Belgian colonial official reports that Congo rubber production targets are being met efficiently. Sophisticated sourcing would note:',
              'correct': 'A Belgian colonial official reports success in terms of his employer\'s (Belgian colonial administration\'s) primary metric (rubber production); he would report success honestly from his institutional perspective, but would define success purely economically (tons of rubber) and have no institutional reason to document the human costs (mutilations, deaths, forced labor) that efficient production required — revealing that colonial administrative sources systematically undercount human suffering',
              'others': ['Colonial officials always reported the complete truth including human costs', 'This document proves that Congo rubber production was achieved without significant human costs', 'Belgian officials in the Congo had no institutional incentives that would bias their reporting'],
              'exp': 'Institutional bias as sourcing is AP\'s sophisticated DBQ technique: the official\'s point of view (employee of colonial administration), purpose (administrative reporting, justifying his position\'s performance), and historical situation (Leopold II\'s personal colony under international scrutiny after 1904) all create predictable biases. Colonial administrative records consistently document economic success metrics and underreport human costs — not because officials were individually deceptive but because their institutional role defined "success" economically. Cross-referencing with missionary records or Belgian journalist accounts reveals what administrative records omit.'},
             {'q': 'AP asks you to compare resistance to imperialism in India and China. Which is the most sophisticated comparison?',
              'correct': 'Both experienced resistance to Western imperialism but through different mechanisms reflecting different colonial relationships — India under direct British administration produced elite legal-political nationalism (Indian National Congress using British constitutional arguments); China as a semi-colonized state facing multiple foreign powers produced popular cultural-religious nationalism (Boxer Rebellion using traditional spiritual practices) — demonstrating that the form of colonial control shaped the form of resistance',
              'others': ['India and China had identical resistance movements because both opposed Western imperialism', 'Indian resistance was entirely peaceful while Chinese resistance was entirely violent', 'China\'s resistance was more successful than India\'s because the Boxer Rebellion drove out more foreigners than the Sepoy Mutiny'],
              'exp': 'Form of control → form of resistance is AP\'s structural comparison: India under direct British rule had a coherent target (British administration) and access to British legal frameworks, producing legal-political nationalism. China\'s semi-colonial status (multiple foreign powers each with concessions, no single colonial administration) and lack of Western-educated nationalist elite produced the Boxer Rebellion\'s popular religious nationalism with its magical-protection beliefs. Different colonial situations produced structurally different resistance forms — this structural analysis is more sophisticated than simply listing similarities and differences.'},
             {'q': 'For AP, the Berlin Conference\'s (1884-85) most significant historical feature was:',
              'correct': 'It formalized the complete absence of African political agency in decisions about Africa\'s political future — European powers negotiated Africa\'s partition using principles of international law that did not recognize African sovereignty, demonstrating that 19th-century international law was a racial hierarchy that excluded non-European peoples from the legal protections (sovereignty, territorial integrity) that applied only to "civilized" (European) states',
              'others': ['The Berlin Conference protected African sovereignty by establishing rules Europeans had to follow', 'African leaders participated in the Berlin Conference and negotiated territorial arrangements', 'The Conference\'s most significant feature was its economic agreements about tariff rates in Africa'],
              'exp': 'International law\'s racial exclusion is Berlin\'s AP lesson: the conference operated under public international law — a system that had evolved to regulate relations among European states and recognized the sovereignty of "civilized" states. Non-European polities (including African kingdoms with functioning governance systems, codified law, diplomatic traditions) were not "civilized" states under this legal framework and therefore had no recognized sovereignty that European powers were obligated to respect. The conference was simultaneously a demonstration of European legal sophistication and the legal exclusion of Africans from the rights that legal sophistication was supposed to protect.'},
             {'q': 'For AP, connecting 19th-century imperialism to 20th-century decolonization requires recognizing:',
              'correct': 'Colonialism simultaneously suppressed and created the conditions for its own end — Western education produced nationalist leaders; colonial economic integration produced organized labor; colonial political institutions provided organizational templates; the very values (liberty, equality, self-determination) proclaimed as the justification for colonial governance became the ideological weapons used against it',
              'others': ['Decolonization developed entirely independently of colonialism with no connections', 'Colonialism purely suppressed all conditions that might produce independence movements', 'The connection between imperialism and decolonization was entirely accidental with no structural relationship'],
              'exp': 'Colonialism creating its own opposition is AP\'s synthesis connecting 19th and 20th centuries: every mechanism of colonial control generated anti-colonial resistance tools. Western schools → nationalist leaders; colonial legal systems → legal rights claims; colonial languages → pan-national communication; Enlightenment ideology → self-determination demands; colonial economic organization → labor organizing. The structural paradox is that more thorough colonial control (more education, more legal integration, more economic organization) produced more effective anti-colonial resistance. This is not coincidence but structural necessity — the tools of control are also potential tools of resistance.'},
             {'q': 'An AP SAQ asks: "Briefly explain ONE way the Industrial Revolution contributed to New Imperialism." Which earns full credit?',
              'correct': 'The Industrial Revolution created European demand for raw materials at industrial scale — British cotton mills needed Egyptian cotton; Belgian rubber factories needed Congolese rubber; steel industries needed iron and coal from overseas — creating economic incentives for colonial control of raw material sources that commercial trade relationships could not reliably satisfy, driving European powers to seek political control of territories that could guarantee stable raw material supply',
              'others': ['The Industrial Revolution contributed to New Imperialism by creating democratic pressure for colonial conquest', 'Industrialization reduced the need for colonies by making European nations self-sufficient', 'The Industrial Revolution\'s contribution to New Imperialism was purely ideological with no economic mechanism'],
              'exp': 'Full SAQ credit: specific claim (Industrial Revolution created demand for raw materials at scale) + specific evidence (cotton mills, rubber factories, steel industries + specific colonial sources) + reasoning (political control was needed to guarantee stable supply that commercial trade could not reliably provide). The last element (why political control rather than trade) is the analytical step that earns full credit — explaining the mechanism connecting industrial need to colonial acquisition, not just asserting that industry needed raw materials.'},
             {'q': 'For AP, New Imperialism\'s most significant contribution to world history was:',
              'correct': 'The global integration it produced — through colonial infrastructure (railroads, telegraphs, shipping routes) and economic networks connecting African and Asian raw materials to European industries and markets, it created the first genuinely global economy while simultaneously creating the political and economic inequalities between industrialized and non-industrialized regions that continued to shape global relations through the 20th century',
              'others': ['New Imperialism\'s most significant contribution was the political development it brought to Africa and Asia', 'The most significant consequence was the complete Westernization of all colonial cultures', 'New Imperialism had no lasting global economic consequences — its effects were purely political'],
              'exp': 'Global economic integration with persistent inequality is AP\'s synthesis: New Imperialism simultaneously created global economic connection (no earlier era had integrated economies at this scale) and global economic hierarchy (industrialized center extracting from non-industrialized periphery). The railroad and telegraph networks, the commodity chains connecting Congolese rubber to Belgian factories, Sudanese cotton to Manchester mills, Indian opium to Chinese consumers — these created a genuinely global economy. But the terms of integration (raw material exporters vs. manufactured goods importers) established an economic structure that persisted long after formal colonialism ended.'}
         ],
         dl=['The principle that European powers had to actually administer claimed African territory (not just plant a flag) was ___',
             'The British administrative system of governing colonies through existing local leaders rather than direct European administration was ___',
             'Dadabhai Naoroji\'s theory that British colonialism systematically transferred Indian wealth to Britain was ___'],
         do_=[['Effective occupation', 'Direct rule', 'Realpolitik', 'Social Darwinism'],
              ['Indirect rule', 'Direct rule', 'Trusteeship', 'Mission civilisatrice'],
              ['Drain of wealth theory', 'Comparative advantage', 'Free trade theory', 'Social Darwinism']],
         dc=['Effective occupation', 'Indirect rule', 'Drain of wealth theory'],
         hints=['Berlin Conference — must actually administer not just claim — accelerated scramble for territory', 'British administrative philosophy — govern through local chiefs — cheaper — preserved some African structures', 'Naoroji 1901 — calculated billions extracted — Home Charges — revenues transferred — economic underdevelopment'],
         dexp='Effective occupation is the legal mechanism that accelerated Africa\'s colonization; indirect rule is the British administrative philosophy that distinguished British from French colonialism; and the drain of wealth theory is the economic framework that explained colonial extraction — together they cover the political, administrative, and economic vocabulary AP requires for analyzing New Imperialism.'
    ),
]

for p in parts:
    content = make(p['pnum'], p['id_pre'], p['subtitle'], p['key'],
                   p['body'], p['qs'], p['dl'], p['do_'], p['dc'],
                   p['hints'], p['dexp'])
    w(f"{SLUG}-part{p['pnum']}.ts", content)

print("All imperialism parts done!")
