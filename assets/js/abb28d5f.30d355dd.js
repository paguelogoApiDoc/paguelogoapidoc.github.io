"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[241],{3905:function(e,a,t){t.d(a,{Zo:function(){return c},kt:function(){return m}});var n=t(7294);function o(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){o(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,n,o=function(e,a){if(null==e)return{};var t,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(o[t]=e[t]);return o}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=n.createContext({}),l=function(e){var a=n.useContext(u),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},c=function(e){var a=l(e.components);return n.createElement(u.Provider,{value:a},e.children)},d={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},p=n.forwardRef((function(e,a){var t=e.components,o=e.mdxType,r=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=l(t),m=o,f=p["".concat(u,".").concat(m)]||p[m]||d[m]||r;return t?n.createElement(f,i(i({ref:a},c),{},{components:t})):n.createElement(f,i({ref:a},c))}));function m(e,a){var t=arguments,o=a&&a.mdxType;if("string"==typeof e||o){var r=t.length,i=new Array(r);i[0]=p;var s={};for(var u in a)hasOwnProperty.call(a,u)&&(s[u]=a[u]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<r;l++)i[l]=t[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},5751:function(e,a,t){t.r(a),t.d(a,{frontMatter:function(){return s},contentTitle:function(){return u},metadata:function(){return l},toc:function(){return c},default:function(){return p}});var n=t(7462),o=t(3366),r=(t(7294),t(3905)),i=["components"],s={sidebar_position:1},u="Introdu\xe7\xe3o",l={unversionedId:"introducao",id:"introducao",isDocsHomePage:!1,title:"Introdu\xe7\xe3o",description:"Todas as requisi\xe7\xf5es que utilizamos seguem o formato JSON, tanto para envio, quanto para resposta. E precisam de algumas configura\xe7\xf5es padr\xf5es para que seja poss\xedvel a comunica\xe7\xe3o. Segue abaixo mais detalhes.",source:"@site/docs/introducao.md",sourceDirName:".",slug:"/introducao",permalink:"/docs/introducao",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Autentica\xe7\xe3o",permalink:"/docs/autenticacao"}},c=[{value:"URL (Caminho Absoluto)",id:"url-caminho-absoluto",children:[],level:2},{value:"Primeiros Passos",id:"primeiros-passos",children:[],level:2},{value:"Autentica\xe7\xe3o",id:"autentica\xe7\xe3o",children:[{value:"Cabe\xe7alhos",id:"cabe\xe7alhos",children:[],level:3}],level:2},{value:"Funcionalidades abertas",id:"funcionalidades-abertas",children:[],level:2}],d={toc:c};function p(e){var a=e.components,t=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,n.Z)({},d,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"introdu\xe7\xe3o"},"Introdu\xe7\xe3o"),(0,r.kt)("p",null,"Todas as requisi\xe7\xf5es que utilizamos seguem o formato ",(0,r.kt)("strong",{parentName:"p"},"JSON"),", tanto para envio, quanto para resposta. E precisam de algumas configura\xe7\xf5es padr\xf5es para que seja poss\xedvel a comunica\xe7\xe3o. Segue abaixo mais detalhes."),(0,r.kt)("h2",{id:"url-caminho-absoluto"},"URL (Caminho Absoluto)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="Produ\xe7\xe3o"',title:'"Produ\xe7\xe3o"'},"https://paguelogo.com.br/api\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="Desenvolvimento"',title:'"Desenvolvimento"'},"https://sandbox.paguelogo.com.br/api\n")),(0,r.kt)("h2",{id:"primeiros-passos"},"Primeiros Passos"),(0,r.kt)("p",null,"Para come\xe7ar a utilizar os nossos servi\xe7os REST, deve-se primeiramente fazer a autentica\xe7\xe3o no sistema. E logo ap\xf3s j\xe1 pode acessar qualquer funcionalidade a partir de sua URL."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\xa0","Autentica\xe7\xe3o  "),(0,r.kt)("li",{parentName:"ol"},"\xa0","Acesso \xe0s funcinalidades passando os dados recebidos da autentica\xe7\xe3o nos cabe\xe7alhos das requisi\xe7\xf5es.")),(0,r.kt)("h2",{id:"autentica\xe7\xe3o"},"Autentica\xe7\xe3o"),(0,r.kt)("p",null,"Para a autentica\xe7\xe3o n\xf3s usamos o padr\xe3o oAuth2. E para tal, a maior parte de nossos endpoints do webservice REST, precisam que mais 2 cabe\xe7alhos de requisi\xe7\xe3o sejam inseridos:"),(0,r.kt)("h3",{id:"cabe\xe7alhos"},"Cabe\xe7alhos"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Nome"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Valor"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Observa\xe7\xe3o"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Authorization"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Bearer ","[token]"),(0,r.kt)("td",{parentName:"tr",align:"left"},'Token de autentica\xe7\xe3o fornecido atrav\xe9s do endpoint "Autentica\xe7\xe3o"')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Whois"),(0,r.kt)("td",{parentName:"tr",align:"left"},"[c\xf3digo \xfanico do usu\xe1rio]"),(0,r.kt)("td",{parentName:"tr",align:"left"},'Cada usu\xe1rio tem um c\xf3digo \xfanico que \xe9 fornecido atrav\xe9s do endpoint de "Autentica\xe7\xe3o"')))),(0,r.kt)("p",null,"Quando a funcionalidade exigir esses cabe\xe7alho, a pr\xf3pria API informar\xe1 essa necessidade e aqui tamb\xe9m na documenta\xe7\xe3o, para cada request, estamos refor\xe7ando quando ser\xe1 necess\xe1rio ou n\xe3o."),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),(0,r.kt)("em",{parentName:"h5"},"Authorization"))),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},'O cabe\xe7alho "Authorization" deve ter o valor no seguinte padr\xe3o: "Bearer " + "',"[token]",'". Ou seja, deve ter o texto "Bearer" seguido de um espa\xe7o em branco, e logo ap\xf3s o token fornecido na autentica\xe7\xe3o.'))),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),(0,r.kt)("em",{parentName:"h5"},"Whois"))),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},'O cabe\xe7alho "Whois" \xe9 um valor num\xe9rico fornecido tamb\xe9m na autentica\xe7\xe3o do usu\xe1rio.'))),(0,r.kt)("h2",{id:"funcionalidades-abertas"},"Funcionalidades abertas"),(0,r.kt)("p",null,"Algumas funcionalidades n\xe3o precisam de autentica\xe7ao, pois se referem justamente aos meios necess\xe1rios para se autenticar, ou mesmo para recuperar acesso. Segue abaixo funcionalidades que n\xe3o necessitam de autentica\xe7\xe3o."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Autentica\xe7\xe3o"),(0,r.kt)("li",{parentName:"ul"},"Recuperar Senha"),(0,r.kt)("li",{parentName:"ul"},"Contato (Empresa)")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Fora essas funcionalidades acima, todas as outras necessitam que o usu\xe1rio esteja autenticado.")))}p.isMDXComponent=!0}}]);