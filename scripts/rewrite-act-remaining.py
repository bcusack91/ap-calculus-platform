#!/usr/bin/env python3
"""
Generate high-quality ACT interactive lesson files for the remaining 5 topics.

Writes 35 files total (5 topics × 7 parts) to:
  src/data/interactive-lessons/
"""

from __future__ import annotations

import os
import textwrap
from dataclasses import dataclass
from typing import Any

ROOT_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT_DIR = os.path.join(ROOT_DIR, "src", "data", "interactive-lessons")


@dataclass(frozen=True)
class TopicConfig:
    slug: str
    export_prefix: str
    file_prefix: str
    outlines: list[str]


TOPICS: list[TopicConfig] = [
    TopicConfig(
        slug="act-reading-science-tips-act",
        export_prefix="actReadSciTips",
        file_prefix="act-act-reading-science-tips-act",
        outlines=[
            "Graph and table reading",
            "Experiments and setup logic",
            "Hypotheses and predictions",
            "Conflicting viewpoints",
            "Timing strategy for science passages",
            "Common traps and answer elimination",
            "Mixed review and score-building plan",
        ],
    ),
    TopicConfig(
        slug="act-reading-strategy-act",
        export_prefix="actReadingStrat",
        file_prefix="act-act-reading-strategy-act",
        outlines=[
            "Passage mapping",
            "Main idea and structure",
            "Line reference evidence",
            "Author tone and purpose",
            "Inference without overreaching",
            "Timing and pacing",
            "Mixed review and section strategy",
        ],
    ),
    TopicConfig(
        slug="act-science-data-act",
        export_prefix="actScienceData",
        file_prefix="act-act-science-data-act",
        outlines=[
            "Trends in tables and graphs",
            "Interpolation and extrapolation",
            "Rates and slopes",
            "Controls and variables",
            "Uncertainty and error bars",
            "Data synthesis across figures",
            "Mixed review with timed sets",
        ],
    ),
    TopicConfig(
        slug="act-statistics-probability-act",
        export_prefix="actStatProb",
        file_prefix="act-act-statistics-probability-act",
        outlines=[
            "Mean, median, and weighted averages",
            "Spread: range and IQR",
            "Probability rules and complements",
            "Conditional probability tables",
            "Combinatorics basics",
            "ACT statistics traps",
            "Mixed review and test execution",
        ],
    ),
    TopicConfig(
        slug="act-test-day-strategy-act",
        export_prefix="actTestDay",
        file_prefix="act-act-test-day-strategy-act",
        outlines=[
            "Pacing by section",
            "Guessing strategy and expected value",
            "Bubbling and time checkpoints",
            "Passage order strategy",
            "Stress and energy management",
            "Final-week plan",
            "Exam-day checklist and recovery plan",
        ],
    ),
]


def ts_quote(value: str) -> str:
    escaped = value.replace("\\", "\\\\").replace("\"", "\\\"")
    escaped = escaped.replace("\n", "\\n")
    return f'"{escaped}"'


def section_text(section_id: str, content: str) -> dict[str, Any]:
    return {
        "id": section_id,
        "type": "text",
        "content": textwrap.dedent(content).strip(),
    }


def section_mcq(section_id: str, content: str, questions: list[dict[str, Any]]) -> dict[str, Any]:
    return {
        "id": section_id,
        "type": "multiple-choice",
        "content": textwrap.dedent(content).strip(),
        "exercise": {"questions": questions},
    }


def section_input(
    section_id: str,
    content: str,
    correct_answers: list[str],
    hint1: str,
    hint2: str,
    hint3: str,
    explanation: str,
) -> dict[str, Any]:
    return {
        "id": section_id,
        "type": "input-boxes",
        "content": textwrap.dedent(content).strip(),
        "exercise": {
            "boxes": 3,
            "correctAnswers": correct_answers,
            "hint1": hint1,
            "hint2": hint2,
            "hint3": hint3,
            "explanation": explanation,
        },
    }


def section_dropdown(
    section_id: str,
    content: str,
    dropdowns: list[dict[str, Any]],
    correct_answers: list[str],
    hint1: str,
    hint2: str,
    hint3: str,
    explanation: str,
) -> dict[str, Any]:
    return {
        "id": section_id,
        "type": "dropdown-select",
        "content": textwrap.dedent(content).strip(),
        "exercise": {
            "dropdowns": dropdowns,
            "correctAnswers": correct_answers,
            "hint1": hint1,
            "hint2": hint2,
            "hint3": hint3,
            "explanation": explanation,
        },
    }


