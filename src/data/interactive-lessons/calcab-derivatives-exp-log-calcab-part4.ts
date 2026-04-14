export const calcabDerivExpLogPart4Data = {
  "topicSlug": "derivatives-exp-log-calcab",
  "sections": [
    {
      "id": "del4-intro",
      "type": "text" as const,
      "content": "# ∫ Derivatives of Exp & Log — Part 4\n\n**Part 4 of 7 — Growth, Decay & Applications**"
    },
    {
      "id": "del4-growth",
      "type": "text" as const,
      "content": "## 📖 Exponential Growth & Decay\n\nThe model $y = Ce^{kt}$ is the solution to:\n\n$$\\frac{dy}{dt} = ky$$\n\n- $k > 0$: **Growth** (populations, investments)\n- $k < 0$: **Decay** (radioactive, cooling)\n- $C = y(0)$: initial amount\n\n### Verification\n\nIf $y = Ce^{kt}$: $\\frac{dy}{dt} = Cke^{kt} = k \\cdot Ce^{kt} = ky$ ✓\n\n---\n\n### Half-Life\n\nFor decay: $y = Ce^{kt}$ with $k < 0$.\n\nHalf-life $t_{1/2}$: $\\frac{C}{2} = Ce^{kt_{1/2}} \\implies e^{kt_{1/2}} = \\frac{1}{2}$\n\n$$t_{1/2} = \\frac{\\ln(1/2)}{k} = \\frac{-\\ln 2}{k}$$\n\n### Doubling Time\n\nFor growth: $2C = Ce^{kt_d} \\implies t_d = \\frac{\\ln 2}{k}$"
    },
    {
      "id": "del4-compound",
      "type": "text" as const,
      "content": "## Compound Interest\n\n### Continuous Compounding\n\n$$A = Pe^{rt}$$\n\nwhere $P$ = principal, $r$ = rate, $t$ = time.\n\n$\\frac{dA}{dt} = Pr e^{rt} = rA$\n\nThe rate of growth of money is proportional to current amount.\n\n### Example\n\n$\\$1000$ at $5\\%$ continuously compounded:\n\n$A = 1000e^{0.05t}$\n\n$\\frac{dA}{dt} = 50e^{0.05t}$\n\nAt $t = 10$: $\\frac{dA}{dt} = 50e^{0.5} \\approx \\$82.44$/year\n\n---\n\n### Newton's Law of Cooling\n\n$$T(t) = T_s + (T_0 - T_s)e^{-kt}$$\n\n$$\\frac{dT}{dt} = -k(T_0 - T_s)e^{-kt} = -k(T - T_s)$$\n\nRate of cooling is proportional to temperature difference."
    },
    {
      "id": "del4-quiz",
      "type": "multiple-choice" as const,
      "content": "**Growth & Decay** 🎯",
      "exercise": {
        "questions": [
          {
            "question": "If a population doubles every 5 years, $k = $",
            "options": [
              "$\\ln 2 / 5$",
              "$2/5$",
              "$5/\\ln 2$",
              "$\\ln 5 / 2$"
            ],
            "correctAnswer": 0,
            "explanation": "$t_d = \\ln 2 / k \\implies k = \\ln 2 / 5$."
          },
          {
            "question": "$\\frac{dy}{dt} = -3y$ has solution:",
            "options": [
              "$y = Ce^{-3t}$",
              "$y = -3t + C$",
              "$y = Ce^{3t}$",
              "$y = C/3$"
            ],
            "correctAnswer": 0,
            "explanation": "$k = -3$, so $y = Ce^{-3t}$."
          },
          {
            "question": "Carbon-14 has half-life 5730 years. $k \\approx $",
            "options": [
              "$-0.000121$",
              "$-5730$",
              "$0.000121$",
              "$-\\ln 2$"
            ],
            "correctAnswer": 0,
            "explanation": "$k = -\\ln 2/5730 \\approx -0.000121$."
          }
        ]
      }
    },
    {
      "id": "del4-applications",
      "type": "text" as const,
      "content": "## 📌 AP Exam Applications\n\n### Rate of Change Analysis\n\nGiven $P(t) = 1000e^{0.03t}$:\n\n**(a)** Find the rate of change at $t = 10$:\n$P'(t) = 30e^{0.03t}$\n$P'(10) = 30e^{0.3} \\approx 40.5$ per year\n\n**(b)** When does the population reach 2000?\n$2000 = 1000e^{0.03t}$\n$\\ln 2 = 0.03t$\n$t = \\ln 2/0.03 \\approx 23.1$ years\n\n**(c)** At that moment, what is the rate of growth?\n$P'(23.1) = 30e^{0.03(23.1)} = 30e^{\\ln 2} = 30(2) = 60$ per year\n\n> **AP Pattern:** When population doubles, its rate of growth also doubles (because rate is proportional to amount)."
    },
    {
      "id": "del4-input",
      "type": "input-boxes" as const,
      "content": "**Growth/Decay Practice** 🧮\n\n**1)** $y = 500e^{-0.1t}$. $dy/dt$ at $t = 0$: (integer)\n\n**2)** Doubling time when $k = \\ln 2$: (integer)",
      "exercise": {
        "boxes": 2,
        "correctAnswers": [
          "-50",
          "1"
        ],
        "hint1": "$dy/dt = -50e^{-0.1t}$. At $t = 0$: $-50$.",
        "hint2": "$t_d = \\ln 2 / k = \\ln 2 / \\ln 2 = 1$.",
        "explanation": "1) $-50$ (decaying). 2) $1$ time unit."
      }
    },
    {
      "id": "del4-dropdown",
      "type": "dropdown-select" as const,
      "content": "**Model Identification** 🔽",
      "exercise": {
        "dropdowns": [
          {
            "label": "$T(t) = 70 + 130e^{-0.05t}$ models:",
            "options": [
              "Newton's Law of Cooling (room temp 70°)",
              "Exponential growth",
              "Logistic growth",
              "Linear cooling"
            ]
          },
          {
            "label": "If $dy/dt = 2y$ and $y(0) = 5$:",
            "options": [
              "$y = 5e^{2t}$",
              "$y = 2e^{5t}$",
              "$y = 5 + 2t$",
              "$y = 10e^t$"
            ]
          },
          {
            "label": "The rate of decay $|dy/dt|$ for $y = Ce^{-kt}$:",
            "options": [
              "Decreases over time",
              "Increases over time",
              "Stays constant",
              "Oscillates"
            ]
          }
        ],
        "correctAnswers": [
          "Newton's Law of Cooling (room temp 70°)",
          "$y = 5e^{2t}$",
          "Decreases over time"
        ],
        "hint1": "$T \\to 70$ as $t \\to \\infty$. Room temperature is 70°.",
        "hint2": "$y = y_0 e^{kt} = 5e^{2t}$.",
        "hint3": "$|dy/dt| = kCe^{-kt}$ decreases as $e^{-kt}$ decreases.",
        "explanation": "Identify models by their form. $y_0$ is initial value, $k$ is the rate constant."
      }
    },
    {
      "id": "del4-exit",
      "type": "multiple-choice" as const,
      "content": "**Exit Quiz** ✅",
      "exercise": {
        "questions": [
          {
            "question": "A substance decays from 100g to 25g in 10 hours. Half-life = ",
            "options": [
              "5 hours",
              "10 hours",
              "2.5 hours",
              "20 hours"
            ],
            "correctAnswer": 0,
            "explanation": "$25 = 100 \\cdot (1/2)^{10/t_{1/2}}$. $(1/2)^{10/t_{1/2}} = 1/4 = (1/2)^2$. $10/t_{1/2} = 2$. $t_{1/2} = 5$."
          },
          {
            "question": "For $y = Ce^{kt}$, the percentage growth rate is:",
            "options": [
              "$100k\\%$ per unit time",
              "$k$ per unit time",
              "$Ck$ per unit time",
              "$e^k \\%$ per unit time"
            ],
            "correctAnswer": 0,
            "explanation": "$\\frac{y'}{y} = k$, so the relative rate is $k$ = $100k\\%$."
          }
        ]
      }
    }
  ]
}
