#!/usr/bin/env python3
"""Generate MCAT Batch 3: CARS Strategy (7), CARS Passages (7), CARS Reasoning (7)."""
import os

BASE_DIR = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), 'src', 'data', 'interactive-lessons')

def write_file(filename, content):
    filepath = os.path.join(BASE_DIR, filename)
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f"  Written: {filename}")

###############################################################################
# CARS STRATEGY (7 parts)
###############################################################################

def gen_cars_strat():
    parts = {}
    parts[1] = r"""export const mcatCarsStratPart1Data = {
  topicSlug: 'mcat-cars-strategy-mcat',
  sections: [
    {
      id: 'cs1-intro',
      type: 'text' as const,
      content: `# CARS Strategy

**Part 1 of 7 — Understanding the CARS Section**

### What is CARS?

- **C**ritical **A**nalysis and **R**easoning **S**kills
- 53 questions, 90 minutes (~9 passages, ~6 questions each)
- Passages from humanities and social sciences (NO science content!)
- Tests reading comprehension, not knowledge

### CARS is Different from Science Sections

| Science Sections | CARS |
|-----------------|------|
| Some outside knowledge needed | EVERYTHING is in the passage |
| Data/figure interpretation | Text interpretation only |
| Can study specific content | Cannot "study" — must develop skills |

### The Three Question Types

1. **Foundations of Comprehension** (~30%): What did the author say?
2. **Reasoning Within the Text** (~30%): Why did the author say it? How does the argument work?
3. **Reasoning Beyond the Text** (~40%): How does it apply? What can we infer?

### Timing Strategy

- **~10 minutes per passage** (read + answer)
- First pass reading: 4-5 minutes
- Questions: 5-6 minutes
- Flag and move on — don't get stuck on one question!`
    },
    {
      id: 'cs1-quiz1',
      type: 'multiple-choice' as const,
      content: '**CARS Fundamentals** 🎯',
      exercise: {
        questions: [
          {
            question: 'In CARS, when a question asks "Which of the following can be inferred from the passage?", it is testing:',
            options: ['Reasoning Beyond the Text — you must draw a conclusion not explicitly stated', 'Foundations of Comprehension — just find the answer in the text', 'Reasoning Within the Text — analyzing argument structure', 'Outside knowledge of the topic'],
            correctAnswer: 0,
            explanation: 'Inference questions require you to go beyond what is explicitly stated and draw a logical conclusion. The answer is supported by the passage but not directly stated.'
          },
          {
            question: 'A student runs out of time on CARS with 8 questions remaining. The best strategy is:',
            options: ['Quickly guess on all 8 — there is no penalty for wrong answers', 'Leave them blank', 'Rush through the remaining passage', 'Go back and change previous answers'],
            correctAnswer: 0,
            explanation: 'There is NO penalty for guessing on the MCAT. Always fill in an answer for every question. With 8 left, pick one letter and bubble them all — you should get ~2 right by chance.'
          }
        ]
      }
    },
    {
      id: 'cs1-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 1

- CARS tests critical reading, not content knowledge
- ~10 min per passage (53 questions, 90 minutes)
- Three question types: Comprehension, Reasoning Within, Reasoning Beyond
- NEVER leave a question blank — no penalty for guessing`
    }
  ]
};
"""

    parts[2] = r"""export const mcatCarsStratPart2Data = {
  topicSlug: 'mcat-cars-strategy-mcat',
  sections: [
    {
      id: 'cs2-intro',
      type: 'text' as const,
      content: `# CARS Strategy

**Part 2 of 7 — Active Reading Techniques**

### How to Read CARS Passages

**DO NOT** read passively! Active reading means:

1. **Identify the main idea** of each paragraph as you go
2. **Track the author's tone** (positive, negative, neutral, critical?)
3. **Note structural shifts** ("However," "On the other hand," "Despite this")
4. **Don't memorize details** — know WHERE things are, not WHAT they say

### The Paragraph Map Strategy

After reading each paragraph, mentally note:
- P1: Main claim or thesis
- P2: Supporting evidence or counterargument
- P3: Author's response or new perspective
- Continue...

### Author's Main Idea (AMI)

After finishing the passage, you should be able to state:
- What is the MAIN argument?
- Is the author FOR or AGAINST it?
- What evidence supports the position?

### Warning Signs of Passive Reading

- You reached the end but can't summarize the passage
- You're rereading sentences multiple times
- You're highlighting everything (or nothing)
- You don't know the author's position`
    },
    {
      id: 'cs2-quiz1',
      type: 'multiple-choice' as const,
      content: '**Active Reading** 🎯',
      exercise: {
        questions: [
          {
            question: 'While reading a CARS passage, you encounter the phrase "Although critics have argued otherwise." This signals:',
            options: ['A contrast — the author is about to present a counter or their own view', 'The author agrees with the critics', 'The passage is about literary criticism', 'The argument is about to end'],
            correctAnswer: 0,
            explanation: '"Although" is a contrast word. The author is acknowledging an opposing view and will likely argue against it. Track these transitions — they reveal argument structure.'
          }
        ]
      }
    },
    {
      id: 'cs2-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 2

- Read ACTIVELY: track main ideas, author's tone, and transitions
- Know WHERE information is, not every detail
- After each paragraph: what was the point?
- After the passage: what is the Author's Main Idea?`
    }
  ]
};
"""

    parts[3] = r"""export const mcatCarsStratPart3Data = {
  topicSlug: 'mcat-cars-strategy-mcat',
  sections: [
    {
      id: 'cs3-intro',
      type: 'text' as const,
      content: `# CARS Strategy

**Part 3 of 7 — Eliminating Wrong Answers**

### The CARS Elimination Framework

On CARS, finding the WRONG answers is often easier than finding the right one.

### Types of Wrong Answers

| Type | Description | Example |
|------|-------------|---------|
| **Too extreme** | Uses absolute language ("always," "never," "all") | "No author has ever addressed this topic" |
| **Out of scope** | Introduces ideas not in the passage | References a theory never mentioned |
| **Opposite** | Reverses the author's position | Says author supports X when author opposes X |
| **Too narrow** | Only addresses a detail, not the main question | Correct for one paragraph but not the whole passage |
| **Distortion** | Takes a passage idea and twists it | Exaggerates a qualified claim |

### The "Goldilocks" Principle

The best CARS answer is usually:
- Not too extreme, not too narrow
- Closely supported by text
- Matches the author's tone
- Addresses the specific question being asked`
    },
    {
      id: 'cs3-quiz1',
      type: 'multiple-choice' as const,
      content: '**Elimination Practice** 🎯',
      exercise: {
        questions: [
          {
            question: 'A passage discusses how modern architecture balances aesthetics with function. The author argues both matter equally. Which answer to "What is the main idea?" is BEST?',
            options: ['Modern architecture must integrate both aesthetic appeal and functional design', 'Function is always more important than aesthetics in architecture', 'The aesthetic qualities of modern buildings are declining', 'Every architect prioritizes aesthetics over function'],
            correctAnswer: 0,
            explanation: 'Option B uses "always" (too extreme). Option C introduces "declining" (not stated — distortion). Option D uses "every" and reverses the balance (extreme + opposite). Option A correctly captures the balanced main idea.'
          }
        ]
      }
    },
    {
      id: 'cs3-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 3

- Eliminate before selecting: easier to find wrong than right
- Watch for: extreme language, out of scope, opposite of author, distortion
- Best answers are moderate, text-supported, and address the question asked
- "Closest to the text" usually wins`
    }
  ]
};
"""

    parts[4] = r"""export const mcatCarsStratPart4Data = {
  topicSlug: 'mcat-cars-strategy-mcat',
  sections: [
    {
      id: 'cs4-intro',
      type: 'text' as const,
      content: `# CARS Strategy

**Part 4 of 7 — Handling Difficult Passages**

### When You're Lost

1. **Don't panic** — difficult passages are designed to be difficult for everyone
2. **Focus on structure**: Even if content is confusing, you can track:
   - What is the author arguing?
   - Are they for or against something?
   - Where does the argument shift?

### Difficult Passage Types

| Type | Challenge | Strategy |
|------|-----------|----------|
| **Philosophy** | Abstract, dense language | Focus on the core claim, ignore jargon |
| **Art criticism** | Subjective, opinionated | Track the critic's position clearly |
| **Ethics** | Multiple perspectives | Note who says what |
| **History** | Dense dates/names | Focus on cause → effect, not memorizing specifics |

### The 2-Pass Approach for Hard Passages

**Pass 1**: Read through once, get the gist (don't stop to reread)
**Pass 2**: Use questions to guide you back to specific sections

### When to Skip a Passage

- If a passage is extremely difficult, flag ALL its questions
- Answer what you can on the first pass
- Come back with remaining time
- Always guess before time runs out!`
    },
    {
      id: 'cs4-quiz1',
      type: 'multiple-choice' as const,
      content: '**Difficult Passages** 🎯',
      exercise: {
        questions: [
          {
            question: 'You finish reading a dense philosophy passage and cannot state the main idea. The best next step is:',
            options: ['Start the questions — they will guide you to re-examine specific parts of the passage', 'Reread the entire passage from the beginning', 'Skip the passage entirely and move on', 'Guess on all questions immediately'],
            correctAnswer: 0,
            explanation: 'Questions point you to specific sections. Often, working through the questions helps you understand the passage structure better than a second full read. This is more time-efficient than rereading everything.'
          }
        ]
      }
    },
    {
      id: 'cs4-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 4

- Difficult passages are expected — don't let them derail you
- Focus on argument STRUCTURE when content is confusing
- Let questions guide your understanding on a second targeted read
- Skip wisely: flag, guess, and come back if time permits`
    }
  ]
};
"""

    parts[5] = r"""export const mcatCarsStratPart5Data = {
  topicSlug: 'mcat-cars-strategy-mcat',
  sections: [
    {
      id: 'cs5-intro',
      type: 'text' as const,
      content: `# CARS Strategy

**Part 5 of 7 — Question-Specific Strategies**

### Main Idea Questions

- "The central thesis of the passage is..."
- "The author's primary purpose is..."
- **Strategy**: Should match your AMI (Author's Main Idea). Eliminate options that are too narrow or only cover one paragraph.

### Detail / Retrieval Questions

- "According to the passage..."
- "The author states that..."
- **Strategy**: Go back to the passage! The answer is explicitly stated. Don't rely on memory.

### Inference Questions

- "It can be inferred that..."
- "The author would most likely agree that..."
- **Strategy**: Answer must be SUPPORTED by text but not directly stated. Stay close to the text — don't make big leaps.

### Strengthen / Weaken Questions

- "Which would most strengthen the author's argument?"
- "Which finding would most undermine the claim?"
- **Strategy**: Identify the core argument first, then find the option that reinforces or contradicts it.

### Application Questions

- "If [new scenario], the author would most likely..."
- **Strategy**: Apply the author's stated views/principles to a new context.`
    },
    {
      id: 'cs5-quiz1',
      type: 'multiple-choice' as const,
      content: '**Question Types** 🎯',
      exercise: {
        questions: [
          {
            question: 'A question asks: "Which of the following, if true, would most weaken the author's central argument?" To answer this, you should FIRST:',
            options: ['Clearly identify the author's central argument from the passage', 'Look for the weakest answer choice', 'Find a detail that contradicts one paragraph', 'Choose the most extreme answer'],
            correctAnswer: 0,
            explanation: 'You cannot weaken an argument you don\'t understand. First identify the core claim, then find the answer that most directly contradicts or undermines it.'
          }
        ]
      }
    },
    {
      id: 'cs5-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 5

- Main idea questions → match your overall passage summary
- Detail questions → go back and find it (don't trust memory)
- Inference → close to text, one logical step away
- Strengthen/weaken → identify the argument before evaluating options`
    }
  ]
};
"""

    parts[6] = r"""export const mcatCarsStratPart6Data = {
  topicSlug: 'mcat-cars-strategy-mcat',
  sections: [
    {
      id: 'cs6-intro',
      type: 'text' as const,
      content: `# CARS Strategy

**Part 6 of 7 — Tone & Rhetoric**

### Identifying Author's Tone

The author's attitude toward the subject is CRUCIAL for CARS.

| Tone | Signals |
|------|---------|
| **Supportive** | "Importantly," "significantly," "a crucial development" |
| **Critical** | "However," "fails to," "overlooks," "problematic" |
| **Neutral/Objective** | "Studies suggest," "one perspective is," balanced presentation |
| **Dismissive** | "Merely," "so-called," "trivial" |
| **Ambivalent** | Presents both pros and cons without clear preference |

### Rhetorical Devices on CARS

- **Analogy**: Comparing to make a point clearer
- **Counterargument**: Presenting opposing view to refute it
- **Concession**: Acknowledging opponent's point before arguing against
- **Appeal to authority**: Citing experts to support a claim
- **Qualifying language**: "Sometimes," "may," "tends to" (shows nuance)

### Reading Tone Questions

"The author's attitude toward X is best described as..."
- Look for charged words and qualifying language in the passage
- Consider the WHOLE passage, not just one sentence`
    },
    {
      id: 'cs6-quiz1',
      type: 'multiple-choice' as const,
      content: '**Tone & Rhetoric** 🎯',
      exercise: {
        questions: [
          {
            question: 'An author writes: "While proponents celebrate the innovation, they conveniently overlook its devastating environmental consequences." The tone is:',
            options: ['Critical — "conveniently overlook" and "devastating" show disapproval', 'Neutral — the author presents both sides', 'Supportive of the innovation', 'Ambivalent'],
            correctAnswer: 0,
            explanation: '"Conveniently overlook" implies deliberate ignorance, and "devastating" is strongly negative. The author is criticizing both the innovation and its supporters.'
          }
        ]
      }
    },
    {
      id: 'cs6-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 6

- Track emotional/charged words: "devastating," "merely," "groundbreaking"
- Tone is usually moderate on CARS — extreme tones are rare
- "Although/however" → author about to disagree
- Qualifying words ("sometimes," "often") signal nuanced positions`
    }
  ]
};
"""

    parts[7] = r"""export const mcatCarsStratPart7Data = {
  topicSlug: 'mcat-cars-strategy-mcat',
  sections: [
    {
      id: 'cs7-intro',
      type: 'text' as const,
      content: `# CARS Strategy

**Part 7 of 7 — Long-Term CARS Improvement Plan**

### Building CARS Skills Over Time

CARS cannot be crammed. It requires consistent practice over months.

### Recommended Practice Schedule

| Timeframe | Activity |
|-----------|----------|
| 3+ months out | Read challenging non-fiction daily (philosophy, ethics, social science) |
| 2 months out | Practice 1-2 timed passages daily with review |
| 1 month out | Full-length CARS sections under test conditions weekly |
| Test week | Light practice, review strategy, rest |

### How to Review CARS Practice

For EVERY wrong answer, ask:
1. Why was the wrong answer tempting?
2. What type of wrong answer was it? (extreme, out of scope, opposite, etc.)
3. What did I miss in the passage?
4. What specific text supports the right answer?

### Common CARS Mistakes

- Reading too quickly and missing nuance
- Choosing answers based on outside knowledge
- Not reading all four answer choices before selecting
- Spending too much time on one difficult question
- Confusing what the author says vs. what someone else says in the passage`
    },
    {
      id: 'cs7-quiz1',
      type: 'multiple-choice' as const,
      content: '**CARS Strategy Review** 🎯',
      exercise: {
        questions: [
          {
            question: 'The single most effective way to improve CARS performance over 3 months is:',
            options: ['Daily practice with careful review of every wrong answer', 'Memorizing a list of CARS strategies', 'Reading only science passages', 'Spending all study time on CARS and ignoring other sections'],
            correctAnswer: 0,
            explanation: 'CARS improvement comes from consistent, deliberate practice with thorough review. Understanding WHY you got questions wrong is more valuable than doing more passages. Quality > quantity.'
          }
        ]
      }
    },
    {
      id: 'cs7-summary',
      type: 'text' as const,
      content: `### CARS Strategy — Complete! ✅

CARS is a skill built over time. The keys: active reading, strong elimination, understanding author tone, and consistent practice with careful review. Every wrong answer is a learning opportunity.`
    }
  ]
};
"""

    for i in range(1, 8):
        write_file(f'mcat-mcat-cars-strategy-mcat-part{i}.ts', parts[i])


