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
- The Great Depression created the political space for Hitler's election (1933) and Japanese militarist control.

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
              'Versailles had no meaningful effect on later European politics, German political development, or the rise of interwar nationalism',
              'Versailles created the grievances that Hitler exploited, but the Depression and the failure of collective security were equally necessary causes',
              'WWII was caused entirely by Soviet aggression following the Molotov-Ribbentrop Pact and the invasion of eastern Poland in 1939',
              'WWII was caused entirely by U.S. isolationism and the Senate refusal to ratify the Treaty of Versailles in March 1919'
            ],
            correctAnswer: 1,
            explanation: 'AP scoring rewards qualification and multi-causal reasoning rather than monocausal blame.'
          },
          {
            question: 'For an SAQ on WWI propaganda, which response move is most effective?',
            options: [
              'Make a generic claim about the emotional power of wartime communication without naming any specific poster or campaign',
              'Identify a specific poster or campaign (e.g., the British "Lord Kitchener Wants You" poster) and explain how it served state recruitment goals',
              'List as many participating countries and propaganda agencies as possible without explaining audience or rhetorical purpose',
              'Avoid discussing audience, message, or rhetorical purpose to keep the response analytically neutral and balanced overall'
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
              'The 1918 Armistice text signed at Compiegne, paired with the formal abdication letter of Kaiser Wilhelm II',
              'The 1914 Austrian ultimatum to Serbia, paired with the alliance treaties of the Triple Entente and Triple Alliance',
              'A 1945 atomic test report from the Trinity site in the New Mexico desert and the Potsdam Declaration',
              'A 1919 League of Nations Covenant draft and the Wilson Fourteen Points address to the U.S. Congress'
            ],
            correctAnswer: 1,
            explanation: 'AP source analysis pairs immediate (ultimatum) and structural (alliances) evidence to explain causation.'
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
            options: ['historical reasoning that links it to political consequence', 'more dates only', 'less precision', 'no context']
          },
          {
            label: 'A claim supported by one specific named source plus explanation is: ___',
            options: ['AP-effective', 'too narrow by definition', 'invalid by default', 'never used in DBQs']
          },
          {
            label: 'Comparing WWI and WWII propaganda should emphasize: ___',
            options: ['shared mobilization purpose with different ideological framing', 'identical messages in both wars', 'only artistic style', 'no useful comparison']
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
              'The League successfully prevented all major interwar conflicts and acts of military aggression for the entire interwar period',
              'The League represented an unprecedented attempt at collective security but lacked enforcement power, as shown by its failure to stop Japan in Manchuria (1931) or Italy in Ethiopia (1935)',
              'The League had no historical relevance to the interwar period and was disbanded immediately after its founding meeting in 1920',
              'The League was created in 1945 by the Allies after WWII to manage postwar reconstruction and decolonization across Europe and Asia'
            ],
            correctAnswer: 1,
            explanation: 'Strong contextualization places the source in its institutional context and uses specific failures to refine its claim.'
          },
          {
            question: 'Which sentence best explains the significance of citing the Atlantic Charter (1941) in an essay on the postwar order?',
            options: [
              'It demonstrates that Allied war aims included self-determination, which provided rhetorical leverage for postwar decolonization movements in Asia and Africa',
              'It has no relation to decolonization or to the political development of colonial territories during the postwar period',
              'It proves that the war was about restoring 18th-century absolute monarchies across continental Europe through Allied diplomacy',
              'It eliminated all imperial holdings immediately upon its signing in August 1941 by Roosevelt and Churchill aboard a warship'
            ],
            correctAnswer: 0,
            explanation: 'Strong significance statements connect a specific document to a broader analytical claim about postwar political possibilities.'
          }
        ]
      }
    }
  ]
}
