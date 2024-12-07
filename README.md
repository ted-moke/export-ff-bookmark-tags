# Bookmark Tag Processor

A simple Node.js script that processes HTML bookmark files and appends tags to bookmark titles.

## Description

This script takes an HTML bookmarks file (like those exported from browsers) and modifies bookmark titles to include their tags at the end. It's useful for making tags visible in the bookmark title itself.

For example, a bookmark like this:

```html
<DT><A HREF="..." TAGS="chatgpt,dev tools">Using ChatGPT</A>
```

Will become:

```html
<DT><A HREF="..." TAGS="chatgpt,dev tools">Using ChatGPT Tags=chatgpt,dev_tools</A>
```

## Features

- Preserves all original HTML attributes and structure
- Only modifies bookmarks that have tags
- Converts spaces in tags to underscores
- Keeps commas as separators
- Creates a new file, leaving the original unchanged

## Usage

1. Make sure you have Node.js installed
2. Save your bookmarks as HTML from your browser
3. Run the script:

```bash
node processBookmarks.js <input-file> <output-file-name (optional)>
```

## Parameters

- First argument: Input file path (default: `bookmarks.html`)
- Second argument: Output file path (default: `input-file-name-processed.html`)

## License

MIT
