import type { LessonData } from '../registry'

/**
 * Hand-authored interactive lesson — Cold War & Civil Rights
 * (AP United States History, ~1945–1991, Periods 8).
 * Registry key: 'apush-cold-war-civil-rights' (matches the DB Topic.slug).
 * 7 parts, gold-standard structure: teach → annotated cases/causation chains →
 * interactive practice (multiple-choice + dropdown + input-boxes) → exit quiz.
 * Non-math topic: favors multiple-choice + dropdown concept checks; input-boxes
 * used only for short, unambiguous fill-ins (dates, vote counts, term recall).
 * Every date, name, court case, and figure has been fact-checked.
 */
export const parts: LessonData[] = [
  // ───────────────────────── PART 1 ─────────────────────────
  {
    topicSlug: 'apush-cold-war-civil-rights',
    sections: [
      {
        id: 'cwcr1-intro',
        type: 'text' as const,
        content: `# 🕊️ Cold War & Civil Rights

**Part 1 of 7 — Origins of the Cold War (1945–1950)**

---

### Topics in This Part

| Section |
|---------|
| From Allies to Adversaries |
| Containment & the "X Article" |
| Truman Doctrine, Marshall Plan, NATO |
| The Berlin Blockade & Airlift |

> 🔑 **Key Concept:** The Cold War was a roughly 45-year rivalry (1945–1991) between the **United States** (capitalist democracy) and the **Soviet Union** (communist one-party state). It never became a direct U.S.–U.S.S.R. shooting war — hence "**cold**" — but it shaped nearly every foreign and domestic decision of the era, including the civil rights movement at home.`,
      },
      {
        id: 'cwcr1-allies-to-adversaries',
        type: 'text' as const,
        content: `## From Allies to Adversaries

The U.S. and U.S.S.R. were allies against Nazi Germany in WWII, but deep mistrust survived the war.

| Source of friction | Detail |
|--------------------|--------|
| **Ideology** | Capitalism & democracy vs. communism & one-party rule |
| **Yalta Conference (Feb 1945)** | Stalin promised "free elections" in Eastern Europe — and broke that promise |
| **Potsdam Conference (July 1945)** | Truman (new president) hinted at the atomic bomb; tensions hardened |
| **The atomic bomb** | U.S. monopoly until the U.S.S.R. tested its own bomb in **1949** |
| **Eastern Europe** | The U.S.S.R. installed communist "satellite" governments (the **Iron Curtain**) |

In **1946**, Winston Churchill declared in Fulton, Missouri that an "**iron curtain**" had descended across Europe — a phrase that captured the new divide between the Soviet-controlled East and the democratic West.

> 💡 **Causation:** The Cold War did not start with one event. It grew from **competing visions** for postwar Europe plus a collapse of wartime trust once the common enemy (Germany) was gone.`,
      },
      {
        id: 'cwcr1-origins-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'The term "iron curtain," describing the division between Soviet-dominated Eastern Europe and the West, is most associated with a 1946 speech by:',
              options: ['Winston Churchill', 'Joseph Stalin', 'Harry Truman', 'George Kennan'],
              correctAnswer: 0,
              explanation: 'Winston Churchill delivered the "Iron Curtain" speech in Fulton, Missouri in March 1946, warning that Soviet power had cut Eastern Europe off from the West.',
            },
            {
              question: 'A central reason for U.S.–Soviet tension immediately after WWII was the Soviet Union\'s failure to:',
              options: [
                'Pay back wartime loans to Britain',
                'Hold the free elections in Eastern Europe that Stalin had promised at Yalta',
                'Join the United Nations',
                'Develop any nuclear weapons',
              ],
              correctAnswer: 1,
              explanation: 'At the Yalta Conference (Feb 1945) Stalin promised free elections in liberated Eastern Europe, then instead installed communist satellite governments — a key trigger of postwar distrust.',
            },
          ],
        },
      },
      {
        id: 'cwcr1-containment',
        type: 'text' as const,
        content: `## Containment & the "X Article"

In 1946–47, U.S. diplomat **George Kennan** argued that the U.S.S.R. was expansionist by nature and should be met with firm, long-term resistance. His ideas — published anonymously (signed "X") in *Foreign Affairs* in 1947 — became the doctrine of **containment**: stop the *spread* of communism rather than try to roll it back where it already existed.

**Containment** became the organizing logic of U.S. foreign policy for decades. It justified:

- **Economic aid** (the Marshall Plan)
- **Military alliances** (NATO)
- **Proxy wars** (Korea, later Vietnam)

> 🔑 **Key Idea:** Containment was *defensive* in concept — hold the line, don't necessarily liberate. That distinction explains why the U.S. did **not** intervene militarily when Soviet tanks crushed uprisings *inside* the existing bloc (e.g., Hungary 1956).`,
      },
      {
        id: 'cwcr1-doctrine-plan-dropdown',
        type: 'dropdown-select' as const,
        content: `**Match the Policy** 🔽

Three early containment policies all came from the Truman administration. Match each to its purpose.`,
        exercise: {
          dropdowns: [
            { label: 'Truman Doctrine (1947):', options: ['Aid Greece & Turkey to resist communism', 'Rebuild Western Europe\'s economy', 'Create a mutual-defense military alliance', 'Split Germany permanently'] },
            { label: 'Marshall Plan (1948):', options: ['Provide economic aid to rebuild Western Europe', 'Send troops to Korea', 'Test the hydrogen bomb', 'Ban the Communist Party in the U.S.'] },
            { label: 'NATO (1949):', options: ['A mutual-defense military alliance of Western nations', 'A trade agreement with the U.S.S.R.', 'A nuclear test-ban treaty', 'A plan to feed Berlin by air'] },
          ],
          correctAnswers: ['Aid Greece & Turkey to resist communism', 'Provide economic aid to rebuild Western Europe', 'A mutual-defense military alliance of Western nations'],
          hint1: 'The Truman Doctrine first responded to communist pressure on Greece and Turkey.',
          hint2: 'The Marshall Plan was *economic* — billions in aid to rebuild war-torn Western Europe.',
          hint3: 'NATO (North Atlantic Treaty Organization) was a *military* pact: an attack on one is an attack on all.',
          explanation: 'Truman Doctrine = pledge to aid free peoples resisting communism (first Greece/Turkey); Marshall Plan = economic reconstruction of Western Europe; NATO = collective-defense alliance. Together they operationalized containment.',
        },
      },
      {
        id: 'cwcr1-berlin',
        type: 'text' as const,
        content: `## The Berlin Blockade & Airlift (1948–49)

Postwar Germany — and its capital Berlin — was split into four occupation zones (U.S., U.K., France, U.S.S.R.). Berlin sat deep inside the Soviet zone.

In **1948**, Stalin **blockaded** all land routes into West Berlin, hoping to force the Western Allies out. Truman refused to abandon the city or start a war. Instead, the U.S. and Britain launched the **Berlin Airlift**, flying in food, fuel, and supplies for nearly a year. Stalin lifted the blockade in **1949**.

| Outcome | Significance |
|---------|--------------|
| West Berlin survived | Containment "worked" without firing a shot |
| Germany split | West Germany (FRG) & East Germany (GDR) formed in 1949 |
| NATO formed (1949) | The crisis spurred a permanent Western alliance |

> ⚠️ **Don't confuse** the Berlin **Airlift** (1948–49) with the Berlin **Wall** (built 1961). They are different events a decade apart — the Airlift broke a blockade; the Wall walled in East Germans (Part 5).`,
      },
      {
        id: 'cwcr1-recap-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'The U.S. response to the 1948 Soviet blockade of West Berlin was to:',
              options: [
                'Invade East Germany',
                'Airlift supplies into the city for nearly a year',
                'Drop an atomic bomb',
                'Abandon West Berlin to the Soviets',
              ],
              correctAnswer: 1,
              explanation: 'The Berlin Airlift (1948–49) flew supplies into West Berlin around the clock, breaking the blockade without direct combat — a textbook application of containment.',
            },
            {
              question: 'The doctrine of "containment," credited largely to George Kennan, called for the United States to:',
              options: [
                'Immediately liberate all of Eastern Europe by force',
                'Withdraw from European affairs entirely',
                'Prevent the further spread of communism rather than roll it back',
                'Form an alliance with the Soviet Union against Britain',
              ],
              correctAnswer: 2,
              explanation: 'Containment aimed to stop communism from spreading *beyond* where it already existed — a defensive, long-term strategy, not an offensive rollback.',
            },
          ],
        },
      },
    ],
  },

  // ───────────────────────── PART 2 ─────────────────────────
  {
    topicSlug: 'apush-cold-war-civil-rights',
    sections: [
      {
        id: 'cwcr2-intro',
        type: 'text' as const,
        content: `# 🕊️ Cold War & Civil Rights

**Part 2 of 7 — The Cold War Heats Up (1950–1962)**

---

> 🔑 **The Idea:** The 1950s turned containment into action: a hot proxy war in **Korea**, an **arms race** in nuclear weapons, a **space race** after Sputnik, a domestic "**Red Scare**," and the world's closest brush with nuclear war — the **Cuban Missile Crisis** of 1962.`,
      },
      {
        id: 'cwcr2-korea',
        type: 'text' as const,
        content: `## The Korean War (1950–1953)

After WWII, Korea was divided at the **38th parallel**: a communist North (backed by the U.S.S.R. and, later, China) and a non-communist South (backed by the U.S.).

In **June 1950**, North Korea invaded the South. The U.S. led a **United Nations** force to repel the invasion.

| Phase | What happened |
|-------|---------------|
| North invades (1950) | UN/U.S. forces (Gen. MacArthur) pushed back |
| Inchon landing | UN forces drove deep into the North |
| China enters (late 1950) | Massive Chinese intervention pushed UN forces back south |
| Stalemate near the 38th | An **armistice** in **1953** restored a divided Korea |

President Truman **fired Gen. Douglas MacArthur** in 1951 for publicly challenging the policy of limited war (MacArthur wanted to attack China). This reasserted **civilian control of the military**.

> 💡 **Why it matters:** Korea was the first **hot** application of containment — a *limited* war fought to hold a line, not to conquer. It ended almost exactly where it began, near the 38th parallel, with no formal peace treaty to this day.`,
      },
      {
        id: 'cwcr2-korea-input',
        type: 'input-boxes' as const,
        content: `**Quick Recall** 🧮

Fill in each blank with a number.

**1)** Korea was divided at the **____th parallel.**
**2)** The Korean War armistice was signed in the year **____.**
**3)** The Cuban Missile Crisis occurred in the year **____.**`,
        exercise: {
          boxes: 3,
          correctAnswers: ['38', '1953', '1962'],
          hint1: 'The dividing line is a famous parallel of latitude, between 30 and 40.',
          hint2: 'The war began in 1950 and the armistice came three years later.',
          hint3: 'The Cuban Missile Crisis came near the start of the Kennedy administration, in October of an even year in the early 1960s.',
          explanation: '1) The 38th parallel divided North and South Korea. 2) The armistice was signed in 1953. 3) The Cuban Missile Crisis was October 1962.',
        },
      },
      {
        id: 'cwcr2-redscare',
        type: 'text' as const,
        content: `## The Second Red Scare & McCarthyism

The fear of communism abroad bred a fear of communist subversion **at home**. This "**Second Red Scare**" (the first followed WWI) peaked around 1950–1954.

| Element | Detail |
|---------|--------|
| **HUAC** | The House Un-American Activities Committee investigated alleged communists, including in Hollywood |
| **Hollywood blacklist** | Writers and actors lost their careers based on accusations |
| **Rosenbergs** | Julius and Ethel Rosenberg were convicted of espionage and executed in 1953 |
| **Sen. Joseph McCarthy** | Wisconsin senator who claimed to have lists of communists in the government |

**McCarthyism** came to mean reckless, evidence-free accusations of disloyalty. McCarthy's power collapsed in **1954** after the televised **Army–McCarthy hearings** exposed his bullying tactics; the Senate **censured** him later that year.

> ⚠️ **AP framing:** The Red Scare is a classic example of **civil liberties vs. national security** — fear of an external enemy used to justify suppressing dissent at home. Connect it to later debates (e.g., the Patriot Act) if a DBQ asks about wartime liberties.`,
      },
      {
        id: 'cwcr2-redscare-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: '"McCarthyism" is best defined as:',
              options: [
                'A program of economic aid to Europe',
                'The practice of making accusations of disloyalty or subversion without sufficient evidence',
                'A strategy for fighting limited wars in Asia',
                'A civil rights organizing tactic',
              ],
              correctAnswer: 1,
              explanation: 'McCarthyism refers to the reckless, often evidence-free accusations of communist sympathy associated with Senator Joseph McCarthy during the Second Red Scare.',
            },
            {
              question: 'The Korean War (1950–1953) is most significant as an example of:',
              options: [
                'A successful rollback that united Korea under U.S. influence',
                'A direct nuclear exchange between the U.S. and U.S.S.R.',
                'The first hot, limited war fought under the policy of containment',
                'A war the U.S. fought entirely alone',
              ],
              correctAnswer: 2,
              explanation: 'Korea was the first major "hot" test of containment — a limited war (fought under a UN mandate, led by the U.S.) to hold the line at roughly the 38th parallel, not to conquer the North.',
            },
          ],
        },
      },
      {
        id: 'cwcr2-armsrace',
        type: 'text' as const,
        content: `## Arms Race & Space Race

Once the U.S.S.R. tested an atomic bomb (**1949**), the two superpowers raced to build ever-deadlier weapons.

- **Hydrogen bomb:** The U.S. tested one in **1952**; the U.S.S.R. soon followed.
- **MAD:** "**Mutually Assured Destruction**" — each side held enough weapons to annihilate the other, theoretically *deterring* a first strike.
- **Brinkmanship:** Eisenhower's Secretary of State **John Foster Dulles** advocated going to the "brink" of war to deter the Soviets.

In **1957**, the U.S.S.R. launched **Sputnik**, the first artificial satellite. The shock that the Soviets led in rocketry triggered:

- The creation of **NASA** (1958)
- The **National Defense Education Act** (1958), pouring money into science and math education
- An eventual U.S. push to the Moon (Apollo, 1969)

> 💡 **Connect domestic & foreign:** Sputnik is a great example of how Cold War competition reshaped *domestic* policy — suddenly funding schools and science was a matter of *national security*.`,
      },
      {
        id: 'cwcr2-cuba',
        type: 'text' as const,
        content: `## The Cuban Missile Crisis (October 1962)

After Fidel Castro's communist revolution in Cuba, the U.S.S.R. secretly placed **nuclear missiles** on the island — 90 miles from Florida.

President **John F. Kennedy** responded with a naval "**quarantine**" (blockade) and demanded the missiles' removal. For **thirteen days** the world stood on the edge of nuclear war.

**Resolution:** Soviet leader **Khrushchev** removed the missiles in exchange for a U.S. pledge not to invade Cuba — and a *secret* U.S. agreement to remove American missiles from **Turkey**.

| Aftermath | Significance |
|-----------|--------------|
| Direct "hotline" | A Washington–Moscow communications line was set up |
| Limited Test Ban Treaty (1963) | Banned atmospheric nuclear tests |
| Closest call | Widely seen as the moment the Cold War came nearest to nuclear war |

> 🔑 **Key takeaway:** The Cuban Missile Crisis showed both the *terror* of MAD and the *value* of negotiation. It nudged both sides toward arms-control talks — an early step toward 1970s **détente** (Part 6).`,
      },
      {
        id: 'cwcr2-cuba-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'The Cuban Missile Crisis (1962) was ultimately resolved when:',
              options: [
                'The U.S. invaded Cuba and removed Castro',
                'The Soviets removed their missiles from Cuba in exchange for a U.S. non-invasion pledge (and a secret removal of U.S. missiles from Turkey)',
                'The two sides launched a limited nuclear exchange',
                'The United Nations took control of Cuba',
              ],
              correctAnswer: 1,
              explanation: 'Khrushchev withdrew the missiles in exchange for JFK\'s public pledge not to invade Cuba and a secret agreement to remove U.S. Jupiter missiles from Turkey. No invasion or nuclear exchange occurred.',
            },
            {
              question: 'The Soviet launch of Sputnik in 1957 prompted the United States to:',
              options: [
                'Abandon the space program',
                'Create NASA and increase federal funding for science and math education',
                'Declare war on the Soviet Union',
                'End the policy of containment',
              ],
              correctAnswer: 1,
              explanation: 'Sputnik shocked Americans into action: NASA was founded (1958) and the National Defense Education Act funneled funding into science and math education as a matter of national security.',
            },
          ],
        },
      },
    ],
  },

  // ───────────────────────── PART 3 ─────────────────────────
  {
    topicSlug: 'apush-cold-war-civil-rights',
    sections: [
      {
        id: 'cwcr3-intro',
        type: 'text' as const,
        content: `# ✊ Cold War & Civil Rights

**Part 3 of 7 — Civil Rights: Early Foundations (1945–1955)**

---

### Topics in This Part

| Section |
|---------|
| Jim Crow & the Cold War Hypocrisy |
| Desegregating Baseball & the Military |
| *Brown v. Board of Education* (1954) |
| The Montgomery Bus Boycott (1955–56) |

> 🔑 **Key Concept:** The modern civil rights movement and the Cold War are deeply linked. As the U.S. claimed moral leadership of the "free world," segregation at home became an **international embarrassment** that Soviet propaganda exploited — giving leaders a Cold War reason to support reform.`,
      },
      {
        id: 'cwcr3-jimcrow',
        type: 'text' as const,
        content: `## Jim Crow & the Cold War Hypocrisy

Since **Plessy v. Ferguson (1896)**, the Supreme Court had allowed "**separate but equal**" segregation. In practice, "**Jim Crow**" laws across the South enforced separate (and grossly unequal) schools, transit, and public spaces, while disenfranchising Black voters.

After WWII, several forces converged to challenge this system:

| Force | How it pushed change |
|-------|----------------------|
| **WWII service** | Black veterans who fought fascism demanded equality at home ("Double V" — victory abroad **and** at home) |
| **The Great Migration** | Millions of Black Americans moved North, gaining votes and political weight |
| **Cold War image** | Segregation undercut U.S. claims of moral superiority over the U.S.S.R. |
| **The NAACP** | Its legal team built a decades-long strategy to overturn *Plessy* |

> 💡 **The Cold War lever:** Diplomats worried that newly independent nations in Africa and Asia would side with the Soviets if the U.S. mistreated its own Black citizens. Civil rights thus became a matter of **foreign policy**, not just domestic justice.`,
      },
      {
        id: 'cwcr3-desegregation',
        type: 'text' as const,
        content: `## Early Breakthroughs: Baseball & the Military

- **1947 — Jackie Robinson** broke Major League Baseball's color barrier with the Brooklyn Dodgers, a hugely visible symbol of integration.
- **1948 — Executive Order 9981:** President **Harry Truman desegregated the U.S. armed forces** by executive order — one of the first major federal civil rights actions of the era.

These steps came *before* the famous mass movement and show that change began with a mix of individual courage, presidential action, and legal strategy.

> ⚠️ **Precision matters:** Truman desegregated the *military* by **executive order** in 1948 — not by a law of Congress. Knowing the *mechanism* (executive order vs. statute vs. court ruling) is exactly the kind of distinction APUSH multiple-choice questions test.`,
      },
      {
        id: 'cwcr3-early-dropdown',
        type: 'dropdown-select' as const,
        content: `**Match the Milestone** 🔽

Match each early civil rights milestone to its year and mechanism.`,
        exercise: {
          dropdowns: [
            { label: 'Jackie Robinson integrates MLB:', options: ['1947', '1954', '1963', '1896'] },
            { label: 'Truman desegregates the armed forces by:', options: ['Executive order (1948)', 'Constitutional amendment', 'Supreme Court ruling', 'Act of Congress'] },
            { label: '"Separate but equal" was established by:', options: ['Plessy v. Ferguson (1896)', 'Brown v. Board (1954)', 'Dred Scott (1857)', 'Marbury v. Madison (1803)'] },
          ],
          correctAnswers: ['1947', 'Executive order (1948)', 'Plessy v. Ferguson (1896)'],
          hint1: 'Jackie Robinson joined the Brooklyn Dodgers in the late 1940s.',
          hint2: 'Truman acted alone as commander-in-chief, without waiting for Congress.',
          hint3: '"Separate but equal" comes from an 1896 case about a Louisiana railroad car.',
          explanation: 'Robinson integrated baseball in 1947; Truman desegregated the military via Executive Order 9981 in 1948; "separate but equal" came from Plessy v. Ferguson (1896), which Brown would overturn in 1954.',
        },
      },
      {
        id: 'cwcr3-brown',
        type: 'text' as const,
        content: `## *Brown v. Board of Education* (1954)

The NAACP's legal strategy — led by attorney **Thurgood Marshall** (later the first Black Supreme Court justice) — culminated in **Brown v. Board of Education of Topeka**.

In a **unanimous (9–0)** decision written by Chief Justice **Earl Warren**, the Court ruled that **segregated public schools are inherently unequal**, overturning *Plessy v. Ferguson* in the field of education. Separate, the Court said, is *not* equal.

| *Plessy* (1896) | *Brown* (1954) |
|-----------------|----------------|
| "Separate but equal" allowed | Separate schools "inherently unequal" |
| Upheld segregation | Overturned it in education |

In **1955** ("**Brown II**"), the Court ordered desegregation "**with all deliberate speed**" — vague language that allowed many districts to stall. Resistance peaked in **1957** when **Little Rock, Arkansas** blocked nine Black students from a high school; President **Eisenhower sent federal troops** to enforce the order.

> 🔑 **Why *Brown* matters:** It was the legal cornerstone of the movement and a moral catalyst — but the *gap* between the ruling and real change on the ground showed that courts alone could not desegregate America. **Mass action** would be needed.`,
      },
      {
        id: 'cwcr3-brown-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'The Supreme Court\'s ruling in Brown v. Board of Education (1954) directly:',
              options: [
                'Banned all forms of racial discrimination in employment',
                'Declared that segregated public schools are inherently unequal, overturning Plessy in education',
                'Guaranteed the right to vote regardless of race',
                'Desegregated the U.S. armed forces',
              ],
              correctAnswer: 1,
              explanation: 'Brown (a unanimous 9–0 decision by the Warren Court) held that "separate educational facilities are inherently unequal," overturning the "separate but equal" doctrine of Plessy in the context of public schools.',
            },
            {
              question: 'When Little Rock, Arkansas resisted school desegregation in 1957, President Eisenhower responded by:',
              options: [
                'Reversing the Brown decision',
                'Sending federal troops to enforce the integration of Central High School',
                'Closing the school permanently',
                'Doing nothing, citing states\' rights',
              ],
              correctAnswer: 1,
              explanation: 'Eisenhower federalized the Arkansas National Guard and sent U.S. Army troops to protect the "Little Rock Nine" and enforce the federal court\'s desegregation order.',
            },
          ],
        },
      },
      {
        id: 'cwcr3-montgomery',
        type: 'text' as const,
        content: `## The Montgomery Bus Boycott (1955–1956)

In December **1955**, **Rosa Parks** was arrested in Montgomery, Alabama for refusing to give up her bus seat to a white passenger. (Parks was a trained NAACP activist; her act was a deliberate challenge, not mere fatigue.)

In response, Montgomery's Black community — about 70% of bus riders — launched a **381-day boycott** of the city buses, organized in part by a young minister, **Dr. Martin Luther King Jr.** It ended in **1956** when the Supreme Court ruled bus segregation unconstitutional (*Browder v. Gayle*).

**Significance:**
- Launched **Dr. King** as a national leader.
- Demonstrated the power of **nonviolent mass direct action** and economic pressure.
- Led to the founding of the **SCLC** (Southern Christian Leadership Conference) in 1957.

> 💡 **Pattern to remember:** *Brown* (a court ruling) + Montgomery (mass action) together define the movement's two engines — **legal challenges** and **grassroots protest** — that will recur through Part 4.`,
      },
      {
        id: 'cwcr3-montgomery-input',
        type: 'input-boxes' as const,
        content: `**Quick Recall** 🧮

Fill in each blank with a number.

**1)** *Brown v. Board* was decided in the year **____.**
**2)** The vote in *Brown v. Board* among the nine justices was **____–0** (unanimous).
**3)** The Montgomery Bus Boycott lasted **____** days (a famous figure, just over a year).`,
        exercise: {
          boxes: 3,
          correctAnswers: ['1954', '9', '381'],
          hint1: 'Brown was decided in the same decade as the Montgomery boycott — the mid-1950s.',
          hint2: 'There are nine justices on the Supreme Court, and the decision was unanimous.',
          hint3: 'The boycott ran from December 1955 to December 1956 — a famous figure in the low 380s.',
          explanation: '1) Brown was decided in 1954. 2) The decision was unanimous, 9–0. 3) The Montgomery Bus Boycott lasted 381 days.',
        },
      },
    ],
  },

  // ───────────────────────── PART 4 ─────────────────────────
  {
    topicSlug: 'apush-cold-war-civil-rights',
    sections: [
      {
        id: 'cwcr4-intro',
        type: 'text' as const,
        content: `# ✊ Cold War & Civil Rights

**Part 4 of 7 — The Movement Peaks (1960–1965)**

---

> 🔑 **The Idea:** Between 1960 and 1965, nonviolent direct action — sit-ins, Freedom Rides, marches — forced the federal government to act. The result was the two landmark laws of the era: the **Civil Rights Act of 1964** and the **Voting Rights Act of 1965**.`,
      },
      {
        id: 'cwcr4-tactics',
        type: 'text' as const,
        content: `## Nonviolent Direct Action

Dr. King's philosophy of **nonviolent resistance** (drawing on Gandhi and Christian teaching) aimed to provoke a moral crisis: peaceful protesters meeting violent repression would force the nation — and its TV-watching public — to confront injustice.

| Campaign | Year | What it was |
|----------|------|-------------|
| **Greensboro sit-ins** | 1960 | Black college students sat at a segregated Woolworth's lunch counter; sit-ins spread nationwide; led to founding of **SNCC** |
| **Freedom Rides** | 1961 | Interracial activists rode interstate buses into the South to test desegregation rulings; met with brutal violence |
| **Birmingham campaign** | 1963 | Police used dogs and fire hoses on protesters (including children); televised images shocked the nation |
| **March on Washington** | 1963 | ~250,000 gathered; King delivered the "**I Have a Dream**" speech |

> 💡 **The role of television:** Brutal images from Birmingham and Selma, broadcast nationwide, were essential. They turned local confrontations into a *national* moral reckoning and built support for federal legislation.`,
      },
      {
        id: 'cwcr4-tactics-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'The 1961 Freedom Rides were organized primarily to:',
              options: [
                'Register Black voters in Mississippi',
                'Test and challenge the segregation of interstate bus travel in the South',
                'Integrate public schools',
                'Protest the Vietnam War',
              ],
              correctAnswer: 1,
              explanation: 'Freedom Riders rode interstate buses into the segregated South to test compliance with court rulings that had banned segregation in interstate travel — and to draw attention through the violent reactions they provoked.',
            },
            {
              question: 'Dr. Martin Luther King Jr.\'s "I Have a Dream" speech was delivered at the:',
              options: [
                'Montgomery Bus Boycott (1955)',
                'Selma to Montgomery march (1965)',
                'March on Washington for Jobs and Freedom (1963)',
                'Birmingham church (1963)',
              ],
              correctAnswer: 2,
              explanation: 'King delivered the "I Have a Dream" speech at the March on Washington for Jobs and Freedom in August 1963, before a crowd of roughly 250,000.',
            },
          ],
        },
      },
      {
        id: 'cwcr4-cra',
        type: 'text' as const,
        content: `## The Civil Rights Act of 1964

After President **Kennedy was assassinated** in November 1963, President **Lyndon B. Johnson (LBJ)** used his legislative skill (and Kennedy's memory) to push civil rights through Congress, overcoming a long Senate **filibuster** by Southern Democrats.

The **Civil Rights Act of 1964**:

- **Banned segregation** in public accommodations (hotels, restaurants, theaters).
- **Outlawed employment discrimination** based on race, color, religion, sex, or national origin (**Title VII**).
- Strengthened federal power to enforce school desegregation.

> 🔑 **A landmark:** This was the most sweeping civil rights law since Reconstruction. Note that it addressed **discrimination and segregation broadly** — but it did **not** fully secure **voting rights**. That gap is what the Selma campaign and the 1965 Voting Rights Act would close.`,
      },
      {
        id: 'cwcr4-selma-vra',
        type: 'text' as const,
        content: `## Selma & the Voting Rights Act of 1965

Across the South, devices like **literacy tests** and **poll taxes** kept Black citizens from voting. (The **24th Amendment**, ratified in **1964**, banned poll taxes in *federal* elections.)

In **1965**, voting-rights marchers in **Selma, Alabama** were beaten by state troopers on "**Bloody Sunday**." The televised brutality created national outrage. Within months, Congress passed the **Voting Rights Act of 1965**, which:

- **Banned literacy tests** and similar discriminatory devices.
- Authorized **federal examiners** to register voters and oversee elections in areas with a history of discrimination.

The effect was dramatic: Black voter registration in the Deep South surged within a few years.

| Law | Year | Core achievement |
|-----|------|------------------|
| Civil Rights Act | 1964 | Banned segregation & employment discrimination |
| Voting Rights Act | 1965 | Protected the right to vote; banned literacy tests |
| 24th Amendment | 1964 | Banned poll taxes in federal elections |

> ⚠️ **The classic mix-up:** Don't blur the **1964 Civil Rights Act** (segregation & jobs) with the **1965 Voting Rights Act** (the ballot). Their names, years, and targets are different — and APUSH loves to test exactly that distinction.`,
      },
      {
        id: 'cwcr4-laws-dropdown',
        type: 'dropdown-select' as const,
        content: `**Sort the Laws** 🔽

Match each achievement to the correct law or amendment.`,
        exercise: {
          dropdowns: [
            { label: 'Banned segregation in restaurants & hotels:', options: ['Civil Rights Act of 1964', 'Voting Rights Act of 1965', '24th Amendment', 'Brown v. Board'] },
            { label: 'Banned literacy tests for voting:', options: ['Voting Rights Act of 1965', 'Civil Rights Act of 1964', '13th Amendment', 'Plessy v. Ferguson'] },
            { label: 'Banned poll taxes in federal elections:', options: ['24th Amendment', 'Civil Rights Act of 1964', '19th Amendment', 'Voting Rights Act of 1965'] },
          ],
          correctAnswers: ['Civil Rights Act of 1964', 'Voting Rights Act of 1965', '24th Amendment'],
          hint1: 'Public accommodations (hotels, restaurants) were covered by the broad 1964 law.',
          hint2: 'Literacy tests were a *voting* barrier — addressed by the 1965 law.',
          hint3: 'Poll taxes were banned by a constitutional amendment ratified in 1964.',
          explanation: 'The Civil Rights Act of 1964 banned segregation in public accommodations and job discrimination; the Voting Rights Act of 1965 banned literacy tests and protected the ballot; the 24th Amendment (1964) banned poll taxes in federal elections.',
        },
      },
      {
        id: 'cwcr4-results',
        type: 'text' as const,
        content: `## The Movement's Impact — and Its Unfinished Work

Together, these laws dismantled the *legal* framework of Jim Crow:

- **De jure** (by law) segregation in the South was struck down.
- Black voter registration soared, reshaping Southern politics.

But the laws could not, by themselves, erase **de facto** (in fact) segregation — the housing, school, and income inequalities that persisted nationwide, especially in Northern cities.

> 💡 **De jure vs. de facto** is a high-value distinction. The 1964–65 laws attacked *de jure* segregation effectively; the *de facto* segregation of housing and economics proved far harder to undo — setting the stage for the Black Power turn you'll study in Part 6.`,
      },
      {
        id: 'cwcr4-cra-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Which statement most accurately distinguishes the two landmark laws of the mid-1960s?',
              options: [
                'The 1964 Civil Rights Act protected voting; the 1965 Voting Rights Act banned school segregation',
                'The 1964 Civil Rights Act banned segregation and job discrimination; the 1965 Voting Rights Act protected the right to vote',
                'Both laws dealt only with voting rights',
                'Both laws were struck down by the Supreme Court',
              ],
              correctAnswer: 1,
              explanation: 'The Civil Rights Act of 1964 targeted segregation in public accommodations and employment discrimination; the Voting Rights Act of 1965 specifically protected voting (banning literacy tests and authorizing federal oversight).',
            },
            {
              question: 'President Lyndon B. Johnson\'s key contribution to civil rights legislation was:',
              options: [
                'Writing the Brown v. Board decision',
                'Using his political skill to push the Civil Rights Act of 1964 and Voting Rights Act of 1965 through Congress',
                'Leading the Montgomery Bus Boycott',
                'Founding the NAACP',
              ],
              correctAnswer: 1,
              explanation: 'LBJ leveraged his mastery of Congress (and the national mood after JFK\'s assassination and Selma) to secure passage of both landmark laws, overcoming Southern resistance.',
            },
          ],
        },
      },
    ],
  },

  // ───────────────────────── PART 5 ─────────────────────────
  {
    topicSlug: 'apush-cold-war-civil-rights',
    sections: [
      {
        id: 'cwcr5-intro',
        type: 'text' as const,
        content: `# 🪖 Cold War & Civil Rights

**Part 5 of 7 — Cold War in the 1960s & the Vietnam War**

---

### Topics in This Part

| Section |
|---------|
| The Berlin Wall (1961) |
| The Domino Theory |
| Escalation in Vietnam |
| Tet, Protest & "Vietnamization" |

> 🔑 **Key Concept:** Containment, applied to Southeast Asia, drew the U.S. into the **Vietnam War** — its longest and most divisive Cold War conflict. Vietnam both *expressed* containment and ultimately *discredited* it for many Americans.`,
      },
      {
        id: 'cwcr5-berlinwall',
        type: 'text' as const,
        content: `## The Berlin Wall (1961)

Berlin remained a Cold War flashpoint. So many East Germans were fleeing to the West *through* West Berlin that, in **1961**, the East German government (with Soviet backing) built the **Berlin Wall**, physically sealing off East Berlin.

The Wall became the Cold War's most powerful symbol of a divided world. In **1963**, President Kennedy visited and declared "**Ich bin ein Berliner**" ("I am a Berliner") in solidarity with West Berliners.

> ⚠️ **Timeline check:** Berlin **Airlift** = 1948–49 (Part 1). Berlin **Wall** = 1961. Wall **falls** = 1989 (Part 7). Keep these three Berlin events straight.`,
      },
      {
        id: 'cwcr5-berlinwall-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'The Berlin Wall was built in 1961 primarily to:',
              options: [
                'Defend West Berlin from a Soviet invasion',
                'Stop the flow of East Germans fleeing to the West through West Berlin',
                'Break a Soviet blockade of the city',
                'Mark the border between France and Germany',
              ],
              correctAnswer: 1,
              explanation: 'East Germany (with Soviet backing) built the Wall to halt the mass emigration of its citizens to the West, which was draining the country of skilled workers. It became the defining symbol of a divided Cold War world.',
            },
          ],
        },
      },
      {
        id: 'cwcr5-domino',
        type: 'text' as const,
        content: `## The Domino Theory & Early Vietnam

The **domino theory** held that if one country fell to communism, its neighbors would topple in turn — like a row of dominoes. First voiced by **Eisenhower** about Southeast Asia, it became the core rationale for U.S. involvement in **Vietnam**.

Background:
- After WWII, Vietnamese nationalists led by the communist **Ho Chi Minh** fought to expel French colonial rule.
- France was defeated in **1954**; Vietnam was temporarily split at the **17th parallel** — communist North, U.S.-backed South.
- The U.S. backed the South to prevent the "domino" from falling, sending growing numbers of **advisors** under Eisenhower and Kennedy.

> 💡 **Through-line:** Notice the *pattern* — Korea (38th parallel) and Vietnam (17th parallel) were both **divided countries** where the U.S. applied containment to a communist North threatening a non-communist South.`,
      },
      {
        id: 'cwcr5-domino-dropdown',
        type: 'dropdown-select' as const,
        content: `**Cold War Geography & Logic** 🔽`,
        exercise: {
          dropdowns: [
            { label: 'Vietnam was temporarily divided at the:', options: ['17th parallel', '38th parallel', '49th parallel', 'Mason–Dixon line'] },
            { label: 'The "domino theory" predicted that:', options: ['One nation falling to communism would cause neighbors to fall too', 'Nuclear war was inevitable', 'Communism would collapse on its own', 'Europe would unite economically'] },
            { label: 'The communist leader of North Vietnam was:', options: ['Ho Chi Minh', 'Fidel Castro', 'Mao Zedong', 'Nikita Khrushchev'] },
          ],
          correctAnswers: ['17th parallel', 'One nation falling to communism would cause neighbors to fall too', 'Ho Chi Minh'],
          hint1: 'Korea split at the 38th; Vietnam split at a *lower* parallel.',
          hint2: 'Think of a row of falling tiles.',
          hint3: 'He led Vietnamese nationalists against France, then North Vietnam.',
          explanation: 'Vietnam split at the 17th parallel; the domino theory warned that one country falling to communism would topple its neighbors; Ho Chi Minh led communist North Vietnam.',
        },
      },
      {
        id: 'cwcr5-escalation',
        type: 'text' as const,
        content: `## Escalation Under Johnson

The turning point came in **1964**. After a reported clash between U.S. and North Vietnamese forces, Congress passed the **Gulf of Tonkin Resolution**, giving President **Johnson** broad authority to use military force in Vietnam *without* a formal declaration of war.

LBJ used it to **escalate** dramatically: U.S. troop levels rose to over **500,000** by 1968. The U.S. relied on heavy bombing and search-and-destroy missions, but the North Vietnamese and **Viet Cong** guerrillas proved resilient.

| Feature of the war | Why it mattered |
|--------------------|-----------------|
| Guerrilla warfare | Hard to tell enemy from civilian; no clear front lines |
| Heavy bombing | Did not break the North's will |
| The draft | Fell heavily on the young, poor, and minorities, fueling protest |

> 🔑 **The Gulf of Tonkin Resolution** is crucial: it shows how the executive branch expanded **war powers** without a congressional declaration — a constitutional issue that later produced the **War Powers Act (1973)**.`,
      },
      {
        id: 'cwcr5-tet',
        type: 'text' as const,
        content: `## Tet, the Credibility Gap & Vietnamization

In early **1968**, the North launched the **Tet Offensive** — coordinated surprise attacks across South Vietnam. Although the U.S. repelled it **militarily**, Tet was a **psychological/political defeat**: it contradicted official claims that victory was near, widening the "**credibility gap**" between the government and the public.

- Antiwar protests surged, especially on college campuses.
- A divided **LBJ declined to run again** in 1968.
- **Richard Nixon** won the presidency promising "peace with honor."

**Nixon's "Vietnamization"** shifted combat to South Vietnamese forces while withdrawing U.S. troops. The U.S. signed the **Paris Peace Accords** in **1973**; the last troops left, and **Saigon fell** to the North in **1975**, uniting Vietnam under communism.

> ⚠️ **The hard lesson:** Despite winning most battles, the U.S. did **not** achieve its political goal. Vietnam became, for many, proof that containment had **limits** — a sobering counterpoint to the apparent "success" of Berlin and Cuba.`,
      },
      {
        id: 'cwcr5-vietnam-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'The Gulf of Tonkin Resolution (1964) was significant because it:',
              options: [
                'Formally declared war on North Vietnam',
                'Gave President Johnson broad authority to escalate military action in Vietnam without a declaration of war',
                'Ended U.S. involvement in Vietnam',
                'Created the United Nations',
              ],
              correctAnswer: 1,
              explanation: 'The resolution authorized the president to "take all necessary measures" in Vietnam, enabling massive escalation without a formal declaration of war — a major expansion of executive war powers.',
            },
            {
              question: 'The Tet Offensive (1968) is best described as a:',
              options: [
                'Clear military and political victory for North Vietnam',
                'Military setback for the U.S. that handed the war to the North immediately',
                'Military defeat for the North that nonetheless became a psychological turning point against the war at home',
                'Peace agreement that ended the war',
              ],
              correctAnswer: 2,
              explanation: 'U.S. and South Vietnamese forces repelled Tet militarily, but the scale of the surprise attacks shattered official optimism, deepened the credibility gap, and fueled antiwar sentiment at home.',
            },
          ],
        },
      },
    ],
  },

  // ───────────────────────── PART 6 ─────────────────────────
  {
    topicSlug: 'apush-cold-war-civil-rights',
    sections: [
      {
        id: 'cwcr6-intro',
        type: 'text' as const,
        content: `# 🌍 Cold War & Civil Rights

**Part 6 of 7 — Black Power, Détente & the 1970s**

---

> 🔑 **The Idea:** The late 1960s and 1970s brought new directions on *both* fronts: a more militant, self-determination-focused turn in the freedom struggle (**Black Power**), and an easing of superpower tensions abroad (**détente**).`,
      },
      {
        id: 'cwcr6-blackpower',
        type: 'text' as const,
        content: `## From Civil Rights to Black Power

By the mid-1960s, some activists grew frustrated that legal victories had not ended poverty, police violence, or de facto segregation — especially in Northern cities, where discrimination was real but less tied to formal Jim Crow laws.

| Figure / Group | Emphasis |
|----------------|----------|
| **Malcolm X** | Black pride, self-defense, and self-determination; critical of nonviolence (his views evolved before his 1965 assassination) |
| **Stokely Carmichael** | Popularized the slogan "**Black Power**" (1966) within SNCC |
| **Black Panther Party** (founded 1966) | Armed self-defense plus community programs (e.g., free breakfast for children) |

This was **not** a simple rejection of King — it was a broadening of the struggle toward **economic justice** and **racial pride**. King himself increasingly addressed poverty and opposed the Vietnam War before his **assassination in 1968**, which sparked riots in many cities.

> 💡 **Nuance for essays:** Frame the movement as having **multiple, overlapping strands** — legal challenges, nonviolent direct action, *and* Black Power — rather than a single story. That complexity earns sophistication points on the DBQ/LEQ.`,
      },
      {
        id: 'cwcr6-blackpower-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'The "Black Power" movement of the late 1960s primarily emphasized:',
              options: [
                'A return to legal segregation',
                'Racial pride, self-determination, and economic empowerment, sometimes including self-defense',
                'Abandoning all political activism',
                'Cooperation with the Ku Klux Klan',
              ],
              correctAnswer: 1,
              explanation: 'Black Power emphasized racial pride, Black self-determination, community control, and economic empowerment — broadening the movement beyond integration and formal legal rights.',
            },
            {
              question: 'Compared with Dr. King\'s early approach, the Black Panther Party was more associated with:',
              options: [
                'Strict philosophical commitment to nonviolence in all cases',
                'Armed self-defense alongside community service programs',
                'Opposition to all government programs',
                'Support for the Vietnam War',
              ],
              correctAnswer: 1,
              explanation: 'The Black Panthers combined armed self-defense (in response to police violence) with community programs such as free breakfast for children — a notable contrast with the strict nonviolence of the early SCLC.',
            },
          ],
        },
      },
      {
        id: 'cwcr6-detente',
        type: 'text' as const,
        content: `## Détente: Easing Cold War Tensions

In the early 1970s, President **Nixon** and his adviser **Henry Kissinger** pursued **détente** — a relaxation of tensions with the communist powers.

| Move | Year | Significance |
|------|------|--------------|
| **Nixon visits China** | 1972 | Opened relations with communist China, exploiting the **Sino-Soviet split** |
| **Nixon visits Moscow** | 1972 | First U.S. president to visit the U.S.S.R.; symbolized thaw |
| **SALT I** | 1972 | Strategic Arms Limitation Talks; first treaty to **limit nuclear arsenals** |
| **Helsinki Accords** | 1975 | Recognized European borders; included human-rights pledges |

> 🔑 **Why détente, why then?** The Vietnam quagmire, the cost of the arms race, and the U.S.S.R.'s achievement of rough nuclear *parity* made **negotiation** look smarter than confrontation. Playing China against the U.S.S.R. gave Nixon diplomatic leverage.`,
      },
      {
        id: 'cwcr6-detente-dropdown',
        type: 'dropdown-select' as const,
        content: `**Détente Diplomacy** 🔽`,
        exercise: {
          dropdowns: [
            { label: 'SALT I (1972) was the first treaty to:', options: ['Limit the superpowers\' nuclear arsenals', 'Ban all nuclear weapons', 'End the Vietnam War', 'Unify Germany'] },
            { label: 'In 1972, Nixon made a historic visit to:', options: ['Communist China', 'North Korea', 'Cuba', 'East Germany'] },
            { label: '"Détente" refers to:', options: ['An easing of tensions between the superpowers', 'A new arms buildup', 'A military alliance', 'A communist revolution'] },
          ],
          correctAnswers: ['Limit the superpowers\' nuclear arsenals', 'Communist China', 'An easing of tensions between the superpowers'],
          hint1: 'SALT stands for *Strategic Arms Limitation* Talks.',
          hint2: 'Nixon exploited the rift between China and the U.S.S.R.',
          hint3: 'The French word means a *relaxation* of strain.',
          explanation: 'SALT I limited (not abolished) nuclear arsenals; Nixon\'s 1972 visit to communist China was a diplomatic breakthrough; détente means an easing of Cold War tensions through negotiation.',
        },
      },
      {
        id: 'cwcr6-coldwar70s',
        type: 'text' as const,
        content: `## The Limits of Détente

Détente did not end the Cold War — it managed it. Tensions flared again at the end of the decade:

- The **Soviet invasion of Afghanistan (1979)** shattered the thaw.
- President **Carter** responded with a **grain embargo** and a **U.S. boycott of the 1980 Moscow Olympics**.
- The mood hardened into a "**Second Cold War**" of the early 1980s.

> 💡 **Connect to the next part:** Afghanistan would become a costly, grinding war for the U.S.S.R. — its own "**Vietnam**" — draining the Soviet economy and contributing to the collapse you'll study in Part 7.`,
      },
      {
        id: 'cwcr6-70s-input',
        type: 'input-boxes' as const,
        content: `**Quick Recall** 🧮

Fill in each blank with a year.

**1)** Nixon's historic visit to communist China: **____.**
**2)** SALT I was signed in **____.**
**3)** The Soviet Union invaded Afghanistan in **____,** helping end détente.`,
        exercise: {
          boxes: 3,
          correctAnswers: ['1972', '1972', '1979'],
          hint1: 'Nixon\'s China trip came during his first term, in the early 1970s.',
          hint2: 'SALT I was signed the same year as the China and Moscow visits.',
          hint3: 'The invasion came at the very end of the 1970s, under President Carter.',
          explanation: '1) Nixon visited China in 1972. 2) SALT I was signed in 1972. 3) The U.S.S.R. invaded Afghanistan in 1979, ending the era of détente.',
        },
      },
    ],
  },

  // ───────────────────────── PART 7 ─────────────────────────
  {
    topicSlug: 'apush-cold-war-civil-rights',
    sections: [
      {
        id: 'cwcr7-intro',
        type: 'text' as const,
        content: `# 🏁 Cold War & Civil Rights

**Part 7 of 7 — Reagan, the Cold War's End & Mastery Check**

---

You've traced two intertwined stories: the **Cold War** abroad (1945–1991) and the **civil rights movement** at home (1945–1970s). This final part covers the Cold War's dramatic end, then puts the whole arc together.`,
      },
      {
        id: 'cwcr7-reagan',
        type: 'text' as const,
        content: `## Reagan & the End of the Cold War

President **Ronald Reagan** (in office 1981–1989) took a harder line early on, calling the U.S.S.R. an "**evil empire**" and launching a major **military buildup**, including the proposed missile-defense system "**Star Wars**" (the Strategic Defense Initiative, **SDI**).

The decisive change came from within the U.S.S.R. In 1985, reformer **Mikhail Gorbachev** became Soviet leader and introduced:

| Reform | Meaning |
|--------|---------|
| **Glasnost** | "Openness" — loosening censorship and political controls |
| **Perestroika** | "Restructuring" — limited market-style economic reforms |

Reagan and Gorbachev negotiated real arms reductions (e.g., the **INF Treaty, 1987**, eliminating an entire class of missiles).

**The end came fast:**
- **1989** — The **Berlin Wall fell**; communist governments across Eastern Europe collapsed, mostly peacefully.
- **1991** — The **Soviet Union dissolved** into separate nations. The Cold War was over.

> 🔑 **Causation (cite multiple factors):** Historians credit a *combination* — Soviet economic stagnation, the cost of the arms race and Afghanistan, Gorbachev's reforms unleashing forces he couldn't control, Reagan-era pressure, and popular movements in Eastern Europe (e.g., Poland's **Solidarity**).`,
      },
      {
        id: 'cwcr7-reagan-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'The Soviet policies of glasnost ("openness") and perestroika ("restructuring") were introduced by:',
              options: ['Joseph Stalin', 'Nikita Khrushchev', 'Mikhail Gorbachev', 'Leonid Brezhnev'],
              correctAnswer: 2,
              explanation: 'Mikhail Gorbachev, Soviet leader from 1985, introduced glasnost (openness) and perestroika (economic restructuring), reforms that ultimately accelerated the collapse of the Soviet system.',
            },
            {
              question: 'Which sequence of events is in the correct chronological order?',
              options: [
                'Soviet Union dissolves → Berlin Wall falls → Gorbachev takes power',
                'Gorbachev takes power (1985) → Berlin Wall falls (1989) → Soviet Union dissolves (1991)',
                'Berlin Wall falls → Gorbachev takes power → Soviet Union dissolves',
                'Soviet Union dissolves → Gorbachev takes power → Berlin Wall falls',
              ],
              correctAnswer: 1,
              explanation: 'Gorbachev became leader in 1985, the Berlin Wall fell in 1989, and the Soviet Union dissolved in 1991 — that is the correct order.',
            },
          ],
        },
      },
      {
        id: 'cwcr7-synthesis',
        type: 'text' as const,
        content: `## Synthesis: Two Stories, One Era

The Cold War and civil rights were not separate tracks — they reinforced each other.

| Connection | How it worked |
|------------|---------------|
| **Image** | Segregation embarrassed the U.S. abroad; reform served Cold War diplomacy |
| **Rhetoric** | Activists turned "freedom" and "democracy" — the language of the Cold War — back on the U.S. |
| **Cost** | Vietnam drained funds and moral energy from LBJ's "Great Society" antipoverty programs |
| **Repression** | Cold War anticommunism was sometimes used to smear civil rights leaders as "subversive" |

> 💡 **Big-picture thesis for an essay:** The same decades that saw the U.S. champion "freedom" against communism abroad forced a reckoning with the *limits* of freedom at home. The two struggles were bound together.`,
      },
      {
        id: 'cwcr7-timeline-dropdown',
        type: 'dropdown-select' as const,
        content: `**Final Timeline Check** 🔽

Place each event in the correct decade.`,
        exercise: {
          dropdowns: [
            { label: 'Brown v. Board of Education:', options: ['1950s', '1940s', '1960s', '1970s'] },
            { label: 'Cuban Missile Crisis:', options: ['1960s', '1950s', '1970s', '1980s'] },
            { label: 'Fall of the Berlin Wall:', options: ['1980s', '1960s', '1970s', '1990s'] },
          ],
          correctAnswers: ['1950s', '1960s', '1980s'],
          hint1: 'Brown was decided in 1954.',
          hint2: 'The Cuban Missile Crisis was October 1962.',
          hint3: 'The Berlin Wall fell in 1989.',
          explanation: 'Brown v. Board (1954) → 1950s; Cuban Missile Crisis (1962) → 1960s; fall of the Berlin Wall (1989) → 1980s.',
        },
      },
      {
        id: 'cwcr7-strategy',
        type: 'text' as const,
        content: `## Quick Reference for the Exam

| If a question is about… | Reach for… |
|--------------------------|------------|
| Stopping communism's spread | Containment → Truman Doctrine, Marshall Plan, NATO |
| The closest nuclear scare | Cuban Missile Crisis (1962) |
| Overturning "separate but equal" | Brown v. Board (1954) |
| Banning segregation & job bias | Civil Rights Act of 1964 |
| Protecting the ballot | Voting Rights Act of 1965 |
| Easing superpower tension | Détente (Nixon, SALT I, 1972) |
| The Cold War's end | Gorbachev's reforms, Wall falls (1989), U.S.S.R. dissolves (1991) |

> ⚠️ **Top traps to avoid:** Berlin Airlift (1948–49) ≠ Berlin Wall (1961); Civil Rights Act (1964, segregation/jobs) ≠ Voting Rights Act (1965, the ballot); the military was desegregated by **executive order**, not by Congress. Now finish with the Exit Quiz.`,
      },
      {
        id: 'cwcr7-mixed',
        type: 'multiple-choice' as const,
        content: `**Mixed Practice** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Which pairing of policy and goal is correct?',
              options: [
                'Marshall Plan → rebuild Western Europe\'s economy to resist communism',
                'Voting Rights Act → desegregate the armed forces',
                'SALT I → start the Korean War',
                'Brown v. Board → ban poll taxes',
              ],
              correctAnswer: 0,
              explanation: 'The Marshall Plan provided economic aid to rebuild Western Europe and make it more resistant to communism. The other pairings are mismatched: the military was desegregated by executive order (1948), SALT I limited nuclear arms (1972), and poll taxes were banned by the 24th Amendment (1964).',
            },
            {
              question: 'A common thread linking the Korean War and the Vietnam War is that both:',
              options: [
                'Ended in clear, total U.S. victory',
                'Were fought in divided countries where the U.S. applied containment against a communist North',
                'Were declared wars passed by Congress',
                'Resulted in the use of nuclear weapons',
              ],
              correctAnswer: 1,
              explanation: 'Both Korea (38th parallel) and Vietnam (17th parallel) involved divided nations where the U.S. fought to contain a communist North threatening a non-communist South — neither was a formally declared war, and neither ended in total U.S. victory.',
            },
          ],
        },
      },
      {
        id: 'cwcr7-exit-quiz',
        type: 'multiple-choice' as const,
        content: `**Exit Quiz** ✅

Answer all three to finish the lesson.`,
        exercise: {
          questions: [
            {
              question: 'The U.S. policy of "containment" was first articulated to:',
              options: [
                'Roll back communism wherever it existed by force',
                'Prevent the further spread of Soviet communism',
                'Promote free trade with the Soviet Union',
                'End racial segregation in the United States',
              ],
              correctAnswer: 1,
              explanation: 'Containment, associated with George Kennan, aimed to stop the *spread* of communism — a defensive strategy that underpinned the Truman Doctrine, Marshall Plan, NATO, and later wars in Korea and Vietnam.',
            },
            {
              question: 'Which law banned literacy tests and authorized federal oversight of elections to protect Black voters?',
              options: [
                'The Civil Rights Act of 1964',
                'The Voting Rights Act of 1965',
                'Brown v. Board of Education',
                'The Marshall Plan',
              ],
              correctAnswer: 1,
              explanation: 'The Voting Rights Act of 1965 banned literacy tests and authorized federal examiners to register voters in areas with a history of discrimination, dramatically increasing Black voter registration in the South.',
            },
            {
              question: 'How were the Cold War and the civil rights movement connected?',
              options: [
                'They had no relationship to one another',
                'Civil rights leaders supported the Soviet Union',
                'Segregation embarrassed the U.S. in its Cold War competition for global influence, giving leaders a strategic reason to support reform',
                'The Cold War ended segregation overnight',
              ],
              correctAnswer: 2,
              explanation: 'As the U.S. positioned itself as leader of the "free world," domestic segregation became an international liability exploited by Soviet propaganda — linking the cause of civil rights to Cold War foreign policy and giving officials a strategic incentive to support reform.',
            },
          ],
        },
      },
    ],
  },
]
