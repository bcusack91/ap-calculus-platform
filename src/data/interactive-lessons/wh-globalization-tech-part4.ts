export const whGlobalizationTechPart4Data = {
  topicSlug: 'wh-globalization-tech',
  sections: [
    {
      id: 'whgt4-intro',
      type: 'text' as const,
      content: `
# Globalization & Technology After 1900

**Part 4 of 7 — Connections & Interactions**

---

| Section |
|---|
| Mass migration: labor migrants, refugees, brain drain |
| Diasporas and remittances |
| Resistance to globalization (Topic 9.7) |
| Disease in a connected world |

> Key idea: Globalization moved people, diseases, ideas and protests across borders, not just goods and money. AP prompts often ask how migration and disease reshaped societies, and how movements organized across borders to challenge the globalization model itself.
      `
    },
    {
      id: 'whgt4-content',
      type: 'text' as const,
      content: `
## Mass Migration After 1945

| Type | Examples |
|---|---|
| Labor migration | Turks, Italians, Greeks and Yugoslavs to West Germany (the Gastarbeiter program, from 1961 for Turkey); Mexicans to the United States (the Bracero program, 1942–64, and later migration); South Asians and Filipinos to the Persian Gulf states after the 1970s oil boom |
| Refugee flows | Palestinians (1948); Vietnamese "boat people" (from 1975); Afghans (from 1979); Rwandans (1994); people fleeing the Yugoslav wars (1990s) |
| Postcolonial migration | West Indians to Britain (the "Windrush generation," from 1948); Algerians to France; Indonesians to the Netherlands |
| Brain drain | Indian engineers to the United States; African doctors to Britain and Canada |

> **Why migrants followed old ties:** Many migrants moved to the former colonial power, whose language they spoke and where they had legal rights to enter. The CED notes that migrants often kept "cultural and economic ties between the colony and the metropole even after the dissolution of empires."
      `
    },
    {
      id: 'whgt4-quiz',
      type: 'multiple-choice' as const,
      content: `**Concept Check — Migration**`,
      exercise: {
        questions: [
          {
            question: 'Which best describes the West German Gastarbeiter ("guest worker") program of the 1960s?',
            options: [
              'A policy that barred foreign workers so that industrial jobs went only to German citizens',
              'A plan that sent West German workers to staff new factories in Turkey and Yugoslavia',
              'Recruitment of foreign workers on temporary contracts, many of whom settled for good',
              'A NATO program that stationed Turkish and Italian soldiers on West German bases'
            ],
            correctAnswer: 2,
            explanation: 'The Gastarbeiter program recruited workers to fill labor shortages during West Germany\'s postwar boom; many settled permanently and built lasting communities. They were recruited workers, not refugees or soldiers, and the policy welcomed rather than barred them.'
          },
          {
            question: 'Which statement best explains why many migrants after 1945 moved to former colonial powers, such as West Indians to Britain and Algerians to France?',
            options: [
              'Former colonial powers banned all other immigration, so colonial subjects were the only people allowed in',
              'Shared language and legal rights of entry tied colonies to the metropole even after independence',
              'Colonial governments forced migrants to move as punishment for joining independence movements',
              'International law required every former colony to send a share of its workers to the former colonial power'
            ],
            correctAnswer: 1,
            explanation: 'Colonial rule left shared languages, networks and, for a time, legal rights to enter the metropole, so migration followed old imperial ties. The other options invent bans, punishments or legal requirements that did not exist.'
          }
        ]
      }
    },
    {
      id: 'whgt4-resist',
      type: 'text' as const,
      content: `
## Diasporas and Remittances

- A **diaspora** is a community living outside its homeland. Migrants sent **remittances**, money sent home to families, which by the late 1990s were a major source of income for countries such as India, Mexico and the Philippines.
- Remittances paid for food, schooling and housing, and in some countries they brought in more foreign currency than exports of any single product.

## Resistance to Globalization (Topic 9.7)

KC-6.3.IV.iv: "Responses to rising cultural and economic globalization took a variety of forms." The CED names anti-IMF and anti-World Bank activism as examples.

| Event | Year | Significance |
|---|---|---|
| Caracazo riots, Venezuela | 1989 | Protests against fuel-price rises and austerity tied to an IMF agreement |
| Zapatista uprising, Mexico | 1994 | Indigenous rebels in Chiapas rose up on January 1, the day NAFTA took effect |
| "Battle of Seattle" | 1999 | Tens of thousands of union members, environmentalists and indigenous-rights activists disrupted a WTO meeting |
| World Social Forum, Porto Alegre | 2001 | Activists met under the slogan "Another world is possible" |
| Genoa G8 protests | 2001 | Mass protests at a summit of leading industrial nations; one protester was killed by police |
      `
    },
    {
      id: 'whgt4-dropdown',
      type: 'dropdown-select' as const,
      content: `**Match each migration flow to its main destination.**`,
      exercise: {
        dropdowns: [
          {
            label: 'Windrush-generation migrants from the Caribbean, 1948–1971: ___',
            options: ['United Kingdom', 'France', 'West Germany', 'United States']
          },
          {
            label: 'Algerian migrants from the 1950s through the 1970s: ___',
            options: ['United Kingdom', 'France', 'West Germany', 'United States']
          },
          {
            label: 'Turkish Gastarbeiter recruited from 1961 onward: ___',
            options: ['United Kingdom', 'France', 'West Germany', 'United States']
          }
        ],
        correctAnswers: ['United Kingdom', 'France', 'West Germany'],
        hint1: 'Caribbean migrants went to the former British metropole.',
        hint2: 'Algerian migrants went to the former French metropole.',
        hint3: 'Turkish guest workers went to the West German "economic miracle."',
        explanation: 'Each flow followed colonial or labor-recruitment ties: the Caribbean to Britain, Algeria to France, Turkey to West Germany.'
      }
    },
    {
      id: 'whgt4-disease',
      type: 'text' as const,
      content: `
## Disease in a Connected World

| Disease | Years | Connection |
|---|---|---|
| Influenza | 1918–19 | Wartime troop movements and shipping carried it worldwide |
| HIV/AIDS | From 1981 | Travel and migration spread it to every continent; by 2001 tens of millions had been infected |
| Cholera | From 1961 | A pandemic beginning in Indonesia reached Latin America in 1991 |

- **The paradox:** The air travel, shipping and migration that integrated the world economy were the same networks that turned regional outbreaks into worldwide epidemics.

- **Key takeaway:** Connections prompts reward specific cases (the Windrush generation, the Battle of Seattle, HIV/AIDS) rather than general statements about "global integration."
      `
    },
    {
      id: 'whgt4-applied',
      type: 'multiple-choice' as const,
      content: `**Applied AP Practice — Connections**`,
      exercise: {
        questions: [
          {
            question: 'Which best characterizes the 1999 "Battle of Seattle"?',
            options: [
              'A WTO agreement on labor and environmental standards that settled disputes between rich and poor members',
              'Unions, environmentalists and indigenous groups disrupting a WTO meeting',
              'A strike by Seattle dockworkers that shut West Coast ports during the holiday shipping season',
              'A lawsuit in which Seattle activists asked U.S. courts to order the WTO to set binding emissions limits'
            ],
            correctAnswer: 1,
            explanation: 'The Seattle protests were the debut of a broad movement against the costs of economic globalization, an example of KC-6.3.II.C and Topic 9.7. The meeting ended without the new agreement its organizers wanted, and the event was a mass demonstration, not a strike or a lawsuit.'
          },
          {
            question: 'Which statement best describes the significance of remittances for countries such as the Philippines and Mexico by the late 1990s?',
            options: [
              'They were too small to affect household incomes, since most migrants kept their earnings abroad',
              'They flowed mainly from poor countries to rich ones, as families sent money to relatives working abroad',
              'They were seized by governments for state budgets and rarely reached migrants\' families',
              'They became a major source of family income and foreign currency for the sending countries'
            ],
            correctAnswer: 3,
            explanation: 'Money sent home by migrant workers paid for food, schooling and housing and brought in large amounts of foreign currency. Remittances were large, flowed from wealthy host countries to poorer home countries, and went to households rather than governments.'
          }
        ]
      }
    }
  ]
}
