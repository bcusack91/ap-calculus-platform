#!/usr/bin/env python3
"""
Enhance intro sections of AP Chemistry interactive lessons.

Pattern (matching chemistry-electron-configuration-part4.ts):
- Title with emoji (keep existing)
- **Part X of 7 — Subtitle** (keep existing if present, add if missing)
- --- separator
- Context/motivation section (table, key concept, or "why this matters")
- > blockquote with key insight
- --- separator
- ### What You'll Master in Part X (bullet list of 3-4 items)
"""

import re
import os
import glob
import sys

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
LESSONS_DIR = os.path.join(BASE, 'src', 'data', 'interactive-lessons')


def get_registry_part_titles():
    """Extract part titles from registry for each topic."""
    reg_path = os.path.join(LESSONS_DIR, 'registry.ts')
    with open(reg_path) as f:
        text = f.read()
    
    result = {}
    # Find each topic block
    for match in re.finditer(r"'([^']+)':\s*\{[^}]*parts:\s*\[(.*?)\]", text, re.DOTALL):
        slug = match.group(1)
        parts_block = match.group(2)
        titles = re.findall(r"title:\s*'([^']*)'", parts_block)
        result[slug] = titles
    return result


def extract_intro_section(text):
    """Extract the first section's content (intro section)."""
    # Try multiple patterns to handle different formats:
    # 1. type: 'text' as const, content: `...`
    # 2. type: 'text', title: '...', content: `...`
    # 3. type: 'text' as const, title: '...', content: `...`
    patterns = [
        r"sections:\s*\[\s*\{\s*id:\s*'([^']*)',\s*type:\s*'text'(?:\s*as\s*const)?,\s*content:\s*`(.*?)`",
        r"sections:\s*\[\s*\{\s*id:\s*'([^']*)',\s*type:\s*'text'(?:\s*as\s*const)?,\s*title:\s*'[^']*',\s*content:\s*`(.*?)`",
    ]
    for pattern in patterns:
        match = re.search(pattern, text, re.DOTALL)
        if match:
            return match.group(1), match.group(2)
    return None, None


def extract_section_headings(text):
    """Get all ## and ### headings from the full file to understand topic coverage."""
    headings = re.findall(r'^(?:#{2,3})\s+(.+)', text, re.MULTILINE)
    return headings


def get_topic_slug_from_file(text):
    """Extract topicSlug from file."""
    match = re.search(r"topicSlug:\s*'([^']*)'", text)
    return match.group(1) if match else None


def is_already_enhanced(content):
    """Check if intro already has the enhanced format."""
    return ('What You' in content and '---' in content and 
            ('|' in content or '- ' in content))


def get_part_number(filename):
    """Extract part number from filename."""
    match = re.search(r'part(\d+)', filename)
    return int(match.group(1)) if match else 0


# ─────────────────────────────────────────────────────────────────
# Topic-specific intro content
# Each entry: { part_num: (context_block, blockquote, objectives) }
# context_block: markdown string with tables/examples
# blockquote: the > 🔑 insight line
# objectives: list of bullet strings
# ─────────────────────────────────────────────────────────────────

