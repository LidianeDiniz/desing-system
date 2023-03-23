/* eslint-disable camelcase */
'use strict'
const __defProp = Object.defineProperty
const __getOwnPropDesc = Object.getOwnPropertyDescriptor
const __getOwnPropNames = Object.getOwnPropertyNames
const __hasOwnProp = Object.prototype.hasOwnProperty
const __export = (target, all) => {
  for (const name in all)
    __defProp(target, name, { get: all[name], enumerable: true })
}
const __copyProps = (to, from, except, desc) => {
  if ((from && typeof from === 'object') || typeof from === 'function') {
    for (const key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, {
          get: () => from[key],
          enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable,
        })
  }
  return to
}
const __toCommonJS = (mod) =>
  __copyProps(__defProp({}, '__esModule', { value: true }), mod)

// src/index.tsx
// eslint-disable-next-line camelcase
const src_exports = {}
__export(src_exports, {
  App: () => App,
})
module.exports = __toCommonJS(src_exports)

// ../tokens/dist/index.mjs
const colors = {
  white: '#FFF',
  black: '#000',
  gray100: '#E1E1E6',
  gray200: '#A9A9B2',
  gray400: '#7C7C8A',
  gray500: '#505059',
  gray600: '#323238',
  gray700: '#29292E',
  gray800: '#202024',
  gray900: '#121214',
  ignite300: '#00B37E',
  ignite500: '#00875F',
  ignite700: '#015F43',
  ignite900: '#00291D',
  test: '#fff',
}

// src/index.tsx
const import_jsx_runtime = require('react/jsx-runtime')
function App() {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)('h1', {
    style: { color: colors.ignite300 },
    children: 'Hello World',
  })
}
// Annotate the CommonJS export names for ESM import in node:
0 &&
  (module.exports = {
    App,
  })
