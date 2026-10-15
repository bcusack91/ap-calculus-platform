/**
 * AP African American Studies — FRQ practice bank, built to the real Section II:
 *   - 3 short-answer questions in 40 minutes: SAQ 1 analyzes a text source (4 points),
 *     SAQ 2 a visual, non-text source (3 points), and SAQ 3 has no source (3 points);
 *   - 1 document-based question (DBQ) with 5 sources, 45 minutes, 7 points.
 * The exam-day validation question about the Individual Student Project is not
 * represented, and the course has no long essay. The bank holds two questions of each
 * SAQ type and three DBQs. Every rubric line is worth one point. Sources are real,
 * public-domain texts and images; any excerpt that is not verbatim is labelled
 * "adapted". The official per-SAQ point values are not published; 4/3/3 matches the
 * full-length practice exam.
 */

import { shuffleArray } from '@/lib/shuffle-options'

export interface FRQRubricItem {
  points: number
  description: string
  keywords: string[]
  /** Distinct keywords the response must contain to earn the point (default 1). */
  minMatches?: number
}

export interface FRQPart {
  label: string
  prompt: string
  maxPoints: number
  rubric: FRQRubricItem[]
  sampleAnswer: string
}

export type AASFRQType = 'saq-text' | 'saq-visual' | 'saq-nosource' | 'dbq'

/** Exam order, labels, points, and suggested minutes for the real Section II question types. */
export const AAS_FRQ_TYPES: { type: AASFRQType; label: string; short: string; points: number; minutes: number }[] = [
  { type: 'saq-text', label: 'SAQ 1: Text-Based Source', short: 'SAQ 1', points: 4, minutes: 15 },
  { type: 'saq-visual', label: 'SAQ 2: Visual Source', short: 'SAQ 2', points: 3, minutes: 12 },
  { type: 'saq-nosource', label: 'SAQ 3: No Source', short: 'SAQ 3', points: 3, minutes: 13 },
  { type: 'dbq', label: 'Document-Based Question', short: 'DBQ', points: 7, minutes: 45 },
]

export interface AASFRQ {
  id: string
  type: AASFRQType
  unit: number
  title: string
  prompt: string
  parts: FRQPart[]
  totalPoints: number
  timeRecommendation: string
  calculatorAllowed: boolean
}

/* ------------------------------------------------------------------ */
/*  Short-answer questions — 1 point per part                         */
/* ------------------------------------------------------------------ */

