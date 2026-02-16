import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function upsertTopicContent(slug: string, title: string, textContent: string) {
  const topic = await prisma.topic.findUnique({ where: { slug } });
  if (!topic) {
    console.log(`❌ Topic not found: ${slug}`);
    return;
  }
  await prisma.topic.update({ where: { id: topic.id }, data: { title, textContent } });
  console.log(`✅ Updated: ${slug} — '${title}' (${textContent.length} chars)`);
}

async function main() {
  console.log('Updating AP Chemistry topics needing content...');

  // 1) Atomic Spectra
  await upsertTopicContent(
    'atomic-spectra',
    'Atomic Spectra: Emission, Absorption, and Electronic Transitions',
    `# Atomic Spectra: Emission, Absorption, and Electronic Transitions

Atomic spectra arise from quantized energy transitions of electrons in atoms. When an atom absorbs energy (electrical discharge, flame, or photon), an electron can be promoted from a lower to a higher energy level. As the electron relaxes back down, the atom emits photons at discrete energies, producing line spectra that act as "fingerprints" for each element.

This topic connects quantum theory, electronic structure, and practical spectroscopy used in lab analysis and astrophysics. You should be able to describe how lines form, interpret simple spectra, and apply energy–wavelength–frequency relationships.

## Key ideas

- Electrons occupy discrete energy levels. Transitions between levels involve exact energy quanta.
- Emission spectra: bright lines on a dark background (photons emitted as electrons relax).
- Absorption spectra: dark lines on a continuous spectrum (photons absorbed to promote electrons).
- Energy–light relationships: E = hν and c = λν, so E = hc/λ. Higher energy → higher frequency → shorter wavelength.
- Each element has unique transitions → unique line positions; useful for identification.

## Emission vs. absorption spectra

- Emission: A hot, low-density gas emits light at specific wavelengths, giving bright lines. Example: Hydrogen discharge tube shows Balmer lines in the visible region.
- Absorption: A continuous light source passing through a cool gas yields missing wavelengths (dark lines) where atoms absorbed light to excite electrons. The pattern of missing lines matches the element’s allowed transitions.

Both reflect the same quantized energy differences. If an absorption line occurs at 656 nm (Hα), the same transition can emit at 656 nm when the electron relaxes.

## Hydrogen spectrum and energy levels

The hydrogen atom is the classic case where energy levels can be modeled simply. The allowed energies (n = 1, 2, 3, …) get closer together at higher n. Series of lines correspond to electrons ending in a specific level:

- Lyman series: transitions to n = 1 (ultraviolet)
- Balmer series: transitions to n = 2 (visible and near UV)
- Paschen, Brackett, Pfund: transitions to n = 3, 4, 5 (infrared)

The Balmer lines (Hα ≈ 656 nm, Hβ ≈ 486 nm, Hγ ≈ 434 nm, Hδ ≈ 410 nm) are often seen in laboratory spectra and stellar spectra. As n increases, levels converge and the spectral lines crowd together.

## Interpreting spectra qualitatively

- Line positions: Indicate the energy gaps between quantized states; shorter wavelengths mean larger energy changes.
- Line intensity: Related to transition probability and population of the upper level; more populated and more allowed transitions are brighter.
- Line broadening: Collisions, Doppler motion, and instrument resolution broaden otherwise sharp lines.

## Practical uses

- Element identification: Flame tests (Na⁺ yields yellow; K⁺ lilac; Cu²⁺ green/blue) and emission spectroscopy use characteristic lines.
- Quantitative analysis: Atomic absorption spectroscopy (AAS) and inductively coupled plasma optical emission spectroscopy (ICP-OES) measure concentrations from line intensities.
- Astrophysics: Absorption lines in stellar spectra reveal composition, temperature, and motion (via Doppler shifts).

## Problem walkthroughs

1) Which has higher energy: a 400 nm photon or a 700 nm photon?
- Use E = hc/λ. Smaller λ → larger E. So 400 nm photons carry more energy than 700 nm photons.

2) Why do different elements have different line patterns?
- Nuclear charge and electron–electron interactions create unique sets of energy levels; allowed transitions differ by element, so spectra are element-specific.

3) In a discharge tube, bright lines at specific wavelengths appear. What process produces these lines?
- Excited electrons relax to lower levels, emitting photons with energies equal to the level differences.

## Common mistakes

- Thinking atoms emit a continuous spectrum. Continuous spectra come from hot solids or dense gases; isolated atoms produce lines.
- Mixing up emission and absorption diagrams; remember emission adds bright lines, absorption removes lines from a continuum.
- Ignoring selection rules and relative intensities; not every transition is equally likely.

## Quick reference

- Emission: excited → lower level + photon (bright lines)
- Absorption: lower level + photon → excited (dark lines)
- E = hc/λ; higher E → shorter λ
- Hydrogen: Balmer series visible; Lyman UV; others IR
- Spectra identify elements and quantify amounts in samples`
  );

  // 2) Solubility Equilibrium
  await upsertTopicContent(
    'solubility-equilibrium',
    'Solubility Equilibrium: Saturated Solutions, Common Ion, and Precipitation',
    `# Solubility Equilibrium: Saturated Solutions, Common Ion, and Precipitation

Solubility equilibrium describes the dynamic balance between a slightly soluble ionic solid and its ions in solution. At equilibrium, the dissolution rate equals the precipitation rate, and the solution is saturated. We quantify this balance with the solubility product constant, Ksp, which depends on temperature and the stoichiometry of the dissolution reaction.

You should be able to write Ksp expressions, calculate molar solubility from Ksp (and vice versa), apply the common ion effect, and decide whether a precipitate forms when two solutions are mixed.

## Key definitions

- Saturated solution: Contains the maximum amount of dissolved solute at given conditions; excess solid present.
- Unsaturated: Less than the equilibrium amount dissolved; no excess solid; more can dissolve.
- Supersaturated: More than equilibrium amount temporarily dissolved; unstable; precipitates with disturbance.
- Solubility (s): Equilibrium amount that dissolves (often in mol·L⁻¹). Related to Ksp via stoichiometry.

## Writing Ksp expressions

For a generic salt A_pB_q(s) ⇌ p A^m+(aq) + q B^n−(aq):
- Ksp = [A^m+]^p [B^n−]^q
- Pure solids are omitted. Only aqueous ion activities (approximated by concentrations in dilute solutions) appear.

Examples:
- AgCl(s) ⇌ Ag+(aq) + Cl−(aq) → Ksp = [Ag+][Cl−]
- CaF2(s) ⇌ Ca2+(aq) + 2 F−(aq) → Ksp = [Ca2+][F−]^2
- PbI2(s) ⇌ Pb2+(aq) + 2 I−(aq) → Ksp = [Pb2+][I−]^2

## From Ksp to molar solubility (s)

1) 1:1 salts, MX with Ksp = [M+][X−] = s·s = s^2 → s = √Ksp
2) 1:2 salts, MX2 with Ksp = [M2+][X−]^2 = s·(2s)^2 = 4s^3 → s = (Ksp/4)^(1/3)
3) 2:3 salts, M2X3 with Ksp = [M3+]^2[X2−]^3 = (2s)^2(3s)^3 = 108 s^5 → s = (Ksp/108)^(1/5)

Always set up an ICE table when in doubt, matching coefficients to ionic concentrations.

## Common ion effect

Adding a source of a common ion reduces solubility by shifting equilibrium left (Le Châtelier). For CaF2(s) in a solution containing F−, the term [F−]^2 in Ksp is already large, so less CaF2 dissolves and s decreases.

Quick example: CaF2(s) in 0.10 M NaF. Write Ksp = [Ca2+][F−]^2. Let s' be the solubility of CaF2 in the presence of 0.10 M F−. Then [F−] ≈ 0.10 (if s' is small), so [Ca2+] = Ksp / [F−]^2. This is much smaller than the pure-water solubility.

## Precipitation criteria and Q vs Ksp

When two salt solutions are mixed, compute the reaction quotient Qsp using the resulting ion concentrations after mixing. Compare to Ksp:
- Qsp < Ksp → Unsaturated; no precipitate forms.
- Qsp = Ksp → At equilibrium; just saturated.
- Qsp > Ksp → Supersaturated; precipitate forms until equilibrium is restored.

Key steps:
- Determine moles of each ion contributed.
- Account for dilution to the final total volume.
- Compute Qsp with the correct exponents.
- Compare Qsp to Ksp and conclude.

## Selective precipitation

If multiple cations are present, choose an anion that forms a very insoluble salt with one cation (lowest Ksp) so it precipitates first. By adjusting [X−], ions precipitate in order of their Ksp values, enabling separation.

## Problem walkthroughs

1) Will a precipitate form when 25.0 mL of 0.020 M AgNO3 is mixed with 25.0 mL of 0.020 M NaCl? (Ksp AgCl = 1.8×10^−10)
- Moles Ag+ = 0.0250 L × 0.020 M = 5.00×10^−4 mol; moles Cl− same.
- Total volume = 0.0500 L; [Ag+] = [Cl−] = (5.00×10^−4 mol)/(0.0500 L) = 0.0100 M.
- Qsp = [Ag+][Cl−] = (0.0100)(0.0100) = 1.0×10^−4 ≫ 1.8×10^−10 → Qsp > Ksp → AgCl precipitates.

2) Molar solubility of PbI2 (Ksp = 7.1×10^−9) in pure water:
- PbI2(s) ⇌ Pb2+ + 2 I−; Ksp = [Pb2+][I−]^2 = s(2s)^2 = 4s^3
- s = (Ksp/4)^(1/3) ≈ (7.1×10^−9 / 4)^(1/3) ≈ 1.2×10^−3 M (approximate)

3) Qualitative: How does adding KI affect PbI2 solubility?
- Adds common ion I−, increases [I−] term in Ksp expression, shifts equilibrium left, reduces s markedly.

## Common pitfalls

- Forgetting to recompute concentrations after mixing (dilution!).
- Omitting exponents from Ksp expressions.
- Comparing Qsp and Ksp incorrectly or using initial (not mixed) concentrations.
- Assuming all salts have the same relationship between Ksp and s; always use stoichiometry.

## Quick reference

- Ksp uses ions only; solids don’t appear
- Convert Ksp ↔ molar solubility with stoichiometry
- Common ion lowers solubility
- Compare Qsp to Ksp to decide precipitation
- Use selective precipitation to separate ions`
  );

  console.log('\n✅ AP Chemistry missing topics filled.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exitCode = 1;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
