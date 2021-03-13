import markdownIt from "markdown-it";

const md = markdownIt({
  breaks: true,
  linkify: true,
});

md.linkify.set({ fuzzyLink: false });

export const markdownToHtml = (text: string): string => {
  if (!(text && text.length)) return '';
  return md.render(text);
};