const saqFRQs: AASFRQ[] = [
  // ---------------- SAQ 1: text-based source (4 points) ----------------
  {
    id: 'aas-saq-text-1',
    type: 'saq-text',
    unit: 2,
    title: 'SAQ 1 (Text Source): Olaudah Equiano on the Middle Passage (1789)',
    prompt: `**Question 1 — Text-based source (4 points).** Read the source and respond to all parts of the question. Use complete sentences.

> "The stench of the hold while we were on the coast was so intolerably loathsome, that it was dangerous to remain there for any time . . . The closeness of the place, and the heat of the climate, added to the number in the ship, which was so crowded that each had scarcely room to turn himself, almost suffocated us. This produced copious perspirations, so that the air soon became unfit for respiration, from a variety of loathsome smells, and brought on a sickness among the slaves, of which many died, thus falling victims to the improvident avarice, as I may call it, of their purchasers. . . . The shrieks of the women, and the groans of the dying, rendered the whole a scene of horror almost inconceivable."

*Olaudah Equiano, who wrote that he was born in West Africa and enslaved as a child; he later bought his freedom and became an abolitionist in Britain, The Interesting Narrative of the Life of Olaudah Equiano, or Gustavus Vassa, the African, published in London in 1789*`,
    parts: [
      {
        label: '(a)',
        prompt: 'Describe ONE claim Equiano makes in the excerpt about the conditions of the Middle Passage.',
        maxPoints: 1,
        rubric: [
          {
            points: 1,
            description: 'Describes a claim: captives were packed so tightly they could barely turn or breathe; the heat and filth caused sickness and many deaths; the slave traders\' greed ("improvident avarice") caused the suffering; the voyage was a scene of terror and grief.',
            keywords: ['crowded', 'packed', 'suffocat', 'breathe', 'heat', 'stench', 'smell', 'sickness', 'disease', 'died', 'death', 'greed', 'avarice', 'horror', 'shrieks'],
          },
        ],
        sampleAnswer: 'Equiano claims that captives were packed so tightly into the hold that they could barely turn or breathe, and that the heat and foul air caused sickness that killed many of them. He blames this on the "improvident avarice," or greed, of the traders who bought them.',
      },
      {
        label: '(b)',
        prompt: "Explain how Equiano's purpose or intended audience shaped the way he describes the Middle Passage.",
        maxPoints: 1,
        rubric: [
          {
            points: 1,
            description: 'Explains purpose or audience: Equiano wrote for British readers and members of Parliament during the campaign to abolish the slave trade (the Society for Effecting the Abolition of the Slave Trade formed in 1787); he used vivid sensory detail and blamed traders\' greed to stir readers\' sympathy and moral outrage and build support for abolition.',
            keywords: ['abolition', 'abolitionist', 'parliament', 'british readers', 'british audience', 'british public', 'persuade', 'sympathy', 'outrage', 'campaign'],
          },
        ],
        sampleAnswer: 'Equiano wrote for British readers in 1789, while abolitionists were petitioning Parliament to end the slave trade. To persuade them, he used vivid details of smells, heat, and the "shrieks of the women" so that readers would feel the horror themselves and blame the traders\' greed.',
      },
      {
        label: '(c)',
        prompt: 'Explain ONE way enslaved Africans resisted their captivity during the Middle Passage OR after arriving in the Americas before 1800.',
        maxPoints: 1,
        rubric: [
          {
            points: 1,
            description: 'Explains a form of resistance: shipboard revolts; refusing food or jumping overboard; forming bonds with "shipmates"; escaping to form maroon communities (Jamaica, Suriname, Palmares in Brazil); armed revolts such as the Stono Rebellion (1739) or the Haitian Revolution (1791); everyday resistance such as work slowdowns and keeping African cultural and religious practices.',
            keywords: ['revolt', 'rebellion', 'uprising', 'mutiny', 'refused to eat', 'refusing to eat', 'refusing food', 'hunger strike', 'overboard', 'shipmate', 'maroon', 'palmares', 'stono', 'haiti', 'escape', 'slowdown', 'african culture', 'cultural practices', 'religio'],
          },
        ],
        sampleAnswer: 'Some captives resisted on board by refusing to eat or by rising against the crew, which is why slave ships carried guns and nets. In the Americas, others escaped and formed maroon communities, such as Palmares in Brazil, which survived for most of the 1600s and defended its independence against Portuguese attacks.',
      },
      {
        label: '(d)',
        prompt: 'Explain ONE way the movement to abolish the slave trade in Britain or the United States achieved results between 1787 and 1808.',
        maxPoints: 1,
        rubric: [
          {
            points: 1,
            description: 'Explains a result: Britain\'s Slave Trade Act (1807) abolished the British slave trade; the United States banned the importation of enslaved people effective January 1, 1808 (the earliest date the Constitution allowed); abolitionist petitions, boycotts of slave-grown sugar, and narratives such as Equiano\'s (a bestseller with many editions) built public support.',
            keywords: ['1807', 'slave trade act', 'act prohibiting importation', 'importation', 'petition', 'boycott', 'sugar', 'wilberforce', 'clarkson'],
          },
        ],
        sampleAnswer: 'British abolitionists gathered huge petitions, organized boycotts of slave-grown sugar, and circulated narratives like Equiano\'s. Their campaign led Parliament to pass the Slave Trade Act in 1807, which made the British slave trade illegal, and the United States banned the importation of enslaved people in 1808.',
      },
    ],
    totalPoints: 4,
    timeRecommendation: '~15 minutes',
    calculatorAllowed: false,
  },
  {
    id: 'aas-saq-text-2',
    type: 'saq-text',
    unit: 3,
    title: 'SAQ 1 (Text Source): Ida B. Wells, Southern Horrors (1892)',
    prompt: `**Question 1 — Text-based source (4 points).** Read the source and respond to all parts of the question. Use complete sentences.

> "By the right exercise of his power as the industrial factor of the South, the Afro-American can demand and secure his rights, the punishment of lynchers, and a fair trial for accused rapists. . . .
>
> The lesson this teaches and which every Afro-American should ponder well, is that a Winchester rifle should have a place of honor in every black home, and it should be used for that protection which the law refuses to give. . . . The more the Afro-American yields and cringes and begs, the more he has to do so, the more he is insulted, outraged and lynched.
>
> The assertion has been substantiated throughout these pages that the press contains unreliable and doctored reports of lynchings, and one of the most necessary things for the race to do is to get these facts before the public. The people must know before they can act, and there is no educator to compare with the press."

*Ida B. Wells, African American journalist, Southern Horrors: Lynch Law in All Its Phases, a pamphlet published in New York in 1892, months after a white mob destroyed the office of her Memphis newspaper, the Free Speech*`,
    parts: [
      {
        label: '(a)',
        prompt: 'Describe ONE strategy Wells recommends in the excerpt for responding to lynching.',
        maxPoints: 1,
        rubric: [
          {
            points: 1,
            description: 'Describes a strategy: use Black Southerners\' economic power as workers (for example, boycotts or leaving) to demand rights; armed self-defense ("a Winchester rifle"); refusing to beg or yield; publicizing the facts of lynching through the press.',
            keywords: ['economic', 'labor', 'boycott', 'industrial factor', 'self-defense', 'self defense', 'defend', 'rifle', 'gun', 'armed', 'press', 'newspaper', 'publiciz', 'facts', 'expose'],
          },
        ],
        sampleAnswer: 'Wells recommends armed self-defense. She argues that a "Winchester rifle" belongs in every Black home and should be used for the protection that the law refuses to give Black people.',
      },
      {
        label: '(b)',
        prompt: 'Describe the historical context in which Wells wrote Southern Horrors.',
        maxPoints: 1,
        rubric: [
          {
            points: 1,
            description: 'Describes context: lynching of African Americans peaked in the early 1890s; the lynching of Thomas Moss, Calvin McDowell, and Will Stewart, who ran the People\'s Grocery in Memphis (March 1892); the end of Reconstruction (1877), the spread of Jim Crow laws, and disfranchisement (Mississippi constitution of 1890); white Southerners\' false claim that lynching punished rape.',
            keywords: ["people's grocery", 'peoples grocery', 'thomas moss', 'reconstruction', '1877', 'jim crow', 'disfranchise', 'disenfranchise', 'mississippi plan', '1890', 'segregation', 'rape charge', 'accused of rape', 'peaked', 'at their peak'],
          },
        ],
        sampleAnswer: 'Wells wrote in 1892, when lynchings of Black Americans were at their peak. Earlier that year, a white mob in Memphis had lynched her friend Thomas Moss and two other men who ran the People\'s Grocery, whose real offense, Wells argued, was competing successfully with a white-owned store. After Reconstruction ended in 1877, Southern states passed Jim Crow laws and disfranchised Black voters, so Black Southerners had little protection from the law.',
      },
      {
        label: '(c)',
        prompt: "Explain how Wells's work as a journalist shaped her argument in the excerpt.",
        maxPoints: 1,
        rubric: [
          {
            points: 1,
            description: 'Explains the connection: as a journalist who investigated lynchings and collected statistics, Wells argued that the white press printed "doctored" reports and that publishing the true facts was the most powerful weapon; her own newspaper\'s destruction showed the price of telling the truth.',
            keywords: ['newspaper', 'investigat', 'reporter', 'editor', 'evidence', 'statistic', 'truth', 'data'],
          },
        ],
        sampleAnswer: 'As a journalist, Wells investigated lynchings herself and found that most victims had not even been accused of rape. That experience led her to argue that the white press spread "doctored" reports and that publishing the true facts was essential, since "the people must know before they can act."',
      },
      {
        label: '(d)',
        prompt: 'Explain ONE way African Americans continued the campaign against lynching in the period 1900–1940.',
        maxPoints: 1,
        rubric: [
          {
            points: 1,
            description: 'Explains a later effort: the NAACP (founded 1909, with Wells among its founders) investigated and publicized lynchings and lobbied for the Dyer Anti-Lynching Bill, which passed the House in 1922 but died in the Senate; the NAACP flew a flag reading "A Man Was Lynched Yesterday" from its New York office; Walter White\'s undercover investigations; protest art such as Billie Holiday\'s "Strange Fruit" (1939).',
            keywords: ['naacp', 'dyer', 'anti-lynching bill', 'antilynching', 'a man was lynched yesterday', 'walter white', 'strange fruit', 'billie holiday', 'the crisis', 'du bois', 'silent protest', '1917'],
          },
        ],
        sampleAnswer: 'The NAACP, which Wells helped found in 1909, made lynching a national issue. It published investigations and lobbied for the Dyer Anti-Lynching Bill, which passed the House in 1922 before Southern senators blocked it, and it flew a flag reading "A Man Was Lynched Yesterday" from its New York office after each lynching.',
      },
    ],
    totalPoints: 4,
    timeRecommendation: '~15 minutes',
    calculatorAllowed: false,
  },

  // ---------------- SAQ 2: visual source (3 points) ----------------
  {
    id: 'aas-saq-visual-1',
    type: 'saq-visual',
    unit: 1,
    title: 'SAQ 2 (Visual Source): Mansa Musa on the Catalan Atlas (c. 1375)',
    prompt: `**Question 2 — Visual source (3 points).** Examine the source and respond to all parts of the question. Use complete sentences.

**Image (described):** A detail of the Catalan Atlas, a world map made around 1375 on the Mediterranean island of Majorca and attributed to the Jewish mapmaker Abraham Cresques. In the part of the map that shows West Africa, a Black ruler sits on a throne wearing a gold crown. He holds a scepter in one hand and raises a round gold object, usually read as a gold nugget, in the other. A veiled rider on a camel approaches him. Nearby the map marks trading towns, including Timbuktu ("Tenbuch") and the city of Mali.

The caption beside the ruler reads, in translation (adapted): "This Black lord is called Musse Melly, lord of the Black people of Guinea. This king is the richest and most noble lord of all this land because of the abundance of gold that is gathered in his land."`,
    parts: [
      {
        label: '(a)',
        prompt: 'Describe ONE way the mapmaker portrays Mansa Musa or the empire of Mali.',
        maxPoints: 1,
        rubric: [
          {
            points: 1,
            description: 'Describes the portrayal: Mansa Musa appears as a powerful, wealthy king, crowned and enthroned like a European monarch; Mali is defined by its abundant gold; Mali is shown as connected to trade (the camel rider and the marked towns) and as a major power worth placing on a world map.',
            keywords: ['wealth', 'rich', 'gold', 'powerful', 'power', 'king', 'monarch', 'crown', 'throne', 'noble', 'trade', 'camel', 'important', 'majest'],
          },
        ],
        sampleAnswer: 'The map portrays Mansa Musa as an extremely rich and powerful king. He sits crowned on a throne holding a gold nugget, and the caption calls him "the richest and most noble lord" of the region because of Mali\'s gold.',
      },
      {
        label: '(b)',
        prompt: 'Explain ONE reason that a mapmaker in the Mediterranean in the 1370s knew about the wealth of Mali.',
        maxPoints: 1,
        rubric: [
          {
            points: 1,
            description: 'Explains a reason: Mansa Musa\'s pilgrimage to Mecca in 1324, when he spent and gave away so much gold in Cairo that its value fell there, spread his fame; trans-Saharan caravan trade carried West African gold to North Africa and Mediterranean ports, where much of Europe\'s gold came from; North African and Jewish merchants and travelers shared information with Majorcan mapmakers.',
            keywords: ['hajj', 'pilgrimage', 'mecca', '1324', 'cairo', 'trans-saharan', 'sahara', 'caravan', 'merchant', 'trade route', 'north africa', 'gold trade'],
          },
        ],
        sampleAnswer: 'Mansa Musa\'s pilgrimage to Mecca in 1324 made Mali famous. He passed through Cairo with so much gold that he spent and gave away enough to lower its value there, and merchants who traded across the Sahara and the Mediterranean carried stories of his wealth to places like Majorca.',
      },
      {
        label: '(c)',
        prompt: "Explain ONE way Mali's rulers used Islam OR trade to strengthen their state in the 1300s.",
        maxPoints: 1,
        rubric: [
          {
            points: 1,
            description: 'Explains a strategy: rulers taxed the gold and salt trade that passed through Mali; Islam linked Mali to North African merchants and gave rulers literate scholars and administrators; Mansa Musa built mosques such as the Djinguereber Mosque in Timbuktu and supported Islamic learning, making Timbuktu a center of scholarship; the pilgrimage itself displayed the ruler\'s piety and power.',
            keywords: ['tax', 'salt', 'mosque', 'djinguereber', 'timbuktu', 'scholar', 'learning', 'sankore', 'literacy', 'arabic'],
          },
        ],
        sampleAnswer: 'Mali\'s rulers taxed the gold and salt that passed through their lands, which paid for armies and officials. Mansa Musa also used Islam to strengthen his rule: he brought scholars back from his pilgrimage and built the Djinguereber Mosque in Timbuktu, which became a center of Islamic learning that tied Mali to the wider Muslim world.',
      },
    ],
    totalPoints: 3,
    timeRecommendation: '~12 minutes',
    calculatorAllowed: false,
  },
  {
    id: 'aas-saq-visual-2',
    type: 'saq-visual',
    unit: 3,
    title: 'SAQ 2 (Visual Source): Gordon Parks, "American Gothic, Washington, D.C." (1942)',
    prompt: `**Question 2 — Visual source (3 points).** Examine the source and respond to all parts of the question. Use complete sentences.

**Image (described):** A black-and-white photograph taken in the summer of 1942 by Gordon Parks, an African American photographer working for the federal Farm Security Administration. The government recorded it as "Washington, D.C. Government charwoman," and it later became known as "American Gothic." Ella Watson, a Black woman who cleaned offices in a federal building, stands in front of a large American flag that fills the background. She is posed with a broom and a mop and looks directly at the camera with a serious expression. The pose echoes Grant Wood's famous 1930 painting American Gothic, in which a white Iowa farmer holding a pitchfork stands beside a woman in front of their farmhouse.`,
    parts: [
      {
        label: '(a)',
        prompt: 'Describe ONE perspective on American society that Parks expresses in the photograph.',
        maxPoints: 1,
        rubric: [
          {
            points: 1,
            description: 'Describes a perspective: the contrast between the American flag\'s ideals of freedom and equality and the reality that Black women were confined to low-wage service work; criticism of racial discrimination in the nation\'s capital and in federal employment; dignity and quiet strength of Black working women.',
            keywords: ['irony', 'ironic', 'contrast', 'hypocris', 'equality', 'freedom', 'ideals', 'discriminat', 'racism', 'segregat', 'low-wage', 'menial', 'dignity', 'inequality'],
          },
        ],
        sampleAnswer: 'Parks expresses the contradiction between American ideals and Black Americans\' reality. Watson stands before the American flag, the symbol of freedom and equality, but holds a broom and mop because cleaning work was one of the few federal jobs open to a Black woman in segregated Washington.',
      },
      {
        label: '(b)',
        prompt: 'Explain ONE historical development in the period 1930–1945 that contributed to the conditions the photograph depicts.',
        maxPoints: 1,
        rubric: [
          {
            points: 1,
            description: 'Explains a development: segregation and job discrimination in Washington, D.C., and in federal agencies; New Deal programs that excluded agricultural and domestic workers (the Social Security Act of 1935), who were disproportionately Black; Black women\'s concentration in domestic and service work during the Depression; wartime demands for equality such as the Double V campaign (1942) and A. Philip Randolph\'s March on Washington Movement, which won Executive Order 8802 (1941) banning discrimination in defense industries.',
            keywords: ['segregat', 'discriminat', 'new deal', 'social security', 'domestic work', 'domestic worker', 'depression', 'double v', 'randolph', 'march on washington movement', '8802', 'world war ii', 'jim crow'],
          },
        ],
        sampleAnswer: 'New Deal programs often left Black workers out. The Social Security Act of 1935 excluded domestic and agricultural workers, the jobs most Black women held, so many Black women workers had little protection. Washington, D.C., was also segregated, and federal agencies kept Black employees in the lowest-paid jobs.',
      },
      {
        label: '(c)',
        prompt: 'Explain ONE way another Black artist in the twentieth century used visual art to comment on the experiences of African Americans.',
        maxPoints: 1,
        rubric: [
          {
            points: 1,
            description: 'Explains another artist\'s work and its message: Jacob Lawrence\'s Migration Series (1940–1941) on the Great Migration; Aaron Douglas\'s Harlem Renaissance murals; Elizabeth Catlett\'s prints and sculptures of Black women workers; Romare Bearden\'s collages; Faith Ringgold\'s American People series (1960s); Black Arts Movement artists. Must name the artist AND explain the message.',
            keywords: ['jacob lawrence', 'migration series', 'aaron douglas', 'elizabeth catlett', 'romare bearden', 'faith ringgold', 'black arts movement', 'augusta savage', 'charles white', 'kerry james marshall', 'betye saar', 'jean-michel basquiat', 'basquiat'],
          },
        ],
        sampleAnswer: 'Jacob Lawrence\'s Migration Series (1940–1941) told the story of the Great Migration in sixty panels with short captions. By showing crowded train stations, lynching, and segregated Northern housing, he presented the Migration as a collective struggle by ordinary Black families for opportunity and safety.',
      },
    ],
    totalPoints: 3,
    timeRecommendation: '~12 minutes',
    calculatorAllowed: false,
  },

  // ---------------- SAQ 3: no source (3 points) ----------------
  {
    id: 'aas-saq-nosource-1',
    type: 'saq-nosource',
    unit: 2,
    title: 'SAQ 3 (No Source): The Haitian Revolution and the African Diaspora',
    prompt: `**Question 3 — No source (3 points).** Respond to all parts of the question. Use complete sentences.

The Haitian Revolution (1791–1804) began as an uprising of enslaved people in the French colony of Saint-Domingue and ended with the founding of Haiti, the first independent Black republic in the Americas.`,
    parts: [
      {
        label: '(a)',
        prompt: 'Identify ONE cause of the Haitian Revolution.',
        maxPoints: 1,
        rubric: [
          {
            points: 1,
            description: 'Identifies a cause: the brutality and high death rate of sugar plantation slavery in Saint-Domingue; the French Revolution and the Declaration of the Rights of Man and of the Citizen (1789); conflict between white planters and free people of color over rights; the organizing of enslaved people, including the Bois Caïman ceremony (August 1791), and leaders such as Toussaint Louverture.',
            keywords: ['sugar', 'plantation', 'brutal', 'death rate', 'french revolution', 'rights of man', '1789', 'free people of color', 'gens de couleur', 'bois caïman', 'bois caiman', 'boukman', 'toussaint', 'louverture'],
          },
        ],
        sampleAnswer: 'The French Revolution helped cause the Haitian Revolution. The Declaration of the Rights of Man (1789) proclaimed that men are born free and equal in rights, and enslaved people in Saint-Domingue, who suffered under one of the most brutal sugar plantation systems in the Americas, rose up in 1791 to claim that freedom for themselves.',
      },
      {
        label: '(b)',
        prompt: 'Describe ONE way the Haitian Revolution influenced enslaved OR free Black people in the United States in the period 1791–1830.',
        maxPoints: 1,
        rubric: [
          {
            points: 1,
            description: 'Describes an influence: Haiti inspired rebels and plots such as Gabriel\'s conspiracy (1800), the German Coast Uprising (1811), and Denmark Vesey\'s planned revolt (1822), which reportedly hoped for aid from Haiti; Black writers such as David Walker (Appeal, 1829) held up Haiti as proof that Black people could win freedom; thousands of free Black Americans emigrated to Haiti in the 1820s at President Boyer\'s invitation.',
            keywords: ['gabriel', 'prosser', 'german coast', 'vesey', 'david walker', 'appeal', 'emigrat', 'boyer'],
          },
        ],
        sampleAnswer: 'Haiti inspired enslaved people in the United States. In 1822, Denmark Vesey, a free Black carpenter in Charleston, planned a large revolt, and witnesses said he hoped the rebels could escape to Haiti, which stood as proof that enslaved people could overthrow their enslavers.',
      },
      {
        label: '(c)',
        prompt: 'Explain ONE way white Americans or the U.S. government responded to the Haitian Revolution in the period 1791–1862.',
        maxPoints: 1,
        rubric: [
          {
            points: 1,
            description: 'Explains a response: Southern states tightened slave codes, restricted gatherings and literacy, and limited manumission out of fear of revolt; South Carolina\'s Negro Seamen Act (1822) jailed free Black sailors in port; the United States refused to recognize Haiti until 1862; France\'s loss of Saint-Domingue led Napoleon to sell Louisiana (1803), expanding U.S. territory and slavery.',
            keywords: ['slave code', 'seamen act', 'recogni', 'jefferson', 'louisiana purchase', '1803', 'napoleon', 'literacy', 'manumission', 'crackdown'],
          },
        ],
        sampleAnswer: 'Fear of "another Haiti" led white Southerners to tighten control over enslaved people. After Denmark Vesey\'s plot, South Carolina passed the Negro Seamen Act (1822), which jailed free Black sailors while their ships were in port so they could not spread news of revolution. The U.S. government also refused to recognize Haiti until 1862.',
      },
    ],
    totalPoints: 3,
    timeRecommendation: '~13 minutes',
    calculatorAllowed: false,
  },
  {
    id: 'aas-saq-nosource-2',
    type: 'saq-nosource',
    unit: 4,
    title: 'SAQ 3 (No Source): Black Women in the Freedom Struggle and Black Feminism',
    prompt: `**Question 3 — No source (3 points).** Respond to all parts of the question. Use complete sentences.

Black women organized and led many campaigns of the mid-twentieth-century freedom struggle, often without public recognition. In the 1970s, Black feminist activists and writers developed new ideas about how racism, sexism, and economic inequality affect Black women's lives.`,
    parts: [
      {
        label: '(a)',
        prompt: 'Identify ONE Black woman who played a leadership role in the freedom struggle between 1950 and 1970 and describe her contribution.',
        maxPoints: 1,
        rubric: [
          {
            points: 1,
            description: 'Identifies a leader and her contribution: Ella Baker (helped found SNCC in 1960 and promoted group-centered leadership); Fannie Lou Hamer (Mississippi Freedom Democratic Party, 1964); Jo Ann Robinson and the Women\'s Political Council (launched the Montgomery bus boycott, 1955); Rosa Parks; Septima Clark (citizenship schools); Diane Nash (sit-ins and Freedom Rides); Daisy Bates (Little Rock Nine). Must name the person AND describe the contribution.',
            keywords: ['ella baker', 'fannie lou hamer', 'jo ann robinson', "women's political council", 'rosa parks', 'septima clark', 'diane nash', 'daisy bates', 'dorothy height', 'gloria richardson', 'angela davis', 'kathleen cleaver'],
          },
        ],
        sampleAnswer: 'Ella Baker helped found the Student Nonviolent Coordinating Committee (SNCC) in 1960. She encouraged the student sit-in leaders to stay independent of older organizations and to practice group-centered leadership, developing local people as leaders rather than relying on a single charismatic figure.',
      },
      {
        label: '(b)',
        prompt: 'Describe ONE challenge Black women faced within the civil rights OR Black Power movements.',
        maxPoints: 1,
        rubric: [
          {
            points: 1,
            description: 'Describes a challenge: sexism that kept women out of official leadership and public speaking roles (for example, no woman gave a major speech at the 1963 March on Washington; only Daisy Bates spoke, and only briefly); male-dominated church leadership in organizations such as the SCLC; gender hierarchies in some Black Power groups; a mainstream feminist movement that largely ignored race and class.',
            keywords: ['sexism', 'sexist', 'gender', 'march on washington', 'excluded', 'sclc', 'ministers', 'white feminis', 'patriarch'],
          },
        ],
        sampleAnswer: 'Black women faced sexism within the movement. Although women did much of the organizing, men, often ministers, held the official leadership posts, and at the 1963 March on Washington no woman was invited to give a major speech; only Daisy Bates spoke, and only briefly.',
      },
      {
        label: '(c)',
        prompt: 'Explain ONE way Black feminist activists or writers responded to these challenges after 1970.',
        maxPoints: 1,
        rubric: [
          {
            points: 1,
            description: 'Explains a response: the National Black Feminist Organization (1973); the Combahee River Collective Statement (1977), which argued that racial, sexual, and class oppression are "interlocking"; Shirley Chisholm\'s 1972 presidential campaign; Alice Walker\'s concept of "womanism"; bell hooks\'s Ain\'t I a Woman (1981); Angela Davis\'s Women, Race and Class (1981); Kimberlé Crenshaw\'s theory of intersectionality (1989).',
            keywords: ['national black feminist organization', 'combahee', 'interlocking', 'chisholm', 'womanism', 'womanist', 'alice walker', 'bell hooks', 'angela davis', 'crenshaw', 'intersectional', 'audre lorde'],
          },
        ],
        sampleAnswer: 'The Combahee River Collective, a group of Black feminists in Boston, issued a statement in 1977 arguing that racism, sexism, heterosexism, and class oppression are "interlocking." Because neither the male-led Black movement nor the white-led women\'s movement addressed all of these at once, they argued that Black women had to organize around their own experiences, an idea Kimberlé Crenshaw later called intersectionality.',
      },
    ],
    totalPoints: 3,
    timeRecommendation: '~13 minutes',
    calculatorAllowed: false,
  },
]

