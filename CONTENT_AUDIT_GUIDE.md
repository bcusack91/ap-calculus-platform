# Content Audit Tracker

## 📋 What This Is

A comprehensive CSV file listing **all 698 pages** on your Study Mondo website for content review and improvement tracking.

## 📊 File Details

**File**: `content-audit.csv`  
**Total Pages**: 698 pages
- 6 static pages (Homepage, About, Contact, Privacy, Terms, All Topics)
- 20 course pages
- 137 category pages
- 534 topic pages
- 1 flashcard study interface page

**File Size**: 91 KB

## 🚀 How to Use with Google Sheets

### Step 1: Import to Google Sheets

1. Go to [Google Sheets](https://sheets.google.com)
2. Click **"Blank"** to create a new spreadsheet
3. Click **File → Import**
4. Click **"Upload"** tab
5. Drag `content-audit.csv` or click **"Browse"** to select it
6. Choose these import settings:
   - **Import location**: "Replace spreadsheet"
   - **Separator type**: "Comma"
   - **Convert text to numbers, dates**: Unchecked
7. Click **"Import data"**

### Step 2: Format Your Sheet

Once imported, I recommend:

1. **Freeze the header row**:
   - Click on row 2
   - Click **View → Freeze → 1 row**

2. **Add filters**:
   - Select entire sheet (Ctrl+A or Cmd+A)
   - Click **Data → Create a filter**

3. **Color-code priorities** (optional):
   - Select column K (Priority)
   - Click **Format → Conditional formatting**
   - Add rules for "High", "Medium", "Low"

4. **Add checkboxes for "Reviewed" column**:
   - Column H already has FALSE values
   - Select column H (click column header)
   - Click **Insert → Checkbox**

## 📝 Column Guide

| Column | What It Tracks | How to Use |
|--------|---------------|------------|
| **Page Type** | Static/Course/Category/Topic | Filter to focus on specific page types |
| **Course** | Course name | Filter by course to review one subject at a time |
| **Category** | Category name | See which category a page belongs to |
| **Page Name** | Display name | The actual title of the page |
| **URL** | Full URL | Click to open and review the page |
| **Problem Count** | # of practice problems | Identify pages that might need more problems |
| **Flashcard Count** | # of flashcards | Identify pages that might need more flashcards |
| **Reviewed** | Checkbox | Check when you've reviewed this page |
| **Quality Score (1-10)** | Your rating | Rate each page's quality after review |
| **Notes** | Your comments | Add specific improvements needed |
| **Priority** | High/Medium/Low | Prioritize which pages to improve first |
| **Date Reviewed** | Date you reviewed | Track when you last looked at it |

## 🎯 Suggested Workflow

### Phase 1: Quick Scan (1-2 days)
1. Filter by **Page Type = "Static"**
2. Review all 6 static pages first
3. Check boxes and add priority ratings

### Phase 2: Course Pages (1 day)
1. Filter by **Page Type = "Course"**
2. Review all 20 course landing pages
3. Ensure consistent formatting and descriptions

### Phase 3: Category Pages (2-3 days)
1. Filter by **Page Type = "Category"**
2. Review all 137 category pages
3. Check organization and navigation

### Phase 4: Topic Pages (Ongoing)
1. Filter by **Course** (do one course at a time)
2. Within each course, filter by **Category**
3. Review topics systematically

**Pro Tip**: Start with your highest-traffic courses (use Google Analytics data)

### Phase 5: Improvements (Ongoing)
1. Filter by **Priority = "High"**
2. Sort by **Quality Score** (lowest first)
3. Work through improvements systematically

## 📈 Progress Tracking

Use Google Sheets formulas to track progress:

**Completion Rate**:
```
=COUNTIF(H:H,TRUE)/COUNTA(H:H)*100
```

**Average Quality Score**:
```
=AVERAGE(I:I)
```

**High Priority Items Remaining**:
```
=COUNTIFS(K:K,"High",H:H,FALSE)
```

## 🎨 Recommended Filters

### Focus on High-Value Pages
1. Filter **Problem Count** > 0
2. Filter **Flashcard Count** > 0
3. These are your most complete pages

### Find Pages Needing Content
1. Filter **Problem Count** = 0 OR **Flashcard Count** = 0
2. Add "Priority = High" for pages that need content

### Review by Subject
1. Filter by specific **Course** (e.g., "AP Calculus AB/BC")
2. Work through one subject completely before moving on

## 💡 Tips for Efficient Review

1. **Open in split screen**: Google Sheet on left, website on right
2. **Review 10-20 pages per session**: Don't burn out
3. **Use the Notes column**: Be specific about improvements
4. **Set quality standards**: Define what "10/10" looks like for your site
5. **Track improvements**: Update the Date Reviewed when you make changes

## 🔄 Updating the CSV

If you add new content later, regenerate the CSV:

```bash
npx tsx scripts/generate-content-audit.ts > content-audit.csv
```

Then re-import to Google Sheets (it will overwrite your progress, so export first!)

## 📊 Sample Quality Criteria

**Score 10/10** - Perfect:
- Clear, comprehensive content
- All examples work correctly
- No typos or errors
- Proper formatting
- Good visual hierarchy
- Sufficient practice problems/flashcards

**Score 7-9/10** - Good:
- Content is solid but could be expanded
- Minor formatting improvements needed
- Could use 1-2 more examples

**Score 4-6/10** - Needs Work:
- Content is thin or unclear
- Missing examples
- Formatting issues
- Needs more problems/flashcards

**Score 1-3/10** - Major Issues:
- Incorrect information
- Severely lacking content
- Broken formatting
- Needs complete rewrite

## 🎯 Priority Guidelines

**High Priority**:
- High-traffic pages (check Google Analytics)
- Core curriculum topics (limits, derivatives, etc.)
- Pages with errors or broken content
- Landing pages (homepage, course pages)

**Medium Priority**:
- Supporting topics
- Category pages
- Pages with lower but steady traffic

**Low Priority**:
- Supplementary topics
- Rarely visited pages
- Nice-to-have improvements

---

## 📁 File Location

The CSV file is saved here:
```
/Users/brendancusack/Desktop/AP Calculus Website - Ad Revenue Based/content-audit.csv
```

You can find it on your Desktop in the project folder!

---

**Happy auditing!** 🚀

Feel free to customize the spreadsheet however works best for your workflow. The goal is to systematically improve every page over time.
