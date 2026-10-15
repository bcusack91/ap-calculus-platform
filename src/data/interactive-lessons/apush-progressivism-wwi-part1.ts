export const apushProgressivismWwiPart1Data = {
  topicSlug: 'apush-progressivism-wwi',
  sections: [
    {
      id: 'apushpro1-intro',
      type: 'text' as const,
      content: `
# 🇺🇸 Progressivism & World War I

**Part 1 of 7 — Reform Era & America's Entry into the Great War**

---

| Section |
|---------|
| 📖 Progressive Reforms |
| Muckrakers & Social Justice |
| Progressive Presidents |
| 📌 World War I: Causes & U.S. Entry |
| The Home Front & Aftermath |

> 🔑 **Key Concept:** Progressivism (1890s–1920s) was a broad reform movement responding to Gilded Age problems — corruption, monopolies, inequality, and unsafe conditions. The AP exam tests specific reforms and their connections to earlier and later movements.
      `
    },
    {
      id: 'apushpro1-reforms',
      type: 'text' as const,
      content: `
## 📖 The Progressive Movement (1890s–1920s)

### Core Progressive Beliefs
- Government should **actively** solve social problems (rejection of laissez-faire)
- Expert knowledge and science can improve society
- Democracy should be expanded to check corporate power
- Middle-class reformers leading change within the existing system

### Key Progressive Reforms

| Reform | What It Did |
|--------|------------|
| **Initiative** | Citizens can propose legislation directly |
| **Referendum** | Citizens vote directly on proposed laws |
| **Recall** | Citizens can remove elected officials before their term ends |
| **17th Amendment** (1913) | Direct election of U.S. Senators (previously chosen by state legislatures) |
| **Secret ballot** | Protected voter privacy, reducing machine control |
| **16th Amendment** (1913) | Federal income tax — gave government revenue for reform programs |
| **18th Amendment** (1919) | Prohibition — banned manufacture and sale of alcohol |
| **19th Amendment** (1920) | Women's suffrage — granted women the right to vote |

### Muckrakers — Journalists Exposing Problems

| Muckraker | Work | Issue Exposed |
|-----------|------|--------------|
| **Upton Sinclair** | *The Jungle* (1906) | Unsanitary conditions in meatpacking → Meat Inspection Act, Pure Food and Drug Act |
| **Ida Tarbell** | *The History of the Standard Oil Company* (1904) | Rockefeller's monopolistic practices → helped break up Standard Oil |
| **Jacob Riis** | *How the Other Half Lives* (1890) | Poverty and slum conditions among immigrants in NYC |
| **Lincoln Steffens** | *The Shame of the Cities* (1904) | Municipal corruption and political machines |
      `
    },
    {
      id: 'apushpro1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Upton Sinclair wrote The Jungle (1906) mainly to expose',
            options: [
              'the corruption of Tammany Hall politicians in New York City',
              'the destruction of forests by lumber companies in the Northwest',
              'the exploitation of immigrant workers in Chicago meatpacking',
              'the labor practices at Carnegie\'s Pennsylvania steel mills'
            ],
            correctAnswer: 2,
            explanation: 'Sinclair, a socialist, wanted readers to sympathize with immigrant packinghouse workers, but the public reacted mostly to his descriptions of contaminated meat, which led to the Meat Inspection Act and the Pure Food and Drug Act in 1906. He later complained that he had aimed at the public\'s heart and hit its stomach instead.'
          },
          {
            question: 'The 17th Amendment (1913) is considered a Progressive reform mainly because',
            options: [
              'it let voters rather than legislatures elect senators',
              'it created a federal tax on incomes to pay for reforms',
              'it banned the manufacture and sale of alcoholic drinks',
              'it gave women the right to vote in all federal elections'
            ],
            correctAnswer: 0,
            explanation: 'Before 1913 state legislatures, often influenced by machines and corporations, chose senators; direct election made the Senate answer to voters. The income tax was the 16th Amendment, Prohibition the 18th and woman suffrage the 19th.'
          }
        ]
      }
    },
    {
      id: 'apushpro1-wwi',
      type: 'text' as const,
      content: `
## Progressive Presidents & World War I

### Progressive Presidents

| President | Key Actions |
|-----------|------------|
| **Theodore Roosevelt** (1901–09) | "Trust-buster" (Northern Securities case); Square Deal; conservation (national parks); Meat Inspection Act; "big stick" foreign policy |
| **William H. Taft** (1909–13) | More antitrust suits than TR; Payne-Aldrich Tariff angered progressives; split with Roosevelt |
| **Woodrow Wilson** (1913–21) | Federal Reserve Act (1913); Clayton Antitrust Act (1914); Federal Trade Commission; led U.S. into WWI |

### World War I: U.S. Entry (1917)

| Factor | Details |
|--------|---------|
| **Neutrality** | Wilson initially kept U.S. out: "He kept us out of war" (1916 campaign) |
| **Submarine warfare** | Germany's unrestricted U-boat attacks sank American merchant ships |
| **Lusitania** (1915) | British passenger liner torpedoed; 1,198 killed including 128 Americans |
| **Zimmermann Telegram** (1917) | German message proposing Mexican-German alliance against U.S.; intercepted by Britain |
| **U.S. enters** | April 1917; Wilson: "The world must be made safe for democracy" |

### The Home Front & Aftermath

- **Espionage Act** (1917) and **Sedition Act** (1918) — restricted free speech; jailed anti-war dissenters (Eugene Debs imprisoned)
- **Great Migration** — African Americans moved from rural South to industrial Northern cities for wartime factory jobs
- **Women** took factory and office jobs; contributed to suffrage momentum → 19th Amendment (1920)
- **Wilson's Fourteen Points** — vision for post-war peace; included self-determination, freedom of the seas, **League of Nations**
- **Treaty of Versailles** — imposed harsh terms on Germany; U.S. Senate **rejected** the treaty; never joined the League of Nations
      `
    },
    {
      id: 'apushpro1-input',
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

1) What intercepted 1917 message revealed Germany's proposal for a military alliance with Mexico against the United States?

