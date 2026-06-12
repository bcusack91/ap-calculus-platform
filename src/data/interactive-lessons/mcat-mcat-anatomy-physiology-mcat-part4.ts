export const mcatAnatPhysPart4Data = {
  topicSlug: 'mcat-anatomy-physiology-mcat',
  sections: [
    {
      id: 'ap4-intro',
      type: 'text' as const,
      content: `# Anatomy & Physiology for the MCAT

**Part 4 of 7 — Skin & Integumentary System**

### Skin Layers (outside → inside)

1. **Epidermis** (stratified squamous epithelium, ectoderm-derived): keratinocytes, melanocytes, Langerhans (immune) cells; **avascular** — fed by diffusion from the dermis.
2. **Dermis** (connective tissue, mesoderm): blood vessels, hair follicles, sensory receptors, sweat & sebaceous glands, collagen/elastin.
3. **Hypodermis / subcutaneous** (adipose): fat storage, insulation, anchoring.

### Epidermal Strata (deep → superficial)

| Stratum | Key feature |
|---------|-------------|
| Basale | Single layer of dividing stem cells; melanocytes sit here |
| Spinosum | Desmosome-linked keratinocytes ("spiny") |
| Granulosum | Keratohyalin granules; cells begin to die |
| Lucidum | Only in thick skin (palms/soles) |
| Corneum | Dead, flattened, keratin-filled cells — the main barrier |

**Mnemonic (deep→superficial):** "**B**ad **S**punky **G**irls **L**ike **C**orn" — Basale, Spinosum, Granulosum, Lucidum, Corneum.

\`\`\`
   Corneum   ← dead, waterproof barrier (top)
   Lucidum   ← thick skin only
   Granulosum
   Spinosum
   Basale    ← dividing stem cells + melanocytes (bottom)
 ────────────  basement membrane
   Dermis    ← vessels, nerves, glands, follicles
\`\`\`

### Skin Functions

| Function | Mechanism |
|----------|-----------|
| Protection | Keratin/corneum barrier vs. pathogens & water loss; melanin absorbs UV |
| Thermoregulation | Sweat (evaporative cooling); cutaneous vasodilation/vasoconstriction |
| Sensation | Mechanoreceptors (Meissner, Pacinian), thermoreceptors, nociceptors |
| Vitamin D synthesis | UV-B converts 7-dehydrocholesterol → cholecalciferol (vit D₃) |
| Excretion | Sweat removes small amounts of water, salts, urea |

### Thermoregulation (a negative-feedback loop)

The **hypothalamus** is the body's thermostat (set point ~37 °C).

**Hot / overheated:**
- Cutaneous **vasodilation** → more blood to skin → radiative heat loss.
- **Sweating** → evaporation absorbs heat (latent heat of vaporization). Evaporative cooling fails in high humidity.

**Cold:**
- Cutaneous **vasoconstriction** → conserves core heat.
- **Shivering** thermogenesis (muscle contraction) and, in infants, **brown-fat** non-shivering thermogenesis (UCP-1 uncouples the proton gradient → heat).
- **Piloerection** (goosebumps via arrector pili) — traps air in furred mammals; vestigial in humans.

### Pigmentation & UV

- **Melanocytes** (in the basale) transfer **melanin** to keratinocytes, where it caps nuclei to shield DNA from UV. Everyone has similar melanocyte *numbers*; differences in skin tone reflect melanin *amount/type*, not cell count.
- UV damage → thymine dimers → repaired by nucleotide excision repair; failure (xeroderma pigmentosum) → high skin-cancer risk.

**Clinical correlations:** Burns by depth — 1st degree (epidermis only, e.g. sunburn), 2nd degree (epidermis + partial dermis, **blistering**, most painful), 3rd degree (full dermis, **painless** because nociceptors destroyed; needs grafting). Extensive full-thickness burns kill chiefly through fluid loss and infection because the barrier is gone.`
    },
    {
      id: 'ap4-quiz1',
      type: 'multiple-choice' as const,
      content: `**Integumentary** 🎯`,
      exercise: {
        questions: [
          {
            question: `A patient sustains a large third-degree burn over the trunk. Which complication is the most immediate life-threatening concern, and why?`,
            options: [`Massive fluid and electrolyte loss, because the epidermal barrier that prevents evaporation is destroyed`, `Severe pain, because the burned nociceptors fire continuously`, `Hypothermia, because melanin can no longer absorb UV`, `Vitamin D deficiency, because 7-dehydrocholesterol is gone`],
            correctAnswer: 0,
            explanation: `Third-degree burns destroy the full-thickness barrier, so the body loses fluid and electrolytes rapidly by evaporation and exudation — the leading early cause of shock in burn patients (along with infection). Notably, full-thickness burns are *painless* in the burned area because nociceptors are destroyed, which rules out the "severe pain" trap. The vitamin D and UV options are not acute threats.`
          },
          {
            question: `A long-distance runner competes in a hot, very humid environment and her core temperature climbs despite heavy sweating. The best physiological explanation is that:`,
            options: [`High humidity reduces evaporation, so sweat drips off without removing much heat`, `Sweating triggers vasoconstriction, trapping heat in the core`, `Sweat glands stop producing sweat above 37 °C`, `Melanin production blocks heat loss from the skin`],
            correctAnswer: 0,
            explanation: `Sweat cools by *evaporation* (latent heat of vaporization). In high humidity the air is near saturation, so sweat cannot evaporate efficiently and simply drips off — carrying away little heat — even though the body keeps producing it. Heat stress causes vasodilation (not vasoconstriction), sweat glands keep working, and melanin governs UV, not heat loss.`
          },
          {
            question: `A pharmaceutical company develops a topical drug and finds it works only if it can reach the dermal blood supply. Which property must the formulation have to be absorbed, given the structure of the epidermis?`,
            options: [`It must cross the avascular, lipid-rich stratum corneum, favoring lipophilic molecules`, `It must be highly water-soluble to dissolve in epidermal capillaries`, `It must target melanocytes in the stratum corneum`, `It must be injected because the epidermis is impermeable to all molecules`],
            correctAnswer: 0,
            explanation: `The epidermis is avascular, so a topical drug must diffuse down through the dead, lipid-rich stratum corneum to reach dermal capillaries; lipophilic, small molecules cross this barrier best (the basis of transdermal patches). There are no capillaries in the epidermis (ruling out the water-soluble option), melanocytes reside in the basale not the corneum, and the epidermis is selectively — not absolutely — impermeable.`
          }
        ]
      }
    },
    {
      id: 'ap4-worked-examples',
      type: 'text' as const,
      content: `### Worked Examples — Integumentary Physiology

<details>
<summary><b>Example 1: Classify a burn and predict pain</b></summary>

**Question:** A patient has a burn that destroyed the epidermis and the entire dermis. Classify it, and predict whether the burned area is painful. Explain.

**Solution:**
1. Epidermis + full dermis destroyed = **third-degree (full-thickness)** burn.
2. Nociceptors (free nerve endings) live in the dermis — they are destroyed.
3. Therefore the **center of the wound is paradoxically painless** (though surrounding 2nd-degree rim hurts). ✓

**MCAT note:** Counterintuitively, the *less* severe second-degree burn is the most painful because its nociceptors survive and are exposed/inflamed.
</details>

<details>
<summary><b>Example 2: Trace a thermoregulatory feedback loop</b></summary>

**Question:** Core temperature rises to 38.5 °C. Identify the sensor, the integrator, and two effector responses that restore normal temperature.

**Solution:**
1. **Sensor:** thermoreceptors (skin + hypothalamus) detect the rise.
2. **Integrator:** the **hypothalamus** compares to the ~37 °C set point.
3. **Effectors:** (i) cutaneous **vasodilation** → radiative heat loss; (ii) **sweating** → evaporative cooling. ✓

**High-yield connection:** This is a classic **negative-feedback** loop — the response (cooling) opposes the disturbance (heating). Contrast with the rarer positive feedback (e.g., LH surge, labor).
</details>

<details>
<summary><b>Example 3: Reason about a melanin / UV experiment</b></summary>

**Question:** Two individuals with very different skin tones are found to have nearly identical melanocyte numbers, yet very different UV-damage susceptibility. Explain.

**Solution:**
1. Skin tone reflects the **amount and type of melanin produced and transferred**, not the number of melanocytes.
2. More melanin (and more eumelanin) → more UV absorbed before it reaches keratinocyte DNA → fewer thymine dimers.
3. Less melanin → more UV reaches DNA → more dimers → higher mutation/cancer risk if repair (NER) is overwhelmed. ✓

**Interpretation:** This is why xeroderma pigmentosum (defective NER) is so dangerous regardless of pigmentation — the protective and repair systems are complementary layers of defense.
</details>`
    },
    {
      id: 'ap4-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 4

- Epidermis = outer, **avascular** (strata: Basale→Spinosum→Granulosum→Lucidum→Corneum); dermis = vascular, holds nerves/glands/follicles.
- Thermoregulation is a hypothalamic negative-feedback loop: vasodilation + sweating (hot) vs. vasoconstriction + shivering (cold). Sweat cools by **evaporation** → fails in humidity.
- Topical drugs must cross the lipid-rich stratum corneum to reach dermal vessels (favors lipophilic molecules).
- Vitamin D synthesis begins with UV-B on 7-dehydrocholesterol; melanin shields DNA from UV.
- Burns: 1st (epidermis), 2nd (partial dermis, blisters, most painful), 3rd (full dermis, painless, fluid loss/infection are the killers).`
    }
  ]
};
