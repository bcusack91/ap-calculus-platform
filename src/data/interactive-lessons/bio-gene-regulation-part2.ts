export const bioGeneRegPart2Data = {
  topicSlug: 'gene-regulation',
  sections: [
    {
      id: 'grp2-intro',
      type: 'text' as const,
      content: `
## Prokaryotic Regulation — Operons

**Part 2 of 7**

Bacteria live in volatile environments. *E. coli* in your gut may be bathed in glucose one minute and switched to lactose the next. Making enzymes is expensive, so a bacterium should build a sugar-digesting enzyme **only when that sugar is present** and **only when no better fuel is available**. The **operon** is the elegant solution.

An **operon** is a cluster of functionally related genes controlled as a single unit. Its anatomy:

| Element | Type | Role |
|---|---|---|
| **Promoter** | cis (DNA) | Binding site for RNA polymerase; where transcription starts |
| **Operator** | cis (DNA) | Switch sequence; a repressor binds here to block polymerase |
| **Structural genes** | DNA | The genes encoding the enzymes; transcribed together as one mRNA |

Because the structural genes share one promoter and one operator, they are transcribed into a **single polycistronic mRNA** and switched on or off **together**. A regulatory gene (often nearby) encodes the **trans-acting** protein — a repressor or activator — that reads the cell's signals.

> **Key distinction (preview):** The lac operon is **inducible** (normally OFF, switched ON by a signal). The trp operon is **repressible** (normally ON, switched OFF by a signal). Knowing which is which is a perennial AP trap.
      `
    },
    {
      id: 'grp2-lac-negative',
      type: 'text' as const,
      content: `
### The *lac* Operon I — Negative Control (the LacI Repressor)

The *lac* operon encodes the enzymes that import and digest lactose, including **lacZ** ($\\beta$-galactosidase, which cleaves lactose into glucose + galactose) and **lacY** (lactose permease). It is **inducible**: by default it is OFF, because most of the time there is no lactose to digest.

**Negative control** uses a repressor:

1. The separate **lacI** gene constitutively produces the **LacI repressor** protein (a trans-acting factor).
2. With **no lactose present**, LacI binds the **operator**, physically blocking RNA polymerase. The operon is **OFF** — making lactose enzymes when there is no lactose would waste resources.
3. When **lactose is present**, some is converted to **allolactose**, the true **inducer**. Allolactose binds LacI (an allosteric change), LacI releases the operator, and RNA polymerase transcribes the structural genes. The operon turns **ON**.

This is "negative" control because the *default action of the regulatory protein is to repress*; the signal (allolactose) works by **removing** the repressor.

Operon map (no lactose, repressed):

| lacI gene | promoter | operator | lacZ | lacY | lacA |
|---|---|---|---|---|---|
| → LacI repressor | RNA pol site | **LacI bound — BLOCKED** | (off) | (off) | (off) |

> **Mechanistic note:** Allolactose, not lactose itself, is the inducer. In the lab, the non-metabolizable mimic **IPTG** is used to induce the operon without being consumed — a detail that signals the inducer acts on LacI, not as a fuel.
      `
    },
    {
      id: 'grp2-lac-positive',
      type: 'text' as const,
      content: `
### The *lac* Operon II — Positive Control (CAP, cAMP, and the Glucose Effect)

Relieving repression is only half the story. Even with lactose present, the cell should *prefer glucose* if both are available — glucose is the easier fuel. This preference is enforced by **positive control** layered on top of the repressor.

The players:

- **CAP** (catabolite activator protein), a trans-acting **activator**.
- **cAMP** (cyclic AMP), a small-molecule signal whose level reports **glucose scarcity**. When glucose is **low**, cAMP is **high**; when glucose is **high**, cAMP is **low**.

The logic:

1. CAP can only bind its DNA site (just upstream of the promoter) when it is complexed with **cAMP**.
2. Bound **CAP-cAMP recruits RNA polymerase**, dramatically boosting transcription. Without it, the lac promoter is weak — polymerase binds poorly even when the operator is free.
3. **When glucose is high**, cAMP falls, CAP cannot bind, and transcription stays **low even if lactose is present and the repressor is off.**

This is **catabolite repression** (the "glucose effect"): the presence of glucose indirectly *represses* the lac operon by lowering cAMP. CAP is the textbook example of **positive control** — the regulatory protein's job is to *activate*, and the signal works by *enabling* it to bind.

> **AP trap:** Catabolite repression is **positive control** (CAP is an *activator*), despite the misleading word "repression." The repression is of the operon's output and is achieved by *withdrawing an activator*, not by adding a repressor.
      `
    },
    {
      id: 'grp2-truth-table',
      type: 'text' as const,
      content: `
### Putting It Together — The Four Conditions (Truth Table)

The lac operon integrates **two inputs** (is lactose present? is glucose present?) through **two regulators** (LacI repressor, CAP activator). Work through all four combinations:

| Glucose | Lactose | cAMP | LacI repressor | CAP-cAMP activator | RNA polymerase | Transcription |
|---|---|---|---|---|---|---|
| − | − | High | **Bound** (operator blocked) | Bound, but operator blocked | Blocked | **OFF** |
| + | − | Low | **Bound** (operator blocked) | Not bound | Blocked | **OFF** |
| + | + | Low | Released (allolactose) | **Not bound** (low cAMP) | Binds weakly | **LOW** |
| − | + | High | Released (allolactose) | **Bound** (recruits pol) | Strongly recruited | **HIGH** |

**Reading the table:**

- **No lactose ⇒ OFF**, regardless of glucose. With no substrate, the repressor stays on the operator; there is nothing to induce. (Top two rows.)
- **Lactose present ⇒ repressor off**, but output now depends on glucose. With glucose still around (row 3), low cAMP means no CAP-cAMP, the weak promoter is barely used, and transcription is only **LOW** ("leaky"). With glucose gone (row 4), high cAMP lets CAP-cAMP supercharge the promoter, and transcription is **HIGH**.

**Why glucose "wins":** The cell wants maximal lac expression *only* in the one situation where it is truly advantageous — lactose available **and** glucose exhausted. Glucose, by suppressing cAMP, holds the operon at a low level until glucose runs out, even after the repressor has let go. Two independent switches (one negative, one positive) must *both* favor "on" to get full transcription.

> **One-line summary:** Lactose flips the repressor switch; the *absence of glucose* flips the activator switch. **Full HIGH expression requires both** — lactose ON and glucose OFF.
      `
    },
    {
      id: 'grp2-quiz1',
      type: 'multiple-choice' as const,
      content: `
### Checkpoint — Predicting *lac* Operon Output
      `,
      exercise: {
        questions: [
          {
            question: 'A culture of wild-type E. coli is grown in medium containing BOTH glucose and lactose. What level of lac operon transcription is expected, and why?',
            options: [
              'High, because lactose is present to induce the operon',
              'Low, because glucose keeps cAMP low so CAP cannot activate the weak promoter, even though the repressor is off',
              'Off, because glucose causes the repressor to bind the operator',
              'High, because glucose increases cAMP and activates CAP'
            ],
            correctAnswer: 1,
            explanation: 'With lactose present the repressor is released, but glucose keeps cAMP low, so CAP-cAMP cannot bind and the weak promoter yields only LOW transcription — this is catabolite repression. Option A is the trap: lactose alone is not sufficient for HIGH output; you also need glucose absent. Option C wrongly claims glucose acts through the repressor (glucose acts through cAMP/CAP). Option D inverts the cAMP relationship — glucose LOWERS cAMP.'
          },
          {
            question: 'In the lab, IPTG (a non-metabolizable lactose analog) is added to a wild-type lac culture growing on glucose. What happens, and what does this reveal?',
            options: [
              'The operon turns fully ON, proving IPTG raises cAMP',
              'The repressor releases the operator, but transcription stays low because glucose keeps cAMP/CAP low — showing the inducer and the activator act independently',
              'Nothing, because IPTG cannot enter the cell',
              'The operon stays OFF because IPTG is not real lactose'
            ],
            correctAnswer: 1,
            explanation: 'IPTG binds LacI and releases the operator (it mimics allolactose), so the negative switch flips — but the positive switch is still off because glucose is present and cAMP is low. Result: low transcription, demonstrating the two controls are separable. Option A is wrong because IPTG does not affect cAMP. Option D misunderstands induction: IPTG induces precisely because it binds the repressor without needing to be metabolized.'
          },
          {
            question: 'Which condition produces the HIGHEST level of lac operon transcription in wild-type E. coli?',
            options: [
              'Glucose present, lactose absent',
              'Glucose present, lactose present',
              'Glucose absent, lactose present',
              'Glucose absent, lactose absent'
            ],
            correctAnswer: 2,
            explanation: 'Maximal expression needs BOTH switches favoring on: lactose present (repressor off) AND glucose absent (cAMP high, CAP-cAMP bound, strong recruitment). Only "glucose absent, lactose present" satisfies both. The trap is "glucose present, lactose present," which only gives LOW output because catabolite repression holds it down. The two "lactose absent" rows are OFF — no inducer means the repressor stays bound.'
          }
        ]
      }
    },
    {
      id: 'grp2-trp',
      type: 'text' as const,
      content: `
### The *trp* Operon — Repressible Control and Attenuation

The *trp* operon encodes enzymes that **synthesize** the amino acid tryptophan. The logic is opposite to lac: a cell should make tryptophan-building enzymes **only when tryptophan is scarce**, and shut them off once enough has accumulated. So the trp operon is **repressible** — normally **ON**, switched **OFF** by its own end product.

**Repression by a corepressor:**

1. The **trpR** gene makes the **trp repressor**, but the repressor is **inactive on its own** and cannot bind the operator. So by default the operon is **ON** and tryptophan is synthesized.
2. When **tryptophan is abundant**, tryptophan acts as a **corepressor**: it binds the trp repressor, changing its shape so it can now bind the operator. The operon switches **OFF**.
3. This is **feedback (end-product) repression** — the product of the pathway shuts down its own production.

**Inducible vs. repressible — side by side:**

| | *lac* operon (inducible) | *trp* operon (repressible) |
|---|---|---|
| Default state | OFF | ON |
| Pathway type | Catabolic (breaks down lactose) | Anabolic (builds tryptophan) |
| Signal molecule | **Inducer** (allolactose) | **Corepressor** (tryptophan) |
| Effect of signal | Turns operon ON (removes repressor) | Turns operon OFF (activates repressor) |
| Repressor's default | Active (binds operator) | Inactive (cannot bind) |

**Attenuation** (a second, finer layer in trp): beyond the on/off operator switch, *E. coli* uses **attenuation** to fine-tune output. Because transcription and translation are coupled, the speed of a ribosome translating a short leader peptide rich in Trp codons determines whether a terminator hairpin forms in the mRNA. When tryptophan (and thus charged tRNA-Trp) is plentiful, the ribosome moves fast, a terminator hairpin forms, and transcription **stops early** — adding extra dampening on top of repression. When Trp is scarce, the ribosome stalls, an antiterminator forms, and transcription proceeds.

> **AP trap:** **Repressible ≠ inducible.** The trp operon is repressible (default ON, end product turns it OFF via a *corepressor*); the lac operon is inducible (default OFF, substrate turns it ON via an *inducer*). Both can use repressor proteins, but the repressor's *default activity* and the *direction of the switch* are opposite.
      `
    },
    {
      id: 'grp2-exit',
      type: 'multiple-choice' as const,
      content: `
### Exit Ticket — Operon Logic
      `,
      exercise: {
        questions: [
          {
            question: 'Adding tryptophan to a wild-type E. coli culture causes the trp operon to switch off. Adding lactose to a wild-type culture causes the lac operon to switch on. The best explanation for these opposite responses is that:',
            options: [
              'Tryptophan and lactose bind the same regulatory protein with opposite effects',
              'The trp operon is repressible (its end product is a corepressor that activates the repressor), whereas the lac operon is inducible (its substrate is an inducer that inactivates the repressor)',
              'The trp operon lacks a promoter, so it responds differently',
              'Lactose increases cAMP while tryptophan decreases it'
            ],
            correctAnswer: 1,
            explanation: 'Repressible vs. inducible logic accounts for the opposite responses: tryptophan (a corepressor of an anabolic pathway) switches trp OFF, while lactose-derived allolactose (an inducer of a catabolic pathway) switches lac ON. Option A is false — they act on different repressors. Option D conflates two unrelated mechanisms; tryptophan does not act through cAMP, and the trp/lac contrast is about repressor default state, not cAMP.'
          },
          {
            question: 'A geneticist deletes the trpR gene (which encodes the trp repressor) in E. coli. What is the predicted effect on the trp operon when tryptophan is abundant?',
            options: [
              'The operon will be OFF, because tryptophan still represses it directly',
              'The operon will remain ON (constitutively expressed), because without the repressor, tryptophan has nothing to activate',
              'The operon will be induced to even higher levels',
              'The operon will only express if glucose is also removed'
            ],
            correctAnswer: 1,
            explanation: 'Tryptophan represses the trp operon only by acting as a corepressor for the TrpR repressor. With trpR deleted, there is no repressor to activate, so the operator is never blocked and the operon stays ON even when tryptophan is high — it is now constitutive. Option A is the trap: tryptophan does not bind DNA itself; it needs the repressor. Option D wrongly imports the lac/glucose-CAP system, which is irrelevant to trp.'
          }
        ]
      }
    }
  ]
};
