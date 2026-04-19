#!/bin/bash
set -e

CONTENT_DIR="public/content"
FILOSOFIA_REPO="${FILOSOFIA_REPO_PATH:-../filosofia}"

if [ -n "$GITHUB_TOKEN" ] && [ ! -d "$FILOSOFIA_REPO" ]; then
  echo "Cloning filosofia repo..."
  git clone "https://${GITHUB_TOKEN}@github.com/juancancela/filosofia.git" /tmp/filosofia
  FILOSOFIA_REPO="/tmp/filosofia"
fi

if [ ! -d "$FILOSOFIA_REPO" ]; then
  echo "ERROR: filosofia repo not found at $FILOSOFIA_REPO"
  echo "Set FILOSOFIA_REPO_PATH or GITHUB_TOKEN env var"
  exit 1
fi

echo "Copying content from $FILOSOFIA_REPO..."
rm -rf "$CONTENT_DIR"
mkdir -p "$CONTENT_DIR"

cp -r "$FILOSOFIA_REPO/contenido/autores" "$CONTENT_DIR/autores"
cp -r "$FILOSOFIA_REPO/contenido/clases" "$CONTENT_DIR/clases"
mkdir -p "$CONTENT_DIR/clases-notas"
cp -r "$FILOSOFIA_REPO/clases/"* "$CONTENT_DIR/clases-notas/" 2>/dev/null || true

find "$CONTENT_DIR" -name '.DS_Store' -delete 2>/dev/null || true

echo "Content copied successfully."
du -sh "$CONTENT_DIR"
