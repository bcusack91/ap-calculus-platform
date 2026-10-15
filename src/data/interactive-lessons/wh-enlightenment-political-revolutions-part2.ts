export const whEnlightenmentPoliticalRevolutionsPart2Data = {
  topicSlug: 'wh-enlightenment-political-revolutions',
  sections: [
    {
      id: 'whepr2-intro',
      type: 'text' as const,
      content: `
# 💡 Enlightenment and Political Revolutions

**Part 2 of 7 — Enlightenment Thinkers and Their Ideas**

---

> 🔑 **Key Concept:** Enlightenment thinkers (Locke, Rousseau, Voltaire, Montesquieu) developed ideas about natural rights, social contract, separation of powers, and individual reason that challenged the divine right of kings and provided the intellectual foundations for the American, French, and Haitian revolutions. AP questions focus on which thinkers influenced which revolutions and how.
      `
    },
    {
      id: 'whepr2-quiz1',
      type: 'multiple-choice' as const,
      content: `**Concept Check** 🎯`,
      exercise: {
        questions: [
          {
            question: 'John Locke\'s most significant contribution to revolutionary political thought was:',
            options: [
              'The argument that legitimate government rests on consent and that people may revolt when it violates their natural rights',
              'A defense of absolute monarchy as the most rational form of government, since it alone prevents revolt and civil war',
              'The claim that people hold rights only as grants from the state, with no natural rights outside government',
              'The theory that religious authority should guide political institutions and limit the power of kings',
            ],
            correctAnswer: 0,
            explanation: 'Locke\'s consent theory is directly traceable in the Declaration of Independence: Jefferson\'s "life, liberty, and the pursuit of happiness" is Locke\'s "life, liberty, and property"; the Declaration\'s argument that George III had violated the social contract echoes Locke\'s right to revolution when government violates consent. The AP connection: specific Enlightenment ideas → specific revolutionary documents → specific political consequences.'
          },
          {
            question: 'Montesquieu\'s concept of separation of powers influenced which political institution most directly?',
            options: [
              'The US Constitution\'s three branches with checks and balances, drawn from The Spirit of the Laws (1748)',
              'The French absolute monarchy, which reformed itself into a three-branch system under Louis XVI (1774)',
              'The Holy Roman Empire\'s imperial diet, which Montesquieu held up as the model of divided power',
              'The National Convention of revolutionary France, which merged all lawmaking and executive power in one body',
            ],
            correctAnswer: 0,
            explanation: 'The Montesquieu → US Constitution connection is one of AP\'s clearest Enlightenment-to-revolution causal links: the Framers read Montesquieu and specifically cited his work; the three-branch structure with checks and balances (Congress checks president; president vetoes Congress; courts review both) is Montesquieu\'s separation of powers theory implemented in institutional form. This is AP\'s model of how intellectual history connects to political history.'
          }
        ]
      }
    },
    {
      id: 'whepr2-content',
      type: 'text' as const,
      content: `
## 📖 Enlightenment Thinkers and Ideas

> **Core Enlightenment Principles**

The Enlightenment (17th-18th century Europe) applied scientific reasoning to human society:

- **Natural rights:** People are born with inherent rights (life, liberty, property) that governments cannot take away
- **Social contract:** Governments derive legitimate authority from the consent of the governed; if they violate this contract, people may revolt
- **Separation of powers:** Government power should be divided to prevent tyranny
- **Reason over tradition:** Religious authority and royal tradition should be subject to rational critique

> **Key Thinkers and Their Ideas**

| Thinker | Country | Key Ideas | Influenced |
|---------|---------|-----------|-----------|
| **John Locke** | England | Natural rights (life, liberty, property); government by consent; right to revolution | American Revolution (Declaration of Independence) |
| **Jean-Jacques Rousseau** | France | General will; popular sovereignty; "Man is born free but everywhere is in chains" | French Revolution |
| **Voltaire** | France | Religious tolerance; freedom of speech; critique of church and aristocracy | French revolutionary culture |
| **Montesquieu** | France | Separation of powers (executive, legislative, judicial); checks and balances | US Constitution |
| **Mary Wollstonecraft** | England | Women's rights; rational equality of women with men | Feminist movements |

> **Limits of Enlightenment**

AP questions often probe contradictions:

- **Slavery:** Enlightenment thinkers proclaimed universal rights but many profited from or defended slavery and colonial exploitation — Jefferson enslaved people; Locke invested in the slave-trading Royal African Company and helped draft the Fundamental Constitutions of Carolina (1669), which gave masters absolute power over enslaved people
- **Women:** Most Enlightenment thinkers excluded women from political rights; Wollstonecraft's Vindication of the Rights of Woman (1792) challenged this
- **Colonized peoples:** Enlightenment "reason" was used to justify European superiority and colonial domination alongside arguments for human rights

> **AP Comparison Anchor**

- **Enlightenment vs. earlier political theory:** Medieval theory justified kingship through divine right and Christian hierarchy; Enlightenment theory justified government through natural rights and rational consent — a fundamental shift in the basis of political legitimacy
      `
    },
    {
      id: 'whepr2-input',
      type: 'multiple-choice' as const,
      content: `**Applied Recall: 3-Question Sprint** 🎯`,
      exercise: {
        questions: [
          {
            question: 'The Enlightenment\'s internal contradiction regarding slavery demonstrates:',
            options: [
              'Universal rights were applied selectively, yet their language later armed enslaved and colonized peoples',
              'Enlightenment thinkers unanimously opposed slavery, seeing it as plainly incompatible with their natural rights theory',
              'The gap between Enlightenment ideals and slavery had little effect on later abolitionist or anticolonial movements',
              'Enlightenment thinkers ignored slavery entirely, treating it as unrelated to their political theory of rights',
            ],
            correctAnswer: 0,
            explanation: 'The selective universalism of Enlightenment thought is AP\'s complexity point: Locke\'s property rights theory was used to justify both individual liberty AND property in enslaved people; Jefferson wrote that "all men are created equal" while holding people in slavery (more than 600 over his lifetime); Locke invested in the slave-trading Royal African Company. But the very language of universal rights created a standard by which these contradictions could be challenged — Toussaint L\'Ouverture used Enlightenment language to justify the Haitian Revolution, and abolitionists used natural rights arguments against slavery. Enlightenment ideals were simultaneously limiting and liberating.'
          },
          {
            question: 'Mary Wollstonecraft\'s Vindication of the Rights of Woman (1792) was significant because:',
            options: [
              'It applied Enlightenment reason consistently, arguing that women\'s rational capacity entitled them to equal rights',
              'It argued that women\'s rational nature suited them chiefly for domestic roles that supported male citizens',
              'It rejected Enlightenment reason, grounding women\'s rights in religious duty and traditional custom',
              'It persuaded Parliament to grant British women property and voting rights within a decade of its publication in 1792',
            ],
            correctAnswer: 0,
            explanation: 'Wollstonecraft\'s significance is methodological: she used Enlightenment reasoning against Enlightenment practice. If reason is the basis for rights, and women have reason, then consistency requires extending rights to women — the argument is internally generated by Enlightenment logic. This demonstrates AP\'s theme that ideas can have consequences their originators didn\'t intend: Enlightenment natural rights theory created the intellectual tools that would be used by women, enslaved people, and colonized peoples to demand their own inclusion.'
          },
          {
            question: 'The Enlightenment\'s shift from divine right to social contract as the basis for political legitimacy was historically significant because:',
            options: [
              'It made consent the test of legitimacy, giving subjects a standard for judging and even overthrowing any government',
              'Divine right and social contract were essentially equivalent, so the shift changed little in practice',
              'Social contract theory made revolution impossible by requiring unanimous consent for any change',
              'The shift removed religion from European debates over legitimacy entirely within a single generation',
            ],
            correctAnswer: 0,
            explanation: 'The legitimacy-basis shift is AP\'s deepest Enlightenment contribution: when legitimacy required divine appointment, questioning the king was blasphemy; when legitimacy requires consent, questioning the king is rational political analysis. This intellectual shift made the American, French, and Haitian revolutions conceptually possible — not just politically angry revolts but principled arguments that governments violating consent had lost their legitimacy. Every revolution that followed invoked this framework.'
          }
        ]
      }
    },
    {
      id: 'whepr2-dropdown',
      type: 'dropdown-select' as const,
      content: `**Match the Idea: Evidence to Claim**`,
      exercise: {
        dropdowns: [
          {
            label: 'The Enlightenment thinker who argued for natural rights to "life, liberty, and property" and government by consent was ___',
            options: [
            'John Locke',
            'Jean-Jacques Rousseau',
            'Voltaire',
            'Montesquieu',
            ]
          },
          {
            label: 'The concept that government authority derives from the consent of the governed and may be revoked if violated was ___',
            options: [
            'Social contract theory',
            'Divine right theory',
            'Feudal compact theory',
            'Mercantile theory',
            ]
          },
          {
            label: 'Montesquieu\'s proposal for preventing tyranny by dividing government into branches was ___',
            options: [
            'Separation of powers',
            'Natural rights',
            'Popular sovereignty',
            'Balance of power',
            ]
          }
        ],
        correctAnswers: [
          'John Locke',
          'Social contract theory',
          'Separation of powers',
        ],
        hint1: 'English philosopher — life liberty property — consent of governed — right to revolution',
        hint2: 'Legitimacy from consent — revocable — Jefferson Declaration of Independence',
        hint3: 'Three branches — executive legislative judicial — checks and balances — US Constitution',
        explanation: 'John Locke provided the natural rights framework; social contract theory provided the mechanism of legitimate vs. illegitimate government; and separation of powers provided the institutional design solution — together these three Enlightenment contributions directly produced the American and French revolutionary constitutions.'
      }
    },
    {
      id: 'whepr2-applied',
      type: 'multiple-choice' as const,
      content: `**AP-Style Application** 🎯`,
      exercise: {
        questions: [
          {
            question: 'Comparing Enlightenment political theory to earlier (medieval) political theory reveals which fundamental change?',
            options: [
              'Authority moved from divine will and religious hierarchy to natural rights and the consent of rational individuals',
              'Medieval and Enlightenment thinkers held the same view of legitimacy, differing only in their style of argument',
              'Enlightenment thinkers revived ancient Greek theory directly, leaving medieval ideas about divine authority untouched',
              'Medieval theory grounded rule in consent, while Enlightenment theory restored divine right',
            ],
            correctAnswer: 0,
            explanation: 'The legitimacy-source change is AP\'s fundamental Enlightenment contribution: moving the foundation of political authority from God to human reason changed everything about how governments had to justify themselves. This is why the Enlightenment is the intellectual watershed for modern politics — from this point, political authority requires rational justification in human terms, not divine endorsement. Every modern state (democratic and authoritarian) now claims to represent the people\'s interests or rights, not God\'s will — even if dishonestly.'
          },
          {
            question: 'Which AP analysis of Enlightenment ideas demonstrates the most sophistication?',
            options: [
              'Its ideas were universal in claim but selective in practice, and excluded groups used them to demand inclusion',
              'Enlightenment ideas were uniformly progressive, advancing liberty for all groups without any internal contradictions',
              'Enlightenment ideas mattered only to European elites and had no real effect on women, enslaved, or colonized peoples',
              'The Enlightenment\'s contradictions invalidate its ideas entirely, making them hypocritical and historically insignificant',
            ],
            correctAnswer: 0,
            explanation: 'AP sophistication: acknowledging both the universalizing dimension (natural rights language applicable to all humans) and the limiting dimension (selective application by gender, race, class) AND the productive tension between them (excluded groups using universal language to demand inclusion). This is more analytically complete than either "Enlightenment = progressive liberation" or "Enlightenment = hypocritical European ideology" — both are too simple to earn full AP credit.'
          }
        ]
      }
    }
  ]
}
