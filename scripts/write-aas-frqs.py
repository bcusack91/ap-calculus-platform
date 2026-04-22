#!/usr/bin/env python3
"""
Rewrite src/data/ap-african-american-studies-frq/questions.ts with substantive,
historically-grounded AP-style prompts.

Preserves the existing TypeScript interfaces and named exports
(apAASFRQs, getApAASFRQs, getLongFRQs, getShortFRQs, generateFullExamFRQs).
"""
from __future__ import annotations
import os, json

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT  = os.path.join(ROOT, "src", "data", "ap-african-american-studies-frq", "questions.ts")


def js(s): return json.dumps(s, ensure_ascii=False)


def part(label, prompt, max_pts, rubric_items, sample):
    rubric_lines = ",\n          ".join(
        f"{{ points: {pts}, description: {js(desc)}, keywords: {json.dumps(kw, ensure_ascii=False)} }}"
        for pts, desc, kw in rubric_items
    )
    return (
        f"      {{\n"
        f"        label: {js(label)},\n"
        f"        prompt: {js(prompt)},\n"
        f"        maxPoints: {max_pts},\n"
        f"        rubric: [\n          {rubric_lines}\n        ],\n"
        f"        sampleAnswer: {js(sample)},\n"
        f"      }}"
    )


def frq(id_, type_, unit, title, prompt, parts, total, time, calc=False):
    parts_str = ",\n".join(parts)
    return (
        f"  {{\n"
        f"    id: {js(id_)},\n"
        f"    type: '{type_}' as const,\n"
        f"    unit: {unit},\n"
        f"    title: {js(title)},\n"
        f"    prompt: {js(prompt)},\n"
        f"    parts: [\n{parts_str}\n    ],\n"
        f"    totalPoints: {total},\n"
        f"    timeRecommendation: {js(time)},\n"
        f"    calculatorAllowed: {str(calc).lower()},\n"
        f"  }}"
    )


# ============================================================================
# LONG FRQs — DBQ / LEQ-style, ~25 minutes, ~7 points each
# ============================================================================

LONG_1 = frq(
    "aas-long-1", "long", 1, "African Kingdoms & the Origins of the Diaspora",
    "Use the historical context of West and Central African societies before 1500 to address the prompt below. Reference specific figures, places, and primary sources.",
    [
        part("(a)",
             "Identify ONE specific feature of the Mali Empire under Mansa Musa (r. 1312–1337) that demonstrates the wealth, scholarship, or political organization of West African states before European contact.",
             2,
             [
                 (1, "Identifies a concrete, attested feature (e.g., 1324 hajj, Sankore Madrasa, Djinguereber Mosque, gold–salt trade)",
                     ["Mansa Musa", "1324", "hajj", "Mali", "Timbuktu", "Sankore", "Djinguereber", "gold", "salt", "Catalan Atlas"]),
                 (1, "Explains why this feature signals state capacity, scholarship, or commercial integration",
                     ["because", "demonstrates", "shows", "evidence", "trans-Saharan", "Islamic", "scholarship", "centralized"]),
             ],
             "Mansa Musa's 1324 hajj distributed so much gold that, according to al-Umari, prices in Cairo were depressed for over a decade. This demonstrates both Mali's centralized control over the trans-Saharan gold-salt trade and its integration into the wider Islamic world, as confirmed by Mansa Musa's appearance on the 1375 Catalan Atlas."),
        part("(b)",
             "Using ONE specific primary source from the unit (e.g., Ibn Battuta's Rihla, the Epic of Sundiata, or Afonso I's 1526 letter), explain what it reveals about African political or religious life before the height of the Atlantic slave trade.",
             2,
             [
                 (1, "Names a specific primary source by author/title and dates it to within the period",
                     ["Ibn Battuta", "Rihla", "1352", "1354", "Sundiata", "Afonso", "Kongo", "1526", "al-Sa'di", "Tarikh"]),
                 (1, "Uses the source to support a claim about African society (sourcing point: HAPP)",
                     ["audience", "purpose", "perspective", "according to", "argues", "demonstrates", "reveals"]),
             ],
             "Ibn Battuta's Rihla (1352–1354) describes Mansa Suleyman's court protocol, mandatory mosque attendance on Fridays, and the safety of trans-Saharan trade routes. Because Ibn Battuta was a Maliki jurist writing for an Islamic audience, his praise of Mali's adherence to Islamic law is especially credible as evidence that Mali was deeply integrated into the Dar al-Islam."),
        part("(c)",
             "Explain ONE way the political and economic structures of African kingdoms shaped — or were reshaped by — the early transatlantic slave trade between roughly 1450 and 1600.",
             2,
             [
                 (1, "Identifies a specific causal link (e.g., Kongolese diplomacy, intensification of warfare, Portuguese factor system at Elmina)",
                     ["Kongo", "Afonso", "Portugal", "Elmina", "Luanda", "warfare", "captives", "asiento", "factor"]),
                 (1, "Explains the mechanism (continuity OR change) using historical reasoning",
                     ["because", "led to", "destabilized", "intensified", "transformed", "feedback", "consequence"]),
             ],
             "King Afonso I of Kongo's 1526 letter to João III of Portugal protested that Portuguese slavers were depopulating his kingdom by bypassing royal monopolies and seizing Kongolese subjects. This shows that Atlantic demand restructured the political authority of even powerful African states, turning regulated trade into political destabilization within a single generation."),
        part("(d)",
             "Evaluate the long-term significance of pre-1500 African civilizations for understanding the African diaspora in the Americas.",
             1,
             [
                 (1, "Provides a defensible evaluative claim tied to evidence (cultural retention, religion, kinship, language, political memory)",
                     ["diaspora", "retention", "creolization", "Yoruba", "Vodou", "Candomble", "Santeria", "kinship", "memory", "long-term"]),
             ],
             "Pre-1500 African societies remain significant because their religious, linguistic, and political traditions traveled with enslaved Africans to the Americas. Yoruba religion structured Santeria, Candomble, and Lucumi, while political memory of Kongo and Akan polities shaped maroon resistance from Palmares to Jamaica — meaning the diaspora is incomprehensible without African history before 1500."),
    ],
    7, "~25 minutes",
)

