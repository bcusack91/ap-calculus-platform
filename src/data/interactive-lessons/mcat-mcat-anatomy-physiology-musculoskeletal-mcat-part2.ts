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

**Passage-style problem.** Researchers measure one sarcomere in an isolated myofibril under a light microscope, at rest and during maximal isometric-to-shortening contraction:

| Measurement | Rest | Contracted |
|-------------|------|-----------|
| Sarcomere length (Z to Z) | 2.4 um | 2.0 um |
| A band | 1.6 um | X |
| I band (total) | 0.8 um | Y |

**Question 1 — Predict X.** The A band spans exactly the thick filaments, and filaments slide rather than shorten. X = 1.6 um, unchanged. Any answer choice showing the A band shrinking contradicts the sliding filament model.

**Question 2 — Predict Y.** The sarcomere shortened by 0.4 um. Since the A band is constant, ALL shortening comes out of the I band: Y = 0.8 - 0.4 = 0.4 um. (The H zone shrinks by the same 0.4 um as thin filaments slide inward from both sides.)

**Question 3 — The researchers add a drug that locks tropomyosin permanently over the myosin-binding sites. The fiber is then stimulated. What happens at each step?** The NMJ works normally (ACh, end-plate potential), the action potential propagates, DHP-ryanodine coupling releases SR calcium, and Ca binds troponin — but troponin cannot move the locked tropomyosin, so no cross-bridges form and tension stays at zero. Lesion-mapping questions like this reward knowing WHERE each molecule sits in the chain.

**Question 4 — Instead, they bathe the skinned fiber in calcium but replace ATP with a non-hydrolyzable ATP analog that still binds myosin. Predict cross-bridge behavior.** Binding of the analog still DETACHES myosin from actin (release requires only binding), but without hydrolysis the head cannot re-cock, so no power strokes occur: the fiber relaxes and stays relaxed. This dissects the two ATP roles — detachment (binding) vs. energization (hydrolysis).`
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
            explanation: `Filaments slide; they do not shorten. The A band equals thick-filament length and is ALWAYS constant, so any option including it is wrong. The I band (thin-only region) and H zone (thick-only region) are the non-overlap zones consumed as thin filaments slide toward the M line while Z lines approach.`
          },
          {
            question: `In the cross-bridge cycle, the immediate role of ATP BINDING (before hydrolysis) is to:`,
            options: [`Trigger the power stroke`, `Expose the myosin-binding sites on actin`, `Cause myosin to detach from actin`, `Pump calcium back into the sarcoplasmic reticulum`],
            correctAnswer: 2,
            explanation: `ATP binding releases the myosin head from actin; the subsequent HYDROLYSIS re-cocks the head, and Pi release later triggers the power stroke (choice A confuses these steps). Exposing actin's binding sites is calcium-troponin-tropomyosin business, and calcium pumping is SERCA's separate use of ATP. Binding-releases is why rigor mortis locks cross-bridges when ATP runs out.`
          },
          {
            question: `Calcium initiates contraction in skeletal muscle by binding to:`,
            options: [`Tropomyosin, causing it to depolymerize`, `Troponin, shifting tropomyosin off the myosin-binding sites on actin`, `Myosin heads, cocking them into the high-energy state`, `The sarcolemma, opening ligand-gated sodium channels`],
            correctAnswer: 1,
            explanation: `Ca binds troponin (the C subunit); the troponin complex then drags tropomyosin aside, exposing actin's myosin-binding sites. Calcium never binds tropomyosin directly (choice A), cocking the myosin head is done by ATP hydrolysis (choice C), and ligand-gated channels at the end plate are opened by ACh, not calcium (choice D).`
          },
          {
            question: `Which sequence correctly orders excitation-contraction coupling after the muscle action potential fires?`,
            options: [`SR calcium release → T-tubule depolarization → DHP receptor activation → troponin binding`, `DHP receptor activation → T-tubule depolarization → troponin binding → SR calcium release`, `Troponin binding → SR calcium release → T-tubule depolarization → cross-bridge cycling`, `T-tubule depolarization → DHP receptor conformational change → ryanodine receptor opening → SR calcium release → Ca binds troponin`],
            correctAnswer: 3,
            explanation: `The action potential dives down the T-tubules; voltage-sensing DHP receptors there change shape and mechanically open SR ryanodine receptors, dumping stored calcium, which then binds troponin to permit cross-bridge cycling. Every other option places calcium release or troponin binding before the membrane events that cause them.`
          },
          {
            question: `A toxin selectively inhibits the SERCA pump in a stimulated muscle fiber. The most direct consequence is:`,
            options: [`Failure of acetylcholine release at the neuromuscular junction`, `Inability to generate an end-plate potential`, `Prolonged contraction due to sustained high cytosolic calcium`, `Immediate relaxation because calcium cannot be released`],
            correctAnswer: 2,
            explanation: `SERCA actively returns calcium to the SR; block it and cytosolic Ca stays elevated, so tropomyosin stays displaced and cross-bridge cycling continues — impaired RELAXATION, not impaired contraction. Choice D reverses the pump's direction (release goes through ryanodine receptors, not SERCA). The NMJ and end-plate potential are upstream and untouched.`
          }
        ]
      }
    },
    {
      id: 'msk2-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 2

- Hierarchy: muscle → fascicle → fiber (cell) → myofibril → sarcomere; T-tubules carry the action potential inward, the SR stores calcium
- A band NEVER changes length; I band and H zone shrink as Z lines approach — filaments slide, they do not shorten
- Cross-bridge cycle: ATP binding RELEASES myosin from actin; hydrolysis COCKS the head; actin binding, then Pi release = POWER STROKE; ADP leaves; head stays attached until new ATP arrives
- Calcium binds troponin → tropomyosin moves off actin's myosin-binding sites; no calcium, no permission
- NMJ: ACh → nicotinic receptor (ligand-gated cation channel) → end-plate potential → muscle action potential; acetylcholinesterase clears the signal
- E-C coupling: AP → T-tubule → DHP voltage sensor → ryanodine receptor → SR calcium release; relaxation requires ATP-driven SERCA reuptake — ATP powers detachment, re-cocking, AND relaxation`
    }
  ]
};