2) What term describes the mass movement of African Americans from the rural South to Northern cities in the early 20th century?

3) What international peacekeeping organization did Wilson propose as part of his Fourteen Points?

Use the exact historical term.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['Zimmermann Telegram', 'Great Migration', 'League of Nations'],
        hint1: 'Named after the German Foreign Minister who sent it',
        hint2: 'The ___ Migration — millions moved north for jobs',
        hint3: 'A "League" of ___',
        explanation: 'The Zimmermann Telegram (1917) was the final push for U.S. entry into WWI. The Great Migration (1910s–1970s) transformed American demographics and culture. The League of Nations was established but the U.S. never joined because the Senate (led by Henry Cabot Lodge) rejected the Treaty of Versailles.'
      }
    },
    {
      id: 'apushpro1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Reforms** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'The president known as a "trust-buster" who championed conservation and the Square Deal was ___',
            options: ['Theodore Roosevelt', 'Woodrow Wilson', 'William H. Taft', 'William McKinley']
          },
          {
            label: 'The Progressive reform that allowed citizens to directly propose legislation was the ___',
            options: ['Initiative', 'Referendum', 'Recall', 'Direct primary']
          },
          {
            label: 'The 1913 act that created the U.S. central banking system was the ___',
            options: ['Federal Reserve Act', 'Sherman Antitrust Act', 'Interstate Commerce Act', 'Clayton Act']
          }
        ],
        correctAnswers: ['Theodore Roosevelt', 'Initiative', 'Federal Reserve Act'],
        hint1: 'Filed suit against Northern Securities; established national parks',
        hint2: 'Citizens "initiate" new laws rather than waiting for legislators',
        hint3: 'Created the "Fed" — still the central bank today',
        explanation: 'TR used executive power aggressively to regulate business and protect natural resources. The initiative gave citizens direct legislative power, while the referendum let them vote on laws, the recall let them remove officials, and the direct primary let them choose party nominees. The Federal Reserve Act (1913) created the central banking system that still manages U.S. monetary policy.'
      }
    },
    {
      id: 'apushpro1-applied',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following best explains why the Senate refused to ratify the Treaty of Versailles?',
            options: [
              'Anger that the treaty was too lenient toward defeated Germany',
              'Wilson\'s refusal to submit the treaty to the Senate at all',
              'Public demand that the nation leave all European affairs',
              'Fear that Article X would commit troops without a vote of Congress'
            ],
            correctAnswer: 3,
            explanation: 'Henry Cabot Lodge and the Reservationists objected that Article X of the League Covenant could commit the nation to war without congressional approval, and Wilson refused to accept their reservations, so no version won two-thirds. Senators did not want harsher terms, Wilson did submit the treaty, and many Americans supported some form of the League.'
          },
          {
            question: 'The Espionage Act (1917) and Sedition Act (1918) are best understood as evidence that',
            options: [
              'First Amendment protections had always been treated as absolute',
              'wartime fears led the government to limit criticism of its policies',
              'Progressive reformers consistently defended the rights of dissenters',
              'the war had little effect on civil liberties inside the country'
            ],
            correctAnswer: 1,
            explanation: 'The acts made obstructing the war and "disloyal" speech crimes, leading to about 2,000 prosecutions, including that of Eugene Debs. The same tension between security and liberty appears in the Alien and Sedition Acts (1798), the Civil War, the McCarthy era and after 9/11.'
          }
        ]
      }
    }
  ]
}
