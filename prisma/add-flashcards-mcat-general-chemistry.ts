import '../src/lib/load-env' // load .env.local first so local runs never hit the prod DB
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Adding MCAT general chemistry flashcards...\n');

  const slug = 'mcat-general-chemistry-mcat';
  const topic = await prisma.topic.findFirst({ where: { slug } });
  if (!topic) { console.log(`⚠ Topic not found: ${slug}`); return; }
  await prisma.flashcard.deleteMany({ where: { topicId: topic.id } });

  await prisma.flashcard.createMany({
    data: [
      { topicId: topic.id, front: 'How do atomic radius and electronegativity trend across the periodic table?', back: '**Atomic radius**: decreases left→right (more protons pull electrons in), increases top→bottom (more shells).\n**Electronegativity / ionization energy / electron affinity**: increase left→right and bottom→top.\n\nFluorine is the most electronegative; Cs/Fr are the largest, most metallic.', hint: 'Radius is the opposite trend of EN/IE. Think: small atom = strong grip.' },
      { topicId: topic.id, front: 'What is the Bronsted-Lowry definition of acids and bases, and what is a conjugate base?', back: '**Acid** = proton ($\\text{H}^+$) donor.\n**Base** = proton acceptor.\n\nThe **conjugate base** is what remains after an acid donates its proton (acid minus $\\text{H}^+$). A strong acid has a weak conjugate base.', hint: 'Donate H+ = acid. Conjugate base = "acid had a baby and gave away its proton."' },
      { topicId: topic.id, front: 'What are the relationships between Ka, pKa, and acid strength?', back: '$pK_a = -\\log K_a$\n\n**Lower $pK_a$ (higher $K_a$) = stronger acid.**\n\nAt the half-equivalence point of a titration, $pH = pK_a$ (buffer region, max buffering capacity).', hint: 'Smaller pKa = stronger acid. pH = pKa at half-equivalence.' },
      { topicId: topic.id, front: 'What is the Henderson-Hasselbalch equation and when is a buffer most effective?', back: '$pH = pK_a + \\log\\frac{[\\text{A}^-]}{[\\text{HA}]}$\n\nA buffer is **most effective when $pH \\approx pK_a$** (when $[\\text{A}^-] = [\\text{HA}]$, the log term = 0).', hint: 'Buffer works best within ±1 pH unit of pKa.' },
      { topicId: topic.id, front: 'State Le Chatelier\'s principle and how the equilibrium responds to stress.', back: 'A system at equilibrium shifts to **counteract** an applied stress.\n\n- Add reactant → shift right (toward products)\n- Increase pressure → shift toward fewer moles of gas\n- Increase temperature → shift in the **endothermic** direction\n- Catalyst → NO shift (speeds both directions equally)', hint: 'The system "fights back" against whatever you change.' },
      { topicId: topic.id, front: 'How do the signs of $\\Delta G$, $\\Delta H$, and $\\Delta S$ relate to spontaneity?', back: '$\\Delta G = \\Delta H - T\\Delta S$\n\n- $\\Delta G < 0$ → **spontaneous** (exergonic)\n- $\\Delta G > 0$ → nonspontaneous\n- $\\Delta G = 0$ → equilibrium\n\nSpontaneous at all temps when $\\Delta H < 0$ and $\\Delta S > 0$.', hint: 'Negative delta G = spontaneous. Want negative H and positive S.' },
      { topicId: topic.id, front: 'What is the relationship between $\\Delta G°$ and the equilibrium constant K?', back: '$\\Delta G° = -RT \\ln K$\n\n- $K > 1$ → $\\Delta G° < 0$ (products favored)\n- $K < 1$ → $\\Delta G° > 0$ (reactants favored)\n- $K = 1$ → $\\Delta G° = 0$\n\nUnder nonstandard conditions: $\\Delta G = \\Delta G° + RT\\ln Q$.', hint: 'Big K = negative delta G = products favored.' },
      { topicId: topic.id, front: 'In a galvanic (voltaic) cell, where do oxidation and reduction occur, and which way do electrons flow?', back: '**Oxidation occurs at the Anode** (electrons lost).\n**Reduction occurs at the Cathode** (electrons gained).\n\nElectrons flow from anode → cathode through the wire. Anode is **negative** in a galvanic cell.\n\n$E°_{cell} = E°_{cathode} - E°_{anode}$; spontaneous when $E°_{cell} > 0$.', hint: 'An Ox / Red Cat. Electrons flow anode to cathode.' },
      { topicId: topic.id, front: 'How are $\\Delta G°$ and cell potential $E°$ related?', back: '$\\Delta G° = -nFE°_{cell}$\n\nwhere $n$ = moles of electrons, $F$ = Faraday\'s constant (~96,485 C/mol).\n\n**Positive $E°$ → negative $\\Delta G°$ → spontaneous** galvanic cell.', hint: 'Positive voltage = spontaneous. Note the negative sign.' },
      { topicId: topic.id, front: 'Which common ionic compounds are SOLUBLE (general solubility rules)?', back: '**Always soluble**: $\\text{Na}^+$, $\\text{K}^+$, $\\text{NH}_4^+$, $\\text{NO}_3^-$, and most acetates.\nHalides soluble EXCEPT with $\\text{Ag}^+$, $\\text{Pb}^{2+}$, $\\text{Hg}_2^{2+}$.\nSulfates soluble EXCEPT with $\\text{Ba}^{2+}$, $\\text{Pb}^{2+}$, $\\text{Ca}^{2+}$.', hint: 'Group 1, ammonium, and nitrates are always soluble.' },
      { topicId: topic.id, front: 'What is Ksp and how does the common-ion effect alter solubility?', back: '$K_{sp}$ = solubility product, the equilibrium constant for a dissolving salt.\n\nFor $\\text{AB} \\rightarrow \\text{A}^+ + \\text{B}^-$: $K_{sp} = [\\text{A}^+][\\text{B}^-]$\n\n**Common-ion effect**: adding a shared ion shifts equilibrium left (Le Chatelier), **decreasing** solubility.', hint: 'Adding a common ion makes the salt LESS soluble.' },
      { topicId: topic.id, front: 'How do the four quantum numbers describe an electron?', back: '**n** (principal) = energy level/shell (1, 2, 3...)\n**l** (azimuthal) = subshell shape (0=s, 1=p, 2=d, 3=f)\n**$m_l$** (magnetic) = orbital orientation (−l to +l)\n**$m_s$** (spin) = +½ or −½\n\nPauli exclusion: no two electrons share all four.', hint: 'n, l, ml, ms — shell, shape, orientation, spin.' },
      { topicId: topic.id, front: 'What are the colligative properties and how do they depend on solute?', back: 'Properties that depend on the **number** of solute particles, not identity:\n\n- **Boiling point elevation**: $\\Delta T_b = iK_b m$\n- **Freezing point depression**: $\\Delta T_f = iK_f m$\n- **Osmotic pressure**: $\\Pi = iMRT$\n- Vapor pressure lowering (Raoult\'s law)\n\n$i$ = van\'t Hoff factor (particles per formula unit).', hint: 'More dissolved particles = higher BP, lower FP. Count the ions (i).' },
      { topicId: topic.id, front: 'How does a catalyst affect a reaction, and what does it NOT change?', back: 'A catalyst **lowers the activation energy** ($E_a$) by providing an alternate pathway, speeding both forward and reverse rates.\n\nIt does **NOT** change: $\\Delta G$, $\\Delta H$, $K_{eq}$, or the position of equilibrium.', hint: 'Catalyst changes the path (kinetics), not the destination (thermodynamics).' },
    ],
  });

  console.log('✅ Created 14 MCAT general chemistry flashcards');
  console.log('\n✅ All MCAT general chemistry flashcards added!');
}

main()
  .then(async () => { await prisma.$disconnect(); })
  .catch(async (e) => { console.error(e); await prisma.$disconnect(); process.exit(1); });
