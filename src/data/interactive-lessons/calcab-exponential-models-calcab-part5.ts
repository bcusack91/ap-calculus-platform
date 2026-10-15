export const calcabExpModelsPart5Data = {
  topicSlug: 'exponential-models-calcab',
  sections: [
    {
      id: 'exp5-intro',
      type: 'text' as const,
      content: `# Exponential Models

**Part 5 of 7 — Writing and Solving Rate Models**

### From Words to a Differential Equation

AP questions often describe a rate in words and expect you to write the DE. "Rate of change" always means the derivative, and "proportional to" means "equals a constant $k$ times".

| Statement about $y$ | Differential equation |
|:---:|:---:|
| Rate of change is proportional to $y$ | $\\frac{dy}{dt} = ky$ |
| Rate of change is proportional to $\\sqrt{y}$ | $\\frac{dy}{dt} = k\\sqrt{y}$ |
| Rate of change is inversely proportional to $y$ | $\\frac{dy}{dt} = \\frac{k}{y}$ |
| Rate of change is proportional to the gap $A - y$ | $\\frac{dy}{dt} = k(A - y)$ |
| Rate of change depends only on time | $\\frac{dy}{dt} = f(t)$ |

### Reading the Sign of $k$

| Model | $k > 0$ means... |
|:---:|:---:|
| $\\frac{dy}{dt} = ky$ | $y$ grows (when $y > 0$) |
| $\\frac{dy}{dt} = k(A - y)$ | $y$ moves toward $A$ from either side |

> **Key Fact:** The first row is the exponential model (FUN-7.F.2): "the rate of change of a quantity is proportional to the size of the quantity" means $\\frac{dy}{dt} = ky$, with solution $y = y_0e^{kt}$.`
    },
    {
      id: 'exp5-quiz1',
      type: 'multiple-choice' as const,
      content: '**Translate the Rate Statement** 🎯',
      exercise: {
        questions: [
          {
            question: 'A quantity $y$ changes at a rate proportional to the square root of $y$. Which equation models this?',
            options: ['$\\frac{dy}{dt} = k\\sqrt{y}$', '$y = k\\sqrt{t}$', '$\\frac{dy}{dt} = k\\sqrt{t}$', '$\\frac{dy}{dt} = \\frac{k}{\\sqrt{y}}$'],
            correctAnswer: 0,
            explanation: 'The rate of change is $\\frac{dy}{dt}$, and "proportional to $\\sqrt{y}$" makes it $k\\sqrt{y}$. Writing $y = k\\sqrt{t}$ describes the quantity rather than its rate, $k\\sqrt{t}$ makes the rate depend on time instead of on $y$, and $\\frac{k}{\\sqrt{y}}$ is inverse proportion.'
          },
          {
            question: 'The amount $A$ of a medication in the blood rises toward $50$ mg at a rate proportional to $50 - A$. With $k > 0$, which equation models $A$?',
            options: ['$\\frac{dA}{dt} = k(50 - A)$', '$\\frac{dA}{dt} = kA$', '$\\frac{dA}{dt} = k(A - 50)$', '$\\frac{dA}{dt} = 50 - kt$'],
            correctAnswer: 0,
            explanation: 'While $A < 50$ the gap $50 - A$ is positive, so $k(50 - A) > 0$ and $A$ rises toward $50$. With $k > 0$, $k(A - 50)$ is negative below $50$ and pushes $A$ away from $50$; $kA$ grows without any limit; $50 - kt$ makes the rate depend on time, not on the gap.'
          },
          {
            question: 'The function $y = 30 - 20e^{-0.4t}$ solves which initial value problem?',
            options: ['$\\frac{dy}{dt} = 0.4(30 - y)$, $y(0) = 10$', '$\\frac{dy}{dt} = 0.4(30 - y)$, $y(0) = 30$', '$\\frac{dy}{dt} = -0.4y$, $y(0) = 10$', '$\\frac{dy}{dt} = 0.4(y - 30)$, $y(0) = 10$'],
            correctAnswer: 0,
            explanation: '$\\frac{dy}{dt} = 8e^{-0.4t}$ and $30 - y = 20e^{-0.4t}$, so $\\frac{dy}{dt} = 0.4(30 - y)$; also $y(0) = 30 - 20 = 10$. The value $30$ is the limit as $t \\to \\infty$, not the starting value. The equation $-0.4y$ would send $y$ to $0$, and $0.4(y - 30)$ has the wrong sign: it equals $-8e^{-0.4t}$.'
          }
        ]
      }
    },
    {
      id: 'exp5-gap',
      type: 'text' as const,
      content: `### Solving $\\frac{dy}{dt} = k(A - y)$ by Separation

**Example:** A student's mastery score $P$ (in percent) satisfies $\\frac{dP}{dt} = 0.2(100 - P)$, with $t$ in weeks and $P(0) = 20$.

| Step | Work |
|:---:|:---:|
| Separate | $\\frac{dP}{100 - P} = 0.2\\,dt$ |
| Integrate | $-\\ln\\lvert 100 - P\\rvert = 0.2t + C$ |
| Solve | $100 - P = Be^{-0.2t}$ |
| Initial condition | $100 - 20 = B$, so $B = 80$ |
| Particular solution | $P(t) = 100 - 80e^{-0.2t}$ |

After 5 weeks: $P(5) = 100 - 80e^{-1} \\approx 70.57$ percent.

### Reading the Model Without Solving

| Question | Answer from the DE |
|:---:|:---:|
| Is $P$ increasing? | Yes: $P < 100$, so $\\frac{dP}{dt} = 0.2(100 - P) > 0$ |
| Concavity? | $\\frac{d^2P}{dt^2} = -0.2\\frac{dP}{dt} < 0$: concave down |
| When is $P$ rising fastest? | At $t = 0$, where the gap is largest: $\\frac{dP}{dt} = 16$ |
| Long-run value? | $P \\to 100$ as $t \\to \\infty$ |

> **AP Tip:** Watch the sign when integrating $\\frac{1}{100 - P}$: the chain rule gives $-\\ln\\lvert 100 - P\\rvert$. Logistic growth $\\frac{dy}{dt} = ky(L - y)$ is BC-only; it is not tested on AB.`
    },
    {
      id: 'exp5-dropdown',
      type: 'dropdown-select' as const,
      content: '**Read the model.** 🔍',
      exercise: {
        dropdowns: [
          {
            label: 'For $\\frac{dP}{dt} = 0.2(100 - P)$ with $P(0) = 20$, the graph of $P$ is:',
            options: ['Increasing and concave down', 'Increasing and concave up', 'Decreasing and concave up', 'Increasing and linear'],
            correctAnswers: ['Increasing and concave down'],
            hints: ['Find the sign of $\\frac{dP}{dt}$, then differentiate the DE: $\\frac{d^2P}{dt^2} = -0.2\\frac{dP}{dt}$.'],
            explanation: '$\\frac{dP}{dt} > 0$ because $P < 100$, and $\\frac{d^2P}{dt^2} = -0.2\\frac{dP}{dt} < 0$, so $P$ increases at a decreasing rate.'
          },
          {
            label: 'If $y$ is in milligrams and $t$ is in hours, the units of $k$ in $\\frac{dy}{dt} = k(50 - y)$ are:',
            options: ['per hour', 'milligrams per hour', 'milligrams', 'hours'],
            correctAnswers: ['per hour'],
            hints: ['The left side has units mg/hr, and $50 - y$ has units mg.'],
            explanation: 'mg/hr $= k \\cdot$ mg forces $k$ to have units $1/\\text{hr}$, that is, per hour.'
          },
          {
            label: 'For $\\frac{dy}{dt} = 0.5(60 - y)$ with $y(0) = 20$, $\\frac{dy}{dt}$ is largest when:',
            options: ['$t = 0$', '$y = 30$', '$y = 60$', '$y = 40$'],
            correctAnswers: ['$t = 0$'],
            hints: ['The rate is proportional to the gap $60 - y$. When is the gap biggest?'],
            explanation: '$y$ starts at $20$ and rises toward $60$, so the gap $60 - y$ is largest at $t = 0$, where $\\frac{dy}{dt} = 0.5(40) = 20$. At $y = 60$ the rate is $0$.'
          }
        ]
      }
    },
    {
      id: 'exp5-verify',
      type: 'text' as const,
      content: `### Checking a Proposed Solution

To verify that a function solves a DE, substitute it into BOTH sides and check the initial condition too.

**Example:** Is $y = 60 - 40e^{-0.5t}$ the solution of $\\frac{dy}{dt} = 0.5(60 - y)$, $y(0) = 20$?

| Check | Work | Result |
|:---:|:---:|:---:|
| Left side | $\\frac{dy}{dt} = 20e^{-0.5t}$ | |
| Right side | $0.5(60 - y) = 0.5(40e^{-0.5t}) = 20e^{-0.5t}$ | Sides match |
| Initial condition | $y(0) = 60 - 40 = 20$ | Matches |

### General Solution of the Gap Model

$$\\boxed{\\frac{dy}{dt} = k(A - y) \\implies y = A - (A - y_0)e^{-kt}}$$

Newton's Law of Cooling (Part 2) is this same model with $A$ equal to the room temperature.`
    },
    {
      id: 'exp5-input',
      type: 'input-box' as const,
      content: '**Solve and evaluate.** ✍️',
      exercise: {
        question: 'Let $y$ satisfy $\\frac{dy}{dt} = 0.5(60 - y)$ with $y(0) = 20$. Find $y(2)$, correct to three decimal places.',
        correctAnswer: '45.285',
        acceptableAnswers: ['45.285', '45.284', '45.28', '45.3'],
        hints: [
          'Separate: $\\frac{dy}{60 - y} = 0.5\\,dt$, which gives $60 - y = Be^{-0.5t}$.',
          '$y(0) = 20$ gives $B = 40$, so $y = 60 - 40e^{-0.5t}$.',
          '$y(2) = 60 - 40e^{-1}$.'
        ],
        explanation: '$y = 60 - 40e^{-0.5t}$, so $y(2) = 60 - 40e^{-1} \\approx 60 - 14.715 = 45.285$.'
      }
    },
    {
      id: 'exp5-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 5

| Concept | Formula |
|:---:|:---:|
| Proportional to $y$ | $\\frac{dy}{dt} = ky \\implies y = y_0e^{kt}$ |
| Proportional to the gap $A - y$ | $\\frac{dy}{dt} = k(A - y) \\implies y = A - (A - y_0)e^{-kt}$ |
| Behavior without solving | Sign of $\\frac{dy}{dt}$; concavity from $\\frac{d^2y}{dt^2}$ |
| Verify a solution | Substitute into both sides and check $y(0)$ |

> **Up Next:** Part 6 — Problem-Solving Workshop.`
    }
  ]
};
