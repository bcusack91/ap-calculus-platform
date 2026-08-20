export const lessonData = {
  topicSlug: 'sat-data-statistics-advanced',
  sections: [
    {
      id: 'ds-adv-p3-intro',
      type: 'text' as const,
      content: `# Data & Statistics: Timed Drill

**Part 3 of 3 — 5 Questions, About 90 Seconds Each**

Run this checklist on every item before you divide anything:

1. **What group am I restricted to?** The words right after "of" name it. Its total is the denominator.
2. **Is the denominator adjusted?** "Not absent," "30 thousand or more," "either e-book or audio" — build the restricted total first, and keep the numerator inside the same set.
3. **Any missing cells?** Recover from the margin with one unknown, then reconcile against the other margin.
4. **Rate or count?** If a claim compares raw numbers across groups of different sizes, it is almost certainly the trap.
5. **Difference, ratio, or level?** Percentage points subtract; "how many times" divides; and the intermediate value is always on the menu.
6. **Scaling?** Match the rate's denominator to the population you are multiplying.`
    },
    {
      id: 'ds-adv-p3-q1',
      type: 'quiz' as const,
      question: 'The table shows results for 600 students in three cohorts of an online course.\n\n| | Passed | Failed | Withdrew | Total |\n|---|---|---|---|---|\n| Cohort 1 | 126 | 24 | 30 | 180 |\n| Cohort 2 | 133 | 57 | 20 | 210 |\n| Cohort 3 | 120 | 60 | 30 | 210 |\n| Total | 379 | 141 | 80 | 600 |\n\nFor each cohort, the pass rate among students who did not withdraw is the number who passed divided by the number in that cohort who did not withdraw. Which cohort had the highest such rate, and what was that rate to the nearest tenth of a percent?',
      options: [
        'Cohort 1, 70.0 percent',
        'Cohort 1, 84.0 percent',
        'Cohort 2, 63.3 percent',
        'Cohort 1, 33.2 percent'
      ],
      correctAnswer: 1,
      explanation: 'Remove the withdrawals from each row total first. Cohort 1: $180 - 30 = 150$ remaining, so $126/150 = 84.0$ percent. Cohort 2: $210 - 20 = 190$, so $133/190 = 70.0$ percent. Cohort 3: $210 - 30 = 180$, so $120/180 = 66.7$ percent. Cohort 1 is highest at 84.0 percent. Choice A finds the right cohort but divides by the full row total 180, keeping in the very students the question excluded. Choice C makes that same unadjusted-denominator error for Cohort 2, $133/210$. Choice D divides by the Passed column total 379, which answers "of all students who passed, what share were in Cohort 1."'
    },
    {
      id: 'ds-adv-p3-q2',
      type: 'quiz' as const,
      question: 'The table shows how 850 students responded to a survey about a proposed schedule.\n\n| | Yes | No | Undecided | Total |\n|---|---|---|---|---|\n| Freshmen | 120 | 90 | 40 | 250 |\n| Sophomores | 132 | 108 | 60 | 300 |\n| Seniors | 198 | 42 | 60 | 300 |\n| Total | 450 | 240 | 160 | 850 |\n\nConsider two quantities: the percent of seniors who answered Yes, and the percent of students answering Yes who are seniors. What is the positive difference between these two percentages, to the nearest tenth of a percentage point?',
      options: [
        '$20.7$',
        '$42.7$',
        '$22.0$',
        '$66.0$'
      ],
      correctAnswer: 2,
      explanation: 'The first quantity restricts to seniors, so its denominator is the Seniors row total 300: $198/300 = 66.0$ percent. The second restricts to Yes responses, so its denominator is the Yes column total 450: $198/450 = 44.0$ percent. The difference is $66.0 - 44.0 = 22.0$ percentage points. The item exists because the two phrasings sound nearly identical while using different margins. Choice B replaces the second quantity with the grand-total share $198/850 = 23.3$ percent, giving $66.0 - 23.3$. Choice A makes that same substitution for the first quantity, giving $44.0 - 23.3$. Choice D is the first percentage alone, the intermediate value.'
    },
    {
      id: 'ds-adv-p3-q3',
      type: 'quiz' as const,
      question: 'A transit agency surveyed 500 riders.\n\n| | Under 20 min | 20 to 40 min | Over 40 min | Total |\n|---|---|---|---|---|\n| Bus | 60 | 84 | 96 | 240 |\n| Rail | 30 | 75 | 65 | 170 |\n| Shuttle | 40 | 35 | 15 | 90 |\n| Total | 130 | 194 | 176 | 500 |\n\nThe 500 riders surveyed are representative of the agency’s 40,000 riders this year. Next year the agency expects 44,000 riders, with the percentage in each cell of the table unchanged. How many more riders are expected to take the bus and commute over 40 minutes next year than this year?',
      options: [
        '768',
        '7,680',
        '8,448',
        '4,000'
      ],
      correctAnswer: 0,
      explanation: 'The cell rate is $96/500 = 0.192$ of all riders. This year that is $0.192(40{,}000) = 7{,}680$ riders; next year it is $0.192(44{,}000) = 8{,}448$. The increase is $8{,}448 - 7{,}680 = 768$, which you can also get in one step as $0.192(4{,}000)$. Choice B is this year’s count and choice C is next year’s count; both are intermediate values, and the question asks for the change between them. Choice D is the growth in total ridership, never multiplied by the rate for this particular cell.'
    },
    {
      id: 'ds-adv-p3-q4',
      type: 'quiz' as const,
      question: 'A gym surveyed all 900 of its members about renewal.\n\n| | Renewed | Did not renew | Undecided | Total |\n|---|---|---|---|---|\n| Basic | 260 | 100 | 40 | 400 |\n| Plus | 240 | 45 | 15 | 300 |\n| Elite | 170 | 20 | 10 | 200 |\n| Total | 670 | 165 | 65 | 900 |\n\nThe gym will move all 200 Elite members onto the Plus tier. If the resulting 500 Plus members renew at the same rate as the current Plus members, how many of the 500 would be expected to renew?',
      options: [
        '410',
        '400',
        '425',
        '372'
      ],
      correctAnswer: 1,
      explanation: 'The question specifies the current Plus rate, computed inside the Plus row: $240/300 = 0.80$. Applying it to 500 members gives $0.80(500) = 400$. Choice A simply adds the two current renewal counts, $240 + 170 = 410$, which lets the former Elite members keep their own renewal behavior instead of adopting the Plus rate the question named. Choice C uses the Elite rate $170/200 = 0.85$, the rate of the group being moved rather than the group they are moving into. Choice D uses the overall rate $670/900 = 0.744$, which blends in the much weaker Basic tier.'
    },
    {
      id: 'ds-adv-p3-q5',
      type: 'quiz' as const,
      question: 'A shop recorded its 600 items by fabric and size. Two entries are missing.\n\n| | Small | Medium | Large | Total |\n|---|---|---|---|---|\n| Cotton | 84 | ? | 76 | 280 |\n| Linen | 45 | 90 | 60 | 195 |\n| Silk | ? | 55 | 44 | 125 |\n| Total | 155 | 265 | 180 | 600 |\n\nOf the medium items, what percent are cotton, to the nearest tenth of a percent?',
      options: [
        '$42.9$',
        '$20.0$',
        '$54.7$',
        '$45.3$'
      ],
      correctAnswer: 3,
      explanation: 'The Cotton row has one unknown, so the missing medium cotton count is $280 - 84 - 76 = 120$; it reconciles with the Medium column, $120 + 90 + 55 = 265$. (The second missing cell, $155 - 84 - 45 = 26$ small silk items, is never needed.) The restriction is to medium items, so the denominator is 265: $120/265 = 45.3$ percent. Choice A uses the Cotton row total 280, the reversed conditional — what percent of cotton items are medium. Choice B uses the grand total 600. Choice C is the complement, the percent of medium items that are not cotton.'
    }
  ]
};