LONG_2 = frq(
    "aas-long-2", "long", 2, "From Reconstruction to Jim Crow: Continuity and Change",
    "Analyze how African Americans pursued political and economic freedom between 1865 and 1900, and how white supremacist responses reshaped that pursuit. Use specific figures, legislation, and primary sources.",
    [
        part("(a)",
             "Identify ONE specific provision of the Reconstruction Amendments (13th, 14th, 15th) and explain its significance for Black political life.",
             2,
             [
                 (1, "Names a specific clause/provision and dates it (1865, 1868, 1870)",
                     ["13th", "14th", "15th", "1865", "1868", "1870", "abolition", "citizenship", "equal protection", "due process", "suffrage"]),
                 (1, "Explains the significance for Black voters, officeholders, or schools",
                     ["birthright", "Black voters", "officeholders", "Hiram Revels", "Robert Smalls", "Freedmen's Bureau", "schools"]),
             ],
             "The 14th Amendment (1868) defined birthright citizenship and required equal protection of the laws — overturning Dred Scott (1857) and providing the constitutional basis on which Black voters elected Hiram Revels (1870) and Robert Smalls (1875) to Congress during Reconstruction."),
        part("(b)",
             "Use ONE primary source from the period (e.g., Ida B. Wells's *Southern Horrors* (1892), Booker T. Washington's 1895 Atlanta Compromise speech, or W. E. B. Du Bois's *Souls of Black Folk* (1903)) to support a claim about Black strategy after 1877.",
             2,
             [
                 (1, "Names a specific primary source and dates it",
                     ["Wells", "Southern Horrors", "1892", "Red Record", "1895", "Atlanta Compromise", "Du Bois", "Souls of Black Folk", "1903"]),
                 (1, "Uses HAPP (historical situation, audience, purpose, point of view) to support a claim",
                     ["audience", "purpose", "perspective", "northern readers", "Black uplift", "double-consciousness", "color line"]),
             ],
             "Ida B. Wells's *Southern Horrors* (1892) was written for a northern white audience whose silence enabled lynching. Wells's statistical method — naming victims, dates, and accusations — was designed to refute the southern claim that lynchings were responses to rape, demonstrating that lynching was instead an instrument of political and economic terror."),
        part("(c)",
             "Explain ONE specific mechanism by which white-supremacist regimes dismantled Black political and economic gains between 1877 and 1900.",
             2,
             [
                 (1, "Names a specific mechanism (poll tax, literacy test, grandfather clause, white primary, convict leasing, Wilmington 1898, *Plessy* 1896, Mississippi Plan 1890)",
                     ["poll tax", "literacy test", "grandfather clause", "white primary", "convict leasing", "Wilmington", "1898", "Plessy", "1896", "Mississippi Plan", "1890"]),
                 (1, "Explains how the mechanism operated and its quantitative or political effect",
                     ["disfranchisement", "registered voters", "fell from", "labor", "removed from office", "coup"]),
             ],
             "Mississippi's 1890 constitutional convention introduced poll taxes and literacy tests that, combined with white-only Democratic primaries, reduced Black voter registration in the state from over 130,000 in 1890 to fewer than 9,000 by 1892 — a model copied by every former Confederate state by 1908."),
        part("(d)",
             "Evaluate which had the larger long-term effect on Black life by 1900: the gains of Reconstruction or the rise of Jim Crow. Defend your position with evidence.",
             1,
             [
                 (1, "Takes a defensible position supported with two specific pieces of evidence",
                     ["because", "Plessy", "1896", "AME", "HBCUs", "NAACP", "1909", "Wells", "Du Bois", "long-term"]),
             ],
             "Although *Plessy* (1896) and disfranchisement reversed most political gains, Reconstruction's institutional legacies — the 14th Amendment, HBCUs founded between 1865 and 1881, and the AME Church's expansion — provided the legal and organizational platform that NAACP litigation (founded 1909) eventually used to dismantle Jim Crow, so Reconstruction's long-term effect was the greater of the two."),
    ],
    7, "~25 minutes",
)