def format_value(value: Any, indent: int = 0) -> str:
    space = " " * indent
    if isinstance(value, dict):
        items: list[str] = []
        for key, child in value.items():
            if key == "type" and isinstance(child, str):
                items.append(f"{space}  {key}: '{child}' as const")
            elif key == "content" and isinstance(child, str):
                escaped = child.replace("`", "\\`")
                items.append(f"{space}  {key}: `\\n{escaped}\\n{space}  `")
            else:
                items.append(f"{space}  {key}: {format_value(child, indent + 2)}")
        return "{\n" + ",\n".join(items) + f"\n{space}}}"
    if isinstance(value, list):
        if not value:
            return "[]"
        rendered = ",\n".join(f"{space}  {format_value(item, indent + 2)}" for item in value)
        return "[\n" + rendered + f"\n{space}]"
    if isinstance(value, str):
        return ts_quote(value)
    if isinstance(value, bool):
        return "true" if value else "false"
    return str(value)


def make_ids(topic_key: str, part: int) -> dict[str, str]:
    base = f"act-{topic_key}-p{part}"
    return {
        "intro": f"{base}-intro",
        "mcq1": f"{base}-mcq1",
        "worked": f"{base}-worked",
        "input": f"{base}-input",
        "strategy": f"{base}-strategy",
        "dropdown": f"{base}-dropdown",
        "mcq2": f"{base}-mcq2",
    }


def make_read_sci_sections(topic: TopicConfig, part: int, focus: str) -> list[dict[str, Any]]:
    ids = make_ids("rsci", part)
    table_a = 40 + 5 * part
    table_b = 60 + 4 * part
    table_c = 80 + 3 * part
    t1 = 20 + part
    t2 = t1 + 10

    return [
        section_text(
            ids["intro"],
            f"""
            # ACT Reading + Science Tips
            **Part {part} of 7 — {focus}**

            ACT Science rewards fast pattern recognition, not outside science knowledge.
            In this part, you practice a repeatable method:

            1. Read title, axes, and units before touching answer choices.
            2. Predict trend direction in 3–5 seconds.
            3. Match evidence directly to one row, column, or sentence.

            Keep your process measurable: spend about 15–20 seconds scanning a figure and save full reading for questions that require detail.
            """,
        ),
        section_mcq(
            ids["mcq1"],
            """
            **Fast Data Decisions**
            """,
            [
                {
                    "question": f"A table shows reaction yield rising from {table_a}% at trial 1 to {table_b}% at trial 2 and {table_c}% at trial 3. Which statement is best supported?",
                    "options": [
                        "Yield decreases as trials continue",
                        "Yield increases each trial",
                        "Yield stays constant",
                        "No conclusion can be made from these values",
                    ],
                    "correctAnswer": 1,
                    "explanation": f"The values {table_a}%, {table_b}%, and {table_c}% increase each trial, so the supported claim is a rising trend.",
                },
                {
                    "question": f"A graph shows temperature at {t1}°C and {t2}°C with all other conditions fixed. If output is higher at {t2}°C, what is the safest inference?",
                    "options": [
                        "Temperature likely influences output",
                        "Output will always double when temperature rises",
                        "The experiment proves temperature is the only factor",
                        "The data are invalid without a control group description",
                    ],
                    "correctAnswer": 0,
                    "explanation": "One controlled comparison supports influence, not an absolute claim. ACT rewards cautious, evidence-based wording.",
                },
            ],
        ),
        section_text(
            ids["worked"],
            f"""
            ## Worked ACT Example
            A passage includes a figure where dissolved oxygen (mg/L) is measured at three depths:
            - 1 m: {table_c / 10:.1f}
            - 5 m: {table_b / 10:.1f}
            - 10 m: {table_a / 10:.1f}

            A question asks which depth has the highest oxygen concentration.
            **Efficient method:**
            - Ignore narrative text first.
            - Read the y-values directly.
            - Choose the maximum value, not the steepest visual slope.

            Correct conclusion: 1 m is highest. This avoids a common ACT trap where students pick a visually dramatic segment instead of the actual largest value.
            """,
        ),
        section_input(
            ids["input"],
            """
            **Timed Accuracy Drill**
            1) You budget 35 minutes for 40 questions. What is the average seconds per question (rounded to nearest whole number)?
            2) A chart value moves from 24 to 30. Enter the increase.
            3) You spend 2 minutes 20 seconds on a hard item but target 50 seconds. Enter how many extra seconds you used.
            """,
            ["53", "6", "90"],
            "35 minutes is 2,100 seconds. Divide by 40.",
            "Increase is final minus initial.",
            "2:20 is 140 seconds, then subtract 50.",
            "ACT pacing is numerical. 2,100/40 ≈ 52.5 so 53 seconds per question. The data increase is 6. Extra time used is 90 seconds.",
        ),
        section_text(
            ids["strategy"],
            f"""
            ## Trap Avoidance for {focus}
            - Prefer exact evidence over broad paraphrases.
            - Eliminate choices containing extreme language like *always* or *never* unless the data prove it.
            - If two answers seem close, pick the one tied to a specific figure value or line reference.
            - On conflicting viewpoints, identify one sentence that separates Scientist 1 from Scientist 2 before checking options.
            """,
        ),
        section_dropdown(
            ids["dropdown"],
            """
            **Method Check**
            """,
            [
                {
                    "label": "When a question asks for a trend, your first move should be:",
                    "options": [
                        "Read every paragraph in full",
                        "Inspect axes/units and compare values",
                        "Pick the longest answer",
                        "Use outside science facts",
                    ],
                },
                {
                    "label": "For conflicting viewpoints passages, strongest evidence usually comes from:",
                    "options": [
                        "A remembered classroom rule",
                        "A direct quote or paraphrase from each viewpoint",
                        "The most technical vocabulary",
                        "The answer with the broadest claim",
                    ],
                },
                {
                    "label": "If one question consumes too much time, the best exam move is to:",
                    "options": [
                        "Keep pushing until certain",
                        "Skip, mark, and return if time remains",
                        "Leave it blank",
                        "Change the passage order mid-question",
                    ],
                },
            ],
            [
                "Inspect axes/units and compare values",
                "A direct quote or paraphrase from each viewpoint",
                "Skip, mark, and return if time remains",
            ],
            "ACT Science is data-first.",
            "The test rewards text/figure evidence, not outside knowledge.",
            "Time management preserves points across easier later items.",
            "A reliable science workflow is: read labels, verify values, support claims with explicit evidence, and protect pacing by moving on when needed.",
        ),
        section_mcq(
            ids["mcq2"],
            """
            **Mixed ACT Review**
            """,
            [
                {
                    "question": "A student says, 'Because one sample increased, the treatment always works.' What is the best critique?",
                    "options": [
                        "The claim is too absolute for limited data",
                        "The claim must be correct if the graph slopes upward",
                        "The claim is valid because ACT uses simple science",
                        "The claim is valid if the answer is choice C",
                    ],
                    "correctAnswer": 0,
                    "explanation": "Single-trial or limited data rarely justifies always/never conclusions. ACT answers favor cautious language tied to observed evidence.",
                },
                {
                    "question": "You finish 4 passages in 28 minutes and have 7 minutes left for the final passage. Which adjustment is best?",
                    "options": [
                        "Read the final passage twice",
                        "Use question-first scanning and strict 45–50 second caps",
                        "Guess all remaining immediately",
                        "Leave difficult questions blank",
                    ],
                    "correctAnswer": 1,
                    "explanation": "With limited time, prioritize answerable questions quickly, cap hard items, and return if possible. This maximizes expected points.",
                },
            ],
        ),
    ]


