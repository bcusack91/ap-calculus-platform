export const calcabConcavityPart5Data = {
  "topicSlug": "concavity-inflection-points-calcab",
  "sections": [
    {
      "id": "c5-intro",
      "type": "text" as const,
      "content": "# ∫ Concavity & Inflection Points — Part 5\n\n**Part 5 of 7 — Position, Velocity, Acceleration & Concavity**"
    },
    {
      "id": "c5-motion",
      "type": "text" as const,
      "content": "## 📖 Concavity in Motion\n\nFor position $s(t)$:\n- $s'(t) = v(t)$ = velocity\n- $s''(t) = a(t)$ = acceleration\n\n### Concavity ↔ Acceleration\n\n| $s''(t)$ | $a(t)$ | Concavity | Motion |\n|-----------|--------|-----------|--------|\n| $> 0$ | Positive | Concave up | Speeding up (if $v > 0$) |\n| $< 0$ | Negative | Concave down | Slowing down (if $v > 0$) |\n\n### ⚠️ Speeding Up vs. Slowing Down\n\nAn object speeds up when $v$ and $a$ have the **same sign**:\n- $v > 0, a > 0$ → speeding up forward\n- $v < 0, a < 0$ → speeding up backward\n\nAn object slows down when $v$ and $a$ have **opposite signs**.\n\n### Inflection Point of $s(t)$\n\n$s''(t_0) = 0$ with sign change → acceleration changes direction.\n\nThis is when velocity reaches a local maximum or minimum. Speed $|v|$ may have a local extreme there too, but check the sign of $v$ and the endpoints before calling it the greatest speed."
    },
    {
      "id": "c5-example",
      "type": "text" as const,
      "content": "## Example: Complete Motion Analysis\n\n$s(t) = t^3 - 6t^2 + 9t + 1$ for $t \\geq 0$\n\n$v(t) = 3t^2 - 12t + 9 = 3(t-1)(t-3)$\n$a(t) = 6t - 12 = 6(t-2)$\n\n| Time interval | $v$ | $a$ | Motion |\n|--------------|-----|-----|--------|\n| $(0, 1)$ | $+$ | $-$ | Moving right, slowing down |\n| $(1, 2)$ | $-$ | $-$ | Moving left, speeding up |\n| $(2, 3)$ | $-$ | $+$ | Moving left, slowing down |\n| $(3, \\infty)$ | $+$ | $+$ | Moving right, speeding up |\n\nAt $t = 2$: inflection point of $s(t)$, maximum leftward velocity.\n\n> **AP Pattern:** The particle changes direction at $t = 1$ and $t = 3$ (where $v$ changes sign). On $(1, 3)$ it moves left, and its speed is greatest on that interval at $t = 2$, where $a = 0$ (speed $|v(2)| = 3$). That is not the greatest speed for all $t \\geq 0$: $|v(0)| = 9$, and the speed grows without bound as $t \\to \\infty$."
    },
    {
      "id": "c5-quiz",
      "type": "multiple-choice" as const,
      "content": "**Motion Analysis** 🎯",
      "exercise": {
        "questions": [
          {
            "question": "A particle slows down when:",
            "options": [
              "$v$ and $a$ have opposite signs",
              "$v$ and $a$ have the same sign",
              "$a$ is negative",
              "$v$ is decreasing"
            ],
            "correctAnswer": 0,
            "explanation": "Opposite signs: $v$ positive but $a$ negative, or vice versa. Negative acceleration (equivalently, decreasing velocity) speeds the particle up when $v$ is also negative, so the sign of $a$ alone does not decide it."
          },
          {
            "question": "If $s''(t_0) = 0$ and changes sign, then at $t_0$:",
            "options": [
              "Velocity has a local extremum",
              "Position has an extremum",
              "The particle stops",
              "The particle reverses"
            ],
            "correctAnswer": 0,
            "explanation": "$s'' = v'$. A sign change of $v'$ means $v$ has a local max or min. Position has an extremum where $v = s'$ changes sign, and the particle stops or reverses where $v = 0$."
          },
          {
            "question": "Maximum speed occurs when:",
            "options": [
              "$|v(t)|$ is at its largest",
              "$v(t)$ reaches its largest value",
              "$a(t)$ reaches its largest value",
              "$v(t) = 0$ and the particle turns around"
            ],
            "correctAnswer": 0,
            "explanation": "Speed $= |v|$, so check where $a = 0$ (or $v$ is undefined) and the endpoints, comparing $|v|$. The largest $v$ ignores large negative velocities, the largest $a$ is about acceleration, and $v = 0$ gives the minimum speed."
          }
        ]
      }
    },
    {
      "id": "c5-free-fall",
      "type": "text" as const,
      "content": "## 📌 Free Fall & Projectile Motion\n\n$s(t) = -\\frac{1}{2}gt^2 + v_0 t + s_0$ (with $g = 32$ $ft/s^{2}$ or $9.8$ $m/s^{2}$)\n\n$v(t) = -gt + v_0$\n$a(t) = -g$ (constant, always concave down)\n\nSince $a < 0$ always:\n- While going up ($v > 0$): slowing down\n- At the top ($v = 0$): instantaneously stopped\n- While falling ($v < 0$): speeding up (downward)\n\n### Maximum Height\n$v(t) = 0$: $t = v_0/g$\n\n$s_{max} = s_0 + \\frac{v_0^2}{2g}$"
    },
    {
      "id": "c5-input",
      "type": "input-boxes" as const,
      "content": "**Motion Practice** 🧮\n\n**1)** $s(t) = t^3 - 3t$. When does $a = 0$? $t = $ (integer)\n\n**2)** At that time, $v = $ (integer)",
      "exercise": {
        "boxes": 2,
        "correctAnswers": [
          "0",
          "-3"
        ],
        "hint1": "$v(t) = s'(t) = 3t^2 - 3$ and $a(t) = s''(t) = 6t$, so $a = 0$ at $t = 0$.",
        "hint2": "$v(0) = -3$.",
        "explanation": "1) $t = 0$. 2) $v(0) = -3$."
      }
    },
    {
      "id": "c5-dropdown",
      "type": "dropdown-select" as const,
      "content": "**Motion Concepts** 🔽",
      "exercise": {
        "dropdowns": [
          {
            "label": "Position s(t) concave up means:",
            "options": [
              "Acceleration is positive",
              "Velocity is positive",
              "Speed is always increasing",
              "Position is increasing"
            ]
          },
          {
            "label": "A ball thrown up has position graph that is:",
            "options": [
              "Always concave down (parabola opening down)",
              "Always concave up (parabola opening up)",
              "Concave down going up, then concave up coming down",
              "Linear, since gravity is constant"
            ]
          },
          {
            "label": "\"The particle changes direction\" means:",
            "options": [
              "v changes sign",
              "a changes sign",
              "v = a = 0",
              "Position = 0"
            ]
          }
        ],
        "correctAnswers": [
          "Acceleration is positive",
          "Always concave down (parabola opening down)",
          "v changes sign"
        ],
        "hint1": "$s'' = a > 0$.",
        "hint2": "$a = -g < 0$ always.",
        "hint3": "Direction change: velocity changes from positive to negative or vice versa.",
        "explanation": "Concavity = acceleration sign. Projectiles are always concave down. Direction changes at velocity sign changes."
      }
    },
    {
      "id": "c5-exit",
      "type": "multiple-choice" as const,
      "content": "**Exit Quiz** ✅",
      "exercise": {
        "questions": [
          {
            "question": "If $v(t) > 0$ and $a(t) > 0$, the particle is:",
            "options": [
              "Moving right and speeding up",
              "Moving right and slowing down",
              "Moving left",
              "Stopped"
            ],
            "correctAnswer": 0,
            "explanation": "Same sign: speeding up. $v > 0$: moving right."
          },
          {
            "question": "The graph of position for a constant-acceleration motion is:",
            "options": [
              "A parabola",
              "A straight line",
              "A cubic curve",
              "An exponential"
            ],
            "correctAnswer": 0,
            "explanation": "$s = \\frac{1}{2}at^2 + v_0 t + s_0$ is quadratic. A straight line would need zero acceleration, and a cubic would need acceleration that changes linearly."
          }
        ]
      }
    }
  ]
}
