export const batchCards: { slug: string; cards: { front: string; back: string; hint?: string }[] }[] = [
  {
    slug: "mcat-organ-systems-respiratory-mcat",
    cards: [
      {
        front: "Trace the path of air from the nose to the alveoli.",
        back: "Nasal cavity/pharynx \\u2192 larynx \\u2192 trachea \\u2192 primary bronchi \\u2192 secondary/tertiary bronchi \\u2192 bronchioles \\u2192 terminal bronchioles \\u2192 respiratory bronchioles \\u2192 alveolar ducts \\u2192 alveoli. Gas exchange occurs only in the respiratory zone (respiratory bronchioles onward).",
        hint: "Conducting zone vs. respiratory zone",
      },
      {
        front: "What drives inspiration mechanically?",
        back: "Contraction of the diaphragm (flattens, moves down) and external intercostals expands the thoracic cavity, decreasing intrapleural pressure. By Boyle's law, increased volume lowers intrapulmonary pressure below atmospheric, so air flows in. Quiet inspiration is active; quiet expiration is passive (elastic recoil).",
        hint: "Negative-pressure breathing",
      },
      {
        front: "What is surfactant and why is it essential?",
        back: "A phospholipid (dipalmitoylphosphatidylcholine) secreted by type II alveolar (pneumocyte) cells. It lowers alveolar surface tension, preventing collapse of small alveoli and reducing the work of breathing. Deficiency causes neonatal respiratory distress syndrome in premature infants.",
        hint: "Type II pneumocytes; Laplace's law",
      },
      {
        front: "Using Laplace's law, why do small alveoli tend to collapse into large ones, and how is this prevented?",
        back: "For a sphere, pressure $P = 2T/r$ where $T$ is surface tension and $r$ is radius. Smaller $r$ gives higher collapsing pressure, so small alveoli would empty into large ones. Surfactant reduces $T$ more in smaller alveoli, equalizing pressures and stabilizing them.",
        hint: "$P = 2T/r$",
      },
      {
        front: "How is most CO2 transported in the blood?",
        back: "About 70% as bicarbonate ($\\\\text{HCO}_3^-$) via the chloride shift, ~23% bound to hemoglobin as carbaminohemoglobin, and ~7% dissolved in plasma. The reaction $\\\\text{CO}_2 + \\\\text{H}_2\\\\text{O} \\\\leftrightarrow \\\\text{H}_2\\\\text{CO}_3 \\\\leftrightarrow \\\\text{H}^+ + \\\\text{HCO}_3^-$ is catalyzed by carbonic anhydrase in RBCs.",
        hint: "Bicarbonate is the majority",
      },
      {
        front: "What is the Bohr effect?",
        back: "Increased CO2 and H+ (lower pH) decrease hemoglobin's affinity for O2, shifting the oxygen-hemoglobin dissociation curve to the right. This promotes O2 unloading in metabolically active tissues where CO2 and acid are high.",
        hint: "Right shift = unload O2",
      },
      {
        front: "What factors shift the oxygen-hemoglobin dissociation curve to the RIGHT?",
        back: "Increased CO2, increased H+ (decreased pH), increased temperature, and increased 2,3-BPG (2,3-DPG). A right shift means lower O2 affinity, favoring delivery to tissues. The opposite of each shifts it left (higher affinity).",
        hint: "Exercise conditions = right shift",
      },
      {
        front: "Why is the oxygen-hemoglobin dissociation curve sigmoidal but myoglobin's is hyperbolic?",
        back: "Hemoglobin shows cooperative binding: binding of one O2 increases affinity at the other three subunits, producing the S-shape. Myoglobin is a single subunit with no cooperativity, giving a hyperbolic curve and higher affinity that makes it a tissue O2 reservoir.",
        hint: "Cooperativity creates the sigmoid",
      },
      {
        front: "What is the chloride shift?",
        back: "As bicarbonate generated in RBCs exits into plasma, chloride enters the cell (via band 3 anion exchanger) to maintain electrical neutrality. This occurs in systemic capillaries as CO2 is loaded; it reverses in the lungs.",
        hint: "$\\\\text{HCO}_3^-$ out, $\\\\text{Cl}^-$ in",
      },
      {
        front: "Where are the central and peripheral chemoreceptors, and what do they sense?",
        back: "Central chemoreceptors in the medulla respond primarily to increased CO2 (via CSF pH/H+) and are the main driver of ventilation. Peripheral chemoreceptors in the carotid and aortic bodies respond to low O2, high CO2, and low pH; low O2 dominates only when PaO2 falls markedly.",
        hint: "Central = CO2; peripheral = O2 backup",
      },
      {
        front: "What are the major non-respiratory functions of the respiratory system?",
        back: "It contributes to pH regulation (excreting CO2), thermoregulation and water loss, filtering/warming/humidifying air, immune defense (mucociliary escalator, alveolar macrophages), and activation of angiotensin II via ACE in pulmonary capillaries.",
        hint: "pH, defense, ACE",
      },
      {
        front: "Define tidal volume, residual volume, vital capacity, and total lung capacity.",
        back: "Tidal volume (TV): air per normal breath (~500 mL). Residual volume (RV): air remaining after maximal exhalation (cannot be exhaled). Vital capacity (VC): max exhaled after max inhalation (TV + IRV + ERV). Total lung capacity (TLC): VC + RV.",
        hint: "TLC = VC + RV; VC excludes RV",
      },
      {
        front: "Worked example: If PaCO2 rises during breath-holding, what happens to blood pH and the urge to breathe?",
        back: "Rising CO2 drives $\\\\text{CO}_2 + \\\\text{H}_2\\\\text{O} \\\\to \\\\text{H}^+ + \\\\text{HCO}_3^-$, increasing H+ and lowering pH (respiratory acidosis). Central chemoreceptors detect the CSF pH drop and strongly increase the drive to breathe\\u2014this CO2 signal, not low O2, triggers the urge to breathe.",
        hint: "CO2 buildup, not O2 lack",
      },
    ],
  },
  {
    slug: "mcat-cars-passages-comparative-mcat",
    cards: [
      {
        front: "What does CARS stand for and what does it test?",
        back: "Critical Analysis and Reasoning Skills. It is the MCAT section with no outside science content\\u2014you answer questions using only the passage. It tests reading comprehension, analysis, and the ability to apply and extend an author's reasoning.",
        hint: "No prior knowledge required",
      },
      {
        front: "What are the three CARS question skill categories (AAMC framework)?",
        back: "Foundations of Comprehension (understanding what's stated/implied), Reasoning Within the Text (integrating ideas, judging argument validity), and Reasoning Beyond the Text (applying ideas to new contexts or incorporating new information). Comparative passages emphasize the reasoning categories.",
        hint: "Comprehension, Within, Beyond",
      },
      {
        front: "What is a 'comparative' CARS task?",
        back: "A question or passage that requires you to relate two or more viewpoints, theories, or texts\\u2014identifying agreements, contrasts, or how one author would respond to another's claim. Success depends on pinning down each author's main thesis and the basis of their disagreement.",
        hint: "Map each author's thesis first",
      },
      {
        front: "Strategy: How should you read the main idea of a CARS passage?",
        back: "Identify the author's central thesis (main claim) and tone/attitude, not just the topic. Track the structure: where the author shifts, concedes, or rebuts. For comparative passages, summarize each perspective in a short phrase before answering.",
        hint: "Thesis + tone + structure",
      },
      {
        front: "What is the difference between the 'topic' and the 'main idea'?",
        back: "The topic is what the passage is about (a noun phrase, e.g., 'realism in art'). The main idea is the author's claim or argument about that topic (a full assertion, e.g., 'realism failed to capture social truth'). CARS answers reward the main idea, not just the topic.",
        hint: "Claim vs. subject",
      },
      {
        front: "Common trap: the 'too extreme' answer choice.",
        back: "Answers with absolute words (always, never, all, none, must, impossible) are often wrong because authors usually qualify claims. Prefer measured, qualified choices unless the passage explicitly takes an absolute stance.",
        hint: "Beware always/never",
      },
      {
        front: "Common trap: the 'out of scope' answer.",
        back: "A choice may be true in the real world but is wrong because the passage gives no support for it. CARS answers must be grounded in the text. Reject choices that introduce information or judgments the author never made.",
        hint: "True \\u2260 supported",
      },
      {
        front: "Common trap: the 'reversal' or 'opposite' answer.",
        back: "A choice that states the opposite of the author's point, or attributes one author's view to the other in a comparative passage. After narrowing to two, verify which author/claim each choice actually represents.",
        hint: "Check whose view it is",
      },
      {
        front: "How do you answer an 'application' (Reasoning Beyond the Text) question?",
        back: "Extract the underlying principle from the passage, then find the new situation that best follows the same logic. The correct choice is analogous in structure, not just in surface topic. Avoid choices that match keywords but violate the principle.",
        hint: "Match the principle, not the words",
      },
      {
        front: "How do you handle a 'strengthen/weaken' question in a comparative passage?",
        back: "Identify the specific claim targeted and which author holds it. To weaken, find new info that undermines that author's reasoning or supports the rival view; to strengthen, find info consistent with and supportive of that author's premises.",
        hint: "Tie new info to the right author",
      },
      {
        front: "Why is 'attitude/tone' important and how do you detect it?",
        back: "Tone reveals whether the author endorses, criticizes, or stays neutral toward a view\\u2014key for comparative questions. Detect it through charged adjectives, hedging words, and rhetorical framing. A 'critic' question requires distinguishing the author's voice from views they merely report.",
        hint: "Author's voice vs. reported views",
      },
      {
        front: "Time management: what is a reliable CARS pacing strategy?",
        back: "The section has 53 questions over 90 minutes (~10 minutes per passage, 9 passages). Budget ~3-4 minutes reading and the rest answering; do not over-invest in a hard passage. Answer every question (no penalty for guessing) and flag uncertainties to revisit.",
        hint: "~10 min/passage, never leave blanks",
      },
      {
        front: "Worked mini-example: Two authors disagree about whether art must be useful. Author A says beauty alone justifies art; Author B says art must serve society. A question asks how A would respond to B. What's the approach?",
        back: "Use A's stated principle (intrinsic value of beauty) to predict the rebuttal: A would argue B wrongly subordinates art to utility, denying that aesthetic value is sufficient. The correct choice voices A's principle directed at B's claim\\u2014not a new opinion or B's own view restated.",
        hint: "Apply A's thesis against B",
      },
      {
        front: "Should you use outside knowledge on CARS?",
        back: "No. Even if you know the subject (e.g., a philosophy passage), answer strictly from the passage's logic and the author's stated views. Outside knowledge is a common source of out-of-scope errors and contradicting the author's framing.",
        hint: "Passage logic only",
      },
    ],
  },
  {
    slug: "mcat-microbiology-genetics-mcat",
    cards: [
      {
        front: "What are the three components of a generalized bacteriophage virus structure?",
        back: "A protein capsid (head) enclosing nucleic acid, a tail sheath, and tail fibers for host attachment. Viruses are acellular, lack their own metabolism/ribosomes, and are obligate intracellular parasites that hijack host machinery to replicate.",
        hint: "Capsid + genome \\u00b1 envelope",
      },
      {
        front: "Compare the lytic and lysogenic cycles of a bacteriophage.",
        back: "Lytic: phage immediately replicates, assembles, and lyses the host. Lysogenic: phage DNA integrates into the host genome as a prophage and replicates passively with the cell until a trigger induces the lytic cycle. Lysogeny allows latency and can transfer genes.",
        hint: "Lyse now vs. integrate and wait",
      },
      {
        front: "What are the three mechanisms of bacterial genetic recombination?",
        back: "Transformation (uptake of naked DNA from the environment), transduction (phage-mediated DNA transfer between bacteria), and conjugation (direct cell-to-cell transfer via a pilus, requiring an F plasmid). All increase genetic diversity without sexual reproduction.",
        hint: "Transformation, transduction, conjugation",
      },
      {
        front: "What is the F plasmid and what distinguishes F+, F-, and Hfr cells?",
        back: "The fertility (F) plasmid carries genes for the sex pilus and conjugation. F+ cells have the plasmid and can transfer it to F- (recipient) cells. Hfr (high-frequency recombination) cells have the F plasmid integrated into the chromosome, so conjugation can transfer chromosomal genes.",
        hint: "Hfr = integrated F factor",
      },
      {
        front: "Describe the lac operon and its regulation (an inducible operon).",
        back: "The lac operon (lacZ, lacY, lacA) is normally OFF; the repressor binds the operator blocking transcription. Lactose (allolactose) binds the repressor, releasing it (induction). It is also subject to catabolite repression: low glucose raises cAMP, which with CAP boosts transcription.",
        hint: "Inducible; lactose turns it ON",
      },
      {
        front: "How does the trp operon differ from the lac operon?",
        back: "The trp operon is repressible (normally ON). When tryptophan is abundant, it acts as a corepressor binding the repressor so it can block transcription, turning the operon OFF. It also uses attenuation. This conserves energy when the end product is plentiful.",
        hint: "Repressible; tryptophan turns it OFF",
      },
      {
        front: "What is the difference between positive and negative control in operons?",
        back: "Negative control uses a repressor that blocks transcription when bound to the operator. Positive control uses an activator (e.g., CAP-cAMP) that increases transcription when bound. The lac operon uses both: negative (repressor) and positive (CAP).",
        hint: "Repressor blocks; activator promotes",
      },
      {
        front: "What are the phases of a bacterial growth curve?",
        back: "Lag phase (adaptation, little division), log/exponential phase (rapid binary fission), stationary phase (growth = death as nutrients deplete/waste accumulates), and death phase (decline). Bacteria reproduce asexually by binary fission.",
        hint: "Lag \\u2192 log \\u2192 stationary \\u2192 death",
      },
      {
        front: "How do retroviruses replicate?",
        back: "Retroviruses (e.g., HIV) carry single-stranded RNA and reverse transcriptase, which makes complementary DNA from the RNA template. Integrase inserts this proviral DNA into the host genome, where it is transcribed by host machinery to make new virions.",
        hint: "RNA \\u2192 DNA \\u2192 host genome",
      },
      {
        front: "What is a transposon?",
        back: "A 'jumping gene'\\u2014a mobile DNA segment that can move within or between genomes, often disrupting genes or spreading antibiotic-resistance genes. Transposition contributes to mutation and genetic variability in bacteria and other organisms.",
        hint: "Mobile genetic element",
      },
      {
        front: "How do prokaryotic gene structure and translation differ from eukaryotic?",
        back: "Prokaryotes have polycistronic mRNA (one transcript, multiple genes), no nucleus (transcription and translation are coupled and simultaneous), no introns/splicing, and use a Shine-Dalgarno sequence with formylmethionine to start translation. Eukaryotes are monocistronic with extensive mRNA processing.",
        hint: "Coupled, polycistronic, no introns",
      },
      {
        front: "What is the basis of antibiotic resistance and how does it spread?",
        back: "Resistance arises from spontaneous mutations or acquired resistance genes (often on plasmids). Natural selection favors resistant bacteria under antibiotic pressure. Genes spread rapidly via conjugation (R plasmids), transduction, and transposons across species.",
        hint: "Mutation + selection + plasmid transfer",
      },
      {
        front: "Worked example: In an Hfr conjugation mapping experiment, why are genes nearer the origin of transfer transferred first?",
        back: "Hfr transfer begins at the integrated F factor's origin and proceeds linearly; conjugation is usually interrupted before the full chromosome passes. Genes closer to the origin transfer sooner and appear in recipients earlier, so transfer timing maps relative gene order/distance.",
        hint: "Time of entry = gene order",
      },
    ],
  },
  {
    slug: "mcat-physics-mechanics-mcat",
    cards: [
      {
        front: "State Newton's three laws of motion.",
        back: "1) Inertia: an object stays at rest or in uniform motion unless acted on by a net force. 2) $F = ma$: net force equals mass times acceleration. 3) For every action there is an equal and opposite reaction. Use these to relate forces and motion.",
        hint: "Inertia, $F=ma$, action-reaction",
      },
      {
        front: "List the kinematic equations for constant acceleration.",
        back: "$v = v_0 + at$; $x = x_0 + v_0 t + \\\\frac{1}{2}at^2$; $v^2 = v_0^2 + 2a\\\\Delta x$; $\\\\Delta x = \\\\frac{1}{2}(v_0 + v)t$. Variables: $v$ velocity, $v_0$ initial velocity, $a$ acceleration, $t$ time, $x$ position. Use only when $a$ is constant.",
        hint: "Pick the equation missing your unknown",
      },
      {
        front: "What is the work-energy theorem?",
        back: "The net work done on an object equals its change in kinetic energy: $W_{net} = \\\\Delta KE = \\\\frac{1}{2}mv_f^2 - \\\\frac{1}{2}mv_i^2$. Work $W = F d \\\\cos\\\\theta$, where $\\\\theta$ is the angle between force and displacement.",
        hint: "$W_{net} = \\\\Delta KE$",
      },
      {
        front: "When is mechanical energy conserved, and what is the conservation equation?",
        back: "When only conservative forces (gravity, springs) act\\u2014no friction or air resistance. Then $KE_i + PE_i = KE_f + PE_f$. With nonconservative forces, $W_{nc} = \\\\Delta KE + \\\\Delta PE$. Gravitational $PE = mgh$; spring $PE = \\\\frac{1}{2}kx^2$.",
        hint: "No friction \\u2192 energy conserved",
      },
      {
        front: "Define impulse and the impulse-momentum theorem.",
        back: "Impulse $J = F\\\\Delta t = \\\\Delta p = m\\\\Delta v$. A force over a time changes momentum. This explains why extending collision time (airbags, bending knees) reduces the force for a given momentum change.",
        hint: "$F\\\\Delta t = \\\\Delta p$",
      },
      {
        front: "Distinguish elastic, inelastic, and perfectly inelastic collisions.",
        back: "Momentum is conserved in all collisions (no external force). Elastic: kinetic energy is also conserved. Inelastic: KE is not conserved (some lost to heat/deformation). Perfectly inelastic: objects stick together and move with one common velocity.",
        hint: "Momentum always; KE only if elastic",
      },
      {
        front: "What is the centripetal force and its formula?",
        back: "The net inward force keeping an object in circular motion: $F_c = \\\\frac{mv^2}{r}$, directed toward the center. It is provided by a real force (tension, gravity, friction, normal force), not a new force. Centripetal acceleration $a_c = \\\\frac{v^2}{r}$.",
        hint: "Points to the center; $mv^2/r$",
      },
      {
        front: "Define torque and the condition for rotational equilibrium.",
        back: "Torque $\\\\tau = rF\\\\sin\\\\theta$, where $r$ is the distance from pivot, $F$ the force, and $\\\\theta$ the angle between them. Rotational equilibrium requires net torque = 0 (clockwise torques balance counterclockwise). Translational equilibrium requires net force = 0.",
        hint: "$\\\\tau = rF\\\\sin\\\\theta$; lever arm matters",
      },
      {
        front: "How do you analyze an inclined plane?",
        back: "Resolve gravity into components: along the incline $mg\\\\sin\\\\theta$ (drives motion) and perpendicular $mg\\\\cos\\\\theta$ (sets normal force $N = mg\\\\cos\\\\theta$). Friction $f = \\\\mu N = \\\\mu mg\\\\cos\\\\theta$ opposes motion. Net force along incline determines acceleration.",
        hint: "$\\\\sin\\\\theta$ along, $\\\\cos\\\\theta$ perpendicular",
      },
      {
        front: "What is the difference between static and kinetic friction?",
        back: "Static friction ($f_s \\\\le \\\\mu_s N$) prevents motion up to a maximum threshold; it adjusts to match applied force. Kinetic friction ($f_k = \\\\mu_k N$) acts on moving objects and is constant. Usually $\\\\mu_s > \\\\mu_k$, so it's harder to start than to keep sliding.",
        hint: "Static is a max; kinetic is fixed",
      },
      {
        front: "Common trap: weight vs. mass.",
        back: "Mass ($m$, in kg) is the amount of matter and is invariant. Weight ($W = mg$, in N) is the gravitational force and changes with $g$. On the MCAT, use $g \\\\approx 10\\\\ \\\\text{m/s}^2$ unless told otherwise; the normal force equals weight only on level ground with no vertical acceleration.",
        hint: "Mass invariant; weight depends on $g$",
      },
      {
        front: "Worked example: A 2 kg ball is dropped from 5 m. What is its speed just before impact (ignore air resistance)?",
        back: "Use energy conservation: $mgh = \\\\frac{1}{2}mv^2$, so $v = \\\\sqrt{2gh} = \\\\sqrt{2(10)(5)} = \\\\sqrt{100} = 10\\\\ \\\\text{m/s}$. Mass cancels, so speed is independent of mass in free fall.",
        hint: "$v = \\\\sqrt{2gh}$",
      },
      {
        front: "Worked example: Two carts (3 kg at 4 m/s and 1 kg at rest) collide and stick. Find the final velocity.",
        back: "Perfectly inelastic, so use momentum conservation: $p_i = (3)(4) + (1)(0) = 12$. Final $v = p_i/(m_1+m_2) = 12/4 = 3\\\\ \\\\text{m/s}$. KE is not conserved here.",
        hint: "$m_1 v_1 = (m_1+m_2)v_f$",
      },
    ],
  },
  {
    slug: "mcat-anatomy-physiology-musculoskeletal-mcat",
    cards: [
      {
        front: "Name the three types of muscle tissue and a key feature of each.",
        back: "Skeletal: striated, multinucleated, voluntary, attaches to bone. Cardiac: striated, uninucleated, involuntary, has intercalated discs and gap junctions for synchronized contraction. Smooth: non-striated, involuntary, in walls of organs/vessels, capable of slow sustained contraction.",
        hint: "Skeletal, cardiac, smooth",
      },
      {
        front: "Describe the sliding filament theory of muscle contraction.",
        back: "Myosin heads bind actin and pull thin filaments toward the sarcomere center (cross-bridge cycling), shortening the sarcomere without filaments themselves shortening. The H zone and I band narrow; the A band stays constant. ATP powers cross-bridge detachment.",
        hint: "Filaments slide, don't shorten",
      },
      {
        front: "List the sarcomere zones and how they change during contraction.",
        back: "The sarcomere spans Z-line to Z-line. The A band (thick filaments) length is constant. The I band (thin only) and H zone (thick only) shorten. The M line anchors thick filaments; the Z line anchors thin filaments. Z lines move closer together.",
        hint: "A band constant; I band and H zone shrink",
      },
      {
        front: "What is the role of calcium and troponin/tropomyosin in contraction?",
        back: "At rest, tropomyosin blocks myosin-binding sites on actin. Ca2+ released from the sarcoplasmic reticulum binds troponin, shifting tropomyosin to expose binding sites, allowing cross-bridge formation. Removing Ca2+ (pumped back) ends contraction.",
        hint: "Ca2+ \\u2192 troponin \\u2192 uncover actin sites",
      },
      {
        front: "Outline excitation-contraction coupling at the neuromuscular junction.",
        back: "A motor neuron releases acetylcholine, depolarizing the sarcolemma. The action potential travels down T-tubules, triggering Ca2+ release from the sarcoplasmic reticulum (via DHP/ryanodine receptors). Ca2+ binds troponin to initiate contraction.",
        hint: "ACh \\u2192 AP \\u2192 T-tubule \\u2192 Ca2+ release",
      },
      {
        front: "What is the role of ATP in the cross-bridge cycle?",
        back: "ATP binding to myosin causes it to release actin; ATP hydrolysis cocks the myosin head; Pi release triggers the power stroke; ADP release follows. Without ATP, myosin cannot detach\\u2014this causes rigor mortis. ATP is needed for both contraction and relaxation (Ca2+ reuptake).",
        hint: "ATP detaches and re-cocks myosin",
      },
      {
        front: "Compare fast-twitch (Type II) and slow-twitch (Type I) muscle fibers.",
        back: "Slow-twitch (Type I): oxidative, fatigue-resistant, high myoglobin/mitochondria, red, for endurance. Fast-twitch (Type II): glycolytic, fatigue quickly, fewer mitochondria, white, for rapid powerful bursts. Type II has faster contraction velocity.",
        hint: "Type I endurance; Type II power",
      },
      {
        front: "Distinguish compact bone from spongy (cancellous) bone.",
        back: "Compact (cortical) bone is dense, forms the outer shell, and is organized into osteons (Haversian systems). Spongy bone has a porous trabecular lattice, is found at epiphyses, contains red marrow, and resists stress along lines of force while being lightweight.",
        hint: "Osteons vs. trabeculae",
      },
      {
        front: "What are osteoblasts, osteoclasts, and osteocytes?",
        back: "Osteoblasts build bone (deposit matrix, secrete osteoid). Osteoclasts (multinucleated, from monocyte lineage) resorb bone. Osteocytes are mature osteoblasts trapped in lacunae that maintain bone and sense mechanical stress. Bone is continuously remodeled by blast/clast balance.",
        hint: "Blasts build, clasts chew",
      },
      {
        front: "How do parathyroid hormone (PTH) and calcitonin regulate calcium?",
        back: "PTH raises blood calcium by stimulating osteoclast bone resorption, increasing renal Ca2+ reabsorption, and activating vitamin D for gut absorption. Calcitonin (from thyroid C cells) lowers blood calcium by inhibiting osteoclasts. They are antagonists.",
        hint: "PTH up, calcitonin down",
      },
      {
        front: "Define isometric vs. isotonic contraction, and tetanus.",
        back: "Isometric: muscle generates tension without changing length (e.g., holding a weight still). Isotonic: muscle changes length under constant load (lifting/lowering). Tetanus (physiology): sustained maximal contraction from rapid stimulation that prevents relaxation between twitches.",
        hint: "Same length vs. same tension",
      },
      {
        front: "What are the functions of the skeletal system?",
        back: "Support and structure, protection of organs (skull, ribcage), movement (levers for muscles), mineral storage (calcium, phosphate), hematopoiesis (blood cell production in red marrow), and fat storage (yellow marrow).",
        hint: "Support, protect, move, store, produce blood",
      },
      {
        front: "Worked example: Why does a lack of ATP cause rigor mortis?",
        back: "ATP is required for myosin to release actin. After death, ATP production stops, so myosin heads remain bound to actin in the attached state, and Ca2+ cannot be pumped back to the SR. Muscles lock in a stiff, contracted state until proteolysis eventually breaks the bonds.",
        hint: "No ATP \\u2192 myosin can't release",
      },
    ],
  },
  {
    slug: "mcat-psychology-behavior-development-mcat",
    cards: [
      {
        front: "Compare classical and operant conditioning.",
        back: "Classical conditioning (Pavlov) pairs a neutral stimulus with an unconditioned stimulus to elicit a conditioned response (involuntary, stimulus-driven). Operant conditioning (Skinner) shapes voluntary behavior through consequences\\u2014reinforcement increases behavior, punishment decreases it.",
        hint: "Associate stimuli vs. shape with consequences",
      },
      {
        front: "Distinguish positive/negative reinforcement and positive/negative punishment.",
        back: "Positive = add a stimulus; negative = remove a stimulus. Reinforcement increases behavior; punishment decreases it. So: positive reinforcement (add reward), negative reinforcement (remove aversive), positive punishment (add aversive), negative punishment (remove reward).",
        hint: "+/- = add/remove; reinforce/punish = increase/decrease",
      },
      {
        front: "Which reinforcement schedule produces the most resistant behavior, and why?",
        back: "Variable ratio (reinforcement after an unpredictable number of responses, e.g., gambling) produces the highest, steadiest response rate and is most resistant to extinction because the unpredictability sustains responding. Variable schedules generally outlast fixed ones.",
        hint: "Variable ratio = gambling",
      },
      {
        front: "Summarize Piaget's four stages of cognitive development.",
        back: "Sensorimotor (0-2): object permanence. Preoperational (2-7): symbolic thought, egocentrism, lacks conservation. Concrete operational (7-11): conservation, logical thought about concrete events. Formal operational (11+): abstract and hypothetical reasoning.",
        hint: "Senso, Preop, Concrete, Formal",
      },
      {
        front: "What are Erikson's psychosocial stages and their core conflicts (key ones)?",
        back: "Eight stages, each a conflict: trust vs. mistrust (infancy), autonomy vs. shame (toddler), initiative vs. guilt (preschool), industry vs. inferiority (school age), identity vs. role confusion (adolescence), intimacy vs. isolation (young adult), generativity vs. stagnation (middle), integrity vs. despair (old age).",
        hint: "Identity vs. role confusion = adolescence",
      },
      {
        front: "Outline Kohlberg's levels of moral development.",
        back: "Preconventional (morality based on punishment/reward and self-interest), Conventional (based on social approval and law/order), and Postconventional (based on social contracts and universal ethical principles). It progresses from self-focused to abstract principle-based reasoning.",
        hint: "Pre \\u2192 Conventional \\u2192 Post",
      },
      {
        front: "What did Vygotsky contribute, including the zone of proximal development?",
        back: "Vygotsky emphasized social and cultural influences on cognitive development. The zone of proximal development (ZPD) is the gap between what a learner can do alone and what they can do with guidance ('scaffolding') from a more knowledgeable other.",
        hint: "Social learning; ZPD + scaffolding",
      },
      {
        front: "What are the major attachment styles (Ainsworth's Strange Situation)?",
        back: "Secure (distressed when caregiver leaves, comforted on return), avoidant (little distress, avoids caregiver), anxious-ambivalent/resistant (intense distress, hard to soothe), and disorganized (inconsistent, confused behavior). Attachment style relates to caregiver responsiveness.",
        hint: "Secure, avoidant, ambivalent, disorganized",
      },
      {
        front: "Compare Freud's and other models of personality structure.",
        back: "Freud's psychoanalytic model: id (instinct, pleasure principle), ego (reality principle, mediator), superego (morality/conscience). Other approaches include humanistic (Maslow's hierarchy, Rogers' self-actualization), behaviorist, and trait theories (Big Five: OCEAN).",
        hint: "Id, ego, superego; Big Five = OCEAN",
      },
      {
        front: "What are the stages of development of attachment vs. parenting styles (Baumrind)?",
        back: "Baumrind's parenting styles: authoritative (high warmth + high control, best outcomes), authoritarian (low warmth + high control), permissive (high warmth + low control), and neglectful/uninvolved (low both). Authoritative is associated with the most competent, well-adjusted children.",
        hint: "Authoritative \\u2260 authoritarian",
      },
      {
        front: "Distinguish temperament from personality.",
        back: "Temperament is the innate, biologically based emotional and behavioral style present early in infancy (e.g., easy, difficult, slow-to-warm-up). Personality is the broader, enduring pattern of thoughts, feelings, and behaviors shaped by both temperament and environment over time.",
        hint: "Temperament = innate; personality = developed",
      },
      {
        front: "Common trap: negative reinforcement vs. punishment.",
        back: "Negative reinforcement INCREASES a behavior by removing an aversive stimulus (e.g., taking aspirin stops a headache, so you take it again). Punishment DECREASES behavior. Test-takers often wrongly equate 'negative' with 'bad/punishment'\\u2014'negative' only means removal.",
        hint: "Negative reinforcement still increases behavior",
      },
      {
        front: "Worked example: A child only behaves at school when the teacher randomly gives stickers. Which schedule, and what happens if stickers stop suddenly?",
        back: "This is a variable ratio schedule (reinforcement after an unpredictable number of good behaviors). Because variable ratio is highly resistant to extinction, the behavior persists for a long time even after stickers stop\\u2014unlike a fixed schedule, which extinguishes faster.",
        hint: "Variable ratio resists extinction",
      },
    ],
  },
  {
    slug: "mcat-physics-electricity-magnetism-mcat",
    cards: [
      {
        front: "State Coulomb's law and name its variables.",
        back: "$F = \\\\frac{kq_1 q_2}{r^2}$, where $F$ is the electrostatic force, $k \\\\approx 9 \\\\times 10^9\\\\ \\\\text{N·m}^2/\\\\text{C}^2$, $q_1, q_2$ are charges, and $r$ is the separation. Like charges repel, opposites attract. Force follows an inverse-square law.",
        hint: "$F = kq_1q_2/r^2$",
      },
      {
        front: "Define electric field and give its formula.",
        back: "The electric field $E = \\\\frac{F}{q} = \\\\frac{kQ}{r^2}$ is force per unit charge (N/C), a vector pointing away from positive and toward negative source charges. A test charge in the field feels $F = qE$.",
        hint: "$E = F/q = kQ/r^2$",
      },
      {
        front: "Distinguish electric potential (voltage) from electric potential energy.",
        back: "Electric potential $V = \\\\frac{kQ}{r}$ is potential energy per unit charge (volts, scalar). Potential energy $U = \\\\frac{kq_1 q_2}{r} = qV$. Note potential drops as $1/r$ while field drops as $1/r^2$. Charges move from high to low potential (positive) spontaneously.",
        hint: "$V = U/q = kQ/r$",
      },
      {
        front: "State Ohm's law and define resistance.",
        back: "$V = IR$, where $V$ is voltage (volts), $I$ is current (amps), and $R$ is resistance (ohms). Resistance opposes current flow; $R = \\\\frac{\\\\rho L}{A}$ where $\\\\rho$ is resistivity, $L$ length, and $A$ cross-sectional area.",
        hint: "$V = IR$",
      },
      {
        front: "How do resistors combine in series vs. parallel?",
        back: "Series: $R_{eq} = R_1 + R_2 + \\\\ldots$ (resistances add; same current, voltage divides). Parallel: $\\\\frac{1}{R_{eq}} = \\\\frac{1}{R_1} + \\\\frac{1}{R_2} + \\\\ldots$ (equivalent is less than the smallest; same voltage, current divides).",
        hint: "Series add; parallel reciprocals",
      },
      {
        front: "How do capacitors combine in series vs. parallel?",
        back: "Capacitors combine OPPOSITE to resistors. Parallel: $C_{eq} = C_1 + C_2 + \\\\ldots$. Series: $\\\\frac{1}{C_{eq}} = \\\\frac{1}{C_1} + \\\\frac{1}{C_2} + \\\\ldots$. Capacitance $C = \\\\frac{Q}{V}$; energy stored $U = \\\\frac{1}{2}CV^2$.",
        hint: "Capacitors are the reverse of resistors",
      },
      {
        front: "Give the formulas for electric power.",
        back: "$P = IV = I^2 R = \\\\frac{V^2}{R}$, in watts. Use $P = I^2R$ when current and resistance are known (e.g., heat dissipated in a resistor), and $P = V^2/R$ when voltage across the element is known.",
        hint: "$P = IV = I^2R = V^2/R$",
      },
      {
        front: "State Kirchhoff's two circuit laws.",
        back: "Junction (current) rule: the sum of currents entering a node equals the sum leaving (charge conservation). Loop (voltage) rule: the sum of voltage changes around any closed loop is zero (energy conservation). Use them to solve multi-loop circuits.",
        hint: "Junction = charge; loop = energy",
      },
      {
        front: "What is the magnetic force on a moving charge?",
        back: "$F = qvB\\\\sin\\\\theta$, where $q$ is charge, $v$ speed, $B$ magnetic field, and $\\\\theta$ the angle between $v$ and $B$. Direction is given by the right-hand rule. The force is zero when motion is parallel to $B$ and maximal when perpendicular.",
        hint: "$F = qvB\\\\sin\\\\theta$; right-hand rule",
      },
      {
        front: "What is the magnetic force on a current-carrying wire?",
        back: "$F = BIL\\\\sin\\\\theta$, where $B$ is field strength, $I$ current, $L$ wire length in the field, and $\\\\theta$ the angle between current direction and $B$. Direction from the right-hand rule; this is the basis of electric motors.",
        hint: "$F = BIL\\\\sin\\\\theta$",
      },
      {
        front: "Common trap: why does the magnetic force do no work on a moving charge?",
        back: "The magnetic force is always perpendicular to the velocity ($F \\\\perp v$). Since work $W = Fd\\\\cos\\\\theta$ and the angle between force and displacement is 90\\u00b0, the magnetic force does zero work and cannot change the particle's speed\\u2014only its direction.",
        hint: "Force always perpendicular to motion",
      },
      {
        front: "Worked example: Two 3 \\u03a9 resistors in parallel are connected to a 12 V battery. Find the total current.",
        back: "Parallel equivalent: $\\\\frac{1}{R_{eq}} = \\\\frac{1}{3} + \\\\frac{1}{3} = \\\\frac{2}{3}$, so $R_{eq} = 1.5\\\\ \\\\Omega$. Total current $I = V/R_{eq} = 12/1.5 = 8\\\\ \\\\text{A}$.",
        hint: "Find $R_{eq}$ first, then $V=IR$",
      },
      {
        front: "Worked example: How much energy is stored in a 2 \\u03bcF capacitor charged to 100 V?",
        back: "$U = \\\\frac{1}{2}CV^2 = \\\\frac{1}{2}(2\\\\times10^{-6})(100)^2 = \\\\frac{1}{2}(2\\\\times10^{-6})(10^4) = 0.01\\\\ \\\\text{J}$.",
        hint: "$U = \\\\frac{1}{2}CV^2$",
      },
    ],
  },
  {
    slug: "mcat-test-day-strategy-mcat",
    cards: [
      {
        front: "What are the four scored sections of the MCAT and their order?",
        back: "1) Chemical and Physical Foundations of Biological Systems (Chem/Phys), 2) Critical Analysis and Reasoning Skills (CARS), 3) Biological and Biochemical Foundations (Bio/Biochem), 4) Psychological, Social, and Biological Foundations (Psych/Soc). The full exam is about 7.5 hours with breaks.",
        hint: "Chem/Phys, CARS, Bio/Biochem, Psych/Soc",
      },
      {
        front: "How is the MCAT scored?",
        back: "Each of the four sections is scaled from 118 to 132, for a total of 472 to 528, with a midpoint of 500. Scores are scaled and percentile-ranked; there is no penalty for wrong answers, so never leave a question blank.",
        hint: "472-528; midpoint 500",
      },
      {
        front: "Why should you always guess and never leave a blank?",
        back: "The MCAT does not penalize wrong answers (no negative marking). An unanswered question is a guaranteed miss, while a guess has roughly a 25% chance of being correct. Eliminate obviously wrong choices first to raise your odds.",
        hint: "No penalty for guessing",
      },
      {
        front: "What is a sound pacing strategy for passage-based sections?",
        back: "Budget roughly 8-10 minutes per passage and don't over-invest in one hard question. Flag time sinks, answer with your best guess, and return if time allows. Track section time at checkpoints (e.g., halfway) to adjust pace.",
        hint: "~1.5 min/question; flag and move on",
      },
      {
        front: "How should you approach passages: read first or questions first?",
        back: "For science sections, skim the passage for structure and figures, then dive into questions, returning to find specific details. Many discrete and detail questions can be answered by targeted re-reading. Develop a consistent approach in practice so it's automatic on test day.",
        hint: "Skim for structure, mine for details",
      },
      {
        front: "What is the difference between passage-based and discrete questions?",
        back: "Passage-based questions are grouped around a passage and may require integrating its data. Discrete (standalone) questions test isolated content knowledge with no passage. Discretes are often quick points\\u2014answer them efficiently to bank time.",
        hint: "Discretes = quick content points",
      },
      {
        front: "What is the highlight and strikethrough strategy?",
        back: "Use the highlight tool to mark key passage details and the strikethrough tool to eliminate wrong answer choices. Process of elimination boosts accuracy and guessing odds, especially on EXCEPT/LEAST/NOT questions where you must invert your reasoning.",
        hint: "Eliminate to improve guessing odds",
      },
      {
        front: "How should you handle EXCEPT, NOT, and LEAST questions?",
        back: "These reverse the task: you are choosing the wrong/false statement, so the three 'correct/true' statements are the ones to eliminate. Underline the negative word and verify each choice's truth before selecting the odd one out\\u2014a common careless-error source.",
        hint: "Find the odd one out",
      },
      {
        front: "What is the recommended strategy for the breaks during the exam?",
        back: "There are optional breaks (two ten-minute breaks and one mid-exam thirty-minute break). Use them to eat, hydrate, use the restroom, and reset mentally\\u2014the test is a stamina event. Practice full-length exams with realistic breaks to build endurance.",
        hint: "Refuel and reset; stamina matters",
      },
      {
        front: "How can you manage test-day anxiety?",
        back: "Use slow diaphragmatic breathing, positive self-talk, and a quick reset between passages. Simulate test conditions during prep to reduce novelty. If you blank on a question, flag it and move on so anxiety doesn't cascade into wasted time.",
        hint: "Breathe, reset, keep moving",
      },
      {
        front: "What is the single most important prep tool, and why?",
        back: "AAMC full-length practice exams, because they are written by the test makers and best mirror real question style, difficulty, and interface. Review every wrong AND right answer to understand the reasoning, not just to memorize content.",
        hint: "Use official AAMC materials",
      },
      {
        front: "Common trap: changing answers and second-guessing.",
        back: "Only change an answer when you have a clear, specific reason (you misread, or found new passage support). Random second-guessing often converts correct answers to wrong ones. Trust well-reasoned first instincts and use flags deliberately.",
        hint: "Change only with a concrete reason",
      },
      {
        front: "Logistics: what should you do the day before and morning of the test?",
        back: "Day before: light review only, prepare ID and materials, sleep early. Morning of: eat a balanced meal, arrive early with valid ID, and bring snacks/water for breaks. Avoid cramming\\u2014rest and consistency matter more than last-minute content.",
        hint: "Rest, ID, snacks; don't cram",
      },
    ],
  },
];
