#!/usr/bin/env python3
"""
Rewrite the remaining Organic Chemistry interactive lessons with high-quality,
renderer-compatible content.

Output:
  src/data/interactive-lessons/{filePrefix}-part{1..7}.ts
Total files:
  15 topics x 7 parts = 105 files
"""

from __future__ import annotations

import hashlib
import os
import random
import textwrap
from typing import Dict, List, Sequence, Tuple

ROOT_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT_DIR = os.path.join(ROOT_DIR, "src", "data", "interactive-lessons")

Concept = Tuple[str, str]
ReactionPattern = Tuple[str, str, str, str]


TOPICS: List[Dict[str, object]] = [
    {
        "slug": "acids-bases-organic",
        "exportPrefix": "oChemAcidsBases",
        "filePrefix": "ochem-acids-bases-organic",
        "title": "Organic Acids and Bases",
        "partTitles": [
            "Brønsted-Lowry Language",
            "pKa and Equilibrium Direction",
            "Resonance and Inductive Effects",
            "Base Strength and Solvent Effects",
            "Acid-Base in Multistep Mechanisms",
            "Synthesis Decision Workshop",
            "Cumulative Mechanism Review",
        ],
        "contexts": [
            "ranking proton transfer steps in carbonyl chemistry",
            "predicting whether deprotonation is complete or reversible",
            "comparing conjugate base stabilization in substituted acids",
            "choosing between LDA, NaH, and alkoxide bases",
            "tracking proton shuttles in substitution-elimination pathways",
            "planning acid-base order in a two-step synthesis",
            "integrating pKa logic across mixed mechanism sets",
        ],
        "concepts": [
            ("Brønsted acid", "proton donor in a reaction step"),
            ("Brønsted base", "proton acceptor in a reaction step"),
            ("conjugate base", "species formed after an acid loses H+"),
            ("pKa", "log-scale measure of acid strength; lower means stronger acid"),
            ("equilibrium control", "proton transfer favors side with weaker acid/base pair"),
            ("resonance stabilization", "delocalization that lowers basicity of a conjugate base"),
            ("inductive effect", "electron withdrawal through sigma bonds alters acidity"),
            ("steric hindrance", "bulk can reduce basic-site accessibility"),
            ("kinetic deprotonation", "fast removal at less hindered site under low temperature"),
        ],
        "reactions": [
            ("NaH, THF", "strong, non-nucleophilic deprotonation", "forms carbanion/enolate precursor", "driven by H2 gas evolution"),
            ("LDA, -78 °C", "kinetic enolate conditions", "less substituted enolate dominates", "bulky base + low temperature"),
            ("NaOEt/EtOH", "equilibrating basic medium", "thermodynamic enolate mixture", "reversible proton transfer"),
            ("H3O+ workup", "acidic quench", "protonates anionic intermediates", "restores neutral functional groups"),
            ("NaHCO3 wash", "weak base extraction", "deprotonates carboxylic acids selectively", "used in acid/base separations"),
            ("CF3-substituted acid comparison", "strong inductive withdrawal", "lower pKa than alkyl analog", "conjugate base stabilized by -I effect"),
        ],
        "traps": [
            "A stronger base is not always the better nucleophile in protic solvent.",
            "pKa comparisons require matching acid forms, not isolated anions.",
            "Resonance and induction can outweigh hybridization in close pKa calls.",
            "An acid quench changes protonation state but usually not carbon skeleton connectivity.",
        ],
    },
    {
        "slug": "alkenes-reactions",
        "exportPrefix": "oChemAlkenes",
        "filePrefix": "ochem-alkenes-reactions",
        "title": "Alkene Reactions",
        "partTitles": [
            "Electrophilic Addition Foundations",
            "Regioselectivity: Markovnikov vs Anti-Markovnikov",
            "Stereochemical Outcomes of Addition",
            "Oxidation and Cleavage Patterns",
            "Hydroboration and Oxymercuration Contrast",
            "Synthesis Sequencing with Alkenes",
            "Comprehensive Product Prediction",
        ],
        "contexts": [
            "predicting products from protonation-initiated alkene additions",
            "choosing reagent sets to control where new bonds form",
            "deciding between syn and anti additions on cyclic alkenes",
            "matching oxidation level to exam product options",
            "contrasting carbocation pathways with concerted additions",
            "building two-step synthesis from an alkene intermediate",
            "solving mixed mechanism sets under time pressure",
        ],
        "concepts": [
            ("pi bond nucleophile", "alkene electrons attack electrophiles in first step"),
            ("carbocation intermediate", "planar cation that enables rearrangement risk"),
            ("Markovnikov addition", "electrophile adds to carbon with more hydrogens first"),
            ("anti-Markovnikov addition", "functional group ends on less substituted alkene carbon"),
            ("syn addition", "both new groups add to same alkene face"),
            ("anti addition", "new groups add to opposite faces"),
            ("osmium oxidation", "OsO4 gives vicinal syn diol"),
            ("ozonolysis", "O3 cleaves C=C into carbonyl fragments"),
            ("rearrangement", "hydride or alkyl shift to more stable carbocation"),
        ],
        "reactions": [
            ("HBr (no peroxides)", "electrophilic addition via carbocation", "Markovnikov bromoalkane", "rearrangement possible"),
            ("HBr, ROOR", "radical chain addition", "anti-Markovnikov bromoalkane", "no carbocation rearrangement"),
            ("Hg(OAc)2, H2O; NaBH4", "oxymercuration-demercuration", "Markovnikov alcohol", "avoids rearrangement"),
            ("BH3·THF; H2O2, NaOH", "hydroboration-oxidation", "anti-Markovnikov syn alcohol", "concerted hydroboration step"),
            ("Br2 in CCl4", "halonium-mediated addition", "vicinal anti dibromide", "ring opening from backside"),
            ("O3 then Me2S", "reductive ozonolysis", "aldehydes/ketones from cleavage", "double bond fully fragmented"),
        ],
        "traps": [
            "Markovnikov labels regiochemistry, not stereochemistry.",
            "Peroxides alter HBr behavior but not HCl/HI in standard coursework.",
            "Syn/anti outcome depends on mechanism, not alkene substitution alone.",
            "Ozonolysis products come from cleavage; no intact C=C remains.",
        ],
    },
    {
        "slug": "alkynes-synthesis",
        "exportPrefix": "oChemAlkynes",
        "filePrefix": "ochem-alkynes-synthesis",
        "title": "Alkyne Synthesis and Reactions",
        "partTitles": [
            "Terminal Alkyne Acidity",
            "Acetylide Formation and Alkylation",
            "Partial Hydrogenation Control",
            "Hydration Pathways",
            "Oxidative Cleavage of Alkynes",
            "Route Design from Alkynes",
            "Mixed Reagent Synthesis Review",
        ],
        "contexts": [
            "using terminal alkyne pKa to choose deprotonation reagents",
            "forming carbon-carbon bonds with acetylide nucleophiles",
            "stopping reduction at alkene rather than alkane",
            "predicting ketone vs aldehyde outcomes after hydration",
            "interpreting cleavage fragments for structure assignment",
            "planning shortest route to substituted carbonyl compounds",
            "integrating alkyne logic with alkene and carbonyl chemistry",
        ],
        "concepts": [
            ("terminal alkyne", "alkyne bearing acidic proton on sp carbon"),
            ("acetylide anion", "strong nucleophile/base formed by deprotonation"),
            ("SN2 alkylation", "acetylide attacks primary alkyl halide"),
            ("Lindlar catalyst", "poisoned catalyst giving cis alkene from alkyne"),
            ("dissolving metal reduction", "Na/NH3 gives trans alkene from alkyne"),
            ("tautomerization", "enol rearranges to carbonyl form"),
            ("hydration", "adds water equivalent across triple bond"),
            ("hydroboration-oxidation", "anti-Markovnikov hydration path for terminal alkynes"),
            ("oxidative cleavage", "strong oxidation splits alkyne to carboxyl products"),
        ],
        "reactions": [
            ("NaNH2, liquid NH3", "deprotonates terminal alkyne", "acetylide nucleophile formed", "requires terminal C-H"),
            ("acetylide + 1° alkyl bromide", "SN2 C-C bond formation", "chain-extended alkyne", "avoid 2°/3° substrates"),
            ("H2, Lindlar", "partial syn hydrogenation", "cis alkene", "stops before alkane"),
            ("Na, NH3(l)", "dissolving metal reduction", "trans alkene", "anti addition pattern"),
            ("HgSO4, H2SO4, H2O", "Markovnikov hydration", "ketone after tautomerization", "enol not isolated"),
            ("BH3 then H2O2/NaOH", "anti-Markovnikov hydration", "aldehyde from terminal alkyne", "via enol tautomerization"),
        ],
        "traps": [
            "Acetylide alkylation works best with primary halides due to SN2 constraints.",
            "Hydration products are usually carbonyls after tautomerization, not stable enols.",
            "Lindlar and dissolving metal reductions give opposite alkene stereochemistry.",
            "Terminal alkyne acidity is stronger than alkene/alkane C-H but still needs strong base.",
        ],
    },
    {
        "slug": "amines-nitrogen-compounds",
        "exportPrefix": "oChemAmines",
        "filePrefix": "ochem-amines-nitrogen-compounds",
        "title": "Amines and Nitrogen Compounds",
        "partTitles": [
            "Amine Classification and Basicity",
            "Synthesis of Amines",
            "Reductive Amination",
            "Diazonium and Aromatic Nitrogen Chemistry",
            "Amide and Imine Interconversions",
            "Chemoselective Nitrogen Transformations",
            "Integrated Nitrogen Mechanism Review",
        ],
        "contexts": [
            "ranking amine basicity in different solvents",
            "choosing synthesis route to primary vs tertiary amines",
            "building C-N bonds from carbonyl precursors",
            "predicting aromatic substitution using diazonium intermediates",
            "tracking protonation states of amines, imines, and amides",
            "planning sequence while avoiding over-alkylation",
            "combining nitrogen chemistry in synthesis maps",
        ],
        "concepts": [
            ("amine basicity", "depends on lone-pair availability and stabilization"),
            ("nucleophilic amine", "nitrogen lone pair attacks electrophilic centers"),
            ("over-alkylation", "successive alkylation can push to quaternary ammonium"),
            ("reductive amination", "carbonyl + amine then reduction to C-N single bond"),
            ("diazonium salt", "aryl-N2+ intermediate used for substitution"),
            ("amide resonance", "lone pair delocalization lowers amide basicity"),
            ("imine", "C=N product from carbonyl + primary amine"),
            ("Hofmann elimination", "quaternary ammonium gives less substituted alkene"),
            ("chemoselectivity", "reagent reacts with one functional group preferentially"),
        ],
        "reactions": [
            ("R-X + NH3 (excess)", "alkylation pathway", "primary amine major product", "excess ammonia suppresses over-alkylation"),
            ("R-CHO + R'NH2, then NaBH3CN", "reductive amination", "secondary amine", "mild reducing agent keeps carbonyl control"),
            ("R-COCl + R'NH2", "acyl substitution", "amide", "amine acts as nucleophile and base"),
            ("ArNH2 + NaNO2/HCl (0-5 °C)", "diazotization", "aryl diazonium salt", "temperature control is critical"),
            ("ArN2+ + CuBr", "Sandmeyer substitution", "aryl bromide", "N2 is leaving group"),
            ("quaternary ammonium hydroxide, heat", "Hofmann elimination", "less substituted alkene", "steric pathway control"),
        ],
        "traps": [
            "Amides are far less basic than amines because lone pair is resonance-delocalized.",
            "Reductive amination is not simple direct SN2 on carbonyl carbon.",
            "Diazonium salts require cold conditions to avoid decomposition.",
            "Over-alkylation is common when alkyl halide is not carefully limited.",
        ],
    },
    {
        "slug": "amino-acids-proteins",
        "exportPrefix": "oChemAminoAcids",
        "filePrefix": "ochem-amino-acids-proteins",
        "title": "Amino Acids and Proteins",
        "partTitles": [
            "Amino Acid Structure and Ionization",
            "pI and Buffering Logic",
            "Peptide Bond Formation",
            "Protein Levels of Structure",
            "Side-Chain Reactivity",
            "Biochemical Mechanism Applications",
            "Comprehensive Amino Acid Review",
        ],
        "contexts": [
            "predicting charge state at physiological and nonphysiological pH",
            "solving isoelectric-point and titration curve questions",
            "tracking condensation and hydrolysis of peptide bonds",
            "linking noncovalent forces to folding outcomes",
            "using side-chain chemistry in catalytic mechanisms",
            "analyzing mutation effects on structure and function",
            "integrating acid-base and stereochemistry in biopolymer prompts",
        ],
        "concepts": [
            ("zwitterion", "species containing both positive and negative charges"),
            ("isoelectric point (pI)", "pH where net charge is zero"),
            ("peptide bond", "amide linkage between amino acid residues"),
            ("primary structure", "linear amino acid sequence"),
            ("secondary structure", "local alpha-helix and beta-sheet motifs"),
            ("tertiary structure", "3D fold from side-chain interactions"),
            ("disulfide bond", "covalent S-S linkage between cysteine residues"),
            ("denaturation", "loss of higher-order structure without peptide cleavage"),
            ("buffer region", "pH range where conjugate acid/base pair resists change"),
        ],
        "reactions": [
            ("amino acid + amino acid, coupling reagent", "condensation", "peptide bond formed", "protecting groups often required"),
            ("acidic hydrolysis", "amide cleavage", "free amino acids from peptide", "breaks peptide backbone"),
            ("base-promoted hydrolysis", "amide cleavage under basic conditions", "carboxylate products", "irreversible in strong base"),
            ("oxidative cysteine coupling", "thiol oxidation", "disulfide bridge", "stabilizes extracellular proteins"),
            ("ninhydrin test", "amine detection", "colored complex", "used in amino acid analysis"),
            ("electrophoresis at chosen pH", "charge-based migration", "separation by net charge", "relative to pI values"),
        ],
        "traps": [
            "At pH = pI, amino acids are not uncharged molecules; they are zwitterionic on average.",
            "Denaturation changes folding but does not normally hydrolyze peptide bonds.",
            "Side-chain pKa values shift in proteins due to local environment.",
            "Peptide bond rotation is restricted by partial double-bond character.",
        ],
    },
    {
        "slug": "aromatic-compounds-benzene",
        "exportPrefix": "oChemAromatic",
        "filePrefix": "ochem-aromatic-compounds-benzene",
        "title": "Aromatic Compounds and Benzene",
        "partTitles": [
            "Aromaticity Criteria",
            "Resonance and Aromatic Stabilization",
            "Substituent Effects on Ring Reactivity",
            "Polycyclic Aromatic Systems",
            "Aromatic vs Antiaromatic Cases",
            "Synthesis Planning with Aromatics",
            "High-Yield Aromatic Review",
        ],
        "contexts": [
            "classifying cyclic conjugated systems by aromatic behavior",
            "drawing resonance contributors without violating octets",
            "predicting ring activation and deactivation trends",
            "comparing fused-ring stabilization patterns",
            "testing Huckel counts under charged conditions",
            "choosing aromatic transformations in multistep routes",
            "integrating aromatic logic with EAS and substitution questions",
        ],
        "concepts": [
            ("aromaticity", "cyclic, planar, fully conjugated system with 4n+2 pi electrons"),
            ("antiaromaticity", "cyclic planar conjugated system with 4n pi electrons"),
            ("nonaromatic", "fails planarity or conjugation requirement"),
            ("Huckel rule", "4n+2 pi electron count predicts aromatic stabilization"),
            ("ring current", "magnetic anisotropy signature of aromatic systems"),
            ("resonance contributor", "valid Lewis structure sharing electron delocalization"),
            ("benzylic position", "carbon adjacent to aromatic ring"),
            ("activation", "substituent increases EAS rate"),
            ("deactivation", "substituent decreases EAS rate"),
        ],
        "reactions": [
            ("Br2, FeBr3", "electrophilic aromatic substitution", "aryl bromide", "aromaticity restored after deprotonation"),
            ("HNO3, H2SO4", "nitration", "nitrobenzene derivative", "forms nitronium electrophile"),
            ("SO3, H2SO4", "sulfonation", "aryl sulfonic acid", "reversible under steam/acid"),
            ("RCl, AlCl3", "Friedel-Crafts alkylation", "alkylbenzene", "carbocation rearrangement possible"),
            ("RCOCl, AlCl3", "Friedel-Crafts acylation", "aryl ketone", "no acylium rearrangement"),
            ("KMnO4, heat", "benzylic oxidation", "benzoic acid derivative", "requires benzylic C-H"),
        ],
        "traps": [
            "Aromatic classification depends on electron count and geometry simultaneously.",
            "Friedel-Crafts alkylation can over-alkylate activated rings.",
            "Not every resonance drawing represents equivalent contributor weight.",
            "Benzylic oxidation needs at least one benzylic hydrogen.",
        ],
    },
    {
        "slug": "carbohydrates-biochemistry",
        "exportPrefix": "oChemCarbs",
        "filePrefix": "ochem-carbohydrates-biochemistry",
        "title": "Carbohydrates in Organic Chemistry",
        "partTitles": [
            "Monosaccharide Structures",
            "Cyclization and Anomers",
            "Reactivity of Hemiacetals and Acetals",
            "Oxidation and Reduction of Sugars",
            "Glycosidic Bond Formation",
            "Problem-Solving with Sugar Mechanisms",
            "Comprehensive Carbohydrate Review",
        ],
        "contexts": [
            "interconverting Fischer and Haworth representations",
            "assigning alpha/beta anomers after ring closure",
            "predicting mutarotation and acetal stability",
            "tracking selective oxidation at aldehyde positions",
            "building disaccharides with stereochemical control",
            "linking carbohydrate reactions to biochemical pathways",
            "integrating stereochemistry and mechanism in exam questions",
        ],
        "concepts": [
            ("monosaccharide", "single carbohydrate unit with multiple hydroxyls"),
            ("anomeric carbon", "former carbonyl carbon in cyclic sugar"),
            ("alpha anomer", "anomeric substituent trans to CH2OH in D-sugars"),
            ("beta anomer", "anomeric substituent cis to CH2OH in D-sugars"),
            ("mutarotation", "equilibration between anomers via open-chain form"),
            ("hemiacetal", "functional group from alcohol addition to aldehyde"),
            ("acetal", "double-alkoxy carbon stable to base"),
            ("glycosidic bond", "acetal linkage connecting sugar units"),
            ("reducing sugar", "sugar that can open to an oxidizable carbonyl form"),
        ],
        "reactions": [
            ("ROH, acid catalyst", "acetal formation", "glycoside/acetal at anomeric carbon", "locks anomeric configuration"),
            ("H2O, acid", "acetal hydrolysis", "returns hemiacetal + alcohol", "reversible under acidic conditions"),
            ("NaBH4", "carbonyl reduction", "alditol formation", "reduces open-chain carbonyl"),
            ("Br2/H2O", "mild oxidation", "aldonic acid", "selective for aldehyde oxidation"),
            ("periodate cleavage", "vicinal diol cleavage", "fragmented carbonyl products", "diagnostic for diol arrangement"),
            ("glycosyl donor + acceptor OH", "glycosidic coupling", "disaccharide linkage", "stereochemistry controlled by protecting groups"),
        ],
        "traps": [
            "Anomers differ only at the anomeric center, not every stereocenter.",
            "Acetals are stable in base but hydrolyze in acid.",
            "A nonreducing sugar lacks a free anomeric hemiacetal.",
            "Haworth orientation must be tied back to D/L assignment carefully.",
        ],
    },
    {
        "slug": "carboxylic-acids-derivatives",
        "exportPrefix": "oChemCarboxylicAcids",
        "filePrefix": "ochem-carboxylic-acids-derivatives",
        "title": "Carboxylic Acids and Derivatives",
        "partTitles": [
            "Acid Derivative Reactivity Ladder",
            "Nucleophilic Acyl Substitution",
            "Esterification and Hydrolysis",
            "Amide Formation and Cleavage",
            "Acyl Transfer in Synthesis",
            "Multistep Derivative Interconversion",
            "Exam-Level Carbonyl Strategy Review",
        ],
        "contexts": [
            "ranking acyl chlorides, anhydrides, esters, and amides by reactivity",
            "predicting leaving-group departure in tetrahedral intermediates",
            "controlling equilibrium in Fischer esterification",
            "forming amides from activated carboxylic acids",
            "mapping acyl substitutions across synthetic sequences",
            "choosing chemoselective conversions between derivatives",
            "solving mechanism-heavy carbonyl exam sets",
        ],
        "concepts": [
            ("acyl chloride", "most reactive common carboxylic acid derivative"),
            ("anhydride", "derivative containing two acyl groups linked by oxygen"),
            ("ester", "carboxylic derivative with alkoxy leaving group"),
            ("amide", "least reactive common derivative due to resonance donation"),
            ("tetrahedral intermediate", "addition intermediate before elimination"),
            ("nucleophilic acyl substitution", "addition-elimination at acyl carbon"),
            ("Fischer esterification", "acid-catalyzed carboxylic acid + alcohol condensation"),
            ("saponification", "base-promoted irreversible ester hydrolysis"),
            ("leaving-group ability", "stability of departing group controls rate"),
        ],
        "reactions": [
            ("RCOCl + ROH, pyridine", "acyl substitution", "ester", "fast due to good chloride leaving group"),
            ("RCO2H + ROH, H+", "Fischer esterification", "equilibrium ester product", "remove water to drive conversion"),
            ("ester + NaOH, heat", "saponification", "carboxylate + alcohol", "irreversible under basic conditions"),
            ("RCOCl + NH3", "amidation", "primary amide", "requires base scavenging for HCl"),
            ("amide + H3O+, heat", "acidic hydrolysis", "carboxylic acid + ammonium", "harsh conditions required"),
            ("LiAlH4 reduction", "strong hydride delivery", "alcohols/amines from derivatives", "workup controls isolated form"),
        ],
        "traps": [
            "Derivative reactivity tracks leaving-group quality and resonance donation.",
            "Amides are difficult to hydrolyze under mild conditions.",
            "Fischer esterification is reversible; equilibrium control matters.",
            "Saponification gives carboxylate until acidic workup protonates it.",
        ],
    },
    {
        "slug": "conjugated-systems-dienes",
        "exportPrefix": "oChemConjugated",
        "filePrefix": "ochem-conjugated-systems-dienes",
        "title": "Conjugated Systems and Dienes",
        "partTitles": [
            "Conjugation Basics",
            "Resonance and Allylic Stabilization",
            "1,2 vs 1,4 Addition",
            "Kinetic vs Thermodynamic Control",
            "Diels-Alder Fundamentals",
            "Synthesis with Conjugated Intermediates",
            "Integrated Diene Review",
        ],
        "contexts": [
            "tracking electron delocalization across adjacent p orbitals",
            "predicting allylic cation and radical stability",
            "discriminating 1,2 and 1,4 electrophilic additions",
            "using temperature to shift product distribution",
            "assigning regio- and stereochemistry in cycloadditions",
            "building cyclic targets from diene chemistry",
            "integrating conjugation with aromatic and radical topics",
        ],
        "concepts": [
            ("conjugation", "alternating pi and sigma bonds allowing delocalization"),
            ("allylic intermediate", "cation/radical adjacent to double bond"),
            ("1,2-addition", "electrophile and nucleophile add across adjacent carbons"),
            ("1,4-addition", "net addition across conjugated system termini"),
            ("kinetic product", "forms faster via lower activation barrier"),
            ("thermodynamic product", "more stable product favored at equilibrium"),
            ("Diels-Alder reaction", "[4+2] cycloaddition of diene and dienophile"),
            ("s-cis conformation", "required diene geometry for Diels-Alder"),
            ("endo preference", "secondary orbital interactions favor endo transition state"),
        ],
        "reactions": [
            ("HBr, low temperature", "electrophilic addition to conjugated diene", "1,2-product favored", "kinetic control"),
            ("HBr, higher temperature", "reversible addition", "1,4-product favored", "thermodynamic control"),
            ("Br2 allylic conditions", "allylic bromination", "allylic bromide", "resonance-stabilized radical"),
            ("diene + maleic anhydride, heat", "Diels-Alder cycloaddition", "cyclohexene adduct", "concerted pericyclic process"),
            ("UV isomerization", "double-bond geometry change", "conjugated isomer distribution", "photochemical pathway"),
            ("Pd-catalyzed coupling of allylic substrates", "allylic substitution", "rearranged conjugated product", "regioselective catalyst control"),
        ],
        "traps": [
            "1,2 and 1,4 products can both form from the same allylic intermediate.",
            "Temperature can switch dominant product by kinetic vs thermodynamic control.",
            "Diels-Alder requires diene in s-cis conformation.",
            "Conjugation lowers energy but does not make systems inert.",
        ],
    },
    {
        "slug": "electrophilic-aromatic-substitution",
        "exportPrefix": "oChemEAS",
        "filePrefix": "ochem-electrophilic-aromatic-substitution",
        "title": "Electrophilic Aromatic Substitution",
        "partTitles": [
            "EAS Mechanism Core",
            "Directing Effects",
            "Activating vs Deactivating Groups",
            "Nitration, Sulfonation, Halogenation",
            "Friedel-Crafts Strategies",
            "Multistep Orientation Planning",
            "Comprehensive EAS Review",
        ],
        "contexts": [
            "balancing aromatic stabilization with substitution reactivity",
            "predicting ortho/para versus meta outcomes",
            "estimating relative rates among substituted benzenes",
            "choosing reagent conditions for single substitution",
            "avoiding rearrangement and polyalkylation issues",
            "planning order of substituent installation",
            "solving mixed directing-effect problem sets",
        ],
        "concepts": [
            ("sigma complex", "arenium ion intermediate after electrophile attack"),
            ("ortho/para director", "substituent that donates electron density to o/p positions"),
            ("meta director", "electron-withdrawing substituent directing meta substitution"),
            ("activating group", "substituent increasing ring reactivity"),
            ("deactivating group", "substituent decreasing ring reactivity"),
            ("halogen exception", "halogens direct ortho/para but deactivate overall"),
            ("electrophile generation", "acid/Lewis acid forms strongly reactive species"),
            ("polyalkylation", "multiple alkyl substitutions after activation"),
            ("blocking group strategy", "temporary substituent controls orientation"),
        ],
        "reactions": [
            ("HNO3/H2SO4", "nitration", "nitro-substituted aromatic", "forms NO2+ electrophile"),
            ("Br2/FeBr3", "halogenation", "aryl bromide", "sigma complex then deprotonation"),
            ("SO3/H2SO4", "sulfonation", "aryl sulfonic acid", "reversible under steam"),
            ("RCl/AlCl3", "Friedel-Crafts alkylation", "alkylbenzene", "rearrangement and overreaction risk"),
            ("RCOCl/AlCl3", "Friedel-Crafts acylation", "aryl ketone", "single acylation is typical"),
            ("desulfonation (H3O+, heat)", "removal of SO3H blocker", "regio-controlled aromatic product", "used in sequence design"),
        ],
        "traps": [
            "Directing effects come from substituent electronics in sigma-complex resonance forms.",
            "Halogens are deactivating despite ortho/para direction.",
            "Friedel-Crafts often fails on strongly deactivated rings.",
            "Order of substitution can determine whether route is feasible.",
        ],
    },
    {
        "slug": "enolate-chemistry",
        "exportPrefix": "oChemEnolate",
        "filePrefix": "ochem-enolate-chemistry",
        "title": "Enolate Chemistry",
        "partTitles": [
            "Carbonyl Acidity and Enolate Formation",
            "Kinetic vs Thermodynamic Enolates",
            "Aldol Addition and Condensation",
            "Claisen and Dieckmann Reactions",
            "Michael and Robinson Sequences",
            "Retrosynthesis with Enolate Logic",
            "Comprehensive Enolate Synthesis Review",
        ],
        "contexts": [
            "identifying alpha positions and deprotonation outcomes",
            "controlling enolate geometry by base and temperature",
            "predicting beta-hydroxy and enone products",
            "forming beta-keto esters through acyl substitution",
            "constructing complex carbon skeletons with conjugate addition",
            "breaking targets into enolate and electrophile synthons",
            "integrating aldol, Claisen, and Michael in exam synthesis",
        ],
        "concepts": [
            ("alpha hydrogen", "proton adjacent to carbonyl and relatively acidic"),
            ("enolate", "resonance-stabilized anion of carbonyl compound"),
            ("kinetic enolate", "less substituted enolate formed fastest"),
            ("thermodynamic enolate", "more substituted enolate formed at equilibrium"),
            ("aldol addition", "enolate adds to carbonyl giving beta-hydroxy product"),
            ("aldol condensation", "dehydration of aldol product to enone"),
            ("Claisen condensation", "ester enolate acylation yielding beta-keto ester"),
            ("Michael addition", "1,4-conjugate addition to alpha,beta-unsaturated carbonyl"),
            ("Robinson annulation", "Michael addition followed by intramolecular aldol"),
        ],
        "reactions": [
            ("LDA, THF, -78 °C", "kinetic enolate generation", "less substituted enolate", "irreversible deprotonation"),
            ("NaOEt/EtOH", "equilibrating base", "thermodynamic enolate", "reversible proton exchange"),
            ("enolate + aldehyde", "aldol addition", "beta-hydroxy carbonyl", "new C-C bond formed"),
            ("aldol product, heat", "dehydration", "alpha,beta-unsaturated carbonyl", "conjugation drives elimination"),
            ("ester + alkoxide base", "Claisen condensation", "beta-keto ester", "requires matching alkoxide"),
            ("enolate + enone", "Michael addition", "1,4-adduct", "soft nucleophile pathway"),
        ],
        "traps": [
            "Not every base gives kinetic enolate control; conditions matter.",
            "Aldol addition and condensation are distinct steps.",
            "Claisen reactions require esters with alpha hydrogens and suitable alkoxide base.",
            "Conjugate (1,4) and direct (1,2) addition give different bond placements.",
        ],
    },
    {
        "slug": "lipids-nucleic-acids",
        "exportPrefix": "oChemLipids",
        "filePrefix": "ochem-lipids-nucleic-acids",
        "title": "Lipids and Nucleic Acids",
        "partTitles": [
            "Lipid Functional Group Fundamentals",
            "Fatty Acid Reactivity",
            "Phospholipids and Membrane Chemistry",
            "Nucleotide Structure and Bonding",
            "Hydrolysis and Polymerization Patterns",
            "Biochemical Mechanism Integration",
            "Comprehensive Lipid/Nucleic Acid Review",
        ],
        "contexts": [
            "classifying lipid classes by backbone and linkage type",
            "predicting reactions at ester and unsaturation sites",
            "connecting amphiphilicity to membrane behavior",
            "tracking phosphodiester bond chemistry in nucleotides",
            "contrasting hydrolysis stability under acid/base conditions",
            "mapping reactivity to biochemical processing steps",
            "integrating structural and mechanistic exam prompts",
        ],
        "concepts": [
            ("triacylglycerol", "glycerol triester storing chemical energy"),
            ("phospholipid", "amphiphilic lipid with phosphate-containing headgroup"),
            ("saponification", "base hydrolysis of fatty acid esters to soaps"),
            ("unsaturation", "C=C bonds in fatty chains affecting packing"),
            ("nucleotide", "base + sugar + phosphate monomer"),
            ("phosphodiester bond", "linkage joining nucleotides in nucleic acids"),
            ("hydrogen bonding", "noncovalent pairing interactions between nucleobases"),
            ("amphiphile", "molecule with both hydrophilic and hydrophobic regions"),
            ("hydrolytic stability", "resistance of linkage to cleavage in given conditions"),
        ],
        "reactions": [
            ("triacylglycerol + NaOH, heat", "ester hydrolysis", "glycerol + fatty acid salts", "soap formation"),
            ("acid-catalyzed esterification", "fatty acid coupling", "re-formed ester", "equilibrium-driven process"),
            ("H2, Pd/C on unsaturated lipid", "hydrogenation", "more saturated chain", "raises melting behavior"),
            ("phosphodiester cleavage (nuclease conditions)", "backbone hydrolysis", "shorter oligonucleotide fragments", "mechanism depends on catalyst"),
            ("phosphorylation of nucleoside", "phosphate transfer", "nucleotide", "requires activated phosphate donor"),
            ("amide coupling in lipid-modified molecules", "acyl transfer", "amide-linked lipid conjugate", "seen in signaling molecules"),
        ],
        "traps": [
            "Hydrogenation changes unsaturation but not carbon chain length.",
            "Phosphodiester bonds are covalent; base pairing is noncovalent.",
            "Saponification under base gives carboxylate salts until acidified.",
            "Membrane behavior depends on both headgroup and tail composition.",
        ],
    },
    {
        "slug": "nucleophilic-substitution",
        "exportPrefix": "oChemSN",
        "filePrefix": "ochem-nucleophilic-substitution",
        "title": "Nucleophilic Substitution",
        "partTitles": [
            "SN1 and SN2 Foundations",
            "Substrate Structure Effects",
            "Nucleophile and Solvent Control",
            "Stereochemical Consequences",
            "Competition with Elimination",
            "Synthesis Decision Trees",
            "Comprehensive Substitution Review",
        ],
        "contexts": [
            "choosing between concerted and stepwise substitution pathways",
            "analyzing primary, secondary, tertiary substrate outcomes",
            "predicting rate changes with solvent polarity and nucleophile strength",
            "tracking inversion, retention, and racemization patterns",
            "balancing substitution versus elimination under exam constraints",
            "mapping reagent choices to target products",
            "integrating mechanism evidence from kinetics and stereochemistry",
        ],
        "concepts": [
            ("SN2", "one-step backside attack with inversion"),
            ("SN1", "two-step substitution through carbocation intermediate"),
            ("leaving group", "group that departs with electron pair"),
            ("nucleophile strength", "reactivity of electron pair donor toward electrophile"),
            ("protic solvent", "solvent that hydrogen-bonds and can dampen nucleophiles"),
            ("aprotic solvent", "polar solvent that enhances anionic nucleophile reactivity"),
            ("Walden inversion", "configuration inversion at SN2 stereocenter"),
            ("racemization", "partial mixture from planar carbocation attack"),
            ("substrate sterics", "crowding around electrophilic carbon controls pathway"),
        ],
        "reactions": [
            ("1° alkyl bromide + NaCN in DMSO", "SN2", "nitrile substitution product", "strong nucleophile + aprotic solvent"),
            ("3° alkyl chloride in H2O", "SN1 solvolysis", "tertiary alcohol substitution", "carbocation intermediate"),
            ("2° substrate + NaI in acetone", "Finkelstein-type substitution", "alkyl iodide", "driven by precipitation"),
            ("benzyl halide + methanol", "substitution at benzylic center", "ether product", "resonance stabilizes intermediate"),
            ("allylic halide + nucleophile", "substitution with resonance stabilization", "allylic substitution product", "fast relative to unactivated analog"),
            ("strong base, heat on 2° halide", "E2 competition", "alkene side product", "must account for elimination"),
        ],
        "traps": [
            "Strong nucleophile does not guarantee SN2 on heavily hindered substrates.",
            "SN1 stereochemistry often trends toward racemization, not full inversion.",
            "Solvent effects can reverse expected nucleophile ordering.",
            "Always evaluate elimination when base strength and heat are present.",
        ],
    },
    {
        "slug": "radical-reactions",
        "exportPrefix": "oChemRadicals",
        "filePrefix": "ochem-radical-reactions",
        "title": "Radical Reactions",
        "partTitles": [
            "Radical Mechanism Foundations",
            "Initiation, Propagation, Termination",
            "Halogenation Selectivity",
            "Allylic and Benzylic Radical Chemistry",
            "Radical Additions to Alkenes",
            "Synthesis with Radical Steps",
            "Comprehensive Radical Review",
        ],
        "contexts": [
            "tracking chain reactions under thermal or photochemical conditions",
            "identifying where radicals are generated and consumed",
            "predicting regioselectivity from radical stability",
            "using resonance-stabilized radical intermediates",
            "applying peroxide-initiated additions to alkenes",
            "combining ionic and radical steps in synthesis planning",
            "solving mechanism and selectivity mixed sets",
        ],
        "concepts": [
            ("homolysis", "bond cleavage giving one electron to each fragment"),
            ("radical chain", "self-propagating sequence of radical steps"),
            ("initiation", "step that first generates radicals"),
            ("propagation", "steps that consume and regenerate radicals"),
            ("termination", "radical-radical combination removing chain carriers"),
            ("radical stability", "tertiary and resonance-stabilized radicals are favored"),
            ("allylic radical", "radical adjacent to C=C with resonance support"),
            ("NBS bromination", "allylic/benzylic bromination under radical conditions"),
            ("peroxide effect", "HBr adds anti-Markovnikov via radical pathway"),
        ],
        "reactions": [
            ("Br2, hν", "radical halogenation", "alkyl bromide at most substituted site", "Br· is selective"),
            ("Cl2, hν", "radical chlorination", "mixture of chlorinated products", "less selective than bromination"),
            ("NBS, hν", "allylic bromination", "allylic bromide", "maintains alkene position overall"),
            ("HBr, ROOR", "radical addition to alkene", "anti-Markovnikov bromoalkane", "chain process with Br·"),
            ("AIBN initiator", "radical generation", "chain starts under heat", "common azo initiator"),
            ("thiol-ene conditions", "radical addition", "anti-Markovnikov thioether", "useful click-like transformation"),
        ],
        "traps": [
            "Initiation is usually short; propagation controls product distribution.",
            "Bromination is slower but more selective than chlorination.",
            "Peroxide effect is classically reliable for HBr, not broadly all HX.",
            "Radical inhibitors can suppress chain length and conversion.",
        ],
    },
    {
        "slug": "stereochemistry-chirality",
        "exportPrefix": "oChemStereo",
        "filePrefix": "ochem-stereochemistry-chirality",
        "title": "Stereochemistry and Chirality",
        "partTitles": [
            "Chiral Centers and Symmetry",
            "R/S Assignment",
            "Enantiomers vs Diastereomers",
            "Conformations and Stereochemical Outcome",
            "Stereoselective Mechanisms",
            "Synthesis with Stereochemical Control",
            "Cumulative Stereochemistry Review",
        ],
        "contexts": [
            "detecting chirality and hidden symmetry in structures",
            "assigning absolute configuration quickly under exam timing",
            "classifying stereoisomer relationships in product sets",
            "linking conformer populations to reactivity",
            "predicting stereochemical outcomes from mechanism type",
            "planning routes to maximize stereochemical fidelity",
            "integrating stereochemistry across substitution and addition reactions",
        ],
        "concepts": [
            ("chiral center", "tetrahedral atom bonded to four different substituents"),
            ("R/S configuration", "absolute stereochemical descriptor from CIP ranking"),
            ("enantiomers", "non-superimposable mirror-image stereoisomers"),
            ("diastereomers", "stereoisomers that are not mirror images"),
            ("meso compound", "achiral molecule containing stereocenters and internal symmetry"),
            ("optical rotation", "rotation of plane-polarized light by chiral compounds"),
            ("racemic mixture", "1:1 enantiomer mixture with zero net rotation"),
            ("stereospecific reaction", "mechanism dictates one stereochemical relation"),
            ("conformational analysis", "chair/rotamer populations influence reaction trajectory"),
        ],
        "reactions": [
            ("SN2 at stereocenter", "backside displacement", "inverted configuration product", "Walden inversion observed"),
            ("SN1 at stereocenter", "carbocation pathway", "partial racemization", "both faces can be attacked"),
            ("Br2 addition to alkene", "anti addition via halonium", "trans vicinal dibromide", "stereospecific anti outcome"),
            ("OsO4 dihydroxylation", "syn addition", "cis vicinal diol", "concerted oxygen delivery"),
            ("epoxidation then acid opening", "stereochemical relay", "anti diol after opening", "regioselective protonated epoxide attack"),
            ("chair flip in cyclohexane", "conformational interconversion", "axial/equatorial swap", "reactivity follows lowest-energy conformer"),
        ],
        "traps": [
            "R/S assignment depends on CIP priority and viewing orientation simultaneously.",
            "Meso compounds are optically inactive despite stereocenters.",
            "Stereoselective and stereospecific are related but not identical terms.",
            "Conformational preference can dominate observed stereochemical product ratio.",
        ],
    },
]