TOPIC_INTROS = {
    'electron-configuration': {
        1: {
            'context': """### Quick Reference

| Particle | Charge | Location | How to Find Count |
|----------|--------|----------|-------------------|
| Proton (p⁺) | +1 | Nucleus | = Atomic number (Z) |
| Neutron (n⁰) | 0 | Nucleus | = Mass number − Z |
| Electron (e⁻) | −1 | Electron cloud | = Z (neutral atom) |""",
            'blockquote': '> 🔑 **Why this matters:** The atomic number defines the element, and the electron count determines all chemical behavior — bonding, reactivity, and periodic trends.',
            'objectives': [
                'Identifying protons, neutrons, and electrons from atomic/mass numbers',
                'Using isotope notation to describe different forms of an element',
                'Calculating particle counts in ions (cations and anions)',
            ]
        },
        2: {
            'context': """### Energy Level Overview

| Level (n) | Subshells Available | Max Electrons ($2n^2$) |
|-----------|--------------------|-----------------------|
| 1 | 1s | 2 |
| 2 | 2s, 2p | 8 |
| 3 | 3s, 3p, 3d | 18 |
| 4 | 4s, 4p, 4d, 4f | 32 |

The filling order **does not** follow simple numerical order — 4s fills before 3d!""",
            'blockquote': '> 🔑 **Why this matters:** The Aufbau filling order determines where every electron goes, and it explains why the periodic table is shaped the way it is.',
            'objectives': [
                'Understanding principal energy levels and the $2n^2$ formula',
                'Knowing the four subshell types (s, p, d, f) and their capacities',
                'Memorizing the Aufbau filling order with the diagonal rule',
            ]
        },
        3: {
            'context': """### The Three Rules at a Glance

| Rule | What It Controls | Key Idea |
|------|-----------------|----------|
| **Aufbau Principle** | Filling order | Lowest energy subshell fills first |
| **Pauli Exclusion** | Orbital capacity | Max 2 electrons per orbital (opposite spins) |
| **Hund's Rule** | Degenerate orbitals | Fill singly before pairing |""",
            'blockquote': "> 🔑 **Why this matters:** These three rules are the complete recipe for writing any electron configuration — and they're tested heavily on the AP exam.",
            'objectives': [
                'Applying all three rules to write configurations for any element',
                'Building configurations step-by-step with running electron counts',
                'Verifying configurations by checking total electrons match Z',
            ]
        },
        5: {
            'context': """### The Two Must-Know Exceptions

| Element | Expected Config | Actual Config | Why? |
|---------|----------------|---------------|------|
| **Cr** (Z=24) | [Ar] 4s² 3d⁴ | **[Ar] 3d⁵ 4s¹** | Half-filled d⁵ is extra stable |
| **Cu** (Z=29) | [Ar] 4s² 3d⁹ | **[Ar] 3d¹⁰ 4s¹** | Fully filled d¹⁰ is extra stable |

And the critical ion rule: **remove electrons from the highest n first** (4s before 3d).""",
            'blockquote': '> 🔑 **Why this matters:** These exceptions and the ion formation rule are among the most frequently tested topics on the AP Chemistry exam.',
            'objectives': [
                'Recognizing and writing the Cr and Cu exceptions',
                'Forming cation configurations by removing from the highest n first',
                'Writing anion configurations by adding electrons',
                'Identifying isoelectronic species',
            ]
        },
        6: {
            'context': """### From Configuration to Quantum Address

| Level of Detail | What It Tells You | Example (for a 2p electron) |
|----------------|-------------------|----------------------------|
| Configuration | Which subshells are occupied | 2p⁴ |
| Orbital diagram | Spin of each electron | ↑↓ ↑ ↑ |
| Quantum numbers | Exact "address" of one electron | n=2, l=1, $m_l$=−1, $m_s$=+½ |""",
            'blockquote': '> 🔑 **Why this matters:** Quantum numbers give every electron a unique identity — like a GPS coordinate inside the atom.',
            'objectives': [
                'Drawing orbital diagrams with correct Hund\'s rule application',
                'Assigning all four quantum numbers (n, l, $m_l$, $m_s$) to any electron',
                'Calculating the number of orbitals in a subshell using 2l + 1',
            ]
        },
        7: {
            'context': """### Concepts You'll Integrate

| Concept | From Part | How It Connects |
|---------|-----------|----------------|
| Subatomic particles | Part 1 | Identify elements from configurations |
| Aufbau filling order | Part 2 | Write any configuration correctly |
| Three rules | Part 3 | Avoid common errors |
| Noble gas shorthand | Part 4 | Simplify and focus on valence electrons |
| Exceptions & ions | Part 5 | Handle Cr, Cu, and transition metal ions |
| Quantum numbers | Part 6 | Full electron "addresses" |""",
            'blockquote': '> 🔑 **Why this matters:** The AP exam tests electron configuration in multiple-choice, free-response, AND as background knowledge for bonding, periodicity, and spectroscopy questions.',
            'objectives': [
                'Solving multi-concept problems that combine configurations with periodic trends',
                'Connecting ionization energy exceptions to electron configuration',
                'Identifying elements from configurations and predicting ion behavior',
            ]
        },
    },
    'acid-base-theories-ph': {
        1: {
            'context': """### Three Acid-Base Theories — Where We're Headed

| Theory | Acid Is... | Base Is... | This Part |
|--------|-----------|-----------|-----------|
| **Arrhenius** | Produces $H^+$ in water | Produces $OH^-$ in water | ✅ Part 1 |
| Brønsted-Lowry | Proton donor | Proton acceptor | Part 2 |
| Lewis | Electron pair acceptor | Electron pair donor | Part 3 |""",
            'blockquote': '> 🔑 **Why this matters:** The Arrhenius model is the foundation — every acid-base theory that follows builds on these ideas.',
            'objectives': [
                'Defining Arrhenius acids and bases by what they produce in water',
                'Identifying limitations of the Arrhenius model',
                'Recognizing strong acids and the hydronium ion concept',
            ]
        },
        2: {
            'context': """### Arrhenius vs. Brønsted-Lowry

| Feature | Arrhenius | Brønsted-Lowry |
|---------|----------|----------------|
| Acid definition | Produces $H^+$ in water | Donates a proton ($H^+$) |
| Base definition | Produces $OH^-$ in water | Accepts a proton |
| Works in... | Aqueous solutions only | Any solvent |
| Introduces... | — | Conjugate pairs |""",
            'blockquote': '> 🔑 **Why this matters:** The Brønsted-Lowry model is what the AP exam uses most — conjugate acid-base pairs appear in nearly every acid-base question.',
            'objectives': [
                'Identifying proton donors (acids) and proton acceptors (bases)',
                'Writing conjugate acid-base pairs for any reaction',
                'Recognizing amphoteric substances like water',
            ]
        },
        3: {
            'context': """### How the Three Theories Compare

| Theory | Key Question | Broadest? |
|--------|-------------|-----------|
| Arrhenius | Does it produce $H^+$ or $OH^-$? | Narrowest |
| Brønsted-Lowry | Does it donate or accept $H^+$? | Middle |
| **Lewis** | **Does it donate or accept electron pairs?** | **Broadest** |

The Lewis model captures reactions that have nothing to do with protons!""",
            'blockquote': '> 🔑 **Why this matters:** Lewis acid-base theory explains coordination chemistry, organic reactions, and metal complex formation — all tested on the AP exam.',
            'objectives': [
                'Defining Lewis acids (electron pair acceptors) and bases (electron pair donors)',
                'Identifying Lewis acids: metal cations, incomplete octets, $H^+$',
                'Comparing all three acid-base theories on the AP exam',
            ]
        },
        4: {
            'context': """### The pH Scale at a Glance

| pH | $[H^+]$ (M) | Character | Example |
|----|-------------|-----------|---------|
| 0 | $10^0$ | Strongly acidic | Battery acid |
| 3 | $10^{-3}$ | Acidic | Vinegar |
| 7 | $10^{-7}$ | Neutral | Pure water |
| 11 | $10^{-11}$ | Basic | Ammonia |
| 14 | $10^{-14}$ | Strongly basic | Drain cleaner |

Each pH unit = a **10-fold** change in $[H^+]$.""",
            'blockquote': '> 🔑 **Why this matters:** pH calculations are on virtually every AP Chemistry exam — mastering the logarithmic relationship between $[H^+]$ and pH is essential.',
            'objectives': [
                'Converting between $[H^+]$, pH, $[OH^-]$, and pOH',
                'Understanding the pH + pOH = 14 relationship',
                'Interpreting what pH values mean for acidity and basicity',
            ]
        },
        5: {
            'context': """### Strong = Complete Dissociation

| Type | Example | Key Calculation |
|------|---------|-----------------|
| Strong monoprotic acid | 0.025 M HCl | $[H^+] = 0.025$ M, pH = 1.60 |
| Strong diprotic acid | 0.010 M $H_2SO_4$ | $[H^+] \\approx 0.020$ M |
| Strong base (Group 1) | 0.010 M NaOH | $[OH^-] = 0.010$ M, pOH = 2.00 |
| Strong base (Group 2) | 0.005 M $Ba(OH)_2$ | $[OH^-] = 0.010$ M |""",
            'blockquote': '> 🔑 **Why this matters:** Strong acid/base pH problems are the foundation for all later calculations — titrations, buffers, and equilibrium all build from here.',
            'objectives': [
                'Calculating pH of strong monoprotic and diprotic acids',
                'Calculating pOH and pH of strong bases (Group 1 and Group 2)',
                'Handling dilution before calculating pH',
            ]
        },
        6: {
            'context': """### Problem Types You'll Practice

| Problem Type | Skills Combined |
|-------------|-----------------|
| Theory identification | Arrhenius vs. Brønsted-Lowry vs. Lewis |
| Multi-step pH | Dilution → dissociation → $-\\log$ |
| Conceptual reasoning | Very dilute acid pH limits |
| Conjugate pair analysis | Identifying donors/acceptors |""",
            'blockquote': '> 🔑 **Why this matters:** AP Chemistry free-response questions often combine acid-base theory with pH calculations — exactly the type of multi-step problems in this workshop.',
            'objectives': [
                'Solving multi-step pH problems with dilution',
                'Identifying acid-base behavior across all three theories',
                'Reasoning about edge cases like very dilute strong acids',
            ]
        },
        7: {
            'context': """### Everything Comes Together

| Topic | Key Equation or Concept |
|-------|------------------------|
| Three theories | Arrhenius ⊂ Brønsted-Lowry ⊂ Lewis |
| pH/pOH | $pH + pOH = 14$ |
| Strong acids | $[H^+]$ = concentration (complete dissociation) |
| Conjugate pairs | Acid → conjugate base + $H^+$ |
| $K_w$ | $[H^+][OH^-] = 1.0 \\times 10^{-14}$ at 25°C |""",
            'blockquote': '> 🔑 **Why this matters:** This review mirrors the AP exam format — expect questions that require you to connect theory, calculations, and conceptual reasoning in a single problem.',
            'objectives': [
                'Tackling AP-style multiple choice across all acid-base topics',
                'Writing free-response explanations using proper chemistry terminology',
                'Identifying common AP traps and avoiding them',
            ]
        },
    },
    'acid-base-titrations': {
        1: {
            'context': """### Titration Essentials

| Term | Definition |
|------|-----------|
| **Titrant** | Solution of known concentration (in the buret) |
| **Analyte** | Solution of unknown concentration (in the flask) |
| **Equivalence point** | Moles of acid = moles of base |
| **Endpoint** | Indicator changes color (ideally ≈ equivalence point) |

$$n_{acid} \\times \\text{(acid ratio)} = n_{base} \\times \\text{(base ratio)}$$""",
            'blockquote': '> 🔑 **Why this matters:** Titrations appear on nearly every AP Chemistry exam — both in multiple choice and as multi-part free-response questions.',
            'objectives': [
                'Understanding titration setup, terminology, and the equivalence point concept',
                'Using the moles relationship to find unknown concentrations',
                'Calculating pH before, at, and after the equivalence point for strong-strong titrations',
            ]
        },
        2: {
            'context': """### The Four Regions of a Strong-Strong Titration

| Region | What's Happening | pH Determined By |
|--------|-----------------|-----------------|
| Before equivalence | Excess acid remains | $[H^+]$ from unreacted acid |
| Near equivalence | Rapid pH change | Very small excess of acid/base |
| At equivalence | Complete neutralization | pH = 7.00 (strong-strong only) |
| After equivalence | Excess base added | $[OH^-]$ from excess base |""",
            'blockquote': '> 🔑 **Why this matters:** Understanding each region of the curve is essential — the AP exam asks you to calculate pH at specific volumes and interpret the curve shape.',
            'objectives': [
                'Sketching the S-shaped titration curve for strong acid–strong base',
                'Calculating pH at key points before, at, and after equivalence',
                'Explaining why the equivalence point pH = 7.00 for strong-strong titrations',
            ]
        },
        3: {
            'context': """### Weak Acid–Strong Base: What Changes

| Feature | Strong-Strong | Weak-Strong |
|---------|--------------|-------------|
| Initial pH | Very low | Higher (partial dissociation) |
| Buffer region | None | Yes! (before equivalence) |
| Half-equivalence | No special significance | **pH = p$K_a$** |
| Equivalence pH | 7.00 | **> 7** (conjugate base is basic) |
| After equivalence | Same | Same (excess strong base) |""",
            'blockquote': '> 🔑 **Why this matters:** Weak acid–strong base titrations are the single most tested titration type on the AP exam — understanding the buffer region and half-equivalence point is critical.',
            'objectives': [
                'Identifying the four regions of a weak acid–strong base titration curve',
                'Explaining why the buffer region exists and using Henderson-Hasselbalch there',
                'Calculating pH at the half-equivalence point using pH = p$K_a$',
            ]
        },
        4: {
            'context': """### Critical Points Summary

| Point | Volume of Base | How to Find pH | Key Feature |
|-------|---------------|----------------|-------------|
| Initial | 0 mL | ICE table with $K_a$ | Weak acid equilibrium |
| Half-equivalence | ½ $V_{eq}$ | pH = p$K_a$ | Max buffer capacity |
| Equivalence | $V_{eq}$ | Hydrolysis of conjugate base ($K_b$) | pH > 7 for weak acid |
| After equivalence | > $V_{eq}$ | Excess $[OH^-]$ | Same for all titrations |""",
            'blockquote': '> 🔑 **Why this matters:** The AP exam frequently asks you to identify these points on a graph and calculate pH at each — this is high-yield content.',
            'objectives': [
                'Finding pH at the half-equivalence, equivalence, and post-equivalence points',
                'Understanding weak base–strong acid titrations (inverted curves)',
                'Handling polyprotic acid titrations with multiple equivalence points',
            ]
        },
        5: {
            'context': """### Indicator Selection at a Glance

| Indicator | Color Change | pH Range | Best For |
|-----------|-------------|----------|----------|
| Methyl orange | Red → Yellow | 3.1–4.4 | Strong base titrating strong acid |
| Bromothymol blue | Yellow → Blue | 6.0–7.6 | Strong-strong titrations |
| Phenolphthalein | Colorless → Pink | 8.2–10.0 | Weak acid–strong base |
| Alizarin yellow R | Yellow → Red | 10.1–12.0 | Very basic equivalence points |""",
            'blockquote': "> 🔑 **Why this matters:** Choosing the wrong indicator gives a false endpoint — the AP exam tests whether you can match an indicator's range to the equivalence point pH.",
            'objectives': [
                'Understanding how indicators work as weak acids that change color',
                'Matching indicator pH range to the equivalence point pH',
                'Comparing indicators to pH meters for accuracy',
            ]
        },
        6: {
            'context': """### Workshop Problem Types

| Problem Type | What You'll Practice |
|-------------|---------------------|
| Complete titration curve | Calculate pH at 4+ points, sketch curve |
| Unknown acid ID | Use equivalence volume + pH to find $K_a$ and molar mass |
| Indicator selection | Match indicator to titration type |
| Multi-step free-response | Combine all skills in AP format |""",
            'blockquote': '> 🔑 **Why this matters:** These multi-part problems mirror the exact format of AP Chemistry FRQ #3 (the lab/quantitative question).',
            'objectives': [
                'Working through complete titration curve calculations step-by-step',
                'Identifying unknown acids from titration data',
                'Integrating indicator selection with curve analysis',
            ]
        },
        7: {
            'context': """### Everything at a Glance

| Titration Type | Equivalence pH | Special Features |
|---------------|---------------|-----------------|
| Strong acid + Strong base | = 7.00 | Sharp, symmetric curve |
| Weak acid + Strong base | > 7 | Buffer region, pH = p$K_a$ at half-eq |
| Weak base + Strong acid | < 7 | Inverted curve |
| Polyprotic acid | Multiple eq pts | Separate steps for each proton |""",
            'blockquote': '> 🔑 **Why this matters:** AP exam questions can test any titration type — this review prepares you for the full range of possible questions.',
            'objectives': [
                'Distinguishing all titration types from curve shape alone',
                'Solving AP-style multi-step titration problems under timed conditions',
                'Connecting titrations to buffer chemistry and equilibrium concepts',
            ]
        },
    },
    'activation-energy-arrhenius': {
        1: {
            'context': """### Two Requirements for an Effective Collision

| Requirement | What It Means | If Missing |
|-------------|--------------|------------|
| **Sufficient energy** | KE ≥ $E_a$ | Molecules bounce off — no reaction |
| **Proper orientation** | Reactive sites align | Collision is wasted |

Most collisions fail — only a tiny fraction have both enough energy AND the right orientation.""",
            'blockquote': '> 🔑 **Why this matters:** Collision theory explains why reactions have activation energies and why temperature dramatically affects reaction rates.',
            'objectives': [
                'Explaining why molecules must collide with sufficient energy and proper orientation',
                'Interpreting Maxwell-Boltzmann distribution curves',
                'Predicting how temperature changes shift the fraction of effective collisions',
            ]
        },
        2: {
            'context': """### Reading an Energy Diagram

| Feature | What It Represents | How to Find It |
|---------|-------------------|----------------|
| Y-axis height of reactants | Potential energy of reactants | Starting level |
| Y-axis height of products | Potential energy of products | Ending level |
| Peak height | Transition state energy | Highest point on curve |
| $E_a$ (forward) | Activation energy | Peak − Reactants |
| $\\Delta H$ | Enthalpy change | Products − Reactants |""",
            'blockquote': '> 🔑 **Why this matters:** Energy diagrams appear frequently on the AP exam — you must be able to read, label, and calculate $E_a$ and $\\Delta H$ from them.',
            'objectives': [
                'Labeling all parts of an energy diagram (reactants, products, $E_a$, transition state)',
                'Distinguishing exothermic ($\\Delta H < 0$) from endothermic ($\\Delta H > 0$) diagrams',
                'Calculating forward and reverse activation energies from diagram data',
            ]
        },
        3: {
            'context': """### The Arrhenius Equation

$$k = Ae^{-E_a/RT}$$

| Symbol | Meaning | Units |
|--------|---------|-------|
| $k$ | Rate constant | Depends on order |
| $A$ | Frequency factor | Same as $k$ |
| $E_a$ | Activation energy | J/mol |
| $R$ | Gas constant | 8.314 J/(mol·K) |
| $T$ | Temperature | K (Kelvin!) |""",
            'blockquote': '> 🔑 **Why this matters:** The Arrhenius equation is one of the most important in kinetics — it quantitatively connects rate constants to temperature and activation energy.',
            'objectives': [
                'Understanding each variable in $k = Ae^{-E_a/RT}$',
                'Explaining how $k$ changes with temperature and $E_a$',
                'Calculating rate constants at different temperatures',
            ]
        },
        4: {
            'context': """### From Exponential to Linear

| Form | Equation | Graph |
|------|----------|-------|
| Exponential | $k = Ae^{-E_a/RT}$ | Curved — hard to analyze |
| **Linear** | $\\ln k = -\\frac{E_a}{R} \\cdot \\frac{1}{T} + \\ln A$ | **Straight line** |

Plot $\\ln k$ vs $1/T$ → slope = $-E_a/R$, y-intercept = $\\ln A$""",
            'blockquote': '> 🔑 **Why this matters:** The AP exam often provides data as a table of temperatures and rate constants — you need to know how to plot and analyze it graphically.',
            'objectives': [
                'Deriving the linearized Arrhenius equation from the exponential form',
                'Determining $E_a$ from the slope of a $\\ln k$ vs $1/T$ plot',
                'Interpreting Arrhenius plots for AP exam data analysis questions',
            ]
        },
        5: {
            'context': """### When You Have Just Two Data Points

$$\\ln\\frac{k_2}{k_1} = \\frac{E_a}{R}\\left(\\frac{1}{T_1} - \\frac{1}{T_2}\\right)$$

| Given | Can Solve For |
|-------|--------------|
| $k_1$, $k_2$, $T_1$, $T_2$ | $E_a$ |
| $k_1$, $E_a$, $T_1$, $T_2$ | $k_2$ |
| $k_1$, $k_2$, $E_a$, $T_1$ | $T_2$ |""",
            'blockquote': '> 🔑 **Why this matters:** This is the most commonly tested Arrhenius equation form on the AP exam — many free-response problems give exactly two (T, k) data points.',
            'objectives': [
                'Using the two-point Arrhenius equation to find $E_a$, $k$, or $T$',
                'Correctly converting temperatures to Kelvin before substituting',
                'Recognizing which form to use based on given data',
            ]
        },
        6: {
            'context': """### Catalyst Effects on the Energy Diagram

| Feature | Without Catalyst | With Catalyst |
|---------|-----------------|---------------|
| $E_a$ | Higher | **Lower** (new pathway) |
| $\\Delta H$ | Unchanged | **Unchanged** |
| $K$ (equilibrium constant) | Value X | **Still X** (unchanged!) |
| Rate | Slower | **Faster** (both directions equally) |""",
            'blockquote': '> 🔑 **Why this matters:** The AP exam frequently tests what catalysts do and do NOT change — especially the distinction between kinetics (rate) and thermodynamics (equilibrium).',
            'objectives': [
                'Explaining how catalysts lower $E_a$ by providing an alternative reaction pathway',
                'Distinguishing homogeneous, heterogeneous, and biological (enzyme) catalysts',
                'Understanding that catalysts speed up both forward and reverse reactions equally',
            ]
        },
        7: {
            'context': """### Equations You Must Know

| Equation | When to Use |
|----------|-------------|
| $k = Ae^{-E_a/RT}$ | Conceptual — how $k$ depends on T and $E_a$ |
| $\\ln k = -\\frac{E_a}{R}\\cdot\\frac{1}{T} + \\ln A$ | Graphical — slope of $\\ln k$ vs $1/T$ |
| $\\ln\\frac{k_2}{k_1} = \\frac{E_a}{R}(\\frac{1}{T_1} - \\frac{1}{T_2})$ | Two data points — find $E_a$, $k$, or $T$ |
| $E_a(\\text{forward}) = E_a(\\text{reverse}) + \\Delta H$ | Energy diagram relationships |""",
            'blockquote': '> 🔑 **Why this matters:** AP Chemistry free-response questions often combine energy diagrams, Arrhenius calculations, and catalyst effects in a single multi-part problem.',
            'objectives': [
                'Solving comprehensive problems that combine collision theory, energy diagrams, and Arrhenius',
                'Interpreting how catalysts affect energy diagrams and rate constants',
                'Working through AP-style free-response questions under timed conditions',
            ]
        },
    },
    'buffer-solutions-henderson-hasselbalch': {
        1: {
            'context': """### What Makes a Buffer?

| ✅ Buffer | ❌ NOT a Buffer |
|----------|----------------|
| Weak acid + its conjugate base | Strong acid + strong base |
| $CH_3COOH$ + $CH_3COONa$ | HCl + NaOH |
| $NH_3$ + $NH_4Cl$ | NaCl solution |
| Weak base + its conjugate acid | Strong acid alone |""",
            'blockquote': '> 🔑 **Why this matters:** Buffers are essential in biochemistry (blood pH = 7.4), lab work, and industry — and they appear on every AP Chemistry exam.',
            'objectives': [
                'Defining what a buffer is and identifying buffer vs. non-buffer solutions',
                'Understanding why buffers need BOTH a weak acid AND its conjugate base',
                'Explaining qualitatively how buffers resist pH changes',
            ]
        },
        2: {
            'context': """### The Two-Step Buffer Method

| Step | What You Do | Tool |
|------|-------------|------|
| **1. Stoichiometry** | Neutralization: strong acid/base reacts completely with one buffer component | ICE table (in moles) |
| **2. Equilibrium** | Calculate new pH from adjusted [HA]/[A⁻] ratio | Henderson-Hasselbalch |""",
            'blockquote': '> 🔑 **Why this matters:** This two-step method is how every buffer problem on the AP exam is solved — master it and you can handle any buffer calculation.',
            'objectives': [
                'Setting up stoichiometry tables for buffer + strong acid/base',
                'Calculating new concentrations after neutralization',
                'Applying Henderson-Hasselbalch with the updated ratio',
            ]
        },
        3: {
            'context': """### The Henderson-Hasselbalch Equation

$$pH = pK_a + \\log\\frac{[A^-]}{[HA]}$$

| Ratio $[A^-]/[HA]$ | $\\log$ term | pH vs p$K_a$ |
|--------------------|------------|--------------|
| 10 : 1 | +1 | pH = p$K_a$ + 1 |
| 1 : 1 | 0 | **pH = p$K_a$** |
| 1 : 10 | −1 | pH = p$K_a$ − 1 |""",
            'blockquote': '> 🔑 **Why this matters:** Henderson-Hasselbalch is the single most important equation for buffer calculations — and the ratio shortcut saves enormous time on the AP exam.',
            'objectives': [
                'Deriving Henderson-Hasselbalch from the $K_a$ expression',
                'Using the equation to find pH, p$K_a$, or concentration ratios',
                'Applying the basic buffer version: pOH = p$K_b$ + log([BH⁺]/[B])',
            ]
        },
        4: {
            'context': """### Buffer Capacity and Range

| Factor | Effect on Buffer Capacity |
|--------|--------------------------|
| Higher concentrations of HA and A⁻ | Greater capacity (more moles to neutralize) |
| Equal concentrations of HA and A⁻ | Maximum capacity (pH = p$K_a$) |
| Very unequal ratio (>10:1 or <1:10) | Buffer breaks — outside effective range |

**Effective range: p$K_a$ ± 1**""",
            'blockquote': '> 🔑 **Why this matters:** The AP exam tests whether you know the limits of a buffer — not just how to calculate pH, but when the buffer fails.',
            'objectives': [
                'Defining buffer capacity and the factors that affect it',
                'Understanding why the effective range is p$K_a$ ± 1',
                'Predicting when a buffer has been overwhelmed',
            ]
        },
        5: {
            'context': """### Buffer Preparation Strategy

| Step | Question | How to Answer |
|------|----------|---------------|
| 1 | What weak acid? | Choose one with p$K_a$ ≈ target pH |
| 2 | What ratio? | $[A^-]/[HA] = 10^{(pH - pK_a)}$ |
| 3 | How much of each? | Use desired total molarity and ratio |""",
            'blockquote': '> 🔑 **Why this matters:** Lab-based AP questions ask you to design a buffer at a specific pH — you need to know how to choose the acid and calculate amounts.',
            'objectives': [
                'Selecting a weak acid with p$K_a$ close to the target pH',
                'Calculating the required conjugate base-to-acid ratio',
                'Understanding alternative preparation methods (partial neutralization)',
            ]
        },
        6: {
            'context': """### Problem Types in This Workshop

| Type | What's Tested |
|------|---------------|
| Buffer after multiple additions | Repeated stoichiometry + H-H |
| Buffer vs. non-buffer ID | Composition requirements |
| Buffer capacity limits | When does the buffer break? |
| Design a buffer | Choose acid + calculate amounts |""",
            'blockquote': '> 🔑 **Why this matters:** AP free-response problems often chain 3-4 buffer calculations together — this workshop builds the stamina and accuracy you need.',
            'objectives': [
                'Solving multi-addition buffer problems step by step',
                'Distinguishing buffer solutions from non-buffer mixtures',
                'Calculating buffer capacity and identifying when a buffer is overwhelmed',
            ]
        },
        7: {
            'context': """### Buffer Mastery Checklist

| Concept | Key Formula or Rule |
|---------|-------------------|
| Buffer composition | Weak acid + conjugate base (or weak base + conjugate acid) |
| pH calculation | $pH = pK_a + \\log([A^-]/[HA])$ |
| Adding acid/base | Step 1: Stoichiometry → Step 2: Henderson-Hasselbalch |
| Effective range | p$K_a$ ± 1 |
| Max capacity | When $[HA] = [A^-]$ (pH = p$K_a$) |
| Choosing an acid | p$K_a$ ≈ target pH |""",
            'blockquote': '> 🔑 **Why this matters:** Buffers connect to titrations, equilibrium, and biochemistry — expect cross-topic AP questions that use buffers as the foundation.',
            'objectives': [
                'Tackling AP-style questions that integrate buffers with titrations and equilibrium',
                'Writing clear free-response explanations of buffer mechanisms',
                'Avoiding the most common AP exam mistakes in buffer problems',
            ]
        },
    },
}

