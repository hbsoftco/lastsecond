export const useT = (key: string, params?: Record<string, string>): string => {
  try {
    const nuxtApp = useNuxtApp();

    if (nuxtApp && nuxtApp.$i18n) {
      return nuxtApp.$i18n.t(key, params || {});
    }
    else {
      return `[translation missing: ${key}]`;
    }
  }
  catch (error) {
    return `[translation error: ${String(error)}]`;
  }
};
