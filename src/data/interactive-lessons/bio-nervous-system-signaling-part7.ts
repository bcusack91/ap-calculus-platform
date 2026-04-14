export const bioNervousSystemSignalingPart7Data = {
  topicSlug: 'nervous-system-signaling',
  sections: [
    {
      id: 'ner7-intro',
      type: 'text' as const,
      content: `# AP Exam Practice — Nervous System Signaling

**Part 7 of 7 — Nervous System Signaling**

This section brings together all concepts from Parts 1–6 with AP-style questions focusing on:
- Interpreting action potential graphs
- Predicting drug and toxin effects
- Analyzing signal integration (summation)
- Experimental design and data interpretation

### Action Potential Graph — Review

When reading an action potential graph (voltage vs. time), identify these phases:

| Phase | Voltage Range | What's Happening |
|---|---|---|
| **Resting** | −70 mV (flat) | K⁺ leak channels maintain resting potential |
| **Depolarization** | −70 → +30 mV (rapid rise) | Voltage-gated Na⁺ channels open; Na⁺ rushes in |
| **Repolarization** | +30 → −70 mV (rapid fall) | Na⁺ channels inactivate; K⁺ channels open; K⁺ rushes out |
| **Hyperpolarization** | −70 → −80 mV (undershoot) | K⁺ channels slow to close; excess K⁺ exits |
| **Return to rest** | −80 → −70 mV | Na⁺/K⁺ ATPase restores gradients; K⁺ channels close |

> **Tip:** If the exam asks you to identify what ion is moving at a specific time point on the graph, look at whether the voltage is increasing (Na⁺ in) or decreasing (K⁺ out).
`
    },
    {
      id: 'ner7-quiz1',
      type: 'multiple-choice' as const,
      content: `**AP Practice — Action Potential Graph Interpretation** 🎯`,
      exercise: {
        questions: [
          {
            question: 'A graph shows a neuron\'s membrane potential over time. At time point X, the voltage rapidly changes from −70 mV to +30 mV. Which of the following best explains the ion movement at time point X?',
            options: [
              'K⁺ is exiting the cell through voltage-gated channels',
              'Na⁺ is entering the cell through voltage-gated channels, driven by its electrochemical gradient',
              'Ca²⁺ is entering the cell to trigger neurotransmitter release',
              'Cl⁻ is entering the cell through ligand-gated channels'
            ],
            correctAnswer: 1,
            explanation: 'The rapid rise from −70 mV to +30 mV represents depolarization, caused by Na⁺ rushing into the cell through voltage-gated Na⁺ channels. Na⁺ moves inward because of both its concentration gradient (high outside, low inside) and the electrical gradient (negative inside attracts positive ions).'
          },
          {
            question: 'On the same graph, at time point Y the voltage drops from +30 mV back to −70 mV. At time point Z, the voltage briefly reaches −80 mV before returning to −70 mV. Which statement correctly describes both events?',
            options: [
              'Point Y: Na⁺ channels reopen; Point Z: Na⁺/K⁺ pump reverses direction',
              'Point Y: K⁺ exits through voltage-gated channels (repolarization); Point Z: K⁺ channels close slowly, causing transient hyperpolarization',
              'Point Y: Cl⁻ enters to restore resting potential; Point Z: Ca²⁺ is released from internal stores',
              'Point Y: Na⁺ is actively pumped out; Point Z: K⁺ leak channels close temporarily'
            ],
            correctAnswer: 1,
            explanation: 'Point Y (repolarization): Na⁺ channels inactivate and voltage-gated K⁺ channels open, allowing K⁺ to flow out of the cell, returning the membrane to −70 mV. Point Z (hyperpolarization/undershoot): K⁺ channels are slow to close, so K⁺ continues to exit beyond the resting potential, briefly reaching −80 mV before the channels fully close and the Na⁺/K⁺ pump restores resting conditions.'
          }
        ]
      }
    },
    {
      id: 'ner7-drugproblems',
      type: 'text' as const,
      content: `## Analyzing Drug & Toxin Effects

When the AP exam presents an unfamiliar drug or toxin scenario, use this systematic approach:

### Problem-Solving Framework

**Step 1:** Identify the target — What molecule or channel does the drug affect?
**Step 2:** Determine the action — Does the drug block, activate, enhance, or inhibit the target?
**Step 3:** Trace the pathway — Follow the normal sequence of neural signaling and identify where the disruption occurs.
**Step 4:** Predict the outcome — What happens upstream and downstream of the disruption?

### Example Analysis

> *"Drug X prevents the reuptake of dopamine from the synaptic cleft."*

1. **Target:** Dopamine reuptake transporters
2. **Action:** Blocks reuptake (prevents removal of dopamine from cleft)
3. **Pathway:** Dopamine remains in the synaptic cleft longer → continues activating postsynaptic receptors
4. **Outcome:** Enhanced dopamine signaling → increased reward/pleasure responses, potential for addiction

### Common Experimental Scenarios

| Experimental Manipulation | Expected Result |
|---|---|
| Block Na⁺ channels on the axon | No action potential propagation; no signal reaches axon terminal |
| Block Ca²⁺ channels at axon terminal | Action potential reaches terminal but no neurotransmitter release |
| Apply an AChE inhibitor | ACh accumulates → sustained muscle contraction |
| Increase K⁺ concentration outside the cell | Resting potential depolarizes (less negative); neuron more excitable |
| Block GABA receptors | Loss of inhibition → increased neural activity → potential seizures |
`
    },
    {
      id: 'ner7-quiz2',
      type: 'multiple-choice' as const,
      content: `**AP Practice — Drug Effects & Experimental Scenarios** 🎯`,
      exercise: {
        questions: [
          {
            question: 'A scientist applies tetrodotoxin (TTX), which blocks voltage-gated Na⁺ channels, to a neuron. Which of the following graphs would best represent the membrane potential over time after a stimulus is applied?',
            options: [
              'A normal action potential graph with depolarization to +30 mV',
              'A flat line at −70 mV with no depolarization, because the neuron cannot generate an action potential',
              'A graph showing the membrane potential reaching +60 mV (higher than normal)',
              'A graph showing continuous depolarization without repolarization'
            ],
            correctAnswer: 1,
            explanation: 'Tetrodotoxin (TTX) blocks voltage-gated Na⁺ channels, preventing Na⁺ influx during depolarization. Without this Na⁺ influx, the neuron cannot generate an action potential. The membrane would remain at or near the resting potential (−70 mV) regardless of stimulus strength.'
          },
          {
            question: 'Researchers increase the extracellular K⁺ concentration around a neuron from 5 mM to 20 mM. What is the most likely effect on the neuron?',
            options: [
              'The equilibrium potential for K⁺ becomes more negative, hyperpolarizing the cell',
              'The resting membrane potential becomes less negative (depolarizes), making the neuron more excitable',
              'The Na⁺/K⁺ pump reverses direction, moving K⁺ out of the cell',
              'The neuron becomes completely unable to fire action potentials'
            ],
            correctAnswer: 1,
            explanation: 'Increasing extracellular K⁺ reduces the K⁺ concentration gradient across the membrane. Less K⁺ leaks out through K⁺ leak channels, so the resting potential becomes less negative (depolarized). This brings the membrane closer to threshold, making the neuron more excitable and easier to trigger.'
          }
        ]
      }
    },
    {
      id: 'ner7-quiz3',
      type: 'multiple-choice' as const,
      content: `**AP Practice — Signal Integration & Complex Scenarios** 🎯`,
      exercise: {
        questions: [
          {
            question: 'A postsynaptic neuron receives simultaneous input from three presynaptic neurons: Neuron A produces a +15 mV EPSP, Neuron B produces a +10 mV EPSP, and Neuron C produces a −20 mV IPSP. If the resting potential is −70 mV and threshold is −55 mV, will this neuron fire an action potential?',
            options: [
              'Yes, because EPSPs always override IPSPs',
              'Yes, because the total change is +5 mV, reaching −65 mV, which exceeds threshold',
              'No, because the net change is +5 mV (reaching −65 mV), which does not reach the −55 mV threshold',
              'No, because three simultaneous inputs always cancel each other out'
            ],
            correctAnswer: 2,
            explanation: 'Spatial summation: (+15) + (+10) + (−20) = +5 mV net change. Starting from −70 mV, the membrane reaches −65 mV. Since threshold is −55 mV, the neuron does NOT reach threshold and does NOT fire an action potential. The neuron needs a net depolarization of at least +15 mV to reach threshold from rest.'
          },
          {
            question: 'In an experiment, a drug is applied to a synapse. Post-drug, action potentials still propagate normally along the axon, but the postsynaptic neuron shows no response. The drug most likely:',
            options: [
              'Blocks voltage-gated Na⁺ channels on the axon',
              'Blocks voltage-gated Ca²⁺ channels at the axon terminal or postsynaptic receptors',
              'Increases K⁺ leak channel activity in the presynaptic neuron',
              'Enhances the activity of the Na⁺/K⁺ ATPase pump'
            ],
            correctAnswer: 1,
            explanation: 'Since action potentials propagate normally along the axon (Na⁺ channels are functioning), the block must occur at the synapse. The drug could either (1) block Ca²⁺ entry at the terminal (preventing neurotransmitter release) or (2) block postsynaptic receptors (preventing neurotransmitter binding). Both scenarios would allow normal axonal conduction but eliminate the postsynaptic response.'
          }
        ]
      }
    },
    {
      id: 'ner7-dropdown',
      type: 'dropdown-select' as const,
      content: `**Fill in the Blanks — Comprehensive Review** 🔍`,
      exercise: {
        dropdowns: [
          {
            label: 'During the depolarization phase of an action potential, ___ channels open and ___ rushes INTO the cell.',
            options: ['K⁺; K⁺', 'Na⁺; Na⁺', 'Ca²⁺; Ca²⁺', 'Cl⁻; Cl⁻']
          },
          {
            label: 'A drug that blocks the enzyme acetylcholinesterase would cause ACh to ___ in the synaptic cleft.',
            options: ['be destroyed', 'accumulate', 'be reabsorbed', 'decrease']
          },
          {
            label: 'The type of summation where MULTIPLE presynaptic neurons fire simultaneously onto one postsynaptic neuron is called ___ summation.',
            options: ['temporal', 'spatial', 'saltatory', 'absolute']
          },
          {
            label: 'If extracellular K⁺ concentration is increased, the resting membrane potential will become ___ negative (depolarize).',
            options: ['more', 'less', 'equally', 'infinitely']
          }
        ],
        correctAnswers: ['Na⁺; Na⁺', 'accumulate', 'spatial', 'less'],
        hint1: 'Na⁺ is the depolarizing ion — it is concentrated outside and rushes in when voltage-gated Na⁺ channels open.',
        hint2: 'If the enzyme that breaks down ACh is blocked, ACh cannot be removed from the cleft.',
        hint3: 'Spatial = multiple sources at once. Temporal = one source, multiple times rapidly.',
        explanation: 'Depolarization = Na⁺ influx through voltage-gated Na⁺ channels. Blocking AChE prevents ACh breakdown, causing accumulation and continuous receptor activation. Spatial summation involves multiple presynaptic neurons. Increasing extracellular K⁺ reduces the concentration gradient, decreasing K⁺ efflux and making the resting potential less negative.'
      }
    },
    {
      id: 'ner7-summary',
      type: 'text' as const,
      content: `## Part 7 Summary — AP Exam Practice

### Key Test-Taking Strategies
1. **Action potential graphs:** Identify phases by voltage direction — rising = Na⁺ in; falling = K⁺ out; undershoot = K⁺ channels slow to close.
2. **Drug problems:** Use the 4-step framework: target → action → pathway → outcome.
3. **Summation problems:** Add all EPSPs (positive) and IPSPs (negative); compare the sum + resting potential to threshold.
4. **Experimental scenarios:** Determine WHERE in the signaling pathway the manipulation acts, then trace downstream effects.

### Complete Signaling Pathway Review

**Stimulus → dendrites → cell body → axon hillock (threshold?) → action potential along axon → Ca²⁺ entry at terminal → neurotransmitter release → crosses cleft → binds receptor → EPSP or IPSP → summation at next neuron's axon hillock → response**

### High-Yield Topics for the AP Exam
- Na⁺/K⁺ pump stoichiometry (3 Na⁺ out, 2 K⁺ in)
- All-or-none principle and how intensity is coded by frequency
- Saltatory vs. continuous conduction
- Ca²⁺ as the trigger for neurotransmitter release
- EPSP/IPSP summation and integration
- Drug effects on specific steps of synaptic transmission
- Refractory periods and unidirectional propagation

**Congratulations!** You have completed the Nervous System Signaling unit. Review any parts you found challenging, and practice interpreting graphs and predicting experimental outcomes.
`
    }
  ]
};