def rotate(items: Sequence[Tuple], offset: int) -> List[Tuple]:
    offset = offset % len(items)
    return list(items[offset:] + items[:offset])


def stable_shuffle(options: Sequence[str], seed_key: str) -> List[str]:
    seed = int(hashlib.sha256(seed_key.encode("utf-8")).hexdigest()[:16], 16)
    rng = random.Random(seed)
    out = list(options)
    rng.shuffle(out)
    return out


def q(value: str) -> str:
    return value.replace("\\", "\\\\").replace("'", "\\'")


def escape_template(value: str) -> str:
    return value.replace("`", "\\`").replace("${", "\\${")


def format_content_block(text: str, indent: int = 6) -> str:
    cleaned = textwrap.dedent(text).strip("\n")
    escaped = escape_template(cleaned)
    prefix = " " * indent
    return "\n".join(f"{prefix}{line}" if line else prefix for line in escaped.splitlines())


def render_text_section(section_id: str, content: str) -> str:
    return (
        "    {\n"
        f"      id: '{q(section_id)}',\n"
        "      type: 'text' as const,\n"
        "      content: `\n"
        f"{format_content_block(content)}\n"
        "      `\n"
        "    }"
    )


def render_mcq_section(section_id: str, content: str, questions: List[Dict[str, object]]) -> str:
    question_chunks = []
    for question in questions:
        option_lines = ",\n".join(f"              '{q(opt)}'" for opt in question["options"])
        question_chunks.append(
            "          {\n"
            f"            question: '{q(question['question'])}',\n"
            "            options: [\n"
            f"{option_lines}\n"
            "            ],\n"
            f"            correctAnswer: {question['correctAnswer']},\n"
            f"            explanation: '{q(question['explanation'])}'\n"
            "          }"
        )

    questions_block = ",\n".join(question_chunks)
    return (
        "    {\n"
        f"      id: '{q(section_id)}',\n"
        "      type: 'multiple-choice' as const,\n"
        "      content: `\n"
        f"{format_content_block(content)}\n"
        "      `,\n"
        "      exercise: {\n"
        "        questions: [\n"
        f"{questions_block}\n"
        "        ]\n"
        "      }\n"
        "    }"
    )


