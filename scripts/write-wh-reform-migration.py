#!/usr/bin/env python3
"""Write wh-reform-migration parts 2-7."""
import os

base = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))),
                    'src', 'data', 'interactive-lessons')

def w(filename, content):
    with open(os.path.join(base, filename), 'w') as f:
        f.write(content)
    print(f"✓ {filename}")

SLUG = 'wh-reform-migration'
EXPORT = 'whReformMigrationPart'

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
    dd_str = ',\n'.join([dd_block(dl[i], do_[i]) for i in range(3)])
    corr = '\n'.join([f"          '{c}'," for c in dc])
    return f"""export const {EXPORT}{pnum}Data = {{
  topicSlug: '{SLUG}',
  sections: [
    {{
      id: '{id_pre}-intro',
      type: 'text' as const,
      content: `
# ✊ Reform and Migration

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
    dict(pnum=2, id_pre='whrm2',
         subtitle='European Emigration to the Americas and Australia',
         key='Between 1850 and 1914, approximately 55 million Europeans emigrated to the Americas, Australia, and South Africa — the largest voluntary migration in world history to that point. AP questions analyze the push-pull factors driving European emigration, the role of transportation technology (steamships), and the demographic, cultural, and economic consequences for both sending and receiving regions.',
         body='''## 📖 European Emigration Patterns

> **Scale and Timeline**

| Period | Approximate Emigrants | Main Source Regions |
|-------|----------------------|-------------------|
| **1815-1850** | ~5 million | British Isles, German states |
| **1850-1880** | ~10 million | British Isles, Germany, Scandinavia |
| **1880-1900** | ~20 million | Southern Europe (Italy, Spain), Eastern Europe |
| **1900-1914** | ~20 million | Southern and Eastern Europe; Russia (Jews fleeing pogroms) |

> **Push Factors by Region**

- **Ireland:** Potato Famine (1845-52); continued rural poverty; British land ownership
- **Germany:** Agricultural consolidation (enclosure); failed 1848 revolution (political refugees)
- **Italy:** Rural poverty in the south (mezzogiorno); limited industrialization outside north
- **Russia/Poland/Romania:** Anti-Jewish pogroms; religious persecution; military conscription
- **Scandinavia:** Population growth exceeding agricultural land; cold climate limiting expansion

> **Pull Factors: Why the Americas and Australia?**

| Destination | Pull Factors |
|------------|-------------|
| **USA** | Free or cheap land (Homestead Act 1862); industrial jobs; political freedom; chain migration networks |
| **Argentina** | Fertile Pampas; land grants; government immigration campaigns; Argentine government recruited Italians |
| **Brazil** | Coffee plantation labor demand after slavery abolished (1888); government immigration subsidies |
| **Australia** | Gold rushes (1850s); sheep farming; land available; British Empire membership |
| **Canada** | Prairie farming; government land grants; British colonial connection |

> **Transportation Technology: The Steamship Revolution**

- Before steamships: Atlantic crossing took 6-8 weeks in dangerous sailing ships
- After 1870s: Steamship crossing 10-14 days; much cheaper; safer; predictable schedules
- **Third-class (steerage) travel:** Miserable conditions but affordable for poor emigrants
- **Result:** Migration costs fell dramatically; migration no longer required significant capital
- **Steamship companies actively recruited emigrants** in European villages — migration agents toured rural areas

> **Cultural and Economic Consequences**

- **Remittances:** Emigrants sent money home to families — important to Italian, Polish, Greek economies
- **"Birds of passage":** Some emigrants (especially Italian men) came seasonally — worked in USA, returned home
- **Diaspora influence:** Irish Americans funded Fenian movement; German Americans shaped USA politics
- **Receiving countries:** Demographic growth; cheap labor for industry and agriculture; cultural diversity; nativist backlash''',
         qs=[
             {'q': 'The Homestead Act (USA, 1862) functioned as a pull factor for European emigrants by:',
              'correct': 'Offering 160 acres of government land free to any adult who lived on and improved the land for 5 years — this promise of land ownership (impossible for landless peasants in Europe without capital) was a powerful pull for Irish, German, and Scandinavian emigrants who could not afford European land prices, transforming migration from economic desperation to an opportunity for property ownership',
              'others': ['The Homestead Act paid European emigrants a wage to move to the United States', 'The Act restricted land ownership to emigrants from specific European countries', 'The Homestead Act had no connection to European emigration because it applied only to existing citizens'],
              'exp': 'Land ownership as pull factor is AP\'s economic migration analysis: European peasants faced two land barriers — land was scarce in densely populated Europe; and land was too expensive for those without capital. The Homestead Act offered a path to land ownership through labor (5 years of improvement) rather than capital — perfectly suited to landless emigrants who had labor to invest. Norwegian farmers on the Minnesota prairie, German settlers in Wisconsin, Irish farmers in Iowa all responded to this pull. The Act was not purely humanitarian — it served to populate western territories, displace Native Americans, and integrate the frontier into the national economy.'},
             {'q': 'The shift from "old immigration" (pre-1880, northern and western Europe) to "new immigration" (post-1880, southern and eastern Europe) to the USA demonstrates:',
              'correct': 'Push factors shifted geographically as industrialization spread unevenly — Britain and Germany industrialized early (1760s-1850s), absorbing rural workers domestically and reducing emigration pressure; southern Italy, Poland, and Russia industrialized later or not at all, maintaining the rural poverty and population pressure that drove emigration from new sources, with the USA remaining a consistent pull destination across both periods',
              'others': ['The shift occurred because US laws specifically encouraged southern European immigration after 1880', 'Pull factors in the USA changed after 1880 — new industries wanted different kinds of workers', 'The shift reflected cultural preferences of Americans for different immigrant groups over time'],
              'exp': 'Uneven industrialization producing shifting emigration geography is AP\'s analytical framework: Britain\'s industrial revolution absorbed agricultural labor into urban industry — by 1880, Britain was heavily urbanized and agricultural emigration pressure had declined. Germany similarly industrialized and absorbed rural workers. But in southern Italy, the agricultural south (mezzogiorno) remained underdeveloped even as northern Italy industrialized — so Italian emigration was primarily southern Italian. Poland and Russia\'s Jewish populations faced pogroms (1880s-1900s) — persecution rather than purely economic push. The "new immigration" reflects industrialization\'s uneven geographic spread.'},
             {'q': 'The role of steamship companies in actively recruiting European emigrants demonstrates:',
              'correct': 'Migration was not simply a spontaneous individual response to push and pull factors but was actively facilitated by commercial interests — steamship companies deployed agents in European villages to advertise American opportunities, sold pre-paid tickets, and created institutional infrastructure that reduced the information costs and logistical complexity of migration, demonstrating that commercial actors can transform migration from exceptional to routine',
              'others': ['Migration was entirely spontaneous with no commercial facilitation', 'Steamship companies tried to discourage emigration to maximize freight revenue', 'Only governments organized emigration — private companies had no role'],
              'exp': 'Commercial facilitation of migration is AP\'s institutional analysis: White Star Line, Hamburg-Amerika Line, and other shipping companies were not passive carriers — they actively created demand for migration. Their agents toured Polish villages with photographs of American prosperity; they negotiated deals with railroad companies to deliver migrants from ships to midwestern cities; they established payment systems that allowed emigrants already in America to purchase tickets for relatives still in Europe. This commercialization of migration is why emigration from specific Italian villages consistently went to specific American cities — shipping company regional monopolies created migration corridors.'},
             {'q': 'Remittances (money sent by emigrants back to home countries) demonstrate which consequence of migration?',
              'correct': 'Migration created persistent economic connections between sending and receiving regions — Italian emigrants in New York or Argentina sent money home to Italian families, who used it to pay debts, purchase land, or fund subsequent family migration; this financial flow integrated rural Italian, Polish, and Greek economies into global capital flows created by emigration, demonstrating that migration\'s economic effects extended beyond the migrants themselves to their communities of origin',
              'others': ['Remittances were insignificant — emigrants rarely sent money home after migration', 'Remittances only benefited wealthy sending-country families, not poor peasant families', 'Remittances caused economic harm in sending countries by removing money from circulation'],
              'exp': 'Remittances as economic integration is AP\'s migration consequence analysis: Italy received substantial remittances throughout the emigration era — by 1913, Italy was receiving over 500 million lire annually in emigrant remittances, an amount exceeding Italy\'s entire trade surplus. For individual families, remittances could pay off debt to landowners, purchase small plots of land, or fund siblings\' emigration. Remittances are evidence that migration was not simply individual departure but a household economic strategy — families sent their strongest members abroad as an investment in the household\'s overall income stream, expecting regular financial returns.'},
             {'q': '"Birds of passage" — European emigrants (especially Italian men) who came to the Americas seasonally and returned home — challenge which assumption about migration?',
              'correct': 'The assumption that emigration was a permanent, one-way movement from sending to receiving country — seasonal migration demonstrates that some emigrants remained economically integrated into home communities while working abroad, maintaining property and family relationships in Italy while earning American wages, blurring the distinction between "emigrant" (permanent departure) and "migrant worker" (temporary labor abroad)',
              'others': ['Birds of passage confirm that all emigration was permanent and one-directional', 'Seasonal migration was only possible for wealthy emigrants with multiple homes', 'Return migration was extremely rare — once emigrants left, they never returned'],
              'exp': 'Migration as spectrum not binary is AP\'s analytical refinement: the dominant image of emigration (Ellis Island arrival; permanent settlement; American identity) fits many emigrants but not all. Italian agricultural workers crossed the Atlantic in autumn (when European agricultural work ended), worked in American construction or harvest (autumn-spring), and returned to Italy for the summer. This required cheap, regular steamship service (which developed after 1880). The "birds of passage" phenomenon reveals that international migration existed on a spectrum from permanent relocation to seasonal labor circulation, with implications for national identity, cultural preservation, and economic integration.'},
             {'q': 'Nativist reactions (anti-immigrant political movements) to European mass immigration in the USA demonstrated:',
              'correct': 'Economic competition and cultural anxiety about rapid demographic change could produce discriminatory political responses even against white European immigrants — the Know-Nothing movement (1850s, anti-Catholic Irish), the Immigration Restriction League (1890s, anti-"new immigrant"), and ultimately the Immigration Acts of 1921 and 1924 (establishing national-origin quotas) show that racialized classification of immigrants (as Anglo-Saxon vs. "inferior" Mediterranean and Slavic "races") applied Social Darwinist frameworks to migration policy',
              'others': ['Nativist movements welcomed all European immigrants without distinction', 'Anti-immigrant politics only targeted non-European immigrants — European immigrants were universally welcomed', 'Nativism had no practical policy consequences — the USA maintained completely open immigration throughout'],
              'exp': 'Racialized nativism even among European immigrants is AP\'s analytical extension of Social Darwinism: the 1924 Immigration Act\'s national-origin quotas were explicitly designed by eugenicists (Madison Grant, Henry Laughlin) to preserve Anglo-Saxon racial dominance by limiting "inferior" southern and eastern European immigration. Quota allocations were based on the 1890 census (before "new immigration" peaked) to mathematically favor British, German, and Scandinavian immigrants over Italian, Polish, and Jewish immigrants. The Act demonstrates that Social Darwinist racial hierarchies applied not just to non-Europeans but to intra-European racial distinctions as well.'},
             {'q': 'For AP, the 1850-1914 European mass emigration era\'s most significant consequence was:',
              'correct': 'The creation of a global network of European diaspora communities that transformed demographic, cultural, and economic landscapes across multiple continents simultaneously — the Americas received demographic growth, cheap labor, and diverse cultural traditions that shaped their development; European economies were relieved of population pressure and received remittances; and the resulting diaspora communities created persistent transnational connections that continued to influence politics and economics for generations',
              'others': ['European emigration had only demographic consequences with no cultural or economic dimensions', 'The emigration era had no lasting consequences — all emigrants eventually returned to Europe', 'Migration\'s consequences were confined to receiving countries with no impact on sending regions'],
              'exp': 'Multi-continental transformation is AP\'s synthesis: European mass emigration simultaneously shaped multiple world regions. Argentina\'s population became overwhelmingly European-descended — transforming a largely indigenous society within two generations. The USA\'s industrial workforce was built on immigrant labor. Brazil\'s coffee economy replaced slave labor with Italian and Japanese immigrants. Italy\'s rural overpopulation was relieved while Italian culture spread globally. The European diaspora created a network of cultural, economic, and political connections that define the modern Atlantic world — one of the most significant demographic events of the 19th century.'}
         ],
         dl=['The 1862 U.S. law offering 160 acres free to settlers who improved the land for 5 years was ___',
             'Italian (and other) emigrants who came seasonally, worked abroad, then returned home were called ___',
             'The U.S. law establishing national-origin immigration quotas explicitly designed to limit southern and eastern European immigration was ___'],
         do_=[['The Homestead Act', 'The Land Grant Act', 'The Frontier Expansion Act', 'The Agricultural Settlement Act'],
              ['Birds of passage', 'Seasonal migrants', 'Circular migrants', 'Return emigrants'],
              ['The Immigration Act of 1924', 'The Chinese Exclusion Act', 'The Immigration Restriction Act of 1882', 'The National Origins Act of 1890']],
         dc=['The Homestead Act', 'Birds of passage', 'The Immigration Act of 1924'],
         hints=['USA 1862 — 160 acres free — 5 years improvement — western territories — pulled Irish German Scandinavian landless peasants', 'Italian men especially — Atlantic crossing seasonal — work America — return Italy summer — circular not permanent migration', '1924 USA — national origin quotas — 1890 census base — favored Anglo-Saxon — limited Italian Polish Jewish — eugenicist design'],
         dexp='The Homestead Act demonstrates how government land policy created pull factors for European emigration; birds of passage demonstrate that emigration was not always permanent but could be a circular labor strategy; and the 1924 Immigration Act demonstrates how nativist reactions applied Social Darwinist racial hierarchies to restrict European immigration — together they show the causes, patterns, and political consequences of European mass emigration.'
    ),
    dict(pnum=3, id_pre='whrm3',
         subtitle='Chinese and Indian Diaspora Under Imperialism',
         key='Chinese and Indian migration under the imperial labor system created diaspora communities across Southeast Asia, the Americas, Africa, and the Pacific. Unlike most European migration, these migrations occurred within frameworks of colonial coercion and racial discrimination. AP questions compare voluntary and coerced migration, analyze diaspora community formation under discrimination, and evaluate anti-colonial political movements that emerged from diaspora communities.',
         body='''## 📖 Chinese and Indian Diaspora

> **Indian Indentured Labor Diaspora**

After Britain abolished slavery in 1833, plantation owners in tropical colonies needed labor:

| Destination | Years Active | Numbers | Main Sending Region |
|------------|------------|---------|-------------------|
| **Trinidad** | 1838-1917 | ~144,000 | Uttar Pradesh, Bihar |
| **British Guiana** | 1838-1917 | ~239,000 | Uttar Pradesh, Bihar |
| **Natal (S. Africa)** | 1860-1911 | ~152,000 | South India (Tamil) |
| **Fiji** | 1879-1916 | ~61,000 | North India |
| **Mauritius** | 1835-1910 | ~453,000 | Various |
| **East Africa** | 1896-1901 | ~32,000 | Punjab (railroad labor) |

> **Chinese Migration Patterns**

| Destination | Context | Numbers | Legal Status |
|------------|---------|---------|-------------|
| **Southeast Asia** | Voluntary trading/merchant communities | Millions | Various |
| **California** | Gold Rush (1849); railroad construction | ~300,000 | Restricted (Exclusion Act 1882) |
| **Australia** | Gold rushes; then restricted | ~50,000 | Excluded (White Australia Policy 1901) |
| **Caribbean** | Contract labor on plantations and railroads | ~100,000 | Contract laborers |
| **Latin America** | Peru and Cuba: plantation labor | ~200,000 | Contract laborers (often coercive) |

> **The Coolie Trade Controversy**

- "Coolie" was a derogatory term for Chinese and Indian contract laborers
- **Peru and Cuba:** Chinese contract labor under conditions that were essentially slavery
- Workers were deceived about conditions; contracts violated; physical punishment used
- International pressure eventually restricted the worst abuses

> **Gandhi in South Africa (1893-1914)**

- Mohandas Gandhi went to South Africa as a lawyer for Indian business community
- Encountered systematic racial discrimination against Indians (separate registration; movement restrictions; disenfranchisement)
- Developed **satyagraha** (truth-force / nonviolent resistance) tactics in South Africa
- Organized Indian community campaigns; led successful resistance campaigns
- Returned to India (1915) with tactics that would ultimately end British colonial rule
- **AP significance:** Diaspora community → political technique development → revolutionary consequence in home country

> **Chinese Diaspora Political Consequences**

- **Sun Yat-sen** built his revolutionary network in Chinese diaspora communities
- Diaspora Chinese funded Kuomintang (Nationalist Party) revolutionary movement
- 1911 Revolution that ended Qing Dynasty partly funded by overseas Chinese
- Diaspora experience with Western democracy influenced revolutionary ideology''',
         qs=[
             {'q': 'The conditions of Indian indentured labor in British colonies after 1833 demonstrated:',
              'correct': 'That formally free contract labor could function as a system of practical coercion comparable to slavery when laborers were isolated on distant plantations, legally bound by contracts they could not breach without criminal penalties, paid wages below subsistence level in company stores, and had no effective means of appeal to authorities who were effectively controlled by plantation owners — the legal distinction (contract vs. property) did not eliminate the practical coercive reality',
              'others': ['Indentured labor was genuinely free — workers could leave plantations at any time', 'Conditions in indentured labor were uniformly better than slavery in every respect', 'The legal protections in indenture contracts were effectively enforced by colonial governments'],
              'exp': 'Legal vs. practical freedom is AP\'s analytical framework: the key distinction between slavery and indenture was legal — enslaved people were property; indentured workers were contractors. But in Trinidad or Fiji, the practical differences were limited: workers were 5,000 miles from home, spoke different languages, owed money for passage, lived on plantation property, worked under overseers with physical enforcement power, and had no practical access to courts. Contemporary abolitionists who called indenture "a new system of slavery" were exaggerating for rhetorical purposes but were not entirely wrong about the practical coercive reality.'},
             {'q': 'Gandhi\'s development of satyagraha (nonviolent resistance) in South Africa (1893-1914) demonstrates which AP principle?',
              'correct': 'Diaspora communities facing colonial racial discrimination developed anti-colonial political techniques that were then exported back to home countries — Gandhi\'s South African experience provided the practical context for testing nonviolent mass resistance; his Indian diaspora community provided the social organization for campaigns; and the techniques he developed (non-cooperation, civil disobedience, willingness to accept imprisonment) were directly transferred to Indian independence campaigns after 1915',
              'others': ['Gandhi developed satyagraha entirely from reading Indian philosophical texts with no connection to South African experience', 'Diaspora communities had no political influence on home country independence movements', 'Gandhi\'s South African campaigns were unsuccessful and he learned nothing from them'],
              'exp': 'Diaspora as political laboratory is AP\'s causal analysis: Gandhi was a London-trained lawyer hired to manage a commercial contract dispute in Natal. He encountered discrimination when thrown off a "whites only" train car in Pietermaritzburg (1893). He stayed 21 years, organizing the Natal Indian Congress, leading campaigns against the Asiatic Registration Act, and developing the theory and practice of satyagraha — nonviolent resistance through truth and self-suffering. When he returned to India (1915), he had a fully developed, tested set of organizational and ideological tools. The Salt March (1930), non-cooperation movement (1920-22), and ultimately independence (1947) all used techniques refined in South Africa.'},
             {'q': 'The Chinese Exclusion Act (USA 1882) and White Australia Policy (1901) demonstrate:',
              'correct': 'Settler-colonial societies applied racial hierarchy to immigration restriction when Chinese economic competition threatened white working-class wages — both policies used the language of racial "protection" (protecting the racial character of the nation) rather than purely economic language, demonstrating how Social Darwinist racial ideology was institutionalized in immigration law to exclude specific groups defined as racially incompatible with national identity',
              'others': ['Both policies were purely economic with no racial ideological dimension', 'Chinese immigrants supported both exclusion policies as inconsistent with their own interests', 'The two policies were unrelated — the USA and Australia made their decisions independently without reference to each other'],
              'exp': 'Racial exclusion policies as Social Darwinism institutionalized is AP\'s analytical synthesis: Chinese immigration to California (Gold Rush, railroad construction) and Australia (gold rushes) created economic competition with white workers. The political response — racial exclusion — used Social Darwinist language: Frederick Cheap (California politician) argued Chinese were racially "unassimilable"; Australian Labor Party supported White Australia Policy as protecting working-class wages AND national racial character. The policies demonstrate that Social Darwinism was not just ideology but policy — translating racial hierarchy theory into immigration law.'},
             {'q': 'Chinese diaspora communities\' funding of Sun Yat-sen\'s 1911 Revolution demonstrates:',
              'correct': 'Diaspora communities maintained active political connections with home countries and used diaspora economic resources to fund revolutionary political change — overseas Chinese in Southeast Asia, Hawaii, and California who had experienced both Western democratic institutions and colonial racial discrimination had political motivations (Chinese national humiliation under Qing; desire for a Chinese state that could resist foreign domination) and financial capacity to fund a revolution they could not personally participate in',
              'others': ['The 1911 Revolution was entirely funded and organized by people living within China with no diaspora involvement', 'Diaspora communities were indifferent to Chinese political developments', 'Foreign governments funded the 1911 Revolution — overseas Chinese had no financial role'],
              'exp': 'Diaspora political agency is AP\'s transnational politics analysis: Sun Yat-sen spent most of the period 1895-1911 organizing among overseas Chinese communities — in Hawaii (where he had family), San Francisco, Singapore, and Southeast Asia. His Tongmenghui (Revolutionary Alliance) relied on overseas Chinese for financial contributions, organizational networks, and ideological support. The overseas Chinese had specific motivations: they had experienced Western democratic institutions (some were American or Australian citizens); they had experienced racial humiliation both from Western discrimination and from Qing dynasty weakness; they wanted a strong Chinese state that could negotiate as an equal.'},
             {'q': 'The "coolie trade" controversy in Peru and Cuba (1850s-1870s) demonstrates the challenge of:',
              'correct': 'Distinguishing between voluntary contract migration and coerced labor trafficking when recruitment involved deception (false promises about conditions), contracts were signed under duress, physical punishment was used to enforce labor, and workers had no effective legal recourse — the formal legal category (free contract labor) did not accurately describe the actual conditions, requiring international pressure and eventual abolition of the system',
              'others': ['The coolie trade was genuinely voluntary — workers understood and consented to all conditions', 'China and India actively supported the coolie trade as beneficial to their emigrant workers', 'The international community had no ability to investigate or regulate colonial labor conditions'],
              'exp': 'Formal vs. actual conditions in migration is AP\'s analytical challenge: Peruvian and Cuban plantation owners contracted with coolie traders to deliver Chinese workers. Recruiters in Guangdong province used false promises about wages and conditions; some workers were kidnapped; contracts were written in Spanish or Portuguese that workers couldn\'t read. On arrival, workers found themselves in debt bondage for passage and tools, working sugar plantations in conditions similar to slavery. China\'s investigation (1874) documented systematic abuse. International pressure eventually forced reform — the Peking Convention (1874) gave China inspection rights. The controversy forced governments to define the line between free migration and trafficking.'},
             {'q': 'Indian diaspora communities in Trinidad, South Africa, and Fiji maintained distinct cultural identities over generations because:',
              'correct': 'Community institutions — temples, mosques, Hindi schools, Bhojpuri language maintenance, religious festivals, endogamous marriage practices — created social infrastructure that preserved cultural practices across generations even in distant colonial contexts, demonstrating that cultural preservation is not passive survival but active institutional creation by communities with strong motivations to maintain identity markers that distinguished them from both European colonizers and African or Pacific Island populations',
              'others': ['Indian diaspora communities immediately assimilated to local colonial cultures with no cultural preservation', 'Cultural preservation occurred without any institutional infrastructure — it was purely private', 'Indian communities in different colonial territories maintained identical cultural practices with no adaptation'],
              'exp': 'Active institutional cultural preservation is AP\'s diaspora analysis: the Indian community in Trinidad (concentrated in the sugar belt) built temples, maintained Hindu festivals (Diwali, Holi), preserved Bhojpuri as a home language, practiced endogamous marriage within caste groups (though caste hierarchies were modified in the diaspora context), and established Hindu and Muslim schools. These were not accidental survival of "traditional" culture but active choices to build institutions. The motivations included both positive identity assertion and negative discrimination — Indian workers were denied participation in Trinidadian colonial society, giving them reasons to maintain separate community institutions.'},
             {'q': 'For AP, the Chinese and Indian diaspora\'s most significant contribution to 20th-century political history was:',
              'correct': 'Providing the organizational infrastructure, financial resources, and political experience that enabled anti-colonial independence movements in both China and India — Gandhi\'s satyagraha technique was developed in South Africa; Sun Yat-sen\'s revolutionary network was built in diaspora communities; demonstrating that colonialism\'s dispersal of colonial populations could generate anti-colonial political resources that then returned to challenge the colonial order itself',
              'others': ['The diaspora had no significant political impact — independence movements were entirely domestic', 'Diaspora communities universally supported continued colonial rule', 'The diaspora\'s only significance was economic remittances with no political dimension'],
              'exp': 'Colonial blowback through diaspora is AP\'s synthesis: colonialism dispersed Indian and Chinese populations globally as labor — but these dispersed populations encountered Western political ideas (democracy, nationalism, rights), experienced colonial discrimination firsthand, built organizational capacities, and accumulated financial resources. The diaspora experience radicalized communities who then used their resources and techniques to challenge colonial rule. Gandhi in South Africa → Indian independence; Sun Yat-sen in Hawaii and Singapore → Chinese revolution: the colonial diaspora became a nursery for anti-colonial leadership.'}
         ],
         dl=['The South African colony that brought Indian indentured workers (1860-1911) to work sugar plantations, where Gandhi later organized resistance, was ___',
             'Gandhi\'s political technique of nonviolent mass resistance through truth-force, developed in South Africa, was ___',
             'Sun Yat-sen\'s revolutionary organization, funded largely by overseas Chinese diaspora, that organized the 1911 Chinese Revolution was ___'],
         do_=[['Natal', 'Cape Colony', 'Rhodesia', 'Transvaal'],
              ['Satyagraha', 'Ahimsa', 'Swaraj', 'Dharma'],
              ['Tongmenghui (Revolutionary Alliance)', 'Kuomintang', 'Boxer Society', 'Triad Society']],
         dc=['Natal', 'Satyagraha', 'Tongmenghui (Revolutionary Alliance)'],
         hints=['Natal South Africa — 1860-1911 — 152,000 Indian workers — sugar plantations — Gandhi 1893 arrived lawyer — Indian community organized', 'Gandhi South Africa — truth force — nonviolent resistance — civil disobedience — willingness to accept imprisonment — satyagraha — transferred to India 1915', 'Sun Yat-sen — 1905 organization — overseas Chinese funded — Honolulu San Francisco Singapore networks — 1911 Revolution Qing overthrow'],
         dexp='Natal demonstrates the colonial geography of Indian indentured labor; satyagraha demonstrates the political technique that diaspora experience generated; and the Tongmenghui demonstrates how diaspora financial and organizational resources funded revolutionary change in China — together they show how imperial diaspora communities became anti-colonial political agents.'
    ),
    dict(pnum=4, id_pre='whrm4',
         subtitle='Abolition Movements and Their Global Spread',
         key='The abolition of the Atlantic slave trade and slavery itself (1807-1888) was achieved through a combination of enslaved people\'s resistance, religious and moral reform movements, economic arguments, and political organization. AP questions analyze the multiple causes of abolition, compare abolition processes in different countries, and evaluate the extent to which abolition actually improved the lives of formerly enslaved people.',
         body='''## 📖 Abolition Movements

> **Timeline of Abolition**

| Event | Date | Country |
|-------|------|---------|
| British slave trade abolished | 1807 | Britain |
| Slave trade abolished | 1808 | USA (constitutional deadline) |
| Slavery abolished in British Empire | 1833 | Britain |
| Slavery abolished | 1848 | France |
| Slavery abolished | 1863 | USA (Emancipation Proclamation) |
| Slavery abolished | 1865 | USA (13th Amendment) |
| Slavery abolished in Cuba | 1886 | Spain |
| Slavery abolished in Brazil | 1888 | Brazil (last in Americas) |

> **Causes of British Abolition**

- **Religious argument (Quakers, Methodists, Evangelicals):** Slavery sinful; all humans equal before God; William Wilberforce led Parliament campaign
- **Natural rights argument (Enlightenment):** All humans have natural rights; slavery violates fundamental rights
- **Economic argument (Adam Smith):** Free labor is more efficient than slave labor; slavery is economically irrational
- **Enslaved people\'s resistance:** Haitian Revolution (1791-1804); slave rebellions across Caribbean; daily resistance; runaways
- **Humanitarian sentiment:** Growing middle-class moral consciousness; sugar boycotts; abolition pamphlets

> **The Haitian Revolution\'s Role**

- **Saint-Domingue (Haiti):** Most profitable colony in the world; 500,000 enslaved people; produced 40% of Europe\'s sugar
- **1791:** Boukman\'s Bois Caïman ceremony; slave rebellion began
- **1804:** Haiti declared independence — first Black republic; first successful slave revolution
- **Impact on abolition:** Terrified slaveholders (proved slaves would fight); inspired abolitionists; demonstrated enslaved people\'s capacity for self-governance
- **Brazil and USA:** Fear of Haitian-style revolution influenced slaveholder politics — accelerated AND delayed abolition in different contexts

> **Emancipation\'s Limits**

After legal abolition, formerly enslaved people faced:
- **Apprenticeship systems:** Required to continue working for former masters for fixed periods (British: 6 years)
- **Black codes / Jim Crow:** Legal restrictions on movement, voting, economic activity
- **Sharecropping:** Economic dependence on former masters for land; debt peonage
- **Racial violence:** Lynching in USA; planters\' terror in Brazil and Caribbean
- **AP conclusion:** Legal freedom ≠ substantive freedom; abolition was a necessary but insufficient condition for genuine liberation''',
         qs=[
             {'q': 'The Haitian Revolution (1791-1804) had what impact on the abolition movement?',
              'correct': 'It simultaneously accelerated abolition (by demonstrating that enslaved people would revolt and that slave-based colonial systems were ultimately unsustainable) and complicated abolition politics (by terrifying slaveholders who feared similar revolts in their own colonies and therefore resisted emancipation, fearing that free Black populations would follow the Haitian example) — its dual impact reflects the revolution\'s status as both proof of slavery\'s instability and warning of revolutionary consequences',
              'others': ['The Haitian Revolution only accelerated abolition with no negative political consequences', 'The Haitian Revolution had no impact on abolition debates elsewhere', 'The Haitian Revolution convinced slaveholders to voluntarily emancipate their enslaved workers'],
              'exp': 'Dual causation of revolutionary impact is AP\'s analytical standard: British abolitionists used the Haitian Revolution as evidence that slavery was unstable — if slaves in Saint-Domingue could overthrow French colonial rule, British Caribbean colonies faced similar risks. Better to voluntarily emancipate than face violent revolution. But American slaveholders drew the opposite lesson: Haitian-style revolution made emancipation dangerous — free Black populations were a revolutionary threat. Brazil\'s Dom Pedro II cited the Haitian example as an argument for gradual (not immediate) abolition to prevent social disruption. The same historical event produced opposite political conclusions in different contexts.'},
             {'q': 'William Wilberforce\'s religious argument for abolition (slavery is sinful; all humans equal before God) was effective in Britain because:',
              'correct': 'The religious argument operated within Britain\'s specific cultural context — the Evangelical revival (Methodism, Quakerism) had created large communities of religiously motivated middle-class Britons who responded to moral arguments and were politically mobilized through churches; the argument also spoke to British national identity as a Protestant Christian nation with a moral mission, making opposition to slavery a patriotic as well as religious duty',
              'others': ['Religious arguments were effective everywhere equally regardless of cultural context', 'The religious argument was secondary — economic arguments drove British abolition', 'Wilberforce\'s argument worked without religious mobilization or institutional church support'],
              'exp': 'Cultural context shapes argument effectiveness is AP\'s rhetorical analysis: the same religious anti-slavery argument that was effective in Britain (where Evangelical Protestantism was a mass political force) was less effective in Catholic Brazil or Cuba (where the Church was more integrated with colonial elites) or in the American South (where evangelical Christianity was used to defend slavery through Biblical citations). The effectiveness of abolition arguments depended on the specific religious, cultural, and political context in which they were deployed — there was no universally effective argument.'},
             {'q': 'The British Slavery Abolition Act (1833) included a £20 million compensation payment to slaveholders (not to enslaved people) because:',
              'correct': 'British political and legal culture treated enslaved people as property of slaveholders — abolishing slavery without compensation would have violated property rights and been constitutionally equivalent to government confiscation, which British law protected; the compensation reflects how deeply embedded the concept of human beings as legal property was in British colonial law, even as moral arguments against slavery were succeeding',
              'others': ['Compensation was paid to enslaved people as reparations for their suffering', 'The compensation requirement demonstrated that abolitionists controlled Parliament completely', 'The £20 million reflected the market value of goods produced by enslaved people'],
              'exp': 'Property law framework constraining abolition is AP\'s legal analysis: enslaved people were legally the property of their owners — registered, insured, mortgaged, inherited, and sold as property. When Parliament abolished slavery, it was legally required to compensate owners for the loss of their property (just as government would compensate any property owner for compulsory purchase). The £20 million (equivalent to about £16 billion today) was paid to approximately 46,000 slaveholders. Enslaved people received nothing except the "benefit" of freedom (and were required to continue as "apprentices" for 6 years). The legal framework that defined them as property left them with no claim to compensation.'},
             {'q': 'Sharecropping and debt peonage systems that emerged after the US Civil War demonstrate:',
              'correct': 'Legal emancipation did not automatically produce economic freedom when formerly enslaved people had no land, capital, or alternative employment — without land redistribution ("40 acres and a mule"), freed people were economically dependent on former masters who controlled land, agricultural credit, and marketing, enabling the re-establishment of coercive labor relationships through debt and legal enforcement rather than legal ownership',
              'others': ['Economic freedom automatically followed from legal emancipation', 'Former slaveholders voluntarily provided fair wages and land to their former workers', 'Sharecropping systems were equally beneficial to both landlords and tenant farmers'],
              'exp': 'Economic power perpetuating coercion after legal liberation is AP\'s post-abolition analysis: legal freedom without economic independence is incomplete freedom. In the American South: freed Black men and women needed land to farm, seed to plant, and tools to work. Former masters had all three. The sharecrop arrangement (farm the land, split the harvest with the landlord) seemed equitable but embedded debt: landlords provided inputs at inflated prices, charged interest, and controlled the weighing and pricing of cotton. Tenants were perpetually in debt. Debt peonage laws then criminalized debt — allowing re-enslavement of debtors under criminal justice. Legal freedom was real but insufficient without economic independence.'},
             {'q': 'Comparing the abolition of slavery in Brazil (1888) and the USA (1865) reveals:',
              'correct': 'Both achieved legal abolition under pressure from multiple forces (enslaved people\'s resistance, international moral pressure, economic arguments) but through different paths — the USA required a devastating civil war that killed 620,000 people before destroying slavery as a political institution; Brazil achieved gradual legal abolition over decades (1850 slave trade ban → 1871 free womb law → 1885 sexagenarian law → 1888 Golden Law) under political pressure from enslaved people\'s resistance and international criticism, without equivalent civil war',
              'others': ['Both countries used identical abolition processes with no significant differences', 'Brazil abolished slavery before the USA because Brazil had stronger abolitionist movements', 'The USA abolished slavery peacefully through legislative compromise while Brazil required revolution'],
              'exp': 'Comparative abolition pathways is AP\'s process analysis: both countries ultimately abolished slavery under comparable pressures (enslaved resistance; economic modernization arguments; international pressure after British abolition), but the political path differed significantly. The USA\'s slaveholder class was politically entrenched in a federal system that gave it veto power over federal legislation — only the Civil War broke that veto. Brazil\'s monarchical system allowed gradual reform from above; the 1888 Golden Law was signed by Princess Isabel in the Emperor\'s absence, without the mobilization that a federal democratic system would have required. Political structure shaped abolition pathway.'},
             {'q': 'The Black codes enacted in Southern states after the Civil War demonstrate:',
              'correct': 'Former slaveholders used legislative power to recreate conditions of coercive labor as close to slavery as possible within the constraints of the 13th Amendment — by restricting Black people\'s ability to leave their employers (vagrancy laws), limiting occupational choices (laborer registration requirements), controlling movement (pass systems), and criminalizing minor contract violations (allowing arrest and convict leasing), Black codes converted legal freedom into practical semi-slavery',
              'others': ['Black codes were enacted to expand Black political rights after emancipation', 'Southern states fully accepted the 13th Amendment and made no attempt to restrict freed people\'s rights', 'Black codes were temporary measures that were quickly repealed without lasting effect'],
              'exp': 'Legal workarounds for re-enslavement is AP\'s Reconstruction analysis: the 13th Amendment abolished slavery "except as punishment for crime" — immediately recognized as a loophole by Southern legislatures. Black codes criminalized vagrancy (being unemployed or without labor contracts), petty theft, and contract violations. Arrested Black men and women were leased to planters, railroads, and mines as convict laborers — paid nothing, physically punished, unable to leave. This convict lease system persisted into the 20th century in some Southern states. Black codes demonstrate that legal abolition was a necessary but insufficient condition for freedom without political power, economic independence, and equal enforcement of law.'},
             {'q': 'For AP, the global abolition movement\'s most significant historical legacy was:',
              'correct': 'Establishing the moral and political precedent that universal human rights transcend economic property interests and national sovereignty — the abolitionist argument that human beings cannot be legally owned regardless of economic consequences or legal tradition created a framework that subsequent human rights movements (women\'s suffrage, decolonization, civil rights) used as their moral foundation, making abolition the first successful global human rights campaign',
              'others': ['Abolition had no lasting moral or political legacy beyond the immediate end of chattel slavery', 'The abolition movement was primarily economic — it had no human rights dimension', 'Abolition\'s legacy was only significant in the Americas with no global influence'],
              'exp': 'First human rights campaign is AP\'s synthesis: the abolition movement established several political precedents that subsequent movements built on: that moral arguments can overcome economic interests; that international pressure on national governments is legitimate; that individuals have standing to advocate for the rights of people they have never met; that universal human dignity limits what legal systems can authorize. The 20th-century Universal Declaration of Human Rights (1948) drew on abolitionist moral framework. Gandhi drew on both Indian philosophy and abolitionist moral precedent. The civil rights movement explicitly connected to abolitionist history. Abolition created the template for global human rights activism.'}
         ],
         dl=['The first successful slave revolution, creating the first Black republic (1804), which both inspired abolitionists and terrified slaveholders, was ___',
             'The Brazilian law (1888) that abolished slavery — the last in the Americas — was ___',
             'The post-Civil War American laws restricting freed Black people\'s movement, employment, and rights to recreate coercive labor conditions were ___'],
         do_=[['The Haitian Revolution', 'The Jamaican Rebellion', 'The American Revolution', 'The Cuban Revolution'],
              ['The Golden Law (Lei Áurea)', 'The Free Womb Law', 'The Emancipation Decree', 'The Abolition Act'],
              ['Black codes', 'Jim Crow laws', 'Reconstruction amendments', 'Vagrancy statutes']],
         dc=['The Haitian Revolution', 'The Golden Law (Lei Áurea)', 'Black codes'],
         hints=['Haiti 1791-1804 — Saint-Domingue — Boukman — Toussaint Louverture — first Black republic — terrified slaveholders — inspired abolitionists dual impact', 'Brazil 1888 — Princess Isabel — Golden Law Lei Áurea — last Americas — gradual process 1850 trade ban 1871 free womb 1885 sexagenarian then 1888', 'USA post-Civil War South — vagrancy laws — laborer registration — pass systems — criminalized contract violations — convict leasing — 13th Amendment loophole'],
         dexp='The Haitian Revolution demonstrates how enslaved people\'s resistance shaped abolition politics; the Golden Law demonstrates the endpoint of Brazil\'s gradual abolition process; and Black codes demonstrate how legal abolition was undermined by legislative workarounds — together they show that abolition was a contested, incomplete process with significant gaps between legal and substantive freedom.'
    ),
    dict(pnum=5, id_pre='whrm5',
         subtitle="Women's Suffrage and Reform Movements",
         key="Women's suffrage movements emerged across industrialized nations in the late 19th and early 20th centuries, connected to broader reform movements including temperance, labor rights, and colonial reform. AP questions analyze the arguments, strategies, and outcomes of suffrage movements; compare movements across countries; and evaluate the extent to which suffrage represented a fundamental change in women's political status.",
         body="""## 📖 Women's Suffrage and Reform Movements

