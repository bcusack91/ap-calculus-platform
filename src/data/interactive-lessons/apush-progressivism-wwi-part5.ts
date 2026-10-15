export const apushProgressivismWwiPart5Data = {
  topicSlug: 'apush-progressivism-wwi',
  sections: [
    {
      id: 'apushpro5-intro',
      type: 'text' as const,
      content: `
# 🇺🇸 Progressivism & World War I

**Part 5 of 7 — Peace, Backlash and Legacy (1918–1920)**

---

| Section |
|---------|
| 📖 Making the Peace in Paris |
| The Treaty Fight in the Senate |
| 1919: Strikes, Bombs and the Red Scare |
| Red Summer and the New Negro |
| 📌 How Historians Explain Progressivism |

> 🔑 **Key Concept:** Victory in 1918 did not bring the peace Wilson promised. Abroad, the Senate refused to join the League of Nations. At home, 1919 brought massive strikes, a Red Scare, deadly racial violence and an economic slump. The election of 1920 showed that many voters were tired of reform and crusades, yet two constitutional amendments of 1919–1920 carried Progressive goals into the new decade (CED Topics 7.5–7.6, 7.8).
      `
    },
    {
      id: 'apushpro5-paris',
      type: 'text' as const,
      content: `
## 📖 Making the Peace in Paris

Wilson went to the Paris Peace Conference in January 1919 himself, the first time a sitting president had traveled to Europe. He brought no senators and no prominent Republicans, even though Republicans had won control of both houses of Congress in the November 1918 elections.

### Wilson's Goals Versus the Results

| Fourteen Points Goal | What the Treaty of Versailles (June 28, 1919) Did |
|---|---|
| A peace without harsh punishment | Article 231 (the "war guilt" clause) blamed Germany, and the Allies later set reparations at 132 billion gold marks |
| **Self-determination** | New nations in Eastern Europe (Poland, Czechoslovakia, Yugoslavia), but Germany's colonies and the Ottoman Empire's Arab lands became "mandates" run by Britain, France, Japan and others |
| Freedom of the seas, open diplomacy | Largely dropped |
| A **League of Nations** | Created as Part I of the treaty |

Wilson accepted compromises because he believed the League could fix the treaty's flaws later. The key promise was in **Article X** of the League's Covenant:

> "The Members of the League undertake to respect and preserve as against external aggression the territorial integrity and existing political independence of all Members of the League."
>
> — Covenant of the League of Nations, Article X, 1919

### Close Reading

| Phrase | Why Senators Objected |
|---|---|
| "undertake to... preserve" | Sounded like a binding promise to act, possibly with troops |
| "as against external aggression" | Could draw the United States into any border war in the world |
| "existing political independence" | Seemed to guarantee the British and French empires as they stood |
| What it leaves out | Any mention of the Constitution's grant of war powers to Congress |
      `
    },
    {
      id: 'apushpro5-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Source Practice: Article X** 🎯

> "The Members of the League undertake to respect and preserve as against external aggression the territorial integrity and existing political independence of all Members of the League."
>
> — Covenant of the League of Nations, Article X, 1919
      `,
      exercise: {
        questions: [
          {
            question: 'Senate critics of the article quoted in the excerpt most often argued that it would',
            options: [
              'force Germany to pay the full cost of the war',
              'bind the nation to wars Congress had not declared',
              'end the Monroe Doctrine and invite Japan into Mexico',
              'require the United States to give up the Philippines'
            ],
            correctAnswer: 1,
            explanation: 'Lodge and others feared that the promise to "preserve" members\' territory could commit American troops without a vote of Congress. Reparations were a separate issue, and the article said nothing about Mexico or the Philippines.'
          },
          {
            question: 'Wilson\'s willingness to accept compromises at Paris is best explained by his belief that',
            options: [
              'Britain and France would soon adopt the Fourteen Points in full',
              'the League of Nations could correct the treaty\'s flaws over time',
              'the Senate would approve any treaty that included reparations',
              'Germany would refuse to sign unless its colonies were returned'
            ],
            correctAnswer: 1,
            explanation: 'Wilson traded away other points to secure the League, which he expected to revise unjust terms later. He knew Britain and France rejected several points, Senate approval was never assured, and Germany signed while losing its colonies.'
          }
        ]
      }
    },
    {
      id: 'apushpro5-senate',
      type: 'text' as const,
      content: `
## The Treaty Fight in the Senate

A treaty needs a **two-thirds vote** of the Senate. In 1919 the Senate had 49 Republicans and 47 Democrats, and senators split into three camps:

| Group | Leaders | Position |
|---|---|---|
| **Irreconcilables** | William Borah, Hiram Johnson, Robert La Follette (about 14–16 senators) | Reject the League in any form |
| **Reservationists** | Henry Cabot Lodge, chair of the Foreign Relations Committee | Approve the treaty with reservations, especially that Congress must authorize any use of force under Article X |
| **Wilson Democrats** | Gilbert Hitchcock | Approve the treaty as written |

### How It Failed

1. **September 1919:** Wilson toured the West to rally public opinion, gave dozens of speeches, and collapsed in Pueblo, Colorado. On October 2 he suffered a severe stroke.
2. **November 19, 1919:** The treaty failed both with Lodge's reservations (Wilson told Democrats to vote no) and without them.
3. **March 19, 1920:** A final vote on the treaty with reservations won 49 to 35, seven votes short of two-thirds.
4. **1921:** Congress ended the war with Germany by joint resolution, and the United States signed a separate peace treaty. It never joined the League.

> 🔑 **AP Connection:** A good causation answer weighs **Lodge's opposition** against **Wilson's refusal to compromise**. Either alone is incomplete: enough Republicans and Democrats supported some form of the League that a compromise could probably have passed.
      `
    },
    {
      id: 'apushpro5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match Each Senate Leader to His Position** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'William Borah of Idaho wanted the Senate to ___',
            options: ['reject the League in any form', 'approve the treaty with reservations', 'approve the treaty as written', 'delay any vote until after 1920']
          },
          {
            label: 'Henry Cabot Lodge of Massachusetts wanted the Senate to ___',
            options: ['reject the League in any form', 'approve the treaty with reservations', 'approve the treaty as written', 'delay any vote until after 1920']
          },
          {
            label: 'Gilbert Hitchcock, leading Wilson\'s supporters, wanted the Senate to ___',
            options: ['reject the League in any form', 'approve the treaty with reservations', 'approve the treaty as written', 'delay any vote until after 1920']
          }
        ],
        correctAnswers: ['reject the League in any form', 'approve the treaty with reservations', 'approve the treaty as written'],
        hint1: 'Borah led the Irreconcilables.',
        hint2: 'Lodge chaired Foreign Relations and wrote fourteen reservations.',
        hint3: 'Wilson told his Democratic allies to accept no changes.',
        explanation: 'Borah\'s Irreconcilables opposed any League membership, Lodge\'s Reservationists wanted conditions such as congressional approval for force under Article X, and Hitchcock\'s Democrats followed Wilson in demanding ratification without changes.'
      }
    },
    {
      id: 'apushpro5-1919',
      type: 'text' as const,
      content: `
## 1919: Strikes, Bombs and the Red Scare

The end of wartime controls released pent-up conflict. Prices had risen by about three-quarters since 1914 (and had roughly doubled by 1920), and about 4 million workers went on strike in 1919.

| Event | Date | What Happened |
|---|---|---|
| **Seattle General Strike** | February 1919 | About 60,000 workers walked out in support of shipyard workers; opponents called it a revolution |
| **Mail bombs** | April–June 1919 | Anarchists mailed and planted bombs, including one that damaged Attorney General A. Mitchell Palmer's house |
| **Boston Police Strike** | September 1919 | Governor Calvin Coolidge broke it and became a national figure |
| **Steel Strike** | September 1919–January 1920 | About 350,000 steelworkers struck for union recognition and lost |
| **Palmer Raids** | November 1919–January 1920 | Federal agents, with young J. Edgar Hoover organizing files, arrested thousands of suspected radicals, often without warrants |
| **Deportations** | December 1919 | The *Buford* carried 249 deportees, including Emma Goldman, to Soviet Russia |

### Why a Red Scare?

- The **Bolshevik Revolution** (November 1917) and the founding of the Communist International (1919) made revolution seem possible.
- Wartime agencies had taught Americans to see dissent as disloyalty.
- Many radicals were immigrants, so the scare fed **nativism**, which led to the immigration quotas of the 1920s.
- The scare faded in 1920 when Palmer's predicted May Day uprising never came.

## Red Summer and the New Negro

Black veterans returned expecting the democracy they had fought for. In the summer and fall of 1919 white mobs attacked Black communities in more than two dozen cities. In **Chicago** (July 1919), a riot that began when a Black teenager drifted toward a whites-only beach left 38 dead and more than 500 injured. In **Elaine, Arkansas** (October 1919), white mobs and soldiers killed Black sharecroppers who had organized a union.

Jamaican-born poet Claude McKay answered with a sonnet that became an anthem of resistance:

> "If we must die, let it not be like hogs
> Hunted and penned in an inglorious spot,
> While round us bark the mad and hungry dogs,
> Making their mock at our accursèd lot."
>
> — Claude McKay, "If We Must Die," *The Liberator*, July 1919

McKay's poem expresses the spirit of the **"New Negro"**: Black Americans, many of them veterans and Great Migration newcomers, who would defend themselves and demand rights. That spirit fed the Harlem Renaissance and Marcus Garvey's movement in the 1920s.

## 📌 How Historians Explain Progressivism

| Historian | Interpretation | Key Point |
|---|---|---|
| Richard Hofstadter, *The Age of Reform* (1955) | **Status anxiety** | Old middle-class elites, losing status to new industrialists and machine politicians, turned to reform |
| Gabriel Kolko, *The Triumph of Conservatism* (1963) | **Corporate liberalism** | Big business often welcomed regulation that stabilized markets and protected it from competition |
| Robert Wiebe, *The Search for Order* (1967) | **Bureaucratic order** | A new middle class of professionals sought order and efficiency in a society of disconnected communities |

Later historians added **women reformers** (who built many welfare programs before they could vote) and the **transatlantic** exchange of ideas with European reformers.

### Common Misconceptions

| Misconception | Better Statement |
|---|---|
| "Progressives were anti-business." | Many businessmen supported regulation; the Federal Reserve and FTC were designed with business input |
| "Reform ended when the war began." | Prohibition (18th Amendment, ratified 1919) and woman suffrage (19th Amendment, ratified 1920) were won during or just after the war |
| "After 1920 the United States withdrew from the world." | It rejected the League but stayed active in trade, loans and naval arms limitation in the 1920s |
| "Progressives expanded rights for everyone." | Many supported segregation, immigration restriction and wartime limits on speech |

> 🔑 **AP Connection:** For **contextualization** in a DBQ about 1919, describe the broader situation before the documents: demobilization, inflation and strikes, the Bolshevik Revolution, the Great Migration and Wilson's battle over the League. On the May 2027 exam the DBQ is 60 minutes including a 15-minute reading period, and the single required LEQ prompt may ask you to evaluate how far the war changed American society.
      `
    },
    {
      id: 'apushpro5-applied',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Practice: 1919** 🎯

> "If we must die, let it not be like hogs
> Hunted and penned in an inglorious spot..."
>
> — Claude McKay, "If We Must Die," July 1919
      `,
      exercise: {
        questions: [
          {
            question: 'McKay\'s poem was most directly a response to which of the following?',
            options: [
              'The Palmer Raids against immigrant radicals',
              'Wartime censorship under the Sedition Act',
              'The Senate\'s rejection of the League of Nations',
              'Mob violence against Black communities in 1919'
            ],
            correctAnswer: 3,
            explanation: 'McKay wrote during the Red Summer, when white mobs attacked Black neighborhoods in Chicago and other cities. The Palmer Raids targeted radicals, the poem is not about censorship, and the League vote came later and concerned foreign policy.'
          },
          {
            question: 'The attitude expressed in the poem most directly contributed to which later development?',
            options: [
              'The growth of the Harlem Renaissance and Black self-assertion',
              'The return of most Great Migration families to the rural South',
              'A Supreme Court ruling that ended segregation in Northern cities',
              'Passage of a federal anti-lynching law by Congress in the 1920s'
            ],
            correctAnswer: 0,
            explanation: 'The "New Negro" spirit of pride and resistance fed the Harlem Renaissance, in which McKay himself was a leading writer. Migration continued rather than reversed, no such Court ruling came, and anti-lynching bills failed in the Senate.'
          },
          {
            question: 'Which of the following best explains why the first Red Scare occurred in 1919–1920?',
            options: [
              'The Communist Party had won several seats in Congress',
              'Soviet troops had landed in Alaska during the war',
              'Strikes and bombings fed fears of Bolshevism',
              'Socialists had organized a general strike in New York'
            ],
            correctAnswer: 2,
            explanation: 'The Bolshevik Revolution, the wave of 1919 strikes and anarchist bombings together convinced many Americans that revolution was near. Communists won no congressional seats, no Soviet troops landed in Alaska, and the general strike of 1919 was in Seattle.'
          }
        ]
      }
    }
  ]
}
