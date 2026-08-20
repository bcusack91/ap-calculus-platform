export const lessonData = {
  topicSlug: 'sat-command-evidence-advanced',
  sections: [
    {
      id: 'advce3-intro',
      type: 'text' as const,
      content: `# Command of Evidence: Timed Drill

**Part 3 of 3 — Four Items at Full Difficulty**

Pacing target: **60 seconds per question** (table items can finish in 45). Before the choices, always:

1. Write the claim's shape: "A **and** B," "A **but not** B," "X **rather than** Y," or "predicts P, rival doesn't."
2. Identify the student's side on skeptical conclusions.
3. Underline any restrictive phrase in literary claims — it's the tripwire the trap quote will trip.
4. Eliminate by shape first; verify arithmetic last, and only for survivors.`
    },
    {
      id: 'advce3-q1',
      type: 'quiz' as const,
      question: `A student is testing whether a stadium's new express entry lanes shortened waits overall or shortened them for some fans at other fans' expense. She compiles entry data from the season before and after the change.

Median entry wait, minutes
Express lanes (new): 4
General lanes, season before the change: 12
General lanes, season after the change: 19
Share of fans using express lanes: 30 percent

The student concludes that the express lanes shortened waits for their users while lengthening them for everyone else.

Which choice most effectively uses data from the table to support the student's conclusion?`,
      options: [
        'Express-lane users waited a median of only 4 minutes.',
        'Express users waited 4 minutes against the general lanes\' 19, while general-lane waits rose from 12 minutes before the change to 19 after it.',
        'General-lane waits rose from 12 minutes to 19 minutes after the express lanes opened.',
        'Thirty percent of fans used the express lanes.'
      ],
      correctAnswer: 1,
      explanation: `The conclusion is two-part — shortened for users AND lengthened for everyone else — so the evidence must show the express advantage and the general-lane before/after rise together, as B does. Choice A supports only the first half, and weakly: 4 minutes alone isn't even shown to be short without a comparison. Choice C supports only the second half; by itself the rise could reflect higher attendance, leaving the lanes uncredited and unblamed. Choice D is a base-rate fact that supports neither clause — it tells you how many fans got the benefit, not whether there was one.`
    },
    {
      id: 'advce3-q2',
      type: 'quiz' as const,
      question: `In her essays, the potter Halima Osei repeatedly denies that craft skill can be transmitted in words. A student claims that Osei's own teaching, as she describes it, relies on staged demonstration rather than explanation — she arranges for students to see what she will not tell them.

Which quotation from Osei's essays most effectively illustrates the student's claim?`,
      options: [
        '"No sentence I have ever spoken has taught a student to center clay."',
        '"My own teacher was nearly silent for my first year, and I resented every week of it."',
        '"Students ask me for the rule, and I tell them that there is no rule."',
        '"When a student\'s cylinders keep collapsing, I sit down at the next wheel and throw one, slowly, without saying that it is for them."'
      ],
      correctAnswer: 3,
      explanation: `The claim requires the positive mechanism — arranged, wordless demonstration — not merely the rejection of words. Choice D shows the staging in detail: she positions herself "at the next wheel," slows the throw so it can be watched, and conceals the pedagogy ("without saying that it is for them") — demonstration deliberately arranged to be seen. Choice A is the trap for topic-matchers: it restates her denial that words teach, which is the *premise* the student's claim builds on, not the teaching practice the claim describes. Choice B describes her teacher's method and her resentment of it — wrong person, and the resentment even cuts against the claim's approving frame. Choice C is words about words: a verbal exchange, with no demonstration anywhere in it.`
    },
    {
      id: 'advce3-q3',
      type: 'quiz' as const,
      question: `Historians have long held that a hilltop fortress fell in a single assault around 1200. Reyhan argues instead that it was abandoned gradually as caravan routes shifted to a coastal road. A student wants archaeological evidence favoring Reyhan's gradual-abandonment account over the assault account.

Which finding, if true, most directly supports Reyhan's account?`,
      options: [
        'The latest occupation layers contain no weapons and no burned material, and the storerooms were emptied of everything portable, with several doorways bricked shut from the outside.',
        'The fortress walls show repairs made in at least four different centuries.',
        'A chronicle from a rival city describes the fortress as the wealthiest stronghold in the region.',
        'A thin layer of ash covers the floors of two rooms near the main gate.'
      ],
      correctAnswer: 0,
      explanation: `Choice A is a package of details each of which the assault account struggles with and the abandonment account predicts: assaults leave weapons and burning, not their absence; emptied storerooms mean residents left with time to pack; doorways bricked "from the outside" mean someone sealed the site and walked away. Choice B shows long occupation and maintenance — true under either account, since a fortress can be repaired for centuries and still fall in an afternoon. Choice C is a rival city's praise of the fortress's wealth, which if anything supplies a motive for assault. Choice D is the wrong-team finding: ash near the gate is the assault account's evidence, and a student citing it would be arguing against Reyhan.`
    },
    {
      id: 'advce3-q4',
      type: 'quiz' as const,
      question: `A grocery chain claims its coupon program is winning new customers. A student examines the redemption data and concludes that the program mostly subsidized purchases its regular customers would have made anyway.

Coupon redemptions: 8,200
Redeemers enrolled in the chain's loyalty program before the campaign: 7,400
Median store visits by redeemers in the year before the campaign: 14

Which choice most effectively uses data from the table to support the student's conclusion?`,
      options: [
        'A total of 8,200 coupons were redeemed during the campaign.',
        'Some coupon redeemers had never shopped at the chain before the campaign.',
        'Of the 8,200 redeemers, 7,400 were already loyalty members, and redeemers had made a median of 14 store visits in the prior year — established regulars collecting a discount.',
        'The 800 redeemers who were not loyalty members made no store visits in the prior year.'
      ],
      correctAnswer: 2,
      explanation: `The conclusion says the discounts went mainly to people who were already customers, so the evidence must characterize who the redeemers were before the campaign — and C does it twice over: 7,400 of 8,200 already enrolled, with a median of 14 prior-year visits. Choice A is the pure headline count: 8,200 redemptions says the program was used, not by whom, and it's the number the chain's own press release would cite. Choice B, if anything, is the chain's evidence — new customers are exactly what the student's conclusion says the program mostly didn't win. Choice D is not in the table: the data give the non-members' count but say nothing about their visit history, and evidence you have to invent supports nothing.`
    }
  ]
}
