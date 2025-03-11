import fa from './locales/fa-IR.json';
import en from './locales/en-US.json';

export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'fa',
  messages: { en, fa },
}));