/* ------------------------------------------------------------------ */
/*  Document-based questions — 5 sources, 7-point AP AAS rubric        */
/* ------------------------------------------------------------------ */

const DBQ_DIRECTIONS =
  '**Directions:** The question is based on the accompanying sources. The sources have been edited for the purpose of this exercise. Suggested time: 45 minutes.\n\n' +
  'In your response you should do the following:\n\n' +
  '- Respond to the prompt with a defensible thesis or claim that establishes a line of reasoning.\n' +
  '- Describe a broader historical context relevant to the topic of the prompt.\n' +
  '- Support an argument in response to the prompt using at least three sources.\n' +
  '- Use at least one additional piece of specific evidence (beyond that found in the sources) relevant to an argument about the prompt.\n' +
  '- For at least two sources, explain how or why the source\'s perspective, purpose, context, and/or audience is relevant to an argument.\n' +
  '- Use reasoning (for example, causation, comparison, or change and continuity across time or geography) to set up an argument that addresses the prompt.'

const SOURCE_KEYWORDS = ['source 1', 'source 2', 'source 3', 'source 4', 'source 5', 'document 1', 'document 2', 'document 3', 'document 4', 'document 5', 'doc 1', 'doc 2', 'doc 3', 'doc 4', 'doc 5']

/** The College Board AP African American Studies DBQ rubric (7 points), with prompt-specific examples. */
function dbqRubric(spec: {
  thesisKeywords: string[]
  context: string
  contextKeywords: string[]
  outside: string
  outsideKeywords: string[]
  reasoning: string
}): FRQRubricItem[] {
  return [
    { points: 1, description: 'A. Thesis/Claim — Responds to the prompt with a defensible thesis/claim that establishes a line of reasoning (in one place, in the introduction or conclusion; more than a restatement of the prompt).', keywords: spec.thesisKeywords },
    { points: 1, description: `B. Context — Describes a broader historical context relevant to the topic of the prompt, in more than a phrase or passing reference. Examples: ${spec.context}`, keywords: spec.contextKeywords },
    { points: 1, description: 'C. Evidence from sources (1 of 2) — Uses the content of at least TWO sources to address the topic of the prompt (accurately describes, rather than simply quotes, each source).', keywords: SOURCE_KEYWORDS },
    { points: 1, description: 'C. Evidence from sources (2 of 2) — Supports an argument in response to the prompt using at least THREE sources.', keywords: SOURCE_KEYWORDS },
    { points: 1, description: `C. Evidence beyond sources — Uses at least one additional piece of specific evidence, not found in the sources, relevant to an argument in response to the prompt. Examples: ${spec.outside}`, keywords: spec.outsideKeywords },
    { points: 1, description: 'D. Source use — For at least TWO sources, explains how or why the source\'s perspective, purpose, context, and/or audience is relevant to an argument (identifying the author alone does not earn the point).', keywords: ['perspective', 'point of view', 'purpose', 'audience', 'context', 'intended', 'written to', 'because he was', 'because she was', 'as a'] },
    { points: 1, description: `E. Reasoning — Uses reasoning (for example, causation, comparison, or change and continuity across time or geography) to set up an argument that addresses the prompt. Examples: ${spec.reasoning}`, keywords: ['because', 'led to', 'as a result', 'in contrast', 'compared', 'similarly', 'continuity', 'changed', 'whereas'] },
  ]
}