def make_reading_strategy_sections(topic: TopicConfig, part: int, focus: str) -> list[dict[str, Any]]:
    ids = make_ids("rstrat", part)
    q_total = 40
    min_total = 35
    sec_per_q = round((min_total * 60) / q_total)

    return [
        section_text(
            ids["intro"],
            f"""
            # ACT Reading Strategy
            **Part {part} of 7 — {focus}**

            ACT Reading is a speed + precision section. Build a short routine for every passage:
            - Spend 45–60 seconds mapping the passage (topic, viewpoint shifts, evidence locations).
            - Solve direct evidence items first.
            - Save hardest inference items for the second pass.

            Your target pace is about {sec_per_q} seconds per question across the section.
            """,
        ),
        section_mcq(
            ids["mcq1"],
            """
            **Passage Process**
            """,
            [
                {
                    "question": "A passage has 4 paragraphs. What belongs in a useful map?",
                    "options": [
                        "One sentence naming each paragraph's job",
                        "A full rewrite of each paragraph",
                        "Every unfamiliar vocabulary word",
                        "Only the first and last lines",
                    ],
                    "correctAnswer": 0,
                    "explanation": "A compact map tracks structure and evidence locations. Rewriting burns time without improving answer accuracy.",
                },
                {
                    "question": "A question asks for evidence supporting a claim from line 12. Best first step?",
                    "options": [
                        "Read only answer choices and guess tone",
                        "Reread lines around 12 and match exact wording",
                        "Skip all line-reference questions",
                        "Use background knowledge from school",
                    ],
                    "correctAnswer": 1,
                    "explanation": "Line-reference questions are high-accuracy opportunities when you verify nearby lines and match claim-to-text directly.",
                },
            ],
        ),
        section_text(
            ids["worked"],
            """
            ## Worked Example: Main Idea vs Detail
            Suppose paragraph 1 introduces a debate on urban trees, paragraphs 2–3 present benefits, and paragraph 4 gives limitations.

            If asked for the main idea, a strong answer includes both sides and the author's overall position.
            Weak choices over-focus on one detail (for example, only costs) or overstate certainty.

            **Fast check:** if an option could fit only one paragraph, it is usually a detail answer, not the global main idea.
            """,
        ),
        section_input(
            ids["input"],
            """
            **Measurable Pacing Drill**
            1) You plan 8 minutes per passage for 4 passages. How many minutes does that use?
            2) In a passage with 10 questions, you answer 7 in 6 minutes. Enter average seconds per answered question (nearest whole number).
            3) You flag 3 inference questions and return later, gaining 2 correct answers. Enter the number gained.
            """,
            ["32", "51", "2"],
            "Multiply minutes per passage by number of passages.",
            "Convert 6 minutes to seconds, then divide by 7.",
            "Count additional correct responses from second-pass strategy.",
            "Efficient reading is quantifiable: 32 total passage minutes, 360/7 ≈ 51 seconds per solved item, and 2 extra correct from strategic revisits.",
        ),
        section_text(
            ids["strategy"],
            f"""
            ## ACT Tactics for {focus}
            - Anchor every answer in lines or paragraph function, not memory alone.
            - For tone questions, focus on adjective strength (critical, neutral, approving).
            - For inference questions, select the least extreme statement supported by text.
            - Keep a hard cutoff: if no progress in 40–50 seconds, mark and move.
            """,
        ),
        section_dropdown(
            ids["dropdown"],
            """
            **Decision Rules**
            """,
            [
                {
                    "label": "Best purpose of a passage map:",
                    "options": [
                        "Memorize each sentence",
                        "Track structure and where evidence lives",
                        "Predict answer letters",
                        "Replace careful reading",
                    ],
                },
                {
                    "label": "For line-reference questions, best evidence source is:",
                    "options": [
                        "A remembered classroom example",
                        "The exact local lines and immediate context",
                        "Only the passage title",
                        "The longest option",
                    ],
                },
                {
                    "label": "When an inference choice sounds dramatic, you should:",
                    "options": [
                        "Prefer it because it sounds strong",
                        "Check if the text truly supports that level of certainty",
                        "Assume dramatic language means advanced reading",
                        "Choose it if stuck for 5 seconds",
                    ],
                },
            ],
            [
                "Track structure and where evidence lives",
                "The exact local lines and immediate context",
                "Check if the text truly supports that level of certainty",
            ],
            "Mapping is a retrieval tool, not a summary assignment.",
            "Line references reward direct verification.",
            "ACT writers often use extreme wording as bait.",
            "High scorers use structure-aware reading: map quickly, verify evidence locally, and reject unsupported intensity in answer wording.",
        ),
        section_mcq(
            ids["mcq2"],
            """
            **Section Review**
            """,
            [
                {
                    "question": "You are behind pace halfway through Reading. Which move usually recovers most points?",
                    "options": [
                        "Spend extra time on each hard inference",
                        "Prioritize direct-evidence questions and cap hard items",
                        "Reread completed passages",
                        "Leave bubbles blank until the end",
                    ],
                    "correctAnswer": 1,
                    "explanation": "Direct-evidence items are faster and more reliable. Time caps prevent one question from costing multiple later points.",
                },
                {
                    "question": "A tone question includes 'outraged' vs 'cautiously skeptical.' The passage critiques method limits but praises results. Best tone?",
                    "options": [
                        "Outraged",
                        "Cautiously skeptical",
                        "Celebratory",
                        "Indifferent",
                    ],
                    "correctAnswer": 1,
                    "explanation": "Mixed praise and critique indicates a moderated stance, not extreme anger or pure celebration.",
                },
            ],
        ),
    ]