###############################################################################
# CARS PASSAGES (7 parts)
###############################################################################

def gen_cars_passages():
    parts = {}
    parts[1] = r"""export const mcatCarsPsgPart1Data = {
  topicSlug: 'mcat-cars-passages-mcat',
  sections: [
    {
      id: 'cp1-intro',
      type: 'text' as const,
      content: `# CARS Passage Types

**Part 1 of 7 — Humanities Passages**

### Characteristics of Humanities Passages

CARS draws from these humanities fields:
- **Philosophy**: Ethics, epistemology, logic
- **Literature/Literary criticism**: Analysis of texts, narrative theory
- **Art/Music**: Aesthetic theory, art history, criticism
- **Religion/Theology**: Comparative religion, philosophical theology

### What Makes Humanities Passages Challenging

- **Abstract language**: Concepts like "being," "consciousness," "the sublime"
- **Dense arguments**: Multiple layers of reasoning
- **Unfamiliar vocabulary**: Technical philosophical terms
- **Implicit assumptions**: Author assumes you can follow complex chains of logic

### Strategy for Humanities Passages

1. **Look for the thesis statement** — often at the end of the first or second paragraph
2. **Track who says what** — passages often discuss multiple thinkers
3. **Don't get lost in examples** — they illustrate a point, focus on the point
4. **Paraphrase in simple language**: "The author is saying that..."
5. **Stay patient** — understanding often comes by the end of the passage`
    },
    {
      id: 'cp1-quiz1',
      type: 'multiple-choice' as const,
      content: '**Humanities Passages** 🎯',
      exercise: {
        questions: [
          {
            question: 'A philosophy passage discusses three philosophers\' views on justice. To answer questions about the AUTHOR\'s view, you should:',
            options: ['Distinguish the author\'s voice from the philosophers being discussed — look for evaluative language', 'Assume the author agrees with the last philosopher mentioned', 'Average the three philosophers\' views', 'Look for the most modern perspective'],
            correctAnswer: 0,
            explanation: 'Authors often present others\' views before giving their own assessment. Look for evaluative language: "However," "More convincingly," "This argument fails because" — these signal the author\'s actual position.'
          }
        ]
      }
    },
    {
      id: 'cp1-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 1

- Humanities passages are abstract — focus on the core argument
- Track WHO is making each claim (author vs. people being discussed)
- Paraphrase complex ideas in simple terms
- Thesis is often at the end of the intro or beginning of the conclusion`
    }
  ]
};
"""

    parts[2] = r"""export const mcatCarsPsgPart2Data = {
  topicSlug: 'mcat-cars-passages-mcat',
  sections: [
    {
      id: 'cp2-intro',
      type: 'text' as const,
      content: `# CARS Passage Types

**Part 2 of 7 — Social Science Passages**

### Social Science Topics on CARS

- **History**: Social movements, political events, cultural shifts
- **Economics**: Theories, policy debates, market analysis
- **Political Science**: Governance, democracy, rights
- **Psychology/Sociology**: Social behavior, cultural norms (non-scientific)
- **Anthropology**: Cultural practices, human societies

### How Social Science Differs from Humanities

| Feature | Humanities | Social Sciences |
|---------|-----------|----------------|
| Evidence | Reasoning, textual analysis | Data, case studies, historical examples |
| Tone | Often more subjective | Often aims for objectivity |
| Arguments | Philosophical/theoretical | Empirical/evidence-based |

### Strategy for Social Science Passages

- **Identify the research question** or central issue
- **Note cause-and-effect claims** — authors often argue X caused Y
- **Pay attention to dates and context** — historical arguments depend on timeline
- **Watch for bias** — even "objective" passages have an author viewpoint`
    },
    {
      id: 'cp2-quiz1',
      type: 'multiple-choice' as const,
      content: '**Social Science Passages** 🎯',
      exercise: {
        questions: [
          {
            question: 'A social science passage presents data showing a correlation between two variables. The author concludes one causes the other. A good critical reader would:',
            options: ['Note that the author may be conflating correlation with causation — a potential weakness', 'Accept the conclusion since data supports it', 'Ignore the data and focus on the argument', 'Assume the author is wrong without evidence'],
            correctAnswer: 0,
            explanation: 'Correlation ≠ causation is a fundamental critical thinking principle. CARS questions often test whether you can identify logical weaknesses, including unwarranted causal claims.'
          }
        ]
      }
    },
    {
      id: 'cp2-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 2

- Social science passages use evidence/data more than humanities
- Watch for cause-effect claims — are they justified?
- Note the historical/social context of claims
- Even data-driven passages reflect the author's perspective`
    }
  ]
};
"""

    parts[3] = r"""export const mcatCarsPsgPart3Data = {
  topicSlug: 'mcat-cars-passages-mcat',
  sections: [
    {
      id: 'cp3-intro',
      type: 'text' as const,
      content: `# CARS Passage Types

**Part 3 of 7 — Argumentative Passages**

### Structure of an Argument

1. **Claim/Thesis**: The main point the author is making
2. **Evidence/Support**: Facts, examples, reasoning that back the claim
3. **Warrants**: Assumptions connecting evidence to the claim (often unstated!)
4. **Counterarguments**: Opposing views the author addresses
5. **Conclusion**: Where the argument lands

### Common Argument Patterns in CARS

| Pattern | Structure | Example Signal |
|---------|-----------|----------------|
| **Claim-Evidence** | Thesis → support | "Studies show..." |
| **Problem-Solution** | Problem → proposed fix | "To address this..." |
| **Compare-Contrast** | View A vs. View B | "While some argue... others contend..." |
| **Cause-Effect** | X led to Y | "As a result of..." |
| **Critique** | Examines and evaluates a position | "This argument fails because..." |

### Identifying the Argument

After reading, you should be able to articulate:
- **What is being argued?** (the claim)
- **Why should I believe it?** (the evidence)
- **What are the assumptions?** (often tested on CARS!)`
    },
    {
      id: 'cp3-quiz1',
      type: 'multiple-choice' as const,
      content: '**Argument Analysis** 🎯',
      exercise: {
        questions: [
          {
            question: 'A passage argues that public art funding improves community well-being, citing three city case studies. An unstated assumption is likely:',
            options: ['That the improvements in those cities were caused by the art funding and not other factors', 'That all cities are identical', 'That public art is always popular', 'That community well-being cannot be measured'],
            correctAnswer: 0,
            explanation: 'The argument assumes a causal link between art funding and improved well-being. But the case studies could be explained by other factors (confounding variables). CARS loves testing your ability to identify unstated assumptions.'
          }
        ]
      }
    },
    {
      id: 'cp3-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 3

- Every argument has: claim + evidence + assumptions + conclusion
- Unstated assumptions are frequently tested on CARS
- Know the common patterns: claim-evidence, problem-solution, compare-contrast
- "Why should I believe this?" is the critical reader's key question`
    }
  ]
};
"""

    parts[4] = r"""export const mcatCarsPsgPart4Data = {
  topicSlug: 'mcat-cars-passages-mcat',
  sections: [
    {
      id: 'cp4-intro',
      type: 'text' as const,
      content: `# CARS Passage Types

**Part 4 of 7 — Comparative & Multiple-Perspective Passages**

### Tracking Multiple Viewpoints

Many CARS passages present 2-3 different perspectives on an issue.

### Strategy: The Viewpoint Grid

As you read, mentally track:

| Aspect | Viewpoint A | Viewpoint B | Author |
|--------|------------|------------|--------|
| Main claim | ? | ? | ? |
| Key evidence | ? | ? | ? |
| Tone | ? | ? | ? |

### Common Traps in Multi-Perspective Passages

1. **Attribution errors**: Confusing who said what
2. **Assuming agreement**: Just because the author discusses a view doesn't mean they endorse it
3. **False balance**: The author may present both sides but clearly favor one
4. **Missing the synthesis**: The author may combine elements of both views

### Signal Phrases

- "According to theorist X..." → This is X's view, NOT necessarily the author's
- "While X argues... Y contends..." → Two competing views
- "Although X has merit... the evidence suggests..." → Author is about to side with one view`
    },
    {
      id: 'cp4-quiz1',
      type: 'multiple-choice' as const,
      content: '**Multiple Perspectives** 🎯',
      exercise: {
        questions: [
          {
            question: 'A passage states: "Smith argues that technology enhances creativity. However, this view overlooks the mounting evidence that passive screen time diminishes it." The author most likely:',
            options: ['Disagrees with Smith — "overlooks" signals criticism of Smith\'s position', 'Agrees with Smith', 'Has no opinion', 'Is merely summarizing both views neutrally'],
            correctAnswer: 0,
            explanation: '"However" signals a counterpoint, and "overlooks" implies Smith is wrong or incomplete in their reasoning. The author is positioning against Smith.'
          }
        ]
      }
    },
    {
      id: 'cp4-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 4

- Track WHO says WHAT — the #1 skill for multi-perspective passages
- "According to X" ≠ the author's view
- Watch for signal phrases that reveal the author's actual position
- Attribution errors are the most common trap in these passages`
    }
  ]
};
"""

    parts[5] = r"""export const mcatCarsPsgPart5Data = {
  topicSlug: 'mcat-cars-passages-mcat',
  sections: [
    {
      id: 'cp5-intro',
      type: 'text' as const,
      content: `# CARS Passage Types

**Part 5 of 7 — Ethics & Morality Passages**

### Common Ethics Topics on CARS

- Medical ethics (autonomy, beneficence, justice)
- Environmental ethics
- Technology and privacy
- Social justice and equality
- Cultural relativism vs. universal morals

### Key Ethical Frameworks

| Framework | Core Idea | Key Thinker(s) |
|-----------|-----------|----------------|
| **Utilitarianism** | Greatest good for greatest number | Mill, Bentham |
| **Deontology** | Duty-based; some actions are inherently right/wrong | Kant |
| **Virtue Ethics** | Character matters; be a good person | Aristotle |
| **Rights-Based** | Individual rights are paramount | Locke |
| **Social Contract** | Society is based on implicit agreements | Hobbes, Rousseau |

### Strategy for Ethics Passages

- Identify WHICH ethical framework the author uses (or critiques)
- Note when the author appeals to consequences vs. principles vs. character
- Ethics passages often have a "but" — the author concedes one side before arguing the other
- **Do NOT import your own ethical views** — answer based on the passage only!`
    },
    {
      id: 'cp5-quiz1',
      type: 'multiple-choice' as const,
      content: '**Ethics Passages** 🎯',
      exercise: {
        questions: [
          {
            question: 'An author argues that a policy should be evaluated solely on whether it maximizes overall well-being. This aligns with:',
            options: ['Utilitarianism', 'Deontology', 'Virtue ethics', 'Social contract theory'],
            correctAnswer: 0,
            explanation: 'Utilitarianism judges actions by their consequences — specifically whether they maximize total well-being/happiness. Key phrase: "greatest good for the greatest number."'
          }
        ]
      }
    },
    {
      id: 'cp5-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 5

- Know the basic ethical frameworks — they provide context for understanding arguments
- Don't inject your own moral views — answer from the author's perspective
- Ethics passages often present a dilemma with competing values
- Watch for consequences-based (utilitarian) vs. principle-based (deontological) reasoning`
    }
  ]
};
"""

    parts[6] = r"""export const mcatCarsPsgPart6Data = {
  topicSlug: 'mcat-cars-passages-mcat',
  sections: [
    {
      id: 'cp6-intro',
      type: 'text' as const,
      content: `# CARS Passage Types

**Part 6 of 7 — Art, Architecture & Aesthetics Passages**

### What to Expect

These passages discuss:
- Theories of beauty and artistic value
- Historical art movements (Modernism, Postmodernism, Impressionism, etc.)
- Music theory and criticism
- Architecture and design philosophy
- Photography and visual culture

### Common Themes

1. **Art for art's sake vs. art as social commentary**
2. **Objective vs. subjective standards of beauty**
3. **Tradition vs. innovation**
4. **The role of the artist in society**
5. **How technology changes art (photography, digital media)**

### Strategy

- **Don't be intimidated by art jargon** — the passage will explain what matters
- **Track the value judgments**: Is the author saying this art is good? Bad? Innovative? Derivative?
- **Note historical context**: Art movements are often responses to previous movements
- **Focus on the argument, not the art itself** — you don't need to visualize the work being discussed`
    },
    {
      id: 'cp6-quiz1',
      type: 'multiple-choice' as const,
      content: '**Aesthetics** 🎯',
      exercise: {
        questions: [
          {
            question: 'A passage argues that Postmodern architecture deliberately rejects Modernist emphasis on function. This suggests that understanding Postmodern architecture requires:',
            options: ['Knowledge of what Modernism valued — since Postmodernism is defined as a reaction against it', 'Ignoring all historical context', 'Focusing only on building materials', 'Measuring the buildings\' energy efficiency'],
            correctAnswer: 0,
            explanation: 'If Postmodernism is a reaction against Modernism, understanding the original movement is essential. This is a "reasoning beyond the text" question — applying the passage\'s logic.'
          }
        ]
      }
    },
    {
      id: 'cp6-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 6

- Art/architecture passages test reading comprehension, NOT art knowledge
- Track the value judgments: good/bad, innovative/derivative
- Movements are often reactions to what came before
- Jargon will be explained or inferable from context`
    }
  ]
};
"""

    parts[7] = r"""export const mcatCarsPsgPart7Data = {
  topicSlug: 'mcat-cars-passages-mcat',
  sections: [
    {
      id: 'cp7-intro',
      type: 'text' as const,
      content: `# CARS Passage Types

**Part 7 of 7 — Passage Practice Principles**

### How to Practice CARS Effectively

**The Review Process is More Important Than the Practice Itself**

After completing each passage:

### Step 1: Categorize the Passage
- What type? (humanities, social science, ethics, etc.)
- What was the main argument?
- Was it easy, medium, or hard?

### Step 2: Review EVERY Question
- For questions you got RIGHT: Was it for the right reason?
- For questions you got WRONG: What type of error?
  - Misread the passage?
  - Fell for a trap answer?
  - Ran out of time?
  - Confused who said what?

### Step 3: Identify Patterns
After 10+ passages, look for:
- Which passage types are hardest for you?
- Which question types do you miss most?
- Are you making the same error repeatedly?

### Step 4: Targeted Practice
- If humanities passages are hard → read more philosophy and literary criticism
- If inference questions are hard → practice finding the "one step beyond" the text
- If timing is an issue → practice pacing with a stopwatch`
    },
    {
      id: 'cp7-quiz1',
      type: 'multiple-choice' as const,
      content: '**CARS Practice Strategy** 🎯',
      exercise: {
        questions: [
          {
            question: 'A student consistently misses "Reasoning Beyond the Text" questions but does well on comprehension questions. The most targeted improvement would be:',
            options: ['Practice applying passage logic to new scenarios — the weak area is inference and application', 'Read passages more slowly', 'Focus on improving reading speed', 'Study more vocabulary'],
            correctAnswer: 0,
            explanation: 'The student understands the passage (good comprehension) but struggles with extending ideas beyond the text. Targeted practice on inference and application questions will address this specific weakness.'
          }
        ]
      }
    },
    {
      id: 'cp7-summary',
      type: 'text' as const,
      content: `### CARS Passage Types — Complete! ✅

The key to CARS improvement: consistent practice + thorough review. Know the passage types, identify your weaknesses, and target them specifically. Trust the process — CARS skills develop over months, not days.`
    }
  ]
};
"""

    for i in range(1, 8):
        write_file(f'mcat-mcat-cars-passages-mcat-part{i}.ts', parts[i])


