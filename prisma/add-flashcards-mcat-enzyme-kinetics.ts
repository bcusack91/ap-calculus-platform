import '../src/lib/load-env' // load .env.local first so local runs never hit the prod DB
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Adding MCAT enzyme kinetics flashcards...\n');

  const slug = 'mcat-biochemistry-enzymes-kinetics-mcat';
  const topic = await prisma.topic.findFirst({ where: { slug } });
  if (!topic) { console.log(`⚠ Topic not found: ${slug}`); return; }
  await prisma.flashcard.deleteMany({ where: { topicId: topic.id } });

  await prisma.flashcard.createMany({
    data: [
      { topicId: topic.id, front: 'State the Michaelis-Menten equation and define its terms.', back: '$v_0 = \\frac{V_{max}[S]}{K_m+[S]}$\n\n- $v_0$ = initial reaction velocity\n- $V_{max}$ = maximum velocity (all enzyme saturated)\n- $K_m$ = substrate concentration at $\\frac{1}{2}V_{max}$\n- $[S]$ = substrate concentration', hint: 'The hyperbolic velocity-vs-substrate curve. Km is at half Vmax.' },
      { topicId: topic.id, front: 'What does $K_m$ represent and what does a low $K_m$ mean?', back: '$K_m$ = the substrate concentration at which $v_0 = \\frac{1}{2}V_{max}$.\n\nA **low $K_m$ = high affinity** (enzyme reaches half-max at low [S]). $K_m$ is an intrinsic property of the enzyme-substrate pair (independent of enzyme concentration).', hint: 'Low Km = high affinity (less substrate needed).' },
      { topicId: topic.id, front: 'What is $k_{cat}$ (turnover number) and the catalytic efficiency?', back: '$k_{cat}$ = **turnover number**: molecules of substrate converted per enzyme per second when saturated ($V_{max} = k_{cat}[\\text{E}]_T$).\n\n**Catalytic efficiency** = $\\frac{k_{cat}}{K_m}$ (diffusion limit ~$10^8$–$10^9$).', hint: 'kcat = turnover number; kcat/Km = catalytic efficiency.' },
      { topicId: topic.id, front: 'How does the Lineweaver-Burk plot linearize Michaelis-Menten kinetics?', back: 'Take the double reciprocal:\n$\\frac{1}{v_0} = \\frac{K_m}{V_{max}}\\cdot\\frac{1}{[S]} + \\frac{1}{V_{max}}$\n\n- **y-intercept** = $\\frac{1}{V_{max}}$\n- **x-intercept** = $-\\frac{1}{K_m}$\n- **slope** = $\\frac{K_m}{V_{max}}$', hint: 'Double-reciprocal line. y-int = 1/Vmax, x-int = −1/Km.' },
      { topicId: topic.id, front: 'How does a COMPETITIVE inhibitor affect $K_m$ and $V_{max}$?', back: 'Binds the **active site**, competing with substrate.\n\n- $K_m$ **increases** (apparent)\n- $V_{max}$ **unchanged** (overcome by adding more substrate)\n\nLineweaver-Burk: lines intersect on the **y-axis** (same 1/Vmax).', hint: 'Competitive: Km up, Vmax same. Outcompete with more substrate.' },
      { topicId: topic.id, front: 'How does a NONCOMPETITIVE inhibitor affect $K_m$ and $V_{max}$?', back: 'Binds an **allosteric site** equally on free enzyme and ES complex.\n\n- $K_m$ **unchanged**\n- $V_{max}$ **decreases**\n\nLineweaver-Burk: lines intersect on the **x-axis** (same −1/Km).', hint: 'Noncompetitive: Vmax down, Km same. Can\'t outcompete it.' },
      { topicId: topic.id, front: 'How does an UNCOMPETITIVE inhibitor affect $K_m$ and $V_{max}$?', back: 'Binds **only the ES complex** (not free enzyme).\n\n- $K_m$ **decreases**\n- $V_{max}$ **decreases**\n\nThe ratio $\\frac{V_{max}}{K_m}$ stays constant → Lineweaver-Burk lines are **parallel**.', hint: 'Uncompetitive: both Km and Vmax decrease; parallel LB lines.' },
      { topicId: topic.id, front: 'How does a MIXED inhibitor affect kinetics?', back: 'Binds an allosteric site on **both** E and ES, but with **different affinities**.\n\n- $V_{max}$ **decreases**\n- $K_m$ increases or decreases depending on which form it prefers.\n\nNoncompetitive is the special case where affinities are equal.', hint: 'Mixed: Vmax down; Km shifts either way. Noncompetitive = balanced mixed.' },
      { topicId: topic.id, front: 'What distinguishes allosteric (cooperative) enzymes kinetically?', back: 'They show a **sigmoidal (S-shaped)** velocity curve, not hyperbolic, due to **cooperative** binding of substrate across subunits.\n\n**Positive cooperativity**: substrate binding increases affinity for more substrate (e.g., hemoglobin/$\\text{O}_2$). Modulated by allosteric activators/inhibitors.', hint: 'Sigmoidal curve = cooperativity = multiple subunits (like hemoglobin).' },
      { topicId: topic.id, front: 'What is feedback inhibition?', back: 'The **final product** of a metabolic pathway allosterically **inhibits an early enzyme** (often the committed/rate-limiting step), preventing overproduction.\n\nExample: ATP and citrate inhibit phosphofructokinase-1 in glycolysis.', hint: 'End product shuts off the start of its own pathway.' },
      { topicId: topic.id, front: 'How do temperature and pH affect enzyme activity?', back: 'Each enzyme has an **optimal temperature and pH**.\n\n- Below optimum: slower (less kinetic energy)\n- Above optimum: **denaturation** (irreversible loss of structure/activity)\n\nMost human enzymes peak near 37°C and pH ~7.4 (pepsin is an exception, ~pH 2).', hint: 'Bell-shaped curve; too hot or wrong pH denatures the enzyme.' },
      { topicId: topic.id, front: 'Distinguish cofactors, coenzymes, prosthetic groups, apoenzyme, holoenzyme.', back: '**Cofactor** = inorganic helper (metal ion, e.g., $\\text{Zn}^{2+}$).\n**Coenzyme** = organic helper (often vitamin-derived, e.g., NAD⁺).\n**Prosthetic group** = tightly/covalently bound cofactor.\n**Apoenzyme** = enzyme without cofactor (inactive).\n**Holoenzyme** = enzyme + cofactor (active).', hint: 'Apo = naked/inactive; Holo = whole/active. Coenzyme organic, cofactor inorganic.' },
      { topicId: topic.id, front: 'What is the difference between zero-order and first-order regions of an enzyme curve?', back: 'At **low [S]**: rate is **first-order** in [S] (proportional to substrate) — the rising part of the curve.\n\nAt **high [S]** (saturating): rate is **zero-order** (independent of [S]), plateauing at $V_{max}$ because all active sites are occupied.', hint: 'Low [S] = first order; saturated = zero order plateau at Vmax.' },
      { topicId: topic.id, front: 'How does an enzyme speed up a reaction thermodynamically?', back: 'It **lowers the activation energy ($E_a$)** by stabilizing the **transition state**.\n\nIt does **NOT** change $\\Delta G$, $K_{eq}$, or the equilibrium position — only the rate (both forward and reverse equally).', hint: 'Enzymes lower Ea / stabilize transition state; they don\'t change ΔG or Keq.' },
    ],
  });

  console.log('✅ Created 14 MCAT enzyme kinetics flashcards');
  console.log('\n✅ All MCAT enzyme kinetics flashcards added!');
}

main()
  .then(async () => { await prisma.$disconnect(); })
  .catch(async (e) => { console.error(e); await prisma.$disconnect(); process.exit(1); });