def make_science_data_sections(topic: TopicConfig, part: int, focus: str) -> list[dict[str, Any]]:
    ids = make_ids("sdata", part)
    x1 = part + 1
    x2 = x1 + 2
    y1 = 10 + 3 * part
    y2 = y1 + 8
    slope = round((y2 - y1) / (x2 - x1), 2)

    return [
        section_text(
            ids["intro"],
            f"""
            # ACT Science Data Analysis
            **Part {part} of 7 — {focus}**

            Most ACT Science questions in this unit are solved with arithmetic and careful reading of labels.
            Use this sequence:
            1. Identify variable on each axis.
            2. Compute only what the question asks (difference, rate, or estimate).
            3. Match units before finalizing.

            Precision beats speed-reading in data-heavy passages.
            """,
        ),
        section_mcq(
            ids["mcq1"],
            """
            **Data Fundamentals**
            """,
            [
                {
                    "question": f"In a graph, point A is ({x1}, {y1}) and point B is ({x2}, {y2}). What is the slope?",
                    "options": [
                        f"{slope}",
                        f"{(x2 - x1) / (y2 - y1):.2f}",
                        f"{y2 - y1}",
                        f"{x2 - x1}",
                    ],
                    "correctAnswer": 0,
                    "explanation": f"Slope is rise/run = ({y2}-{y1})/({x2}-{x1}) = {slope}.",
                },
                {
                    "question": "A best-fit line rises as x increases. Which claim is directly supported?",
                    "options": [
                        "There is a positive association between variables",
                        "x causes y in all settings",
                        "The relationship is perfectly linear",
                        "No outliers exist",
                    ],
                    "correctAnswer": 0,
                    "explanation": "Upward trend supports positive association. Causation and perfect linearity are stronger claims not guaranteed by one plot.",
                },
            ],
        ),
        section_text(
            ids["worked"],
            f"""
            ## Worked Numeric Example
            A table lists concentration (mM) and absorbance:
            - 2 mM → 0.18
            - 4 mM → 0.33
            - 6 mM → 0.47

            Suppose a question asks for the estimated absorbance at 5 mM.
            5 mM lies between 4 and 6 mM, so interpolate between 0.33 and 0.47.
            Midpoint estimate: about 0.40.

            On ACT Science, interpolation is usually linear unless the graph clearly curves.
            """,
        ),
        section_input(
            ids["input"],
            """
            **Computation Set**
            1) A value rises from 14 to 23. Enter the increase.
            2) A quantity changes from 50 to 65 over 3 minutes. Enter average rate per minute (decimal allowed).
            3) If a point estimate is 31 and measured value is 28, enter absolute error.
            """,
            ["9", "5", "3"],
            "Increase = final - initial.",
            "Rate = change divided by time.",
            "Absolute error uses distance between estimate and observed value.",
            "Increase is 9. Rate is (65-50)/3 = 5 per minute. Absolute error is |31-28| = 3.",
        ),
        section_text(
            ids["strategy"],
            f"""
            ## Practical Strategy for {focus}
            - When options are close, compute with one extra decimal before choosing.
            - For controls/variables items, identify what is held constant first.
            - For uncertainty questions, overlapping error bars mean weak evidence for a difference.
            - In synthesis passages, build a mini two-column note: Source A claim vs Source B claim.
            """,
        ),
        section_dropdown(
            ids["dropdown"],
            """
            **Reasoning Match**
            """,
            [
                {
                    "label": "Interpolation means:",
                    "options": [
                        "Estimating within observed x-values",
                        "Estimating far beyond observed x-values",
                        "Ignoring the graph scale",
                        "Choosing the largest y-value",
                    ],
                },
                {
                    "label": "When two means differ but error bars overlap strongly, the safest conclusion is:",
                    "options": [
                        "A definite difference exists",
                        "Difference is uncertain from this data",
                        "The larger mean must be wrong",
                        "Units are irrelevant",
                    ],
                },
                {
                    "label": "A control condition is used to:",
                    "options": [
                        "Increase vocabulary complexity",
                        "Provide a baseline for comparison",
                        "Eliminate all random error",
                        "Avoid graph interpretation",
                    ],
                },
            ],
            [
                "Estimating within observed x-values",
                "Difference is uncertain from this data",
                "Provide a baseline for comparison",
            ],
            "Inside range = interpolation.",
            "Overlap weakens certainty.",
            "Controls establish what changes are due to treatment.",
            "Data interpretation on ACT Science favors conservative conclusions backed by measured comparisons and baseline controls.",
        ),
        section_mcq(
            ids["mcq2"],
            """
            **Timed Review Questions**
            """,
            [
                {
                    "question": "A question asks for the best estimate at x=7, while data points are x=1 to x=8. Which method is most appropriate?",
                    "options": [
                        "Interpolation from nearby points",
                        "Random guessing because x=7 is not listed",
                        "Extrapolation far beyond data",
                        "Ignoring units",
                    ],
                    "correctAnswer": 0,
                    "explanation": "x=7 is inside the data range, so interpolation using neighboring values is appropriate.",
                },
                {
                    "question": "You have 90 seconds left and 2 data questions remain. Best scoring move?",
                    "options": [
                        "Fully re-read the entire passage",
                        "Target each question's referenced figure directly",
                        "Leave both blank",
                        "Spend all time on one question",
                    ],
                    "correctAnswer": 1,
                    "explanation": "Directly accessing referenced figures maximizes attempts and accuracy under short time constraints.",
                },
            ],
        ),
    ]