###############################################################################
# CARS REASONING (7 parts)
###############################################################################

def gen_cars_reasoning():
    parts = {}
    parts[1] = r"""export const mcatCarsReasonPart1Data = {
  topicSlug: 'mcat-cars-reasoning-mcat',
  sections: [
    {
      id: 'cr1-intro',
      type: 'text' as const,
      content: `# CARS Logical Reasoning

**Part 1 of 7 — Deductive vs. Inductive Reasoning**

### Deductive Reasoning

Starts from general principles → specific conclusions

**If the premises are true, the conclusion MUST be true.**

Example:
- All mammals breathe air. (premise)
- Whales are mammals. (premise)
- Therefore, whales breathe air. (conclusion — guaranteed!)

### Inductive Reasoning

Starts from specific observations → general conclusions

**Even if the premises are true, the conclusion is only PROBABLE.**

Example:
- Every swan I've seen is white. (observation)
- Therefore, all swans are white. (conclusion — could be wrong! Black swans exist.)

### Why This Matters for CARS

- CARS passages often use inductive reasoning — conclusions based on evidence
- Questions may test whether you can identify the type of reasoning
- "Strongest" answers provide deductive certainty; "weakest" answers rely on thin induction`
    },
    {
      id: 'cr1-quiz1',
      type: 'multiple-choice' as const,
      content: '**Reasoning Types** 🎯',
      exercise: {
        questions: [
          {
            question: 'An author surveys 500 college students and concludes that young adults prefer digital textbooks. This is an example of:',
            options: ['Inductive reasoning — generalizing from a sample to a broad claim', 'Deductive reasoning from established principles', 'Neither — this is pure observation', 'Circular reasoning'],
            correctAnswer: 0,
            explanation: 'The author moves from specific observations (500 students) to a general claim (young adults broadly). This is inductive — the conclusion may be likely but is not guaranteed.'
          }
        ]
      }
    },
    {
      id: 'cr1-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 1

- Deductive: general → specific, conclusion is certain if premises true
- Inductive: specific → general, conclusion is probable but not guaranteed
- Most CARS arguments are inductive — evidence-based but not airtight
- Identifying reasoning type helps you evaluate argument strength`
    }
  ]
};
"""

    parts[2] = r"""export const mcatCarsReasonPart2Data = {
  topicSlug: 'mcat-cars-reasoning-mcat',
  sections: [
    {
      id: 'cr2-intro',
      type: 'text' as const,
      content: `# CARS Logical Reasoning

**Part 2 of 7 — Logical Fallacies**

### Common Fallacies Tested on CARS

| Fallacy | Description | Example |
|---------|-------------|---------|
| **Ad hominem** | Attacking the person, not the argument | "His theory is wrong because he's biased" |
| **Straw man** | Misrepresenting someone's argument to attack it easily | "She wants slight reform" → "She wants to destroy everything" |
| **False dichotomy** | Presenting only 2 options when more exist | "Either we ban it completely or accept all consequences" |
| **Appeal to authority** | Using someone's status instead of evidence | "A celebrity says it works, so it must" |
| **Circular reasoning** | Conclusion restates the premise | "It's true because it's a fact" |
| **Hasty generalization** | Broad conclusion from limited data | "I met two rude people from X, so everyone from X is rude" |
| **Post hoc** | Assuming cause because of timing | "I wore my lucky hat and won, so the hat caused the win" |
| **Slippery slope** | Assuming chain reaction without evidence | "If we allow X, then Y and Z will inevitably follow" |

### On the MCAT

Questions may ask you to identify the flaw in reasoning, either in the passage or in an answer choice.`
    },
    {
      id: 'cr2-quiz1',
      type: 'multiple-choice' as const,
      content: '**Logical Fallacies** 🎯',
      exercise: {
        questions: [
          {
            question: 'A critic responds to a scientist\'s climate research by saying, "She receives government funding, so her conclusions cannot be trusted." This is an example of:',
            options: ['Ad hominem — attacking the researcher\'s credibility rather than the evidence', 'Straw man', 'False dichotomy', 'Circular reasoning'],
            correctAnswer: 0,
            explanation: 'Ad hominem attacks the person rather than addressing the argument\'s merits. The funding source doesn\'t automatically invalidate the research findings.'
          }
        ]
      }
    },
    {
      id: 'cr2-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 2

- Know the major fallacies — they appear in CARS passages and questions
- Ad hominem, straw man, and false dichotomy are most common
- Questions may ask you to identify weaknesses in an argument
- An argument can still have a true conclusion even if it uses a fallacy`
    }
  ]
};
"""

    parts[3] = r"""export const mcatCarsReasonPart3Data = {
  topicSlug: 'mcat-cars-reasoning-mcat',
  sections: [
    {
      id: 'cr3-intro',
      type: 'text' as const,
      content: `# CARS Logical Reasoning

**Part 3 of 7 — Assumptions & Implicit Reasoning**

### What is an Assumption?

An assumption is an UNSTATED premise that must be true for the argument to work.

**Example:**
- Argument: "Students who take AP classes get into better colleges."
- Unstated assumption: AP classes are a significant factor in admissions (not just correlation).

### Finding Assumptions on CARS

Ask yourself: **"What must be true for this conclusion to follow from this evidence?"**

### The Negation Test

To check if something is a necessary assumption:
1. Negate the statement
2. If the argument falls apart → it was a necessary assumption
3. If the argument still works → it was NOT a necessary assumption

**Example:**
- Argument: "Organic food is healthier because it has no pesticides."
- Test: "What if absence of pesticides doesn't make food healthier?" → Argument collapses!
- Therefore, "no pesticides = healthier" is a necessary assumption.

### CARS Questions About Assumptions

- "The author's argument assumes which of the following?"
- "Which is a necessary condition for the author's conclusion?"
- "The argument depends on the assumption that..."`
    },
    {
      id: 'cr3-quiz1',
      type: 'multiple-choice' as const,
      content: '**Assumptions** 🎯',
      exercise: {
        questions: [
          {
            question: 'An author argues that teaching students chess improves their math skills because chess requires logical thinking. An assumption of this argument is:',
            options: ['Logical thinking skills transfer between different domains (chess to math)', 'All students enjoy chess', 'Math is the most important subject', 'Chess is harder than math'],
            correctAnswer: 0,
            explanation: 'The argument assumes that practicing logical thinking in one domain (chess) improves it in another (math). If skills don\'t transfer between domains, the argument fails. Use the negation test to verify.'
          }
        ]
      }
    },
    {
      id: 'cr3-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 3

- Assumptions are unstated premises the argument depends on
- Ask: "What must be true for this conclusion to follow?"
- Negation test: Negate it — if the argument breaks, it's a necessary assumption
- Assumption questions are among the most common on CARS`
    }
  ]
};
"""

    parts[4] = r"""export const mcatCarsReasonPart4Data = {
  topicSlug: 'mcat-cars-reasoning-mcat',
  sections: [
    {
      id: 'cr4-intro',
      type: 'text' as const,
      content: `# CARS Logical Reasoning

**Part 4 of 7 — Strengthening & Weakening Arguments**

### How to Strengthen an Argument

Add evidence/premises that make the conclusion MORE likely.
- Provides supporting data
- Eliminates alternative explanations
- Reinforces an assumption

### How to Weaken an Argument

Add evidence/premises that make the conclusion LESS likely.
- Provides contradicting data
- Introduces alternative explanations
- Undermines an assumption

### The Process

1. **Identify the argument's conclusion**
2. **Identify the evidence/reasoning**
3. **Find the gap** (assumption) between evidence and conclusion
4. **The best strengthener bridges that gap; the best weakener widens it**

### MCAT Example

Argument: "City X reduced crime by installing more streetlights."

- **Strengthener**: "Cities with similar demographics that didn't install lights saw no crime reduction" (eliminates alternative explanation)
- **Weakener**: "City X also hired 200 new police officers during the same period" (introduces alternative explanation)`
    },
    {
      id: 'cr4-quiz1',
      type: 'multiple-choice' as const,
      content: '**Strengthen/Weaken** 🎯',
      exercise: {
        questions: [
          {
            question: 'An author argues that meditation reduces anxiety based on a study where meditators reported less anxiety than non-meditators. Which would MOST weaken this argument?',
            options: ['People who choose to meditate may have been less anxious to begin with (self-selection bias)', 'Meditation has existed for thousands of years', 'Some meditators also exercise regularly', 'Anxiety can be measured in multiple ways'],
            correctAnswer: 0,
            explanation: 'Self-selection bias provides an alternative explanation: the correlation may not be causal. Less anxious people might simply be more likely to try meditation. This directly undermines the argument\'s core assumption of causation.'
          }
        ]
      }
    },
    {
      id: 'cr4-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 4

- To strengthen: support assumptions, eliminate alternatives, add confirming evidence
- To weaken: undermine assumptions, introduce alternatives, add contradicting evidence
- Always identify the CONCLUSION and the GAP first
- Best weakeners often provide alternative explanations`
    }
  ]
};
"""

    parts[5] = r"""export const mcatCarsReasonPart5Data = {
  topicSlug: 'mcat-cars-reasoning-mcat',
  sections: [
    {
      id: 'cr5-intro',
      type: 'text' as const,
      content: `# CARS Logical Reasoning

**Part 5 of 7 — Analogies & Parallel Reasoning**

### Analogy Questions

"Which situation is most analogous to the one described in the passage?"

### How Analogies Work

An analogy maps the **relationship structure** from one domain to another.

**Passage**: A government restricted media during a crisis, which the author criticizes as undermining democracy.

**Good analogy**: A company silencing employee feedback during a reorganization, criticized as undermining participation.

**Why it works**: Both involve authority figures suppressing information during disruption with negative consequences for participation/democracy.

### How to Evaluate Analogies

1. **Identify the abstract structure** of the passage's argument
2. Strip away surface details (topic, characters, setting)
3. Match the **relationship pattern**, not the surface features
4. The best analogy preserves the logical structure

### Common Traps

- **Surface similarity only**: Same topic but different logical relationship
- **Partial match**: Matches some elements but not the critical one
- **Reversed relationship**: Same elements but in opposite roles`
    },
    {
      id: 'cr5-quiz1',
      type: 'multiple-choice' as const,
      content: '**Analogies** 🎯',
      exercise: {
        questions: [
          {
            question: 'A passage describes how an invasive species outcompeted native plants because it grew faster and used more resources. Which is the best analogy?',
            options: ['A large retailer driving small businesses out by offering lower prices through greater buying power', 'A student studying harder and earning better grades', 'A drought killing all plants equally', 'Two athletes competing fairly in a race'],
            correctAnswer: 0,
            explanation: 'The key structure: an entity with a resource advantage displaces a weaker entity. The large retailer (invasive species) outcompetes small businesses (native plants) through resource advantage (buying power/growth rate).'
          }
        ]
      }
    },
    {
      id: 'cr5-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 5

- Analogies match STRUCTURE, not surface features
- Strip away specifics → identify the abstract relationship
- Watch for traps: surface-only matches and reversed relationships
- Good analogies preserve the logical relationship between key elements`
    }
  ]
};
"""

    parts[6] = r"""export const mcatCarsReasonPart6Data = {
  topicSlug: 'mcat-cars-reasoning-mcat',
  sections: [
    {
      id: 'cr6-intro',
      type: 'text' as const,
      content: `# CARS Logical Reasoning

**Part 6 of 7 — Evidence Evaluation**

### Types of Evidence in CARS

| Evidence Type | Strength | Example |
|--------------|----------|---------|
| **Empirical data** | Strong | "A study of 10,000 participants showed..." |
| **Expert testimony** | Moderate | "According to Dr. Smith, a leading researcher..." |
| **Historical precedent** | Moderate | "In 1932, a similar policy led to..." |
| **Anecdotal** | Weak | "My friend tried it and it worked" |
| **Hypothetical** | Weak | "Imagine a world where..." |

### Evaluating Evidence on CARS

Questions may ask:
- "Which evidence most supports the author's claim?"
- "The author uses the example of X primarily to..."
- "How does paragraph 3 relate to the main argument?"

### Role of Examples in Arguments

Examples in CARS passages serve specific functions:
1. **Illustrate** a general principle
2. **Provide evidence** for a claim
3. **Counter** an opposing position
4. **Qualify** or nuance a broad claim
5. **Introduce** a new perspective

**Key Insight**: Always ask WHY the author included an example, not just WHAT it says.`
    },
    {
      id: 'cr6-quiz1',
      type: 'multiple-choice' as const,
      content: '**Evidence Evaluation** 🎯',
      exercise: {
        questions: [
          {
            question: 'An author argues that education reform improves outcomes, then describes one school that succeeded after reforms. A questioner could fairly note that:',
            options: ['One school is anecdotal evidence — not sufficient to generalize to all schools', 'The school must be representative of all schools', 'Education reform always works everywhere', 'The example disproves the argument'],
            correctAnswer: 0,
            explanation: 'A single case study is anecdotal — it illustrates possibility but doesn\'t prove the claim for all schools. The MCAT tests whether you can evaluate the strength and limitations of evidence.'
          }
        ]
      }
    },
    {
      id: 'cr6-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 6

- Empirical data > expert opinion > historical precedent > anecdote > hypothetical
- Always ask WHY the author included an example
- Single case studies don't prove general claims
- Evidence can illustrate, support, counter, or qualify a claim`
    }
  ]
};
"""

    parts[7] = r"""export const mcatCarsReasonPart7Data = {
  topicSlug: 'mcat-cars-reasoning-mcat',
  sections: [
    {
      id: 'cr7-intro',
      type: 'text' as const,
      content: `# CARS Logical Reasoning

**Part 7 of 7 — Putting It All Together**

### The Complete CARS Reasoning Toolkit

1. ✅ **Identify reasoning type**: Deductive or inductive?
2. ✅ **Spot fallacies**: Ad hominem, straw man, false dichotomy, etc.
3. ✅ **Find assumptions**: What must be true for the argument to work?
4. ✅ **Strengthen/weaken**: What would make it more or less convincing?
5. ✅ **Evaluate analogies**: Does the logical structure match?
6. ✅ **Assess evidence**: How strong is the support?

### Integration: A Complete Analysis

For ANY CARS passage, you should be able to:

| Element | Question to ask |
|---------|----------------|
| Main conclusion | What is the author's bottom line? |
| Key evidence | What supports the conclusion? |
| Assumptions | What's unstated but required? |
| Weaknesses | Where might the argument fail? |
| Implications | What follows if the author is right? |
| Tone | What's the author's attitude? |

### The CARS Mindset

The strongest CARS performers think like this:
- "What is this author trying to convince me of?"
- "Why should I believe them?"
- "What could make this argument wrong?"
- "How does this apply beyond this specific case?"`
    },
    {
      id: 'cr7-quiz1',
      type: 'multiple-choice' as const,
      content: '**Final Integration** 🎯',
      exercise: {
        questions: [
          {
            question: 'A well-prepared CARS reader approaches a passage by:',
            options: ['Actively tracking the argument, tone, and evidence while reading — then using these to answer questions', 'Memorizing every detail for later recall', 'Reading as quickly as possible', 'Looking at the questions first and only reading relevant sections'],
            correctAnswer: 0,
            explanation: 'Active reading — tracking argument structure, author tone, and evidence quality — is the foundation of CARS success. This creates a mental map that makes all question types easier to answer.'
          }
        ]
      }
    },
    {
      id: 'cr7-summary',
      type: 'text' as const,
      content: `### CARS Logical Reasoning — Complete! ✅

You now have the complete toolkit: identify arguments, spot assumptions, evaluate evidence, recognize fallacies, and analyze analogies. Practice these skills with real passages until they become automatic.`
    }
  ]
};
"""

    for i in range(1, 8):
        write_file(f'mcat-mcat-cars-reasoning-mcat-part{i}.ts', parts[i])


# Run all generators
print("=== MCAT Batch 3: CARS Strategy ===")
gen_cars_strat()
print("\n=== MCAT Batch 3: CARS Passages ===")
gen_cars_passages()
print("\n=== MCAT Batch 3: CARS Reasoning ===")
gen_cars_reasoning()
print(f"\nBatch 3 complete! Total files: 21")