LONG_3 = frq(
    "aas-long-3", "long", 3, "The Civil Rights Movement and the Turn to Black Power",
    "Compare the strategies, demands, and outcomes of the civil rights movement (1954–1965) and the Black Power movement (1965–1975). Use specific figures, organizations, events, and primary sources.",
    [
        part("(a)",
             "Identify TWO specific civil rights organizations or campaigns between 1954 and 1965 and briefly describe what each demanded.",
             2,
             [
                 (1, "Names a first organization or campaign (NAACP LDF, SCLC, SNCC, CORE, MFDP, Montgomery Bus Boycott, Birmingham 1963, Selma 1965)",
                     ["NAACP", "SCLC", "SNCC", "CORE", "MFDP", "Montgomery", "1955", "Birmingham", "1963", "Selma", "1965"]),
                 (1, "Names a second and explains its specific demand (desegregation, voting rights, federal enforcement)",
                     ["voting rights", "desegregation", "Civil Rights Act", "1964", "Voting Rights Act", "Fannie Lou Hamer", "MLK", "Bayard Rustin"]),
             ],
             "The NAACP Legal Defense Fund litigated *Brown v. Board* (1954) to demand desegregation of public schools, while SNCC's 1964 Mississippi Freedom Summer mobilized 1,000 volunteers to register Black voters and seat the Mississippi Freedom Democratic Party at the Democratic National Convention."),
        part("(b)",
             "Use ONE primary source — e.g., King's 'Letter from Birmingham Jail' (1963), Fannie Lou Hamer's 1964 DNC testimony, or the Black Panther Party Ten-Point Program (1966) — to support an interpretation of movement strategy.",
             2,
             [
                 (1, "Names the source, dates it, and identifies the author's purpose",
                     ["Letter from Birmingham Jail", "1963", "Hamer", "1964", "DNC", "Ten-Point Program", "1966", "Carmichael"]),
                 (1, "Uses HAPP to support a claim about strategy or audience",
                     ["audience", "white moderate", "national television", "self-defense", "community control", "purpose"]),
             ],
             "King's 'Letter from Birmingham Jail' (1963) was addressed to white clergy who had urged him to wait, but its real audience was the national press. By citing Aquinas, Niebuhr, and the prophets, King reframed direct action as conservative — a defense of moral law against unjust statutes — to win over moderate northern opinion."),
        part("(c)",
             "Explain ONE specific reason that some activists turned from integrationist civil rights toward Black Power between 1965 and 1968.",
             2,
             [
                 (1, "Identifies a specific cause (Watts 1965, Selma backlash, frustration with northern de facto segregation, Carmichael's 1966 Greenwood speech, assassinations of Malcolm X and MLK)",
                     ["Watts", "1965", "Carmichael", "Greenwood", "1966", "Malcolm X", "1965", "MLK", "1968", "northern", "de facto"]),
                 (1, "Explains the mechanism — why this cause produced a strategic shift",
                     ["because", "frustration", "limits of", "self-determination", "community control", "self-defense"]),
             ],
             "After the August 1965 Watts uprising and the murder of Jonathan Daniels in Alabama, Stokely Carmichael's June 1966 Greenwood, MS rally rejected nonviolent integrationism. Carmichael argued that without economic power and self-defense, federal voting rights legislation alone could not address the de facto segregation, police violence, and unemployment that defined northern Black life."),
        part("(d)",
             "Evaluate ONE specific continuity OR change between the civil rights and Black Power movements that historians should emphasize.",
             1,
             [
                 (1, "Takes a defensible position with two specific pieces of evidence",
                     ["continuity", "change", "Free Breakfast", "Ten-Point Program", "Ella Baker", "Diane Nash", "Combahee", "intersectionality", "abolition"]),
             ],
             "An important continuity is the role of Black women organizers: Ella Baker's bottom-up philosophy in SNCC carried directly into the Combahee River Collective Statement (1977) and the Movement for Black Lives (2013), suggesting that intersectional Black feminist organizing — not the King–Carmichael split — provides the through-line of late-20th-century Black politics."),
    ],
    7, "~25 minutes",
)

