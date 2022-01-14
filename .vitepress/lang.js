(() => {
  console.log(window)
  // const { supportedLangs } = window
  const cacheKey = 'vuetom_pre_lang'
  const defaultLang = 'en-US'
  // docs supported languages
  // const langAlias = {
  //   zh: 'zh-CN',
  //   en: 'en-US'
  // }
  let userPreferredLang = localStorage.getItem(cacheKey) || defaultLang
  // const language = langAlias[userPreferredLang]
  //   || (supportedLangs.includes(userPreferredLang)
  //     ? userPreferredLang
  //     : defaultLang)
  localStorage.setItem(cacheKey, userPreferredLang)
  // userPreferredLang = language
  if (!location.pathname.startsWith(`/${userPreferredLang}`)) {
    const toPath = [`/${userPreferredLang}`]
      .concat(location.pathname.split('/').slice(2))
      .join('/')
    location.pathname = toPath.endsWith('.html') || toPath.endsWith('/')
      ? toPath
      : toPath.concat('/')
  }
})()
