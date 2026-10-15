export const physics2KirchhoffPart4Data = {
  topicSlug: 'kirchhoffs-laws',
  sections: [
    {
      id: 'kl4-intro',
      type: 'text' as const,
      content: `
# 🔗 Multi-Loop Circuits

**Part 4 of 7 — Junction and Loop Rules Together**

When a circuit splits into branches, one loop equation is no longer enough. Each branch can carry a different current, so you combine the junction rule (charge) with the loop rule (energy) to find them all. On AP Physics 2, these circuits are driven by a single battery, and the same two rules explain every current and potential difference.
      `
    },
    {
      id: 'kl4-strategy',
      type: 'text' as const,
      content: `
## A Method for Multi-Loop Circuits

### Step-by-Step

1. **Label a current in every branch**: draw an arrow for each one ($I_1, I_2, I_3, \\ldots$). A branch is a path between two junctions; everything in one branch is in series and shares one current.

2. **Apply the junction rule** where branches meet: current in = current out.

3. **Apply the loop rule** around closed paths. Pick loops that each pass through at least one branch you have not used yet.

4. **Solve** by substitution, then check that every junction and every loop balances.

5. **Cross-check** with equivalent resistance when the circuit reduces to series and parallel pieces.

### Why Bother, If $R_{\\text{eq}}$ Works?

Equivalent resistance gives the battery current quickly, but free-response questions often ask you to **write the loop equation for a specific loop** or to **justify** a current with a named physical principle. Writing the junction and loop equations is that justification.

> 📝 Circuits with two batteries of different emf connected in parallel are not assessed on AP Physics 2, so every multi-loop circuit in this part has a single battery.
      `
    },
    {
      id: 'kl4-two-loop-example',
      type: 'text' as const,
      content: `
## Worked Example: One Battery, Two Branches

An $18$ V battery is in series with $R_1 = 3\\;\\Omega$. After $R_1$, the wire splits at junction A into two parallel branches, $R_2 = 6\\;\\Omega$ and $R_3 = 3\\;\\Omega$, which rejoin at junction B.

### Step 1: Label Currents
- $I_1$: through the battery and $R_1$
- $I_2$: through $R_2$
- $I_3$: through $R_3$

### Step 2: Junction Rule at A
$$I_1 = I_2 + I_3 \\quad \\text{...(1)}$$

### Step 3: Loop Rule
**Loop through the battery, $R_1$, and $R_2$:**
$$18 - 3I_1 - 6I_2 = 0 \\quad \\text{...(2)}$$

**Loop through the battery, $R_1$, and $R_3$:**
$$18 - 3I_1 - 3I_3 = 0 \\quad \\text{...(3)}$$

### Step 4: Solve
Comparing (2) and (3): $6I_2 = 3I_3$, so $I_3 = 2I_2$. Then (1) gives $I_1 = 3I_2$.

Substitute into (2): $18 - 9I_2 - 6I_2 = 0 \\Rightarrow I_2 = 1.2$ A

So $I_3 = 2.4$ A and $I_1 = 3.6$ A.

### Step 5: Cross-Check
$R_{\\text{parallel}} = \\frac{(6)(3)}{6 + 3} = 2\\;\\Omega$, so $R_{\\text{eq}} = 3 + 2 = 5\\;\\Omega$ and $I_1 = 18/5 = 3.6$ A ✓

Potential differences: $V_1 = (3.6)(3) = 10.8$ V and $V_2 = V_3 = 7.2$ V, which add to 18 V around either loop ✓
      `
    },
    {
      id: 'kl4-concept-quiz',
      type: 'multiple-choice' as const,
      content: `
**Multi-Loop Concept Check**
      `,
      exercise: {
        questions: [
          {
            question: 'A battery of emf $\\varepsilon$ is in series with $R_1$, which feeds two parallel resistors $R_2$ and $R_3$. Which equation is correct for the loop through the battery, $R_1$, and $R_3$?',
            options: [
              '$\\varepsilon - I_1R_1 - I_2R_2 - I_3R_3 = 0$',
              '$\\varepsilon - I_3R_1 - I_3R_3 = 0$',
              '$\\varepsilon - I_1R_1 - I_3R_3 = 0$',
              '$\\varepsilon + I_1R_1 - I_3R_3 = 0$'
            ],
            correctAnswer: 2,
            explanation: 'The loop crosses the battery, then $R_1$ carrying $I_1$, then $R_3$ carrying $I_3$, with a drop across each resistor. Including the $R_2$ term adds a branch the loop never enters, using $I_3$ in $R_1$ ignores the junction where the current splits, and the plus sign on $I_1R_1$ treats a drop as a rise.'
          },
          {
            question: 'At a junction, $I_1$ flows in while $I_2$ and $I_3$ flow out. Which equation is correct?',
            options: [
              '$I_1 + I_2 + I_3 = 0$',
              '$I_1 = I_2 + I_3$',
              '$I_1 + I_2 = I_3$',
              '$I_1 - I_2 + I_3 = 0$'
            ],
            correctAnswer: 1,
            explanation: 'Current in equals current out, so $I_1 = I_2 + I_3$. Writing all three as a zero sum treats every current as an inflow, and the other two forms put $I_2$ on the incoming side.'
          }
        ]
      }
    },
    {
      id: 'kl4-symbolic',
      type: 'text' as const,
      content: `
## AP-Style Symbolic Setup

Free-response questions often give resistances in terms of $R$ and ask for currents in terms of $\\varepsilon$ and $R$.

**Circuit**: A battery of emf $\\varepsilon$ is in series with a resistor $R$. The current then splits into a branch with resistance $R$ (current $I_2$) and a branch with resistance $2R$ (current $I_3$).

**Junction rule**: $I_1 = I_2 + I_3$

**Loop rule, both loops**:
$$\\varepsilon - I_1R - I_2R = 0 \\qquad \\varepsilon - I_1R - I_3(2R) = 0$$

Subtracting the two loop equations gives $I_2R = 2I_3R$, so $I_2 = 2I_3$ and $I_1 = 3I_3$. Then

$$\\varepsilon = 3I_3R + 2I_3R = 5I_3R$$

$$I_3 = \\frac{\\varepsilon}{5R}, \\quad I_2 = \\frac{2\\varepsilon}{5R}, \\quad I_1 = \\frac{3\\varepsilon}{5R}$$

### What If the $2R$ Branch Is Removed?

Opening a switch in the $2R$ branch leaves a single loop with $2R$ total:

- $I_1$ **decreases** from $\\frac{3\\varepsilon}{5R}$ to $\\frac{\\varepsilon}{2R}$ (fewer paths, larger $R_{\\text{eq}}$)
- The potential difference across the first resistor **decreases**, so the potential difference across the remaining branch **increases**
- The current in the remaining $R$ branch **increases** from $\\frac{2\\varepsilon}{5R}$ to $\\frac{\\varepsilon}{2R}$

> 💡 This kind of "what happens when…" reasoning is a favorite AP question. Follow the chain: paths → $R_{\\text{eq}}$ → battery current → drop across the series resistor → potential difference across the branch.
      `
    },
    {
      id: 'kl4-drill',
      type: 'input-boxes' as const,
      content: `
**Multi-Loop Drill**

A $24$ V battery is in series with $R_1 = 2\\;\\Omega$. The current then splits into two branches that rejoin before returning to the battery:
- Branch A: $R_2 = 24\\;\\Omega$
- Branch B: $R_3 = 6\\;\\Omega$ in series with $R_4 = 2\\;\\Omega$

1) Current $I_1$ through the battery (in A):

2) Current $I_2$ through $R_2$ (in A):

3) Current $I_3$ through branch B (in A):

4) Potential difference across $R_4$ (in V):
      `,
      exercise: {
        boxes: 4,
        correctAnswers: ['3', '0.75', '2.25', '4.5'],
        hint1: 'Branch B is $6 + 2 = 8\\;\\Omega$. In parallel with $24\\;\\Omega$: $\\frac{(24)(8)}{24 + 8} = 6\\;\\Omega$. Add $R_1$: $R_{\\text{eq}} = 8\\;\\Omega$, so $I_1 = 24/8$.',
        hint2: 'Loop through the battery, $R_1$, and $R_2$: $24 - 2I_1 - 24I_2 = 0$ with $I_1 = 3$ A.',
        hint3: 'Junction rule: $I_3 = I_1 - I_2$. Then $V_4 = I_3R_4$.',
        explanation: '$R_{\\text{eq}} = 2 + 6 = 8\\;\\Omega$, so $I_1 = 3$ A. The loop through $R_2$ gives $24 - 6 - 24I_2 = 0$, so $I_2 = 0.75$ A. The junction rule gives $I_3 = 3 - 0.75 = 2.25$ A, and $V_4 = (2.25)(2) = 4.5$ V.'
      }
    },
    {
      id: 'kl4-clean-drill',
      type: 'input-boxes' as const,
      content: `
**Symbolic Circuit, Numbers Plugged In**

Use the AP-style circuit above with $\\varepsilon = 15$ V and $R = 5\\;\\Omega$ (so the branches are $5\\;\\Omega$ and $10\\;\\Omega$, after a $5\\;\\Omega$ series resistor).

1) Battery current $I_1$ with both branches connected (in A):

2) Current $I_3$ in the $2R$ branch (in A):

3) Battery current after the $2R$ branch is disconnected (in A):
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['1.8', '0.6', '1.5'],
        hint1: '$I_1 = \\frac{3\\varepsilon}{5R} = \\frac{3(15)}{5(5)}$.',
        hint2: '$I_3 = \\frac{\\varepsilon}{5R} = \\frac{15}{25}$.',
        hint3: 'With one branch left, the loop has $R + R = 10\\;\\Omega$: $I_1 = 15/10$.',
        explanation: '$I_1 = 45/25 = 1.8$ A and $I_3 = 15/25 = 0.6$ A (so $I_2 = 1.2$ A, and $1.2 + 0.6 = 1.8$ ✓). With the $2R$ branch removed, $I_1 = 15/10 = 1.5$ A, smaller than before.'
      }
    },
    {
      id: 'kl4-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz**
      `,
      exercise: {
        questions: [
          {
            question: 'When you solve a multi-loop problem and get $I_3 = -2$ A, this means:',
            options: [
              'The equations contain an algebra or sign error',
              'The current is 2 A, opposite to the assumed direction',
              'The resistor in that branch has negative resistance',
              'The battery in that branch is connected backward'
            ],
            correctAnswer: 1,
            explanation: 'A negative current value simply means the actual current direction is opposite to what you assumed. The magnitude is still 2 A.'
          },
          {
            question: 'A battery is in series with $R_1$, which feeds two parallel resistors. A third resistor is added in parallel with those two. What happens to the current in $R_1$ and the potential difference across the parallel group?',
            options: [
              '$R_1$ current decreases; parallel potential difference decreases',
              '$R_1$ current increases; parallel potential difference increases',
              '$R_1$ current increases; parallel potential difference decreases',
              '$R_1$ current is unchanged; parallel potential difference is unchanged'
            ],
            correctAnswer: 2,
            explanation: 'Another parallel path lowers $R_{\\text{eq}}$, so the battery current through $R_1$ increases. A larger drop across $R_1$ leaves less of the emf for the parallel group, so its potential difference decreases.'
          }
        ]
      }
    }
  ]
}
