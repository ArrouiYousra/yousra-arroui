#!/bin/bash
# Script d'optimisation des images
# Nécessite: imagemagick ou optipng/jpegoptim

echo 'Optimisation des images...'

# Vérifier les outils disponibles
if command -v convert &> /dev/null; then
    echo 'Utilisation de ImageMagick...'
    find public/assets -type f -name '*.png' -exec convert {} -strip -quality 85 {} \;
    find public/assets -type f \( -name '*.jpg' -o -name '*.jpeg' \) -exec convert {} -strip -quality 85 {} \;
elif command -v optipng &> /dev/null && command -v jpegoptim &> /dev/null; then
    echo 'Utilisation de optipng et jpegoptim...'
    find public/assets -type f -name '*.png' -exec optipng -o2 {} \;
    find public/assets -type f \( -name '*.jpg' -o -name '*.jpeg' \) -exec jpegoptim --max=85 {} \;
else
    echo 'Aucun outil d'\''optimisation trouvé. Installez ImageMagick ou optipng/jpegoptim.'
    echo 'Pour installer: sudo apt-get install imagemagick optipng jpegoptim'
fi

echo 'Optimisation terminée!'
