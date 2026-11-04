export const mcatMskPart2Data = {
  topicSlug: 'mcat-anatomy-physiology-musculoskeletal-mcat',
  sections: [
    {
      id: 'msk2-intro',
      type: 'text' as const,
      content: `# Musculoskeletal System — Deep Dive

**Part 2 of 4 — The Sarcomere & Excitation-Contraction Coupling**

### The Hierarchy (outside → in)

Whole **muscle** → bundles called **fascicles** → individual **muscle fibers** (single multinucleated cells) → **myofibrils** (contractile cables filling each fiber) → repeating **sarcomeres**, the fundamental contractile units, joined end to end at **Z lines**.

Two special membranes: the **sarcolemma** (fiber plasma membrane, with tubular invaginations called **T-tubules**) and the **sarcoplasmic reticulum (SR)**, the fiber's calcium warehouse.

### Sarcomere Anatomy — and What Moves

| Region | Contains | During contraction |
|--------|----------|--------------------|
| Z line | Anchors thin (actin) filaments | Z lines move CLOSER together |
| A band | Entire length of thick (myosin) filaments | **CONSTANT length** — always |
| I band | Thin filaments only | SHRINKS |
| H zone | Thick filaments only (center) | SHRINKS |
| M line | Center of thick filaments | Unchanged position marker |

The perennial exam question: filaments do NOT shorten — they SLIDE. Because the A band equals thick-filament length, it never changes; the regions of NON-overlap (I band, H zone) are what disappear as thin filaments slide inward. If a question claims the A band shortened, the answer is wrong.

### The Cross-Bridge Cycle (order matters)

1. **ATP binds myosin → myosin RELEASES actin.** (No ATP = no release — the molecular basis of rigor mortis, Part 4.)
2. **ATP hydrolysis to ADP + Pi "cocks" the myosin head** into its high-energy position.
3. The cocked head binds an exposed actin site → **cross-bridge forms**.
4. **Pi release triggers the power stroke** — the head pivots, pulling the thin filament toward the sarcomere center; ADP then leaves.
5. The head stays bound (rigor state) until a NEW ATP binds — return to step 1.

ATP therefore does two different jobs: binding DETACHES; hydrolysis RE-COCKS. Confusing these is the most common student error in this chapter.

### Regulation: Tropomyosin, Troponin & Calcium

At rest, **tropomyosin** lies along the actin filament covering myosin-binding sites, held in place by the **troponin** complex. When cytosolic calcium rises, **Ca binds troponin C**, the complex shifts tropomyosin aside, and binding sites are exposed. Remove calcium and the block returns — contraction is a calcium-gated permission system layered on an ATP-powered motor.

<!-- yield:low -->
- The other troponin subunits: troponin I inhibits actin-myosin binding, and troponin T anchors the complex to tropomyosin.
<!-- /yield -->

### The Neuromuscular Junction (NMJ)

1. A motor neuron action potential opens voltage-gated Ca channels at the terminal
2. **Acetylcholine (ACh)** is exocytosed into the synaptic cleft
3. ACh binds **nicotinic receptors** (ligand-gated cation channels) on the motor end plate → Na influx → **end-plate potential**
4. The depolarization triggers a muscle action potential along the sarcolemma
5. **Acetylcholinesterase** degrades ACh, ending the signal

### Excitation-Contraction Coupling — The Chain

Muscle action potential → travels down **T-tubules** deep into the fiber → voltage-sensing **dihydropyridine (DHP) receptors** in the T-tubule change conformation → mechanically open **ryanodine receptors** in the SR membrane → **SR dumps calcium** into the cytosol → Ca binds troponin → cross-bridge cycling begins.

**Relaxation is active work**: the **SERCA** pump (SR Ca-ATPase) uses ATP to pump calcium back into the SR. Falling cytosolic Ca lets tropomyosin re-cover the binding sites. So ATP is required THREE ways: detachment, re-cocking, and relaxation (SERCA). A muscle out of ATP can neither contract further nor relax.`
    },
    {
      id: 'msk2-worked',
      type: 'text' as const,
      content: `### Worked Example — Reading Band Measurements Like an MCAT Passage

**Problem 1.** Researchers measure one sarcomere in an isolated myofibril under a light microscope. At rest: sarcomere (Z to Z) $2.4\\;\\mu\\text{m}$, A band $1.6\\;\\mu\\text{m}$, I band (total) $0.8\\;\\mu\\text{m}$, H zone $0.4\\;\\mu\\text{m}$. During a shortening contraction the sarcomere measures $2.0\\;\\mu\\text{m}$.

- **(a)** What is the A band length X during the contraction?
- **(b)** What is the total I band length Y during the contraction?
- **(c)** What is the H zone length during the contraction?

**(a) The A band.** The A band spans exactly the thick filaments, and filaments slide rather than shorten: $X = 1.6\\;\\mu\\text{m}$, unchanged. Any answer choice showing the A band shrinking contradicts the sliding filament model.

**(b) The I band.** The sarcomere shortened by $0.4\\;\\mu\\text{m}$. Since the A band is constant, ALL shortening comes out of the I band: $Y = 0.8 - 0.4 = 0.4\\;\\mu\\text{m}$.

**(c) The H zone.** It shrinks by the same $0.4\\;\\mu\\text{m}$, as thin filaments slide inward from both sides toward the M line: $0.4 - 0.4 = 0\\;\\mu\\text{m}$. The thin filaments now meet at the center.

**Problem 2.** The researchers bathe a skinned fiber in calcium but replace ATP with a non-hydrolyzable ATP analog that still binds myosin.

- **(a)** Does the analog detach myosin heads from actin?
- **(b)** Can the heads perform power strokes?
- **(c)** What state does the fiber settle into, and what does this show about ATP's two roles?

**(a) Detachment.** Yes. Binding of the analog still DETACHES myosin from actin, because release requires only binding.

**(b) Power strokes.** No. Without hydrolysis the head cannot re-cock, so no power strokes occur.

**(c) The result.** The fiber relaxes and stays relaxed. This dissects the two ATP roles: detachment (binding) vs. energization (hydrolysis).

**Problem 3.** In another fiber, the researchers add a drug that locks tropomyosin permanently over the myosin-binding sites, then stimulate the fiber through its motor nerve.

- **(a)** Do the NMJ and the muscle action potential still work?
- **(b)** Is SR calcium released, and does it bind troponin?
- **(c)** How much tension does the fiber develop, and why?

**(a) Upstream signaling.** Yes. The NMJ works normally (ACh, end-plate potential), and the action potential propagates along the sarcolemma and down the T-tubules.

**(b) Calcium.** Yes. DHP-ryanodine coupling releases SR calcium, and Ca binds troponin.

**(c) Tension.** Zero. Troponin cannot move the locked tropomyosin, so no cross-bridges form. Lesion-mapping questions like this reward knowing WHERE each molecule sits in the chain.`
    },
    {
      id: 'msk2-quiz1',
      type: 'multiple-choice' as const,
      content: `**Sarcomere & E-C Coupling** 🎯`,
      exercise: {
        questions: [
          {
            question: `During skeletal muscle contraction, which regions of the sarcomere decrease in length?`,
            options: [`The I band and H zone`, `The A band and I band`, `The A band only`, `The H zone and A band`],
            correctAnswer: 0,
            yield: 'ULTRA_HIGH',
            explanation: `Filaments slide; they do not shorten. The A band equals thick-filament length and is ALWAYS constant, so any option including it is wrong. The I band (thin-only region) and H zone (thick-only region) are the non-overlap zones consumed as thin filaments slide toward the M line while Z lines approach.`
          },
          {
            question: `In the cross-bridge cycle, the immediate role of ATP BINDING (before hydrolysis) is to:`,
            options: [`Trigger the power stroke that pulls the thin filament`, `Expose the myosin-binding sites on actin`, `Cause myosin to detach from actin`, `Pump calcium back into the sarcoplasmic reticulum`],
            correctAnswer: 2,
            yield: 'ULTRA_HIGH',
            explanation: `ATP binding releases the myosin head from actin; the subsequent HYDROLYSIS re-cocks the head, and Pi release later triggers the power stroke (crediting ATP binding with the power stroke confuses these steps). Exposing actin's binding sites is calcium-troponin-tropomyosin business, and calcium pumping is SERCA's separate use of ATP. Binding-releases is why rigor mortis locks cross-bridges when ATP runs out.`
          },
          {
            question: `Calcium initiates contraction in skeletal muscle by binding to:`,
            options: [`Tropomyosin, rolling it directly off actin's groove`, `Troponin, shifting tropomyosin off the binding sites`, `Myosin heads, cocking them into a high-energy state`, `The sarcolemma, opening ligand-gated Na+ channels`],
            correctAnswer: 1,
            yield: 'HIGH',
            explanation: `Ca binds troponin (the C subunit); the troponin complex then drags tropomyosin aside, exposing actin's myosin-binding sites. Calcium never binds tropomyosin directly, cocking the myosin head is done by ATP hydrolysis rather than calcium, and ligand-gated channels at the end plate are opened by ACh, not calcium.`
          },
          {
            question: `Which sequence correctly orders excitation-contraction coupling after the muscle action potential fires?`,
            options: [`SR calcium release → T-tubule depolarization → DHP receptor activation → troponin binding`, `DHP receptor activation → T-tubule depolarization → troponin binding → SR calcium release`, `Troponin binding → SR calcium release → T-tubule depolarization → cross-bridge cycling`, `T-tubule depolarization → DHP receptor activation → SR calcium release → troponin binding`],
            correctAnswer: 3,
            yield: 'HIGH',
            explanation: `The action potential dives down the T-tubules; voltage-sensing DHP receptors there change shape and mechanically open SR ryanodine receptors, dumping stored calcium, which then binds troponin to permit cross-bridge cycling. Every other sequence puts an effect before its cause: calcium release before the T-tubule signal that triggers it, DHP activation before the depolarization that drives it, or troponin binding before calcium has been released.`
          },
          {
            question: `A toxin selectively inhibits the SERCA pump in a stimulated muscle fiber. The most direct consequence is:`,
            options: [`Failure of acetylcholine release at the neuromuscular junction`, `Inability to generate an end-plate potential`, `Prolonged contraction due to sustained high cytosolic calcium`, `Immediate relaxation because calcium cannot be released`],
            correctAnswer: 2,
            yield: 'HIGH',
            explanation: `SERCA actively returns calcium to the SR; block it and cytosolic Ca stays elevated, so tropomyosin stays displaced and cross-bridge cycling continues — impaired RELAXATION, not impaired contraction. Predicting immediate relaxation reverses the pump's direction (release goes through ryanodine receptors, not SERCA). The NMJ and end-plate potential are upstream and untouched.`
          }
        ]
      }
    },
    {
      id: 'msk2-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 2

- **Filaments slide.** The A band never changes length; the I band and H zone shrink as the Z lines move closer.
- **ATP's two cycle jobs.** ATP binding releases myosin and hydrolysis re-cocks the head; Pi release then fires the power stroke.
- **Calcium gives permission.** Calcium binds troponin, which shifts tropomyosin off actin's myosin-binding sites.
- **From nerve to calcium.** ACh opens nicotinic receptors; the AP runs down T-tubules, where DHP sensors open SR ryanodine receptors.

**Common traps**

- **A band shortening.** The A band equals thick-filament length and never shrinks; only the non-overlap zones do.
- **ATP binding as the stroke.** ATP binding detaches the head; Pi release, not ATP binding, triggers the power stroke.
- **Calcium on tropomyosin.** Calcium binds troponin, never tropomyosin directly; troponin then moves tropomyosin aside.
- **Passive relaxation.** SERCA spends ATP pumping calcium back into the SR; block it and the fiber stays contracted.

<!-- yield:low -->
**Low-yield extras**

- Troponin I inhibits, troponin T anchors to tropomyosin
<!-- /yield -->`
    }
  ]
};
