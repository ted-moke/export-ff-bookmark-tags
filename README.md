# Export FF Bookmark Tags

A Node.js script that extracts tags from Firefox bookmarks and appends them to bookmark titles.

## Description

Since Firefox bookmarks support tags, but many other browsers do not, this script will extract the tags from the TAGS attribute and append them to the bookmark title so you can still search by them when importing into another browser.

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

1. Make sure you have Node.js installed `node -v` If not, install it from [nodejs.org](https://nodejs.org/)
2. Export your bookmarks as HTML from your Firefox browser
3. Run the script:

```bash
node processBookmarks.js <input-file> <output-file-name (optional)>
```

## Parameters

- First argument: Input file path (default: `bookmarks.html`)
- Second argument: Output file path (default: `input-file-name-processed.html`)

## License

MIT
