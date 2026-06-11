import '../src/lib/load-env' // load .env.local first so local runs never hit the prod DB
/**
 * Adds rigorous, AP-equivalent example problems for the new Organic Chemistry 2
 * advanced topics introduced by `seed-organic-chemistry-split.ts`, plus a few
 * foundational anchors that didn't previously have any worked problems.
 *
 * Idempotent — checks for existing problems on each topic before inserting.
 *
 * Run with:
 *   npx tsx prisma/add-ochem-problems-batch1.ts
 */

import { PrismaClient, Difficulty } from '@prisma/client'

const prisma = new PrismaClient()

interface ProblemSeed {
  difficulty: Difficulty
  question: string
  solution: string
}

async function addProblems(slug: string, problems: ProblemSeed[]) {
  const topic = await prisma.topic.findUnique({ where: { slug } })
  if (!topic) {
    console.log(`⚠ Topic ${slug} not found — skipping`)
    return
  }
  const existing = await prisma.exampleProblem.count({ where: { topicId: topic.id } })
  if (existing >= problems.length) {
    console.log(`✓ ${slug} already has ${existing} problem(s) — skipping`)
    return
  }
  await prisma.exampleProblem.createMany({
    data: problems.map((p, i) => ({
      topicId: topic.id,
      order: i + 1,
      difficulty: p.difficulty,
      question: p.question,
      solution: p.solution,
      isPremium: false,
    })),
  })
  console.log(`✓ Added ${problems.length} problems to: ${topic.title}`)
}