def render_input_section(
    section_id: str,
    content: str,
    answers: List[str],
    hint1: str,
    hint2: str,
    hint3: str,
    explanation: str,
) -> str:
    answers_block = ", ".join(f"'{q(ans)}'" for ans in answers)
    return (
        "    {\n"
        f"      id: '{q(section_id)}',\n"
        "      type: 'input-boxes' as const,\n"
        "      content: `\n"
        f"{format_content_block(content)}\n"
        "      `,\n"
        "      exercise: {\n"
        "        boxes: 3,\n"
        f"        correctAnswers: [{answers_block}],\n"
        f"        hint1: '{q(hint1)}',\n"
        f"        hint2: '{q(hint2)}',\n"
        f"        hint3: '{q(hint3)}',\n"
        f"        explanation: '{q(explanation)}'\n"
        "      }\n"
        "    }"
    )


def render_dropdown_section(
    section_id: str,
    content: str,
    dropdowns: List[Dict[str, object]],
    correct_answers: List[str],
    hint1: str,
    hint2: str,
    hint3: str,
    explanation: str,
) -> str:
    blocks = []
    for item in dropdowns:
        option_block = ", ".join(f"'{q(opt)}'" for opt in item["options"])
        blocks.append(
            "          {\n"
            f"            label: '{q(item['label'])}',\n"
            f"            options: [{option_block}]\n"
            "          }"
        )

    dropdown_block = ",\n".join(blocks)
    answers_block = ", ".join(f"'{q(ans)}'" for ans in correct_answers)

    return (
        "    {\n"
        f"      id: '{q(section_id)}',\n"
        "      type: 'dropdown-select' as const,\n"
        "      content: `\n"
        f"{format_content_block(content)}\n"
        "      `,\n"
        "      exercise: {\n"
        "        dropdowns: [\n"
        f"{dropdown_block}\n"
        "        ],\n"
        f"        correctAnswers: [{answers_block}],\n"
        f"        hint1: '{q(hint1)}',\n"
        f"        hint2: '{q(hint2)}',\n"
        f"        hint3: '{q(hint3)}',\n"
        f"        explanation: '{q(explanation)}'\n"
        "      }\n"
        "    }"
    )


