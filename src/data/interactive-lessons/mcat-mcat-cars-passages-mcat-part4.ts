export const mcatCarsPsgPart4Data = {
  topicSlug: 'mcat-cars-passages-mcat',
  sections: [
    {
      id: 'cp4-intro',
      type: 'text' as const,
      content: `# CARS Passage Types

**Part 4 of 7 — Comparative & Multiple-Perspective Passages**

### Tracking Multiple Viewpoints

Many CARS passages present 2-3 different perspectives on an issue.

### Strategy: The Viewpoint Grid

As you read, mentally track:

| Aspect | Viewpoint A | Viewpoint B | Author |
|--------|------------|------------|--------|
| Main claim | ? | ? | ? |
| Key evidence | ? | ? | ? |
| Tone | ? | ? | ? |

### Common Traps in Multi-Perspective Passages

1. **Attribution errors**: Confusing who said what
2. **Assuming agreement**: Just because the author discusses a view doesn't mean they endorse it
3. **False balance**: The author may present both sides but clearly favor one
4. **Missing the synthesis**: The author may combine elements of both views

### Signal Phrases

- "According to theorist X..." → This is X's view, NOT necessarily the author's
- "While X argues... Y contends..." → Two competing views
- "Although X has merit... the evidence suggests..." → Author is about to side with one view`
    },
    {
      id: 'cp4-quiz1',
      type: 'multiple-choice' as const,
      content: '**Multiple Perspectives** 🎯',
      exercise: {
        questions: [
          {
            question: 'A passage states: "Smith argues that technology enhances creativity. However, this view overlooks the mounting evidence that passive screen time diminishes it." The author most likely:',
            options: ['Disagrees with Smith — "overlooks" signals criticism of Smith\'s position', 'Agrees with Smith', 'Has no opinion', 'Is merely summarizing both views neutrally'],
            correctAnswer: 0,
            explanation: '"However" signals a counterpoint, and "overlooks" implies Smith is wrong or incomplete in their reasoning. The author is positioning against Smith.'
          }
        ]
      }
    },
    {
      id: 'cp4-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 4

- Track WHO says WHAT — the #1 skill for multi-perspective passages
- "According to X" ≠ the author's view
- Watch for signal phrases that reveal the author's actual position
- Attribution errors are the most common trap in these passages`
    }
  ]
};
