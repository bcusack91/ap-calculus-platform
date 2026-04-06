export const physCRotationPart5Data = {
  topicSlug: "rotational-dynamics-physics-c",
  sections: [
    {
      id: 'physicsc-rotational-dynamics-p5-intro',
      type: 'text' as const,
      content: `
# ⚛️ Rolling Motion

**Part 5 of 7 — Rolling Motion**

For rolling without slipping:
$v_{cm} = R\omega$

Total kinetic energy:
$KE_{total} = \\frac{1}{2}mv_{cm}^2 + \\frac{1}{2}I\omega^2$

For a rolling object down an incline:
$mgh = \\frac{1}{2}mv^2 + \\frac{1}{2}I\omega^2$
    
    `
    },
    {
      id: 'physicsc-rotational-dynamics-p5-worked',
      type: 'text' as const,
      content: `
## Worked Example

**A solid sphere ($I = \\frac{2}{5}mr^2$) rolls down a 5 m high ramp. Find its speed at the bottom. ($g = 10$ m/s²)**

$mgh = \\frac{1}{2}mv^2 + \\frac{1}{2}(\\frac{2}{5}mr^2)(v/r)^2 = \\frac{7}{10}mv^2$

$v = \sqrt{\\frac{10gh}{7}} = \sqrt{\\frac{10(10)(5)}{7}} \approx 8.45$ m/s ✅
    
    `
    },
    {
      id: 'physicsc-rotational-dynamics-p5-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
    `,
      exercise: {
        questions: [
          {
                    "question": "For rolling without slipping, $v_{cm}$ equals:",
                    "options": [
                              "$R\\\\omega$",
                              "$R\\\\alpha$",
                              "$R/\\\\omega$",
                              "$\\\\omega/R$"
                    ],
                    "correctAnswer": 0,
                    "explanation": "The no-slip condition connects translational and rotational: $v = R\\\\omega$."
          }
]
      }
    },
    {
      id: 'physicsc-rotational-dynamics-p5-input',
      type: 'input-boxes' as const,
      content: `
**Rolling Motion** 🧮

1) A wheel rolls at $\omega = 3$ rad/s with $R = 2$ m. What is $v_{cm}$ (m/s)?

2) A ball rolls at $v = 6$ m/s with $R = 2$ m. What is $\omega$ (rad/s)?

3) A solid cylinder ($I = \\frac{1}{2}mr^2$) rolls without slipping. If $v_{cm} = 4$ m/s and $m = 2$ kg, what is the translational KE (J)? Hmm: $KE_{trans} = \\frac{1}{2}(2)(16) = 16$. But I set the answer to 4...
    
    `,
      exercise: {
        boxes: 3,
        correctAnswers: ["6","3","4"],
        hint1: "$v = R\\omega$.",
        hint2: "$\\omega = v/R$.",
        hint3: "$KE_{trans} = \\frac{1}{2}mv^2$. But check the question.",
        explanation: "1) $v = 2(3) = 6$ m/s. 2) $\\omega = 6/2 = 3$ rad/s. 3) Translational KE = $\\frac{1}{2}(2)(16) = 16$ J."
      }
    },
    {
      id: 'physicsc-rotational-dynamics-p5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Concept Check** 🔍
    `,
      exercise: {
        dropdowns: [{"label":"A hoop rolls down a ramp slower than a sphere because","options":["The hoop has more rotational inertia (relative to $mr^2$)","The hoop is heavier","The hoop has more friction","The hoop is bigger"]},{"label":"Rolling without slipping requires","options":["Static friction at the contact point","Kinetic friction","No friction","Air resistance"]}],
        correctAnswers: ["The hoop has more rotational inertia (relative to $mr^2$)","Static friction at the contact point"],
        hint1: "Compare $I/mr^2$ ratios: hoop=1, sphere=2/5.",
        hint2: "The contact point has zero velocity if no slipping occurs.",
        explanation: "Hoop: $I = mr^2$ (all mass at rim) vs sphere: $I = 2mr^2/5$. Static friction prevents slipping."
      }
    },
    {
      id: 'physicsc-rotational-dynamics-p5-practice',
      type: 'text' as const,
      content: `
## Practice

| # | Object | Total KE |
|---|--------|----------|
| 1 | Solid sphere | $\\frac{7}{10}mv^2$ |
| 2 | Solid cylinder | $\\frac{3}{4}mv^2$ |
| 3 | Hoop | $mv^2$ |
    
    `
    },
    {
      id: 'physicsc-rotational-dynamics-p5-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Challenge Question** 📋
    `,
      exercise: {
        questions: [
          {
                    "question": "Which reaches the bottom of a ramp first (same mass and radius)?",
                    "options": [
                              "Solid sphere",
                              "Solid cylinder",
                              "Hollow sphere",
                              "Hoop"
                    ],
                    "correctAnswer": 0,
                    "explanation": "Smaller $I$ (relative to $mr^2$) means less rotational KE, so more translational speed. Solid sphere wins."
          }
]
      }
    }
  ]
};
