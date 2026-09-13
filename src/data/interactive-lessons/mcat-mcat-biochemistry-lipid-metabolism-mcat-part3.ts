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
- **Alcoholic ketoacidosis:** ethanol metabolism raises NADH/NAD$^+$, pushing the ketone pool toward beta-hydroxybutyrate — the standard nitroprusside dipstick (which detects acetoacetate) can UNDERESTIMATE it.`
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
            explanation: `Succinyl-CoA:acetoacetate CoA-transferase (thiophorase, SCOT) transfers CoA from succinyl-CoA to acetoacetate, the obligatory activation step for ketone use. Its absence in liver makes ketones a one-way export. Beta-hydroxybutyrate dehydrogenase is used by the liver to MAKE beta-hydroxybutyrate, so hepatocytes clearly have it; they also have CPT-I and a working TCA cycle.`
          },
          {
            question: `During starvation, ketogenesis accelerates in part because gluconeogenesis depletes a key TCA-cycle intermediate. That intermediate is:`,
            options: [`Oxaloacetate`, `Citrate`, `Succinyl-CoA`, `Alpha-ketoglutarate`],
            correctAnswer: 0,
            explanation: `Oxaloacetate is pulled toward phosphoenolpyruvate (via PEPCK) for glucose synthesis. With OAA scarce, citrate synthase cannot condense the incoming acetyl-CoA, which is instead diverted into acetoacetate and beta-hydroxybutyrate.`
          },
          {
            question: `A patient's serum has a markedly elevated NADH/NAD$^+$ ratio after heavy ethanol use. The ketone body profile will shift toward:`,
            options: [`Acetone, which nitroprusside dipsticks detect only weakly`, `Beta-hydroxybutyrate, which dipsticks may underestimate`, `Acetoacetate, raising the measured dipstick ketone level`, `Acetyl-CoA, which appears directly in serum`],
            correctAnswer: 1,
            explanation: `Beta-hydroxybutyrate dehydrogenase equilibrates the two ketoacids with the NADH/NAD$^+$ ratio: high NADH pushes acetoacetate toward beta-hydroxybutyrate. Nitroprusside reagents react with acetoacetate (and weakly acetone), so true ketosis can be masked. Acetyl-CoA never circulates free in serum.`
          },
          {
            question: `Which tissue can use neither fatty acids nor ketone bodies and therefore remains absolutely glucose-dependent at all times?`,
            options: [`Cardiac muscle`, `Renal cortex`, `Red blood cells`, `Fasting brain`],
            correctAnswer: 2,
            explanation: `Erythrocytes have no mitochondria — no beta-oxidation, no TCA, no ketone use; they live on anaerobic glycolysis. Heart happily burns both fat and ketones, and the brain adapts to ketones after days of fasting (though it never burns fatty acids directly).`
          },
          {
            question: `The rate-limiting, committed step of ketogenesis is catalyzed by:`,
            options: [`Cytosolic HMG-CoA reductase`, `Mitochondrial HMG-CoA synthase`, `Hormone-sensitive lipase`, `Mitochondrial acetoacetyl-CoA thiolase`],
            correctAnswer: 1,
            explanation: `Mitochondrial HMG-CoA synthase commits acetoacetyl-CoA plus acetyl-CoA to HMG-CoA destined for ketones. The thiolase condensation that precedes it is freely reversible (the reverse of beta-oxidation's final thiolysis), so it commits nothing. HMG-CoA reductase is the cytosolic, cholesterol-pathway enzyme (statin target) — the classic compartment trap. HSL supplies substrate upstream but is not part of ketogenesis proper.`
          }
        ]
      }
    },
    {
      id: 'lm3-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 3

- Ketogenesis = liver mitochondria repackaging excess acetyl-CoA when OAA is drained by gluconeogenesis
- Pathway: 2 acetyl-CoA → acetoacetyl-CoA → HMG-CoA (**mito HMG-CoA synthase, rate-limiting**) → acetoacetate → beta-hydroxybutyrate/acetone
- Liver lacks **thiophorase** → cannot burn its own ketones; RBCs cannot use them either (no mitochondria)
- Fasting brain runs largely on ketones after ~3 days, sparing muscle protein
- DKA: unopposed lipolysis + ketogenesis → anion-gap acidosis; high NADH (alcohol) shifts pool to beta-hydroxybutyrate
- Compartment trap: mitochondrial HMG-CoA → ketones; cytosolic HMG-CoA → cholesterol`
    },
    {
      id: 'lm3-worked-examples',
      type: 'text' as const,
      content: `### Worked Examples — Fasting Physiology

<details>
<summary><b>Example 1: Timeline of fuel switching in starvation</b></summary>

**Question:** Rank the body's dominant fuel sources for the brain at 4 hours, 2 days, and 2 weeks without food.

**Solution:**
1. 4 hours: dietary glucose is gone; **glycogenolysis** maintains blood glucose — brain burns glucose.
2. 2 days: glycogen is exhausted (~24 h); **gluconeogenesis** (from amino acids, glycerol, lactate) feeds the brain glucose; ketogenesis is ramping.
3. 2 weeks: **ketone bodies** supply roughly two-thirds of brain energy; gluconeogenesis slows, dramatically reducing muscle protein breakdown.

**MCAT Strategy:** The purpose of the ketone switch is protein sparing. A question asking why urinary nitrogen excretion FALLS in late starvation is really asking about brain ketone adaptation.
</details>

<details>
<summary><b>Example 2: Interpret a DKA chemistry panel</b></summary>

**Question:** A type 1 diabetic presents with glucose 480 mg/dL, pH 7.12, low bicarbonate, and an elevated anion gap. Explain each abnormality from hormone signaling downward.

**Solution:**
1. No insulin + high glucagon/catecholamines → HSL fully active → massive FFA flux to the liver.
2. Beta-oxidation outstrips the TCA cycle; ketogenesis pours out acetoacetate and beta-hydroxybutyrate.
3. These ketoacids dissociate at blood pH (pKa ~4), consuming HCO$_3^-$: anion-gap metabolic acidosis; hyperventilation (Kussmaul) is respiratory compensation.
4. Glucose is high because tissues cannot take it up (GLUT4 needs insulin) while the liver simultaneously overproduces it.

**MCAT Strategy:** DKA is the single most integrated lipid-metabolism vignette: hormone signaling, lipolysis, ketogenesis, and acid-base in one patient.
</details>

<details>
<summary><b>Example 3: Why not just export acetyl-CoA?</b></summary>

**Question:** Give two biochemical reasons the liver converts acetyl-CoA into ketone bodies rather than exporting acetyl-CoA itself.

**Solution:**
1. **No transporter:** CoA thioesters are large, charged, and membrane-impermeant; there is no plasma-membrane carrier for acetyl-CoA, and cells guard their CoA pool.
2. **Solubility and delivery:** acetoacetate and beta-hydroxybutyrate are small organic acids, freely soluble in plasma, crossing the blood-brain barrier on monocarboxylate transporters — no albumin or lipoprotein required.
3. Bonus: converting 2 acetyl-CoA into one 4-carbon ketone also frees CoA for continued beta-oxidation in the hepatocyte.

**MCAT Strategy:** When asked why a shuttle or conversion exists, check membrane permeability first — the answer is usually a transport problem.
</details>`
    }
  ]
};
