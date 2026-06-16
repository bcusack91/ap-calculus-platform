import type { LessonData } from '../registry'

/**
 * Hand-authored interactive lesson — Vietnam & Social Change (AP U.S. History).
 * Registry key / DB Topic.slug: 'apush-vietnam-social-change'.
 * 7 parts, gold-standard structure modeled on the algebra1-completing-the-square pilot
 * and the APES concept lessons: teach (text) → interactive check
 * (multiple-choice / dropdown-select / short-answer input-boxes) → applications → Exit Quiz.
 * Concept/period-forward (non-math topic, APUSH Period 8, c. 1945–1980), so checks favor
 * multiple-choice + dropdown, with a handful of date / number / term input-boxes.
 * Every date, name, statute, and figure has been cross-checked. LaTeX uses DOUBLED
 * backslashes (template-literal strings); dollar amounts in prose are escaped as \$.
 */
export const parts: LessonData[] = [
  // ───────────────────────── PART 1 ─────────────────────────
  {
    topicSlug: 'apush-vietnam-social-change',
    sections: [
      {
        id: 'apvsc1-intro',
        type: 'text' as const,
        content: `# 🕊️ Vietnam & Social Change

**Part 1 of 7 — Roots of U.S. Involvement (Containment to Escalation)**

---

### Topics in This Part

| Section |
|---------|
| Containment and the Domino Theory |
| From Truman to Eisenhower: Indochina |
| Geneva, Diem, and a Divided Vietnam |
| Kennedy's Commitment |

> 🔑 **Key Concept:** U.S. involvement in Vietnam was driven by **Cold War containment**, not by any direct attack on the United States. Every president from Truman through Nixon inherited and deepened the commitment, fearing that a communist Vietnam would trigger the **domino theory** across Southeast Asia.`,
      },
      {
        id: 'apvsc1-containment',
        type: 'text' as const,
        content: `## Containment and the Domino Theory

After World War II, U.S. foreign policy was organized around **containment** — the idea, articulated by diplomat **George Kennan**, that the United States should prevent the *spread* of communism rather than roll it back where it already existed.

In Southeast Asia, containment took the form of the **domino theory**: the belief that if one country fell to communism, neighboring countries would topple in sequence like a row of dominoes. President **Eisenhower** publicly described this image at a 1954 press conference.

| Concept | Core Idea | Who/When |
|---------|-----------|----------|
| **Containment** | Stop communism from spreading | Kennan; Truman Doctrine, 1947 |
| **Domino Theory** | One fall triggers the next | Eisenhower, 1954 |
| **Massive Retaliation** | Threat of nuclear response | Eisenhower / Dulles, 1950s |

> 💡 **Memory hook:** Vietnam was never about Vietnam alone in policymakers' minds — it was about **credibility** and the *next* domino. That framing explains why leaders kept escalating even as the war went badly.`,
      },
      {
        id: 'apvsc1-q-containment',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'The "domino theory" was used primarily to justify which policy?',
              options: [
                'Continued U.S. military commitment to prevent communism from spreading in Southeast Asia',
                'Direct invasion of the Soviet Union',
                'Withdrawal of all U.S. forces from Asia',
                'A return to pre-war isolationism',
              ],
              correctAnswer: 0,
              explanation: 'The domino theory held that if South Vietnam fell, neighboring nations would fall in turn. It was used to justify deepening U.S. commitment under containment, not invasion of the USSR or withdrawal.',
            },
            {
              question: 'Containment as a Cold War strategy is most closely associated with which figure?',
              options: ['George Kennan', 'Joseph McCarthy', 'Douglas MacArthur', 'Robert Oppenheimer'],
              correctAnswer: 0,
              explanation: 'George Kennan articulated containment in his 1946 "Long Telegram" and 1947 "X" article, shaping the Truman Doctrine and decades of policy.',
            },
          ],
        },
      },
      {
        id: 'apvsc1-indochina',
        type: 'text' as const,
        content: `## From Truman to Eisenhower: Indochina

Vietnam had been a French colony (part of **French Indochina**). After WWII, nationalist and communist leader **Ho Chi Minh** declared independence, and the **First Indochina War** broke out between French forces and Ho's **Viet Minh**.

- The **Truman** administration began funding the French effort, framing it as part of containment.
- By the early 1950s the United States was paying roughly **80%** of France's war costs in Indochina.
- In **1954**, the French suffered a decisive defeat at **Dien Bien Phu**, ending their colonial hold.

The **Geneva Accords (1954)** temporarily divided Vietnam at the **17th parallel**:
- **North Vietnam** under Ho Chi Minh (communist), capital Hanoi.
- **South Vietnam** under **Ngo Dinh Diem** (anti-communist, U.S.-backed), capital Saigon.
- Elections to **reunify** the country were scheduled for 1956 — but Diem, with U.S. support, refused to hold them, fearing Ho would win.

> ⚠️ **Common trap:** The Geneva division was meant to be *temporary*, pending nationwide elections. The cancellation of those 1956 elections is a key cause of the renewed conflict.`,
      },
      {
        id: 'apvsc1-dd-indochina',
        type: 'dropdown-select' as const,
        content: `**Build the Timeline** 🔽

Fill in each blank about the road into Vietnam.`,
        exercise: {
          dropdowns: [
            { label: 'Nationalist/communist leader of the Viet Minh:', options: ['Ho Chi Minh', 'Mao Zedong', 'Ngo Dinh Diem', 'Pol Pot'] },
            { label: 'The 1954 French defeat that ended colonial rule:', options: ['Dien Bien Phu', 'Tet', 'Khe Sanh', 'Hue'] },
            { label: 'The Geneva Accords divided Vietnam at the:', options: ['17th parallel', '38th parallel', 'Mekong Delta', 'Equator'] },
            { label: 'U.S.-backed leader of South Vietnam:', options: ['Ngo Dinh Diem', 'Ho Chi Minh', 'Nguyen Cao Ky', 'Bao Dai'] },
          ],
          correctAnswers: ['Ho Chi Minh', 'Dien Bien Phu', '17th parallel', 'Ngo Dinh Diem'],
          hint1: 'The Viet Minh leader also declared Vietnamese independence in 1945.',
          hint2: 'The French lost a fortified valley position in 1954, prompting the Geneva talks.',
          hint3: 'Korea was divided at the 38th parallel; Vietnam was divided at the 17th. The South\'s first leader shared his surname "Ngo."',
          explanation: 'Ho Chi Minh led the Viet Minh; the French defeat at Dien Bien Phu (1954) led to the Geneva Accords, which split Vietnam at the 17th parallel into Ho\'s North and Diem\'s U.S.-backed South.',
        },
      },
      {
        id: 'apvsc1-kennedy',
        type: 'text' as const,
        content: `## Kennedy's Commitment

President **John F. Kennedy** deepened U.S. involvement without committing large combat units. He greatly increased the number of American **military "advisers"** in South Vietnam — from about 900 when he took office to roughly **16,000** by late 1963 — and authorized programs like the **Strategic Hamlet** initiative to separate peasants from the communist insurgents (the **Viet Cong**).

Diem's regime grew increasingly unpopular: corrupt, dominated by the Catholic minority, and repressive toward the Buddhist majority. After **Buddhist monks** staged public self-immolations in protest, U.S. officials concluded Diem was a liability. In **November 1963**, South Vietnamese generals overthrew and killed Diem in a coup the U.S. did not prevent. Kennedy himself was assassinated just **three weeks later**.

> 🔑 **Continuity, not a clean break:** Kennedy expanded the commitment and tied U.S. prestige to South Vietnam's survival. His successor, **Lyndon B. Johnson**, inherited that commitment — and a chaotic Saigon government — in late 1963.`,
      },
      {
        id: 'apvsc1-input-kennedy',
        type: 'input-boxes' as const,
        content: `**Anchor the Early Years** 🧮

Short answers about the road into Vietnam.

**1)** Year of the French defeat at Dien Bien Phu and the Geneva Accords: $\\,?$
**2)** Parallel of latitude at which Geneva divided Vietnam (number only, e.g. "17"): $\\,?$
**3)** Last name of the U.S.-backed South Vietnamese leader overthrown in 1963: $\\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['1954', '17', 'Diem'],
          hint1: 'The French lost and the Geneva talks concluded in the same year.',
          hint2: 'Korea split at the 38th parallel; Vietnam split at a lower number.',
          hint3: 'Ngo Dinh Diem — enter just his final name.',
          explanation: '1) 1954 (Dien Bien Phu and the Geneva Accords). 2) 17 — the 17th parallel. 3) Diem — Ngo Dinh Diem was overthrown and killed in November 1963.',
        },
      },
    ],
  },

  // ───────────────────────── PART 2 ─────────────────────────
  {
    topicSlug: 'apush-vietnam-social-change',
    sections: [
      {
        id: 'apvsc2-intro',
        type: 'text' as const,
        content: `# 🕊️ Vietnam & Social Change

**Part 2 of 7 — Escalation Under Johnson (Gulf of Tonkin to Americanization)**

---

> 🔑 **The Idea:** Under **Lyndon B. Johnson**, the conflict transformed from an advisory mission into a full-scale American war. A single naval incident — the **Gulf of Tonkin** — gave Johnson a near-blank check from Congress to escalate.`,
      },
      {
        id: 'apvsc2-tonkin',
        type: 'text' as const,
        content: `## The Gulf of Tonkin Resolution (1964)

In **August 1964**, the Johnson administration reported that North Vietnamese boats had attacked U.S. destroyers in the **Gulf of Tonkin**. (The first incident was real; a second reported attack is now widely doubted.) Johnson used the episode to win the **Gulf of Tonkin Resolution** from Congress.

| Feature | Detail |
|---------|--------|
| Date | August 1964 |
| Congressional vote | Near-unanimous (only **2** senators opposed) |
| What it authorized | The president to "take all necessary measures" to repel attacks — effectively, to wage war |
| Significance | Functioned as a substitute for a formal **declaration of war** |

> ⚠️ **Why it matters for the exam:** Congress never *declared* war on North Vietnam. The Gulf of Tonkin Resolution let the president wage a major war on his own authority — a precedent that fueled later debate over an "**imperial presidency**" and led to the **War Powers Act of 1973**.`,
      },
      {
        id: 'apvsc2-q-tonkin',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'The Gulf of Tonkin Resolution is significant primarily because it:',
              options: [
                'Gave the president broad authority to escalate the war without a formal declaration of war',
                'Formally declared war on North Vietnam and China',
                'Ended U.S. involvement in Vietnam',
                'Required all troops to withdraw within 90 days',
              ],
              correctAnswer: 0,
              explanation: 'The resolution authorized the president to "take all necessary measures," functioning as a substitute for a declaration of war and enabling massive escalation.',
            },
            {
              question: 'Which president used the Gulf of Tonkin Resolution to escalate U.S. ground involvement?',
              options: ['Lyndon B. Johnson', 'Dwight Eisenhower', 'Richard Nixon', 'Harry Truman'],
              correctAnswer: 0,
              explanation: 'LBJ obtained the resolution in 1964 and used it to begin large-scale bombing and troop deployments in 1965.',
            },
          ],
        },
      },
      {
        id: 'apvsc2-americanization',
        type: 'text' as const,
        content: `## Americanization of the War

With his authority secured, Johnson rapidly "Americanized" the war in **1965**:

- **Operation Rolling Thunder** — a sustained bombing campaign against North Vietnam that began in 1965 and continued for years.
- **Ground troops** poured in. U.S. troop levels rose from roughly **180,000** at the end of 1965 to a peak of about **536,000** in **1968**.
- The war relied on the **draft (Selective Service)**, which disproportionately affected working-class and minority young men, since college deferments shielded many wealthier students.

The military pursued a strategy of **attrition**, measured by the **body count** — the grim metric of enemy dead — rather than territory captured. Against a determined guerrilla enemy fighting on home soil, attrition produced enormous casualties without decisive victory.

> 💡 **The "guns and butter" dilemma:** Johnson tried to fund both the Vietnam War (*guns*) and his **Great Society** domestic programs (*butter*) at once. The strain contributed to rising inflation and forced hard budget choices later in the decade.`,
      },
      {
        id: 'apvsc2-input-numbers',
        type: 'input-boxes' as const,
        content: `**Key Numbers** 🧮

Fill in the missing figures from the escalation era.

**1)** Year of the Gulf of Tonkin Resolution: $\\,?$
**2)** Number of U.S. senators who voted *against* the Gulf of Tonkin Resolution: $\\,?$
**3)** Approximate peak U.S. troop level (in thousands, e.g. enter "536" for 536,000) reached in 1968: $\\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['1964', '2', '536'],
          hint1: 'The Tonkin incident and resolution both occurred in August of an election year.',
          hint2: 'The vote was nearly unanimous — only a tiny number of senators dissented.',
          hint3: 'The peak was reached the same year as the Tet Offensive (1968): about 536,000 troops.',
          explanation: '1) 1964 — the resolution passed in August 1964. 2) 2 senators (Wayne Morse and Ernest Gruening) opposed it. 3) ~536,000 troops, the peak, in 1968.',
        },
      },
      {
        id: 'apvsc2-strategy-bridge',
        type: 'text' as const,
        content: `## Naming the Tools of Escalation

It helps to keep the era's vocabulary straight, because the exam loves to test whether you can attach the right *name* to the right *strategy*. Escalation rested on three pillars: an **air campaign** over the North, a ground strategy of **attrition**, and the **draft** that supplied the manpower.

> 💡 Notice how each pillar generated its own backlash: bombing fueled international criticism, attrition produced rising casualty counts on the nightly news, and the draft put the war on millions of families' doorsteps.`,
      },
      {
        id: 'apvsc2-dd-strategy',
        type: 'dropdown-select' as const,
        content: `**Match the Strategy** 🔽`,
        exercise: {
          dropdowns: [
            { label: 'The sustained bombing campaign against North Vietnam:', options: ['Operation Rolling Thunder', 'Operation Overlord', 'Operation Desert Storm', 'Operation Linebacker'] },
            { label: 'Metric used to measure "progress" in a war of attrition:', options: ['body count', 'territory held', 'cities liberated', 'GDP growth'] },
            { label: 'System that conscripted young men into the military:', options: ['Selective Service draft', 'volunteer enlistment only', 'National Guard lottery', 'GI Bill'] },
          ],
          correctAnswers: ['Operation Rolling Thunder', 'body count', 'Selective Service draft'],
          hint1: 'The bombing operation "rolled" like thunder over the North starting in 1965.',
          hint2: 'Attrition is measured in enemy *dead*, not ground gained.',
          hint3: 'The draft was administered by the Selective Service System and drove much of the antiwar anger.',
          explanation: 'Rolling Thunder was the air campaign; attrition was measured by body count; the Selective Service draft supplied troops and became a flashpoint for protest.',
        },
      },
    ],
  },

  // ───────────────────────── PART 3 ─────────────────────────
  {
    topicSlug: 'apush-vietnam-social-change',
    sections: [
      {
        id: 'apvsc3-intro',
        type: 'text' as const,
        content: `# 🕊️ Vietnam & Social Change

**Part 3 of 7 — The Turning Point: Tet, the Media, and the Credibility Gap**

---

> 🔑 **The Idea:** The **Tet Offensive of 1968** was a *military* defeat for the communists but a *psychological and political* victory. It shattered official optimism and widened the **credibility gap** between what the government claimed and what Americans saw on television.`,
      },
      {
        id: 'apvsc3-tet',
        type: 'text' as const,
        content: `## The Tet Offensive (January 1968)

During **Tet** (the Vietnamese Lunar New Year) in **January 1968**, the **Viet Cong** and North Vietnamese army launched coordinated surprise attacks on more than 100 cities and towns across South Vietnam — even briefly penetrating the grounds of the **U.S. Embassy in Saigon**.

| Outcome | Military Reality | Public Perception |
|---------|------------------|-------------------|
| Tet Offensive | U.S./South Vietnam repelled the attacks; the Viet Cong suffered heavy losses | Americans saw a war that officials had called "nearly won" suddenly exploding nationwide |

The contradiction was devastating. Just months earlier, U.S. commander **General William Westmoreland** had assured the public there was "light at the end of the tunnel." Tet made that claim look like a lie.

> ⚠️ **The "living-room war":** Vietnam was the first war broadcast nightly on television. Graphic footage of Tet collided with rosy official statements, deepening public distrust.`,
      },
      {
        id: 'apvsc3-q-tet',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'The Tet Offensive is best described as:',
              options: [
                'A military defeat for the communists but a turning point that eroded U.S. public support for the war',
                'A decisive communist military victory that ended the war',
                'A minor skirmish with no political consequences',
                'A successful U.S. invasion of North Vietnam',
              ],
              correctAnswer: 0,
              explanation: 'U.S. and South Vietnamese forces repelled Tet and inflicted heavy losses on the Viet Cong, but the scale of the attacks contradicted official optimism and sharply reduced American support.',
            },
            {
              question: 'The "credibility gap" of the late 1960s refers to:',
              options: [
                'The growing distance between government claims of progress and the reality Americans witnessed',
                'A shortage of qualified soldiers',
                'A budget shortfall in the Great Society',
                'The gap in nuclear weapons between the U.S. and USSR',
              ],
              correctAnswer: 0,
              explanation: 'The credibility gap described the public\'s growing distrust as official optimism clashed with battlefield reality, especially after Tet.',
            },
          ],
        },
      },
      {
        id: 'apvsc3-1968',
        type: 'text' as const,
        content: `## 1968: A Year of Crisis

Tet helped make **1968** one of the most turbulent years in U.S. history:

- **March 1968** — A strong showing by antiwar candidate **Eugene McCarthy** in the New Hampshire primary exposed Johnson's weakness. Days later, **Robert F. Kennedy** entered the race.
- **March 31, 1968** — In a televised address, **Lyndon B. Johnson** stunned the nation by announcing he would **not seek re-election**.
- **April 1968** — **Dr. Martin Luther King Jr.** was assassinated in Memphis, igniting uprisings in over 100 cities.
- **June 1968** — **Robert F. Kennedy** was assassinated in Los Angeles after winning the California primary.
- **August 1968** — The **Democratic National Convention** in Chicago descended into violent clashes between police and antiwar protesters, broadcast live.

> 💡 The chaos of 1968 split the Democratic Party and helped **Richard Nixon** win the presidency on a promise of "law and order" and a secret "plan" to end the war honorably.`,
      },
      {
        id: 'apvsc3-input-1968',
        type: 'input-boxes' as const,
        content: `**Anchor the Year** 🧮

Short answers about the pivotal year.

**1)** In what year did the Tet Offensive occur? $\\,?$
**2)** One-word last name of the president who announced he would not seek re-election in March of that year: $\\,?$
**3)** Initials (three letters) of the civil rights leader assassinated in April of that year: $\\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['1968', 'Johnson', 'MLK'],
          hint1: 'It was the Lunar New Year offensive in the same year as the chaotic Chicago convention.',
          hint2: 'LBJ shocked the country with a televised withdrawal from the race on March 31.',
          hint3: 'Martin Luther King Jr. — his initials.',
          explanation: '1) 1968. 2) Johnson (LBJ withdrew on March 31, 1968). 3) MLK — Martin Luther King Jr. was assassinated on April 4, 1968.',
        },
      },
      {
        id: 'apvsc3-cast-bridge',
        type: 'text' as const,
        content: `## The Cast of 1968

So many figures crowd into this single year that it's worth sorting them by role: the **insurgent challengers** who exposed Johnson's weakness, the **martyrs** whose deaths shook the country, and the **eventual winner** who rode the chaos into the White House.

> ⚠️ Watch the easy mix-ups: antiwar Senator **Eugene** McCarthy is not the same person as 1950s red-hunter **Joseph** McCarthy, and **Robert** Kennedy (killed in 1968) is John F. Kennedy's younger brother.`,
      },
      {
        id: 'apvsc3-dd-1968',
        type: 'dropdown-select' as const,
        content: `**Sequence 1968** 🔽

Match each figure or event to its description.`,
        exercise: {
          dropdowns: [
            { label: 'Antiwar candidate whose New Hampshire showing weakened LBJ:', options: ['Eugene McCarthy', 'Joseph McCarthy', 'George Wallace', 'Hubert Humphrey'] },
            { label: 'Senator assassinated in June 1968 after the California primary:', options: ['Robert F. Kennedy', 'John F. Kennedy', 'Malcolm X', 'Medgar Evers'] },
            { label: 'City where police and protesters clashed at the Democratic Convention:', options: ['Chicago', 'Miami', 'Los Angeles', 'New York'] },
            { label: 'Republican who won the 1968 election on a "law and order" platform:', options: ['Richard Nixon', 'Barry Goldwater', 'Gerald Ford', 'Ronald Reagan'] },
          ],
          correctAnswers: ['Eugene McCarthy', 'Robert F. Kennedy', 'Chicago', 'Richard Nixon'],
          hint1: 'Do not confuse antiwar Senator Eugene McCarthy with 1950s anti-communist Joseph McCarthy.',
          hint2: 'JFK\'s younger brother was killed in Los Angeles in June 1968.',
          hint3: 'The 1968 Democratic Convention turned violent in Chicago; Nixon won the general election.',
          explanation: 'Eugene McCarthy challenged LBJ; RFK was assassinated in June; the Chicago convention erupted in violence; and Nixon won the presidency promising order and an end to the war.',
        },
      },
    ],
  },

  // ───────────────────────── PART 4 ─────────────────────────
  {
    topicSlug: 'apush-vietnam-social-change',
    sections: [
      {
        id: 'apvsc4-intro',
        type: 'text' as const,
        content: `# 🕊️ Vietnam & Social Change

**Part 4 of 7 — Nixon, Vietnamization, and the End of the War**

---

> 🔑 **The Idea:** **Richard Nixon** promised "**peace with honor**." His strategy combined **Vietnamization** (shifting combat to South Vietnamese troops while withdrawing Americans) with expanded bombing and secret operations — even as he negotiated an exit.`,
      },
      {
        id: 'apvsc4-vietnamization',
        type: 'text' as const,
        content: `## Vietnamization and Expansion

**Vietnamization** meant gradually turning the ground war over to the **Army of the Republic of Vietnam (ARVN)** while withdrawing U.S. troops, hoping to reduce American casualties and quiet domestic protest.

But Nixon simultaneously **widened** the war:
- **1970** — Nixon announced the U.S. **invasion of Cambodia** to attack communist sanctuaries. This triggered a massive wave of campus protests.
- **Kent State (May 1970)** — Ohio National Guardsmen fired on student protesters, killing **four** students. Days later, two were killed at **Jackson State** in Mississippi.
- **1971** — The **Pentagon Papers**, leaked by **Daniel Ellsberg** and published by *The New York Times*, revealed that officials had misled the public for years about the war's conduct and prospects.

> ⚠️ **Tension at the heart of Nixon's policy:** He was *withdrawing* troops and *expanding* the air/ground war at the same time. Cambodia made clear the war was not simply "winding down," reigniting the protest movement.`,
      },
      {
        id: 'apvsc4-q-vietnamization',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: '"Vietnamization" under Nixon refers to:',
              options: [
                'Gradually withdrawing U.S. troops while transferring combat responsibility to South Vietnamese forces',
                'Sending hundreds of thousands more American troops into Vietnam',
                'Granting independence to North Vietnam',
                'Annexing South Vietnam as a U.S. territory',
              ],
              correctAnswer: 0,
              explanation: 'Vietnamization shifted the ground fighting to the ARVN (South Vietnamese army) while U.S. forces were drawn down, aiming to reduce American casualties and protest.',
            },
            {
              question: 'The Pentagon Papers (1971) were significant because they:',
              options: [
                'Revealed that the government had repeatedly misled the public about the war',
                'Proved the U.S. had already won the war',
                'Were a secret peace treaty with North Vietnam',
                'Documented Soviet plans to invade Alaska',
              ],
              correctAnswer: 0,
              explanation: 'Leaked by Daniel Ellsberg, the classified study showed years of official deception, deepening public distrust and the credibility gap.',
            },
          ],
        },
      },
      {
        id: 'apvsc4-end',
        type: 'text' as const,
        content: `## Ending the War

| Year | Event | Significance |
|------|-------|--------------|
| **1971** | **26th Amendment** ratified | Lowered the voting age to **18** — answering the cry "old enough to fight, old enough to vote" |
| **1973** | **Paris Peace Accords** | Ceasefire; U.S. combat troops withdrew; American POWs returned |
| **1973** | **War Powers Act** | Required the president to notify Congress and limited troop deployments without authorization (response to executive overreach) |
| **1975** | **Fall of Saigon** | North Vietnamese forces captured Saigon; Vietnam was reunified under communist rule |

The human cost was staggering: roughly **58,000** American military deaths and an estimated **2–3 million** Vietnamese deaths. The war left deep scars — a generation of veterans, a wary public, and the so-called "**Vietnam Syndrome**," a lasting reluctance to commit U.S. troops abroad.

> 🔑 **Outcome:** Despite years of fighting and "peace with honor," South Vietnam fell in **1975**. The domino it was meant to prevent did fall — yet the broader regional collapse the domino theory predicted did not materialize.`,
      },
      {
        id: 'apvsc4-input-end',
        type: 'input-boxes' as const,
        content: `**Closing Dates** 🧮

Fill in the years and figures.

**1)** Year of the Paris Peace Accords (U.S. ceasefire/withdrawal): $\\,?$
**2)** Year Saigon fell to North Vietnamese forces: $\\,?$
**3)** New minimum voting age set by the 26th Amendment: $\\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['1973', '1975', '18'],
          hint1: 'The Accords and the War Powers Act came the same year, two years before Saigon fell.',
          hint2: 'Saigon fell two years after the Paris Accords.',
          hint3: '"Old enough to fight, old enough to vote" — the new age matched the draft age.',
          explanation: '1) 1973 (Paris Peace Accords and War Powers Act). 2) 1975 (Fall of Saigon). 3) 18 — the 26th Amendment (1971) lowered the voting age to 18.',
        },
      },
      {
        id: 'apvsc4-legacy-bridge',
        type: 'text' as const,
        content: `## The War's Long Shadow

Beyond the dates, the war reshaped the *machinery and mood* of American government. Two ideas in particular keep appearing on the exam: the institutional push to **rein in the presidency** (the War Powers Act) and the cultural mood of caution about foreign intervention (the "**Vietnam Syndrome**").

> 🔑 When you write about Vietnam's legacy, separate the **policy** consequences (a more assertive Congress, a wary public) from the **human** costs (veterans, casualties, refugees) — strong essays address both.`,
      },
      {
        id: 'apvsc4-dd-end',
        type: 'dropdown-select' as const,
        content: `**Match the Legacy** 🔽`,
        exercise: {
          dropdowns: [
            { label: 'Nixon\'s 1970 expansion of the war into a neighboring country:', options: ['invasion of Cambodia', 'invasion of Laos by U.S. troops', 'invasion of China', 'invasion of Thailand'] },
            { label: 'Law requiring the president to consult Congress before extended deployments:', options: ['War Powers Act', 'Gulf of Tonkin Resolution', 'Selective Service Act', 'Marshall Plan'] },
            { label: 'Term for postwar U.S. reluctance to commit troops abroad:', options: ['Vietnam Syndrome', 'Domino Theory', 'Massive Retaliation', 'Containment'] },
          ],
          correctAnswers: ['invasion of Cambodia', 'War Powers Act', 'Vietnam Syndrome'],
          hint1: 'In 1970 Nixon attacked communist sanctuaries in the country west of Vietnam, sparking Kent State protests.',
          hint2: 'The 1973 law was Congress\'s attempt to rein in the "imperial presidency."',
          hint3: 'The lasting wariness about foreign military intervention is named after the war itself.',
          explanation: 'The 1970 Cambodia invasion widened the war; the 1973 War Powers Act checked presidential war-making; and "Vietnam Syndrome" named the postwar reluctance to intervene militarily.',
        },
      },
    ],
  },

  // ───────────────────────── PART 5 ─────────────────────────
  {
    topicSlug: 'apush-vietnam-social-change',
    sections: [
      {
        id: 'apvsc5-intro',
        type: 'text' as const,
        content: `# 🕊️ Vietnam & Social Change

**Part 5 of 7 — The Antiwar Movement & the Counterculture**

---

> 🔑 **The Idea:** Vietnam did not just reshape foreign policy — it reshaped American **society and culture**. A broad **antiwar movement** and a youth-driven **counterculture** challenged authority, while the war split the country between "**hawks**" and "**doves**."`,
      },
      {
        id: 'apvsc5-antiwar',
        type: 'text' as const,
        content: `## The Antiwar Movement

Opposition to the war grew from the campuses outward.

| Group / Term | Who / What |
|--------------|-----------|
| **SDS** (Students for a Democratic Society) | Leading New Left student organization; **Port Huron Statement** (1962) called for "participatory democracy" |
| **Teach-ins** | Campus forums (beginning 1965) debating the war |
| **Doves** | Those who opposed the war |
| **Hawks** | Those who supported continued military effort |
| **Draft resistance** | Burning draft cards, fleeing to Canada, claiming conscientious-objector status |

A central grievance was the **draft's inequity**: college **deferments** allowed many middle- and upper-class students to avoid service, so the burden fell hardest on working-class and minority men.

> 💡 **Slogan to remember:** "Hell no, we won't go!" captured draft resistance, while "Make love, not war" tied the antiwar cause to the broader counterculture.`,
      },
      {
        id: 'apvsc5-q-antiwar',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'In Vietnam-era debates, "doves" and "hawks" referred to:',
              options: [
                'Those who opposed the war (doves) versus those who supported continued military effort (hawks)',
                'Two rival branches of the U.S. military',
                'Northern versus Southern Vietnamese soldiers',
                'Two political parties in South Vietnam',
              ],
              correctAnswer: 0,
              explanation: 'Doves favored de-escalation or withdrawal; hawks favored continued or intensified military commitment.',
            },
            {
              question: 'A major criticism of the Vietnam-era draft was that it:',
              options: [
                'Fell disproportionately on working-class and minority men because college deferments shielded wealthier students',
                'Applied only to women',
                'Exempted everyone under age 30',
                'Was never actually used to conscript anyone',
              ],
              correctAnswer: 0,
              explanation: 'Student deferments let many wealthier young men avoid service, making the system widely seen as unjust along class and racial lines.',
            },
          ],
        },
      },
      {
        id: 'apvsc5-counterculture',
        type: 'text' as const,
        content: `## The Counterculture

The **counterculture** of the 1960s rejected mainstream values around materialism, conformity, and authority. Often labeled "**hippies**," its participants embraced new music, communal living, and experimentation.

- **Woodstock (1969)** — A massive music festival in upstate New York that became a symbol of the counterculture's ideals of peace and community.
- The **New Left** distinguished itself from the "Old Left" by focusing on personal freedom, civil rights, and participatory democracy rather than purely economic class struggle.
- Music became protest: artists from **Bob Dylan** to **Jimi Hendrix** gave the movement a soundtrack.

> ⚠️ **Nuance for essays:** The counterculture was a *minority* of young people, and it provoked a strong **backlash**. Many working- and middle-class Americans — Nixon's "**silent majority**" — resented the protesters and the perceived disorder.`,
      },
      {
        id: 'apvsc5-dd-culture',
        type: 'dropdown-select' as const,
        content: `**Match the Movement** 🔽`,
        exercise: {
          dropdowns: [
            { label: 'Leading New Left student organization:', options: ['SDS (Students for a Democratic Society)', 'ROTC', 'AFL-CIO', 'NAACP'] },
            { label: '1969 music festival symbolizing the counterculture:', options: ['Woodstock', 'Coachella', 'Lollapalooza', 'Newport'] },
            { label: 'Nixon\'s term for ordinary Americans who disliked the protests:', options: ['silent majority', 'moral majority', 'New Left', 'beat generation'] },
            { label: '1962 SDS manifesto calling for "participatory democracy":', options: ['Port Huron Statement', 'Sharon Statement', 'Southern Manifesto', 'Powell Memo'] },
          ],
          correctAnswers: ['SDS (Students for a Democratic Society)', 'Woodstock', 'silent majority', 'Port Huron Statement'],
          hint1: 'The student New Left group shares initials with "Students for a Democratic Society."',
          hint2: 'The 1969 festival took place on a farm in upstate New York.',
          hint3: 'Nixon appealed to the quiet, non-protesting majority; SDS\'s founding document was written at Port Huron, Michigan.',
          explanation: 'SDS led the student New Left; Woodstock (1969) symbolized the counterculture; Nixon courted the "silent majority"; and the Port Huron Statement (1962) was SDS\'s founding manifesto.',
        },
      },
      {
        id: 'apvsc5-vocab-bridge',
        type: 'text' as const,
        content: `## Locking in the Vocabulary

The hawk/dove split is the single most reusable pair of terms in this unit, so it pays to over-learn it. Both come from birds: a **hawk** is a predator (keep fighting), and a **dove** is the universal symbol of **peace** (stop the war).

> 💡 The same period gave us a date worth memorizing — **1969** — which doubles as the year of both **Woodstock** and the **Apollo 11 Moon landing**, a striking snapshot of a nation chasing peace and the stars amid an unpopular war.`,
      },
      {
        id: 'apvsc5-input-culture',
        type: 'input-boxes' as const,
        content: `**Quick Recall** 🧮

Short answers.

**1)** Year of the Woodstock music festival: $\\,?$
**2)** One word for war *supporters* in the hawk/dove debate (lowercase): $\\,?$
**3)** One word for war *opponents* in that debate (lowercase): $\\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['1969', 'hawks', 'doves'],
          hint1: 'Woodstock came the same year as the first Moon landing.',
          hint2: 'Birds of prey symbolized those who wanted to keep fighting.',
          hint3: 'A bird symbolizing peace stood for those who opposed the war.',
          explanation: '1) 1969. 2) hawks (supporters). 3) doves (opponents).',
        },
      },
    ],
  },

  // ───────────────────────── PART 6 ─────────────────────────
  {
    topicSlug: 'apush-vietnam-social-change',
    sections: [
      {
        id: 'apvsc6-intro',
        type: 'text' as const,
        content: `# 🕊️ Vietnam & Social Change

**Part 6 of 7 — Rights Movements of the Era (Beyond the War)**

---

> 🔑 **The Idea:** The energy of the 1960s spilled far beyond Vietnam. **Second-wave feminism**, the **Chicano**, **American Indian**, **gay rights**, and later civil-rights movements all surged in this period — and several won landmark legal victories.`,
      },
      {
        id: 'apvsc6-feminism',
        type: 'text' as const,
        content: `## Second-Wave Feminism

The women's movement of the 1960s–70s ("**second-wave feminism**") expanded the fight from suffrage to **social and economic equality**.

| Milestone | Year | Significance |
|-----------|------|--------------|
| *The Feminine Mystique* (Betty Friedan) | 1963 | Named the discontent of suburban housewives; helped spark the movement |
| **NOW** (National Organization for Women) | 1966 | Co-founded by Friedan to lobby for women's rights |
| **Title IX** | 1972 | Banned sex discrimination in federally funded education (including athletics) |
| **Equal Rights Amendment (ERA)** | passed Congress 1972 | Failed ratification — fell short of the required states amid a conservative backlash led by **Phyllis Schlafly** |
| ***Roe v. Wade*** | 1973 | Supreme Court recognized a constitutional right to abortion |

> 💡 **Backlash matters:** The **ERA's defeat** shows that the era's liberal momentum met fierce, organized opposition — an early sign of the rising **New Right**.`,
      },
      {
        id: 'apvsc6-q-feminism',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Betty Friedan\'s The Feminine Mystique (1963) is credited with:',
              options: [
                'Helping launch second-wave feminism by naming the dissatisfaction of many American housewives',
                'Securing women the right to vote',
                'Ending the Vietnam War',
                'Founding the Republican Party',
              ],
              correctAnswer: 0,
              explanation: 'Friedan\'s book gave voice to the frustration of suburban women confined to domestic roles, energizing the women\'s movement; she later co-founded NOW.',
            },
            {
              question: 'Title IX (1972) is best known for:',
              options: [
                'Prohibiting sex discrimination in federally funded education, including school athletics',
                'Granting the right to abortion',
                'Lowering the voting age',
                'Desegregating the armed forces',
              ],
              correctAnswer: 0,
              explanation: 'Title IX banned sex-based discrimination in any education program receiving federal funds, dramatically expanding opportunities for women in sports and academics.',
            },
          ],
        },
      },
      {
        id: 'apvsc6-other-movements',
        type: 'text' as const,
        content: `## Other Movements of the Era

The model of organized protest spread to many groups seeking equality:

- **Chicano Movement** — Mexican Americans organized for labor and civil rights. **César Chávez** and **Dolores Huerta** founded the **United Farm Workers (UFW)** and led the **Delano grape boycott** to win better conditions for farmworkers.
- **American Indian Movement (AIM)** — Founded 1968; activists staged the **occupation of Alcatraz (1969–71)** and the standoff at **Wounded Knee (1973)** to demand treaty rights and self-determination.
- **Gay rights movement** — The **Stonewall uprising** in New York City in **1969** is widely seen as the catalyst for the modern LGBTQ rights movement.
- **Environmental movement** — The first **Earth Day (1970)** and creation of the **EPA (1970)** reflected rising ecological awareness.

> 🔑 **Connective thread:** These movements borrowed the tactics and moral language of the African American civil rights movement — nonviolent protest, boycotts, marches, and appeals to constitutional equality.`,
      },
      {
        id: 'apvsc6-dd-movements',
        type: 'dropdown-select' as const,
        content: `**Match Leader/Event to Movement** 🔽`,
        exercise: {
          dropdowns: [
            { label: 'Co-founder of the United Farm Workers (Chicano labor movement):', options: ['César Chávez', 'Russell Means', 'Harvey Milk', 'Betty Friedan'] },
            { label: '1969 event seen as the catalyst of the modern gay rights movement:', options: ['Stonewall uprising', 'March on Washington', 'Selma march', 'Bay of Pigs'] },
            { label: 'Activist group behind the 1973 Wounded Knee standoff:', options: ['American Indian Movement (AIM)', 'NAACP', 'SNCC', 'NOW'] },
            { label: 'Federal agency created in 1970 amid the new environmental movement:', options: ['EPA', 'FDA', 'CIA', 'FBI'] },
          ],
          correctAnswers: ['César Chávez', 'Stonewall uprising', 'American Indian Movement (AIM)', 'EPA'],
          hint1: 'He led the Delano grape boycott alongside Dolores Huerta.',
          hint2: 'The uprising happened at a bar in New York\'s Greenwich Village in 1969.',
          hint3: 'AIM occupied Wounded Knee in 1973; the Environmental Protection Agency was established in 1970.',
          explanation: 'César Chávez led the UFW; Stonewall (1969) launched the gay rights movement; AIM staged Wounded Knee; and the EPA was created in 1970.',
        },
      },
      {
        id: 'apvsc6-landmarks-bridge',
        type: 'text' as const,
        content: `## A Cluster of Landmark Years

The early 1970s pack several legal turning points into a few years, so a quick date-cluster helps. Note how **1973** alone holds the Paris Peace Accords, the War Powers Act, *and* *Roe v. Wade* — a single year that bridges the *foreign* and *domestic* stories of this unit.

> 🔑 When a question asks you to *connect* the war to social change, this overlap is your evidence: the same years that ended America's combat role also delivered landmark expansions of individual rights at home.`,
      },
      {
        id: 'apvsc6-input-movements',
        type: 'input-boxes' as const,
        content: `**Date Check** 🧮

Short answers about the era's legal landmarks.

**1)** Year of the *Roe v. Wade* decision: $\\,?$
**2)** Year of the Stonewall uprising: $\\,?$
**3)** Three-letter acronym of the women's-rights organization Betty Friedan co-founded in 1966: $\\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['1973', '1969', 'NOW'],
          hint1: 'Roe came the same year as the Paris Peace Accords.',
          hint2: 'Stonewall happened the same year as Woodstock and the Moon landing.',
          hint3: 'National Organization for Women — its acronym is a common English word.',
          explanation: '1) 1973 (Roe v. Wade). 2) 1969 (Stonewall). 3) NOW — the National Organization for Women, co-founded 1966.',
        },
      },
    ],
  },

  // ───────────────────────── PART 7 ─────────────────────────
  {
    topicSlug: 'apush-vietnam-social-change',
    sections: [
      {
        id: 'apvsc7-intro',
        type: 'text' as const,
        content: `# 🕊️ Vietnam & Social Change

**Part 7 of 7 — Synthesis, Mastery & Exit Quiz**

---

You now have the full arc: how the U.S. entered Vietnam, escalated, faced a turning point at **Tet**, withdrew under **Nixon**, and how the upheaval fueled an **antiwar movement**, a **counterculture**, and a wave of **rights movements**. Let's tie it together.`,
      },
      {
        id: 'apvsc7-summary',
        type: 'text' as const,
        content: `## Quick Reference

| Theme | Key Takeaway |
|-------|--------------|
| **Cause of involvement** | Containment + domino theory (not a direct attack on the U.S.) |
| **Escalation tool** | Gulf of Tonkin Resolution (1964) — substitute for a war declaration |
| **Turning point** | Tet Offensive (1968) — military loss, political victory for the North |
| **Exit strategy** | Vietnamization + Paris Peace Accords (1973) |
| **Final outcome** | Fall of Saigon (1975); ~58,000 U.S. deaths |
| **Domestic legacy** | Antiwar movement, counterculture, "credibility gap," War Powers Act |
| **Broader social change** | Second-wave feminism, Chicano/AIM/gay-rights movements, environmentalism |

> ⚠️ **Essay tip:** Strong APUSH responses connect the *foreign* story (Vietnam) to the *domestic* story (social change) — showing how the war radicalized students, eroded trust in government, and energized rights movements across the country.`,
      },
      {
        id: 'apvsc7-mixed',
        type: 'multiple-choice' as const,
        content: `**Mixed Practice** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Which sequence is in correct chronological order?',
              options: [
                'Gulf of Tonkin Resolution → Tet Offensive → Paris Peace Accords → Fall of Saigon',
                'Tet Offensive → Gulf of Tonkin Resolution → Fall of Saigon → Paris Peace Accords',
                'Fall of Saigon → Tet Offensive → Gulf of Tonkin Resolution → Paris Peace Accords',
                'Paris Peace Accords → Gulf of Tonkin Resolution → Tet Offensive → Fall of Saigon',
              ],
              correctAnswer: 0,
              explanation: 'Tonkin (1964) → Tet (1968) → Paris Accords (1973) → Fall of Saigon (1975). This is the correct order.',
            },
            {
              question: 'The "silent majority" Nixon appealed to in 1969 referred to:',
              options: [
                'Ordinary Americans who did not protest and disapproved of the antiwar counterculture',
                'Soldiers who refused to fight',
                'Members of the Viet Cong',
                'Civil rights marchers in the South',
              ],
              correctAnswer: 0,
              explanation: 'Nixon used "silent majority" to describe non-protesting Americans who supported his policies and resented the protest movements — a key part of the conservative backlash.',
            },
          ],
        },
      },
      {
        id: 'apvsc7-reasoning-bridge',
        type: 'text' as const,
        content: `## Thinking in Cause and Effect

APUSH rarely rewards isolated facts — it rewards **reasoning**, especially **causation**. The strongest answers explain *why* one development led to another, not just *that* it happened.

> 💡 As you tackle the next check, narrate the chain in your head: *event → reaction → consequence*. For example: Tet contradicted official optimism → eroded public trust → forced Johnson out of the race.`,
      },
      {
        id: 'apvsc7-cause-effect',
        type: 'dropdown-select' as const,
        content: `**Cause and Effect** 🔽

Match each cause to its most direct effect.`,
        exercise: {
          dropdowns: [
            { label: 'The Tet Offensive (1968) led directly to:', options: ['a sharp decline in U.S. public support for the war', 'an immediate communist surrender', 'the start of the draft', 'the Geneva Accords'] },
            { label: 'The unequal draft and college deferments fueled:', options: ['the antiwar movement and charges of class injustice', 'the domino theory', 'Vietnamization', 'the Marshall Plan'] },
            { label: 'Executive overreach in waging the war led Congress to pass the:', options: ['War Powers Act (1973)', 'Gulf of Tonkin Resolution', '26th Amendment', 'Title IX'] },
          ],
          correctAnswers: ['a sharp decline in U.S. public support for the war', 'the antiwar movement and charges of class injustice', 'War Powers Act (1973)'],
          hint1: 'Tet contradicted official optimism and widened the credibility gap.',
          hint2: 'Working-class and minority men bore the heaviest draft burden, sparking protest.',
          hint3: 'The 1973 law required the president to consult Congress before extended deployments.',
          explanation: 'Tet eroded public support; the inequitable draft energized the antiwar movement; and the War Powers Act (1973) responded to unchecked presidential war-making.',
        },
      },
      {
        id: 'apvsc7-timeline-bridge',
        type: 'text' as const,
        content: `## A Timeline Worth Owning

Four dates anchor the entire Vietnam arc. If you can place these in order under pressure, you can scaffold almost any essay or stimulus question on this period.

| Year | Milestone |
|------|-----------|
| **1964** | Gulf of Tonkin Resolution — Congress hands LBJ a near-blank check |
| **1968** | Tet Offensive — the turning point in public opinion |
| **1973** | Paris Peace Accords — U.S. combat role ends |
| **1975** | Fall of Saigon — Vietnam reunified under communism |

> 🔑 Lock these four years in before the exit quiz; the next drill checks exactly these anchors.`,
      },
      {
        id: 'apvsc7-input-final',
        type: 'input-boxes' as const,
        content: `**Final Number Drill** 🧮

Anchor the key years.

**1)** Year of the Gulf of Tonkin Resolution: $\\,?$
**2)** Year of the Tet Offensive: $\\,?$
**3)** Year of the Fall of Saigon: $\\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['1964', '1968', '1975'],
          hint1: 'The resolution passed in an election year in the mid-1960s.',
          hint2: 'The Lunar New Year offensive shocked the nation in the same year as the Chicago convention.',
          hint3: 'Saigon fell two years after the 1973 Paris Accords.',
          explanation: '1) 1964 (Gulf of Tonkin). 2) 1968 (Tet). 3) 1975 (Fall of Saigon).',
        },
      },
      {
        id: 'apvsc7-final-text',
        type: 'text' as const,
        content: `## Putting It All Together

You've traced the whole journey: from **containment** and the **domino theory**, through **escalation** and **Tet**, to **Vietnamization** and the **Fall of Saigon** — and the way that long, divisive war helped power the **antiwar movement**, the **counterculture**, and the era's sweeping **rights movements**.

> 🔑 The throughline to carry into the exit quiz: Vietnam was a *foreign* war that produced *domestic* transformation. Trust in government fell, a generation mobilized, and the boundaries of who could claim full equality kept expanding. One last quiz to lock it in.`,
      },
      {
        id: 'apvsc7-exit-quiz',
        type: 'multiple-choice' as const,
        content: `**Exit Quiz** ✅

Answer all three to finish the lesson.`,
        exercise: {
          questions: [
            {
              question: 'U.S. involvement in Vietnam is best explained as an application of which broader Cold War strategy?',
              options: [
                'Containment of the spread of communism',
                'Isolationism',
                'Manifest Destiny',
                'Appeasement',
              ],
              correctAnswer: 0,
              explanation: 'Vietnam was fought to contain communism in Southeast Asia, consistent with the domino theory and the containment doctrine dating to the late 1940s.',
            },
            {
              question: 'Which best describes the relationship between the Vietnam War and 1960s social change?',
              options: [
                'The war radicalized students, deepened distrust of government, and helped energize the antiwar movement and broader rights movements',
                'The war had no effect on American domestic life',
                'The war united Americans behind the government',
                'Social movements caused the war',
              ],
              correctAnswer: 0,
              explanation: 'Vietnam intensified activism: the antiwar movement, the counterculture, and the era\'s rights movements all drew on the same energy and distrust of authority the war helped generate.',
            },
            {
              question: 'The 26th Amendment (1971), which lowered the voting age to 18, is most directly connected to:',
              options: [
                'The argument that those old enough to be drafted to fight in Vietnam should be old enough to vote',
                'The women\'s suffrage movement of the 1910s',
                'The end of Reconstruction',
                'The New Deal',
              ],
              correctAnswer: 0,
              explanation: 'The slogan "old enough to fight, old enough to vote" tied the draft age to voting rights, driving ratification of the 26th Amendment during the Vietnam War.',
            },
          ],
        },
      },
    ],
  },
]
