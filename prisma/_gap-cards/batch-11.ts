export const batchCards: { slug: string; cards: { front: string; back: string; hint?: string }[] }[] = [
  {
    slug: "displaying-distributions-graphs",
    cards: [
      {
        front: "What four features should you always describe when summarizing a distribution from a graph?",
        back: "Shape, Center, Spread, and unusual features (outliers, gaps, clusters). The mnemonic SOCS (Shape, Outliers, Center, Spread) captures this. Always describe these in context with units.",
        hint: "SOCS",
      },
      {
        front: "What graphs are appropriate for categorical (qualitative) data?",
        back: "Bar charts and pie charts. Bars have gaps between them because categories are distinct; the height shows frequency or relative frequency. Pie charts show parts of a whole as proportions of 360 degrees.",
      },
      {
        front: "What graphs are appropriate for quantitative data?",
        back: "Dotplots, stemplots (stem-and-leaf), histograms, and boxplots. Bars in a histogram touch (no gaps) because the variable is continuous along the x-axis.",
        hint: "Bars touch.",
      },
      {
        front: "How do you describe the shape of a distribution?",
        back: "By symmetry and modality. Shapes include symmetric, skewed left (tail points left toward small values), skewed right (tail points right toward large values), unimodal, bimodal, or uniform.",
      },
      {
        front: "In a skewed-right distribution, how do the mean and median compare?",
        back: "The mean is greater than the median. The long right tail (large outliers) pulls the mean toward the tail, while the median resists. Skewed left: mean less than median.",
        hint: "The mean chases the tail.",
      },
      {
        front: "What is a stemplot (stem-and-leaf plot) good for?",
        back: "Showing the shape of a small data set while retaining every individual value. The leading digits form stems and the last digit forms leaves. A back-to-back stemplot compares two groups.",
      },
      {
        front: "What does a boxplot (box-and-whisker plot) display?",
        back: "The five-number summary: minimum, $Q_1$, median, $Q_3$, maximum. The box spans $Q_1$ to $Q_3$ (the IQR), a line marks the median, and whiskers extend to the most extreme non-outlier values.",
      },
      {
        front: "What is the 1.5 x IQR rule for identifying outliers?",
        back: "A value is an outlier if it is below $Q_1 - 1.5 \\\\times IQR$ or above $Q_3 + 1.5 \\\\times IQR$, where $IQR = Q_3 - Q_1$. On a modified boxplot, outliers are plotted as separate points.",
        hint: "Fences at 1.5 IQR.",
      },
      {
        front: "Worked example: Data have $Q_1 = 20$ and $Q_3 = 32$. Is 52 an outlier?",
        back: "$IQR = 32 - 20 = 12$. Upper fence $= 32 + 1.5(12) = 32 + 18 = 50$. Since $52 > 50$, yes, 52 is an outlier.",
      },
      {
        front: "Common trap: choosing histogram bin width.",
        back: "Too few bins (very wide) hides shape; too many bins (very narrow) makes data look noisy. Always check that classes have equal width and report the interval, since changing bins can change apparent shape.",
      },
      {
        front: "What is a relative frequency histogram, and why use it?",
        back: "It plots proportions (frequency divided by total) instead of counts. Use it to compare two data sets of different sizes fairly, since the bar heights are on a common 0-to-1 scale.",
      },
      {
        front: "How do you compare two distributions on the AP exam?",
        back: "Use explicit comparative language (greater than, less than, similar) for center and spread, and reference specific values in context. Comparing boxplots side by side is a common task.",
        hint: "Use comparison words explicitly.",
      },
      {
        front: "What does a cumulative relative frequency graph (ogive) show?",
        back: "The accumulated proportion of data at or below each value, rising from 0 to 1. Read it to estimate percentiles: the y-value at a given x tells you the percentile of that x.",
      },
    ],
  },
  {
    slug: "aromatic-compounds-benzene",
    cards: [
      {
        front: "What is the structure of benzene, $C_6H_6$?",
        back: "A planar six-membered carbon ring with one hydrogen per carbon. All six C-C bonds are identical (intermediate between single and double), explained by delocalization of six pi electrons over the ring.",
        hint: "Delocalized pi system.",
      },
      {
        front: "State Huckel's rule for aromaticity.",
        back: "A ring is aromatic if it is cyclic, planar, fully conjugated, and contains $4n + 2$ pi electrons (n = 0, 1, 2, ...). Benzene has 6 pi electrons ($n = 1$), so it is aromatic.",
        hint: "$4n + 2$ pi electrons.",
      },
      {
        front: "What is the difference between aromatic, antiaromatic, and nonaromatic?",
        back: "Aromatic: cyclic, planar, conjugated, $4n + 2$ pi electrons (extra stable). Antiaromatic: those same structural criteria but $4n$ pi electrons (destabilized). Nonaromatic: not cyclic/planar/fully conjugated.",
      },
      {
        front: "Why does benzene undergo substitution rather than addition?",
        back: "Addition would destroy the aromatic ring and its stabilization (resonance/aromatic stabilization energy). Electrophilic aromatic substitution replaces an H, preserving the aromatic system.",
        hint: "Preserve aromaticity.",
      },
      {
        front: "What are the general steps of electrophilic aromatic substitution (EAS)?",
        back: "1) An electrophile is generated. 2) The pi system attacks it, forming a resonance-stabilized arenium (sigma) cation intermediate. 3) Loss of a proton restores aromaticity.",
      },
      {
        front: "Name the five classic EAS reactions and their electrophiles.",
        back: "Halogenation ($X^+$ from $X_2$/$FeX_3$), nitration ($NO_2^+$ from $HNO_3$/$H_2SO_4$), sulfonation ($SO_3$/$H_2SO_4$), Friedel-Crafts alkylation ($R^+$, $RX$/$AlCl_3$), and Friedel-Crafts acylation ($RCO^+$, $RCOCl$/$AlCl_3$).",
      },
      {
        front: "What do activating, ortho/para-directing groups have in common?",
        back: "They donate electron density into the ring (by resonance or induction), e.g., -OH, -OR, -NH2, -R. They speed up EAS and steer the new group to the ortho and para positions.",
        hint: "Electron donors.",
      },
      {
        front: "Which groups are deactivating and meta-directing?",
        back: "Electron-withdrawing groups such as -NO2, -C=O (carbonyl), -COOH, -SO3H, -CN, and -NR3+. They slow EAS and direct the incoming group to the meta position.",
      },
      {
        front: "Common trap: halogens as directors.",
        back: "Halogens (-F, -Cl, -Br, -I) are the exception: they are deactivating (withdraw by induction) yet ortho/para-directing (donate by resonance through lone pairs).",
        hint: "Deactivating but o/p-directing.",
      },
      {
        front: "What is a major limitation of Friedel-Crafts reactions?",
        back: "They fail on strongly deactivated rings (those bearing meta-directors like -NO2). Friedel-Crafts alkylation also suffers from carbocation rearrangements and polyalkylation; acylation avoids both.",
      },
      {
        front: "What naming positions do ortho, meta, and para refer to on a disubstituted benzene?",
        back: "Ortho = 1,2 (adjacent), meta = 1,3 (one carbon between), para = 1,4 (opposite). These prefixes locate the second substituent relative to the first.",
      },
      {
        front: "Why is the carbocation rearrangement a concern in Friedel-Crafts alkylation?",
        back: "The intermediate $R^+$ can rearrange (hydride or methyl shift) to a more stable carbocation, so a primary halide like 1-chloropropane can give an isopropyl-substituted product instead of n-propyl.",
      },
      {
        front: "What is the toluene molecule and why is -CH3 useful as a substituent?",
        back: "Toluene is methylbenzene ($C_6H_5CH_3$). The methyl group is a weak activator and ortho/para-director, so it readily allows further EAS at those positions.",
      },
    ],
  },
  {
    slug: "apush-democracy-expansion",
    cards: [
      {
        front: "What was Jacksonian Democracy?",
        back: "A political movement of the 1820s-1830s expanding democracy for white men by removing property requirements to vote, championing the 'common man,' and celebrating popular sovereignty under Andrew Jackson.",
        hint: "The common man.",
      },
      {
        front: "What was the spoils system?",
        back: "The practice, expanded under Jackson, of rewarding political supporters with government jobs. Defenders called it democratic rotation in office; critics said it bred corruption and incompetence.",
      },
      {
        front: "What was the significance of universal white male suffrage by the 1820s-1830s?",
        back: "States dropped property and taxpaying requirements, so nearly all adult white men could vote. This dramatically expanded the electorate but excluded women, most free Black men, and Native Americans.",
      },
      {
        front: "What was the Nullification Crisis (1832-1833)?",
        back: "South Carolina, led by John C. Calhoun, declared the federal Tariff of 1828/1832 null within the state. Jackson threatened force (Force Bill); a compromise tariff defused it, but it foreshadowed sectional conflict over states' rights.",
        hint: "South Carolina vs. the tariff.",
      },
      {
        front: "What was the Bank War?",
        back: "Jackson's campaign against the Second Bank of the United States. He vetoed its recharter (1832), calling it a monopoly favoring the elite, and removed federal deposits, contributing to instability that helped cause the Panic of 1837.",
      },
      {
        front: "What was Indian Removal under Jackson?",
        back: "The Indian Removal Act (1830) authorized relocating southeastern tribes west of the Mississippi. The Cherokee forced march, the Trail of Tears (1838-39), killed thousands, defying the Supreme Court ruling in Worcester v. Georgia.",
        hint: "Trail of Tears.",
      },
      {
        front: "What did Worcester v. Georgia (1832) decide, and how did Jackson respond?",
        back: "The Supreme Court ruled the Cherokee were a sovereign nation and Georgia law did not apply to their land. Jackson effectively ignored the ruling, and removal proceeded.",
      },
      {
        front: "What was the Second Party System?",
        back: "The competition between the Democrats (Jackson, limited federal government, agrarian) and the Whigs (Henry Clay, the American System, active federal government, internal improvements) from the 1830s to early 1850s.",
        hint: "Democrats vs. Whigs.",
      },
      {
        front: "What was the American System proposed by Henry Clay?",
        back: "An economic plan with three parts: a protective tariff, a national bank, and federally funded internal improvements (roads, canals) to bind the nation's economy together.",
      },
      {
        front: "How did the market revolution connect to democratic expansion?",
        back: "Improved transportation (canals, roads, railroads) and commercial growth expanded participation in the economy and politics, while also widening inequality and contributing to reform movements.",
      },
      {
        front: "What were the Seneca Falls Convention and Declaration of Sentiments (1848)?",
        back: "The first women's rights convention in the U.S. Its Declaration of Sentiments, modeled on the Declaration of Independence, demanded equality and women's suffrage, launching the organized women's movement.",
        hint: "Women's rights, 1848.",
      },
      {
        front: "Common trap: Jacksonian Democracy expanded democracy for whom?",
        back: "It expanded political participation for white men only. It coincided with worsening conditions for Native Americans (removal) and did not extend rights to women or enslaved/free Black Americans.",
      },
      {
        front: "What was the significance of the election of 1828?",
        back: "Jackson's victory marked the rise of mass popular politics, high voter turnout, mudslinging campaigns, and the emergence of the Democratic Party as a national organization.",
      },
    ],
  },
  {
    slug: "macro-phillips-curve",
    cards: [
      {
        front: "What does the short-run Phillips curve (SRPC) show?",
        back: "An inverse (negative) relationship between the unemployment rate (x-axis) and the inflation rate (y-axis). Lower unemployment is associated with higher inflation in the short run.",
        hint: "Downward sloping.",
      },
      {
        front: "What does the long-run Phillips curve (LRPC) look like, and why?",
        back: "It is vertical at the natural rate of unemployment. In the long run there is no trade-off: any inflation rate is consistent with the natural rate because expectations adjust fully.",
        hint: "Vertical at natural rate.",
      },
      {
        front: "How are the Phillips curve and the AD/AS model related?",
        back: "They tell the same story. A rightward shift of AD raises the price level and real GDP (lowers unemployment), which corresponds to moving up-left along the SRPC. The LRPC matches the vertical LRAS.",
      },
      {
        front: "What causes movement ALONG the short-run Phillips curve?",
        back: "Changes in aggregate demand. More AD lowers unemployment and raises inflation (move up the curve); less AD raises unemployment and lowers inflation (move down the curve).",
      },
      {
        front: "What shifts the short-run Phillips curve?",
        back: "Changes in expected inflation and supply shocks (changes in input costs like oil). Higher expected inflation or an adverse supply shock shifts the SRPC right/up; the reverse shifts it left/down.",
        hint: "Expectations and supply shocks.",
      },
      {
        front: "What is stagflation and how does it appear on the Phillips curve?",
        back: "Simultaneous high inflation and high unemployment, caused by an adverse (leftward) supply shock. The SRPC shifts up/right, so both inflation and unemployment rise at once.",
      },
      {
        front: "Where does the SRPC intersect the LRPC?",
        back: "At the expected (anticipated) inflation rate, which occurs at the natural rate of unemployment. At that point actual inflation equals expected inflation.",
      },
      {
        front: "What happens on the Phillips curve when the economy is in a recession (below full employment)?",
        back: "Unemployment is above the natural rate, so the economy sits to the right of the LRPC, at a point of lower inflation on the SRPC.",
      },
      {
        front: "What happens on the Phillips curve when the economy is overheated (above full employment)?",
        back: "Unemployment is below the natural rate, so the economy sits to the left of the LRPC, at a point of higher inflation on the SRPC.",
      },
      {
        front: "How does a change in the natural rate of unemployment affect the curves?",
        back: "It shifts the vertical LRPC left or right to the new natural rate, and the SRPC shifts with it. For example, better job-matching technology lowers the natural rate, shifting both left.",
      },
      {
        front: "Common trap: does inflation reduce unemployment in the long run?",
        back: "No. The long-run Phillips curve is vertical, so there is no permanent trade-off. Trying to keep unemployment below the natural rate only produces accelerating inflation.",
        hint: "No long-run trade-off.",
      },
      {
        front: "Worked example: AD increases unexpectedly. Trace the short-run and long-run Phillips curve effects.",
        back: "Short run: move up the SRPC, unemployment falls below natural rate, inflation rises. Long run: expected inflation rises, SRPC shifts up, and the economy returns to the natural rate at the higher inflation rate on the LRPC.",
      },
    ],
  },
  {
    slug: "exponents-order-operations-prealg",
    cards: [
      {
        front: "What does an exponent mean? Define base and exponent.",
        back: "In $a^n$, the base $a$ is the repeated factor and the exponent $n$ is how many times you multiply it by itself. For example, $2^4 = 2 \\\\times 2 \\\\times 2 \\\\times 2 = 16$.",
        hint: "Repeated multiplication.",
      },
      {
        front: "What is the order of operations (PEMDAS)?",
        back: "Parentheses, Exponents, Multiplication and Division (left to right), Addition and Subtraction (left to right). Multiplication/division share a level, as do addition/subtraction.",
        hint: "Please Excuse My Dear Aunt Sally.",
      },
      {
        front: "Worked example: Evaluate $3 + 4 \\\\times 2^2$.",
        back: "Exponent first: $2^2 = 4$. Then multiply: $4 \\\\times 4 = 16$. Then add: $3 + 16 = 19$.",
      },
      {
        front: "Common trap: is multiplication always done before division?",
        back: "No. Multiplication and division are equal in rank and done left to right. For $12 \\\\div 3 \\\\times 2$, divide first ($= 4$) then multiply ($= 8$), not $12 \\\\div 6 = 2$.",
        hint: "Left to right.",
      },
      {
        front: "What is the product rule for exponents (same base)?",
        back: "Add the exponents: $a^m \\\\times a^n = a^{m+n}$. Example: $x^3 \\\\times x^5 = x^8$. Use only when the bases are identical.",
      },
      {
        front: "What is the quotient rule for exponents (same base)?",
        back: "Subtract the exponents: $\\\\frac{a^m}{a^n} = a^{m-n}$ (with $a \\\\neq 0$). Example: $\\\\frac{y^7}{y^2} = y^5$.",
      },
      {
        front: "What is the power of a power rule?",
        back: "Multiply the exponents: $(a^m)^n = a^{mn}$. Example: $(2^3)^2 = 2^6 = 64$. Do not add the exponents here.",
        hint: "Multiply, don't add.",
      },
      {
        front: "What is any nonzero number raised to the power of 0?",
        back: "It equals 1: $a^0 = 1$ for $a \\\\neq 0$. For example, $7^0 = 1$ and $(-5)^0 = 1$.",
      },
      {
        front: "What does a negative exponent mean?",
        back: "It means the reciprocal: $a^{-n} = \\\\frac{1}{a^n}$ (with $a \\\\neq 0$). Example: $2^{-3} = \\\\frac{1}{2^3} = \\\\frac{1}{8}$.",
        hint: "Flip to make it positive.",
      },
      {
        front: "Common trap: does $-3^2$ equal 9 or $-9$?",
        back: "$-3^2 = -9$, because the exponent applies only to 3 and the negative sign is applied last. To square the negative, write $(-3)^2 = 9$.",
        hint: "Parentheses change the answer.",
      },
      {
        front: "Worked example: Evaluate $(8 - 3)^2 \\\\div 5 + 1$.",
        back: "Parentheses: $8 - 3 = 5$. Exponent: $5^2 = 25$. Divide: $25 \\\\div 5 = 5$. Add: $5 + 1 = 6$.",
      },
      {
        front: "How do you handle nested grouping symbols, like brackets inside parentheses?",
        back: "Work from the innermost grouping outward. Treat brackets [ ] and braces { } like parentheses, simplifying the deepest one first.",
      },
      {
        front: "What is $1$ raised to any power, and $0$ raised to a positive power?",
        back: "$1^n = 1$ for any $n$. And $0^n = 0$ for any positive $n$ (for example $0^4 = 0$). Note $0^0$ is left undefined at this level.",
      },
    ],
  },
  {
    slug: "aas-slavery-in-america",
    cards: [
      {
        front: "What was the Middle Passage?",
        back: "The brutal transatlantic voyage that carried enslaved Africans to the Americas as part of the triangular trade. Overcrowding, disease, and violence killed roughly 15 percent or more of captives en route.",
        hint: "Transatlantic crossing.",
      },
      {
        front: "What was chattel slavery?",
        back: "A system in which enslaved people were legally treated as property (chattel) that could be bought, sold, and inherited, with their children also born into bondage. It was racialized and hereditary in the Americas.",
      },
      {
        front: "What were slave codes?",
        back: "Laws that defined enslaved people as property and restricted their lives, e.g., banning literacy, assembly, and movement, and denying legal personhood. They aimed to prevent resistance and enforce white control.",
      },
      {
        front: "What was the domestic (internal) slave trade after 1808?",
        back: "After the 1808 ban on importing enslaved people, a large internal trade moved over a million people, often from the Upper South to the Deep South ('sold down the river'), tearing apart families.",
        hint: "After the import ban.",
      },
      {
        front: "What was the Stono Rebellion (1739)?",
        back: "One of the largest slave uprisings in the British mainland colonies, in South Carolina. It was suppressed and led to harsher slave codes, including the Negro Act of 1740.",
      },
      {
        front: "Who was Nat Turner and what did he lead?",
        back: "An enslaved preacher who led an 1831 rebellion in Virginia that killed about 55-60 white people. The revolt was crushed, and it triggered fierce reprisals and stricter slave laws across the South.",
        hint: "1831 Virginia revolt.",
      },
      {
        front: "What were everyday forms of enslaved resistance?",
        back: "Beyond open revolt: work slowdowns, breaking tools, feigning illness, running away, preserving culture and family ties, and covert religious practice. These daily acts undermined the system.",
      },
      {
        front: "What was the significance of the Underground Railroad?",
        back: "A secret network of routes and safe houses (with conductors like Harriet Tubman) that helped enslaved people escape to free states and Canada, especially after the Fugitive Slave Act of 1850.",
        hint: "Harriet Tubman.",
      },
      {
        front: "How did enslaved people preserve African cultural traditions?",
        back: "Through music (spirituals, call-and-response), oral storytelling, foodways, religious blending, and family and community networks. These cultural retentions formed the roots of African American identity.",
      },
      {
        front: "What was the role of cotton and the cotton gin in expanding slavery?",
        back: "Eli Whitney's cotton gin (1793) made short-staple cotton highly profitable, driving the expansion of plantation slavery across the Deep South and making enslaved labor central to the U.S. economy.",
        hint: "1793 invention.",
      },
      {
        front: "What did the Three-Fifths Compromise establish?",
        back: "In the Constitution, three-fifths of the enslaved population was counted for purposes of representation and taxation, increasing the political power of slaveholding states without granting enslaved people any rights.",
      },
      {
        front: "What was the abolitionist movement?",
        back: "A reform movement to end slavery, including Black leaders like Frederick Douglass and Sojourner Truth and publications like Douglass's North Star and Garrison's The Liberator. It combined moral, political, and direct action.",
      },
      {
        front: "Who was Frederick Douglass?",
        back: "A formerly enslaved man who became a leading abolitionist, orator, and writer. His 1845 Narrative exposed slavery's brutality, and he argued for emancipation, equal rights, and the Constitution as an antislavery document.",
        hint: "Author of an 1845 Narrative.",
      },
    ],
  },
  {
    slug: "csp-internet-protocols",
    cards: [
      {
        front: "What is a protocol in the context of the Internet?",
        back: "A standardized, agreed-upon set of rules that governs how devices communicate, such as how data is formatted, addressed, transmitted, and received. Shared protocols let different systems interoperate.",
        hint: "Agreed-upon rules.",
      },
      {
        front: "What is the difference between the Internet and the World Wide Web?",
        back: "The Internet is the global physical/logical network of interconnected computers. The Web is one service built on top of it, a system of linked pages accessed via HTTP and browsers.",
      },
      {
        front: "What does IP (Internet Protocol) do, and what is an IP address?",
        back: "IP handles addressing and routing of data packets between devices. An IP address is a unique numeric label identifying a device on a network, used to deliver data to the right place.",
        hint: "Addressing and routing.",
      },
      {
        front: "Why was IPv6 created, and how does it differ from IPv4?",
        back: "IPv4 uses 32-bit addresses (about 4.3 billion), which are running out. IPv6 uses 128-bit addresses, providing a vastly larger address space to support the growing number of connected devices.",
        hint: "32-bit vs 128-bit.",
      },
      {
        front: "What does TCP (Transmission Control Protocol) do?",
        back: "TCP breaks data into packets, ensures reliable delivery, reorders packets correctly at the destination, and requests retransmission of lost packets. It is often paired as TCP/IP.",
        hint: "Reliable, ordered delivery.",
      },
      {
        front: "What is packet switching?",
        back: "A method where data is split into small packets that travel independently, possibly along different routes, and are reassembled at the destination. It uses network capacity efficiently and is fault-tolerant.",
        hint: "Independent routes.",
      },
      {
        front: "What information does a packet contain?",
        back: "A header with metadata (source and destination addresses, ordering/sequence info) and the payload (the actual chunk of data). Headers let routers forward packets and let the receiver reassemble them.",
      },
      {
        front: "What does the DNS (Domain Name System) do?",
        back: "It translates human-readable domain names (like example.com) into the numeric IP addresses computers use. It works like a phonebook for the Internet.",
        hint: "Names to numbers.",
      },
      {
        front: "What is HTTP/HTTPS used for?",
        back: "HTTP (HyperText Transfer Protocol) defines how web browsers and servers exchange web pages. HTTPS adds encryption (TLS/SSL) so data sent between browser and server is secure and private.",
      },
      {
        front: "What does it mean that the Internet is 'scalable'?",
        back: "Its design lets it grow and handle more devices and traffic without redesign. Open protocols and hierarchical addressing/routing allow new networks and devices to join seamlessly.",
        hint: "Grows without redesign.",
      },
      {
        front: "What is fault tolerance, and how does the Internet achieve it?",
        back: "The ability to keep working when parts fail. The Internet achieves it through redundancy (multiple connection paths) and packet switching, so if one route fails, packets reroute around the problem.",
        hint: "Redundancy and rerouting.",
      },
      {
        front: "What is bandwidth, and how does it differ from latency?",
        back: "Bandwidth is the maximum amount of data that can be transmitted per unit time (e.g., bits per second). Latency is the time delay for data to travel from sender to receiver. High bandwidth and low latency are both desirable.",
      },
      {
        front: "Why is open access and shared standards important to the Internet's design?",
        back: "Because protocols are open and published, anyone can build compatible devices and software, enabling interoperability, innovation, and decentralized growth without a single controlling authority.",
      },
    ],
  },
  {
    slug: "aas-wwi-wwii-era",
    cards: [
      {
        front: "What was the Great Migration?",
        back: "The mass movement of millions of African Americans from the rural South to Northern, Midwestern, and Western cities (roughly 1910-1970), seeking factory jobs and escaping Jim Crow and racial violence.",
        hint: "South to North.",
      },
      {
        front: "How did World War I affect African Americans?",
        back: "Many served in segregated units (like the Harlem Hellfighters) and worked in wartime industry. The 'fight for democracy abroad' deepened demands for democracy and rights at home.",
      },
      {
        front: "What was the Harlem Renaissance?",
        back: "A 1920s flowering of African American art, literature, and music centered in Harlem, NYC. Figures like Langston Hughes, Zora Neale Hurston, and Duke Ellington celebrated Black identity and culture.",
        hint: "1920s Harlem.",
      },
      {
        front: "What did Langston Hughes contribute?",
        back: "A leading Harlem Renaissance poet who infused his work with jazz and blues rhythms and everyday Black life, asserting racial pride. Works include 'The Negro Speaks of Rivers' and his essay defending Black artistic independence.",
      },
      {
        front: "Who was Marcus Garvey and what did he advocate?",
        back: "Founder of the UNIA (Universal Negro Improvement Association), he promoted Black nationalism, economic self-reliance, racial pride, and Pan-Africanism, including a 'Back to Africa' movement.",
        hint: "UNIA, Black nationalism.",
      },
      {
        front: "What was the Red Summer of 1919?",
        back: "A wave of white-on-Black racial violence and riots across many U.S. cities after WWI, as returning Black veterans and migrants faced backlash. African Americans increasingly resisted and fought back.",
        hint: "1919 racial violence.",
      },
      {
        front: "What was the 'Double V' campaign during World War II?",
        back: "A slogan promoted by the Black press calling for victory over fascism abroad AND victory over racism at home, linking the war effort to the fight for civil rights.",
        hint: "Victory abroad and at home.",
      },
      {
        front: "Who were the Tuskegee Airmen?",
        back: "The first African American military aviators in the U.S. armed forces, who served with distinction in WWII despite segregation. Their record helped challenge claims that Black soldiers were unfit for combat.",
      },
      {
        front: "What did A. Philip Randolph achieve with the threatened 1941 March on Washington?",
        back: "By threatening a mass march, Randolph pressured President Roosevelt to issue Executive Order 8802, banning racial discrimination in defense industries and creating the Fair Employment Practices Committee.",
        hint: "Executive Order 8802.",
      },
      {
        front: "What was the significance of jazz and blues in this era?",
        back: "They were major African American cultural contributions that spread nationally and globally, expressing Black experience and shaping American music. Artists like Louis Armstrong and Bessie Smith were central.",
      },
      {
        front: "How did the NAACP advance civil rights during this period?",
        back: "Founded in 1909, it pursued legal challenges and anti-lynching advocacy, building the litigation strategy (led later by lawyers like Charles Hamilton Houston and Thurgood Marshall) that would dismantle segregation.",
      },
      {
        front: "What was the New Negro movement?",
        back: "An ethos, articulated by Alain Locke in his 1925 anthology 'The New Negro,' of racial pride, self-assertion, and cultural achievement, rejecting old stereotypes and demanding dignity and equality.",
        hint: "Alain Locke, 1925.",
      },
      {
        front: "How did WWII set the stage for the postwar civil rights movement?",
        back: "Black military service, wartime employment, the Double V campaign, and the contradiction of fighting fascism while enduring segregation built momentum and organization that fueled the postwar struggle for civil rights.",
      },
    ],
  },
];
