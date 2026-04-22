#!/usr/bin/env python3
"""
Generate 14 topic-specific AAS entrance quizzes (14 questions each, 2 per part).

Each question is anchored to a named figure, dated event, primary source, or
historical concept from that topic — pulled from the same data dict used by
write-aas-all.py.
"""
from __future__ import annotations
import os, json, importlib.util

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT  = os.path.join(ROOT, "src", "data", "entrance-quizzes")

# Import T dict from the lesson generator
spec = importlib.util.spec_from_file_location("waa", os.path.join(ROOT, "scripts", "write-aas-all.py"))
waa = importlib.util.module_from_spec(spec)
spec.loader.exec_module(waa)
T = waa.T

PART_TITLES = [
    (1, "Core Concepts"),
    (2, "Key Processes"),
    (3, "Patterns & Examples"),
    (4, "Connections & Interactions"),
    (5, "Change Over Time"),
    (6, "Problem-Solving Workshop"),
    (7, "AP Review"),
]

def js_str(s): return json.dumps(s, ensure_ascii=False)

def build_questions(slug, t):
    """14 questions, 2 per part."""
    short = t["short"]
    fig = t["figures"]
    ev = t["events"]
    src = t["sources"]
    cc = t["core_concepts"]
    vocab = t["vocab"]
    other_slug, other_title, other_link = t["compare_other"]
    prefix = t["id_prefix"] + "-ent"

    questions = []

    # Part 1 — Core Concepts (2 Qs)
    questions.append({
        "id": f"{prefix}-1a",
        "question": f"Which statement BEST captures why {short} matters in AP African American Studies?",
        "options": [
            "An unrelated topic from another course",
            t["overview"],
            "A modern policy debate with no historical content",
            f"{short} only appears once on the AP exam"
        ],
        "correctIndex": 1,
        "explanation": f"{short} is a foundational unit; the AP exam expects students to articulate its broader significance.",
        "partNumber": 1, "partTitle": "Core Concepts",
    })
    questions.append({
        "id": f"{prefix}-1b",
        "question": f"The term \"{cc[0][0]}\" is best defined as:",
        "options": [
            "A modern social-media trend",
            cc[0][1],
            cc[1][1],
            "A concept from a different historical era"
        ],
        "correctIndex": 1,
        "explanation": f"{cc[0][0]} is a core analytical concept within {short}.",
        "partNumber": 1, "partTitle": "Core Concepts",
    })

    # Part 2 — Key Processes (2 Qs)
    questions.append({
        "id": f"{prefix}-2a",
        "question": f"{fig[0][0]} ({fig[0][1]}) is significant in {short} because:",
        "options": [
            f"{fig[0][0]} lived after the events of {short} ended",
            fig[0][2],
            f"{fig[0][0]} is unrelated to this unit",
            f"{fig[0][0]} only appears in optional readings"
        ],
        "correctIndex": 1,
        "explanation": f"{fig[0][0]} is one of the central named figures the AP exam expects students to deploy when writing about {short}.",
        "partNumber": 2, "partTitle": "Key Processes",
    })
    questions.append({
        "id": f"{prefix}-2b",
        "question": f"Which mechanism is MOST closely associated with {fig[1][0]}?",
        "options": [
            "An unrelated literary aesthetic",
            fig[1][2],
            "A purely modern policy debate",
            "A cause from a different historical period"
        ],
        "correctIndex": 1,
        "explanation": f"{fig[1][0]} ({fig[1][1]}) drove this specific mechanism within {short}.",
        "partNumber": 2, "partTitle": "Key Processes",
    })

    # Part 3 — Patterns & Examples (2 Qs)
    questions.append({
        "id": f"{prefix}-3a",
        "question": f"Which event BEST illustrates a pattern central to {short}?",
        "options": [
            "An anecdote with no documentary support",
            f"{ev[0][0]} — {ev[0][1]}",
            "An event from a different century unrelated to this unit",
            "A purely fictional story"
        ],
        "correctIndex": 1,
        "explanation": f"{ev[0][0]} is a dated, attested case used by historians to illustrate {short}.",
        "partNumber": 3, "partTitle": "Patterns & Examples",
    })
    questions.append({
        "id": f"{prefix}-3b",
        "question": f"A strong AP comparison of {ev[0][0]} and {ev[1][0]} would:",
        "options": [
            "Treat the events as identical and produce no analysis",
            "Identify a specific shared pattern AND a specific difference, with named actors",
            "Avoid using dates entirely",
            "Replace evidence with personal opinion"
        ],
        "correctIndex": 1,
        "explanation": "AP comparison rewards specificity on both similarity and difference.",
        "partNumber": 3, "partTitle": "Patterns & Examples",
    })

    # Part 4 — Connections (2 Qs)
    questions.append({
        "id": f"{prefix}-4a",
        "question": f"How does {short} BEST connect to {other_title}?",
        "options": [
            "There are no connections between these units",
            f"{other_link.capitalize()}.",
            "Connections between units are not tested on the AP exam",
            "The two units cover identical material"
        ],
        "correctIndex": 1,
        "explanation": f"AP synthesis prompts ask students to articulate how {short} interacts with {other_title}.",
        "partNumber": 4, "partTitle": "Connections & Interactions",
    })
    questions.append({
        "id": f"{prefix}-4b",
        "question": "AP \"synthesis\" refers to:",
        "options": [
            "Memorizing dates only",
            "Combining evidence from multiple units to support a single defensible claim",
            "Avoiding all comparison",
            "Citing one example without analysis"
        ],
        "correctIndex": 1,
        "explanation": "Synthesis is an explicit AP rubric category that rewards cross-unit argument.",
        "partNumber": 4, "partTitle": "Connections & Interactions",
    })

    # Part 5 — Change Over Time (2 Qs)
    questions.append({
        "id": f"{prefix}-5a",
        "question": f"Which event marked a decisive change within {short}?",
        "options": [
            "An anecdote with no historical impact",
            f"{ev[-1][0]} — {ev[-1][1]}",
            "A 21st-century news headline unrelated to the period",
            "A purely literary aesthetic with no political effect"
        ],
        "correctIndex": 1,
        "explanation": f"{ev[-1][0]} is a dated event historians cite as a turning point in {short}.",
        "partNumber": 5, "partTitle": "Change Over Time",
    })
    questions.append({
        "id": f"{prefix}-5b",
        "question": f"Which BEST describes a continuity within {short}?",
        "options": [
            "Nothing about this topic ever changed",
            f"Aspects such as {cc[2][0].lower()} persisted even as other features changed",
            "Continuity is irrelevant to AP scoring",
            "Only the most recent decade matters"
        ],
        "correctIndex": 1,
        "explanation": "Continuity = elements that persist across change — a key AP analytical category.",
        "partNumber": 5, "partTitle": "Change Over Time",
    })

    # Part 6 — Source Workshop (2 Qs)
    src_name = src[0][0].replace("*", "")
    questions.append({
        "id": f"{prefix}-6a",
        "question": f"What makes {src_name} a strong primary source for studying {short}?",
        "options": [
            "It was published in 2024 with no link to the period",
            src[0][1],
            "It is fictional and includes no historical content",
            "It is unsigned and undated"
        ],
        "correctIndex": 1,
        "explanation": "Provenance, date, and authorial position determine source value on the AP DBQ.",
        "partNumber": 6, "partTitle": "Problem-Solving Workshop",
    })
    questions.append({
        "id": f"{prefix}-6b",
        "question": "Which source-analysis move earns the AP \"sourcing\" point?",
        "options": [
            "Quoting verbatim with no analysis",
            "Identifying author, audience, purpose, OR historical situation — and using it to support a claim",
            "Ignoring the source's date",
            "Citing only 21st-century opinion pieces"
        ],
        "correctIndex": 1,
        "explanation": "AP DBQ rubrics explicitly reward sourcing analysis tied to a claim.",
        "partNumber": 6, "partTitle": "Problem-Solving Workshop",
    })

    # Part 7 — AP Review (2 Qs)
    questions.append({
        "id": f"{prefix}-7a",
        "question": f"Which is the BEST one-sentence thesis for an essay on {short}?",
        "options": [
            f"{short} was important.",
            f"During {t['era']}, {cc[0][0].lower()} reshaped Black life — visible in {ev[0][0]} and {fig[0][0]}'s career — even as {cc[2][0].lower()} persisted.",
            f"Nothing changed during {t['era']}.",
            f"{short} cannot be analyzed."
        ],
        "correctIndex": 1,
        "explanation": "Strong AP theses combine a defensible claim with specific evidence and acknowledge complexity.",
        "partNumber": 7, "partTitle": "AP Review",
    })
    questions.append({
        "id": f"{prefix}-7b",
        "question": f"On the AP exam, the strongest move when writing about {short} is to:",
        "options": [
            "List dates with no analysis",
            "Combine a clear thesis with named figures, dated events, and at least one primary source",
            "Use only 21st-century examples for older periods",
            "Avoid citing sources"
        ],
        "correctIndex": 1,
        "explanation": "AP rubrics consistently reward specificity, sourcing, and clear analytical structure.",
        "partNumber": 7, "partTitle": "AP Review",
    })

    return questions


