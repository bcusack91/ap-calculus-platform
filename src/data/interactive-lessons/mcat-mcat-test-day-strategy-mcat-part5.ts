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
      id: 'td5-worked',
      type: 'text' as const,
      content: `### Worked Example — Why Stamina Is a Score Variable

The MCAT runs ~7.5 hours. Treat the day as an endurance event, not a sprint, and "manage your battery" deliberately.

**Step 1 — Map the energy curve.** Most test-takers feel sharp through CP and CARS, then fatigue builds. The two science sections you'll likely feel worst on — **Bio/Biochem and Psych/Soc** — come *after* the long break, when stamina, not knowledge, is the limiting factor.

**Step 2 — Use breaks as recovery, not bonus study.** During the 10-minute breaks: bathroom, water, a quick snack, light stretching. During the **30-minute mid-exam break**: eat real food (protein + complex carbs for steady glucose), walk, and step outside if allowed. Cramming flashcards here drains the very battery you need.

**Step 3 — Stabilize blood glucose.** Your brain runs on glucose; a sugar crash mid-afternoon shows up as careless errors. A balanced snack (e.g., peanut-butter sandwich + nuts) gives slower-release energy than candy, which spikes then crashes.

**Step 4 — Pre-load the routine for two weeks.** Sleep 7–8 hours nightly *for two weeks before*, not just the night before — one good night can't repay accumulated sleep debt. Keep caffeine at your normal level; quitting or doubling on test day invites headaches or jitters.

**Step 5 — Have a reset for anxiety spikes.** If panic hits, pause 10 seconds, take three slow breaths (e.g., 4-7-8), and reframe: "one brutal passage is brutal for everyone — move on." Then resume.

**Takeaway:** On a 7.5-hour exam, the late sections are often decided by **stamina and glucose**, so prep your body and spend your breaks recovering — not studying.`
    },
    {
      id: 'td5-quiz1',
      type: 'multiple-choice' as const,
      content: `**Test Day Prep** 🎯`,
      exercise: {
        questions: [
          {
            question: `The MOST important thing to do during the 30-minute break after CARS is:`,
            options: [`Eat a substantial snack and mentally reset for the second half`, `Review your CARS answers`, `Study flashcards for Bio/Biochem`, `Call a friend for reassurance`],
            correctAnswer: 0,
            explanation: `The 30-minute break is crucial for physical AND mental recovery. Eat (your brain needs glucose!), move around, and mentally let go of CARS. Reviewing past answers creates anxiety and studying more content at this point has diminishing returns.`
          },
          {
            question: `Why is sleeping 7–8 hours nightly for TWO WEEKS before the exam better than just the night before?`,
            options: [`Accumulated sleep debt can't be repaid by one good night; consistent sleep keeps cognition sharp`, `Sleeping the night before actually hurts performance`, `Two weeks of sleep eliminates the need to study`, `It changes how the score is scaled`],
            correctAnswer: 0,
            explanation: `A single night of good sleep cannot undo weeks of deficit. Consistent rest in the run-up protects memory consolidation and sustained attention—critical for a 7.5-hour exam.`
          },
          {
            question: `For the mid-exam snack, a peanut-butter sandwich plus nuts is preferable to candy because it:`,
            options: [`Provides slower-release energy that stabilizes blood glucose, avoiding a sugar crash`, `Contains no calories`, `Tastes better under stress`, `Is the only food allowed in testing centers`],
            correctAnswer: 0,
            explanation: `Protein and complex carbs release glucose gradually, sustaining brain energy through the late sections. Pure sugar spikes then crashes, which can produce careless errors when stamina already matters most.`
          }
        ]
      }
    },
    {
      id: 'td5-quiz2',
      type: 'multiple-choice' as const,
      content: `**Stamina & Anxiety** 🎯`,
      exercise: {
        questions: [
          {
            question: `Which sections are most often decided by stamina rather than knowledge, and why?`,
            options: [`Bio/Biochem and Psych/Soc, because they come late in a ~7.5-hour day when fatigue peaks`, `Chem/Phys, because it is first`, `CARS, because it has the fewest questions`, `None — fatigue never affects MCAT scores`],
            correctAnswer: 0,
            explanation: `The last two science sections fall after hours of testing, so performance there often reflects endurance and glucose management as much as content mastery. That is why break recovery and sleep prep matter.`
          },
          {
            question: `Regarding caffeine on test day, the best guidance is:`,
            options: [`Keep it at your normal daily level — don't newly start or suddenly stop`, `Drink double your usual amount for extra focus`, `Quit caffeine entirely that morning`, `Switch to a new energy drink you've never tried`],
            correctAnswer: 0,
            explanation: `Test day is no time to change your routine. Quitting can cause withdrawal headaches; doubling can cause jitters and a later crash. Replicate your normal, familiar intake.`
          },
          {
            question: `A sudden wave of anxiety hits mid-section. The most effective in-the-moment reset is to:`,
            options: [`Pause ~10 seconds, take three slow breaths, reframe the moment, then resume`, `Quit the section and request a restart`, `Recompute your projected score`, `Reread the entire passage from the top three times`],
            correctAnswer: 0,
            explanation: `A brief, structured reset (pause, slow breathing, a quick reframe such as "one hard passage is hard for everyone") lowers arousal fast and returns focus—without burning the time a full restart or rereading would cost.`
          }
        ]
      }
    },
    {
      id: 'td5-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 5

- Sleep and nutrition matter: prep your body for 2 weeks before the exam
- The late sections (BB, PS) are often decided by stamina and steady blood glucose
- Take EVERY break — especially the 30-minute mid-exam break — and use it to recover
- Eat slow-release food (protein + carbs); keep caffeine at your normal level
- Don't review past sections during breaks — look forward, not backward`
    }
  ]
};