LONG_4 = frq(
    "aas-long-4", "long", 4, "Mass Incarceration, Movement for Black Lives, and the Long 21st Century",
    "Analyze how late-20th-century policies and 21st-century movements have continued — or transformed — earlier struggles for Black freedom in the United States. Use specific evidence.",
    [
        part("(a)",
             "Identify ONE specific late-20th-century policy that contributed to the rise of mass incarceration after 1980 and describe its racially disparate effect.",
             2,
             [
                 (1, "Names a specific policy (1986 Anti-Drug Abuse Act, 1994 Crime Bill, mandatory minimums, three-strikes laws)",
                     ["1986", "Anti-Drug Abuse", "100:1", "crack", "powder", "1994", "Crime Bill", "three strikes", "mandatory minimum"]),
                 (1, "Cites a quantitative or proportional disparity",
                     ["5 to 6 times", "incarceration rate", "Black men", "rose from 300,000", "2.3 million", "Michelle Alexander", "New Jim Crow"]),
             ],
             "The 1986 Anti-Drug Abuse Act's 100:1 sentencing disparity between crack and powder cocaine helped raise the U.S. prison population from about 300,000 in 1972 to roughly 2.3 million by 2008, with Black men incarcerated at five to six times the rate of white men — what Michelle Alexander calls *The New Jim Crow*."),
        part("(b)",
             "Use ONE primary source from the contemporary period (e.g., Ta-Nehisi Coates's 'The Case for Reparations' (2014), the 2013 BLM founding statement, or Hannah-Jones's *1619 Project* (2019)) to support an interpretation of contemporary Black political thought.",
             2,
             [
                 (1, "Names the source, author, and date",
                     ["Coates", "Case for Reparations", "2014", "BLM", "2013", "Cullors", "Garza", "Tometi", "Hannah-Jones", "1619 Project", "2019"]),
                 (1, "Uses HAPP to support a claim",
                     ["redlining", "HOLC", "intersectionality", "queer", "founding", "audience", "policy"]),
             ],
             "Coates's 'The Case for Reparations' (Atlantic, 2014) was written for a national, largely white liberal audience and grounded its argument not in slavery alone but in 1930s-era HOLC redlining maps and FHA discrimination. By documenting 20th-century federal complicity, Coates moved reparations from a moral abstraction to a legal claim about specific, recoverable theft."),
        part("(c)",
             "Explain ONE specific way the Movement for Black Lives (founded 2013) extends OR departs from the civil rights and Black Power traditions.",
             2,
             [
                 (1, "Names a specific extension or departure (decentralization, intersectionality, abolitionism, queer leadership)",
                     ["decentralized", "intersectionality", "Crenshaw", "Combahee", "abolition", "police violence", "queer", "Black women"]),
                 (1, "Explains the mechanism with reference to earlier movements",
                     ["unlike", "extends", "echoes", "Ella Baker", "Davis", "King", "SCLC", "Panthers"]),
             ],
             "M4BL extends Ella Baker's SNCC tradition of decentralized, group-centered leadership while explicitly centering Black queer and women's experience — a structural departure from the male, clerical leadership of SCLC. Founders Cullors, Garza, and Tometi drew directly on the Combahee River Collective Statement (1977) to make intersectional analysis foundational rather than ancillary."),
        part("(d)",
             "Evaluate the claim that the period 2008–2020 represents EITHER a culmination of earlier civil rights gains OR the start of a distinctly new phase in Black political history. Defend your position.",
             1,
             [
                 (1, "Takes a defensible position with two specific pieces of evidence",
                     ["Obama", "2008", "Shelby County", "2013", "Ferguson", "2014", "Floyd", "2020", "BLM", "long-term"]),
             ],
             "The period is best read as a new phase: although Obama's 2008 election fulfilled a long civil-rights aspiration, *Shelby County v. Holder* (2013) gutted Voting Rights Act preclearance the same year BLM was founded, and the 2020 George Floyd protests — perhaps the largest in U.S. history — addressed police violence and abolition rather than legal segregation, framing a distinctly post-civil-rights agenda."),
    ],
    7, "~25 minutes",
)