def build_mcq_definition(term: str, definition: str, distractors: List[str], seed: str) -> Dict[str, object]:
    options = stable_shuffle([definition] + distractors[:3], seed)
    return {
        "question": f"Choose the best definition for {term}.",
        "options": options,
        "correctAnswer": options.index(definition),
        "explanation": f"{term} is defined as: {definition}.",
    }


def build_mcq_mechanism(
    prompt: str,
    correct: str,
    distractors: List[str],
    explanation: str,
    seed: str,
) -> Dict[str, object]:
    options = stable_shuffle([correct] + distractors[:3], seed)
    return {
        "question": prompt,
        "options": options,
        "correctAnswer": options.index(correct),
        "explanation": explanation,
    }


def build_part(topic: Dict[str, object], part_num: int, used_ids: set[str]) -> str:
    part_title = topic["partTitles"][part_num - 1]  # type: ignore[index]
    context = topic["contexts"][part_num - 1]  # type: ignore[index]
    title = topic["title"]  # type: ignore[assignment]

    concepts = rotate(topic["concepts"], part_num - 1)  # type: ignore[arg-type]
    reactions = rotate(topic["reactions"], part_num - 1)  # type: ignore[arg-type]
    traps = topic["traps"]  # type: ignore[assignment]

    term_a, def_a = concepts[0]
    term_b, def_b = concepts[1]
    term_c, def_c = concepts[2]
    term_d, def_d = concepts[3]
    term_e, def_e = concepts[4]
    term_f, def_f = concepts[5]

    rxn1 = reactions[0]
    rxn2 = reactions[1]
    rxn3 = reactions[2]
    rxn4 = reactions[3]

    intro_content = f"""
# {title}

**Part {part_num} of 7 — {part_title}**

This part focuses on {context}. The goal is to connect vocabulary, curved-arrow reasoning, and product prediction in one workflow.

### Mechanism vocabulary for this part
- **{term_a}**: {def_a}
- **{term_b}**: {def_b}
- **{term_c}**: {def_c}
- **{term_d}**: {def_d}

### Worked reaction example
A representative transformation uses **{rxn1[0]}**.

1. Identify the governing mechanism: **{rxn1[1]}**.
2. Predict the dominant product pattern: **{rxn1[2]}**.
3. Justify with a mechanistic note: {rxn1[3]}.

Exam tip: state mechanism class before drawing product. It reduces avoidable regio- and stereochemistry errors.
"""

    mcq1 = [
        build_mcq_definition(
            term_a,
            def_a,
            [def_b, def_c, def_d],
            f"{topic['slug']}-p{part_num}-mcq1a",
        ),
        build_mcq_mechanism(
            prompt=(
                f"A reaction in this lesson uses {rxn2[0]} and proceeds by {rxn2[1]}. "
                "What product pattern should you predict first?"
            ),
            correct=rxn2[2],
            distractors=[rxn1[2], rxn3[2], rxn4[2]],
            explanation=(
                f"With {rxn2[0]}, the benchmark outcome is {rxn2[2]}. "
                f"Mechanistic anchor: {rxn2[3]}."
            ),
            seed=f"{topic['slug']}-p{part_num}-mcq1b",
        ),
    ]

    deep_dive = f"""
## Deep-Dive: Reaction Pattern Table

Use this table as a rapid decision grid.

| Reagents | Conditions / Mechanistic Trigger | Product Pattern | Why it works |
|---|---|---|---|
| {rxn1[0]} | {rxn1[1]} | {rxn1[2]} | {rxn1[3]} |
| {rxn2[0]} | {rxn2[1]} | {rxn2[2]} | {rxn2[3]} |
| {rxn3[0]} | {rxn3[1]} | {rxn3[2]} | {rxn3[3]} |
| {rxn4[0]} | {rxn4[1]} | {rxn4[2]} | {rxn4[3]} |

### Fast interpretation protocol
1. Map reagent set to mechanism family.
2. Apply regio- or stereochemical rule attached to that family.
3. Check whether rearrangement, equilibration, or reversibility changes the major product call.
"""

    input_content = f"""
**Input Practice — enter exact chemistry terms**

1) Term for: {def_a}
2) Term for: {def_b}
3) Product pattern expected under {rxn1[0]}
"""

    input_answers = [term_a, term_b, rxn1[2]]
    input_hint1 = f"Blank 1 is the vocabulary term paired with: {def_a}."
    input_hint2 = f"Blank 2 corresponds to {def_b}."
    input_hint3 = f"Use the worked example: {rxn1[0]} gives {rxn1[2]}."
    input_explanation = (
        f"Correct entries: {term_a}, {term_b}, and {rxn1[2]}. "
        "These anchor mechanism ID, vocabulary precision, and product prediction."
    )

    definition_pool = [def_a, def_b, def_c, def_d, def_e, def_f]
    reagent_pool = [rxn1[2], rxn2[2], rxn3[2], rxn4[2], reactions[4][2], reactions[5][2]]
    trap_pool = [
        traps[(part_num - 1) % len(traps)],
        traps[(part_num) % len(traps)],
        traps[(part_num + 1) % len(traps)],
        "Mechanism labels should be tied to observed bond changes, not memorized by reagent names alone.",
    ]

    dd1_opts = stable_shuffle(definition_pool[:4], f"{topic['slug']}-p{part_num}-dd1")
    dd2_opts = stable_shuffle(reagent_pool[:4], f"{topic['slug']}-p{part_num}-dd2")
    dd3_opts = stable_shuffle(trap_pool, f"{topic['slug']}-p{part_num}-dd3")

    dropdowns = [
        {"label": f"{term_c}", "options": dd1_opts},
        {"label": f"Expected pattern from {rxn2[0]}", "options": dd2_opts},
        {"label": "Best exam strategy statement", "options": dd3_opts},
    ]

    dropdown_correct = [
        def_c,
        rxn2[2],
        "Mechanism labels should be tied to observed bond changes, not memorized by reagent names alone.",
    ]

    strategy_content = f"""
## Strategy: Prediction Traps and Exam Techniques

### Common traps in this part
- {traps[(part_num - 1) % len(traps)]}
- {traps[(part_num) % len(traps)]}
- {traps[(part_num + 1) % len(traps)]}

### High-yield exam sequence
1. **Read reagents before substrate details** to classify mechanism class quickly.
2. **Mark the reactive site** (electrophilic carbon, acidic alpha-carbon, benzylic/allylic position, or aromatic position).
3. **Commit to one major-product logic path** before checking answer choices.
4. **Audit stereochemistry and regiochemistry last** so you do not lose points on orientation errors.

### Timing technique
If two options differ only by orientation or placement, spend 10 seconds restating the governing rule out loud (Markovnikov, anti addition, kinetic control, etc.) before selecting.
"""

    mcq2 = [
        build_mcq_mechanism(
            prompt=(
                f"In a synthesis sequence centered on {part_title.lower()}, a step uses {rxn3[0]}. "
                "Which major product pattern is most defensible?"
            ),
            correct=rxn3[2],
            distractors=[rxn1[2], rxn2[2], rxn4[2]],
            explanation=f"{rxn3[0]} is classically associated with {rxn3[2]} because {rxn3[3]}.",
            seed=f"{topic['slug']}-p{part_num}-mcq2a",
        ),
        build_mcq_mechanism(
            prompt=(
                f"A mechanism rationale cites {term_e}: {def_e}. "
                "Which interpretation applies this idea correctly in product prediction?"
            ),
            correct=f"Use {term_e} to justify why the pathway favors {rxn4[2]} under {rxn4[0]}.",
            distractors=[
                f"Ignore {term_e} and choose products only by molecular weight.",
                f"Use {term_e} only after final answer choice selection.",
                f"Treat {term_e} as a naming convention unrelated to mechanism.",
            ],
            explanation=(
                f"The correct approach applies {term_e} directly to mechanism and product control. "
                f"In this context, {rxn4[0]} aligns with {rxn4[2]}."
            ),
            seed=f"{topic['slug']}-p{part_num}-mcq2b",
        ),
    ]

    file_prefix = topic["filePrefix"]  # type: ignore[assignment]
    section_ids = {
        "s1": f"{file_prefix}-p{part_num}-s1-intro",
        "s2": f"{file_prefix}-p{part_num}-s2-mcq-core",
        "s3": f"{file_prefix}-p{part_num}-s3-deep-dive",
        "s4": f"{file_prefix}-p{part_num}-s4-input",
        "s5": f"{file_prefix}-p{part_num}-s5-dropdown",
        "s6": f"{file_prefix}-p{part_num}-s6-strategy",
        "s7": f"{file_prefix}-p{part_num}-s7-mcq-final",
    }

    for sid in section_ids.values():
        if sid in used_ids:
            raise ValueError(f"Duplicate section ID detected: {sid}")
        used_ids.add(sid)

    sections = [
        render_text_section(section_ids["s1"], intro_content),
        render_mcq_section(section_ids["s2"], "**Mechanism checkpoint (2 questions)**", mcq1),
        render_text_section(section_ids["s3"], deep_dive),
        render_input_section(
            section_ids["s4"],
            input_content,
            input_answers,
            input_hint1,
            input_hint2,
            input_hint3,
            input_explanation,
        ),
        render_dropdown_section(
            section_ids["s5"],
            "**Dropdown matching (3 prompts)**",
            dropdowns,
            dropdown_correct,
            "First align each prompt with mechanism language before reading all options.",
            "For reagent prompts, eliminate outcomes that violate known regio/stereo rules.",
            "For strategy prompts, pick the statement that links mechanism evidence to product prediction.",
            "Correct matches combine mechanistic definition, reagent outcome, and exam execution strategy.",
        ),
        render_text_section(section_ids["s6"], strategy_content),
        render_mcq_section(section_ids["s7"], "**Applied synthesis/mechanism check (2 questions)**", mcq2),
    ]

    sec_types = ["text", "multiple-choice", "text", "input-boxes", "dropdown-select", "text", "multiple-choice"]
    if len(sections) != 7:
        raise ValueError(f"{topic['slug']} part {part_num}: expected 7 sections")
    if len(sec_types) != 7:
        raise ValueError("Internal section type list mismatch")

    sections_joined = ",\n".join(sections)
    export_prefix = topic["exportPrefix"]  # type: ignore[assignment]
    slug = topic["slug"]  # type: ignore[assignment]

    return (
        f"export const {export_prefix}Part{part_num}Data = {{\n"
        f"  topicSlug: '{slug}',\n"
        "  sections: [\n"
        f"{sections_joined}\n"
        "  ]\n"
        "};\n"
    )


