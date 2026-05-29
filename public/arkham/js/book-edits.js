function applyBookEdits(books, editsById) {
  if (!Array.isArray(books)) {
    return [];
  }
  if (!editsById || typeof editsById !== "object") {
    return books.slice();
  }

  return books.map((book) => {
    const edit = editsById[String(book.id)] || editsById[book.id];
    if (!edit) {
      return book;
    }
    const merged = { ...book, ...edit };
    if (edit.coverImageFile) {
      merged.coverEditPath = edit.coverImageFile;
    }
    return merged;
  });
}
