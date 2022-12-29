export function formatDate(date: Date): string {
  return new Date(date).toLocaleDateString("en-us", { year: "numeric", month: "long" });
}
