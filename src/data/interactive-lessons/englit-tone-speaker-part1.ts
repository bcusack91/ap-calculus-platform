export const englitToneSpeakerPart1Data = {
  topicSlug: "englit-tone-speaker",
  sections: [
    {
      id: "englitto1-intro",
      type: 'text' as const,
      content: "# 🗣️ Tone and Speaker\n\n**Part 1 of 7 - Core Concepts, Analysis Skills, and AP Lit Application**\n\n---\n\n## Why Tone and Speaker Matters\n\nTone and speaker analysis helps explain how texts move readers emotionally and intellectually.\n\n| Core Concept | What To Notice | Why It Matters |\n|---|---|---|\n| **Tone** | Attitude conveyed through language | Tone signals emotional and conceptual stance |\n| **Speaker Position** | Speaker relationship to subject/audience | Position influences authority and bias |\n| **Shift** | Change in tone or stance | Shifts mark development in meaning |\n\n> AP Lit rewards interpretation supported by textual evidence, not plot summary."
    },
    {
      id: "englitto1-quiz1",
      type: 'multiple-choice' as const,
      content: "**Concept Check**",
      exercise: {
      "questions": [
            {
                  "question": "Which statement best reflects the role of Tone in literary analysis?",
                  "options": [
                        "Tone is the emotion the reader feels while reading the passage.",
                        "Tone is the speaker's attitude toward subject or audience, conveyed by language choices.",
                        "Tone is set in the opening lines and stays the same throughout.",
                        "Tone is the subject or topic that a poem or passage discusses."
                  ],
                  "correctAnswer": 1,
                  "explanation": "Tone is the speaker's or narrator's attitude toward the subject or audience, built through diction, syntax and imagery. The reader's emotional response is mood, tone can shift within a passage (and shifts are often key evidence), and the topic is the subject rather than the attitude toward it."
            },
            {
                  "question": "What is usually the strongest AP Lit analytical move?",
                  "options": [
                        "Retell the passage's events closely and in the exact order they occur",
                        "Identify each device and define the term so the reader knows what it means",
                        "Connect textual details to a defensible interpretation about meaning",
                        "Explain how the passage reflects the beliefs of the time period it comes from"
                  ],
                  "correctAnswer": 2,
                  "explanation": "AP Lit scoring rewards a defensible claim supported by evidence and commentary. Close retelling, device definitions and period beliefs earn credit only when they are tied to an interpretation of meaning."
            }
      ]
}
    },
    {
      id: "englitto1-content",
      type: 'text' as const,
      content: "## Building Interpretation in Tone and Speaker\n\n### Analytical Workflow\n1. Identify a pattern in language, structure, or characterization\n2. Explain how that pattern shapes tone, perspective, or tension\n3. Connect the pattern to a broader thematic claim\n\n| Strong Commentary Move | Example Frame |\n|---|---|\n| Pattern + meaning | \"By emphasizing speaker position, the text suggests...\" |\n| Tension or contrast | \"Although the speaker appears X, shift reveals...\" |\n| Form and effect | \"This structural choice shifts the reader from...to...\" |\n\n### Common Pitfalls\n- Device listing without explanation\n- Theme statements with no textual support\n- Summary replacing analysis\n- Overly absolute claims that ignore complexity\n\nStrong commentary identifies where tone shifts and links those turns to larger interpretive claims."
    },
    {
      id: "englitto1-input",
      type: 'input-boxes' as const,
      content: "**Vocabulary Recall**\\n\\n1) Term A: _______\\n\\n2) Term B: _______\\n\\n3) Term C: _______",
      exercise: {
      "boxes": 3,
      "correctAnswers": [
            "tone",
            "speaker position",
            "shift"
      ],
      "hint1": "Concept 1: Tone",
      "hint2": "Concept 2: Speaker Position",
      "hint3": "Concept 3: Shift",
      "explanation": "Tone, Speaker Position, and Shift are core vocabulary for this unit."
}
    },
    {
      id: "englitto1-dropdown",
      type: 'dropdown-select' as const,
      content: "**Apply the Concept**",
      exercise: {
      "dropdowns": [
            {
                  "label": "Tone in analysis usually refers to ___",
                  "options": [
                        "The attitude conveyed through diction and syntax",
                        "The emotion the reader feels while reading",
                        "The subject or topic the passage addresses",
                        "The genre the passage belongs to, such as elegy"
                  ]
            },
            {
                  "label": "The best AP paragraph usually includes ___",
                  "options": [
                        "Claim, evidence, and commentary",
                        "Quotation, summary, and paraphrase",
                        "Thesis, devices, and conclusion",
                        "Context, plot, and a quotation"
                  ]
            },
            {
                  "label": "A defensible interpretation should be ___",
                  "options": [
                        "Text-supported and specific",
                        "Grounded in the author's biography",
                        "Cautious enough to avoid a claim",
                        "Obvious and agreed on by all"
                  ]
            }
      ],
      "correctAnswers": [
            "The attitude conveyed through diction and syntax",
            "Claim, evidence, and commentary",
            "Text-supported and specific"
      ],
      "hint1": "Think how tone functions in meaning-making.",
      "hint2": "Interpretation must be supported.",
      "hint3": "Specific textual support is key.",
      "explanation": "Strong AP analysis treats tone as an interpretive tool, then develops claims through evidence and commentary."
}
    },
    {
      id: "englitto1-strategy",
      type: 'text' as const,
      content: "## AP Exam Strategy: Tone and Speaker\n\n- Start with a claim about how tone or speaker position shapes meaning\n- Use short quotations and explain them in context\n- Track contrast, shifts, and patterns across the whole passage\n- Avoid pure summary; prioritize interpretation\n- Qualify claims when text is ambiguous\n- Use precise tone vocabulary and show how shifts alter interpretation."
    },
    {
      id: "englitto1-applied",
      type: 'multiple-choice' as const,
      content: "**AP-Style Application**",
      exercise: {
      "questions": [
            {
                  "question": "A student identifies speaker position in a passage but does not explain effect. What is the best revision?",
                  "options": [
                        "Describe where the speaker is physically positioned within the scene",
                        "Explain how speaker position shapes tone or theme in that moment",
                        "Explain who the speaker is talking to",
                        "Quote another line spoken by the speaker"
                  ],
                  "correctAnswer": 1,
                  "explanation": "The paragraph identifies the speaker's position but never explains its effect. Explaining how that position shapes tone or theme supplies the commentary. The speaker's physical location, the listener's identity or another quotation still leaves the effect unexplained."
            },
            {
                  "question": "Which thesis move is strongest for AP Lit?",
                  "options": [
                        "Identify where the tone changes and name the tone before and after",
                        "Advance a specific, defensible claim about how the tonal shift contributes to meaning",
                        "Claim that the passage moves from sad to happy, so its tone is positive",
                        "Summarize the passage and then mention that the speaker's feelings change at one point"
                  ],
                  "correctAnswer": 1,
                  "explanation": "A strong thesis makes a specific, arguable claim about how a choice in the text, here a tonal shift, creates meaning. Locating and naming the tones, labeling the overall tone positive or noting that feelings change describes the shift without arguing what it does."
            }
      ]
}
    }
  ]
};
