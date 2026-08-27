import type { LessonData } from '../registry'

/**
 * Hand-authored interactive lesson — Process of Elimination (SAT Prep).
 * Registry key / DB slug: 'process-of-elimination'.
 * 5 parts, gold-standard structure modeled on the Completing-the-Square pilot:
 * teach → worked examples → interactive practice (multiple-choice + dropdown +
 * input-boxes) → exit quiz. This is a test-taking strategy topic, so concept
 * checks favor multiple-choice and dropdown, with input-boxes used for
 * probability/counting facts. LaTeX uses doubled backslashes (template-literal
 * strings); bare dollar signs in prose are escaped as \\$.
 */
export const parts: LessonData[] = [
  // ───────────────────────── PART 1 ─────────────────────────
  {
    topicSlug: 'process-of-elimination',
    sections: [
      {
        id: 'poe1-intro',
        type: 'text' as const,
        content: `# ❌ Process of Elimination

**Part 1 of 5 — Why Eliminating Beats Searching**

---

### Topics in This Part

| Section |
|---------|
| The SAT is a *choose-the-best-answer* test |
| Why "find the right answer" is the wrong goal |
| The math of eliminating just one choice |

> 🔑 **Key Concept:** On the digital SAT, every multiple-choice question has **exactly one** correct option among four. **Process of Elimination (POE)** is the habit of *crossing out wrong answers* until the right one is all that's left. You don't always have to recognize the right answer — sometimes you just have to out-survive the wrong ones.`,
      },
      {
        id: 'poe1-mindset',
        type: 'text' as const,
        content: `## Two Ways to Attack a Question

Most students attack a question by hunting for the answer that "looks right." That works on easy questions — but on hard ones, two or three choices can all look plausible, and a tempting **trap answer** is often sitting right next to the correct one.

POE flips the goal:

| Mindset | What you ask | When it shines |
|---------|--------------|----------------|
| **Searching** | "Which answer is right?" | Easy questions you fully understand |
| **Eliminating** | "Which answers *can't* be right?" | Hard questions, tricky wording, partial knowledge |

> 💡 The two mindsets work **together**. Eliminate the choices you can rule out, then search among what's left. Even crossing out one option meaningfully improves your odds.`,
      },
      {
        id: 'poe1-odds',
        type: 'input-boxes' as const,
        content: `**The Math of Elimination** 🧮

Every SAT multiple-choice question has **4 options**, exactly **1** correct. If you guess at random:

**1)** With all 4 options in play, your chance of guessing right is $\\frac{1}{?}$ — enter the denominator.
**2)** After you eliminate 1 wrong option (3 left), the denominator becomes $?$.
**3)** After you eliminate 2 wrong options (2 left), the denominator becomes $?$.`,
        exercise: {
          boxes: 3,
          correctAnswers: ['4', '3', '2'],
          hint1: 'With 4 equally likely choices and 1 correct, the probability is 1 out of 4.',
          hint2: 'Eliminating an option removes it from the pool. 4 options minus 1 leaves 3.',
          hint3: 'From 4 options, crossing out 2 leaves 2 — a coin-flip, 1 out of 2.',
          explanation: 'Start at $\\frac{1}{4}$ (25%). Eliminate one wrong choice → $\\frac{1}{3}$ (≈33%). Eliminate two → $\\frac{1}{2}$ (50%). Because the SAT has **no penalty for wrong answers**, every elimination raises your expected score.',
        },
      },
      {
        id: 'poe1-nopenalty',
        type: 'text' as const,
        content: `## No Wrong-Answer Penalty = Always Eliminate, Then Guess

The digital SAT does **not** subtract points for wrong answers. A blank and a wrong answer score the same: **zero**. So you should **never leave a question blank**.

That single fact makes POE risk-free:

- Eliminate everything you can.
- Guess among what remains.
- Move on.

> ⚠️ **The cardinal rule:** Even a pure random guess is better than a blank. A guess *after* eliminating two choices is **twice** as likely to land.`,
      },
      {
        id: 'poe1-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'On the digital SAT, what happens to your score if you answer a question incorrectly?',
              options: [
                'You lose a fraction of a point compared to leaving it blank',
                'Nothing — a wrong answer scores the same as a blank (zero)',
                'You lose a full point',
                'The question is replaced with an easier one',
              ],
              correctAnswer: 1,
              explanation: 'There is no guessing penalty. A wrong answer and a blank both earn zero, so you should always fill in an answer — ideally after eliminating choices.',
            },
            {
              question: 'You can confidently eliminate 2 of the 4 choices. What are your odds of guessing correctly from what remains?',
              options: ['25%', '33%', '50%', '75%'],
              correctAnswer: 2,
              explanation: 'Two choices remain, one correct: $\\frac{1}{2} = 50\\%$. Eliminating choices is the cheapest way to raise your odds.',
            },
          ],
        },
      },
      {
        id: 'poe1-odds-drop',
        type: 'dropdown-select' as const,
        content: `**Match the Odds** 🔽

Match how many choices remain to your chance of guessing correctly.`,
        exercise: {
          dropdowns: [
            { label: 'All 4 choices in play → chance of a correct guess:', options: ['25%', '33%', '50%', '100%'] },
            { label: 'You eliminate 1 wrong choice (3 left) → chance:', options: ['33%', '25%', '50%', '75%'] },
            { label: 'You eliminate 3 wrong choices (1 left) → chance:', options: ['100%', '50%', '75%', '25%'] },
          ],
          correctAnswers: ['25%', '33%', '100%'],
          hint1: 'One correct out of 4 equally likely → $\\frac{1}{4} = 25\\%$.',
          hint2: 'One correct out of 3 remaining → $\\frac{1}{3} \\approx 33\\%$.',
          hint3: 'If only the correct choice is left, you can\'t miss → $\\frac{1}{1} = 100\\%$.',
          explanation: 'Each elimination shrinks the denominator: $\\frac{1}{4}$ (25%) → $\\frac{1}{3}$ (≈33%) → … → $\\frac{1}{1}$ (100%). Every choice you cross out is a measurable boost.',
        },
      },
      {
        id: 'poe1-wrap',
        type: 'text' as const,
        content: `## What You've Got

You now know **why** elimination is the engine of smart test-taking: it converts partial knowledge into better odds on a test that punishes blanks but not guesses.

But *how* do you decide a choice is wrong? That's a skill, and it has rules. In **Part 2** we build your elimination toolkit for the **Reading & Writing** section — where wrong answers leave fingerprints.`,
      },
    ],
  },

  // ───────────────────────── PART 2 ─────────────────────────
  {
    topicSlug: 'process-of-elimination',
    sections: [
      {
        id: 'poe2-intro',
        type: 'text' as const,
        content: `# ❌ Process of Elimination

**Part 2 of 5 — Eliminating on Reading & Writing**

---

> 🔑 **The Idea:** On Reading & Writing, wrong answers are wrong for *predictable reasons*. Learn the four big "tells" and you can cross out trap choices on sight.`,
      },
      {
        id: 'poe2-tells',
        type: 'text' as const,
        content: `## The Four Wrong-Answer "Tells"

| Tell | The choice is wrong because… | How to spot it |
|------|------------------------------|----------------|
| **Too extreme** | It uses absolute words the passage never supports | *always, never, all, none, impossible, prove* |
| **Half-right** | One clause matches the text; the other contradicts it | A true statement glued to a false one |
| **Out of scope** | It's true in the world but **not stated** in the passage | "Sounds smart" but never mentioned |
| **Opposite** | It says the reverse of the passage's point | Flips a relationship or sign of a claim |

> 💡 **Predict first.** Before you read the choices, cover them and answer in your own words. Then eliminate any choice that *doesn't match your prediction*. This stops trap answers from "talking you into" them.`,
      },
      {
        id: 'poe2-extreme',
        type: 'multiple-choice' as const,
        content: `**Spot the Tell** 🎯

A passage says a study "**suggests** a possible link" between sleep and memory.`,
        exercise: {
          questions: [
            {
              question: 'Which answer choice should you eliminate as **too extreme**?',
              options: [
                'The study indicates sleep may support memory.',
                'The study proves sleep is required for all memory.',
                'The study points to a possible sleep–memory connection.',
                'The study reports a tentative association.',
              ],
              correctAnswer: 1,
              explanation: '"Proves," "required," and "all" are absolutes. A study that merely *suggests a possible link* cannot *prove* anything is *required for all* memory. The other three choices match the passage\'s cautious tone.',
            },
            {
              question: 'A choice reads: "The author admires the poet\'s craft but rejects the poem\'s message." The passage praises both the craft AND the message. This is a classic ___ trap.',
              options: ['Out-of-scope trap', 'Half-right trap', 'Opposite trap', 'No trap — it\'s correct'],
              correctAnswer: 1,
              explanation: 'The first half ("admires the craft") is true, but the second half ("rejects the message") contradicts the passage. A half-right answer is **all the way wrong** — one false clause sinks the whole choice.',
            },
          ],
        },
      },
      {
        id: 'poe2-predict',
        type: 'text' as const,
        content: `## Worked Example: Predict, Then Eliminate

> *"Although early critics dismissed the novel as shapeless, modern scholars praise its intricate structure."*
>
> **Q: The passage most strongly suggests that opinions of the novel have…**

**Step 1 — Predict (cover the choices):** opinions *changed / improved over time*.

**Step 2 — Eliminate against the prediction:**

| Choice | Verdict |
|--------|---------|
| (A) remained negative throughout | ❌ **Opposite** — modern scholars *praise* it |
| (B) shifted from criticism to praise | ✅ matches the prediction |
| (C) always celebrated its structure | ❌ **Opposite** — early critics *dismissed* it |
| (D) focused only on its length | ❌ **Out of scope** — length is never discussed |

Three choices die instantly. **(B)** is what's left.

> 💡 Notice you never had to "love" (B). You just had to **kill the other three**.`,
      },
      {
        id: 'poe2-drop',
        type: 'dropdown-select' as const,
        content: `**Diagnose the Wrong Answer** 🔽

For the passage about the novel above, label *why* each wrong choice fails.`,
        exercise: {
          dropdowns: [
            { label: '(A) "remained negative throughout" is wrong because it is…', options: ['Opposite', 'Out of scope', 'Too extreme', 'Correct'] },
            { label: '(D) "focused only on its length" is wrong because it is…', options: ['Out of scope', 'Opposite', 'Half-right', 'Correct'] },
            { label: 'The reliable first move on any R&W question is to…', options: ['Predict before reading the choices', 'Pick the longest choice', 'Pick the first choice that sounds smart', 'Read the choices first, then the passage'] },
          ],
          correctAnswers: ['Opposite', 'Out of scope', 'Predict before reading the choices'],
          hint1: 'Modern scholars *praise* the novel, so "remained negative" reverses the passage.',
          hint2: 'The passage discusses structure and reputation, never the novel\'s length — that idea is imported from outside.',
          hint3: 'Answering in your own words first keeps trap choices from steering you.',
          explanation: '(A) reverses the passage → **Opposite**. (D) raises an idea the text never mentions → **Out of scope**. And the master move is to **predict first**, then eliminate any choice that doesn\'t match.',
        },
      },
      {
        id: 'poe2-count',
        type: 'input-boxes' as const,
        content: `**Count the Survivors** 🧮

Using the four tells, you've labeled a question's choices: (A) **opposite**, (B) **matches your prediction**, (C) **out of scope**, (D) **too extreme**.

**1)** How many choices can you eliminate?
**2)** How many choices are left to pick from?
**3)** With one choice remaining, what is your chance of being right, as a whole-number percent? *(Enter the number only, no % sign.)*`,
        exercise: {
          boxes: 3,
          correctAnswers: ['3', '1', '100'],
          hint1: 'Opposite, out-of-scope, and too-extreme are all wrong — that\'s three you can cut.',
          hint2: 'Four choices minus the three you eliminated leaves one.',
          hint3: 'If only the prediction-matching choice survives, you\'re certain: $\\frac{1}{1} = 100\\%$.',
          explanation: 'Three tells fire on (A), (C), and (D), so you eliminate 3. Only (B) — the choice matching your prediction — survives, giving a 100% confident pick. This is POE at its best: you found the answer by destroying its rivals.',
        },
      },
      {
        id: 'poe2-wrap',
        type: 'text' as const,
        content: `## Reading & Writing Recap

To eliminate on R&W:

1. **Predict** the answer in your own words.
2. Cross out the **too-extreme**, **half-right**, **out-of-scope**, and **opposite** choices.
3. Among survivors, pick the one that best matches the passage's exact wording — not the flashiest one.

Next, in **Part 3**, we turn POE loose on the **Math** section, where wrong answers can be eliminated with arithmetic — no full solution required.`,
      },
    ],
  },

  // ───────────────────────── PART 3 ─────────────────────────
  {
    topicSlug: 'process-of-elimination',
    sections: [
      {
        id: 'poe3-intro',
        type: 'text' as const,
        content: `# ❌ Process of Elimination

**Part 3 of 5 — Eliminating on the Math Section**

---

> 🔑 **The Idea:** Even when you can't solve a math problem the "intended" way, you can often **test the answer choices** or use quick sanity checks to delete the wrong ones.`,
      },
      {
        id: 'poe3-backsolve',
        type: 'text' as const,
        content: `## Strategy 1 — Backsolving (Plug In the Choices)

When a question asks "*what value of $x$…*" and gives numeric choices, you can **plug each choice back into the equation** and keep the one that works. Start with the **middle value** — if it's too big or too small, you can often eliminate everything on one side at once.

### Worked Example

> Solve: $\\;3x - 7 = 2x + 5$.
> Choices: (A) $2$ (B) $6$ (C) $12$ (D) $14$

Test **(C) $x = 12$**: left $= 3(12)-7 = 29$, right $= 2(12)+5 = 29$. ✅ **Match.**

If you'd tested (A) $x=2$: left $= -1$, right $= 9$ — left is far too small, so the answer must be a **larger** $x$. That alone eliminates (A) **and** (B).

> 💡 Backsolving turns algebra into arithmetic. You don't need to *isolate* $x$ — you just need to *recognize* it.`,
      },
      {
        id: 'poe3-sanity',
        type: 'text' as const,
        content: `## Strategy 2 — Sanity Checks (Sign, Size, Units)

You can kill wrong choices without solving by asking: *does this answer even make sense?*

| Check | Eliminate any choice that… |
|-------|----------------------------|
| **Sign** | is negative when the answer must be positive (a length, a count, an area) |
| **Size / ballpark** | is wildly bigger or smaller than a rough estimate |
| **Parity / form** | is a decimal when the answer must be a whole number, or vice versa |
| **Units / labels** | answers the wrong question (e.g., gives diameter when asked for radius) |

### Worked Example

> A rectangle's area is $48$ and its length is $8$. What is its width?
> Choices: (A) $-6$ (B) $6$ (C) $40$ (D) $384$

- (A) $-6$: a width can't be **negative** → eliminate.
- (D) $384 = 48 \\times 8$: that's multiplying, not dividing — far **too big** → eliminate.
- (C) $40 = 48 - 8$: subtracting, not dividing → wrong **operation**, too big → eliminate.

Only **(B) $6$** survives — and indeed $8 \\times 6 = 48$. ✅`,
      },
      {
        id: 'poe3-backsolve-drill',
        type: 'input-boxes' as const,
        content: `**Backsolve It** 🧮

Use the choices, not algebra.

**1)** Which value of $x$ solves $2x + 3 = 11$?  Choices $\\{2, 4, 6, 8\\}$ — enter the one that works.
**2)** A square has area $49$. Which side length is possible?  Choices $\\{-7, 7, 24.5, 2401\\}$ — enter the only sensible one.`,
        exercise: {
          boxes: 2,
          correctAnswers: ['4', '7'],
          hint1: 'Plug each choice in: $2(4)+3 = 11$. ✓ The others miss.',
          hint2: 'A side length must be positive, and a square\'s side is $\\sqrt{\\text{area}} = \\sqrt{49} = 7$. Eliminate $-7$ (negative), $24.5$ (= half of 49), and $2401$ (= $49^2$).',
          hint3: 'Sanity checks: lengths are positive, and they should be roughly the square root of the area — not the area times itself.',
          explanation: '1) $x = 4$ because $2(4)+3 = 11$. 2) Side $= \\sqrt{49} = 7$; the others fail the sign and size sanity checks.',
        },
      },
      {
        id: 'poe3-drop',
        type: 'dropdown-select' as const,
        content: `**Eliminate Without Solving** 🔽

A word problem asks for the **number of students** in a class, and one choice is a decimal.`,
        exercise: {
          dropdowns: [
            { label: 'A choice of "23.5 students" should be…', options: ['Eliminated — a count must be a whole number', 'Kept — decimals are usually right', 'Eliminated — it is too large', 'Kept — it is the middle value'] },
            { label: 'For backsolving a "solve for $x$" question, the smartest choice to test first is the…', options: ['Middle value', 'Largest value', 'Smallest value', 'First listed'] },
            { label: 'If a length comes out negative, you should…', options: ['Eliminate it', 'Take its absolute value and keep it', 'Pick it anyway', 'Add the other choices'] },
          ],
          correctAnswers: ['Eliminated — a count must be a whole number', 'Middle value', 'Eliminate it'],
          hint1: 'You cannot have a fractional person — a count of students must be a non-negative integer.',
          hint2: 'Testing the middle value tells you which *direction* to go and can rule out two choices at once.',
          hint3: 'Physical lengths, areas, counts, and times are never negative on the SAT.',
          explanation: 'A count must be a whole number, so "23.5 students" is out. Backsolve from the **middle** value to halve the field in one test. A negative length is impossible, so eliminate it.',
        },
      },
      {
        id: 'poe3-sanity-check',
        type: 'multiple-choice' as const,
        content: `**Sanity-Check Practice** 🎯`,
        exercise: {
          questions: [
            {
              question: 'A problem asks for the probability that a marble is red. Which answer choice can you eliminate immediately by sanity check?',
              options: ['$0.25$', '$\\frac{1}{3}$', '$1.4$', '$0.8$'],
              correctAnswer: 2,
              explanation: 'A probability must lie between $0$ and $1$. Since $1.4 > 1$, it is impossible — eliminate it without any calculation. The others are all valid probabilities.',
            },
            {
              question: 'You estimate an answer should be "a little under 100." Which choice does a ballpark check let you eliminate?',
              options: ['$92$', '$98$', '$880$', '$95$'],
              correctAnswer: 2,
              explanation: '$880$ is nearly nine times your estimate — far out of the ballpark, a likely place-value or operation slip. The values in the low-to-mid 90s all fit "a little under 100."',
            },
          ],
        },
      },
      {
        id: 'poe3-wrap',
        type: 'text' as const,
        content: `## Math Recap

On Math, you have two elimination engines:

1. **Backsolve** — plug the numeric choices into the equation; keep the one that fits. Start in the middle.
2. **Sanity-check** — delete choices with the wrong **sign**, **size**, **form**, or **units**.

In **Part 4**, we cover *when* to deploy POE and the traps that elimination itself can fall into — so you eliminate the right things.`,
      },
    ],
  },

  // ───────────────────────── PART 4 ─────────────────────────
  {
    topicSlug: 'process-of-elimination',
    sections: [
      {
        id: 'poe4-intro',
        type: 'text' as const,
        content: `# ❌ Process of Elimination

**Part 4 of 5 — Timing, Discipline & Elimination Traps**

---

> 🔑 **The Idea:** POE is powerful but not free — it costs time, and it can backfire if you eliminate carelessly. This part is about *using elimination wisely*.`,
      },
      {
        id: 'poe4-when',
        type: 'text' as const,
        content: `## When to Fully Eliminate vs. Guess-and-Go

The digital SAT is timed, and not every question deserves four full eliminations.

| Situation | Best move |
|-----------|-----------|
| You see the answer instantly | **Pick it** — don't waste time eliminating |
| Two choices look tempting | Eliminate to a **2-way split**, then decide |
| You're stuck and time is short | Eliminate what you can, **guess**, flag it, move on |
| You have **no idea** | Eliminate the obviously-wrong, guess a **letter**, never blank |

> ⚠️ **Time discipline:** Don't spend three minutes eliminating on a question you could guess in ten seconds. POE is a tool, not a ritual. The goal is **more right answers per minute**, not perfect logic on every item.`,
      },
      {
        id: 'poe4-traps',
        type: 'text' as const,
        content: `## Three Ways Elimination Backfires

POE fails when you eliminate for the *wrong reasons*. Watch for:

1. **Eliminating the unfamiliar.** A choice with a hard vocabulary word or an unusual form isn't wrong *because* it's unfamiliar. Trap-writers hide correct answers behind big words.
2. **Eliminating "too simple."** On a hard question, students cross out the plain answer assuming it "can't be that easy." Sometimes the simple answer is simply correct.
3. **Eliminating from a misread.** If you eliminate based on a misremembered passage or a sign error, you can delete the *correct* answer. When all four seem wrong, **re-read the question** — you probably eliminated too fast.

> 💡 **Rule of thumb:** Eliminate a choice only when you can name a *concrete reason* it's wrong ("negative length," "contradicts line 12," "too extreme"). "It feels off" is not a reason.`,
      },
      {
        id: 'poe4-check',
        type: 'multiple-choice' as const,
        content: `**Discipline Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'You\'re down to two choices and the clock is running low on a question you find hard. What\'s the best move?',
              options: [
                'Leave it blank to avoid a wrong answer',
                'Guess between the two, flag the question, and move on',
                'Spend two more minutes until you\'re certain',
                'Pick the longer of the two choices automatically',
              ],
              correctAnswer: 1,
              explanation: 'With no penalty for wrong answers, a 50/50 guess beats a blank. Flag it so you can return if time allows, but bank the guess and protect your time for other questions.',
            },
            {
              question: 'Which is a BAD reason to eliminate an answer choice?',
              options: [
                'It gives a negative value for a length',
                'It directly contradicts a line in the passage',
                'It contains an unfamiliar vocabulary word',
                'It uses the absolute word "never," unsupported by the text',
              ],
              correctAnswer: 2,
              explanation: 'Unfamiliarity is not evidence of wrongness — correct answers often hide behind hard words. The other three are concrete, valid reasons to eliminate.',
            },
            {
              question: 'You\'ve eliminated all four choices on a question. What does this most likely mean?',
              options: [
                'The question has no correct answer',
                'You misread the question or made an error — re-read it',
                'You should leave it blank',
                'All four are equally correct',
              ],
              correctAnswer: 1,
              explanation: 'Every SAT question has exactly one correct choice. Eliminating all four means you eliminated too aggressively or misread something. Re-read the question stem and check your reasoning.',
            },
          ],
        },
      },
      {
        id: 'poe4-letter',
        type: 'input-boxes' as const,
        content: `**Last-Resort Math** 🧮

You're out of time with **5 questions** left and truly no idea on any of them. You guess randomly on all 5.

**1)** Each question has 4 choices, so your chance of any one being right is $\\frac{1}{?}$ — enter the denominator.
**2)** On average, how many of the 5 would you expect to get right? *(Compute $5 \\times \\frac{1}{4}$ as a decimal.)*
**3)** How many of the 5 should you leave blank to be safe?`,
        exercise: {
          boxes: 3,
          correctAnswers: ['4', '1.25', '0'],
          hint1: 'Four choices, one correct → probability $\\frac{1}{4}$.',
          hint2: '$5 \\times \\frac{1}{4} = \\frac{5}{4} = 1.25$ expected correct — for free.',
          hint3: 'With no guessing penalty, a blank can never beat a guess. Leave **zero** blank.',
          explanation: 'Random guessing on 5 four-choice questions yields about $5 \\times \\frac{1}{4} = 1.25$ correct on average — points you\'d otherwise throw away. Because there is no penalty, you should leave **0** blank. Always bubble something.',
        },
      },
      {
        id: 'poe4-timing-drop',
        type: 'dropdown-select' as const,
        content: `**Pick the Right Move** 🔽