> **Origins of the Women's Suffrage Movement**

The women's suffrage movement grew from multiple sources:
- **Enlightenment natural rights:** If all humans have natural rights, why are women excluded from political rights?
- **Abolitionism:** Women abolitionists recognized contradiction — fighting for others' rights while denied their own
- **Separate spheres ideology:** Middle-class education for women produced educated women who recognized political exclusion
- **Industrial capitalism:** Women working in factories; new white-collar jobs; economic independence for some

> **Key Events and Organizations**

| Event/Organization | Date | Country | Significance |
|-------------------|------|---------|-------------|
| **Seneca Falls Convention** | 1848 | USA | First women's rights convention; Declaration of Sentiments |
| **National Woman Suffrage Association** | 1869 | USA | Stanton and Anthony; federal amendment strategy |
| **Women's Social and Political Union** | 1903 | Britain | Emmeline Pankhurst; militant tactics (chaining to railings, hunger strikes) |
| **New Zealand women's suffrage** | 1893 | New Zealand | First country to grant women's suffrage |
| **Australian women's suffrage** | 1902 | Australia | Second country; excluded Aboriginal women |
| **Finnish women's suffrage** | 1906 | Finland | First European country |

> **Arguments For and Against Suffrage**

| For Suffrage | Against Suffrage |
|-------------|-----------------|
| Natural rights: women have same rights as men | Women's sphere is domestic; politics is men's |
| Women are morally superior — improve politics | Women's emotions make them unfit for politics |
| Taxation without representation | Women's interests represented by male relatives |
| Women work; affected by labor laws | Suffrage would destroy family harmony |

