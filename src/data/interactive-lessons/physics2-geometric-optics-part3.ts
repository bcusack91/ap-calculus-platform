export const physics2GeomOpticsPart3Data = {
  topicSlug: 'geometric-optics-mirrors',
  sections: [
    {
      id: 'geometricopticsmirrors-p3-intro',
      type: 'text' as const,
      content: `# 🔍 Convex Mirrors

**Part 3 of 7 — Diverging Mirrors**

---

### Key Properties

A convex mirror curves **away** from the object. It **always** produces images that are:
- **Virtual** ($d_i < 0$)
- **Upright** ($m > 0$)
- **Reduced** ($|m| < 1$)

No exceptions — regardless of where the object is placed!

### Sign Conventions for Convex

| Quantity | Sign | Reason |
|----------|------|--------|
| $f$ | **Negative** | Focal point is behind the mirror |
| $R$ | **Negative** | Center of curvature is behind mirror |
| $d_o$ | Positive | Object is always in front |
| $d_i$ | **Negative** | Image is always behind mirror |
| $m$ | **Positive** | Image is always upright |

> 🔑 **Key distinction:** Concave $f > 0$ (converging), Convex $f < 0$ (diverging). This is analogous to converging vs. diverging lenses.

### Where Is the Image?

The image always forms between the mirror surface and the focal point:
$$0 < |d_i| < |f|$$

As $d_o \\to \\infty$: the image approaches $F$ (but never reaches it)  
As $d_o \\to 0$: the image approaches the mirror surface and $m \\to 1$
      `
    },
    {
      id: 'geometricopticsmirrors-p3-comparison',
      type: 'text' as const,
      content: `
## Concave vs. Convex Comparison

| Feature | Concave | Convex |
|---------|---------|--------|
| Shape | Curves toward object | Curves away from object |
| $f$ sign | Positive | Negative |
| Can produce real images? | Yes (when $d_o > f$) | **Never** |
| Can produce virtual images? | Yes (when $d_o < f$) | **Always** |
| Can magnify? | Yes ($d_o < 2f$) | **Never** |
| Used for | Makeup mirrors, telescopes, headlights | Car side mirrors, security mirrors |

### Applications of Convex Mirrors

| Application | Why Convex? |
|------------|-------------|
| Passenger side car mirror | Wide field of view; "objects in mirror are closer than they appear" |
| Store security/surveillance | See entire aisle from one mirror |
| Road intersection mirrors | See around blind corners |
| ATM security mirror | Monitor who's behind you |

The tradeoff: convex mirrors show a **wider field of view** but the image is **smaller**, making distance estimation harder — hence the warning label on car mirrors.

### Field of View Advantage

A convex mirror reflects light from a wider range of angles than a flat mirror of the same size. The more curved the mirror (smaller $|R|$), the wider the field of view but the smaller and more distorted the image.
      `
    },
    {
      id: 'geometricopticsmirrors-p3-check1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A convex mirror has $f = -15$ cm. Object at 30 cm. Where is the image?',
            options: [
              '$d_i = -10$ cm (behind mirror)',
              '$d_i = +10$ cm (in front of mirror)',
              '$d_i = -30$ cm (behind mirror)',
              '$d_i = +30$ cm (in front of mirror)'
            ],
            correctAnswer: 0,
            explanation: '$1/d_i = 1/f - 1/d_o = 1/(-15) - 1/30 = -2/30 - 1/30 = -3/30 = -1/10$. $d_i = -10$ cm. Negative → behind the mirror (virtual). Check: $|d_i| = 10 < |f| = 15$ ✓'
          },
          {
            question: 'For the above problem, what is the magnification?',
            options: [
              '$m = +1/3$ (upright, reduced to 1/3)',
              '$m = -1/3$ (inverted, reduced)',
              '$m = +3$ (upright, magnified)',
              '$m = -3$ (inverted, magnified)'
            ],
            correctAnswer: 0,
            explanation: '$m = -d_i/d_o = -(-10)/30 = +1/3$. Positive → upright ✓, $|m| < 1$ → reduced ✓. Both are guaranteed for convex mirrors.'
          },
          {
            question: 'A student claims to have produced a real image with a convex mirror. Is this possible?',
            options: [
              'Yes, if the object is very far away',
              'Yes, if the object is inside the focal point',
              'No — convex mirrors ALWAYS produce virtual images',
              'Yes, but only with a very large radius of curvature'
            ],
            correctAnswer: 2,
            explanation: 'A convex mirror always produces virtual, upright, reduced images. Since $f < 0$ and $d_o > 0$, $1/d_i = 1/f - 1/d_o$ is always negative → $d_i$ is always negative → always virtual. There are NO exceptions.'
          },
          {
            question: 'Why does a convex car mirror carry the warning "Objects in mirror are closer than they appear"?',
            options: [
              'The mirror is defective',
              'Convex mirrors always produce smaller images, making objects look farther away than they are',
              'Convex mirrors invert the image',
              'The curvature makes objects appear magnified'
            ],
            correctAnswer: 1,
            explanation: 'Convex mirrors produce reduced images ($|m| < 1$). Our brains interpret smaller images as "farther away." A car 20 m behind you appears the same size as a car much farther away in a flat mirror, creating a dangerous distance illusion.'
          }
        ]
      }
    },
    {
      id: 'geometricopticsmirrors-p3-input',
      type: 'input-boxes' as const,
      content: `
**Calculations** 🧮

A convex security mirror has $R = -60$ cm. A person stands 90 cm away.

**1)** Focal length $f$? (in cm, include sign)

**2)** Image distance $d_i$? (in cm, include sign)

**3)** Magnification $m$? (decimal)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['-30', '-22.5', '0.25'],
        hint1: '$f = R/2$',
        hint2: '$1/d_i = 1/f - 1/d_o = 1/(-30) - 1/90$',
        hint3: '$m = -d_i/d_o$',
        explanation: '1) $f = -60/2 = -30$ cm. 2) $1/d_i = -1/30 - 1/90 = -3/90 - 1/90 = -4/90$, $d_i = -90/4 = -22.5$ cm. 3) $m = -(-22.5)/90 = +0.25$. Image is virtual, upright, and 1/4 the size.'
      }
    }
  ]
};
