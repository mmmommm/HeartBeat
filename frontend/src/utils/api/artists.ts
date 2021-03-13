import fs from 'fs-extra';
import path from 'path';
import matter from 'gray-matter';

const artistsDirectory = path.join(process.cwd(), "content/artists")

export const getArtist = (name: string) => {
  const fullPath = path.join(
    artistsDirectory,
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