export const reflectionRefractionPart2LearningJourneyData = {
  topicSlug: 'reflection-refraction',
  sections: [
    {
      id: 'part2-roadmap',
      type: 'text' as const,
      content: `
# 🗺️ Learning Journey: Tools for Every Optics Problem

**Part 2 of 8**

Sign conventions, reflection, the index of refraction, Snell's law, total internal reflection and refraction through several surfaces all rely on the same three tools.

This part builds those tools:
- The **ray model** of light, and when it works
- The **normal** line, and why every optics angle is measured from it
- The **ray diagram**, the picture you draw before any calculation
      `
    },
    {
      id: 'part2-ray-model',
      type: 'text' as const,
      content: `
## The Ray Model of Light

A **ray** is a straight line that points in the direction a light wave travels. Rays are drawn **perpendicular to the wavefronts** (the lines joining the crests of the wave).

- In a uniform material, a ray travels in a straight line.
- A ray changes direction only where the material changes, such as at a boundary between air and glass.
- A laser beam is the closest real thing to a single ray: narrow, one color, and nearly straight.

### Two Common Sources

| Source | Wavefronts | Rays |
|--------|-----------|------|
| Distant source or plane wave | Straight and parallel | Parallel lines |
| Small bulb (point source) | Circles centered on the source | Straight lines spreading out from the source |

### When Rays Are Enough, and When They Are Not

Rays describe light well when mirrors, lenses and openings are much larger than the wavelength. This is **geometric optics**, and it covers every part of this lesson.

Rays cannot explain light spreading out after a very narrow slit, or the bright and dark fringes made by two slits. Those effects need the **wave model**, which the interference and diffraction lessons cover.
      `
    },
    {
      id: 'part2-ray-quiz',
      type: 'multiple-choice' as const,
      content: `
**Check: The Ray Model**
      `,
      exercise: {
        questions: [
          {
            question: 'On a diagram, a plane light wave has straight, parallel wavefronts drawn as vertical lines. How should its rays be drawn?',
            options: [
              'As horizontal lines, perpendicular to the wavefronts',
              'As vertical lines lying along the wavefronts',
              'As circles centered on the light source',
              'As lines tilted 45° to the wavefronts'
            ],
            correctAnswer: 0,
            explanation: 'Rays point in the direction the wave travels, which is always perpendicular to the wavefronts. Vertical wavefronts mean the wave moves horizontally, so the rays are horizontal. Circles describe the wavefronts of a point source, not rays.'
          },
          {
            question: 'Which observation needs the wave model of light rather than the ray model?',
            options: [
              'An image appearing behind a flat mirror',
              'A sharp shadow cast by a book on a wall',
              'Fringes from two narrow slits',
              'A straw looking bent in a glass of water'
            ],
            correctAnswer: 2,
            explanation: 'Bright and dark fringes come from waves overlapping and interfering, which straight-line rays cannot describe. Mirror images, sharp shadows and the bent-straw effect are all explained by rays reflecting, traveling straight, or refracting.'
          },
          {
            question: 'A small bulb sends light out in all directions. How are its rays best drawn?',
            options: [
              'As parallel lines in one direction',
              'As straight lines spreading out from the bulb',
              'As circles centered on the bulb',
              'As curved lines that bend around the bulb\'s edges'
            ],
            correctAnswer: 1,
            explanation: 'A point source has circular wavefronts centered on it. Rays are perpendicular to those circles, so they are straight lines pointing outward from the bulb. The circles themselves are the wavefronts, and parallel rays describe a distant source.'
          }
        ]
      }
    },
    {
      id: 'part2-normal',
      type: 'text' as const,
      content: `
## The Normal and How Angles Are Measured

Where a ray hits a surface, draw the **normal**: a line perpendicular to the surface at that point.

- **Flat surface:** the normal points the same way everywhere on the surface.
- **Curved surface** (a spherical mirror or a lens): the normal at any point lies along the radius through that point, so its direction changes from point to point.

The **angle of incidence** $\\theta_1$ is the angle between the incoming ray and the normal. The angles of reflection and refraction are measured from the normal too, never from the surface.

### Converting From the Surface

Problems sometimes give the angle between the ray and the surface instead. The normal is 90° from the surface, so:

$$\\theta_{\\text{from normal}} = 90° - \\theta_{\\text{from surface}}$$

**Example:** a ray makes 35° with the surface of a flat mirror.
- Angle of incidence: $90° - 35° = 55°$
- The reflected ray is also 55° from the normal, on the other side.
- The angle between the incoming and reflected rays is $55° + 55° = 110°$.

### What Happens at a Boundary

At a boundary between two transparent materials, part of the light reflects and the rest is transmitted into the new material, usually changing direction (refraction).

- A ray that arrives **along the normal** ($\\theta_1 = 0$) is transmitted without bending.
- The **frequency** of the light never changes at a boundary. Its speed and wavelength can change in the new material.
      `
    },
    {
      id: 'part2-normal-quiz',
      type: 'multiple-choice' as const,
      content: `
**Check: Measuring From the Normal**
      `,
      exercise: {
        questions: [
          {
            question: 'A ray makes a 40° angle with the surface of a flat glass plate. What is its angle of incidence?',
            options: ['40°', '50°', '130°', '80°'],
            correctAnswer: 1,
            explanation: 'The angle of incidence is measured from the normal, which is 90° from the surface: $90° - 40° = 50°$. Using 40° directly measures from the surface, and 130° adds the angles instead of subtracting.'
          },
          {
            question: 'A ray strikes a flat mirror with an angle of incidence of 30°. What is the angle between the incoming ray and the reflected ray?',
            options: ['30°', '60°', '120°', '150°'],
            correctAnswer: 1,
            explanation: 'The reflected ray is also 30° from the normal, on the opposite side, so the two rays are $30° + 30° = 60°$ apart. 120° comes from treating the 30° as measured from the surface, which would put each ray 60° from the normal.'
          },
          {
            question: 'Light strikes a curved mirror. How should the normal be drawn at the point where the light hits?',
            options: [
              'Along the radius at that point',
              'Parallel to the principal axis of the mirror',
              'Tangent to the mirror at that point',
              'Vertically, whatever the mirror\'s shape'
            ],
            correctAnswer: 0,
            explanation: 'The normal is perpendicular to the surface at the point of contact. For a spherical surface, the line perpendicular to the surface is the radius through that point. A tangent line lies along the surface, which is the opposite of a normal.'
          },
          {
            question: 'A ray of light in air strikes a glass block along the normal. What happens to the light that enters the glass?',
            options: [
              'It continues straight in, without bending',
              'It bends toward the surface',
              'It bends away from the normal',
              'None of it enters the glass'
            ],
            correctAnswer: 0,
            explanation: 'A ray along the normal has an angle of incidence of zero, so it is transmitted without changing direction (part of the light still reflects straight back). It does slow down inside the glass, but slowing down alone does not bend a ray that arrives head-on.'
          }
        ]
      }
    },
    {
      id: 'part2-ray-diagrams',
      type: 'text' as const,
      content: `
## Drawing a Ray Diagram

Draw the diagram before any calculation:

1. Draw the boundary (the surface) as a line.
2. Mark the point where the ray hits, and draw the normal there as a dashed line.
3. Draw the incoming ray with an arrow showing its direction of travel.
4. Measure every angle from the normal, and label it.
5. Draw the reflected ray on the other side of the normal at the same angle. Draw any transmitted ray on the far side of the boundary.

### Worked Example: Two Mirrors at a Right Angle

A horizontal mirror and a vertical mirror meet at a corner. A ray strikes the horizontal mirror with an angle of incidence of 30°.

- **First reflection:** the ray leaves the horizontal mirror 30° from that mirror's normal (which is vertical).
- **Second mirror:** the vertical mirror's normal is horizontal, 90° from the first normal. The ray's angle from it is $90° - 30° = 60°$.
- **Second reflection:** the ray leaves 60° from the horizontal normal.

Following the arrows shows that the ray leaves traveling exactly opposite to its original direction. This works for any angle of incidence, which is why corner reflectors are used on bicycle reflectors and road signs: they send light straight back toward its source.
      `
    },
    {
      id: 'part2-checkpoint',
      type: 'multiple-choice' as const,
      content: `
**Exit Check: Rays, Normals and Diagrams**
      `,
      exercise: {
        questions: [
          {
            question: 'Two flat mirrors meet at a right angle. A ray strikes the first mirror with an angle of incidence of 25°. What is its angle of incidence on the second mirror?',
            options: ['25°', '65°', '50°', '90°'],
            correctAnswer: 1,
            explanation: 'The two normals are 90° apart, so a ray that leaves the first mirror 25° from its normal is $90° - 25° = 65°$ from the second mirror\'s normal. 50° doubles the first angle, and 25° assumes the two normals point the same way.'
          },
          {
            question: 'After reflecting off both mirrors in a right-angle corner, the ray travels:',
            options: [
              'Back the way it came, parallel to its original path',
              'Along the surface of the second mirror',
              'Perpendicular to its original path',
              'Into the corner, where it is absorbed'
            ],
            correctAnswer: 0,
            explanation: 'Each reflection reverses one component of the ray\'s direction: the horizontal mirror reverses the vertical component and the vertical mirror reverses the horizontal component. With both reversed, the ray leaves parallel to its original path, heading back the way it came.'
          }
        ]
      }
    }
  ]
}