def make_stat_prob_sections(topic: TopicConfig, part: int, focus: str) -> list[dict[str, Any]]:
    ids = make_ids("stat", part)
    a = 8 + part
    b = 12 + part
    c = 16 + part

    return [
        section_text(
            ids["intro"],
            f"""
            # ACT Statistics and Probability
            **Part {part} of 7 — {focus}**

            ACT math statistics questions are usually short and computation-based.
            Core scoring rule: compute exactly what is asked, then test units and constraints.

            Common formulas used in this unit:
            - Mean = sum of values / number of values
            - Range = max - min
            - P(A or B) = P(A) + P(B) - P(A and B)
            """,
        ),
        section_mcq(
            ids["mcq1"],
            """
            **Core Concepts**
            """,
            [
                {
                    "question": f"What is the mean of {a}, {b}, and {c}?",
                    "options": [
                        f"{(a + b + c) / 3 + 2:.0f}",
                        f"{(a + b + c) / 3:.0f}",
                        f"{max(a, b, c) - min(a, b, c)}",
                        f"{a + b + c}",
                    ],
                    "correctAnswer": 1,
                    "explanation": f"Mean is ({a}+{b}+{c})/3 = {(a + b + c) / 3:.0f}.",
                },
                {
                    "question": "If P(rain)=0.30, what is P(no rain)?",
                    "options": ["0.70", "0.30", "1.30", "0.50"],
                    "correctAnswer": 0,
                    "explanation": "Complement rule: P(not A) = 1 - P(A) = 0.70.",
                },
            ],
        ),
        section_text(
            ids["worked"],
            """
            ## Worked Table Example
            A class survey result:
            - 40 students total
            - 18 take art
            - 15 take music
            - 7 take both

            Probability a random student takes art or music:
            \(P(A \cup M) = (18 + 15 - 7)/40 = 26/40 = 0.65\)

            Subtracting overlap once is the key move. ACT often tests this exact trap.
            """,
        ),
        section_input(
            ids["input"],
            """
            **Numeric Practice**
            1) Dataset: 4, 7, 9, 10. Enter the median.
            2) If P(A)=0.4 and P(B)=0.5 and P(A and B)=0.2, enter P(A or B).
            3) How many 2-letter arrangements can be made from letters A, B, C with no repetition?
            """,
            ["8", "0.7", "6"],
            "For even count, median is average of middle two values.",
            "Use addition rule with overlap subtraction.",
            "Order matters for arrangements (permutations).",
            "Median is (7+9)/2=8. Union probability is 0.4+0.5-0.2=0.7. Two-letter permutations from 3 letters: 3×2=6.",
        ),
        section_text(
            ids["strategy"],
            f"""
            ## ACT Pitfalls for {focus}
            - Do not confuse mean with median when outliers are present.
            - For conditional probability tables, confirm row/column denominator before dividing.
            - In counting problems, decide first: does order matter?
            - Translate wording to symbols before computing to avoid arithmetic slips.
            """,
        ),
        section_dropdown(
            ids["dropdown"],
            """
            **Formula Selection**
            """,
            [
                {
                    "label": "Best formula for 'A or B':",
                    "options": [
                        "P(A)+P(B)",
                        "P(A)+P(B)-P(A and B)",
                        "P(A)×P(B)",
                        "1-P(A and B)",
                    ],
                },
                {
                    "label": "When order matters in counting, use:",
                    "options": ["Combinations", "Permutations", "Median", "Range"],
                },
                {
                    "label": "A quick check for impossible probability is:",
                    "options": [
                        "Value less than 0 or greater than 1",
                        "Value is a decimal",
                        "Value has two significant digits",
                        "Value includes a fraction",
                    ],
                },
            ],
            [
                "P(A)+P(B)-P(A and B)",
                "Permutations",
                "Value less than 0 or greater than 1",
            ],
            "Union needs overlap correction.",
            "Permutations apply when arrangements are different by order.",
            "Probabilities must lie in [0, 1].",
            "Correct model choice is half the work on ACT stats: pick the right formula before arithmetic.",
        ),
        section_mcq(
            ids["mcq2"],
            """
            **ACT-Style Review**
            """,
            [
                {
                    "question": "A set has values 2, 3, 3, 4, 20. Which measure is most affected by the outlier?",
                    "options": ["Median", "Mode", "Mean", "Minimum"],
                    "correctAnswer": 2,
                    "explanation": "The mean shifts strongly with extreme values, while the median remains anchored near center order.",
                },
                {
                    "question": "From 5 candidates, how many ways can captain and co-captain be chosen?",
                    "options": ["10", "20", "25", "5"],
                    "correctAnswer": 1,
                    "explanation": "Different roles mean order matters: 5 choices for captain, then 4 for co-captain, so 5×4=20.",
                },
            ],
        ),
    ]


