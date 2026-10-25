export const asvabAfqtScoresPart4Data = {
  topicSlug: 'asvab-afqt-scores',
  sections: [
    {
      id: 'afqt4-intro',
      type: 'text' as const,
      content: `# 🎖️ Your AFQT, Line Scores and Job Eligibility

**Part 4 of 7 — AFQT Categories and Branch Minimums**

### AFQT categories

The Department of Defense groups AFQT percentiles into categories:

| Category | AFQT percentile |
|:---:|:---:|
| I | 93–99 |
| II | 65–92 |
| IIIA | 50–64 |
| IIIB | 31–49 |
| IVA | 21–30 |
| IVB | 16–20 |
| IVC | 10–15 |
| V | 1–9 |

What the categories mean for enlistment:

- **Category V (1–9) is not eligible** to enlist.
- **Category IV (10–30)** is limited by federal law: no more than **4%** of a service's enlistees in a year may come from this range (the Secretary of Defense can raise that to at most 20% at a service's request). The same law means a non-graduate generally needs at least the **31st** percentile.
- **Categories I through IIIA** (AFQT 50 and up) are the scores recruiters most want to see.

Services sometimes group the Category IV range in their own way (the Army's regulation, for example, splits it as 16–30 and 10–15). The table above is the one published on the official ASVAB site.`
    },
    {
      id: 'afqt4-minimums',
      type: 'text' as const,
      content: `## Branch minimums (as of October 2026)

Each branch sets its own minimum AFQT. **These numbers change with recruiting needs, and some branches no longer publish one, so always confirm the current minimum with a recruiter.**

| Branch | With a high-school diploma | With a GED or other alternative credential |
|:---|:---:|:---:|
| Army | 31 | Not clearly published |
| Navy | 31 | Not clearly published |
| Air Force | 31 | 50 |
| Marine Corps | 31 | Not published; extra recruiter review |
| Coast Guard | 32 | Not officially published |
| Space Force | Not published ("a qualifying ASVAB score") | Not published |

One more Army fact (as of October 2026): the Army's **Future Soldier Prep Course**, a 90-day course covering ASVAB subjects, accepts applicants with an AFQT as low as **21** on its academic track.

### How to use these numbers

1. **A diploma matters.** With a GED, the bar is usually higher (the Air Force asks for 50 instead of 31).
2. **The minimum is a floor, not a goal.** Meeting it makes you eligible to enlist; the jobs open to you depend on your line scores (Part 5), and a higher AFQT gives you more options.
3. **Confirm with a recruiter.** Minimums move, and recruiters see the current rules.

### Worked example

Malik has a high-school diploma and an AFQT of 33. That is Category IIIB (31–49), which meets the published diploma minimum for the Army, Navy, Air Force and Marine Corps as of October 2026. He should still confirm with a recruiter, and he should know that a few more points would open more jobs.`
    },
    {
      id: 'afqt4-mc',
      type: 'multiple-choice' as const,
      content: '**Categories and eligibility.** 🎯',
      exercise: {
        questions: [
          {
            question: "An applicant's AFQT is 57. Which category is that?",
            options: ['Category II', 'Category IIIA', 'Category IIIB', 'Category IVA'],
            correctAnswer: 1,
            explanation: 'Category IIIA covers percentiles 50 through 64, so 57 falls there. Category II starts at 65, and IIIB ends at 49.'
          },
          {
            question: "An applicant scores an AFQT of 7. What does that mean for enlistment?",
            options: ['Eligible, but limited to a few jobs', 'Eligible only with a GED', 'Not eligible to enlist', 'Eligible after an automatic retest'],
            correctAnswer: 2,
            explanation: 'An AFQT of 1 to 9 is Category V, which is not eligible to enlist. The applicant can prepare and retest under the retest rules in Part 6.'
          },
          {
            question: "Why can't a service fill its ranks with Category IV recruits even when it is short of people?",
            options: ['Category IV scores expire after six months', 'Federal law caps the share of Category IV enlistees', 'Category IV applicants are required to have a GED', 'Category IV is only used by the Coast Guard'],
            correctAnswer: 1,
            explanation: 'Federal law limits Category IV (percentiles 10 to 30) to 4% of a service\'s enlistees in a year, which the Secretary of Defense can raise to at most 20%.'
          }
        ]
      }
    },
    {
      id: 'afqt4-dropdown',
      type: 'dropdown-select' as const,
      content: '**Reading the minimums the right way.** 🔽',
      exercise: {
        dropdowns: [
          {
            label: 'Before planning around any branch minimum, you should:',
            options: ['confirm the current number with a recruiter', 'assume it is the same for every branch', 'use the number from an older prep book', 'assume a GED lowers it'],
            correctAnswer: 0
          },
          {
            label: 'Compared with a diploma, a GED usually means the AFQT you need is:',
            options: ['higher', 'lower', 'exactly the same', 'not checked at all'],
            correctAnswer: 0
          },
          {
            label: 'Meeting a branch minimum makes you:',
            options: ['eligible to enlist, with jobs set by line scores', 'qualified for every job in that branch', 'exempt from the other subtests', 'guaranteed a specific enlistment bonus'],
            correctAnswer: 0
          }
        ],
        correctAnswers: ['confirm the current number with a recruiter', 'higher', 'eligible to enlist, with jobs set by line scores'],
        hint1: 'Minimums change with recruiting needs.',
        hint2: 'The Air Force asks diploma holders for 31 and GED holders for 50.',
        hint3: 'Which score decides jobs?',
        explanation: 'Minimums change, so confirm with a recruiter. A GED usually raises the bar (Air Force: 50 instead of 31). Meeting the minimum makes you eligible; specific jobs depend on line scores.'
      }
    },
    {
      id: 'afqt4-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 4

- Categories: **I 93–99, II 65–92, IIIA 50–64, IIIB 31–49, IVA 21–30, IVB 16–20, IVC 10–15, V 1–9**.
- **Category V is not eligible**; **Category IV is capped** by law at 4% of enlistees (up to 20% with approval).
- As of October 2026, the diploma minimum is **31** for the Army, Navy, Air Force and Marine Corps and **32** for the Coast Guard; a GED usually needs more (Air Force 50). **Always confirm with a recruiter.**
- The minimum gets you in; **line scores** decide your job options.

> **Up Next:** Part 5 — line scores: how each service turns your subtests into job qualifications.`
    }
  ]
};
