#!/usr/bin/env python3
"""Fix all diagnostic slug mismatches across the codebase.

Each mapping: old_slug_in_diagnostic -> correct_db_topic_slug
Only includes slugs that need changing (old != new).
"""

import os

FIXES = {
    "src/data/ap-physics-c-mechanics-diagnostic.ts": {
        "motion-in-one-dimension": "physics-c-position-velocity-acceleration",
        "projectile-motion": "physics-c-position-velocity-acceleration",
        "relative-motion": "physics-c-variable-acceleration",
        "newtons-first-law": "physics-c-newtons-laws-calculus",
        "newtons-second-law": "physics-c-newtons-laws-calculus",
        "friction-forces": "physics-c-friction-inclines",
        "work-energy-theorem": "physics-c-work-power",
        "conservation-of-energy": "physics-c-conservative-forces",
        "power-mechanics": "physics-c-work-power",
        "linear-momentum": "physics-c-momentum-collisions",
        "impulse-momentum": "physics-c-momentum-collisions",
        "collisions": "physics-c-momentum-collisions",
        "rotational-kinematics": "physics-c-rotational-kinematics-dynamics",
        "torque-angular-momentum": "physics-c-angular-momentum",
        "simple-harmonic-motion": "physics-c-simple-harmonic-motion",
    },
    "src/data/ap-physics-2-diagnostic.ts": {
        "fluid-statics": "density-and-pressure",
        "thermal-energy": "heat-specific-heat",
        "coulombs-law-electric-field": "electric-charge-coulombs-law",
        "electric-potential-energy": "electric-fields-potential",
        "dc-circuits": "series-parallel-circuits",
        "capacitors": "series-parallel-circuits",
        "photoelectric-effect": "photons-atomic-nuclear",
        "nuclear-physics": "photons-atomic-nuclear",
    },
    "src/data/ap-physics-c-em-diagnostic.ts": {
        "coulombs-law": "physics-c-electric-field-coulomb",
        "electric-fields": "physics-c-electric-field-coulomb",
        "gauss-law": "physics-c-gauss-law",
        "capacitance": "physics-c-capacitors-dielectrics",
        "dielectrics": "physics-c-capacitors-dielectrics",
        "conductors-in-electrostatics": "physics-c-electric-potential",
        "ohms-law": "physics-c-dc-circuits",
        "rc-circuits": "physics-c-rc-circuits",
        "kirchhoffs-rules": "physics-c-dc-circuits",
        "biot-savart-law": "physics-c-magnetic-field-sources",
        "amperes-law": "physics-c-magnetic-field-sources",
        "magnetic-force": "physics-c-magnetic-forces",
        "faradays-law": "physics-c-faraday-lenz",
        "inductance": "physics-c-inductance-rl-circuits",
        "maxwells-equations": "physics-c-maxwell-equations",
    },
    "src/data/ap-biology-diagnostic.ts": {
        "water-macromolecules": "water-properties",
        "cell-chemistry-basics": "carbohydrates",
        "cell-structure-function": "prokaryotic-eukaryotic-cells",
        "membrane-transport": "cell-membrane-transport",
        "enzyme-catalysis": "enzyme-kinetics",
        "photosynthesis-cellular-respiration": "cellular-respiration",
        "cell-cycle-mitosis-meiosis": "cell-cycle-mitosis",
        "non-mendelian-inheritance": "non-mendelian-genetics",
        "dna-replication-transcription": "dna-replication",
        "translation-gene-regulation": "gene-regulation",
        "speciation-phylogeny": "speciation",
        "community-ecosystem-ecology": "community-ecology",
    },
    "src/data/ap-statistics-diagnostic.ts": {
        "categorical-data-displays": "displaying-distributions-graphs",
        "quantitative-data-distributions": "describing-distributions",
        "bias-and-confounding": "bias-sampling-surveys",
        "probability-rules": "basic-probability-rules",
        "random-variables": "discrete-random-variables",
        "binomial-normal-distributions": "binomial-distribution",
        "confidence-intervals": "ci-proportions",
        "hypothesis-testing": "hypothesis-testing-framework",
    },
    "src/data/algebra1-diagnostic.ts": {
        "algebraic-expressions": "solving-linear-equations-algebra1",
        "one-step-equations": "solving-linear-equations-algebra1",
        "multi-step-equations": "solving-linear-equations-algebra1",
        "slope-intercept-form": "slope-intercept-form-algebra1",
        "point-slope-form": "slope-intercept-form-algebra1",
        "graphing-linear-equations": "graphing-linear-equations-algebra1",
        "substitution-method": "solving-systems-algebra1",
        "elimination-method": "solving-systems-algebra1",
        "systems-word-problems": "word-problems-linear-algebra1",
        "linear-inequalities": "linear-inequalities-algebra1",
        "compound-inequalities": "compound-absolute-value-inequalities-alg1",
        "absolute-value-inequalities": "absolute-value-algebra1",
        "polynomial-operations": "polynomial-operations-algebra1",
        "factoring-trinomials": "factoring-algebra1",
        "factoring-special-products": "factoring-algebra1",
        "exponent-rules": "exponent-rules-algebra1",
        "scientific-notation": "exponent-rules-algebra1",
        "simplifying-radicals": "simplifying-radicals-algebra1",
    },
    "src/data/algebra2-diagnostic.ts": {
        "quadratic-formula": "solving-quadratics-algebra1",
        "vertex-form": "graphing-quadratics-algebra1",
        "polynomial-zeros": "polynomial-theorems-algebra2",
        "simplifying-rationals": "simplifying-rationals-algebra2",
        "rational-equations": "rational-equations-algebra2",
        "complex-fractions": "rational-operations-algebra2",
        "exponential-growth-decay": "exponential-functions-algebra2",
        "logarithm-properties": "logarithms-properties-alg2",
        "solving-log-equations": "logarithmic-equations-algebra2",
        "radical-equations": "radical-equations-algebra2",
        "complex-numbers": "complex-numbers-intro-algebra2",
        "rational-exponents": "rational-exponents-algebra2",
        "arithmetic-geometric-sequences": "geometric-sequences-algebra2",
        "binomial-theorem": "series-summation-algebra2",
        "counting-probability": "series-probability-alg2",
    },
    "src/data/geometry-diagnostic.ts": {
        "triangle-congruence": "triangle-congruence-theorems-geo",
        "cpctc": "congruent-triangles",
        "isosceles-equilateral-triangles": "congruent-triangles",
        "similar-triangles": "similar-triangles-geometry",
        "triangle-proportionality": "similar-figures-scale-factor-geo",
        "proportional-relationships": "similar-figures-scale-factor-geo",
        "basic-trigonometry": "trigonometric-ratios-geo",
        "circle-theorems": "circle-theorems-arcs-geo",
        "arc-length-sector-area": "circle-basics-geometry",
        "area-of-polygons": "area-triangles-quadrilaterals",
        "surface-area": "surface-area-volume-solids-geo",
        "volume-formulas": "surface-area-volume-solids-geo",
        "distance-midpoint": "special-segments-triangles",
        "transformations": "rigid-transformations-geo",
        "slope-parallel-perpendicular": "parallel-lines-transversals",
    },
    "src/data/grade8-math-diagnostic.ts": {
        "rational-irrational-numbers": "rational-irrational-numbers-grade8",
        "comparing-real-numbers": "rational-irrational-numbers-grade8",
        "approximating-irrationals": "radicals-integer-exponents-grade8",
        "scientific-notation": "scientific-notation-grade8",
        "solving-linear-equations": "solving-linear-equations-grade8",
        "defining-functions": "understanding-functions-grade8",
        "comparing-functions": "understanding-functions-grade8",
        "linear-functions-grade8": "slope-linear-functions-grade8",
        "slope-as-rate-of-change": "slope-rate-of-change",
        "proportional-relationships-grade8": "slope-rate-of-change",
        "transformations-grade8": "geometric-transformations-grade8",
        "line-of-best-fit": "scatter-plots-trend-lines-grade8",
    },
    "src/data/prealgebra-diagnostic.ts": {
        "adding-subtracting-integers": "operations-with-integers",
        "multiplying-dividing-integers": "operations-with-integers",
        "order-of-operations-prealg": "order-of-operations-pemdas",
        "fraction-operations": "operations-with-fractions",
        "decimal-operations": "decimals-and-percents",
        "converting-fractions-decimals-percents": "fraction-decimal-conversions",
        "ratios-rates": "ratios-and-rates-prealgebra",
        "solving-proportions": "proportions-prealgebra",
        "evaluating-expressions": "variables-and-expressions",
        "one-step-equations": "one-step-equations-prealgebra",
        "two-step-equations": "solving-two-step-equations",
        "area-perimeter": "perimeter-and-area",
        "volume-surface-area-prealg": "volume-rectangular-prisms",
        "angles-triangles-prealg": "angle-measurements",
        "reading-graphs": "reading-graphs-charts",
        "basic-probability": "intro-statistics-prealg",
    },
    "src/data/precalculus-diagnostic.ts": {
        "function-analysis": "composite-inverse-functions",
        "domain-range": "composite-inverse-functions",
        "transformations": "function-transformations",
        "polynomial-functions": "polynomial-functions-end-behavior",
        "rational-functions": "rational-functions-asymptotes",
        "zeros-of-polynomials": "polynomial-division-remainder-theorem",
        "exponential-functions": "exponential-functions-growth-decay",
        "exponential-equations": "solving-exponential-logarithmic-equations",
        "unit-circle": "the-unit-circle",
        "trig-identities": "trigonometric-identities",
        "trig-equations": "solving-trig-equations",
        "inverse-trig": "inverse-trig-functions",
        "law-of-sines": "law-of-sines-cosines",
        "law-of-cosines": "law-of-sines-cosines",
        "arithmetic-sequences": "sequences-arithmetic-geometric",
        "geometric-sequences": "sequences-arithmetic-geometric",
    },
    "src/data/ochem-diagnostic.ts": {
        "iupac-nomenclature": "molecular-representations",
        "hybridization-geometry": "atomic-structure-bonding-ochem",
        "molecular-orbital-theory": "atomic-structure-bonding-ochem",
        "chirality-enantiomers": "stereochemistry-chirality",
        "diastereomers-meso": "stereochemistry-chirality",
        "sn1-sn2-reactions": "nucleophilic-substitution",
        "e1-e2-elimination": "elimination-reactions",
        "functional-group-chemistry": "alkenes-reactions",
        "aromaticity-huckel": "aromatic-compounds-benzene",
        "aldehydes-ketones": "aldehydes-ketones-reactions",
        "carboxylic-acid-derivatives": "carboxylic-acids-derivatives",
        "ir-mass-spec": "infrared-mass-spectrometry",
    },
}

def apply_fixes():
    for filepath, mappings in sorted(FIXES.items()):
        if not os.path.exists(filepath):
            print(f"SKIP (not found): {filepath}")
            continue
        
        with open(filepath, 'r') as f:
            content = f.read()
        
        original = content
        changes = 0
        
        for old_slug, new_slug in sorted(mappings.items()):
            if old_slug == new_slug:
                continue
            
            # Replace all quoted occurrences: 'old-slug' -> 'new-slug'
            # This handles topicSlug values, topicSlugs arrays, and SLUG_LABELS keys
            pattern = f"'{old_slug}'"
            replacement = f"'{new_slug}'"
            count = content.count(pattern)
            if count > 0:
                content = content.replace(pattern, replacement)
                changes += count
                print(f"  {old_slug} -> {new_slug} ({count} occurrences)")
        
        if content != original:
            with open(filepath, 'w') as f:
                f.write(content)
            print(f"FIXED: {filepath} ({changes} total replacements)\n")
        else:
            print(f"NO CHANGES: {filepath}\n")

if __name__ == "__main__":
    apply_fixes()
