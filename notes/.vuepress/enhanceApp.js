const createFooterNode = () => {
  var f = document.createElement('div');
  f.id = "footer"
  f.style = "padding: 2.5rem; border-top: 1px solid #eaecef; text-align: center; color: #4e6e8e;"
  f.innerHTML = '<a rel="license" href="http://creativecommons.org/licenses/by/4.0/">Creative Commons Attribution 4.0 International License</a> | Copyright © 2020-present Wisen Tanasa'
  return f
}

const appendCustomDoms = () => {
  if (document.querySelector('main')) {
    if (!document.querySelector("#footer")) {
      document.querySelector('main').appendChild(createFooterNode())
    }
  }
}

export default ({
  Vue, // the version of Vue being used in the VuePress app
  options, // the options for the root Vue instance
  router, // the router instance for the app
  siteData, // site metadata
  isServer // is this enhancement applied in server-rendering or client
}) => {
  if (!isServer && typeof window !== 'undefined') {
    window.onload = () => {
      appendCustomDoms()
    };
    router.afterEach(async (to, from) => {
      Vue.nextTick(() => appendCustomDoms())
    });
  }
}