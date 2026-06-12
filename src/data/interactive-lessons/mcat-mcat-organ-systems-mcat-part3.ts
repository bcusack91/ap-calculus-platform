export const mcatOrganSysPart3Data = {
  topicSlug: 'mcat-organ-systems-mcat',
  sections: [
    {
      id: 'os3-intro',
      type: 'text' as const,
      content: `# Organ Systems for the MCAT

**Part 3 of 7 — Digestive System**

### GI Tract Order

Mouth → Esophagus → Stomach → Small intestine (duodenum → jejunum → ileum) → Large intestine → Rectum

### Digestive Enzymes

| Enzyme | Source | Substrate | Product |
|--------|--------|-----------|---------|
| Salivary amylase | Mouth | Starch | Maltose |
| Pepsin | Stomach (chief cells) | Protein | Peptides |
| Trypsin, chymotrypsin | Pancreas | Protein | Peptides |
| Pancreatic lipase | Pancreas | Triglycerides | Monoglycerides + fatty acids |
| Pancreatic amylase | Pancreas | Starch | Maltose |
| Lactase, maltase | Small intestine brush border | Disaccharides | Monosaccharides |

### Stomach

- **Parietal cells**: HCl (acidic pH ~2) + intrinsic factor (for B$_{12}$ absorption)
- **Chief cells**: Pepsinogen → activated to pepsin by HCl
- **G cells**: Gastrin (stimulates HCl secretion)
- **Mucous cells**: Protect stomach lining from acid

### Zymogen Activation Cascade (Why the Pancreas Doesn't Digest Itself)

Proteases are secreted as **inactive zymogens** and activated only in the gut lumen:

$$\\text{Enteropeptidase (duodenum)} \\to \\text{Trypsinogen} \\to \\textbf{Trypsin}$$
$$\\textbf{Trypsin} \\to \\text{activates chymotrypsinogen, procarboxypeptidase, and MORE trypsinogen}$$

Trypsin is the master activator (autocatalytic). Premature intra-pancreatic activation causes **acute pancreatitis** (the pancreas digests itself) — a classic clinical correlate.

### Hormonal Control of Digestion (Figure / Feedback Loops)

| Hormone | Trigger | Source | Main Action |
|---|---|---|---|
| **Gastrin** | Peptides, distension, vagal input | Stomach G cells | ↑ HCl secretion by parietal cells |
| **Secretin** | Acidic chyme (low pH) entering duodenum | Duodenal S cells | ↑ pancreatic **bicarbonate** → neutralizes acid; ↓ gastric acid |
| **CCK** (cholecystokinin) | Fats & amino acids in duodenum | Duodenal I cells | Gallbladder contraction (bile) + pancreatic enzyme release; slows gastric emptying |

Flow: fatty/acidic chyme enters duodenum → **secretin + CCK** released → pancreas dumps bicarbonate (raises pH to the ~8 optimum for pancreatic enzymes) and enzymes; gallbladder ejects bile → fat emulsified and digested. This is a **negative-feedback** brake: duodenal contents signal back to slow the stomach until the small intestine catches up.

### Absorption

- **Duodenum**: Iron, calcium
- **Jejunum**: Most nutrients (amino acids, sugars, fatty acids)
- **Ileum**: Bile salts (recycled via **enterohepatic circulation**), vitamin B$_{12}$
- **Large intestine**: Water, electrolytes

### Carbohydrate Absorption Mechanism

Glucose/galactose enter enterocytes via **SGLT1** (secondary active transport powered by the Na⁺ gradient from the basolateral Na⁺/K⁺ ATPase), then exit to blood via **GLUT2**. Fructose enters by facilitated diffusion via **GLUT5**. This Na⁺-coupled uptake is why oral rehydration therapy pairs glucose with sodium.`
    },
    {
      id: 'os3-quiz1',
      type: 'multiple-choice' as const,
      content: `**Digestive System** 🎯`,
      exercise: {
        questions: [
          {
            question: `Bile salts aid fat digestion by:`,
            options: [`Emulsifying large fat globules into smaller droplets (increasing surface area for lipase)`, `Directly breaking down triglycerides`, `Neutralizing stomach acid`, `Activating pepsinogen`],
            correctAnswer: 0,
            explanation: `Bile salts are amphipathic — they break large fat globules into smaller micelles (emulsification), vastly increasing surface area for pancreatic lipase. Bile does NOT chemically digest fat (option 2) — it physically prepares fat. Acid neutralization is bicarbonate's job; pepsinogen is activated by HCl.`
          },
          {
            question: `Surgical removal of the terminal ileum would most likely cause which two deficiencies, and why?`,
            options: [`Vitamin B$_{12}$ deficiency and bile-salt malabsorption, because both are absorbed in the ileum`, `Iron and calcium deficiency, because both are absorbed in the ileum`, `Protein and carbohydrate malabsorption, because all enzymes act in the ileum`, `Water-soluble vitamin loss only, because the ileum absorbs all vitamins`],
            correctAnswer: 0,
            explanation: `The terminal ileum specifically absorbs vitamin B$_{12}$ (bound to intrinsic factor) and reabsorbs bile salts for enterohepatic recycling. Losing it → B₁₂ deficiency (megaloblastic anemia) and bile-salt wasting (fat malabsorption, diarrhea). Iron and calcium are absorbed in the duodenum (option 2); most macronutrient absorption occurs in the jejunum (option 3).`
          },
          {
            question: `A patient takes a proton-pump inhibitor that strongly suppresses parietal-cell HCl secretion. By negative feedback, blood levels of which hormone would RISE, and what downstream effect is impaired?`,
            options: [`Gastrin rises; pepsinogen activation and B₁₂ absorption are impaired due to low acid and reduced intrinsic factor effectiveness`, `Secretin rises; bicarbonate secretion is impaired`, `CCK rises; bile release is impaired`, `Gastrin falls; acid secretion increases`],
            correctAnswer: 0,
            explanation: `Acid normally suppresses gastrin (negative feedback). Blocking acid removes that inhibition, so G cells release MORE gastrin (hypergastrinemia). Low gastric acid impairs pepsin activation (pepsinogen needs acid) and reduces nonheme iron and B₁₂ availability. Secretin and CCK respond to duodenal acid/fat, not directly to parietal-cell blockade; option 4 reverses the feedback logic.`
          }
        ]
      }
    },
    {
      id: 'os3-worked-examples',
      type: 'text' as const,
      content: `### Worked Examples — Digestive Physiology

<details>
<summary><b>Example 1: Predict the response to a fatty meal</b></summary>

**Question:** A subject eats a high-fat meal. Trace the hormonal cascade and predict the effect on gastric emptying.

**Solution:**
1. Fats and amino acids reach the duodenum → **I cells release CCK**.
2. CCK → gallbladder contracts (bile ejected) + pancreas releases lipase; CCK also **slows gastric emptying**. ✓
3. Acidic chyme → **secretin** → pancreatic bicarbonate raises duodenal pH toward ~8 (optimum for lipase/trypsin).

**MCAT note:** Slowed gastric emptying after fat is adaptive — it prevents overwhelming the small intestine's limited digestive/absorptive capacity. Fatty meals therefore "sit heavy."
</details>

<details>
<summary><b>Example 2: Diagnose a malabsorption pattern</b></summary>

**Question:** A patient has chronic pancreatitis with destroyed exocrine pancreas. Which nutrients are most affected, and what stool finding appears?

**Solution:**
1. Loss of pancreatic lipase → triglycerides not digested → **fat malabsorption**.
2. Undigested fat in stool = **steatorrhea** (greasy, floating, foul stool). ✓
3. Fat-soluble vitamins (A, D, E, K) are also malabsorbed → e.g., vitamin K deficiency → bleeding tendency.

**Interpretation:** Because the pancreas supplies the major proteases, lipase, and amylase, its failure impairs all three macronutrient classes, but fat malabsorption is the most clinically obvious.
</details>

<details>
<summary><b>Example 3: Reason about Na⁺-coupled glucose uptake</b></summary>

**Question:** A drug blocks the basolateral Na⁺/K⁺ ATPase in enterocytes. Predict the effect on intestinal glucose absorption via SGLT1.

**Solution:**
1. SGLT1 is **secondary active transport** — it uses the inward Na⁺ gradient to drag glucose into the cell against its gradient.
2. The Na⁺/K⁺ ATPase pumps Na⁺ out the basolateral side to MAINTAIN that gradient.
3. Block the pump → intracellular Na⁺ rises → the Na⁺ gradient collapses → **SGLT1 can no longer import glucose**. ✓

**High-yield connection:** This is the textbook example of how a primary active pump powers a secondary active transporter — and why oral rehydration solutions combine glucose with sodium to maximize co-transport.
</details>`
    },
    {
      id: 'os3-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 3

- Know all digestive enzymes with their sources and substrates
- Stomach: HCl (parietal cells), pepsinogen (chief cells), gastrin (G cells)
- Proteases secreted as zymogens; trypsin is the master activator (pancreatitis = self-digestion)
- Hormones: gastrin ↑acid; secretin ↑bicarbonate; CCK → bile + enzymes + slows emptying
- Bile emulsifies fat (liver-made, gallbladder-stored); B$_{12}$ + bile salts absorbed in ileum`
    }
  ]
};
