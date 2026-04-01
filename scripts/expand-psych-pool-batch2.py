#!/usr/bin/env python3
"""Add more AP Psychology questions to reach ~300."""

import pathlib, re

FILE = pathlib.Path(__file__).resolve().parent.parent / "src" / "data" / "exit-quizzes" / "ap-psychology.ts"

NEW_QS = []

def q(question, opts, correct, explanation, diff, domain, slug, form):
    esc_q = question.replace("'", "\\'")
    esc_e = explanation.replace("'", "\\'")
    opts_str = ",\n      ".join(f"'{o}'" for o in [x.replace("'", "\\'") for x in opts])
    NEW_QS.append(f"""  {{
    question: '{esc_q}',
    options: [
      {opts_str},
    ],
    correctAnswer: {correct},
    explanation: '{esc_e}',
    difficulty: '{diff}',
    domain: '{domain}',
    topicSlug: '{slug}',
    formSet: '{form}',
  }},""")

# Additional questions across all domains to reach ~300

# History & Approaches
q('Naturalistic observation involves:', ['Manipulating variables', 'Observing behavior in natural settings without interference', 'Using surveys', 'Conducting lab experiments'], 1, 'Researchers watch subjects in their natural environment without intervening.', 'easy', 'history-approaches', 'history-approaches-psychology', 'A')
q('Hindsight bias is the tendency to:', ['Believe after an event that one predicted it', 'Forget past events entirely', 'Overestimate future ability', 'Ignore all prior evidence'], 0, 'People believe they "knew it all along" after learning an outcome.', 'easy', 'history-approaches', 'history-approaches-psychology', 'B')

# Biological Bases
q('Myelin sheaths speed up neural transmission by:', ['Increasing neurotransmitter release', 'Allowing saltatory conduction along the axon', 'Thickening the dendrites', 'Reducing action potentials'], 1, 'Myelin insulates the axon so signals jump between nodes of Ranvier.', 'medium', 'biological-bases', 'biological-bases-brain', 'A')
q('The occipital lobe is primarily responsible for:', ['Motor control', 'Visual processing', 'Language production', 'Emotional regulation'], 1, 'The occipital lobe at the back of the brain processes visual information.', 'easy', 'biological-bases', 'biological-bases-brain', 'B')
q('The frontal lobe is involved in:', ['Hearing', 'Planning, decision-making, and voluntary movement', 'Taste processing', 'Sleep regulation'], 1, 'The frontal lobe handles executive functions, personality, and motor control.', 'easy', 'biological-bases', 'biological-bases-brain', 'both')

# Sensation & Perception
q('The phi phenomenon is an example of:', ['Real motion', 'Apparent motion perceived from stationary stimuli', 'A depth cue', 'A hearing illusion'], 1, 'Rapidly alternating lights (like a marquee) create the illusion of movement.', 'medium', 'sensation-perception', 'perception-attention', 'A')
q('Signal detection theory explains how we:', ['See color', 'Detect stimuli amid noise based on sensitivity and decision criteria', 'Process taste information', 'Maintain balance'], 1, 'SDT accounts for both the sensitivity of the observer and their response bias.', 'hard', 'sensation-perception', 'sensation-sensory-processing', 'B')

# Learning
q('A fixed-ratio schedule reinforces after:', ['A set time period', 'A set number of responses', 'Random responses', 'No responses'], 1, 'Fixed-ratio: reward is given after every nth response (e.g., every 5th).', 'medium', 'learning', 'operant-conditioning', 'A')
q('Higher-order conditioning (second-order) occurs when:', ['A new CS is paired with the original CS to produce a CR', 'The US is strengthened', 'Extinction is prevented', 'Punishment replaces reinforcement'], 0, 'A previously neutral stimulus becomes a CS by being paired with an established CS.', 'hard', 'learning', 'classical-conditioning', 'B')

# Memory
q('Iconic memory is a type of _____ memory for visual information:', ['Long-term', 'Sensory', 'Procedural', 'Working'], 1, 'Iconic memory briefly stores visual images for about 0.5 seconds.', 'medium', 'memory', 'memory-encoding-storage', 'A')
q('Echoic memory stores _____ information briefly:', ['Visual', 'Auditory', 'Tactile', 'Olfactory'], 1, 'Echoic memory retains auditory information for 3-4 seconds.', 'medium', 'memory', 'memory-encoding-storage', 'B')
q('Method of loci is a mnemonic technique that:', ['Uses repetition only', 'Associates items with locations along a familiar route', 'Relies on chunking', 'Is a type of procedural memory'], 1, 'The method of loci places items to remember at specific locations in a mental walk.', 'medium', 'memory', 'memory-encoding-storage', 'both')

# Thinking & Language
q('Belief perseverance refers to:', ['Changing beliefs with new evidence', 'Clinging to beliefs even when presented with contradictory evidence', 'Having no beliefs', 'Belief in superstitions only'], 1, 'People maintain initial beliefs even after the evidence is discredited.', 'medium', 'thinking-language', 'thinking-problem-solving', 'A')
q('A heuristic is a mental shortcut that:', ['Always leads to the correct answer', 'Provides a quick but sometimes error-prone solution', 'Eliminates all bias', 'Is the same as an algorithm'], 1, 'Heuristics are efficient strategies that can lead to systematic errors.', 'easy', 'thinking-language', 'thinking-problem-solving', 'B')

