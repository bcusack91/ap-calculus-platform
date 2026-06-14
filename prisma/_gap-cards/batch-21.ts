export const batchCards: { slug: string; cards: { front: string; back: string; hint?: string }[] }[] = [
  {
    slug: "outliers-in-data",
    cards: [
      {
        front: "What is an outlier?",
        back: "An observation that is unusually far from the bulk of the data. Outliers can arise from real variability, measurement error, or data-entry mistakes, and they can strongly distort summary statistics.",
        hint: "A value that doesn't fit the pattern",
      },
      {
        front: "What is the 1.5 IQR rule for identifying outliers?",
        back: "A value is an outlier if it is below $Q_1 - 1.5 \\\\times IQR$ or above $Q_3 + 1.5 \\\\times IQR$, where $IQR = Q_3 - Q_1$. These boundaries are called the lower and upper fences.",
        hint: "Fences at 1.5 IQR beyond the quartiles",
      },
      {
        front: "Define IQR and how to compute it.",
        back: "The interquartile range $IQR = Q_3 - Q_1$ is the range of the middle 50% of the data. $Q_1$ is the median of the lower half and $Q_3$ is the median of the upper half.",
        hint: "Spread of the middle half",
      },
      {
        front: "Worked example: data have $Q_1 = 20$, $Q_3 = 40$. What are the outlier fences?",
        back: "$IQR = 40 - 20 = 20$, so $1.5 \\\\times IQR = 30$. Lower fence $= 20 - 30 = -10$; upper fence $= 40 + 30 = 70$. Any value below $-10$ or above $70$ is an outlier.",
        hint: "Fence = quartile +/- 1.5 IQR",
      },
      {
        front: "Which measures of center and spread are resistant to outliers?",
        back: "The median (center) and the IQR (spread) are resistant. The mean and standard deviation are NOT resistant and are pulled toward outliers.",
        hint: "Median and IQR are robust",
      },
      {
        front: "How does a single large outlier affect the mean versus the median?",
        back: "It pulls the mean strongly in its direction but barely moves the median. This is why a right-skewed distribution typically has mean > median.",
        hint: "Mean chases the outlier",
      },
      {
        front: "What is the z-score method for flagging outliers?",
        back: "Compute $z = \\\\frac{x - \\\\bar{x}}{s}$ for each value; observations with $|z| > 3$ (sometimes 2) are flagged as potential outliers. Best for roughly normal data.",
        hint: "Standardize; flag |z| > 3",
      },
      {
        front: "Why are outliers shown as separate points on a modified boxplot?",
        back: "A modified boxplot draws whiskers only to the most extreme non-outlier values (within the fences) and plots outliers individually, so the box and whiskers represent the typical spread accurately.",
        hint: "Whiskers stop at the fences",
      },
      {
        front: "How do outliers affect a least-squares regression line?",
        back: "An outlier in the y-direction inflates residuals and can lower $r$. An influential point (extreme in x) can dramatically change the slope. Always check whether removing it changes conclusions.",
        hint: "x-outliers = high leverage",
      },
      {
        front: "What is an influential point versus a regression outlier?",
        back: "A regression outlier has a large residual (far from the line). An influential point, usually with an extreme x-value, substantially changes the slope/intercept when removed; it may have a small residual.",
        hint: "Influential = changes the line",
      },
      {
        front: "Common trap: should you always delete outliers?",
        back: "No. Only remove an outlier if it is a verified error. Legitimate extreme values carry real information; deleting them without justification biases the analysis.",
        hint: "Investigate before deleting",
      },
      {
        front: "How do outliers relate to the shape of a distribution?",
        back: "Outliers often appear in the long tail of a skewed distribution. A few extreme high values create right skew; extreme low values create left skew.",
        hint: "Outliers live in the tails",
      },
      {
        front: "Which is more affected by outliers: range or IQR?",
        back: "The range (max minus min) is extremely sensitive because it uses the two most extreme values. The IQR ignores the outer 25% on each end, so it is resistant.",
        hint: "Range uses the extremes directly",
      },
    ],
  },
  {
    slug: "tests-means",
    cards: [
      {
        front: "When do you use a one-sample t-test for a mean?",
        back: "Use it to test a claim about a single population mean $\\\\mu$ when the population standard deviation is unknown (so you use the sample SD $s$), the data are quantitative, and conditions (random, normal/large, independent) are met.",
        hint: "Unknown sigma, one mean",
      },
      {
        front: "What is the test statistic for a one-sample t-test?",
        back: "$t = \\\\frac{\\\\bar{x} - \\\\mu_0}{s / \\\\sqrt{n}}$, where $\\\\bar{x}$ is the sample mean, $\\\\mu_0$ is the hypothesized mean, $s$ is the sample SD, and $n$ is the sample size. Degrees of freedom $= n - 1$.",
        hint: "(stat - hypothesized) / SE",
      },
      {
        front: "What are the three conditions for a t-test about a mean?",
        back: "Random: data from a random sample/experiment. Normal/Large: population normal OR $n \\\\geq 30$ (CLT) OR sample shows no strong skew/outliers. Independent: sampling with replacement or $n < 10\\\\%$ of the population.",
        hint: "Random, Normal/Large, 10%",
      },
      {
        front: "Why use the t-distribution instead of z for means?",
        back: "Because we estimate the population SD with $s$, adding extra uncertainty. The t-distribution is bell-shaped but has heavier tails; it approaches the normal curve as df increases.",
        hint: "Extra uncertainty from estimating sigma",
      },
      {
        front: "How do you state hypotheses for a two-sided test of a mean?",
        back: "$H_0: \\\\mu = \\\\mu_0$ versus $H_a: \\\\mu \\\\neq \\\\mu_0$. For one-sided, $H_a$ uses $<$ or $>$. Always define $\\\\mu$ in context.",
        hint: "Null is equality",
      },
      {
        front: "What is the form of a confidence interval for a mean?",
        back: "$\\\\bar{x} \\\\pm t^{*} \\\\cdot \\\\frac{s}{\\\\sqrt{n}}$, where $t^{*}$ is the critical value with $df = n - 1$ for the chosen confidence level. The margin of error is $t^{*} \\\\cdot \\\\frac{s}{\\\\sqrt{n}}$.",
        hint: "estimate +/- margin of error",
      },
      {
        front: "When do you use a two-sample t-test versus a paired t-test?",
        back: "Use two-sample for independent groups (two separate sets of subjects). Use paired (one-sample t on the differences) when data are matched pairs or repeated measures on the same subjects.",
        hint: "Paired = matched/before-after",
      },
      {
        front: "What is the paired t-test statistic?",
        back: "Compute the difference $d$ for each pair, then $t = \\\\frac{\\\\bar{d} - 0}{s_d / \\\\sqrt{n}}$ with $df = n - 1$, where $\\\\bar{d}$ and $s_d$ are the mean and SD of the differences and $n$ is the number of pairs.",
        hint: "One-sample t on the differences",
      },
      {
        front: "What is the two-sample t test statistic for comparing two means?",
        back: "$t = \\\\frac{(\\\\bar{x}_1 - \\\\bar{x}_2) - 0}{\\\\sqrt{\\\\frac{s_1^2}{n_1} + \\\\frac{s_2^2}{n_2}}}$. Use technology for df (or the conservative $df = \\\\min(n_1 - 1, n_2 - 1)$).",
        hint: "Difference of means over combined SE",
      },
      {
        front: "How do you make a decision using the p-value?",
        back: "If $p \\\\leq \\\\alpha$, reject $H_0$ (significant evidence for $H_a$). If $p > \\\\alpha$, fail to reject $H_0$. Never 'accept' $H_0$.",
        hint: "Small p rejects the null",
      },
      {
        front: "Worked example: $\\\\bar{x} = 52$, $\\\\mu_0 = 50$, $s = 6$, $n = 36$. Find the t statistic.",
        back: "$SE = 6 / \\\\sqrt{36} = 1$, so $t = (52 - 50)/1 = 2.0$ with $df = 35$. Compare to the t-distribution to find the p-value.",
        hint: "SE = s/sqrt(n)",
      },
      {
        front: "Common trap: what does a confidence interval tell you about a hypothesis test?",
        back: "For a two-sided test at level $\\\\alpha$, you reject $H_0: \\\\mu = \\\\mu_0$ exactly when $\\\\mu_0$ falls outside the $(1 - \\\\alpha)$ confidence interval.",
        hint: "Value outside CI = reject",
      },
      {
        front: "What is a Type I and Type II error in a test of means?",
        back: "Type I error: rejecting a true $H_0$ (probability $= \\\\alpha$). Type II error: failing to reject a false $H_0$ (probability $= \\\\beta$). Power $= 1 - \\\\beta$.",
        hint: "I = false alarm, II = missed effect",
      },
      {
        front: "How does increasing sample size affect a test of means?",
        back: "Larger $n$ shrinks the standard error $s/\\\\sqrt{n}$, narrowing intervals and increasing power (lower chance of Type II error). It makes the test more sensitive to small true differences.",
        hint: "Bigger n = more power",
      },
    ],
  },
  {
    slug: "apes-water-resources",
    cards: [
      {
        front: "What is an aquifer?",
        back: "An underground layer of permeable rock, sand, or gravel that stores and transmits groundwater. Aquifers are recharged by precipitation seeping down and are a major source of drinking and irrigation water.",
        hint: "Underground water storage",
      },
      {
        front: "What is the water table?",
        back: "The upper boundary of the saturated zone in an aquifer, below which all pore spaces are filled with water. It rises with recharge and falls with drought or heavy pumping.",
        hint: "Top of the saturated zone",
      },
      {
        front: "What percentage of Earth's water is fresh and accessible?",
        back: "About 97% of Earth's water is saltwater in oceans. Only ~3% is freshwater, and most of that is locked in ice caps and glaciers, leaving under 1% as accessible liquid freshwater.",
        hint: "Less than 1% usable",
      },
      {
        front: "What is the Ogallala (High Plains) Aquifer and why is it a concern?",
        back: "A massive aquifer under the U.S. Great Plains used heavily for irrigation. It is being drawn down far faster than it recharges (it holds 'fossil water'), threatening long-term agriculture.",
        hint: "Great Plains; overdrawn fossil water",
      },
      {
        front: "What is groundwater overdraft and what is one consequence?",
        back: "Withdrawing groundwater faster than recharge. Consequences include falling water tables, dry wells, and land subsidence (the ground sinks as pore spaces collapse).",
        hint: "Pumping faster than recharge",
      },
      {
        front: "What is saltwater intrusion?",
        back: "When overpumping of a coastal aquifer lowers the freshwater table, allowing saltwater to seep into the aquifer and contaminate wells, making the water undrinkable.",
        hint: "Ocean water invades coastal wells",
      },
      {
        front: "Compare furrow, spray, and drip irrigation by efficiency.",
        back: "Furrow (flood) irrigation is cheapest but wastes water (~60% efficient). Spray irrigation is moderate (~75%). Drip irrigation delivers water directly to roots and is most efficient (~90-95%) but costly.",
        hint: "Drip is most efficient",
      },
      {
        front: "What problems are associated with large dams and reservoirs?",
        back: "Dams flood land and displace people, block fish migration, trap sediment (starving downstream deltas), increase evaporation losses, and alter natural flow. Benefits include hydropower, flood control, and water storage.",
        hint: "Hydropower vs. ecosystem disruption",
      },
      {
        front: "What is the Colorado River allocation problem?",
        back: "The river is over-allocated among multiple states and Mexico under the Colorado River Compact; combined withdrawals often exceed flow so the river frequently no longer reaches the sea.",
        hint: "Over-allocated; runs dry",
      },
      {
        front: "What is desalination and what are its drawbacks?",
        back: "Removing salt from seawater (via reverse osmosis or distillation) to make freshwater. Drawbacks: high energy cost, expensive, and disposal of concentrated brine that can harm marine life.",
        hint: "Energy-intensive; brine waste",
      },
      {
        front: "What happened to the Aral Sea and why?",
        back: "It shrank dramatically after the Soviet Union diverted its feeder rivers (Amu Darya and Syr Darya) for cotton irrigation, causing collapsed fisheries, exposed salty seabed, and a harsher local climate.",
        hint: "Irrigation diversions drained it",
      },
      {
        front: "What is the difference between point and nonpoint source water pollution?",
        back: "Point source comes from a single identifiable location (e.g., a factory pipe or sewage outfall). Nonpoint source is diffuse runoff from many areas (e.g., agricultural fertilizer, urban storm runoff).",
        hint: "Pipe vs. diffuse runoff",
      },
      {
        front: "What is one way cities and farms can conserve water?",
        back: "Examples: drip irrigation, xeriscaping (drought-tolerant landscaping), fixing leaks, gray-water reuse, low-flow fixtures, and tiered/pricing incentives that charge more for higher use.",
        hint: "Efficiency and reuse",
      },
    ],
  },
  {
    slug: "apush-depression-wwii",
    cards: [
      {
        front: "What triggered the Great Depression in 1929?",
        back: "The stock market crash of October 1929, combined with underlying weaknesses: overproduction, unequal wealth distribution, buying on margin, bank failures, and tight credit, which spiraled into a decade-long collapse.",
        hint: "1929 crash plus structural weakness",
      },
      {
        front: "How did Herbert Hoover respond to the Depression?",
        back: "Initially with limited, voluntary measures and faith in 'rugged individualism,' later creating the Reconstruction Finance Corporation (1932) to lend to banks and businesses. He resisted direct federal relief, fueling public anger.",
        hint: "Limited federal action; RFC",
      },
      {
        front: "What was the Bonus Army?",
        back: "WWI veterans who marched on Washington in 1932 demanding early payment of promised bonuses. Hoover ordered the army (under MacArthur) to disperse them, damaging his image.",
        hint: "1932 veterans' march, dispersed",
      },
      {
        front: "What were the 'Three Rs' of FDR's New Deal?",
        back: "Relief (immediate aid for the unemployed and poor), Recovery (restore the economy to normal), and Reform (long-term fixes to prevent another depression).",
        hint: "Relief, Recovery, Reform",
      },
      {
        front: "Name three major New Deal programs and their purposes.",
        back: "CCC (jobs in conservation), TVA (electricity and development for the Tennessee Valley), Social Security Act (pensions and unemployment insurance), WPA (public works jobs), FDIC (insured bank deposits).",
        hint: "Alphabet agencies",
      },
      {
        front: "What was the significance of the Social Security Act of 1935?",
        back: "It created a federal safety net providing old-age pensions, unemployment insurance, and aid to dependent children, marking a lasting expansion of the federal government's social role.",
        hint: "Pensions and unemployment insurance",
      },
      {
        front: "What was the court-packing plan?",
        back: "FDR's 1937 proposal to add up to six Supreme Court justices after the Court struck down New Deal laws. It failed and hurt his political standing, though the Court soon became more favorable.",
        hint: "Adding justices; failed",
      },
      {
        front: "What was the policy of isolationism and the Neutrality Acts?",
        back: "In the 1930s the U.S. sought to stay out of foreign wars. The Neutrality Acts (1935-1937) banned arms sales and loans to belligerents to avoid the entanglements blamed for WWI involvement.",
        hint: "Stay out of foreign wars",
      },
      {
        front: "What was the Lend-Lease Act of 1941?",
        back: "It allowed the U.S. to supply arms and materials to Allies (especially Britain and later the USSR) without immediate payment, effectively ending strict neutrality before U.S. entry into the war.",
        hint: "Arsenal of Democracy aid",
      },
      {
        front: "What event brought the U.S. into World War II?",
        back: "Japan's surprise attack on Pearl Harbor, Hawaii, on December 7, 1941. The next day the U.S. declared war on Japan; Germany and Italy then declared war on the U.S.",
        hint: "Pearl Harbor, Dec 7, 1941",
      },
      {
        front: "How did WWII affect the U.S. home front and economy?",
        back: "It ended the Depression through massive war production, brought millions of women ('Rosie the Riveter') and minorities into the workforce, and led to rationing, war bonds, and full employment.",
        hint: "War production ended the Depression",
      },
      {
        front: "What was Executive Order 9066?",
        back: "FDR's 1942 order authorizing the forced internment of about 120,000 Japanese Americans (most U.S. citizens) in camps, upheld in Korematsu v. United States (1944) and later acknowledged as a grave injustice.",
        hint: "Japanese American internment",
      },
      {
        front: "What was the Double V campaign?",
        back: "An effort by African Americans during WWII to fight for victory over fascism abroad AND victory over racial discrimination at home, foreshadowing the postwar civil rights movement.",
        hint: "Victory abroad and at home",
      },
      {
        front: "Why did the U.S. drop atomic bombs on Hiroshima and Nagasaki?",
        back: "In August 1945 Truman ordered the bombings to force Japan's surrender and avoid a costly invasion. Japan surrendered, ending WWII, but the decision remains historically debated.",
        hint: "End the war, avoid invasion",
      },
    ],
  },
  {
    slug: "wh-developments-east-asia",
    cards: [
      {
        front: "How did the Song Dynasty (960-1279) demonstrate economic innovation?",
        back: "Through a commercial revolution: paper money, the magnetic compass, gunpowder, Champa rice (allowing population growth), expanded canals and trade, and proto-industrial iron and steel production.",
        hint: "Commercial revolution and inventions",
      },
      {
        front: "What was the civil service examination system in China?",
        back: "A merit-based exam, rooted in Confucian classics, used to select government officials. It created a scholar-gentry bureaucracy and reinforced Confucian values, though access favored the wealthy who could afford study.",
        hint: "Merit exams on Confucian texts",
      },
      {
        front: "What is Neo-Confucianism?",
        back: "A revived and reinterpreted Confucianism (prominent in the Song) blending Confucian ethics with Buddhist and Daoist ideas about the cosmos and self-cultivation. It shaped East Asian society for centuries.",
        hint: "Confucianism + Buddhist/Daoist ideas",
      },
      {
        front: "How did Chinese culture influence Japan, Korea, and Vietnam?",
        back: "These societies adopted Chinese writing, Confucianism, Buddhism, and bureaucratic models, while adapting them locally. For example, Japan borrowed Chinese characters but developed its own political and cultural forms.",
        hint: "Sinification with local adaptation",
      },
      {
        front: "What was the Mandate of Heaven?",
        back: "The Chinese belief that Heaven grants emperors the right to rule based on just governance. Natural disasters, rebellions, or defeats were seen as signs the mandate was lost, justifying a new dynasty (the dynastic cycle).",
        hint: "Divine right tied to good rule",
      },
      {
        front: "Describe the rise of the Mongol Yuan Dynasty in China.",
        back: "Kublai Khan completed the Mongol conquest and founded the Yuan Dynasty (1271-1368). Mongols ruled China while keeping ethnic hierarchies, promoting trade along the Silk Roads, and allowing foreigners like Marco Polo to visit.",
        hint: "Kublai Khan's Mongol rule",
      },
      {
        front: "What were Japanese samurai and the bushido code?",
        back: "Samurai were warrior nobles serving daimyo lords under a feudal system. Bushido was their code of honor, loyalty, discipline, and martial skill, comparable to European chivalry.",
        hint: "Warrior class, honor code",
      },
      {
        front: "What characterized Japanese feudalism?",
        back: "A decentralized system in which a figurehead emperor and shogun sat atop daimyo (regional lords) who commanded samurai, supported by peasants. The shogun (military leader) held real power.",
        hint: "Shogun, daimyo, samurai",
      },
      {
        front: "What was the Ming Dynasty's policy toward maritime exploration?",
        back: "Early Ming launched Zheng He's massive treasure-fleet voyages (1405-1433) across the Indian Ocean. Later the Ming halted these expeditions and turned inward, restricting overseas trade.",
        hint: "Zheng He, then isolation",
      },
      {
        front: "Why did China later adopt a more isolationist stance?",
        back: "After Zheng He's voyages, leaders viewed China as self-sufficient ('Middle Kingdom') and saw expensive expeditions and foreign contact as wasteful or threatening, redirecting resources inward (e.g., the Great Wall).",
        hint: "Self-sufficient Middle Kingdom",
      },
      {
        front: "How did Buddhism spread and change in East Asia?",
        back: "Buddhism traveled the Silk Roads from India into China, Korea, and Japan, developing branches like Chan/Zen. It blended with local traditions, though the Tang state at times persecuted it as a foreign religion.",
        hint: "Silk Road spread; Zen branch",
      },
      {
        front: "What was the tribute system in East Asia?",
        back: "A system in which neighboring states acknowledged Chinese superiority and sent tribute/gifts in exchange for trade rights, recognition, and gifts in return, reinforcing China's regional dominance.",
        hint: "Acknowledge China for trade",
      },
      {
        front: "How did foot binding reflect Song-era social changes?",
        back: "The practice of binding elite women's feet, which spread under the Song, symbolized status and restricted women's mobility, reflecting tightening patriarchal Neo-Confucian gender roles.",
        hint: "Status symbol; restricted women",
      },
    ],
  },
  {
    slug: "aas-great-migration-harlem",
    cards: [
      {
        front: "What was the Great Migration?",
        back: "The movement of roughly six million African Americans from the rural South to cities in the North, Midwest, and West, primarily from the 1910s through the 1970s, reshaping American demographics and culture.",
        hint: "South to North, ~6 million people",
      },
      {
        front: "What 'push' factors drove the Great Migration?",
        back: "Racial violence and lynching, Jim Crow segregation, disenfranchisement, sharecropping debt, and the boll weevil's destruction of cotton crops pushed Black Southerners to leave.",
        hint: "Jim Crow, violence, boll weevil",
      },
      {
        front: "What 'pull' factors drew migrants to Northern cities?",
        back: "Industrial jobs (especially after WWI labor shortages), higher wages, the chance to vote, better schools, and the hope of escaping the worst racial violence drew migrants northward.",
        hint: "Jobs, voting, opportunity",
      },
      {
        front: "What role did the Chicago Defender play in the Great Migration?",
        back: "This influential Black newspaper, distributed in the South partly by Pullman porters, encouraged migration with job listings, train schedules, and accounts of Northern opportunity.",
        hint: "Black newspaper urging migration",
      },
      {
        front: "What was the Harlem Renaissance?",
        back: "A flourishing of African American art, literature, music, and intellectual life centered in Harlem, New York, in the 1920s-1930s, celebrating Black identity, culture, and creativity.",
        hint: "1920s Black cultural flowering",
      },
      {
        front: "Who was Langston Hughes?",
        back: "A leading Harlem Renaissance poet and writer who celebrated everyday Black life and jazz rhythms in works like 'The Negro Speaks of Rivers' and the essay 'The Negro Artist and the Racial Mountain.'",
        hint: "Poet of the Harlem Renaissance",
      },
      {
        front: "What is the concept of the 'New Negro'?",
        back: "Popularized by Alain Locke's 1925 anthology 'The New Negro,' it described a self-assured, racially proud African American identity that rejected old stereotypes and asserted full cultural and political citizenship.",
        hint: "Alain Locke; racial pride",
      },
      {
        front: "Who was Zora Neale Hurston and what did she contribute?",
        back: "A writer and anthropologist of the Harlem Renaissance who collected Black Southern folklore and wrote the novel 'Their Eyes Were Watching God,' centering Black women's voices and vernacular.",
        hint: "Their Eyes Were Watching God",
      },
      {
        front: "How did jazz and the blues shape Harlem Renaissance culture?",
        back: "African American musical forms born in the South flourished in Harlem clubs (like the Cotton Club). Artists like Duke Ellington and Louis Armstrong made jazz a defining national sound of the era.",
        hint: "Jazz Age soundtrack",
      },
      {
        front: "Who was Marcus Garvey and what did he advocate?",
        back: "A Jamaican-born leader of the UNIA who promoted Black nationalism, economic self-reliance, racial pride, and Pan-Africanism (a 'Back to Africa' vision), reaching a mass following in the 1920s.",
        hint: "UNIA; Black nationalism",
      },
      {
        front: "What was Pan-Africanism in this era?",
        back: "A movement, advanced by figures like W.E.B. Du Bois and Marcus Garvey, asserting the shared heritage and solidarity of people of African descent worldwide and resisting colonialism and racism.",
        hint: "Global Black solidarity",
      },
      {
        front: "How did the Great Migration affect Northern race relations?",
        back: "It increased Black political and economic power but also sparked white backlash, including discriminatory housing (redlining), workplace tension, and race riots such as the Red Summer of 1919.",
        hint: "Power and backlash; Red Summer",
      },
      {
        front: "What lasting cultural impact did the Harlem Renaissance have?",
        back: "It established a body of Black literature, art, and music that asserted dignity and complexity, influenced later movements like the Black Arts Movement, and shaped American culture broadly.",
        hint: "Foundation for later Black art",
      },
    ],
  },
  {
    slug: "infrared-mass-spectrometry",
    cards: [
      {
        front: "What molecular property does infrared (IR) spectroscopy detect?",
        back: "It detects molecular vibrations (bond stretching and bending). Bonds absorb IR light at frequencies that match their vibrational energies, so IR identifies functional groups by their characteristic absorptions.",
        hint: "Bond vibrations = functional groups",
      },
      {
        front: "In what units is an IR spectrum's x-axis given, and what range matters?",
        back: "Wavenumber in $cm^{-1}$, usually plotted from about 4000 to 600 $cm^{-1}$. Higher wavenumber = higher energy. The diagnostic functional-group region is roughly 4000-1500 $cm^{-1}$.",
        hint: "Wavenumbers, 4000-600",
      },
      {
        front: "What IR absorption identifies an O-H (alcohol) bond?",
        back: "A broad, strong absorption around 3200-3550 $cm^{-1}$. Its broadness (due to hydrogen bonding) distinguishes it from sharper N-H or C-H peaks.",
        hint: "Broad band near 3300",
      },
      {
        front: "What is the characteristic IR absorption of a C=O (carbonyl) bond?",
        back: "A strong, sharp absorption around 1700-1750 $cm^{-1}$. The carbonyl stretch is one of the most reliable and diagnostic peaks in IR spectroscopy.",
        hint: "Strong peak near 1700",
      },
      {
        front: "How does a carboxylic acid appear in IR?",
        back: "It shows BOTH a very broad O-H stretch (~2500-3300 $cm^{-1}$, often overlapping C-H) AND a strong C=O stretch (~1710 $cm^{-1}$). The combination is diagnostic.",
        hint: "Broad O-H + carbonyl together",
      },
      {
        front: "What does the 'fingerprint region' of an IR spectrum refer to?",
        back: "The region below ~1500 $cm^{-1}$, which has many complex bands unique to each molecule. It is used to confirm a compound's identity by comparison rather than to assign individual groups.",
        hint: "Below 1500; unique pattern",
      },
      {
        front: "What does mass spectrometry (MS) measure?",
        back: "The mass-to-charge ratio ($m/z$) of ionized molecules and their fragments. It reveals molecular mass and structural clues from fragmentation patterns.",
        hint: "Measures m/z of ions",
      },
      {
        front: "What is the molecular ion (M+) peak in mass spectrometry?",
        back: "The peak from the intact molecule after losing one electron. Its $m/z$ equals the molecule's molecular mass, so it identifies the molar mass of the compound.",
        hint: "M+ gives molecular mass",
      },
      {
        front: "What is the base peak in a mass spectrum?",
        back: "The tallest peak, assigned a relative abundance of 100%. It corresponds to the most stable (most abundant) cation fragment; all other peaks are scaled relative to it.",
        hint: "Tallest peak = 100%",
      },
      {
        front: "What does an M+2 peak about one-third the height of M+ indicate?",
        back: "The presence of chlorine. Chlorine's isotopes ($^{35}Cl$ and $^{37}Cl$) occur in roughly a 3:1 ratio, producing an M+2 peak about one-third as tall as M+.",
        hint: "M:M+2 ~ 3:1 means Cl",
      },
      {
        front: "What does an M+2 peak nearly equal to M+ indicate?",
        back: "The presence of bromine. Bromine's isotopes ($^{79}Br$ and $^{81}Br$) occur in roughly a 1:1 ratio, giving M and M+2 peaks of nearly equal height.",
        hint: "M:M+2 ~ 1:1 means Br",
      },
      {
        front: "Worked example: a molecular ion at $m/z = 78$ has an M+2 of similar height. What might it contain?",
        back: "The roughly 1:1 M/M+2 pattern suggests bromine. For instance, $C_3H_7Br$ (M = 122) or a smaller Br-containing ion; the key is recognizing the 1:1 isotope signature points to Br.",
        hint: "Equal M+2 height = bromine",
      },
      {
        front: "How are IR and MS used together to identify an unknown?",
        back: "MS gives the molecular mass and fragment clues; IR reveals which functional groups are present. Combining them (often with NMR) narrows down and confirms the structure.",
        hint: "Mass + functional groups",
      },
      {
        front: "Common trap: does a strong, broad ~3300 band always mean an alcohol?",
        back: "No. A broad band near 3300 $cm^{-1}$ could be O-H (alcohol/acid) or N-H (amine/amide). Check for an accompanying C=O and the band's exact shape to distinguish them.",
        hint: "O-H vs N-H both absorb ~3300",
      },
    ],
  },
  {
    slug: "genetics-behavior",
    cards: [
      {
        front: "What is behavioral genetics?",
        back: "The study of how genes and environment interact to influence behavior and psychological traits. It seeks to estimate the relative contributions of heredity and experience.",
        hint: "Genes + environment shape behavior",
      },
      {
        front: "What is heritability?",
        back: "The proportion of variation in a trait within a population that is attributable to genetic differences. It ranges from 0 to 1 and applies to populations, NOT to individuals.",
        hint: "Genetic share of trait variation",
      },
      {
        front: "Common trap: what does heritability NOT mean?",
        back: "It does not mean a trait is fixed or unchangeable, and it says nothing about a single person. A heritability of 0.5 does not mean a person's trait is '50% genetic.'",
        hint: "Population variation, not individuals",
      },
      {
        front: "Why are twin studies useful in behavioral genetics?",
        back: "Identical (monozygotic) twins share ~100% of their genes; fraternal (dizygotic) twins share ~50%. Greater similarity in identical twins suggests a genetic influence on the trait.",
        hint: "Compare identical vs. fraternal",
      },
      {
        front: "What do adoption studies reveal?",
        back: "By comparing adopted children to their biological versus adoptive parents, researchers separate genetic from environmental influences: similarity to biological parents implies genetic effects; similarity to adoptive parents implies environmental effects.",
        hint: "Biological vs. adoptive comparison",
      },
      {
        front: "What is the difference between genotype and phenotype?",
        back: "Genotype is an organism's genetic makeup (its alleles). Phenotype is the observable trait or behavior, resulting from the interaction of genotype with the environment.",
        hint: "Genes vs. observable traits",
      },
      {
        front: "What is gene-environment interaction?",
        back: "When the effect of genes depends on the environment (and vice versa). For example, a genetic predisposition to depression may emerge only under significant stress (a diathesis-stress model).",
        hint: "Genes' effect depends on environment",
      },
      {
        front: "What is epigenetics?",
        back: "The study of how environmental factors can switch genes on or off without changing the DNA sequence (e.g., via methylation). It explains how experience can leave lasting, sometimes heritable, molecular marks.",
        hint: "Environment turns genes on/off",
      },
      {
        front: "What is the nature vs. nurture debate, and where does modern science stand?",
        back: "It asks whether genes (nature) or environment (nurture) shape behavior. Modern consensus is that both interact continuously; nearly all traits arise from gene-environment interplay.",
        hint: "Both interact, not either/or",
      },
      {
        front: "How does the heritability of a trait change with environment?",
        back: "When the environment is uniform, more of the remaining variation is genetic, so heritability rises. When environments vary widely, environmental variation increases and measured heritability can fall.",
        hint: "Uniform environment raises heritability",
      },
      {
        front: "What is the diathesis-stress model?",
        back: "A model in which a predisposition (diathesis), often genetic, combines with environmental stress to produce a disorder. Neither factor alone is sufficient; their combination triggers the outcome.",
        hint: "Vulnerability + stress = disorder",
      },
      {
        front: "What is the evolutionary perspective on behavior?",
        back: "It explains behaviors and traits as adaptations that increased survival and reproductive success in ancestral environments, shaped by natural selection. It complements behavioral genetics by asking 'why' a trait evolved.",
        hint: "Natural selection shaped behavior",
      },
      {
        front: "How can a single gene rarely explain a complex behavior?",
        back: "Most behavioral traits are polygenic (influenced by many genes, each with a small effect) and also shaped by environment, so no single 'gene for' a complex behavior exists.",
        hint: "Polygenic, not one gene",
      },
    ],
  },
];
