export const physics2BernoulliPart4Data = {
  topicSlug: 'bernoullis-equation',
  sections: [
    {
      id: 'be4-intro',
      type: 'text' as const,
      content: `
# 🛫 Lift and Aerodynamics

**Part 4 of 7 — Why Airplanes Fly**

Bernoulli's equation helps explain how wings generate lift, though the full story is more nuanced than textbooks sometimes suggest. Let's get it right.
      `
    },
    {
      id: 'be4-wing-lift',
      type: 'text' as const,
      content: `
## Lift on an Airfoil

### The Bernoulli Explanation

An airplane wing (airfoil) is shaped so that air flows **faster** over the top surface and **slower** under the bottom.

By Bernoulli: faster flow → lower pressure

$$P_{\\text{top}} < P_{\\text{bottom}}$$

This pressure difference creates a net **upward force** — **lift**!

$$F_{\\text{lift}} = (P_{\\text{bottom}} - P_{\\text{top}}) \\times A_{\\text{wing}}$$

### The Full Picture

The Bernoulli explanation is partially correct but incomplete. Lift also involves:

- **Angle of attack:** The wing is tilted, deflecting air downward. By Newton's 3rd law, the air pushes the wing up.
- **Circulation:** The wing creates a circulation pattern that increases speed above and decreases it below.
- **Coandă effect:** Air "sticks" to the curved upper surface.

The combination of pressure differences (Bernoulli) and momentum change (Newton) gives the complete picture. Both are important!

### Key Point for AP

AP Physics 2 focuses on the Bernoulli explanation: faster air on top → lower pressure → net upward force.
      `
    },
    {
      id: 'be4-lift-quiz',
      type: 'multiple-choice' as const,
      content: `
**Lift Quiz**
      `,
      exercise: {
        questions: [
          {
            question: 'Air flows at 80 m/s over the top of a wing and 70 m/s under the bottom. The pressure difference between bottom and top is: ($\\rho_{\\text{air}} = 1.2$ kg/m³)',
            options: [
              '600 Pa',
              '900 Pa',
              '1200 Pa',
              '1800 Pa'
            ],
            correctAnswer: 1,
            explanation: '$\\Delta P = \\frac{1}{2}\\rho(v_{\\text{top}}^2 - v_{\\text{bottom}}^2) = \\frac{1}{2}(1.2)(6400 - 4900) = 0.6(1500) = 900$ Pa.'
          },
          {
            question: 'An airplane has wing area 30 m² and the pressure difference between bottom and top is 900 Pa. The lift force is:',
            options: [
              '30 N',
              '900 N',
              '27,000 N',
              '270,000 N'
            ],
            correctAnswer: 2,
            explanation: '$F = \\Delta P \\times A = 900 \\times 30 = 27{,}000$ N ≈ 27 kN. This needs to equal the plane\'s weight for level flight — about the weight of a small airplane (2700 kg).'
          },
          {
            question: 'An airplane flies upside down during an air show. This is possible because:',
            options: [
              'Bernoulli\'s equation reverses when upside down',
              'The pilot adjusts the angle of attack to deflect air upward, generating downward lift on the wing — wait, that gives upward reaction force',
              'Gravity reverses at altitude',
              'It\'s impossible — the plane must be falling'
            ],
            correctAnswer: 1,
            explanation: 'Inverted flight proves that wing shape alone isn\'t sufficient for lift. By increasing the angle of attack, the flat bottom (now on top) deflects air downward. Newton\'s 3rd law gives an upward reaction force. This is why angle of attack matters as much as wing shape!'
          }
        ]
      }
    },
    {
      id: 'be4-more-applications',
      type: 'text' as const,
      content: `
## More Bernoulli Applications

### ⚾ Curve Balls

A spinning baseball creates faster air on one side (spin adds to airflow) and slower air on the other (spin opposes airflow). The pressure difference curves the ball's path — this is the **Magnus effect**.

- **Topspin:** Ball curves downward (faster air on top → low pressure above)
- **Backspin:** Ball curves upward (faster air below → low pressure below)
- **Sidespin:** Ball curves left or right

### 🏠 Wind and Roofs

Hurricane-force winds blow **over** a roof. By Bernoulli, the fast-moving air creates low pressure above the roof. The still air inside the house has atmospheric pressure (higher). The roof gets pushed **upward** and can be ripped off!

$$F = (P_{\\text{inside}} - P_{\\text{outside}}) \\times A_{\\text{roof}}$$

### 🚗 Race Car Spoilers

Race cars use **inverted** airfoils (spoilers) — faster air goes underneath, creating low pressure below. This pushes the car **down** onto the road (downforce), improving traction.

At high speeds, a Formula 1 car generates enough downforce to drive upside down on a ceiling!
      `
    },
    {
      id: 'be4-roof-drill',
      type: 'input-boxes' as const,
      content: `
**Hurricane Roof Problem** ($\\rho_{\\text{air}} = 1.2$ kg/m³)

A hurricane with wind speed 50 m/s blows over a flat roof. The air inside the house is still.

1) Dynamic pressure of the wind: $\\frac{1}{2}\\rho v^2$ (in Pa)
2) Net upward pressure on the roof (in Pa)
3) If the roof area is 200 m², the upward force (in kN)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['1500', '1500', '300'],
        hint1: '$\\frac{1}{2}(1.2)(50)^2$.',
        hint2: 'Inside: $P_{\\text{atm}}$. Outside: $P_{\\text{atm}} - \\frac{1}{2}\\rho v^2$ (by Bernoulli). Net upward = $\\frac{1}{2}\\rho v^2$.',
        hint3: '$F = \\Delta P \\times A$. Convert N to kN.',
        explanation: 'Dynamic pressure = $\\frac{1}{2}(1.2)(2500) = 1500$ Pa. Net upward pressure = 1500 Pa. $F = 1500 \\times 200 = 300{,}000$ N = 300 kN. That\'s over 30 tons of force!'
      }
    },
    {
      id: 'be4-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz**
      `,
      exercise: {
        questions: [
          {
            question: 'A convertible car is driving fast with the top down. A loose paper on the seat:',
            options: [
              'Gets pushed down by the wind',
              'Gets sucked upward out of the car',
              'Stays put',
              'Slides sideways'
            ],
            correctAnswer: 1,
            explanation: 'Fast air flows over the open car → low pressure above. Still air inside the car → higher pressure below the paper. The pressure difference lifts the paper up and out — Bernoulli in action!'
          },
          {
            question: 'A pitcher throws a fastball with backspin. The ball\'s trajectory curves:',
            options: [
              'Downward more than gravity alone',
              'Upward (appears to "rise")',
              'Sideways',
              'Straight (spin has no effect)'
            ],
            correctAnswer: 1,
            explanation: 'Backspin creates faster air below the ball (spin adds to airflow direction) → low pressure below. Higher pressure above pushes down less than expected. The ball drops less than gravity alone would cause — batters perceive this as the ball "rising."'
          }
        ]
      }
    }
  ]
}
