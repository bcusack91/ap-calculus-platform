export const mcatTestDayPart5Data = {
  topicSlug: 'mcat-test-day-strategy-mcat',
  sections: [
    {
      id: 'td5-intro',
      type: 'text' as const,
      content: `# Test Day Strategy for the MCAT

**Part 5 of 7 — Mental Stamina & Test Day Prep**

### Physical Preparation

| Area | Strategy |
|------|---------|
| **Sleep** | 7-8 hours for 2 weeks before (not just the night before) |
| **Nutrition** | Eat a familiar, balanced breakfast (nothing new on test day) |
| **Hydration** | Drink water during breaks, not too much during sections |
| **Exercise** | Light exercise the day before (reduces anxiety) |
| **Caffeine** | If you normally use it, use it. Don't start or stop on test day. |

### Break Strategy

| Break | Duration | Do This |
|-------|----------|---------|
| After CP | 10 min | Bathroom, snack, light stretching |
| After CARS | 30 min | Full meal/snack, walk, reset mentally |
| After BB | 10 min | Bathroom, snack, positive self-talk |

### Managing Test Anxiety

- **Before**: Deep breathing (4-7-8 method), visualization of success
- **During**: If anxious, pause for 10 seconds, take 3 deep breaths
- **Reframe**: "This is my opportunity to show what I know"
- **Perspective**: One hard passage doesn't ruin your score — move on

### The 30-Minute Mid-Exam Break

This is the MOST IMPORTANT break:
- Eat a real snack (protein + carbs: sandwich, trail mix, PB&J)
- Walk around, stretch, go outside if possible
- Do NOT think about CARS — it's done
- Mentally reset for the second half`
    },
    {
      id: 'td5-quiz1',
      type: 'multiple-choice' as const,
      content: '**Test Day Prep** 🎯',
      exercise: {
        questions: [
          {
            question: 'The MOST important thing to do during the 30-minute break after CARS is:',
            options: ['Eat a substantial snack and mentally reset for the second half', 'Review your CARS answers', 'Study flashcards for Bio/Biochem', 'Call a friend for reassurance'],
            correctAnswer: 0,
            explanation: 'The 30-minute break is crucial for physical AND mental recovery. Eat (your brain needs glucose!), move around, and mentally let go of CARS. Reviewing past answers creates anxiety and studying more content at this point has diminishing returns.'
          }
        ]
      }
    },
    {
      id: 'td5-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 5

- Sleep and nutrition matter: prep your body for 2 weeks before the exam
- Take EVERY break — especially the 30-minute mid-exam break
- Eat during breaks (protein + carbs for sustained energy)
- Don't review past sections during breaks — look forward, not backward`
    }
  ]
};
