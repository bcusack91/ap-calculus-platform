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
              'It sped up conquest by requiring powers to actually administer the land they claimed, so rivals raced to send expeditions and build posts before others could',
              'It slowed conquest by requiring Europeans to obtain signed treaties from African rulers before any claim could be recognized by the other powers',
              'It recognized any African state that showed effective self-government, which protected kingdoms such as Morocco and the Sokoto Caliphate from later conquest by Europeans',
              'It had little practical effect, since it was a diplomatic formula that European governments set aside as soon as the conference adjourned in 1885',
            ],
            correctAnswer: 0,
            explanation: 'The effective occupation rule accelerated rather than constrained colonization: a power could no longer hold territory by simply planting a flag, so all powers had to race to occupy claimed territories before competitors did. The paradoxical result was that a rule meant to manage competition intensified the scramble. Morocco and the Sokoto Caliphate were both conquered within about twenty years of the conference.'
          },
          {
            question: 'Quinine\'s role in enabling European African colonization demonstrates:',
            options: [
              'Medical and military technologies together explain the timing of conquest, since quinine cut malaria deaths and opened the interior to Maxim guns and steamboats',
              'Quinine alone made conquest possible, since Europeans already had every military advantage they needed and malaria was the only obstacle keeping them out of the interior',
              'Africa had no serious barriers to Europeans before the 1800s, so quinine mattered mainly to settlers\' comfort rather than to the timing or success of conquest itself',
              'Disease was a minor factor compared with diplomacy, since most African territory was acquired through treaties signed before any European troops entered the interior',
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
| Liberia | — (independent republic since 1847; founded by the American Colonization Society) |
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
              'African sovereignty had no standing in European international law, so territories could be claimed and whole peoples assigned to foreign rule without any African participation',
              'African rulers were invited to Berlin but refused to attend, believing their own treaties with European traders already protected their lands from conquest',
              'The organizers intended to include African delegates, but the conference\'s timing during the rainy season made travel from the interior impossible',
              'European law recognized African kingdoms as sovereign equals, but African rulers chose not to assert those rights in a European diplomatic setting',
            ],
            correctAnswer: 0,
            explanation: 'The absolute exclusion of Africans from Berlin is AP\'s evidence of 19th-century international law\'s racial structure: the conference was specifically about Africa\'s partition, yet no African ruler, diplomat, or representative participated. The legal and diplomatic framework that governed European relations (Congress of Vienna, Concert of Europe, international law) simply did not recognize non-European polities as equal sovereign subjects. African kingdoms, empires, and states existed and had functioning governance, but European international law did not acknowledge their sovereignty as equivalent to European states\' sovereignty.'
          },
          {
            question: 'Comparing British "indirect rule" to French "direct rule" in colonial Africa reveals:',
            options: [
              'Different methods left different legacies, as British indirect rule turned chiefs into agents of British power while French direct rule displaced them and produced French-educated elites',
              'The two methods had nearly identical effects, since British and French officials both governed through chiefs and differed only in the language they used in courts and village mission schools',
              'British indirect rule was always the gentler system, since keeping chiefs in place meant African communities faced less taxation and forced labor than under French rule',
              'French direct rule preserved African traditions more fully, since French officials ruled alongside chiefs while British officials replaced them with appointed clerks',
            ],
            correctAnswer: 0,
            explanation: 'Comparative colonial administration is AP\'s analytical framework for understanding different colonial systems\' legacies: indirect rule preserved traditional African chiefs as useful intermediaries but corrupted them (making them agents of colonial rather than community interests); direct rule produced francophone African intellectuals who used French revolutionary ideals against colonial France (similar to how Indian nationalists used British political concepts against British India). Different methods; different tools for subsequent resistance.'
          },
          {
            question: 'King Leopold II\'s personal ownership of the Congo Free State (1885-1908) represents:',
            options: [
              'The extreme end of colonial exploitation, where a private rubber enterprise ruled by terror exposed the gap between humanitarian rhetoric and colonial practice',
              'A model of the civilizing mission in practice, since Leopold\'s investment in mission schools and railroads raised Congolese living standards above those of neighboring colonies',
              'Typical European colonial administration, since the Congo was governed by the Belgian parliament under the same laws and inspections it applied to other colonies',
              'An exaggerated scandal invented by rival British traders, since no missionary, consul, or journalist ever documented abuses in the Congo\'s rubber-producing districts',
            ],
            correctAnswer: 0,
            explanation: 'The Congo Free State is AP\'s most extreme evidence of the gap between colonial ideology and colonial practice. Leopold acquired the Congo with humanitarian and anti-slavery rhetoric, yet ran this territory roughly 75 times the size of Belgium as a private rubber enterprise; its Force Publique enforced quotas with murder and mutilation. Violence, famine, and disease caused a population collapse often estimated at around 10 million. The rubber quota system (soldiers had to bring back severed hands to prove they had used their bullets on people) was documented by missionaries and by the British consul Roger Casement, triggering one of the first international human rights campaigns (1904-1908), which forced the Belgian state to take the colony from Leopold.'
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
            'The Dreyse needle gun',
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
              'Colonial borders split some peoples across several colonies and joined rival groups in one, leaving independent states with boundaries that fueled ethnic tension',
              'The borders mostly followed existing African kingdoms and ethnic lines, since European negotiators relied heavily on African guides and earlier treaties when drawing them on the map',
              'The borders were redrawn soon after independence, as the Organization of African Unity urged new states to negotiate boundaries that matched their ethnic communities',
              'The borders mattered little afterward, since most African states merged into larger regional federations that made the colonial boundary lines irrelevant',
            ],
            correctAnswer: 0,
            explanation: 'The cartographic violence of Berlin is AP\'s mechanism for connecting 19th-century colonialism to 20th-century African political challenges: the straight-line borders visible on African maps were drawn by European diplomats with limited knowledge of African geography, ethnicity, or political organization. The Somali were divided among British, Italian, and French Somaliland; the Yoruba were split between British Nigeria and French Dahomey; the Maasai were split between British Kenya and German East Africa. In 1964 the Organization of African Unity resolved to keep colonial borders, so post-independence states inherited the governance challenges those borders created.'
          },
          {
            question: 'For AP, the Scramble for Africa\'s most significant historical consequence was:',
            options: [
              'A reorganization of African life around European interests, as colonial rule replaced local governments and redirected economies toward cash crops in ways that shaped later nationalism',
              'Broad economic development for Africans, as colonial railroads and mines raised incomes across the continent and left most new states with diversified industrial economies',
              'Permanent European settlement across most of Africa, as millions of colonists moved to tropical colonies and became the majority population in many territories',
              'Little lasting change in African political life, as most precolonial kingdoms continued to govern themselves and simply resumed full control at independence',
            ],
            correctAnswer: 0,
            explanation: 'Comprehensive transformation is AP\'s synthesis: the scramble was not just political (changing who governed) but economic (redirecting production to European needs), social (disrupting existing communities), and cultural (suppressing African languages and religions through missionary education). The 20th-century consequences — nationalist independence movements, post-independence political instability, economic dependency, ethnic conflicts — all have roots in specific colonial choices made during the scramble. Understanding current African challenges requires understanding colonial foundations.'
          }
        ]
      }
    }
  ]
}
