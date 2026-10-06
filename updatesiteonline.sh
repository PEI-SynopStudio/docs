#!/bin/bash

# ==========================================
# Projeto: SynopStudio (PEI)
# Descrição: Script de automação para build e deploy no GitHub Pages
# ==========================================

# Deve correr dentro da pasta docs/frontend
# Verificar no github se dá pass. Caso contrário o deploy fracassou...

npm run build

npx gh-pages -d build -b gh-pages
