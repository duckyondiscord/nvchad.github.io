"use strict";(self.webpackChunknvchad_site=self.webpackChunknvchad_site||[]).push([[459],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=p(n),m=i,h=d["".concat(s,".").concat(m)]||d[m]||c[m]||a;return n?r.createElement(h,l(l({ref:t},u),{},{components:n})):r.createElement(h,l({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var p=2;p<a;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3148:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>a,metadata:()=>o,toc:()=>p});var r=n(7462),i=(n(7294),n(3905));const a={id:"setup",title:"Setup",sidebar_position:1},l=void 0,o={unversionedId:"getting-started/setup",id:"getting-started/setup",title:"Setup",description:"Try NvChad in a Docker container",source:"@site/docs/getting-started/setup.md",sourceDirName:"getting-started",slug:"/getting-started/setup",permalink:"/getting-started/setup",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"setup",title:"Setup",sidebar_position:1},sidebar:"docs",next:{title:"post-install",permalink:"/getting-started/post-install"}},s={},p=[{value:"Try NvChad in a Docker container",id:"try-nvchad-in-a-docker-container",level:2},{value:"Pre-requisites",id:"pre-requisites",level:2},{value:"Semi-optional",id:"semi-optional",level:3},{value:"Install",id:"install",level:2},{value:"Linux / macos (UNIX)",id:"linux--macos-unix",level:3},{value:"Windows",id:"windows",level:3},{value:"Update",id:"update",level:2},{value:"Uninstall",id:"uninstall",level:2}],u={toc:p};function c(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"try-nvchad-in-a-docker-container"},"Try NvChad in a Docker container"),(0,i.kt)("p",null,"This will leave your current Neovim configuration untouched. Once you exit Neovim, the image is deleted."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-zsh"},"  docker run -w /root -it --rm alpine:edge sh -uelic '\n    apk add git nodejs neovim ripgrep alpine-sdk --update\n    git clone https://github.com/NvChad/NvChad ~/.config/nvim\n    nvim\n    '\n")),(0,i.kt)("h2",{id:"pre-requisites"},"Pre-requisites"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/neovim/neovim/releases/tag/v0.7.0"},"Neovim 0.7.0 install page")),(0,i.kt)("li",{parentName:"ul"},"If neovim's very old for your OS then consider trying this ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/MordechaiHadad/bob"},"neovim version manager")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.nerdfonts.com/"},"Use a Nerd Font")," in your terminal emulator.")),(0,i.kt)("h3",{id:"semi-optional"},"Semi-optional"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/BurntSushi/ripgrep"},(0,i.kt)("inlineCode",{parentName:"a"},"ripgrep"))," is required for grep searching with ",(0,i.kt)("em",{parentName:"li"},"Telescope"))),(0,i.kt)("h2",{id:"install"},"Install"),(0,i.kt)("h3",{id:"linux--macos-unix"},"Linux / macos (UNIX)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"git clone https://github.com/NvChad/NvChad ~/.config/nvim --depth 1 ; nvim\n")),(0,i.kt)("h3",{id:"windows"},"Windows"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"git clone https://github.com/NvChad/NvChad $HOME\\AppData\\Local\\nvim --depth 1 ; nvim\n")),(0,i.kt)("p",null,"(Note: windows users must have  ",(0,i.kt)("a",{parentName:"p",href:"http://mingw-w64.org/doku.php"},(0,i.kt)("inlineCode",{parentName:"a"},"mingw"))," installed & set on path))"),(0,i.kt)("h2",{id:"update"},"Update"),(0,i.kt)("p",null,"NvChad has an update mechanism built-in, which will pull any new updates to the git repository."),(0,i.kt)("p",null,"Activate it by running ",(0,i.kt)("inlineCode",{parentName:"p"},"<leader> + uu"),"."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Note: by NvChad default, ",(0,i.kt)("inlineCode",{parentName:"li"},"<leader>")," is the ",(0,i.kt)("inlineCode",{parentName:"li"},"<space>")," key")),(0,i.kt)("p",null,"This will open a prompt in NeoVim warning you that it is about to do a ",(0,i.kt)("inlineCode",{parentName:"p"},"git reset --hard")," and ",(0,i.kt)("strong",{parentName:"p"},"you will lose any customisations")," you've made to NvChad that are not in designated customisation folders."),(0,i.kt)("h2",{id:"uninstall"},"Uninstall"),(0,i.kt)("p",null,"Uninstalling is as simple as removing the ",(0,i.kt)("inlineCode",{parentName:"p"},"nvim")," configuration directories."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"rm -rf ~/.config/nvim\nrm -rf ~/.local/share/nvim\nrm -rf ~/.cache/nvim\n")))}c.isMDXComponent=!0}}]);