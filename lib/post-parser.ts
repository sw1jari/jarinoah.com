// import { unified } from 'unified'
// import remarkParse from 'remark-parse'
// import remarkRehype from 'remark-rehype'

import fs from "fs";

export function foo() {
  const postsDir = process.cwd() + '/_posts'
  console.log(postsDir);
  fs.readdirSync(postsDir);
  console.log(postsDir);
}

// function parsePost() {
//   const file = unified()
//     .use(remarkParse)
//     .use(remarkRehype)
//     .process('# Hello')
  
//   console.dir(file)
//   console.log(file)

//   console.error(String(file))
// }