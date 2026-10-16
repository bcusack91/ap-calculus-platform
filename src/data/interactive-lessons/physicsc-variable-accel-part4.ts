export const physCVarAccelPart4Data = {
  topicSlug: 'variable-acceleration-physics-c',
  sections: [
    {
      id: 'varaccel4-intro',
      type: 'text' as const,
      content: `# Variable Acceleration — a(v) and Separation of Variables

**Part 4 of 7**

When acceleration depends on **velocity** — $a = a(v)$ — we can no longer simply integrate with respect to time. Instead, we use **separation of variables**.

### Common Physical Examples

| Situation | $a(v)$ |
|:---|:---:|
| Linear drag (low speed) | $a = -bv$ |
| Falling with linear drag | $a = g - (k/m)v$ |
| Constant applied force minus linear drag | $a = F_0/m - bv$ |

The AP Physics C course models resistive forces as $F = -kv$ (linear drag), so every $a(v)$ in this lesson is linear in $v$.

### The Technique

Starting from $a = dv/dt$:

$$\\frac{dv}{dt} = a(v)$$

Separate variables:

$$\\frac{dv}{a(v)} = dt$$

Integrate both sides:

$$\\int_{v_0}^{v} \\frac{dv'}{a(v')} = \\int_0^t dt' = t$$`
    },
    {
      id: 'varaccel4-mcq1',
      type: 'mcq' as const,
      question: 'A particle has $a = -2v$ with $v(0) = 10$ m/s. What is $v(t)$?',
      options: ['$10e^{-2t}$', '$10 - 2t$', '$10/(1+2t)$', '$10\\cos(2t)$'],
      correctAnswer: 0,
      explanation: '$dv/dt = -2v \\implies dv/v = -2\\,dt \\implies \\ln v = -2t + C \\implies v = Ce^{-2t}$. With $v(0) = 10$: $v(t) = 10e^{-2t}$.'
    },
    {
      id: 'varaccel4-linear',
      type: 'text' as const,
      content: `## Linear Drag: $a = -bv$

This models drag force proportional to velocity (e.g., motion through a viscous fluid at low speeds).

$$\\frac{dv}{dt} = -bv \\implies \\frac{dv}{v} = -b\\,dt$$

$$\\ln\\frac{v}{v_0} = -bt \\implies v(t) = v_0 e^{-bt}$$

### Finding Position

$$x(t) = \\int_0^t v_0 e^{-bt'}\\,dt' = \\frac{v_0}{b}(1 - e^{-bt})$$

### Key Features

| Quantity | Value |
|:---|:---:|
| Time constant | $\\tau = 1/b$ |
| $v$ at $t = \\tau$ | $v_0/e \\approx 0.37v_0$ |
| Terminal position | $x_{\\infty} = v_0/b$ |
| Half-life of velocity | $t_{1/2} = \\ln 2/b$ |

### Physical Insight

The velocity decays exponentially. The object covers a **finite total distance** $v_0/b$ even though it never truly stops (it asymptotically approaches zero velocity).`
    },
    {
      id: 'varaccel4-mcq2',
      type: 'mcq' as const,
      question: 'A puck slides on ice with deceleration $a = -0.5v$. Starting at $v_0 = 4$ m/s, the total distance traveled before stopping is:',
      options: ['$8$ m', '$4$ m', '$16$ m', '$2$ m'],
      correctAnswer: 0,
      explanation: 'Total distance $= v_0/b = 4/0.5 = 8$ m. (The puck asymptotically approaches a final position $8$ m from the start.)'
    },
    {
      id: 'varaccel4-quadratic',
      type: 'text' as const,
      content: `## Falling with Linear Drag: $a = g - (k/m)v$

For an object released from rest and falling with a resistive force $-kv$ (down is positive):

$$m\\frac{dv}{dt} = mg - kv$$

### Separation of Variables

$$\\int_0^{v} \\frac{dv'}{g - (k/m)v'} = \\int_0^t dt' \\implies -\\frac{m}{k}\\ln\\left(1 - \\frac{kv}{mg}\\right) = t$$

### Solution

$$v(t) = \\frac{mg}{k}\\left(1 - e^{-kt/m}\\right)$$

### Behavior

- At small $t$: $v \\approx gt$ (drag negligible at first)
- As $t \\to \\infty$: $v \\to v_T = mg/k$, the **terminal velocity**, where the net force is zero
- The time constant is $m/k$: after one time constant, $v \\approx 0.63\\,v_T$

### Terminal Speed for Any Drag Law

You can always find terminal speed by setting the net force to zero, even when you cannot solve for $v(t)$. For a drag force of magnitude $bv^2$: $mg = bv_T^2 \\implies v_T = \\sqrt{mg/b}$. (On the AP Physics C exam, full $v(t)$ solutions use the linear model $-kv$.)`
    },
    {
      id: 'varaccel4-mcq3',
      type: 'mcq' as const,
      question: 'An object falls with $a = 10 - 0.4v^2$ $m/s^{2}$. The terminal velocity is:',
      options: ['$5$ m/s', '$25$ m/s', '$4$ m/s', '$\\sqrt{10}$ m/s'],
      correctAnswer: 0,
      explanation: 'At terminal velocity, $a = 0$: $10 - 0.4v_T^2 = 0 \\implies v_T^2 = 25 \\implies v_T = 5$ m/s.'
    },
    {
      id: 'varaccel4-finding-x',
      type: 'text' as const,
      content: `## Finding Position When $a = a(v)$

There are two approaches:

### Approach 1: Find $v(t)$ first, then integrate

$$x(t) = \\int_0^t v(t')\\,dt'$$

### Approach 2: Use the chain rule directly

Since $a = v\\frac{dv}{dx}$:

$$a(v) = v\\frac{dv}{dx}$$

Separate:

$$a(v)\\,dx = v\\,dv \\implies dx = \\frac{v\\,dv}{a(v)}$$

$$x - x_0 = \\int_{v_0}^{v} \\frac{v'\\,dv'}{a(v')}$$

### Example: Linear Drag

$a = -bv$:

$$x = \\int_{v_0}^{v} \\frac{v'\\,dv'}{-bv'} = -\\frac{1}{b}\\int_{v_0}^{v} dv' = \\frac{v_0 - v}{b}$$

As $v \\to 0$: $x \\to v_0/b$ ✓ (matches our earlier result).`
    },
    {
      id: 'varaccel4-mcq4',
      type: 'mcq' as const,
      question: 'A block sliding on an oil film has $a = -0.40v$ (SI units). Using $x - x_0 = (v_0 - v)/b$, how far does it travel while slowing from $10$ m/s to $2.0$ m/s?',
      options: [
        '$20$ m',
        '$25$ m',
        '$8.0$ m',
        '$3.2$ m'
      ],
      correctAnswer: 0,
      explanation: 'Here $b = 0.40$ s$^{-1}$, so $x - x_0 = (10 - 2.0)/0.40 = 20$ m. $25$ m is the total coasting distance $v_0/b$ to a full stop, $8.0$ m forgets to divide by $b$, and $3.2$ m multiplies by $b$ instead.'
    }
  ]
};
