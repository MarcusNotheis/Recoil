(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{120:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return i})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return s}));var r=a(1),n=(a(0),a(170));const o={title:"class Loadable",sidebar_label:"Loadable"},i={id:"api-reference/core/Loadable",title:"class Loadable",description:"A `Loadable` object represents the current state of a Recoil [atom](/docs/api-reference/core/atom) or [selector](/docs/api-reference/core/selector).  This state may either have a value available, may be in an error state, or may still be pending asynchronous resolution.  A `Loadable` has the following interface:",source:"@site/docs/api-reference/core/Loadable.md",permalink:"/docs/api-reference/core/Loadable",editUrl:"https://github.com/facebookexperimental/Recoil/edit/docs/docs/docs/api-reference/core/Loadable.md",sidebar_label:"Loadable",sidebar:"docs",previous:{title:"selector(options)",permalink:"/docs/api-reference/core/selector"},next:{title:"useRecoilState(state)",permalink:"/docs/api-reference/core/useRecoilState"}},l=[{value:"Example",id:"example",children:[]}],c={rightToc:l};function s({components:e,...t}){return Object(n.b)("wrapper",Object(r.a)({},c,t,{components:e,mdxType:"MDXLayout"}),Object(n.b)("p",null,"A ",Object(n.b)("inlineCode",{parentName:"p"},"Loadable")," object represents the current state of a Recoil ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api-reference/core/atom"}),"atom")," or ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api-reference/core/selector"}),"selector"),".  This state may either have a value available, may be in an error state, or may still be pending asynchronous resolution.  A ",Object(n.b)("inlineCode",{parentName:"p"},"Loadable")," has the following interface:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"state"),": The current state of the atom or selector.  Possible values are ",Object(n.b)("inlineCode",{parentName:"li"},"'hasValue'"),", ",Object(n.b)("inlineCode",{parentName:"li"},"'hasError'"),", or ",Object(n.b)("inlineCode",{parentName:"li"},"'loading'"),"."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"contents"),": The value represented by this ",Object(n.b)("inlineCode",{parentName:"li"},"Loadable"),".  If the state is ",Object(n.b)("inlineCode",{parentName:"li"},"hasValue"),", it is the actual value, if the state is ",Object(n.b)("inlineCode",{parentName:"li"},"hasError")," it is the ",Object(n.b)("inlineCode",{parentName:"li"},"Error")," object that was thrown, and if the state is ",Object(n.b)("inlineCode",{parentName:"li"},"loading"),", then it is a ",Object(n.b)("inlineCode",{parentName:"li"},"Promise")," of the value.")),Object(n.b)("p",null,"Loadables also contain helper methods for accessing the current state.  ",Object(n.b)("em",{parentName:"p"},"Consider this API to be unstable"),":"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"getValue()")," - Method to access the value that matches the semantics of React Suspense and Recoil selectors.  If the state has a value then it returns a value, if it has an error then it throws that error, and if it is still pending then it suspends execution or rendering to propagate the pending state."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"toPromise()"),": returns a ",Object(n.b)("inlineCode",{parentName:"li"},"Promise")," that will resolve when the selector has resolved. If the selector is synchronous or has already resolved, it returns a ",Object(n.b)("inlineCode",{parentName:"li"},"Promise")," that resolves immediately."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"valueMaybe()")," - Returns the value if available, otherwise returns ",Object(n.b)("inlineCode",{parentName:"li"},"undefined")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"valueOrThrow()")," - Returns the value if available or throws an Error."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"map()")," - Takes a function to transform the value of the Loadable and returns a new Loadable with the transformed value.  The transformation function gets a parameter of the value and returns the new value; it can also propagate thrown errors or suspense.")),Object(n.b)("h3",{id:"example"},"Example"),Object(n.b)("pre",null,Object(n.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"function UserInfo({userID}) {\n  const userNameLoadable = useRecoilValueLoadable(userNameQuery(userID));\n  switch (userNameLoadable.state) {\n    case 'hasValue':\n      return <div>{userNameLoadable.contents}</div>;\n    case 'loading':\n      return <div>Loading...</div>;\n    case 'hasError':\n      throw userNameLoadable.contents;\n  }\n}\n")))}s.isMDXComponent=!0},170:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return m}));var r=a(0),n=a.n(r);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=n.a.createContext({}),b=function(e){var t=n.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l({},t,{},e)),a},u=function(e){var t=b(e.components);return n.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},d=Object(r.forwardRef)((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=b(a),d=r,m=u["".concat(i,".").concat(d)]||u[d]||p[d]||o;return a?n.a.createElement(m,l({ref:t},s,{components:a})):n.a.createElement(m,l({ref:t},s))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=a[s];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"}}]);