# ============================================================================
# SHORT FRQs — source-/data-based, ~12 minutes, 4 points each
# ============================================================================

SHORT_1 = frq(
    "aas-short-1", "short", 1, "Source: Olaudah Equiano's Narrative",
    "The following passage is from Olaudah Equiano's *The Interesting Narrative of the Life of Olaudah Equiano* (1789), describing the Middle Passage.\n\n"
    "> 'The closeness of the place, and the heat of the climate, added to the number in the ship, which was so crowded that each had scarcely room to turn himself, almost suffocated us. … The shrieks of the women, and the groans of the dying, rendered the whole a scene of horror almost inconceivable.'",
    [
        part("(a)",
             "Identify ONE specific historical context (1450–1808) that helps explain the conditions Equiano describes.",
             1,
             [(1, "Names a specific context (Middle Passage, ~12.5M embarked, ~15% mortality, tight-pack stowage, asiento system, Royal African Company)",
                  ["Middle Passage", "12.5 million", "15%", "mortality", "tight pack", "asiento", "Royal African Company", "Bight of Biafra"])],
             "Equiano was captured in the Bight of Biafra around 1756, during the peak decades of an Atlantic slave trade that embarked roughly 12.5 million Africans, with average shipboard mortality of about 15%."),
        part("(b)",
             "Identify the audience and purpose of Equiano's *Narrative* (HAPP).",
             1,
             [(1, "Identifies British abolitionist audience and persuasive/political purpose",
                  ["British", "abolition", "1789", "Parliament", "Sons of Africa", "audience", "purpose", "persuade"])],
             "Equiano wrote for a British reading public during the parliamentary abolition campaign of the late 1780s, aiming to persuade Christian readers — including MPs voting on the trade — that the Atlantic system was both un-Christian and unsustainable."),
        part("(c)",
             "Explain ONE specific way Equiano's account influenced abolitionist politics in Britain.",
             1,
             [(1, "Identifies a specific influence (best-seller; cited by Wilberforce/Clarkson; informed 1807 Abolition Act)",
                  ["Wilberforce", "Clarkson", "1807", "Abolition Act", "Sons of Africa", "best seller", "nine editions"])],
             "The *Narrative* went through nine editions in five years, was cited by Thomas Clarkson in evidence to the Privy Council, and helped build the public pressure that produced the 1807 British Abolition of the Slave Trade Act."),
        part("(d)",
             "Identify ONE limitation of using Equiano's *Narrative* as evidence about the Middle Passage.",
             1,
             [(1, "Identifies a valid limitation (single perspective; written 30+ years after events; recent scholarship questioning birthplace)",
                  ["single", "perspective", "memory", "decades later", "Carretta", "South Carolina", "birthplace", "limit"])],
             "Recent scholarship (notably by Vincent Carretta) has raised questions about whether Equiano was actually born in Africa or in colonial South Carolina, which complicates — though does not negate — the use of his narrative as direct testimony of the Middle Passage."),
    ],
    4, "~12 minutes",
)

