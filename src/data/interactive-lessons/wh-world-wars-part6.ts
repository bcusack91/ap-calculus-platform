export const whWorldWarsPart6Data = {
  topicSlug: 'wh-world-wars',
  sections: [
    {
      id: 'whww6-intro',
      type: 'text' as const,
      content: `
# Causes & Conduct of the World Wars (c. 1900-1945)

**Part 6 of 7 - Problem-Solving Workshop**

Use evidence the way an AP reader expects: identify the source claim, contextualize it, and explain why it matters.
      `
    },
    {
      id: 'whww6-content',
      type: 'text' as const,
      content: `
## Skills Lab: From Evidence to Argument

> **Step 1: Identify the Source Claim**

- **Example claim:** "The Treaty of Versailles caused WWII."
- This is a familiar but oversimplified statement. Strong AP work refines, qualifies, or extends it.

> **Step 2: Add Specific Evidence**

- The "war guilt clause" (Article 231) and 132 billion gold marks in reparations created lasting German political grievance.
- The Dawes Plan (1924) and Young Plan (1929) tied German recovery to U.S. credit, which collapsed in 1929.
- The League of Nations failed to stop Japan in Manchuria (1931), Italy in Ethiopia (1935), and Germany's Rhineland remilitarization (1936).
- The Great Depression created the political space for Hitler's rise (the Nazis became the largest party in the Reichstag in 1932, and he was appointed chancellor in January 1933) and for Japanese militarist control.

> **Step 3: Refine the Argument**

- **Better claim:** Versailles created the political grievances that Hitler exploited, but it was the Depression and the failure of collective security — not the treaty alone — that turned grievance into war.

> **Step 4: Explain Significance**

- This refined argument shows multi-causal reasoning, names the institutions involved, and avoids monocausal blame.
- It maps onto the AP rubric for complex argumentation (multiple factors, qualification, specific evidence).

> **Working with Visual and Documentary Sources**

- **Propaganda posters:** Identify the audience, the desired action (enlist, ration, work), and the rhetorical techniques (heroic imagery, demonization of the enemy).
- **Treaty texts:** Read for territorial provisions, financial obligations, and security guarantees.
- **Memoirs and letters:** Identify the author's role (soldier, civilian, leader), perspective, and likely audience.

> **AP Skills Anchor**

- **Quick DBQ/SAQ tip:** Always tie a piece of evidence to a specific claim. "The Treaty of Versailles imposed reparations" is a fact. "Versailles reparations contributed to political instability that radicalized German politics in the 1930s" is an argument.
      `
    },
    {
      id: 'whww6-quiz',
      type: 'multiple-choice' as const,
      content: `
**Evidence Check**
      `,
      exercise: {
        questions: [
          {
            question: 'Which is the strongest refinement of the claim that "Versailles caused WWII"?',
            options: [
              'Versailles was the sole cause, because its reparations alone produced the inflation that brought Hitler to power',
              'Versailles created grievances Hitler exploited, but the Depression and failed collective security were also necessary causes',
              'Versailles mattered little, since Soviet aggression after the Nazi-Soviet Pact turned a regional crisis into WWII',
              'Versailles mattered little, since U.S. isolationism after the Senate rejected the treaty left Europe unable to resist'
            ],
            correctAnswer: 1,
            explanation: 'AP scoring rewards qualification and multi-causal reasoning rather than monocausal blame. German hyperinflation peaked in 1923, a decade before Hitler took power during the Depression.'
          },
          {
            question: 'For an SAQ on WWI propaganda, which response move is most effective?',
            options: [
              'Make a general claim about the emotional power of wartime posters without naming a specific example',
              'Identify a specific poster, such as Britain\'s "Lord Kitchener Wants You," and explain how it served recruitment',
              'List as many agencies, countries, and slogans as possible, then summarize the war\'s main battles',
              'Describe a specific poster\'s colors and images in close detail without connecting them to state recruitment goals'
            ],
            correctAnswer: 1,
            explanation: 'AP scoring rewards precise sourced evidence (specific poster) tied to explicit reasoning (recruitment, mobilization).'
          }
        ]
      }
    },
    {
      id: 'whww6-input',
      type: 'multiple-choice' as const,
      content: `
**Applied Recall: 3-Question Sprint**
      `,
      exercise: {
        questions: [
          {
            question: 'Which is the strongest documentary evidence of WWI causation?',
            options: [
              'The 1918 Armistice signed at Compiegne, paired with the abdication statement of Kaiser Wilhelm II',
              'The 1914 Austrian ultimatum to Serbia, paired with the prewar alliance treaties',
              'The 1919 League of Nations Covenant, paired with Wilson\'s Fourteen Points address to Congress',
              'The 1917 Zimmermann Telegram, paired with Germany\'s resumption of unrestricted submarine warfare'
            ],
            correctAnswer: 1,
            explanation: 'AP source analysis pairs immediate (ultimatum) and structural (alliances) evidence to explain causation. The Zimmermann Telegram explains U.S. entry in 1917, not the war\'s outbreak, and the other pairs date from the war\'s end.'
          },
          {
            question: 'Which is the strongest documentary evidence for analyzing WWII Allied war aims?',
            options: ['The Treaty of Versailles (1919)', 'The Atlantic Charter (1941)', 'The League of Nations Covenant (1920)', 'The Locarno Treaties (1925)'],
            correctAnswer: 1,
            explanation: 'The Atlantic Charter (Aug 1941) explicitly stated Allied war aims including self-determination and free trade.'
          },
          {
            question: 'Which analytical phrase best links propaganda posters to total war?',
            options: [
              'State morale management',
              'Civic religious revival',
              'Voluntary cultural exchange',
              'Private commercial advertising'
            ],
            correctAnswer: 0,
            explanation: 'Propaganda functioned as state morale management — a core feature of total war mobilization.'
          }
        ]
      }
    },
    {
      id: 'whww6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Idea: Source to Reasoning Move**

Select the strongest reasoning move, then explain how it improves AP scoring.
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Turning a fact about reparations into an argument requires adding: ___',
            options: ['historical reasoning that links it to political consequence', 'a fuller list of the exact reparations totals and payment dates', 'a longer quotation from the treaty\'s reparations clause', 'a summary of the treaty\'s other territorial terms']
          },
          {
            label: 'A claim supported by one specific named source plus explanation is: ___',
            options: ['AP-effective', 'insufficient', 'off-task', 'overgeneralized']
          },
          {
            label: 'Comparing WWI and WWII propaganda should emphasize: ___',
            options: ['shared mobilization purpose with different ideological framing', 'differences in the colors, fonts, and artistic techniques of posters', 'the total number of posters each government printed', 'the names of the artists who designed the posters']
          }
        ],
        correctAnswers: ['historical reasoning that links it to political consequence', 'AP-effective', 'shared mobilization purpose with different ideological framing'],
        hint1: 'Move from fact to argument with causation language.',
        hint2: 'Specific named evidence plus explanation beats vague detail.',
        hint3: 'Both used propaganda; WWII added explicit fascist/anti-fascist framing.',
        explanation: 'High-scoring AP responses combine sourced evidence, explicit reasoning, and clear comparative or causal linkage.'
      }
    },
    {
      id: 'whww6-applied',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Source Use**
      `,
      exercise: {
        questions: [
          {
            question: 'A document praises the League of Nations as a guarantor of peace. Which contextualization is strongest?',
            options: [
              'The League kept the peace through the 1930s, as its sanctions forced Japan to withdraw from Manchuria in 1933',
              'The League pioneered collective security but lacked enforcement, failing to stop Japan in Manchuria or Italy in Ethiopia',
              'The League was dominated by the United States, which used it to enforce the Fourteen Points across Europe between 1920 and 1939',
              'The League was founded after WWII in 1945 to manage reconstruction and decolonization across Europe, Africa, and Asia'
            ],
            correctAnswer: 1,
            explanation: 'Strong contextualization places the source in its institutional context and uses specific failures — Manchuria (1931) and Ethiopia (1935) — to refine its claim. Japan left the League in 1933 rather than leave Manchuria, the U.S. never joined, and the League was founded in 1920.'
          },
          {
            question: 'Which sentence best explains the significance of citing the Atlantic Charter (1941) in an essay on the postwar order?',
            options: [
              'It shows Allied war aims included self-determination, giving later decolonization movements leverage',
              'It shows the Allies planned to keep their empires, since Churchill insisted the charter applied to all colonies',
              'It shows the U.S. had already entered the war, since the charter served as a formal military alliance',
              'It shows the charter ended imperial rule at once, as Britain and France freed their colonies upon signing'
            ],
            correctAnswer: 0,
            explanation: 'Strong significance statements connect a specific document to a broader analytical claim about postwar political possibilities. Churchill in fact argued the charter applied to Nazi-occupied Europe rather than the British Empire, and the U.S. was still neutral in August 1941.'
          }
        ]
      }
    }
  ]
}
