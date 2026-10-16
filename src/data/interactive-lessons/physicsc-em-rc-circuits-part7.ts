export const physCEMRCPart7Data = {
  topicSlug: "rc-circuits-physics-c-em",
  sections: [
    {
      id: 'rc7-intro',
      type: 'text' as const,
      content: `# RC Circuits — Part 7: Review & Applications

### Complete formula reference

| Quantity | Charging | Discharging |
|:---|:---:|:---:|
| $Q(t)$ | $C\\mathcal{E}(1-e^{-t/\\tau})$ | $Q_0 e^{-t/\\tau}$ |
| $I(t)$ | $(\\mathcal{E}/R)e^{-t/\\tau}$ | $(V_0/R)e^{-t/\\tau}$ |
| $V_C(t)$ | $\\mathcal{E}(1-e^{-t/\\tau})$ | $V_0 e^{-t/\\tau}$ |
| $V_R(t)$ | $\\mathcal{E}\\,e^{-t/\\tau}$ | $V_0 e^{-t/\\tau}$ |

### Differential equations

| Scenario | ODE |
|:---|:---:|
| Charging | $RC\\,dQ/dt + Q = C\\mathcal{E}$ |
| Discharging | $RC\\,dQ/dt + Q = 0$ |

### Energy

| Quantity | Expression |
|:---|:---:|
| Battery delivers (charging) | $C\\mathcal{E}^2$ |
| Stored in $C$ (charging) | $\\frac{1}{2}C\\mathcal{E}^2$ |
| Dissipated in $R$ (charging) | $\\frac{1}{2}C\\mathcal{E}^2$ |
| Dissipated in $R$ (discharging) | $\\frac{1}{2}CV_0^2$ |`
    },
    {
      id: 'rc7-mcq1',
      type: 'mcq' as const,
      question: 'A $47$ μF capacitor, initially uncharged, charges through $R = 100$ kΩ from $\\mathcal{E} = 9$ V. What are $\\tau$ and $I_0$?',
      options: [
        '$\\tau = 4.7$ s, $I_0 = 90$ μA',
        '$\\tau = 47$ s, $I_0 = 9$ μA',
        '$\\tau = 0.47$ s, $I_0 = 0.9$ mA',
        '$\\tau = 4.7$ s, $I_0 = 9$ mA'
      ],
      correctAnswer: 0,
      explanation: '$\\tau = RC = (10^5)(47 \\times 10^{-6}) = 4.7$ s. $I_0 = \\mathcal{E}/R = 9/10^5 = 9 \\times 10^{-5}$ A $= 90$ μA.'
    },
    {
      id: 'rc7-apps',
      type: 'text' as const,
      content: `## Real-World Applications

### Camera flash
A camera flash uses an RC charging circuit. The capacitor charges slowly from a small battery (large $\\tau$), then discharges rapidly through the flash tube (small $R_{\\text{flash}}$, small $\\tau$).

### Heart defibrillator
A defibrillator charges a large capacitor ($C \\sim 30{-}70$ μF) to high voltage ($V \\sim 1000{-}5000$ V), then discharges through the patient's chest ($R \\sim 50$ Ω). Time constant $\\sim 2{-}4$ ms matches the needed pulse duration.

### Reading a discharge from data
If a capacitor's voltage falls from $V_0$ to $V$ in time $t$, then $t/\\tau = \\ln(V_0/V)$, so $R = t/\\big(C\\ln(V_0/V)\\big)$. Plotting $\\ln V$ against $t$ gives a straight line of slope $-1/\\tau$ — a standard way to find $RC$ from lab data.`
    },
    {
      id: 'rc7-mcq2',
      type: 'mcq' as const,
      question: 'A defibrillator capacitor $C = 50$ μF charged to $V = 4000$ V discharges through $R = 50$ Ω. What energy is delivered?',
      options: [
        '$400$ J',
        '$200$ J',
        '$800$ J',
        '$100$ J'
      ],
      correctAnswer: 0,
      explanation: '$U = \\frac{1}{2}CV^2 = \\frac{1}{2}(50 \\times 10^{-6})(16 \\times 10^6) = 400$ J.'
    },
    {
      id: 'rc7-common-mistakes',
      type: 'text' as const,
      content: `## Common AP Exam Mistakes

| Mistake | Correction |
|:---|:---|
| Using $V_C = \\mathcal{E}e^{-t/\\tau}$ for charging | That's discharging! Charging: $V_C = \\mathcal{E}(1 - e^{-t/\\tau})$ |
| Forgetting $V_C$ can't jump | Capacitor voltage is always continuous |
| Using wrong $R$ for $\\tau$ | In complex circuits, use the equivalent resistance seen by $C$ |
| Confusing $e^{-t/\\tau}$ with $e^{-2t/\\tau}$ | Power goes as $I^2$, so $P \\propto e^{-2t/\\tau}$ |
| Not setting up the ODE | On free response, always write KVL → ODE → solution |
| Wrong sign on $I = dQ/dt$ | Define $I$ direction clearly; $I = +dQ/dt$ for charging |

### Free-response template

1. Draw the circuit and label $I$ direction
2. Write KVL: $\\mathcal{E} - IR - Q/C = 0$
3. Substitute $I = dQ/dt$
4. Solve by separation of variables
5. Apply initial condition $Q(0) = 0$ or $Q(0) = Q_0$
6. Answer the specific question (find $t$, $V$, $I$, etc.)`
    },
    {
      id: 'rc7-mcq3',
      type: 'mcq' as const,
      question: 'A capacitor is initially at $V_0 = 12$ V. After discharging through $R$ for time $t$, $V = 3$ V. How many time constants have elapsed?',
      options: [
        '$\\ln 4 \\approx 1.39$',
        '$2$',
        '$4$',
        '$\\ln 3 \\approx 1.10$'
      ],
      correctAnswer: 0,
      explanation: '$V/V_0 = e^{-t/\\tau} = 3/12 = 1/4$. $t/\\tau = \\ln 4 \\approx 1.386$.'
    },
    {
      id: 'rc7-mcq4',
      type: 'mcq' as const,
      question: 'A capacitor charges through $R = 3$ kΩ from a $12$ V battery. At the instant the capacitor voltage is $8$ V, the current in the circuit is:',
      options: [
        '$1.33$ mA',
        '$2.67$ mA',
        '$4.00$ mA',
        '$0.67$ mA'
      ],
      correctAnswer: 0,
      explanation: 'Loop rule: $\\mathcal{E} - IR - V_C = 0$, so $I = (12 - 8)/3000 \\approx 1.33$ mA. Dividing $V_C$ or the full emf by $R$ ignores the other element in the loop.'
    },
    {
      id: 'rc7-mcq5',
      type: 'mcq' as const,
      question: 'Which best describes what happens to the total charge that passes through $R$ during complete discharge of a capacitor?',
      options: [
        'It equals $Q_0$',
        'It equals $Q_0/e$',
        'It equals $Q_0/2$',
        'It grows without limit'
      ],
      correctAnswer: 0,
      explanation: '$\\int_0^\\infty I\\,dt = \\int_0^\\infty \\frac{Q_0}{\\tau}e^{-t/\\tau}dt = Q_0[-e^{-t/\\tau}]_0^\\infty = Q_0(0-(-1)) = Q_0$. All charge flows through $R$.'
    },
    {
      id: 'rc7-summary',
      type: 'text' as const,
      content: `## Topic Complete: RC Circuits

You've mastered RC circuits for AP Physics C: E&M:

| Part | Topic | Status |
|:---:|:---|:---:|
| 1 | Charging differential equation | ✅ |
| 2 | Discharging | ✅ |
| 3 | Time constant $\\tau = RC$ | ✅ |
| 4 | Current & voltage graphs | ✅ |
| 5 | Power & energy | ✅ |
| 6 | Problem-solving workshop | ✅ |
| 7 | Review & applications | ✅ |

> **Exam tip:** RC circuits appear on nearly every AP Physics C: E&M exam. The differential equation, its solution, and the energy analysis are all fair game for free-response. Practice writing the full derivation from KVL → ODE → separation of variables → solution → initial conditions.`
    }
  ]
};
