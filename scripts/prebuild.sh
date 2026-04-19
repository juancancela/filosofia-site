#!/bin/bash
# Copies content from the sibling filosofia repo into public/content/.
# Only needed for local development after a fresh clone.
# On Vercel, content is already committed in the repo.

CONTENT_DIR="public/content"

if [ -d "$CONTENT_DIR/autores" ]; then
  echo "Content already present, skipping."
  exit 0
fi

FILOSOFIA_REPO="${FILOSOFIA_REPO_PATH:-../filosofia}"

if [ ! -d "$FILOSOFIA_REPO/contenido" ]; then
  echo "No content found and filosofia repo not available at $FILOSOFIA_REPO"
  echo "Content will be missing. Set FILOSOFIA_REPO_PATH if needed."
  exit 0
fi

echo "Copying content from $FILOSOFIA_REPO..."
mkdir -p "$CONTENT_DIR"
cp -r "$FILOSOFIA_REPO/contenido/autores" "$CONTENT_DIR/autores"
cp -r "$FILOSOFIA_REPO/contenido/clases" "$CONTENT_DIR/clases"
mkdir -p "$CONTENT_DIR/clases-notas"
cp -r "$FILOSOFIA_REPO/clases/"* "$CONTENT_DIR/clases-notas/" 2>/dev/null || true
find "$CONTENT_DIR" -name '.DS_Store' -delete 2>/dev/null || true
echo "Done. $(du -sh "$CONTENT_DIR" | cut -f1) copied."
