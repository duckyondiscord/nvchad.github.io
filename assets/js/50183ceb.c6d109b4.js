"use strict";(self.webpackChunknvchad_site=self.webpackChunknvchad_site||[]).push([[814],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return m}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var u=a.createContext({}),s=function(e){var n=a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=s(e.components);return a.createElement(u.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=s(t),m=r,g=d["".concat(u,".").concat(m)]||d[m]||c[m]||l;return t?a.createElement(g,i(i({ref:n},p),{},{components:t})):a.createElement(g,i({ref:n},p))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,i=new Array(l);i[0]=d;var o={};for(var u in n)hasOwnProperty.call(n,u)&&(o[u]=n[u]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=t[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},4877:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return o},contentTitle:function(){return u},metadata:function(){return s},toc:function(){return p},default:function(){return d}});var a=t(7462),r=t(3366),l=(t(7294),t(3905)),i=["components"],o={id:"learn-lua",title:"Learning Lua"},u=void 0,s={unversionedId:"getting-started/learn-lua",id:"getting-started/learn-lua",isDocsHomePage:!1,title:"Learning Lua",description:"Note: This is a very basic lua tutorial to get you familiar with NvChad config",source:"@site/docs/getting-started/learn-lua.md",sourceDirName:"getting-started",slug:"/getting-started/learn-lua",permalink:"/getting-started/learn-lua",version:"current",frontMatter:{id:"learn-lua",title:"Learning Lua"},sidebar:"docs",previous:{title:"Post Install",permalink:"/getting-started/post-install"},next:{title:"Walkthrough",permalink:"/config/Walkthrough"}},p=[{value:"Printing",id:"printing",children:[]},{value:"Comments",id:"comments",children:[]},{value:"Variables",id:"variables",children:[]},{value:"Conditional Statements",id:"conditional-statements",children:[]},{value:"Functions",id:"functions",children:[]},{value:"Scope",id:"scope",children:[]},{value:"Loops",id:"loops",children:[]},{value:"Tables",id:"tables",children:[]},{value:"Modules",id:"modules",children:[]}],c={toc:p};function d(e){var n=e.components,t=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Note: This is a very basic lua tutorial to get you familiar with NvChad config")),(0,l.kt)("h2",{id:"printing"},"Printing"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},'print("Hi")\n')),(0,l.kt)("h2",{id:"comments"},"Comments"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},'-- a comment\nprint("hi") -- another comment\n')),(0,l.kt)("h2",{id:"variables"},"Variables"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},'-- Different types\nlocal x = 10 -- number\nlocal name = "Sid" -- string\nlocal isAlive = true -- boolean\nlocal a = nil --no value or invalid value\n')),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Numbers")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"-- examples\nlocal a = 1\nlocal b = 2\n\nprint(a + b) -- 3\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"-- increment\nlocal level = 1\nlevel = level + 1\nprint(level) -- 2\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Strings")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},'-- concatenate strings\nlocal phrase = "I am"\nlocal name = "Sid"\nprint(phase .. name) -- I am Sid\n\n-- strings and numbers\nlocal name = "NvChad"\nprint(name .. "v" .. 1.0) -- NvChad v1.0\n')),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Boolean")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"local isAlive = true\nprint(isAlive) -- true\n\nisAlive = false\nprint(isAlive) -- false\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Comparison Operators")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"== equality"),(0,l.kt)("li",{parentName:"ul"},"< less than"),(0,l.kt)("li",{parentName:"ul"},">"," greater than"),(0,l.kt)("li",{parentName:"ul"},"<= less than or equal to"),(0,l.kt)("li",{parentName:"ul"},">","= greater than or equal to"),(0,l.kt)("li",{parentName:"ul"},"~= inequality")),(0,l.kt)("h2",{id:"conditional-statements"},"Conditional Statements"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},'-- number comparisions\nlocal age = 10\n\nif age > 18 then\n  print("over 18") -- this will not be executed\nend\n\n-- elseif and else\nage = 20\n\nif age > 18 then\n  print("over 18")\nelseif age == 18 then\n  print("18 huh")\nelse\n  print("kiddo")\nend\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},'-- boolean comparision\nlocal isAlive = true\n\nif isAlive then\n    print("Be grateful!")\nend\n\n-- string comparisions\nlocal name = "sid"\n\nif name ~= "sid" then\n  print("not sid")\n')),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Combining Statements")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},'local age = 22\n\nif age == 10 and x > 0 then -- both should be true\n  print("kiddo!")\nelseif x == 18 or x > 18 then -- 1 or more are true\n  print("over 18")\nend\n\n--result: over 18\n')),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Invert Value")),(0,l.kt)("p",null,"you can also invert a value with the ",(0,l.kt)("strong",{parentName:"p"},"not")," keyword"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},'local x = 18\n\nif not x == 18 then\n  print("kiddo!")\nend\n')),(0,l.kt)("h2",{id:"functions"},"Functions"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"function num(a)\n  print(a)\nend\n\nor\n\nlocal num = function(a)\n  print(a)\nend\n\nnum(5)\n\n-- result : 5\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"-- multiple parameters\n\nfunction sum(a + b)\n  local result = a + b\n  print(result)\nend\n")),(0,l.kt)("h2",{id:"scope"},"Scope"),(0,l.kt)("p",null,"Variables have different scopes. Once the end of the scope is reached the values in that scope are no longer accessable"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"function foo()\n  local n = 10\nend\n\nprint(n) -- nil , n isnt accessable outside foo()\n")),(0,l.kt)("h2",{id:"loops"},"Loops"),(0,l.kt)("p",null,"Different ways to make a loop"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},'-- while loop\nlocal i = 0\n\nwhile i <= 3 do\n   print("hi")\n   i = i + 1\nend\n\nOR\n\n--for loop\nfor i = 0, 3 do\n   print("hi")\n   i = i + 1\nend\n\n-- result\nhi\nhi\nhi\n')),(0,l.kt)("h2",{id:"tables"},"Tables"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},'-- basic table\nlocal colors = { "red", "green", "blue" }\n\nprint(colors[1]) --red\nprint(colors[2]) --green\nprint(colors[3]) --blue\n\n-- use a loop to iterate though the table\nfor i=1, #colors do\n  print(colors[i])\nend\n')),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Two Dimensional Table")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},'--tables within tables\nlocal data = {\n    { "billy", 12 },\n    { "john", 20 },\n}\n\nfor i = 1, #data do\n  print(data[i][1] .. " is " .. data[i][2] .. " years old")\nend\n')),(0,l.kt)("h2",{id:"modules"},"Modules"),(0,l.kt)("p",null,"Include code other files"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},'require("otherfile")\n')),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Credits - Modified version of this ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/pohka/Lua-Beginners-Guide"},"guide"))))}d.isMDXComponent=!0}}]);