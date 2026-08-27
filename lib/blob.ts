/**
 * Vercel exports the Blob token as BLOB_READ_WRITE_TOKEN by default, but a
 * store connected with a custom environment-variable prefix exports
 * <PREFIX>_READ_WRITE_TOKEN instead. Accept either so the store works however
 * it was linked.
 */
export function blobToken(): string | undefined {
  const direct = process.env.BLOB_READ_WRITE_TOKEN;
  if (direct) return direct;

  for (const [name, value] of Object.entries(process.env)) {
    if (name.endsWith("_READ_WRITE_TOKEN") && value) return value;
  }
  return undefined;
}

export function hasBlobStorage(): boolean {
  return Boolean(blobToken());
}

/** Name of the variable the token came from, for diagnostics only. */
export function blobTokenSource(): string | null {
  if (process.env.BLOB_READ_WRITE_TOKEN) return "BLOB_READ_WRITE_TOKEN";
  for (const [name, value] of Object.entries(process.env)) {
    if (name.endsWith("_READ_WRITE_TOKEN") && value) return name;
  }
  return null;
}
