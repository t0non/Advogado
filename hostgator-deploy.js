const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('Iniciando o build seguro para HostGator (Modo: site_data)...');

// Primeiro: Executa o build padrao do Next.js
try {
  execSync('npm run build', { stdio: 'inherit' });
} catch (error) {
  console.error('Falha no build do Next.js.');
  process.exit(1);
}

const outDir = path.join(__dirname, 'out');
const nextDir = path.join(outDir, '_next');
const siteDataDir = path.join(outDir, 'site_data'); // Nome mais neutro que 'assets'

if (!fs.existsSync(outDir)) {
  console.error('A pasta "out" não foi encontrada.');
  process.exit(1);
}

// 1. Renomeia _next para site_data
if (fs.existsSync(nextDir)) {
  if (fs.existsSync(siteDataDir)) {
    fs.rmSync(siteDataDir, { recursive: true, force: true });
  }
  fs.renameSync(nextDir, siteDataDir);
  console.log('✔️ Pasta _next renomeada para site_data.');
}

// 2. Função para substituir caminhos
const replaceInFiles = (dir) => {
  const files = fs.readdirSync(dir);
  
  for (const file of files) {
    const fullPath = path.join(dir, file);
    
    if (fs.statSync(fullPath).isDirectory()) {
       replaceInFiles(fullPath);
    } else {
      const ext = path.extname(fullPath);
      if (['.html', '.js', '.css', '.json', '.txt', '.xml'].includes(ext)) {
         let content = fs.readFileSync(fullPath, 'utf8');
         let originalContent = content;
         
         // Substitui caminhos para site_data (relativo)
         content = content.replace(/\"\/_next\//g, '"site_data/');
         content = content.replace(/\'\/_next\//g, "'site_data/");
         content = content.replace(/\"\/assets\//g, '"site_data/');
         content = content.replace(/\'\/assets\//g, "'site_data/");
         
         // Sem aspas para o JS
         content = content.replace(/_next\/static/g, 'site_data/static');
         content = content.replace(/\\\/_next\\\//g, 'site_data\\/');

         if (content !== originalContent) {
           fs.writeFileSync(fullPath, content, 'utf8');
         }
      }
    }
  }
}

replaceInFiles(outDir);
console.log('✔️ Todas as referências atualizadas para site_data.');

console.log('🚀 Build concluído. Use o script arrumar-permissoes.php no servidor!');