# Motivation & Emotion
q('The incentive theory of motivation emphasizes:', ['Internal drives', 'External stimuli that pull us toward behavior', 'Homeostasis only', 'Instincts'], 1, 'Incentive theory: external rewards and punishments motivate behavior.', 'easy', 'motivation-emotion', 'motivation-theories', 'A')
q('Display rules are cultural norms that govern:', ['How we express emotions', 'What we eat', 'How we learn', 'When we sleep'], 0, 'Different cultures have different rules about expressing emotions publicly.', 'medium', 'motivation-emotion', 'emotion-stress', 'B')

# Developmental
q('Assimilation in Piaget theory means:', ['Changing existing schemas', 'Interpreting new experiences through existing schemas', 'Creating entirely new schemas', 'Deleting old schemas'], 1, 'Assimilation: fitting new information into pre-existing cognitive frameworks.', 'medium', 'developmental', 'prenatal-childhood-development', 'A')
q('Accommodation in Piaget theory means:', ['Using existing schemas unchanged', 'Modifying existing schemas to fit new information', 'Rejecting all new information', 'Memorizing facts'], 1, 'Accommodation adjusts schemas when new information does not fit existing ones.', 'medium', 'developmental', 'prenatal-childhood-development', 'B')

# Personality
q('The Barnum effect refers to:', ['Accepting vague personality descriptions as uniquely applicable', 'Precise personality measurement', 'The Big Five model', 'Freudian analysis'], 0, 'People accept generic statements (like horoscopes) as personally accurate.', 'medium', 'personality', 'personality-theories', 'A')
q('Denial as a defense mechanism involves:', ['Accepting reality', 'Refusing to acknowledge a threatening situation', 'Projecting feelings', 'Displacing anger'], 1, 'Denial: the ego protects itself by refusing to accept reality.', 'easy', 'personality', 'personality-theories', 'B')

# Disorders & Treatment
q('Electroconvulsive therapy (ECT) is primarily used for:', ['Anxiety disorders', 'Severe depression that does not respond to other treatments', 'Personality disorders', 'Intellectual disabilities'], 1, 'ECT can be effective for treatment-resistant severe depression.', 'medium', 'disorders-treatment', 'treatment-therapy', 'A')
q('The medical model of psychological disorders views them as:', ['Character flaws', 'Diseases with biological causes', 'Purely environmental', 'Always untreatable'], 1, 'The medical model attributes disorders to biological factors and treatable conditions.', 'easy', 'disorders-treatment', 'psychological-disorders-overview', 'B')
q('Social anxiety disorder involves:', ['Fear of spiders', 'Intense fear of social situations and scrutiny', 'Compulsive cleaning', 'Hallucinations'], 1, 'Social anxiety disorder: persistent fear of being judged or embarrassed in social contexts.', 'easy', 'disorders-treatment', 'psychological-disorders-overview', 'both')

# Social Psychology
q('The actor-observer bias means we attribute:', ['Our own behavior to situations but others behavior to personality', 'Everything to luck', 'All behavior to personality', 'Nothing to the situation'], 0, 'We see our actions as situationally caused, but judge others based on disposition.', 'medium', 'social', 'social-influence-conformity', 'A')
q('Prosocial behavior includes:', ['Aggression', 'Helping, sharing, and cooperating with others', 'Social loafing', 'Conformity only'], 1, 'Prosocial behavior is voluntary action intended to benefit others.', 'easy', 'social', 'group-behavior-prejudice', 'B')
q('Prejudice involves _____ while discrimination involves _____:', ['Actions; thoughts', 'Attitudes/beliefs; behaviors', 'Behaviors; attitudes', 'Nothing; everything'], 1, 'Prejudice is a negative attitude; discrimination is negative behavior toward a group.', 'easy', 'social', 'group-behavior-prejudice', 'both')
q('Normative social influence involves conforming to:', ['Be liked and accepted by the group', 'Gain accurate information', 'Prove a hypothesis', 'Avoid all groups'], 0, 'Normative influence: we conform to gain social approval and avoid rejection.', 'medium', 'social', 'social-influence-conformity', 'A')
q('Informational social influence involves conforming because:', ['We want to fit in', 'We look to others for guidance when uncertain', 'We fear punishment', 'We are being watched'], 1, 'When unsure, we assume others know the correct action.', 'medium', 'social', 'social-influence-conformity', 'B')

content = FILE.read_text()
marker = "\n]\n\nexport function generateExitQuiz"
if marker not in content:
    raise SystemExit("Could not find insertion marker")

insert_block = "\n" + "\n".join(NEW_QS) + "\n"
new_content = content.replace(marker, insert_block + marker)
FILE.write_text(new_content)

count = len(re.findall(r"correctAnswer:", new_content))
print(f"✅ AP Psychology pool now has {count} questions total")