def make_test_day_sections(topic: TopicConfig, part: int, focus: str) -> list[dict[str, Any]]:
    ids = make_ids("tday", part)

    return [
        section_text(
            ids["intro"],
            f"""
            # ACT Test-Day Strategy
            **Part {part} of 7 — {focus}**

            Strong ACT outcomes come from execution rules you can measure:
            - Keep section-level checkpoints.
            - Decide in advance when to guess and move.
            - Protect focus with hydration, breathing resets, and timing routines.

            This lesson turns strategy into numbers you can practice before test day.
            """,
        ),
        section_mcq(
            ids["mcq1"],
            """
            **Pacing and Guessing Choices**
            """,
            [
                {
                    "question": "English has 75 questions in 45 minutes. Which average pace is closest?",
                    "options": ["24 sec/question", "36 sec/question", "48 sec/question", "60 sec/question"],
                    "correctAnswer": 1,
                    "explanation": "45 minutes = 2,700 seconds, and 2,700/75 = 36 seconds per question.",
                },
                {
                    "question": "With no guessing penalty, when should you bubble an answer on a hard question?",
                    "options": [
                        "Only when fully certain",
                        "Before moving on if time cap is reached",
                        "Never bubble guesses",
                        "Wait until after the test ends",
                    ],
                    "correctAnswer": 1,
                    "explanation": "No penalty means an unanswered question is strictly worse than a strategic guess after a time cap.",
                },
            ],
        ),
        section_text(
            ids["worked"],
            """
            ## Worked Timing Example
            You target these section splits:
            - English 45 min
            - Math 60 min
            - Reading 35 min
            - Science 35 min

            Suppose you are 4 minutes behind halfway through Math.
            Recovery plan:
            1. Cap each remaining hard question at 50 seconds.
            2. Prioritize algebra/geometry questions you can complete in one pass.
            3. Return only if surplus time appears in final 6–8 minutes.

            This converts stress into an actionable checkpoint strategy.
            """,
        ),
        section_input(
            ids["input"],
            """
            **Execution Math**
            1) Reading has 40 questions in 35 minutes. Enter average seconds per question (nearest whole number).
            2) You save 15 seconds on each of 12 easy questions. Enter total seconds saved.
            3) If you leave 5 questions blank versus random guessing, how many additional attempts does guessing provide?
            """,
            ["53", "180", "5"],
            "Convert 35 minutes to seconds and divide by 40.",
            "Multiply time saved per question by number of questions.",
            "Each guess counts as an attempt with nonzero expected value.",
            "Reading pace is about 53 sec/question. Twelve quick wins at 15 seconds each save 180 seconds. Guessing adds 5 attempts instead of zero.",
        ),
        section_text(
            ids["strategy"],
            f"""
            ## Practical Plan for {focus}
            - Use a watch checkpoint every 8–10 questions, not every item.
            - Keep bubbling synchronized in small batches to avoid misalignment.
            - Pre-plan passage order (for Reading/Science) based on your strengths.
            - Add a 20-second reset routine: shoulders down, one deep breath, eyes to next stem.
            """,
        ),
        section_dropdown(
            ids["dropdown"],
            """
            **Checklist Logic**
            """,
            [
                {
                    "label": "Best use of checkpoints during a section:",
                    "options": [
                        "Check after every question",
                        "Check at planned question milestones",
                        "Do not check time at all",
                        "Only check in final minute",
                    ],
                },
                {
                    "label": "If you are stuck past your cap, highest-value action is:",
                    "options": [
                        "Leave blank and move",
                        "Guess strategically and move",
                        "Spend 3 extra minutes",
                        "Restart the passage",
                    ],
                },
                {
                    "label": "The main purpose of a final-week plan is to:",
                    "options": [
                        "Learn brand-new heavy content",
                        "Stabilize timing, sleep, and review patterns",
                        "Take zero breaks",
                        "Ignore weak areas",
                    ],
                },
            ],
            [
                "Check at planned question milestones",
                "Guess strategically and move",
                "Stabilize timing, sleep, and review patterns",
            ],
            "Milestones prevent over-checking and panic.",
            "No penalty means guessing is superior to blanks.",
            "Final week should optimize readiness, not overload new material.",
            "Test-day performance improves when timing rules and energy management are rehearsed as routines.",
        ),
        section_mcq(
            ids["mcq2"],
            """
            **Scenario Review**
            """,
            [
                {
                    "question": "You finish English with 3 minutes left. Best use of time?",
                    "options": [
                        "Leave early mentally",
                        "Recheck flagged punctuation and transition items",
                        "Change random answers",
                        "Erase and rebubble everything",
                    ],
                    "correctAnswer": 1,
                    "explanation": "Targeted review of flagged items has positive expected value, while random changes often reduce score.",
                },
                {
                    "question": "Night before the ACT, which choice best supports next-day performance?",
                    "options": [
                        "New 4-hour content cram",
                        "Normal sleep schedule and light formula review",
                        "Skip dinner to wake early",
                        "Take multiple full tests",
                    ],
                    "correctAnswer": 1,
                    "explanation": "Consistency in sleep and low-intensity review improves recall and focus better than late heavy cramming.",
                },
            ],
        ),
    ]


