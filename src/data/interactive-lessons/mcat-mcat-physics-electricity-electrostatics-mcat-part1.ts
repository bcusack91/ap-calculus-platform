import type { LessonData } from './registry'

export const electrostaticsMcatPart1: LessonData = {
  topicSlug: 'mcat-physics-electricity-electrostatics-mcat',
  sections: [
    {
      id: 'esc1-intro',
      type: 'text' as const,
      content: `# Electrostatics Part 1: Charge & Coulomb's Law

**Part 1 of 2 — Charge, Conductors & Charging**

**Where this fits.** This is the first of three electrostatics lessons. It covers charge itself, how objects become charged, and the force between charges. *Electrostatics Part 2: Electric Fields* turns that force into the electric field, and *Electrostatics Part 3: Electric Potential & Energy* adds voltage and energy.

### Electric Charge

**Charge** is a basic property of matter, like mass. Unlike mass, it comes in two kinds, positive and negative, and one rule governs how they interact:

- **Like charges repel; unlike charges attract.** Every electric force, field and circuit traces back to this rule.

| Particle | Charge | Where it is |
|---|---|---|
| proton | $+e$ | locked in the nucleus |
| neutron | $0$ | locked in the nucleus |
| electron | $-e$ | outside the nucleus, able to move |

The **elementary charge** is $e = 1.6 \\times 10^{-19}\\;\\text{C}$. The SI unit, the **coulomb** (C), is an enormous amount of charge, so everyday static charges are measured in microcoulombs ($1\\;\\mu\\text{C} = 10^{-6}\\;\\text{C}$) or nanocoulombs ($1\\;\\text{nC} = 10^{-9}\\;\\text{C}$).

**Neutral versus charged.** A neutral object has equal numbers of protons and electrons. A net charge means an imbalance:

- **In a solid, only electrons move**, because protons are locked in nuclei.
- Gaining electrons makes an object **negative**; losing electrons makes it **positive**.
- Ions follow the same rule: $\\text{Na}^+$ has lost one electron (charge $+e$), $\\text{Cl}^-$ has gained one ($-e$), and $\\text{Ca}^{2+}$ has lost two ($+2e$).

**Charge is quantized.** Every net charge is a whole-number multiple of $e$:

$$q = \\pm ne \\qquad n = \\frac{|q|}{e}$$

Here $n$ is the number of extra or missing electrons. Extra electrons give a negative $q$; missing electrons give a positive $q$. For example, a plastic pipette tip that picks up $5.0 \\times 10^{9}$ electrons has $q = -(5.0 \\times 10^{9})(1.6 \\times 10^{-19}) = -8.0 \\times 10^{-10}\\;\\text{C} = -0.80\\;\\text{nC}$. A reading such as $4.0 \\times 10^{-19}\\;\\text{C}$ cannot be right, because it works out to $2.5e$, and no object carries half an electron.

**Charge is conserved.** The total charge of an isolated system never changes. Charge can be moved, but it is never created or destroyed.

- Rubbing a balloon on hair moves electrons from the hair to the balloon. The balloon ends with $-Q$ and the hair with $+Q$: equal and opposite, total still zero.
- Conservation holds in nuclear decay as well. When a neutron in a nucleus turns into a proton (beta decay), an electron is created with it: $0 = (+e) + (-e)$.
- When counting electrons, start from where the object starts. An object with an excess of $3 \\times 10^{10}$ electrons that loses $5 \\times 10^{10}$ ends with a SHORTAGE of $2 \\times 10^{10}$, so its charge changes sign.

**Charging moves charge, not noticeable mass.** An electron has a mass of only $9.1 \\times 10^{-31}\\;\\text{kg}$, so even a trillion ($10^{12}$) extra electrons add about $10^{-18}\\;\\text{kg}$, far too little to weigh.`
    },
    {
      id: 'esc1-quiz1',
      type: 'multiple-choice' as const,
      content: `**Practice: Electric Charge** 🎯`,
      exercise: {
        questions: [
          {
            question: `A glass rod is rubbed with silk and becomes positively charged. This happens because:`,
            options: [`The rod gains protons rubbed off the silk`, `Friction creates new positive charge on it`, `The rod loses electrons to the silk`, `Electrons flow from the silk onto the rod`],
            correctAnswer: 2,
            yield: 'HIGH',
            explanation: `Charging by friction only ever transfers electrons: protons are locked in nuclei, and charge is never created. Losing electrons leaves the rod with more protons than electrons, a net positive charge. Electrons flowing ONTO the rod would make it negative.`
          },
          {
            question: `During a burst of activity, $5.0 \\times 10^{6}$ calcium ions ($\\text{Ca}^{2+}$) enter a cell. How much charge do they carry into the cell? ($e = 1.6 \\times 10^{-19}\\;\\text{C}$)`,
            options: [`$+1.6 \\times 10^{-12}\\;\\text{C}$`, `$+8.0 \\times 10^{-13}\\;\\text{C}$`, `$-1.6 \\times 10^{-12}\\;\\text{C}$`, `$+6.3 \\times 10^{25}\\;\\text{C}$`],
            correctAnswer: 0,
            yield: 'HIGH',
            explanation: `Each $\\text{Ca}^{2+}$ ion is missing two electrons, so it carries $+2e$: $q = (5.0 \\times 10^{6})(2)(1.6 \\times 10^{-19}) = +1.6 \\times 10^{-12}\\;\\text{C}$. $8.0 \\times 10^{-13}\\;\\text{C}$ gives each ion only one elementary charge, the negative value treats a cation as if it had gained electrons, and $6.3 \\times 10^{25}\\;\\text{C}$ divides by $e$ instead of multiplying.`
          },
          {
            question: `Four students each report the net charge on a small bead. Which reported value cannot be correct? ($e = 1.6 \\times 10^{-19}\\;\\text{C}$)`,
            options: [`$3.2 \\times 10^{-19}\\;\\text{C}$`, `$8.0 \\times 10^{-19}\\;\\text{C}$`, `$4.8 \\times 10^{-18}\\;\\text{C}$`, `$2.4 \\times 10^{-19}\\;\\text{C}$`],
            correctAnswer: 3,
            yield: 'HIGH',
            explanation: `Charge is quantized, so every net charge divided by $e$ must give a whole number. $2.4 \\times 10^{-19}\\;\\text{C}$ is $1.5e$, which would need half an electron. The other values are $2e$, $5e$ and $30e$; the last one looks different only because of its power of ten.`
          },
          {
            question: `A neutral plastic rod is rubbed with a neutral wool cloth, and the rod ends with a charge of $-3.2\\;\\text{nC}$. Which statement describes the cloth? ($e = 1.6 \\times 10^{-19}\\;\\text{C}$)`,
            options: [`It has $-3.2\\;\\text{nC}$, having gained $2.0 \\times 10^{10}$ electrons`, `It has $+3.2\\;\\text{nC}$, having lost $2.0 \\times 10^{10}$ electrons`, `It has $+3.2\\;\\text{nC}$, having gained $2.0 \\times 10^{10}$ protons`, `It has $+1.6\\;\\text{nC}$, having lost $1.0 \\times 10^{10}$ electrons`],
            correctAnswer: 1,
            yield: 'HIGH',
            explanation: `Charge is conserved and the pair started neutral, so the cloth must carry $+3.2\\;\\text{nC}$. It got there by losing $n = (3.2 \\times 10^{-9})/(1.6 \\times 10^{-19}) = 2.0 \\times 10^{10}$ electrons to the rod. Giving the cloth $-3.2\\;\\text{nC}$ would make the total $-6.4\\;\\text{nC}$, protons do not move between solids, and $+1.6\\;\\text{nC}$ halves the charge as if the two had shared it by contact.`
          }
        ]
      }
    },
    {
      id: 'esc1-charging',
      type: 'text' as const,
      content: `### Conductors and Insulators

- In a **conductor** (metals, salt water) charges move freely. In a metal the moving charges are electrons; in a salt solution they are ions.
- In an **insulator** (rubber, glass, plastic, dry air) charges stay where they are put.

Put a dab of extra charge on a metal object and it spreads over the whole **outer surface**, because like charges repel and get as far apart as they can. The same dab on a plastic object stays in one spot. Charge on a conductor settles where the free charges inside feel no net push; the next lesson describes this as zero electric field inside the metal.

**The same split runs biology.** The fluids inside and outside a cell are salt solutions, so they conduct: their ions move. The lipid bilayer between them is an insulator. That is why a membrane can hold excess negative charge on its inner face and positive charge on its outer face, and why the many lipid layers of **myelin** insulate an axon. The short version: body fluids conduct, membranes insulate.

### Charging by Friction, Conduction and Induction

There are three ways to give an object a net charge. In all three, electrons move and the total charge is conserved.

**1. Friction.** Rub two different materials together, usually insulators, and electrons move from one to the other. The two end with **equal and opposite** charges. Which material takes the electrons depends on the pair, and a question will tell you (rubber rubbed with fur becomes negative; glass rubbed with silk becomes positive).

**2. Conduction (contact).** Touch a charged object to a conductor and charge flows between them, so both end with the **SAME sign**. Two IDENTICAL conducting spheres that touch share their total charge equally:

$$q_{\\text{each}} = \\frac{q_1 + q_2}{2}$$

Add the charges with their signs, then split. If the spheres touch more than once, take one contact at a time.

**3. Induction (no contact).** A **ground** is a huge reservoir, such as the Earth, that can supply or accept electrons without noticing. A finger touching the object works as a ground too. To charge a metal sphere by induction:

1. **Bring a charged rod near** the sphere without touching it. The sphere's electrons shift: toward a positive rod, away from a negative rod. The sphere is still neutral overall.
2. **Connect the sphere to ground.** Electrons flow through the wire: UP from the ground for a positive rod, DOWN into the ground for a negative rod.
3. **Remove the ground connection** while the rod is still in place. This traps the result.
4. **Remove the rod.** The trapped charge spreads evenly over the sphere's surface.

The sphere keeps a charge **OPPOSITE** to the rod's, and the rod loses none of its own. The order matters: take the rod away first, and the electrons simply flow back through the wire.

| Method | Contact with the charged object? | Sign of the new charge |
|---|---|---|
| friction | yes (rubbing) | the two objects end opposite |
| conduction | yes | same as the charged object |
| induction | no (ground needed) | opposite to the charged object |

**Polarization: why a charged object attracts a neutral one.** A charged rod attracts neutral scraps of paper, and a charged balloon sticks to a neutral wall. Nothing has been transferred; the charges inside the neutral object have only shifted.

- In a conductor, electrons move so that charge opposite to the rod gathers on the near side.
- In an insulator, each atom's electron cloud shifts slightly, so every atom has a side a little nearer the rod.
- Either way, the opposite charge is NEARER the rod than the like charge. The electric force is stronger at shorter distance, so the attraction on the near side beats the repulsion on the far side: the net force is an attraction.

This has a consequence worth memorizing. A charged object attracts both an oppositely charged object and a neutral one, so **attraction does not prove an object is charged. Only repulsion does**, because repulsion needs two charges of the same sign.

<!-- yield:low -->
- The ranking of materials by how readily they give up electrons when rubbed is called the triboelectric series. You never need to memorize it.
<!-- /yield -->`
    },
    {
      id: 'esc1-worked',
      type: 'text' as const,
      content: `### Worked Example — Sharing Charge Between Identical Spheres

**Problem.** Two identical metal spheres on insulating stands carry charges of $-12\\;\\mu\\text{C}$ (sphere A) and $+4.0\\;\\mu\\text{C}$ (sphere B). Use $e = 1.6 \\times 10^{-19}\\;\\text{C}$.

- **(a)** What is the total charge of the pair?
- **(b)** The spheres touch and are separated. What is the charge on each?
- **(c)** How many electrons moved during the contact, and in which direction?
- **(d)** Sphere B then touches a third identical sphere C, which is neutral. What is B's final charge?

**(a) Add with signs.** $-12 + 4.0 = -8.0\\;\\mu\\text{C}$.

**(b) Split equally.** Identical spheres share the total from (a): $\\dfrac{-8.0}{2} = -4.0\\;\\mu\\text{C}$ each.

**(c) Count from the CHANGE in one sphere.** B went from $+4.0$ to $-4.0\\;\\mu\\text{C}$, a change of $-8.0\\;\\mu\\text{C}$, so B gained electrons:

$$n = \\frac{8.0 \\times 10^{-6}}{1.6 \\times 10^{-19}} = 5.0 \\times 10^{13}$$

They flowed from A to B. As a check, A went from $-12$ to $-4.0\\;\\mu\\text{C}$: it lost the same $8.0\\;\\mu\\text{C}$ of negative charge.

**(d) One contact at a time.** B and C share $-4.0 + 0 = -4.0\\;\\mu\\text{C}$, so B ends with $-2.0\\;\\mu\\text{C}$. The three spheres now hold $-4.0$, $-2.0$ and $-2.0\\;\\mu\\text{C}$: still $-8.0\\;\\mu\\text{C}$ in total.

### Worked Example — Charging a Sphere by Induction

**Problem.** A negatively charged rod is held near a neutral metal sphere on an insulating stand, without touching it. Use $e = 1.6 \\times 10^{-19}\\;\\text{C}$.

- **(a)** How do the charges in the sphere rearrange?
- **(b)** The sphere is connected to ground while the rod is held in place, and $2.0 \\times 10^{10}$ electrons flow through the wire. Which way do they flow?
- **(c)** The wire is removed, then the rod. What is the sphere's final charge, and where does it sit?
- **(d)** If the rod had touched the sphere instead, what sign would the sphere end with?

**(a) Shift.** The rod repels the sphere's electrons to the far side, leaving the near side positive. The sphere is still neutral overall.

**(b) Flow.** Down the wire, from the sphere into the ground: the rod pushes electrons as far away as they can get.

**(c) Final charge.** The sphere is short of the electrons from (b): $q = +(2.0 \\times 10^{10})(1.6 \\times 10^{-19}) = +3.2 \\times 10^{-9}\\;\\text{C} = +3.2\\;\\text{nC}$. With the rod gone, it spreads evenly over the outer surface.

**(d) Contact instead.** Negative. Contact shares the rod's own charge, so conduction gives the SAME sign as the rod, while induction gave the OPPOSITE sign in (c).`
    },
    {
      id: 'esc1-quiz2',
      type: 'multiple-choice' as const,
      content: `**Practice: Conductors, Insulators & Charging** 🎯`,
      exercise: {
        questions: [
          {
            question: `A negatively charged balloon is pressed against a neutral painted wall and sticks there. Why is there a net attraction between the balloon and the wall?`,
            options: [`The wall takes on a net charge opposite to the balloon's`, `Electrons jump across from the balloon and charge the wall`, `The wall's nearer, positive side is pulled harder than its farther, negative side is pushed`, `A neutral object is always pulled toward any nearby object`],
            correctAnswer: 2,
            yield: 'HIGH',
            explanation: `The balloon polarizes the wall: electron clouds in the wall's atoms shift away, leaving positive charge slightly nearer the balloon than negative charge. The electric force is stronger at shorter distance, so the attraction wins. The wall stays neutral overall, so it has no net charge, and any electrons that did cross would make the wall negative and cause repulsion.`
          },
          {
            question: `A negatively charged rod is held near a neutral metal sphere on an insulating stand. A student touches the far side of the sphere with a finger, takes the finger away, and only then removes the rod. What is the sphere's final charge?`,
            options: [`Positive: electrons left through the finger`, `Negative: electrons arrived from the charged rod`, `Zero: the rod never made contact with the sphere`, `Negative: electrons came up through the finger`],
            correctAnswer: 0,
            yield: 'HIGH',
            explanation: `The finger acts as a ground. The negative rod repels the sphere's electrons, and some escape through the finger; removing the finger first traps that shortage, so the sphere is left positive. Induction always leaves a charge opposite to the rod's, and it needs no contact with the rod, so "negative" and "zero" both fail. Electrons would come UP through the finger only for a positive rod.`
          },
          {
            question: `Three identical metal spheres on insulating stands carry charges of $+8.0\\;\\text{nC}$ (X), zero (Y) and $-4.0\\;\\text{nC}$ (Z). X touches Y and is moved away; then Y touches Z and is moved away. What is the final charge on Y?`,
            options: [`$+4.0\\;\\text{nC}$`, `$+2.0\\;\\text{nC}$`, `$-2.0\\;\\text{nC}$`, `$0\\;\\text{nC}$`],
            correctAnswer: 3,
            yield: 'HIGH',
            explanation: `Take one contact at a time. X and Y share $+8.0\\;\\text{nC}$, so Y leaves with $+4.0\\;\\text{nC}$; then Y and Z share $+4.0 + (-4.0) = 0$, so each ends neutral. $+4.0\\;\\text{nC}$ stops after the first contact, $+2.0\\;\\text{nC}$ lets X share directly with Z, and $-2.0\\;\\text{nC}$ halves Z's charge while ignoring the charge Y brought to the contact.`
          },
          {
            question: `At rest, a neuron holds a thin layer of excess negative charge on the inner face of its membrane and excess positive charge on the outer face. Which electrical property makes this separation possible?`,
            options: [`The membrane conducts, while the fluids on each side insulate`, `The lipid bilayer insulates, keeping apart the charges in two conducting fluids`, `Charge placed in a conducting fluid stays wherever it is put`, `The ions in the fluids on each side are fixed in place`],
            correctAnswer: 1,
            yield: 'MEDIUM',
            explanation: `The fluids on both sides are salt solutions whose ions move freely, so they conduct; the lipid bilayer between them is an insulator that ions cannot simply cross. That lets opposite charges sit on the two faces without flowing together. Swapping the roles fails because a conducting membrane would let the charges meet and cancel, and charge in a conductor does not stay put, since its ions are mobile.`
          }
        ]
      }
    },
    {
      id: 'esc1-summary',
      type: 'text' as const,
      content: `### Key Takeaways

- **Two kinds of charge.** Like charges repel and unlike charges attract; a proton carries $+e$ and an electron $-e$, with $e = 1.6 \\times 10^{-19}\\;\\text{C}$.
- **Quantized and conserved.** $q = \\pm ne$ with $n$ a whole number, and the total charge of an isolated system never changes.
- **Only electrons move in solids.** Gaining electrons makes an object negative; losing them makes it positive.
- **Conductors and insulators.** Charge spreads over a conductor's outer surface and stays put on an insulator; body fluids conduct, membranes insulate.
- **Three ways to charge.** Friction gives opposite charges, conduction the same sign as the charged object, induction the opposite sign.
- **Identical spheres share equally.** $q_{\\text{each}} = (q_1 + q_2)/2$, added with signs, one contact at a time.
- **Polarization.** A charged object of either sign attracts a neutral one, because the opposite charge shifts nearer.

**Common traps**

- **Protons on the move.** Rubbing or touching solids transfers electrons only, and it moves charge instead of creating it.
- **Sign backwards.** Gaining electrons makes an object MORE negative; a positive object has lost electrons.
- **Induced sign.** Induction leaves the sign opposite to the rod's; only contact gives the same sign.
- **Attraction as proof.** A neutral object is attracted too, so only repulsion shows that both objects are charged.
- **Counting from the final charge.** Electrons transferred come from the CHANGE in one object's charge divided by $e$.
- **Rod before ground.** Removing the rod before the ground connection lets the electrons flow back, leaving no charge.

<!-- yield:low -->
- Low-yield extras: the triboelectric series (the ranking of materials by how readily they give up electrons when rubbed).
<!-- /yield -->`
    }
  ]
}
