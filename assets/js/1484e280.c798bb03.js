"use strict";(self.webpackChunknvchad_site=self.webpackChunknvchad_site||[]).push([[344],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=a.createContext({}),c=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),s=c(n),m=i,f=s["".concat(u,".").concat(m)]||s[m]||d[m]||l;return n?a.createElement(f,r(r({ref:t},p),{},{components:n})):a.createElement(f,r({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,r=new Array(l);r[0]=s;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:i,r[1]=o;for(var c=2;c<l;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},3515:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return p},default:function(){return s}});var a=n(7462),i=n(3366),l=(n(7294),n(3905)),r=["components"],o={},u=void 0,c={unversionedId:"config/Custom config",id:"config/Custom config",isDocsHomePage:!1,title:"Custom config",description:"How to make my own config?",source:"@site/docs/config/Custom config.md",sourceDirName:"config",slug:"/config/Custom config",permalink:"/config/Custom config",version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Nvim lua stuff",permalink:"/config/Nvim lua stuff"},next:{title:"Default mappings",permalink:"/config/Default mappings"}},p=[{value:"How to make my own config?",id:"how-to-make-my-own-config",children:[]},{value:"Replace default config of a plugin",id:"replace-default-config-of-a-plugin",children:[{value:"Add new plugins",id:"add-new-plugins",children:[]},{value:"Add new mappings",id:"add-new-mappings",children:[]},{value:"Autocmds",id:"autocmds",children:[]},{value:"Files to edit",id:"files-to-edit",children:[]}]},{value:"Lazy loading",id:"lazy-loading",children:[]}],d={toc:p};function s(e){var t=e.components,n=(0,i.Z)(e,r);return(0,l.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"how-to-make-my-own-config"},"How to make my own config?"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Go to custom folder")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"cp example_chadrc.lua chadrc.lua")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"cp example_init.lua init.lua")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"The chadrc here is for editing nvchad default options etc.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"The init.lua here will be used for adding new plugins , new plugin configs , replace default plugin configs , adding new mappings."))),(0,l.kt)("h2",{id:"replace-default-config-of-a-plugin"},"Replace default config of a plugin"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Use the default_plugin_config_replace table in chadrc.lua")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Example :"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},'M.plugins = {\n   default_plugin_config_replace = {\n      lspconfig = "custom.lspconfig",\n   },\n}\n\n-- this will replace lspconfig\'s default config with the file custom/lspconfig.lua\n-- make sure you do :PackerCompile or :PackerSync after this since the packer_compiled.vim or packer_compiled.lua present in the ~/.config/nvim/plugin dir needs to update the paths!\n')),(0,l.kt)("h3",{id:"add-new-plugins"},"Add new plugins"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Go to init.lua file in custom folder")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},'Uncomment the line hooks.add line containing the "install_plugins" stuff')),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"example :"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},'\nhooks.add("install_plugins", function(use)\n   use {\n       "folke/which-key.nvim"\n        event = "something",\n        config = function()\n            require("custom.plugin_confs.whichkey")\n        end\n    }\n end)\n\n-- so the path of the config here basically is in the custom/plugin_confs/whichkey.lua\n')),(0,l.kt)("h3",{id:"add-new-mappings"},"Add new mappings"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},'\n hooks.add("setup_mappings", function(map)\n    map("n", "<leader>cc", "dd", opt) -- example to delete the buffer\n    .... many more mappings ....\n end)\n\n')),(0,l.kt)("h3",{id:"autocmds"},"Autocmds"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Well, for example you just create a new file called autochad_cmds.lua in the custom folder and require it in the init.lua file of the custom folder! BOOOM!!")),(0,l.kt)("h3",{id:"files-to-edit"},"Files to edit"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Only files that are supposed to edited by the user are meant to be in the custom dir, default files in that folder are example_chadrc and example_init which can be just renamed by the user into chadrc.lua and init.lua .")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"The rest of the files outside the custom folder will get overwritten by the update so don't put your config there!! Just put it in the custom folder."))),(0,l.kt)("p",null,"(note : The docs will be refined and updated more if there are any inaccuracies)"),(0,l.kt)("h2",{id:"lazy-loading"},"Lazy loading"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"We lazy load almost 95% of the plugins, so we expect you to lazy load the plugins you've added to reduce startuptime. Don't want users making NvChad slow just because they didn't lazy load plugins they've added!")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Check ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/wbthomason/packer.nvim#specifying-plugins"},"packer's readme")," for more info!"))),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://cdn.discordapp.com/attachments/610012463907209227/891011437810577480/863483056531046450.png",alt:"lessgooo"})))}s.isMDXComponent=!0}}]);