def generate_generic_context(title, headings, part_num, total_parts=7):
    """Generate a generic enhanced intro when topic-specific content isn't available."""
    # Clean the title
    clean_title = re.sub(r'^#\s*', '', title).strip()
    # Remove emoji
    clean_title_no_emoji = re.sub(r'[^\w\s\-—:$\\()°,./&]', '', clean_title).strip()
    
    # Get first 3-6 headings for the "what you'll cover" table
    filtered_headings = [h for h in headings[:6] if h and not h.startswith('Part')]
    
    if part_num == 7:
        # Synthesis/review parts
        context = """### Bringing It All Together

This comprehensive review connects every concept from Parts 1–6 with AP-style problems. The questions are designed to mirror what you'll see on the actual exam — multi-step, multi-concept, and requiring clear written explanations."""
        blockquote = '> 🔑 **Why this matters:** AP Chemistry exam questions rarely test one concept in isolation — success requires connecting ideas across topics.'
        objectives = [
            'Solving AP-style questions that integrate multiple concepts from this unit',
            'Writing clear, concise explanations using proper chemistry terminology',
            'Identifying and avoiding common AP exam traps and mistakes',
        ]
    elif part_num == 6:
        # Problem-solving workshop parts
        context = """### Practice Makes Perfect

This workshop features multi-step problems that mirror the AP Chemistry exam format. Each problem requires you to combine concepts from previous parts and show your work clearly."""
        blockquote = '> 🔑 **Why this matters:** The AP Chemistry exam rewards students who can apply concepts to unfamiliar problems — structured practice is the best preparation.'
        objectives = [
            'Working through complete multi-step problems from start to finish',
            'Building problem-solving strategies you can apply on the AP exam',
            'Identifying which concepts to apply and in what order',
        ]
    else:
        # Generate from headings
        if filtered_headings:
            rows = '\n'.join(f'| {h} |' for h in filtered_headings[:5])
            context = f"""### Topics in This Part

| Section |
|---------|
{rows}"""
        else:
            context = ''
        
        blockquote = '> 🔑 **Key Concept:** Mastering this material will strengthen your foundation for both the AP Chemistry exam and more advanced chemistry topics.'
        objectives = [
            f'Understanding the core concepts covered in Part {part_num}',
            'Applying these ideas to solve practice problems',
            'Building toward AP exam readiness for this topic',
        ]
    
    return context, blockquote, objectives


