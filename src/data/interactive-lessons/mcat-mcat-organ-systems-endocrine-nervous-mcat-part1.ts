export const mcatEndoNervSubPart1Data = {
  topicSlug: 'mcat-organ-systems-endocrine-nervous-mcat',
  sections: [
    {
      id: 'endn1-intro',
      type: 'text' as const,
      content: `# Endocrine & Nervous Systems

**Part 1 of 4 — Chemical Signaling: Hormone Classes, Axes & Feedback**

### Two Control Systems, One Logic

The nervous system is **fast, wired, and brief** (milliseconds, point-to-point); the endocrine system is **slow, broadcast, and durable** (seconds to days, via blood). They meet at the **hypothalamus** — the neuroendocrine bridge. Most MCAT questions reduce to: which system, which messenger class, which feedback loop?

### The Three Hormone Classes — Chemistry Predicts Behavior

| Property | **Peptide** (insulin, glucagon, ADH, all anterior-pituitary hormones) | **Steroid** (cortisol, aldosterone, estrogen, testosterone) | **Amino-acid derived** |
|----------|--------------------------------------------------------------|-----------------------------------------------|------------------------|
| Solubility | Water-soluble, can't cross membranes | Lipid-soluble (from **cholesterol**), crosses membranes | Split class |
| Receptor | **Cell surface** | **Intracellular/nuclear** | Epinephrine: surface; **thyroid hormone: nuclear** |
| Mechanism | Second messengers — fast, amplified | Hormone–receptor complex alters **gene transcription** — slow, lasting | Follows its receptor type |
| Blood transport | Dissolved free | Bound to **carrier proteins** (only free fraction active; long half-life) | Epinephrine free; T3/T4 carried |
| Synthesis | Preprohormone → prohormone (ER/Golgi cleavage) → vesicles, released on demand | Made on demand, NOT stored | Modified tyrosine (epinephrine, thyroid hormone) or tryptophan (melatonin) |

**The classic trap pair:** epinephrine and thyroid hormone are both tyrosine derivatives but behave oppositely — epinephrine acts like a peptide (surface GPCR, instant), thyroid hormone like a steroid (nuclear receptor, days).

### Second-Messenger Cascades (Peptide Playbook)

- **Gs-protein GPCR** → adenylyl cyclase → **cAMP** → protein kinase A (glucagon, epinephrine at beta receptors, ADH at kidney V2 receptors, TSH, LH). Gi inhibits the same cascade.
- **Gq GPCR** → phospholipase C → **IP3 + DAG** → Ca$^{2+}$ release + PKC (epinephrine at alpha-1, GnRH, oxytocin).
- **Receptor tyrosine kinase** → phosphorylation cascades (insulin, growth factors).
- Each enzymatic step multiplies the signal — **amplification** is why nanomolar hormones move whole organs.

<!-- yield:low -->
- Vascular V1 receptors are Gq-coupled (vasoconstriction).
<!-- /yield -->

### The Hypothalamic–Pituitary Command Structure

- **Posterior pituitary** = an extension of the hypothalamus: axons deliver **ADH and oxytocin** (made in hypothalamic cell bodies) for storage/release. No new hormone is made there.
- **Anterior pituitary** = true gland, controlled by hypothalamic releasing hormones through the **hypophyseal portal system** (two capillary beds in series — concentrated delivery, tiny quantities).
- Anterior products — **FLAT PEG**: FSH, LH, ACTH, TSH (tropic — they command other glands); Prolactin, Endorphins, GH (mostly direct).

### Three-Tier Axes & Negative Feedback

$$\\text{Hypothalamus} \\xrightarrow{\\text{releasing hormone}} \\text{Anterior pituitary} \\xrightarrow{\\text{tropic hormone}} \\text{Peripheral gland} \\to \\text{hormone}$$

Examples: TRH → TSH → thyroid → T3/T4; CRH → ACTH → adrenal cortex → cortisol; GnRH → LH/FSH → gonads → sex steroids.

- The final hormone feeds back to inhibit BOTH upper tiers (**long-loop negative feedback**) — keeping levels in a set-point band.
- **Read the levels like a circuit:** where feedback is intact, the final hormone and its tropic hormone move in OPPOSITE directions when the peripheral gland is the problem (primary disorder), and in the SAME direction when the pituitary/hypothalamus is the problem (secondary). Part 4 drills this.
- Rare **positive feedback** exceptions are famous: LH surge at ovulation (estrogen switches sign) and oxytocin in labor.`
    },
    {
      id: 'endn1-worked-examples',
      type: 'text' as const,
      content: `### Worked Examples — Signaling Logic

**Problem 1.** Hormone A raises its target enzyme's ACTIVITY within one minute of injection; hormone B raises the AMOUNT of the same enzyme, peaking after twelve hours.

- **(a)** Which hormone class fits hormone A, and how does it act so quickly?
- **(b)** Which hormone class fits hormone B, and why is its effect slow but lasting?
- **(c)** How would a protein-synthesis inhibitor affect each hormone's response?

**(a) Hormone A.** Changing activity within a minute means modifying proteins already present (phosphorylation via kinase cascades), the signature of a **peptide/surface-receptor** hormone. Fast on, fast off.

**(b) Hormone B.** Raising enzyme quantity requires transcription and translation: a **steroid or thyroid** hormone with a nuclear receptor. Slow on, long-lasting.

**(c) The discriminator.** Blocking translation abolishes B's effect but spares A's, because A needs no new protein. It is a favorite experimental discriminator.

**Problem 2.** A patient takes prednisone, an exogenous glucocorticoid, every day for several months.

- **(a)** What happens to CRH and ACTH secretion?
- **(b)** What happens to the adrenal cortex over the following weeks?
- **(c)** Why must the drug be tapered rather than stopped abruptly?
- **(d)** How does this patient differ from one with a cortisol-secreting tumor of the adrenal itself?

**(a) Long-loop feedback.** The hypothalamus and pituitary read exogenous cortisol exactly like the real thing, so **long-loop negative feedback suppresses CRH and ACTH**.

**(b) The gland.** With ACTH suppressed, the cortex loses its trophic (growth-supporting) signal and **atrophies** over weeks.

**(c) Tapering.** Stopped abruptly, the shrunken gland cannot respond to stress until the axis reawakens, so steroids must be tapered.

**(d) Exogenous vs. tumor.** Both show high glucocorticoid activity with suppressed CRH/ACTH. The giveaway is the gland: exogenous hormone atrophies it, while a hormone-secreting tumor of the gland is enlarged or nodular.

**Problem 3.** One hormone molecule activates 10 adenylyl cyclases, and each makes 100 cAMP. Assume each cAMP activates one PKA, each PKA activates 10 downstream enzymes, and each enzyme converts 1000 substrate molecules.

- **(a)** How many PKA activations follow one binding event?
- **(b)** How many downstream enzymes are activated?
- **(c)** Roughly how many product molecules does one hormone molecule yield, and what does that explain?

**(a) cAMP and PKA.** $10 \\times 100 = 1000$ cAMP, so about 1000 PKA activations.

**(b) Downstream enzymes.** With about 1000 PKA from (a): $1000 \\times 10 = 10^4$ downstream enzymes.

**(c) Product.** $10^4 \\times 1000 = 10^7$ substrate conversions: seven orders of magnitude from one binding event. That is why hormone concentrations are measured in picomolar-to-nanomolar and why cascades, not single steps, are the rule.`
    },
    {
      id: 'endn1-quiz1',
      type: 'multiple-choice' as const,
      content: `**Signaling & Axes** 🎯`,
      exercise: {
        questions: [
          {
            question: `A hormone's effect on its target cell appears within seconds and is abolished when adenylyl cyclase is blocked. Which hormone-receptor pairing fits best?`,
            options: [`Cortisol acting through an intracellular steroid receptor`, `Glucagon acting through a Gs-coupled receptor`, `Insulin acting through a receptor tyrosine kinase`, `Epinephrine acting through a Gq-coupled alpha-1 receptor`],
            correctAnswer: 1,
            yield: 'HIGH',
            explanation: `Gs-coupled receptors activate adenylyl cyclase to make cAMP, and glucagon on hepatocytes is the archetype — its enzymatic steps explain both the speed and the amplification. Insulin also binds a surface receptor, but its tyrosine kinase signals through phosphorylation cascades, not cAMP. Epinephrine at alpha-1 receptors acts in seconds too, yet through Gq, phospholipase C, IP3 and DAG. Cortisol changes transcription over hours, not seconds.`
          },
          {
            question: `Unlike anterior pituitary hormones, the hormones released from the posterior pituitary are:`,
            options: [`Steroids synthesized from cholesterol within the pituitary`, `Governed by releasing factors in the hypophyseal portal blood`, `Tropic hormones that act mainly on other endocrine glands`, `Made in hypothalamic neurons and shipped down axons for release`],
            correctAnswer: 3,
            yield: 'HIGH',
            explanation: `The posterior pituitary is neural tissue — hypothalamic neurons make ADH and oxytocin in their cell bodies and ship them down axons for storage and release. The PORTAL system and releasing hormones govern the ANTERIOR pituitary, a genuine gland. Both posterior hormones are peptides, and both act on final targets (kidney, uterus/breast) rather than on other glands.`
          },
          {
            question: `A woman starting oral estrogen makes more thyroxine-binding globulin. Weeks later her total T4 is high, but her free T4 and TSH are normal and she has no hyperthyroid symptoms. The best explanation is:`,
            options: [`Only unbound T4 acts on target tissues and feeds back on the pituitary`, `Bound T4 is converted to inactive reverse T3 before reaching tissues`, `Target cells downregulate their nuclear receptors to offset excess T4`, `The kidneys clear the extra T4 before it can reach target tissues`],
            correctAnswer: 0,
            yield: 'MEDIUM',
            explanation: `Carrier-bound hormone is a reservoir: only the small free fraction enters cells, binds receptors, and is sensed by the hypothalamus and pituitary. More binding globulin briefly lowers free T4, TSH rises until the thyroid restores free T4 to normal, and total T4 stays high with no change in hormone action. Bound T4 is not diverted to reverse T3, receptor downregulation would not explain a normal free T4 and TSH, and T4 is protein-bound rather than rapidly cleared by the kidney.`
          }
        ]
      }
    },
    {
      id: 'endn1-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 1

- **Two control systems.** Nerves are fast, wired and brief; hormones are slow, broadcast and durable; the hypothalamus links them.
- **Chemistry predicts behavior.** Peptides act fast through surface receptors and second messengers; steroids act slowly via nuclear receptors.
- **Two pituitary lobes.** The posterior releases hypothalamus-made ADH and oxytocin; the portal-run anterior makes FLAT PEG.
- **Long-loop feedback.** The final hormone inhibits both upper tiers; exogenous hormone suppresses the axis and atrophies the gland.

**Common traps**

- **Treating all amines alike.** Epinephrine acts like a peptide (surface GPCR), but thyroid hormone acts like a steroid (nuclear receptor).
- **Counting total hormone.** Only the free, unbound fraction of a carrier-bound hormone acts on cells and is sensed by feedback.
- **Posterior lobe as a gland.** It makes no hormone; ADH and oxytocin are made in hypothalamic cell bodies and only released there.
- **Feedback is always negative.** The LH surge at ovulation and oxytocin in labor are the famous positive-feedback loops.

<!-- yield:low -->
**Low-yield extras**

- Vascular V1 receptors are Gq-coupled (vasoconstriction).
<!-- /yield -->`
    }
  ]
};
