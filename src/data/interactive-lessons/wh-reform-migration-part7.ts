export const whReformMigrationPart7Data = {
  topicSlug: 'wh-reform-migration',
  sections: [
    {
      id: 'whrm7-intro',
      type: 'text' as const,
      content: `
# ✊ Reform and Migration

**Part 7 of 7 — AP Review and Exam Mastery**

---

> 🔑 **Key Concept:** Reform and Migration content spans AP's c. 1750-1900 and c. 1900-present periods. Key exam themes include evaluating the causes and consequences of global migration, analyzing abolition as a multi-causal process, comparing suffrage strategies, and assessing how diaspora communities shaped anti-colonial movements.
      `
    },
    {
      id: 'whrm7-quiz1',
      type: 'multiple-choice' as const,
      content: `**Concept Check** 🎯`,
      exercise: {
        questions: [
          {
            question: 'An AP SAQ asks: "Briefly explain ONE way the diaspora experience shaped anti-colonial movements." Which earns full credit?',
            options: [
              'Gandhi developed satyagraha (nonviolent civil disobedience) while organizing South Africa\'s Indian community against racial discrimination (1893-1914) — experiencing colonial racism as a professional who had internalized Western liberal values created the contradiction that generated his theory: if British law claimed to protect rights, then publicly and nonviolently violating unjust laws forced the legal system to either enforce injustice visibly or back down; this technique was then directly transferred to India\'s independence movement',
              'Diaspora communities only contributed economically to independence movements with no ideological dimension',
              'Anti-colonial movements were entirely domestic — diaspora experience was irrelevant',
              'Diaspora communities contributed only to cultural preservation, not political organization',
            ],
            correctAnswer: 0,
            explanation: 'SAQ full credit: specific claim (Gandhi developed satyagraha in South Africa) + specific evidence (Indian community in Natal; 1893-1914 organizing; legal contradiction generating resistance theory) + reasoning (explains why diaspora context specifically generated the technique: experiencing contradiction between British legal claims and discriminatory practice). The answer must go beyond "diaspora people experienced discrimination and became angry" to explain the specific mechanism by which diaspora experience generated specific anti-colonial political techniques that then influenced home country independence movements.'
          },
          {
            question: 'For an AP LEQ on reform movements, which thesis about women\'s suffrage earns the highest complexity mark?',
            options: [
              'Women\'s suffrage was achieved through different strategies in different political contexts — New Zealand\'s constitutional lobbying succeeded where it was sufficient (1893); British militancy was adopted where constitutional methods had failed (1905-1914); and the movement\'s internal debate between egalitarian rights arguments and maternalist moral superiority arguments reflected a tension between challenging gender hierarchy fundamentally and using gender difference strategically to gain short-term political acceptance',
              'Women\'s suffrage was universally achieved through identical militant tactics',
              'The suffrage movement uniformly argued for complete gender equality with no internal disagreements',
              'Suffrage was granted to women everywhere by sympathetic male politicians with no connection to women\'s organizing',
            ],
            correctAnswer: 0,
            explanation: 'Complexity through internal variation is AP\'s highest LEQ standard: a sophisticated thesis must identify variation (different strategies in different contexts), explain why the variation exists (political context shapes strategy effectiveness), AND acknowledge internal complexity within the movement (egalitarian vs. maternalist arguments). This demonstrates that the student can go beyond a simple narrative ("suffragists fought for the vote and won") to analyze the movement as a historically specific, internally varied, strategically adaptive political process — exactly what AP rewards with complexity points.'
          }
        ]
      }
    },
    {
      id: 'whrm7-content',
      type: 'text' as const,
      content: `
## 📖 AP Review: Reform and Migration

> **Must-Know Vocabulary**

- **Push-pull factors** — Economic, political, and social forces driving migration from sending regions and attracting migrants to destinations
- **Chain migration** — Social network-based migration where earlier migrants facilitate subsequent migration from same communities
- **Indentured labor** — Post-slavery contract labor system; technically free but practically coercive; mainly Indian and Chinese
- **Remittances** — Money sent by migrants back to home country families; economically significant for sending nations
- **Birds of passage** — Circular migrants (especially Italian) who worked abroad seasonally and returned home
- **Satyagraha** — Gandhi's nonviolent resistance technique developed in South Africa; truth-force; civil disobedience
- **Double consciousness** — Du Bois's concept: colonized/oppressed people see themselves both through their own eyes and through the distorting lens of the dominant society
- **Pan-Africanism** — Movement asserting African cultural and political unity across diaspora and continental Africa
- **Maternalist suffrage** — Argument for women's suffrage based on women\'s superior moral qualities; contrasted with egalitarian suffrage
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
| Brazil | Gradual legislation (trade → free womb → full) | International pressure + slave resistance | 1888 |
      `
    },
    {
      id: 'whrm7-input',
      type: 'multiple-choice' as const,
      content: `**Applied Recall: 3-Question Sprint** 🎯`,
      exercise: {
        questions: [
          {
            question: 'An AP DBQ includes a document from a British plantation owner in Trinidad (c. 1850) defending the indentured labor system as "beneficial to Indian workers." Proper sourcing requires analyzing:',
            options: [
              'The plantation owner\'s point of view (direct economic beneficiary of cheap indentured labor), purpose (likely a response to abolitionist critics or parliamentary inquiries into post-slavery labor conditions), and historical situation (British Parliament had been investigating colonial labor conditions since abolition; plantation owners needed to defend their labor system against reform pressure) — together these suggest the document would systematically present the best-case arguments for indenture while downplaying or omitting evidence of coercion',
              'Plantation owner documents are completely objective — their economic interest is irrelevant to content reliability',
              'Only documents from Indian workers themselves are usable — all plantation owner documents must be excluded',
              'The document\'s historical situation is unknowable and therefore irrelevant to sourcing',
            ],
            correctAnswer: 0,
            explanation: 'Multi-factor sourcing with calibrated reliability assessment is AP\'s DBQ standard: the plantation owner has specific interests (cheap labor), writes for a specific purpose (defending the system against critics), in a specific situation (parliamentary scrutiny). This does not mean the document is false — it may accurately describe some material benefits of indenture (regular wages; passage provided; some legal protections in theory). But the document is unlikely to include evidence of debt bondage, physical punishment, or workers\' inability to leave — exactly the evidence that critics cited. Sourcing means calibrating what the document is likely to include and exclude based on context, not simply "trust" or "distrust."'
          },
          {
            question: 'Comparing European voluntary mass migration (1850-1914) to indentured labor migration reveals which AP pattern?',
            options: [
              'Both migration streams moved labor from areas of surplus to areas of demand, but operated within fundamentally different frameworks of freedom and coercion — European migrants responded to push-pull factors with significant (if constrained by poverty) agency in choosing destinations and changing employment; indentured workers were contractually bound for years, legally penalized for leaving, and had structural economic vulnerability that made the technical legal freedom meaningless in practice',
              'Both migration types involved identical conditions of freedom and coercion',
              'European migrants had more coercion because they were pushed by famine; indentured workers had more freedom because their passage was paid',
              'There was no significant overlap in destination regions between the two migration types',
            ],
            correctAnswer: 0,
            explanation: 'Freedom spectrum is AP\'s comparative framework: both migration types involved people leaving economically disadvantaged regions for economically active regions — but the structures were different. Voluntary migration: individuals researched destinations (chain migration information), chose routes, could change employers, could eventually become citizens. Indentured migration: signed contracts under information asymmetry, bound for fixed years with criminal penalties for breach, worked under plantation discipline, had minimal legal recourse. AP comparison must identify both similarities (both economic migration; both global) and the crucial structural difference (freedom vs. contracted labor) and explain why that difference mattered to the migrants\' actual experiences.'
          },
          {
            question: 'The Haitian Revolution\'s role in abolition politics demonstrates which AP analytical principle?',
            options: [
              'The same historical event can simultaneously advance and retard a historical process — the Haitian Revolution both accelerated abolition (by demonstrating slavery\'s instability and inspiring abolitionists) and delayed abolition (by terrifying slaveholders who used Haitian precedent to argue that emancipation would produce revolutionary violence) — demonstrating that causation in history is complex, contextual, and can produce opposite effects in different political environments',
              'The Haitian Revolution uniformly accelerated abolition in all affected societies',
              'The Haitian Revolution only delayed abolition — its effects were entirely negative for the movement',
              'The Haitian Revolution had no measurable impact on abolition politics outside Haiti',
            ],
            correctAnswer: 0,
            explanation: 'Same event, opposite effects in different contexts is AP\'s complexity principle: the most sophisticated historical analysis recognizes that events don\'t have single, uniform effects — their effects are mediated by the specific contexts in which they are received. British abolitionists (who had no enslaved population in Britain to fear) could celebrate Haiti as evidence of slavery\'s unsustainability. American slaveholders (who feared their own enslaved population) used Haiti as evidence that emancipation was dangerous. The same historical fact produced opposite political conclusions because the interpreters\' contexts and interests differed fundamentally.'
          }
        ]
      }
    },
    {
      id: 'whrm7-dropdown',
      type: 'dropdown-select' as const,
      content: `**Match the Idea: Evidence to Claim**`,
      exercise: {
        dropdowns: [
          {
            label: 'Gandhi\'s technique of nonviolent civil disobedience, developed in South Africa and later applied to India\'s independence movement, was ___',
            options: [
            'Satyagraha',
            'Ahimsa',
            'Swaraj',
            'Non-cooperation',
            ]
          },
          {
            label: 'W.E.B. Du Bois\'s concept describing the psychological division experienced by colonized people who see themselves through both their own eyes and society\'s distorting racial lens was ___',
            options: [
            'Double consciousness',
            'The Color Line',
            'The Veil',
            'Racial dualism',
            ]
          },
          {
            label: 'The first country to grant women\'s suffrage (1893) through peaceful constitutional lobbying was ___',
            options: [
            'New Zealand',
            'Australia',
            'Finland',
            'Norway',
            ]
          }
        ],
        correctAnswers: [
          'Satyagraha',
          'Double consciousness',
          'New Zealand',
        ],
        hint1: 'Gandhi South Africa 1893-1914 — truth force — nonviolent civil disobedience — Natal Indian Congress — anti-registration campaigns — transferred to India 1915',
        hint2: 'Du Bois 1903 — Souls of Black Folk — two-ness — self vs white racial perception — measuring by tape of contempt — psychological colonialism dimension',
        hint3: 'New Zealand 1893 — Kate Sheppard petition — first world women\'s suffrage — constitutional lobbying — governor signed',
        explanation: 'Satyagraha connects diaspora experience to anti-colonial technique development; double consciousness provides the psychological analytical framework for understanding colonial identity; and New Zealand\'s 1893 suffrage demonstrates that constitutional reform was achievable in the right political context — together they represent the core analytical vocabulary AP requires for reform and migration topics.'
      }
    },
    {
      id: 'whrm7-applied',
      type: 'multiple-choice' as const,
      content: `**AP-Style Application** 🎯`,
      exercise: {
        questions: [
          {
            question: 'Pan-Africanism\'s development from diaspora intellectual movement to African independence ideology demonstrates:',
            options: [
              'Ideas developed in one context (diaspora African and African American intellectuals in the USA and Britain analyzing racial hierarchy theoretically) can be adopted and transformed in different contexts (African independence leaders using Pan-African frameworks to organize mass independence movements in Ghana, Kenya, and Nigeria) — demonstrating that intellectual movements have impacts beyond their original social contexts and that ideas travel across geographic and generational boundaries',
              'Pan-Africanism was invented by African leaders with no influence from diaspora intellectuals',
              'Intellectual movements in diaspora communities have no influence on political movements in home countries',
              'Pan-Africanism remained purely theoretical with no connection to actual independence movements',
            ],
            correctAnswer: 0,
            explanation: 'Transnational idea transfer is AP\'s intellectual history analysis: Du Bois and Garvey developed Pan-African frameworks in the USA; African students studying in the USA and Britain (Nkrumah at Lincoln University; Kenyatta in London) absorbed these frameworks. The 1945 Manchester Congress was the organizational moment where diaspora intellectuals met African independence leaders — Nkrumah and Du Bois co-organized it. Nkrumah returned to Ghana (then Gold Coast) and built the Convention People\'s Party using Pan-African organizational models. Ghana\'s 1957 independence was understood by Nkrumah as a Pan-African achievement — he invited independence leaders from across Africa to Accra. Diaspora intellectual frameworks → African political organization → independence.'
          },
          {
            question: 'For AP synthesis, the common thread connecting abolition, women\'s suffrage, labor movements, and Pan-Africanism as reform movements of the 19th and early 20th centuries was:',
            options: [
              'All applied Enlightenment natural rights language and liberal political philosophy (individual rights, consent of the governed, equality before the law) to groups that the original Enlightenment framework had excluded — by accepting the liberal framework\'s principles but extending their scope to enslaved people, women, workers, and colonized peoples, these movements revealed the contradiction between liberal ideology\'s universal claims and its historically limited application',
              'All four movements were entirely separate with no shared ideology or strategy',
              'All four movements explicitly rejected Enlightenment liberalism as a Western ideology incompatible with their goals',
              'The movements only connected to each other in the 20th century — in the 19th century they had no ideological relationship',
            ],
            correctAnswer: 0,
            explanation: 'Enlightenment liberal framework as both tool and target is AP\'s synthesis: abolitionism argued that natural rights principles applied to enslaved people — using Locke against slaveholders. Women\'s suffrage argued that consent of the governed applied to women — using Jefferson against patriarchy. Labor movements argued that liberty and equality applied in economic as well as political spheres — using liberal principles against laissez-faire capitalism. Pan-Africanism argued that self-determination applied to colonized peoples — using Wilson\'s own rhetoric against colonialism. All four movements used liberalism against its own historical limitations, forcing the logic of the framework to include groups it had originally excluded.'
          }
        ]
      }
    }
  ]
}