SHORT_2 = frq(
    "aas-short-2", "short", 2, "Source: Frederick Douglass, 'What to the Slave is the Fourth of July?' (1852)",
    "The following passage is from Frederick Douglass's July 5, 1852 address in Rochester, New York.\n\n"
    "> 'What, to the American slave, is your 4th of July? I answer; a day that reveals to him, more than all other days in the year, the gross injustice and cruelty to which he is the constant victim. To him, your celebration is a sham; your boasted liberty, an unholy license …'",
    [
        part("(a)",
             "Identify the historical context for Douglass's speech in 1852.",
             1,
             [(1, "Names a relevant context (Compromise of 1850, Fugitive Slave Act, *Uncle Tom's Cabin*, slave power expansion)",
                  ["Fugitive Slave", "1850", "Compromise", "Uncle Tom's Cabin", "1852", "Stowe", "expansion"])],
             "The speech came two years after the 1850 Fugitive Slave Act required northern citizens to assist in returning escaped enslaved people, and the same year as the publication of Stowe's *Uncle Tom's Cabin* — a moment of intensifying sectional crisis."),
        part("(b)",
             "Identify the audience Douglass was addressing and one rhetorical strategy he used.",
             1,
             [(1, "Identifies northern white abolitionist audience and a rhetorical strategy (jeremiad, biblical cadence, irony)",
                  ["Rochester", "Ladies' Anti-Slavery Society", "white", "northern", "jeremiad", "irony", "biblical", "Isaiah", "Jefferson"])],
             "Douglass spoke to the Rochester Ladies' Anti-Slavery Society — a northern white audience — and used the jeremiad form, citing Isaiah and Jefferson against his listeners, to indict the gap between national ideals and the lived reality of enslavement."),
        part("(c)",
             "Explain ONE way Douglass's argument here departs from his earlier Garrisonian position.",
             1,
             [(1, "Identifies the break with Garrison's view that the Constitution was proslavery",
                  ["Garrison", "Constitution", "proslavery", "antislavery", "1851", "North Star", "political action"])],
             "By 1852 Douglass had broken with Garrison's view that the Constitution was a proslavery document; he now argued it could be read as antislavery, opening the door to political action through the Liberty and Free Soil parties — a shift signaled in his founding of *The North Star* (1847)."),
        part("(d)",
             "Identify ONE limitation of using a single Douglass speech as evidence about Black political thought in 1852.",
             1,
             [(1, "Identifies a valid limitation (Black women's perspectives, free Black opinion in the South, AME Church)",
                  ["women", "Sojourner Truth", "Maria Stewart", "AME", "free Black", "South", "perspective", "single voice"])],
             "Douglass's voice does not represent all Black political thought of 1852: Sojourner Truth's 'Ain't I a Woman?' (1851) addressed gender directly, and the AME Church and free Black communities in the South had different practical priorities under harsher state laws."),
    ],
    4, "~12 minutes",
)

