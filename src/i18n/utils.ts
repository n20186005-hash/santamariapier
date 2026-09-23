export const LANGUAGES = ['zh', 'en', 'cri', 'pt', 'de', 'fr', 'es', 'it'] as const;
export type Lang = (typeof LANGUAGES)[number];
export const DEFAULT_LANG: Lang = 'en';
export const LANG_LABELS: Record<Lang, string> = { zh: '中', en: 'EN', cri: 'CV', pt: 'PT', de: 'DE', fr: 'FR', es: 'ES', it: 'IT' };

export function getLangFromUrl(url: URL): Lang {
  const seg = url.pathname.split('/')[1];
  if (LANGUAGES.includes(seg as Lang)) return seg as Lang;
  return DEFAULT_LANG;
}
