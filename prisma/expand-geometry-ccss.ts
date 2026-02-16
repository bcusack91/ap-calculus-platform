import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
  console.log('📚 Expanding Geometry to CCSS standards...\n')
  const course = await prisma.course.findUnique({ where: { slug: 'geometry' } })
  if (!course) { console.log('Course not found!'); return }

  const expansions = [
    {
      categoryName: 'Transformations and Congruence',
      categorySlug: 'transformations-congruence-geo',
      order: 2,
      topics: [
        { title: 'Rigid Transformations', slug: 'rigid-transformations-geo', order: 0,
          description: 'Perform translations, reflections, and rotations on the coordinate plane.',
          textContent: `# Rigid Transformations

## What Are Rigid Transformations?

Transformations that preserve **size** and **shape** (distances and angles stay the same). Also called **isometries**.

## Translations (Slides)

Every point moves the same distance in the same direction.

$$(x, y) \\to (x + a, y + b)$$

**Example**: Translate by $\\langle 3, -2 \\rangle$:
$$(1, 4) \\to (4, 2)$$

## Reflections (Flips)

Every point is mirrored across a line of reflection.

| Reflection Over | Rule |
|-----------------|------|
| x-axis | $(x, y) \\to (x, -y)$ |
| y-axis | $(x, y) \\to (-x, y)$ |
| $y = x$ | $(x, y) \\to (y, x)$ |
| $y = -x$ | $(x, y) \\to (-y, -x)$ |

## Rotations (Turns)

Rotating about the origin counterclockwise:

| Angle | Rule |
|-------|------|
| $90°$ | $(x, y) \\to (-y, x)$ |
| $180°$ | $(x, y) \\to (-x, -y)$ |
| $270°$ | $(x, y) \\to (y, -x)$ |

## Congruence Through Transformations

Two figures are **congruent** if one can be mapped to the other using a sequence of rigid transformations.

$$\\triangle ABC \\cong \\triangle DEF$$

means there exists a combination of translations, reflections, and/or rotations that maps $\\triangle ABC$ exactly onto $\\triangle DEF$.

> **Key principle**: Rigid transformations preserve distances, angle measures, and parallelism.`
        },
        { title: 'Triangle Congruence Theorems', slug: 'triangle-congruence-theorems-geo', order: 1,
          description: 'Prove triangles congruent using SSS, SAS, ASA, AAS, and HL.',
          textContent: `# Triangle Congruence Theorems

## Congruent Triangles

$\\triangle ABC \\cong \\triangle DEF$ means all corresponding sides AND angles are equal.

## The Five Congruence Criteria

### SSS (Side-Side-Side)
If all three sides of one triangle are congruent to all three sides of another, the triangles are congruent.

### SAS (Side-Angle-Side)
If two sides and the **included angle** of one triangle are congruent to the corresponding parts of another.

### ASA (Angle-Side-Angle)
If two angles and the **included side** of one triangle are congruent to the corresponding parts of another.

### AAS (Angle-Angle-Side)
If two angles and a **non-included side** of one triangle are congruent to the corresponding parts of another.

### HL (Hypotenuse-Leg)
For **right triangles only**: If the hypotenuse and one leg are congruent.

## What Does NOT Work

- **SSA** (Side-Side-Angle): Ambiguous case — can produce two different triangles
- **AAA** (Angle-Angle-Angle): Only proves similarity, not congruence

## CPCTC

**Corresponding Parts of Congruent Triangles are Congruent**

Once you prove $\\triangle ABC \\cong \\triangle DEF$, you can conclude:
- $\\overline{AB} \\cong \\overline{DE}$, $\\overline{BC} \\cong \\overline{EF}$, $\\overline{AC} \\cong \\overline{DF}$
- $\\angle A \\cong \\angle D$, $\\angle B \\cong \\angle E$, $\\angle C \\cong \\angle F$

## Writing a Congruence Proof

1. **Given**: State what information you have
2. **Identify shared parts**: Look for shared sides, vertical angles, or parallel lines
3. **Choose a theorem**: SSS, SAS, ASA, AAS, or HL
4. **State the congruence**: $\\triangle ABC \\cong \\triangle XYZ$
5. **CPCTC**: Use to prove additional parts equal

> **Order matters!** $\\triangle ABC \\cong \\triangle DEF$ means $A \\leftrightarrow D$, $B \\leftrightarrow E$, $C \\leftrightarrow F$.`
        }
      ]
    },
    {
      categoryName: 'Similarity',
      categorySlug: 'similarity-geo',
      order: 3,
      topics: [
        { title: 'Similar Figures and Scale Factor', slug: 'similar-figures-scale-factor-geo', order: 0,
          description: 'Understand similar figures, scale factors, and proportional reasoning in geometry.',
          textContent: `# Similar Figures and Scale Factor

## Similar Figures

Two figures are **similar** ($\\sim$) if:
1. Corresponding angles are **congruent**
2. Corresponding sides are **proportional**

$$\\triangle ABC \\sim \\triangle DEF$$

## Scale Factor

The ratio of corresponding side lengths:

$$k = \\frac{\\text{new length}}{\\text{original length}}$$

- $k > 1$: Enlargement
- $k < 1$: Reduction
- $k = 1$: Congruent

## Triangle Similarity Criteria

### AA (Angle-Angle)
If two angles of one triangle are congruent to two angles of another, the triangles are similar.

### SSS Similarity
If all three pairs of corresponding sides are proportional:
$$\\frac{AB}{DE} = \\frac{BC}{EF} = \\frac{AC}{DF}$$

### SAS Similarity
If two pairs of corresponding sides are proportional AND the included angles are congruent.

## Proportional Relationships

If $\\triangle ABC \\sim \\triangle DEF$ with scale factor $k$:

| Measurement | Scale |
|------------|-------|
| Lengths | $\\times k$ |
| Perimeters | $\\times k$ |
| Areas | $\\times k^2$ |
| Volumes | $\\times k^3$ |

## Dilations

A transformation that produces similar figures:
$$(x, y) \\to (kx, ky)$$

**Center at origin**, scale factor $k$.

## Parallel Lines and Similar Triangles

If a line parallel to one side of a triangle intersects the other two sides, it creates a smaller similar triangle.

**Triangle Proportionality Theorem**:
$$\\frac{AD}{DB} = \\frac{AE}{EC}$$

> **Remember**: Similar figures have the SAME shape but can be different SIZES. Congruent figures are similar with scale factor $k = 1$.`
        }
      ]
    },
    {
      categoryName: 'Right Triangle Trigonometry',
      categorySlug: 'right-triangle-trig-geo',
      order: 4,
      topics: [
        { title: 'Trigonometric Ratios', slug: 'trigonometric-ratios-geo', order: 0,
          description: 'Use sine, cosine, and tangent to find missing sides and angles in right triangles.',
          textContent: `# Trigonometric Ratios

## SOH CAH TOA

For a right triangle with acute angle $\\theta$:

$$\\sin \\theta = \\frac{\\text{Opposite}}{\\text{Hypotenuse}} \\quad \\cos \\theta = \\frac{\\text{Adjacent}}{\\text{Hypotenuse}} \\quad \\tan \\theta = \\frac{\\text{Opposite}}{\\text{Adjacent}}$$

> **Memory trick**: **S**ome **O**ld **H**orse **C**aught **A**nother **H**orse **T**aking **O**ats **A**way

## Special Right Triangles

### 45-45-90 Triangle
Legs are equal; hypotenuse is $\\sqrt{2}$ times a leg.

$$1 : 1 : \\sqrt{2}$$

If leg $= a$: hypotenuse $= a\\sqrt{2}$

### 30-60-90 Triangle
$$1 : \\sqrt{3} : 2$$

- Short leg (opposite 30°) $= a$
- Long leg (opposite 60°) $= a\\sqrt{3}$
- Hypotenuse (opposite 90°) $= 2a$

## Finding Missing Sides

**Given**: angle $\\theta = 35°$ and hypotenuse $= 10$

$$\\text{Opposite} = 10 \\sin 35° \\approx 5.74$$
$$\\text{Adjacent} = 10 \\cos 35° \\approx 8.19$$

## Finding Missing Angles

Use **inverse trig functions**:

$$\\theta = \\sin^{-1}\\left(\\frac{\\text{opp}}{\\text{hyp}}\\right) \\quad \\theta = \\cos^{-1}\\left(\\frac{\\text{adj}}{\\text{hyp}}\\right) \\quad \\theta = \\tan^{-1}\\left(\\frac{\\text{opp}}{\\text{adj}}\\right)$$

**Example**: Opposite $= 5$, Adjacent $= 12$
$$\\theta = \\tan^{-1}\\left(\\frac{5}{12}\\right) \\approx 22.6°$$

## Angles of Elevation and Depression

- **Elevation**: Looking UP from horizontal
- **Depression**: Looking DOWN from horizontal

Both form right triangles with the horizontal ground.

**Example**: A 50 ft building, angle of elevation $= 40°$. Distance from base:
$$\\tan 40° = \\frac{50}{d} \\implies d = \\frac{50}{\\tan 40°} \\approx 59.6 \\text{ ft}$$

## Complementary Angle Relationship

$$\\sin \\theta = \\cos(90° - \\theta) \\quad \\text{and} \\quad \\cos \\theta = \\sin(90° - \\theta)$$

> **Tip**: Always label which side is opposite, adjacent, and hypotenuse relative to the angle you're working with!`
        }
      ]
    },
    {
      categoryName: 'Circles',
      categorySlug: 'circles-geo',
      order: 5,
      topics: [
        { title: 'Circle Theorems and Arc Relationships', slug: 'circle-theorems-arcs-geo', order: 0,
          description: 'Apply circle theorems involving central angles, inscribed angles, arcs, and chords.',
          textContent: `# Circle Theorems and Arc Relationships

## Key Vocabulary

- **Radius**: Center to circle ($r$)
- **Diameter**: Through center, ear to ear ($d = 2r$)
- **Chord**: Segment with endpoints on the circle
- **Secant**: Line through two points on the circle
- **Tangent**: Line touching the circle at exactly one point
- **Arc**: Part of the circle's circumference

## Central Angles and Arcs

A **central angle** has its vertex at the center.

$$\\text{Central angle} = \\text{Intercepted arc}$$

**Arc length**: $L = \\frac{\\theta}{360°} \\cdot 2\\pi r$

**Sector area**: $A = \\frac{\\theta}{360°} \\cdot \\pi r^2$

## Inscribed Angles

An **inscribed angle** has its vertex ON the circle.

$$\\text{Inscribed angle} = \\frac{1}{2} \\times \\text{Intercepted arc}$$

### Key Theorems:
1. **Inscribed angles** intercepting the **same arc** are congruent
2. An inscribed angle in a **semicircle** is $90°$
3. Opposite angles of an **inscribed quadrilateral** sum to $180°$

## Tangent Theorems

1. A tangent is **perpendicular** to the radius at the point of tangency
2. Two tangent segments from the **same external point** are congruent

## Chord Theorems

1. If two chords are equal, they are equidistant from the center
2. A radius perpendicular to a chord **bisects** the chord

## Angle Relationships

| Vertex Location | Formula |
|----------------|---------|
| Center | $\\angle = \\text{arc}$ |
| On circle | $\\angle = \\frac{1}{2}(\\text{arc})$ |
| Inside circle | $\\angle = \\frac{1}{2}(\\text{arc}_1 + \\text{arc}_2)$ |
| Outside circle | $\\angle = \\frac{1}{2}(\\text{arc}_1 - \\text{arc}_2)$ |

## Equation of a Circle

Standard form: $(x - h)^2 + (y - k)^2 = r^2$

Center: $(h, k)$, Radius: $r$

**Example**: $(x - 3)^2 + (y + 2)^2 = 25$ → Center $(3, -2)$, $r = 5$

> **Don't forget**: Convert general form $x^2 + y^2 + Dx + Ey + F = 0$ to standard form by completing the square!`
        }
      ]
    },
    {
      categoryName: 'Three-Dimensional Geometry',
      categorySlug: 'three-dimensional-geo',
      order: 6,
      topics: [
        { title: 'Surface Area and Volume of Solids', slug: 'surface-area-volume-solids-geo', order: 0,
          description: 'Calculate surface area and volume of prisms, cylinders, pyramids, cones, and spheres.',
          textContent: `# Surface Area and Volume of Solids

## Prisms

$$V = Bh \\quad \\text{(Base area × height)}$$
$$SA = 2B + Ph \\quad \\text{(2 bases + lateral area)}$$

**Rectangular prism**: $V = lwh$, $SA = 2(lw + lh + wh)$

## Cylinders

$$V = \\pi r^2 h$$
$$SA = 2\\pi r^2 + 2\\pi rh$$

## Pyramids

$$V = \\frac{1}{3}Bh$$
$$SA = B + \\frac{1}{2}Pl \\quad \\text{(Base + lateral area, } l = \\text{slant height)}$$

## Cones

$$V = \\frac{1}{3}\\pi r^2 h$$
$$SA = \\pi r^2 + \\pi r l$$

Slant height: $l = \\sqrt{r^2 + h^2}$

## Spheres

$$V = \\frac{4}{3}\\pi r^3 \\quad SA = 4\\pi r^2$$

## Composite Solids

Break into simpler shapes, add (or subtract) volumes.

**Example**: A cylinder with a hemisphere on top:
$$V = \\pi r^2 h + \\frac{2}{3}\\pi r^3$$

## Cavalieri's Principle

If two solids have the same height and every cross-section at the same level has the same area, then they have the same volume.

## Cross-Sections

| Solid | Horizontal Cut | Vertical Cut |
|-------|---------------|--------------|
| Cylinder | Circle | Rectangle |
| Cone | Circle | Triangle |
| Sphere | Circle | Circle |
| Rectangular prism | Rectangle | Rectangle |

## Effect of Scaling

If a solid is scaled by factor $k$:
- Surface area scales by $k^2$
- Volume scales by $k^3$

**Example**: Double all dimensions ($k = 2$):
- SA is $4$ times larger
- Volume is $8$ times larger

> **Common mistake**: Don't confuse height $h$ (perpendicular to base) with slant height $l$ (along the lateral face)!`
        }
      ]
    }
  ]

  let topicCount = 0
  for (const exp of expansions) {
    const cat = await prisma.category.create({
      data: { name: exp.categoryName, slug: exp.categorySlug, order: exp.order, courseId: course.id }
    })
    console.log('  📂 Created category: ' + exp.categoryName)
    for (const t of exp.topics) {
      await prisma.topic.create({
        data: { title: t.title, slug: t.slug, description: t.description, textContent: t.textContent, order: t.order, categoryId: cat.id }
      })
      console.log('    ✅ ' + t.slug)
      topicCount++
    }
  }
  console.log('\n🎉 Geometry expanded with ' + topicCount + ' new topics!')
}

main().catch(console.error).finally(() => prisma.$disconnect())
