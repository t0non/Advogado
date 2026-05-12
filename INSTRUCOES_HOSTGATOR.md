# Como Subir seu Site Next.js na HostGator - Guia Passo a Passo

## Preparação Concluída

Seu site Next.js foi configurado com sucesso para deploy estático na HostGator! Os arquivos estão na pasta `out/`, o `.htaccess` foi criado e o CSS foi injetado diretamente no HTML para garantir compatibilidade total.

## Arquivos para Upload

Você precisará fazer upload dos seguintes arquivos da pasta `out/`:

- **Todos os arquivos e pastas** dentro de `out/`
- **O arquivo `.htaccess`** (na raiz, junto com os outros arquivos)

## Método 1: Upload via cPanel (Recomendado)

### Passo 1: Acessar o cPanel
1. Faça login na sua conta HostGator
2. Procure por "cPanel" e clique para acessar
3. Na busca do cPanel, digite "File Manager" e clique

### Passo 2: Navegar até a Pasta Correta
1. No File Manager, clique em `public_html` (pasta principal do site)
2. **Importante**: Se quiser que o site seja o principal, apague todo o conteúdo atual de `public_html`
3. Se quiser instalar em uma subpasta, crie uma nova pasta (ex: `site-novo`)

### Passo 3: Fazer Upload dos Arquivos (Método ZIP - Recomendado)
1. **Use o arquivo `site-para-upload.zip`** que já foi criado
2. Clique no botão "Upload" no topo do File Manager
3. Selecione e faça upload do arquivo `site-para-upload.zip`
4. Após o upload completar, clique com o botão direito no arquivo zip
5. Selecione "Extract" (Extrair)
6. Confirme a extração - os arquivos serão descompactados em `public_html`

### Passo 4: Verificar Arquivos
1. Verifique se todos os arquivos foram extraídos corretamente:
   - `index.html` (página principal)
   - Pasta `_next/` (assets do Next.js)
   - Pasta `dashboard/` (página dashboard)
   - `.htaccess` (configuração do servidor)
   - `sitemap.xml` e `robots.txt` (SEO)

### Passo 4: Verificar Permissões
1. Selecione todos os arquivos
2. Clique com o botão direito > "Change Permissions"
3. Configure: 644 para arquivos e 755 para pastas
4. Ou use os valores padrão do cPanel

## Método 2: Upload via FTP

### Passo 1: Configurar Cliente FTP
1. Use FileZilla, WinSCP ou similar
2. Configure com seus dados FTP da HostGator:
   - Host: seu-domínio.com ou IP do servidor
   - Usuário: seu usuário FTP
   - Senha: sua senha FTP
   - Porta: 21 (FTP) ou 22 (SFTP)

### Passo 2: Conectar e Navegar
1. Conecte-se ao servidor
2. Navegue até a pasta `public_html`
3. Se for site principal, apague o conteúdo atual

### Passo 3: Upload dos Arquivos
1. Abra a pasta `out` localmente
2. Selecione todos os arquivos e pastas
3. Arraste para a pasta `public_html` no servidor
4. Aguarde o upload completar
5. Faça upload do arquivo `.htaccess` separadamente

## Pós-Upload - Verificações Importantes

### 1. Testar o Site
- Acesse `https://seu-dominio.com`
- Verifique se todas as páginas funcionam
- Teste os links internos

### 2. Verificar Arquivos Críticos
Confirme que estes arquivos foram enviados:
- `index.html` (página principal)
- `dashboard.html` (página dashboard)
- `.htaccess` (configuração do servidor)
- Pasta `_next/` (assets do Next.js)
- `sitemap.xml` e `robots.txt` (SEO)

### 3. Testar Redirecionamentos
- Teste acesso a `https://seu-dominio.com/dashboard`
- Verifique se o redirecionamento HTTPS funciona
- Confirme se as URLs amigáveis funcionam

## Possíveis Problemas e Soluções

### Erro 404 ou 500
1. Verifique se o `.htaccess` foi enviado corretamente
2. Confirme as permissões dos arquivos (644 para arquivos, 755 para pastas)
3. Verifique se todos os arquivos da pasta `out/` foram enviados

### Página em Branco
1. Verifique no console do navegador (F12) por erros JavaScript
2. Confirme se a pasta `_next/` foi enviada completamente
3. Teste limpar o cache do navegador

### Imagens Não Carregam
1. Verifique se as imagens em `public/` foram enviadas
2. Confirme as permissões das pastas de imagens

## Manutenção Futura

### Para Atualizar o Site:
1. Faça as alterações no seu projeto local
2. Execute `npm run build` novamente
3. Substitua os arquivos atualizados no servidor

### Backup Recomendado:
1. Antes de atualizações, faça backup dos arquivos atuais
2. Mantenha uma cópia do projeto local

## Suporte HostGator

Se precisar de ajuda:
- Chat ao vivo da HostGator
- Ticket de suporte
- Documentação: https://www.hostgator.com.br/help

---

**Seu site está pronto para ser publicado!** O build estático garante performance máxima e compatibilidade total com servidores compartilhados como os da HostGator.
