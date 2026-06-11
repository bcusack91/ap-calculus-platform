export const precalcRatesOfChangePart6Data = {
  topicSlug: 'rates-of-change-precalc',
  sections: [
    {
      id: 'p6-intro',
      type: 'text' as const,
      content: `
# 📊 Real-World Rate Applications

**Part 6 of 7**

### Rates of Change in Context

Rate of change applies to **any** quantity that varies:

| Application | Function | Rate measures |
|:-----------|:---------|:-------------|
| Economics | Revenue $R(x)$ | Marginal revenue |
| Biology | Population $P(t)$ | Growth rate |
| Chemistry | Concentration $[A](t)$ | Reaction rate |
| Physics | Temperature $T(t)$ | Cooling/heating rate |
| Medicine | Drug level $D(t)$ | Absorption/elimination rate |

### Marginal Analysis (Economics)

If $C(x)$ = total cost of producing $x$ items:

$$\\text{Marginal cost} \\approx C'(x) = \\text{IROC of cost}$$

This is the cost of producing **one more item**. Similarly for revenue and profit.
      `
    },
    {
      id: 'p6-examples',
      type: 'text' as const,
      content: `
## Worked Examples

### Example 1: Population Growth

$P(t) = 500e^{0.03t}$ (bacteria), $t$ in hours.

AROC from $t=0$ to $t=10$:
$$\\frac{P(10)-P(0)}{10} = \\frac{500e^{0.3}-500}{10} = \\frac{500(1.3499-1)}{10} = \\frac{174.9}{10} \\approx 17.5 \\text{ bacteria/hr}$$

### Example 2: Cooling

A cup of coffee cools: $T(t) = 70 + 130e^{-0.05t}$ (°F).

- $T(0) = 200°$F (initial)
- $T(10) = 70 + 130e^{-0.5} \\approx 70 + 78.9 = 148.9°$F

AROC: $\\frac{148.9 - 200}{10} = -5.11°$F/min (cooling at 5.1°/min average)

### Example 3: Profit

$P(x) = -0.5x^2 + 100x - 500$ dollars for $x$ units.

AROC from $x=50$ to $x=60$:
$$\\frac{P(60)-P(50)}{10} = \\frac{(4700)-(3250)}{10} = \\frac{1450}{10} = 145 \\text{ \\$/unit}$$
      `
    },
    {
      id: 'p6-interpret',
      type: 'text' as const,
      content: `
## Interpreting Rates in Context

### Units Matter!

Rate units = $\\frac{\\text{output units}}{\\text{input units}}$

| If $f$ measures... | And input is... | Rate units are... |
|:-------------------|:---------------|:-----------------|
| Meters | Seconds | m/s |
| Dollars | Items | \\$/item |
| Bacteria | Hours | bacteria/hr |
| Gallons | Minutes | gal/min |

### Answering Rate Questions

Always include:
1. **Value**: the numerical rate
2. **Units**: output/input
3. **Context**: what it means practically

**Good answer**: "At $t=5$ minutes, the tank is draining at approximately 12 gallons per minute."

**Bad answer**: "The rate is 12." ❌ (no units, no context)

### Related Rates Preview

If $A = \\pi r^2$ and $r$ changes over time, then $A$ also changes. The rate $dA/dt$ depends on $dr/dt$ — this is **related rates** in calculus.
      `
    },
    {
      id: 'p6-mcq',
      type: 'multiple-choice' as const,
      content: `
**Applications Quiz** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'If $C(x) = 500 + 3x + 0.01x^2$ and AROC from $x=100$ to $x=101$ is $\\$5.01$, this represents:',
            options: ['Total cost', 'Approximate cost of 101st item', 'Profit', 'Revenue'],
            correctAnswer: 1,
            explanation: 'The AROC of cost for one additional unit ≈ marginal cost = cost of the next item.'
          },
          {
            question: 'Rate units for temperature (°F) vs time (min):',
            options: ['°F', 'min', '°F/min', '°F·min'],
            correctAnswer: 2,
            explanation: 'Rate = output/input = °F/min.'
          },
          {
            question: 'Negative rate of change for population means:',
            options: ['Growing', 'Declining', 'Stable', 'Infinite'],
            correctAnswer: 1,
            explanation: 'Negative rate = quantity decreasing = population declining.'
          }
        ]
      }
    },
    {
      id: 'p6-input',
      type: 'input-boxes' as const,
      content: `
**Applied Rates:**

**1)** Revenue $R(x) = 50x - 0.1x^2$. AROC from $x=100$ to $x=200$:

**2)** Tank drains: $V(t)= 1000 - 5t^2$ gallons. AROC from $t=0$ to $t=10$:

**3)** If answer to (2) is your rate, what are its units? Enter "gal/min" or "min/gal":
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['20', '-50', 'gal/min'],
        hint1: '$R(200)=10000-4000=6000$, $R(100)=5000-1000=4000$. $\\frac{2000}{100}$.',
        hint2: '$V(10)=1000-500=500$. $\\frac{500-1000}{10}$.',
        hint3: 'Output (gallons) over input (minutes).',
        explanation: '(1) $\\frac{6000-4000}{100}=20$. (2) $\\frac{500-1000}{10}=-50$ gal/min. (3) gal/min.'
      }
    },
    {
      id: 'p6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Rate Contexts** 🔽
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Marginal cost is approximately:',
            options: ['Total cost', 'Average cost', 'Cost of next item (IROC of cost)', 'Fixed cost'],
            correctAnswer: 2
          },
          {
            label: 'Newton\'s Law of Cooling has rate proportional to:',
            options: ['Temperature', 'Temperature difference from environment', 'Time', 'Mass'],
            correctAnswer: 1
          },
          {
            label: 'If a population doubles every 3 hours, its rate is:',
            options: ['Constant', 'Increasing (exponential)', 'Decreasing', 'Zero'],
            correctAnswer: 1
          },
          {
            label: 'A good rate-of-change answer always includes:',
            options: ['Just the number', 'Number and units', 'Number, units, and context', 'A graph'],
            correctAnswer: 2
          }
        ],
        correctAnswers: ['Cost of next item (IROC of cost)', 'Temperature difference from environment', 'Increasing (exponential)', 'Number, units, and context'],
        hint1: 'Marginal = rate = derivative of cost.',
        hint2: 'Cooling is faster when temp difference is larger.',
        hint3: 'Doubling = exponential growth → increasing rate.',
        explanation: 'Marginal cost ≈ C\'(x). Cooling ∝ ΔT. Doubling → exponential rate. Include value + units + context.'
      }
    },
    {
      id: 'p6-exit',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz** ✅
      `,
      exercise: {
        questions: [
          {
            question: '$P(t)=200(1.05)^t$. AROC from $t=0$ to $t=2$:',
            options: ['$10.25$', '$20.50$', '$10.125$', '$5.125$'],
            correctAnswer: 0,
            explanation: '$P(0)=200, P(2)=200(1.1025)=220.5$. $\\frac{220.5-200}{2}=10.25$.'
          },
          {
            question: 'When a rate decreases toward zero, the function is:',
            options: ['Leveling off', 'Increasing faster', 'Becoming negative', 'Oscillating'],
            correctAnswer: 0,
            explanation: 'Decreasing positive rate → function still increasing but slowing down → leveling off.'
          }
        ]
      }
    }
  ]
};
