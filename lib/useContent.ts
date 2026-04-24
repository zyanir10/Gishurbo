import contentData from "./content.json";

const content = contentData as Record<string, string>;

export function getContent(key: string): string {
  return content[key] ?? key;
}
