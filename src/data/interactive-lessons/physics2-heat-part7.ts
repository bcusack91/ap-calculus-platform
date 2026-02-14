export const physics2HeatPart7Data = {
  topicSlug: 'heat-specific-heat',
  sections: [
    {
      id: 'ht7-intro',
      type: 'text' as const,
      content: `
# 🎯 Synthesis & AP Review

**Part 7 of 7 — Putting It All Together**

You've learned the core concepts of heat and specific heat. Now it's time to integrate everything, avoid common AP mistakes, and tackle the kinds of problems you'll see on the exam.

### Concept Map — How It All Connects

- **Temperature** → average molecular KE → measured in K
- **Heat** ($Q$) → energy transfer due to $\\Delta T$ → measured in J
- **Specific heat** ($c$) → links $Q$, $m$, and $\\Delta T$ via $Q = mc\\Delta T$
- **Calorimetry** → conservation of energy: $\\sum Q_i = 0$
- **Conduction** → $Q/t = kA\\Delta T/L$ → through solids
- **Convection** → bulk fluid motion → natural or forced
- **Radiation** → $P = \\sigma \\varepsilon A T^4$ → no medium needed
      `
    },
    {
      id: 'ht7-mistakes',
      type: 'text' as const,
      content: `
## Common AP Mistakes to Avoid

### Mistake 1: Confusing Heat and Temperature
❌ "The object has a lot of heat"
✅ "The object has high internal energy" or "The object is at a high temperature"

Heat is a **process** (energy in transit), not a property of an object.

### Mistake 2: Forgetting to Convert Units
- Temperature: use **K** for radiation problems ($P = \\sigma \\varepsilon A T^4$)
- Temperature: °C or K both work for $\\Delta T$ in $Q = mc\\Delta T$ (the *change* is the same)
- Length: convert cm or mm to **m** for conduction ($Q/t = kA\\Delta T/L$)

### Mistake 3: Sign Errors in Calorimetry
The equation $\\sum Q_i = 0$ handles signs automatically IF you use $\\Delta T = T_f - T_i$ consistently.
- Hot object: $T_f < T_i$ → $\\Delta T < 0$ → $Q < 0$ ✅
- Cold object: $T_f > T_i$ → $\\Delta T > 0$ → $Q > 0$ ✅

### Mistake 4: Using °C in Stefan-Boltzmann
$P = \\sigma \\varepsilon A T^4$ requires **absolute temperature in kelvins**.
- 20°C → 293 K ✅
- Using $T = 20$ → catastrophically wrong answer ❌

### Mistake 5: Thinking "Adding Heat Always Raises Temperature"
During a phase change (melting, boiling), temperature stays constant while heat is absorbed. The energy goes into breaking molecular bonds (latent heat), not increasing KE.
      `
    },
    {
      id: 'ht7-mixed-quiz',
      type: 'multiple-choice' as const,
      content: `
**Mixed Concept Quiz** 🧠
      `,
      exercise: {
        questions: [
          {
            question: 'Two objects, A and B, are in thermal contact. Object A has mass 2 kg and specific heat 500 J/(kg·°C). Object B has mass 1 kg and specific heat 2{,}000 J/(kg·°C). Their thermal masses ($mc$) are:',
            options: [
              'A has larger thermal mass',
              'B has larger thermal mass',
              'They have equal thermal masses',
              'Cannot determine without knowing temperatures'
            ],
            correctAnswer: 1,
            explanation: '$mc_A = (2)(500) = 1{,}000$ J/°C. $mc_B = (1)(2{,}000) = 2{,}000$ J/°C. B has the larger thermal mass, so the equilibrium temperature will be closer to B\'s initial temperature.'
          },
          {
            question: 'A black asphalt road ($\\varepsilon = 0.95$) and a white concrete sidewalk ($\\varepsilon = 0.30$) are side by side in sunlight. After several hours, the asphalt is much hotter. On the AP exam, this is best explained by:',
            options: [
              'Asphalt has a higher specific heat',
              'Asphalt absorbs more solar radiation due to higher absorptivity',
              'Concrete conducts heat into the ground faster',
              'Asphalt undergoes convection more readily'
            ],
            correctAnswer: 1,
            explanation: 'By Kirchhoff\'s law, good emitters are also good absorbers. Asphalt with $\\varepsilon = 0.95$ absorbs 95% of incident radiation, while concrete with $\\varepsilon = 0.30$ absorbs only 30%. The extra absorbed energy raises asphalt\'s temperature more.'
          },
          {
            question: 'A composite wall has Layer 1 ($R_1 = 0.5$ m²·K/W) and Layer 2 ($R_2 = 2.0$ m²·K/W) in series. If the total temperature difference is 25°C and the wall area is 10 m², the rate of heat flow is:',
            options: [
              '50 W',
              '100 W',
              '125 W',
              '500 W'
            ],
            correctAnswer: 1,
            explanation: '$R_{\\text{total}} = R_1 + R_2 = 0.5 + 2.0 = 2.5$ m²·K/W. $Q/t = A\\Delta T / R_{\\text{total}} = (10)(25)/2.5 = 100$ W.'
          }
        ]
      }
    },
    {
      id: 'ht7-frq-preview',
      type: 'text' as const,
      content: `
## AP-Style FRQ Preview

Here's the type of multi-part free-response question you might see on the AP Physics 2 exam:

### Scenario
A student performs a calorimetry experiment. She heats a 0.150 kg metal cylinder in boiling water (100°C) and then transfers it to an insulated cup containing 0.250 kg of water at 22.0°C. The final equilibrium temperature is 25.2°C.

### Typical AP Questions

**(a)** Is the metal's specific heat greater than, less than, or equal to water's specific heat? Justify your answer using evidence from the experiment. *(2 pts)*

**Answer**: Less than water's. The final temperature (25.2°C) is much closer to water's initial temperature (22.0°C) than to the metal's (100.0°C). Since the masses are comparable, the metal must have a much smaller specific heat to account for this small final temperature shift.

**(b)** Calculate the specific heat of the metal. *(3 pts)*

$$c_{\\text{metal}} = \\frac{-m_w c_w (T_f - T_{w,i})}{m_{\\text{metal}}(T_f - T_{\\text{metal},i})}$$
$$= \\frac{-(0.250)(4{,}186)(25.2 - 22.0)}{(0.150)(25.2 - 100.0)}$$
$$= \\frac{-(0.250)(4{,}186)(3.2)}{(0.150)(-74.8)}$$
$$= \\frac{-3{,}348.8}{-11.22} = 298 \\text{ J/(kg·°C)}$$

**(c)** The student suspects some heat was lost to the environment. If this occurred, would the calculated specific heat be too high or too low? Explain. *(2 pts)*

**Answer**: Too low. If heat escaped to the environment, then the water didn't receive all the energy the metal lost. This means $T_f$ is lower than ideal, making $(T_f - T_{w,i})$ smaller and thus the numerator smaller. The calculated $c$ would underestimate the true value.
      `
    },
    {
      id: 'ht7-synthesis-drill',
      type: 'input-boxes' as const,
      content: `
**Synthesis Problem Drill** 🔢

A 0.25 kg iron block ($c = 450$ J/(kg·°C)) at 350°C is dropped into 0.80 kg of water ($c = 4{,}186$ J/(kg·°C)) at 15°C in an insulated container.

1) Heat capacity (thermal mass) of the iron block, $mc$, in J/°C (round to nearest whole number)

2) Heat capacity (thermal mass) of the water, $mc$, in J/°C (round to nearest whole number)

3) Final equilibrium temperature in °C (round to 1 decimal place)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['113', '3349', '25.9'],
        hint1: '$mc_{\\text{Fe}} = (0.25)(450)$.',
        hint2: '$mc_w = (0.80)(4{,}186)$.',
        hint3: '$113(T_f - 350) + 3{,}349(T_f - 15) = 0$. Expand and solve for $T_f$.',
        explanation: '1) $mc_{\\text{Fe}} = (0.25)(450) = 112.5 \\approx 113$ J/°C. 2) $mc_w = (0.80)(4{,}186) = 3{,}348.8 \\approx 3{,}349$ J/°C. 3) $113 T_f - 39{,}550 + 3{,}349 T_f - 50{,}235 = 0 \\Rightarrow 3{,}462 T_f = 89{,}785 \\Rightarrow T_f = 25.9$°C.'
      }
    },
    {
      id: 'ht7-mastery-quiz',
      type: 'multiple-choice' as const,
      content: `
**Final Mastery Quiz** 🏆
      `,
      exercise: {
        questions: [
          {
            question: 'A student calculates the power radiated by a lightbulb filament at 2{,}500°C using $P = \\sigma \\varepsilon A T^4$. If she accidentally uses $T = 2{,}500$ instead of converting to kelvins (2{,}773 K), her answer will be:',
            options: [
              'Slightly too low (by about 5%)',
              'Slightly too high',
              'Significantly too low (about 33% too low)',
              'The same, since the difference is small'
            ],
            correctAnswer: 2,
            explanation: 'Using 2{,}500 K vs 2{,}773 K: ratio $= (2{,}500/2{,}773)^4 = (0.9015)^4 = 0.660$. Her answer would be only 66% of the correct value — about 34% too low. Always use kelvins for radiation!'
          },
          {
            question: 'In a well-insulated calorimeter, 0.10 kg of an unknown metal at 200°C is placed in 0.40 kg of water at 20°C. The final temperature is 21°C. The specific heat of the metal is closest to:',
            options: [
              '93 J/(kg·°C)',
              '128 J/(kg·°C)',
              '450 J/(kg·°C)',
              '900 J/(kg·°C)'
            ],
            correctAnswer: 0,
            explanation: '$c = \\frac{-m_w c_w(T_f - T_{w,i})}{m(T_f - T_i)} = \\frac{-(0.40)(4{,}186)(1)}{(0.10)(-179)} = \\frac{-1{,}674.4}{-17.9} = 93.5$ J/(kg·°C). This is very low — close to gold (129) or lead (128), suggesting a dense metal.'
          },
          {
            question: 'A double-pane window has two glass layers ($R_1 = R_3 = 0.005$ m²·K/W) with an air gap ($R_2 = 0.40$ m²·K/W). What percentage of the total thermal resistance is provided by the air gap?',
            options: [
              '49%',
              '80%',
              '98%',
              '99.5%'
            ],
            correctAnswer: 2,
            explanation: '$R_{\\text{total}} = 0.005 + 0.40 + 0.005 = 0.41$ m²·K/W. Air gap fraction $= 0.40/0.41 = 0.976 \\approx 98\\%$. The thin air gap provides almost all the insulation.'
          },
          {
            question: 'Which combination correctly ranks substances from highest to lowest specific heat?',
            options: [
              'Copper > Iron > Aluminum > Water',
              'Water > Aluminum > Iron > Copper',
              'Water > Copper > Aluminum > Iron',
              'Aluminum > Water > Iron > Copper'
            ],
            correctAnswer: 1,
            explanation: 'Water (4{,}186) > Aluminum (900) > Iron (450) > Copper (390), all in J/(kg·°C). Water\'s specific heat is roughly 4-10 times higher than common metals.'
          }
        ]
      }
    }
  ]
}
