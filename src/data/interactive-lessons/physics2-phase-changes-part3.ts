export const physics2PhaseChangesPart3Data = {
  topicSlug: 'phase-changes-latent-heat',
  sections: [
    {
      id: 'pc3-intro',
      type: 'text' as const,
      content: `
# 📈 Heating Curves & Multi-Step Energy Problems

**Part 3 of 7 — From Ice to Steam**

A **heating curve** shows how the temperature of a substance changes as energy is continuously added. For water, there are **five distinct stages** — three with temperature changes and two flat sections (phase changes).
      `
    },
    {
      id: 'pc3-heating-curve',
      type: 'text' as const,
      content: `
## The Complete Heating Curve for Water

Starting with ice at $-20$°C and ending with steam at $120$°C, there are **five stages**:

### Stage 1: Heating Ice ($-20$°C → $0$°C)
$$Q_1 = m c_{\\text{ice}} \\Delta T$$
$c_{\\text{ice}} = 2{,}090$ J/(kg·°C)

### Stage 2: Melting Ice (0°C, solid → liquid)
$$Q_2 = m L_f$$
$L_f = 334{,}000$ J/kg — **temperature stays at 0°C**

### Stage 3: Heating Water ($0$°C → $100$°C)
$$Q_3 = m c_{\\text{water}} \\Delta T$$
$c_{\\text{water}} = 4{,}186$ J/(kg·°C)

### Stage 4: Boiling Water (100°C, liquid → gas)
$$Q_4 = m L_v$$
$L_v = 2{,}260{,}000$ J/kg — **temperature stays at 100°C**

### Stage 5: Heating Steam ($100$°C → $120$°C)
$$Q_5 = m c_{\\text{steam}} \\Delta T$$
$c_{\\text{steam}} = 2{,}010$ J/(kg·°C)

### Total Energy

$$Q_{\\text{total}} = Q_1 + Q_2 + Q_3 + Q_4 + Q_5$$

The flat sections (stages 2 and 4) on the heating curve represent phase changes — energy is absorbed but temperature does not change.
      `
    },
    {
      id: 'pc3-curve-quiz',
      type: 'multiple-choice' as const,
      content: `
**Heating Curve Concepts** 📊
      `,
      exercise: {
        questions: [
          {
            question: 'On a heating curve, the flat (horizontal) sections represent:',
            options: [
              'The heater being turned off',
              'A phase change where temperature stays constant',
              'A decrease in specific heat capacity',
              'Thermal equilibrium with surroundings'
            ],
            correctAnswer: 1,
            explanation: 'Flat sections on a heating curve indicate phase changes. During these intervals, all added energy goes into breaking intermolecular bonds (changing potential energy) rather than increasing kinetic energy, so the temperature remains constant.'
          },
          {
            question: 'Which stage in converting ice at $-20$°C to steam at $120$°C requires the MOST energy?',
            options: [
              'Heating ice from $-20$°C to 0°C',
              'Melting ice at 0°C',
              'Heating water from 0°C to 100°C',
              'Vaporizing water at 100°C'
            ],
            correctAnswer: 3,
            explanation: 'Vaporization requires $Q_4 = mL_v = m(2{,}260{,}000)$ J, which is by far the largest contribution. For comparison, melting requires only $m(334{,}000)$ J — about 6.8× less.'
          }
        ]
      }
    },
    {
      id: 'pc3-worked-example',
      type: 'text' as const,
      content: `
## Worked Example: Full Heating Curve Calculation

**Problem**: Calculate the total energy needed to convert 0.200 kg of ice at $-20$°C to steam at $120$°C.

### Stage 1: Heat ice from $-20$°C to 0°C
$$Q_1 = mc_{\\text{ice}}\\Delta T = (0.200)(2{,}090)(20) = 8{,}360 \\text{ J}$$

### Stage 2: Melt ice at 0°C
$$Q_2 = mL_f = (0.200)(334{,}000) = 66{,}800 \\text{ J}$$

### Stage 3: Heat water from 0°C to 100°C
$$Q_3 = mc_{\\text{water}}\\Delta T = (0.200)(4{,}186)(100) = 83{,}720 \\text{ J}$$

### Stage 4: Vaporize water at 100°C
$$Q_4 = mL_v = (0.200)(2{,}260{,}000) = 452{,}000 \\text{ J}$$

### Stage 5: Heat steam from 100°C to 120°C
$$Q_5 = mc_{\\text{steam}}\\Delta T = (0.200)(2{,}010)(20) = 8{,}040 \\text{ J}$$

### Total:
$$Q_{\\text{total}} = 8{,}360 + 66{,}800 + 83{,}720 + 452{,}000 + 8{,}040 = 618{,}920 \\text{ J} \\approx 619 \\text{ kJ}$$

Notice that **Stage 4 (vaporization)** accounts for $452/619 \\approx 73\\%$ of the total energy!
      `
    },
    {
      id: 'pc3-multi-step-drill',
      type: 'input-boxes' as const,
      content: `
**Multi-Step Heating Calculation** 🔢

Calculate the total energy to convert **0.500 kg of ice at $-10$°C to steam at $110$°C**.

Use: $c_{\\text{ice}} = 2{,}090$ J/(kg·°C), $L_f = 334{,}000$ J/kg, $c_{\\text{water}} = 4{,}186$ J/(kg·°C), $L_v = 2{,}260{,}000$ J/kg, $c_{\\text{steam}} = 2{,}010$ J/(kg·°C).

1) $Q_1$: Energy to heat ice from $-10$°C to 0°C (in kJ)
2) $Q_2$: Energy to melt all the ice (in kJ)
3) $Q_3$: Energy to heat water from 0°C to 100°C (in kJ)
4) $Q_4$: Energy to vaporize all the water (in kJ)
5) $Q_5$: Energy to heat steam from 100°C to 110°C (in kJ)
6) $Q_{\\text{total}}$ (in kJ)

*Round all answers to 3 significant figures.*
      `,
      exercise: {
        boxes: 6,
        correctAnswers: ['10.45', '167', '209.3', '1130', '10.05', '1527', '10.450', '209.30', '10.050'],
        hint1: '$Q_1 = mc_{\\text{ice}}\\Delta T = (0.500)(2090)(10)$. Convert to kJ.',
        hint2: '$Q_2 = mL_f = (0.500)(334{,}000)$. $Q_3 = mc_w \\Delta T = (0.500)(4186)(100)$.',
        hint3: '$Q_4 = mL_v = (0.500)(2{,}260{,}000)$. $Q_5 = mc_s \\Delta T = (0.500)(2010)(10)$. Sum all five.',
        explanation: '$Q_1 = (0.500)(2090)(10) = 10{,}450$ J = **10.45 kJ**. $Q_2 = (0.500)(334{,}000) = 167{,}000$ J = **167 kJ**. $Q_3 = (0.500)(4186)(100) = 209{,}300$ J = **209.3 kJ**. $Q_4 = (0.500)(2{,}260{,}000) = 1{,}130{,}000$ J = **1130 kJ**. $Q_5 = (0.500)(2010)(10) = 10{,}050$ J = **10.05 kJ**. Total = $10.45 + 167 + 209.3 + 1130 + 10.05 = $ **1526.8 kJ ≈ 1527 kJ**.'
      }
    },
    {
      id: 'pc3-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz**
      `,
      exercise: {
        questions: [
          {
            question: 'On a heating curve for water, the slope of the liquid-water segment (0°C to 100°C) is less steep than the slope of the ice segment ($-20$°C to 0°C). This is because:',
            options: [
              'Water has a larger temperature range',
              'Water has a higher specific heat capacity than ice, so more energy is needed per degree',
              'Ice absorbs energy faster',
              'The heater outputs more power during the ice phase'
            ],
            correctAnswer: 1,
            explanation: 'A steeper slope on a heating curve means less energy is needed per degree of temperature change (lower specific heat). Water has $c = 4{,}186$ J/(kg·°C) vs ice at $c = 2{,}090$ J/(kg·°C), so the water segment has a gentler slope — it takes more energy to raise the temperature by each degree.'
          },
          {
            question: 'You are heating 1.0 kg of water at 100°C with a 1000 W heater. Approximately how long until all the water has boiled away?',
            options: [
              '334 seconds',
              '2260 seconds (about 38 minutes)',
              '4186 seconds',
              '100 seconds'
            ],
            correctAnswer: 1,
            explanation: '$t = Q/P = mL_v/P = (1.0)(2{,}260{,}000)/1000 = 2260$ s ≈ 37.7 minutes. All the energy goes into the phase change at constant 100°C.'
          }
        ]
      }
    }
  ]
}
