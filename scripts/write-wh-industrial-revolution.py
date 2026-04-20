#!/usr/bin/env python3
"""Write wh-industrial-revolution parts 2-7."""
import os

base = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))),
                    'src', 'data', 'interactive-lessons')

def w(filename, content):
    with open(os.path.join(base, filename), 'w') as f:
        f.write(content)
    print(f"✓ {filename}")

SLUG = 'wh-industrial-revolution'
TITLE = 'The Industrial Revolution'

def mc(qd):
    opts = [qd['correct']] + qd['others'][:3]
    opts_lines = '\n'.join([f"              '{o}'," for o in opts])
    return f"""          {{
            question: '{qd['q']}',
            options: [
{opts_lines}
            ],
            correctAnswer: 0,
            explanation: '{qd['exp']}'
          }}"""

def make_file(pnum, id_pre, subtitle, key_concept, content_body, questions, dd_labels, dd_opts, dd_correct, hints, dd_exp):
    q = questions
    dd_blocks = ''
    for i in range(3):
        opts_lines = '\n'.join([f"            '{o}'," for o in dd_opts[i]])
        dd_blocks += f"""          {{
            label: '{dd_labels[i]}',
            options: [
{opts_lines}
            ]
          }},
"""
    correct_lines = '\n'.join([f"          '{c}'," for c in dd_correct])
    return f"""export const whIndustrialRevolutionPart{pnum}Data = {{
  topicSlug: '{SLUG}',
  sections: [
    {{
      id: '{id_pre}-intro',
      type: 'text' as const,
      content: `
# ⚙️ {TITLE}

**Part {pnum} of 7 — {subtitle}**

---

> 🔑 **Key Concept:** {key_concept}
      `
    }},
    {{
      id: '{id_pre}-quiz1',
      type: 'multiple-choice' as const,
      content: `**Concept Check** 🎯`,
      exercise: {{
        questions: [
{mc(q[0])},
{mc(q[1])}
        ]
      }}
    }},
    {{
      id: '{id_pre}-content',
      type: 'text' as const,
      content: `
{content_body}
      `
    }},
    {{
      id: '{id_pre}-input',
      type: 'multiple-choice' as const,
      content: `**Applied Recall: 3-Question Sprint** 🎯`,
      exercise: {{
        questions: [
{mc(q[2])},
{mc(q[3])},
{mc(q[4])}
        ]
      }}
    }},
    {{
      id: '{id_pre}-dropdown',
      type: 'dropdown-select' as const,
      content: `**Match the Idea: Evidence to Claim**`,
      exercise: {{
        dropdowns: [
{dd_blocks}        ],
        correctAnswers: [
{correct_lines}
        ],
        hint1: '{hints[0]}',
        hint2: '{hints[1]}',
        hint3: '{hints[2]}',
        explanation: '{dd_exp}'
      }}
    }},
    {{
      id: '{id_pre}-applied',
      type: 'multiple-choice' as const,
      content: `**AP-Style Application** 🎯`,
      exercise: {{
        questions: [
{mc(q[5])},
{mc(q[6])}
        ]
      }}
    }}
  ]
}}
"""

