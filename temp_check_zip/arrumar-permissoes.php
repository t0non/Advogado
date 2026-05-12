<?php
/**
 * Script de emergência para corrigir permissões na HostGator.
 * Este script aplica 755 para pastas e 644 para arquivos recursivamente.
 */

function corrigirPermissoes($diretorio) {
    if (!is_dir($diretorio)) return;

    $itens = scandir($diretorio);
    foreach ($itens as $item) {
        if ($item == '.' || $item == '..') continue;
        
        $caminhoCompleto = $diretorio . DIRECTORY_SEPARATOR . $item;
        
        if (is_dir($caminhoCompleto)) {
            // Define pasta como 755
            chmod($caminhoCompleto, 0755);
            echo "Pasta: " . $caminhoCompleto . " [OK 755]<br>";
            corrigirPermissoes($caminhoCompleto);
        } else {
            // Define arquivo como 644
            chmod($caminhoCompleto, 0644);
            echo "Arquivo: " . $caminhoCompleto . " [OK 644]<br>";
        }
    }
}

echo "<h2>Iniciando Correção de Permissões...</h2>";
echo "<p>Aplicando 755 em pastas e 644 em arquivos.</p><hr>";

// Começa do diretório atual
chmod('./', 0755);
corrigirPermissoes('./');

echo "<hr><h3>Tudo pronto! Tente atualizar o site agora.</h3>";
echo "<p><strong>SEGURANÇA:</strong> Após o site funcionar, delete este arquivo (arrumar-permissoes.php) do seu servidor.</p>";
?>
