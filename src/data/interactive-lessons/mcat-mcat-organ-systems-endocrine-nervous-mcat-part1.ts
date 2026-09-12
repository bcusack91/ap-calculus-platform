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

- **Gs-protein GPCR** → adenylyl cyclase → **cAMP** → protein kinase A (glucagon, epinephrine at beta receptors, ADH-V2, TSH, LH). Gi inhibits the same cascade.
- **Gq GPCR** → phospholipase C → **IP3 + DAG** → Ca$^{2+}$ release + PKC (epinephrine at alpha-1, GnRH, oxytocin).
- **Receptor tyrosine kinase** → phosphorylation cascades (insulin, growth factors).
- Each enzymatic step multiplies the signal — **amplification** is why nanomolar hormones move whole organs.

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
      id: 'endn1-quiz1',
      type: 'multiple-choice' as const,
      content: `**Signaling & Axes** 🎯`,
      exercise: {
        questions: [
          {
            question: `A hormone acts within seconds by binding a cell-surface receptor and raising intracellular cAMP. This hormone is most likely a:`,
            options: [`Steroid hormone acting through a nuclear receptor`, `Peptide hormone acting through a G-protein-coupled receptor`, `Thyroid hormone acting through gene transcription`, `Lipid-soluble hormone bound to a plasma carrier protein`],
            correctAnswer: 1,
            explanation: `Water-soluble peptides cannot cross the membrane, so they act via surface receptors and second messengers — the Gs → adenylyl cyclase → cAMP cascade is the archetype, and its enzymatic steps explain both the speed and the amplification. Steroids and thyroid hormone act in hours-to-days by changing transcription, not seconds.`
          },
          {
            question: `Unlike anterior pituitary hormones, the hormones released from the posterior pituitary are:`,
            options: [`Steroids synthesized from cholesterol within the pituitary`, `Controlled by releasing factors carried in the hypophyseal portal blood`, `Tropic hormones that regulate other endocrine glands`, `Synthesized in hypothalamic neurons and transported down axons for release`],
            correctAnswer: 3,
            explanation: `The posterior pituitary is neural tissue — hypothalamic neurons make ADH and oxytocin in their cell bodies and ship them down axons for storage and release. The PORTAL system and releasing hormones govern the ANTERIOR pituitary, a genuine gland. Both posterior hormones are peptides, and both act on final targets (kidney, uterus/breast) rather than on other glands.`
          },
          {
            question: `A drug blocks all cytoplasmic and nuclear hormone receptors but leaves membrane receptors untouched. Which hormone's action would be LEAST affected?`,
            options: [`Glucagon`, `Cortisol`, `Aldosterone`, `Thyroxine (T4)`],
            correctAnswer: 0,
            explanation: `Glucagon is a peptide — its receptor is on the cell surface (GPCR/cAMP), so intracellular receptor blockade is irrelevant to it. Cortisol and aldosterone are steroids, and thyroxine, despite being tyrosine-derived, uses nuclear receptors — all three depend on the blocked intracellular machinery. Sorting hormones by receptor location is the single most reusable endocrine skill.`
          }
        ]
      }
    },
    {
      id: 'endn1-worked-examples',
      type: 'text' as const,
      content: `### Worked Examples — Signaling Logic

<details>
<summary><b>Example 1: Predict speed and durability from chemistry</b></summary>

**Question:** Hormone A is injected and raises its target enzyme's ACTIVITY within one minute; hormone B raises the AMOUNT of the enzyme, peaking after twelve hours. Classify each hormone and justify.

**Solution:**
1. A modifies existing proteins (phosphorylation via kinase cascades) — the signature of a **peptide/surface-receptor** hormone. Fast on, fast off.
2. B increases enzyme quantity — that requires transcription and translation: a **steroid or thyroid** hormone with a nuclear receptor. Slow on, long-lasting.
3. Corollary: protein-synthesis inhibitors (e.g., blocking translation) abolish B's effect but spare A's — a favorite experimental discriminator. ✓
</details>

<details>
<summary><b>Example 2: Amplification arithmetic</b></summary>

**Question:** One glucagon molecule activates 10 adenylyl cyclases; each makes 100 cAMP; each PKA activated goes on to activate 10 downstream enzymes, each converting 1000 substrate molecules. Roughly how many product molecules per hormone?

**Solution:**
1. $10 \\times 100 = 1000$ cAMP → ~1000 PKA activations.
2. $1000 \\times 10 = 10^4$ downstream enzymes; $10^4 \\times 1000 = 10^7$ substrate conversions. ✓
3. Seven orders of magnitude from one binding event — why hormone concentrations are measured in picomolar-to-nanomolar and why cascades, not single steps, are the rule.
</details>

<details>
<summary><b>Example 3: Diagnose the loop from a feedback diagram</b></summary>

**Question:** A passage shows: chronic exogenous cortisol (prednisone therapy) → what happens to CRH, ACTH, and the adrenal cortex?

**Solution:**
1. Exogenous cortisol is read by the hypothalamus and pituitary exactly like the real thing → **long-loop negative feedback suppresses CRH and ACTH**.
2. Without ACTH (a trophic — growth-supporting — signal), the adrenal cortex **atrophies** over weeks.
3. This is why abrupt withdrawal is dangerous: the shrunken gland cannot respond to stress until the axis reawakens; steroids must be tapered. ✓

**Pattern:** exogenous hormone = high final hormone + suppressed upstream tiers + atrophied gland — contrast with a hormone-secreting tumor of the gland itself (same labs, but the gland is enlarged/nodular).
</details>`
    },
    {
      id: 'endn1-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 1

- Nervous = fast/wired/brief; endocrine = slow/broadcast/durable; the hypothalamus bridges them.
- Peptides: surface receptors, second messengers (cAMP, IP3/DAG, RTK), fast, stored in vesicles. Steroids: cholesterol-derived, carrier-bound, nuclear receptors, transcription, slow and lasting. Tyrosine derivatives split: epinephrine acts peptide-like, thyroid hormone steroid-like.
- Posterior pituitary releases hypothalamus-made ADH/oxytocin; anterior pituitary (portal-controlled) makes FLAT PEG — FSH, LH, ACTH, TSH tropic; prolactin, endorphins, GH direct.
- Three-tier axes with long-loop negative feedback set hormone levels; exogenous hormone suppresses the whole axis and atrophies the gland; LH surge and oxytocin are the positive-feedback exceptions.`
    }
  ]
};
