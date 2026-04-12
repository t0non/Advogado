const fs = require('fs');
const path = require('path');

// Ler o arquivo CSS
const cssPath = path.join(__dirname, 'out/_next/static/css/a23ec6739b609a38.css');
const cssContent = fs.readFileSync(cssPath, 'utf8');

// Ler o arquivo HTML
const htmlPath = path.join(__dirname, 'out/index.html');
let htmlContent = fs.readFileSync(htmlPath, 'utf8');

// Encontrar onde inserir o CSS (após a tag <head>)
const headMatch = htmlContent.match(/<head[^>]*>/);
if (headMatch) {
  const insertPosition = htmlContent.indexOf(headMatch[0]) + headMatch[0].length;
  
  // Inserir o CSS inline
  const cssInjection = `\n  <style>\n${cssContent}\n  </style>\n`;
  
  htmlContent = htmlContent.slice(0, insertPosition) + cssInjection + htmlContent.slice(insertPosition);
  
  // Salvar o arquivo HTML corrigido
  fs.writeFileSync(htmlPath, htmlContent);
  
  console.log('CSS injetado com sucesso no HTML!');
} else {
  console.log('Tag <head> não encontrada');
}
