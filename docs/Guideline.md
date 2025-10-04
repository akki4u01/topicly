## Docusaurus Front Matter
---
id: Guideline-ID       # Unique page id
title: Guideline-title    # Page title
sidebar_label: Guideline-sidebar
description: Guideline-description markdown guidelines.
---

# Guideline comment
Guideline comments

# Headings
# H1 - Main Page Title
## H2 - Section Title
### H3 - Subsection
#### H4 - Sub-subsection

## Paragraphs
This is the first paragraph.
This is another paragraph.

## Bold & Italics
**bold text**  
*italic text*  
***bold and italic***  

## Lists
1. First item
2. Second item
3. Third item

## Bullet Lists:
- Item A
- Item B
  - Subitem B1
  - Subitem B2

## Nested List
1. Main item
   - Subitem
   - Subitem
2. Another main item

## Links & Images
[Packet Traveling - How Packets Move Through a Network](https://youtu.be/rYodcvhh7b8?si=SkSBFYnsevx4COBw)

## Code
Use `npm start` to run the project.

## Tables

| Name       | Role       | Location |
|------------|------------|---------|
| Alice      | Developer  | UK      |
| Bob        | Tester     | India   |

## Blockquotes
> This is a blockquote.
> It can span multiple lines.

## Organizing Content in Docusaurus

Put Markdown files inside the `docs` folder.  
Sidebar configuration is in **sidebars.js**:

```javascript
module.exports = {
  mySidebar: [
    'intro',               // docs/intro.md
    {
      type: 'category',
      label: 'Guidelines',
      items: ['guidelines/markdown', 'guidelines/layout'],
    },
  ],
};


Use folders to structure by category. E.g., docs/guidelines/markdown.md