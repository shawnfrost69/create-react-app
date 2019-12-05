/*! For license information please see content---docs-setting-up-your-editor-81-e-516.bad8ff0239b3a29d06c8.js.LICENSE */
(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{200:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"rightToc",(function(){return a})),n.d(t,"default",(function(){return u}));n(58),n(31),n(22),n(23),n(59),n(231);var r=n(230);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var i={id:"setting-up-your-editor",title:"Setting Up Your Editor",sidebar_label:"Editor Setup"},a=[{value:"Syntax highlighting",id:"syntax-highlighting",children:[]},{value:"Displaying Lint Output in the Editor",id:"displaying-lint-output-in-the-editor",children:[{value:"Experimental: Extending the ESLint config",id:"experimental-extending-the-eslint-config",children:[]}]},{value:"Debugging in the Editor",id:"debugging-in-the-editor",children:[{value:"Visual Studio Code",id:"visual-studio-code",children:[]},{value:"WebStorm",id:"webstorm",children:[]}]},{value:"Formatting Code Automatically",id:"formatting-code-automatically",children:[]}],l={rightToc:a},c="wrapper";function u(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,["components"]);return Object(r.b)(c,o({},l,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Create React App comes with a bunch of tools that improve the editing experience - if configured correctly. Here's a few tips to maximize your productivity:"),Object(r.b)("h2",{id:"syntax-highlighting"},"Syntax highlighting"),Object(r.b)("p",null,"To configure the syntax highlighting in your favorite text editor, head to the ",Object(r.b)("a",o({parentName:"p"},{href:"https://babeljs.io/docs/editors"}),"relevant Babel documentation page")," and follow the instructions. Some of the most popular editors are covered."),Object(r.b)("h2",{id:"displaying-lint-output-in-the-editor"},"Displaying Lint Output in the Editor"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Note: this feature is available with ",Object(r.b)("inlineCode",{parentName:"p"},"react-scripts@0.2.0")," and higher.")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"It works out of the box for newly created projects with ",Object(r.b)("inlineCode",{parentName:"p"},"react-scripts@2.0.3")," and higher.")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"It also only works with npm 3 or higher.")),Object(r.b)("p",null,"Some editors, including Sublime Text, Atom, and Visual Studio Code, provide plugins for ESLint."),Object(r.b)("p",null,"They are not required for linting. You should see the linter output right in your terminal as well as the browser console. If you prefer the lint results to appear right in your editor, please make sure you install an ESLint plugin/extension."),Object(r.b)("p",null,"If you're using TypeScript and Visual Studio Code, the ",Object(r.b)("a",o({parentName:"p"},{href:"https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint#overview"}),"ESLint Visual Studio Code extension")," currently ",Object(r.b)("a",o({parentName:"p"},{href:"https://github.com/Microsoft/vscode-eslint/issues/609"}),"doesn't have TypeScript support enabled by default"),". To enable TypeScript support in the ESLint extension, add the following to your project's Visual Studio Code settings file, located at ",Object(r.b)("inlineCode",{parentName:"p"},".vscode/settings.json")," (you can create this file if it doesn't already exist):"),Object(r.b)("pre",null,Object(r.b)("code",o({parentName:"pre"},{className:"language-json"}),'{\n  "eslint.validate": [\n    "javascript",\n    "javascriptreact",\n    { "language": "typescript", "autoFix": true },\n    { "language": "typescriptreact", "autoFix": true }\n  ]\n}\n')),Object(r.b)("p",null,"Now your editor should report the linting warnings."),Object(r.b)("p",null,"Note that even if you customise your ESLint config, these changes will ",Object(r.b)("strong",{parentName:"p"},"only affect the editor integration"),". They won\u2019t affect the terminal and in-browser lint output. This is because Create React App intentionally provides a minimal set of rules that find common mistakes."),Object(r.b)("p",null,"If you want to enforce a coding style for your project, consider using ",Object(r.b)("a",o({parentName:"p"},{href:"https://github.com/jlongster/prettier"}),"Prettier")," instead of ESLint style rules."),Object(r.b)("h3",{id:"experimental-extending-the-eslint-config"},"Experimental: Extending the ESLint config"),Object(r.b)("p",null,"We recognise that in some cases, further customisation is required. It is now possible to extend the base ESLint config by setting the ",Object(r.b)("inlineCode",{parentName:"p"},"EXTEND_ESLINT")," environment variable to ",Object(r.b)("inlineCode",{parentName:"p"},"true"),". See ",Object(r.b)("a",o({parentName:"p"},{href:"/docs/advanced-configuration"}),"advanced configuration")," for more information on available environment variables."),Object(r.b)("p",null,"Note that any rules set to ",Object(r.b)("inlineCode",{parentName:"p"},'"error"')," will stop the project from building."),Object(r.b)("p",null,"There are a few things to remember:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"We highly recommend extending the base config, as removing it could introduce hard-to-find issues."),Object(r.b)("li",{parentName:"ol"},Object(r.b)("inlineCode",{parentName:"li"},".eslintignore")," files will be respected"),Object(r.b)("li",{parentName:"ol"},"When working with TypeScript, you'll need to provide an ",Object(r.b)("inlineCode",{parentName:"li"},"overrides")," object for rules that should ",Object(r.b)("em",{parentName:"li"},"only")," target TypeScript files.")),Object(r.b)("p",null,"In the below example:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"the base config has been extended by a shared ESLint config,"),Object(r.b)("li",{parentName:"ul"},"a new rule has been set that applies to all JavaScript and TypeScript files, and"),Object(r.b)("li",{parentName:"ul"},"a new rule has been set that only targets TypeScript files.")),Object(r.b)("pre",null,Object(r.b)("code",o({parentName:"pre"},{className:"language-json"}),'{\n  "eslintConfig": {\n    "extends": ["react-app", "shared-config"],\n    "rules": {\n      "additional-rule": "warn"\n    },\n    "overrides": [\n      {\n        "files": ["**/*.ts?(x)"],\n        "rules": {\n          "additional-typescript-only-rule": "warn"\n        }\n      }\n    ]\n  }\n}\n')),Object(r.b)("h2",{id:"debugging-in-the-editor"},"Debugging in the Editor"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"This feature is currently only supported by ",Object(r.b)("a",o({parentName:"strong"},{href:"https://code.visualstudio.com"}),"Visual Studio Code")," and ",Object(r.b)("a",o({parentName:"strong"},{href:"https://www.jetbrains.com/webstorm/"}),"WebStorm"),".")),Object(r.b)("p",null,"Visual Studio Code and WebStorm support debugging out of the box with Create React App. This enables you as a developer to write and debug your React code without leaving the editor, and most importantly it enables you to have a continuous development workflow, where context switching is minimal, as you don\u2019t have to switch between tools."),Object(r.b)("h3",{id:"visual-studio-code"},"Visual Studio Code"),Object(r.b)("p",null,"You would need to have the latest version of ",Object(r.b)("a",o({parentName:"p"},{href:"https://code.visualstudio.com"}),"VS Code")," and VS Code ",Object(r.b)("a",o({parentName:"p"},{href:"https://marketplace.visualstudio.com/items?itemName=msjsdiag.debugger-for-chrome"}),"Chrome Debugger Extension")," installed."),Object(r.b)("p",null,"Then add the block below to your ",Object(r.b)("inlineCode",{parentName:"p"},"launch.json")," file and put it inside the ",Object(r.b)("inlineCode",{parentName:"p"},".vscode")," folder in your app\u2019s root directory."),Object(r.b)("pre",null,Object(r.b)("code",o({parentName:"pre"},{className:"language-json"}),'{\n  "version": "0.2.0",\n  "configurations": [\n    {\n      "name": "Chrome",\n      "type": "chrome",\n      "request": "launch",\n      "url": "http://localhost:3000",\n      "webRoot": "${workspaceFolder}/src",\n      "sourceMapPathOverrides": {\n        "webpack:///src/*": "${webRoot}/*"\n      }\n    }\n  ]\n}\n')),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Note: the URL may be different if you've made adjustments via the ",Object(r.b)("a",o({parentName:"p"},{href:"/docs/advanced-configuration"}),"HOST or PORT environment variables"),".")),Object(r.b)("p",null,"Start your app by running ",Object(r.b)("inlineCode",{parentName:"p"},"npm start"),", and start debugging in VS Code by pressing ",Object(r.b)("inlineCode",{parentName:"p"},"F5")," or by clicking the green debug icon. You can now write code, set breakpoints, make changes to the code, and debug your newly modified code\u2014all from your editor."),Object(r.b)("p",null,"Having problems with VS Code Debugging? Please see their ",Object(r.b)("a",o({parentName:"p"},{href:"https://github.com/Microsoft/vscode-chrome-debug/blob/master/README.md#troubleshooting"}),"troubleshooting guide"),"."),Object(r.b)("h3",{id:"webstorm"},"WebStorm"),Object(r.b)("p",null,"You would need to have ",Object(r.b)("a",o({parentName:"p"},{href:"https://www.jetbrains.com/webstorm/"}),"WebStorm")," and ",Object(r.b)("a",o({parentName:"p"},{href:"https://chrome.google.com/webstore/detail/jetbrains-ide-support/hmhgeddbohgjknpmjagkdomcpobmllji"}),"JetBrains IDE Support")," Chrome extension installed."),Object(r.b)("p",null,"In the WebStorm menu ",Object(r.b)("inlineCode",{parentName:"p"},"Run")," select ",Object(r.b)("inlineCode",{parentName:"p"},"Edit Configurations..."),". Then click ",Object(r.b)("inlineCode",{parentName:"p"},"+")," and select ",Object(r.b)("inlineCode",{parentName:"p"},"JavaScript Debug"),". Paste ",Object(r.b)("inlineCode",{parentName:"p"},"http://localhost:3000")," into the URL field and save the configuration."),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Note: the URL may be different if you've made adjustments via the ",Object(r.b)("a",o({parentName:"p"},{href:"/docs/advanced-configuration"}),"HOST or PORT environment variables"),".")),Object(r.b)("p",null,"Start your app by running ",Object(r.b)("inlineCode",{parentName:"p"},"npm start"),", then press ",Object(r.b)("inlineCode",{parentName:"p"},"^D")," on macOS or ",Object(r.b)("inlineCode",{parentName:"p"},"F9")," on Windows and Linux or click the green debug icon to start debugging in WebStorm."),Object(r.b)("p",null,"The same way you can debug your application in IntelliJ IDEA Ultimate, PhpStorm, PyCharm Pro, and RubyMine."),Object(r.b)("h2",{id:"formatting-code-automatically"},"Formatting Code Automatically"),Object(r.b)("p",null,"Prettier is an opinionated code formatter with support for JavaScript, CSS and JSON. With Prettier you can format the code you write automatically to ensure a code style within your project. See the ",Object(r.b)("a",o({parentName:"p"},{href:"https://github.com/prettier/prettier"}),"Prettier's GitHub page")," for more information, and look at this ",Object(r.b)("a",o({parentName:"p"},{href:"https://prettier.github.io/prettier/"}),"page to see it in action"),"."),Object(r.b)("p",null,"To format our code whenever we make a commit in git, we need to install the following dependencies:"),Object(r.b)("pre",null,Object(r.b)("code",o({parentName:"pre"},{className:"language-sh"}),"npm install --save husky lint-staged prettier\n")),Object(r.b)("p",null,"Alternatively you may use ",Object(r.b)("inlineCode",{parentName:"p"},"yarn"),":"),Object(r.b)("pre",null,Object(r.b)("code",o({parentName:"pre"},{className:"language-sh"}),"yarn add husky lint-staged prettier\n")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"husky")," makes it possible to use githooks as if they are npm scripts."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"lint-staged")," allows us to run scripts on staged files in git. See this ",Object(r.b)("a",o({parentName:"li"},{href:"https://medium.com/@okonetchnikov/make-linting-great-again-f3890e1ad6b8"}),"blog post about lint-staged to learn more about it"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"prettier")," is the JavaScript formatter we will run before commits.")),Object(r.b)("p",null,"Now we can make sure every file is formatted correctly by adding a few lines to the ",Object(r.b)("inlineCode",{parentName:"p"},"package.json")," in the project root."),Object(r.b)("p",null,"Add the following field to the ",Object(r.b)("inlineCode",{parentName:"p"},"package.json")," section:"),Object(r.b)("pre",null,Object(r.b)("code",o({parentName:"pre"},{className:"language-diff"}),'+  "husky": {\n+    "hooks": {\n+      "pre-commit": "lint-staged"\n+    }\n+  }\n')),Object(r.b)("p",null,"Next we add a 'lint-staged' field to the ",Object(r.b)("inlineCode",{parentName:"p"},"package.json"),", for example:"),Object(r.b)("pre",null,Object(r.b)("code",o({parentName:"pre"},{className:"language-diff"}),'  "dependencies": {\n    // ...\n  },\n+ "lint-staged": {\n+   "src/**/*.{js,jsx,ts,tsx,json,css,scss,md}": [\n+     "prettier --write",\n+     "git add"\n+   ]\n+ },\n  "scripts": {\n')),Object(r.b)("p",null,"Now, whenever you make a commit, Prettier will format the changed files automatically. You can also run ",Object(r.b)("inlineCode",{parentName:"p"},'./node_modules/.bin/prettier --write "src/**/*.{js,jsx,ts,tsx,json,css,scss,md}"')," to format your entire project for the first time."),Object(r.b)("p",null,"Next you might want to integrate Prettier in your favorite editor. Read the section on ",Object(r.b)("a",o({parentName:"p"},{href:"https://prettier.io/docs/en/editors.html"}),"Editor Integration")," on the Prettier GitHub page."))}u.isMDXComponent=!0},230:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return p}));var r=n(0),o=n.n(r),i=o.a.createContext({}),a=function(e){var t=o.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):Object.assign({},t,e)),n},l=function(e){var t=a(e.components);return o.a.createElement(i.Provider,{value:t},e.children)};var c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},s=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===t.indexOf(r)&&(n[r]=e[r]);return n}(e,["components","mdxType","originalType","parentName"]),s=a(n),p=r,b=s[l+"."+p]||s[p]||u[p]||i;return n?o.a.createElement(b,Object.assign({},{ref:t},c,{components:n})):o.a.createElement(b,Object.assign({},{ref:t},c))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=s;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[c]="string"==typeof e?e:r,a[1]=l;for(var p=2;p<i;p++)a[p]=n[p];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},231:function(e,t,n){"use strict";e.exports=n(232)},232:function(e,t,n){"use strict";var r=n(233),o="function"==typeof Symbol&&Symbol.for,i=o?Symbol.for("react.element"):60103,a=o?Symbol.for("react.portal"):60106,l=o?Symbol.for("react.fragment"):60107,c=o?Symbol.for("react.strict_mode"):60108,u=o?Symbol.for("react.profiler"):60114,s=o?Symbol.for("react.provider"):60109,p=o?Symbol.for("react.context"):60110,b=o?Symbol.for("react.forward_ref"):60112,d=o?Symbol.for("react.suspense"):60113;o&&Symbol.for("react.suspense_list");var f=o?Symbol.for("react.memo"):60115,m=o?Symbol.for("react.lazy"):60116;o&&Symbol.for("react.fundamental"),o&&Symbol.for("react.responder"),o&&Symbol.for("react.scope");var h="function"==typeof Symbol&&Symbol.iterator;function g(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},j={};function O(e,t,n){this.props=e,this.context=t,this.refs=j,this.updater=n||y}function v(){}function w(e,t,n){this.props=e,this.context=t,this.refs=j,this.updater=n||y}O.prototype.isReactComponent={},O.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(g(85));this.updater.enqueueSetState(this,e,t,"setState")},O.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},v.prototype=O.prototype;var N=w.prototype=new v;N.constructor=w,r(N,O.prototype),N.isPureReactComponent=!0;var S={current:null},C={current:null},k=Object.prototype.hasOwnProperty,x={key:!0,ref:!0,__self:!0,__source:!0};function E(e,t,n){var r,o={},a=null,l=null;if(null!=t)for(r in void 0!==t.ref&&(l=t.ref),void 0!==t.key&&(a=""+t.key),t)k.call(t,r)&&!x.hasOwnProperty(r)&&(o[r]=t[r]);var c=arguments.length-2;if(1===c)o.children=n;else if(1<c){for(var u=Array(c),s=0;s<c;s++)u[s]=arguments[s+2];o.children=u}if(e&&e.defaultProps)for(r in c=e.defaultProps)void 0===o[r]&&(o[r]=c[r]);return{$$typeof:i,type:e,key:a,ref:l,props:o,_owner:C.current}}function T(e){return"object"==typeof e&&null!==e&&e.$$typeof===i}var P=/\/+/g,R=[];function _(e,t,n,r){if(R.length){var o=R.pop();return o.result=e,o.keyPrefix=t,o.func=n,o.context=r,o.count=0,o}return{result:e,keyPrefix:t,func:n,context:r,count:0}}function $(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>R.length&&R.push(e)}function L(e,t,n){return null==e?0:function e(t,n,r,o){var l=typeof t;"undefined"!==l&&"boolean"!==l||(t=null);var c=!1;if(null===t)c=!0;else switch(l){case"string":case"number":c=!0;break;case"object":switch(t.$$typeof){case i:case a:c=!0}}if(c)return r(o,t,""===n?"."+I(t,0):n),1;if(c=0,n=""===n?".":n+":",Array.isArray(t))for(var u=0;u<t.length;u++){var s=n+I(l=t[u],u);c+=e(l,s,r,o)}else if(null===t||"object"!=typeof t?s=null:s="function"==typeof(s=h&&t[h]||t["@@iterator"])?s:null,"function"==typeof s)for(t=s.call(t),u=0;!(l=t.next()).done;)c+=e(l=l.value,s=n+I(l,u++),r,o);else if("object"===l)throw r=""+t,Error(g(31,"[object Object]"===r?"object with keys {"+Object.keys(t).join(", ")+"}":r,""));return c}(e,"",t,n)}function I(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function q(e,t){e.func.call(e.context,t,e.count++)}function A(e,t,n){var r=e.result,o=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?D(e,r,n,(function(e){return e})):null!=e&&(T(e)&&(e=function(e,t){return{$$typeof:i,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,o+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(P,"$&/")+"/")+n)),r.push(e))}function D(e,t,n,r,o){var i="";null!=n&&(i=(""+n).replace(P,"$&/")+"/"),L(e,A,t=_(t,i,r,o)),$(t)}function V(){var e=S.current;if(null===e)throw Error(g(321));return e}var M={Children:{map:function(e,t,n){if(null==e)return e;var r=[];return D(e,r,null,t,n),r},forEach:function(e,t,n){if(null==e)return e;L(e,q,t=_(null,null,t,n)),$(t)},count:function(e){return L(e,(function(){return null}),null)},toArray:function(e){var t=[];return D(e,t,null,(function(e){return e})),t},only:function(e){if(!T(e))throw Error(g(143));return e}},createRef:function(){return{current:null}},Component:O,PureComponent:w,createContext:function(e,t){return void 0===t&&(t=null),(e={$$typeof:p,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:s,_context:e},e.Consumer=e},forwardRef:function(e){return{$$typeof:b,render:e}},lazy:function(e){return{$$typeof:m,_ctor:e,_status:-1,_result:null}},memo:function(e,t){return{$$typeof:f,type:e,compare:void 0===t?null:t}},useCallback:function(e,t){return V().useCallback(e,t)},useContext:function(e,t){return V().useContext(e,t)},useEffect:function(e,t){return V().useEffect(e,t)},useImperativeHandle:function(e,t,n){return V().useImperativeHandle(e,t,n)},useDebugValue:function(){},useLayoutEffect:function(e,t){return V().useLayoutEffect(e,t)},useMemo:function(e,t){return V().useMemo(e,t)},useReducer:function(e,t,n){return V().useReducer(e,t,n)},useRef:function(e){return V().useRef(e)},useState:function(e){return V().useState(e)},Fragment:l,Profiler:u,StrictMode:c,Suspense:d,createElement:E,cloneElement:function(e,t,n){if(null==e)throw Error(g(267,e));var o=r({},e.props),a=e.key,l=e.ref,c=e._owner;if(null!=t){if(void 0!==t.ref&&(l=t.ref,c=C.current),void 0!==t.key&&(a=""+t.key),e.type&&e.type.defaultProps)var u=e.type.defaultProps;for(s in t)k.call(t,s)&&!x.hasOwnProperty(s)&&(o[s]=void 0===t[s]&&void 0!==u?u[s]:t[s])}var s=arguments.length-2;if(1===s)o.children=n;else if(1<s){u=Array(s);for(var p=0;p<s;p++)u[p]=arguments[p+2];o.children=u}return{$$typeof:i,type:e.type,key:a,ref:l,props:o,_owner:c}},createFactory:function(e){var t=E.bind(null,e);return t.type=e,t},isValidElement:T,version:"16.11.0",__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentDispatcher:S,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:C,IsSomeRendererActing:{current:!1},assign:r}},F={default:M},W=F&&M||F;e.exports=W.default||W},233:function(e,t,n){"use strict";var r=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable;function a(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(o){return!1}}()?Object.assign:function(e,t){for(var n,l,c=a(e),u=1;u<arguments.length;u++){for(var s in n=Object(arguments[u]))o.call(n,s)&&(c[s]=n[s]);if(r){l=r(n);for(var p=0;p<l.length;p++)i.call(n,l[p])&&(c[l[p]]=n[l[p]])}}return c}}}]);