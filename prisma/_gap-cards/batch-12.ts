export const batchCards: { slug: string; cards: { front: string; back: string; hint?: string }[] }[] = [
  {
    slug: "variables-algebraic-expressions-prealg",
    cards: [
      {
        front: "What is a variable?",
        back: "A variable is a letter or symbol (like $x$ or $n$) that stands for an unknown number or a number that can change. It lets us write general rules and expressions.",
        hint: "A placeholder for a number.",
      },
      {
        front: "What is an algebraic expression?",
        back: "An algebraic expression is a combination of numbers, variables, and operations (such as $+$, $-$, $\\\\times$, $\\\\div$) with no equals sign. Example: $3x + 5$.",
        hint: "No equals sign means it's an expression, not an equation.",
      },
      {
        front: "What is the difference between an expression and an equation?",
        back: "An expression (like $2x + 1$) has no equals sign and can be simplified or evaluated. An equation (like $2x + 1 = 7$) sets two expressions equal and can be solved for the variable.",
        hint: "Look for the equals sign.",
      },
      {
        front: "Name the parts of the term $7x$.",
        back: "In $7x$, the number $7$ is the coefficient, $x$ is the variable, and $7x$ together is one term. The $x$ has an unwritten exponent of $1$.",
        hint: "Coefficient times variable.",
      },
      {
        front: "What is a constant term?",
        back: "A constant is a term with a fixed value and no variable, such as the $5$ in $3x + 5$. Its value never changes.",
        hint: "Just a plain number.",
      },
      {
        front: "What are like terms? Give an example.",
        back: "Like terms have the exact same variable raised to the same power, so they can be combined. For example, $4x$ and $9x$ are like terms (sum $13x$), but $4x$ and $4x^2$ are not.",
        hint: "Same variable, same exponent.",
      },
      {
        front: "Evaluate $4x - 3$ when $x = 5$.",
        back: "Substitute $5$ for $x$: $4(5) - 3 = 20 - 3 = 17$. Always multiply before subtracting (order of operations).",
        hint: "Replace x, then do the arithmetic.",
      },
      {
        front: "How do you write 'a number increased by 8' as an expression?",
        back: "Let the number be $n$. 'Increased by 8' means add 8, so the expression is $n + 8$.",
        hint: "Increased by means add.",
      },
      {
        front: "Translate 'the product of 6 and a number, decreased by 2' into an expression.",
        back: "Product of 6 and a number is $6n$; decreased by 2 means subtract 2, giving $6n - 2$.",
        hint: "Product means multiply.",
      },
      {
        front: "Simplify $5x + 2 + 3x$.",
        back: "Combine the like terms $5x$ and $3x$ to get $8x$; the constant $2$ stays. The result is $8x + 2$.",
        hint: "Add the coefficients of the x-terms.",
      },
      {
        front: "Common trap: is $3x$ the same as $x^3$?",
        back: "No. $3x$ means $3 \\\\times x$ (three times the number), while $x^3$ means $x \\\\times x \\\\times x$. They are different and usually unequal.",
        hint: "Multiplication vs. repeated multiplication.",
      },
      {
        front: "What does a coefficient of 1 look like, as in $x$?",
        back: "The term $x$ has an understood coefficient of $1$, so $x$ means $1x$. Similarly $-x$ means $-1x$.",
        hint: "An invisible 1 sits in front.",
      },
      {
        front: "Use the distributive property to simplify $3(x + 4)$.",
        back: "Multiply $3$ by each term inside: $3 \\\\cdot x + 3 \\\\cdot 4 = 3x + 12$.",
        hint: "Multiply the outside number by everything inside.",
      },
    ],
  },
  {
    slug: "synthetic-division",
    cards: [
      {
        front: "What is synthetic division used for?",
        back: "Synthetic division is a shortcut for dividing a polynomial by a linear factor of the form $x - c$. It produces the quotient and remainder using only the coefficients.",
        hint: "Only works for linear divisors x - c.",
      },
      {
        front: "What divisor form is required for synthetic division?",
        back: "The divisor must be linear of the form $x - c$. You use the value $c$ in the synthetic setup. For divisor $x - 3$, $c = 3$; for $x + 2$, write it as $x - (-2)$ so $c = -2$.",
        hint: "Flip the sign of the constant in the divisor.",
      },
      {
        front: "How do you handle a missing-degree term in synthetic division?",
        back: "Insert a $0$ as a placeholder coefficient for any missing power. For $x^3 - 2x + 1$, use coefficients $1, 0, -2, 1$ (the $x^2$ term is $0$).",
        hint: "Never skip a degree; use zero.",
      },
      {
        front: "Describe the synthetic division procedure.",
        back: "Bring down the first coefficient. Multiply it by $c$, add to the next coefficient, and repeat. The final number is the remainder; the others are the quotient's coefficients (degree one less than the dividend).",
        hint: "Multiply-add down the row.",
      },
      {
        front: "Divide $x^2 + 5x + 6$ by $x + 2$ using synthetic division.",
        back: "Use $c = -2$ with coefficients $1, 5, 6$. Bring down $1$; $1 \\\\cdot(-2)=-2$, $5+(-2)=3$; $3\\\\cdot(-2)=-6$, $6+(-6)=0$. Quotient $x + 3$, remainder $0$, so the result is $x + 3$.",
        hint: "c is -2, not +2.",
      },
      {
        front: "What is the Remainder Theorem and its link to synthetic division?",
        back: "The Remainder Theorem says the remainder when a polynomial $P(x)$ is divided by $x - c$ equals $P(c)$. So the last number in synthetic division is $P(c)$.",
        hint: "Remainder = P(c).",
      },
      {
        front: "What does a remainder of 0 tell you?",
        back: "A remainder of $0$ means $x - c$ divides evenly, so $x - c$ is a factor of the polynomial and $c$ is a root (zero) of $P(x)$.",
        hint: "Factor Theorem.",
      },
      {
        front: "How do you read the quotient from the synthetic division bottom row?",
        back: "The bottom-row numbers (except the last) are the quotient coefficients, starting one degree lower than the dividend. Dividing a degree-3 polynomial gives a degree-2 quotient.",
        hint: "Drop one degree.",
      },
      {
        front: "Common trap: dividing by $2x - 1$ directly with synthetic division.",
        back: "Synthetic division needs a leading coefficient of $1$ in the divisor. Factor out the leading coefficient: $2x - 1 = 2(x - \\\\tfrac{1}{2})$, use $c = \\\\tfrac{1}{2}$, then divide the quotient by $2$ afterward.",
        hint: "Use the root, then adjust.",
      },
      {
        front: "Evaluate $P(x) = x^3 - 4x + 1$ at $x = 2$ using synthetic division.",
        back: "Coefficients $1, 0, -4, 1$ with $c = 2$: bring down $1$; $1\\\\cdot2=2$, $0+2=2$; $2\\\\cdot2=4$, $-4+4=0$; $0\\\\cdot2=0$, $1+0=1$. Remainder $1$, so $P(2) = 1$.",
        hint: "Remainder equals P(2).",
      },
      {
        front: "Why is synthetic division faster than long division?",
        back: "It uses only coefficients (no variables written out) and replaces subtraction with addition by using $c$ instead of $-c$, reducing arithmetic and bookkeeping for linear divisors.",
        hint: "Numbers only, addition instead of subtraction.",
      },
      {
        front: "How do you express the result of $P(x) \\\\div (x - c)$ from synthetic division?",
        back: "Write $P(x) = (x - c)\\\\cdot Q(x) + R$, where $Q(x)$ is the quotient and $R$ is the remainder. Equivalently $\\\\frac{P(x)}{x-c} = Q(x) + \\\\frac{R}{x-c}$.",
        hint: "Dividend = divisor times quotient plus remainder.",
      },
      {
        front: "Use synthetic division to test if $x = -1$ is a root of $x^3 + 2x^2 - x - 2$.",
        back: "Coefficients $1, 2, -1, -2$, $c = -1$: bring down $1$; $-1$, $2-1=1$; $-1$, $-1-1=-2$; $2$, $-2+2=0$. Remainder $0$, so $x = -1$ is a root.",
        hint: "Zero remainder means root.",
      },
    ],
  },
  {
    slug: "apes-renewable-energy",
    cards: [
      {
        front: "What defines a renewable energy resource?",
        back: "A renewable resource is replenished naturally on a human timescale (e.g., solar, wind, hydro, geothermal, biomass). It contrasts with nonrenewable fossil fuels and nuclear, which deplete with use.",
        hint: "Naturally replenished.",
      },
      {
        front: "How does a photovoltaic (PV) solar cell generate electricity?",
        back: "PV cells use semiconductor materials (usually silicon) to convert sunlight directly into electricity via the photovoltaic effect, where photons knock electrons loose to create a current. No moving parts or emissions during operation.",
        hint: "Photons free electrons in silicon.",
      },
      {
        front: "Distinguish active from passive solar heating.",
        back: "Active solar uses mechanical equipment (pumps, fans, collectors) to capture and distribute heat. Passive solar uses building design and materials (south-facing windows, thermal mass) to absorb and store heat without mechanical systems.",
        hint: "Active uses machines; passive uses design.",
      },
      {
        front: "What is hydroelectric power and one major environmental drawback?",
        back: "Hydroelectric power generates electricity from moving water turning turbines, often via dams. Drawbacks include flooding habitats, blocking fish migration, altering downstream sediment/flow, and methane from decomposing reservoir vegetation.",
        hint: "Dams block rivers and fish.",
      },
      {
        front: "How does wind energy produce electricity, and where is it most effective?",
        back: "Wind turns turbine blades connected to a generator. It is most effective in consistently windy areas (plains, ridges, offshore). Drawbacks include intermittency, bird/bat mortality, and noise.",
        hint: "Kinetic energy of wind spins a generator.",
      },
      {
        front: "What is geothermal energy and where is it most accessible?",
        back: "Geothermal energy taps heat from Earth's interior (magma, hot rock, steam) to generate electricity or heat buildings. It is most accessible near tectonic plate boundaries and volcanic regions like Iceland.",
        hint: "Earth's internal heat.",
      },
      {
        front: "What is biomass energy, and is it carbon neutral?",
        back: "Biomass burns organic material (wood, crop waste, dung) for energy. It is often called 'carbon neutral' because regrown plants reabsorb $CO_2$, but in practice it can release particulates and net carbon if harvested unsustainably.",
        hint: "Burning recently living matter.",
      },
      {
        front: "Define energy efficiency and why it matters for renewables.",
        back: "Energy efficiency is the percent of input energy converted to useful output. Higher efficiency reduces resource use and waste heat. Conservation and efficiency lower demand, complementing renewable supply.",
        hint: "Useful output divided by input.",
      },
      {
        front: "What is the key limitation of solar and wind called 'intermittency'?",
        back: "Intermittency means solar and wind only produce power when the sun shines or wind blows, so supply varies. It requires energy storage (batteries) or backup/grid management to provide steady power.",
        hint: "Power isn't available on demand.",
      },
      {
        front: "How do hydrogen fuel cells work, and what is the catch?",
        back: "Fuel cells combine hydrogen and oxygen to produce electricity, with water as the only emission. The catch: most hydrogen is currently produced from natural gas (releasing $CO_2$) or by electrolysis that requires lots of energy.",
        hint: "Clean at the cell, dirty at production.",
      },
      {
        front: "What is the difference between energy conservation and energy efficiency?",
        back: "Conservation means using less energy by changing behavior (turning off lights, driving less). Efficiency means using technology that does the same task with less energy (LED bulbs, better insulation).",
        hint: "Behavior vs. technology.",
      },
      {
        front: "Why are renewables generally preferred over fossil fuels environmentally?",
        back: "Renewables produce little to no greenhouse gas or air pollution during operation, do not deplete finite reserves, and reduce dependence on extraction-related impacts like mining and oil spills.",
        hint: "Lower emissions, not depleted.",
      },
      {
        front: "Common trap: is nuclear energy renewable?",
        back: "No. Nuclear is a low-carbon but nonrenewable resource because it relies on finite uranium fuel. It is often grouped with renewables for being low-emission but is technically nonrenewable.",
        hint: "Low-carbon but finite fuel.",
      },
    ],
  },
  {
    slug: "apush-revolution-independence",
    cards: [
      {
        front: "What did the Proclamation of 1763 do, and why did colonists resent it?",
        back: "It banned colonial settlement west of the Appalachian Mountains to reduce conflict with Native Americans after the French and Indian War. Colonists resented limits on western expansion after fighting for that land.",
        hint: "No settlement past the Appalachians.",
      },
      {
        front: "Explain the colonial slogan 'no taxation without representation.'",
        back: "Colonists argued Parliament could not tax them because they had no elected representatives in it. The British countered with 'virtual representation,' claiming Parliament represented all subjects.",
        hint: "Actual vs. virtual representation.",
      },
      {
        front: "What was the significance of the Stamp Act (1765)?",
        back: "It was the first direct tax on the colonies, requiring stamps on printed materials. It triggered the Stamp Act Congress and widespread protest/boycotts, uniting colonies against parliamentary taxation.",
        hint: "First direct internal tax.",
      },
      {
        front: "What were the Townshend Acts and the colonial response?",
        back: "The Townshend Acts (1767) taxed imported goods like glass, paper, and tea. Colonists responded with boycotts of British goods and committees of correspondence to coordinate resistance.",
        hint: "Taxes on imports, met with boycotts.",
      },
      {
        front: "Describe the Boston Massacre (1770) and its propaganda use.",
        back: "British soldiers fired into a hostile crowd, killing five colonists. Patriots, especially Paul Revere's engraving, used it as propaganda to inflame anti-British sentiment.",
        hint: "Five killed; Revere's engraving.",
      },
      {
        front: "What was the Boston Tea Party and the Intolerable Acts?",
        back: "In 1773, the Sons of Liberty dumped British tea into Boston Harbor protesting the Tea Act. Britain retaliated with the Coercive (Intolerable) Acts in 1774, closing Boston's port and restricting Massachusetts's government.",
        hint: "Tea protest, then punishment.",
      },
      {
        front: "What did Thomas Paine's 'Common Sense' (1776) argue?",
        back: "It argued in plain language for complete independence from Britain and against monarchy, persuading many ordinary colonists. It greatly boosted popular support for revolution.",
        hint: "Pamphlet pushing full independence.",
      },
      {
        front: "What Enlightenment ideas shaped the Declaration of Independence?",
        back: "John Locke's ideas of natural rights (life, liberty, property) and government by consent. Jefferson wrote that governments derive power from the consent of the governed and may be overthrown if they violate rights.",
        hint: "Locke: natural rights and consent.",
      },
      {
        front: "Why was the Battle of Saratoga (1777) a turning point?",
        back: "The American victory convinced France to ally formally with the colonies, providing crucial military, financial, and naval support that proved decisive in winning the war.",
        hint: "Brought France into the war.",
      },
      {
        front: "What ended the Revolutionary War militarily and diplomatically?",
        back: "The British surrender at Yorktown (1781), aided by the French fleet, ended major fighting. The Treaty of Paris (1783) recognized U.S. independence and set borders to the Mississippi River.",
        hint: "Yorktown, then Treaty of Paris.",
      },
      {
        front: "How did Loyalists and Patriots differ?",
        back: "Patriots supported independence from Britain. Loyalists (Tories) remained loyal to the Crown, often facing persecution; many fled to Canada or Britain after the war. About one-third of colonists were neutral.",
        hint: "For independence vs. loyal to the king.",
      },
      {
        front: "What role did women and enslaved people play in the Revolution?",
        back: "Women managed farms/businesses, made supplies, and some (like 'Molly Pitcher') aided in battle; 'Republican Motherhood' emerged. Enslaved people fought on both sides; Britain's Dunmore's Proclamation offered freedom to those who joined the British.",
        hint: "Republican Motherhood; Dunmore's Proclamation.",
      },
      {
        front: "Common trap: did the Declaration of Independence end the war?",
        back: "No. The Declaration (July 4, 1776) announced independence but the war continued until 1781 (Yorktown) and was formally recognized in 1783 (Treaty of Paris).",
        hint: "Declaration is a beginning, not an end.",
      },
    ],
  },
  {
    slug: "wh-newly-independent-states",
    cards: [
      {
        front: "What does decolonization mean in 20th-century world history?",
        back: "Decolonization is the process by which colonies in Asia, Africa, and elsewhere gained independence from European empires, mostly after World War II (roughly 1945-1975).",
        hint: "Colonies becoming independent nations.",
      },
      {
        front: "How did Gandhi's strategy lead toward Indian independence?",
        back: "Mohandas Gandhi used nonviolent resistance (satyagraha), boycotts, and civil disobedience (like the Salt March) to pressure Britain. India gained independence in 1947.",
        hint: "Nonviolence and civil disobedience.",
      },
      {
        front: "What was the Partition of India (1947), and what was its result?",
        back: "British India was split into Hindu-majority India and Muslim-majority Pakistan. Partition triggered massive migration and deadly religious violence, killing hundreds of thousands.",
        hint: "India and Pakistan split along religious lines.",
      },
      {
        front: "Who was Kwame Nkrumah and why is he significant?",
        back: "Nkrumah led Ghana to independence from Britain in 1957, making it one of the first sub-Saharan African colonies to become independent. He championed Pan-Africanism.",
        hint: "Ghana's first leader; Pan-Africanism.",
      },
      {
        front: "What was the significance of the Algerian War of Independence?",
        back: "Algeria won independence from France in 1962 after a brutal war (1954-1962). It showed the violence settler colonies could involve and weakened French imperial ambitions.",
        hint: "Bloody war against France, won in 1962.",
      },
      {
        front: "What challenges did many newly independent states face after decolonization?",
        back: "They faced arbitrary colonial borders splitting ethnic groups, weak economies dependent on single exports, lack of trained administrators, ethnic/religious conflict, and Cold War interference.",
        hint: "Borders, economies, ethnic strife, Cold War.",
      },
      {
        front: "What was the Non-Aligned Movement?",
        back: "A coalition of newly independent and developing nations (led by figures like Nehru, Nasser, and Tito) that refused to formally side with either the U.S. or USSR during the Cold War.",
        hint: "Neither superpower bloc.",
      },
      {
        front: "How did the 1955 Bandung Conference matter?",
        back: "It gathered Asian and African nations to promote cooperation, oppose colonialism, and assert independence from Cold War blocs, laying groundwork for the Non-Aligned Movement.",
        hint: "Afro-Asian solidarity meeting.",
      },
      {
        front: "What was apartheid and how did South Africa end it?",
        back: "Apartheid was South Africa's legal system of racial segregation favoring the white minority (1948-1994). International pressure, sanctions, and internal resistance led by the ANC and Nelson Mandela ended it; Mandela became president in 1994.",
        hint: "Racial segregation ended in 1994.",
      },
      {
        front: "What is 'neocolonialism'?",
        back: "Neocolonialism is continued economic and political control of former colonies by powerful nations or corporations after formal independence, often through trade, debt, and resource dependence.",
        hint: "Control without formal colonies.",
      },
      {
        front: "Why did many newly independent African states experience instability or one-party rule?",
        back: "Colonial borders ignored ethnic divisions, institutions were weak, economies were dependent, and Cold War powers backed authoritarian allies, leading to coups, civil wars, and single-party regimes.",
        hint: "Weak institutions plus outside interference.",
      },
      {
        front: "How did Vietnam's independence differ from peaceful decolonization?",
        back: "Vietnam fought France (winning at Dien Bien Phu in 1954) then became a Cold War battleground, splitting into North and South, leading to the Vietnam War rather than a smooth transition.",
        hint: "Independence struggle became a Cold War war.",
      },
      {
        front: "Common trap: did independence immediately bring prosperity and stability?",
        back: "No. Many newly independent states inherited deep structural problems and faced economic hardship, conflict, and political instability for decades despite gaining sovereignty.",
        hint: "Sovereignty did not equal stability.",
      },
    ],
  },
  {
    slug: "discrete-random-variables",
    cards: [
      {
        front: "What is a discrete random variable?",
        back: "A discrete random variable takes a countable number of distinct values (often whole numbers), each with an assigned probability. Example: the number of heads in 3 coin flips.",
        hint: "Countable outcomes.",
      },
      {
        front: "What two conditions must a discrete probability distribution satisfy?",
        back: "(1) Each probability is between 0 and 1, i.e. $0 \\\\le P(x) \\\\le 1$. (2) The probabilities sum to 1, i.e. $\\\\sum P(x) = 1$.",
        hint: "Bounded probabilities that total 1.",
      },
      {
        front: "What is the formula for the expected value (mean) of a discrete random variable?",
        back: "$\\\\mu_X = E(X) = \\\\sum x_i \\\\, P(x_i)$, where $x_i$ are the possible values and $P(x_i)$ their probabilities. It is the long-run average outcome.",
        hint: "Multiply each value by its probability and add.",
      },
      {
        front: "What is the formula for the variance of a discrete random variable?",
        back: "$\\\\sigma_X^2 = \\\\sum (x_i - \\\\mu_X)^2 \\\\, P(x_i)$. It measures the average squared distance of values from the mean $\\\\mu_X$.",
        hint: "Weighted average of squared deviations.",
      },
      {
        front: "How do you get the standard deviation from the variance?",
        back: "Take the square root: $\\\\sigma_X = \\\\sqrt{\\\\sigma_X^2}$. It is in the same units as the variable, unlike variance.",
        hint: "Square root of variance.",
      },
      {
        front: "A variable X has values 0, 1, 2 with P = 0.2, 0.5, 0.3. Find E(X).",
        back: "$E(X) = 0(0.2) + 1(0.5) + 2(0.3) = 0 + 0.5 + 0.6 = 1.1$.",
        hint: "Sum of value times probability.",
      },
      {
        front: "What conditions define a binomial random variable (BINS)?",
        back: "Binary outcomes (success/failure), Independent trials, a fixed Number $n$ of trials, and the same Success probability $p$ on each trial.",
        hint: "BINS: Binary, Independent, Number, Same p.",
      },
      {
        front: "State the binomial probability formula and define its variables.",
        back: "$P(X = k) = \\\\binom{n}{k} p^k (1-p)^{n-k}$, where $n$ is the number of trials, $k$ the number of successes, $p$ the success probability, and $\\\\binom{n}{k}$ the number of ways to choose $k$ successes.",
        hint: "n trials, k successes, probability p.",
      },
      {
        front: "What are the mean and standard deviation of a binomial distribution?",
        back: "Mean $\\\\mu = np$ and standard deviation $\\\\sigma = \\\\sqrt{np(1-p)}$, where $n$ is the number of trials and $p$ the success probability.",
        hint: "Mean np; sd sqrt of np(1-p).",
      },
      {
        front: "How does a geometric random variable differ from a binomial?",
        back: "A geometric variable counts the number of trials until the first success (no fixed $n$), while a binomial counts successes in a fixed number $n$ of trials. Geometric: $P(X = k) = (1-p)^{k-1} p$.",
        hint: "Trials until first success.",
      },
      {
        front: "How do mean and standard deviation change when you add a constant a to X?",
        back: "Adding $a$ shifts the mean: $\\\\mu_{X+a} = \\\\mu_X + a$, but leaves standard deviation unchanged: $\\\\sigma_{X+a} = \\\\sigma_X$. Spread is unaffected by shifting.",
        hint: "Shift moves center, not spread.",
      },
      {
        front: "How do mean and standard deviation change when you multiply X by a constant b?",
        back: "$\\\\mu_{bX} = b\\\\,\\\\mu_X$ and $\\\\sigma_{bX} = |b|\\\\,\\\\sigma_X$. Variance scales by $b^2$.",
        hint: "Scaling changes both; sd by |b|.",
      },
      {
        front: "For independent X and Y, how do you combine means and variances?",
        back: "Means add or subtract: $\\\\mu_{X \\\\pm Y} = \\\\mu_X \\\\pm \\\\mu_Y$. Variances always ADD (even for differences) when independent: $\\\\sigma^2_{X \\\\pm Y} = \\\\sigma^2_X + \\\\sigma^2_Y$.",
        hint: "Variances add even for X - Y.",
      },
      {
        front: "Common trap: can you add standard deviations directly?",
        back: "No. Standard deviations do not add; you must add the variances first, then take the square root. $\\\\sigma_{X+Y} = \\\\sqrt{\\\\sigma_X^2 + \\\\sigma_Y^2}$, not $\\\\sigma_X + \\\\sigma_Y$.",
        hint: "Add variances, then square-root.",
      },
    ],
  },
  {
    slug: "macro-comparative-advantage",
    cards: [
      {
        front: "What is absolute advantage?",
        back: "A producer has an absolute advantage when it can produce more of a good using the same resources, or the same amount using fewer resources, than another producer.",
        hint: "Who produces more with the same inputs.",
      },
      {
        front: "What is comparative advantage?",
        back: "A producer has a comparative advantage in the good it can produce at a lower opportunity cost than another producer. This, not absolute advantage, determines the basis for beneficial trade.",
        hint: "Lower opportunity cost.",
      },
      {
        front: "How do you calculate opportunity cost from a production table (output method)?",
        back: "For a given country, the opportunity cost of one unit of good A equals (units of B it could have made) divided by (units of A): $\\\\text{OC of A} = \\\\frac{\\\\text{B}}{\\\\text{A}}$.",
        hint: "Other Over: the other good over the good you want.",
      },
      {
        front: "Which type of advantage determines who should specialize and trade?",
        back: "Comparative advantage. Each producer should specialize in the good with the lowest opportunity cost, even if one producer has an absolute advantage in both goods.",
        hint: "Specialize where opportunity cost is lowest.",
      },
      {
        front: "Why can two countries both gain from trade even if one is better at everything?",
        back: "Because opportunity costs differ. By specializing in their comparative-advantage good and trading, both countries can consume beyond their own production possibilities, raising total output.",
        hint: "Different opportunity costs create gains.",
      },
      {
        front: "What are the terms of trade, and when is trade mutually beneficial?",
        back: "Terms of trade is the agreed exchange ratio between two goods. Trade benefits both parties when the ratio falls between the two countries' opportunity costs of the traded good.",
        hint: "Price must sit between the two opportunity costs.",
      },
      {
        front: "Country A makes 10 wheat or 5 cloth; Country B makes 8 wheat or 8 cloth. Find A's opportunity cost of 1 wheat.",
        back: "A's OC of 1 wheat = cloth/wheat = $5/10 = 0.5$ cloth. (B's OC of 1 wheat = $8/8 = 1$ cloth, so A has the comparative advantage in wheat.)",
        hint: "Other good over the good in question.",
      },
      {
        front: "In the input method (hours per unit), how do you find opportunity cost?",
        back: "With input data (e.g., hours to make one unit), opportunity cost of good A = (hours per A) divided by (hours per B), i.e. you flip the ratio compared to the output method.",
        hint: "Inputs flip; remember 'output over, input flip.'",
      },
      {
        front: "What is specialization and why does it increase total output?",
        back: "Specialization means each producer concentrates on the good in which it has a comparative advantage. Because resources are used where they are most efficient, total combined output rises.",
        hint: "Do what you give up least to make.",
      },
      {
        front: "How can comparative advantage be shown on a PPC (production possibilities curve)?",
        back: "The slope of a linear PPC equals the opportunity cost (constant). A flatter or steeper slope relative to another country's PPC indicates which good each should specialize in.",
        hint: "PPC slope is opportunity cost.",
      },
      {
        front: "Common trap: confusing absolute and comparative advantage.",
        back: "Absolute advantage compares quantities produced; comparative advantage compares opportunity costs. A country can have an absolute advantage in both goods but a comparative advantage in only one.",
        hint: "Quantity vs. opportunity cost.",
      },
      {
        front: "Can a country have a comparative advantage in both goods?",
        back: "No. Comparative advantage is relative, so each country has a comparative advantage in exactly one of two goods (unless opportunity costs are identical, in which case there is no basis for trade).",
        hint: "Each gets exactly one of two goods.",
      },
      {
        front: "What does it mean to consume beyond the PPC through trade?",
        back: "By specializing and trading, a country can reach combinations of goods outside (to the right of) its own production possibilities curve, which would be impossible producing alone.",
        hint: "Trade lets you exceed your own PPC.",
      },
    ],
  },
  {
    slug: "sampling-methods",
    cards: [
      {
        front: "What is the difference between a population and a sample?",
        back: "The population is the entire group of interest; a sample is the subset actually studied. We use samples to make inferences about the population.",
        hint: "Whole group vs. studied subset.",
      },
      {
        front: "What is a simple random sample (SRS)?",
        back: "An SRS is chosen so that every group of $n$ individuals has an equal chance of being selected. It is the gold standard for avoiding bias.",
        hint: "Every possible sample equally likely.",
      },
      {
        front: "Describe stratified random sampling.",
        back: "The population is divided into homogeneous groups (strata) sharing a trait, and an SRS is taken from each stratum. It ensures representation of each group and can reduce variability.",
        hint: "Split into similar groups, sample each.",
      },
      {
        front: "Describe cluster sampling.",
        back: "The population is divided into clusters (often by location), some clusters are randomly chosen, and all individuals in those clusters are sampled. It is convenient and cheaper but clusters should be representative.",
        hint: "Randomly pick whole groups.",
      },
      {
        front: "What is the difference between stratified and cluster sampling?",
        back: "In stratified sampling you sample from EVERY stratum (groups internally similar). In cluster sampling you sample ALL members of a FEW chosen clusters (clusters ideally each resemble the population).",
        hint: "Strata: some from each; clusters: all from some.",
      },
      {
        front: "Describe systematic random sampling.",
        back: "You select every $k$th individual from a list after a random starting point (e.g., every 10th person). It is simple but can introduce bias if the list has a hidden periodic pattern.",
        hint: "Every kth from a list.",
      },
      {
        front: "What is a convenience sample and why is it problematic?",
        back: "A convenience sample includes individuals who are easiest to reach. It is highly prone to bias and usually not representative of the population.",
        hint: "Easiest to reach; biased.",
      },
      {
        front: "What is voluntary response bias?",
        back: "Voluntary response bias occurs when people choose whether to participate (e.g., online polls). Those with strong opinions respond more, overrepresenting extreme views.",
        hint: "Self-selected respondents skew results.",
      },
      {
        front: "What is undercoverage?",
        back: "Undercoverage happens when some groups in the population are left out of or underrepresented in the sampling process, causing bias.",
        hint: "Some groups can't be selected.",
      },
      {
        front: "What is nonresponse bias?",
        back: "Nonresponse bias arises when selected individuals cannot be contacted or refuse to participate, and those who do respond differ systematically from those who do not.",
        hint: "Chosen people who don't answer.",
      },
      {
        front: "What is response bias?",
        back: "Response bias occurs when respondents answer inaccurately, due to lying, social pressure, confusing or leading question wording, or interviewer influence.",
        hint: "Inaccurate answers from how/what is asked.",
      },
      {
        front: "How can question wording create bias?",
        back: "Leading, loaded, or confusing wording pushes respondents toward a particular answer. Neutral, clear wording is essential to avoid distorting results.",
        hint: "Leading questions tilt answers.",
      },
      {
        front: "Common trap: does a larger sample fix bias?",
        back: "No. Increasing sample size reduces variability but does NOT fix bias. A biased method gives biased results no matter how large the sample. Random selection is what reduces bias.",
        hint: "Size reduces variance, not bias.",
      },
      {
        front: "Why is random selection in sampling important?",
        back: "Random selection removes human choice from who is included, preventing systematic favoring of certain individuals and allowing valid generalization to the population.",
        hint: "Randomness prevents systematic bias.",
      },
    ],
  },
];
