import '../src/lib/load-env' // load .env.local first so local runs never hit the prod DB
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Filling Grade 7 Math topics - Batch 4 (Final topic)...\n');

  // Topic 1: Surface Area and Volume
  await prisma.topic.updateMany({
    where: {
      slug: 'surface-area-volume'
    },
    data: {
      textContent: `# Surface Area and Volume

Three-dimensional shapes are all around us! Understanding surface area and volume helps you solve real-world problems involving boxes, containers, buildings, and more. Let's explore how to calculate these important measurements!

---

## 3D Shapes vs. 2D Shapes

**2D shapes** are flat (like squares, circles, triangles)
- Measure: Area (square units)

**3D shapes** have length, width, AND height
- Measure: Volume (cubic units) and Surface Area (square units)

**Common 3D shapes:**
- Rectangular prism (box)
- Cube
- Cylinder
- Cone
- Sphere
- Pyramid

---

## What Is Volume?

**Volume** measures the amount of space inside a 3D shape.

**Think of it as:** How much liquid could it hold? How many unit cubes fit inside?

**Units:** Cubic units (cm³, in³, m³, ft³)

**Example:** A box that is 3 cm × 4 cm × 2 cm has volume = 24 cm³
(24 cubic centimeters of space inside)

---

## What Is Surface Area?

**Surface Area** measures the total area of all the outer surfaces of a 3D shape.

**Think of it as:** How much wrapping paper do you need to cover it? How much paint to cover all sides?

**Units:** Square units (cm², in², m², ft²)

**Example:** A cube with 6 faces, each 2 cm × 2 cm, has surface area = 6 × 4 = 24 cm²

---

## Rectangular Prism (Box)

A box with length (l), width (w), and height (h).

### Volume Formula

**V = l × w × h**

**Example:** Find the volume of a box: length = 5 ft, width = 3 ft, height = 4 ft

**Solution:**
V = 5 × 3 × 4 = 60 ft³

**Answer: 60 cubic feet**

### Surface Area Formula

A rectangular prism has 6 faces (top, bottom, front, back, left, right).

**SA = 2lw + 2lh + 2wh**

Or think: **SA = 2(lw + lh + wh)**

**Example:** Same box (5 ft × 3 ft × 4 ft)

**Solution:**
SA = 2(5×3) + 2(5×4) + 2(3×4)
SA = 2(15) + 2(20) + 2(12)
SA = 30 + 40 + 24
SA = 94 ft²

**Answer: 94 square feet**

---

## Cube

A cube is a special rectangular prism where all edges are equal (s = side length).

### Volume Formula

**V = s³** (side × side × side)

**Example:** A cube with side = 6 cm

**Solution:**
V = 6³ = 6 × 6 × 6 = 216 cm³

**Answer: 216 cubic centimeters**

### Surface Area Formula

A cube has 6 identical square faces.

**SA = 6s²**

**Example:** Same cube (side = 6 cm)

**Solution:**
SA = 6 × (6²) = 6 × 36 = 216 cm²

**Answer: 216 square centimeters**

**Note:** For this cube, volume and surface area have the same number, but DIFFERENT UNITS!

---

## Cylinder

A cylinder has two circular bases and a curved side.

### Volume Formula

**V = πr²h**

Where r = radius of the base, h = height

**Example:** A cylinder with radius = 4 in and height = 10 in

**Solution:**
V = π × (4²) × 10
V = π × 16 × 10
V = 160π ≈ 502.65 in³

**Answer: About 503 cubic inches**

### Surface Area Formula

Surface area = 2 circular bases + curved side (which "unrolls" into a rectangle)

**SA = 2πr² + 2πrh**

Or: **SA = 2πr(r + h)**

**Example:** Same cylinder (r = 4 in, h = 10 in)

**Solution:**
SA = 2π(4²) + 2π(4)(10)
SA = 2π(16) + 2π(40)
SA = 32π + 80π
SA = 112π ≈ 351.86 in²

**Answer: About 352 square inches**

---

## Triangular Prism

A prism with triangular bases.

### Volume Formula

**V = (Area of base) × height**

For triangular base: **V = (1/2 × base × height of triangle) × prism height**

**Example:** Triangular prism with:
- Triangle base = 6 cm, triangle height = 4 cm
- Prism height = 10 cm

**Solution:**
V = (1/2 × 6 × 4) × 10
V = (12) × 10
V = 120 cm³

**Answer: 120 cubic centimeters**

### Surface Area

Add: 2 triangular bases + 3 rectangular sides

**Example:** Calculate each face area and add them all up!

---

## Cone

A cone has one circular base and comes to a point (apex).

### Volume Formula

**V = (1/3)πr²h**

Where r = radius, h = height (perpendicular from base to apex)

**Example:** A cone with radius = 3 ft and height = 8 ft

**Solution:**
V = (1/3)π(3²)(8)
V = (1/3)π(9)(8)
V = (1/3)π(72)
V = 24π ≈ 75.40 ft³

**Answer: About 75 cubic feet**

**Note:** Cone volume is 1/3 of a cylinder with same base and height!

---

## Sphere

A perfectly round ball shape.

### Volume Formula

**V = (4/3)πr³**

Where r = radius

**Example:** A sphere with radius = 5 m

**Solution:**
V = (4/3)π(5³)
V = (4/3)π(125)
V = (500/3)π ≈ 523.60 m³

**Answer: About 524 cubic meters**

### Surface Area Formula

**SA = 4πr²**

**Example:** Same sphere (r = 5 m)

**Solution:**
SA = 4π(5²)
SA = 4π(25)
SA = 100π ≈ 314.16 m²

**Answer: About 314 square meters**

---

## Pyramid

A pyramid has a base (often square) and triangular faces meeting at an apex.

### Volume Formula

**V = (1/3) × (Area of base) × height**

For square base: **V = (1/3) × s² × h**

**Example:** Square pyramid with base side = 6 cm and height = 9 cm

**Solution:**
V = (1/3) × (6²) × 9
V = (1/3) × 36 × 9
V = (1/3) × 324
V = 108 cm³

**Answer: 108 cubic centimeters**

**Note:** Pyramid volume is 1/3 of a prism with same base and height!

---

## Real-World Applications

### Packaging (Rectangular Prism)

**Problem:** A shipping box is 12 in × 8 in × 6 in. How much can it hold? How much cardboard is needed to make it?

**Volume (capacity):**
V = 12 × 8 × 6 = 576 in³

**Surface Area (cardboard):**
SA = 2(12×8) + 2(12×6) + 2(8×6)
SA = 2(96) + 2(72) + 2(48)
SA = 192 + 144 + 96 = 432 in²

**Answer: Holds 576 in³, needs 432 in² of cardboard**

### Swimming Pool (Rectangular Prism)

**Problem:** A pool is 20 ft long, 10 ft wide, and 5 ft deep. How many gallons of water does it hold? (1 ft³ = 7.48 gallons)

**Solution:**
V = 20 × 10 × 5 = 1,000 ft³
Gallons = 1,000 × 7.48 = 7,480 gallons

**Answer: 7,480 gallons**

### Soda Can (Cylinder)

**Problem:** A can has radius 3 cm and height 12 cm. How much soda does it hold?

**Solution:**
V = πr²h = π(3²)(12) = 108π ≈ 339.29 cm³

**Answer: About 339 cm³ (about 339 mL)**

### Ice Cream Cone

**Problem:** An ice cream cone has radius 2 in and height 6 in. What's its volume?

**Solution:**
V = (1/3)πr²h = (1/3)π(2²)(6) = 8π ≈ 25.13 in³

**Answer: About 25 cubic inches**

### Basketball (Sphere)

**Problem:** A basketball has radius 4.7 inches. What's its volume?

**Solution:**
V = (4/3)πr³ = (4/3)π(4.7³) ≈ 434.89 in³

**Answer: About 435 cubic inches**

---

## Comparing Volume Formulas

Notice the patterns:

**Prisms:** V = (Base Area) × Height
- Rectangular: V = lwh
- Triangular: V = (1/2)bh × H
- Cylinder: V = πr²h

**Pyramids/Cones:** V = (1/3) × (Base Area) × Height
- Square pyramid: V = (1/3)s²h
- Cone: V = (1/3)πr²h

**Pattern:** Pyramids and cones are 1/3 the volume of prisms/cylinders with the same base and height!

**Sphere:** V = (4/3)πr³ (unique formula)

---

## Finding Unknown Dimensions

Sometimes you know the volume and need to find a dimension!

### Example 1: Find Height

A rectangular prism has volume 120 cm³, length = 6 cm, width = 4 cm. Find height.

**Solution:**
V = lwh
120 = 6 × 4 × h
120 = 24h
h = 5 cm

**Answer: Height = 5 cm**

### Example 2: Find Radius

A cylinder has volume 150π in³ and height = 6 in. Find radius.

**Solution:**
V = πr²h
150π = πr²(6)
150π = 6πr²
25 = r²
r = 5 in

**Answer: Radius = 5 inches**

---

## Units and Conversions

**Important:** Keep units consistent!

**Volume units:**
- 1 m³ = 1,000,000 cm³
- 1 ft³ = 1,728 in³
- 1 m³ = 1,000 liters
- 1 cm³ = 1 milliliter (mL)

**Example:** A box is 10 cm × 10 cm × 10 cm. Find volume in cm³ and liters.

**Solution:**
V = 10³ = 1,000 cm³
In liters: 1,000 cm³ = 1,000 mL = 1 liter

**Answer: 1,000 cm³ or 1 liter**

---

## Common Mistakes to Avoid

❌ **Mistake 1:** Confusing volume and surface area
- Volume = inside space (cubic units)
- Surface Area = outside covering (square units)

❌ **Mistake 2:** Forgetting the 1/3 for cones and pyramids
- **Wrong:** Cone V = πr²h
- **Right:** Cone V = (1/3)πr²h

❌ **Mistake 3:** Using diameter instead of radius
- Formulas use RADIUS (half of diameter)
- If given diameter 10, use r = 5!

❌ **Mistake 4:** Wrong units
- Volume needs CUBIC units (cm³, not cm²)
- Surface Area needs SQUARE units (cm², not cm³)

❌ **Mistake 5:** Calculation errors with π
- Use calculator's π button for accuracy
- Or use 3.14 as approximation

❌ **Mistake 6:** Mixing up dimensions
- Height vs. slant height (pyramids, cones)
- Base vs. total height
- Label your diagram!

---

## Practice Tips

**Tip 1: Draw and label**
- Sketch the 3D shape
- Label all dimensions clearly
- Mark what you're finding

**Tip 2: Identify the shape**
- What 3D shape is it?
- Which formula do you need?

**Tip 3: Check what's given**
- Do you have radius or diameter?
- Are all measurements in same units?
- Convert if needed!

**Tip 4: Use formulas correctly**
- Write the formula first
- Substitute values
- Calculate step-by-step

**Tip 5: Check reasonableness**
- Volume should be in cubic units
- Surface area should be in square units
- Does the size make sense?

**Tip 6: Remember special cases**
- Cube: all edges equal
- Cylinder: circular bases
- Cone/pyramid: includes 1/3

---

## Quick Reference Formulas

**Rectangular Prism:**
- Volume: V = lwh
- Surface Area: SA = 2(lw + lh + wh)

**Cube:**
- Volume: V = s³
- Surface Area: SA = 6s²

**Cylinder:**
- Volume: V = πr²h
- Surface Area: SA = 2πr² + 2πrh

**Cone:**
- Volume: V = (1/3)πr²h

**Sphere:**
- Volume: V = (4/3)πr³
- Surface Area: SA = 4πr²

**Square Pyramid:**
- Volume: V = (1/3)s²h

**Triangular Prism:**
- Volume: V = (1/2 × base × triangle height) × prism height

---

## Problem-Solving Strategy

**Step 1:** Identify the 3D shape

**Step 2:** Determine what you're finding (volume or surface area)

**Step 3:** List what you know (dimensions)

**Step 4:** Write the appropriate formula

**Step 5:** Substitute values

**Step 6:** Calculate (show work!)

**Step 7:** Include correct units

**Step 8:** Check - does it make sense?

---

## Composite 3D Figures

Sometimes shapes are combined!

**Example:** A building shaped like a rectangular prism with a square pyramid roof.
- Prism: 10 m × 10 m × 20 m
- Pyramid: base 10 m × 10 m, height 5 m

**Total Volume:**
Prism: V₁ = 10 × 10 × 20 = 2,000 m³
Pyramid: V₂ = (1/3)(10²)(5) = 500/3 ≈ 166.67 m³
Total: 2,000 + 166.67 = 2,166.67 m³

**Answer: About 2,167 cubic meters**

---

## When to Use Which Measurement?

**Use Volume when:**
- Finding capacity (how much it holds)
- Calculating amount of liquid, gas, or material
- Determining weight if you know density
- Example: How much water in a pool?

**Use Surface Area when:**
- Finding amount of material to cover/wrap
- Calculating paint needed
- Determining cost based on outside area
- Example: How much wrapping paper for a gift?

---

## Real-World Careers Using These Skills

- **Architecture:** Designing buildings, calculating materials
- **Engineering:** Creating products, containers
- **Manufacturing:** Packaging design
- **Construction:** Estimating concrete, paint, materials
- **Science:** Lab measurements, experiments
- **Cooking:** Recipe scaling, container sizes

---

## Summary

**Volume** measures space inside (cubic units)
- How much it can hold
- Prisms: Base Area × Height
- Pyramids/Cones: (1/3) × Base Area × Height
- Sphere: (4/3)πr³

**Surface Area** measures outside covering (square units)
- How much material to wrap it
- Add up all face areas
- Rectangular prism: 2(lw + lh + wh)
- Cylinder: 2πr² + 2πrh
- Sphere: 4πr²

**Key Skills:**
- Identify the 3D shape
- Use correct formula
- Keep units consistent
- Include proper units in answer

**Remember:**
- Volume = cubic units (cm³, in³, m³)
- Surface Area = square units (cm², in², m²)
- Radius = half the diameter
- Cone/Pyramid volume = 1/3 of prism/cylinder

Understanding volume and surface area is essential for architecture, engineering, science, and countless real-world applications!`
    }
  });
  console.log('✅ Updated: surface-area-volume');

  console.log('\n✨ Successfully updated 1 topic!');
  console.log('\n🎉 All Grade 7 Math content is now complete! (10/10 topics filled)');
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
