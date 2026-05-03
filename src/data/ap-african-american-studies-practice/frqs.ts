import type { SAQItem } from '@/components/FullLengthPracticeExam'

/**
 * AP African American Studies — 3 FRQs (2 SAQs + 1 DBQ).
 * Real exam: Section I Part B = 4 SAQs (40 min); Section II = DBQ (60 min, with 15-min reading period).
 * Practice: 2 SAQs (20 min) + 1 DBQ (40 min).
 */

export const FRQS: SAQItem[] = [
  /* ---- SAQ 1: Source-based on Reconstruction ---- */
  {
    type: 'saq',
    topic: 'saq-source-based',
    stimulus: `**FRQ #1 — Source-Based SAQ (3 points, ~10 min)**

**Source: Frederick Douglass, "What the Black Man Wants" (1865), excerpt:**

> "Everybody has asked the question, and they learned to ask it early of the abolitionists, 'What shall we do with the Negro?' I have had but one answer from the beginning. Do nothing with us! Your doing with us has already played the mischief with us. Do nothing with us! If the apples will not remain on the tree of their own strength, if they are wormeaten at the core, if they are early ripe and disposed to fall, let them fall! ... All I ask is, give him a chance to stand on his own legs! Let him alone! ... If you will only untie his hands, and give him a chance, I think he will live."

Respond to ALL parts of the question. Use complete sentences.`,
    parts: [
      {
        prompt: '(A) Describe ONE main argument Douglass makes in this excerpt about the role of the federal government and white Americans in the lives of formerly enslaved Black Americans. (1 pt)',
        rubric: 'Acceptable: Douglass argues that what formerly enslaved Black people most need is NOT paternalistic intervention but the removal of obstacles — equal rights and the freedom to participate in society on their own terms ("untie his hands"). +1 for any answer that captures Douglass\'s rejection of paternalism / call for equal opportunity.',
      },
      {
        prompt: '(B) Identify ONE specific historical development during Reconstruction (1865–1877) that supports OR contradicts Douglass\'s vision in this excerpt. (1 pt)',
        rubric: 'Acceptable supporting: 13th, 14th, or 15th Amendments; Civil Rights Act of 1866; election of African Americans to Congress (Hiram Revels, Blanche Bruce); founding of HBCUs. Contradicting: Black Codes; KKK violence; failure of "40 acres and a mule"; Compromise of 1877; Reconstruction Era Supreme Court decisions limiting federal civil-rights enforcement. +1 for naming a specific Reconstruction-era development AND linking it to Douglass\'s vision.',
      },
      {
        prompt: '(C) Explain ONE way that a major historical actor or movement after Reconstruction (e.g., Booker T. Washington, W.E.B. Du Bois, Marcus Garvey, the NAACP, the SNCC) extended OR challenged Douglass\'s argument. (1 pt)',
        rubric: 'Acceptable examples: W.E.B. Du Bois\'s insistence on full civil and political rights extends Douglass; Booker T. Washington\'s Atlanta Compromise of accepting segregation in exchange for economic opportunity partially challenges Douglass\'s emphasis on full equality; Garvey\'s Pan-African self-determination extends the spirit but proposes Black-controlled institutions outside the U.S. context Douglass envisioned. +1 for identifying a figure/movement AND explaining the extension or challenge.',
      },
    ],
  },

  /* ---- SAQ 2: Non-source-based on Civil Rights Movement ---- */
  {
    type: 'saq',
    topic: 'saq-non-source',
    stimulus: `**FRQ #2 — Non-Source-Based SAQ (3 points, ~10 min)**

**Question:** The mid-20th century civil rights movement is sometimes told as a single, unified narrative led by Martin Luther King Jr. Historians, however, have argued that the movement was diverse in strategy, leadership, and ideology.

Respond to ALL parts of the question.`,
    parts: [
      {
        prompt: '(A) Identify TWO distinct strategies or ideological approaches used by Black Americans in the freedom struggle between 1954 and 1975. (1 pt)',
        rubric: 'Acceptable: nonviolent direct action (King, SCLC); legal/courtroom strategy (NAACP, Thurgood Marshall, Charles Hamilton Houston); voter registration (SNCC, Freedom Summer); Black Power and self-defense (SNCC under Carmichael, Black Panthers); cultural nationalism / Pan-Africanism (Malcolm X, OAAU); economic boycotts (Montgomery Bus Boycott); separatist programs (Nation of Islam). +1 for naming any TWO substantively different strategies/approaches.',
      },
      {
        prompt: '(B) Describe ONE specific event from the period in which the strategies you identified in (A) intersected, conflicted, or coexisted. (1 pt)',
        rubric: 'Acceptable: Selma to Montgomery marches (combination of SNCC voter registration + SCLC nonviolent action); 1966 Meredith March Against Fear (where Carmichael publicly proclaimed "Black Power" alongside King); Mississippi Freedom Summer (1964) bringing together SNCC, CORE, NAACP; Black Panther community programs operating in cities also organized by SCLC. +1 for naming a specific event AND describing how multiple strategies/ideologies interacted.',
      },
      {
        prompt: '(C) Explain ONE consequence of the diversity of strategies on the outcomes of the civil rights movement. (1 pt)',
        rubric: 'Acceptable: legal victories (Brown, Civil Rights Act of 1964, Voting Rights Act of 1965) emerged from coordinated legal AND direct-action pressure; Black Power\'s rise pushed mainstream civil rights organizations to address economic and structural issues; ideological diversity created internal tensions (e.g., between SNCC and SCLC); the movement\'s reach expanded to address housing, employment, and policing in addition to formal segregation. +1 for explaining a substantive consequence (positive or negative).',
      },
    ],
  },

  /* ---- DBQ ---- */
  {
    type: 'saq',
    topic: 'dbq',
    stimulus: `**FRQ #3 — Document-Based Question (6 points, ~40 min)**

**Question:** Evaluate the extent to which African American cultural and intellectual movements of the 20th century challenged dominant ideas about race in the United States.

Use the documents and your knowledge of African American history from 1900 to the present to support your argument.

---

**Document 1 — W.E.B. Du Bois, *The Souls of Black Folk* (1903), excerpt:**
> "It is a peculiar sensation, this double-consciousness, this sense of always looking at one's self through the eyes of others, of measuring one's soul by the tape of a world that looks on in amused contempt and pity. One ever feels his two-ness, — an American, a Negro; two souls, two thoughts, two unreconciled strivings; two warring ideals in one dark body."

---

**Document 2 — Alain Locke, "The New Negro" (1925), excerpt:**
> "The Old Negro had long become more of a myth than a man... The day of 'aunties,' 'uncles' and 'mammies' is equally gone. Uncle Tom and Sambo have passed on... A new vision of opportunity, of social and economic freedom, of self-dependence and group expression, has come over the American Negro."

---

**Document 3 — Marcus Garvey, "Africa for the Africans" (1923), excerpt:**
> "We are determined to solve our own problem, by redeeming our Motherland Africa from the hands of alien exploiters and founding there a government, a nation of our own, strong enough to lend protection to the members of our race scattered all over the world, and to compel the respect of the nations and races of the earth."

---

**Document 4 — Photograph caption from a 1968 issue of *Ebony* magazine:**
> "Olympic medalists Tommie Smith and John Carlos raise gloved fists during the playing of the U.S. national anthem at the Mexico City Games — a silent protest against racial discrimination that drew global attention and immediate sanction from the International Olympic Committee."

---

**Document 5 — Audre Lorde, *Sister Outsider* (1984), excerpt:**
> "There is no thing as a single-issue struggle because we do not live single-issue lives... My fullest concentration of energy is available to me only when I integrate all the parts of who I am, openly, allowing power from particular sources of my living to flow back and forth freely through all my different selves, without the restriction of externally imposed definition."

---

**Document 6 — Public statement, founders of Black Lives Matter (2014), excerpt:**
> "Black Lives Matter is an ideological and political intervention in a world where Black lives are systematically and intentionally targeted for demise. It is an affirmation of Black folks' contributions to this society, our humanity, and our resilience in the face of deadly oppression."`,
    parts: [
      {
        prompt: '(A) THESIS / CLAIM (1 pt) — Write a thesis statement that responds to the prompt with a historically defensible claim that establishes a line of reasoning.',
        rubric: 'Example: "From Du Bois\'s articulation of double-consciousness through Black Lives Matter\'s 21st-century insistence on Black humanity, African American cultural and intellectual movements consistently challenged dominant U.S. racial ideologies — though the form of that challenge shifted from internal psychological reframing (Du Bois, Locke) to political-territorial alternatives (Garvey), to public protest and intersectional analysis (Smith/Carlos, Lorde, BLM)." +1 for a defensible thesis that takes a clear position AND establishes a line of reasoning (more than restating the prompt).',
      },
      {
        prompt: '(B) CONTEXTUALIZATION (1 pt) — Describe a broader historical context relevant to the prompt.',
        rubric: 'Acceptable: situating 20th-century Black thought within the longer arc of Reconstruction-era debates and Jim Crow violence; describing the role of WWI, WWII, and the Cold War in shaping civil rights opportunities; describing the impact of the Great Migration on Black urban culture and political organization; describing the global anticolonial moment\'s relationship to Black American thought. +1 for a multi-sentence description (NOT a single phrase) that genuinely sets up the argument.',
      },
      {
        prompt: '(C) EVIDENCE FROM DOCUMENTS (2 pts) — Use at least FOUR documents to support an argument in response to the prompt.',
        rubric: 'For each of 4 documents: explain WHAT the document argues AND link it to the thesis. Example: "Du Bois (Doc 1) names the psychic toll of racism (\'double-consciousness\'), reframing white supremacy as a cognitive condition imposed on Black Americans rather than evidence of Black inferiority — directly challenging dominant racial science of the era." +1 for using 3 documents with linkage; +2 for using 4+ documents with linkage. (Mere mention without linkage = no credit.)',
      },
      {
        prompt: '(D) EVIDENCE BEYOND THE DOCUMENTS (1 pt) — Use at least one specific piece of historical evidence NOT mentioned in the documents to support an argument.',
        rubric: 'Acceptable: the Harlem Renaissance writers (Hughes, Hurston, McKay); the founding of the NAACP (1909) and *The Crisis*; jazz/blues as cultural challenges to white cultural hierarchies; James Baldwin\'s essays; Malcolm X\'s post-1964 internationalism; hip-hop\'s emergence in the 1970s; Octavia Butler and Afrofuturism; Black studies departments\' founding in the late 1960s. +1 for a specific (named) piece of evidence linked to the argument.',
      },
      {
        prompt: '(E) ANALYSIS — SOURCING (1 pt) — For at least ONE document, explain how the document\'s point of view, purpose, historical situation, OR audience is relevant to your argument.',
        rubric: 'Example for Doc 3 (Garvey): "Garvey wrote in 1923 from within the UNIA, a mass organization of working-class Black Americans disillusioned with the slow pace of integrationist gains. His audience — diasporic Black readers, not white liberal allies — explains his uncompromising rhetoric of African self-determination, distinguishing his challenge to dominant racial ideology from Du Bois\'s more accommodationist approach to white American audiences in *The Souls of Black Folk*." +1 for an explicit POV/purpose/situation/audience analysis tied to the argument.',
      },
    ],
  },
]