const dbqFRQs: AASFRQ[] = [
  {
    id: 'aas-dbq-1',
    type: 'dbq' as const,
    unit: 2,
    title: 'DBQ: Strategies of Resistance to Slavery, 1829–1861',
    prompt: DBQ_DIRECTIONS + `

**Question:** Explain the extent to which African American resistance to slavery in the period from 1829 to 1861 relied on direct action rather than moral persuasion.

---

**Source 1**

*Source: David Walker, free Black clothing dealer in Boston, Appeal to the Coloured Citizens of the World, 1829. Several Southern states passed laws against circulating the pamphlet.*

> "...we, (coloured people of these United States of America) are the most wretched, degraded and abject set of beings that ever lived since the world began . . . America is more our country, than it is the whites—we have enriched it with our blood and tears."

---

**Source 2**

*Source: Henry Highland Garnet, Black Presbyterian minister who had escaped slavery as a child, "An Address to the Slaves of the United States of America," delivered at the National Convention of Colored Citizens in Buffalo, New York, August 1843. The convention narrowly voted not to endorse the address.*

> "Brethren, arise, arise! Strike for your lives and liberties. Now is the day and the hour. . . . Let your motto be resistance! resistance! RESISTANCE! No oppressed people have ever secured their liberty without resistance."

---

**Source 3**

*Source: Frederick Douglass,* Narrative of the Life of Frederick Douglass, an American Slave, Written by Himself, *published by the Boston Anti-Slavery Office, 1845. Douglass describes his fight with Edward Covey, a "slave breaker," when Douglass was sixteen.*

> "You have seen how a man was made a slave; you shall see how a slave was made a man. . . . It was a glorious resurrection, from the tomb of slavery, to the heaven of freedom."

---

**Source 4**

*Source: Broadside (public poster) posted in Boston on April 24, 1851, after the Fugitive Slave Act of 1850; its text is attributed to the abolitionist minister Theodore Parker. The poster uses large capital letters of different sizes.*

> "CAUTION!! COLORED PEOPLE OF BOSTON, ONE & ALL, You are hereby respectfully CAUTIONED and advised, to avoid conversing with the Watchmen and Police Officers of Boston, For since the recent ORDER OF THE MAYOR & ALDERMEN, they are empowered to act as KIDNAPPERS AND Slave Catchers . . . Keep a Sharp Look Out for KIDNAPPERS, and have TOP EYE open."

---

**Source 5**

*Source: Harriet Jacobs, writing under the name Linda Brent,* Incidents in the Life of a Slave Girl, *1861. Jacobs hid for nearly seven years in a crawl space in her grandmother's house before escaping to the North.*

> "Slavery is terrible for men; but it is far more terrible for women. . . . Reader, my story ends with freedom; not in the usual way, with marriage."`,
    parts: [
      {
        label: 'Essay',
        prompt: 'Write your DBQ essay in response to the question above. When you grade it, check your essay against each row of the 7-point rubric.',
        maxPoints: 7,
        rubric: dbqRubric({
          thesisKeywords: ['although', 'while', 'direct action', 'moral persuasion', 'both', 'extent', 'resistance', 'but'],
          context: 'the growth of the cotton economy and the domestic slave trade after the invention of the cotton gin (1793); the rise of immediate abolitionism (William Lloyd Garrison\'s The Liberator, 1831); Nat Turner\'s rebellion (1831) and the harsher slave codes that followed; the Fugitive Slave Act of 1850 and the Dred Scott decision (1857).',
          contextKeywords: ['cotton', 'cotton gin', 'domestic slave trade', 'Garrison', 'Liberator', 'Nat Turner', '1831', 'slave codes', 'Fugitive Slave Act', '1850', 'Dred Scott', '1857'],
          outside: 'Nat Turner\'s rebellion (1831); Harriet Tubman\'s rescues on the Underground Railroad; the Christiana resistance (1851); the rescue of Shadrach Minkins in Boston (1851); Anthony Burns (1854); the Amistad revolt (1839); everyday resistance such as work slowdowns, sabotage, and maroon communities; Sojourner Truth\'s speeches; Douglass\'s newspaper The North Star (1847).',
          outsideKeywords: ['Nat Turner', 'Tubman', 'Underground Railroad', 'Christiana', 'Shadrach', 'Minkins', 'Anthony Burns', 'Amistad', 'maroon', 'Sojourner Truth', 'North Star', 'slowdown', 'sabotage'],
          reasoning: 'arguing that the Fugitive Slave Act of 1850 caused a shift toward community self-defense (causation); comparing the audiences of Walker and Jacobs (comparison); showing that persuasion and direct action continued side by side across the period (continuity and change).',
        }),
        sampleAnswer: `**Thesis:** Between 1829 and 1861, African American resistance relied on both direct action and moral persuasion, and the two were closely linked. Writers such as Douglass and Jacobs used accounts of their own defiance to persuade Northern readers, while the Fugitive Slave Act of 1850 pushed Black communities toward organized self-defense.

**Context:** After the cotton gin, cotton production in the Deep South soared, and the domestic slave trade forcibly moved about a million enslaved people from the Upper South to the Deep South. In 1831, William Lloyd Garrison began publishing *The Liberator*, calling for immediate abolition, and Nat Turner led a rebellion in Virginia that killed about 60 white people. Southern states responded with harsher slave codes and bans on teaching enslaved people to read, so both armed revolt and antislavery writing became more dangerous.

**Direct action:** Calls for direct resistance were present from the start of the period. Walker (Source 1) insisted that America belonged to Black people who had "enriched it with our blood and tears" and urged them to resist their oppressors. His audience was Black readers across the nation, which is why Southern states passed laws to stop the pamphlet from circulating. Garnet (Source 2) told the enslaved, "Let your motto be resistance!" The convention's narrow refusal to endorse his address shows that many Black abolitionists, Douglass among them at the time, still favored moral persuasion. After 1850, direct action became a community strategy: the Boston broadside (Source 4) warned that police were acting as "KIDNAPPERS." Beyond the sources, Boston activists rescued Shadrach Minkins from a federal courtroom in February 1851, two months before the broadside appeared.

**Moral persuasion:** Slave narratives turned individual resistance into arguments aimed at the North. Douglass (Source 3) presents his fight with Covey as the moment "a slave was made a man." Because the book was published by the Boston Anti-Slavery Office, it was meant both to prove that he had really been enslaved and to win white readers to abolition. Jacobs (Source 5) addressed Northern white women directly ("Reader"), and her statement that slavery is "far more terrible for women" was designed to appeal to her readers' ideas about womanhood and family.

**Reasoning (change over time):** Before 1850, most organized Black abolitionism relied on persuasion, and calls for revolt like Garnet's were controversial. The Fugitive Slave Act changed that balance by bringing slavery's enforcement into Northern cities, which led free Black communities to organize vigilance committees and rescues. Even then, persuasion did not disappear: Jacobs published her narrative in 1861. Resistance therefore shifted toward direct action over time, but throughout the period the two strategies reinforced each other.`,
      },
    ],
    totalPoints: 7,
    timeRecommendation: '45 minutes',
    calculatorAllowed: false,
  },
  {
    id: 'aas-dbq-2',
    type: 'dbq' as const,
    unit: 3,
    title: 'DBQ: Debating the Path to Advancement, 1890–1925',
    prompt: DBQ_DIRECTIONS + `

**Question:** Explain the extent to which African American leaders agreed about strategies for racial advancement in the period from 1890 to 1925.

---

**Source 1**

*Source: Ida B. Wells, journalist and co-owner of the Memphis* Free Speech, Southern Horrors: Lynch Law in All Its Phases, *1892. Wells wrote the pamphlet in New York after a mob destroyed her newspaper's office in Memphis.*

> "[A] Winchester rifle should have a place of honor in every black home, and it should be used for that protection which the law refuses to give. . . . The more the Afro-American yields and cringes and begs, the more he has to do so, the more he is insulted, outraged and lynched."

---

**Source 2**

*Source: Booker T. Washington, principal of the Tuskegee Institute, address at the Cotton States and International Exposition in Atlanta, September 18, 1895, to a mostly white audience.*

> "To those of my race who depend on bettering their condition in a foreign land . . . I would say: 'Cast down your bucket where you are' . . . In all things that are purely social we can be as separate as the fingers, yet one as the hand in all things essential to mutual progress."

---

**Source 3**

*Source: W. E. B. Du Bois, sociologist at Atlanta University, "Of Mr. Booker T. Washington and Others," in* The Souls of Black Folk, *1903.*

> "Mr. Washington represents in Negro thought the old attitude of adjustment and submission . . . [and his] programme practically accepts the alleged inferiority of the Negro races."

---

**Source 4**

*Source: Declaration of Principles of the Niagara Movement, adopted by Du Bois and other Black leaders meeting at Fort Erie, Ontario, near Niagara Falls, July 1905.*

> "We believe that this class of American citizens should protest emphatically and continually against the curtailment of their political rights. . . . Persistent manly agitation is the way to liberty . . ."

---

**Source 5**

*Source: Universal Negro Improvement Association (UNIA), led by Marcus Garvey, Declaration of Rights of the Negro Peoples of the World, adopted at the UNIA convention in New York City, August 13, 1920.*

> "We believe in the freedom of Africa for the Negro people of the world, and by the principle of Europe for the Europeans and Asia for the Asiatics; we also demand Africa for the Africans at home and abroad."`,
    parts: [
      {
        label: 'Essay',
        prompt: 'Write your DBQ essay in response to the question above. When you grade it, check your essay against each row of the 7-point rubric.',
        maxPoints: 7,
        rubric: dbqRubric({
          thesisKeywords: ['although', 'while', 'disagreed', 'agreed', 'accommodation', 'agitation', 'extent', 'but'],
          context: 'the end of Reconstruction (1877) and the "nadir" of race relations; disfranchisement through poll taxes, literacy tests, and grandfather clauses; Jim Crow segregation upheld in Plessy v. Ferguson (1896); the peak of lynching in the 1890s; the beginning of the Great Migration during World War I.',
          contextKeywords: ['Reconstruction', 'nadir', 'disfranchise', 'poll tax', 'literacy test', 'grandfather clause', 'Jim Crow', 'Plessy', '1896', 'lynching', 'Great Migration'],
          outside: 'the founding of the NAACP (1909) and its magazine The Crisis; the National Association of Colored Women (1896) and Mary Church Terrell; Guinn v. United States (1915); the Red Summer of 1919; Garvey\'s Black Star Line (1919); the Tuskegee Institute and the National Negro Business League (1900); Du Bois\'s "The Talented Tenth" (1903); Washington\'s private funding of lawsuits against segregation.',
          outsideKeywords: ['NAACP', '1909', 'Crisis', 'National Association of Colored Women', 'Terrell', 'Guinn', 'Red Summer', '1919', 'Black Star Line', 'Negro Business League', 'Talented Tenth', 'Tuskegee'],
          reasoning: 'comparing accommodation, protest, and Pan-Africanism; explaining how the violence of the 1890s caused different responses; showing change from Washington\'s dominance before 1905 to the rise of the NAACP and the UNIA after 1909.',
        }),
        sampleAnswer: `**Thesis:** African American leaders between 1890 and 1925 agreed on the goal of racial advancement and self-respect but disagreed sharply about strategy. Washington favored economic accommodation, Wells and Du Bois favored protest for full civil and political rights, and Garvey's movement looked beyond the United States to a Pan-African nation.

**Context:** After Reconstruction ended in 1877, Southern states used poll taxes, literacy tests, and grandfather clauses to strip Black men of the vote, and the Supreme Court approved "separate but equal" segregation in *Plessy v. Ferguson* (1896). Lynching peaked in the early 1890s. Historians call this period the "nadir" of African American life after slavery, and every leader in the sources was responding to it.

**Accommodation:** Washington (Source 2) told Black Southerners to "cast down your bucket where you are," and he accepted social separation, "as separate as the fingers." His audience explains his tone: speaking to white Southern business leaders at an exposition meant to attract investment, he offered racial peace in exchange for economic opportunity and support for schools like Tuskegee.

**Protest:** Others rejected that bargain. Wells (Source 1) argued that yielding only invited more violence and urged armed self-defense. Her context matters: a mob destroyed her newspaper after her editorials denouncing lynching, a campaign that began with the murder of three Black grocers in Memphis, so she knew firsthand that the law would not protect Black citizens who spoke out. Du Bois (Source 3) accused Washington of "adjustment and submission," and the Niagara Movement (Source 4) called for "persistent manly agitation" for political rights. Beyond the sources, the Niagara activists helped found the NAACP in 1909, which won *Guinn v. United States* (1915), striking down Oklahoma's grandfather clause.

**Pan-Africanism:** Garvey's UNIA (Source 5) went further, demanding "Africa for the Africans at home and abroad." It drew on the disillusionment of Black veterans and migrants after the Red Summer of 1919 and built a mass following that the NAACP's mostly middle-class membership could not match.

**Reasoning (comparison):** These leaders shared more than their debates suggest, because all valued self-help, education, and racial pride, and Washington quietly funded legal challenges to disfranchisement even while publicly accepting segregation. Their main disagreements were over whether to demand political rights immediately and whether Black Americans' future lay within the United States. The movement was therefore united in purpose but divided in strategy.`,
      },
    ],
    totalPoints: 7,
    timeRecommendation: '45 minutes',
    calculatorAllowed: false,
  },
  {
    id: 'aas-dbq-3',
    type: 'dbq' as const,
    unit: 4,
    title: 'DBQ: Federal Action and the Black Freedom Movement, 1964–1968',
    prompt: DBQ_DIRECTIONS + `

**Question:** Explain the extent to which federal action in the 1960s addressed the goals of the Black freedom movement.

---

**Source 1**

*Source: Civil Rights Act of 1964, Title II, signed into law by President Lyndon B. Johnson, July 2, 1964.*

> "All persons shall be entitled to the full and equal enjoyment of the goods, services, facilities, and privileges, advantages, and accommodations of any place of public accommodation, as defined in this section, without discrimination or segregation on the ground of race, color, religion, or national origin."

---

**Source 2**

*Source: Voting Rights Act of 1965, Section 2, signed into law by President Johnson, August 6, 1965, five months after state troopers attacked marchers on the Edmund Pettus Bridge in Selma, Alabama.*

> "No voting qualification or prerequisite to voting, or standard, practice, or procedure shall be imposed or applied by any State or political subdivision to deny or abridge the right of any citizen of the United States to vote on account of race or color."

---

**Source 3**

*Source: President Lyndon B. Johnson, commencement address at Howard University, a historically Black university in Washington, D.C., June 4, 1965.*

> "You do not take a person who, for years, has been hobbled by chains and liberate him, bring him up to the starting line of a race and then say, 'you are free to compete with all the others,' and still justly believe that you have been completely fair. . . . We seek not just freedom but opportunity. We seek not just legal equity but human ability, not just equality as a right and a theory but equality as a fact and equality as a result."

---

**Source 4**

*Source: Black Panther Party for Self-Defense, founded by Huey P. Newton and Bobby Seale in Oakland, California, "What We Want, What We Believe" (the Ten-Point Program), October 1966 (summary adapted from the program).*

> The program's first point demanded freedom and the power for the Black community to determine its own destiny. Other points demanded full employment, decent housing, education that taught Black people's true history, exemption of Black men from military service, and an immediate end to police brutality against Black people.

---

**Source 5**

*Source: Report of the National Advisory Commission on Civil Disorders (the Kerner Commission), appointed by President Johnson after urban uprisings in 1967, released February 29, 1968.*

> "This is our basic conclusion: Our Nation is moving toward two societies, one black, one white—separate and unequal. . . . What white Americans have never fully understood—but what the Negro can never forget—is that white society is deeply implicated in the ghetto. White institutions created it, white institutions maintain it, and white society condones it."`,
    parts: [
      {
        label: 'Essay',
        prompt: 'Write your DBQ essay in response to the question above. When you grade it, check your essay against each row of the 7-point rubric.',
        maxPoints: 7,
        rubric: dbqRubric({
          thesisKeywords: ['although', 'while', 'legal', 'economic', 'de jure', 'de facto', 'extent', 'but'],
          context: 'Jim Crow segregation and disfranchisement in the South; the Great Migration and housing discrimination in Northern and Western cities (redlining, restrictive covenants); Brown v. Board of Education (1954) and massive resistance; grassroots campaigns such as the Montgomery bus boycott, the sit-ins, the Freedom Rides, and the Birmingham campaign; Cold War pressure on U.S. racial policy.',
          contextKeywords: ['Jim Crow', 'disfranchise', 'Great Migration', 'redlining', 'covenant', 'Brown', '1954', 'Montgomery', 'sit-in', 'Freedom Rides', 'Birmingham', 'Cold War'],
          outside: 'the March on Washington (1963); Freedom Summer (1964) and the Mississippi Freedom Democratic Party; Stokely Carmichael\'s call for "Black Power" (1966); the Watts uprising (1965); the Fair Housing Act (1968); affirmative action under Executive Order 11246 (1965); the assassination of Martin Luther King Jr. (1968); the Poor People\'s Campaign (1968); the sharp rise in Black voter registration in Mississippi after 1965.',
          outsideKeywords: ['March on Washington', '1963', 'Freedom Summer', 'Freedom Democratic', 'Hamer', 'Carmichael', 'Black Power', 'Watts', 'Fair Housing', '11246', 'affirmative action', 'Poor People', 'Mississippi', 'registration'],
          reasoning: 'comparing legal goals that federal action met with economic goals it did not; explaining how grassroots pressure caused federal action; showing change in the movement\'s goals from desegregation (early 1960s) to economic power and self-determination (after 1965).',
        }),
        sampleAnswer: `**Thesis:** Federal action in the 1960s largely met the movement's legal goals of ending segregation and disfranchisement, but it fell short of its economic and political goals of jobs, housing, safety from police violence, and community power. As the movement's goals broadened after 1965, the gap between them and federal policy widened.

**Context:** For decades, Jim Crow laws had segregated Southern public life, and poll taxes, literacy tests, and violence kept most Black Southerners from voting. In Northern and Western cities, Black migrants faced redlining, restrictive covenants, and job discrimination. After *Brown v. Board of Education* (1954), grassroots campaigns such as the Montgomery bus boycott, the sit-ins, and the Birmingham campaign of 1963 pressured the federal government to act.

**Legal goals met:** The Civil Rights Act (Source 1) outlawed segregation in public accommodations, achieving a central aim of the sit-ins and Freedom Rides. The Voting Rights Act (Source 2) banned any practice that denied the vote "on account of race or color." Its context shows that federal action followed grassroots pressure: Johnson signed it five months after state troopers attacked marchers in Selma. Beyond the sources, Black voter registration in Mississippi rose from under 7 percent in 1964 to about 60 percent by 1968.

**Economic goals unmet:** Johnson himself (Source 3) admitted that legal equality was not enough and promised "equality as a fact and equality as a result." Because he was speaking to graduates of a historically Black university, he was promising the movement's next stage directly to its future leaders. Federal programs did not deliver on that promise. The Black Panther Party's Ten-Point Program (Source 4) demanded jobs, housing, and an end to police brutality, issues that the 1964 and 1965 laws did not address. The Kerner Commission (Source 5), appointed by Johnson himself, concluded in 1968 that the nation was "moving toward two societies." Because it was a federal commission rather than an activist group, its conclusion that "white institutions created" the ghetto carried unusual weight as an admission of federal failure.

**Reasoning (change over time):** Federal action caught up with the movement's early goals but not its later ones. Early campaigns sought to end legal segregation in the South, and Congress responded in 1964 and 1965. After the Watts uprising of 1965 and the call for "Black Power" in 1966, activists focused on economic inequality and community control in cities across the country. The Fair Housing Act of 1968 passed only after King's assassination, and it did little to change housing patterns, so federal action addressed the movement's legal goals far more fully than its economic ones.`,
      },
    ],
    totalPoints: 7,
    timeRecommendation: '45 minutes',
    calculatorAllowed: false,
  },
]


