(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{162:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return l}));var r=n(1),o=(n(0),n(170));const a={title:"Testing"},i={id:"guides/testing",title:"Testing",description:"## Testing Recoil Selectors outside of React",source:"@site/docs/guides/testing.md",permalink:"/docs/guides/testing",editUrl:"https://github.com/facebookexperimental/Recoil/edit/docs/docs/docs/guides/testing.md",sidebar:"docs",previous:{title:"Atom Effects",permalink:"/docs/guides/atom-effects"},next:{title:"Dev Tools",permalink:"/docs/guides/dev-tools"}},c=[{value:"Testing Recoil Selectors outside of React",id:"testing-recoil-selectors-outside-of-react",children:[{value:"Example: Jest unit testing selectors",id:"example-jest-unit-testing-selectors",children:[]}]}],s={rightToc:c};function l({components:e,...t}){return Object(o.b)("wrapper",Object(r.a)({},s,t,{components:e,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"testing-recoil-selectors-outside-of-react"},"Testing Recoil Selectors outside of React"),Object(o.b)("p",null,"It can be useful to manipulate and evaluate Recoil selectors outside of a React context for testing.  This can be done by working with a Recoil ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api-reference/core/Snapshot"}),Object(o.b)("inlineCode",{parentName:"a"},"Snapshot")),".  You can build a fresh snapshot using ",Object(o.b)("inlineCode",{parentName:"p"},"snapshot_UNSTABLE()")," and then use that ",Object(o.b)("inlineCode",{parentName:"p"},"Snapshot")," to evaluate selectors for testing."),Object(o.b)("h3",{id:"example-jest-unit-testing-selectors"},"Example: Jest unit testing selectors"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"const numberState = atom({key: 'Number', default: 0});\n\nconst multipliedState = selector({\n  key: 'MultipliedNumber',\n  get: ({get}) => get(numberState) * 100,\n});\n\ntest('Test multipliedState', () => {\n  const initialSnapshot = snapshot_UNSTABLE();\n  expect(mySnapshot.getLoadable(multipliedState).valueOrThrow()).toBe(0);\n\n  const testSnapshot = snapshot_UNSTABLE(({set}) => set(numberState, 1));\n  expect(mySnapshot.getLoadable(multipliedState).valueOrThrow()).toBe(100);\n})\n")))}l.isMDXComponent=!0},170:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return b}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),u=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},p=function(e){var t=u(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(n),f=r,b=p["".concat(i,".").concat(f)]||p[f]||d[f]||a;return n?o.a.createElement(b,c({ref:t},l,{components:n})):o.a.createElement(b,c({ref:t},l))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);