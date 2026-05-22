/**
 * db/index.ts — single import point for all data queries.
 *
 * Today this uses local typed arrays (zero-latency, works offline).
 * Swap any function body to a Supabase .from() call when you connect a DB
 * — the component APIs stay identical.
 */

export * from "./types";
export * from "./capabilities";
export * from "./about";