parts_data = [
    dict(
        pnum=2, id_pre='whir2',
        subtitle='Why Britain First?',
        key_concept='Britain industrialized first due to a unique combination of geographic, economic, and political advantages: abundant coal and iron deposits, a strong commercial tradition with available investment capital, an agricultural revolution that freed labor for factory work, and colonial markets that created demand for mass-produced goods. AP questions require explaining this combination rather than citing any single cause.',
        content_body='''## 📖 Why Britain Industrialized First

> **Geographic and Natural Resource Advantages**

Britain\'s physical geography created key preconditions:

- **Coal:** Abundant deposits in South Wales, Yorkshire, Midlands — fuel for steam engines
- **Iron ore:** Deposits close to coal (reduced transport costs); key raw material for machines/infrastructure
- **Rivers and canals:** Network of navigable rivers; canal building (1760s-1820s) connected resources to factories to ports
- **Island geography:** No point more than 70 miles from navigable water; cheap bulk transport
- **Harbors:** Deep-water ports (London, Liverpool, Bristol) connected British industry to global markets

> **Economic and Social Preconditions**

| Factor | Role in British Industrialization |
|--------|----------------------------------|
| **Agricultural Revolution** | Enclosure movement (1750-1850) displaced rural laborers → created urban factory workforce |
| **Commercial banking** | Joint-stock companies and credit markets provided investment capital for factories |
| **Colonial markets** | Empire (India, Americas) provided raw materials (cotton) and markets for manufactured goods |
| **Patent law** | Protection of inventors\' profits incentivized technological innovation |
| **Merchant tradition** | Centuries of commercial culture created entrepreneurial class willing to invest in industry |

> **Key Inventions and Their Significance**

- **James Watt\'s steam engine (1769):** Converted heat into mechanical power; could be placed anywhere; not dependent on water location
- **Spinning jenny (1764) / water frame (1768):** Mechanized textile production; dramatically increased output per worker
- **Power loom (1784):** Completed textile mechanization; converted weavers from artisans to factory workers
- **Puddling process (1784):** Mass-produced wrought iron for machinery and construction

> **AP Comparison Anchor**

- **Britain vs. France:** Both had coal and commercial traditions but France\'s larger agricultural sector, aristocratic social structure, and Revolutionary/Napoleonic disruption delayed industrialization until 1820s-1840s
- **Britain vs. China:** Both had proto-industrial production (Chinese silk, British wool) but China lacked the institutional innovation incentives (patent law) and had state policies that prioritized agricultural stability over commercial innovation''',
        questions=[
            {'q': 'The enclosure movement\'s role in British industrialization was primarily to:',
             'correct': 'Displace rural agricultural workers by consolidating common lands into private estates, forcing former peasants and tenant farmers to migrate to urban areas where they became the factory labor force — the enclosure movement was the social mechanism that created an industrial working class by destroying the agricultural subsistence base',
             'others': ['Increase agricultural productivity with no impact on industrial labor supply', 'Prevent rural workers from moving to cities', 'Expand common lands available to small farmers'],
             'exp': 'Enclosure is AP\'s mechanism connecting agricultural change to industrial labor supply: when Parliament authorized landowners to enclose common lands (1750-1850), they eliminated the subsistence farming that had sustained rural communities. Displaced farmers with no land had two options — poverty or factory work. This "push" factor (land loss) combined with the "pull" factor (factory wages) to create the British industrial labor force. Without enclosure, the factory system would have had no workers.'},
            {'q': 'Britain\'s colonial empire contributed to industrialization primarily by:',
             'correct': 'Providing both raw materials (especially Indian cotton for textile mills) and protected markets for British manufactured goods — colonies supplied the inputs and absorbed the outputs of British industry, creating a self-reinforcing loop where industry expanded to meet colonial demand and colonialism expanded to supply industrial needs',
             'others': ['Colonies provided no economic benefit to British industrialization', 'Colonies supplied labor that worked in British factories', 'Colonial markets were irrelevant because British industry only sold to domestic consumers'],
             'exp': 'The empire-industrialization connection is an AP complexity point: cotton textiles (Britain\'s first industrialized sector) required Indian cotton (raw material) and had to overcome Indian competition in global markets (by using imperial policy to destroy Indian textile manufacturing and create demand for British-made goods). The infamous destruction of Indian textile manufacturing (Dacca muslin) by British import policy demonstrates how colonialism and industrialization were mutually reinforcing rather than separate phenomena.'},
            {'q': 'James Watt\'s steam engine\'s most transformative feature was:',
             'correct': 'Its fuel-powered mobility — unlike water mills (which required location on fast-moving rivers) or windmills (which required wind), the steam engine could be placed anywhere coal was available, allowing factories to concentrate in cities near labor and markets rather than dispersing along rivers, fundamentally changing the geography of production',
             'others': ['Steam engines were less powerful than water mills and only gradually replaced them', 'Steam engines required proximity to large rivers and were geographically constrained', 'The steam engine\'s main contribution was to agriculture rather than manufacturing'],
             'exp': 'The geographic liberation created by steam power is the key mechanism: water-powered mills had to be located where rivers ran fast (geographically constrained, distant from labor pools); steam-powered mills could be located near coal deposits, labor, and transportation networks. This enabled the concentration of factories in urban areas, which enabled the division of labor, which enabled economies of scale. Steam power is the foundation of the "factory system" in its urban industrial form.'},
            {'q': 'Patent law\'s role in British industrialization was to:',
             'correct': 'Protect inventors\' profits from their innovations for a fixed period, creating economic incentives to invest in research and invention — without patent protection, competitors could immediately copy any successful invention, eliminating the profit that motivated the original investment, so patent law was the institutional mechanism that sustained the innovation cycle',
             'others': ['Patent law prevented foreign inventors from patenting in Britain', 'Patents were used exclusively by the government to control technology development', 'Patent law had no significant impact on British innovation rates'],
             'exp': 'Patent law is AP\'s example of how institutions shape economic behavior: the British patent system (dating from 1624 Statute of Monopolies) created a time-limited monopoly on innovations, allowing inventors to profit from their inventions before competition was allowed. This institutional incentive explains why Britain produced so many commercial innovations in the 18th century — the reward structure made invention commercially rational. France had similar inventors but less effective institutional incentive mechanisms.'},
            {'q': 'Comparing British industrialization to why China did not industrialize first despite its proto-industrial production reveals:',
             'correct': 'China had comparable or superior proto-industrial capabilities (silk, ceramics, iron production) but lacked key institutional features: patent law protecting inventors\' profits, state policies prioritizing commercial innovation over agricultural stability, and available investment capital from commercial banking — demonstrating that industrialization requires institutional innovation alongside technological capability',
             'others': ['China lacked all the natural resources required for industrialization', 'China had no proto-industrial production before European industrialization', 'China deliberately chose not to industrialize for religious reasons'],
             'exp': 'The China comparison is AP\'s most sophisticated "why Britain?" analysis: China had proto-industrialization (coal production in Shanxi was larger than Britain\'s in 1700; Chinese iron production was substantial), but Confucian state policies prioritized agricultural stability over commercial development, suppressed merchant activities, and didn\'t develop institutional incentives (patent law) for continuous innovation. This demonstrates that industrialization was not inevitable for the most technologically sophisticated society — it required specific institutional conditions.'},
            {'q': 'An AP prompt asks: "Why did Britain industrialize before France?" Which argument is most analytical?',
             'correct': 'Britain industrialized first not because of superior natural resources or technology (France had coal and sophisticated manufacturing) but because of a combination of institutional factors: patent law rewarded innovation; parliamentary enclosure created an industrial labor force; banking systems provided capital; and colonial markets provided raw materials and product demand — while France\'s revolutionary disruption (1789-1815) and larger agricultural sector delayed the same transition',
             'others': ['Britain had no geographic or institutional advantages over France — industrialization was random', 'Britain simply had more coal than France, making industrialization inevitable', 'France was culturally inferior and therefore unable to industrialize effectively'],
             'exp': 'Multi-causal analysis earns AP credit: the comparison identifies multiple factors (institutional: patent law, banking; social: enclosure; commercial: colonial markets) and explains the French counterfactual (revolutionary disruption + larger agricultural sector = different timing). Single-cause explanations ("more coal") are insufficient — AP rewards recognizing that industrialization required a configuration of conditions, not any single determining factor.'},
            {'q': 'The "agricultural revolution" preceding British industrialization demonstrates which AP causal relationship?',
             'correct': 'Agricultural improvement (crop rotation, selective breeding, drainage improvements) increased food productivity, supporting a larger urban population, while the enclosure movement simultaneously displaced rural labor — together creating both the food supply (urban workers could be fed) and labor supply (displaced farmers became urban workers) that factory industrialization required',
             'others': ['The agricultural revolution had no connection to industrialization — the two were separate processes', 'The agricultural revolution reduced food production, forcing people into factories for survival', 'Agricultural improvements only affected rural areas with no urban industrial consequences'],
             'exp': 'The agricultural-industrial connection demonstrates AP\'s attention to causal sequences: agricultural revolution (increased productivity) enabled urbanization (more urban workers could be fed at lower cost); enclosure (land consolidation) created the urban labor force. Both were necessary. Without the agricultural productivity improvements, urban populations couldn\'t be fed; without enclosure, rural workers wouldn\'t have moved to cities. Industrialization required both a supply of labor AND a way to feed that labor — both provided by agricultural transformation.'}
        ],
        dd_labels=[
            'The agricultural practice that displaced rural workers and created an urban factory labor force was ___',
            'The invention that freed factories from dependence on water power and enabled urban industrialization was ___',
            'The institutional mechanism that protected inventors\' profits and incentivized industrial innovation was ___'
        ],
        dd_opts=[
            ['The enclosure movement', 'The crop rotation system', 'The factory system', 'The canal network'],
            ['Watt\'s steam engine', 'The spinning jenny', 'The water frame', 'The puddling process'],
            ['Patent law', 'Joint-stock companies', 'Guilds', 'Colonial taxation']
        ],
        dd_correct=['The enclosure movement', 'Watt\'s steam engine', 'Patent law'],
        hints=['Agricultural transformation — land consolidation — displaced rural workers → urban factories', 'Steam power — coal fueled — freed factories from rivers — enabled urban concentration', 'Legal protection of inventors\' profits — time-limited monopoly — sustained innovation incentive'],
        dd_exp='Enclosure displaced rural agricultural labor creating the factory workforce; Watt\'s steam engine freed factories from geographic dependence on water power; and patent law created institutional incentives for continuous technological innovation. Together these three factors — labor supply, power technology, and innovation incentives — form the core explanation for why British industrialization was self-sustaining rather than episodic.'
    ),
    dict(
        pnum=3, id_pre='whir3',
        subtitle='The Factory System and Working Conditions',
        key_concept='The factory system reorganized production from artisan craft to mass manufacturing, concentrating workers in large facilities under centralized discipline and time-based labor. Working conditions — long hours, dangerous environments, child labor, low wages — generated both human suffering and political responses (labor unions, reform legislation). AP questions focus on how the factory system changed work, family, and social structure.',
        content_body='''## 📖 The Factory System and Working Conditions

> **How the Factory System Changed Work**

Pre-industrial artisan work vs. factory work:

| Aspect | Pre-industrial Artisan | Factory Worker |
|--------|----------------------|----------------|
| **Location** | Home or small workshop | Large factory building |
| **Schedule** | Self-determined | Fixed hours (12-16 hr days) |
| **Skill** | Complete product knowledge | Repetitive single task |
| **Ownership** | Owned tools and product | Sold labor only |
| **Supervision** | None or guild master | Factory foreman/clock |
| **Gender/age** | Adult male artisans | Men, women, children |

> **Working Conditions**

Early factory conditions were typically brutal:

- **Hours:** 12-16 hours per day, 6 days per week; "clock time" replaced "task time"
- **Dangerous environments:** Unguarded machinery caused frequent injury; cotton dust caused respiratory disease; coal dust caused black lung
- **Child labor:** Children as young as 5-8 worked in textile mills and coal mines; small size was useful in narrow spaces
- **Wages:** Low but more regular than agricultural wages; women and children paid significantly less than men
- **Discipline:** Fines, beatings, dismissal; factory discipline replaced seasonal agricultural rhythms

> **Social Consequences**

The factory system restructured families and communities:

- **Working-class neighborhoods (slums):** Workers crowded into urban housing near factories; no sanitation; disease (cholera, typhus) epidemics
- **Family structure change:** Women and children working in factories alongside men; traditional family economic roles disrupted
- **Separation of work and home:** Factory work removed production from domestic space; created distinct "work" and "home" spheres
- **Middle class expansion:** Factory owners, managers, accountants, lawyers created new professional middle class

> **Reform Responses**

Political responses to industrial conditions:

- **Luddite movement (1811-1816):** Skilled textile workers destroyed machinery they blamed for displacing artisan work
- **Factory Acts (Britain, 1833-1850s):** Limited child labor hours; required factory inspections; minimum age requirements
- **Trade unions:** Workers organized collectively to negotiate wages and hours; frequently illegal early in industrial period
- **Owen, Chartism:** Social reformers (Robert Owen) and working-class political movements (Chartism) demanded labor rights''',
        questions=[
            {'q': 'The most fundamental change the factory system made to work was:',
             'correct': 'Converting workers from producers who owned the means of production and controlled their labor process (artisans) to wage laborers who sold their time to factory owners who controlled the pace, schedule, and organization of production — fundamentally changing workers\' relationship to their own labor',
             'others': ['Factory work was less dangerous than artisan work', 'Factory workers earned significantly more than artisan workers', 'Factory work preserved artisan skill levels while adding efficiency'],
             'exp': 'Marx\'s "alienation of labor" concept captures this AP-essential change: the artisan owned tools, controlled process, and produced a complete product; the factory worker owned nothing, controlled nothing, and produced a fragment of a product as part of a mechanized process controlled by capital. This relationship change — from producer to wage laborer — is the defining feature of industrial capitalism and the foundation of 19th-century labor politics.'},
            {'q': 'Child labor in early industrial Britain was primarily driven by:',
             'correct': 'Economic necessity and factory owners\' profit calculation — working-class families needed children\'s wages to survive on industrial wages; factory owners preferred child workers for lower wages, physical size (useful in narrow mine passages and under machinery), and perceived docility compared to adult workers who might organize',
             'others': ['Child labor was a traditional practice in all societies with no industrial dimension', 'Factory owners were required by law to employ children', 'Child workers were paid equally to adult workers'],
             'exp': 'Child labor had both supply-side (families needed income) and demand-side (owners preferred cheap, small, docile workers) drivers. The AP sophistication is recognizing both: reformers who focused only on "unscrupulous factory owners" missed that working-class families often depended on children\'s wages to survive; factory acts that banned child labor without providing alternative income could actually harm the families they meant to protect. This complexity explains why labor reform was slow and contested.'},
            {'q': 'The Luddite movement (1811-1816) demonstrated:',
             'correct': 'Working-class resistance to deskilling — skilled textile artisans (framework knitters, hand-loom weavers) destroyed factory machinery not because they opposed all technology but because specific machines replaced skilled craft labor with unskilled factory labor, destroying the artisan way of life that was both economically and culturally central to their identity',
             'others': ['Luddites were opposed to all technology and progress generally', 'Luddites were middle-class reformers opposed to factory conditions', 'The Luddite movement successfully stopped textile mechanization'],
             'exp': 'The AP correction for "Luddites = anti-technology": the Luddites were skilled workers defending skilled work, not opponents of progress generally. They targeted specific machines (the stocking frame, the power loom) that destroyed specific skills (framework knitting, hand weaving), not technology as a whole. Their argument was that technology was being deployed to transfer income from skilled workers to factory owners — a labor-market analysis, not a reactionary anti-progress position. This nuance is important for AP analysis of industrial resistance.'},
            {'q': 'The Factory Acts (Britain, 1830s-1850s) demonstrated:',
             'correct': 'That industrial capitalism generated both exploitation and democratic reform responses — the same political system that enabled factory owners to employ children 12 hours a day could be pressured through parliamentary reform, investigative commissions, and public opinion to regulate those practices, demonstrating that industrial society contained reform mechanisms alongside exploitation',
             'others': ['Factory Acts completely solved all labor exploitation problems immediately', 'Factory Acts were never passed due to factory owners\' complete political control', 'Labor reform was impossible under capitalist systems'],
             'exp': 'Factory Acts demonstrate AP\'s theme of reform within capitalist industrial systems: parliamentary investigative commissions produced horrifying evidence of child labor conditions; Evangelical reformers (Shaftesbury) organized public pressure; eventually Parliament responded with regulation. The reform was incomplete and contested, but demonstrated that representative political systems could be used to regulate industrial capitalism — a different trajectory from revolutionary challenge to the system itself.'},
            {'q': 'Urban industrial slum conditions (overcrowding, disease, pollution) demonstrate which AP principle?',
             'correct': 'Industrial development\'s benefits and costs were unequally distributed — factory owners and middle class gained from industrial production while working-class communities bore the concentrated costs (disease, pollution, dangerous work) of industrial production in their neighborhoods and bodies, demonstrating that market systems distribute costs differently from benefits',
             'others': ['Urban conditions improved uniformly for all classes during industrialization', 'Slum conditions affected all social classes equally', 'Urban conditions during industrialization were no worse than pre-industrial rural conditions'],
             'exp': 'The unequal distribution of industrial costs and benefits is AP\'s framework for understanding 19th-century labor politics: factory owners lived in suburban villas away from factory smoke; working-class communities lived next to factories, breathed the pollution, and endured the epidemics (1832 cholera epidemic killed disproportionately in working-class neighborhoods). This geographic and social unequal distribution of industrial costs explains why labor politics became so contentious — the people bearing the costs (workers) and the people receiving the profits (owners) were different people.'},
            {'q': 'The emergence of a professional middle class (factory managers, accountants, lawyers, doctors) during industrialization demonstrates:',
             'correct': 'Industrial capitalism created new social positions that required education and professional skills, expanding the social structure beyond aristocracy/peasantry toward a more complex hierarchy that included a professional class positioned between factory owners and factory workers — this new middle class had different interests from both working class and aristocracy and became the political force supporting liberal reform',
             'others': ['The middle class was unchanged by industrialization', 'Industrial capitalism produced only two classes: factory owners and factory workers', 'The professional middle class supported working-class labor movements'],
             'exp': 'The expanding middle class is AP\'s mechanism connecting industrialization to political change: the professional-managerial middle class (factory managers, bankers, lawyers, doctors, engineers) created by industrial capitalism became the social constituency for parliamentary reform (1832 Reform Act expanded their voting rights), liberal economics (free trade), and moderate labor regulation. Their political interests (legal protections, contract enforcement, regulated markets) differed from both working-class interests (higher wages, union rights) and aristocratic interests (land, privilege) — creating the three-cornered political competition of 19th-century Britain.'},
            {'q': 'For AP, the factory system\'s most significant long-term social consequence was:',
             'correct': 'The creation of a permanent industrial working class (proletariat) with shared economic conditions, shared urban neighborhoods, and shared vulnerability to industrial fluctuations — creating the social basis for trade unionism, labor parties, and socialist movements that would reshape 19th-20th century politics by organizing people who shared factory labor conditions',
             'others': ['The factory system destroyed all social classes and created equality', 'The working class was too divided to organize any political movements', 'Industrial capitalism eliminated poverty for the working class within one generation'],
             'exp': 'The industrial working class as a political entity is the long-term social consequence: before factories, workers were dispersed (domestic production, agricultural labor, artisan workshops); factories concentrated them in urban neighborhoods with shared conditions. This concentration created the social basis for collective organization: workers who lived near each other, worked together, and faced the same conditions could organize collectively in ways that dispersed rural workers could not. This is the foundation of the labor movement and, by extension, the welfare state.'}
        ],
        dd_labels=[
            'The early industrial working-class movement that destroyed textile machinery to resist deskilling was ___',
            'The parliamentary legislation in the 1830s-1850s that regulated child labor in British factories was ___',
            'The social reformer who founded the utopian community of New Lanark and advocated factory reform was ___'
        ],
        dd_opts=[
            ['The Luddite movement', 'The Chartist movement', 'The Suffragette movement', 'The Enclosure movement'],
            ['The Factory Acts', 'The Corn Laws', 'The Navigation Acts', 'The Reform Bills'],
            ['Robert Owen', 'Thomas Malthus', 'Adam Smith', 'Jeremy Bentham']
        ],
        dd_correct=['The Luddite movement', 'The Factory Acts', 'Robert Owen'],
        hints=['Skilled textile workers 1811-16 — machinery destruction — deskilling resistance', 'Parliamentary legislation — child labor restrictions — factory inspections — 1830s-1850s', 'New Lanark — cooperative community — early socialist factory reform advocate'],
        dd_exp='The Luddite movement was skilled workers\' resistance to deskilling by textile machinery; the Factory Acts were parliamentary responses to documented industrial abuse; and Robert Owen demonstrated through New Lanark that factories could be operated with better conditions and still be profitable — all three represent different responses to the same problem of industrial working conditions.'
    ),
    dict(
        pnum=4, id_pre='whir4',
        subtitle='Global Spread of Industrialization',
        key_concept='Industrialization spread from Britain to continental Europe, the United States, and Japan through technology transfer, investment, and deliberate state policies. Each country industrialized through a different path, and AP questions evaluate which factors were common versus which factors varied across national contexts.',
        content_body='''## 📖 Global Spread of Industrialization

> **Spread to Continental Europe (1820s-1880s)**

| Country | Method | Key Industries | Timeline |
|---------|--------|---------------|----------|
| **Belgium** | British technicians; coal-rich Liège region | Coal, iron, textiles | 1820s-1840s |
| **France** | State investment; slower than Britain | Luxury goods, textiles, then heavy industry | 1830s-1860s |
| **German states** | Zollverein (customs union); state-sponsored railroad | Chemicals, steel, heavy industry | 1840s-1870s |
| **United States** | Abundant land, immigration, railroad expansion | Textiles (northeast), agriculture, railroads, steel | 1820s-1890s |

> **German Industrialization: State-Led Model**

Germany demonstrated that state guidance could accelerate industrialization:

- **Zollverein (1834):** Customs union eliminated tariffs between German states → larger integrated market
- **Railroad investment:** Prussian state invested heavily in railroads → connected markets → enabled heavy industry
- **Technical education:** German states invested in technical universities and vocational training → chemical and electrical industries
- **Protectionist tariffs:** Bismarck\'s tariff policies (1879) protected German industry from British competition

> **Japanese Meiji Industrialization: Selective Westernization**

Japan\'s industrialization (after 1868 Meiji Restoration) was the most deliberately state-directed:

- **Deliberate technology transfer:** Japanese government sent scholars to Europe and America to study technology, law, military organization
- **State-built industries:** Government built model factories, then sold them to private industrialists (Mitsui, Mitsubishi zaibatsu)
- **Preserved social order:** Industrialization implemented through traditional social hierarchies (emperor loyalty) rather than liberal individualism
- **Speed:** Japan industrialized in 30 years what Britain took 100 years
- **Military application:** Japanese industrialization explicitly aimed at avoiding Western colonialism

> **American Industrialization: Distinct Features**

American industrialization had unique characteristics:

- **Abundant land:** High land-to-labor ratio made labor expensive → strong incentive for labor-saving machinery
- **Immigration:** Massive European immigration (1840s-1920s) provided industrial labor force
- **Natural resources:** Coal (Pennsylvania), iron ore (Great Lakes region), cotton (South) abundant
- **Railroads:** Transcontinental railroads (1869) integrated national market; land grants subsidized construction
- **Robber baron capitalism:** Minimal government regulation; Carnegie (steel), Rockefeller (oil), JP Morgan (finance)

> **AP Comparison Anchor**

- **British vs. German industrialization:** British = market-driven, gradual, textile-first; German = state-directed, faster, heavy industry-focused
- **European vs. Japanese:** Both selectively adopted industrial technology; Japanese specifically aimed to avoid colonial domination; Europeans industrialized within global colonial system they were already part of''',
        questions=[
            {'q': 'German industrialization\'s state-directed model differed from British industrialization in that:',
             'correct': 'Germany deliberately used state power (Zollverein customs union, railroad investment, protectionist tariffs, technical education) to accelerate and direct industrialization, while British industrialization was primarily market-driven by private entrepreneurs — demonstrating that industrialization can be achieved through either market or state-directed mechanisms',
             'others': ['German industrialization followed identical market-based methods to British industrialization', 'Germany industrialized before Britain due to superior state capacity', 'State-directed industrialization was always less effective than market-driven industrialization'],
             'exp': 'The Britain vs. Germany comparison is AP\'s clearest example of multiple paths to industrialization: British "first industrial revolution" was largely unplanned, driven by private entrepreneurs responding to commercial incentives; German industrialization was deliberately organized by state actors (Prussian bureaucracy, Zollverein administrators, university administrators) who identified industrial development as a state goal and used state resources to achieve it. Both succeeded — but through different mechanisms.'},
            {'q': 'Japanese Meiji industrialization\'s goal of "avoiding Western colonialism" demonstrates:',
             'correct': 'That industrialization and military power became survival requirements in a world where European industrial powers colonized non-industrial states — Japan observed the colonization of China (Opium Wars), India (British East India Company), and Southeast Asia and concluded that only rapid industrialization and military modernization could preserve Japanese sovereignty',
             'others': ['Japan industrialized to spread Japanese culture globally', 'Japan had no awareness of Western colonialism when it began industrialization', 'Japan\'s industrialization was motivated purely by commercial profit with no defensive dimension'],
             'exp': 'The Meiji industrialization\'s geopolitical motivation is AP-essential: Japan didn\'t industrialize because of commercial incentive (British model) or nationalist economic competition (German model) but because the evidence of Western colonization of Asia demonstrated that non-industrial states were colonized. The "shock" of Commodore Perry\'s black ships (1853) forcing Japan to open trade demonstrated that Japan\'s pre-industrial military couldn\'t resist Western power. Industrialization was therefore an explicit survival strategy.'},
            {'q': 'American industrialization\'s "high land-to-labor ratio" driving labor-saving technology adoption demonstrates:',
             'correct': 'Resource endowment shapes the direction of technological innovation — when labor is scarce and expensive relative to land, innovators have strong incentives to develop labor-saving machinery; when labor is abundant and cheap, the incentive to mechanize is weaker; American industrialization therefore developed different technological emphases than British industrialization',
             'others': ['American technological innovation was independent of resource availability', 'Labor-saving technology was uniquely American with no parallels elsewhere', 'High land-to-labor ratio made American industrialization impossible'],
             'exp': 'This demonstrates AP\'s resource endowment analysis: the American reaper (McCormick, 1831), which mechanized grain harvesting, was economically viable in America (labor scarce, large farms) but not in Britain (labor abundant, small farms). The direction of innovation is shaped by what factors are expensive — American innovation emphasized substituting capital (machines) for labor; British and European innovation emphasized organizing labor more efficiently. Different resource endowments produce different technological priorities.'},
            {'q': 'The Zollverein (German customs union, 1834) contributed to industrialization by:',
             'correct': 'Eliminating internal tariffs between German states to create a large integrated market — larger markets enable economies of scale in production, justify investment in mass production technology, and create sufficient demand to support specialized industrial production that would be uneconomical in smaller fragmented markets',
             'others': ['The Zollverein was primarily a military alliance with no economic significance', 'The Zollverein raised tariffs between German states to protect local industries', 'Economic integration had no significant impact on industrialization rates'],
             'exp': 'Market size is AP\'s explanation for why economic integration accelerated industrialization: a factory producing for 30 million consumers (unified Germany) can achieve economies of scale impossible when producing for 1 million consumers (Prussia alone). The Zollverein preceded full German political unification by 37 years but created the economic integration that made German industrial development possible. This demonstrates that economic integration can precede and enable political unification.'},
            {'q': 'The spread of industrialization from Britain to Continental Europe and Japan demonstrates which AP principle?',
             'correct': 'Technology and industrial methods can be deliberately transferred and adapted across cultures and national contexts, but the specific path and social consequences of industrialization vary based on initial conditions (resource endowment, existing social structure, state capacity) — there is no single industrial "model" but multiple variations sharing core features',
             'others': ['Industrial technology could not be transferred — each nation had to independently reinvent it', 'All nations industrialized identically to the British model', 'Only nations with identical conditions to Britain could industrialize'],
             'exp': 'Technology transfer with adaptation is AP\'s meta-lesson about industrialization spread: British technology (steam engines, spinning machinery) was studied, copied, and adapted by German, French, American, and Japanese industrializers — but the social context (different labor conditions, state capacities, resource endowments, cultural values) shaped different industrial trajectories. Germany emphasized chemicals and electrical industry (where state technical education gave advantages); Japan emphasizes textiles then heavy industry; America emphasizes scale and mechanization. Same core technology, different industrial configurations.'},
            {'q': 'Japan\'s state-built model factories, subsequently sold to private industrial conglomerates (zaibatsu), represented:',
             'correct': 'A deliberate state strategy to absorb technological risk during industrialization\'s most uncertain early phase, then transfer functioning enterprises to private capital — the state subsidized the learning cost of new industrial methods (accepting losses on model factories) and then sold proved enterprises to private investors who could operate them at commercial scale',
             'others': ['Japanese government nationalized all industry permanently during Meiji period', 'Zaibatsu built Japanese industry without any government involvement', 'State-built factories were economically irrational and slowed Japanese industrialization'],
             'exp': 'The state-private sequence in Japanese industrialization is AP\'s example of developmental state theory: governments can absorb the learning and risk costs of industrial development that private investors are unwilling to bear, then transition to private ownership once industrial viability is proved. The zaibatsu (Mitsui, Mitsubishi, Sumitomo) that bought Meiji government model factories became the industrial conglomerates that powered Japanese industrial development through the 20th century.'},
            {'q': 'For AP, the most significant difference between British and all later industrializers was:',
             'correct': 'British industrialization was unplanned and market-driven because there was no existing model to follow; all subsequent industrializers (Germany, France, USA, Japan) could observe and deliberately adopt British methods, state-directing technology transfer rather than organically developing industrial technology — making later industrialization deliberately accelerated compared to Britain\'s organic but slower path',
             'others': ['Later industrializers had no advantages over Britain — they followed identical paths', 'All nations industrialized at the same speed regardless of when they started', 'Later industrializers deliberately rejected British methods and developed entirely new approaches'],
             'exp': 'The "advantage of backwardness" concept is AP\'s framework for later industrialization: countries that industrialized after Britain could observe British successes and failures, deliberately adopt proven technologies, and avoid some developmental dead-ends. German technical universities were deliberately designed to produce industrial chemists Britain lacked; Japan deliberately sent observers to study British, American, and German models. The first industrializer creates the model; subsequent industrializers can improve on the model through deliberate adoption.'}
        ],
        dd_labels=[
            'The German customs union that created an integrated market across German states (1834) was the ___',
            'The Japanese industrial-financial conglomerates created during the Meiji period that drove Japanese industrialization were the ___',
            'The American industrialists (Carnegie, Rockefeller) who dominated late 19th century industry were sometimes called ___'
        ],
        dd_opts=[
            ['Zollverein', 'Reichstag', 'Junkers', 'Bundesrat'],
            ['Zaibatsu', 'Samurai', 'Daimyo', 'Shogunate'],
            ['Robber barons', 'Factory lords', 'Industrial kings', 'Carnegie men']
        ],
        dd_correct=['Zollverein', 'Zaibatsu', 'Robber barons'],
        hints=['German — customs union — 1834 — eliminated internal tariffs — created integrated market', 'Japanese — industrial-financial conglomerates — Mitsui Mitsubishi — state-built then sold to private investors', 'American industrialists — Carnegie Rockefeller Morgan — minimal regulation — concentrated wealth'],
        dd_exp='The Zollverein demonstrates state-directed market integration enabling industrialization; zaibatsu demonstrate state-to-private developmental state industrial strategy; and the robber barons demonstrate laissez-faire industrialization in the American context — three different institutional approaches to the same industrialization challenge.'
    ),
    dict(
        pnum=5, id_pre='whir5',
        subtitle='Social Impacts: Urbanization, Class, and Labor Movements',
        key_concept='Industrialization produced dramatic social transformations: rapid urbanization created new class structures, working conditions generated labor movements and socialism, and the roles of women and children changed fundamentally. AP questions focus on comparing pre-industrial and industrial social structures and evaluating the causes and consequences of labor movements.',
        content_body='''## 📖 Social Impacts of Industrialization

> **Urbanization**

| UK Urban Population | 1750 | 1800 | 1850 | 1900 |
|--------------------|------|------|------|------|
| % in cities >10,000 | 17% | 24% | 39% | 75% |

This scale of urbanization was unprecedented:
- **Push:** Agricultural displacement (enclosure, mechanization)
- **Pull:** Factory wages (even low wages exceeded rural options)
- **Consequence:** Overcrowded industrial cities without sanitation, planning, or public health infrastructure

> **New Class Structure**

| Class | Composition | Political Position |
|-------|------------|-------------------|
| **Aristocracy** | Landowning nobility | Declining political power; reform bills reduced dominance |
| **Industrial bourgeoisie** | Factory owners, merchants, bankers | Growing; sought political representation (1832 Reform Act) |
| **Professional middle class** | Managers, doctors, lawyers, engineers | Liberal reformers; supported free trade, legal reform |
| **Artisan/skilled working class** | Craftsmen, mechanics | Labor unions; early socialism; cooperative movements |
| **Unskilled working class** | Factory workers, miners | Labor unions; eventually socialist and labor party support |

> **Labor Movements and Political Ideologies**

Industrial conditions produced organized political responses:

- **Trade unions:** Collective bargaining for wages and hours; initially illegal (Combination Acts 1799-1824); legalized in Britain 1824
- **Chartism (1838-1848):** First mass British working-class political movement; demanded universal male suffrage, secret ballot, paid MPs
- **Owen\'s Utopian Socialism:** Cooperative communities (New Harmony, New Lanark); better factory conditions demonstrated
- **Marx and Engels (Communist Manifesto, 1848):** Scientific socialism; class struggle; bourgeoisie vs. proletariat; revolutionary change
- **Labor parties:** British Labour Party (1900); Socialist parties across Europe

> **Women and Industrialization**

Industrial capitalism changed women\'s economic roles with contradictory effects:

- **Working-class women:** Factory labor; lower wages than men; domestic service; combined wage work with childcare
- **Middle-class women:** "Cult of domesticity" — idealized as moral household managers; excluded from professions
- **Separate spheres ideology:** Public sphere (men, work, politics) vs. private sphere (women, home, morality)
- **Long-term consequence:** Women\'s entry into wage labor eventually became foundation for suffrage and feminist movements''',
        questions=[
            {'q': 'The pace of British urbanization (17% to 75% urban, 1750-1900) was historically unprecedented because:',
             'correct': 'No previous society had urbanized at this speed or to this degree — the combination of rural displacement (enclosure) and industrial employment pull created population concentration that outpaced any ability to plan, build sanitation, or develop public health infrastructure, explaining why early industrial cities had catastrophic disease rates',
             'others': ['Roman empire cities had similarly rapid urbanization', 'British urbanization was slow compared to other industrializing nations', 'Urbanization had no connection to industrial employment'],
             'exp': 'The speed and scale of industrialization-driven urbanization is AP\'s framework for understanding urban public health crises: pre-industrial cities grew slowly enough for incremental sanitation development; industrial cities grew faster than any infrastructure could follow. The 1832 cholera epidemic (32,000 deaths in Britain) was the consequence: overcrowded, unsanitated working-class urban neighborhoods provided perfect disease vectors. The epidemic ultimately prompted public health reform (1848 Public Health Act) — another demonstration that industrial problems generated reform responses.'},
            {'q': 'Chartism (1838-1848) demonstrated which AP principle?',
             'correct': 'Working-class political consciousness developed in response to industrial conditions — Chartism was the first mass working-class political movement demanding democratic reform (universal male suffrage, secret ballot) as the mechanism for achieving economic justice, demonstrating that industrial workers developed political agency alongside their economic organization',
             'others': ['Chartism was a middle-class reform movement with no working-class participation', 'Chartism successfully achieved all its demands by 1848', 'Working-class people had no capacity for political organization during industrialization'],
             'exp': 'Chartism is AP\'s example of early working-class political mobilization: the movement\'s 6 demands (universal male suffrage, secret ballot, annual Parliaments, paid MPs, abolition of property requirements, equal electoral districts) were all eventually adopted (over the next century) because the logic was sound. Chartism failed in the short term but demonstrated that the working class could develop sophisticated political demands and organize mass movements — the foundation of the labour movement that followed.'},
            {'q': 'The difference between Marx\'s "scientific socialism" and Owen\'s "utopian socialism" was:',
             'correct': 'Owen believed industrial capitalism could be reformed by enlightened industrialists building better factory communities; Marx argued that capitalism\'s class structure made reform impossible and that proletarian revolution was the only path to worker emancipation — a fundamental difference between reformist and revolutionary strategies for addressing industrial inequality',
             'others': ['Both Marx and Owen advocated identical revolutionary overthrow of capitalism', 'Owen was more radical than Marx in his opposition to industrial capitalism', 'Both reformist and revolutionary socialism had no actual working-class followers'],
             'exp': 'This distinction is AP\'s framework for 19th-20th century political alternatives to industrial capitalism: reformist socialism (can capitalism be made more just through reform?) vs. revolutionary socialism (must capitalism be replaced entirely?). Owen\'s New Lanark demonstrated that better factory conditions were possible within capitalism; Marx argued this was exceptional and that capitalism\'s structural dynamics would systematically re-exploit labor. This debate between reform and revolution defined Western politics through the 20th century.'},
            {'q': 'The "separate spheres" ideology (public = male, private = female) that emerged during industrialization demonstrates:',
             'correct': 'Industrialization changed gender ideology alongside gender economics — as middle-class women were removed from productive economic activity (which moved into factories), a compensatory ideology developed idealizing women\'s domestic "sphere" as separate from but complementary to the male public sphere, providing ideological justification for women\'s exclusion from public life',
             'others': ['Separate spheres ideology predated industrialization with no industrial connection', 'Working-class women were covered by separate spheres ideology identically to middle-class women', 'Separate spheres ideology was universally rejected and had no social impact'],
             'exp': 'Separate spheres is AP\'s analysis of how ideology accompanies economic change: as industrialization moved production from household to factory, middle-class women were left in households that no longer produced economically. The "domestic sphere" ideology compensated for this economic displacement by elevating domestic management and child-rearing as morally superior to the commercial public sphere. This ideology later became the target of the first feminist movements, which demanded women\'s access to the public sphere the ideology had constructed as male.'},
            {'q': 'Trade unions\' political significance during industrialization was that they:',
             'correct': 'Created an organizational infrastructure for working-class collective action that extended beyond individual workplaces — trade union organization built workers\' capacity for sustained collective negotiation and eventually political mobilization, forming the organizational foundation for labor parties, minimum wage legislation, and welfare state development',
             'others': ['Trade unions were primarily social clubs with no political significance', 'Trade unions only represented skilled workers with no broader labor movement connections', 'Trade union organization undermined rather than strengthened working-class political power'],
             'exp': 'The organizational significance of trade unions is AP\'s mechanism connecting individual worker grievances to collective political action: individual workers are powerless against employers; organized workers in trade unions can strike and collectively bargain; multiple trade unions coordinating politically can demand legislation (Factory Acts, minimum wage); trade unions funding labor parties can achieve parliamentary representation. The organizational form — union → labor party → parliamentary representation — is the mechanism through which industrial workers achieved political power.'},
            {'q': 'The new middle class created by industrialization (factory owners, managers, professionals) was politically significant because:',
             'correct': 'The industrial middle class became the constituency for liberal democratic reform — they had economic power (business ownership, professional income) without political representation (aristocratic Parliament didn\'t represent them), creating the political pressure for parliamentary reform (1832 Reform Act) and liberalism as an ideology of rule by merit rather than birth',
             'others': ['The middle class aligned politically with the working class in labor movements', 'The middle class supported aristocratic rule and opposed parliamentary reform', 'The middle class had no distinctive political interests during industrialization'],
             'exp': 'Middle-class liberalism is AP\'s connection between industrialization and democratic reform: the emerging industrial middle class (manufacturers, merchants, professionals) created by capitalism had economic power but not political power in aristocratic parliamentary systems. Their political movement — liberalism (meritocracy, constitutional government, free trade, rule of law) — aimed to align political power with economic power. The 1832 Reform Act expanded suffrage to the middle class, fundamentally changing British politics. This is the mechanism connecting industrialization to democratization.'},
            {'q': 'For AP, the most significant social consequence of industrialization was:',
             'correct': 'The creation of a modern class structure — industrial bourgeoisie (capital owners) and industrial proletariat (wage workers) — whose structural conflict over wages, hours, and working conditions generated the political movements (trade unions, labor parties, socialism) that shaped 19th-20th century political history across the industrialized world',
             'others': ['Industrialization eliminated class differences by creating equal wages', 'The most significant consequence was improved living standards with no social conflict', 'Industrialization had no significant impact on social structure'],
             'exp': 'The class structure created by industrialization is the foundation of modern political history: the bourgeoisie-proletariat conflict Marx analyzed in 1848 structured political competition for the next century. Labor parties, welfare states, minimum wages, social insurance — all are political responses to the structural conflict between capital and labor that industrialization created. Understanding industrialization\'s social consequences is therefore understanding the origins of modern political institutions.'}
        ],
        dd_labels=[
            'The British working-class political movement (1838-1848) demanding universal male suffrage and democratic reform was ___',
            'The ideology that divided society into a male "public sphere" and female "domestic sphere" was ___',
            'Marx and Engels\' 1848 document calling for workers of the world to unite was ___'
        ],
        dd_opts=[
            ['Chartism', 'Luddism', 'Fabianism', 'Owenism'],
            ['Separate spheres ideology', 'Social Darwinism', 'The cult of progress', 'Liberal feminism'],
            ['The Communist Manifesto', 'Das Kapital', 'The Wealth of Nations', 'The Rights of Man']
        ],
        dd_correct=['Chartism', 'Separate spheres ideology', 'The Communist Manifesto'],
        hints=['British 1838-1848 — six demands — universal male suffrage — secret ballot — first mass working-class movement', 'Victorian ideology — public male sphere — domestic female sphere — industrialization context', 'Marx Engels 1848 — proletarian revolution — class struggle — workers of world unite'],
        dd_exp='Chartism represents working-class political organization demanding democratic inclusion; separate spheres ideology represents the gendered social structure industrialization created; and the Communist Manifesto represents the most radical intellectual response to industrial class conflict — together these three demonstrate the range of political responses industrial capitalism generated.'
    ),
    dict(
        pnum=6, id_pre='whir6',
        subtitle='Environmental Consequences and Global Economic Impact',
        key_concept='Industrialization transformed the natural environment at unprecedented scale and reorganized the global economy, creating patterns of unequal development that persist today. AP questions evaluate industrialization\'s long-term environmental consequences and the global economic inequalities it produced.',
        content_body='''## 📖 Environmental and Global Economic Consequences

> **Environmental Transformation**

Industrial production transformed the natural environment:

- **Air pollution:** Coal burning produced smoke, sulfur dioxide, particulates; London "pea-souper" fogs; respiratory disease
- **Water pollution:** Industrial waste discharged into rivers; Thames River biological death by 1850s
- **Land use change:** Strip mining, deforestation for timber and charcoal, habitat destruction
- **Scale:** Industrial pollution was qualitatively different from agricultural pollution — concentrated, chemical, unprecedented

> **Climate Foundations: The Carbon Economy**

Industrialization created the fossil fuel-based carbon economy:

- **Coal dominance (1750-1900):** From wood/water → coal → steam; carbon release at industrial scale
- **Oil emergence (late 19th century):** Pennsylvania oil (1859); internal combustion engine; petrochemical industry
- **Atmospheric CO2:** Industrial carbon emissions began measurable atmospheric accumulation in 19th century
- **Long-term consequence:** Industrial-era fossil fuel combustion is the primary driver of contemporary climate change

> **Global Economic Reorganization**

Industrialization reorganized the global economy into industrial and non-industrial zones:

| Zone | Role | Example |
|------|------|---------|
| **Industrial core** | Manufactured goods production; capital accumulation | Britain, then Germany, France, USA, Japan |
| **Periphery** | Raw material supply; market for manufactured goods | India (cotton), Egypt (cotton), West Africa (palm oil), South America (nitrates) |

This reorganization was often coercive:
- British tariff policies destroyed Indian textile manufacturing to create market for British goods
- Egyptian cotton monoculture created dependency on world cotton prices
- Latin American economies oriented toward raw material export for European industrial markets

> **AP Comparison Anchor**

- **Industrial core vs. periphery:** The structural inequality created by industrial-era global economic reorganization is the foundation of contemporary development economics
- **Industrialization and colonialism:** The most powerful industrializing states (Britain, France, Germany) used industrial military advantage (gunboats, rifles) to colonize non-industrial regions, creating self-reinforcing inequality''',
        questions=[
            {'q': 'The transformation of the Thames River (London) from a living river to a biologically dead river by the 1850s demonstrates:',
             'correct': 'Industrial-scale pollution exceeded natural systems\' capacity for self-purification — pre-industrial human and animal waste was biodegradable and at scales rivers could process; industrial chemical and organic waste at industrial concentrations overwhelmed river biology, demonstrating that industrialization created qualitatively new environmental problems not just larger versions of existing ones',
             'others': ['River pollution was a pre-industrial problem that industrialization had no significant impact on', 'Industrial pollution affected air but not water systems', 'The Thames was always biologically dead with no pre-industrial aquatic life'],
             'exp': 'The qualitative distinction in industrial pollution is AP\'s environmental history point: pre-industrial cities produced biodegradable organic waste that rivers could process at human-population scales; industrial cities produced concentrated chemical waste (dye works, tanneries, gas works) alongside massive organic waste that biological systems couldn\'t process. The 1858 "Great Stink" (Thames\' biological death in summer heat) finally forced London to build the sewage system that became the model for modern urban sanitation — another demonstration that industrial problems generated reform responses.'},
            {'q': 'The destruction of Indian textile manufacturing by British import tariff policies during industrialization demonstrates:',
             'correct': 'Industrial advantages were enforced through political and legal power, not just market competition — British manufacturers used political power (control of Indian colonial government) to impose tariffs eliminating Indian competition in Indian markets while British goods entered India tariff-free, deliberately destroying the world\'s most sophisticated pre-industrial textile industry to create captive markets for British factory goods',
             'others': ['Indian textiles were technically inferior to British machine-made textiles in all respects', 'British manufacturers outcompeted Indian textiles purely through market forces without political intervention', 'Indian textile industry was unimportant before British industrialization'],
             'exp': 'The destruction of Indian textiles is AP\'s most important example of how industrialization and colonialism were mutually reinforcing: Indian muslin (Dacca) was the highest quality cotton textile in the world — European aristocrats preferred it; British factories couldn\'t initially compete on quality. British policy solved this not through better products but through colonial power: imposing tariffs on Indian exports to Britain, allowing British goods into India duty-free. This political coercion of markets was as important to British industrial success as the steam engine.'},
            {'q': 'The creation of an industrial "core" and non-industrial "periphery" in the global economy demonstrates:',
             'correct': 'Industrialization did not benefit all regions equally — it created structural inequality between industrialized regions (which accumulated capital, technological capacity, and economic complexity) and non-industrialized regions that were reorganized as raw material suppliers for industrial economies, producing dependency relationships that persisted long after the industrial period',
             'others': ['Industrialization benefited all regions equally through market mechanisms', 'The core-periphery distinction disappeared when industrialization spread globally', 'Non-industrial regions voluntarily chose to be raw material suppliers'],
             'exp': 'The core-periphery model is AP\'s framework for understanding industrial-era global inequality: when British industry required cotton, Egyptian agriculture was reorganized toward cotton monoculture (under British financial and political pressure); this reorganization concentrated Egyptian agricultural resources in one crop tied to British industrial demand, creating structural vulnerability. This dependency didn\'t disappear when British hegemony ended — the infrastructure, economic relationships, and reduced agricultural diversity persisted. Contemporary development economics addresses the consequences of this industrial-era reorganization.'},
            {'q': 'Industrial military technology (gunboats, rifles, machine guns) and colonialism were related in that:',
             'correct': 'Industrial production of weapons created overwhelming military advantage for industrialized states over non-industrial ones — the same factories producing cotton and steel also produced superior weapons at industrial scale, enabling relatively small European forces to conquer and administer territories vastly larger than Europe\'s own population would have made possible through pre-industrial military methods',
             'others': ['Military technology had no significant impact on colonial conquest — diplomacy was the primary mechanism', 'Non-industrial societies had equal military capabilities to industrial states', 'Industrial military advantage was irrelevant because colonial conquest was voluntary'],
             'exp': 'The military-industrial connection is AP\'s explanation for the acceleration of European colonialism in the 19th century: maxim gun (1884), breech-loading rifles, and steam-powered gunboats gave European forces such overwhelming advantage that colonial conquest became militarily feasible at continental scale. The Berlin Conference (1884-85) dividing Africa among European powers was possible because industrial weapons made African resistance militarily futile (with notable exceptions like Ethiopia). Industrial production thus directly enabled colonial expansion.'},
            {'q': 'The fossil fuel basis of industrial capitalism demonstrates which long-term consequence?',
             'correct': 'Industrial-era decisions about energy systems created path dependencies that persist into the present — infrastructure, technology, and economic interests built around fossil fuel combustion from 1750 onward generated the accumulated atmospheric carbon that drives contemporary climate change, demonstrating that industrial-era choices have multi-generational consequences',
             'others': ['Fossil fuel use during industrialization had no environmental consequences', 'Industrial-era carbon emissions were too small to have any atmospheric effects', 'Renewable energy sources were available during industrialization but deliberately rejected'],
             'exp': 'Path dependency in energy systems is AP\'s connection between industrial history and contemporary environmental politics: industrial capitalism was built on coal; the infrastructure (railroads, steam engines, factories), economic interests (coal mining companies, railroad companies), and technologies (internal combustion engine, petrochemical industry) created around fossil fuels generated powerful resistance to transition to alternative energy. The CO2 accumulated from 1750 onward is the physical record of these historical decisions.'},
            {'q': 'Comparing industrialization\'s environmental consequences to its economic consequences reveals:',
             'correct': 'Economic benefits (increased production, rising living standards for industrial workers over time, capital accumulation) and environmental costs (pollution, resource depletion, atmospheric carbon accumulation) were distributed across different populations and different time periods — industrial workers and factory owners in the 19th century benefited economically while future generations globally bear the environmental costs',
             'others': ['Industrialization produced equal environmental and economic benefits for all populations', 'Economic and environmental consequences of industrialization were experienced identically by all groups', 'Environmental consequences of industrialization were limited to the industrial period with no lasting effects'],
             'exp': 'Distributional inequality across time and space is AP\'s most sophisticated environmental analysis: 19th-century British factory owners received economic profits; 19th-century workers eventually received rising wages; future generations globally receive accumulated atmospheric carbon. The beneficiaries and cost-bearers of industrialization are different people in different times and places — this temporal and geographic mismatch is why industrial-era environmental decisions were made without accounting for full costs. AP rewards recognizing this distributional dimension of industrial environmental history.'},
            {'q': 'For AP, the global economic reorganization created by industrialization is significant because:',
             'correct': 'Industrialization created the contemporary pattern of global economic inequality — industrialized nations accumulated capital, technological complexity, and economic diversity while non-industrialized regions were reorganized as raw material suppliers, creating structural dependencies that contemporary development economics still attempts to address and that define North-South economic relationships today',
             'others': ['Industrial-era economic organization was temporary and has no contemporary relevance', 'Global economic inequality existed before industrialization and was not significantly changed by it', 'All nations benefited equally from global economic reorganization during industrialization'],
             'exp': 'Contemporary relevance is AP\'s deepest lesson about industrialization: the patterns of global inequality that "development economics" addresses today — why are tropical commodity-exporting nations poor while temperate manufacturing nations are rich? — were largely constructed during the industrial era through the combination of colonial coercion, market reorganization, and military advantage. Understanding industrialization is understanding the origins of the contemporary world economic order.'}
        ],
        dd_labels=[
            'The British policy that destroyed Indian textile manufacturing to create captive markets for British factories was ___',
            'The global economic structure that divided the world into industrial producers and raw material suppliers was ___',
            'The industrial weapon that gave European forces overwhelming military advantage in colonial conquest was ___'
        ],
        dd_opts=[
            ['Protective tariff policy', 'The Navigation Acts', 'The East India Company charter', 'The Corn Laws'],
            ['The core-periphery system', 'The Zollverein', 'The gold standard', 'The Atlantic trade network'],
            ['The machine gun (maxim gun)', 'The steam engine', 'The railroad', 'The telegraph']
        ],
        dd_correct=['Protective tariff policy', 'The core-periphery system', 'The machine gun (maxim gun)'],
        hints=['British colonial power — tariffs on Indian exports — British goods duty-free in India — destroyed Dacca muslin industry', 'Global inequality — industrial core accumulates capital — periphery supplies raw materials — structural dependency', 'Hiram Maxim 1884 — first automatic machine gun — colonial conquest — Scramble for Africa'],
        dd_exp='Protective tariff policy demonstrates how colonialism enforced industrial market advantages; the core-periphery system describes the global economic inequality industrialization created; and the machine gun demonstrates how industrial weapons enabled colonial conquest — all three are dimensions of how industrialization transformed global power relationships.'
    ),
    dict(
        pnum=7, id_pre='whir7',
        subtitle='AP Review and Exam Mastery',
        key_concept='Industrial Revolution content appears across all AP exam formats — MCQ, SAQ, LEQ, and DBQ. Key themes include causes of British first-mover advantage, factory system social impacts, spread to other nations, and global economic consequences. Mastering both specific evidence and comparative frameworks is essential.',
        content_body='''## 📖 AP Review: The Industrial Revolution

> **Must-Know Vocabulary**

- **Enclosure movement** — Agricultural land consolidation that displaced rural workers; created industrial labor force
- **Steam engine (Watt)** — Power source freeing factories from water dependence; enabled urban industrialization
- **Factory system** — Concentrated mass production using wage labor and machinery; replaced domestic/artisan production
- **Proletariat** — Industrial working class; wage earners who own no means of production
- **Bourgeoisie** — Property-owning middle and capitalist class; factory owners, merchants, professionals
- **Luddites** — Skilled textile workers who destroyed machinery resisting deskilling (1811-1816)
- **Chartism** — British working-class political movement demanding democratic reform (1838-1848)
- **Zollverein** — German customs union (1834); created integrated market enabling industrialization
- **Meiji Restoration** — Japanese political transformation (1868) enabling deliberate state-directed industrialization
- **Zaibatsu** — Japanese industrial-financial conglomerates; built on Meiji state model factories
- **Core-periphery** — Global economic structure with industrial producers and raw material suppliers

> **Common AP Prompt Patterns**

- **Causation:** Why did Britain industrialize before other nations?
- **CCOT:** How did industrialization change social structures in Britain c. 1750-1900?
- **Comparison:** Compare German and British industrialization
- **Causation:** How did industrialization contribute to global economic inequality?
- **Evaluation:** Evaluate the extent to which industrialization improved living standards

> **AP Analysis Quick Reference**

| Topic | AP Evidence | AP Significance |
|-------|------------|----------------|
| Why Britain first | Enclosure + steam + coal + patents + empire | Multi-causal analysis |
| Factory conditions | Child labor, 14-hr days, industrial accidents | Reform movement causation |
| Global spread | Germany (state-led); Japan (Meiji); USA (railroads) | Multiple paths to industrialization |
| Environmental cost | Thames pollution; coal smog; carbon economy | Industrial cost distribution |
| Labor response | Luddites, unions, Chartism, Marxism | Working-class political development |''',
        questions=[
            {'q': 'An AP SAQ asks: "Briefly explain ONE cause of British industrialization." Which response earns full credit?',
             'correct': 'The enclosure movement (1750-1850) was a critical cause of British industrialization because it displaced rural agricultural workers by consolidating common lands into private farms, creating an urban industrial labor force — without this social mechanism producing workers willing to accept factory wages, the machinery of industrialization would have had no operators',
             'others': ['Naming the cause without explaining its specific mechanism', 'Describing Britain\'s geography without connecting it to industrialization causation', 'Listing multiple causes without developing any single one with specific evidence and reasoning'],
             'exp': 'Full SAQ credit: specific cause (enclosure movement) + specific evidence (consolidated common lands, 1750-1850) + mechanism (displaced rural workers → urban labor force) + connection to industrialization (machinery needed operators). AP SAQs require claim + evidence + reasoning in one developed point, not a list of possible causes.'},
            {'q': 'For an AP LEQ on British industrialization\'s social consequences, which thesis demonstrates the highest analytical sophistication?',
             'correct': 'Industrialization restructured British society by creating a new class configuration — industrial bourgeoisie and urban proletariat — whose structural conflict over wages and working conditions generated the reform movements (Factory Acts, Chartism, trade unionism) that transformed British political institutions, demonstrating that economic transformation drives political transformation through the mechanism of class formation and conflict',
             'others': ['Industrialization had both positive and negative social consequences', 'The factory system changed working conditions significantly', 'Industrialization created a middle class that was important for political reform'],
             'exp': 'This thesis earns full AP credit: identifies specific social change (class configuration), uses specific evidence (bourgeoisie, proletariat), explains the mechanism (structural conflict → reform movements), uses specific evidence for reform (Factory Acts, Chartism, trade unions), and provides the AP-level analytical claim (economic transformation → political transformation through class conflict). The sophistication is the causal chain: economy → class structure → political conflict → institutional reform.'},
            {'q': 'A DBQ document from a British factory owner (1835) argues that factory conditions are good for workers. What is the most sophisticated sourcing?',
             'correct': 'A factory owner writing in 1835 had direct knowledge of factory operations and specific commercial incentives: claiming good conditions reduced political pressure for regulatory legislation (Factory Acts were being debated) and labor unrest; his perspective represents capital\'s interests in the class conflict over factory conditions — the document reveals both his operational knowledge and his defensive political purposes',
             'others': ['Factory owners are completely objective observers with no interests in the debate', 'The document is worthless as evidence because factory owners are always biased', 'Sourcing analysis is unnecessary for 19th-century industrial documents'],
             'exp': 'Sophisticated sourcing addresses specific historical context: 1835 is precisely when Factory Act reform was being debated in Parliament; a factory owner writing then had specific political motivation to argue good conditions. The sourcing doesn\'t dismiss the document (factory owners do know factories) but explains why it argues what it argues: defending against reform legislation. Point of view + historical situation + purpose = full AP sourcing credit.'},
            {'q': 'Comparing Luddism (skill-based resistance to industrialization) to Chartism (democratic political demands) demonstrates:',
             'correct': 'Working-class responses to industrialization evolved from direct economic action (destroying machinery that threatened skilled work) toward democratic political demands (universal suffrage to achieve economic justice through legislation) — demonstrating that workers developed political sophistication over time as direct economic action proved insufficient',
             'others': ['Luddism and Chartism had identical goals and methods', 'Chartism preceded Luddism and was the more radical movement', 'Working-class movements had no evolution — responses remained constant throughout industrialization'],
             'exp': 'The Luddism-to-Chartism evolution demonstrates AP\'s theme of working-class political development: direct action (destroying machines) was the initial response when workers had no political channels; as it proved ineffective (government used military to suppress Luddism), working-class organizing shifted toward political demands (Chartism) that could achieve legislative change. This evolution from economic action to political action is the story of how the working class became a political actor rather than simply an economic one.'},
            {'q': 'The comparison between Japanese Meiji industrialization and European industrialization reveals:',
             'correct': 'Both used industrial technology for national power, but Europe industrialized within the existing colonial system it was creating; Japan industrialized explicitly to avoid being colonized, demonstrating that the same industrial technology and methods could be adopted for opposite geopolitical purposes — expanding colonial power or resisting colonial domination',
             'others': ['Japanese and European industrialization had identical purposes and outcomes', 'Japan failed to industrialize effectively and remained a colonial subject', 'European industrial nations deliberately helped Japan industrialize'],
             'exp': 'The geopolitical dimension of industrialization is AP\'s most sophisticated comparative point: European industrial states used industrial military advantage to colonize others; Japan used industrial development to prevent being colonized. Same industrial methods, opposite geopolitical purposes. Japan\'s success (defeating Russia in 1905) demonstrated that industrialization could neutralize the power differential that made European colonization of non-industrial societies possible — a lesson noted across Asia and Africa.'},
            {'q': 'An AP CCOT on industrial-era global economic change should identify which as the most significant development?',
             'correct': 'The most significant change was the creation of a structural global economic inequality between industrialized "core" nations (accumulating capital, technology, and economic complexity) and non-industrialized "periphery" regions (reorganized as raw material suppliers) — a division reinforced by colonial coercion that created dependencies persisting into the contemporary global economy',
             'others': ['Industrialization eliminated global economic inequality by spreading prosperity universally', 'The most significant change was the introduction of new commodities with no structural inequality dimension', 'Industrial-era economic organization was temporary and reversed itself within a generation'],
             'exp': 'CCOT requires identifying the most historically significant change: not just "factories were built" but the structural reorganization of the global economy into industrial and non-industrial zones with different accumulation trajectories. The continuity is that this structure, once created by industrialization and reinforced by colonialism, did not disappear when colonialism formally ended — contemporary "developing world" economic challenges are the continuity from industrial-era structural inequality. AP rewards analysis that identifies structural rather than surface-level changes.'},
            {'q': 'For AP, the most important analytical skill in studying the Industrial Revolution is:',
             'correct': 'Distinguishing between the unequal distribution of industrialization\'s benefits (higher productivity, eventually rising living standards) and costs (working conditions, pollution, global inequality) — AP analysis requires recognizing that the same industrial transformation produced very different experiences for factory owners vs. factory workers, for British manufacturers vs. Indian weavers, for the 19th century vs. future generations',
             'others': ['Memorizing dates and inventions is the most important skill for AP Industrial Revolution questions', 'Understanding industrialization requires only European history with no global context', 'AP Industrial Revolution questions can be answered without distinguishing different groups\' experiences'],
             'exp': 'Distributional analysis is AP\'s most valued skill: the same industrial transformation that increased British national wealth simultaneously destroyed Indian textile manufacturing, created child labor, produced cholera epidemics in working-class neighborhoods, and released the carbon now driving climate change. AP rewards analysis that asks "who benefited?" and "who paid the cost?" rather than just "did production increase?" This distributional perspective is the foundation of both contemporary economic analysis and AP historical analysis.'}
        ],
        dd_labels=[
            'The British working-class political movement (1838-1848) demanding universal male suffrage was ___',
            'Japan\'s 1868 political transformation that enabled state-directed industrialization was ___',
            'The global economic structure dividing industrial producers from raw material suppliers was ___'
        ],
        dd_opts=[
            ['Chartism', 'Luddism', 'Trade unionism', 'Fabianism'],
            ['The Meiji Restoration', 'The Tokugawa Shogunate', 'The Samurai Revolution', 'The Boxer Uprising'],
            ['The core-periphery system', 'The gold standard', 'Free trade imperialism', 'The Zollverein']
        ],
        dd_correct=['Chartism', 'The Meiji Restoration', 'The core-periphery system'],
        hints=['British 1838-1848 — six demands — universal suffrage — working-class political movement', 'Japan 1868 — emperor restored — feudalism ended — deliberate Westernization to avoid colonialism', 'Industrial inequality — core accumulates — periphery supplies raw materials — structural dependency'],
        dd_exp='Chartism, the Meiji Restoration, and the core-periphery system represent three AP-essential aspects of industrialization: working-class political response, deliberate non-European industrialization for self-defense, and the global economic inequality industrialization created — mastering all three demonstrates comprehensive understanding of industrialization\'s global significance.'
    ),
]

for p in parts_data:
    content = make_file(
        p['pnum'], p['id_pre'], p['subtitle'], p['key_concept'],
        p['content_body'], p['questions'],
        p['dd_labels'], p['dd_opts'], p['dd_correct'],
        p['hints'], p['dd_exp']
    )
    w(f"{SLUG}-part{p['pnum']}.ts", content)

print("All industrial revolution parts done!")