def build_enhanced_intro(title_line, subtitle_line, part_num, total_parts, context, blockquote, objectives):
    """Build the enhanced intro content string."""
    parts = [title_line.strip()]
    
    if subtitle_line:
        parts.append('')
        parts.append(subtitle_line.strip())
    
    parts.append('')
    parts.append('---')
    parts.append('')
    
    if context:
        parts.append(context.strip())
        parts.append('')
    
    if blockquote:
        parts.append(blockquote.strip())
        parts.append('')
    
    parts.append('---')
    parts.append('')
    parts.append(f'### What You\'ll Master in Part {part_num}')
    
    for obj in objectives:
        parts.append(f'- {obj}')
    
    return '\n'.join(parts)


def process_file(filepath, registry_titles, dry_run=False):
    """Process a single file and enhance its intro."""
    with open(filepath) as f:
        text = f.read()
    
    section_id, intro_content = extract_intro_section(text)
    if not intro_content:
        return False, "Could not extract intro"
    
    if is_already_enhanced(intro_content):
        return False, "Already enhanced"
    
    basename = os.path.basename(filepath)
    part_num = get_part_number(basename)
    topic_slug = get_topic_slug_from_file(text)
    headings = extract_section_headings(text)
    
    # Get the existing title and subtitle
    lines = intro_content.strip().split('\n')
    title_line = lines[0] if lines else '# Unknown'
    
    # Check if there's already a "Part X of Y" subtitle
    subtitle_line = None
    rest_start = 1
    for i, line in enumerate(lines[1:], 1):
        stripped = line.strip()
        if stripped.startswith('**Part '):
            subtitle_line = stripped
            rest_start = i + 1
            break
        elif stripped == '':
            continue
        else:
            break
    
    # Ensure title has emoji if it doesn't
    if not re.match(r'^#\s*[^\w#]', title_line):
        # No emoji at start — but don't add one, keep original
        pass
    
    # Build subtitle if missing
    if not subtitle_line:
        # Try to get part title from registry
        part_titles = registry_titles.get(topic_slug, [])
        if part_num <= len(part_titles):
            part_title = part_titles[part_num - 1]
            subtitle_line = f'**Part {part_num} of 7 — {part_title}**'
        else:
            subtitle_line = f'**Part {part_num} of 7**'
    
    # Get topic-specific content or generate generic
    topic_data = TOPIC_INTROS.get(topic_slug, {})
    part_data = topic_data.get(part_num, None)
    
    if part_data:
        context = part_data['context']
        blockquote = part_data['blockquote']
        objectives = part_data['objectives']
    else:
        context, blockquote, objectives = generate_generic_context(
            title_line, headings, part_num
        )
    
    new_intro = build_enhanced_intro(
        title_line, subtitle_line, part_num, 7,
        context, blockquote, objectives
    )
    
    # Replace in file
    old_content_escaped = re.escape(intro_content)
    # But we need the exact original string for replacement
    # Find the exact intro section in the file and replace just the content
    
    # Build the exact pattern we need to find
    old_section = f"content: `{intro_content}`"
    new_section = f"content: `{new_intro}`"
    
    if old_section not in text:
        return False, f"Could not find exact section content for replacement"
    
    new_text = text.replace(old_section, new_section, 1)
    
    if dry_run:
        print(f"\n{'='*60}")
        print(f"FILE: {basename}")
        print(f"{'='*60}")
        print(f"OLD ({len(intro_content)} chars):")
        print(intro_content[:200])
        print(f"\nNEW ({len(new_intro)} chars):")
        print(new_intro[:400])
        return True, "Would update"
    
    with open(filepath, 'w') as f:
        f.write(new_text)
    
    return True, "Updated"


def main():
    dry_run = '--dry-run' in sys.argv
    single = None
    for arg in sys.argv[1:]:
        if arg.startswith('--file='):
            single = arg.split('=', 1)[1]
    
    registry_titles = get_registry_part_titles()
    
    files = sorted(glob.glob(os.path.join(LESSONS_DIR, 'chemistry-*-part*.ts')))
    files = [f for f in files if '-v2-' not in f and '-v3-' not in f]
    
    if single:
        files = [f for f in files if single in f]
    
    updated = 0
    skipped = 0
    errors = 0
    
    for f in files:
        try:
            success, msg = process_file(f, registry_titles, dry_run)
            basename = os.path.basename(f)
            if success:
                updated += 1
                print(f"✅ {basename}: {msg}")
            else:
                skipped += 1
                if 'Already enhanced' not in msg:
                    print(f"⏭️  {basename}: {msg}")
        except Exception as e:
            errors += 1
            print(f"❌ {os.path.basename(f)}: {e}")
    
    print(f"\n{'='*40}")
    print(f"Total: {len(files)} files")
    print(f"Updated: {updated}")
    print(f"Skipped: {skipped}")
    print(f"Errors: {errors}")


if __name__ == '__main__':
    main()
