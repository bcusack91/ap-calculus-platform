export const batchCards: { slug: string; cards: { front: string; back: string; hint?: string }[] }[] = [
  {
    slug: "logarithmic-functions-precalc",
    cards: [
      {
        front: "Define $\\log_b(x)$ and state its relationship to exponentials.",
        back: "$\\log_b(x) = y$ means $b^y = x$, where $b > 0$, $b \\neq 1$, and $x > 0$. The logarithm is the inverse of the exponential function $b^x$, so it answers \"to what power must $b$ be raised to get $x$?\"",
        hint: "Exponent you solve for.",
      },
      {
        front: "What are the domain and range of $f(x) = \\log_b(x)$ for $b > 1$?",
        back: "Domain is $(0, \\infty)$ and range is $(-\\infty, \\infty)$. The graph has a vertical asymptote at $x = 0$ and passes through $(1, 0)$ and $(b, 1)$.",
        hint: "Inputs must be positive.",
      },
      {
        front: "State the three main logarithm laws (product, quotient, power).",
        back: "$\\log_b(MN) = \\log_b M + \\log_b N$; $\\log_b\\!\\left(\\frac{M}{N}\\right) = \\log_b M - \\log_b N$; $\\log_b(M^k) = k\\log_b M$. These hold for positive $M, N$ and valid base $b$.",
        hint: "Multiply adds, divide subtracts, power pulls down.",
      },
      {
        front: "What is the change-of-base formula and when is it used?",
        back: "$\\log_b(x) = \\frac{\\log_c(x)}{\\log_c(b)}$ for any valid new base $c$. Use it to evaluate logs on a calculator (with $c = 10$ or $c = e$) or to compare logs of different bases.",
        hint: "New base goes top and bottom.",
      },
      {
        front: "What do $\\ln(x)$ and $\\log(x)$ mean by convention?",
        back: "$\\ln(x) = \\log_e(x)$ is the natural log with base $e \\approx 2.718$. $\\log(x)$ with no written base means $\\log_{10}(x)$, the common log.",
        hint: "e versus 10.",
      },
      {
        front: "Evaluate $\\log_2(32)$ and explain the steps.",
        back: "Ask \"$2$ to what power is $32$?\" Since $2^5 = 32$, the answer is $5$. Rewriting as an exponential equation is the fastest method for clean powers.",
        hint: "Powers of 2.",
      },
      {
        front: "Solve $\\log_3(x) + \\log_3(x - 2) = 1$.",
        back: "Combine: $\\log_3(x(x-2)) = 1$, so $x(x-2) = 3^1 = 3$, giving $x^2 - 2x - 3 = 0$, $(x-3)(x+1) = 0$. Reject $x = -1$ (makes argument negative); answer is $x = 3$.",
        hint: "Combine first, then check domain.",
      },
      {
        front: "What are the inverse (cancellation) identities for logs and exponentials?",
        back: "$\\log_b(b^x) = x$ for all real $x$, and $b^{\\log_b(x)} = x$ for $x > 0$. These let you cancel a log against an exponential of the same base.",
        hint: "Same base undoes itself.",
      },
      {
        front: "What are $\\log_b(1)$ and $\\log_b(b)$ for any valid base?",
        back: "$\\log_b(1) = 0$ because $b^0 = 1$, and $\\log_b(b) = 1$ because $b^1 = b$. These two values anchor every log graph.",
        hint: "Anchor points.",
      },
      {
        front: "Common trap: is $\\log_b(M + N)$ equal to $\\log_b M + \\log_b N$?",
        back: "No. There is no log law for the log of a sum. Only products turn into sums: $\\log_b(MN) = \\log_b M + \\log_b N$. Do not split $\\log_b(M + N)$.",
        hint: "Sum inside cannot be split.",
      },
      {
        front: "How do you solve an exponential equation like $5^x = 17$ using logs?",
        back: "Take a log of both sides: $x\\ln 5 = \\ln 17$, so $x = \\frac{\\ln 17}{\\ln 5} \\approx 1.76$. Any base works; natural log is common for calculator use.",
        hint: "Log both sides, then power rule.",
      },
      {
        front: "What is the relationship between the graphs of $y = b^x$ and $y = \\log_b(x)$?",
        back: "They are reflections of each other across the line $y = x$ because they are inverse functions. The exponential's horizontal asymptote $y = 0$ becomes the log's vertical asymptote $x = 0$.",
        hint: "Reflect across y = x.",
      },
      {
        front: "Worked example: condense $2\\log x - \\frac{1}{2}\\log y$ into a single log.",
        back: "Apply the power rule: $\\log(x^2) - \\log(y^{1/2})$, then the quotient rule: $\\log\\!\\left(\\frac{x^2}{\\sqrt{y}}\\right)$.",
        hint: "Coefficients become exponents first.",
      },
    ],
  },
  {
    slug: "trigonometric-functions-precalc",
    cards: [
      {
        front: "Define the six trig ratios using SOH-CAH-TOA in a right triangle.",
        back: "$\\sin\\theta = \\frac{\\text{opp}}{\\text{hyp}}$, $\\cos\\theta = \\frac{\\text{adj}}{\\text{hyp}}$, $\\tan\\theta = \\frac{\\text{opp}}{\\text{adj}}$. The reciprocals are $\\csc\\theta = \\frac{1}{\\sin\\theta}$, $\\sec\\theta = \\frac{1}{\\cos\\theta}$, $\\cot\\theta = \\frac{1}{\\tan\\theta}$.",
        hint: "Opposite, adjacent, hypotenuse.",
      },
      {
        front: "How are sine and cosine defined on the unit circle?",
        back: "For a point on the unit circle at angle $\\theta$, the coordinates are $(\\cos\\theta, \\sin\\theta)$. Thus $\\cos\\theta$ is the x-coordinate and $\\sin\\theta$ is the y-coordinate, valid for any angle, not just acute ones.",
        hint: "(x, y) = (cos, sin).",
      },
      {
        front: "Convert between degrees and radians.",
        back: "Multiply degrees by $\\frac{\\pi}{180}$ to get radians; multiply radians by $\\frac{180}{\\pi}$ to get degrees. For example, $180^\\circ = \\pi$ rad and $90^\\circ = \\frac{\\pi}{2}$ rad.",
        hint: "180 degrees equals pi.",
      },
      {
        front: "State the Pythagorean identity and its two derived forms.",
        back: "$\\sin^2\\theta + \\cos^2\\theta = 1$. Dividing by $\\cos^2\\theta$ gives $\\tan^2\\theta + 1 = \\sec^2\\theta$; dividing by $\\sin^2\\theta$ gives $1 + \\cot^2\\theta = \\csc^2\\theta$.",
        hint: "Comes from the unit circle.",
      },
      {
        front: "Give the exact values of sin and cos at $0, \\frac{\\pi}{6}, \\frac{\\pi}{4}, \\frac{\\pi}{3}, \\frac{\\pi}{2}$.",
        back: "$\\sin$: $0, \\frac{1}{2}, \\frac{\\sqrt2}{2}, \\frac{\\sqrt3}{2}, 1$. $\\cos$: $1, \\frac{\\sqrt3}{2}, \\frac{\\sqrt2}{2}, \\frac{1}{2}, 0$. The sine values increase as $\\frac{\\sqrt{0}}{2}$ to $\\frac{\\sqrt{4}}{2}$.",
        hint: "sqrt(0..4)/2 pattern.",
      },
      {
        front: "For $y = A\\sin(B(x - C)) + D$, identify amplitude, period, phase shift, and midline.",
        back: "Amplitude is $|A|$; period is $\\frac{2\\pi}{|B|}$; phase (horizontal) shift is $C$; vertical shift (midline) is $y = D$. The graph oscillates between $D - |A|$ and $D + |A|$.",
        hint: "B controls period, C shifts left/right.",
      },
      {
        front: "What is the period of tangent, and where are its vertical asymptotes?",
        back: "$\\tan x$ has period $\\pi$. Its vertical asymptotes occur where $\\cos x = 0$, i.e., at $x = \\frac{\\pi}{2} + k\\pi$ for integer $k$, because $\\tan x = \\frac{\\sin x}{\\cos x}$.",
        hint: "Undefined where cosine is zero.",
      },
      {
        front: "How does the sign of each trig function vary by quadrant (ASTC rule)?",
        back: "Quadrant I: all positive. Quadrant II: only $\\sin$ (and $\\csc$) positive. Quadrant III: only $\\tan$ (and $\\cot$) positive. Quadrant IV: only $\\cos$ (and $\\sec$) positive. Mnemonic: All Students Take Calculus.",
        hint: "ASTC counterclockwise.",
      },
      {
        front: "What is a reference angle and how do you use it?",
        back: "The reference angle is the acute angle between the terminal side and the x-axis. You find a trig value's magnitude using the reference angle, then apply the correct sign from the quadrant (ASTC).",
        hint: "Acute angle to the x-axis.",
      },
      {
        front: "State the even/odd symmetry of sine, cosine, and tangent.",
        back: "Cosine is even: $\\cos(-x) = \\cos x$. Sine is odd: $\\sin(-x) = -\\sin x$. Tangent is odd: $\\tan(-x) = -\\tan x$.",
        hint: "Cosine is the even one.",
      },
      {
        front: "Common trap: does increasing $B$ in $\\sin(Bx)$ stretch or compress the graph?",
        back: "A larger $B$ compresses the graph horizontally because the period $\\frac{2\\pi}{|B|}$ shrinks. Students often wrongly expect a larger number to stretch it.",
        hint: "Period and B move oppositely.",
      },
      {
        front: "What are the domains of arcsin, arccos, and arctan, and their output ranges?",
        back: "Inputs: $\\arcsin$ and $\\arccos$ take $[-1, 1]$; $\\arctan$ takes all reals. Outputs: $\\arcsin \\in [-\\frac{\\pi}{2}, \\frac{\\pi}{2}]$, $\\arccos \\in [0, \\pi]$, $\\arctan \\in (-\\frac{\\pi}{2}, \\frac{\\pi}{2})$.",
        hint: "Restricted ranges keep inverses functions.",
      },
      {
        front: "Worked example: a sinusoid has max 7, min 1. Find amplitude and midline.",
        back: "Midline $D = \\frac{\\text{max} + \\text{min}}{2} = \\frac{7 + 1}{2} = 4$. Amplitude $|A| = \\frac{\\text{max} - \\text{min}}{2} = \\frac{7 - 1}{2} = 3$.",
        hint: "Average and half-range.",
      },
      {
        front: "Solve $2\\sin x = 1$ for $x$ in $[0, 2\\pi)$.",
        back: "$\\sin x = \\frac{1}{2}$, so $x = \\frac{\\pi}{6}$ (Quadrant I) and $x = \\frac{5\\pi}{6}$ (Quadrant II), where sine is positive.",
        hint: "Sine positive in QI and QII.",
      },
    ],
  },
  {
    slug: "sequences-series-precalc",
    cards: [
      {
        front: "What distinguishes an arithmetic sequence from a geometric one?",
        back: "An arithmetic sequence adds a constant common difference $d$ between terms; a geometric sequence multiplies by a constant common ratio $r$. Check by subtracting (arithmetic) or dividing (geometric) consecutive terms.",
        hint: "Add d versus multiply r.",
      },
      {
        front: "State the explicit formula for the nth term of an arithmetic sequence.",
        back: "$a_n = a_1 + (n - 1)d$, where $a_1$ is the first term, $d$ is the common difference, and $n$ is the term number. Use it to jump directly to any term.",
        hint: "Start plus steps times d.",
      },
      {
        front: "State the explicit formula for the nth term of a geometric sequence.",
        back: "$a_n = a_1 \\cdot r^{\\,n-1}$, where $a_1$ is the first term, $r$ is the common ratio, and $n$ is the term number.",
        hint: "One fewer power than the term index.",
      },
      {
        front: "What is the sum formula for a finite arithmetic series?",
        back: "$S_n = \\frac{n}{2}(a_1 + a_n)$, the number of terms times the average of the first and last term. Equivalently $S_n = \\frac{n}{2}\\big(2a_1 + (n-1)d\\big)$ when $a_n$ is unknown.",
        hint: "n times the average of ends.",
      },
      {
        front: "What is the sum formula for a finite geometric series?",
        back: "$S_n = a_1 \\cdot \\frac{1 - r^n}{1 - r}$ for $r \\neq 1$, where $a_1$ is the first term, $r$ the ratio, and $n$ the number of terms.",
        hint: "1 minus r to the n, over 1 minus r.",
      },
      {
        front: "When does an infinite geometric series converge, and to what sum?",
        back: "It converges only when $|r| < 1$, to $S = \\frac{a_1}{1 - r}$. If $|r| \\geq 1$ the series diverges (has no finite sum).",
        hint: "Ratio must be a proper fraction.",
      },
      {
        front: "What is sigma (summation) notation and how do you read its parts?",
        back: "$\\sum_{k=1}^{n} a_k$ means add $a_k$ for $k$ from the lower index $1$ to the upper index $n$. The index variable $k$ is plugged into the formula $a_k$ for each integer in range.",
        hint: "Bottom and top give the range.",
      },
      {
        front: "What is a recursive formula, and give an example.",
        back: "A recursive formula defines each term using previous term(s) plus a starting value. Example (arithmetic): $a_1 = 3$, $a_n = a_{n-1} + 5$. You must know prior terms to compute the next.",
        hint: "Needs a seed term.",
      },
      {
        front: "Evaluate $\\sum_{k=1}^{4} (2k + 1)$.",
        back: "Plug in $k = 1,2,3,4$: $3 + 5 + 7 + 9 = 24$. Listing terms is safest for short finite sums.",
        hint: "Add the four outputs.",
      },
      {
        front: "Worked example: find the 10th term of $2, 6, 18, 54, \\dots$",
        back: "Geometric with $a_1 = 2$, $r = 3$. So $a_{10} = 2 \\cdot 3^{9} = 2 \\cdot 19683 = 39366$.",
        hint: "Ratio is 3.",
      },
      {
        front: "Common trap: in $a_n = a_1 r^{n-1}$, why is the exponent $n - 1$ not $n$?",
        back: "Because the first term $a_1$ uses zero multiplications by $r$ (exponent $0$). The exponent counts steps taken from the first term, which is one less than the term number.",
        hint: "First term has no multiplications yet.",
      },
      {
        front: "What is a partial sum, and how does it relate to an infinite series?",
        back: "A partial sum $S_n$ adds the first $n$ terms only. An infinite series equals the limit of the partial sums as $n \\to \\infty$; if that limit exists and is finite, the series converges to it.",
        hint: "Limit of finite sums.",
      },
      {
        front: "Express the repeating decimal $0.\\overline{4}$ as a fraction using an infinite series.",
        back: "$0.\\overline{4} = 0.4 + 0.04 + \\dots$, geometric with $a_1 = 0.4$, $r = 0.1$. Sum $= \\frac{0.4}{1 - 0.1} = \\frac{0.4}{0.9} = \\frac{4}{9}$.",
        hint: "Ratio 0.1, use the convergence formula.",
      },
    ],
  },
  {
    slug: "mood-psychotic-disorders",
    cards: [
      {
        front: "What defines a major depressive episode (MDE)?",
        back: "At least 2 weeks of depressed mood and/or loss of interest (anhedonia), plus enough of the SIG-E-CAPS symptoms (sleep, interest, guilt, energy, concentration, appetite, psychomotor, suicidality) to total five symptoms, causing impairment.",
        hint: "Two-week minimum, five symptoms.",
      },
      {
        front: "What is the key difference between bipolar I and bipolar II disorder?",
        back: "Bipolar I requires at least one full manic episode (which may include psychosis or hospitalization). Bipolar II requires at least one hypomanic episode plus a major depressive episode, but never a full manic episode.",
        hint: "Mania vs hypomania.",
      },
      {
        front: "Define a manic episode by duration and core features.",
        back: "A manic episode is at least 1 week (or any duration if hospitalization is needed) of abnormally elevated, expansive, or irritable mood plus increased energy, with three or more symptoms (DIG FAST) causing marked impairment or psychosis.",
        hint: "One week, marked impairment.",
      },
      {
        front: "How does hypomania differ from full mania?",
        back: "Hypomania lasts at least 4 days, has the same symptom set but is less severe: no marked impairment, no psychosis, and no hospitalization. The change is observable by others but does not wreck functioning.",
        hint: "Four days, no psychosis, milder.",
      },
      {
        front: "What does the mnemonic DIG FAST capture?",
        back: "Manic symptoms: Distractibility, Indiscretion (risky pleasurable activity), Grandiosity, Flight of ideas, Activity increase, Sleep decreased (less need), Talkativeness (pressured speech).",
        hint: "Mania checklist.",
      },
      {
        front: "What are the two symptom categories of schizophrenia, with examples?",
        back: "Positive symptoms add experiences: hallucinations, delusions, disorganized speech/behavior. Negative symptoms subtract normal functioning: flat affect, avolition, alogia, anhedonia, social withdrawal.",
        hint: "Added versus taken away.",
      },
      {
        front: "What are the diagnostic criteria for schizophrenia (duration and symptoms)?",
        back: "Two or more characteristic symptoms (at least one must be delusions, hallucinations, or disorganized speech) for a significant portion of 1 month, with continuous signs of disturbance for at least 6 months.",
        hint: "One month active, six months total.",
      },
      {
        front: "Distinguish schizophreniform disorder, schizophrenia, and brief psychotic disorder by duration.",
        back: "Brief psychotic disorder lasts 1 day to less than 1 month with full return to baseline. Schizophreniform lasts 1 to 6 months. Schizophrenia requires 6 months or more of disturbance.",
        hint: "Less than 1 month / 1-6 months / 6+ months.",
      },
      {
        front: "What is schizoaffective disorder?",
        back: "A psychotic disorder featuring a major mood episode (depressive or manic) concurrent with schizophrenia symptoms, PLUS at least 2 weeks of psychotic symptoms occurring without prominent mood symptoms. The psychosis is not confined to mood episodes.",
        hint: "Psychosis persists outside mood episodes.",
      },
      {
        front: "What is the dopamine hypothesis of schizophrenia?",
        back: "Positive symptoms are linked to excess dopamine activity in the mesolimbic pathway, while negative symptoms relate to low dopamine in the mesocortical pathway. Most antipsychotics block dopamine D2 receptors.",
        hint: "Too much mesolimbic dopamine.",
      },
      {
        front: "Common trap: how do you tell a delusion from a hallucination?",
        back: "A delusion is a fixed false belief (e.g., believing one is being poisoned). A hallucination is a false sensory perception (e.g., hearing voices). Delusions are beliefs; hallucinations are perceptions.",
        hint: "Belief vs perception.",
      },
      {
        front: "What is the difference between persistent depressive disorder (dysthymia) and MDD?",
        back: "Persistent depressive disorder is chronic low-grade depressed mood lasting at least 2 years (1 year in children) with fewer symptoms. MDD is more severe but episodic, defined over a 2-week minimum.",
        hint: "Two years chronic vs two-week episodes.",
      },
      {
        front: "What is cyclothymic disorder?",
        back: "At least 2 years (1 year in youth) of numerous periods of hypomanic and depressive symptoms that never meet full criteria for hypomanic, manic, or major depressive episodes.",
        hint: "Chronic mild mood swings, sub-threshold.",
      },
      {
        front: "Worked vignette: a patient has 5 days of decreased sleep, grandiosity, and risk-taking, observable but not impairing, no psychosis, plus past MDE. Diagnosis?",
        back: "This is a hypomanic episode (4+ days, no marked impairment or psychosis). Combined with a prior major depressive episode and no history of full mania, the diagnosis is bipolar II disorder.",
        hint: "Hypomania plus depression equals bipolar II.",
      },
    ],
  },
  {
    slug: "englit-sound-devices",
    cards: [
      {
        front: "Define alliteration and give an example.",
        back: "Alliteration is the repetition of initial consonant sounds in nearby words, e.g., \"wild and windy.\" It creates musicality, emphasis, and links words conceptually.",
        hint: "Same starting consonant sound.",
      },
      {
        front: "Define assonance and how it differs from consonance.",
        back: "Assonance repeats vowel sounds within nearby words (\"fleet feet sweep\"). Consonance repeats consonant sounds, often at the ends or middles of words (\"pitter patter\"), not just the beginning as in alliteration.",
        hint: "Vowels vs consonants.",
      },
      {
        front: "What is onomatopoeia?",
        back: "A word that imitates the natural sound it describes, such as \"buzz,\" \"hiss,\" \"clang,\" or \"murmur.\" It makes imagery vivid by appealing directly to the ear.",
        hint: "Word sounds like its meaning.",
      },
      {
        front: "Define rhyme and distinguish end rhyme from internal rhyme.",
        back: "Rhyme is the repetition of similar ending sounds. End rhyme occurs at the ends of lines; internal rhyme occurs within a single line (\"I drove alone down the long road home\").",
        hint: "Line-end versus mid-line.",
      },
      {
        front: "What is the difference between perfect (full) rhyme and slant (near) rhyme?",
        back: "Perfect rhyme matches stressed vowel and following sounds exactly (\"cat / hat\"). Slant rhyme has only approximate sound similarity (\"shape / keep\"), creating subtle dissonance or unease.",
        hint: "Exact versus approximate.",
      },
      {
        front: "What is meter, and what is a metrical foot?",
        back: "Meter is the regular pattern of stressed and unstressed syllables in a line. A foot is the basic repeating unit of that pattern, such as an iamb (unstressed-stressed) or trochee (stressed-unstressed).",
        hint: "Rhythmic measuring unit.",
      },
      {
        front: "Define iambic pentameter.",
        back: "A line of five iambs (ten syllables total), each iamb being an unstressed then stressed syllable: da-DUM da-DUM da-DUM da-DUM da-DUM. It is the dominant meter of Shakespeare and much English verse.",
        hint: "Five iambs, ten syllables.",
      },
      {
        front: "What is the difference between rhythm and meter?",
        back: "Meter is the underlying abstract pattern a poem sets up; rhythm is the actual flow of sound when read aloud, which may vary from the meter for effect. Rhythm is felt; meter is the blueprint.",
        hint: "Blueprint vs actual flow.",
      },
      {
        front: "Define enjambment and end-stopped lines.",
        back: "Enjambment runs a sentence or phrase past the end of a line without pause, creating momentum or surprise. An end-stopped line concludes with a natural pause or punctuation, producing closure.",
        hint: "Run-on line vs stopped line.",
      },
      {
        front: "What is caesura?",
        back: "A deliberate pause or break within a line of poetry, often marked by punctuation. It controls pacing and can create emphasis or a sense of hesitation, as in \"To err is human; to forgive, divine.\"",
        hint: "Mid-line pause.",
      },
      {
        front: "What is cacophony versus euphony, and what effects do they create?",
        back: "Cacophony uses harsh, discordant sounds (hard consonants like k, g, t) for tension or chaos. Euphony uses smooth, pleasant sounds (liquids and long vowels) for harmony or calm.",
        hint: "Harsh versus harmonious.",
      },
      {
        front: "How should an AP essay discuss a sound device (the key trap to avoid)?",
        back: "Always connect the device to meaning, tone, or effect, never just label it. Saying \"the poet uses alliteration\" earns nothing; explaining how the repeated harsh sounds reinforce the speaker's anger earns credit.",
        hint: "Effect, not identification.",
      },
      {
        front: "Worked example: identify the sound device and effect in \"the soft surf sighed and slept.\"",
        back: "This is alliteration (repeated soft \"s\") combined with sibilance and onomatopoeia (\"sighed\"). The hushing s-sounds create euphony that mimics gentle waves, reinforcing a calm, drowsy tone.",
        hint: "Repeated s plus a sound-imitating word.",
      },
    ],
  },
  {
    slug: "englit-essay-writing",
    cards: [
      {
        front: "What are the three rows of the AP Literature essay rubric?",
        back: "Row A: Thesis (0-1 point) for a defensible interpretive claim. Row B: Evidence and Commentary (0-4 points) for support and analysis. Row C: Sophistication (0-1 point) for nuanced, complex argument.",
        hint: "Thesis, Evidence/Commentary, Sophistication.",
      },
      {
        front: "What makes a defensible thesis for a literary analysis essay?",
        back: "It states an interpretive claim about meaning (theme, the author's message) that someone could argue against, not a plot summary or a list of devices. It should answer the prompt's interpretive question directly.",
        hint: "An arguable claim, not a summary.",
      },
      {
        front: "What is the difference between evidence and commentary?",
        back: "Evidence is the textual detail (quote, image, structural choice) you cite. Commentary is your explanation of how that evidence develops your interpretation. The rubric rewards commentary that explains significance, not just description.",
        hint: "What the text does vs why it matters.",
      },
      {
        front: "How do you earn the sophistication point (Row C)?",
        back: "Demonstrate a complex understanding: situate the work in a broader context, explore tensions or complexities, account for alternative interpretations, or maintain a consistently vivid, persuasive style throughout.",
        hint: "Nuance and complexity across the essay.",
      },
      {
        front: "What is the recommended structure of an analysis body paragraph?",
        back: "Topic sentence (a sub-claim supporting the thesis), then evidence (a brief embedded quote), then commentary linking the evidence to the sub-claim and ultimately to the thesis. Repeat the embed-and-analyze cycle.",
        hint: "Claim, evidence, analysis loop.",
      },
      {
        front: "Why should quotations be embedded rather than dropped?",
        back: "Embedded quotes are woven into your own grammatical sentence, keeping focus on analysis. \"Dropped\" quotes standing alone force the reader to interpret for you and signal weak control of the argument.",
        hint: "Blend the quote into your sentence.",
      },
      {
        front: "What is the most common AP essay trap with literary devices?",
        back: "Listing or naming devices (\"the author uses imagery and metaphor\") without explaining their effect on meaning. Device identification earns nothing alone; always analyze function and effect.",
        hint: "Don't device-dump.",
      },
      {
        front: "How should you handle the prose fiction (Q2) prompt's task?",
        back: "Read the prompt for the specific element it targets (characterization, narrative tone, etc.), then build a thesis about how the author uses techniques to convey meaning, and structure body paragraphs around those techniques.",
        hint: "Answer the prompt's exact element.",
      },
      {
        front: "What approach works best for the poetry analysis (Q1) essay?",
        back: "Read the poem at least twice, identify the central tension or shift, form a thesis about its meaning, then analyze how specific poetic choices (diction, imagery, structure, sound) create that meaning.",
        hint: "Find the shift, then analyze choices.",
      },
      {
        front: "What is the literary argument (Q3) free-response, and what is its main pitfall?",
        back: "Q3 asks you to choose a work and argue how a feature relates to the meaning of the whole. The main pitfall is summarizing plot instead of making and defending an interpretive argument with selected detail.",
        hint: "Argue meaning, don't retell.",
      },
      {
        front: "Why is plot summary penalized in AP essays?",
        back: "Retelling events shows comprehension, not analysis. The rubric rewards interpretation of how and why an author's choices create meaning. Use plot only as brief evidence in service of a claim.",
        hint: "Comprehension is not analysis.",
      },
      {
        front: "What makes an effective conclusion in a timed AP essay?",
        back: "A strong conclusion briefly synthesizes how the evidence proves the thesis and may broaden to the work's larger meaning. It should not introduce new evidence; if time is short, a focused final sentence beats a rushed paragraph.",
        hint: "Synthesize, don't add new evidence.",
      },
      {
        front: "How should you allocate time on the three-essay AP Lit free-response section?",
        back: "The section is 2 hours for three essays, so budget roughly 40 minutes each, including a few minutes to read and plan. Planning a thesis before writing prevents aimless, summary-heavy paragraphs.",
        hint: "About 40 minutes per essay.",
      },
      {
        front: "Worked example: turn the weak thesis \"This poem is about loss\" into a defensible one.",
        back: "Revise to: \"Through fragmented syntax and fading imagery, the poem suggests that grief distorts the speaker's sense of time.\" This names how the author creates meaning and makes an arguable interpretive claim.",
        hint: "Add how the author conveys an arguable idea.",
      },
    ],
  },
  {
    slug: "englit-symbol-motif-fiction",
    cards: [
      {
        front: "What is a symbol in literature?",
        back: "A symbol is a concrete object, image, character, or action that represents a larger abstract idea beyond its literal meaning, such as a dove representing peace. Its meaning is established by context within the work.",
        hint: "Concrete thing standing for an abstraction.",
      },
      {
        front: "What is a motif, and how does it differ from a symbol?",
        back: "A motif is a recurring image, phrase, idea, or structure that runs through a work and reinforces theme. A symbol can appear once; a motif is defined by its repetition. Motifs often build symbolic meaning through accumulation.",
        hint: "Recurrence is the key to motif.",
      },
      {
        front: "How do symbol, motif, and theme relate?",
        back: "Symbols and motifs are tools an author uses to develop theme. Theme is the central abstract message or insight about life; symbols and recurring motifs make that abstract theme tangible and reinforce it.",
        hint: "Devices build toward theme.",
      },
      {
        front: "What is the difference between a conventional (universal) symbol and a contextual symbol?",
        back: "A conventional symbol carries widely shared meaning (a heart for love, water for life). A contextual symbol gains meaning only from its specific use within one text, like the green light in The Great Gatsby.",
        hint: "Cultural shorthand vs text-specific.",
      },
      {
        front: "How does an author signal that something is symbolic?",
        back: "Through emphasis: repetition, prominent placement (titles, openings, climaxes), unusual attention or description, association with key emotional moments, or recurrence at thematically charged points.",
        hint: "Repetition and emphasis flag significance.",
      },
      {
        front: "What is the green light in The Great Gatsby a symbol of?",
        back: "It symbolizes Gatsby's longing for Daisy and the broader unreachable American Dream. Its distance across the water embodies the gap between aspiration and reality, deepening the novel's themes of desire and disillusionment.",
        hint: "Unreachable aspiration across the bay.",
      },
      {
        front: "Give an example of a common motif and the theme it can develop.",
        back: "A recurring motif of light and darkness can develop themes of knowledge versus ignorance or good versus evil. Each appearance accumulates meaning, so the pattern, not a single instance, carries the thematic weight.",
        hint: "Light/dark recurring across a work.",
      },
      {
        front: "What is the difference between a symbol and a metaphor?",
        back: "A metaphor is a direct figurative comparison stated in a single instance (\"time is a thief\"). A symbol is an object or image within the world of the story that consistently stands for an abstract idea across the work.",
        hint: "One-time comparison vs sustained representation.",
      },
      {
        front: "Common trap: how do you avoid over-reading symbolism?",
        back: "Anchor every symbolic claim in textual evidence: repetition, emphasis, or explicit association. If the text gives no special weight to an object, claiming deep symbolism is unsupported \"reading in\" rather than analysis.",
        hint: "Symbolism must be grounded in the text.",
      },
      {
        front: "How should you write about a symbol in an AP essay?",
        back: "Identify what the object literally is, what abstract idea it represents, cite where the text builds that meaning, and explain how it advances theme. The analysis must connect the symbol to the work's larger meaning.",
        hint: "Literal, abstract, evidence, theme.",
      },
      {
        front: "What is an archetype, and how does it relate to symbol and motif?",
        back: "An archetype is a universally recognizable pattern, character type, or image (the hero, the journey, the flood) that recurs across literature. Archetypal images often function as motifs and carry pre-loaded symbolic meaning.",
        hint: "Universal recurring pattern.",
      },
      {
        front: "How can a single object's symbolic meaning change over a narrative?",
        back: "An author can develop a dynamic symbol whose meaning evolves as the plot unfolds, reflecting a character's growth or a thematic shift. Tracking this evolution often yields the strongest, most sophisticated analysis.",
        hint: "Symbols can develop, not stay fixed.",
      },
      {
        front: "Worked example: in a novel, a recurring caged bird points to what theme, and is it symbol or motif?",
        back: "A caged bird appearing repeatedly is a motif (by recurrence) that functions symbolically to represent confinement and the longing for freedom, developing a theme about oppression and the desire for liberation.",
        hint: "Recurring image of confinement.",
      },
    ],
  },
  {
    slug: "englit-complex-poetic-analysis",
    cards: [
      {
        front: "What is a poetic \"shift\" (volta), and why does it matter for analysis?",
        back: "A shift is a turn in tone, perspective, time, or argument within a poem, often signaled by words like \"but,\" \"yet,\" or \"now,\" or by a stanza break. Identifying the shift reveals the poem's structure of thought and central tension.",
        hint: "The turn in the poem's thought.",
      },
      {
        front: "How do diction and connotation drive a poem's meaning?",
        back: "Diction is the poet's word choice; connotation is the emotional or cultural association a word carries beyond its literal denotation. Charged connotations shape tone and reveal attitude, so analyze why a particular word was chosen.",
        hint: "Word choice plus associations.",
      },
      {
        front: "What is the difference between the speaker and the poet?",
        back: "The speaker is the constructed voice within the poem, which may differ in gender, era, or attitude from the poet. Treating the speaker as the poet is a common error; analyze the speaker's distinct perspective.",
        hint: "Persona is not the author.",
      },
      {
        front: "How does form (sonnet, free verse, villanelle) contribute to meaning?",
        back: "Form shapes expectation and emphasis: a sonnet's structure sets up a turn at line 9 or 13; a villanelle's refrains create obsessive return; free verse breaks conventions to mirror content. Analyze how form reinforces or subverts the message.",
        hint: "Structure carries meaning.",
      },
      {
        front: "What is the difference between tone and mood?",
        back: "Tone is the speaker's attitude toward the subject (e.g., bitter, reverent). Mood is the emotional atmosphere the poem creates in the reader (e.g., eerie, hopeful). Tone is the speaker's; mood is the reader's.",
        hint: "Speaker's attitude vs reader's feeling.",
      },
      {
        front: "Define imagery and explain its role in complex analysis.",
        back: "Imagery is descriptive language appealing to the senses (sight, sound, touch, taste, smell). In analysis, track how patterns of imagery evolve or contrast to build tone, characterize the speaker, and develop theme.",
        hint: "Sensory language and its patterns.",
      },
      {
        front: "What is the difference between metaphor, simile, and conceit?",
        back: "A simile compares using \"like\" or \"as\"; a metaphor states an identity directly. A conceit is an extended, elaborate metaphor sustained across many lines, often surprising, as in metaphysical poetry.",
        hint: "Conceit is an extended metaphor.",
      },
      {
        front: "What are paradox and irony in poetry, and why analyze them?",
        back: "A paradox is a seemingly contradictory statement that reveals a deeper truth. Irony is a gap between what is said/expected and what is meant/true. Both create complexity and are prime targets for the sophistication point.",
        hint: "Tension that reveals deeper meaning.",
      },
      {
        front: "How does syntax (sentence structure) affect a poem?",
        back: "Syntax controls pacing and emphasis: fragments create urgency or disjunction, long winding sentences create flow or breathlessness, and inverted word order foregrounds key terms. Analyze how structure mirrors meaning.",
        hint: "Sentence shape shapes effect.",
      },
      {
        front: "What is the role of ambiguity in sophisticated poetic analysis?",
        back: "Ambiguity is intentional openness to multiple valid readings. Rather than resolving it, strong analysis explores how competing meanings coexist to enrich the poem, which often demonstrates the complex understanding rewarded on the rubric.",
        hint: "Embrace multiple meanings.",
      },
      {
        front: "How should you analyze the effect of an extended metaphor across a whole poem?",
        back: "Trace how the metaphor is introduced, developed, and possibly transformed or broken, and explain what each stage contributes. Show how the sustained comparison structures the argument and deepens the central theme.",
        hint: "Track its arc, not one line.",
      },
      {
        front: "Common trap: what does it mean to \"analyze the whole poem\" rather than cherry-pick?",
        back: "Weak essays grab scattered devices; strong essays account for the poem's overall movement, including how the parts work together and how the ending resolves or complicates the opening. Address structure and progression, not just isolated images.",
        hint: "Read for the arc, not fragments.",
      },
      {
        front: "What is allusion, and how does it add complexity?",
        back: "An allusion is a reference to another text, person, myth, or event. It imports the connotations of the referenced source, layering meaning compactly; recognizing an allusion can unlock the poem's deeper argument.",
        hint: "Outside reference loading extra meaning.",
      },
      {
        front: "Worked example: a poem opens praising spring, then after \"but\" turns to decay. How do you frame this?",
        back: "Identify the volta at \"but\" as the structural pivot; argue that the contrast between vibrant spring imagery and subsequent decay imagery enacts a theme about the impermanence of beauty, with the shift carrying the poem's meaning.",
        hint: "Name the volta and the imagery contrast.",
      },
    ],
  },
];