def make_sections(topic: TopicConfig, part: int, focus: str) -> list[dict[str, Any]]:
    if topic.slug == "act-reading-science-tips-act":
        return make_read_sci_sections(topic, part, focus)
    if topic.slug == "act-reading-strategy-act":
        return make_reading_strategy_sections(topic, part, focus)
    if topic.slug == "act-science-data-act":
        return make_science_data_sections(topic, part, focus)
    if topic.slug == "act-statistics-probability-act":
        return make_stat_prob_sections(topic, part, focus)
    if topic.slug == "act-test-day-strategy-act":
        return make_test_day_sections(topic, part, focus)
    raise ValueError(f"Unsupported topic slug: {topic.slug}")


def render_file(topic: TopicConfig, part: int, sections: list[dict[str, Any]]) -> str:
    export_name = f"{topic.export_prefix}Part{part}Data"
    sections_block = format_value(sections, indent=4)
    return (
        f"export const {export_name} = {{\n"
        f"  topicSlug: '{topic.slug}',\n"
        f"  sections: {sections_block}\n"
        f"}};\n"
    )


def balanced_brackets(ts_source: str) -> bool:
    stack: list[str] = []
    pairs = {"}": "{", "]": "[", ")": "("}
    openers = set(pairs.values())
    closers = set(pairs.keys())

    in_single = False
    in_double = False
    in_template = False
    escaped = False

    for ch in ts_source:
        if escaped:
            escaped = False
            continue

        if ch == "\\":
            escaped = True
            continue

        if in_single:
            if ch == "'":
                in_single = False
            continue

        if in_double:
            if ch == '"':
                in_double = False
            continue

        if in_template:
            if ch == "`":
                in_template = False
            continue

        if ch == "'":
            in_single = True
            continue
        if ch == '"':
            in_double = True
            continue
        if ch == "`":
            in_template = True
            continue

        if ch in openers:
            stack.append(ch)
        elif ch in closers:
            if not stack or stack[-1] != pairs[ch]:
                return False
            stack.pop()

    return not stack and not in_single and not in_double and not in_template


