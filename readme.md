<div align="center">
  <strong>📝 Convert Markdown Syntax to Backlog Syntax</strong>
</div>
<br />

## Getting Started
Just Do It

```
echo '## Hello World' > sample.md

npx md2bg sample.md > sample.backlog
```

## Supported Syntax
md2bg has some restriction because of Backlog syntax.  
See [here](https://github.com/syntax-tree/mdast) and check markdown AST.  

- [x] Parent
- [x] Literal
- [x] Root
- [x] Heading
- [x] Code
- [x] Text
- [x] Emphasis
- [x] Strong
- [x] Delete
- [x] InlineCode
- [x] Break
- [x] Link
- [x] Blockquote
- [x] Paragraph
- [x] Table
- [x] TableRow
- [x] TableCell
- [x] List
- [x] ListItem
- [ ] ThematicBreak
- [ ] HTML
- [ ] YAML
- [ ] Definition
- [ ] FootnoteDefinition
- [ ] Image
- [ ] LinkReference
- [ ] ImageReference
- [ ] Footnote
- [ ] FootnoteReferenc