Choose the smartest response to each situation.`,
        exercise: {
          dropdowns: [
            { label: 'You see the correct answer instantly. You should…', options: ['Pick it and move on', 'Eliminate the other three first anyway', 'Re-read the passage to be sure', 'Flag it for later'] },
            { label: 'You can\'t decide between the last two choices and time is short. You should…', options: ['Guess between them and flag it', 'Leave it blank', 'Eliminate the unfamiliar one', 'Pick the longer one'] },
            { label: 'You\'ve eliminated all four choices. This means you should…', options: ['Re-read the stem — you made an error', 'Leave it blank', 'Pick choice A by default', 'Report a broken question'] },
          ],
          correctAnswers: ['Pick it and move on', 'Guess between them and flag it', 'Re-read the stem — you made an error'],
          hint1: 'POE is a tool, not a ritual — don\'t eliminate when you already know the answer.',
          hint2: 'A 50/50 guess beats a blank; flag it so you can revisit if time allows.',
          hint3: 'Every question has exactly one correct choice, so eliminating all four signals a misread.',
          explanation: 'Match effort to the question: take an obvious answer, guess-and-flag on a hard 50/50, and re-read whenever you somehow eliminate everything — you eliminated too fast.',
        },
      },
      {
        id: 'poe4-wrap',
        type: 'text' as const,
        content: `## Discipline Recap

