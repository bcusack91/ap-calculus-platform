export const cspDataPart1Data = {
  topicSlug: 'csp-data',
  sections: [
    {
      id: 'cspd1-intro',
      type: 'text' as const,
      content: `
# 📊 Data

**Part 1 of 7 — Collection, Processing, and Extracting Information**

---

## Data, Information, and Knowledge

| Level | Definition | Example |
|-------|-----------|---------|
| **Data** | Raw, unprocessed facts and figures | 72, 68, 75, 80, 65 |
| **Information** | Data that has been organized or analyzed | "The average temperature this week was 72F" |
| **Knowledge** | Understanding derived from information | "Temperatures are trending warmer this spring" |

> 🔑 **Data alone is not useful.** It must be processed, cleaned, and analyzed to produce meaningful information that supports decision-making.

---

## Data Collection

### Sources of Data
- **Surveys and forms**: Directly asking people
- **Sensors**: Temperature, GPS, accelerometer
- **Web scraping**: Extracting data from websites
- **APIs**: Accessing data programmatically from services
- **Transaction logs**: Purchases, login records

### Metadata
**Metadata** is data about data. It describes properties of the actual data without containing the data itself.

| Data | Metadata |
|------|----------|
| A photo | Date taken, camera model, GPS coordinates, file size |
| An email | Sender, recipient, timestamp, subject line |
| A song file | Artist, album, duration, bit rate, file format |
      `
    },
    {
      id: 'cspd1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following is an example of metadata for a digital photo?',
            options: [
              'The colors of the pixels in the image',
              'The subject of the photo',
              'The date, time, and GPS location where the photo was taken',
              'The artistic style of the photo'
            ],
            correctAnswer: 2,
            explanation: 'Metadata is data ABOUT the data. The date, time, and GPS location describe properties of the photo file, not the content of the image itself.'
          },
          {
            question: 'What is the difference between data and information?',
            options: [
              'They are the same thing',
              'Data is processed and organized; information is raw',
              'Data is raw facts; information is data that has been processed to be meaningful',
              'Information is always numerical; data is always text'
            ],
            correctAnswer: 2,
            explanation: 'Data is raw and unorganized (e.g., a list of numbers). Information is data that has been processed, organized, or analyzed to have meaning (e.g., the average of those numbers).'
          }
        ]
      }
    },
    {
      id: 'cspd1-content',
      type: 'text' as const,
      content: `
## Cleaning and Processing Data

Real-world data is often messy. Before analysis, you must:

| Issue | Problem | Solution |
|-------|---------|----------|
| **Missing values** | Some fields are blank | Remove row, fill with default, or estimate |
| **Duplicates** | Same record appears twice | Remove duplicate entries |
| **Inconsistent format** | "NY", "New York", "new york" | Standardize to one format |
| **Outliers** | Values far from normal range | Investigate — keep if valid, remove if error |
| **Wrong data type** | Age stored as text "25" | Convert to number 25 |

## Extracting Information from Data

### Common Analyses
- **Filtering**: Show only records matching a condition
- **Sorting**: Arrange by a specific field
- **Aggregation**: Calculate sum, average, count, min, max
- **Grouping**: Categorize records by a shared attribute
- **Visualization**: Charts, graphs, maps to reveal patterns

### Correlation vs Causation
- **Correlation**: Two variables change together (ice cream sales and drownings both rise in summer)
- **Causation**: One variable directly causes the other
- **Key rule**: Correlation does NOT imply causation. A hidden third variable (confounding variable) may explain both
      `
    },
    {
      id: 'cspd1-input',
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

1) Data about data — such as the date a photo was taken or the artist of a song — is called _______.

2) When two variables change together but one does not cause the other, the relationship is a _______.

3) Removing duplicate records and standardizing formats is part of _______ the data.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['metadata', 'correlation', 'cleaning'],
        hint1: 'Meta = about.',
        hint2: 'They are correlated but not causally linked.',
        hint3: 'Making the data clean and consistent.',
        explanation: 'Metadata = data about data. Correlation = related but not causal. Cleaning = preparing data for analysis.'
      }
    },
    {
      id: 'cspd1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Classify the Concept** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'A list of raw test scores with no analysis is ___',
            options: ['Data (raw, unprocessed)', 'Information (processed)', 'Knowledge (understanding)', 'Metadata']
          },
          {
            label: '"Students who study more tend to score higher" is a statement about ___',
            options: ['Correlation', 'Causation (proven)', 'Metadata', 'Data cleaning']
          },
          {
            label: 'The file size and resolution of an image are examples of ___',
            options: ['Metadata', 'Data', 'Information', 'Knowledge']
          }
        ],
        correctAnswers: ['Data (raw, unprocessed)', 'Correlation', 'Metadata'],
        hint1: 'Just raw numbers with no context.',
        hint2: 'Tendency, not proven causal link.',
        hint3: 'Attributes of the file itself, not the content.',
        explanation: 'Raw scores = data. Study/score relationship = correlation. File attributes = metadata.'
      }
    },
    {
      id: 'cspd1-strategy',
      type: 'text' as const,
      content: `
## AP Exam Strategy: Data

- Know the hierarchy: **Data → Information → Knowledge**
- **Metadata** questions are common — remember it is data ABOUT data, not the content itself
- **Correlation vs causation** appears nearly every year — always look for confounding variables
- Data cleaning is necessary because real data has errors, duplicates, and inconsistencies
- Know how filtering, sorting, and aggregation extract meaning from datasets
- Large datasets can reveal patterns not visible in small samples
      `
    },
    {
      id: 'cspd1-applied',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A study finds that cities with more firefighters also have more fires. What is the best explanation?',
            options: [
              'Firefighters cause fires',
              'This is causation — more firefighters lead to more fires',
              'This is correlation — larger cities have both more firefighters AND more fires',
              'The data must be wrong'
            ],
            correctAnswer: 2,
            explanation: 'City size is the confounding variable. Larger cities have more of everything — more firefighters AND more fires. The correlation does not mean firefighters cause fires. This is a classic AP CSP question.'
          },
          {
            question: 'A dataset has 10,000 rows. Some rows have "USA", others "United States", others "US" in the country field. What should be done first?',
            options: [
              'Analyze the data as-is',
              'Delete all rows with inconsistent values',
              'Clean the data by standardizing the country field to one format',
              'Add more data to fix the inconsistency'
            ],
            correctAnswer: 2,
            explanation: 'Data cleaning requires standardizing inconsistent formats. All three values refer to the same country so they should be unified to one standard form before analysis.'
          }
        ]
      }
    }
  ]
};
