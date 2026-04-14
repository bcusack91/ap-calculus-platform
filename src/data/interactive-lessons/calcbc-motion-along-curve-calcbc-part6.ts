export const calcbcMotionPart6Data = {
  topicSlug: 'motion-along-curve-calcbc',
  sections: [
    {
      id: 'mc6-intro',
      type: 'text' as const,
      content: `# Problem-Solving Workshop — Motion Along a Curve

**Part 6 of 7 — Timed Practice**

Work through these problems as you would on the AP exam. Show setups before computing.`
    },
    {
      id: 'mc6-mc',
      type: 'multiple-choice' as const,
      content: '**Workshop Problems**',
      exercise: {
        questions: [
          {
            question: 'A particle has $x\'(t) = e^t$ and $y\'(t) = 2t$. At $t = 0$, $\\vec{v}(0) = \\langle 1, 0 \\rangle$ and $\\vec{a}(0) = \\langle 1, 2 \\rangle$. Is the particle speeding up at $t = 0$?',
            options: ['Yes — $\\vec{v} \\cdot \\vec{a} = 1 > 0$', 'No — $\\vec{v} \\cdot \\vec{a} < 0$', 'No — the $y$-component is zero', 'Cannot tell from given information'],
            correctAnswer: 0,
            explanation: '$\\vec{v} \\cdot \\vec{a} = (1)(1) + (0)(2) = 1 > 0$. Speeding up.'
          },
          {
            question: 'For $x(t) = t^2 - 1$, $y(t) = 3t$, horizontal tangent occurs when:',
            options: ['Never — $y\'(t) = 3 \\neq 0$ for all $t$', '$t = 0$', '$t = 1$', '$t = -1$'],
            correctAnswer: 0,
            explanation: 'Horizontal tangent needs $y\' = 0$ and $x\' \\neq 0$. Since $y\' = 3$ always, no horizontal tangent.'
          },
          {
            question: 'Vertical tangent for the same curve occurs at:',
            options: ['$t = 0$ (where $x\'(0) = 0$ and $y\'(0) = 3 \\neq 0$)', 'Never', '$t = 1$', '$t = -1$'],
            correctAnswer: 0,
            explanation: '$x\'(t) = 2t = 0$ at $t = 0$. $y\'(0) = 3 \\neq 0$. Vertical tangent at $t = 0$.'
          }
        ]
      }
    },
    {
      id: 'mc6-dropdown',
      type: 'dropdown-select' as const,
      content: '**Multi-Step Problem**\n\nA particle moves with $x\'(t) = \\cos t$ and $y\'(t) = \\sin t$, starting at $(1, 0)$.',
      exercise: {
        dropdowns: [
          {
            label: 'The speed at any time $t$ is:',
            options: ['$1$ (constant)', '$\\sqrt{2}$', '$2$', 'Varies with $t$'],
            correctAnswers: ['$1$ (constant)'],
            hints: ['$\\sqrt{\\cos^2 t + \\sin^2 t}$.'],
            explanation: '$\\sqrt{\\cos^2 t + \\sin^2 t} = 1$ for all $t$.'
          },
          {
            label: 'The total distance from $t = 0$ to $t = 2\\pi$ is:',
            options: ['$2\\pi$', '$\\pi$', '$0$', '$4\\pi$'],
            correctAnswers: ['$2\\pi$'],
            hints: ['$\\int_0^{2\\pi} 1\\,dt$.'],
            explanation: '$\\int_0^{2\\pi} 1\\,dt = 2\\pi$. The particle traces the full unit circle.'
          },
          {
            label: 'The displacement from $t = 0$ to $t = 2\\pi$ is:',
            options: ['$\\langle 0, 0 \\rangle$ (returns to start)', '$\\langle 2\\pi, 0 \\rangle$', '$\\langle 0, 2\\pi \\rangle$', '$\\langle 1, 0 \\rangle$'],
            correctAnswers: ['$\\langle 0, 0 \\rangle$ (returns to start)'],
            hints: ['$\\int_0^{2\\pi} \\cos t\\,dt = 0$, $\\int_0^{2\\pi} \\sin t\\,dt = 0$.'],
            explanation: 'Both component integrals are zero over a full period. The particle returns to its starting point.'
          }
        ]
      }
    },
    {
      id: 'mc6-input',
      type: 'input-box' as const,
      content: '**Calculator Problem**',
      exercise: {
        question: 'A particle has $x\'(t) = 3$ and $y\'(t) = 4$ for $0 \\le t \\le 10$. Starting at $(2, 1)$, what is the $x$-coordinate at $t = 10$?',
        correctAnswer: '32',
        acceptableAnswers: ['32', '32.0'],
        hints: ['$x(10) = x(0) + \\int_0^{10} 3\\,dt = 2 + 30$.'],
        explanation: '$x(10) = 2 + \\int_0^{10} 3\\,dt = 2 + 30 = 32$.'
      }
    },
    {
      id: 'mc6-summary',
      type: 'text' as const,
      content: `### Workshop Takeaways

- Always check: distance vs. displacement
- Speed is the magnitude of the velocity vector
- Tangent line analysis: check which component is zero
- $\\vec{v} \\cdot \\vec{a}$ determines speeding up / slowing down

**Next: Part 7 — Comprehensive Review**`
    }
  ]
};
