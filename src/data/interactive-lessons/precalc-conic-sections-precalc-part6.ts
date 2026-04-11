export const precalcConicsPart6Data = {
  topicSlug: 'conic-sections-precalc',
  sections: [
    {
      id: 'p6-intro',
      type: 'text' as const,
      content: `
# 🌍 Applications of Conic Sections

**Part 6 of 7**

Conics appear throughout science, engineering, and nature:

### Planetary Orbits (Ellipses)
Kepler's First Law: planets orbit the Sun in **ellipses** with the Sun at one focus.

### Satellite Dishes & Headlights (Parabolas)
The **reflective property** of parabolas focuses signals to a single point or projects light in parallel beams.

### Hyperbolic Navigation (Hyperbolas)
**LORAN** (Long Range Navigation) uses the difference in signal arrival times from two stations, which traces a hyperbola.

### Architecture (All Conics)
- **Elliptical** rooms (whispering galleries)
- **Parabolic** arches and bridges
- **Hyperbolic** cooling towers
      `
    },
    {
      id: 'p6-orbits',
      type: 'text' as const,
      content: `
## 🪐 Orbital Mechanics

A body under gravity follows a conic section. The type depends on its energy:

| Energy | Orbit Type | Eccentricity |
|:-------|:-----------|:-------------|
| $E < 0$ (bound) | Ellipse | $0 \\leq e < 1$ |
| $E = 0$ (escape) | Parabola | $e = 1$ |
| $E > 0$ (unbound) | Hyperbola | $e > 1$ |

### Example: Earth's Orbit

$a = 1.496 \\times 10^8$ km, $e = 0.0167$

- Perihelion (closest): $a(1-e) = 1.471 \\times 10^8$ km
- Aphelion (farthest): $a(1+e) = 1.521 \\times 10^8$ km

The nearly circular orbit ($e \\approx 0$) gives us relatively stable seasons.
      `
    },
    {
      id: 'p6-acoustics',
      type: 'text' as const,
      content: `
## 🔊 Acoustic & Optical Applications

### Whispering Gallery (Ellipse)

In an elliptical room, sound from one focus reflects off the wall and converges at the other focus. Famous examples:
- **St. Paul's Cathedral**, London
- **National Statuary Hall**, U.S. Capitol

### Parabolic Reflectors

A parabolic mirror reflects all incoming parallel rays to the focus:
- **Telescopes** (reflecting telescopes)
- **Solar cookers**
- **Microphone dishes** (for recording distant sounds)

### Hyperbolic Mirrors

Used in **Cassegrain telescopes**: the secondary mirror is hyperbolic, redirecting light from the primary parabolic mirror to a more convenient focal point.
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
            question: 'A comet with eccentricity $e = 1.2$ follows what kind of path?',
            options: ['Circular', 'Elliptical', 'Parabolic', 'Hyperbolic'],
            correctAnswer: 3,
            explanation: '$e > 1$ → hyperbolic trajectory. The comet will not return.'
          },
          {
            question: 'Why are satellite dishes parabolic?',
            options: ['They are cheapest to manufacture', 'Parallel signals focus to the receiver at the focus', 'They look professional', 'They withstand wind better'],
            correctAnswer: 1,
            explanation: 'Parabolic reflectors concentrate parallel incoming waves at the focus, where the receiver is placed.'
          },
          {
            question: 'In a whispering gallery, the special acoustic points are the:',
            options: ['Vertices', 'Foci', 'Centers', 'Endpoints of the minor axis'],
            correctAnswer: 1,
            explanation: 'Sound from one focus reflects off the elliptical wall and converges at the other focus.'
          }
        ]
      }
    },
    {
      id: 'p6-input',
      type: 'input-boxes' as const,
      content: `
**Application Calculations** 🧮

**1)** A planet orbits with $a = 10$ AU and $e = 0.6$. Perihelion $= a(1-e) = $ ? AU

**2)** Same planet: aphelion $= a(1+e) = $ ? AU

**3)** A parabolic dish has equation $x^2 = 8y$ (in feet). The receiver should be placed at the focus: $y = $ ? feet
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['4', '16', '2'],
        hint1: '$10(1-0.6) = 10(0.4) = 4$.',
        hint2: '$10(1+0.6) = 10(1.6) = 16$.',
        hint3: '$x^2 = 4py$: $4p=8, p=2$. Focus at $(0, 2)$.',
        explanation: '1) Perihelion: $4$ AU. 2) Aphelion: $16$ AU. 3) Receiver at $y=2$ feet above vertex.'
      }
    },
    {
      id: 'p6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Real-World Conics** 🔽
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Cooling towers at power plants are shaped like:',
            options: ['Ellipses', 'Parabolas', 'Hyperboloids', 'Cylinders'],
            correctAnswer: 2
          },
          {
            label: 'LORAN navigation is based on:',
            options: ['Ellipses (sum of distances)', 'Hyperbolas (difference of distances)', 'Parabolas (equal distances)', 'Circles (fixed distance)'],
            correctAnswer: 1
          },
          {
            label: 'A ball thrown in a vacuum (no air) follows a:',
            options: ['Circular arc', 'Parabolic arc', 'Hyperbolic arc', 'Straight line'],
            correctAnswer: 1
          },
          {
            label: 'The orbit of a body with exactly escape velocity is a:',
            options: ['Circle', 'Ellipse', 'Parabola', 'Hyperbola'],
            correctAnswer: 2
          }
        ],
        correctAnswers: ['Hyperboloids', 'Hyperbolas (difference of distances)', 'Parabolic arc', 'Parabola'],
        hint1: 'Cooling towers use hyperbolic shapes for structural strength.',
        hint2: 'LORAN measures time differences → distance differences → hyperbola.',
        hint3: 'Projectile motion under gravity: parabola.',
        explanation: 'Cooling towers: hyperboloids. LORAN: hyperbolas. Projectiles: parabolas. Escape velocity: parabolic orbit ($e=1$).'
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
            question: 'An asteroid approaches the Sun on a hyperbolic path. It will:',
            options: ['Enter a stable orbit', 'Crash into the Sun', 'Pass by and never return', 'Become a satellite'],
            correctAnswer: 2,
            explanation: '$e > 1$ means hyperbolic — the asteroid has enough energy to escape. It passes by once.'
          },
          {
            question: 'A reflecting telescope uses a parabolic primary mirror because:',
            options: ['It is the cheapest shape', 'All parallel rays converge to one focal point', 'It magnifies more', 'It has no aberration at any angle'],
            correctAnswer: 1,
            explanation: 'The parabolic reflective property ensures all incoming light focuses at a single point.'
          }
        ]
      }
    }
  ]
};