> **Militant vs. Constitutional Strategies**

- **Constitutional suffragists:** Lobby Parliament/Congress; petition campaigns; public speaking; moral persuasion
- **Militants (suffragettes in Britain):** Window smashing; arson; chaining to railings; hunger strikes in prison; force-feeding
- **Debate:** Did militancy help (dramatic attention; demonstrated commitment) or hurt (alienated moderates; justified repression)?
- **New Zealand and Australia:** Achieved suffrage through peaceful constitutional means — evidence militancy was not necessary

> **Intersections with Other Reform Movements**

- **Temperance:** Women's Christian Temperance Union (Frances Willard) — connected alcohol to domestic violence; women needed vote to protect families
- **Labor rights:** Women workers needed vote to advocate for labor legislation
- **Colonialism:** British and American suffragists sometimes used racist arguments (educated white women deserve vote more than "barbaric" colonized men) — revealing intersection of feminism and racism""",
         qs=[
             {'q': "The Seneca Falls Declaration of Sentiments (1848) modeled on the Declaration of Independence demonstrates:",
              'correct': 'Suffragists strategically deployed existing political language (natural rights, self-evident truths, consent of the governed) to argue that the founding framework of American democracy was internally inconsistent — if "all men are created equal" and governments derive just powers from "the consent of the governed," then women\'s exclusion from political life violated the principles the nation claimed to be founded on, making suffrage a fulfillment rather than an expansion of existing political commitments',
              'others': ["The Declaration of Sentiments made no reference to the Declaration of Independence — it was entirely original", "Suffragists rejected natural rights language as insufficiently radical for their purposes", "The Declaration of Independence was used only as a rhetorical device with no substantive connection to suffrage arguments"],
              'exp': "Strategic use of founding language is AP's political movement analysis: Elizabeth Cady Stanton wrote the Declaration of Sentiments to deliberately echo the Declaration of Independence: 'We hold these truths to be self-evident: that all men and women are created equal.' This was not simply rhetoric but a logical argument — if you accept the Declaration of Independence's framework (natural rights; consent of governed), you are logically committed to women's political rights. The strategy forces opponents to either abandon the Declaration's principles (politically impossible) or accept their logical extension to women. This is the same strategy Douglass used with the Constitution in anti-slavery arguments."},
             {'q': "New Zealand's achievement of women's suffrage (1893) through peaceful constitutional lobbying while Britain's militant campaign (WSPU) had not yet succeeded by 1914 demonstrates:",
              'correct': "Political context shaped the effectiveness of different suffrage strategies — New Zealand's colonial political culture (more egalitarian than Britain; smaller scale; less entrenched party opposition; women's labor valued on frontier) made constitutional lobbying sufficient, while Britain's more entrenched class and gender hierarchies and powerful anti-suffrage conservative establishment may have required more aggressive tactics to force the issue onto the political agenda",
              'others': ["New Zealand's success proves that militant tactics were always counterproductive", "Britain's failure before 1914 proves that constitutional lobbying is always insufficient for radical reform", "The different outcomes reflect only the different quality of individual suffragist leaders"],
              'exp': "Context-dependent strategy effectiveness is AP's analytical nuance: there is no universally correct answer to 'did militancy help or hurt?' because the answer depends on specific political contexts. New Zealand in the 1890s had a progressive Liberal government (Richard Seddon eventually opposed but lost), a smaller parliament that responded to organized petition campaigns (270,000 signatures representing a third of New Zealand's adult women), and a political culture that valued women's contribution to frontier society. Britain in 1910 had a Conservative-dominated House of Lords that blocked women's suffrage bills regardless of Commons support, entrenched party calculations, and a political culture more resistant to change. Different contexts required different strategies."},
             {'q': "Women's suffrage arguments that relied on women's 'moral superiority' (women would purify politics; eliminate corruption; end war) demonstrate:",
              'correct': "Suffragists sometimes used the separate spheres ideology against itself — by accepting the premise that women are more moral and domestically oriented than men, they argued that this made women especially necessary in politics (to improve its moral quality), rather than arguing that women and men are fundamentally equal; this 'maternalist' strategy gained short-term support but reinforced gender essentialism that later limited women's actual political equality",
              'others': ["Moral superiority arguments were completely rejected by suffragists who always argued for complete equality", "The separate spheres ideology had no influence on suffrage arguments", "Maternalist suffrage arguments were more politically successful than equality arguments everywhere"],
              'exp': "Maternalist vs. egalitarian suffrage arguments is AP's internal movement analysis: two distinct strands of suffrage argument existed simultaneously. Egalitarian: women and men are equal; women have the same natural rights as men; gender is irrelevant to political capacity. Maternalist: women have distinctive moral and domestic qualities that politics needs; suffrage would improve politics by adding women's values. The maternalist argument was often more politically effective (less threatening to gender hierarchy) but reinforced the idea that women's political value comes from their femininity rather than their humanity. This internal tension — equality vs. difference — shaped feminist politics throughout the 20th century."},
             {'q': "British and American suffragists who used racist arguments ('educated white women deserve the vote more than ignorant male immigrants or colonial subjects') demonstrate:",
              'correct': "Some feminist movements accepted racial hierarchy while challenging gender hierarchy — by arguing that white women's education and civilization made them more deserving of suffrage than Black men or colonized peoples, these suffragists revealed that their challenge to one form of inequality (gender) was compatible with accepting and even reinforcing another form (race), demonstrating that social movements are not automatically progressive on all dimensions of inequality",
              'others': ["The women's suffrage movement was universally committed to racial equality as well as gender equality", "Racist suffrage arguments had no effect on suffrage campaigns and were universally rejected", "All feminist movements were equally committed to challenging both racial and gender hierarchy"],
              'exp': "Partial challenge to hierarchy is AP's intersection analysis: Elizabeth Cady Stanton opposed the 15th Amendment (giving Black men the vote) because it excluded women, using racist language about uneducated Black men getting the vote before educated white women. British suffragists (including some WSPU members) argued for women's suffrage on the grounds that colonial subjects governed by British women were unjustly denied political rights that less civilized peoples (colonized men) were given. This racist dimension of some suffrage politics is historically important: it shows that feminism as practiced was not automatically anti-racist, and that challenging one hierarchy (gender) is logically distinct from challenging all hierarchies."},
             {'q': "The Women's Social and Political Union's (WSPU) militant tactics (window smashing, arson, hunger strikes) were a response to:",
              'correct': "Years of constitutional failure — the WSPU adopted militancy after decades of peaceful suffragist petitions, public meetings, and parliamentary lobbying had produced no women's suffrage legislation, leading Emmeline Pankhurst to conclude that the existing political system would not grant women's suffrage voluntarily and that only disruptive action that imposed costs on the government and public would force the issue",
              'others': ["WSPU militancy was adopted immediately from the movement's founding with no prior period of constitutional methods", "Constitutional methods had been successful and the WSPU turned to militancy to accelerate an already-occurring process", "Militant tactics were chosen primarily for psychological reasons rather than as a response to political failure"],
              'exp': "Escalation in response to failure is AP's social movement analysis: the National Union of Women's Suffrage Societies (NUWSS) had been conducting constitutional campaigns since 1867 with petitions, lobbying, and public meetings. Women's suffrage bills had been introduced in Parliament repeatedly and consistently failed. Emmeline Pankhurst founded the WSPU in 1903 with the explicit conclusion that parliamentary lobbying was insufficient — the political establishment was unresponsive to peaceful pressure. Militancy (1905-1914) was a conscious escalation strategy: impose enough disruption and cost that ignoring women's suffrage became more politically costly than granting it."},
             {'q': "The connection between the temperance movement and women's suffrage demonstrates:",
              'correct': "Suffrage was embedded in a broader reform agenda centered on protecting women and families from the consequences of industrialization — temperance advocates (Frances Willard's WCTU) argued that alcohol caused domestic violence, poverty, and family destruction; women needed political power to pass temperance legislation; this connected suffrage to existing social reform networks and made it part of a comprehensive vision of moral social reform rather than simply a formal political rights claim",
              'others': ["Temperance and suffrage were entirely separate movements with no organizational or ideological connection", "The temperance movement opposed women's suffrage as incompatible with domestic values", "Suffrage advocates universally opposed temperance as too socially conservative"],
              'exp': "Reform coalition building is AP's movement strategy analysis: Frances Willard's Women's Christian Temperance Union (WCTU) was the largest women's organization in the 19th-century USA with 150,000 members by 1890. Willard's 'Do Everything' strategy connected temperance to suffrage to labor reform to international peace — creating a comprehensive social reform agenda. The WCTU's network provided organizational infrastructure for suffrage campaigns; its membership included women who might not support suffrage as an abstract rights claim but would support it as a means to protect their families from alcohol. Coalition-building across reform causes expanded the suffrage movement's social base."},
             {'q': "For AP, the global women's suffrage movement's most significant contribution to political history was:",
              'correct': "Establishing the principle that political rights are based on individual citizenship rather than on gendered social roles — by successfully arguing that women's exclusion from suffrage violated universal principles of political equality, the movement created precedents that challenged all forms of political exclusion based on ascriptive characteristics (race, ethnicity, religion), contributing to the broader 20th-century human rights framework",
              'others': ["The suffrage movement's only contribution was the specific right to vote with no broader implications", "Suffrage was granted to women everywhere simultaneously with no variation in timing or process", "The suffrage movement had no connection to other civil rights or human rights movements"],
              'exp': "Universal principle from specific campaign is AP's synthesis: the suffrage movement's argument was not 'women specifically deserve the vote' but 'political exclusion based on gender is unjust because political rights should be based on citizenship, not biological characteristics.' This argument, once established, applied to all ascriptive exclusions. The 19th Amendment (USA 1920) was followed by movements to enforce voting rights for Black Americans (Civil Rights movement); the principle that citizenship entails political rights regardless of race or gender became foundational to post-WWII human rights documents. Suffrage was a specific campaign with universal implications."}
         ],
         dl=["The 1848 American convention where Elizabeth Cady Stanton modeled the women's rights declaration on the Declaration of Independence was ___",
             "The first country in the world to grant women's full suffrage (1893) was ___",
             "Emmeline Pankhurst's militant British suffrage organization (founded 1903) that used window smashing and hunger strikes was ___"],
         do_=[["The Seneca Falls Convention", "The Philadelphia Women's Meeting", "The Boston Women's Rights Convention", "The National Women's Conference"],
              ["New Zealand", "Australia", "Finland", "Norway"],
              ["Women's Social and Political Union (WSPU)", "National Union of Women's Suffrage Societies (NUWSS)", "Women's Christian Temperance Union (WCTU)", "Fabian Women's Group"]],
         dc=["The Seneca Falls Convention", "New Zealand", "Women's Social and Political Union (WSPU)"],
         hints=["Seneca Falls 1848 — Stanton Anthony — Declaration of Sentiments — all men and women created equal — first women's rights convention USA", "New Zealand 1893 — Kate Sheppard — 270,000 petition signatures — Richard Seddon opposed — governor signed — first world suffrage", "Pankhurst 1903 — WSPU — Votes for Women — militancy window smashing arson hunger strikes — response to decades constitutional failure"],
         dexp="The Seneca Falls Convention establishes the American suffrage movement's founding document and strategy; New Zealand demonstrates that constitutional suffrage was achievable in the right political context; and the WSPU demonstrates how decades of constitutional failure produced militant escalation — together they show the diverse strategies and contexts of the global suffrage movement."
    ),
    dict(pnum=6, id_pre='whrm6',
         subtitle='Pan-Africanism, Pan-Asianism, and Anti-Colonial Movements',
         key='The late 19th and early 20th centuries saw the emergence of Pan-African and Pan-Asian movements that challenged European colonial racial hierarchy and asserted the political and cultural equality of colonized peoples. AP questions analyze how diaspora experience, Western education, and colonial racial discrimination generated anti-colonial ideology, and evaluate how these movements shaped 20th-century decolonization.',
         body='''## 📖 Pan-Africanism and Anti-Colonial Movements

> **Origins of Pan-Africanism**

Pan-Africanism emerged from multiple sources:
- **African diaspora in the Americas:** Black people in the USA, Caribbean, Britain who experienced racial discrimination while educated in Western culture
- **African resistance to colonization:** Shared experience of European conquest
- **Western liberal education:** Colonial subjects educated in European universities confronted contradiction between liberty ideals and colonial reality
- **The "color line" (W.E.B. Du Bois, 1900):** "The problem of the twentieth century is the problem of the color-line"

> **Key Pan-African Figures and Ideas**

| Figure | Background | Contribution |
|--------|-----------|-------------|
| **W.E.B. Du Bois** | African American; Harvard PhD | First Pan-African Congress (1900); "double consciousness"; NAACP |
| **Marcus Garvey** | Jamaican; worked in USA | Universal Negro Improvement Association (UNIA); "Back to Africa"; Black nationalism |
| **Sylvester Williams** | Trinidadian lawyer | Coined "Pan-African"; organized 1900 conference in London |
| **Edward Blyden** | Liberian diplomat | African cultural pride; Christianity, Islam and the Negro Race (1887) |

> **The Pan-African Congresses**

- **1900 (London):** First meeting; address to colonial powers on treatment of African peoples
- **1919 (Paris):** W.E.B. Du Bois organized during Paris Peace Conference; advocated international supervision of African colonies
- **1921, 1923, 1927:** Continued advocacy; growing membership; connections to African independence movements
- **1945 (Manchester):** Attended by future independence leaders (Kwame Nkrumah of Ghana; Jomo Kenyatta of Kenya) — turning point from diaspora to African-led movement

> **Pan-Asianism**

- **Japan's defeat of Russia (1905):** "Colored" nation defeats "white" nation — profound psychological impact on colonized Asian and African peoples
- **Japanese Pan-Asianism:** Japan as leader of "Asia for Asians"; anti-Western resistance; ironically used to justify Japanese imperialism
- **Indian nationalism:** Congress Party (1885); moderate then militant nationalism; Bal Gangadhar Tilak; later Gandhi
- **Chinese nationalism:** Boxer Rebellion (1900) — anti-foreign popular uprising; then Sun Yat-sen\'s republican revolution (1911)
- **Vietnamese, Korean, Indonesian nationalism:** All connected liberation ideologies

> **The Contradiction of Western Education**

Colonial powers educated colonial subjects in Western languages and political philosophy to produce administrators — but this education also provided:
- Language to articulate anti-colonial critiques using Western liberal vocabulary
- Education in Enlightenment ideas (liberty, equality, self-determination) that applied to colonial situations
- Connection to global networks of educated anti-colonial thinkers
- **Result:** "The empire strikes back" — colonial education produced its own critics''',
         qs=[
             {'q': 'W.E.B. Du Bois\'s concept of "double consciousness" in "The Souls of Black Folk" (1903) means:',
              'correct': 'African Americans (and by extension other colonized peoples) experience their identity through "two-ness" — simultaneously as individuals with their own self-understanding AND through the eyes of a white society that sees them primarily as racial objects, producing a divided consciousness that must navigate between authentic self-perception and the distorted racial perception imposed by dominant society',
              'others': ['Double consciousness means having two completely separate and non-interacting identities', 'The concept applies only to middle-class African Americans with no broader applicability', 'Double consciousness was Du Bois\'s description of white Americans\' inability to understand Black experience'],
              'exp': 'Double consciousness as colonial identity analysis is AP\'s theoretical framework: Du Bois described the African American experience of being "always looking at one\'s self through the eyes of others, of measuring one\'s soul by the tape of a world that looks on in amused contempt and pity." This psychological division — between self-perception (I am a full human being) and social perception (the world sees me as a racial inferior) — creates a "peculiar sensation, this double-consciousness, this sense of always measuring one\'s self by the tape of a world that looks on in amused contempt." AP uses this to analyze the psychological dimension of colonial experience beyond economic exploitation.'},
             {'q': 'Japan\'s defeat of Russia in the Russo-Japanese War (1904-05) had what impact on colonized peoples globally?',
              'correct': 'It demonstrated that a non-European nation could defeat a European great power using modern military technology and industrial capacity — this shattered the ideological claim that European dominance was natural or permanent, inspiring anti-colonial movements from India to Egypt to Africa with the evidence that "white" military superiority was contingent rather than inherent',
              'others': ['Japan\'s victory had no impact outside East Asia', 'The victory inspired colonized peoples to seek Japanese protection rather than independence', 'Colonized peoples interpreted the Japanese victory as confirming European racial superiority'],
              'exp': 'Non-European military victory as anti-colonial inspiration is AP\'s ideological impact analysis: Social Darwinism and racist ideology had naturalized European dominance as evidence of racial superiority. Japanese military modernization (Meiji reforms) + industrial capacity (armaments, logistics) + tactical skill + Russian military disorganization = Japanese victory at Tsushima (naval) and Mukden (land). This was not interpreted only as military news — nationalists in India (Bal Gangadhar Tilak celebrated it enthusiastically), Egypt, Persia, Vietnam, and Africa recognized its ideological significance: if Japan could beat Russia, the racial hierarchy was a lie. European dominance was not natural — it was the product of specific historical conditions that could be changed.'},
             {'q': 'The 1945 Pan-African Congress in Manchester being attended by future African independence leaders (Nkrumah, Kenyatta) demonstrates:',
              'correct': 'Pan-Africanism transitioned from a diaspora intellectual movement (led by African Americans and Caribbean activists addressing colonialism from outside Africa) to an African-led independence movement (led by Africans who would personally lead their nations to independence) — the Manchester Congress marks the generational and geographic shift that positioned Pan-Africanism to drive actual decolonization rather than simply advocate for it',
              'others': ['Pan-Africanism had no connection to actual African independence movements', 'The 1945 Congress was the first Pan-African Congress — all previous ones had been led by Africans', 'Diaspora Pan-Africanism and African nationalist movements were entirely separate with no organizational connection'],
              'exp': 'Intellectual movement → political movement transition is AP\'s causal analysis: Du Bois\'s early Pan-African Congresses (1900-1927) were largely attended by diaspora Africans (African Americans, Caribbean activists) who had no direct political power in Africa. By 1945, a new generation of Africans had received Western university education (Kwame Nkrumah studied in USA and Britain; Jomo Kenyatta studied in London) — they attended the Manchester Congress, internalized Pan-African ideology, and returned to Africa to lead independence movements. Ghana (1957, Nkrumah) and Kenya (1963, Kenyatta) were direct products of this transition from diaspora advocacy to African-led independence politics.'},
             {'q': 'The Indian National Congress Party (founded 1885) shifted from moderate (petition and reform) to more radical nationalism because:',
              'correct': 'British imperial policy repeatedly frustrated moderate nationalist demands — the 1905 Partition of Bengal (dividing the Muslim-majority east from the Hindu-majority west to weaken nationalist unity) and the general dismissal of Indian petitions for greater self-government demonstrated to moderates like Tilak that the colonial government would not grant meaningful reform voluntarily, requiring more assertive political mobilization',
              'others': ['The Congress Party was always radical from its founding with no moderate phase', 'British reform concessions satisfied moderate nationalists and only extremists demanded independence', 'The shift to radicalism was caused by economic depression with no connection to British political decisions'],
              'exp': 'Colonial policy producing radicalization is AP\'s causal analysis: the Indian National Congress (1885) was founded by moderates like Dadabhai Naoroji who believed in constitutional petitions, demonstrating Indian fitness for self-governance within the empire. Years of petitions produced no meaningful political reform. The 1905 Partition of Bengal was explicitly designed to weaken nationalism by dividing Hindu and Muslim communities — it instead produced the Swadeshi movement (boycott of British goods; promotion of Indian industries) and galvanized the radical wing led by Bal Gangadhar Tilak. The radicals argued that liberty had never been given voluntarily by any ruling power and must be taken. British policy radicalized the Congress by demonstrating that moderation would not be rewarded.'},
             {'q': 'The Boxer Rebellion (China, 1900) represents which type of anti-colonial response?',
              'correct': 'Popular nativist resistance to foreign economic penetration and cultural imperialism — the Boxers (Society of Righteous and Harmonious Fists) attacked foreign-built railroads, telegraph lines, churches, and Chinese Christian converts, representing a grassroots reaction to the loss of Chinese sovereignty and traditional cultural practices to Western commercial and missionary penetration, differing from elite nationalist movements (Sun Yat-sen) that accepted Western modernization while opposing foreign political control',
              'others': ['The Boxers were a conservative movement that supported the Qing Dynasty against reformers', 'The Boxer Rebellion was a reformist movement seeking to modernize China through Western methods', 'The Boxers had no anti-foreign dimension — they fought only against the Qing Dynasty'],
              'exp': 'Grassroots nativist vs. elite modernizing nationalism is AP\'s typology: the Boxer Rebellion represents one pattern of anti-colonial response (populist rejection of all foreign influence, including railways and Christianity) while Sun Yat-sen\'s revolutionary nationalism represents another (acceptance of Western technology and political ideas while rejecting Western political control). Both opposed foreign domination but through opposite cultural strategies: Boxers sought to expel all Western influence; Sun Yat-sen sought to use Western ideas (democracy, nationalism) to build a modern Chinese state capable of resisting Western power. AP requires distinguishing these different types of anti-colonial responses.'},
             {'q': 'Marcus Garvey\'s Universal Negro Improvement Association (UNIA) and "Back to Africa" movement differed from W.E.B. Du Bois\'s NAACP approach by:',
              'correct': 'Garvey pursued Black nationalist separatism (creating an autonomous Black nation-state in Africa as the ultimate goal) rather than integration and civil rights within existing American society (Du Bois\'s NAACP goal) — this reflected a different assessment of whether racial equality within American society was achievable; Garvey concluded it was not and sought to build Black political, economic, and cultural institutions independent of white society',
              'others': ['Garvey and Du Bois had identical political strategies with only rhetorical differences', 'Du Bois advocated for Black separatism while Garvey sought integration', 'The UNIA and NAACP cooperated fully with no strategic disagreement'],
              'exp': 'Separatism vs. integration debate is AP\'s African American politics framework: Du Bois (Harvard PhD, middle-class professional) believed that talented Black Americans ("the Talented Tenth") could earn full citizenship through demonstrated intellectual and cultural equality — NAACP strategy: legal challenges to discrimination; political lobbying; cultural achievement. Garvey (Jamaican immigrant, working-class appeal) concluded that white racism was too deep to be overcome by Black achievement — the solution was to build Black economic power (Black Star Line shipping company) and ultimately create an African homeland. Their disagreement reflected different analyses of American racism\'s permanence, not simply different temperaments.'},
             {'q': 'For AP, the most significant common feature of Pan-Africanism, Indian nationalism, and Chinese nationalism as anti-colonial movements was:',
              'correct': 'All three movements used Western political concepts (nationalism, self-determination, democracy) as tools against Western colonial power — colonized peoples adopted the nationalist frameworks that European powers had used to justify their own states and applied them to colonized nations, forcing colonial powers to either accept that their own political principles applied to colonized peoples or reveal that their universalist claims were ideologically selective',
              'others': ['All three movements rejected Western political concepts entirely in favor of traditional pre-colonial political frameworks', 'The three movements had no ideological connection — they developed independently with no common frameworks', 'Anti-colonial movements succeeded only through military force with no ideological dimension'],
              'exp': 'Western ideas against Western power is AP\'s anti-colonial synthesis: this is the intellectual paradox at the heart of anti-colonial nationalism. European colonialism brought nationalism as an ideology (nations have the right to self-determination; a people with shared culture and history should govern themselves). Colonized peoples observed European nationalism, absorbed it in colonial schools, and turned it against colonial rule: if nations have the right to self-determination, then India, China, and Africa are nations with the right to self-determination. Colonial powers found it difficult to reject this argument without explicitly abandoning the principles they claimed to be spreading. This is why Woodrow Wilson\'s 1918 "Fourteen Points" (promising self-determination) inspired Ho Chi Minh, Indian nationalists, and Korean independence activists — they took Wilson\'s words seriously even when he intended them only for European nations.'}
         ],
         dl=["W.E.B. Du Bois's 1903 concept describing African Americans' experience of divided identity — seeing themselves through both their own eyes and the eyes of a hostile white society — was ___",
             "The 1900 Japanese war victory that demonstrated a non-European nation could defeat a European great power, inspiring anti-colonial movements globally, was the ___",
             "Marcus Garvey's mass Black nationalist organization (1914) that advocated Black separatism and 'Back to Africa' was ___"],
         do_=[["Double consciousness", "The Veil metaphor", "The Color Line", "Racial dualism"],
              ["Russo-Japanese War", "Sino-Japanese War", "Boxer Rebellion", "Battle of Tsushima"],
              ["Universal Negro Improvement Association (UNIA)", "National Association for the Advancement of Colored People (NAACP)", "Pan-African Congress", "African National Congress (ANC)"]],
         dc=["Double consciousness", "Russo-Japanese War", "Universal Negro Improvement Association (UNIA)"],
         hints=["Du Bois 1903 Souls of Black Folk — two-ness — self-perception vs white racial perception — measuring by tape of world — psychological division", "1904-05 — Japan defeats Russia — Tsushima naval Mukden land — non-European defeats European — shatters racial superiority ideology — inspired India Egypt Africa", "Garvey 1914 Jamaican — UNIA — Black Star Line — Back to Africa — Black nationalism separatism — vs Du Bois NAACP integration"],
         dexp="Double consciousness captures the psychological dimension of colonial racial hierarchy; the Russo-Japanese War demonstrates how non-European military success inspired anti-colonial movements; and the UNIA demonstrates the separatist strand of anti-colonial Black nationalism that contrasted with Du Bois's integrationist approach — together they cover the intellectual, political, and ideological dimensions of global anti-colonial movements."
    ),
    dict(pnum=7, id_pre='whrm7',
         subtitle='AP Review and Exam Mastery',
         key='Reform and Migration content spans AP\'s c. 1750-1900 and c. 1900-present periods. Key exam themes include evaluating the causes and consequences of global migration, analyzing abolition as a multi-causal process, comparing suffrage strategies, and assessing how diaspora communities shaped anti-colonial movements.',
         body='''## 📖 AP Review: Reform and Migration

> **Must-Know Vocabulary**

- **Push-pull factors** — Economic, political, and social forces driving migration from sending regions and attracting migrants to destinations
- **Chain migration** — Social network-based migration where earlier migrants facilitate subsequent migration from same communities
- **Indentured labor** — Post-slavery contract labor system; technically free but practically coercive; mainly Indian and Chinese
- **Remittances** — Money sent by migrants back to home country families; economically significant for sending nations
- **Birds of passage** — Circular migrants (especially Italian) who worked abroad seasonally and returned home
- **Satyagraha** — Gandhi\'s nonviolent resistance technique developed in South Africa; truth-force; civil disobedience
- **Double consciousness** — Du Bois\'s concept: colonized/oppressed people see themselves both through their own eyes and through the distorting lens of the dominant society
- **Pan-Africanism** — Movement asserting African cultural and political unity across diaspora and continental Africa
- **Maternalist suffrage** — Argument for women\'s suffrage based on women\'s superior moral qualities; contrasted with egalitarian suffrage
- **Black codes** — Post-Civil War Southern legislation recreating coercive labor conditions for freed Black Americans

> **AP Comparison Quick Reference**

| Migration Type | Freedom Level | Main Origins | Main Destinations | AP Context |
|---------------|-------------|-------------|-----------------|-----------|
| European voluntary | High (but pushed by poverty) | Ireland, Italy, Poland, Russia | USA, Argentina, Brazil, Australia | 1850-1914 mass migration |
| Indian indentured | Low (contract bound) | North and South India | Trinidad, Guiana, Natal, Fiji | Post-1833 British colonies |
| Chinese contract | Variable | Guangdong | California, Peru, Cuba, SE Asia | Gold rushes; plantation labor |
| Internal migration | N/A | Rural to urban | Industrial cities | Industrial revolution context |

> **Key Comparison: Abolition Pathways**

| Country | Process | Key Cause | Date |
|---------|---------|----------|------|
| Britain | Gradual legislation (trade 1807; slavery 1833) | Religious moral argument + economics | 1833 |
| USA | Civil War required | Political deadlock; slaveholder power | 1865 |
| Brazil | Gradual legislation (trade → free womb → full) | International pressure + slave resistance | 1888 |''',
         qs=[
             {'q': 'An AP SAQ asks: "Briefly explain ONE way the diaspora experience shaped anti-colonial movements." Which earns full credit?',
              'correct': 'Gandhi developed satyagraha (nonviolent civil disobedience) while organizing South Africa\'s Indian community against racial discrimination (1893-1914) — experiencing colonial racism as a professional who had internalized Western liberal values created the contradiction that generated his theory: if British law claimed to protect rights, then publicly and nonviolently violating unjust laws forced the legal system to either enforce injustice visibly or back down; this technique was then directly transferred to India\'s independence movement',
              'others': ['Diaspora communities only contributed economically to independence movements with no ideological dimension', 'Anti-colonial movements were entirely domestic — diaspora experience was irrelevant', 'Diaspora communities contributed only to cultural preservation, not political organization'],
              'exp': 'SAQ full credit: specific claim (Gandhi developed satyagraha in South Africa) + specific evidence (Indian community in Natal; 1893-1914 organizing; legal contradiction generating resistance theory) + reasoning (explains why diaspora context specifically generated the technique: experiencing contradiction between British legal claims and discriminatory practice). The answer must go beyond "diaspora people experienced discrimination and became angry" to explain the specific mechanism by which diaspora experience generated specific anti-colonial political techniques that then influenced home country independence movements.'},
             {'q': 'For an AP LEQ on reform movements, which thesis about women\'s suffrage earns the highest complexity mark?',
              'correct': 'Women\'s suffrage was achieved through different strategies in different political contexts — New Zealand\'s constitutional lobbying succeeded where it was sufficient (1893); British militancy was adopted where constitutional methods had failed (1905-1914); and the movement\'s internal debate between egalitarian rights arguments and maternalist moral superiority arguments reflected a tension between challenging gender hierarchy fundamentally and using gender difference strategically to gain short-term political acceptance',
              'others': ['Women\'s suffrage was universally achieved through identical militant tactics', 'The suffrage movement uniformly argued for complete gender equality with no internal disagreements', 'Suffrage was granted to women everywhere by sympathetic male politicians with no connection to women\'s organizing'],
              'exp': 'Complexity through internal variation is AP\'s highest LEQ standard: a sophisticated thesis must identify variation (different strategies in different contexts), explain why the variation exists (political context shapes strategy effectiveness), AND acknowledge internal complexity within the movement (egalitarian vs. maternalist arguments). This demonstrates that the student can go beyond a simple narrative ("suffragists fought for the vote and won") to analyze the movement as a historically specific, internally varied, strategically adaptive political process — exactly what AP rewards with complexity points.'},
             {'q': 'An AP DBQ includes a document from a British plantation owner in Trinidad (c. 1850) defending the indentured labor system as "beneficial to Indian workers." Proper sourcing requires analyzing:',
              'correct': 'The plantation owner\'s point of view (direct economic beneficiary of cheap indentured labor), purpose (likely a response to abolitionist critics or parliamentary inquiries into post-slavery labor conditions), and historical situation (British Parliament had been investigating colonial labor conditions since abolition; plantation owners needed to defend their labor system against reform pressure) — together these suggest the document would systematically present the best-case arguments for indenture while downplaying or omitting evidence of coercion',
              'others': ['Plantation owner documents are completely objective — their economic interest is irrelevant to content reliability', 'Only documents from Indian workers themselves are usable — all plantation owner documents must be excluded', 'The document\'s historical situation is unknowable and therefore irrelevant to sourcing'],
              'exp': 'Multi-factor sourcing with calibrated reliability assessment is AP\'s DBQ standard: the plantation owner has specific interests (cheap labor), writes for a specific purpose (defending the system against critics), in a specific situation (parliamentary scrutiny). This does not mean the document is false — it may accurately describe some material benefits of indenture (regular wages; passage provided; some legal protections in theory). But the document is unlikely to include evidence of debt bondage, physical punishment, or workers\' inability to leave — exactly the evidence that critics cited. Sourcing means calibrating what the document is likely to include and exclude based on context, not simply "trust" or "distrust."'},
             {'q': 'Comparing European voluntary mass migration (1850-1914) to indentured labor migration reveals which AP pattern?',
              'correct': 'Both migration streams moved labor from areas of surplus to areas of demand, but operated within fundamentally different frameworks of freedom and coercion — European migrants responded to push-pull factors with significant (if constrained by poverty) agency in choosing destinations and changing employment; indentured workers were contractually bound for years, legally penalized for leaving, and had structural economic vulnerability that made the technical legal freedom meaningless in practice',
              'others': ['Both migration types involved identical conditions of freedom and coercion', 'European migrants had more coercion because they were pushed by famine; indentured workers had more freedom because their passage was paid', 'There was no significant overlap in destination regions between the two migration types'],
              'exp': 'Freedom spectrum is AP\'s comparative framework: both migration types involved people leaving economically disadvantaged regions for economically active regions — but the structures were different. Voluntary migration: individuals researched destinations (chain migration information), chose routes, could change employers, could eventually become citizens. Indentured migration: signed contracts under information asymmetry, bound for fixed years with criminal penalties for breach, worked under plantation discipline, had minimal legal recourse. AP comparison must identify both similarities (both economic migration; both global) and the crucial structural difference (freedom vs. contracted labor) and explain why that difference mattered to the migrants\' actual experiences.'},
             {'q': 'The Haitian Revolution\'s role in abolition politics demonstrates which AP analytical principle?',
              'correct': 'The same historical event can simultaneously advance and retard a historical process — the Haitian Revolution both accelerated abolition (by demonstrating slavery\'s instability and inspiring abolitionists) and delayed abolition (by terrifying slaveholders who used Haitian precedent to argue that emancipation would produce revolutionary violence) — demonstrating that causation in history is complex, contextual, and can produce opposite effects in different political environments',
              'others': ['The Haitian Revolution uniformly accelerated abolition in all affected societies', 'The Haitian Revolution only delayed abolition — its effects were entirely negative for the movement', 'The Haitian Revolution had no measurable impact on abolition politics outside Haiti'],
              'exp': 'Same event, opposite effects in different contexts is AP\'s complexity principle: the most sophisticated historical analysis recognizes that events don\'t have single, uniform effects — their effects are mediated by the specific contexts in which they are received. British abolitionists (who had no enslaved population in Britain to fear) could celebrate Haiti as evidence of slavery\'s unsustainability. American slaveholders (who feared their own enslaved population) used Haiti as evidence that emancipation was dangerous. The same historical fact produced opposite political conclusions because the interpreters\' contexts and interests differed fundamentally.'},
             {'q': 'Pan-Africanism\'s development from diaspora intellectual movement to African independence ideology demonstrates:',
              'correct': 'Ideas developed in one context (diaspora African and African American intellectuals in the USA and Britain analyzing racial hierarchy theoretically) can be adopted and transformed in different contexts (African independence leaders using Pan-African frameworks to organize mass independence movements in Ghana, Kenya, and Nigeria) — demonstrating that intellectual movements have impacts beyond their original social contexts and that ideas travel across geographic and generational boundaries',
              'others': ['Pan-Africanism was invented by African leaders with no influence from diaspora intellectuals', 'Intellectual movements in diaspora communities have no influence on political movements in home countries', 'Pan-Africanism remained purely theoretical with no connection to actual independence movements'],
              'exp': 'Transnational idea transfer is AP\'s intellectual history analysis: Du Bois and Garvey developed Pan-African frameworks in the USA; African students studying in the USA and Britain (Nkrumah at Lincoln University; Kenyatta in London) absorbed these frameworks. The 1945 Manchester Congress was the organizational moment where diaspora intellectuals met African independence leaders — Nkrumah and Du Bois co-organized it. Nkrumah returned to Ghana (then Gold Coast) and built the Convention People\'s Party using Pan-African organizational models. Ghana\'s 1957 independence was understood by Nkrumah as a Pan-African achievement — he invited independence leaders from across Africa to Accra. Diaspora intellectual frameworks → African political organization → independence.'},
             {'q': 'For AP synthesis, the common thread connecting abolition, women\'s suffrage, labor movements, and Pan-Africanism as reform movements of the 19th and early 20th centuries was:',
              'correct': 'All applied Enlightenment natural rights language and liberal political philosophy (individual rights, consent of the governed, equality before the law) to groups that the original Enlightenment framework had excluded — by accepting the liberal framework\'s principles but extending their scope to enslaved people, women, workers, and colonized peoples, these movements revealed the contradiction between liberal ideology\'s universal claims and its historically limited application',
              'others': ['All four movements were entirely separate with no shared ideology or strategy', 'All four movements explicitly rejected Enlightenment liberalism as a Western ideology incompatible with their goals', 'The movements only connected to each other in the 20th century — in the 19th century they had no ideological relationship'],
              'exp': 'Enlightenment liberal framework as both tool and target is AP\'s synthesis: abolitionism argued that natural rights principles applied to enslaved people — using Locke against slaveholders. Women\'s suffrage argued that consent of the governed applied to women — using Jefferson against patriarchy. Labor movements argued that liberty and equality applied in economic as well as political spheres — using liberal principles against laissez-faire capitalism. Pan-Africanism argued that self-determination applied to colonized peoples — using Wilson\'s own rhetoric against colonialism. All four movements used liberalism against its own historical limitations, forcing the logic of the framework to include groups it had originally excluded.'}
         ],
         dl=["Gandhi's technique of nonviolent civil disobedience, developed in South Africa and later applied to India's independence movement, was ___",
             "W.E.B. Du Bois's concept describing the psychological division experienced by colonized people who see themselves through both their own eyes and society's distorting racial lens was ___",
             "The first country to grant women's suffrage (1893) through peaceful constitutional lobbying was ___"],
         do_=[["Satyagraha", "Ahimsa", "Swaraj", "Non-cooperation"],
              ["Double consciousness", "The Color Line", "The Veil", "Racial dualism"],
              ["New Zealand", "Australia", "Finland", "Norway"]],
         dc=["Satyagraha", "Double consciousness", "New Zealand"],
         hints=["Gandhi South Africa 1893-1914 — truth force — nonviolent civil disobedience — Natal Indian Congress — anti-registration campaigns — transferred to India 1915", "Du Bois 1903 — Souls of Black Folk — two-ness — self vs white racial perception — measuring by tape of contempt — psychological colonialism dimension", "New Zealand 1893 — Kate Sheppard petition — first world women's suffrage — constitutional lobbying — governor signed"],
         dexp="Satyagraha connects diaspora experience to anti-colonial technique development; double consciousness provides the psychological analytical framework for understanding colonial identity; and New Zealand's 1893 suffrage demonstrates that constitutional reform was achievable in the right political context — together they represent the core analytical vocabulary AP requires for reform and migration topics."
    ),
]

for p in parts:
    content = make(p['pnum'], p['id_pre'], p['subtitle'], p['key'],
                   p['body'], p['qs'], p['dl'], p['do_'], p['dc'],
                   p['hints'], p['dexp'])
    # Fix missing closing braces for last question in qs
    lines_out = content.split('\n')
    fixed_lines = []
    for i, line in enumerate(lines_out):
        stripped = line.rstrip()
        if i < len(lines_out)-1:
            next_line = lines_out[i+1].rstrip()
            if "'exp':" in line and next_line.strip() == '],':
                if not stripped.endswith("'}"):
                    if stripped.endswith("'"):
                        line = line.rstrip('\n') + '}\n'
        fixed_lines.append(line)
    content = '\n'.join(fixed_lines)
    w(f"{SLUG}-part{p['pnum']}.ts", content)

print("All reform-migration parts done!")
