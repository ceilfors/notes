const createFooterNode = () => {
  var n = document.createElement('div');
  n.id = "footer"
  n.style = "padding: 2.5rem; border-top: 1px solid #eaecef; text-align: center; color: #4e6e8e;"
  n.innerHTML = '<a rel="license" href="http://creativecommons.org/licenses/by/4.0/">Creative Commons Attribution 4.0 International License</a> | Copyright © 2020-present Wisen Tanasa'
  return n
}

const createBacklinkHelpNode = () => {
  var n = document.createElement('span');
  n.id = "backlinks-help"
  n.classList = "help-tip"
  n.innerHTML = '<p>These are other notes that link back to this note</p>'
  return n
}

const appendCustomDoms = () => {
  if (document.querySelector('main')) {
    if (!document.querySelector("#footer")) {
      document.querySelector('main').appendChild(createFooterNode())
    }
    if (!document.querySelector("#backlinks-help") && document.querySelector("#backlinks")) {
      document.querySelector('#backlinks').appendChild(createBacklinkHelpNode())
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