import '../src/lib/load-env' // load .env.local first so local runs never hit the prod DB
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Adding MCAT organic spectroscopy flashcards...\n');

  const slug = 'mcat-organic-chemistry-spectroscopy-mcat';
  const topic = await prisma.topic.findFirst({ where: { slug } });
  if (!topic) { console.log(`⚠ Topic not found: ${slug}`); return; }
  await prisma.flashcard.deleteMany({ where: { topicId: topic.id } });

  await prisma.flashcard.createMany({
    data: [
      { topicId: topic.id, front: 'What is the IR absorption for a carbonyl (C=O) and why is it diagnostic?', back: 'Strong, sharp peak at **~1700–1750 $\\text{cm}^{-1}$**.\n\nVery diagnostic because it is intense and isolated. Conjugation lowers it slightly; the exact position helps distinguish aldehydes, ketones, esters, and acids.', hint: 'C=O ≈ 1700. Big, sharp, hard to miss.' },
      { topicId: topic.id, front: 'What is the IR signature of an O–H bond (alcohol vs. carboxylic acid)?', back: '**Alcohol O–H**: broad peak at ~3200–3550 $\\text{cm}^{-1}$.\n**Carboxylic acid O–H**: very broad, ~2500–3300 $\\text{cm}^{-1}$ (overlaps C–H).\n\nBoth are broad due to hydrogen bonding; the acid is broader and dips lower.', hint: 'Broad ~3300 = alcohol; extra-broad down to 2500 = carboxylic acid.' },
      { topicId: topic.id, front: 'What is the IR absorption for an N–H bond?', back: '**N–H stretch**: ~3300–3500 $\\text{cm}^{-1}$.\n\nPrimary amines (–NH₂) show **two** peaks (symmetric + asymmetric); secondary amines (–NH) show **one** peak. Sharper than O–H.', hint: '1° amine = two N–H peaks; 2° amine = one peak.' },
      { topicId: topic.id, front: 'What IR region is the "fingerprint region" and why is it useful?', back: 'The **fingerprint region** is below ~1500 $\\text{cm}^{-1}$ (~600–1500).\n\nIt contains complex bending/single-bond vibrations unique to each molecule. Used to confirm identity by matching to a reference spectrum, not to assign individual groups.', hint: 'Below 1500 = fingerprint = unique molecular ID.' },
      { topicId: topic.id, front: 'What does the IR peak just above ~3000 $\\text{cm}^{-1}$ indicate?', back: '**sp² C–H** (alkene/aromatic) stretches appear just **above** 3000 $\\text{cm}^{-1}$.\n**sp³ C–H** (alkane) appears just **below** 3000 $\\text{cm}^{-1}$.\nA terminal alkyne ($\\equiv$C–H, sp) shows a sharp peak at ~3300.', hint: 'Above 3000 = sp²/sp (unsaturated); below 3000 = sp³ alkane.' },
      { topicId: topic.id, front: 'In ¹H NMR, what does the chemical shift (ppm) tell you?', back: 'Shift reflects the **electronic environment** (deshielding). Higher ppm = more deshielded (electron-poor).\n\n- TMS reference = 0 ppm\n- Alkyl ~0.5–1.5\n- Allylic/next to C=O ~2–2.5\n- Vinyl ~5–6, Aromatic ~7–8\n- Aldehyde H ~9–10, Carboxylic acid H ~10–12', hint: 'Downfield (high ppm) = deshielded = near electronegative atoms or pi systems.' },
      { topicId: topic.id, front: 'What does NMR signal integration measure?', back: 'The **area under each peak** is proportional to the **number of equivalent protons** giving that signal.\n\nIntegration gives the relative ratio of H atoms (e.g., 3:2:1), helping count protons in each environment.', hint: 'Integration = how many H\'s, not what kind.' },
      { topicId: topic.id, front: 'State the n+1 rule for NMR spin-spin splitting.', back: 'A proton with **n** equivalent neighboring (non-equivalent to itself) protons is split into **n+1** peaks (multiplet).\n\n- 0 neighbors → singlet\n- 2 neighbors → triplet\n- 3 neighbors → quartet\n\nSplitting reveals adjacent protons (coupling).', hint: 'Count neighbors, add 1. CH₃ next to CH₂ → triplet.' },
      { topicId: topic.id, front: 'Which protons typically appear as broad, variable singlets in ¹H NMR?', back: '**O–H and N–H protons** (alcohols, acids, amines).\n\nThey are **exchangeable** — broad, with variable chemical shift, and they generally do **not** show n+1 coupling. They disappear on $\\text{D}_2\\text{O}$ exchange.', hint: 'OH/NH = broad, variable, no splitting, vanish with D₂O.' },
      { topicId: topic.id, front: 'What does the molecular ion peak (M⁺) tell you in mass spectrometry?', back: 'The **M⁺ peak** (highest m/z, the radical cation) gives the **molecular weight** of the intact molecule.\n\nThe largest, most stable fragment is often the **base peak** (tallest, set to 100% relative abundance) — not necessarily M⁺.', hint: 'M⁺ = molecular weight; base peak = tallest (most stable fragment).' },
      { topicId: topic.id, front: 'What does an M+2 peak roughly equal to M⁺ indicate in mass spec?', back: 'Presence of **bromine** (⁷⁹Br and ⁸¹Br are ~1:1, so M and M+2 are nearly equal height).\n\nA **chlorine** gives an M+2 that is ~⅓ the height of M⁺ (³⁵Cl:³⁷Cl ≈ 3:1).', hint: 'Br → ~1:1 M and M+2; Cl → ~3:1 M to M+2.' },
      { topicId: topic.id, front: 'What is a common diagnostic fragment loss of m/z 15 or 29 in mass spec?', back: 'Loss of **15** = loss of a **methyl group ($\\text{CH}_3$)**.\nLoss of **29** = loss of **CHO (formyl)** or an ethyl group ($\\text{C}_2\\text{H}_5$).\n\nm/z **77** indicates a **phenyl cation** ($\\text{C}_6\\text{H}_5^+$).', hint: '−15 = methyl; −29 = CHO/ethyl; 77 = phenyl.' },
      { topicId: topic.id, front: 'What does UV-Vis spectroscopy detect, and which compounds absorb?', back: 'UV-Vis detects **conjugated pi systems** (electronic transitions). The more conjugation, the longer the wavelength absorbed (lower energy).\n\nProteins absorb at **280 nm** (aromatic residues Trp, Tyr); nucleic acids at **260 nm**.', hint: 'Conjugation = UV absorption. Proteins 280 nm, DNA 260 nm.' },
      { topicId: topic.id, front: 'How does the degree of unsaturation (index of hydrogen deficiency) help interpret spectra?', back: '$\\text{IHD} = \\frac{2C + 2 + N - H - X}{2}$\n\nEach degree = one ring or one pi bond. A benzene ring = **4** degrees (3 double bonds + 1 ring). Combine with IR/NMR to confirm aromatic rings or carbonyls.', hint: 'Each ring or double bond = 1 degree; benzene = 4.' },
    ],
  });

  console.log('✅ Created 14 MCAT organic spectroscopy flashcards');
  console.log('\n✅ All MCAT organic spectroscopy flashcards added!');
}

main()
  .then(async () => { await prisma.$disconnect(); })
  .catch(async (e) => { console.error(e); await prisma.$disconnect(); process.exit(1); });
