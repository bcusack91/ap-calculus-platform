export const batchCards: { slug: string; cards: { front: string; back: string; hint?: string }[] }[] = [
  {
    slug: "wh-reform-migration",
    cards: [
      {
        front: "What was the Abolitionist Movement?",
        back: "A reform movement to end slavery and the slave trade, gaining force in the 18th-19th centuries. Britain abolished the slave trade in 1807 and slavery in its empire in 1833; pressure from Enlightenment ideals, religious activism, and slave resistance drove abolition globally.",
        hint: "Britain 1807/1833"
      },
      {
        front: "What were 'push' and 'pull' factors in 19th-century migration?",
        back: "Push factors drive people to leave home (famine, poverty, war, religious persecution); pull factors attract them to a destination (jobs, land, freedom, gold). Both worked together to fuel mass migration to the Americas, Australia, and elsewhere.",
        hint: "Reasons to leave vs. reasons to go"
      },
      {
        front: "What was the significance of the Irish Potato Famine (1845-1852) for migration?",
        back: "A blight destroyed Ireland's staple potato crop, killing about a million people and pushing roughly a million more to emigrate, mainly to the United States and Britain. It is a classic example of a push factor driving mass migration.",
        hint: "Blight, ~1 million emigrate"
      },
      {
        front: "What was indentured servitude in the post-abolition era?",
        back: "A system of contract labor where workers (heavily from India and China) agreed to work for a set number of years for passage and low wages. It replaced enslaved labor on plantations after abolition and created large South Asian diasporas in places like the Caribbean, Fiji, and South Africa.",
        hint: "Contract labor replacing slavery"
      },
      {
        front: "Name two major destinations for Chinese migrants in the 1800s.",
        back: "California (during the Gold Rush and railroad construction) and Southeast Asia. Many also went to the Caribbean, Peru, Australia, and Canada as laborers, often facing discriminatory restrictions like the U.S. Chinese Exclusion Act (1882).",
        hint: "Gold Rush and railroads"
      },
      {
        front: "What was the abolitionist role of formerly enslaved voices like Frederick Douglass and Olaudah Equiano?",
        back: "Their autobiographies and speeches gave firsthand testimony of slavery's brutality, swaying public opinion. Equiano's narrative (1789) fueled British abolition; Douglass became a leading voice in the U.S. movement.",
        hint: "Personal narratives as evidence"
      },
      {
        front: "What were nationalist reform movements of the 19th century?",
        back: "Movements seeking self-rule or unification based on shared language, culture, or ethnicity, such as Italian and German unification. Nationalism both inspired reform and provoked conflict, redrawing political maps.",
        hint: "Italy and Germany unify"
      },
      {
        front: "How did industrialization shape migration patterns?",
        back: "Factory growth pulled rural populations into cities (urbanization) and drew international migrants seeking industrial jobs. Steamships and railroads made long-distance migration cheaper and faster, accelerating global movement of people.",
        hint: "Cities and transport revolution"
      },
      {
        front: "What was the women's suffrage movement?",
        back: "A reform campaign for women's right to vote, gaining momentum in the late 1800s. New Zealand granted national women's suffrage in 1893 (the first), followed by other nations in the early 20th century.",
        hint: "New Zealand first, 1893"
      },
      {
        front: "How did migration create diasporas and ethnic enclaves?",
        back: "Migrants settling abroad often clustered in communities preserving language, religion, and customs (e.g., Chinatowns, Little Italys). These diasporas maintained ties to homelands and reshaped the cultures of host societies.",
        hint: "Communities far from homeland"
      },
      {
        front: "What were the effects of mass migration on gender ratios?",
        back: "Many migrant laborers were young men, creating male-dominated populations in destinations like mining camps and plantations, and leaving female-dominated villages in source regions. This sometimes reshaped family structures and gender roles in both places.",
        hint: "Mostly young male laborers"
      },
      {
        front: "Common trap: Was abolition of slavery the same as ending all forced labor?",
        back: "No. Abolishing slavery often led to coerced alternatives like indentured servitude, debt bondage, and apprenticeship systems. Many former slaves and new contract workers remained in exploitative conditions despite legal 'freedom.'",
        hint: "Slavery ended, coercion continued"
      }
    ]
  },
  {
    slug: "exponential-growth-decay-alg1",
    cards: [
      {
        front: "What is the general form of an exponential function?",
        back: "$y = a \\\\cdot b^x$, where $a$ is the initial value (the y-intercept when $x=0$) and $b$ is the constant base (growth/decay factor). Use it to model quantities that multiply by the same factor over equal intervals.",
        hint: "a times b to the x"
      },
      {
        front: "When does $y = a \\\\cdot b^x$ represent growth vs. decay?",
        back: "Growth when $b > 1$ (the quantity increases); decay when $0 < b < 1$ (the quantity decreases). The value $a$ must be positive for the usual positive-output model.",
        hint: "Compare b to 1"
      },
      {
        front: "What is the growth/decay formula with a rate?",
        back: "$y = a(1 + r)^t$ for growth and $y = a(1 - r)^t$ for decay, where $a$ is initial amount, $r$ is the rate as a decimal per period, and $t$ is the number of periods. Use when given a percent rate of change.",
        hint: "r is the percent as a decimal"
      },
      {
        front: "Worked example: A population of 500 grows 8% per year. Write and use the model after 3 years.",
        back: "Model: $y = 500(1.08)^t$. After 3 years: $y = 500(1.08)^3 \\\\approx 500(1.2597) \\\\approx 630$. The population is about 630.",
        hint: "1 + 0.08 = 1.08"
      },
      {
        front: "Worked example: A car worth $20{,}000 depreciates 15% per year. Value after 4 years?",
        back: "Model: $y = 20000(0.85)^t$. After 4 years: $y = 20000(0.85)^4 \\\\approx 20000(0.522) \\\\approx 10{,}440$.",
        hint: "1 - 0.15 = 0.85"
      },
      {
        front: "How do you find the growth/decay factor $b$ from a percent rate?",
        back: "Growth: $b = 1 + r$; decay: $b = 1 - r$, where $r$ is the percent written as a decimal. For example, 25% growth gives $b = 1.25$; 25% decay gives $b = 0.75$.",
        hint: "Add for growth, subtract for decay"
      },
      {
        front: "What does the y-intercept tell you about an exponential function?",
        back: "It equals $a$, the initial value when $x = 0$, because $b^0 = 1$ so $y = a \\\\cdot 1 = a$. The graph always crosses the y-axis at $(0, a)$.",
        hint: "Any base to the 0 power is 1"
      },
      {
        front: "How is an exponential function different from a linear function?",
        back: "Linear functions add a constant amount each step (constant difference); exponential functions multiply by a constant factor each step (constant ratio). Exponentials grow/shrink much faster over time.",
        hint: "Add vs. multiply"
      },
      {
        front: "What is a horizontal asymptote of $y = a \\\\cdot b^x$?",
        back: "The line $y = 0$ (the x-axis). The graph approaches but never touches it; the function value never reaches zero for finite $x$.",
        hint: "The x-axis, y = 0"
      },
      {
        front: "What does 'doubling time' or 'half-life' mean?",
        back: "Doubling time is how long a growing quantity takes to double; half-life is how long a decaying quantity takes to halve. Both are constant for a given exponential model regardless of starting amount.",
        hint: "Constant time to double or halve"
      },
      {
        front: "Worked example: A sample halves every 5 hours, starting at 80 g. Amount after 15 hours?",
        back: "15 hours = 3 half-lives. $80 \\\\to 40 \\\\to 20 \\\\to 10$, so 10 g remain. Equivalently $80(0.5)^3 = 10$.",
        hint: "Count how many half-lives"
      },
      {
        front: "Common trap: How do you convert a 5% rate into the base $b$?",
        back: "Write 5% as $0.05$, not $5$. For growth, $b = 1 + 0.05 = 1.05$; using $1.5$ or $1.05$ incorrectly is a common error. Always move the decimal two places.",
        hint: "5% = 0.05, not 0.5"
      },
      {
        front: "How does changing $b$ affect the steepness of the graph?",
        back: "The farther $b$ is from 1, the steeper the curve. A larger $b$ (e.g., 3) grows faster than a smaller one (e.g., 1.5); a $b$ closer to 0 decays faster than one closer to 1.",
        hint: "Distance from 1"
      }
    ]
  },
  {
    slug: "wh-maritime-empires-labor",
    cards: [
      {
        front: "What were maritime empires?",
        back: "Empires built on naval power and oceanic trade, such as Portugal, Spain, the Dutch Republic, Britain, and France (c. 1450-1750). They established overseas colonies, trading posts, and sea routes to control global commerce.",
        hint: "Sea-based, overseas colonies"
      },
      {
        front: "What was the Columbian Exchange?",
        back: "The transfer of plants, animals, people, diseases, and ideas between the Eastern and Western Hemispheres after 1492. Old World diseases devastated indigenous Americans, while crops like potatoes and maize transformed diets worldwide.",
        hint: "Old World <-> New World transfer"
      },
      {
        front: "What was the Atlantic (transatlantic) slave trade?",
        back: "The forced transport of roughly 12 million enslaved Africans to the Americas, mainly to work plantations. It was the largest component of the broader 'triangular trade' and a foundation of maritime-empire economies.",
        hint: "~12 million Africans, forced labor"
      },
      {
        front: "What was the triangular trade?",
        back: "A three-legged Atlantic trade network: manufactured goods from Europe to Africa, enslaved Africans across the Middle Passage to the Americas, and cash crops (sugar, tobacco, cotton) from the Americas back to Europe.",
        hint: "Three legs across the Atlantic"
      },
      {
        front: "What was the Middle Passage?",
        back: "The brutal sea voyage carrying enslaved Africans across the Atlantic. Overcrowding, disease, and abuse killed an estimated 15% or more of captives en route, making it one of history's deadliest forced migrations.",
        hint: "The Atlantic crossing of the enslaved"
      },
      {
        front: "What was the encomienda system?",
        back: "A Spanish labor system granting colonists the right to demand tribute and forced labor from indigenous people in exchange for supposed protection and Christianization. It was effectively a form of coerced labor that devastated native populations.",
        hint: "Spanish forced labor of natives"
      },
      {
        front: "What was the mita system in colonial South America?",
        back: "A Spanish adaptation of an Incan labor draft requiring indigenous communities to supply rotating workers, notably for the silver mines at Potosí. Conditions were deadly, and it funneled enormous wealth to Spain.",
        hint: "Forced mine labor, Potosí silver"
      },
      {
        front: "What was the role of cash-crop plantations in maritime empires?",
        back: "Plantations grew labor-intensive crops like sugar, tobacco, and cotton for export to Europe. Their demand for cheap labor drove the Atlantic slave trade and shaped colonial economies and societies.",
        hint: "Sugar, tobacco, cotton for export"
      },
      {
        front: "What were chartered (joint-stock) companies and why did they matter?",
        back: "State-backed corporations like the British and Dutch East India Companies that funded voyages by pooling investor capital and shared risk and profit. They effectively governed trade and territory, blending commerce with imperial power.",
        hint: "Dutch and British East India Companies"
      },
      {
        front: "What was mercantilism?",
        back: "An economic theory holding that a nation's wealth is finite and measured by gold and silver, so empires sought favorable trade balances and exclusive colonial markets. It justified tight control over colonial trade and labor.",
        hint: "Accumulate bullion, control colonial trade"
      },
      {
        front: "How did coerced labor systems shape colonial racial hierarchies?",
        back: "Labor demands led to rigid social hierarchies based on race and origin (e.g., the casta system in Spanish America). Europeans dominated, while enslaved Africans and indigenous peoples were placed at the bottom, with mixed-race groups in between.",
        hint: "Casta system, race-based ranking"
      },
      {
        front: "Common trap: Were all colonial laborers enslaved Africans?",
        back: "No. Maritime empires used many coerced and semi-coerced systems: indigenous encomienda and mita labor, European indentured servants, and later Asian indentured workers, in addition to enslaved Africans.",
        hint: "Multiple labor systems, not just one"
      }
    ]
  },
  {
    slug: "macro-international-trade-finance",
    cards: [
      {
        front: "What is the balance of payments (BOP)?",
        back: "A record of all economic transactions between a country and the rest of the world over a period. Its two main accounts are the current account and the financial (capital) account, which must balance overall.",
        hint: "All international transactions"
      },
      {
        front: "What is the current account?",
        back: "The part of the BOP recording trade in goods and services, net investment income, and net transfers. A current account deficit means a country imports more (in value) than it exports plus net income/transfers.",
        hint: "Mostly net exports"
      },
      {
        front: "What is the financial (capital) account?",
        back: "The part of the BOP recording flows of financial assets, like foreign purchases of domestic assets and domestic purchases of foreign assets. It typically offsets the current account so the overall BOP balances.",
        hint: "Buying and selling of assets"
      },
      {
        front: "What is the relationship between the current and financial accounts?",
        back: "They are inverses: a current account deficit is financed by a financial account surplus (capital inflows), and vice versa. Ignoring errors, current account + financial account = 0.",
        hint: "One's deficit is the other's surplus"
      },
      {
        front: "What is an exchange rate?",
        back: "The price of one currency in terms of another, e.g., $1 = 0.9 euros. It is determined in the foreign exchange (forex) market by supply and demand for currencies.",
        hint: "Price of one currency in another"
      },
      {
        front: "What causes a currency to appreciate?",
        back: "Increased demand for the currency or reduced supply, driven by higher domestic interest rates, stronger exports, greater foreign investment, or expectations of a stronger currency. Appreciation makes exports more expensive and imports cheaper.",
        hint: "Higher demand for the currency"
      },
      {
        front: "How do higher domestic interest rates affect a currency and the exchange rate?",
        back: "Higher real interest rates attract foreign financial capital seeking better returns, increasing demand for the domestic currency and causing it to appreciate. This is the financial-account channel of monetary policy.",
        hint: "Capital inflows raise demand"
      },
      {
        front: "How does currency depreciation affect net exports?",
        back: "Depreciation makes a country's exports cheaper for foreigners and imports more expensive domestically, tending to increase net exports (raising AD). The opposite happens with appreciation.",
        hint: "Cheaper exports, pricier imports"
      },
      {
        front: "What is the difference between absolute and comparative advantage?",
        back: "Absolute advantage means producing more of a good with the same resources; comparative advantage means producing a good at a lower opportunity cost. Trade gains come from comparative advantage, not absolute.",
        hint: "Output vs. opportunity cost"
      },
      {
        front: "Worked example: Determine comparative advantage. Country A gives up 2 wheat per cloth; Country B gives up 4 wheat per cloth. Who should produce cloth?",
        back: "Country A has the lower opportunity cost for cloth (2 wheat vs. 4 wheat), so A has the comparative advantage in cloth and should specialize in cloth, while B specializes in wheat.",
        hint: "Lower opportunity cost wins"
      },
      {
        front: "How does a government budget deficit affect the foreign exchange market (twin deficits)?",
        back: "A larger budget deficit can raise interest rates, attracting capital inflows that appreciate the currency, which reduces net exports and can widen the trade deficit. This links the budget deficit and trade deficit (the 'twin deficits').",
        hint: "Deficit -> higher rates -> stronger currency"
      },
      {
        front: "Common trap: Does demand for a country's exports affect demand or supply of its currency?",
        back: "Demand for a country's exports increases demand for its currency (foreigners must buy it to pay), causing appreciation. A common error is confusing this with currency supply; export demand raises currency demand.",
        hint: "Foreigners must buy the currency"
      },
      {
        front: "What is the foreign exchange market graph's axes?",
        back: "The vertical axis is the exchange rate (price of the currency in foreign currency terms), and the horizontal axis is the quantity of that currency. Demand and supply curves for the currency determine the equilibrium exchange rate.",
        hint: "Price = exchange rate; quantity = currency"
      },
      {
        front: "How does expansionary monetary policy affect the exchange rate?",
        back: "Lower interest rates reduce capital inflows and increase outflows, decreasing demand and increasing supply of the domestic currency, causing it to depreciate. The weaker currency boosts net exports.",
        hint: "Lower rates weaken the currency"
      }
    ]
  },
  {
    slug: "apush-colonial-society-conflicts",
    cards: [
      {
        front: "What were the three colonial regions of British North America?",
        back: "New England (small farms, trade, fishing, Puritan towns), the Middle Colonies (diverse, fertile 'breadbasket'), and the Southern Colonies (plantation agriculture using enslaved labor). Geography and economy shaped each region's distinct society.",
        hint: "New England, Middle, Southern"
      },
      {
        front: "What was the Great Awakening?",
        back: "A wave of religious revivals in the 1730s-40s emphasizing emotional, personal faith, led by preachers like Jonathan Edwards and George Whitefield. It challenged established churches and fostered a shared colonial identity and democratic spirit.",
        hint: "1730s-40s religious revivals"
      },
      {
        front: "What was Bacon's Rebellion (1676)?",
        back: "An uprising in Virginia led by Nathaniel Bacon, where frontier settlers and former servants attacked Native Americans and Jamestown over grievances with Governor Berkeley. It pushed planters toward enslaved African labor instead of indentured servants.",
        hint: "Virginia, 1676, shift to slavery"
      },
      {
        front: "What was the headright system?",
        back: "A Virginia policy granting 50 acres of land to anyone who paid for a settler's passage. It encouraged immigration and indentured servitude and concentrated land among wealthy planters who imported many laborers.",
        hint: "50 acres per immigrant brought over"
      },
      {
        front: "What was the Middle Passage's role in colonial society?",
        back: "It brought enslaved Africans to the colonies, especially the South, fueling the plantation economy. The growth of chattel slavery created a rigid racial caste system central to colonial society.",
        hint: "Forced African migration to colonies"
      },
      {
        front: "What was salutary neglect?",
        back: "Britain's unofficial 18th-century policy of loosely enforcing trade laws on the colonies. It allowed colonial self-government and economic autonomy to flourish, and its later reversal after 1763 sparked colonial resentment.",
        hint: "Loose enforcement before 1763"
      },
      {
        front: "What was the significance of the Mayflower Compact (1620)?",
        back: "An agreement by Pilgrims to form a self-governing 'civil body politic' and obey majority rule. It set an early precedent for self-government and social contract in the colonies.",
        hint: "Early self-government agreement"
      },
      {
        front: "What was the relationship between Puritans and religious dissent?",
        back: "Puritan Massachusetts was intolerant of dissent, banishing figures like Roger Williams (who founded Rhode Island on religious freedom) and Anne Hutchinson. This drove the founding of more tolerant colonies.",
        hint: "Williams and Hutchinson banished"
      },
      {
        front: "What was the Pueblo Revolt (1680)?",
        back: "A successful uprising of Pueblo peoples against Spanish colonizers in New Mexico, driven by forced labor and suppression of native religion. The Spanish were expelled for over a decade, the most successful Native resistance of the era.",
        hint: "1680, Pueblo expel Spanish"
      },
      {
        front: "How did indentured servitude work and why did it decline?",
        back: "Servants worked 4-7 years in exchange for passage, food, and eventual 'freedom dues.' It declined after Bacon's Rebellion and as wages rose in England, leading planters to rely increasingly on enslaved Africans.",
        hint: "Temporary labor, replaced by slavery"
      },
      {
        front: "What was the Enlightenment's influence on colonial society?",
        back: "Enlightenment ideas about reason, natural rights, and government by consent (from thinkers like John Locke) spread among educated colonists. These ideas shaped colonial political thought and later the push for independence.",
        hint: "Locke, natural rights, reason"
      },
      {
        front: "Common trap: Were the New England and Southern colonies founded for the same reasons?",
        back: "No. New England was settled largely by Puritans seeking religious community, while the Southern colonies (like Virginia) were founded mainly for economic profit through cash crops. Their differing motives produced very different societies.",
        hint: "Religion vs. profit motives"
      },
      {
        front: "What was the Halfway Covenant (1662)?",
        back: "A Puritan compromise allowing partial church membership to the children of baptized but unconverted members. It responded to declining religious zeal and shows tensions within New England's religious society.",
        hint: "Partial church membership"
      }
    ]
  },
  {
    slug: "scatterplots-correlation",
    cards: [
      {
        front: "What is a scatterplot?",
        back: "A graph that displays the relationship between two quantitative variables, with each point representing one observation's $x$ (explanatory) and $y$ (response) values. Use it to see form, direction, strength, and outliers in a relationship.",
        hint: "Points plotting two variables"
      },
      {
        front: "What four features do you describe in a scatterplot?",
        back: "Direction (positive/negative), form (linear/nonlinear), strength (how tightly points cluster), and unusual features like outliers or clusters. Always describe these in context.",
        hint: "Direction, form, strength, outliers"
      },
      {
        front: "What is the correlation coefficient $r$?",
        back: "A number measuring the strength and direction of a linear relationship between two quantitative variables. It ranges from $-1$ to $1$; values near $\\\\pm 1$ mean a strong linear relationship and values near 0 mean a weak one.",
        hint: "Ranges from -1 to 1"
      },
      {
        front: "What does the sign of $r$ tell you?",
        back: "A positive $r$ means as $x$ increases, $y$ tends to increase; a negative $r$ means as $x$ increases, $y$ tends to decrease. The sign matches the slope of the line of best fit.",
        hint: "Sign = direction of association"
      },
      {
        front: "Interpret $r = 0.92$ vs. $r = -0.30$.",
        back: "$r = 0.92$ indicates a strong positive linear relationship; $r = -0.30$ indicates a weak negative linear relationship. The closer to $\\\\pm 1$, the stronger the linear association.",
        hint: "Closer to 1 = stronger"
      },
      {
        front: "What is a key limitation of correlation $r$?",
        back: "$r$ only measures linear relationships, so a strong curved pattern can have $r$ near 0. Always look at the scatterplot before relying on $r$.",
        hint: "Only captures linear patterns"
      },
      {
        front: "Why does 'correlation does not imply causation'?",
        back: "A strong correlation may arise from coincidence or a lurking (confounding) variable rather than a cause-effect link. Only a well-designed controlled experiment can establish causation.",
        hint: "Lurking variables, no experiment"
      },
      {
        front: "What is a lurking (confounding) variable?",
        back: "A variable not included in the study that influences both variables, creating a misleading association. For example, ice cream sales and drownings correlate because of the lurking variable, temperature.",
        hint: "Hidden cause of both variables"
      },
      {
        front: "How do outliers and influential points affect correlation?",
        back: "An outlier far from the pattern can dramatically increase or decrease $r$. Influential points, especially those with extreme $x$-values, can pull the regression line and distort the correlation.",
        hint: "Extreme points distort r"
      },
      {
        front: "Does adding a constant or rescaling units change $r$?",
        back: "No. The correlation $r$ is unitless and unchanged by adding constants or multiplying by positive constants (e.g., converting cm to inches). Swapping $x$ and $y$ also leaves $r$ unchanged.",
        hint: "r is unit-free"
      },
      {
        front: "What is the difference between explanatory and response variables?",
        back: "The explanatory (independent) variable, plotted on the x-axis, is thought to explain changes in the response (dependent) variable on the y-axis. Identifying them correctly matters for interpretation and regression.",
        hint: "x explains y"
      },
      {
        front: "Common trap: Can $r = 0$ mean no relationship at all?",
        back: "No. $r = 0$ means no linear relationship, but a strong nonlinear pattern (like a U-shape) can still exist. Always inspect the scatterplot, not just $r$.",
        hint: "No LINEAR relationship only"
      },
      {
        front: "What does an $r$ value of exactly 1 or -1 indicate?",
        back: "All points lie exactly on a straight line: $r = 1$ for a perfect positive line, $r = -1$ for a perfect negative line. Such perfect correlations are rare with real data.",
        hint: "All points on one line"
      }
    ]
  },
  {
    slug: "intro-statistics-prealg",
    cards: [
      {
        front: "What is the difference between a population and a sample?",
        back: "A population is the entire group you want to study; a sample is a smaller subset actually observed. We use samples because studying an entire population is often impractical.",
        hint: "Whole group vs. part"
      },
      {
        front: "What is the mean and how do you compute it?",
        back: "The mean (average) is the sum of all values divided by the number of values: $\\\\text{mean} = \\\\frac{\\\\text{sum of values}}{\\\\text{count}}$. For 4, 6, 8, 10: $(4+6+8+10)/4 = 7$.",
        hint: "Add up, divide by how many"
      },
      {
        front: "What is the median and how do you find it?",
        back: "The median is the middle value when data are ordered from least to greatest. With an even number of values, it is the average of the two middle values. For 3, 5, 8: median is 5.",
        hint: "Middle value of ordered data"
      },
      {
        front: "What is the mode?",
        back: "The mode is the value that appears most often in a data set. A set can have no mode, one mode, or multiple modes. In 2, 3, 3, 7, the mode is 3.",
        hint: "Most frequent value"
      },
      {
        front: "What is the range of a data set?",
        back: "The range is the difference between the largest and smallest values: $\\\\text{range} = \\\\text{max} - \\\\text{min}$. It measures the spread of the data. For 4, 9, 15: range is $15 - 4 = 11$.",
        hint: "Max minus min"
      },
      {
        front: "When is the median a better measure of center than the mean?",
        back: "When the data have outliers or are skewed, the median is more representative because the mean is pulled toward extreme values. The median resists outliers.",
        hint: "Skewed data or outliers"
      },
      {
        front: "Worked example: Find the median of 12, 7, 9, 15, 20, 4.",
        back: "Order them: 4, 7, 9, 12, 15, 20. With six values (even), average the two middle ones: $(9 + 12)/2 = 10.5$.",
        hint: "Order first, then average middle two"
      },
      {
        front: "What is an outlier?",
        back: "An outlier is a value that is much larger or smaller than the rest of the data. Outliers can strongly affect the mean and range but have little effect on the median.",
        hint: "Unusually high or low value"
      },
      {
        front: "What is a bar graph vs. a histogram?",
        back: "A bar graph compares categories with separated bars; a histogram shows the distribution of numerical data using touching bars over intervals (bins). Use a histogram for continuous/grouped numeric data.",
        hint: "Categories vs. numeric intervals"
      },
      {
        front: "What is the difference between categorical and numerical data?",
        back: "Categorical (qualitative) data describe groups or labels (e.g., colors, names); numerical (quantitative) data are measurable amounts (e.g., heights, test scores). The type of data determines which graphs and measures apply.",
        hint: "Labels vs. numbers"
      },
      {
        front: "How do you read a frequency table?",
        back: "A frequency table lists each value or category alongside how many times it occurs (its frequency). The sum of all frequencies equals the total number of data points.",
        hint: "Value paired with its count"
      },
      {
        front: "Common trap: Do you have to order data before finding the mean?",
        back: "No, ordering is not needed for the mean, you just add and divide. But you MUST order the data before finding the median. Mixing up these procedures is a common mistake.",
        hint: "Mean no, median yes"
      },
      {
        front: "What does it mean for data to be 'skewed'?",
        back: "Skewed data are not symmetric: in a right-skewed distribution, a tail of high values stretches right (mean > median); in a left-skewed one, a tail of low values stretches left (mean < median).",
        hint: "Tail direction tells the skew"
      }
    ]
  },
  {
    slug: "aas-reconstruction-jim-crow",
    cards: [
      {
        front: "What was Reconstruction (1865-1877)?",
        back: "The period after the Civil War when the U.S. attempted to rebuild the South and integrate formerly enslaved people into society as citizens. It saw major civil rights gains that were later rolled back.",
        hint: "Post-Civil War rebuilding, 1865-77"
      },
      {
        front: "What were the Reconstruction Amendments?",
        back: "The 13th (abolished slavery), 14th (granted citizenship and equal protection), and 15th (prohibited denying the vote based on race) Amendments. Together they aimed to secure freedom and rights for African Americans.",
        hint: "13th, 14th, 15th"
      },
      {
        front: "What was the Freedmen's Bureau?",
        back: "A federal agency (1865) that aided formerly enslaved people and poor whites with food, education, legal help, and labor contracts. It founded schools and colleges but was underfunded and disbanded in 1872.",
        hint: "Federal aid agency for the freed"
      },
      {
        front: "What were Black Codes?",
        back: "Restrictive laws passed by Southern states right after the Civil War to control freedpeople's labor and movement, effectively re-creating conditions of slavery. They provoked Radical Republicans to push harsher Reconstruction.",
        hint: "Post-war laws restricting the freed"
      },
      {
        front: "What were Jim Crow laws?",
        back: "State and local laws enforcing racial segregation in the South from the 1870s into the 1960s. They mandated separate facilities for Black and white people in schools, transit, and public life, entrenching white supremacy.",
        hint: "Legalized racial segregation"
      },
      {
        front: "What did Plessy v. Ferguson (1896) establish?",
        back: "The Supreme Court ruled that racial segregation was constitutional under the doctrine of 'separate but equal.' This legitimized Jim Crow laws for decades until overturned by Brown v. Board of Education (1954).",
        hint: "'Separate but equal' upheld"
      },
      {
        front: "How were African Americans disenfranchised after Reconstruction?",
        back: "Through poll taxes, literacy tests, grandfather clauses, and white primaries, plus intimidation and violence. These tactics circumvented the 15th Amendment and stripped most Black Southerners of the vote.",
        hint: "Poll taxes, literacy tests, grandfather clauses"
      },
      {
        front: "What was the Compromise of 1877?",
        back: "A deal resolving the disputed 1876 election: Republican Rutherford B. Hayes became president in exchange for withdrawing federal troops from the South. It effectively ended Reconstruction and abandoned Black Southerners.",
        hint: "Ended Reconstruction, removed troops"
      },
      {
        front: "What was sharecropping?",
        back: "A labor system where freedpeople farmed land owned by whites in exchange for a share of the crop. Debt, low crop prices, and exploitative arrangements trapped many in a cycle of poverty resembling economic bondage.",
        hint: "Farming for a share, cycle of debt"
      },
      {
        front: "Who was Ida B. Wells and what did she do?",
        back: "A journalist and activist who led an anti-lynching campaign in the 1890s, documenting and publicizing the epidemic of racial terror lynchings. She was also a co-founder of the NAACP.",
        hint: "Anti-lynching journalist"
      },
      {
        front: "What was the debate between Booker T. Washington and W.E.B. Du Bois?",
        back: "Washington urged accommodation and vocational self-help (the Atlanta Compromise); Du Bois demanded immediate civil rights and higher education for a 'Talented Tenth.' Their disagreement shaped early Black political strategy.",
        hint: "Accommodation vs. immediate rights"
      },
      {
        front: "What was the Great Migration?",
        back: "The mass movement of around six million African Americans from the rural South to Northern and Western cities (c. 1910-1970), fleeing Jim Crow and seeking jobs. It reshaped American cities and Black political and cultural life.",
        hint: "South to North, ~6 million"
      },
      {
        front: "Common trap: Did Reconstruction permanently secure Black civil rights?",
        back: "No. Despite the Reconstruction Amendments and brief Black political participation, the gains were undone by the end of Reconstruction in 1877, Jim Crow laws, and disenfranchisement, requiring renewed struggle in the 20th century.",
        hint: "Gains were rolled back after 1877"
      }
    ]
  }
];
