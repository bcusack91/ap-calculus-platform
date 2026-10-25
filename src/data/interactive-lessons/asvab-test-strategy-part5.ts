export const asvabTestStrategyPart5Data = {
  topicSlug: 'asvab-test-strategy',
  sections: [
    {
      id: 'tstrat5-intro',
      type: 'text' as const,
      content: `# ⏱️ CAT-ASVAB Strategy and Test Day

**Part 5 of 7 — Test Day at MEPS or a MET Site**

### Where you test

- **MEPS (Military Entrance Processing Station):** a joint-service Department of Defense organization with **65 locations** in the United States and Puerto Rico. Every MEPS gives the computer test.
- **MET sites (Military Entrance Test sites):** smaller satellite sites, often in federal buildings, National Guard armories or Reserve centers, for people who live far from a MEPS. Most give the computer test; a few still use paper.

### Before you walk in

| Rule | Details |
|:---|:---|
| Photo ID | Bring a valid photo ID. |
| Be on time | Late arrivals are turned away. |
| Your recruiter | May drive you there, but cannot come into the testing room. |
| Electronics | No calculators, phones or other electronic devices. |
| Rest | The official advice: schooling and motivation matter most, plus a good night's rest and arriving on time. |`
    },
    {
      id: 'tstrat5-desk',
      type: 'text' as const,
      content: `## At the desk

- You may have **two sheets of scratch paper and two pencils** on the desk. They are provided at MEPS.
- Need more paper? Click **HELP** on the screen and **raise your hand**.
- Scratch paper is collected after the test and destroyed. (For the at-home PiCAT, you bring your own.)

### No calculator, and why

Calculators are not allowed on any ASVAB. The official reasons: the test measures whether you can **apply** math principles, and you may need to calculate by hand on the job. The official site also points out that if calculators were allowed, the scores would simply be adjusted, so the cutoffs you need to qualify would not get any easier.

**What that means for your prep:** practice every math problem with pencil and paper. Get quick at multiplying two-digit numbers, long division, fractions and percents by hand. Build the habit of writing each step on scratch paper so you can check it.

### After the test

| Version | When you get scores |
|:---|:---|
| CAT-ASVAB at MEPS or a MET site | Right after the session |
| Paper ASVAB | Usually a few days (scored at a MEPS) |
| PiCAT | Through your recruiter only; a proctored Vtest is required |
| CEP (high school) | About two weeks |

### Worked example

Devon's recruiter will drive him to MEPS. His checklist: photo ID, leave the phone in the car or locker as instructed, arrive early, no calculator. At the desk he finds two sheets of scratch paper and two pencils; when the first sheet fills up during Arithmetic Reasoning, he keeps the second for Mathematics Knowledge and plans to click HELP if he needs a third.`
    },
    {
      id: 'tstrat5-mc',
      type: 'multiple-choice' as const,
      content: '**Test-day rules.** 🎯',
      exercise: {
        questions: [
          {
            question: "During the CAT-ASVAB at MEPS you run out of scratch paper. What do you do?",
            options: ['Write on the back of your ID card', 'Click HELP and raise your hand', 'Continue without paper for the rest of the test', 'Leave the room to get more from your recruiter'],
            correctAnswer: 1,
            explanation: 'To get more scratch paper, click HELP and raise your hand. You start with two sheets and two pencils on the desk.'
          },
          {
            question: "Why does the ASVAB ban calculators, according to the official site?",
            options: ['Calculators are too expensive to supply to every applicant', 'It tests applying principles, and jobs may need hand math', 'The math questions are too easy to need a calculator', 'Calculators would make the test take much longer'],
            correctAnswer: 1,
            explanation: 'The official reason is that the test measures applying principles and hand calculation may be needed on the job. Scores would be adjusted if calculators were allowed, so qualifying would not get easier.'
          },
          {
            question: "Your recruiter drives you to a MET site for the ASVAB. What is the recruiter allowed to do?",
            options: ['Sit in the testing room to keep you calm', 'Bring you a calculator for Arithmetic Reasoning', 'Drive you there but stay out of the testing room', 'Check your answers between subtests'],
            correctAnswer: 2,
            explanation: 'A recruiter may drive you but cannot enter the testing room.'
          },
          {
            question: "When do you get your scores after the CAT-ASVAB at a MEPS?",
            options: ['Right after the session', 'In about two weeks by mail', 'Only after a Vtest', 'In a few days, after hand scoring'],
            correctAnswer: 0,
            explanation: 'Proctored CAT-ASVAB scores are available immediately. Paper tests take a few days, the CEP about two weeks, and the PiCAT needs a Vtest.'
          }
        ]
      }
    },
    {
      id: 'tstrat5-dropdown',
      type: 'dropdown-select' as const,
      content: '**Pack and plan.** 🔽',
      exercise: {
        dropdowns: [
          {
            label: 'If you arrive late for your test session:',
            options: ['you are turned away', 'you lose the first subtest only', 'you get less time on each subtest', 'your scores are lowered by 5 points'],
            correctAnswer: 0
          },
          {
            label: 'You must bring:',
            options: ['a valid photo ID', 'your own scratch paper', 'your own calculator', 'a printed practice test'],
            correctAnswer: 0
          },
          {
            label: 'At the testing desk you may have:',
            options: ['two sheets of scratch paper and two pencils', 'one sheet of paper and a pen', 'unlimited paper and a calculator', 'only the computer, no paper'],
            correctAnswer: 0
          }
        ],
        correctAnswers: ['you are turned away', 'a valid photo ID', 'two sheets of scratch paper and two pencils'],
        hint1: 'Being on time is not optional.',
        hint2: 'Scratch paper is provided at MEPS.',
        hint3: 'Two of each.',
        explanation: 'Late arrivals are turned away, a valid photo ID is required, and the desk holds two sheets of scratch paper and two pencils (more on request through HELP).'
      }
    },
    {
      id: 'tstrat5-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 5

- Test at one of **65 MEPS** or a nearby **MET site**. Bring **photo ID**; **late arrivals are turned away**; your recruiter **cannot enter** the testing room.
- **Two sheets of scratch paper and two pencils**; click **HELP** and raise your hand for more.
- **No calculator**: practice all math by hand.
- CAT scores come **right after** the session.

> **Up Next:** Part 6 — a 4-week and an 8-week study plan, and the traps that cost points.`
    }
  ]
};
