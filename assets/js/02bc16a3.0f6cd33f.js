"use strict";(self.webpackChunknvchad_site=self.webpackChunknvchad_site||[]).push([[719],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return m}});var l=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);n&&(l=l.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,l)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,l,a=function(e,n){if(null==e)return{};var t,l,a={},r=Object.keys(e);for(l=0;l<r.length;l++)t=r[l],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)t=r[l],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=l.createContext({}),p=function(e){var n=l.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=p(e.components);return l.createElement(o.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return l.createElement(l.Fragment,{},n)}},f=l.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),f=p(t),m=a,g=f["".concat(o,".").concat(m)]||f[m]||u[m]||r;return t?l.createElement(g,i(i({ref:n},c),{},{components:t})):l.createElement(g,i({ref:n},c))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,i=new Array(r);i[0]=f;var s={};for(var o in n)hasOwnProperty.call(n,o)&&(s[o]=n[o]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<r;p++)i[p]=t[p];return l.createElement.apply(null,i)}return l.createElement.apply(null,t)}f.displayName="MDXCreateElement"},3442:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return o},metadata:function(){return p},toc:function(){return c},default:function(){return f}});var l=t(7462),a=t(3366),r=(t(7294),t(3905)),i=["components"],s={},o=void 0,p={unversionedId:"config/Lsp stuff",id:"config/Lsp stuff",isDocsHomePage:!1,title:"Lsp stuff",description:"Setup lsp server",source:"@site/docs/config/Lsp stuff.md",sourceDirName:"config",slug:"/config/Lsp stuff",permalink:"/config/Lsp stuff",version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Default mappings",permalink:"/config/Default mappings"},next:{title:"Format & lint",permalink:"/config/Format & lint"}},c=[{value:"Setup lsp server",id:"setup-lsp-server",children:[]},{value:"lsp-installer",id:"lsp-installer",children:[{value:"Basic config",id:"basic-config",children:[]},{value:"Advanced config",id:"advanced-config",children:[]}]}],u={toc:c};function f(e){var n=e.components,t=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,l.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"setup-lsp-server"},"Setup lsp server"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Skim through ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/neovim/nvim-lspconfig"},"lspconfig repo")," to get a general overview of how the config looks/works.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Then check ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/neovim/nvim-lspconfig/blob/master/CONFIG.md"},"lspconfig_config.md")," to make sure your language's lsp server is present there.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Create a file in your custom folder. (I would suggest creating plugins dir in custom folder , so /custom/plugins/lspconfig.lua is the config file for this example).")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Enter the file path in the chadrc's lspconfig section :"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},'M.plugins = {\n   options = {\n      lspconfig = {\n         setup_lspconf = "",\n      },\n   },\n}\n\n-- so setup_lspconf = "custom.plugins.lspconfig" as per our example\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Your lspconfig must contain these :")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},'local M = {}\n\nM.setup_lsp = function(attach, capabilities)\n   local lspconfig = require "lspconfig"\n\n   lspconfig.lspname.setup {\n      on_attach = attach,\n      capabilities = capabilities,\n   }\nend\n\nreturn M\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"For example if you wanted to setup html lsp :")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},'local M = {}\n\nM.setup_lsp = function(attach, capabilities)\n   local lspconfig = require "lspconfig"\n\n   lspconfig.html.setup {\n      on_attach = attach,\n      capabilities = capabilities,\n   }\nend\n\nreturn M\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The following file is an example lspconfig file :")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},'local M = {}\n\nM.setup_lsp = function(attach, capabilities)\n   local lspconfig = require "lspconfig"\n\n   -- lspservers with default config\n\n   local servers = { "html", "cssls", "pyright" }\n\n   for _, lsp in ipairs(servers) do\n      lspconfig[lsp].setup {\n         on_attach = attach,\n         capabilities = capabilities,\n         flags = {\n            debounce_text_changes = 150,\n         },\n      }\n   end\n   \n   -- typescript\n\n lspconfig.tsserver.setup {\n      on_attach = function(client, bufnr)\n         client.resolved_capabilities.document_formatting = false\n         vim.api.nvim_buf_set_keymap(bufnr, "n", "<space>fm", "<cmd>lua vim.lsp.buf.formatting()<CR>", {})\n      end,\n   }\n\n-- the above tsserver config will remvoe the tsserver\'s inbuilt formatting \n-- since I use null-ls with denofmt for formatting ts/js stuff.\nend\n\nreturn M\n\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Note : I have used a loop there since I'm just using default lspconfigs and it looks cleaner that way , without the loop it would've been very ugly , something like this :")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"  lspconfig.html.setup { my options }\n  lspconfig.cssls.setup { my options }\n  lspconfig.pyright.setup { my options }\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},'Then install that lspserver, if you get issues like "cmd not executable" in :LspInfo, then install that lspservers globally in your system.')),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"I've had that same issue with some lspservers which were installed by npm and it got fixed by installing those npm packages globally :"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"npm config set prefix=~/.node_modules\n\nadd ~/.node_modules/bin to PATH\n")),(0,r.kt)("h2",{id:"lsp-installer"},"lsp-installer"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"If you don't like copy pasting configs for your lspservers and installing lspservers manually , then try nvim-lspinstalller."),(0,r.kt)("li",{parentName:"ul"},"Basic Sample config : (custom/init.lua hooks section for install_plugins)")),(0,r.kt)("h3",{id:"basic-config"},"Basic config"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},' use {\n      "williamboman/nvim-lsp-installer",\n      config = function()\n         local lsp_installer = require "nvim-lsp-installer"\n\n         lsp_installer.on_server_ready(function(server)\n            local opts = {}\n\n            server:setup(opts)\n            vim.cmd [[ do User LspAttachBuffers ]]\n         end)\n      end,\n   }\n')),(0,r.kt)("h3",{id:"advanced-config"},"Advanced config"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The following config shows how lsp-installer + custom user keybinds (for codeactions) is done in the lspconfig. (custom/plugins/lspconfig) , if this is done then the above config within lsp-installer's use{} section shouldn't be done so only :")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},' use {\n      "williamboman/nvim-lsp-installer",\n   }\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},'\nlocal M = {}\n\nM.setup_lsp = function(attach, capabilities)\n   local lsp_installer = require "nvim-lsp-installer"\n\n   lsp_installer.on_server_ready(function(server)\n      local opts = {\n         on_attach = attach,\n         capabilities = capabilities,\n         flags = {\n            debounce_text_changes = 150,\n         },\n         settings = {},\n      }\n\n      if server.name == "rust_analyzer" then\n         opts.settings = {\n            ["rust-analyzer"] = {\n               experimental = {\n                  procAttrMacros = true,\n               },\n            },\n         }\n\n         opts.on_attach = function(client, bufnr)\n            local function buf_set_keymap(...)\n               vim.api.nvim_buf_set_keymap(bufnr, ...)\n            end\n\n            -- Run nvchad\'s attach\n            attach(client, bufnr)\n\n            -- Use nvim-code-action-menu for code actions for rust\n            buf_set_keymap(bufnr, "n", "<leader>ca", "lua vim.lsp.buf.range_code_action()<CR>", { noremap = true, silent = true })\n            buf_set_keymap(bufnr, "v", "<leader>ca", "lua vim.lsp.buf.range_code_action()<CR>", { noremap = true, silent = true })\n         end\n      end\n\n      server:setup(opts)\n      vim.cmd [[ do User LspAttachBuffers ]]\n   end)\nend\n\nreturn M\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Basic ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/williamboman/nvim-lsp-installer/#commands"},"lsp_installer commands"))))}f.isMDXComponent=!0}}]);