SHORT_3 = frq(
    "aas-short-3", "short", 3, "Source: Combahee River Collective Statement (1977)",
    "The following is an excerpt from the *Combahee River Collective Statement* (1977).\n\n"
    "> 'The most general statement of our politics at the present time would be that we are actively committed to struggling against racial, sexual, heterosexual, and class oppression, and see as our particular task the development of integrated analysis and practice based upon the fact that the major systems of oppression are interlocking.'",
    [
        part("(a)",
             "Identify the immediate political context out of which the Combahee River Collective emerged.",
             1,
             [(1, "Names a relevant context (NBFO 1973, post-civil rights and Black Power, second-wave feminism's racial blind spots)",
                  ["NBFO", "1973", "Black feminist", "second wave", "white feminism", "Black Power", "lesbian"])],
             "The Collective formed in Boston in 1974 after splitting from the National Black Feminist Organization (1973), in response to the racial blind spots of mainstream second-wave feminism and the marginalization of Black women's leadership in the male-led Black Power movement."),
        part("(b)",
             "Explain how the concept of 'interlocking' systems of oppression in the Statement anticipates Kimberlé Crenshaw's later concept of 'intersectionality' (1989).",
             1,
             [(1, "Connects 'interlocking' to intersectionality (multiple, mutually constitutive systems)",
                  ["intersectionality", "Crenshaw", "1989", "interlocking", "race", "gender", "class", "sexuality", "mutually", "constitutive"])],
             "The Statement's claim that race, sex, sexuality, and class are 'interlocking' rather than additive directly anticipates Crenshaw's 1989 argument that single-axis analysis (race OR gender) erases Black women's experience — making the 1977 Statement a foundational text for intersectional theory."),
        part("(c)",
             "Identify ONE specific way Combahee influenced later Black political organizing.",
             1,
             [(1, "Identifies a specific influence (M4BL/BLM founding, intersectional policy platform, queer Black leadership)",
                  ["M4BL", "BLM", "Cullors", "Garza", "Tometi", "queer", "intersectional", "Movement for Black Lives", "Vision for Black Lives"])],
             "Movement for Black Lives co-founders Patrisse Cullors, Alicia Garza, and Opal Tometi cite the Combahee Statement as a direct influence; the 2016 'Vision for Black Lives' platform's intersectional, abolitionist framework reflects Combahee's analytical structure."),
        part("(d)",
             "Identify ONE limitation of using the Statement as evidence about Black women's politics in the 1970s.",
             1,
             [(1, "Identifies a valid limitation (small group; Northeastern; lesbian/socialist focus may not represent Black women broadly)",
                  ["small group", "Boston", "lesbian", "socialist", "broad", "AME", "rural", "limit", "perspective"])],
             "Combahee was a small Boston-based group of Black lesbian socialists; its analysis does not necessarily speak for Black church-based, southern, or working-class women's political organizing in the same period, which often used different idioms and strategies."),
    ],
    4, "~12 minutes",
)

SHORT_4 = frq(
    "aas-short-4", "short", 4, "Data: Great Migration Population Shifts",
    "Use the following data to address the prompt.\n\n"
    "Between 1910 and 1970, approximately 6 million African Americans moved from the rural South to the urban North, Midwest, and West. By 1970:\n\n"
    "- Detroit: Black population rose from ~6,000 (1910) to ~660,000 (1970) — about 44% of the city.\n"
    "- Chicago: from ~44,000 (1910) to ~1.1 million (1970) — about 33% of the city.\n"
    "- Harlem: by 1930, more than 200,000 African Americans lived in a 50-block district that had been majority-white in 1900.",
    [
        part("(a)",
             "Identify ONE specific 'push' factor that drove the Great Migration out of the South.",
             1,
             [(1, "Names a specific push factor (lynching, sharecropping debt, boll weevil, disfranchisement, Jim Crow violence)",
                  ["lynching", "sharecropping", "boll weevil", "1916", "1921", "Tulsa", "Jim Crow", "disfranchisement", "Wells"])],
             "Lynching — documented by Ida B. Wells's 1892 *Southern Horrors* and continuing through the 1921 Tulsa Race Massacre — combined with the boll weevil's destruction of cotton crops after 1915, made daily life and economic survival in the rural South untenable for many Black families."),
        part("(b)",
             "Identify ONE specific 'pull' factor that drew migrants north, and name a specific institution or actor that amplified it.",
             1,
             [(1, "Names a pull factor (WWI labor demand, higher wages, voting rights) and a specific actor (*Chicago Defender*, Pullman porters, Robert Abbott)",
                  ["WWI", "1917", "labor", "Chicago Defender", "Abbott", "Pullman", "porters", "wages", "voting"])],
             "Wartime industrial labor demand after 1917 — combined with Robert Abbott's *Chicago Defender*, distributed throughout the South by Pullman porters — actively recruited Black workers north with promises of higher wages and political rights."),
        part("(c)",
             "Explain ONE way the Great Migration reshaped Black political and cultural life in northern cities.",
             1,
             [(1, "Identifies a specific cultural/political consequence (Harlem Renaissance 1925, UNIA, Black mayors, blues/jazz, Black press)",
                  ["Harlem Renaissance", "1925", "Locke", "Hughes", "UNIA", "Garvey", "Ellington", "Black mayors", "Defender", "Courier"])],
             "Concentrated Black populations sustained Alain Locke's *New Negro* (1925) and Marcus Garvey's UNIA, while later producing the political bases for Black mayors (Carl Stokes, Cleveland 1967; Coleman Young, Detroit 1973) — institutional and electoral power that the rural South had violently denied."),
        part("(d)",
             "Identify ONE specific way northern cities reproduced racial inequality despite the absence of legal Jim Crow.",
             1,
             [(1, "Identifies de facto mechanisms (HOLC redlining 1933–35, FHA loan discrimination, restrictive covenants, school segregation, Detroit and Chicago race riots)",
                  ["redlining", "HOLC", "1935", "FHA", "restrictive covenants", "Shelley", "Kraemer", "1948", "1919", "1943", "Detroit"])],
             "Federal HOLC maps (1935) and FHA underwriting standards systematically denied mortgages to Black neighborhoods, while restrictive covenants — only struck down in *Shelley v. Kraemer* (1948) — and the 1919 Chicago and 1943 Detroit race riots showed that northern de facto segregation could be enforced as violently as southern de jure segregation."),
    ],
    4, "~12 minutes",
)