def write_file(topic: Dict[str, object], part_num: int, used_ids: set[str]) -> Tuple[str, int]:
    file_prefix = topic["filePrefix"]  # type: ignore[assignment]
    filename = f"{file_prefix}-part{part_num}.ts"
    path = os.path.join(OUT_DIR, filename)
    content = build_part(topic, part_num, used_ids)

    with open(path, "w", encoding="utf-8") as handle:
        handle.write(content)

    return path, len(content.splitlines())


def validate_topics() -> None:
    expected = {
        ("acids-bases-organic", "oChemAcidsBases", "ochem-acids-bases-organic"),
        ("alkenes-reactions", "oChemAlkenes", "ochem-alkenes-reactions"),
        ("alkynes-synthesis", "oChemAlkynes", "ochem-alkynes-synthesis"),
        ("amines-nitrogen-compounds", "oChemAmines", "ochem-amines-nitrogen-compounds"),
        ("amino-acids-proteins", "oChemAminoAcids", "ochem-amino-acids-proteins"),
        ("aromatic-compounds-benzene", "oChemAromatic", "ochem-aromatic-compounds-benzene"),
        ("carbohydrates-biochemistry", "oChemCarbs", "ochem-carbohydrates-biochemistry"),
        ("carboxylic-acids-derivatives", "oChemCarboxylicAcids", "ochem-carboxylic-acids-derivatives"),
        ("conjugated-systems-dienes", "oChemConjugated", "ochem-conjugated-systems-dienes"),
        ("electrophilic-aromatic-substitution", "oChemEAS", "ochem-electrophilic-aromatic-substitution"),
        ("enolate-chemistry", "oChemEnolate", "ochem-enolate-chemistry"),
        ("lipids-nucleic-acids", "oChemLipids", "ochem-lipids-nucleic-acids"),
        ("nucleophilic-substitution", "oChemSN", "ochem-nucleophilic-substitution"),
        ("radical-reactions", "oChemRadicals", "ochem-radical-reactions"),
        ("stereochemistry-chirality", "oChemStereo", "ochem-stereochemistry-chirality"),
    }

    found = {
        (t["slug"], t["exportPrefix"], t["filePrefix"])  # type: ignore[index]
        for t in TOPICS
    }

    if found != expected:
        missing = expected - found
        extra = found - expected
        raise ValueError(f"Topic metadata mismatch. Missing={missing} Extra={extra}")

    for topic in TOPICS:
        if len(topic["partTitles"]) != 7:  # type: ignore[index]
            raise ValueError(f"{topic['slug']}: partTitles must have 7 entries")
        if len(topic["contexts"]) != 7:  # type: ignore[index]
            raise ValueError(f"{topic['slug']}: contexts must have 7 entries")
        if len(topic["concepts"]) < 6:  # type: ignore[index]
            raise ValueError(f"{topic['slug']}: concepts must have at least 6 entries")
        if len(topic["reactions"]) < 6:  # type: ignore[index]
            raise ValueError(f"{topic['slug']}: reactions must have at least 6 entries")


def main() -> None:
    validate_topics()
    os.makedirs(OUT_DIR, exist_ok=True)

    total_files = 0
    line_total = 0
    used_ids: set[str] = set()

    for topic in TOPICS:
        print(f"\nRewriting topic: {topic['slug']}")
        for part_num in range(1, 8):
            path, lines = write_file(topic, part_num, used_ids)
            total_files += 1
            line_total += lines
            print(f"  ✓ {os.path.basename(path)} ({lines} lines)")

    expected_files = len(TOPICS) * 7
    print("\nSummary")
    print(f"  Topics processed: {len(TOPICS)}")
    print(f"  Files written: {total_files}")
    print(f"  Expected files: {expected_files}")
    print(f"  Unique section IDs: {len(used_ids)}")
    print(f"  Average lines/file: {line_total / max(total_files, 1):.1f}")

    if total_files != expected_files:
        raise SystemExit(f"Mismatch: wrote {total_files}, expected {expected_files}")


if __name__ == "__main__":
    main()