- Match your effort to the question: instant answer → take it; tough call → eliminate to a 2-way split; stuck → guess and flag.
- Eliminate only with a **concrete reason**, never because a choice is unfamiliar, too simple, or "feels off."
- If all four die, you misread — **re-read the stem**.
- Never leave a blank.

In **Part 5**, we combine everything in mixed practice and finish with a 3-question **Exit Quiz**.`,
      },
    ],
  },

  // ───────────────────────── PART 5 ─────────────────────────
  {
    topicSlug: 'process-of-elimination',
    sections: [
      {
        id: 'poe5-intro',
        type: 'text' as const,
        content: `# ❌ Process of Elimination

**Part 5 of 5 — Mixed Practice & Mastery Check**

---

You can now (1) eliminate to improve your odds, (2) spot R&W wrong-answer tells, (3) backsolve and sanity-check on Math, and (4) use POE with timing discipline. Let's put it together.`,
      },
      {
        id: 'poe5-summary',
        type: 'text' as const,
        content: `## Quick Reference

| Goal | Key move |
|------|----------|
| Improve guessing odds | Eliminate choices → never leave a blank |
| Reading & Writing | **Predict**, then cut **too-extreme / half-right / out-of-scope / opposite** |
| Math | **Backsolve** the choices; **sanity-check** sign, size, form, units |
| Timing | Effort to match the question; guess + flag when stuck |
| Safety | Eliminate only with a concrete reason; if all 4 die, re-read |

> ⚠️ Remember: a half-right answer is **all** wrong, unfamiliar ≠ wrong, and a wrong answer never costs more than a blank — so always bubble something.`,
      },
      {
        id: 'poe5-mixed',
        type: 'multiple-choice' as const,
        content: `**Mixed Practice** 🎯`,
        exercise: {
          questions: [
            {
              question: 'A passage states a policy "had mixed results." Which answer choice is a **too-extreme** trap to eliminate?',
              options: [
                'The policy produced both gains and setbacks.',
                'The policy was a complete and total failure.',
                'The policy had uneven outcomes.',
                'The policy succeeded in some areas.',
              ],
              correctAnswer: 1,
              explanation: '"Complete and total failure" is an absolute that "mixed results" cannot support. The other three all reflect a balanced, mixed outcome.',
            },
            {
              question: 'You must solve $4x - 1 = 11$ but want to backsolve. Testing the choices, which value of $x$ works?',
              options: ['$2$', '$3$', '$4$', '$5$'],
              correctAnswer: 1,
              explanation: 'Plug in $x=3$: $4(3) - 1 = 12 - 1 = 11$. ✓ No algebra needed — just test the choices.',
            },
          ],
        },
      },
      {
        id: 'poe5-dropdown',
        type: 'dropdown-select' as const,
        content: `**One Last Diagnosis** 🔽

A geometry problem asks for the **area** of a triangle (a positive number of square units). Classify each choice.`,
        exercise: {
          dropdowns: [
            { label: 'A choice of "$-14$" should be…', options: ['Eliminated — area can\'t be negative', 'Kept — it\'s the middle value', 'Eliminated — it\'s too small only', 'Kept — areas can be negative'] },
            { label: 'Two choices remain and time is short. You should…', options: ['Guess between them and move on', 'Leave it blank', 'Restart the whole section', 'Always pick the larger number'] },
            { label: 'A choice that uses the word "always" in a passage that says "often" is a…', options: ['Too-extreme trap', 'Correct answer', 'Out-of-scope match', 'Backsolving error'] },
          ],
          correctAnswers: ['Eliminated — area can\'t be negative', 'Guess between them and move on', 'Too-extreme trap'],
          hint1: 'Area measures space; it is never negative.',
          hint2: 'With no penalty, a 50/50 guess beats a blank — bank it and keep your pace.',
          hint3: '"Always" is an absolute; "often" is not. The choice overstates the passage.',
          explanation: 'A negative area is impossible → eliminate. With two left and little time → guess and move on. Swapping "often" for "always" overstates the text → a too-extreme trap.',
        },
      },
      {
        id: 'poe5-exit-quiz',
        type: 'multiple-choice' as const,
        content: `**Exit Quiz** ✅

Answer all three to finish the lesson.`,
        exercise: {
          questions: [
            {
              question: 'You eliminate 2 of 4 choices, then guess. Compared with a blank, your expected gain is best described as:',
              options: [
                'Zero — guessing and blanks are equal',
                'A 50% chance at the point, with no downside',
                'A 25% chance, worse than a blank',
                'Negative, because wrong answers lose points',
              ],
              correctAnswer: 1,
              explanation: 'Two choices remain (one correct), so guessing gives a 50% chance. There is no penalty for wrong answers, so a guess can only help relative to a blank.',
            },
            {
              question: 'Which choice is the safest to eliminate on a Reading & Writing question whose passage is cautious and tentative?',
              options: [
                'A choice using "may" and "suggests"',
                'A choice using "proves" and "always"',
                'A choice that restates the passage\'s main point',
                'A choice that closely matches your prediction',
              ],
              correctAnswer: 1,
              explanation: '"Proves" and "always" are absolutes that a tentative passage cannot support — a too-extreme trap. The other choices match a cautious tone or your prediction.',
            },
            {
              question: 'On a Math question, a choice gives a decimal but the answer must be a whole number of people. You should:',
              options: [
                'Keep it — decimals are usually correct',
                'Eliminate it — a count of people must be a whole number',
                'Take its absolute value',
                'Pick it because it looks precise',
              ],
              correctAnswer: 1,
              explanation: 'A count of people is a non-negative integer, so a decimal answer fails the form sanity-check and can be eliminated immediately.',
            },
          ],
        },
      },
    ],
  },
]
