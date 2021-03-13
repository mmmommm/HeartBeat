import fs from 'fs-extra';
import path from 'path';
import matter from 'gray-matter';

const songsDirectory = path.join(process.cwd(), "content/songs")

export const getSong = (name: string) => {
  const fullPath = path.join(
    songsDirectory,
    `${name.replace(/[/\\]/g, '')}.md`
  );
  let fileRaw;
  try {
    fileRaw = fs.readFileSync(fullPath, 'utf8');
  } catch (e) {
    return null;
  }
  const { data, content } = matter(fileRaw);
  return {
    content,
    ...data
  };
};