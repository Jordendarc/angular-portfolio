import { en } from './en'
import { ja } from './ja'
import type { Content } from './types'

export const locales = ['en', 'ja'] as const
export type Locale = (typeof locales)[number]

export const localeNames: Record<Locale, string> = {
  en: 'EN',
  ja: '日本語',
}

const content: Record<Locale, Content> = { en, ja }

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value)
}

export function getContent(locale: Locale): Content {
  return content[locale]
}
