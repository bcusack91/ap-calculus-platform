/**
 * MCAT High-Yield Reference Sheet Data
 *
 * Contains high-yield equations, constants, and facts the MCAT expects
 * test-takers to have memorized (the exam provides no equation sheet).
 * Organized by the three science sections of the exam.
 *
 * Formulas use inline KaTeX (`$...$`). Backslashes are doubled in the
 * TypeScript source so the rendered string contains a single backslash.
 */

export interface MCATReferenceSheet {
  name: string
  emoji: string
  sections: { title: string; items: string[] }[]
}

export const MCAT_REFERENCE_SHEETS: Record<string, MCATReferenceSheet> = {
  'chem-phys': {
    name: 'MCAT Chem/Phys Equations & Constants',
    emoji: '⚗️',
    sections: [
      {
        title: 'Kinematics & Mechanics',
        items: [
          '$v = v_0 + at$',
          '$x = x_0 + v_0 t + \\tfrac{1}{2}at^2$',
          '$v^2 = v_0^2 + 2a\\,\\Delta x$',
          '$a_c = \\dfrac{v^2}{r}$  (centripetal acceleration)',
          'Projectile: horizontal $a_x = 0$, vertical $a_y = -g$',
          'Range maximized at launch angle $45^\\circ$',
        ],
      },
      {
        title: "Newton's Laws & Forces",
        items: [
          '$F_{net} = ma$  (Newton\'s 2nd law)',
          '$F_g = mg$  (weight)',
          '$F_g = \\dfrac{G m_1 m_2}{r^2}$  (universal gravitation)',
          '$f_s \\le \\mu_s N$  ;  $f_k = \\mu_k N$  (friction)',
          '$F_{spring} = -kx$  (Hooke\'s law)',
          'Newton\'s 3rd law: equal and opposite reaction forces',
        ],
      },
      {
        title: 'Work, Energy & Power',
        items: [
          '$W = Fd\\cos\\theta$',
          '$KE = \\tfrac{1}{2}mv^2$',
          '$PE_g = mgh$  ;  $PE_{spring} = \\tfrac{1}{2}kx^2$',
          '$W_{net} = \\Delta KE$  (work–energy theorem)',
          '$P = \\dfrac{W}{t} = Fv$  (power)',
          '$p = mv$  ;  $J = F\\,\\Delta t = \\Delta p$  (impulse)',
          'Mechanical energy conserved if no nonconservative work',
        ],
      },
      {
        title: 'Fluids',
        items: [
          '$\\rho = \\dfrac{m}{V}$  ;  $P = \\dfrac{F}{A}$',
          '$P = P_0 + \\rho g h$  (gauge/hydrostatic pressure)',
          '$F_{buoy} = \\rho_{fluid}\\, V_{disp}\\, g$  (Archimedes)',
          '$A_1 v_1 = A_2 v_2$  (continuity)',
          '$P_1 + \\tfrac{1}{2}\\rho v_1^2 + \\rho g y_1 = P_2 + \\tfrac{1}{2}\\rho v_2^2 + \\rho g y_2$  (Bernoulli)',
          'Poiseuille: flow $Q \\propto r^4$ (resistance dominated by radius)',
        ],
      },
      {
        title: 'Thermodynamics & Gases',
        items: [
          '$Q = mc\\,\\Delta T$  ;  $Q = mL$  (phase change)',
          '$\\Delta U = Q - W$  (first law)',
          '$\\Delta G = \\Delta H - T\\Delta S$',
          '$\\Delta G < 0$ spontaneous ; $\\Delta G > 0$ nonspontaneous',
          '$\\Delta G = -RT\\ln K$  ;  $\\Delta G = \\Delta G^\\circ + RT\\ln Q$',
          '$PV = nRT$  (ideal gas)',
          'Combined: $\\dfrac{P_1 V_1}{T_1} = \\dfrac{P_2 V_2}{T_2}$',
        ],
      },
      {
        title: 'Electrostatics & Circuits',
        items: [
          '$F = \\dfrac{k q_1 q_2}{r^2}$  (Coulomb\'s law)',
          '$E = \\dfrac{F}{q} = \\dfrac{kQ}{r^2}$  ;  $V = \\dfrac{kQ}{r}$',
          '$V = IR$  (Ohm\'s law)',
          '$P = IV = I^2 R = \\dfrac{V^2}{R}$',
          'Series: $R_{eq} = R_1 + R_2 + \\cdots$',
          'Parallel: $\\dfrac{1}{R_{eq}} = \\dfrac{1}{R_1} + \\dfrac{1}{R_2} + \\cdots$',
          '$C = \\dfrac{Q}{V}$  ;  $U_C = \\tfrac{1}{2}CV^2$',
        ],
      },
      {
        title: 'Waves & Sound',
        items: [
          '$v = f\\lambda$  ;  $f = \\dfrac{1}{T}$',
          '$\\beta = 10\\log\\dfrac{I}{I_0}$  (sound level, dB)',
          'Doppler: $f\' = f\\dfrac{v \\pm v_{obs}}{v \\mp v_{src}}$',
          'Open pipe: $f_n = \\dfrac{nv}{2L}$  ($n = 1,2,3,\\dots$)',
          'Closed pipe: $f_n = \\dfrac{nv}{4L}$  ($n = 1,3,5,\\dots$)',
          'Intensity $I \\propto \\dfrac{1}{r^2}$  (point source)',
        ],
      },
      {
        title: 'Optics',
        items: [
          '$n_1\\sin\\theta_1 = n_2\\sin\\theta_2$  (Snell\'s law)',
          '$n = \\dfrac{c}{v}$  (index of refraction)',
          '$\\dfrac{1}{f} = \\dfrac{1}{d_o} + \\dfrac{1}{d_i}$  (thin lens/mirror)',
          '$m = -\\dfrac{d_i}{d_o} = \\dfrac{h_i}{h_o}$  (magnification)',
          '$P = \\dfrac{1}{f}$  (lens power, diopters; $f$ in m)',
          '$\\sin\\theta_c = \\dfrac{n_2}{n_1}$  (total internal reflection)',
        ],
      },
      {
        title: 'Acids, Bases & Equilibrium',
        items: [
          '$pH = -\\log[H^+]$  ;  $pOH = -\\log[OH^-]$',
          '$pH + pOH = 14$  (at $25^\\circ$C)',
          '$K_a K_b = K_w = 1.0\\times10^{-14}$',
          '$pK_a + pK_b = 14$',
          'Henderson–Hasselbalch: $pH = pK_a + \\log\\dfrac{[A^-]}{[HA]}$',
          'Buffer optimal when $pH \\approx pK_a$ (equal HA and A$^-$)',
        ],
      },
      {
        title: 'Electrochemistry',
        items: [
          '$\\Delta G = -nFE$  ;  $\\Delta G^\\circ = -nFE^\\circ$',
          'Nernst: $E = E^\\circ - \\dfrac{RT}{nF}\\ln Q$',
          'At $25^\\circ$C: $E = E^\\circ - \\dfrac{0.0592}{n}\\log Q$',
          '$E^\\circ_{cell} = E^\\circ_{cathode} - E^\\circ_{anode}$',
          'Spontaneous (galvanic) cell: $E^\\circ_{cell} > 0$',
          'Oxidation at anode, reduction at cathode (OIL RIG)',
        ],
      },
      {
        title: 'Kinetics & Spectroscopy',
        items: [
          'Rate $= k[A]^m[B]^n$  (order = $m + n$)',
          '1st order: $\\ln[A] = \\ln[A]_0 - kt$  ;  $t_{1/2} = \\dfrac{\\ln 2}{k}$',
          'Arrhenius: $k = A\\,e^{-E_a/RT}$',
          'Catalyst lowers $E_a$; does not change $\\Delta G$ or $K$',
          'Beer–Lambert: $A = \\varepsilon b c$  (absorbance)',
        ],
      },
      {
        title: 'Key Constants',
        items: [
          '$R = 8.314\\ \\text{J/(mol}\\cdot\\text{K)} = 0.0821\\ \\text{L}\\cdot\\text{atm/(mol}\\cdot\\text{K)}$',
          '$F = 96{,}485\\ \\text{C/mol}$  (Faraday constant)',
          '$g = 9.8\\ \\text{m/s}^2$',
          '$c = 3.00\\times10^8\\ \\text{m/s}$',
          '$N_A = 6.022\\times10^{23}\\ \\text{mol}^{-1}$',
          '$K_w = 1.0\\times10^{-14}$  (at $25^\\circ$C)',
          '$k = 8.99\\times10^9\\ \\text{N}\\cdot\\text{m}^2/\\text{C}^2$',
        ],
      },
    ],
  },

  'bio-biochem': {
    name: 'MCAT Bio/Biochem High-Yield',
    emoji: '🧬',
    sections: [
      {
        title: 'Amino Acids — Nonpolar',
        items: [
          'Glycine (Gly, G) — smallest, achiral, flexible',
          'Alanine (Ala, A)',
          'Valine (Val, V), Leucine (Leu, L), Isoleucine (Ile, I) — branched',
          'Proline (Pro, P) — secondary amine, kinks helices',
          'Phenylalanine (Phe, F) — aromatic',
          'Methionine (Met, M) — start codon, S-containing',
          'Tryptophan (Trp, W) — aromatic, largest',
        ],
      },
      {
        title: 'Amino Acids — Polar Uncharged',
        items: [
          'Serine (Ser, S), Threonine (Thr, T) — hydroxyl',
          'Cysteine (Cys, C) — thiol, forms disulfide bonds',
          'Tyrosine (Tyr, Y) — aromatic, hydroxyl',
          'Asparagine (Asn, N), Glutamine (Gln, Q) — amide side chains',
        ],
      },
      {
        title: 'Amino Acids — Charged & pI Rules',
        items: [
          'Acidic: Aspartate (Asp, D), Glutamate (Glu, E) — neg. at pH 7',
          'Basic: Lysine (Lys, K), Arginine (Arg, R), Histidine (His, H)',
          'His ($pK_a \\approx 6$) buffers near physiological pH',
          '$pI = \\dfrac{pK_{a1} + pK_{a2}}{2}$  (for neutral side chains)',
          'For charged R groups, $pI$ = average of the two $pK_a$s flanking the neutral form',
          'At $pH < pI$ net positive; at $pH > pI$ net negative',
        ],
      },
      {
        title: 'Enzyme Kinetics',
        items: [
          'Michaelis–Menten: $v = \\dfrac{V_{max}[S]}{K_m + [S]}$',
          '$K_m$ = $[S]$ at half $V_{max}$ (inverse of substrate affinity)',
          'Lineweaver–Burk: $\\dfrac{1}{v} = \\dfrac{K_m}{V_{max}}\\dfrac{1}{[S]} + \\dfrac{1}{V_{max}}$',
          'Competitive inhibitor: $K_m$ ↑, $V_{max}$ unchanged',
          'Noncompetitive inhibitor: $K_m$ unchanged, $V_{max}$ ↓',
          'Uncompetitive inhibitor: $K_m$ ↓, $V_{max}$ ↓',
          'Mixed inhibitor: $V_{max}$ ↓, $K_m$ ↑ or ↓',
        ],
      },
      {
        title: 'Genetic Code & Central Dogma',
        items: [
          'Central dogma: DNA $\\to$ (transcription) RNA $\\to$ (translation) protein',
          'Start codon: AUG (Methionine)',
          'Stop codons: UAA, UAG, UGA (no amino acid)',
          'Code is degenerate (redundant), nearly universal, non-overlapping',
          'Codon = 3 nucleotides; read 5′ → 3′ on mRNA',
          'Wobble: 3rd codon position tolerates mismatch',
        ],
      },
      {
        title: 'Population Genetics (Hardy–Weinberg)',
        items: [
          '$p + q = 1$  (allele frequencies)',
          '$p^2 + 2pq + q^2 = 1$  (genotype frequencies)',
          '$p^2$ = homozygous dominant ; $q^2$ = homozygous recessive',
          '$2pq$ = heterozygotes',
          'Assumptions: no mutation, no migration, random mating, no selection, large population',
        ],
      },
      {
        title: 'Cellular Respiration — ATP Tally',
        items: [
          'Glycolysis (cytoplasm): glucose → 2 pyruvate, net 2 ATP + 2 NADH',
          'Pyruvate → acetyl-CoA: 2 NADH (one per pyruvate)',
          'TCA cycle (per glucose, 2 turns): 2 ATP, 6 NADH, 2 FADH$_2$',
          'ETC / oxidative phosphorylation: ~2.5 ATP per NADH, ~1.5 per FADH$_2$',
          'Total ~30–32 ATP per glucose (aerobic)',
          'Anaerobic: 2 ATP only; pyruvate → lactate (regenerates NAD$^+$)',
        ],
      },
      {
        title: 'Key Metabolic Enzymes & Regulation',
        items: [
          'PFK-1 — rate-limiting of glycolysis; inhibited by ATP/citrate, activated by AMP/F-2,6-BP',
          'Pyruvate dehydrogenase — links glycolysis to TCA; inhibited by acetyl-CoA, NADH',
          'Isocitrate dehydrogenase — rate-limiting of TCA cycle',
          'Glycogen: glycogen synthase (build), glycogen phosphorylase (break down)',
          'Acetyl-CoA carboxylase — commits to fatty acid synthesis',
          'Insulin promotes storage (anabolic); glucagon/epinephrine mobilize fuel',
        ],
      },
      {
        title: 'Hormones (Source → Target → Action)',
        items: [
          'Insulin — β cells of pancreas → most cells → lowers blood glucose',
          'Glucagon — α cells of pancreas → liver → raises blood glucose',
          'ADH (vasopressin) — posterior pituitary → kidney → water reabsorption',
          'Aldosterone — adrenal cortex → kidney → Na$^+$ retention, K$^+$ excretion',
          'Cortisol — adrenal cortex → body → stress, raises glucose',
          'Thyroid hormone (T$_3$/T$_4$) — thyroid → body → metabolic rate',
          'PTH — parathyroid → bone/kidney → raises blood Ca$^{2+}$',
          'Epinephrine — adrenal medulla → body → fight-or-flight',
        ],
      },
      {
        title: 'Biomolecules & Bonds',
        items: [
          'DNA base pairs: A–T (2 H-bonds), G–C (3 H-bonds)',
          'Protein structure: primary → secondary (α-helix, β-sheet) → tertiary → quaternary',
          'Saturated fats: no C=C, solid; unsaturated: C=C, liquid',
          'Enzymes lower activation energy; do not alter equilibrium',
          'Glycosidic, peptide, phosphodiester, ester bonds form by dehydration',
        ],
      },
    ],
  },

  'psych-soc': {
    name: 'MCAT Psych/Soc High-Yield',
    emoji: '🧠',
    sections: [
      {
        title: 'Neurotransmitters (Function + Clinical)',
        items: [
          'Acetylcholine — muscle contraction, memory; ↓ in Alzheimer\'s',
          'Dopamine — reward, movement; ↑ schizophrenia, ↓ Parkinson\'s',
          'Serotonin — mood, sleep, appetite; ↓ depression',
          'Norepinephrine — arousal, alertness, fight-or-flight',
          'GABA — main inhibitory NT; ↓ anxiety (targeted by benzodiazepines)',
          'Glutamate — main excitatory NT; learning (LTP)',
          'Endorphins — natural pain relief, euphoria',
        ],
      },
      {
        title: 'Brain Regions (Structure → Function)',
        items: [
          'Frontal lobe — executive function, planning, motor cortex',
          'Parietal lobe — somatosensory processing, spatial awareness',
          'Temporal lobe — auditory processing, language (Wernicke\'s area)',
          'Occipital lobe — visual processing',
          'Amygdala — fear, emotion, aggression',
          'Hippocampus — formation of new long-term memories',
          'Hypothalamus — homeostasis, hunger, thirst, endocrine control',
          'Cerebellum — balance, coordination, motor learning',
          'Medulla — vital autonomic functions (heart rate, breathing)',
        ],
      },
      {
        title: 'Developmental & Cognitive Theories',
        items: [
          'Piaget — sensorimotor, preoperational, concrete operational, formal operational',
          'Erikson — 8 psychosocial stages (trust vs. mistrust … integrity vs. despair)',
          'Kohlberg — preconventional, conventional, postconventional morality',
          'Vygotsky — zone of proximal development, scaffolding (sociocultural)',
          'Chomsky — language acquisition device (innate grammar)',
        ],
      },
      {
        title: 'Personality, Motivation & Emotion Theories',
        items: [
          'Freud — id, ego, superego; psychosexual stages',
          'Maslow — hierarchy of needs (physiological → safety → love → esteem → self-actualization)',
          'Big Five (OCEAN) — Openness, Conscientiousness, Extraversion, Agreeableness, Neuroticism',
          'James–Lange — physiological arousal precedes emotion',
          'Cannon–Bard — arousal and emotion occur simultaneously',
          'Schachter–Singer (two-factor) — arousal + cognitive label = emotion',
          'Yerkes–Dodson — performance peaks at moderate arousal',
        ],
      },
      {
        title: 'Defense Mechanisms (Freud)',
        items: [
          'Repression — unconsciously blocking distressing thoughts',
          'Denial — refusing to accept reality',
          'Projection — attributing one\'s own feelings to others',
          'Displacement — redirecting impulses to a safer target',
          'Sublimation — channeling impulses into socially acceptable acts',
          'Reaction formation — acting opposite to true feelings',
          'Regression — reverting to earlier developmental behavior',
          'Rationalization — justifying behavior with logical excuses',
        ],
      },
      {
        title: 'Memory',
        items: [
          'Stages: encoding → storage → retrieval',
          'Sensory memory → short-term (~7±2 items, ~30 s) → long-term',
          'Explicit (declarative): semantic (facts) + episodic (events)',
          'Implicit (nondeclarative): procedural (skills), priming',
          'Working memory (Baddeley): central executive, phonological loop, visuospatial sketchpad',
          'Proactive interference: old disrupts new; retroactive: new disrupts old',
        ],
      },
      {
        title: 'Learning (Conditioning)',
        items: [
          'Classical conditioning: NS paired with UCS → CS elicits CR',
          'Acquisition, extinction, spontaneous recovery, generalization, discrimination',
          'Operant (Skinner): reinforcement increases, punishment decreases behavior',
          'Positive = add stimulus; negative = remove stimulus',
          'Reinforcement schedules: fixed/variable × ratio/interval (variable-ratio most resistant to extinction)',
          'Observational learning (Bandura): attention, retention, reproduction, motivation',
        ],
      },
      {
        title: 'Sociological Paradigms',
        items: [
          'Functionalism — society as interrelated parts maintaining stability (Durkheim)',
          'Conflict theory — competition over scarce resources, inequality (Marx)',
          'Symbolic interactionism — meaning created through everyday interactions (Mead)',
          'Social constructionism — reality is socially constructed',
          'Rational choice / exchange theory — behavior based on cost–benefit analysis',
          'Feminist theory — examines gender-based inequality',
        ],
      },
      {
        title: 'Stratification & Mobility',
        items: [
          'Social stratification — hierarchical ranking of groups',
          'Class system (open) vs. caste system (closed)',
          'Vertical mobility — moving up/down classes; horizontal — same level',
          'Intergenerational vs. intragenerational mobility',
          'Meritocracy — status based on ability/effort',
          'Socioeconomic status (SES) — income, education, occupation',
          'Social reproduction — inequality passed across generations (cultural capital)',
        ],
      },
      {
        title: 'Demographic Transition',
        items: [
          'Stage 1 (pre-industrial): high birth rate, high death rate, stable population',
          'Stage 2 (transitional): high birth rate, falling death rate, rapid growth',
          'Stage 3 (industrial): falling birth rate, low death rate, slowing growth',
          'Stage 4 (post-industrial): low birth rate, low death rate, stable population',
          'Stage 5 (sometimes): birth rate below death rate, population decline',
        ],
      },
      {
        title: 'Types of Social Interaction',
        items: [
          'Status — social position (ascribed vs. achieved; master status)',
          'Role — behaviors expected of a status (role conflict, role strain)',
          'Group — primary (intimate) vs. secondary (impersonal)',
          'Network — web of social ties',
          'Organization — formal coordinated structure (bureaucracy)',
          'Dramaturgy (Goffman) — front-stage vs. back-stage self-presentation',
        ],
      },
    ],
  },
}