HEADER = '''/**
 * AP African American Studies — FRQ Practice Question Pool
 * AUTO-GENERATED by scripts/write-aas-frqs.py
 *
 * Format mirrors College Board AP AAS exam: long source-based prompts (~25 min, 7 pts)
 * and shorter source/data prompts (~12 min, 4 pts), each with 4 parts (a)–(d).
 */

export interface FRQRubricItem {
  points: number
  description: string
  keywords: string[]
}

export interface FRQPart {
  label: string
  prompt: string
  maxPoints: number
  rubric: FRQRubricItem[]
  sampleAnswer: string
}

export interface AASFRQ {
  id: string
  type: 'long' | 'short'
  unit: number
  title: string
  prompt: string
  parts: FRQPart[]
  totalPoints: number
  timeRecommendation: string
  calculatorAllowed: boolean
}

'''

FOOTER = '''

export const apAASFRQs: AASFRQ[] = [...longFRQs, ...shortFRQs]

export function getApAASFRQs(): AASFRQ[] {
  return apAASFRQs
}

export function getLongFRQs(): AASFRQ[] {
  return longFRQs
}

export function getShortFRQs(): AASFRQ[] {
  return shortFRQs
}

export function generateFullExamFRQs(): {
  long: AASFRQ[]
  short: AASFRQ[]
  totalPoints: number
  totalTime: string
} {
  const shuffle = <T>(arr: T[]): T[] => {
    const copy = [...arr]
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[copy[i], copy[j]] = [copy[j], copy[i]]
    }
    return copy
  }

  const selectedLong = shuffle(longFRQs).slice(0, 2)
  const selectedShort = shuffle(shortFRQs).slice(0, 2)
  const totalPoints = [...selectedLong, ...selectedShort].reduce((s, f) => s + f.totalPoints, 0)

  return {
    long: selectedLong,
    short: selectedShort,
    totalPoints,
    totalTime: '90 min',
  }
}
'''


def main():
    long_block = "const longFRQs: AASFRQ[] = [\n" + ",\n".join([LONG_1, LONG_2, LONG_3, LONG_4]) + "\n]\n"
    short_block = "const shortFRQs: AASFRQ[] = [\n" + ",\n".join([SHORT_1, SHORT_2, SHORT_3, SHORT_4]) + "\n]\n"
    with open(OUT, "w", encoding="utf-8") as f:
        f.write(HEADER + long_block + "\n" + short_block + FOOTER)
    print(f"Wrote {OUT}")


if __name__ == "__main__":
    main()
