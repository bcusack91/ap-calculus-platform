export const batchCards: { slug: string; cards: { front: string; back: string; hint?: string }[] }[] = [
  {
    slug: "csa-conditionals",
    cards: [
      {
        front: "What is the basic syntax of an if statement in Java?",
        back: "if (condition) { statements } where condition is a boolean expression. The statements run only when the condition evaluates to true.",
        hint: "Parentheses around the boolean, braces around the body."
      },
      {
        front: "What is the difference between if-else and a chain of separate if statements?",
        back: "In an if-else (or if / else if / else) chain, at most one branch executes. With multiple independent if statements, each condition is tested separately and several bodies can run.",
        hint: "else if = mutually exclusive."
      },
      {
        front: "What boolean operators does Java use for AND, OR, and NOT?",
        back: "&& is logical AND, || is logical OR, and ! is logical NOT. && and || use short-circuit evaluation.",
        hint: "Two symbols for AND/OR, one bang for NOT."
      },
      {
        front: "What is short-circuit evaluation?",
        back: "With &&, if the left operand is false the right operand is not evaluated (result is already false). With ||, if the left operand is true the right operand is not evaluated (result is already true).",
        hint: "Java stops as soon as the answer is known."
      },
      {
        front: "Why must you use .equals() instead of == to compare Strings?",
        back: "== compares object references (whether two variables point to the same object), while .equals() compares the actual character contents. For Strings you almost always want .equals().",
        hint: "== checks identity, .equals() checks value."
      },
      {
        front: "What is the common trap with using = instead of == in a condition?",
        back: "= is assignment, == is comparison. Writing if (x = 5) is a compile error in Java for ints (it produces an int, not a boolean), so use == to test equality.",
        hint: "One equals assigns, two equals compares."
      },
      {
        front: "What does De Morgan's Law say about negating compound conditions?",
        back: "!(a && b) is equivalent to !a || !b, and !(a || b) is equivalent to !a && !b. Negating flips the operator and negates each part.",
        hint: "Distribute the NOT, flip AND<->OR."
      },
      {
        front: "How does a nested if statement work?",
        back: "A nested if is an if statement placed inside the body of another if (or else). The inner condition is only tested when the outer condition is true, letting you check combinations of conditions.",
        hint: "An if inside an if."
      },
      {
        front: "Worked example: What prints? int x = 7; if (x > 10) System.out.print(\"A\"); else if (x > 5) System.out.print(\"B\"); else System.out.print(\"C\");",
        back: "It prints B. x > 10 is false, then x > 5 is true, so the else-if body runs and the final else is skipped.",
        hint: "Only one branch of an if/else-if/else runs."
      },
      {
        front: "What is a dangling else and how does Java resolve it?",
        back: "When an else could match more than one if, Java attaches the else to the nearest unmatched if. Use braces { } to control the intended pairing.",
        hint: "else binds to the closest if."
      },
      {
        front: "What is the result type of a relational expression like a < b?",
        back: "It is a boolean (true or false). Conditions in if statements must evaluate to a boolean value.",
        hint: "Comparisons yield true/false."
      },
      {
        front: "Worked example: With boolean evaluation, what does (4 < 2 && (10 / 0 > 1)) do?",
        back: "It evaluates to false without error. Because 4 < 2 is false, short-circuit && skips the right side, so the division by zero never executes.",
        hint: "Left side false stops &&."
      },
      {
        front: "How do you write a condition that checks if an int n is even?",
        back: "Use n % 2 == 0. The modulus operator % gives the remainder, and an even number leaves remainder 0 when divided by 2.",
        hint: "Remainder when divided by 2 is zero."
      }
    ]
  },
  {
    slug: "independence",
    cards: [
      {
        front: "What does it mean for two events A and B to be independent?",
        back: "Two events are independent if the occurrence of one does not change the probability of the other: P(A | B) = P(A) and P(B | A) = P(B).",
        hint: "Knowing one tells you nothing about the other."
      },
      {
        front: "What is the multiplication rule for independent events?",
        back: "If A and B are independent, then $P(A \\\\cap B) = P(A) \\\\cdot P(B)$. This is the defining test: events are independent exactly when their joint probability equals the product of their marginals.",
        hint: "Multiply the two probabilities."
      },
      {
        front: "What is the general (conditional) multiplication rule?",
        back: "For any two events, $P(A \\\\cap B) = P(A) \\\\cdot P(B \\\\mid A)$. When A and B are independent, P(B | A) = P(B), reducing it to the product of the two probabilities.",
        hint: "Multiply by the conditional probability."
      },
      {
        front: "What is the formula for conditional probability?",
        back: "$P(A \\\\mid B) = \\\\dfrac{P(A \\\\cap B)}{P(B)}$, valid when P(B) > 0. It is the probability of A given that B has occurred.",
        hint: "Joint over the condition's probability."
      },
      {
        front: "What is the common trap of confusing independent and mutually exclusive events?",
        back: "Mutually exclusive (disjoint) events cannot occur together, so P(A and B) = 0. If both events have nonzero probability, being mutually exclusive actually makes them dependent, not independent.",
        hint: "Disjoint and independent are different ideas."
      },
      {
        front: "How do you check independence from a two-way table?",
        back: "Compute P(A), P(B), and P(A and B). If P(A and B) = P(A) times P(B) (equivalently P(A | B) = P(A)), the events are independent; otherwise they are dependent.",
        hint: "Compare the joint to the product of marginals."
      },
      {
        front: "What is the condition for sampling 'without replacement' to be treated as independent?",
        back: "The 10% condition: if the sample size n is at most 10% of the population, you may treat draws as approximately independent even though they are technically dependent.",
        hint: "Sample no more than 10% of the population."
      },
      {
        front: "Worked example: P(A) = 0.4, P(B) = 0.5, A and B independent. Find P(A and B) and P(A or B).",
        back: "P(A and B) = 0.4 times 0.5 = 0.20. P(A or B) = P(A) + P(B) - P(A and B) = 0.4 + 0.5 - 0.20 = 0.70.",
        hint: "Multiply for AND; addition rule for OR."
      },
      {
        front: "What is the addition rule, and how does it relate to independence?",
        back: "$P(A \\\\cup B) = P(A) + P(B) - P(A \\\\cap B)$ for any two events. Independence only affects how you compute the P(A and B) term, not the addition rule itself.",
        hint: "Add the two, subtract the overlap."
      },
      {
        front: "If events are independent, are their complements independent?",
        back: "Yes. If A and B are independent, then A and B', A' and B, and A' and B' are all independent as well.",
        hint: "Independence carries over to complements."
      },
      {
        front: "What does independence imply for a binomial setting?",
        back: "Binomial requires independent trials (the BINS conditions): each trial's outcome does not affect the others, so $P(\\\\text{all successes}) = p^n$ for n trials with success probability p.",
        hint: "Binomial needs independent, identical trials."
      },
      {
        front: "Worked example: A test is positive with probability 0.9 if a disease is present. Two independent tests are run on a sick patient. P(both positive)?",
        back: "Because the tests are independent, P(both positive) = 0.9 times 0.9 = 0.81.",
        hint: "Multiply the two success probabilities."
      },
      {
        front: "Why is 'at least one' often easiest computed with the complement under independence?",
        back: "P(at least one) = 1 - P(none). Under independence P(none) is the product of each event's failure probability, so $P(\\\\text{at least one}) = 1 - (1-p)^n$.",
        hint: "1 minus the chance nothing happens."
      }
    ]
  },
  {
    slug: "csa-loops",
    cards: [
      {
        front: "What are the three parts of a Java for loop header?",
        back: "for (initialization; condition; update). Initialization runs once, the boolean condition is checked before each iteration, and the update runs after each iteration.",
        hint: "init; test; change."
      },
      {
        front: "When should you choose a while loop over a for loop?",
        back: "Use a while loop when the number of iterations is not known in advance and depends on a condition (e.g., reading input until a sentinel). Use a for loop for a known/counted number of iterations.",
        hint: "while = condition-controlled, for = count-controlled."
      },
      {
        front: "What is the difference between a while loop and a do-while loop?",
        back: "Note: AP CSA does NOT include do-while. A while loop checks the condition before the body, so it may run zero times; the body of a while loop only runs while the condition is true.",
        hint: "while tests first."
      },
      {
        front: "What is an off-by-one error in a loop?",
        back: "An error where a loop runs one too many or one too few times, often from using < vs <= or wrong start/end bounds. For an array of length n, valid indices are 0 to n-1.",
        hint: "Check your boundary condition carefully."
      },
      {
        front: "What is an infinite loop and a common cause?",
        back: "A loop whose condition never becomes false, so it never stops. Common causes: forgetting to update the loop variable, or a condition that can never be reached.",
        hint: "The exit condition is never met."
      },
      {
        front: "What does the enhanced for-each loop look like and when is it used?",
        back: "for (int x : arr) { ... } iterates over each element of an array or list. Use it to read every element when you don't need the index and don't need to modify the array structure.",
        hint: "for (type var : collection)."
      },
      {
        front: "Why can't a for-each loop replace elements in an array?",
        back: "The loop variable is a copy of each element; assigning to it does not change the array. To modify array elements you must use an indexed loop and assign to arr[i].",
        hint: "The loop variable is a copy."
      },
      {
        front: "How many times does this run? for (int i = 0; i < 5; i++)",
        back: "5 times, with i taking values 0, 1, 2, 3, 4. The loop stops when i reaches 5 because the condition i < 5 becomes false.",
        hint: "Count the values i takes."
      },
      {
        front: "How do nested loops work and how do you count total iterations?",
        back: "A loop inside another loop; the inner loop completes fully for each iteration of the outer loop. If the outer runs m times and the inner runs n times, the inner body executes m times n total.",
        hint: "Multiply outer iterations by inner iterations."
      },
      {
        front: "Worked example: int sum = 0; for (int i = 1; i <= 4; i++) sum += i; What is sum?",
        back: "sum is 10. The loop adds 1 + 2 + 3 + 4 = 10.",
        hint: "Add the values 1 through 4."
      },
      {
        front: "What is a sentinel-controlled loop?",
        back: "A loop that continues until a special 'sentinel' value (e.g., -1 or an empty string) signals it to stop. It is typically implemented with a while loop.",
        hint: "Stop when you hit the flag value."
      },
      {
        front: "How do you traverse a 2D array with nested for loops?",
        back: "Use an outer loop over rows (arr.length) and an inner loop over columns (arr[r].length), accessing arr[r][c]. The outer index is the row, the inner index is the column.",
        hint: "Outer = rows, inner = columns."
      },
      {
        front: "Worked example: What does this print? for (int i = 3; i > 0; i--) System.out.print(i);",
        back: "It prints 321. i starts at 3 and decreases by 1 each time, stopping when i reaches 0 (condition i > 0 becomes false).",
        hint: "Counting down with i--."
      }
    ]
  },
  {
    slug: "wh-mass-atrocities",
    cards: [
      {
        front: "What is genocide as defined by the 1948 UN Genocide Convention?",
        back: "Acts committed with intent to destroy, in whole or in part, a national, ethnical, racial, or religious group, including killing members and inflicting conditions calculated to bring about the group's destruction.",
        hint: "Intent to destroy a group."
      },
      {
        front: "What was the Armenian Genocide and when did it occur?",
        back: "The Ottoman Empire's systematic deportation and mass killing of Armenians during World War I, beginning in 1915, with an estimated 1 to 1.5 million deaths. It is often cited as the first modern genocide.",
        hint: "Ottoman Empire, WWI era."
      },
      {
        front: "What was the Holocaust?",
        back: "The Nazi state-sponsored genocide during World War II in which roughly six million Jews, plus Roma, disabled people, and others, were systematically murdered, often in extermination camps such as Auschwitz.",
        hint: "Nazi genocide, ~6 million Jews."
      },
      {
        front: "What were the Holodomor and the Soviet famines?",
        back: "The Holodomor (1932-33) was a man-made famine in Soviet Ukraine caused by Stalin's forced collectivization and grain seizures, killing millions of Ukrainians. Many scholars and governments classify it as genocide.",
        hint: "Stalin-era Ukrainian famine."
      },
      {
        front: "What were the Cambodian Killing Fields?",
        back: "Under the Khmer Rouge regime led by Pol Pot (1975-79), an estimated 1.7 million Cambodians died from execution, forced labor, starvation, and disease in an effort to create an agrarian communist society.",
        hint: "Pol Pot, Khmer Rouge, 1970s."
      },
      {
        front: "What happened in the Rwandan Genocide of 1994?",
        back: "Over roughly 100 days, Hutu extremists killed an estimated 800,000 to 1 million Tutsi and moderate Hutu. Radio propaganda incited the violence while the international community largely failed to intervene.",
        hint: "Hutu vs. Tutsi, 100 days, 1994."
      },
      {
        front: "What was the Srebrenica massacre?",
        back: "In July 1995, during the Bosnian War, Bosnian Serb forces murdered about 8,000 Bosniak (Bosnian Muslim) men and boys. It was legally ruled a genocide by international courts.",
        hint: "Bosnia, 1995, ~8,000 victims."
      },
      {
        front: "What is 'ethnic cleansing' and how does it differ from genocide?",
        back: "Ethnic cleansing is the forced removal of an ethnic or religious group from a territory to make it homogeneous, often via deportation and terror. Genocide specifically requires intent to destroy the group, though the two overlap.",
        hint: "Removal vs. intent to destroy."
      },
      {
        front: "What role did propaganda and dehumanization play in mass atrocities?",
        back: "Regimes used propaganda to dehumanize target groups (e.g., calling Tutsi 'cockroaches' on Rwandan radio, Nazi anti-Semitic media), making mass violence socially acceptable and mobilizing perpetrators.",
        hint: "Dehumanizing language enables killing."
      },
      {
        front: "What is the 'Responsibility to Protect' (R2P) doctrine?",
        back: "A norm adopted by the UN in 2005 holding that states must protect their populations from genocide and mass atrocities, and that the international community should intervene when a state fails to do so.",
        hint: "R2P, adopted 2005."
      },
      {
        front: "What were the Nuremberg Trials and why were they significant?",
        back: "Post-WWII military tribunals (1945-46) that prosecuted Nazi leaders for war crimes and crimes against humanity. They established that individuals, including state officials, can be held legally accountable.",
        hint: "Post-WWII trials of Nazi leaders."
      },
      {
        front: "What conditions commonly precede mass atrocities?",
        back: "Recurring factors include authoritarian rule, war or instability, sharp ethnic/religious divisions, a state ideology targeting a group, propaganda, and the breakdown of legal protections.",
        hint: "Look for warning signs / risk factors."
      },
      {
        front: "What is the significance of the term 'crimes against humanity'?",
        back: "It refers to widespread or systematic attacks on civilians (murder, enslavement, deportation, persecution) regardless of war. Unlike genocide, it does not require intent to destroy a specific group.",
        hint: "Systematic attacks on civilians."
      }
    ]
  },
  {
    slug: "experimental-design",
    cards: [
      {
        front: "What is the difference between an observational study and an experiment?",
        back: "In an observational study, researchers observe and measure without imposing treatments, so they can only establish association. In an experiment, researchers actively impose a treatment, allowing cause-and-effect conclusions.",
        hint: "Experiment imposes a treatment."
      },
      {
        front: "What are the three principles of good experimental design?",
        back: "Control (keep other variables constant or balanced), Randomization (assign subjects to treatments by chance), and Replication (use enough experimental units). Some add Blocking as a fourth.",
        hint: "Control, Randomize, Replicate."
      },
      {
        front: "What is a confounding variable?",
        back: "A variable that is associated with both the explanatory variable and the response, so its effect cannot be separated from the treatment's effect. Confounding is why observational studies can't prove causation.",
        hint: "Tangled-up lurking cause."
      },
      {
        front: "What is the purpose of a control group?",
        back: "A control group provides a baseline for comparison, often receiving a placebo or no treatment, so the treatment group's results can be judged against what would happen without the treatment.",
        hint: "Baseline for comparison."
      },
      {
        front: "What is the placebo effect, and why is a placebo used?",
        back: "The placebo effect is a response to the act of being treated rather than the treatment itself. A placebo (fake treatment) is given to the control group so both groups have the same expectations.",
        hint: "Response to expectation, not treatment."
      },
      {
        front: "What is the difference between single-blind and double-blind?",
        back: "In single-blind, subjects don't know which treatment they receive. In double-blind, neither the subjects nor the people measuring the response know, which prevents bias from both sides.",
        hint: "Double = subjects AND evaluators blind."
      },
      {
        front: "What is blocking and why is it used?",
        back: "Blocking groups experimental units that are similar (e.g., by gender or age) before randomly assigning treatments within each block. It reduces variability from a known nuisance variable, like stratifying in sampling.",
        hint: "Group similar units, then randomize within."
      },
      {
        front: "What is a matched-pairs design?",
        back: "A special block design where each block has two units (or one unit measured twice). Treatments are randomly assigned within each pair, controlling for differences between subjects.",
        hint: "Blocks of size two."
      },
      {
        front: "What is the difference between random sampling and random assignment?",
        back: "Random sampling (selecting subjects from a population) lets you generalize to the population. Random assignment (assigning subjects to treatments) lets you establish causation.",
        hint: "Sampling = generalize; assignment = cause."
      },
      {
        front: "What is replication in an experiment (not to be confused with repeating a study)?",
        back: "Replication means applying each treatment to many experimental units, so that chance differences average out and real treatment effects can be detected. Larger samples reduce variability.",
        hint: "Many units per treatment."
      },
      {
        front: "What does it mean for a result to be statistically significant?",
        back: "A result is statistically significant if it is too large to plausibly be explained by chance variation alone. It suggests the treatment had a real effect.",
        hint: "Bigger than chance would produce."
      },
      {
        front: "Worked example: A study finds coffee drinkers have lower depression. Why can't we conclude coffee prevents depression?",
        back: "It is observational, so confounding variables (e.g., social activity, income) could explain the link. Only a randomized experiment could support a causal claim.",
        hint: "No random assignment = no causation."
      },
      {
        front: "What is the placebo-controlled, randomized, double-blind design considered the gold standard?",
        back: "It combines control (placebo), randomization, and blinding to eliminate confounding and bias from expectations, giving the strongest evidence for cause and effect.",
        hint: "Random + placebo + double-blind."
      }
    ]
  },
  {
    slug: "csa-variables-types",
    cards: [
      {
        front: "What are the primitive types you must know for AP CSA?",
        back: "int (integers), double (decimal numbers), and boolean (true/false). char appears but the AP subset focuses mainly on int, double, and boolean.",
        hint: "int, double, boolean."
      },
      {
        front: "What is the difference between a primitive type and a reference type?",
        back: "A primitive (int, double, boolean) stores the actual value directly. A reference type (objects, arrays, String) stores a reference (memory address) pointing to the object.",
        hint: "Value vs. pointer to an object."
      },
      {
        front: "What happens in integer division in Java?",
        back: "Dividing two ints discards the fractional part (truncates toward zero). For example, 7 / 2 evaluates to 3, not 3.5.",
        hint: "int / int drops the decimal."
      },
      {
        front: "How do you get a decimal result when dividing two ints?",
        back: "Cast at least one operand to double, e.g., (double) 7 / 2 gives 3.5, or use a double literal like 7.0 / 2. Otherwise integer division occurs first.",
        hint: "Make one operand a double."
      },
      {
        front: "What does the cast (int) do to a double, and is it rounding?",
        back: "(int) truncates the double toward zero, discarding the decimal part; it does NOT round. So (int) 3.99 is 3 and (int) -2.7 is -2.",
        hint: "Truncates, never rounds."
      },
      {
        front: "What is the result and type of 10 % 3, and what is modulus used for?",
        back: "10 % 3 is 1, the remainder of integer division. Modulus is used to test divisibility, extract digits, and wrap values (e.g., n % 2 == 0 for even).",
        hint: "Percent sign gives the remainder."
      },
      {
        front: "What is the order of operations (precedence) for arithmetic in Java?",
        back: "Parentheses first, then * / % (left to right), then + - (left to right). Use parentheses to override the default order.",
        hint: "Parentheses, then *,/,%, then +,-."
      },
      {
        front: "What is the difference between declaration and initialization?",
        back: "Declaration creates a variable with a type and name (int x;). Initialization assigns it a first value (x = 5; or combined int x = 5;).",
        hint: "Declare = name+type; initialize = first value."
      },
      {
        front: "What does the compound operator x += 3 do?",
        back: "It is shorthand for x = x + 3. Java also has -=, *=, /=, and %= that combine an operation with assignment.",
        hint: "Combine an operation with assignment."
      },
      {
        front: "What is the difference between i++ and ++i?",
        back: "Both increase i by 1. i++ (post-increment) returns the old value before incrementing; ++i (pre-increment) returns the new value after incrementing. The difference matters only when used inside a larger expression.",
        hint: "Post returns old, pre returns new."
      },
      {
        front: "Why are doubles sometimes imprecise (e.g., 0.1 + 0.2)?",
        back: "Doubles use binary floating-point representation, which cannot store some decimals exactly, causing tiny rounding errors. Avoid using == to compare doubles for equality.",
        hint: "Binary floating-point can't store all decimals."
      },
      {
        front: "What is overflow with the int type?",
        back: "int has a fixed range (about +/- 2.1 billion). Exceeding Integer.MAX_VALUE wraps around to a negative number rather than growing larger.",
        hint: "Too-big int wraps to negative."
      },
      {
        front: "Worked example: What is the value and type of 9 / 2 + 9 % 2?",
        back: "It is 5 (an int). 9 / 2 is 4 (integer division) and 9 % 2 is 1, so 4 + 1 = 5.",
        hint: "Do the division and modulus, then add."
      }
    ]
  },
  {
    slug: "apush-civil-war",
    cards: [
      {
        front: "What event began the Civil War in April 1861?",
        back: "The Confederate attack on Fort Sumter in Charleston Harbor, South Carolina, prompted Lincoln to call for troops and marked the start of the war.",
        hint: "A fort in Charleston Harbor."
      },
      {
        front: "What were the main causes of the Civil War?",
        back: "The central issue was slavery and its expansion into new territories, intertwined with sectionalism, states' rights, and the breakdown of compromises like the Kansas-Nebraska Act and Dred Scott decision.",
        hint: "Slavery's expansion above all."
      },
      {
        front: "What was the significance of the 1860 election?",
        back: "Abraham Lincoln, a Republican opposed to slavery's expansion, won without any Southern electoral votes. Southern states viewed his victory as a threat and began seceding, starting with South Carolina.",
        hint: "Lincoln wins; secession begins."
      },
      {
        front: "What was the Emancipation Proclamation (1863) and its limits?",
        back: "Lincoln's order freeing enslaved people in Confederate-held territory. It did not free those in border states or Union-held areas, but it redefined the war as a fight against slavery and allowed Black men to enlist.",
        hint: "Freed slaves only in rebel territory."
      },
      {
        front: "Why was the Battle of Antietam (1862) significant?",
        back: "The bloodiest single day in American history, it was a strategic Union victory that gave Lincoln the political opening to issue the preliminary Emancipation Proclamation.",
        hint: "Bloodiest day; led to Emancipation."
      },
      {
        front: "Why was the Battle of Gettysburg (July 1863) a turning point?",
        back: "It halted Lee's invasion of the North and inflicted huge Confederate casualties, marking the high-water mark of the Confederacy. Combined with Vicksburg, it shifted momentum to the Union.",
        hint: "Lee's failed northern invasion."
      },
      {
        front: "What was the strategic importance of the fall of Vicksburg (1863)?",
        back: "Grant's capture of Vicksburg gave the Union full control of the Mississippi River, splitting the Confederacy in two and fulfilling part of the Anaconda Plan.",
        hint: "Union controls the Mississippi."
      },
      {
        front: "What was the Anaconda Plan?",
        back: "The Union's overall strategy to strangle the Confederacy by blockading Southern ports and seizing the Mississippi River, cutting off supplies and trade.",
        hint: "Blockade and split the South."
      },
      {
        front: "What did the Gettysburg Address (1863) express?",
        back: "Lincoln's brief speech reframed the war as a test of whether a nation 'conceived in liberty' and dedicated to equality could endure, linking the Union cause to the ideals of the Declaration of Independence.",
        hint: "'Four score and seven years ago.'"
      },
      {
        front: "What was Sherman's March to the Sea (1864)?",
        back: "General William T. Sherman's campaign from Atlanta to Savannah using 'total war' tactics, destroying infrastructure and supplies to break the South's will and ability to fight.",
        hint: "Total war from Atlanta to the coast."
      },
      {
        front: "How did the Civil War end?",
        back: "Confederate General Robert E. Lee surrendered to Ulysses S. Grant at Appomattox Court House in Virginia on April 9, 1865, effectively ending the war.",
        hint: "Lee surrenders at Appomattox."
      },
      {
        front: "What were the Reconstruction Amendments (the Civil War Amendments)?",
        back: "The 13th abolished slavery, the 14th granted citizenship and equal protection, and the 15th prohibited denying the vote based on race. Together they reshaped citizenship and rights after the war.",
        hint: "13th, 14th, 15th."
      },
      {
        front: "What advantages did the Union have over the Confederacy?",
        back: "The North had a larger population, far greater industrial capacity, more railroads, a stronger navy, and an established government and treasury, giving it major economic and logistical advantages.",
        hint: "More people, factories, railroads, navy."
      }
    ]
  },
  {
    slug: "apes-sustainability",
    cards: [
      {
        front: "What is sustainability?",
        back: "Using resources in a way that meets present needs without compromising the ability of future generations to meet their own needs. It balances environmental, economic, and social factors.",
        hint: "Meet today's needs without harming tomorrow's."
      },
      {
        front: "What is sustainable yield?",
        back: "The amount of a renewable resource (like fish or timber) that can be harvested without reducing the resource's ability to replenish itself over time.",
        hint: "Harvest only the regrowth."
      },
      {
        front: "What is an ecological footprint?",
        back: "A measure of the land and water area required to supply a person's or population's resources and absorb their waste. It is often compared to the planet's biocapacity.",
        hint: "Land needed to support your lifestyle."
      },
      {
        front: "What is the difference between renewable and nonrenewable resources?",
        back: "Renewable resources replenish naturally on a human timescale (solar, wind, sustainably managed forests). Nonrenewable resources (fossil fuels, most minerals) exist in fixed amounts and deplete with use.",
        hint: "Replenished vs. finite."
      },
      {
        front: "What are the three pillars of sustainability?",
        back: "Environmental (protecting ecosystems), economic (viable long-term prosperity), and social (equity and well-being). True sustainability requires balancing all three.",
        hint: "Planet, profit, people."
      },
      {
        front: "What is the 'tragedy of the commons'?",
        back: "When a shared resource (like a fishery or the atmosphere) is overused because individuals act in their own self-interest, depleting it for everyone. It justifies regulation of common resources.",
        hint: "Shared resource overused by individuals."
      },
      {
        front: "What are the three R's of waste reduction, in priority order?",
        back: "Reduce, Reuse, Recycle. Reducing consumption is most effective, followed by reusing items, with recycling last because it still requires energy and processing.",
        hint: "Reduce first, recycle last."
      },
      {
        front: "What is a sustainable agriculture practice and an example?",
        back: "Practices that maintain soil health and reduce inputs, such as crop rotation, cover crops, no-till farming, and integrated pest management, which conserve soil and water while reducing chemical use.",
        hint: "Crop rotation, no-till, cover crops."
      },
      {
        front: "What is the concept of carrying capacity (K) and its link to sustainability?",
        back: "Carrying capacity (K) is the maximum population an environment can support long-term given its resources. Sustainability requires living within Earth's carrying capacity rather than overshooting it.",
        hint: "Maximum population the environment supports."
      },
      {
        front: "What does it mean for energy to be sustainable, and which sources qualify?",
        back: "Sustainable energy comes from sources that are renewable and low-impact, such as solar, wind, geothermal, and hydroelectric, which produce little greenhouse gas and won't run out.",
        hint: "Solar, wind, geothermal, hydro."
      },
      {
        front: "What is the difference between point and nonpoint source pollution?",
        back: "Point source pollution comes from a single identifiable source (a pipe or smokestack). Nonpoint source comes from many diffuse sources (runoff from farms and streets) and is harder to regulate.",
        hint: "One pipe vs. diffuse runoff."
      },
      {
        front: "What is a circular economy?",
        back: "An economic model that designs out waste by reusing, repairing, and recycling materials in continuous loops, contrasting with the linear 'take-make-dispose' model.",
        hint: "Loops instead of throwing away."
      },
      {
        front: "What is biodiversity's role in sustainability?",
        back: "High biodiversity makes ecosystems more resilient and productive, providing services like pollination, water purification, and climate regulation. Preserving biodiversity is essential to sustaining these services.",
        hint: "Diverse ecosystems are more resilient."
      }
    ]
  }
];
