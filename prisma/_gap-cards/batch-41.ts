export const batchCards: { slug: string; cards: { front: string; back: string; hint?: string }[] }[] = [
  {
    slug: "partial-fractions-calcbc",
    cards: [
      {
        front: "What is the method of partial fractions used for in AP Calculus BC?",
        back: "It rewrites a rational function $\\frac{P(x)}{Q(x)}$ as a sum of simpler fractions whose denominators are the factors of $Q(x)$. This makes integrals of rational functions tractable, usually producing logarithms and arctangents.",
        hint: "Decompose before integrating."
      },
      {
        front: "What condition must a rational function satisfy before you decompose it into partial fractions?",
        back: "The fraction must be proper: the degree of the numerator must be strictly less than the degree of the denominator. If it is improper, perform polynomial long division first and decompose the remainder.",
        hint: "Numerator degree < denominator degree."
      },
      {
        front: "Set up the partial fraction form for $\\frac{5x-3}{(x-1)(x+2)}$.",
        back: "Write $\\frac{5x-3}{(x-1)(x+2)} = \\frac{A}{x-1} + \\frac{B}{x+2}$. Multiply through and solve: $A=\\frac{2}{3}$ at $x=1$ gives $A=\\frac{2}{3}$... actually $5(1)-3=2=A(3)$ so $A=\\frac{2}{3}$, and $5(-2)-3=-13=B(-3)$ so $B=\\frac{13}{3}$.",
        hint: "Distinct linear factors each get a constant."
      },
      {
        front: "How do you handle a repeated linear factor like $(x-2)^3$ in a partial fraction decomposition?",
        back: "Include one term for each power up to the multiplicity: $\\frac{A}{x-2} + \\frac{B}{(x-2)^2} + \\frac{C}{(x-2)^3}$. Each numerator is a constant.",
        hint: "One term per power, ascending."
      },
      {
        front: "How do you handle an irreducible quadratic factor like $x^2+4$ in the denominator?",
        back: "Use a linear numerator: $\\frac{Ax+B}{x^2+4}$. An irreducible quadratic (negative discriminant) requires a numerator of the form $Ax+B$, not just a constant.",
        hint: "Linear numerator over the quadratic."
      },
      {
        front: "What is the 'cover-up' (Heaviside) method for distinct linear factors?",
        back: "To find the constant over $(x-a)$, multiply both sides by $(x-a)$ and substitute $x=a$, which 'covers up' that factor. The result is $\\frac{P(a)}{Q'_{\\text{rest}}(a)}$ evaluated at the root.",
        hint: "Plug in the root that kills the factor."
      },
      {
        front: "Integrate $\\int \\frac{1}{x^2-1}\\,dx$ using partial fractions.",
        back: "Factor: $\\frac{1}{(x-1)(x+1)} = \\frac{1/2}{x-1} - \\frac{1/2}{x+1}$. Integrating gives $\\frac{1}{2}\\ln|x-1| - \\frac{1}{2}\\ln|x+1| + C = \\frac{1}{2}\\ln\\left|\\frac{x-1}{x+1}\\right| + C$.",
        hint: "Difference of squares, then two logs."
      },
      {
        front: "After decomposition, what two integral forms most commonly appear?",
        back: "A linear factor $\\frac{A}{x-a}$ integrates to $A\\ln|x-a|$. An irreducible quadratic term integrates to a combination of a logarithm (from the $u$-part) and an arctangent (from the constant part after completing the square).",
        hint: "Logs and arctangents."
      },
      {
        front: "A common trap: what must you do with $\\frac{x^3+1}{x^2-x}$ before decomposing?",
        back: "Divide first, because the numerator degree (3) exceeds the denominator degree (2). Polynomial long division yields a polynomial plus a proper remainder fraction that you then decompose.",
        hint: "Improper fraction needs division."
      },
      {
        front: "How do you integrate the arctangent part of $\\frac{Ax+B}{x^2+a^2}$?",
        back: "Split it: the $Ax$ part uses $u=x^2+a^2$ giving a logarithm; the constant $B$ part uses $\\int \\frac{1}{x^2+a^2}\\,dx = \\frac{1}{a}\\arctan\\left(\\frac{x}{a}\\right)+C$.",
        hint: "Split into a log piece and an arctan piece."
      },
      {
        front: "Why must you check that a quadratic factor is truly irreducible before assigning $\\frac{Ax+B}{\\cdots}$?",
        back: "If the quadratic factors over the reals (non-negative discriminant), you should factor it into linear pieces instead. Using a linear numerator over a reducible quadratic is a common setup error.",
        hint: "Test the discriminant $b^2-4ac$."
      },
      {
        front: "Decompose $\\frac{3x}{(x+1)^2}$ and identify the constants.",
        back: "Write $\\frac{A}{x+1}+\\frac{B}{(x+1)^2}$. Then $3x = A(x+1)+B$. At $x=-1$: $-3=B$. Matching $x$ coefficients: $A=3$. So $\\frac{3}{x+1}-\\frac{3}{(x+1)^2}$.",
        hint: "Repeated factor: plug root, then match coefficients."
      },
      {
        front: "What is a fast way to solve for the unknown constants after setting up the decomposition?",
        back: "Clear denominators to get a polynomial identity, then either substitute strategic $x$-values (roots of factors) or equate coefficients of like powers. Strategic substitution is fastest for distinct roots.",
        hint: "Substitute roots or match coefficients."
      }
    ]
  },
  {
    slug: "unit-rates-fractions-grade7",
    cards: [
      {
        front: "What is a unit rate?",
        back: "A unit rate is a rate that compares a quantity to exactly one unit of another quantity, such as miles per 1 hour or cost per 1 item. It has a denominator of 1.",
        hint: "Per ONE of something."
      },
      {
        front: "How do you find a unit rate from a ratio like 12 dollars for 4 pounds?",
        back: "Divide the first quantity by the second: $12 \\div 4 = 3$ dollars per pound. The unit rate is 3 dollars/pound.",
        hint: "Divide to get 'per one'."
      },
      {
        front: "What is a unit rate when the quantities are fractions, like $\\frac{1}{2}$ cup flour per $\\frac{1}{4}$ cup sugar?",
        back: "Divide the fractions: $\\frac{1}{2} \\div \\frac{1}{4} = \\frac{1}{2} \\times \\frac{4}{1} = 2$ cups of flour per 1 cup of sugar. Dividing by a fraction means multiplying by its reciprocal.",
        hint: "Divide fractions = multiply by reciprocal."
      },
      {
        front: "A walker covers $\\frac{3}{4}$ mile in $\\frac{1}{4}$ hour. What is the unit rate in miles per hour?",
        back: "Compute $\\frac{3}{4} \\div \\frac{1}{4} = \\frac{3}{4} \\times \\frac{4}{1} = 3$ miles per hour.",
        hint: "Distance divided by time."
      },
      {
        front: "What is the difference between a ratio and a unit rate?",
        back: "A ratio compares two quantities (like 3:6 or 6 dollars for 2 cans). A unit rate simplifies that comparison so the second quantity is 1 (3 dollars per can).",
        hint: "Unit rate has denominator 1."
      },
      {
        front: "How can a unit rate help you find the 'better buy'?",
        back: "Compute the price per single unit (per ounce, per item) for each option. The smaller unit price is the better buy because you pay less for the same amount.",
        hint: "Compare price per one unit."
      },
      {
        front: "If a recipe uses $\\frac{2}{3}$ cup of oats for every $\\frac{1}{6}$ cup of honey, how many cups of oats per cup of honey?",
        back: "$\\frac{2}{3} \\div \\frac{1}{6} = \\frac{2}{3} \\times \\frac{6}{1} = 4$ cups of oats per cup of honey.",
        hint: "Keep, change, flip."
      },
      {
        front: "What does it mean if a relationship has a constant unit rate?",
        back: "It means the two quantities are proportional: their ratio stays the same no matter the size. The constant unit rate is the constant of proportionality.",
        hint: "Same rate every time = proportional."
      },
      {
        front: "A common trap: when finding 'miles per hour' from a fraction problem, which quantity goes on top?",
        back: "Miles (the first/named unit) goes in the numerator and hours in the denominator. 'Miles per hour' means miles divided by hours, so set up $\\frac{\\text{miles}}{\\text{hours}}$.",
        hint: "'Per' tells you what's on the bottom."
      },
      {
        front: "If $\\frac{1}{3}$ gallon of paint covers $\\frac{2}{5}$ of a wall, what fraction of the wall does 1 gallon cover?",
        back: "Find coverage per gallon: $\\frac{2}{5} \\div \\frac{1}{3} = \\frac{2}{5} \\times \\frac{3}{1} = \\frac{6}{5} = 1\\frac{1}{5}$ walls per gallon.",
        hint: "Coverage divided by gallons."
      },
      {
        front: "How do you scale a unit rate? If apples cost \\$2 per pound, what do 3.5 pounds cost?",
        back: "Multiply the unit rate by the amount: $2 \\times 3.5 = 7$ dollars. Once you have the per-unit price, multiply by the quantity.",
        hint: "Unit rate times quantity."
      },
      {
        front: "Why is dividing by a fraction the same as multiplying by its reciprocal?",
        back: "Dividing asks 'how many of this fraction fit in the whole.' Flipping the divisor (reciprocal) and multiplying gives the same result, and it is easier to compute.",
        hint: "Keep the first, flip the second, multiply."
      }
    ]
  },
  {
    slug: "csp-social-ethical-impacts",
    cards: [
      {
        front: "In AP CSP, what is the 'digital divide'?",
        back: "The digital divide is the gap between people who have access to computing devices and the internet and those who do not. It can be based on income, geography, age, or education and affects equity in opportunity.",
        hint: "Unequal access to technology."
      },
      {
        front: "What is computing bias and how does it arise?",
        back: "Computing bias occurs when a computing innovation produces unfair outcomes, often because the data used to build it reflects existing human biases or is unrepresentative. It can appear even when developers do not intend it.",
        hint: "Often baked in through biased data."
      },
      {
        front: "What is the difference between intended and unintended effects of a computing innovation?",
        back: "Intended effects are the purposes a creator designs for; unintended effects are consequences (good or bad) not anticipated, such as a connectivity app enabling harassment or a fitness tracker exposing private locations.",
        hint: "Designers cannot foresee everything."
      },
      {
        front: "What is Personally Identifiable Information (PII)?",
        back: "PII is information that can be used to identify, locate, or contact a specific individual, such as name, address, Social Security number, or biometric data. Storing it raises privacy and security risks.",
        hint: "Data that points to a specific person."
      },
      {
        front: "Why is open-source/crowdsourcing important in computing's social context?",
        back: "Crowdsourcing gathers input or labor from a large online group, and open source lets anyone use, study, and improve code freely. Both accelerate innovation and broaden participation, but raise quality and credit concerns.",
        hint: "Many contributors, shared resources."
      },
      {
        front: "What does it mean that a computing innovation can have both beneficial and harmful effects?",
        back: "The same technology can help and harm depending on use and context. For example, GPS aids navigation but can enable stalking; the AP CSP framework stresses evaluating both sides.",
        hint: "Dual-use technology."
      },
      {
        front: "What is the purpose of a Creative Commons license?",
        back: "A Creative Commons license lets a creator grant the public specific permissions to use their copyrighted work (e.g., share or remix) under stated conditions, while retaining other rights. It is more flexible than full copyright.",
        hint: "'Some rights reserved.'"
      },
      {
        front: "How can large data sets used by computing innovations threaten privacy?",
        back: "Aggregating data from many sources can reveal patterns about individuals they never intended to share. Combining harmless-looking pieces can deanonymize people or expose sensitive habits.",
        hint: "Pieces combine into a full picture."
      },
      {
        front: "What is the legal and ethical concept behind copyright and intellectual property online?",
        back: "Copyright gives creators exclusive rights to their original work; using others' material without permission or license is infringement. Proper attribution and licenses (like Creative Commons) allow ethical reuse.",
        hint: "Credit and permission matter."
      },
      {
        front: "Give an example of how a computing innovation can reduce the digital divide.",
        back: "Programs that provide low-cost devices, free public Wi-Fi, or offline-capable educational apps expand access to people who previously lacked it, narrowing the gap.",
        hint: "Increasing access and affordability."
      },
      {
        front: "What ethical responsibility do programmers have regarding data they collect?",
        back: "They should collect only necessary data, secure it, be transparent about its use, and respect user consent. Mishandling data can cause real harm even without malicious intent.",
        hint: "Minimize, secure, disclose, consent."
      },
      {
        front: "What is meant by 'unintended bias in a search or recommendation algorithm'?",
        back: "An algorithm may favor certain results or groups because of how its training data or ranking rules are built, reinforcing stereotypes or limiting exposure to diverse content, even when the goal was neutrality.",
        hint: "Filter bubbles and skewed results."
      },
      {
        front: "A common trap: does a harmful unintended effect mean the innovation is 'bad'?",
        back: "No. AP CSP expects balanced analysis: an innovation can be valuable while still having harmful effects that should be acknowledged and mitigated. Avoid all-good or all-bad conclusions.",
        hint: "Evaluate trade-offs, not absolutes."
      }
    ]
  },
  {
    slug: "multiply-divide-fractions-grade5",
    cards: [
      {
        front: "How do you multiply two fractions?",
        back: "Multiply the numerators together and the denominators together: $\\frac{a}{b} \\times \\frac{c}{d} = \\frac{a \\times c}{b \\times d}$. Then simplify if possible.",
        hint: "Tops times tops, bottoms times bottoms."
      },
      {
        front: "What is $\\frac{2}{3} \\times \\frac{3}{4}$?",
        back: "Multiply across: $\\frac{2 \\times 3}{3 \\times 4} = \\frac{6}{12} = \\frac{1}{2}$ after simplifying.",
        hint: "Then reduce the result."
      },
      {
        front: "How do you multiply a fraction by a whole number, like $5 \\times \\frac{2}{3}$?",
        back: "Write the whole number as a fraction over 1: $\\frac{5}{1} \\times \\frac{2}{3} = \\frac{10}{3} = 3\\frac{1}{3}$.",
        hint: "Whole number = number over 1."
      },
      {
        front: "What does it mean to multiply a fraction by a fraction in words?",
        back: "It means taking a fraction 'of' a fraction. For example, $\\frac{1}{2} \\times \\frac{1}{4}$ means one-half of one-fourth, which is $\\frac{1}{8}$.",
        hint: "'Of' means multiply."
      },
      {
        front: "How do you divide by a fraction?",
        back: "Multiply by the reciprocal (flip the second fraction): $\\frac{a}{b} \\div \\frac{c}{d} = \\frac{a}{b} \\times \\frac{d}{c}$.",
        hint: "Keep, change, flip."
      },
      {
        front: "What is $\\frac{3}{4} \\div \\frac{1}{2}$?",
        back: "Flip the divisor and multiply: $\\frac{3}{4} \\times \\frac{2}{1} = \\frac{6}{4} = \\frac{3}{2} = 1\\frac{1}{2}$.",
        hint: "How many halves fit in three-fourths?"
      },
      {
        front: "What is the reciprocal of a number?",
        back: "The reciprocal is the fraction flipped upside down; multiplying a number by its reciprocal gives 1. The reciprocal of $\\frac{3}{5}$ is $\\frac{5}{3}$, and of 4 is $\\frac{1}{4}$.",
        hint: "Flip it so the product is 1."
      },
      {
        front: "How do you multiply or divide mixed numbers like $1\\frac{1}{2} \\times 2$?",
        back: "First convert the mixed number to an improper fraction: $1\\frac{1}{2} = \\frac{3}{2}$. Then $\\frac{3}{2} \\times \\frac{2}{1} = \\frac{6}{2} = 3$.",
        hint: "Convert to improper fractions first."
      },
      {
        front: "When you multiply a whole number by a fraction less than 1, what happens to the size?",
        back: "The product is smaller than the original whole number, because you are taking only part of it. For example, $\\frac{1}{2} \\times 8 = 4$, which is less than 8.",
        hint: "Part of a number is smaller."
      },
      {
        front: "What is a quick way to simplify before multiplying, like $\\frac{4}{9} \\times \\frac{3}{8}$?",
        back: "Cancel common factors across the fractions first: 4 and 8 share 4, and 3 and 9 share 3, giving $\\frac{1}{3} \\times \\frac{1}{2} = \\frac{1}{6}$.",
        hint: "Cross-cancel before multiplying."
      },
      {
        front: "How do you divide a whole number by a fraction, like $6 \\div \\frac{1}{3}$?",
        back: "Write 6 as $\\frac{6}{1}$, then multiply by the reciprocal: $\\frac{6}{1} \\times \\frac{3}{1} = 18$. There are 18 thirds in 6.",
        hint: "Whole number over 1, then flip and multiply."
      },
      {
        front: "A common trap: should you find a common denominator before multiplying fractions?",
        back: "No. Common denominators are needed for adding and subtracting, NOT for multiplying or dividing. For multiplication you just multiply across.",
        hint: "Common denominators are for +/-, not x/÷."
      },
      {
        front: "What is $\\frac{2}{5}$ of 30?",
        back: "Multiply: $\\frac{2}{5} \\times 30 = \\frac{60}{5} = 12$. Taking a fraction 'of' a number means multiplying.",
        hint: "'Of' means multiply."
      }
    ]
  },
  {
    slug: "englang-writing-for-audience",
    cards: [
      {
        front: "What does 'writing for an audience' mean in AP English Language?",
        back: "It means shaping your purpose, tone, diction, examples, and appeals to fit the values, knowledge, and expectations of the specific readers you are addressing. Effective writers anticipate what their audience already believes and needs.",
        hint: "Tailor the message to the readers."
      },
      {
        front: "Define 'audience' in rhetorical analysis.",
        back: "The audience is the specific group of readers or listeners a text is intended to reach. Identifying their beliefs, expertise, and biases is essential to evaluating or making rhetorical choices.",
        hint: "Who is the message for?"
      },
      {
        front: "How does knowing the audience affect a writer's diction?",
        back: "Word choice shifts to match the audience's expertise and values: technical jargon for experts, plain or vivid language for a general public, and formal language for official or skeptical audiences.",
        hint: "Match vocabulary to the readers."
      },
      {
        front: "What is the relationship between audience and the rhetorical situation?",
        back: "The audience is one element of the rhetorical situation, which also includes the writer (speaker), purpose, context (exigence), and message. Each element shapes and constrains the others.",
        hint: "SPACE / speaker-purpose-audience-context-exigence."
      },
      {
        front: "Why must a writer consider the audience's existing values when persuading?",
        back: "Connecting an argument to values the audience already holds makes it more convincing. Appealing to shared beliefs reduces resistance and builds common ground before introducing new claims.",
        hint: "Build on shared ground."
      },
      {
        front: "How can a writer address a hostile or skeptical audience effectively?",
        back: "By acknowledging the audience's concerns, conceding valid points, using a measured tone, and providing strong evidence. Recognizing opposition builds credibility and reduces defensiveness.",
        hint: "Concede, then build credibility."
      },
      {
        front: "What is 'tone,' and how is it adjusted for an audience?",
        back: "Tone is the writer's attitude toward the subject and audience, conveyed through word choice and style. A writer may be earnest with a sympathetic crowd, cautious with skeptics, or playful with a familiar audience.",
        hint: "The writer's attitude, shaped by readers."
      },
      {
        front: "On the AP Lang rhetorical analysis essay, why should you name the specific audience?",
        back: "Identifying the audience lets you explain WHY the writer's choices are effective for those readers, which is the core of analysis. Generic claims about 'the reader' earn less credit than audience-specific reasoning.",
        hint: "Specific audience enables specific analysis."
      },
      {
        front: "How might examples and evidence change based on audience?",
        back: "A writer chooses evidence the audience will find credible and relevant: data and citations for an academic audience, anecdotes and emotional examples for a general public, and authority/precedent for a professional one.",
        hint: "Pick evidence the readers trust."
      },
      {
        front: "What is a common trap when analyzing audience in an AP essay?",
        back: "Assuming there is only one audience or treating 'the audience' as everyone. Strong responses pinpoint the intended audience and may note secondary audiences, then tie choices to them.",
        hint: "Avoid vague, universal 'reader' claims."
      },
      {
        front: "How does the medium or occasion affect audience expectations?",
        back: "A graduation speech, op-ed, and scientific report all reach different audiences with different expectations for formality, length, and evidence. Matching genre conventions signals awareness of the audience.",
        hint: "Genre and occasion set expectations."
      },
      {
        front: "Give a mini-example: how would a writer adjust an argument about climate for scientists versus the general public?",
        back: "For scientists, the writer uses precise data, peer-reviewed sources, and technical terms; for the public, the writer uses relatable analogies, vivid imagery, and appeals to family or cost, simplifying the language.",
        hint: "Same claim, different framing."
      },
      {
        front: "Why is anticipating counterarguments part of writing for an audience?",
        back: "Anticipating what skeptical audience members will object to lets the writer answer those objections preemptively, showing respect for the audience's intelligence and strengthening persuasiveness.",
        hint: "Answer objections before they are raised."
      }
    ]
  },
  {
    slug: "englang-diction-syntax",
    cards: [
      {
        front: "What is diction in rhetorical analysis?",
        back: "Diction is a writer's deliberate word choice, including connotation, formality, and specificity. Analyzing diction means explaining how particular words create tone, meaning, or effect.",
        hint: "Word choice and its effect."
      },
      {
        front: "What is syntax?",
        back: "Syntax is the arrangement of words and the structure of sentences, including length, order, and punctuation. Writers manipulate syntax to control pace, emphasis, and emotion.",
        hint: "Sentence structure and arrangement."
      },
      {
        front: "What is the difference between denotation and connotation?",
        back: "Denotation is a word's literal dictionary meaning; connotation is its emotional or cultural association. 'Cheap' and 'inexpensive' share a denotation but carry different connotations.",
        hint: "Literal vs. emotional meaning."
      },
      {
        front: "How does sentence length affect a passage's effect?",
        back: "Short sentences create urgency, emphasis, or bluntness, while long sentences can build complexity, accumulate detail, or slow the pace. Varying length controls rhythm and highlights key ideas.",
        hint: "Short = punch, long = build."
      },
      {
        front: "What is parallelism (parallel structure), and what does it accomplish?",
        back: "Parallelism repeats grammatical forms in a series, such as 'of the people, by the people, for the people.' It creates rhythm, balance, and emphasis, making ideas memorable and equal in weight.",
        hint: "Matching grammatical patterns."
      },
      {
        front: "What is a periodic sentence?",
        back: "A periodic sentence withholds its main idea until the end, building suspense or emphasis. Modifiers and clauses precede the main clause, so meaning lands at the close.",
        hint: "Main point comes last."
      },
      {
        front: "What is a cumulative (loose) sentence?",
        back: "A cumulative sentence states its main idea first, then adds modifying phrases and details. It feels conversational and lets detail accumulate after the core point.",
        hint: "Main point first, details after."
      },
      {
        front: "How can punctuation be a syntactic tool?",
        back: "Dashes create abrupt emphasis or interruption, colons introduce or expand, semicolons link related ideas, and short fragments add force. Punctuation guides pacing and emphasis.",
        hint: "Marks shape pace and stress."
      },
      {
        front: "What does it mean to analyze the EFFECT of diction, not just identify it?",
        back: "You must connect the word choice to tone, meaning, or the audience's response. Saying a word is 'negative' is not enough; explain what attitude it conveys and why it matters to the argument.",
        hint: "Name the effect, not just the device."
      },
      {
        front: "What is juxtaposition, and how does syntax create it?",
        back: "Juxtaposition places contrasting ideas or images close together to highlight differences. Placing two opposing clauses in one balanced sentence sharpens the contrast through structure.",
        hint: "Contrast by placement."
      },
      {
        front: "How does shifting from formal to colloquial diction affect tone?",
        back: "A shift to colloquial (casual) diction can create intimacy, humor, or relatability, while a shift to formal diction can signal seriousness, authority, or distance. The shift itself often marks a turn in the argument.",
        hint: "Register changes signal a shift."
      },
      {
        front: "A common trap: what mistake do students make when writing about diction and syntax?",
        back: "Listing devices without analysis ('the author uses long sentences and strong diction'). Always tie each choice to its rhetorical purpose and the writer's larger argument or tone.",
        hint: "Don't just label; explain the purpose."
      },
      {
        front: "Mini-example: analyze the syntax of 'I came. I saw. I conquered.'",
        back: "The three short, parallel, asyndetic clauses create a clipped, forceful rhythm that emphasizes speed and decisiveness, mirroring the swift conquest itself. The terse syntax conveys confident dominance.",
        hint: "Short parallel clauses = force and speed."
      }
    ]
  },
  {
    slug: "englang-ethos-pathos-logos",
    cards: [
      {
        front: "What are the three rhetorical appeals (Aristotle's modes of persuasion)?",
        back: "Ethos (appeal to credibility/character), pathos (appeal to emotion), and logos (appeal to logic/reason). Effective arguments usually blend all three.",
        hint: "Credibility, emotion, logic."
      },
      {
        front: "What is ethos?",
        back: "Ethos is an appeal to the speaker's credibility, character, or authority. It persuades by making the audience trust the speaker through expertise, honesty, shared values, or a reasonable tone.",
        hint: "Why should we trust you?"
      },
      {
        front: "What is pathos?",
        back: "Pathos is an appeal to the audience's emotions, such as fear, pity, hope, pride, or anger. It moves readers by connecting the argument to their feelings and values.",
        hint: "Appeal to feelings."
      },
      {
        front: "What is logos?",
        back: "Logos is an appeal to logic and reason, using facts, statistics, evidence, and logical structure. It persuades by making the argument seem rational and well-supported.",
        hint: "Appeal to reason and evidence."
      },
      {
        front: "How does a writer build ethos?",
        back: "By demonstrating expertise, citing credible sources, using a fair and measured tone, acknowledging counterarguments, and showing shared values with the audience. Good grammar and honesty also reinforce credibility.",
        hint: "Expertise, fairness, shared values."
      },
      {
        front: "Give an example of pathos in an argument.",
        back: "Describing a child harmed by polluted water to argue for environmental regulation uses vivid, emotional imagery to evoke sympathy and urgency, pushing the audience to act.",
        hint: "Emotional story or image."
      },
      {
        front: "What kinds of evidence signal logos?",
        back: "Statistics, data, research findings, logical reasoning, cause-and-effect chains, and clear, structured arguments. Logos relies on verifiable support and sound inference.",
        hint: "Numbers, facts, logical chains."
      },
      {
        front: "What is the danger of relying too heavily on pathos?",
        back: "Overusing emotional appeals can seem manipulative and may weaken credibility if the argument lacks logic or evidence. Critics call excessive, unsupported emotional appeal a logical weakness.",
        hint: "Emotion without substance feels manipulative."
      },
      {
        front: "How does kairos relate to the three appeals?",
        back: "Kairos is the timeliness or opportune moment of an argument; using the right appeal at the right time strengthens persuasion. An appeal that fits the occasion and audience lands more effectively.",
        hint: "The right appeal at the right time."
      },
      {
        front: "On the AP Lang exam, why is it not enough to just name 'ethos, pathos, or logos'?",
        back: "You must explain HOW the appeal works on the specific audience and WHY it advances the writer's purpose. Identifying the appeal without analyzing its effect earns little credit.",
        hint: "Analyze the effect, not just label it."
      },
      {
        front: "How can one piece of text use multiple appeals at once?",
        back: "A doctor citing a study about a disease (logos) while noting her years treating patients (ethos) and describing a suffering patient (pathos) blends all three in a single passage for maximum effect.",
        hint: "Appeals often overlap."
      },
      {
        front: "A common trap: students confuse pathos with any vivid language. How do you tell true pathos?",
        back: "True pathos is language deliberately aimed at producing an emotional response that supports the argument. Vivid description used only to inform or describe, without an emotional persuasive aim, is not pathos.",
        hint: "Emotion must serve persuasion."
      },
      {
        front: "Mini-example: 'As a 30-year firefighter, I have seen what faulty wiring does; trust me, this code saves lives.' Which appeal dominates?",
        back: "Ethos dominates, because the speaker establishes authority and credibility through experience ('30-year firefighter'). There are hints of pathos ('saves lives') and logos, but credibility is the main lever.",
        hint: "The speaker's experience is the key."
      }
    ]
  },
  {
    slug: "englang-developing-arguments",
    cards: [
      {
        front: "What is a thesis (claim) in an argumentative essay?",
        back: "A thesis is the central, debatable claim that states the writer's position and previews the line of reasoning. A strong thesis is specific, arguable, and defensible with evidence.",
        hint: "Your arguable main point."
      },
      {
        front: "What is a 'line of reasoning'?",
        back: "A line of reasoning is the logical sequence of claims and evidence that connects the thesis to its support. Each paragraph advances the argument so the reasoning builds coherently toward the conclusion.",
        hint: "The logical chain from claim to proof."
      },
      {
        front: "What is the difference between evidence and commentary?",
        back: "Evidence is the specific facts, examples, data, or quotations that support a claim; commentary is the writer's explanation of HOW and WHY that evidence proves the claim. Commentary links evidence back to the thesis.",
        hint: "Proof vs. explanation of the proof."
      },
      {
        front: "Why is commentary often more important than evidence on the AP Lang argument essay?",
        back: "Evidence alone does not argue; commentary shows the reasoning that turns evidence into support for the thesis. AP rewards sophisticated explanation that connects each example to the claim.",
        hint: "Reasoning earns the points."
      },
      {
        front: "What makes evidence relevant and sufficient?",
        back: "Relevant evidence directly supports the specific claim, and sufficient evidence provides enough strong examples to make the claim convincing. Weak arguments use vague, off-topic, or too little evidence.",
        hint: "On-point and enough of it."
      },
      {
        front: "What is a counterargument (concession/rebuttal), and why include one?",
        back: "A counterargument presents an opposing view; a concession acknowledges its validity, and a rebuttal explains why your position still stands. Addressing the other side strengthens credibility and shows complexity.",
        hint: "Acknowledge, then refute."
      },
      {
        front: "How do transitions strengthen an argument?",
        back: "Transitions (such as 'however,' 'therefore,' 'in contrast') signal logical relationships between ideas, guiding the reader through the line of reasoning and showing how claims connect.",
        hint: "Signposts for the logic."
      },
      {
        front: "What does it mean to 'qualify' an argument?",
        back: "Qualifying means limiting a claim with words like 'often,' 'in most cases,' or 'unless,' acknowledging exceptions. A qualified argument is more defensible and nuanced than an absolute one.",
        hint: "Add nuance instead of absolutes."
      },
      {
        front: "What is the role of a topic sentence in each body paragraph?",
        back: "A topic sentence states the paragraph's specific claim and connects it to the thesis. It tells the reader what point the paragraph will prove before evidence and commentary follow.",
        hint: "Mini-claim that supports the thesis."
      },
      {
        front: "What earns the 'sophistication' point on the AP Lang argument rubric?",
        back: "Sophistication comes from nuanced argument: exploring tensions and complexities, situating the argument in a broader context, qualifying claims, or using a notably persuasive and controlled style.",
        hint: "Complexity, context, and command of style."
      },
      {
        front: "A common trap: what is the danger of a thesis that simply restates the prompt?",
        back: "A thesis that restates the prompt without taking a defensible position is not arguable and limits your essay's depth. The thesis must stake out YOUR specific, contestable claim.",
        hint: "Take a stance, don't echo the prompt."
      },
      {
        front: "How should you organize evidence to build the strongest argument?",
        back: "Arrange claims and evidence so each builds logically on the last, often saving the strongest or most complex point for emphasis. Grouping by reason rather than by source keeps the reasoning coherent.",
        hint: "Order for logical build, not by source."
      },
      {
        front: "Mini-example: turn the fact '70% of students skip breakfast' into a developed argument point.",
        back: "Claim: schools should offer free breakfast. Evidence: 70% of students skip breakfast. Commentary: because hunger impairs focus, this statistic shows a large group is academically disadvantaged, so free breakfast would directly improve learning. The commentary makes the data argue.",
        hint: "Claim + evidence + reasoning."
      }
    ]
  }
];
