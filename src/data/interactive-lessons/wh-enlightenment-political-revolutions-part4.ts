export const whEnlightenmentPoliticalRevolutionsPart4Data = {
  topicSlug: 'wh-enlightenment-political-revolutions',
  sections: [
    {
      id: 'whepr4-intro',
      type: 'text' as const,
      content: `
# 💡 Enlightenment and Political Revolutions

**Part 4 of 7 — The French Revolution (1789-1799)**

---

> 🔑 **Key Concept:** The French Revolution transformed France from absolute monarchy to republic through radical social and political upheaval including the Declaration of Rights of Man, the execution of Louis XVI, the Reign of Terror, and ultimately Napoleon's consolidation of revolutionary gains. AP questions focus on the Revolution\'s phases, causes, and how it both advanced and distorted Enlightenment ideals.
      `
    },
    {
      id: 'whepr4-quiz1',
      type: 'multiple-choice' as const,
      content: `**Concept Check** 🎯`,
      exercise: {
        questions: [
          {
            question: 'The Declaration of Rights of Man and Citizen (1789) was significant for AP because:',
            options: [
              'It articulated universal rights ("liberty, equality, fraternity") that in principle applied to all people, creating the same productive tension as the American Declaration — aspirational universalism that excluded women, enslaved people, and colonial subjects, generating Olympe de Gouges\' Declaration of Rights of Woman and the Haitian Revolution\'s demand for inclusion',
              'The Declaration immediately extended all rights to all people in France and its colonies',
              'The Declaration was significant only within France with no global influence',
              'The Declaration was primarily a commercial document with limited political significance',
            ],
            correctAnswer: 0,
            explanation: 'The Declaration of Rights of Man is AP\'s French Revolution equivalent of the American Declaration: universalist language (rights of "man") immediately challenged by excluded groups (Olympe de Gouges\' Declaration of Rights of Woman, 1791; Haitian enslaved people\'s demand that liberty apply to them). The productive tension between universal claims and selective application drives the next phase of revolutionary demand for inclusion.'
          },
          {
            question: 'The Reign of Terror (1793-1794) demonstrates which AP principle?',
            options: [
              'Revolutions can consume their own principles — the same movement that began by proclaiming liberty and rights can evolve toward authoritarian violence when external threats (war with European monarchies) and internal conflict (rival revolutionary factions) create conditions where "the revolution is in danger" logic justifies suspension of the rights it proclaimed',
              'The Reign of Terror was caused purely by royalist counter-revolution with no internal revolutionary dynamics',
              'Terror is a necessary and inevitable feature of all revolutions',
              'The Reign of Terror successfully achieved its goals without negative consequences',
            ],
            correctAnswer: 0,
            explanation: 'The Reign of Terror is AP\'s case study in how revolutions can betray their principles: Robespierre genuinely believed he was protecting the Revolution by eliminating its enemies — but in executing 40,000 people (including revolutionary heroes like Danton) he transformed revolutionary justice into arbitrary terror. The logic of "the revolution is in danger, therefore extraordinary measures are justified" is the mechanism. This pattern recurs in subsequent revolutions (Russian, Chinese, Cuban) — AP rewards recognizing the recurring pattern.'
          }
        ]
      }
    },
    {
      id: 'whepr4-content',
      type: 'text' as const,
      content: `
## 📖 The French Revolution

> **Causes: The Three Estates**

| Estate | Who | % Population | Tax Burden |
|--------|-----|-------------|-----------|
| **First Estate** | Clergy | 0.5% | Tax exempt |
| **Second Estate** | Nobility | 1.5% | Tax exempt |
| **Third Estate** | Everyone else (bourgeoisie + peasants) | 98% | Full tax burden |

Financial crisis (war debts from Seven Years War and American Revolution) forced Louis XVI to tax nobility → Estates-General convened 1789 → Third Estate declared itself National Assembly → Revolution began

> **Major Phases**

1. **Constitutional Monarchy (1789-1792):** Declaration of Rights of Man (1789); constitutional monarchy established; Enlightenment ideals implemented
2. **Radical Republic (1792-1794):** King Louis XVI executed (1793); Reign of Terror — Robespierre's Committee of Public Safety executed ~40,000 "enemies of the revolution"
3. **Thermidorian Reaction (1794-1799):** Robespierre executed; moderate reaction; Directory government
4. **Napoleon's Coup (1799):** Napoleon Bonaparte seized power; combined revolutionary and authoritarian elements

> **Key Documents and Events**

- **Declaration of Rights of Man (1789):** Inspired by American Declaration; "liberty, equality, fraternity"; natural rights for all men
- **Execution of Louis XVI (1793):** Symbolic end of divine right monarchy; shocked European monarchies
- **Reign of Terror (1793-1794):** Radical Committee of Public Safety; ~40,000 executed; demonstrated how revolution can consume itself
- **Napoleonic Code:** Codified revolutionary gains (legal equality, property rights) + authoritarian governance

> **AP Comparison Anchor**

- **American vs. French Revolution:** American was conservative (preserved propertied class dominance); French was more radical (executed king and nobility; addressed social inequality); French Revolution went further and became more violent
- **French Revolution and Napoleon:** Napoleon consolidated revolutionary gains (legal equality, religious tolerance) while ending political liberty — "revolution from above" that exported Enlightenment ideas through conquest
      `
    },
    {
      id: 'whepr4-input',
      type: 'multiple-choice' as const,
      content: `**Applied Recall: 3-Question Sprint** 🎯`,
      exercise: {
        questions: [
          {
            question: 'Napoleon\'s relationship to the French Revolution was best characterized as:',
            options: [
              'Napoleon consolidated the Revolution\'s social achievements (legal equality before the law, abolition of feudal privilege, religious tolerance codified in the Napoleonic Code) while ending its political achievements (freedom of press, assembly, representative government) — representing the "revolution from above" that preserved Enlightenment social gains while eliminating democratic political institutions',
              'Napoleon completely reversed all French Revolutionary achievements',
              'Napoleon faithfully implemented all aspects of the French Revolution including political liberty',
              'Napoleon\'s relationship to the Revolution was purely personal with no ideological dimension',
            ],
            correctAnswer: 0,
            explanation: 'The Napoleon-Revolution relationship is AP\'s complexity point: he is simultaneously revolutionary (abolishing feudalism, creating legal equality, establishing religious tolerance across his empire through conquest) and counter-revolutionary (ending press freedom, ruling as emperor, suppressing political opposition). The Napoleonic Code is the artifact that embodies this complexity — a revolutionary legal framework (equality before law, property rights, religious tolerance) imposed by authoritarian means. Understanding this complexity distinguishes AP-level from simple analysis.'
          },
          {
            question: 'The execution of Louis XVI (1793) was historically significant beyond the individual death because:',
            options: [
              'It symbolically completed the Revolution\'s rejection of divine right monarchy — executing a king declared the principle that kings were not sacred divine representatives but rulers subject to the same laws and revolutionary justice as their subjects, shocking European monarchies and making it impossible to restore the Old Regime in France without acknowledging the new principle of popular sovereignty',
              'Louis XVI\'s execution was a minor event with no broader symbolic significance',
              'His execution was motivated purely by personal crimes with no political symbolism',
              'Executing kings was a common practice in European history with no special significance in 1793',
            ],
            correctAnswer: 0,
            explanation: 'The symbolic significance of regicide (killing a king) in revolutionary politics is AP\'s framework: European monarchies responded to Louis XVI\'s execution by forming coalitions against France because they recognized that if a king could be executed by his subjects, the entire system of divine right monarchy was threatened. The execution didn\'t just end one man\'s life — it announced that monarchy rested on consent, not divine appointment. This is why it shocked Europe more than the American Revolution had.'
          },
          {
            question: 'The three phases of the French Revolution (Constitutional Monarchy → Terror → Directory/Napoleon) demonstrate:',
            options: [
              'How revolutionary movements contain internal tensions between moderate and radical factions that produce successive phases: moderates establish a new order; radicals find it insufficient and push further; radical excess generates a conservative reaction; the cycle ends in a consolidating figure who preserves revolutionary gains while ending political instability — a pattern recurring in subsequent revolutions',
              'The French Revolution progressed in a straight line from moderation to radicalism with no reversal',
              'Revolutionary phases are random with no recognizable pattern across different revolutions',
              'The French Revolution had only one phase with no significant internal evolution',
            ],
            correctAnswer: 0,
            explanation: 'The revolutionary cycle pattern is AP\'s meta-lesson from the French Revolution: the thermidorian reaction (conservative backlash against radical terror) → Napoleon (consolidating figure) pattern recurs in the Russian Revolution (1917 radical phase → Stalinist consolidation) and Chinese Revolution (revolutionary phase → Maoist consolidation). AP rewards recognizing these recurring patterns rather than treating each revolution as entirely unique.'
          }
        ]
      }
    },
    {
      id: 'whepr4-dropdown',
      type: 'dropdown-select' as const,
      content: `**Match the Idea: Evidence to Claim**`,
      exercise: {
        dropdowns: [
          {
            label: 'The slogan of the French Revolution encapsulating its three core principles was ___',
            options: [
            'Liberty, equality, fraternity',
            'Life, liberty, property',
            'God, king, country',
            'Order, justice, peace',
            ]
          },
          {
            label: 'The radical phase of the French Revolution (1793-1794) during which ~40,000 were executed was ___',
            options: [
            'The Reign of Terror',
            'The Constitutional Monarchy',
            'The Directory',
            'The Thermidorian Reaction',
            ]
          },
          {
            label: 'Napoleon\'s legal code that preserved revolutionary social gains (legal equality, property rights) was ___',
            options: [
            'The Napoleonic Code',
            'The Declaration of Rights of Man',
            'The Code Justinian',
            'The Civil Constitution of the Clergy',
            ]
          }
        ],
        correctAnswers: [
          'Liberty, equality, fraternity',
          'The Reign of Terror',
          'The Napoleonic Code',
        ],
        hint1: 'French Revolution slogan — three words — Liberté Égalité Fraternité',
        hint2: 'Robespierre — Committee of Public Safety — 40,000 executed — revolution consumes itself',
        hint3: 'Napoleon 1804 — legal equality — property rights — abolished feudalism — exported across Europe',
        explanation: 'Liberty-equality-fraternity articulates the Revolution\'s ideals; the Reign of Terror demonstrates how revolutionary movements can betray those ideals through authoritarian violence; and the Napoleonic Code shows how revolutionary social gains can be preserved even as political liberty is curtailed — the full arc of revolutionary complexity.'
      }
    },
    {
      id: 'whepr4-applied',
      type: 'multiple-choice' as const,
      content: `**AP-Style Application** 🎯`,
      exercise: {
        questions: [
          {
            question: 'Comparing the American and French Revolutions demonstrates which key difference?',
            options: [
              'The American Revolution was more conservative — it transferred political power from British to American elites while preserving the existing social order (slavery, property requirements for voting); the French Revolution was more radical — it attacked the social hierarchy itself (noble privilege, clergy wealth, eventually executed the king) producing greater violence but also more fundamental social transformation',
              'The American Revolution was more radical than the French Revolution',
              'Both revolutions were identical in their social radicalism and outcomes',
              'The French Revolution was purely military with no social-revolutionary dimension',
            ],
            correctAnswer: 0,
            explanation: 'The conservative vs. radical revolution comparison is AP\'s most productive American/French contrast: American colonial elites wanted to govern themselves; they didn\'t want to end the social order that privileged them (including slavery). French revolutionaries targeted the entire Old Regime social structure — noble privilege, church wealth, feudal obligations — making the Revolution fundamentally more disruptive to existing social hierarchy. This explains why the French Revolution produced the Terror (eliminating an entire social class) while the American Revolution did not.'
          },
          {
            question: 'For AP, the French Revolution\'s most lasting contribution to world history was:',
            options: [
              'The articulation of nationalism — the idea that the French nation as a collective entity of citizens had rights and sovereignty, which inspired 19th-century nationalist movements across Europe and beyond, eventually contributing to German and Italian unification and anti-colonial nationalist movements globally',
              'The French Revolution had no lasting influence outside France',
              'Its lasting contribution was exclusively the Napoleonic military system',
              'The Reign of Terror is the Revolution\'s most significant contribution to world history',
            ],
            correctAnswer: 0,
            explanation: 'Nationalism is the French Revolution\'s unexpected global legacy: the Revolution created the concept of "the French nation" as a community of citizens with collective identity and rights, which became the model for 19th-century nationalist movements demanding national self-determination. German nationalists, Italian nationalists, and eventually anti-colonial nationalists all invoked the French Revolutionary principle that a people with a common identity has the right to govern itself — making the Revolution the intellectual foundation of the modern nation-state system.'
          }
        ]
      }
    }
  ]
}
