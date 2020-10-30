(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{167:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return b})),n.d(t,"metadata",(function(){return m})),n.d(t,"rightToc",(function(){return h})),n.d(t,"default",(function(){return S}));var o=n(1),a=n(0),r=n.n(a),s=n(170),c=n(239);const i=Object(c.atom)({key:"textState",default:""}),u=Object(c.selector)({key:"charCountState",get:({get:e})=>e(i).length});function l(){return r.a.createElement("div",null,r.a.createElement(p,null),r.a.createElement(d,null))}function d(){const e=Object(c.useRecoilValue)(u);return r.a.createElement(r.a.Fragment,null,"Character Count: ",e)}function p(){const[e,t]=Object(c.useRecoilState)(i);return r.a.createElement("div",null,r.a.createElement("input",{type:"text",value:e,onChange:e=>{t(e.target.value)}}),r.a.createElement("br",null),"Echo: ",e)}var f=function(){return r.a.createElement(c.RecoilRoot,null,r.a.createElement(l,null))};const b={title:"Getting Started"},m={id:"introduction/getting-started",title:"Getting Started",description:"## Create React App",source:"@site/docs/introduction/getting-started.mdx",permalink:"/docs/introduction/getting-started",editUrl:"https://github.com/facebookexperimental/Recoil/edit/docs/docs/docs/introduction/getting-started.mdx",sidebar:"docs",previous:{title:"Installation",permalink:"/docs/introduction/installation"},next:{title:"Intro",permalink:"/docs/basic-tutorial/intro"}},h=[{value:"Create React App",id:"create-react-app",children:[]},{value:"Installation",id:"installation",children:[]},{value:"RecoilRoot",id:"recoilroot",children:[]},{value:"Atom",id:"atom",children:[]},{value:"Selector",id:"selector",children:[]},{value:"Demo",id:"demo",children:[]}],g={rightToc:h};function S({components:e,...t}){return Object(s.b)("wrapper",Object(o.a)({},g,t,{components:e,mdxType:"MDXLayout"}),Object(s.b)("h2",{id:"create-react-app"},"Create React App"),Object(s.b)("p",null,"Recoil is a state management library for React, so you need to have React installed and running to use Recoil. The easiest and recommended way for bootstrapping a React application is to use ",Object(s.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/facebook/create-react-app#creating-an-app"}),"Create React App"),":"),Object(s.b)("pre",null,Object(s.b)("code",Object(o.a)({parentName:"pre"},{className:"language-shell"}),"npx create-react-app my-app\n")),Object(s.b)("blockquote",null,Object(s.b)("p",{parentName:"blockquote"},Object(s.b)("a",Object(o.a)({parentName:"p"},{href:"https://medium.com/@maybekatz/introducing-npx-an-npm-package-runner-55f7d4bd282b"}),Object(s.b)("inlineCode",{parentName:"a"},"npx"))," is a package runner tool that comes with npm 5.2+ and higher, see ",Object(s.b)("a",Object(o.a)({parentName:"p"},{href:"https://gist.github.com/gaearon/4064d3c23a77c74a3614c498a8bb1c5f"}),"instructions for older npm versions"),".")),Object(s.b)("p",null,"For more ways to install Create React App, see the ",Object(s.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/facebook/create-react-app#creating-an-app"}),"official documentation"),"."),Object(s.b)("h2",{id:"installation"},"Installation"),Object(s.b)("p",null,"The Recoil package lives in ",Object(s.b)("a",{href:"https://www.npmjs.com/get-npm",target:"_blank"},"npm"),". To install the latest stable version, run the following command:"),Object(s.b)("pre",null,Object(s.b)("code",Object(o.a)({parentName:"pre"},{className:"language-shell"}),"npm install recoil\n")),Object(s.b)("p",null,"Or if you're using ",Object(s.b)("a",{href:"https://classic.yarnpkg.com/en/docs/install/",target:"_blank"},"yarn"),":"),Object(s.b)("pre",null,Object(s.b)("code",Object(o.a)({parentName:"pre"},{className:"language-shell"}),"yarn add recoil\n")),Object(s.b)("h2",{id:"recoilroot"},"RecoilRoot"),Object(s.b)("p",null,"Components that use recoil state need ",Object(s.b)("inlineCode",{parentName:"p"},"RecoilRoot")," to appear somewhere in the parent tree. A good place to put this is in your root component:"),Object(s.b)("pre",null,Object(s.b)("code",Object(o.a)({parentName:"pre"},{className:"language-jsx"}),"import React from 'react';\nimport {\n  RecoilRoot,\n  atom,\n  selector,\n  useRecoilState,\n  useRecoilValue,\n} from 'recoil';\n\nfunction App() {\n  return (\n    <RecoilRoot>\n      <CharacterCounter />\n    </RecoilRoot>\n  );\n}\n")),Object(s.b)("p",null,"We'll implement the ",Object(s.b)("inlineCode",{parentName:"p"},"CharacterCounter")," component in the following section."),Object(s.b)("h2",{id:"atom"},"Atom"),Object(s.b)("p",null,"An ",Object(s.b)("strong",{parentName:"p"},"atom")," represents a piece of ",Object(s.b)("strong",{parentName:"p"},"state"),". Atoms can be read from and written to from any component. Components that read the value of an atom are implicitly ",Object(s.b)("strong",{parentName:"p"},"subscribed")," to that atom, so any atom updates will result in a re-render of all components subscribed to that atom:"),Object(s.b)("pre",null,Object(s.b)("code",Object(o.a)({parentName:"pre"},{className:"language-javascript"}),"const textState = atom({\n  key: 'textState', // unique ID (with respect to other atoms/selectors)\n  default: '', // default value (aka initial value)\n});\n")),Object(s.b)("p",null,"Components that need to read from ",Object(s.b)("em",{parentName:"p"},"and")," write to an atom should use ",Object(s.b)("inlineCode",{parentName:"p"},"useRecoilState()")," as shown below:"),Object(s.b)("pre",null,Object(s.b)("code",Object(o.a)({parentName:"pre"},{className:"language-jsx"}),'function CharacterCounter() {\n  return (\n    <div>\n      <TextInput />\n      <CharacterCount />\n    </div>\n  );\n}\n\nfunction TextInput() {\n  const [text, setText] = useRecoilState(textState);\n\n  const onChange = (event) => {\n    setText(event.target.value);\n  };\n\n  return (\n    <div>\n      <input type="text" value={text} onChange={onChange} />\n      <br />\n      Echo: {text}\n    </div>\n  );\n}\n')),Object(s.b)("h2",{id:"selector"},"Selector"),Object(s.b)("p",null,"A ",Object(s.b)("strong",{parentName:"p"},"selector")," represents a piece of ",Object(s.b)("strong",{parentName:"p"},"derived state"),". Derived state is a ",Object(s.b)("strong",{parentName:"p"},"transformation")," of state. You can think of derived state as the output of passing state to a pure function that modifies the given state in some way:"),Object(s.b)("pre",null,Object(s.b)("code",Object(o.a)({parentName:"pre"},{className:"language-jsx"}),"const charCountState = selector({\n  key: 'charCountState', // unique ID (with respect to other atoms/selectors)\n  get: ({get}) => {\n    const text = get(textState);\n\n    return text.length;\n  },\n});\n")),Object(s.b)("p",null,"We can use the ",Object(s.b)("inlineCode",{parentName:"p"},"useRecoilValue()")," hook to read the value of ",Object(s.b)("inlineCode",{parentName:"p"},"charCountState"),":"),Object(s.b)("pre",null,Object(s.b)("code",Object(o.a)({parentName:"pre"},{className:"language-jsx"}),"function CharacterCount() {\n  const count = useRecoilValue(charCountState);\n\n  return <>Character Count: {count}</>;\n}\n")),Object(s.b)("h2",{id:"demo"},"Demo"),Object(s.b)("p",null,"Below is the finished product:"),Object(s.b)(f,{mdxType:"GettingStarted"}))}S.isMDXComponent=!0},170:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return b}));var o=n(0),a=n.n(o);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),l=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},d=function(e){var t=l(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=Object(o.forwardRef)((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=l(n),f=o,b=d["".concat(s,".").concat(f)]||d[f]||p[f]||r;return n?a.a.createElement(b,c({ref:t},u,{components:n})):a.a.createElement(b,c({ref:t},u))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,s=new Array(r);s[0]=f;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:o,s[1]=c;for(var u=2;u<r;u++)s[u]=n[u];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},239:function(e,t,n){"use strict";function o(e){return e&&"object"==typeof e&&"default"in e?e.default:e}Object.defineProperty(t,"__esModule",{value:!0});var a=o(n(0)),r=o(n(43)),s={setByAddingToSet:function(e,t){const n=new Set(e);return n.add(t),n},setByDeletingFromSet:function(e,t){const n=new Set(e);return n.delete(t),n},mapBySettingInMap:function(e,t,n){const o=new Map(e);return o.set(t,n),o},mapByUpdatingInMap:function(e,t,n){const o=new Map(e);return o.set(t,n(o.get(t))),o},mapByDeletingFromMap:function(e,t){const n=new Map(e);return n.delete(t),n}},c=function(e){return!!e&&"function"==typeof e.then},i=function e(t){if("object"==typeof t&&!function(e){if(null===e||"object"!=typeof e)return!0;switch(typeof e.$$typeof){case"symbol":case"number":return!0}return null!=e["@@__IMMUTABLE_ITERABLE__@@"]||null!=e["@@__IMMUTABLE_KEYED__@@"]||null!=e["@@__IMMUTABLE_INDEXED__@@"]||null!=e["@@__IMMUTABLE_ORDERED__@@"]||null!=e["@@__IMMUTABLE_RECORD__@@"]||!!function(e){var t,n;const o=null!==(n=(null!=e?null!==(t=e.ownerDocument)&&void 0!==t?t:e:document).defaultView)&&void 0!==n?n:window;return!(null==e||!("function"==typeof o.Node?e instanceof o.Node:"object"==typeof e&&"number"==typeof e.nodeType&&"string"==typeof e.nodeName))}(e)||!!c(e)}(t)){Object.freeze(t);for(const n in t)t.hasOwnProperty(n)&&e(t[n]);Object.seal(t)}},u=function(e,t){if(null!=e)return e;throw new Error(null!=t?t:"Got unexpected null or undefined")};const l={getValue(){if("hasValue"!==this.state)throw this.contents;return this.contents},toPromise(){return"hasValue"===this.state?Promise.resolve(this.contents):"hasError"===this.state?Promise.reject(this.contents):this.contents},valueMaybe(){return"hasValue"===this.state?this.contents:void 0},valueOrThrow(){if("hasValue"!==this.state)throw new Error(`Loadable expected value, but in "${this.state}" state`);return this.contents},errorMaybe(){return"hasError"===this.state?this.contents:void 0},errorOrThrow(){if("hasError"!==this.state)throw new Error(`Loadable expected error, but in "${this.state}" state`);return this.contents},promiseMaybe(){return"loading"===this.state?this.contents:void 0},promiseOrThrow(){if("loading"!==this.state)throw new Error(`Loadable expected promise, but in "${this.state}" state`);return this.contents},map(e){if("hasError"===this.state)return this;if("hasValue"===this.state)try{const t=e(this.contents);return c(t)?f(t):d(t)}catch(a){return c(a)?f(a.next(()=>e(this.contents))):p(a)}if("loading"===this.state)return f(this.contents.then(e).catch(t=>{if(c(t))return t.then(()=>e(this.contents));throw t}));throw new Error("Invalid Loadable state")}};function d(e){return Object.freeze({state:"hasValue",contents:e,...l})}function p(e){return Object.freeze({state:"hasError",contents:e,...l})}function f(e){return Object.freeze({state:"loading",contents:e,...l})}var b={loadableWithValue:d,loadableWithError:p,loadableWithPromise:f,loadableLoading:function(){return f(new Promise(()=>{}))},loadableAll:function(e){return e.every(e=>"hasValue"===e.state)?d(e.map(e=>e.contents)):e.some(e=>"hasError"===e.state)?p(u(e.find(e=>"hasError"===e.state),"Invalid loadable passed to loadableAll").contents):f(Promise.all(e.map(e=>e.contents)))}};class m{constructor(e){var t;t=void 0,"key"in this?Object.defineProperty(this,"key",{value:t,enumerable:!0,configurable:!0,writable:!0}):this.key=t,this.key=e}}var h=m,g=class extends m{},S=class extends m{},y=Object.freeze({__proto__:null,AbstractRecoilValue:h,RecoilState:g,RecoilValueReadOnly:S});class v{}const R=new v;class w extends Error{constructor(e){super(`Tried to set the value of Recoil selector ${e} using an updater function, but it is an async selector in a pending or error state; this is not supported.`)}}const O=new Map;class T extends Error{}var j={nodes:O,registerNode:function(e){return O.has(e.key)&&e.key,O.set(e.key,e),null==e.set?new y.RecoilValueReadOnly(e.key):new y.RecoilState(e.key)},getNode:function(e){const t=O.get(e);if(null==t)throw new T(`Missing definition for RecoilValue: "${e}""`);return t},NodeMissingError:T,DefaultValue:v,DEFAULT_VALUE:R,RecoilValueNotReady:w},A=function(e,t,n){return n()},E=function(e){return e};const{mapByDeletingFromMap:V,mapBySettingInMap:N,mapByUpdatingInMap:k,setByAddingToSet:C}=s,{getNode:M}=j,_=Object.freeze(new Map),L=Object.freeze(new Set);class x extends Error{}function B(e,t,n){return M(n).get(e,t)}let U=0;var D={getNodeLoadable:B,peekNodeLoadable:function(e,t,n){return B(e,t,n)[1]},setNodeValue:function(e,t,n,o){const a=M(n);if(null==a.set)throw new x("Attempt to set read-only RecoilValue: "+n);const[r,s]=a.set(e,t,o);return[r,s]},setUnvalidatedAtomValue:function(e,t,n){return{...e,atomValues:V(e.atomValues,t),nonvalidatedAtoms:N(e.nonvalidatedAtoms,t,n),dirtyAtoms:C(e.dirtyAtoms,t)}},subscribeComponentToNode:function(e,t,n){const o=U++;return[{...e,nodeToComponentSubscriptions:k(e.nodeToComponentSubscriptions,t,e=>N(null!=e?e:_,o,["TODO debug name",n]))},function(e){return{...e,nodeToComponentSubscriptions:k(e.nodeToComponentSubscriptions,t,e=>V(null!=e?e:_,o))}}]},fireNodeSubscriptions:function(e,t,n){var o;const a="enqueue"===n&&null!==(o=e.getState().nextTree)&&void 0!==o?o:e.getState().currentTree,r=function(e,t){const n=new Set,o=new Set,a=Array.from(t);for(let s=a.pop();s;s=a.pop()){var r;n.add(s),o.add(s);const t=null!==(r=e.nodeToNodeSubscriptions.get(s))&&void 0!==r?r:L;for(const e of t)o.has(e)||a.push(e)}return n}(a,t);for(const c of r){var s;(null!==(s=a.nodeToComponentSubscriptions.get(c))&&void 0!==s?s:[]).forEach(([t,o])=>{"enqueue"===n?e.getState().queuedComponentCallbacks.push(o):o(a)})}A("value became available, waking components",Array.from(t).join(", "),()=>{const t=e.getState().suspendedComponentResolvers;t.forEach(e=>e()),t.clear()})},detectCircularDependencies:function e(t,n){if(!n.length)return;const o=n[n.length-1],a=t.nodeToNodeSubscriptions.get(o);if(!(null==a?void 0:a.size))return;const r=n[0];if(a.has(r))throw new Error("Recoil selector has circular dependencies: "+[...n,r].reverse().join(" \u2192 "));for(const s of a)e(t,[...n,s])}};const{getNodeLoadable:I,peekNodeLoadable:P,setNodeValue:z,setUnvalidatedAtomValue:q,subscribeComponentToNode:F}=D,{RecoilValue:W,AbstractRecoilValue:$,RecoilValueReadOnly:G,RecoilState:X}=y;var J={AbstractRecoilValue:$,RecoilState:X,peekRecoilValueAsLoadable:function(e,{key:t}){const n=e.getState().currentTree;return P(e,n,t)},getRecoilValueAsLoadable:function(e,{key:t}){let n;return A("get RecoilValue",t,()=>e.replaceState(E(o=>{const[a,r]=I(e,o,t);return n=r,a}))),n},setRecoilValue:function(e,{key:t},n){A("set RecoilValue",t,()=>e.replaceState(E(o=>{const[a,r]=z(e,o,t,n);return e.fireNodeSubscriptions(r,"enqueue"),a})))},setUnvalidatedRecoilValue:function(e,{key:t},n){A("set unvalidated persisted atom",t,()=>e.replaceState(E(o=>{const a=q(o,t,n);return e.fireNodeSubscriptions(new Set([t]),"enqueue"),a})))},subscribeToRecoilValue:function(e,{key:t},n){let o,a;return A("subscribe component to RecoilValue",t,()=>e.replaceState(E(e=>([o,a]=F(e,t,n),o)))),{release:e=>e.replaceState(a)}},isRecoilValue:function(e){return e instanceof X||e instanceof G}};const{mapByDeletingFromMap:K,mapBySettingInMap:Y,setByAddingToSet:H}=s,{loadableWithValue:Q}=b,{DEFAULT_VALUE:Z,DefaultValue:ee,registerNode:te}=j,{isRecoilValue:ne}=J;var oe=function e(t){const{default:n,...o}=t;return ne(n)||c(n)?function(t){const n=e({...t,default:Z,persistence_UNSTABLE:void 0===t.persistence_UNSTABLE?void 0:{...t.persistence_UNSTABLE,validator:e=>e instanceof ee?e:u(t.persistence_UNSTABLE).validator(e,Z)}});return selector({key:t.key+"__withFallback",get:({get:e})=>{const o=e(n);return o instanceof ee?t.default:o},set:({set:e},t)=>e(n,t),dangerouslyAllowMutability:t.dangerouslyAllowMutability})}({...o,default:n}):function(e){const{key:t,persistence_UNSTABLE:n}=e;return te({key:t,options:e,get:(o,a)=>{if(a.atomValues.has(t))return[a,u(a.atomValues.get(t))];if(a.nonvalidatedAtoms.has(t)){if(null==n)return[a,Q(e.default)];const o=a.nonvalidatedAtoms.get(t),r=n.validator(o,Z);return r instanceof ee?[{...a,nonvalidatedAtoms:K(a.nonvalidatedAtoms,t)},Q(e.default)]:[{...a,atomValues:Y(a.atomValues,t,Q(r)),nonvalidatedAtoms:K(a.nonvalidatedAtoms,t)},Q(r)]}return[a,Q(e.default)]},set:(n,o,a)=>(!0!==e.dangerouslyAllowMutability&&i(a),[{...o,dirtyAtoms:H(o.dirtyAtoms,t),atomValues:a instanceof ee?K(o.atomValues,t):Y(o.atomValues,t,Q(a)),nonvalidatedAtoms:K(o.nonvalidatedAtoms,t)},new Set([t])])})}({...o,default:n})},ae=function(e,t){t()};const{useContext:re,useEffect:se,useRef:ce,useState:ie}=a,{fireNodeSubscriptions:ue,setNodeValue:le,setUnvalidatedAtomValue:de}=D;function pe(){throw new Error("This component must be used inside a <RecoilRoot> component.")}const fe=Object.freeze({getState:pe,replaceState:pe,subscribeToTransactions:pe,addTransactionMetadata:pe,fireNodeSubscriptions:pe});function be(e){null===e.nextTree&&(e.nextTree={...e.currentTree,dirtyAtoms:new Set,transactionMetadata:{}})}const me=a.createContext({current:fe}),he=()=>re(me);function ge(e){const t=he(),[n,o]=ie([]);return e.setNotifyBatcherOfChange(()=>o({})),se(()=>{ae("Batcher",()=>{const e=t.current.getState(),{currentTree:n,nextTree:o}=e;null!==o&&(o.dirtyAtoms.size&&e.transactionSubscriptions.forEach(e=>e(t.current,n)),e.queuedComponentCallbacks.forEach(e=>e(o)),e.queuedComponentCallbacks.splice(0,e.queuedComponentCallbacks.length),e.currentTree=o,e.nextTree=null)})}),null}let Se=0;var ye={useStoreRef:he,RecoilRoot:function({initializeState:e,children:t}){let n;const o=ce(null),r={getState:()=>n.current,replaceState:e=>{const t=s.current.getState();be(t);const n=u(t.nextTree),a=e(n);a!==n&&(t.nextTree=a,u(o.current)())},subscribeToTransactions:e=>{const t=Se++;return s.current.getState().transactionSubscriptions.set(t,e),{release:()=>{s.current.getState().transactionSubscriptions.delete(t)}}},addTransactionMetadata:e=>{be(s.current.getState());for(const t of Object.keys(e))u(s.current.getState().nextTree).transactionMetadata[t]=e[t]},fireNodeSubscriptions:function(e,t){ue(s.current,e,t)}},s=ce(r);return n=ce(function(e,t){const n={currentTree:{isSnapshot:!1,transactionMetadata:{},atomValues:new Map,nonvalidatedAtoms:new Map,dirtyAtoms:new Set,nodeDeps:new Map,nodeToNodeSubscriptions:new Map,nodeToComponentSubscriptions:new Map},nextTree:null,transactionSubscriptions:new Map,queuedComponentCallbacks:[],suspendedComponentResolvers:new Set};return t&&t({set:(t,o)=>{n.currentTree=le(e,n.currentTree,t.key,o)[0]},setUnvalidatedAtomValues:e=>{e.forEach((e,t)=>{n.currentTree=de(n.currentTree,t,e)})}}),n}(r,e)),a.createElement(me.Provider,{value:s},a.createElement(ge,{setNotifyBatcherOfChange:function(e){o.current=e}}),t)}},ve=function(e,...t){const n=new Set;e:for(const o of e){for(const e of t)if(e.has(o))continue e;n.add(o)}return n},Re=function(e,t){const n=new Map;return e.forEach((e,o)=>{n.set(o,t(e,o))}),n};const{useCallback:we,useEffect:Oe,useMemo:Te,useRef:je,useState:Ae}=a,{setByAddingToSet:Ee}=s,{getNodeLoadable:Ve,peekNodeLoadable:Ne,setNodeValue:ke}=D,{DEFAULT_VALUE:Ce,RecoilValueNotReady:Me,getNode:_e,nodes:Le}=j,{useStoreRef:xe}=ye,{AbstractRecoilValue:Be,getRecoilValueAsLoadable:Ue,setRecoilValue:De,setUnvalidatedRecoilValue:Ie,subscribeToRecoilValue:Pe}=J;function ze(e,t){return{isSnapshot:t.isSnapshot,transactionMetadata:{...e.transactionMetadata},atomValues:new Map(e.atomValues),nonvalidatedAtoms:new Map(e.nonvalidatedAtoms),dirtyAtoms:new Set(e.dirtyAtoms),nodeDeps:new Map(e.nodeDeps),nodeToNodeSubscriptions:Re(e.nodeToNodeSubscriptions,e=>new Set(e)),nodeToComponentSubscriptions:Re(e.nodeToComponentSubscriptions,e=>new Map(e))}}function qe(e,t,n,o){if("function"==typeof o){const a=Ne(e,t,n.key);if("loading"===a.state)throw new Me(n.key);if("hasError"===a.state)throw a.contents;return o(a.contents)}return o}function Fe(){const e=xe(),[t,n]=Ae([]),o=je(new Set);o.current=new Set;const a=je(new Set),r=je(new Map),s=we(t=>{const n=r.current.get(t);n&&(n.release(e.current),r.current.delete(t))},[e,r]);return Oe(()=>{const t=e.current;function c(e,t){r.current.has(t)&&n([])}ve(o.current,a.current).forEach(e=>{if(r.current.has(e))return;const n=Pe(t,new Be(e),t=>{A("RecoilValue subscription fired",e,()=>{c(0,e)})});r.current.set(e,n),A("initial update on subscribing",e,()=>{c(t.getState(),e)})}),ve(a.current,o.current).forEach(e=>{s(e)}),a.current=o.current}),Oe(()=>{const e=r.current;return()=>e.forEach((e,t)=>s(t))},[s]),Te(()=>{function t(t){return n=>{var o;const a=e.current.getState(),r=qe(e.current,null!==(o=a.nextTree)&&void 0!==o?o:a.currentTree,t,n);De(e.current,t,r)}}function n(t){return o.current.has(t.key)||(o.current=Ee(o.current,t.key)),Ue(e.current,t)}function a(t){return function(e,t,n){if("hasValue"===e.state)return e.contents;if("loading"===e.state)throw new Promise(e=>{n.current.getState().suspendedComponentResolvers.add(e)});throw"hasError"===e.state?e.contents:new Error(`Invalid value of loadable atom "${t.key}"`)}(n(t),t,e)}return{getRecoilValue:a,getRecoilValueLoadable:n,getRecoilState:function(e){return[a(e),t(e)]},getRecoilStateLoadable:function(e){return[n(e),t(e)]},getSetRecoilState:t,getResetRecoilState:function(t){return()=>De(e.current,t,Ce)}}},[o,e])}function We(e){const t=xe();Oe(()=>t.current.subscribeToTransactions(e).release,[e,t])}function $e(e){const t=e.atomValues,n=Re(function(e,t){const n=new Map;for(const[o,a]of e)t(a,o)&&n.set(o,a);return n}(t,(e,t)=>{var n;const o=null===(n=_e(t).options)||void 0===n?void 0:n.persistence_UNSTABLE;return null!=o&&"none"!==o.type&&"hasValue"===e.state}),e=>e.contents);return function(...e){const t=new Map;for(let n=0;n<e.length;n++){const o=e[n].keys();let a;for(;!(a=o.next()).done;)t.set(a.value,e[n].get(a.value))}return t}(e.nonvalidatedAtoms,n)}class Ge{}const Xe=new Ge;var Je={useRecoilCallback:function(e,t){const n=xe();return we((...t)=>{let o=ze(n.current.getState().currentTree,{isSnapshot:!0});function a(e){let t;return[o,t]=Ve(n.current,o,e.key),t}function s(e){return a(e).toPromise()}function c(e,t){const a=qe(n.current,o,e,t);De(n.current,e,a)}function i(e){De(n.current,e,Ce)}let u=Xe;return r.unstable_batchedUpdates(()=>{u=e({getPromise:s,getLoadable:a,set:c,reset:i},...t)}),function(e,t){if(!e)throw new Error(t)}(!(u instanceof Ge),"unstable_batchedUpdates should return immediately"),u},null!=t?[...t,n]:void 0)},useRecoilValue:function(e){return Fe().getRecoilValue(e)},useRecoilValueLoadable:function(e){return Fe().getRecoilValueLoadable(e)},useRecoilState:function(e){const t=Fe(),[n]=t.getRecoilState(e);return[n,we(t.getSetRecoilState(e),[e])]},useRecoilStateLoadable:function(e){const t=Fe(),[n]=t.getRecoilStateLoadable(e);return[n,we(t.getSetRecoilState(e),[e])]},useSetRecoilState:function(e){return we(Fe().getSetRecoilState(e),[e])},useResetRecoilState:function(e){return we(Fe().getResetRecoilState(e),[e])},useRecoilInterface:Fe,useTransactionSubscription:We,useSnapshotWithStateChange:function(e){const t=xe();let n=function(){const[e,t]=Ae(0);return We(we(()=>t(e=>e+1),[])),ze(xe().current.getState().currentTree,{isSnapshot:!0})}();e(({key:e},o)=>{[n]=ke(t.current,n,e,Ne(t.current,n,e).map(o))});const o=Re(n.atomValues,e=>e.contents),a=function(e,...t){const n=new Set;e:for(const o of e){for(const e of t)if(!e.has(o))continue e;n.add(o)}return n}(n.dirtyAtoms,new Set(o.keys()));return{atomValues:o,updatedAtoms:a}},useTransactionObservation:function(e){We(we((t,n)=>{let o=t.getState().nextTree;o||(o=t.getState().currentTree);const a=$e(o),r=$e(n),s=Re(Le,e=>{var t,n,o,a,r,s;return{persistence_UNSTABLE:{type:null!==(t=null===(n=e.options)||void 0===n||null===(o=n.persistence_UNSTABLE)||void 0===o?void 0:o.type)&&void 0!==t?t:"none",backButton:null!==(a=null===(r=e.options)||void 0===r||null===(s=r.persistence_UNSTABLE)||void 0===s?void 0:s.backButton)&&void 0!==a&&a}}}),c=new Set(o.dirtyAtoms);e({atomValues:a,previousAtomValues:r,atomInfo:s,modifiedAtoms:c,transactionMetadata:{...o.transactionMetadata}})},[e]))},useGoToSnapshot:function(){const e=xe();return t=>{r.unstable_batchedUpdates(()=>{t.updatedAtoms.forEach(n=>{De(e.current,new Be(n),t.atomValues.get(n))})})}},useSetUnvalidatedAtomValues:function(){const e=xe();return(t,n={})=>{r.unstable_batchedUpdates(()=>{e.current.addTransactionMetadata(n),t.forEach((t,n)=>Ie(e.current,new Be(n),t))})}}};const Ke=Symbol("ArrayKeyedMap"),Ye=new Map;class He{constructor(e){if(this._base=new Map,e instanceof He)for(const[t,n]of e.entries())this.set(t,n);else if(e)for(const[t,n]of e)this.set(t,n);return this}get(e){const t=Array.isArray(e)?e:[e];let n=this._base;return t.forEach(e=>{var t;n=null!==(t=n.get(e))&&void 0!==t?t:Ye}),void 0===n?void 0:n.get(Ke)}set(e,t){const n=Array.isArray(e)?e:[e];let o=this._base,a=o;return n.forEach(e=>{a=o.get(e),a||(a=new Map,o.set(e,a)),o=a}),a.set(Ke,t),this}delete(e){const t=Array.isArray(e)?e:[e];let n=this._base,o=n;return t.forEach(e=>{o=n.get(e),o||(o=new Map,n.set(e,o)),n=o}),o.delete(Ke),this}entries(){const e=[];return function t(n,o){n.forEach((n,a)=>{a===Ke?e.push([o,n]):t(n,o.concat(a))})}(this._base,[]),e.values()}toBuiltInMap(){return new Map(this.entries())}}var Qe=He;Object.freeze(new Set);const{mapBySettingInMap:Ze,mapByUpdatingInMap:et,setByAddingToSet:tt,setByDeletingFromSet:nt}=s,{detectCircularDependencies:ot,getNodeLoadable:at,setNodeValue:rt}=D,{loadableWithError:st,loadableWithPromise:ct,loadableWithValue:it}=b,{DEFAULT_VALUE:ut,RecoilValueNotReady:lt,registerNode:dt}=j,{startPerfBlock:pt}={startPerfBlock:function(e){return()=>{}}},{isRecoilValue:ft}=J,bt=Object.freeze(new Set);function mt(e){const t=[];for(const n of Array.from(e.keys()).sort()){const o=u(e.get(n));t.push(n),t.push(o.contents)}return t}const{useRecoilCallback:ht,useRecoilState:gt,useRecoilStateLoadable:St,useRecoilValue:yt,useRecoilValueLoadable:vt,useResetRecoilState:Rt,useSetRecoilState:wt,useSetUnvalidatedAtomValues:Ot,useTransactionObservation:Tt,useTransactionSubscription:jt}=Je,{DefaultValue:At}=j,{RecoilRoot:Et}=ye,{isRecoilValue:Vt}=J;var Nt={DefaultValue:At,RecoilRoot:Et,atom:oe,selector:function(e){const{key:t,get:n,cacheImplementation_UNSTABLE:o}=e,a=null!=e.set?e.set:void 0;let r=null!=o?o:new Qe;function s(o,a){var u;let l=a;const d=null!==(u=a.nodeDeps.get(t))&&void 0!==u?u:bt,p=mt(new Map(Array.from(d).sort().map(e=>{const[t,n]=at(o,l,e);return l=t,[e,n]}))),f=r.get(p);if(null!=f)return[l,f];const[b,m,h]=function(e,o){var a;const[r,i,u]=function(e,o){const a=pt(t);let r=o;const i=new Map;function u({key:t}){let n;if([r,n]=at(e,o,t),i.set(t,n),"hasValue"===n.state)return n.contents;throw n.contents}try{const e=n({get:u}),t=ft(e)?u(e):e,o=c(t)?ct(t.finally(a)):(a(),it(t));return[r,o,i]}catch(t){const o=c(t)?ct(t.then(()=>{let t=st(new Error("Internal Recoil Selector Error"));if(e.replaceState(n=>{let o;return[o,t]=s(e,n),o}),"hasError"===t.state)throw t.contents;return t.contents}).finally(a)):(a(),st(t));return[r,o,i]}}(e,o);let l=r;const d=null!==(a=o.nodeDeps.get(t))&&void 0!==a?a:bt,p=new Set(u.keys());l=function(e,t){return e.size===t.size&&function(e,t,n){const o=e.entries();let a=o.next();for(;!a.done;){const r=a.value;if(!t.call(n,r[1],r[0],e))return!1;a=o.next()}return!0}(e,e=>t.has(e))}(d,p)?l:{...l,nodeDeps:Ze(l.nodeDeps,t,p)};const f=ve(p,d),b=ve(d,p);for(const n of f)l={...l,nodeToNodeSubscriptions:et(l.nodeToNodeSubscriptions,n,e=>tt(null!=e?e:bt,t))};for(const n of b)l={...l,nodeToNodeSubscriptions:et(l.nodeToNodeSubscriptions,n,e=>nt(null!=e?e:bt,t))};return[l,i,u]}(o,l);l=b;const g=mt(h);return function(n,o,a){"loading"!==a.state?1==!e.dangerouslyAllowMutability&&i(a.contents):a.contents.then(a=>(1==!e.dangerouslyAllowMutability&&i(a),r=r.set(o,it(a)),n.fireNodeSubscriptions(new Set([t]),"now"),a)).catch(a=>(c(a)||(1==!e.dangerouslyAllowMutability&&i(a),r=r.set(o,st(a)),n.fireNodeSubscriptions(new Set([t]),"now")),a)),r=r.set(o,a)}(o,g,m),[l,m]}function u(e,t){return s(e,t)}return dt(null!=a?{key:t,options:e,get:u,set:function(e,t,n){let o=t;const r=new Set;function s({key:t}){const[n,a]=at(e,o,t);if(o=n,"hasValue"===a.state)return a.contents;throw"loading"===a.state?new lt(t):a.contents}function c(t,n){const a="function"==typeof n?n(s(t)):n;let c;[o,c]=rt(e,o,t.key,a),c.forEach(e=>r.add(e))}return a({set:c,get:s,reset:function(e){c(e,ut)}},n),[o,r]}}:{key:t,options:e,get:u})},useRecoilValue:yt,useRecoilValueLoadable:vt,useRecoilState:gt,useRecoilStateLoadable:St,useSetRecoilState:wt,useResetRecoilState:Rt,useRecoilCallback:ht,useTransactionObservation_UNSTABLE:Tt,useTransactionSubscription_UNSTABLE:jt,useSetUnvalidatedAtomValues_UNSTABLE:Ot,isRecoilValue:Vt},kt=Nt.DefaultValue,Ct=Nt.RecoilRoot,Mt=Nt.atom,_t=Nt.selector,Lt=Nt.useRecoilValue,xt=Nt.useRecoilValueLoadable,Bt=Nt.useRecoilState,Ut=Nt.useRecoilStateLoadable,Dt=Nt.useSetRecoilState,It=Nt.useResetRecoilState,Pt=Nt.useRecoilCallback,zt=Nt.useTransactionObservation_UNSTABLE,qt=Nt.useTransactionSubscription_UNSTABLE,Ft=Nt.useSetUnvalidatedAtomValues_UNSTABLE,Wt=Nt.isRecoilValue;t.DefaultValue=kt,t.RecoilRoot=Ct,t.atom=Mt,t.default=Nt,t.isRecoilValue=Wt,t.selector=_t,t.useRecoilCallback=Pt,t.useRecoilState=Bt,t.useRecoilStateLoadable=Ut,t.useRecoilValue=Lt,t.useRecoilValueLoadable=xt,t.useResetRecoilState=It,t.useSetRecoilState=Dt,t.useSetUnvalidatedAtomValues_UNSTABLE=Ft,t.useTransactionObservation_UNSTABLE=zt,t.useTransactionSubscription_UNSTABLE=qt}}]);