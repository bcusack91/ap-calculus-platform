export const batchCards: { slug: string; cards: { front: string; back: string; hint?: string }[] }[] = [
  {
    slug: "enzyme-kinetics",
    cards: [
      {
        front: "What is the Michaelis-Menten equation, and what does each variable mean?",
        back: "$v_0 = \\frac{V_{max}[S]}{K_m + [S]}$, where $v_0$ is the initial reaction velocity, $V_{max}$ is the maximum velocity at saturating substrate, $[S]$ is substrate concentration, and $K_m$ is the Michaelis constant (the $[S]$ at which $v_0 = V_{max}/2$). Use it to model single-substrate enzyme rates.",
        hint: "Hyperbolic curve of v0 vs [S].",
      },
      {
        front: "What does $K_m$ physically represent, and how does it relate to enzyme affinity?",
        back: "$K_m$ is the substrate concentration at which the reaction proceeds at half of $V_{max}$. A low $K_m$ means high affinity (less substrate needed to reach half-max), while a high $K_m$ means low affinity.",
        hint: "Half-max [S].",
      },
      {
        front: "How is $V_{max}$ related to $k_{cat}$ and total enzyme concentration?",
        back: "$V_{max} = k_{cat}[E]_T$, where $k_{cat}$ (the turnover number) is the number of substrate molecules converted to product per enzyme per second at saturation, and $[E]_T$ is total enzyme concentration. Doubling enzyme doubles $V_{max}$ but does not change $K_m$.",
        hint: "Turnover number times enzyme.",
      },
      {
        front: "What is the catalytic efficiency of an enzyme, and what value indicates diffusion limitation?",
        back: "Catalytic efficiency is $k_{cat}/K_m$. It measures how well an enzyme converts substrate at low $[S]$. Values approaching $10^8$ to $10^9\\,\\mathrm{M^{-1}s^{-1}}$ indicate the enzyme is diffusion-limited (catalytically perfect).",
        hint: "Ratio of two constants.",
      },
      {
        front: "What is the Lineweaver-Burk plot, and what do its intercepts give?",
        back: "It is the double-reciprocal plot of $\\frac{1}{v_0}$ vs $\\frac{1}{[S]}$, giving a straight line. The y-intercept equals $\\frac{1}{V_{max}}$, the x-intercept equals $-\\frac{1}{K_m}$, and the slope equals $\\frac{K_m}{V_{max}}$.",
        hint: "Double reciprocal linearization.",
      },
      {
        front: "How does a competitive inhibitor affect $K_m$ and $V_{max}$?",
        back: "A competitive inhibitor binds the active site, raising the apparent $K_m$ (lower apparent affinity) but leaving $V_{max}$ unchanged, because high substrate can outcompete the inhibitor. On a Lineweaver-Burk plot, lines share the same y-intercept.",
        hint: "Same y-intercept, can be overcome by [S].",
      },
      {
        front: "How does a pure noncompetitive inhibitor affect $K_m$ and $V_{max}$?",
        back: "A noncompetitive inhibitor binds an allosteric site equally well to E and ES, lowering $V_{max}$ but leaving $K_m$ unchanged. Lineweaver-Burk lines share the same x-intercept.",
        hint: "Cannot be overcome by adding substrate.",
      },
      {
        front: "How does an uncompetitive inhibitor affect $K_m$ and $V_{max}$?",
        back: "An uncompetitive inhibitor binds only the ES complex, decreasing both $K_m$ and $V_{max}$ by the same factor, so the ratio $V_{max}/K_m$ stays constant. Lineweaver-Burk lines appear parallel.",
        hint: "Binds ES only; parallel lines.",
      },
      {
        front: "What is the steady-state assumption underlying Michaelis-Menten kinetics?",
        back: "It assumes the concentration of the enzyme-substrate complex [ES] stays roughly constant because its rate of formation equals its rate of breakdown. This holds during the early, linear phase of the reaction.",
        hint: "d[ES]/dt is approximately 0.",
      },
      {
        front: "Distinguish allosteric (sigmoidal) enzymes from Michaelis-Menten enzymes.",
        back: "Allosteric enzymes have multiple subunits and show cooperative binding, producing a sigmoidal (S-shaped) $v_0$ vs $[S]$ curve rather than a hyperbola. They do not obey simple Michaelis-Menten kinetics and are regulated by effectors that shift the curve.",
        hint: "Hemoglobin-like sigmoid.",
      },
      {
        front: "Worked example: If $V_{max} = 100\\,\\mu\\mathrm{M/min}$ and $K_m = 5\\,\\mu\\mathrm{M}$, what is $v_0$ at $[S] = 5\\,\\mu\\mathrm{M}$?",
        back: "At $[S] = K_m$, the equation gives $v_0 = \\frac{100 \\times 5}{5 + 5} = 50\\,\\mu\\mathrm{M/min}$, exactly half of $V_{max}$, which is the definition of $K_m$.",
        hint: "Plug [S] = Km.",
      },
      {
        front: "Common trap: Does increasing substrate concentration ever exceed $V_{max}$?",
        back: "No. As $[S] \\to \\infty$, $v_0$ asymptotically approaches but never exceeds $V_{max}$ because all active sites become saturated. $V_{max}$ can only be raised by adding more enzyme.",
        hint: "Asymptote, not crossable.",
      },
    ],
  },
  {
    slug: "aas-resistance-abolition",
    cards: [
      {
        front: "Who was Nat Turner and what did his 1831 rebellion accomplish and provoke?",
        back: "Nat Turner led the deadliest enslaved-person rebellion in U.S. history in Southampton County, Virginia, in 1831, killing about 55 to 60 white people. In response, Southern states passed harsher slave codes restricting Black literacy, assembly, and movement.",
        hint: "1831 Virginia uprising.",
      },
      {
        front: "What was the difference between gradual and immediate abolitionism?",
        back: "Gradual abolitionists favored phasing out slavery over time, sometimes paired with colonization, while immediatists (like William Lloyd Garrison) demanded an instant, unconditional end to slavery on moral grounds. The 1830s saw a shift toward immediatism.",
        hint: "Timeline of emancipation.",
      },
      {
        front: "Who was Frederick Douglass and what was his significance to the abolition movement?",
        back: "Frederick Douglass was a formerly enslaved man who became a leading abolitionist orator, writer, and editor of the North Star newspaper. His autobiography and speeches, such as 'What to the Slave Is the Fourth of July?', exposed slavery's brutality and demanded full citizenship.",
        hint: "North Star editor, self-emancipated.",
      },
      {
        front: "What was the Underground Railroad and who was Harriet Tubman?",
        back: "The Underground Railroad was a covert network of routes and safe houses helping enslaved people escape to free states and Canada. Harriet Tubman, a self-emancipated woman, returned roughly 13 times to guide approximately 70 people to freedom.",
        hint: "Conductors and stations.",
      },
      {
        front: "What forms did everyday resistance to slavery take?",
        back: "Beyond open revolt, enslaved people resisted through work slowdowns, tool-breaking, feigning illness, running away, preserving African cultural and religious practices, and maintaining kinship networks. These covert acts undermined the system without provoking immediate deadly reprisal.",
        hint: "Not all resistance was armed.",
      },
      {
        front: "What was David Walker's Appeal (1829) and why was it incendiary?",
        back: "David Walker's 'Appeal to the Coloured Citizens of the World' was a militant pamphlet calling on enslaved people to resist, even violently, and condemning American hypocrisy. It terrified slaveholders, who banned it and offered bounties on Walker.",
        hint: "1829 militant pamphlet.",
      },
      {
        front: "What role did Black women like Sojourner Truth play in abolition and women's rights?",
        back: "Sojourner Truth, formerly enslaved, was a powerful abolitionist and women's rights speaker, famous for her 'Ain't I a Woman?' address. She linked the struggle against slavery with the fight for gender equality.",
        hint: "Ain't I a Woman?",
      },
      {
        front: "What was the significance of the Haitian Revolution (1791-1804) for U.S. resistance?",
        back: "The Haitian Revolution produced the first independent Black republic founded by formerly enslaved people, inspiring hope among enslaved Americans and fear among slaveholders. It demonstrated that large-scale, successful slave revolt was possible.",
        hint: "First free Black republic.",
      },
      {
        front: "How did the Black church function as a site of resistance?",
        back: "Independent Black churches, such as the African Methodist Episcopal (AME) Church founded by Richard Allen, provided autonomous spaces for worship, education, organizing, and abolitionist activity beyond white control.",
        hint: "Richard Allen, AME.",
      },
      {
        front: "What was the Amistad case (1839-1841) and its outcome?",
        back: "Captive Africans aboard the Spanish ship Amistad revolted and seized the vessel. The U.S. Supreme Court ruled in 1841 that they had been illegally enslaved and were free, affirming a right to resist unlawful captivity.",
        hint: "Shipboard revolt, Supreme Court win.",
      },
      {
        front: "How did literacy and the written word serve as resistance?",
        back: "Despite anti-literacy laws, enslaved people secretly learned to read and write, which enabled forging passes, reading abolitionist materials, and producing slave narratives that swayed public opinion. Literacy was both a tool and an act of defiance.",
        hint: "Why slave codes banned reading.",
      },
      {
        front: "Common trap: Was abolitionism a unified movement?",
        back: "No. Abolitionists split over tactics (moral suasion vs. political action vs. violence), the role of women, and the U.S. Constitution. Garrison even burned a copy of the Constitution, calling it pro-slavery, while others sought to work within the system.",
        hint: "Many factions, not one bloc.",
      },
    ],
  },
  {
    slug: "macro-unemployment-inflation",
    cards: [
      {
        front: "How is the unemployment rate calculated?",
        back: "Unemployment rate $= \\frac{\\text{number unemployed}}{\\text{labor force}} \\times 100$, where the labor force is the sum of employed plus unemployed persons actively seeking work. People not looking for work are not in the labor force.",
        hint: "Unemployed over labor force.",
      },
      {
        front: "What are the three types of unemployment?",
        back: "Frictional (people between jobs or new entrants searching), structural (skills mismatch or jobs eliminated by technology/trade), and cyclical (caused by recession and falling demand). Frictional plus structural make up the natural rate.",
        hint: "Frictional, structural, cyclical.",
      },
      {
        front: "What is the natural rate of unemployment?",
        back: "It is the unemployment rate when the economy produces at full employment (potential GDP), consisting only of frictional and structural unemployment. At the natural rate, cyclical unemployment is zero.",
        hint: "Frictional + structural.",
      },
      {
        front: "What is the labor force participation rate?",
        back: "Labor force participation rate $= \\frac{\\text{labor force}}{\\text{working-age population}} \\times 100$. It measures the share of the working-age population that is either employed or actively seeking work.",
        hint: "Labor force over working-age pop.",
      },
      {
        front: "What is a discouraged worker, and how does it bias the unemployment rate?",
        back: "A discouraged worker has given up actively searching for a job and is therefore counted as not in the labor force, not as unemployed. This causes the official unemployment rate to understate true joblessness.",
        hint: "Stopped looking; understates U.",
      },
      {
        front: "How is the inflation rate calculated using CPI?",
        back: "Inflation rate $= \\frac{\\text{CPI}_{\\text{new}} - \\text{CPI}_{\\text{old}}}{\\text{CPI}_{\\text{old}}} \\times 100$. The CPI (Consumer Price Index) tracks the price of a fixed market basket relative to a base year.",
        hint: "Percent change in CPI.",
      },
      {
        front: "Distinguish demand-pull from cost-push inflation.",
        back: "Demand-pull inflation results from rising aggregate demand outpacing supply (too much spending chasing too few goods). Cost-push inflation results from rising input costs or supply shocks shifting aggregate supply left, raising prices while output falls.",
        hint: "Demand shift vs. supply shock.",
      },
      {
        front: "What is the difference between nominal and real interest rates?",
        back: "The Fisher equation states real interest rate $\\approx$ nominal interest rate $-$ expected inflation rate. The nominal rate is the stated rate; the real rate reflects true purchasing-power gain after accounting for inflation.",
        hint: "Fisher equation.",
      },
      {
        front: "Who is hurt and who benefits from unexpected inflation?",
        back: "Unexpected inflation hurts lenders (repaid in cheaper dollars), savers, and those on fixed incomes, while it benefits borrowers (debtors repay with cheaper money). Anticipated inflation can be hedged and redistributes less.",
        hint: "Borrowers win, lenders lose.",
      },
      {
        front: "What does the short-run Phillips curve illustrate?",
        back: "The short-run Phillips curve shows an inverse relationship between unemployment and inflation: lower unemployment is associated with higher inflation and vice versa. It corresponds to movements along an upward-sloping short-run aggregate supply curve.",
        hint: "Inverse U and inflation tradeoff.",
      },
      {
        front: "Why is the long-run Phillips curve vertical?",
        back: "In the long run there is no tradeoff: the economy returns to the natural rate of unemployment regardless of inflation, because expectations adjust. The long-run Phillips curve is vertical at the natural rate.",
        hint: "Vertical at natural rate.",
      },
      {
        front: "Worked example: If CPI rises from 200 to 210, what is the inflation rate?",
        back: "Inflation rate $= \\frac{210 - 200}{200} \\times 100 = 5\\%$. Prices in the basket rose 5 percent over the period.",
        hint: "Change over original times 100.",
      },
      {
        front: "Common trap: Does a rising CPI mean prices are falling?",
        back: "No. A rising CPI means prices are increasing (inflation). Only when the CPI declines from one period to the next is there deflation; a smaller positive inflation rate is disinflation, not deflation.",
        hint: "Disinflation vs. deflation.",
      },
    ],
  },
  {
    slug: "hypothesis-testing-framework",
    cards: [
      {
        front: "What are the null and alternative hypotheses?",
        back: "The null hypothesis $H_0$ states no effect or no difference (a specific parameter value), while the alternative hypothesis $H_a$ states the claim being tested (a difference, increase, or decrease). $H_0$ always contains the equality.",
        hint: "H0 has the = sign.",
      },
      {
        front: "What is a p-value, and how is it interpreted?",
        back: "A p-value is the probability of obtaining a test statistic at least as extreme as the observed one, assuming $H_0$ is true. A small p-value means the data would be unlikely under $H_0$, providing evidence against it.",
        hint: "Probability assuming H0 true.",
      },
      {
        front: "How do you decide whether to reject $H_0$ using $\\alpha$?",
        back: "Compare the p-value to the significance level $\\alpha$. If p-value $\\le \\alpha$, reject $H_0$ (statistically significant result); if p-value $> \\alpha$, fail to reject $H_0$. Common $\\alpha$ values are 0.05 and 0.01.",
        hint: "p <= alpha reject.",
      },
      {
        front: "What is a Type I error?",
        back: "A Type I error is rejecting a true null hypothesis (a false positive). Its probability equals the significance level $\\alpha$. Example: concluding a drug works when it actually does not.",
        hint: "False positive, probability alpha.",
      },
      {
        front: "What is a Type II error?",
        back: "A Type II error is failing to reject a false null hypothesis (a false negative). Its probability is denoted $\\beta$. Example: concluding a drug has no effect when it actually does.",
        hint: "False negative, probability beta.",
      },
      {
        front: "What is the power of a test, and what increases it?",
        back: "Power $= 1 - \\beta$ is the probability of correctly rejecting a false $H_0$. Power increases with larger sample size, larger true effect size, larger $\\alpha$, and lower variability.",
        hint: "1 minus beta.",
      },
      {
        front: "What is the difference between a one-tailed and a two-tailed test?",
        back: "A one-tailed test checks for a difference in one direction (e.g., $H_a: \\mu > \\mu_0$), placing all of $\\alpha$ in one tail. A two-tailed test checks for any difference ($H_a: \\mu \\ne \\mu_0$), splitting $\\alpha$ between both tails.",
        hint: "Direction of the alternative.",
      },
      {
        front: "What are the four conditions commonly checked before a significance test for means?",
        back: "Random sampling (to generalize), independence (often the 10% condition for sampling without replacement), normality of the sampling distribution (large $n$ or normal population via CLT), and for means, a known or estimated standard deviation. Always state and verify conditions.",
        hint: "Random, independent, normal.",
      },
      {
        front: "What is the general formula for a test statistic?",
        back: "$\\text{test statistic} = \\frac{\\text{statistic} - \\text{parameter under } H_0}{\\text{standard error of statistic}}$. For a mean it is $t = \\frac{\\bar{x} - \\mu_0}{s/\\sqrt{n}}$. It measures how many standard errors the estimate is from the null value.",
        hint: "(estimate - null) / SE.",
      },
      {
        front: "How does a confidence interval relate to a two-sided hypothesis test?",
        back: "A two-sided test at level $\\alpha$ rejects $H_0: \\mu = \\mu_0$ exactly when $\\mu_0$ falls outside the $(1-\\alpha)$ confidence interval. The interval and test give consistent conclusions.",
        hint: "Value outside CI = reject.",
      },
      {
        front: "Worked example: With p-value $= 0.03$ and $\\alpha = 0.05$, what is the conclusion?",
        back: "Since $0.03 \\le 0.05$, reject $H_0$. There is statistically significant evidence at the 5 percent level to support the alternative hypothesis.",
        hint: "Compare 0.03 to 0.05.",
      },
      {
        front: "Common trap: Does failing to reject $H_0$ prove $H_0$ is true?",
        back: "No. Failing to reject $H_0$ means there is insufficient evidence against it, not proof it is true. We never 'accept' the null; we only fail to reject it.",
        hint: "Absence of evidence is not proof.",
      },
      {
        front: "Common trap: Does statistical significance imply practical importance?",
        back: "No. With a very large sample, even a tiny, practically meaningless difference can be statistically significant. Always consider effect size alongside the p-value.",
        hint: "Significance vs. magnitude.",
      },
    ],
  },
  {
    slug: "arc-length-and-sector-area",
    cards: [
      {
        front: "What is the arc length formula using radians?",
        back: "$s = r\\theta$, where $s$ is arc length, $r$ is the radius, and $\\theta$ is the central angle in radians. Use this whenever the angle is (or can be converted to) radians.",
        hint: "Angle must be in radians.",
      },
      {
        front: "What is the sector area formula using radians?",
        back: "$A = \\frac{1}{2}r^2\\theta$, where $A$ is the sector area, $r$ is the radius, and $\\theta$ is the central angle in radians. It is half the radius squared times the angle.",
        hint: "Half r-squared theta.",
      },
      {
        front: "How do you convert degrees to radians?",
        back: "Multiply degrees by $\\frac{\\pi}{180}$. For example, $90^\\circ \\times \\frac{\\pi}{180} = \\frac{\\pi}{2}$ radians. To go the other way, multiply radians by $\\frac{180}{\\pi}$.",
        hint: "Times pi over 180.",
      },
      {
        front: "What is the arc length formula when the angle is in degrees?",
        back: "$s = \\frac{\\theta}{360} \\times 2\\pi r$, where $\\theta$ is the central angle in degrees. The fraction $\\frac{\\theta}{360}$ gives the portion of the full circumference.",
        hint: "Fraction of circumference.",
      },
      {
        front: "What is the sector area formula when the angle is in degrees?",
        back: "$A = \\frac{\\theta}{360} \\times \\pi r^2$, where $\\theta$ is the central angle in degrees. The fraction $\\frac{\\theta}{360}$ gives the portion of the full circle's area.",
        hint: "Fraction of total circle area.",
      },
      {
        front: "Worked example: Find the arc length for $r = 6$ and $\\theta = \\frac{\\pi}{3}$ radians.",
        back: "$s = r\\theta = 6 \\times \\frac{\\pi}{3} = 2\\pi \\approx 6.28$ units. The arc subtends a 60-degree central angle.",
        hint: "s = r times theta.",
      },
      {
        front: "Worked example: Find the area of a sector with $r = 4$ and $\\theta = \\frac{\\pi}{2}$ radians.",
        back: "$A = \\frac{1}{2}r^2\\theta = \\frac{1}{2}(16)\\left(\\frac{\\pi}{2}\\right) = 4\\pi \\approx 12.57$ square units. This is a quarter circle.",
        hint: "Half r-squared theta.",
      },
      {
        front: "What is the perimeter of a sector?",
        back: "The perimeter equals the arc length plus the two radii: $P = s + 2r = r\\theta + 2r$ (with $\\theta$ in radians). Do not forget the two straight edges.",
        hint: "Arc plus two radii.",
      },
      {
        front: "How do you find a central angle given arc length and radius?",
        back: "Rearrange $s = r\\theta$ to get $\\theta = \\frac{s}{r}$ (in radians). For example, an arc of length 10 on a radius-5 circle subtends $\\theta = \\frac{10}{5} = 2$ radians.",
        hint: "theta = s/r.",
      },
      {
        front: "What is the relationship between linear and angular speed?",
        back: "$v = r\\omega$, where $v$ is linear speed, $r$ is radius, and $\\omega$ is angular speed in radians per unit time. A point farther from the center moves faster linearly for the same angular speed.",
        hint: "v = r omega.",
      },
      {
        front: "Common trap: What happens if you use degrees in $s = r\\theta$?",
        back: "You get a wrong answer. The formulas $s = r\\theta$ and $A = \\frac{1}{2}r^2\\theta$ require $\\theta$ in radians. Convert degrees to radians first, or use the degree-based fraction-of-circle formulas instead.",
        hint: "Radian-only formulas.",
      },
      {
        front: "How do you find the area of a segment (region between a chord and its arc)?",
        back: "Subtract the triangle area from the sector area: $A_{\\text{segment}} = \\frac{1}{2}r^2\\theta - \\frac{1}{2}r^2\\sin\\theta = \\frac{1}{2}r^2(\\theta - \\sin\\theta)$, with $\\theta$ in radians.",
        hint: "Sector minus triangle.",
      },
    ],
  },
  {
    slug: "wh-dar-al-islam",
    cards: [
      {
        front: "What does the term Dar al-Islam mean?",
        back: "Dar al-Islam ('House of Islam' or 'abode of Islam') refers to the regions where Islam was the dominant religion and Islamic law and culture prevailed. By the post-classical era it spanned from Spain across North Africa and the Middle East into Central and South Asia.",
        hint: "House of Islam.",
      },
      {
        front: "What were the Five Pillars of Islam?",
        back: "The Five Pillars are the declaration of faith (shahada), prayer five times daily (salat), almsgiving (zakat), fasting during Ramadan (sawm), and pilgrimage to Mecca (hajj). They form the core religious obligations of Muslims.",
        hint: "Faith, prayer, charity, fasting, pilgrimage.",
      },
      {
        front: "How did the split between Sunni and Shia Islam originate?",
        back: "The division arose over who should succeed Muhammad as leader (caliph). Sunnis accepted leadership by qualified community-chosen caliphs, while Shia held that leadership belonged to Muhammad's bloodline through his son-in-law Ali.",
        hint: "Dispute over succession.",
      },
      {
        front: "What was the significance of the Abbasid Caliphate's Baghdad?",
        back: "Under the Abbasids (750-1258), Baghdad became a major center of trade, administration, and learning, home to the House of Wisdom where scholars translated and advanced Greek, Persian, and Indian knowledge in math, medicine, and astronomy.",
        hint: "House of Wisdom.",
      },
      {
        front: "How did Islam spread across Afro-Eurasia in the post-classical period?",
        back: "Islam spread through military conquest, but increasingly through trade networks (trans-Saharan and Indian Ocean), the work of Sufi missionaries who adapted to local cultures, and intermarriage. Conversion was often gradual and voluntary.",
        hint: "Trade, Sufis, and conquest.",
      },
      {
        front: "What role did Sufism play in spreading Islam?",
        back: "Sufism, the mystical branch of Islam emphasizing a personal connection to God, made the faith more accessible by blending with local traditions. Sufi missionaries were especially effective in spreading Islam to South and Southeast Asia and sub-Saharan Africa.",
        hint: "Mystical, adaptable missionaries.",
      },
      {
        front: "How were non-Muslims (dhimmi) treated under Islamic rule?",
        back: "Christians and Jews, as 'People of the Book,' were granted protected dhimmi status: they could practice their religion in exchange for paying a special tax (jizya). This relative tolerance facilitated stability and conversion over time.",
        hint: "People of the Book, jizya tax.",
      },
      {
        front: "What were the major contributions of Islamic scholars in math and science?",
        back: "Islamic scholars developed algebra (al-Khwarizmi), advanced trigonometry and optics, refined the astrolabe, preserved and expanded Greek philosophy (Ibn Rushd/Averroes, Ibn Sina/Avicenna), and transmitted Hindu-Arabic numerals to Europe.",
        hint: "Algebra, optics, medicine.",
      },
      {
        front: "What was the importance of trade to the Islamic world?",
        back: "The Islamic world sat at the crossroads of Afro-Eurasian trade, controlling key routes. Common language (Arabic), religion, and law facilitated commerce, and innovations like credit, banking, and the use of the dhow ship expanded long-distance trade.",
        hint: "Crossroads of trade routes.",
      },
      {
        front: "How did the role of women vary in Dar al-Islam?",
        back: "Quranic teachings granted women rights to inheritance, property, and divorce that exceeded many contemporary societies, though practices varied by region and class and patriarchal customs often limited those rights in daily life.",
        hint: "Legal rights vs. local custom.",
      },
      {
        front: "What ended the Abbasid Caliphate, and what followed?",
        back: "The Mongols sacked Baghdad in 1258, ending Abbasid political dominance. Islamic political power later fragmented and revived under new states such as the Ottomans, Safavids, and Mughals (the Islamic gunpowder empires).",
        hint: "Mongols, 1258.",
      },
      {
        front: "Common trap: Was Dar al-Islam a single unified political state?",
        back: "No. While it shared a common religion, language of scholarship (Arabic), and cultural connections, Dar al-Islam was politically fragmented into multiple caliphates, sultanates, and kingdoms, especially after the early caliphates declined.",
        hint: "Cultural unity, political division.",
      },
    ],
  },
  {
    slug: "apush-colonial-america",
    cards: [
      {
        front: "What distinguished the Chesapeake colonies (Virginia, Maryland) economically and socially?",
        back: "The Chesapeake economy centered on cash-crop tobacco grown on large plantations, relying first on indentured servants and later on enslaved Africans. Society was marked by high mortality, scarce women, and stark wealth inequality.",
        hint: "Tobacco and indentured servants.",
      },
      {
        front: "How did New England colonies differ from the Chesapeake?",
        back: "New England, settled largely by Puritan families seeking religious freedom, had a diversified economy (farming, fishing, shipbuilding, trade), tight-knit towns, healthier longer lives, and a strong emphasis on community and education.",
        hint: "Puritan families, mixed economy.",
      },
      {
        front: "What was the headright system?",
        back: "The headright system granted 50 acres of land to anyone who paid for their own or another person's passage to the colonies. It encouraged immigration and concentrated land among wealthy planters who imported many indentured servants.",
        hint: "50 acres per immigrant.",
      },
      {
        front: "What was the significance of Bacon's Rebellion (1676)?",
        back: "Nathaniel Bacon led frontier colonists against Virginia's governor over Indian policy and elite privilege. The rebellion exposed class tensions and accelerated the shift from indentured servitude to racially based African slavery as a more controllable labor source.",
        hint: "1676 Virginia uprising; shift to slavery.",
      },
      {
        front: "What was the Mayflower Compact (1620)?",
        back: "The Mayflower Compact was an agreement signed by the Pilgrims to govern themselves by majority rule for the colony's good. It was an early example of self-government and consent-based political authority in the colonies.",
        hint: "Pilgrim self-government pact.",
      },
      {
        front: "What was the triangular trade and the Middle Passage?",
        back: "The triangular trade linked Europe, Africa, and the Americas, exchanging manufactured goods, enslaved Africans, and raw materials. The Middle Passage was the brutal Atlantic crossing of enslaved Africans, marked by horrific conditions and high mortality.",
        hint: "Three-continent trade network.",
      },
      {
        front: "What was mercantilism and how did the Navigation Acts enforce it?",
        back: "Mercantilism held that colonies existed to enrich the mother country by supplying raw materials and buying finished goods. The Navigation Acts required colonial trade to pass through England on English ships, restricting colonial commerce.",
        hint: "Colonies enrich the mother country.",
      },
      {
        front: "What was the Great Awakening and its effects?",
        back: "The Great Awakening (1730s-40s) was a wave of emotional religious revivals led by preachers like Jonathan Edwards and George Whitefield. It challenged established churches, emphasized personal faith, and fostered a sense of shared colonial identity.",
        hint: "1730s-40s religious revival.",
      },
      {
        front: "How did the practice of salutary neglect shape the colonies?",
        back: "Salutary neglect was Britain's loose enforcement of trade laws before 1763, which let colonies develop self-governing assemblies and economic independence. Its later reversal after the French and Indian War angered colonists.",
        hint: "Loose enforcement before 1763.",
      },
      {
        front: "What were the differences among the Southern, Middle, and New England colonial regions?",
        back: "Southern colonies relied on plantation cash crops and slavery; Middle colonies (the 'breadbasket') had grain farming, ethnic and religious diversity, and trade; New England had subsistence farming, fishing, commerce, and Puritan town life.",
        hint: "South, Middle, New England.",
      },
      {
        front: "How did relations between colonists and Native Americans evolve?",
        back: "Early cooperation and trade gave way to conflict over land as colonies expanded, producing wars such as the Pequot War and King Philip's War (1675-76), which devastated Native populations and entrenched colonial dominance.",
        hint: "Trade to land conflict.",
      },
      {
        front: "Common trap: Did all English colonies share the same motive for settlement?",
        back: "No. Motives varied: the Chesapeake sought profit (tobacco, gold), New England sought religious freedom for Puritans, Pennsylvania was a Quaker haven, and Georgia began as a debtor refuge and military buffer. These differences shaped each region's development.",
        hint: "Profit vs. religion vs. refuge.",
      },
    ],
  },
  {
    slug: "nmr-spectroscopy",
    cards: [
      {
        front: "What does NMR spectroscopy measure, and which nuclei are most common?",
        back: "Nuclear Magnetic Resonance spectroscopy measures the absorption of radiofrequency energy by nuclei in a magnetic field, revealing molecular structure. The most common nuclei studied are $^1$H (proton NMR) and $^{13}$C (carbon NMR).",
        hint: "1H and 13C.",
      },
      {
        front: "What is chemical shift, and what are its units?",
        back: "Chemical shift ($\\delta$) is the position of a signal relative to a reference (TMS at 0 ppm), measured in parts per million (ppm). It reflects the electronic environment: more deshielded nuclei appear at higher ppm (downfield).",
        hint: "Delta in ppm, TMS = 0.",
      },
      {
        front: "What does shielding versus deshielding mean in NMR?",
        back: "Shielded nuclei are surrounded by electron density that opposes the external field, requiring less frequency and appearing upfield (low ppm). Deshielded nuclei (near electronegative atoms or pi systems) appear downfield (high ppm).",
        hint: "Upfield = shielded; downfield = deshielded.",
      },
      {
        front: "What information does the number of signals in a $^1$H NMR spectrum give?",
        back: "The number of distinct signals equals the number of chemically nonequivalent sets of hydrogens (different environments). Equivalent protons (related by symmetry) produce a single signal.",
        hint: "Counts unique H environments.",
      },
      {
        front: "What does the integration (area under a peak) reveal in $^1$H NMR?",
        back: "Integration is proportional to the number of hydrogens producing that signal, giving the relative ratio of protons in each environment. It tells you how many of each type of hydrogen are present.",
        hint: "Relative H count.",
      },
      {
        front: "What is the n+1 rule for spin-spin splitting?",
        back: "A proton with $n$ equivalent neighboring (vicinal) protons is split into $n+1$ peaks (a multiplet). For example, 2 neighbors give a triplet (3 peaks). It reveals the number of adjacent hydrogens.",
        hint: "Peaks = neighbors + 1.",
      },
      {
        front: "Name the multiplets for n = 0, 1, 2, and 3 neighboring protons.",
        back: "n = 0 gives a singlet (1 peak), n = 1 gives a doublet (2 peaks), n = 2 gives a triplet (3 peaks), and n = 3 gives a quartet (4 peaks). Peak intensity ratios follow Pascal's triangle.",
        hint: "Singlet, doublet, triplet, quartet.",
      },
      {
        front: "What does the ethyl group (CH3CH2-) pattern look like in 1H NMR?",
        back: "The CH3 (3 H) couples to 2 neighbors, giving a triplet, while the CH2 (2 H) couples to 3 neighbors, giving a quartet. This classic triplet-quartet pattern with a 3:2 integration ratio signals an ethyl group.",
        hint: "Triplet + quartet, 3:2.",
      },
      {
        front: "What is a typical chemical shift range for aldehyde, aromatic, and alkane protons?",
        back: "Aldehyde H appears around 9-10 ppm (very deshielded), aromatic (benzene-ring) H around 6.5-8 ppm, and alkane (sp3 C-H) protons around 0.5-2 ppm (most shielded). Knowing ranges helps identify functional groups.",
        hint: "Aldehyde high, alkane low.",
      },
      {
        front: "Why is the coupling constant J useful, and what is it measured in?",
        back: "The coupling constant $J$ is the spacing (in Hz) between adjacent peaks of a multiplet, reflecting the strength of coupling between protons. Coupled protons share the same $J$ value, which helps match split signals.",
        hint: "Peak spacing in Hz.",
      },
      {
        front: "How does $^{13}$C NMR differ from $^1$H NMR in appearance?",
        back: "Standard (proton-decoupled) $^{13}$C NMR shows one singlet per unique carbon, with no spin-spin splitting among carbons and no useful integration, spanning a wider range (about 0-220 ppm). It simply counts distinct carbon environments.",
        hint: "Singlets, wide range, counts carbons.",
      },
      {
        front: "Worked example: How many $^1$H NMR signals does 1,4-dimethylbenzene (para-xylene) give?",
        back: "Two signals: one for the equivalent aromatic ring protons and one for the equivalent CH3 protons. The molecule's symmetry makes all aromatic H equivalent and both methyl groups equivalent.",
        hint: "Use symmetry.",
      },
      {
        front: "Common trap: Do exchangeable protons like O-H always show predictable splitting?",
        back: "No. O-H and N-H protons often appear as broad singlets and may not show clean splitting because of rapid proton exchange. Their chemical shift can also vary with concentration and solvent.",
        hint: "Broad, variable, exchangeable.",
      },
    ],
  },
];
