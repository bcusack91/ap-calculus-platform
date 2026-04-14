export const physics2GeomOpticsPart1Data = {
  topicSlug: 'geometric-optics-mirrors',
  sections: [
    {
      id: 'geometricopticsmirrors-p1-intro',
      type: 'text' as const,
      content: `# 🪞 Geometric Optics — Mirrors

**Part 1 of 7 — Plane Mirrors**

---

### The Law of Reflection

$$\\theta_i = \\theta_r$$

The angle of incidence equals the angle of reflection. Both angles are measured from the **normal** (perpendicular to the surface), NOT from the mirror surface itself.

> 🔑 **AP Trap:** Students often measure from the surface. Always measure from the normal!

### Types of Reflection

| Type | Surface | Result |
|------|---------|--------|
| **Specular** | Smooth (mirror, calm water) | Clear, sharp reflection |
| **Diffuse** | Rough (paper, wall, road) | Light scattered in all directions |

Both obey the law of reflection! With diffuse reflection, each tiny surface element has a different normal direction, so the reflected rays scatter.
      `
    },
    {
      id: 'geometricopticsmirrors-p1-plane',
      type: 'text' as const,
      content: `
## Plane Mirror Images

### Image Properties

| Property | Value | Why |
|----------|-------|-----|
| Image distance | $d_i = -d_o$ (behind mirror) | Light appears to diverge from behind |
| Magnification | $m = 1$ (same size) | No curvature to change size |
| Orientation | Upright | Top stays on top |
| Type | Virtual | Light doesn't actually pass through image |
| Left-right | Reversed (front-back actually) | Mirror reverses perpendicular to surface |

### Key Insights

- The image is as far **behind** the mirror as the object is **in front**
- Light rays appear to diverge from the virtual image location
- You need a mirror only **half your height** to see your entire body (proven by geometry)
- This works regardless of how far you stand from the mirror!

### Real vs Virtual Images

| | Real Image | Virtual Image |
|--|-----------|---------------|
| **Light rays** | Actually converge at image point | Appear to diverge from image point |
| **Screen test** | Can project on a screen | Cannot project on a screen |
| **$d_i$ sign** | Positive (in front of mirror) | Negative (behind mirror) |
| **Formed by** | Concave mirrors, converging lenses | Plane mirrors, convex mirrors, diverging lenses |

> 🔑 **AP Tip:** "Can you put a screen there and see the image?" If yes → real. If no → virtual. Plane mirror images are ALWAYS virtual.
      `
    },
    {
      id: 'geometricopticsmirrors-p1-check1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'An object is 3 m in front of a plane mirror. The image is:',
            options: ['3 m behind the mirror, virtual', '3 m in front of the mirror, real', '6 m behind the mirror', '1.5 m behind the mirror'],
            correctAnswer: 0,
            explanation: '$|d_i| = |d_o| = 3$ m, located behind the mirror. All plane mirror images are virtual.'
          },
          {
            question: 'The minimum mirror height to see your entire body is:',
            options: ['Your full height', 'Half your height, regardless of distance', 'Depends on your distance from the mirror', 'One-quarter your height'],
            correctAnswer: 1,
            explanation: 'By ray tracing: you need half your height. The geometry works out the same at any distance from the mirror. Common misconception: students think moving farther requires a bigger mirror.'
          },
          {
            question: 'A plane mirror image is:',
            options: ['Real and inverted', 'Real and upright', 'Virtual and inverted', 'Virtual and upright, same size'],
            correctAnswer: 3,
            explanation: 'Plane mirrors always produce virtual, upright, same-size images. There is no curvature to create real images or change the size.'
          },
          {
            question: 'Light hits a mirror at 35° from the surface. The angle of reflection from the normal is:',
            options: ['35°', '55°', '70°', '145°'],
            correctAnswer: 1,
            explanation: 'The angle from the surface is 35°, so the angle from the normal (perpendicular) is $90° - 35° = 55°$. By the law of reflection, the angle of reflection from the normal is also 55°. Always measure from the normal!'
          }
        ]
      }
    },
    {
      id: 'geometricopticsmirrors-p1-input',
      type: 'input-boxes' as const,
      content: `
**Plane Mirror Problems** 🧮

You stand 2 m from a plane mirror.

**1)** How far is your image from YOU? (in m)

**2)** If you walk 0.5 m closer to the mirror, how far is your image from the mirror? (in m)

**3)** You are 1.8 m tall. Minimum mirror height to see all of yourself? (in m)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['4', '1.5', '0.9'],
        hint1: 'Image is 2 m behind mirror, you are 2 m in front → total distance?',
        hint2: 'New distance to mirror = 2 - 0.5 = 1.5 m; image is 1.5 m behind',
        hint3: 'Half your height',
        explanation: '1) 4 m (2 m to mirror + 2 m image behind mirror). 2) 1.5 m behind the mirror (image distance = object distance). 3) 0.9 m = half of 1.8 m.'
      }
    },
    {
      id: 'geometricopticsmirrors-p1-multiple',
      type: 'multiple-choice' as const,
      content: `
**Multiple Mirrors & Applications** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Two plane mirrors are placed at 90° to each other. How many images form?',
            options: ['1', '2', '3', '4'],
            correctAnswer: 2,
            explanation: 'Formula: $n = 360°/\\theta - 1 = 360/90 - 1 = 3$ images. Two are single reflections and one is a double reflection (the image reflected in the other mirror).'
          },
          {
            question: 'A plane mirror on the left wall and another on the right wall face each other. Between them, you see:',
            options: [
              'Only 2 images (one per mirror)',
              'Infinite images receding into the distance',
              'No images because the mirrors cancel each other',
              'Exactly 4 images'
            ],
            correctAnswer: 1,
            explanation: 'Parallel plane mirrors create an infinite series of images. Each mirror reflects the other mirror\'s image, producing images that appear progressively farther away and dimmer (due to imperfect reflection).'
          }
        ]
      }
    }
  ]
};