async function main() {
  console.log('Adding AP-equivalent example problems to Organic Chemistry topics...\n')

  // ─── Pericyclic / Diels-Alder ───
  await addProblems('pericyclic-diels-alder', [
    {
      difficulty: 'MEDIUM',
      question:
        '(a) Predict the product of the Diels-Alder reaction between (E,E)-2,4-hexadiene and maleic anhydride. ' +
        '(b) Explain why the product is a single diastereomer (specify cis or trans methyl groups). ' +
        '(c) Why does (Z,E)-2,4-hexadiene react more slowly?',
      solution:
        '**(a) Product** — A cyclohexene fused to the anhydride. Both methyl groups end up cis on the ring, and both anhydride C=O groups are cis to each other (and endo with respect to the new ring).\n\n' +
        '**(b) Stereospecificity** — The Diels-Alder is concerted and suprafacial/suprafacial. Substituents that are cis on the diene stay cis in the product; substituents that are cis on the dienophile stay cis. ' +
        '(E,E) diene → both methyl substituents project on the same face → cis methyls.\n\n' +
        '**(c) Kinetic effect of (Z,E)** — A diene must reach the s-cis conformation to cyclize. (Z,E)-2,4-hexadiene has a methyl group blocking the s-cis rotation (severe A^1,3 strain), so the reactive conformation is destabilized and the rate drops.',
    },
    {
      difficulty: 'HARD',
      question:
        'For the [4+2] cycloaddition of cyclopentadiene with methyl acrylate (CH₂=CH–CO₂CH₃), draw the major endo product and explain the endo selectivity using FMO theory.',
      solution:
        '**Major product** — Bicyclo[2.2.1]hept-2-ene (norbornene) with the –CO₂CH₃ group on the *endo* face (pointing toward the residual π bond, i.e., the same side as the bridging methylene).\n\n' +
        '**FMO rationale** — The dienophile\'s LUMO (lowered by the conjugated ester) interacts with the diene\'s HOMO. In the endo transition state, secondary (non-bonding) orbital overlap between the carbonyl π* and the diene\'s p-orbitals at C2/C3 stabilizes the TS by ~2–3 kcal/mol relative to the exo TS, so endo dominates kinetically. (Exo is often more thermodynamically stable but is not formed under typical conditions because Diels-Alder reactions at moderate temperature are kinetically controlled.)',
    },
    {
      difficulty: 'HARD',
      question:
        'Classify each pericyclic process and predict whether it proceeds **thermally** or **photochemically**: (a) ring-closure of (2E,4Z,6E)-octa-2,4,6-triene to cis-5,6-dimethyl-1,3-cyclohexadiene; (b) the Cope rearrangement of 1,5-hexadiene; (c) the [2+2] dimerization of two ethylene molecules.',
      solution:
        '**(a) 6π electrocyclization** — 6π electrocyclic; thermal → disrotatory; photochemical → conrotatory. Producing the *cis* 5,6-dimethyl product from the (E,Z,E) triene requires the **disrotatory** mode → **thermal**.\n\n' +
        '**(b) [3,3]-Sigmatropic** — The Cope rearrangement is allowed thermally through a chair-like 6-membered TS (6 electrons; suprafacial/suprafacial; aromatic Hückel TS). **Thermal**.\n\n' +
        '**(c) [2+2] cycloaddition** — 4 electrons. Thermally forbidden (would require antarafacial overlap). It is allowed **photochemically**, where excitation moves an electron into the π* and the s/s mode becomes Möbius-allowed.',
    },
  ])

  // ─── Nucleophilic Aromatic Substitution ───
  await addProblems('nucleophilic-aromatic-substitution', [
    {
      difficulty: 'MEDIUM',
      question:
        '(a) Rank these aryl chlorides toward NaOMe / MeOH: chlorobenzene, 4-chloronitrobenzene, 2,4-dinitrochlorobenzene, 2,4,6-trinitrochlorobenzene. ' +
        '(b) Explain why fluoride is a *better* leaving group than iodide in this reaction series.',
      solution:
        '**(a) Reactivity order (fastest → slowest):**\n' +
        '2,4,6-trinitrochlorobenzene > 2,4-dinitrochlorobenzene > 4-chloronitrobenzene ≫ chlorobenzene\n\n' +
        'Each ortho/para nitro group accepts the negative charge of the Meisenheimer intermediate by resonance, lowering the activation barrier for nucleophilic addition.\n\n' +
        '**(b) F vs I leaving group** — In SNAr the **rate-determining step is nucleophilic addition**, not C–LG cleavage. ' +
        'Fluorine is the most electronegative leaving group, so it activates the ipso carbon most strongly toward attack. Loss of fluoride happens only in the (fast) second step. ' +
        'Therefore F > Cl > Br > I in SNAr, the **opposite** of SN2.',
    },
    {
      difficulty: 'HARD',
      question:
        'Treatment of 4-bromotoluene with NaNH₂ in liquid NH₃ at –33 °C gives a roughly 50:50 mixture of *meta*- and *para*-toluidine (3- and 4-aminotoluene). Explain mechanistically.',
      solution:
        '**Benzyne (E2-type elimination–addition) mechanism.**\n\n' +
        '1. NaNH₂ deprotonates ortho to the Br; loss of Br⁻ gives a benzyne (3,4-didehydrotoluene).\n' +
        '2. Benzyne is symmetric *across the original C–Br carbon*, so NH₂⁻ can add to *either* sp carbon of the triple-bond-like intermediate.\n' +
        '3. Addition at C4 → 4-aminotoluene (para); addition at C3 → 3-aminotoluene (meta).\n\n' +
        'Because the methyl group is mildly electron-donating, the two addition sites are nearly isoenergetic and the product ratio is close to 1:1.',
    },
  ])

  // ─── Phenols & Quinones ───
  await addProblems('phenols-quinones', [
    {
      difficulty: 'MEDIUM',
      question:
        'Rank the following compounds in order of increasing pKa: phenol, p-methylphenol (p-cresol), p-nitrophenol, p-methoxyphenol, picric acid (2,4,6-trinitrophenol). Justify each ordering with a one-sentence resonance/inductive argument.',
      solution:
        '**Increasing pKa (most acidic → least acidic):**\n' +
        'picric acid (~0.4) < p-nitrophenol (~7.2) < phenol (~10.0) < p-methylphenol (~10.3) < p-methoxyphenol (~10.2/10.3, ≈ p-cresol)\n\n' +
        '- **Picric acid** has 3 NO₂ groups whose resonance + inductive withdrawal stabilize the phenoxide tremendously.\n' +
        '- **p-Nitrophenol** — one para NO₂ accepts the negative charge by resonance (quinoid resonance form with O⁻ → N→O⁻).\n' +
        '- **Phenol** — baseline; phenoxide stabilized by aromatic delocalization.\n' +
        '- **p-Methylphenol** — the hyperconjugating CH₃ is weakly electron-donating, *destabilizes* the phenoxide.\n' +
        '- **p-Methoxyphenol** — OMe donates by resonance (lone pair into the ring), destabilizing phenoxide; nearly the same pKa as p-cresol because the inductive withdrawal of OMe partially offsets resonance donation.',
    },
    {
      difficulty: 'HARD',
      question:
        'Propose a synthesis of acetylsalicylic acid (aspirin) starting from phenol. Show the Kolbe-Schmitt step and the final acylation, and explain why bicarbonate (HCO₃⁻) is **not** used in place of CO₂ in step 1.',
      solution:
        '**Step 1 — Kolbe-Schmitt carboxylation:**\n' +
        '- Treat phenol with NaOH → sodium phenoxide.\n' +
        '- Heat the dry phenoxide salt with CO₂ at ~125 °C and 100 atm.\n' +
        '- The phenoxide oxygen coordinates a Na⁺ that delivers CO₂ to the ortho position; protonation gives **salicylic acid** (2-hydroxybenzoic acid).\n\n' +
        '**Step 2 — Acetylation of the phenolic OH:**\n' +
        '- Acetic anhydride + catalytic H₂SO₄ converts the phenolic OH (more nucleophilic than the carboxylic acid OH) to the acetate ester → **acetylsalicylic acid**.\n\n' +
        '**Why CO₂ rather than HCO₃⁻?** Bicarbonate is a weak electrophile and a poor source of CO₂ for delivery to a phenoxide ring. The Kolbe-Schmitt requires the *neutral, electrophilic* CO₂ molecule, coordinated by the sodium counterion at high pressure to enforce ortho selectivity. Bicarbonate would either (a) protonate the phenoxide back to phenol or (b) fail to electrophilically attack the ring.',
    },
  ])

  // ─── Aldol & Claisen Condensations ───
  await addProblems('aldol-claisen-condensations', [
    {
      difficulty: 'MEDIUM',
      question:
        'Predict the product of the **crossed aldol condensation** (heat, NaOH) of acetone with benzaldehyde (1 equiv each). Justify selectivity and predict the final product after dehydration.',
      solution:
        '**Selectivity** — Benzaldehyde has no α-H, so it cannot form an enolate. Acetone\'s enolate attacks the benzaldehyde carbonyl. With heat and NaOH, the β-hydroxyketone undergoes E1cb dehydration.\n\n' +
        '**Aldol product** — 4-hydroxy-4-phenylbutan-2-one.\n' +
        '**Final product (after dehydration)** — **(E)-4-phenylbut-3-en-2-one** (benzalacetone, an α,β-unsaturated enone). The trans (E) geometry dominates because of conjugation with the phenyl group and minimization of steric clash.',
    },
    {
      difficulty: 'HARD',
      question:
        '(a) Write the **Claisen condensation** product of two ethyl propanoate (CH₃CH₂CO₂Et) molecules using NaOEt / EtOH. ' +
        '(b) Why must the base be NaOEt (not NaOMe)? ' +
        '(c) Why does ethyl 2-methylpropanoate (ethyl isobutyrate) fail under the same conditions?',
      solution:
        '**(a) Product** — Ethyl 2-methyl-3-oxopentanoate (a β-ketoester with the structure CH₃CH₂–CO–C(CH₃)H–CO₂Et). Mechanism: NaOEt removes an α-H to form the enolate; enolate attacks the carbonyl of the second ester; loss of ethoxide gives the β-ketoester; the *acidic α-H of the β-ketoester* (pKa ≈ 11) is then deprotonated by NaOEt, providing the thermodynamic driving force for the otherwise unfavorable equilibrium.\n\n' +
        '**(b) Matched base** — NaOMe would transesterify the ester (CH₃CH₂CO₂Et → CH₃CH₂CO₂Me + EtOH), giving a messy mixture. Matching the alkoxide to the ester ester group prevents transesterification.\n\n' +
        '**(c) Failure of ethyl isobutyrate** — After the second deprotonation step (which drives the equilibrium), the β-ketoester would have to give up its α-H. Ethyl isobutyrate has only **one α-H**, and the β-ketoester product would have **zero α-Hs** (the α-carbon is quaternary). Without that final deprotonation, the equilibrium does not shift forward and only starting material is recovered.',
    },
  ])

  // ─── Michael & Robinson ───
  await addProblems('michael-robinson', [
    {
      difficulty: 'MEDIUM',
      question:
        'Predict the major product when (a) PhMgBr adds to 2-cyclohexenone, vs (b) Ph₂CuLi (Gilman reagent) adds to 2-cyclohexenone. Use HSAB to explain.',
      solution:
        '**(a) PhMgBr → 1,2-addition** — Grignards are *hard* nucleophiles (highly polarized, charge-localized, RDS is irreversible). They attack the harder electrophilic site, the carbonyl carbon, giving **3-phenylcyclohex-2-en-1-ol** after aqueous workup.\n\n' +
        '**(b) Ph₂CuLi → 1,4-addition (Michael)** — Organocuprates are *soft, polarizable* nucleophiles. They prefer the softer site, the β-carbon (C3), giving the enolate, then **3-phenylcyclohexan-1-one** after protonation. This selectivity is the textbook way to install an α,β-unsaturation product as a saturated β-substituted ketone.',
    },
    {
      difficulty: 'HARD',
      question:
        'Show the complete **Robinson annulation** of 2-methyl-1,3-cyclohexanedione with methyl vinyl ketone (MVK) using KOH/EtOH. Provide the Michael adduct, the intramolecular aldol intermediate, and the final cyclohexenone-containing bicyclic product (the Wieland–Miescher ketone).',
      solution:
        '**Step 1 — Michael addition.** KOH deprotonates the doubly-activated α-carbon of 2-methyl-1,3-cyclohexanedione (pKa ≈ 5–6). The stabilized enolate attacks MVK in a 1,4 fashion, giving a 1,5-diketone with a new –CH₂CH₂COCH₃ side chain on the quaternary α-carbon.\n\n' +
        '**Step 2 — Intramolecular aldol.** A second equivalent of base forms the enolate at the methyl ketone\'s α-position. That enolate cyclizes onto one of the ring carbonyls (5-exo-trig), giving a β-hydroxy enone tethered onto the original 6-membered ring.\n\n' +
        '**Step 3 — E1cb dehydration.** Heat eliminates the β-hydroxide to install an α,β-unsaturation in the newly formed ring.\n\n' +
        '**Product — (S)-(+)-Wieland–Miescher ketone**, a *cis*-fused bicyclic 6-6 enedione with a quaternary methyl-bearing carbon at the ring junction. This compound is a foundational building block in steroid total synthesis (Hajos–Parrish/Wieland–Miescher ketones provide the AB rings).',
    },
  ])

  // ─── Multi-Step Synthesis & Retrosynthesis ───
  await addProblems('multistep-synthesis-retrosynthesis', [
    {
      difficulty: 'HARD',
      question:
        'Provide a retrosynthetic analysis and a forward synthesis of **2-phenylbutan-2-ol** starting from benzene and any 2-carbon and 3-carbon building blocks.',
      solution:
        '**Retrosynthesis:**\n' +
        '- Target: PhC(OH)(CH₃)(CH₂CH₃).\n' +
        '- Tertiary alcohol with two C–C disconnections at the central carbon ⇒ ketone + organometallic. Best disconnection: C(α)–C(Ph) bond, treating PhMgBr as the synthetic equivalent of Ph⁻ that attacks **butan-2-one**.\n' +
        '- Butan-2-one ⇐ from 2-butanol oxidation; 2-butanol ⇐ hydration of 1-butene or from acetaldehyde + ethyl Grignard.\n' +
        '- PhMgBr ⇐ PhBr + Mg/Et₂O; PhBr ⇐ benzene + Br₂/FeBr₃.\n\n' +
        '**Forward synthesis:**\n' +
        '1. Benzene + Br₂ / FeBr₃ → bromobenzene.\n' +
        '2. Bromobenzene + Mg, Et₂O → PhMgBr.\n' +
        '3. PhMgBr + butan-2-one (commercially available) in Et₂O, then H₃O⁺ workup → **2-phenylbutan-2-ol**.\n\n' +
        '**Why this disconnection?** It is convergent: it joins two pre-built fragments at the most strategic bond (the one whose disconnection produces simple, commercially available pieces), and it uses a single reliable C–C bond-forming reaction.',
    },
    {
      difficulty: 'HARD',
      question:
        'Synthesize **4-bromo-3-nitrobenzoic acid** from toluene. State the reagents and the **order** of steps clearly, and explain why the order matters.',
      solution:
        '**Synthesis (order is critical):**\n' +
        '1. **Bromination first**: toluene + Br₂ / FeBr₃ → 4-bromotoluene (the methyl is an ortho/para director; para predominates by sterics).\n' +
        '2. **Nitration**: 4-bromotoluene + HNO₃ / H₂SO₄ → 4-bromo-3-nitrotoluene. Both the methyl (o/p) and bromine (o/p, weakly deactivating) direct *ortho* to the methyl and *meta* to no useful effect — the position ortho to CH₃ and meta to Br is favored.\n' +
        '3. **Oxidation last**: KMnO₄, hot, then H₃O⁺ → 4-bromo-3-nitrobenzoic acid. The methyl is oxidized to –COOH.\n\n' +
        '**Why this order?**\n' +
        '- If you oxidize first, –COOH becomes a strong meta-director and a deactivator → bromination/nitration would be slower and the regiochemistry would change.\n' +
        '- If you nitrate before brominating, –NO₂ on the ring deactivates EAS strongly and forces bromine *meta* to itself (wrong regiochemistry).\n' +
        '- Doing EAS while CH₃ is still on the ring keeps the ring activated and ortho/para directed; the final oxidation cleanly converts CH₃ → COOH without disturbing the substitution pattern.',
    },
  ])

  // ─── Advanced & 2D NMR ───
  await addProblems('advanced-2d-nmr', [
    {
      difficulty: 'MEDIUM',
      question:
        'A natural product has molecular formula C₉H₁₀O₂ and shows IR ν 1715 cm⁻¹, ¹H NMR signals at δ 7.30 (m, 5H), 4.15 (q, J = 7 Hz, 2H), 3.65 (s, 2H), 1.25 (t, J = 7 Hz, 3H), and a single COSY cross-peak between δ 4.15 and δ 1.25. Deduce the structure.',
      solution:
        '**Degrees of unsaturation** = (2·9 + 2 − 10)/2 = **5** → consistent with a benzene ring (4) + one additional π or ring (likely C=O, supported by IR 1715 cm⁻¹ for an ester carbonyl).\n\n' +
        '**Fragment analysis:**\n' +
        '- δ 7.30, multiplet, 5H → **monosubstituted benzene (C₆H₅)**.\n' +
        '- δ 1.25 t (3H) + δ 4.15 q (2H) with COSY cross-peak → **OCH₂CH₃** (an –OEt group, q at 4.15 indicates O-bound CH₂).\n' +
        '- δ 3.65 s, 2H, no COSY partners → an isolated **CH₂** attached to two non-protonated groups; chemical shift 3.65 is consistent with a CH₂ between a phenyl and an ester (–CH₂–CO₂–).\n\n' +
        '**Structure: ethyl phenylacetate (PhCH₂CO₂Et)** — fits the formula, IR, and all NMR / COSY data.',
    },
    {
      difficulty: 'HARD',
      question:
        'Outline a 2D-NMR strategy (which experiments and what you look for) to fully assign the structure of a **C₁₀ natural product** containing two quaternary aromatic carbons, one carbonyl, two methyl groups, and one CH–CH₃ stereocenter. Assume only ¹H, ¹³C, DEPT, COSY, HSQC, HMBC, and NOESY are available.',
      solution:
        '**Strategy:**\n' +
        '1. **¹³C + DEPT-135** — Count all carbons; classify each as CH₃, CH₂, CH, or quaternary. Confirms 2 quaternary aromatic C, 1 C=O, 2 CH₃, 1 CH, plus the rest.\n' +
        '2. **HSQC (¹H–¹³C, one-bond)** — Pair each ¹H signal to the carbon it is bonded to. Resolves any overlapping ¹H signals via the ¹³C dimension. Now you know which methyl is attached to which carbon, and which CH/CH₂ owns each proton.\n' +
        '3. **COSY (¹H–¹H)** — Walk through ³J-coupled spin systems. The CH–CH₃ stereocenter will show a clear cross-peak between the methine and its methyl. Identify additional CH₂–CH₂ chains.\n' +
        '4. **HMBC (²,³J ¹H–¹³C)** — The most important step for connecting fragments through the *quaternary* aromatic carbons and the carbonyl. ' +
        'Look for cross-peaks from aromatic Hs to the two quaternary aromatic Cs (placing substituents around the ring) and from the methine H / methyl Hs to the carbonyl C (showing how the aliphatic fragment hangs off the C=O).\n' +
        '5. **NOESY** — After the connectivity is set, NOESY cross-peaks (~5 Å) establish the *relative* stereochemistry at the CH–CH₃ stereocenter (e.g., is the methyl cis or trans to a nearby aromatic H?).\n\n' +
        'Together these experiments give a complete structure including stereochemistry without needing X-ray diffraction.',
    },
  ])

  // ─── Foundational anchors that previously had no problems ───
  await addProblems('nucleophilic-substitution', [
    {
      difficulty: 'MEDIUM',
      question:
        'Predict whether each substrate reacts predominantly by SN1 or SN2 with the indicated nucleophile, and predict the stereochemistry of the product. ' +
        '(a) (R)-2-bromobutane + NaI / acetone. ' +
        '(b) (R)-3-bromo-3-methylhexane + H₂O / acetone (heat). ' +
        '(c) Neopentyl bromide ((CH₃)₃CCH₂Br) + NaOMe / MeOH.',
      solution:
        '**(a) SN2** — Secondary substrate, strong nucleophile (I⁻ is excellent), polar aprotic solvent (acetone). Backside attack inverts the stereocenter → **(S)-2-iodobutane**.\n\n' +
        '**(b) SN1** — Tertiary substrate (no SN2 possible), weak nucleophile (H₂O), polar protic solvent. The 3° carbocation is planar; water attacks both faces → **racemic 3-methylhexan-3-ol** (≈ 50:50 R:S).\n\n' +
        '**(c) Neither — extreme steric inhibition.** Neopentyl bromide is technically primary but has a quaternary β-carbon, which blocks SN2 backside attack catastrophically. SN1 is also disfavored because the resulting primary carbocation is very unstable (and rearrangement to a tertiary cation would change the carbon skeleton). The reaction is **very slow**; in practice only trace product forms.',
    },
  ])

  await addProblems('elimination-reactions', [
    {
      difficulty: 'MEDIUM',
      question:
        'Predict the major alkene product when (a) 2-bromo-2,3-dimethylbutane is treated with NaOEt / EtOH, and (b) the same substrate is treated with potassium *tert*-butoxide / *t*-BuOH. Explain the difference using Zaitsev vs Hofmann selectivity.',
      solution:
        '**(a) NaOEt (small base) — Zaitsev product.** E2 elimination preferentially removes the β-H that gives the **more substituted** (more stable) alkene: **2,3-dimethylbut-2-ene** (tetrasubstituted).\n\n' +
        '**(b) KOtBu (bulky base) — Hofmann product.** The bulky base cannot easily access the more crowded internal β-Hs, so it removes a less hindered terminal-methyl β-H → **2,3-dimethylbut-1-ene** (the *less* substituted alkene). This is the textbook bulky-base = Hofmann pattern.',
    },
  ])

  console.log('\n🎉 Done seeding Organic Chemistry example problems.')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
