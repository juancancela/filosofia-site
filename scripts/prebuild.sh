#!/bin/bash
# Syncs content from the sibling filosofia repo into public/content/.
# Uses rsync for incremental updates (only copies new/changed files).
# On Vercel, content is already committed in the repo.

CONTENT_DIR="public/content"
FILOSOFIA_REPO="${FILOSOFIA_REPO_PATH:-../filosofia}"

if [ ! -d "$FILOSOFIA_REPO/contenido" ]; then
  if [ -d "$CONTENT_DIR/autores" ]; then
    echo "Filosofia repo not available, using existing content."
    exit 0
  fi
  echo "No content found and filosofia repo not available at $FILOSOFIA_REPO"
  echo "Content will be missing. Set FILOSOFIA_REPO_PATH if needed."
  exit 0
fi

mkdir -p "$CONTENT_DIR/autores" "$CONTENT_DIR/clases" "$CONTENT_DIR/clases-notas"

echo "Syncing content from $FILOSOFIA_REPO..."
rsync -av --delete --exclude='.DS_Store' "$FILOSOFIA_REPO/contenido/autores/" "$CONTENT_DIR/autores/"
rsync -av --delete --exclude='.DS_Store' "$FILOSOFIA_REPO/contenido/clases/" "$CONTENT_DIR/clases/"
rsync -av --exclude='.DS_Store' "$FILOSOFIA_REPO/clases/" "$CONTENT_DIR/clases-notas/" 2>/dev/null || true
echo "Done. $(du -sh "$CONTENT_DIR" | cut -f1) total content."
