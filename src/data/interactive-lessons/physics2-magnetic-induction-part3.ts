export const physics2MagInductPart3Data = {
  topicSlug: 'magnetic-induction',
  sections: [
    {
      id: 'magneticinduction-p3-intro',
      type: 'text' as const,
      content: `# 🔄 Lenz's Law

**Part 3 of 7 — Direction of Induced Current**

---

### Lenz's Law

> The induced current flows in a direction that **opposes** the change in flux that caused it.

This is the physical meaning of the negative sign in Faraday's law: $\\mathcal{E} = -N d\\Phi/dt$.

### Why "Opposes the Change" — Not "Opposes the Flux"

| Flux is... | Induced $B$ field... | Result |
|-----------|---------------------|--------|
| **Increasing** ↑ | Opposes → points opposite to external $B$ | Slows the increase |
| **Decreasing** ↓ | Supports → points same direction as external $B$ | Slows the decrease |
| **Constant** | No induced current | Nothing to oppose |

> ⚠️ **Common mistake:** Lenz's law says the induced current opposes the **change** in flux, not the flux itself. If flux is decreasing, the induced current tries to maintain it (same direction as $B$).

### Step-by-Step Algorithm

1. **Determine the direction of external $\\vec{B}$** through the loop
2. **Is flux increasing or decreasing?** (Is $B$ getting stronger? Is the loop entering the field?)
3. **Induced $B$ opposes the change:**
   - If $\\Phi$ increasing → induced $B$ points opposite to external $B$
   - If $\\Phi$ decreasing → induced $B$ points same direction as external $B$
4. **Use the right-hand rule** to find current direction that creates the induced $B$
   - Curl fingers in the direction of current → thumb points in direction of induced $B$

### Energy Conservation Connection

Lenz's law is a consequence of **conservation of energy**. If the induced current aided the change (instead of opposing it), we'd get a runaway effect — perpetual motion! The opposition ensures that energy input (mechanical work, changing field) is required to maintain the induction.
      `
    },
    {
      id: 'magneticinduction-p3-examples',
      type: 'text' as const,
      content: `
## Classic Lenz's Law Scenarios

### Scenario 1: Magnet Approaching a Loop

A bar magnet with its N pole approaches a conducting loop:
- External $B$ through the loop is **increasing** (field gets stronger as magnet approaches)
- Induced $B$ opposes → points **away** from approaching magnet
- Current flows **counterclockwise** (viewed from the magnet's side) to create this opposing field
- The loop acts like a magnet with its N pole facing the approaching N pole → repulsion

### Scenario 2: Magnet Retreating from a Loop

The same magnet is pulled away:
- Flux through the loop is **decreasing**
- Induced $B$ supports → points **toward** the retreating magnet
- Current flows **clockwise** (viewed from the magnet's side)
- The loop acts like a magnet with its S pole facing the retreating N pole → attraction

### Quick Reference: Magnet + Loop

| Magnet Motion | Flux Change | Loop Acts As | Force on Magnet |
|--------------|-------------|--------------|-----------------|
| N pole approaching | Increasing | N pole facing magnet → repels | Opposing motion |
| N pole retreating | Decreasing | S pole facing magnet → attracts | Opposing motion |
| S pole approaching | Increasing (opposite) | S pole facing magnet → repels | Opposing motion |
| S pole retreating | Decreasing (opposite) | N pole facing magnet → attracts | Opposing motion |

In every case, the force opposes the magnet's motion — you must do work to change the flux.
      `
    },
    {
      id: 'magneticinduction-p3-check1',
      type: 'multiple-choice' as const,
      content: `
**Lenz's Law Practice** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'An external $B$ field pointing into the page through a loop is increasing. The induced current flows:',
            options: [
              'Clockwise (to create a field into the page)',
              'Counterclockwise (to create a field out of the page, opposing the increase)',
              'No current — only changing area matters',
              'Alternating direction'
            ],
            correctAnswer: 1,
            explanation: 'Flux into the page is increasing → induced $B$ must oppose (point out of the page) → by the right-hand rule, current flows counterclockwise. The induced current creates a field that partially cancels the increasing external field.'
          },
          {
            question: 'A loop is being pulled out of a region where $B$ points into the page. The induced current:',
            options: [
              'Flows clockwise (to maintain flux into the page)',
              'Flows counterclockwise',
              'Does not flow — $B$ is constant',
              'Depends on how fast you pull'
            ],
            correctAnswer: 0,
            explanation: 'The flux into the page is decreasing (less area in the field). The induced current opposes this decrease by flowing clockwise, creating a field into the page to try to maintain the flux. (The direction doesn\'t depend on speed — speed affects magnitude only.)'
          },
          {
            question: 'Lenz\'s law is fundamentally a consequence of:',
            options: [
              'Coulomb\'s law',
              'Conservation of energy',
              'Newton\'s third law',
              'Conservation of charge'
            ],
            correctAnswer: 1,
            explanation: 'If the induced current aided the flux change instead of opposing it, the flux would increase further, inducing more current, increasing flux more — a runaway process creating energy from nothing. Lenz\'s law prevents this, enforcing energy conservation.'
          },
          {
            question: 'A magnet is dropped through a copper ring. Compared to free fall, the magnet:',
            options: [
              'Falls faster — the ring helps push it',
              'Falls at the same rate — copper is not magnetic',
              'Falls slower — induced currents oppose the motion',
              'Stops completely inside the ring'
            ],
            correctAnswer: 2,
            explanation: 'As the magnet falls through, changing flux induces currents that create forces opposing the motion (Lenz\'s law). This magnetic braking slows the magnet below free-fall. It doesn\'t stop completely because as it slows, the rate of flux change decreases, reducing the braking force.'
          }
        ]
      }
    },
    {
      id: 'magneticinduction-p3-input',
      type: 'input-boxes' as const,
      content: `
**Lenz's Law Reasoning** 🧮

A loop lies in the $xy$-plane. External $B$ points in the $+z$ direction and is decreasing.

**1)** Direction of induced $B$ field? ("up" or "down" for $+z$ or $-z$)

**2)** Current direction viewed from above? ("CW" or "CCW")

**3)** Does the loop attract or repel the source of $B$? ("attract" or "repel")
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['up', 'CCW', 'attract'],
        hint1: 'Flux is decreasing, so induced $B$ must support the existing field',
        hint2: 'Use right-hand rule: curl fingers to get $B$ in the $+z$ direction',
        hint3: 'The loop tries to prevent the flux from decreasing — does it pull the source closer or push it away?',
        explanation: '1) $B$ is in $+z$ and decreasing → induced $B$ supports → points up ($+z$). 2) Right-hand rule for $B$ in $+z$: fingers curl CCW when viewed from above. 3) The loop tries to maintain flux by attracting the source of the field (pulling it closer to keep $B$ strong).'
      }
    }
  ]
};
