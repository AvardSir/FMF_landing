import { readFileSync, writeFileSync, readdirSync, statSync } from 'fs';
import { join } from 'path';

const srcDir = './src';
const publicDir = './public';

// Получаем список всех файлов в public (чтобы проверять, существует ли файл)
function getPublicFiles() {
  const files = [];
  function walk(dir, base = '') {
    const entries = readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
      const full = join(dir, entry.name);
      const rel = join(base, entry.name).replace(/\\/g, '/');
      if (entry.isDirectory()) {
        walk(full, rel);
      } else {
        files.push(rel);
      }
    }
  }
  if (existsSync(publicDir)) walk(publicDir);
  return files;
}

function existsSync(p) {
  try { return statSync(p).isFile() || statSync(p).isDirectory(); } catch { return false; }
}

const publicFiles = getPublicFiles();

function fixFile(filePath) {
  let content = readFileSync(filePath, 'utf-8');
  let changed = false;

  // 1. Замена src="public/..." → src="/..."
  const newContent1 = content.replace(
    /(src|href)=["']public\//g,
    '$1="/'
  );
  if (newContent1 !== content) { changed = true; content = newContent1; }

  // 2. Замена url('public/...') → url('/...')
  const newContent2 = content.replace(
    /url\(["']?public\//g,
    'url(/'
  );
  if (newContent2 !== content) { changed = true; content = newContent2; }

  // 3. Поиск импортов вида import X from "../../../path/to/file.ext"
  //    и замена их на константу с путём /file.ext (если файл есть в public)
  const importRegex = /import\s+(\w+)\s+from\s+["']([^"']+)["']/g;
  let match;
  let newContent = content;
  while ((match = importRegex.exec(content)) !== null) {
    const varName = match[1];
    let importPath = match[2];

    // Если путь содержит ../ и не начинается с public, пробуем найти файл в public
    if (importPath.includes('../') && !importPath.startsWith('public')) {
      // Извлекаем имя файла (последний сегмент)
      const fileName = importPath.split('/').pop();
      // Проверяем, есть ли такой файл в public (игнорируем регистр?)
      const found = publicFiles.find(f => f.endsWith(fileName));
      if (found) {
        // Заменяем импорт на константу с путём
        const absolutePath = '/' + found;
        const replacement = `const ${varName} = "${absolutePath}";`;
        newContent = newContent.replace(match[0], replacement);
        changed = true;
      }
    }
  }

  if (changed) {
    writeFileSync(filePath, newContent, 'utf-8');
    console.log(`✅ Исправлен: ${filePath}`);
  }
}

function walk(dir) {
  const entries = readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(full);
    } else if (/\.(jsx?|tsx?)$/.test(entry.name)) {
      fixFile(full);
    }
  }
}

if (existsSync(srcDir)) {
  walk(srcDir);
  console.log('🎉 Все файлы обработаны!');
} else {
  console.log('❌ Папка src не найдена');
}