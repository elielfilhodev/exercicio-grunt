# Exercício Grunt

Este projeto demonstra a configuração e uso do Grunt para automação de tarefas de build.

## Funcionalidades

- ✅ Compilação de arquivos LESS para CSS
- ✅ Compressão de arquivos JavaScript
- ✅ Watch para monitoramento de mudanças
- ✅ Configuração completa do Gruntfile

## Estrutura do Projeto

```
exercicio_grunt/
├── Gruntfile.js          # Configuração do Grunt
├── package.json          # Dependências do projeto
├── index.html           # Página de demonstração
├── less/
│   └── style.less       # Arquivo LESS fonte
├── css/
│   ├── style.css        # CSS compilado (desenvolvimento)
│   └── style.min.css    # CSS compilado e minificado (produção)
└── js/
    ├── script.js        # JavaScript fonte
    └── script.min.js    # JavaScript comprimido
```

## Instalação

1. Instale as dependências:
```bash
npm install
```

## Uso

### Executar todas as tarefas
```bash
npx grunt
```

### Executar tarefas de produção
```bash
npx grunt build
```

### Modo desenvolvimento com watch
```bash
npx grunt dev
```

## Tarefas Configuradas

- **less:development** - Compila LESS para CSS (sem compressão)
- **less:production** - Compila LESS para CSS minificado
- **uglify** - Comprime arquivos JavaScript
- **watch** - Monitora mudanças nos arquivos

## Branch

O projeto está na branch `exercicio_grunt` conforme solicitado.
