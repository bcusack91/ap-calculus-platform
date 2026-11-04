export const mcatLipidMetabPart3Data = {
  topicSlug: 'mcat-biochemistry-lipid-metabolism-mcat',
  sections: [
    {
      id: 'lm3-intro',
      type: 'text' as const,
      content: `# Lipid Metabolism

**Part 3 of 4 — Ketogenesis & Ketone Body Metabolism**

### Why Ketones Exist

In prolonged fasting, hepatic beta-oxidation floods the mitochondria with acetyl-CoA while oxaloacetate is being siphoned off for **gluconeogenesis**. Acetyl-CoA that cannot enter the TCA cycle is repackaged into small, water-soluble, exportable fuels: **ketone bodies**. They need no albumin, no lipoprotein, and no carnitine shuttle — heart, muscle, and (crucially) the fasting **brain** burn them directly. After several days of starvation the brain gets most of its energy from ketones, sparing muscle protein that would otherwise be sacrificed for gluconeogenesis.

### The Pathway (Liver Mitochondria Only)

1. 2 acetyl-CoA → acetoacetyl-CoA (**thiolase**, running in reverse)
2. Acetoacetyl-CoA + acetyl-CoA → **HMG-CoA** (**HMG-CoA synthase**, the mitochondrial isoform — the committed, rate-limiting step)
3. HMG-CoA → **acetoacetate** + acetyl-CoA (**HMG-CoA lyase**)
4. Acetoacetate + NADH → **beta-hydroxybutyrate** (ratio reflects the mitochondrial NADH/NAD$^+$ ratio) or spontaneously decarboxylates to **acetone** (exhaled — fruity breath)

Note the location contrast: **mitochondrial** HMG-CoA is for ketones; **cytosolic** HMG-CoA (via the cytosolic synthase and HMG-CoA reductase) is for cholesterol. Same intermediate name, different compartment, different fate.

### Using Ketones (Everywhere EXCEPT the Liver)

Peripheral tissues reverse the process: beta-hydroxybutyrate → acetoacetate (regenerating NADH) → activated by **succinyl-CoA:acetoacetate-CoA transferase (thiophorase/SCOT)** → acetoacetyl-CoA → 2 acetyl-CoA → TCA.

**The liver lacks thiophorase.** That single missing enzyme is why the producer cannot consume its own product — ketones are a strictly altruistic export. Red blood cells also cannot use ketones (no mitochondria at all).

### When Ketogenesis Goes Too Far

- **Diabetic ketoacidosis (DKA):** with no insulin, hormone-sensitive lipase and ketogenesis run unopposed; ketoacids (pKa ~4) dissociate and overwhelm bicarbonate buffering → anion-gap metabolic acidosis, Kussmaul breathing, fruity acetone breath. Typical of type 1 diabetes.
- **Prolonged fasting/starvation:** ketosis is milder because some insulin remains to restrain lipolysis.
- **Alcoholic ketoacidosis:** ethanol metabolism raises NADH/NAD$^+$, pushing the ketone pool toward beta-hydroxybutyrate.

<!-- yield:low -->
- The standard nitroprusside dipstick detects acetoacetate (weakly acetone), not beta-hydroxybutyrate, so it can UNDERESTIMATE ketosis when NADH is high.
<!-- /yield -->`
    },
    {
      id: 'lm3-worked-examples',
      type: 'text' as const,
      content: `### Worked Examples — Fasting Physiology

**Problem 1.** Track the brain's dominant fuel at 4 hours, 2 days and 2 weeks without food.

- **(a)** What keeps the brain supplied at 4 hours?
- **(b)** What feeds it at 2 days, once glycogen is gone?
- **(c)** What fuels it at 2 weeks, and what does that switch accomplish?

**(a) 4 hours.** Dietary glucose is gone; **glycogenolysis** maintains blood glucose, and the brain burns glucose.

**(b) 2 days.** Glycogen is exhausted (~24 h); **gluconeogenesis** (from amino acids, glycerol, lactate) feeds the brain glucose while ketogenesis ramps up.

**(c) 2 weeks.** **Ketone bodies** supply roughly two-thirds of brain energy; gluconeogenesis slows, sharply reducing muscle protein breakdown. The switch is protein sparing: falling urinary nitrogen in late starvation reflects it.

**Problem 2.** A type 1 diabetic presents with glucose 480 mg/dL, pH 7.12, low bicarbonate and an elevated anion gap.

- **(a)** What does the missing insulin do to adipose lipolysis?
- **(b)** What happens to the fatty acids that reach the liver?
- **(c)** Why are pH and bicarbonate low with a raised anion gap, and why is the patient breathing deeply?
- **(d)** Why is glucose so high?

**(a) Lipolysis unopposed.** No insulin + high glucagon/catecholamines → HSL fully active → a massive FFA flux to the liver.

**(b) Ketogenesis floods.** Beta-oxidation outstrips the TCA cycle; ketogenesis pours out acetoacetate and beta-hydroxybutyrate.

**(c) The acidosis.** The acetoacetate and beta-hydroxybutyrate from (b) dissociate at blood pH (pKa ~4), consuming HCO$_3^-$: anion-gap metabolic acidosis. Hyperventilation (Kussmaul) is respiratory compensation.

**(d) The hyperglycemia.** Tissues cannot take glucose up (GLUT4 needs insulin) while the liver overproduces it. DKA links hormone signaling, lipolysis, ketogenesis and acid-base in one patient.

**Problem 3.** The liver converts its excess acetyl-CoA into ketone bodies rather than exporting acetyl-CoA itself.

- **(a)** Why can't acetyl-CoA simply be exported?
- **(b)** What makes ketone bodies easy to deliver?
- **(c)** What does the conversion do for the hepatocyte's own CoA?

**(a) No transporter.** CoA thioesters are large, charged and membrane-impermeant; there is no plasma-membrane carrier for acetyl-CoA, and cells guard their CoA pool.

**(b) Solubility and delivery.** Acetoacetate and beta-hydroxybutyrate are small organic acids, freely soluble in plasma, crossing the blood-brain barrier on monocarboxylate transporters; no albumin or lipoprotein required.

**(c) CoA recycled.** Turning 2 acetyl-CoA into one 4-carbon ketone frees CoA for continued beta-oxidation. When asked why a conversion exists, check membrane permeability first: it is usually a transport problem.`
    },
    {
      id: 'lm3-quiz1',
      type: 'multiple-choice' as const,
      content: `**Ketone Body Metabolism** 🎯`,
      exercise: {
        questions: [
          {
            question: `The liver synthesizes ketone bodies but cannot oxidize them because hepatocytes lack:`,
            options: [`Mitochondrial beta-hydroxybutyrate dehydrogenase`, `Carnitine palmitoyltransferase I`, `Mitochondria with an intact TCA cycle`, `Succinyl-CoA:acetoacetate CoA-transferase`],
            correctAnswer: 3,
            yield: 'MEDIUM',
            explanation: `Succinyl-CoA:acetoacetate CoA-transferase (thiophorase, SCOT) transfers CoA from succinyl-CoA to acetoacetate, the obligatory activation step for ketone use. Its absence in liver makes ketones a one-way export. Beta-hydroxybutyrate dehydrogenase is used by the liver to MAKE beta-hydroxybutyrate, so hepatocytes clearly have it; they also have CPT-I and a working TCA cycle.`
          },
          {
            question: `During starvation, ketogenesis accelerates in part because gluconeogenesis depletes a key TCA-cycle intermediate. That intermediate is:`,
            options: [`Oxaloacetate`, `Citrate`, `Succinyl-CoA`, `Alpha-ketoglutarate`],
            correctAnswer: 0,
            yield: 'HIGH',
            explanation: `Oxaloacetate is pulled toward phosphoenolpyruvate (via PEPCK) for glucose synthesis. With OAA scarce, citrate synthase cannot condense the incoming acetyl-CoA, which is instead diverted into acetoacetate and beta-hydroxybutyrate.`
          },
          {
            question: `After heavy ethanol use, a patient's hepatocytes have a markedly elevated NADH/NAD$^+$ ratio. (Standard nitroprusside urine dipsticks detect acetoacetate.) The ketone body profile will shift toward:`,
            options: [`Acetone, which nitroprusside dipsticks detect only weakly`, `Beta-hydroxybutyrate, which dipsticks may underestimate`, `Acetoacetate, raising the measured dipstick ketone level`, `Acetyl-CoA, which appears directly in serum`],
            correctAnswer: 1,
            yield: 'MEDIUM',
            explanation: `Beta-hydroxybutyrate dehydrogenase equilibrates the two ketoacids with the NADH/NAD$^+$ ratio: high NADH pushes acetoacetate toward beta-hydroxybutyrate. Nitroprusside reagents react with acetoacetate (and weakly acetone), so true ketosis can be masked. Acetyl-CoA never circulates free in serum.`
          },
          {
            question: `Which tissue can use neither fatty acids nor ketone bodies and therefore remains absolutely glucose-dependent at all times?`,
            options: [`Cardiac muscle`, `Renal cortex`, `Red blood cells`, `Fasting brain`],
            correctAnswer: 2,
            yield: 'HIGH',
            explanation: `Erythrocytes have no mitochondria — no beta-oxidation, no TCA, no ketone use; they live on anaerobic glycolysis. Heart happily burns both fat and ketones, and the brain adapts to ketones after days of fasting (though it never burns fatty acids directly).`
          },
          {
            question: `The rate-limiting, committed step of ketogenesis is catalyzed by:`,
            options: [`Cytosolic HMG-CoA reductase (statin target)`, `Mitochondrial HMG-CoA synthase`, `Adipocyte hormone-sensitive lipase`, `Mitochondrial acetoacetyl-CoA thiolase`],
            correctAnswer: 1,
            yield: 'MEDIUM',
            explanation: `Mitochondrial HMG-CoA synthase commits acetoacetyl-CoA plus acetyl-CoA to HMG-CoA destined for ketones. The thiolase condensation that precedes it is freely reversible (the reverse of beta-oxidation's final thiolysis), so it commits nothing. HMG-CoA reductase is the cytosolic, cholesterol-pathway enzyme (statin target) — the classic compartment trap. HSL supplies substrate upstream but is not part of ketogenesis proper.`
          }
        ]
      }
    },
    {
      id: 'lm3-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 3

- **Why the liver makes ketones.** Gluconeogenesis drains OAA, so excess acetyl-CoA from beta-oxidation is repackaged as ketones.
- **HMG-CoA synthase commits.** 2 acetyl-CoA → acetoacetyl-CoA → HMG-CoA (mitochondrial HMG-CoA synthase, rate-limiting) → acetoacetate.
- **Ketones spare protein.** Over days of fasting the brain shifts to ketones, slowing gluconeogenesis and sparing muscle protein.
- **DKA is unopposed ketogenesis.** Without insulin, lipolysis and ketogenesis run unchecked and ketoacids cause anion-gap acidosis.

**Common traps**

- **The liver burning ketones.** The liver lacks thiophorase (SCOT), so it exports the ketones it makes and burns none of them.
- **Red cells on ketones.** RBCs have no mitochondria, so they use neither fatty acids nor ketones; they live on glycolysis.
- **Mixing up the HMG-CoAs.** Mitochondrial HMG-CoA becomes ketones; cytosolic HMG-CoA (via HMG-CoA reductase) becomes cholesterol.
- **Ignoring the NADH ratio.** High NADH (as after alcohol) shifts the ketone pool toward beta-hydroxybutyrate, not acetoacetate.

<!-- yield:low -->
- Low-yield extras: nitroprusside dipsticks detect acetoacetate, not beta-hydroxybutyrate, so they underestimate high-NADH (alcoholic) ketosis
<!-- /yield -->`
    }
  ]
};
