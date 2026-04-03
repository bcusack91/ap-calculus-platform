import re, subprocess

# Get all DB slugs grouped by course
db_result = subprocess.run(
    ["docker", "exec", "studymondo-dev-db", "psql", "-U", "dev", "-d", "studymondo_dev", "-t", "-A", "-c",
     "SELECT co.slug, t.slug FROM \"Topic\" t JOIN \"Category\" c ON t.\"categoryId\" = c.id JOIN \"Course\" co ON c.\"courseId\" = co.id;"],
    capture_output=True, text=True
)

course_topics = {}
for line in db_result.stdout.strip().split('\n'):
    if '|' in line:
        course, topic = line.strip().split('|')
        course_topics.setdefault(course, set()).add(topic)

all_db_slugs = set()
for topics in course_topics.values():
    all_db_slugs.update(topics)

# Map diagnostic file -> likely course
diag_to_course = {
    "ap-physics-c-mechanics-diagnostic": "ap-physics-c-mechanics",
    "ap-physics-2-diagnostic": "ap-physics-2",
    "ap-physics-c-em-diagnostic": "ap-physics-c-em",
    "ap-biology-diagnostic": "ap-biology",
    "ap-statistics-diagnostic": "ap-stats",
    "algebra1-diagnostic": "algebra-1",
    "algebra2-diagnostic": "algebra-2",
    "geometry-diagnostic": "geometry",
    "grade8-math-diagnostic": "grade-8-math",
    "prealgebra-diagnostic": "prealgebra",
    "precalculus-diagnostic": "ap-precalculus",
    "ochem-diagnostic": "ochem",
}

def find_best_match(missing_slug, course_slugs):
    if missing_slug in course_slugs:
        return missing_slug
    candidates = []
    for db_slug in sorted(course_slugs):
        missing_parts = set(missing_slug.split('-'))
        db_parts = set(db_slug.split('-'))
        overlap = missing_parts & db_parts
        if len(overlap) >= 2 or (len(overlap) == 1 and len(missing_parts) <= 2):
            candidates.append((len(overlap), db_slug))
    candidates.sort(key=lambda x: -x[0])
    if candidates:
        return candidates[0][1]
    return None

for diag, course in sorted(diag_to_course.items()):
    path = f"src/data/{diag}.ts"
    try:
        with open(path) as f:
            content = f.read()
    except FileNotFoundError:
        continue
    
    slugs = set(re.findall(r"topicSlug[s]?:\s*\[?'([^']+)'", content))
    for m in re.finditer(r"topicSlugs:\s*\[([^\]]+)\]", content):
        slugs.update(re.findall(r"'([^']+)'", m.group(1)))
    
    missing = sorted(slugs - all_db_slugs)
    if not missing:
        continue
    
    course_slugs = course_topics.get(course, set())
    print(f"\n=== {diag} (course: {course}) ===")
    for m in missing:
        best = find_best_match(m, course_slugs)
        print(f"  {m} -> {best or '???'}")
