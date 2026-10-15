export const englitPoetry1Part1Data = {
  topicSlug: "englit-poetry-1",
  sections: [
    {
      id: "englitpo1-intro",
      type: 'text' as const,
      content: "# 🌿 Poetry Analysis I\n\n**Part 1 of 7 - Core Concepts, Analysis Skills, and AP Lit Application**\n\n---\n\n## Why Poetry Analysis I Matters\n\nPoetry analysis begins with close attention to voice and language patterns, not paraphrase.\n\n| Core Concept | What To Notice | Why It Matters |\n|---|---|---|\n| **Speaker** | Constructed voice in the poem | Speaker position shapes meaning |\n| **Tone** | Attitude toward subject or audience | Tone movement reveals argument development |\n| **Imagery** | Sensory language and detail clusters | Imagery patterns support thematic claims |\n\n> AP Lit rewards interpretation supported by textual evidence, not plot summary."
    },
    {
      id: "englitpo1-quiz1",
      type: 'multiple-choice' as const,
      content: "**Concept Check**",
      exercise: {
      "questions": [
            {
                  "question": "Which statement best reflects the role of Speaker in literary analysis?",
                  "options": [
                        "The speaker is the poet, describing his or her own experience directly.",
                        "The speaker is a textual persona that may differ from the poet.",
                        "The speaker is whoever the poem is addressed to, its implied listener.",
                        "The speaker exists only in narrative poems that tell a story."
                  ],
                  "correctAnswer": 1,
                  "explanation": "The speaker is the voice the poem constructs, a persona that may or may not match the poet. Equating speaker and poet is the classic error, the addressee is the person spoken to rather than the voice speaking, and every poem, lyric or narrative, has a speaker."
            },
            {
                  "question": "What is usually the strongest AP Lit analytical move?",
                  "options": [
                        "Summarize what the passage says, line by line",
                        "Identify each device and quote the line where it appears",
                        "Connect textual details to a defensible interpretation about meaning",
                        "Explain how the passage reflects the author's personal life and historical era"
                  ],
                  "correctAnswer": 2,
                  "explanation": "AP Lit scoring rewards a defensible claim supported by evidence and commentary. Line-by-line summary, device spotting and biographical or historical background earn credit only when they are tied to an interpretation of meaning."
            }
      ]
}
    },
    {
      id: "englitpo1-content",
      type: 'text' as const,
      content: "## Building Interpretation in Poetry Analysis I\n\n### Analytical Workflow\n1. Identify a pattern in language, structure, or characterization\n2. Explain how that pattern shapes tone, perspective, or tension\n3. Connect the pattern to a broader thematic claim\n\n| Strong Commentary Move | Example Frame |\n|---|---|\n| Pattern + meaning | \"By emphasizing tone, the text suggests...\" |\n| Tension or contrast | \"Although the speaker appears X, imagery reveals...\" |\n| Form and effect | \"This structural choice shifts the reader from...to...\" |\n\n### Common Pitfalls\n- Device listing without explanation\n- Theme statements with no textual support\n- Summary replacing analysis\n- Overly absolute claims that ignore complexity\n\nStrong interpretations track tonal movement and image clusters across the poem."
    },
    {
      id: "englitpo1-input",
      type: 'input-boxes' as const,
      content: "**Vocabulary Recall**\\n\\n1) Term A: _______\\n\\n2) Term B: _______\\n\\n3) Term C: _______",
      exercise: {
      "boxes": 3,
      "correctAnswers": [
            "speaker",
            "tone",
            "imagery"
      ],
      "hint1": "Concept 1: Speaker",
      "hint2": "Concept 2: Tone",
      "hint3": "Concept 3: Imagery",
      "explanation": "Speaker, Tone, and Imagery are core vocabulary for this unit."
}
    },
    {
      id: "englitpo1-dropdown",
      type: 'dropdown-select' as const,
      content: "**Apply the Concept**",
      exercise: {
      "dropdowns": [
            {
                  "label": "Speaker in analysis usually refers to ___",
                  "options": [
                        "The poem's internal voice or persona",
                        "The poet speaking about personal experience",
                        "The person the poem is addressed to",
                        "The narrator of a poem that tells a story"
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
            "The poem's internal voice or persona",
            "Claim, evidence, and commentary",
            "Text-supported and specific"
      ],
      "hint1": "Think how speaker functions in meaning-making.",
      "hint2": "Interpretation must be supported.",
      "hint3": "Specific textual support is key.",
      "explanation": "Strong AP analysis treats speaker as an interpretive tool, then develops claims through evidence and commentary."
}
    },
    {
      id: "englitpo1-strategy",
      type: 'text' as const,
      content: "## AP Exam Strategy: Poetry Analysis I\n\n- Start with a claim about how speaker or tone shapes meaning\n- Use short quotations and explain them in context\n- Track contrast, shifts, and patterns across the whole passage\n- Avoid pure summary; prioritize interpretation\n- Qualify claims when text is ambiguous\n- Map tone changes and connect them to shifts in imagery and claim."
    },
    {
      id: "englitpo1-applied",
      type: 'multiple-choice' as const,
      content: "**AP-Style Application**",
      exercise: {
      "questions": [
            {
                  "question": "A student identifies tone in a passage but does not explain effect. What is the best revision?",
                  "options": [
                        "Add a second quotation that shows the same tone later in the poem",
                        "Explain how the tone shapes meaning or theme in that moment",
                        "Explain what the poem is about before turning to the quoted line",
                        "Label the tone with a more precise adjective, such as wistful or bitter"
                  ],
                  "correctAnswer": 1,
                  "explanation": "The paragraph names the tone and quotes evidence but never explains its effect. Explaining how the tone shapes meaning or theme supplies the missing commentary. A second quotation, an overview of the poem or a sharper tone word still leaves the effect unexplained."
            },
            {
                  "question": "Which thesis move is strongest for AP Lit?",
                  "options": [
                        "Claim that the poem's imagery is beautiful and appeals to the senses",
                        "Advance a specific, defensible claim about how imagery contributes to meaning",
                        "Summarize the poem's situation and say that it uses vivid imagery",
                        "Name three image types in the poem and promise to discuss each"
                  ],
                  "correctAnswer": 1,
                  "explanation": "A strong thesis makes a specific, arguable claim about how a choice in the poem, here its imagery, creates meaning. Praising imagery as beautiful, summarizing the situation or listing image types identifies a feature without arguing what it does."
            }
      ]
}
    }
  ]
};
