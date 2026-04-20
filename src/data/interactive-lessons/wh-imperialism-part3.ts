export const whImperialismPart3Data = {
  topicSlug: 'wh-imperialism',
  sections: [
    {
      id: 'whimp3-intro',
      type: 'text' as const,
      content: `
# 🌍 New Imperialism

**Part 3 of 7 — The Scramble for Africa and the Berlin Conference**

---

> 🔑 **Key Concept:** The Berlin Conference (1884-85) established the rules by which European powers divided Africa — without consulting any Africans. Within 30 years, all of Africa except Ethiopia and Liberia was under European colonial control. AP questions analyze the mechanisms of colonial rule, the role of technology in enabling conquest, and the significance of the absence of African voices.
      `
    },
    {
      id: 'whimp3-quiz1',
      type: 'multiple-choice' as const,
      content: `**Concept Check** 🎯`,
      exercise: {
        questions: [
          {
            question: 'The "effective occupation" principle established at the Berlin Conference (1884-85) was significant for African colonization because:',
            options: [
              'It accelerated the pace of colonial conquest by requiring that powers actually administer claimed territories — a European flag planted on an African beach was insufficient; actual administrative presence was required, driving European powers to rapidly send expeditions, establish forts, and create administrative structures throughout Africa to secure their territorial claims',
              'Effective occupation slowed colonization by requiring cooperation with African leaders',
              'The principle was purely diplomatic with no practical impact on African colonization',
              'Effective occupation meant that African self-governance was recognized if effectively established',
            ],
            correctAnswer: 0,
            explanation: 'The effective occupation rule accelerated rather than constrained colonization: it prevented European powers from claiming enormous territories by simply planting a flag, but requiring actual presence meant all powers had to race to actually occupy claimed territories before competitors did. The paradoxical result was that the rule meant to manage competition intensified the scramble — you had to quickly send expeditions and establish actual presence or lose the territory to a competitor who did.'
          },
          {
            question: 'Quinine\'s role in enabling European African colonization demonstrates:',
            options: [
              'Technological and pharmaceutical advances gave European colonizers specific advantages that partially explain the timing and success of 19th-century colonization — malaria had been the most effective barrier to European penetration of the African interior; its defeat by quinine gave Europeans access to territories previously inaccessible, combining with the Maxim gun and steamboats to create decisive military-technological advantages',
              'Quinine was the only significant factor enabling African colonization — other technologies were irrelevant',
              'Africa had no effective barriers to European penetration before the development of quinine',
              'The Maxim gun was more important than quinine in enabling African colonization',
            ],
            correctAnswer: 0,
            explanation: 'Technology combinations enabling colonization is AP\'s framework: no single technology explains everything. Quinine defeated malaria (allowing European presence in the interior); steamboats allowed river navigation (allowing economic penetration); Maxim gun (1884 — continuous fire machine gun) gave Europeans decisive military superiority over African armies with spears or early firearms. The Maxim gun was so decisive that Hilaire Belloc wrote "Whatever happens, we have got / The Maxim gun, and they have not" — a contemporaneous recognition of the technology-power relationship.'
          }
        ]
      }
    },
    {
      id: 'whimp3-content',
      type: 'text' as const,
      content: `
## 📖 The Scramble for Africa

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
- Result: virtual completion of Africa's colonization by 1914

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
- Destruction of African artisan industries: cheap manufactured goods undercut local production
      `
    },
    {
      id: 'whimp3-input',
      type: 'multiple-choice' as const,
      content: `**Applied Recall: 3-Question Sprint** 🎯`,
      exercise: {
        questions: [
          {
            question: 'The absence of African representatives at the Berlin Conference (1884-85) demonstrates:',
            options: [
              'That the colonized had no standing in the international legal system that was partitioning their continent — African political sovereignty was unrecognized by European international law; territories could be claimed, borders drawn, and peoples allocated to foreign governance without any African participation, demonstrating the racial hierarchy embedded in 19th-century international legal order',
              'African leaders were invited to Berlin but chose not to participate',
              'The absence of Africans was accidental — the conference organizers attempted to include them',
              'International law of the 19th century recognized African sovereignty but African leaders declined to assert it',
            ],
            correctAnswer: 0,
            explanation: 'The absolute exclusion of Africans from Berlin is AP\'s evidence of 19th-century international law\'s racial structure: the conference was specifically about Africa\'s partition, yet no African ruler, diplomat, or representative participated. The legal and diplomatic framework that governed European relations (Congress of Vienna, Concert of Europe, international law) simply did not recognize non-European polities as equal sovereign subjects. African kingdoms, empires, and states existed and had functioning governance, but European international law did not acknowledge their sovereignty as equivalent to European states\' sovereignty.'
          },
          {
            question: 'Comparing British "indirect rule" to French "direct rule" in colonial Africa reveals:',
            options: [
              'Different colonial administrative philosophies produced different long-term effects — British indirect rule (governing through African chiefs) preserved some African political structures while instrumentalizing traditional authority for colonial purposes; French direct rule (replacing African administration with French officials) destroyed traditional governance structures more thoroughly but created African elites who could use French citizenship claims against French colonial rule',
              'Both direct and indirect rule had identical outcomes for African peoples',
              'British indirect rule was always less harmful than French direct rule',
              'Direct rule was used to respect African traditions while indirect rule was more exploitative',
            ],
            correctAnswer: 0,
            explanation: 'Comparative colonial administration is AP\'s analytical framework for understanding different colonial systems\' legacies: indirect rule preserved traditional African chiefs as useful intermediaries but corrupted them (making them agents of colonial rather than community interests); direct rule produced francophone African intellectuals who used French revolutionary ideals against colonial France (similar to how Indian nationalists used British political concepts against British India). Different methods; different tools for subsequent resistance.'
          },
          {
            question: 'King Leopold II\'s personal ownership of the Congo Free State (1885-1908) represents:',
            options: [
              'The extreme end of the colonial exploitation spectrum — treating an entire territory (75 times the size of Belgium) as a private rubber extraction enterprise enforced through systematic terror, demonstrating that the "civilizing mission" rhetoric of New Imperialism was disconnected from actual colonial practice: Leopold used missionary and humanitarian rhetoric to acquire the Congo while his Force Publique murdered and mutilated millions',
              'The Congo Free State was a model of the humanitarian civilizing mission in action',
              'Leopold II\'s Congo was typical of European colonial administration with no unique features',
              'The brutality of the Congo was exaggerated by journalists with no basis in actual events',
            ],
            correctAnswer: 0,
            explanation: 'The Congo Free State is AP\'s most extreme evidence of the gap between colonial ideology and colonial practice: Leopold\'s personal colony killed an estimated 10 million Congolese (through murder, starvation, and disease) while extracting rubber that funded Belgian development. The rubber quota system (meet your quota or have your hand cut off; bring baskets of rubber or soldiers bring baskets of severed hands to prove they fired bullets justifiably) was documented by missionaries and journalists, triggering one of the first international human rights campaigns (1904-1908) that eventually forced Belgium to take over the colony from Leopold.'
          }
        ]
      }
    },
    {
      id: 'whimp3-dropdown',
      type: 'dropdown-select' as const,
      content: `**Match the Idea: Evidence to Claim**`,
      exercise: {
        dropdowns: [
          {
            label: 'The 1884-85 European conference that regulated the colonization of Africa was ___',
            options: [
            'The Berlin Conference',
            'The Paris Conference',
            'The Vienna Conference',
            'The London Conference',
            ]
          },
          {
            label: 'The British machine gun that gave European armies decisive military advantage in African colonial conquest was ___',
            options: [
            'The Maxim gun',
            'The Winchester rifle',
            'The Gatling gun',
            'The cannon',
            ]
          },
          {
            label: 'The Belgian king who personally owned the Congo Free State as a rubber extraction empire was ___',
            options: [
            'King Leopold II',
            'King Albert I',
            'Kaiser Wilhelm II',
            'King George V',
            ]
          }
        ],
        correctAnswers: [
          'The Berlin Conference',
          'The Maxim gun',
          'King Leopold II',
        ],
        hint1: 'Berlin 1884-85 — Bismarck — effective occupation rule — no Africans present — divided continent',
        hint2: 'Machine gun — 1884 — continuous fire — overwhelming military advantage over African armies with spears',
        hint3: 'Belgian king — personal colony — Congo — 75 times Belgium size — rubber quotas — systematic terror',
        explanation: 'The Berlin Conference is the diplomatic mechanism of colonization; the Maxim gun is the technological mechanism; and King Leopold II represents the extreme consequence — together they demonstrate the political, technological, and economic dimensions of how Europe rapidly colonized Africa.'
      }
    },
    {
      id: 'whimp3-applied',
      type: 'multiple-choice' as const,
      content: `**AP-Style Application** 🎯`,
      exercise: {
        questions: [
          {
            question: 'The artificial borders drawn at the Berlin Conference created long-term consequences because:',
            options: [
              'European borders divided existing African ethnic, linguistic, and political communities across different colonies and combined historically hostile groups within the same colonial (later national) boundaries — creating the ethnic conflicts and governance challenges that persist in post-independence African states, demonstrating that cartographic decisions made without African input had generational consequences',
              'African borders drawn at Berlin coincidentally aligned with existing African political and ethnic boundaries',
              'The borders created at Berlin have had no long-term impact on African political development',
              'African states successfully modified all colonial borders after independence',
            ],
            correctAnswer: 0,
            explanation: 'The cartographic violence of Berlin is AP\'s mechanism for connecting 19th-century colonialism to 20th-century African political challenges: the straight-line borders visible on African maps were drawn by European diplomats with limited knowledge of African geography, ethnicity, or political organization. The Somali were divided among British, Italian, and French Somalia; the Yoruba were split between British Nigeria and French Dahomey; the Maasai were split between British Kenya and German Tanganyika. Post-independence African states retained colonial borders (mostly) — inheriting the governance challenges those borders created.'
          },
          {
            question: 'For AP, the Scramble for Africa\'s most significant historical consequence was:',
            options: [
              'The complete reorganization of African political, economic, and social life to serve European interests — replacing diverse African governance systems with colonial administration, redirecting African economies from subsistence and regional trade to export commodity production, and disrupting African cultures through missionary education and forced cultural change, creating the conditions for both 20th-century nationalist movements and post-independence political instability',
              'The scramble\'s most significant consequence was the economic development it produced for African peoples',
              'The primary consequence was the establishment of permanent European settlement throughout Africa',
              'The scramble for Africa had minimal long-term consequences for African political and economic development',
            ],
            correctAnswer: 0,
            explanation: 'Comprehensive transformation is AP\'s synthesis: the scramble was not just political (changing who governed) but economic (redirecting production to European needs), social (disrupting existing communities), and cultural (suppressing African languages and religions through missionary education). The 20th-century consequences — nationalist independence movements, post-independence political instability, economic dependency, ethnic conflicts — all have roots in specific colonial choices made during the scramble. Understanding current African challenges requires understanding colonial foundations.'
          }
        ]
      }
    }
  ]
}
