#!/usr/bin/env python3
"""Write wh-revolutions parts 2-7."""
import os

base = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))),
                    'src', 'data', 'interactive-lessons')

def w(filename, content):
    with open(os.path.join(base, filename), 'w') as f:
        f.write(content)
    print(f"✓ {filename}")

SLUG = 'wh-revolutions'

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
    return f"""export const whRevolutionsPart{pnum}Data = {{
  topicSlug: '{SLUG}',
  sections: [
    {{
      id: '{id_pre}-intro',
      type: 'text' as const,
      content: `
# ⚔️ Revolutions and Independence Movements

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
    dict(pnum=2, id_pre='whrv2',
         subtitle='Simón Bolívar and the Liberation of South America',
         key='Simón Bolívar (1783-1830) was the most prominent leader of South American independence, liberating Venezuela, Colombia, Ecuador, Peru, and Bolivia from Spanish rule. AP questions focus on his Enlightenment influences, his complex racial politics, his vision of a unified Latin America, and why that vision failed.',
         body='''## 📖 Simón Bolívar: El Libertador

> **Background and Influences**

Bolívar was born into Venezuelan creole elite; educated by Simón Rodríguez in Enlightenment philosophy:
- Read Locke, Rousseau, Montesquieu; deeply influenced by natural rights and social contract
- Visited Napoleon\'s Europe; initially admired Napoleon\'s model; later turned against monarchy
- Took an oath in Rome (1805) to liberate Venezuela from Spain
- Influenced by Haitian Revolution but also feared its radical racial implications

> **Military Campaigns**

| Campaign | Region | Years | Outcome |
|---------|--------|-------|---------|
| **Venezuela** | Northern South America | 1810-1821 | Venezuelan independence |
| **New Granada** | Modern Colombia | 1819 | Colombian independence |
| **Gran Colombia** | Venezuela + Colombia + Ecuador | 1819-1830 | Created then dissolved |
| **Peru** | Western coast | 1823-1824 | Peruvian independence with San Martín |
| **Bolivia** | Named after Bolívar | 1825 | Bolivian independence |

> **Bolívar\'s Political Vision**

Bolívar had a complex political vision that evolved:

- **Jamaica Letter (1815):** Argued Latin America needed strong executive power, not pure democracy; feared social chaos without order
- **Angostura Address (1819):** Called for constitutional republic with strong presidency; hereditary Senate
- **Gran Colombia:** Attempted political union of northern South America; failed 1830 due to regional rivalries
- **Failed unity:** Died in 1830 saying he had "plowed the sea" — liberation achieved; stable unified governance failed

> **AP Comparison Anchor**

- **Bolívar vs. Washington:** Both led military liberation; Washington stepped down; Bolívar sought strong executive power fearing democracy would produce chaos — different models of revolutionary leadership
- **Bolívar\'s racial politics:** Needed indigenous and Afro-Latin support for armies; promised freedom but creole elite interests ultimately dominated; contradictions between liberation rhetoric and social hierarchy maintenance''',
         qs=[
             {'q': 'Bolívar\'s "Jamaica Letter" (1815) argument for strong executive power demonstrates:',
              'correct': 'His belief that Latin American societies, with their colonial heritage of racial hierarchy and lack of democratic tradition, required strong centralized leadership rather than the liberal democracy appropriate for more homogeneous societies — distinguishing his republican vision from North American federalism and revealing the elitist assumptions underlying creole liberation movements',
              'others': ['Bolívar believed that pure democracy was the only appropriate government for Latin America', 'The Jamaica Letter was primarily a military document with no political philosophy', 'Bolívar argued for monarchy as the only stable form of Latin American government'],
              'exp': 'The Jamaica Letter is AP\'s window into Bolívar\'s political thought: he genuinely believed in republican principles but doubted that Latin American societies (racially diverse, educationally limited under colonial rule, without democratic tradition) could sustain pure liberal democracy. He feared popular democracy would produce racial conflict (Haiti was on his mind) and regional fragmentation. This elitist republicanism — liberty for educated elites; ordered government for the masses — is the conservative underpinning of creole liberation.'},
             {'q': 'The failure of Gran Colombia (1819-1830) to maintain unity demonstrates:',
              'correct': 'That regional, geographic, and elite factional interests were stronger than the pan-South American identity Bolívar sought to create — the vast geographic distances, different regional economies, and competing creole elite interests in Venezuela, Colombia, and Ecuador made unified governance practically impossible despite shared Spanish colonial heritage',
              'others': ['Gran Colombia failed because Bolívar was a poor military commander', 'Spanish reconquest destroyed Gran Colombia', 'Gran Colombia failed because its population was too small to sustain a state'],
              'exp': 'Gran Colombia\'s dissolution demonstrates AP\'s theme about nationalism vs. regionalism: Bolívar\'s vision of pan-South American unity was an intellectual concept without a corresponding social reality — there was no "Gran Colombian" national identity to hold the union together against centrifugal regional interests. Venezuelan creoles, Colombian creoles, and Ecuadorian creoles shared Spanish colonial heritage but had distinct regional economies and political cultures. The dissolution foreshadowed the fragmentation of Latin American independence movements generally.'},
             {'q': 'Comparing Bolívar to George Washington reveals which key difference?',
              'correct': 'Both led military independence movements and became national heroes, but Washington voluntarily stepped down from power (establishing civilian supremacy over military) while Bolívar increasingly sought concentrated executive authority, reflecting their different assessments of whether their societies were ready for liberal democracy — a difference that shaped the subsequent political development of their respective nations',
              'others': ['Washington and Bolívar had identical approaches to post-revolutionary governance', 'Bolívar stepped down voluntarily while Washington sought to remain in power', 'Both leaders believed strong executive power was necessary for stable post-revolutionary governance'],
              'exp': 'The Washington-Bolívar comparison is AP\'s most productive comparison in 19th-century revolutionary leadership: Washington\'s voluntary surrender of power (twice — after the Revolution and after two terms as president) established the precedent of civilian supremacy that shaped American political culture. Bolívar\'s seeking of concentrated executive power (and being compared to Napoleon as a result) reflected both his assessment of Latin American conditions and established a different precedent — the caudillo (strong military leader) tradition in Latin American politics.'},
             {'q': 'Bolívar\'s famous deathbed declaration that he had "plowed the sea" expressed:',
              'correct': 'His disillusionment that military liberation from Spain had not produced the stable, unified, democratic republics he had envisioned — independence had been achieved but political instability, regional fragmentation, and social inequality persisted, suggesting that political liberation without social transformation had failed to create the foundation for viable republican governance',
              'others': ['He was expressing satisfaction with the complete success of his liberation campaigns', 'He was describing the naval campaigns that had been central to his military strategy', 'The statement referred to agricultural development programs he had implemented'],
              'exp': '"Plowed the sea" is one of history\'s most eloquent political epitaphs: the metaphor captures the futility of Bolívar\'s effort to plant stable governance in the fluid, unstable conditions of newly independent Latin America. Independence had been achieved, but the social, educational, and institutional conditions for stable democratic republicanism had not been created. Bolívar recognized at his death that liberation from Spain was only the first step — and that the next steps (building stable democratic institutions, addressing racial and social inequality) remained unfinished.'},
             {'q': 'Bolívar\'s complex racial politics (needing Afro-Latin and indigenous support while maintaining creole social hierarchy) demonstrate:',
              'correct': 'The fundamental tension in creole liberation movements between the military necessity of incorporating non-elite populations into armies and the social desire to maintain creole political and economic dominance after independence — Bolívar needed Black and indigenous soldiers to win but did not intend to extend political or economic equality to them after victory',
              'others': ['Bolívar consistently extended political equality to all racial groups throughout his campaigns', 'Racial politics were irrelevant to Bolívar\'s military strategy', 'Bolívar\'s armies were composed exclusively of creole elite soldiers'],
              'exp': 'Military necessity vs. social ideology is AP\'s framework for creole racial politics: Bolívar\'s armies in Venezuela and Colombia included significant numbers of llaneros (mixed-race cowboys), enslaved people who were promised freedom for military service, and indigenous soldiers — without them, the military campaigns would have failed. But Bolívar\'s political vision was of a creole-led republic where these military allies would remain in subordinate social positions. This tension between military inclusion and political exclusion defines the contradictions of Latin American liberation movements.'},
             {'q': 'José de San Martín\'s voluntary retreat in favor of Bolívar at Guayaquil (1822) demonstrates:',
              'correct': 'That San Martín prioritized the goal of South American liberation over personal political ambition — recognizing that two strong-willed leaders could not share power and that continued conflict between them would harm the liberation cause, he removed himself to allow Bolívar to complete the liberation of Peru without the political complication of competing authority',
              'others': ['San Martín was militarily defeated by Bolívar and forced to withdraw', 'San Martín was removed from command by the Spanish authorities', 'The Guayaquil meeting ended in agreement about jointly governing South America'],
              'exp': 'The Guayaquil meeting is AP\'s evidence for San Martín\'s different leadership model: where Bolívar sought personal power and unified command, San Martín was willing to subordinate himself to the larger cause. His voluntary withdrawal to Europe (eventually dying in France in 1850) is the historical fact that demonstrates this. AP uses this comparison to show that revolutionary leaders make different personal choices with different consequences — San Martín\'s selfless withdrawal is both admirable and demonstrates that creole liberation movements produced leaders with different concepts of republican leadership.'},
             {'q': 'For AP, Bolívar\'s legacy is best evaluated as:',
              'correct': 'Genuinely liberating at the military level (achieving independence from Spain for multiple nations) but ultimately limited at the political and social levels (failing to create stable democratic institutions, failing to extend social equality to non-creole populations, failing to achieve Latin American unity) — demonstrating that military liberation is necessary but insufficient for complete revolutionary transformation',
              'others': ['Bolívar\'s liberation achieved complete social, political, and economic transformation of South America', 'Bolívar\'s military failures make him historically insignificant', 'His greatest achievement was the social revolution he implemented after military victory'],
              'exp': 'Multi-level evaluation is AP\'s analytical standard: Bolívar succeeded militarily (five nations liberated), partially succeeded politically (republican governments established, though unstable), and largely failed socially (creole hierarchy maintained, democratic institutions fragile). The AP evaluation criterion is whether independence achieved what it promised — and the answer is mixed. Military liberation from Spain was achieved; social equality and stable democracy were not. This mixed evaluation is more accurate than either hagiography (Bolívar as complete liberator) or condemnation (Bolívar as failed dictator).'}
         ],
         dl=['Bolívar\'s 1815 political letter arguing for strong executive power in Latin America was ___',
             'The short-lived union of Venezuela, Colombia, and Ecuador created by Bolívar (1819-1830) was ___',
             'The meeting where San Martín voluntarily stepped aside for Bolívar to complete Peru\'s liberation was ___'],
         do_=[['The Jamaica Letter', 'The Angostura Address', 'The Declaration of Independence', 'The Liberator\'s Manifesto'],
              ['Gran Colombia', 'United States of Latin America', 'Federation of the Andes', 'Bolivarian Republic'],
              ['The Guayaquil meeting', 'The Lima conference', 'The Caracas congress', 'The Buenos Aires summit']],
         dc=['The Jamaica Letter', 'Gran Colombia', 'The Guayaquil meeting'],
         hints=['1815 — Jamaica — Bolívar in exile — argued for strong executive — feared democratic chaos', 'Northern South America — Venezuela Colombia Ecuador — 1819-1830 — dissolved due to regionalism', '1822 — Ecuador — San Martín stepped aside — Bolívar completed Peru liberation'],
         dexp='The Jamaica Letter reveals Bolívar\'s conservative republicanism; Gran Colombia demonstrates both his unification vision and its failure; and the Guayaquil meeting demonstrates the contrast between Bolívar\'s and San Martín\'s leadership models — together they reveal the full complexity of South American liberation leadership.'
    ),
    dict(pnum=3, id_pre='whrv3',
         subtitle='European Nationalism and the Revolutions of 1848',
         key='19th-century European nationalism produced the Revolutions of 1848 ("Spring of Nations"), when liberal and nationalist movements swept across Europe demanding constitutional government and national self-determination. AP questions focus on why 1848 revolutions mostly failed in the short term while nationalism succeeded in the long term through the unification of Germany and Italy.',
         body='''## 📖 European Nationalism and 1848

> **What is Nationalism?**

Nationalism = the belief that people sharing language, culture, and history constitute a "nation" with the right to self-governance. In 19th century Europe, this challenged:

1. **Multi-national empires:** Austrian Empire ruled Germans, Hungarians, Czechs, Poles, Italians — nationalism threatened its existence
2. **Fragmented nations:** Germans lived in 39 separate states; Italians in multiple kingdoms — nationalism demanded unification
3. **Absolute monarchy:** Nationalism implied popular sovereignty — people governing themselves — challenging royal authority

> **The Revolutions of 1848 ("Spring of Nations")**

Revolutions erupted across Europe in 1848:

| Country | Demands | Outcome |
|---------|---------|---------|
| **France** | End of July Monarchy; republic | Short-term: Second Republic; long-term: Napoleon III |
| **German states** | Constitutional government; German unification | Frankfurt Parliament met; produced constitution; failed |
| **Austrian Empire** | Liberal constitution; national autonomy | Suppressed by Austrian and Russian armies |
| **Italy** | Constitutional government; end of Austrian rule in north | Suppressed |
| **Hungary** | Autonomy from Austria | Defeated by Austrian + Russian forces |

**General outcome:** Most 1848 revolutions failed by 1849 — old order restored

> **Why 1848 Revolutions Failed**

- **Class divisions:** Liberal middle class and radical working class had different goals; when workers became radical, middle class sided with order
- **Military:** European armies remained loyal to monarchs; revolutions had no military counterforce
- **Russian intervention:** Tsar Nicholas I sent Russian army to crush Hungarian revolution (1849)
- **Nationalism vs. liberalism:** Different nationalist groups fought each other (Germans vs. Czechs vs. Hungarians) rather than uniting against imperial powers

> **Long-Term Consequence: Unification through "Blood and Iron"**

- **Germany:** Otto von Bismarck (Prussia) unified Germany through three wars (1864-1871), not liberal revolution
- **Italy:** Cavour (Piedmont) + Garibaldi (nationalist) unified Italy 1859-1871
- **Key lesson:** Nationalism succeeded not through liberal revolution (1848 failed) but through state-directed military power''',
         qs=[
             {'q': 'The Revolutions of 1848 failed primarily because:',
              'correct': 'Class divisions within the revolutionary coalitions allowed monarchical governments to reassert control — when liberal middle-class reformers achieved constitutional concessions and working-class radicals pushed for further social transformation, middle-class liberals chose social order over revolutionary solidarity, leaving radicals isolated and enabling conservative counter-revolution',
              'others': ['Nationalist ideas had no popular support in 1848', 'The revolutions failed because of lack of Enlightenment influence', 'Foreign intervention was the only reason the revolutions failed'],
              'exp': 'The class fracture in 1848 is AP\'s key mechanism for why the "Spring of Nations" withered: middle-class liberals wanted constitutional government and national representation; working-class radicals wanted social and economic reform. When workers took to the streets demanding more than the middle class wanted, liberal reformers supported suppression of working-class radicalism (as in the Paris "June Days" 1848 massacre). This internal fracture prevented sustained revolutionary pressure and allowed conservative restoration.'},
             {'q': 'Bismarck\'s approach to German unification differed from 1848 liberal nationalism in that:',
              'correct': 'Where 1848 liberals sought German unification through popular constitutional movements (Frankfurt Parliament), Bismarck achieved it through Prussian military conquest and diplomatic manipulation of European powers — demonstrating that "Realpolitik" (practical power politics) succeeded where idealistic liberal nationalism had failed',
              'others': ['Bismarck was a liberal democrat who implemented the Frankfurt Parliament\'s constitution', 'The 1848 liberals and Bismarck had identical approaches to German unification', 'Bismarck opposed German unification and only reluctantly accepted it'],
              'exp': 'Bismarck\'s "blood and iron" approach is AP\'s definitive contrast with liberal nationalism: the Frankfurt Parliament (1848-1849) tried to unify Germany through constitutional deliberation and popular legitimacy — and failed because it had no military force. Bismarck unified Germany through three wars (against Denmark 1864; Austria 1866; France 1870-71) that Prussia won by military superiority. "The great questions of the day are not decided by speeches and majority votes but by blood and iron" (Bismarck, 1862) was not rhetoric — it was his strategy.'},
             {'q': 'The Austrian Empire\'s suppression of Hungarian nationalism in 1848-1849 (with Russian military assistance) demonstrates:',
              'correct': 'That multinational empires responded to nationalist challenges with military force rather than accommodation, and that the conservative international order (represented by Russia\'s intervention against revolution) was strong enough to suppress nationalist movements that lacked their own state military apparatus',
              'others': ['Hungary\'s nationalism was suppressed without foreign military assistance', 'The Austrian Empire granted Hungarian autonomy in response to the 1848 revolution', 'Russian military intervention in Hungary had no connection to Tsar Nicholas I\'s anti-revolutionary conservatism'],
              'exp': 'Russian intervention in Hungary is AP\'s evidence for the conservative international order\'s power in 1848: the Holy Alliance (Russia, Austria, Prussia) had committed to mutual defense of monarchical order against revolution. When Hungary\'s nationalist revolution threatened the Austrian Empire, Russia\'s deployment of 200,000 troops to suppress it was the Holy Alliance in action. This demonstrated that nationalist movements without their own state armies could be crushed by the military power of established conservative monarchies.'},
             {'q': 'The Frankfurt Parliament\'s failure to create a unified Germany (1848-1849) demonstrates:',
              'correct': 'That liberal nationalism\'s assumption that nations could govern themselves through deliberative constitutional assemblies was impractical without military force — the Frankfurt Parliament produced a sophisticated constitution but had no army to enforce it; when the Prussian and Austrian kings rejected it, the Parliament had no means of compelling compliance',
              'others': ['The Frankfurt Parliament failed because its delegates had no nationalist vision', 'The Parliament failed because Prussia and Austria agreed to support it but later changed their minds', 'The Parliament\'s constitution was poorly designed and unworkable'],
              'exp': 'Military force and state sovereignty is AP\'s practical lesson from Frankfurt: the Parliament was composed of German liberals, professors, lawyers, and professionals — but it had no coercive power. A constitution means nothing without enforcement capacity. When Frederick William IV of Prussia rejected the "crown from the gutter" (popular rather than dynastic legitimacy), the Parliament had no way to compel him. Bismarck drew the lesson: German unification required Prussian military power, not liberal deliberation.'},
             {'q': 'Italian unification (Risorgimento) through the combined efforts of Cavour (diplomacy) and Garibaldi (popular nationalism) demonstrates:',
              'correct': 'That successful nationalism in 19th-century Europe required both elite state power (Cavour\'s Piedmontese diplomacy and military alliances) and popular mobilization (Garibaldi\'s "Thousand Redshirts" in southern Italy), but that elite power ultimately controlled the outcome — Garibaldi\'s popular movement was subordinated to Piedmontese state interests rather than producing a democratic republic',
              'others': ['Italian unification was achieved purely through popular democratic movements without elite involvement', 'Cavour opposed Italian unification and only reluctantly accepted Garibaldi\'s conquests', 'Italian unification was completed without any military force — through diplomatic agreement alone'],
              'exp': 'The Cavour-Garibaldi dynamic is AP\'s Italian unification model: Cavour used Realpolitik (allying with France against Austria, manipulating diplomatic situations) to create the northern Italian state; Garibaldi\'s popular movement conquered southern Italy (Kingdom of Two Sicilies) and offered it to the Piedmontese king rather than creating a democratic republic — demonstrating that mass nationalism served as the mobilizing force while elite state power determined the ultimate political settlement.'},
             {'q': 'Comparing 1848 European revolutions to the Latin American independence movements reveals:',
              'correct': 'Both were partly inspired by Enlightenment ideas about natural rights and popular sovereignty, and both generally failed to achieve their most radical goals — 1848 revolutions failed to maintain constitutional governments; Latin American independence maintained creole social hierarchy — demonstrating that aspirational revolutionary ideals consistently encounter conservative resistance that limits revolutionary transformation',
              'others': ['Both achieved their complete revolutionary goals without significant setbacks', 'Latin American independence was more successful than 1848 revolutions in achieving social transformation', 'Both movements had identical social bases and identical outcomes'],
              'exp': 'The limited-revolution comparison is AP\'s meta-pattern connecting Atlantic revolutions to 1848 European revolutions: aspirational ideals (natural rights, national self-determination, popular sovereignty) consistently encountered conservative resistance (monarchical military power, creole class interests, Russian intervention) that limited transformation. The pattern — revolutionary aspiration + conservative resistance = limited outcome — recurs across contexts. AP rewards recognizing this pattern while acknowledging each context\'s specific features.'},
             {'q': 'For AP, the most important lesson from the failure of 1848 liberal nationalism is:',
              'correct': 'That political ideals (constitutional government, national self-determination) cannot be implemented without coercive power to enforce them against opponents who have their own coercive power — the Frankfurt Parliament and Italian liberal movements had ideals without armies; Bismarck and Cavour had armies and achieved what liberal idealism could not, demonstrating that in 19th-century state competition, power precedes principle',
              'others': ['Nationalism was proven to be impossible by the 1848 failures', 'Liberal ideas were simply wrong and deserved to fail', 'Military force is never relevant to political change — only ideas matter'],
              'exp': 'The Realpolitik lesson from 1848 is AP\'s hardest analysis: it\'s uncomfortable but historically accurate that Bismarck\'s "blood and iron" succeeded where liberal deliberation failed. This is not an endorsement of Bismarck\'s methods but a recognition of 19th-century European political reality: states had armies; assemblies did not; armies determined political outcomes. The lesson is not that liberal ideals were wrong but that implementing them required engaging with the existing power structure — a lesson that shaped subsequent reform movements from labor unions to suffragists.'}
         ],
         dl=['The German liberal assembly that produced a constitution for unified Germany (1848-1849) but failed without military power was ___',
             'The Prussian chancellor who unified Germany through "blood and iron" rather than liberal revolution was ___',
             'The Italian nationalist who led the "Thousand Redshirts" conquest of southern Italy was ___'],
         do_=[['The Frankfurt Parliament', 'The Zollverein', 'The German Confederation', 'The Holy Roman Empire'],
              ['Otto von Bismarck', 'Frederick William IV', 'Kaiser Wilhelm I', 'Metternich'],
              ['Giuseppe Garibaldi', 'Camillo di Cavour', 'Victor Emmanuel II', 'Giuseppe Mazzini']],
         dc=['The Frankfurt Parliament', 'Otto von Bismarck', 'Giuseppe Garibaldi'],
         hints=['German liberals — 1848-1849 — Frankfurt — produced constitution — no army — rejected by Prussia', 'Prussian chancellor — Realpolitik — three wars 1864-1871 — blood and iron — created German Empire', 'Italian nationalist — Thousand Redshirts — Sicily — southern Italy — offered to Piedmont king'],
         dexp='The Frankfurt Parliament demonstrates liberal nationalism\'s failure without military power; Bismarck demonstrates how German unification actually succeeded through Realpolitik; and Garibaldi demonstrates how popular nationalism was harnessed and subordinated to elite state interests in Italian unification — all three reveal the gap between liberal nationalist ideals and the coercive realities of 19th-century state-building.'
    ),
    dict(pnum=4, id_pre='whrv4',
         subtitle='German Unification Under Bismarck',
         key='Otto von Bismarck unified Germany through three wars (against Denmark 1864, Austria 1866, France 1870-71) using calculated Realpolitik — manipulating alliances and provoking wars at strategically advantageous moments. AP questions evaluate Bismarck\'s methods, compare German to Italian unification, and assess how the new German Empire changed the European balance of power.',
         body='''## 📖 German Unification Under Bismarck

> **Otto von Bismarck: Background and Philosophy**

- **Background:** Prussian Junker (landed aristocrat); conservative; appointed Minister-President of Prussia 1862
- **Realpolitik:** "Practical politics" — pursuit of national interest through pragmatic means, not ideology
- **Famous declaration:** "The great questions of the day are not decided by speeches and majority votes, but by blood and iron" (1862)
- **Goal:** Prussian-led German unification under Hohenzollern monarchy, not liberal democratic republic

> **The Three Wars of Unification**

| War | Opponent | Year | Prussian Goal | Outcome |
|-----|---------|------|--------------|---------|
| **Danish War** | Denmark | 1864 | Seize Schleswig-Holstein | Prussia + Austria defeated Denmark |
| **Austro-Prussian War** (Seven Weeks War) | Austria | 1866 | Exclude Austria from German affairs | Prussia won in 7 weeks; Austria excluded from future German state |
| **Franco-Prussian War** | France | 1870-71 | Unite German states against common enemy; annex Alsace-Lorraine | German Empire proclaimed in Hall of Mirrors, Versailles (1871) |

> **The German Empire (Second Reich)**

- **Created:** January 18, 1871 — proclaimed in Hall of Mirrors at Versailles
- **Constitution:** Federal (22 German states) with Prussian dominance; Kaiser (emperor) = Prussian king; Chancellor = executive
- **Economy:** Rapid industrialization; steel, chemicals, electrical industry; overtook Britain in many sectors by 1900
- **Military:** Largest standing army in Europe; professional officer corps (Junker tradition)
- **International impact:** Upset European balance of power; France's desire to recover Alsace-Lorraine — one of WWI\'s underlying causes

> **AP Comparison Anchor**

- **Bismarck vs. Metternich:** Metternich (Austrian) maintained conservative order by preventing nationalism; Bismarck (Prussian) achieved conservative goals BY using nationalism — fundamentally different conservative strategies
- **Bismarck\'s alliance system:** After 1871, maintained complex alliances to isolate France and preserve German dominance — foundation of European alliance system that produced WWI after Bismarck\'s dismissal (1890)''',
         qs=[
             {'q': 'The Franco-Prussian War\'s proclamation of the German Empire at Versailles (January 18, 1871) was symbolically significant because:',
              'correct': 'Proclaiming the German Empire in the French royal palace at Versailles deliberately humiliated France and symbolized France\'s defeat — using the site of French royal glory as the venue for German national triumph created a deep French humiliation that fueled the revanchism (desire to recover Alsace-Lorraine and avenge the defeat) that contributed to WWI',
              'others': ['Versailles was chosen for practical logistical reasons with no symbolic intent', 'France was indifferent to the Versailles location of the German proclamation', 'The German Empire was actually proclaimed in Berlin, not Versailles'],
              'exp': 'The Versailles choice was not accidental — it was deliberate psychological warfare: France\'s King Louis XIV had built Versailles as the symbol of French glory and power; proclaiming German imperial triumph there reversed the symbolism. The French humiliation produced exactly what Bismarck might have feared: French revanchism became a permanent feature of European politics, making Franco-German reconciliation impossible and contributing to the alliance competition that produced WWI. The choice of Versailles is one of history\'s most consequential symbolically charged decisions.'},
             {'q': 'Bismarck\'s manipulation of the Ems Telegram (1870) to provoke the Franco-Prussian War demonstrates:',
              'correct': 'Bismarck\'s willingness to use manufactured diplomatic incidents to create the political conditions he needed — by editing a diplomatic telegram to make a Prussian refusal seem insulting to France, he provoked France to declare war, which allowed him to portray Prussia as defending itself against French aggression and rally all German states behind Prussia',
              'others': ['The Ems Telegram was an authentic French diplomatic insult with no Prussian manipulation', 'Bismarck preferred defensive wars and never provoked conflicts deliberately', 'France declared war on Prussia without any diplomatic incident as pretext'],
              'exp': 'The Ems Dispatch is AP\'s clearest example of Bismarckian Realpolitik in action: the original telegram was a routine diplomatic refusal; Bismarck edited it to make it sound like a Prussian rebuff of French demands; the edited version was published; French public opinion and Napoleon III\'s government felt insulted and declared war; Prussia then had a war it had provoked but could claim was defensive. This is Realpolitik — using available means (including deception) to achieve predetermined strategic goals.'},
             {'q': 'The German Empire\'s rapid industrialization after 1871 demonstrates:',
              'correct': 'That political unification enabled economic integration at continental scale — the unified German market (100+ million people by 1900), combined with Bismarck\'s protectionist tariffs and state investment in technical education, created the conditions for German industry to overtake Britain in steel, chemicals, and electrical manufacturing within a generation',
              'others': ['German industrialization preceded unification and was unaffected by it', 'German industry remained behind Britain and France despite political unification', 'German industrialization was primarily driven by foreign investment rather than domestic conditions'],
              'exp': 'The unification-industrialization connection is AP\'s economic history of German nationalism: the Zollverein (1834) had begun economic integration before political unification; German unification (1871) completed it. A fully integrated market of ~40 million people (1871) growing to ~65 million (1914) enabled economies of scale that the fragmented pre-unification German states could not achieve. Germany\'s overtaking of Britain in chemical and electrical industries by 1900 demonstrates the economic benefits of political unification.'},
             {'q': 'Comparing Bismarck to Metternich as conservative European statesmen reveals:',
              'correct': 'Metternich\'s conservatism was restorative (maintaining the pre-1789 order by suppressing nationalism and liberalism); Bismarck\'s conservatism was adaptive (using nationalism to achieve conservative goals of Prussian dominance and Hohenzollern monarchy, "stealing the liberals\' thunder" by delivering national unification through conservative means)',
              'others': ['Both pursued identical conservative strategies of suppressing all nationalist movements', 'Bismarck was a liberal who happened to use military means to achieve liberal goals', 'Metternich supported German unification while Bismarck opposed it'],
              'exp': 'The Metternich-Bismarck comparison is AP\'s model for understanding different conservative strategies: Metternich tried to hold back the tide of nationalism and liberalism — a strategy that worked until 1848 then failed spectacularly. Bismarck recognized that nationalism was too powerful to suppress and instead captured it for conservative purposes — unifying Germany under Prussian (conservative, Junker-dominated) leadership rather than allowing German nationalists to create the liberal democratic republic the Frankfurt Parliament had attempted.'},
             {'q': 'The new German Empire\'s impact on European balance of power (1871) was most significant because:',
              'correct': 'German unification created the largest single power in continental Europe, displacing France as Europe\'s dominant land power and fundamentally altering the balance of power that had been maintained since Napoleon — this shift made alliance competition among European powers more intense and ultimately contributed to the conditions that produced WWI',
              'others': ['Germany\'s unification had no significant impact on the European balance of power', 'German unification reduced tensions in Europe by resolving nationalist conflicts', 'The new German Empire replaced Austria-Hungary as Europe\'s dominant power peacefully'],
              'exp': 'Balance of power disruption is AP\'s mechanism connecting German unification to WWI: the Concert of Europe (1815-1870) had operated on the assumption that no single power should dominate Europe; German unification created a continental hegemon in central Europe. France\'s desire to recover Alsace-Lorraine combined with German fear of French revanche created the Franco-German antagonism that drove alliance competition. Bismarck\'s complex alliance system (Triple Alliance) kept France isolated, but after his dismissal (1890) Germany\'s clumsy alliance management produced the entangling alliances that triggered WWI.'},
             {'q': 'Bismarck\'s "insurance policy" (Reinsurance Treaty with Russia, 1887) and its cancellation by Kaiser Wilhelm II (1890) demonstrates:',
              'correct': 'How a complex diplomatic system built on personal political skill can fail when the architect is removed — Bismarck\'s alliance system required constant personal management of contradictory commitments; Wilhelm II\'s cancellation of the Russian reinsurance treaty drove Russia toward France, creating the Franco-Russian alliance that Bismarck had spent 20 years preventing',
              'others': ['Bismarck\'s alliance system was self-sustaining and did not depend on his personal management', 'Kaiser Wilhelm II improved on Bismarck\'s alliance system after 1890', 'Russia and France had been allied before Bismarck\'s dismissal regardless of German policy'],
              'exp': 'The Bismarck-Wilhelm II transition is AP\'s evidence that political systems built on personal skill are fragile: Bismarck\'s complex alliance network kept France isolated, maintained Russian friendship, preserved Austrian alliance, and prevented any two-front war threat against Germany. Wilhelm II\'s clumsy foreign policy (canceling Russian treaty, building naval forces that alarmed Britain, making aggressive colonial claims) drove Russia toward France, alarmed Britain, and created the Triple Entente that faced the Triple Alliance in WWI. Personal political genius cannot be institutionalized.'},
             {'q': 'For AP, the German unification\'s most significant long-term consequence was:',
              'correct': 'The creation of a unified, industrialized, militarized German state in the center of Europe that was both too powerful for existing European balance-of-power mechanisms to contain and too insecure (surrounded by potential enemies) to accept the existing European order — making German foreign policy a destabilizing force that ultimately produced two world wars',
              'others': ['German unification produced stable European peace for a century', 'The unified Germany immediately became a liberal democracy resolving all nationalist tensions', 'German industrialization was the only significant consequence of unification with no geopolitical impact'],
              'exp': 'The geopolitical consequences of German power are AP\'s long-term analysis: a unified Germany was powerful enough to defeat France (1871), Austria (1866), and eventually challenge Britain globally — but its central European location, surrounded by France, Russia, and Austria-Hungary, created the security dilemma that drove the arms race, alliance competition, and colonial rivalries that produced WWI. The "German problem" — a state too powerful for neighbors to ignore but too insecure to feel safe — is the structural foundation for 20th-century European catastrophe.'}
         ],
         dl=['The strategy of pursuing political goals through practical power rather than ideology was called ___',
             'The wars through which Bismarck unified Germany against Denmark, Austria, and France were collectively called ___',
             'The date and location where the German Empire was formally proclaimed were ___'],
         do_=[['Realpolitik', 'Nationalism', 'Liberalism', 'Conservatism'],
              ['The Wars of Unification', 'The Revolutionary Wars', 'The Wars of Liberation', 'The German Civil Wars'],
              ['January 18, 1871 at Versailles', 'January 18, 1866 at Berlin', 'July 14, 1871 at Frankfurt', 'September 2, 1870 at Sedan']],
         dc=['Realpolitik', 'The Wars of Unification', 'January 18, 1871 at Versailles'],
         hints=['Practical politics — national interest — not ideology — Bismarck\'s governing philosophy', 'Three wars — Denmark 1864 — Austria 1866 — France 1870-71 — achieved unification', 'Hall of Mirrors — Versailles — French royal palace — symbolic humiliation — January 18 1871'],
         dexp='Realpolitik is Bismarck\'s governing philosophy that explains his methods; the Wars of Unification are the specific means he used; and the Versailles proclamation is the symbolic culmination that also reveals the long-term diplomatic consequences (French humiliation → revanchism → WWI contribution).'
    ),
    dict(pnum=5, id_pre='whrv5',
         subtitle='The Meiji Restoration and Japanese Modernization',
         key='The Meiji Restoration (1868) was Japan\'s response to the Western colonial threat — a carefully managed revolution from above that abolished feudalism, centralized power in the emperor, and deliberately industrialized Japan using Western models while preserving Japanese political and cultural identity. AP questions compare Meiji Japan to other modernization attempts and evaluate why Japan succeeded while others were colonized.',
         body='''## 📖 The Meiji Restoration

> **Context: The Perry Crisis (1853-1854)**

- Commodore Matthew Perry arrived in Tokyo Bay with "Black Ships" (steam-powered warships) and demanded Japan open to trade
- Japan\'s feudal Tokugawa Shogunate had no military capability to resist American steam warships
- The "unequal treaties" forced on Japan (similar to those on China) demonstrated Japan\'s vulnerability
- **Response:** Samurai reformers overthrew the Shogunate (1868) and restored Emperor Meiji; "Restore the Emperor, Expel the Barbarians"
- Eventually became: "Strengthen the country, Enrich the military" — through Westernization

> **Meiji Reforms: Institutional Change**

| Area | Old Feudal System | Meiji Reform |
|------|-----------------|-------------|
| **Political** | Shogunate; regional domains (han) | Centralized imperial government; prefectures |
| **Social** | Hereditary samurai class | Equality of social classes; abolished samurai privileges |
| **Military** | Samurai armies | Modern conscript army; German model; modern navy; British model |
| **Economic** | Agrarian feudalism | State-directed industrialization; railroads; factories; zaibatsu |
| **Education** | Limited; Confucian; elite | Universal education; Western science; technical training |
| **Legal** | Feudal law | Western-style legal codes (French and German models) |

> **Meiji Modernization Strategy: "Western Knowledge, Japanese Spirit"**

The formula: selectively adopt Western technology and institutions while preserving Japanese cultural identity:

- **Sent scholars abroad:** Iwakura Mission (1871-1873) studied Western government, law, industry, military
- **Invited foreign experts:** 3,000+ foreign advisors (yatoi) in Japan teaching Western technology
- **Adapted rather than copied:** German military model + British naval model + French legal model + American education model
- **Preserved emperor ideology:** Modernization implemented through loyalty to emperor; tradition preserved

> **Results**

- **Sino-Japanese War (1894-95):** Japan defeated China — demonstrated successful modernization
- **Russo-Japanese War (1904-05):** Japan defeated Russia — first Asian defeat of a European power in modern era; shocked world
- **Global significance:** Proved that Asian nations could industrialize and achieve military parity with Europe without losing cultural identity

> **AP Comparison Anchor**

- **Japan vs. China:** Both faced Western colonial pressure; Japan chose selective Westernization; China\'s Self-Strengthening Movement was partial and failed; China was colonized; Japan was not
- **Japan vs. Ottoman Empire:** Both attempted "defensive modernization" (adopting Western technology to resist Western domination); Japan succeeded; Ottoman Empire partially succeeded but ultimately dismembered after WWI''',
         qs=[
             {'q': 'The Meiji slogan "Western Knowledge, Japanese Spirit" (wakon yosai) represented:',
              'correct': 'The deliberate strategy of adopting Western technology, institutions, and organization while preserving Japanese cultural identity and emperor-centered political order — allowing Japan to industrialize and militarize using proven Western methods without the cultural colonization that had accompanied Western dominance elsewhere',
              'others': ['Complete replacement of Japanese culture with Western culture as the path to modernization', 'Rejection of all Western influence while attempting independent technological development', 'Cultural exchange with no specific political or military purpose'],
              'exp': 'Selective Westernization is Japan\'s strategy distinguishing it from both complete colonial subjugation (accepting Western cultural dominance) and complete resistance (refusing to adapt to new military realities). The selectivity was deliberate: adopt German military organization, British naval technology, French legal codes, American education models — but maintain emperor loyalty, Japanese social hierarchy, and cultural practices. This selectivity is what made Meiji Japan different from both Western colonies and failed modernization attempts.'},
             {'q': 'Japan\'s defeat of Russia in the Russo-Japanese War (1904-05) demonstrated:',
              'correct': 'That Asian nations could defeat European military powers through industrialization and military modernization — the first Asian defeat of a European great power in modern history, shocking European assumptions of racial and civilizational superiority and inspiring independence movements across Asia and Africa who saw in Japan proof that Western power was not invincible',
              'others': ['The Russian defeat was due to technological problems unrelated to Japanese military strength', 'The Russo-Japanese War demonstrated Japanese weakness, not strength', 'The war had no significant international impact outside Russia and Japan'],
              'exp': 'The Russo-Japanese War\'s global impact is AP\'s evidence for the war\'s significance: the defeat electrified the non-Western world. W.E.B. Du Bois noted the war\'s significance for African Americans; Indian nationalists drew inspiration; anti-colonial movements across Asia pointed to Japan as proof that European military dominance was not permanent or inevitable. The war\'s significance exceeded its direct military consequences — it demonstrated the possibility of non-Western modernization success at the highest level (defeating a great power).'},
             {'q': 'Comparing Meiji Japan to Qing China\'s "Self-Strengthening Movement" reveals:',
              'correct': 'Both faced Western colonial pressure and attempted defensive modernization, but Japan\'s response was more comprehensive (abolishing feudalism, restructuring all institutions, universal education, conscript army) while China\'s Self-Strengthening Movement was partial (adopting Western weapons without restructuring political and social institutions) — Japan succeeded; China was progressively colonized',
              'others': ['Both Japan and China were equally successful in resisting Western colonization', 'China\'s Self-Strengthening Movement was more comprehensive than Japan\'s Meiji reforms', 'Japan and China faced identical situations and made identical responses'],
              'exp': 'The Japan-China comparison is AP\'s most instructive contrast in 19th-century Asian responses to Western pressure: China\'s Self-Strengthening Movement (1860s-1890s) attempted to adopt Western military technology while preserving the Confucian social and political order — "Chinese learning for essential principles, Western learning for practical application." But partial modernization (modern weapons + unreformed Confucian bureaucracy + feudal social structure) proved insufficient; Japan\'s defeat of China in 1894-95 demonstrated the difference between selective surface modernization and comprehensive institutional transformation.'},
             {'q': 'The abolition of the samurai class during Meiji restoration demonstrates which AP principle?',
              'correct': 'Revolutionary change can be implemented from above by established authority — the Meiji government abolished the samurai class (their own social base) because modernization required a modern conscript army rather than a hereditary warrior class, demonstrating that deliberate institutional transformation can override established social interests when survival of the state is the overriding goal',
              'others': ['The samurai class voluntarily surrendered its privileges without state pressure', 'The samurai abolition caused no political resistance or conflict', 'Preserving traditional social classes was compatible with successful Meiji modernization'],
              'exp': 'Abolishing the samurai is the clearest evidence that Meiji reformers were willing to destroy their own social class to achieve modernization: the reformers who led the Meiji Restoration were themselves samurai — they abolished samurai privileges, ended sword-carrying rights, and created a conscript army that made samurai military skills obsolete. The Satsuma Rebellion (1877), led by samurai resisting their abolition, was defeated by the new conscript army — demonstrating that the new institutions had supplanted the old social order. This willingness to sacrifice class privilege for state modernization distinguished Japan from China.'},
             {'q': 'The Iwakura Mission (1871-1873), which sent Japanese officials to study Western governments, laws, and industries, demonstrates:',
              'correct': 'The Meiji government\'s systematic approach to selective Westernization — rather than copying a single Western model, Japanese officials studied American, British, French, German, and Russian institutions and adopted the best-suited elements of each (German military organization, British navy, French law, American education) — producing a synthesized modernization rather than imitation of any single Western nation',
              'others': ['Japan copied the British model entirely for all its institutions', 'The Iwakura Mission concluded that Western models were inappropriate for Japan', 'Japanese modernization occurred without studying Western institutions — Japan developed independently'],
              'exp': 'The synthesis approach of the Iwakura Mission is Japan\'s distinctive modernization strategy: German military organization (admired for its professionalism and recent victory over France in 1870-71); British naval model (most advanced naval power); French legal codes (most sophisticated continental legal system); American education system (pragmatic and practical). This eclectic synthesis — taking the best of multiple models rather than imitating one — reflects the Meiji reformers\' sophisticated comparative analysis of Western institutions.'},
             {'q': 'Comparing Japan\'s Meiji modernization to Latin American independence movements reveals:',
              'correct': 'Both selectively adopted Western models (Japan: Western technology and institutions; Latin America: Enlightenment political theory) but Japan\'s adoption was more comprehensive and internally directed, while Latin American modernization was shaped by continued economic dependency on Western markets — Japan achieved political and economic independence; Latin American nations achieved political independence but maintained economic dependency',
              'others': ['Both Japan and Latin America achieved identical types of independence from Western powers', 'Latin American modernization was more successful than Japanese modernization', 'Both chose identical paths avoiding all Western influence'],
              'exp': 'The selective adoption comparison reveals different outcomes: Japan\'s selective Westernization aimed explicitly at military and economic independence from Western power; Latin American independence adopted Western political rhetoric while their economies became more deeply integrated into Western (British) commercial networks as raw material suppliers. The different outcomes — Japan avoided colonization; Latin America maintained economic dependency — reflect these different modernization strategies and demonstrate that political independence and economic independence are different achievements.'},
             {'q': 'For AP, the Meiji Restoration\'s most significant contribution to world history was:',
              'correct': 'It demonstrated that non-Western nations could successfully industrialize and achieve military parity with Western powers while preserving cultural identity — providing the first empirical evidence that Western industrial power was not invincible and that the 19th century\'s colonial order was historically contingent rather than permanent',
              'others': ['Meiji Japan\'s significance was limited to East Asian regional history', 'The Meiji Restoration demonstrated that Westernization required complete cultural replacement', 'Japan\'s significance was purely military with no broader implications for colonial relations'],
              'exp': 'The demonstration effect of Meiji Japan is AP\'s synthesis: by defeating Russia in 1905, Japan proved that Western military dominance was not due to inherent racial or civilizational superiority but to industrialization, organization, and technology — all of which could be acquired. This proof of concept was enormously consequential: it inspired independence movements across Asia and Africa, challenged Social Darwinist ideologies of permanent Western superiority, and demonstrated that the colonial order established in the 19th century was not the final arrangement of global power.'}
         ],
         dl=['The Japanese mission (1871-1873) that studied Western governments and institutions was ___',
             'Japan\'s defeat of this European power in 1904-05 shocked the world and inspired Asian independence movements ___',
             'The Meiji formula of adopting Western technology while preserving Japanese culture was called ___'],
         do_=[['The Iwakura Mission', 'The Perry Mission', 'The Tokugawa Mission', 'The Samurai Mission'],
              ['Russia', 'Britain', 'France', 'Germany'],
              ['Wakon yosai (Western knowledge, Japanese spirit)', 'Realpolitik', 'Social Darwinism', 'Selective borrowing']],
         dc=['The Iwakura Mission', 'Russia', 'Wakon yosai (Western knowledge, Japanese spirit)'],
         hints=['1871-1873 — Japanese officials — studied USA Britain France Germany Russia — selective adoption', 'Russo-Japanese War 1904-05 — first Asian defeat of European great power — shocked world', 'Japanese formula — adopt Western technology institutions — preserve Japanese cultural identity and emperor'],
         dexp='The Iwakura Mission demonstrates the systematic, selective approach to Westernization; the defeat of Russia demonstrates the successful outcome of that approach; and wakon yosai is the philosophical formula that explains how Japan maintained cultural identity while achieving Western-level modernization — together they explain why Japan succeeded where other non-Western modernization attempts failed.'
    ),
    dict(pnum=6, id_pre='whrv6',
         subtitle='Anti-Colonial Nationalism and Independence Movements',
         key='19th-century anti-colonial nationalism produced resistance movements across Africa and Asia that challenged European imperial dominance. AP questions evaluate the forms of resistance (armed, cultural, political), why some succeeded and others failed, and how colonialism simultaneously generated and suppressed the nationalist ideas that would eventually end it.',
         body='''## 📖 Anti-Colonial Nationalism

> **Forms of Anti-Colonial Resistance**

| Type | Examples | Methods | Success |
|------|---------|---------|---------|
| **Armed revolt** | Sepoy Mutiny (1857, India); Zulu War (1879, South Africa); Mahdist War (Sudan) | Military resistance | Generally suppressed |
| **Ethiopian resistance** | Battle of Adwa (1896) | Military + diplomacy | Won — only African state to defeat European colonizer |
| **Cultural resistance** | Cultural preservation movements; rejection of missionary Christianity | Maintaining cultural identity | Limited immediate effect; important long-term |
| **Political nationalism** | Indian National Congress (1885); ANC (South Africa, 1912) | Petitions, legal advocacy, political organization | Foundation for 20th-century independence |

> **Indian Resistance: From Mutiny to Congress**

- **Sepoy Mutiny (1857):** Indian soldiers in British East India Company army revolted; quickly suppressed; led to direct British Crown rule (replaced East India Company)
- **Indian National Congress (1885):** Initially elite professional class (lawyers, doctors); demanded greater Indian participation in governance; used British political language against British rule
- **Later radicalization:** Bal Gangadhar Tilak demanded full independence; Partition of Bengal (1905) sparked mass protest; foundation for 20th-century independence movement

> **Ethiopian Victory at Battle of Adwa (1896)**

- **Context:** Italian attempt to colonize Ethiopia; invaded from Eritrea
- **Battle:** Emperor Menelik II\'s forces (100,000+) defeated Italian army (17,000)
- **Significance:** Only sub-Saharan African state to successfully defeat European colonizer in the "Scramble for Africa" era
- **Global impact:** Shocked European powers; inspired African Americans and pan-Africanism; Ethiopia became symbol of African independence

> **Why Some Resistance Succeeded**

| Factor | Ethiopia (success) | Most African resistance (failure) |
|--------|-------------------|----------------------------------|
| **Leadership** | Menelik II — strategic diplomat + military leader | Fragmented local leadership |
| **Weaponry** | Modern rifles (purchased from France and Russia) | Spears, outdated firearms |
| **Unity** | Centralized state + unified command | Divided ethnic groups |
| **Diplomacy** | Played European powers against each other | Isolated from potential allies |

> **AP Comparison Anchor**

- **Sepoy Mutiny vs. Indian National Congress:** Two models of resistance — military revolt (Mutiny) suppressed → political organization (Congress) more sustainable
- **Ethiopia vs. Congo:** Ethiopia maintained independence through military victory + diplomacy; Congo was colonized by Belgium under King Leopold II through systematic violence''',
         qs=[
             {'q': 'The Indian National Congress\'s (1885) use of British political language against British rule demonstrates:',
              'correct': 'Colonized peoples could use the colonizer\'s own proclaimed values (rule of law, parliamentary representation, natural rights) as tools against colonial rule — Indian nationalists argued that British governance in India violated the very principles of constitutional governance, individual rights, and representative government that Britain claimed to stand for',
              'others': ['Indian nationalists rejected all Western political concepts and developed entirely indigenous alternatives', 'The Indian National Congress had no connection to British political traditions', 'Using British political language was ineffective — it only reinforced British legitimacy'],
              'exp': 'Turning colonizer ideals against colonial practice is AP\'s key mechanism of anti-colonial nationalism: Britain claimed to represent constitutional governance, rule of law, and individual rights; Indian nationalists argued that British colonial rule in India systematically violated all these principles (no Indian representation in Parliament that made laws governing India; taxation without representation; arbitrary executive power). This logic of applying British principles to British colonial practice is the foundation of Indian nationalist ideology and demonstrates the productive tension in colonial systems between proclaimed ideals and colonial practice.'},
             {'q': 'The Battle of Adwa (1896) was historically significant for AP because:',
              'correct': 'It was the only sub-Saharan African state\'s successful military defeat of a European colonizer during the Scramble for Africa, demonstrating that colonization was not inevitable and that African resistance with modern weapons, centralized leadership, and diplomatic skill could succeed — making Ethiopia a symbol of African independence and inspiring pan-African movements globally',
              'others': ['Adwa was a minor skirmish with no significant impact on African colonial history', 'Multiple African states defeated European colonizers at the Battle of Adwa', 'The significance of Adwa was limited to Ethiopia-Italy relations with no broader impact'],
              'exp': 'Adwa\'s uniqueness is AP\'s point: virtually all African resistance to European colonial conquest was defeated, making Adwa\'s success exceptional and therefore doubly significant. Menelik II\'s combination of factors (modern weapons from European powers, unified national army, personal military leadership, diplomatic manipulation of European rivalries) was unique — most African resistance lacked one or more of these elements. The fact that Ethiopia succeeded while virtually all others failed demonstrates that colonization was contingent on specific military and political conditions, not an inevitable outcome of racial or civilizational difference.'},
             {'q': 'The Sepoy Mutiny\'s (1857) transformation into direct British Crown rule (replacing the East India Company) demonstrates:',
              'correct': 'That colonial resistance could paradoxically strengthen colonial control by demonstrating that private corporate governance (East India Company) was insufficiently powerful to suppress rebellion — the British government\'s direct assumption of control produced a more thoroughly organized colonial administration that was harder to resist than the company\'s commercial governance had been',
              'others': ['The Sepoy Mutiny successfully ended British rule in India', 'The transition to Crown rule weakened British control in India', 'The Mutiny had no significant impact on the structure of British colonial administration'],
              'exp': 'This paradox is AP\'s analysis of the Sepoy Mutiny: it did not end British colonialism — it transformed it into a more effective form. East India Company rule was commercial and relatively thin (focused on trade profits); Crown rule introduced comprehensive administrative, legal, educational, and military systems designed explicitly for effective colonial governance. The British Raj (1858-1947) was a far more thorough colonial project than the Company had been. Sometimes resistance forces the colonizer to reorganize in more effective forms.'},
             {'q': 'Comparing armed resistance (Sepoy Mutiny) and political organization (Indian National Congress) as anti-colonial strategies reveals:',
              'correct': 'Armed resistance was more immediately confrontational but more easily suppressed by superior colonial military force; political organization was slower-building but more sustainable, using colonial legal systems to create political infrastructure that could not be simply shot — the transition from military to political resistance was the tactical evolution of 19th-century anti-colonialism',
              'others': ['Armed resistance was always more effective than political organization', 'Political organization was immediately effective while armed resistance was entirely ineffective', 'Both strategies were equally effective in achieving immediate independence'],
              'exp': 'The resistance strategy evolution is AP\'s key analytical framework: armed revolt against well-armed colonial armies almost always failed in the short term (Sepoy Mutiny, Zulu War, Mahdist Revolt — all suppressed). Political organization through legal advocacy, petition campaigns, and building of civil society organizations was slower but more resilient — harder to suppress with bullets than armed rebellion. The Indian National Congress\'s evolution from elite petition organization to mass movement (under Gandhi in the 20th century) demonstrates this trajectory.'},
             {'q': 'Ethiopia\'s ability to resist Italian colonization (unlike most African states) was primarily due to:',
              'correct': 'A combination of factors that uniquely positioned Ethiopia for successful resistance: a centralized state with experienced leadership (Menelik II), modern weapons acquired through diplomatic connections with European powers, a large unified army rather than fragmented ethnic forces, and strategic diplomacy that prevented other European powers from assisting Italy',
              'others': ['Ethiopia succeeded purely because of geographic isolation that made it difficult to invade', 'Ethiopia\'s religious difference (Christianity) made European powers reluctant to colonize it', 'Ethiopian soldiers had superior fighting abilities that negated European military technology'],
              'exp': 'Multi-factor analysis is AP\'s framework for explaining Adwa: no single factor was sufficient. Geographic isolation alone (Ethiopia is landlocked but reachable) didn\'t explain success; religion (other Christian African communities were colonized) didn\'t explain it; military capability alone (Zulu warriors were formidable but defeated) didn\'t explain it. The combination of modern weapons + centralized state + capable leadership + diplomatic skill was unique to Ethiopia. This multi-factor explanation demonstrates that resistance success requires specific configurations of capability, not any single magical element.'},
             {'q': 'The contradiction between colonialism\'s proclaimed "civilizing mission" and its actual practices demonstrates:',
              'correct': 'That colonial ideology (mission civilisatrice, "White Man\'s Burden") provided political legitimacy for colonial projects but was systematically contradicted by colonial practices (forced labor, land seizure, cultural suppression) — creating the same productive tension as Enlightenment ideals: colonized peoples could use the colonizer\'s own civilizing mission rhetoric to demand education, legal rights, and eventually self-governance',
              'others': ['Colonial ideology accurately described colonial practices with no contradiction', 'Colonized peoples were unable to use colonial ideology against colonial practices', 'The civilizing mission rhetoric was understood by all parties as purely symbolic with no practical implications'],
              'exp': 'Contradictions within colonial ideology are AP\'s mechanism for understanding anti-colonial nationalism: British colonialism claimed to bring civilization (rule of law, education, Christianity) to "uncivilized" peoples; Indian nationalists said "if you\'re really about rule of law, apply it to us too." The same logic applied to French "mission civilisatrice" — if France was really bringing civilization (liberty, equality, fraternity) to its colonies, those colonies should have liberty, equality, and fraternity. Colonial ideologies generated their own contradictions that anti-colonial nationalists systematically exploited.'},
             {'q': 'For AP, the most significant feature of 19th-century anti-colonial resistance movements was:',
              'correct': 'They demonstrated that colonialism was not passively accepted — colonized peoples developed multiple forms of resistance (armed, political, cultural) that challenged colonial authority, preserved cultural identity, and built the organizational foundations for the 20th-century independence movements that would ultimately end formal colonialism',
              'others': ['19th-century resistance movements were uniformly unsuccessful with no lasting significance', 'Colonized peoples largely accepted colonial rule with little resistance', 'Anti-colonial movements only became significant in the 20th century with no 19th-century foundation'],
              'exp': 'Continuity between 19th and 20th century resistance is AP\'s synthesis: the Indian National Congress (1885) became Gandhi\'s independence vehicle; pan-Africanism (inspired partly by Ethiopia\'s Adwa victory) became the ideology of African independence movements; the organizational forms (political parties, nationalist newspapers, legal advocacy) developed in the 19th century were the institutional foundations for 20th-century success. Understanding 20th-century decolonization requires understanding its 19th-century foundations.'}
         ],
         dl=['The Indian organization founded in 1885 that became the foundation of the independence movement was ___',
             'The Ethiopian emperor who defeated Italy at the Battle of Adwa (1896) was ___',
             'The 1857 revolt by Indian soldiers against the British East India Company was ___'],
         do_=[['The Indian National Congress', 'The Indian Muslim League', 'The All-India Congress', 'The Indian Independence Party'],
              ['Emperor Menelik II', 'Emperor Haile Selassie', 'King Shaka', 'King Lobengula'],
              ['The Sepoy Mutiny', 'The Great Rebellion', 'The Indian Revolution', 'The Sepoy War']],
         dc=['The Indian National Congress', 'Emperor Menelik II', 'The Sepoy Mutiny'],
         hints=['India 1885 — lawyers doctors — elite organization — British political language — foundation of independence movement', 'Ethiopia 1896 — Adwa — defeated Italian army — only African state to defeat European colonizer', 'India 1857 — Indian soldiers in British army — revolted — suppressed — led to Crown rule replacing East India Company'],
         dexp='The Indian National Congress demonstrates political resistance using colonial ideology against colonial practice; Menelik II at Adwa demonstrates the exceptional case of successful military resistance; and the Sepoy Mutiny demonstrates how armed resistance, even when suppressed, could reshape colonial administration — three different resistance strategies with different methods and outcomes.'
    ),
    dict(pnum=7, id_pre='whrv7',
         subtitle='AP Review and Exam Mastery',
         key='Revolution and nationalism content spans AP World History\'s 19th-century period (c. 1750-1900). Key exam themes include comparing Latin American independence to 1848 European revolutions, evaluating Bismarck\'s methods of German unification, comparing Meiji Japan to other modernization attempts, and analyzing anti-colonial resistance forms.',
         body='''## 📖 AP Review: Revolutions and Independence Movements

> **Must-Know Vocabulary**

- **Creole** — American-born Spaniard; primary leaders of Latin American independence
- **Gran Colombia** — Bolívar\'s attempt at unified northern South America; dissolved 1830
- **Realpolitik** — Practical power politics; pursuing national interest through pragmatic means (Bismarck)
- **Blood and iron** — Bismarck\'s phrase for his unification approach through military power
- **Frankfurt Parliament** — Failed liberal German constituent assembly (1848-1849)
- **Zollverein** — German customs union (1834); economic precondition for political unification
- **Meiji Restoration** — Japanese modernization from 1868; abolished feudalism; industrialized Japan
- **Wakon yosai** — "Western knowledge, Japanese spirit"; selective Westernization formula
- **Battle of Adwa (1896)** — Ethiopian defeat of Italy; only African state to defeat European colonizer
- **Sepoy Mutiny (1857)** — Indian soldiers\' revolt against British East India Company; led to Crown rule
- **Indian National Congress (1885)** — Indian nationalist organization; foundation for independence movement

> **AP Comparison Quick Reference**

| Leader | Nation | Method | Social Change? | Long-term Outcome |
|--------|--------|--------|---------------|------------------|
| Bolívar | Venezuela/Gran Colombia | Military liberation | Minimal | Independent states; political instability |
| Bismarck | Germany | Military/diplomacy (Realpolitik) | Minimal | Unified Germany; WWI contribution |
| Meiji leaders | Japan | State-directed modernization | Significant | Industrial/military power; avoided colonization |
| Menelik II | Ethiopia | Military + diplomacy | Minimal | Independence maintained |

> **Common AP Prompt Patterns**

- **Comparison:** Compare Bolívar\'s and Bismarck\'s approaches to national unification/liberation
- **Causation:** What caused the failure of the 1848 revolutions?
- **Evaluation:** Evaluate the extent to which Meiji Japan successfully modernized
- **CCOT:** How did nationalist movements change from 1800 to 1900?''',
         qs=[
             {'q': 'An AP SAQ asks: "Briefly explain ONE difference between Bolívar\'s and Bismarck\'s approaches to creating new states." Which earns full credit?',
              'correct': 'Bolívar sought independence from Spain through military liberation driven by Enlightenment ideals of natural rights and national self-determination; Bismarck created a unified German state through calculated Realpolitik — provoking wars against Denmark, Austria, and France to achieve specific strategic objectives — demonstrating fundamentally different models of state creation: liberal idealism vs. practical power politics',
              'others': ['Both used identical military methods with no significant differences in approach', 'The difference was only geographic — one was in South America, one in Europe', 'Bolívar used Realpolitik while Bismarck relied on Enlightenment idealism'],
              'exp': 'Full SAQ credit: specific difference (liberal idealism vs. Realpolitik) + evidence from both leaders (Bolívar\'s natural rights; Bismarck\'s three wars and Ems Dispatch) + reasoning (demonstrates different models of state creation). The comparison is genuine — not just describing each separately but explaining the meaningful difference between them.'},
             {'q': 'For an AP LEQ on 19th-century nationalism\'s methods and outcomes, which thesis earns the highest score?',
              'correct': 'Nineteenth-century nationalism produced fundamentally different outcomes depending on whether it operated through liberal constitutional movements (1848 revolutions: generally failed when lacking military force) or state-directed military power (Bismarck\'s Germany, Cavour\'s Italy: succeeded but produced authoritarian rather than democratic states) — demonstrating that the form and method of nationalist politics determined outcomes as much as the nationalist ideals themselves',
              'others': ['All 19th-century nationalist movements succeeded in achieving their goals', 'Nationalism always produced democratic outcomes when successful', 'The 1848 revolutions and Bismarck\'s unification were identical in their approaches and outcomes'],
              'exp': 'This thesis earns full AP credit: acknowledges both failure cases (1848) and success cases (Germany, Italy), explains the causal mechanism (presence or absence of military force), identifies the significance (method determined outcome), and makes an analytical claim beyond description (form of politics → type of outcome). The sophisticated element is recognizing that nationalist "success" (Germany, Italy unified) and nationalist "failure" (1848) were not about the nationalism itself but about the institutional means available.'},
             {'q': 'A DBQ document from an Indian nationalist (c. 1900) uses British legal arguments to demand self-governance. What is the most sophisticated sourcing?',
              'correct': 'An Indian nationalist writing around 1900 chose British legal language strategically — by framing demands in terms of British constitutional principles, he addressed audiences (British liberal opinion) that might be persuaded by principled consistency arguments and protected against accusations of radical sedition, revealing both genuine familiarity with British political culture AND tactical calculation about which arguments were most likely to succeed in the colonial legal and political context',
              'others': ['The nationalist\'s use of British legal arguments proves he was fully assimilated to British culture', 'Using British legal language demonstrates the nationalist had no authentic Indian political traditions to draw on', 'The sourcing is straightforward — Indian nationalists simply adopted British political ideas with no tactical calculation'],
              'exp': 'Strategic use of colonial ideology is sophisticated sourcing: Indian nationalists using British constitutional language were not simply adopting British culture — they were making a strategic choice about which arguments worked in which forums. Arguing "this violates the Indian Penal Code" was more likely to succeed in British courts than "this violates indigenous tradition." Point of view (educated elite familiar with British law) + purpose (achieve maximum political effect in colonial legal system) + historical situation (colonial law as available tool) = full AP sourcing credit.'},
             {'q': 'Comparing the Meiji Restoration to the Latin American independence movements reveals which key difference?',
              'correct': 'Meiji Japan\'s modernization was directed against the threat of Western colonization from outside, producing comprehensive institutional reform aimed at industrial and military capability; Latin American independence was directed against colonial administration from outside but was led by creole elites who wanted political self-determination while maintaining the colonial social hierarchy inside — different threats produced different depths of internal reform',
              'others': ['Both movements produced identical institutional reforms and social outcomes', 'Latin American independence was more successful in achieving modernization than the Meiji Restoration', 'Both movements were directed entirely by Western-educated elites with no indigenous participation'],
              'exp': 'The external vs. internal reform comparison is AP\'s analytical distinction: Meiji Japan faced the threat of colonization if it didn\'t reform everything; it therefore reformed everything (military, education, law, industry). Latin American creoles faced the inconvenience of Spanish colonial administration; they reformed only what was necessary to achieve political independence (removing Spanish authority) while preserving the social structure that benefited them. Different threat levels → different reform depths.'},
             {'q': 'The failure of the 1848 revolutions and the success of Bismarck\'s unification (1864-1871) together demonstrate:',
              'correct': 'That 19th-century political change was determined more by organized military force than by popular democratic movements — liberal constitutionalists with ideas but no armies failed; conservative Bismarck with Prussia\'s army succeeded; demonstrating that the European state system of the 19th century rewarded military organization over liberal democratic aspiration',
              'others': ['Liberal democratic movements were equally effective as military force in achieving political change', 'Bismarck\'s success was despite his military methods, not because of them', 'The 1848 failures and Bismarck\'s success were unrelated events with no common lesson'],
              'exp': 'The military power conclusion is AP\'s synthetic lesson connecting 1848 and Bismarck: the same period (1848 revolution → 1871 German unification) demonstrates contrasting outcomes of different political strategies in the same state system. Liberal assemblies with constitutions but no armies → failure. Conservative minister with the largest army in Europe → success. This demonstrates that the 19th-century European state system was organized around military power, not democratic legitimacy — a structural reality that shaped all political actors\' strategic choices.'},
             {'q': 'Anti-colonial resistance movements of the 19th century (Sepoy Mutiny, Adwa, Indian National Congress) demonstrate which AP principle?',
              'correct': 'Colonialism generated its own opposition — the very tools of colonial governance (Western education, legal systems, political concepts) were adopted by colonized elites and used to construct anti-colonial movements, while the violence and exploitation of colonial rule generated resistance that ranged from armed revolt to political organization, demonstrating that oppressive systems contain the seeds of their own opposition',
              'others': ['Colonial rule was passively accepted with no significant resistance', 'Anti-colonial movements only developed after Western education was unavailable to colonized peoples', 'All anti-colonial resistance was suppressed so completely that it had no historical significance'],
              'exp': 'Colonialism generating its own opposition is AP\'s meta-lesson: British colonial schools taught English, Western history, and Enlightenment political theory to Indian elites; those Indian elites used that education to argue, in English, that British colonial rule violated Enlightenment principles of natural rights and representative government. The colonizer\'s tools became the anti-colonial arsenal. This pattern — colonial education producing anti-colonial nationalists — is consistent across British India, French Africa, and colonial Southeast Asia.'},
             {'q': 'For AP, the 19th century\'s most significant revolutionary legacy was:',
              'correct': 'The establishment of nationalism as the dominant principle of political legitimacy — the idea that peoples sharing language, culture, and history have the right to self-governance became the foundation of the modern nation-state system, driving both European state-building (Germany, Italy) and ultimately anti-colonial independence movements globally through the 20th century',
              'others': ['The most significant legacy was the specific political boundaries established in the 19th century', 'Liberalism rather than nationalism was the most consequential 19th-century political development', 'The 19th century\'s revolutions had no significant long-term legacy for the 20th century'],
              'exp': 'Nationalism as the dominant legitimacy principle is AP\'s framework for the 19th-century\'s long-term legacy: from 1848 to 1990 (German unification), the principle that "a nation should govern itself" drove European politics; from the Indian National Congress (1885) to African independence movements (1950s-60s), the same principle drove decolonization globally. The 19th century established this principle as the dominant alternative to dynastic, religious, and imperial legitimacy — shaping political conflict through the entire 20th century.'}
         ],
         dl=['Bismarck\'s philosophy of pursuing national interest through practical power rather than ideology was ___',
             'The battle where Emperor Menelik II\'s Ethiopia defeated Italy (1896), the only African state to defeat a European colonizer was ___',
             'Japan\'s political transformation from feudal shogunate to modern state (1868) was ___'],
         do_=[['Realpolitik', 'Nationalism', 'Liberalism', 'Conservatism'],
              ['The Battle of Adwa', 'The Battle of Omdurman', 'The Zulu War', 'The Sepoy Mutiny'],
              ['The Meiji Restoration', 'The Tokugawa Restoration', 'The Samurai Revolution', 'The Perry Settlement']],
         dc=['Realpolitik', 'The Battle of Adwa', 'The Meiji Restoration'],
         hints=['Bismarck — practical politics — national interest — not ideology — blood and iron', 'Ethiopia 1896 — Menelik II — defeated Italian army — only African state to defeat European colonizer', 'Japan 1868 — emperor restored — feudalism abolished — deliberate Westernization began'],
         dexp='Realpolitik summarizes Bismarck\'s approach to 19th-century state-building; the Battle of Adwa represents the exceptional success of anti-colonial military resistance; and the Meiji Restoration represents the most successful non-Western modernization — together they encompass the range of 19th-century revolutionary and nationalist strategies from European state-building to non-European modernization and resistance.'
    ),
]

for p in parts:
    content = make(p['pnum'], p['id_pre'], p['subtitle'], p['key'],
                   p['body'], p['qs'], p['dl'], p['do_'], p['dc'],
                   p['hints'], p['dexp'])
    w(f"{SLUG}-part{p['pnum']}.ts", content)

print("All revolutions parts done!")