export const apAASFRQs: AASFRQ[] = [...saqFRQs, ...dbqFRQs]

export function getApAASFRQs(): AASFRQ[] {
  return apAASFRQs
}

export function getAASFRQsByType(type: AASFRQType): AASFRQ[] {
  return apAASFRQs.filter((q) => q.type === type)
}

export function getDBQs(): AASFRQ[] {
  return dbqFRQs
}

/**
 * One Section II in exam order: SAQ 1 (text source), SAQ 2 (visual source), SAQ 3 (no
 * source), then the DBQ. 4 + 3 + 3 + 7 = 17 points in 85 minutes (40 for the SAQs, 45
 * for the DBQ).
 */
export function generateFullExamFRQs(pool: AASFRQ[] = apAASFRQs): {
  questions: AASFRQ[]
  totalPoints: number
  totalMinutes: number
} {
  const questions = AAS_FRQ_TYPES.map(({ type }) => shuffleArray(pool.filter((q) => q.type === type))[0]).filter(
    (q): q is AASFRQ => Boolean(q),
  )
  return {
    questions,
    totalPoints: questions.reduce((sum, q) => sum + q.totalPoints, 0),
    totalMinutes: AAS_FRQ_TYPES.reduce((sum, t) => sum + t.minutes, 0),
  }
}
