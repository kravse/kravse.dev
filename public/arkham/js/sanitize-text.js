function looksLikeHtml(value) {
  return /<[a-z][\s\S]*>/i.test(String(value || ""));
}

function htmlToPlainText(value) {
  const input = String(value ?? "");
  if (!input) {
    return "";
  }
  if (!looksLikeHtml(input)) {
    return input.replace(/\u00a0/g, " ").replace(/\r\n/g, "\n");
  }

  const doc = new DOMParser().parseFromString(input, "text/html");
  doc.querySelectorAll("script, style, noscript").forEach((node) => {
    node.remove();
  });

  const blockBreakTags = new Set([
    "P",
    "DIV",
    "LI",
    "TR",
    "BLOCKQUOTE",
    "SECTION",
    "ARTICLE",
    "H1",
    "H2",
    "H3",
    "H4",
    "H5",
    "H6",
  ]);

  function extractText(node) {
    if (node.nodeType === Node.TEXT_NODE) {
      return node.textContent;
    }
    if (node.nodeType !== Node.ELEMENT_NODE) {
      return "";
    }

    const tag = node.tagName;
    if (tag === "BR") {
      return "\n";
    }

    let text = "";
    for (const child of node.childNodes) {
      text += extractText(child);
    }

    if (blockBreakTags.has(tag)) {
      return `${text.replace(/\s+$/g, "")}\n\n`;
    }

    return text;
  }

  return extractText(doc.body)
    .replace(/\u00a0/g, " ")
    .replace(/\r\n/g, "\n")
    .replace(/[ \t]+\n/g, "\n")
    .replace(/\n[ \t]+/g, "\n")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

function sanitizeSingleLineText(value) {
  return htmlToPlainText(value).replace(/\s+/g, " ").trim();
}

function sanitizeUrlInput(value) {
  const input = String(value ?? "").trim();
  if (!input) {
    return "";
  }
  if (!looksLikeHtml(input)) {
    return input;
  }

  const doc = new DOMParser().parseFromString(input, "text/html");
  const href = doc.querySelector("a")?.getAttribute("href");
  if (href) {
    return href.trim();
  }
  return sanitizeSingleLineText(input);
}

function insertTextAtSelection(element, text) {
  const start = element.selectionStart ?? element.value.length;
  const end = element.selectionEnd ?? element.value.length;
  const value = element.value;
  element.value = `${value.slice(0, start)}${text}${value.slice(end)}`;
  const pos = start + text.length;
  element.setSelectionRange(pos, pos);
}

function sanitizeGoodreadsUrlInput(value) {
  const url = sanitizeUrlInput(value);
  if (!url) {
    return "";
  }
  try {
    const host = new URL(url).hostname.toLowerCase();
    if (!host.endsWith("goodreads.com")) {
      return "";
    }
  } catch {
    return "";
  }
  return url;
}

function sanitizeEditFieldPaste(event) {
  const html = event.clipboardData?.getData("text/html");
  if (!html || !looksLikeHtml(html)) {
    return;
  }

  event.preventDefault();
  const cleaned = event.target.tagName === "TEXTAREA"
    ? htmlToPlainText(html)
    : event.target.name === "wikipediaUrl"
      ? sanitizeUrlInput(html)
      : event.target.name === "goodreadsUrl"
        ? sanitizeGoodreadsUrlInput(html)
        : sanitizeSingleLineText(html);
  insertTextAtSelection(event.target, cleaned);
}

function bindEditFieldSanitizers(form) {
  form.querySelectorAll('input[type="text"], input[type="url"], textarea').forEach((field) => {
    field.addEventListener("paste", sanitizeEditFieldPaste);
  });
}
