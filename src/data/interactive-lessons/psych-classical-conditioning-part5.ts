export const psychClassicalPart5Data = {
  topicSlug: 'classical-conditioning',
  sections: [
    {
      id: 'class5-s1-intro',
      type: 'text' as const,
      content: `
      # 🧠 Classical Conditioning

      **Part 5 of 7 — Applications**

      Classical conditioning isn't just a lab phenomenon — it explains phobias, taste aversions, advertising strategies, and therapeutic techniques. Understanding real-world applications is critical for AP free-response questions.

      ### Core Definitions
      - **phobias**: intense, irrational fears that can be learned through classical conditioning
      - **taste aversion (Garcia effect)**: a conditioned dislike of a food associated with illness, often learned in a single trial
      - **systematic desensitization**: a therapeutic technique that uses counterconditioning to reduce phobias by pairing relaxation with feared stimuli
      - **counterconditioning**: pairing a CS that triggers an unwanted response with a new UCS that triggers a competing response

      ### Concrete Real-World Example
      A person who got food poisoning from sushi (UCS → nausea UCR) develops an aversion to sushi (CS → nausea CR). Remarkably, this happened after just one pairing — and the nausea occurred hours after eating. This violates the usual rule that CS-UCS pairings must be close in time.

      ### Why This Matters
      Taste aversion and biological preparedness are frequently tested on the AP exam because they show the biological limits of conditioning — not all associations are equally easy to learn.
      `
    },
    {
      id: 'class5-s2-check',
      type: 'multiple-choice' as const,
      content: `
      **Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Garcia and Koelling found that rats easily learned to associate taste (but not lights/sounds) with nausea. This finding is significant because it shows:',
            options: [
              'biological preparedness — organisms are predisposed to associate certain stimuli more easily than others',
              'stimulus generalization — rats respond to all stimuli equally',
              'extinction — the taste aversion faded over time',
              'higher-order conditioning — taste was paired with another CS'
            ],
            correctAnswer: 0,
            explanation: 'Garcia\'s research demonstrated biological preparedness: animals are evolutionarily predisposed to associate certain CS-UCS pairings (taste-nausea) more easily than others (light-nausea). This challenged the behaviorist assumption that any stimulus could be equally conditioned.'
          },
          {
            question: 'A therapist treats a client\'s dog phobia by teaching the client deep relaxation, then gradually presenting images of increasingly threatening dogs while maintaining relaxation. This technique is:',
            options: [
              'systematic desensitization — pairing relaxation with the feared stimulus to replace fear',
              'flooding — immediate full exposure to the feared stimulus',
              'aversion therapy — pairing an unpleasant stimulus with an unwanted behavior',
              'extinction — simply removing the UCS'
            ],
            correctAnswer: 0,
            explanation: 'Systematic desensitization uses counterconditioning: the therapist replaces the fear response (CR) with a relaxation response by gradually pairing the feared object (CS) with deep relaxation (new UCS). The key elements: relaxation training + gradual exposure (anxiety hierarchy).'
          }
        ]
      }
    },
    {
      id: 'class5-s3-deep',
      type: 'text' as const,
      content: `
      ## Deep Dive: Classical Conditioning in the Real World

      | Application | How It Works | CS | UCS | CR |
      |---|---|---|---|---|
      | Phobias | Fear conditioned to a neutral object | Spider, heights, etc. | Traumatic experience | Fear/anxiety |
      | Taste aversion | Food associated with illness | Specific food | Nausea/illness | Disgust/avoidance |
      | Advertising | Product paired with pleasant stimuli | Product/brand | Attractive model, music | Positive feelings |
      | Drug tolerance | Environmental cues predict drug effects | Room, needle, people | Drug effects | Compensatory response |
      | Immune conditioning | Flavor paired with immune suppression | Novel flavor | Immunosuppressant drug | Immune suppression |

      ### Systematic Desensitization: Step by Step

      | Step | Description | Example |
      |---|---|---|
      | 1. Relaxation training | Learn deep breathing, progressive muscle relaxation | Practice daily for a week |
      | 2. Build anxiety hierarchy | Rank feared situations from least to most anxiety-provoking | 1) Photo of spider → 10) Holding a spider |
      | 3. Gradual exposure | Pair each level with relaxation, moving up only when calm | View photo while deeply relaxed |
      | 4. Result | Relaxation replaces fear (counterconditioning) | Client can encounter spiders without panic |

      ### Taste Aversion: Why It Breaks the Rules

      | Typical Conditioning Rule | How Taste Aversion Violates It |
      |---|---|
      | CS-UCS must be paired many times | Taste aversion often forms in ONE trial |
      | CS-UCS must be close in time | Nausea can occur HOURS after eating |
      | Any CS can be paired with any UCS | Taste (not lights/sounds) associates with nausea |
      `
    },
    {
      id: 'class5-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Applied Recall (exact term answers)** ✍️

      1) What therapeutic technique pairs relaxation with a feared stimulus to reduce phobias?

      2) What is the term for a conditioned food aversion that often occurs after a single pairing? (two-word answer)

      3) What process involves pairing a CS with a new UCS to replace the original CR with a different response?

      Use the exact vocabulary term from this part.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['systematic desensitization', 'taste aversion', 'counterconditioning'],
        hint1: 'Two words, starts with: S D',
        hint2: 'Two words, starts with: T A',
        hint3: 'Starts with: C',
        explanation: 'Expected answers: systematic desensitization (gradual exposure + relaxation), taste aversion (one-trial food-illness learning), and counterconditioning (replacing one CR with another by pairing CS with a new UCS).'
      }
    },
    {
      id: 'class5-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Model Matching** 🔎
      `,
      exercise: {
        dropdowns: [
          {
            label: 'A car commercial pairs the car with an attractive setting and exciting music. This uses:',
            options: ['operant conditioning', 'classical conditioning in advertising', 'observational learning', 'cognitive restructuring']
          },
          {
            label: 'Taste aversion can form after just one CS-UCS pairing. This is called:',
            options: ['multi-trial learning', 'one-trial learning', 'systematic desensitization', 'higher-order conditioning']
          },
          {
            label: 'Garcia found that rats associate taste (but not light) with nausea, demonstrating:',
            options: ['stimulus generalization', 'biological preparedness', 'extinction', 'spontaneous recovery']
          }
        ],
        correctAnswers: ['classical conditioning in advertising', 'one-trial learning', 'biological preparedness'],
        hint1: 'Advertisers pair products (NS) with stimuli that already trigger positive emotions (UCS).',
        hint2: 'Unlike most conditioning, taste aversion doesn\'t require many repeated pairings.',
        hint3: 'Evolution predisposes organisms to form certain associations more easily.',
        explanation: 'Advertising uses classical conditioning by pairing products with pleasant stimuli. Taste aversion is one-trial learning. Garcia\'s finding demonstrated biological preparedness — not all CS-UCS pairings are equally easy to learn.'
      }
    },
    {
      id: 'class5-s6-strategy',
      type: 'text' as const,
      content: `
      ## Common Misconceptions and Exam Strategy

      ### Misconceptions to Avoid
      - Systematic desensitization is NOT flooding — desensitization is gradual; flooding involves immediate, intense exposure.
      - Taste aversion is NOT the same as a food preference — it's a conditioned avoidance based on illness, not just dislike.
      - Counterconditioning doesn't erase the original association — it creates a new, competing response.
      - Not all phobias are classically conditioned — some develop through observational learning or even language (being told something is dangerous).

      ### AP Strategy Moves
      - Taste aversion questions often focus on what makes it UNIQUE: one-trial learning, long CS-UCS delay, and biological preparedness.
      - Know the difference between systematic desensitization (gradual + relaxation) and flooding (immediate full exposure).
      - Advertising questions: identify the product as the NS/CS and the pleasant imagery as the UCS.
      - Be ready to explain why Garcia's research challenged strict behaviorism (not all associations are equally learnable).
      `
    },
    {
      id: 'class5-s7-applied',
      type: 'multiple-choice' as const,
      content: `
      **Applied Scenarios** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'After receiving chemotherapy (which causes nausea), a cancer patient develops a strong aversion to the food eaten before treatment. The patient still feels nauseated 6 months later when smelling that food. This illustrates:',
            options: [
              'taste aversion — the food (CS) was associated with nausea (UCR from chemo) in one or few pairings',
              'operant conditioning — the patient is being punished for eating',
              'extinction — the response should have faded by now',
              'stimulus discrimination — the patient only avoids that one food'
            ],
            correctAnswer: 0,
            explanation: 'This is a real-world taste aversion: the food (CS) was paired with chemotherapy-induced nausea (UCS → UCR). Taste aversions are remarkably persistent and can form in just one trial, even with a long delay between eating and nausea.'
          },
          {
            question: 'A beer company shows its commercials during exciting sporting events with attractive people and celebration. The company is hoping that consumers will:',
            options: [
              'develop a conditioned positive response to the beer brand through association',
              'learn through operant conditioning that buying beer leads to rewards',
              'observe and imitate the behavior of the people in the commercial',
              'generalize their excitement about sports to all beverages'
            ],
            correctAnswer: 0,
            explanation: 'This is classical conditioning in advertising: the beer (CS/neutral product) is paired with excitement, attractiveness, and celebration (UCS that naturally triggers positive feelings). The goal is for consumers to have a conditioned positive response (CR) to the brand.'
          }
        ]
      }
    }
  ]
}
