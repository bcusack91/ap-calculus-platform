export const whGlobalizationTechPart6Data = {
  topicSlug: 'wh-globalization-tech',
  sections: [
    {
      id: 'whgt6-intro',
      type: 'text' as const,
      content: `
# Globalization & Technology After 1900

**Part 6 of 7 — Problem-Solving Workshop**

---

| Section |
|---|
| HIPP for documents about globalization |
| Document bank: the GATT preamble, the Marrakesh Agreement, the Zapatistas' declaration, Stiglitz's "Globalization and Its Discontents" |
| AP SAQ structure for globalization prompts |
| Common AP traps to avoid |

> Key idea: Globalization documents come from a clear position: technocratic designers of the system, people resisting it, or critics who once worked inside it. Sourcing the author's position is the highest-value AP move on these prompts.
      `
    },
    {
      id: 'whgt6-content',
      type: 'text' as const,
      content: `
## HIPP for Globalization Documents

| Letter | Question | Globalization application |
|---|---|---|
| **H**istorical situation | What was happening when this was produced? | Just after World War II? The debt crises of the 1980s? Just after NAFTA or the 1997 Asian crisis? |
| **I**ntended audience | Who was this for? | Trade negotiators? A national public? The international press? |
| **P**urpose | What was the author trying to do? | Build the system? Resist it? Reform it from within? |
| **P**oint of view | What position is the author writing from? | Governments? An indigenous rebel movement? A former insider? |

## Document Bank

> **1. General Agreement on Tariffs and Trade, preamble (1947)**
> "...entering into reciprocal and mutually advantageous arrangements directed to the substantial reduction of tariffs and other barriers to trade and to the elimination of discriminatory treatment in international commerce."

- **HIPP:** Signed by 23 countries two years after World War II, when leaders blamed the high tariffs of the 1930s for deepening the Depression; intended audience is the signatory governments; purpose is to lower tariffs step by step through negotiation; point of view is that of mostly Western governments, led by the United States, rebuilding the world economy.

> **2. Marrakesh Agreement Establishing the World Trade Organization, preamble (1994)**
> "Resolved, therefore, to develop an integrated, more viable and durable multilateral trading system..."

- **HIPP:** Concluded by the 123 governments of the Uruguay Round, about two years after the Soviet collapse; intended audience is the international trade-policy community; purpose is to replace GATT with a permanent organization that has binding dispute settlement; point of view is technocratic, multilateral and rules-based.
      `
    },
    {
      id: 'whgt6-quiz',
      type: 'multiple-choice' as const,
      content: `**Concept Check — Sourcing the founding documents**`,
      exercise: {
        questions: [
          {
            question: 'Which historical situation best explains why the GATT signatories of 1947 wanted to reduce tariffs?',
            options: [
              'The 1971 Nixon Shock had just ended the fixed exchange rates set at Bretton Woods',
              'Leaders blamed the trade barriers of the 1930s for deepening the Great Depression',
              'The WTO had already failed to settle trade disputes among its members',
              'The 1997 Asian financial crisis had shut down trade across East Asia'
            ],
            correctAnswer: 1,
            explanation: 'Postwar leaders believed the tariff wars of the 1930s had worsened the Depression and fed the conflicts that led to war, so they designed GATT to lower barriers gradually. The other options describe events that came decades later.'
          },
          {
            question: 'How did the 1994 Marrakesh Agreement change the trading system that GATT had set up in 1947?',
            options: [
              'It abolished every tariff in the world at once and closed the old GATT secretariat',
              'It returned trade policy to individual governments acting without any shared rules',
              'It replaced GATT with a permanent organization whose dispute rulings were binding',
              'It limited the new body to trade in oil and other raw materials'
            ],
            correctAnswer: 2,
            explanation: 'The WTO turned GATT\'s rounds of negotiation into a permanent organization with binding dispute settlement and a wider scope that included services and intellectual property. It did not abolish all tariffs, it strengthened rather than weakened multilateral rules, and it covered far more than raw materials.'
          }
        ]
      }
    },
    {
      id: 'whgt6-docs2',
      type: 'text' as const,
      content: `
> **3. Zapatista Army of National Liberation (EZLN), First Declaration of the Lacandon Jungle (January 1, 1994)**
> "Today we say enough is enough!"

- **HIPP:** Issued as indigenous rebels seized towns in Chiapas, Mexico, on the day NAFTA took effect (the declaration itself focuses on land, poverty and the Mexican government rather than on NAFTA by name); intended audience is the Mexican public and, through the press, the world; purpose is to win support for indigenous rights and against the government's free-market policies; point of view is that of poor indigenous farmers in southern Mexico.

> **4. Joseph Stiglitz, "Globalization and Its Discontents" (2002), a secondary source on the 1990s**
> "Decisions were made on the basis of what seemed a curious blend of ideology and bad economics..."

- **HIPP:** Written by a Nobel Prize–winning economist who had been the World Bank's chief economist (1997–2000) during the Asian financial crisis; intended audience is policymakers and the informed public; purpose is to criticize IMF conditions imposed on developing countries in the 1990s; point of view is that of an insider critic of the institutions he had served.

## AP SAQ Structure (3 parts)

- **A. Identify** one specific feature of post-1945 globalization
- **B. Explain** how it contributed to an outcome (growth, inequality, integration, or backlash)
- **C. Explain** a contrast with another phase, or a contrasting interpretation

## Common AP Traps

| Trap | Why it costs points |
|---|---|
| Calling globalization simply "good" or "bad" | AP rewards analysis of winners and losers |
| Treating globalization as new after 1945 | The 1870–1914 wave also had high trade and migration |
| Saying "the internet caused globalization" | The internet sped up trends that began with Bretton Woods, GATT and container shipping decades earlier |
| Quoting documents without sourcing them | The sourcing point requires HIPP |
| Ignoring China | China's post-1978 reforms are among the largest globalization stories of the period |
      `
    },
    {
      id: 'whgt6-dropdown',
      type: 'dropdown-select' as const,
      content: `**Match each fact to the HIPP element it most directly supports.**`,
      exercise: {
        dropdowns: [
          {
            label: 'Knowing Stiglitz had been the World Bank\'s chief economist before writing his critique is most useful for: ___',
            options: ['historical situation', 'intended audience', 'purpose', 'point of view']
          },
          {
            label: 'Knowing the Marrakesh Agreement was designed to replace GATT with a permanent trade body is most useful for: ___',
            options: ['historical situation', 'intended audience', 'purpose', 'point of view']
          },
          {
            label: 'Knowing the Zapatistas issued their declaration on the day NAFTA took effect is most useful for: ___',
            options: ['historical situation', 'intended audience', 'purpose', 'point of view']
          }
        ],
        correctAnswers: ['point of view', 'purpose', 'historical situation'],
        hint1: 'A former insider criticizing his own institutions reveals his position.',
        hint2: 'What the treaty was designed to do is its purpose.',
        hint3: 'The timing places the document in its moment.',
        explanation: 'Stiglitz\'s former post reveals his point of view; the treaty\'s design is its purpose; the NAFTA timing is the historical situation of the Zapatista declaration.'
      }
    },
    {
      id: 'whgt6-model',
      type: 'text' as const,
      content: `
## Model SAQ Response

**Prompt:** Identify ONE feature of post-1945 globalization, and explain how it contributed to economic integration.

> **Response:** Containerization, introduced in 1956, standardized cargo so that steel boxes moved straight from ships to trains and trucks. By cutting port handling costs and theft, it made it cheap to ship parts and finished goods across oceans, which allowed firms to build supply chains that ran through Asia and Latin America after 1980.

- **Why it scores:** It names a specific feature with a date, explains the mechanism (lower handling costs), and ties it to the outcome the prompt asks about (integration through supply chains).
      `
    },
    {
      id: 'whgt6-applied',
      type: 'multiple-choice' as const,
      content: `**Applied AP Practice — Sourcing and argument**`,
      exercise: {
        questions: [
          {
            question: 'Which historical situation is most important for sourcing Stiglitz\'s "Globalization and Its Discontents" (2002)?',
            options: [
              'The 1997 Asian crisis he watched as World Bank chief economist and the 1999 Seattle protests',
              'The founding of the IMF at Bretton Woods, which Stiglitz attended as a young delegate in 1944',
              'The 1971 Nixon Shock, which Stiglitz helped to plan as an adviser in the U.S. Treasury',
              'The 1957 Treaty of Rome, which Stiglitz criticized as a European threat to American trade'
            ],
            correctAnswer: 0,
            explanation: 'Stiglitz wrote after watching the IMF\'s handling of the 1997 Asian crisis from inside the World Bank, at a time when the Seattle protests had made criticism of global institutions public. He was not at Bretton Woods, did not plan the Nixon Shock, and was not writing about the Treaty of Rome.'
          },
          {
            question: 'Which statement best complicates a single-cause explanation of the 1997 Asian financial crisis?',
            options: [
              'The crisis was caused entirely by corruption in Thailand, and foreign investors played no part in its spread',
              'Weak banking in the region mattered, but rapid inflows and outflows of short-term foreign money also drove it',
              'The crisis had no connection to foreign investment and was caused only by a drought that ruined rice harvests',
              'The crisis never spread beyond Thailand, so neighboring economies such as South Korea were unaffected'
            ],
            correctAnswer: 1,
            explanation: 'A complexity answer adds causes: weak regional banking and short-term foreign capital that poured in and then fled. The other options rely on a single cause, invent one, or deny the crisis spread.'
          }
        ]
      }
    }
  ]
}
