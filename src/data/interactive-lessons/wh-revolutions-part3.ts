export const whRevolutionsPart3Data = {
  topicSlug: 'wh-revolutions',
  sections: [
    {
      id: 'whrv3-intro',
      type: 'text' as const,
      content: `
# ⚔️ Revolutions and Independence Movements

**Part 3 of 7 — European Nationalism and the Revolutions of 1848**

---

> 🔑 **Key Concept:** 19th-century European nationalism produced the Revolutions of 1848 ("Spring of Nations"), when liberal and nationalist movements swept across Europe demanding constitutional government and national self-determination. AP questions focus on why 1848 revolutions mostly failed in the short term while nationalism succeeded in the long term through the unification of Germany and Italy.
      `
    },
    {
      id: 'whrv3-quiz1',
      type: 'multiple-choice' as const,
      content: `**Concept Check** 🎯`,
      exercise: {
        questions: [
          {
            question: 'The Revolutions of 1848 failed primarily because:',
            options: [
              'Liberals who won constitutions turned against radical workers, splitting the coalitions so monarchs could regain control',
              'Nationalism had little popular appeal in 1848, so few people outside the universities joined the uprisings',
              'Enlightenment ideas had not yet reached Central Europe, so the rebels lacked any real program for constitutional government',
              'Foreign armies alone crushed the revolts, as British and French troops intervened in every rising across Europe',
            ],
            correctAnswer: 0,
            explanation: 'The class fracture in 1848 is AP\'s key mechanism for why the "Spring of Nations" withered: middle-class liberals wanted constitutional government and national representation; working-class radicals wanted social and economic reform. When workers took to the streets demanding more than the middle class wanted, liberal reformers supported suppression of working-class radicalism (as in the Paris "June Days" 1848 massacre). This internal fracture prevented sustained revolutionary pressure and allowed conservative restoration.'
          },
          {
            question: 'Bismarck\'s approach to German unification differed from 1848 liberal nationalism in that:',
            options: [
              'Where 1848 liberals relied on elected assemblies like Frankfurt, Bismarck unified Germany through Prussian wars and Realpolitik',
              'Bismarck was a liberal democrat who carried out the Frankfurt Parliament\'s constitution after 1866',
              'Bismarck and the 1848 liberals shared the same approach, relying on popular votes to unify the German states',
              'Bismarck opposed German unification and accepted it only after the Kaiser forced him to act in 1871',
            ],
            correctAnswer: 0,
            explanation: 'Bismarck\'s "blood and iron" approach is AP\'s definitive contrast with liberal nationalism: the Frankfurt Parliament (1848-1849) tried to unify Germany through constitutional deliberation and popular legitimacy — and failed because it had no military force. Bismarck unified Germany through three wars (against Denmark 1864; Austria 1866; France 1870-71) that Prussia won by military superiority. "The great questions of the day are not decided by speeches and majority votes but by blood and iron" (Bismarck, 1862) was not rhetoric — it was his strategy.'
          }
        ]
      }
    },
    {
      id: 'whrv3-content',
      type: 'text' as const,
      content: `
## 📖 European Nationalism and 1848

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
- **Key lesson:** Nationalism succeeded not through liberal revolution (1848 failed) but through state-directed military power
      `
    },
    {
      id: 'whrv3-input',
      type: 'multiple-choice' as const,
      content: `**Applied Recall: 3-Question Sprint** 🎯`,
      exercise: {
        questions: [
          {
            question: 'The Austrian Empire\'s suppression of Hungarian nationalism in 1848-1849 (with Russian military assistance) demonstrates:',
            options: [
              'Multinational states met nationalist revolts with force, and conservative allies could crush rebels lacking armies',
              'Hungary\'s revolt was crushed by Austrian troops alone, without help from Russia or any other foreign power',
              'Austria answered Hungarian nationalists by granting full autonomy, which ended the conflict peacefully in 1849',
              'Russia\'s intervention was driven mainly by trade interests, not by Nicholas I\'s commitment to the conservative order',
            ],
            correctAnswer: 0,
            explanation: 'Russian intervention in Hungary is AP\'s evidence for the conservative international order\'s power in 1848: the Holy Alliance (Russia, Austria, Prussia) had committed to mutual defense of monarchical order against revolution. When Hungary\'s nationalist revolution threatened the Austrian Empire, Russia\'s deployment of 200,000 troops to suppress it was the Holy Alliance in action. This demonstrated that nationalist movements without their own state armies could be crushed by the military power of established conservative monarchies.'
          },
          {
            question: 'The Frankfurt Parliament\'s failure to create a unified Germany (1848-1849) demonstrates:',
            options: [
              'A liberal assembly with a constitution but no army could not make Prussia\'s king accept its crown',
              'Its delegates had no real nationalist goals and never seriously tried to unite the German states into a single nation',
              'Prussia and Austria first agreed to accept its constitution and then withdrew support after the delegates quarreled',
              'Its constitution was so poorly drafted that even the delegates who wrote it voted against its adoption in 1849',
            ],
            correctAnswer: 0,
            explanation: 'Military force and state sovereignty is AP\'s practical lesson from Frankfurt: the Parliament was composed of German liberals, professors, lawyers, and professionals — but it had no coercive power. A constitution means nothing without enforcement capacity. When Frederick William IV of Prussia rejected the "crown from the gutter" (popular rather than dynastic legitimacy), the Parliament had no way to compel him. Bismarck drew the lesson: German unification required Prussian military power, not liberal deliberation.'
          },
          {
            question: 'Italian unification (Risorgimento) through the combined efforts of Cavour (diplomacy) and Garibaldi (popular nationalism) demonstrates:',
            options: [
              'Unification needed Piedmont\'s diplomacy and Garibaldi\'s popular army, but elite state power decided the final settlement',
              'Unification came entirely from popular democratic risings, with no role at all for the Piedmontese monarchy or its ministers',
              'Cavour opposed unification and accepted Garibaldi\'s southern conquests only under pressure from Napoleon III',
              'Unification was completed by diplomatic agreement alone, with no wars fought against Austria or Naples',
            ],
            correctAnswer: 0,
            explanation: 'The Cavour-Garibaldi dynamic is AP\'s Italian unification model: Cavour used Realpolitik (allying with France against Austria, manipulating diplomatic situations) to create the northern Italian state; Garibaldi\'s popular movement conquered southern Italy (Kingdom of Two Sicilies) and offered it to the Piedmontese king rather than creating a democratic republic — demonstrating that mass nationalism served as the mobilizing force while elite state power determined the ultimate political settlement.'
          }
        ]
      }
    },
    {
      id: 'whrv3-dropdown',
      type: 'dropdown-select' as const,
      content: `**Match the Idea: Evidence to Claim**`,
      exercise: {
        dropdowns: [
          {
            label: 'The German liberal assembly that produced a constitution for unified Germany (1848-1849) but failed without military power was ___',
            options: [
            'The Frankfurt Parliament',
            'The Zollverein',
            'The German Confederation',
            'The Holy Roman Empire',
            ]
          },
          {
            label: 'The Prussian chancellor who unified Germany through "blood and iron" rather than liberal revolution was ___',
            options: [
            'Otto von Bismarck',
            'Frederick William IV',
            'Kaiser Wilhelm I',
            'Metternich',
            ]
          },
          {
            label: 'The Italian nationalist who led the "Thousand Redshirts" conquest of southern Italy was ___',
            options: [
            'Giuseppe Garibaldi',
            'Camillo di Cavour',
            'Victor Emmanuel II',
            'Giuseppe Mazzini',
            ]
          }
        ],
        correctAnswers: [
          'The Frankfurt Parliament',
          'Otto von Bismarck',
          'Giuseppe Garibaldi',
        ],
        hint1: 'German liberals — 1848-1849 — Frankfurt — produced constitution — no army — rejected by Prussia',
        hint2: 'Prussian chancellor — Realpolitik — three wars 1864-1871 — blood and iron — created German Empire',
        hint3: 'Italian nationalist — Thousand Redshirts — Sicily — southern Italy — offered to Piedmont king',
        explanation: 'The Frankfurt Parliament demonstrates liberal nationalism\'s failure without military power; Bismarck demonstrates how German unification actually succeeded through Realpolitik; and Garibaldi demonstrates how popular nationalism was harnessed and subordinated to elite state interests in Italian unification — all three reveal the gap between liberal nationalist ideals and the coercive realities of 19th-century state-building.'
      }
    },
    {
      id: 'whrv3-applied',
      type: 'multiple-choice' as const,
      content: `**AP-Style Application** 🎯`,
      exercise: {
        questions: [
          {
            question: 'Comparing 1848 European revolutions to the Latin American independence movements reveals:',
            options: [
              'Both drew on Enlightenment ideas and fell short of radical aims, as most 1848 constitutions were revoked and creole hierarchy survived',
              'Both fully achieved their revolutionary goals, establishing lasting constitutional governments with few setbacks',
              'Latin American independence brought deeper social change than 1848, ending the creole elite\'s dominance',
              'The two movements shared the same social base of peasants and produced the same monarchical outcomes',
            ],
            correctAnswer: 0,
            explanation: 'The limited-revolution comparison is AP\'s meta-pattern connecting Atlantic revolutions to 1848 European revolutions: aspirational ideals (natural rights, national self-determination, popular sovereignty) consistently encountered conservative resistance (monarchical military power, creole class interests, Russian intervention) that limited transformation. The pattern — revolutionary aspiration + conservative resistance = limited outcome — recurs across contexts. AP rewards recognizing this pattern while acknowledging each context\'s specific features.'
          },
          {
            question: 'For AP, the most important lesson from the failure of 1848 liberal nationalism is:',
            options: [
              'Constitutional ideals needed coercive power, and Bismarck and Cavour had the armies that 1848 liberals lacked',
              'Nationalism itself was discredited by 1848, so no European nationalist movement succeeded afterward',
              'Liberal ideas were mistaken in principle, which is why the 1848 risings failed even where liberals controlled armies',
              'Military force played no role in 1848, since every uprising was decided by elections and public debate',
            ],
            correctAnswer: 0,
            explanation: 'The Realpolitik lesson from 1848 is AP\'s hardest analysis: it\'s uncomfortable but historically accurate that Bismarck\'s "blood and iron" succeeded where liberal deliberation failed. This is not an endorsement of Bismarck\'s methods but a recognition of 19th-century European political reality: states had armies; assemblies did not; armies determined political outcomes. The lesson is not that liberal ideals were wrong but that implementing them required engaging with the existing power structure — a lesson that shaped subsequent reform movements from labor unions to suffragists.'
          }
        ]
      }
    }
  ]
}