def validate_structure(ts_source: str, sections: list[dict[str, Any]], path: str) -> None:
    if len(sections) != 7:
        raise ValueError(f"{path}: expected 7 sections, got {len(sections)}")

    section_types = [section["type"] for section in sections]
    needed = {"text", "multiple-choice", "input-boxes", "dropdown-select"}
    if not needed.issubset(set(section_types)):
        raise ValueError(f"{path}: missing section types; got {section_types}")

    for section in sections:
        sec_type = section["type"]
        if sec_type == "multiple-choice":
            questions = section["exercise"]["questions"]
            if len(questions) != 2:
                raise ValueError(f"{path}: multiple-choice section must have 2 questions")
            for q in questions:
                if len(q["options"]) != 4:
                    raise ValueError(f"{path}: each MCQ must have 4 options")
        if sec_type == "input-boxes":
            ex = section["exercise"]
            if ex["boxes"] != 3 or len(ex["correctAnswers"]) != 3:
                raise ValueError(f"{path}: input-boxes must define 3 boxes and 3 answers")
        if sec_type == "dropdown-select":
            ex = section["exercise"]
            if len(ex["dropdowns"]) != 3 or len(ex["correctAnswers"]) != 3:
                raise ValueError(f"{path}: dropdown-select must define 3 dropdowns and 3 answers")

    if not balanced_brackets(ts_source):
        raise ValueError(f"{path}: failed deterministic balanced-bracket sanity check")


def write_file(path: str, content: str) -> None:
    with open(path, "w", encoding="utf-8") as handle:
        handle.write(content)


def main() -> None:
    os.makedirs(OUT_DIR, exist_ok=True)

    total_written = 0
    for topic in TOPICS:
        for part, focus in enumerate(topic.outlines, start=1):
            sections = make_sections(topic, part, focus)
            ts_source = render_file(topic, part, sections)
            path = os.path.join(OUT_DIR, f"{topic.file_prefix}-part{part}.ts")
            validate_structure(ts_source, sections, path)
            write_file(path, ts_source)
            total_written += 1

    print(f"Wrote {total_written} files to {OUT_DIR}")


if __name__ == "__main__":
    main()
