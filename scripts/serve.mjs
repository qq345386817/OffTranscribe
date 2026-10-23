import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { resolve, extname, sep } from 'node:path';
const root = resolve(new URL('../dist/', import.meta.url).pathname);
const mime = { '.html':'text/html; charset=utf-8', '.css':'text/css; charset=utf-8', '.png':'image/png', '.xml':'application/xml', '.txt':'text/plain; charset=utf-8' };
createServer(async (req, res) => {
  try {
    const path = decodeURIComponent(new URL(req.url, 'http://localhost').pathname);
    let file = resolve(root, `.${path}`);
    if (file !== root && !file.startsWith(root + sep)) throw Error('Path');
    if ((await stat(file)).isDirectory()) file = resolve(file, 'index.html');
    res.writeHead(200, { 'Content-Type': mime[extname(file)] || 'application/octet-stream' });
    res.end(await readFile(file));
  } catch {
    res.writeHead(404, { 'Content-Type':'text/html; charset=utf-8' });
    res.end(await readFile(resolve(root,'404.html')));
  }
}).listen(Number(process.env.PORT || 4173), '127.0.0.1', () => console.log(`Preview http://127.0.0.1:${process.env.PORT || 4173}`));
