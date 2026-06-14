export const batchCards: { slug: string; cards: { front: string; back: string; hint?: string }[] }[] = [
  {
    slug: "csa-strings-objects",
    cards: [
      {
        front: "In Java, why must you use the .equals() method instead of == to compare two String objects?",
        back: "== compares object references (whether they point to the same memory location), while .equals() compares the actual character content. Two different String objects with identical text are .equals() but may not be ==.",
        hint: "References vs. content.",
      },
      {
        front: "What does \"hello\".length() return, and why is it a method and not a field?",
        back: "It returns 5, the number of characters. String stores its length internally, but the AP-required API exposes it as the method length() (with parentheses), unlike arrays which use the .length field (no parentheses).",
        hint: "Parentheses matter.",
      },
      {
        front: "Describe what substring(int from, int to) returns, including its trap.",
        back: "It returns the characters from index from up to but NOT including index to. The substring length is to - from. Calling it with to greater than length() throws StringIndexOutOfBoundsException.",
        hint: "Inclusive start, exclusive end.",
      },
      {
        front: "What does \"computer\".substring(3) return?",
        back: "\"puter\". The one-argument substring(from) returns all characters from index from to the end of the string.",
      },
      {
        front: "Explain the two overloaded forms of indexOf for String.",
        back: "indexOf(String str) returns the index of the first occurrence of str, or -1 if not found. indexOf(String str, int from) starts searching at index from. Use -1 as the not-found sentinel in conditionals.",
        hint: "What does it return when missing?",
      },
      {
        front: "Why are String objects called immutable, and what does a method like toUpperCase() actually do?",
        back: "A String's contents can never be changed after creation. Methods like toUpperCase(), substring(), and replace() do not modify the original; they return a brand-new String. You must assign the result, e.g. s = s.toUpperCase().",
        hint: "Returns new, never mutates.",
      },
      {
        front: "What is the difference between String concatenation with + when the right operand is an int versus a char?",
        back: "With + and at least one String operand, an int is converted to its digit characters (\"x\" + 5 gives \"x5\"). A char is appended as its character ('A' gives \"xA\"). But char + int with no String performs integer arithmetic on Unicode values.",
        hint: "Watch operand types.",
      },
      {
        front: "What does s.compareTo(t) return and how do you interpret the sign?",
        back: "It returns an int: negative if s comes before t lexicographically, 0 if equal, positive if s comes after t. The magnitude is the difference in the first differing characters' values; only the sign is reliable to test.",
        hint: "Sign, not magnitude.",
      },
      {
        front: "Worked example: trace String word = \"AP\"; word += \"CS\"; System.out.println(word.length());",
        back: "After concatenation word refers to the String \"APCS\", so word.length() prints 4. The original \"AP\" object is unchanged but no longer referenced.",
      },
      {
        front: "What is the value of null versus an empty String \"\", and what error does calling a method on null cause?",
        back: "null means the reference points to no object; \"\" is a real String of length 0. Calling a method like .length() on a null reference throws a NullPointerException.",
        hint: "No object vs. zero-length object.",
      },
      {
        front: "How do you safely loop through every character of a String s by index?",
        back: "Use for (int i = 0; i < s.length(); i++) and access s.substring(i, i + 1). Valid indices run 0 to s.length() - 1; using <= or s.length() as a bound causes an out-of-bounds error.",
        hint: "Bound is strictly less than length().",
      },
      {
        front: "When is a new object actually created, and what is the role of the keyword new versus a String literal?",
        back: "new ClassName(args) always allocates a new object and runs its constructor. String literals like \"cat\" may be reused from a string pool, which is exactly why == comparisons on literals are unreliable and .equals() is required.",
        hint: "Why == is risky.",
      },
      {
        front: "Worked example: what does \"banana\".indexOf(\"a\", 3) return?",
        back: "3. The search starts at index 3, and \"banana\" has an 'a' at index 3 (b-a-n-a-n-a is indices 0-5), so it returns 3.",
      },
    ],
  },
  {
    slug: "series-probability-alg2",
    cards: [
      {
        front: "What distinguishes a sequence from a series?",
        back: "A sequence is an ordered list of terms (e.g. 2, 4, 6, ...). A series is the sum of the terms of a sequence (e.g. 2 + 4 + 6 + ...). Series notation often uses sigma.",
        hint: "List vs. sum.",
      },
      {
        front: "State the explicit formula for the nth term of an arithmetic sequence, naming each variable.",
        back: "$a_n = a_1 + (n-1)d$, where $a_n$ is the nth term, $a_1$ is the first term, $n$ is the term number, and $d$ is the common difference (the constant added each step).",
        hint: "Common difference d.",
      },
      {
        front: "State the formula for the sum of the first n terms of an arithmetic series.",
        back: "$S_n = \\\\frac{n}{2}(a_1 + a_n)$, where $S_n$ is the sum, $n$ is the number of terms, $a_1$ is the first term, and $a_n$ is the last term. Use the explicit formula to find $a_n$ first if needed.",
        hint: "Average of first and last, times count.",
      },
      {
        front: "State the explicit formula for the nth term of a geometric sequence.",
        back: "$a_n = a_1 \\\\cdot r^{\\\\,n-1}$, where $a_1$ is the first term, $r$ is the common ratio (the constant multiplier each step), and $n$ is the term number.",
        hint: "Multiply by r each step.",
      },
      {
        front: "State the formula for the sum of the first n terms of a geometric series.",
        back: "$S_n = a_1 \\\\cdot \\\\frac{1 - r^n}{1 - r}$ for $r \\\\neq 1$, where $a_1$ is the first term, $r$ is the common ratio, and $n$ is the number of terms.",
        hint: "Requires r not equal to 1.",
      },
      {
        front: "When does an infinite geometric series converge, and what is its sum?",
        back: "It converges only when $|r| < 1$. The sum is $S = \\\\frac{a_1}{1 - r}$. If $|r| \\\\geq 1$ the series diverges and has no finite sum.",
        hint: "Ratio strictly between -1 and 1.",
      },
      {
        front: "Worked example: find the sum $3 + 6 + 12 + 24 + \\\\dots$ to 5 terms.",
        back: "Geometric with $a_1 = 3$, $r = 2$, $n = 5$: $S_5 = 3 \\\\cdot \\\\frac{1 - 2^5}{1 - 2} = 3 \\\\cdot \\\\frac{-31}{-1} = 93$.",
      },
      {
        front: "What does sigma notation $\\\\sum_{k=1}^{4} (2k+1)$ mean, and what is its value?",
        back: "It means add the expression $2k+1$ for k = 1, 2, 3, 4: $(3) + (5) + (7) + (9) = 24$. The index k starts at the bottom value and ends at the top value.",
        hint: "Index runs bottom to top.",
      },
      {
        front: "What is the basic definition of theoretical probability of an event?",
        back: "$P(E) = \\\\frac{\\\\text{number of favorable outcomes}}{\\\\text{total number of equally likely outcomes}}$. Probability is always between 0 and 1 inclusive.",
        hint: "Favorable over total.",
      },
      {
        front: "Distinguish independent from dependent events and give the multiplication rule for each.",
        back: "Independent events do not affect each other: $P(A \\\\text{ and } B) = P(A) \\\\cdot P(B)$. Dependent events do: $P(A \\\\text{ and } B) = P(A) \\\\cdot P(B \\\\mid A)$, where $P(B \\\\mid A)$ is B's probability given A occurred.",
        hint: "With vs. without replacement.",
      },
      {
        front: "State the addition rule for the probability of A or B.",
        back: "$P(A \\\\text{ or } B) = P(A) + P(B) - P(A \\\\text{ and } B)$. For mutually exclusive events (they cannot both happen) the overlap is 0, so it simplifies to $P(A) + P(B)$.",
        hint: "Subtract the overlap.",
      },
      {
        front: "What is the complement rule and when is it most useful?",
        back: "$P(\\\\text{not } E) = 1 - P(E)$. It is most useful for 'at least one' problems: compute 1 minus the probability of the 'none' case.",
        hint: "1 minus the event.",
      },
      {
        front: "Worked example: a bag has 3 red and 2 blue marbles. Drawing 2 without replacement, what is P(both red)?",
        back: "Dependent events: $P(\\\\text{red, then red}) = \\\\frac{3}{5} \\\\cdot \\\\frac{2}{4} = \\\\frac{6}{20} = \\\\frac{3}{10}$. The second fraction uses the reduced counts.",
        hint: "Counts change after the first draw.",
      },
    ],
  },
  {
    slug: "tests-proportions",
    cards: [
      {
        front: "What null and alternative hypotheses are used in a one-sample z-test for a population proportion?",
        back: "$H_0: p = p_0$ states the population proportion equals a claimed value $p_0$. $H_a$ is one of $p > p_0$, $p < p_0$, or $p \\\\neq p_0$, depending on the research question.",
        hint: "p is the parameter, not p-hat.",
      },
      {
        front: "List the three conditions for a one-sample z-test for a proportion.",
        back: "Random: data come from a random sample/assignment. Independence (10% condition): $n \\\\leq 0.10N$ when sampling without replacement. Normal (Large Counts): $np_0 \\\\geq 10$ and $n(1-p_0) \\\\geq 10$.",
        hint: "Random, Independent, Normal.",
      },
      {
        front: "State the test statistic formula for a one-sample z-test for a proportion, naming each part.",
        back: "$z = \\\\frac{\\\\hat{p} - p_0}{\\\\sqrt{\\\\frac{p_0(1-p_0)}{n}}}$, where $\\\\hat{p}$ is the sample proportion, $p_0$ is the hypothesized proportion, and $n$ is the sample size. The standard error uses $p_0$, not $\\\\hat{p}$.",
        hint: "Use p-naught in the denominator.",
      },
      {
        front: "In a significance test, what does the p-value actually measure?",
        back: "The p-value is the probability of getting a sample result as extreme as, or more extreme than, the one observed, assuming $H_0$ is true. A small p-value is evidence against $H_0$.",
        hint: "Assumes the null is true.",
      },
      {
        front: "What is the decision rule comparing a p-value to significance level alpha?",
        back: "If p-value $\\\\leq \\\\alpha$, reject $H_0$ (statistically significant). If p-value $> \\\\alpha$, fail to reject $H_0$. You never 'accept' $H_0$.",
        hint: "Reject vs. fail to reject.",
      },
      {
        front: "Define a Type I and a Type II error in hypothesis testing.",
        back: "Type I error: rejecting $H_0$ when it is actually true (a false positive); its probability is $\\\\alpha$. Type II error: failing to reject $H_0$ when $H_a$ is actually true (a false negative); its probability is $\\\\beta$.",
        hint: "Alpha vs. beta.",
      },
      {
        front: "What is the power of a test, and name two ways to increase it.",
        back: "Power = $1 - \\\\beta$, the probability of correctly rejecting a false $H_0$. Increase it by raising the sample size n, increasing $\\\\alpha$, or having a true parameter farther from $p_0$.",
        hint: "Detecting a real effect.",
      },
      {
        front: "Why does a two-sample z-test for a difference in proportions use a pooled (combined) proportion?",
        back: "Under $H_0: p_1 = p_2$, the proportions are assumed equal, so combining both samples gives the best estimate of the common proportion: $\\\\hat{p}_c = \\\\frac{x_1 + x_2}{n_1 + n_2}$, used in the standard error.",
        hint: "Only for the test, not the interval.",
      },
      {
        front: "State the test statistic for a two-sample z-test for a difference in proportions.",
        back: "$z = \\\\frac{(\\\\hat{p}_1 - \\\\hat{p}_2) - 0}{\\\\sqrt{\\\\hat{p}_c(1-\\\\hat{p}_c)\\\\left(\\\\frac{1}{n_1} + \\\\frac{1}{n_2}\\\\right)}}$, where $\\\\hat{p}_c$ is the pooled proportion and $n_1, n_2$ are the sample sizes.",
        hint: "Difference assumed to be 0.",
      },
      {
        front: "Common trap: how should a confidence interval be used to reach a two-sided test conclusion?",
        back: "If a $C\\\\%$ confidence interval for a difference does not contain 0, reject $H_0$ at $\\\\alpha = 1 - C$. If it contains 0, fail to reject. This matches a two-sided test.",
        hint: "Does the interval capture 0?",
      },
      {
        front: "Worked example: claim p = 0.5, sample gives p-hat = 0.60 with n = 100. Compute z.",
        back: "$z = \\\\frac{0.60 - 0.50}{\\\\sqrt{0.5 \\\\cdot 0.5 / 100}} = \\\\frac{0.10}{0.05} = 2.0$. This corresponds to a two-sided p-value of about 0.046.",
      },
      {
        front: "Why is the conclusion of a test always stated in context with the alpha level?",
        back: "A complete AP conclusion compares the p-value to $\\\\alpha$, makes a reject/fail-to-reject decision, and interprets it in the problem's context (e.g., 'we have convincing evidence that more than half of voters support...'). Stating only 'reject' loses credit.",
        hint: "Decision plus context.",
      },
      {
        front: "What does statistically significant NOT tell you about a result?",
        back: "It does not measure the size or practical importance of an effect, nor does it prove causation unless the data came from a randomized experiment. A tiny, unimportant difference can be significant with a large n.",
        hint: "Significance is not importance.",
      },
    ],
  },
  {
    slug: "csp-variables-control",
    cards: [
      {
        front: "In AP CS Principles, what is a variable?",
        back: "A variable is a named reference to a value stored in memory. It can hold data such as numbers, text (strings), or Boolean values, and its value can be updated as a program runs.",
        hint: "A named box for a value.",
      },
      {
        front: "What does the assignment operator do, and how is x = 5 different from a math equation?",
        back: "Assignment stores the value on the right into the variable on the left. x = 5 sets x's value to 5; it is a command, not a statement of equality. So x = x + 1 increases x by one.",
        hint: "Right-to-left, not equality.",
      },
      {
        front: "What is the result of the expression MOD (modulo), as in 17 MOD 5?",
        back: "MOD returns the remainder after integer division. 17 MOD 5 = 2 because 17 = 5*3 + 2. It is often used to test divisibility (n MOD 2 = 0 means n is even).",
        hint: "The remainder.",
      },
      {
        front: "Describe sequencing, selection, and iteration, the three building blocks of control.",
        back: "Sequencing executes statements in order, one after another. Selection (if/else) chooses which statements run based on a condition. Iteration (loops) repeats statements while or until a condition holds.",
        hint: "Order, choose, repeat.",
      },
      {
        front: "How does an IF/ELSE conditional decide which block runs?",
        back: "It evaluates the Boolean condition. If the condition is true, the IF block runs; otherwise the ELSE block runs. Exactly one of the two blocks executes.",
        hint: "Based on true/false.",
      },
      {
        front: "What are the three core Boolean (logical) operators and what does each require to be true?",
        back: "NOT reverses a value. AND is true only when both operands are true. OR is true when at least one operand is true. They combine conditions in selection and iteration.",
        hint: "Reverse, both, either.",
      },
      {
        front: "What is the difference between a REPEAT n TIMES loop and a REPEAT UNTIL (condition) loop?",
        back: "REPEAT n TIMES runs the body a fixed number of times. REPEAT UNTIL keeps running the body until its condition becomes true, so the number of iterations depends on the data and can be unknown in advance.",
        hint: "Counted vs. conditional.",
      },
      {
        front: "What is an infinite loop and what common mistake causes one?",
        back: "An infinite loop never stops because its termination condition is never met. A typical cause is forgetting to update the loop variable inside the loop, so the condition stays the same forever.",
        hint: "Condition never becomes false/true.",
      },
      {
        front: "Why does the order of conditions in nested IF/ELSE IF statements matter?",
        back: "Conditions are tested top to bottom and the first true one runs; remaining branches are skipped. Placing a broad condition first can prevent a more specific later condition from ever executing.",
        hint: "First match wins.",
      },
      {
        front: "Worked example: trace x = 10, then IF (x MOD 2 = 0) DISPLAY \"even\" ELSE DISPLAY \"odd\".",
        back: "10 MOD 2 = 0, which is true, so the IF block runs and the program displays \"even\".",
      },
      {
        front: "What is the difference between the comparison operator = (or ==) and assignment?",
        back: "Comparison tests whether two values are equal and produces a Boolean (true/false), used in conditions. Assignment stores a value into a variable. Confusing them is a frequent logic error.",
        hint: "Test vs. store.",
      },
      {
        front: "Worked example: what value is in total after total = 0; REPEAT 4 TIMES { total = total + 3 }?",
        back: "12. The loop runs 4 times, adding 3 each pass: 3, 6, 9, 12.",
      },
    ],
  },
  {
    slug: "type-errors",
    cards: [
      {
        front: "In programming, what is a type error?",
        back: "A type error occurs when an operation is applied to a value of an inappropriate data type, such as performing arithmetic on text or calling a string method on a number. The mismatch makes the operation invalid.",
        hint: "Wrong kind of data for the operation.",
      },
      {
        front: "What is the difference between a syntax error and a type error?",
        back: "A syntax error breaks the language's grammar rules (e.g., a missing parenthesis) and prevents code from running at all. A type error involves a value of the wrong type used in an otherwise valid operation, and may surface only when that line executes.",
        hint: "Grammar vs. data mismatch.",
      },
      {
        front: "Why does adding a number and a string sometimes concatenate and sometimes raise a type error?",
        back: "It depends on the language. In Python, \"5\" + 3 raises a TypeError. In JavaScript, \"5\" + 3 coerces to the string \"53\". Languages differ in how strictly they treat type mismatches.",
        hint: "Language-dependent coercion.",
      },
      {
        front: "What is type coercion (implicit conversion)?",
        back: "Type coercion is when a language automatically converts a value from one type to another during an operation, such as turning an int into a float when adding 2 + 3.0. It can hide bugs by silently changing behavior.",
        hint: "Automatic, behind the scenes.",
      },
      {
        front: "What is explicit type casting and why use it?",
        back: "Casting is deliberately converting a value to another type, e.g., int(\"42\") or (double) x. Use it to avoid type errors and integer-division surprises, and to convert user input (often text) into numbers.",
        hint: "You ask for the conversion.",
      },
      {
        front: "What is the difference between static typing and dynamic typing for catching type errors?",
        back: "Statically typed languages (Java, C++) check types at compile time, so many type errors are caught before running. Dynamically typed languages (Python, JavaScript) check at run time, so type errors appear only when the bad line executes.",
        hint: "Compile time vs. run time.",
      },
      {
        front: "Common trap: in Java, what is the result of int division like 7 / 2, and how is this related to type?",
        back: "7 / 2 gives 3, not 3.5, because both operands are ints so integer division truncates the decimal. To get 3.5 at least one operand must be a double, e.g., 7.0 / 2.",
        hint: "Two ints means integer division.",
      },
      {
        front: "What error commonly results from calling a method that does not exist for a value's type?",
        back: "An attribute or method error (e.g., Python's AttributeError, or a Java compile error). Example: calling .length() on an int, or .upper() on a number, is invalid because that type does not define the method.",
        hint: "Method belongs to the wrong type.",
      },
      {
        front: "Worked example: in Python, total = input(\"Enter a number: \") then total + 5. What goes wrong and how do you fix it?",
        back: "input() returns a string, so total + 5 raises a TypeError (str + int). Fix by casting: total = int(input(...)), or convert before adding.",
        hint: "input returns text.",
      },
      {
        front: "How does a null/None type error differ from a basic type mismatch?",
        back: "A null/None error happens when you use a reference that has no object, such as calling a method on null (NullPointerException in Java, AttributeError on None in Python). The type is technically 'absence of value,' so member access fails.",
        hint: "No object to operate on.",
      },
      {
        front: "Why is reading the error message and line number the first debugging step for a type error?",
        back: "The runtime reports the exact type mismatch and the location, e.g., 'unsupported operand type(s) for +: int and str' at a specific line. This pinpoints which value has an unexpected type so you can trace and fix it.",
        hint: "The message names both types.",
      },
      {
        front: "What is the difference between a type error and a logic error?",
        back: "A type error stops or crashes the operation because data types are incompatible. A logic error runs without crashing but produces a wrong result because the algorithm is flawed. Type errors are usually easier to detect.",
        hint: "Crashes vs. wrong answer.",
      },
    ],
  },
  {
    slug: "csa-class-design",
    cards: [
      {
        front: "In Java, what is the difference between a class and an object?",
        back: "A class is a blueprint that defines the state (instance variables) and behavior (methods) of a type. An object is a specific instance of that class created at run time with the new keyword, holding its own copy of the instance variables.",
        hint: "Blueprint vs. instance.",
      },
      {
        front: "Why are instance variables typically declared private?",
        back: "Declaring them private enforces encapsulation: outside code cannot directly read or modify them, only the class's own methods can. This protects the object's state and lets the class control how data is accessed and changed.",
        hint: "Encapsulation / data hiding.",
      },
      {
        front: "What is the role of a constructor, and what happens if you write none?",
        back: "A constructor initializes a new object's instance variables when new is called. If you write no constructor, Java provides a no-argument default constructor; but if you write any constructor, the default disappears.",
        hint: "Same name as the class, no return type.",
      },
      {
        front: "What is the difference between an accessor (getter) and a mutator (setter) method?",
        back: "An accessor returns information about an object's state without changing it (e.g., getName()), typically a non-void method. A mutator changes the object's state (e.g., setName(String n)), typically a void method.",
        hint: "Read vs. write.",
      },
      {
        front: "What does the keyword this refer to inside an instance method or constructor?",
        back: "this refers to the current object on which the method was called. It is used to distinguish an instance variable from a parameter of the same name, as in this.name = name.",
        hint: "The calling object.",
      },
      {
        front: "What is the difference between a static (class) variable and an instance variable?",
        back: "A static variable belongs to the class and is shared by all objects (one copy total). An instance variable belongs to each object individually, so every object has its own value.",
        hint: "Shared vs. per-object.",
      },
      {
        front: "When is a method declared static, and how is it called?",
        back: "A method is static when it does not depend on any object's instance variables (e.g., Math.sqrt). It is called on the class itself, ClassName.method(), not on an object, and cannot use this.",
        hint: "No object needed.",
      },
      {
        front: "What does it mean to overload a method or constructor?",
        back: "Overloading provides multiple methods/constructors with the same name but different parameter lists (different number or types of parameters). Java picks the matching version based on the arguments supplied.",
        hint: "Same name, different parameters.",
      },
      {
        front: "Why should toString() be overridden, and what does it enable?",
        back: "Overriding public String toString() lets an object provide a readable text representation. Once defined, printing the object (System.out.println(obj)) automatically uses it instead of the default memory-address-like output.",
        hint: "Used automatically when printing.",
      },
      {
        front: "What is the difference between a local variable, a parameter, and an instance variable in scope?",
        back: "A parameter is a variable declared in a method header that receives an argument. A local variable is declared inside a method and exists only during that call. An instance variable is declared in the class and persists for the object's lifetime.",
        hint: "Where it is declared and how long it lives.",
      },
      {
        front: "Common trap: what does it mean that Java passes objects by reference value?",
        back: "Java copies the reference (the address), so a method can mutate the object's state through the copied reference, but reassigning the parameter to a new object inside the method does not affect the caller's variable.",
        hint: "Can change contents, not the original binding.",
      },
      {
        front: "Worked example: given a Student class with private int grade, write an accessor and mutator pair.",
        back: "public int getGrade() { return grade; } and public void setGrade(int g) { grade = g; }. The accessor returns the value; the mutator assigns the parameter to the instance variable.",
      },
      {
        front: "What is the purpose of the public versus private access modifier on methods?",
        back: "public methods form the class's interface and can be called from any other class. private methods are helper methods usable only inside the class. Choosing the smallest needed visibility supports encapsulation.",
        hint: "Interface vs. internal helper.",
      },
    ],
  },
  {
    slug: "wh-exploration-columbian-exchange",
    cards: [
      {
        front: "What was the Columbian Exchange?",
        back: "The Columbian Exchange was the widespread transfer of plants, animals, people, diseases, and ideas between the Americas (the New World) and Afro-Eurasia (the Old World) after Columbus's 1492 voyage, transforming both hemispheres.",
        hint: "Two-way transfer after 1492.",
      },
      {
        front: "Which Old World diseases devastated indigenous American populations, and why were the effects so severe?",
        back: "Smallpox, measles, influenza, and typhus. Native Americans had no prior exposure and thus no immunity, so epidemics killed an estimated 80-90% of the indigenous population, collapsing societies and easing European conquest.",
        hint: "No prior immunity.",
      },
      {
        front: "Name key crops that moved from the Americas to the Old World and one major effect.",
        back: "Maize (corn), potatoes, tomatoes, cacao, tobacco, and chili peppers. Especially potatoes and maize boosted Old World nutrition and fueled significant population growth in Europe, Africa, and Asia.",
        hint: "Potatoes and maize raised populations.",
      },
      {
        front: "Name key plants and animals that moved from the Old World to the Americas.",
        back: "Animals: horses, cattle, pigs, sheep, and chickens. Plants: wheat, rice, sugarcane, coffee, and bananas. Horses transformed Native American cultures of the Great Plains.",
        hint: "Horses changed Plains life.",
      },
      {
        front: "How did the introduction of the horse change indigenous societies in the Americas?",
        back: "Horses revolutionized transportation, hunting (especially bison on the Great Plains), and warfare for many Native American groups, increasing mobility and reshaping their economies and lifestyles.",
        hint: "Mobility and bison hunting.",
      },
      {
        front: "What was the encomienda system?",
        back: "A Spanish labor system in which the crown granted colonists the right to demand labor and tribute from indigenous people in exchange for supposed protection and Christian instruction. In practice it was coercive and often lethally exploitative.",
        hint: "Forced indigenous labor for Spain.",
      },
      {
        front: "Why did the Atlantic slave trade expand as part of the Columbian Exchange era?",
        back: "The collapse of indigenous populations from disease and abuse created a severe labor shortage on plantations and mines. Europeans turned to enslaved Africans, who had greater resistance to many Old World diseases, to work cash crops like sugar.",
        hint: "Labor shortage plus disease resistance.",
      },
      {
        front: "What was the Atlantic system (triangular trade)?",
        back: "A three-legged network: European manufactured goods to Africa, enslaved Africans across the Middle Passage to the Americas, and American raw materials (sugar, tobacco, silver) back to Europe. It tied three continents into one economy.",
        hint: "Three legs, three continents.",
      },
      {
        front: "How did New World silver, especially from Potosi, affect the global economy?",
        back: "Vast silver from mines like Potosi (Bolivia) and Mexico flowed to Europe and especially to China (which demanded silver for taxes), creating the first truly global trade network and fueling inflation known as the Price Revolution in Europe.",
        hint: "Potosi silver linked the globe to China.",
      },
      {
        front: "What were cash crops and which plantation crop most drove the early Atlantic economy?",
        back: "Cash crops are grown for sale rather than subsistence. Sugar was the most profitable and labor-intensive early plantation crop, driving the demand for enslaved labor in the Caribbean and Brazil.",
        hint: "Sugar above all.",
      },
      {
        front: "What was the casta system in Spanish America?",
        back: "A hierarchical social classification based on race and ancestry that ranked people by their mix of European, indigenous, and African descent, with peninsulares at the top. It structured rights, status, and opportunity in colonial society.",
        hint: "Race-based colonial hierarchy.",
      },
      {
        front: "Common trap: in what direction did most major diseases and most New World food crops travel?",
        back: "Devastating epidemic diseases traveled mainly FROM the Old World TO the Americas. Calorie-rich staple crops like potatoes and maize traveled FROM the Americas TO the Old World. Mixing up the directions is a frequent error.",
        hint: "Disease west, potatoes east.",
      },
      {
        front: "Summarize one major demographic consequence of the Columbian Exchange on each hemisphere.",
        back: "In the Americas, indigenous populations collapsed by roughly 80-90% from disease. In the Old World, new American crops (potatoes, maize) improved nutrition and contributed to long-term population growth across Europe, Africa, and Asia.",
        hint: "Collapse west, growth east.",
      },
    ],
  },
  {
    slug: "sum-difference-identities",
    cards: [
      {
        front: "State the sine sum and difference identities.",
        back: "$\\\\sin(A + B) = \\\\sin A \\\\cos B + \\\\cos A \\\\sin B$ and $\\\\sin(A - B) = \\\\sin A \\\\cos B - \\\\cos A \\\\sin B$. The sign on the right matches the sign in the argument.",
        hint: "Sine keeps the sign.",
      },
      {
        front: "State the cosine sum and difference identities.",
        back: "$\\\\cos(A + B) = \\\\cos A \\\\cos B - \\\\sin A \\\\sin B$ and $\\\\cos(A - B) = \\\\cos A \\\\cos B + \\\\sin A \\\\sin B$. The sign on the right is OPPOSITE the sign in the argument.",
        hint: "Cosine flips the sign.",
      },
      {
        front: "State the tangent sum and difference identities.",
        back: "$\\\\tan(A + B) = \\\\frac{\\\\tan A + \\\\tan B}{1 - \\\\tan A \\\\tan B}$ and $\\\\tan(A - B) = \\\\frac{\\\\tan A - \\\\tan B}{1 + \\\\tan A \\\\tan B}$. The numerator matches the sign; the denominator is opposite.",
        hint: "Numerator same, denominator opposite.",
      },
      {
        front: "Common trap: why is cos(A + B) NOT equal to cos A + cos B?",
        back: "Cosine (and sine) are not linear functions, so they do not distribute over addition. You must apply the full identity $\\\\cos A \\\\cos B - \\\\sin A \\\\sin B$. Splitting the angle is a frequent fatal error.",
        hint: "Functions don't distribute.",
      },
      {
        front: "Worked example: find the exact value of $\\\\cos(75^\\\\circ)$.",
        back: "Write $75^\\\\circ = 45^\\\\circ + 30^\\\\circ$. Then $\\\\cos(45 + 30) = \\\\cos 45 \\\\cos 30 - \\\\sin 45 \\\\sin 30 = \\\\frac{\\\\sqrt{2}}{2}\\\\cdot\\\\frac{\\\\sqrt{3}}{2} - \\\\frac{\\\\sqrt{2}}{2}\\\\cdot\\\\frac{1}{2} = \\\\frac{\\\\sqrt{6} - \\\\sqrt{2}}{4}$.",
        hint: "75 = 45 + 30.",
      },
      {
        front: "Worked example: find the exact value of $\\\\sin(15^\\\\circ)$.",
        back: "Write $15^\\\\circ = 45^\\\\circ - 30^\\\\circ$. Then $\\\\sin(45 - 30) = \\\\sin 45 \\\\cos 30 - \\\\cos 45 \\\\sin 30 = \\\\frac{\\\\sqrt{2}}{2}\\\\cdot\\\\frac{\\\\sqrt{3}}{2} - \\\\frac{\\\\sqrt{2}}{2}\\\\cdot\\\\frac{1}{2} = \\\\frac{\\\\sqrt{6} - \\\\sqrt{2}}{4}$.",
        hint: "15 = 45 - 30.",
      },
      {
        front: "Which special angles can you combine to get exact values for non-standard angles like 15, 75, or 105 degrees?",
        back: "Use sums and differences of the known angles $30^\\\\circ, 45^\\\\circ, 60^\\\\circ$ (and 90, 0). For example $15 = 45 - 30$, $75 = 45 + 30$, $105 = 60 + 45$.",
        hint: "Build from 30, 45, 60.",
      },
      {
        front: "How do the sum identities lead to the double-angle identity for sine?",
        back: "Set $B = A$ in $\\\\sin(A + B)$: $\\\\sin(2A) = \\\\sin A \\\\cos A + \\\\cos A \\\\sin A = 2 \\\\sin A \\\\cos A$.",
        hint: "Let B equal A.",
      },
      {
        front: "Worked example: derive the cosine double-angle identity from the sum formula.",
        back: "Set $B = A$ in $\\\\cos(A + B)$: $\\\\cos(2A) = \\\\cos A \\\\cos A - \\\\sin A \\\\sin A = \\\\cos^2 A - \\\\sin^2 A$.",
        hint: "Let B equal A in cosine sum.",
      },
      {
        front: "Worked example: simplify $\\\\sin 50^\\\\circ \\\\cos 20^\\\\circ - \\\\cos 50^\\\\circ \\\\sin 20^\\\\circ$.",
        back: "This matches the sine difference pattern $\\\\sin(A - B)$ with $A = 50^\\\\circ$, $B = 20^\\\\circ$, so it equals $\\\\sin(50 - 20) = \\\\sin 30^\\\\circ = \\\\frac{1}{2}$.",
        hint: "Recognize the sine difference form.",
      },
      {
        front: "Given $\\\\sin A = \\\\frac{3}{5}$ (A in Q1) and $\\\\cos B = \\\\frac{5}{13}$ (B in Q1), what do you need before using a sum identity?",
        back: "You need all four pieces: $\\\\cos A$ and $\\\\sin B$. Use the Pythagorean identity: $\\\\cos A = \\\\frac{4}{5}$ and $\\\\sin B = \\\\frac{12}{13}$ (positive in Q1). Then substitute into the identity.",
        hint: "Find the missing sine/cosine first.",
      },
      {
        front: "How can $\\\\cos(\\\\frac{\\\\pi}{2} - x)$ be simplified using a difference identity?",
        back: "$\\\\cos(\\\\frac{\\\\pi}{2} - x) = \\\\cos\\\\frac{\\\\pi}{2}\\\\cos x + \\\\sin\\\\frac{\\\\pi}{2}\\\\sin x = 0\\\\cdot\\\\cos x + 1\\\\cdot\\\\sin x = \\\\sin x$. This confirms the cofunction identity.",
        hint: "Recovers a cofunction identity.",
      },
    ],
  },
];
