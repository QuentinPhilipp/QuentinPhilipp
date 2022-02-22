import { remark } from 'remark'
import html from 'remark-html';

// process markdown to html and return
export default async function markdownToHtml(markdown) {
  const result = await remark().use(html).process(markdown)
  return result.toString()
}