def emit_quiz_file(slug, t):
    qs = build_questions(slug, t)
    body_lines = []
    for q in qs:
        opts = ", ".join(js_str(o) for o in q["options"])
        body_lines.append(
            f"  {{ id: {js_str(q['id'])}, question: {js_str(q['question'])}, "
            f"options: [{opts}], correctIndex: {q['correctIndex']}, "
            f"explanation: {js_str(q['explanation'])}, "
            f"partNumber: {q['partNumber']}, partTitle: {js_str(q['partTitle'])} }}"
        )
    body = ",\n".join(body_lines)

    parts_arr = ",\n    ".join(
        f"{{ partNumber: {n}, partTitle: {js_str(title)} }}"
        for n, title in PART_TITLES
    )

    return (
        f"/**\n"
        f" * Entrance Quiz — {t['title']} ({t['era']}) (AP African American Studies)\n"
        f" * 14 questions · 7 parts (2 per part) · AUTO-GENERATED by scripts/write-aas-entrance-quizzes.py\n"
        f" */\n\n"
        f"import type {{ EntranceQuizQuestion }} from './moles-molar-mass'\n\n"
        f"const questions: EntranceQuizQuestion[] = [\n{body}\n]\n\n"
        f"export function generateEntranceQuiz(): EntranceQuizQuestion[] {{\n"
        f"  return [...questions].sort(() => Math.random() - 0.5)\n"
        f"}}\n\n"
        f"export function getEntranceQuizParts(): {{ partNumber: number; partTitle: string }}[] {{\n"
        f"  return [\n    {parts_arr}\n  ]\n"
        f"}}\n"
    )


def main():
    written = 0
    for slug, topic in T.items():
        path = os.path.join(OUT, f"{slug}.ts")
        with open(path, "w", encoding="utf-8") as f:
            f.write(emit_quiz_file(slug, topic))
        written += 1
    print(f"Wrote {written} entrance quiz files.")


if __name__ == "__main__":
    main()
