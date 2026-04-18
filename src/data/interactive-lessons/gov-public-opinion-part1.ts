export const govPublicOpinionPart1Data = {
  topicSlug: 'gov-public-opinion',
  sections: [
    {id:'govpubli1-intro',type:'text' as const,content:`
# 📊 Public Opinion & Political Socialization

**Part 1 of 7 — How Americans Form Political Beliefs**

---

| Section |
|---------|
| 📖 What Is Public Opinion? |
| Political Socialization |
| Measuring Public Opinion: Polling |
| Ideology: Liberal vs. Conservative |

> 🔑 **Key Concept:** The AP exam focuses on how public opinion is **formed** (political socialization), how it is **measured** (scientific polling), and common **pitfalls** in polling (sampling bias, question wording).
`},
    {id:'govpubli1-socialization',type:'text' as const,content:`
## 📖 Political Socialization

Political socialization is the process by which individuals develop their political beliefs, values, and attitudes.

### Agents of Socialization (ranked by influence)

| Agent | Influence |
|---|---|
| **Family** | Strongest influence; children tend to adopt parents' party identification and basic political orientation |
| **Education** | Schools teach civic values; higher education correlates with more liberal social views |
| **Peer groups** | Friends and social networks reinforce or challenge political views |
| **Media** | Shapes agenda (what issues people think about); framing effects (how issues are presented) |
| **Religion** | Influences views on social issues (abortion, same-sex marriage); evangelical Protestants → more conservative; Black Protestants → more liberal on economic issues |
| **Race/ethnicity** | Shared group experiences shape views on civil rights, criminal justice, immigration |
| **Major events** | 9/11, Great Recession, COVID-19 — can shift attitudes for an entire generation ("generational effects") |

### Key Concepts

- **Gender gap** — women tend to be more supportive of Democratic candidates and social welfare programs than men (emerged clearly in the 1980s)
- **Generational effects** — shared experiences during formative years shape a generation's politics (e.g., millennials are more liberal on social issues than Baby Boomers)
- **Life-cycle effects** — people may become more conservative as they age (acquire property, higher income)

> 🔑 **AP Connection:** The AP exam will ask you to identify agents of socialization and predict how specific experiences might shape political views. **Family** is always the strongest factor.
`},
    {id:'govpubli1-quiz1',type:'multiple-choice' as const,content:`**Concept Check** 🎯`,exercise:{questions:[
      {question:'Which agent of political socialization has the strongest influence on most individuals\' initial party identification?',options:['Mass media — television news and social media platforms shape all political beliefs from birth','Family — children tend to adopt their parents\' party identification and fundamental political values','College professors — higher education fundamentally changes every student\'s political orientation','Peer groups — friends are always more influential than parents in determining political views'],correctAnswer:1,explanation:'Research consistently shows that family is the strongest agent of political socialization for initial party identification. Children are exposed to their parents\' political discussions, values, and voting behavior from an early age. While other agents (education, peers, media) become more influential over time, the family\'s initial imprint is the most powerful and lasting.'},
      {question:'What is the "gender gap" in American politics?',options:['The constitutional prohibition on gender-based discrimination in voting established by the 19th Amendment','The tendency for women to support Democratic candidates and social welfare programs at higher rates than men, a pattern that emerged clearly in the 1980s','The requirement that political parties nominate equal numbers of male and female candidates for elected office','The difference in voter registration rates between men and women, with men registering at significantly higher rates'],correctAnswer:1,explanation:'The gender gap refers to the persistent difference between men\'s and women\'s political preferences. Since the 1980s, women have been more likely to support Democratic candidates and favor government programs for healthcare, education, and social welfare. Men have been more likely to support Republican candidates and favor lower taxes and stronger defense spending.'}
    ]}},
    {id:'govpubli1-polling',type:'text' as const,content:`
## 📖 Measuring Public Opinion: Polling

### Scientific Polling Requirements

| Element | Description |
|---|---|
| **Random sampling** | Every member of the population must have an **equal chance** of being selected |
| **Sample size** | Typically 1,000–1,500 respondents for national polls (larger samples = smaller margin of error) |
| **Margin of error** | The range within which the true value likely falls (±3% is standard for national polls) |
| **Question wording** | Must be neutral — leading or loaded questions produce biased results |

### Common Polling Errors

| Error | Description | Example |
|---|---|---|
| **Sampling bias** | Sample doesn't represent the population | 1936 Literary Digest poll — sampled from phone books and car registrations (wealthy people only) → predicted Landon over FDR |
| **Selection bias** | People who respond differ from those who don't | Online-only polls miss people without internet access |
| **Social desirability bias** | Respondents give "acceptable" answers rather than true opinions | Understating support for controversial candidates or positions |
| **Push polls** | Disguised campaign tactic — leading questions designed to change opinions, not measure them | "Would you support Candidate X if you knew they had been investigated for corruption?" |

### Types of Polls
- **Benchmark poll** — initial poll early in a campaign to assess starting position
- **Tracking poll** — daily or rolling polls to measure changes over time during a campaign
- **Exit poll** — surveys of voters as they leave polling places on Election Day
- **Straw poll** — informal, unscientific poll (no random sampling)

> 🔑 **AP Connection:** The AP exam will give you poll data and ask you to evaluate its reliability. Always check: Was the sample random? What is the margin of error? How were questions worded? Could sampling bias explain the results?
`},
    {id:'govpubli1-quiz2',type:'multiple-choice' as const,content:`**Check Your Understanding** 🎯`,exercise:{questions:[
      {question:'A national poll of 1,200 adults reports that 52% support a policy with a margin of error of ±3%. What does this mean?',options:['Exactly 52% of all Americans support the policy with no uncertainty whatsoever','The true level of support in the population likely falls between 49% and 55% — the margin of error represents the range of statistical uncertainty','The poll is unreliable because 3% of respondents refused to answer the question honestly','The poll results will change by exactly 3% if the poll is conducted again with different respondents'],correctAnswer:1,explanation:'The margin of error indicates the range of statistical uncertainty. With ±3%, the true population value likely falls between 49% and 55% (52% ± 3%). This means if the poll were repeated many times with different random samples, 95% of the results would fall within this range. The margin of error is determined primarily by sample size — larger samples produce smaller margins of error.'},
      {question:'The 1936 Literary Digest poll predicted Alf Landon would defeat Franklin Roosevelt, but FDR won in a landslide. What was the poll\'s primary methodological error?',options:['The poll used too large a sample size, which made the results unreliable due to data processing errors','The poll suffered from sampling bias — it drew respondents from telephone directories and automobile registrations, which overrepresented wealthy Americans who favored Landon during the Great Depression','The poll questions were intentionally worded to favor Roosevelt, but voters changed their minds at the last minute','The poll was conducted too far in advance of the election and public opinion shifted dramatically in the final weeks'],correctAnswer:1,explanation:'The Literary Digest poll surveyed 2.4 million people — a massive sample — but the sample was drawn from phone books and car registration lists. During the Great Depression, these sources overrepresented wealthy Americans (who opposed FDR\'s New Deal policies). The lesson: sample size doesn\'t matter if the sample isn\'t representative. George Gallup correctly predicted FDR\'s win with a much smaller but properly randomized sample.'}
    ]}}
  ]
};
