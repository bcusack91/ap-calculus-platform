export const reflectionRefractionPart4Data = {
  topicSlug: 'reflection-refraction',
  sections: [
    {
      id: 'index-of-refraction',
      type: 'text' as const,
      content: `
**Index of Refraction** 🌊

Light slows down when entering a material!

## The Index

**Index of refraction** ($n$):

$$n = \\frac{c}{v}$$

where:
- $c$ = speed of light in vacuum = $3.0 \\times 10^8$ m/s
- $v$ = speed of light in the material

**Key Properties:**
- $n \\geq 1$ (light can't go faster than $c$!)
- No units (dimensionless)
- Higher $n$ → slower light → more bending

## Common Values:

| Material | Index ($n$) |
|----------|-------------|
| Vacuum   | 1.0000 (exactly) |
| Air      | 1.0003 ≈ 1 |
| Water    | 1.33 |
| Glass    | 1.5 |
| Diamond  | 2.42 |

## What Changes, What Doesn't:

When light enters a new medium:

**Changes:**
- ✅ Speed: $v = c/n$
- ✅ Wavelength: $\\lambda = \\lambda_0/n$

**Stays the Same:**
- ❌ Frequency: $f$ constant
- ❌ Color (determined by frequency)

## Why This Matters:

The relationship $c = \\lambda f$ still holds, but in a medium:

$$v = \\lambda f$$

Since $f$ stays constant:
$$\\frac{c}{n} = \\frac{\\lambda_0}{n} \\cdot f$$

This confirms $v$ and $\\lambda$ both decrease by factor $n$!
      `
    }
  ]
}
