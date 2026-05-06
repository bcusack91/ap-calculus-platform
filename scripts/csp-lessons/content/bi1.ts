// BI1 — Creative Development & Collaboration. Bespoke AP-quality content.

import type { Topic } from '../types';

const cspCreativeDevelopment: Topic = {
  slug: 'csp-creative-development',
  display: 'Creative Development',
  emoji: '🎨',
  exportPrefix: 'cspCreativeDevelopment',
  idPrefix: 'cspcd',
  parts: {
    2: {
      introMd: `## The Development Process

AP CSP frames program creation as an iterative cycle, not a straight line.

| Phase | What you do |
|-------|-------------|
| **Investigate** | Understand the user need; gather requirements. |
| **Design** | Plan algorithms, data, UI; sketch / pseudocode. |
| **Prototype** | Build a small testable slice. |
| **Test** | Run with real data; gather feedback. |
| **Refine** | Iterate based on test results and user feedback. |

You revisit any phase at any time — that\'s what makes it iterative.`,
      quiz1: [
        { q: 'A team finishes a "final" version of a program, then a user reports it crashes on empty input. What development phase should follow?', opts: ['Ship as-is — the user input was invalid anyway.', 'Refine: fix the bug, then re-test the program.', 'Skip ahead to the next planned feature first.', 'Discard the program and rebuild it from scratch.'], a: 1, exp: 'Iterative development means refining based on real-world feedback, then re-testing.' },
        { q: 'Why do programmers prototype before writing a polished version?', opts: ['Prototypes always perform faster than the final code.', 'A small testable slice exposes design problems early, when changes are cheap.', 'Prototypes guarantee the program will be free of bugs.', 'Prototypes can be shipped directly without further work.'], a: 1, exp: 'Early prototypes surface design issues before significant work is invested.' },
      ],
      contentMd: `## Why Iteration Beats "Big Design Up Front"

A waterfall approach (design everything, then build, then test) fails when:

- Requirements are unclear or change.
- Users discover what they want only after seeing something.
- Technical risks aren\'t obvious until prototypes hit reality.

Iterative development reduces risk by **shortening feedback loops**.

## Documentation Is Part Of Development

| Documentation | Purpose |
|---------------|---------|
| **Comments** in code | Explain WHY (not just what). |
| **README** | Describe purpose, setup, usage. |
| **Change log** | Record what changed, when, why. |
| **User guide** | Help end users accomplish tasks. |

## User-Centered Design

Programs are for **users**, not coders. Identify the user, their goal, and test with the real target population — not just yourself.`,
      inputs: {
        prompts: [
          'A development approach where you build, test, and refine in repeated cycles is called _______ development.',
          'A small, working version used to test a design idea is called a _______.',
          'Code _______ explain WHY a section exists, not just what it does.',
        ],
        answers: ['iterative', 'prototype', 'comments'],
        hints: ['Repeated cycles.', 'Test slice.', 'Lines starting with // or #.'],
        explanation: 'Iterative dev = repeated build-test-refine. Prototype = testable slice. Comments document intent.',
      },
      dropdowns: {
        items: [
          { label: 'A README primarily exists to ___', options: ['help others (or future you) understand and use the program', 'pass the AP exam', 'increase file size', 'replace all comments'] },
          { label: 'Testing with real users primarily helps ___', options: ['reveal usability issues the developer never noticed', 'guarantee zero bugs', 'reduce file size', 'eliminate iteration'] },
          { label: 'Iterative development reduces risk by ___', options: ['shortening feedback loops between assumption and reality', 'avoiding all testing', 'writing all code first', 'never refactoring'] },
        ],
        correct: ['help others (or future you) understand and use the program', 'reveal usability issues the developer never noticed', 'shortening feedback loops between assumption and reality'],
        hints: ['Onboarding doc.', 'Users surface what creators miss.', 'Frequent feedback = lower risk.'],
        explanation: 'READMEs help collaborators. User testing exposes blind spots. Short feedback loops lower risk.',
      },
      strategyMd: `## AP Exam Strategy: Development Process

- "What should the team do next?" usually = test, gather feedback, refine, document — not "ship blindly".
- "Iterative" is often the right adjective for a sound process.
- "User-centered" beats "based on what we wanted to build".`,
      applied: [
        { q: 'A team builds an app for elderly users but never tests with elderly users. After release, complaints flood in about tiny text. What lesson best captures this?', opts: ['Picking a bigger default font would have solved every UI complaint.', 'User-centered testing with the actual target population would have surfaced this earlier.', 'In-house testing by the developers should have been enough to catch the issue.', 'Adding more code comments would have prevented the usability complaint.'], a: 1, exp: 'Testing with the real target population catches issues developers miss.' },
        { q: 'A startup spends 18 months perfecting an unreleased product, then learns users wanted something different. The most CSP-aligned diagnosis is ___', opts: ['the product was technically fine and just needed a stronger marketing campaign.', 'iterative releases would have surfaced the user-need mismatch sooner and at lower cost.', 'long single-shot waterfall releases are still the most reliable way to ship software.', 'collecting user feedback this late is normal and was unlikely to change the outcome.'], a: 1, exp: 'Iterative releases shorten the loop between assumption and reality.' },
      ],
    },
    3: {
      introMd: `## Common Patterns In Program Design

| Pattern | Use case |
|---------|---------|
| **Sequential** | Steps run in order. |
| **Selection** | An IF chooses among paths. |
| **Iteration** | A loop repeats steps. |
| **Procedure** | Bundle reusable steps. |
| **Event-driven** | Code runs in response to a user action. |`,
      quiz1: [
        { q: 'A button-click handler that runs only when a user clicks is an example of ___', opts: ['sequential code that runs top-to-bottom on launch', 'event-driven code triggered by a user action', 'iterative code that loops a fixed number of times', 'recursive code that calls itself for each event'], a: 1, exp: 'Event-driven code responds to events.' },
        { q: 'Which pattern most directly reduces code duplication?', opts: ['Writing the same block of statements at each call site.', 'Defining a procedure once and calling it from many places.', 'Replacing functions with a long chain of IF statements.', 'Using hardcoded literal values inline at each call site.'], a: 1, exp: 'Procedures let you write logic once and reuse it.' },
      ],
      contentMd: `## Decomposition

Break a big problem into smaller subproblems. A quiz app might decompose into: **loadQuestions**, **showQuestion**, **gradeAnswer**, **showResults**. Each piece can be built and tested separately.

## Abstraction

Hide details behind a simple interface. Once **gradeAnswer(userAnswer, key)** works, callers don\'t need to know HOW.

| Layer | Hides… |
|-------|--------|
| Procedure | Implementation steps. |
| Library | Internal data structures. |
| OS | Hardware details. |
| Browser | Network and rendering details. |

## Event-Driven Programming

Modern UIs wait for events:

\u00A0\u00A0\u00A0\u00A0ON CLICK button1:
\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0DISPLAY("You clicked!")

The program responds to events instead of running top-to-bottom and exiting.`,
      inputs: {
        prompts: [
          'Breaking a big problem into smaller subproblems is called _______.',
          'Hiding implementation details behind a simple interface is called _______.',
          'Code that runs in response to user actions like clicks is called _______-driven.',
        ],
        answers: ['decomposition', 'abstraction', 'event'],
        hints: ['Divide the problem.', 'Hide complexity.', 'Triggered, not sequenced.'],
        explanation: 'Decomposition splits problems; abstraction hides details; event-driven code responds to triggers.',
      },
      dropdowns: {
        items: [
          { label: 'A procedure that turns a list of strings into a comma-separated string is most useful as ___', options: ['a reusable abstraction called from many places', 'a one-line script never reused', 'malware', 'a hardware driver'] },
          { label: 'Pseudocode like ON CLICK followed by a block is ___', options: ['event-driven', 'recursive', 'sequential-only', 'binary'] },
          { label: 'Decomposition primarily makes a program easier to ___', options: ['understand, test, and maintain', 'compress', 'encrypt', 'route'] },
        ],
        correct: ['a reusable abstraction called from many places', 'event-driven', 'understand, test, and maintain'],
        hints: ['Bundling logic for reuse.', 'Triggered by an event.', 'Cognitive load drops.'],
        explanation: 'Reusable procedures = abstraction. ON CLICK = event-driven. Decomposition aids comprehension.',
      },
      strategyMd: `## AP Exam Strategy: Design Patterns

- "Reduce duplication" → procedures.
- "Run when user does X" → event-driven.
- "Make this easier to test in isolation" → decompose into procedures.
- "Hide complexity from the caller" → abstraction.`,
      applied: [
        { q: 'A program has the same 8-line block of code copied in 5 places. What is the best refactor?', opts: ['Add a comment above each copy explaining what the block does.', 'Extract the block into a procedure called from each location.', 'Reformat the 5 copies onto single lines to make them shorter.', 'Delete 4 of the copies and let the remaining one run 5 times.'], a: 1, exp: 'Extracting into a procedure removes duplication.' },
        { q: 'You\'re building a drawing app. Which pattern best fits responding to mouse drags?', opts: ['One sequential script that runs top-to-bottom and then exits.', 'Event-driven handlers for mousedown, mousemove, and mouseup events.', 'A single while-true loop that polls the mouse on every iteration.', 'A recursive function that calls itself for every pixel of movement.'], a: 1, exp: 'UI interactions are naturally modeled as event handlers.' },
      ],
    },
    4: {
      introMd: `## How Creative Development Connects Across CSP

| Connection | Why |
|-----------|-----|
| Development ↔ Algorithms | Programs implement algorithms. |
| Development ↔ Data | Programs operate on data. |
| Development ↔ Internet | Many programs are networked apps. |
| Development ↔ Impact | Programs affect users — design choices have consequences. |`,
      quiz1: [
        { q: 'A development team realizes their algorithm is too slow for the dataset size. The most appropriate response is ___', opts: ['ship the slow version since the algorithm is technically correct.', 'investigate a more efficient algorithm or restructure the data behind it.', 'switch to a different operating system to gain implicit speedups.', 'rewrite the same algorithm in a faster language without changing it.'], a: 1, exp: 'Algorithm + data structure choices are core development decisions.' },
        { q: 'When a developer chooses what data to collect, this decision ___', opts: ['affects only storage costs and has no real impact on users.', 'has direct privacy implications that must be considered carefully.', 'is a purely technical decision unrelated to ethical questions.', 'is fully dictated by what the database happens to support.'], a: 1, exp: 'Data collection is also a privacy decision.' },
      ],
      contentMd: `## Programs Are Built On Algorithms And Data

Every program embodies algorithm + data choices. Choosing well saves rework.

| Choice | Question |
|--------|----------|
| Data structure | Will I append, search, sort, or update most? |
| Algorithm | Is the input small or huge? |
| Storage | Memory only? Disk? Cloud? |
| Network | Online-only? Offline-capable? Real-time? |

## Errors And Debugging

| Error | Example | Detection |
|-------|---------|-----------|
| **Syntax** | Missing parenthesis. | At parse / compile time. |
| **Runtime** | Divide by zero. | At execution. |
| **Logic** | Returns wrong answer. | Only via testing. |
| **Overflow** | Number too large for storage. | Sometimes silent. |

Logic errors are most insidious — the program runs but produces wrong output.`,
      inputs: {
        prompts: [
          'A program crash from dividing by zero is a _______ error.',
          'A program that runs but produces the wrong answer has a _______ error.',
          'Catching errors before users do requires _______.',
        ],
        answers: ['runtime', 'logic', 'testing'],
        hints: ['Caught at execution.', 'Bad answer, no crash.', 'Run with sample inputs.'],
        explanation: 'Runtime = caught when running. Logic = wrong output. Testing surfaces them.',
      },
      dropdowns: {
        items: [
          { label: 'A logic error is best detected by ___', options: ['running tests with known correct outputs', 'reading the code aloud', 'changing the file extension', 'compressing the file'] },
          { label: 'A syntax error is caught ___', options: ['at parse / compile time, before the program runs', 'only after release', 'never', 'only by users'] },
          { label: 'A program\'s data-collection choice is ___', options: ['both a technical and a privacy/ethics decision', 'purely technical', 'purely legal', 'irrelevant'] },
        ],
        correct: ['running tests with known correct outputs', 'at parse / compile time, before the program runs', 'both a technical and a privacy/ethics decision'],
        hints: ['Compare actual to expected.', 'Compiler/parser flags.', 'Privacy is design.'],
        explanation: 'Logic errors need test cases. Syntax errors caught early. Data collection is technical AND ethical.',
      },
      strategyMd: `## AP Exam Strategy: Cross-Topic Development

- "Wrong answer, no crash" = logic error → fix via testing.
- "Crash" = runtime error → check inputs, add validation.
- "Won\'t even run" = syntax error.
- Development decisions have technical AND user impact.`,
      applied: [
        { q: 'A function returns the average of a list. It returns the right value for non-empty lists but throws an error for empty lists. The most direct fix is ___', opts: ['ignore the bug since real users rarely send an empty list.', 'add a check for empty input that returns 0 or signals an error explicitly.', 'remove every call site of the function and inline the math at each one.', 'switch the implementation to a different language and recompile.'], a: 1, exp: 'Boundary input handling.' },
        { q: 'A team logs every keystroke users type "for analytics". The CSP-aligned concern is ___', opts: ['logging is purely a performance issue and not a privacy issue.', 'capturing every keystroke includes passwords and private content — a privacy and security risk.', 'as long as the logs stay on the company\'s own servers there is no real risk.', 'analytics keystroke logs are protected by HTTPS and so cannot be misused.'], a: 1, exp: 'Over-collection is a privacy and security risk.' },
      ],
    },
    5: {
      introMd: `## How Development Practices Have Evolved

| Era | Dominant practice |
|-----|------------------|
| 1970s | Waterfall: design, build, ship. |
| 1990s | Object-oriented + early agile. |
| 2000s | Agile / Scrum: short iterations, frequent releases. |
| 2010s | Continuous integration / continuous deployment (CI/CD). |
| 2020s | AI-assisted coding; LLM prototyping. |`,
      quiz1: [
        { q: 'CI/CD primarily aims to ___', opts: ['archive old commits so the repository stays small.', 'integrate code changes frequently and deploy them quickly with automated tests.', 'eliminate the need for human developers on the team.', 'compress source files in the repository to save disk space.'], a: 1, exp: 'CI/CD shortens the loop from change to production with automation.' },
        { q: 'AI coding assistants change the developer\'s role mostly by ___', opts: ['automating typing and boilerplate while shifting human attention to design and review.', 'writing perfect bug-free code automatically.', 'eliminating the need for testing.', 'replacing all developers next year.'], a: 0, exp: 'AI accelerates routine tasks; humans still design, judge, and review.' },
      ],
      contentMd: `## Modern Tooling

| Tool | Job |
|------|-----|
| **Version control** (Git) | Track changes; collaborate. |
| **CI / CD** | Auto-test and auto-deploy. |
| **Issue tracker** | Coordinate work and bugs. |
| **Code review** | Inspect each other\'s work. |
| **AI assistants** | Suggest code, explain code, draft tests. |

## Generative AI Cautions

- AI-generated code may be subtly wrong.
- Pasting proprietary code into public AI tools may leak it.
- Generated code may resemble licensed training data.
- Skill atrophy if used as a crutch instead of a tutor.`,
      inputs: {
        prompts: [
          'A short development cycle of plan-build-test-review-release is called a _______.',
          'A practice of automatically running tests on every code change is part of CI / _______ delivery / deployment.',
          'A tool that tracks every change and supports many contributors is called _______ control.',
        ],
        answers: ['sprint', 'continuous', 'version'],
        hints: ['Agile term.', 'CI / CD.', 'Git is one.'],
        explanation: 'Sprints are agile units. CI/CD = continuous. Git = version control.',
      },
      dropdowns: {
        items: [
          { label: 'AI-generated code should be ___ before being trusted', options: ['reviewed and tested', 'pushed directly to production', 'deleted', 'ignored'] },
          { label: 'A pull request enables ___', options: ['code review by other team members before changes are merged', 'pulling files off a server', 'instant deployment', 'compression'] },
          { label: 'CI / CD\'s main benefit is ___', options: ['rapid, low-risk deployment of small changes', 'eliminating the need for testing', 'reducing the developer headcount', 'larger releases'] },
        ],
        correct: ['reviewed and tested', 'code review by other team members before changes are merged', 'rapid, low-risk deployment of small changes'],
        hints: ['Trust but verify.', 'Code review is the point.', 'Small + frequent = lower risk.'],
        explanation: 'AI output needs review. PRs enable review. CI/CD trades big releases for small frequent ones.',
      },
      strategyMd: `## AP Exam Strategy: Modern Development

- "Frequent small releases with automated tests" = CI/CD.
- "Track every change, multiple contributors" = version control.
- AI assistants: helpful but require review and care about privacy/licensing.
- Agile = short iterative cycles, not "no planning".`,
      applied: [
        { q: 'A 100-developer team needs to coordinate changes to one codebase without overwriting each other\'s work. The most appropriate tool category is ___', opts: ['emailing patched files around as attachments after each edit.', 'a version-control system (e.g., Git) with branches, merges, and pull requests.', 'a shared network drive where everyone edits the same files in place.', 'a spreadsheet that tracks who is allowed to touch each file today.'], a: 1, exp: 'Git enables parallel work with explicit merge points.' },
        { q: 'A developer pastes the company\'s internal authentication code into a public AI assistant for help. The most relevant CSP concern is ___', opts: ['the AI tool may rewrite the code in a less efficient style.', 'proprietary or sensitive code may be retained or exposed by the third-party service.', 'the AI tool may flag the code as unreadable and refuse to respond.', 'public AI tools always strip code formatting before processing it.'], a: 1, exp: 'Pasting sensitive code into public AI tools risks confidentiality breaches.' },
      ],
    },
    6: {
      introMd: `## Creative Development Workshop

Apply dev-process vocabulary to AP-style scenarios.`,
      quiz1: [
        { q: 'After two weeks of coding, a team realizes their understanding of the user\'s problem was wrong. What should they do?', opts: ['Ship the current code anyway and let users adapt to it.', 'Re-investigate the problem with users, then redesign or refactor.', 'Continue building the original plan since the team has already started.', 'Replace the whole project with a different but vaguely similar one.'], a: 1, exp: 'Iterative dev welcomes returning to investigate.' },
        { q: 'A program with a missing semicolon ___', opts: ['runs but consistently produces a slightly wrong result.', 'fails to parse or compile — a syntax error caught before runtime.', 'crashes intermittently depending on the input it receives.', 'runs faster because the parser has fewer characters to process.'], a: 1, exp: 'Syntax errors are caught at parse time.' },
      ],
      contentMd: `## Worked Scenario: Bug Triage

1. **Reproduce** consistently.
2. **Isolate** the cause.
3. **Write a failing test**.
4. **Fix** the code.
5. **Re-run tests**.
6. **Document** the change.

This pattern (reproduce → isolate → test → fix → verify → document) applies to almost every defect.

## Worked Scenario: Feature Decomposition

"Share a study set with a friend" decomposes into:

- **generate a shareable link**.
- **resolve a token** back to the set.
- **share button + dialog**.
- **permission check** (viewer vs co-editor).

Each piece can be built and tested independently.`,
      inputs: {
        prompts: [
          'The first step in fixing a bug is to _______ it (consistently make it happen).',
          'After fixing a bug, you should re-run the _______ to ensure no regression.',
          'Splitting "share a study set" into smaller functions is _______.',
        ],
        answers: ['reproduce', 'tests', 'decomposition'],
        hints: ['Make it happen reliably.', 'Automated checks.', 'Divide-and-conquer.'],
        explanation: 'Reproduce, then isolate. Tests catch regressions. Decomposition splits big features.',
      },
      dropdowns: {
        items: [
          { label: 'A test that fails because of the bug, then passes after the fix, is called a ___', options: ['regression test', 'syntax test', 'compression test', 'speed test'] },
          { label: 'When estimating iteration length, the trade-off is between feedback frequency and ___', options: ['ceremony / overhead', 'file size', 'compression ratio', 'TCP throughput'] },
          { label: 'Documenting the fix in a commit message benefits ___', options: ['anyone debugging similar issues in the future', 'only the original author', 'only the customer', 'only the compiler'] },
        ],
        correct: ['regression test', 'ceremony / overhead', 'anyone debugging similar issues in the future'],
        hints: ['Prevents recurrence.', 'Cycle cost.', 'Future debuggers.'],
        explanation: 'Regression tests guard against recurrence. Iteration length balances feedback vs overhead. Commit messages aid debuggers.',
      },
      strategyMd: `## AP Exam Strategy: Workshop Style

- "What should the team do next?" answers usually involve **investigate, test, refine, document** — never "ship blindly" or "quit".
- "Decompose this feature" → list 3-5 named procedures.
- "How can we tell if our fix worked?" → automated tests + reproduce the original case.`,
      applied: [
        { q: 'A team plans a single 6-month "big bang" release with no intermediate testing. The most CSP-aligned critique is ___', opts: ['a six-month release window is too short to fit useful work.', 'long cycles with no intermediate feedback hide problems until they are expensive to fix.', 'the team just needs to write more in-line code comments to stay on track.', 'big single-shot releases are the safest way to ship complex software.'], a: 1, exp: 'Long feedback loops hide problems.' },
        { q: 'A function consistently fails on input value 0 only. The next best step is ___', opts: ['ignore the failing case since users rarely pass exactly 0.', 'add a focused test for 0 and adjacent edge cases like -1 and 1, then fix the function.', 'rewrite the entire program in a different language to bypass the bug.', 'wrap every call to the function in a try/except that silently swallows errors.'], a: 1, exp: 'Pin the failure with a test, then fix.' },
      ],
    },
    7: {
      introMd: `## AP Exam Recap — Creative Development

Final review of dev-process vocabulary.`,
      quiz1: [
        { q: 'AP CSP frames the development process as ___', opts: ['linear and one-shot.', 'iterative — investigate, design, prototype, test, refine, repeat.', 'random.', 'optional.'], a: 1, exp: 'The exam emphasizes iterative dev.' },
        { q: 'A logic error means the program ___', opts: ['fails to parse.', 'crashes immediately.', 'runs but produces an incorrect result.', 'is encrypted.'], a: 2, exp: 'Logic errors run but give wrong output.' },
      ],
      contentMd: `## Final Vocab

| Term | Definition |
|------|-----------|
| Iterative development | Build-test-refine cycles. |
| Prototype | Small testable slice. |
| Decomposition | Splitting a problem. |
| Abstraction | Hiding details behind an interface. |
| Procedure | Reusable, named block of code. |
| Event-driven | Code runs in response to events. |
| Syntax error | Caught at parse time. |
| Runtime error | Caught while running. |
| Logic error | Wrong output, no crash. |
| Version control | Tracks every change. |
| CI / CD | Automatic integration / deployment. |
| Code review | Other devs inspect changes. |

## Common Pitfalls

- Treating dev as one-shot rather than iterative.
- Skipping testing after manual checks.
- Over-collecting user data without thinking about privacy.
- Trusting AI-generated code without review.
- Ignoring user feedback because "the code is fine".`,
      inputs: {
        prompts: [
          'The development cycle the AP exam emphasizes is _______.',
          'A program that produces the wrong output without crashing has a _______ error.',
          'A process where teammates inspect proposed changes before merging is called code _______.',
        ],
        answers: ['iterative', 'logic', 'review'],
        hints: ['Repeated cycles.', 'Wrong answer, no crash.', 'Sanity check.'],
        explanation: 'Iterative dev, logic errors, and code review are core CSP concepts.',
      },
      dropdowns: {
        items: [
          { label: 'A team that releases small changes daily with automated tests is using ___', options: ['CI / CD', 'waterfall', 'no version control', 'manual deployment only'] },
          { label: 'A feature documented for users in a "how to" guide is part of ___', options: ['user-facing documentation', 'malware', 'compression', 'encryption'] },
          { label: 'When designing for a target audience, the best validation is ___', options: ['testing with real users from that audience', 'testing only with developers', 'reading the spec aloud', 'checking the file size'] },
        ],
        correct: ['CI / CD', 'user-facing documentation', 'testing with real users from that audience'],
        hints: ['Continuous integration / deployment.', 'Help users.', 'Real users surface real issues.'],
        explanation: 'Daily releases + tests = CI/CD. User guides = documentation. Real users validate design.',
      },
      strategyMd: `## Final Exam Tips

- The AP exam loves "what would the team do NEXT?" — answer with iterate, test, gather feedback, document.
- Distinguish syntax / runtime / logic errors with a one-sentence example each.
- Code review and version control are foundational.
- Frame development decisions as having technical AND user/ethical impact.`,
      applied: [
        { q: 'A startup releases an MVP, gets feedback, and rebuilds key features based on user behavior. Which model best describes this?', opts: ['Iterative / agile development.', 'Pure waterfall.', 'No development model at all.', 'Encrypted development.'], a: 0, exp: 'Releasing, gathering feedback, rebuilding = iterative.' },
        { q: 'You inherit code with no comments, no tests, no commit history. The most appropriate FIRST step is ___', opts: ['rewrite the entire codebase from scratch in a modern style.', 'add tests around current behavior and identify the most critical functions before changing anything.', 'start refactoring immediately so the code matches your preferred style.', 'delete any code whose purpose you cannot quickly understand at a glance.'], a: 1, exp: 'Stabilize understanding before changing — characterize current behavior with tests first.' },
      ],
    },
  },
};

