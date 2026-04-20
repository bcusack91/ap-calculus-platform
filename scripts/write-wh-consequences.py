#!/usr/bin/env python3
"""Write wh-consequences-industrialization parts 2-7."""
import os, re

base = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))),
                    'src', 'data', 'interactive-lessons')

def w(filename, content):
    with open(os.path.join(base, filename), 'w') as f:
        f.write(content)
    print(f"✓ {filename}")

SLUG = 'wh-consequences-industrialization'
EXPORT = 'whConsequencesIndustrializationPart'

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
# ⚙️ Consequences of Industrialization

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
    dict(pnum=2, id_pre='whci2',
         subtitle='Labor Movements and the Rise of Socialism',
         key='Industrialization created new working-class communities with shared grievances (low wages, dangerous conditions, child labor) that generated trade unions, labor legislation, and socialist political movements. AP questions compare different labor responses (craft unions vs. industrial unions vs. socialism) and evaluate the extent to which workers improved their conditions through collective action.',
         body='''## 📖 Labor Movements and Socialism

> **Working Conditions that Generated Labor Response**

| Condition | Reality | Worker Response |
|-----------|---------|----------------|
| **Wages** | Low; barely subsistence; women and children paid less | Wage strikes; minimum wage campaigns |
| **Hours** | 12-16 hour days common; 6-7 days per week | 10-hour day movement; 8-hour day demand |
| **Safety** | Machinery accidents; coal mine collapses; chemical exposure | Safety legislation campaigns |
| **Child labor** | Children as young as 5 in mines and mills | Child labor prohibition legislation |

> **Trade Unions: Collective Bargaining**

- **Craft unions:** Organized skilled workers (printers, carpenters) — earlier, more stable
- **Industrial unions:** Organized all workers in an industry regardless of skill — later, larger
- **Methods:** Collective bargaining, strikes, work-to-rule slowdowns
- **Legal status:** Initially illegal (Combination Acts in Britain); gradually legalized through 19th century
- **Britain\'s TUC (1868):** Trades Union Congress — federation of British unions; advocated political action

> **Socialist Ideology**

- **Utopian socialism (Owen, Fourier):** Cooperative communities; factories organized for workers not profit
- **Scientific socialism (Marx and Engels):** History determined by class struggle; capitalism exploits workers; revolution inevitable; proletariat would create communist society
- **The Communist Manifesto (1848):** "Workers of the world, unite!"; analyzed capitalism as systematic exploitation
- **Reform socialism (Bernstein):** Gradual reform through democratic politics; rejected revolution
- **Anarchism:** Reject all government; direct action; Bakunin and Kropotkin

> **Political Consequences**

- **Britain:** Labour Party (1900) emerged from trade unions + socialist groups; parliamentary road to reform
- **Germany:** Social Democratic Party (SPD) — largest socialist party in Europe by 1912; worked within Bismarck\'s system despite Bismarck\'s Anti-Socialist Laws
- **Bismarck\'s response:** Anti-Socialist Laws (1878-1890) + paternalistic welfare state (old age insurance, accident insurance, health insurance) — "steal the socialists\' thunder" by providing some worker protections''',
         qs=[
             {'q': 'Karl Marx\'s "Communist Manifesto" (1848) argued that industrial capitalism was:',
              'correct': 'A system of exploitation in which the bourgeoisie (capitalist class) extracted surplus value from the proletariat (working class) by paying wages lower than the value workers produced — making conflict between classes not incidental but structural and inevitable, with communist revolution as the historical outcome',
              'others': ['A beneficial system that would eventually distribute wealth equitably to all classes', 'A temporary stage that would peacefully evolve into a cooperative society without conflict', 'A system that harmed only the poorest workers while benefiting the middle class'],
              'exp': 'Marx\'s structural exploitation analysis is AP\'s framework: the key insight is that exploitation is not the result of individual bad behavior (cruel factory owners) but is structurally built into the wage-labor system. Workers must sell labor to survive; capitalists pay less than the value produced; the difference (surplus value) is profit. No individual choice changes this — only changing the ownership of production would end exploitation. This structural analysis, rather than moral critique, is what distinguished Marx from earlier "utopian" socialists.'},
             {'q': 'Bismarck\'s paternalistic welfare state (old age insurance, accident insurance 1883-1889) demonstrates:',
              'correct': 'That conservative governments could adopt limited worker protections as a strategy to undercut socialist political demands — by providing some economic security through state insurance, Bismarck attempted to give German workers a stake in the existing political order, reducing the appeal of revolutionary socialism without granting the political power (democratic rights, union rights) that socialists also demanded',
              'others': ['Bismarck was converted to socialist ideology and genuinely supported workers\' rights', 'The welfare state had no political motivation — it was purely humanitarian', 'Bismarck\'s welfare state was a complete response to worker demands that satisfied all socialist goals'],
              'exp': '"Stealing the socialists\' thunder" is AP\'s framework for conservative welfare reform: Bismarck explicitly said his welfare measures were designed to reduce socialist appeal. By providing old age pensions and accident insurance (economic security), he gave workers reasons to support the existing system. He simultaneously banned socialist organizations (Anti-Socialist Laws, 1878-1890). The combination — some economic security + political repression — was a conservative response to the socialist challenge that differed from both pure repression (which generated martyrs) and democratic accommodation (which would have empowered workers politically).'},
             {'q': 'The legal status of trade unions shifted from criminal conspiracy to legal organization across 19th-century Europe because:',
              'correct': 'Growing working-class political pressure (expanding suffrage; socialist electoral success) made it politically unsustainable to treat all worker collective action as criminal — governments and employers ultimately preferred regulated collective bargaining (which channeled worker grievances into legal negotiation) to illegal underground organizing (which radicalized workers and generated sympathy)',
              'others': ['Factory owners voluntarily supported union legalization as beneficial to their industries', 'Trade unions were legalized primarily for economic efficiency reasons with no political dimension', 'Union legalization occurred suddenly through a single legislative act with no gradual process'],
              'exp': 'Political pressure producing legal reform is AP\'s mechanism: Britain\'s Combination Acts (1799-1800) made worker combination criminal; these were repealed (1824-25) under political pressure; union activities were still restricted until the Trade Union Act (1871) gave full legal protection. The gradual legalization process reflects the political calculation of ruling elites: controlling legal unions (which negotiate wages) was preferable to driving labor organizing underground (where it radicalized). Legal status → negotiation channel → some labor stability.'},
             {'q': 'Comparing "reform socialism" (Bernstein\'s revisionism) to Marxist revolutionary socialism reveals:',
              'correct': 'Reform socialism argued that capitalism was gradually improving workers\' conditions through trade unions and democratic reform, making violent revolution unnecessary and counterproductive; revolutionary socialism argued that capitalism\'s contradictions were structural and could only be resolved through fundamental overthrow — this debate about gradual reform vs. revolution divided the global left throughout the 20th century',
              'others': ['Both reform and revolutionary socialism agreed that violent revolution was the only path to socialist society', 'Bernstein\'s revisionism was identical to Marxism with only terminological differences', 'Revolutionary socialism rejected democratic politics entirely while reform socialism embraced monarchy'],
              'exp': 'The reform vs. revolution debate is AP\'s framework for understanding socialist fragmentation: Eduard Bernstein (German Social Democrat, 1899) argued that Marx was empirically wrong — workers\' conditions were improving, not deteriorating; democratic political action was producing real reforms; revolution was neither necessary nor desirable. Orthodox Marxists (Luxemburg, Lenin) rejected this as betrayal — capitalism couldn\'t be reformed, only overthrown. This debate shaped 20th-century left politics: social democracy (reform road) vs. communism (revolution) reflects the Bernstein vs. Lenin split.'},
             {'q': 'The rise of the British Labour Party (1900) from trade union organizing demonstrates:',
              'correct': 'That industrial organization (trade unions) can produce political organization (political party) when workers recognize that legislation (labor laws, suffrage, welfare policy) requires political power to achieve — the Labour Party was not an intellectual creation but emerged organically from working-class organizational experience, making it different from continental socialist parties that were founded by intellectual socialists',
              'others': ['The Labour Party was founded by intellectual socialists with no connection to trade unions', 'British workers showed no interest in political organization — they focused only on workplace bargaining', 'The Labour Party immediately adopted Marxist revolutionary ideology upon its founding'],
              'exp': 'Trade unions → political party is AP\'s organizational evolution: the Trades Union Congress (TUC, 1868) organized British unions; as workers gained voting rights (Reform Acts 1867, 1884), union leaders recognized that Parliamentary legislation controlled labor law, workplace safety, and social insurance — areas that collective bargaining couldn\'t reach. The Labour Representation Committee (1900, later Labour Party) was created explicitly to put trade union interests directly into Parliament. This organic connection between industrial and political organization made British Labour different from German SPD (founded by socialist intellectuals who then recruited workers).'},
             {'q': 'The AP analytical framework for evaluating whether workers improved their conditions through industrialization requires:',
              'correct': 'Distinguishing between short-term (first generation of industrial workers experienced declining conditions), medium-term (real wages rose after 1850 for skilled workers in industrialized nations), and long-term (labor movements achieved significant legal protections by 1900) — and recognizing that improvements were uneven (skilled vs. unskilled; Britain vs. developing regions; men vs. women and children)',
              'others': ['Working conditions uniformly improved from the beginning of industrialization', 'Working conditions uniformly worsened throughout the entire Industrial Revolution era', 'All workers (skilled, unskilled, women, children) experienced identical changes in their conditions'],
              'exp': 'Temporal and demographic specificity is AP\'s analytical standard: "Did industrialization improve workers\' lives?" cannot be answered simply yes or no. First generation (1760s-1830s in Britain): real wages were stagnant or declining while working conditions in factories were demonstrably worse than rural craft production. After 1850: real wages rose; factory acts provided some protections; children\'s labor was restricted. By 1900: 10-hour workday achieved in most industries; unions legal; social insurance beginning. The improvements were real but delayed, uneven, and required struggle — not automatic products of economic growth.'},
             {'q': 'For AP, the socialist response to industrialization\'s consequences demonstrated:',
              'correct': 'That industrial capitalism generated its own ideological opposition — the concentrated working-class communities of industrial cities created the social conditions for class consciousness and collective action that agricultural workers in dispersed rural settings could not develop, demonstrating that industrial capitalism\'s organizational form (concentrated factories, shared experiences) unintentionally created the organizational basis for the labor and socialist movements that challenged it',
              'others': ['Socialist ideology was imported from outside industrial society with no connection to workers\' actual experiences', 'Working-class communities rarely developed collective political consciousness', 'Socialism was primarily an intellectual movement with no connection to actual labor organizing'],
              'exp': 'Industrial capitalism producing its own opposition is AP\'s dialectical analysis: factory owners concentrated thousands of workers in single locations; those workers shared identical experiences (same wages, same hours, same dangerous conditions); shared experience → shared consciousness; shared consciousness → collective action (unions, strikes, political parties). Rural agricultural workers had dispersed, individualized experiences that made collective consciousness harder to develop. The city and factory as organizational environments for working-class politics explains why socialist movements emerged from industrial cities, not agrarian regions.'}
         ],
         dl=['Karl Marx and Friedrich Engels\' 1848 document calling for workers\' revolution was ___',
             'The German chancellor\'s combination of anti-socialist repression and state welfare insurance (1878-1889) was ___',
             'The British federation of trade unions founded in 1868 that eventually helped create the Labour Party was ___'],
         do_=[['The Communist Manifesto', 'Das Kapital', 'The Condition of the Working Class', 'The Wealth of Nations'],
              ['Bismarck\'s carrot and stick policy', 'The Berlin Compromise', 'The Realpolitik welfare system', 'The Anti-Worker program'],
              ['The Trades Union Congress (TUC)', 'The British Socialist Party', 'The Chartist Movement', 'The Fabian Society']],
         dc=['The Communist Manifesto', 'Bismarck\'s carrot and stick policy', 'The Trades Union Congress (TUC)'],
         hints=['Marx Engels 1848 — workers of world unite — bourgeoisie vs proletariat — revolutionary call', 'Bismarck — Anti-Socialist Laws 1878 — old age accident health insurance 1883-1889 — reduce socialist appeal', 'TUC 1868 — British trade union federation — collective bargaining — political lobbying — Labour Party foundation'],
         dexp='The Communist Manifesto represents the revolutionary ideological response to industrial capitalism; Bismarck\'s carrot and stick represents conservative governments\' adaptive response to socialist challenge; and the TUC represents the practical organizational response of British workers — together they demonstrate the range of responses to industrialization\'s labor consequences.'
    ),
    dict(pnum=3, id_pre='whci3',
         subtitle='Social Darwinism and Its Consequences',
         key='Social Darwinism — applying Charles Darwin\'s biological theory of evolution to human societies and races — became the dominant ideological framework justifying both industrial inequality (the rich are rich because they are evolutionarily "fittest") and imperial conquest (European racial dominance is natural law). AP questions analyze how scientific language was used ideologically and evaluate Social Darwinism\'s consequences.',
         body='''## 📖 Social Darwinism

> **Darwin\'s Biological Theory vs. Social Darwinism**

| | Darwin\'s Actual Theory | Social Darwinist Application |
|--|----------------------|---------------------------|
| **Subject** | Species evolution over millions of years | Human societies and racial groups |
| **Mechanism** | Natural selection (random variation + environment) | Competition among individuals/races/nations |
| **Timeframe** | Geological time | Current social arrangements |
| **Conclusion** | No teleology (no direction or purpose) | Current European dominance = proof of racial superiority |
| **Darwin\'s view** | Darwin explicitly rejected racial hierarchy applications | Applied without Darwin\'s endorsement |

> **Herbert Spencer and "Survival of the Fittest"**

- Herbert Spencer coined "survival of the fittest" (not Darwin)
- Applied to economics: wealthy individuals survived economic competition because they were biologically superior
- **Conclusion:** Social welfare, charity, and government aid to the poor violated natural law by helping the "unfit" survive
- **Influence:** American industrialists (Carnegie, Rockefeller) used Social Darwinism to justify enormous wealth inequality

> **Social Darwinism and Imperialism**

- European military and economic dominance → proof of European racial superiority → natural right to govern "inferior" races
- Colonization = "survival of the fittest" civilizations
- **"White Man\'s Burden" (Kipling, 1899):** Europeans obligated to "civilize" inferior peoples
- **Scientific racism:** Measured skulls, classified races, produced pseudo-scientific racial hierarchies — gave Social Darwinism academic legitimacy

> **Social Darwinism and Competition Among Nations**

- Nations compete like species; only the strongest survive and expand
- **Arms races:** Military competition justified as natural
- **Colonial rivalry:** Competition for colonies = national fitness test
- **Eugenics:** Applied Social Darwinism to human reproduction; encouraged "fit" reproduction, discouraged "unfit" — led eventually to 20th-century genocidal policies

> **Critiques and Contradictions**

| Critique | Argument |
|---------|---------|
| **Scientific** | Darwin\'s theory doesn\'t apply to human societies — different mechanisms |
| **Historical** | Industrial Revolution (not biology) explains European dominance |
| **Moral** | Natural ≠ good; describing what is doesn\'t prescribe what should be |
| **Logical** | Circular: wealthy/dominant are "fit" because they\'re dominant; dominant because they\'re "fit" |''',
         qs=[
             {'q': 'Herbert Spencer\'s application of "survival of the fittest" to industrial capitalism argued:',
              'correct': 'That economic inequality was a natural consequence of competition among individuals with different biological fitness levels — the wealthy survived economic competition because of superior natural qualities; poverty reflected biological inferiority; therefore government programs to help the poor violated natural law by sustaining the "unfit" and would degrade the overall fitness of society',
              'others': ['Spencer argued that government should actively redistribute wealth to improve social fitness', 'Spencer believed all individuals were equally fit and that inequality was purely structural', 'Spencer applied Darwin\'s theory only to competition among nations, not individuals'],
              'exp': 'Spencer\'s laissez-faire Social Darwinism is AP\'s ideological framework for understanding industrial inequality justification: if the rich are rich because they\'re biologically superior, then taxing them or redistributing their wealth violates natural law. If the poor are poor because they\'re biologically inferior, then helping them is counterproductive (helping the "unfit" survive degrades the species). This logic provided industrial capitalists with a scientific-sounding justification for opposing welfare, unions, and regulation — not out of greed but out of adherence to natural law.'},
             {'q': 'Scientific racism\'s (skull measurement, racial classification) relationship to Social Darwinism demonstrates:',
              'correct': 'Academic disciplines can produce pseudo-scientific frameworks that legitimize existing power relationships by giving them the authority of empirical science — racial scientists\' measurements and classifications provided Social Darwinism with academic credentials that made racial hierarchy seem empirically proven rather than ideologically constructed, demonstrating that scientific institutions are not immune to ideological distortion',
              'others': ['Scientific racism was genuinely objective scholarship that happened to support racial hierarchy', 'The academic community uniformly rejected scientific racism with no legitimate scholarly support', 'Scientific racism was entirely separate from Social Darwinism with no theoretical connections'],
              'exp': 'Science serving power is AP\'s critical epistemology: 19th-century "racial scientists" (Samuel Morton, Francis Galton, Paul Broca) measured skulls, catalogued physical features, and administered intelligence tests that systematically produced rankings with European races at the top. These studies were accepted by respected scientific institutions (Royal Society, American scientific journals) and cited as empirical evidence for racial hierarchy. The problem wasn\'t individual fraud but that the research questions (which race is superior?) and methodologies were designed to confirm pre-existing conclusions — demonstrating that science embedded in ideological frameworks produces ideologically determined results.'},
             {'q': 'The eugenics movement (applying Social Darwinism to human reproduction) is historically significant because:',
              'correct': 'It demonstrates how Social Darwinist ideas, once institutionalized in policy, could lead to systematic violations of human rights — eugenics programs in the United States (forced sterilizations), Britain, Germany, and Scandinavia were based on Social Darwinist assumptions about racial fitness and provided the ideological foundation for 20th-century genocidal policies that explicitly invoked evolutionary racial hierarchy',
              'others': ['Eugenics was a minor fringe movement with no practical policy consequences', 'Eugenics was widely rejected by scientists and had no implementation in any country', 'The eugenics movement was completely separate from Social Darwinism with no intellectual connection'],
              'exp': 'The eugenics-genocide connection is AP\'s most important long-term consequence of Social Darwinism: eugenics was not a fringe phenomenon — it was mainstream science and policy in the early 20th century. The United States had forced sterilization programs (Buck v. Bell, Supreme Court upheld, 1927); Sweden sterilized 63,000 people 1935-1975; Britain\'s Eugenics Education Society included prominent intellectuals. Nazi Germany\'s racial policies drew explicitly on eugenics theory and American precedent. The path from Darwin (biology) → Spencer (social competition) → Galton (eugenics) → Nazi racial policy is not inevitable but represents a coherent logical development that AP students must understand.'},
             {'q': 'Comparing Social Darwinism\'s function in justifying industrial inequality and imperial conquest reveals:',
              'correct': 'Both applications used the same ideological mechanism — naturalizing historically specific power relationships (industrial capitalism\'s class structure; European military dominance) as the inevitable outcome of biological competition, making them seem permanent natural facts rather than contingent historical arrangements that could be changed through political action',
              'others': ['Social Darwinism justified imperialism but had no application to domestic industrial inequality', 'Social Darwinism justified inequality at home but opposed colonial conquest', 'The two applications used entirely different ideological arguments with no common mechanism'],
              'exp': 'Identical ideological mechanism in different contexts is AP\'s pattern recognition: Social Darwinism\'s core move — converting historical outcomes into natural law — worked identically in both contexts. Industrial wealth inequality (result of specific historical conditions: industrial revolution, property law, capital accumulation) was naturalized as biological superiority of the wealthy. Colonial conquest (result of industrial military technology, state organization, geographic advantages) was naturalized as racial superiority of Europeans. Both made historically contingent arrangements seem permanently fixed by nature — making them resistant to political challenge.'},
             {'q': 'The logical contradiction at the heart of Social Darwinism was:',
              'correct': 'It was circular reasoning — defining "fitness" as whatever produces survival or dominance, then using dominance as proof of fitness: Europeans are dominant because they\'re "fit"; we know they\'re "fit" because they\'re dominant — a tautology that could not be tested or falsified because its key term ("fitness") had no independent meaning beyond the outcomes it was supposed to explain',
              'others': ['Social Darwinism\'s primary logical flaw was misunderstanding Darwin\'s biological mechanisms', 'The theory was logically sound but empirically wrong about racial hierarchies', 'Social Darwinism was scientifically valid — its problems were only ethical, not logical'],
              'exp': 'Circular reasoning is AP\'s logical critique of Social Darwinism: "Natural selection" in Darwin\'s biology had a specific meaning (differential reproduction rates due to environmental pressures on inherited variation). When Spencer applied this to human social success, he defined fitness as "ability to survive in social competition" — which is just saying "successful people are successful." The circular logic was: why are Europeans dominant? Because they\'re "fit." How do we know they\'re "fit"? Because they\'re dominant. This circularity meant Social Darwinism could never be empirically falsified — any outcome could be explained as the "fittest" outcome.'},
             {'q': 'Andrew Carnegie\'s "Gospel of Wealth" (1889) applied Social Darwinist ideas to argue:',
              'correct': 'That concentrated industrial wealth was the natural product of competitive fitness and should be accepted rather than redistributed — but that wealthy men had a stewardship obligation to use their fortunes for social benefit through philanthropy, reconciling Social Darwinism\'s acceptance of inequality with a moral framework that maintained elite social control over how wealth was distributed',
              'others': ['Carnegie\'s Gospel of Wealth demanded wealth redistribution through progressive taxation', 'Carnegie rejected Social Darwinism and argued that wealth should be divided equally among workers', 'The Gospel of Wealth had no Social Darwinist dimension — it was purely religious'],
              'exp': 'Carnegie\'s philanthropic Social Darwinism is AP\'s evidence for how Social Darwinist ideas adapted to maintain elite legitimacy: Carnegie accepted Spencer\'s argument that his wealth was the product of superior competitive fitness (justified inequality); but he added that the "fit" wealthy had a social obligation to use their wealth wisely for community benefit through libraries, universities, and cultural institutions (rather than simply consuming it). This preserved wealth concentration while providing justification for elite social leadership — a sophisticated ideological position that combined acceptance of inequality with a theory of elite social responsibility.'},
             {'q': 'For AP, Social Darwinism\'s most significant historical consequence was:',
              'correct': 'It provided a scientific-sounding ideological framework that simultaneously justified industrial capitalism\'s inequalities domestically and colonial conquest internationally, making historically contingent arrangements of power seem to be natural law — and its institutional embodiment in eugenics programs demonstrated how ideological misuse of science could produce systematic human rights violations',
              'others': ['Social Darwinism had no practical policy consequences — it was purely theoretical', 'Its most significant consequence was its contribution to evolutionary biology as a science', 'Social Darwinism was quickly rejected by all major thinkers with no lasting influence'],
              'exp': 'Multi-domain consequences for AP synthesis: Social Darwinism operated across economic (justifying inequality), political (justifying colonialism), and scientific (legitimizing eugenics) domains simultaneously. Its significance was not just that it justified bad things, but that it did so through the authority of science — the most prestigious knowledge form in the 19th century. When inequality was justified by revealed religion, it could be challenged through competing religious interpretations. When justified by "science," it required empirical refutation — a harder task that took decades of scientific work to accomplish.'}
         ],
         dl=['Herbert Spencer\'s phrase applying evolutionary competition to human societies was ___',
             'The movement applying Social Darwinism to human reproduction (encouraging "fit" and discouraging "unfit" reproduction) was ___',
             'Andrew Carnegie\'s 1889 essay arguing that wealthy industrialists had a philanthropic stewardship obligation was ___'],
         do_=[['Survival of the fittest', 'Natural selection', 'Social evolution', 'Racial progress'],
              ['Eugenics', 'Social Darwinism', 'Scientific racism', 'Racial hygiene'],
              ['The Gospel of Wealth', 'The Wealth of Nations', 'The Communist Manifesto', 'The Protestant Ethic']],
         dc=['Survival of the fittest', 'Eugenics', 'The Gospel of Wealth'],
         hints=['Spencer not Darwin — competition among humans — wealthy survive because biologically superior', 'Francis Galton — human reproduction selective breeding — fit encouraged unfit discouraged — 20th century policy consequences', 'Carnegie 1889 — concentrated wealth natural — stewardship obligation — philanthropy — libraries universities'],
         dexp='"Survival of the fittest" is Spencer\'s Social Darwinist framework; eugenics is the institutional policy application that demonstrated its dangerous consequences; and the Gospel of Wealth is the philanthropic adaptation that reconciled Social Darwinism with elite social responsibility — together they demonstrate how Social Darwinism functioned across theoretical, policy, and practical domains.'
    ),
    dict(pnum=4, id_pre='whci4',
         subtitle='Global Migration Patterns',
         key='Industrialization and imperialism together produced the largest human migrations in world history (1850-1914). AP questions analyze the "push and pull" factors driving migration, compare voluntary (European to Americas) and coerced (indentured labor) migration, and evaluate how migrants maintained cultural identity while adapting to new environments.',
         body='''## 📖 Global Migration Patterns

> **Scale of 19th-Century Migration**

- Approximately 60 million people left Europe for the Americas, Australia, and South Africa (1850-1914)
- Largest single migration stream: Ireland → USA (famine migration 1845-52); later Southern and Eastern European migration
- Chinese migrants: Southeast Asia, California, Australian goldfields, Caribbean, South Africa
- Indian migrants: Caribbean (Trinidad, Guyana), South Africa, East Africa, Fiji, Mauritius — mostly as indentured laborers

> **Push Factors (Why People Left)**

| Push Factor | Examples |
|------------|---------|
| **Famine** | Irish Potato Famine (1845-52): 1 million dead; 1 million emigrated |
| **Agricultural displacement** | Enclosure; mechanization displaced agricultural workers |
| **Political persecution** | Jews fleeing Russian pogroms; German liberals after 1848 |
| **Poverty** | Italian, Greek, Polish peasants; no land; no economic opportunity |
| **Overpopulation** | Population growth exceeding agricultural land capacity |

> **Pull Factors (Why People Went Where They Did)**

| Pull Factor | Example |
|------------|---------|
| **Land** | American frontier; Australian farms; Argentine Pampas |
| **Wages** | Industrial jobs in USA, Argentina, Australia paid more than home countries |
| **Freedom** | Political freedom; religious freedom; escape from discrimination |
| **Chain migration** | Earlier migrants wrote back; communities formed; networks facilitated follow-on migration |

> **Indentured Labor Migration**

After slavery\'s abolition (British Empire 1833), plantation owners needed labor:
- **System:** Indentured workers contracted for 5-10 years; passage paid; technically free after contract; in practice, often trapped by debt
- **Origins:** Mainly India (1.5 million); also China, Pacific Islands, Africa
- **Destinations:** Trinidad, British Guiana, Natal (South Africa), Fiji, Mauritius, East Africa
- **Conditions:** Some called "a new system of slavery" — similar coercive conditions despite technical legal difference

> **Cultural Consequences**

- **Diaspora communities:** Chinese, Indian, Jewish, Italian, Irish communities in destination countries
- **Cultural preservation:** Maintained home language, religion, food, community organizations
- **Cultural adaptation:** Learned new languages, adapted to new environments, developed hyphenated identities
- **Discrimination:** Migrants often faced racial discrimination (Chinese Exclusion Act, USA 1882; anti-Indian laws in South Africa)''',
         qs=[
             {'q': 'The Irish Potato Famine (1845-52) migration demonstrates which AP principle about push-pull migration?',
              'correct': 'Catastrophic famine was a push factor that transformed emigration from a choice to a survival necessity for millions — British colonial policy that continued Irish grain exports during the famine while Irish people starved demonstrates that push factors are often not purely natural disasters but the interaction of natural conditions with colonial political-economic arrangements that determined who received food',
              'others': ['The Irish Potato Famine was entirely a natural disaster with no political-economic dimension', 'British policy improved food distribution during the famine, reducing emigration pressure', 'The famine migration was primarily driven by pull factors in the United States, not push factors in Ireland'],
              'exp': 'Natural + political push factors is AP\'s analysis: the famine was not simply a natural disaster (potato blight) but a political-economic catastrophe. Ireland exported grain throughout the famine while people starved — because grain was property of British landlords who could sell at market prices regardless of local food shortages. British Poor Law policy was inadequate. The result: 1 million dead of starvation/disease; 1 million more emigrated during the famine (1845-52), followed by another 3 million over the next decades. Understanding push factors requires understanding how political-economic arrangements interact with natural conditions.'},
             {'q': 'Indentured labor\'s similarity to slavery despite technical legal difference demonstrates:',
              'correct': 'Legal form and actual conditions can diverge significantly — indenture contracts were technically voluntary (workers signed them) and had fixed terms (5-10 years) unlike chattel slavery, but debt bondage, physically punishing conditions, inability to leave without losing contract benefits, and employers\' coercive power meant that indentured workers\' practical experience of coercion was comparable to enslaved people\'s, despite the legal distinction',
              'others': ['Indentured labor was genuinely free — workers had full ability to leave at any time', 'The legal and practical differences between indenture and slavery were equally significant', 'Indentured workers chose their destinations and working conditions freely'],
              'exp': 'Legal vs. practical freedom is AP\'s framework for analyzing coerced labor systems: the formal legal distinction (indenture = contract; slavery = property) was real but insufficient to describe workers\' actual experiences. Workers who had borrowed money for their passage and owed money for food and tools on the plantation could not leave without defaulting on debts that would be legally enforced. The "contract" was often signed under conditions of desperation in India with inadequate information about actual conditions. Contemporary critics called it "a new system of slavery" — a characterization that AP requires students to evaluate carefully rather than either accepting or rejecting wholesale.'},
             {'q': 'The Chinese Exclusion Act (USA, 1882) in response to Chinese migration demonstrates:',
              'correct': 'That migration generated nativist political responses in destination countries — Chinese migrants in California were economically competitive (accepted lower wages; worked in mining, railroad construction) which generated resentment among white workers who successfully lobbied for legislation specifically excluding Chinese immigration, demonstrating that economic competition translated into racial discrimination policy',
              'others': ['The Chinese Exclusion Act was passed for cultural reasons with no economic motivation', 'Chinese migrants faced no significant discrimination in the United States', 'The Act applied to all Asian migration equally, not specifically Chinese'],
              'exp': 'Economic competition → racial discrimination policy is AP\'s causal analysis: Chinese migrants in California (came for the 1849 Gold Rush; stayed for railroad construction, laundry, agriculture) competed for jobs with white workers, particularly after 1870s economic depression reduced employment. The California Workingmen\'s Party (led by Denis Kearney, himself an Irish immigrant) organized labor opposition to Chinese competition under the slogan "The Chinese Must Go." This political pressure produced the Chinese Exclusion Act (1882) — the first US law to specifically exclude a racial/ethnic group from immigration, demonstrating that economic competition produced racial discrimination expressed through democratic political processes.'},
             {'q': 'Chain migration (earlier migrants writing back to facilitate follow-on migration) demonstrates:',
              'correct': 'Migration was not a collection of individual decisions but a social process driven by information networks, community formation, and community support systems — once an initial community formed in a destination (Little Italy in New York; Chinatown in San Francisco), subsequent migrants had specific information about opportunities, community support on arrival, established employers, and social networks that reduced the risks of migration',
              'others': ['Migration decisions were made entirely by individuals without information from previous migrants', 'Chain migration only occurred among European migrants — non-European migrants had no comparable networks', 'Information from earlier migrants was so unreliable that it rarely influenced subsequent migration decisions'],
              'exp': 'Social network analysis of migration is AP\'s framework: demographic studies of 19th-century migration consistently show that migrants from specific Italian villages, specific Polish towns, or specific Chinese counties concentrated in specific American, Australian, or South African cities — because early migrants from those villages went to those destinations, wrote home, and subsequent migrants followed. The social network reduced both the uncertainty and the costs of migration, making it accessible to people who could not afford the risk of complete uncertainty. Chain migration is evidence that migration was a community-level social process.'},
             {'q': 'Comparing European voluntary migration and Indian/Chinese indentured labor migration reveals:',
              'correct': 'Both moved people from areas of labor surplus to areas of labor demand, but under fundamentally different conditions of freedom and coercion — European migrants were legally free to choose destinations and leave employment; indentured workers were contractually bound for years under threat of legal penalties, creating two different labor markets: one of free migration; one of controlled, semi-coerced labor',
              'others': ['European migration was more coerced than indentured labor because of poverty in sending regions', 'Indentured workers had more freedom than European migrants because their passages were paid', 'Both migration types occurred under identical conditions of freedom'],
              'exp': 'Freedom spectrum in migration is AP\'s comparative framework: even "voluntary" European migration involved significant constraints (poverty; discrimination; limited options), but the legal distinction between choosing to leave (European) and being contractually bound for 5-10 years under threat of criminal penalties for breach (indentured) was meaningful. European migrants in Australia or Argentina could quit jobs, move cities, change occupations; indentured workers in Trinidad or Fiji who left their plantation faced legal prosecution. The degree of freedom in the labor market distinguishes the two migration streams despite superficial similarities (both involved people leaving home countries for economic reasons).'},
             {'q': 'The cultural consequences of 19th-century migration for diaspora communities demonstrate:',
              'correct': 'Migration produced hybrid cultural identities — diaspora communities maintained connections to home cultures (language, religion, food, community organizations) while necessarily adapting to new environments (learning new languages, developing economic strategies for new contexts) — creating hyphenated identities (Irish-American; Indian-South African; Chinese-Peruvian) that were neither fully home culture nor fully destination culture',
              'others': ['Migrants immediately and completely assimilated to destination culture with no preservation of home culture', 'Migrants completely preserved home culture with no adaptation to destination environments', 'Cultural hybridity only occurred among European migrants — non-European migrants either assimilated completely or were completely excluded'],
              'exp': 'Hybrid cultural identity is AP\'s analytical framework: migration communities consistently demonstrate both preservation and adaptation. Irish Americans maintained Catholic churches, Gaelic culture organizations, and Democratic Party loyalty while becoming American workers, politicians, and eventually members of the middle class. Chinese communities in San Francisco maintained Chinatown institutions (Six Companies, tongs, Chinese-language newspapers) while developing English-speaking professional classes. The hybridity is not inconsistency but the creative development of cultural forms appropriate to diasporic conditions — belonging to two cultural contexts simultaneously.'},
             {'q': 'For AP, 19th-century global migration\'s most significant consequence was:',
              'correct': 'The creation of globally distributed diaspora communities that maintained transnational connections — Irish Americans influencing Irish politics; Chinese diaspora funding nationalist movements in China; Indian diaspora in South Africa providing the context for Gandhi\'s development of civil disobedience tactics — demonstrating that migration produced politically significant transnational communities, not just economic labor transfers',
              'others': ['Migration had only economic consequences with no political significance', 'Diaspora communities had no connections to their countries of origin after migration', '19th-century migration was insignificant — major human migration only began in the 20th century'],
              'exp': 'Transnational political consequences are AP\'s synthesis: the Irish diaspora in America funded the Fenian movement (Irish nationalism); Chinese diaspora in Southeast Asia funded Sun Yat-sen\'s revolution against the Qing Dynasty; Mohandas Gandhi developed his satyagraha (civil disobedience) tactics in South Africa working with the Indian diaspora there before applying them in India. Diaspora communities didn\'t just preserve culture — they maintained political connections with home countries and used diaspora resources (money, political connections in new countries) to influence political developments in their places of origin.'}
         ],
         dl=['The 1882 U.S. law excluding Chinese from immigration, the first to target a specific racial/ethnic group, was ___',
             'The labor system replacing slavery in British colonies after 1833, using contracted workers from India and China, was ___',
             'The Irish catastrophe (1845-52) that sent 1 million emigrants to the USA was ___'],
         do_=[['The Chinese Exclusion Act', 'The Immigration Restriction Act', 'The Asian Exclusion Law', 'The Pacific Immigration Act'],
              ['Indentured labor', 'Contract labor', 'Bonded servitude', 'Coolie labor'],
              ['The Irish Potato Famine', 'The Irish Agricultural Crisis', 'The British Blockade', 'The Irish Land War']],
         dc=['The Chinese Exclusion Act', 'Indentured labor', 'The Irish Potato Famine'],
         hints=['USA 1882 — specifically excluded Chinese — first racial exclusion — California labor competition nativism', 'Post-1833 British colonies — India China Pacific Islands — 5-10 year contracts — technically free — practically coercive', 'Ireland 1845-52 — potato blight — 1 million dead — 1 million emigrated — British grain exports continued during famine'],
         dexp='The Chinese Exclusion Act demonstrates how migration generated discriminatory political responses; indentured labor demonstrates the coerced migration system that replaced slavery; and the Irish Potato Famine demonstrates how natural disasters combined with colonial political-economic arrangements to create mass migration — together they cover the range of migration types and responses AP requires.'
    ),
    dict(pnum=5, id_pre='whci5',
         subtitle='Rise of the Middle Class and Consumer Culture',
         key='Industrialization created a new middle class (bourgeoisie) of professionals, managers, shopkeepers, and skilled workers whose values — thrift, respectability, domesticity, and self-improvement — became culturally dominant in the 19th century. AP questions analyze middle-class values as both reflections of and justifications for capitalist industrial society, and examine how consumer culture began to reshape social life.',
         body='''## 📖 Rise of the Middle Class

> **Who Was the Middle Class?**

The 19th-century middle class was not homogeneous:

| Group | Examples | Income | Cultural Position |
|-------|---------|--------|-----------------|
| **Upper middle class** | Successful merchants, manufacturers, bankers, lawyers | High; approaching elite | Aspired to aristocratic lifestyle |
| **Middle middle class** | Professionals (doctors, engineers, teachers), managers | Comfortable | Core "Victorian values" |
| **Lower middle class** | Shopkeepers, clerks, skilled artisans | Modest | Aspirational; separated from working class by culture |

> **Middle-Class Values ("Victorian Values" in Britain)**

- **Respectability:** Dress, manners, home furnishings as markers of social status
- **Domesticity:** "Separate spheres" — men in public/commercial world; women as moral guardians of private/home sphere
- **Thrift and self-improvement:** Samuel Smiles\' "Self-Help" (1859) — success comes from individual effort; poverty reflects personal failure
- **Religion:** Christianity as moral foundation; Sunday church-going as social ritual
- **Education:** Investment in children\'s education as path to social advancement

> **Women and the "Separate Spheres" Ideology**

- Middle-class women were expected to manage the domestic sphere: household, children, social calendar
- Working was considered improper for middle-class women (though working-class women worked in factories)
- **Contradiction:** Growing clerical and teaching jobs employed middle-class women; by late 19th century, women entering professions in limited numbers
- **Women\'s suffrage movement:** Grew partly from middle-class women who were educated but denied political voice

> **Consumer Culture**

Industrialization produced new consumer goods and distribution systems:
- **Department stores:** Bon Marché (Paris, 1852); Macy\'s (New York, 1858) — selling manufactured goods to middle-class consumers
- **Mass advertising:** Newspapers, posters, eventually magazines promoted consumer goods
- **Leisure:** Theater, sports (football, cricket, horse racing), music halls — commercialized leisure for middle class
- **Fashion:** Ready-made clothing replaced bespoke; fashion cycles accelerated with industrial production

> **AP Significance**

Middle-class culture both reflected and reinforced industrial capitalism:
- Individual success/failure (not class structure) explains outcomes → justified capitalism
- Domesticity ideology prescribed women\'s place → maintained cheap female labor reserve
- Consumer culture generated demand → sustained industrial production''',
         qs=[
             {'q': 'The "separate spheres" ideology (men in public; women in domestic) served what economic function in industrial capitalism?',
              'correct': 'It provided unpaid domestic labor (child-rearing, household management, maintenance of the male worker\'s capacity to work) that was economically necessary to industrial capitalism but externalized from wages — by defining domestic work as women\'s natural expression rather than economic labor, it maintained a system where half the population performed economically necessary work without being counted as workers or receiving wages',
              'others': ['Separate spheres was a purely cultural ideology with no economic function', 'Separate spheres increased women\'s economic power by giving them control over domestic resources', 'The ideology was implemented only among the aristocracy with no impact on middle-class economics'],
              'exp': 'Unpaid domestic labor as economic subsidy is AP\'s feminist economic analysis: industrial capitalism required male workers to be at the factory; male workers required food, clean clothing, children raised to become future workers. Someone had to perform this reproductive labor — domestic management, child-rearing, household maintenance. By defining this as women\'s natural "calling" rather than work, the system obtained this labor without wages. The separate spheres ideology thus served an economic function: it naturalized the extraction of domestic reproductive labor from women under the guise of gender roles, reducing employers\' wage costs by shifting reproductive labor costs to families.'},
             {'q': 'Samuel Smiles\' "Self-Help" (1859) and its enormous popularity demonstrates:',
              'correct': 'Middle-class ideology in industrial capitalism attributed success and failure entirely to individual effort and character rather than structural conditions — by arguing that diligent individuals always succeed and that poverty reflects personal failure (insufficient effort, thrift, or respectability), Self-Help legitimized industrial inequality as the natural outcome of individual merit, making structural critique of capitalism seem irrelevant',
              'others': ['Self-Help argued for government programs to address industrial poverty', 'The book explicitly acknowledged that structural conditions limited individual opportunity', 'Self-Help\'s popularity indicated that most people rejected the self-help ideology'],
              'exp': 'Individualist ideology naturalizing structural inequality is AP\'s analysis: "Self-Help" sold 250,000 copies in Britain by Smiles\' death; was translated into 12 languages. Its core argument — that individual character (thrift, diligence, perseverance) determines outcomes — provided a middle-class moral framework that simultaneously celebrated successful middle-class people (their success reflects their character) and condemned poor working-class people (their poverty reflects their character). The structural conditions of industrial capitalism — who owns capital, how wages are set, what educational access exists — are irrelevant in this framework. This is exactly what made it ideologically useful to the capitalist order.'},
             {'q': 'The development of department stores (Bon Marché, Macy\'s) represents:',
              'correct': 'A new commercial infrastructure connecting industrial mass production to consumer demand — department stores assembled manufactured goods from many industries under one roof, used advertising and display to stimulate demand for products people didn\'t know they wanted, extended credit to enable purchases beyond immediate income, and created shopping as a respectable middle-class leisure activity rather than a necessary transaction',
              'others': ['Department stores were simply larger versions of existing retail shops with no new business model', 'Department stores served only upper-class consumers with no middle-class market', 'Department stores replaced all previous retail forms immediately upon their creation'],
              'exp': 'Department store as industrial capitalism\'s consumer infrastructure is AP\'s analysis: the department store was a new type of commercial institution designed to match industrial mass production with consumer purchasing. Fixed prices (replacing haggling), clear product display, return policies, advertising campaigns, credit systems — all innovations of the department store — were designed to make purchasing smooth and desirable. The creation of "shopping" as an activity (not just buying necessary things) is an industrial-era invention; department stores were its institutional expression.'},
             {'q': 'The 19th-century middle class\'s investment in children\'s education as social mobility strategy demonstrates:',
              'correct': 'Industrial capitalism shifted the primary mechanism of status reproduction from land inheritance (aristocratic) to credential accumulation (middle-class) — when industrial success required technical knowledge, professional training, and administrative skill, education became the means by which families transmitted class status to the next generation, creating a new relationship between family investment and social reproduction',
              'others': ['Education had no connection to social mobility — birth determined status regardless of education', 'Aristocratic families were the first to invest heavily in children\'s education', 'Middle-class educational investment was primarily humanitarian rather than social mobility-motivated'],
              'exp': 'Credential replacement of inheritance is AP\'s analysis of middle-class status reproduction: aristocratic families reproduced status through land inheritance (estates passed to eldest son). But industrial capitalism\'s demand for engineers, lawyers, doctors, managers, and accountants created a pathway where educated individuals without land could achieve comfortable incomes. Middle-class families who could not pass land to children invested instead in education — private schools, university, professional training — that qualified children for well-paid professional positions. Education as investment in social reproduction replaced land as investment in status reproduction.'},
             {'q': 'Women\'s increasing participation in paid employment (clerical work, teaching) despite "separate spheres" ideology demonstrates:',
              'correct': 'Ideological prescriptions and material reality diverged as industrial economy created jobs (teaching, clerical work, nursing) considered compatible with femininity while industrial families increasingly needed second incomes — demonstrating that "separate spheres" was a cultural ideal that specific economic pressures eroded in practice, while the ideal remained normative (respectable women shouldn\'t work)',
              'others': ['Women\'s paid employment was consistent with separate spheres ideology from the beginning', 'No middle-class women worked in paid employment throughout the 19th century', 'Women\'s employment expansion was completely accepted with no ideological conflict'],
              'exp': 'Ideology vs. material reality is AP\'s analytical framework: the invention of the typewriter (1870s) and expansion of clerical work created demand for cheap literate labor — and educated middle-class women were available and cheaper than men. School teaching was similarly feminized — women could be paid less than men for the same work. These material realities pushed women into paid employment despite cultural prescription against it. The ideological response was to define these jobs as appropriate extensions of feminine domesticity (teachers as surrogate mothers; nurses as caring women) — adapting the ideology to accommodate material necessity rather than abandoning it.'},
             {'q': 'Comparing middle-class culture in industrial Britain to aristocratic culture reveals:',
              'correct': 'Both social groups developed cultural codes that served to distinguish their class — aristocrats used birth, land, and inherited cultural capital as markers of status; middle class used education, professional achievement, domestic respectability, and consumer goods as markers of status — demonstrating that cultural codes are not random but systematically connected to the material basis of each class\'s position',
              'others': ['Middle-class and aristocratic cultures were identical because Britain had no class differences', 'Middle-class culture explicitly rejected all cultural distinction as anti-democratic', 'Aristocratic culture had no economic function — it was purely aesthetic'],
              'exp': 'Class culture as economic position reflection is AP\'s sociological analysis: Pierre Bourdieu\'s concept of "cultural capital" (though anachronistic for AP) captures the AP point: aristocratic cultural codes (appropriate behavior at hunt, correct wine knowledge, aristocratic accent) were not random but reflected and reinforced the aristocratic position based on inherited land wealth. Middle-class cultural codes (Sunday church, educational investment, domestic respectability) reflected and reinforced the middle-class position based on professional credentials and commercial success. Cultural codes are not arbitrary but systematically connected to the material basis of class power.'},
             {'q': 'For AP, the middle class\'s emergence as the culturally dominant class in 19th-century industrial societies was significant because:',
              'correct': 'Middle-class values (individual merit, thrift, self-improvement, domesticity) became hegemonic — presented as universal human values rather than class-specific cultural preferences — making them the standard against which other classes\' cultures were measured and found deficient, naturalizing industrial capitalism\'s class structure by making middle-class culture seem like universal human aspiration rather than the culture of a specific class at a specific historical moment',
              'others': ['Middle-class culture was recognized as class-specific by all social groups with no hegemonic claims', 'The working class uniformly adopted middle-class values without resistance', 'Middle-class values had no connection to industrial capitalism\'s economic structures'],
              'exp': 'Hegemony of middle-class values is AP\'s Gramscian synthesis: cultural hegemony doesn\'t require force — it works by making one class\'s values seem like everyone\'s values. When "self-help," "respectability," and "individual merit" are presented as universal human virtues (not middle-class ideological preferences), working-class people who internalize these values will blame themselves for poverty (insufficient self-help) rather than blaming capitalism\'s structure. This is the ideological function of middle-class culture — it made industrial capitalism\'s inequality seem natural by making the middle-class cultural framework seem like universal moral truth.'}
         ],
         dl=['Samuel Smiles\' 1859 book arguing that individual character determines success or failure was ___',
             'The ideology that men belonged in the public commercial sphere while women belonged in the domestic home sphere was ___',
             'The first great modern department store, opened in Paris in 1852, pioneering mass retail for middle-class consumers was ___'],
         do_=[['Self-Help', 'The Protestant Ethic', 'Wealth of Nations', 'The Communist Manifesto'],
              ['Separate spheres', 'Social Darwinism', 'Domesticity ideology', 'Victorian values'],
              ['Bon Marché', 'Macy\'s', 'Harrods', 'Selfridges']],
         dc=['Self-Help', 'Separate spheres', 'Bon Marché'],
         hints=['Smiles 1859 — 250,000 copies — individual effort determines success — poverty reflects character failure', 'Men public commercial sphere — women domestic home sphere — middle class Victorian ideology — women\'s suffrage response', 'Paris 1852 — first department store — mass manufactured goods — middle class consumers — shopping as leisure'],
         dexp='"Self-Help" is the ideological text that demonstrates middle-class individualism; separate spheres is the gender ideology that organized middle-class domestic life and served economic functions; and the Bon Marché demonstrates the new consumer infrastructure that middle-class purchasing power created — together they reveal the cultural, gendered, and commercial dimensions of middle-class formation.'
    ),
    dict(pnum=6, id_pre='whci6',
         subtitle='Environmental and Demographic Consequences',
         key='Industrialization produced unprecedented environmental changes (air and water pollution, deforestation, resource depletion) and demographic transformations (urbanization, population growth, changing disease patterns). AP questions analyze how industrialization altered the human relationship with the natural environment and evaluate its demographic consequences.',
         body='''## 📖 Environmental and Demographic Consequences

> **Environmental Consequences of Industrialization**

| Change | Mechanism | Scale |
|-------|----------|-------|
| **Air pollution** | Coal burning in factories and homes | London\'s "Great Stink" (1858); industrial smog; acid rain |
| **Water pollution** | Industrial waste in rivers; urban sewage | Thames cholera (1854); industrial rivers biologically dead |
| **Deforestation** | Timber for fuel, construction, railroad ties | British deforestation nearly complete; global timber trade |
| **Coal extraction** | Underground mining; landscape disruption | Entire regions (South Wales, Ruhr Valley, Pennsylvania) transformed |
| **Resource extraction** | Iron, copper, tin, lead mining worldwide | Colonized territories mined for metropolitan industrial use |

> **Urban Environmental Problems**

Industrial cities created unprecedented urban environmental crises:
- **London\'s "Great Stink" (1858):** Thames River became open sewer; human waste, industrial waste; cholera epidemics
- **Urban air:** "Pea-soup" fogs — coal smoke + Thames fog; respiratory diseases; children\'s mortality
- **Water supply:** Contaminated groundwater; cholera traced to contaminated water pumps (John Snow, 1854)
- **Overcrowding:** Rapid urbanization faster than housing construction → slums; disease transmission

> **Demographic Consequences**

Despite terrible urban conditions, population grew dramatically:

- **Britain:** 8.9 million (1801) → 40.8 million (1911) — 4.5× growth
- **Global population:** 900 million (1800) → 1.6 billion (1900) → 2.5 billion (1950)
- **Mechanism:** Agricultural improvements (nitrogen fertilizers) + vaccines + medical advances (germ theory, sanitation reform) reduced mortality faster than birth rates declined

> **The Demographic Transition**

- **Stage 1:** High birth rates, high death rates — slow growth (pre-industrial)
- **Stage 2:** High birth rates, declining death rates — rapid growth (early industrial)
- **Stage 3:** Declining birth rates, low death rates — slow growth (industrial maturity)
- **AP significance:** Industrial nations transitioned from Stage 1 to Stage 3; colonial regions moved to Stage 2 (death rates fell from improved food and medicine) without reaching Stage 3 → population growth in global south

> **Public Health Reform**

- **Miasma theory → Germ theory:** Initial belief that disease came from bad air; germ theory (Pasteur, Koch) correctly identified bacteria; revolutionized medicine
- **Sewage systems:** London sewers (Bazalgette, 1858-75) built after Great Stink; dramatically reduced cholera
- **Clean water acts:** Legislation requiring municipal water treatment
- **Vaccination:** Smallpox vaccine; later other diseases; dramatically reduced mortality''',
         qs=[
             {'q': 'John Snow\'s mapping of the 1854 London cholera outbreak to a contaminated water pump demonstrates:',
              'correct': 'Empirical epidemiological methods (mapping disease cases; identifying common sources) could identify disease causation before the underlying germ theory was established — Snow\'s spatial analysis proving water contamination caused cholera was a landmark in public health methodology that demonstrated the power of environmental intervention (removing the pump handle) to control disease without understanding its exact biological mechanism',
              'others': ['Snow\'s investigation confirmed that miasma (bad air) caused cholera, not water contamination', 'Snow\'s methods were immediately accepted by the medical community and rapidly implemented', 'The cholera outbreak was resolved by medical treatment rather than environmental intervention'],
              'exp': 'Empirical method without complete theory is AP\'s scientific history point: Snow identified the Broad Street water pump as the cholera source by mapping cases — a majority of victims had used that pump. He persuaded authorities to remove the pump handle; cholera cases dropped. This happened before Louis Pasteur\'s germ theory was fully established (1860s). Snow\'s achievement was demonstrating that empirical mapping could identify causation and guide effective intervention even before the underlying biological mechanism was understood. It established the environmental/epidemiological approach to public health that later became standard.'},
             {'q': 'The "demographic transition" model\'s application to industrializing countries demonstrates:',
              'correct': 'Population growth was not a constant feature of human history but a specific product of the transitional phase when mortality rates declined (through improved nutrition, sanitation, medicine) faster than birth rates declined — demonstrating that population dynamics are responses to specific material conditions (food availability, disease environment, economic incentives for large families) rather than fixed biological constants',
              'others': ['Population growth rates were constant throughout human history', 'Birth rates always declined at the same rate as death rates, maintaining constant population', 'Population growth only occurred in already industrialized nations'],
              'exp': 'Material conditions → demographic behavior is AP\'s analytical framework: the demographic transition model explains why population grew rapidly during industrialization. Pre-industrial: both birth and death rates high; equilibrium. Early industrial: death rates fall (better food, medicine, sanitation); birth rates remain high (children still economically valuable on farms, no contraception, cultural norms for large families); net result: rapid population growth. Late industrial: birth rates fall as children become economic costs in urban settings; stabilization. The model predicts different demographic dynamics for different development stages.'},
             {'q': 'The construction of London\'s sewage system (1858-1875) in response to the "Great Stink" demonstrates:',
              'correct': 'State intervention in environmental management became necessary when industrial urbanization created environmental crises that the market could not resolve — the Thames\'s transformation into an open sewer was a market failure (no individual had incentive or capacity to build a citywide sewage system); only government action (Bazalgette\'s Metropolitan Board of Works) could implement the coordinated engineering solution at scale',
              'others': ['London\'s sewage system was built by private companies responding to market demand', 'Individual households resolved the Thames pollution problem through voluntary action', 'The Great Stink was resolved through medical treatment rather than environmental engineering'],
              'exp': 'State environmental intervention as response to market failure is AP\'s political economy analysis: cholera epidemics (1831, 1848-49, 1854) had killed thousands, but private solutions were impossible — effective sewage treatment required city-wide infrastructure connecting every property to a treatment system that discharged downstream of water intakes. No private company would build this (too large, benefits non-excludable). Parliament\'s action during the Great Stink of 1858 (when summer heat made the Thames unbearable near Parliament itself) funded Bazalgette\'s sewage system. The political lesson: environmental externalities from industrialization required state intervention that the market could not provide.'},
             {'q': 'Industrialization\'s environmental consequences in colonized territories differed from those in industrialized nations because:',
              'correct': 'Environmental degradation in colonies served metropolitan industrial needs rather than local development — Congo rubber extraction deforested Congo; Bolivian silver mines poisoned local water; Indian cotton cultivation depleted soil — all creating environmental costs borne by colonial populations while the economic benefits (rubber, silver, cotton) accrued to European industrialists',
              'others': ['Industrial environmental impacts were identical in colonies and metropoles', 'Colonial environmental impacts were less severe than metropolitan because colonial economies were less industrial', 'Colonial peoples chose their own resource extraction patterns independently of European demand'],
              'exp': 'Environmental imperialism is AP\'s analysis of colonial environmental consequences: the environmental costs of industrial resource extraction were distributed globally and unequally. British cotton mills needed cotton → Indian cotton farming exhausted soil. Belgian factories needed rubber → Congo rubber harvesting deforested Congo Basin. Chilean copper mines needed ore → Chilean landscapes industrially scarred. The profits from these extractive activities primarily returned to European companies and consumers; the environmental costs (soil depletion, water contamination, deforestation) were borne by colonial populations. This asymmetry is "environmental imperialism."'},
             {'q': 'The germ theory revolution (Pasteur, Koch, 1860s-80s) demonstrates which AP principle?',
              'correct': 'Scientific revolutions that change fundamental paradigms (from miasma to germ theory) have immediate practical consequences for human welfare — once germ theory correctly identified bacteria as disease causation, it enabled targeted interventions (water sterilization, surgical antisepsis, specific vaccines) that dramatically reduced mortality, demonstrating that correct theoretical frameworks enable more effective practical interventions than incorrect ones',
              'others': ['Germ theory was immediately accepted by the medical community with no resistance', 'Miasma theory was just as effective as germ theory for disease prevention', 'Germ theory was important scientifically but had no practical public health consequences'],
              'exp': 'Paradigm shift → practical consequences is AP\'s history of science framework: miasma theory (disease from bad air) led to ventilation and odor-removal efforts — sometimes accidentally effective (moving people away from contaminated water sources also reduced smell). Germ theory led to antiseptic surgery (Lister), water chlorination, specific bacterial vaccines, food pasteurization. The practical death rate reduction was dramatic: surgical mortality rates fell from 40-50% to under 10% with antiseptic technique; infant mortality rates fell throughout industrial nations as germ-theory-based public health measures were implemented. Correct theory → effective intervention → measurable human welfare improvement.'},
             {'q': 'The demographic consequences of industrialization for global population created which long-term challenge?',
              'correct': 'By reducing death rates (through improved food, medicine, sanitation) in both industrialized and colonial regions before birth rates declined, industrialization produced global population growth whose geographic distribution shifted over time — industrial nations completed the demographic transition to low birth rates; former colonial regions retained high birth rates while mortality declined, producing the 20th-century population growth concentrated in Africa, Asia, and Latin America',
              'others': ['Population growth was uniformly distributed globally with no regional concentration', 'Demographic transition completed simultaneously in all world regions', 'Industrial nations maintained population growth while former colonial regions had population decline'],
              'exp': 'Differential demographic transition is AP\'s long-term analysis: industrialized nations (Britain, France, Germany, USA) went through the full demographic transition — death rates declined; then, as children became economic costs in urban industrial economies, birth rates declined; populations stabilized. Colonial and post-colonial regions experienced declining death rates (improved food, Western medicine, sanitation infrastructure) without the economic transition (urbanization, industrial employment, women\'s education) that historically produced declining birth rates. The result: 20th-century population growth concentrated in Africa, Asia, and Latin America — one of the defining geopolitical features of the post-colonial world.'},
             {'q': 'For AP, industrialization\'s environmental and demographic consequences were significant because:',
              'correct': 'They created the environmental challenges (climate change, resource depletion, pollution) and demographic pressures (global population growth, migration, urbanization) that define 21st-century global challenges — demonstrating that historical decisions about industrial organization and resource use have generational consequences that transcend the period in which they were made',
              'others': ['Environmental and demographic changes from industrialization resolved themselves within a generation with no long-term consequences', 'These consequences were entirely local to industrial nations with no global dimension', 'The environmental impacts of industrialization were less significant than its political consequences'],
              'exp': 'Long-term intergenerational consequences is AP\'s synthesis framework: 19th-century coal burning created the CO2 accumulation that drives 21st-century climate change. 19th-century demographic transition patterns created the population distribution that shapes 21st-century migration pressures. 19th-century resource extraction patterns created the commodity dependencies that shape 21st-century economic inequalities. Understanding current global challenges requires understanding their industrial-era foundations — one of AP World History\'s core analytical principles (understanding the present through the past).'}
         ],
         dl=['John Snow\'s 1854 investigation identifying contaminated water (not air) as the cause of cholera was ___',
             'The massive London engineering project (1858-1875) building a modern sewage system to clean the Thames was ___',
             'The model describing population dynamics moving from high birth/death rates to low birth/death rates as societies industrialize was ___'],
         do_=[['The Broad Street pump investigation', 'The miasma theory confirmation', 'The germ theory experiment', 'The Thames water survey'],
              ['Bazalgette\'s Metropolitan sewage system', 'The Thames Embankment Act', 'The London Clean Water Project', 'The Victorian Engineering Works'],
              ['The demographic transition model', 'The population growth theory', 'The Malthusian theory', 'The industrial population model']],
         dc=['The Broad Street pump investigation', "Bazalgette's Metropolitan sewage system", 'The demographic transition model'],
         hints=['Snow 1854 — mapped cholera cases — Broad Street pump — contaminated water not air — removed pump handle — cholera dropped', 'Bazalgette 1858-1875 — Metropolitan Board of Works — London sewers — Thames cleaned — cholera eliminated from London', 'Demographic transition — Stage 1 high birth high death — Stage 2 high birth low death growth — Stage 3 low birth low death — industrial pattern'],
         dexp='The Broad Street pump investigation demonstrates empirical epidemiology enabling environmental health intervention; Bazalgette\'s sewage system demonstrates state-directed engineering responding to market failure; and the demographic transition model provides the analytical framework for understanding how industrialization changed population dynamics — together they cover the environmental and demographic dimensions of industrialization\'s consequences.'
    ),
    dict(pnum=7, id_pre='whci7',
         subtitle='AP Review and Exam Mastery',
         key='Consequences of Industrialization content spans AP\'s c. 1750-1900 period. Key exam themes include evaluating working-class responses to industrial conditions, analyzing Social Darwinism as an ideological system, comparing voluntary and coerced migration, and assessing industrialization\'s environmental and demographic legacies.',
         body='''## 📖 AP Review: Consequences of Industrialization

> **Must-Know Vocabulary**

- **Proletariat** — Industrial working class; sells labor to capitalists; Marx\'s revolutionary class
- **Bourgeoisie** — Capitalist class owning means of production; Marxist term
- **Trade union** — Workers\' collective organization for wage and condition bargaining
- **The Communist Manifesto (1848)** — Marx and Engels; "Workers of the world, unite!"
- **Social Darwinism** — Herbert Spencer\'s application of evolution to social competition; justified inequality
- **Eugenics** — Francis Galton\'s application of Social Darwinism to reproduction; 20th-century genocidal policy foundation
- **Separate spheres** — Middle-class ideology: men in public/commercial world; women in domestic home sphere
- **Indentured labor** — Post-slavery contract labor from India/China; technically free but practically coercive
- **Demographic transition** — Model of population change from high birth/death rates to low birth/death rates with industrialization
- **Germ theory** — Pasteur and Koch\'s discovery that bacteria (not miasma) cause disease; revolutionized medicine

> **AP Comparison Quick Reference**

| Response to Industrialization | Leaders/Text | Method | Goal |
|------------------------------|-------------|--------|------|
| Trade unions | TUC (Britain), AFL (USA) | Collective bargaining, strikes | Wage and condition improvement |
| Reform socialism | Bernstein | Democratic political action | Gradual reform of capitalism |
| Revolutionary socialism | Marx, Engels | Class revolution | Overthrow of capitalism |
| Anarchism | Bakunin, Kropotkin | Direct action, reject all government | Abolish all authority |
| Conservative welfare | Bismarck | State insurance programs | Reduce socialist appeal |

> **Common AP Prompt Patterns**

- **Comparison:** Compare voluntary European migration and indentured labor migration
- **Causation:** How did industrialization cause Social Darwinism\'s rise?
- **Evaluation:** Evaluate the extent to which workers improved conditions through collective action
- **CCOT:** How did environmental impact of human activity change from 1750 to 1900?''',
         qs=[
             {'q': 'An AP SAQ asks: "Briefly explain ONE way industrialization caused the rise of socialist movements." Which earns full credit?',
              'correct': 'Industrialization concentrated workers in urban factories with shared experiences of low wages, dangerous conditions, and child labor — this concentration created the conditions for class consciousness (awareness of shared interests as a class) and collective organization (trade unions, political parties) that distributed rural agricultural work had prevented, making socialist political movements structurally possible through the organizational form of industrial capitalism itself',
              'others': ['Socialism arose because intellectuals read economic theory with no connection to actual industrial workers', 'Industrialization caused socialism by making workers wealthier and giving them more political resources', 'Socialist movements were imported from agricultural societies and had no connection to industrial conditions'],
              'exp': 'Full SAQ credit: specific claim (concentration in factories created class consciousness) + specific evidence (shared wages/conditions/child labor + organizational contrast with distributed agriculture) + reasoning (explains the mechanism connecting industrialization to socialist organization). The AP analytical standard requires more than "industrialization created bad conditions that made workers angry" — it requires explaining the specific mechanism by which industrial organization enabled collective political action that pre-industrial organization had prevented.'},
             {'q': 'For an AP DBQ, a document from a British factory inspector (c. 1840) reporting on child labor conditions should be analyzed by considering:',
              'correct': 'The inspector\'s point of view (government official whose job was to document and reform conditions), purpose (official report intended to inform parliamentary legislation), and historical situation (1833 Factory Act had just required inspectors; reform movement was building; child labor reform was politically contested) — these contextual factors suggest the inspector\'s report would document genuine abuses accurately to support legislative action, though its categories and framing would reflect official bureaucratic and reform-oriented assumptions about childhood and work',
              'others': ['Factory inspectors\' reports are completely objective and require no contextual analysis', 'The inspector\'s report would necessarily understate abuses to protect factory owners', 'Historical situation is irrelevant for sourcing government documents'],
              'exp': 'Multi-factor sourcing is AP\'s DBQ standard: point of view (government reformer) → interested in documenting abuses to justify legislation; purpose (official report for Parliament) → would be accurate about documented facts but framed in categories useful for legislation; historical situation (1833 Factory Act reform moment) → report produced in specific legislative context where documenting abuses served a specific political purpose. The result: the inspector\'s report is probably accurate about specific documented abuses but selective in what it documents and frames abuses in ways that served the reform agenda. AP sourcing is not simply "trust" or "distrust" but calibrated assessment of how contextual factors shaped the document\'s content and framing.'},
             {'q': 'Comparing the environmental consequences of industrialization in Britain (coal pollution) and in the Congo (rubber extraction deforestation) reveals:',
              'correct': 'Industrialization distributed environmental benefits and costs globally and unequally — Britain received the economic benefits (industrial manufacturing wealth) while also suffering local environmental costs (air and water pollution); the Congo received the environmental costs (deforestation, ecosystem disruption) while the economic benefits (rubber profits) accrued to Belgian companies and consumers, demonstrating that the global industrial system created systematic environmental inequality',
              'others': ['Both Britain and the Congo experienced identical environmental impacts from industrialization', 'Congo\'s environmental impacts were self-caused with no connection to European industrial demand', 'Environmental costs were distributed equitably between industrial and colonial regions'],
              'exp': 'Global environmental inequality is AP\'s analytical framework: both Britain and Congo experienced industrial-era environmental change, but the nature and distribution of benefits vs. costs differed systematically. British industrial workers breathed polluted air but lived in an economy that was accumulating wealth; Congolese rubber tappers deforested their land while the profits went to Leopold II and Belgian industry. AP analysis connects these as parts of a single global industrial system rather than treating them as separate, unrelated environmental stories.'},
             {'q': 'The relationship between the women\'s suffrage movement and middle-class "separate spheres" ideology reveals which AP principle?',
              'correct': 'Ideologies that restrict group rights create the conditions for movements demanding those rights — "separate spheres" simultaneously provided middle-class women with education (to fulfill domestic roles) and denied them political voice, creating educated women who could articulate the contradiction between their intellectual capabilities (demonstrated by education) and their political exclusion, driving the suffrage movement',
              'others': ['Separate spheres ideology fully satisfied middle-class women with no political ambitions', 'The suffrage movement was created entirely by working-class women with no middle-class involvement', 'Ideological restrictions on rights never generate demand for those rights'],
              'exp': 'Rights restriction → rights demand is AP\'s mechanism: middle-class ideology prescribed female education to produce better domestic managers and mothers — but educated women recognized the inconsistency of intellectual capacity with political exclusion. The suffrage movement\'s leaders were disproportionately educated middle-class women (Susan B. Anthony, Elizabeth Cady Stanton in USA; Emmeline Pankhurst in Britain) who could make sophisticated arguments about rights precisely because they had received the education their ideological position prescribed. The ideology that restricted them also provided the tools to challenge that restriction.'},
             {'q': 'AP asks: "Compare the experience of European migrants to the Americas with that of Indian indentured workers in the Caribbean." Which response demonstrates the highest analytical level?',
              'correct': 'Both moved from areas of economic disadvantage to areas of labor demand, but under fundamentally different freedom conditions — European migrants chose destinations based on available information and could legally leave unsatisfactory employment; indentured workers were contractually bound for 5-10 years, could be criminally prosecuted for breach of contract, and had limited information about actual conditions when signing — demonstrating that 19th-century global labor systems operated on a spectrum from free to coerced migration that existing categories (free migration vs. slavery) did not fully capture',
              'others': ['European migrants had better economic outcomes while indentured workers had better working conditions', 'Both groups had identical legal status despite different practical circumstances', 'The comparison is impossible because they occurred in different geographic regions'],
              'exp': 'Spectrum analysis beyond binary categories is AP\'s sophisticated comparison: the binary "free vs. slave" doesn\'t capture the full range of labor conditions. Indentured labor was technically free (signed contracts) but practically coerced (debt bondage, legal penalties for leaving, inadequate information). European migration was technically free but economically constrained (poverty as push factor). AP analysis should identify the specific mechanisms of freedom and coercion operating in each case rather than simply categorizing them into binary labels, producing a more accurate understanding of how global labor systems actually operated.'},
             {'q': 'For AP, which consequence of industrialization had the most significant long-term global impact?',
              'correct': 'The environmental consequences — particularly carbon emissions from coal-based industrialization — had the most significant long-term global impact because they initiated the climate change that now threatens global systems; all other consequences (labor movements, migration, demographic change) were significant but primarily affected human social arrangements, while environmental consequences altered the physical planetary systems on which all human life depends',
              'others': ['Labor movements were the most significant consequence because they determined subsequent political development', 'Migration patterns had the most significant consequence because they determined current demographic distributions', 'All consequences were equally significant and cannot be ranked'],
              'exp': 'Comparative significance with defended ranking is AP\'s highest-level evaluation: the question asks students to make and defend a comparative judgment. The environmental answer is defensible: climate change from 19th-century coal burning is currently the most significant challenge facing human civilization — more existential than labor relations or migration patterns. But the labor movement answer is also defensible (democratic socialism shaped 20th-century politics globally) and the migration answer is defensible (current demographic distributions shape global power). AP rewards the reasoning and evidence, not just the conclusion — but the reasoning must explain why the chosen factor was more significant than alternatives.'},
             {'q': 'An AP LEQ prompt asks: "Evaluate the extent to which industrialization transformed the lives of working people in the period 1750-1900." Which thesis earns the highest mark?',
              'correct': 'Industrialization transformed working people\'s lives fundamentally but unevenly across time, geography, and skill level — while first-generation factory workers in Britain (1780s-1830s) experienced declining real wages and worse conditions compared to pre-industrial craft work, later industrial workers (1850-1900) in industrialized nations achieved rising wages, shorter hours, and legal protections through collective action, though workers in colonial regions experienced industrialization primarily as resource extraction with minimal improvement',
              'others': ['Industrialization uniformly improved working people\'s lives across all regions and periods', 'Industrialization uniformly worsened working people\'s lives — no improvement occurred during the period', 'Industrialization had no significant impact on working people — only elite lives changed'],
              'exp': 'Nuanced thesis with multiple qualifications earns highest AP marks: the best thesis on this question must avoid the extremes (uniformly better / uniformly worse) and introduce specific qualifications (temporal: first generation vs. later; geographic: Britain vs. colonies; demographic: skilled vs. unskilled workers) that allow a nuanced argument. AP LEQ rubrics award the highest complexity points when students acknowledge genuine change AND limitation, AND explain why the variation exists — not as contradiction but as evidence of uneven historical processes. The thesis must be historically defensible AND more specific than the prompt\'s own language.'}
         ],
         dl=['The ideology developed by Marx and Engels arguing that capitalism would inevitably be overthrown by a workers\' revolution was ___',
             'The post-slavery labor system that contracted Indian and Chinese workers to British plantations in the Caribbean and Pacific was ___',
             'The model describing population change during industrialization from high birth/death rates to low birth/death rates was ___'],
         do_=[['Scientific socialism (Marxism)', 'Utopian socialism', 'Anarchism', 'Reform socialism'],
              ['Indentured labor', 'Contract labor', 'Slave labor', 'Migrant labor'],
              ['The demographic transition model', 'Malthusian theory', 'Population growth theory', 'Industrial demographic theory']],
         dc=['Scientific socialism (Marxism)', 'Indentured labor', 'The demographic transition model'],
         hints=['Marx Engels — class struggle — historical determinism — proletariat overthrows bourgeoisie — communist society — Communist Manifesto Das Kapital', 'Post-1833 British Empire — India China Pacific — 5-10 year contracts — sugar cotton tea plantations — Trinidad Fiji Mauritius', 'Stage 1 high birth high death — Stage 2 high birth low death rapid growth — Stage 3 low birth low death stabilization — industrial pattern'],
         dexp='Scientific socialism is the ideological framework for understanding revolutionary responses to industrialization; indentured labor is the coerced migration system that replaced slavery; and the demographic transition model is the analytical framework for understanding how industrialization changed population dynamics — together they represent the core analytical vocabulary AP requires for this topic.'
    ),
]

for p in parts:
    content = make(p['pnum'], p['id_pre'], p['subtitle'], p['key'],
                   p['body'], p['qs'], p['dl'], p['do_'], p['dc'],
                   p['hints'], p['dexp'])
    # Fix missing closing braces for last question in qs
    lines = content.split('\n')
    fixed_lines = []
    for i, line in enumerate(lines):
        stripped = line.rstrip()
        if i < len(lines)-1:
            next_line = lines[i+1].rstrip()
            if "'exp':" in line and next_line.strip() == '],':
                if not stripped.endswith("'}"):
                    if stripped.endswith("'"):
                        line = line.rstrip('\n') + '}\n'
        fixed_lines.append(line)
    content = '\n'.join(fixed_lines) if '\n' in '\n'.join(fixed_lines) else content
    w(f"{SLUG}-part{p['pnum']}.ts", content)

print("All consequences-industrialization parts done!")
