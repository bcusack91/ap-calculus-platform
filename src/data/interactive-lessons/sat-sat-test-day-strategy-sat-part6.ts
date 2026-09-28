export const satTestDayStrategyPart6Data = {
  topicSlug: 'sat-test-day-strategy-sat',
  sections: [
    {
      id: 'tds6-intro',
      type: 'text' as const,
      content: `# The Week Before Test Day

**Part 6 of 7 — Final Preparation Checklist**

### 7 Days Before
- [ ] Take one final full-length practice test under real conditions
- [ ] Review your error log — focus on patterns, not individual questions
- [ ] Confirm your test center and registration

### 3-4 Days Before
- [ ] Light review only — flashcards, formula sheets, key concepts
- [ ] **No new material** — this is reinforcement, not learning
- [ ] Get your sleep schedule aligned (wake at test-day time)

### Night Before
- [ ] Lay out everything: ID, admission ticket, charger, snacks
- [ ] Check that your Bluebook app is installed and updated on your device
- [ ] Light review (15-20 min max), then relax
- [ ] **Sleep 8+ hours** — sleep is more valuable than last-minute cramming

### Morning of Test
- [ ] Eat a balanced breakfast (protein + complex carbs — eggs, oatmeal, banana)
- [ ] Arrive 30 minutes early
- [ ] Bring fully charged device + charger
- [ ] Bring snacks for the break (granola bar, water)

### What NOT To Do
- ❌ Cram the night before (diminishing returns)
- ❌ Try to learn new concepts (too late for that)
- ❌ Stay up late studying (a short night hurts focus and recall more than one more hour of review helps)
- ❌ Change your routine (eat what you normally eat)`
    },
    {
      id: 'tds6-q1',
      type: 'quiz' as const,
      question: 'Research shows that pulling an all-nighter before the SAT will most likely:',
      options: [
        'Raise your score, since the extra review stays fresh',
        'Have no real effect as long as you drink coffee',
        'Lower your score by hurting focus and memory',
        'Help on Reading but hurt Math, which needs more focus'
      ],
      correctAnswer: 2,
      explanation: 'Sleep deprivation impairs working memory, processing speed, and focus — all critical for SAT performance. Caffeine can mask sleepiness but does not restore memory or focus, and the damage is not limited to one section. A full night\'s sleep is worth more than any last-minute studying.'
    },
    {
      id: 'tds6-text2',
      type: 'text' as const,
      content: `## Deep Dive: Optimizing Your Final Week

### Worked Example 1: Error Log Analysis

| Error Pattern | Times Seen | Fix |
|---|---|---|
| Wrong denominator on conditional probability | 4 | Always ask: "Given WHAT?" — that's the denominator |
| Sign error on negative exponents | 3 | Rewrite as fraction: $x^{-2} = \\frac{1}{x^2}$ |
| Misread "which is NOT" questions | 2 | Circle/highlight NOT, TRUE, EXCEPT |
| Ran out of time on last 3 Qs | 2 | Stricter flagging — move on at 90 sec |

**Your #1 priority:** Fix your most repeated error, not learn new content.

### Worked Example 2: Night-Before Checklist

| Item | Status | Why |
|---|---|---|
| Photo ID | ✅ Packed | Required for admission |
| Admission ticket / registration | ✅ Saved | Digital or printed |
| Fully charged laptop/tablet | ✅ Charging | Bluebook app installed + updated |
| Charger + power cord | ✅ In bag | Just in case |
| Snacks for break | ✅ Granola bar, water | Brain fuel |
| Pencils for scratch work | ✅ | Digital SAT still allows scratch paper |
| Phone (silenced) | ✅ | Will be collected during test |

### Sleep vs. Cramming

| The night before | What it does |
|---|---|
| A normal full night (8+ hours for most teens) | Working memory, reading focus and careful arithmetic are at their best |
| Cutting an hour or two to review | Little new material sticks this late, and the lost sleep costs focus on a 2-hour-14-minute test |
| A very short night | Slower reading and more careless errors, the mistakes that cost the most points on test day |

Sleep research consistently finds that short sleep impairs attention and working memory, both of which the SAT leans on for over two hours. No study gives an exact point cost, so treat any specific number you hear as a guess — but the direction is not in doubt.

### Breakfast Recommendations

| Good Choice | Why | Avoid |
|---|---|---|
| Eggs + toast | Protein + complex carbs = sustained energy | Sugary cereal (crash) |
| Oatmeal + banana | Slow-release energy + potassium | Energy drinks (jitters) |
| Greek yogurt + nuts | Protein + healthy fats | Heavy breakfast (sluggishness) |`
    },
    {
      id: 'tds6-quiz2',
      type: 'multiple-choice' as const,
      content: '**Pre-Test Preparation Challenge** 🎯',
      exercise: {
        questions: [
          {
            question: 'Three days before the SAT, you should focus on:',
            options: ['Learning the topics you have not studied yet', 'Light review of flashcards and key concepts', 'Taking three full practice tests back to back', 'Resting completely, with no review at all'],
            correctAnswer: 1,
            explanation: '3-4 days before = light reinforcement only. No new material (it won\'t stick), no marathon testing (it causes burnout). Flashcards and formula review keep your skills sharp.'
          },
          {
            question: 'The single most impactful thing you can do the night before is:',
            options: ['Review every practice test you have taken', 'Memorize a final list of 50 vocabulary words', 'Go to bed early enough to sleep eight or more hours', 'Take one last full-length practice test'],
            correctAnswer: 2,
            explanation: 'Research shows sleep is the #1 performance booster. 8+ hours of sleep improves working memory, processing speed, and focus more than any amount of last-minute studying.'
          },
          {
            question: 'Your error log shows you keep making sign errors on negative exponents. You should:',
            options: ['Reread the full chapter on exponent rules from the start', 'Drill 5-10 problems on that exact rule until automatic', 'Plan to skip exponent questions on test day', 'Memorize a table of every possible exponent result'],
            correctAnswer: 1,
            explanation: 'Target your specific weak spot with focused practice. 5-10 problems on negative exponents will build the muscle memory you need without wasting time reviewing rules you already know.'
          }
        ]
      }
    },
    {
      id: 'tds6-dropdown',
      type: 'dropdown-select' as const,
      content: '**Final Week Check** — Select the correct answer.',
      exercise: {
        dropdowns: [
          'Last full practice test should be taken [7 days before|night before|morning of|2 days before]',
          'Night before sleep target = [8+ hours|6 hours|10+ hours|5 hours plus extra review]',
          'Arrive at test center [30 min early|5 min early|1 hour early|exactly on time]',
          'The Bluebook app should be [installed and updated|downloaded morning of|installed at the test center|opened for the first time on test day]'
        ],
        correctAnswers: ['7 days before', '8+ hours', '30 min early', 'installed and updated'],
        hint1: 'Take your last full test a week out — then switch to light review.',
        hint2: 'Sleep is the most impactful performance booster.',
        hint3: 'Buffer time reduces stress and allows for unexpected delays.',
        explanation: 'Last practice test = 7 days before. Sleep 8+ hours. Arrive 30 min early for check-in. Bluebook must be installed and updated beforehand — don\'t wait until the morning.'
      }
    },
    {
      id: 'tds6-summary',
      type: 'text' as const,
      content: `## Part 6 Summary

| Timeline | Action |
|---|---|
| 7 days before | Last full practice test, review error log |
| 3-4 days before | Light review only — flashcards, formulas |
| Night before | Pack everything, light review (15 min), sleep 8+ hours |
| Morning of | Balanced breakfast, arrive 30 min early |
| Key principle | Sleep > cramming. Fix patterns, not individual Qs. |

*Next: During the Test — Mindset & Tactics →*`
    }
  ]
};