const cspCollaborationDevelopment: Topic = {
  slug: 'csp-collaboration-development',
  display: 'Collaboration in Development',
  emoji: '🤝',
  exportPrefix: 'cspCollaborationDevelopment',
  idPrefix: 'cspcoll',
  parts: {
    2: {
      introMd: `## Why Collaboration?

Software is built by **teams**. AP CSP recognizes collaboration as a core practice with specific benefits.

| Benefit | Why |
|---------|-----|
| **Diverse perspectives** | Different backgrounds catch different blind spots. |
| **Faster development** | Parallel work on independent pieces. |
| **Better quality** | More eyes on each change → fewer bugs. |
| **Knowledge sharing** | Team members learn from each other. |
| **Resilience** | No single point of failure (bus factor). |`,
      quiz1: [
        { q: 'A solo developer with no reviewers has a "bus factor" of 1. The biggest practical risk is ___', opts: ['the developer will be slowed down by waiting on code reviews.', 'if that one person leaves, no one else understands the code.', 'the project will accumulate too much documentation over time.', 'the developer will be forced to write too many automated tests.'], a: 1, exp: 'Bus factor 1 = single point of failure for knowledge.' },
        { q: 'A team includes members from different cultural backgrounds. From a development standpoint this most often ___', opts: ['slows the project down without producing any product benefit.', 'helps the team anticipate user needs they wouldn\'t have noticed alone.', 'forces the team to translate variable names into multiple languages.', 'has no measurable effect on the quality or reach of the product.'], a: 1, exp: 'Diverse teams catch blind spots.' },
      ],
      contentMd: `## Inclusive Collaboration

Effective collaboration requires:

- **Active listening**: people feel heard.
- **Equal participation**: all voices contribute.
- **Constructive feedback**: critique ideas, not people.
- **Documentation**: knowledge isn\'t locked in one head.
- **Shared norms**: agreed-on tools, code style, channels.

## Roles On A Team

| Role | Job |
|------|-----|
| **Developer** | Writes and reviews code. |
| **Designer** | UI / UX, mockups, user research. |
| **Tester / QA** | Designs and runs tests. |
| **Project manager** | Tracks progress. |
| **Stakeholder** | Represents users / business. |

## Communication Channels

| Channel | Best for |
|---------|----------|
| Sync (calls, in-person) | Brainstorming, conflict resolution. |
| Async written | Status, design discussions, decisions of record. |
| Code review | Specific feedback on code. |
| Documentation | Long-lived knowledge. |`,
      inputs: {
        prompts: [
          'The risk of losing critical knowledge if one team member leaves is captured by the term _______ factor.',
          'Including team members from different backgrounds tends to surface user needs the team would otherwise _______.',
          'A practice where teammates inspect proposed code changes is called code _______.',
        ],
        answers: ['bus', 'miss', 'review'],
        hints: ['"Hit by a ___" risk.', 'Blind spots.', 'Sanity-check practice.'],
        explanation: 'Bus factor = knowledge concentration risk. Diverse teams catch blind spots. Code review = inspection.',
      },
      dropdowns: {
        items: [
          { label: 'A team where one person makes all decisions and others stay silent is ___', options: ['not collaborating effectively', 'collaborating perfectly', 'using version control', 'using CI / CD'] },
          { label: 'Constructive feedback should focus on ___', options: ['the work itself, not the person', 'the person, not the work', 'unrelated topics', 'private matters'] },
          { label: 'Async written communication (issue tracker, chat) is best for ___', options: ['decisions of record and status updates', 'brainstorming with energy and back-and-forth', 'spontaneous laughter', 'silent meditation'] },
        ],
        correct: ['not collaborating effectively', 'the work itself, not the person', 'decisions of record and status updates'],
        hints: ['One-sided ≠ collaboration.', 'Critique ideas.', 'Written = persistent.'],
        explanation: 'Healthy collaboration distributes voice. Feedback is about the work. Async = decisions of record.',
      },
      strategyMd: `## AP Exam Strategy: Collaboration Questions

- "Diverse perspectives" + "anticipate user needs" is a stock AP-rubric pairing.
- "Bus factor" / "single point of failure" is solved by documentation + code review + cross-training.
- Effective collaboration = inclusive, not just "many people in a room".`,
      applied: [
        { q: 'A class project group has one student writing all the code at the last minute. What\'s the most CSP-aligned critique?', opts: ['This is an efficient division of labor — playing to the strongest student.', 'No real collaboration is happening; the code lacks review and shared understanding.', 'Splitting the project into more separate files would have solved the problem.', 'The other students should each write the same code so they all learn it.'], a: 1, exp: 'Solo work doesn\'t exercise AP-targeted collaboration practices.' },
        { q: 'A diverse team designing a fitness app considers users with disabilities, different body types, and different cultures. The most direct outcome is ___', opts: ['a more inclusive product that reaches more users without expensive retrofits later.', 'a slower product, since accessibility features always reduce app performance.', 'no measurable change, since fitness needs are essentially the same for everyone.', 'a riskier product, since accommodating more users introduces more bugs.'], a: 0, exp: 'Inclusive design from the start avoids costly retrofitting.' },
      ],
    },
    3: {
      introMd: `## Common Collaboration Patterns

| Pattern | Description |
|---------|-------------|
| **Pair programming** | Two devs at one keyboard. |
| **Code review** | Async review before merge. |
| **Mob / ensemble** | Whole team works on one problem. |
| **Open source** | Public project; anyone can contribute. |
| **Crowdsourcing** | Many small contributors → big shared output. |`,
      quiz1: [
        { q: 'In pair programming, the "navigator" usually ___', opts: ['types code in a second editor at the same time as the driver.', 'thinks about higher-level design and reviews while the driver types.', 'works on a separate unrelated program to maximize parallelism.', 'monitors network traffic to make sure the driver stays online.'], a: 1, exp: 'Driver types tactical code; navigator thinks strategically.' },
        { q: 'Wikipedia is most accurately described as ___', opts: ['a centralized corporate product written by a small editorial staff.', 'a crowdsourced encyclopedia built by millions of volunteer contributors.', 'a peer-to-peer file-sharing system for distributing reference works.', 'a closed-source proprietary program licensed to participating schools.'], a: 1, exp: 'Wikipedia is the canonical crowdsourcing example.' },
      ],
      contentMd: `## Pair Programming

Two developers, one workstation: **driver** writes, **navigator** reviews live, they swap roles regularly. Catches errors instantly, transfers skills, decisions get challenged in real time.

## Code Review

The dominant collaboration pattern in modern teams. A developer opens a **pull request**; teammates review the diff, leave inline comments, approve or request changes. Good review checks: correctness, tests, readability, edge cases, security/privacy.

## Open Source And Crowdsourcing

- **Open source**: source is public; anyone can fork and propose changes.
- **Crowdsourcing**: many people contribute small pieces (Wikipedia, OpenStreetMap).

Both rely on **clear contribution guidelines** and **maintainers** who curate quality.`,
      inputs: {
        prompts: [
          'In pair programming, the person typing is called the _______.',
          'A proposed change submitted for review is often packaged as a _______ request.',
          'A project whose source code is publicly readable is called _______ source.',
        ],
        answers: ['driver', 'pull', 'open'],
        hints: ['Tactical role.', 'Common Git term.', 'Public + readable.'],
        explanation: 'Driver/navigator pair pattern. Pull request opens review. Open source = public.',
      },
      dropdowns: {
        items: [
          { label: 'Code review is most useful for ___', options: ['catching issues early and sharing knowledge across the team', 'slowing the team down for no benefit', 'preventing all bugs forever', 'compressing files'] },
          { label: 'Crowdsourcing relies on ___', options: ['clear guidelines and maintainers to curate quality', 'no rules at all', 'a single contributor', 'closed-source software'] },
          { label: 'A pair programming pair should ___', options: ['swap driver / navigator roles regularly', 'never swap roles', 'work in different rooms', 'each write a separate program'] },
        ],
        correct: ['catching issues early and sharing knowledge across the team', 'clear guidelines and maintainers to curate quality', 'swap driver / navigator roles regularly'],
        hints: ['Two birds, one stone.', 'Open ≠ unmoderated.', 'Avoid one-sided fatigue.'],
        explanation: 'Code review = catch + learn. Crowdsourcing needs governance. Pair programming swaps roles.',
      },
      strategyMd: `## AP Exam Strategy: Collaboration Patterns

- Pair / mob = synchronous, intense, fast feedback.
- Code review = async, scalable, durable record.
- Open source = public participation; needs maintainers.
- Crowdsourcing = many small contributions; needs quality controls.`,
      applied: [
        { q: 'A team adds 5 new developers in one month. Knowledge transfer becomes painful. The most appropriate practice to add is ___', opts: ['silent solo work so each new developer learns by doing alone.', 'pair programming and code review so knowledge spreads as work happens.', 'longer one-shot onboarding lectures from senior staff at month\'s end.', 'larger less-frequent commits so reviewers see fewer separate changes.'], a: 1, exp: 'Pair programming and code review spread knowledge organically.' },
        { q: 'An open-source project receives a wave of low-quality PRs. The most CSP-aligned response is ___', opts: ['close the project to outside contributions and keep it strictly internal.', 'add clearer contribution guidelines, automated checks, and active maintainer review.', 'merge every incoming pull request to encourage broader community participation.', 'reject all pull requests for the next 90 days regardless of their quality.'], a: 1, exp: 'Crowdsourcing scales only with governance.' },
      ],
    },
    4: {
      introMd: `## Collaboration Connects Across The Course

| Cross-link | Why |
|-----------|-----|
| Collab ↔ Internet | Tools enable global teams. |
| Collab ↔ Algorithms | Diff / merge algorithms power version control. |
| Collab ↔ Security | Credential management and access control. |
| Collab ↔ Impact | Diverse teams build more inclusive products. |`,
      quiz1: [
        { q: 'Two developers in different countries co-edit the same file. The technology that prevents their changes from clobbering each other is ___', opts: ['faster local hardware so each save completes before the other starts.', 'a version-control system with merging (for example, Git).', 'a real-time chat app that notifies each developer when the file is touched.', 'a network protocol upgrade such as IPv6 that orders concurrent writes.'], a: 1, exp: 'Version control merges changes; without it concurrent edits would overwrite.' },
        { q: 'When new contributors join a project, the most efficient way for them to get up to speed is usually ___', opts: ['start coding immediately and figure things out by trial and error.', 'read documentation, study recent PRs, then make a small contribution under review.', 'rewrite the whole codebase in their own style to learn how it works.', 'avoid asking the rest of the team any questions during onboarding.'], a: 1, exp: 'Docs + PR history + small reviewed contribution.' },
      ],
      contentMd: `## Tools That Make Collaboration Possible

| Tool | Purpose |
|------|---------|
| Git / GitHub | Version control + PRs + issue tracking. |
| Chat (Slack, Discord) | Async + real-time team communication. |
| Video conferencing | Sync conversation, demos, pair programming. |
| Docs (wikis, Notion) | Long-lived shared knowledge. |
| Issue trackers | Plan and triage work. |

## Permissions And Access

Collaboration introduces access decisions:

- Who can read / write / merge / deploy / delete?

Principle: grant the **least privilege** needed. Review access regularly. Revoke when teammates leave.`,
      inputs: {
        prompts: [
          'A version-control system that powers most modern open-source collaboration is _______.',
          'The principle of granting only the access a teammate actually needs is called _______ privilege.',
          'A real-time document editor that merges concurrent edits enables _______ editing.',
        ],
        answers: ['Git', 'least', 'concurrent'],
        hints: ['Three letters.', 'Minimum access.', 'Many at once.'],
        explanation: 'Git = dominant VCS. Least privilege = security best practice. Concurrent editing supports many simultaneously.',
      },
      dropdowns: {
        items: [
          { label: 'When a teammate leaves the team, their access should be ___', options: ['revoked immediately', 'left in place forever', 'expanded', 'shared with strangers'] },
          { label: 'A version-control merge conflict happens when ___', options: ['two people edited the same lines in different ways', 'the network is down', 'a file was renamed', 'the program won\'t compile'] },
          { label: 'A team that loses internet access ___', options: ['can still work locally with Git, then sync later', 'cannot do any work at all', 'must use only encryption', 'must use only UDP'] },
        ],
        correct: ['revoked immediately', 'two people edited the same lines in different ways', 'can still work locally with Git, then sync later'],
        hints: ['Stale access = risk.', 'Same lines, different edits.', 'Git is distributed.'],
        explanation: 'Revoke departing teammates\' access. Conflicts = same lines edited. Git allows offline work.',
      },
      strategyMd: `## AP Exam Strategy: Collaboration Tools

- "Two people edit the same file" → version control with merging.
- "Teammate leaves" → revoke access, rotate credentials.
- "Distributed team" → async written communication + version control + occasional sync calls.`,
      applied: [
        { q: 'A team uses a shared admin account where everyone knows the password. The biggest CSP-aligned concerns are ___', opts: ['shared admin accounts are convenient and have no real downside.', 'no audit trail of who did what and revocation requires resetting the password for everyone.', 'the password is too long for everyone on the team to remember accurately.', 'shared accounts force the team to use slower transport-layer protocols.'], a: 1, exp: 'Shared accounts break least privilege and audit trails.' },
        { q: 'A junior developer makes their first PR with a small bug. A healthy team response is ___', opts: ['publicly call out the developer in chat so others avoid the same mistake.', 'leave constructive review comments, suggest a fix, and approve once corrected.', 'silently revert the commits without explaining what was wrong with them.', 'block the developer from submitting any further pull requests this quarter.'], a: 1, exp: 'Constructive code review centers the work.' },
      ],
    },
    5: {
      introMd: `## How Collaboration Has Evolved

| Era | Dominant collab pattern |
|-----|------------------------|
| 1970s | Co-located teams; manual change tracking. |
| 1990s | First distributed VCS (CVS, Subversion). |
| 2000s | Git, GitHub; rise of open source. |
| 2010s | Distributed teams; Slack-style chat. |
| 2020s | Remote-first; AI assistants; async-first culture. |`,
      quiz1: [
        { q: 'GitHub (and similar platforms) most fundamentally changed software collaboration by ___', opts: ['making the underlying compilers and runtimes significantly faster.', 'making it easy for strangers to collaborate on code with reviews and issue tracking.', 'eliminating common categories of programming bugs at the language level.', 'replacing the need for human developers with automated platform tooling.'], a: 1, exp: 'GitHub-style platforms standardized PR-based collaboration.' },
        { q: 'A "remote-first" team optimizes ___', opts: ['for in-office synchronous meetings during traditional business hours.', 'for async written communication so different time zones can contribute equally.', 'for never collaborating, since each engineer is supposed to work alone.', 'for short messaging URLs that fit easily on small mobile-phone screens.'], a: 1, exp: 'Remote-first means async-first written communication.' },
      ],
      contentMd: `## The Open-Source Revolution

Most modern software builds on open-source libraries. This means:

- Companies depend on volunteer maintainers.
- Bugs and security flaws ripple across the ecosystem.
- Contributions can shape software billions use.

## Remote / Distributed Teams

Practices that make this work:

- Documented decisions.
- Async-first communication.
- Overlap windows.
- Inclusive scheduling — no time zone always wins.

## AI Assistants As Collaborators

Treat AI output like a junior dev\'s — review before trusting. Don\'t paste sensitive code into public AI tools. AI doesn\'t understand long-term context the way a teammate does.`,
      inputs: {
        prompts: [
          'A team that prioritizes written communication so global teammates can contribute is _______-first.',
          'Modern software is built on top of many _______-source libraries.',
          'AI coding assistants should be treated like a _______ developer — useful but reviewed.',
        ],
        answers: ['remote', 'open', 'junior'],
        hints: ['Distributed by default.', 'Public source code.', 'Less experienced.'],
        explanation: 'Remote-first = async-default. Open-source libraries underpin most software. AI ≈ junior dev.',
      },
      dropdowns: {
        items: [
          { label: 'Documenting key decisions in writing helps remote teams by ___', options: ['making knowledge available across time zones', 'forcing everyone to be online at once', 'replacing video calls entirely', 'compressing files'] },
          { label: 'A bug in a popular open-source library may affect ___', options: ['millions of dependent applications worldwide', 'only that library\'s author', 'no one', 'only government apps'] },
          { label: 'AI-suggested code in a PR should be ___', options: ['reviewed by a human just like any other code', 'merged automatically without review', 'always rejected', 'encrypted before merging'] },
        ],
        correct: ['making knowledge available across time zones', 'millions of dependent applications worldwide', 'reviewed by a human just like any other code'],
        hints: ['Async > sync for global teams.', 'Dependency cascade.', 'AI = collaborator, not authority.'],
        explanation: 'Written decisions cross time zones. Open-source bugs cascade. AI output needs human review.',
      },
      strategyMd: `## AP Exam Strategy: Modern Collaboration

- Remote-first teams require async-first communication.
- Open-source dependencies mean shared risks AND shared maintenance burden.
- AI assistants accelerate routine work but require review.
- Tooling shapes team norms — choose tools deliberately.`,
      applied: [
        { q: 'A startup uses 200 open-source libraries. A critical bug is found in one of them. The most CSP-aligned response is ___', opts: ['ignore the bug since the library is maintained by someone else.', 'audit which apps depend on it, update to the patched version, and report upstream.', 'immediately rewrite the entire library in-house to avoid depending on it.', 'pin every dependency permanently and never accept any future updates.'], a: 1, exp: 'Dependency hygiene + responsible upstream contribution.' },
        { q: 'A globally distributed team is consistently leaving Asia-Pacific teammates out of decisions because all calls happen during US hours. The most CSP-aligned fix is ___', opts: ['ignore the issue and rely on the AP teammates to read meeting notes later.', 'shift to async-first written decisions and rotate sync meeting times across regions.', 'remove the AP teammates from decision-making projects to avoid the conflict.', 'require the AP teammates to permanently shift their working hours to US time.'], a: 1, exp: 'Async-first + rotating sync times = standard remote-team equity practice.' },
      ],
    },
    6: {
      introMd: `## Collaboration Workshop

Apply collaboration vocabulary to scenarios.`,
      quiz1: [
        { q: 'A team has weekly meetings where one person dominates. The most appropriate adjustment is ___', opts: ['cancel all team meetings and rely entirely on private messaging instead.', 'use facilitated turn-taking, written agendas, and silent brainstorming to elevate quieter voices.', 'remove the dominant person from the team to restore balance in discussions.', 'reduce meeting time so the dominant person has less opportunity to speak.'], a: 1, exp: 'Facilitation + async patterns elevate quieter voices.' },
        { q: 'A code review is taking 2 weeks because the PR is huge. The best fix is ___', opts: ['skip the review entirely so the team can move on to the next change.', 'split the PR into smaller focused changes that can each be reviewed quickly.', 'approve the PR with a quick "looks good" without reading the diff carefully.', 'rewrite the PR in a different programming language to make it shorter.'], a: 1, exp: 'Small PRs get fast, useful review.' },
      ],
      contentMd: `## Worked: Sizing A Pull Request

| PR size | Likely review experience |
|---------|-------------------------|
| < 50 lines | Reviewed in minutes. Specific feedback. |
| 200 lines | Manageable. Some context-loading. |
| 1000+ lines | "LGTM" with little real review. |
| 10,000 lines | Effectively unreviewable. |

## Worked: Onboarding A New Teammate

Day 1: setup environment, read README + contribution guide.
Week 1: shadow a teammate; review small PRs.
Week 2: pick a "first issue"; pair with mentor; submit a tiny PR.
Month 1: handle a small feature end-to-end with code review.`,
      inputs: {
        prompts: [
          'Sharing the agenda before a meeting helps people _______ in advance.',
          'A pull request with a small number of changed lines tends to receive _______ review feedback.',
          'A new teammate\'s first task should be _______ in scope, not a major feature.',
        ],
        answers: ['prepare', 'better', 'small'],
        hints: ['Reading time.', 'Quality of feedback.', 'Build confidence.'],
        explanation: 'Pre-shared agendas help preparation. Small PRs get better review. Small first tasks build confidence.',
      },
      dropdowns: {
        items: [
          { label: 'A "first issue" labeled in a project is for ___', options: ['new contributors to find an approachable starting task', 'closing the project', 'archiving old code', 'compressing data'] },
          { label: 'Silent brainstorming primarily helps ___', options: ['quieter teammates contribute on equal footing with louder ones', 'remove all discussion', 'accelerate typing speed', 'compress files'] },
          { label: 'A 5,000-line PR most likely gets ___', options: ['superficial review', 'rigorous line-by-line review', 'no review at all', 'rejected for size only'] },
        ],
        correct: ['new contributors to find an approachable starting task', 'quieter teammates contribute on equal footing with louder ones', 'superficial review'],
        hints: ['Onboarding-friendly.', 'Equalizes voices.', 'Too big = skim.'],
        explanation: '"First issue" = friendly starter. Silent brainstorm = inclusion. Huge PRs = surface-level review.',
      },
      strategyMd: `## AP Exam Strategy: Workshop Style

- "Inclusive collaboration" = facilitation + async records + small PRs + onboarding paths.
- "What should the team change?" → smaller PRs, written records, more inclusive meeting practices.`,
      applied: [
        { q: 'A team merges all changes directly to main with no review. They suffer frequent regressions. The single highest-leverage change is ___', opts: ['stop writing automated tests so the team can move faster overall.', 'require pull-request review on every change before it is merged to main.', 'remove the staging environment and ship directly to production every time.', 'merge changes only on Fridays so all regressions surface on the same day.'], a: 1, exp: 'Mandatory code review catches regressions.' },
        { q: 'A class project group has skills imbalances: one student knows the language, three are beginners. The most CSP-aligned approach is ___', opts: ['have the experienced student write all the code while the others observe.', 'use pair programming and code review so beginners learn while contributing real code.', 'restrict the beginners to writing only documentation and never any code.', 'have the beginners hand-copy code that the experienced student wrote first.'], a: 1, exp: 'Pair + review spreads skill while everyone contributes.' },
      ],
    },
    7: {
      introMd: `## AP Exam Recap — Collaboration in Development

The collaboration concepts the AP exam tests most.`,
      quiz1: [
        { q: 'AP CSP\'s definition of collaboration includes ___', opts: ['silent solo work where each person codes their own piece in isolation.', 'inclusive practices: many voices, shared knowledge, and constructive feedback.', 'always working in person, since face-to-face meetings are required for trust.', 'always working remotely, since in-person work is treated as a failure mode.'], a: 1, exp: 'Collaboration = inclusion + shared knowledge + constructive feedback.' },
        { q: 'A pull-request workflow primarily supports ___', opts: ['encrypting source code so only project maintainers can read it.', 'asynchronous code review by teammates before changes are merged.', 'compressing commit history so the repository takes less disk space.', 'generating random review comments to satisfy automated reviewers.'], a: 1, exp: 'PRs = mechanism for async code review.' },
      ],
      contentMd: `## Final Vocab

| Term | Definition |
|------|-----------|
| Collaboration | Multiple people working together with shared goals + practices. |
| Pair programming | Two devs at one keyboard. |
| Code review | Inspecting proposed changes before merge. |
| Pull request (PR) | A proposed change submitted for review. |
| Open source | Source code publicly available. |
| Crowdsourcing | Many small contributions to a shared output. |
| Bus factor | Number of teammates whose loss would block work. |
| Least privilege | Grant only the access actually needed. |
| Async-first | Default to written, time-zone-friendly communication. |

## Common Pitfalls

- Mistaking "many people in a room" for collaboration.
- Centralizing knowledge in one person (low bus factor).
- Skipping code review "because we trust each other".
- Ignoring quieter voices.
- Using a shared admin account.
- Pasting sensitive code into public AI tools.`,
      inputs: {
        prompts: [
          'A proposed change submitted for review is called a _______ request.',
          'The number of teammates whose loss would block the team is the _______ factor.',
          'Granting only the access actually needed is called _______ privilege.',
        ],
        answers: ['pull', 'bus', 'least'],
        hints: ['Git terminology.', '"Hit by a bus".', 'Minimum access.'],
        explanation: 'PR = pull request. Bus factor = knowledge concentration. Least privilege = minimal access.',
      },
      dropdowns: {
        items: [
          { label: 'A team\'s knowledge stays distributed when it ___', options: ['documents decisions and uses code review', 'centralizes everything in one person\'s head', 'uses no version control', 'avoids meetings entirely'] },
          { label: 'A PR description should answer ___', options: ['"what changed and why" so reviewers have context', 'just "fixed it"', 'private team gossip', 'compression ratios'] },
          { label: 'When AI suggests code, the team should ___', options: ['review it as carefully as any other change', 'merge it automatically', 'never use it', 'paste it into more AI tools'] },
        ],
        correct: ['documents decisions and uses code review', '"what changed and why" so reviewers have context', 'review it as carefully as any other change'],
        hints: ['Spread knowledge.', 'Context = better review.', 'Trust but verify.'],
        explanation: 'Docs + review distribute knowledge. Good PRs explain what + why. AI output gets human review.',
      },
      strategyMd: `## Final Exam Tips

- AP collaboration questions reward inclusivity, knowledge sharing, and feedback culture.
- Pair programming, code review, and version control are the three workhorses.
- Bus factor and least privilege are the two big risk-management ideas.
- Open source and crowdsourcing harness scale but require governance.`,
      applied: [
        { q: 'A school project team is told to "use collaboration tools". The most AP-aligned interpretation is ___', opts: ['email each member\'s changes around at the end of every working day.', 'use a version-controlled repo, review each other\'s changes, and split work into small reviewable pieces.', 'have one student do all the coding while the others handle non-technical tasks.', 'share a single account whose credentials are posted in the team chat channel.'], a: 1, exp: 'AP-style "collaboration tools" = VCS + code review + shared docs + small reviewable changes.' },
        { q: 'A team\'s only senior engineer takes vacation. Work stalls because no one else understands the deployment process. The CSP-aligned long-term fix is ___', opts: ['discourage vacations so the senior engineer is always available on demand.', 'document the deployment process and cross-train teammates to raise the bus factor.', 'replace the senior engineer with someone less central to the deployment process.', 'switch deployment platforms so the existing tribal knowledge no longer matters.'], a: 1, exp: 'Documentation + cross-training raises the bus factor.' },
      ],
    },
  },
};

export const bi1Topics: Topic[] = [cspCreativeDevelopment, cspCollaborationDevelopment];
