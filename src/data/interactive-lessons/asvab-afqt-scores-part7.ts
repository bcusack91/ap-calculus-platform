export const asvabAfqtScoresPart7Data = {
  topicSlug: 'asvab-afqt-scores',
  sections: [
    {
      id: 'afqt7-intro',
      type: 'text' as const,
      content: `# 🎖️ Your AFQT, Line Scores and Job Eligibility

**Part 7 of 7 — Mastery Check**

### The whole topic on one page

| Idea | What to remember |
|:---|:---|
| Uses of the ASVAB | Enlistment (AFQT), jobs (line scores), career exploration (CEP). No pass or fail. |
| Standard scores | Mean 50, SD 10; about 16% score 60 or higher |
| VE | Weighted WK + PC blend (WK counts more), re-scaled to mean 50 |
| AFQT | AR + MK + 2 × VE, converted to a percentile from 1 to 99 |
| Anchors | Sum 183 → 31st, 200 → 48th, 202 → 50th, 249 → 93rd |
| Categories | I 93–99, II 65–92, IIIA 50–64, IIIB 31–49, IVA 21–30, IVB 16–20, IVC 10–15, V 1–9 |
| Minimums (Oct 2026) | Diploma: 31 (Army, Navy, Air Force, Marines), 32 (Coast Guard); GED usually higher. Confirm with a recruiter. |
| Line scores | Army GT = AR + VE; Marine GT = AR + MC + VE; Air Force MAGE; Navy sums (AO in MEC2 and OPS) |
| Score rules | Most recent counts; valid 2 years; retest after 1 month, 1 month, then 6 months |

Ten questions follow, in roughly the mix of easy, medium and hard you should expect from a score report conversation with a recruiter. Use scratch paper, no calculator.`
    },
    {
      id: 'afqt7-mastery',
      type: 'multiple-choice' as const,
      content: '**Mastery set.** ✅',
      exercise: {
        questions: [
          {
            question: "Which subtest score does NOT affect the AFQT?",
            options: ['Paragraph Comprehension', 'Mathematics Knowledge', 'General Science', 'Arithmetic Reasoning'],
            correctAnswer: 2,
            explanation: 'The AFQT uses AR, MK, WK and PC. General Science feeds line scores such as the Air Force E area and Navy HM composite.'
          },
          {
            question: "A subtest standard score of 60 means the test-taker scored:",
            options: ['60% of the questions correctly', 'one standard deviation above average', 'at the 60th percentile of the reference group', 'ten points below the reference-group average'],
            correctAnswer: 1,
            explanation: 'Standard scores have mean 50 and standard deviation 10, so 60 is one SD above average, a level only about 16% of the reference group reaches. It is neither a percent correct nor a percentile.'
          },
          {
            question: "A recruit has AR 53, MK 51 and VE 52. Using this excerpt of the official table, what is the AFQT?\n\n| AFQT sum | 205 | 206 | 207 | 208 | 209 |\n|---|---|---|---|---|---|\n| Percentile | 53 | 54 | 55 | 56 | 57 |",
            options: ['53', '54', '56', '57'],
            correctAnswer: 2,
            explanation: 'The sum is 53 + 51 + 2(52) = 208, which the table converts to the 56th percentile. Forgetting to double VE gives 156, which is off this excerpt entirely.'
          },
          {
            question: "An applicant's AFQT is 30. Which category is it, and what does that category face?",
            options: ['Category IIIB, which has no special limit on it', 'Category IVA, capped by federal law', 'Category V, which is not eligible to enlist', 'Category IVC, which the Coast Guard alone accepts'],
            correctAnswer: 1,
            explanation: 'Category IVA covers 21 to 30. All of Category IV (10 to 30) is capped by law at 4% of a service\'s enlistees, up to 20% with approval. IIIB starts at 31.'
          },
          {
            question: "A recruit's WK and PC standard scores are both 46. What is the best description of the recruit's VE?",
            options: ['Exactly 92, the sum of the two', 'Exactly 46 times 0.62, about 29', 'In the mid-40s, on the same scale', 'Unknown until the recruit retakes PC'],
            correctAnswer: 2,
            explanation: 'VE is a weighted blend of WK and PC that is re-scaled to mean 50 and SD 10, so with both at 46 it lands in the mid-40s. It is not a sum, and 0.62 is PC\'s relative weight, not a multiplier for the score.'
          },
          {
            question: "Which change raises the Army GT score?",
            options: ['A higher Mechanical Comprehension score', 'A higher Word Knowledge score', 'A higher Assembling Objects score', 'A higher General Science score'],
            correctAnswer: 1,
            explanation: 'Army GT = AR + VE, and VE comes from WK and PC, so a higher WK raises GT. MC is part of the Marine GT, not the Army GT; AO and GS are not in GT.'
          },
          {
            question: "Two applicants have identical AR and MK scores. Applicant 1's VE is 5 points higher than Applicant 2's. How do their AFQT sums compare?",
            options: ['Applicant 1\'s sum is 5 points higher', 'Applicant 1\'s sum is 10 points higher', 'The sums are equal because VE is a composite', 'Applicant 1\'s sum is 2.5 points higher'],
            correctAnswer: 1,
            explanation: 'VE is doubled in AR + MK + 2 × VE, so a 5-point VE difference becomes a 10-point difference in the sum.'
          },
          {
            question: "A Navy rating (made up for this question) requires AR + MC + AO of at least 165. An applicant has AR 51, MC 52 and AO 59. Which statement is correct?",
            options: ['The applicant qualifies, with a sum of 165', 'The applicant falls short, with a sum of 162', 'The applicant qualifies, because AO counts double', 'The applicant falls short, with a sum of 159'],
            correctAnswer: 1,
            explanation: 'Navy standards are plain sums of standard scores: 51 + 52 + 59 = 162, which is 3 short of 165. AO is counted once, not twice.'
          },
          {
            question: "Kai took the PiCAT at home, and the recruiter says the score may qualify. What has to happen next?",
            options: ['Nothing; the PiCAT score is final', 'A proctored Vtest within 45 days', 'A full CAT-ASVAB retest after 6 months', 'A second PiCAT within 48 hours'],
            correctAnswer: 1,
            explanation: 'A qualifying PiCAT must be confirmed by a short proctored Vtest within 45 days. Once confirmed, the PiCAT becomes the score of record. The PiCAT can only be taken once.'
          },
          {
            question: "Lena tested in January (AFQT 44), retested in February (AFQT 41), and her recruiter checks her scores 18 months after the February test. Which statement is correct?",
            options: ['The 44 is her score of record because it is higher', 'Her scores expired after 12 months', 'The 41 counts, and it is still valid', 'She must average the two scores to get 42.5'],
            correctAnswer: 2,
            explanation: 'The most recent valid score counts, so it is the 41, and scores can be used for enlistment for 2 years, so 18 months later it is still valid.'
          }
        ]
      }
    },
    {
      id: 'afqt7-summary',
      type: 'text' as const,
      content: `### Your AFQT, Line Scores and Job Eligibility — Summary 🎓

| Part | Topic | Status |
|:---:|:---|:---:|
| 1 | How ASVAB scores work | ✅ |
| 2 | Standard scores and the VE composite | ✅ |
| 3 | The AFQT formula and percentile | ✅ |
| 4 | AFQT categories and branch minimums | ✅ |
| 5 | Line scores and job eligibility | ✅ |
| 6 | Retests, PiCAT and score strategy | ✅ |
| 7 | Mastery check | ✅ |

> **Key Fact:** Your AFQT (AR + MK + 2 × VE, as a percentile) gets you in the door; your line scores pick the doors you can open. Study the AFQT four first, then the subtests behind the line scores for the jobs you want, and confirm every minimum with a recruiter.`
    }
  ]
};
